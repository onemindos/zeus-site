# zeus-site — zeusdelacruz.com

**Live:** https://zeusdelacruz.com  
**Repo:** https://github.com/onemindos/zeus-site  
**Branch:** `main` → auto-deploys to Droplet via self-hosted runner on every push  
**Status:** Placeholder v2 — full rebuild to Next.js + Payload CMS queued

---

## What this site is

The personal brand hub for **Zeus DeLaCruz** — founder of OneMind OS. This site is the public face of Zeus's empire: who he is, what he's building, his content, courses, and consulting.

**Audience:** people discovering Zeus through content, potential students, collaborators, and enterprise clients.

---

## Current state (v2 — placeholder)

The live site is a **Vite + React placeholder** with 6 pages of foundational content. It is intentionally minimal — real content and full functionality come in the Next.js + Payload v3 rebuild.

### Pages live now
| Route | Content |
|---|---|
| `/` | Home — hero, mission, pillars |
| `/blog` | Blog placeholder |
| `/courses` | Courses placeholder |
| `/speaking` | Speaking placeholder |
| `/about` | About placeholder |
| `/contact` | Contact placeholder |

---

## Current stack (v2)

| Layer | Technology |
|---|---|
| Framework | Vite 8 + React 19 |
| Routing | React Router DOM v7 |
| Language | TypeScript 6 |
| Styling | `src/theme.css` (custom CSS, no framework) |
| Linting | oxlint |
| Build output | `dist/` — static HTML |
| Deploy | GitHub Actions → self-hosted runner → Docker on Droplet |

### Local development
```bash
cd ~/zeus-site
npm install
npm run dev
# → http://localhost:5173
```

Build:
```bash
npm run build
# output: dist/
```

---

## File structure (v2)

```
zeus-site/
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Router setup — all 6 routes
│   ├── Nav.tsx           # Navigation component
│   ├── theme.css         # Design tokens + global styles
│   └── pages/
│       ├── Home.tsx
│       ├── Blog.tsx
│       ├── Courses.tsx
│       ├── Speaking.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── index.html            # Vite entry HTML
├── public/CNAME          # zeusdelacruz.com — required for GitHub Pages
├── CNAME                 # zeusdelacruz.com — duplicate for Pages config
├── vite.config.ts
└── .github/workflows/deploy.yml
```

---

## Deploy pipeline (v2)

```
git push origin main
  → GitHub Actions (.github/workflows/deploy.yml)
  → self-hosted runner on onemind-web Droplet (138.197.0.156)
  → docker compose up -d --build
  → health check passes
  → Live at https://zeusdelacruz.com (~2 min)
```

---

## DNS & hosting

| Record | Type | Value | Proxied |
|---|---|---|---|
| `zeusdelacruz.com` | A | `138.197.0.156` | Yes (orange cloud) |
| `www.zeusdelacruz.com` | A | `138.197.0.156` | Yes (orange cloud) |

DNS managed in Cloudflare (zone `223d69a6b69728e72d9d6e2dcb1ab916`), orange-cloud (proxied). Cloudflare handles SSL (Flexible mode) — origin serves HTTP on port 80. Hosting: DigitalOcean Droplet `onemind-web` (138.197.0.156, nyc3, $24/mo shared with onemindos.com). Nginx reverse proxy → Docker container on port 3001.

⚠️ **DO NOT touch MX, TXT, or DMARC records on zeusdelacruz.com** — Google Workspace email is live on this domain. Touching those records will break Zeus's email.

---

## Planned v3 rebuild

The v2 placeholder will be replaced with a full **Next.js + Payload CMS** stack. This is the planned architecture:

### What changes
- **Framework:** Vite → Next.js 16 (App Router, SSR/ISR)
- **CMS:** Payload CMS (self-hosted on DOKS cluster) — admin panel at `cms.zeusdelacruz.com`
- **Database:** PostgreSQL on DOKS persistent volume
- **Hosting:** Already on Droplet (onemind-web, 138.197.0.156) — Payload CMS added as additional service on same Droplet
- **DNS:** Already pointing to Droplet — no flip needed

