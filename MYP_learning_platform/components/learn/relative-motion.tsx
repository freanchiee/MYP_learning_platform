'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BALLS, C_LIGHT, CROSSWIND, UMBRELLA, aberrationRad, arcsecToRad, ballA, ballB, canopyCentre, crabAngleDeg, displacementOfB, dryFraction,
  earthOrbitSpeed, fallTimeG, groundSpeedWhenCrabbing, groundVelocity, horizontalRange, leadDistance, radToArcsec, rainAngleDeg,
  speedOfLightFromAberration,
} from '@/lib/learn/relative-motion-model'
import { parcelAt } from '@/lib/learn/projectile-model'

// Independence of x and y motion, then vector addition (crosswind landing, walking in rain), then stellar aberration.
// Chrome uses theme tokens; --accent (purple) marks the simulation, like the other DP Physics labs.
export const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
export const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
export const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
export const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
export const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
export const f = (x: number, d = 1) => x.toFixed(d).replace('-', '−')
const RAD = Math.PI / 180

export function Slider({ label, value, min, max, step, unit, onChange, shown }: { label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void; shown?: string }) {
  return (
    <label className="block text-sm">
      <span className="flex justify-between font-bold" style={{ color: 'var(--text)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--accent)' }}>{shown ?? value} {unit}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full" style={{ accentColor: 'var(--accent)' }} />
    </label>
  )
}

export function Arrow({ x1, y1, x2, y2, color, w = 3 }: { x1: number; y1: number; x2: number; y2: number; color: string; w?: number }) {
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 3) return null
  const ux = dx / len, uy = dy / len
  const h = Math.min(9, len * 0.5)
  const bx = x2 - ux * h, by = y2 - uy * h
  return (
    <g stroke={color} fill={color} strokeWidth={w} strokeLinecap="round">
      <line x1={x1} y1={y1} x2={bx} y2={by} />
      <polygon points={`${x2},${y2} ${bx - uy * h * 0.55},${by + ux * h * 0.55} ${bx + uy * h * 0.55},${by - ux * h * 0.55}`} strokeWidth={1} />
    </g>
  )
}

export function useReducedMotion() {
  const [r, setR] = useState(false)
  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)')
    setR(q.matches)
    const fn = () => setR(q.matches)
    q.addEventListener('change', fn)
    return () => q.removeEventListener('change', fn)
  }, [])
  return r
}

export const Cell = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="rounded-[var(--radius-control)] px-3 py-2 text-center" style={panel}>
    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>{label}</div>
    <div className="text-base font-extrabold" style={{ color: accent ? 'var(--accent)' : 'var(--text)', fontFamily: 'var(--font-mono)' }}>{value}</div>
  </div>
)

/** A requestAnimationFrame loop that calls `step(dtSeconds)` while `running`. dt is capped so a background tab cannot jump the physics. */
export function useFrame(running: boolean, step: (dt: number) => void) {
  const cb = useRef(step)
  cb.current = step
  useEffect(() => {
    if (!running) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      cb.current(Math.min(0.05, (now - last) / 1000))
      last = now
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running])
}

