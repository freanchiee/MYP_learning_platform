import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Attempt, QuestionGradeResult } from '@/lib/types'
import { formatTime } from '@/lib/utils'
import { QuestionAccordion } from '@/components/results/QuestionAccordion'

// ── Badge definitions ─────────────────────────────────────────────────────────
const BADGE_DEFS: Record<string, { name: string; icon: string; rarity: string }> = {
  'first-attempt':      { name: 'First Steps',       icon: '🚀', rarity: 'common' },
  'hookes-hero':        { name: "Hooke's Hero",       icon: '🧲', rarity: 'rare' },
  'circuit-master':     { name: 'Circuit Master',     icon: '⚡', rarity: 'rare' },
  'nuclear-expert':     { name: 'Nuclear Expert',     icon: '☢️', rarity: 'epic' },
  'data-detective':     { name: 'Data Detective',     icon: '📊', rarity: 'rare' },
  'no-hint-hero':       { name: 'No-Hint Hero',       icon: '🎯', rarity: 'epic' },
  'speed-demon':        { name: 'Speed Demon',         icon: '⏱️', rarity: 'rare' },
  'ethical-thinker':    { name: 'Ethical Thinker',    icon: '🌍', rarity: 'rare' },
  'physics-ace':        { name: 'Physics Ace',         icon: '🏆', rarity: 'legendary' },
  'criterion-a-master': { name: 'Criterion A Master', icon: '⭐', rarity: 'epic' },
}

// ── MYP Grade colors ──────────────────────────────────────────────────────────
function mypGradeClasses(grade: number | null): string {
  switch (grade) {
    case 7: return 'bg-emerald-800 text-emerald-200'
    case 6: return 'bg-green-700 text-green-100'
    case 5: return 'bg-blue-800 text-blue-200'
    case 4: return 'bg-orange-700 text-orange-100'
    case 3: return 'bg-red-800 text-red-200'
    case 2: return 'bg-purple-800 text-purple-200'
    case 1: return 'bg-gray-800 text-gray-300'
    default: return 'bg-gray-700 text-gray-300'
  }
}

// ── Criterion colors ──────────────────────────────────────────────────────────
const CRITERION_META: Record<
  string,
  { label: string; color: string; bg: string; bar: string }
> = {
  A: { label: 'Criterion A — Knowing & Understanding',    color: '#0079a8', bg: 'rgba(0,121,168,0.12)', bar: '#0079a8' },
  B: { label: 'Criterion B — Inquiring & Designing',      color: '#3daa35', bg: 'rgba(61,170,53,0.12)', bar: '#3daa35' },
  C: { label: 'Criterion C — Processing & Evaluating',    color: '#f5a623', bg: 'rgba(245,166,35,0.12)', bar: '#f5a623' },
  D: { label: 'Criterion D — Reflecting on the Impacts',  color: '#7b2d8b', bg: 'rgba(123,45,139,0.12)', bar: '#7b2d8b' },
}

// ── Attempt type fetched from DB ──────────────────────────────────────────────
type AttemptRow = Pick<
  Attempt,
  | 'id'
  | 'user_id'
  | 'paper_id'
  | 'scores'
  | 'total_score'
  | 'max_score'
  | 'myp_grade'
  | 'criterion_scores'
  | 'time_taken'
  | 'xp_earned'
  | 'badges_earned'
  | 'status'
  | 'completed_at'
