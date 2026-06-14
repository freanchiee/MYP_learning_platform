'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Loader2, Mail, Lock, User, Building2, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function SignupPage() {
  const supabase = createClient()

  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSignup(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          name: name.trim(),
          school: school.trim(),
        },
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="rounded-2xl shadow-2xl p-8 text-center" style={{ background: 'var(--surface)' }}>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-14 h-14" style={{ color: 'var(--success)' }} />
        </div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
          Check your email
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--text-subtle)' }}>
          We&apos;ve sent a confirmation link to{' '}
          <span className="font-medium" style={{ color: 'var(--text-muted)' }}>{email}</span>. Click the link
          to activate your account, then come back and sign in.
        </p>
        <Link
          href="/login"
          className="inline-block py-2.5 px-6 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
        >
          Go to Sign In
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-2xl shadow-2xl p-8" style={{ background: 'var(--surface)' }}>
      <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>
        Create your account
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--text-subtle)' }}>
        Join MYP Sciences and start your e-assessment journey
      </p>

      {/* Error banner */}
      {error && (
        <div className="flex items-start gap-2 rounded-lg px-4 py-3 mb-5 text-sm" style={{ background: 'var(--danger-surface)', border: '1px solid var(--danger)', color: 'var(--danger)' }}>
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSignup} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
            Full name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
              style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
            />
          </div>
        </div>

        {/* School */}
        <div>
          <label htmlFor="school" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
            School / Organisation
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
            <input
              id="school"
              type="text"
              autoComplete="organization"
              required
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="IB World School"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
              style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
              style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
              style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)', '--tw-ring-color': 'var(--accent)' } as React.CSSProperties}
            />
          </div>
          <p className="text-xs mt-1" style={{ color: 'var(--text-subtle)' }}>Minimum 8 characters</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          Create account
        </button>
      </form>

      <p className="text-center text-sm mt-6" style={{ color: 'var(--text-subtle)' }}>
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-medium hover:underline"
          style={{ color: 'var(--accent)' }}
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
