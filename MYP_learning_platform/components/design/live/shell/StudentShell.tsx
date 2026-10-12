'use client'

// The student's workspace for a self-paced activity.
//
//   LEFT RAIL   the CritABCD radial (which criterion you are in, how far along each is) at the top-left, then every
//               stage as an index tab in a journal: criterion-coloured spine, a mini progress bar, the current tab
//               pulled out. Tap any tab to turn to that page.
//   TOP BAR     where you are (stage x of y), overall progress, a clear "My work" download button, Previous / Next.
//   PAGE        the stage's own content (children), unchanged.
//
// On phones the rail becomes a "Stages" drawer. `?ui=classic` in the address switches back to the old layout.
// Everything uses theme tokens; the live engine's own "sticker" card style (cardStyle) is kept.

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LiveGradeRow, LivePlayerRow } from '@/lib/design-live/types'
import { CRITERIA } from '@/lib/design-live/criteria'
import { criteriaProgress, overallProgress, stageCriterion, stageProgress, stageStrands } from '@/lib/design-live/progress'
import { CriteriaRing } from '../CriteriaRing'
import MyWorkDownloads from '../MyWorkDownloads'
import { Avatar, btnStyle, cardStyle } from '../ui'

const NEUTRAL = 'var(--border-strong)'

export default function StudentShell({
  enabled, activity, me, code, grade, idx, maxIdx, onGo, children,
}: {
  enabled: boolean
  activity: LiveActivityDefinition
  me: LivePlayerRow
  code: string
  grade: LiveGradeRow | null
  idx: number
  maxIdx: number
  onGo: (n: number) => void
  children: ReactNode
}) {
  const [railOpen, setRailOpen] = useState(false)
  const [dlOpen, setDlOpen] = useState(false)
  const dlRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLElement>(null)
  const stages = activity.stages
  const accent = activity.theme.accent
  const last = stages.length - 1

  // Turning to another page always starts at the top of it, and closes any open panel.
  useEffect(() => { if (enabled) { window.scrollTo({ top: 0, behavior: 'smooth' }); setRailOpen(false) } }, [idx, enabled])
  // Keep the current stage's tab in view inside the rail.
  useEffect(() => {
    const rail = railRef.current
    const el = rail?.querySelector('[aria-current="step"]') as HTMLElement | null
    if (rail && el) rail.scrollTop = Math.max(0, el.offsetTop - rail.clientHeight / 2 + el.clientHeight / 2)
  }, [idx, enabled])
  useEffect(() => {
    if (!dlOpen) return undefined
    const close = (e: MouseEvent) => { if (dlRef.current && !dlRef.current.contains(e.target as Node)) setDlOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [dlOpen])

  const { present, progress } = useMemo(() => criteriaProgress(activity, me.data), [activity, me.data])
  const overall = useMemo(() => overallProgress(activity, me.data, maxIdx), [activity, me.data, maxIdx])
  const rows = useMemo(() => {
    let carry: string | undefined
    return stages.map((s, i) => {
      const own = stageCriterion(s)
      if (own) carry = own
      return { s, i, letter: own ?? carry, strands: stageStrands(s), pct: stageProgress(s, me.data, { passed: i < maxIdx, graded: !!grade?.graded }) }
    })
  }, [stages, me.data, maxIdx, grade])

  if (!enabled) return <>{children}</>

  const cur = rows[idx]
  const curLetter = cur?.letter
  const curCrit = curLetter ? CRITERIA[curLetter] : undefined
  const curStage = stages[idx]

  const rail = (
    <aside ref={railRef} className="cs-rail" data-open={railOpen} aria-label="Your stages">
      <div style={{ ...cardStyle(accent), padding: 14, display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar seed={me.id} size={38} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 13.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{me.name}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>⭐ {me.points} pts</div>
          </div>
          <button className="cs-close" onClick={() => setRailOpen(false)} aria-label="Close stages" style={{ ...btnStyle('var(--text-muted)'), padding: '4px 10px' }}>✕</button>
        </div>

        {/* The dial: top-left of the workspace, always showing where you are in A-B-C-D. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <CriteriaRing current={curLetter} progress={progress} present={present} size={112} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 3, flex: 1, minWidth: 0 }}>
            {(['A', 'B', 'C', 'D'] as const).map((l) => {
              const on = present.includes(l)
              return (
                <li key={l} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: curLetter === l ? 900 : 700, color: on ? 'var(--text)' : 'var(--text-subtle)', opacity: on ? 1 : 0.55 }}>
                  <span aria-hidden style={{ width: 16, height: 16, borderRadius: 999, background: CRITERIA[l].color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9.5, fontWeight: 900 }}>{l}</span>
                  <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{CRITERIA[l].name}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{on ? `${progress[l] ?? 0}%` : '–'}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <nav style={{ ...cardStyle(accent), padding: '10px 8px 10px 14px', overflow: 'visible' }} aria-label="Stages">
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 5 }}>
          {rows.map(({ s, i, letter, strands, pct }, n) => {
            const isCur = i === idx
            const c = letter ? CRITERIA[letter].color : NEUTRAL
            const newGroup = letter && letter !== rows[n - 1]?.letter
            const done = pct >= 100
            return (
              <li key={s.key}>
                {newGroup && (
                  <div style={{ margin: n ? '10px 0 4px' : '0 0 4px', fontSize: 9.5, fontWeight: 900, letterSpacing: '0.18em', color: c }}>
                    CRITERION {letter} · {CRITERIA[letter!].name.toUpperCase()}
                  </div>
                )}
                <button
                  onClick={() => onGo(i)}
                  aria-current={isCur ? 'step' : undefined}
                  title={`${s.label} · ${pct}% done`}
                  className="cs-tab"
                  style={{
                    width: '100%', textAlign: 'left', cursor: 'pointer', display: 'grid', gridTemplateColumns: '24px 1fr', gap: 8, alignItems: 'center', padding: '7px 10px 7px 8px',
                    color: 'var(--text)', background: isCur ? 'var(--accent-soft)' : 'var(--surface-2)', borderRadius: 'var(--radius-control)',
                    border: isCur ? `2.5px solid ${accent}` : '1.5px solid var(--border)', borderLeft: `6px solid ${c}`,
                    marginRight: isCur ? -14 : 0, boxShadow: isCur ? `3px 3px 0 ${accent}` : 'none', opacity: isCur || done || i <= maxIdx ? 1 : 0.8,
                  }}
                >
                  <span aria-hidden style={{ width: 22, height: 22, borderRadius: 999, background: done ? 'var(--success, #1FA98A)' : isCur ? accent : 'var(--surface)', color: done || isCur ? '#fff' : 'var(--text-muted)', border: done || isCur ? 'none' : '1.5px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900 }}>
                    {done ? '✓' : i + 1}
                  </span>
                  <span style={{ minWidth: 0, display: 'grid', gap: 3 }}>
                    <span style={{ fontSize: 12.5, fontWeight: isCur ? 900 : 700, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {s.icon} {s.label}
                    </span>
                    {strands.length > 0 && <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--text-subtle)' }}>{strands.join(' · ')}</span>}
                    <span style={{ height: 4, borderRadius: 999, background: 'var(--border)', overflow: 'hidden' }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.label} progress`}>
                      <span style={{ display: 'block', height: '100%', width: `${pct}%`, background: c === NEUTRAL ? accent : c, transition: 'width .4s' }} />
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </nav>

      <div style={{ ...cardStyle(accent), padding: 12, display: 'grid', gap: 8 }}>
        <button onClick={() => { setDlOpen(true); setRailOpen(false) }} style={{ ...btnStyle(accent, true), width: '100%' }}>📄 My work · PDF</button>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}>
          <Link href="/design/live/history" style={{ color: 'var(--text-muted)', fontWeight: 700 }}>📜 My history</Link>
          <button
            onClick={() => { const u = new URL(window.location.href); u.searchParams.set('ui', 'classic'); window.location.href = u.toString() }}
            style={{ color: 'var(--text-subtle)', fontWeight: 700, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: 11.5, boxShadow: 'none' }}
            title="Go back to the previous layout"
          >
            Classic view
          </button>
        </div>
      </div>
    </aside>
  )

  return (
    <div className="cs-grid">
      <style>{`
        .cs-grid { display: grid; grid-template-columns: 308px minmax(0, 1fr); gap: 18px; align-items: start; }
        .cs-rail { position: sticky; top: 12px; display: grid; gap: 14px; max-height: calc(100vh - 24px); overflow-y: auto; padding: 4px 26px 12px 4px; scrollbar-width: thin; box-sizing: border-box; }
        .cs-close, .cs-menu { display: none; }
        .cs-tab:hover { filter: brightness(0.97); }
        .cs-tab:focus-visible, .cs-bar button:focus-visible { outline: 3px solid ${accent}; outline-offset: 2px; }
        @media (max-width: 920px) {
          .cs-grid { grid-template-columns: minmax(0, 1fr); }
          .cs-rail { display: none; }
          .cs-rail[data-open="true"] { display: grid; position: fixed; z-index: 70; inset: 0 auto 0 0; width: min(340px, 90vw); max-height: none; padding: 12px; background: rgba(8,10,20,.72); backdrop-filter: blur(6px); }
          .cs-menu { display: inline-flex; }
          .cs-close { display: inline-flex; }
          .cs-hide-sm { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) { .cs-tab, .cs-bar * { transition: none !important; } }
      `}</style>
      {rail}
      {railOpen && <div className="cs-scrim" onClick={() => setRailOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(0,0,0,.45)' }} />}

      <div style={{ minWidth: 0, display: 'grid', gap: 14 }}>
        <header className="cs-bar" style={{ ...cardStyle(accent), padding: '10px 14px', position: 'sticky', top: 8, zIndex: 40, display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <button className="cs-menu" onClick={() => setRailOpen(true)} style={{ ...btnStyle('var(--text-muted)'), padding: '7px 11px', alignItems: 'center', gap: 6 }} aria-label="Open the list of stages">☰ Stages</button>
            <div className="cs-menu" aria-hidden style={{ alignItems: 'center' }}><CriteriaRing current={curLetter} progress={progress} present={present} size={44} /></div>
            <div style={{ minWidth: 0, flex: '1 1 220px' }}>
              <div style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.16em', color: curCrit?.color ?? 'var(--text-subtle)' }}>
                STAGE {idx + 1} OF {stages.length}{curCrit ? ` · CRITERION ${curLetter}` : ''}{curStage && 'block' in curStage && curStage.block ? ` · ${curStage.block.toUpperCase()}` : ''}
              </div>
              <div style={{ fontWeight: 900, fontSize: 17, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis' }}>{curStage?.icon} {curStage?.label}</div>
            </div>

            <div ref={dlRef} style={{ position: 'relative' }}>
              <button onClick={() => setDlOpen(!dlOpen)} aria-expanded={dlOpen} style={{ ...btnStyle(accent), padding: '8px 13px' }} title="Download your work as PDFs">📄 My work</button>
              {dlOpen && (
                <div role="dialog" aria-label="Download your work" style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: 'min(400px, 88vw)', zIndex: 50 }}>
                  <MyWorkDownloads activity={activity} me={me} code={code} grade={grade} />
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => onGo(idx - 1)} disabled={idx === 0} style={{ ...btnStyle('var(--text-muted)'), padding: '8px 12px' }} aria-label="Previous stage">←<span className="cs-hide-sm"> Previous</span></button>
              <button onClick={() => onGo(idx + 1)} disabled={idx >= last} style={{ ...btnStyle(accent, true), padding: '8px 14px' }} aria-label="Next stage"><span className="cs-hide-sm">Next stage </span>→</button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ flex: 1, height: 7, borderRadius: 999, background: 'var(--border)', overflow: 'hidden' }} role="progressbar" aria-valuenow={overall} aria-valuemin={0} aria-valuemax={100} aria-label="Overall progress">
              <div style={{ height: '100%', width: `${overall}%`, background: `linear-gradient(90deg, ${accent}, var(--accent-2, ${accent}))`, transition: 'width .5s' }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 900, fontVariantNumeric: 'tabular-nums', minWidth: 62, textAlign: 'right' }}>{overall}% done</span>
          </div>
        </header>

        <div style={{ minWidth: 0 }}>{children}</div>
      </div>
    </div>
  )
}
