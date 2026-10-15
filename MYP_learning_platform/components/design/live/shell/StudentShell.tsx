'use client'

// The student's workspace for a self-paced activity.
//
//   LEFT RAIL   the CritABCD radial (which criterion you are in, how far along each is) at the top-left, then every
//               stage as an index tab in a journal: criterion-coloured spine, a mini progress bar, the current tab
//               pulled out. Tap any tab to turn to that page.
//   TOP BAR     where you are (stage x of y), overall progress, a clear "My work" download button, Previous / Next.
//   PAGE        the stage's own content (children), unchanged.
//
// Sticky offsets clear the site's own sticky top bar (56px, z-40): the stage rail and this header stick below it, never over it.
// On phones the rail becomes a "Stages" drawer.
// Everything uses theme tokens; the live engine's own "sticker" card style (cardStyle) is kept.
// The student can also pick a "look" (Classic / Journal / Quest / Editorial / Pop). Those are scoped to this workspace:
// the page wrapper in LiveJoin carries data-live-theme and liveThemes.css re-skins through CSS variables and the cs-* class hooks below.

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LiveGradeRow, LivePlayerRow } from '@/lib/design-live/types'
import { CRITERIA, critColor } from '@/lib/design-live/criteria'
import type { LiveThemeId } from '@/lib/design-live/liveTheme'
import { criteriaProgress, overallProgress, stageCriterion, stageProgress, stageStrands } from '@/lib/design-live/progress'
import { CriteriaRing } from '../CriteriaRing'
import MyWorkDownloads from '../MyWorkDownloads'
import { Avatar, btnStyle, cardStyle } from '../ui'
import LiveThemePicker from './LiveThemePicker'
import LiveTour, { markTourDone, tourDone } from './LiveTour'
import './liveThemes.css'

const NEUTRAL = 'var(--border-strong)'
// The first-visit tour opens at most once per page load, even if storage is blocked and it cannot remember being done.
let tourShownThisLoad = false

