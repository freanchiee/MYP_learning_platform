'use client'
import { useMemo, useState } from 'react'
import { collide1D, kineticEnergy, momentumChange, motionUnderForce } from '@/lib/learn/physics-models'

// Widgets for A.2 Force and motion. Theme tokens only; every figure has an aria-label and a text readout.
const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties

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
const f2 = (x: number, d = 2) => (Math.abs(x) < 1e-9 ? '0' : x.toFixed(d).replace(/\.?0+$/, '').replace('-', '−'))
const sgn = (x: number, d = 2) => (x > 1e-9 ? `+${f2(x, d)}` : f2(x, d))

type Num = number | string
function Arrow(props: { x1: Num; y1: Num; x2: Num; y2: Num; color: string; w?: number }) {
  const { color, w = 2.5 } = props
  const x1 = Number(props.x1), y1 = Number(props.y1), x2 = Number(props.x2), y2 = Number(props.y2)
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
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

// ---------------------------------------------------------------- Newton lab (first + second law)
export function NewtonLab({ startF = 2, startM = 2, fixedZero = false }: { startF?: number; startM?: number; fixedZero?: boolean }) {
  const [F, setF] = useState(startF)
  const [m, setM] = useState(startM)
  const v0 = 2
  const ts = [0, 1, 2, 3, 4, 5]
  const pts = ts.map((t) => ({ t, ...motionUnderForce(m, F, v0, t) }))
  const xs = pts.map((p) => p.x)
  const xmin = Math.min(...xs), xmax = Math.max(...xs)
  const sx = 520 / Math.max(xmax - xmin, 4)
  const X = (x: number) => 50 + (x - xmin) * sx
  const vmax = Math.max(...pts.map((p) => Math.abs(p.v)), 0.001)
  const kv = 60 / vmax
  // p-t graph
  const pmin = Math.min(0, ...pts.map((p) => p.p)), pmax = Math.max(0.5, ...pts.map((p) => p.p))
  const gx = (t: number) => 46 + t * 46
  const gy = (p: number) => 150 - ((p - pmin) / (pmax - pmin || 1)) * 120
  const a = F / m
  return (
    <div className="grid gap-4">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 620 170" className="w-full" role="img" aria-label={`Strobe diagram of a ${m} kilogram body starting at ${v0} metres per second with a net force of ${F} newtons. ${F === 0 ? 'The dots are equally spaced: the velocity does not change.' : `The spacing changes because the velocity changes by ${f2(a)} metres per second every second.`}`}>
          <line x1="20" y1="120" x2="600" y2="120" stroke="var(--border-strong)" strokeWidth="2" />
          {pts.map((p) => (
            <g key={p.t}>
              <circle cx={X(p.x)} cy="104" r="9" fill="var(--accent)" fillOpacity={0.35 + 0.13 * p.t} stroke="var(--accent)" />
              <text x={X(p.x)} y="146" fontSize="11" textAnchor="middle" fill="var(--text-muted)">t={p.t}s</text>
              {Math.abs(p.v) > 0.001 && <Arrow x1={X(p.x)} y1="70" x2={X(p.x) + Math.sign(p.v) * Math.max(6, Math.abs(p.v) * kv)} y2="70" color="var(--success)" w={2.5} />}
              <text x={X(p.x)} y="58" fontSize="11" fontWeight="700" textAnchor="middle" fill="var(--text)">{f2(p.v, 1)}</text>
            </g>
          ))}
          <text x="24" y="30" fontSize="12" fontWeight="800" fill="var(--text)">Green arrow = velocity v (m s⁻¹), one snapshot per second</text>
          <text x="24" y="164" fontSize="11" fill="var(--text-subtle)">{F === 0 ? 'equal spacing = constant velocity' : 'changing gaps = changing velocity (there is a net force)'}</text>
        </svg>
      </figure>
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="m-0 p-2" style={fig}>
          <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label={`Momentum against time graph. Momentum changes from ${f2(m * v0)} to ${f2(pts[5].p)} kilogram metres per second over 5 seconds. The gradient is ${F} newtons.`}>
            <line x1="46" y1="20" x2="46" y2="160" stroke="var(--text)" strokeWidth="1.5" />
            <line x1="46" y1={gy(0)} x2="300" y2={gy(0)} stroke="var(--text)" strokeWidth="1.5" />
            <polyline points={pts.map((p) => `${gx(p.t)},${gy(p.p)}`).join(' ')} fill="none" stroke="var(--accent)" strokeWidth="3" />
            {pts.map((p) => <circle key={p.t} cx={gx(p.t)} cy={gy(p.p)} r="3.5" fill="var(--accent)" />)}
            <text x="52" y="16" fontSize="11" fontWeight="800" fill="var(--text)">p (kg m s⁻¹)</text>
            <text x="270" y={gy(0) + 14} fontSize="11" fill="var(--text)">t (s)</text>
            <text x="150" y="176" fontSize="11" fontWeight="800" fill="var(--accent)">gradient = Δp / t = {f2(F)} N</text>
          </svg>
        </figure>
        <div>
          {!fixedZero && <Slider label="Net external force F" value={F} min={-4} max={4} step={0.5} unit="N" onChange={setF} />}
          {fixedZero && (
            <div className="flex items-center justify-between gap-2 text-sm" style={{ color: 'var(--text)' }}>
              <span className="font-bold">Net external force F</span>
              <span className="flex gap-2">
                <button aria-pressed={F === 0} onClick={() => setF(0)} className={ctl} style={F === 0 ? btn1 : btn2}>F = 0</button>
                <button aria-pressed={F !== 0} onClick={() => setF(2)} className={ctl} style={F !== 0 ? btn1 : btn2}>F = 2 N</button>
              </span>
            </div>
          )}
          <div className="mt-3"><Slider label="Mass m" value={m} min={0.5} max={5} step={0.5} unit="kg" onChange={setM} /></div>
          <div className="mt-3 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
            <div>Acceleration a = F / m = <strong>{f2(a)} m s⁻²</strong></div>
            <div>Momentum changes by <strong>{f2(F)} kg m s⁻¹</strong> every second</div>
            <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
              {F === 0 ? 'F = 0: velocity stays 2 m s⁻¹, so the dots are evenly spaced and the p–t graph is flat.' : 'Change the mass: a changes, but the p–t gradient is still F. That is Δp / t = F.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- momentum change cases (number line)
const CASES = [
  { n: 1, vf: 5, text: 'The ball passes through a thin spider web and keeps going at 5 m s⁻¹.' },
  { n: 2, vf: 3, text: 'The ball goes through a sheet of paper and comes out slower, at 3 m s⁻¹.' },
  { n: 3, vf: 0, text: 'The ball is stopped: it ends at 0 m s⁻¹.' },
  { n: 4, vf: -2, text: 'The ball bounces back off a wall at 2 m s⁻¹ in the opposite direction.' },
]
function NumberLine({ min, max, step, label, unit, i, f, fmt }: { min: number; max: number; step: number; label: string; unit: string; i: number; f: number; fmt: (x: number) => string }) {
  const W = 600, x0 = 20
  const X = (v: number) => x0 + ((v - min) / (max - min)) * W
  const ticks: number[] = []
  for (let v = min; v <= max + 1e-9; v += step) ticks.push(Math.round(v * 1000) / 1000)
  const d = f - i
  return (
    <svg viewBox="0 0 640 118" className="w-full" role="img" aria-label={`${label} number line. Initial ${fmt(i)} ${unit}, final ${fmt(f)} ${unit}, change ${sgn(d)} ${unit}.`}>
      <line x1={x0} y1="62" x2={x0 + W} y2="62" stroke="var(--text)" strokeWidth="2" />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={X(t)} y1="56" x2={X(t)} y2="68" stroke="var(--text)" strokeWidth={t === 0 ? 3 : 1.5} />
          <text x={X(t)} y="86" fontSize="11" textAnchor="middle" fill="var(--text-muted)" fontWeight={t === 0 ? 800 : 500}>{fmt(t)}</text>
        </g>
      ))}
      <text x={x0} y="108" fontSize="11" fontWeight="800" fill="var(--text-subtle)">{label} ({unit})</text>
      {Math.abs(d) > 1e-9 && <Arrow x1={X(i)} y1="30" x2={X(f)} y2="30" color="var(--warning)" w={3} />}
      <circle cx={X(i)} cy="62" r="7" fill="var(--accent)" />
      <text x={X(i)} y="48" fontSize="12" fontWeight="900" textAnchor="middle" fill="var(--accent)">i</text>
      <circle cx={X(f)} cy="62" r="7" fill="var(--success)" />
      <text x={X(f)} y="48" fontSize="12" fontWeight="900" textAnchor="middle" fill="var(--success)" dy={Math.abs(X(f) - X(i)) < 16 ? 12 : 0}>f</text>
      <text x={(X(i) + X(f)) / 2} y="20" fontSize="12" fontWeight="900" textAnchor="middle" fill="var(--warning)">{Math.abs(d) > 1e-9 ? `Δ = ${sgn(d)}` : 'Δ = 0'}</text>
    </svg>
  )
}
export function MomentumCases() {
  const [sel, setSel] = useState<number>(4)
  const [custom, setCustom] = useState(false)
  const [mass, setMass] = useState(0.2)
  const [vi, setVi] = useState(5)
  const [vfC, setVfC] = useState(-2)
  const c = CASES.find((x) => x.n === sel)!
  const vI = custom ? vi : 5
  const vF = custom ? vfC : c.vf
  const M = custom ? mass : 0.2
  const dv = vF - vI
  const dp = momentumChange(M, vI, vF)
  return (
    <div className="grid gap-4">
      <div role="tablist" aria-label="Momentum change cases" className="flex flex-wrap gap-2">
        {CASES.map((k) => (
          <button key={k.n} role="tab" aria-selected={!custom && sel === k.n} onClick={() => { setCustom(false); setSel(k.n) }} className={ctl} style={!custom && sel === k.n ? btn1 : btn2}>CASE {k.n}{k.n === 4 ? ' ★' : ''}</button>
        ))}
        <button role="tab" aria-selected={custom} onClick={() => setCustom(true)} className={ctl} style={custom ? btn1 : btn2}>YOUR OWN</button>
      </div>
      {!custom && <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{c.text} Mass 0.2 kg, starting at +5 m s⁻¹.</p>}
      <figure className="m-0 p-3" style={fig}>
        <NumberLine min={-6} max={6} step={1} label="velocity v" unit="m s⁻¹" i={vI} f={vF} fmt={(x) => f2(x, 0)} />
        <NumberLine min={-1.5} max={1.5} step={0.5} label="momentum p = mv" unit="kg m s⁻¹" i={M * vI} f={M * vF} fmt={(x) => f2(x, 1)} />
      </figure>
      {custom && (
        <div className="grid gap-3 md:grid-cols-3">
          <Slider label="Mass" value={mass} min={0.1} max={1} step={0.1} unit="kg" onChange={setMass} />
          <Slider label="Initial v" value={vi} min={-6} max={6} step={1} unit="m s⁻¹" onChange={setVi} />
          <Slider label="Final v" value={vfC} min={-6} max={6} step={1} unit="m s⁻¹" onChange={setVfC} />
        </div>
      )}
      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        <div style={{ color: 'var(--text)' }}>Δv = v<sub>f</sub> − v<sub>i</sub> = ({f2(vF, 1)}) − ({f2(vI, 1)}) = <strong>{sgn(dv, 1)} m s⁻¹</strong></div>
        <div style={{ color: 'var(--text)' }}>Δp = mΔv = {f2(M, 1)} × ({sgn(dv, 1)}) = <strong>{sgn(dp, 2)} kg m s⁻¹</strong></div>
        {vF * vI < 0 && (
          <div className="mt-2 rounded-[var(--radius-control)] px-3 py-2 font-bold" style={{ background: 'var(--warning-surface)', color: 'var(--text)', border: '1px solid var(--warning)' }}>
            The direction reversed, so the number line crosses zero. The change is the whole distance from i to f ({f2(Math.abs(dv), 1)} m s⁻¹), not just the difference of the two speeds ({f2(Math.abs(Math.abs(vI) - Math.abs(vF)), 1)}).
          </div>
        )}
        {(vF === vI) && <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Same velocity before and after: no change in momentum, so no net force acted.</div>}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- collision lab
export function CollisionLab() {
  const [m1, setM1] = useState(2)
  const [v1, setV1] = useState(4)
  const [m2, setM2] = useState(2)
  const [v2, setV2] = useState(0)
  const [elastic, setElastic] = useState(true)
  const out = useMemo(() => collide1D(m1, v1, m2, v2, elastic ? 1 : 0), [m1, v1, m2, v2, elastic])
  const pB = m1 * v1 + m2 * v2, pA = m1 * out.v1 + m2 * out.v2
  const kB = kineticEnergy(m1, v1) + kineticEnergy(m2, v2), kA = kineticEnergy(m1, out.v1) + kineticEnergy(m2, out.v2)
  const lost = kB - kA
  const Row = ({ y, label, a, b }: { y: number; label: string; a: number; b: number }) => {
    const r1 = 12 + m1 * 4, r2 = 12 + m2 * 4
    const vmaxAbs = Math.max(Math.abs(v1), Math.abs(v2), Math.abs(out.v1), Math.abs(out.v2), 1)
    const k = 38 / vmaxAbs
    return (
      <g>
        <text x="8" y={y - 30} fontSize="12" fontWeight="800" fill="var(--text-subtle)">{label}</text>
        <rect x="150" y={y - r1} width={r1 * 1.6} height={r1} rx="4" fill="var(--accent)" fillOpacity="0.35" stroke="var(--accent)" strokeWidth="2" />
        <text x={150 + r1 * 0.8} y={y - r1 / 2 + 4} fontSize="11" fontWeight="800" textAnchor="middle" fill="var(--text)">{m1} kg</text>
        <rect x="380" y={y - r2} width={r2 * 1.6} height={r2} rx="4" fill="var(--success)" fillOpacity="0.35" stroke="var(--success)" strokeWidth="2" />
        <text x={380 + r2 * 0.8} y={y - r2 / 2 + 4} fontSize="11" fontWeight="800" textAnchor="middle" fill="var(--text)">{m2} kg</text>
        {Math.abs(a) > 0.001 && <Arrow x1={150 + r1 * 0.8} y1={y - r1 - 12} x2={150 + r1 * 0.8 + a * k} y2={y - r1 - 12} color="var(--accent)" />}
        {Math.abs(b) > 0.001 && <Arrow x1={380 + r2 * 0.8} y1={y - r2 - 12} x2={380 + r2 * 0.8 + b * k} y2={y - r2 - 12} color="var(--success)" />}
        <text x="150" y={y + 16} fontSize="11" fill="var(--text-muted)">v = {f2(a)} m s⁻¹</text>
        <text x="380" y={y + 16} fontSize="11" fill="var(--text-muted)">v = {f2(b)} m s⁻¹</text>
        <line x1="0" y1={y} x2="600" y2={y} stroke="var(--border-strong)" strokeWidth="1.5" />
      </g>
    )
  }
  const eq = (a: number, b: number) => Math.abs(a - b) < 1e-9
  return (
    <div className="grid gap-4">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 600 260" className="w-full" role="img" aria-label={`Collision of ${m1} kilogram and ${m2} kilogram bodies. Before: ${f2(v1)} and ${f2(v2)} metres per second. After: ${f2(out.v1)} and ${f2(out.v2)} metres per second. ${elastic ? 'Elastic' : 'Perfectly inelastic'}.`}>
          <Row y={95} label="BEFORE" a={v1} b={v2} />
          <Row y={225} label={elastic ? 'AFTER (elastic)' : 'AFTER (stick together)'} a={out.v1} b={out.v2} />
        </svg>
      </figure>
      <div className="grid gap-3 md:grid-cols-2">
        <Slider label="Mass 1" value={m1} min={1} max={5} step={1} unit="kg" onChange={setM1} />
        <Slider label="Velocity 1" value={v1} min={-5} max={5} step={1} unit="m s⁻¹" onChange={setV1} />
        <Slider label="Mass 2" value={m2} min={1} max={5} step={1} unit="kg" onChange={setM2} />
        <Slider label="Velocity 2" value={v2} min={-5} max={5} step={1} unit="m s⁻¹" onChange={setV2} />
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Type of collision">
        <button aria-pressed={elastic} onClick={() => setElastic(true)} className={ctl} style={elastic ? btn1 : btn2}>ELASTIC (bounce apart)</button>
        <button aria-pressed={!elastic} onClick={() => setElastic(false)} className={ctl} style={!elastic ? btn1 : btn2}>INELASTIC (stick together)</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: 'var(--success)' }}>
          <div className="text-[11px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>TOTAL MOMENTUM</div>
          <div style={{ color: 'var(--text)' }}>before {f2(pB)} → after <strong>{f2(pA)}</strong> kg m s⁻¹</div>
          <div className="font-black" style={{ color: 'var(--success)' }}>{eq(pB, pA) ? '✓ conserved' : '✗ not conserved'}</div>
        </div>
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: eq(kB, kA) ? 'var(--success)' : 'var(--warning)' }}>
          <div className="text-[11px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>TOTAL KINETIC ENERGY</div>
          <div style={{ color: 'var(--text)' }}>before {f2(kB)} → after <strong>{f2(kA)}</strong> J</div>
          <div className="font-black" style={{ color: eq(kB, kA) ? 'var(--success)' : 'var(--warning)' }}>{eq(kB, kA) ? '✓ conserved' : `✗ ${f2(lost)} J lost (as heat, sound, deformation)`}</div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- static diagrams for the laws
export function NflDiagram() {
  const forces = (cx: number, base: number) => (
    <g>
      <Arrow x1={cx} y1={base - 12} x2={cx} y2={base - 62} color="var(--success)" w={3} />
      <text x={cx + 10} y={base - 44} fontSize="13" fontWeight="800" fill="var(--success)">N</text>
      <Arrow x1={cx} y1={base - 8} x2={cx} y2={base + 42} color="var(--danger)" w={3} />
      <text x={cx + 10} y={base + 30} fontSize="13" fontWeight="800" fill="var(--danger)">W</text>
    </g>
  )
  return (
    <figure className="m-0 p-2" style={fig}>
      <svg viewBox="0 0 640 250" className="w-full" role="img" aria-label="Two panels. Left: a book at rest on a table, upward normal force equal to downward weight, so the net force is zero. Right: a puck sliding on ice with equally spaced positions and equal velocity arrows, again with balanced forces and zero net force.">
        <text x="20" y="24" fontSize="13" fontWeight="900" fill="var(--text)">AT REST</text>
        <text x="340" y="24" fontSize="13" fontWeight="900" fill="var(--text)">CONSTANT VELOCITY (frictionless ice)</text>
        <line x1="20" y1="150" x2="300" y2="150" stroke="var(--text)" strokeWidth="3" />
        <rect x="120" y="108" width="80" height="42" rx="4" fill="var(--accent)" fillOpacity="0.25" stroke="var(--accent)" strokeWidth="2.5" />
        <text x="160" y="134" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--text)">book</text>
        {forces(160, 129)}
        <text x="160" y="214" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--text)">N = W, so F<tspan fontSize="9" dy="3">net</tspan><tspan dy="-3"> = 0</tspan></text>
        <text x="160" y="234" fontSize="12" textAnchor="middle" fill="var(--text-muted)">stays at rest</text>
        <line x1="330" y1="150" x2="620" y2="150" stroke="var(--border-strong)" strokeWidth="3" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx={370 + i * 55} cy="132" r="14" fill="var(--accent)" fillOpacity={0.2 + i * 0.16} stroke="var(--accent)" strokeWidth="2" />
            <Arrow x1={370 + i * 55} y1="96" x2={370 + i * 55 + 34} y2="96" color="var(--accent-2)" w={2.5} />
          </g>
        ))}
        <text x="330" y="84" fontSize="11" fill="var(--text-muted)">equal spacing, equal arrows: v does not change</text>
        {forces(590, 150)}
        <text x="475" y="214" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--text)">F<tspan fontSize="9" dy="3">net</tspan><tspan dy="-3"> = 0  →  Δv = 0,  a = 0</tspan></text>
        <text x="475" y="234" fontSize="12" textAnchor="middle" fill="var(--text-muted)">keeps moving at the same velocity</text>
      </svg>
    </figure>
  )
}

