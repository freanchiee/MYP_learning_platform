'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CAR, GRIP_LIMIT, SUSP, breakerAt, newCar, roadHeight, stepCar, stepSuspension, type CarForces, type CarInput, type CarState, type SuspState } from '@/lib/learn/car-model'

// "What can a force do?" A force can change speed, change direction, change shape.
// Three small animations plus a driving game. Tokens only for chrome; the game scene has its own palette.
const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
const f1 = (x: number, d = 1) => {
  if (Math.abs(x) < 1e-9) return '0'
  const s = x.toFixed(d)
  return (s === '-0' ? '0' : s).replace('-', '−')
}

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

type N = number | string
function Arrow(props: { x1: N; y1: N; x2: N; y2: N; color: string; w?: number }) {
  const { color, w = 3 } = props
  const x1 = Number(props.x1), y1 = Number(props.y1), x2 = Number(props.x2), y2 = Number(props.y2)
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 2) return null
  const ux = dx / len, uy = dy / len
  const h = Math.min(10, len * 0.5)
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
    const f = () => setR(q.matches)
    q.addEventListener('change', f)
    return () => q.removeEventListener('change', f)
  }, [])
  return r
}

/** A looping clock (seconds) that only runs while `playing`. With reduced motion it starts paused and a slider scrubs it. */
function useClock(period: number) {
  const reduced = useReducedMotion()
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (!reduced) setPlaying(true)
  }, [reduced])
  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    let id = 0
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setT((x) => (x + dt) % period)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [playing, period])
  return { t, setT, playing, setPlaying, reduced }
}

function Transport({ clock, period }: { clock: ReturnType<typeof useClock>; period: number }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button aria-pressed={clock.playing} onClick={() => clock.setPlaying(!clock.playing)} className={ctl} style={clock.playing ? btn2 : btn1}>{clock.playing ? '⏸ PAUSE' : '▶ PLAY'}</button>
      <label className="flex min-w-[180px] flex-1 items-center gap-2 text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
        time
        <input type="range" min={0} max={period} step={0.05} value={clock.t} onChange={(e) => { clock.setPlaying(false); clock.setT(Number(e.target.value)) }} className="w-full" style={{ accentColor: 'var(--accent)' }} aria-label="Scrub the animation" />
        <span style={{ color: 'var(--accent)', minWidth: 44 }}>{f1(clock.t, 1)} s</span>
      </label>
    </div>
  )
}

