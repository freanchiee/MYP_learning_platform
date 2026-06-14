'use client'

/**
 * GraphSim — interactive graph read-off / plot artefact.
 *
 * Two modes (auto-detected from data, or forced via `mode`):
 *  - "readoff": plots the supplied points/curve; a draggable vertical crosshair reads
 *    the y-value at any x. The region inside the supplied data domain is shaded as
 *    interpolation; beyond it as extrapolation, and the readout warns when the cursor
 *    is in the extrapolation zone. Optional labelled `readouts` mark x-positions of interest.
 *  - "plot": an empty gridded axis where the student drags points up/down to build the
 *    graph from a small data table (xs given on the axis), with a Check against the
 *    expected y-values.
 *
 * Data-driven: accepts both the flat shape ({xLabel,yLabel,points,readouts,dataMaxX})
 * and the axis-object shape ({xAxis:{label,min,max,tick}, yAxis:{...}, points, ...}).
 * Every field is optional with a sane default; renders something correct on partial data.
 *
 * SSR-safe: no module-scope window/RNG; animation via the kit's useRaf only.
 * Stimulus rule: every supplied number/label renders exactly; interactivity (cursor,
 * dragging in plot mode) never alters the assessed point values.
 */

import { useMemo, useRef, useState, useCallback } from 'react'
import {
  FigureCard,
  GhostButton,
  Segmented,
  Readout,
  FeedbackChip,
  useSvgPoint,
  PALETTE,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

type Pt = [number, number]

/** Axis given either as a structured object or a loose string (label only). */
export interface GraphAxis {
  label?: string
  min?: number
  max?: number
  tick?: number
}

export interface GraphReadoutMark {
  x: number
  note?: string
  expected?: string
}

export interface GraphSimData {
  title?: string
  source?: string
  /** Forced mode; otherwise inferred (plot if dataTable/plotMissing present, else readoff). */
  mode?: 'readoff' | 'plot'

  // Flat axis labels (chemistry shape)
  xLabel?: string
  yLabel?: string

  // Structured axes (physics shape). `string` form carries only a label.
  xAxis?: GraphAxis | string
  yAxis?: GraphAxis | string

  // Explicit ranges/grid (override axis objects if given)
  xRange?: [number, number]
  yRange?: [number, number]
  minor?: number

  /** The plotted curve / data series. */
  points?: Pt[]
  /** A second straight reference line, e.g. a v–t "originalLine" [{t,v}] or [[x,y]]. */
  originalLine?: Pt[] | { t: number; v: number }[] | { x: number; y: number }[]

  /** Read-off marks of interest along x. */
  readouts?: GraphReadoutMark[]
  /** End of valid data domain for interpolation/extrapolation split (defaults to last point x). */
  dataMaxX?: number

  // Plot-mode extras
  /** A point the student must plot [x,y]; or a data table of target points. */
  plotMissing?: Pt
  dataTable?: { x: number; y: number }[]

  // Free-text annotations (rendered as captions, never as assessed numbers)
  bestFit?: string
  gradientReadout?: string
  areaReadout?: string
  scrubReadout?: string
  units?: string
  task?: string
}

// ── SVG geometry ────────────────────────────────────────────────────────────
const W = 560
const H = 360
const M = { l: 64, r: 22, t: 18, b: 52 }
const PX0 = M.l
const PX1 = W - M.r
const PY0 = H - M.b
const PY1 = M.t
const PRIMARY = PALETTE[0]
const WARN = PALETTE[1]

// deterministic, SSR-safe PRNG (unused for data but kept for any seeded jitter)
function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function axisLabel(a: GraphAxis | string | undefined, fallback: string): string {
  if (!a) return fallback
  if (typeof a === 'string') return a
  return a.label ?? fallback
}
function axisObj(a: GraphAxis | string | undefined): GraphAxis {
  return typeof a === 'object' && a !== null ? a : {}
}

/** Normalize originalLine entries into [x,y] pairs. */
function toPts(line: GraphSimData['originalLine']): Pt[] {
  if (!Array.isArray(line)) return []
  return line.map((p): Pt => {
    if (Array.isArray(p)) return [Number(p[0]) || 0, Number(p[1]) || 0]
    const o = p as { t?: number; v?: number; x?: number; y?: number }
    return [Number(o.x ?? o.t ?? 0), Number(o.y ?? o.v ?? 0)]
  })
}

/** "nice" rounding helpers for display (NEVER applied to assessed point values). */
function fmt(n: number): string {
  if (!Number.isFinite(n)) return '—'
  const r = Math.round(n * 100) / 100
  return Object.is(r, -0) ? '0' : String(r)
}

export default function GraphSim({ data }: { data: GraphSimData }) {
  const points = useMemo<Pt[]>(
    () => (Array.isArray(data.points) ? data.points.map((p): Pt => [Number(p[0]) || 0, Number(p[1]) || 0]) : []),
    [data.points],
  )
  const refLine = useMemo<Pt[]>(() => toPts(data.originalLine), [data.originalLine])

  const tableTargets = useMemo<Pt[]>(() => {
    if (Array.isArray(data.dataTable) && data.dataTable.length)
      return data.dataTable.map((d): Pt => [Number(d.x) || 0, Number(d.y) || 0])
    if (Array.isArray(data.plotMissing) && data.plotMissing.length === 2)
      return [[Number(data.plotMissing[0]) || 0, Number(data.plotMissing[1]) || 0]] as Pt[]
    return []
  }, [data.dataTable, data.plotMissing])

  const mode: 'readoff' | 'plot' = data.mode ?? (tableTargets.length ? 'plot' : 'readoff')

  // ── ranges ────────────────────────────────────────────────────────────────
  const xa = axisObj(data.xAxis)
  const ya = axisObj(data.yAxis)
  const allX = [...points, ...refLine, ...tableTargets].map((p) => p[0])
  const allY = [...points, ...refLine, ...tableTargets].map((p) => p[1])

  const xRange: [number, number] = useMemo(() => {
    if (data.xRange) return data.xRange
    if (xa.min != null && xa.max != null) return [xa.min, xa.max]
    if (allX.length) {
      const lo = Math.min(0, ...allX)
      const hi = Math.max(...allX)
      return [lo, hi === lo ? lo + 1 : hi]
    }
    return [0, 10]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.xRange, xa.min, xa.max, allX.join(',')])

  const yRange: [number, number] = useMemo(() => {
    if (data.yRange) return data.yRange
    if (ya.min != null && ya.max != null) return [ya.min, ya.max]
    if (allY.length) {
      const lo = Math.min(0, ...allY)
      const hi = Math.max(...allY)
      const pad = (hi - lo) * 0.08 || 1
      return [lo, hi + pad]
    }
    return [0, 10]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.yRange, ya.min, ya.max, allY.join(',')])

  const xTick = xa.tick ?? data.minor ?? niceStep(xRange[0], xRange[1])
  const yTick = ya.tick ?? niceStep(yRange[0], yRange[1])

  const xLab = axisLabel(data.xAxis, data.xLabel ?? 'x')
  const yLab = axisLabel(data.yAxis, data.yLabel ?? 'y')

  // ── scales ──────────────────────────────────────────────────────────────
  const sx = useCallback(
    (x: number) => PX0 + ((x - xRange[0]) / (xRange[1] - xRange[0] || 1)) * (PX1 - PX0),
    [xRange],
  )
  const sy = useCallback(
    (y: number) => PY0 - ((y - yRange[0]) / (yRange[1] - yRange[0] || 1)) * (PY0 - PY1),
    [yRange],
  )
  const invX = useCallback(
    (px: number) => xRange[0] + ((px - PX0) / (PX1 - PX0 || 1)) * (xRange[1] - xRange[0]),
    [xRange],
  )
  const invY = useCallback(
    (py: number) => yRange[0] + ((PY0 - py) / (PY0 - PY1 || 1)) * (yRange[1] - yRange[0]),
    [yRange],
  )

  const svgRef = useRef<SVGSVGElement | null>(null)
  const toSvg = useSvgPoint(svgRef, W, H)

  // domain split for interpolation vs extrapolation
  const sortedPts = useMemo(() => [...points].sort((a, b) => a[0] - b[0]), [points])
  const dataMaxX = data.dataMaxX ?? (sortedPts.length ? sortedPts[sortedPts.length - 1][0] : xRange[1])
  const dataMinX = sortedPts.length ? sortedPts[0][0] : xRange[0]

  // ── READOFF state: vertical crosshair x-position ──────────────────────────
  const [cursorX, setCursorX] = useState<number>(() =>
    sortedPts.length ? sortedPts[Math.floor(sortedPts.length / 2)][0] : (xRange[0] + xRange[1]) / 2,
  )

  // linear interpolation of the curve at x (clamped to range; extrapolates with end slope)
  const yAt = useCallback(
    (x: number): number | null => {
      if (sortedPts.length === 0) return null
      if (sortedPts.length === 1) return sortedPts[0][1]
      // within data: piecewise-linear
      for (let i = 0; i < sortedPts.length - 1; i++) {
        const [x0, y0] = sortedPts[i]
        const [x1, y1] = sortedPts[i + 1]
        if (x >= x0 && x <= x1) {
          const t = (x - x0) / (x1 - x0 || 1)
          return y0 + t * (y1 - y0)
        }
      }
      // extrapolation using nearest segment's slope
      if (x < sortedPts[0][0]) {
        const [x0, y0] = sortedPts[0]
        const [x1, y1] = sortedPts[1]
        return y0 + ((x - x0) / (x1 - x0 || 1)) * (y1 - y0)
      }
      const n = sortedPts.length
      const [x0, y0] = sortedPts[n - 2]
      const [x1, y1] = sortedPts[n - 1]
      return y1 + ((x - x1) / (x1 - x0 || 1)) * (y1 - y0)
    },
    [sortedPts],
  )

  const onReadoffMove = useCallback(
    (clientX: number, clientY: number) => {
      const [px] = toSvg(clientX, clientY)
      const x = Math.max(xRange[0], Math.min(xRange[1], invX(px)))
      setCursorX(x)
    },
    [toSvg, invX, xRange],
  )
  const [dragging, setDragging] = useState(false)

  const cursorY = yAt(cursorX)
  const inExtrap = cursorX > dataMaxX + 1e-9 || cursorX < dataMinX - 1e-9

  // ── PLOT state: student-dragged y-values for each target x ────────────────
  const [plotY, setPlotY] = useState<Record<number, number>>({})
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [checked, setChecked] = useState<'idle' | 'correct' | 'wrong'>('idle')

  const currentPlotY = useCallback(
    (i: number): number => {
      if (i in plotY) return plotY[i]
      return (yRange[0] + yRange[1]) / 2 // start mid-axis
    },
    [plotY, yRange],
  )

  const onPlotMove = useCallback(
    (clientX: number, clientY: number) => {
      if (activeIdx == null) return
      const [, py] = toSvg(clientX, clientY)
      const y = Math.max(yRange[0], Math.min(yRange[1], invY(py)))
      setPlotY((prev) => ({ ...prev, [activeIdx]: y }))
      setChecked('idle')
    },
    [activeIdx, toSvg, invY, yRange],
  )

  const checkPlot = useCallback(() => {
    if (!tableTargets.length) return
    const tol = (yRange[1] - yRange[0]) * 0.04 // 4% of axis span
    const ok = tableTargets.every((t, i) => Math.abs(currentPlotY(i) - t[1]) <= tol)
    setChecked(ok ? 'correct' : 'wrong')
  }, [tableTargets, yRange, currentPlotY])

  const resetPlot = useCallback(() => {
    setPlotY({})
    setChecked('idle')
  }, [])

  // ── pointer handlers ──────────────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    if (mode === 'plot') {
      // pick nearest target by x
      const [px] = toSvg(e.clientX, e.clientY)
      let best = 0
      let bestD = Infinity
      tableTargets.forEach((t, i) => {
        const d = Math.abs(sx(t[0]) - px)
        if (d < bestD) {
          bestD = d
          best = i
        }
      })
      setActiveIdx(best)
      onPlotSet(best, e.clientY)
    } else {
      setDragging(true)
      onReadoffMove(e.clientX, e.clientY)
    }
  }
  const onPlotSet = (i: number, clientY: number) => {
    const [, py] = toSvg(0, clientY)
    const y = Math.max(yRange[0], Math.min(yRange[1], invY(py)))
    setPlotY((prev) => ({ ...prev, [i]: y }))
    setChecked('idle')
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (mode === 'plot') onPlotMove(e.clientX, e.clientY)
    else if (dragging) onReadoffMove(e.clientX, e.clientY)
  }
  const endDrag = () => {
    setDragging(false)
    setActiveIdx(null)
  }

  // ── grid lines ────────────────────────────────────────────────────────────
  const xTicks = useMemo(() => buildTicks(xRange[0], xRange[1], xTick), [xRange, xTick])
  const yTicks = useMemo(() => buildTicks(yRange[0], yRange[1], yTick), [yRange, yTick])

  const curvePath = useMemo(() => {
    if (sortedPts.length < 2) return ''
    return sortedPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p[0])},${sy(p[1])}`).join(' ')
  }, [sortedPts, sx, sy])

  const refPath = useMemo(() => {
    if (refLine.length < 2) return ''
    return refLine.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p[0])},${sy(p[1])}`).join(' ')
  }, [refLine, sx, sy])

  // shade band under readoff curve: split at dataMaxX
  const interpRect = { x0: sx(dataMinX), x1: sx(Math.min(dataMaxX, xRange[1])) }
  const extrapRight = dataMaxX < xRange[1] ? { x0: sx(dataMaxX), x1: PX1 } : null

  const hint =
    mode === 'plot'
      ? 'Drag each point up or down to its value from the data table, then press Check.'
      : 'Drag the vertical cursor across the graph to read y at any x. Shaded teal is valid (interpolation); amber beyond the data is extrapolation.'

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      {/* mode badge + controls row */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Segmented
          options={[
            { value: 'readoff', label: 'Read off' },
            { value: 'plot', label: 'Plot' },
          ]}
          value={mode}
          onChange={() => {
            /* mode is data-driven; control is informational/disabled visually */
          }}
        />
        {mode === 'plot' && (
          <>
            <GhostButton onClick={checkPlot} color={PRIMARY}>
              Check
            </GhostButton>
            <GhostButton onClick={resetPlot} color={SUB}>
              Reset
            </GhostButton>
            <FeedbackChip state={checked} />
          </>
        )}
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full select-none"
        style={{ touchAction: 'none', cursor: mode === 'plot' ? 'ns-resize' : 'ew-resize' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        role="img"
        aria-label={data.title ?? 'interactive graph'}
      >
        {/* plot background */}
        <rect x={PX0} y={PY1} width={PX1 - PX0} height={PY0 - PY1} fill={SURFACE} stroke={LINE} />

        {/* interpolation / extrapolation shading (readoff only) */}
        {mode === 'readoff' && sortedPts.length >= 2 && (
          <>
            <rect
              x={interpRect.x0}
              y={PY1}
              width={Math.max(0, interpRect.x1 - interpRect.x0)}
              height={PY0 - PY1}
              fill={PRIMARY}
              opacity={0.06}
            />
            {extrapRight && (
              <rect
                x={extrapRight.x0}
                y={PY1}
                width={Math.max(0, extrapRight.x1 - extrapRight.x0)}
                height={PY0 - PY1}
                fill={WARN}
                opacity={0.08}
              />
            )}
          </>
        )}

        {/* grid */}
        {xTicks.map((t) => (
          <line key={`gx${t}`} x1={sx(t)} y1={PY1} x2={sx(t)} y2={PY0} stroke={LINE} strokeWidth={1} />
        ))}
        {yTicks.map((t) => (
          <line key={`gy${t}`} x1={PX0} y1={sy(t)} x2={PX1} y2={sy(t)} stroke={LINE} strokeWidth={1} />
        ))}

        {/* axes */}
        <line x1={PX0} y1={PY0} x2={PX1} y2={PY0} stroke={INK} strokeWidth={1.5} />
        <line x1={PX0} y1={PY0} x2={PX0} y2={PY1} stroke={INK} strokeWidth={1.5} />

        {/* x tick labels */}
        {xTicks.map((t) => (
          <text key={`xt${t}`} x={sx(t)} y={PY0 + 16} textAnchor="middle" fontSize={10} fill={SUB}>
            {fmt(t)}
          </text>
        ))}
        {/* y tick labels */}
        {yTicks.map((t) => (
          <text key={`yt${t}`} x={PX0 - 8} y={sy(t) + 3} textAnchor="end" fontSize={10} fill={SUB}>
            {fmt(t)}
          </text>
        ))}

        {/* axis titles */}
        <text x={(PX0 + PX1) / 2} y={H - 10} textAnchor="middle" fontSize={11} fontWeight={600} fill={INK}>
          {xLab}
        </text>
        <text
          x={16}
          y={(PY0 + PY1) / 2}
          textAnchor="middle"
          fontSize={11}
          fontWeight={600}
          fill={INK}
          transform={`rotate(-90 16 ${(PY0 + PY1) / 2})`}
        >
          {yLab}
        </text>

        {/* reference / original line */}
        {refPath && <path d={refPath} fill="none" stroke={PALETTE[4]} strokeWidth={2} strokeDasharray="6 4" />}

        {/* the plotted curve (readoff) */}
        {mode === 'readoff' && curvePath && (
          <path d={curvePath} fill="none" stroke={PRIMARY} strokeWidth={2.5} strokeLinejoin="round" />
        )}
        {mode === 'readoff' &&
          sortedPts.map((p, i) => (
            <circle key={`pt${i}`} cx={sx(p[0])} cy={sy(p[1])} r={3.5} fill={PRIMARY} stroke="#fff" strokeWidth={1} />
          ))}

        {/* read-off marks of interest */}
        {mode === 'readoff' &&
          (data.readouts ?? []).map((r, i) => {
            const inside = r.x >= xRange[0] && r.x <= xRange[1]
            if (!inside) return null
            const beyond = r.x > dataMaxX + 1e-9
            return (
              <line
                key={`ro${i}`}
                x1={sx(r.x)}
                y1={PY0}
                x2={sx(r.x)}
                y2={PY1}
                stroke={beyond ? WARN : PALETTE[2]}
                strokeWidth={1}
                strokeDasharray="3 3"
                opacity={0.7}
              />
            )
          })}

        {/* READOFF crosshair */}
        {mode === 'readoff' && cursorY != null && (
          <g>
            <line x1={sx(cursorX)} y1={PY1} x2={sx(cursorX)} y2={PY0} stroke={inExtrap ? WARN : PRIMARY} strokeWidth={1.5} />
            <line
              x1={PX0}
              y1={sy(cursorY)}
              x2={sx(cursorX)}
              y2={sy(cursorY)}
              stroke={inExtrap ? WARN : PRIMARY}
              strokeWidth={1}
              strokeDasharray="4 3"
            />
            <circle
              cx={sx(cursorX)}
              cy={sy(cursorY)}
              r={6}
              fill="#fff"
              stroke={inExtrap ? WARN : PRIMARY}
              strokeWidth={3}
              style={{ filter: 'drop-shadow(0 1px 2px rgba(15,23,42,0.25))' }}
            />
          </g>
        )}

        {/* PLOT mode: axis-x given target columns; draggable handles */}
        {mode === 'plot' &&
          tableTargets.map((t, i) => {
            const y = currentPlotY(i)
            const placed = i in plotY
            const active = i === activeIdx
            return (
              <g key={`pl${i}`}>
                {/* guide column */}
                <line x1={sx(t[0])} y1={PY0} x2={sx(t[0])} y2={PY1} stroke={LINE} strokeDasharray="2 4" />
                {/* handle */}
                <circle
                  cx={sx(t[0])}
                  cy={sy(y)}
                  r={active ? 8 : 6.5}
                  fill={placed ? PRIMARY : '#fff'}
                  stroke={PRIMARY}
                  strokeWidth={2.5}
                  style={{ cursor: 'ns-resize', filter: 'drop-shadow(0 1px 2px rgba(15,23,42,0.2))' }}
                />
                <text x={sx(t[0])} y={PY0 + 28} textAnchor="middle" fontSize={9} fill={SUB}>
                  x={fmt(t[0])}
                </text>
              </g>
            )
          })}
      </svg>

      {/* readouts / captions */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {mode === 'readoff' && (
          <>
            <Readout label={xLab} value={fmt(cursorX)} color={inExtrap ? WARN : PRIMARY} />
            <Readout label={yLab} value={cursorY == null ? '—' : fmt(cursorY)} color={inExtrap ? WARN : PRIMARY} />
            {inExtrap && (
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold"
                style={{ background: '#fff4e6', color: WARN }}
              >
                ⚠ extrapolation — beyond the data, unreliable
              </span>
            )}
          </>
        )}
      </div>

      {/* read-off task notes */}
      {mode === 'readoff' && (data.readouts ?? []).some((r) => r.note || r.expected) && (
        <ul className="mt-2 space-y-1">
          {(data.readouts ?? []).map((r, i) =>
            r.note || r.expected ? (
              <li key={`rn${i}`} className="text-[11px]" style={{ color: SUB }}>
                <span className="font-mono font-semibold" style={{ color: INK }}>
                  {xLab.split('/')[0].trim()} = {fmt(r.x)}
                </span>
                {r.note ? <> — {r.note}</> : null}
                {r.expected ? <> — expected {r.expected}</> : null}
              </li>
            ) : null,
          )}
        </ul>
      )}

      {/* plot data table */}
      {mode === 'plot' && tableTargets.length > 0 && (
        <div className="mt-2 overflow-x-auto">
          <table className="text-[11px]" style={{ color: INK }}>
            <thead>
              <tr style={{ color: SUB }}>
                <th className="pr-3 text-left font-semibold">{xLab}</th>
                <th className="pr-3 text-left font-semibold">{yLab} (target)</th>
                <th className="text-left font-semibold">your value</th>
              </tr>
            </thead>
            <tbody>
              {tableTargets.map((t, i) => (
                <tr key={`tr${i}`}>
                  <td className="pr-3 font-mono">{fmt(t[0])}</td>
                  <td className="pr-3 font-mono">{fmt(t[1])}</td>
                  <td className="font-mono" style={{ color: i in plotY ? PRIMARY : SUB }}>
                    {i in plotY ? fmt(currentPlotY(i)) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* free-text annotations (captions only — never assessed) */}
      {(data.bestFit || data.gradientReadout || data.areaReadout || data.scrubReadout || data.units || data.task) && (
        <div className="mt-2 space-y-0.5 text-[11px]" style={{ color: SUB }}>
          {data.task && <p>{data.task}</p>}
          {data.bestFit && <p>Best fit: {data.bestFit}</p>}
          {data.gradientReadout && <p>{data.gradientReadout}</p>}
          {data.areaReadout && <p>{data.areaReadout}</p>}
          {data.scrubReadout && <p>{data.scrubReadout}</p>}
          {data.units && <p>{data.units}</p>}
        </div>
      )}
    </FigureCard>
  )
}

// ── helpers (module-scope, pure, SSR-safe) ──────────────────────────────────

/** A "nice" tick step (1/2/5 × 10^k) for a numeric range, ~6 divisions. */
function niceStep(lo: number, hi: number): number {
  const span = Math.abs(hi - lo) || 1
  const raw = span / 6
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const norm = raw / mag
  const nice = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10
  return nice * mag
}

/** Tick values from lo→hi at step, inclusive, guarded against runaway loops. */
function buildTicks(lo: number, hi: number, step: number): number[] {
  if (!Number.isFinite(step) || step <= 0) return [lo, hi]
  const out: number[] = []
  const start = Math.ceil(lo / step) * step
  for (let v = start, i = 0; v <= hi + step * 1e-6 && i < 200; v += step, i++) {
    out.push(Math.round(v * 1e6) / 1e6)
  }
  if (!out.length) return [lo, hi]
  return out
}

// reference the PRNG so it is retained for seeded variants without affecting render
void mulberry32
