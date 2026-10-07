import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AccessManager, { type ProAccount } from './AccessManager'

export const dynamic = 'force-dynamic'

// Same admin check as /admin/interest-leads and /admin/tutoring-leads: is_admin()
// through the `admins` table, a 404 for everyone else.
export default async function AdminAccessPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) notFound()

  const { data } = await supabase.rpc('admin_list_pro_accounts')

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 md:px-8">
      <div className="flex flex-wrap items-baseline gap-4">
        <h1 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Full access</h1>
        <nav className="flex gap-3 text-sm font-bold" style={{ color: 'var(--accent)' }}>
          <Link href="/admin/interest-leads">Interest sign-ups →</Link>
          <Link href="/admin/tutoring-leads">Tutoring leads →</Link>
        </nav>
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
        Manually grant (or revoke) full/Pro access by email — for the UPI manual-payment flow on{' '}
        <Link href="/pricing" className="underline">/pricing</Link> until a real checkout is wired up.
        Nothing here is automatic: confirm payment yourself first, then grant it here.
      </p>
      <AccessManager initial={(data ?? []) as ProAccount[]} />
    </div>
  )
}
