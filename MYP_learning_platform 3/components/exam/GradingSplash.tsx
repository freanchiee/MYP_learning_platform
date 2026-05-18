'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useExamStore } from '@/store/examStore'
import type { GradeResults } from '@/components/exam/ExamShell'

interface GradingSplashProps {
  onComplete: (results: GradeResults) => void
}

const STATUS_MESSAGES = [
  'Loading physics concept bank…',
  'Tokenising student responses…',
  'Matching key concepts…',
  'Applying fuzzy matching…',
  'Calculating criterion scores…',
  'Generating MYP grade…',
  'Building feedback…',
  'Finalising…',
]

const STEP_DURATION_MS = 350

export default function GradingSplash({ onComplete }: GradingSplashProps) {
  const questions = useExamStore((s) => s.questions)
  const paperId = useExamStore((s) => s.paperId)
  const timerSeconds = useExamStore((s) => s.timerSeconds)

  const [progress, setProgress] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)
  const fetchResultRef = useRef<GradeResults | null>(null)
  const animDoneRef = useRef(false)
  const fetchDoneRef = useRef(false)
  const calledComplete = useRef(false)

  const tryComplete = () => {
    if (animDoneRef.current && fetchDoneRef.current && !calledComplete.current) {
      calledComplete.current = true
      if (fetchResultRef.current) {
        onComplete(fetchResultRef.current)
      }
    }
  }

  // Animation: step through messages and fill progress bar
  useEffect(() => {
    const total = STATUS_MESSAGES.length
    let step = 0

    const interval = setInterval(() => {
      step++
      setProgress(Math.min((step / total) * 100, 100))
      setMsgIdx(Math.min(step, total - 1))

      if (step >= total) {
        clearInterval(interval)
        animDoneRef.current = true
        tryComplete()
      }
    }, STEP_DURATION_MS)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Fetch: POST to /api/grade
  useEffect(() => {
    const payload = {
      questions,
      paperId,
      timeRemaining: timerSeconds,
    }

    fetch('/api/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((r) => {
        if (!r.ok) throw new Error(`Grade API error: ${r.status}`)
        return r.json() as Promise<GradeResults>
      })
      .then((data) => {
        fetchResultRef.current = data
        fetchDoneRef.current = true
        tryComplete()
      })
      .catch(() => {
        // Fallback empty results so the exam doesn't hang
        fetchResultRef.current = {
          grades: {},
          criterionScores: {},
          totalScore: 0,
          maxScore: questions.reduce((s, q) => s + q.marks, 0),
          mypGrade: 1,
          mypLabel: 'Minimal',
          xpEarned: 0,
          badgesEarned: [],
        }
        fetchDoneRef.current = true
        tryComplete()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: '#001122' }}
    >
      {/* Brain animation */}
      <motion.div
        className="text-7xl mb-6 select-none"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        🧠
      </motion.div>

      {/* Title */}
      <h1 className="text-white text-2xl font-bold mb-2 tracking-wide">AI Marking Engine</h1>
      <p className="text-blue-300 text-sm mb-8 opacity-80">
        Analysing your responses with concept matching…
      </p>

      {/* Progress bar */}
      <div
        className="w-80 h-3 rounded-full mb-4 overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.1)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #0079a8, #3daa35)' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Percentage */}
      <div className="text-white font-mono text-sm mb-4">{Math.round(progress)}%</div>

      {/* Status messages */}
      <motion.p
        key={msgIdx}
        className="text-blue-200 text-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {STATUS_MESSAGES[msgIdx]}
      </motion.p>
    </div>
  )
}
