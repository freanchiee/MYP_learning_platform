// Turns one student's saved answers (live_players.data) into a plain,
// serializable "work document": everything the student wrote, grouped by
// design-cycle criterion and strand, with the task context kept apart from the
// student's own words. Pure data in, pure data out — safe to call in a Server
// Component and pass to a client component as props. The PDF itself is laid out
// from this in lib/design-live/workPdf.ts.

import { feedbackFor, type SectionFeedbackMap } from '@/lib/design-live/sectionFeedback'
import type { LiveActivityDefinition, WorksheetField, WorksheetSection, WorksheetStage, McqStage, GradingStage, ActivityBrief } from '@/data/design/live/types'
import { CRITERIA, STRAND_LABELS, criterionOf } from '@/lib/design-live/criteria'
import { exemplarsFor } from '@/lib/design-live/exemplars'
import { feedbackOf } from '@/lib/design-live/feedback'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import { getPersona } from '@/data/design/live/personas'
import { getProduct } from '@/data/design/live/digital-products'
import { getMake } from '@/data/design/live/makes'
import { getOpportunity } from '@/data/design/live/opportunities'
import { getPersonality } from '@/data/design/live/personalities'

// ---------------------------------------------------------------- field text
export function fieldAnswerText(field: WorksheetField, value: unknown): string {
  if (value == null || value === '') return ''
  if (field.type === 'table' && Array.isArray(value)) {
    return (value as Record<string, string>[])
      .map((row) => (field.columns || []).map((c) => row[c.key]).filter(Boolean).join(' — '))
      .filter(Boolean)
      .join(' · ')
  }
  if (field.type === 'checklist' && Array.isArray(value)) {
    return (value as { label: string; have: boolean }[])
      .filter((it) => it.label?.trim())
      .map((it) => `${it.have ? '✅' : '◻️'} ${it.label}`)
      .join(' · ')
  }
  if (field.type === 'text' || field.type === 'textarea' || field.type === 'select') return String(value)
  return '' // interactive types (personaChat, cards, etc.) have no plain-text form
}

// ---------------------------------------------------------------- model
export type WorkItem =
  | { kind: 'text'; label: string; prompt?: string; answer: string; exemplars: string[] }
  | { kind: 'rows'; label: string; prompt?: string; rows: { title: string; cells: { label: string; value: string }[] }[]; exemplars: string[] }
  | { kind: 'list'; label: string; prompt?: string; items: { text: string; checked: boolean }[] }
  | { kind: 'chat'; label: string; who: string; messages: { from: 'student' | 'character'; text: string }[] }
  | { kind: 'choice'; label: string; choice: string; custom?: string; context?: string }
  | { kind: 'images'; label: string; prompt?: string; images: { url: string; name: string }[] }

export interface WorkSection {
  title: string
  blurb?: string
  /** "What good looks like" bullets the student was shown — task context, not student work. */
  guidance: string[]
  pct: number
  items: WorkItem[]
  /** The teacher's written feedback on this section, if any. Not student work. */
  teacherFeedback?: { text: string; at: string }
}

export interface WorkStrand {
  key: string // 'A.ii'
  label: string // what the strand asks
  pct: number
  status: 'complete' | 'partial' | 'none'
  sections: WorkSection[]
}

export interface WorkCriterion {
  letter: string // 'A'..'D', or '' for non-criterion items such as Reflection
  name: string
  color: string
  pct: number
  strands: WorkStrand[]
}

export interface WorkQuiz {
  title: string
  answered: number
  total: number
  correct: number
  items: { q: string; chosen: string; correctAnswer: string; ok: boolean }[]
}

export interface WorkDoc {
  student: string
  className: string
  activityTitle: string
  activitySubtitle: string
  date: string
  accent: string
  brief?: { context: string; task: string; produce: string[] }
  completionPct: number
  wordCount: number
  criteria: WorkCriterion[]
  quizzes: WorkQuiz[]
  stageFeedback: { stage: string; stars: number; liked?: string; improve?: string }[]
  grade?: { strands: { key: string; label: string; score: number }[]; feedback: string }
  /** Set on a PDF that covers only part of the work, e.g. 'Criterion A · Checkpoint 1 of 2'. */
  scopeLabel?: string
}

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi']
const strandOrder = (k: string) => {
  const m = k.match(/^([A-D])\.(\w+)$/)
  return m ? m[1].charCodeAt(0) * 10 + Math.max(0, ROMAN.indexOf(m[2])) : 9999
}
const words = (t: string) => (t.trim() ? t.trim().split(/\s+/).length : 0)
const str = (v: unknown) => (typeof v === 'string' ? v.trim() : v == null ? '' : String(v).trim())

