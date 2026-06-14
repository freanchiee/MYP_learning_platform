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
import ChoroplethWorld from '@/components/exam/figures/ChoroplethWorld'
import EditableImage from '@/components/exam/EditableImage'
import QuestionImage from '@/components/exam/QuestionImage'
import EditableText from '@/components/exam/EditableText'
import WaveLabelDragDrop from '@/components/exam/widgets/WaveLabelDragDrop'
import InlineDropdownSelect from '@/components/exam/widgets/InlineDropdownSelect'
import RefractionLabelDragDrop from '@/components/exam/widgets/RefractionLabelDragDrop'
import CheckboxSelectWidget from '@/components/exam/widgets/CheckboxSelectWidget'
import FillBlankWidget from '@/components/exam/widgets/FillBlankWidget'
import MatchDragDropWidget from '@/components/exam/widgets/MatchDragDropWidget'
import TableInputWidget from '@/components/exam/widgets/TableInputWidget'

interface ExtendedQuestionProps {
  q: Question
  qIdx: number
}

const COMMAND_TERMS = [
  'EXPLAIN', 'DESCRIBE', 'CALCULATE', 'EVALUATE', 'OUTLINE', 'IDENTIFY',
  'DISCUSS', 'JUSTIFY', 'DEFINE', 'SUGGEST', 'PREDICT', 'COMPARE',
  'ANALYSE', 'ANALYZE', 'STATE', 'SHOW', 'DETERMINE', 'DERIVE',
  'FORMULATE', 'SUMMARIZE', 'SYNTHESIZE', 'TO WHAT EXTENT',
]

function detectCommandTerm(text: string): string | null {
  const upper = text.toUpperCase()
  return COMMAND_TERMS.find(t => upper.includes(t)) ?? null
}

