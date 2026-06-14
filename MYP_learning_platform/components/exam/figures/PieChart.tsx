'use client'

import { useState } from 'react'

/**
 * PieChart — pie / doughnut / nested-ring (pre-stubbed but already functional).
 *
 * Covers Geography value-read stimuli: N20 aid pie (Education 59%), N20 carbon-vs-population
 * nested ring, M21 land-degradation rings. A later task often asks the student to read a share
 * off this, so the values must be EXACT — author `series[].value` precisely from the source.
 *
 * Implementation: robust stroke-dasharray donut (no arc maths, no edge-case bugs). Already
 * renders a real doughnut/pie + legend with percentages + hover readout. Defensive throughout.
 *
 * TODO (optional polish): label leader-lines, true 2-ring concentric layout for `kind:'nested'`
 * (currently the second ring renders as an inner concentric donut), exploded slice on hover.
 */
export interface PieSlice {
  name: string
  value: number
  color?: string
}
export interface PieChartData {
  kind?: 'pie' | 'doughnut' | 'nested'
  title?: string
  source?: string
  unit?: string
  series: PieSlice[]
  /** optional second concentric ring for kind:'nested' */
  innerSeries?: PieSlice[]
}

const PALETTE = ['#0b7285', '#e8590c', '#9c36b5', '#2f9e44', '#1971c2', '#c2255c', '#f08c00', '#495057', '#0ca678', '#5c7cfa']
const SIZE = 220
const R_OUTER = 92
const STROKE = 30

export default function PieChart({ data }: { data?: PieChartData }) {
  const d = data ?? ({} as PieChartData)
  const kind = d.kind ?? 'doughnut'
  const slices: PieSlice[] = Array.isArray(d.series) ? d.series.filter((s) => s && typeof s.value === 'number') : []
  const inner: PieSlice[] = Array.isArray(d.innerSeries) ? d.innerSeries.filter((s) => s && typeof s.value === 'number') : []
  const [hover, setHover] = useState<number | null>(null)

  const total = slices.reduce((a, s) => a + Math.max(0, s.value), 0) || 1
  const color = (s: PieSlice, i: number) => s.color ?? PALETTE[i % PALETTE.length]
  const innerRadius = kind === 'pie' ? R_OUTER : R_OUTER - STROKE / 2

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        {d.title && <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{d.title}</h3>}
        <span className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>{kind} · interactive{d.source ? ` · ${d.source}` : ''}</span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE} role="img" aria-label={d.title ?? 'pie chart'}>
          <Ring slices={slices} total={total} cx={SIZE / 2} cy={SIZE / 2} r={kind === 'pie' ? R_OUTER / 2 + STROKE / 2 : R_OUTER} stroke={kind === 'pie' ? R_OUTER : STROKE} color={color} hover={hover} setHover={setHover} />
          {kind === 'nested' && inner.length > 0 && (
            <Ring
              slices={inner}
              total={inner.reduce((a, s) => a + Math.max(0, s.value), 0) || 1}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R_OUTER - STROKE - 6}
              stroke={STROKE - 8}
              color={(s, i) => s.color ?? PALETTE[(i + 3) % PALETTE.length]}
              hover={null}
              setHover={() => {}}
            />
          )}
          {kind !== 'pie' && (
            <text x={SIZE / 2} y={SIZE / 2} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700} fill="#334155">
              {hover != null && slices[hover] ? `${Math.round((slices[hover].value / total) * 100)}%` : `${slices.length} parts`}
            </text>
          )}
          <circle cx={SIZE / 2} cy={SIZE / 2} r={innerRadius - STROKE} fill="none" />
        </svg>

        <ul className="flex-1 min-w-[160px] space-y-1">
          {slices.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ opacity: hover == null || hover === i ? 1 : 0.5, cursor: 'default' }}
            >
              <span className="inline-block h-3 w-3 rounded-sm" style={{ background: color(s, i) }} />
              <span className="font-semibold" style={{ color: '#0f172a' }}>{s.name}</span>
              <span className="ml-auto tabular-nums" style={{ color: '#64748b' }}>
                {fmt(s.value)}{d.unit ?? ''} · {Math.round((Math.max(0, s.value) / total) * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Ring({
  slices, total, cx, cy, r, stroke, color, hover, setHover,
}: {
  slices: PieSlice[]; total: number; cx: number; cy: number; r: number; stroke: number
  color: (s: PieSlice, i: number) => string; hover: number | null; setHover: (i: number | null) => void
}) {
  const circ = 2 * Math.PI * r
  let acc = 0
  return (
    <g transform={`rotate(-90 ${cx} ${cy})`}>
      {slices.map((s, i) => {
        const frac = Math.max(0, s.value) / total
        const len = frac * circ
        const dash = `${len} ${circ - len}`
        const offset = -acc * circ
        acc += frac
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={color(s, i)}
            strokeWidth={hover === i ? stroke + 4 : stroke}
            strokeDasharray={dash}
            strokeDashoffset={offset}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{ cursor: 'pointer', transition: 'stroke-width .12s' }}
          />
        )
      })}
    </g>
  )
}

function fmt(v: number): string {
  if (typeof v !== 'number' || Number.isNaN(v)) return '—'
  return Math.abs(v) >= 1000 ? v.toLocaleString() : String(v)
}
