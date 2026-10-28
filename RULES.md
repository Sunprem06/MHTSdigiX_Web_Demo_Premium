# Rules — Beacon Ridge Multispecialty Hospital (Premium)

These rules apply to every human and AI agent working on this project.

## Scope
- Build only what `PRD.md` lists. Anything else: propose it, don't build it.
- Update `TASKS.md` as you work; record non-obvious decisions in `MEMORY.md`.
- This project **does** carry the Premium-tier signature feature (live/interactive 3D hero)
  and the full Decap-CMS content pattern — unlike `..\Standard`, do not strip these back or
  water them down to match a lower tier.
- Never strip this project below Premium scope either (no removing the 3D hero, the CMS
  pattern, the blog comment UI, the parallax layers, or either inquiry form without updating
  `PRD.md` first).

## Identity & honesty (non-negotiable)
- "Beacon Ridge Multispecialty Hospital" is a **fictional** hospital. Never invent real
  addresses, phone numbers, registration/accreditation numbers, awards, or claim a real
  affiliation with any real hospital group, insurer, or medical board.
- Every page must keep the "Concept Website Demo" disclosure (`DemoBadge`) visible.
- Pricing shown anywhere (health packages) must stay labeled as an illustrative "starting
  from" placeholder — never presented as a real, bookable rate.
- The WhatsApp number, map embed, and social links are placeholders. Never wire them to a
  real number, a real API-keyed Google Maps embed, or real social accounts without the
  owner's explicit sign-off that the site is becoming a real deployment.
- Never imply this site has features it doesn't: no claiming the CMS admin has a working
  login pre-deployment, no claiming the forms or blog comments reach a real backend.

## Healthcare-specific honesty rules (the reason this tier needs extra care)
- **No real doctors.** Every entry in `/doctors` and every department's "meet the team" blurb
  is a fictional person. Never use a real clinician's name, photo, registration/license
  number, or a specific real medical board's certification as if it were genuine. Illustrated
  avatars (initials/monogram or abstract line-art) only — no photographic headshots, stock or
  otherwise.
- **No real patients.** No real patient photos, named or anonymized "testimonials," before/
  after images, or case studies presented as real outcomes. Any illustrative patient-experience
  copy must read as a generic, clearly hypothetical scenario, not a quoted review.
- **No medical advice.** Nothing on this site is a diagnosis, a treatment recommendation, or
  emergency-triage guidance. Every page that discusses symptoms, conditions, procedures, or
  "when to seek care" (department pages, blog posts, `/patient-resources`) must carry an
  explicit, visible disclaimer: content is general/illustrative information, not medical
  advice, and a real emergency always means calling local emergency services immediately —
  never using this website to decide.
- **No fabricated statistics.** Do not invent specific success rates, survival rates, patient
  volumes, or outcome numbers and present them as factual. Illustrative numbers (e.g., a
  design-only "500+ beds" stat on `/about`) must read clearly as part of the fictional brand's
  world-building, not as a verifiable real-world claim — when in doubt, phrase as descriptive
  ("a full-service multi-specialty campus") rather than as a precise, citable figure.
- **No real job postings.** `/careers` listings are explicitly labeled "illustrative sample
  listing — not an active job posting," since this hospital and its HR process do not exist.
- **No real insurance partnerships.** `/insurance-billing`'s partner list uses invented
  insurer names (never a real insurer's name/logo), explicitly labeled illustrative.

## Code
- TypeScript strict mode; no `any` without a comment explaining why.
- Components small and reusable; styles only via `tailwind.config.ts` tokens (no hard-coded
  hex colors in components).
- Mobile-first; test at 375px width minimum, and test the 3D scene's fallback path (it must
  degrade gracefully, never crash the page) on top of the happy path.
- All copy lives under `content/*.json`, re-exported through `src/content/site-content.ts` —
  no hard-coded brand strings in components or pages, so the Decap CMS pattern actually has
  something real to edit.
- `react-three-fiber`/`three`/`gsap` are the only animation/3D dependencies, matching `Demo` —
  no new animation library added without a one-line justification in `MEMORY.md`.
- Client components (`"use client"`) are used only where interactivity requires it (header
  menu, hero slider, 3D canvas, parallax layers, gallery, blog comments, forms) — everything
  else stays a server component for performance.
- The 3D scene must always be wrapped in `SceneErrorBoundary` with a static poster fallback,
  gated by `useWebglSupport()`, and must no-op its scroll-linked motion under
  `useReducedMotion()`. This is a hard requirement, not a nice-to-have — see `RULES.md`
  Accessibility and `ARCHITECTURE.md`.

## Security
- Never commit secrets, API keys, or personal data (none exist in this project — the map is a
  static SVG placeholder, not a live Google Maps embed, so no API key is needed or present).
- The two forms (`/appointment`, `/contact`) have client-side validation only and send data
  nowhere — document this clearly in their success-state copy so a real user never believes a
  request was actually received by a real hospital.
- The blog comment UI is explicitly labeled as a local/demo feature, not a real discussion
  system, so no one mistakes a posted "comment" for something another visitor can see.

## SEO
- Follow `SEO.md`'s Custom-tier checklist. `robots.txt` stays disallow-all and every page sets
  `robots: { index: false }` — this is an undeployed demo, not a real hospital to be indexed.
- `/admin` (the static Decap UI) is excluded from `sitemap.ts` and carries its own
  `noindex, nofollow` meta tag in `public/admin/index.html`.

## Accessibility
- Every interactive element has a visible focus ring; mobile tap targets ≥ 48px.
- `prefers-reduced-motion` disables: the 3D scene's scroll-linked camera motion (scene still
  renders, just holds still), the hero banner's auto-rotate, all `ParallaxLayer` transforms,
  and CSS transitions generally.
- Form fields have associated `<label>`s and `aria-describedby` error messages; errors are
  color-independent (text content, not color alone) — especially important for a healthcare
  audience that may skew older or may be filling the form while stressed.
- Gallery lightbox and blog comment box are fully keyboard-operable.
- Given the audience, prioritize plain-language copy and generous line-height/contrast over
  purely decorative typographic flourish — see `DESIGN.md`.

## Git
- Initialize a local git repo with a sensible first commit once the working tree builds
  cleanly. Do **not** create a GitHub repo, push, or set up hosting/deployment without the
  owner's explicit go-ahead — same two-step pattern already used for `Starter` and `Standard`.
  If/when approved, the naming convention is
  `Sunprem06/MHTSdigiX_Web_Hospital_Premium`.
