'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Wordmark from '@/components/brand/Wordmark'
import InterestForm from '@/components/leads/InterestForm'
import { Avatar, ProgressCell } from '@/components/design/live/ui'
import { Podium } from '@/components/design/live/Podium'
import { GAMEDUCATION_FEATURES, GAMEDUCATION_STATS, GAMEDUCATION_BENEFITS, GAMEDUCATION_TESTIMONIALS } from '@/data/gameducation/content'

const DEMO_PODIUM = [
  { id: 'demo-amara', name: 'Amara', points: 140 },
  { id: 'demo-leo', name: 'Leo', points: 120 },
  { id: 'demo-sofia', name: 'Sofia', points: 95 },
  { id: 'demo-daniel', name: 'Daniel', points: 70 },
]

export default function GameducationLanding() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* ── NAV ── */}
      <header className="flex items-center justify-between px-7 md:px-14 py-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase opacity-50">Back to</span>
          <Wordmark className="text-xl font-black tracking-[-0.03em]" />
        </Link>
        <Link
          href="/design/live"
          className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 hover:scale-[1.03]"
          style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
        >
          Host a live class →
        </Link>
      </header>

      {/* ── HERO ── */}
      <section className="relative px-7 md:px-14 pt-10 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: [
              'radial-gradient(50% 50% at 15% 10%, color-mix(in srgb, var(--logo-a) 22%, transparent), transparent 70%)',
              'radial-gradient(45% 45% at 90% 30%, color-mix(in srgb, var(--logo-c) 20%, transparent), transparent 70%)',
            ].join(', '),
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-6"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
        >
          Gameducation · Live in MYP Design
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 28 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight max-w-4xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          Turn any lesson into a
          <br />
          <span style={{ color: 'var(--accent-action)' }}>live class, everyone plays.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[15px] leading-relaxed opacity-70 max-w-lg mt-6"
        >
          Project a join code, and your class is live — a quiz, a worksheet, or a team icebreaker, with real-time
          dashboards, live typing previews, private chat, and a Kahoot-style finish.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 16 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mt-9"
        >
          <Link
            href="/design/live"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[14px] tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
          >
            Try a live class
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[14px] tracking-wide transition-all duration-300 hover:scale-[1.03]"
            style={{ border: '1.5px solid var(--border-strong)', color: 'var(--accent)' }}
          >
            See how it works
          </a>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <div className="border-t border-b flex items-stretch overflow-x-auto" style={{ borderColor: 'var(--border)' }}>
        {GAMEDUCATION_STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex-1 min-w-[120px] flex flex-col items-center justify-center py-6 px-4 gap-1"
            style={{ borderRight: i < GAMEDUCATION_STATS.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <span className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'var(--accent)' }}>
              {s.value}
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase opacity-40">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section className="px-7 md:px-14 py-24 grid md:grid-cols-3 gap-5">
        {GAMEDUCATION_FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
            className="p-7 rounded-2xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-base font-bold mb-2 tracking-tight">{f.title}</h3>
            <p className="text-[13.5px] leading-relaxed opacity-60">{f.body}</p>
          </motion.div>
        ))}
      </section>

      {/* ── HOW IT WORKS (live component previews, not mockup images) ── */}
      <section id="how-it-works" className="px-7 md:px-14 py-24 scroll-mt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 max-w-2xl">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight mb-3">How it works</h2>
          <p className="text-[14px] opacity-60 leading-relaxed">
            These are the real components students and teachers see — not mockups. A join code and QR on the
            projector, a live dashboard for you, a podium at the end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 rounded-2xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">Live dashboard preview</div>
            <div className="flex items-center gap-3 mb-3">
              <Avatar seed="demo-amara" size={32} />
              <span className="text-sm font-bold flex-1">Amara</span>
              <ProgressCell pct={85} />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Avatar seed="demo-leo" size={32} />
              <span className="text-sm font-bold flex-1">Leo</span>
              <ProgressCell pct={45} />
            </div>
            <div className="flex items-center gap-3">
              <Avatar seed="demo-sofia" size={32} />
              <span className="text-sm font-bold flex-1">Sofia</span>
              <ProgressCell pct={10} />
            </div>
            <p className="text-[12px] opacity-50 mt-5">
              Every student gets a unique, automatic avatar. Hover any name mid-session to see what they&apos;re
              typing right now.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-7 rounded-2xl"
            style={{ background: 'linear-gradient(160deg, #150F2A 0%, #1D1640 55%, #241C46 100%)' }}
          >
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-50 mb-4 text-white">Podium preview</div>
            <Podium entries={DEMO_PODIUM} accent="#5C3FD6" />
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="px-7 md:px-14 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight mb-8">Why teachers use it</h2>
          <div className="space-y-4">
            {GAMEDUCATION_BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <div className="rounded-full p-1 mt-0.5 shrink-0" style={{ background: 'var(--success)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[14.5px] opacity-75">{b}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-7 md:px-14 py-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight text-center mb-12">
          From our beta classrooms
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {GAMEDUCATION_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <Avatar seed={t.avatarSeed} size={56} />
              <p className="text-[13.5px] leading-relaxed opacity-75 mt-4 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} style={{ color: si < t.stars ? '#FFCF3F' : 'var(--border-strong)' }}>
                    ★
                  </span>
                ))}
              </div>
              <div className="text-[13px] font-bold">{t.author}</div>
              <div className="text-[11.5px] opacity-50">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mx-7 md:mx-14 mb-24 rounded-3xl"
        style={{ background: 'var(--accent)' }}
      >
        <div className="relative z-10 flex flex-col items-center text-center px-7 py-24 gap-7">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black text-white tracking-tight leading-[0.95]" style={{ letterSpacing: '-0.03em' }}>
            Ready to run your
            <br />
            <span style={{ color: 'var(--accent-fg)' }}>first live class?</span>
          </h2>
          <p className="text-white/60 text-[14px] max-w-md leading-relaxed">
            No install, no setup — project a code and your class is live in under a minute.
          </p>
          <Link
            href="/design/live"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-[14.5px] tracking-wide transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
            style={{ background: 'var(--accent-fg)', color: 'var(--accent)' }}
          >
            Host a live class
            <span>→</span>
          </Link>
        </div>
      </motion.section>

      {/* ── INTEREST SIGN-UP ── */}
      <section className="mx-auto w-full max-w-3xl px-7 py-16">
        <InterestForm
          sourcePage="/gameducation"
          defaultRole="teacher"
          defaultInterests={['Live classes for teachers (Gameducation)']}
          heading="Want early access to new live-class activities?"
          blurb="Tell us which subjects you teach and we may email you about new live-class activities. Nothing is charged, and you can unsubscribe any time."
        />
      </section>

      {/* ── FOOTER ── */}
      <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-7 md:px-14 py-8 text-[12px] opacity-40" style={{ borderTop: '1px solid var(--border)' }}>
        <Wordmark className="font-bold tracking-tight text-sm" />
        <span>Gameducation · Live Classes for MYP Design · {new Date().getFullYear()}</span>
        <Link href="/design/live" className="hover:opacity-100 transition-opacity">
          Go to Live Classes →
        </Link>
      </footer>
    </div>
  )
}
