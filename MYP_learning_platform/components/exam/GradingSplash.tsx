'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const questions    = useExamStore((s) => s.questions)
  const paperId      = useExamStore((s) => s.paperId)
  const timerSeconds = useExamStore((s) => s.timerSeconds)

  const [progress, setProgress] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)
  const fetchResultRef  = useRef<GradeResults | null>(null)
  const animDoneRef     = useRef(false)
  const fetchDoneRef    = useRef(false)
  const calledComplete  = useRef(false)

  const tryComplete = () => {
    if (animDoneRef.current && fetchDoneRef.current && !calledComplete.current) {
      calledComplete.current = true
      if (fetchResultRef.current) onComplete(fetchResultRef.current)
    }
  }

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

  useEffect(() => {
    fetch('/api/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questions, paperId, timeRemaining: timerSeconds }),
    })
      .then((r) => { if (!r.ok) throw new Error(`Grade API error: ${r.status}`); return r.json() as Promise<GradeResults> })
      .then((data) => { fetchResultRef.current = data; fetchDoneRef.current = true; tryComplete() })
      .catch(() => {
        fetchResultRef.current = {
          grades: {}, criterionScores: {},
          totalScore: 0, maxScore: questions.reduce((s, q) => s + q.marks, 0),
          mypGrade: 1, mypLabel: 'Minimal', xpEarned: 0, badgesEarned: [],
        }
        fetchDoneRef.current = true
        tryComplete()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #274e68 0%, #1f3674 55%, #0e1f45 100%)' }}
    >
      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="scan-line" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(173,241,196,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pulsing brain icon */}
        <motion.div
          className="text-6xl mb-6 select-none"
          animate={{ scale: [1, 1.1, 1], filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          🧠
        </motion.div>

        {/* Title */}
        <h1 className="text-white text-2xl font-extrabold mb-1 tracking-wide">AI Marking Engine</h1>
        <p className="text-sm mb-8" style={{ color: 'rgba(173,241,196,0.7)' }}>
          Analysing responses with concept matching…
        </p>

        {/* Progress bar */}
        <div
          className="w-80 h-2.5 rounded-full mb-3 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #1f3674, #547ca4, #adf1c4)',
            }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>

        {/* Percentage */}
        <div className="font-mono text-sm mb-5" style={{ color: '#adf1c4' }}>
          {Math.round(progress)}%
        </div>

        {/* Status message — animated swap */}
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIdx}
            className="text-sm"
            style={{ color: 'rgba(255,255,255,0.65)' }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {STATUS_MESSAGES[msgIdx]}
          </motion.p>
        </AnimatePresence>

        {/* Question dots */}
        <div className="flex gap-1.5 mt-8">
          {questions.map((_, i) => {
            const filled = i < Math.round((progress / 100) * questions.length)
            return (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                animate={{ background: filled ? '#adf1c4' : 'rgba(255,255,255,0.15)' }}
                transition={{ duration: 0.3 }}
              />
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
