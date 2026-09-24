import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { TutoringLead } from '@/lib/tutoring'
import LeadsTable from './LeadsTable'

export const dynamic = 'force-dynamic'

// Unlike the older /admin pages (which only check "signed in"), this one checks
// the `admins` table through is_admin(). Someone who isn't an admin gets a 404
// rather than a hint that the page exists — and the database refuses to return
// leads to them anyway (row-level security), so this is belt and braces.
export default async function TutoringLeadsPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) notFound()

  const { data, error } = await supabase.from('tutoring_leads').select('*').order('created_at', { ascending: false }).limit(500)

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <h1 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Tutoring leads</h1>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
        People who filled in the form at /tutoring. Most are parents writing about a child — handle these details with care, and delete a lead when someone asks.
      </p>
      {error ? (
        <div className="mt-6 rounded-lg p-4 text-sm" style={{ background: 'var(--danger-surface)', color: 'var(--danger)' }}>Could not load leads: {error.message}</div>
      ) : (
        <LeadsTable initial={(data ?? []) as TutoringLead[]} />
      )}
    </div>
  )
}
