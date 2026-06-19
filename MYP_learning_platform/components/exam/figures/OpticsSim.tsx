'use client'

/**
 * OpticsSim — interactive optics stimulus (replaces an IB optics figure).
 *
 * Two modes, both data-driven:
 *  - "lens": a convex lens on an optical bench. An upright object arrow sits at the
 *    object distance d₀; the two principal rays (parallel→focus, through-centre) are
 *    drawn and converge at the real image. A MOVABLE screen slider lets the student
 *    slide a screen along the bench; the image is sharp only when the screen sits at
 *    dᵢ where 1/f = 1/d₀ + 1/dᵢ. Live focus quality + dᵢ readout.
 *  - "mirror": a plane mirror with a DRAGGABLE incident ray. The reflected ray obeys
 *    angle of incidence = angle of reflection (measured from the normal). Both angles
 *    read out live. Optional kaleidoscope variant: an angle slider that reports the
 *    number of virtual images N = 360/θ − 1 (real MYP two-mirror task).
 *
 * SSR-safe: no window/perf/RNG at module scope; animation via the kit's useRaf only.
 * Pseudo-randomness (none needed here) would be seeded from data. Every assessed number
 * (f, d₀, mirror angle, image counts) renders exactly from data — interactivity never
 * changes the assessed quantity.
 */

