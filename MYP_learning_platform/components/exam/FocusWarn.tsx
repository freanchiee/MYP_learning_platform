'use client'
import { useExamStore } from '@/store/examStore'

export default function FocusWarn() {
  const strikes = useExamStore((s) => s.strikes)
  const showStrikeOverlay = useExamStore((s) => s.showStrikeOverlay)
  const dismissStrike = useExamStore((s) => s.dismissStrike)

  if (!showStrikeOverlay) return null

  const maxReached = strikes >= 3
  const remaining = Math.max(0, 3 - strikes)

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'color-mix(in srgb, var(--danger) 95%, transparent)' }}
    >
      <div className="text-center max-w-md px-6" style={{ color: 'var(--text-on-accent)' }}>
        {/* Warning icon */}
        <div className="text-6xl mb-4">⚠️</div>

        <h1 className="text-3xl font-extrabold uppercase tracking-wide mb-3">
          Focus Warning
        </h1>

        <p className="text-lg mb-6 opacity-90">
          You have left the examination window.
        </p>

        {/* Strike dots */}
        <div className="flex justify-center gap-3 mb-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 transition-all"
              style={{
                borderColor: 'var(--text-on-accent)',
                background: i < strikes ? 'var(--text-on-accent)' : 'transparent',
              }}
              title={i < strikes ? 'Violation used' : 'Remaining'}
            />
          ))}
        </div>

        {maxReached ? (
          <p className="text-base font-semibold mb-8 bg-white bg-opacity-20 rounded-lg px-4 py-3">
            Maximum violations reached. Your exam is being submitted.
          </p>
        ) : (
          <p className="text-base mb-8 bg-white bg-opacity-20 rounded-lg px-4 py-3">
            You have{' '}
            <strong>
              {remaining} attempt{remaining !== 1 ? 's' : ''}
            </strong>{' '}
            remaining before auto-submit.
          </p>
        )}

        <button
          onClick={dismissStrike}
          className="px-8 py-3 rounded-xl font-bold text-lg transition hover:scale-105 active:scale-95"
          style={{
            background: 'var(--surface-elevated)',
            color: 'var(--danger)',
          }}
        >
          {maxReached ? 'Submit Exam' : 'Return to Exam'}
        </button>
      </div>
    </div>
  )
}
