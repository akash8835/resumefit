const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {DatabaseSync}=require('node:sqlite');
const {webcrypto}=require('node:crypto');
const path=require('node:path');
const zlib=require('node:zlib');
const root=path.join(__dirname,'..');
const worker=fs.readFileSync(path.join(root,'worker.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const context={DurableObject:class {},crypto:webcrypto,TextEncoder,TextDecoder,Request,Response,URL,FormData,atob,btoa,console};
vm.createContext(context);
vm.runInContext(worker.replace('import { DurableObject } from "cloudflare:workers";','').replace('export class AnalyticsDB','class AnalyticsDB').replace('export default {','const workerHandler = {')+'\nglobalThis.api={AnalyticsDB,consentedDetails,shareResume,resumeDetailsCells,adminPanel,EXPORT_COLS};',context);
const {api}=context;
const version='2026-09-25-v1';
const now=Date.now();
const ua='Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130.0.0.0 Safari/537.36';
const valid={consent_version:version,phone_consent:true,phone:'+1 202-555-0123',device_consent:true,location_consent:true,location:{latitude:0,longitude:0,accuracy:20,captured_at:new Date(now).toISOString()}};
function database(){
 const sqlite=new DatabaseSync(':memory:');
 const sql={exec(query,...params){const st=sqlite.prepare(query);if(st.columns().length)return {toArray:()=>st.all(...params)};st.run(...params);return {toArray:()=>[]};}};
 sql.exec('CREATE TABLE shared_resumes (id INTEGER PRIMARY KEY AUTOINCREMENT, consent_ts TEXT NOT NULL, consent_text TEXT, filename TEXT, mime TEXT, file_b64 TEXT, text TEXT, text_hash TEXT, country TEXT, region TEXT, device TEXT)');
 sql.exec("INSERT INTO shared_resumes (consent_ts,text_hash) VALUES ('2026-09-24','legacy')");
 const db=new api.AnalyticsDB({storage:{sql}},{});
 return {db,sql,sqlite,env:{DB:{idFromName:()=> 'main',get:()=>db}}};
}
function request(extra={}){return new Request('https://example.test/api/share-resume',{method:'POST',headers:{'content-type':'application/json','user-agent':ua},body:JSON.stringify({consent:true,text:'Fictional candidate resume for testing with sufficiently long text.',...extra})});}

test('optional values without literal consent are discarded',()=>{
 for(const flag of [undefined,false,'true',1]){
 const r=api.consentedDetails({...valid,phone_consent:flag,device_consent:flag,location_consent:flag},ua,now);
 assert(Object.values(r).every(v=>v===null));
 }
});
test('separate choices, version, phone and coordinates are validated',()=>{
 const r=api.consentedDetails(valid,ua,now);
 assert.equal(r.phone,'+12025550123');assert.equal(r.latitude,0);assert.equal(r.longitude,0);assert.equal(r.browser,'Chrome');assert.equal(r.device_category,'Desktop');assert.match(r.details_consent_text,/mobile number/);
 assert.throws(()=>api.consentedDetails({...valid,consent_version:'old'},ua,now));
 for(const phone of ['9876543210','+0123456789','+1<script>','+123',null])assert.throws(()=>api.consentedDetails({...valid,phone},ua,now));
 for(const location of [{...valid.location,latitude:91},{...valid.location,longitude:'10'},{...valid.location,accuracy:-1},{...valid.location,captured_at:new Date(now-700000).toISOString()},{...valid.location,captured_at:new Date(now+120000).toISOString()}])assert.throws(()=>api.consentedDetails({...valid,location},ua,now));
 const onlyPhone=api.consentedDetails({...valid,location_consent:false,device_consent:false},ua,now);
 assert.equal(onlyPhone.latitude,null);assert.equal(onlyPhone.browser,null);assert.equal(onlyPhone.location_consent_ts,null);
});
test('migration is additive, repeatable, and preserves historic records',()=>{
 const {db,sql,sqlite}=database();
 new api.AnalyticsDB({storage:{sql}},{});
 const r=db.exportTable('shared_resumes')[0];assert.equal(r.id,1);assert.equal(r.phone,null);assert.equal(r.latitude,null);sqlite.close();
});
test('API stores opted-in details; retries deduplicate without merging people',async()=>{
 const {db,env,sqlite}=database();const id=webcrypto.randomUUID();
 assert.equal((await api.shareResume(request({details:valid,submission_id:id}),env)).status,200);
 assert.equal((await api.shareResume(request({details:valid,submission_id:id}),env)).status,200);
 assert.equal(db.exportTable('shared_resumes').length,2);
 const stored=db.exportTable('shared_resumes')[1];assert.equal(stored.phone,'+12025550123');assert.equal(stored.latitude,0);assert.equal(stored.browser,'Chrome');assert(stored.phone_consent_ts);
 await api.shareResume(request({details:{...valid,phone:'+12025550124'},submission_id:webcrypto.randomUUID()}),env);
 assert.equal(db.exportTable('shared_resumes').length,3);assert.equal(db.exportTable('shared_resumes')[1].phone,'+12025550123');
 const rows=db.report().resumes;assert(rows.some(r=>r.phone==='+12025550124'));
 assert(api.EXPORT_COLS.shared_resumes.includes('location_accuracy'));assert(api.EXPORT_COLS.shared_resumes.includes('phone_consent_ts'));
 db.deleteRow('shared_resumes',stored.id);assert(!db.exportTable('shared_resumes').some(r=>r.id===stored.id));sqlite.close();
});
test('API rejects malformed metadata and accepts opt-out',async()=>{
 const {db,env,sqlite}=database();
 assert.equal((await api.shareResume(request({details:{...valid,phone:'invalid'}}),env)).status,400);
 assert.equal((await api.shareResume(request({consent:false,details:valid}),env)).status,400);
 const r=await api.shareResume(request({details:{phone:'sensitive',location:valid.location}}),env);assert.equal(r.status,200);
 const stored=db.exportTable('shared_resumes')[1];assert.equal(stored.phone,null);assert.equal(stored.latitude,null);sqlite.close();
});
test('admin details escape content and exports require login',async()=>{
 const cells=api.resumeDetailsCells({...api.consentedDetails(valid,ua,now),device:'<script>alert(1)</script>'});
 assert(!cells.includes('<script>'));assert(cells.includes('&lt;script&gt;'));assert(cells.includes('unverified'));assert(cells.includes('0.000000, 0.000000'));
 assert.match(api.resumeDetailsCells({}),/Not shared/);
 const response=await api.adminPanel(new Request('https://example.test/admin?format=export&table=shared_resumes'),{});
 assert.match(response.headers.get('content-type'),/html/);assert.equal(response.headers.get('cache-control'),'no-store');
});
test('frontend never requests location on load and ignores late revoked callbacks',()=>{
 const elements={};const el=id=>elements[id]??={checked:false,value:'',disabled:false,textContent:'',addEventListener(n,f){this[n]=f},focus(){}};
 let calls=0,ok,fail;
 const ctx={document:{getElementById:el},navigator:{geolocation:{getCurrentPosition(a,b){calls++;ok=a;fail=b;}}},Date,Math,Error};vm.createContext(ctx);
 vm.runInContext(html.slice(html.indexOf('var rfLocation=null'),html.indexOf('async function rfShareResume(')),ctx);
 assert.equal(calls,0);assert.equal(ctx.optionalDetails().phone,null);
 el('locationConsent').checked=true;el('locationConsent').change();el('captureLocation').click();assert.equal(calls,1);
 el('locationConsent').checked=false;el('locationConsent').change();ok({coords:{latitude:1,longitude:2,accuracy:10},timestamp:Date.now()});assert.equal(ctx.optionalDetails().location,null);
 el('locationConsent').checked=true;el('locationConsent').change();el('captureLocation').click();fail({code:1});assert.equal(ctx.optionalDetails().location_consent,false);assert.match(el('locationStatus').textContent,/denied/);
 el('captureLocation').click();ok({coords:{latitude:0,longitude:0,accuracy:12},timestamp:Date.now()});assert.equal(ctx.optionalDetails().location.accuracy,12);
 el('phoneConsent').checked=true;el('phoneConsent').change();el('contactPhone').value='+12025550123';assert.equal(ctx.optionalDetails().phone,'+12025550123');el('phoneConsent').checked=false;el('phoneConsent').change();assert.equal(el('contactPhone').value,'');assert.equal(ctx.optionalDetails().phone,null);
});
test('embedded frontend matches source and inline scripts parse',()=>{
 const encoded=worker.match(/const HTML_B64 =\n  "([^"]*)"/)[1];assert.equal(zlib.gunzipSync(Buffer.from(encoded,'base64')).toString(),html);
 for(const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(script[1]);
});
