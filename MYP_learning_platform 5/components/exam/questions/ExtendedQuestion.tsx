'use client'

import { useExamStore } from '@/store/examStore'
import type { Question } from '@/lib/types'
import { cn } from '@/lib/utils'
import LiveKeywordTracker from '@/components/exam/keyword/LiveKeywordTracker'
import HintPanel from '@/components/exam/hints/HintPanel'
import CarbonDecayGraph from '@/components/exam/widgets/CarbonDecayGraph'
import DragDropPlanets from '@/components/exam/widgets/DragDropPlanets'
import SankeyDiagram from '@/components/exam/widgets/SankeyDiagram'
import BounceGraphsAB from '@/components/exam/widgets/BounceGraphsAB'
import VariableClassifyTable from '@/components/exam/widgets/VariableClassifyTable'
import RichTextEditor from '@/components/exam/widgets/RichTextEditor'
import Q4eDataTable from '@/components/exam/widgets/Q4eDataTable'
import Q5cDataTable from '@/components/exam/widgets/Q5cDataTable'

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

/** Renders task text, turning \n•-prefixed lines into proper list items */
function renderTaskText(text: string) {
  const lines = text.split('\n')
  const out: React.ReactNode[] = []
  let bullets: string[] = []

  function flushBullets() {
    if (bullets.length === 0) return
    out.push(
      <ul key={`bl-${out.length}`} className="list-disc list-outside ml-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm leading-relaxed text-gray-800" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {b}
          </li>
        ))}
      </ul>
    )
    bullets = []
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) { flushBullets(); continue }
    if (line.startsWith('•')) {
      bullets.push(line.slice(1).trim())
    } else {
      flushBullets()
      out.push(
        <p key={`p-${out.length}`} className="text-sm leading-relaxed text-gray-800" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {line}
        </p>
      )
    }
  }
  flushBullets()
  return <div className="space-y-1.5">{out}</div>
}

const critBorder: Record<string, string> = {
  A: 'border-[var(--cA)]',
  B: 'border-[var(--cB)]',
  C: 'border-[var(--cC)]',
  D: 'border-[var(--cD)]',
}

/** Renders the native content block in the stem card */
function NativeContent({
  q,
  qIdx,
  setTaskAnswer,
}: {
  q: Question
  qIdx: number
  setTaskAnswer: (qIdx: number, taskIdx: number, val: string) => void
}) {
  switch (q.nativeContent) {
    case 'solar_system':
      // DragDropPlanets is rendered per-task for task a (widget: 'drag_drop_planets')
      // so in the stem card we don't render it here
      return null

    case 'carbon_decay':
      return (
        <div className="mt-4">
          <CarbonDecayGraph />
        </div>
      )

    case 'sankey_q3':
      // SankeyDiagram is rendered per-task for task a (widget: 'sankey_q3')
      return null

    case 'bounce_graphs_ab':
      // BounceGraphsAB is rendered per-task for task g (widget: 'bounce_graphs_ab')
      return null

    default:
      // Fallback: render figImages if present
      if (q.figImages && q.figImages.length > 0) {
        return (
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
        )
      }
      return null
  }
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

        {/* Native content or fallback figImages */}
        <NativeContent q={q} qIdx={qIdx} setTaskAnswer={setTaskAnswer} />

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
              {task.label && (
                <span className="px-2 py-0.5 rounded-full bg-gray-800 text-white text-[11px] font-bold font-mono">
                  ({task.label})
                </span>
              )}
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium border border-gray-200">
                [{task.marks} mark{task.marks !== 1 ? 's' : ''}]
              </span>
              {cmdTerm && (
                <span className="px-2 py-0.5 rounded bg-[var(--ib-teal)] text-white text-[10px] font-bold tracking-wide uppercase">
                  {cmdTerm}
                </span>
              )}
            </div>

            {/* Task body */}
            <div className="p-4 space-y-3">
              {/* Task text with bullet-point rendering */}
              {renderTaskText(task.text)}

              {/* Widget or RichTextEditor */}
              {task.widget === 'drag_drop_planets' ? (
                <DragDropPlanets
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : task.widget === 'variable_classify' ? (
                <VariableClassifyTable
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : task.widget === 'sankey_q3' ? (
                <SankeyDiagram
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : task.widget === 'bounce_graphs_ab' ? (
                <div className="space-y-3">
                  <BounceGraphsAB />
                  <RichTextEditor
                    value={task.ans ?? ''}
                    onChange={(val) => setTaskAnswer(qIdx, taskIdx, val)}
                    placeholder={task.ph}
                    rows={4}
                  />
                </div>
              ) : task.widget === 'q4e_table' ? (
                <Q4eDataTable
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : task.widget === 'q5c_table' ? (
                <Q5cDataTable
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : (
                <div className="space-y-1">
                  <RichTextEditor
                    value={task.ans ?? ''}
                    onChange={(val) => setTaskAnswer(qIdx, taskIdx, val)}
                    placeholder={task.ph}
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <span className="text-[10px] text-gray-400 font-mono">
                      {charCount} characters
                    </span>
                  </div>
                </div>
              )}

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
