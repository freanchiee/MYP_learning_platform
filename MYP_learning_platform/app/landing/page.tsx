'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

// ─── tiny helpers ────────────────────────────────────────────────────────────
const PAPER_SUBJECTS = [
  { label: '⚛ Physics',   href: '/physics-papers' },
  { label: '🌿 Biology',   href: '/bio-papers' },
  { label: '⚗ Chemistry', href: '/chem-papers' },
  { label: '🌍 Humanities (I&S)', href: '/humanities-papers' },
  { label: '🗺 Geography', href: '/geography-papers' },
]

const NAV_LINKS = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings',  href: '/settings' },
  { label: 'Login',     href: '/login' },
]

const STATS = [
  { value: '20+', label: 'Past Papers' },
  { value: '5',   label: 'Subjects' },
  { value: '88+', label: 'Questions / Paper' },
  { value: 'AI',  label: 'Grading' },
]

const SUBJECTS = [
  { id: 'physics',   icon: '⚛', label: 'Physics',    href: '/physics-papers' },
  { id: 'chemistry', icon: '⚗', label: 'Chemistry',  href: '/chem-papers' },
  { id: 'biology',   icon: '🌿', label: 'Biology',    href: '/bio-papers' },
  { id: 'humanities', icon: '🌍', label: 'Humanities (I&S)', href: '/humanities-papers' },
  { id: 'geography', icon: '🗺', label: 'Geography',  href: '/geography-papers' },
]

