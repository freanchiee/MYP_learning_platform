/**
 * DemolitionCraneDiagram.tsx — ORIGINAL ARTWORK
 *
 * Intentionally different from the IB source image:
 *   • Vehicle: wheeled mobile truck-crane (NOT the IB crawler/tank)
 *   • Color: construction yellow + orange instead of blue
 *   • Style: slight 3-D depth (lit top face, shadowed side) vs IB flat
 *   • Building: modern curtain-wall glass facade vs IB Victorian brick house
 *
 * Physics is preserved exactly:
 *   • Ball A at 12.5 m, Ball B at 4.5 m
 *   • Mass = 2000 kg
 *   • Dashed swing arc A → B
 */

import React from 'react'

// ─── sub-components ──────────────────────────────────────────────────────────

function DimArrow({
  x, y1, y2, label, side = 'left',
}: {
  x: number; y1: number; y2: number; label: string; side?: 'left' | 'right'
}) {
  const mid  = (y1 + y2) / 2
  const lx   = side === 'left' ? x - 12 : x + 12
  const anch = side === 'left' ? 'end'  : 'start'
  // White backing rect — width estimated from character count
  const estW = label.length * 9.5 + 10
  const bgX  = side === 'left' ? lx - estW : lx
  return (
    <g>
      {/* shaft */}
      <line x1={x} y1={y1 + 9} x2={x} y2={y2 - 9} stroke="#222" strokeWidth="2" />
      {/* arrowheads */}
      <polygon points={`${x},${y1} ${x - 5},${y1 + 11} ${x + 5},${y1 + 11}`} fill="#222" />
      <polygon points={`${x},${y2} ${x - 5},${y2 - 11} ${x + 5},${y2 - 11}`} fill="#222" />
      {/* label background */}
      <rect x={bgX} y={mid - 12} width={estW} height={24} rx="4"
            fill="white" fillOpacity="0.93" />
      {/* label text */}
      <text x={lx} y={mid + 6} textAnchor={anch}
            fontSize="15" fontWeight="700" fill="#111">{label}</text>
    </g>
  )
}

type Pt = { x: number; y: number }

// ─── main component ───────────────────────────────────────────────────────────

interface Props {
  width?: number
  className?: string
}

