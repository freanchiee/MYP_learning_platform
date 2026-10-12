import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getLiveActivity } from '@/data/design/live/registry'
import { computePoints } from '@/lib/design-live/points'

// POST { code } — the HOST of a session recalculates every student's points from their recorded work.
// Fixes any total that was inflated before points became server-calculated. Safe to run repeatedly.
export async function POST(req: Request) {
  const { code } = (await req.json().catch(() => ({}))) as { code?: string }
  if (!code || typeof code !== 'string') return NextResponse.json({ error: 'code required' }, { status: 400 })

  const user = (await createClient().auth.getUser()).data.user
  if (!user) return NextResponse.json({ error: 'Sign in required' }, { status: 401 })

  const admin = createAdminClient()
  const { data: session } = await admin.from('live_sessions').select('code, host_id, activity_id, state').eq('code', code).maybeSingle()
  if (!session || session.host_id !== user.id) return NextResponse.json({ error: 'Only the host of this session can do that' }, { status: 403 })
  const activity = getLiveActivity(session.activity_id)
  if (!activity) return NextResponse.json({ error: 'Unknown activity' }, { status: 404 })

  const { data: players } = await admin.from('live_players').select('id, name, data, points').eq('session_code', code)
  let corrected = 0
  let biggestDrop = 0
  for (const p of players ?? []) {
    const points = computePoints(activity, p.data, session.state, p.id)
    if (points === p.points) continue
    corrected++
    biggestDrop = Math.max(biggestDrop, p.points - points)
    await admin.from('live_players').update({ points }).eq('id', p.id)
  }
  return NextResponse.json({ players: players?.length ?? 0, corrected, biggestDrop })
}
