'use client'
import { useEffect, useRef, useState } from 'react'
import type { NavItem } from './LessonNavRail'

/** Tracks which section heading is currently at/above the top of the viewport, and a jump-to-section action. */
export function useActiveSection(items: NavItem[]) {
  const [active, setActive] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    if (!items.length) return
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        let best = 0
        for (let i = 0; i < items.length; i++) {
          const el = document.getElementById(items[i].id)
          if (el && el.getBoundingClientRect().top - 110 <= 0) best = i
        }
        setActive(best)
        ticking.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  const go = (id: string) => {
    window.dispatchEvent(new CustomEvent('dp-goto', { detail: id }))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return { active, go }
}
