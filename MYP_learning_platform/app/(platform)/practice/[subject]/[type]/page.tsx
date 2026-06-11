import { notFound } from 'next/navigation'
import TopicPicker from '@/components/practice/TopicPicker'
import CritPicker from '@/components/practice/CritPicker'
import { BIOLOGY_BANK } from '@/data/practice/biology-bank'
import { CHEMISTRY_BANK } from '@/data/practice/chemistry-bank'
import { PHYSICS_BANK } from '@/data/practice/physics-bank'
import type { TopicEntry } from '@/components/practice/TopicPicker'
import type { Topic, TopicGroup } from '@/lib/types'

interface PageProps {
  params: { subject: string; type: string }
}

function getBankForSubject(subject: string) {
  if (subject === 'biology') return BIOLOGY_BANK
  if (subject === 'chemistry') return CHEMISTRY_BANK
  if (subject === 'physics') return PHYSICS_BANK
  return null
}

function buildTopicEntries(bank: ReturnType<typeof getBankForSubject>): TopicEntry[] {
  if (!bank) return []
  const counts = new Map<string, { group: string; count: number }>()
  for (const q of bank) {
    if (!q.topicCanonical) continue
    const key = q.topicCanonical
    const existing = counts.get(key)
    if (existing) { existing.count++ } else {
      counts.set(key, { group: q.topicGroup ?? 'General', count: 1 })
    }
  }
  return Array.from(counts.entries())
    .map(([topicCanonical, { group, count }]) => ({ topicCanonical, topicGroup: group, count }))
    .sort((a, b) => a.topicGroup.localeCompare(b.topicGroup) || a.topicCanonical.localeCompare(b.topicCanonical))
}

function buildCritCounts(bank: ReturnType<typeof getBankForSubject>): Record<string, number> {
  if (!bank) return {}
  const counts: Record<string, number> = {}
  for (const q of bank) {
    counts[q.crit] = (counts[q.crit] ?? 0) + 1
  }
  return counts
}

export default function PracticePickerPage({ params }: PageProps) {
  const { subject, type } = params
  const bank = getBankForSubject(subject)
  if (!bank) notFound()

  const subjectSlugMap: Record<string, string> = {
    biology: 'bio',
    chemistry: 'chem',
    physics: 'physics',
  }
  const backHref = `/${subjectSlugMap[subject] ?? subject}-papers`

  if (type === 'topic') {
    const topics = buildTopicEntries(bank)
    return <TopicPicker subjectSlug={subject} topics={topics} backHref={backHref} />
  }

  if (type === 'crit') {
    const counts = buildCritCounts(bank)
    return <CritPicker subjectSlug={subject} counts={counts} backHref={backHref} />
  }

  notFound()
}