export default function StudentShell({
  enabled, activity, me, code, grade, idx, maxIdx, onGo, theme, onTheme, feedbackByStage, children,
}: {
  enabled: boolean
  activity: LiveActivityDefinition
  me: LivePlayerRow
  code: string
  grade: LiveGradeRow | null
  idx: number
  maxIdx: number
  onGo: (n: number) => void
  /** Stage key -> number of sections with teacher feedback the student has not opened yet. */
  feedbackByStage?: Record<string, number>
  theme: LiveThemeId
  onTheme: (t: LiveThemeId) => void
  children: ReactNode
}) {
  const [railOpen, setRailOpen] = useState(false)
  // Desktop: the rail can fold down to a slim strip of numbered dots. The choice is remembered on this device.
  const [folded, setFolded] = useState(false)
  useEffect(() => { try { setFolded(localStorage.getItem('myp:rail-folded') === '1') } catch { /* ignore */ } }, [])
  const toggleFold = () => { setFolded((f) => { try { localStorage.setItem('myp:rail-folded', f ? '0' : '1') } catch { /* ignore */ } return !f }) }
  const [dlOpen, setDlOpen] = useState(false)
  const [tourOpen, setTourOpen] = useState(false)
  // First visit on this device: start the walkthrough once the layout has settled.
  useEffect(() => {
    if (!enabled || tourShownThisLoad || tourDone()) return undefined
    const t = setTimeout(() => { tourShownThisLoad = true; setTourOpen(true) }, 900)
    return () => clearTimeout(t)
  }, [enabled])
  const dlRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLElement>(null)
  const stages = activity.stages
  // A look may re-tint the accent (--lv-accent); unset it is the activity's own colour, as before.
  const accent = `var(--lv-accent, ${activity.theme.accent})`
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
    <aside ref={railRef} className="cs-rail" data-open={railOpen} data-folded={folded} aria-label="Your stages">
      <div className="cs-mini" style={{ ...cardStyle(accent), padding: '10px 6px', display: 'none', justifyItems: 'center', gap: 8 }}>
        <button onClick={toggleFold} style={{ ...btnStyle(accent, true), padding: '6px 8px', width: '100%' }} aria-label="Expand the stages panel" title="Show stages">»</button>
        <CriteriaRing current={curLetter} progress={progress} present={present} size={46} />
        {rows.map(({ s, i, letter, pct }) => {
          const c = letter ? critColor(letter) : NEUTRAL
          const done = pct >= 100
          return (
            <button key={s.key} onClick={() => onGo(i)} aria-current={i === idx ? 'step' : undefined} title={`${s.label} · ${pct}%`} aria-label={`${s.label}, ${pct}% done`}
              style={{ width: 34, height: 34, borderRadius: 999, cursor: 'pointer', fontSize: 12, fontWeight: 900, color: done ? '#fff' : 'var(--text)', background: done ? 'var(--success, #1FA98A)' : `conic-gradient(${c} ${pct * 3.6}deg, var(--surface-2) 0)`, border: i === idx ? `3px solid ${accent}` : '1.5px solid var(--border-strong)', padding: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
              <span style={{ width: 24, height: 24, borderRadius: 999, background: done ? 'transparent' : 'var(--surface)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{done ? '✓' : i + 1}</span>
            </button>
          )
        })}
        <button onClick={() => setDlOpen(true)} style={{ ...btnStyle(accent), padding: '6px 8px', width: '100%' }} aria-label="Download my work" title="My work · PDF">📄</button>
      </div>
      <div className="cs-full cs-profile" data-tour="profile" style={{ ...cardStyle(accent), padding: 14, display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar seed={me.id} size={38} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 13.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{me.name}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>⭐ {me.points} pts</div>
          </div>
          <button className="cs-fold" onClick={toggleFold} aria-label="Collapse the stages panel" title="Collapse" style={{ ...btnStyle('var(--text-muted)'), padding: '4px 10px' }}>«</button>
          <button className="cs-close" onClick={() => setRailOpen(false)} aria-label="Close stages" style={{ ...btnStyle('var(--text-muted)'), padding: '4px 10px' }}>✕</button>
        </div>

        {/* The dial: top-left of the workspace, always showing where you are in A-B-C-D. */}
        <div className="cs-dial" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <CriteriaRing current={curLetter} progress={progress} present={present} size={112} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 3, flex: 1, minWidth: 0 }}>
            {(['A', 'B', 'C', 'D'] as const).map((l) => {
              const on = present.includes(l)
              return (
                <li key={l} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: curLetter === l ? 900 : 700, color: on ? 'var(--text)' : 'var(--text-subtle)', opacity: on ? 1 : 0.55 }}>
                  <span aria-hidden style={{ width: 16, height: 16, borderRadius: 999, background: critColor(l), color: 'var(--lv-on-crit, #fff)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9.5, fontWeight: 900 }}>{l}</span>
                  <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{CRITERIA[l].name}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{on ? `${progress[l] ?? 0}%` : '–'}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <nav className="cs-full cs-nav" data-tour="stages" style={{ ...cardStyle(accent), padding: '10px 10px 10px 14px', overflow: 'hidden', minWidth: 0 }} aria-label="Stages">
        <ol className="cs-ol" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 5 }}>
          {rows.map(({ s, i, letter, strands, pct }, n) => {
            const isCur = i === idx
            const c = letter ? critColor(letter) : NEUTRAL
            const newGroup = letter && letter !== rows[n - 1]?.letter
            const done = pct >= 100
            return (
              <li key={s.key} className="cs-li">
                {newGroup && (
                  <div className="cs-group" style={{ margin: n ? '10px 0 4px' : '0 0 4px', fontSize: 9.5, fontWeight: 900, letterSpacing: '0.18em', color: c }}>
                    <span className="cs-group-t">CRITERION {letter} · {CRITERIA[letter!].name.toUpperCase()}</span>
                  </div>
                )}
                <button
                  onClick={() => onGo(i)}
                  aria-current={isCur ? 'step' : undefined}
                  title={`${s.label} · ${pct}% done`}
                  className="cs-tab"
                  style={{
                    width: '100%', textAlign: 'left', cursor: 'pointer', display: 'grid', gridTemplateColumns: '24px 1fr', gap: 8, alignItems: 'center', padding: '7px 10px 7px 8px',
                    color: 'var(--text)', background: isCur ? 'var(--accent-soft)' : 'var(--surface-2)', borderRadius: 'var(--lv-tab-radius, var(--radius-control))',
                    border: isCur ? `2.5px solid ${accent}` : '1.5px solid var(--border)', borderLeft: `6px solid ${c}`,
                    boxShadow: isCur ? `var(--lv-tab-cur-shadow, 3px 3px 0 ${accent})` : 'none', transform: isCur ? 'var(--lv-tab-cur-transform, none)' : undefined, opacity: isCur || done || i <= maxIdx ? 1 : 0.8,
                  }}
                >
                  <span aria-hidden className="cs-num" style={{ width: 22, height: 22, borderRadius: 999, background: done ? 'var(--success, #1FA98A)' : isCur ? accent : 'var(--surface)', color: done || isCur ? 'var(--lv-on-fill, #fff)' : 'var(--text-muted)', border: done || isCur ? 'none' : '1.5px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900 }}>
                    {done ? '✓' : i + 1}
                  </span>
                  <span style={{ minWidth: 0, display: 'grid', gap: 3 }}>
                    <span style={{ fontSize: 12.5, fontWeight: isCur ? 900 : 700, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {s.icon} {s.label}{feedbackByStage?.[s.key] ? <span title="New teacher feedback" aria-label="New teacher feedback"> 💬</span> : null}
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

      <div className="cs-full cs-foot" style={{ ...cardStyle(accent), padding: 12, display: 'grid', gap: 8 }}>
        <button onClick={() => { setDlOpen(true); setRailOpen(false) }} style={{ ...btnStyle(accent, true), width: '100%' }}>📄 My work · PDF</button>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5 }}>
          <Link href="/design/live/history" style={{ color: 'var(--text-muted)', fontWeight: 700 }}>📜 My history</Link>
          <button onClick={() => { setTourOpen(true); setRailOpen(false) }} style={{ color: 'var(--text-muted)', fontWeight: 700, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: 11.5, boxShadow: 'none' }} title="Take the tour of this page again">🧭 Tour</button>
        </div>
      </div>
    </aside>
  )

  return (
    <div className="cs-grid" data-folded={folded}>
      {/* First: the journal look styles the LAST child as the page column, and the tour is fixed-position anyway. */}
      <LiveTour open={tourOpen} onClose={() => { markTourDone(); setTourOpen(false) }} />
      {/* Journal look only (hidden by CSS in every other look): spiral binding and the A-B-C-D index tabs on the spine. */}
      <div className="cs-rings" aria-hidden>{Array.from({ length: 22 }, (_, i) => <i key={i} />)}</div>
      <div className="cs-spine" role="group" aria-label="Jump to a criterion">
        {(['A', 'B', 'C', 'D'] as const).map((l) => {
          const first = rows.findIndex((r) => r.letter === l)
          return (
            <button key={l} className="cs-spine-tab" data-cur={curLetter === l} disabled={first < 0} onClick={() => onGo(first)}
              title={`${CRITERIA[l].name}${first < 0 ? ' (not in this activity)' : ''}`} aria-label={`Criterion ${l}, ${CRITERIA[l].name}${first < 0 ? ', not in this activity' : ''}`}
              style={{ background: critColor(l) }}>{l}</button>
          )
        })}
      </div>
      <style>{`
        .cs-grid { display: grid; grid-template-columns: 308px minmax(0, 1fr); gap: 18px; align-items: start; transition: grid-template-columns .2s; }
        .cs-grid[data-folded="true"] { grid-template-columns: 74px minmax(0, 1fr); }
        .cs-rail[data-folded="true"] .cs-full { display: none !important; }
        .cs-rail[data-folded="true"] .cs-mini { display: grid !important; }
        .cs-rail[data-folded="true"] { padding-right: 4px; }
        .cs-rail { position: sticky; top: 68px; display: grid; gap: 14px; max-height: calc(100vh - 80px); overflow-y: auto; overflow-x: hidden; padding: 4px 8px 12px 4px; scrollbar-width: thin; box-sizing: border-box; }
        .cs-close, .cs-menu { display: none; }
        .cs-rail > * { min-width: 0; }
        .cs-tab:hover { filter: brightness(0.97); }
        .cs-tab:focus-visible, .cs-bar button:focus-visible { outline: 3px solid ${accent}; outline-offset: 2px; }
        @media (max-width: 920px) {
          .cs-grid { grid-template-columns: minmax(0, 1fr); }
          .cs-grid, .cs-grid[data-folded="true"] { grid-template-columns: minmax(0, 1fr); }
          .cs-rail { display: none; }
          .cs-rail[data-folded="true"] .cs-full { display: grid !important; }
          .cs-rail[data-folded="true"] .cs-mini { display: none !important; }
          .cs-fold { display: none; }
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
        <header className="cs-bar" data-tour="topbar" style={{ ...cardStyle(accent), padding: '10px 14px', position: 'sticky', top: 60, zIndex: 30, display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <button className="cs-menu" onClick={() => setRailOpen(true)} style={{ ...btnStyle('var(--text-muted)'), padding: '7px 11px', alignItems: 'center', gap: 6 }} aria-label="Open the list of stages" data-tour="stages-btn">☰ Stages</button>
            <div className="cs-menu" aria-hidden style={{ alignItems: 'center' }}><CriteriaRing current={curLetter} progress={progress} present={present} size={44} /></div>
            <div style={{ minWidth: 0, flex: '1 1 220px' }}>
              <div className="cs-kicker" style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.16em', color: curLetter && curCrit ? critColor(curLetter) : 'var(--text-subtle)' }}>
                STAGE {idx + 1} OF {stages.length}{curCrit ? ` · CRITERION ${curLetter}` : ''}{curStage && 'block' in curStage && curStage.block ? ` · ${curStage.block.toUpperCase()}` : ''}
              </div>
              <div className="cs-title" style={{ fontWeight: 900, fontSize: 17, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis' }}>{curStage?.icon} {curStage?.label}</div>
            </div>

            <div ref={dlRef} data-tour="mywork" style={{ position: 'relative' }}>
              <button onClick={() => setDlOpen(!dlOpen)} aria-expanded={dlOpen} className="cs-mywork" style={{ ...btnStyle(accent), padding: '8px 13px' }} title="Download your work as PDFs">📄 My work</button>
              {dlOpen && (
                <div role="dialog" aria-label="Download your work" style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: 'min(400px, 88vw)', zIndex: 50 }}>
                  <MyWorkDownloads activity={activity} me={me} code={code} grade={grade} />
                </div>
              )}
            </div>
            <LiveThemePicker theme={theme} onTheme={onTheme} onTour={() => setTourOpen(true)} />
            <div data-tour="nav-btns" style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => onGo(idx - 1)} disabled={idx === 0} style={{ ...btnStyle('var(--text-muted)'), padding: '8px 12px' }} aria-label="Previous stage">←<span className="cs-hide-sm"> Previous</span></button>
              <button className="cs-next" onClick={() => onGo(idx + 1)} disabled={idx >= last} style={{ ...btnStyle(accent, true), padding: '8px 14px' }} aria-label="Next stage"><span className="cs-hide-sm">Next stage </span>→</button>
            </div>
          </div>
          <div data-tour="progress" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="cs-overall" style={{ flex: 1, height: 7, borderRadius: 999, background: 'var(--border)', overflow: 'hidden' }} role="progressbar" aria-valuenow={overall} aria-valuemin={0} aria-valuemax={100} aria-label="Overall progress">
              <div className="cs-overall-fill" style={{ height: '100%', width: `${overall}%`, background: `linear-gradient(90deg, ${accent}, var(--accent-2, ${accent}))`, transition: 'width .5s' }} />
            </div>
            <span className="cs-pct" style={{ fontSize: 12, fontWeight: 900, fontVariantNumeric: 'tabular-nums', minWidth: 62, textAlign: 'right' }}>{overall}% done</span>
          </div>
        </header>

        <div style={{ minWidth: 0 }}>{children}</div>
      </div>
    </div>
  )
}
