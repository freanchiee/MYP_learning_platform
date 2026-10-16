'use client'

import { useState } from 'react'
import { checkSemantic, type SemanticCheck } from '@/lib/design-live/semantic'
import { btnStyle } from './ui'

/** A one-click readiness check for a teacher (or a student) before class: can the on-device smart check load on THIS
 *  network and device? The first load downloads about 23 MB, so run it once on the school Wi-Fi. If it cannot load, the
 *  answer coach still works from keywords and key phrases, it just forgives typos and rewording less well. */
export default function NetworkCheck() {
  const [state, setState] = useState<'idle' | 'running' | SemanticCheck>('idle')
  const run = async () => {
    setState('running')
    setState(await checkSemantic())
  }
  return (
    <div style={{ marginTop: 18, fontSize: 12.5, color: 'rgba(255,255,255,0.85)', textAlign: 'center' }}>
      <button onClick={run} disabled={state === 'running'} style={{ ...btnStyle('rgba(255,255,255,0.9)'), fontSize: 12, padding: '6px 12px' }}>
        {state === 'running' ? '⏳ Checking… the first time downloads about 23 MB' : '🧪 Check the smart check on this network'}
      </button>
      {typeof state === 'object' && (
        <div role="status" style={{ marginTop: 8, fontWeight: 700 }}>
          {state.ok
            ? `✅ Ready. It started in ${(state.ms / 1000).toFixed(1)} s on this connection, so typos and rewording are understood.`
            : `⚠️ ${state.reason} The coach will still work from keywords and key phrases, but it will forgive typos less well.`}
        </div>
      )}
    </div>
  )
}
