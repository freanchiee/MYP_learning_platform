'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { WidgetId } from '@/data/learn/physics'
import {
  C, G, H, inclineAcceleration, massEnergy, pendulumPeriod, photonEnergy, relativePosition, slideAngle, zenoSum,
} from '@/lib/learn/physics-models'

// ---------- shared bits ----------
const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }

function Feedback({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <div
      role="status"
      className="mt-3 rounded-[var(--radius-panel)] px-3.5 py-2.5 text-sm"
      style={{ background: ok ? 'var(--success-surface)' : 'var(--warning-surface)', color: 'var(--text)', border: `1px solid ${ok ? 'var(--success)' : 'var(--warning)'}` }}
    >
      <strong>{ok ? 'Correct. ' : 'Not quite. '}</strong>
      {children}
    </div>
  )
}

const usePrefersReducedMotion = () => {
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

// ---------- 0.1 energy generator (randomised worked problem) ----------
const MASSES = [0.3, 0.7, 0.9, 2.0, 4.0, 5.0, 6.0, 8.0]
const pow10 = (x: number) => Math.floor(Math.log10(x))
function parseSci(s: string): number | null {
  const t = s.trim().replace(/\s+/g, '').replace('×', 'x').replace(/joules?|j$/i, '')
  const m = t.match(/^([+-]?\d*\.?\d+)(?:(?:e|x\*?10\^?|\*10\^?)([+-]?\d+))?$/i)
  if (!m) return null
  return Number(m[1]) * Math.pow(10, m[2] ? Number(m[2]) : 0)
}
function EnergyGenerator() {
  const [m, setM] = useState<number | null>(null)
  const [ans, setAns] = useState('')
  const [res, setRes] = useState<{ ok: boolean; msg: string } | null>(null)
  const [f, setF] = useState(5)
  useEffect(() => setM(MASSES[Math.floor(Math.random() * MASSES.length)]), [])
  const next = () => {
    setM((cur) => {
      const pool = MASSES.filter((x) => x !== cur)
      return pool[Math.floor(Math.random() * pool.length)]
    })
    setAns('')
    setRes(null)
  }
  const E = m == null ? 0 : massEnergy(m)
  const check = () => {
    const v = parseSci(ans)
    if (v == null) return setRes({ ok: false, msg: 'Enter a number, for example 3.6e17 or 3.6 x 10^17. The unit (J) is already shown.' })
    if (Math.abs(v - E) / E <= 0.011) return setRes({ ok: true, msg: `E = mc² = ${m!.toFixed(1)} × (3.00×10⁸)² = ${(E / 10 ** pow10(E)).toFixed(1)}×10^${pow10(E)} J. Two significant figures, as the data gives.` })
    if (Math.abs(v - m! * C) / (m! * C) < 0.02) return setRes({ ok: false, msg: 'You multiplied by c once. In E = mc² the speed of light is squared. This loses the mark for the method.' })
    if (Math.abs(v - E / 1000) / (E / 1000) < 0.02) return setRes({ ok: false, msg: 'This looks like grams were used. Keep the mass in kg to get joules.' })
    setRes({ ok: false, msg: 'Check the arithmetic: E = m × c², with c = 3.00×10⁸ m s⁻¹.' })
  }
  const hf = photonEnergy(f * 1e14)
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-[var(--radius-panel)] p-4" style={panel}>
        <div className="text-[11px] font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>PROBLEM</div>
        <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
          Find the energy equivalent of a mass of <strong>{m == null ? '…' : `${m.toFixed(1)} kg`}</strong>. Use c = 3.00×10⁸ m s⁻¹. Give the answer to 2 significant figures.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <input aria-label="Your answer in joules" value={ans} onChange={(e) => setAns(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && check()} placeholder="e.g. 3.6e17" className={`${ctl} w-40`} style={{ ...btn2, fontFamily: 'var(--font-mono)' }} />
          <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>J</span>
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={check} className={ctl} style={btn1}>CHECK</button>
          <button onClick={next} className={ctl} style={btn2}>NEW PROBLEM</button>
        </div>
        {res && <Feedback ok={res.ok}>{res.msg}</Feedback>}
      </div>
      <div className="rounded-[var(--radius-panel)] p-4" style={panel}>
        <div className="text-[11px] font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>E = hf: ENERGY OF LIGHT</div>
        <div className="mt-3"><Slider label="Frequency f" value={f} min={4} max={8} step={0.1} unit="×10¹⁴ Hz" onChange={setF} /></div>
        <p className="mt-3 text-sm" style={{ color: 'var(--text)' }}>
          E = hf = {(H * 1e34).toFixed(2)}×10⁻³⁴ J s × {f}×10¹⁴ Hz = <strong>{(hf / 1e-19).toFixed(2)}×10⁻¹⁹ J</strong>
        </p>
        <p className="mt-2 text-xs" style={{ color: 'var(--text-muted)' }}>Visible light has frequencies roughly from 4×10¹⁴ Hz (red) to 8×10¹⁴ Hz (violet). Doubling f doubles the energy.</p>
      </div>
    </div>
  )
}

// ---------- generic sorter ----------
interface SortItem { text: string; cat: 0 | 1; why: string }
function Sorter({ cats, items }: { cats: [string, string]; items: SortItem[] }) {
  const [given, setGiven] = useState<Record<number, 0 | 1>>({})
  const right = Object.entries(given).filter(([i, c]) => items[+i].cat === c).length
  return (
    <div>
      <ul className="grid gap-2">
        {items.map((it, i) => {
          const g = given[i]
          const done = g !== undefined
          const ok = done && g === it.cat
          return (
            <li key={it.text} className="rounded-[var(--radius-panel)] p-3" style={panel}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{it.text}</span>
                <span className="flex gap-2">
                  {cats.map((c, ci) => (
                    <button key={c} disabled={ok} aria-pressed={g === ci} onClick={() => setGiven((s) => ({ ...s, [i]: ci as 0 | 1 }))} className={`${ctl} disabled:opacity-60`} style={g === ci ? btn1 : btn2}>{c}</button>
                  ))}
                </span>
              </div>
              {done && (ok ? <p className="mt-2 text-xs" style={{ color: 'var(--success)' }}>Correct. {it.why}</p> : <p className="mt-2 text-xs" style={{ color: 'var(--warning)' }}>Not quite: try the other one. Hint: {it.why}</p>)}
            </li>
          )
        })}
      </ul>
      <p className="mt-3 text-xs font-bold" style={{ color: 'var(--text-muted)' }} aria-live="polite">{right} of {items.length} correct</p>
    </div>
  )
}
const MEASURABLE: SortItem[] = [
  { text: 'The mass of a textbook', cat: 0, why: 'Anyone measuring gets the same value, in kg.' },
  { text: 'How scary a spider looks', cat: 1, why: 'It depends on the person.' },
  { text: 'The temperature of tea', cat: 0, why: 'A thermometer gives one reading for everyone.' },
  { text: 'How delicious a meal is', cat: 1, why: 'Taste is personal.' },
  { text: 'The time for one swing of a pendulum', cat: 0, why: 'A stopwatch gives the same value for anyone.' },
  { text: 'Pain of a sting, "out of 10"', cat: 1, why: 'It is a personal rating, an index.' },
]
const SCALAR_VECTOR: SortItem[] = [
  { text: 'Mass: 3 kg', cat: 0, why: 'Number and unit are complete. No direction needed.' },
  { text: 'A push of 10 N to the right', cat: 1, why: 'The direction changes the effect, so it is needed.' },
  { text: 'Time: 12 s', cat: 0, why: 'Time has no direction in space.' },
  { text: 'Temperature: 300 K', cat: 0, why: 'Temperature is complete without a direction.' },
  { text: 'Pull of gravity on you, 600 N downward', cat: 1, why: 'Down matters: it is a force.' },
]

// ---------- 0.3 SI trainer ----------
const SI = [
  { q: 'Length', a: 'metre (m)' }, { q: 'Mass', a: 'kilogram (kg)' }, { q: 'Time', a: 'second (s)' },
  { q: 'Electric current', a: 'ampere (A)' }, { q: 'Temperature', a: 'kelvin (K)' },
  { q: 'Amount of substance', a: 'mole (mol)' }, { q: 'Luminous intensity', a: 'candela (cd)' },
]
const SI_OPTS = ['metre (m)', 'kilogram (kg)', 'second (s)', 'ampere (A)', 'kelvin (K)', 'mole (mol)', 'candela (cd)', 'joule (J)', 'lux (lx)', 'radian (rad)']
function SiTrainer() {
  const [pick, setPick] = useState<Record<string, string>>({})
  const score = SI.filter((r) => pick[r.q] === r.a).length
  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2">
        {SI.map((r) => {
          const p = pick[r.q]
          return (
            <label key={r.q} className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
              <span className="block font-bold" style={{ color: 'var(--text)' }}>{r.q}</span>
              <select value={p ?? ''} onChange={(e) => setPick((s) => ({ ...s, [r.q]: e.target.value }))} className={`${ctl} mt-1 w-full`} style={btn2}>
                <option value="">Choose the base unit…</option>
                {SI_OPTS.map((o) => <option key={o}>{o}</option>)}
              </select>
              {p && <span className="mt-1 block text-xs" style={{ color: p === r.a ? 'var(--success)' : 'var(--warning)' }}>{p === r.a ? 'Correct.' : p.startsWith('joule') || p.startsWith('lux') || p.startsWith('radian') ? 'That is a derived unit, not a base unit.' : 'Try another base unit.'}</span>}
            </label>
          )
        })}
      </div>
      <p className="mt-3 text-xs font-bold" style={{ color: 'var(--text-muted)' }} aria-live="polite">{score} of {SI.length} correct</p>
    </div>
  )
}

