'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useExamStore } from '@/store/examStore'

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
        className="flex items-center justify-between flex-shrink-0 px-6"
        style={{
          height: 54,
          background: '#fff',
          borderTop: '2px solid rgba(31,54,116,0.1)',
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
              background: isFirst ? '#f5f5f5' : 'rgba(31,54,116,0.08)',
              color: isFirst ? '#9ca3af' : '#1f3674',
              border: '1px solid rgba(31,54,116,0.15)',
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
              background: isLast ? '#f5f5f5' : 'rgba(31,54,116,0.08)',
              color: isLast ? '#9ca3af' : '#1f3674',
              border: '1px solid rgba(31,54,116,0.15)',
            }}
          >
            Next →
          </motion.button>

          <div className="w-px h-6 mx-1" style={{ background: 'rgba(31,54,116,0.15)' }} />

          <motion.button
            onClick={() => currentQ && toggleFlag(currentQ.id)}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition"
            style={{
              background: isFlagged ? 'rgba(195,40,45,0.08)' : '#f9fafb',
              color:      isFlagged ? '#c3282d' : '#6b7280',
              border:     `1px solid ${isFlagged ? 'rgba(195,40,45,0.3)' : '#d1d5db'}`,
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
                  background: isCur ? '#1f3674' : isAns ? '#547ca4' : 'rgba(31,54,116,0.2)',
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
          <span className="text-sm font-medium" style={{ color: '#547ca4' }}>
            Q{' '}
            <span className="font-extrabold" style={{ color: '#1f3674' }}>{currentIdx + 1}</span>
            {' '}of{' '}
            <span className="font-extrabold" style={{ color: '#1f3674' }}>{questions.length}</span>
          </span>

          <motion.button
            onClick={() => setShowConfirm(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-xl text-sm font-bold text-white shadow"
            style={{ background: 'linear-gradient(90deg, #c3282d, #a01f23)' }}
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
              style={{ background: 'rgba(15,25,55,0.65)' }}
              onClick={() => setShowConfirm(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-10"
              style={{
                background: 'rgba(245,237,204,0.98)',
                border: '1px solid rgba(173,241,196,0.2)',
              }}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.28 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #1f3674, #547ca4, #adf1c4)' }}
              />

              <h2 className="text-xl font-extrabold mb-2" style={{ color: '#1f3674' }}>
                Submit Examination?
              </h2>
              <p className="text-sm mb-5" style={{ color: '#547ca4' }}>
                You are about to submit your exam for AI marking. This cannot be undone.
              </p>

              {/* Answer summary */}
              <div
                className="rounded-xl p-4 mb-6 flex gap-6 justify-center"
                style={{ background: 'rgba(31,54,116,0.06)', border: '1px solid rgba(31,54,116,0.1)' }}
              >
                {[
                  { label: 'Answered',   value: answered,                                   color: '#1f3674' },
                  { label: 'Unanswered', value: questions.length - answered,                color: '#c3282d' },
                  { label: 'Flagged',    value: questions.filter((q) => q.flagged).length,  color: '#547ca4' },
                  { label: 'Hints used', value: hintsUsed,                                  color: '#d97706' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-extrabold" style={{ color }}>{value}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#547ca4' }}>{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl font-semibold transition hover:bg-gray-100"
                  style={{ background: '#f3f4f6', color: '#1f3674', border: '1px solid rgba(31,54,116,0.15)' }}
                >
                  Return to Exam
                </button>
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-2.5 rounded-xl font-bold text-white"
                  style={{ background: 'linear-gradient(90deg, #c3282d, #a01f23)' }}
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
