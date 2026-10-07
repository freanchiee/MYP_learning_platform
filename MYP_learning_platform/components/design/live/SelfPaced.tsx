'use client'

// Self-paced activities: every student moves through the stages on their own.
//
// Where a student is (and the furthest stage reached) is stored on their own
// player row (`data._nav = { stage, max }`), so it survives a refresh and a new
// device. A student who has no position yet starts at the activity's
// `startStage`, so an activity can begin "where the previous one ended". The host
// screen shows the whole class's positions; the host's own Next/Previous buttons
// then only change which stage's dashboard the teacher is looking at.

import { useEffect } from 'react'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LivePlayerRow } from '@/lib/design-live/types'
import { Avatar, cardStyle, btnStyle, CollapsiblePanel } from './ui'

export interface Nav { stage: number; max: number }

export function defaultStart(activity: LiveActivityDefinition): number {
  return Math.max(0, Math.min(activity.startStage ?? 0, activity.stages.length - 1))
}

export function navOf(player: Pick<LivePlayerRow, 'data'> | null | undefined, activity: LiveActivityDefinition): Nav {
  const raw = (player?.data?._nav ?? {}) as { stage?: number; max?: number }
  const last = activity.stages.length - 1
  const stage = Math.max(0, Math.min(raw.stage ?? defaultStart(activity), last))
  return { stage, max: Math.max(stage, Math.min(raw.max ?? stage, last)) }
}

// -------------------------------------------------------------- student bar
export function SelfPacedBar({ activity, idx, onGo }: { activity: LiveActivityDefinition; idx: number; onGo: (n: number) => void }) {
  const stages = activity.stages
  const cur = stages[idx]
  const last = stages.length - 1
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [idx])
  return (
    <div style={{ ...cardStyle(activity.theme.accent), display: 'grid', gap: 10 }} aria-label="Activity progress">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, color: 'var(--text-muted)' }}>
            STAGE {idx + 1} OF {stages.length}{'block' in cur && cur.block ? ` · ${cur.block.toUpperCase()}` : ''}
          </div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>{cur.icon} {cur.label}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => onGo(idx - 1)} disabled={idx === 0} style={btnStyle('var(--text-muted)')}>← Previous</button>
          <button onClick={() => onGo(idx + 1)} disabled={idx >= last} style={btnStyle(activity.theme.accent, true)}>Next stage →</button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2 }}>
        {stages.map((s, i) => (
          <button
            key={s.key}
            onClick={() => onGo(i)}
            title={s.label}
            aria-label={`Go to ${s.label}`}
            aria-current={i === idx ? 'step' : undefined}
            style={{
              flex: '0 0 auto', width: 34, height: 34, borderRadius: 'var(--radius-control)', fontSize: 16, cursor: 'pointer', boxShadow: 'none',
              border: i === idx ? `2.5px solid ${activity.theme.accent}` : '1.5px solid var(--border)',
              background: i === idx ? 'var(--accent-soft)' : 'var(--surface-2)', opacity: i === idx ? 1 : 0.8,
            }}
          >
            {s.icon}
          </button>
        ))}
      </div>
    </div>
  )
}

// ------------------------------------------------------------ student panel
// Kahoot-style class telemetry for a student's own screen. Deliberately shows ONLY
// name, position, points and badges — never `data` (answers/drafts/chat).
export function ClassTelemetry({ activity, players, meId }: { activity: LiveActivityDefinition; players: LivePlayerRow[]; meId: string }) {
  const n = activity.stages.length
  const rows = players
    .map((p) => ({ p, nav: navOf(p, activity) }))
    .sort((a, b) => b.p.points - a.p.points || b.nav.max - a.nav.max || a.p.name.localeCompare(b.p.name))
  const myRank = rows.findIndex((r) => r.p.id === meId) + 1
  return (
    <CollapsiblePanel
      storageKey="live:join:classTelemetry"
      accent={activity.theme.accent}
      title="🏆 Class leaderboard"
      summary={myRank ? `You're #${myRank} of ${rows.length}` : undefined}
    >
      <div style={{ display: 'grid', gap: 6 }} aria-live="off">
        {rows.map(({ p, nav }, i) => {
          const you = p.id === meId
          return (
            <div
              key={p.id}
              style={{
                display: 'grid', gridTemplateColumns: 'auto minmax(90px, 150px) 1fr auto', gap: 8, alignItems: 'center', fontSize: 12.5,
                padding: '4px 6px', borderRadius: 'var(--radius-control)', background: you ? 'var(--accent-soft)' : 'transparent',
              }}
            >
              <span style={{ width: 20, fontWeight: 800, color: 'var(--text-muted)' }}>{i + 1}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, minWidth: 0 }}>
                <Avatar seed={p.id} size={22} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}{you ? ' (you)' : ''}</span>
              </span>
              <span title={`${activity.stages[nav.stage].label} · ${nav.stage + 1}/${n}`} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ flex: 1, height: 8, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
                  <span style={{ display: 'block', height: '100%', width: `${((nav.max + 1) / n) * 100}%`, background: activity.theme.accent, transition: 'width .4s' }} />
                </span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{activity.stages[nav.stage].icon} {nav.stage + 1}/{n}</span>
              </span>
              <span style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>
                ⭐ {p.points}{p.badges?.length ? <span title={p.badges.join(', ')}> · 🏅 {p.badges.length}</span> : null}
              </span>
            </div>
          )
        })}
      </div>
    </CollapsiblePanel>
  )
}
