'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { UserRole } from '@/lib/classes'
import SubjectPicker from '@/components/teacher/SubjectPicker'

const CHOICES: { role: UserRole; icon: string; title: string; body: string }[] = [
  { role: 'student', icon: '🎓', title: "I'm a student", body: 'Practise, join live classes and follow tasks your teacher sets.' },
  { role: 'teacher', icon: '🧑‍🏫', title: "I'm a teacher", body: 'Create classes, host live sessions and track how your students do.' },
]

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <Picker />
    </Suspense>
  )
}

function Picker() {
  const router = useRouter()
  const params = useSearchParams()
  const raw = params.get('next')
  const next = raw && raw.startsWith('/') && !raw.startsWith('//') ? raw : '/dashboard'
  const change = params.get('change') === '1'

  const [ready, setReady] = useState(false)
  const [saving, setSaving] = useState<UserRole | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pickSubjects, setPickSubjects] = useState(false)

  useEffect(() => {
    const sb = createClient()
    ;(async () => {
      const { data } = await sb.auth.getUser()
      if (!data.user) return router.replace(`/login?next=${encodeURIComponent('/onboarding')}`)
      if (!change) {
        const { data: p } = await sb.from('profiles').select('role').eq('id', data.user.id).maybeSingle()
        if (p?.role) return router.replace(next)
      }
      setReady(true)
    })()
  }, [router, next, change])

  async function choose(role: UserRole) {
    setSaving(role)
    setError(null)
    const sb = createClient()
    const { data } = await sb.auth.getUser()
    if (!data.user) return router.replace('/login')
    const { error: err } = await sb.from('profiles').update({ role }).eq('id', data.user.id)
    if (err) {
      setError(err.message)
      setSaving(null)
      return
    }
    if (role === 'teacher') {
      setSaving(null)
      setPickSubjects(true)
      return
    }
    router.push(role === 'student' && next === '/dashboard' ? '/join-class' : next)
    router.refresh()
  }

  if (!ready) return null

  if (pickSubjects) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5" style={{ background: 'var(--bg)' }}>
        <div className="w-full max-w-lg rounded-[var(--radius-card)] p-8 shadow-2xl" style={{ background: 'var(--surface)' }}>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>What do you teach?</h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>Pick your subjects. We will offer free resources and papers for them to assign to your classes. You can change this any time.</p>
          <div className="mt-6"><SubjectPicker initial={[]} /></div>
          <button onClick={() => { router.push(next); router.refresh() }} className="mt-6 w-full rounded-[var(--radius-control)] py-3 text-sm font-bold" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>Continue</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: 'var(--bg)' }}>
      <div className="w-full max-w-lg rounded-[var(--radius-card)] p-8 shadow-2xl" style={{ background: 'var(--surface)' }}>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>Welcome to CritABCD</h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>Which describes you? You will see a dashboard made for you.</p>
        <div className="mt-6 grid gap-3">
          {CHOICES.map((c) => (
            <button
              key={c.role}
              onClick={() => choose(c.role)}
              disabled={saving !== null}
              className="flex items-start gap-4 rounded-[var(--radius-panel)] p-4 text-left transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }}
            >
              <span className="text-3xl">{c.icon}</span>
              <span>
                <span className="block text-base font-extrabold">{saving === c.role ? 'Saving…' : c.title}</span>
                <span className="mt-0.5 block text-sm" style={{ color: 'var(--text-muted)' }}>{c.body}</span>
              </span>
            </button>
          ))}
        </div>
        {error && <p className="mt-4 text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
      </div>
    </div>
  )
}
