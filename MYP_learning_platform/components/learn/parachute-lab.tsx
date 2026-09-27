'use client'
import { useEffect, useState } from 'react'
import { netForceQuad, skydiveVelocity, terminalVelocityQuad } from '@/lib/learn/forces-model'

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const btn1: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const btn2: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const panel: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }
const fig = { ...panel, borderRadius: 'var(--radius-panel)' } as React.CSSProperties
function f2(x: number, d = 1) {
  if (Math.abs(x) < 1e-9) return '0'
  const raw = x.toFixed(d)
  const s = d > 0 ? raw.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '') : raw
  return s === '-0' ? '0' : s
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

type N = number | string
function Arrow({ x1, y1, x2, y2, color, w = 3.5 }: { x1: N; y1: N; x2: N; y2: N; color: string; w?: number }) {
  const X1 = Number(x1), Y1 = Number(y1), X2 = Number(x2), Y2 = Number(y2)
  const dx = X2 - X1, dy = Y2 - Y1
  const len = Math.hypot(dx, dy)
  if (len < 3) return null
  const ux = dx / len, uy = dy / len
  const h = Math.min(11, len * 0.45)
  const bx = X2 - ux * h, by = Y2 - uy * h
  return (
    <g stroke={color} fill={color} strokeWidth={w} strokeLinecap="round">
      <line x1={X1} y1={Y1} x2={bx} y2={by} />
      <polygon points={`${X2},${Y2} ${bx - uy * h * 0.55},${by + ux * h * 0.55} ${bx + uy * h * 0.55},${by - ux * h * 0.55}`} strokeWidth={1} />
    </g>
  )
}

// A small original cartoon jumper (not any third-party character): a circle head, oval body,
// arms/legs as lines. Splayed out in freefall, tucked with a canopy overhead once open.
function Jumper({ cx, cy, open }: { cx: number; cy: number; open: boolean }) {
  return (
    <g>
      {open && (
        <g>
          <path d={`M ${cx - 34} ${cy - 46} Q ${cx} ${cy - 82} ${cx + 34} ${cy - 46} Z`} fill="#e0574c" stroke="#7a1d16" strokeWidth="1.5" />
          <line x1={cx - 24} y1={cy - 48} x2={cx - 8} y2={cy - 14} stroke="#7a1d16" strokeWidth="1" />
          <line x1={cx + 24} y1={cy - 48} x2={cx + 8} y2={cy - 14} stroke="#7a1d16" strokeWidth="1" />
          <line x1={cx} y1={cy - 50} x2={cx} y2={cy - 14} stroke="#7a1d16" strokeWidth="1" />
        </g>
      )}
      <circle cx={cx} cy={cy - 10} r="9" fill="#f2a65a" stroke="#8a4a1a" strokeWidth="1.5" />
      <rect x={cx - 7} y={cy - 2} width="14" height="16" rx="5" fill="#3a6ea5" stroke="#1e3f5c" strokeWidth="1.5" />
      {open ? (
        <>
          <line x1={cx - 7} y1={cy + 2} x2={cx - 16} y2={cy - 4} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx + 7} y1={cy + 2} x2={cx + 16} y2={cy - 4} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx - 3} y1={cy + 14} x2={cx - 6} y2={cy + 24} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx + 3} y1={cy + 14} x2={cx + 6} y2={cy + 24} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1={cx - 7} y1={cy + 1} x2={cx - 24} y2={cy - 4} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx + 7} y1={cy + 1} x2={cx + 24} y2={cy - 4} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx - 4} y1={cy + 14} x2={cx - 16} y2={cy + 22} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx + 4} y1={cy + 14} x2={cx + 16} y2={cy + 22} stroke="#1e3f5c" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </g>
  )
}

const M = 80, K_BODY = 0.314, K_CHUTE = 21.8
const VT1 = terminalVelocityQuad(M, K_BODY)
const VT2 = terminalVelocityQuad(M, K_CHUTE)
const TMAX = 20
// After the parachute opens, keep playing for at least this many more seconds — the new
// (much lower) terminal velocity must always have time to actually show on screen, however
// late the student opens the chute, instead of the animation cutting off mid-deceleration.
const TAIL_AFTER_OPEN = 8

