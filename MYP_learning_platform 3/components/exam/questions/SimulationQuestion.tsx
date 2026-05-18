'use client'

import { useExamStore } from '@/store/examStore'
import type { Question } from '@/lib/types'
import { cn } from '@/lib/utils'
import LiveKeywordTracker from '@/components/exam/keyword/LiveKeywordTracker'
import HintPanel from '@/components/exam/hints/HintPanel'
import SpringCanvas from '@/components/simulations/SpringCanvas'
import PendulumGeoGebra from '@/components/simulations/PendulumGeoGebra'
import BounceCanvas from '@/components/simulations/BounceCanvas'

interface SimulationQuestionProps {
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

const simTypeLabel: Record<string, string> = {
  spring: 'Spring (Hooke\'s Law)',
  spring_data: 'Spring Data',
  pendulum_geogebra: 'Pendulum',
  wave: 'Wave',
  decay: 'Radioactive Decay',
  bounce: 'Bouncing Ball',
}

function SimulationBody({ q }: { q: Question }) {
  switch (q.simType) {
    case 'spring':
      return <SpringCanvas />

    case 'pendulum_geogebra':
      return <PendulumGeoGebra />

    case 'bounce':
      return <BounceCanvas />

    case 'spring_data':
      return (
        <div className="p-6 bg-gray-50 rounded-xl text-sm text-gray-600">
          <p className="font-semibold mb-3 text-gray-800">Spring Extension Data (Hooke&apos;s Law)</p>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-1.5 text-left">Load (N)</th>
                <th className="border border-gray-300 px-3 py-1.5 text-center">Extension (cm)</th>
                <th className="border border-gray-300 px-3 py-1.5 text-center">Extension (m)</th>
              </tr>
            </thead>
            <tbody>
              {[[0,0,0],[1,3.5,0.035],[2,7.0,0.070],[3,10.5,0.105],[4,14.0,0.140],[5,17.5,0.175],[6,'24.0*','0.240*']].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-gray-300 px-3 py-1 text-center font-mono">
                      {String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-[10px] text-gray-500">* Denotes point beyond elastic limit</p>
        </div>
      )

    default:
      return (
        <div className="p-8 text-center text-gray-500 text-sm bg-gray-50 rounded-xl">
          <p className="text-2xl mb-2">🔬</p>
          <p>Interactive simulation — {q.simType ?? 'unknown type'}</p>
        </div>
      )
  }
}

export default function SimulationQuestion({ q, qIdx }: SimulationQuestionProps) {
  const setTaskAnswer = useExamStore(s => s.setTaskAnswer)
  const tasks = useExamStore(s => s.questions[qIdx]?.tasks ?? q.tasks ?? [])

  const label = simTypeLabel[q.simType ?? ''] ?? q.simType ?? 'Interactive'

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

      {/* Simulation container */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Sim header bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[var(--ib-blue)]">
          <span className="text-xs font-bold text-white tracking-wide uppercase">
            {label} Interactive Simulation
          </span>
          <span className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            LIVE
          </span>
        </div>

        {/* Simulation body */}
        <div className="p-2">
          <SimulationBody q={q} />
        </div>

        {/* Caption */}
        {q.simCaption && (
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
            <p className="text-[11px] text-gray-500 text-center italic">{q.simCaption}</p>
          </div>
        )}
      </div>

      {/* Tasks */}
      {tasks.map((task, taskIdx) => {
        const cmdTerm = detectCommandTerm(task.text)
        const charCount = task.ans?.length ?? 0

        return (
          <div
            key={task.label}
            className="bg-white rounded-2xl border-2 border-[var(--cB,var(--ib-teal))] shadow-sm overflow-hidden"
          >
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
                  rows={4}
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
