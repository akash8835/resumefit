# ResumeFit

AI-powered resume analyzer and tailor with a stepped Upload -> Job -> Results flow. Upload your resume as PDF, DOCX, or TXT and add a job description (or pull the job straight from a LinkedIn / Naukri link) and get:

- An overall match score plus Skills, Experience, ATS Keywords, Impact, and Clarity sub-scores
- Priority-ranked actionable recommendations, each with a specific action and reason
- Before/after rewrite cards with Accept and Reject controls for every suggested change
- JD keyword frequency and resume coverage table
- Standout Fluff Detector for vague lines and a 10-second Recruiter View with first impression, strongest signal, main concern, and likely decision
- A fully rewritten, tailored resume you can copy, download as .txt, or print to PDF

Also includes a live job browser (Remotive + Arbeitnow + Jooble India free APIs) so you can pick a real posting and analyze against it.

**Live app:** https://resumefit-app.ashwatthama710.workers.dev

## Stack

- Single-file [Cloudflare Worker](worker.js) serving both the API and the frontend ([index.html](index.html), embedded gzipped + base64)
- AI analysis via Cloudflare Workers AI (Llama 3.3 70B) — free tier
- Job search via Remotive, Arbeitnow, and Jooble India; Adzuna is pending account access
- No database, no build step

## Deploy your own

1. `npm install -g wrangler` and `wrangler login`
2. `wrangler deploy` from this folder (the included [wrangler.toml](wrangler.toml) sets the Workers AI binding)
3. Your app is live on `*.workers.dev`

## API

- `POST /api/analyze` — `{ "resume": "...", "job": "..." }` → score, verdict, flaws, cuts, missing_keywords, recruiter_tips, rewritten_resume
- `POST /api/jobdesc` — `{ "url": "<linkedin/naukri job link>" }` → extracted job description
- `GET /api/jobs?q=<query>` — live remote job listings
