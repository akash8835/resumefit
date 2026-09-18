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
  'You are an expert resume coach, ATS (applicant tracking system) specialist, and former tech recruiter. You analyze a candidate\'s resume against one specific job description, then rewrite the resume to fit that job. Rules you must follow:\n- Be specific. Reference the exact resume lines you criticise.\n- NEVER invent experience, employers, metrics, numbers, or skills that are not in the original resume. Rephrase, reorder, and re-emphasise only.\n- Recommendations must never tell the candidate to add unverified facts. If a job asks for experience absent from the resume, say to add it only if true, otherwise name the gap honestly.\n- The rewritten resume must be truthful, ATS-friendly (plain section headings like SUMMARY, SKILLS, EXPERIENCE, EDUCATION; no tables), and use the job description\'s important keywords where they truthfully apply.\n- The rewritten resume must be complete and ready to use, covering every section from the original that belongs in a resume.\n- Keep the rewritten resume under 500 words unless the original is genuinely senior-level.\nRespond with ONLY a valid JSON object. No markdown fences, no commentary, no text before or after. Use exactly these keys:\n{"score": integer 0-100 for how well the current resume matches this job, "subscores": {"skills": integer 0-100 for relevant skills match, "experience": integer 0-100 for experience relevance, "keywords": integer 0-100 for ATS keyword coverage, "impact": integer 0-100 for quantified impact and outcome evidence, "clarity": integer 0-100 for clarity and resume structure}, "verdict": one plain sentence summarising the fit, "recommendations": array of 4-7 objects, each exactly {"priority":"high" or "medium" or "low", "action": one specific instruction the candidate can take, "why": one short job-specific reason}, ordered high priority first, "rewrite_changes": array of 3-8 objects, each exactly {"before": an exact short line or bullet from the original resume, "after": its truthful improved version, "reason": one short explanation of why the change better fits this job}, "keyword_coverage": array of 6-12 important JD keyword objects, each exactly {"keyword": normalized keyword or skill, "frequency": integer count of appearances in the job description, "covered": boolean for whether the resume clearly contains or demonstrates it}, ordered by frequency descending, "recruiter_tips": array of 3-5 short practical tips on what a recruiter screening for this exact role will look for and how this candidate should position themselves, "rewritten_resume": the full tailored resume as plain text with line breaks as \\n} CRITICAL OUTPUT RULES: output ONLY one valid JSON object that JSON.parse can read. Every property name and every string value MUST be enclosed in double quotes. Never leave a value unquoted. No trailing commas, no commentary, no markdown fences.';
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
async function fetchJobs(request) {
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
  await Promise.all(tasks);
  if (!jobs.length)
    return jsonResponse(
      { error: "No jobs found for that search right now." },
      404,
    );
  return jsonResponse({ jobs: jobs.slice(0, 24) });
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
    recruiter_tips: Array.isArray(parsed.recruiter_tips)
      ? parsed.recruiter_tips
      : [],
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
      return fetchJobs(request);
    if (request.method === "POST" && url.pathname === "/api/fetch-jd")
      return fetchJd(request);
    return new Response("ResumeFit API", { status: 200 });
  },
};
