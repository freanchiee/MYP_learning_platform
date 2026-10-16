import type { Metadata } from 'next'
import LegalShell, { Field, Section } from '@/components/legal/LegalShell'
import { OPERATOR } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'The rules for using CritABCD and Strandhoot: who it is for, what teachers and students agree to, and what we do and do not promise.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  const o = OPERATOR
  return (
    <LegalShell title="Terms of use" intro="These are the plain rules for using CritABCD, including Strandhoot live activities. By signing in or joining a class you agree to them.">
      <Section title="1. Who it is for">
        <p>CritABCD is for students and teachers of the IB Middle Years Programme and the Diploma Programme sciences. Students use it because a teacher or school asked them to. A teacher who uses it with a class is responsible for having the school’s permission and for telling parents, and for the way they run their sessions.</p>
      </Section>

      <Section title="2. Your account">
        <p>Sign in with your own account, keep it to yourself and give your real name so your teacher knows whose work it is. If you choose “teacher” when you register, you confirm that you are a teacher or are acting for a school. We may close an account that is used in ways these terms do not allow.</p>
      </Section>

      <Section title="3. Using it properly">
        <ul className="list-disc space-y-1 pl-5">
          <li>Write your own answers. Pasting text in is switched off in answer boxes on purpose.</li>
          <li>Be kind in private messages, interviews and any text other people can read.</li>
          <li>Do not upload photos of faces, other people’s work or anything private.</li>
          <li>Do not try to read other people’s data, break the service or avoid its limits.</li>
          <li>Teachers: use private messages and student data only to teach and support your students.</li>
        </ul>
      </Section>

      <Section title="4. AI characters and the writing coach">
        <p>The interview characters are made-up and powered by an AI model. What they say is a lead to check against real sources, not evidence. The writing coach gives a rough level to help you improve; it is not a grade. Grades are given by your teacher.</p>
      </Section>

      <Section title="5. Your work">
        <p>Your work stays yours. You allow the service to store it and show it to the people described in the <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy policy</a> so that it can be used for teaching, feedback and grading.</p>
      </Section>

      <Section title="6. Cost">
        <p>Students and parents are never charged. Teachers can use the exemplar activities without charge; any paid plan for teachers is shown openly on the pricing page and is agreed with the teacher first. No school or parent is charged without a written agreement.</p>
      </Section>

      <Section title="7. What we do and do not promise">
        <p>We try to keep the service available and your work safe, but it is provided as it is, and we cannot promise it will always be available or error-free. Please keep a copy of anything important (students can download their work as a PDF). To the extent the law allows, we are not responsible for losses that come from using, or being unable to use, the service. Nothing here limits any right you have by law.</p>
      </Section>

      <Section title="8. Changes and contact">
        <p>We may update these terms; if the change matters, we will update the date and tell teachers who use the service. Questions: <Field value={o.email} />.</p>
      </Section>
    </LegalShell>
  )
}
