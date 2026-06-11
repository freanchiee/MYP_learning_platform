import SubjectHub from '@/components/practice/SubjectHub'
import { PHYSICS_BANK } from '@/data/practice/physics-bank'

export default function PhysicsPapersPage() {
  return (
    <SubjectHub
      subject="Physics"
      subjectSlug="physics"
      color={{ from: '#050d25', via: '#0d2050', to: '#1a3d8a' }}
      examHref="/physics-papers/exams"
      questionCount={PHYSICS_BANK.length}
    />
  )
}
