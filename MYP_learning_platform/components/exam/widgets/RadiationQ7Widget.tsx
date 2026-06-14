'use client'

/**
 * RadiationQ7Widget — Two SVG diagrams for Nov-2016 Q7 (Radiation Investigation)
 *
 * Diagram 1 — Radiation Penetration:
 *   Shows α (alpha), β (beta), γ (gamma) arrows penetrating Paper / Aluminium / Lead.
 *   α stops at paper; β stops at aluminium; γ attenuates through lead.
 *
 * Diagram 2 — Beta Thickness Monitor:
 *   Factory setup: two rollers pressing aluminium foil, β-source below, detector above.
 *   Sensor adjusts rollers based on detector count rate.
 *
 * Rule: Render as SVG whenever possible instead of using PDF screenshots.
 * For diagrams that cannot be rendered in SVG cleanly, see the ChatGPT prompt in
 * the code comment at the bottom of this file.
 */

// ══════════════════════════════════════════════════════════════════════════════
// Diagram 1 — Radiation Penetration
// ══════════════════════════════════════════════════════════════════════════════

function SineWaveSegment({
  x0, x1, cy, amplitude, period = 22, color = '#7c3aed', strokeWidth = 1.8,
}: {
  x0: number; x1: number; cy: number; amplitude: number
  period?: number; color?: string; strokeWidth?: number
}) {
  const pts: string[] = []
  for (let x = x0; x <= x1; x += 2) {
    const y = cy - amplitude * Math.sin((2 * Math.PI * (x - x0)) / period)
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return (
    <polyline
      points={pts.join(' ')}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  )
}

function Arrow({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) {
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  const ux = dx / len, uy = dy / len
  const headLen = 8
  const ax = x2 - headLen * ux, ay = y2 - headLen * uy
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polygon
        points={`${x2},${y2} ${ax - 4 * uy},${ay + 4 * ux} ${ax + 4 * uy},${ay - 4 * ux}`}
        fill={color}
      />
    </g>
  )
}

// Material blocks (x positions)
const PAPER_X  = 160
const PAPER_W  = 8
const ALU_X    = 245
const ALU_W    = 40
const LEAD_X   = 360
const LEAD_W   = 55

const ROW_ALPHA = 62
const ROW_BETA  = 110
const ROW_GAMMA = 158

const BLOCK_TOP    = 28
const BLOCK_BOTTOM = 188

function PenetrationDiagram() {
  return (
    <svg viewBox="0 0 520 210" className="w-full h-full">
      {/* ── Material blocks ── */}
      {/* Paper — thin, warm beige */}
      <rect x={PAPER_X} y={BLOCK_TOP} width={PAPER_W} height={BLOCK_BOTTOM - BLOCK_TOP}
            fill="#f5e6c8" stroke="#c9a96e" strokeWidth="1" rx="1" />
      {/* Aluminium — medium silver */}
      <rect x={ALU_X} y={BLOCK_TOP} width={ALU_W} height={BLOCK_BOTTOM - BLOCK_TOP}
            fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" rx="2" />
      {/* Lead — thick dark blue-grey */}
      <rect x={LEAD_X} y={BLOCK_TOP} width={LEAD_W} height={BLOCK_BOTTOM - BLOCK_TOP}
            fill="#4b5563" stroke="#374151" strokeWidth="1" rx="2" />

      {/* Material labels */}
      <text x={PAPER_X + PAPER_W / 2} y={200} textAnchor="middle" fontSize="11"
            fill="#92400e" fontWeight="600">Paper</text>
      <text x={ALU_X + ALU_W / 2}  y={200} textAnchor="middle" fontSize="11"
            fill="#6b7280" fontWeight="600">Aluminium</text>
      <text x={LEAD_X + LEAD_W / 2} y={200} textAnchor="middle" fontSize="11"
            fill="#d1d5db" fontWeight="600">Lead</text>

      {/* ── Row labels ── */}
      <text x="14" y={ROW_ALPHA + 4} textAnchor="middle" fontSize="15" fill="#dc2626" fontStyle="italic" fontWeight="700">α</text>
      <text x="14" y={ROW_BETA + 4}  textAnchor="middle" fontSize="15" fill="#2563eb" fontStyle="italic" fontWeight="700">β</text>
      <text x="14" y={ROW_GAMMA + 4} textAnchor="middle" fontSize="15" fill="#7c3aed" fontStyle="italic" fontWeight="700">γ</text>

      {/* ── α: large red dot → arrow → stopped at paper ── */}
      <circle cx="34" cy={ROW_ALPHA} r="7" fill="#dc2626" />
      <Arrow x1={45} y1={ROW_ALPHA} x2={PAPER_X - 4} y2={ROW_ALPHA} color="#dc2626" />
      {/* X mark at paper */}
      <line x1={PAPER_X + 2} y1={ROW_ALPHA - 5} x2={PAPER_X + 6} y2={ROW_ALPHA + 5} stroke="#dc2626" strokeWidth="2" />
      <line x1={PAPER_X + 6} y1={ROW_ALPHA - 5} x2={PAPER_X + 2} y2={ROW_ALPHA + 5} stroke="#dc2626" strokeWidth="2" />

      {/* ── β: small blue dot → arrow through paper, stopped at aluminium ── */}
      <circle cx="34" cy={ROW_BETA} r="4.5" fill="#2563eb" />
      <Arrow x1={41} y1={ROW_BETA} x2={PAPER_X - 3} y2={ROW_BETA} color="#2563eb" />
      {/* continue through paper */}
      <line x1={PAPER_X} y1={ROW_BETA} x2={PAPER_X + PAPER_W} y2={ROW_BETA} stroke="#2563eb" strokeWidth="2" strokeDasharray="3 2" />
      <Arrow x1={PAPER_X + PAPER_W + 2} y1={ROW_BETA} x2={ALU_X - 3} y2={ROW_BETA} color="#2563eb" />
      {/* X mark at aluminium */}
      <line x1={ALU_X + 2}  y1={ROW_BETA - 5} x2={ALU_X + 8}  y2={ROW_BETA + 5} stroke="#2563eb" strokeWidth="2" />
      <line x1={ALU_X + 8}  y1={ROW_BETA - 5} x2={ALU_X + 2}  y2={ROW_BETA + 5} stroke="#2563eb" strokeWidth="2" />

      {/* ── γ: waves all the way through, attenuating at lead ── */}
      {/* Segment 1: before paper (full amplitude) */}
      <SineWaveSegment x0={28} x1={PAPER_X} cy={ROW_GAMMA} amplitude={9} color="#7c3aed" strokeWidth={2} />
      {/* Segment 2: through paper */}
      <SineWaveSegment x0={PAPER_X} x1={PAPER_X + PAPER_W} cy={ROW_GAMMA} amplitude={9} color="#7c3aed" strokeWidth={1.5} />
      {/* Segment 3: paper to aluminium */}
      <SineWaveSegment x0={PAPER_X + PAPER_W} x1={ALU_X} cy={ROW_GAMMA} amplitude={9} color="#7c3aed" strokeWidth={2} />
      {/* Segment 4: through aluminium */}
      <SineWaveSegment x0={ALU_X} x1={ALU_X + ALU_W} cy={ROW_GAMMA} amplitude={8} color="#7c3aed" strokeWidth={1.5} />
      {/* Segment 5: aluminium to lead */}
      <SineWaveSegment x0={ALU_X + ALU_W} x1={LEAD_X} cy={ROW_GAMMA} amplitude={8} color="#7c3aed" strokeWidth={2} />
      {/* Segment 6: through lead (attenuates significantly) */}
      <SineWaveSegment x0={LEAD_X} x1={LEAD_X + LEAD_W} cy={ROW_GAMMA} amplitude={6} color="#a78bfa" strokeWidth={1.5} />
      {/* Segment 7: after lead (much reduced) */}
      <SineWaveSegment x0={LEAD_X + LEAD_W} x1={510} cy={ROW_GAMMA} amplitude={3} color="#c4b5fd" strokeWidth={1.5} />

      {/* ── Source label ── */}
      <text x="30" y="20" textAnchor="middle" fontSize="10" fill="#6b7280">Source</text>
    </svg>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// Diagram 2 — Beta Thickness Monitor (Factory Setup)
// ══════════════════════════════════════════════════════════════════════════════

function Cylinder({ cx, cy, rx, ry, fill, stroke }: {
  cx: number; cy: number; rx: number; ry: number; fill: string; stroke: string
}) {
  return (
    <g>
      {/* Main cylinder body */}
      <rect x={cx - rx} y={cy - ry} width={rx * 2} height={ry * 2}
            fill={fill} stroke={stroke} strokeWidth="1.5" rx={rx * 0.3} />
      {/* Top ellipse cap */}
      <ellipse cx={cx} cy={cy - ry} rx={rx} ry={rx * 0.4}
               fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Bottom ellipse shadow */}
      <ellipse cx={cx} cy={cy + ry} rx={rx} ry={rx * 0.35}
               fill="rgba(0,0,0,0.12)" />
    </g>
  )
}

function BetaMonitorDiagram() {
  // Layout
  const ROLLER_CX_L = 120, ROLLER_CX_R = 280
  const ROLLER_CY   = 110
  const ROLLER_RX   = 40,  ROLLER_RY = 22

  // Foil runs between rollers, at roller centre height ± 2px
  const FOIL_Y  = ROLLER_CY
  const FOIL_X0 = 30
  const FOIL_X1 = 370

  const SOURCE_CX = 200, SOURCE_BOTTOM = 195, SOURCE_TOP = 168
  const DETECT_CX = 200, DETECT_TOP = 24,  DETECT_BOTTOM = 44

  return (
    <svg viewBox="0 0 400 220" className="w-full h-full">
      {/* ── Aluminium foil strip ── */}
      <rect x={FOIL_X0} y={FOIL_Y - 5} width={FOIL_X1 - FOIL_X0} height="10"
            fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
      <text x="200" y={FOIL_Y + 22} textAnchor="middle" fontSize="10"
            fill="#374151" fontWeight="600">Aluminium foil</text>

      {/* ── Direction arrows on foil ── */}
      <Arrow x1={80} y1={FOIL_Y} x2={50} y2={FOIL_Y} color="#6b7280" />
      <Arrow x1={310} y1={FOIL_Y} x2={345} y2={FOIL_Y} color="#6b7280" />

      {/* ── Rollers ── */}
      <Cylinder cx={ROLLER_CX_L} cy={ROLLER_CY} rx={ROLLER_RX} ry={ROLLER_RY}
                fill="#9ca3af" stroke="#6b7280" />
      <Cylinder cx={ROLLER_CX_R} cy={ROLLER_CY} rx={ROLLER_RX} ry={ROLLER_RY}
                fill="#9ca3af" stroke="#6b7280" />
      <text x={ROLLER_CX_L} y={ROLLER_CY + ROLLER_RY + 18} textAnchor="middle"
            fontSize="10" fill="#374151" fontWeight="600">Rollers</text>
      <text x={ROLLER_CX_R} y={ROLLER_CY + ROLLER_RY + 18} textAnchor="middle"
            fontSize="10" fill="#374151" fontWeight="600">Rollers</text>

      {/* ── β source (triangle / wedge below foil) ── */}
      <polygon
        points={`${SOURCE_CX},${SOURCE_TOP} ${SOURCE_CX - 20},${SOURCE_BOTTOM} ${SOURCE_CX + 20},${SOURCE_BOTTOM}`}
        fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"
      />
      <text x={SOURCE_CX + 26} y={(SOURCE_TOP + SOURCE_BOTTOM) / 2 + 4} fontSize="11"
            fill="#92400e" fontWeight="700" fontStyle="italic">β source</text>
      {/* Radiation arrows going up from source */}
      <Arrow x1={SOURCE_CX} y1={SOURCE_TOP - 2} x2={SOURCE_CX} y2={FOIL_Y + 7} color="#2563eb" />
      <Arrow x1={SOURCE_CX - 10} y1={SOURCE_TOP + 4} x2={SOURCE_CX - 10} y2={FOIL_Y + 7} color="#2563eb" />
      <Arrow x1={SOURCE_CX + 10} y1={SOURCE_TOP + 4} x2={SOURCE_CX + 10} y2={FOIL_Y + 7} color="#2563eb" />

      {/* ── Detector (above foil) ── */}
      <rect x={SOURCE_CX - 28} y={DETECT_TOP} width="56" height={DETECT_BOTTOM - DETECT_TOP}
            fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
      <text x={SOURCE_CX} y={DETECT_TOP + 14} textAnchor="middle" fontSize="10"
            fill="#1d4ed8" fontWeight="700">Detector</text>
      {/* Radiation arrow continuing up to detector */}
      <Arrow x1={SOURCE_CX} y1={FOIL_Y - 7} x2={SOURCE_CX} y2={DETECT_BOTTOM + 2} color="#2563eb" />

      {/* ── Sensor/controller box ── */}
      <rect x="300" y="10" width="85" height="34" fill="#d1fae5" stroke="#10b981"
            strokeWidth="1.5" rx="5" />
      <text x="342" y="23" textAnchor="middle" fontSize="9" fill="#065f46" fontWeight="600">Sensor</text>
      <text x="342" y="36" textAnchor="middle" fontSize="8" fill="#047857">adjusts rollers</text>

      {/* Lines: detector → sensor */}
      <line x1={SOURCE_CX + 28} y1={DETECT_TOP + 10} x2="300" y2="27"
            stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" />
      {/* Lines: sensor → left roller */}
      <line x1="300" y1="38" x2={ROLLER_CX_L + ROLLER_RX} y2={ROLLER_CY - ROLLER_RY}
            stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" />
    </svg>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// Combined export
// ══════════════════════════════════════════════════════════════════════════════

export default function RadiationQ7Widget() {
  return (
    <div className="space-y-4 mt-3">
      {/* ── Diagram 1: Penetration ── */}
      <div className="chrome-card border border-line rounded-xl overflow-hidden">
        <div className="px-3 py-2 bg-surface-2 border-b border-line">
          <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide">
            Penetrating power of α, β and γ radiation
          </p>
        </div>
        <div className="figure-surface p-3" style={{ aspectRatio: '520/210' }}>
          <PenetrationDiagram />
        </div>
      </div>

      {/* ── Diagram 2: Factory monitor ── */}
      <div className="chrome-card border border-line rounded-xl overflow-hidden">
        <div className="px-3 py-2 bg-surface-2 border-b border-line">
          <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide">
            Beta radiation — aluminium thickness monitor
          </p>
        </div>
        <div className="figure-surface p-3" style={{ aspectRatio: '400/220' }}>
          <BetaMonitorDiagram />
        </div>
      </div>
    </div>
  )
}

/*
 * ── ChatGPT image generation prompt (for use when SVG is insufficient) ──────
 *
 * "A clean, white-background scientific diagram for an IB MYP Physics exam
 *  showing two side-by-side panels:
 *
 *  Left panel — 'Penetrating power': Three horizontal rows labelled α, β, γ on
 *  the left. Three vertical material barriers labelled Paper (thin, beige),
 *  Aluminium (medium-grey block), Lead (thick dark-grey block). Alpha: red
 *  filled circle with arrow stopping at paper. Beta: blue dot arrow stopping at
 *  aluminium. Gamma: purple sinusoidal wave continuing through all three barriers,
 *  becoming much smaller after lead.
 *
 *  Right panel — 'Beta thickness monitor': Two grey cylindrical rollers pressing
 *  aluminium foil. A yellow triangular beta source below the foil with blue
 *  upward arrows. A blue 'Detector' box above the foil. A dashed green line from
 *  Detector to a 'Sensor' box labelled 'Sensor adjusts rollers'. Labels for
 *  Rollers, Aluminium foil, β source, Detector. Direction arrows on the foil.
 *
 *  Style: IB eAssessment clean style, no shadows, sans-serif labels, white
 *  background, suitable for a digital exam platform."
 */