// ================================================================== 1 · independence of x and y motion
export function IndependenceLab() {
  const reduced = useReducedMotion()
  const [u, setU] = useState(BALLS.u)
  const [h, setH] = useState(BALLS.h)
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const g = BALLS.g
  const T = fallTimeG(h, g)
  useEffect(() => { setT((x) => Math.min(x, T)) }, [T])
  useFrame(playing && !reduced, (dt) => setT((x) => { const n = x + dt * 0.6; if (n >= T) { setPlaying(false); return T } return n }))

  const S = 5, gx = 70, gy = 305
  const px = (x: number) => gx + x * S
  const py = (y: number) => gy - y * S
  const A = ballA(h, g, t), B = ballB(u, h, g, t)
  const path = Array.from({ length: 41 }, (_, i) => { const q = ballB(u, h, g, (i / 40) * T); return `${px(q.x)},${py(q.y)}` }).join(' ')
  const ticks: number[] = []
  for (let s = 0.5; s < T - 0.01; s += 0.5) ticks.push(s)
  const R = horizontalRange(u, h, g)
  const landed = t >= T - 1e-9

  return (
    <div className="grid gap-3">
      <svg viewBox="0 0 700 330" className="w-full" style={fig} role="img" aria-label={`Ball A is dropped and ball B is thrown sideways at ${u} metres per second, both from ${h} metres. At ${f(t, 2)} seconds both are ${f(A.y, 1)} metres above the ground. B is ${f(B.x, 1)} metres to the right of A.`}>
        <line x1={0} y1={gy} x2={700} y2={gy} stroke="var(--text-subtle)" strokeWidth={2} />
        <polyline points={path} fill="none" stroke="var(--text-subtle)" strokeDasharray="4 5" strokeWidth={2} />
        {/* equal-time rows: both balls are at the same height at the same instant */}
        {ticks.map((s) => {
          const a = ballA(h, g, s), b = ballB(u, h, g, s)
          return (
            <g key={s}>
              <line x1={px(a.x)} y1={py(a.y)} x2={px(b.x)} y2={py(b.y)} stroke="var(--accent)" strokeDasharray="2 4" opacity={s <= t ? 0.8 : 0.25} />
              <circle cx={px(a.x)} cy={py(a.y)} r={3.5} fill={s <= t ? 'var(--danger)' : 'none'} stroke="var(--danger)" />
              <circle cx={px(b.x)} cy={py(b.y)} r={3.5} fill={s <= t ? 'var(--success)' : 'none'} stroke="var(--success)" />
              <text x={px(0) - 8} y={py(a.y) + 4} textAnchor="end" fontSize="10" fill="var(--text-muted)">{f(s, 1)} s</text>
            </g>
          )
        })}
        <line x1={px(0)} y1={py(h)} x2={px(0)} y2={py(0)} stroke="var(--text-subtle)" strokeDasharray="3 4" opacity={0.6} />
        <text x={px(0) + 8} y={py(h / 2)} fontSize="12" fontWeight="800" fill="var(--text)">{h} m</text>
        <circle cx={px(A.x)} cy={py(A.y)} r={9} fill="var(--danger)" /><text x={px(A.x)} y={py(A.y) + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text-on-accent)">A</text>
        <circle cx={px(B.x)} cy={py(B.y)} r={9} fill="var(--success)" /><text x={px(B.x)} y={py(B.y) + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text-on-accent)">B</text>
        <Arrow x1={px(0) + 12} y1={py(h)} x2={px(0) + 12 + u * 4} y2={py(h)} color="var(--success)" w={3} />
        <text x={px(0) + 16 + u * 4} y={py(h) - 6} fontSize="11" fontWeight="800" fill="var(--success)">{u} m s⁻¹</text>
        {landed && <g><line x1={px(0)} y1={gy + 14} x2={px(R)} y2={gy + 14} stroke="var(--text)" /><text x={px((R) / 2)} y={gy + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--text)">R = {f(R, 1)} m</text></g>}
        <text x={694} y={324} textAnchor="end" fontSize="11" fill="var(--text-muted)">drawn to scale: 5 px = 1 m</text>
        <text x={12} y={18} fontSize="11" fontWeight="800" fill="var(--danger)">A: dropped (free fall)</text>
        <text x={12} y={34} fontSize="11" fontWeight="800" fill="var(--success)">B: projected horizontally</text>
      </svg>
      <div className="flex flex-wrap items-center gap-2">
        <button className={ctl} style={btn1} onClick={() => { if (landed) setT(0); setPlaying((p) => !p) }}>{playing ? 'Pause' : landed ? 'Replay' : t === 0 ? 'Release both' : 'Play'}</button>
        <button className={ctl} style={btn2} onClick={() => { setPlaying(false); setT(0) }}>Reset</button>
        <input type="range" min={0} max={T} step={0.01} value={t} onChange={(e) => { setPlaying(false); setT(Number(e.target.value)) }} aria-label="Time since release" className="min-w-[140px] flex-1" style={{ accentColor: 'var(--accent)' }} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Cell label="Time t" value={`${f(t, 2)} s`} accent />
        <Cell label="Height of A and of B" value={`${f(A.y, 1)} m`} />
        <Cell label="B’s distance across" value={`${f(B.x, 1)} m`} />
        <Cell label="Fall speed v_y = g t" value={`${f(A.vy, 1)} m s⁻¹`} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="B’s horizontal speed" value={u} min={1} max={30} step={1} unit="m s⁻¹" onChange={setU} />
        <Slider label="Height" value={h} min={10} max={55} step={1} unit="m" onChange={setH} />
      </div>
      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
        <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>The three questions, with these numbers (g = {g} m s⁻²)</div>
        <ol className="mt-2 grid gap-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
          <li>Q1 time to land: t = √(2h / g) = √(2 × {h} / {g}) = <b style={{ color: 'var(--accent)' }}>{f(T, 2)} s</b> (A and B)</li>
          <li>Q2 distance across: R = u t = {u} × {f(T, 2)} = <b style={{ color: 'var(--accent)' }}>{f(R, 1)} m</b></li>
          <li>Q3 displacement of B: √(R² + h²) = √({f(R, 1)}² + {h}²) = <b style={{ color: 'var(--accent)' }}>{f(displacementOfB(u, h, g), 1)} m</b></li>
        </ol>
      </div>
    </div>
  )
}

// ================================================================== 2 · supply-drop game
type DropPhase = 'ready' | 'flying' | 'falling' | 'result'
interface DropRound { u: number; h: number; target: number }
const newDropRound = (): DropRound => ({ u: 30 + 5 * Math.floor(Math.random() * 7), h: 50 + 10 * Math.floor(Math.random() * 8), target: 330 + Math.round(Math.random() * 200) })

export function SupplyDropGame() {
  const [round, setRound] = useState<DropRound>(() => ({ u: 40, h: 80, target: 400 }))
  const [phase, setPhase] = useState<DropPhase>('ready')
  const [easy, setEasy] = useState(true)
  const [hint, setHint] = useState(false)
  const [score, setScore] = useState({ rounds: 0, hits: 0 })
  const [last, setLast] = useState<{ err: number; releaseX: number } | null>(null)
  const sim = useRef({ planeX: 0, t: 0, releaseX: 0 })
  const [, tick] = useState(0)
  const g = 9.8
  const S = 1.05, gx = 20, gy = 285
  const px = (x: number) => gx + x * S
  const py = (y: number) => gy - y * S

  const start = useCallback(() => { sim.current = { planeX: 0, t: 0, releaseX: 0 }; setLast(null); setPhase('flying') }, [])
  const release = useCallback(() => {
    if (phase !== 'flying') return
    sim.current.releaseX = sim.current.planeX
    sim.current.t = 0
    setPhase('falling')
  }, [phase])
  const nextRound = useCallback(() => { setRound(newDropRound()); sim.current = { planeX: 0, t: 0, releaseX: 0 }; setLast(null); setPhase('ready') }, [])

  useFrame(phase === 'flying' || phase === 'falling', (dt) => {
    const s = sim.current
    s.planeX += round.u * dt
    if (phase === 'falling') {
      s.t += dt
      const T = Math.sqrt((2 * round.h) / g)
      if (s.t >= T) {
        const land = s.releaseX + round.u * T
        const err = land - round.target
        setLast({ err, releaseX: s.releaseX })
        setScore((c) => ({ rounds: c.rounds + 1, hits: c.hits + (Math.abs(err) <= 6 ? 1 : 0) }))
        setPhase('result')
        return
      }
    } else if (s.planeX > 640) {
      setPhase('result')
      setLast(null)
    }
    tick((n) => n + 1)
  })

  const lead = leadDistance(round.u, round.h, g)
  const s = sim.current
  const T = Math.sqrt((2 * round.h) / g)
  const parcel = phase === 'falling' || phase === 'result' ? parcelAt(round.u, round.h, phase === 'result' && last ? T : s.t, g) : null
  const planeX = phase === 'result' && last ? last.releaseX + round.u * T : s.planeX
  const px0 = phase === 'ready' ? 0 : phase === 'falling' || (phase === 'result' && last) ? planeX : s.planeX
  const releaseXShown = phase === 'falling' || (phase === 'result' && last) ? s.releaseX : null
  const bestRelease = round.target - lead

  const onKey = (e: React.KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (phase === 'ready') start(); else release() } }

  return (
    <div className="grid gap-3" tabIndex={0} onKeyDown={onKey} role="group" aria-label="Supply drop game. Press space to release the parcel.">
      <svg viewBox="0 0 700 310" className="w-full" style={fig} role="img" aria-label={`Supply drop: aircraft at ${round.h} metres flying at ${round.u} metres per second. The target is ${round.target} metres along the ground.`}>
        <line x1={0} y1={gy} x2={700} y2={gy} stroke="var(--text-subtle)" strokeWidth={2} />
        {/* target */}
        <rect x={px(round.target - 6)} y={gy - 12} width={12 * S} height={12} rx={2} fill="var(--warning)" stroke="var(--text)" />
        <text x={px(round.target)} y={gy + 18} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text)">TARGET (±6 m)</text>
        {/* where the parcel would land if released right now (easy mode) */}
        {easy && phase === 'flying' && (
          <g opacity={0.9}>
            <polyline points={Array.from({ length: 21 }, (_, i) => { const q = parcelAt(round.u, round.h, (i / 20) * T, g); return `${px(s.planeX + q.x)},${py(q.y)}` }).join(' ')} fill="none" stroke="var(--accent)" strokeDasharray="3 4" />
            <line x1={px(s.planeX + lead)} y1={gy - 16} x2={px(s.planeX + lead)} y2={gy} stroke="var(--accent)" strokeWidth={3} />
          </g>
        )}
        {(phase === 'result' || phase === 'falling') && releaseXShown !== null && <path d={Array.from({ length: 31 }, (_, i) => { const q = parcelAt(round.u, round.h, (i / 30) * T, g); return `${i ? 'L' : 'M'}${px(releaseXShown + q.x)},${py(q.y)}` }).join(' ')} fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0.6} />}
        {/* aircraft */}
        <g transform={`translate(${px(px0)} ${py(round.h)})`}>
          <ellipse cx={0} cy={0} rx={22} ry={5.5} fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.5} />
          <polygon points="-18,-2 -26,-12 -20,-12 -8,-2" fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.2} />
          <polygon points="-3,0 8,12 14,12 8,0" fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.2} />
          <circle cx={14} cy={-1} r={1.6} fill="var(--accent)" />
        </g>
        {phase === 'flying' && <text x={px(s.planeX)} y={py(round.h) - 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text)">{round.u} m s⁻¹</text>}
        {parcel && <rect x={px(s.releaseX + parcel.x) - 5} y={py(parcel.y) - 5} width={10} height={10} rx={2} fill="var(--text)" />}
        <line x1={gx - 8} y1={py(round.h)} x2={gx - 8} y2={gy} stroke="var(--text-muted)" /><text x={gx - 12} y={py(round.h / 2)} textAnchor="end" fontSize="11" fontWeight="800" fill="var(--text)">{round.h} m</text>
        {easy && <text x={694} y={14} textAnchor="end" fontSize="10" fill="var(--text-muted)">easy mode: the purple mark shows where it would land</text>}
        <text x={694} y={304} textAnchor="end" fontSize="10" fill="var(--text-muted)">drawn to scale: 1.05 px = 1 m</text>
      </svg>
      <div className="flex flex-wrap items-center gap-2">
        {phase === 'ready' && <button className={ctl} style={btn1} onClick={start}>Start flying</button>}
        {phase === 'flying' && <button className={ctl} style={btn1} onClick={release}>Release parcel (space)</button>}
        {phase === 'falling' && <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>falling…</span>}
        {phase === 'result' && <button className={ctl} style={btn1} onClick={nextRound}>Next round</button>}
        {phase === 'result' && <button className={ctl} style={btn2} onClick={() => { sim.current = { planeX: 0, t: 0, releaseX: 0 }; setLast(null); setPhase('ready') }}>Try again</button>}
        <button className={ctl} style={easy ? btn1 : btn2} aria-pressed={easy} onClick={() => setEasy((e) => !e)}>Easy mode</button>
        <button className={ctl} style={hint ? btn1 : btn2} aria-pressed={hint} onClick={() => setHint((e) => !e)}>Show the lead distance</button>
        <span className="ml-auto text-xs font-bold" style={{ color: 'var(--text-muted)' }}>Hits {score.hits} / {score.rounds}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Cell label="Aircraft speed u" value={`${round.u} m s⁻¹`} />
        <Cell label="Height h" value={`${round.h} m`} />
        <Cell label="Target distance" value={`${round.target} m`} />
        <Cell label="Aircraft is at" value={`${f(phase === 'ready' ? 0 : s.planeX, 0)} m`} accent />
      </div>
      {phase === 'result' && (
        <div role="status" className="rounded-[var(--radius-panel)] px-3.5 py-2.5 text-sm" style={{ background: last && Math.abs(last.err) <= 6 ? 'var(--success-surface)' : 'var(--warning-surface)', border: `1px solid ${last && Math.abs(last.err) <= 6 ? 'var(--success)' : 'var(--warning)'}`, color: 'var(--text)' }}>
          {last ? (
            <>
              <b>{Math.abs(last.err) <= 6 ? 'Direct hit!' : `Missed by ${f(Math.abs(last.err), 0)} m (${last.err < 0 ? 'you released too late: it landed short' : 'you released too early: it overshot'}).`}</b>{' '}
              The fall takes t = √(2h / g) = {f(T, 2)} s, and in that time the parcel keeps moving forward at {round.u} m s⁻¹, so it travels {f(lead, 0)} m. Release {f(lead, 0)} m BEFORE the target, at {f(bestRelease, 0)} m. You released at {f(last.releaseX, 0)} m.
            </>
          ) : (
            <b>You flew past without releasing. Press Next round.</b>
          )}
        </div>
      )}
      {hint && (
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
          <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Where do you release? Same two steps as the exam question</div>
          <ol className="mt-2 grid gap-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
            <li>t = √(2h / g) = √(2 × {round.h} / {g}) = {f(T, 2)} s</li>
            <li>lead = u t = {round.u} × {f(T, 2)} = <b style={{ color: 'var(--accent)' }}>{f(lead, 0)} m</b> before the target</li>
          </ol>
        </div>
      )}
    </div>
  )
}

