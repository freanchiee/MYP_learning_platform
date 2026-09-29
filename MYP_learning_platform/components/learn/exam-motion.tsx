'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as em from '@/lib/learn/exam-motion-model'

// Seven exam-style motion problems, recreated as our own animated diagrams: the physics and the given
// numbers are not copyrightable, but the exam papers' own wording, figure numbering and layout are not
// reused. Two shared primitives cover all of them: a horizontal track (for anything moving along a line)
// and a vertical bounce (for the dropped ball).

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
const f2 = (x: number, d = 1) => {
  if (Math.abs(x) < 1e-9) return '0'
  const raw = x.toFixed(d)
  const s = d > 0 ? raw.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '') : raw
  return (s === '-0' ? '0' : s).replace('-', '−')
}

function Slider({ label, value, min, max, step, unit, onChange }: { label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void }) {
  return (
    <label className="block text-sm">
      <span className="flex justify-between font-bold" style={{ color: 'var(--text)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--accent)' }}>{f2(value)} {unit}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full" style={{ accentColor: 'var(--accent)' }} />
    </label>
  )
}

function useReducedMotion() {
  const [r, setR] = useState(false)
  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)')
    setR(q.matches)
    const f = () => setR(q.matches)
    q.addEventListener('change', f)
    return () => q.removeEventListener('change', f)
  }, [])
  return r
}