// ─── component ───────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null)
  const [papersOpen, setPapersOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: heroRef })
  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Prefer system preference on first load
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setDark(mq.matches)
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const heroSrc = dark ? '/images/landing/hero-dark.webp' : '/images/landing/hero-light.webp'

  return (
    <div
      className="min-h-screen font-sans antialiased overflow-x-hidden"
      style={{ background: dark ? '#0a0a0a' : 'var(--bg)', color: dark ? '#e8e0cc' : 'var(--text)' }}
    >

      {/* ── TOP NAV ─────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -24 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-7 py-5"
        style={{ backdropFilter: 'blur(0px)' }}
      >
        {/* Brand */}
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase opacity-50">
            Welcome to
          </span>
          <span
            className="text-2xl font-black tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            EDUVAULT
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Papers dropdown */}
          <div className="relative" onMouseEnter={() => setPapersOpen(true)} onMouseLeave={() => setPapersOpen(false)}>
            <button className="text-[13px] font-medium tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
              Papers
              <motion.span
                animate={{ rotate: papersOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[10px]"
              >
                ▾
              </motion.span>
            </button>
            <AnimatePresence>
              {papersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl overflow-hidden z-50"
                  style={{
                    background: dark ? 'rgba(20,20,20,0.95)' : 'var(--surface)',
                    border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {PAPER_SUBJECTS.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2.5 px-4 py-3 text-[13px] font-medium transition-all duration-150"
                      style={{ color: dark ? 'rgba(255,255,255,0.8)' : 'var(--accent)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.07)' : 'var(--accent-soft)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {l.label}
            </Link>
          ))}

          {/* Dark/light toggle */}
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: dark ? 'rgba(255,255,255,0.1)' : 'var(--accent-soft)',
              border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : 'var(--border-strong)'}`,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'moon' : 'sun'}
                initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="text-base"
              >
                {dark ? '☀️' : '🌙'}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center gap-[5px] px-2"
          onClick={() => setMenuOpen(m => !m)}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block h-[1.5px] w-full rounded-full" style={{ background: 'currentColor' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-[1.5px] w-full rounded-full" style={{ background: 'currentColor' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block h-[1.5px] w-full rounded-full" style={{ background: 'currentColor' }} />
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: dark ? 'rgba(10,10,10,0.97)' : 'var(--bg)', backdropFilter: 'blur(20px)' }}
          >
            {[...PAPER_SUBJECTS, ...NAV_LINKS].map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-black tracking-tight hover:opacity-60 transition-opacity"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <button
              onClick={() => { setDark(d => !d); setMenuOpen(false) }}
              className="mt-4 text-sm opacity-40 hover:opacity-80"
            >
              {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ height: '100svh', minHeight: 600 }}
      >
        {/* Parallax image */}
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-0 w-full"
          initial={{ scale: 1.06 }}
          animate={{ scale: loaded ? 1 : 1.06 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={heroSrc}
              src={heroSrc}
              alt="EduVault — student workspace"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Gradient overlay — stronger on left + bottom for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: dark
                ? 'linear-gradient(105deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%), linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%)'
                : 'linear-gradient(105deg, color-mix(in srgb, var(--bg) 97%, transparent) 0%, color-mix(in srgb, var(--bg) 82%, transparent) 28%, color-mix(in srgb, var(--bg) 30%, transparent) 55%, color-mix(in srgb, var(--bg) 0%, transparent) 100%), linear-gradient(to top, color-mix(in srgb, var(--bg) 85%, transparent) 0%, transparent 45%)',
            }}
          />
        </motion.div>

        {/* Hero text block */}
        <motion.div
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex flex-col justify-center px-7 md:px-14 max-w-3xl"
        >
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full"
              style={{
                background: dark ? 'rgba(173,241,196,0.15)' : 'var(--accent-soft)',
                border: `1px solid ${dark ? 'rgba(173,241,196,0.3)' : 'var(--border-strong)'}`,
                color: dark ? '#adf1c4' : 'var(--accent)',
              }}
            >
              IB MYP
            </span>
            <span className="text-xs opacity-40 tracking-wide">e-Assessment Platform</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 32 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-tight mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Learn.
            <br />
            <span style={{ color: dark ? '#adf1c4' : 'var(--accent-action)' }}>Practice.</span>
            <br />
            Excel.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 24 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] leading-relaxed opacity-70 max-w-sm mb-10"
          >
            Past papers, AI-powered grading, instant feedback — all in one place
            for IB MYP Physics, Chemistry, Biology, Humanities & Geography.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/login"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[14px] tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: dark ? '#adf1c4' : 'var(--accent)', color: dark ? '#0a0a0a' : 'var(--text-on-accent)' }}
            >
              Start Learning
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="transition-transform"
              >
                →
              </motion.span>
            </Link>

            <Link
              href="/physics-papers"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[14px] tracking-wide transition-all duration-300 hover:scale-[1.03]"
              style={{
                border: `1.5px solid ${dark ? 'rgba(255,255,255,0.2)' : 'var(--border-strong)'}`,
                color: dark ? 'rgba(255,255,255,0.8)' : 'var(--accent)',
              }}
            >
              Browse Papers
            </Link>
          </motion.div>
        </motion.div>

        {/* Subject tags — floating top-right */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 32 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-y-1/2 right-7 md:right-14 flex flex-col gap-3 hidden md:flex"
        >
          {SUBJECTS.map((s, i) => {
            const chipContent = (
              <>
                <span className="text-xl">{s.icon}</span>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-40">MYP</div>
                  <div className="text-sm font-semibold">{s.label}</div>
                </div>
                {s.href && (
                  <span
                    className="ml-1 text-[10px] opacity-0 group-hover:opacity-60 transition-opacity"
                    style={{ color: dark ? '#adf1c4' : 'var(--accent)' }}
                  >
                    →
                  </span>
                )}
              </>
            )

            const chipStyle = {
              background: hoveredSubject === s.id
                ? dark ? 'rgba(255,255,255,0.12)' : 'var(--accent-soft)'
                : dark ? 'rgba(255,255,255,0.06)' : 'var(--surface)',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
              transform: hoveredSubject === s.id ? 'translateX(-6px)' : 'translateX(0)',
              transition: 'all 0.25s ease',
              cursor: s.href ? 'pointer' : 'default',
            }

            return s.href ? (
              <Link key={s.id} href={s.href}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
                  transition={{ delay: 0.75 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onHoverStart={() => setHoveredSubject(s.id)}
                  onHoverEnd={() => setHoveredSubject(null)}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={chipStyle}
                >
                  {chipContent}
                </motion.div>
              </Link>
            ) : (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: loaded ? 0.45 : 0, x: loaded ? 0 : 20 }}
                transition={{ delay: 0.75 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ ...chipStyle, filter: 'grayscale(0.4)' }}
              >
                {chipContent}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 0.4 : 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-xs tracking-[0.2em] uppercase font-medium"
          >
            Scroll
          </motion.div>
          <motion.div
            animate={{ scaleY: [1, 1.6, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-10 rounded-full"
            style={{ background: 'currentColor' }}
          />
        </motion.div>
      </section>

      {/* ── INFO BAR ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-b flex items-stretch overflow-x-auto"
        style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : 'var(--border)' }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex-1 min-w-[120px] flex flex-col items-center justify-center py-6 px-4 gap-1"
            style={{
              borderRight: i < STATS.length - 1
                ? `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'var(--border)'}`
                : 'none',
            }}
          >
            <span
              className="text-3xl font-black tracking-tight"
              style={{ color: dark ? '#adf1c4' : 'var(--accent)' }}
            >
              {s.value}
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase opacity-40">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ── FEATURES SECTION ─────────────────────────────────────────── */}
      <section className="px-7 md:px-14 py-24 grid md:grid-cols-3 gap-px"
        style={{ borderColor: dark ? 'rgba(255,255,255,0.06)' : 'var(--border)' }}
      >
        {[
          {
            icon: '📄',
            title: 'Authentic Past Papers',
            body: 'Every IB MYP exam from 2016–2025, faithfully encoded question-by-question with correct marks, criteria and figure images.',
          },
          {
            icon: '🤖',
            title: 'AI-Powered Grading',
            body: 'Bring your own Claude, OpenAI or Gemini key. Structured tasks grade via keyword engine; open-ended prose grades via LLM.',
          },
          {
            icon: '🔬',
            title: 'Interactive Simulations',
            body: 'Explore osmosis, mitosis, Punnett squares, enzyme kinetics and food webs — all animated and interactive inside each paper.',
          },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl"
            style={{ background: dark ? 'rgba(255,255,255,0.03)' : 'var(--surface)' }}
          >
            <div className="text-4xl mb-5">{f.icon}</div>
            <h3 className="text-lg font-bold mb-3 tracking-tight">{f.title}</h3>
            <p className="text-[14px] leading-relaxed opacity-55">{f.body}</p>
          </motion.div>
        ))}
      </section>

      {/* ── BIG CTA SECTION ──────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
        style={{ background: dark ? '#111' : 'var(--accent)' }}
      >
        {/* Background image (dark mode version, heavily tinted) */}
        <div className="absolute inset-0">
          <img
            src="/images/landing/hero-dark.webp"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0" style={{ background: dark ? 'rgba(10,10,10,0.7)' : 'color-mix(in srgb, var(--accent) 85%, transparent)' }} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-7 py-28 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white tracking-tight leading-[0.95]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Your IB MYP exam
            <br />
            <span style={{ color: 'var(--accent-fg)' }}>starts here.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-white/60 text-base max-w-md leading-relaxed"
          >
            Practice every past paper. Get instant AI feedback. Track your
            progress across all four MYP Science criteria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              href="/login"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
              style={{ background: 'var(--accent-fg)', color: 'var(--accent)' }}
            >
              Get Started — it&apos;s free
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-4 px-7 md:px-14 py-8 text-[12px] opacity-40"
        style={{ borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'var(--border)'}` }}
      >
        <span className="font-bold tracking-tight text-sm">EDUVAULT</span>
        <span>IB MYP e-Assessment Platform · {new Date().getFullYear()}</span>
        <span>Physics · Chemistry · Biology · Humanities · Geography</span>
      </footer>
    </div>
  )
}
