'use client'

import { useState, type FormEvent } from 'react'
import { SUBMITTED_BY_OPTIONS, TUTORING_CONSENT_TEXT, TUTORING_EXAM_BOARDS, TUTORING_LEVELS, TUTORING_SUBJECTS } from '@/lib/tutoring'

const UNDER_16 = 'student_under16'

const field = 'w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2'
const fieldStyle = { background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' } as const
const label = 'block text-sm font-semibold mb-1'

export default function TutoringForm({ sourcePage }: { sourcePage: string }) {
  const [submittedBy, setSubmittedBy] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [level, setLevel] = useState('')
  const [examBoard, setExamBoard] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('') // honeypot — left empty by real people
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const isUnder16 = submittedBy === UNDER_16

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (isUnder16 || sending) return
    setError(null)
    setSending(true)
    try {
      const resp = await fetch('/api/tutoring-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submittedBy, name, email, subject, level, examBoard, message, consent, website, sourcePage }),
      })
      const data = await resp.json().catch(() => null)
      if (!resp.ok || !data?.ok) throw new Error(data?.error || 'Could not send that just now — please try again in a moment.')
      setDone(true)
    } catch (err) {
      setError(err instanceof TypeError ? 'Could not reach the server — please check your connection and try again.' : (err as Error).message)
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>Thank you — that&apos;s sent ✅</div>
        <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          We&apos;ll read it and reply by email if we can help. If you don&apos;t see a reply, check your spam folder.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }} noValidate>
      <div>
        <label htmlFor="who" className={label} style={{ color: 'var(--text)' }}>Who is filling in this form?</label>
        <select id="who" required value={submittedBy} onChange={(e) => setSubmittedBy(e.target.value)} className={field} style={fieldStyle}>
          <option value="">Choose…</option>
          {SUBMITTED_BY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
          <option value={UNDER_16}>A student under 16</option>
        </select>
      </div>

      {isUnder16 && (
        <div className="rounded-lg p-4 text-sm leading-relaxed" role="status" style={{ background: 'var(--accent-soft)', color: 'var(--text)' }}>
          Thanks for your interest! Because you&apos;re under 16, please ask a parent or guardian to fill in this form for you. It keeps your family in control of your details.
        </div>
      )}

      {!isUnder16 && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label} style={{ color: 'var(--text)' }}>Your name</label>
              <input id="name" required maxLength={120} value={name} onChange={(e) => setName(e.target.value)} className={field} style={fieldStyle} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className={label} style={{ color: 'var(--text)' }}>Email</label>
              <input id="email" type="email" required maxLength={254} value={email} onChange={(e) => setEmail(e.target.value)} className={field} style={fieldStyle} autoComplete="email" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="subject" className={label} style={{ color: 'var(--text)' }}>Subject</label>
              <select id="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className={field} style={fieldStyle}>
                <option value="">Choose…</option>
                {TUTORING_SUBJECTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="level" className={label} style={{ color: 'var(--text)' }}>Level <span style={{ fontWeight: 400 }}>(optional)</span></label>
              <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} className={field} style={fieldStyle}>
                <option value="">Choose…</option>
                {TUTORING_LEVELS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="board" className={label} style={{ color: 'var(--text)' }}>Exam board <span style={{ fontWeight: 400 }}>(optional)</span></label>
              <select id="board" value={examBoard} onChange={(e) => setExamBoard(e.target.value)} className={field} style={fieldStyle}>
                <option value="">Choose…</option>
                {TUTORING_EXAM_BOARDS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={label} style={{ color: 'var(--text)' }}>What do you need help with? <span style={{ fontWeight: 400 }}>(optional)</span></label>
            <textarea id="message" maxLength={2000} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={field} style={fieldStyle} placeholder="For example: Criterion D evaluations in Sciences, or preparing for the Year 5 on-screen exam." />
          </div>

          {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
            <label htmlFor="website">Website</label>
            <input id="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <label className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
            <span>{TUTORING_CONSENT_TEXT}</span>
          </label>

          {error && (
            <div className="rounded-lg px-4 py-3 text-sm" role="alert" style={{ background: 'var(--danger-surface)', border: '1px solid var(--danger)', color: 'var(--danger)' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={sending || !consent || !submittedBy || !name.trim() || !email.trim() || !subject}
            className="w-full rounded-lg py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
          >
            {sending ? 'Sending…' : 'Send'}
          </button>
        </>
      )}
    </form>
  )
}
