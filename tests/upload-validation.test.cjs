const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const code=html.slice(html.indexOf('var RF_FILE_TYPE_ERROR='),html.indexOf('document.getElementById("pullBtn").addEventListener'));
const elems={};
const element=id=>elems[id]??={value:'',textContent:'',style:{},disabled:false,files:[],addEventListener(name,fn){this[name]=fn}};
const context={document:{getElementById:element},fileInput:element('fileInput'),resumeInput:element('resumeInput'),window:{rfRequireConsent:()=>true},hasConsent:()=>true,hasLocation:()=>true,rfLastFile:null,setTimeout,Promise,Uint8Array,Error};
vm.createContext(context);vm.runInContext(code,context);
const typeError='Only PDF, DOCX or TXT files. Please upload your resume in one of these formats.';
const contentError="This doesn't look like a resume. Upload a file with your work experience, education and contact details.";
const resume='Jane Smith | jane@example.com | +1 202 555 0132\nExperience\nSoftware engineer at Example Inc, built web applications.\nEducation\nBS Computer Science. Skills: JavaScript and accessibility.';
async function upload(file){element('fileInput').files=[file];await element('fileInput').change();}
test('wrong file type stops before reading or API calls; red error below input; retry works',async()=>{
 let reads=0,calls=0;context.fetch=()=>{calls++;};
 await upload({name:'wrong.png',type:'image/png',text:()=>{reads++;return Promise.resolve(resume)}});
 assert.equal(reads,0);assert.equal(calls,0);assert.equal(element('fileError').textContent,typeError);assert.equal(element('fileError').style.display,'block');assert.equal(element('toJobBtn').disabled,true);assert.equal(element('fileInput').value,'');
 await upload({name:'jane.txt',type:'text/plain',text:()=>Promise.resolve(resume)});
 assert.equal(element('fileError').style.display,'none');assert.equal(element('resumeInput').value,resume);assert.equal(element('toJobBtn').disabled,false);
});
test('non-resume TXT is rejected before share or AI, with retry enabled',async()=>{
 let calls=0;context.fetch=()=>{calls++;};
 await upload({name:'jane.txt',type:'text/plain',text:()=>Promise.resolve('This is a recipe with vegetables and oven instructions. Bake at 180 C until golden. Enjoy this meal with your friends tonight.')});
 assert.equal(element('fileError').textContent,contentError);assert.equal(element('resumeInput').value,'');assert.equal(element('fileInput').value,'');assert.equal(element('toJobBtn').disabled,true);assert.equal(calls,0);
 assert.equal(context.rfLastFile,null);
});
test('PDF and DOCX extracted text, MIME mismatch and phone-only contact',async()=>{
 const good={name:'jane.pdf',type:'application/pdf'};
 assert.equal(context.rfCheckFileType(good),'pdf');
 assert.equal(context.rfCheckFileType({name:'jane.docx',type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}),'docx');
 assert.throws(()=>context.rfCheckFileType({name:'jane.pdf',type:'text/plain'}),{message:typeError});
 assert.throws(()=>context.rfValidateResumeText('The financial results for this quarter are discussed in the memo. Contact finance@example.com for details on projected revenue and staffing. A summary is attached.'),{message:contentError});
 assert.equal(context.rfValidateResumeText(resume),resume);
 assert.equal(context.rfLooksLikeResume('Asha | +91 98765 43210\nExperience\nProduct analyst 2021-2026 with several shipped projects.\nEducation\nUniversity degree in computing, skills include Excel and SQL.'),true);
});
