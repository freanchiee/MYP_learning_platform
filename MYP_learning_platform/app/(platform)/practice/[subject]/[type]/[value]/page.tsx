import { notFound } from 'next/navigation'
import ExamShell from '@/components/exam/ExamShell'
import { BIOLOGY_BANK } from '@/data/practice/biology-bank'
import { CHEMISTRY_BANK } from '@/data/practice/chemistry-bank'
import { PHYSICS_BANK } from '@/data/practice/physics-bank'
import type { Question } from '@/lib/types'

interface PageProps {
  params: { subject: string; type: string; value: string }
}

function filterBank(subject: string, type: string, value: string): Question[] | null {
  let bank: Question[] | null = null
  if (subject === 'biology') bank = BIOLOGY_BANK
  if (subject === 'chemistry') bank = CHEMISTRY_BANK
  if (subject === 'physics') bank = PHYSICS_BANK
  if (!bank) return null

  const decoded = decodeURIComponent(value)
  if (type === 'crit') return bank.filter(q => q.crit === decoded.toUpperCase())
  if (type === 'topic') return bank.filter(q => q.topicCanonical === decoded)
  return null
}

export default function PracticeExamPage({ params }: PageProps) {
  const { subject, type, value } = params
  const questions = filterBank(subject, type, value)
  if (!questions || questions.length === 0) notFound()

  const practiceId = `practice-${subject}-${type}-${value}`

  return (
    <ExamShell
      questions={questions}
      paperId={practiceId}
    />
  )
}
