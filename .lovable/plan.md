# Ramotitanico — Institutional Website Plan

A multi-page, SSR-rendered, SEO-optimized site built on the project's TanStack Start + Tailwind v4 stack (equivalent capabilities to Next.js App Router). Light theme only, deep blue / white / light gray / gold palette, Inter typography, institutional UNESCO-style tone.

## Design system (src/styles.css)
- Tokens: `--primary` deep navy (oklch ~0.28 0.08 255), `--primary-foreground` white, `--accent` gold (oklch ~0.78 0.14 85), `--background` white, `--muted` light gray, `--border` subtle gray.
- Typography: Inter (loaded via `<link>` in `__root.tsx`, registered as `--font-sans` in `@theme`). Serif display option (Fraunces) for hero headlines for academic feel.
- Reusable primitives via existing shadcn (Button, Card, Badge, Input, Textarea, Accordion, Sonner) plus new `SectionTitle`, `StatCounter`, `PageHero`, `Container`.
- Subtle motion: fade/translate on scroll via CSS + small Framer-style transitions (no extra deps required; use Tailwind `transition` + `animate-*`).

## Routes (src/routes/)
Each route has its own `head()` with unique title, description, og:title, og:description, og:url, and a leaf `canonical`.

- `__root.tsx` — sitewide shell: sticky `<Navbar>`, `<Footer>`, Organization JSON-LD, Inter font link, og:site_name.
- `index.tsx` — Home: hero, mission, services overview (6 cards), stats (Countries/Events/Partners/Publications), featured conference, testimonials, newsletter CTA.
- `about.tsx` — Who we are, Vision, Mission, Core Values grid, global impact narrative.
- `services.tsx` — 6 service cards with Lucide icons + long descriptions.
- `events.tsx` — Featured conference banner, Call for Papers, timeline (Abstract → Acceptance → 27–28 June 2026), benefits grid.
- `publications.tsx` — Download-style cards: Proceedings, Edited Books, Research Reports, Newsletter.
- `team.tsx` — Founder/Director, Advisory Board, Conference Committee, International Reps; placeholder avatars.
- `partnerships.tsx` — Universities, Research Centers, NGOs, Publishers + collaboration form.
- `gallery.tsx` — Responsive grid with click-to-zoom lightbox (Dialog component); categories: Conferences, Workshops, Cultural, Certificates.
- `become-a-consultant.tsx` — Benefits, Responsibilities, application form (name, email, country, message) with zod validation.
- `contact.tsx` — Portugal HQ, email, phone/WhatsApp placeholders, contact form, social links.
- `$.tsx` (splat) — Custom 404 page.

## Shared components (src/components/)
- `layout/Navbar.tsx` — sticky, translucent on scroll, mobile sheet menu, active link styling.
- `layout/Footer.tsx` — 4-column: brand, quick links, resources, contact + newsletter input.
- `ui/SectionTitle.tsx`, `ui/PageHero.tsx`, `ui/StatCounter.tsx`, `ui/ServiceCard.tsx`, `ui/TeamCard.tsx`, `ui/TimelineItem.tsx`, `ui/Lightbox.tsx`.
- `ui/LoadingSkeleton.tsx` for `pendingComponent` on routes.

## Forms
Validated with `zod` + react-hook-form (already in the project); on submit, show success toast via Sonner. No backend wired (no Cloud requested) — forms are presentational with client-side validation.

## SEO
- Per-route head() metadata with unique title/description/og tags.
- Relative canonical + og:url per leaf route (no domain set yet).
- Organization JSON-LD in `__root.tsx`; Event JSON-LD on `/events`; BreadcrumbList on deep routes.
- Semantic HTML, single H1 per page, alt text on imagery, lazy-loaded images.

## Images
Use generated institutional photos (campus, conference, handshake, library) via imagegen, stored in `src/assets/` and imported. Avoid placeholder divs.

## Out of scope (per answers)
- No dark mode toggle.
- No backend / Lovable Cloud (forms are client-only).
- No design-direction previews — proceeding straight to build with the palette above.

## Technical notes
- Stack is TanStack Start (React 19 + Vite 7 + Tailwind v4), not Next.js — same SSR/SEO capabilities. All file-based routes live in `src/routes/`, never `src/pages/`.
- Tailwind tokens defined via `@theme` in `src/styles.css`; semantic classes only (no hardcoded colors in components).
- Fonts loaded via `<link>` in `__root.tsx` head (Tailwind v4 cannot `@import` remote URLs).
