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



## Required location before resume upload

After the existing resume-sharing checkbox is enabled, clicking either resume upload control opens a compact dialog: “Allow location access”, “Location access is required to upload your resume”, “Location may be shared with Google Maps”, and **Allow**. The same Allow action permits location capture and Google Maps use; there is no separate checkbox. Allow requests genuine browser location permission. There is no Not now button; dismissing the dialog never bypasses the upload gate. Denial, timeout, unsupported geolocation, revoked permission and expired readings keep upload locked. A successful reading enables upload. If a browser suppresses the file picker after its asynchronous permission response, click Upload again. Saved resumes and processing endpoints require a fresh reading too.

This flow uses a one-time high-accuracy browser request; accuracy is device-dependent and never guaranteed exact. Coordinates, accuracy and capture time are stored with the resume as described in the linked Privacy Policy. No mobile-number field, IP storage or device opt-in is included. New submissions send `google_maps_consent: true` only after the disclosed Allow flow and successful browser capture. Admin map links and address lookup become available for those submissions; no Google request happens on popup display or capture. Older records without Google permission remain unchanged. Legacy separately consented data remains available in admin. Readings expire locally after ten minutes. Browser Block cannot be removed.

`POST /api/share-resume` accepts `submission_id` (a UUID v4 for retry deduplication) and `details` with `consent_version: "2026-09-25-v4"`, separate boolean `phone_consent`, `device_consent`, and `location_consent` flags, optional `phone`, and `location: {latitude, longitude, accuracy, captured_at}`. `location_consent: true` and fresh valid coordinates are required by resume-sharing and processing endpoints. Only literal `true` enables a category. Unconsented values are discarded. The server validates phone format, coordinate ranges, accuracy and capture age, and stores consent wording/version plus receipt timestamps.

The authenticated Shared resumes admin tab and its CSV/JSON exports include these fields. Coordinates, device descriptions and phone numbers are not verified identities. Existing databases receive additive nullable columns; historic submissions show Not shared. Submissions are no longer deduplicated by resume text, so one person's contact details cannot overwrite another's. Removing a shared resume removes its attached details too. Revoking browser permission prevents further capture; deletion of existing records uses the existing contact/admin deletion flow.

Run `node --test tests/consented-details.test.cjs` for backend, migration, admin escaping, export and frontend consent checks. Run `node build.mjs` before deployment to embed the frontend.

## Google location integrations

The website continues to use browser Geolocation with `enableHighAccuracy: true`, explicit permission, and recorded accuracy. None of these services guarantees exact coordinates or a verified home address.

### Activate Google services

1. In your Google Cloud project, enable billing, **Geolocation API** and **Geocoding API**.
2. Create a server API key restricted to those two APIs, with application restrictions appropriate to your Worker egress setup. Do not put it in HTML, GitHub, or chat.
3. From an authenticated local project terminal, run `npx wrangler secret put GOOGLE_MAPS_API_KEY` and enter the key in the prompt. Alternatively add that name as a Secret in the Worker's Cloudflare settings.
4. Optional Worker variable `GOOGLE_MAPS_DAILY_LIMIT` defaults to 100 combined provider calls/day; configure Google Cloud quotas too. The service also limits lookups per IP/hour.
5. Deploy the updated Worker. Without the key, browser capture/upload still works and Google lookups show a configuration message.

**Admin reverse geocoding:** a separate unchecked Google Maps choice allows sharing coordinates with Google. The Shared resumes tab then offers `View on Google Maps` and `Look up address`. Lookup is an authenticated, same-origin POST keyed by resume ID, never a public coordinate proxy. Older records without Google consent cannot be looked up. Returned addresses are escaped, attributed to Google Maps, served with `no-store`, and are not saved in SQLite or included in exports. Address lookup does not improve coordinate accuracy.

**Google Geolocation:** `POST /api/geolocation/google` is implemented for a native/device client that can legitimately obtain radio signals with permission. A normal webpage cannot scan Wi-Fi BSSIDs or cell towers; no such scanner/native client is included in this web project. Browser uploads therefore use browser location and do not call this endpoint. A supported client must present its own explicit opt-in explaining that radio signals are sent to Google, then send:

```json
{
  "consent_version": "2026-09-25-v4",
  "location_consent": true,
  "google_radio_consent": true,
  "wifiAccessPoints": [
    {"macAddress": "REAL_STATIONARY_AP_BSSID_1", "signalStrength": -55},
    {"macAddress": "REAL_STATIONARY_AP_BSSID_2", "signalStrength": -65}
  ]
}
```

Alternatively supply `radioType` (`gsm`, `wcdma`, `lte`, `nr`) and valid `cellTowers` per Google's schema. The example deliberately contains placeholders, not fabricated real signal data. The endpoint validates signals, forces `considerIp: false` so it never returns the Cloudflare server's IP location, applies timeouts/quotas, and returns only coordinates, accuracy and attribution. Radio input and results are not stored by this endpoint or automatically attached to a resume. This device-client integration remains a prerequisite for using Google Geolocation beyond the ordinary browser capture.

Official references: https://developers.google.com/maps/documentation/geolocation/requests-geolocation and https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding
