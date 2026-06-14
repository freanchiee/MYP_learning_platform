'use client'

/**
 * SmokeAlarm.tsx — copyright-safe SVG replacement for physics-nov-2024 page-03-crop.png
 *
 * Original: dramatic photograph of a white round smoke detector surrounded by
 * thick smoke and fire embers (dark backdrop, moody lighting).
 *
 * This version: clean educational schematic — circular detector mounted flush on
 * ceiling, five smoke columns fanning upward from below and entering the vents.
 * Strategically different: white background, schematic/flat-design style, visible
 * vent details, gradient smoke columns, active red LED — clearly original artwork.
 */
import React from 'react'

interface Props {
  width?: number
  className?: string
}

// ── Constants (module-level, pure math — no hooks) ───────────────────────────
const VW   = 480
const VH   = 510
const CX   = 240   // detector centre X
const CY   = 166   // detector face centre Y
const R    = 84    // outer radius of detector face

const VENTS  = 16
const VENT_R = 66  // radius of vent-hole ring

const ventHoles = Array.from({ length: VENTS }, (_, i) => {
  const deg = (i * 360) / VENTS
  const rad = (deg * Math.PI) / 180
  return { x: CX + VENT_R * Math.cos(rad), y: CY + VENT_R * Math.sin(rad), deg }
})

// Five smoke wisps: narrow at bottom (x ≈ 218–262) fanning to detector width at top
const WISPS: Array<{ d: string; sw: number }> = [
  {
    // leftmost — drifts left as it rises
    d:  `M 218,498 C 198,455 228,415 204,374 C 180,333 208,295 186,258 L 163,246`,
    sw: 11,
  },
  {
    d:  `M 228,498 C 246,455 208,416 230,375 C 252,334 215,297 212,259 L 200,246`,
    sw: 13,
  },
  {
    // centre — nearly vertical, slight right wobble
    d:  `M 240,498 C 258,456 222,417 244,376 C 266,335 228,298 244,260 L 240,246`,
    sw: 14,
  },
  {
    d:  `M 252,498 C 234,455 268,416 248,375 C 228,334 264,297 268,259 L 280,246`,
    sw: 13,
  },
  {
    // rightmost — drifts right
    d:  `M 262,498 C 282,455 252,416 274,375 C 296,334 270,296 292,258 L 317,246`,
    sw: 11,
  },
]

export default function SmokeAlarm({ width = 480, className }: Props) {
  return (
    <div className="figure-surface inline-block p-2">
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif', background: '#fff' }}
      className={className}
      aria-label="Smoke alarm mounted on ceiling, activated by rising smoke"
    >
      <defs>
        {/* ── Ceiling ── */}
        <linearGradient id="sa-ceil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#bec5ce" />
          <stop offset="100%" stopColor="#dce1e8" />
        </linearGradient>

        {/* ── Detector face: white centre → grey edge ── */}
        <radialGradient id="sa-face" cx="42%" cy="38%" r="58%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="65%"  stopColor="#f2f2f2" />
          <stop offset="100%" stopColor="#dcdcdc" />
        </radialGradient>

        {/* ── Center TEST button ── */}
        <radialGradient id="sa-btn" cx="38%" cy="35%" r="54%">
          <stop offset="0%"   stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#bebebe" />
        </radialGradient>

        {/* ── Smoke column gradient: invisible at bottom → grey at top ── */}
        <linearGradient
          id="sa-smoke"
          x1="0" y1="498" x2="0" y2="248"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#aaa" stopOpacity="0"    />
          <stop offset="38%"  stopColor="#999" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#888" stopOpacity="0.74" />
        </linearGradient>

        {/* ── Drop-shadow for detector disc ── */}
        <filter id="sa-shadow" x="-12%" y="-6%" width="124%" height="132%">
          <feDropShadow dx="0" dy="5" stdDeviation="8" floodOpacity="0.16" />
        </filter>

        {/* ── Soft blur for background smoke haze ── */}
        <filter id="sa-haze">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* ── 1. BACKGROUND SMOKE HAZE (blurred, drawn first) ─────────────────── */}
      <g filter="url(#sa-haze)" opacity="0.32">
        <ellipse cx="196" cy="368" rx="52" ry="92"  fill="#bbb" />
        <ellipse cx="242" cy="348" rx="62" ry="106" fill="#bbb" />
        <ellipse cx="288" cy="372" rx="50" ry="90"  fill="#bbb" />
      </g>

      {/* ── 2. SMOKE WISPS (under detector, appear to enter vents) ──────────── */}
      {WISPS.map((w, i) => (
        <path
          key={i}
          d={w.d}
          fill="none"
          stroke="url(#sa-smoke)"
          strokeWidth={w.sw}
          strokeLinecap="round"
        />
      ))}

      {/* ── 3. CEILING (drawn after haze so it covers bleed above y=50) ─────── */}
      <rect x="0" y="0" width={VW} height="50" fill="url(#sa-ceil)" />
      {[80, 160, 240, 320, 400].map(lx => (
        <line
          key={lx}
          x1={lx} y1="0" x2={lx} y2="50"
          stroke="#b2bac3" strokeWidth="0.5" opacity="0.35"
        />
      ))}
      <line x1="0" y1="50" x2={VW} y2="50" stroke="#a6aeb8" strokeWidth="1" />

      {/* ── 4. MOUNTING BRACKET ──────────────────────────────────────────────── */}
      <rect x="220" y="43" width="40" height="26" rx="5" fill="#c6c9d0" />
      {/* Bolt marks */}
      <circle cx="231" cy="56" r="3.5" fill="#adb0b8" />
      <circle cx="249" cy="56" r="3.5" fill="#adb0b8" />

      {/* ── 5. DETECTOR ──────────────────────────────────────────────────────── */}
      {/* 3D rim depth — darker ellipse visible at bottom edge of casing */}
      <ellipse cx={CX} cy={CY + R + 6} rx={R} ry="11" fill="#c2c4c8" />

      {/* Main face disc */}
      <circle
        cx={CX} cy={CY} r={R}
        fill="url(#sa-face)" filter="url(#sa-shadow)"
      />

      {/* Outer ridge ring */}
      <circle cx={CX} cy={CY} r={R - 4}
              fill="none" stroke="#cecfd4" strokeWidth="2.5" />

      {/* Inner zone ring */}
      <circle cx={CX} cy={CY} r={R - 30}
              fill="none" stroke="#e2e4e8" strokeWidth="1.5" />

      {/* Vent holes — 16 slots around the vent ring */}
      {ventHoles.map((v, i) => (
        <ellipse
          key={i}
          cx={v.x} cy={v.y}
          rx="4.5" ry="2.5"
          fill="#c8cacd" stroke="#b6b9be" strokeWidth="0.8"
          transform={`rotate(${v.deg},${v.x},${v.y})`}
        />
      ))}

      {/* Center TEST button */}
      <circle cx={CX} cy={CY} r="24"
              fill="url(#sa-btn)" stroke="#b6b8bc" strokeWidth="1.5" />
      <circle cx={CX} cy={CY} r="19"
              fill="none" stroke="#cecece" strokeWidth="1" />
      <text
        x={CX} y={CY + 5}
        textAnchor="middle"
        fontSize="9" fontWeight="700"
        fill="#888" letterSpacing="0.8"
      >
        TEST
      </text>

      {/* Active red LED indicator */}
      <circle cx={CX + 34} cy={CY - 34} r="6.5" fill="#cc0000" />
      <circle cx={CX + 34} cy={CY - 34} r="3.8" fill="#ff5555" opacity="0.9" />

      {/* ── 6. LABEL ─────────────────────────────────────────────────────────── */}
      <rect x="168" y="462" width="144" height="32" rx="7"
            fill="white" fillOpacity="0.92" />
      <text
        x={CX} y="483"
        textAnchor="middle"
        fontSize="14" fontWeight="700"
        fill="#444"
      >
        Smoke Alarm
      </text>
    </svg>
    </div>
  )
}
