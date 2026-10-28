# Design — Beacon Ridge Multispecialty Hospital (Premium)

## Why this site gets the full `premium-3d-uiux` treatment (and what "full" means here)

MHTSdigiXR's global default (`~/.claude/CLAUDE.md`) sets `premium-3d-uiux` as the UI/UX
standard for all frontend work. `Standard`'s `DESIGN.md` applied it **one notch down** from
Premium, deliberately, to keep the three-tier ladder honest. This project is the tier where the
full treatment is earned — it's the only one of the three with the budget (Premium: 15–20+
pages, live 3D hero, full CMS) and the only one whose spec names it as the signature
differentiator. Applying it in full here, and only here, is what makes `Starter` →`Standard`
→`Premium` read as a real upgrade path rather than three skins of the same template.

| Treatment | Starter | Standard | **Premium (this site)** |
|---|---|---|---|
| Visual hierarchy, typography, spacing, hover/focus states | ✓ | ✓ | ✓ |
| Glassmorphism | ✗ | sparingly (header, cards, modal) | ✓ **throughout** — header, cards, forms, lightbox, dropdown menus, department/doctor cards, the gallery, the comment box |
| Aurora / ambient gradient wash | ✗ | static wash, hero only | ✓ **animated**, slow-drifting, multi-stop gradient — hero, 3D section backdrop, section dividers across the whole site |
| Slider / rotating banner | ✗ (static) | 1 slider + 1 carousel | ✓ editable rotating banner (home hero) — a *distinct* element from the 3D hero below it, per the tier spec's "banner **+** live 3D hero" wording |
| Parallax | ✗ | single-factor, one layer | ✓ **multiple layers**, different depth/speed factors per layer (`ParallaxLayer` extended with a `depth` prop), stacked on About, Departments hub and Gallery |
| Live/interactive 3D or WebGL hero | ✗ | ✗ | ✓ — the tier's signature feature (see "The 3D scene" below) |
| Scroll-linked camera/motion | ✗ | ✗ | ✓ — GSAP `ScrollTrigger` drives the 3D camera's position/rotation as the visitor scrolls past the signature section |
| Admin / editable content | ✗ | lightweight local-only demo | ✓ **full Decap-CMS pattern** (JSON content files + `public/admin`), reused from `Demo`'s merged pattern |

See `..\WEBSITE-PACKAGE-STANDARDS.md` ("Signature feature" row) and `RULES.md` for the hard
tier boundary this table encodes.

### The 3D scene: abstract, not literal — and why that's the *right* full-strength choice
`Demo` renders a literal interior (a room, furniture, materials) because Atelier Interiors is
selling spatial/material design — literalism *is* the value proposition there. A hospital is
different: a literal 3D interior (a ward, an OT, instruments) would either read as clinically
cold, mildly unsettling for a healthcare audience, or risk implying real clinical spaces/
equipment this fictional hospital doesn't have. So the signature scene here
(`pulse-scene.tsx`) is deliberately **abstract** — a calm, slowly orbiting cluster of
translucent glass-like spheres and soft pulsing light rings around a warm central core,
scroll-linked so the camera glides past it rather than the geometry itself jumping. It reads as
"composed care, in motion" without depicting anything clinical. This is still the full
Premium-tier signature feature (live, interactive, WebGL, scroll-linked camera, with the same
poster/error-boundary/reduced-motion safety net as `Demo`) — the *content* of the scene is the
judgment call, not the *tier* of effort put into it. See `ARCHITECTURE.md`.

### 3D-effect discipline (per the global `premium-3d-uiux` rule: never decorative-only)
- The 3D scene's scroll-linked motion gives the visitor a sense of progress through the
  "Signature Care Experience" section's three copy beats (compassion → expertise → facilities) —
  it's tied to navigation/narrative, not spinning for its own sake.
- Glassmorphism is reserved for surfaces that are genuinely layered over something (sticky
  header over page content, modal over gallery grid, dropdown over nav) — never applied to a
  flat card with nothing beneath it.
- The animated aurora wash is capped to low-opacity, large, slow-moving gradients (`animate`
  duration ≥ 18s) so it reads as ambient lighting, not a distracting background animation; it
  is fully disabled under `prefers-reduced-motion`.