// ================================================================== 3 · landing in a crosswind
type LandPhase = 'ready' | 'flying' | 'landed'
interface WindRound { wind: number } // km/h, signed: positive blows toward +x (the right)
const newWind = (): WindRound => ({ wind: (Math.random() < 0.5 ? -1 : 1) * (30 + 10 * Math.floor(Math.random() * 4)) })
const D_KM = 4 // distance to the runway threshold, km
const HALF_RUNWAY_KM = 0.15
const TIME_SCALE = 6 // game seconds per real second

export function CrosswindLandingGame() {
  const [round, setRound] = useState<WindRound>({ wind: CROSSWIND.wind })
  const [phase, setPhase] = useState<LandPhase>('ready')
  const [heading, setHeading] = useState(0)
  const [showTrack, setShowTrack] = useState(true)
  const [score, setScore] = useState({ rounds: 0, landed: 0 })
  const [result, setResult] = useState<{ x: number; heading: number } | null>(null)
  const sim = useRef({ x: 0, y: 0 })
  const headingRef = useRef(0)
  headingRef.current = heading
  const [, tick] = useState(0)
  const Va = CROSSWIND.airspeed
  const k = 80 // px per km (both axes)
  const cx = 350, gyBottom = 360
  const sx = (x: number) => cx + x * k
  const sy = (y: number) => gyBottom - y * k

  const begin = () => { sim.current = { x: 0, y: 0 }; setResult(null); setPhase('flying') }
  const again = (newRound: boolean) => { if (newRound) setRound(newWind()); sim.current = { x: 0, y: 0 }; setHeading(0); setResult(null); setPhase('ready') }

  useFrame(phase === 'flying', (dt) => {
    const gv = groundVelocity(Va, headingRef.current, round.wind)
    const dtHours = (dt * TIME_SCALE) / 3600
    sim.current.x += gv.vx * dtHours
    sim.current.y += gv.vy * dtHours
    if (sim.current.y >= D_KM) {
      const frac = (D_KM - (sim.current.y - gv.vy * dtHours)) / (gv.vy * dtHours || 1)
      const x = sim.current.x - gv.vx * dtHours * (1 - frac)
      sim.current.x = x
      sim.current.y = D_KM
      const ok = Math.abs(x) <= HALF_RUNWAY_KM
      setResult({ x, heading: headingRef.current })
      setScore((c) => ({ rounds: c.rounds + 1, landed: c.landed + (ok ? 1 : 0) }))
      setPhase('landed')
      return
    }
    if (Math.abs(sim.current.x) > 2.2) { setResult({ x: sim.current.x, heading: headingRef.current }); setScore((c) => ({ rounds: c.rounds + 1, landed: c.landed })); setPhase('landed'); return }
    tick((n) => n + 1)
  })

  const p = sim.current
  const gv = groundVelocity(Va, heading, round.wind)
  const predictedX = p.x + (gv.vx / gv.vy) * (D_KM - p.y)
  const crab = crabAngleDeg(Va, round.wind)
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); setHeading((h) => Math.max(-45, h - 1)) }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setHeading((h) => Math.min(45, h + 1)) }
    else if (e.key === ' ' && phase === 'ready') { e.preventDefault(); begin() }
  }
  const ok = result ? Math.abs(result.x) <= HALF_RUNWAY_KM : false
  const vs = 0.4 // px per km/h for the vector arrows
  const windSign = Math.sign(round.wind)

  return (
    <div className="grid gap-3" tabIndex={0} onKeyDown={onKey} role="group" aria-label="Crosswind landing game. Use the left and right arrow keys or the slider to steer the aircraft's nose.">
      <svg viewBox="0 0 700 400" className="w-full" style={fig} role="img" aria-label={`Top view. The wind blows ${round.wind > 0 ? 'to the right' : 'to the left'} at ${Math.abs(round.wind)} kilometres per hour. The aircraft's nose is ${f(Math.abs(heading), 0)} degrees ${heading === 0 ? 'along the runway' : heading > 0 ? 'right' : 'left'} of the runway. Its actual track is ${f(Math.abs(Math.atan2(gv.vx, gv.vy) / RAD) + 0, 1)} degrees from the runway.`}>
        {/* runway and approach */}
        <rect x={sx(-HALF_RUNWAY_KM)} y={sy(D_KM + 0.9)} width={2 * HALF_RUNWAY_KM * k} height={0.9 * k} fill="var(--surface-elevated)" stroke="var(--text)" />
        {Array.from({ length: 5 }, (_, i) => <line key={i} x1={cx} y1={sy(D_KM + 0.1 + i * 0.17)} x2={cx} y2={sy(D_KM + 0.1 + i * 0.17) - 6} stroke="var(--text-subtle)" />)}
        <line x1={sx(-HALF_RUNWAY_KM) - 14} y1={sy(D_KM)} x2={sx(HALF_RUNWAY_KM) + 14} y2={sy(D_KM)} stroke="var(--accent)" strokeWidth={3} />
        <text x={sx(HALF_RUNWAY_KM) + 20} y={sy(D_KM) + 4} fontSize="11" fontWeight="800" fill="var(--accent)">touchdown line ({D_KM} km)</text>
        <line x1={cx} y1={sy(0)} x2={cx} y2={sy(D_KM)} stroke="var(--text-subtle)" strokeDasharray="3 6" opacity={0.7} />
        {/* wind streaks */}
        {Array.from({ length: 9 }, (_, i) => <g key={i} opacity={0.5}><Arrow x1={windSign > 0 ? 14 : 686} y1={40 + i * 40} x2={windSign > 0 ? 14 + Math.abs(round.wind) * 0.8 : 686 - Math.abs(round.wind) * 0.8} y2={40 + i * 40} color="var(--info, var(--accent))" w={1.5} /></g>)}
        <text x={windSign > 0 ? 14 : 686} y={22} textAnchor={windSign > 0 ? 'start' : 'end'} fontSize="12" fontWeight="800" fill="var(--info, var(--accent))">wind {Math.abs(round.wind)} km h⁻¹</text>
        {/* flown path */}
        <line x1={sx(0)} y1={sy(0)} x2={sx(p.x)} y2={sy(p.y)} stroke="var(--text-muted)" strokeWidth={1.5} opacity={0.6} />
        {/* predicted landing */}
        {showTrack && phase !== 'landed' && (
          <g>
            <line x1={sx(p.x)} y1={sy(p.y)} x2={sx(predictedX)} y2={sy(D_KM)} stroke="var(--text)" strokeDasharray="5 5" />
            <circle cx={sx(predictedX)} cy={sy(D_KM)} r={5} fill={Math.abs(predictedX) <= HALF_RUNWAY_KM ? 'var(--success)' : 'var(--danger)'} />
          </g>
        )}
        {/* the aircraft: the nose points along the HEADING, the aircraft moves along the TRACK */}
        <g transform={`translate(${sx(p.x)} ${sy(p.y)})`}>
          <g transform={`rotate(${heading})`}>
            <ellipse cx={0} cy={0} rx={4.5} ry={15} fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.5} />
            <polygon points="-3,-1 -22,8 -22,12 -3,6" fill="var(--surface-elevated)" stroke="var(--text)" />
            <polygon points="3,-1 22,8 22,12 3,6" fill="var(--surface-elevated)" stroke="var(--text)" />
            <circle cx={0} cy={-9} r={1.8} fill="var(--accent)" />
          </g>
          <Arrow x1={0} y1={0} x2={Va * vs * Math.sin(heading * RAD)} y2={-Va * vs * Math.cos(heading * RAD)} color="var(--accent)" w={3} />
          <Arrow x1={Va * vs * Math.sin(heading * RAD)} y1={-Va * vs * Math.cos(heading * RAD)} x2={Va * vs * Math.sin(heading * RAD) + round.wind * vs} y2={-Va * vs * Math.cos(heading * RAD)} color="var(--info, var(--accent))" w={3} />
          <Arrow x1={0} y1={0} x2={gv.vx * vs} y2={-gv.vy * vs} color="var(--text)" w={3} />
        </g>
        <g fontSize="11" fontWeight="800">
          <text x={14} y={392} fill="var(--accent)">→ nose (velocity through the air, 200 km h⁻¹)</text>
          <text x={300} y={392} fill="var(--info, var(--accent))">→ wind</text>
          <text x={360} y={392} fill="var(--text)">→ where you actually go (the sum)</text>
        </g>
      </svg>
      <div className="flex flex-wrap items-center gap-2">
        {phase === 'ready' && <button className={ctl} style={btn1} onClick={begin}>Start approach</button>}
        {phase === 'landed' && <button className={ctl} style={btn1} onClick={() => again(true)}>New wind</button>}
        {phase === 'landed' && <button className={ctl} style={btn2} onClick={() => again(false)}>Try again</button>}
        <button className={ctl} style={btn2} onClick={() => setHeading((h) => Math.max(-45, h - 1))} aria-label="Turn the nose left">◀</button>
        <input type="range" min={-45} max={45} step={0.5} value={heading} onChange={(e) => setHeading(Number(e.target.value))} aria-label="Heading, degrees from the runway direction" className="min-w-[160px] flex-1" style={{ accentColor: 'var(--accent)' }} />
        <button className={ctl} style={btn2} onClick={() => setHeading((h) => Math.min(45, h + 1))} aria-label="Turn the nose right">▶</button>
        <button className={ctl} style={showTrack ? btn1 : btn2} aria-pressed={showTrack} onClick={() => setShowTrack((s) => !s)}>Show landing point</button>
        <span className="ml-auto text-xs font-bold" style={{ color: 'var(--text-muted)' }}>Landed on the runway {score.landed} / {score.rounds}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Cell label="Nose angle from runway" value={`${f(Math.abs(heading), 1)}° ${heading === 0 ? '' : heading > 0 ? 'right' : 'left'}`} accent />
        <Cell label="Sideways drift speed" value={`${f(Math.abs(gv.vx), 1)} km h⁻¹`} />
        <Cell label="Speed along the runway" value={`${f(gv.vy, 1)} km h⁻¹`} />
        <Cell label="Distance to go" value={`${f(D_KM - p.y, 2)} km`} />
      </div>
      {phase === 'landed' && result && (
        <div role="status" className="rounded-[var(--radius-panel)] px-3.5 py-2.5 text-sm" style={{ background: ok ? 'var(--success-surface)' : 'var(--warning-surface)', border: `1px solid ${ok ? 'var(--success)' : 'var(--warning)'}`, color: 'var(--text)' }}>
          <b>{ok ? 'On the runway!' : `Off the runway by ${f(Math.abs(result.x) * 1000 - HALF_RUNWAY_KM * 1000, 0)} m.`}</b>{' '}
          The wind is {Math.abs(round.wind)} km h⁻¹ and your airspeed is {Va} km h⁻¹. To cancel the sideways drift the nose must point into the wind by sin θ = W / V = {Math.abs(round.wind)} / {Va}, so θ = {f(Math.abs(crab), 1)}°, and the speed along the runway is √({Va}² − {Math.abs(round.wind)}²) = {f(groundSpeedWhenCrabbing(Va, round.wind), 1)} km h⁻¹. You finished with the nose {f(Math.abs(result.heading), 1)}° {result.heading === 0 ? 'on the runway line' : result.heading > 0 ? 'right' : 'left'}.
        </div>
      )}
    </div>
  )
}

