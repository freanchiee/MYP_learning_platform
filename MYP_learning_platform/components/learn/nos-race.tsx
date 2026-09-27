'use client'
import { useEffect, useRef, useState } from 'react'
import { CAR, newCar, stepCar, type CarInput, type CarState } from '@/lib/learn/car-model'

// "Can we model a game?" — a drag-strip nitrous racer. Engine force vs. drag+rolling resistance gives a
// top speed; holding NOS adds extra engine force for a limited time, giving a NEW, higher top speed —
// then, once the tank runs dry, drag exceeds the (now-normal) engine force and speed decays back down
// to the ORIGINAL top speed. Same physics as the honey/water/air lab and the skydiver, run in reverse:
// here a bigger force pushes the balance point UP instead of a bigger k pulling it DOWN.

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties

const f1 = (x: number, d = 1) => {
  if (Math.abs(x) < 1e-9) return '0'
  const s = x.toFixed(d)
  return s === '-0' ? '0' : s
}

const NOS_BURN = 4 // seconds of held NOS to empty a full tank
const NOS_RECHARGE = 15 // seconds to refill from empty, while not held
const WINDOW = 20 // seconds of history shown on the graph

const V_NORMAL = Math.sqrt((CAR.Feng - CAR.roll) / CAR.drag)
const V_BOOST = Math.sqrt((CAR.Feng + CAR.Fnos - CAR.roll) / CAR.drag)

interface Sample { t: number; v: number }

