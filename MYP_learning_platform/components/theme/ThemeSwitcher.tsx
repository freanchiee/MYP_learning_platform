'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { THEMES } from '@/lib/theme'
import { useTheme } from './ThemeProvider'

interface ThemeSwitcherProps {
  /** 'nav' = compact icon button tinted for a dark nav bar; 'bar' = for light chrome bars; 'panel' = full rows for Settings. */
  variant?: 'nav' | 'bar' | 'panel'
  align?: 'left' | 'right'
}

/**
 * Platform-wide theme switcher. Lives once in the top nav (variant="nav") and is
 * also rendered full-size in Settings (variant="panel"). Each row is a live
 * mini-preview rendered from that theme's own swatch colors.
 */
export default function ThemeSwitcher({ variant = 'nav', align = 'right' }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('mousedown', onDown)
      document.addEventListener('keydown', onEsc)
    }
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  // Settings: render all rows inline, no popover.
  if (variant === 'panel') {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            className="flex items-center gap-3 rounded-card border p-3 text-left transition-all"
            style={{
              borderColor: theme === t.id ? 'var(--accent)' : 'var(--border)',
              background: theme === t.id ? 'var(--accent-soft)' : 'var(--surface)',
              boxShadow: theme === t.id ? '0 0 0 1px var(--accent)' : 'none',
            }}
          >
            <Swatch t={t.swatch} size={40} />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1.5 font-semibold" style={{ color: 'var(--text)' }}>
                {t.label}
                {theme === t.id && <Check size={14} style={{ color: 'var(--accent)' }} />}
              </span>
              <span className="block text-xs" style={{ color: 'var(--text-subtle)' }}>
                {t.tagline}
              </span>
            </span>
          </button>
        ))}
      </div>
    )
  }

  const onNav = variant === 'nav'
  const triggerColor = onNav ? 'var(--nav-fg)' : 'var(--text-muted)'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label="Change theme"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center rounded-control transition-all"
        style={{
          width: 34,
          height: 34,
          color: triggerColor,
          background: open ? (onNav ? 'rgba(255,255,255,0.12)' : 'var(--surface-2)') : 'transparent',
          border: onNav ? '1px solid var(--nav-border)' : '1px solid var(--border)',
        }}
      >
        <Palette size={17} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute z-50 mt-2 w-64 overflow-hidden p-1.5"
            style={{
              [align]: 0,
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              boxShadow: 'var(--shadow-elevated)',
              backdropFilter: 'blur(var(--blur-chrome))',
              WebkitBackdropFilter: 'blur(var(--blur-chrome))',
            } as React.CSSProperties}
          >
            <div
              className="px-2 pb-1.5 pt-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ color: 'var(--text-subtle)' }}
            >
              Theme
            </div>
            {THEMES.map((t) => {
              const active = theme === t.id
              return (
                <button
                  key={t.id}
                  role="option"
                  aria-selected={active}
                  type="button"
                  onClick={() => {
                    setTheme(t.id)
                    setOpen(false)
                  }}
                  className="flex w-full items-center gap-2.5 rounded-control px-2 py-1.5 text-left transition-colors"
                  style={{ background: active ? 'var(--accent-soft)' : 'transparent' }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.background = 'var(--surface-2)'
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Swatch t={t.swatch} size={28} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                      {t.label}
                    </span>
                    <span className="block truncate text-[11px]" style={{ color: 'var(--text-subtle)' }}>
                      {t.tagline}
                    </span>
                  </span>
                  {active && <Check size={15} style={{ color: 'var(--accent)' }} />}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** A tiny 4-color chip previewing a theme: bg field with surface card + accent/action dots. */
function Swatch({ t, size }: { t: { bg: string; surface: string; accent: string; action: string }; size: number }) {
  return (
    <span
      className="relative shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.28),
        background: t.bg,
        border: '1px solid rgba(0,0,0,0.12)',
      }}
    >
      <span
        className="absolute"
        style={{
          left: '18%',
          top: '20%',
          width: '64%',
          height: '42%',
          borderRadius: Math.round(size * 0.14),
          background: t.surface,
          boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        }}
      />
      <span
        className="absolute rounded-full"
        style={{ left: '20%', bottom: '18%', width: size * 0.2, height: size * 0.2, background: t.accent }}
      />
      <span
        className="absolute rounded-full"
        style={{ left: '46%', bottom: '18%', width: size * 0.2, height: size * 0.2, background: t.action }}
      />
    </span>
  )
}
