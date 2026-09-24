---
name: live-class-creator
description: Build a new Kahoot-style live, host/join classroom activity (quiz, worksheet, or team icebreaker) for MYP Design, using the platform's generic Live Class engine. Use when asked for a new live session, live game, live quiz, or icebreaker for a specific MYP year group.
---

# Live Class Creator

This skill documents the pattern behind the platform's **Live Class** feature
(`/design/live/...`) — a reusable engine so a new year-wise live activity is
**one new data file**, not new host/join UI code.

It was extracted from three one-off standalone HTML builds (Sustainability
Check, Prototyping for People W1-2, Unit 1 Kickoff, Design Studio Icebreaker)
that all independently reinvented the same host/join/Supabase-realtime
skeleton. If you're about to hand-roll another one-off HTML file with its own
`sb.channel(...)` subscriptions and host/join views, **stop — use this engine
instead.**

## Where things live

```
data/design/live/types.ts        — the declarative activity schema (read this first)
data/design/live/<activity>.ts   — one file per activity, pure data
data/design/live/registry.ts     — LIVE_ACTIVITIES + getLiveActivity(id)
lib/design-live/hooks.ts         — useLiveRow / useLiveTable (Realtime + poll fallback)
lib/design-live/scoring.ts       — generic completeness/score helpers
lib/design-live/types.ts         — DB row shapes
lib/design-live/avatar.ts        — deterministic per-player dicebear avatar, seeded off live_players.id
components/design/live/          — the ENGINE (do not fork; extend it)
  ui.tsx                         — shared visual primitives (Avatar, ProgressCell, PlayerPreview, MCQOptions...)
  LiveHost.tsx                   — host/projector screen, all stage types
  LiveJoin.tsx                   — student screen, all stage types
  LiveActivityRunner.tsx         — role picker (host vs join), reads ?s=CODE / ?host=1
  LiveHub.tsx                    — /design/live year-wise picker
  MyActivityHistory.tsx          — "Hosted by me" + "Joined by me" tabs, symmetrical for
                                    teachers and students — nothing either role does is ever lost
  ChatPanel.tsx                  — private 1:1 host<->student chat thread (over live_events)
  Podium.tsx                     — the Kahoot-style top-3 podium + ranked list "victory screen"
app/(platform)/design/live/...   — routes (gated by the platform's existing login)
supabase/migrations/0004_live_classes.sql — the ONE generic schema (live_sessions/live_players/live_events/live_grades)
supabase/migrations/0005_live_chat_rls.sql — scopes live_events reads/writes for private host<->student chat
```

## The core idea: one generic schema, many activities

Every activity — a quiz, a research worksheet, a team icebreaker — shares the
same four Postgres tables:

- `live_sessions` — one row per running class, `activity_id` + `stage_idx` +
  free-form `state` jsonb for host-controlled UI state (current question
  index, lock/reveal flags, team scores).
- `live_players` — one row per student who joined, `team` (nullable) + free-
  form `data` jsonb for their answers/drafts, keyed by stage.
- `live_events` — append-only log (available for messages/audit trail; not
  yet wired into the UI — see "What's NOT built yet" below).
- `live_grades` — teacher-entered MYP criterion scores (1-8) + feedback, one
  row per (session, player).

**Never add a new table for a new activity.** If you find yourself wanting
`sc_sessions` or `m4_players`, you're reinventing what `live_sessions` /
`live_players` already do — express the new content as `state`/`data` jsonb
shaped by your activity's own stage config instead.

## Authoring a new activity — the actual workflow

