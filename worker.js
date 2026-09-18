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
  'You are an expert resume coach, ATS (applicant tracking system) specialist, and former tech recruiter. You analyze a candidate\'s resume against one specific job description, then rewrite the resume to fit that job. Rules you must follow:\n- Be specific. Reference the exact resume lines you criticise.\n- NEVER invent experience, employers, metrics, numbers, or skills that are not in the original resume. Rephrase, reorder, and re-emphasise only.\n- The rewritten resume must be truthful, ATS-friendly (plain section headings like SUMMARY, SKILLS, EXPERIENCE, EDUCATION; no tables), and use the job description\'s important keywords where they truthfully apply.\n- The rewritten resume must be complete and ready to use, covering every section from the original that belongs in a resume.\n- Keep the rewritten resume under 500 words unless the original is genuinely senior-level.\nRespond with ONLY a valid JSON object. No markdown fences, no commentary, no text before or after. Use exactly these keys:\n{"score": integer 0-100 for how well the current resume matches this job, "subscores": {"skills": integer 0-100 for relevant skills match, "experience": integer 0-100 for experience relevance, "keywords": integer 0-100 for ATS keyword coverage, "impact": integer 0-100 for quantified impact and outcome evidence, "clarity": integer 0-100 for clarity and resume structure}, "verdict": one plain sentence summarising the fit, "recommendations": array of 4-7 objects, each exactly {"priority":"high" or "medium" or "low", "action": one specific instruction the candidate can take, "why": one short job-specific reason}, ordered high priority first, "missing_keywords": array of up to 10 important keywords or skills from the job description that are missing or underplayed, "recruiter_tips": array of 3-5 short practical tips on what a recruiter screening for this exact role will look for and how this candidate should position themselves, "rewritten_resume": the full tailored resume as plain text with line breaks as \\n} CRITICAL OUTPUT RULES: output ONLY one valid JSON object that JSON.parse can read. Every property name and every string value MUST be enclosed in double quotes. Never leave a value unquoted. No trailing commas, no commentary, no markdown fences.';
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
    missing_keywords: Array.isArray(parsed.missing_keywords)
      ? parsed.missing_keywords
      : [],
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
