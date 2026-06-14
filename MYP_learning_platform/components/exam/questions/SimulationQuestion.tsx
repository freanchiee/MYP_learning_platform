'use client'

import { useExamStore } from '@/store/examStore'
import type { Question } from '@/lib/types'
import { cn } from '@/lib/utils'
import { resolveAssetUrl } from '@/lib/assets'
import LiveKeywordTracker from '@/components/exam/keyword/LiveKeywordTracker'
import HintPanel from '@/components/exam/hints/HintPanel'
import SpringCanvas from '@/components/simulations/SpringCanvas'
import PendulumGeoGebra from '@/components/simulations/PendulumGeoGebra'
import BounceCanvas from '@/components/simulations/BounceCanvas'
import OsmosisCanvas from '@/components/simulations/OsmosisCanvas'
import MitosisAnimation from '@/components/simulations/MitosisAnimation'
import PunnettSquare from '@/components/simulations/PunnettSquare'
import FoodWebDrag from '@/components/simulations/FoodWebDrag'
import EnzymeRateGraph from '@/components/simulations/EnzymeRateGraph'
import VariableClassifyTable from '@/components/exam/widgets/VariableClassifyTable'
import BounceGraphsAB from '@/components/exam/widgets/BounceGraphsAB'
import RichTextEditor from '@/components/exam/widgets/RichTextEditor'
import Q4eDataTable from '@/components/exam/widgets/Q4eDataTable'

function renderTaskText(text: string) {
  const lines = text.split('\n')
  const out: React.ReactNode[] = []
  let bullets: string[] = []

  function flushBullets() {
    if (bullets.length === 0) return
    out.push(
      <ul key={`bl-${out.length}`} className="list-disc list-outside ml-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm leading-relaxed" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'var(--text)' }}>
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
        <p key={`p-${out.length}`} className="text-sm leading-relaxed" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'var(--text)' }}>
          {line}
        </p>
      )
    }
  }
  flushBullets()
  return <div className="space-y-1.5">{out}</div>
}

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
  osmosis: 'Osmosis & Diffusion',
  mitosis: 'Cell Division (Mitosis)',
  punnett: 'Genetics (Punnett Square)',
  food_web: 'Ecosystems (Food Web)',
  enzyme_rate: 'Enzyme Kinetics',
}

function SimulationBody({ q }: { q: Question }) {
  switch (q.simType) {
    case 'spring':
      return <SpringCanvas />

    case 'pendulum_geogebra':
      return <PendulumGeoGebra />

    case 'bounce':
      return <BounceCanvas />

    case 'osmosis':
      return <OsmosisCanvas />

    case 'mitosis':
      return <MitosisAnimation />

    case 'punnett':
      return <PunnettSquare />

    case 'food_web':
      return <FoodWebDrag />

    case 'enzyme_rate':
      return <EnzymeRateGraph />

    case 'spring_data':
      return (
        <div className="p-6 rounded-control text-sm" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--text)' }}>Spring Extension Data (Hooke&apos;s Law)</p>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr style={{ background: 'var(--surface-3)' }}>
                <th className="px-3 py-1.5 text-left" style={{ border: '1px solid var(--border-strong)' }}>Load (N)</th>
                <th className="px-3 py-1.5 text-center" style={{ border: '1px solid var(--border-strong)' }}>Extension (cm)</th>
                <th className="px-3 py-1.5 text-center" style={{ border: '1px solid var(--border-strong)' }}>Extension (m)</th>
              </tr>
            </thead>
            <tbody>
              {[[0,0,0],[1,3.5,0.035],[2,7.0,0.070],[3,10.5,0.105],[4,14.0,0.140],[5,17.5,0.175],[6,'24.0*','0.240*']].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-1 text-center font-mono" style={{ border: '1px solid var(--border-strong)' }}>
                      {String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-[10px]" style={{ color: 'var(--text-subtle)' }}>* Denotes point beyond elastic limit</p>
        </div>
      )

    default:
      return (
        <div className="p-8 text-center text-sm rounded-control" style={{ background: 'var(--surface-2)', color: 'var(--text-subtle)' }}>
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
    <div className="max-w-3xl mx-auto py-6 px-4">
      <div data-exam-layout className="exam-layout-wrap">
        {/* ── CONTEXT slot ── */}
        <div data-exam-slot="context" className="space-y-5">
          {/* Stem card */}
          <div className="rounded-card p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
            {q.stem && (
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'var(--text)' }}>
                {q.stem}
              </p>
            )}

            {/* PDF page images (fallback if no nativeContent) */}
            {!q.nativeContent && q.figImages && q.figImages.length > 0 && (
              <div className="space-y-3 mt-2">
                {q.figImages.map((src, i) => (
                  <div key={i} className="figure-surface p-1">
                    <img
                      src={resolveAssetUrl(src)}
                      alt={`Question figure ${i + 1}`}
                      className="w-full rounded-control"
                      style={{ maxHeight: '600px', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Legacy figCaption */}
            {q.figCaption && (
              <pre
                className="mt-3 rounded-control p-4 text-xs font-mono whitespace-pre-wrap overflow-x-auto"
                style={{ background: 'var(--code-bg)', color: 'var(--code-fg)', border: '1px solid var(--code-border)' }}
              >
                {q.figCaption}
              </pre>
            )}
          </div>

          {/* Simulation container */}
          <div className="rounded-card overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
            {/* Sim header bar */}
            <div className="chrome-bar flex items-center gap-2 px-4 py-2.5">
              <span className="text-xs font-bold tracking-wide uppercase" style={{ color: 'var(--bar-fg)' }}>
                {label} Interactive Simulation
              </span>
              <span className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold animate-pulse" style={{ background: 'var(--danger)', color: 'var(--text-on-accent)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--text-on-accent)' }} />
                LIVE
              </span>
            </div>

            {/* Simulation body */}
            <div className="figure-surface p-2">
              <SimulationBody q={q} />
            </div>

            {/* Caption */}
            {q.simCaption && (
              <div className="px-4 py-2" style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--divider)' }}>
                <p className="text-[11px] text-center italic" style={{ color: 'var(--text-subtle)' }}>{q.simCaption}</p>
              </div>
            )}
          </div>
        </div>

        {/* ── ANSWER slot ── */}
        <div data-exam-slot="answer" className="space-y-5">
          {/* Tasks */}
          {tasks.map((task, taskIdx) => {
            const cmdTerm = detectCommandTerm(task.text)
            const charCount = task.ans?.length ?? 0

            return (
              <div
                key={task.label}
                className="rounded-card border-2 overflow-hidden"
                style={{ background: 'var(--surface)', borderColor: 'var(--cB, var(--accent))', boxShadow: 'var(--shadow-card)' }}
              >
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
                  {renderTaskText(task.text)}

                  {/* Widget or RichTextEditor */}
                  {task.widget === 'q4e_table' ? (
                    <Q4eDataTable onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)} />
                  ) : task.widget === 'variable_classify' ? (
                    <VariableClassifyTable
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
                  ) : (
                    <div className="space-y-1">
                      <RichTextEditor
                        value={task.ans ?? ''}
                        onChange={(val) => setTaskAnswer(qIdx, taskIdx, val)}
                        placeholder={task.ph}
                        rows={4}
                      />
                      <div className="flex justify-end">
                        <span className="text-[10px] font-mono" style={{ color: 'var(--text-subtle)' }}>{charCount} characters</span>
                      </div>
                    </div>
                  )}

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
