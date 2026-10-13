// The routing decision the middleware makes, kept pure so it can be tested. The middleware used to ask Supabase
// "who is this?" on EVERY request, including public pages like /dp-physics for anonymous visitors. When Supabase
// slowed down, every page timed out (504 MIDDLEWARE_INVOCATION_TIMEOUT). Now:
//   - no login cookie  => the visitor is anonymous; Supabase is not contacted at all
//   - login cookie     => ask Supabase, but wait at most AUTH_TIMEOUT_MS; if it does not answer, the visitor is
//                         'unknown' and the request carries on (pages and the database still enforce access).

export const PROTECTED_ROUTES = ['/dashboard', '/exam', '/results', '/papers']
export const AUTH_ROUTES = ['/login', '/signup']
/** The longest the middleware waits for Supabase to say who a signed-in visitor is. */
export const AUTH_TIMEOUT_MS = 3000

/** Supabase stores the session in "sb-<project>-auth-token" (split into ".0", ".1" chunks when large). */
const SESSION_COOKIE = /^sb-.+-auth-token(\.\d+)?$/
export const hasSessionCookie = (cookieNames: string[]) => cookieNames.some((n) => SESSION_COOKIE.test(n))

export type Visitor = 'anonymous' | 'user' | 'unknown'
export type GateAction = 'continue' | 'login' | 'dashboard'

const under = (pathname: string, routes: string[]) => routes.some((r) => pathname === r || pathname.startsWith(r + '/'))
export const isProtectedRoute = (pathname: string) => under(pathname, PROTECTED_ROUTES)
export const isAuthRoute = (pathname: string) => under(pathname, AUTH_ROUTES)

export function gate(pathname: string, visitor: Visitor): GateAction {
  if (isProtectedRoute(pathname) && visitor === 'anonymous') return 'login'
  if (isAuthRoute(pathname) && visitor === 'user') return 'dashboard'
  return 'continue' // includes visitor === 'unknown': never lock someone out because Supabase is slow
}

/** Resolve to the value, or to 'timeout' if it takes longer than `ms` (or rejects). */
export async function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | 'timeout'> {
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    return await Promise.race([
      p.catch(() => 'timeout' as const),
      new Promise<'timeout'>((resolve) => { timer = setTimeout(() => resolve('timeout'), ms) }),
    ])
  } finally {
    if (timer) clearTimeout(timer)
  }
}