// ---------- 0.4 tilt table ----------
function TiltForces() {
  const [ang, setAng] = useState(5)
  const [mu, setMu] = useState(0.3)
  const m = 1.0
  const pull = m * G * Math.sin((ang * Math.PI) / 180)
  const fric = mu * m * G * Math.cos((ang * Math.PI) / 180)
  const a = inclineAcceleration(ang, mu)
  const slides = a > 0
  const crit = slideAngle(mu)
  const rad = (ang * Math.PI) / 180
  const L = 240
  const x1 = 30 + L * Math.cos(rad), y1 = 150 - L * Math.sin(rad)
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <figure className="p-2" style={{ ...panel, borderRadius: "var(--radius-panel)" }}>
        <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label={`A 1.0 kg block on a table tilted at ${ang} degrees. The block ${slides ? 'slides down the slope' : 'stays at rest'}.`}>
          <line x1="30" y1="150" x2={x1} y2={y1} stroke="var(--text)" strokeWidth="3" />
          <g transform={`rotate(${-ang} ${30 + 120 * Math.cos(rad)} ${150 - 120 * Math.sin(rad)})`}>
            <rect x={30 + 120 * Math.cos(rad) - 14} y={150 - 120 * Math.sin(rad) - 26} width="28" height="26" fill={slides ? 'var(--warning)' : 'var(--accent)'} rx="3" />
          </g>
          <text x="10" y="172" fontSize="11" fill="var(--text-muted)">tilt angle {ang}°</text>
        </svg>
        <figcaption className="sr-only">Diagram of a block on a tilted table.</figcaption>
      </figure>
      <div>
        <Slider label="Tilt angle" value={ang} min={0} max={40} step={1} unit="°" onChange={setAng} />
        <div className="mt-3"><Slider label="Friction coefficient μ" value={mu} min={0.1} max={0.8} step={0.05} unit="" onChange={setMu} /></div>
        <div className="mt-3 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
          <div>Pull down the slope, mg sinθ: <strong>{pull.toFixed(2)} N</strong></div>
          <div>Greatest friction, μmg cosθ: <strong>{fric.toFixed(2)} N</strong></div>
          <div className="mt-1 font-bold" style={{ color: slides ? 'var(--warning)' : 'var(--success)' }}>
            {slides ? `Forces unbalanced: the block accelerates at ${a.toFixed(2)} m s⁻².` : 'Forces balanced: the block stays at rest.'}
          </div>
          <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Model: a 1.0 kg block, g = 9.81 m s⁻². It starts to slide once tanθ &gt; μ, here at {crit.toFixed(1)}°.</div>
        </div>
      </div>
    </div>
  )
}

