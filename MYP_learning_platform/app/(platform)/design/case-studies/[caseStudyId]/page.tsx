import { notFound } from 'next/navigation'
import CaseStudyWorkspace from '@/components/design/CaseStudyWorkspace'
import { getCaseStudy } from '@/data/design/caseStudies'

export default function CaseStudyPage({ params }: { params: { caseStudyId: string } }) {
  const caseStudy = getCaseStudy(params.caseStudyId)
  if (!caseStudy) notFound()
  return <CaseStudyWorkspace caseStudy={caseStudy} />
}
