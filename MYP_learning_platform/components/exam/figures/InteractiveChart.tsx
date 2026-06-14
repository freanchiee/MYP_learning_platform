'use client'

import { useState } from 'react'

/**
 * Reusable interactive socio-economic chart (I&S artefact).
 * Data-driven: line / grouped-bar / stacked-bar with axes, gridlines, hover values,
 * and a clickable legend to toggle series. Theme-aware chrome (tokens); fixed series
 * colours (data); own light backing so it reads on the dark Glass theme.
 *
 * Read every axis range, tick and data point precisely off the source — a later task
 * may ask the student to read a value off this chart.
 */
export interface ChartSeries {
  name: string
  color?: string
  points: number[] // one value per x category (use NaN to skip)
}
export interface InteractiveChartData {
  kind?: 'line' | 'bar' | 'stacked'
  title?: string
  source?: string
  x: { label?: string; categories: string[] }
  y: { label?: string; min: number; max: number; ticks?: number[]; unit?: string }
  series: ChartSeries[]
}

const PALETTE = ['#0b7285', '#e8590c', '#9c36b5', '#2f9e44', '#1971c2', '#c2255c', '#f08c00', '#495057']
const W = 720
const H = 420
const PAD = { l: 64, r: 24, t: 16, b: 64 }
const PW = W - PAD.l - PAD.r
const PH = H - PAD.t - PAD.b

