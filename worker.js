const HTML_B64 =
  "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";
let _h = null;
async function getHtml() {
  if (_h) return _h;
  const bin = Uint8Array.from(atob(HTML_B64), (c) => c.charCodeAt(0));
  const s = new Blob([bin])
    .stream()
    .pipeThrough(new DecompressionStream("gzip"));
  _h = await new Response(s).text();
  return _h;
}
function sanitizeJson(s) {
  let out = "",
    inStr = false,
    esc = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (esc) {
      out += c;
      esc = false;
      continue;
    }
    if (c === "\\") {
      out += c;
      esc = true;
      continue;
    }
    if (c === '"') {
      inStr = !inStr;
      out += c;
      continue;
    }
    if (inStr) {
      if (c === "\n") {
        out += "\\n";
        continue;
      }
      if (c === "\r") {
        continue;
      }
      if (c === "\t") {
        out += "\\t";
        continue;
      }
    }
    out += c;
  }
  return out;
}
const SYSTEM_PROMPT =
  'You are an expert resume coach, ATS (applicant tracking system) specialist, and former tech recruiter. You analyze a candidate\'s resume against one specific job description, then rewrite the resume to fit that job. Rules you must follow:\n- Be specific. Reference the exact resume lines you criticise.\n- NEVER invent experience, employers, metrics, numbers, or skills that are not in the original resume. Rephrase, reorder, and re-emphasise only.\n- Recommendations must never tell the candidate to add unverified facts. If a job asks for experience absent from the resume, say to add it only if true, otherwise name the gap honestly.\n- The rewritten resume must be truthful, ATS-friendly (plain section headings like SUMMARY, SKILLS, EXPERIENCE, EDUCATION; no tables), and use the job description\'s important keywords where they truthfully apply.\n- The rewritten resume must be complete and ready to use, covering every section from the original that belongs in a resume.\n- Keep the rewritten resume under 500 words unless the original is genuinely senior-level.\nRespond with ONLY a valid JSON object. No markdown fences, no commentary, no text before or after. Use exactly these keys:\n{"score": integer 0-100 for how well the current resume matches this job, "subscores": {"skills": integer 0-100 for relevant skills match, "experience": integer 0-100 for experience relevance, "keywords": integer 0-100 for ATS keyword coverage, "impact": integer 0-100 for quantified impact and outcome evidence, "clarity": integer 0-100 for clarity and resume structure}, "verdict": one plain sentence summarising the fit, "recommendations": array of 4-7 objects, each exactly {"priority":"high" or "medium" or "low", "action": one specific instruction the candidate can take, "why": one short job-specific reason}, ordered high priority first, "rewrite_changes": array of 3-8 objects, each exactly {"before": an exact short line or bullet from the original resume, "after": its truthful improved version, "reason": one short explanation of why the change better fits this job}, "keyword_coverage": array of 6-12 important JD keyword objects, each exactly {"keyword": normalized keyword or skill, "frequency": integer count of appearances in the job description, "covered": boolean for whether the resume clearly contains or demonstrates it}, ordered by frequency descending, "fluff_detector": array of 2-6 objects each exactly {"line": exact vague or generic resume line, "why": short reason it weakens credibility}; use [] if none, "recruiter_view": object exactly {"first_impression": short sentence, "strongest_signal": short phrase, "main_concern": short phrase, "likely_decision": one of "Advance", "Maybe", or "Reject" plus a short reason}, "rewritten_resume": the full tailored resume as plain text with line breaks as \\n} CRITICAL OUTPUT RULES: output ONLY one valid JSON object that JSON.parse can read. Every property name and every string value MUST be enclosed in double quotes. Never leave a value unquoted. No trailing commas, no commentary, no markdown fences.';