function fieldItem(field: WorksheetField, value: unknown, exemplars: string[]): WorkItem {
  const prompt = field.hint
  if (field.type === 'table') {
    const cols = field.columns || []
    const rows = (Array.isArray(value) ? (value as Record<string, string>[]) : [])
      .map((r, i) => ({ title: `Row ${i + 1}`, cells: cols.map((c) => ({ label: c.label, value: str(r?.[c.key]) })).filter((c) => c.value) }))
      .filter((r) => r.cells.length)
    return { kind: 'rows', label: field.label, prompt, rows, exemplars: [] }
  }
  if (field.type === 'checklist') {
    const items = (Array.isArray(value) ? (value as { label: string; have: boolean }[]) : []).filter((i) => i?.label?.trim()).map((i) => ({ text: i.label.trim(), checked: !!i.have }))
    return { kind: 'list', label: field.label, prompt, items }
  }
  if (field.type === 'image') {
    const images = (Array.isArray(value) ? (value as { url: string; name: string }[]) : []).filter((i) => i?.url).map((i) => ({ url: i.url, name: i.name || 'image' }))
    return { kind: 'images', label: field.label, prompt, images }
  }
  if (field.type === 'personaChat') {
    const v = value as { characterId?: string; messages?: { from: 'student' | 'character'; text: string }[] } | undefined
    const p = v?.characterId ? getPersona(v.characterId) : undefined
    const who = p ? `${p.name}${p.represents ? `, ${p.represents}` : ''}` : v?.characterId || ''
    return { kind: 'chat', label: field.label, who, messages: (v?.messages || []).filter((m) => m?.text).map((m) => ({ from: m.from, text: m.text })) }
  }
  if (field.type === 'productCards' || field.type === 'makeCards' || field.type === 'opportunityCards' || field.type === 'personalityPrompt') {
    const v = (value || {}) as Record<string, string>
    const id = v.productId || v.makeId || v.opportunityId || v.personalityId || ''
    const custom = str(v.custom) || undefined
    let choice = ''
    let context: string | undefined
    if (id) {
      if (field.type === 'productCards') { const p = getProduct(id); choice = p?.name ?? 'Own idea (wild card)'; context = p ? `${p.what} ${p.who}` : undefined }
      else if (field.type === 'makeCards') { const m = getMake(id); choice = m?.name ?? 'Own idea (wild card)'; context = m?.what }
      else if (field.type === 'opportunityCards') { const o = getOpportunity(id); choice = o?.hmw ?? id }
      else { const pe = getPersonality(id); choice = pe?.name ?? id; context = pe?.tagline }
    }
    return { kind: 'choice', label: field.label, choice, custom, context }
  }
  return { kind: 'text', label: field.label, prompt, answer: str(value), exemplars }
}

function itemWords(it: WorkItem): number {
  switch (it.kind) {
    case 'text': return words(it.answer)
    case 'rows': return it.rows.reduce((n, r) => n + words(r.title) + r.cells.reduce((m, c) => m + words(c.value), 0), 0)
    case 'list': return it.items.reduce((n, i) => n + words(i.text), 0)
    case 'chat': return it.messages.filter((m) => m.from === 'student').reduce((n, m) => n + words(m.text), 0)
    case 'choice': return words(it.custom || '')
    default: return 0
  }
}