export function NslDiagram() {
  const xs = [50, 100, 175, 275, 400]
  return (
    <figure className="m-0 p-2" style={fig}>
      <svg viewBox="0 0 640 230" className="w-full" role="img" aria-label="A trolley pushed by a constant force F. The strobe positions get further apart and the momentum arrows grow by the same amount each equal time interval, so the change in momentum per unit time is constant and equal to F.">
        <line x1="20" y1="150" x2="620" y2="150" stroke="var(--border-strong)" strokeWidth="3" />
        <Arrow x1="20" y1="120" x2="70" y2="120" color="var(--danger)" w={4} />
        <text x="22" y="108" fontSize="13" fontWeight="900" fill="var(--danger)">F (constant push)</text>
        {xs.map((x, i) => (
          <g key={x}>
            <rect x={x - 16} y="128" width="32" height="22" rx="3" fill="var(--accent)" fillOpacity={0.2 + i * 0.15} stroke="var(--accent)" strokeWidth="2" />
            <circle cx={x - 8} cy="152" r="4" fill="var(--text)" />
            <circle cx={x + 8} cy="152" r="4" fill="var(--text)" />
            <Arrow x1={x} y1="80" x2={x + 20 + i * 22} y2="80" color="var(--success)" w={3} />
            <text x={x} y="68" fontSize="11" fontWeight="800" fill="var(--text)">p{'₁₂₃₄₅'[i]}</text>
            <text x={x} y="176" fontSize="10" fill="var(--text-muted)">t={i}s</text>
          </g>
        ))}
        <text x="20" y="34" fontSize="12" fontWeight="800" fill="var(--text)">Momentum arrows grow by the SAME amount every second:</text>
        <text x="20" y="52" fontSize="12" fill="var(--text-muted)">p₂ − p₁ = p₃ − p₂ = … = Δp, so Δp / t is constant</text>
        <text x="320" y="210" fontSize="14" fontWeight="900" textAnchor="middle" fill="var(--accent)">F = Δp / t</text>
      </svg>
    </figure>
  )
}