import { useMemo, useRef, useState } from 'react'
import {
  FigureCard,
  GhostButton,
  Slider,
  Segmented,
  Readout,
  useSvgPoint,
  FeedbackChip,
  PALETTE,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

type Mode = 'lens' | 'mirror' | 'refraction' | 'vision'

export interface OpticsSimData {
  title?: string
  source?: string
  /** Which simulator to render. Defaults to 'lens'. */
  mode?: Mode
  /** Refraction mode: refractive indices + media labels (n2 > n1 ⇒ bends toward normal). */
  n1?: number
  n2?: number
  medium1?: string
  medium2?: string
  /** Refraction mode: initial angle of incidence from the normal, degrees. */
  incidenceAngle?: number
  /** Focal length of the convex lens, in the same length unit as distances (default cm). */
  focalLength?: number
  /** Object (or candle) distance from the lens, same unit. */
  objectDistance?: number
  /** Object height, for the drawn arrow (purely visual). */
  objectHeight?: number
  /** Length unit label shown in readouts. Default 'cm'. */
  unit?: string
  /** Mirror-mode configuration. */
  mirror?: {
    /** Initial incident-ray angle from the normal, in degrees. */
    angle?: number
    /** If set, render the two-mirror kaleidoscope (angle ↔ image-count) variant. */
    kaleidoscope?: boolean
    /** Image-count formula label, e.g. 'N = 360/θ − 1'. */
    imagesFormula?: string
    /** Slider bounds for the kaleidoscope angle. */
    min?: number
    max?: number
    step?: number
    /** Optional target prompt, e.g. 'find angle that gives 3 images'. */
    readoutTarget?: string
  }
}

// SVG geometry
const W = 760
const H = 320
const AXIS_Y = 170 // principal axis / bench line

// Lens bench: pixels per length-unit, chosen so a reasonable bench fits.
function fmt(n: number, d = 1) {
  return Number.isFinite(n) ? n.toFixed(d) : '—'
}

/* ──────────────────────────── LENS MODE ──────────────────────────── */

function LensMode({ data }: { data: OpticsSimData }) {
  const f = data.focalLength && data.focalLength > 0 ? data.focalLength : 17
  const d0 = data.objectDistance && data.objectDistance > 0 ? data.objectDistance : 30
  const unit = data.unit ?? 'cm'

  // Thin-lens image distance: 1/f = 1/d0 + 1/di  →  di = f·d0 / (d0 − f)
  const diTrue = useMemo(() => {
    if (d0 === f) return Infinity
    return (f * d0) / (d0 - f)
  }, [f, d0])

  // Bench domain (in length units) sized to comfortably hold object + image.
  const maxDist = useMemo(() => {
    const candidates = [d0, Number.isFinite(diTrue) ? Math.abs(diTrue) : 0, 2 * f]
    return Math.max(40, ...candidates) * 1.15
  }, [d0, diTrue, f])

  const lensX = W / 2
  const pxPerUnit = ((W / 2) - 60) / maxDist // unit→px on each side of lens

  const objX = lensX - d0 * pxPerUnit
  const objH = (data.objectHeight && data.objectHeight > 0 ? data.objectHeight : 36)
  const objY = AXIS_Y - Math.min(64, objH) // arrow tip

  // movable screen position, in length-units to the RIGHT of the lens
  const [screen, setScreen] = useState<number>(() =>
    Number.isFinite(diTrue) && diTrue > 0 ? Math.round(diTrue * 10) / 10 : Math.round(maxDist * 0.6),
  )
  const screenMax = Math.round(maxDist)
  const screenX = lensX + Math.min(screen, screenMax) * pxPerUnit

  // Image geometry (real, inverted) when di is finite & positive.
  const realImage = Number.isFinite(diTrue) && diTrue > 0
  const mag = realImage ? -diTrue / d0 : 0 // negative = inverted
  const imgX = lensX + diTrue * pxPerUnit
  const imgTipY = AXIS_Y - mag * Math.min(64, objH) // mag negative → below axis

  // Focus quality: 1 when screen exactly at di, →0 as it moves away.
  const focusErr = realImage ? Math.abs(screen - diTrue) : Infinity
  const sharp = realImage && focusErr < 0.6
  const quality = realImage ? Math.max(0, 1 - focusErr / Math.max(4, f * 0.5)) : 0
  // Blur radius of the spot on the screen grows with defocus.
  const blur = realImage ? Math.min(26, focusErr * pxPerUnit * 0.5) : 22

  const f1x = lensX - f * pxPerUnit // focal point object side
  const f2x = lensX + f * pxPerUnit // focal point image side

  // Where the screen-spot tip lands (the projected ray height at the screen plane).
  const spotTipY = useMemo(() => {
    if (!realImage) return AXIS_Y - 20
    // Ray through centre keeps slope; at screenX height = objTip slope * (screenX-lensX)
    const slopeCentre = (AXIS_Y - objY) / (lensX - objX) // upward from obj tip through centre
    return AXIS_Y - slopeCentre * (screenX - lensX) * -1 // mirrored below axis
  }, [realImage, objY, objX, lensX, screenX])

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        {/* optical bench / principal axis */}
        <line x1={20} y1={AXIS_Y} x2={W - 20} y2={AXIS_Y} stroke={LINE} strokeWidth={2} />
        <line x1={20} y1={AXIS_Y} x2={W - 20} y2={AXIS_Y} stroke="#94a3b8" strokeWidth={1} strokeDasharray="2 6" />

        {/* convex lens (vertical lens body + arrow caps) */}
        <g>
          <ellipse cx={lensX} cy={AXIS_Y} rx={11} ry={70} fill={`${PALETTE[4]}22`} stroke={PALETTE[4]} strokeWidth={2} />
          <path d={`M${lensX} ${AXIS_Y - 70} l-6 8 M${lensX} ${AXIS_Y - 70} l6 8`} stroke={PALETTE[4]} strokeWidth={2} fill="none" />
          <path d={`M${lensX} ${AXIS_Y + 70} l-6 -8 M${lensX} ${AXIS_Y + 70} l6 -8`} stroke={PALETTE[4]} strokeWidth={2} fill="none" />
        </g>

        {/* focal points */}
        {[f1x, f2x].map((fx, i) => (
          <g key={i}>
            <circle cx={fx} cy={AXIS_Y} r={3} fill={SUB} />
            <text x={fx} y={AXIS_Y + 18} textAnchor="middle" fontSize={11} fill={SUB} fontWeight={600}>
              {i === 0 ? 'F' : 'F′'}
            </text>
          </g>
        ))}
        <text x={(f2x + lensX) / 2} y={AXIS_Y + 34} textAnchor="middle" fontSize={10} fill={SUB}>
          f = {fmt(f, f % 1 === 0 ? 0 : 1)} {unit}
        </text>

        {/* object arrow */}
        <g>
          <line x1={objX} y1={AXIS_Y} x2={objX} y2={objY} stroke={PALETTE[0]} strokeWidth={3} />
          <path d={`M${objX} ${objY} l-5 9 M${objX} ${objY} l5 9`} stroke={PALETTE[0]} strokeWidth={3} fill="none" />
          <text x={objX} y={AXIS_Y + 18} textAnchor="middle" fontSize={11} fill={PALETTE[0]} fontWeight={700}>
            d₀ = {fmt(d0, d0 % 1 === 0 ? 0 : 1)}
          </text>
        </g>

        {/* principal rays */}
        {realImage && (
          <g stroke={PALETTE[1]} strokeWidth={1.5} fill="none" opacity={0.9}>
            {/* ray 1: parallel from obj tip, refracts through F′ */}
            <line x1={objX} y1={objY} x2={lensX} y2={objY} />
            <line x1={lensX} y1={objY} x2={imgX} y2={imgTipY} />
            {/* ray 2: straight through lens centre */}
            <line x1={objX} y1={objY} x2={imgX} y2={imgTipY} />
            {/* ray 3: through F then parallel */}
            <line x1={objX} y1={objY} x2={lensX} y2={AXIS_Y - (objY - AXIS_Y) * ((lensX - objX) / (objX - f1x)) * -1} opacity={0.45} />
          </g>
        )}

        {/* real image arrow at the true di */}
        {realImage && imgX < W - 20 && (
          <g>
            <line x1={imgX} y1={AXIS_Y} x2={imgX} y2={imgTipY} stroke={PALETTE[3]} strokeWidth={3} opacity={sharp ? 1 : 0.4} />
            <path
              d={`M${imgX} ${imgTipY} l-5 ${imgTipY > AXIS_Y ? -9 : 9} M${imgX} ${imgTipY} l5 ${imgTipY > AXIS_Y ? -9 : 9}`}
              stroke={PALETTE[3]}
              strokeWidth={3}
              fill="none"
              opacity={sharp ? 1 : 0.4}
            />
          </g>
        )}

        {/* movable screen */}
        <g>
          <line x1={screenX} y1={AXIS_Y - 78} x2={screenX} y2={AXIS_Y + 78} stroke={sharp ? PALETTE[3] : '#94a3b8'} strokeWidth={3} />
          <rect x={screenX - 5} y={AXIS_Y - 84} width={10} height={6} fill={sharp ? PALETTE[3] : '#94a3b8'} />
          <rect x={screenX - 5} y={AXIS_Y + 78} width={10} height={6} fill={sharp ? PALETTE[3] : '#94a3b8'} />
          {/* projected spot: a circle that is tight when sharp, blurred otherwise */}
          <circle
            cx={screenX}
            cy={spotTipY}
            r={Math.max(3, blur)}
            fill={sharp ? `${PALETTE[3]}cc` : `${PALETTE[1]}55`}
            style={{ transition: 'r 90ms linear' }}
          />
          <text x={screenX} y={AXIS_Y + 96} textAnchor="middle" fontSize={11} fill={INK} fontWeight={700}>
            screen
          </text>
        </g>

        {sharp && (
          <text x={lensX} y={26} textAnchor="middle" fontSize={13} fontWeight={800} fill={PALETTE[3]}>
            ✓ image in focus
          </text>
        )}
      </svg>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <div className="min-w-[240px] flex-1">
          <Slider
            label="Screen position (distance right of lens)"
            min={Math.max(1, Math.round(f))}
            max={screenMax}
            step={0.1}
            value={Math.min(screen, screenMax)}
            onChange={setScreen}
            unit={unit}
            color={sharp ? PALETTE[3] : PALETTE[0]}
            format={(v) => `${fmt(v, 1)} ${unit}`}
          />
        </div>
        <Readout label="image dist dᵢ" value={realImage ? fmt(diTrue, 1) : '∞'} unit={unit} color={PALETTE[3]} />
        <Readout
          label="focus"
          value={realImage ? `${Math.round(quality * 100)}%` : 'no real image'}
          color={sharp ? PALETTE[3] : PALETTE[1]}
        />
        <div className="flex items-center gap-2">
          <GhostButton onClick={() => setScreen(realImage ? Math.round(diTrue * 10) / 10 : screenMax)} color={PALETTE[0]}>
            Snap to focus
          </GhostButton>
          <FeedbackChip state={realImage ? (sharp ? 'correct' : 'idle') : 'idle'} />
        </div>
      </div>

      <p className="mt-2 text-[11px]" style={{ color: SUB }}>
        Thin-lens relation: 1/f = 1/d₀ + 1/dᵢ. Slide the screen until the projected spot is smallest (sharpest) and read dᵢ.
      </p>
    </div>
  )
}

