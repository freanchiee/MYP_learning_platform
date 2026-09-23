import type { Metadata } from 'next'
import GameducationLanding from '@/components/gameducation/GameducationLanding'

export const metadata: Metadata = {
  title: 'Gameducation — Live Classes',
  description:
    'Turn any MYP Design lesson into a live, Kahoot-style class — real-time dashboards, live typing previews, private chat, and a podium finish.',
}

export default function GameducationPage() {
  return <GameducationLanding />
}
