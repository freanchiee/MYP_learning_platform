'use client'
import { useEffect, useRef, useState } from 'react'
import * as ec from '@/lib/learn/exam-collisions-model'

// Two collision problems, recreated with our own animated diagram and momentum-time graph.

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
        const n = x + dt * (tMax / 6) // ~6 real seconds for a full run
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

interface Ball { label: string; color: string; m: number; before: number; after: number; x0: number; r: number }

function CollisionAnim({ balls, t0, t1, tMax, title, massUnit = 'kg' }: { balls: Ball[]; t0: number; t1: number; tMax: number; title: string; massUnit?: string }) {
  const { t, setT, playing, setPlaying, reduced } = useScrub(tMax)
  const W = 420, H = 110, roadY = 70, padL = 20, padR = 20

  const positions = balls.map((b) => ec.collisionPosition(b.m, b.before, b.after, t0, t1, b.x0, t))
  const xMax = Math.max(...balls.map((b) => Math.max(Math.abs(b.x0), Math.abs(ec.collisionPosition(b.m, b.before, b.after, t0, t1, b.x0, tMax))))) * 1.15 + 1
  const sx = (W - padL - padR) / (2 * xMax)
  const X = (x: number) => W / 2 + x * sx

  const inContact = t >= t0 && t <= t1

  // ---- the momentum-time graph ----
  const GW = 420, GH = 150, gPadL = 40, gPadR = 10, gPadT = 12, gPadB = 22
  const N = 100
  const pVals = balls.flatMap((b) => [b.m * b.before, b.m * b.after])
  const pMax = Math.max(...pVals, 0) * 1.15 || 1
  const pMin = Math.min(...pVals, 0) * (Math.min(...pVals, 0) < 0 ? 1.15 : 1) // 0 unless some momentum is actually negative
  const GX = (s: number) => gPadL + (s / tMax) * (GW - gPadL - gPadR)
  const GY = (p: number) => GH - gPadB - ((p - pMin) / (pMax - pMin)) * (GH - gPadB - gPadT)

  return (
    <div className="grid gap-3">
      <figure className="p-2" style={fig}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title}>
          <rect y={roadY} width={W} height="6" fill="var(--border)" />
          {inContact && (
            <rect x={X(positions[0]) - 2} y={roadY - 24} width={Math.max(2, X(positions[1]) - X(positions[0]) + 4)} height="20" fill="var(--warning)" opacity="0.18" rx="4" />
          )}
          {balls.map((b, i) => (
            <g key={b.label}>
              <circle cx={X(positions[i])} cy={roadY - 12} r={b.r} fill={b.color} />
              <text x={X(positions[i])} y={roadY - 12 + 4} fontSize="10" textAnchor="middle" fontWeight="bold" fill="#fff">{b.label}</text>
            </g>
          ))}
        </svg>
      </figure>
      <figure className="p-2" style={fig}>
        <svg viewBox={`0 0 ${GW} ${GH}`} className="w-full" role="img" aria-label={`Momentum against time for ${balls.map((b) => b.label).join(' and ')}.`}>
          <line x1={gPadL} y1={GH - gPadB} x2={GW - gPadR} y2={GH - gPadB} stroke="var(--border-strong)" strokeWidth="1" />
          <line x1={gPadL} y1={gPadT} x2={gPadL} y2={GH - gPadB} stroke="var(--border-strong)" strokeWidth="1" />
          <line x1={gPadL} y1={GY(0)} x2={GW - gPadR} y2={GY(0)} stroke="var(--border)" strokeDasharray="3 3" />
          <text x={gPadL - 4} y={GY(0) + 3} fontSize="7" textAnchor="end" fill="var(--text-muted)">0</text>
          <line x1={GX(t0)} y1={gPadT} x2={GX(t0)} y2={GH - gPadB} stroke="var(--text-subtle)" strokeDasharray="2 3" />
          <line x1={GX(t1)} y1={gPadT} x2={GX(t1)} y2={GH - gPadB} stroke="var(--text-subtle)" strokeDasharray="2 3" />
          <text x={GX((t0 + t1) / 2)} y={GH - 6} fontSize="7" textAnchor="middle" fill="var(--warning)">contact</text>
          {balls.map((b) => {
            const d = Array.from({ length: N + 1 }, (_, i) => {
              const s = (i / N) * tMax
              return `${i ? 'L' : 'M'} ${GX(s)} ${GY(ec.collisionMomentum(b.m, b.before, b.after, t0, t1, s))}`
            }).join(' ')
            return (
              <g key={b.label}>
                <path d={d} fill="none" stroke={b.color} strokeWidth="2" />
                <circle cx={GX(t)} cy={GY(ec.collisionMomentum(b.m, b.before, b.after, t0, t1, t))} r="3.5" fill={b.color} />
              </g>
            )
          })}
          <text x="2" y={gPadT} fontSize="7" fill="var(--text-muted)">p (kg m s⁻¹)</text>
          <text x={GW - gPadR} y={GH - 4} fontSize="7" textAnchor="end" fill="var(--text-muted)">t (s)</text>
        </svg>
      </figure>
      <Slider label="Time" value={Math.round(t * 1e4) / 1e4} min={0} max={tMax} step={tMax / 300} unit="s" onChange={(v) => { setPlaying(false); setT(v) }} />
      {!reduced && <button onClick={() => { if (t >= tMax) setT(0); setPlaying((p) => !p) }} aria-pressed={playing} className={ctl} style={playing ? btn2 : btn1}>{playing ? '⏸ PAUSE' : '▶ PLAY'}</button>}
      <div className="grid gap-1 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        {balls.map((b) => (
          <div key={b.label}>
            <strong style={{ color: b.color }}>{b.label}</strong> ({b.m} {massUnit}): v = {f2(ec.collisionVelocity(b.m, b.before, b.after, t0, t1, t))} m s⁻¹, p = {f2(b.m * ec.collisionVelocity(b.m, b.before, b.after, t0, t1, t))} kg m s⁻¹
          </div>
        ))}
        {inContact && <div className="mt-1 text-xs font-bold" style={{ color: 'var(--warning)' }}>In contact — a constant force acts on each ball</div>}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- Problem A: X hits stationary Y, X stops
export function BallsCollisionAnim() {
  const { mX, mY, uX, uY, t0, t1 } = ec.BALLS
  const { vXf, vYf } = ec.ballsSolve()
  // X starts wherever it needs to, to arrive exactly at Y's (stationary) position when contact begins.
  const balls: Ball[] = [
    { label: 'X', color: 'var(--accent)', m: mX, before: uX, after: vXf, x0: -uX * t0, r: 12 },
    { label: 'Y', color: 'var(--warning)', m: mY, before: uY, after: vYf, x0: 0, r: 15 },
  ]
  return <CollisionAnim balls={balls} t0={t0} t1={t1} tMax={0.15} title="Ball X moving at 16 m/s collides with stationary ball Y; X stops, Y moves off." />
}

// ---------------------------------------------------------------- Problem B: X and Y collide and stick
export function StickCollisionAnim() {
  const { mX, v, t0, t1, tMax } = ec.STICK
  const { mY, uX, uY } = ec.stickSolve()
  const balls: Ball[] = [
    { label: 'X', color: 'var(--accent)', m: mX, before: uX, after: v, x0: -uX * t0, r: 10 },
    { label: 'Y', color: 'var(--warning)', m: mY, before: uY, after: v, x0: 0, r: 17 },
  ]
  return <CollisionAnim balls={balls} t0={t0} t1={t1} tMax={tMax} title="Block X at speed 5v collides with stationary block Y; they stick together and move off at v." />
}
