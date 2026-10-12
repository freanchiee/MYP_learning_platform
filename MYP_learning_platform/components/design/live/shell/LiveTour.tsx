'use client'

// First-visit walkthrough of the student workspace: a spotlight on one part of the screen at a time, with a short
// plain-language note about what it is. Runs once per device (TOUR_KEY), can be replayed from the Look menu or the
// "Tour" button in the stage rail, and skips any step whose target is not on screen (phones have no rail, a class
// with no interview character has no interview bubble, a folded rail has no dial, ...).
//
// Targets are found by [data-tour="…"] attributes. The card uses the live theme tokens (it renders inside the themed
// wrapper, not in a portal), so it matches whichever look the student picked.

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { btnStyle, cardStyle } from '../ui'

export const TOUR_KEY = 'myp:live-tour-v1'

export function tourDone(): boolean {
  try { return localStorage.getItem(TOUR_KEY) === '1' } catch { return false }
}
export function markTourDone() {
  try { localStorage.setItem(TOUR_KEY, '1') } catch { /* ignore */ }
}

type Place = 'bottom' | 'top' | 'right' | 'left'
interface Step { id: string; target?: string; place?: Place; title: string; body: string }

const STEPS: Step[] = [
  { id: 'welcome', title: 'Welcome to your workspace 👋', body: 'This is where you work through your design activity at your own pace. Here is a quick tour of what you can see. You can skip it at any time.' },
  { id: 'profile', target: '[data-tour="profile"]', place: 'right', title: 'You and the dial', body: 'Your points are here. The ring shows the four MYP criteria: A, B, C and D. The bright, bigger part is where you are now, and it fills up as you finish work.' },
  { id: 'stages', target: '[data-tour="stages"]', place: 'right', title: 'Your stages', body: 'Every stage of the activity is listed here. Tap one to jump straight to it. A ✓ means it is done, and the little bar shows how far you are in that stage.' },
  { id: 'stages-btn', target: '[data-tour="stages-btn"]', place: 'bottom', title: 'Your stages', body: 'Tap Stages to see every stage of the activity and jump to any of them. A ✓ means it is done.' },
  { id: 'topbar', target: '[data-tour="topbar"]', place: 'bottom', title: 'Where you are', body: 'This bar tells you which stage you are on, which criterion it belongs to, and what the stage is called.' },
  { id: 'progress', target: '[data-tour="progress"]', place: 'bottom', title: 'Your progress', body: 'This bar fills up as you work through the whole activity. See how close to 100% you can get.' },
  { id: 'nav', target: '[data-tour="nav-btns"]', place: 'bottom', title: 'Move around', body: 'Press Next stage when you are ready for the next page, or Previous to go back. Your work is saved as you go.' },
  { id: 'mywork', target: '[data-tour="mywork"]', place: 'bottom', title: 'Your work, as PDFs', body: 'Press My work any time to download what you have written: by checkpoint, by criterion, or everything at once. Great for revision.' },
  { id: 'look', target: '[data-tour="look"]', place: 'bottom', title: 'Make it yours', body: 'Not your style? Pick a different look for this page. Your work stays exactly the same.' },
  { id: 'leaderboard', target: '[data-tour="leaderboard"]', place: 'left', title: 'Class leaderboard', body: 'See how the class is getting on. It only shows names, points and progress, never anyone’s answers.' },
  { id: 'chat', target: '[data-tour="chat"]', place: 'top', title: 'Stuck? Ask your teacher', body: 'Open the chat to message your teacher without leaving the page.' },
  { id: 'interview', target: '[data-tour="interview"]', place: 'top', title: 'Interview your character', body: 'This bubble opens your interview chat from any page. Drag it out of the way if it covers your work.' },
  { id: 'done', title: 'You are ready! 🎉', body: 'You can replay this tour whenever you like from the Look menu or the Tour button in the left panel. Have fun.' },
]

const PAD = 6 // breathing room around the spotlighted element
const GAP = 14 // distance between the spotlight and the card
const EDGE = 12 // minimum distance from the screen edge

const visibleEl = (sel?: string): HTMLElement | null => {
  if (!sel) return null
  const el = document.querySelector(sel) as HTMLElement | null
  if (!el) return null
  const r = el.getBoundingClientRect()
  if (r.width < 4 || r.height < 4) return null
  return el
}
const isFixed = (el: HTMLElement) => {
  for (let n: HTMLElement | null = el; n && n !== document.body; n = n.parentElement) if (getComputedStyle(n).position === 'fixed') return true
  return false
}

