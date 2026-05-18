'use client'

import { useExamStore } from '@/store/examStore'
import type { Question } from '@/lib/types'
import { cn } from '@/lib/utils'
import LiveKeywordTracker from '@/components/exam/keyword/LiveKeywordTracker'
import HintPanel from '@/components/exam/hints/HintPanel'

interface ExtendedQuestionProps {
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

const critBorder: Record<string, string> = {
  A: 'border-[var(--cA)]',
  B: 'border-[var(--cB)]',
  C: 'border-[var(--cC)]',
  D: 'border-[var(--cD)]',
}

export default function ExtendedQuestion({ q, qIdx }: ExtendedQuestionProps) {
  const setTaskAnswer = useExamStore(s => s.setTaskAnswer)
  const tasks = useExamStore(s => s.questions[qIdx]?.tasks ?? q.tasks ?? [])

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 space-y-5">
      {/* Stem card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        {q.stem && (
          <p className="text-base leading-relaxed text-gray-800 mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {q.stem}
          </p>
        )}

        {/* PDF page images */}
        {q.figImages && q.figImages.length > 0 && (
          <div className="space-y-3 mt-2">
            {q.figImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Question figure ${i + 1}`}
                className="w-full rounded-lg border border-gray-200 shadow-sm"
                style={{ maxHeight: '600px', objectFit: 'contain', background: '#fff' }}
              />
            ))}
          </div>
        )}

        {/* Legacy figCaption */}
        {q.figCaption && (
          <pre className="mt-3 bg-gray-900 text-green-300 rounded-lg p-4 text-xs font-mono whitespace-pre-wrap overflow-x-auto border border-gray-700">
            {q.figCaption}
          </pre>
        )}
      </div>

      {/* Tasks */}
      {tasks.map((task, taskIdx) => {
        const cmdTerm = detectCommandTerm(task.text)
        const charCount = task.ans?.length ?? 0
        const borderClass = critBorder[q.crit] ?? 'border-[var(--ib-teal)]'

        return (
          <div
            key={task.label}
            className={cn(
              'bg-white rounded-2xl border-2 shadow-sm overflow-hidden',
              borderClass,
            )}
          >
            {/* Task header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200 flex-wrap">
              {/* Part label badge */}
              <span className="px-2 py-0.5 rounded-full bg-gray-800 text-white text-[11px] font-bold font-mono">
                ({task.label})
              </span>

              {/* Marks badge */}
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium border border-gray-200">
                [{task.marks} mark{task.marks !== 1 ? 's' : ''}]
              </span>

              {/* Command term */}
              {cmdTerm && (
                <span className="px-2 py-0.5 rounded bg-[var(--ib-teal)] text-white text-[10px] font-bold tracking-wide uppercase">
                  {cmdTerm}
                </span>
              )}
            </div>

            {/* Task body */}
            <div className="p-4 space-y-3">
              {/* Task text */}
              <p
                className="text-sm leading-relaxed text-gray-800"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {task.text}
              </p>

              {/* Textarea */}
              <div className="space-y-1">
                <textarea
                  value={task.ans ?? ''}
                  onChange={e => setTaskAnswer(qIdx, taskIdx, e.target.value)}
                  placeholder={task.ph}
                  rows={4}
                  className={cn(
                    'w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm text-gray-800 resize-y',
                    'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--ib-teal)] focus:border-transparent',
                    'transition-colors min-h-[100px]',
                  )}
                />

                {/* Character count */}
                <div className="flex justify-end">
                  <span className="text-[10px] text-gray-400 font-mono">
                    {charCount} characters
                  </span>
                </div>
              </div>

              {/* Live keyword tracker */}
              <LiveKeywordTracker
                qId={q.id}
                taskLabel={task.label}
                text={task.ans ?? ''}
              />

              {/* Hint panel */}
              <HintPanel qId={q.id} taskLabel={task.label} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
