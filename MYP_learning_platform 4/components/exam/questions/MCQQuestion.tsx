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
    <div className="max-w-3xl mx-auto py-6 px-4 space-y-5">
      {/* Stem card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        {q.stem && (
          <div
            className="text-base leading-relaxed text-gray-800"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            dangerouslySetInnerHTML={{ __html: q.stem }}
          />
        )}

        {/* Table data (e.g. Q2 terminal velocity table) */}
        {q.tableData && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {q.tableData.hd.map((h, i) => (
                    <th
                      key={i}
                      className={cn(
                        'border border-gray-300 px-3 py-2 font-semibold text-gray-700',
                        i === 0 ? 'text-left' : 'text-center',
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {q.tableData.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={cn(
                          'border border-gray-300 px-3 py-2 text-gray-700',
                          ci === 0 ? 'font-bold text-center w-10' : 'text-center',
                        )}
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
                className={cn(
                  'w-full flex items-start gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all duration-150',
                  selected
                    ? 'border-[var(--ib-teal)] bg-[var(--ib-teal-l)] shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50',
                )}
              >
                {/* Letter badge */}
                <span
                  className={cn(
                    'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5',
                    selected
                      ? 'bg-[var(--ib-teal)] text-white'
                      : 'bg-gray-100 text-gray-600',
                  )}
                >
                  {letter}
                </span>

                {/* Option text */}
                <span
                  className={cn(
                    'text-sm leading-relaxed flex-1',
                    selected ? 'text-gray-900 font-medium' : 'text-gray-700',
                  )}
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {opt}
                </span>
              </motion.button>
            )
          })}
        </div>
      )}

      {selectedIdx !== null && (
        <p className="text-xs text-[var(--ib-teal)] font-medium text-center">
          Option {OPTION_LETTERS[selectedIdx]} selected — click another to change
        </p>
      )}
    </div>
  )
}
