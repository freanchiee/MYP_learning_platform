// How far through an activity a student is: per stage (for the stage rail's mini bars), per criterion (for the
// radial dial) and overall. Pure functions over the student's saved data, shared by every student-facing view.

import type { LiveActivityDefinition, LiveStage } from '@/data/design/live/types'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import { CRITERION_LETTERS } from '@/lib/design-live/criteria'

type Json = Record<string, any>
const avg = (ns: number[]) => (ns.length ? Math.round(ns.reduce((a, b) => a + b, 0) / ns.length) : 0)

/** 0-100: how complete one stage is. `passed` = the student has moved on beyond it (for stages with no "done" signal of their own). */
export function stageProgress(stage: LiveStage, data: Json | null | undefined, opts: { passed?: boolean; graded?: boolean } = {}): number {
  const d = data?.[stage.key]
  switch (stage.type) {
    case 'worksheet':
      return avg(stage.sections.map((s) => worksheetSectionPct(s, d?.[s.key] || {})))
    case 'mcq':
      return stage.questions.length ? Math.round((Object.keys(d?.answers ?? {}).length / stage.questions.length) * 100) : 0
    case 'openIdeas': {
      const done = stage.prompts.filter((_, i) => typeof d?.[i]?.text === 'string' && d[i].text.trim()).length
      return stage.prompts.length ? Math.round((done / stage.prompts.length) * 100) : 0
    }
    case 'learn':
      return d?.done ? 100 : stage.pages.length ? Math.min(100, Math.round((((d?.maxPage ?? -1) + 1) / stage.pages.length) * 100)) : 0
    case 'grading':
      return opts.graded ? 100 : 0
    default:
      return opts.passed ? 100 : 0 // board game and anything else: no signal of its own
  }
}

/** The criterion letter a stage belongs to (A-D), from its sections' strands or its own strand; undefined if none. */
export function stageCriterion(stage: LiveStage): string | undefined {
  const strand = stage.type === 'learn' ? stage.strand : stage.type === 'worksheet' ? stage.sections.find((s) => /^[A-D]\./.test(s.criterion ?? ''))?.criterion : undefined
  return strand && /^[A-D]\./.test(strand) ? strand[0] : undefined
}

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi']
const strandRank = (k: string) => k.charCodeAt(0) * 10 + Math.max(0, ROMAN.indexOf(k.split('.')[1]))

/** Strand codes a stage covers, e.g. ['A.i', 'A.ii'], in order (A.i before A.ii, A before B). */
export function stageStrands(stage: LiveStage): string[] {
  if (stage.type === 'learn') return stage.strand && /^[A-D]\./.test(stage.strand) ? [stage.strand] : []
  if (stage.type !== 'worksheet') return []
  return Array.from(new Set(stage.sections.map((s) => s.criterion).filter((c): c is string => !!c && /^[A-D]\./.test(c)))).sort((a, b) => strandRank(a) - strandRank(b))
}

/** Completion per criterion across the whole activity (only criteria that have worksheet sections). */
export function criteriaProgress(activity: LiveActivityDefinition, data: Json | null | undefined): { present: string[]; progress: Record<string, number> } {
  const acc: Record<string, number[]> = {}
  for (const st of activity.stages) {
    if (st.type !== 'worksheet') continue
    for (const sec of st.sections) {
      const l = sec.criterion?.[0]
      if (!l || !/^[A-D]\./.test(sec.criterion ?? '')) continue
      ;(acc[l] ||= []).push(worksheetSectionPct(sec, data?.[st.key]?.[sec.key] || {}))
    }
  }
  return { present: CRITERION_LETTERS.filter((l) => acc[l]?.length) as string[], progress: Object.fromEntries(Object.entries(acc).map(([l, v]) => [l, avg(v)])) }
}

/** Overall completion: every stage a student works through counts equally (the teacher-only grading stage does not). */
export function overallProgress(activity: LiveActivityDefinition, data: Json | null | undefined, maxIdx: number): number {
  const stages = activity.stages.map((s, i) => ({ s, i })).filter((x) => x.s.type !== 'grading')
  return avg(stages.map(({ s, i }) => stageProgress(s, data, { passed: i < maxIdx })))
}