// ---------------------------------------------------------------- force links space and time
export function SpacetimeDiagram() {
  return (
    <figure className="m-0 p-2" style={fig}>
      <svg viewBox="0 0 640 290" className="w-full" role="img" aria-label="Left: three spatial axes x, y and z, labelled spatial, three dimensions. Right: a time arrow from past through present to future, labelled temporal, one dimension. Together they make four dimensions. Below, a box labelled Force links them: energy change per unit distance on the space side, and momentum change per unit time on the time side.">
        {/* space: x, y, z */}
        <g>
          <Arrow x1="110" y1="170" x2="270" y2="170" color="var(--accent)" w={3} />
          <Arrow x1="110" y1="170" x2="110" y2="40" color="var(--accent)" w={3} />
          <Arrow x1="110" y1="170" x2="205" y2="100" color="var(--accent)" w={3} />
          <text x="278" y="176" fontSize="15" fontWeight="900" fill="var(--accent)">x</text>
          <text x="100" y="34" fontSize="15" fontWeight="900" fill="var(--accent)">y</text>
          <text x="212" y="98" fontSize="15" fontWeight="900" fill="var(--accent)">z</text>
          <text x="60" y="208" fontSize="14" fontWeight="900" fill="var(--text)">Spatial: 3D</text>
        </g>
        {/* time */}
        <g>
          <Arrow x1="370" y1="170" x2="610" y2="170" color="var(--warning)" w={3} />
          {[['Past', 395, '⏪'], ['Present', 490, '📍'], ['Future', 585, '🔮']].map(([l, x, e]) => (
            <g key={String(l)}>
              <circle cx={Number(x)} cy="170" r={l === 'Present' ? 9 : 6} fill={l === 'Present' ? 'var(--warning)' : 'none'} stroke="var(--warning)" strokeWidth="2.5" strokeDasharray={l === 'Future' ? '3 3' : undefined} />
              <text x={Number(x)} y="150" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--text)">{String(e)} {String(l)}</text>
            </g>
          ))}
          <text x="380" y="208" fontSize="14" fontWeight="900" fill="var(--text)">Temporal: time</text>
        </g>
        <path d="M60 222 H610" stroke="var(--border-strong)" strokeWidth="2" fill="none" />
        <text x="330" y="240" fontSize="13" fontWeight="900" textAnchor="middle" fill="var(--text-muted)">3 + 1 = 4 dimensions</text>
        {/* force box */}
        <rect x="250" y="252" width="140" height="30" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2.5" />
        <text x="320" y="272" fontSize="15" fontWeight="900" textAnchor="middle" fill="var(--accent)">FORCE</text>
        <text x="60" y="272" fontSize="12" fontWeight="800" fill="var(--text)">ΔE / x  (per unit distance)</text>
        <text x="600" y="272" fontSize="12" fontWeight="800" textAnchor="end" fill="var(--text)">Δp / t  (per unit time)</text>
      </svg>
    </figure>
  )
}

