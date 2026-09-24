// One place for "is this person an admin?" on the server. An admin is a row in
// the `admins` table (supabase/migrations/0006), checked through the
// SECURITY DEFINER function is_admin(). Being signed in is NOT enough.
//
// Use requireAdmin() at the top of an admin PAGE (signed-out -> /login,
// signed-in non-admin -> 404, so the page doesn't reveal itself), and
// assertAdminAction() at the top of every exported SERVER ACTION behind such a
// page: a server action is a public endpoint any signed-in user can call
// directly, so protecting only the page leaves the action open.
//
// The local-dev bypass mirrors the rest of the app (lib/dev-auth.ts): it is
// only ever on when NODE_ENV !== 'production'.

import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DEV_NO_AUTH } from '@/lib/dev-auth'

export async function requireAdmin(): Promise<void> {
  if (DEV_NO_AUTH) return
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) notFound()
}

export async function assertAdminAction(): Promise<void> {
  if (DEV_NO_AUTH) return
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authorised')
  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) throw new Error('Not authorised')
}
