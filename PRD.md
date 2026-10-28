# PRD — Beacon Ridge Multispecialty Hospital (Premium)

## What this is
A MHTSdigiXR capability-showcase demo at the **Premium** package tier: a fully custom,
Creative/Extra-Creative healthcare website for a fictional brand, "Beacon Ridge Multispecialty
Hospital" (Coimbatore, India — a real city used for plausible local-SEO demonstration, exactly
as `Standard` used Kochi; the hospital itself, its staff and its contact details are entirely
invented). It exists to show a prospective client — realistically a hospital, clinic, diagnostic
chain, or other healthcare group — what a Premium-tier engagement delivers: everything Standard
has, plus the live 3D/motion signature hero, a full production-grade CMS, multi-layer
scroll-linked parallax, and a richer page set. See `..\WEBSITE-PACKAGE-STANDARDS.md` for the
tier matrix this project is scoped against.

## Who it's for
1. **MHTSdigiXR's own sales process** — shown to prospective healthcare-sector clients
   (hospitals, multi-specialty clinics, diagnostic centers, wellness chains) to demonstrate
   Premium-tier capability, including the signature live-3D feature no competitor in the
   source pricing sheets offers.
2. **Internal reference** — alongside `Demo` (interior design) and `Standard` (travel), this is
   the portfolio's reference build for a *content-heavy, multi-department* Premium site: the
   next Premium build in a different vertical can fork this project's department/doctor/blog
   content-file pattern and CMS collection structure.

Fictional end-user persona this site's copy is written for: a patient or a patient's family
member in or around Coimbatore researching a multi-specialty hospital for planned care (a
cardiology consult, a joint replacement, a maternity booking), a second opinion, a preventive
health checkup, or who needs to quickly find emergency-care guidance — not a first-time acute
emergency in progress (the site repeatedly tells that user to call local emergency services,
never to use the website to triage).

## Goals (in priority order)
1. Demonstrate every Premium-tier feature row from `WEBSITE-PACKAGE-STANDARDS.md` working
   end-to-end: editable rotating banner **and** a separate live/interactive 3D-motion hero,
   multiple scroll-linked parallax layers, full Decap-CMS content pattern, blog with a comment
   UI, zoom gallery with custom motion/parallax, 2+ inquiry/appointment forms, social/Google
   Map/WhatsApp integration, full technical SEO baseline, free-SSL mention (placeholder).
2. Read as a distinct, deliberately-designed brand — not a re-skin of `Demo` or `Standard`, and
   not a re-skin of a generic SaaS dashboard either (healthcare needs its own calmer, trust-first
   visual language even at full `premium-3d-uiux` strength — see `DESIGN.md`).
3. Handle healthcare content more carefully than any other tier in this portfolio: every claim
   must be clearly illustrative, every clinician fictional, every "advice"-shaped sentence
   explicitly disclaimed as not medical advice. This is the primary risk this project manages
   that `Starter` and `Standard` did not have to.
4. Stay honestly a concept demo throughout (no real hospital, staff, or patient claims) while
   still reading as production-credible in its design and interaction quality.
5. Ship with zero build/type errors and a working git history, ready for the owner to review
   before any deployment or GitHub decision.

## Non-goals (explicitly out of scope at this tier/project)
- No real backend, database, patient-records system, payment flow, or real appointment
  scheduling integration — this is a capability showcase, not a production Hospital
  Information System (HIS). Forms simulate submission (client-side validation + success state).
- No real Netlify Identity / Git Gateway login flow for the CMS admin — that only works once
  this project is actually deployed to Netlify with Identity + Git Gateway enabled in the
  dashboard, which is explicitly out of scope here (see `ARCHITECTURE.md`). The admin UI must
  still build and load `config.yml` cleanly, matching `Demo`'s now-merged pattern.
- No real Google Maps API embed (would require a real API key for a fictional address) — an
  illustrative placeholder is used instead, same pattern as `Standard`.
- No content that could be read as actual triage, diagnosis, treatment, or emergency-response
  instructions. Every page that discusses symptoms, conditions, or "when to seek care" carries
  an explicit non-medical-advice disclaimer and points to calling real emergency services.
- No GitHub repo creation, push, or hosting/deployment setup without the owner's explicit
  go-ahead — same two-step pattern already used for `Starter` and `Standard`.

## Pages (22 routes — within the Premium tier's 15–20+ band, nothing padded beyond what a real
multi-specialty hospital site would coherently need)
| # | Route | Purpose |
|---|---|---|
| 1 | `/` | Home — rotating banner hero + the live 3D/motion signature section + highlights |
| 2 | `/about` | Hospital story, mission/values, illustrative milestones, accreditation-style badges (fictional) |
| 3 | `/departments` | Departments hub — 6 featured specialties + a "more specialties" grid |
| 4 | `/departments/cardiology` | Cardiology & Heart Care detail |
| 5 | `/departments/orthopedics` | Orthopedics & Joint Care detail |
| 6 | `/departments/neurology` | Neurology & Spine Care detail |
| 7 | `/departments/pediatrics` | Pediatrics & Child Health detail |
| 8 | `/departments/maternity` | Maternity & Women's Health detail |
| 9 | `/departments/emergency` | Emergency & Trauma Care detail |
| 10 | `/doctors` | Doctors/Team — fictional, illustrated profiles, no real headshots |
| 11 | `/services` | Hospital-wide services: diagnostics, pharmacy, ambulance, day care, telehealth |
| 12 | `/health-packages` | Preventive health-checkup packages (illustrative "starting from" pricing) |
| 13 | `/blog` | Blog hub — wellness/informational posts |
| 14 | `/blog/[slug]` | Blog post detail + demo/local-only comment UI (`generateStaticParams`) |
| 15 | `/gallery` | Zoom gallery with custom motion/parallax — illustrated hospital spaces |
| 16 | `/patient-resources` | Visiting hours, what to bring, discharge process, FAQ |
| 17 | `/appointment` | Appointment-request form (inquiry form #1) |
| 18 | `/contact` | General inquiry / second-opinion-request form (inquiry form #2) + map + WhatsApp |
| 19 | `/insurance-billing` | Insurance partner list (fictional), billing FAQ |
| 20 | `/careers` | Illustrative sample openings (explicitly not active job postings) |
| 21 | `/privacy` | Privacy policy (placeholder, demo-appropriate) |
| 22 | `/terms` | Terms of use (placeholder, demo-appropriate) |

`/admin` is **not** an app route — same as `Demo`, the CMS lives at the static
`public/admin/index.html` + `config.yml` (Decap CMS), outside the Next.js route tree and
excluded from the sitemap.

## Acceptance criteria
- All 22 routes render, are linked from nav/footer/cross-links (no orphan pages), and pass
  `npm run build` + `npm run type-check` with zero errors.
- The home page's live 3D scene renders on WebGL-capable browsers, degrades to a static poster
  on failure/unsupported browsers, and respects `prefers-reduced-motion`.
- Both forms (`/appointment`, `/contact`) validate inline, simulate submission, and show a
  success state; neither sends data anywhere.
- The gallery's zoom/lightbox and the blog's comment UI are fully keyboard-operable.
- `public/admin/index.html` loads `config.yml` without a Decap CMS config-validation error
  (verified in-browser) — login itself is expected to be unavailable pre-deployment, and the
  page says so.
- Every page keeps the `DemoBadge` disclosure and the site-wide "Concept Website Demo" framing.
- `SEO.md`'s Custom-tier checklist is complete for every applicable item; N/A items are marked
  and explained.
