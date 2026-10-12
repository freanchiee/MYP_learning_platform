'use client'
import { useEffect, useRef, useState } from 'react'
import { G_PARCEL, PARCEL_QUESTION, fallTime, landingAngle, landingRange, landingSpeed, landingVy, parcelAt } from '@/lib/learn/projectile-model'

// Exam-style problem, recreated as our own animation: a parcel released from an aircraft flying level.
// The scene is drawn to scale (2 px per metre on BOTH axes), so the path you see is the true parabola.
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const f = (x: number, d = 1) => x.toFixed(d).replace('-', '−')

function Slider({ label, value, min, max, step, unit, onChange }: { label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void }) {
  return (
    <label className="block text-sm">
      <span className="flex justify-between font-bold" style={{ color: 'var(--text)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--accent)' }}>{value} {unit}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full" style={{ accentColor: 'var(--accent)' }} />
    </label>
  )
}

function Arrow({ x1, y1, x2, y2, color, w = 3 }: { x1: number; y1: number; x2: number; y2: number; color: string; w?: number }) {
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

function useReducedMotion() {
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

const Cell = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="rounded-[var(--radius-control)] px-3 py-2 text-center" style={panel}>
    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>{label}</div>
    <div className="text-base font-extrabold" style={{ color: accent ? 'var(--accent)' : 'var(--text)', fontFamily: 'var(--font-mono)' }}>{value}</div>
  </div>
)

export function ParcelDropAnim() {
  const reduced = useReducedMotion()
  const [u, setU] = useState(PARCEL_QUESTION.u)
  const [h, setH] = useState(PARCEL_QUESTION.h)
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [strobe, setStrobe] = useState(true)
  const [plane, setPlane] = useState(true)
  const raf = useRef(0)

  const T = fallTime(h)
  useEffect(() => { setT((x) => Math.min(x, T)) }, [T])
  useEffect(() => {
    if (!playing || reduced) return
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setT((x) => {
        const n = x + dt * 0.5 // half real speed so the eye can follow it
        if (n >= T) { setPlaying(false); return T }
        return n
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [playing, reduced, T])

  const S = 2 // px per metre, both axes
  const gx = 40, gy = 262 // release point x, ground y
  const px = (x: number) => gx + x * S
  const py = (y: number) => gy - y * S
  const p = parcelAt(u, h, t)
  const path = Array.from({ length: 41 }, (_, i) => { const q = parcelAt(u, h, (i / 40) * T); return `${px(q.x)},${py(q.y)}` }).join(' ')
  const nDone = Math.max(1, Math.ceil((t / T) * 40))
  const done = Array.from({ length: nDone + 1 }, (_, i) => { const q = parcelAt(u, h, (i / nDone) * t); return `${px(q.x)},${py(q.y)}` }).join(' ')
  const ticks: number[] = []
  for (let s = 0.5; s < T - 0.01; s += 0.5) ticks.push(s)
  const planeX = px(u * t), planeY = py(h)
  const VS = 1.1 // px per m/s for the velocity arrows
  const landed = t >= T - 1e-9

  return (
    <div className="grid gap-3">
      <svg viewBox="0 0 700 300" className="w-full" style={fig} role="img" aria-label={`A parcel released from an aircraft flying at ${u} metres per second, ${h} metres above the ground. After ${f(p.t, 2)} seconds it is ${f(p.y, 0)} metres above the ground and ${f(p.x, 0)} metres ahead of the release point, falling at ${f(p.vy)} metres per second.`}>
        <line x1={0} y1={gy} x2={700} y2={gy} stroke="var(--text-subtle)" strokeWidth={2} />
        {Array.from({ length: 34 }, (_, i) => <line key={i} x1={i * 22} y1={gy} x2={i * 22 - 8} y2={gy + 8} stroke="var(--text-subtle)" opacity={0.5} />)}
        <text x={694} y={294} textAnchor="end" fontSize="11" fill="var(--text-muted)">drawn to scale: 2 px = 1 m</text>
        {/* the whole path, faint; the part travelled, solid */}
        <polyline points={path} fill="none" stroke="var(--text-subtle)" strokeDasharray="4 5" strokeWidth={2} />
        <polyline points={done} fill="none" stroke="var(--accent)" strokeWidth={3} />
        {strobe && ticks.map((s) => {
          const q = parcelAt(u, h, s)
          return <g key={s}><circle cx={px(q.x)} cy={py(q.y)} r={4} fill={s <= t ? 'var(--accent)' : 'none'} stroke="var(--accent)" /><text x={px(q.x) + 7} y={py(q.y) - 6} fontSize="10" fill="var(--text-muted)">{f(s, 1)} s</text></g>
        })}
        {/* height marker */}
        <line x1={gx - 18} y1={py(0)} x2={gx - 18} y2={py(h)} stroke="var(--text-muted)" />
        <line x1={gx - 22} y1={py(h)} x2={gx - 14} y2={py(h)} stroke="var(--text-muted)" />
        <text x={gx - 24} y={py(h / 2) + 4} textAnchor="end" fontSize="12" fontWeight="800" fill="var(--text)">{h} m</text>
        {/* aircraft (it keeps flying level at the same speed, so it stays directly above the parcel) */}
        {plane && (
          <g opacity={0.9}>
            <line x1={planeX} y1={planeY + 8} x2={px(p.x)} y2={py(p.y) - 7} stroke="var(--text-subtle)" strokeDasharray="2 4" />
            <g transform={`translate(${planeX} ${planeY})`}>
              <ellipse cx={0} cy={0} rx={22} ry={5.5} fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.5} />
              <polygon points="-18,-2 -26,-12 -20,-12 -8,-2" fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.2} />
              <polygon points="-3,0 8,12 14,12 8,0" fill="var(--surface-elevated)" stroke="var(--text)" strokeWidth={1.2} />
              <circle cx={14} cy={-1} r={1.6} fill="var(--accent)" />
            </g>
            <text x={planeX} y={planeY - 18} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text)">{u} m s⁻¹</text>
          </g>
        )}
        {/* the parcel with its velocity components */}
        <Arrow x1={px(p.x)} y1={py(p.y)} x2={px(p.x) + p.vx * VS} y2={py(p.y)} color="var(--success)" w={3} />
        <Arrow x1={px(p.x)} y1={py(p.y)} x2={px(p.x)} y2={py(p.y) + p.vy * VS} color="var(--danger)" w={3} />
        <Arrow x1={px(p.x)} y1={py(p.y)} x2={px(p.x) + p.vx * VS} y2={py(p.y) + p.vy * VS} color="var(--info, var(--accent))" w={3} />
        <rect x={px(p.x) - 6} y={py(p.y) - 6} width={12} height={12} rx={2} fill="var(--text)" />
        {landed && <text x={px(p.x)} y={gy - 8} textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--text)">lands {f(landingRange(u, h), 0)} m ahead</text>}
        <g fontSize="11" fontWeight="800">
          <text x={40} y={294} fill="var(--success)">→ horizontal v_x (constant)</text>
          <text x={215} y={294} fill="var(--danger)">↓ vertical v_y (grows)</text>
          <text x={360} y={294} fill="var(--info, var(--accent))">↘ resultant speed</text>
        </g>
      </svg>

      <div className="flex flex-wrap items-center gap-2">
        <button className={ctl} style={btn1} onClick={() => { if (landed) setT(0); setPlaying((x) => !x) }}>{playing ? 'Pause' : landed ? 'Replay' : t === 0 ? 'Release' : 'Play'}</button>
        <button className={ctl} style={btn2} onClick={() => { setPlaying(false); setT(0) }}>Reset</button>
        <button className={ctl} style={strobe ? btn1 : btn2} aria-pressed={strobe} onClick={() => setStrobe((x) => !x)}>0.5 s dots</button>
        <button className={ctl} style={plane ? btn1 : btn2} aria-pressed={plane} onClick={() => setPlane((x) => !x)}>Show aircraft</button>
        <input type="range" min={0} max={T} step={0.01} value={t} onChange={(e) => { setPlaying(false); setT(Number(e.target.value)) }} aria-label="Time since release" className="min-w-[140px] flex-1" style={{ accentColor: 'var(--accent)' }} />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Cell label="Time t" value={`${f(p.t, 2)} s`} accent />
        <Cell label="Height above ground" value={`${f(p.y, 1)} m`} />
        <Cell label="Distance ahead x" value={`${f(p.x, 1)} m`} />
        <Cell label="Horizontal v_x" value={`${f(p.vx, 1)} m s⁻¹`} />
        <Cell label="Vertical v_y = g t" value={`${f(p.vy, 1)} m s⁻¹`} />
        <Cell label="Speed √(v_x² + v_y²)" value={`${f(p.speed, 1)} m s⁻¹`} />
        <Cell label="Angle below horizontal" value={`${f(p.angle, 1)}°`} />
        <Cell label="Falls through" value={`${f(h - p.y, 1)} m`} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Aircraft speed" value={u} min={10} max={60} step={1} unit="m s⁻¹" onChange={setU} />
        <Slider label="Height of aircraft" value={h} min={20} max={100} step={1} unit="m" onChange={setH} />
      </div>

      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
        <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>The solution, with these numbers (g = {G_PARCEL} m s⁻²)</div>
        <ol className="mt-2 grid gap-1" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>
          <li>t = √(2h / g) = √(2 × {h} / {G_PARCEL}) = <b style={{ color: 'var(--accent)' }}>{f(T, 2)} s</b></li>
          <li>v_y = g t = {G_PARCEL} × {f(T, 3)} = <b style={{ color: 'var(--accent)' }}>{f(landingVy(h), 1)} m s⁻¹</b></li>
          <li>speed = √({u}² + {f(landingVy(h), 1)}²) = <b style={{ color: 'var(--accent)' }}>{f(landingSpeed(u, h), 1)} m s⁻¹</b>, at {f(landingAngle(u, h), 1)}° below the horizontal</li>
        </ol>
      </div>
    </div>
  )
}
