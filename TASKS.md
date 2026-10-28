# Tasks — Beacon Ridge Multispecialty Hospital (Premium)

Source of truth for progress. Tick items as they finish; add new ones rather than keeping
scope changes in chat only.

## Milestone 0 — Kickoff
- [x] Read `..\WEBSITE-PACKAGE-STANDARDS.md` (Premium row) and skim `..\Demo` / `..\Standard`
      conventions.
- [x] Run `website-kickoff` skill; scaffold `CLAUDE.md`/`AGENTS.md`/`PRD.md`/`ARCHITECTURE.md`/
      `RULES.md`/`DESIGN.md`/`TASKS.md`/`MEMORY.md` with real content.
- [x] Invent fictional brand "Beacon Ridge Multispecialty Hospital" + persona + page list.

## Milestone 1 — Project scaffold
- [x] `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`,
      `postcss.config.mjs` (mirroring `Demo`'s stack/versions).
- [x] `netlify.toml` (same as `Demo`/`Standard`, build-config only — not a deploy action).
- [x] Root layout (`src/app/layout.tsx`): Outfit/Plus Jakarta Sans fonts, header, footer,
      `DemoBadge`, `WhatsAppButton`, skip-to-content link.
- [x] `globals.css`: brand tokens, focus rings, reduced-motion rules.

## Milestone 2 — Content layer
- [x] `content/*.json` files (hero/banner, departments, doctors, services, health-packages,
      blog, gallery, faq, footer, consultation/appointment seed, +about/contact/insurance/
      careers/legal/signature-experience).
- [x] `src/content/site-content.ts` re-exporting every JSON file, typed.

## Milestone 3 — Shared UI
- [x] `ui/`: button, section-heading, icons, illustrations, parallax-layer, aurora-wash,
      glass-panel, disclaimer-banner.
- [x] `layout/`: header (desktop nav + Departments dropdown + mobile drawer + Book Appointment
      CTA), footer, demo-badge, whatsapp-button.

## Milestone 4 — Signature 3D hero
- [x] Port `use-reduced-motion.ts` / `use-webgl-support.ts` from `Demo`.
- [x] `three/scene-error-boundary.tsx` (ported, same pattern).
- [x] `three/pulse-scene.tsx` — original abstract scene (glass spheres + pulse rings + central
      glow), scroll-progress-driven camera.
- [x] `three/scene-canvas.tsx` — WebGL gate, Suspense/loading, poster fallback, GSAP
      ScrollTrigger wiring.
- [x] Wire into Home below the rotating banner.

## Milestone 5 — Pages (22 routes, see `PRD.md`)
- [x] Home (`/`) — `HeroSlider` banner + `SceneCanvas` signature section + highlights grid.
- [x] `/about` — story, mission/values, illustrative milestones, multi-layer parallax.
- [x] `/departments` (hub) + `/departments/[slug]` detail (cardiology, orthopedics, neurology,
      pediatrics, maternity, emergency).
- [x] `/doctors`.
- [x] `/services`.
- [x] `/health-packages`.
- [x] `/blog` (hub) + `/blog/[slug]` with `CommentBox`.
- [x] `/gallery` with parallax-aware `ZoomGallery`.
- [x] `/patient-resources` (FAQ).
- [x] `/appointment` + `appointment-form.tsx`.
- [x] `/contact` + `inquiry-form.tsx` + `MapPlaceholder` + `WhatsAppButton`.
- [x] `/insurance-billing`.
- [x] `/careers`.
- [x] `/privacy`, `/terms`.
- [x] `robots.ts`, `sitemap.ts`, `not-found.tsx`, `icon.svg`.

## Milestone 6 — CMS admin
- [x] `public/admin/index.html` (ported pattern from `Demo`, re-branded, pinned config.yml
      absolute path).
- [x] `public/admin/config.yml` — 15 collections, one per `content/*.json` file.
- [x] Verify in-browser: `config.yml` loads without a Decap config-validation error at both
      `/admin` and `/admin/` (fixed a redirect-loop bug in the process — see `MEMORY.md`).

## Milestone 7 — SEO
- [x] Run `mhtsdigixr-seo` skill at Custom tier; fill `SEO.md` checklist + keyword map.
- [x] Per-page `metadata` (title ≤60, description ≤160), `robots: { index: false }`.
- [x] `sitemap.ts` covering all static + dynamic routes, excluding `/admin`.

## Milestone 8 — Verification
- [x] In-browser: desktop + mobile (375px), spot-checked across home, departments, gallery,
      blog, appointment, contact, admin.
- [x] 3D hero renders + scroll-linked motion confirmed working.
- [x] Appointment form: validation, simulated submit, success state confirmed end-to-end.
- [x] Gallery zoom/lightbox: open, Escape-to-close confirmed.
- [x] Blog comment UI: add/display confirmed.
- [x] `public/admin` loads cleanly at both `/admin` and `/admin/`.
- [x] `npm run build` — zero errors (31/31 routes generated).
- [x] `npm run type-check` — zero errors.

## Milestone 9 — Handover
- [x] `git init` + sensible first commit (85 files, 8,444 insertions).
- [x] Status report to the owner: what was built, every judgment call/deviation, explicit
      confirmation nothing was pushed or deployed.
- [x] **Not** pushed, no GitHub repo created, no hosting/deployment set up — awaiting the
      owner's explicit go-ahead.

## Phase 2 (not in this build — logged for completeness)
- Archify architecture diagram (no Archify skill run this session).
- Real Netlify deployment + Identity/Git Gateway setup (owner decision, out of scope per
  `PRD.md`).
