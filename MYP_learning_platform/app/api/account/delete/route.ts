import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// POST { confirm: 'DELETE' } — a student deletes THEIR OWN account and everything they did in classes.
//
// What goes: the sign-in account, the profile, every live-activity row of theirs (answers, grades, private messages, the
// roster entry), their class memberships and progress, and any photos or sketches they uploaded. All of it follows from
// removing the account, except the stored photos, which are removed here first.
//
// Teachers and admins are refused on purpose: a teacher's account owns classes and sessions, and removing it would also
// remove every student's work in them. Those are deleted on request (see the privacy policy) after a human check.
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { confirm?: string }
  if (body.confirm !== 'DELETE') return NextResponse.json({ error: 'Type DELETE to confirm.' }, { status: 400 })

  const user = (await createClient().auth.getUser()).data.user
  if (!user) return NextResponse.json({ error: 'Sign in required' }, { status: 401 })

  const admin = createAdminClient()

  const [{ data: profile }, { count: hosted }, { count: taught }, { data: isAdmin }] = await Promise.all([
    admin.from('profiles').select('role').eq('id', user.id).maybeSingle(),
    admin.from('live_sessions').select('code', { count: 'exact', head: true }).eq('host_id', user.id),
    admin.from('classes').select('id', { count: 'exact', head: true }).eq('teacher_id', user.id),
    admin.from('admins').select('user_id').eq('user_id', user.id).maybeSingle(),
  ])
  if (profile?.role === 'teacher' || (hosted ?? 0) > 0 || (taught ?? 0) > 0 || isAdmin) {
    return NextResponse.json(
      { error: 'Teacher accounts own classes and sessions, so they are deleted on request. Email the address on the Impressum page and it will be done.' },
      { status: 403 }
    )
  }

  // Photos the student uploaded: find them from their saved answers and remove the files.
  const { data: players } = await admin.from('live_players').select('data').eq('user_id', user.id)
  const paths = new Set<string>()
  for (const p of players ?? []) {
    const text = JSON.stringify(p.data ?? {})
    const re = /\/live-uploads\/([^"\\?\s]+)/g
    let m: RegExpExecArray | null
    while ((m = re.exec(text))) paths.add(decodeURIComponent(m[1]))
  }
  if (paths.size) {
    const { error } = await admin.storage.from('live-uploads').remove(Array.from(paths))
    if (error) console.error('[account-delete] could not remove some uploads:', error.message)
  }

  const { error } = await admin.auth.admin.deleteUser(user.id)
  if (error) {
    console.error('[account-delete] failed:', error.message)
    return NextResponse.json({ error: 'Could not delete the account just now. Nothing was removed; please try again or email us.' }, { status: 500 })
  }
  return NextResponse.json({ ok: true, removedUploads: paths.size })
}
