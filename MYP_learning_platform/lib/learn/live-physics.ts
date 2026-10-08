// Run a DP Physics lesson's questions as a live class: the lesson's own "predict" and "check" questions become
// host-paced multiple-choice stages of the existing Live Class engine. No new UI — the engine renders any
// LiveActivityDefinition — and nothing is stored: the definition is built from the lesson data on demand.
//
// Safe across the Server/Client boundary: the result contains plain data only (no functions).
import { getLesson, getModule } from '../../data/learn/physics'
import type { Block, Lesson, Mcq } from '../../data/learn/physics'
import type { LiveActivityDefinition, McqQuestion, McqStage } from '../../data/design/live/types'

const SEP = '--'
export const PHYSICS_LIVE_PREFIX = `dpp${SEP}`

export const physicsLiveId = (moduleSlug: string, lessonSlug: string) => `${PHYSICS_LIVE_PREFIX}${moduleSlug}${SEP}${lessonSlug}`

export function parsePhysicsLiveId(id: string): { module: string; lesson: string } | null {
  if (!id.startsWith(PHYSICS_LIVE_PREFIX)) return null
  const parts = id.slice(PHYSICS_LIVE_PREFIX.length).split(SEP)
  return parts.length === 2 && parts[0] && parts[1] ? { module: parts[0], lesson: parts[1] } : null
}

/** The lesson text uses a tiny maths markup (m_{A}, v^{2}); the live screens show plain text. */
export const plainMaths = (s: string) => s.replace(/_\{([^}]*)\}/g, '_$1').replace(/\^\{([^}]*)\}/g, '^$1')

const toQuestion = (m: Mcq, context?: string): McqQuestion => ({
  q: plainMaths(m.q),
  context,
  options: m.options.map(plainMaths),
  correct: m.answer,
})

/** Every "predict first" question attached to a simulation, in lesson order (inside slides or not). */
export function lessonPredictions(lesson: Lesson): McqQuestion[] {
  const out: McqQuestion[] = []
  const visit = (b: Block) => {
    if (b.t === 'widget' && b.predict) out.push(toQuestion(b.predict, b.title))
    else if (b.t === 'deck') b.slides.forEach((s) => s.blocks.forEach(visit))
  }
  lesson.blocks.forEach(visit)
  return out
}

export function lessonCheckQuestions(lesson: Lesson): McqQuestion[] {
  return lesson.blocks.filter((b): b is Extract<Block, { t: 'check' }> => b.t === 'check').map((b, i) => toQuestion(b, `Check ${i + 1}`))
}

const cache = new Map<string, LiveActivityDefinition | null>()

/** A live activity for a lesson, or undefined if the id is not a physics-lesson id or the lesson has no questions. */
export function physicsLiveActivity(id: string): LiveActivityDefinition | undefined {
  if (cache.has(id)) return cache.get(id) ?? undefined
  const p = parsePhysicsLiveId(id)
  const mod = p && getModule(p.module)
  const lesson = mod && p && getLesson(mod, p.lesson)
  if (!mod || !lesson) {
    cache.set(id, null)
    return undefined
  }
  const stages: McqStage[] = []
  const predictions = lessonPredictions(lesson)
  const checks = lessonCheckQuestions(lesson)
  if (predictions.length) {
    stages.push({
      type: 'mcq', key: 'predict', label: 'Predict first', icon: '🔮', pacing: 'host-paced',
      intro: { title: '🔮 Predict first', blurb: 'Before the simulation, commit to a prediction. Then we test it.' },
      questions: predictions,
      block: lesson.code,
    })
  }
  if (checks.length) {
    stages.push({
      type: 'mcq', key: 'checks', label: 'Check your understanding', icon: '✅', pacing: 'host-paced',
      intro: { title: '✅ Check your understanding', blurb: `Questions from ${lesson.code}: ${lesson.title}.` },
      questions: checks,
      block: lesson.code,
    })
  }
  if (stages.length === 0) {
    cache.set(id, null)
    return undefined
  }
  const def: LiveActivityDefinition = {
    id,
    year: 'DP',
    title: `${lesson.code} · ${lesson.title}`,
    subtitle: lesson.blurb,
    icon: '⚛️',
    theme: { accent: '#6c5dd6', from: '#1b1740', via: '#2a2268', to: '#3b2f8f' },
    stages,
  }
  cache.set(id, def)
  return def
}

/** True if this lesson has anything to run live. */
export const lessonHasLiveQuestions = (lesson: Lesson) => lessonPredictions(lesson).length + lessonCheckQuestions(lesson).length > 0