/** A scrubbable clock: plays while `playing`, always scrubbable by the slider. Starts paused if reduced motion is set. */
function useScrub(tMax: number) {
  const reduced = useReducedMotion()
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const raf = useRef(0)
  useEffect(() => {
    if (!playing || reduced) return
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setT((x) => {
        const n = x + dt * (tMax / 8) // ~8 real seconds for a full run, whatever tMax is
        if (n >= tMax) { setPlaying(false); return tMax }
        return n
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [playing, reduced, tMax])
  return { t, setT, playing, setPlaying, reduced }
}

// ---------------------------------------------------------------- a horizontal track, one or more actors
interface Actor {
  key: string
  label: string
  color: string
  icon: 'train' | 'car' | 'plane'
  xOf: (t: number) => number
  vOf: (t: number) => number
  trailFromX?: number // draw a mark trail behind the actor once its position passes this x (e.g. where braking starts)
  dropTimes?: number[] // discrete marker dots left on the ground at these times
}

function Icon({ kind, color, flip }: { kind: Actor['icon']; color: string; flip?: boolean }) {
  if (kind === 'plane') {
    return (
      <g transform={flip ? 'scale(-1,1)' : undefined}>
        <polygon points="-16,0 14,0 20,-4 14,-8 -8,-8 -16,-4" fill={color} />
        <polygon points="-2,-8 -2,-16 6,-8" fill={color} opacity="0.8" />
      </g>
    )
  }
  if (kind === 'train') {
    return (
      <g>
        <rect x="-18" y="-20" width="36" height="20" rx="4" fill={color} />
        <rect x="-14" y="-16" width="10" height="8" fill="#dfeaff" opacity="0.9" />
        <rect x="2" y="-16" width="10" height="8" fill="#dfeaff" opacity="0.9" />
        <circle cx="-10" cy="0" r="4" fill="#111" />
        <circle cx="10" cy="0" r="4" fill="#111" />
      </g>
    )
  }
  return (
    <g>
      <rect x="-16" y="-14" width="32" height="12" rx="4" fill={color} />
      <polygon points="-10,-14 -4,-22 8,-22 12,-14" fill="#dfeaff" opacity="0.9" />
      <circle cx="-8" cy="0" r="4.5" fill="#111" />
      <circle cx="8" cy="0" r="4.5" fill="#111" />
    </g>
  )
}

function TrackAnim({ actors, tMax, title, unitLabel = 'm' }: { actors: Actor[]; tMax: number; title: string; unitLabel?: string }) {
  const { t, setT, playing, setPlaying, reduced } = useScrub(tMax)
  const W = 420, H = 140, roadY = 96, padL = 14, padR = 14
  const xMax = useMemo(() => Math.max(10, ...actors.map((a) => a.xOf(tMax))), [actors, tMax])
  const sx = (W - padL - padR) / xMax
  const X = (x: number) => padL + x * sx

  return (
    <div className="grid gap-3">
      <figure className="p-2" style={fig}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title}>
          <rect y={roadY} width={W} height="10" fill="var(--border)" />
          {actors.map((a) => {
            const trailOn = a.trailFromX != null && a.xOf(t) > a.trailFromX
            const startX = a.trailFromX != null ? X(a.trailFromX) : undefined
            return (
              <g key={a.key}>
                {trailOn && (
                  <rect x={startX} y={roadY + 2} width={Math.max(0, X(a.xOf(t)) - (startX ?? 0))} height="3" fill="#333" opacity="0.6" />
                )}
                {a.dropTimes?.filter((dt) => dt <= t).map((dt) => (
                  <circle key={dt} cx={X(a.xOf(dt))} cy={roadY + 5} r="2.2" fill="#7a5230" />
                ))}
                <g transform={`translate(${X(a.xOf(t))},${roadY})`}>
                  <Icon kind={a.icon} color={a.color} />
                </g>
                <text x={X(a.xOf(t))} y={roadY - 26} fontSize="9" textAnchor="middle" fill={a.color} fontWeight="bold">{a.label}</text>
              </g>
            )
          })}
          <text x={padL} y={H - 6} fontSize="8" fill="var(--text-muted)">0 {unitLabel}</text>
          <text x={W - padR} y={H - 6} fontSize="8" textAnchor="end" fill="var(--text-muted)">{f2(xMax, 0)} {unitLabel}</text>
        </svg>
      </figure>
      <Slider label="Time" value={Math.round(t * 100) / 100} min={0} max={tMax} step={tMax / 200} unit="s" onChange={(v) => { setPlaying(false); setT(v) }} />
      {!reduced && <button onClick={() => { if (t >= tMax) setT(0); setPlaying((p) => !p) }} aria-pressed={playing} className={ctl} style={playing ? btn2 : btn1}>{playing ? '⏸ PAUSE' : '▶ PLAY'}</button>}
      <div className="grid gap-1 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        {actors.map((a) => (
          <div key={a.key}>
            <strong style={{ color: a.color }}>{a.label}:</strong> x = {f2(a.xOf(t))} {unitLabel}, v = {f2(a.vOf(t))} {unitLabel} s⁻¹
          </div>
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- Q1: a train speeds up, then slows to a stop
export function TrainAccelDecelAnim() {
  const { T } = em.trainSolve()
  const actors: Actor[] = [{ key: 'train', label: 'Train', color: 'var(--accent)', icon: 'train', xOf: em.trainPosition, vOf: em.trainVelocity }]
  return <TrackAnim actors={actors} tMax={T} title="A train speeding up from A to B, then slowing to a stop at C." unitLabel="m" />
}

// ---------------------------------------------------------------- Q4: a train must stop at a red signal
export function SignalTrainAnim() {
  const { tStop } = em.signalSolve()
  const actors: Actor[] = [{ key: 'train', label: 'Train', color: 'var(--warning)', icon: 'train', xOf: em.signalPosition, vOf: em.signalVelocity }]
  return <TrackAnim actors={actors} tMax={tStop} title="A train braking from the yellow signal, coming to rest exactly at the red signal." unitLabel="m" />
}

// ---------------------------------------------------------------- Q5: an aircraft takes off
export function AircraftTakeoffAnim() {
  const { tUp } = em.takeoffSolve()
  const actors: Actor[] = [{ key: 'plane', label: 'Aircraft', color: 'var(--success)', icon: 'plane', xOf: em.takeoffPosition, vOf: em.takeoffVelocity }]
  return <TrackAnim actors={actors} tMax={tUp} title="An aircraft accelerating from rest to its take-off speed along the runway." unitLabel="m" />
}

// ---------------------------------------------------------------- Q6: two cars, one steady, one catching up
export function ChaseCarsAnim() {
  const actors: Actor[] = [
    { key: 'x', label: 'Car X (steady)', color: 'var(--accent)', icon: 'car', xOf: em.chaseXPosition, vOf: em.chaseXVelocity },
    { key: 'y', label: 'Car Y (accelerating)', color: 'var(--warning)', icon: 'car', xOf: em.chaseYPosition, vOf: em.chaseYVelocity },
  ]
  return <TrackAnim actors={actors} tMax={25} title="Car X moves at a steady speed; Car Y starts behind but accelerates and catches up." unitLabel="m" />
}

// ---------------------------------------------------------------- Q7: a leaking car, timed by oil drops
export function OilDripCarAnim() {
  const actors: Actor[] = [{ key: 'car', label: 'Car', color: 'var(--danger)', icon: 'car', xOf: em.dripsPosition, vOf: em.dripsVelocity, dropTimes: em.dripTimes() }]
  return <TrackAnim actors={actors} tMax={em.DRIPS.interval * 3} title="A car accelerating steadily, leaking one drop of oil every two seconds." unitLabel="m" />
}

// ---------------------------------------------------------------- Q3: a car reacts, then skids to a stop
export function CarSkidAnim() {
  const { tReaction, tSkid } = em.skidSolve()
  const tMax = tReaction + tSkid
  const actors: Actor[] = [{
    key: 'car', label: 'Car', color: 'var(--accent)', icon: 'car', xOf: em.skidPosition, vOf: em.skidVelocity,
    trailFromX: em.skidPosition(tReaction),
  }]
  return <TrackAnim actors={actors} tMax={tMax} title="A car at constant speed during the driver's reaction time, then braking hard, leaving skid marks." unitLabel="m" />
}

// ---------------------------------------------------------------- Q2: a ball dropped, bounces
export function BallBounceAnim() {
  const tPeak = em.BALL.tImpact + em.ballTimeToPeak()
  const tMax = tPeak * 1.35
  const { t, setT, playing, setPlaying, reduced } = useScrub(tMax)
  const H = 190, W = 260, floorY = 168, padT = 14
  const hMax = Math.max(em.ballH(), em.ballMaxReboundHeight()) * 1.1
  const Y = (h: number) => floorY - (h / hMax) * (floorY - padT)
  const h = em.ballHeight(t)
  const v = em.ballVelocity(t)
  const atPeak = t > em.BALL.tImpact && Math.abs(t - tPeak) < (tMax / 400)

  return (
    <div className="grid gap-3">
      <figure className="p-2" style={fig}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`A ball dropped from ${f2(em.ballH())} metres, bouncing to a rebound height of ${f2(em.ballMaxReboundHeight())} metres. Currently at height ${f2(h)} metres.`}>
          <rect y={floorY} width={W} height={H - floorY} fill="var(--border)" />
          <line x1="40" y1={Y(em.ballH())} x2="60" y2={Y(em.ballH())} stroke="var(--text-muted)" strokeDasharray="2 2" />
          <text x="36" y={Y(em.ballH()) + 3} fontSize="8" textAnchor="end" fill="var(--text-muted)">H = {f2(em.ballH())} m</text>
          <line x1="180" y1={Y(em.ballMaxReboundHeight())} x2="200" y2={Y(em.ballMaxReboundHeight())} stroke="var(--success)" strokeDasharray="2 2" />
          <text x="204" y={Y(em.ballMaxReboundHeight()) + 3} fontSize="8" fill="var(--success)">M ≈ {f2(em.ballMaxReboundHeight())} m</text>
          <circle cx="130" cy={Y(h)} r="9" fill={atPeak ? 'var(--success)' : 'var(--accent)'} />
          {atPeak && <text x="130" y={Y(h) - 16} fontSize="9" textAnchor="middle" fontWeight="bold" fill="var(--success)">M: v = 0, a = −g</text>}
        </svg>
      </figure>
      <Slider label="Time" value={Math.round(t * 100) / 100} min={0} max={tMax} step={tMax / 300} unit="s" onChange={(v) => { setPlaying(false); setT(v) }} />
      {!reduced && <button onClick={() => { if (t >= tMax) setT(0); setPlaying((p) => !p) }} aria-pressed={playing} className={ctl} style={playing ? btn2 : btn1}>{playing ? '⏸ PAUSE' : '▶ PLAY'}</button>}
      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        <div>Height above floor: <strong>{f2(h)} m</strong></div>
        <div>Velocity (up +): <strong>{f2(v)} m s⁻¹</strong></div>
        <div>Acceleration: <strong>−{f2(em.BALL.g)} m s⁻²</strong> <span style={{ color: 'var(--text-muted)' }}>(always, even at M)</span></div>
      </div>
    </div>
  )
}
