---
name: live-game-engine
description: How to build a turn-based or real-time multiplayer GAME (board game, auction, trading, escape room, duel, team race) on top of the generic Live Class engine — host-authoritative event-sourced state, side missions, 3D views, points, telemetry. Distilled from the MYP5 Sustainability Check. Use before designing any new live game, not just quizzes.
---

# Building live games on the Live Class engine

Read `live-class-creator` first (stages, RLS, hooks). This skill is the pattern that came
out of building **Sustainability Check** (`data/design/live/myp5-sustainability.ts`,
`lib/design-live/sustainability.ts`, `components/design/live/game/*`). The game is one new
stage type, `boardGame`; the pattern works for any rules-driven game.

## 1. The core constraint, and the architecture that follows

The engine's RLS: only the **host** can write `live_sessions`; a **student** can only write
their own `live_players` row and insert `live_events` tied to their own player id; directed
events (with `player_id`) are readable only by that student and the host. So students can
never edit shared state, and cannot see each other's events.

Therefore use **host-authoritative event sourcing**:

1. Student sends a small intent event (`sc_roll`, `sc_act`, `sc_duel_offer`…) → `live_events`.
2. The **host's browser** reads all events, applies them **in order** with a pure reducer,
   and writes the resulting `GameState` into `live_sessions.state.<game>`.
3. Everyone (host and students) renders that state. Students never compute shared truth.

Consequences to design for: the host tab must stay open (say so in the UI/teacher notes);
latency is one round trip (poll + realtime already exist); validation is the reducer's
job — return the **same object** for an invalid event so the host writes nothing.

## 2. Files and shape

- `lib/<game>.ts` — **pure**, no I/O: data tables, `GameState`, `newGame()`, phase
  functions (`startPhase1`, …), `applyEvent(state, event, names)`, `processEvents`,
  `canAct`, `sceneMetrics` (numbers that drive visuals). Pure means you can simulate it.
- `components/.../<Game>.tsx` — `GameHost` (dashboard) + `GamePlayer`. Thin: read state, send events.
- `components/.../Board3D.tsx` — a **view only**; state flows in through a ref.
- Data file for the activity registers a stage `{ type: 'boardGame', … }`; `LiveHost`
  `StageHost` and `LiveJoin` each get one dispatch line. No new tables or migrations.

### Reducer conventions that saved us
- `processEvents` filters to the game's event types, skips ids in `doneIds`, sorts by
  `(created_at, id)`, applies each, then stores `cursor` + the last ~60 `doneIds`. A page
  refresh can never double-apply.
- Host effect: `syncPlayers(state, players)` (roles/seats for late joiners) then
  `processEvents`; write only if the result `!==` the old state; a `writing` ref + short
  timeout prevents overlapping writes.
- Two-step turns (roll → then act) keep the board live for spectators; store the
  intermediate result (`pending`) in state so a refresh resumes it.
- `applyEvent` must check *whose turn it is*, the phase, cost/availability, and that
  numbers in the payload are sane. Client-side disabling is UX only.
- Keep telemetry in state: a capped `log` array with a `kind` (turn vs side-mission).
  Anything counted as a "turn" must ignore telemetry-only entries.

## 3. Points and anything a student "earns"

Only a student can update their own row, so **each student's browser collects its own
points once**: host writes a result (`duels[]` with `pts` per player id); each client
sees a result with points for its id that is not in `me.data.<game>.paidDuels`, calls
`addPoints(n)`, and records the id. Use a `useRef` set too, so re-renders in the same tick
cannot double-pay. Same idea for host-paced MCQ: on reveal, a correct answer's owner
awards themselves `pointsPerCorrect` and marks it `paid`.

## 4. Side missions (the War Quiz pattern)

A trigger in the board state offers an optional mini-game between two players:
`offer → reply(accept) → answer×N → done`, one open at a time, stored as `state.duel`.
- Both sides must agree; decline is a normal outcome.
- It pauses the initiator's own turn (reducer refuses their `sc_act`) so the class waits and watches.
- **Telemetry for everyone**: one banner component renders the same `duel` object for the
  host, the two players (with controls) and spectators (read-only, answers hidden until both chose).
- Shuffle answer options with a **deterministic seed** (duel id + round) so both duellists
  see the same unpredictable order — correct-answer-at-index-1 is guessable otherwise.
- Host timer expires stale offers (90 s) and stalled duels (150 s) so nothing freezes the class.
- Speed bonus uses event `created_at`, not client clocks.

## 5. 3D views (three.js, no react-three-fiber)

- `'use client'`, `import * as THREE from 'three'`, load with `next/dynamic({ ssr:false })`. Needs `@types/three`.
- Build the scene **once** in `useEffect(..., [])`; feed changing props through
  `const live = useRef(props); live.current = props` and read it inside the animation loop.
- Ease displayed values toward targets each frame (health, smog) so state jumps look smooth.
- Tween pawns tile by tile (queue of tiles, parabolic hop); skip when `prefers-reduced-motion`.
- Fit the camera to the panel aspect ratio (`fit = clamp(14 / (0.344 * aspect), …)`), drag to yaw, wheel to zoom, slow auto-orbit paused while dragging.
- Skip rendering when `document.hidden`. Dispose every geometry/material/texture and the renderer on unmount.
- Wrap renderer creation in `try/catch` and render a 2-D fallback — some school devices have no WebGL.
- Let the world **be the feedback** (globe browns and smogs, trees regrow) — students read state at a glance.

## 6. Test the rules without a browser

Bundle the pure file with esbuild and run a scripted game:
`esbuild sim.ts --bundle --platform=node --alias:@=.` then loop `processEvents` with
generated events (see git history for the 6-player and duel simulations). Assert: phases
end, replays are stable, blocked actions really are blocked, points add up. Do this
*before* touching UI.

## 7. Mistakes we made (don't repeat)

- **Id collisions across data packs** (`priya` existed in two persona packs → wrong
  character). Prefix ids per pack and check duplicates when adding data.
- **Hooks after an early return** (a `useEffect` placed below an `if (pacing==='self-paced') return`). Put all hooks first, guard inside.
- **Stale closures**: a `setInterval` calling the host's `patchState` captured an old `session.state`. Keep the latest in a ref (`writeRef.current = write`).
- Dicebear avatars have fixed `width/height=64`; inside a 28px box they cropped. Make the SVG `100%`.
- Shell heredocs mangle quotes in big scripts on this Windows setup: write patch scripts with the file-writing tool, then run them with `node`.
- Don't spread a `Set` (`[...set]`) — the TS target rejects it; use `Array.from`.
- A shared class/session **code is a secret-ish token**: draw QR codes locally (`qrcode`), don't send URLs to a QR web service.

## 8. Other games this fits

Auction/market with a shared price; resource-trading; escape-room with team puzzle unlocks;
"build a city" with shared budget; relay/race with a shared clock; role-play negotiations
with hidden goals (add a host-only secret via RPC first — see "What's NOT built yet" in
`live-class-creator`). Reuse: roles, phases, event log, duel banner, points-collection, 3D view shell.