// ================================================================== 4 · walking in the rain
interface Drop { x: number; y: number; dead: number }
const RAIN_SPEED = 8 // m s⁻¹

export function UmbrellaWalkGame() {
  const reduced = useReducedMotion()
  const [W, setW] = useState(3)
  const [tilt, setTilt] = useState(0)
  const [view, setView] = useState<'walker' | 'pavement'>('walker')
  const [running, setRunning] = useState(true)
  const [challenge, setChallenge] = useState(false)
  const [, tick] = useState(0)
  const st = useRef({ person: 6, phase: 0, wet: 0, blocked: 0 })
  const drops = useRef<Drop[]>([])
  const wRef = useRef(W), tiltRef = useRef(tilt)
  wRef.current = W
  tiltRef.current = tilt

  const S = 60, gy = 270
  const vr = RAIN_SPEED
  const dry = dryFraction(W, vr, tilt)
  const best = dryFraction(W, vr, rainAngleDeg(W, vr))
  const thetaStar = rainAngleDeg(W, vr)

  useEffect(() => { if (reduced) setRunning(false) }, [reduced])
  useFrame(running, (dt) => {
    const s = st.current
    const walk = wRef.current
    const prevPerson = s.person
    s.person += walk * dt
    s.phase += walk * dt * 3.2
    if (s.person > 11.5) s.person -= 11 // loop the pavement view
    // rain: spawn across the visible width (ground frame), falling straight down
    const need = 260 - drops.current.length
    for (let i = 0; i < Math.min(need, 10); i++) drops.current.push({ x: s.person - 7 + Math.random() * 14 + walk * 0.8, y: 4.4 + Math.random() * 0.9, dead: 0 })
    const cc = canopyCentre(tiltRef.current)
    const t = (tiltRef.current * Math.PI) / 180
    const sxv = Math.cos(t), syv = -Math.sin(t)
    const c1 = { x: s.person + cc.x - UMBRELLA.canopyHalfWidth * sxv, y: cc.y - UMBRELLA.canopyHalfWidth * syv }
    const c2 = { x: s.person + cc.x + UMBRELLA.canopyHalfWidth * sxv, y: cc.y + UMBRELLA.canopyHalfWidth * syv }
    const keep: Drop[] = []
    for (const d of drops.current) {
      const ny = d.y - vr * dt
      if (d.dead > 0) { d.dead -= dt; if (d.dead > 0) keep.push(d); continue }
      // work in the walker's frame so the person does not move between the two sample points
      const ax = d.x - prevPerson, ay = d.y
      const bx = d.x - s.person, by = ny
      // canopy segment relative to the walker
      const r1 = { x: c1.x - s.person, y: c1.y }, r2 = { x: c2.x - s.person, y: c2.y }
      if (segHit(ax, ay, bx, by, r1.x, r1.y, r2.x, r2.y)) { s.blocked++; keep.push({ x: d.x, y: d.y, dead: 0.12 }); continue }
      let hitBody = false
      for (let i = 1; i <= 4 && !hitBody; i++) { const qx = ax + ((bx - ax) * i) / 4, qy = ay + ((by - ay) * i) / 4; if (Math.abs(qx) <= 0.16 && qy >= 0 && qy <= UMBRELLA.bodyHeight) hitBody = true }
      if (hitBody) { s.wet++; continue }
      if (ny > 0) keep.push({ x: d.x, y: ny, dead: 0 })
    }
    drops.current = keep
    tick((n) => n + 1)
  })

  const s = st.current
  const camLeft = view === 'walker' ? s.person - 5.8 : 0
  const X = (x: number) => (x - camLeft) * S
  const Y = (y: number) => gy - y * S
  const personX = X(s.person)
  const cc = canopyCentre(tilt)
  const tr = (tilt * Math.PI) / 180
  const sv = { x: Math.cos(tr), y: -Math.sin(tr) }
  const nrm = { x: Math.sin(tr), y: Math.cos(tr) }
  const e1 = { x: personX + (cc.x - UMBRELLA.canopyHalfWidth * sv.x) * S, y: Y(cc.y - UMBRELLA.canopyHalfWidth * sv.y) }
  const e2 = { x: personX + (cc.x + UMBRELLA.canopyHalfWidth * sv.x) * S, y: Y(cc.y + UMBRELLA.canopyHalfWidth * sv.y) }
  const dome = { x: personX + (cc.x + nrm.x * 0.32) * S, y: Y(cc.y + nrm.y * 0.32) }
  const hand = { x: personX, y: Y(UMBRELLA.handHeight) }
  const swing = Math.sin(s.phase) * Math.min(0.45, 0.1 + W * 0.07)
  const streakRel = view === 'walker' ? { dx: -W, dy: -vr } : { dx: 0, dy: -vr }

  const startChallenge = () => { setChallenge(true); setW(Math.round((2.5 + Math.random() * 2) * 2) / 2); setTilt(0); st.current.wet = 0; st.current.blocked = 0; setRunning(true) }
  const ok = dry >= 0.95

  return (
    <div className="grid gap-3">
      <svg viewBox="0 0 700 300" className="w-full" style={fig} role="img" aria-label={`A person walking at ${W} metres per second in rain falling at ${vr} metres per second, holding an umbrella leaning ${f(tilt, 0)} degrees forward. From the walker, the rain comes from ${f(thetaStar, 0)} degrees in front of vertical. The umbrella keeps ${f(dry * 100, 0)} percent of the body dry.`}>
        <line x1={0} y1={gy} x2={700} y2={gy} stroke="var(--text-subtle)" strokeWidth={2} />
        {Array.from({ length: 40 }, (_, i) => { const gxp = (((i * 1.0 - (view === 'walker' ? s.person : 0)) % 40) + 40) % 40 - 5; return <line key={i} x1={gxp * S} y1={gy} x2={gxp * S - 8} y2={gy + 8} stroke="var(--text-subtle)" opacity={0.5} /> })}
        {drops.current.map((d, i) => d.dead > 0
          ? <circle key={i} cx={X(d.x)} cy={Y(d.y)} r={3} fill="none" stroke="var(--info, var(--accent))" opacity={0.7} />
          : <line key={i} x1={X(d.x)} y1={Y(d.y)} x2={X(d.x) - streakRel.dx * 0.045 * S} y2={Y(d.y) - streakRel.dy * 0.045 * S} stroke="var(--info, var(--accent))" strokeWidth={1.6} opacity={0.75} />)}
        {/* person (walking to the right) */}
        <g stroke="var(--text)" strokeWidth={3} strokeLinecap="round" fill="none">
          <line x1={personX} y1={Y(0.85)} x2={personX + swing * S} y2={Y(0)} />
          <line x1={personX} y1={Y(0.85)} x2={personX - swing * S} y2={Y(0)} />
          <line x1={personX} y1={Y(0.85)} x2={personX} y2={Y(1.42)} strokeWidth={4} />
          <line x1={personX} y1={Y(1.35)} x2={hand.x} y2={hand.y} strokeWidth={2.5} />
          <circle cx={personX} cy={Y(1.56)} r={0.13 * S} fill="var(--surface-elevated)" />
        </g>
        {/* umbrella: shaft from the hand, canopy as a dome */}
        <line x1={hand.x} y1={hand.y} x2={personX + cc.x * S} y2={Y(cc.y)} stroke="var(--text)" strokeWidth={2.5} />
        <path d={`M${e1.x},${e1.y} Q${dome.x},${dome.y} ${e2.x},${e2.y} Z`} fill="var(--accent)" stroke="var(--text)" strokeWidth={1.5} opacity={0.92} />
        <text x={694} y={16} textAnchor="end" fontSize="11" fontWeight="800" fill="var(--text-muted)">{view === 'walker' ? 'watching from the walker: the ground slides back, the rain slants' : 'watching from the pavement: the rain falls straight down'}</text>
        <text x={12} y={16} fontSize="11" fontWeight="800" fill="var(--text)">walking → {f(W, 1)} m s⁻¹ · rain ↓ {vr} m s⁻¹</text>
      </svg>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Walking speed" value={W} min={0} max={6} step={0.5} unit="m s⁻¹" onChange={(v) => { setW(v) }} />
        <Slider label="Lean the umbrella forward" value={tilt} min={-20} max={60} step={1} unit="°" onChange={setTilt} shown={`${tilt}`} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className={ctl} style={btn1} onClick={() => setRunning((r) => !r)}>{running ? 'Pause' : 'Play'}</button>
        <button className={ctl} style={view === 'walker' ? btn1 : btn2} onClick={() => setView('walker')}>Watch from the walker</button>
        <button className={ctl} style={view === 'pavement' ? btn1 : btn2} onClick={() => setView('pavement')}>Watch from the pavement</button>
        <button className={ctl} style={btn2} onClick={startChallenge}>New challenge</button>
        <button className={ctl} style={btn2} onClick={() => { st.current.wet = 0; st.current.blocked = 0 }}>Reset counters</button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Cell label="Body kept dry" value={`${f(dry * 100, 0)}%`} accent />
        <Cell label="Best possible here" value={`${f(best * 100, 0)}%`} />
        <Cell label="Rain angle seen, tan θ = W / v" value={`${f(thetaStar, 1)}°`} />
        <Cell label="Drops that hit you" value={`${s.wet} (umbrella caught ${s.blocked})`} />
      </div>
      <div className="rounded-[var(--radius-panel)] px-3.5 py-2.5 text-sm" role="status" style={{ background: ok ? 'var(--success-surface)' : 'var(--warning-surface)', border: `1px solid ${ok ? 'var(--success)' : 'var(--warning)'}`, color: 'var(--text)' }}>
        {ok ? (
          <><b>{challenge ? 'Dry! ' : ''}Well leaned.</b> Walking at {f(W, 1)} m s⁻¹ the rain seems to come from {f(thetaStar, 1)}° in front of vertical, so the shaft should point that way: tan θ = W / v = {f(W, 1)} / {vr}.</>
        ) : (
          <><b>Getting wet.</b> From you the rain does not fall straight down. Its velocity relative to you is the rain’s velocity minus your velocity, so it comes in at tan θ = W / v = {f(W, 1)} / {vr}, θ = {f(thetaStar, 1)}°, from the front. Lean the umbrella toward that angle.</>
        )}
      </div>
    </div>
  )
}

