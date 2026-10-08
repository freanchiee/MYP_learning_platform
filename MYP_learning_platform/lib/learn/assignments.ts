// Assigning DP Physics lessons to a class: dripped unlocking, lock state, and progress summaries.
// Pure functions (no React, no Supabase) so they can be tested in scripts/test-learn-physics.mjs.
import { MODULES, getLesson, getModule } from '../../data/learn/physics'
import type { Block, Lesson, Module } from '../../data/learn/physics'

export type AssignMode = 'async' | 'live'
export type AssignScope = 'lesson' | 'questions'

/** A lesson assignment as stored in class_assignments (kind = 'lesson'). `ref` is "<module-slug>/<lesson-slug>". */
export interface LessonAssignment {
  id: string
  ref: string
  title: string
  mode: AssignMode
  scope: AssignScope
  unlock_at: string | null
  position: number | null
  due_at: string | null
}

export const lessonKey = (moduleSlug: string, lessonSlug: string) => `${moduleSlug}/${lessonSlug}`

export function parseLessonKey(ref: string): { module: string; lesson: string } | null {
  const parts = ref.split('/')
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null
  return { module: parts[0], lesson: parts[1] }
}

/** Resolve a stored ref back to the real module and lesson (undefined if the lesson was renamed or removed). */
export function resolveLesson(ref: string): { module: Module; lesson: Lesson } | undefined {
  const p = parseLessonKey(ref)
  if (!p) return undefined
  const module = getModule(p.module)
  const lesson = module && getLesson(module, p.lesson)
  return module && lesson ? { module, lesson } : undefined
}

/** The page a student opens for an assignment. `questions` scope opens just the check questions. */
export const lessonHref = (ref: string, scope: AssignScope = 'lesson') =>
  `/dp-physics/${ref}${scope === 'questions' ? '?view=questions' : ''}`

export const allLessonKeys = () => MODULES.flatMap((m) => m.lessons.map((l) => lessonKey(m.slug, l.slug)))

export { buildDrip } from './unlock'
export type { DripOptions } from './unlock'
export { unlockState, lessonAccess, formatUnlock } from './unlock'
export type { UnlockState } from './unlock'

// ---------------------------------------------------------------- questions and progress
export interface CheckQuestion { id: string; q: string; options: string[]; answer: number; why: string }

export function lessonChecks(lesson: Lesson): CheckQuestion[] {
  return lesson.blocks
    .filter((b): b is Extract<Block, { t: 'check' }> => b.t === 'check')
    .map((b) => ({ id: b.id, q: b.q, options: b.options, answer: b.answer, why: b.why }))
}

export interface LessonStats {
  total: number // check questions in the lesson
  answered: number
  correct: number // picked the right option (the lesson counts as done when all are correct)
}

export function lessonStats(lesson: Lesson, checks: Record<string, number> | null | undefined): LessonStats {
  const qs = lessonChecks(lesson)
  const mine = checks ?? {}
  return {
    total: qs.length,
    answered: qs.filter((c) => mine[c.id] !== undefined).length,
    correct: qs.filter((c) => mine[c.id] === c.answer).length,
  }
}

export type ProgressLabel = { text: string; tone: 'done' | 'started' | 'none' }

/** A one-line summary for a dashboard cell. */
export function progressLabel(stats: LessonStats, done: boolean): ProgressLabel {
  if (done) return { text: stats.total ? `Done ✓ · ${stats.correct}/${stats.total}` : 'Done ✓', tone: 'done' }
  if (stats.answered === 0) return { text: '—', tone: 'none' }
  return { text: `${stats.correct}/${stats.total} correct · ${stats.answered} tried`, tone: 'started' }
}
