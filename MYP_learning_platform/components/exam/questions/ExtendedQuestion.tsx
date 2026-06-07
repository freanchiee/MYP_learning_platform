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
import CannonballPathsWidget from '@/components/exam/widgets/CannonballPathsWidget'
import EnergyChainWidget from '@/components/exam/widgets/EnergyChainWidget'
import RadioSelectWidget from '@/components/exam/widgets/RadioSelectWidget'
import WaveAnimationsWidget from '@/components/exam/widgets/WaveAnimationsWidget'
import RadiationQ7Widget from '@/components/exam/widgets/RadiationQ7Widget'
import EditableImage from '@/components/exam/EditableImage'
import EditableText from '@/components/exam/EditableText'
import WaveLabelDragDrop from '@/components/exam/widgets/WaveLabelDragDrop'
import InlineDropdownSelect from '@/components/exam/widgets/InlineDropdownSelect'
import RefractionLabelDragDrop from '@/components/exam/widgets/RefractionLabelDragDrop'
import CheckboxSelectWidget from '@/components/exam/widgets/CheckboxSelectWidget'
import FillBlankWidget from '@/components/exam/widgets/FillBlankWidget'
import MatchDragDropWidget from '@/components/exam/widgets/MatchDragDropWidget'

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

/** Parses inline **bold** markdown into <strong> elements */
function parseInlineMd(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

/** Renders task text, turning \n•-prefixed lines into proper list items, and **bold** into <strong> */
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
            {parseInlineMd(b)}
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
          {parseInlineMd(line)}
        </p>
      )
    }
  }
  flushBullets()
  return <div className="space-y-1.5">{out}</div>
}

/** Renders a markdown table block (array of | lines) as a styled HTML table */
function renderMarkdownTable(lines: string[]): React.ReactNode {
  const parseRow = (line: string): string[] =>
    line.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1)

  const headerLine = lines[0]
  const bodyLines  = lines.slice(2)   // skip header + separator row

  const headers = parseRow(headerLine)
  const rows    = bodyLines.map(parseRow).filter(r => r.some(c => c !== ''))

  return (
    <div className="my-3 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full text-sm" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">
                {parseInlineMd(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2 text-gray-800 border-t border-gray-100">
                  {parseInlineMd(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Renders stem text:
 *  - Markdown pipe tables → styled HTML <table>
 *  - **bold** → <strong>
 *  - Multi-paragraph (blank line separated) → individual <p> elements
 */
function renderStemText(text: string): React.ReactNode {
  const lines = text.split('\n')
  const out: React.ReactNode[] = []
  let tableLines: string[] = []

  function flushTable() {
    if (tableLines.length >= 3) {
      out.push(<div key={`tbl-${out.length}`}>{renderMarkdownTable(tableLines)}</div>)
    } else {
      // Not enough rows to be a real table — fall back to plain text
      tableLines.forEach(l => {
        if (l.trim()) {
          out.push(
            <p key={`p-${out.length}`} className="text-base leading-relaxed text-gray-800"
               style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              {parseInlineMd(l.trim())}
            </p>
          )
        }
      })
    }
    tableLines = []
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (line.startsWith('|')) {
      tableLines.push(line)
    } else {
      if (tableLines.length > 0) flushTable()
      if (!line) continue
      out.push(
        <p key={`p-${out.length}`} className="text-base leading-relaxed text-gray-800"
           style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          {parseInlineMd(line)}
        </p>
      )
    }
  }
  if (tableLines.length > 0) flushTable()

  return <div className="space-y-2">{out}</div>
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

    case 'wave_animations':
      return (
        <div className="mt-4">
          <WaveAnimationsWidget />
        </div>
      )

    case 'radiation_q7':
      return <RadiationQ7Widget />

    default:
      // Fallback: render figImages if present
      if (q.figImages && q.figImages.length > 0) {
        return (
          <div className="space-y-3 mt-2">
            {q.figImages.map((src, i) => (
              <EditableImage
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
  const setTaskAnswer  = useExamStore(s => s.setTaskAnswer)
  const tasks          = useExamStore(s => s.questions[qIdx]?.tasks ?? q.tasks ?? [])
  const textOverrides  = useExamStore(s => s.textOverrides)

  return (
    <div className="max-w-3xl mx-auto py-6 px-4 space-y-5">
      {/* Stem card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        {q.stem && (
          <div className="mb-4">
            <EditableText
              textKey={`q${q.id}:stem`}
              originalText={q.stem}
              renderText={renderStemText}
              label="Question stem"
            />
          </div>
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
        // Use text override when present so the command-term badge stays in sync
        const effectiveTaskText = textOverrides[`q${q.id}:task:${task.label}:text`] ?? task.text
        const cmdTerm   = detectCommandTerm(effectiveTaskText)
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
              {/* Per-task figure images — shown above the answer box, right before the relevant question */}
              {task.figImages && task.figImages.length > 0 && (
                <div className="space-y-2 mb-1">
                  {task.figImages.map((src, i) => (
                    <EditableImage
                      key={i}
                      src={src}
                      alt={`Figure for part (${task.label})`}
                      className="rounded-lg border border-gray-200 shadow-sm mx-auto block"
                      style={{ maxWidth: '100%', maxHeight: '420px', objectFit: 'contain', background: '#fff' }}
                    />
                  ))}
                </div>
              )}

              {/* Reading passage — shown as styled card above question text */}
              {task.passage && (
                <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 space-y-2 text-[13px] text-gray-700 leading-relaxed">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 mb-1">Read the following</p>
                  {task.passage.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              {/* Task text with bullet-point rendering */}
              <EditableText
                textKey={`q${q.id}:task:${task.label}:text`}
                originalText={task.text}
                renderText={renderTaskText}
                label={`Task (${task.label}) text`}
              />

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
              ) : task.widget === 'cannonball_paths' ? (
                <CannonballPathsWidget
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                  initialValue={task.ans ?? ''}
                />
              ) : task.widget === 'energy_chain' ? (
                <EnergyChainWidget
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                  initialValue={task.ans ?? ''}
                />
              ) : task.widget === 'radio_select' ? (
                <RadioSelectWidget
                  options={task.widgetOptions ?? []}
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                  initialValue={task.ans ?? ''}
                />
              ) : task.widget === 'wave_label_drag_drop' ? (
                <WaveLabelDragDrop
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                  initialValue={task.ans ?? ''}
                />
              ) : task.widget === 'inline_dropdown_select' ? (
                <InlineDropdownSelect
                  items={task.widgetItems ?? []}
                  options={task.widgetOptions ?? []}
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                  initialValue={task.ans ?? ''}
                />
              ) : task.widget === 'refraction_label_drag_drop' ? (
                <RefractionLabelDragDrop
                  items={task.widgetItems ?? []}
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                  initialValue={task.ans ?? ''}
                />
              ) : task.widget === 'checkbox_select' ? (
                <CheckboxSelectWidget
                  options={task.widgetOptions ?? []}
                  savedAnswer={task.ans ?? ''}
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : task.widget === 'fill_blank' ? (
                <FillBlankWidget
                  text={task.text}
                  savedAnswer={task.ans ?? ''}
                  onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                />
              ) : task.widget === 'match_drag_drop' ? (
                <MatchDragDropWidget
                  items={task.widgetItems ?? []}
                  targets={task.widgetOptions ?? []}
                  savedAnswer={task.ans ?? ''}
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
