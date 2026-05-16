import type { QuestionGradeResult } from '@/lib/types'

// ---------------------------------------------------------------------------
// Badge definitions
// ---------------------------------------------------------------------------

export interface BadgeDef {
  id: string
  name: string
  icon: string
  description: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export const BADGES: BadgeDef[] = [
  {
    id: 'first-attempt',
    name: 'First Steps',
    icon: '🚀',
    description: 'Completed your first exam',
    rarity: 'common',
  },
  {
    id: 'hookes-hero',
    name: "Hooke's Hero",
    icon: '🧲',
    description: 'Full marks on the spring investigation',
    rarity: 'rare',
  },
  {
    id: 'circuit-master',
    name: 'Circuit Master',
    icon: '⚡',
    description: 'Perfect score on circuits questions',
    rarity: 'rare',
  },
  {
    id: 'nuclear-expert',
    name: 'Nuclear Expert',
    icon: '☢️',
    description: 'Full marks on radioactivity',
    rarity: 'epic',
  },
  {
    id: 'data-detective',
    name: 'Data Detective',
    icon: '📊',
    description: 'Completed both data processing tables',
    rarity: 'rare',
  },
  {
    id: 'no-hint-hero',
    name: 'No-Hint Hero',
    icon: '🎯',
    description: 'Finished without using any hints',
    rarity: 'epic',
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    icon: '⏱️',
    description: 'Submitted with more than 30 minutes remaining',
    rarity: 'rare',
  },
  {
    id: 'ethical-thinker',
    name: 'Ethical Thinker',
    icon: '🌍',
    description: 'Strong answer on nuclear/energy perspectives',
    rarity: 'rare',
  },
  {
    id: 'physics-ace',
    name: 'Physics Ace',
    icon: '🏆',
    description: 'Scored MYP Grade 7 overall',
    rarity: 'legendary',
  },
  {
    id: 'criterion-a-master',
    name: 'Criterion A Master',
    icon: '⭐',
    description: '90%+ on Criterion A',
    rarity: 'epic',
  },
]

// ---------------------------------------------------------------------------
// Star rating
// ---------------------------------------------------------------------------

/**
 * Convert awarded / max marks into a 0–3 star rating for a question.
 */
export function getStars(awarded: number, max: number): 0 | 1 | 2 | 3 {
  if (awarded === 0) return 0
  const pct = awarded / max
  if (pct >= 1) return 3
  if (pct >= 0.5) return 2
  return 1
}

// ---------------------------------------------------------------------------
// XP calculation
// ---------------------------------------------------------------------------

/**
 * Calculate total XP earned from an exam submission.
 *
 * @param grades         Map of questionId → QuestionGradeResult
 * @param timeRemaining  Seconds remaining on the timer when submitted
 * @param hintsUsed      Total number of hints the student revealed
 */
export function calculateXP(
  grades: Record<number, QuestionGradeResult>,
  timeRemaining: number,
  hintsUsed: number
): number {
  let xp = 0

  Object.values(grades).forEach(g => {
    // Base XP for attempting a question
    if (g.totalAwarded > 0) xp += 10

    // Bonus based on percentage score
    const pct = g.totalAvailable > 0 ? g.totalAwarded / g.totalAvailable : 0
    if (pct >= 1) xp += 20
    else if (pct >= 0.5) xp += 10

    // Per-mark XP
    xp += g.totalAwarded * 3
  })

  // Speed bonus: >30 minutes (1800 seconds) remaining
  if (timeRemaining > 1800) xp += 30

  // Hint penalty: 5 XP per hint used
  xp -= hintsUsed * 5

  return Math.max(0, xp)
}

// ---------------------------------------------------------------------------
// Badge checking
// ---------------------------------------------------------------------------

/**
 * Determine which new badges the student has earned from this submission.
 *
 * @param grades          Map of questionId → QuestionGradeResult
 * @param criterionScores Aggregated scores per criterion (A/B/C/D)
 * @param timeRemaining   Seconds remaining on the timer when submitted
 * @param hintsUsed       Total number of hints the student revealed
 * @param isFirstAttempt  Whether this is the student's first submission ever
 * @param existingBadges  Badge IDs already earned in previous sessions
 * @returns               Array of newly earned badge IDs (not including already-owned)
 */
export function checkBadges(
  grades: Record<number, QuestionGradeResult>,
  criterionScores: Record<string, { score: number; max: number }>,
  timeRemaining: number,
  hintsUsed: number,
  isFirstAttempt: boolean,
  existingBadges: string[]
): string[] {
  const earned: string[] = []

  const has = (id: string) => existingBadges.includes(id) || earned.includes(id)
  const tryEarn = (id: string, cond: boolean) => {
    if (cond && !has(id)) earned.push(id)
  }

  // First attempt
  tryEarn('first-attempt', isFirstAttempt)

  // Physics Ace: MYP Grade 7 (≥88% overall)
  const totalScore = Object.values(grades).reduce((s, g) => s + g.totalAwarded, 0)
  const totalMax = Object.values(grades).reduce((s, g) => s + g.totalAvailable, 0)
  tryEarn('physics-ace', totalMax > 0 && totalScore / totalMax >= 0.88)

  // Speed Demon: >30 minutes remaining
  tryEarn('speed-demon', timeRemaining > 1800)

  // No-Hint Hero: finished without any hints
  tryEarn('no-hint-hero', hintsUsed === 0)

  // Hooke's Hero: Q5 full marks (spring investigation)
  if (grades[5]) {
    tryEarn('hookes-hero', grades[5].totalAwarded >= grades[5].totalAvailable)
  }

  // Circuit Master: Q4 full marks (circuits)
  if (grades[4]) {
    tryEarn('circuit-master', grades[4].totalAwarded >= grades[4].totalAvailable)
  }

  // Nuclear Expert: Q14 full marks (radioactivity)
  if (grades[14]) {
    tryEarn('nuclear-expert', grades[14].totalAwarded >= grades[14].totalAvailable)
  }

  // Data Detective: Q7 and Q8 both completed (at least 1 mark each)
  if (grades[7] && grades[8]) {
    tryEarn(
      'data-detective',
      grades[7].totalAwarded > 0 && grades[8].totalAwarded > 0
    )
  }

  // Ethical Thinker: strong performance on Q10 or Q12 (≥75% of marks)
  const ethicQuestions = [grades[10], grades[12]].filter(Boolean)
  const ethicStrong = ethicQuestions.some(
    g => g && g.totalAvailable > 0 && g.totalAwarded / g.totalAvailable >= 0.75
  )
  tryEarn('ethical-thinker', ethicStrong)

  // Criterion A Master: ≥90% on Criterion A
  const cA = criterionScores['A']
  if (cA) {
    tryEarn('criterion-a-master', cA.max > 0 && cA.score / cA.max >= 0.9)
  }

  return earned
}