// ---------- 0.4 four forces ----------
const FORCES = [
  { n: 'Gravitational', acts: 'On any matter, because matter has mass. Between two or more masses, at rest or moving.', range: 'Unlimited range' },
  { n: 'Electromagnetic', acts: 'On charges, in electric and magnetic fields. Between charges, at rest or moving.', range: 'Unlimited range' },
  { n: 'Strong nuclear', acts: 'The glue that holds the protons and neutrons together inside the nucleus.', range: 'About 10⁻¹⁵ m' },
  { n: 'Weak nuclear', acts: 'Acts on particles separated by less than about 10⁻¹⁸ m, about 0.1% of the diameter of a proton.', range: 'Less than about 10⁻¹⁸ m' },
]
function FourForces() {
  const [i, setI] = useState(0)
  return (
    <div>
      <div role="tablist" aria-label="The four fundamental forces" className="flex flex-wrap gap-2">
        {FORCES.map((f, k) => (
          <button key={f.n} role="tab" aria-selected={i === k} onClick={() => setI(k)} className={ctl} style={i === k ? btn1 : btn2}>{f.n.toUpperCase()}</button>
        ))}
      </div>
      <div role="tabpanel" className="mt-3 rounded-[var(--radius-panel)] p-4" style={panel}>
        <div className="text-base font-extrabold" style={{ color: 'var(--text)' }}>{FORCES[i].n} force</div>
        <p className="mt-1 text-sm" style={{ color: 'var(--text)' }}>{FORCES[i].acts}</p>
        <p className="mt-2 text-xs font-black tracking-wider" style={{ color: 'var(--accent)' }}>RANGE: {FORCES[i].range}</p>
      </div>
    </div>
  )
}

