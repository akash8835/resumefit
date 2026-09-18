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
  for (const page of ["1", "2", "3"]) tasks.push(
    fetch("https://in.jooble.org/api/" + env.JOOBLE_API_KEY, {
      method: "POST",
      headers: { "content-type": "application/json", "User-Agent": UA },
      body: JSON.stringify({ keywords: q, location: "India", page }),
    }).then((r) => (r.ok ? r.json() : null)).then((data) => {
      if (data && Array.isArray(data.jobs)) for (const j of data.jobs)
        jobs.push({ title: j.title || "", company: j.company || "", location: j.location || "India", url: j.link || "", description: stripHtml(j.snippet || "").slice(0, 4000), source: "Jooble India" });
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
  for (const j of unique) delete j._relevance;
  return jsonResponse({ jobs: unique.slice(0, 150) });
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
