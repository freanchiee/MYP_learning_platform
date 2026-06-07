'use client'

/**
 * WaveLabelDragDrop — Wave property labelling widget
 *
 * Pattern for all future "label-on-diagram" drag-drop questions:
 *  1. Render the diagram as SVG (no static image files needed)
 *  2. Drop zones are absolutely-positioned HTML divs overlaid on the SVG at exact feature positions
 *  3. Draggable chips sit below in a tray
 *  4. Correct drop → chip snaps into the zone; wrong drop → red flash, chip returns to tray
 */

import { useState, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
type LabelKey = 'wavelength' | 'amplitude' | 'compression' | 'rarefaction'

interface ZoneDef {
  id: LabelKey
  display: string
  // position within the diagram container as percentages
  top: string
  left: string
  width: string
  height: string
}

// SVG colour per label
const CHIP_STYLE: Record<LabelKey, { bg: string; border: string; text: string; light: string }> = {
  wavelength:  { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af', light: '#eff6ff' },
  amplitude:   { bg: '#dcfce7', border: '#22c55e', text: '#15803d', light: '#f0fdf4' },
  compression: { bg: '#fee2e2', border: '#ef4444', text: '#b91c1c', light: '#fef2f2' },
  rarefaction: { bg: '#f3e8ff', border: '#a855f7', text: '#7e22ce', light: '#faf5ff' },
}

// ─── Shared drag state (lifted to props so both diagrams share the same source) ─
interface DragDropState {
  dragging: LabelKey | null
  placed: Partial<Record<LabelKey, boolean>>
  wrongFlash: LabelKey | null
  onDrop: (zoneId: LabelKey) => void
  onDragOver: (e: React.DragEvent) => void
}

// ─── SVG: Transverse wave diagram ────────────────────────────────────────────
const TW = 400  // SVG viewport width
const TH = 220  // SVG viewport height
const TCY = 105 // centre Y of wave
const TAMP = 65 // amplitude
const TX0 = 55  // wave start X
const TX1 = 355 // wave end X (one wavelength)

// Generate SVG path for one full sine cycle
function sinePathD(x0: number, x1: number, cy: number, amp: number): string {
  const pts: string[] = []
  for (let x = x0; x <= x1; x += 2) {
    const t = (x - x0) / (x1 - x0)
    const y = cy - amp * Math.sin(2 * Math.PI * t)
    pts.push(`${x},${y.toFixed(1)}`)
  }
  return 'M ' + pts.join(' L ')
}

// Drop zone definitions for the transverse diagram (% of SVG container)
// Wavelength: covers the horizontal arrow at the bottom (y=188/220=85%)
// Amplitude:  covers the vertical arrow on the left (x=41/400=10%, y=40-105 → 18-48%)
const TRANSVERSE_ZONES: ZoneDef[] = [
  {
    id: 'wavelength',
    display: 'Wavelength',
    top: '78%', left: '12%', width: '76%', height: '19%',
  },
  {
    id: 'amplitude',
    display: 'Amplitude',
    top: '16%', left: '1%', width: '14%', height: '35%',
  },
]

function TransverseSVG() {
  const path = sinePathD(TX0, TX1, TCY, TAMP)
  const peakY = TCY - TAMP    // top of wave
  const midY  = TCY           // equilibrium

  return (
    <svg viewBox={`0 0 ${TW} ${TH}`} className="w-full h-full">
      {/* grid / equilibrium line */}
      <line x1={TX0 - 10} y1={midY} x2={TX1 + 10} y2={midY}
            stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 3" />

      {/* wave curve */}
      <path d={path} fill="none" stroke="#1d4ed8" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Wavelength indicator (horizontal arrow + bracket) ── */}
      {/* bracket ticks */}
      <line x1={TX0} y1={midY + 4} x2={TX0} y2={TH - 30} stroke="#1d4ed8" strokeWidth="1.5" />
      <line x1={TX1} y1={midY + 4} x2={TX1} y2={TH - 30} stroke="#1d4ed8" strokeWidth="1.5" />
      {/* double-headed arrow */}
      <line x1={TX0} y1={TH - 32} x2={TX1} y2={TH - 32} stroke="#1d4ed8" strokeWidth="1.5"
            markerStart="url(#arrowB)" markerEnd="url(#arrowB)" />
      <text x={(TX0 + TX1) / 2} y={TH - 8} textAnchor="middle" fontSize="11"
            fill="#6b7280" fontStyle="italic">one wavelength (λ)</text>

      {/* ── Amplitude indicator (vertical arrow) ── */}
      {/* bracket ticks */}
      <line x1={TX0 - 20} y1={peakY} x2={TX0 - 4} y2={peakY} stroke="#15803d" strokeWidth="1.5" />
      <line x1={TX0 - 20} y1={midY}  x2={TX0 - 4} y2={midY}  stroke="#15803d" strokeWidth="1.5" />
      {/* double-headed arrow */}
      <line x1={TX0 - 14} y1={peakY} x2={TX0 - 14} y2={midY} stroke="#15803d" strokeWidth="1.5"
            markerStart="url(#arrowG)" markerEnd="url(#arrowG)" />

      {/* axis labels */}
      <text x={TX0 - 6} y={TCY - 3} textAnchor="end" fontSize="10" fill="#9ca3af">0</text>

      {/* Arrow marker defs */}
      <defs>
        <marker id="arrowB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8" />
        </marker>
        <marker id="arrowG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#15803d" />
        </marker>
      </defs>
    </svg>
  )
}

// ─── SVG: Longitudinal wave diagram ──────────────────────────────────────────
const LW = 400
const LH = 140
const LCY = 70      // centre Y of spring
const COIL_H = 36   // half height of spring coil

// Generate coil x-positions using cos displacement:
//   disp = A*cos(2π*t)  →  compression at t≈0.25 (x≈110), rarefaction at t≈0.75 (x≈290)
function coilPositions(): number[] {
  const N = 44
  const baseStart = 18
  const baseEnd   = 382
  const baseSpan  = baseEnd - baseStart
  const A = 22
  const positions: number[] = []
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1)
    const disp = A * Math.cos(2 * Math.PI * t)
    positions.push(baseStart + baseSpan * t + disp)
  }
  return positions
}

