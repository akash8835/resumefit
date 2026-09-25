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

- `POST /api/analyze` — `{ "resume": "...", "job": "...", "consent": true }` → score, verdict, flaws, cuts, missing_keywords, recruiter_tips, rewritten_resume
- `POST /api/jobdesc` — `{ "url": "<linkedin/naukri job link>" }` → extracted job description
- `GET /api/jobs?q=<query>` — live job listings
- `POST /api/cover-letter`, `/api/interview`, `/api/linkedin`, `/api/quick-score`, `/api/salary`, `/api/referral-message`
- `GET /extension.zip` — Chrome extension download

## Download tracking and admin view

A SQLite-backed Durable Object (`AnalyticsDB`, free tier) stores:
- extension.zip downloads (time, Cloudflare country/region/city, device, browser, user agent - no IP address)
- optional "Get updates" emails from the extension page
- resumes shared by users who tick the required, unticked-by-default sharing checkbox
- anonymous analysis stats (score, job title/company, missing keywords, region)

The admin panel is at `/admin` and needs an email + password login. Admin accounts live in the
`admin_users` table of the Durable Object SQLite database, stored only as PBKDF2-SHA256 hashes
(no plaintext passwords anywhere). Sessions use a random HttpOnly, Secure, SameSite=Strict cookie;
only a hash of the session token is stored. Failed logins are rate-limited per (hashed) IP.

From the panel you can: see all records, delete rows, export every table as CSV/JSON (or the whole
database as one JSON file), run read-only SELECT queries over the data tables, add admins and
change your password. The old `/admin-downloads?key=...` link is retired and redirects to `/admin`.

First-time setup on a fresh deployment: set a one-time `ADMIN_SEED` Worker secret of the form
`email|pbkdf2$100000$<salt_b64>$<hash_b64>`. It is only used while `admin_users` is empty and can be
deleted after the first admin exists.



## Optional details on shared resumes

The Upload step provides separate unchecked choices for mobile number, browser/device category, and a one-time browser location reading. The service works without these optional details. Phone numbers are user-entered in international format and unverified; the app does not obtain a SIM number or use OTP. Geolocation requires a user click and browser permission, records accuracy and capture time, and expires locally after ten minutes. No background tracking or reverse geocoding is used.

`POST /api/share-resume` accepts `submission_id` (a UUID v4 for retry deduplication) and `details` with `consent_version: "2026-09-25-v1"`, separate boolean `phone_consent`, `device_consent`, and `location_consent` flags, optional `phone`, and `location: {latitude, longitude, accuracy, captured_at}`. Only literal `true` enables a category. Unconsented values are discarded. The server validates phone format, coordinate ranges, accuracy and capture age, and stores consent wording/version plus receipt timestamps.

The authenticated Shared resumes admin tab and its CSV/JSON exports include these fields. Coordinates, device descriptions and phone numbers are not verified identities. Existing databases receive additive nullable columns; historic submissions show Not shared. Submissions are no longer deduplicated by resume text, so one person's contact details cannot overwrite another's. Removing a shared resume removes its optional details too. Unchecking a choice affects future submissions; deletion of existing records uses the existing contact/admin deletion flow.

Run `node --test tests/consented-details.test.cjs` for backend, migration, admin escaping, export and frontend consent checks. Run `node build.mjs` before deployment to embed the frontend.
