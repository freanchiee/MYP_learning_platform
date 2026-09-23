'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import LiveHost from './LiveHost'
import LiveJoin from './LiveJoin'
import { btnStyle, pageBg } from './ui'

export default function LiveActivityRunner({ activity }: { activity: LiveActivityDefinition }) {
  const params = useSearchParams()
  const urlCode = params.get('s')
  const wantsHost = params.get('host') === '1'
  const [role, setRole] = useState<'host' | 'join' | null>(wantsHost ? 'host' : urlCode ? 'join' : null)

  if (role === 'join') return <LiveJoin activity={activity} initialCode={urlCode || ''} />
  if (role === 'host') return <LiveHost activity={activity} />

  return (
    <div style={pageBg(activity.theme)}>
      <div style={{ maxWidth: 460, margin: '0 auto', paddingTop: 60 }}>
        <Link href="/design/live" style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 700 }}>
          ← BACK TO LIVE CLASSES
        </Link>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <div style={{ fontSize: 44 }}>{activity.icon}</div>
          <h1 style={{ fontSize: 26, margin: '6px 0 4px', color: '#fff' }}>{activity.title}</h1>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 24 }}>{activity.subtitle}</div>
          <div style={{ display: 'grid', gap: 12 }}>
            <button onClick={() => setRole('host')} style={{ ...btnStyle(activity.theme.accent, true, true), width: '100%' }}>
              🖥️ I&apos;m hosting this for my class
            </button>
            <button onClick={() => setRole('join')} style={{ ...btnStyle('#1FA98A', true, true), width: '100%' }}>
              🙋 I have a join code
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
