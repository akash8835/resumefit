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
  'You are an expert resume coach, ATS (applicant tracking system) specialist, and former tech recruiter. You analyze a candidate\'s resume against one specific job description, then rewrite the resume to fit that job. Rules you must follow:\n- Be specific. Reference the exact resume lines you criticise.\n- NEVER invent experience, employers, metrics, numbers, or skills that are not in the original resume. Rephrase, reorder, and re-emphasise only.\n- Recommendations must never tell the candidate to add unverified facts. If a job asks for experience absent from the resume, say to add it only if true, otherwise name the gap honestly.\n- The rewritten resume must be truthful, ATS-friendly (plain section headings like SUMMARY, SKILLS, EXPERIENCE, EDUCATION; no tables), and use the job description\'s important keywords where they truthfully apply.\n- The rewritten resume must be complete and ready to use, covering every section from the original that belongs in a resume.\n- Keep the rewritten resume under 500 words unless the original is genuinely senior-level.\nRespond with ONLY a valid JSON object. No markdown fences, no commentary, no text before or after. Use exactly these keys:\n{"score": integer 0-100 for how well the current resume matches this job, "subscores": {"skills": integer 0-100 for relevant skills match, "experience": integer 0-100 for experience relevance, "keywords": integer 0-100 for ATS keyword coverage, "impact": integer 0-100 for quantified impact and outcome evidence, "clarity": integer 0-100 for clarity and resume structure}, "verdict": one plain sentence summarising the fit, "recommendations": array of 4-7 objects, each exactly {"priority":"high" or "medium" or "low", "action": one specific instruction the candidate can take, "why": one short job-specific reason}, ordered high priority first, "rewrite_changes": array of 3-8 objects, each exactly {"before": an exact short line or bullet from the original resume, "after": its truthful improved version, "reason": one short explanation of why the change better fits this job}, "missing_keywords": array of up to 10 important keywords or skills from the job description that are missing or underplayed, "recruiter_tips": array of 3-5 short practical tips on what a recruiter screening for this exact role will look for and how this candidate should position themselves, "rewritten_resume": the full tailored resume as plain text with line breaks as \\n} CRITICAL OUTPUT RULES: output ONLY one valid JSON object that JSON.parse can read. Every property name and every string value MUST be enclosed in double quotes. Never leave a value unquoted. No trailing commas, no commentary, no markdown fences.';
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