/** Everything one student did in one activity, ready to lay out. */
export function buildWorkDoc(
  activity: LiveActivityDefinition,
  data: Record<string, any> | null | undefined,
  meta: { student: string; className: string; date: string; grade?: { scores: Record<string, number | null>; feedback?: string; graded: boolean } | null; sectionFeedback?: SectionFeedbackMap | null }
): WorkDoc {
  const worksheets = activity.stages.filter((s): s is WorksheetStage => s.type === 'worksheet')
  const byStrand = new Map<string, { sections: WorkSection[] }>()
  let wordCount = 0

  for (const stage of worksheets) {
    for (const section of stage.sections as WorksheetSection[]) {
      const sd = data?.[stage.key]?.[section.key] || {}
      const items = section.fields.filter((f) => f.type !== 'gameEvidence' && f.type !== 'leadCapture').map((f) => {
        const ex = f.type === 'text' || f.type === 'textarea' ? exemplarsFor(activity.exemplarsByChoice as any, stage.key, section.key, f, data).texts.slice(0, 1) : []
        return fieldItem(f, sd[f.key], ex)
      })
      wordCount += items.reduce((n, it) => n + itemWords(it), 0)
      const key = section.criterion || 'Other'
      const entry = byStrand.get(key) ?? { sections: [] }
      entry.sections.push({
        title: section.label,
        blurb: section.blurb,
        guidance: section.brief ? [section.brief.title, ...section.brief.points] : [],
        pct: Math.round(worksheetSectionPct(section, sd)),
        items,
        teacherFeedback: feedbackFor(meta.sectionFeedback, stage.key, section.key),
      })
      byStrand.set(key, entry)
    }
  }

  const strands: (WorkStrand & { letter: string })[] = Array.from(byStrand.entries()).map(([key, v]) => {
    const pct = v.sections.length ? Math.round(v.sections.reduce((n, s) => n + s.pct, 0) / v.sections.length) : 0
    const sectionLabel = worksheets.flatMap((s) => s.sections).find((s) => s.criterion === key && s.strandLabel)?.strandLabel
    return { key, letter: criterionOf(key).letter, label: sectionLabel || STRAND_LABELS[key] || key, pct, status: pct >= 60 ? 'complete' : pct > 0 ? 'partial' : 'none', sections: v.sections }
  })
  strands.sort((a, b) => strandOrder(a.key) - strandOrder(b.key))

  const letters = ['A', 'B', 'C', 'D', '']
  const criteria: WorkCriterion[] = letters
    .map((letter) => {
      const ss = strands.filter((s) => s.letter === letter)
      const c = letter ? CRITERIA[letter] : { name: 'Reflection and other work', color: '#6B7280' }
      return { letter, name: c.name, color: c.color, pct: ss.length ? Math.round(ss.reduce((n, s) => n + s.pct, 0) / ss.length) : 0, strands: ss.map(({ letter: _l, ...rest }) => rest) }
    })
    .filter((c) => c.strands.length)

  const allSections = strands.flatMap((s) => s.sections)
  const completionPct = allSections.length ? Math.round(allSections.reduce((n, s) => n + s.pct, 0) / allSections.length) : 0

  const quizzes: WorkQuiz[] = activity.stages
    .filter((s): s is McqStage => s.type === 'mcq')
    .map((stage) => {
      const answers: Record<number, { choiceIdx: number; correct: boolean }> = data?.[stage.key]?.answers || {}
      const items = stage.questions
        .map((q, i) => ({ q: q.q, a: answers[i], correctAnswer: q.options[q.correct], chosen: answers[i] != null ? q.options[answers[i].choiceIdx] : '' }))
        .filter((x) => x.a != null)
        .map((x) => ({ q: x.q, chosen: x.chosen, correctAnswer: x.correctAnswer, ok: !!x.a.correct }))
      return { title: stage.label, answered: items.length, total: stage.questions.length, correct: items.filter((i) => i.ok).length, items }
    })

  const stageFeedback = activity.stages
    .map((s) => ({ s, f: feedbackOf({ data: data || {} }, s.key) }))
    .filter((x) => x.f)
    .map(({ s, f }) => ({ stage: s.label, stars: f!.stars, liked: f!.liked, improve: f!.improve }))

  const gradingStage = activity.stages.find((s): s is GradingStage => s.type === 'grading')
  const labels = new Map((gradingStage?.strands ?? []).map((s) => [s.key, s.label]))
  const grade = meta.grade?.graded
    ? {
        strands: Object.entries(meta.grade.scores)
          .filter((e): e is [string, number] => typeof e[1] === 'number' && !e[0].startsWith('ws:') && !e[0].startsWith('reveal:'))
          .map(([key, score]) => ({ key, label: (labels.get(key) || STRAND_LABELS[key] || key).replace(new RegExp(`^${key.replace('.', '\\.')}\\s*`), ''), score }))
          .sort((a, b) => strandOrder(a.key) - strandOrder(b.key)),
        feedback: meta.grade.feedback || '',
      }
    : undefined

  const brief: ActivityBrief | undefined = activity.stages.map((s) => ('overview' in s ? s.overview?.brief : undefined)).find(Boolean)

  return {
    student: meta.student,
    className: meta.className,
    activityTitle: activity.title,
    activitySubtitle: activity.subtitle,
    date: meta.date,
    accent: activity.theme.accent,
    brief: brief ? { context: brief.context, task: brief.task, produce: brief.produce } : undefined,
    completionPct,
    wordCount,
    criteria,
    quizzes,
    stageFeedback,
    grade,
  }
}

