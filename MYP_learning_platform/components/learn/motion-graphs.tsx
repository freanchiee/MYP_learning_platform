'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { areaUnderVt, modelPosition, modelVelocity, position, realTrack, velocity } from '@/lib/learn/motion-graphs'

// Graph widgets for "A.1 diving deep": the three linked motion graphs, and a model checked against reality.
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

const TMAX = 10
const PRESETS: { name: string; x0: number; u: number; a: number }[] = [
  { name: 'Uniform A · 12.5 m/s', x0: 0, u: 12.5, a: 0 },
  { name: 'Uniform B · 5 m/s', x0: 0, u: 5, a: 0 },
  { name: 'Uniform C · 2.5 m/s', x0: 0, u: 2.5, a: 0 },
  { name: 'Class example · u = 5, a = 1', x0: 0, u: 5, a: 1 },
]

interface AxisSpec { w: number; h: number; padL: number; padB: number; padT: number; padR: number }
const AX: AxisSpec = { w: 320, h: 130, padL: 38, padB: 20, padT: 12, padR: 10 }

/** Niceish symmetric range that always contains 0 and the data. */
function range(vals: number[]) {
  const lo = Math.min(0, ...vals)
  let hi = Math.max(0, ...vals)
  if (hi - lo < 1) hi = lo + 1
  const pad = (hi - lo) * 0.1
  return [lo === 0 ? 0 : lo - pad, hi + pad] as const
}

