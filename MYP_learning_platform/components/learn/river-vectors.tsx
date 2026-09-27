'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { RIVER, headingToCancelDrift, riverCrossing, stepBoat, toComponents, type BoatInput, type BoatState } from '@/lib/learn/vector-model'

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
const f1 = (x: number, d = 1) => (Math.abs(x) < 1e-9 ? '0' : x.toFixed(d).replace('-', '−'))

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

// ---------------------------------------------------------------- 1. resolving a vector into components
export function VectorResolveAnim() {
  const [V, setV] = useState(10)
  const [theta, setTheta] = useState(40)
  const { x: Vx, y: Vy } = toComponents(V, theta)
  const cx = 40, cy = 220, S = 16
  const ex = cx + Vx * S, ey = cy - Vy * S
  const arc = 34
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <figure className="m-0 p-2" style={fig}>
        <svg viewBox="0 0 320 240" className="w-full" role="img" aria-label={`A vector of magnitude ${f1(V)} at ${f1(theta, 0)} degrees above the horizontal. Its horizontal component is ${f1(Vx)}, its vertical component is ${f1(Vy)}, shown as dashed lines.`}>
          <line x1="10" y1={cy} x2="300" y2={cy} stroke="var(--border-strong)" strokeWidth="1.5" />
          <line x1={cx} y1="10" x2={cx} y2="235" stroke="var(--border-strong)" strokeWidth="1.5" />
          {/* dashed components */}
          <line x1={cx} y1={cy} x2={ex} y2={cy} stroke="var(--accent-2)" strokeWidth="2.5" strokeDasharray="5 4" />
          <line x1={ex} y1={cy} x2={ex} y2={ey} stroke="var(--warning)" strokeWidth="2.5" strokeDasharray="5 4" />
          <line x1={cx} y1={cy} x2={cx} y2={ey} stroke="var(--warning)" strokeWidth="2" strokeDasharray="2 3" opacity="0.5" />
          <line x1={cx} y1={ey} x2={ex} y2={ey} stroke="var(--accent-2)" strokeWidth="2" strokeDasharray="2 3" opacity="0.5" />
          {/* angle arc */}
          <path d={`M ${cx + arc} ${cy} A ${arc} ${arc} 0 0 0 ${cx + arc * Math.cos((theta * Math.PI) / 180)} ${cy - arc * Math.sin((theta * Math.PI) / 180)}`} fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
          <text x={cx + arc + 10} y={cy - 8} fontSize="11" fontWeight="800" fill="var(--text-muted)">θ = {f1(theta, 0)}°</text>
          {/* main vector */}
          <Arrow x1={cx} y1={cy} x2={ex} y2={ey} color="var(--success)" w={4} />
          <text x={cx + Vx * S * 0.55} y={cy - (cx + Vx * S * 0.55 - cx) * 0} fontSize="12" fontWeight="900" fill="var(--accent-2)">Vx = {f1(Vx)}</text>
          <text x={ex + 6} y={(cy + ey) / 2} fontSize="12" fontWeight="900" fill="var(--warning)">Vy = {f1(Vy)}</text>
          <text x={ex + 8} y={ey - 6} fontSize="12" fontWeight="900" fill="var(--success)">V = {f1(V)}</text>
        </svg>
      </figure>
      <div className="grid content-start gap-3">
        <Slider label="Magnitude V" value={V} min={2} max={16} step={1} unit="" onChange={setV} />
        <Slider label="Angle θ (above horizontal)" value={theta} min={0} max={90} step={5} unit="°" onChange={setTheta} />
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
          <div style={{ color: 'var(--text)' }}>Vx = V cos θ = {f1(V)} × cos {f1(theta, 0)}° = <strong>{f1(Vx)}</strong></div>
          <div style={{ color: 'var(--text)' }}>Vy = V sin θ = {f1(V)} × sin {f1(theta, 0)}° = <strong>{f1(Vy)}</strong></div>
          <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Check: √(Vx² + Vy²) = {f1(Math.hypot(Vx, Vy))} ✓ back to V.</div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- 2. the river-crossing game
const W = 560, H = 340, SC = 6.6
const KEYS: Record<string, keyof BoatInput> = { ArrowUp: 'up', ArrowLeft: 'left', ArrowRight: 'right' }

function drawRiver(ctx: CanvasRenderingContext2D, s: BoatState, currentSpeed: number, tSec: number) {
  ctx.fillStyle = '#2e6b3f'
  ctx.fillRect(0, 0, W, H)
  const bankTopY = H - RIVER.width * SC - 30
  const bankBotY = H - 30
  ctx.fillStyle = '#3a6ea8'
  ctx.fillRect(0, bankTopY, W, bankBotY - bankTopY)
  ctx.fillStyle = '#6b4a2a'
  ctx.fillRect(0, bankTopY - 16, W, 16)
  ctx.fillRect(0, bankBotY, W, 16)
  // current flow chevrons, scrolling with the current's along-position
  ctx.strokeStyle = 'rgba(255,255,255,0.55)'
  ctx.lineWidth = 2.5
  const off = (currentSpeed * tSec * SC) % 60
  for (let y = bankTopY + 18; y < bankBotY - 10; y += 26) {
    for (let x = -60 + off; x < W; x += 60) {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + 16, y)
      ctx.lineTo(x + 10, y - 6)
      ctx.moveTo(x + 16, y)
      ctx.lineTo(x + 10, y + 6)
      ctx.stroke()
    }
  }
  // boat: screen x = along drift (centred), screen y = bank-bottom minus across progress
  const bx = W / 2 + s.along * SC
  const by = bankBotY - s.across * SC
  ctx.save()
  ctx.translate(bx, by)
  ctx.rotate((s.heading * Math.PI) / 180)
  ctx.fillStyle = '#e8c34a'
  ctx.beginPath()
  ctx.moveTo(0, -16)
  ctx.lineTo(9, 12)
  ctx.lineTo(-9, 12)
  ctx.closePath()
  ctx.fill()
  ctx.strokeStyle = '#3a2b0a'
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.restore()
  return { bx, by, bankTopY, bankBotY }
}

