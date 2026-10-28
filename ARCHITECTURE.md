# Architecture — Beacon Ridge Multispecialty Hospital (Premium)

## Stack
- **Next.js 16** (App Router, `--webpack` build/dev — matches `Demo` and `Standard` for
  portfolio consistency), React 19, TypeScript (strict), Tailwind CSS 3.
- **react-three-fiber + three.js + gsap** (`ScrollTrigger`) for the signature live 3D/motion
  hero — the same libraries and version range as `Demo`, reused rather than re-chosen, per
  the task brief.
- No database, no backend API routes, no external runtime services. Everything is
  static-prerendered (`○`/`●` in `next build` output; `generateStaticParams` on the one dynamic
  `[slug]` route under `/blog`).

## Why no database/backend
This is a capability-showcase demo, not a production Hospital Information System. All
interactive features simulate their real counterparts:
- **Appointment & contact forms** (`/appointment`, `/contact`): client-side validation, a
  simulated network delay, then a success state. No data is sent anywhere, no email is sent.
- **Blog comments** (`/blog/[slug]`): a demo/local-only comment UI — posting a comment appends
  it to component state for the current page view only (optionally mirrored to
  `sessionStorage` so it survives a reload in the same tab); nothing is persisted server-side
  or shared between visitors. Clearly labeled as a demo comment box, not a real discussion
  system.
- **CMS admin** (`public/admin`): see "The CMS pattern" below.

## The 3D signature hero (reused from `Demo`)
`Demo`'s `src/components/three/{scene-canvas,interior-scene,scene-error-boundary}.tsx` and
`src/lib/{use-reduced-motion,use-webgl-support}.ts` establish the pattern this project reuses
almost verbatim, swapping the actual 3D scene content:
- `useWebglSupport()` probes for a WebGL context before ever mounting `<Canvas>`.
- `SceneErrorBoundary` catches any runtime failure inside the scene and swaps to a static
  gradient poster, so a renderer incompatibility never takes down the page.
- `useReducedMotion()` disables the GSAP `ScrollTrigger` scrub entirely under
  `prefers-reduced-motion: reduce` — the scene still renders (it's not purely decorative; it
  carries the department-highlight copy) but holds still.
- A `SceneLoading` spinner covers the async `<Canvas>`/model mount.

This project's scene (`src/components/three/pulse-scene.tsx`, mounted by
`src/components/three/scene-canvas.tsx`) is an **original, abstract composition** — a slowly
orbiting cluster of soft, glass-like spheres and particle "pulse" rings around a central
glowing core, with camera position/rotation driven by scroll progress — not a literal hospital
interior. This sidesteps every healthcare-imagery risk (no real or implied clinical spaces,
equipment, or people) while still demonstrating genuine scroll-linked camera motion with real
depth and lighting. See `DESIGN.md` for the full rationale.

