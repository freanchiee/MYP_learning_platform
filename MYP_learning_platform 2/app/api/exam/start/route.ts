import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient()

    // Verify user session via SSR client (reads cookies)
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Unauthorized — no active session' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { paperId } = body as { paperId: string }

    if (!paperId) {
      return NextResponse.json(
        { error: 'paperId is required' },
        { status: 400 }
      )
    }

    // Verify the paper exists and is published
    const { data: paper, error: paperError } = await supabase
      .from('papers')
      .select('id')
      .eq('id', paperId)
      .eq('is_published', true)
      .single<{ id: string }>()

    if (paperError || !paper) {
      return NextResponse.json(
        { error: 'Paper not found or not published' },
        { status: 404 }
      )
    }

    // Insert a new attempt row
    const { data: newAttempt, error: insertError } = await supabase
      .from('attempts')
      .insert({
        user_id: session.user.id,
        paper_id: paperId,
        status: 'in_progress',
        started_at: new Date().toISOString(),
      })
      .select('id')
      .single<{ id: string }>()

    if (insertError || !newAttempt) {
      console.error('[start] insert error:', insertError)
      return NextResponse.json(
        { error: insertError?.message ?? 'Failed to create attempt' },
        { status: 500 }
      )
    }

    return NextResponse.json({ attemptId: newAttempt.id })
  } catch (err) {
    console.error('[start] unexpected error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
