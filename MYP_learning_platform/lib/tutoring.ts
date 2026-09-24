// Shared by the /tutoring page, its form, the API route that saves leads, and
// the admin view. Change the wording here, not in each place.

/** Bump this whenever TUTORING_CONSENT_TEXT changes — it is stored with each
 *  lead so you can always tell which wording a person agreed to. */
export const TUTORING_CONSENT_VERSION = '2026-09-v1'

export const TUTORING_CONSENT_TEXT =
  'I agree that CritABCD may store the details I have entered and contact me about tutoring. I can ask for them to be deleted at any time.'

// What the public page says. Only put things here that are TRUE — these appear
// on a public page. `credentialLine` is left empty on purpose: add a sentence
// about your own experience (e.g. that you are a practising IB teacher or
// examiner) only if it is accurate and you are happy to state it publicly.
export const TUTORING_COPY = {
  headline: 'One-to-one help for IB students',
  intro:
    'Stuck on a criterion, a topic, or an assessment? Tell me what you need and I will reply personally to say whether I can help and what a first session could look like.',
  credentialLine: '',
}

/** Who is filling in the form. Students under 16 are handled separately in the
 *  form (a parent or guardian is asked to submit instead) and never reach the API. */
export const SUBMITTED_BY_OPTIONS = [
  { value: 'parent', label: 'A parent or guardian' },
  { value: 'student_16plus', label: 'A student aged 16 or older' },
  { value: 'teacher', label: 'A teacher or school' },
] as const

export const TUTORING_SUBJECTS = ['Physics', 'Chemistry', 'Biology', 'Design', 'Mathematics', 'Individuals & Societies', 'Not sure yet']
export const TUTORING_LEVELS = ['MYP 1–3', 'MYP 4–5', 'DP Year 1', 'DP Year 2', 'Other']
export const TUTORING_EXAM_BOARDS = ['IB', 'IGCSE / GCSE', 'Other']

export const LEAD_STATUSES = ['new', 'contacted', 'booked', 'declined'] as const
export type LeadStatus = (typeof LEAD_STATUSES)[number]

export interface TutoringLead {
  id: string
  created_at: string
  user_id: string | null
  submitted_by: string
  name: string
  email: string
  subject: string
  level: string | null
  exam_board: string | null
  message: string | null
  source_page: string | null
  consent: boolean
  consent_version: string
  status: LeadStatus
  admin_note: string | null
}

export const TUTORING_FAQ: { q: string; a: string }[] = [
  {
    q: 'What happens after I send the form?',
    a: 'I read it myself and reply by email to say whether I can help and to suggest a first step. There is no automatic sign-up and no payment on this page.',
  },
  {
    q: 'What details do you keep, and for how long?',
    a: 'Only what you type into the form, plus the time you sent it and which wording of the consent box you agreed to. It is used only to reply about tutoring. Ask at any time and I will delete it.',
  },
  {
    q: 'I am under 16. Can I fill it in?',
    a: 'Please ask a parent or guardian to fill it in for you, or to send the form on your behalf. That keeps your family in control of your details.',
  },
  {
    q: 'Which subjects and levels do you help with?',
    a: 'Tell me what you need in the message box — the subject, the level (MYP or DP) and what you are stuck on — and I will reply honestly about whether it is something I can help with.',
  },
]
