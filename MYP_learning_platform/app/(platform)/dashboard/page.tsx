import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Profile, UserBadge, Attempt } from '@/lib/types'
import DashboardStats, { XPBar } from '@/components/dashboard/DashboardStats'
import { DEV_NO_AUTH } from '@/lib/dev-auth'

// ── Badge definitions ──────────────────────────────────────────────────────────
type Rarity = 'common' | 'rare' | 'epic' | 'legendary'

interface BadgeDef {
  name: string
  icon: string
  rarity: Rarity
}

const BADGE_DEFS: Record<string, BadgeDef> = {
  'first-attempt':       { name: 'First Steps',        icon: '🚀', rarity: 'common' },
  'hookes-hero':         { name: "Hooke's Hero",        icon: '🧲', rarity: 'rare' },
  'circuit-master':      { name: 'Circuit Master',      icon: '⚡', rarity: 'rare' },
  'nuclear-expert':      { name: 'Nuclear Expert',      icon: '☢️', rarity: 'epic' },
  'data-detective':      { name: 'Data Detective',      icon: '📊', rarity: 'rare' },
  'no-hint-hero':        { name: 'No-Hint Hero',        icon: '🎯', rarity: 'epic' },
  'speed-demon':         { name: 'Speed Demon',         icon: '⏱️', rarity: 'rare' },
  'ethical-thinker':     { name: 'Ethical Thinker',     icon: '🌍', rarity: 'rare' },
  'physics-ace':         { name: 'Physics Ace',         icon: '🏆', rarity: 'legendary' },
  'criterion-a-master':  { name: 'Criterion A Master',  icon: '⭐', rarity: 'epic' },
}

// ── Rarity styling ─────────────────────────────────────────────────────────────
function rarityClasses(rarity: Rarity) {
  switch (rarity) {
    case 'common':    return { border: 'border-line-strong', bg: 'bg-surface-2',    label: 'text-ink-subtle', text: 'Common' }
    case 'rare':      return { border: 'border-blue-400',   bg: 'bg-blue-50',      label: 'text-blue-600',  text: 'Rare' }
    case 'epic':      return { border: 'border-purple-400', bg: 'bg-purple-50',    label: 'text-purple-600',text: 'Epic' }
    case 'legendary': return { border: 'border-yellow-400', bg: 'bg-yellow-50',    label: 'text-yellow-600',text: 'Legendary' }
  }
}

// ── Level formula ──────────────────────────────────────────────────────────────
function xpForLevel(level: number) {
  return (level - 1) ** 2 * 100
}

