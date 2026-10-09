'use client'

// Hover (or focus) a student's cell in the class Insights table to peek at
// their actual answers for that live task — and, while the session is still
// active, what they're typing right now. Saved answers come from the class
// page's own server-side data (no extra query); live typing subscribes only
// while the popover is open, using the same live_players row the host screen
// itself watches during a session.

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLiveRow, isDraftFresh, useNowTick, type LiveDraft } from '@/lib/design-live/hooks'
import { fieldAnswerText } from '@/lib/design-live/studentWork'
import type { LiveActivityDefinition, WorksheetStage } from '@/data/design/live/types'

interface LivePlayerData { id: string; data: Record<string, any> | null }

/** Every worksheet stage's written answers, stage by stage — not just
 *  whichever one the student happens to be on, since a teacher peeking in
 *  usually wants the whole picture, not just the current field. */
function AnswersList({ activity, data }: { activity: LiveActivityDefinition; data: Record<string, any> | null }) {
  const stages = activity.stages.filter((s): s is WorksheetStage => s.type === 'worksheet')
  const blocks = stages.map((stage) => {
    const rows: { label: string; text: string; images?: { url: string; name: string }[] }[] = []
    for (const section of stage.sections) {
      const sectionData = data?.[stage.key]?.[section.key] || {}
      for (const field of section.fields) {
        if (field.type === 'image') {
          const images = sectionData[field.key] as { url: string; name: string }[] | undefined
          if (images?.length) rows.push({ label: field.label, text: '', images })
          continue
        }
        const text = fieldAnswerText(field, sectionData[field.key])
        if (text) rows.push({ label: field.label, text })
      }
    }
    return { stage, rows }
  }).filter((b) => b.rows.length)

  if (!blocks.length) return <div style={{ fontSize: 12, color: 'var(--text-subtle)', fontStyle: 'italic' }}>Nothing written yet.</div>
  return (
    <div style={{ display: 'grid', gap: 10, maxHeight: 280, overflowY: 'auto' }}>
      {blocks.map(({ stage, rows }) => (
        <div key={stage.key}>
          <div style={{ fontWeight: 800, fontSize: 11.5, marginBottom: 4 }}>{stage.icon} {stage.label}</div>
          <div style={{ display: 'grid', gap: 5, paddingLeft: 4 }}>
            {rows.map((r, i) => (
              <div key={i} style={{ fontSize: 12 }}>
                <div style={{ fontWeight: 700, color: 'var(--text-subtle)', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 0.4 }}>{r.label}</div>
                {r.images ? (
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 2 }}>
                    {r.images.map((img, ii) => (
                      <a key={ii} href={img.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <img src={img.url} alt={img.name} style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 6, border: '1px solid var(--border)' }} />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{r.text}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function StudentAnswerPeek({
  activity, playerId, playerName, sessionActive, savedData, children,
}: {
  activity: LiveActivityDefinition
  playerId: string
  playerName: string
  /** Only subscribe for live typing while the session is still running. */
  sessionActive: boolean
  savedData: Record<string, any> | null
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()
  const [live, setLive] = useState<LivePlayerData | null>(null)
  const now = useNowTick(1000)

  // Only subscribe while the popover is open AND the session is still live —
  // a hover on a finished session just reads the already-fetched savedData.
  useLiveRow<LivePlayerData>('live_players', 'id', playerId, setLive, open && sessionActive)

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const show = () => { clearTimeout(closeTimer.current); setOpen(true) }
  const hide = () => { closeTimer.current = setTimeout(() => setOpen(false), 120) }

  const data = (open && sessionActive && live ? live.data : savedData) || null
  const draft = data?.live as LiveDraft | undefined
  const typingNow = sessionActive && isDraftFresh(draft, now)

  return (
    <span style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      <span tabIndex={0} style={{ cursor: 'help', borderBottom: '1px dotted var(--text-subtle)' }}>{children}</span>
      {open && (
        <div
          role="dialog"
          aria-label={`${playerName}'s answers`}
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: 'absolute', zIndex: 50, top: '100%', left: 0, marginTop: 6,
            width: 300, background: 'var(--surface-elevated)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card-hover)', padding: 12,
            color: 'var(--text)', textAlign: 'left', whiteSpace: 'normal',
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{playerName}</div>
          <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginBottom: 8 }}>{activity.title}</div>
          {sessionActive && (
            <div style={{ marginBottom: 8, padding: '6px 8px', borderRadius: 'var(--radius-control)', background: typingNow ? 'var(--accent-soft)' : 'var(--surface-inset)', fontSize: 11.5 }}>
              {typingNow ? (
                <>
                  <span style={{ color: '#1FA98A', fontWeight: 800 }}>
                    ✍️ Typing now{draft?.stageKey ? ` · ${activity.stages.find((s) => s.key === draft.stageKey)?.label ?? draft.stageKey}` : ''}
                  </span>
                  {draft?.text && <div style={{ marginTop: 3, fontStyle: 'italic', color: 'var(--text-muted)' }}>“{draft.text.slice(-140)}”</div>}
                </>
              ) : (
                <span style={{ color: 'var(--text-subtle)' }}>Not typing right now</span>
              )}
            </div>
          )}
          <AnswersList activity={activity} data={data} />
        </div>
      )}
    </span>
  )
}
