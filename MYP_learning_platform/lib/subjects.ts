// Subjects a teacher can say they teach. Drives which free resources are
// offered for assigning. Keep `slug` equal to the paper-id prefix
// (data/launched-papers.ts) and, where a topic bank exists, the practice route.

export interface TeachSubject {
  slug: string
  label: string
  icon: string
  /** Has a topic-wise practice bank (/practice/<slug>/topic/...). */
  topicBank: boolean
}

export const TEACH_SUBJECTS: TeachSubject[] = [
  { slug: 'physics', label: 'Physics', icon: '⚛️', topicBank: true },
  { slug: 'chemistry', label: 'Chemistry', icon: '🧪', topicBank: true },
  { slug: 'biology', label: 'Biology', icon: '🧬', topicBank: true },
  { slug: 'design', label: 'Design', icon: '📐', topicBank: false },
  { slug: 'humanities', label: 'Humanities', icon: '🏛️', topicBank: false },
  { slug: 'geography', label: 'Geography', icon: '🌍', topicBank: false },
]

export const subjectLabel = (slug: string) => TEACH_SUBJECTS.find((s) => s.slug === slug)?.label ?? slug

/** 'physics-may-2016-v2' -> 'May 2016 · Variant 2' */
export function paperTitle(id: string): string {
  const m = id.match(/^([a-z]+)-(may|nov)-(\d{4})(?:-v(\d))?$/)
  if (!m) return id
  return `${m[2] === 'may' ? 'May' : 'November'} ${m[3]}${m[4] ? ` · Variant ${m[4]}` : ''}`
}

export function paperSubject(id: string): string {
  return id.split('-')[0]
}

/** Where a student opens an assignment. */
export function assignmentHref(kind: string, subject: string, ref: string): string {
  return kind === 'paper' ? `/exam/${ref}` : `/practice/${subject}/topic/${encodeURIComponent(ref)}`
}