/* ──────────────────────────── MIRROR MODE ──────────────────────────── */

function MirrorReflect({ data }: { data: OpticsSimData }) {
  const unit = '°'
  const initAngle = data.mirror?.angle ?? 40
  const mirrorY = AXIS_Y + 40 // mirror surface (horizontal line)
  const hitX = W / 2
  const hitY = mirrorY
  const normalTop = hitY - 130

  const svgRef = useRef<SVGSVGElement | null>(null)
  const toSvg = useSvgPoint(svgRef, W, H)

  // angle of incidence from the normal (vertical), clamped to a sensible range.
  const [angle, setAngle] = useState<number>(() => Math.max(5, Math.min(85, initAngle)))
  const [dragging, setDragging] = useState(false)

  const rad = (angle * Math.PI) / 180
  const RAY = 150
  // incident ray comes from upper-left toward hit point.
  const incStartX = hitX - Math.sin(rad) * RAY
  const incStartY = hitY - Math.cos(rad) * RAY
  // reflected ray leaves to upper-right, same angle from normal.
  const refEndX = hitX + Math.sin(rad) * RAY
  const refEndY = hitY - Math.cos(rad) * RAY

  function updateFromPoint(cx: number, cy: number) {
    const [sx, sy] = toSvg(cx, cy)
    const dx = sx - hitX
    const dy = hitY - sy // up is positive
    if (dy <= 0) return // keep ray above the mirror
    let a = (Math.atan2(Math.abs(dx), dy) * 180) / Math.PI
    a = Math.max(5, Math.min(85, a))
    setAngle(Math.round(a))
  }

  return (
    <div>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full select-none"
        style={{ background: SURFACE, borderRadius: 10, touchAction: 'none', cursor: dragging ? 'grabbing' : 'grab' }}
        onPointerDown={(e) => {
          e.preventDefault()
          setDragging(true)
          ;(e.target as Element).setPointerCapture?.(e.pointerId)
          updateFromPoint(e.clientX, e.clientY)
        }}
        onPointerMove={(e) => dragging && updateFromPoint(e.clientX, e.clientY)}
        onPointerUp={() => setDragging(false)}
        onPointerLeave={() => setDragging(false)}
      >
        {/* mirror surface with hatching */}
        <line x1={80} y1={mirrorY} x2={W - 80} y2={mirrorY} stroke={INK} strokeWidth={3} />
        {Array.from({ length: 24 }).map((_, i) => {
          const x = 88 + i * ((W - 168) / 23)
          return <line key={i} x1={x} y1={mirrorY} x2={x - 9} y2={mirrorY + 11} stroke="#94a3b8" strokeWidth={1.5} />
        })}

        {/* normal (dashed) */}
        <line x1={hitX} y1={normalTop} x2={hitX} y2={mirrorY} stroke={SUB} strokeWidth={1.5} strokeDasharray="5 5" />
        <text x={hitX + 6} y={normalTop + 12} fontSize={11} fill={SUB} fontWeight={600}>
          normal
        </text>

        {/* angle arcs */}
        <path
          d={`M ${hitX} ${hitY - 46} A 46 46 0 0 0 ${hitX - Math.sin(rad) * 46} ${hitY - Math.cos(rad) * 46}`}
          fill="none"
          stroke={PALETTE[0]}
          strokeWidth={1.5}
        />
        <path
          d={`M ${hitX} ${hitY - 46} A 46 46 0 0 1 ${hitX + Math.sin(rad) * 46} ${hitY - Math.cos(rad) * 46}`}
          fill="none"
          stroke={PALETTE[1]}
          strokeWidth={1.5}
        />

        {/* incident ray (draggable) */}
        <line x1={incStartX} y1={incStartY} x2={hitX} y2={hitY} stroke={PALETTE[0]} strokeWidth={3} markerEnd="url(#arrowInc)" />
        {/* reflected ray */}
        <line x1={hitX} y1={hitY} x2={refEndX} y2={refEndY} stroke={PALETTE[1]} strokeWidth={3} markerEnd="url(#arrowRef)" />

        {/* drag handle on incident ray end */}
        <circle cx={incStartX} cy={incStartY} r={9} fill="#fff" stroke={PALETTE[0]} strokeWidth={2.5} />
        <circle cx={incStartX} cy={incStartY} r={3} fill={PALETTE[0]} />

        {/* angle labels */}
        <text x={hitX - 30} y={hitY - 54} textAnchor="middle" fontSize={12} fill={PALETTE[0]} fontWeight={700}>
          θᵢ = {angle}{unit}
        </text>
        <text x={hitX + 32} y={hitY - 54} textAnchor="middle" fontSize={12} fill={PALETTE[1]} fontWeight={700}>
          θᵣ = {angle}{unit}
        </text>

        <text x={incStartX} y={incStartY - 14} textAnchor="middle" fontSize={11} fill={PALETTE[0]} fontWeight={600}>
          incident
        </text>
        <text x={refEndX} y={refEndY - 14} textAnchor="middle" fontSize={11} fill={PALETTE[1]} fontWeight={600}>
          reflected
        </text>
      </svg>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <div className="min-w-[220px] flex-1">
          <Slider label="Angle of incidence θᵢ" min={5} max={85} step={1} value={angle} onChange={(v) => setAngle(Math.round(v))} unit={unit} color={PALETTE[0]} />
        </div>
        <Readout label="incidence θᵢ" value={angle} unit={unit} color={PALETTE[0]} />
        <Readout label="reflection θᵣ" value={angle} unit={unit} color={PALETTE[1]} />
      </div>

      <p className="mt-2 text-[11px]" style={{ color: SUB }}>
        Drag the incident ray (or use the slider). The law of reflection keeps θᵢ = θᵣ, both measured from the normal.
      </p>
    </div>
  )
}