// ---------- 0.5 themes and assessment ----------
const THEMES = [
  { k: 'A', t: 'Space, time and motion', note: 'Your class calls it "Mechanics". Kinematics, forces, energy, momentum, relativity.', now: true },
  { k: 'B', t: 'The particulate nature of matter', note: 'Thermal physics and electricity: heat, gases, current and circuits.' },
  { k: 'C', t: 'Wave behaviour', note: 'Oscillations, waves, light, sound and standing waves.' },
  { k: 'D', t: 'Fields', note: 'Gravitational, electric and magnetic fields and how things move in them.' },
  { k: 'E', t: 'Nuclear and quantum physics', note: 'Atoms, quanta, radioactivity, and energy from the nucleus.' },
]
function ThemesMap() {
  const [i, setI] = useState(0)
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <div role="tablist" aria-label="The five themes" className="grid gap-2">
        {THEMES.map((t, k) => (
          <button key={t.k} role="tab" aria-selected={i === k} onClick={() => setI(k)} className="flex items-center gap-3 rounded-[var(--radius-panel)] px-3 py-2.5 text-left text-sm font-bold" style={i === k ? { ...btn1 } : { ...btn2 }}>
            <span className="text-lg font-black">{t.k}</span>{t.t}
          </button>
        ))}
      </div>
      <div className="rounded-[var(--radius-panel)] p-4" style={panel}>
        <div className="text-[11px] font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>THEME {THEMES[i].k}{THEMES[i].now ? ' · WHERE WE ARE STARTING' : ''}</div>
        <div className="mt-1 text-lg font-extrabold" style={{ color: 'var(--text)' }}>{THEMES[i].t}</div>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>{THEMES[i].note}</p>
      </div>
    </div>
  )
}
function AssessmentMap() {
  const cards = [
    { t: 'Paper 1', d: 'Part A: multiple choice. Part B: data-based questions.' },
    { t: 'Paper 2', d: 'Structured questions, from short answers of 1–6 marks to whole questions worth up to 20 marks.' },
    { t: 'Internal assessment', d: 'About 20%. A mini research paper: an investigation of something you are curious about.' },
  ]
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.t} className="rounded-[var(--radius-panel)] p-4" style={panel}>
            <div className="text-sm font-extrabold" style={{ color: 'var(--text)' }}>{c.t}</div>
            <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>{c.d}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs" style={{ color: 'var(--text-subtle)' }}>Papers 1 and 2 together make up 80% of the grade. Exact paper weightings are in the official IB subject guide.</p>
    </div>
  )
}

