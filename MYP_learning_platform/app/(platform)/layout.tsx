import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { createClient } from '@/lib/supabase/server'
import type { Profile } from '@/lib/types'
import PapersDropdownNav from '@/components/nav/PapersDropdownNav'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import ThemeSync from '@/components/theme/ThemeSync'
import { DEV_NO_AUTH, DEV_USER } from '@/lib/dev-auth'

export default async function PlatformLayout({ children }: { children: ReactNode }) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Dev-only bypass: render the shell without a session (see lib/dev-auth.ts).
  if (!session && !DEV_NO_AUTH) {
    redirect('/login')
  }

  const userId = session?.user?.id
  let profile: Pick<Profile, 'name' | 'xp' | 'level'> | null = null
  let profileTheme: string | null = null

  if (userId) {
    const { data } = await supabase
      .from('profiles')
      .select('name, xp, level')
      .eq('id', userId)
      .single<Pick<Profile, 'name' | 'xp' | 'level'>>()
    profile = data

    // Theme fetched separately + fail-soft: if the `theme` column hasn't been
    // migrated yet, this returns an error (not a throw) and profileTheme stays null.
    const { data: themeRow } = await supabase
      .from('profiles')
      .select('theme')
      .eq('id', userId)
      .single<{ theme: string | null }>()
    profileTheme = themeRow?.theme ?? null
  }

  const displayName = profile?.name || session?.user?.email?.split('@')[0] || DEV_USER.name
  const xp = profile?.xp ?? 0
  const level = profile?.level ?? 1

  async function handleLogout() {
    'use server'
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>

      {/* Cross-device theme adoption (no-op when this device already has a choice) */}
      <ThemeSync profileTheme={profileTheme} />

      {/* ── Top Navigation Bar ── */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-6 h-14 chrome-bar"
        style={{
          background: 'var(--nav-bg)',
          boxShadow: 'var(--shadow-nav)',
          borderBottom: '1px solid var(--nav-border)',
        }}
      >
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5 select-none shrink-0 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ background: 'var(--accent)' }}
          >
            <span
              className="text-xs font-extrabold tracking-tight"
              style={{ color: 'var(--text-on-accent)' }}
            >
              MYP
            </span>
          </div>
          <span
            className="font-bold text-sm tracking-wide hidden sm:block"
            style={{ color: 'var(--nav-fg)' }}
          >
            EduVault
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {[
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/settings',  label: 'Settings' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link px-4 py-1.5 rounded-lg text-sm font-semibold"
            >
              {label}
            </Link>
          ))}
          <PapersDropdownNav />
        </div>

        {/* Right: user + XP + theme + logout */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className="text-sm font-medium hidden md:block truncate max-w-[130px]"
            style={{ color: 'var(--nav-fg)' }}
          >
            {displayName}
          </span>

          {/* XP chip */}
          <span
            className="nav-fill flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
            style={{ color: 'var(--nav-fg)' }}
          >
            <span style={{ opacity: 0.7 }}>Lv{level}</span>
            <span style={{ opacity: 0.35 }}>·</span>
            <span>{xp.toLocaleString()} XP</span>
          </span>

          {/* Theme switcher */}
          <ThemeSwitcher variant="nav" align="right" />

          {/* Logout */}
          <form action={handleLogout}>
            <button
              type="submit"
              className="nav-link text-xs font-semibold px-3 py-1.5 rounded-lg"
              style={{ border: '1px solid var(--nav-border)' }}
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
