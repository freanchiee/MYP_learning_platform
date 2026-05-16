import { questions } from '@/data/papers/physics-nov-2023/questions'
import ExamShell from '@/components/exam/ExamShell'

interface PageProps {
  params: { paperId: string }
}

export default function ExamPage({ params }: PageProps) {
  const { paperId } = params
  // Currently hardcoded to physics-nov-2023; extend routing here when more papers added
  return <ExamShell questions={questions} paperId={paperId} />
}
