'use client'

/**
 * RefractionLabelDragDrop — 3-layer refraction diagram with drag-drop labels
 *
 * Pattern for all future "label the layers" drag-drop questions:
 *  1. Render the diagram as SVG (no static image files needed)
 *  2. Drop zones are absolutely-positioned HTML divs overlaid on the SVG
 *  3. Drop zones NEVER show which label belongs there (no hints given to students)
 *  4. Draggable chips sit below in a tray; swapping is supported (drag onto occupied zone
 *     returns the displaced item to the tray)
 *
 * Usage:
 *   widget: 'refraction_label_drag_drop'
 *   widgetItems: ['Air', 'Glass', 'Water']   ← labels the student drags
 *
 * Answer stored as JSON: { "top": "Air", "middle": "Glass", "bottom": "Water" }
 */

import { useState, useRef } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
type ZoneKey = 'top' | 'middle' | 'bottom'
const ZONE_KEYS: ZoneKey[] = ['top', 'middle', 'bottom']

interface ZoneDef {
  key:    ZoneKey
  label:  string    // display name for the zone ("Top layer" etc.)
  // position as % of SVG container
  top:    string
  left:   string
  width:  string
  height: string
}

const ZONES: ZoneDef[] = [
  { key: 'top',    label: 'Top layer',    top: '8%',  left: '56%', width: '40%', height: '28%' },
  { key: 'middle', label: 'Middle layer', top: '40%', left: '56%', width: '40%', height: '28%' },
  { key: 'bottom', label: 'Bottom layer', top: '72%', left: '56%', width: '40%', height: '24%' },
]

// ── SVG Refraction Diagram ────────────────────────────────────────────────────
// Simulates a ray passing Air → Glass → Water
//   Entry angle in air:    45°  from normal → tan(45°)  = 1.000  → Δx per 100px = 100
//   In glass (n=1.50):     28°  from normal → tan(28°)  ≈ 0.532  → Δx per 100px ≈ 53
//   In water (n=1.33):     32°  from normal → tan(32°)  ≈ 0.625  → Δx per 100px ≈ 63
//
// Note: the widget does NOT label which layer is which material —
//       the student must deduce that from the bending pattern and the table in the stem.
const SVG_W = 360
const SVG_H = 300
const RAY = [
  { x: 80,  y: 0   },   // entry (top edge)
  { x: 180, y: 100 },   // first interface
  { x: 233, y: 200 },   // second interface
  { x: 296, y: 300 },   // exit (bottom edge)
]

// Small equilateral arrowhead for the ray direction
function Arrowhead({ x, y, dx, dy, color }: { x: number; y: number; dx: number; dy: number; color: string }) {
  const len = Math.hypot(dx, dy)
  const ux = dx / len, uy = dy / len
  const px = -uy, py = ux
  const size = 8
  const tip = { x: x + ux * size, y: y + uy * size }
  const b1  = { x: x - px * 4,    y: y - py * 4 }
  const b2  = { x: x + px * 4,    y: y + py * 4 }
  return (
    <polygon
      points={`${tip.x},${tip.y} ${b1.x},${b1.y} ${b2.x},${b2.y}`}
      fill={color}
    />
  )
}