/** Reading text uses a serif face for the exam-paper feel across all themes. */
const SERIF = 'Georgia, "Times New Roman", serif'

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
          <li key={i} className="text-sm leading-relaxed" style={{ fontFamily: SERIF, color: 'var(--text)' }}>
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
        <p key={`p-${out.length}`} className="text-sm leading-relaxed" style={{ fontFamily: SERIF, color: 'var(--text)' }}>
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
    <div className="my-3 overflow-x-auto rounded-control" style={{ border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
      <table className="min-w-full text-sm" style={{ fontFamily: SERIF, color: 'var(--text)' }}>
        <thead>
          <tr style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                {parseInlineMd(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)' }}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2" style={{ color: 'var(--text)', borderTop: '1px solid var(--divider)' }}>
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
            <p key={`p-${out.length}`} className="text-base leading-relaxed"
               style={{ fontFamily: SERIF, color: 'var(--text)' }}>
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
        <p key={`p-${out.length}`} className="text-base leading-relaxed"
           style={{ fontFamily: SERIF, color: 'var(--text)' }}>
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
      return null

    case 'carbon_decay':
      return (
        <div className="mt-4">
          <CarbonDecayGraph />
        </div>
      )

    case 'sankey_q3':
      return null

    case 'bounce_graphs_ab':
      return null

    case 'wave_animations':
      return (
        <div className="mt-4">
          <WaveAnimationsWidget />
        </div>
      )

    case 'radiation_q7':
      return <RadiationQ7Widget />

    case 'water_stress_map':
      return (
        <div className="mt-4">
          <ChoroplethWorld />
        </div>
      )

    default:
      // Fallback: render figImages if present — but an interactive artefact supersedes them
      if (q.figImages && q.figImages.length > 0 && !q.artefact) {
        return (
          <div className="space-y-3 mt-2">
            {q.figImages.map((src, i) => (
              <div key={i} className="figure-surface p-1">
                <QuestionImage
                  image_type="original"
                  src={src}
                  alt={`Question figure ${i + 1}`}
                  className="w-full rounded-control"
                  style={{ maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
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
    <div className="py-6 px-4">
      {/* Two-slot layout — context (stem) + answer (tasks). The data-answer-zone
          attribute on <html> positions the answer below (stack/mobile), in a right
          column (classic) or a right rail (other themes) via CSS in themes.css. */}
      <div data-exam-layout className="exam-layout-wrap">
        {/* ── CONTEXT slot ── */}
        <div data-exam-slot="context" className="space-y-5">
          {/* Stem card */}
          <div className="chrome-card p-6">
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

            {/* Data-driven interactive artefact (I&S stimulus) */}
            {q.artefact && (
              <div className="mt-4">
                <QuestionImage
                  image_type="code_rendered"
                  render_component={q.artefact.component}
                  render_data={q.artefact.data}
                  alt={q.artefact.caption ?? 'Interactive source'}
                />
                {q.artefact.caption && (
                  <p className="mt-1.5 text-xs" style={{ color: 'var(--text-subtle)' }}>{q.artefact.caption}</p>
                )}
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
        </div>

        {/* ── ANSWER slot ── */}
        <div data-exam-slot="answer" className="space-y-5">
          {tasks.map((task, taskIdx) => {
            // Use text override when present so the command-term badge stays in sync
            const effectiveTaskText = textOverrides[`q${q.id}:task:${task.label}:text`] ?? task.text
            const cmdTerm   = detectCommandTerm(effectiveTaskText)
            const charCount = task.ans?.length ?? 0
            const borderClass = critBorder[q.crit] ?? 'border-[var(--accent-2)]'

            return (
              <div
                key={task.label}
                className={cn(
                  'rounded-card border-2 overflow-hidden',
                  borderClass,
                )}
                style={{ background: 'var(--surface)', boxShadow: 'var(--shadow-card)' }}
              >
                {/* Task header */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 flex-wrap"
                  style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}
                >
                  {task.label && (
                    <span
                      className="px-2 py-0.5 rounded-full text-[11px] font-bold font-mono"
                      style={{ background: 'var(--surface-deep)', color: 'var(--surface-deep-fg)' }}
                    >
                      ({task.label})
                    </span>
                  )}
                  <span
                    className="px-2 py-0.5 rounded-full text-[11px] font-medium"
                    style={{ background: 'var(--surface-3)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    [{task.marks} mark{task.marks !== 1 ? 's' : ''}]
                  </span>
                  {cmdTerm && (
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase"
                      style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
                    >
                      {cmdTerm}
                    </span>
                  )}
                </div>

                {/* Task body */}
                <div className="p-4 space-y-3">
                  {/* Per-task interactive artefact — shown above the answer box */}
                  {task.artefact && (
                    <div className="mb-1">
                      <QuestionImage
                        image_type="code_rendered"
                        render_component={task.artefact.component}
                        render_data={task.artefact.data}
                        alt={task.artefact.caption ?? `Interactive source for part (${task.label})`}
                      />
                      {task.artefact.caption && (
                        <p className="mt-1.5 text-xs" style={{ color: 'var(--text-subtle)' }}>{task.artefact.caption}</p>
                      )}
                    </div>
                  )}

                  {/* Per-task figure images — shown above the answer box; suppressed when an artefact supersedes them */}
                  {task.figImages && task.figImages.length > 0 && !task.artefact && (
                    <div className="space-y-2 mb-1">
                      {task.figImages.map((src, i) => (
                        <div key={i} className="figure-surface p-1 mx-auto block">
                          <QuestionImage
                            image_type="original"
                            src={src}
                            alt={`Figure for part (${task.label})`}
                            className="rounded-control mx-auto block"
                            style={{ maxWidth: '100%', maxHeight: '420px', objectFit: 'contain' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reading passage — shown as styled card above question text */}
                  {task.passage && (
                    <div
                      className="rounded-panel p-4 space-y-2 text-[13px] leading-relaxed"
                      style={{ border: '1px solid var(--info-border)', background: 'var(--info-surface)', color: 'var(--text-muted)' }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--info)' }}>Read the following</p>
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
                  ) : task.widget === 'table_input' ? (
                    <TableInputWidget
                      headers={task.widgetItems ?? []}
                      rows={task.widgetOptions ?? []}
                      savedAnswer={task.ans ?? ''}
                      onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)}
                    />
                  ) : (
                    <div className="space-y-1">
                      <RichTextEditor
                        value={task.ans ?? ''}
                        onChange={(val) => setTaskAnswer(qIdx, taskIdx, val)}
                        rows={4}
                      />
                      <div className="flex justify-end">
                        <span className="text-[10px] font-mono" style={{ color: 'var(--text-subtle)' }}>
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
      </div>
    </div>
  )
}
