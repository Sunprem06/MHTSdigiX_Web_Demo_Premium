# Beacon Ridge Multispecialty Hospital — Premium-tier MHTSdigiXR demo

This file is the entry point every AI agent (Claude Code, Cursor, Codex, OpenCode — see
`AGENTS.md`, a copy of this file) should read first when working in this folder.

## What this project is
A MHTSdigiXR capability-showcase demo at the **Premium** package tier: a fully custom,
Creative/Extra-Creative website for a **fictional** multi-specialty hospital, "Beacon Ridge
Multispecialty Hospital" (Coimbatore). It is not a real hospital, and no content on it should
ever be mistaken for real medical advice, a real clinician's credentials, or a real patient's
experience. See `PRD.md` for the full brief and acceptance criteria.

This is the third and final tier in the MHTSdigiXR portfolio set: `..\Starter` (catering),
`..\Standard` (travel agency), and this project (hospital/healthcare, Premium). It is the only
one of the three with the live 3D/motion signature feature and a full production-grade CMS
pattern — see `..\WEBSITE-PACKAGE-STANDARDS.md` for the tier matrix this project is scoped
against.

## Read these, in order
1. `RULES.md` — hard constraints (scope, honesty, healthcare-specific content rules, code,
   security, SEO, accessibility, git).
2. `TASKS.md` — current progress; tick items as you finish them.
3. `PRD.md` — what and why.
4. `ARCHITECTURE.md` — how the app is put together (stack, folders, the 3D/CMS patterns
   reused from `..\Demo`).
5. `DESIGN.md` — brand tokens, components, and the **full-strength** `premium-3d-uiux`
   reasoning (this is the one tier in the portfolio that earns it).
6. `SEO.md` — the Custom/full-technical-baseline SEO checklist and keyword map.
7. `MEMORY.md` — dated decisions and gotchas; append to it, don't delete from it.

## Non-negotiables (see `RULES.md` for the full list)
- "Beacon Ridge Multispecialty Hospital" is a fictional brand. Never add real contact info,
  real addresses, real pricing presented as quotable, testimonials, or medical credentials.
- **Healthcare-specific**: no real doctor names/licences/board certifications, no real patient
  photos or testimonials, no copy that reads as actual medical advice or diagnosis. Every
  doctor profile and every blog post carries an explicit "illustrative" / "not medical advice"
  disclosure.
- Keep the "Concept Website Demo" disclosure (`DemoBadge`) visible on every page.
- No real or stock photography anywhere — inline SVG/CSS illustrations only, in a palette and
  type system distinct from `Demo` and `Standard`.
- This project *does* carry the Premium-only signature feature (live/interactive 3D hero) and
  the full Decap-CMS content pattern — unlike `Standard`, do not strip these back.
- `main` stays deployable; no secrets ever committed (none exist — the whole site is
  static-prerendered, forms are simulated, and the CMS backend only activates on a real
  Netlify deployment this project does not perform).

## Working rules
- Read `CLAUDE.md` → `RULES.md` → `TASKS.md` at the start of every session.
- Tick tasks in `TASKS.md` as they finish; add new ones rather than keeping them in chat.
- Any decision that would surprise the next developer goes in `MEMORY.md` (one dated line).
- Scope changes update `PRD.md` first, then `TASKS.md`.

## Commands
```bash
npm install
npm run dev          # http://localhost:3000
npm run build         # production build (must pass with zero errors before any commit)
npm run type-check    # tsc --noEmit (must pass with zero errors)
```
