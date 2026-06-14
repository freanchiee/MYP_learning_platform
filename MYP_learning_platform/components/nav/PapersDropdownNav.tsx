'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const SUBJECTS = [
  { label: '⚛ Physics',   href: '/physics-papers', available: true  },
  { label: '🌿 Biology',   href: '/bio-papers',     available: true  },
  { label: '⚗ Chemistry', href: '/chem-papers',    available: true  },
  { label: '🌍 Humanities (I&S)', href: '/humanities-papers', available: true },
  { label: '🗺 Geography', href: '/geography-papers', available: true },
]

export default function PapersDropdownNav() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-link flex items-center gap-1 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
      >
        Papers
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          className="text-[10px] opacity-70"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-48 overflow-hidden z-50"
            style={{
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-panel)',
              boxShadow: 'var(--shadow-elevated)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {SUBJECTS.map(s => (
              s.available ? (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-2.5 px-4 py-3 text-[13px] font-semibold transition-all duration-150"
                  style={{ color: 'var(--text)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {s.label}
                </Link>
              ) : (
                <div
                  key={s.href}
                  className="flex items-center justify-between gap-2.5 px-4 py-3 text-[13px] font-semibold"
                  style={{ color: 'var(--text-subtle)', cursor: 'default' }}
                >
                  <span>{s.label}</span>
                  <span
                    className="text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded"
                    style={{ background: 'var(--surface-3)', color: 'var(--text-subtle)' }}
                  >
                    SOON
                  </span>
                </div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