export default function LiveTour({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [steps, setSteps] = useState<Step[]>([])
  const [i, setI] = useState(0)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [vp, setVp] = useState({ w: 1200, h: 800 })
  const [cardH, setCardH] = useState(230)
  const cardRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  // Decide which steps apply to what is actually on screen right now.
  useEffect(() => {
    if (!open) return
    setSteps(STEPS.filter((s) => !s.target || visibleEl(s.target)))
    setI(0)
  }, [open])

  const step = steps[i]
  const last = i >= steps.length - 1
  const finish = useCallback(() => { markTourDone(); onClose() }, [onClose])

  // Bring the target into view, then follow it (smooth scroll, resize, the rail's own scrolling) every frame.
  useEffect(() => {
    if (!open || !step) return undefined
    const el = visibleEl(step.target)
    if (el && !isFixed(el)) el.scrollIntoView({ block: 'center', inline: 'nearest', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    let raf = 0
    const tick = () => {
      const t = visibleEl(step.target)
      setRect(t ? t.getBoundingClientRect() : null)
      setVp({ w: window.innerWidth, h: window.innerHeight })
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [open, step])

  useLayoutEffect(() => { if (cardRef.current) setCardH(cardRef.current.offsetHeight) }, [step, vp.w])
  useEffect(() => { if (open && step) nextRef.current?.focus() }, [open, step])

  // Keyboard: Esc skips, arrows / Enter move on.
  useEffect(() => {
    if (!open) return undefined
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); finish() }
      else if (e.key === 'ArrowRight') { e.preventDefault(); if (last) finish(); else setI((n) => n + 1) }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); setI((n) => Math.max(0, n - 1)) }
    }
    document.addEventListener('keydown', key)
    return () => document.removeEventListener('keydown', key)
  }, [open, last, finish])

  if (!open || !step) return null

  // Card position: beside the spotlight where it fits, otherwise a bottom sheet (phones) or centred (no target).
  const narrow = vp.w < 640
  const W = Math.min(360, vp.w - EDGE * 2)
  let cardStyleBox: React.CSSProperties
  if (!rect) {
    cardStyleBox = { left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: W }
  } else if (narrow) {
    const targetInLowerHalf = rect.top + rect.height / 2 > vp.h / 2
    cardStyleBox = targetInLowerHalf ? { left: EDGE, right: EDGE, top: EDGE } : { left: EDGE, right: EDGE, bottom: EDGE }
  } else {
    const order: Place[] = [step.place ?? 'bottom', 'bottom', 'top', 'right', 'left']
    const spots: Record<Place, { left: number; top: number }> = {
      bottom: { left: rect.left + rect.width / 2 - W / 2, top: rect.bottom + PAD + GAP },
      top: { left: rect.left + rect.width / 2 - W / 2, top: rect.top - PAD - GAP - cardH },
      right: { left: rect.right + PAD + GAP, top: rect.top + rect.height / 2 - cardH / 2 },
      left: { left: rect.left - PAD - GAP - W, top: rect.top + rect.height / 2 - cardH / 2 },
    }
    const fits = (p: Place) => spots[p].left >= EDGE && spots[p].left + W <= vp.w - EDGE && spots[p].top >= EDGE && spots[p].top + cardH <= vp.h - EDGE
    const pick = order.find(fits) ?? 'bottom'
    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(v, Math.max(lo, hi)))
    cardStyleBox = { left: clamp(spots[pick].left, EDGE, vp.w - EDGE - W), top: clamp(spots[pick].top, EDGE, vp.h - EDGE - cardH), width: W }
  }

  return (
    <div role="presentation" style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
      {/* Blocks clicks on the page behind the tour. */}
      <div style={{ position: 'absolute', inset: 0, background: rect ? 'transparent' : 'rgba(8,10,20,.6)' }} />
      {rect && (
        <div aria-hidden style={{ position: 'absolute', left: rect.left - PAD, top: rect.top - PAD, width: rect.width + PAD * 2, height: rect.height + PAD * 2, borderRadius: 14, boxShadow: '0 0 0 9999px rgba(8,10,20,.6)', outline: '3px solid var(--lv-accent, #fff)', outlineOffset: 0, pointerEvents: 'none' }} />
      )}
      <div ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="live-tour-title" style={{ ...cardStyle('var(--lv-accent, var(--text))'), position: 'absolute', padding: 16, display: 'grid', gap: 10, ...cardStyleBox }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>STEP {i + 1} OF {steps.length}</div>
        <div id="live-tour-title" style={{ fontSize: 18, fontWeight: 900, lineHeight: 1.2 }}>{step.title}</div>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: 'var(--text)' }}>{step.body}</p>
        <div aria-hidden style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {steps.map((s, n) => <span key={s.id} style={{ width: n === i ? 18 : 8, height: 8, borderRadius: 999, background: n === i ? 'var(--lv-accent, var(--text))' : 'var(--border-strong)', transition: 'width .2s' }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <button onClick={finish} style={{ background: 'none', border: 'none', boxShadow: 'none', color: 'var(--text-muted)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer', textDecoration: 'underline', minHeight: 44, padding: '0 6px' }}>
            {last ? 'Close' : 'Skip tour'}
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            {i > 0 && <button onClick={() => setI(i - 1)} style={{ ...btnStyle('var(--text-muted)'), minHeight: 44 }}>← Back</button>}
            <button ref={nextRef} onClick={() => (last ? finish() : setI(i + 1))} style={{ ...btnStyle('var(--lv-accent, #2F6FED)', true), minHeight: 44 }}>{last ? 'Start working' : i === 0 ? 'Show me' : 'Next →'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