## The CMS pattern (reused from `Demo`, PR #1)
`Demo`'s merged Decap CMS pattern
(https://github.com/Sunprem06/MHTSdigiX_Web_Interior_Demo/pull/1) is reused structurally:
- All admin-editable copy lives as JSON under `content/*.json` at the project root.
- `src/content/site-content.ts` imports every JSON file and re-exports typed values under
  stable names — every page/component imports from `@/content/site-content`, never from a raw
  JSON file, so the CMS schema can evolve without touching component code.
- `public/admin/index.html` + `public/admin/config.yml` define the Decap CMS UI: one
  `git-gateway` backend, `editorial_workflow` publish mode, one collection per content file
  (hero/banner slides, department summaries, doctor roster, services, health packages, blog
  posts, gallery captions, footer/contact placeholders, FAQ entries).
- **What's different here vs. `Demo`:** `Demo` is a single long-scroll landing page, so its CMS
  edits ~9 section-shaped JSON files. This project is a 22-route multi-page site, so the CMS
  edits a larger, page-shaped set of JSON files (see folder structure below) — same pattern,
  wider surface area, appropriate for the richer Premium page count.
- **What's intentionally NOT admin-editable**, same rationale as `Demo`: nav structure/hrefs,
  route structure, the 3D scene's internal parameters, brand identity/demo-disclosure text,
  and anything that would let a non-technical edit accidentally break type safety (department
  `slug`s, doctor `id`s used as list keys) — see `MEMORY.md`.
- **Real git-gateway login only works after deployment.** `config.yml`'s `backend.name:
  git-gateway` requires a live Netlify site with Identity + Git Gateway turned on in that
  site's dashboard — a one-time, deployment-time setup step this project does not perform
  (no GitHub repo has been created, let alone deployed — see `RULES.md`). What *is* verified
  here is that `public/admin/index.html` loads, fetches `config.yml`, and renders Decap's
  config-driven UI without a schema/validation error — i.e., the admin "builds and loads
  cleanly," exactly the bar the task set. Login itself will correctly fail/hang until a real
  deployment exists; this is expected and documented, not a bug.

## Folder structure
```
src/
  app/
    layout.tsx                      # root layout: fonts (Outfit/Plus Jakarta Sans), header/footer
    page.tsx                         # Home
    about/page.tsx
    departments/
      page.tsx                       # hub
      [slug]/page.tsx                 # detail (generateStaticParams over the 6 departments in
                                      # content/departments.json — same dynamic-route pattern
                                      # Standard used for its destinations, instead of 6
                                      # duplicated folders; produces the same 6 static URLs)
    doctors/page.tsx
    services/page.tsx
    health-packages/page.tsx
    blog/
      page.tsx                       # hub
      [slug]/page.tsx                 # detail + comment UI (generateStaticParams over blog.ts)
    gallery/page.tsx
    patient-resources/page.tsx
    appointment/
      page.tsx
      appointment-form.tsx
    contact/
      page.tsx
      inquiry-form.tsx
    insurance-billing/page.tsx
    careers/page.tsx
    privacy/page.tsx
    terms/page.tsx
    globals.css, robots.ts, sitemap.ts, not-found.tsx, icon.svg
  components/
    layout/                          # header (glass, dept dropdown), footer, demo-badge, whatsapp-button
    ui/                               # button, section-heading, icons, illustrations, parallax-layer,
                                      # aurora-wash, glass-panel
    home/                             # hero-slider (rotating banner), highlight-grid
    three/                            # scene-canvas, pulse-scene, scene-error-boundary
    gallery/                          # zoom-gallery (parallax-aware)
    blog/                             # comment-box
    doctors/                          # doctor-card
    departments/                      # department-card
  content/
    site-content.ts                   # re-exports every content/*.json, typed
  lib/
    use-reduced-motion.ts, use-webgl-support.ts
content/
  hero.json, departments.json, doctors.json, services.json, health-packages.json,
  blog.json, gallery.json, faq.json, footer.json, consultation.json
public/
  admin/
    index.html, config.yml
```

## Data flow
All content is either a static TypeScript literal or a JSON file imported at build time —
there is no CMS fetch, no runtime data source. The only runtime state is:
1. **Form state** (`useState`, component-local, never persisted or sent anywhere) —
   `/appointment`, `/contact`.
2. **Hero banner slider / gallery lightbox / department dropdown UI state** (`useState`,
   component-local).
3. **3D scene scroll progress** (GSAP `ScrollTrigger`, read into a `useState` consumed by the
   `<Canvas>` scene for camera motion — no persistence).
4. **Blog comment demo state** (component state, optionally mirrored to `sessionStorage` for
   the current tab/session only — see "Why no database/backend" above).

## Integrations (all illustrative/placeholder at this tier, per `WEBSITE-PACKAGE-STANDARDS.md`)
- **Google Map**: `MapPlaceholder` (inline SVG), not a live embed — avoids needing a real API
  key for a fictional address. Used on `/contact` and `/appointment`.
- **WhatsApp**: a floating `wa.me` link with a placeholder number and prefilled "I'd like to
  book an appointment" message text, plus a second instance on `/contact`.
- **Social links**: footer icons link to `#`, titled as placeholders.
- **Free SSL**: mentioned in the footer/`PRD.md` as a Premium-tier inclusion for a real
  deployment; nothing to configure on an undeployed static demo.

## Trust boundaries
There are none beyond the browser itself — no secrets, no API keys, no third-party network
calls at runtime beyond self-hosted fonts (`next/font/google`, resolved at build time) and the
two CDN scripts the Decap admin page loads (`netlify-identity-widget.js`, `decap-cms.js`,
isolated to `/admin`, `noindex,nofollow`, and inert until a real deployment exists). This keeps
the demo's security surface minimal, appropriate for an unauthenticated, undeployed concept
site (see `RULES.md` Security section).

## Architecture diagram
Not generated via Archify for this project (no Archify skill run in this session). The folder
structure and data-flow description above cover the same ground. If Archify becomes available
in a future session, regenerate per the `website-kickoff` skill's Step 4 and link the output
here under `docs/architecture/`.
