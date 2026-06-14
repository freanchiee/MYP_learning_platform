# New chat prompt — Individuals & Societies (I&S) paper recreation, AI-age edition

Copy everything below the line into a fresh chat. I'll also attach a screenshot of the
target UI immediately after pasting.

---

I want to build an **AI-age MYP Individuals & Societies exam** practice experience that
**exceeds** the standard MYP I&S paper format — not just match it. The new chat will be
focused on this. Read carefully before you start.

## Context — read this first

Repo root: `/Users/utkarshkumar/MYP_Learn/MYP_learning_platform/MYP_learning_platform/MYP_learning_platform`

Three skills are relevant; read them in full before touching anything:
- `~/.claude/skills/image-pipeline/SKILL.md` — how figures are stored, replaced,
  approved, served from Supabase, and wired into questions.ts. Use this as the
  storage / approval backbone, even though I&S has different content.
- `~/.claude/skills/scientific-svg-creator/SKILL.md` — quality bar for static SVGs
  (medium-to-high quality, copyright-safe, labels preserved, real components correctly
  arranged). Use these standards as the baseline; we'll add interactivity ON TOP.
- `~/.claude/skills/generate-paper-variants/SKILL.md` — paper-encoding conventions,
  registries, figImage strategies. I&S is explicitly mentioned as in-scope and
  "do NOT image text sources — write parallel original extracts in stem/passage".

