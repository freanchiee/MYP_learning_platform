// The ONE place a live-class student's points are worked out.
//
// Points are never accumulated from numbers a browser sends (that let any student add as much as
// they liked). They are calculated here, on the server, from what the student has actually
// recorded plus the activity's own definition, so:
//   - the same answers always give the same total (recalculating is safe, never double-counts);
//   - the total can never exceed what the activity can award (see maxPoints);
//   - a quiz answer counts only if its recorded choice really is the correct option.
// This file is pure (no database, no DOM) so the server routes and the browser share it.

import type { LiveActivityDefinition, McqStage, OpenIdeasStage } from '@/data/design/live/types'

type Json = Record<string, any>

const answeredCorrectly = (stage: McqStage, idx: number, a: { choiceIdx?: number } | undefined) =>
  !!a && Number.isInteger(a.choiceIdx) && a.choiceIdx === stage.questions[idx]?.correct

/** Points a student has earned from quiz stages. Host-paced questions count only once the host has revealed them. */
function mcqPoints(activity: LiveActivityDefinition, stage: McqStage, data: Json | null | undefined, state: Json | null | undefined): number {
  const per = stage.pointsPerCorrect ?? 10
  const answers: Record<string, { choiceIdx?: number }> = data?.[stage.key]?.answers ?? {}
  const hostPaced = stage.pacing === 'host-paced' && !activity.selfPaced
  const st = state?.[stage.key] ?? {}
  let n = 0
  for (let i = 0; i < stage.questions.length; i++) {
    if (!answeredCorrectly(stage, i, answers[i])) continue
    if (hostPaced && !(i < (st.mcqIndex ?? 0) || (i === st.mcqIndex && st.revealed))) continue
    n++
  }
  return n * per
}

/** Idea prompts pay per prompt answered, and only in self-paced activities (host-paced ones score by team bonus). */
function ideaPoints(activity: LiveActivityDefinition, stage: OpenIdeasStage, data: Json | null | undefined): number {
  if (!activity.selfPaced) return 0
  const per = stage.pointsPerSubmission ?? 10
  const answers: Json = data?.[stage.key] ?? {}
  let n = 0
  for (let i = 0; i < stage.prompts.length; i++) if (typeof answers[i]?.text === 'string' && answers[i].text.trim()) n++
  return n * per
}

/** War Quiz points from the board game, read from the host-written session state (a student cannot edit it). */
function gamePoints(state: Json | null | undefined, playerId: string): number {
  const duels: { pts?: Record<string, number> }[] = state?.game?.duels ?? []
  return duels.reduce((n, d) => n + Math.max(0, Math.min(Number(d.pts?.[playerId]) || 0, 100)), 0)
}

export function computePoints(activity: LiveActivityDefinition, data: Json | null | undefined, state: Json | null | undefined, playerId: string): number {
  let total = 0
  for (const stage of activity.stages) {
    if (stage.type === 'mcq') total += mcqPoints(activity, stage, data, state)
    else if (stage.type === 'openIdeas') total += ideaPoints(activity, stage, data)
    else if (stage.type === 'boardGame') total += gamePoints(state, playerId)
  }
  return Math.min(total, maxPoints(activity))
}

/** The most an activity can ever award one student. The board game is capped generously because its points come from the host-run game. */
export function maxPoints(activity: LiveActivityDefinition): number {
  let max = 0
  for (const stage of activity.stages) {
    if (stage.type === 'mcq') max += stage.questions.length * (stage.pointsPerCorrect ?? 10)
    else if (stage.type === 'openIdeas' && activity.selfPaced) max += stage.prompts.length * (stage.pointsPerSubmission ?? 10)
    else if (stage.type === 'boardGame') max += 2000
  }
  return max
}

/** A small string that changes only when something that can change the points changes, so a browser knows when to ask the server to recalculate. */
export function pointsSignature(activity: LiveActivityDefinition, data: Json | null | undefined, state: Json | null | undefined, playerId: string): string {
  const parts: unknown[] = []
  for (const stage of activity.stages) {
    if (stage.type === 'mcq') parts.push(stage.key, Object.keys(data?.[stage.key]?.answers ?? {}).length, state?.[stage.key]?.mcqIndex ?? 0, !!state?.[stage.key]?.revealed)
    else if (stage.type === 'openIdeas') parts.push(stage.key, Object.keys(data?.[stage.key] ?? {}).length)
    else if (stage.type === 'boardGame') parts.push(stage.key, (state?.game?.duels ?? []).length)
  }
  return `${playerId}:${parts.join('|')}`
}
