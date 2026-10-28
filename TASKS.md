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
- [ ] `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`,
      `postcss.config.mjs` (mirroring `Demo`'s stack/versions).
- [ ] `netlify.toml` (same as `Demo`/`Standard`, build-config only — not a deploy action).
- [ ] Root layout (`src/app/layout.tsx`): Outfit/Plus Jakarta Sans fonts, header, footer,
      `DemoBadge`, `WhatsAppButton`, skip-to-content link.
- [ ] `globals.css`: brand tokens, focus rings, reduced-motion rules.

## Milestone 2 — Content layer
- [ ] `content/*.json` files (hero/banner, departments, doctors, services, health-packages,
      blog, gallery, faq, footer, consultation/appointment seed).
- [ ] `src/content/site-content.ts` re-exporting every JSON file, typed.

## Milestone 3 — Shared UI
- [ ] `ui/`: button, section-heading, icons, illustrations, parallax-layer, aurora-wash,
      glass-panel.
- [ ] `layout/`: header (desktop nav + Departments dropdown + mobile drawer + Book Appointment
      CTA), footer, demo-badge, whatsapp-button.

## Milestone 4 — Signature 3D hero
- [ ] Port `use-reduced-motion.ts` / `use-webgl-support.ts` from `Demo`.
- [ ] `three/scene-error-boundary.tsx` (ported, same pattern).
- [ ] `three/pulse-scene.tsx` — original abstract scene (glass spheres + pulse rings + central
      glow), scroll-progress-driven camera.
- [ ] `three/scene-canvas.tsx` — WebGL gate, Suspense/loading, poster fallback, GSAP
      ScrollTrigger wiring.
- [ ] Wire into Home below the rotating banner.

## Milestone 5 — Pages (22 routes, see `PRD.md`)
- [ ] Home (`/`) — `HeroSlider` banner + `SceneCanvas` signature section + highlights grid.
- [ ] `/about` — story, mission/values, illustrative milestones, multi-layer parallax.
- [ ] `/departments` (hub) + 6 detail pages (cardiology, orthopedics, neurology, pediatrics,
      maternity, emergency).
- [ ] `/doctors`.
- [ ] `/services`.
- [ ] `/health-packages`.
- [ ] `/blog` (hub) + `/blog/[slug]` with `CommentBox`.
- [ ] `/gallery` with parallax-aware `ZoomGallery`.
- [ ] `/patient-resources` (FAQ).
- [ ] `/appointment` + `appointment-form.tsx`.
- [ ] `/contact` + `inquiry-form.tsx` + `MapPlaceholder` + `WhatsAppButton`.
- [ ] `/insurance-billing`.
- [ ] `/careers`.
- [ ] `/privacy`, `/terms`.
- [ ] `robots.ts`, `sitemap.ts`, `not-found.tsx`, `icon.svg`.

## Milestone 6 — CMS admin
- [ ] `public/admin/index.html` (ported pattern from `Demo`, re-branded).
- [ ] `public/admin/config.yml` — one collection per `content/*.json` file.
- [ ] Verify in-browser: `config.yml` loads without a Decap config-validation error.

## Milestone 7 — SEO
- [ ] Run `mhtsdigixr-seo` skill at Custom tier; fill `SEO.md` checklist + keyword map.
- [ ] Per-page `metadata` (title ≤60, description ≤160), `robots: { index: false }`.
- [ ] `sitemap.ts` covering all static + dynamic routes, excluding `/admin`.

## Milestone 8 — Verification
- [ ] In-browser: desktop + mobile (375px) for every route.
- [ ] 3D hero renders + scroll-linked motion works; reduced-motion holds it still; WebGL-off
      path shows the poster without crashing.
- [ ] Both forms: validation, simulated submit, success state.
- [ ] Gallery zoom/lightbox keyboard operability.
- [ ] Blog comment UI add/display.
- [ ] `public/admin` loads cleanly.
- [ ] `npm run build` — zero errors.
- [ ] `npm run type-check` — zero errors.

## Milestone 9 — Handover
- [ ] `git init` + sensible first commit.
- [ ] Status report to the owner: what was built, every judgment call/deviation, explicit
      confirmation nothing was pushed or deployed.
- [ ] **Do not** create a GitHub repo, push, or set up hosting without the owner's explicit
      go-ahead.

## Phase 2 (not in this build — logged for completeness)
- Archify architecture diagram (no Archify skill run this session).
- Real Netlify deployment + Identity/Git Gateway setup (owner decision, out of scope per
  `PRD.md`).
