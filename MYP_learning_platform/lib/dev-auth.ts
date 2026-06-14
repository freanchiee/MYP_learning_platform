/**
 * Development-only auth bypass.
 *
 * When running locally (`npm run dev`, NODE_ENV !== 'production') the login gate is
 * skipped so the whole platform — dashboard, papers, exams — is browsable without a
 * Supabase session. This is OFF in any production build (NODE_ENV === 'production'),
 * so it can never weaken the deployed app.
 *
 * To exercise REAL auth while still in dev, set `NEXT_PUBLIC_DEV_AUTH=on` in
 * `.env.local` and restart the dev server.
 */
export const DEV_NO_AUTH =
  process.env.NODE_ENV !== 'production' &&
  process.env.NEXT_PUBLIC_DEV_AUTH !== 'on'

/** Placeholder identity used to render the app shell when DEV_NO_AUTH is on. */
export const DEV_USER = {
  id: 'dev-user',
  name: 'Dev User',
  email: 'dev@localhost',
} as const
