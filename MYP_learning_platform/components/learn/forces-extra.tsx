'use client'
import { useState } from 'react'
import { dragFromTether, fallVelocity, netFallForce, sphereWeight, terminalVelocity, timeConstant, upthrustFromTether } from '@/lib/learn/forces-model'

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
type N = number | string
function Arrow(props: { x1: N; y1: N; x2: N; y2: N; color: string; w?: number }) {
  const { color, w = 3 } = props
  const x1 = Number(props.x1), y1 = Number(props.y1), x2 = Number(props.x2), y2 = Number(props.y2)
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 2) return null
  const ux = dx / len, uy = dy / len
  const h = Math.min(10, len * 0.5)
  const bx2 = x2 - ux * h, by2 = y2 - uy * h
  return (
    <g stroke={color} fill={color} strokeWidth={w} strokeLinecap="round">
      <line x1={x1} y1={y1} x2={bx2} y2={by2} />
      <polygon points={`${x2},${y2} ${bx2 - uy * h * 0.55},${by2 + ux * h * 0.55} ${bx2 + uy * h * 0.55},${by2 - ux * h * 0.55}`} strokeWidth={1} />
    </g>
  )
}
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

// ---------------------------------------------------------------- a sphere tethered under the surface
const POD_RANGES = { r: [0.12, 0.28], rho: [400, 850], angle: [50, 80], T: [120, 380] } as const
const rnd = (a: number, b: number) => Math.round((a + Math.random() * (b - a)) * 10) / 10
function makePod() {
  const r = Math.round((POD_RANGES.r[0] + Math.random() * (POD_RANGES.r[1] - POD_RANGES.r[0])) * 100) / 100
  const rho = Math.round(POD_RANGES.rho[0] + Math.random() * (POD_RANGES.rho[1] - POD_RANGES.rho[0]))
  const angle = Math.round(POD_RANGES.angle[0] + Math.random() * (POD_RANGES.angle[1] - POD_RANGES.angle[0]))
  const T = rnd(POD_RANGES.T[0], POD_RANGES.T[1])
  return { r, rho, angle, T }
}
export function AnchoredPodLab() {
  const [pod, setPod] = useState(makePod)
  const [ans, setAns] = useState('')
  const [res, setRes] = useState<{ ok: boolean; msg: string } | null>(null)
  const [shown, setShown] = useState(false)
  const W = sphereWeight(pod.r, pod.rho)
  const correct = upthrustFromTether(W, pod.T, pod.angle)
  const drag = dragFromTether(pod.T, pod.angle)
  const next = () => { setPod(makePod()); setAns(''); setRes(null); setShown(false) }
  const check = () => {
    const v = Number(ans)
    if (!Number.isFinite(v) || ans.trim() === '') return setRes({ ok: false, msg: 'Enter a number, in newtons.' })
    if (Math.abs(v - correct) <= 0.01 * correct) { setRes({ ok: true, msg: `Correct. F_B = W + T sin θ = ${f2(W)} + ${f2(pod.T)} × sin ${pod.angle}° = ${f2(correct)} N.` }); setShown(true); return }
    if (Math.abs(v - pod.T * Math.sin((pod.angle * Math.PI) / 180)) <= 0.01 * correct) return setRes({ ok: false, msg: 'You found T sin θ, but forgot to ADD the weight: F_B = W + T sin θ.' })
    if (Math.abs(v - (W + drag)) <= 0.01 * correct) return setRes({ ok: false, msg: 'You used cos θ instead of sin θ. The vertical (upthrust-balancing) component of tension uses sin θ, since θ is measured from the horizontal.' })
    setRes({ ok: false, msg: 'Not quite — check the vertical equilibrium: F_B (up) = W (down) + T sin θ (the downward pull of the cable).' })
  }
  const rad = (pod.angle * Math.PI) / 180
  const cx = 170, cy = 70, L = 90
  const bx = cx - L * Math.cos(rad), by = cy + L * Math.sin(rad)
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 340 190" className="w-full" role="img" aria-label={`A sphere of radius ${pod.r} metres and density ${pod.rho} kilograms per cubic metre, held below the water surface by a cable at ${pod.angle} degrees to the horizontal, with tension ${pod.T} newtons.`}>
          <rect x="0" y="0" width="340" height="20" fill="#bcd7ea" />
          <text x="6" y="14" fontSize="10" fontWeight="800" fill="#3a6ea5">water surface</text>
          <rect x="0" y="20" width="340" height="150" fill="#e8f1f8" />
          <rect x="0" y="170" width="340" height="20" fill="#8a6a45" />
          <text x="6" y="184" fontSize="10" fontWeight="800" fill="#fff">riverbed</text>
          <line x1={bx} y1={by} x2={cx} y2={cy} stroke="#333" strokeWidth="2.5" />
          <circle cx={cx} cy={cy} r="22" fill="var(--accent)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="2.5" />
          <circle cx={bx} cy={by} r="3" fill="#333" />
          <text x={cx - 0.3 * (cx - bx) - 4} y={cy + 0.3 * (by - cy) - 8} fontSize="11" fontWeight="800" fill="#333">θ={pod.angle}°</text>
          <Arrow x1={cx} y1={cy - 22} x2={cx} y2={cy - 62} color="var(--success)" w={3.5} />
          <text x={cx + 6} y={cy - 50} fontSize="11" fontWeight="900" fill="var(--success)">F_B (upthrust)</text>
          <Arrow x1={cx} y1={cy + 22} x2={cx} y2={cy + 52} color="var(--danger)" w={3.5} />
          <text x={cx + 28} y={cy + 40} fontSize="11" fontWeight="900" fill="var(--danger)">W = {f2(W)} N</text>
          <Arrow x1={cx} y1={cy} x2={bx} y2={by} color="var(--warning)" w={3} />
          <text x={bx - 4} y={by - 10} fontSize="11" fontWeight="900" fill="var(--warning)" textAnchor="end">T = {pod.T} N</text>
          <Arrow x1={cx + 22} y1={cy} x2={cx + 58} y2={cy} color="var(--accent-2)" w={3} />
          <text x={cx + 24} y={cy - 6} fontSize="10.5" fontWeight="800" fill="var(--accent-2)">current</text>
        </svg>
      </figure>
      <div className="grid content-start gap-3">
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
          <div style={{ color: 'var(--text)' }}>radius r = {pod.r} m, density ρ = {pod.rho} kg m⁻³ (less than water)</div>
          <div style={{ color: 'var(--text)' }}>weight W = ρVg = <strong>{f2(W)} N</strong> (shown, not asked)</div>
          <div style={{ color: 'var(--text)' }}>cable: T = {pod.T} N at θ = {pod.angle}° to the horizontal</div>
        </div>
        <label className="block text-sm">
          <span className="font-bold" style={{ color: 'var(--text)' }}>Find the upthrust (buoyant force) on the sphere.</span>
          <div className="mt-1 flex items-center gap-2">
            <input value={ans} onChange={(e) => setAns(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && check()} placeholder="upthrust" className={`${ctl} w-32`} style={{ ...btn2, fontFamily: 'var(--font-mono)' }} aria-label="Your answer in newtons" />
            <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>N</span>
          </div>
        </label>
        <div className="flex flex-wrap gap-2">
          <button onClick={check} className={ctl} style={btn1}>CHECK</button>
          <button onClick={next} className={ctl} style={btn2}>NEW PROBLEM</button>
        </div>
        {res && (
          <div role="status" className="rounded-[var(--radius-panel)] px-3 py-2.5 text-sm" style={{ background: res.ok ? 'var(--success-surface)' : 'var(--warning-surface)', color: 'var(--text)', border: `1px solid ${res.ok ? 'var(--success)' : 'var(--warning)'}` }}>
            <strong>{res.ok ? 'Correct. ' : 'Not quite. '}</strong>{res.msg}
          </div>
        )}
        {shown && (
          <div className="rounded-[var(--radius-panel)] p-3 text-xs" style={panel}>
            <div style={{ color: 'var(--text-muted)' }}>Bonus (horizontal equilibrium): the current must be pushing the sphere with a drag force F = T cos θ = {f2(drag)} N — the cable&apos;s horizontal pull balances it.</div>
          </div>
        )}
      </div>
    </div>
  )
}
