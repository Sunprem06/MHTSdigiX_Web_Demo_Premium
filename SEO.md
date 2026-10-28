# SEO — Beacon Ridge Multispecialty Hospital (Premium)

Package tier: **Premium** · Skill tier: `mhtsdigixr-seo` **Custom** (full scope)

> Context: this is an undeployed, fictional capability-showcase demo (`robots: { index: false }`,
> disallow-all `robots.txt` — see `RULES.md`). The checklist below is filled in as it would be
> for a real Custom-tier client, so it demonstrates what a real handover deliverable looks like,
> with items that only apply to a live, real business explicitly marked N/A (demo).

## Scope for this tier

Per `WEBSITE-PACKAGE-STANDARDS.md`, Premium gets "full technical SEO baseline" — this maps
directly onto the `mhtsdigixr-seo` skill's **Custom** tier (all 7 categories, full depth),
unlike `Standard`, which mapped onto a point between the skill's Starter and Custom tiers.

| # | Category | Custom scope (this project) | What's actually runnable on an undeployed fictional demo |
|---|---|---|---|
| 1 | Website & page audits | Full 7-dimension `page-audit` + `technical-baseline.md` on every page | Technical baseline fully applicable (code-level); competitive/live-traffic dimensions N/A (demo) |
| 2 | Keyword research | Full 90-day plan per target keyword, `keyword-deep-dive` | Lite keyword map completed below (1 primary + secondaries per page); full 90-day plan listed as a Recommended upgrade — needs real GSC/GA4 data this demo doesn't have |
| 3 | Competitor analysis | Full top-10 + gap matrix | N/A (demo) — no real local market for a fictional hospital; see note below |
| 4 | SEO content creation | Briefs → articles, refreshes, featured-snippet targeting, E-E-A-T-rich expert-interview pieces | 5 illustrative blog posts written with on-page structure (H1/H2, intro, internal links); full content-brief pipeline and snippet optimization listed as upgrades |
| 5 | Semantic gap analysis | Full `semantic-gap-analysis` + `topic-cluster-planning` | Lightweight topic clustering done by hand below (departments ↔ blog ↔ health-packages cross-links); full tooling pass listed as an upgrade (needs real competitor SERP data) |
| 6 | Link-building strategies | Full phase-tree outreach plan | N/A (demo) — no real domain to build links to; local-citation/GBP checklist still completed below |
| 7 | E-E-A-T & content quality | Full scored audit | Trust-signal checklist completed below; full scored audit listed as an upgrade — **this tier's E-E-A-T story is unusually important given the healthcare vertical** (Google's E-E-A-T guidance explicitly calls out "Your Money or Your Life" health content for extra scrutiny), so this is flagged, not skipped |

