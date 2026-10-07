'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UNLOCKABLE_SUBJECTS, SUBJECT_UNLOCK_PRICE_EUR, SUBJECTS_PER_PAYMENT } from '@/lib/paper-access'

const CONTACT_EMAIL = 'freanchie@gmail.com'

// Shown instead of starting a locked paper: one free sample paper per subject
// is already used, so the student picks a path — ask us (interest form,
// no payment) or pay now and unlock two subjects at once. Enforcement is the
// `attempts` INSERT trigger (migration subject_paper_paywall); this is just
// the UI for the moment a student hits that wall.
export default function UnlockPanel({ subjectSlug, subjectLabel, onClose }: { subjectSlug: string; subjectLabel: string; onClose: () => void }) {
  const [mode, setMode] = useState<'choose' | 'pay'>('choose')
  const [picked, setPicked] = useState<string[]>([subjectSlug])

  const toggle = (slug: string) => {
    setPicked((p) => {
      if (p.includes(slug)) return p.filter((s) => s !== slug)
      if (p.length >= SUBJECTS_PER_PAYMENT) return p
      return [...p, slug]
    })
  }

  const pickedLabels = UNLOCKABLE_SUBJECTS.filter((s) => picked.includes(s.slug)).map((s) => s.label)
  const mailBody = `I've paid for CritABCD subject access.\n\nAccount email: \nSubjects to unlock: ${pickedLabels.join(', ')}\n\n(Attach your payment screenshot)`

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl p-6"
        style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>FREE PREVIEW USED</div>
            <h2 className="mt-1 text-xl font-extrabold">You've used your free {subjectLabel} paper</h2>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-xl leading-none" style={{ color: 'var(--text-subtle)' }}>✕</button>
        </div>

        {mode === 'choose' && (
          <div className="mt-5 grid gap-3">
            <Link
              href={`/tutoring?subject=${encodeURIComponent(subjectLabel)}`}
              className="rounded-xl p-4 text-left transition-opacity hover:opacity-90"
              style={{ border: '1.5px solid var(--border-strong)' }}
            >
              <div className="font-bold">Not ready to pay? Tell us what you need</div>
              <div className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>No charge — a quick form, we reply by email.</div>
            </Link>
            <button
              onClick={() => setMode('pay')}
              className="rounded-xl p-4 text-left transition-opacity hover:opacity-90"
              style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
            >
              <div className="font-bold">Pay now — unlock {SUBJECTS_PER_PAYMENT} subjects for €{SUBJECT_UNLOCK_PRICE_EUR}</div>
              <div className="mt-1 text-sm" style={{ opacity: 0.9 }}>One payment, instantly picks two subjects — more value than paying per subject.</div>
            </button>
          </div>
        )}

        {mode === 'pay' && (
          <div className="mt-5">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              €{SUBJECT_UNLOCK_PRICE_EUR} unlocks <b>{SUBJECTS_PER_PAYMENT} subjects</b> of your choice — pick them now:
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {UNLOCKABLE_SUBJECTS.map((s) => {
                const checked = picked.includes(s.slug)
                const disabled = !checked && picked.length >= SUBJECTS_PER_PAYMENT
                return (
                  <label
                    key={s.slug}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
                    style={{ border: `1.5px solid ${checked ? 'var(--accent)' : 'var(--border)'}`, opacity: disabled ? 0.45 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
                  >
                    <input type="checkbox" checked={checked} disabled={disabled} onChange={() => toggle(s.slug)} />
                    {s.label}
                  </label>
                )
              })}
            </div>

            <div className="mt-5 flex justify-center">
              <img src="/images/pricing/upi-qr.png" alt="Scan to pay with any UPI app" style={{ width: 200, height: 'auto', borderRadius: 12, border: '1px solid var(--border)' }} />
            </div>

            <ol className="mt-4 space-y-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li>1. Scan and pay €{SUBJECT_UNLOCK_PRICE_EUR} (or the INR equivalent) via any UPI app.</li>
              <li>
                2. Email a payment screenshot to{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('CritABCD subject unlock payment')}&body=${encodeURIComponent(mailBody)}`}
                  className="font-bold underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {CONTACT_EMAIL}
                </a>{' '}
                with the subjects above and your account email.
              </li>
              <li>3. Access is unlocked by hand, usually within 24 hours.</li>
            </ol>

            <button onClick={() => setMode('choose')} className="mt-4 text-sm font-bold" style={{ color: 'var(--text-subtle)' }}>
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