/** Do segments (a→b) and (c→d) cross? */
function segHit(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number, dy: number) {
  const r = { x: bx - ax, y: by - ay }, s = { x: dx - cx, y: dy - cy }
  const den = r.x * s.y - r.y * s.x
  if (Math.abs(den) < 1e-12) return false
  const t = ((cx - ax) * s.y - (cy - ay) * s.x) / den
  const u = ((cx - ax) * r.y - (cy - ay) * r.x) / den
  return t >= 0 && t <= 1 && u >= 0 && u <= 1
}

// ================================================================== 5 · stellar aberration
export function AberrationLab() {
  const reduced = useReducedMotion()
  const [mode, setMode] = useState<'rain' | 'light'>('light')
  const [exag, setExag] = useState(3000)
  const [sixMonths, setSixMonths] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [measured, setMeasured] = useState(20.5)
  const [tau, setTau] = useState(0.3)
  useEffect(() => { if (reduced) setPlaying(false) }, [reduced])
  useFrame(playing, (dt) => setTau((x) => (x + dt * 0.35) % 1.35))

  const vEarth = earthOrbitSpeed()
  const trueRatio = mode === 'light' ? vEarth / C_LIGHT : 2 / 8 // tan α: Earth / light, or a 2 m/s walker / 8 m/s rain
  const shown = mode === 'light' ? trueRatio * exag : trueRatio // what we DRAW (light is exaggerated)
  const alphaShown = Math.atan(shown)
  const alphaTrue = Math.atan(trueRatio)
  const dirn = sixMonths ? -1 : 1
  const L = 150
  const x0 = 250, yTop = 80
  const prog = Math.min(1, tau) // 0..1 passage of the light down the tube
  const tf = (L * Math.cos(alphaShown)) // photon descent to bottom, in px (speed c_vis = 1 px per px)
  const vVis = shown // tube speed in px per px of photon descent
  const photonY = yTop + prog * tf
  const topX = x0 + dirn * vVis * prog * tf // tube top moves sideways at v while photon descends
  const botX = topX - dirn * L * Math.sin(alphaShown)
  const botY = yTop + L * Math.cos(alphaShown)
  const photonX = x0
  const alphaArcsec = radToArcsec(alphaTrue)

  const cFromMeasured = speedOfLightFromAberration(vEarth, arcsecToRad(measured))

  const tubeAxisLeft = [botX, botY] as const
  void tubeAxisLeft

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Which situation">
        <button className={ctl} style={mode === 'rain' ? btn1 : btn2} aria-pressed={mode === 'rain'} onClick={() => setMode('rain')}>☔ Rain and umbrella</button>
        <button className={ctl} style={mode === 'light' ? btn1 : btn2} aria-pressed={mode === 'light'} onClick={() => setMode('light')}>🔭 Starlight and telescope</button>
        <button className={ctl} style={sixMonths ? btn1 : btn2} aria-pressed={sixMonths} onClick={() => setSixMonths((s) => !s)}>Six months later</button>
        <button className={ctl} style={btn2} onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
      </div>
      <div className="grid gap-3 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <svg viewBox="0 0 520 300" className="w-full" style={fig} role="img" aria-label={mode === 'light' ? `Starlight falls straight down while the Earth moves sideways at ${f(vEarth / 1000, 1)} kilometres per second, so the telescope must lean ${f(alphaArcsec, 1)} arcseconds toward the direction of motion. The lean is drawn ${exag} times too large.` : 'Rain falls straight down while the walker moves forward, so the umbrella must lean toward the direction of motion.'}>
          {/* the incoming rays */}
          {[100, 180, 320, 400, 470].map((x) => <g key={x}><line x1={x} y1={20} x2={x} y2={mode === 'light' ? 52 : 70} stroke={mode === 'light' ? 'var(--warning)' : 'var(--info, var(--accent))'} strokeDasharray="4 5" /><Arrow x1={x} y1={52} x2={x} y2={64} color={mode === 'light' ? 'var(--warning)' : 'var(--info, var(--accent))'} w={2} /></g>)}
          <text x={14} y={20} fontSize="12" fontWeight="800" fill="var(--text)">{mode === 'light' ? '★ light from a distant star, straight down' : 'rain, straight down'}</text>
          {/* the tube (telescope or umbrella shaft) with the photon or raindrop inside */}
          <g>
            <line x1={botX} y1={botY} x2={topX} y2={yTop} stroke="var(--text)" strokeWidth={mode === 'light' ? 14 : 5} strokeLinecap="round" opacity={0.18} />
            <line x1={botX} y1={botY} x2={topX} y2={yTop} stroke="var(--text)" strokeWidth={mode === 'light' ? 3 : 2.5} strokeLinecap="round" />
            {mode === 'rain' && <path d={`M${topX - 46 * Math.cos(alphaShown)},${yTop + 46 * dirn * Math.sin(alphaShown) * -1 + 8} Q${topX},${yTop - 34} ${topX + 46 * Math.cos(alphaShown)},${yTop + 46 * dirn * Math.sin(alphaShown) + 8} Z`} fill="var(--accent)" opacity={0.85} />}
            <circle cx={photonX} cy={photonY} r={mode === 'light' ? 4.5 : 4} fill={mode === 'light' ? 'var(--warning)' : 'var(--info, var(--accent))'} stroke="var(--text)" />
            <line x1={x0} y1={yTop} x2={x0} y2={photonY} stroke={mode === 'light' ? 'var(--warning)' : 'var(--info, var(--accent))'} strokeWidth={1.5} opacity={0.6} />
          </g>
          {/* the observer: Earth or walker, moving sideways */}
          <rect x={botX - 40} y={botY + 6} width={80} height={mode === 'light' ? 26 : 6} rx={mode === 'light' ? 13 : 3} fill={mode === 'light' ? 'var(--accent)' : 'var(--text)'} opacity={0.9} />
          <text x={botX} y={botY + 24} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text-on-accent)">{mode === 'light' ? 'Earth' : ''}</text>
          <Arrow x1={botX - dirn * 30} y1={botY + 48} x2={botX + dirn * 60} y2={botY + 48} color="var(--success)" w={3} />
          <text x={botX + dirn * 24} y={botY + 64} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--success)">{mode === 'light' ? `Earth: ${f(vEarth / 1000, 1)} km s⁻¹` : 'walker: 2 m s⁻¹'}</text>
          {/* angle mark */}
          <line x1={botX} y1={botY} x2={botX} y2={botY - 64} stroke="var(--text-subtle)" strokeDasharray="3 4" />
          <text x={botX + dirn * 14} y={botY - 40} textAnchor={dirn > 0 ? 'start' : 'end'} fontSize="13" fontWeight="800" fill="var(--danger)">α</text>
          <text x={506} y={292} textAnchor="end" fontSize="10" fill="var(--text-muted)">{mode === 'light' ? `lean drawn ${exag}× too big so you can see it` : 'drawn to scale'}</text>
        </svg>
        <div className="grid content-start gap-2">
          <Cell label={mode === 'light' ? 'Earth’s speed v' : 'Walker’s speed v'} value={mode === 'light' ? `${f(vEarth / 1000, 1)} km s⁻¹` : '2 m s⁻¹'} />
          <Cell label={mode === 'light' ? 'Speed of light c' : 'Rain speed'} value={mode === 'light' ? '3.00 × 10⁸ m s⁻¹' : '8 m s⁻¹'} />
          <Cell label="tan α = v / c" value={mode === 'light' ? `${(trueRatio * 1e5).toFixed(2)} × 10⁻⁵` : f(trueRatio, 2)} accent />
          <Cell label="Lean needed, α" value={mode === 'light' ? `${f(alphaArcsec, 1)} arcseconds` : `${f((alphaTrue * 180) / Math.PI, 1)}°`} accent />
        </div>
      </div>
      {mode === 'light' && <Slider label="Exaggerate the lean (drawing only)" value={exag} min={500} max={6000} step={100} unit="×" onChange={setExag} />}
      <div className="rounded-[var(--radius-panel)] p-3" style={panel}>
        <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Run Bradley’s method backwards: measure α, get c</div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <Slider label="Measured aberration angle α" value={measured} min={18} max={23} step={0.1} unit="arcseconds" onChange={setMeasured} shown={measured.toFixed(1)} />
          <div className="text-sm" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
            <div>v = 2πr / T = {f(vEarth / 1000, 1)} km s⁻¹</div>
            <div>c = v / tan α = {f(vEarth, 0)} / tan({f(measured, 1)}″)</div>
            <div>c = <b style={{ color: 'var(--accent)' }}>{(cFromMeasured / 1e8).toFixed(2)} × 10⁸ m s⁻¹</b></div>
          </div>
        </div>
      </div>
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        The sums are the umbrella’s sums with different numbers. Rain falls at 8 m s⁻¹ and you walk at 2 m s⁻¹: lean by tan⁻¹(2 / 8) = 14°. Starlight arrives at 3.0 × 10⁸ m s⁻¹ and the Earth moves at 29.8 km s⁻¹: the telescope leans by tan⁻¹(v / c) = {f(radToArcsec(aberrationRad(vEarth)), 1)} arcseconds. Six months later the Earth moves the other way, so the lean flips.
      </p>
    </div>
  )
}
