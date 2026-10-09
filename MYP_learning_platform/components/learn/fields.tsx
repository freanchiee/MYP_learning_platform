'use client'
import { useEffect, useRef, useState } from 'react'
import {
  E_CHARGE, M_EARTH, elecField, escapeSpeed, gravField, orbitEnergies, orbitPeriod, orbitSpeed, sci, springEnergy,
} from '@/lib/learn/fields-model'

// Theme D labs: field lines and field strength, work done on a spring (area under F–x), and a circular orbit.
// Chrome uses theme tokens; --accent (purple) marks the simulation, matching the other DP Physics labs.
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'

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
  if (len < 2) return null
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
    const f = () => setR(q.matches)
    q.addEventListener('change', f)
    return () => q.removeEventListener('change', f)
  }, [])
  return r
}

const Readout = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="rounded-[var(--radius-control)] px-3 py-2 text-center" style={panel}>
    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>{label}</div>
    <div className="text-base font-extrabold" style={{ color: accent ? 'var(--accent)' : 'var(--text)', fontFamily: 'var(--font-mono)' }}>{value}</div>
  </div>
)

// ------------------------------------------------------------------ 1 · field lines and field strength
type Source = 'mass' | 'pos' | 'neg'

export function FieldLinesLab() {
  const [src, setSrc] = useState<Source>('mass')
  const [strength, setStrength] = useState(6) // mass: ×10²⁴ kg ; charge: μC
  const [step, setStep] = useState(4) // distance steps 1..10
  const isMass = src === 'mass'
  // distance: mass 1 ×10⁶ m per step starting 7 (just above Earth's surface); charge 0.1 m per step
  const r = isMass ? (6 + step) * 1e6 : step * 0.1
  const M = strength * 1e24
  const Q = strength * 1e-6
  const field = isMass ? gravField(M, r) : elecField(Q, r)
  const fieldMax = isMass ? gravField(M, 7e6) : elecField(Q, 0.1)
  const unit = isMass ? 'N kg⁻¹' : 'N C⁻¹'
  const cx = 120, cy = 130
  const px = 36 + (step - 1) * 22 // test particle x offset from the source, in px
  const inward = src !== 'pos' // gravity and a negative source: lines point IN
  const lines = Array.from({ length: 12 }, (_, i) => (i / 12) * 2 * Math.PI)
  const forceLen = 14 + 70 * (field / fieldMax)
  // The force on the test object points the way the field points for a mass and for a + test charge.
  const colour = isMass ? 'var(--accent)' : src === 'pos' ? 'var(--danger)' : 'var(--info, var(--accent))'
  const testLabel = isMass ? '1 kg test mass' : '+1 μC test charge'

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap gap-2" role="group" aria-label="What creates the field">
        {([['mass', 'Mass M'], ['pos', 'Charge +Q'], ['neg', 'Charge −Q']] as const).map(([k, t]) => (
          <button key={k} onClick={() => setSrc(k)} className={ctl} style={src === k ? btn1 : btn2} aria-pressed={src === k}>{t}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 290" className="w-full" style={fig} role="img" aria-label={`Field lines around a ${isMass ? 'mass' : src === 'pos' ? 'positive charge' : 'negative charge'}, with a test particle ${isMass ? (r / 1e6).toFixed(0) + ' million metres' : r.toFixed(1) + ' metres'} away`}>
        {lines.map((a, i) => {
          const r0 = 24, r1 = 100
          const x0 = cx + Math.cos(a) * r0, y0 = cy + Math.sin(a) * r0
          const x1 = cx + Math.cos(a) * r1, y1 = cy + Math.sin(a) * r1
          return inward ? <Arrow key={i} x1={x1} y1={y1} x2={x0} y2={y0} color="var(--text-subtle)" w={2} /> : <Arrow key={i} x1={x0} y1={y0} x2={x1} y2={y1} color="var(--text-subtle)" w={2} />
        })}
        <circle cx={cx} cy={cy} r={20} fill={isMass ? 'var(--accent)' : src === 'pos' ? 'var(--danger)' : 'var(--info, var(--accent))'} opacity={0.9} />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--text-on-accent)">{isMass ? 'M' : src === 'pos' ? '+' : '−'}</text>
        {/* distance marker and the test particle */}
        <line x1={cx} y1={cy + 128} x2={cx + px + 20} y2={cy + 128} stroke="var(--text-subtle)" strokeDasharray="4 4" /><line x1={cx} y1={cy + 122} x2={cx} y2={cy + 134} stroke="var(--text-subtle)" /><line x1={cx + px + 20} y1={cy + 122} x2={cx + px + 20} y2={cy + 134} stroke="var(--text-subtle)" />
        <text x={cx + (px + 20) / 2} y={cy + 148} textAnchor="middle" fontSize="12" fill="var(--text-muted)">r = {isMass ? `${(r / 1e6).toFixed(0)} × 10⁶ m` : `${r.toFixed(1)} m`}</text>
        <circle cx={cx + px + 20} cy={cy} r={7} fill="none" stroke="var(--text)" strokeWidth={2} />
        <text x={cx + px + 20} y={cy - 14} textAnchor="middle" fontSize="11" fill="var(--text-muted)">{testLabel}</text>
        {/* force on the test particle: toward the source for gravity and for a charge of the opposite sign */}
        {isMass || src === 'neg' ? (
          <Arrow x1={cx + px + 20} y1={cy + 28} x2={cx + px + 20 - forceLen} y2={cy + 28} color={colour} w={4} />
        ) : (
          <Arrow x1={cx + px + 20} y1={cy + 28} x2={cx + px + 20 + forceLen} y2={cy + 28} color={colour} w={4} />
        )}
        <text x={cx + px + 20} y={cy + 46} textAnchor="middle" fontSize="11" fill="var(--text-muted)">force on it</text>
        <g transform="translate(318 26)">
          <text fontSize="14" fontWeight="800" fill="var(--text)">{isMass ? 'g = GM / r²' : 'E = kQ / r²'}</text>
          <text y={24} fontSize="12" fill="var(--text-muted)">{isMass ? 'lines point IN' : src === 'pos' ? 'lines point OUT' : 'lines point IN'}</text>
          <text y={42} fontSize="12" fill="var(--text-muted)">{isMass ? 'gravity only attracts' : src === 'pos' ? 'away from +Q' : 'toward −Q'}</text>
          <text y={66} fontSize="12" fill="var(--text-muted)">field direction =</text>
          <text y={82} fontSize="12" fill="var(--text-muted)">where a {isMass ? 'mass' : '+ test charge'} would go</text>
        </g>
      </svg>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label={isMass ? 'Mass of the source' : 'Charge of the source'} value={strength} min={1} max={10} step={1} unit={isMass ? '× 10²⁴ kg' : 'μC'} onChange={setStrength} />
        <Slider label="Distance of the test particle" value={step} min={1} max={10} step={1} unit={isMass ? `(${6 + step} × 10⁶ m)` : `(${(step * 0.1).toFixed(1)} m)`} onChange={setStep} />
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <Readout label={isMass ? 'Gravitational field strength g' : 'Electric field strength E'} value={`${sci(field)} ${unit}`} accent />
        <Readout label={`Force on ${isMass ? '1 kg' : '+1 μC'}`} value={`${sci(isMass ? field : field * 1e-6)} N`} />
        <Readout label="Compared with the closest point" value={`× ${(field / fieldMax).toFixed(2)}`} />
      </div>
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        Move the test particle twice as far away: the field strength drops to a quarter. That is the inverse-square law: g and E are proportional to 1 / r². (The source is {isMass ? `${strength} × 10²⁴ kg; Earth is ${(M_EARTH / 1e24).toFixed(2)} × 10²⁴ kg` : `${strength} μC; one electron is ${(E_CHARGE * 1e6).toExponential(1)} μC`}.)
      </p>
    </div>
  )
}

// ------------------------------------------------------------------ 4 · work done on a spring is the area under F–x
export function SpringWorkLab() {
  const [k, setK] = useState(40)
  const [x, setX] = useState(0.1)
  const F = k * x
  const E = springEnergy(k, x)
  const W = 360, H = 200, L = 46, B = 168, T = 20
  const xMax = 0.2, fMax = 100 * xMax // k up to 100 N/m
  const sx = (v: number) => L + (v / xMax) * (W - L - 12)
  const sy = (v: number) => B - (v / fMax) * (B - T)
  return (
    <div className="grid gap-3">
      <svg viewBox={`0 0 ${W} ${H + 46}`} className="w-full" style={fig} role="img" aria-label={`Force against extension for a spring of constant ${k} newtons per metre, shaded to extension ${x.toFixed(2)} metres`}>
        <line x1={L} y1={B} x2={W - 8} y2={B} stroke="var(--text-subtle)" />
        <line x1={L} y1={B} x2={L} y2={T - 6} stroke="var(--text-subtle)" />
        <text x={W - 10} y={B + 31} textAnchor="end" fontSize="12" fill="var(--text-muted)">extension x (m)</text>
        <text x={L - 6} y={T - 8} fontSize="12" fill="var(--text-muted)">F (N)</text>
        {[0, 0.05, 0.1, 0.15, 0.2].map((t) => <text key={t} x={sx(t)} y={B + 14} textAnchor="middle" fontSize="10" fill="var(--text-subtle)">{t}</text>)}
        {[0, 5, 10, 15, 20].map((t) => <text key={t} x={L - 6} y={sy(t) + 3} textAnchor="end" fontSize="10" fill="var(--text-subtle)">{t}</text>)}
        <polygon points={`${sx(0)},${sy(0)} ${sx(x)},${sy(0)} ${sx(x)},${sy(F)}`} fill="var(--accent)" opacity={0.28} />
        <line x1={sx(0)} y1={sy(0)} x2={sx(xMax)} y2={sy(k * xMax)} stroke="var(--accent)" strokeWidth={3} />
        <line x1={sx(x)} y1={sy(0)} x2={sx(x)} y2={sy(F)} stroke="var(--text)" strokeDasharray="4 3" />
        <circle cx={sx(x)} cy={sy(F)} r={5} fill="var(--accent)" />
        <text x={sx(x) / 2 + L / 2 + 4} y={sy(F / 3)} fontSize="13" fontWeight="800" fill="var(--text)">area = WD</text>
        {/* the spring itself */}
        <g transform={`translate(${L} ${H + 22})`}>
          <rect x={-10} y={-10} width={10} height={20} fill="var(--text-subtle)" />
          <polyline fill="none" stroke="var(--text)" strokeWidth={2} points={Array.from({ length: 13 }, (_, i) => `${(i / 12) * (50 + x * 600)},${i % 2 ? -8 : 8}`).join(' ')} />
          <rect x={50 + x * 600} y={-12} width={14} height={24} rx={3} fill="var(--accent)" />
        </g>
      </svg>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Spring constant k" value={k} min={10} max={100} step={10} unit="N m⁻¹" onChange={setK} />
        <Slider label="Extension x" value={x} min={0} max={0.2} step={0.01} unit="m" onChange={setX} />
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <Readout label="Force now, F = kx" value={`${sci(F)} N`} />
        <Readout label="Area = ½ × x × F" value={`${sci(0.5 * x * F)} J`} />
        <Readout label="Elastic PE = ½kx²" value={`${sci(E)} J`} accent />
      </div>
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>The force grows as you stretch, so you cannot use force × distance with one force. The work is the area of the triangle under the line, and that gives ½kx². Double x and the energy goes up four times.</p>
    </div>
  )
}

// ------------------------------------------------------------------ 5 · a circular orbit
export function OrbitLab() {
  const reduced = useReducedMotion()
  const [rM, setRM] = useState(6.8) // orbital radius, ×10⁶ m (centre to centre)
  const [playing, setPlaying] = useState(true)
  const [speedUp, setSpeedUp] = useState(1)
  const [angle, setAngle] = useState(0)
  const raf = useRef<number | null>(null)
  const last = useRef<number | null>(null)

  const r = rM * 1e6
  const v = orbitSpeed(M_EARTH, r)
  const T = orbitPeriod(M_EARTH, r)
  const vEsc = escapeSpeed(M_EARTH, r)
  const en = orbitEnergies(M_EARTH, 500, r)
  const T0 = orbitPeriod(M_EARTH, 6.8e6) // low orbit takes about 4 s on screen at speed ×1
  const omega = ((2 * Math.PI) / T) * (T0 / 4) * speedUp // rad per screen second

  useEffect(() => {
    if (reduced) setPlaying(false)
  }, [reduced])
  useEffect(() => {
    if (!playing) { last.current = null; return }
    const tick = (t: number) => {
      if (last.current !== null) setAngle((a) => (a + omega * Math.min(0.05, (t - last.current!) / 1000)) % (2 * Math.PI))
      last.current = t
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current); last.current = null }
  }, [playing, omega])

  // Not to scale: the Earth is drawn larger than its true size relative to the orbits, so a low orbit is still visible.
  const cx = 170, cy = 160
  const earthPx = 34
  const rpx = 46 + (96 * (r - 6.8e6)) / (4.3e7 - 6.8e6)
  const sx = cx + Math.cos(angle) * rpx, sy = cy - Math.sin(angle) * rpx
  const bar = (x: number) => `${(Math.abs(x) / 3e10) * 100}%`

  return (
    <div className="grid gap-3">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <svg viewBox="0 0 340 320" className="w-full" style={fig} role="img" aria-label={`A satellite on a circular orbit of radius ${rM} million metres around the Earth, speed ${sci(v)} metres per second`}>
          <circle cx={cx} cy={cy} r={rpx} fill="none" stroke="var(--text-subtle)" strokeDasharray="5 5" />
          <circle cx={cx} cy={cy} r={earthPx} fill="var(--accent)" opacity={0.85} />
          <text x={cx} y={cy + 24} textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--text-on-accent)">Earth</text>
          <line x1={cx} y1={cy} x2={sx} y2={sy} stroke="var(--text-muted)" strokeWidth={1.5} />
          <circle cx={sx} cy={sy} r={6} fill="var(--text)" />
          {/* velocity is tangent to the orbit; the pull (centripetal force) points at the centre */}
          <Arrow x1={sx} y1={sy} x2={sx - Math.sin(angle) * 34} y2={sy - Math.cos(angle) * 34} color="var(--success)" w={3} />
          <Arrow x1={sx} y1={sy} x2={sx - Math.cos(angle) * 30} y2={sy + Math.sin(angle) * 30} color="var(--danger)" w={3} />
          <text x={12} y={20} fontSize="12" fill="var(--success)" fontWeight="800">→ velocity (tangent)</text>
          <text x={12} y={36} fontSize="12" fill="var(--danger)" fontWeight="800">→ gravity = centripetal force (to the centre)</text>
          <text x={cx} y={310} textAnchor="middle" fontSize="11" fill="var(--text-muted)">r = {rM.toFixed(1)} × 10⁶ m from the centre (Earth drawn larger than true scale)</text>
        </svg>
        <div className="grid content-start gap-2">
          <Readout label="Orbital speed v = √(GM / r)" value={`${sci(v)} m s⁻¹`} accent />
          <Readout label="Period T = 2πr / v" value={`${sci(T)} s  (${(T / 3600).toFixed(2)} h)`} />
          <Readout label="T² / r³ (same for every orbit)" value={`${sci((T * T) / (r * r * r), 4)} s² m⁻³`} />
          <Readout label="Escape speed = √2 × v" value={`${sci(vEsc)} m s⁻¹`} />
        </div>
      </div>
      <div className="rounded-[var(--radius-panel)] p-3" style={panel}>
        <div className="mb-2 text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Energy of a 500 kg satellite here</div>
        {[['KE = +GMm / 2r', en.ke, 'var(--success)'], ['GPE = −GMm / r', en.gpe, 'var(--danger)'], ['TE = KE + GPE = −GMm / 2r', en.te, 'var(--accent)']].map(([name, val, col]) => (
          <div key={name as string} className="mb-1.5 grid grid-cols-[170px_minmax(0,1fr)_92px] items-center gap-2 text-xs">
            <span style={{ color: 'var(--text-muted)' }}>{name as string}</span>
            <span className="relative h-3 rounded-full" style={{ background: 'var(--surface)' }}>
              <span className="absolute top-0 h-3 rounded-full" style={{ background: col as string, width: `calc(${bar(val as number)} / 2)`, [(val as number) < 0 ? 'right' : 'left']: '50%' }} />
              <span className="absolute left-1/2 top-[-2px] h-4 w-px" style={{ background: 'var(--text-subtle)' }} />
            </span>
            <span className="text-right font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>{sci(val as number, 2)} J</span>
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Orbital radius" value={rM} min={6.8} max={43} step={0.2} unit="× 10⁶ m" onChange={setRM} />
        <Slider label="Animation speed" value={speedUp} min={0.5} max={6} step={0.5} unit="×" onChange={setSpeedUp} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className={ctl} style={btn1} onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
        {!playing && <input type="range" min={0} max={6.28} step={0.02} value={angle} onChange={(e) => setAngle(Number(e.target.value))} aria-label="Satellite position" className="flex-1" style={{ accentColor: 'var(--accent)' }} />}
        <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>Low orbit (6.8 × 10⁶ m) goes round in about 4 s at ×1. Everything else is slower in proportion to its real period.</span>
      </div>
    </div>
  )
}
