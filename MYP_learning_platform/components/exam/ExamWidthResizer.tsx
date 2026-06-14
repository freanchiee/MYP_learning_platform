'use client'

import { useEffect, useRef } from 'react'

/**
 * Drag-to-resize the exam answer (writing) column width.
 *
 * The exam layout is a CSS grid `minmax(0,1fr) var(--answer-zone-width)` (see
 * themes.css). This component renders a thin vertical handle pinned to the left
 * edge of the answer slot; dragging it overrides `--answer-zone-width` on the
 * document root (inline style wins over the per-theme default) and persists the
 * chosen width. Mounted once inside QuestionArea, so it only exists in exam mode.
 * Hidden on narrow viewports where the layout stacks.
 */

const KEY = 'myp-answer-width'
const ANSWER_MIN = 320 // px — answer column never narrower than this
const CONTEXT_MIN = 380 // px — context column always keeps at least this
const HANDLE_W = 12 // px hit area

export default function ExamWidthResizer() {
  const handleRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    // Apply any persisted width up-front (overrides the theme default).
    try {
      const saved = localStorage.getItem(KEY)
      if (saved) document.documentElement.style.setProperty('--answer-zone-width', saved)
    } catch {
      /* ignore */
    }

    const handle = handleRef.current
    if (!handle) return

    const q = <T extends HTMLElement>(sel: string) =>
      document.querySelector(sel) as T | null

    function reposition() {
      const h = handleRef.current
      if (!h) return
      const answer = q('[data-exam-slot="answer"]')
      const scroll = q('[data-exam-scroll]')
      const narrow = window.innerWidth <= 1024
      if (!answer || !scroll || narrow) {
        h.style.display = 'none'
        return
      }
      const a = answer.getBoundingClientRect()
      const s = scroll.getBoundingClientRect()
      // Pin the handle into the gutter just left of the answer column,
      // spanning the visible exam content area.
      h.style.display = 'block'
      h.style.top = `${s.top}px`
      h.style.height = `${s.height}px`
      h.style.left = `${Math.round(a.left - HANDLE_W - 6)}px`
    }

    let raf = 0
    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(reposition)
    }

    function onMove(e: PointerEvent) {
      if (!dragging.current) return
      const layout = q('[data-exam-layout]')
      if (!layout) return
      const r = layout.getBoundingClientRect()
      // Answer width = distance from the pointer to the layout's right edge.
      let w = r.right - e.clientX
      const max = Math.max(ANSWER_MIN, r.width - CONTEXT_MIN)
      w = Math.max(ANSWER_MIN, Math.min(w, max))
      document.documentElement.style.setProperty('--answer-zone-width', `${Math.round(w)}px`)
      schedule()
    }

    function endDrag() {
      if (!dragging.current) return
      dragging.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      handleRef.current?.classList.remove('is-dragging')
      try {
        const v = getComputedStyle(document.documentElement)
          .getPropertyValue('--answer-zone-width')
          .trim()
        if (v) localStorage.setItem(KEY, v)
      } catch {
        /* ignore */
      }
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', endDrag)
    }

    function onDown(e: PointerEvent) {
      e.preventDefault()
      dragging.current = true
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      handleRef.current?.classList.add('is-dragging')
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', endDrag)
    }

    // Double-click resets to the theme default.
    function onDoubleClick() {
      document.documentElement.style.removeProperty('--answer-zone-width')
      try {
        localStorage.removeItem(KEY)
      } catch {
        /* ignore */
      }
      schedule()
    }

    handle.addEventListener('pointerdown', onDown)
    handle.addEventListener('dblclick', onDoubleClick)
    window.addEventListener('resize', schedule)

    // Reposition when the rendered question / layout changes.
    const scrollRoot = q('[data-exam-scroll]')
    const mo = new MutationObserver(schedule)
    if (scrollRoot) mo.observe(scrollRoot, { childList: true, subtree: true })

    schedule()
    const t1 = window.setTimeout(schedule, 120)
    const t2 = window.setTimeout(schedule, 450)

    return () => {
      handle.removeEventListener('pointerdown', onDown)
      handle.removeEventListener('dblclick', onDoubleClick)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', endDrag)
      mo.disconnect()
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div
      ref={handleRef}
      role="separator"
      aria-orientation="vertical"
      aria-label="Drag to resize the answer area (double-click to reset)"
      title="Drag to resize the answer area — double-click to reset"
      className="exam-resizer-handle"
      style={{ position: 'fixed', display: 'none', width: HANDLE_W, zIndex: 30, cursor: 'col-resize' }}
    />
  )
}
