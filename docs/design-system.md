# Design system — Pr Najeb Youssef

Tokens are defined once on `:root` in `app/globals.css` and mirrored in `tailwind.config.ts`.

## Colour
| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#F5F6F3` | Warm ivory page ground |
| `--surface` | `#EAF1EF` | Secondary surface (journey band, diagram panel) |
| `--white` | `#FFFFFF` | Alternating scenes (Expertise, Cabinet) |
| `--ink` | `#102F34` | Deep petroleum: primary buttons, contact scene |
| `--ink-deep` | `#0A2326` | Footer |
| `--text` | `#202827` | Charcoal body and headings |
| `--muted` | `#6C7471` | Secondary copy, serif accents |
| `--accent` | `#137F7A` | Turquoise — indices, markers, hero accent only |
| `--accent-light` | `#62CFC4` | Turquoise on dark |
| `--line` | `#D8E2DF` | Hairlines |

Turquoise is a signal, never a surface.

## Type
- **DM Sans** (variable, optical-size axis) for everything. Display sizes run at `opsz 40`, weight 400, tracking `-0.032em`.
- **Cormorant Garamond** italic only for the closing word of a headline, and roman for testimonial quotes.
- Scale: `--fs-display-1` (hero) · `--fs-display-2` (scene titles) · `--fs-display-3` · `--fs-lead` · body 16px · micro 11px uppercase at `0.16em`.
- Both fonts are self-hosted through `next/font`.

## Layout
12 columns, 24px gap, `--gutter` 20–64px, `--container` 1312px (1400px from 1600px). Section rhythm is `--section-y` (96–176px).
Breakpoints: `1023px` (tablet: single column, accordion, no sticky) and `640px` (phone).

## Motion
One runtime (`components/motion/MotionProvider.tsx`): Lenis smooth scroll driven by the GSAP ticker, plus a pattern registry (`lib/motion/patterns.ts`).
Sections opt in with `data-motion="…"` and mark their moving parts with `data-m="…"`.

| Scene | Pattern |
| --- | --- |
| Hero | `hero-parallax` (+ CSS line-mask intro, independent of JS) |
| Intro | `text-reveal` (SplitText line masks) |
| Expertise | `sticky-stack` (CSS sticky visual, active row follows scroll) |
| Journey | `stagger-in` |
| Parcours | `editorial-reveal` (timeline spine scrubs) |
| Cabinet | `image-parallax` |
| Témoignages | `fade-slide` |
| Contact | `scale-through` (inset clip-path opens to full bleed) |
| Footer | `parallax-reveal` |

All patterns animate *from* a hidden state, so content is complete without JavaScript. Under `prefers-reduced-motion`, Lenis and every pattern are skipped, and CSS animations are neutralised.
The magnetic CTA adapts the 21st.dev "Magnetic" pattern on GSAP `quickTo` (fine pointers only).
