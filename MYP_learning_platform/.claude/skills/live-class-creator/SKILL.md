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
components/design/live/          — the ENGINE (do not fork; extend it)
  ui.tsx                         — shared visual primitives
  LiveHost.tsx                   — host/projector screen, all stage types
  LiveJoin.tsx                   — student screen, all stage types
  LiveActivityRunner.tsx         — role picker (host vs join), reads ?s=CODE
  LiveHub.tsx                    — /design/live year-wise picker
app/(platform)/design/live/...   — routes (gated by the platform's existing login)
supabase/migrations/0004_live_classes.sql — the ONE generic schema (live_sessions/live_players/live_events/live_grades)
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
- **Host broadcast messages** — the `live_events` table exists for this
  (`type: 'message'`) but no UI reads/writes it yet. Wire a small "message a
  student" box into `LiveHost.tsx` writing an event, and a dismissible
  banner into `LiveJoin.tsx` filtering events by `player_id` (or null for
  everyone).
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
