# Memory — Beacon Ridge Multispecialty Hospital (Premium)

Dated, append-only. Short entries; don't delete past ones.

- **2026-10-28** — Project kicked off. Portfolio context: this is the third and final tier
  (`Starter`=catering, `Standard`=travel, **Premium**=hospital/healthcare). Fictional brand
  invented: "Beacon Ridge Multispecialty Hospital," Coimbatore (real city, used the same way
  `Standard` used Kochi — for plausible local-SEO demonstration only; the hospital, its staff
  and its contact details are 100% fictional).
- **2026-10-28** — Chose an **abstract** 3D signature scene (orbiting glass spheres + pulse
  rings around a glowing core) instead of a literal hospital-interior scene like `Demo`'s
  literal room. Reason: a literal OT/ward/equipment rendering risks reading as either clinically
  cold or as an implied claim about real facilities this fictional hospital doesn't have.
  Abstract "composed care, in motion" gets the same tier-required live/interactive/scroll-linked
  3D effort without that risk. See `DESIGN.md`.
- **2026-10-28** — Palette: indigo (`harbor`) + mint + rose, Outfit/Plus Jakarta Sans — chosen
  to be visually distinct from `Demo` (walnut/brass, Fraunces/Inter) and `Standard`
  (teal/coral/sand, Sora/Manrope), and deliberately calmer/trust-first than a generic SaaS
  palette despite using the full `premium-3d-uiux` treatment.
- **2026-10-28** — `premium-3d-uiux` applied at **full strength** here (unlike `Standard`'s
  deliberate one-notch-down treatment) — this is the one tier in the portfolio the global
  CLAUDE.md standard is actually meant for at full intensity. Documented comparison table in
  `DESIGN.md`.
- **2026-10-28** — Decap CMS content-file pattern reused structurally from `Demo`'s merged PR
  (https://github.com/Sunprem06/MHTSdigiX_Web_Interior_Demo/pull/1), but scaled from `Demo`'s
  ~9 section-shaped JSON files to a page-shaped set appropriate for a 22-route site (hero,
  departments, doctors, services, health-packages, blog, gallery, faq, footer, consultation).
  Nav structure, route structure, 3D scene parameters, and brand/demo-disclosure text stay
  hardcoded — same rationale `Demo` documented: editing those through a JSON field could
  silently break type safety or routing.
- **2026-10-28** — Real Decap/git-gateway login will not work in this build — it requires a
  live Netlify deployment with Identity + Git Gateway enabled in that site's dashboard, which
  is out of scope here (no GitHub repo created, nothing deployed). What's verified instead:
  `public/admin/index.html` loads and `config.yml` parses without a Decap config-validation
  error. This matches the task's explicit instruction and `Demo`'s own documented limitation.
- **2026-10-28** — Healthcare honesty rules are stricter than the rest of the portfolio: no
  real doctor credentials, no real/implied patient photos or testimonials, no content that
  reads as medical advice, no fabricated outcome statistics. See `RULES.md` for the full list
  — this is the main new risk surface this project manages that `Starter`/`Standard` didn't.
- **2026-10-28** — Department pages scoped to 6 (cardiology, orthopedics, neurology,
  pediatrics, maternity, emergency) with additional specialties (oncology, nephrology, ENT,
  general medicine, dermatology, ophthalmology) shown on the hub as cards linking to `/contact`
  rather than getting dedicated pages — keeps the 22-page total coherent for a real hospital
  site instead of padding toward an arbitrary number.
- **2026-10-28** — Implemented the 6 department detail pages as one dynamic
  `app/departments/[slug]/page.tsx` with `generateStaticParams`, not 6 duplicated folders —
  same pattern `Standard` used for its destinations. Produces the exact same 6 static URLs
  `PRD.md`/`ARCHITECTURE.md` list; just less duplicated page code.
- **2026-10-28** — Blog comments are local/demo-only (component state, optionally
  `sessionStorage`-mirrored for the current tab) — no backend, no cross-visitor persistence,
  explicitly labeled as such in the UI. Same "simulate, don't fake" principle as the forms.
- **2026-10-28** — Found and fixed a redirect loop in the `/admin` setup that `Demo`'s exact
  `next.config.mjs` pattern (copied verbatim at first) produces on this Next 16.4.3 install:
  a `redirect("/admin" -> "/admin/")` paired with a `rewrite("/admin/" -> "/admin/index.html")`
  loops forever (`ERR_TOO_MANY_REDIRECTS`), because Next's redirect source matching treats
  `/admin` as matching `/admin/` too, so the already-trailing-slash request redirects to
  itself. Verified in-browser (both `curl -D-` and the browser pane reproduced the loop).
  Fix: dropped the redirect entirely, rewrite both `/admin` and `/admin/` straight to
  `/admin/index.html`, and added `<link rel="cms-config-url" href="/admin/config.yml">` to
  `public/admin/index.html` so Decap's config fetch is pinned to an absolute path instead of
  depending on the visited URL's trailing slash. Verified both `/admin` and `/admin/` now load
  the Decap login screen with config.yml parsed successfully, no redirect loop, no config
  error. This looks like a latent bug in `Demo`'s merged pattern too (not something this
  project introduced) — worth a quick fix-forward there in a future session.
- **2026-10-29** — Moved to Hostinger Business Web Hosting at `premium.mhtsdigixr.com`,
  as a static export (`output: "export"` in `next.config.mjs`). Confirmed via `npm run build`
  all 31 routes are static/SSG with no API routes (same as the pre-move check). Two changes
  were required beyond the config flag:
  1. `src/app/sitemap.ts` / `robots.ts` needed `export const dynamic = "force-static"` —
     `output: "export"` requires it explicitly for any metadata route that computes a value
     (here, `new Date()` and the departments/blog lists), same fix as `Starter`/`Standard`.
  2. Dropped the `rewrites()` block from `next.config.mjs` entirely: `output: "export"`
     doesn't support `next.config` rewrites/redirects at all (`next build` warns and the
     rewrite silently does nothing), and it turned out not to be needed anyway —
     `public/admin/index.html` is a plain static file, and Apache-style static hosting
     (Hostinger) serves `index.html` for a directory request (`/admin/`) the same way it does
     for any other folder, no rewrite required.
- **2026-10-29** — Swapped the Decap CMS backend from `git-gateway` to `github` (OAuth),
  because Git Gateway is a Netlify-proprietary feature (Netlify Identity's proxy to GitHub)
  that cannot run on any non-Netlify host — there is no config that makes it work on
  Hostinger. Decap's GitHub backend logs `/admin` in directly against GitHub instead, but
  needs a server-side OAuth token exchange (a static site can't hold a client secret), so
  added a small Cloudflare Worker (`cms-oauth-worker/`, see its `README.md` for the GitHub
  OAuth App + Worker deploy steps) as that exchange service — chosen over a Hostinger Node
  app because `mhtsdigixr.com`'s DNS already lives on Cloudflare, making a custom-domain
  Worker binding trivial and free, and because it decouples CMS auth from whatever Hostinger
  plan/Node support turns out to be. Updated `public/admin/config.yml` (`repo:`, `base_url:`,
  `auth_endpoint:`) and stripped the now-unused `netlify-identity-widget.js` script and its
  bootstrap code from `public/admin/index.html`. Net effect: `/admin` login now works from
  any host, but requires (a) a GitHub OAuth App + deployed Worker, one-time setup, and (b)
  real GitHub collaborator access on `Sunprem06/MHTSdigiX_Web_Demo_Premium` for anyone who
  needs to log in — there's no separate Identity user list anymore.
