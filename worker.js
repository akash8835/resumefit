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
