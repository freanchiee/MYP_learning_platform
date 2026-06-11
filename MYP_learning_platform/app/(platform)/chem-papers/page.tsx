import SubjectHub from '@/components/practice/SubjectHub'
import { CHEMISTRY_BANK } from '@/data/practice/chemistry-bank'

export default function ChemPapersPage() {
  return (
    <SubjectHub
      subject="Chemistry"
      subjectSlug="chemistry"
      color={{ from: '#0f1a00', via: '#2a4a00', to: '#3d7a00' }}
      examHref="/chem-papers/exams"
      questionCount={CHEMISTRY_BANK.length}
    />
  )
}
