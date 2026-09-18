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
        "&limit=12",
      { headers: { "User-Agent": UA } },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.jobs))
          for (const j of data.jobs.slice(0, 12))
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
  tasks.push(
    fetch("https://in.jooble.org/api/" + env.JOOBLE_API_KEY, {
      method: "POST",
      headers: { "content-type": "application/json", "User-Agent": UA },
      body: JSON.stringify({ keywords: q, location: "India", page: "1" }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.jobs))
          for (const j of data.jobs.slice(0, 20))
            jobs.push({
              title: j.title || "",
              company: j.company || "",
              location: j.location || "India",
              url: j.link || "",
              description: stripHtml(j.snippet || "").slice(0, 4000),
              source: "Jooble India",
            });
      })
      .catch(() => {}),
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
  return jsonResponse({ jobs: unique.slice(0, 40) });
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
