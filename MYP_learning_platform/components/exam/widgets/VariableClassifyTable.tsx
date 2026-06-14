'use client'

import { useState } from 'react'

interface VariableClassifyTableProps {
  onAnswer: (answer: string) => void
}

type VarType = 'IV' | 'DV' | 'CV'

const VARIABLES = [
  { id: 'bounce_height', label: 'Height of the first bounce' },
  { id: 'ball_type', label: 'Kind of ball used' },
  { id: 'surface', label: 'Surface the ball bounces from' },
  { id: 'drop_height', label: 'Drop height' },
  { id: 'temperature', label: 'Temperature of the ball' },
]

const COLUMNS: { id: VarType; label: string; color: string; accent: string }[] = [
  { id: 'IV', label: 'Independent Variable', color: 'var(--info)', accent: 'var(--info)' },
  { id: 'DV', label: 'Dependent Variable', color: 'var(--success)', accent: 'var(--success)' },
  { id: 'CV', label: 'Control Variable', color: 'var(--warning)', accent: 'var(--warning)' },
]

const CORRECT_ANSWERS: Record<string, VarType> = {
  bounce_height: 'DV',
  ball_type: 'CV',
  surface: 'CV',
  drop_height: 'IV',
  temperature: 'CV',
}

const ANSWER_LABELS: Record<string, string> = {
  bounce_height: 'Height of first bounce',
  ball_type: 'Kind of ball',
  surface: 'Surface',
  drop_height: 'Drop height',
  temperature: 'Temperature',
}

export default function VariableClassifyTable({ onAnswer }: VariableClassifyTableProps) {
  const [selections, setSelections] = useState<Record<string, VarType | null>>({
    bounce_height: null,
    ball_type: null,
    surface: null,
    drop_height: null,
    temperature: null,
  })

  function handleSelect(varId: string, colId: VarType) {
    const next = { ...selections, [varId]: colId }
    setSelections(next)

    // Check if all are filled
    const allFilled = VARIABLES.every(v => next[v.id] !== null)
    if (allFilled) {
      const parts = VARIABLES.map(v => `${ANSWER_LABELS[v.id]}: ${next[v.id]}`).join('\n')
      onAnswer(parts)
    }
  }

  const allFilled = VARIABLES.every(v => selections[v.id] !== null)
  const allCorrect = allFilled && VARIABLES.every(v => selections[v.id] === CORRECT_ANSWERS[v.id])

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-xl border-2 border-line shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-ink-muted font-semibold bg-surface-2 border-b border-line text-xs uppercase tracking-wide">
                Variable
              </th>
              {COLUMNS.map(col => (
                <th
                  key={col.id}
                  className="px-4 py-3 text-center font-bold text-xs border-b border-line"
                  style={{ backgroundColor: col.color, color: 'var(--criterion-fg)', minWidth: '140px' }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VARIABLES.map((variable, idx) => {
              const sel = selections[variable.id]
              const correct = sel ? sel === CORRECT_ANSWERS[variable.id] : null

              return (
                <tr
                  key={variable.id}
                  className="transition-colors"
                  style={{ backgroundColor: idx % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)' }}
                >
                  <td className="px-4 py-3 text-ink font-medium border-b border-divider" style={{ fontFamily: 'Georgia, serif' }}>
                    <div className="flex items-center gap-2">
                      {variable.label}
                      {sel && (
                        <span className="text-xs">
                          {correct ? '✅' : '❌'}
                        </span>
                      )}
                    </div>
                  </td>
                  {COLUMNS.map(col => (
                    <td key={col.id} className="px-4 py-3 text-center border-b border-divider">
                      <label className="flex items-center justify-center cursor-pointer">
                        <input
                          type="radio"
                          name={`var-${variable.id}`}
                          value={col.id}
                          checked={sel === col.id}
                          onChange={() => handleSelect(variable.id, col.id)}
                          className="w-4 h-4 cursor-pointer"
                          style={{ accentColor: col.color }}
                        />
                      </label>
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Feedback */}
      {allFilled && (
        <div
          className="rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2"
          style={{
            background: allCorrect ? 'var(--success-surface)' : 'var(--warning-surface)',
            border: `1px solid ${allCorrect ? 'var(--success)' : 'var(--warning)'}`,
            color: allCorrect ? 'var(--success)' : 'var(--warning-fg)',
          }}
        >
          {allCorrect ? (
            <>✅ All correct! IV = Drop height, DV = Bounce height, CV = Ball type, surface, temperature.</>
          ) : (
            <>⚠️ Some answers may be incorrect. Check: the independent variable is what you change, dependent is what you measure, control variables are kept constant.</>
          )}
        </div>
      )}
    </div>
  )
}