### Why Payload CMS
Zeus needs to publish blog posts, course pages, podcast episodes, speaking dates, and store products without touching code. Payload gives:
- Clean admin UI at `/admin` — Zeus reviews drafts and hits Publish
- API-first — Legacy (the AI agent) can create drafts via REST/GraphQL
- TypeScript-native, Next.js native (same repo = one deployment)
- Self-hosted = sovereign, no SaaS dependency, no per-seat pricing
- Free OSS

### Content collections planned
```
Posts          Blog posts — authored by Legacy, published by Zeus
Courses        Course landing pages — title, modules, pricing, CTA
Episodes       Podcast episodes — audio file, transcript, show notes
Speaking       Events — date, venue, topic, registration link
Products       Store items — Stripe integration
Media          Images, audio, video assets
```

### Authorship workflow
1. Legacy (AI agent) writes content → POSTs to Payload API as `status: draft`
2. Zeus opens `zeusdelacruz.com/admin`, reviews draft, clicks Publish
3. Page goes live immediately via ISR — no build, no code, no git

### Design direction
- SEO-first: fast, clean, readable — no heavy 3D (that's onemindos.com's lane)
- Personal and direct — Zeus's voice, not corporate copy
- Consistent brand: same crimson/black/white palette as onemindos.com
- Content-rich: blog index, podcast player, course detail, speaking calendar

---

## Zeus DeLaCruz — who he is

| Pillar | Domain |
|---|---|
| 🏗️ OneMind OS | Sovereign AI + TAK platform — the company |
| 💪 Wellness | Physical training, Spartan methodology |
| 💰 Finance | Sovereign wealth, off-grid financial systems |
| 🤖 Robotics | Autonomous systems, drones, DimOS |
| 🌱 Homestead | Self-sufficient land, food, energy |
| 🛡️ Security | Physical + digital sovereignty, Guardian |

**Revenue model:** Education-first → content → GHL funnel → Circle community → cohort → consulting. Target: $50K/mo by month 6-9 from launch.

**Business stack:** Circle Business (community.onemindos.com) + GHL (go.zeusdelacruz.com) + Stripe + Notion.

---

## Relationship to onemindos.com

| Site | Purpose | Audience |
|---|---|---|
| `onemindos.com` | Product/platform directory | Operators, developers, integrators |
| `zeusdelacruz.com` | Personal brand hub | General public, students, followers |

The two sites are separate repos with separate deploy pipelines. They share a brand palette (crimson/black/white) but have different stacks and hosting. Cross-links between the two are intentional and expected.

---

## Key contacts & accounts

- **GitHub org:** `onemindos` — both repos live here
- **Cloudflare:** DNS for both domains managed here (API key in Legacy pod `/opt/data/`)
- **Google Workspace:** Zeus's email is `zeus@zeusdelacruz.com` — MX records on this domain are live
- **Primary business email:** `zeus@onemindos.com` (staged — MX activation pending)
- **Community:** `community.onemindos.com` — Circle Business
- **Funnel:** `go.zeusdelacruz.com` — GHL

---

## For the next agent

If you are an AI agent picking up this repo:

1. **Do not break email** — never touch `zeusdelacruz.com` MX/TXT/DMARC records in Cloudflare
2. **Current site is a placeholder** — v2 Vite content is intentionally minimal; don't optimize it, rebuild it
3. **v3 target stack:** Next.js 16 + Payload CMS + PostgreSQL on DOKS — see Planned v3 section above
4. **Push workflow:** edit locally on Mac (`~/zeus-site`), `git push origin main`, live in ~1 min
5. **Legacy authors content** — the AI agent Legacy (`agents.prompt.hermes.zeus.legacy`) is the primary content author; Zeus approves and publishes
6. **No secrets in this repo** — no API keys, no tokens, no env files ever committed
7. **Match onemindos.com palette** — crimson `#b91c1c`, black `#050607`, white — when rebuilding
