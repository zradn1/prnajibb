# Content inventory — original site → redesign

Every item from the original `app/page.tsx` and `app/layout.tsx`, and where it lives now.
All copy is centralised in `lib/content.ts`; nothing was removed or invented.

| Original content | Original location | New location |
| --- | --- | --- |
| Name, title, "Chirurgie orthopédique" brand line, brand symbol | Header / footer `BrandMark` | `components/ui.tsx` → header, mobile menu, footer |
| Nav: Expertise, Parcours, Cabinet, Témoignages, Contact | Header | Header (page order), mobile menu, footer sitemap |
| Hero headline "Retrouver le mouvement. Retrouver la liberté." | Hero `h1` | Hero `h1` (01) |
| Eyebrow "Chirurgie orthopédique & traumatologie" | Hero | Hero rail "Orthopédie · Traumatologie" + brand line |
| Hero description paragraph | Hero | Hero lead (verbatim) |
| "Aïn Sebaâ · Casablanca" location | Hero | Hero vertical metadata + rail |
| Hero photo `/cabinet/5.webp` | Hero | Cabinet feature image; hero now uses `/cabinet/3.webp` (Hall d'entrée) |
| Repères: 28+ ans, 5 000+ patients, 3 000+ interventions, 98 % satisfaction | Credentials strip | Intro (02) figure rail |
| Expertise heading, "Six domaines…" lead | Expertise | Expertise (03) |
| 6 specialties: name, summary, tags | Expertise list | Expertise rows (all text visible on desktop; accordion on mobile) |
| Anatomical schematic SVGs (6) + "Schéma illustratif · non diagnostique" | Expertise panel | Sticky visual `AnatomyDiagram.tsx`, same paths, new palette |
| Patient journey: 5 steps (Consultation → Récupération) + intro | Journey section | Journey band after Expertise |
| Profile heading, intro, 4 highlights | Parcours | Profil / Parcours (04) |
| Timeline (7 entries 1995 → Aujourd'hui) | Collapsed `<details>` | Always-visible editorial timeline |
| "Casablanca depuis 1995" | Profile aside | Figure caption |
| Professional references (SMACOT · SMA · SFA · SMCM · SECOT · SMCR) | Inside `<details>` | Visible references list |
| Cabinet heading + lead | Cabinet | Cabinet (05) |
| Gallery captions: Réception & enseigne, Espace patients, Salle de consultation, Hall d'entrée, Espace d'examen | Gallery | Cabinet gallery (1, 5, 6), Profile figure (4), Hero caption (3) |
| `/cabinet/2.webp` (unused before) | — | Cabinet panorama "Salle d'attente" |
| Gallery note + itinerary link | Gallery | Cabinet note |
| 6 testimonials (quote, initials, name, city, context) | Testimonials | Témoignages (06), with named index |
| Contact heading, lead, hours, Appeler / WhatsApp / Email | Contact | Contact (07) |
| WhatsApp appointment form (name, phone, reason ×8, date, note) + privacy line | Contact | `AppointmentForm.tsx` — identical logic and message format |
| Address strip (full address, itinerary link) | Address strip | Contact "Nous trouver" + itinerary action |
| Footer: phone, email, WhatsApp, Instagram, ©, back-to-top | Footer | Footer |
| Mobile sticky CTA | Fixed bar | Floating pill, hidden over the hero and the contact section |
| Skip link, `#main`, `#top`, section anchors | Page | Preserved (`#intro` added) |
| Metadata, OpenGraph, Twitter, canonical, favicon | `layout.tsx` | Preserved; robots, apple icon, category added |
| Physician + MedicalClinic JSON-LD | `layout.tsx` | Preserved; `sameAs`, `hasMap`, `geo`, cross-links and `WebSite` node added |
| `robots.txt`, `sitemap.xml`, `manus-routes.json`, `logo-icon.png` | `public/` | Unchanged |

Every image in `/public/cabinet` is kept (JPG and WebP). WebP is displayed; JPG remains the OpenGraph/JSON-LD image.
