// Student paper access: free resources + one free sample paper per subject,
// then a paywall. Keep this in sync with the SQL mirror in migration
// subject_paper_paywall (is_free_sample_paper) — the DB trigger on `attempts`
// is the real enforcement; this file only drives the UI (lock icons, which
// paper opens free).

export const FREE_PAPER_BY_SUBJECT: Record<string, string> = {
  physics: 'physics-practice-v1',
  biology: 'biology-may-2016',
  chemistry: 'chemistry-may-2016',
  geography: 'geography-nov-2019',
  humanities: 'humanities-nov-2019',
}

export const FREE_SAMPLE_PAPER_IDS = new Set(Object.values(FREE_PAPER_BY_SUBJECT))

export const UNLOCKABLE_SUBJECTS: { slug: string; label: string }[] = [
  { slug: 'physics', label: 'Physics' },
  { slug: 'chemistry', label: 'Chemistry' },
  { slug: 'biology', label: 'Biology' },
  { slug: 'geography', label: 'Geography' },
  { slug: 'humanities', label: 'Integrated Humanities' },
]

export const SUBJECT_UNLOCK_PRICE_EUR = 1000
/** Pay once, directly (not via interest-first) → unlock this many subjects. */
export const SUBJECTS_PER_PAYMENT = 2

export function paperSubjectSlug(paperId: string): string {
  return paperId.split('-')[0]
}