export default function InteractiveChart({ data }: { data: InteractiveChartData }) {
  const kind = data.kind ?? 'line'
  // Defensive against malformed/variant data — never crash an exam render.
  const cats = Array.isArray(data.x?.categories) ? data.x.categories : []
  const min = typeof data.y?.min === 'number' ? data.y.min : 0
  const max = typeof data.y?.max === 'number' ? data.y.max : 100
  const ticks = Array.isArray(data.y?.ticks) ? data.y.ticks! : defaultTicks(min, max)
  const series: ChartSeries[] = Array.isArray(data.series)
    ? data.series.map((s) => ({ ...s, points: Array.isArray(s?.points) ? s.points : [] }))
    : []
  const [hidden, setHidden] = useState<Set<number>>(new Set())
  const [hover, setHover] = useState<{ si: number; ci: number } | null>(null)

  const color = (s: ChartSeries, i: number) => s.color ?? PALETTE[i % PALETTE.length]
  const yToPx = (v: number) => PAD.t + PH - ((v - min) / (max - min || 1)) * PH
  const xBand = PW / Math.max(1, cats.length)
  const xCenter = (ci: number) => PAD.l + xBand * (ci + 0.5)
  const visible = series.map((_, i) => !hidden.has(i))

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        {data.title && <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{data.title}</h3>}
        {data.source && <span className="text-[11px]" style={{ color: '#64748b' }}>Source: {data.source} · <span className="font-mono">interactive</span></span>}
      </div>

      {/* Legend / toggles */}
      <div className="mb-2 flex flex-wrap gap-1.5">
        {series.map((s, i) => {
          const on = visible[i]
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => setHidden((h) => { const n = new Set(h); n.has(i) ? n.delete(i) : n.add(i); return n })}
              className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-semibold transition-all"
              style={{ background: '#ffffff', color: on ? '#1e293b' : '#94a3b8', border: `1.5px solid ${color(s, i)}`, opacity: on ? 1 : 0.5 }}
            >
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: color(s, i) }} />
              {s.name}
            </button>
          )
        })}
      </div>

      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'chart'}>
          {/* gridlines + y ticks */}
          {ticks.map((t) => (
            <g key={t}>
              <line x1={PAD.l} y1={yToPx(t)} x2={W - PAD.r} y2={yToPx(t)} stroke="#eef2f6" strokeWidth={1} />
              <text x={PAD.l - 8} y={yToPx(t)} textAnchor="end" dominantBaseline="central" fontSize={11} fill="#64748b">{t}</text>
            </g>
          ))}
          {/* axes */}
          <line x1={PAD.l} y1={PAD.t} x2={PAD.l} y2={PAD.t + PH} stroke="#94a3b8" strokeWidth={1.5} />
          <line x1={PAD.l} y1={PAD.t + PH} x2={W - PAD.r} y2={PAD.t + PH} stroke="#94a3b8" strokeWidth={1.5} />
          {/* axis labels */}
          {data.y?.label && (
            <text transform={`translate(16 ${PAD.t + PH / 2}) rotate(-90)`} textAnchor="middle" fontSize={12} fontWeight={600} fill="#334155">{data.y?.label}{data.y?.unit ? ` (${data.y?.unit})` : ''}</text>
          )}
          {data.x?.label && <text x={PAD.l + PW / 2} y={H - 10} textAnchor="middle" fontSize={12} fontWeight={600} fill="#334155">{data.x?.label}</text>}
          {/* x category labels */}
          {cats.map((c, ci) => (
            <text key={ci} x={xCenter(ci)} y={PAD.t + PH + 18} textAnchor="middle" fontSize={11} fill="#64748b">{c}</text>
          ))}

          {/* DATA */}
          {kind === 'line' && series.map((s, si) => visible[si] && (
            <g key={si}>
              <polyline
                fill="none" stroke={color(s, si)} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round"
                points={s.points.map((v, ci) => Number.isNaN(v) ? '' : `${xCenter(ci)},${yToPx(v)}`).filter(Boolean).join(' ')}
              />
              {s.points.map((v, ci) => Number.isNaN(v) ? null : (
                <circle key={ci} cx={xCenter(ci)} cy={yToPx(v)} r={hover?.si === si && hover?.ci === ci ? 5.5 : 3.5}
                  fill="#fff" stroke={color(s, si)} strokeWidth={2}
                  onMouseEnter={() => setHover({ si, ci })} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }} />
              ))}
            </g>
          ))}

          {(kind === 'bar' || kind === 'stacked') && cats.map((_, ci) => {
            const vis = series.map((s, si) => ({ s, si })).filter(({ si }) => visible[si])
            if (kind === 'bar') {
              const bw = (xBand * 0.7) / Math.max(1, vis.length)
              const x0 = xCenter(ci) - (bw * vis.length) / 2
              return vis.map(({ s, si }, k) => {
                const v = s.points[ci]; if (Number.isNaN(v)) return null
                const y = yToPx(v); const x = x0 + k * bw
                return <rect key={`${ci}-${si}`} x={x} y={y} width={bw - 2} height={PAD.t + PH - y} rx={2} fill={color(s, si)}
                  opacity={hover && (hover.ci !== ci || hover.si !== si) ? 0.55 : 1}
                  onMouseEnter={() => setHover({ si, ci })} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }} />
              })
            }
            // stacked
            let acc = min
            const bw = xBand * 0.55
            const x = xCenter(ci) - bw / 2
            return vis.map(({ s, si }) => {
              const v = s.points[ci]; if (Number.isNaN(v)) return null
              const yTop = yToPx(acc + v); const yBot = yToPx(acc); acc += v
              return <rect key={`${ci}-${si}`} x={x} y={yTop} width={bw} height={Math.max(0, yBot - yTop)} fill={color(s, si)}
                opacity={hover && (hover.ci !== ci || hover.si !== si) ? 0.55 : 1}
                onMouseEnter={() => setHover({ si, ci })} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }} />
            })
          })}
        </svg>

        {/* readout */}
        <div className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', minHeight: 38, color: '#0f172a' }} aria-live="polite">
          {hover ? (
            <>
              <span className="inline-block h-3 w-3 rounded-sm" style={{ background: color(series[hover.si], hover.si) }} />
              <span className="font-bold">{series[hover.si].name}</span>
              <span style={{ color: '#64748b' }}>
                — {cats[hover.ci]}: {fmt(series[hover.si].points[hover.ci])}{data.y?.unit ? ` ${data.y?.unit}` : ''}
              </span>
            </>
          ) : (
            <span style={{ color: '#64748b' }}>Hover a {kind === 'line' ? 'point' : 'bar'} for its exact value; click the legend to toggle a series.</span>
          )}
        </div>
      </div>
    </div>
  )
}

function fmt(v: number): string {
  if (Number.isNaN(v)) return '—'
  return Math.abs(v) >= 1000 ? v.toLocaleString() : String(v)
}
function defaultTicks(min: number, max: number): number[] {
  const span = max - min
  const step = niceStep(span / 5)
  const out: number[] = []
  for (let t = min; t <= max + 1e-9; t += step) out.push(Math.round(t * 1e6) / 1e6)
  return out
}
function niceStep(raw: number): number {
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const n = raw / mag
  const step = n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10
  return step * mag
}