export function MotionGraphsLab() {
  const [x0] = useState(0)
  const [u, setU] = useState(5)
  const [a, setA] = useState(1)
  const [t, setT] = useState(5)
  const [playing, setPlaying] = useState(false)
  const reduced = useReducedMotion()
  const raf = useRef(0)

  useEffect(() => {
    if (!playing || reduced) return
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setT((x) => {
        const n = x + dt
        if (n >= TMAX) { setPlaying(false); return TMAX }
        return n
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [playing, reduced])

  const N = 60
  const ts = Array.from({ length: N + 1 }, (_, i) => (i / N) * TMAX)
  const xs = ts.map((s) => position(x0, u, a, s))
  const vs = ts.map((s) => velocity(u, a, s))
  const xr = range(xs), vr = range(vs), ar = range([a])
  const { w, h, padL, padB, padT, padR } = AX
  const X = (s: number) => padL + (s / TMAX) * (w - padL - padR)
  const mk = (r: readonly [number, number]) => (y: number) => h - padB - ((y - r[0]) / (r[1] - r[0])) * (h - padB - padT)
  const Yx = mk(xr), Yv = mk(vr), Ya = mk(ar)
  const line = (Y: (y: number) => number, ys: number[]) => ys.map((y, i) => `${i ? 'L' : 'M'} ${X(ts[i])} ${Y(y)}`).join(' ')

  const xt = position(x0, u, a, t), vt = velocity(u, a, t)
  const area = areaUnderVt(u, a, t)
  // tangent to x-t at t: slope = v
  const tanLen = 1.6
  const tx1 = Math.max(0, t - tanLen), tx2 = Math.min(TMAX, t + tanLen)
  const tan = (s: number) => xt + vt * (s - t)

  const axes = (Y: (y: number) => number, r: readonly [number, number], yl: string) => (
    <>
      <line x1={padL} y1={h - padB} x2={w - padR} y2={h - padB} stroke="var(--border-strong)" />
      <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="var(--border-strong)" />
      {r[0] < 0 && <line x1={padL} y1={Y(0)} x2={w - padR} y2={Y(0)} stroke="var(--border)" strokeDasharray="3 3" />}
      <text x={padL - 4} y={Y(0) + 3} fontSize="8" textAnchor="end" fill="var(--text-muted)">0</text>
      <text x={padL - 4} y={Y(r[1]) + 8} fontSize="8" textAnchor="end" fill="var(--text-muted)">{f2(r[1], 0)}</text>
      <text x="2" y="9" fontSize="8" fill="var(--text-muted)">{yl}</text>
      <text x={w - padR} y={h - 4} fontSize="8" textAnchor="end" fill="var(--text-muted)">t (s) · 0 to {TMAX}</text>
      <line x1={X(t)} y1={padT} x2={X(t)} y2={h - padB} stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 3" />
    </>
  )

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Presets">
        {PRESETS.map((p) => (
          <button key={p.name} onClick={() => { setU(p.u); setA(p.a) }} className={ctl} style={u === p.u && a === p.a ? btn1 : btn2}>{p.name.toUpperCase()}</button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="grid gap-3">
          <figure className="p-2" style={fig}>
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label={`Position against time. At t = ${f2(t)} s the position is ${f2(xt)} m and the gradient, the velocity, is ${f2(vt)} metres per second.`}>
              {axes(Yx, xr, 'x (m)')}
              <path d={line(Yx, xs)} fill="none" stroke="var(--accent)" strokeWidth="2" />
              <line x1={X(tx1)} y1={Yx(tan(tx1))} x2={X(tx2)} y2={Yx(tan(tx2))} stroke="var(--warning)" strokeWidth="1.5" />
              <circle cx={X(t)} cy={Yx(xt)} r="3.5" fill="var(--accent)" />
              <text x={w - padR} y={padT + 6} fontSize="8" textAnchor="end" fill="var(--warning)">tangent: gradient = v = {f2(vt)} m/s</text>
            </svg>
          </figure>
          <figure className="p-2" style={fig}>
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label={`Velocity against time. The area under the graph up to t is the displacement, ${f2(area.total)} metres.`}>
              {axes(Yv, vr, 'v (m/s)')}
              {/* rectangle (u x t) and triangle (1/2 x t x Δv) */}
              <polygon points={`${X(0)},${Yv(0)} ${X(t)},${Yv(0)} ${X(t)},${Yv(u)} ${X(0)},${Yv(u)}`} fill="var(--accent)" opacity="0.25" />
              <polygon points={`${X(0)},${Yv(u)} ${X(t)},${Yv(u)} ${X(t)},${Yv(vt)}`} fill="var(--success)" opacity="0.35" />
              <path d={line(Yv, vs)} fill="none" stroke="var(--accent)" strokeWidth="2" />
              <circle cx={X(t)} cy={Yv(vt)} r="3.5" fill="var(--accent)" />
              <text x={w - padR} y={padT + 6} fontSize="8" textAnchor="end" fill="var(--text-muted)">area = {f2(area.rect)} + {f2(area.tri)} = {f2(area.total)} m</text>
            </svg>
          </figure>
          <figure className="p-2" style={fig}>
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label={`Acceleration against time: constant at ${f2(a)} metres per second squared.`}>
              {axes(Ya, ar, 'a (m/s²)')}
              <line x1={X(0)} y1={Ya(a)} x2={X(TMAX)} y2={Ya(a)} stroke="var(--accent)" strokeWidth="2" />
              <polygon points={`${X(0)},${Ya(0)} ${X(t)},${Ya(0)} ${X(t)},${Ya(a)} ${X(0)},${Ya(a)}`} fill="var(--success)" opacity="0.3" />
              <text x={w - padR} y={padT + 6} fontSize="8" textAnchor="end" fill="var(--text-muted)">area = Δv = {f2(a * t)} m/s</text>
            </svg>
          </figure>
        </div>
        <div className="grid content-start gap-3">
          <Slider label="Start velocity u" value={u} min={0} max={15} step={0.5} unit="m/s" onChange={setU} />
          <Slider label="Acceleration a" value={a} min={-2} max={3} step={0.5} unit="m/s²" onChange={setA} />
          <Slider label="Time t" value={Math.round(t * 100) / 100} min={0} max={TMAX} step={0.1} unit="s" onChange={(v) => { setPlaying(false); setT(v) }} />
          {!reduced && <button onClick={() => { if (t >= TMAX) setT(0); setPlaying((p) => !p) }} aria-pressed={playing} className={ctl} style={playing ? btn2 : btn1}>{playing ? '⏸ PAUSE' : '▶ PLAY'}</button>}
          <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
            <div>Position x = ut + ½at² = <strong>{f2(xt)} m</strong></div>
            <div>Velocity v = u + at = <strong>{f2(vt)} m/s</strong> <span style={{ color: 'var(--text-muted)' }}>(gradient of x–t)</span></div>
            <div>Acceleration a = <strong>{f2(a)} m/s²</strong> <span style={{ color: 'var(--text-muted)' }}>(gradient of v–t)</span></div>
            <div>Area under v–t = <strong>{f2(area.total)} m</strong> <span style={{ color: 'var(--text-muted)' }}>(= displacement)</span></div>
            <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
              {a === 0 ? 'a = 0: uniform motion. x–t is a straight line, v–t is flat.' : 'a ≠ 0: non-uniform motion. x–t curves, and the tangent keeps tilting.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- a model checked against reality
export function ModelVsRealityLab() {
  const track = useMemo(() => realTrack(30, 0.5), [])
  const [t, setT] = useState(4)
  const [mode, setMode] = useState<'x' | 'v'>('x')
  const at = track.reduce((best, p) => (Math.abs(p.t - t) < Math.abs(best.t - t) ? p : best), track[0])
  const mod = mode === 'x' ? modelPosition(at.t) : modelVelocity(at.t)
  const real = mode === 'x' ? at.x : at.v
  const err = real > 1e-9 ? ((mod - real) / real) * 100 : 0

  const { w, h, padL, padB, padT, padR } = AX
  const ymax = mode === 'x' ? modelPosition(30) : modelVelocity(30)
  const X = (s: number) => padL + (s / 30) * (w - padL - padR)
  const Y = (y: number) => h - padB - (y / ymax) * (h - padB - padT)
  const realPath = track.map((p, i) => `${i ? 'L' : 'M'} ${X(p.t)} ${Y(mode === 'x' ? p.x : p.v)}`).join(' ')
  const modPts = Array.from({ length: 61 }, (_, i) => i * 0.5)
  const modPath = modPts.map((s, i) => `${i ? 'L' : 'M'} ${X(s)} ${Y(mode === 'x' ? modelPosition(s) : modelVelocity(s))}`).join(' ')
  const unit = mode === 'x' ? 'm' : 'm/s'

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <figure className="p-2" style={fig}>
        <svg viewBox={`0 0 ${w} ${h + 20}`} className="w-full" role="img" aria-label={`A car from rest. The model (constant acceleration, no air resistance) predicts ${f2(mod)} ${unit} at ${f2(at.t)} seconds; the fuller simulation gives ${f2(real)} ${unit}.`}>
          <line x1={padL} y1={h - padB} x2={w - padR} y2={h - padB} stroke="var(--border-strong)" />
          <line x1={padL} y1={padT} x2={padL} y2={h - padB} stroke="var(--border-strong)" />
          <text x="2" y="9" fontSize="8" fill="var(--text-muted)">{mode === 'x' ? 'x (m)' : 'v (m/s)'}</text>
          <text x={padL - 4} y={Y(ymax) + 8} fontSize="8" textAnchor="end" fill="var(--text-muted)">{f2(ymax, 0)}</text>
          <text x={padL - 4} y={Y(0) + 3} fontSize="8" textAnchor="end" fill="var(--text-muted)">0</text>
          <text x={w - padR} y={h - 4} fontSize="8" textAnchor="end" fill="var(--text-muted)">t (s) · 0 to 30</text>
          <path d={modPath} fill="none" stroke="var(--danger)" strokeWidth="1.8" strokeDasharray="5 3" />
          <path d={realPath} fill="none" stroke="var(--accent)" strokeWidth="2.2" />
          <line x1={X(at.t)} y1={padT} x2={X(at.t)} y2={h - padB} stroke="var(--border-strong)" strokeDasharray="2 3" />
          <circle cx={X(at.t)} cy={Y(mod)} r="3.5" fill="var(--danger)" />
          <circle cx={X(at.t)} cy={Y(real)} r="3.5" fill="var(--accent)" />
          <text x={padL + 6} y={padT + 8} fontSize="8" fill="var(--danger)">- - model: a = F/m, no resistance</text>
          <text x={padL + 6} y={padT + 18} fontSize="8" fill="var(--accent)">— reality: with drag and rolling resistance</text>
        </svg>
      </figure>
      <div className="grid content-start gap-3">
        <div className="flex gap-2" role="group" aria-label="Quantity">
          <button onClick={() => setMode('x')} aria-pressed={mode === 'x'} className={ctl} style={mode === 'x' ? btn1 : btn2}>POSITION</button>
          <button onClick={() => setMode('v')} aria-pressed={mode === 'v'} className={ctl} style={mode === 'v' ? btn1 : btn2}>VELOCITY</button>
        </div>
        <Slider label="Time" value={t} min={0} max={30} step={0.5} unit="s" onChange={setT} />
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
          <div>Model predicts: <strong style={{ color: 'var(--danger)' }}>{f2(mod)} {unit}</strong></div>
          <div>Reality gives: <strong style={{ color: 'var(--accent)' }}>{f2(real)} {unit}</strong></div>
          <div>The model is off by: <strong>{f2(err, 0)}%</strong></div>
          <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
            {err < 7 ? 'Close enough to be useful here.' : err < 20 ? 'Noticeably wrong: the missing resistance is starting to matter.' : 'Badly wrong: the model has left out something that now dominates.'}
          </div>
        </div>
      </div>
    </div>
  )
}
