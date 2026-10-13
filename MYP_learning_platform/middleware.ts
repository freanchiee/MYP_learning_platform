import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { DEV_NO_AUTH } from '@/lib/dev-auth'
import { AUTH_TIMEOUT_MS, gate, hasSessionCookie, withTimeout, type Visitor } from '@/lib/auth-gate'

export async function middleware(request: NextRequest) {
  // Dev-only: skip the login gate entirely so the platform is browsable
  // without a session. Always OFF in production builds. See lib/dev-auth.ts.
  if (DEV_NO_AUTH) {
    return NextResponse.next({ request })
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  // Anonymous visitors (no login cookie) never touch Supabase here, so public pages such as /dp-physics keep
  // working even when Supabase is slow. Signed-in visitors are checked, but we wait at most AUTH_TIMEOUT_MS: if
  // Supabase does not answer, the request carries on (pages and row-level security still enforce access).
  let visitor: Visitor = 'anonymous'
  if (hasSessionCookie(request.cookies.getAll().map((c) => c.name))) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            )
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    // Refresh session — IMPORTANT: do not remove this call.
    const result = await withTimeout(supabase.auth.getUser(), AUTH_TIMEOUT_MS)
    visitor = result === 'timeout' ? 'unknown' : result.data.user ? 'user' : 'anonymous'
  }

  const action = gate(request.nextUrl.pathname, visitor)

  if (action === 'login') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  if (action === 'dashboard') {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/auth).*)'],
}
