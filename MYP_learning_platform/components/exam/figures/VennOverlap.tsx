'use client'

/**
 * VennOverlap — 2-set Venn with a labelled intersection (pre-stubbed; already renders cleanly).
 *
 * Covers N19 Q7 (Magnitude/Frequency ∩ Population/Management → "Greater risk").
 *
 * This is close to complete for a 2-set case. TODO (optional): support 3 sets, item lists inside
 * each region, and hover highlight per region.
 */
export interface VennSet {
  label: string
  items?: string[]
  color?: string
}
export interface VennOverlapData {
  title?: string
  source?: string
  setA?: VennSet
  setB?: VennSet
  overlapLabel?: string
  caption?: string
}

export default function VennOverlap({ data }: { data?: VennOverlapData }) {
  const d = data ?? {}
  const a = d.setA ?? { label: 'A' }
  const b = d.setB ?? { label: 'B' }
  const aItems = Array.isArray(a.items) ? a.items : []
  const bItems = Array.isArray(b.items) ? b.items : []
  const colA = a.color ?? '#1971c2'
  const colB = b.color ?? '#e8590c'

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        {d.title && <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{d.title}</h3>}
        <span className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>venn{d.source ? ` · ${d.source}` : ''}</span>
      </div>

      <svg viewBox="0 0 420 240" className="block h-auto w-full" role="img" aria-label={d.title ?? 'venn diagram'}>
        <circle cx={160} cy={120} r={95} fill={colA} fillOpacity={0.18} stroke={colA} strokeWidth={2} />
        <circle cx={260} cy={120} r={95} fill={colB} fillOpacity={0.18} stroke={colB} strokeWidth={2} />

        <text x={95} y={30} textAnchor="middle" fontSize={13} fontWeight={700} fill={colA}>{a.label}</text>
        <text x={325} y={30} textAnchor="middle" fontSize={13} fontWeight={700} fill={colB}>{b.label}</text>

        {aItems.slice(0, 4).map((it, i) => (
          <text key={`a${i}`} x={120} y={95 + i * 18} textAnchor="middle" fontSize={11} fill="#334155">{it}</text>
        ))}
        {bItems.slice(0, 4).map((it, i) => (
          <text key={`b${i}`} x={300} y={95 + i * 18} textAnchor="middle" fontSize={11} fill="#334155">{it}</text>
        ))}

        {d.overlapLabel && (
          <text x={210} y={120} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={800} fill="#0f172a">
            {wrap(d.overlapLabel).map((line, i, arr) => (
              <tspan key={i} x={210} dy={i === 0 ? -(arr.length - 1) * 7 : 14}>{line}</tspan>
            ))}
          </text>
        )}
      </svg>

      {d.caption && <p className="mt-1 text-[11px]" style={{ color: '#64748b' }}>{d.caption}</p>}
    </div>
  )
}

function wrap(s: string): string[] {
  const words = String(s).split(/\s+/)
  if (words.length <= 2) return [s]
  const mid = Math.ceil(words.length / 2)
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
}