/* ────────────────── MIRROR MODE: two-mirror kaleidoscope ────────────────── */

function MirrorKaleidoscope({ data }: { data: OpticsSimData }) {
  const m = data.mirror ?? {}
  const min = m.min ?? 36
  const max = m.max ?? 180
  const step = m.step ?? 12
  const formula = m.imagesFormula ?? 'N = 360/θ − 1'
  const [angle, setAngle] = useState<number>(() => Math.max(min, Math.min(max, m.angle ?? 60)))

  // N = 360/θ − 1, rounded down; only meaningful when 360/θ is an integer-ish factor.
  const ratio = 360 / angle
  const images = Math.max(1, Math.round(ratio) - 1)
  const cx = W / 2
  const cy = AXIS_Y - 6
  const R = 96
  const half = (angle * Math.PI) / 360 // half-angle from vertical

  // virtual object + image positions arranged around the wedge for illustration
  const positions = useMemo(() => {
    const pts: { x: number; y: number; virtual: boolean }[] = [{ x: cx, y: cy - R * 0.55, virtual: false }]
    for (let i = 1; i <= Math.min(images, 11); i++) {
      const t = (i / (images + 1)) * Math.PI * 2
      pts.push({ x: cx + Math.sin(t) * R * 0.55, y: cy - Math.cos(t) * R * 0.55, virtual: true })
    }
    return pts
  }, [images, cx, cy])

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        {/* two mirrors meeting at vertex, opening by `angle` */}
        <g stroke={INK} strokeWidth={3} strokeLinecap="round">
          <line x1={cx} y1={cy} x2={cx - Math.sin(half) * 150} y2={cy - Math.cos(half) * 150} />
          <line x1={cx} y1={cy} x2={cx + Math.sin(half) * 150} y2={cy - Math.cos(half) * 150} />
        </g>
        {/* angle arc + label */}
        <path
          d={`M ${cx - Math.sin(half) * 40} ${cy - Math.cos(half) * 40} A 40 40 0 0 1 ${cx + Math.sin(half) * 40} ${cy - Math.cos(half) * 40}`}
          fill="none"
          stroke={PALETTE[2]}
          strokeWidth={1.5}
        />
        <text x={cx} y={cy - 12} textAnchor="middle" fontSize={12} fontWeight={700} fill={PALETTE[2]}>
          θ = {angle}°
        </text>

        {/* object + virtual images */}
        {positions.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={7} fill={p.virtual ? `${PALETTE[0]}55` : PALETTE[0]} stroke={PALETTE[0]} strokeWidth={1.5} />
            {!p.virtual && (
              <text x={p.x} y={p.y - 12} textAnchor="middle" fontSize={10} fill={INK} fontWeight={700}>
                object
              </text>
            )}
          </g>
        ))}

        <text x={cx} y={H - 18} textAnchor="middle" fontSize={11} fill={SUB}>
          {formula}
        </text>
      </svg>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <div className="min-w-[220px] flex-1">
          <Slider label="Angle between mirrors θ" min={min} max={max} step={step} value={angle} onChange={(v) => setAngle(Math.round(v))} unit="°" color={PALETTE[2]} />
        </div>
        <Readout label="virtual images N" value={images} color={PALETTE[2]} />
      </div>

      {m.readoutTarget && (
        <p className="mt-2 text-[11px]" style={{ color: SUB }}>
          Task: {m.readoutTarget}.
        </p>
      )}
      <p className="mt-1 text-[11px]" style={{ color: SUB }}>
        Reducing the angle between the mirrors increases the number of virtual images ({formula}).
      </p>
    </div>
  )
}

