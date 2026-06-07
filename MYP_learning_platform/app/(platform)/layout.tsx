import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { createClient } from '@/lib/supabase/server'
import type { Profile } from '@/lib/types'

export default async function PlatformLayout({ children }: { children: ReactNode }) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('name, xp, level')
    .eq('id', session.user.id)
    .single<Pick<Profile, 'name' | 'xp' | 'level'>>()

  const displayName = profile?.name || session.user.email?.split('@')[0] || 'Student'
  const xp = profile?.xp ?? 0
  const level = profile?.level ?? 1

  async function handleLogout() {
    'use server'
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>

      {/* ── Top Navigation Bar ── */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-6 h-14"
        style={{
          background: 'linear-gradient(90deg, #1f3674 0%, #274e68 100%)',
          boxShadow: '0 2px 16px rgba(31,54,116,0.18)',
          borderBottom: '1px solid rgba(173,241,196,0.12)',
        }}
      >
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5 select-none shrink-0 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
            style={{
              background: 'rgba(173,241,196,0.15)',
              border: '1px solid rgba(173,241,196,0.3)',
            }}
          >
            <span className="text-xs font-extrabold tracking-tight" style={{ color: '#adf1c4' }}>
              MYP
            </span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide hidden sm:block">
            MYP Sciences
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {[
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/papers',    label: 'Papers' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/10 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: user + XP + logout */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-white text-sm font-medium hidden md:block truncate max-w-[130px]">
            {displayName}
          </span>

          {/* XP chip */}
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: 'rgba(173,241,196,0.15)',
              color: '#adf1c4',
              border: '1px solid rgba(173,241,196,0.25)',
            }}
          >
            <span style={{ opacity: 0.7 }}>Lv{level}</span>
            <span style={{ opacity: 0.35 }}>·</span>
            <span>{xp.toLocaleString()} XP</span>
          </span>

          {/* Logout */}
          <form action={handleLogout}>
            <button
              type="submit"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:bg-white/10 hover:text-white"
              style={{
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
