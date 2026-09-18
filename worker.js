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
  'You are an expert resume coach, ATS (applicant tracking system) specialist, and former tech recruiter. You analyze a candidate\'s resume against one specific job description, then rewrite the resume to fit that job. Rules you must follow:\n- Be specific. Reference the exact resume lines you criticise.\n- NEVER invent experience, employers, metrics, numbers, or skills that are not in the original resume. Rephrase, reorder, and re-emphasise only.\n- The rewritten resume must be truthful, ATS-friendly (plain section headings like SUMMARY, SKILLS, EXPERIENCE, EDUCATION; no tables), and use the job description\'s important keywords where they truthfully apply.\n- The rewritten resume must be complete and ready to use, covering every section from the original that belongs in a resume.\n- Keep the rewritten resume under 500 words unless the original is genuinely senior-level.\nRespond with ONLY a valid JSON object. No markdown fences, no commentary, no text before or after. Use exactly these keys:\n{"score": integer 0-100 for how well the current resume matches this job, "subscores": {"skills": integer 0-100 for relevant skills match, "experience": integer 0-100 for experience relevance, "keywords": integer 0-100 for ATS keyword coverage, "impact": integer 0-100 for quantified impact and outcome evidence, "clarity": integer 0-100 for clarity and resume structure}, "verdict": one plain sentence summarising the fit, "flaws": array of 4-8 specific weaknesses or gaps in the resume for this job, "cuts": array of 2-6 unnecessary or off-target points in the resume that should be removed, each with a short reason, "missing_keywords": array of up to 10 important keywords or skills from the job description that are missing or underplayed, "recruiter_tips": array of 3-5 short practical tips on what a recruiter screening for this exact role will look for and how this candidate should position themselves, "rewritten_resume": the full tailored resume as plain text with line breaks as \\n} CRITICAL OUTPUT RULES: output ONLY one valid JSON object that JSON.parse can read. Every property name and every string value MUST be enclosed in double quotes. Never leave a value unquoted. No trailing commas, no commentary, no markdown fences.';
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
    flaws: Array.isArray(parsed.flaws) ? parsed.flaws : [],
    cuts: Array.isArray(parsed.cuts) ? parsed.cuts : [],
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
