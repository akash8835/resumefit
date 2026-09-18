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
      return fetchJobs(request);
    if (request.method === "POST" && url.pathname === "/api/fetch-jd")
      return fetchJd(request);
    return new Response("ResumeFit API", { status: 200 });
  },
};
