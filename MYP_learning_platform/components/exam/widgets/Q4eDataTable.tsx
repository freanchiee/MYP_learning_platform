'use client'
import { useState } from 'react'

interface Q4eDataTableProps {
  onAnswer: (val: string) => void
}

const ROWS = [
  { drop: '0.40', t1: '0.25', t2: '0.27', t3: '0.25', avg: null },
  { drop: '0.80', t1: '0.43', t2: '0.42', t3: '0.45', avg: '0.43' },
  { drop: '1.20', t1: '0.66', t2: '0.64', t3: '0.65', avg: '0.65' },
  { drop: '1.60', t1: '0.80', t2: '0.80', t3: '0.81', avg: '0.80' },
  { drop: '2.00', t1: '0.93', t2: '0.92', t3: '0.95', avg: '0.93' },
]

const CORRECT = '0.26'

export default function Q4eDataTable({ onAnswer }: Q4eDataTableProps) {
  const [val, setVal] = useState('')
  const [checked, setChecked] = useState(false)

  const isCorrect = parseFloat(val) >= 0.255 && parseFloat(val) <= 0.263

  function handleCheck() {
    setChecked(true)
    onAnswer(`Average for 0.40 m drop = ${val} m`)
  }

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ background: 'var(--surface-deep)', color: 'var(--surface-deep-fg)' }}>
              <th className="px-3 py-2 text-left font-semibold text-xs whitespace-nowrap">Drop height / m</th>
              <th className="px-3 py-2 text-center font-semibold text-xs">Trial 1</th>
              <th className="px-3 py-2 text-center font-semibold text-xs">Trial 2</th>
              <th className="px-3 py-2 text-center font-semibold text-xs">Trial 3</th>
              <th className="px-3 py-2 text-center font-semibold text-xs">Average</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.drop} className={i % 2 === 0 ? 'bg-surface' : 'bg-surface-2'}>
                <td className="px-3 py-2 font-mono text-xs font-bold text-ink border-b border-divider">{row.drop}</td>
                <td className="px-3 py-2 font-mono text-xs text-center border-b border-divider">{row.t1}</td>
                <td className="px-3 py-2 font-mono text-xs text-center border-b border-divider">{row.t2}</td>
                <td className="px-3 py-2 font-mono text-xs text-center border-b border-divider">{row.t3}</td>
                <td className="px-3 py-2 text-center border-b border-divider">
                  {row.avg !== null ? (
                    <span className="font-mono text-xs">{row.avg}</span>
                  ) : (
                    <input
                      type="number"
                      step="0.001"
                      value={val}
                      onChange={e => {
                        setVal(e.target.value)
                        setChecked(false)
                        onAnswer(`Average for 0.40 m drop = ${e.target.value} m`)
                      }}
                      placeholder="0.???"
                      className={`w-20 rounded border px-2 py-1 text-xs font-mono text-center focus:outline-none focus:ring-2 ${
                        checked
                          ? isCorrect
                            ? 'border-success bg-success-surface text-success'
                            : 'border-danger bg-danger-surface text-danger'
                          : 'border-success bg-surface'
                      }`}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleCheck}
          disabled={!val}
          className="px-4 py-1.5 rounded-lg text-xs font-bold text-on-accent bg-action hover:opacity-90 disabled:opacity-40 transition-colors"
        >
          Check answer
        </button>
        {checked && (
          <span className={`text-xs font-semibold ${isCorrect ? 'text-success' : 'text-danger'}`}>
            {isCorrect
              ? '✓ Correct! Average = (0.25 + 0.27 + 0.25) / 3 = 0.257 ≈ 0.26 m'
              : `✗ Try again. Hint: add the three trial values and divide by 3.`}
          </span>
        )}
      </div>
      <p className="text-[10px] text-ink-subtle">
        Bounce heights are in metres (m). The missing average for the 0.40 m drop is calculated from the three trials above.
      </p>
    </div>
  )
}