// ---------------------------------------------------------------- 1. a force can change SPEED: F = ma
const T_SPEED = 4
export function ForceSpeedAnim() {
  const [same, setSame] = useState(true)
  const clock = useClock(T_SPEED)
  const m = 2
  const F = 2
  const a = (same ? F : -F) / m
  const v0 = 4
  const pos = (t: number) => v0 * t + 0.5 * a * t * t
  const xEnd = Math.max(pos(T_SPEED), pos(0), 8)
  const X = (x: number) => 40 + (x / Math.max(xEnd, 24)) * 520
  const t = clock.t
  const v = v0 + a * t
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Direction of the force compared with the velocity">
        <button aria-pressed={same} onClick={() => { setSame(true); clock.setT(0) }} className={ctl} style={same ? btn1 : btn2}>F SAME DIRECTION AS v (0°)</button>
        <button aria-pressed={!same} onClick={() => { setSame(false); clock.setT(0) }} className={ctl} style={!same ? btn1 : btn2}>F OPPOSITE TO v (180°)</button>
      </div>
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 620 170" className="w-full" role="img" aria-label={`A ${m} kilogram block moving right at ${v0} metres per second. A ${F} newton force acts ${same ? 'to the right, the same way it moves, so it speeds up' : 'to the left, against its motion, so it slows down'}. Now at ${f1(t)} seconds its speed is ${f1(v)} metres per second.`}>
          <line x1="20" y1="118" x2="600" y2="118" stroke="var(--border-strong)" strokeWidth="3" />
          {[0, 1, 2, 3, 4].map((ti) => (
            <g key={ti}>
              <circle cx={X(pos(ti))} cy="132" r="4" fill={ti <= t ? 'var(--accent)' : 'var(--border-strong)'} />
              <text x={X(pos(ti))} y="152" fontSize="10" textAnchor="middle" fill="var(--text-subtle)">{ti}s</text>
            </g>
          ))}
          <rect x={X(pos(t)) - 22} y="80" width="44" height="38" rx="5" fill="var(--accent)" fillOpacity="0.3" stroke="var(--accent)" strokeWidth="2.5" />
          <text x={X(pos(t))} y="104" fontSize="12" fontWeight="800" textAnchor="middle" fill="var(--text)">{m} kg</text>
          <Arrow x1={X(pos(t))} y1="56" x2={X(pos(t)) + Math.max(4, v * 16)} y2="56" color="var(--success)" w={3.5} />
          <text x={X(pos(t)) + 2} y="46" fontSize="12" fontWeight="900" fill="var(--success)">v = {f1(v)} m s⁻¹</text>
          {same ? (
            <Arrow x1={X(pos(t)) + 22} y1="98" x2={X(pos(t)) + 78} y2="98" color="var(--danger)" w={4} />
          ) : (
            <Arrow x1={X(pos(t)) - 22} y1="98" x2={X(pos(t)) - 78} y2="98" color="var(--danger)" w={4} />
          )}
          <text x={X(pos(t)) + (same ? 50 : -50)} y="90" fontSize="12" fontWeight="900" textAnchor="middle" fill="var(--danger)">F = {F} N</text>
        </svg>
      </figure>
      <Transport clock={clock} period={T_SPEED} />
      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        <div style={{ color: 'var(--text)' }}>F = ma → a = F / m = {same ? '+' : '−'}{F} / {m} = <strong>{same ? '+1' : '−1'} m s⁻²</strong> &nbsp;·&nbsp; speed now <strong>{f1(v)} m s⁻¹</strong></div>
        <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
          {same ? 'Force and velocity point the same way (angle 0°): the speed goes up.' : 'Force and velocity point opposite ways (angle 180°): the speed goes down.'}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- 2. a force can change DIRECTION: F = mv²/r
const T_CIRCLE = 6
export function ForceDirectionAnim() {
  const [m, setM] = useState(1)
  const [v, setV] = useState(4)
  const [r, setR] = useState(3)
  const clock = useClock(T_CIRCLE)
  const Fc = (m * v * v) / r
  const w = v / r
  const phi = w * clock.t
  const cx = 150, cy = 120, S = 26
  const bx = cx + S * r * Math.cos(phi), by = cy - S * r * Math.sin(phi)
  const tx = -Math.sin(phi), ty = -Math.cos(phi) // unit tangent (screen)
  const ix = -Math.cos(phi), iy = Math.sin(phi) // unit inward (screen)
  const Lv = 7 * v
  const Lf = Math.min(70, 0.9 * Fc)
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 300 250" className="w-full" role="img" aria-label={`A ${m} kilogram ball moving in a circle of radius ${r} metres at a steady ${v} metres per second. The velocity arrow is tangent to the circle. The force arrow points at the centre, at 90 degrees to the velocity. It changes the direction of the velocity, not the speed.`}>
          <circle cx={cx} cy={cy} r={S * r} fill="none" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx={cx} cy={cy} r="3" fill="var(--text-muted)" />
          <line x1={bx} y1={by} x2={cx} y2={cy} stroke="var(--border-strong)" strokeWidth="1" />
          <circle cx={bx} cy={by} r="10" fill="var(--accent)" stroke="var(--text)" strokeWidth="2" />
          <Arrow x1={bx} y1={by} x2={bx + tx * Lv} y2={by + ty * Lv} color="var(--success)" w={3.5} />
          <Arrow x1={bx} y1={by} x2={bx + ix * Lf} y2={by + iy * Lf} color="var(--danger)" w={4} />
          {/* right-angle mark */}
          <path d={`M${bx + tx * 14} ${by + ty * 14} L${bx + tx * 14 + ix * 14} ${by + ty * 14 + iy * 14} L${bx + ix * 14} ${by + iy * 14}`} fill="none" stroke="var(--text)" strokeWidth="1.5" />
          <text x="10" y="20" fontSize="12" fontWeight="900" fill="var(--success)">velocity (tangent)</text>
          <text x="10" y="38" fontSize="12" fontWeight="900" fill="var(--danger)">force (towards the centre)</text>
          <text x="10" y="242" fontSize="12" fontWeight="800" fill="var(--text)">angle between F and v = 90°</text>
        </svg>
      </figure>
      <div className="grid content-start gap-3">
        <Slider label="Mass m" value={m} min={0.5} max={5} step={0.5} unit="kg" onChange={setM} />
        <Slider label="Speed v" value={v} min={1} max={8} step={1} unit="m s⁻¹" onChange={setV} />
        <Slider label="Radius r" value={r} min={1} max={4} step={0.5} unit="m" onChange={setR} />
        <Transport clock={clock} period={T_CIRCLE} />
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
          <div style={{ color: 'var(--text)' }}>centripetal force F = mv² / r = {m} × {v}² / {r} = <strong>{f1(Fc)} N</strong></div>
          <div style={{ color: 'var(--text)' }}>speed stays <strong>{v} m s⁻¹</strong>; only the direction changes</div>
          <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Because F is at 90° to v, it does no speeding up or slowing down. Double the speed and the force needed is four times as big.</div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- 3. a force can change SHAPE: F = kx (Hooke's law)
export function ForceShapeAnim() {
  const [k, setK] = useState(100)
  const [F, setF] = useState(10)
  const [sweep, setSweep] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    if (!sweep || reduced) return
    let id = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      setF(Math.round(20 * Math.sin(((now - t0) / 1000) * 1.4) * 2) / 2)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [sweep, reduced])
  const x = F / k // metres
  const L0 = 150
  const Lpx = L0 + x * 300
  const x0 = 50
  const coils = 12
  const pts: string[] = [`${x0},95`]
  const seg = (Lpx - 20) / coils
  for (let i = 0; i < coils; i++) pts.push(`${x0 + 10 + seg * (i + 0.5)},${i % 2 ? 78 : 112}`)
  pts.push(`${x0 + Lpx},95`)
  const limit = Math.abs(F) > 18
  return (
    <div className="grid gap-4">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 560 190" className="w-full" role="img" aria-label={`A spring fixed to a wall. A force of ${F} newtons ${F >= 0 ? 'pulls' : 'pushes'} the free end, so the spring is ${F > 0 ? 'stretched' : F < 0 ? 'compressed' : 'at its natural length'} by ${f1(Math.abs(x) * 100)} centimetres.`}>
          <rect x="30" y="50" width="14" height="90" fill="var(--text-muted)" />
          <line x1={x0 + L0} y1="30" x2={x0 + L0} y2="160" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x={x0 + L0} y="24" fontSize="10.5" textAnchor="middle" fill="var(--text-subtle)">natural length</text>
          <polyline points={pts.join(' ')} fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinejoin="round" />
          <rect x={x0 + Lpx} y="70" width="34" height="50" rx="5" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2.5" />
          {Math.abs(F) > 0.4 && <Arrow x1={x0 + Lpx + (F > 0 ? 34 : 0)} y1="95" x2={x0 + Lpx + (F > 0 ? 34 : 0) + Math.sign(F) * (10 + Math.abs(F) * 2.8)} y2="95" color="var(--danger)" w={4} />}
          <text x="280" y="176" fontSize="13" fontWeight="900" textAnchor="middle" fill="var(--text)">{F > 0.2 ? 'stretched' : F < -0.2 ? 'compressed' : 'natural length'}: x = {f1(Math.abs(x) * 100)} cm</text>
        </svg>
      </figure>
      <div className="grid gap-3 md:grid-cols-2">
        <Slider label="Force F (+ pull, − push)" value={F} min={-20} max={20} step={0.5} unit="N" onChange={(v) => { setSweep(false); setF(v) }} />
        <Slider label="Spring constant k" value={k} min={50} max={200} step={10} unit="N m⁻¹" onChange={setK} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {!reduced && <button aria-pressed={sweep} onClick={() => setSweep((s) => !s)} className={ctl} style={sweep ? btn2 : btn1}>{sweep ? '⏸ STOP' : '▶ PULL AND PUSH'}</button>}
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, flex: 1, minWidth: 240 }} aria-live="polite">
          <div style={{ color: 'var(--text)' }}>F = kx → x = F / k = {f1(F)} / {k} = <strong>{f1(x * 100)} cm</strong></div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{limit ? 'Real springs stop following Hooke’s law beyond the limit of proportionality.' : 'Double the force, double the extension (while within the limit of proportionality).'}</div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- 4. the driving game
interface Hud {
  v: number
  f: CarForces
  xc: number
  zr: number
  z: number
  sForce: number
  s: number
  hist: number[]
}
const W = 640, H = 360, SC = 8 // canvas px, px per metre
const KEYS: Record<string, keyof CarInput> = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' }
const emptyForces: CarForces = { engine: 0, brake: 0, resist: 0, lateral: 0, latDir: [0, 0], turnRadius: Infinity, a: 0, skidding: false }

function canvasArrow(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, color: string, label?: string) {
  const dx = x1 - x0, dy = y1 - y0
  const len = Math.hypot(dx, dy)
  if (len < 3) return
  const ux = dx / len, uy = dy / len
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(x0, y0)
  ctx.lineTo(x1 - ux * 9, y1 - uy * 9)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x1 - ux * 12 - uy * 6, y1 - uy * 12 + ux * 6)
  ctx.lineTo(x1 - ux * 12 + uy * 6, y1 - uy * 12 - ux * 6)
  ctx.closePath()
  ctx.fill()
  if (label) {
    ctx.font = '700 12px sans-serif'
    ctx.lineWidth = 3
    ctx.strokeStyle = 'rgba(0,0,0,0.65)'
    ctx.strokeText(label, x1 + ux * 6 + 2, y1 + uy * 6 + 4)
    ctx.fillStyle = color
    ctx.fillText(label, x1 + ux * 6 + 2, y1 + uy * 6 + 4)
  }
}

function drawScene(ctx: CanvasRenderingContext2D, car: CarState, f: CarForces, inp: CarInput) {
  const sx = (x: number) => W / 2 + (x - car.x) * SC
  const sy = (y: number) => H / 2 - (y - car.y) * SC
  ctx.fillStyle = '#3f7a45'
  ctx.fillRect(0, 0, W, H)
  // road along x, 18 m wide
  ctx.fillStyle = '#4a4d55'
  ctx.fillRect(0, sy(9), W, 18 * SC)
  ctx.fillStyle = '#e8e8e8'
  ctx.fillRect(0, sy(9), W, 2)
  ctx.fillRect(0, sy(-9) - 2, W, 2)
  const x0 = car.x - W / 2 / SC, x1 = car.x + W / 2 / SC
  ctx.fillStyle = '#e8d44d'
  for (let x = Math.floor(x0 / 8) * 8; x < x1; x += 8) ctx.fillRect(sx(x), sy(0) - 1.5, 4 * SC, 3)
  // speed breakers: yellow / black stripes across the road
  const k0 = Math.floor((x0 - SUSP.first - SUSP.len) / SUSP.spacing), k1 = Math.ceil((x1 - SUSP.first) / SUSP.spacing)
  for (let k = k0; k <= k1; k++) {
    const xb = SUSP.first + k * SUSP.spacing
    for (let i = 0; i < 9; i++) {
      ctx.fillStyle = i % 2 ? '#1c1c1c' : '#f5c518'
      ctx.fillRect(sx(xb), sy(9) + i * 2 * SC, SUSP.len * SC, 2 * SC)
    }
  }
  // car (local frame: +x forward, +y toward the car's right)
  ctx.save()
  ctx.translate(sx(car.x), sy(car.y))
  ctx.rotate(-car.th)
  ctx.fillStyle = '#151515'
  const wheel = (wx: number, wy: number, ang: number) => {
    ctx.save()
    ctx.translate(wx * SC, wy * SC)
    ctx.rotate(ang)
    ctx.fillRect(-0.45 * SC, -0.18 * SC, 0.9 * SC, 0.36 * SC)
    ctx.restore()
  }
  wheel(-1.35, -0.95, 0)
  wheel(-1.35, 0.95, 0)
  wheel(1.3, -0.95, -car.steer)
  wheel(1.3, 0.95, -car.steer)
  ctx.fillStyle = '#d63d3d'
  ctx.beginPath()
  ctx.roundRect(-2.1 * SC, -0.9 * SC, 4.2 * SC, 1.8 * SC, 5)
  ctx.fill()
  ctx.fillStyle = 'rgba(180,220,255,0.85)'
  ctx.fillRect(0.2 * SC, -0.7 * SC, 0.9 * SC, 1.4 * SC)
  ctx.restore()
  // force arrows, drawn from the middle of the car
  const fwd: [number, number] = [Math.cos(car.th), -Math.sin(car.th)] // screen
  const cx = sx(car.x), cy = sy(car.y)
  const off = 7
  if (f.engine > 0) canvasArrow(ctx, cx - fwd[1] * -off * 0, cy, cx + fwd[0] * (f.engine / CAR.Feng) * 60, cy + fwd[1] * (f.engine / CAR.Feng) * 60, '#2ecc71', 'engine force')
  if (f.brake > 0) canvasArrow(ctx, cx, cy, cx - fwd[0] * 60, cy - fwd[1] * 60, '#ff5b4a', 'braking force')
  if (f.lateral > 1 && (inp.left || inp.right)) {
    const len = Math.max(14, (f.lateral / GRIP_LIMIT) * 70)
    canvasArrow(ctx, cx, cy, cx + f.latDir[0] * len, cy - f.latDir[1] * len, '#4aa8ff', 'tyre friction')
  }
  if (car.v > 0.5) canvasArrow(ctx, cx + fwd[0] * 4, cy + fwd[1] * 4 + 0, cx + fwd[0] * Math.max(8, car.v * 2.2), cy + fwd[1] * Math.max(8, car.v * 2.2), 'rgba(255,255,255,0.85)')
}

export function ForceCarGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<CarState>(newCar(0))
  const suspRef = useRef<SuspState>({ z: 0, zd: 0 })
  const zrPrev = useRef(0)
  const input = useRef<CarInput>({ up: false, down: false, left: false, right: false })
  const forcesRef = useRef<CarForces>(emptyForces)
  const histRef = useRef<number[]>([])
  const slowRef = useRef(false)
  const pausedRef = useRef(false)
  const [slow, setSlow] = useState(false)
  const [paused, setPaused] = useState(false)
  const [focused, setFocused] = useState(false)
  const [keys, setKeys] = useState<CarInput>({ up: false, down: false, left: false, right: false })
  const [hud, setHud] = useState<Hud>({ v: 0, f: emptyForces, xc: 0, zr: 0, z: 0, sForce: 0, s: -99, hist: [] })

  const setKey = useCallback((k: keyof CarInput, on: boolean) => {
    if (input.current[k] === on) return
    input.current = { ...input.current, [k]: on }
    setKeys(input.current)
  }, [])

  useEffect(() => {
    slowRef.current = slow
  }, [slow])
  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const cv = canvasRef.current
    const ctx = cv?.getContext('2d')
    if (!cv || !ctx) return
    let id = 0
    let last = performance.now()
    let frame = 0
    const tick = (now: number) => {
      let dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!pausedRef.current) {
        dt *= slowRef.current ? 0.25 : 1
        const n = Math.max(1, Math.ceil(dt / (1 / 240)))
        const h = dt / n
        let xc = 0, zr = 0, sForce = 0, s = 0
        for (let i = 0; i < n; i++) {
          const r = stepCar(carRef.current, input.current, h)
          carRef.current = r.state
          forcesRef.current = r.forces
          const b = breakerAt(carRef.current.x)
          s = b.s
          zr = roadHeight(b.s)
          const sr = stepSuspension(suspRef.current, zr, (zr - zrPrev.current) / h, h)
          suspRef.current = sr.state
          zrPrev.current = zr
          xc = sr.xc
          sForce = sr.force
        }
        if (frame % 2 === 0) {
          histRef.current.push(xc)
          if (histRef.current.length > 150) histRef.current.shift()
        }
        drawScene(ctx, carRef.current, forcesRef.current, input.current)
        if (frame % 3 === 0) setHud({ v: carRef.current.v, f: forcesRef.current, xc, zr, z: suspRef.current.z, sForce, s, hist: histRef.current.slice() })
      }
      frame++
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  const onKey = (e: React.KeyboardEvent, on: boolean) => {
    const k = KEYS[e.key]
    if (!k) return
    e.preventDefault()
    e.stopPropagation() // the slide deck also listens for ◀ ▶: steering must not change the slide
    setKey(k, on)
  }

  const resetCar = (x = 0, v = 0) => {
    carRef.current = { ...newCar(x), v }
    suspRef.current = { z: 0, zd: 0 }
    zrPrev.current = 0
    histRef.current = []
  }

  // ---- suspension zoom geometry (one wheel) ----
  const Sz = 500 // px per metre (exaggerated)
  const R = 30
  const ground = 228
  const axleY = ground - R - hud.zr * Sz
  const springLen = 92 - hud.xc * Sz
  const bodyY = axleY - springLen
  const coilsN = 9
  const spts: string[] = [`150,${axleY - R * 0}`]
  const sseg = (springLen - 16) / coilsN
  for (let i = 0; i < coilsN; i++) spts.push(`${i % 2 ? 132 : 168},${axleY - 8 - sseg * (i + 0.5)}`)
  spts.push(`150,${bodyY}`)
  const road: string[] = []
  for (let px = 0; px <= 300; px += 6) road.push(`${px},${ground - roadHeight(hud.s + (px - 150) / 50) * Sz}`)
  const roadPush = Math.min(60, hud.sForce * 0.025)

  const f = hud.f
  const kmh = hud.v * 3.6
  const anyKey = keys.up || keys.down || keys.left || keys.right

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div>
          <div
            ref={wrapRef}
            tabIndex={0}
            role="application"
            aria-label="Driving game. Click here, then use the arrow keys: up to accelerate, down to brake, left and right to steer."
            onKeyDown={(e) => onKey(e, true)}
            onKeyUp={(e) => onKey(e, false)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false)
              ;(['up', 'down', 'left', 'right'] as const).forEach((k) => setKey(k, false))
            }}
            className="relative overflow-hidden rounded-[var(--radius-panel)] focus:outline-none"
            style={{ border: `3px solid ${focused ? 'var(--accent)' : 'var(--border-strong)'}` }}
          >
            <canvas ref={canvasRef} width={W} height={H} className="block w-full" role="img" aria-label="Top-down view of a car on a straight road with speed breakers, with arrows for the forces on the car" />
            {!focused && (
              <button onClick={() => wrapRef.current?.focus()} className="absolute inset-0 flex items-center justify-center text-sm font-black" style={{ background: 'rgba(0,0,0,0.45)', color: '#fff' }}>
                ▶ Click to play · use the arrow keys ▲ ▼ ◀ ▶
              </button>
            )}
            <div className="absolute left-2 top-2 rounded-[var(--radius-control)] px-2.5 py-1 text-xs font-black" style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}>
              {f1(hud.v)} m s⁻¹ · {f1(kmh, 0)} km/h
            </div>
            {f.skidding && (
              <div className="absolute right-2 top-2 rounded-[var(--radius-control)] px-2.5 py-1 text-xs font-black" style={{ background: '#e67e22', color: '#fff' }}>
                ⚠ tyres at the limit of grip: slow down to turn tighter
              </div>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="On-screen controls">
            {([['left', '◀'], ['up', '▲'], ['down', '▼'], ['right', '▶']] as const).map(([k, sym]) => (
              <button
                key={k}
                aria-label={`${k} arrow`}
                aria-pressed={keys[k]}
                onPointerDown={(e) => { e.preventDefault(); setKey(k, true) }}
                onPointerUp={() => setKey(k, false)}
                onPointerLeave={() => setKey(k, false)}
                onPointerCancel={() => setKey(k, false)}
                className="h-11 w-11 rounded-[var(--radius-control)] text-lg font-black focus:outline-none focus:ring-2"
                style={keys[k] ? btn1 : btn2}
              >
                {sym}
              </button>
            ))}
            <span className="mx-1" />
            <button onClick={() => resetCar(0, 0)} className={ctl} style={btn2}>↺ RESTART</button>
            <button onClick={() => resetCar(SUSP.first - 30, 9)} className={ctl} style={btn2}>🚧 GO TO A SPEED BREAKER</button>
            <button aria-pressed={slow} onClick={() => setSlow((s) => !s)} className={ctl} style={slow ? btn1 : btn2}>🐢 SLOW MOTION</button>
            <button aria-pressed={paused} onClick={() => setPaused((p) => !p)} className={ctl} style={paused ? btn1 : btn2}>{paused ? '▶ RESUME' : '⏸ PAUSE'}</button>
          </div>
        </div>

        <figure className="m-0 p-2" style={fig}>
          <div className="px-1 pb-1 text-xs font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🔍 ZOOM: THE SUSPENSION (ONE WHEEL)</div>
          <svg viewBox="0 0 300 300" className="w-full" role="img" aria-label={`Zoomed side view of one wheel and its spring. ${hud.xc > 0.002 ? `The speed breaker pushes the wheel up, so the spring is squeezed by ${f1(hud.xc * 100)} centimetres and pushes back with ${f1(hud.xc * SUSP.k, 0)} newtons.` : 'No speed breaker under the wheel: the spring is at rest.'}`}>
            <polyline points={`${road.join(' ')} 300,300 0,300`} fill="#4a4d55" stroke="var(--text-muted)" strokeWidth="2" />
            {/* body */}
            <rect x="60" y={bodyY - 36} width="180" height="36" rx="6" fill="#d63d3d" fillOpacity="0.9" stroke="var(--text)" strokeWidth="2" />
            <text x="150" y={bodyY - 13} fontSize="12" fontWeight="900" textAnchor="middle" fill="#fff">car body</text>
            {/* spring and damper */}
            <polyline points={spts.join(' ')} fill="none" stroke="var(--accent)" strokeWidth="4.5" strokeLinejoin="round" />
            {/* wheel */}
            <circle cx="150" cy={axleY} r={R} fill="#222" stroke="#000" strokeWidth="3" />
            <circle cx="150" cy={axleY} r="10" fill="#888" />
            {/* the road pushes UP, spring pushes back */}
            {roadPush > 6 && <Arrow x1="150" y1={ground - hud.zr * Sz + 14} x2="150" y2={ground - hud.zr * Sz + 14 - roadPush - 6} color="var(--success)" w={4} />}
            {roadPush > 6 && <text x="176" y={ground - hud.zr * Sz - 4} fontSize="12" fontWeight="900" fill="var(--success)">road pushes UP</text>}
            <text x="6" y="16" fontSize="12" fontWeight="900" fill="var(--text)">{hud.xc > 0.002 ? 'spring squeezed' : 'spring at rest'}</text>
            <text x="6" y="34" fontSize="12" fontWeight="800" fill="var(--accent)">x = {f1(Math.max(0, hud.xc) * 100)} cm</text>
            <text x="6" y="52" fontSize="12" fontWeight="800" fill="var(--accent)">F = kx = {f1(Math.max(0, hud.xc) * SUSP.k, 0)} N</text>
            {/* trace of the squeeze */}
            <polyline points={hud.hist.map((v, i) => `${150 + (i / 150) * 140},${292 - Math.max(0, v) * 260}`).join(' ')} fill="none" stroke="var(--warning)" strokeWidth="2" />
            <text x="150" y="298" fontSize="9.5" fill="var(--text-subtle)">squeeze over the last few seconds</text>
          </svg>
          <div className="px-1 text-xs" style={{ color: 'var(--text-muted)' }}>k = {SUSP.k.toLocaleString()} N m⁻¹. Hit the breaker faster and the spring is squeezed more.</div>
        </figure>
      </div>

      <div className="grid gap-3 sm:grid-cols-3" aria-live="off">
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: '#2ecc71' }}>
          <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🟢 ENGINE FORCE</div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{f1(f.engine, 0)} N</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>same direction as v</div>
        </div>
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: '#ff5b4a' }}>
          <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🔴 BRAKING FORCE</div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{f1(f.brake, 0)} N</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>opposite to v</div>
        </div>
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: '#4aa8ff' }}>
          <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🔵 TYRE FRICTION (SIDEWAYS)</div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{f1(keys.left || keys.right ? f.lateral : 0, 0)} N</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>at 90° to v · F = mv²/r{keys.left || keys.right ? ` (r = ${Number.isFinite(f.turnRadius) ? f1(f.turnRadius) : '∞'} m)` : ''}</div>
        </div>
      </div>

      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        {keys.up && <div style={{ color: 'var(--text)' }}>▲ <strong>Engine force is in the SAME direction as the velocity</strong>, so the car speeds up (a = F/m).</div>}
        {keys.down && <div style={{ color: 'var(--text)' }}>▼ <strong>Braking force points OPPOSITE to the velocity</strong>, so the car slows down.</div>}
        {(keys.left || keys.right) && <div style={{ color: 'var(--text)' }}>{keys.left ? '◀' : '▶'} <strong>Tyre friction pushes SIDEWAYS, at 90° to the velocity</strong>: the direction changes, the speed does not (F = mv²/r).</div>}
        {hud.xc > 0.004 && <div style={{ color: 'var(--text)' }}>🚧 <strong>The speed breaker pushes the wheel UP</strong> and squeezes the spring: a force changes its shape, F = kx.</div>}
        {!anyKey && hud.xc <= 0.004 && <div style={{ color: 'var(--text-muted)' }}>{hud.v > 0.3 ? 'Coasting: only air and rolling resistance act against the motion.' : 'Press ▲ to accelerate, ▼ to brake, ◀ ▶ to steer.'}</div>}
      </div>
    </div>
  )
}
