---
name: style-dna
description: The CritABCD visual design rules (theme tokens, corner radii, cards, buttons, banners, diamond navigation, full-bleed hubs, dark/light behaviour). Read before building or restyling ANY page or component so new UI matches the rest of the site and follows the theme switcher.
---

# CritABCD style DNA

One rule above all: **everything must follow the theme switcher.** The site has five
themes (classic, spatial, minimalist-academic, glassmorphic, bento) selected by
`data-theme` on `<html>`. `app/themes.css` defines ONE token layer; components consume
tokens and never branch on theme name. If a page looks wrong when the user changes
theme, a colour or a radius was hard-coded.

## 1. Colour — tokens only

Use `var(--…)`, never hex, for anything that is UI chrome.

| Purpose | Token |
|---|---|
| Page background | `--bg` (+ `--bg-image` as `backgroundImage`) |
| Card / panel | `--surface`, `--surface-elevated`; nested/inset: `--surface-inset`, `--surface-2` |
| Text | `--text`, `--text-muted`, `--text-subtle`; on a coloured fill `--text-on-accent` |
| Lines | `--border`, `--border-strong`, `--divider` |
| Brand / selected | `--accent`, `--accent-soft` (tinted fill), `--accent-2` |
| Primary button | `background: var(--gradient-cta); color: var(--text-on-accent)` |
| Status | `--success`, `--warning`, `--danger` (+ `-surface` for tinted backgrounds) |
| Top nav | `--nav-bg`, `--nav-fg`, `--nav-border` |

Allowed exceptions (identity, not chrome): a class's own gradient (`lib/classes.ts`
`CLASS_THEMES`), a live activity's `theme` gradient, role colours in the sustainability
game, 3D scenes, and data colours. Even then, text on top must stay readable in every
theme (use white on a dark gradient, never `--text`).

## 2. Corner radii — themed tokens, not Tailwind sizes

Radii differ per theme (`--radius-card` is 12px in Academic, 24px in Spatial), so a
Tailwind `rounded-2xl` (fixed 16px) looks "off" next to real cards. Use:

| Element | Class / value |
|---|---|
| Card, panel, stat box, modal | `rounded-[var(--radius-card)]` |
| Inner panel, tile, emoji chip | `rounded-[var(--radius-panel)]` |
| Button, input, select, table chip | `rounded-[var(--radius-control)]` |
| Hero banner (biggest surface) | `borderRadius: 'calc(var(--radius-card) + 8px)'` |
| Pills, avatars, dots | `rounded-full` |

Never leave a banner, image or table square-edged inside a page of rounded cards. Never
run a full-bleed banner into a gap at the side of the page: banners live **inside the
content column, same width as the cards beneath them**, and are rounded.

## 3. Elevation, borders, spacing

- Cards: 1px `--border`, `--shadow-card`; hover lift `--shadow-card-hover`. Hero: `--shadow-card-hover`.
- Existing helper: `className="chrome-card"` (background + border + radius + shadow from tokens).
- Content column: `mx-auto max-w-5xl px-6 md:px-10` (dashboards `max-w-6xl`). Vertical rhythm 16/24/32 px; cards use `p-5`.
- Grids: `grid gap-4 sm:grid-cols-2`, or `repeat(auto-fit, minmax(240px, 1fr))` for content-driven reflow.

## 4. Typography

Font is the theme's (`--font-display` / `--font-body`). Headings `font-extrabold`, tight
tracking on big display text (`letterSpacing: -1.5px` to `-3px`); eyebrow labels
`text-[10px]/text-xs font-black tracking-[0.3–0.4em] uppercase` in `--text-subtle` or
`--accent`. Body `text-sm`. Never below 11px.

## 5. Two visual families — pick deliberately

1. **Platform pages** (dashboard, classes, resources, settings, forms): soft cards on `--bg`, 1px borders, tokens everywhere.
2. **Live-class engine** (`components/design/live/*`): thick 2.5px `--text` borders and an offset "sticker" shadow (`cardStyle`, `btnStyle` in `ui.tsx`), on the activity's own dark gradient. Card radius already uses `--radius-card`. Keep it inside the engine.

Don't mix: no thick-border sticker cards on platform pages, no soft hairline cards inside the live engine.

## 6. Navigation and layout patterns

- **Diamond rail** (Design hub, teacher hub, class workspace): fixed at `left: 2rem`, vertically centred; each item is a rotated 8px square (12px + glow `--accent` when active) followed by a letter-spaced 9.5–11px uppercase label (`--text` active, `--text-subtle` otherwise). Content beside it gets `md:pl-52`. On phones it collapses to pill tabs. Any "back" link belongs in the banner, not in the rail.
- **Full-bleed snap hubs** (`TeacherHub`, `DesignHub`): sections `height: calc(100vh - 56px)`, `scroll-snap-type: y mandatory`, `overflow-y: auto` inside each section, diamonds to jump between them. Background from `--bg`, not fixed dark gradients.
- Top bar is `CritABCD` wordmark only (no badge), then Dashboard / Design / Resources / Settings / Papers.
- Tabs inside a page are server-rendered `Link`s with `?tab=` so they are shareable and need no client state.

## 7. Buttons and controls

- Primary: gradient CTA (above). Secondary: `border: 1px solid var(--border-strong); color: var(--text)`, transparent/inset background. Destructive: `--danger`.
- Sizes: `px-4 py-2 text-xs font-black tracking-wider` for compact caps buttons; `py-3 text-sm font-bold` for form submit.
- Every icon-only or emoji-only control needs a `title`/`aria-label`. Toggle buttons set `aria-pressed`. Focus ring: `focus:outline-none focus:ring-2` with `--accent`.
- Disabled: `disabled:opacity-50`, and say WHY in text when it is not obvious.

## 8. Emoji and avatars

Classes: emoji + gradient (`classLook`). Students in live sessions: deterministic dicebear avatar (`Avatar`). Dicebear SVGs must fill their box (`width/height 100%`), otherwise small sizes crop. Ids used to pick an avatar/persona must be globally unique (prefix packs: `c-…`).

## 9. Checklist before you ship a UI change

1. Switch through all five themes: no unreadable text, no square corners, no stray dark/light patches.
2. Phone width (375px): no horizontal scroll, tap targets ≥ 40px, 16px side gutter.
3. `prefers-reduced-motion`: no essential info in animation.
4. Empty, loading and error states exist and are worded for a teenager or a busy teacher.
5. No hard-coded colours or `rounded-2xl/xl/lg` outside the exceptions above.
