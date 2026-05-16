import { NextRequest, NextResponse } from 'next/server'
import {
  gradeQuestion,
  toMYPGrade,
  calculateCriterionScores,
} from '@/lib/marking-engine'
import { calculateXP, checkBadges } from '@/lib/gamification'
import type { Question, QuestionGradeResult } from '@/lib/types'

interface GradeRequestBody {
  questions: Question[]
  paperId: string
  timeRemaining?: number
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as GradeRequestBody
    const { questions, timeRemaining = 0 } = body

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json(
        { error: 'questions array is required and must not be empty' },
        { status: 400 }
      )
    }

    // Grade each question
    const grades: Record<number, QuestionGradeResult> = {}
    for (const q of questions) {
      grades[q.id] = gradeQuestion(q)
    }

    // Aggregate scores
    const totalScore = Object.values(grades).reduce((s, g) => s + g.totalAwarded, 0)
    const maxScore = Object.values(grades).reduce((s, g) => s + g.totalAvailable, 0)

    // Criterion breakdown
    const criterionScores = calculateCriterionScores(questions, grades)

    // MYP grade
    const pct = maxScore > 0 ? (totalScore / maxScore) * 100 : 0
    const { grade: mypGrade, label: mypLabel } = toMYPGrade(pct)

    // XP and badges (simplified: no hints used, treat as first attempt)
    const hintsUsed = 0
    const isFirstAttempt = true
    const xpEarned = calculateXP(grades, timeRemaining, hintsUsed)
    const badgesEarned = checkBadges(
      grades,
      criterionScores,
      timeRemaining,
      hintsUsed,
      isFirstAttempt,
      []
    )

    return NextResponse.json({
      grades,
      criterionScores,
      totalScore,
      maxScore,
      mypGrade,
      mypLabel,
      xpEarned,
      badgesEarned,
    })
  } catch (err) {
    console.error('[grade] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