function jsonResponse(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
function stripHtml(html) {
  let t = String(html || "");
  t = t
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  t = t
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(parseInt(n, 10)));
  return t
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .trim();
}
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
async function fetchJd(request) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ error: "Invalid request." }, 400);
  }
  const raw = String((body && body.url) || "").trim();
  let u;
  try {
    u = new URL(raw);
  } catch (e) {
    return jsonResponse(
      { error: "That does not look like a valid link." },
      400,
    );
  }
  if (u.protocol !== "http:" && u.protocol !== "https:")
    return jsonResponse(
      { error: "That does not look like a valid link." },
      400,
    );
  const host = u.hostname.replace(/^www\./, "").toLowerCase();
  const headers = {
    "User-Agent": UA,
    Accept: "text/html,application/xhtml+xml,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  };
  if (host === "linkedin.com" || host.endsWith(".linkedin.com")) {
    const idm = u.pathname.match(/(\d{6,})/);
    if (!idm)
      return jsonResponse(
        { error: "Could not find a job ID in that LinkedIn link." },
        400,
      );
    let resp;
    try {
      resp = await fetch(
        "https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/" + idm[1],
        { headers, redirect: "follow" },
      );
    } catch (e) {
      return jsonResponse({ error: "LinkedIn would not load from here." }, 502);
    }
    if (!resp.ok)
      return jsonResponse(
        { error: "LinkedIn blocked the automatic pull (it does that often)." },
        502,
      );
    const html = await resp.text();
    const dm =
      html.match(
        /<div[^>]*class="[^"]*description__text[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      ) ||
      html.match(
        /<section[^>]*class="[^"]*description[^"]*"[^>]*>([\s\S]*?)<\/section>/i,
      );
    let text = dm ? stripHtml(dm[1]) : "";
    const tm = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const title = tm ? stripHtml(tm[1]) : "";
    if (title && text.indexOf(title) !== 0)
      text = (title ? title + "\n\n" : "") + text;
    if (text.length < 200)
      return jsonResponse(
        { error: "LinkedIn gave an empty page (login wall)." },
        502,
      );
    return jsonResponse({ job: text.slice(0, 8000), source: "linkedin" });
  }
  let resp;
  try {
    resp = await fetch(u.toString(), { headers, redirect: "follow" });
  } catch (e) {
    return jsonResponse({ error: "That page would not load from here." }, 502);
  }
  if (!resp.ok)
    return jsonResponse({ error: "The site blocked the automatic pull." }, 502);
  const html = await resp.text();
  const re =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const data = JSON.parse(m[1]);
      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        const cand = [];
        if (item && item["@type"] === "JobPosting") cand.push(item);
        if (item && item["@graph"])
          for (const g of item["@graph"])
            if (g && g["@type"] === "JobPosting") cand.push(g);
        for (const p of cand) {
          if (p.description) {
            let text = "";
            if (p.title) text += p.title + "\n";
            if (p.hiringOrganization && p.hiringOrganization.name)
              text += p.hiringOrganization.name + "\n\n";
            text += stripHtml(p.description);
            if (text.length > 200)
              return jsonResponse({
                job: text.slice(0, 8000),
                source: host.indexOf("naukri") !== -1 ? "naukri" : "web",
              });
          }
        }
      }
    } catch (e) {}
  }
  if (host.indexOf("naukri") !== -1)
    return jsonResponse(
      { error: "Naukri blocked the automatic pull (it does that often)." },
      502,
    );
  const og = html.match(
    /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i,
  );
  if (og && og[1].length > 200)
    return jsonResponse({
      job: stripHtml(og[1]).slice(0, 8000),
      source: "web",
    });
  return jsonResponse(
    { error: "Could not find a job description on that page." },
    502,
  );
}
async function fetchJobs(request, env) {
  const u = new URL(request.url);
  const q = (u.searchParams.get("q") || "").trim().slice(0, 80);
  if (!q)
    return jsonResponse({ error: "Type a role or keyword to search." }, 400);
  const jobs = [];
  const tasks = [];
  tasks.push(
    fetch(
      "https://remotive.com/api/remote-jobs?search=" +
        encodeURIComponent(q) +
        "&limit=50",
      { headers: { "User-Agent": UA } },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.jobs))
          for (const j of data.jobs.slice(0, 50))
            jobs.push({
              title: j.title || "",
              company: j.company_name || "",
              location: j.candidate_required_location || "Remote",
              url: j.url || "",
              description: stripHtml(j.description || "").slice(0, 4000),
              source: "Remotive",
            });
      })
      .catch(() => {}),
  );
  tasks.push(
    fetch("https://www.arbeitnow.com/api/job-board-api", {
      headers: { "User-Agent": UA },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const ql = q.toLowerCase();
          for (const j of data.data) {
            const hay = (
              (j.title || "") +
              " " +
              (j.description || "")
            ).toLowerCase();
            if (hay.indexOf(ql) === -1) continue;
            jobs.push({
              title: j.title || "",
              company: j.company_name || "",
              location: j.location || "",
              url: j.url || "",
              description: stripHtml(j.description || "").slice(0, 4000),
              source: "Arbeitnow",
            });
            if (jobs.length > 24) break;
          }
        }
      })
      .catch(() => {}),
  );
  // Jooble supports location search, so fan out across India instead of letting one
  // high-volume metro dominate the national result set. One page per region keeps
  // the free API usage bounded while covering the country's main job hubs.
  const indiaLocations = ["India", "Mumbai", "Delhi NCR", "Pune", "Chennai", "Kolkata"];
  for (const location of indiaLocations) tasks.push(
    fetch("https://in.jooble.org/api/" + env.JOOBLE_API_KEY, {
      method: "POST",
      headers: { "content-type": "application/json", "User-Agent": UA },
      body: JSON.stringify({ keywords: q, location, page: "1" }),
    }).then((r) => (r.ok ? r.json() : null)).then((data) => {
      if (data && Array.isArray(data.jobs)) for (const j of data.jobs)
        jobs.push({ title: j.title || "", company: j.company || "", location: j.location || location, url: j.link || "", description: stripHtml(j.snippet || "").slice(0, 4000), source: "Jooble India" });
    }).catch(() => {}),
  );
  tasks.push(
    fetch("https://himalayas.app/jobs/api?limit=50", { headers: { "User-Agent": UA } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.jobs))
          for (const j of data.jobs)
            jobs.push({
              title: j.title || "", company: j.companyName || "",
              location: Array.isArray(j.locationRestrictions) && j.locationRestrictions.length ? j.locationRestrictions.join(", ") : "Remote",
              url: j.applicationLink || j.guid || "", description: stripHtml(j.description || j.excerpt || "").slice(0, 4000), source: "Himalayas",
            });
      }).catch(() => {}),
  );
  tasks.push(
    fetch("https://jobicy.com/api/v2/remote-jobs?count=50&tag=" + encodeURIComponent(q), { headers: { "User-Agent": UA } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.jobs))
          for (const j of data.jobs)
            jobs.push({ title: j.jobTitle || "", company: j.companyName || "", location: j.jobGeo || "Remote", url: j.url || "", description: stripHtml(j.jobExcerpt || j.jobDescription || "").slice(0, 4000), source: "Jobicy" });
      }).catch(() => {}),
  );
  tasks.push(
    fetch("https://remotejobs.org/api/v1/jobs?limit=50&search=" + encodeURIComponent(q), { headers: { "User-Agent": UA } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.data))
          for (const j of data.data)
            jobs.push({ title: j.title || "", company: (j.company && j.company.name) || "", location: j.location || "Remote", url: j.apply_url || j.url || "", description: stripHtml(j.description || "").slice(0, 4000), source: "RemoteJobs.org" });
      }).catch(() => {}),
  );
  await Promise.all(tasks);
  if (!jobs.length)
    return jsonResponse(
      { error: "No jobs found for that search right now." },
      404,
    );
  const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 2);
  for (const j of jobs) {
    const title = (j.title || "").toLowerCase(), desc = (j.description || "").toLowerCase();
    j._relevance = terms.reduce((n, t) => n + (title.includes(t) ? 4 : 0) + (desc.includes(t) ? 1 : 0), 0);
  }
  const seen = new Set();
  const unique = jobs.filter((j) => { const key = (j.url || "") + "|" + (j.title || ""); if (seen.has(key) || j._relevance === 0) return false; seen.add(key); return true; }).sort((a,b) => b._relevance - a._relevance);

  // Keep relevance as the primary ordering. Within an equal relevance tier,
  // round-robin locations so candidates see India's geographic spread early.
  const regionKey = (location) => {
    const l = String(location || "remote").toLowerCase();
    if (/mumbai|navi mumbai|thane/.test(l)) return "Mumbai";
    if (/delhi|noida|gurgaon|gurugram|ghaziabad/.test(l)) return "Delhi NCR";
    if (/pune/.test(l)) return "Pune";
    if (/chennai/.test(l)) return "Chennai";
    if (/kolkata/.test(l)) return "Kolkata";
    if (/bangalore|bengaluru/.test(l)) return "Bengaluru";
    if (/hyderabad/.test(l)) return "Hyderabad";
    if (/ahmedabad|ahmadabad/.test(l)) return "Ahmedabad";
    if (/kochi|cochin/.test(l)) return "Kochi";
    return l.includes("remote") || l.includes("work from home") ? "Remote" : "Other India";
  };
  const ranked = [];
  for (let i = 0; i < unique.length;) {
    let end = i + 1;
    while (end < unique.length && unique[end]._relevance === unique[i]._relevance) end++;
    const buckets = new Map();
    for (const job of unique.slice(i, end)) {
      const key = regionKey(job.location);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(job);
    }
    while (buckets.size) for (const [key, bucket] of Array.from(buckets)) {
      ranked.push(bucket.shift());
      if (!bucket.length) buckets.delete(key);
    }
    i = end;
  }
  for (const j of ranked) delete j._relevance;
  return jsonResponse({ jobs: ranked.slice(0, 150) });
}
async function analyze(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ error: "Invalid request." }, 400);
  }
  const resume = String((body && body.resume) || "")
    .slice(0, 12000)
    .trim();
  const job = String((body && body.job) || "")
    .slice(0, 8000)
    .trim();
  if (!resume || !job)
    return jsonResponse(
      { error: "Please provide both your resume and the job description." },
      400,
    );
  let result;
  try {
    result = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content:
            "JOB DESCRIPTION:\n" + job + "\n\nCANDIDATE RESUME:\n" + resume,
        },
      ],
      max_tokens: 3400,
      temperature: 0.35,
      response_format: { type: "json_object" },
    });
  } catch (e) {
    return jsonResponse(
      {
        error: "The AI model is busy right now. Please try again in a moment.",
      },
      502,
    );
  }
  const raw = result && result.response;
  let parsed = raw && typeof raw === "object" ? raw : null;
  const text = typeof raw === "string" ? raw : "";
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (!parsed && start !== -1 && end > start) {
    try {
      parsed = JSON.parse(sanitizeJson(text.slice(start, end + 1)));
    } catch (e) {
      parsed = null;
    }
  }
  if (!parsed || !parsed.rewritten_resume)
    return jsonResponse(
      { error: "The analysis came back incomplete. Please try again." },
      502,
    );
  return jsonResponse({
    score: parsed.score,
    subscores: parsed.subscores && typeof parsed.subscores === "object" ? parsed.subscores : {},
    verdict: parsed.verdict || "",
    recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
    rewrite_changes: Array.isArray(parsed.rewrite_changes) ? parsed.rewrite_changes : [],
    keyword_coverage: Array.isArray(parsed.keyword_coverage) ? parsed.keyword_coverage : [],
    fluff_detector: Array.isArray(parsed.fluff_detector) ? parsed.fluff_detector : [],
    recruiter_view: parsed.recruiter_view && typeof parsed.recruiter_view === "object" ? parsed.recruiter_view : {},
    rewritten_resume: parsed.rewritten_resume,
  });
}
export default {
  async fetch(request, env) {
    if (request.method === "GET") {
      const p = new URL(request.url).pathname;
      if (p === "/" || p === "/index.html")
        return new Response(await getHtml(), {
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "no-cache",
          },
        });
    }
    const url = new URL(request.url);
    if (request.method === "OPTIONS")
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Headers": "content-type",
        },
      });
    if (request.method === "POST" && url.pathname === "/api/analyze")
      return analyze(request, env);
    if (request.method === "GET" && url.pathname === "/api/jobs")
      return fetchJobs(request, env);
    if (request.method === "POST" && url.pathname === "/api/fetch-jd")
      return fetchJd(request);
    return new Response("ResumeFit API", { status: 200 });
  },
};
