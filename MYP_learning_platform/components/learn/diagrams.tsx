'use client'
import type { ReactNode } from 'react'
import { heightAtDistance, launchComponents, WALL_QUESTION } from '@/lib/learn/projectile-model'

// Static, labelled figures for the question and worked-solution slides. Physics is a picture subject: every problem
// gets the diagram a teacher would draw on the board first. Colours are theme tokens so they follow the theme switcher.
// Figures that are not drawn to scale say so in their caption.
const INK = 'var(--text)'
const MUTED = 'var(--text-muted)'
const SUB = 'var(--text-subtle)'
const RED = 'var(--danger)'
const GREEN = 'var(--success)'
const BLUE = 'var(--info, var(--accent))'
const PURPLE = 'var(--accent)'
const RAD = Math.PI / 180

function Svg({ h, label, children }: { h: number; label: string; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 700 ${h}`} className="w-full" role="img" aria-label={label} style={{ background: 'var(--surface-inset)', borderRadius: 'var(--radius-panel)', border: '1px solid var(--border)' }}>
      {children}
    </svg>
  )
}

function Arrow({ x1, y1, x2, y2, color = INK, w = 2.5, dash }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number; dash?: string }) {
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 3) return null
  const ux = dx / len, uy = dy / len
  const h = Math.min(10, len * 0.45)
  const bx = x2 - ux * h, by = y2 - uy * h
  return (
    <g stroke={color} fill={color} strokeWidth={w} strokeLinecap="round">
      <line x1={x1} y1={y1} x2={bx} y2={by} strokeDasharray={dash} />
      <polygon points={`${x2},${y2} ${bx - uy * h * 0.55},${by + ux * h * 0.55} ${bx + uy * h * 0.55},${by - ux * h * 0.55}`} strokeWidth={1} />
    </g>
  )
}

function T({ x, y, children, anchor = 'middle', color = INK, size = 13, weight = 800, rotate }: { x: number; y: number; children: ReactNode; anchor?: 'start' | 'middle' | 'end'; color?: string; size?: number; weight?: number; rotate?: number }) {
  return <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={color} transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}>{children}</text>
}

/** A dimension line with end ticks: the label sits beside it. */
function Dim({ x1, y1, x2, y2, label, side = 1, color = MUTED }: { x1: number; y1: number; x2: number; y2: number; label: string; side?: 1 | -1; color?: string }) {
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const nx = (-dy / len) * 5, ny = (dx / len) * 5
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2
  const vertical = Math.abs(dy) > Math.abs(dx)
  return (
    <g stroke={color} strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1 - nx} y1={y1 - ny} x2={x1 + nx} y2={y1 + ny} />
      <line x1={x2 - nx} y1={y2 - ny} x2={x2 + nx} y2={y2 + ny} />
      <text x={vertical ? mx - 9 * side : mx} y={vertical ? my + 4 : my + 17 * side} textAnchor={vertical ? (side > 0 ? 'end' : 'start') : 'middle'} fontSize={13} fontWeight={800} fill={INK} stroke="none">{label}</text>
    </g>
  )
}

function Ground({ y, x0 = 0, x1 = 700 }: { y: number; x0?: number; x1?: number }) {
  const hatches = []
  for (let x = x0 + 10; x < x1; x += 16) hatches.push(<line key={x} x1={x} y1={y} x2={x - 8} y2={y + 8} stroke={SUB} strokeWidth={1} opacity={0.6} />)
  return <g><line x1={x0} y1={y} x2={x1} y2={y} stroke={SUB} strokeWidth={2.5} />{hatches}</g>
}

function Ball({ x, y, r = 10, fill, letter, open }: { x: number; y: number; r?: number; fill: string; letter?: string; open?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={open ? 'none' : fill} stroke={fill} strokeWidth={2} />
      {letter && <text x={x} y={y + 4.5} textAnchor="middle" fontSize={12} fontWeight={800} fill={open ? fill : 'var(--text-on-accent)'}>{letter}</text>}
    </g>
  )
}

function Plane({ x, y, scale = 1, rot = 0 }: { x: number; y: number; scale?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <ellipse cx={0} cy={0} rx={22} ry={5.5} fill="var(--surface-elevated)" stroke={INK} strokeWidth={1.5} />
      <polygon points="-18,-2 -26,-12 -20,-12 -8,-2" fill="var(--surface-elevated)" stroke={INK} strokeWidth={1.2} />
      <polygon points="-3,0 8,12 14,12 8,0" fill="var(--surface-elevated)" stroke={INK} strokeWidth={1.2} />
      <circle cx={14} cy={-1} r={1.6} fill={PURPLE} />
    </g>
  )
}

/** Top-view aircraft, nose pointing up before rotation. */
function PlaneTop({ x, y, rot = 0 }: { x: number; y: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse cx={0} cy={0} rx={5} ry={17} fill="var(--surface-elevated)" stroke={INK} strokeWidth={1.5} />
      <polygon points="-4,-2 -26,9 -26,13 -4,7" fill="var(--surface-elevated)" stroke={INK} />
      <polygon points="4,-2 26,9 26,13 4,7" fill="var(--surface-elevated)" stroke={INK} />
      <polygon points="-3,13 -11,19 -11,22 -3,19" fill="var(--surface-elevated)" stroke={INK} />
      <polygon points="3,13 11,19 11,22 3,19" fill="var(--surface-elevated)" stroke={INK} />
    </g>
  )
}

// ======================================================================= A.1 · independence of x and y
export function IndependenceFigure() {
  const gy = 285, top = 50, ax = 140, bx0 = 185, R = 335
  const pt = (s: number) => ({ x: bx0 + R * s, y: top + (gy - top) * s * s })
  const path = Array.from({ length: 41 }, (_, i) => { const p = pt(i / 40); return `${p.x},${p.y}` }).join(' ')
  const marks = [1 / 3, 2 / 3]
  const end = pt(1)
  return (
    <Svg h={345} label="Ball A is dropped from rest and ball B is thrown horizontally at 5 metres per second, both from 50 metres above level ground. Dotted lines join the two balls at equal times: they are always at the same height. A lands directly below its start; B lands a horizontal distance R away.">
      <Ground y={gy} />
      <line x1={70} y1={top} x2={bx0 + 30} y2={top} stroke={SUB} strokeDasharray="4 5" />
      <Dim x1={70} y1={top} x2={70} y2={gy} label="50 m" />
      {/* A: straight down */}
      <line x1={ax} y1={top + 12} x2={ax} y2={gy - 12} stroke={RED} strokeDasharray="5 5" strokeWidth={2} />
      <Arrow x1={ax} y1={gy - 60} x2={ax} y2={gy - 22} color={RED} />
      {/* B: parabola */}
      <polyline points={path} fill="none" stroke={GREEN} strokeDasharray="6 5" strokeWidth={2.5} />
      {/* equal-time rows */}
      {marks.map((s, i) => {
        const p = pt(s)
        return (
          <g key={s}>
            <line x1={ax} y1={p.y} x2={p.x} y2={p.y} stroke={PURPLE} strokeDasharray="2 4" opacity={0.85} />
            <Ball x={ax} y={p.y} r={5} fill={RED} />
            <Ball x={p.x} y={p.y} r={5} fill={GREEN} />
            <T x={ax - 10} y={p.y + 4} anchor="end" color={MUTED} size={11} weight={700}>{i === 0 ? 't = T / 3' : 't = 2T / 3'}</T>
          </g>
        )
      })}
      <Ball x={ax} y={top} r={11} fill={RED} letter="A" />
      <Ball x={bx0} y={top} r={11} fill={GREEN} letter="B" />
      <Arrow x1={bx0 + 16} y1={top} x2={bx0 + 80} y2={top} color={GREEN} />
      <T x={bx0 + 48} y={top - 10} color={GREEN} size={12}>5 m s⁻¹</T>
      <Ball x={ax} y={gy - 10} r={9} fill={RED} letter="A" />
      <Ball x={end.x} y={gy - 10} r={9} fill={GREEN} letter="B" />
      {/* R and displacement */}
      <Dim x1={bx0} y1={gy + 22} x2={end.x} y2={gy + 22} label="R = ?   (Q2)" side={1} />
      <line x1={bx0} y1={top} x2={end.x} y2={gy - 10} stroke={BLUE} strokeDasharray="2 4" strokeWidth={1.8} />
      <T x={bx0 + 150} y={top + 190} anchor="start" color={BLUE} size={12}>displacement of B (Q3)</T>
      <T x={ax + 12} y={gy - 120} anchor="start" color={RED} size={12}>free fall</T>
      <Arrow x1={640} y1={80} x2={640} y2={150} color={INK} />
      <T x={640} y={72} color={INK} size={12}>g = 10 m s⁻²</T>
      <T x={360} y={26} color={INK} size={13}>A: released from rest · B: projected horizontally · Q1: time for A to land?</T>
    </Svg>
  )
}

// ======================================================================= A.1 · exam question III: the parcel
export function ParcelFigure() {
  const gy = 275, top = 78, x0 = 130, R = 440
  const pt = (s: number) => ({ x: x0 + R * s, y: top + (gy - top) * s * s })
  const path = Array.from({ length: 41 }, (_, i) => { const p = pt(i / 40); return `${p.x},${p.y}` }).join(' ')
  const end = pt(1)
  return (
    <Svg h={330} label="An aircraft flies horizontally at 42 metres per second, 63 metres above level ground, and releases a small parcel. The sketch shows a curved path from the aircraft down to the ground, ahead of the release point.">
      <Ground y={gy} />
      <Dim x1={60} y1={top - 6} x2={60} y2={gy} label="63 m" />
      <line x1={60} y1={top - 6} x2={120} y2={top - 6} stroke={SUB} strokeDasharray="4 5" />
      <Plane x={x0 - 10} y={top - 16} scale={1.3} />
      <Arrow x1={x0 + 28} y1={top - 16} x2={x0 + 110} y2={top - 16} color={GREEN} />
      <T x={x0 + 70} y={top - 30} color={GREEN} size={13}>42 m s⁻¹</T>
      <polyline points={path} fill="none" stroke={PURPLE} strokeDasharray="6 5" strokeWidth={2.5} />
      <rect x={x0 - 6} y={top - 4} width={12} height={12} rx={2} fill={INK} />
      <T x={x0 + 40} y={top + 26} anchor="start" color={INK} size={12}>parcel released here</T>
      <rect x={end.x - 7} y={gy - 14} width={14} height={14} rx={2} fill={INK} />
      <T x={x0 + 215} y={top + 78} anchor="start" color={PURPLE} size={13}>path of the parcel? (i)</T>
      <Dim x1={x0} y1={gy + 24} x2={end.x} y2={gy + 24} label="horizontal distance (not asked)" />
      <Arrow x1={end.x + 40} y1={gy - 80} x2={end.x + 40} y2={gy - 10} color={RED} />
      <T x={end.x + 52} y={gy - 50} anchor="start" color={RED} size={12}>v_y = ? (iii)</T>
      <T x={end.x + 52} y={gy - 100} anchor="start" color={INK} size={12}>speed = ? (iv)</T>
      <T x={430} y={36} color={INK} size={13}>time to reach the ground = ?   (ii)</T>
      <T x={14} y={324} anchor="start" color={MUTED} size={11} weight={700}>not to scale · air resistance negligible</T>
    </Svg>
  )
}

// ======================================================================= A.1 · exam question IV: the wall
export function WallFigure() {
  const { u, angleDeg, y0, g, wallDistance } = WALL_QUESTION
  const S = 11.6, gx = 80, gy = 280
  const th = { u, angleDeg, y0, g }
  const X = (m: number) => gx + m * S
  const Y = (m: number) => gy - m * S
  const pts = Array.from({ length: 56 }, (_, i) => { const x = (i / 55) * 46; return `${X(x)},${Y(Math.max(0, heightAtDistance(th, x)))}` }).join(' ')
  const wallTop = heightAtDistance(th, wallDistance)
  const { vx, vy } = launchComponents(th)
  const k = 78 / u // px per m/s for the launch arrow
  const lx = X(0), ly = Y(y0)
  return (
    <Svg h={335} label="A student throws a ball from 1.2 metres above level ground at 22 metres per second, 40 degrees above the horizontal, toward a vertical wall 36 metres away. The ball just goes over the top of the wall, whose height h is to be found.">
      <Ground y={gy} />
      {/* thrower */}
      <g stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none"><line x1={lx - 14} y1={gy} x2={lx - 14} y2={gy - 14} /><line x1={lx - 14} y1={gy - 14} x2={lx - 6} y2={ly + 4} /><circle cx={lx - 8} cy={ly - 8} r={6} fill="var(--surface-elevated)" /></g>
      <Dim x1={lx - 40} y1={gy} x2={lx - 40} y2={ly} label="1.2 m" />
      {/* path */}
      <polyline points={pts} fill="none" stroke={PURPLE} strokeDasharray="6 5" strokeWidth={2.5} />
      <circle cx={lx} cy={ly} r={6} fill={INK} />
      {/* launch velocity with its components */}
      <Arrow x1={lx} y1={ly} x2={lx + vx * k} y2={ly - vy * k} color={INK} w={3} />
      <line x1={lx} y1={ly} x2={lx + vx * k} y2={ly} stroke={GREEN} strokeDasharray="4 4" strokeWidth={2} />
      <line x1={lx + vx * k} y1={ly} x2={lx + vx * k} y2={ly - vy * k} stroke={RED} strokeDasharray="4 4" strokeWidth={2} />
      <path d={`M${lx + 34},${ly} A34 34 0 0 0 ${lx + 34 * Math.cos(angleDeg * RAD)},${ly - 34 * Math.sin(angleDeg * RAD)}`} fill="none" stroke={MUTED} strokeWidth={1.5} />
      <T x={lx + 48} y={ly - 8} anchor="start" size={12} color={MUTED}>40°</T>
      <T x={lx + vx * k * 0.5 - 6} y={ly - vy * k * 0.5 - 12} anchor="end" size={13}>22 m s⁻¹</T>
      {/* wall */}
      <rect x={X(wallDistance) - 5} y={Y(wallTop)} width={10} height={wallTop * S} fill="var(--warning)" stroke={INK} strokeWidth={1.5} opacity={0.9} />
      <Dim x1={X(wallDistance) + 28} y1={gy} x2={X(wallDistance) + 28} y2={Y(wallTop)} label="h = ?" side={-1} />
      <T x={X(wallDistance) + 14} y={Y(wallTop) - 34} anchor="start" size={12} color={PURPLE}>the ball just</T>
      <T x={X(wallDistance) + 14} y={Y(wallTop) - 19} anchor="start" size={12} color={PURPLE}>goes over the wall</T>
      <Dim x1={lx} y1={gy + 24} x2={X(wallDistance)} y2={gy + 24} label="36 m" />
      <T x={330} y={30} color={INK} size={13}>(i) time to reach the wall = ?</T>
      <T x={330} y={48} color={INK} size={13}>(ii) u_y = ?     (iii) h = ?</T>
      <T x={540} y={322} color={MUTED} size={11} weight={700}>drawn to scale · air resistance negligible</T>
    </Svg>
  )
}



// ======================================================================= A.1 · vectors: the crosswind
export function CrosswindFigure() {
  const run = (x: number) => <g><rect x={x - 18} y={22} width={36} height={270} fill="var(--warning)" opacity={0.25} stroke={SUB} /><line x1={x} y1={30} x2={x} y2={284} stroke={SUB} strokeDasharray="10 8" /></g>
  const theta = Math.asin(50 / 200)
  const L = 150
  const dx = L * Math.sin(theta), dy = L * Math.cos(theta)
  const px = 180, py = 262, qx = 520
  return (
    <Svg h={345} label="Two top views of a landing in a 50 kilometre per hour crosswind from the left, with the aircraft's airspeed 200 kilometres per hour. Left: the nose points 14.5 degrees into the wind, so the sum of the nose velocity and the wind points straight along the runway at 193.6 kilometres per hour. Right: with the nose along the runway the wind adds a sideways velocity and the aircraft is blown off the runway.">
      {run(px)}
      {run(qx)}
      <line x1={350} y1={20} x2={350} y2={310} stroke={SUB} strokeDasharray="2 6" opacity={0.6} />
      {/* wind streaks */}
      {[60, 120, 180, 240].map((y) => <g key={y} opacity={0.4}><Arrow x1={20} y1={y} x2={60} y2={y} color={RED} w={1.5} /><Arrow x1={372} y1={y} x2={412} y2={y} color={RED} w={1.5} /></g>)}
      {/* left: correct */}
      <PlaneTop x={px} y={py} rot={-theta / RAD} />
      <Arrow x1={px} y1={py} x2={px - dx} y2={py - dy} color={BLUE} w={3} />
      <Arrow x1={px - dx} y1={py - dy} x2={px} y2={py - dy} color={RED} w={3} />
      <Arrow x1={px} y1={py} x2={px} y2={py - dy} color={INK} w={3.5} />
      <path d={`M${px},${py - 52} A52 52 0 0 0 ${px - 52 * Math.sin(theta)},${py - 52 * Math.cos(theta)}`} fill="none" stroke={MUTED} strokeWidth={1.5} />
      <T x={px - 34} y={py - 40} anchor="end" size={13} color={MUTED}>θ = 14.5°</T>
      <T x={px - dx - 6} y={py - dy / 2} anchor="end" size={12} color={BLUE}>200 km h⁻¹</T>
      <T x={px - dx / 2} y={py - dy - 8} size={12} color={RED}>wind 50 km h⁻¹</T>
      <T x={px + 10} y={py - dy / 2} anchor="start" size={12}>193.6 km h⁻¹</T>
      <T x={px} y={332} size={13}>nose INTO the wind: track straight ✓</T>
      {/* right: wrong */}
      <PlaneTop x={qx} y={py} />
      <Arrow x1={qx} y1={py} x2={qx} y2={py - dy} color={BLUE} w={3} />
      <Arrow x1={qx} y1={py - dy} x2={qx + 50} y2={py - dy} color={RED} w={3} />
      <Arrow x1={qx} y1={py} x2={qx + 50} y2={py - dy} color={INK} w={3.5} />
      <line x1={qx + 50} y1={py - dy} x2={qx + 50 * (py - 30) / dy} y2={30} stroke={INK} strokeDasharray="5 5" />
      <T x={qx - 8} y={py - dy / 2} anchor="end" size={12} color={BLUE}>200 km h⁻¹</T>
      <T x={qx + 25} y={py - dy - 8} size={12} color={RED}>wind 50</T>
      <T x={qx} y={332} size={13}>nose ALONG the runway: blown off ✗</T>
      <T x={350} y={14} size={11} color={MUTED} weight={700}>top view · the black arrow is where the aircraft actually goes</T>
    </Svg>
  )
}


// ======================================================================= A.1 · stellar aberration
export function AberrationFigure() {
  const a = 12 * RAD // drawn far larger than the true 20.5 arcseconds
  const bx = 180, by = 246, L = 170
  const topX = bx + L * Math.sin(a), topY = by - L * Math.cos(a)
  const tx = 530, ty = 70, ln = 180, sh = Math.tan(a) * ln
  const lightDx = -Math.sin(a), lightDy = Math.cos(a) // light as seen from the Earth moves down and backward
  return (
    <Svg h={335} label="Left: the true direction of a star straight overhead is vertical, but because the Earth moves sideways the telescope must be tilted forward by a small angle alpha to catch its light. Right: the same velocity triangle as for rain and an umbrella: c down, minus the Earth's velocity v sideways, giving tan alpha equal to v over c. The tilt is drawn about two thousand times too large.">
      <T x={bx} y={30} size={24} color={PURPLE}>★</T>
      <line x1={bx} y1={44} x2={bx} y2={by} stroke={SUB} strokeWidth={2} strokeDasharray="6 6" />
      <T x={bx - 10} y={90} anchor="end" size={12} color={MUTED}>true direction</T>
      <T x={bx - 10} y={106} anchor="end" size={12} color={MUTED}>of the star</T>
      {/* the telescope, tilted forward, with the light travelling down it as the Earth sees it */}
      <line x1={bx} y1={by} x2={topX} y2={topY} stroke={INK} strokeWidth={11} strokeLinecap="round" opacity={0.18} />
      <line x1={bx} y1={by} x2={topX} y2={topY} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {[0.38, 0.74].map((f) => { const cx = bx + (topX - bx) * f, cy = by + (topY - by) * f; return <Arrow key={f} x1={cx - lightDx * 17} y1={cy - lightDy * 17} x2={cx + lightDx * 17} y2={cy + lightDy * 17} color={PURPLE} w={3} /> })}
      <T x={topX + 16} y={topY + 14} anchor="start" size={12}>telescope tilted</T>
      <T x={topX + 16} y={topY + 30} anchor="start" size={12}>forward by α</T>
      <path d={`M${bx},${by - 62} A62 62 0 0 1 ${bx + 62 * Math.sin(a)},${by - 62 * Math.cos(a)}`} fill="none" stroke={RED} strokeWidth={2} />
      <T x={bx + 26} y={by - 70} anchor="start" size={15} color={RED}>α</T>
      <ellipse cx={bx} cy={by + 22} rx={62} ry={15} fill={PURPLE} opacity={0.9} />
      <T x={bx} y={by + 27} size={12} color="var(--text-on-accent)">Earth</T>
      <Arrow x1={bx + 72} y1={by + 22} x2={bx + 158} y2={by + 22} color={GREEN} w={3} />
      <T x={bx + 116} y={by + 8} size={12} color={GREEN}>v = 29.8 km s⁻¹</T>
      {/* triangle: c, minus v, and the light as seen from the Earth */}
      <T x={tx - 20} y={ty - 24} size={13}>tan α = v / c = 9.93 × 10⁻⁵</T>
      <Arrow x1={tx} y1={ty} x2={tx} y2={ty + ln} color={PURPLE} w={3} />
      <Arrow x1={tx} y1={ty + ln} x2={tx - sh} y2={ty + ln} color={GREEN} w={3} />
      <Arrow x1={tx} y1={ty} x2={tx - sh} y2={ty + ln} color={INK} w={3.5} />
      <path d={`M${tx},${ty + 56} A56 56 0 0 0 ${tx - 56 * Math.sin(a)},${ty + 56 * Math.cos(a)}`} fill="none" stroke={RED} strokeWidth={2} />
      <T x={tx + 14} y={ty + ln / 2 - 6} anchor="start" size={13} color={PURPLE}>c = 3.00 × 10⁸ m s⁻¹</T>
      <T x={tx + 14} y={ty + ln / 2 + 10} anchor="start" size={11} color={MUTED} weight={700}>(starlight, down)</T>
      <T x={tx - sh - 12} y={ty + ln / 2} anchor="end" size={13}>light as seen</T>
      <T x={tx - sh - 12} y={ty + ln / 2 + 16} anchor="end" size={13}>from the Earth</T>
      <T x={tx - sh / 2} y={ty + ln + 24} size={13} color={GREEN}>− v (Earth, to the left)</T>
      <T x={tx - 12} y={ty + 38} anchor="end" size={14} color={RED}>α</T>
      <T x={350} y={322} size={11} color={MUTED} weight={700}>tilt drawn about 2000 times too large: the real angle is 20.5 arcseconds</T>
    </Svg>
  )
}



export type DiagramId = 'independence' | 'parcel' | 'wall' | 'crosswind' | 'aberration'

export const DIAGRAMS: Record<DiagramId, () => JSX.Element> = {
  independence: IndependenceFigure,
  parcel: ParcelFigure,
  wall: WallFigure,
  crosswind: CrosswindFigure,
  aberration: AberrationFigure,
}

export function Diagram({ id, caption }: { id: DiagramId; caption: string }) {
  const D = DIAGRAMS[id]
  return (
    <figure className="m-0 grid gap-2">
      <D />
      <figcaption className="px-1 text-sm" style={{ color: 'var(--text-muted)' }}>{caption}</figcaption>
    </figure>
  )
}