const COIL_X = coilPositions()

// Compression zone: x≈95–135  → 24%–34% of 400
// Rarefaction zone: x≈255–330 → 64%–83% of 400
const LONG_ZONES: ZoneDef[] = [
  {
    id: 'compression',
    display: 'Compression',
    top: '4%', left: '21%', width: '16%', height: '92%',
  },
  {
    id: 'rarefaction',
    display: 'Rarefaction',
    top: '4%', left: '62%', width: '22%', height: '92%',
  },
]

function LongitudinalSVG() {
  return (
    <svg viewBox={`0 0 ${LW} ${LH}`} className="w-full h-full">
      {/* Spring outline (top and bottom rails) */}
      <line x1="16" y1={LCY - COIL_H} x2="384" y2={LCY - COIL_H}
            stroke="#d1d5db" strokeWidth="1" />
      <line x1="16" y1={LCY + COIL_H} x2="384" y2={LCY + COIL_H}
            stroke="#d1d5db" strokeWidth="1" />

      {/* Coil lines */}
      {COIL_X.map((cx, i) => (
        <line key={i}
          x1={cx} y1={LCY - COIL_H + 2}
          x2={cx} y2={LCY + COIL_H - 2}
          stroke="#374151"
          strokeWidth={1.4}
        />
      ))}

      {/* Spring end caps */}
      <rect x="10" y={LCY - COIL_H - 4} width="8" height={COIL_H * 2 + 8}
            fill="#9ca3af" rx="2" />
      <rect x="382" y={LCY - COIL_H - 4} width="8" height={COIL_H * 2 + 8}
            fill="#9ca3af" rx="2" />
    </svg>
  )
}

// ─── Diagram wrapper: SVG + absolutely-positioned drop zones ─────────────────
interface DiagramProps {
  title: string
  svgContent: React.ReactNode
  zones: ZoneDef[]
  placed: Partial<Record<LabelKey, boolean>>
  wrongFlash: LabelKey | null
  dragging: LabelKey | null
  onDrop: (zoneId: LabelKey) => void
  aspectRatio: string   // e.g. "400/220"
}

