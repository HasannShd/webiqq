# Shahbudin Contracting — Website

Full rebuild/redesign of the Shahbudin Contracting website — a construction
company in the Kingdom of Bahrain (building construction, HVAC & fire
fighting, interiors, infrastructure, electrical & plumbing, project
management).

Built with plain HTML, CSS, and JavaScript — **no build step, no
dependencies**. Insanely fast, fluid, and SEO-optimized.

## Features

- Custom animated cursor (dot + trailing ring, contextual "View" label on projects)
- Inertial smooth scrolling (desktop wheel; native on touch; respects `prefers-reduced-motion`)
- Preloader with logo draw animation
- Hero with parallax, slow zoom, masked line-by-line title reveal
- Marquee services strip
- Animated stat counters (25+ years, 500+ projects, 200+ workforce, 50+ clients)
- 3D tilt service cards, magnetic buttons
- Filterable projects grid (Commercial / Residential / Infrastructure)
- Process timeline, CTA band, contact form that opens WhatsApp pre-filled
- Sticky header that hides on scroll down, mobile fullscreen nav
- SEO: semantic HTML, meta/OG/Twitter tags, JSON-LD (`GeneralContractor`),
  `robots.txt`, `sitemap.xml`, canonical URL, lazy images with dimensions

## Before going live (placeholders to replace)

- [ ] **WhatsApp / phone number** — `97300000000` appears in `index.html`
      (nav, floating button, contact list) and `js/app.js` (`WHATSAPP_NUMBER`)
- [ ] **Email** — `info@shahbudincontracting.com` in `index.html` (contact + JSON-LD)
- [ ] **Domain** — `https://shahbudincontracting.com/` in `index.html`
      (canonical, OG, JSON-LD), `robots.txt`, and `sitemap.xml`
- [ ] **Office address** — currently "Manama, Kingdom of Bahrain"
- [ ] **Project photos** — currently Unsplash placeholders; swap in real
      project photography (keep the `width`/`height` attributes)
- [ ] Company registration name in the footer (`W.L.L.`)

## Run locally

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Deploy

Static site — deploys to Vercel with zero configuration (framework preset:
"Other", no build command, output directory: root). `vercel.json` adds
security headers and immutable caching for assets.
