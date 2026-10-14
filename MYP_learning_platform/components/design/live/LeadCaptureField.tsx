'use client'

import Link from 'next/link'
import InterestForm from '@/components/leads/InterestForm'
import type { WorksheetField } from '@/data/design/live/types'
import { cardStyle, btnStyle } from './ui'

/** End-of-activity "keep going" card. A student under 16 cannot sign up themselves, so the copy is
 *  written for the parent or teacher who is sitting next to them or who will see the shared link.
 *  Saves through the same /api/interest-leads route as the rest of the site, tagged with the activity,
 *  and records `{ sent: true }` on the student's row so the section shows as complete. */
export default function LeadCaptureField({
  field,
  value,
  onPersist,
}: {
  field: WorksheetField
  value: { sent?: boolean } | undefined
  onPersist: (v: { sent: boolean }) => void
}) {
  const source = field.leadSource || '/design/live'
  const tutoringSubject = (field.leadInterests || []).some((i) => /humanities|geography/i.test(i)) ? 'Individuals %26 Societies' : 'Not sure yet'
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={cardStyle('#1FA98A')}>
        <div style={{ fontWeight: 800, fontSize: 14 }}>🎓 Want to go further with this?</div>
        <p style={{ fontSize: 12.5, margin: '6px 0 10px', color: 'var(--text-muted)' }}>
          Students under 16 need a parent, guardian or teacher to leave contact details. Show this screen to them, or ask them for the next step below.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link href={`/tutoring?subject=${tutoringSubject}`} target="_blank" style={{ ...btnStyle('#1FA98A', true), fontSize: 12.5, textDecoration: 'none' }}>
            Ask about 1:1 tutoring →
          </Link>
        </div>
      </div>
      {value?.sent ? (
        <div style={cardStyle('#1FA98A')}>You are on the list ✅ Thank you.</div>
      ) : (
        <InterestForm
          sourcePage={source}
          defaultInterests={field.leadInterests || []}
          heading="Get the next free activity for your subject"
          blurb="Parents, guardians and teachers: leave an email and tick what you want. We may contact you about it, nothing is charged, and you can unsubscribe at any time."
          onSubmitted={() => onPersist({ sent: true })}
        />
      )}
    </div>
  )
}
