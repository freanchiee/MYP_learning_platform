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
  A: { label: 'Knowing & Understanding', color: '#0079a8', bg: 'rgba(0,121,168,0.12)' },
  B: { label: 'Inquiring & Designing',   color: '#3daa35', bg: 'rgba(61,170,53,0.12)' },
  C: { label: 'Processing & Evaluating', color: '#f5a623', bg: 'rgba(245,166,35,0.12)' },
  D: { label: 'Reflecting on Impacts',   color: '#7b2d8b', bg: 'rgba(123,45,139,0.12)' },
}

function mypGradeColor(grade: number): string {
  if (grade >= 7) return '#3daa35'
  if (grade >= 5) return '#0079a8'
  if (grade >= 4) return '#f5a623'
  return '#c3282d'
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
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0d1b2a', color: '#e2e8f0' }}>
        <p className="text-gray-400 mb-6">Practice results are no longer available (session ended).</p>
        <Link href="/dashboard" className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: '#1f3674' }}>
          ← Dashboard
        </Link>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0d1b2a' }}>
        <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white animate-spin" />
      </div>
    )
  }

  const { results, paperId, questions } = data
  const { title, backHref } = derivePracticeLabel(paperId)
  const totalPct = results.maxScore > 0
    ? Math.round((results.totalScore / results.maxScore) * 100)
    : 0

  return (
    <div className="min-h-screen py-8 px-4" style={{ background: '#0d1b2a', color: '#e2e8f0' }}>
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <p className="text-sm text-gray-400 mt-0.5">Practice Session — AI Marked</p>
          </div>
          <Link
            href={backHref}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
          >
            ← Back to Practice
          </Link>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Total score */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Total Score</span>
            <span className="text-3xl font-extrabold text-white">
              {results.totalScore}
              <span className="text-lg text-gray-400">/{results.maxScore}</span>
            </span>
            <span className="text-sm font-medium text-gray-300 mt-1">{totalPct}%</span>
          </div>

          {/* MYP Grade */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">MYP Grade</span>
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-extrabold mt-1 text-white"
              style={{ background: mypGradeColor(results.mypGrade) }}
            >
              {results.mypGrade}
            </motion.div>
            <span className="text-xs text-gray-400 mt-1">{results.mypLabel}</span>
          </div>

          {/* XP */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">XP Earned</span>
            <span className="text-3xl font-extrabold" style={{ color: '#3daa35' }}>
              +{results.xpEarned}
            </span>
            <span className="text-xs text-gray-400 mt-1">experience points</span>
          </div>
        </div>

        {/* Criterion breakdown */}
        <div>
          <h2 className="text-base font-bold text-white mb-3">Criterion Breakdown</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(['A', 'B', 'C', 'D'] as const).map((crit) => {
              const meta = CRITERION_META[crit]
              const cs = results.criterionScores[crit]
              const score = cs?.score ?? null
              const max = cs?.max ?? null
              const pct = score != null && max != null && max > 0 ? Math.round((score / max) * 100) : null
              return (
                <div key={crit} className="rounded-xl p-4 border border-white/10" style={{ background: meta.bg }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-extrabold text-white"
                      style={{ background: meta.color }}
                    >
                      {crit}
                    </span>
                    <span className="text-xs text-gray-300 leading-tight">{meta.label}</span>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-2xl font-extrabold" style={{ color: meta.color }}>
                      {score ?? '—'}
                    </span>
                    {max != null && <span className="text-sm text-gray-400 mb-0.5">/{max}</span>}
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: meta.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct ?? 0}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
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

        {/* Question breakdown */}
        <div>
          <h2 className="text-base font-bold text-white mb-3">Question Breakdown</h2>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            ← Back to Practice
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #1f3674, #274e68)' }}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
