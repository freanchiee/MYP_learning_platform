import SubjectHub from '@/components/practice/SubjectHub'
import { BIOLOGY_BANK } from '@/data/practice/biology-bank'

export default function BioPapersPage() {
  return (
    <SubjectHub
      subject="Biology"
      subjectSlug="biology"
      color={{ from: '#0d2e1a', via: '#1e6640', to: '#2d9e5f' }}
      examHref="/bio-papers/exams"
      questionCount={BIOLOGY_BANK.length}
    />
  )
}
