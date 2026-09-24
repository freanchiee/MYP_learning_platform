// "Interest" lead capture: a visitor leaves an email and ticks the MYP subjects
// and experiences they care about. Separate from the 1:1 tutoring form
// (lib/tutoring.ts) — this one is "keep me posted / let me try", the other is
// "I want help". Shared by the form, the API route and the admin view.

/** Bump whenever INTEREST_CONSENT_TEXT changes — stored with each lead. */
export const INTEREST_CONSENT_VERSION = 'interest-2026-09-v1'

export const INTEREST_CONSENT_TEXT =
  'I agree that CritABCD may store my email and the choices I made here and contact me about them. I can unsubscribe or ask for my details to be deleted at any time.'

export const INTEREST_SUBJECTS = ['MYP Physics', 'MYP Chemistry', 'MYP Biology', 'MYP Humanities', 'MYP Geography', 'MYP Design'] as const

export const INTEREST_EXPERIENCES = [
  'Past papers & AI-graded practice',
  'Live classes for teachers (Gameducation)',
  'Free interactive resources',
  '1:1 tutoring',
] as const

export const ALL_INTERESTS: readonly string[] = [...INTEREST_SUBJECTS, ...INTEREST_EXPERIENCES]

/** Same wording and options as the tutoring form (students under 16 are asked to have a parent or guardian submit). */
export const INTEREST_ROLES = [
  { value: 'parent', label: 'A parent or guardian' },
  { value: 'student_16plus', label: 'A student aged 16 or older' },
  { value: 'teacher', label: 'A teacher or school' },
] as const

export const INTEREST_STATUSES = ['new', 'contacted', 'converted', 'declined'] as const
export type InterestStatus = (typeof INTEREST_STATUSES)[number]

export interface InterestLead {
  id: string
  created_at: string
  user_id: string | null
  role: string
  name: string | null
  email: string
  interests: string[]
  source_page: string | null
  consent: boolean
  consent_version: string
  status: InterestStatus
  admin_note: string | null
}

const GUIDE_SLUG_TO_INTEREST: Record<string, string> = {
  physics: 'MYP Physics',
  chemistry: 'MYP Chemistry',
  biology: 'MYP Biology',
  humanities: 'MYP Humanities',
  geography: 'MYP Geography',
  design: 'MYP Design',
}

const TAG_TO_INTEREST: Record<string, string> = {
  Physics: 'MYP Physics',
  Chemistry: 'MYP Chemistry',
  Biology: 'MYP Biology',
  Design: 'MYP Design',
  Geography: 'MYP Geography',
  Humanities: 'MYP Humanities',
}

/** Pre-tick the subject a visitor is already reading about. */
export const interestsForGuide = (slug: string): string[] => (GUIDE_SLUG_TO_INTEREST[slug] ? [GUIDE_SLUG_TO_INTEREST[slug]] : [])
export const interestsForTags = (tags: string[]): string[] => Array.from(new Set(tags.map((t) => TAG_TO_INTEREST[t]).filter(Boolean)))