- No parallax layer moves faster than its scroll distance — this is a hospital site visited by
  people who may be anxious or reading on a budget phone; motion supports a calm, premium feel,
  it never fights for attention or risks motion sickness.

## Brand tokens
Chosen deliberately distinct from `Demo`'s walnut/brass editorial palette (Fraunces/Inter) and
`Standard`'s teal/coral/sand travel palette (Sora/Manrope), so all three portfolio sites read as
separate brands, not re-skins of one template. Healthcare calls for a calmer, trust-first base
(cool, airy canvas; a grounded indigo rather than a "techy" blue; a soft clinical mint; a warm
human accent) even while using the richest motion/depth treatment of the three.

| Token | Value | Use |
|---|---|---|
| `--color-canvas` | `#F3F8F9` | page background — cool, airy, not sterile-white |
| `--color-surface` | `#FFFFFF` | card/panel backgrounds |
| `--color-surface-dim` | `#E7F0F2` | alternating section background |
| ink (text) | `#121A24` / soft `#46525E` / faint `#7B8794` | body text (≥ 4.5:1 contrast on canvas/surface) |
| `harbor` (primary, indigo) | 400 `#5262C2`, 500 `#32408F`, 600 `#28336E` | primary CTAs, links, active nav, header glass tint, 3D core glow |
| `mint` (secondary) | 400 `#5CC4AE`, 500 `#2FAE94`, 600 `#238876` | department/service accents, success states, badges |
| `rose` (tertiary, human-warmth accent) | 400 `#F5768A`, 500 `#F2546B`, 600 `#D53B54` | appointment/booking CTAs, urgent-care highlight, form focus accents |
| `violet` (aurora-only accent) | 400 `#AFA3F7`, 500 `#8C7CF0` | ambient aurora gradient stops only — never used for text or solid UI fills |
| `--font-display` | Outfit | headings — geometric, confident, modern-clinical |
| `--font-body` | Plus Jakarta Sans | body text, UI labels — warm, highly legible, accessible to an older/more stressed audience |
| `--radius` | `sm` 10px / `md` 20px / `lg` 32px | rounder than `Standard`'s scale — reads softer/more caring, appropriate to healthcare |
| `--space` scale | Tailwind default (4/8/12/16/24/32/48/64) | consistent spacing rhythm |

## Voice & tone
Calm, plain-spoken, reassuring — "Care, composed around you." Confident about capability
(multi-specialty breadth, modern facilities) without ever sounding like it's selling outcomes
or making promises about results. Avoids both generic SaaS copy and over-clinical jargon;
avoids fear-based urgency language. Language: English only. Every page that could be read as
giving medical guidance opens or closes with the non-medical-advice disclaimer in plain words,
not small-print legalese.

