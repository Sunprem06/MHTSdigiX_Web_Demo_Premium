# Beacon Ridge Multispecialty Hospital — MHTSdigiXR Premium-tier Demo

A MHTSdigiXR capability-showcase demo at the **Premium** package tier: a fully custom
healthcare website for a fictional multi-specialty hospital, built to demonstrate a live/
interactive 3D-motion hero, multi-layer parallax, a full Decap-CMS content pattern, and a
22-page site structure. See `CLAUDE.md` for the full project entry point and `PRD.md` /
`DESIGN.md` / `ARCHITECTURE.md` for the full brief.

**This is not a real hospital.** "Beacon Ridge Multispecialty Hospital" is fictional — no real
facility, staff, patients, or contact details are represented anywhere on this site.

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS + react-three-fiber + three.js + gsap.

## Commands
```bash
npm install
npm run dev          # http://localhost:3000
npm run build         # production build (must pass with zero errors)
npm run type-check    # tsc --noEmit (must pass with zero errors)
```

## Admin (Decap CMS)
Visit `/admin` in a running dev server to see the content-admin UI. Real login only works
once this project is deployed to Netlify with Identity + Git Gateway enabled — see
`ARCHITECTURE.md` "The CMS pattern" and `MEMORY.md`.
