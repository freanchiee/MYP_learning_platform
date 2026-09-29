// A couple of activities carry a plain function in their config (see
// myp3-unit1-kickoff-extended's exemplarsByChoice.extractKey) — fine to use
// client-side, but Next.js cannot serialize a function across the server/client
// prop boundary. Rather than special-case those activities, this whole page is a
// client component: `activity` is looked up client-side and never crosses that
// boundary, so nothing here can crash on a function-bearing config.
'use client'

import { notFound } from 'next/navigation'
import LiveActivityRunner from '@/components/design/live/LiveActivityRunner'
import { getLiveActivity } from '@/data/design/live/registry'

export default function DesignLiveActivityPage({ params }: { params: { activityId: string } }) {
  const activity = getLiveActivity(params.activityId)
  if (!activity) notFound()
  return <LiveActivityRunner activity={activity} />
}
