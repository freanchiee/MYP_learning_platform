'use client'
import { useState } from 'react'

interface Q5cDataTableProps {
  onAnswer: (val: string) => void
}

// Original erroneous data (as-given in the question)
const ORIGINAL_ROWS = [
  { h1: '50.0 cm', h2: '0.34', e: '0.82', errors: ['h1 unit inconsistent'] },
  { h1: '2.50m',   h2: '1.44', e: '0.76', errors: ['h1 no space before unit'] },
  { h1: '1.50m',   h2: '0.94', e: '0.74', errors: ['h1 no space', 'e wrong (should be 0.79)'] },
  { h1: '2.00m',   h2: '1.21', e: '—',    errors: ['h1 no space', 'e missing'] },
  { h1: '1.00m',   h2: '0.65', e: '0.806',errors: ['h1 no space', 'e too many decimal places'] },
]

// Correct data (what they should present)
const CORRECT_E_200 = '0.78' // sqrt(1.21/2.00) = sqrt(0.605) ≈ 0.78

export default function Q5cDataTable({ onAnswer }: Q5cDataTableProps) {
  const [eVal, setEVal] = useState('')
  const [showWorking, setShowWorking] = useState(false)

  const numE = parseFloat(eVal)
  const isCorrect = numE >= 0.776 && numE <= 0.782

  function handleChange(v: string) {
    setEVal(v)
    onAnswer(`e = √(1.21/2.00) = √0.605 = ${v}`)
  }

  return (
    <div className="space-y-4">
      {/* Original erroneous table */}
      <div>
        <p className="text-xs font-semibold text-warning mb-1.5 flex items-center gap-1">
          <span className="bg-warning-surface text-warning border border-warning rounded px-1.5 py-0.5">Original data — contains errors</span>
          <span className="text-ink-subtle font-normal">Identify and correct these in your answer</span>
        </p>
        <div className="overflow-x-auto rounded-xl border border-warning">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-warning-surface text-warning">
                <th className="px-3 py-2 text-left font-semibold border-b border-warning">Drop height (h₁)</th>
                <th className="px-3 py-2 text-center font-semibold border-b border-warning">Avg bounce height (h₂) / m</th>
                <th className="px-3 py-2 text-center font-semibold border-b border-warning">e</th>
                <th className="px-3 py-2 text-center font-semibold border-b border-warning">Issues</th>
              </tr>
            </thead>
            <tbody>
              {ORIGINAL_ROWS.map((row, i) => (
                <tr key={i} className="bg-surface border-b border-warning">
                  <td className="px-3 py-1.5 font-mono text-warning">{row.h1}</td>
                  <td className="px-3 py-1.5 font-mono text-center">{row.h2}</td>
                  <td className={`px-3 py-1.5 font-mono text-center ${row.e === '—' ? 'text-danger' : ''}`}>{row.e}</td>
                  <td className="px-3 py-1.5">
                    {row.errors.map((err, j) => (
                      <span key={j} className="inline-block bg-danger-surface text-danger border border-danger text-[10px] rounded px-1.5 py-0.5 mr-1 mb-0.5">
                        {err}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Corrected table */}
      <div>
        <p className="text-xs font-semibold text-ink mb-1.5">
          Corrected table — consistent SI units, appropriate significant figures
        </p>
        <div className="overflow-x-auto rounded-xl border border-success">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr style={{ background: 'var(--surface-deep)', color: 'var(--surface-deep-fg)' }}>
                <th className="px-3 py-2 text-left font-semibold">Drop height (h₁) / m</th>
                <th className="px-3 py-2 text-center font-semibold">Avg bounce height (h₂) / m</th>
                <th className="px-3 py-2 text-center font-semibold">e = √(h₂/h₁)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['0.50', '0.34', '0.82'],
                ['1.00', '0.65', '0.81'],
                ['1.50', '0.94', '0.79'],
                ['2.00', '1.21', null],
                ['2.50', '1.44', '0.76'],
              ].map(([h1, h2, e], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-surface' : 'bg-surface-2'}>
                  <td className="px-3 py-1.5 font-mono text-ink font-bold border-b border-divider">{h1}</td>
                  <td className="px-3 py-1.5 font-mono text-center border-b border-divider">{h2}</td>
                  <td className="px-3 py-1.5 font-mono text-center border-b border-divider">
                    {e !== null ? e : (
                      <input
                        type="number"
                        step="0.001"
                        value={eVal}
                        onChange={e2 => handleChange(e2.target.value)}
                        placeholder="0.???"
                        className={`w-20 rounded border px-2 py-1 text-xs font-mono text-center focus:outline-none focus:ring-2 ${
                          eVal
                            ? isCorrect
                              ? 'border-success bg-success-surface'
                              : 'border-danger bg-danger-surface'
                            : 'border-success'
                        }`}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Working space */}
      <div className="bg-info-surface border border-info rounded-xl p-3 space-y-2">
        <p className="text-xs font-semibold text-info">Calculate e for h₁ = 2.00 m</p>
        <p className="text-xs font-mono text-info">e = √(h₂ / h₁) = √(1.21 / 2.00) = √(0.605) = ?</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-info">e =</span>
          <input
            type="number"
            step="0.001"
            value={eVal}
            onChange={e => handleChange(e.target.value)}
            placeholder="0.???"
            className="w-24 rounded border border-info px-2 py-1 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[color:var(--info)]"
          />
          {eVal && (
            <span className={`text-xs font-semibold ${isCorrect ? 'text-success' : 'text-danger'}`}>
              {isCorrect ? '✓ Correct!' : '✗ Try again'}
            </span>
          )}
          <button
            onClick={() => setShowWorking(!showWorking)}
            className="ml-auto text-[10px] text-info underline"
          >
            {showWorking ? 'Hide working' : 'Show worked solution'}
          </button>
        </div>
        {showWorking && (
          <div className="bg-surface rounded-lg p-2 text-xs font-mono text-ink-muted space-y-0.5 border border-info">
            <p>e = √(h₂ / h₁)</p>
            <p>e = √(1.21 / 2.00)</p>
            <p>e = √(0.605)</p>
            <p className="font-bold text-success">e ≈ 0.78</p>
          </div>
        )}
      </div>

      <p className="text-[10px] text-ink-subtle">
        Note: The original table had inconsistent units (cm vs m), missing spaces, and some rounded e-values incorrectly.
        The corrected table uses metres throughout with 2 decimal places.
      </p>
    </div>
  )
}