// ---------- A.1·1 frame of reference ----------
const OBJECTS = [
  { n: 'Tree (platform)', x0: 60, v: 0 },
  { n: 'Train, with passenger', x0: 0, v: 10 },
  { n: 'Bird flying the other way', x0: 120, v: -4 },
]
function FrameOfReference() {
  const [ref, setRef] = useState(0)
  const [t, setT] = useState(0)
  const R = OBJECTS[ref]
  const rows = OBJECTS.map((o, k) => ({ ...o, k, pos: relativePosition(o.x0, o.v, R.x0, R.v, t), moving: o.v !== R.v }))
  const sc = 2.2
  const clamp = (x: number) => Math.max(-140, Math.min(140, x * sc))
  return (
    <div>
      <fieldset>
        <legend className="text-xs font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>MEASURE POSITION FROM…</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {OBJECTS.map((o, k) => (
            <button key={o.n} aria-pressed={ref === k} onClick={() => setRef(k)} className={ctl} style={ref === k ? btn1 : btn2}>{o.n.toUpperCase()}</button>
          ))}
        </div>
      </fieldset>
      <figure className="mt-3 p-2" style={{ ...panel, borderRadius: "var(--radius-panel)" }}>
        <svg viewBox="-160 0 320 90" className="w-full" role="img" aria-label={`Positions of three objects measured from the ${R.n}, at ${t} seconds.`}>
          <line x1="-150" y1="55" x2="150" y2="55" stroke="var(--border-strong)" strokeWidth="1" />
          <circle cx="0" cy="55" r="7" fill="none" stroke="var(--text)" strokeWidth="2" />
          <text x="0" y="78" fontSize="9" textAnchor="middle" fill="var(--text-muted)">reference (0 m)</text>
          {rows.filter((r) => r.k !== ref).map((r) => (
            <g key={r.n}>
              <rect x={clamp(r.pos) - 6} y="34" width="12" height="12" rx="2" fill={r.moving ? 'var(--warning)' : 'var(--success)'} />
              <text x={clamp(r.pos)} y="27" fontSize="8" textAnchor="middle" fill="var(--text)">{r.n.split(' ')[0]}</text>
            </g>
          ))}
        </svg>
      </figure>
      <div className="mt-3"><Slider label="Time" value={t} min={0} max={10} step={1} unit="s" onChange={setT} /></div>
      <ul className="mt-3 grid gap-2 text-sm">
        {rows.filter((r) => r.k !== ref).map((r) => (
          <li key={r.n} className="rounded-[var(--radius-panel)] p-3" style={panel}>
            <strong style={{ color: 'var(--text)' }}>{r.n}</strong>: {r.pos.toFixed(0)} m from the {R.n.split(' ')[0].toLowerCase()} at {t} s.{' '}
            <strong style={{ color: r.moving ? 'var(--warning)' : 'var(--success)' }}>{r.moving ? 'Position changes with time: in motion.' : 'Position never changes: at rest.'}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ---------- A.1·2 pendulum ----------
function Pendulum() {
  const [L, setL] = useState(1.0)
  const [amp, setAmp] = useState(10)
  const [playing, setPlaying] = useState(false)
  const [t, setT] = useState(0)
  const reduced = usePrefersReducedMotion()
  const T = pendulumPeriod(L)
  const raf = useRef(0)
  useEffect(() => {
    if (!playing || reduced) return
    let last = performance.now()
    const tick = (now: number) => {
      setT((x) => x + (now - last) / 1000)
      last = now
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [playing, reduced])
  const th = ((amp * Math.PI) / 180) * Math.cos((2 * Math.PI * t) / T)
  const px = 160, py = 12, len = 40 + L * 55
  const bx = px + len * Math.sin(th), by = py + len * Math.cos(th)
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <figure className="p-2" style={{ ...panel, borderRadius: "var(--radius-panel)" }}>
        <svg viewBox="0 0 320 190" className="w-full" role="img" aria-label={`A pendulum of length ${L} metres swinging with amplitude ${amp} degrees. Its period is ${T.toFixed(2)} seconds.`}>
          <line x1="130" y1={py} x2="190" y2={py} stroke="var(--text)" strokeWidth="3" />
          <line x1={px} y1={py} x2={bx} y2={by} stroke="var(--text-muted)" strokeWidth="1.5" />
          <circle cx={bx} cy={by} r="10" fill="var(--accent)" />
        </svg>
      </figure>
      <div>
        <Slider label="Length L" value={L} min={0.2} max={2.0} step={0.1} unit="m" onChange={(v) => { setL(v); setT(0) }} />
        <div className="mt-3"><Slider label="Swing amplitude" value={amp} min={2} max={15} step={1} unit="°" onChange={setAmp} /></div>
        {reduced || !playing ? (
          <div className="mt-3"><Slider label="Time" value={Math.round((t % T) * 100) / 100} min={0} max={Math.round(T * 100) / 100} step={0.01} unit="s" onChange={setT} /></div>
        ) : null}
        {!reduced && (
          <button onClick={() => setPlaying((p) => !p)} aria-pressed={playing} className={`${ctl} mt-3`} style={playing ? btn2 : btn1}>{playing ? 'PAUSE' : 'SWING'}</button>
        )}
        <div className="mt-3 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
          <div>Period T = 2π√(L/g) = <strong>{T.toFixed(2)} s</strong></div>
          <div>Frequency f = 1/T = <strong>{(1 / T).toFixed(2)} Hz</strong></div>
          <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Try changing the amplitude: for small swings the period barely changes. The mass of the bob does not appear in the formula.</div>
        </div>
      </div>
    </div>
  )
}

// ---------- A.1·3 Zeno ----------
function ZenoSeries() {
  const [n, setN] = useState(3)
  const [time, setTime] = useState(false)
  const sum = zenoSum(n)
  const den = 2 ** n
  const W = 300
  const segs = Array.from({ length: n }, (_, k) => ({ x: W * (1 - 0.5 ** k), w: W * 0.5 ** (k + 1), k }))
  const tsum = 2 * (1 - 0.5 ** n)
  return (
    <div>
      <figure className="p-2" style={{ ...panel, borderRadius: "var(--radius-panel)" }}>
        <svg viewBox="-10 0 320 70" className="w-full" role="img" aria-label={`A journey from A to B. After ${n} half-steps the walker has covered ${sum.toFixed(6)} of the distance.`}>
          <rect x="0" y="30" width={W} height="16" rx="3" fill="none" stroke="var(--border-strong)" />
          {segs.map((s) => (
            <rect key={s.k} x={s.x} y="30" width={s.w} height="16" fill={s.k % 2 ? 'var(--accent-2)' : 'var(--accent)'} stroke="var(--surface)" strokeWidth="0.6" />
          ))}
          <text x="0" y="22" fontSize="10" fill="var(--text)">A</text>
          <text x={W} y="22" fontSize="10" textAnchor="end" fill="var(--text)">B (distance = 1)</text>
        </svg>
      </figure>
      <div className="mt-3"><Slider label="Number of terms n" value={n} min={1} max={16} step={1} unit="" onChange={setN} /></div>
      <div className="mt-3 rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        <div>Distance covered: <strong>{den - 1}/{den}</strong> = {sum.toFixed(n > 10 ? 6 : 4)} of the total</div>
        <div>Still to go: <strong>1/{den}</strong> = {(1 / den).toPrecision(2)}</div>
        <label className="mt-2 flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--text)' }}>
          <input type="checkbox" checked={time} onChange={(e) => setTime(e.target.checked)} style={{ accentColor: 'var(--accent)' }} />
          Each step takes half as long as the one before (first step: 1 s)
        </label>
        {time && <div className="mt-1">Time so far: <strong>{tsum.toFixed(n > 10 ? 5 : 3)} s</strong>. It can never pass 2 s, so infinitely many steps take only a finite time.</div>}
      </div>
    </div>
  )
}

const REGISTRY: Record<WidgetId, () => JSX.Element> = {
  'energy-generator': EnergyGenerator,
  'measurable-sorter': () => <Sorter cats={['PHYSICAL QUANTITY', 'RATING / INDEX']} items={MEASURABLE} />,
  'scalar-vector-sorter': () => <Sorter cats={['SCALAR', 'VECTOR']} items={SCALAR_VECTOR} />,
  'si-trainer': SiTrainer,
  'tilt-forces': TiltForces,
  'four-forces': FourForces,
  'themes-map': ThemesMap,
  'assessment-map': AssessmentMap,
  'frame-of-reference': FrameOfReference,
  pendulum: Pendulum,
  'zeno-series': ZenoSeries,
}

export function Widget({ id }: { id: WidgetId }) {
  const W = useMemo(() => REGISTRY[id], [id])
  return <W />
}
