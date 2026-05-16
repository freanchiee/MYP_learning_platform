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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-6 h-14 shadow-md"
        style={{ background: '#003b5c' }}
      >
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 select-none shrink-0">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-xs font-extrabold" style={{ color: '#003b5c' }}>
              MYP
            </span>
          </div>
          <span className="text-white font-semibold text-base tracking-wide hidden sm:block">
            MYP Sciences
          </span>
        </Link>

        {/* Nav links — center */}
        <div className="flex items-center gap-1">
          <Link
            href="/dashboard"
            className="text-blue-100 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/papers"
            className="text-blue-100 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            Papers
          </Link>
        </div>

        {/* User info + logout — right */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-white text-sm font-medium hidden md:block truncate max-w-[140px]">
            {displayName}
          </span>

          {/* XP chip */}
          <span
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: '#0079a8', color: '#fff' }}
          >
            <span className="opacity-80">Lv{level}</span>
            <span className="opacity-50 mx-0.5">·</span>
            <span>{xp.toLocaleString()} XP</span>
          </span>

          {/* Logout */}
          <form action={handleLogout}>
            <button
              type="submit"
              className="text-blue-200 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border border-white/20"
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
