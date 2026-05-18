import { notFound } from 'next/navigation'
import ExamShell from '@/components/exam/ExamShell'
import { questions as nov2023Questions, paperMeta as nov2023Meta } from '@/data/papers/physics-nov-2023/questions'
import { questions as practiceV1Questions, paperMeta as practiceV1Meta } from '@/data/papers/physics-practice-v1/questions'
import { questions as may2025Questions, paperMeta as may2025Meta } from '@/data/papers/physics-may-2025/questions'
import type { Question } from '@/lib/types'

interface PageProps {
  params: { paperId: string }
}

const PAPERS: Record<string, { questions: Question[]; meta: typeof nov2023Meta }> = {
  'physics-nov-2023': { questions: nov2023Questions, meta: nov2023Meta },
  'physics-practice-v1': { questions: practiceV1Questions, meta: practiceV1Meta },
  'physics-may-2025': { questions: may2025Questions, meta: may2025Meta },
}

export default function ExamPage({ params }: PageProps) {
  const { paperId } = params
  const paper = PAPERS[paperId]

  if (!paper) {
    notFound()
  }

  return <ExamShell questions={paper.questions} paperId={paperId} />
}