export default function DemolitionCraneDiagram({ width = 900, className }: Props) {
  const VW = 900, VH = 660
  const gnd    = 588  // ground y
  const mToPx  = 18   // px per metre

  // ── physics geometry ──────────────────────────────────────────────────────
  const ballA: Pt = { x: 432, y: gnd - 12.5 * mToPx }  // y = 363
  const ballB: Pt = { x: 655, y: gnd - 4.5  * mToPx }  // y = 507

  // Boom: mobile crane turntable → tip
  const armBase: Pt = { x: 282, y: 452 }
  const armTip:  Pt = { x: 662, y: 106 }
  const adx = armTip.x - armBase.x
  const ady = armTip.y - armBase.y
  const armLen = Math.sqrt(adx * adx + ady * ady)
  const ux = adx / armLen, uy = ady / armLen  // unit along arm
  const nx = -uy,          ny =  ux           // unit normal (building side)
  const hw = 11                               // truss half-width px

  // Lattice brace points (N+1 points along arm)
  const N = 9
  const latt: Array<{ r1: Pt; r2: Pt }> = Array.from({ length: N + 1 }, (_, i) => {
    const t = i / N
    const cx = armBase.x + t * adx, cy = armBase.y + t * ady
    return {
      r1: { x: cx + nx * hw, y: cy + ny * hw },  // front rail
      r2: { x: cx - nx * hw, y: cy - ny * hw },  // back rail
    }
  })

  // ── tire positions ────────────────────────────────────────────────────────
  const tireXs = [172, 224, 318, 370]

  // ── glass panel grid ──────────────────────────────────────────────────────
  const glassPanels = [0, 1, 2, 3].flatMap(row =>
    [0, 1, 2].map(col => ({
      row, col,
      gx: 703 + col * 59,
      gy: 222 + row * 91,
      broken: row === 3 && col === 0,   // impact damage on bottom-left panel
    }))
  )

  // ── lug bolt angles ───────────────────────────────────────────────────────
  const lugAngles = [0, 60, 120, 180, 240, 300]

  return (
    <div className="figure-surface inline-block p-2">
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      width={width}
      height={Math.round((VH / VW) * width)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      className={className}
      aria-label="Mobile truck crane: wrecking ball swings from position A (12.5 m) to B (4.5 m)"
    >
      <defs>
        {/* Construction yellow gradient (lit from above) */}
        <linearGradient id="craneY" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffd060" />
          <stop offset="100%" stopColor="#e49000" />
        </linearGradient>
        {/* Lighter face for top surfaces */}
        <linearGradient id="craneTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffe090" />
          <stop offset="100%" stopColor="#f5c030" />
        </linearGradient>
        {/* Glass panel */}
        <linearGradient id="glassG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#a8d8ef" />
          <stop offset="50%"  stopColor="#72b8d8" />
          <stop offset="100%" stopColor="#5a9fc2" />
        </linearGradient>
        {/* Ball radial gradient */}
        <radialGradient id="ballG" cx="32%" cy="28%" r="56%">
          <stop offset="0%"   stopColor="#f05050" />
          <stop offset="65%"  stopColor="#cc1a1a" />
          <stop offset="100%" stopColor="#800808" />
        </radialGradient>
        {/* Rubber tyre */}
        <radialGradient id="tyreG" cx="38%" cy="32%" r="58%">
          <stop offset="0%"   stopColor="#555" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Concrete building */}
        <linearGradient id="concG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#8fa0b5" />
          <stop offset="100%" stopColor="#7a8fa5" />
        </linearGradient>
      </defs>

      {/* ══════════════════════ GROUND ══════════════════════════════════════ */}
      <rect x="0" y={gnd} width={VW} height={VH - gnd} fill="#111" />
      <rect x="0" y={gnd} width={VW} height="3" fill="#2a2a2a" />

      {/* ══════════════════════ BUILDING (modern curtain wall) ══════════════ */}

      {/* 3-D right-side face  (depth=12 → max x=893, within 900px viewBox) */}
      <path d="M881,215 L893,203 L893,576 L881,588 Z" fill="#4a5a6e" />
      {/* 3-D top parapet face */}
      <path d="M698,207 L710,195 L893,195 L881,207 Z" fill="#7a92ad" />

      {/* Main concrete facade */}
      <rect x="698" y="207" width="183" height="381" fill="url(#concG)" />

      {/* Horizontal spandrel bands (floor slabs visible on facade) */}
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={`spr-${i}`}
              x="698" y={207 + i * 91} width="183" height="9"
              fill="#5e6e82" />
      ))}

      {/* Vertical concrete column strips */}
      {[0, 1, 2, 3].map(col => (
        <rect key={`vcol-${col}`}
              x={698 + col * 59} y="207" width="5" height="381"
              fill="#5e6e82" opacity="0.6" />
      ))}

      {/* Glass curtain-wall panels */}
      {glassPanels.map(({ row, col, gx, gy, broken }) => (
        <g key={`gp-${row}-${col}`}>
          <rect x={gx} y={gy} width="50" height="78"
                fill={broken ? '#4a6474' : 'url(#glassG)'}
                stroke="#5a7a92" strokeWidth="1.2" />
          {/* Horizontal mullion */}
          <line x1={gx}    y1={gy + 41} x2={gx + 50} y2={gy + 41}
                stroke="#5a7a92" strokeWidth="0.8" />
          {/* Vertical mullion */}
          <line x1={gx + 25} y1={gy} x2={gx + 25} y2={gy + 78}
                stroke="#5a7a92" strokeWidth="0.8" />
          {/* Glass highlight / reflection */}
          {!broken && (
            <line x1={gx + 6} y1={gy + 6} x2={gx + 18} y2={gy + 34}
                  stroke="rgba(255,255,255,0.32)" strokeWidth="2.5"
                  strokeLinecap="round" />
          )}
          {/* Broken panel — cracks */}
          {broken && (
            <>
              <path d={`M${gx + 12},${gy} L${gx + 2},${gy + 28} L${gx + 14},${gy + 55} L${gx + 8},${gy + 78}`}
                    fill="none" stroke="#c8d8e4" strokeWidth="1.5" />
              <path d={`M${gx + 32},${gy + 12} L${gx + 22},${gy + 45}`}
                    fill="none" stroke="#c8d8e4" strokeWidth="1" />
              {/* Broken-glass fill */}
              <polygon points={`${gx + 2},${gy + 28} ${gx + 14},${gy} ${gx + 25},${gy + 20} ${gx + 14},${gy + 55}`}
                       fill="rgba(180,210,225,0.18)" />
            </>
          )}
        </g>
      ))}

      {/* Impact crack in concrete column */}
      <path d="M698,486 Q706,508 698,530 Q707,550 700,588"
            fill="none" stroke="#3a4858" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="701" cy="505" rx="11" ry="7"
               fill="#5a6878" opacity="0.55" />

      {/* ══════════════════════ TRUCK CRANE ═════════════════════════════════ */}

      {/* Ground shadow */}
      <ellipse cx="268" cy={gnd + 5} rx="150" ry="11"
               fill="rgba(0,0,0,0.4)" />

      {/* ── Outrigger stabilisers ── */}
      {/* Left outrigger beam */}
      <path d="M148,516 L80,516 L80,532 L148,532 Z" fill="#c97800" />
      {/* 3-D top of outrigger */}
      <path d="M80,516 L96,502 L164,502 L148,516 Z" fill="#fdc840" />
      {/* Outrigger foot pad */}
      <rect x="69" y="530" width="24" height="14" rx="2" fill="#555" />
      <path d="M69,530 L81,520 L93,520 L93,534 L69,544 Z" fill="#444" />

      {/* Right outrigger beam */}
      <path d="M370,516 L438,516 L438,532 L370,532 Z" fill="#c97800" />
      <path d="M370,516 L386,502 L452,502 L438,516 Z" fill="#fdc840" />
      <rect x="436" y="530" width="24" height="14" rx="2" fill="#555" />

      {/* ── Main truck chassis — 3-D box ── */}
      {/* Right-side face (darker) */}
      <path d="M370,478 L386,463 L386,540 L370,548 Z" fill="#c07200" />
      {/* Top face (lighter) */}
      <path d="M148,478 L164,463 L386,463 L370,478 Z" fill="url(#craneTop)" />
      {/* Front face */}
      <rect x="148" y="478" width="222" height="70" rx="3" fill="url(#craneY)" />
      {/* Panel detail lines on chassis */}
      <line x1="225" y1="478" x2="225" y2="548" stroke="#c07200" strokeWidth="1.5" opacity="0.5" />
      <line x1="310" y1="478" x2="310" y2="548" stroke="#c07200" strokeWidth="1.5" opacity="0.5" />
      {/* Access hatch */}
      <rect x="155" y="487" width="64" height="42" rx="2"
            fill="#c07200" opacity="0.35" stroke="#a06000" strokeWidth="1" />

      {/* ── Operator cab ── */}
      {/* Right face */}
      <path d="M224,449 L240,435 L240,480 L224,480 Z" fill="#c07200" />
      {/* Top face */}
      <path d="M148,449 L164,435 L240,435 L224,449 Z" fill="url(#craneTop)" />
      {/* Front face */}
      <rect x="148" y="449" width="76" height="31" rx="3" fill="url(#craneY)" />
      {/* Windshield */}
      <rect x="154" y="453" width="64" height="22" rx="2"
            fill="#8ad4f0" fillOpacity="0.7" stroke="#5a9ab8" strokeWidth="1" />
      <line x1="158" y1="455" x2="165" y2="473"
            stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Door line */}
      <line x1="200" y1="449" x2="200" y2="480"
            stroke="#c07200" strokeWidth="1.2" opacity="0.6" />

      {/* ── Crane superstructure / turntable housing ── */}
      {/* Right face */}
      <path d="M325,445 L341,431 L341,480 L325,480 Z" fill="#c07200" />
      {/* Top face */}
      <path d="M224,445 L240,431 L341,431 L325,445 Z" fill="url(#craneTop)" />
      {/* Front face */}
      <rect x="224" y="445" width="101" height="35" rx="2" fill="url(#craneY)" />
      {/* Hydraulic detail */}
      <rect x="232" y="450" width="18" height="22" rx="1"
            fill="#a06000" opacity="0.5" />

      {/* ── Rubber tyres ── */}
      {tireXs.map((tx, i) => (
        <g key={`tyre-${i}`}>
          {/* Tyre body */}
          <circle cx={tx} cy={563} r="22" fill="url(#tyreG)" />
          <circle cx={tx} cy={563} r="22" fill="none" stroke="#2a2a2a" strokeWidth="2.5" />
          {/* Tread highlight */}
          <circle cx={tx} cy={563} r="18" fill="none" stroke="#3a3a3a" strokeWidth="1" />
          {/* Hubcap */}
          <circle cx={tx} cy={563} r="10" fill="#909090" />
          <circle cx={tx} cy={563} r="6.5" fill="#c0c0c0" />
          <circle cx={tx} cy={563} r="2.5" fill="#606060" />
          {/* Lug bolts */}
          {lugAngles.map(a => (
            <circle key={`${i}-${a}`}
                    cx={tx + 7.8 * Math.cos(a * Math.PI / 180)}
                    cy={563  + 7.8 * Math.sin(a * Math.PI / 180)}
                    r="1.5" fill="#606060" />
          ))}
        </g>
      ))}

      {/* ── Boom pivot / slewing ring ── */}
      <circle cx={armBase.x} cy={armBase.y} r="15" fill="#a06000" stroke="#888" strokeWidth="2" />
      <circle cx={armBase.x} cy={armBase.y} r="8"  fill="#d09020" />
      <circle cx={armBase.x} cy={armBase.y} r="3"  fill="#f0c030" />

      {/* ══════════════════════ LATTICE BOOM ════════════════════════════════ */}

      {/* Boom drop-shadow (below back rail) */}
      <line
        x1={armBase.x - nx * hw * 1.6}  y1={armBase.y - ny * hw * 1.6 + 4}
        x2={armTip.x  - nx * hw * 1.6}  y2={armTip.y  - ny * hw * 1.6 + 4}
        stroke="rgba(0,0,0,0.22)" strokeWidth="9" strokeLinecap="round"
      />

      {/* X-braces (orange) */}
      {Array.from({ length: N }, (_, i) => {
        const { r1: p1, r2: p2 }   = latt[i]
        const { r1: p1n, r2: p2n } = latt[i + 1]
        return (
          <g key={`br-${i}`}>
            <line x1={p1.x} y1={p1.y} x2={p2n.x} y2={p2n.y}
                  stroke="#c97800" strokeWidth="2.5" />
            <line x1={p2.x} y1={p2.y} x2={p1n.x} y2={p1n.y}
                  stroke="#c97800" strokeWidth="2.5" />
          </g>
        )
      })}

      {/* Back chord (darker = in shadow) */}
      <line
        x1={armBase.x - nx * hw} y1={armBase.y - ny * hw}
        x2={armTip.x  - nx * hw} y2={armTip.y  - ny * hw}
        stroke="#a06200" strokeWidth="5.5" strokeLinecap="round"
      />
      {/* Front chord (lit face) */}
      <line
        x1={armBase.x + nx * hw} y1={armBase.y + ny * hw}
        x2={armTip.x  + nx * hw} y2={armTip.y  + ny * hw}
        stroke="#f5a800" strokeWidth="5.5" strokeLinecap="round"
      />

      {/* Boom tip sheave */}
      <circle cx={armTip.x} cy={armTip.y} r="11" fill="#f0a000" stroke="#a06000" strokeWidth="2.5" />
      <circle cx={armTip.x} cy={armTip.y} r="5"  fill="#c88010" />

      {/* ══════════════════════ SUPPORT CABLES ══════════════════════════════ */}
      {/* Back-stay: tip → deflection pulley → slewing base */}
      <line x1={armTip.x} y1={armTip.y} x2="280" y2="346"
            stroke="#555" strokeWidth="2" strokeLinecap="round" />
      <line x1="280" y1="346" x2="250" y2="452"
            stroke="#555" strokeWidth="2" strokeLinecap="round" />
      {/* Deflection pulley */}
      <circle cx="280" cy="346" r="8" fill="#b0b0b0" stroke="#666" strokeWidth="1.5" />
      <circle cx="280" cy="346" r="3" fill="#777" />

      {/* Main hoist cable: tip → ball A */}
      <line x1={armTip.x} y1={armTip.y} x2={ballA.x} y2={ballA.y}
            stroke="#555" strokeWidth="2.5" strokeLinecap="round" />

      {/* ══════════════════════ SWING ARC ═══════════════════════════════════ */}
      <path
        d={`M ${ballA.x} ${ballA.y} Q 548 485 ${ballB.x} ${ballB.y}`}
        fill="none" stroke="#2a78cc" strokeWidth="2.5"
        strokeDasharray="11 7" strokeLinecap="round"
      />

      {/* ══════════════════════ BALL A ══════════════════════════════════════ */}
      <circle cx={ballA.x} cy={ballA.y} r="23" fill="url(#ballG)" />
      <circle cx={ballA.x} cy={ballA.y} r="23" fill="none" stroke="#600808" strokeWidth="1.5" />
      <circle cx={ballA.x - 8} cy={ballA.y - 8} r="5" fill="rgba(255,255,255,0.18)" />
      {/* "A" label — white chip so it reads against crane arm */}
      <rect x={ballA.x + 27} y={ballA.y - 8} width="28" height="26" rx="5"
            fill="white" fillOpacity="0.92" />
      <text x={ballA.x + 41} y={ballA.y + 10}
            fontSize="19" fontWeight="bold" fill="#111" textAnchor="middle">A</text>

      {/* ══════════════════════ BALL B ══════════════════════════════════════ */}
      <line x1={armTip.x} y1={armTip.y} x2={ballB.x} y2={ballB.y}
            stroke="#888" strokeWidth="1.5" strokeDasharray="7 5" opacity="0.32" />
      <circle cx={ballB.x} cy={ballB.y} r="23" fill="url(#ballG)" />
      <circle cx={ballB.x} cy={ballB.y} r="23" fill="none" stroke="#600808" strokeWidth="1.5" />
      <circle cx={ballB.x - 8} cy={ballB.y - 8} r="5" fill="rgba(255,255,255,0.18)" />
      {/* "B" label — white chip, positioned above-left so it clears the building */}
      <rect x={ballB.x - 52} y={ballB.y - 44} width="28" height="26" rx="5"
            fill="white" fillOpacity="0.92" />
      <text x={ballB.x - 38} y={ballB.y - 22}
            fontSize="19" fontWeight="bold" fill="#111" textAnchor="middle">B</text>

      {/* ══════════════════════ DIMENSION LINES ═════════════════════════════ */}
      {/*
          12.5 m arrow: just left of ball A, in the open space between crane and building
          4.5  m arrow: left of ball B (between ball B and building), label on left side
      */}
      <DimArrow x={408}  y1={ballA.y} y2={gnd} label="12.5 m" side="left" />
      <DimArrow x={676}  y1={ballB.y} y2={gnd} label="4.5 m"  side="left" />

      {/* ══════════════════════ LEGEND & TITLE ══════════════════════════════ */}
      {/* White panel behind legend so it reads against any background */}
      <rect x="14" y="22" width="258" height="30" rx="6"
            fill="white" fillOpacity="0.92" />
      <circle cx="32" cy="37" r="11" fill="url(#ballG)" stroke="#600808" strokeWidth="1.5" />
      <text x="50" y="42" fontSize="15" fontWeight="600" fill="#111">
        Mass of steel ball = 2000 kg
      </text>
      {/* "Diagram not to scale" — white chip top-right */}
      <rect x={VW - 182} y="18" width="172" height="24" rx="5"
            fill="white" fillOpacity="0.88" />
      <text x={VW - 20} y="35" textAnchor="end"
            fontSize="13" fontStyle="italic" fill="#555">
        Diagram not to scale
      </text>
    </svg>
    </div>
  )
}