/* ──────────────────────────── REFRACTION MODE ──────────────────────────── */
/* Flat boundary between two media. The refracted ray is computed from Snell's law
 * (n1 sinθ1 = n2 sinθ2), so the bend direction is correct by construction: into the
 * denser medium (n2 > n1) it bends TOWARD the normal. Arrows point along the
 * direction of travel (down into medium 2). */
function RefractionMode({ data }: { data: OpticsSimData }) {
  const n1 = data.n1 && data.n1 > 0 ? data.n1 : 1.0
  const n2 = data.n2 && data.n2 > 0 ? data.n2 : 1.33
  const m1 = data.medium1 ?? 'Air'
  const m2 = data.medium2 ?? 'Water'
  const [theta1, setTheta1] = useState<number>(() => Math.max(5, Math.min(85, data.incidenceAngle ?? 45)))

  const boundaryY = 168
  const hitX = W / 2
  const RAY = 132
  const sinR2 = (n1 / n2) * Math.sin((theta1 * Math.PI) / 180)
  const tir = sinR2 > 1 // total internal reflection (only possible when n1 > n2)
  const theta2 = tir ? 90 : (Math.asin(sinR2) * 180) / Math.PI
  const r1 = (theta1 * Math.PI) / 180
  const r2 = (theta2 * Math.PI) / 180

  // incident ray comes from the upper-left and travels DOWN to the hit point
  const incX = hitX - Math.sin(r1) * RAY
  const incY = boundaryY - Math.cos(r1) * RAY
  // refracted ray continues down-right into medium 2, bent toward the normal
  const refX = hitX + Math.sin(r2) * RAY
  const refY = boundaryY + Math.cos(r2) * RAY

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        <defs>
          <marker id="rfArrow" markerWidth="11" markerHeight="11" refX="7" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill={PALETTE[0]} />
          </marker>
        </defs>
        {/* two media */}
        <rect x={0} y={0} width={W} height={boundaryY} fill="#eef4ff" />
        <rect x={0} y={boundaryY} width={W} height={H - boundaryY} fill="#cfe0f3" />
        <line x1={0} y1={boundaryY} x2={W} y2={boundaryY} stroke={INK} strokeWidth={2} />
        {/* normal */}
        <line x1={hitX} y1={boundaryY - 122} x2={hitX} y2={boundaryY + 122} stroke={SUB} strokeWidth={1.5} strokeDasharray="6 5" />
        <text x={hitX + 7} y={boundaryY - 108} fontSize={11} fill={SUB}>normal</text>
        {/* angle arcs */}
        <path d={`M ${hitX} ${boundaryY - 42} A 42 42 0 0 0 ${hitX - Math.sin(r1) * 42} ${boundaryY - Math.cos(r1) * 42}`} fill="none" stroke={PALETTE[1]} strokeWidth={1.4} />
        {!tir && <path d={`M ${hitX} ${boundaryY + 42} A 42 42 0 0 1 ${hitX + Math.sin(r2) * 42} ${boundaryY + Math.cos(r2) * 42}`} fill="none" stroke={PALETTE[3]} strokeWidth={1.4} />}
        {/* incident ray → hit point (arrow points into the boundary) */}
        <line x1={incX} y1={incY} x2={hitX} y2={boundaryY} stroke={PALETTE[0]} strokeWidth={3} markerEnd="url(#rfArrow)" />
        {/* refracted ray into medium 2 */}
        {!tir && <line x1={hitX} y1={boundaryY} x2={refX} y2={refY} stroke={PALETTE[0]} strokeWidth={3} markerEnd="url(#rfArrow)" />}
        {/* labels */}
        <text x={22} y={28} fontSize={14} fontWeight={700} fill="#33507a">{m1}  (n = {n1.toFixed(2)})</text>
        <text x={22} y={H - 16} fontSize={14} fontWeight={700} fill="#33507a">{m2}  (n = {n2.toFixed(2)})</text>
        <text x={hitX - 86} y={boundaryY - 50} fontSize={12} fill={PALETTE[1]} fontWeight={700}>θ₁ = {Math.round(theta1)}°</text>
        {!tir && <text x={hitX + 20} y={boundaryY + 62} fontSize={12} fill={PALETTE[3]} fontWeight={700}>θ₂ = {Math.round(theta2)}°</text>}
        <text x={(incX + hitX) / 2 - 40} y={(incY + boundaryY) / 2} fontSize={11} fill={PALETTE[0]} fontWeight={600}>incident ray</text>
        {!tir && <text x={(refX + hitX) / 2 + 6} y={(refY + boundaryY) / 2 + 4} fontSize={11} fill={PALETTE[0]} fontWeight={600}>refracted ray</text>}
        {tir && <text x={hitX} y={26} textAnchor="middle" fontSize={12} fontWeight={800} fill={PALETTE[3]}>total internal reflection</text>}
      </svg>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <div className="min-w-[240px] flex-1">
          <Slider label="Angle of incidence θ₁" min={5} max={85} step={1} value={theta1} onChange={(v) => setTheta1(Math.round(v))} unit="°" color={PALETTE[0]} />
        </div>
        <Readout label="incidence θ₁" value={Math.round(theta1)} unit="°" color={PALETTE[1]} />
        <Readout label="refraction θ₂" value={tir ? '—' : Math.round(theta2)} unit="°" color={PALETTE[3]} />
      </div>
      <p className="mt-2 text-[11px]" style={{ color: SUB }}>
        Snell&apos;s law: n₁ sin θ₁ = n₂ sin θ₂. Entering the denser medium (n₂ &gt; n₁) the ray bends <strong>towards</strong> the normal. The frequency stays constant; speed and wavelength decrease.
      </p>
    </div>
  )
}

