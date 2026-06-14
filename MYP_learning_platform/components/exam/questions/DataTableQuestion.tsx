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
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div data-exam-layout className="exam-layout-wrap">
        {/* ── CONTEXT slot ── */}
        <div data-exam-slot="context" className="space-y-5">
          {/* Stem card */}
          <div className="rounded-card p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
            {q.stem && (
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'var(--text)' }}
              >
                {q.stem}
              </p>
            )}
          </div>

          {/* Data table */}
          {headers.length > 0 && (
            <div className="rounded-card overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
              <div className="chrome-bar px-4 py-2.5 flex items-center gap-2">
                <span className="text-xs font-bold tracking-wide uppercase" style={{ color: 'var(--bar-fg)' }}>Data Table</span>
                {editableCols.size > 0 && (
                  <span className="text-[10px]" style={{ color: 'var(--bar-fg)', opacity: 0.7 }}>
                    — highlighted columns are editable
                  </span>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr style={{ background: 'var(--surface-2)' }}>
                      {headers.map((h, ci) => (
                        <th
                          key={ci}
                          className="px-3 py-2.5 text-center text-xs font-semibold"
                          style={{
                            border: '1px solid var(--border)',
                            background: editableCols.has(ci) ? 'var(--accent-soft)' : undefined,
                            color: editableCols.has(ci) ? 'var(--accent)' : 'var(--text-muted)',
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, ri) => (
                      <tr key={ri} style={{ background: ri % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)' }}>
                        {row.map((cell, ci) => {
                          if (editableCols.has(ci)) {
                            const val = tableData_user[ri]?.[ci] ?? ''
                            return (
                              <td
                                key={ci}
                                className="px-1 py-1"
                                style={{ border: '1px solid var(--border)', background: 'var(--accent-soft)' }}
                              >
                                <input
                                  type="text"
                                  value={val}
                                  onChange={e => setTableCell(qIdx, ri, ci, e.target.value)}
                                  placeholder="—"
                                  className="w-full text-center text-sm rounded-control px-2 py-1 focus:outline-none focus:ring-2 focus:border-transparent font-mono"
                                  style={{
                                    border: '1px solid var(--border)',
                                    background: 'var(--surface-inset)',
                                    color: 'var(--text)',
                                    ['--tw-ring-color' as string]: 'var(--accent)',
                                  }}
                                />
                              </td>
                            )
                          }
                          return (
                            <td
                              key={ci}
                              className="px-3 py-2 text-center font-mono text-sm"
                              style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
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
        </div>

        {/* ── ANSWER slot ── */}
        <div data-exam-slot="answer" className="space-y-5">
          {/* Task questions */}
          {tasks.map((task, taskIdx) => {
            const cmdTerm = detectCommandTerm(task.text)
            const charCount = task.ans?.length ?? 0

            return (
              <div
                key={task.label}
                className="rounded-card border-2 overflow-hidden"
                style={{ background: 'var(--surface)', borderColor: 'var(--accent)', boxShadow: 'var(--shadow-card)' }}
              >
                {/* Task header */}
                <div className="flex items-center gap-2 px-4 py-2.5 flex-wrap" style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold font-mono" style={{ background: 'var(--surface-deep)', color: 'var(--surface-deep-fg)' }}>
                    ({task.label})
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ background: 'var(--surface-3)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    [{task.marks} mark{task.marks !== 1 ? 's' : ''}]
                  </span>
                  {cmdTerm && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
                      {cmdTerm}
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'var(--text)' }}
                  >
                    {task.text}
                  </p>

                  <div className="space-y-1">
                    <textarea
                      value={task.ans ?? ''}
                      onChange={e => setTaskAnswer(qIdx, taskIdx, e.target.value)}
                      placeholder={task.ph}
                      rows={3}
                      className="w-full rounded-control px-3 py-2.5 text-sm resize-y focus:outline-none focus:ring-2 focus:border-transparent transition-colors min-h-[100px]"
                      style={{
                        border: '1px solid var(--border-strong)',
                        background: 'var(--surface-inset)',
                        color: 'var(--text)',
                        ['--tw-ring-color' as string]: 'var(--accent)',
                      }}
                    />
                    <div className="flex justify-end">
                      <span className="text-[10px] font-mono" style={{ color: 'var(--text-subtle)' }}>{charCount} characters</span>
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
      </div>
    </div>
  )
}
