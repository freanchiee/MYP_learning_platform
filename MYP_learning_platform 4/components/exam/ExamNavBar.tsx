'use client'
import { useState } from 'react'
import { useExamStore } from '@/store/examStore'

export default function ExamNavBar() {
  const questions = useExamStore((s) => s.questions)
  const currentIdx = useExamStore((s) => s.currentIdx)
  const nextQuestion = useExamStore((s) => s.nextQuestion)
  const prevQuestion = useExamStore((s) => s.prevQuestion)
  const toggleFlag = useExamStore((s) => s.toggleFlag)
  const startGrading = useExamStore((s) => s.startGrading)

  const [showConfirm, setShowConfirm] = useState(false)

  const currentQ = questions[currentIdx]
  const isFlagged = currentQ?.flagged ?? false
  const isFirst = currentIdx === 0
  const isLast = currentIdx === questions.length - 1

  const handleSubmit = () => {
    setShowConfirm(false)
    startGrading()
  }

  return (
    <>
      {/* Nav bar */}
      <div
        className="flex items-center justify-between flex-shrink-0 px-6"
        style={{
          height: 54,
          background: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          gap: 10,
        }}
      >
        {/* Left: navigation + flag */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevQuestion}
            disabled={isFirst}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: isFirst ? '#f3f4f6' : '#e8edf2',
              color: isFirst ? '#9ca3af' : '#003b5c',
              border: '1px solid #d1d5db',
            }}
          >
            ← Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={isLast}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: isLast ? '#f3f4f6' : '#e8edf2',
              color: isLast ? '#9ca3af' : '#003b5c',
              border: '1px solid #d1d5db',
            }}
          >
            Next →
          </button>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          <button
            onClick={() => currentQ && toggleFlag(currentQ.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition"
            style={{
              background: isFlagged ? '#fef3c7' : '#f9fafb',
              color: isFlagged ? '#92400e' : '#6b7280',
              border: `1px solid ${isFlagged ? '#f59e0b' : '#d1d5db'}`,
            }}
            title={isFlagged ? 'Remove flag' : 'Flag for review'}
          >
            🚩 {isFlagged ? 'Flagged' : 'Flag for Review'}
          </button>
        </div>

        {/* Right: position + submit */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-500">
            Q{' '}
            <span className="font-bold text-gray-800">{currentIdx + 1}</span>
            {' '}of{' '}
            <span className="font-bold text-gray-800">{questions.length}</span>
          </span>

          <button
            onClick={() => setShowConfirm(true)}
            className="px-5 py-2 rounded-lg text-sm font-bold text-white transition hover:opacity-90 active:scale-95"
            style={{ background: '#3daa35' }}
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setShowConfirm(false)}
          />

          {/* Modal card */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-10">
            <h2 className="text-xl font-bold text-[#003b5c] mb-2">Submit Examination?</h2>
            <p className="text-gray-600 text-sm mb-4">
              You are about to submit your exam for AI marking. This action cannot be undone.
            </p>

            {/* Answer summary */}
            {(() => {
              const answered = questions.filter((q) => {
                if (q.type === 'mcq') return q.ans !== null && q.ans !== undefined
                return q.tasks?.some((t) => (t.ans ?? '').trim().length > 0) ?? false
              }).length
              const unanswered = questions.length - answered
              return (
                <div className="bg-gray-50 rounded-lg p-4 mb-6 flex gap-6 justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3daa35]">{answered}</div>
                    <div className="text-xs text-gray-500">Answered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c0392b]">{unanswered}</div>
                    <div className="text-xs text-gray-500">Unanswered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#f5a623]">
                      {questions.filter((q) => q.flagged).length}
                    </div>
                    <div className="text-xs text-gray-500">Flagged</div>
                  </div>
                </div>
              )
            })()}

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-2.5 rounded-xl font-semibold text-gray-700 transition hover:bg-gray-100"
                style={{ background: '#f3f4f6', border: '1px solid #d1d5db' }}
              >
                Return to Exam
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-2.5 rounded-xl font-bold text-white transition hover:opacity-90"
                style={{ background: '#3daa35' }}
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