function RefractionSVG() {
  // Midpoints for arrowheads on each ray segment
  const mid01 = { x: (RAY[0].x + RAY[1].x) / 2, y: (RAY[0].y + RAY[1].y) / 2 }
  const mid12 = { x: (RAY[1].x + RAY[2].x) / 2, y: (RAY[1].y + RAY[2].y) / 2 }
  const mid23 = { x: (RAY[2].x + RAY[3].x) / 2, y: (RAY[2].y + RAY[3].y) / 2 }

  return (
    <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full h-full">
      {/* ── Three horizontal bands ── */}
      <rect x="0" y="0"   width={SVG_W} height="100" fill="#dbeafe" />  {/* top    – light blue  */}
      <rect x="0" y="100" width={SVG_W} height="100" fill="#d1fae5" />  {/* middle – light green */}
      <rect x="0" y="200" width={SVG_W} height="100" fill="#fef3c7" />  {/* bottom – light amber */}

      {/* ── Band borders ── */}
      <line x1="0" y1="100" x2={SVG_W} y2="100" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="0" y1="200" x2={SVG_W} y2="200" stroke="#94a3b8" strokeWidth="1.5" />

      {/* ── Normal lines (dashed) at each interface ── */}
      <line x1={RAY[1].x} y1="58"  x2={RAY[1].x} y2="142" stroke="#64748b" strokeWidth="1" strokeDasharray="5 3" />
      <line x1={RAY[2].x} y1="158" x2={RAY[2].x} y2="242" stroke="#64748b" strokeWidth="1" strokeDasharray="5 3" />

      {/* ── Light ray ── */}
      <polyline
        points={RAY.map(p => `${p.x},${p.y}`).join(' ')}
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Ray direction arrowheads (one per segment) ── */}
      <Arrowhead
        x={mid01.x} y={mid01.y}
        dx={RAY[1].x - RAY[0].x} dy={RAY[1].y - RAY[0].y}
        color="#f59e0b"
      />
      <Arrowhead
        x={mid12.x} y={mid12.y}
        dx={RAY[2].x - RAY[1].x} dy={RAY[2].y - RAY[1].y}
        color="#f59e0b"
      />
      <Arrowhead
        x={mid23.x} y={mid23.y}
        dx={RAY[3].x - RAY[2].x} dy={RAY[3].y - RAY[2].y}
        color="#f59e0b"
      />

      {/* ── Layer position indicators (left side) — NO material name hints ── */}
      <text x="12" y="56"  fontSize="11" fill="#475569" fontWeight="600">Layer 1</text>
      <text x="12" y="156" fontSize="11" fill="#475569" fontWeight="600">Layer 2</text>
      <text x="12" y="256" fontSize="11" fill="#475569" fontWeight="600">Layer 3</text>

      {/* ── "Normal" label ── */}
      <text x={RAY[1].x + 4} y="52"  fontSize="9" fill="#94a3b8" fontStyle="italic">normal</text>
      <text x={RAY[2].x + 4} y="152" fontSize="9" fill="#94a3b8" fontStyle="italic">normal</text>
    </svg>
  )
}

// ── Drop zone overlay ─────────────────────────────────────────────────────────
interface ZoneOverlayProps {
  zone:        ZoneDef
  placedItem:  string | undefined
  isFlashing:  boolean
  isDragging:  boolean     // any item is being dragged and this zone is empty
  onDrop:      (key: ZoneKey) => void
}

