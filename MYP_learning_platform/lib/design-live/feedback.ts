// Student feedback on each part (stage) of a live activity: a 1-5 star rating plus two short comments.
// Stored on the player's own row at data._feedback[stageKey] — the underscore keeps it clear of stage keys,
// so grading, scoring and the worksheet review never see it.
import type { LivePlayerRow } from './types'

export interface StageFeedbackValue {
  stars: number // 1-5
  liked?: string // what worked well / comments
  improve?: string // what could be improved
  at: string // ISO timestamp
}

export const feedbackOf = (player: Pick<LivePlayerRow, 'data'>, stageKey: string): StageFeedbackValue | undefined => {
  const v = player.data?._feedback?.[stageKey]
  return v && typeof v.stars === 'number' ? (v as StageFeedbackValue) : undefined
}

export interface FeedbackSummaryData {
  count: number
  average: number // 0 when no ratings
  distribution: number[] // index 0 = 1 star ... index 4 = 5 stars
  comments: { name: string; stars: number; liked?: string; improve?: string }[]
  /** EVERY student, rated ones first (highest stars first), then names not yet rated. */
  students: { id: string; name: string; stars?: number; liked?: string; improve?: string }[]
}

export function summariseFeedback(players: LivePlayerRow[], stageKey: string): FeedbackSummaryData {
  const distribution = [0, 0, 0, 0, 0]
  const comments: FeedbackSummaryData['comments'] = []
  const students: FeedbackSummaryData['students'] = []
  let total = 0
  let count = 0
  for (const p of players) {
    const f = feedbackOf(p, stageKey)
    if (!f || f.stars < 1 || f.stars > 5) {
      students.push({ id: p.id, name: p.name })
      continue
    }
    students.push({ id: p.id, name: p.name, stars: f.stars, liked: f.liked?.trim(), improve: f.improve?.trim() })
    count += 1
    total += f.stars
    distribution[f.stars - 1] += 1
    if (f.liked?.trim() || f.improve?.trim()) comments.push({ name: p.name, stars: f.stars, liked: f.liked?.trim(), improve: f.improve?.trim() })
  }
  students.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0) || a.name.localeCompare(b.name))
  return { count, average: count ? Math.round((total / count) * 10) / 10 : 0, distribution, comments, students }
}
