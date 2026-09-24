'use client'

// Sustainability Check — host dashboard and student view for the `boardGame`
// stage. State lives in live_sessions.state.game (host-written); students send
// small sc_roll / sc_act events. See lib/design-live/sustainability.ts.

import { useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { createClient } from '@/lib/supabase/client'
import { useLiveTable } from '@/lib/design-live/hooks'
import type { LiveEventRow, LivePlayerRow, LiveSessionRow } from '@/lib/design-live/types'
import {
  BOARD, CREDIT_EXPLAINER, DEBRIEF_QUESTIONS, DUEL_CORRECT, DUEL_QUESTIONS, DUEL_ROUNDS, DUEL_SPEED, DUEL_WIN, ROLES, ROLE_ORDER, SECTOR_META, SECTOR_SCENARIO,
  actionAvailable, actionsFor, beginPhase2, canAct, defaultCarbonTarget, duelOpen, endPhase1, endPhase2, expireDuel, newGame, offsetCap, processEvents,
  reassignRole, sceneMetrics, sharedWith, startPhase1, syncPlayers, type Duel, type GameAction, type GameState, type RoleKey,
} from '@/lib/design-live/sustainability'
import { Avatar, cardStyle, btnStyle, inputStyle } from '../ui'

const Board3D = dynamic(() => import('./Board3D'), { ssr: false, loading: () => <div style={{ height: 460, display: 'grid', placeItems: 'center', color: '#fff' }}>Loading the board…</div> })

const gameOf = (s: LiveSessionRow | null | undefined): GameState => (s?.state?.game as GameState | undefined) ?? newGame()

// ---------------------------------------------------------------- shared bits
function Meter({ label, value, max, color, suffix }: { label: string; value: number; max: number; color: string; suffix?: string }) {
  const pct = Math.max(0, Math.min(100, (value / Math.max(1, max)) * 100))
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 3 }}>
        <span>{label}</span>
        <span style={{ color: 'var(--text)' }}>{value}{suffix || ''}</span>
      </div>
      <div style={{ height: 11, background: 'var(--border)', borderRadius: 999, overflow: 'hidden', border: '1.5px solid var(--text)' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: color, transition: 'width .4s ease' }} />
      </div>
    </div>
  )
}

function RoleBadge({ role, size = 14 }: { role: RoleKey; size?: number }) {
  const r = ROLES[role]
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontWeight: 800, fontSize: size, color: r.color }}>
      <span style={{ fontSize: size * 1.25 }}>{r.icon}</span>{r.name}
    </span>
  )
}

function DiceFace({ value, size = 64 }: { value: number; size?: number }) {
  const PIPS: Record<number, number[][]> = {
    1: [[50, 50]], 2: [[28, 28], [72, 72]], 3: [[28, 28], [50, 50], [72, 72]], 4: [[28, 28], [72, 28], [28, 72], [72, 72]],
    5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]], 6: [[28, 26], [72, 26], [28, 50], [72, 50], [28, 74], [72, 74]],
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label={`Dice showing ${value}`}>
      <rect x="4" y="4" width="92" height="92" rx="20" fill="var(--surface)" stroke="var(--text)" strokeWidth="6" />
      {(PIPS[value] || PIPS[1]).map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="8.5" fill="var(--text)" />)}
    </svg>
  )
}

function Dice({ rolling, value }: { rolling: boolean; value: number | null }) {
  const [face, setFace] = useState(1)
  useEffect(() => {
    if (!rolling) { if (value) setFace(value); return undefined }
    const id = setInterval(() => setFace(1 + Math.floor(Math.random() * 6)), 90)
    return () => clearInterval(id)
  }, [rolling, value])
  return <div style={{ display: 'inline-block', animation: rolling ? 'diceShake .35s ease-in-out infinite' : undefined }}><DiceFace value={face} /></div>
}

