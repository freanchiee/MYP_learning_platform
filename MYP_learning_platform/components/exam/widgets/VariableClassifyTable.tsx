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
  { id: 'IV', label: 'Independent Variable', color: '#3498db', accent: '#1d6fa4' },
  { id: 'DV', label: 'Dependent Variable', color: '#3cb563', accent: '#289147' },
  { id: 'CV', label: 'Control Variable', color: '#f39c12', accent: '#c47d0e' },
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
      <div className="overflow-x-auto rounded-xl border-2 border-gray-200 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wide">
                Variable
              </th>
              {COLUMNS.map(col => (
                <th
                  key={col.id}
                  className="px-4 py-3 text-center text-white font-bold text-xs border-b border-gray-200"
                  style={{ backgroundColor: col.color, minWidth: '140px' }}
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
                  style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9fafb' }}
                >
                  <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100" style={{ fontFamily: 'Georgia, serif' }}>
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
                    <td key={col.id} className="px-4 py-3 text-center border-b border-gray-100">
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
            background: allCorrect ? '#f0fdf4' : '#fff7ed',
            border: `1px solid ${allCorrect ? '#86efac' : '#fed7aa'}`,
            color: allCorrect ? '#166534' : '#9a3412',
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
