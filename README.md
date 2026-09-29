# Pr Najeb Youssef — Website

Editorial, French-language website for the orthopaedic and trauma surgery practice of Pr Najeb Youssef, Aïn Sebaâ, Casablanca.
It uses the practice's own content and cabinet photographs.

## Requirements
- Node.js 22
- pnpm 10.x

## Run locally
```bash
pnpm install
pnpm dev
```
Open http://localhost:3000.

## Checks and production build
```bash
pnpm typecheck
pnpm build
```
The Next.js project is configured for static export; the production output is generated in `out/`.

## Structure
- `lib/content.ts` — all site copy (single source of truth)
- `app/page.tsx` — composes the seven scenes
- `app/layout.tsx` — fonts, metadata, Schema.org structured data
- `app/globals.css` — design tokens and styles
- `components/sections/*` — Hero, Intro, Expertise, Journey, Profile, Cabinet, Testimonials, Contact
- `components/motion/*` + `lib/motion/*` — Lenis + GSAP ScrollTrigger runtime and the scroll-pattern registry
- `docs/content-inventory.md` — mapping of every original content item to its new location
- `docs/design-system.md` — colour, type, layout and motion tokens
- `public/` — cabinet photos, logo, favicon, SEO files
