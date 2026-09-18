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
  'You are an expert resume coach, ATS (applicant tracking system) specialist, and former tech recruiter. You analyze a candidate\'s resume against one specific job description, then rewrite the resume to fit that job. Rules you must follow:\n- Be specific. Reference the exact resume lines you criticise.\n- NEVER invent experience, employers, metrics, numbers, or skills that are not in the original resume. Rephrase, reorder, and re-emphasise only.\n- The rewritten resume must be truthful, ATS-friendly (plain section headings like SUMMARY, SKILLS, EXPERIENCE, EDUCATION; no tables), and use the job description\'s important keywords where they truthfully apply.\n- The rewritten resume must be complete and ready to use, covering every section from the original that belongs in a resume.\n- Keep the rewritten resume under 500 words unless the original is genuinely senior-level.\nRespond with ONLY a valid JSON object. No markdown fences, no commentary, no text before or after. Use exactly these keys:\n{"score": integer 0-100 for how well the current resume matches this job, "verdict": one plain sentence summarising the fit, "flaws": array of 4-8 specific weaknesses or gaps in the resume for this job, "cuts": array of 2-6 unnecessary or off-target points in the resume that should be removed, each with a short reason, "missing_keywords": array of up to 10 important keywords or skills from the job description that are missing or underplayed, "recruiter_tips": array of 3-5 short practical tips on what a recruiter screening for this exact role will look for and how this candidate should position themselves, "rewritten_resume": the full tailored resume as plain text with line breaks as \\n} CRITICAL OUTPUT RULES: output ONLY one valid JSON object that JSON.parse can read. Every property name and every string value MUST be enclosed in double quotes. Never leave a value unquoted. No trailing commas, no commentary, no markdown fences.';
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
