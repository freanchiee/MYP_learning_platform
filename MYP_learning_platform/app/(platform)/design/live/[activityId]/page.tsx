import { notFound } from 'next/navigation'
import LiveActivityRunner from '@/components/design/live/LiveActivityRunner'
import { getLiveActivity } from '@/data/design/live/registry'

export default function DesignLiveActivityPage({ params }: { params: { activityId: string } }) {
  const activity = getLiveActivity(params.activityId)
  if (!activity) notFound()
  return <LiveActivityRunner activity={activity} />
}
