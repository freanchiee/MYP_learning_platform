import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { ALL_INTERESTS, INTEREST_CONSENT_VERSION, INTEREST_ROLES } from '@/lib/interests'

// Best-effort spam brake (per server instance — not a hard cross-instance limit;
// the honeypot and the database checks do the rest).
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function tooManyRequests(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })

    // Honeypot: real people never see or fill this field.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true })

    const ip = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim()
    if (tooManyRequests(ip)) return NextResponse.json({ error: 'Too many requests — please try again later.' }, { status: 429 })

    const role = clean(body.role, 30)
    const name = clean(body.name, 120)
    const email = clean(body.email, 254)
    const sourcePage = clean(body.sourcePage, 200)
    const interests: string[] = Array.isArray(body.interests) ? Array.from(new Set<string>(body.interests.filter((i: unknown): i is string => typeof i === 'string'))) : []

    if (!INTEREST_ROLES.some((r) => r.value === role)) {
      return NextResponse.json({ error: 'Please choose who is signing up. Students under 16 need a parent or guardian to do it.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    if (!interests.length || interests.length > ALL_INTERESTS.length || !interests.every((i) => ALL_INTERESTS.includes(i))) {
      return NextResponse.json({ error: 'Please tick at least one subject or experience.' }, { status: 400 })
    }
    if (body.consent !== true) return NextResponse.json({ error: 'Please tick the box to agree before sending.' }, { status: 400 })

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // No .select(): the table is insert-only for the public, so we never read a row back.
    const { error } = await supabase.from('interest_leads').insert({
      user_id: user?.id ?? null,
      role,
      name: name || null,
      email,
      interests,
      source_page: sourcePage || null,
      consent: true,
      consent_version: INTEREST_CONSENT_VERSION,
    })
    if (error) {
      console.error('[interest-leads] insert failed:', error.message)
      return NextResponse.json({ error: 'Could not send that just now — please try again in a moment.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[interest-leads] error:', err)
    return NextResponse.json({ error: 'Could not send that just now — please try again in a moment.' }, { status: 502 })
  }
}