interface Hud extends BoatState {
  across: number
  along: number
  landed: boolean
}

export function RiverCrossingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const boatRef = useRef<BoatState>({ across: 0, along: 0, speed: 0, heading: 0 })
  const input = useRef<BoatInput>({ up: false, left: false, right: false })
  const [keys, setKeys] = useState<BoatInput>({ up: false, left: false, right: false })
  const [current, setCurrent] = useState(2)
  const [focused, setFocused] = useState(false)
  const [hud, setHud] = useState<Hud>({ across: 0, along: 0, speed: 0, heading: 0, landed: false })
  const tRef = useRef(0)
  const landedRef = useRef(false)

  const setKey = useCallback((k: keyof BoatInput, on: boolean) => {
    if (input.current[k] === on) return
    input.current = { ...input.current, [k]: on }
    setKeys(input.current)
  }, [])

  const reset = () => {
    boatRef.current = { across: 0, along: 0, speed: 0, heading: 0 }
    tRef.current = 0
    landedRef.current = false
  }

  useEffect(() => {
    const cv = canvasRef.current
    const ctx = cv?.getContext('2d')
    if (!cv || !ctx) return
    let last = performance.now()
    let id = 0
    let frame = 0
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!landedRef.current) {
        tRef.current += dt
        boatRef.current = stepBoat(boatRef.current, input.current, current, dt)
        if (boatRef.current.across >= RIVER.width) landedRef.current = true
      }
      drawRiver(ctx, boatRef.current, current, tRef.current)
      if (frame % 3 === 0) setHud({ ...boatRef.current, landed: landedRef.current })
      frame++
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [current])

  const onKey = (e: React.KeyboardEvent, on: boolean) => {
    const k = KEYS[e.key]
    if (!k) return
    e.preventDefault()
    e.stopPropagation()
    setKey(k, on)
  }

  const live = riverCrossing(hud.speed, hud.heading, current, RIVER.width)
  const cancelHeading = headingToCancelDrift(RIVER.maxSpeed, current)

  // zoom panel: resolve the boat's OWN velocity (relative to water) into across / along components
  const zcx = 150, zcy = 190, zS = 22
  const across = hud.speed * Math.cos((hud.heading * Math.PI) / 180)
  const along = hud.speed * Math.sin((hud.heading * Math.PI) / 180)
  const bex = zcx + along * zS, bey = zcy - across * zS

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div>
          <div
            ref={wrapRef}
            tabIndex={0}
            role="application"
            aria-label="River crossing game. Click here, then use the arrow keys: up for the engine, left and right to steer the boat's heading."
            onKeyDown={(e) => onKey(e, true)}
            onKeyUp={(e) => onKey(e, false)}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); (['up', 'left', 'right'] as const).forEach((k) => setKey(k, false)) }}
            className="relative overflow-hidden rounded-[var(--radius-panel)] focus:outline-none"
            style={{ border: `3px solid ${focused ? 'var(--accent)' : 'var(--border-strong)'}` }}
          >
            <canvas ref={canvasRef} width={W} height={H} className="block w-full" role="img" aria-label="Top-down view of a boat crossing a flowing river, with the far bank at the top" />
            {!focused && (
              <button onClick={() => wrapRef.current?.focus()} className="absolute inset-0 flex items-center justify-center text-sm font-black" style={{ background: 'rgba(0,0,0,0.45)', color: '#fff' }}>
                ▶ Click to play · ▲ engine · ◀ ▶ steer the heading
              </button>
            )}
            <div className="absolute left-2 top-2 rounded-[var(--radius-control)] px-2.5 py-1 text-xs font-black" style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}>
              boat speed {f1(hud.speed)} m s⁻¹ · heading {f1(hud.heading, 0)}°
            </div>
            {hud.landed && (
              <div className="absolute inset-x-2 top-2 rounded-[var(--radius-control)] px-2.5 py-1 text-center text-xs font-black" style={{ background: '#1FA98A', color: '#fff' }}>
                🏁 Reached the far bank, drifted {f1(hud.along)} m downstream from the start
              </div>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="On-screen controls">
            {([['left', '◀'], ['up', '▲'], ['right', '▶']] as const).map(([k, sym]) => (
              <button key={k} aria-label={`${k} arrow`} aria-pressed={keys[k]} onPointerDown={(e) => { e.preventDefault(); setKey(k, true) }} onPointerUp={() => setKey(k, false)} onPointerLeave={() => setKey(k, false)} onPointerCancel={() => setKey(k, false)} className="h-11 w-11 rounded-[var(--radius-control)] text-lg font-black focus:outline-none focus:ring-2" style={keys[k] ? btn1 : btn2}>{sym}</button>
            ))}
            <span className="mx-1" />
            <button onClick={reset} className={ctl} style={btn2}>↺ RESTART</button>
          </div>
          <div className="mt-3"><Slider label="River current" value={current} min={0} max={3} step={0.5} unit="m s⁻¹" onChange={(v) => { setCurrent(v); reset() }} /></div>
        </div>

        <figure className="m-0 p-2" style={fig}>
          <div className="px-1 pb-1 text-xs font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🔍 ZOOM: RESOLVING THE BOAT&apos;S VELOCITY</div>
          <svg viewBox="0 0 300 220" className="w-full" role="img" aria-label={`Resolving the boat's own velocity, ${f1(hud.speed)} metres per second at ${f1(hud.heading, 0)} degrees. Across the river: ${f1(across)} metres per second. Along the river: ${f1(along)} metres per second.`}>
            <line x1="20" y1={zcy} x2="280" y2={zcy} stroke="var(--border-strong)" strokeWidth="1.5" />
            <line x1={zcx} y1="20" x2={zcx} y2="215" stroke="var(--border-strong)" strokeWidth="1.5" />
            <line x1={zcx} y1={zcy} x2={bex} y2={zcy} stroke="var(--accent-2)" strokeWidth="2.5" strokeDasharray="5 4" />
            <line x1={bex} y1={zcy} x2={bex} y2={bey} stroke="var(--warning)" strokeWidth="2.5" strokeDasharray="5 4" />
            <Arrow x1={zcx} y1={zcy} x2={bex} y2={bey} color="var(--success)" w={4} />
            <Arrow x1={zcx - 60} y1={zcy + 8} x2={zcx + 60} y2={zcy + 8} color="var(--accent)" w={3} />
            <text x={zcx + 62} y={zcy + 12} fontSize="10.5" fontWeight="800" fill="var(--accent)">current {f1(current)} m s⁻¹</text>
            <text x="10" y="16" fontSize="11" fontWeight="900" fill="var(--success)">boat velocity (relative to water)</text>
            <text x="10" y="204" fontSize="11" fontWeight="800" fill="var(--accent-2)">along (downstream) = {f1(along)} m s⁻¹</text>
            <text x="10" y="188" fontSize="11" fontWeight="800" fill="var(--warning)">across = {f1(across)} m s⁻¹</text>
          </svg>
        </figure>
      </div>

      <div className="grid gap-3 sm:grid-cols-3" aria-live="off">
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: '#2ecc71' }}>
          <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🟢 BOAT VELOCITY (water)</div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{f1(hud.speed)} m s⁻¹ at {f1(hud.heading, 0)}°</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>across {f1(across)}, along {f1(along)}</div>
        </div>
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: '#4aa8ff' }}>
          <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🔵 RIVER CURRENT</div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{f1(current)} m s⁻¹ downstream</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>always along the bank</div>
        </div>
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={{ ...panel, borderColor: 'var(--warning)' }}>
          <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>🟡 RESULTANT (over ground)</div>
          <div className="font-black" style={{ color: 'var(--text)' }}>{f1(live.resultantSpeed)} m s⁻¹</div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{Number.isFinite(live.time) ? `crosses in ${f1(live.time)} s, drifts ${f1(live.drift)} m` : 'not making progress across'}</div>
        </div>
      </div>

      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        {!Number.isNaN(cancelHeading) ? (
          <div style={{ color: 'var(--text)' }}>To land directly opposite your start, aim upstream at <strong>{f1(Math.abs(cancelHeading), 0)}°</strong> (heading {f1(cancelHeading, 0)}°) once at full speed.</div>
        ) : (
          <div style={{ color: 'var(--warning)' }}>The current ({f1(current)} m s⁻¹) is faster than the boat&apos;s top speed ({RIVER.maxSpeed} m s⁻¹): no heading can cancel the drift completely.</div>
        )}
      </div>
    </div>
  )
}