export function ForceLink() {
  const [F, setF] = useState(4)
  const [m, setM] = useState(2)
  const [t, setT] = useState(3)
  const st = motionUnderForce(m, F, 0, t)
  const E = 0.5 * m * st.v * st.v
  const xmax = motionUnderForce(m, F, 0, 5).x
  const X = (x: number) => 40 + (x / xmax) * 540
  const ticks = [0, 1, 2, 3, 4, 5]
  const started = t > 0
  return (
    <div className="grid gap-4">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 620 150" className="w-full" role="img" aria-label={`A body starting from rest under a constant ${F} newton force. At ${t} seconds it has moved ${f2(st.x)} metres and has momentum ${f2(st.p)} kilogram metres per second. Earlier positions are the past, the current position is the present, and later positions are the future, predicted from the force.`}>
          <line x1="20" y1="90" x2="600" y2="90" stroke="var(--border-strong)" strokeWidth="2" />
          {ticks.map((ti) => {
            const xi = motionUnderForce(m, F, 0, ti).x
            const past = ti < t - 1e-9
            const future = ti > t + 1e-9
            return (
              <g key={ti}>
                <circle cx={X(xi)} cy="90" r="8" fill={past ? 'var(--warning)' : 'none'} fillOpacity={past ? 0.45 : 0} stroke="var(--warning)" strokeWidth="2" strokeDasharray={future ? '3 3' : undefined} />
                <text x={X(xi)} y="122" fontSize="10.5" textAnchor="middle" fill="var(--text-muted)">t={ti}s</text>
              </g>
            )
          })}
          <circle cx={X(st.x)} cy="90" r="13" fill="var(--warning)" stroke="var(--text)" strokeWidth="2.5" />
          <text x={X(st.x)} y="66" fontSize="12" fontWeight="900" textAnchor="middle" fill="var(--text)">📍 PRESENT</text>
          <text x="24" y="30" fontSize="12" fontWeight="800" fill="var(--text-muted)">⏪ past (already happened)</text>
          <text x="596" y="30" fontSize="12" fontWeight="800" textAnchor="end" fill="var(--text-muted)">🔮 future (predicted from the force)</text>
          <text x="24" y="146" fontSize="11" fill="var(--text-subtle)">⏪ solid = past, 📍 filled = present, 🔮 dashed = future. Move the time slider to move the present.</text>
        </svg>
      </figure>
      <div className="grid gap-3 md:grid-cols-3">
        <Slider label="Net force F" value={F} min={1} max={8} step={1} unit="N" onChange={setF} />
        <Slider label="Mass m" value={m} min={1} max={5} step={1} unit="kg" onChange={setM} />
        <Slider label="Time t (the present)" value={t} min={0} max={5} step={0.5} unit="s" onChange={setT} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: 'var(--warning)' }}>
          <div className="text-[11px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>THE TIME SIDE</div>
          <div style={{ color: 'var(--text)' }}>momentum gained after {f2(t, 1)} s: <strong>{f2(st.p)} kg m s⁻¹</strong></div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{started ? `Δp / t = ${f2(st.p)} / ${f2(t, 1)} = ${f2(st.p / t)} N` : 'move t above 0 to see it'}</div>
        </div>
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: 'var(--accent)' }}>
          <div className="text-[11px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>THE SPACE SIDE</div>
          <div style={{ color: 'var(--text)' }}>energy gained over {f2(st.x)} m: <strong>{f2(E)} J</strong></div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{started ? `ΔE / x = ${f2(E)} / ${f2(st.x)} = ${f2(E / st.x)} N` : 'move t above 0 to see it'}</div>
        </div>
      </div>
      <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
        Both ratios give the same {F} N. Change the mass and both still equal F: force is what connects how energy changes with distance and how momentum changes with time.
      </p>
    </div>
  )
}
