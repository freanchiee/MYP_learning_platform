import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Profile, UserBadge, Attempt } from '@/lib/types'
import DashboardStats, { XPBar } from '@/components/dashboard/DashboardStats'

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
    case 'common':    return { border: 'border-gray-300',   bg: 'bg-gray-50',      label: 'text-gray-500',  text: 'Common' }
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
  if (!session) redirect('/login')

  // Parallel fetches
  const [profileRes, badgesRes, attemptsRes] = await Promise.all([
    supabase
      .from('profiles')
      .select('name, school, xp, level, streak_days')
      .eq('id', session.user.id)
      .single<Pick<Profile, 'name' | 'school' | 'xp' | 'level' | 'streak_days'>>(),

    supabase
      .from('user_badges')
      .select('badge_id, earned_at')
      .eq('user_id', session.user.id)
      .order('earned_at', { ascending: false }),

    supabase
      .from('attempts')
      .select('id, paper_id, total_score, max_score, myp_grade, xp_earned, completed_at')
      .eq('user_id', session.user.id)
      .eq('status', 'completed')
      .order('completed_at', { ascending: false })
      .limit(5),
  ])

  const profile = profileRes.data
  const badges: Pick<UserBadge, 'badge_id' | 'earned_at'>[] = badgesRes.data ?? []
  const attempts: Pick<Attempt, 'id' | 'paper_id' | 'total_score' | 'max_score' | 'myp_grade' | 'xp_earned' | 'completed_at'>[] = attemptsRes.data ?? []

  const name         = profile?.name || session.user.email?.split('@')[0] || 'Student'
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
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

      {/* ── Welcome card ── */}
      <section
        className="rounded-2xl p-6 md:p-8 text-white shadow-xl fade-up"
        style={{
          background: 'linear-gradient(135deg, #1f3674 0%, #274e68 60%, #547ca4 100%)',
          border: '1px solid rgba(173,241,196,0.12)',
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#adf1c4' }}>
          Good to have you back
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-1">{name}</h1>
        {school && <p className="text-sm mt-1" style={{ color: 'rgba(173,241,196,0.7)' }}>{school}</p>}
        <p className="text-sm mt-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Ready to continue your MYP Sciences journey?
        </p>
        <Link
          href="/papers"
          className="inline-block mt-5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
          style={{ background: '#c3282d', color: '#fff' }}
        >
          Browse Papers →
        </Link>
      </section>

      {/* ── Animated stats ── */}
      <section>
        <DashboardStats stats={[
          { label: 'Level',            value: level,          sub: 'current level',    color: '#1f3674', icon: '🎯' },
          { label: 'Total XP',         value: xp,             sub: 'experience points', color: '#547ca4', icon: '⭐' },
          { label: 'Day Streak',       value: streakDays,     sub: 'consecutive days',  color: '#c3282d', icon: '🔥' },
          { label: 'Papers Completed', value: papersCompleted, sub: 'completed papers', color: '#274e68', icon: '📋' },
        ]} />
      </section>

      {/* ── Animated XP bar ── */}
      <section>
        <XPBar pct={xpPct} level={level} xpInLevel={xpInLevel} xpNeeded={xpNeeded} />
      </section>

      {/* ── Badge shelf ── */}
      <section
        className="rounded-2xl p-5"
        style={{ background: '#fff', border: '1px solid rgba(31,54,116,0.09)', boxShadow: '0 2px 12px rgba(31,54,116,0.06)' }}
      >
        <h2 className="text-base font-bold mb-4" style={{ color: '#1f3674' }}>Badges Earned</h2>

        {badges.length === 0 ? (
          <div className="flex flex-col items-center py-10 text-gray-400">
            <span className="text-4xl mb-3">🏅</span>
            <p className="text-sm font-medium">No badges yet — complete your first paper!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {badges.map(({ badge_id, earned_at }) => {
              const def = BADGE_DEFS[badge_id]
              if (!def) return null
              const { border, bg, label, text } = rarityClasses(def.rarity)
              return (
                <div
                  key={badge_id}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 ${border} ${bg}`}
                >
                  <span className="text-3xl">{def.icon}</span>
                  <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                    {def.name}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wide ${label}`}>
                    {text}
                  </span>
                  <span className="text-[9px] text-gray-400">
                    {new Date(earned_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' })}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* ── Recent attempts ── */}
      <section
        className="rounded-2xl p-5"
        style={{ background: '#fff', border: '1px solid rgba(31,54,116,0.09)', boxShadow: '0 2px 12px rgba(31,54,116,0.06)' }}
      >
        <h2 className="text-base font-bold mb-4" style={{ color: '#1f3674' }}>Recent Attempts</h2>

        {attempts.length === 0 ? (
          <div className="flex flex-col items-center py-10 text-gray-400">
            <span className="text-4xl mb-3">📝</span>
            <p className="text-sm font-medium">No completed attempts yet.</p>
            <Link
              href="/papers"
              className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ background: '#1f3674' }}
            >
              Browse Papers
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Paper</th>
                  <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Score</th>
                  <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">MYP Grade</th>
                  <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">XP</th>
                  <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                  <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wide"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {attempts.map((attempt) => {
                  const scoreStr =
                    attempt.total_score != null && attempt.max_score != null
                      ? `${attempt.total_score}/${attempt.max_score}`
                      : '—'
                  const pct =
                    attempt.total_score != null && attempt.max_score != null
                      ? Math.round((attempt.total_score / attempt.max_score) * 100)
                      : null

                  return (
                    <tr key={attempt.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="py-3 px-3">
                        <span className="font-medium text-gray-800">
                          {attempt.paper_id
                            .split('-')
                            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                            .join(' ')}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="font-semibold text-gray-700">{scoreStr}</span>
                        {pct != null && (
                          <span className="ml-1 text-xs text-gray-400">({pct}%)</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {mypGradeBadge(attempt.myp_grade)}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="font-semibold text-green-600">+{attempt.xp_earned}</span>
                      </td>
                      <td className="py-3 px-3 text-center text-gray-500 text-xs">
                        {attempt.completed_at
                          ? new Date(attempt.completed_at).toLocaleDateString('en-GB', {
                              day: 'numeric', month: 'short', year: '2-digit',
                            })
                          : '—'}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Link
                          href={`/results/${attempt.id}`}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-80"
                          style={{ background: '#1f3674' }}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