>

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ResultsPage({
  params,
}: {
  params: { attemptId: string }
}) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) redirect('/login')

  const { data: attempt } = await supabase
    .from('attempts')
    .select(
      'id, user_id, paper_id, scores, total_score, max_score, myp_grade, criterion_scores, time_taken, xp_earned, badges_earned, status, completed_at'
    )
    .eq('id', params.attemptId)
    .eq('user_id', session.user.id)
    .single<AttemptRow>()

  if (!attempt) notFound()

  // Fetch profile name
  const { data: profile } = await supabase
    .from('profiles')
    .select('name, school')
    .eq('id', session.user.id)
    .single<{ name: string; school: string }>()

  const candidateName = profile?.name || session.user.email?.split('@')[0] || 'Student'
  const candidateSchool = profile?.school || ''

  // Parse scores (JSONB) — shape: Record<questionId, QuestionGradeResult>
  const scores = (attempt.scores ?? {}) as Record<string, QuestionGradeResult>
  const scoreEntries = Object.entries(scores)

  // Criterion scores
  const criterionScores = attempt.criterion_scores ?? {}

  // Badges earned this attempt
  const badgesEarned: string[] = attempt.badges_earned ?? []

  // Paper title
  const paperTitle = attempt.paper_id
    .split('-')
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  // Date
  const completedDate = attempt.completed_at
    ? new Date(attempt.completed_at).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Unknown date'

  // Total score percentage
  const totalPct =
    attempt.total_score != null && attempt.max_score != null && attempt.max_score > 0
      ? Math.round((attempt.total_score / attempt.max_score) * 100)
      : null

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ background: '#0d1b2a', color: '#e2e8f0' }}
    >
      <div className="max-w-4xl mx-auto space-y-6">

        {/* ── Top bar ── */}
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">
              Results — {paperTitle}
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              {attempt.status === 'completed' ? 'Completed' : 'In Progress'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={undefined}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
            <button
              onClick={undefined}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20 text-gray-300 hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
            >
              ← Dashboard
            </Link>
          </div>
        </div>

        {/* ── Candidate info ── */}
        <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-4 flex flex-wrap gap-4 items-center">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Candidate</p>
            <p className="text-white font-semibold">{candidateName}</p>
            {candidateSchool && <p className="text-gray-400 text-xs">{candidateSchool}</p>}
          </div>
          <div className="border-l border-white/10 pl-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Date</p>
            <p className="text-white font-semibold">{completedDate}</p>
          </div>
          <div className="border-l border-white/10 pl-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Time Taken</p>
            <p className="text-white font-semibold">
              {attempt.time_taken != null ? formatTime(attempt.time_taken) : '—'}
            </p>
          </div>
        </div>

        {/* ── Summary row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Total score */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">
              Total Score
            </span>
            <span className="text-3xl font-extrabold text-white">
              {attempt.total_score ?? '—'}
              <span className="text-lg text-gray-400">/{attempt.max_score ?? '—'}</span>
            </span>
            {totalPct !== null && (
              <span className="text-sm font-medium text-gray-300 mt-1">{totalPct}%</span>
            )}
          </div>

          {/* MYP Grade */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">
              MYP Grade
            </span>
            <span
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-extrabold mt-1 ${mypGradeClasses(attempt.myp_grade)}`}
            >
              {attempt.myp_grade ?? '—'}
            </span>
          </div>

          {/* XP Earned */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">
              XP Earned
            </span>
            <span className="text-3xl font-extrabold text-[#3daa35]">
              +{attempt.xp_earned}
            </span>
            <span className="text-xs text-gray-400 mt-1">experience points</span>
          </div>

          {/* Time taken */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">
              Time Taken
            </span>
            <span className="text-3xl font-extrabold text-[#0079a8]">
              {attempt.time_taken != null ? formatTime(attempt.time_taken) : '—'}
            </span>
          </div>
        </div>

        {/* ── Criterion score cards ── */}
        <div>
          <h2 className="text-base font-bold text-white mb-3">Criterion Breakdown</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(['A', 'B', 'C', 'D'] as const).map((crit) => {
              const meta = CRITERION_META[crit]
              const cs = criterionScores[crit]
              const score = cs?.score ?? null
              const max   = cs?.max   ?? null
              const pct   = score != null && max != null && max > 0
                ? Math.round((score / max) * 100)
                : null

              return (
                <div
                  key={crit}
                  className="rounded-xl p-4 border border-white/10"
                  style={{ background: meta.bg }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-extrabold text-white"
                      style={{ background: meta.color }}
                    >
                      {crit}
                    </span>
                    <span className="text-xs text-gray-300 leading-tight">
                      {meta.label.split(' — ')[1]}
                    </span>
                  </div>

                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: meta.color }}
                    >
                      {score ?? '—'}
                    </span>
                    {max != null && (
                      <span className="text-sm text-gray-400 mb-0.5">/{max}</span>
                    )}
                  </div>

                  {/* Percentage bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct ?? 0}%`,
                        background: meta.bar,
                      }}
                    />
                  </div>
                  {pct !== null && (
                    <p className="text-xs text-gray-400 mt-1 text-right">{pct}%</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Badges earned ── */}
        {badgesEarned.length > 0 && (
          <div>
            <h2 className="text-base font-bold text-white mb-3">
              🎉 Badges Earned This Attempt
            </h2>
            <div className="flex flex-wrap gap-4">
              {badgesEarned.map((badgeId) => {
                const def = BADGE_DEFS[badgeId]
                if (!def) return null
                return (
                  <div
                    key={badgeId}
                    className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 animate-pulse-once"
                  >
                    <span className="text-3xl">{def.icon}</span>
                    <span className="text-xs font-semibold text-gray-200">{def.name}</span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                        def.rarity === 'legendary'
                          ? 'bg-amber-900/50 text-amber-300'
                          : def.rarity === 'epic'
                          ? 'bg-purple-900/50 text-purple-300'
                          : def.rarity === 'rare'
                          ? 'bg-blue-900/50 text-blue-300'
                          : 'bg-gray-700 text-gray-400'
                      }`}
                    >
                      {def.rarity}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── Per-question breakdown ── */}
        <div>
          <h2 className="text-base font-bold text-white mb-3">Question Breakdown</h2>
          <div className="space-y-2">
            {scoreEntries.length === 0 ? (
              <div className="rounded-xl bg-white/5 border border-white/10 px-6 py-8 text-center text-gray-400 text-sm">
                No question breakdown available.
              </div>
            ) : (
              scoreEntries.map(([questionId, gradeResult], idx) => {
                // Build a minimal Question-shaped object from the score data
                // The actual question object may not be available server-side without
                // loading the paper data — we build a stub from the grade result.
                const stubQuestion = {
                  id: parseInt(questionId, 10) || idx,
                  crit: (gradeResult as QuestionGradeResult & { crit?: string }).crit ?? 'A',
                  type: 'extended' as const,
                  topic: (gradeResult as QuestionGradeResult & { topic?: string }).topic ?? `Question ${idx + 1}`,
                  marks: gradeResult.totalAvailable,
                }

                return (
                  <QuestionAccordion
                    key={questionId}
                    question={stubQuestion as Parameters<typeof QuestionAccordion>[0]['question']}
                    gradeResult={gradeResult}
                    questionIndex={idx}
                  />
                )
              })
            )}
          </div>
        </div>

        {/* ── Practice Again ── */}
        <div className="flex justify-center py-4">
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #003b5c, #0079a8)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Practice Again
          </Link>
        </div>
      </div>
    </div>
  )
}