// ── MYP grade badge ────────────────────────────────────────────────────────────
function mypGradeBadge(grade: number | null) {
  if (!grade) return null
  const map: Record<number, string> = {
    7: 'bg-emerald-800 text-emerald-200',
    6: 'bg-green-700 text-green-100',
    5: 'bg-blue-800 text-blue-200',
    4: 'bg-orange-700 text-orange-100',
    3: 'bg-red-800 text-red-200',
    2: 'bg-purple-800 text-purple-200',
    1: 'bg-gray-800 text-gray-300',
  }
  const cls = map[grade] ?? 'bg-gray-700 text-gray-200'
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${cls}`}>
      {grade}
    </span>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function DashboardPage() {
  const supabase = createClient()

  const { data: { session } } = await supabase.auth.getSession()
  if (!session && !DEV_NO_AUTH) redirect('/login')
  const userId = session?.user?.id

  // Parallel fetches (skipped when browsing without a session in dev)
  let profile: Pick<Profile, 'name' | 'school' | 'xp' | 'level' | 'streak_days'> | null = null
  let badges: Pick<UserBadge, 'badge_id' | 'earned_at'>[] = []
  let attempts: Pick<Attempt, 'id' | 'paper_id' | 'total_score' | 'max_score' | 'myp_grade' | 'xp_earned' | 'completed_at'>[] = []

  if (userId) {
    const [profileRes, badgesRes, attemptsRes] = await Promise.all([
      supabase
        .from('profiles')
        .select('name, school, xp, level, streak_days')
        .eq('id', userId)
        .single<Pick<Profile, 'name' | 'school' | 'xp' | 'level' | 'streak_days'>>(),

      supabase
        .from('user_badges')
        .select('badge_id, earned_at')
        .eq('user_id', userId)
        .order('earned_at', { ascending: false }),

      supabase
        .from('attempts')
        .select('id, paper_id, total_score, max_score, myp_grade, xp_earned, completed_at')
        .eq('user_id', userId)
        .eq('status', 'completed')
        .order('completed_at', { ascending: false })
        .limit(5),
    ])
    profile = profileRes.data
    badges = badgesRes.data ?? []
    attempts = attemptsRes.data ?? []
  }

  const name         = profile?.name || session?.user?.email?.split('@')[0] || 'Student'
  const school       = profile?.school || ''
  const xp           = profile?.xp ?? 0
  const level        = profile?.level ?? 1
  const streakDays   = profile?.streak_days ?? 0
  const papersCompleted = attempts.length

  // XP progress within current level
  const levelStart   = xpForLevel(level)
  const levelEnd     = xpForLevel(level + 1)
  const xpInLevel    = xp - levelStart
  const xpNeeded     = levelEnd - levelStart
  const xpPct        = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100))

  return (
    <div className="space-y-0">

      {/* ══════════════════════════════════════════
          TRUE 100VH HERO — full viewport, cinematic
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: 'calc(100vh - 56px)',
          background: 'linear-gradient(145deg, var(--surface-deep) 0%, var(--accent) 40%, var(--accent-2) 75%, var(--surface-deep) 100%)',
        }}
      >
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--accent-soft) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          aria-hidden
        />

        {/* Animated wave lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.08 }} aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M -100 ${180 + i * 160} Q 360 ${80 + i * 160} 720 ${180 + i * 160} Q 1080 ${280 + i * 160} 1540 ${180 + i * 160}`}
              fill="none" stroke="white" strokeWidth={1.2 - i * 0.15}
              style={{ animation: `wave-move ${6 + i * 1.5}s ease-in-out infinite alternate`, animationDelay: `${i * 0.9}s` }}
            />
          ))}
        </svg>

        {/* Large rotating rings — right side */}
        {[520, 380, 250].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size, height: size,
              right: -(size / 3), top: -(size / 4),
              border: '1px solid var(--accent-soft)',
              animation: `slow-spin ${14 + i * 5}s linear infinite ${i % 2 ? 'reverse' : ''}`,
            }}
            aria-hidden
          />
        ))}

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => {
          const x = ((i * 79 + 13) % 88) + 6
          const y = ((i * 61 + 7) % 80) + 5
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{
                width: 2 + (i % 3), height: 2 + (i % 3),
                left: `${x}%`, top: `${y}%`,
                opacity: 0.04 + (i % 4) * 0.02,
                animation: `float-particle ${3 + i % 5}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.28}s`,
              }}
              aria-hidden
            />
          )
        })}

        {/* ── TOP LEFT: Welcome tag ── */}
        <div
          className="absolute top-10 left-10 z-10 text-xs font-black uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-fg)', letterSpacing: '0.3em' }}
        >
          IB MYP Sciences
        </div>

        {/* ── TOP RIGHT: Quick stats ── */}
        <div className="absolute top-10 right-10 z-10 flex items-center gap-8">
          {[
            { label: 'LVL', value: level },
            { label: 'XP',  value: xp.toLocaleString() },
            { label: 'STREAK', value: `${streakDays}D` },
          ].map(({ label, value }) => (
            <div key={label} className="text-right">
              <div className="text-2xl md:text-3xl font-black text-white leading-none">{value}</div>
              <div
                className="text-[9px] font-black tracking-[0.2em] mt-0.5"
                style={{ color: 'var(--accent-fg)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── CENTER: Giant name + CTA ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8">
          <p
            className="text-xs font-black uppercase tracking-[0.35em] mb-6"
            style={{ color: 'var(--accent-fg)' }}
          >
            Welcome Back
          </p>

          {/* GIANT name */}
          <h1
            className="font-extrabold text-white leading-none select-none"
            style={{
              fontSize: 'clamp(64px, 12vw, 160px)',
              letterSpacing: '-4px',
              textShadow: '0 8px 80px rgba(0,0,0,0.5)',
            }}
          >
            {name}
          </h1>

          {school && (
            <p
              className="mt-4 text-sm font-bold tracking-[0.2em]"
              style={{ color: 'var(--accent-fg)' }}
            >
              {school.toUpperCase()}
            </p>
          )}

          {/* Papers completed sub-line */}
          <p
            className="mt-3 text-xs font-black tracking-[0.2em]"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            {papersCompleted} PAPER{papersCompleted !== 1 ? 'S' : ''} COMPLETED
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 mt-12">
            <Link
              href="/papers"
              className="inline-block font-black text-sm tracking-[0.2em] transition-all hover:opacity-80"
              style={{
                background: 'var(--gradient-cta)',
                color: 'var(--text-on-accent)',
                padding: '16px 48px',
                boxShadow: '0 0 50px var(--accent-soft)',
              }}
            >
              ENTER THE ARENA
            </Link>
            {attempts.length > 0 && (
              <Link
                href={`/results/${attempts[0].id}`}
                className="inline-block font-black text-sm tracking-[0.2em] transition-all hover:opacity-80"
                style={{
                  padding: '16px 36px',
                  color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                LAST RESULT
              </Link>
            )}
          </div>
        </div>

        {/* ── BOTTOM: scroll hint ── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-black tracking-[0.25em]"
          style={{ color: 'rgba(255,255,255,0.2)', animation: 'float-particle 2.5s ease-in-out infinite alternate' }}
        >
          SCROLL FOR STATS
          <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BELOW-HERO — cream editorial (finalized palette)
          ══════════════════════════════════════════ */}
      <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)' }}>

        {/* ── STATS ROW ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
          <DashboardStats stats={[
            { label: 'Level',            value: level,           sub: 'current level',    color: 'var(--cA)', icon: '' },
            { label: 'Total XP',         value: xp,              sub: 'experience points', color: 'var(--cB)', icon: '' },
            { label: 'Day Streak',       value: streakDays,      sub: 'consecutive days',  color: 'var(--cC)', icon: '' },
            { label: 'Papers Completed', value: papersCompleted, sub: 'papers done',       color: 'var(--cD)', icon: '' },
          ]} />
          <XPBar pct={xpPct} level={level} xpInLevel={xpInLevel} xpNeeded={xpNeeded} />
        </div>

        {/* ── ACHIEVEMENTS ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

          {/* Section header — editorial numbered style */}
          <div className="flex items-end justify-between mb-10" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}>
            <div>
              <div className="text-[9px] font-black tracking-[0.35em] mb-2" style={{ color: 'var(--text-subtle)' }}>01</div>
              <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>Achievements</h2>
            </div>
            <span className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
              {badges.length} earned
            </span>
          </div>

          {badges.length === 0 ? (
            /* Empty state — editorial */
            <div
              className="flex flex-col items-center justify-center py-20"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div className="text-6xl mb-6" style={{ opacity: 0.3 }}>🏅</div>
              <p className="text-xs font-black tracking-[0.3em] mb-6" style={{ color: 'var(--text-subtle)' }}>
                NO BADGES YET
              </p>
              <Link
                href="/papers"
                className="inline-block font-black text-xs tracking-[0.2em] transition-opacity hover:opacity-80"
                style={{ background: 'var(--accent)', color: 'var(--text-on-accent)', padding: '12px 32px' }}
              >
                START YOUR FIRST PAPER
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px" style={{ background: 'var(--border)' }}>
              {badges.map(({ badge_id, earned_at }) => {
                const def = BADGE_DEFS[badge_id]
                if (!def) return null
                const rarityAccent: Record<string, string> = {
                  common: 'var(--cB)', rare: 'var(--cA)', epic: 'var(--cC)', legendary: 'var(--cD)',
                }
                const col = rarityAccent[def.rarity] ?? 'var(--cA)'
                return (
                  <div
                    key={badge_id}
                    className="flex flex-col items-center gap-2 p-5"
                    style={{ background: 'var(--surface)' }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center text-2xl"
                      style={{ background: `color-mix(in srgb, ${col} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${col} 20%, transparent)` }}
                    >
                      {def.icon}
                    </div>
                    <span className="text-xs font-bold text-center leading-tight" style={{ color: 'var(--text)' }}>
                      {def.name}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: col }}>
                      {def.rarity}
                    </span>
                    <span className="text-[9px]" style={{ color: 'var(--text-subtle)' }}>
                      {new Date(earned_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' })}
                    </span>
                  </div>
                )
              })}
            </div>
          )}

          {/* ── RECENT ATTEMPTS ── */}
          <div className="mt-20">
            <div className="flex items-end justify-between mb-10" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}>
              <div>
                <div className="text-[9px] font-black tracking-[0.35em] mb-2" style={{ color: 'var(--text-subtle)' }}>02</div>
                <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>Recent Attempts</h2>
              </div>
              <span className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
                {attempts.length > 0 ? `${attempts.length} sessions` : 'none yet'}
              </span>
            </div>

            {attempts.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="text-5xl mb-6" style={{ opacity: 0.25 }}>📝</div>
                <p className="text-xs font-black tracking-[0.3em] mb-8" style={{ color: 'var(--text-subtle)' }}>
                  NO COMPLETED ATTEMPTS YET
                </p>
                <Link
                  href="/papers"
                  className="inline-block font-black text-xs tracking-[0.2em] transition-opacity hover:opacity-80"
                  style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)', padding: '14px 40px' }}
                >
                  ENTER THE ARENA →
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      {['Paper', 'Score', 'MYP Grade', 'XP Earned', 'Date', ''].map((h, i) => (
                        <th
                          key={h + i}
                          className={`pb-4 text-[9px] font-black tracking-[0.25em] ${i === 0 ? 'text-left' : 'text-center'}`}
                          style={{ color: 'var(--text-subtle)', borderBottom: '1px solid var(--border)' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {attempts.map((attempt, rowIdx) => {
                      const scoreStr =
                        attempt.total_score != null && attempt.max_score != null
                          ? `${attempt.total_score}/${attempt.max_score}`
                          : '—'
                      const pct =
                        attempt.total_score != null && attempt.max_score != null
                          ? Math.round((attempt.total_score / attempt.max_score) * 100)
                          : null

                      return (
                        <tr
                          key={attempt.id}
                          className="group transition-colors"
                          style={{ borderBottom: '1px solid var(--divider)' }}
                        >
                          {/* Index */}
                          <td className="py-5 pr-4">
                            <div className="flex items-center gap-4">
                              <span
                                className="text-[9px] font-black tracking-widest w-6 shrink-0"
                                style={{ color: 'var(--text-subtle)' }}
                              >
                                {String(rowIdx + 1).padStart(2, '0')}
                              </span>
                              <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>
                                {attempt.paper_id
                                  .split('-')
                                  .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                                  .join(' ')}
                              </span>
                            </div>
                          </td>
                          <td className="py-5 px-3 text-center">
                            <span className="font-extrabold text-sm" style={{ color: 'var(--text)' }}>{scoreStr}</span>
                            {pct != null && (
                              <span className="ml-1 text-xs" style={{ color: 'var(--text-subtle)' }}>({pct}%)</span>
                            )}
                          </td>
                          <td className="py-5 px-3 text-center">
                            {attempt.myp_grade ? (
                              <span
                                className="inline-flex items-center justify-center w-8 h-8 text-sm font-extrabold"
                                style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                              >
                                {attempt.myp_grade}
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-subtle)' }}>—</span>
                            )}
                          </td>
                          <td className="py-5 px-3 text-center">
                            <span className="font-extrabold text-sm" style={{ color: 'var(--accent-action)' }}>
                              +{attempt.xp_earned} XP
                            </span>
                          </td>
                          <td className="py-5 px-3 text-center text-xs font-medium" style={{ color: 'var(--text-subtle)' }}>
                            {attempt.completed_at
                              ? new Date(attempt.completed_at).toLocaleDateString('en-GB', {
                                  day: 'numeric', month: 'short', year: '2-digit',
                                })
                              : '—'}
                          </td>
                          <td className="py-5 pl-3 text-right">
                            <Link
                              href={`/results/${attempt.id}`}
                              className="inline-block text-[9px] font-black tracking-[0.2em] transition-all hover:opacity-70"
                              style={{
                                color: 'var(--text)',
                                border: '1px solid var(--border-strong)',
                                padding: '7px 16px',
                              }}
                            >
                              VIEW →
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-20" />
      </div>
    </div>
  )
}
