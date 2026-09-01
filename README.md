# zeus-site

**zeusdelacruz.com** — the personal brand site for Zeus DeLaCruz.

Blog, consulting and coaching offers, and the story of building OneMind OS in public.

## Principles
- SEO-first: fast, static, content-heavy, fully indexable. No heavy 3D on this site.
- Content multi-homing: every YouTube script becomes a post; every post becomes community threads.
- All capture funnels live at `go.zeusdelacruz.com` (GHL).

## Stack
- Static site (Astro preferred at scaffold time — markdown blog, zero JS by default)
- Deploy: Cloudflare Pages, custom domain `zeusdelacruz.com`

## Pipeline
1. Legacy authors content and pushes to `main`
2. Cloudflare Pages auto-builds and deploys
3. Zeus reviews preview URLs — content changes are a sentence away

## License
MIT
