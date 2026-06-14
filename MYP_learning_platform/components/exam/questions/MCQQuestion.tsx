'use client'

import { motion } from 'framer-motion'
import { useExamStore } from '@/store/examStore'
import type { Question } from '@/lib/types'
import { cn } from '@/lib/utils'

interface MCQQuestionProps {
  q: Question
  qIdx: number
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

export default function MCQQuestion({ q, qIdx }: MCQQuestionProps) {
  const setMCQAnswer = useExamStore(s => s.setMCQAnswer)
  const selectedIdx = useExamStore(s => {
    const ans = s.questions[qIdx]?.ans
    return typeof ans === 'number' ? ans : null
  })

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <div data-exam-layout className="exam-layout-wrap">
        {/* ── CONTEXT slot ── */}
        <div data-exam-slot="context" className="space-y-5">
          {/* Stem card */}
          <div className="rounded-card p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
            {q.stem && (
              <div
                className="text-base leading-relaxed"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'var(--text)' }}
                dangerouslySetInnerHTML={{ __html: q.stem }}
              />
            )}

            {/* Table data (e.g. Q2 terminal velocity table) */}
            {q.tableData && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr style={{ background: 'var(--surface-2)' }}>
                      {q.tableData.hd.map((h, i) => (
                        <th
                          key={i}
                          className={cn(
                            'px-3 py-2 font-semibold',
                            i === 0 ? 'text-left' : 'text-center',
                          )}
                          style={{ border: '1px solid var(--border-strong)', color: 'var(--text-muted)' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {q.tableData.rows.map((row, ri) => (
                      <tr key={ri} style={{ background: ri % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)' }}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={cn(
                              'px-3 py-2',
                              ci === 0 ? 'font-bold text-center w-10' : 'text-center',
                            )}
                            style={{ border: '1px solid var(--border-strong)', color: 'var(--text-muted)' }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* ── ANSWER slot ── */}
        <div data-exam-slot="answer" className="space-y-5">
          {/* Options */}
          {q.opts && (
            <div className="space-y-2">
              {q.opts.map((opt, i) => {
                const letter = OPTION_LETTERS[i] ?? String(i + 1)
                const selected = selectedIdx === i
                return (
                  <motion.button
                    key={i}
                    onClick={() => setMCQAnswer(qIdx, i)}
                    whileTap={{ scale: 0.985 }}
                    className="w-full flex items-start gap-3 rounded-control border-2 px-4 py-3 text-left transition-all duration-150"
                    style={{
                      borderColor: selected ? 'var(--accent)' : 'var(--border)',
                      background: selected ? 'var(--accent-soft)' : 'var(--surface)',
                      boxShadow: selected ? 'var(--shadow-card)' : undefined,
                    }}
                  >
                    {/* Letter badge */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        background: selected ? 'var(--accent)' : 'var(--surface-3)',
                        color: selected ? 'var(--text-on-accent)' : 'var(--text-muted)',
                      }}
                    >
                      {letter}
                    </span>

                    {/* Option text */}
                    <span
                      className={cn(
                        'text-sm leading-relaxed flex-1',
                        selected && 'font-medium',
                      )}
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: selected ? 'var(--text)' : 'var(--text-muted)' }}
                    >
                      {opt}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          )}

          {selectedIdx !== null && (
            <p className="text-xs font-medium text-center" style={{ color: 'var(--accent)' }}>
              Option {OPTION_LETTERS[selectedIdx]} selected — click another to change
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
