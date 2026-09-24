import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { InterestLead } from '@/lib/interests'
import InterestTable from './InterestTable'

export const dynamic = 'force-dynamic'

// Same admin check as /admin/tutoring-leads: is_admin() through the `admins`
// table, a 404 for everyone else, and row-level security refuses to return
// leads to a non-admin anyway.
export default async function InterestLeadsPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) notFound()

  const { data, error } = await supabase.from('interest_leads').select('*').order('created_at', { ascending: false }).limit(1000)

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <div className="flex flex-wrap items-baseline gap-4">
        <h1 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Interest sign-ups</h1>
        <nav className="flex gap-3 text-sm font-bold" style={{ color: 'var(--accent)' }}>
          <Link href="/admin/tutoring-leads">Tutoring leads →</Link>
        </nav>
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
        People who asked to hear about MYP subjects and tools (guides, blog posts, the live-class page). Most are parents or teachers — treat these details with care and delete a sign-up when someone asks.
      </p>
      {error ? (
        <div className="mt-6 rounded-lg p-4 text-sm" style={{ background: 'var(--danger-surface)', color: 'var(--danger)' }}>Could not load sign-ups: {error.message}</div>
      ) : (
        <InterestTable initial={(data ?? []) as InterestLead[]} />
      )}
    </div>
  )
}