function CreditExplainer({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(!compact)
  return (
    <div style={cardStyle('#C99A2E')}>
      <button onClick={() => setOpen(!open)} style={{ all: 'unset', cursor: 'pointer', fontWeight: 800, fontSize: 15, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span>🌍 What is a carbon credit?</span><span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ display: 'grid', gap: 8, marginTop: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          {CREDIT_EXPLAINER.map((c) => (
            <div key={c.title} style={{ background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '8px 10px', fontSize: 12.5 }}>
              <div style={{ fontWeight: 800 }}>{c.icon} {c.title}</div>
              <div style={{ color: 'var(--text-muted)', marginTop: 2 }}>{c.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function LogFeed({ game }: { game: GameState }) {
  const recent = [...game.log].slice(-8).reverse()
  if (!recent.length) return null
  return (
    <div style={{ ...cardStyle(), maxHeight: 190, overflowY: 'auto' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>RECENT MOVES</div>
      <div style={{ display: 'grid', gap: 5 }}>
        {recent.map((e, i) => (
          <div key={i} style={{ fontSize: 12.5 }}>
            {e.kind === 'duel' ? <span>{e.label}</span> : <><RoleBadge role={e.role} size={12} /> <b>{e.name}</b> — {e.label}</>}
            {e.note && <span style={{ color: 'var(--text-muted)' }}> · {e.note}</span>}
            {e.combo && <span style={{ color: '#1E7A5F', fontWeight: 800 }}> · combo!</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function ClassSummary({ game, names }: { game: GameState; names: Record<string, string> }) {
  const phase = game.phase === 'phase2' || game.phase === 'reveal2' ? 'phase2' : 'phase1'
  const cols = Math.max(1, phase === 'phase1' ? game.p1Turns : game.p2Turns)
  const rows = Object.entries(game.players).sort((a, b) => ROLE_ORDER.indexOf(a[1].role) - ROLE_ORDER.indexOf(b[1].role))
  if (!rows.length) return <div style={{ ...cardStyle(), textAlign: 'center', color: 'var(--text-muted)' }}>No students yet.</div>
  return (
    <div style={{ ...cardStyle(), overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 12.5 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '4px 10px 8px 2px' }}>Student</th>
            {Array.from({ length: cols }).map((_, i) => <th key={i} style={{ padding: '4px 8px 8px', color: 'var(--text-muted)' }}>T{i + 1}</th>)}
            {phase === 'phase2' && <th style={{ padding: '4px 8px 8px', color: 'var(--text-muted)' }}>Credits</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map(([id, p]) => {
            const mine = game.log.filter((e) => e.pid === id && e.phase === phase && e.kind !== 'duel')
            return (
              <tr key={id} style={{ borderTop: '1px solid var(--border)' }}>
                <td style={{ padding: '6px 10px 6px 2px', whiteSpace: 'nowrap' }}><RoleBadge role={p.role} size={12} /> <b>{names[id] || 'Student'}</b></td>
                {Array.from({ length: cols }).map((_, i) => {
                  const e = mine[i]
                  return <td key={i} title={e?.label || ''} style={{ textAlign: 'center' }}>{e ? (e.combo ? '⭐' : phase === 'phase1' ? (e.choice === 'a' ? '🔴' : '🟢') : '✅') : <span style={{ color: 'var(--border)' }}>—</span>}</td>
                })}
                {phase === 'phase2' && <td style={{ textAlign: 'center' }}>{p.credits}{p.fake ? <span title="worthless credits" style={{ color: '#D6425E' }}> +{p.fake}✗</span> : null}</td>}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/** Deterministic option order so both duellists see the same, unpredictable order. */
function orderFor(n: number, seed: string): number[] {
  const idx = Array.from({ length: n }, (_, i) => i)
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619) }
  for (let i = n - 1; i > 0; i--) { h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0; const j = h % (i + 1); [idx[i], idx[j]] = [idx[j], idx[i]] }
  return idx
}

/** Live telemetry of a War Quiz for the whole class: who, what stage, the scores, each finished round — and, for the two duellists, the actual question. */
function DuelBanner({ duel, names, meId, onReply, onAnswer }: {
  duel: Duel
  names: Record<string, string>
  meId?: string
  onReply?: (accept: boolean) => void
  onAnswer?: (choice: number) => void
}) {
  const nm = (id: string) => names[id] || 'Student'
  const side = meId === duel.a ? 'a' : meId === duel.b ? 'b' : null
  const q = DUEL_QUESTIONS[duel.qs[Math.min(duel.round, duel.qs.length - 1)]]
  const answered = { a: !!duel.cur.a, b: !!duel.cur.b }
  const order = orderFor(q.options.length, duel.id + ':' + duel.round)
  const tone = duel.status === 'done' ? '#C99A2E' : duel.status === 'declined' || duel.status === 'expired' ? 'var(--text-muted)' : '#D6425E'
  return (
    <div style={{ ...cardStyle(tone), display: 'grid', gap: 10 }} role="status" aria-live="polite">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontWeight: 800, letterSpacing: 1 }}>⚔️ SUSTAINABILITY WAR QUIZ <span style={{ fontWeight: 600, fontSize: 11, color: 'var(--text-muted)' }}>· side mission on {BOARD[duel.pos].name}</span></div>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
          {duel.status === 'offered' && 'Waiting for an answer to the challenge'}
          {duel.status === 'active' && `Round ${duel.round + 1} of ${DUEL_ROUNDS} · ${q.topic}`}
          {duel.status === 'done' && 'Finished'}
          {duel.status === 'declined' && 'Declined'}
          {duel.status === 'expired' && 'Timed out'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 10, alignItems: 'center' }}>
        {(['a', 'b'] as const).map((k, i) => {
          const id = duel[k]
          return (
            <div key={k} style={{ order: i === 0 ? 0 : 2, textAlign: i === 0 ? 'left' : 'right', display: 'flex', gap: 8, alignItems: 'center', justifyContent: i === 0 ? 'flex-start' : 'flex-end', flexDirection: i === 0 ? 'row' : 'row-reverse' }}>
              <Avatar seed={id} size={34} />
              <div>
                <div style={{ fontWeight: 800 }}>{nm(id)}{duel.winner === id ? ' 🏆' : ''}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  {duel.score[k]} correct · +{duel.pts[k]} pts{duel.status === 'active' && (answered[k] ? ' · ✓ answered' : ' · thinking…')}
                </div>
              </div>
            </div>
          )
        })}
        <div style={{ order: 1, fontWeight: 800, fontSize: 20 }}>VS</div>
      </div>

      {duel.status === 'offered' && (
        side === 'b' && onReply ? (
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ fontSize: 13 }}>{nm(duel.a)} landed on your space and challenged you. Up to <b>{DUEL_ROUNDS * (DUEL_CORRECT + DUEL_SPEED) + DUEL_WIN} points</b> for the winner. It does not use a turn — but everyone is watching.</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => onReply(true)} style={btnStyle('#D6425E', true)}>⚔️ Accept the challenge</button>
              <button onClick={() => onReply(false)} style={btnStyle('var(--text-muted)')}>No thanks</button>
            </div>
          </div>
        ) : <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{nm(duel.a)} has challenged {nm(duel.b)}. If {nm(duel.b)} accepts, three sustainability questions decide it.</div>
      )}

      {duel.status === 'active' && (
        <div style={{ display: 'grid', gap: 8 }}>
          <div style={{ fontWeight: 700 }}>{q.q}</div>
          {side && onAnswer ? (
            answered[side] ? (
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Answer locked in — waiting for {nm(side === 'a' ? duel.b : duel.a)}…</div>
            ) : (
              <div style={{ display: 'grid', gap: 6 }}>
                {order.map((oi) => (
                  <button key={oi} onClick={() => onAnswer(oi)} style={{ ...btnStyle('var(--surface)'), textAlign: 'left' }}>{q.options[oi]}</button>
                ))}
              </div>
            )
          ) : (
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Watching live — the answer is revealed when both have chosen.</div>
          )}
        </div>
      )}

      {duel.rounds.length > 0 && (
        <div style={{ display: 'grid', gap: 4 }}>
          {duel.rounds.map((rd, i) => {
            const dq = DUEL_QUESTIONS[rd.q]
            return (
              <div key={i} style={{ fontSize: 12, background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 8, padding: '5px 8px' }}>
                <b>Round {i + 1}</b> · {dq.q} → <span style={{ color: '#1E7A5F', fontWeight: 700 }}>{dq.options[dq.correct]}</span>
                <span style={{ marginLeft: 8 }}>{nm(duel.a)} {rd.ca ? '✓' : '✗'} (+{rd.pa}) · {nm(duel.b)} {rd.cb ? '✓' : '✗'} (+{rd.pb})</span>
              </div>
            )
          })}
        </div>
      )}

      {duel.status === 'done' && (
        <div style={{ fontWeight: 800, textAlign: 'center' }}>
          {duel.winner ? `🏆 ${nm(duel.winner)} wins ${Math.max(duel.score.a, duel.score.b)}–${Math.min(duel.score.a, duel.score.b)} (winner bonus +${DUEL_WIN})` : `🤝 Level at ${duel.score.a}–${duel.score.b}`}
        </div>
      )}
    </div>
  )
}

function Reveal1({ game }: { game: GameState }) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ ...cardStyle('#B5482A'), textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>PHASE 1 COMPLETE · CONSUMPTION REACHED</div>
        <div style={{ fontSize: 44, fontWeight: 800, color: '#B5482A' }}>{game.consumption}</div>
      </div>
      <div style={cardStyle('#C99A2E')}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 8 }}>BUT HERE IS WHAT IT COST</div>
        <div style={{ display: 'grid', gap: 10 }}>
          <Meter label="Hidden externality (pollution, waste, depleted resources)" value={game.externality} max={Math.max(60, game.externality)} color="#C99A2E" />
          <Meter label="Worker wellbeing" value={game.wellbeing} max={100} color="#8A6D3B" suffix="%" />
          <Meter label="Land health" value={game.landHealth} max={100} color="#1E7A5F" suffix="%" />
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- host
export function SustainabilityGameHost({ session, players, patchState, run }: {
  session: LiveSessionRow
  players: LivePlayerRow[]
  patchState: (patch: Record<string, any>) => void
  run: (p: PromiseLike<{ error: any }>) => Promise<any>
}) {
  const game = gameOf(session)
  const [events, setEvents] = useState<LiveEventRow[]>([])
  const [view, setView] = useState<'board' | 'summary'>('board')
  const [mode, setMode] = useState<'live' | 'async'>('live')
  const [p1, setP1] = useState(3)
  const [p2, setP2] = useState(3)
  const [target, setTarget] = useState<number | null>(null)
  const writing = useRef(false)
  const gameRef = useRef(game)
  gameRef.current = game
  useLiveTable<LiveEventRow>('live_events', 'session_code', session.code, setEvents, true)

  const names = useMemo(() => Object.fromEntries(players.map((p) => [p.id, p.name])), [players])
  const write = (g: GameState) => patchState({ game: g })
  const writeRef = useRef(write)
  writeRef.current = write

  // A challenge nobody answers must not freeze the class: time it out.
  useEffect(() => {
    const t = setInterval(() => {
      const g2 = expireDuel(gameRef.current, Date.now())
      if (g2 !== gameRef.current && !writing.current) writeRef.current(g2)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  // Keep roles in sync with who has joined, and apply students' moves, in order.
  useEffect(() => {
    if (writing.current) return
    const g2 = processEvents(syncPlayers(game, players), events as any, names)
    if (g2 === game) return
    writing.current = true
    write(g2)
    setTimeout(() => { writing.current = false }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, players, session.state])

  const metrics = sceneMetrics(game)
  const pawns = Object.entries(game.players).map(([id, p]) => ({ id, role: p.role, pos: p.pos, name: names[id] || 'Student' }))
  const activeId = game.mode === 'live' ? game.turnOrder[game.idx] : null
  const activeName = activeId ? names[activeId] : null
  const activePlayer = activeId ? game.players[activeId] : null
  const n = Object.keys(game.players).length
  const rolesCount = Object.fromEntries(ROLE_ORDER.map((r) => [r, Object.values(game.players).filter((p) => p.role === r).length]))
  const passed = game.carbonDebt <= game.carbonTarget

  const boardBlock = (
    <>
      {game.duel && <DuelBanner duel={game.duel} names={names} />}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={() => setView('board')} style={btnStyle('var(--text)', view === 'board')}>🗺️ Board</button>
        <button onClick={() => setView('summary')} style={btnStyle('var(--text)', view === 'summary')}>📊 Class summary</button>
      </div>
      {view === 'board' ? <Board3D pawns={pawns} health={metrics.health} smog={metrics.smog} activePos={game.duel && duelOpen(game) ? game.duel.pos : activePlayer?.pending?.newPos ?? null} height={480} /> : <ClassSummary game={game} names={names} />}
      <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 700, color: '#fff' }}>
        {game.mode === 'async'
          ? `${Object.values(game.players).filter((p) => (game.phase === 'phase1' ? p.t1 < game.p1Turns : p.t2 < game.p2Turns)).length} of ${n} students still have turns left`
          : activeName && activePlayer ? <>🎲 Waiting on <RoleBadge role={activePlayer.role} /> · {activeName}</> : '…'}
        <div style={{ fontSize: 12, opacity: 0.75, fontWeight: 600 }}>Turn {game.phase === 'phase1' ? game.turns1 : game.turns2} / {(game.phase === 'phase1' ? game.p1Turns : game.p2Turns) * Math.max(1, game.turnOrder.length)}</div>
      </div>
      <LogFeed game={game} />
    </>
  )

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {game.phase === 'lobby' && (
        <div style={{ display: 'grid', gap: 14 }}>
          <div style={{ ...cardStyle('#1E7A5F') }}>
            <div style={{ fontWeight: 800, fontSize: 16 }}>🌍 Sustainability Check</div>
            <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '6px 0 0' }}>
              Everyone plays a role in the materials economy. Phase 1: the class chases growth and sees what it costs. Phase 2: the same class must pay the Carbon Debt down together — using policy, design, and a carbon-credit market.
              Students join now and are given a role automatically; you can swap roles below.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
            {ROLE_ORDER.map((r) => (
              <div key={r} style={{ ...cardStyle(ROLES[r].color), minWidth: 170, flex: '1 1 0' }}>
                <RoleBadge role={r} />
                <div style={{ fontSize: 11, color: 'var(--text-muted)', margin: '4px 0 8px' }}>{rolesCount[r] || 0} joined · starts with {ROLES[r].start} {ROLES[r].resourceName}</div>
                <div style={{ display: 'grid', gap: 4 }}>
                  {Object.entries(game.players).filter(([, p]) => p.role === r).map(([id, p]) => (
                    <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Avatar seed={id} size={20} />
                      <span style={{ fontSize: 12.5, fontWeight: 600, flex: 1, background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 999, padding: '3px 8px' }}>{names[id]}</span>
                      <select value={p.role} onChange={(e) => write(reassignRole(game, id, e.target.value as RoleKey))} style={{ fontSize: 11, borderRadius: 6 }}>
                        {ROLE_ORDER.map((rr) => <option key={rr} value={rr}>{ROLES[rr].icon}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ ...cardStyle(), display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end' }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>Turns each · Phase 1<br /><input type="number" min={1} max={6} value={p1} onChange={(e) => setP1(Number(e.target.value) || 1)} style={{ ...inputStyle, width: 70 }} /></label>
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>Turns each · Phase 2<br /><input type="number" min={1} max={6} value={p2} onChange={(e) => setP2(Number(e.target.value) || 1)} style={{ ...inputStyle, width: 70 }} /></label>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>Pacing</div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => setMode('live')} style={btnStyle('#B5482A', mode === 'live')}>🎙️ Live, turn by turn</button>
                <button onClick={() => setMode('async')} style={btnStyle('#1E7A5F', mode === 'async')}>🧭 Self-paced</button>
              </div>
            </div>
          </div>
          <Board3D pawns={pawns} health={1} smog={0} height={340} />
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => write(startPhase1(game, mode, p1, p2))} disabled={n === 0} style={btnStyle('#B5482A', true, true)}>▶ Start Phase 1: The Linear Economy — {n} joined</button>
          </div>
        </div>
      )}

      {game.phase === 'phase1' && (
        <>
          <div style={{ ...cardStyle('#B5482A') }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>SHARED GOAL — GROW THIS AS HIGH AS YOU CAN</div>
            <Meter label="Consumption meter" value={game.consumption} max={Math.max(80, game.consumption + 10)} color="#B5482A" />
          </div>
          {boardBlock}
          <div style={{ textAlign: 'center' }}><button onClick={() => write(endPhase1(game))} style={btnStyle('var(--text-muted)')}>⏭ End Phase 1 now</button></div>
        </>
      )}

      {game.phase === 'reveal1' && (
        <>
          <Reveal1 game={game} />
          <CreditExplainer />
          <div style={cardStyle('#1E7A5F')}>
            <div style={{ fontWeight: 800, fontSize: 15, textAlign: 'center', marginBottom: 8 }}>Set up Phase 2: The Turnaround</div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>Carbon Debt target (pass if ≤)<br /><input type="number" min={0} value={target ?? defaultCarbonTarget(game.externality)} onChange={(e) => setTarget(Number(e.target.value) || 0)} style={{ ...inputStyle, width: 100 }} /></label>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>Turns each<br /><input type="number" min={1} max={6} value={p2} onChange={(e) => setP2(Number(e.target.value) || 1)} style={{ ...inputStyle, width: 70 }} /></label>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>
              Starting debt {game.externality} · offsets will be capped at {Math.floor(game.externality * 0.4)}
            </p>
            <div style={{ textAlign: 'center', marginTop: 8 }}>
              <button onClick={() => write(beginPhase2(game, target ?? defaultCarbonTarget(game.externality), p2))} style={btnStyle('#1E7A5F', true, true)}>🔁 Begin Phase 2 →</button>
            </div>
          </div>
        </>
      )}

      {game.phase === 'phase2' && (
        <>
          <div style={{ ...cardStyle('#C99A2E') }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>SHARED GOAL — CARBON DEBT DOWN TO {game.carbonTarget} OR BELOW, TOGETHER</div>
            <Meter label="Carbon debt" value={game.carbonDebt} max={Math.max(game.carbonStart, game.carbonDebt, 1)} color="#C99A2E" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, marginTop: 10 }}>
              <Meter label="Worker wellbeing" value={game.wellbeing} max={100} color="#8A6D3B" suffix="%" />
              <Meter label="Land health" value={game.landHealth} max={100} color="#1E7A5F" suffix="%" />
              <Meter label="Credits for sale" value={game.creditPool} max={Math.max(6, game.creditPool)} color="#2C6E8E" />
              <Meter label={`Offsets used (cap ${offsetCap(game)})`} value={game.retired} max={Math.max(1, offsetCap(game))} color="#7B4B94" />
            </div>
          </div>
          {boardBlock}
          <CreditExplainer compact />
          <div style={{ textAlign: 'center' }}><button onClick={() => write(endPhase2(game))} style={btnStyle('var(--text-muted)')}>⏭ End Phase 2 now</button></div>
        </>
      )}

      {game.phase === 'reveal2' && (
        <>
          <div style={{ ...cardStyle(passed ? '#1E7A5F' : '#B5482A'), textAlign: 'center' }}>
            <div style={{ fontSize: 34, fontWeight: 800 }}>{passed ? '✅ Sustainability Check: Passed' : '⏳ Sustainability Check: Not yet'}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Final carbon debt {game.carbonDebt} · target ≤ {game.carbonTarget} · offsets used {game.retired} of {offsetCap(game)}</div>
          </div>
          <Board3D pawns={pawns} health={metrics.health} smog={metrics.smog} height={380} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
            <div style={cardStyle()}><Meter label="Worker wellbeing" value={game.wellbeing} max={100} color="#8A6D3B" suffix="%" /></div>
            <div style={cardStyle()}><Meter label="Land health" value={game.landHealth} max={100} color="#1E7A5F" suffix="%" /></div>
          </div>
          <ClassSummary game={game} names={names} />
          <div style={cardStyle('#2C6E8E')}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>💬 Talk it through</div>
            {[...DEBRIEF_QUESTIONS,
              'Did anyone rely on offsets instead of changing what they do? What did the 40% cap teach you?',
              'Who gained and who paid when credits were bought and sold? Was it fair to the Frontline Community?',
            ].map((q, i) => <div key={i} style={{ fontSize: 13.5, background: 'var(--surface-2)', borderRadius: 8, padding: '8px 10px', border: '1.5px solid var(--border)', marginBottom: 6 }}>{q}</div>)}
          </div>
          <div style={{ textAlign: 'center', color: '#fff', fontSize: 13 }}>When you are ready, press <b>Next stage</b> to move the class on to the community research.</div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => run(createClient().from('live_sessions').update({ state: { ...session.state, game: newGame() } }).eq('code', session.code))} style={btnStyle('var(--text-muted)')}>↻ Reset the game</button>
          </div>
        </>
      )}
    </div>
  )
}

// ---------------------------------------------------------------- student
export function SustainabilityGamePlayer({ session, me, code, players, patchMyData, addPoints }: {
  session: LiveSessionRow
  me: LivePlayerRow
  code: string
  players: LivePlayerRow[]
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
  addPoints: (delta: number) => void
}) {
  const game = gameOf(session)
  const names = useMemo(() => Object.fromEntries(players.map((p) => [p.id, p.name])), [players])
  const [declinedHere, setDeclinedHere] = useState<string | null>(null)
  const mine = game.players[me.id]
  const [rolling, setRolling] = useState(false)
  const [rolled, setRolled] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [why, setWhy] = useState<GameAction | null>(null)

  const metrics = sceneMetrics(game)
  const pawns = Object.entries(game.players).map(([id, p]) => ({ id, role: p.role, pos: p.pos, name: id === me.id ? me.name : '' }))
  const myTurn = canAct(game, me.id)
  const pending = mine?.pending ?? null
  const phase = game.phase

  // A fresh turn (or a new phase) clears the local roll.
  const turnKey = `${phase}:${game.idx}:${mine?.t1 ?? 0}:${mine?.t2 ?? 0}`
  useEffect(() => { setRolled(null); setBusy(false); setWhy(null) }, [turnKey])

  // Collect War Quiz points once per finished duel (recorded in my own data so a refresh cannot repeat it).
  const paidRef = useRef<Set<string>>(new Set())
  useEffect(() => {
    const paid: string[] = me.data?.game?.paidDuels ?? []
    let next = paid
    ;(game.duels ?? []).forEach((r) => {
      const pts = r.pts[me.id]
      if (!pts || paid.includes(r.id) || paidRef.current.has(r.id)) return
      paidRef.current.add(r.id)
      addPoints(pts)
      next = [...next, r.id]
    })
    if (next !== paid) patchMyData('game', { paidDuels: next })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.duels])

  const send = async (type: 'sc_roll' | 'sc_act' | 'sc_duel_offer' | 'sc_duel_reply' | 'sc_duel_answer', payload: Record<string, any>) => {
    setBusy(true)
    setError(null)
    const { error: err } = await createClient().from('live_events').insert({ session_code: code, player_id: me.id, type, payload })
    if (err) { setError(err.message); setBusy(false); return }
    // If the host has not applied it after a few seconds, let the student retry.
    setTimeout(() => setBusy(false), 6000)
  }

  const roll = () => {
    if (rolling || busy || !myTurn || pending) return
    const dice = 1 + Math.floor(Math.random() * 6)
    setRolling(true)
    setTimeout(() => { setRolling(false); setRolled(dice); send('sc_roll', { roll: dice }) }, 650)
  }

  if (!mine) {
    return <div style={{ ...cardStyle('#1E7A5F'), textAlign: 'center' }}>{phase === 'lobby' ? 'You are in! Your teacher is about to hand out roles…' : 'Getting your role — one moment…'}</div>
  }

  const role = ROLES[mine.role]
  const inMyDuel = !!game.duel && duelOpen(game) && game.duel.a === me.id
  const mates = pending && !duelOpen(game) && myTurn ? sharedWith(game, me.id).filter((id) => id !== declinedHere) : []
  const space = pending ? BOARD[pending.newPos] : null
  const scenario = space ? SECTOR_SCENARIO[space.sector] : null

  const header = (
    <div style={{ ...cardStyle(role.color), display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <div>
        <RoleBadge role={mine.role} size={16} />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', maxWidth: 380 }}>{role.flavor}</div>
      </div>
      <div style={{ textAlign: 'right', fontSize: 13, fontWeight: 700 }}>
        {role.resourceName}: <b>{mine.resource}</b>
        {(phase === 'phase2' || phase === 'reveal2') && <div>Credits: <b>{mine.credits}</b>{mine.fake ? <span style={{ color: '#D6425E' }}> · {mine.fake} worthless</span> : null}</div>}
      </div>
    </div>
  )

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {header}
      {error && <div style={{ background: '#D6425E', color: '#fff', borderRadius: 10, padding: '8px 14px', fontSize: 13 }}>⚠ {error}</div>}

      {game.duel && (
        <DuelBanner
          duel={game.duel}
          names={names}
          meId={me.id}
          onReply={(accept) => send('sc_duel_reply', { accept })}
          onAnswer={(choice) => send('sc_duel_answer', { round: game.duel!.round, choice })}
        />
      )}

      {phase !== 'lobby' && <Board3D pawns={pawns} health={metrics.health} smog={metrics.smog} activePos={pending?.newPos ?? mine.pos} youId={me.id} height={400} />}

      {phase === 'lobby' && (
        <div style={{ ...cardStyle('#1E7A5F'), textAlign: 'center' }}>Roles are set. Waiting for your teacher to start Phase 1…</div>
      )}

      {(phase === 'phase1' || phase === 'phase2') && (
        <div style={{ display: 'grid', gap: 10 }}>
          {phase === 'phase1'
            ? <Meter label="Consumption (shared goal: grow it)" value={game.consumption} max={Math.max(80, game.consumption + 10)} color="#B5482A" />
            : <Meter label={`Carbon debt (goal ≤ ${game.carbonTarget})`} value={game.carbonDebt} max={Math.max(game.carbonStart, game.carbonDebt, 1)} color="#C99A2E" />}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
            <Meter label="Worker wellbeing" value={game.wellbeing} max={100} color="#8A6D3B" suffix="%" />
            <Meter label="Land health" value={game.landHealth} max={100} color="#1E7A5F" suffix="%" />
            {phase === 'phase2' && <Meter label="Credits for sale" value={game.creditPool} max={Math.max(6, game.creditPool)} color="#2C6E8E" />}
          </div>
        </div>
      )}

      {(phase === 'phase1' || phase === 'phase2') && !myTurn && (
        <div style={{ ...cardStyle(), textAlign: 'center', color: 'var(--text-muted)' }}>
          {game.mode === 'live'
            ? `Waiting for your turn… (${game.players[game.turnOrder[game.idx]] ? 'it is another student’s go' : '…'})`
            : 'You have used all your turns. Waiting for the class to finish.'}
        </div>
      )}

      {(phase === 'phase1' || phase === 'phase2') && myTurn && !pending && (
        <div style={{ ...cardStyle('#B5482A'), textAlign: 'center', display: 'grid', gap: 10, justifyItems: 'center' }}>
          <div style={{ fontWeight: 800 }}>{game.mode === 'live' ? '🎲 It is your turn!' : '🎲 Take a turn'}</div>
          <Dice rolling={rolling} value={rolled} />
          <button onClick={roll} disabled={rolling || busy} style={btnStyle('#B5482A', true, true)}>{rolling ? 'Rolling…' : busy ? 'Moving…' : 'Roll the dice'}</button>
        </div>
      )}

      {mates.length > 0 && (
        <div style={{ ...cardStyle('#D6425E'), display: 'grid', gap: 8 }}>
          <div style={{ fontWeight: 800 }}>⚔️ Side mission: you share this space!</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            {mates.map((id) => names[id] || 'a classmate').join(' and ')} {mates.length > 1 ? 'are' : 'is'} here too. Challenge one of them to a Sustainability War Quiz — {DUEL_ROUNDS} questions, up to {DUEL_ROUNDS * (DUEL_CORRECT + DUEL_SPEED) + DUEL_WIN} points, and the whole class watches. They must say yes. It does not use up your turn.
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {mates.map((id) => (
              <button key={id} disabled={busy} onClick={() => send('sc_duel_offer', { targetId: id })} style={btnStyle('#D6425E', true)}>⚔️ Challenge {names[id] || 'classmate'}</button>
            ))}
            <button onClick={() => setDeclinedHere(mates[0])} style={btnStyle('var(--text-muted)')}>No thanks, carry on</button>
          </div>
        </div>
      )}

      {inMyDuel && <div style={{ ...cardStyle(), textAlign: 'center', color: 'var(--text-muted)' }}>Your turn is paused while the War Quiz plays out…</div>}

      {phase === 'phase1' && !inMyDuel && myTurn && pending && space && scenario && (
        <div style={{ ...cardStyle(SECTOR_META[space.sector].color), display: 'grid', gap: 10 }}>
          <div style={{ fontWeight: 800 }}>{SECTOR_META[space.sector].icon} You landed on {space.name}</div>
          <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{scenario.blurb}</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <button disabled={busy} onClick={() => send('sc_act', { choice: 'a' })} style={{ ...btnStyle('#B5482A'), textAlign: 'left' }}>🔴 {scenario.a}</button>
            <button disabled={busy} onClick={() => send('sc_act', { choice: 'b' })} style={{ ...btnStyle('#1E7A5F'), textAlign: 'left' }}>🟢 {scenario.b}</button>
          </div>
        </div>
      )}

      {phase === 'phase2' && !inMyDuel && myTurn && pending && space && (
        <div style={{ ...cardStyle('#1E7A5F'), display: 'grid', gap: 10 }}>
          <div style={{ fontWeight: 800 }}>{SECTOR_META[space.sector].icon} You are at {space.name}. Choose your action.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 8 }}>
            {actionsFor(mine.role).map((a) => {
              const av = actionAvailable(game, mine, a)
              const market = !!a.market
              return (
                <button
                  key={a.id}
                  disabled={busy || !av.ok}
                  onClick={() => send('sc_act', { actionId: a.id, dice: a.market === 'buyCheap' ? 1 + Math.floor(Math.random() * 6) : undefined })}
                  onMouseEnter={() => setWhy(a)}
                  style={{ ...btnStyle(market ? '#2C6E8E' : role.color), textAlign: 'left', opacity: av.ok ? 1 : 0.5, display: 'grid', gap: 3 }}
                >
                  <span style={{ fontWeight: 800 }}>{a.icon} {a.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-muted)' }}>
                    Cost {a.cost} · {[a.carbonDebt ? `Carbon ${a.carbonDebt}` : '', a.wellbeing ? `Wellbeing +${a.wellbeing}` : '', a.landHealth ? `Land +${a.landHealth}` : '', a.issue ? `+${a.issue} credit${a.issue > 1 ? 's' : ''}` : ''].filter(Boolean).join(' · ') || (market ? 'Carbon-credit market' : '')}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--text-muted)' }}>{av.ok ? a.sdg : av.why}</span>
                </button>
              )
            })}
          </div>
          {why?.blurb && <div style={{ fontSize: 12.5, background: 'var(--surface-2)', borderRadius: 8, padding: '8px 10px' }}>{why.blurb}</div>}
          {actionsFor(mine.role).every((a) => !actionAvailable(game, mine, a).ok) && (
            <button disabled={busy} onClick={() => send('sc_act', { pass: true })} style={btnStyle('var(--text-muted)')}>Pass — nothing affordable</button>
          )}
        </div>
      )}

      {phase === 'phase2' && <CreditExplainer compact />}

      {phase === 'reveal1' && (<><Reveal1 game={game} /><div style={{ ...cardStyle(), textAlign: 'center' }}>Your teacher is setting up Phase 2…</div></>)}
      {phase === 'reveal2' && (
        <div style={{ ...cardStyle(game.carbonDebt <= game.carbonTarget ? '#1E7A5F' : '#B5482A'), textAlign: 'center' }}>
          <div style={{ fontSize: 26, fontWeight: 800 }}>{game.carbonDebt <= game.carbonTarget ? '✅ Sustainability Check: Passed' : '⏳ Sustainability Check: Not yet'}</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Final carbon debt {game.carbonDebt} · target ≤ {game.carbonTarget}</div>
        </div>
      )}
    </div>
  )
}
