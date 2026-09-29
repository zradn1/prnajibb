# Pr Najeb Youssef — Website Project

Responsive French-language website for the orthopedic clinic in Casablanca. The site uses a turquoise visual theme and the supplied modern clinic-site reference while retaining the clinic’s own content and photographs.

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

## Main source
- `app/page.tsx` — homepage content and interactions
- `app/globals.css` — responsive layout and turquoise design system
- `app/layout.tsx` — metadata and structured data
- `public/` — clinic photos, logo, favicon, routes and SEO files