/* ──────────────────────────── VISION MODE ──────────────────────────── */
/* Short-sightedness (myopia) and its correction with a DIVERGING (biconcave) lens.
 * Toggle between the uncorrected eye (parallel rays focus IN FRONT of the retina) and
 * the corrected eye (a biconcave lens diverges the rays first, so the eye focuses them
 * exactly ON the retina). */
function VisionMode({ data }: { data: OpticsSimData }) {
  const [corrected, setCorrected] = useState(false)

  const EX = 470 // eye centre x
  const EY = 165 // optical axis y
  const R = 84 // eyeball radius
  const eyeLensX = EX - R + 6 // the eye's own converging lens (front of eye)
  const retinaX = EX + R - 10 // back inner wall
  const dlX = 250 // diverging correction lens x
  const offsets = [-40, 0, 40] // parallel incoming-ray heights

  // Uncorrected: the eye over-converges → focus lands short of the retina.
  const focusX = corrected ? retinaX : EX + 18

  return (
    <div>
      <svg viewBox="0 0 760 320" className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        {/* optical axis */}
        <line x1={40} y1={EY} x2={720} y2={EY} stroke="#cbd5e1" strokeWidth={1} strokeDasharray="3 6" />

        {/* eyeball */}
        <circle cx={EX} cy={EY} r={R} fill="#fdf3e0" stroke={INK} strokeWidth={2} />
        {/* eye lens (front, converging) */}
        <ellipse cx={eyeLensX} cy={EY} rx={9} ry={34} fill={`${PALETTE[4]}33`} stroke={PALETTE[4]} strokeWidth={2} />
        {/* retina (back wall) */}
        <path d={`M ${retinaX} ${EY - 54} A 60 60 0 0 1 ${retinaX} ${EY + 54}`} fill="none" stroke={PALETTE[3]} strokeWidth={3} />
        <text x={EX + 42} y={EY - 60} fontSize={11} fill={PALETTE[3]} fontWeight={700}>retina</text>

        {/* diverging correction lens (biconcave: thin middle, thick edges) — only when corrected */}
        {corrected && (
          <g>
            <path
              d={`M ${dlX - 7} ${EY - 50} Q ${dlX + 7} ${EY} ${dlX - 7} ${EY + 50} L ${dlX + 7} ${EY + 50} Q ${dlX - 7} ${EY} ${dlX + 7} ${EY - 50} Z`}
              fill={`${PALETTE[1]}22`}
              stroke={PALETTE[1]}
              strokeWidth={2}
            />
            <text x={dlX} y={EY + 72} textAnchor="middle" fontSize={11} fill={PALETTE[1]} fontWeight={700}>diverging lens</text>
          </g>
        )}

        {/* rays */}
        {offsets.map((off, i) => {
          // parallel incoming rays from the left
          const startX = 60
          const yIn = EY + off
          // point where the ray meets the eye's front lens
          const lensHitY = corrected ? EY + off * 1.32 : yIn // diverging lens spreads them before the eye
          const segs: string[] = []
          if (corrected) {
            // in to diverging lens, then diverge, then to eye lens, then converge to retina
            segs.push(`M ${startX} ${yIn} L ${dlX} ${yIn}`)
            segs.push(`M ${dlX} ${yIn} L ${eyeLensX} ${lensHitY}`)
            segs.push(`M ${eyeLensX} ${lensHitY} L ${focusX} ${EY}`)
          } else {
            // straight in to eye lens, then over-converge to a focus short of the retina
            segs.push(`M ${startX} ${yIn} L ${eyeLensX} ${yIn}`)
            segs.push(`M ${eyeLensX} ${yIn} L ${focusX} ${EY}`)
            // after the early focus the rays cross and spread onto the retina (blur)
            segs.push(`M ${focusX} ${EY} L ${retinaX} ${EY - off * 0.5}`)
          }
          return <path key={i} d={segs.join(' ')} fill="none" stroke={PALETTE[0]} strokeWidth={1.6} opacity={0.9} />
        })}

        {/* focus marker */}
        <circle cx={focusX} cy={EY} r={3.5} fill={corrected ? PALETTE[3] : '#d33'} />
        <text x={focusX} y={EY - 12} textAnchor="middle" fontSize={10} fill={corrected ? PALETTE[3] : '#d33'} fontWeight={700}>
          {corrected ? 'focus on retina ✓' : 'focus in front of retina'}
        </text>

        <text x={60} y={EY - 64} fontSize={11} fill={PALETTE[0]} fontWeight={600}>parallel rays (distant object)</text>
      </svg>

      <div className="mt-3 flex items-center gap-3">
        <Segmented<'uncorrected' | 'corrected'>
          options={[
            { value: 'uncorrected', label: 'Short-sighted eye' },
            { value: 'corrected', label: 'With diverging lens' },
          ]}
          value={corrected ? 'corrected' : 'uncorrected'}
          onChange={(v) => setCorrected(v === 'corrected')}
        />
        <FeedbackChip state={corrected ? 'correct' : 'idle'} />
      </div>
      <p className="mt-2 text-[11px]" style={{ color: SUB }}>
        A short-sighted eye focuses light <strong>in front of</strong> the retina. A diverging (concave) lens spreads the rays out first, so the eye then brings them to a focus exactly <strong>on</strong> the retina.
      </p>
    </div>
  )
}