function ZoneOverlay({ zone, placedItem, isFlashing, isDragging, onDrop }: ZoneOverlayProps) {
  const [isOver, setIsOver] = useState(false)

  const base: React.CSSProperties = {
    position: 'absolute',
    top:    zone.top,
    left:   zone.left,
    width:  zone.width,
    height: zone.height,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    borderRadius: 8,
    transition: 'all 0.15s ease',
    cursor: placedItem ? 'default' : 'copy',
  }

  // ── Already has a label ──
  if (placedItem) {
    return (
      <div style={{
        ...base,
        background: 'rgba(255,255,255,0.88)',
        border: '2px solid #10b981',
        backdropFilter: 'blur(2px)',
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#065f46', textAlign: 'center' }}>
          ✓ {placedItem}
        </span>
      </div>
    )
  }

  // ── Wrong-drop flash ──
  if (isFlashing) {
    return (
      <div style={{ ...base, background: '#fee2e2', border: '2px solid #ef4444' }}>
        <span style={{ fontSize: 10, fontWeight: 600, color: '#b91c1c' }}>✗</span>
      </div>
    )
  }

  return (
    <div
      style={{
        ...base,
        background: isOver
          ? 'rgba(99,102,241,0.12)'
          : isDragging
            ? 'rgba(255,255,255,0.55)'
            : 'transparent',
        border: `2px dashed ${
          isOver    ? '#6366f1' :
          isDragging ? '#9ca3af' :
                       '#cbd5e1'
        }`,
        backdropFilter: isOver ? 'blur(1px)' : 'none',
        transform: isOver ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: 'auto',
      }}
      onDragOver={e => { e.preventDefault(); setIsOver(true) }}
      onDragLeave={() => setIsOver(false)}
      onDrop={e => { e.preventDefault(); setIsOver(false); onDrop(zone.key) }}
    >
      {/* Generic indicator only — NEVER the expected label name */}
      {(isDragging || isOver) && (
        <span style={{ fontSize: isOver ? 20 : 14, opacity: isOver ? 0.85 : 0.4, transition: 'all 0.1s' }}>
          ↓
        </span>
      )}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
interface RefractionLabelDragDropProps {
  items:         string[]
  onAnswer:      (answer: string) => void
  initialValue?: string
}

export default function RefractionLabelDragDrop({
  items,
  onAnswer,
  initialValue = '',
}: RefractionLabelDragDropProps) {
  const parseInitial = (): Partial<Record<ZoneKey, string>> => {
    try {
      const p = JSON.parse(initialValue)
      if (typeof p === 'object' && p !== null) return p
    } catch {}
    return {}
  }

  const [placed,     setPlaced]     = useState<Partial<Record<ZoneKey, string>>>(parseInitial)
  const [dragging,   setDragging]   = useState<string | null>(null)
  const [wrongFlash, setWrongFlash] = useState<ZoneKey | null>(null)
  const dragRef = useRef<string | null>(null)

  const placedItems = Object.values(placed).filter(Boolean) as string[]
  const available   = items.filter(it => !placedItems.includes(it))
  const allPlaced   = available.length === 0

  function handleDragStart(item: string) {
    setDragging(item)
    dragRef.current = item
  }

  function handleDrop(zoneKey: ZoneKey) {
    const item = dragRef.current
    if (!item) return

    const next: Partial<Record<ZoneKey, string>> = { ...placed }

    // If this item was already in another zone, remove it from there
    for (const z of ZONE_KEYS) {
      if (next[z] === item) delete next[z]
    }

    // If the target zone already has a different item, it goes back to tray (we just delete it)
    // (it will re-appear in the available list automatically)
    next[zoneKey] = item

    setPlaced(next)
    onAnswer(JSON.stringify(next))
    setDragging(null)
    dragRef.current = null
  }

  return (
    <div className="my-3 space-y-3">
      {/* Diagram card */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
        <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Drag each material to its correct layer
          </p>
        </div>
        <div className="relative mx-3 my-3" style={{ aspectRatio: `${SVG_W}/${SVG_H}` }}>
          {/* SVG diagram fills the container */}
          <div className="absolute inset-0">
            <RefractionSVG />
          </div>
          {/* Drop zones overlaid at exact positions */}
          {ZONES.map(zone => (
            <ZoneOverlay
              key={zone.key}
              zone={zone}
              placedItem={placed[zone.key]}
              isFlashing={wrongFlash === zone.key}
              isDragging={dragging !== null && !placed[zone.key]}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>

      {/* Label tray */}
      <div className="flex flex-wrap items-center gap-2 px-1">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mr-1 shrink-0">
          Drag labels:
        </span>

        {available.map(item => (
          <div
            key={item}
            draggable
            onDragStart={() => handleDragStart(item)}
            onDragEnd={() => setDragging(null)}
            style={{ opacity: dragging === item ? 0.4 : 1 }}
            className="px-3 py-1.5 rounded-lg text-sm font-bold cursor-grab active:cursor-grabbing
                       select-none transition-all hover:scale-105 hover:shadow-md
                       bg-blue-50 border-2 border-blue-300 text-blue-700"
          >
            {item}
          </div>
        ))}

        {allPlaced && (
          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1
                           rounded-full border border-green-200 flex items-center gap-1">
            <span>✓</span> All materials placed!
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
