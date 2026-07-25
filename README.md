# Excellence International School — Website Redesign

A full redesign of the Excellence International School (Aligarh) website, rebuilt as a
React frontend backed by a small Node/Express API. Submitted for the Website Redesign
technical assessment.

**Live design goal:** replace a dense, template-heavy WordPress site with a fast,
componentized, responsive site — while keeping the school's real content, structure,
and purpose intact.

---

## Tech Stack

| Layer     | Choice                          | Why |
|-----------|----------------------------------|-----|
| Frontend  | React 18 + Vite                  | Fast dev server, native ES modules, no config overhead for a project this size |
| Styling   | Plain CSS with custom properties | Full control over the custom design system (color/type tokens) without fighting a framework |
| Backend   | Node.js + Express                | Lightweight REST API for the one piece of the site that needs a server: the admissions enquiry form |
| Storage   | JSON file (`server/data/enquiries.json`) | Enough for the assessment scope; swappable for a real DB (MongoDB/Postgres) later without changing the API contract |
| Tooling   | Git, npm workspaces (client/server as separate packages) | Keeps frontend and backend independently runnable and deployable |

---

## Project Structure

```
excellence-school-project/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # One component per section (Hero, GrowthPath, Admissions, etc.)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css       # Design tokens + global styles
│   └── package.json
├── server/                 # Express API
│   ├── routes/
│   │   └── enquiry.js      # POST /api/enquiry, GET /api/enquiry (admin use)
│   ├── data/
│   │   └── enquiries.json  # Simple persisted store
│   ├── server.js
│   └── package.json
└── README.md
```

---

## Getting Started

### Quick start (both apps at once)

```bash
npm run install:all   # installs client + server dependencies
npm run dev           # runs client (5173) and server (4000) together
```

### Or run them separately

**Backend**
```bash
cd server
npm install
npm run dev        # starts on http://localhost:4000
```

**Frontend**
```bash
cd client
npm install
npm run dev         # starts on http://localhost:5173
```

The frontend expects the API at `http://localhost:4000` (see `client/.env.example`).
Copy it to `.env` and adjust `VITE_API_URL` if the backend runs elsewhere.

---

## Deployment Notes

- **Frontend:** `npm run build` inside `client/` produces a static `dist/` folder —
  deployable as-is to Vercel, Netlify, or GitHub Pages.
- **Backend:** deployable to any Node host (Render, Railway, Fly.io). Set `PORT`
  via environment variable; the JSON file store in `server/data/` should be
  swapped for a real database before any production use.
- Set `VITE_API_URL` in the frontend's deployment environment to point at the
  deployed backend's URL before building.

---

## API

### `POST /api/enquiry`
Accepts an admissions enquiry from the frontend form.

```json
{
  "childName": "Aarav Sharma",
  "grade": "Primary (Class 1-5)",
  "phone": "9876543210"
}
```

- Validates all three fields are present and that `phone` is a 10-digit number.
- Returns `201` with the saved record, or `400` with a message describing what's missing.
- Persists to `server/data/enquiries.json` (swap for a real database in production).

### `GET /api/enquiry`
Returns all stored enquiries (would sit behind auth in a real deployment — left open
here for demo/review purposes only).

---

## Problem-Solving Approach

1. **Audited the original site first.** Fetched and read the live site rather than
   guessing — found repeated content blocks, a nested/confusing nav, no real design
   system, and SEO-stuffed footer links that added no value to a parent visiting the
   site.
2. **Picked one signature idea and built around it.** The school's own academic
   structure (Daycare → Pre-Primary → Primary → Middle School) is a genuine sequence,
   so it became the site's centerpiece ("Growth Path") instead of a generic hero
   banner — content that's actually true drives the design, not decoration.
3. **Static mockup first, then productionized.** Built a single-file HTML/CSS/JS
   version first to validate the visual direction quickly, then split it into React
   components once the design was settled — cheaper to iterate on layout before
   investing in component architecture.
4. **Only added a backend where one was actually needed.** The rest of the site is
   static content; the enquiry form is the one place real user data needs to be
   captured and validated, so that's the only surface with an API.
5. **Kept concerns separated.** Each page section is its own component; the API is a
   separate package with its own `package.json`, so frontend and backend can be
   deployed, tested, and iterated on independently.

## Communication & Teamwork Notes

- Commit history is structured to be reviewable in isolation (scaffold → backend →
  frontend components → styling/tokens → integration → docs), so a reviewer or
  teammate can follow the build order rather than reviewing one giant diff.
- Code favors readability over cleverness (plain CSS variables instead of a
  utility framework, small single-purpose components) so a teammate unfamiliar
  with the codebase can onboard from the file structure alone.
- Assumptions made without a live client (e.g., enquiry data storage, phone
  validation rules) are called out explicitly above rather than silently baked in,
  so they're easy to revisit in a real handoff.