/* ──────────────────────────── ROOT ──────────────────────────── */

export default function OpticsSim({ data }: { data: OpticsSimData }) {
  // Single-purpose modes render on their own (no lens/mirror tabs).
  if (data.mode === 'refraction') {
    return (
      <FigureCard title={data.title} source={data.source} hint="Drag the slider to change the angle of incidence and watch the ray bend at the boundary.">
        <RefractionMode data={data} />
      </FigureCard>
    )
  }
  if (data.mode === 'vision') {
    return (
      <FigureCard title={data.title} source={data.source} hint="Toggle the diverging lens to see how it moves the focus onto the retina.">
        <VisionMode data={data} />
      </FigureCard>
    )
  }

  const mode: Mode = data.mode === 'mirror' ? 'mirror' : 'lens'
  const [tab, setTab] = useState<Mode>(mode)

  const hint =
    tab === 'lens'
      ? 'Slide the screen along the bench until the image is sharp, then read off the image distance dᵢ.'
      : data.mirror?.kaleidoscope
        ? 'Change the angle between the two mirrors and watch the number of virtual images change.'
        : 'Drag the incident ray and confirm that the angle of reflection always equals the angle of incidence.'

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      <div className="mb-3 flex items-center justify-between gap-3 flex-wrap">
        <Segmented<Mode>
          options={[
            { value: 'lens', label: 'Convex lens' },
            { value: 'mirror', label: 'Plane mirror' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>

      {tab === 'lens' ? (
        <LensMode data={data} />
      ) : data.mirror?.kaleidoscope ? (
        <MirrorKaleidoscope data={data} />
      ) : (
        <MirrorReflect data={data} />
      )}
    </FigureCard>
  )
}
