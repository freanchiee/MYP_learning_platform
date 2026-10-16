'use client'

import { ROLES, SECTOR_META, BOARD, type GameState } from '@/lib/design-live/sustainability'
import { cardStyle } from './ui'

/** Read-only reference cards: the student's own role and moves in the Sustainability Check game, plus how the class
 *  economy ended. It sits beside the need statement so a student can point to a real moment ("when I chose…") as
 *  evidence instead of remembering it from memory. Nothing here is typed or graded. */
export default function GameEvidenceField({ game, playerId }: { game: GameState | undefined; playerId: string }) {
  const mine = game?.players?.[playerId]
  const role = mine ? ROLES[mine.role] : undefined
  const moves = (game?.log ?? []).filter((e) => e.pid === playerId && e.kind !== 'duel')

  if (!game || !mine || !role) {
    return (
      <div style={{ ...cardStyle('#8A8A94'), fontSize: 12.5, color: 'var(--text-muted)' }}>
        🎲 <strong>Your game evidence will appear here.</strong> Your class has not played the game with you in it, so there are no moves to show. Use the recap of the game on the first stage, or ask your teacher which moment to use.
      </div>
    )
  }

  const tile = BOARD[mine.pos]
  const meter = (label: string, value: number, good: boolean) => (
    <span style={{ fontSize: 11.5, fontWeight: 800, padding: '3px 9px', borderRadius: 999, background: 'var(--surface-2)', border: `1px solid ${good ? '#1FA98A' : '#D6425E'}` }}>
      {label}: {Math.round(value)}
    </span>
  )

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-muted)' }}>🎲 YOUR GAME, AS EVIDENCE · for reference only</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10, alignItems: 'start' }}>
        <div style={{ ...cardStyle(role.color), display: 'grid', gap: 4 }}>
          <div style={{ fontWeight: 800 }}>{role.icon} You played: {role.name}</div>
          <div style={{ fontSize: 12.5, fontStyle: 'italic' }}>{role.flavor}</div>
          <div style={{ fontSize: 12 }}>{role.resourceName}: started {role.start}, ended {Math.round(mine.resource)}{tile ? ` · last space: ${SECTOR_META[tile.sector].icon} ${tile.name}` : ''}</div>
          {(mine.credits > 0 || mine.fake > 0) && <div style={{ fontSize: 12 }}>Carbon credits: {mine.credits} real{mine.fake > 0 ? `, ${mine.fake} worthless` : ''}</div>}
        </div>
        <div style={{ ...cardStyle(), display: 'grid', gap: 6 }}>
          <div style={{ fontWeight: 800, fontSize: 13 }}>Your moves</div>
          {moves.length === 0 ? (
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>No moves recorded for you yet.</div>
          ) : (
            <ol style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, display: 'grid', gap: 4 }}>
              {moves.map((m) => (
                <li key={m.n}>
                  <strong>{m.phase === 'phase1' ? 'Phase 1' : 'Phase 2'}</strong>: {m.label}
                  {m.choice ? ` · you chose ${m.choice === 'a' ? 'the fast, cheap option' : 'the careful option'}` : ''}
                  {m.combo ? ' · teamed up' : ''}
                  {m.note ? ` · ${m.note}` : ''}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--text-muted)' }}>HOW THE CLASS ECONOMY ENDED</span>
        {meter('Wellbeing', game.wellbeing, game.wellbeing >= 60)}
        {meter('Land health', game.landHealth, game.landHealth >= 60)}
        {meter('Carbon debt', game.carbonDebt, game.carbonDebt <= game.carbonTarget)}
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>Pick one moment from here and say, in your own words, what it showed you about the community’s need.</div>
    </div>
  )
}
