import type { Metadata } from 'next'
import LegalShell, { Field, Section } from '@/components/legal/LegalShell'
import { OPERATOR, PROCESSORS } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'What personal data CritABCD collects from students and teachers, who can see it, where it is stored and how to ask for it to be corrected or deleted.',
  alternates: { canonical: '/privacy' },
}

const rows: [string, string][] = [
  ['The student', 'Their own answers, points, grades and teacher feedback.'],
  ['Classmates in the same live session', 'Name, points, avatar and which stage you are on (the roster and leaderboard). Never answers, drafts, grades, photos or private messages.'],
  ['The teacher who runs the session, and the teacher of the class it belongs to', 'Everything the student does in that session: answers, drafts as they type, whether the browser tab is in front, points, grades, uploaded photos and private messages.'],
  ['The operator of CritABCD', 'Everything in the database, as the administrator of the service. Used only to run, secure and fix the service, and to act on a request from a student, parent, teacher or school.'],
  ['Other signed-in users', 'Nothing. Access is limited to the people above by rules in the database itself.'],
]

export default function PrivacyPage() {
  const o = OPERATOR
  return (
    <LegalShell
      title="Privacy policy"
      intro="CritABCD is a learning site for the IB Middle Years Programme. This page says what we collect, who can see it, where it is kept and what you can ask us to do. It is written to be read by students, parents and teachers."
    >
      <Section title="1. Who is responsible">
        <p>
          CritABCD is operated by <Field value={o.name} />{o.tradingName ? <> (trading as {o.tradingName})</> : null}, <Field value={o.street} />, <Field value={o.city} />, <Field value={o.country} />. Contact for anything in this policy: <Field value={o.email} />. See also the <a href="/impressum" style={{ textDecoration: 'underline' }}>Impressum</a>.
        </p>
        <p>When a teacher uses CritABCD with a class, the school and teacher decide to do so and are responsible for telling parents and for any consent the school needs. We provide the service for that purpose only and are willing to sign a data processing agreement with a school.</p>
      </Section>

      <Section title="2. What we collect">
        <p><strong>Account.</strong> Name and email address (from your Google account or typed by you), whether you said you are a teacher or a student, and optionally your school. We do not store passwords: sign-in is by Google or by a one-time code sent to your email.</p>
        <p><strong>In a class or live activity.</strong> Your answers and drafts, points and badges, whether the activity tab is in front or switched away and how many times it was switched, your grades and teacher feedback, photos or sketches you choose to upload, and private messages between you and your teacher. A cartoon avatar is generated from an internal id; it is not a photo of you.</p>
        <p><strong>Optional mailing list.</strong> If a parent, guardian or teacher leaves an email address in a sign-up form, we keep that address with the choices they ticked. Students under 16 are asked to have a parent or guardian do this.</p>
        <p><strong>Technical.</strong> A sign-in session cookie, a copy of your unsent answers in your own browser so nothing is lost, and anonymous page-view statistics. There is no advertising and no tracking across other sites.</p>
      </Section>

      <Section title="3. Why we use it">
        <p>To let students and teachers run and complete classroom activities, to show a teacher how a class is doing so they can help and grade, to keep your work safe, and to keep the service secure. We do not sell personal data and we do not use students’ work or messages for advertising.</p>
      </Section>

      <Section title="4. Who can see what">
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
          <table className="w-full text-left text-sm" style={{ background: 'var(--surface-elevated)', color: 'var(--text)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="p-3">Who</th>
                <th className="p-3">What they can see</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([who, what]) => (
                <tr key={who} style={{ borderBottom: '1px solid var(--border)' }}>
                  <th className="p-3 align-top font-semibold" scope="row">{who}</th>
                  <td className="p-3" style={{ color: 'var(--text-muted)' }}>{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Anyone who is given a session’s join code can join that session and will then appear on its roster, which is how students join a live class.</p>
      </Section>

      <Section title="5. Private messages">
        <p>A teacher who runs a session can send a private message to any student in it, and the student can reply. Only that teacher and that student can read the thread, and the operator can as administrator. Messages are stored with the rest of the session, are not scanned automatically and are not sent to any other service. They are kept until the session data is deleted (see section 8). Students cannot message each other.</p>
      </Section>

      <Section title="6. Photos and sketches">
        <p>Uploaded images are kept in private storage. They can be opened only by the student who uploaded them, the teacher who ran the session and the teacher of the class, through links that expire after an hour. Please do not upload photos of faces or of anything private.</p>
      </Section>

      <Section title="7. AI features">
        <p>Some activities let a student interview a fictional character, written by us, with replies produced by an AI language model run by Groq. Only the question the student typed, the earlier turns of that conversation and the character’s description are sent; the student’s name, email and class are not. The characters are made-up and what they say is not evidence.</p>
        <p>The writing coach that highlights key words and shows a level runs entirely in the student’s own browser. The text being checked is not sent to us or to anyone else.</p>
      </Section>

      <Section title="8. How long we keep it">
        <p>We keep account, class and live-activity data until the account holder, the school or a parent asks us to delete it, or for 12 months after the account was last used, whichever comes first; accounts unused for 12 months are reviewed and deleted at least once a year. A student can delete their own account and everything they did in classes at any time in Settings, under “Delete my data”, and it is removed straight away. We will act on any other deletion request within 30 days, and sooner for a school ending its use of the service. Teacher accounts are deleted on request, because deleting one also removes that teacher’s classes and sessions. Backups are overwritten on the provider’s normal cycle. Email addresses given in a mailing-list form are kept separately and removed on request.</p>
      </Section>

      <Section title="9. Where it is stored, and our service providers">
        <ul className="list-disc space-y-1 pl-5">
          {PROCESSORS.map((p) => (
            <li key={p.name}>
              <strong>{p.name}</strong>: {p.what}. Location: {p.where}.
            </li>
          ))}
        </ul>
        <p>Some of these providers are outside the European Economic Area. We use them under their own data protection terms and give them only what they need for the purpose above.</p>
      </Section>

      <Section title="10. Children">
        <p>CritABCD is designed for students of the IB Middle Years Programme, roughly ages 11 to 16, who use it because their teacher asked them to. We do not run advertising to children and we do not ask students for more than the above. A parent or guardian can ask to see, correct or delete their child’s data at any time by writing to {o.email ?? 'the contact address above'}.</p>
      </Section>

      <Section title="11. Your rights">
        <p>You can ask to see the data we hold about you, to have it corrected or deleted, to restrict or object to how it is used, and to receive a copy. You can also complain to your data protection authority. To use any of these rights, write to <Field value={o.email} />; we will answer within 30 days. A student can also delete their own data in Settings (see section 8). If you are a student, you can ask your teacher or your school to contact us for you.</p>
      </Section>

      <Section title="12. Changes">
        <p>If we change this policy in a way that matters, we will update the date at the top and tell the teachers who use the service.</p>
      </Section>
    </LegalShell>
  )
}
