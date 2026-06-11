import { NextRequest, NextResponse } from 'next/server'
import {
  gradeQuestion,
  toMYPGrade,
  calculateCriterionScores,
} from '@/lib/marking-engine'
import { getMSForPaper } from '@/data/markschemes/registry'
import { calculateXP, checkBadges } from '@/lib/gamification'
import { aiGradeTask, isOpenEndedTask, type AIProvider } from '@/lib/ai-grading'
import type { Question, QuestionGradeResult, TaskResult } from '@/lib/types'

interface GradeRequestBody {
  questions: Question[]
  paperId: string
  timeRemaining?: number
}

export async function POST(req: NextRequest) {
  try {
    const body  = (await req.json()) as GradeRequestBody
    const { questions, timeRemaining = 0 } = body
    const paperId = body.paperId || 'physics-nov-2023'

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json(
        { error: 'questions array is required and must not be empty' },
        { status: 400 }
      )
    }

    // ── BYOAI headers ────────────────────────────────────────────────────
    const aiProvider = req.headers.get('x-ai-provider') as AIProvider | null
    const aiKey      = req.headers.get('x-ai-key')
    const aiModel    = req.headers.get('x-ai-model') ?? undefined
    const useAI      = !!(aiProvider && aiKey && ['claude', 'openai', 'gemini'].includes(aiProvider))

    // ── Grade each question ───────────────────────────────────────────────
    const grades: Record<number, QuestionGradeResult> = {}

    for (const q of questions) {
      // Per-question paper ID — supports practice sets assembled from multiple papers
      const qPaperId = q.sourcePaperId ?? paperId

      // MCQ — always keyword engine
      if (q.type === 'mcq') {
        grades[q.id] = gradeQuestion(q, qPaperId)
        continue
      }

      // Extended / simulation / dataTable — hybrid per task
      const keywordResult = gradeQuestion(q, qPaperId)

      if (!useAI) {
        grades[q.id] = keywordResult
        continue
      }

      // Try AI for open-ended tasks
      const qMs = getMSForPaper(qPaperId)
      const upgradedTasks: TaskResult[] = []
      for (const taskResult of keywordResult.tasks) {
        const task = q.tasks?.find((t) => t.label === taskResult.label)
        if (!task || !isOpenEndedTask(task.widget)) {
          upgradedTasks.push(taskResult)
          continue
        }

        // Look up MS entry
        const msKey = `q${q.id}_${task.label.replace(/\s+/g, '_')}`
        const msEntry = qMs[msKey] as { marks: number; exemplar: string; keyConcepts: string[]; keywords: string[]; feedbackHit: string; feedbackMiss: string } | undefined

        if (!msEntry || !('keyConcepts' in msEntry)) {
          upgradedTasks.push(taskResult)
          continue
        }

        try {
          const aiResult = await aiGradeTask({
            taskText: task.text,
            markScheme: msEntry,
            studentAnswer: task.ans ?? '',
            provider: aiProvider!,
            apiKey: aiKey!,
            model: aiModel,
          })

          upgradedTasks.push({
            ...taskResult,
            marksAwarded: Math.min(aiResult.marksAwarded, msEntry.marks),
            hitConcepts: aiResult.hitConcepts,
            missConcepts: msEntry.keyConcepts.filter((c) => !aiResult.hitConcepts.includes(c)),
            feedback: aiResult.feedback,
            rawScore: aiResult.marksAwarded / msEntry.marks,
          })
        } catch (err) {
          console.warn(`[grade] AI grading failed for ${msKey}:`, err)
          upgradedTasks.push(taskResult) // fallback to keyword
        }
      }

      grades[q.id] = {
        ...keywordResult,
        tasks: upgradedTasks,
        totalAwarded: upgradedTasks.reduce((s, t) => s + t.marksAwarded, 0),
      }
    }

    // ── Aggregate ─────────────────────────────────────────────────────────
    const totalScore     = Object.values(grades).reduce((s, g) => s + g.totalAwarded, 0)
    const maxScore       = Object.values(grades).reduce((s, g) => s + g.totalAvailable, 0)
    const criterionScores = calculateCriterionScores(questions, grades)
    const pct            = maxScore > 0 ? (totalScore / maxScore) * 100 : 0
    const { grade: mypGrade, label: mypLabel } = toMYPGrade(pct)
    const xpEarned       = calculateXP(grades, timeRemaining, 0)
    const badgesEarned   = checkBadges(grades, criterionScores, timeRemaining, 0, true, [])

    return NextResponse.json({
      grades,
      criterionScores,
      totalScore,
      maxScore,
      mypGrade,
      mypLabel,
      xpEarned,
      badgesEarned,
      gradedByAI: useAI,
    })
  } catch (err) {
    console.error('[grade] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