// ---------------------------------------------------------------- criterion checkpoints
// A student's work can be downloaded as: everything, one PDF per criterion, or each criterion split into two
// CHECKPOINTS (so a long criterion can be handed in or marked in two sittings). The split falls on a strand
// boundary (A.i-A.ii | A.iii-A.iv); a criterion with a single strand is split by section instead; a criterion
// too small to split has just the one PDF. Which criteria exist depends on the activity.

export interface PdfScope { criterion: string; checkpoint?: 1 | 2 }
export interface PdfScopeOption { id: string; label: string; detail?: string; kind: 'all' | 'criterion' | 'checkpoint'; criterion?: string; scope?: PdfScope }

const statusOf = (pct: number): WorkStrand['status'] => (pct >= 60 ? 'complete' : pct > 0 ? 'partial' : 'none')
const avg = (ns: number[]) => (ns.length ? Math.round(ns.reduce((a, b) => a + b, 0) / ns.length) : 0)

/** The two halves of a criterion's strands: [checkpoint 1, checkpoint 2]. Checkpoint 2 is empty when it cannot be split. */
export function splitCheckpoints(c: WorkCriterion): [WorkStrand[], WorkStrand[]] {
  if (c.strands.length >= 2) {
    const mid = Math.ceil(c.strands.length / 2)
    return [c.strands.slice(0, mid), c.strands.slice(mid)]
  }
  const only = c.strands[0]
  if (!only || only.sections.length < 2) return [c.strands, []]
  const mid = Math.ceil(only.sections.length / 2)
  const part = (sections: WorkSection[]): WorkStrand => {
    const pct = avg(sections.map((x) => x.pct))
    return { ...only, sections, pct, status: statusOf(pct) }
  }
  return [[part(only.sections.slice(0, mid))], [part(only.sections.slice(mid))]]
}

const strandRange = (ss: WorkStrand[]) => (ss.length > 1 ? `${ss[0].key} to ${ss[ss.length - 1].key}` : ss[0]?.key ?? '')

/** The downloads on offer for a piece of work: only for the criteria it actually has. */
export function listPdfScopes(doc: WorkDoc): PdfScopeOption[] {
  const out: PdfScopeOption[] = []
  for (const c of doc.criteria) {
    if (!c.letter) continue
    const [one, two] = splitCheckpoints(c)
    if (two.length) {
      out.push({ id: `${c.letter}1`, kind: 'checkpoint', criterion: c.letter, label: `Criterion ${c.letter} · Checkpoint 1`, detail: strandRange(one), scope: { criterion: c.letter, checkpoint: 1 } })
      out.push({ id: `${c.letter}2`, kind: 'checkpoint', criterion: c.letter, label: `Criterion ${c.letter} · Checkpoint 2`, detail: strandRange(two), scope: { criterion: c.letter, checkpoint: 2 } })
    }
    out.push({ id: `${c.letter}`, kind: 'criterion', criterion: c.letter, label: two.length ? `Criterion ${c.letter} · all together` : `Criterion ${c.letter}`, detail: strandRange(c.strands), scope: { criterion: c.letter } })
  }
  out.push({ id: 'all', kind: 'all', label: doc.criteria.some((c) => c.letter) ? 'Everything' : 'My work', scope: undefined })
  return out
}

/** The same work document narrowed to one criterion, or one checkpoint of it. */
export function scopeDoc(doc: WorkDoc, scope?: PdfScope): WorkDoc {
  if (!scope) return doc
  const crit = doc.criteria.find((c) => c.letter === scope.criterion)
  if (!crit) return doc
  const [one, two] = splitCheckpoints(crit)
  const strands = scope.checkpoint === 1 ? one : scope.checkpoint === 2 ? two : crit.strands
  const pct = avg(strands.map((s) => s.pct))
  const kept = new Set(strands.map((s) => s.key))
  const sections = strands.flatMap((s) => s.sections)
  const label = scope.checkpoint ? `Criterion ${crit.letter} · Checkpoint ${scope.checkpoint} of 2` : `Criterion ${crit.letter}`
  return {
    ...doc,
    scopeLabel: label,
    criteria: [{ ...crit, strands, pct }],
    completionPct: avg(sections.map((x) => x.pct)),
    wordCount: sections.reduce((n, sec) => n + sec.items.reduce((m, it) => m + itemWords(it), 0), 0),
    quizzes: [],
    stageFeedback: [],
    grade: doc.grade ? { ...doc.grade, strands: doc.grade.strands.filter((g) => kept.has(g.key) || (scope.checkpoint ? false : g.key.startsWith(`${crit.letter}.`))) } : undefined,
  }
}
