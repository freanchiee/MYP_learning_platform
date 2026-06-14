'use client'

import { useState } from 'react'

/**
 * Reusable interactive data table (I&S artefact).
 * A clean ruled table with a shaded header row, zebra-striped body rows and a
 * row hover-highlight; clicking a row pins/highlights it (toggle), so a student
 * can mark the row they are reading off. Optional caption sits under the table.
 * Used for action-plan tables and data tables.
 *
 * Data-driven (renders purely from { headers, rows }). Theme-aware chrome
 * (tokens) with its own light backing + `figure-surface` so it stays legible on
 * the dark Glass theme. Numeric-looking cells are right-aligned automatically.
 */
export interface DataTableInteractiveData {
  title?: string
  source?: string
  caption?: string
  headers: string[]
  rows: string[][]
}

const ACCENT = '#0b7285'

export default function DataTableInteractive({ data }: { data: DataTableInteractiveData }) {
  const [pinned, setPinned] = useState<Set<number>>(new Set())
  const [hover, setHover] = useState<number | null>(null)

  const headers = data.headers ?? []
  const rows = data.rows ?? []
  const cols = Math.max(headers.length, ...rows.map((r) => r.length), 1)

  // Right-align a column when every non-empty cell in it looks numeric.
  const numericCol = Array.from({ length: cols }, (_, c) => {
    const vals = rows.map((r) => (r[c] ?? '').trim()).filter(Boolean)
    return vals.length > 0 && vals.every(isNumericish)
  })

  const togglePin = (ri: number) =>
    setPinned((s) => {
      const n = new Set(s)
      n.has(ri) ? n.delete(ri) : n.add(ri)
      return n
    })

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        {data.title && (
          <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>
            {data.title}
          </h3>
        )}
        {data.source && (
          <span className="text-[11px]" style={{ color: '#64748b' }}>
            Source: {data.source} · <span className="font-mono">interactive</span>
          </span>
        )}
      </div>

      <div className="w-full overflow-x-auto rounded-lg" style={{ border: '1px solid #e2e8f0' }}>
        <table className="w-full border-collapse text-[13px]" style={{ color: '#1e293b' }}>
          {headers.length > 0 && (
            <thead>
              <tr>
                {Array.from({ length: cols }, (_, c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-3 py-2 font-bold"
                    style={{
                      background: ACCENT,
                      color: '#ffffff',
                      textAlign: numericCol[c] ? 'right' : 'left',
                      borderRight: c < cols - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                      whiteSpace: 'nowrap',
                      verticalAlign: 'bottom',
                    }}
                  >
                    {headers[c] ?? ''}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, ri) => {
              const isPinned = pinned.has(ri)
              const isHover = hover === ri
              const bg = isPinned
                ? '#fff3bf'
                : isHover
                ? '#e6f4f6'
                : ri % 2 === 1
                ? '#f8fafc'
                : '#ffffff'
              return (
                <tr
                  key={ri}
                  onClick={() => togglePin(ri)}
                  onMouseEnter={() => setHover(ri)}
                  onMouseLeave={() => setHover(null)}
                  className="cursor-pointer transition-colors"
                  style={{ background: bg }}
                  aria-pressed={isPinned}
                  title="Click to pin / highlight this row"
                >
                  {Array.from({ length: cols }, (_, c) => {
                    const Cell = c === 0 ? 'th' : 'td'
                    return (
                      <Cell
                        key={c}
                        {...(c === 0 ? { scope: 'row' as const } : {})}
                        className="px-3 py-2 align-top"
                        style={{
                          textAlign: numericCol[c] ? 'right' : 'left',
                          fontVariantNumeric: numericCol[c] ? 'tabular-nums' : undefined,
                          fontWeight: c === 0 ? 600 : 400,
                          borderTop: ri === 0 ? 'none' : '1px solid #eef2f6',
                          borderLeft: isPinned ? `3px solid ${ACCENT}` : '3px solid transparent',
                          color: '#1e293b',
                          whiteSpace: numericCol[c] ? 'nowrap' : 'normal',
                        }}
                      >
                        {row[c] ?? ''}
                      </Cell>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {data.caption && (
        <p className="mt-2 text-[12px] italic leading-snug" style={{ color: '#64748b' }}>
          {data.caption}
        </p>
      )}

      <div
        className="mt-2 flex items-center gap-2 rounded-lg px-3 py-1.5 text-[12px]"
        style={{ background: '#f8fafc', border: '1px solid #e2e8f0', minHeight: 32, color: '#0f172a' }}
        aria-live="polite"
      >
        {pinned.size > 0 ? (
          <>
            <span className="inline-block h-3 w-3 rounded-sm" style={{ background: '#fff3bf', border: `1px solid ${ACCENT}` }} />
            <span style={{ color: '#64748b' }}>
              {pinned.size} row{pinned.size === 1 ? '' : 's'} pinned — click a pinned row again to release it.
            </span>
          </>
        ) : (
          <span style={{ color: '#64748b' }}>Hover a row to highlight it; click to pin the row you are reading.</span>
        )}
      </div>
    </div>
  )
}

/** A cell counts as numeric if it is a number, optionally with %, currency, commas, ± or a unit suffix. */
function isNumericish(s: string): boolean {
  return /^[±+-]?\s*[$£€]?\s*\d[\d,]*(\.\d+)?\s*(%|kg|km|m|cm|mm|g|°C|°|yrs?|years?)?$/i.test(s.trim())
}
