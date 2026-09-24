'use client'

import { useState, type FormEvent } from 'react'
import { INTEREST_CONSENT_TEXT, INTEREST_EXPERIENCES, INTEREST_ROLES, INTEREST_SUBJECTS } from '@/lib/interests'

const UNDER_16 = 'student_under16'

const input = 'w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2'
const inputStyle = { background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' } as const

/** "Keep me posted / let me try" sign-up: an email plus the MYP subjects and
 *  experiences the visitor cares about. Drop it on any page; pass the subject
 *  the visitor is already reading about as `defaultInterests` so it starts
 *  ticked. Saves through /api/interest-leads (see lib/interests.ts). */
export default function InterestForm({
  sourcePage,
  defaultInterests = [],
  heading = 'Want updates on the subjects and tools that matter to you?',
  blurb = 'Tell me what you are interested in and I will email you when it is ready. Nothing is charged, and you can unsubscribe any time.',
  defaultRole = '',
}: {
  sourcePage: string
  defaultInterests?: string[]
  heading?: string
  blurb?: string
  defaultRole?: string
}) {
  const [role, setRole] = useState(defaultRole)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interests, setInterests] = useState<string[]>(defaultInterests)
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('') // honeypot — left empty by real people
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const isUnder16 = role === UNDER_16
  const toggle = (i: string) => setInterests((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]))

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (isUnder16 || sending) return
    setError(null)
    setSending(true)
    try {
      const resp = await fetch('/api/interest-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, email, name, interests, consent, website, sourcePage }),
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

  const box = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const

  if (done) {
    return (
      <div className="rounded-2xl p-6" style={box}>
        <div className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>You&apos;re on the list ✅</div>
        <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>Thank you — I&apos;ll be in touch about what you picked.</p>
      </div>
    )
  }

  const chip = (i: string) => (
    <label
      key={i}
      className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold"
      style={{ border: '1px solid var(--border)', background: interests.includes(i) ? 'var(--accent-soft)' : 'transparent', color: 'var(--text)' }}
    >
      <input type="checkbox" checked={interests.includes(i)} onChange={() => toggle(i)} />
      {i}
    </label>
  )

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl p-6" style={box} noValidate>
      <div>
        <h2 className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>{heading}</h2>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{blurb}</p>
      </div>

      <fieldset>
        <legend className="mb-1.5 text-sm font-bold" style={{ color: 'var(--text)' }}>Subjects</legend>
        <div className="flex flex-wrap gap-2">{INTEREST_SUBJECTS.map(chip)}</div>
      </fieldset>
      <fieldset>
        <legend className="mb-1.5 text-sm font-bold" style={{ color: 'var(--text)' }}>Experiences</legend>
        <div className="flex flex-wrap gap-2">{INTEREST_EXPERIENCES.map(chip)}</div>
      </fieldset>

      <div>
        <label htmlFor={`role-${sourcePage}`} className="mb-1 block text-sm font-semibold" style={{ color: 'var(--text)' }}>Who is signing up?</label>
        <select id={`role-${sourcePage}`} value={role} onChange={(e) => setRole(e.target.value)} className={input} style={inputStyle}>
          <option value="">Choose…</option>
          {INTEREST_ROLES.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
          <option value={UNDER_16}>A student under 16</option>
        </select>
      </div>

      {isUnder16 && (
        <div className="rounded-lg p-4 text-sm leading-relaxed" role="status" style={{ background: 'var(--accent-soft)', color: 'var(--text)' }}>
          Thanks for your interest! Because you&apos;re under 16, please ask a parent or guardian to sign up for you. It keeps your family in control of your details.
        </div>
      )}

      {!isUnder16 && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`email-${sourcePage}`} className="mb-1 block text-sm font-semibold" style={{ color: 'var(--text)' }}>Email</label>
              <input id={`email-${sourcePage}`} type="email" maxLength={254} value={email} onChange={(e) => setEmail(e.target.value)} className={input} style={inputStyle} autoComplete="email" />
            </div>
            <div>
              <label htmlFor={`name-${sourcePage}`} className="mb-1 block text-sm font-semibold" style={{ color: 'var(--text)' }}>Name <span style={{ fontWeight: 400 }}>(optional)</span></label>
              <input id={`name-${sourcePage}`} maxLength={120} value={name} onChange={(e) => setName(e.target.value)} className={input} style={inputStyle} autoComplete="name" />
            </div>
          </div>

          {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
            <label htmlFor={`website-${sourcePage}`}>Website</label>
            <input id={`website-${sourcePage}`} tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <label className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
            <span>{INTEREST_CONSENT_TEXT}</span>
          </label>

          {error && (
            <div className="rounded-lg px-4 py-3 text-sm" role="alert" style={{ background: 'var(--danger-surface)', border: '1px solid var(--danger)', color: 'var(--danger)' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={sending || !consent || !role || !email.trim() || !interests.length}
            className="w-full rounded-lg py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
          >
            {sending ? 'Sending…' : 'Keep me posted'}
          </button>
        </>
      )}
    </form>
  )
}
