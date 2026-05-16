'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useExamStore } from '@/store/examStore'
import type { Question, QuestionGradeResult } from '@/lib/types'
import LockScreen from '@/components/exam/LockScreen'
import ActiveExam from '@/components/exam/ActiveExam'
import GradingSplash from '@/components/exam/GradingSplash'
import FocusWarn from '@/components/exam/FocusWarn'

interface ExamShellProps {
  questions: Question[]
  paperId: string
}

export interface GradeResults {
  grades: Record<number, QuestionGradeResult>
  criterionScores: Record<string, { score: number; max: number }>
  totalScore: number
  maxScore: number
  mypGrade: number
  mypLabel: string
  xpEarned: number
  badgesEarned: string[]
}

export default function ExamShell({ questions, paperId }: ExamShellProps) {
  const router = useRouter()
  const initExam = useExamStore((s) => s.initExam)
  const phase = useExamStore((s) => s.phase)
  const setAttemptId = useExamStore((s) => s.setAttemptId)
  const attemptId = useExamStore((s) => s.attemptId)
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      initExam(questions, paperId)
    }
  }, [questions, paperId, initExam])

  useEffect(() => {
    if (phase === 'results' && attemptId) {
      router.push(`/results/${attemptId}`)
    }
  }, [phase, attemptId, router])

  const handleGradingComplete = async (results: GradeResults) => {
    try {
      const resp = await fetch('/api/exam/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ results, paperId }),
      })
      if (resp.ok) {
        const data = await resp.json() as { attemptId?: string }
        const id = data.attemptId ?? 'unknown'
        setAttemptId(id)
        router.push(`/results/${id}`)
      } else {
        const tempId = `local-${Date.now()}`
        setAttemptId(tempId)
        router.push(`/results/${tempId}`)
      }
    } catch {
      const tempId = `local-${Date.now()}`
      setAttemptId(tempId)
      router.push(`/results/${tempId}`)
    }
  }

  return (
    <>
      {phase === 'lock' && <LockScreen />}
      {phase === 'active' && <ActiveExam />}
      {phase === 'grading' && <GradingSplash onComplete={handleGradingComplete} />}
      <FocusWarn />
    </>
  )
}