1. Read `data/design/live/types.ts`. There are four stage types today:
   - **`mcq`** — multiple choice. `pacing: 'self-paced'` (everyone free-
     explores every question independently, live dashboard = grid of
     ✓/✕/●) or `pacing: 'host-paced'` (host controls the current question,
     everyone answers the same one, host can lock/reveal/advance — this is
     the one to use for a team-vs-team quiz).
   - **`worksheet`** — structured fields (`text`/`textarea`/`select`/`table`)
     grouped into sections, with auto-completeness % and an optional
     `grading` stage after it.
   - **`openIdeas`** — quick-fire free-text prompts, host-paced, optional
     constraint cards drawn at random, optional teacher bonus-point buttons
     (for things a machine can't grade: creativity, empathy).
   - **`grading`** — teacher enters MYP criterion strand scores (1-8) +
     written feedback per student. Always a human judgement call; never
     auto-computed.
   - A `worksheet` section can also use the **`personaChat`** field type
     (`WorksheetField.type`) — a student picks a persona-pack character
     (`data/design/live/personas.ts`) and has a real natural-language
     interview with them, powered by a small hosted model (Groq, see "AI
     persona chat" below), not a scripted keyword-matched bot. Use this
     when an activity wants students to build empathy for a specific user
     archetype through conversation rather than filling in a form.
2. Pick a `theme` (accent + gradient) and, if this is a team icebreaker, a
   `teams` array (name/short/icon/color) — presence of `teams` switches the
   whole engine into team mode (lobby groups by team, host shows a team
   scoreboard, `mcq`/`openIdeas` host panels show per-team tallies).
3. Write `data/design/live/<your-activity>.ts` exporting a
   `LiveActivityDefinition`. Copy the shape of an existing file
   (`myp3-unit1-kickoff.ts` for a self-paced individual quiz,
   `myp2-design-studio.ts` for a host-paced team activity,
   `myp4-prototyping.ts` for a worksheet + grading activity).
4. Register it in `data/design/live/registry.ts` (add to `LIVE_ACTIVITIES`).
   It now automatically appears on `/design/live` under its `year`, and is
   playable at `/design/live/<id>` — **no new route, no new component.**
5. Test both roles locally: open the activity URL, click "I'm hosting", then
   open a second tab/incognito window and join with the code shown.

## Design rules that keep this reusable

- **Content is data, not code.** If an activity needs a new *kind* of
  interaction (not covered by the four stage types), extend
  `LiveStage`/`LiveHost.tsx`/`LiveJoin.tsx` with a new stage type — don't
  build a bespoke standalone page. The whole point is that the fifth
  activity is cheaper to build than the first.
- **Correctness lives in the stage config**, not hidden server-side. `mcq.correct`
  is a plain index shipped to the client (same trust model as a normal quiz
  app) — there is no RPC-hidden-answer mechanism in this engine (the
  original Design Studio icebreaker had one for Pictionary/Charades secret
  words; that mechanism was deliberately NOT ported — see below).
- **Session-level state (`live_sessions.state`) is host-owned** (RLS: only
  `host_id = auth.uid()` can update it) — host-paced UI controls (lock,
  reveal, current index, team scores) always go through
  `patchState()`/`live_sessions`, never through a player row.
- **Player-level state (`live_players.data`) is player-owned** — a student's
  own answers/drafts always go through their own row, never the session row.
- Every live table subscribes via Supabase Realtime **and** polls every 3s
  **and** refetches on tab focus (`useLiveRow`/`useLiveTable` in
  `lib/design-live/hooks.ts`) — a dropped WebSocket (phone locks, network
  switch) must never leave a device stuck until a manual refresh. Don't
  bypass these hooks with a one-off `useEffect` + raw `.subscribe()`.
- Match the reference builds' visual language loosely (Space
  Grotesk/Inter-style bold headings, thick borders, offset drop-shadow
  cards, punchy accent colors per activity) but use the platform's real
  design tokens (`var(--text)`, `var(--surface)`, `var(--border)`, etc. from
  `app/themes.css`) instead of hardcoded hex, so it inherits the user's
  chosen theme.
- `LiveJoin.tsx` is laptop-first, not phone-first: the outer shell is
  `maxWidth: min(1180px, 94vw)`, not a ~480px mobile column stretched
  across a wide monitor. A single-focus stage (`mcq`/`openIdeas`/`grading`,
  see `stageIsNarrow` in `LiveJoin`) still centers in a comfortable ~560px
  reading column inside that shell — only content-heavy stages
  (`worksheet`, `ended`) actually use the full width, via CSS grid
  (`repeat(auto-fit, minmax(Npx, 1fr))`) rather than a fixed column count,
  so they reflow naturally instead of needing a media query. If you add a
  new stage type with more than one focal element (like `personaChat`'s
  persona-card + chat-log split), give it the same `auto-fit`/`minmax`
  treatment rather than stacking everything in one column by default.

## Player identity — avatars, not just names

Every player gets a deterministic avatar (`lib/design-live/avatar.ts`, dicebear
"micah" style, seeded off `live_players.id`) rendered via the shared
`<Avatar seed size />` in `ui.tsx` — the same player renders the same face
everywhere (roster chips, dashboard tables, leaderboard, their own header),
with zero extra DB column or migration, since the id is already stable. This
pattern — and the `<ProgressCell pct />` mini bar used in the worksheet
dashboard, and `framer-motion`'s `AnimatePresence`/`motion.div` for players
popping in/out of the roster — were lifted from a sibling project's
Strandhoot builder (`PlayerIdentityModal.tsx`, `ParticipantList.tsx`,
`LiveStrandhootTable.tsx`), which uses the identical dicebear + framer-motion
combo with a randomizable, DB-stored seed instead of a deterministic one. If
a future activity wants a *randomizable* avatar (student picks their own
face), store a `avatar_seed text` column on `live_players` instead of reusing
`id` — that's the one piece of this pattern that genuinely needs a migration.

## History — nothing anyone does is ever lost

Starting a "New session" (host) only forgets the OLD session code in that
browser's localStorage (`lib/design-live/hooks.ts` → `hostStorageKey`) — the
`live_sessions` row itself is never deleted. Same for a student: revisiting a
join screen never creates a second row (see "One account, one player row"
below) and never loses one either. `/design/live/history`
(`MyActivityHistory.tsx`) has two tabs sourced straight from the DB —
"Hosted by me" (`live_sessions` where `host_id = auth.uid()`) and "Joined by
me" (`live_players` where `user_id = auth.uid()`, joined back to
`live_sessions` for status + `activity_id`) — both symmetrical, both need no
changes when you add a new activity or stage type, since they work off the
generic schema alone. "Reopen as host" re-writes `hostStorageKey` and
navigates to `/design/live/<activityId>?host=1`; "Rejoin" navigates to
`/design/live/<activityId>?s=<code>` — both read by `LiveActivityRunner` to
skip straight past the role-picker screen.