export function ParachuteLab() {
  const reduced = useReducedMotion()
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(!reduced)
  const [tOpen, setTOpen] = useState<number | null>(null)
  const [hanging, setHanging] = useState(true)
  const [playEnd, setPlayEnd] = useState(TMAX)

  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    let id = 0
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      setT((x) => Math.min(playEnd, x + dt))
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [playing, playEnd])
  useEffect(() => {
    if (t >= playEnd) setPlaying(false)
  }, [t, playEnd])

  const cut = () => { setHanging(false); setT(0); setTOpen(null); setPlayEnd(TMAX); setPlaying(!reduced) }
  const restart = () => { setHanging(true); setT(0); setTOpen(null); setPlayEnd(TMAX); setPlaying(false) }
  const openChute = () => {
    setTOpen(t)
    setPlayEnd((e) => Math.max(e, t + TAIL_AFTER_OPEN)) // extend the timeline so it can settle
    setPlaying(!reduced) // resume in case it had auto-paused right as the chute opened
  }

  const open = tOpen !== null
  const { v, phase } = hanging ? { v: 0, phase: 'body' as const } : skydiveVelocity(M, K_BODY, K_CHUTE, open ? tOpen! : Infinity, t)
  const net = hanging ? 0 : netForceQuad(M, phase === 'body' ? K_BODY : K_CHUTE, v)
  const drag = M * 9.81 - net
  const vt = phase === 'body' ? VT1 : VT2
  const balanced = !hanging && Math.abs(net) < 0.03 * M * 9.81
  const weightPx = 48
  const dragPx = Math.max(4, Math.min(90, (drag / (M * 9.81)) * weightPx))

  // ---- left panel: sky scrolling UPWARDS past the jumper (falling, not gliding sideways) ----
  const H = 260
  const loopH = H + 80
  const scroll = (hanging ? 0 : v * t * 3) % loopH
  const clouds = [
    { x: 44, y0: 20 },
    { x: 170, y0: 110 },
    { x: 80, y0: 200 },
    { x: 150, y0: 290 },
  ].map((c) => ({ x: c.x, y: ((c.y0 - scroll + loopH) % loopH) - 40 }))

  // ---- right panel: v-t graph ----
  const W = 300, gH = 200, padL = 40, padB = 24
  const vMax = VT1 * 1.15
  const X = (tt: number) => padL + (tt / playEnd) * (W - padL - 8)
  const Y = (vv: number) => gH - padB - (vv / vMax) * (gH - padB - 8)
  const path = () => {
    const pts: string[] = []
    for (let tt = 0; tt <= (open ? tOpen! : playEnd); tt += playEnd / 200) pts.push(`${X(tt)},${Y(skydiveVelocity(M, K_BODY, K_CHUTE, Infinity, tt).v)}`)
    if (open) for (let tt = tOpen!; tt <= playEnd; tt += playEnd / 200) pts.push(`${X(tt)},${Y(skydiveVelocity(M, K_BODY, K_CHUTE, tOpen!, tt).v)}`)
    return pts.join(' ')
  }

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <figure className="m-0 overflow-hidden p-0" style={fig}>
          <svg viewBox={`0 0 220 ${H}`} className="w-full" role="img" aria-label={hanging ? 'A jumper hangs from a rope, tension balancing weight.' : `A jumper falls at ${f2(v)} metres per second. ${open ? 'The parachute is open.' : 'Free-falling, no parachute yet.'} ${balanced ? 'Forces are balanced: constant speed.' : net > 0 ? 'Weight is bigger than drag: speeding up.' : 'Drag is bigger than weight: slowing down.'}`}>
            <rect width="220" height={H} fill="#bcdcf0" />
            {clouds.map((c, i) => (
              <ellipse key={i} cx={c.x} cy={c.y} rx="30" ry="12" fill="#fff" opacity="0.85" />
            ))}
            {hanging ? (
              <g>
                <line x1="110" y1="0" x2="110" y2="130" stroke="#5a3a1a" strokeWidth="2.5" />
                <Jumper cx={110} cy={150} open={false} />
                <Arrow x1={110} y1="132" x2="110" y2="102" color="#5a3a1a" />
                <text x="116" y="112" fontSize="10" fontWeight="900" fill="#5a3a1a">T</text>
                <Arrow x1={110} y1="150" x2="110" y2="180" color="var(--danger)" />
                <text x="116" y="176" fontSize="10" fontWeight="900" fill="var(--danger)">W</text>
              </g>
            ) : (
              <g>
                <Jumper cx={110} cy={130} open={open} />
                <Arrow x1={110} y1={132} x2={110} y2={132 + weightPx} color="var(--danger)" w={4} />
                <text x="150" y={132 + weightPx + 4} fontSize="10.5" fontWeight="900" fill="var(--danger)" textAnchor="middle">W = {f2(M * 9.81, 0)} N</text>
                {v > 0.3 && (
                  <>
                    <Arrow x1={110} y1={104} x2={110} y2={104 - dragPx} color="var(--accent)" w={4} />
                    <text x="60" y={104 - dragPx - 4} fontSize="10.5" fontWeight="900" fill="var(--accent)" textAnchor="middle">F_drag = {f2(drag, 0)} N</text>
                  </>
                )}
              </g>
            )}
          </svg>
        </figure>

        <figure className="m-0 p-2" style={fig}>
          <svg viewBox={`0 0 ${W} ${gH}`} className="w-full" role="img" aria-label={`Velocity against time. Terminal velocity in free fall is ${f2(VT1, 0)} metres per second; under the open parachute it is ${f2(VT2, 0)} metres per second.`}>
            <line x1={padL} y1="6" x2={padL} y2={gH - padB} stroke="var(--border-strong)" strokeWidth="1.5" />
            <line x1={padL} y1={gH - padB} x2={W - 4} y2={gH - padB} stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="2" y="16" fontSize="10" fontWeight="800" fill="var(--text-subtle)">v (m/s)</text>
            <text x={W - 26} y={gH - 6} fontSize="10" fontWeight="800" fill="var(--text-subtle)">t (s)</text>
            <line x1={padL} y1={Y(VT1)} x2={W - 4} y2={Y(VT1)} stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
            <text x={W - 6} y={Y(VT1) - 3} fontSize="9" textAnchor="end" fill="var(--accent)">v_t1 = {f2(VT1, 0)}</text>
            <line x1={padL} y1={Y(VT2)} x2={W - 4} y2={Y(VT2)} stroke="var(--success)" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
            <text x={W - 6} y={Y(VT2) - 3} fontSize="9" textAnchor="end" fill="var(--success)">v_t2 = {f2(VT2, 0)}</text>
            <polyline points={path()} fill="none" stroke="var(--warning)" strokeWidth="3" />
            {open && <line x1={X(tOpen!)} y1="6" x2={X(tOpen!)} y2={gH - padB} stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="3 3" />}
            {!hanging && <circle cx={X(t)} cy={Y(v)} r="5" fill="var(--warning)" stroke="var(--text)" strokeWidth="1.5" />}
          </svg>
        </figure>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {hanging && <button onClick={cut} className={ctl} style={btn1}>✂ CUT THE ROPE</button>}
        {!hanging && !open && <button onClick={openChute} className={ctl} style={btn1}>🪂 OPEN PARACHUTE</button>}
        {!hanging && <button onClick={() => setPlaying((p) => !p)} className={ctl} style={btn2}>{playing ? '⏸ PAUSE' : '▶ PLAY'}</button>}
        <button onClick={restart} className={ctl} style={btn2}>↺ RESTART</button>
        {!hanging && (
          <label className="flex min-w-[160px] flex-1 items-center gap-2 text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
            time
            <input type="range" min={0} max={playEnd} step={0.05} value={t} onChange={(e) => { setPlaying(false); setT(Number(e.target.value)) }} className="w-full" style={{ accentColor: 'var(--warning)' }} aria-label="Scrub time" />
          </label>
        )}
      </div>

      <div className="rounded-[var(--radius-panel)] p-3 text-sm" style={panel} aria-live="polite">
        {hanging && <div style={{ color: 'var(--text)' }}>Hanging still: <strong>tension balances weight</strong>. Cut the rope and weight becomes the only force.</div>}
        {!hanging && (
          <>
            <div style={{ color: 'var(--text)' }}>speed: <strong>{f2(v)} m s⁻¹</strong> · weight {f2(M * 9.81, 0)} N · drag {f2(drag, 0)} N · net {f2(net, 0)} N</div>
            <div className="mt-1 font-black" style={{ color: balanced ? 'var(--success)' : 'var(--warning)' }}>
              {balanced ? `✓ balanced: drag ≈ weight, constant speed (terminal velocity, ${f2(vt, 0)} m s⁻¹)` : net > 0 ? '✗ unbalanced: weight > drag, still speeding up' : '✗ unbalanced: drag > weight, slowing down'}
            </div>
            {open && <div className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>Opening the canopy hugely increases the drag, so even though the jumper hasn’t slowed down yet, drag briefly overtakes weight — that’s why it decelerates towards a much lower terminal velocity.</div>}
          </>
        )}
      </div>
    </div>
  )
}
