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