## Components
| Component | Variants | Notes |
|---|---|---|
| Header / nav (`Header`) | desktop inline nav + Departments dropdown, mobile drawer | sticky, `.glass-surface`, persistent "Book Appointment" CTA button, `aria-expanded`/`aria-controls` kept in sync |
| Button (`Button`) | primary (filled harbor), secondary (outline), accent (filled rose, for booking CTAs), ghost | min height 48px, visible focus ring |
| `AuroraWash` | hero / section-divider variants | low-opacity animated multi-stop gradient; `prefers-reduced-motion` freezes it |
| `GlassPanel` | card / modal / dropdown variants | the shared glassmorphism surface (backdrop-blur + translucent fill + hairline border) used across cards, lightbox, dropdown, forms |
| Hero banner slider (`HeroSlider`) | 3 auto-rotating slides, dot + manual controls | pauses on hover/focus; disables auto-rotate under `prefers-reduced-motion`; `aria-live` slide announcer |
| `SceneCanvas` / `PulseScene` | Tier C interactive (always-on for this project) | loading + failure + static-poster + reduced-motion states required, per `ARCHITECTURE.md` |
| `ParallaxLayer` | `depth` prop (0–1, multiple layers per section) | passive scroll listener, `requestAnimationFrame`-throttled, no-ops under reduced motion |
| Department card (`DepartmentCard`) | hub grid / "more specialties" compact variant | links to detail page or, for non-dedicated specialties, to `/contact` |
| Doctor card (`DoctorCard`) | grid (`/doctors`) / inline (department page) | illustrated monogram avatar, fictional-profile disclosure, no photographic headshot ever |
| Zoom gallery (`ZoomGallery`) | grid → modal lightbox, parallax-depth hover on grid tiles | keyboard: Enter/Space to open, ←/→ to browse, Esc to close; focus moves to close button on open |
| `CommentBox` (blog) | list + add-comment form | explicit "demo comment box, not shared with other visitors" note; local/session-only state |
| Inquiry forms | `/appointment` (department/doctor/date fields), `/contact` (subject dropdown incl. "second opinion") | inline validation, accessible labels, simulated submit + success state, explicit "not sent anywhere" success copy |
| `MapPlaceholder` | — | stylized, non-interactive SVG map, same pattern as `Standard` |
| `WhatsAppButton` | floating, fixed bottom-right | placeholder number, prefilled appointment-request message |
| Footer | — | brand blurb, nav, placeholder contact, placeholder social links, demo badge, insurance/careers/privacy/terms links |
| `DemoBadge` | persistent "Concept Website Demo" label | appears on every page |

## Imagery
Zero real or stock photography anywhere — same honesty pattern established by `Demo` and
`Standard`, with an extra healthcare-specific reason (no real/implied patient or clinical
imagery). All imagery is inline SVG/CSS, in a palette and illustration style distinct from both
other portfolio sites:
- **Facility illustration set** (`illustrations.tsx`): lobby/reception, patient room, OT
  exterior (clean, abstracted — no instruments or clinical detail depicted), pediatric play
  corner, diagnostic lab, healing garden/courtyard, cafeteria, ambulance bay — line-art over
  soft gradient backgrounds, used on `/gallery`, `/about`, and department pages.
- **Doctor monogram avatars** (`DoctorCard`): a two-letter initial on a soft gradient disc with
  a thin ring motif (standing in for a stethoscope loop) — never a photographic or
  photorealistic illustration that could be mistaken for a real headshot.
- **Department icon set** (`icons.tsx`): heart (cardiology), bone/joint (orthopedics), brain
  (neurology), child/toy (pediatrics), maternity/care (maternity), siren/cross (emergency),
  plus a general medical-cross mark for the brand and the ambulance/pharmacy/diagnostics
  service icons.
- **`PulseScene`** (the 3D signature element): abstract glass spheres + light rings, not a
  literal rendering of any hospital space — see "The 3D scene" above.
- **`MapPlaceholder`**: stylized, non-interactive SVG map on `/contact` and `/appointment`.

## Accessibility notes
- All interactive elements have a visible focus ring (`globals.css`).
- Mobile tap targets ≥ 48px (buttons, nav links, gallery controls, form inputs).
- `prefers-reduced-motion` disables: the 3D scene's `ScrollTrigger` camera motion, the hero
  slider's auto-rotate, all `ParallaxLayer` transforms, the `AuroraWash` animation, and CSS
  transitions generally.
- Form fields have associated `<label>`s and `aria-describedby` error messages; errors are
  also color-independent (text content, not color alone).
- Skip-to-content link present in the root layout.
- Zoom gallery modal and blog comment box are keyboard-operable (Enter/Space/←/→/Esc where
  relevant) and manage focus on open/close.
- Hero slider exposes an `aria-live="polite"` region announcing the current slide for screen
  reader users, independent of the visual dot indicators.
- Body copy defaults to a slightly larger base size and more generous line-height than a
  typical SaaS site — appropriate for a healthcare audience that may include older readers.

## References
- No Figma/Claude Design link — built directly from `..\Demo`'s 3D/CMS patterns and
  `..\Standard`'s multi-page/content-file/parallax/gallery patterns, merged and extended to
  full Premium-tier strength with a distinct healthcare-appropriate palette, typography,
  illustration set, and the additional Premium-only features (true 3D hero, multi-layer
  parallax, full CMS, blog comments) neither prior project carries.
