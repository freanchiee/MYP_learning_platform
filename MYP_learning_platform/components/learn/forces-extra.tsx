'use client'
import { useState } from 'react'
import { fallVelocity, netFallForce, terminalVelocity, timeConstant } from '@/lib/learn/forces-model'

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
const f2 = (x: number, d = 2) => (Math.abs(x) < 1e-9 ? '0' : x.toFixed(d).replace(/\.?0+$/, ''))

// ---------------------------------------------------------------- the four fundamental forces, quantitatively
const FORCES = [
  { n: 'Strong nuclear', color: '#d1495b', range: '≈10⁻¹⁵ m', strength: 1, strengthLabel: '1', mediator: 'gluons (act between quarks; modelled between whole nucleons by pion exchange)', mass: 0, spin: 1, role: 'holds protons and neutrons together inside the nucleus — “acts as a glue”' },
  { n: 'Electromagnetic', color: '#2b9348', range: 'infinite', strength: 1 / 137, strengthLabel: '1/137', mediator: 'photon', mass: 0, spin: 1, role: 'acts between charges, at rest (electric) or moving (magnetic)' },
  { n: 'Weak nuclear', color: '#f4a259', range: '≈10⁻¹⁸ m', strength: 1e-6, strengthLabel: '10⁻⁶', mediator: 'W⁺, W⁻, Z⁰ (the “intermediate vector bosons”)', mass: 80, spin: 1, role: 'causes radioactive decay (for example beta decay)' },
  { n: 'Gravitational', color: '#3a6ea5', range: 'infinite', strength: 6e-39, strengthLabel: '6×10⁻³⁹', mediator: 'graviton — proposed, not yet observed', mass: 0, spin: 2, role: 'acts between any two masses, at rest or moving; by far the weakest, but always attractive and infinite-range, so it dominates at large scales' },
]
const logScale = (s: number) => {
  // map strong=1 .. gravity=6e-39 onto a 0-100 bar so all four are visible (log scale, clamped)
  const lo = Math.log10(6e-39), hi = 0
  const v = (Math.log10(s) - lo) / (hi - lo)
  return Math.max(3, Math.min(100, v * 100))
}
export function FundamentalForcesTable() {
  const [sel, setSel] = useState(0)
  const f = FORCES[sel]
  return (
    <div className="grid gap-4">
      <div role="tablist" aria-label="The four fundamental forces" className="flex flex-wrap gap-2">
        {FORCES.map((x, i) => (
          <button key={x.n} role="tab" aria-selected={sel === i} onClick={() => setSel(i)} className={ctl} style={sel === i ? { background: x.color, color: '#fff' } : btn2}>{x.n.toUpperCase()}</button>
        ))}
      </div>
      <div className="rounded-[var(--radius-card)] p-4" style={{ ...panel, borderLeft: `5px solid ${f.color}` }}>
        <div className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{f.n} force</div>
        <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{f.role}</p>
        <dl className="mt-3 grid gap-2 sm:grid-cols-2 text-sm">
          <div><dt className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>RANGE</dt><dd style={{ color: 'var(--text)' }}>{f.range}</dd></div>
          <div><dt className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>MEDIATING PARTICLE</dt><dd style={{ color: 'var(--text)' }}>{f.mediator}</dd></div>
          <div><dt className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>MASS OF MEDIATOR</dt><dd style={{ color: 'var(--text)' }}>{f.mass === 0 ? '0' : `> ${f.mass} GeV/c²`}</dd></div>
          <div><dt className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>SPIN OF MEDIATOR</dt><dd style={{ color: 'var(--text)' }}>{f.spin}</dd></div>
        </dl>
      </div>
      <figure className="m-0 p-3" style={fig}>
        <div className="mb-1 text-xs font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>RELATIVE STRENGTH (compared with the strong force = 1, log scale)</div>
        <div className="grid gap-2" role="img" aria-label={`Relative strengths, strong force taken as 1: strong 1, electromagnetic 1/137, weak 10 to the -6, gravity 6 times 10 to the -39. Note the scale is logarithmic; gravity's bar would be invisible on a straight (linear) scale.`}>
          {FORCES.map((x) => (
            <div key={x.n} className="flex items-center gap-2">
              <span className="w-32 shrink-0 text-xs font-bold" style={{ color: 'var(--text)' }}>{x.n.split(' ')[0]}</span>
              <span className="h-5 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--surface-2)' }}>
                <span className="block h-full rounded-full" style={{ width: `${logScale(x.strength)}%`, background: x.color }} />
              </span>
              <span className="w-16 shrink-0 text-right text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{x.strengthLabel}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>Gravity is by far the weakest force between two particles — yet it is what holds planets in orbit and drops you to the floor. Range and always-attractive add up over billions of masses.</p>
      </figure>
    </div>
  )
}

// ---------------------------------------------------------------- falling through a resisting fluid: balanced vs unbalanced
const FLUIDS = [
  { key: 'air', label: 'Air', k: 0.05, color: 'var(--accent)' },
  { key: 'water', label: 'Water', k: 0.5, color: '#3a6ea5' },
  { key: 'honey', label: 'Honey', k: 2.5, color: '#c97a24' },
] as const
const M = 0.05
const TMAX = 3
export function TerminalVelocityLab() {
  const [t, setT] = useState(1.2)
  const [sel, setSel] = useState<(typeof FLUIDS)[number]['key']>('air')
  const vMaxAll = Math.max(...FLUIDS.map((f) => terminalVelocity(M, f.k))) * 1.08
  const W = 560, H = 200, padL = 46, padB = 26
  const X = (tt: number) => padL + (tt / TMAX) * (W - padL - 10)
  const Y = (v: number) => H - padB - (v / vMaxAll) * (H - padB - 10)
  const cur = FLUIDS.find((f) => f.key === sel)!
  const v = fallVelocity(M, cur.k, t)
  const net = netFallForce(M, cur.k, t)
  const vt = terminalVelocity(M, cur.k)
  const tau = timeConstant(M, cur.k)
  const balanced = Math.abs(net) < 0.02 * (M * 9.81)
  const path = (k: number) => {
    const pts: string[] = []
    for (let tt = 0; tt <= TMAX; tt += TMAX / 60) pts.push(`${X(tt)},${Y(fallVelocity(M, k, tt))}`)
    return pts.join(' ')
  }
  return (
    <div className="grid gap-4">
      <div role="tablist" aria-label="Choose a fluid" className="flex flex-wrap gap-2">
        {FLUIDS.map((f) => (
          <button key={f.key} role="tab" aria-selected={sel === f.key} onClick={() => setSel(f.key)} className={ctl} style={sel === f.key ? { background: f.color, color: '#fff' } : btn2}>{f.label.toUpperCase()}</button>
        ))}
      </div>
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Velocity against time for a ball falling through ${cur.label.toLowerCase()}. At ${f2(t)} seconds its speed is ${f2(v)} metres per second, approaching a terminal velocity of ${f2(vt)} metres per second.`}>
          <line x1={padL} y1={10} x2={padL} y2={H - padB} stroke="var(--border-strong)" strokeWidth="1.5" />
          <line x1={padL} y1={H - padB} x2={W - 6} y2={H - padB} stroke="var(--border-strong)" strokeWidth="1.5" />
          <text x="4" y="20" fontSize="10.5" fontWeight="800" fill="var(--text-subtle)">v (m/s)</text>
          <text x={W - 30} y={H - 8} fontSize="10.5" fontWeight="800" fill="var(--text-subtle)">t (s)</text>
          {FLUIDS.map((f) => (
            <polyline key={f.key} points={path(f.k)} fill="none" stroke={f.color} strokeWidth={f.key === sel ? 3.5 : 1.5} opacity={f.key === sel ? 1 : 0.35} />
          ))}
          <line x1={X(t)} y1="10" x2={X(t)} y2={H - padB} stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={X(t)} cy={Y(v)} r="5.5" fill={cur.color} stroke="var(--text)" strokeWidth="1.5" />
          <line x1={padL} y1={Y(vt)} x2={W - 6} y2={Y(vt)} stroke={cur.color} strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
          <text x={W - 8} y={Y(vt) - 4} fontSize="10" textAnchor="end" fontWeight="800" fill={cur.color}>terminal v = {f2(vt)}</text>
        </svg>
      </figure>
      <label className="block text-sm">
        <span className="flex justify-between font-bold" style={{ color: 'var(--text)' }}><span>Time since release</span><span style={{ color: 'var(--accent)' }}>{f2(t)} s</span></span>
        <input type="range" min={0} max={TMAX} step={0.02} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full" style={{ accentColor: cur.color }} />
      </label>
      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        <div style={{ color: 'var(--text)' }}>speed now: <strong>{f2(v)} m s⁻¹</strong> · net force: <strong>{f2(net, 3)} N</strong> · time constant τ = m/k = <strong>{f2(tau, 2)} s</strong></div>
        <div className="mt-1 font-black" style={{ color: balanced ? 'var(--success)' : 'var(--warning)' }}>
          {balanced ? '✓ balanced: weight ≈ resistive force, so the speed has stopped changing' : '✗ unbalanced: weight is still bigger than the resistive force, so the ball keeps speeding up'}
        </div>
        <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>{cur.label} resists motion more than the fluids with a smaller k, so it gives a LOWER terminal velocity — but reaches that (lower) speed SOONER.</div>
      </div>
    </div>
  )
}
