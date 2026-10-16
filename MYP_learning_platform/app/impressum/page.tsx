import type { Metadata } from 'next'
import LegalShell, { Field, Section } from '@/components/legal/LegalShell'
import { OPERATOR } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Who operates CritABCD and how to contact them.',
  alternates: { canonical: '/impressum' },
}

export default function ImpressumPage() {
  const o = OPERATOR
  return (
    <LegalShell title="Impressum" showUpdated={false} intro="Information about the operator of critabcd.com.">
      <Section title={o.kind === 'company' ? 'Operator' : 'Operator of this website'}>
        <p>
          <strong><Field value={o.name} /></strong>{o.tradingName ? <> (trading as {o.tradingName})</> : null}<br />
          <Field value={o.street} /><br />
          <Field value={o.city} /><br />
          <Field value={o.country} />
        </p>
      </Section>
      <Section title="Contact">
        <p>
          Email: <Field value={o.email} />
          {o.phone ? <><br />Telephone: {o.phone}</> : null}
        </p>
      </Section>
      {(o.kind === 'company' || o.registration || o.vatId) && (
        <Section title="Registration">
          <p>
            {o.registration ? <>Register entry: {o.registration}<br /></> : null}
            {o.vatId ? <>VAT identification number: {o.vatId}</> : null}
          </p>
        </Section>
      )}
      <Section title="Responsible for the content">
        <p>{o.responsibleForContent ?? o.name ?? <em>(to be completed)</em>}</p>
      </Section>
      <Section title="About this site">
        <p>CritABCD is a learning site for students and teachers of the IB Middle Years Programme. It is an independent project and is not run by, endorsed by or affiliated with the International Baccalaureate Organization. “IB” and “MYP” are used only to describe the programme the material is written for.</p>
        <p>For how personal data is handled, see the <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy policy</a>.</p>
      </Section>
    </LegalShell>
  )
}
