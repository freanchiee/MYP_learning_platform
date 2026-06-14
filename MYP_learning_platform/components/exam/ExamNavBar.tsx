'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useExamStore } from '@/store/examStore'

const tint = (c: string, pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`

export default function ExamNavBar() {
  const questions   = useExamStore((s) => s.questions)
  const currentIdx  = useExamStore((s) => s.currentIdx)
  const nextQuestion = useExamStore((s) => s.nextQuestion)
  const prevQuestion = useExamStore((s) => s.prevQuestion)
  const toggleFlag  = useExamStore((s) => s.toggleFlag)
  const startGrading = useExamStore((s) => s.startGrading)
  const hintsUsed   = useExamStore((s) => s.hintsUsed)

  const [showConfirm, setShowConfirm] = useState(false)

  const currentQ = questions[currentIdx]
  const isFlagged = currentQ?.flagged ?? false
  const isFirst = currentIdx === 0
  const isLast  = currentIdx === questions.length - 1

  const handleSubmit = () => { setShowConfirm(false); startGrading() }

  const answered = questions.filter((q) => {
    if (q.type === 'mcq') return q.ans !== null && q.ans !== undefined
    return q.tasks?.some((t) => (t.ans ?? '').trim().length > 0) ?? false
  }).length

  return (
    <>
      {/* Nav bar */}
      <div
        className="flex items-center justify-between flex-shrink-0 px-6 chrome-bar"
        style={{
          height: 54,
          background: 'var(--bar-bg)',
          color: 'var(--bar-fg)',
          borderTop: '1px solid var(--border)',
          gap: 10,
        }}
      >
        {/* Left: navigation + flag */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={prevQuestion}
            disabled={isFirst}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition disabled:opacity-35 disabled:cursor-not-allowed"
            style={{
              background: isFirst ? 'var(--surface-2)' : tint('var(--accent)', 10),
              color: isFirst ? 'var(--text-subtle)' : 'var(--accent)',
              border: '1px solid var(--border)',
            }}
          >
            ← Previous
          </motion.button>

          <motion.button
            onClick={nextQuestion}
            disabled={isLast}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition disabled:opacity-35 disabled:cursor-not-allowed"
            style={{
              background: isLast ? 'var(--surface-2)' : tint('var(--accent)', 10),
              color: isLast ? 'var(--text-subtle)' : 'var(--accent)',
              border: '1px solid var(--border)',
            }}
          >
            Next →
          </motion.button>

          <div className="w-px h-6 mx-1" style={{ background: 'var(--border)' }} />

          <motion.button
            onClick={() => currentQ && toggleFlag(currentQ.id)}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition"
            style={{
              background: isFlagged ? 'var(--danger-surface)' : 'var(--surface-2)',
              color:      isFlagged ? 'var(--danger)' : 'var(--text-muted)',
              border:     `1px solid ${isFlagged ? 'var(--danger)' : 'var(--border-strong)'}`,
            }}
            title={isFlagged ? 'Remove flag' : 'Flag for review'}
          >
            🚩 {isFlagged ? 'Flagged' : 'Flag for Review'}
          </motion.button>
        </div>

        {/* Centre: progress dots (hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-1.5">
          {questions.map((q, i) => {
            const isAns = q.type === 'mcq'
              ? q.ans !== null && q.ans !== undefined
              : q.tasks?.some((t) => (t.ans ?? '').trim().length > 0) ?? false
            const isCur = i === currentIdx
            return (
              <motion.div
                key={i}
                animate={{
                  width:      isCur ? 20 : 8,
                  backgroundColor: isCur ? 'var(--accent)' : isAns ? 'var(--accent-2)' : tint('var(--accent)', 22),
                }}
                transition={{ duration: 0.25 }}
                className="h-2 rounded-full cursor-pointer"
                onClick={() => useExamStore.getState().setCurrentIdx(i)}
              />
            )
          })}
        </div>

        {/* Right: position + submit */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
            Q{' '}
            <span className="font-extrabold" style={{ color: 'var(--accent)' }}>{currentIdx + 1}</span>
            {' '}of{' '}
            <span className="font-extrabold" style={{ color: 'var(--accent)' }}>{questions.length}</span>
          </span>

          <motion.button
            onClick={() => setShowConfirm(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-xl text-sm font-bold shadow"
            style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
          >
            Submit Exam
          </motion.button>
        </div>
      </div>

      {/* Confirm modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ background: 'var(--scrim)' }}
              onClick={() => setShowConfirm(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative rounded-card p-8 max-w-md w-full mx-4 z-10"
              style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-elevated)',
              }}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.28 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-card"
                style={{ background: 'var(--gradient-brand)' }}
              />

              <h2 className="text-xl font-extrabold mb-2" style={{ color: 'var(--text)' }}>
                Submit Examination?
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
                You are about to submit your exam for AI marking. This cannot be undone.
              </p>

              {/* Answer summary */}
              <div
                className="rounded-panel p-4 mb-6 flex gap-6 justify-center"
                style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}
              >
                {[
                  { label: 'Answered',   value: answered,                                   color: 'var(--accent)' },
                  { label: 'Unanswered', value: questions.length - answered,                color: 'var(--danger)' },
                  { label: 'Flagged',    value: questions.filter((q) => q.flagged).length,  color: 'var(--accent-2)' },
                  { label: 'Hints used', value: hintsUsed,                                  color: 'var(--warning)' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-extrabold" style={{ color }}>{value}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-2.5 rounded-control font-semibold transition"
                  style={{ background: 'var(--surface-2)', color: 'var(--text)', border: '1px solid var(--border)' }}
                >
                  Return to Exam
                </button>
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-2.5 rounded-control font-bold"
                  style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
                >
                  Submit Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