function WaveDiagram({ title, svgContent, zones, placed, wrongFlash, dragging, onDrop, aspectRatio }: DiagramProps) {
  return (
    <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
        <p className="text-xs font-semibold text-gray-600">{title}</p>
      </div>

      {/* Diagram area: SVG + overlaid drop zones */}
      <div className="relative mx-3 my-3" style={{ aspectRatio }}>
        {/* SVG fills the container */}
        <div className="absolute inset-0">
          {svgContent}
        </div>

        {/* Drop zones overlaid at exact positions */}
        {zones.map(zone => (
          <ZoneOverlay
            key={zone.id}
            zone={zone}
            isPlaced={!!placed[zone.id]}
            isFlashing={wrongFlash === zone.id}
            isDraggingCompatible={dragging !== null && !placed[zone.id]}
            onDrop={onDrop}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Individual overlaid drop zone ───────────────────────────────────────────
interface ZoneOverlayProps {
  zone: ZoneDef
  isPlaced: boolean
  isFlashing: boolean
  isDraggingCompatible: boolean
  onDrop: (id: LabelKey) => void
}

function ZoneOverlay({ zone, isPlaced, isFlashing, isDraggingCompatible, onDrop }: ZoneOverlayProps) {
  const [isOver, setIsOver] = useState(false)
  const s = CHIP_STYLE[zone.id]

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setIsOver(true)
  }
  function handleDragLeave() { setIsOver(false) }
  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsOver(false)
    onDrop(zone.id)
  }

  const base: React.CSSProperties = {
    position: 'absolute',
    top: zone.top, left: zone.left, width: zone.width, height: zone.height,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 8, transition: 'all 0.15s ease',
    cursor: isPlaced ? 'default' : 'copy',
    pointerEvents: isPlaced ? 'none' : 'auto',
  }

  // ── Placed: solid colored chip ──
  if (isPlaced) {
    return (
      <div style={{
        ...base,
        background: s.bg,
        border: `2px solid ${s.border}`,
        pointerEvents: 'none',
      }}>
        <span style={{ color: s.text, fontSize: 11, fontWeight: 700, textAlign: 'center', lineHeight: 1.2 }}>
          ✓ {zone.display}
        </span>
      </div>
    )
  }

  // ── Wrong flash ──
  if (isFlashing) {
    return (
      <div style={{
        ...base,
        background: '#fee2e2',
        border: '2px solid #ef4444',
      }}>
        <span style={{ color: '#b91c1c', fontSize: 10, fontWeight: 600 }}>✗ wrong</span>
      </div>
    )
  }

  // ── Empty drop target ──
  return (
    <div
      style={{
        ...base,
        background: isOver ? s.light : 'rgba(255,255,255,0.55)',
        border: `2px dashed ${isOver ? s.border : isDraggingCompatible ? '#9ca3af' : '#d1d5db'}`,
        backdropFilter: 'blur(1px)',
        transform: isOver ? 'scale(1.03)' : 'scale(1)',
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Generic visual indicator only — NEVER show the expected label name */}
      {(isDraggingCompatible || isOver) && (
        <span style={{ fontSize: isOver ? 20 : 14, opacity: isOver ? 0.9 : 0.45, transition: 'all 0.1s' }}>
          ↓
        </span>
      )}
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
interface WaveLabelDragDropProps {
  onAnswer: (answer: string) => void
  initialValue?: string
}

export default function WaveLabelDragDrop({ onAnswer, initialValue = '' }: WaveLabelDragDropProps) {
  const parsedInitial = (): Partial<Record<LabelKey, boolean>> => {
    try {
      const p = JSON.parse(initialValue)
      if (typeof p === 'object' && p !== null) return p
    } catch {}
    return {}
  }

  const [placed, setPlaced]       = useState<Partial<Record<LabelKey, boolean>>>(parsedInitial)
  const [dragging, setDragging]   = useState<LabelKey | null>(null)
  const [wrongFlash, setWrongFlash] = useState<LabelKey | null>(null)
  const dragRef = useRef<LabelKey | null>(null)

  const allKeys: LabelKey[] = ['wavelength', 'amplitude', 'compression', 'rarefaction']
  const available = allKeys.filter(k => !placed[k])
  const allPlaced = available.length === 0

  function handleDragStart(key: LabelKey) {
    setDragging(key)
    dragRef.current = key
  }

  function handleDrop(zoneId: LabelKey) {
    const key = dragRef.current
    if (!key) return
    if (key === zoneId) {
      const next = { ...placed, [zoneId]: true }
      setPlaced(next)
      onAnswer(JSON.stringify(next))
    } else {
      setWrongFlash(zoneId)
      setTimeout(() => setWrongFlash(null), 700)
    }
    setDragging(null)
    dragRef.current = null
  }

  return (
    <div className="my-3 space-y-3">
      {/* ── Two diagrams side by side ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <WaveDiagram
          title="Diagram 1 — Transverse wave"
          svgContent={<TransverseSVG />}
          zones={TRANSVERSE_ZONES}
          placed={placed}
          wrongFlash={wrongFlash}
          dragging={dragging}
          onDrop={handleDrop}
          aspectRatio={`${TW}/${TH}`}
        />
        <WaveDiagram
          title="Diagram 2 — Longitudinal wave"
          svgContent={<LongitudinalSVG />}
          zones={LONG_ZONES}
          placed={placed}
          wrongFlash={wrongFlash}
          dragging={dragging}
          onDrop={handleDrop}
          aspectRatio={`${LW}/${LH}`}
        />
      </div>

      {/* ── Label tray ── */}
      <div className="flex flex-wrap items-center gap-2 px-1">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mr-1 shrink-0">
          Drag labels:
        </span>

        {available.map(key => {
          const s = CHIP_STYLE[key]
          const label = key.charAt(0).toUpperCase() + key.slice(1)
          return (
            <div
              key={key}
              draggable
              onDragStart={() => handleDragStart(key)}
              onDragEnd={() => setDragging(null)}
              style={{
                background: dragging === key ? s.light : s.bg,
                border: `2px solid ${s.border}`,
                color: s.text,
                opacity: dragging === key ? 0.45 : 1,
                transform: dragging === key ? 'scale(0.93)' : 'scale(1)',
              }}
              className="px-3 py-1.5 rounded-lg text-sm font-bold cursor-grab active:cursor-grabbing
                         select-none transition-all hover:scale-105 hover:shadow-md"
            >
              {label}
            </div>
          )
        })}

        {allPlaced && (
          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1
                           rounded-full border border-green-200 flex items-center gap-1">
            <span>✓</span> All four labels placed correctly!
          </span>
        )}

        {Object.keys(placed).length > 0 && (
          <button
            onClick={() => { setPlaced({}); onAnswer('') }}
            className="ml-auto text-[11px] text-gray-400 hover:text-red-500 underline shrink-0"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
