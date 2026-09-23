'use client'

import { motion } from 'framer-motion'
import { Avatar } from './ui'

export interface PodiumEntry {
  id: string
  name: string
  points: number
}

const PODIUM_HEIGHT = [116, 150, 90] // rendered order: 2nd, 1st, 3rd
const PODIUM_ORDER = [1, 0, 2] // index into a top-3 array, rendered left→right as 2nd/1st/3rd
const MEDAL = ['🥇', '🥈', '🥉']

/** The Kahoot-style "victory screen" — top 3 on a podium (1st in the
 *  middle, elevated), everyone else in a simple ranked list below. Used by
 *  both the host's end-of-class screen and each student's own ended view
 *  (pass `youId` there to highlight their own row). */
export function Podium({ entries, accent, youId }: { entries: PodiumEntry[]; accent: string; youId?: string }) {
  const top3 = entries.slice(0, 3)
  const rest = entries.slice(3)

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      {top3.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 10 }}>
          {PODIUM_ORDER.filter((i) => top3[i]).map((i, col) => {
            const p = top3[i]
            const isYou = p.id === youId
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: col * 0.15, type: 'spring', stiffness: 260, damping: 20 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 110 }}
              >
                <div style={{ fontSize: i === 0 ? 30 : 22 }}>{MEDAL[i]}</div>
                <Avatar seed={p.id} size={i === 0 ? 64 : 50} />
                <div style={{ fontWeight: 800, fontSize: 13, marginTop: 6, textAlign: 'center', color: '#fff', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {p.name}
                  {isYou ? ' (you)' : ''}
                </div>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#FFCF3F' }}>{p.points} pts</div>
                <div
                  style={{
                    marginTop: 8,
                    width: '100%',
                    height: PODIUM_HEIGHT[col],
                    background: `linear-gradient(180deg, ${accent} 0%, rgba(255,255,255,0.15) 100%)`,
                    border: '2.5px solid #fff',
                    borderBottom: 'none',
                    borderRadius: '10px 10px 0 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: 6,
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 22,
                  }}
                >
                  {i + 1}
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {rest.length > 0 && (
        <div style={{ display: 'grid', gap: 6, maxWidth: 420, margin: '0 auto', width: '100%' }}>
          {rest.map((p, idx) => {
            const isYou = p.id === youId
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + idx * 0.04 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: isYou ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.08)',
                  border: isYou ? '2px solid #FFCF3F' : '1.5px solid rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: '6px 12px',
                  color: '#fff',
                }}
              >
                <span style={{ width: 22, textAlign: 'center', fontSize: 12, fontWeight: 800, opacity: 0.7 }}>{idx + 4}</span>
                <Avatar seed={p.id} size={26} />
                <span style={{ flex: 1, fontWeight: 700, fontSize: 13 }}>
                  {p.name}
                  {isYou ? ' (you)' : ''}
                </span>
                <span style={{ fontWeight: 800, fontSize: 13 }}>{p.points} pts</span>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
