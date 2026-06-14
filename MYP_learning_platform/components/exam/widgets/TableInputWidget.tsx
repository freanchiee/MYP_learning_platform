'use client'

import { useState, useEffect, useCallback } from 'react'

interface TableInputWidgetProps {
  /** Column header labels */
  headers: string[]
  /**
   * Row data. Each row is a pipe-separated string, e.g.
   *   "Heart rate | ~ | bpm"
   * `~` marks an editable cell; all other values are read-only.
   */
  rows: string[]
  savedAnswer: string
  onAnswer: (ans: string) => void
}

type CellKey = `r${number}c${number}`

function parseAnswer(saved: string): Record<CellKey, string> {
  try { return JSON.parse(saved) as Record<CellKey, string> } catch { return {} }
}

export default function TableInputWidget({
  headers,
  rows,
  savedAnswer,
  onAnswer,
}: TableInputWidgetProps) {
  const [values, setValues] = useState<Record<CellKey, string>>(() => parseAnswer(savedAnswer))

  // Sync if savedAnswer is reset externally
  useEffect(() => {
    if (!savedAnswer) setValues({})
  }, [savedAnswer])

  const handleChange = useCallback(
    (key: CellKey, val: string) => {
      setValues(prev => {
        const next = { ...prev, [key]: val }
        onAnswer(JSON.stringify(next))
        return next
      })
    },
    [onAnswer],
  )

  const parsedRows = rows.map(row =>
    row.split('|').map(cell => cell.trim())
  )

  return (
    <div className="overflow-x-auto rounded-xl border border-line-strong shadow-sm">
      <table className="min-w-full text-sm" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
        <thead>
          <tr className="bg-surface-2 border-b border-line">
            {headers.map((h, ci) => (
              <th
                key={ci}
                className="px-4 py-2 text-left text-xs font-semibold text-ink-muted uppercase tracking-wide whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {parsedRows.map((cells, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-surface' : 'bg-surface-2'}>
              {cells.map((cell, ci) => {
                const key: CellKey = `r${ri}c${ci}`
                if (cell === '~') {
                  return (
                    <td key={ci} className="px-2 py-1.5 border-t border-divider">
                      <input
                        type="text"
                        value={values[key] ?? ''}
                        onChange={e => handleChange(key, e.target.value)}
                        className="w-full rounded-lg border border-line-strong bg-surface-inset px-2.5 py-1.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-[var(--ib-teal)] focus:border-transparent transition"
                        placeholder="…"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif', minWidth: '6rem' }}
                      />
                    </td>
                  )
                }
                return (
                  <td
                    key={ci}
                    className="px-4 py-2 text-ink border-t border-divider"
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