### Healthcare-specific SEO note (YMYL)
Health content is Google's textbook "Your Money or Your Life" (YMYL) category — real
deployments need genuine author expertise, medical review, and no advice-shaped claims to rank
or to pass quality review. This demo cannot satisfy real E-E-A-T (there is no real clinician
reviewing it — it's fictional), so every content page carries an explicit non-medical-advice
disclaimer instead of claiming expertise it doesn't have. A real client project at this tier
would need a named, credentialed medical reviewer credited on every health-content page before
publishing — flagged under Recommended upgrades.

## Technical baseline

| Check | Status | Note |
|---|---|---|
| HTTPS + canonical host redirect | N/A (demo) | Not deployed; free SSL is a Premium-tier inclusion once hosted |
| `robots.txt` present, not blocking key assets | Pass | Intentionally disallow-all — see `RULES.md` |
| XML sitemap generated | Pass | `src/app/sitemap.ts` → `/sitemap.xml`, all static + dynamic (`/blog/[slug]`) routes, `/admin` excluded |
| Sitemap submitted to GSC/Bing | N/A (demo) | No live domain to verify |
| Canonical tag on every page, no accidental noindex | Pass (noindex is intentional site-wide) | Every page sets `alternates.canonical`, incl. dynamic `[slug]` |
| Custom 404, no broken internal links | Pass | `src/app/not-found.tsx`; nav/footer/cross-links verified in-browser |
| Clean, readable URLs | Pass | `/departments/cardiology`, `/blog/preparing-for-your-first-prenatal-visit`, etc. |
| Unique `<title>` (≤60) + meta description (≤160) per page | Pass | See Keyword map below for representative values |
| Exactly one H1 per page; logical H2/H3 hierarchy | Pass | Verified across all 22 routes |
| Descriptive alt text / `aria-label` on meaningful images | Pass | All SVG illustrations use `role="img"` + `aria-label`; decorative icons `aria-hidden` |
| Open Graph + Twitter card tags | Pass | Set in `layout.tsx` root metadata |
| Internal links between core + department + blog + package pages | Pass | Header/footer nav, departments hub ↔ detail, department ↔ relevant doctor/blog posts, health-packages ↔ contact/appointment |
| PageSpeed / Core Web Vitals | Not measured | No live deployment; all pages static-prerendered except the 3D scene's client bundle (code-split, lazy-mounted below the fold on Home) |
| Images WebP/AVIF, lazy-loaded | N/A | No raster images — all imagery is inline SVG (see `DESIGN.md`); the one asset-heavy element (3D scene) is gated behind `useWebglSupport()` and `Suspense` |
| Mobile responsive, tap targets ≥48px, no horizontal scroll | Pass | Verified in-browser at 375px width |
| Fonts preloaded, `font-display: swap` | Pass | `next/font/google` (Outfit, Plus Jakarta Sans) handles both automatically |
| `MedicalOrganization`/`LocalBusiness` schema (JSON-LD) | N/A (demo) | No real NAP to publish — flagged as a Recommended upgrade; code-ready structure noted below |
| GA4 / GSC / Bing Webmaster | N/A (demo) | Requires a live domain |
| Google Business Profile | N/A (demo) | No real business |
| `/admin` kept out of sitemap + explicitly noindexed | Pass | `noindex, nofollow` meta in `public/admin/index.html`; excluded from `sitemap.ts` |
| Consent/cookie handling (India DPDP Act) | N/A (demo) | No cookies/analytics/personal-data collection exist on this static demo; flagged for real deployment |

## Keyword map (1 primary + secondaries per page — representative pages shown)

| Page | Primary keyword | Secondary keywords | Intent | Title (≤60) |
|---|---|---|---|---|
| Home | multispecialty hospital coimbatore | best hospital coimbatore, hospital with emergency care | Commercial | "Beacon Ridge Multispecialty Hospital — Concept Hospital Website Demo" |
| About | about beacon ridge hospital | hospital facilities coimbatore, multispecialty hospital campus | Informational | "About Us \| Beacon Ridge Multispecialty Hospital" |
| Departments (hub) | hospital departments coimbatore | heart care, orthopedic care, neurology care, maternity care | Commercial | "Departments \| Beacon Ridge Multispecialty Hospital" |
| Departments: Cardiology | cardiology hospital coimbatore | heart specialist, cardiac care department | Commercial | "Cardiology & Heart Care \| Beacon Ridge Hospital" |
| Departments: Orthopedics | orthopedic hospital coimbatore | joint replacement, knee pain specialist | Commercial | "Orthopedics & Joint Care \| Beacon Ridge Hospital" |
| Departments: Maternity | maternity hospital coimbatore | prenatal care, women's health department | Commercial | "Maternity & Women's Health \| Beacon Ridge Hospital" |
| Departments: Emergency | emergency hospital coimbatore | 24x7 emergency care, trauma center | Transactional | "Emergency & Trauma Care \| Beacon Ridge Hospital" |
| Doctors | hospital doctors coimbatore | multispecialty consultants, meet our doctors | Informational | "Our Doctors \| Beacon Ridge Multispecialty Hospital" |
| Services | hospital services coimbatore | diagnostics, pharmacy, ambulance service | Commercial | "Services \| Beacon Ridge Multispecialty Hospital" |
| Health Packages | health checkup packages coimbatore | preventive health checkup, executive health package | Commercial | "Health Packages \| Beacon Ridge Multispecialty Hospital" |
| Blog (hub) | hospital wellness blog | patient wellness tips, healthy living articles | Informational | "Blog \| Beacon Ridge Multispecialty Hospital" |
| Blog: heart-health habits | everyday habits healthy heart | heart health tips, cardiovascular wellness | Informational | "5 Everyday Habits That Support a Healthy Heart" |
| Blog: prenatal visit | first prenatal visit what to expect | pregnancy checkup guide, maternity care tips | Informational | "Preparing for Your First Prenatal Visit: What to Expect" |
| Gallery | hospital gallery coimbatore | hospital facilities photos, patient room tour | Informational | "Gallery \| Beacon Ridge Multispecialty Hospital" |
| Patient Resources | hospital visiting hours faq | what to bring hospital visit, discharge process | Informational | "Patient Resources \| Beacon Ridge Multispecialty Hospital" |
| Appointment | book hospital appointment coimbatore | doctor appointment request, department appointment | Transactional | "Book an Appointment \| Beacon Ridge Multispecialty Hospital" |
| Contact | contact beacon ridge hospital | second opinion request, hospital inquiry | Transactional | "Contact Us \| Beacon Ridge Multispecialty Hospital" |
| Insurance & Billing | hospital insurance coimbatore | cashless insurance hospital, billing faq | Informational | "Insurance & Billing \| Beacon Ridge Multispecialty Hospital" |
| Careers | hospital jobs coimbatore | nursing jobs hospital, hospital careers | Informational | "Careers \| Beacon Ridge Multispecialty Hospital" |

(All titles/metas above are implemented in each page's `export const metadata`, except
`/blog/[slug]`, whose title comes from `generateMetadata` reading `content/blog.json`.)

## E-E-A-T trust-signal checklist
| Signal | Status | Note |
|---|---|---|
| Author/byline on content pages | N/A (demo) | Fictional hospital, no real author — flagged for real deployment (named, credentialed medical reviewer required for YMYL content) |
| About/trust page present | Pass | `/about` — illustrative only, explicit fictional-brand framing |
| Clear contact information | Partial | `/contact`, `/appointment` present; all details are explicit placeholders, not real NAP |
| Reviewed/updated date on articles | Pass | Each blog post carries an illustrative "last reviewed" date in its JSON content |
| No unverifiable medical claims | Pass | Enforced by `RULES.md` healthcare honesty rules; every advice-adjacent page carries a disclaimer |
| HTTPS / security signals | N/A (demo) | Not deployed |

## Competitor snapshot
N/A (demo) — no real local market exists for a fictional hospital. For a real client this
would be a top-10 local-competitor SERP read (title/H1/page type/obvious strengths/schema
usage) per the Custom-tier `page-audit` + `keyword-deep-dive` workflows.

## Run log
| Date | Workflow | Result / file |
|---|---|---|
| 2026-10-28 | Technical baseline (manual, Custom scope — all 22 routes) | This file |
| 2026-10-28 | Keyword map (lite, manual, representative pages; full 90-day plan deferred — see upgrades) | This file |
| 2026-10-28 | E-E-A-T trust-signal checklist (manual) | This file |

## Recommended upgrades (this demo → a real Premium client, if commissioned for real)
- `MedicalOrganization` + `MedicalClinic` JSON-LD schema, Google Business Profile, and real
  NAP, once a real address/phone exists.
- Full top-10 competitor gap matrix and semantic/topic-cluster analysis per department and
  health-package line (Custom tier) once a real target market is defined.
- A **named, credentialed medical reviewer** on every department and blog page — the single
  highest-priority upgrade for a real healthcare client, given Google's YMYL/E-E-A-T scrutiny
  of health content; this demo cannot satisfy it honestly because the hospital is fictional.
- Full 90-day keyword ranking plans per target keyword, informed by real GSC/GA4 data.
- GA4 + Search Console + Bing Webmaster once the site has a real domain to verify.
- Monthly re-audit and content refresh cadence once live.
