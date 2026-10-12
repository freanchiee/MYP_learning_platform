'use client'
import { useEffect, useMemo, useState } from 'react'
import {
  G_STD, WALL_QUESTION, apexHeight, heightAtDistance, heightAtTime, justClearsDistances, launchComponents, throwLandingRange, throwLandingTime,
  timeToDistance, wallOutcome, type Throw,
} from '@/lib/learn/projectile-model'
import { Arrow, Cell, Slider, btn1, btn2, ctl, f, fig, panel, useFrame, useReducedMotion } from './relative-motion'

// An exam-style problem you can change: ball thrown at an angle toward a wall. Every number is editable and the
// question text, the animation and the worked solution all rewrite themselves. The last question is always one of three:
//   will it clear the wall? / how far should the wall be so it just clears? / how high up the wall does it hit?
type Mode = 'clear' | 'distance' | 'hit'
const MODES: { id: Mode; label: string }[] = [
  { id: 'clear', label: 'Will it clear the wall?' },
  { id: 'distance', label: 'How far should the wall be?' },
  { id: 'hit', label: 'How high does it hit?' },
]
const RAD = Math.PI / 180

interface Params { u: number; angle: number; y0: number; g: number; d: number; hw: number }
const EXAM: Params = { u: WALL_QUESTION.u, angle: WALL_QUESTION.angleDeg, y0: WALL_QUESTION.y0, g: G_STD, d: WALL_QUESTION.wallDistance, hw: 12 }

const sig = (x: number, n: number) => (x === 0 ? 0 : Number(x.toPrecision(n)))
const r1 = (x: number) => Math.round(x * 10) / 10

function randomQuestion(): { p: Params; mode: Mode } {
  const mode = (['clear', 'distance', 'hit'] as const)[Math.floor(Math.random() * 3)]
  const u = 14 + Math.floor(Math.random() * 19)
  const angle = 25 + 5 * Math.floor(Math.random() * 8)
  const y0 = [1, 1.2, 1.5, 1.8, 2][Math.floor(Math.random() * 5)]
  const th: Throw = { u, angleDeg: angle, y0, g: G_STD }
  const R = throwLandingRange(th)
  const d = Math.round(R * (0.45 + Math.random() * 0.45))
  const yd = heightAtDistance(th, d)
  let hw = r1(yd + (Math.random() < 0.5 ? 1 : -1) * (0.8 + Math.random() * 2.5))
  if (mode === 'hit') hw = r1(yd + 1 + Math.random() * 3)
  if (mode === 'distance') hw = r1(Math.max(y0 + 0.8, apexHeight(th) * (0.45 + Math.random() * 0.4)))
  hw = Math.min(30, Math.max(1, hw))
  return { p: { u, angle, y0, g: G_STD, d: Math.min(95, Math.max(5, d)), hw }, mode }
}

interface Step { line: string; why: string }

