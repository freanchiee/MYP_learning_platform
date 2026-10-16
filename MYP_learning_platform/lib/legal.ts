// Who runs CritABCD, in one place. The Impressum, privacy policy and terms read from here, so the details are
// written once and cannot drift. Fill in every field marked REQUIRED before the legal pages are published; a field left
// as null is shown on the page as "to be completed", so an incomplete Impressum is visible instead of silently wrong.

export interface Operator {
  /** REQUIRED: full legal name of the person or company that operates the site. */
  name: string | null
  /** REQUIRED: 'individual' or 'company'. Changes the wording of the Impressum. */
  kind: 'individual' | 'company' | null
  /** The name the service is run under, if different from the legal name. */
  tradingName: string | null
  /** REQUIRED: street and number. */
  street: string | null
  /** REQUIRED: postal code and city. */
  city: string | null
  /** REQUIRED: country. */
  country: string | null
  /** REQUIRED: an address that is read and answered. */
  email: string | null
  /** Optional but recommended. */
  phone: string | null
  /** Company only: register and registration number, VAT id. */
  registration: string | null
  vatId: string | null
  /** Who answers for the content of the site, if different from the operator. */
  responsibleForContent: string | null
}

export const OPERATOR: Operator = {
  name: 'Utkarsh Kumar',
  kind: 'individual',
  tradingName: 'Learning Experience Initiative for Online Classes',
  street: 'A 801, Runwal Bliss, Kanjurmarg East',
  city: '400042 Mumbai',
  country: 'India',
  email: 'freanchie@gmail.com',
  phone: null,
  registration: null,
  vatId: null,
  responsibleForContent: null,
}

/** True when everything the Impressum needs is filled in. */
export const operatorComplete = (o: Operator = OPERATOR) => !!(o.name && o.kind && o.street && o.city && o.country && o.email)

/** Last substantive change to the privacy policy and terms. Update when the text changes. */
export const LEGAL_UPDATED = '16 October 2026'

/** Service providers that process data for CritABCD, shown in the privacy policy. Keep in step with what the code really calls. */
export const PROCESSORS = [
  { name: 'Supabase', what: 'database, sign-in and file storage', where: 'AWS, Mumbai (India)' },
  { name: 'Vercel', what: 'hosting of the website and its server functions, and anonymous page-view statistics', where: 'United States' },
  { name: 'Groq', what: 'replies of the fictional interview characters (only the typed question and the earlier turns of that conversation, never a name or email)', where: 'United States' },
  { name: 'Google', what: 'optional “Sign in with Google”', where: 'as set out in Google’s own terms' },
] as const
