'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { QuestionAccordion } from '@/components/results/QuestionAccordion'
import type { Question, QuestionGradeResult } from '@/lib/types'
import type { GradeResults } from '@/components/exam/ExamShell'

interface StoredPracticeData {
  results: GradeResults
  paperId: string
  questions: Question[]
}

interface LocalResultsPageProps {
  attemptId: string
}

const CRITERION_META: Record<string, { label: string; color: string; bg: string }> = {
  A: { label: 'Knowing & Understanding', color: 'var(--cA)', bg: 'color-mix(in srgb, var(--cA) 12%, transparent)' },
  B: { label: 'Inquiring & Designing',   color: 'var(--cB)', bg: 'color-mix(in srgb, var(--cB) 12%, transparent)' },
  C: { label: 'Processing & Evaluating', color: 'var(--cC)', bg: 'color-mix(in srgb, var(--cC) 12%, transparent)' },
  D: { label: 'Reflecting on Impacts',   color: 'var(--cD)', bg: 'color-mix(in srgb, var(--cD) 12%, transparent)' },
}

function mypGradeColor(grade: number): string {
  if (grade >= 7) return 'var(--success)'
  if (grade >= 5) return 'var(--accent-2)'
  if (grade >= 4) return 'var(--warning)'
  return 'var(--danger)'
}

function derivePracticeLabel(paperId: string): { title: string; backHref: string } {
  // paperId format: practice-{subject}-{type}-{value}
  const parts = paperId.split('-')
  if (parts[0] !== 'practice') {
    return { title: paperId, backHref: '/dashboard' }
  }
  const subject = parts[1] ?? 'biology'
  const type = parts[2] ?? 'topic'
  const value = parts.slice(3).join('-')
  const subjectLabel = subject.charAt(0).toUpperCase() + subject.slice(1)
  if (type === 'crit') {
    return {
      title: `${subjectLabel} — Criterion ${value.toUpperCase()} Practice`,
      backHref: `/practice/${subject}/crit`,
    }
  }
  return {
    title: `${subjectLabel} — ${decodeURIComponent(value)} Practice`,
    backHref: `/practice/${subject}/topic`,
  }
}

export default function LocalResultsPage({ attemptId }: LocalResultsPageProps) {
  const [data, setData] = useState<StoredPracticeData | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    const raw = sessionStorage.getItem(`practice-${attemptId}`)
    if (!raw) { setMissing(true); return }
    try {
      setData(JSON.parse(raw) as StoredPracticeData)
    } catch {
      setMissing(true)
    }
  }, [attemptId])

  if (missing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', color: 'var(--text)' }}>
        <p className="text-ink-subtle mb-6">Practice results are no longer available (session ended).</p>
        <Link href="/dashboard" className="px-6 py-2.5 rounded-xl text-sm font-semibold" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
          ← Dashboard
        </Link>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)' }}>
        <div className="w-6 h-6 rounded-full border-2 animate-spin" style={{ borderColor: 'var(--border)', borderTopColor: 'var(--accent)' }} />
      </div>
    )
  }

  const { results, paperId, questions } = data
  const { title, backHref } = derivePracticeLabel(paperId)

  // Criterion labels differ by subject group: I&S (geography/history/humanities) vs Sciences.
  const critLabels: Record<string, string> = ['geography', 'history', 'humanities'].includes((paperId ?? '').split('-')[0])
    ? { A: 'Knowing & Understanding', B: 'Investigating', C: 'Communicating', D: 'Thinking Critically' }
    : { A: CRITERION_META.A.label, B: CRITERION_META.B.label, C: CRITERION_META.C.label, D: CRITERION_META.D.label }
  const totalPct = results.maxScore > 0
    ? Math.round((results.totalScore / results.maxScore) * 100)
    : 0

  return (
    <div className="min-h-screen py-8 px-4" style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', color: 'var(--text)' }}>
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div>
            <h1 className="text-xl font-bold text-ink">{title}</h1>
            <p className="text-sm text-ink-subtle mt-0.5">Practice Session — AI Marked</p>
          </div>
          <Link
            href={backHref}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-control text-xs font-semibold bg-surface-2 hover:bg-surface-3 text-ink-muted transition-colors border border-line"
          >
            ← Back to Practice
          </Link>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Total score */}
          <div className="bg-surface border border-line rounded-card p-4 flex flex-col items-center text-center shadow-card">
            <span className="text-xs text-ink-subtle uppercase tracking-wide font-semibold mb-1">Total Score</span>
            <span className="text-3xl font-extrabold text-ink">
              {results.totalScore}
              <span className="text-lg text-ink-subtle">/{results.maxScore}</span>
            </span>
            <span className="text-sm font-medium text-ink-muted mt-1">{totalPct}%</span>
          </div>

          {/* MYP Grade */}
          <div className="bg-surface border border-line rounded-card p-4 flex flex-col items-center text-center shadow-card">
            <span className="text-xs text-ink-subtle uppercase tracking-wide font-semibold mb-1">MYP Grade</span>
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-extrabold mt-1"
              style={{ background: mypGradeColor(results.mypGrade), color: 'var(--text-on-accent)' }}
            >
              {results.mypGrade}
            </motion.div>
            <span className="text-xs text-ink-subtle mt-1">{results.mypLabel}</span>
          </div>

          {/* XP */}
          <div className="bg-surface border border-line rounded-card p-4 flex flex-col items-center text-center shadow-card">
            <span className="text-xs text-ink-subtle uppercase tracking-wide font-semibold mb-1">XP Earned</span>
            <span className="text-3xl font-extrabold" style={{ color: 'var(--success)' }}>
              +{results.xpEarned}
            </span>
            <span className="text-xs text-ink-subtle mt-1">experience points</span>
          </div>
        </div>

        {/* Criterion breakdown */}
        <div>
          <h2 className="text-base font-bold text-ink mb-3">Criterion Breakdown</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(['A', 'B', 'C', 'D'] as const).map((crit) => {
              const meta = CRITERION_META[crit]
              const cs = results.criterionScores[crit]
              const score = cs?.score ?? null
              const max = cs?.max ?? null
              const pct = score != null && max != null && max > 0 ? Math.round((score / max) * 100) : null
              return (
                <div key={crit} className="rounded-card p-4 border border-line" style={{ background: meta.bg }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-7 h-7 rounded-control flex items-center justify-center text-sm font-extrabold"
                      style={{ background: meta.color, color: 'var(--criterion-fg)' }}
                    >
                      {crit}
                    </span>
                    <span className="text-xs text-ink-muted leading-tight">{critLabels[crit]}</span>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-2xl font-extrabold" style={{ color: meta.color }}>
                      {score ?? '—'}
                    </span>
                    {max != null && <span className="text-sm text-ink-subtle mb-0.5">/{max}</span>}
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface-3)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: meta.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct ?? 0}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                  {pct !== null && (
                    <p className="text-xs text-ink-subtle mt-1 text-right">{pct}%</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Question breakdown */}
        <div>
          <h2 className="text-base font-bold text-ink mb-3">Question Breakdown</h2>
          <div className="space-y-2">
            {questions.map((q, idx) => {
              const gradeResult = results.grades[q.id] as QuestionGradeResult | undefined
              if (!gradeResult) return null
              return (
                <QuestionAccordion
                  key={q.id}
                  question={q}
                  gradeResult={gradeResult}
                  questionIndex={idx}
                />
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 py-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-card text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            ← Back to Practice
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-card text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