## One account, one player row — real names, never duplicated

A student's name is their **account's** `profiles.name` when set (fetched and
the join-screen field locked to it) — not a freely-typed one, so a teacher
always sees who someone really is; it only falls back to an editable field
when the account has no name set yet. Duplicate joins are prevented at the
DB level by the `unique (session_code, user_id)` constraint on
`live_players`, and `LiveJoin.join()` is deliberately a plain `INSERT`, not
an upsert — an upsert would silently reset an existing player's
points/badges/answers back to defaults on every conflict (e.g. a re-visit,
a double-click, a slow network causing two submits), wiping real progress.
On a genuine conflict (Postgres error `23505`) the code just re-fetches the
existing row instead. **If you touch `join()`, keep it this shape** — insert
first, fetch-on-conflict, never upsert student progress.

## Typing indicator + live draft preview

Every free-text input (`OpenIdeasPlayer`'s idea box, `WorksheetFieldInput`'s
text/textarea fields) reports what's being typed via
`useLiveDraftReporter` (`lib/design-live/hooks.ts`) — throttled to at most
one write every ~900ms, merged into `live_players.data.live` (top-level, not
nested under a stage key, since it's transient and never graded). The host
side reads it back through `<PlayerPreview>` (`ui.tsx`): hovering a
student's avatar/name anywhere — roster, dashboards, submissions list — pops
a small window showing their in-progress text, with a pulsing ✍️ while it's
fresh (`isDraftFresh`, a 4s TTL). `useNowTick` in `LiveHost.tsx` forces a
re-render every second so the indicator expires on its own, without waiting
for a new realtime event from a student who stopped typing.

## Host <-> student private chat

Built on `live_events` (`type: 'message'`, `payload: {from, text}`) — no new
table. `ChatPanel.tsx` renders one thread for one `playerId`; the host opens
it from a `<ChatButton>` next to any player (roster chip, dashboard row,
submission) via `openChat` (wraps `chatWithId` state) in `LiveHost.tsx`; a
student gets a floating bottom-left chat bubble (`StudentChatToggle` in
`LiveJoin.tsx`, `position: fixed` so it never competes with the stage for
layout space) instead of an inline banner. `supabase/migrations/
0005_live_chat_rls.sql` is what makes this safe: it lets the session's host
insert/read events for ANY of their students (0004 only allowed a student
to touch their own), and scopes reads of a directed event to just that
student and that session's host — nobody else can read someone else's
private thread. If you add a new kind of directed event (not chat), reread
that migration's comment before assuming the existing policies cover it.

**Unread indicator**: `LiveHost.tsx` subscribes to every `live_events` row
for the session and computes `unreadIds` — any player whose latest
`type:'message', payload.from:'player'` event is newer than the last time
the host opened that player's chat (`chatReadAt`, set by `openChat`). That
`Set<string>` is handed down via `UnreadChatContext` (`ui.tsx`) rather than
threaded as a prop through every dashboard, so `<ChatButton playerId=... />`
can show its own red dot without every intermediate component knowing
about unread state.

**Quick reactions**: a lighter-weight alternative to chat for "quickly
appreciate this student's work" — `<QuickReactButton>` (`ui.tsx`) opens a
floating picker (same clipping fix as `<PlayerPreview>`: one panel at the
top level via `QuickReactProvider`/`QuickReactContext`, not a popup nested
in an `overflow-x: auto` table cell) offering a few emoji and canned
messages. Sending one inserts a `live_events` row (`type: 'reaction'`,
`payload: {from:'host', emoji?, text?}`) — the existing chat RLS policies
already cover it since it's just another directed event. The student's
`<CelebrationOverlay>` (see below) turns each new one into a confetti
burst, so appreciation is felt immediately, not just logged in a chat
thread nobody's looking at.

## Progress-cell ticker — an ambient view into live drafts

`WorksheetHost`'s per-section progress cells use `<ProgressStream>`
(`ui.tsx`) instead of the plain `<ProgressCell>` — it cross-fades in a
short snippet of the student's current draft for THAT exact section
whenever one arrives (`live-ticker` keyframe, `app/globals.css`), and fades
back out once the draft goes stale. This needed `LiveDraft` to carry a
`sectionKey` (`lib/design-live/hooks.ts`), threaded through
`useLiveDraftReporter`/`reportDraft` from `WorksheetPlayer.updateField` and
`WorksheetFieldInput`'s `onDraft` — without it every column in a row would
light up for whichever section the student happened to be typing in, not
just the right one. Hovering the cell still opens the full
`<PlayerPreviewPanel>` for the bigger read.

## Exemplar answers, keyword celebration + fuzzy-match auto-scoring

Any `WorksheetField` (text/textarea) or `OpenIdeasPrompt` can carry
`exemplars` (a *variety* of model answers, 2-3 different phrasings — never
shown to the student, unlike the earlier single-`exemplar`-reveal design
this replaced) and `celebrateKeywords` (words/phrases that, the first time
they appear in what the student types, burst confetti via
`Celebration.tsx`'s `useCelebration`/`<CelebrationOverlay>`). Detection
lives in `WorksheetPlayer.updateField` and `OpenIdeasPlayer.onType` — a
`celebratedRef` Set (keyed `sectionKey.fieldKey.keyword` /
`ideaIndex.keyword`) makes sure a keyword only fires once per field per
session, not on every keystroke after the match. `celebrate` is threaded
down from `LiveJoin`'s root, which owns the one `<CelebrationOverlay>` for
the whole page — the same overlay also fires for incoming host reactions
(see the chat section above), so "the teacher appreciated this" and "you
nailed a key concept" both land as the same kind of moment for the
student instead of two competing UI patterns.

**Fuzzy-match auto-scoring**: `lib/design-live/fuzzyMatch.ts` turns a
field's `exemplars`/`celebrateKeywords` into a 0–`points` (default 10)
suggested score — word-set (Dice coefficient) overlap against the best-
matching exemplar, plus a small bonus per distinct keyword actually
present. This is a *suggestion*, never an auto-applied grade. The host
opens `WorksheetReviewModal` (`WorksheetReview.tsx`) by clicking the 📝
button next to any student on `WorksheetHost` — it shows every field's
full written answer (not truncated) alongside its auto-suggested score,
with an editable number input pre-filled with that suggestion the teacher
can accept or override per section. Scores save into the existing
`live_grades` row under synthetic keys (`ws:<stageKey>:<sectionKey>`),
alongside whatever the grading stage's strand scores use (`A.i` etc.) —
deliberately no new table/migration, since both are just entries in the
same `scores: Record<string, number|null>` JSON column.

When authoring a new activity: pick keywords that reward the actual skill
being assessed (see `myp4-prototyping.ts`'s empathy-map fields — keywords
like `because`/`currently`/`wonders` reward justification and observed-not-
assumed detail, not just "wrote something"), not generic filler words, and
write exemplars in genuinely different phrasings rather than near-
duplicates — the fuzzy matcher takes the *best* match across all of them,
so variety is what makes a differently-worded-but-equally-good student
answer still score well. `exemplars`/auto-scoring only apply to
`text`/`textarea` worksheet fields — `select`/`table`/`personaChat` fields
aren't scoreable this way (the review modal shows their raw answer/table
rows/interview count with no auto score).

## The victory screen — Podium

`Podium.tsx` renders the Kahoot-style top-3-on-a-podium (crown-equivalent
medal on #1, elevated stagger-in bars) plus a simple ranked list below for
everyone else — shared by both `EndedHost` (the projector) and `LiveJoin`'s
own `ended` view (pass `youId` there to highlight the viewer's own row).
Team-based activities keep the existing team-score cards instead (a podium
doesn't make sense for two team totals) — see `EndedHost`/`LiveJoin` for
where that branch happens.

## AI persona chat (Groq, platform-level key — not BYOK)

The platform already has a bring-your-own-key AI pattern for exam grading
(`lib/ai-grading.ts`, `/settings`) — a student pastes their own Claude/
OpenAI/Gemini key, stored in their browser, sent per-request. **The
persona chat does NOT use that pattern.** Asking every student in a class
to obtain their own API key just to interview a persona is impractical.
Instead `app/api/persona-chat/route.ts` calls Groq (`lib/groq.ts`) with a
single **server-side** `GROQ_API_KEY` env var — Groq hosts small open-
weight models (default `openai/gpt-oss-20b`) free, no credit card, so
this costs the platform nothing within Groq's free tier. Which model ids a
given account can actually see varies and drifts over time — `lib/groq.ts`
tries a short fallback list and remembers whichever one worked; if they
all start 404ing/decommissioning again, don't re-guess model names, hit
`GET https://api.groq.com/openai/v1/models` with the real key (e.g. via a
temporary diagnostic route) and read the account's real catalog first.
The route builds
the system prompt from `data/design/live/personas.ts` (bio/struggles/
traits/anthro — one specific person, not a generalized stereotype) and
guards against abuse by requiring the caller to be signed in AND be the
actual `live_players` row they claim (checked against `session_code` +
`user_id`), not just any anonymous caller with the URL.

**Floating access from other sections**: `WorksheetPlayer` (`LiveJoin.tsx`)
looks across `stage.sections` for whichever one holds the `personaChat`
field and, once a character's actually been picked, renders
`<FloatingPersonaChat>` — a bubble docked to the right edge — whenever any
OTHER section is open (e.g. the empathy map). It reuses the same
`PersonaChatField` and the same `updateField`/`persistField`/`reportDraft`
plumbing as the Interview section itself, just called with that section's
key instead of whichever section happens to be open — so a student filling
in the empathy map never has to tab back to Interview just to re-check or
continue what the persona said.

**Famous-personality interviews (no AI of ours involved)**: the
`personalityPrompt` worksheet field (`PersonalityPromptField.tsx`, data in
`data/design/live/personalities.ts`) lets a student pick one of 10 well-known
people — two per accessibility track — as a target user, then hands them a
ready-made prompt to paste into whichever AI assistant their school
approves so it can role-play that person. We deliberately don't run this
chat ourselves: putting invented words in a real person's mouth from our own
endpoint is a different risk from an invented persona-pack character. So the
`facts` are limited to widely-documented public information, the generated
prompt (`buildInterviewPrompt`) forbids inventing facts/quotes/medical
detail, and the UI keeps saying "this is a simulation, not evidence" — the
design-education point being that a simulated interview is a stand-in that
must be checked against secondary research or a real user. Only the choice
is saved (`{personalityId}`), which the teacher's review screen shows. Add a
new person only if their relevant experience is public and well documented.

If you add a second AI-backed feature, ask first whether it should be
BYOK (like grading — where the student/teacher already has their own key
for a task they'd do anyway) or platform-level (like persona chat — where
requiring a key from every user would kill the feature). Don't default to
copying whichever pattern is closest in the code.

## Board-game stage (MYP5 Sustainability Check)

A fifth stage type, `boardGame`, runs a turn-based two-phase game on a **three.js board**
(`components/design/live/game/Board3D.tsx`). Rules and state are pure code in
`lib/design-live/sustainability.ts`; UI is `game/SustainabilityGame.tsx` (host + student).

Because only the HOST can write `live_sessions`, players never touch shared meters:
a student inserts a `live_events` row (`sc_roll` then `sc_act`, tied to their own player
row), the host's browser applies new events in order with `processEvents()` and writes the
resulting `GameState` into `live_sessions.state.game`; everyone else renders that. A
`cursor` + `doneIds` make replays after a refresh safe. The host must have the page open
(true for a live class). Phase 2 adds a carbon-credit market (issue, sell, buy verified, buy
cheap with a dice roll, retire with a 40% offset cap) — edit `MARKET_ACTIONS`/`applyEvent`,
not the UI, to change the rules. Worksheet sections also take an optional `criterion` (e.g.
`'A.ii'`) shown as a chip, and `personaPack: 'community'` swaps the persona picker to the MYP5
stakeholder representatives (`data/design/live/community-personas.ts`). `productCards` is a
field like `makeCards` for the 25 digital products (`digital-products.ts`).

## What's NOT built yet (known gaps — extend deliberately, don't hack around)

- **Physical/whiteboard rounds with a host-only secret** (Pictionary,
  Charades from the original Design Studio icebreaker) — these need a
  server-verified secret (RPC or a `SECURITY DEFINER` function) so students
  genuinely can't read the word from the row they can already select. Adding
  this as a generic `secretReveal` stage type (host reveals via RPC, one
  specific player fetches via RPC checked against `pictionary_artist_id`) is
  the right shape — don't just stuff the word in plaintext `state`.
- **Tiered-difficulty MCQ** (Design Detective's easy/medium/hard per
  question) — could be added as an optional `tiers` field on `McqQuestion`
  plus a host difficulty selector, following the same pattern as
  `detective_difficulty` in the original.
- **Broadcast (whole-class) messages** — only 1:1 host<->student chat is
  built. A broadcast would reuse the same `live_events` mechanism with
  `player_id: null`, already readable by everyone per 0004/0005 — the host
  UI to send one, and a dismissible banner filtering `player_id: null` in
  `LiveJoin.tsx`, is what's missing.
- **PDF export of a student's results** — the reference builds used
  `jsPDF`; not added here to avoid a new dependency until a real activity
  needs it.

## Auth model

Live Classes are **gated behind the platform's existing login** (nested
under `app/(platform)/design/live/...`, inside the same auth-gated route
group as the rest of `/design`) — by explicit decision, not because public
access wasn't possible. `host_id`/`user_id` on every row are real
`auth.users` ids; RLS policies in `0004_live_classes.sql` assume every
reader/writer is `authenticated`. If a future activity needs to be public
(no login), it needs its own route outside `(platform)` AND its own RLS
policies scoped to `anon` — don't just loosen the existing policies, since
those are shared by every gated activity.