I&S source papers live under `data/papers/i-and-s-{session}-{year}/` (some may be
spelled `individuals-societies-…` — check). Look for any existing encoded I&S papers
first. If none exist, ask me which paper to start from (I'll share a PDF or scan).

## What's different about I&S vs the science papers

I&S is **social sciences**: history, geography, economics, political science, civics,
sociology, anthropology. Stimulus material is typically:
- Maps (political, physical, choropleth, flow, historical, climate)
- Charts (line, bar, pie, stacked) of socio-economic data
- Photographs of artefacts, sites, events, people
- Source extracts (primary documents, secondary commentary, news clippings)
- Timelines, family trees, organisational charts
- Diagrams of systems (governance, supply chain, ecosystem services, urban planning)

The **constructs** assessed under MYP I&S criteria are:
- **A** Knowing and understanding (terminology, factual recall)
- **B** Investigating (research questions, sources, action plans)
- **C** Communicating (organisation, audience, referencing)
- **D** Thinking critically (analysis, source evaluation, perspectives, synthesis)

## What "exceed the standard, AI-age" means here

The standard MYP I&S paper is static text + flat images. **I want to replace each major
stimulus with an interactive, immersive artefact** — without changing what's being
assessed. Specifically:

1. **Three.js artefacts** for spatial / temporal / systemic content:
   - **3D rotatable maps** (drag to rotate; click regions for labels; year slider that
     animates borders/empires/migration flows)
   - **Architectural / archaeological 3D models** (a ziggurat, a coliseum, an Indian
     stepwell) that the student can orbit and explore; hotspots reveal labels/context
   - **Globe with overlays** (trade routes, climate zones, migration arrows) where the
     student can toggle layers and time periods
   - **Data globes / map flow** — animated flows for migration, trade, remittances
   - **3D timeline scrubbers** — drag a date and the scene morphs (sea levels rise,
     borders shift, a city grows)
   - **Network graphs** for governance / supply chains / cause-effect chains that the
     student can pan/zoom and inspect node by node

2. **Interactive 2D/HTML media** where 3D would be overkill:
   - **Interactive maps** (Leaflet/MapLibre or hand-rolled SVG): hover states, layer
     toggles, choropleth + time slider
   - **Interactive charts** (D3 or Recharts): hover for exact values, brush to filter,
     toggle series — *but the underlying data must match the markscheme exactly*
   - **Source-document viewer**: original-language text on left, translation on right,
     paragraph highlight on click, glossary tooltips
   - **Annotated photograph zoom**: pan/zoom an artefact with clickable annotation
     hotspots that reveal context

3. **AI-native exam features** (this is the "exceed the standard" part):
   - **Live source evaluation**: student annotates a source (highlight + tag bias /
     purpose / origin / limitation) — auto-feedback against the markscheme
   - **Perspective simulator**: present an event from two contemporary perspectives,
     student writes the synthesis (Criterion D)
   - **Branching scenario**: a Criterion B "investigation" task that adapts based on
     the student's prior decisions
   - **Generative essay scaffolding**: student writes a Criterion C extended response;
     the platform provides structure prompts (intro / claims / evidence / counter /
     synthesis) and live word count + citation check
   - **Comparative artefact pairing**: drag-and-pair two artefacts from different
     periods/regions and justify the connection

**Critical constraint: every interactive artefact must remain GROUNDED to an actual
MYP I&S paper.** The assessed construct must be unchanged. A 3D globe with a year
slider that asks "describe the change in colonial control between 1880 and 1914" is
still Criterion A/D — just rendered better. We are not inventing new exam content out
of thin air; we're replacing flat stimulus with immersive stimulus.

## Stack

- **Next.js 14 App Router** (already in place)
- **three.js / react-three-fiber** for 3D
- **drei** for camera controls, environment, text
- **leva** is fine for dev controls, hidden in production
- **Leaflet or MapLibre** for slippy maps; or **d3-geo** for hand-rolled projections
- **d3** for advanced charts; **recharts** is fine for simple ones
- Static fallback (SVG or PNG) for every interactive artefact, in case JS fails
- All assets to **Supabase Storage** under a new `i-and-s` (or `humanities`) bucket
  with the same `papers/{paperId}/{file}` key convention. Use
  `lib/supabase/admin.ts` `uploadPapersAsset()` — extend it if the bucket name
  derivation needs updating (currently splits paperId by `-`; double-check the I&S
  paperId format works, or pass the bucket explicitly).
- For interactive artefacts that ship as code (not assets), think about whether they
  live in `components/exam/figures/` (where the existing `code_rendered` path already
  works, and you'd tag the sidecar entry with `image_type: "code_rendered"` and
  `render_component: "MyComponent"`). That render path already exists in
  `components/exam/QuestionImage.tsx` — use it for the three.js / D3 components.
  Static SVG fallbacks should still be uploaded as `.svg` so the image-review
  dashboard has something to compare against.

## Workflow I want you to follow

1. **Look at the screenshot I'm about to paste.** That's the target UI for I&S
   review/play. Internalise it before writing any code.
2. **Audit existing I&S content.** Find any encoded I&S papers (`data/papers/i-and-s-*`
   or similar), figure out the current state, and tell me what we have.
3. **Pick ONE I&S paper to pilot.** Recommend which one. I'll confirm.
4. **Plan the artefact replacement.** For each figImage in the source paper:
   - Decide: static recreation (use scientific-svg-creator standard), interactive 2D,
     or three.js 3D.
   - Justify each choice — interactive should be used where it genuinely adds
     pedagogical value, not as decoration.
   - Note which AI-age exam features (live source eval, perspective simulator,
     branching scenarios) apply to which questions.
5. **Show me the plan.** Don't build everything before I see it — pilot on one
   question, get my sign-off on the UX, then scale.
6. **Build piecewise.** Each artefact gets:
   - A `code_rendered` React component (the interactive version)
   - A static SVG fallback (the "Original (IB)" comparison view shows the source IB
     image; the SVG fallback is what gets served if JS fails or for a printed export)
   - A sidecar entry tagging both
   - A short caption explaining what the student can do with it
7. **Keep the rendering pipeline intact.** `QuestionImage.tsx` already handles
   `code_rendered` + `ai_generated` + `original`. Don't fork it; extend it cleanly.
8. **Same review dashboard.** Approval still flips `figImages` in `questions.ts`. Same
   2-button card (✅ Approve / 📤 Upload) for static fallbacks; for the interactive
   component itself, approval just toggles `approved:true` in the sidecar so the
   component renders in the live exam.

## What I'll do

- Tell you which I&S paper to start with after you audit
- Show you the target UI screenshot up front
- Review your plan before you build at scale
- Sign off on the pilot question's UX before you do the rest of that paper
- Do the human review later via the dashboard

## What you should NOT do

- Don't invent I&S content — every stimulus traces back to a real MYP paper question
- Don't make interactivity that distracts from the assessed construct
- Don't build the exam runtime UI in this thread; we're focused on artefacts. The
  runtime already exists; we plug into it.
- Don't run the dev server or modify questions.ts during recreation. Approval handles
  the questions.ts swap.
- Don't pile on three.js where a clean SVG would teach the same thing. 3D for
  spatial/temporal/systemic content where rotation/zoom/time slider actually helps
  understanding. 2D otherwise.

## First message I want from you

A confirmation that you've read the three skills, then a one-paragraph plan for how
you'll approach the audit step (step 2 above). No code yet. After that I'll send the
UI screenshot and we'll proceed.

---
