# ResumeFit

AI-powered resume analyzer and tailor with a stepped Upload -> Job -> Results flow. Upload your resume as PDF, DOCX, or TXT and add a job description (or pull the job straight from a LinkedIn / Naukri link) and get:

- An overall match score plus Skills, Experience, ATS Keywords, Impact, and Clarity sub-scores
- Priority-ranked actionable recommendations, each with a specific action and reason
- Before/after rewrite cards with Accept and Reject controls for every suggested change
- JD keyword frequency and resume coverage table
- Standout Fluff Detector for vague lines and a 10-second Recruiter View with first impression, strongest signal, main concern, and likely decision
- A fully rewritten, tailored resume you can copy, download as .txt, or print to PDF

Plus a full job-search toolkit:

- **Tailored resume PDF** - clean, ATS-safe PDF of the tailored resume; accepted/rejected changes update it and you can edit before downloading
- **Cover letter generator** - written from your resume and the JD, with tone/length options, requirements covered, and gaps it deliberately did not claim
- **Interview prep** - 10-12 likely questions by category with why they ask, STAR answer outlines from your resume, weak spots and questions to ask
- **Salary insights** - pay stated in the JD, live Indian listings that show pay (Jooble), and a clearly labelled AI estimate with negotiation tips
- **Referral finder** - import LinkedIn's free Connections.csv export to see 1st-degree contacts at the company, plus LinkedIn searches pre-filtered to 2nd-degree connections and recruiters, and a referral message writer
- **Application tracker** - Saved / Applied / Interviewing / Offer / Rejected board with notes and CSV export
- **Score history** - every analysis saved with a score-over-time chart and change vs the last run for the same job
- **Multi-resume versions** - keep one resume per role type and pick it per job
- **Bulk JD compare** - score one resume against up to 5 jobs at once, ranked with apply advice
- **LinkedIn profile optimizer** - headline options, About section, skills order, missing keywords and experience bullets
- **Chrome extension** - "Analyze with ResumeFit" button on LinkedIn and Naukri job pages ([extension/](extension/), install via Load unpacked from `/extension.zip`)

A Contact us page (footer link) lets users email ashwatthama710@gmail.com.

Saved resumes, history, tracker and imported connections stay in the browser (localStorage). Nothing is invented: every AI feature is instructed never to add experience, metrics or skills that are not in the resume.

Also includes a live job browser (Remotive, Arbeitnow, Jooble India, Himalayas, Jobicy, and RemoteJobs.org free APIs) so you can pick a real posting and analyze against it.

**Live app:** https://resumefit-app.ashwatthama710.workers.dev

## Stack

- Single-file [Cloudflare Worker](worker.js) serving both the API and the frontend ([index.html](index.html), embedded gzipped + base64)
- AI analysis via Cloudflare Workers AI (Llama 3.3 70B) — free tier
- Job search via six free sources: Remotive, Arbeitnow, Jooble India, Himalayas, Jobicy, and RemoteJobs.org; Adzuna is pending account access
- No database. `node build.mjs` re-embeds index.html and the extension zip into worker.js before `wrangler deploy`

## Deploy your own

1. `npm install -g wrangler` and `wrangler login`
2. `wrangler deploy` from this folder (the included [wrangler.toml](wrangler.toml) sets the Workers AI binding)
3. Your app is live on `*.workers.dev`

## API

- `POST /api/analyze` — `{ "resume": "...", "job": "..." }` → score, verdict, flaws, cuts, missing_keywords, recruiter_tips, rewritten_resume
- `POST /api/jobdesc` — `{ "url": "<linkedin/naukri job link>" }` → extracted job description
- `GET /api/jobs?q=<query>` — live job listings
- `POST /api/cover-letter`, `/api/interview`, `/api/linkedin`, `/api/quick-score`, `/api/salary`, `/api/referral-message`
- `GET /extension.zip` — Chrome extension download

## Download tracking and admin view

A SQLite-backed Durable Object (`AnalyticsDB`, free tier) stores:
- extension.zip downloads (time, Cloudflare country/region/city, device, browser, user agent - no IP address)
- optional "Get updates" emails from the extension page
- resumes shared by users who tick the optional, unticked-by-default consent checkbox
- anonymous analysis stats (score, job title/company, missing keywords, region)

The private admin view is at `/admin-downloads?key=<ADMIN_KEY>`. `ADMIN_KEY` is a Worker secret
(`wrangler secret put ADMIN_KEY`) and is not in this repo. Rows can be exported (CSV/JSON) and deleted there.