export function WallProblemLab() {
  const reduced = useReducedMotion()
  const [p, setP] = useState<Params>(EXAM)
  const [mode, setMode] = useState<Mode>('hit')
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [showSolution, setShowSolution] = useState(true)
  const [guess, setGuess] = useState('')
  const [yesNo, setYesNo] = useState<'yes' | 'no' | null>(null)
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null)

  const th: Throw = { u: p.u, angleDeg: p.angle, y0: p.y0, g: p.g }
  const { vx, vy } = launchComponents(th)
  const apex = apexHeight(th)
  const R = throwLandingRange(th)
  const Tland = throwLandingTime(th)
  const jc = useMemo(() => justClearsDistances(th, p.hw), [p.u, p.angle, p.y0, p.g, p.hw]) // eslint-disable-line react-hooks/exhaustive-deps
  const apexDist = vx * (vy / p.g)

  // where the wall stands in the picture: in "how far" mode it stands at the answer
  const wallD = mode === 'distance' ? (jc ? jc.d2 : apexDist) : p.d
  const out = mode === 'distance' ? (jc ? ({ kind: 'clears', heightAtWall: p.hw, margin: 0 } as const) : null) : wallOutcome(th, wallD, p.hw)
  const yAtWall = heightAtDistance(th, wallD)
  const tWall = timeToDistance(th, wallD)
  const tEnd = out && out.kind === 'hits' ? tWall : Tland
  const tShown = Math.min(t, tEnd)

  useEffect(() => { setT(0); setPlaying(false); setFeedback(null); setGuess(''); setYesNo(null) }, [p, mode])
  useEffect(() => { if (reduced) setPlaying(false) }, [reduced])
  useFrame(playing && !reduced, (dt) => setT((x) => { const n = x + dt * 0.7; if (n >= tEnd) { setPlaying(false); return tEnd } return n }))

  // ---- the question, rewritten from the numbers
  const intro = `A ball is thrown from a height of ${f(p.y0, 1)} m above level ground with a speed of ${f(p.u, 0)} m s⁻¹, at ${f(p.angle, 0)}° above the horizontal, toward a vertical wall. Air resistance is negligible (g = ${p.g} m s⁻²).`
  const ask =
    mode === 'clear' ? `The wall is ${f(p.hw, 1)} m high and stands ${f(p.d, 0)} m from the thrower. Does the ball pass over the wall?`
    : mode === 'distance' ? `The wall is ${f(p.hw, 1)} m high. How far from the thrower should the wall stand so that the ball only just goes over it?`
    : `The wall is ${f(p.hw, 1)} m high and stands ${f(p.d, 0)} m from the thrower. If the ball does not clear the wall, how high up the wall does it hit? (If it clears, what is its height as it passes the wall?)`

  // ---- the answer
  const exactAnswer: number | null = mode === 'distance' ? (jc ? jc.d2 : null) : mode === 'hit' ? (out && out.kind === 'short' ? null : yAtWall) : null
  let verdict = ''
  if (mode === 'clear') {
    if (!out) verdict = ''
    else if (out.kind === 'short') verdict = `No. The ball lands ${f(R, 1)} m from the thrower, before it reaches the wall at ${f(p.d, 0)} m.`
    else if (out.kind === 'clears') verdict = `Yes. At the wall the ball is ${f(out.heightAtWall, 2)} m high, ${f(out.margin, 2)} m above the top of the ${f(p.hw, 1)} m wall.`
    else verdict = `No. At the wall the ball is only ${f(out.heightAtWall, 2)} m high, ${f(p.hw - out.heightAtWall, 2)} m below the top of the ${f(p.hw, 1)} m wall, so it hits the wall.`
  } else if (mode === 'distance') {
    verdict = jc
      ? `The wall can stand at most d = ${f(jc.d2, 2)} m away: there the ball just clears the top, on its way down. Any wall between ${f(jc.d1, 1)} m and ${f(jc.d2, 1)} m is cleared too (the ball is above ${f(p.hw, 1)} m for all of that stretch). A wall nearer than ${f(jc.d1, 1)} m is hit on the way up; a wall farther than ${f(jc.d2, 1)} m is hit on the way down.`
      : `No distance works. The highest the ball ever gets is ${f(apex, 2)} m, less than the ${f(p.hw, 1)} m wall.`
  } else if (out) {
    if (out.kind === 'short') verdict = `The ball never reaches the wall: it lands ${f(R, 1)} m from the thrower, ${f(p.d - R, 1)} m short of it.`
    else if (out.kind === 'hits') verdict = `The ball hits the wall ${f(out.heightAtWall, 2)} m above the ground, ${f(p.hw - out.heightAtWall, 2)} m below the top.`
    else verdict = `The ball clears the wall. As it passes the wall’s position it is ${f(out.heightAtWall, 2)} m above the ground, ${f(out.margin, 2)} m above the top. (If the wall were exactly ${f(out.heightAtWall, 2)} m high the ball would just go over it.)`
  }

  // ---- the worked solution, with this question’s numbers
  const steps: Step[] = useMemo(() => {
    const s: Step[] = []
    const vxS = f(vx, 2), vyS = f(vy, 2)
    s.push({ line: 'up = +, so a_y = −g = −' + p.g + ' m s⁻²   and   a_x = 0', why: 'Choose the sign convention first. Horizontal motion is uniform (no horizontal force); vertical motion has constant acceleration.' })
    s.push({ line: `v_x = u cosθ = ${f(p.u, 0)} cos ${f(p.angle, 0)}° = ${vxS} m s⁻¹    v_y = u sinθ = ${f(p.u, 0)} sin ${f(p.angle, 0)}° = ${vyS} m s⁻¹`, why: 'Split the launch velocity into its horizontal and vertical components. v_y is the INITIAL vertical velocity.' })
    if (mode !== 'distance') {
      const tt = p.d / vx
      s.push({ line: `t = d / v_x = ${f(p.d, 0)} / ${vxS} = ${f(tt, 3)} s`, why: 'Horizontal axis only: uniform motion, distance = speed × time. This is the time to reach the wall.' })
      const term1 = vy * tt, term2 = 0.5 * p.g * tt * tt, yy = p.y0 + term1 - term2
      if (p.d > R) {
        s.push({ line: `y = ${f(p.y0, 1)} + ${f(term1, 2)} − ${f(term2, 2)} = ${f(yy, 2)} m   (negative)`, why: 'A negative height means the ball would already be underground: it lands before it gets to the wall.' })
        s.push({ line: `0 = ${f(p.y0, 1)} + ${vyS}t − ½(${p.g})t²  →  t_land = ${f(Tland, 3)} s,  range = v_x t = ${f(R, 1)} m`, why: 'Solve y = 0 for the time it lands (the positive root), then range = v_x × t.' })
      } else {
        s.push({ line: `y = y₀ + v_y t − ½ g t² = ${f(p.y0, 1)} + (${vyS} × ${f(tt, 3)}) − ½(${p.g})(${f(tt, 3)})² = ${f(p.y0, 1)} + ${f(term1, 2)} − ${f(term2, 2)} = ${f(yy, 2)} m`, why: 'Vertical axis: s = ut + ½at² gives the rise above the start, and y₀ is added because the ball was thrown from above the ground.' })
        s.push({ line: mode === 'clear' ? `${f(yy, 2)} m ${yy >= p.hw ? '≥' : '<'} ${f(p.hw, 1)} m  →  ${yy >= p.hw ? 'it clears the wall' : 'it hits the wall'}` : `height at the wall = ${f(yy, 2)} m   (wall top ${f(p.hw, 1)} m)  →  ${yy >= p.hw ? 'clears it' : 'hits ' + f(p.hw - yy, 2) + ' m below the top'}`, why: 'Compare the ball’s height at the wall’s distance with the height of the wall.' })
        const tr = sig(tt, 2)
        const yr = p.y0 + vy * tr - 0.5 * p.g * tr * tr
        if (Math.abs(yr - yy) >= 0.05) s.push({ line: `check: with t rounded to ${tr} s you would get ${f(yr, 2)} m, not ${f(yy, 2)} m`, why: 'Near the wall the ball is falling quickly, so a small error in t makes a big error in the height. Keep t unrounded in the calculator and round only the final answer.' })
      }
    } else if (jc) {
      const disc = vy * vy - 2 * p.g * (p.hw - p.y0)
      s.push({ line: `y = ${f(p.hw, 1)} :  ${f(p.y0, 1)} + ${vyS}t − ½(${p.g})t² = ${f(p.hw, 1)}   →   ½(${p.g})t² − ${vyS}t + ${f(p.hw - p.y0, 1)} = 0`, why: 'The ball just clears the wall when its height equals the wall height. That is a quadratic in t.' })
      s.push({ line: `t = [v_y ± √(v_y² − 2g(h − y₀))] / g = [${vyS} ± √${f(disc, 2)}] / ${p.g} = ${f(jc.t1, 3)} s  or  ${f(jc.t2, 3)} s`, why: 'Two solutions: the ball is at that height once going up and once coming down.' })
      s.push({ line: `d = v_x t = ${vxS} × ${f(jc.t2, 3)} = ${f(jc.d2, 2)} m`, why: 'The later time is the wall at its farthest, just cleared on the way down. (The earlier time gives the nearest wall, d = ' + f(jc.d1, 2) + ' m.)' })
    } else {
      s.push({ line: `highest point: H = y₀ + v_y² / 2g = ${f(p.y0, 1)} + ${vyS}² / (2 × ${p.g}) = ${f(apex, 2)} m`, why: 'At the top v_y = 0, so v² = u² + 2as gives the extra height. The wall is taller than that, so no distance works.' })
    }
    return s
  }, [p, mode, vx, vy, R, Tland, jc, apex])

  // ---- check an answer
  const check = () => {
    if (mode === 'clear') {
      if (!out || yesNo === null) return
      const truth = out.kind === 'clears'
      setFeedback({ ok: (yesNo === 'yes') === truth, text: (yesNo === 'yes') === truth ? 'Correct.' : 'Not quite: compare the ball’s height at the wall with the wall height.' })
      return
    }
    const val = parseFloat(guess.replace(',', '.'))
    if (!Number.isFinite(val) || exactAnswer === null) { setFeedback({ ok: false, text: exactAnswer === null ? 'This case has no numerical answer (see the solution).' : 'Type a number first.' }); return }
    const rel = Math.abs(val - exactAnswer) / Math.max(1e-9, Math.abs(exactAnswer))
    if (rel <= 0.02) setFeedback({ ok: true, text: `Correct: ${f(exactAnswer, 2)} m (you gave ${f(val, 2)} m).` })
    else if (rel <= 0.06) setFeedback({ ok: false, text: `Close, but not within rounding. The accurate answer is ${f(exactAnswer, 2)} m. Did you round the time early? Keep t unrounded.` })
    else setFeedback({ ok: false, text: 'Not quite. Check the components v_x and v_y, then the time, then the height or distance.' })
  }

  // ---- the picture, drawn to scale and fitted to the numbers
  const xMax = Math.max(wallD, mode === 'distance' ? 0 : R, apexDist * 1.2) * 1.08 + 4
  const yMax = Math.max(apex, p.hw, 3) * 1.18
  const k = Math.min(620 / xMax, 250 / yMax)
  const gx = 46, gy = 292
  const X = (x: number) => gx + x * k
  const Y = (y: number) => gy - y * k
  const path = Array.from({ length: 61 }, (_, i) => { const tt = (i / 60) * Tland; return `${X(vx * tt)},${Y(Math.max(0, heightAtTime(th, tt)))}` }).join(' ')
  const solidN = Math.max(1, Math.ceil((tShown / Math.max(1e-6, Tland)) * 60))
  const solid = Array.from({ length: solidN + 1 }, (_, i) => { const tt = (i / solidN) * tShown; return `${X(vx * tt)},${Y(Math.max(0, heightAtTime(th, tt)))}` }).join(' ')
  const bx = vx * tShown, by = Math.max(0, heightAtTime(th, tShown))
  const vyNow = vy - p.g * tShown
  const hitNow = out && out.kind === 'hits' && tShown >= tEnd - 0.01
  const set = (patch: Partial<Params>) => setP((q) => ({ ...q, ...patch }))
  const unknownD = mode === 'distance'

  return (
    <div className="grid gap-3">
      {/* the question, rewritten from the numbers */}
      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
        <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>The question (it rewrites itself as you change the numbers)</div>
        <p className="mt-2 font-semibold" style={{ color: 'var(--text)' }}>{intro}</p>
        <p className="mt-1 font-extrabold" style={{ color: 'var(--accent)' }}>{ask}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Which question to ask">
        {MODES.map((m) => <button key={m.id} className={ctl} style={mode === m.id ? btn1 : btn2} aria-pressed={mode === m.id} onClick={() => setMode(m.id)}>{m.label}</button>)}
        <button className={ctl} style={btn2} onClick={() => { const q = randomQuestion(); setP(q.p); setMode(q.mode) }}>🎲 New random question</button>
        <button className={ctl} style={btn2} onClick={() => { setP(EXAM); setMode('hit') }}>Exam numbers</button>
        <button className={ctl} style={btn2} onClick={() => { setP((q) => ({ ...q, hw: Math.max(1, r1(heightAtDistance({ u: q.u, angleDeg: q.angle, y0: q.y0, g: q.g }, q.d))) })); setMode('clear') }} title="Set the wall height to the height of the ball at the wall">Wall that is just cleared</button>
      </div>

      <svg viewBox="0 0 700 330" className="w-full" style={fig} role="img" aria-label={`Ball thrown at ${p.u} metres per second, ${p.angle} degrees, from ${p.y0} metres, toward a ${p.hw} metre wall ${f(wallD, 1)} metres away. ${verdict}`}>
        <line x1={0} y1={gy} x2={700} y2={gy} stroke="var(--text-subtle)" strokeWidth={2} />
        <polyline points={path} fill="none" stroke="var(--text-subtle)" strokeDasharray="4 5" strokeWidth={2} />
        <polyline points={solid} fill="none" stroke="var(--accent)" strokeWidth={3} />
        {/* thrower and release height */}
        <g stroke="var(--text)" strokeWidth={2.5} strokeLinecap="round"><line x1={X(0) - 4} y1={Y(0)} x2={X(0) - 4} y2={Y(Math.max(0.1, p.y0 - 0.35))} /><circle cx={X(0) - 4} cy={Y(p.y0 + 0.2)} r={5} fill="var(--surface-elevated)" /></g>
        {/* the wall */}
        <rect x={X(wallD) - 3} y={Y(p.hw)} width={7} height={Math.max(0, p.hw * k)} fill="var(--warning)" stroke="var(--text)" />
        <text x={X(wallD) + 10} y={Y(p.hw) + 4} fontSize="11" fontWeight="800" fill="var(--text)">wall {f(p.hw, 1)} m</text>
        {/* the ball's height at the wall's distance */}
        {out && out.kind !== 'short' && <g><line x1={X(wallD) - 22} y1={Y(yAtWall)} x2={X(wallD) + 22} y2={Y(yAtWall)} stroke="var(--accent)" strokeWidth={2} /><text x={X(wallD) - 26} y={Y(yAtWall) + 4} textAnchor="end" fontSize="11" fontWeight="800" fill="var(--accent)">{f(yAtWall, 2)} m</text></g>}
        {/* distance marker */}
        <line x1={X(0)} y1={gy + 14} x2={X(wallD)} y2={gy + 14} stroke="var(--text-muted)" /><text x={X(wallD / 2)} y={gy + 28} textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--text)">{unknownD ? `d = ${jc ? f(jc.d2, 1) : '?'} m (answer)` : `${f(wallD, 0)} m`}</text>
        {/* apex */}
        <circle cx={X(apexDist)} cy={Y(apex)} r={3} fill="var(--text-muted)" /><text x={X(apexDist)} y={Y(apex) - 8} textAnchor="middle" fontSize="10" fill="var(--text-muted)">highest {f(apex, 1)} m</text>
        {/* ball, with its velocity components */}
        <Arrow x1={X(bx)} y1={Y(by)} x2={X(bx) + vx * 2.4} y2={Y(by)} color="var(--success)" w={2.5} />
        <Arrow x1={X(bx)} y1={Y(by)} x2={X(bx)} y2={Y(by) - vyNow * 2.4} color="var(--danger)" w={2.5} />
        <circle cx={X(bx)} cy={Y(by)} r={7} fill="var(--text)" />
        {hitNow && <text x={X(bx) - 12} y={Y(by) - 30} textAnchor="end" fontSize="12" fontWeight="800" fill="var(--danger)">HIT {f(by, 2)} m up</text>}
        <g fontSize="11" fontWeight="800"><text x={12} y={18} fill="var(--success)">→ v_x (constant)</text><text x={130} y={18} fill="var(--danger)">↕ v_y (changes)</text></g>
        <text x={694} y={324} textAnchor="end" fontSize="10" fill="var(--text-muted)">drawn to scale: {f(k, 1)} px = 1 m</text>
      </svg>

      <div className="flex flex-wrap items-center gap-2">
        <button className={ctl} style={btn1} onClick={() => { if (t >= tEnd - 1e-9) setT(0); setPlaying((x) => !x) }}>{playing ? 'Pause' : t >= tEnd - 1e-9 ? 'Replay' : t === 0 ? 'Throw' : 'Play'}</button>
        <button className={ctl} style={btn2} onClick={() => { setPlaying(false); setT(0) }}>Reset</button>
        <input type="range" min={0} max={tEnd} step={0.001} value={tShown} onChange={(e) => { setPlaying(false); setT(Number(e.target.value)) }} aria-label="Time since the throw" className="min-w-[140px] flex-1" style={{ accentColor: 'var(--accent)' }} />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <Cell label="Time t" value={`${f(tShown, 2)} s`} accent />
        <Cell label="Across x" value={`${f(bx, 1)} m`} />
        <Cell label="Height y" value={`${f(by, 2)} m`} />
        <Cell label="v_x" value={`${f(vx, 2)} m s⁻¹`} />
        <Cell label="v_y" value={`${f(vyNow, 2)} m s⁻¹`} />
      </div>

      {/* editable conditions */}
      <div className="rounded-[var(--radius-panel)] p-3" style={panel}>
        <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Change the conditions</div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Slider label="Launch speed u" value={p.u} min={5} max={40} step={1} unit="m s⁻¹" onChange={(v) => set({ u: v })} />
          <Slider label="Launch angle θ" value={p.angle} min={5} max={85} step={1} unit="°" onChange={(v) => set({ angle: v })} />
          <Slider label="Release height" value={p.y0} min={0} max={3} step={0.1} unit="m" onChange={(v) => set({ y0: v })} shown={p.y0.toFixed(1)} />
          <Slider label={unknownD ? 'Wall distance (the unknown)' : 'Wall distance'} value={unknownD && jc ? Math.round(jc.d2) : p.d} min={5} max={95} step={1} unit="m" onChange={(v) => { if (!unknownD) set({ d: v }) }} />
          <Slider label="Wall height" value={p.hw} min={1} max={30} step={0.5} unit="m" onChange={(v) => set({ hw: v })} shown={p.hw.toFixed(1)} />
          <label className="block text-sm font-bold" style={{ color: 'var(--text)' }}>
            g (m s⁻²)
            <select value={p.g} onChange={(e) => set({ g: Number(e.target.value) })} className="mt-1 block w-full rounded-[var(--radius-control)] px-2 py-2 text-sm" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}>
              <option value={9.81}>9.81</option><option value={9.8}>9.8</option><option value={10}>10</option>
            </select>
          </label>
        </div>
      </div>

      {/* answer it yourself */}
      <div className="rounded-[var(--radius-panel)] p-3" style={panel}>
        <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Your answer</div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {mode === 'clear' ? (
            <>
              <button className={ctl} style={yesNo === 'yes' ? btn1 : btn2} onClick={() => setYesNo('yes')}>Yes, it clears</button>
              <button className={ctl} style={yesNo === 'no' ? btn1 : btn2} onClick={() => setYesNo('no')}>No, it does not</button>
            </>
          ) : (
            <label className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--text)' }}>
              {mode === 'distance' ? 'Distance (m)' : 'Height (m)'}
              <input value={guess} onChange={(e) => setGuess(e.target.value)} inputMode="decimal" placeholder="e.g. 9.0" className="w-28 rounded-[var(--radius-control)] px-2 py-1.5 text-sm" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }} />
            </label>
          )}
          <button className={ctl} style={btn1} onClick={check}>Check</button>
          <button className={ctl} style={btn2} onClick={() => setShowSolution((s) => !s)}>{showSolution ? 'Hide solution' : 'Show solution'}</button>
        </div>
        {feedback && <div role="status" className="mt-3 rounded-[var(--radius-panel)] px-3.5 py-2.5 text-sm" style={{ background: feedback.ok ? 'var(--success-surface)' : 'var(--warning-surface)', border: `1px solid ${feedback.ok ? 'var(--success)' : 'var(--warning)'}`, color: 'var(--text)' }}>{feedback.text}</div>}
      </div>

      {showSolution && (
        <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel}>
          <div className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>Worked solution, with these numbers</div>
          <ol className="mt-2 grid gap-2">
            {steps.map((s, i) => (
              <li key={i} className="grid gap-0.5">
                <span style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{i + 1}. {s.line}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.why}</span>
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-[var(--radius-panel)] px-3.5 py-2.5 font-bold" style={{ background: 'var(--success-surface)', border: '1px solid var(--success)', color: 'var(--text)' }}>Answer: {verdict}</div>
        </div>
      )}
    </div>
  )
}

void RAD
