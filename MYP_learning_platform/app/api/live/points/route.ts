import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getLiveActivity } from '@/data/design/live/registry'
import { computePoints } from '@/lib/design-live/points'

// POST { playerId } — a student asks the server to (re)calculate THEIR OWN points from their recorded work.
// The browser never sends a score: it only says "please recalculate", and recalculating is idempotent, so
// calling it twice, or in a loop, changes nothing. The write uses the service role because the database
// refuses points written by a signed-in user (see migration 0017_live_points_server_only.sql).
export async function POST(req: Request) {
  const { playerId } = (await req.json().catch(() => ({}))) as { playerId?: string }
  if (!playerId || typeof playerId !== 'string') return NextResponse.json({ error: 'playerId required' }, { status: 400 })

  const user = (await createClient().auth.getUser()).data.user
  if (!user) return NextResponse.json({ error: 'Sign in required' }, { status: 401 })

  const admin = createAdminClient()
  const { data: player } = await admin.from('live_players').select('id, user_id, session_code, data, points').eq('id', playerId).maybeSingle()
  if (!player || player.user_id !== user.id) return NextResponse.json({ error: 'Not your player' }, { status: 403 })

  const { data: session } = await admin.from('live_sessions').select('activity_id, state').eq('code', player.session_code).maybeSingle()
  const activity = session && getLiveActivity(session.activity_id)
  if (!session || !activity) return NextResponse.json({ error: 'Unknown session' }, { status: 404 })

  const points = computePoints(activity, player.data, session.state, player.id)
  if (points !== player.points) await admin.from('live_players').update({ points }).eq('id', player.id)
  return NextResponse.json({ points, changed: points !== player.points })
}
