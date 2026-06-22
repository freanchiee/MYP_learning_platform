'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const NAV_H = 56

interface Props {
  name: string
  school?: string
  level: number
  xp: number
  streakDays: number
  papersCompleted: number
  lastAttemptId?: string | null
}

/**
 * Dashboard hero — same 3D-frame photo treatment as the landing page.
 * Full-bleed hero-light/dark.jpg that docks into a tilted rounded frame on
 * scroll; the giant name is gone — the user is a subtle capsule ribbon top-right,
 * and a glass "Enter the Arena" panel sits over the monitor in the photo.
 */
export default function DashboardHero({
  name, school, level, xp, streakDays, papersCompleted, lastAttemptId,
}: Props) {
  const [dark, setDark] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const frameScale     = useTransform(scrollYProgress, [0, 0.7], [1, 0.82])
  const frameRotate    = useTransform(scrollYProgress, [0, 0.7], [0, 10])
  const frameRadius    = useTransform(scrollYProgress, [0, 0.5], [0, 28])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  useEffect(() => {
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  const heroSrc = dark ? '/images/landing/hero-dark.jpg' : '/images/landing/hero-light.jpg'

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: `calc(100vh - ${NAV_H}px)`, minHeight: 560, perspective: '1400px' }}
    >
      {/* Full-bleed photo that docks into a 3D-tilted frame on scroll */}
      <motion.div
        style={{
          scale: frameScale,
          rotateX: frameRotate,
          borderRadius: frameRadius,
          transformOrigin: 'center 35%',
          boxShadow: '0 40px 120px rgba(0,0,0,0.45)',
        }}
        className="absolute inset-0 w-full overflow-hidden will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={heroSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Legibility scrim — darker top + bottom so the capsule and panel read */}
        <div
          className="absolute inset-0"
          style={{
            background: dark
              ? 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.4) 100%)'
              : 'linear-gradient(180deg, rgba(18,28,52,0.5) 0%, rgba(18,28,52,0.12) 35%, rgba(18,28,52,0.38) 100%)',
          }}
        />
      </motion.div>

      {/* Top-left: section tag */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute top-6 left-6 md:left-10 z-20 text-[11px] font-black uppercase tracking-[0.3em] text-white/70"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Dashboard
      </motion.div>

      {/* Top-right: subtle username ribbon (capsule) */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute top-5 right-5 md:right-10 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <div
          className="flex items-center gap-2.5 rounded-full pl-4 pr-2 py-1.5"
          style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.28)' }}
        >
          <span className="text-sm font-bold text-white truncate max-w-[150px]">{name}</span>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white"
            style={{ background: 'rgba(255,255,255,0.18)' }}
          >
            <span>Lv{level}</span>
            <span className="opacity-40">·</span>
            <span>{xp.toLocaleString()} XP</span>
            <span className="opacity-40">·</span>
            <span>{streakDays}d</span>
          </span>
        </div>
      </motion.div>

      {/* Center: glass "Enter the Arena" panel — sits over the monitor */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 flex items-center justify-center z-10 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center rounded-3xl px-8 py-8 md:px-14 md:py-11 max-w-lg"
          style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(22px)', border: '1px solid rgba(255,255,255,0.22)', boxShadow: '0 24px 70px rgba(0,0,0,0.35)' }}
        >
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/70 mb-3">Welcome back</p>
          <h1 className="text-[clamp(1.75rem,4.5vw,3rem)] font-black text-white tracking-tight leading-[1.05]">
            Ready to practice?
          </h1>
          <p className="text-white/55 text-sm mt-3 mb-7">
            {papersCompleted} paper{papersCompleted !== 1 ? 's' : ''} completed{school ? ` · ${school}` : ''}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/papers"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-transform hover:scale-[1.03]"
              style={{ background: dark ? '#adf1c4' : 'var(--accent)', color: dark ? '#0a0a0a' : 'var(--text-on-accent)' }}
            >
              Enter the Arena
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            {lastAttemptId && (
              <Link
                href={`/results/${lastAttemptId}`}
                className="inline-flex items-center px-6 py-3.5 rounded-full font-semibold text-sm text-white/90 transition-colors hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.28)' }}
              >
                Last result
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/45"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.25em]">Scroll for stats</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-px h-7" style={{ background: 'rgba(255,255,255,0.3)' }} />
      </motion.div>
    </section>
  )
}
