'use client'

import { useExamStore } from '@/store/examStore'
import type { Question } from '@/lib/types'
import { cn } from '@/lib/utils'
import LiveKeywordTracker from '@/components/exam/keyword/LiveKeywordTracker'
import HintPanel from '@/components/exam/hints/HintPanel'
import GraphCanvas from '@/components/simulations/GraphCanvas'

interface DataTableQuestionProps {
  q: Question
  qIdx: number
}

const COMMAND_TERMS = [
  'EXPLAIN', 'DESCRIBE', 'CALCULATE', 'EVALUATE', 'OUTLINE', 'IDENTIFY',
  'DISCUSS', 'JUSTIFY', 'DEFINE', 'SUGGEST', 'PREDICT', 'COMPARE',
  'ANALYSE', 'ANALYZE', 'STATE', 'SHOW', 'DETERMINE', 'DERIVE',
]

function detectCommandTerm(text: string): string | null {
  const upper = text.toUpperCase()
  return COMMAND_TERMS.find(t => upper.includes(t)) ?? null
}

export default function DataTableQuestion({ q, qIdx }: DataTableQuestionProps) {
  const setTableCell = useExamStore(s => s.setTableCell)
  const setTaskAnswer = useExamStore(s => s.setTaskAnswer)
  const tableData_user = useExamStore(s => s.questions[qIdx]?.tableData_user ?? {})
  const tasks = useExamStore(s => s.questions[qIdx]?.tasks ?? q.tasks ?? [])

  const headers = q.tableHeaders ?? []
  const rows = q.tableRows ?? []
  const editableCols = new Set(q.editableCols ?? [])

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-5">
      {/* Stem card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        {q.stem && (
          <p
            className="text-base leading-relaxed text-gray-800"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {q.stem}
          </p>
        )}
      </div>

      {/* Data table */}
      {headers.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-2.5 bg-[var(--ib-blue)] flex items-center gap-2">
            <span className="text-xs font-bold text-white tracking-wide uppercase">Data Table</span>
            {editableCols.size > 0 && (
              <span className="text-[10px] text-blue-200">
                — highlighted columns are editable
              </span>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {headers.map((h, ci) => (
                    <th
                      key={ci}
                      className={cn(
                        'border border-gray-200 px-3 py-2.5 text-center text-xs font-semibold text-gray-700',
                        editableCols.has(ci) && 'bg-blue-50 text-[var(--ib-blue)]',
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    {row.map((cell, ci) => {
                      if (editableCols.has(ci)) {
                        const val = tableData_user[ri]?.[ci] ?? ''
                        return (
                          <td
                            key={ci}
                            className="border border-gray-200 px-1 py-1 bg-blue-50"
                          >
                            <input
                              type="text"
                              value={val}
                              onChange={e => setTableCell(qIdx, ri, ci, e.target.value)}
                              placeholder="—"
                              className={cn(
                                'w-full text-center text-sm rounded-md px-2 py-1',
                                'border border-blue-200 bg-white focus:outline-none focus:ring-2',
                                'focus:ring-[var(--ib-teal)] focus:border-transparent',
                                'placeholder:text-gray-300 text-gray-800 font-mono',
                              )}
                            />
                          </td>
                        )
                      }
                      return (
                        <td
                          key={ci}
                          className="border border-gray-200 px-3 py-2 text-center text-gray-700 font-mono text-sm"
                        >
                          {String(cell)}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Graph canvas (if applicable) */}
      {q.hasGraph && <GraphCanvas q={q} qIdx={qIdx} />}

      {/* Task questions */}
      {tasks.map((task, taskIdx) => {
        const cmdTerm = detectCommandTerm(task.text)
        const charCount = task.ans?.length ?? 0

        return (
          <div
            key={task.label}
            className="bg-white rounded-2xl border-2 border-[var(--ib-teal)] shadow-sm overflow-hidden"
          >
            {/* Task header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200 flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-gray-800 text-white text-[11px] font-bold font-mono">
                ({task.label})
              </span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium border border-gray-200">
                [{task.marks} mark{task.marks !== 1 ? 's' : ''}]
              </span>
              {cmdTerm && (
                <span className="px-2 py-0.5 rounded bg-[var(--ib-teal)] text-white text-[10px] font-bold tracking-wide uppercase">
                  {cmdTerm}
                </span>
              )}
            </div>

            <div className="p-4 space-y-3">
              <p
                className="text-sm leading-relaxed text-gray-800"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {task.text}
              </p>

              <div className="space-y-1">
                <textarea
                  value={task.ans ?? ''}
                  onChange={e => setTaskAnswer(qIdx, taskIdx, e.target.value)}
                  placeholder={task.ph}
                  rows={3}
                  className={cn(
                    'w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm text-gray-800 resize-y',
                    'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--ib-teal)] focus:border-transparent',
                    'transition-colors min-h-[100px]',
                  )}
                />
                <div className="flex justify-end">
                  <span className="text-[10px] text-gray-400 font-mono">{charCount} characters</span>
                </div>
              </div>

              <LiveKeywordTracker
                qId={q.id}
                taskLabel={task.label}
                text={task.ans ?? ''}
              />

              <HintPanel qId={q.id} taskLabel={task.label} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
