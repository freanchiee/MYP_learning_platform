import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {
  SUBMITTED_BY_OPTIONS,
  TUTORING_CONSENT_VERSION,
  TUTORING_EXAM_BOARDS,
  TUTORING_LEVELS,
  TUTORING_SUBJECTS,
} from '@/lib/tutoring'

// Best-effort spam brake: a handful of submissions per IP per hour. It lives in
// this server instance's memory, so it is not a hard limit across every
// serverless instance — the honeypot and the database checks do the rest.
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

    const submittedBy = clean(body.submittedBy, 30)
    const name = clean(body.name, 120)
    const email = clean(body.email, 254)
    const subject = clean(body.subject, 80)
    const level = clean(body.level, 60)
    const examBoard = clean(body.examBoard, 60)
    const message = clean(body.message, 2000)
    const sourcePage = clean(body.sourcePage, 200)

    if (!SUBMITTED_BY_OPTIONS.some((o) => o.value === submittedBy)) {
      return NextResponse.json({ error: 'Please choose who is filling in the form. Students under 16 need a parent or guardian to submit it.' }, { status: 400 })
    }
    if (!name) return NextResponse.json({ error: 'Please enter a name.' }, { status: 400 })
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    if (!TUTORING_SUBJECTS.includes(subject)) return NextResponse.json({ error: 'Please choose a subject.' }, { status: 400 })
    if (level && !TUTORING_LEVELS.includes(level)) return NextResponse.json({ error: 'Please choose a level from the list.' }, { status: 400 })
    if (examBoard && !TUTORING_EXAM_BOARDS.includes(examBoard)) return NextResponse.json({ error: 'Please choose an exam board from the list.' }, { status: 400 })
    if (body.consent !== true) return NextResponse.json({ error: 'Please tick the box to agree before sending.' }, { status: 400 })

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // No .select(): the table is insert-only for the public, so we never read a row back.
    const { error } = await supabase.from('tutoring_leads').insert({
      user_id: user?.id ?? null,
      submitted_by: submittedBy,
      name,
      email,
      subject,
      level: level || null,
      exam_board: examBoard || null,
      message: message || null,
      source_page: sourcePage || null,
      consent: true,
      consent_version: TUTORING_CONSENT_VERSION,
    })
    if (error) {
      console.error('[tutoring-leads] insert failed:', error.message)
      return NextResponse.json({ error: 'Could not send that just now — please try again in a moment.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[tutoring-leads] error:', err)
    return NextResponse.json({ error: 'Could not send that just now — please try again in a moment.' }, { status: 502 })
  }
}