export function NosRaceLab() {
  const carRef = useRef<CarState>(newCar(0))
  const fuelRef = useRef(1)
  const nosHeldRef = useRef(false)
  const runningRef = useRef(false)
  const tRef = useRef(0)
  const histRef = useRef<Sample[]>([])
  const bestRef = useRef(0)

  const [running, setRunning] = useState(false)
  const [nosHeld, setNosHeld] = useState(false)
  const [hud, setHud] = useState({ v: 0, t: 0, fuel: 1, engine: 0, resist: 0, hist: [] as Sample[], best: 0 })

  useEffect(() => { runningRef.current = running }, [running])
  useEffect(() => { nosHeldRef.current = nosHeld }, [nosHeld])

  const reset = () => {
    carRef.current = newCar(0)
    fuelRef.current = 1
    tRef.current = 0
    histRef.current = []
    bestRef.current = 0
    setNosHeld(false)
    setHud({ v: 0, t: 0, fuel: 1, engine: 0, resist: 0, hist: [], best: 0 })
  }

  useEffect(() => {
    let id = 0
    let last = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (runningRef.current) {
        const nosActive = nosHeldRef.current && fuelRef.current > 0
        const n = Math.max(1, Math.ceil(dt / (1 / 240)))
        const h = dt / n
        const inp: CarInput = { up: true, down: false, left: false, right: false, nos: nosActive }
        let lastForces = { engine: 0, resist: 0 }
        for (let i = 0; i < n; i++) {
          const r = stepCar(carRef.current, inp, h)
          carRef.current = r.state
          lastForces = r.forces
          // recharge only while NOT held — once it runs dry mid-hold it stays empty until released, it does not flicker back on
          fuelRef.current = Math.max(0, Math.min(1, fuelRef.current + (nosActive ? -h / NOS_BURN : nosHeldRef.current ? 0 : h / NOS_RECHARGE)))
          tRef.current += h
        }
        if (carRef.current.v > bestRef.current) bestRef.current = carRef.current.v
        if (frame % 3 === 0) {
          histRef.current.push({ t: tRef.current, v: carRef.current.v })
          const cutoff = tRef.current - WINDOW - 1
          while (histRef.current.length && histRef.current[0].t < cutoff) histRef.current.shift()
        }
        if (frame % 3 === 0) {
          setHud({ v: carRef.current.v, t: tRef.current, fuel: fuelRef.current, engine: lastForces.engine, resist: lastForces.resist, hist: histRef.current.slice(), best: bestRef.current })
        }
      }
      frame++
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  const onNos = (e: React.KeyboardEvent, on: boolean) => {
    if (e.key !== ' ' && e.key.toLowerCase() !== 'n') return
    e.preventDefault()
    setNosHeld(on)
  }

  const net = hud.engine - hud.resist
  const balanced = running && hud.v > 1 && Math.abs(net) < 40
  const kmh = hud.v * 3.6

  // ---- scene ----
  const W = 400, H = 150, roadY = 112
  const scroll = (running ? (hud.v * hud.t * 30) % 40 : 0)
  const dashes = Array.from({ length: 12 }, (_, i) => i * 40 - scroll)
  const flame = nosHeld && hud.fuel > 0

  // ---- graph ----
  const gx0 = Math.max(0, hud.t - WINDOW), gx1 = Math.max(WINDOW, hud.t)
  const GW = 400, GH = 150, padL = 34, padB = 20, padT = 10
  const vMax = Math.max(V_BOOST * 1.1, 20)
  const X = (t: number) => padL + ((t - gx0) / (gx1 - gx0)) * (GW - padL - 8)
  const Y = (v: number) => GH - padB - (v / vMax) * (GH - padB - padT)
  const path = hud.hist.length > 1 ? hud.hist.map((p, i) => `${i === 0 ? 'M' : 'L'} ${X(p.t)} ${Y(p.v)}`).join(' ') : ''

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <div
            tabIndex={0}
            role="application"
            aria-label="Drag-strip racing game. Press start, then hold space or N for nitrous."
            onKeyDown={(e) => onNos(e, true)}
            onKeyUp={(e) => onNos(e, false)}
            className="relative overflow-hidden rounded-[var(--radius-panel)] focus:outline-none"
            style={{ border: '3px solid var(--border-strong)' }}
          >
            <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label={`A car on a drag strip, moving at ${f1(hud.v)} metres per second`}>
              <rect width={W} height={H} fill="#1b2735" />
              <rect y={roadY} width={W} height={H - roadY} fill="#33404d" />
              {dashes.map((x, i) => <rect key={i} x={x} y={roadY + 16} width="20" height="4" fill="#e8c547" opacity="0.8" />)}
              {flame && (
                <g opacity="0.95">
                  <polygon points={`60,${roadY - 16} 30,${roadY - 22} 40,${roadY - 12} 20,${roadY - 8} 42,${roadY - 2} 60,${roadY - 4}`} fill="url(#nosFlame)" />
                </g>
              )}
              <defs>
                <linearGradient id="nosFlame" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7c5cff" />
                  <stop offset="50%" stopColor="#4fd6ff" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
              {/* car, side view */}
              <g transform="translate(70,0)">
                <rect x="0" y={roadY - 24} width="66" height="20" rx="5" fill={flame ? '#ff5f6d' : '#e0562f'} />
                <polygon points={`14,${roadY - 24} 26,${roadY - 38} 50,${roadY - 38} 58,${roadY - 24}`} fill="#dfeaff" opacity="0.9" />
                <circle cx="16" cy={roadY - 4} r="9" fill="#111" />
                <circle cx="52" cy={roadY - 4} r="9" fill="#111" />
                <circle cx="16" cy={roadY - 4} r="3.5" fill="#888" />
                <circle cx="52" cy={roadY - 4} r="3.5" fill="#888" />
              </g>
              <text x="10" y="18" fontSize="10" fill="#cfd8e3" fontWeight="bold">{f1(hud.v)} m s⁻¹ · {f1(kmh, 0)} km/h</text>
              {balanced && <text x="10" y="32" fontSize="9" fill="#7dffb0" fontWeight="bold">forces balanced — top speed</text>}
            </svg>
            {/* NOS fuel bar */}
            <div className="absolute right-2 top-2 w-24">
              <div className="text-right text-[9px] font-black" style={{ color: '#cfd8e3' }}>NOS</div>
              <div className="h-2.5 w-full overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="h-full rounded-full transition-[width]" style={{ width: `${hud.fuel * 100}%`, background: hud.fuel > 0 ? 'linear-gradient(90deg,#7c5cff,#4fd6ff)' : '#555' }} />
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={() => { if (!running) reset(); setRunning((r) => !r) }}
              className={ctl}
              style={running ? btn2 : btn1}
            >
              {running ? '⏸ PAUSE' : hud.t > 0 ? '▶ RESUME' : '▶ START ENGINE'}
            </button>
            <button onClick={reset} className={ctl} style={btn2}>↺ RESET</button>
            <button
              aria-pressed={nosHeld}
              disabled={!running}
              onPointerDown={(e) => { e.preventDefault(); setNosHeld(true) }}
              onPointerUp={() => setNosHeld(false)}
              onPointerLeave={() => setNosHeld(false)}
              className={`${ctl} disabled:opacity-40`}
              style={nosHeld ? { background: 'linear-gradient(90deg,#7c5cff,#4fd6ff)', color: '#fff' } : btn2}
            >
              🔥 HOLD FOR NOS
            </button>
            <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>or hold Space / N — click the game first</span>
          </div>
        </div>

        <div>
          <figure className="p-2" style={fig}>
            <svg viewBox={`0 0 ${GW} ${GH}`} className="w-full" role="img" aria-label="Speed against time graph, showing the climb to top speed, the nitrous spike, and the decay back down.">
              <line x1={padL} y1={GH - padB} x2={GW - 4} y2={GH - padB} stroke="var(--border-strong)" strokeWidth="1" />
              <line x1={padL} y1={padT} x2={padL} y2={GH - padB} stroke="var(--border-strong)" strokeWidth="1" />
              <line x1={padL} y1={Y(V_NORMAL)} x2={GW - 4} y2={Y(V_NORMAL)} stroke="var(--success)" strokeWidth="1" strokeDasharray="4 3" />
              <text x={GW - 6} y={Y(V_NORMAL) - 3} fontSize="8" textAnchor="end" fill="var(--success)">original top speed</text>
              <line x1={padL} y1={Y(V_BOOST)} x2={GW - 4} y2={Y(V_BOOST)} stroke="#7c5cff" strokeWidth="1" strokeDasharray="4 3" />
              <text x={GW - 6} y={Y(V_BOOST) - 3} fontSize="8" textAnchor="end" fill="#7c5cff">nitrous top speed</text>
              {path && <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" />}
              <text x="4" y={padT + 4} fontSize="8" fill="var(--text-muted)">v</text>
              <text x={GW - 4} y={GH - 4} fontSize="8" textAnchor="end" fill="var(--text-muted)">t</text>
            </svg>
          </figure>
          <div className="mt-3 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
            <div>Engine force: <strong>{f1(hud.engine, 0)} N</strong>{nosHeld && hud.fuel > 0 && <span style={{ color: '#7c5cff' }}> (boosted)</span>}</div>
            <div>Drag + rolling resistance: <strong>{f1(hud.resist, 0)} N</strong></div>
            <div>Net force: <strong>{f1(net, 0)} N</strong></div>
            <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Best speed so far: {f1(hud.best)} m s⁻¹. Original top speed ≈ {f1(V_NORMAL)} m s⁻¹, nitrous top speed ≈ {f1(V_BOOST)} m s⁻¹.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
