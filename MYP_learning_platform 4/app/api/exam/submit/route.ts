import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Uses service role key to bypass RLS for write operations during exam submit.
function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      attemptId,
      paperId,
      answers,
      criterionScores,
      totalScore,
      maxScore,
      mypGrade,
      xpEarned,
      badgesEarned,
      timeTaken,
      focusStrikes,
      scores,
    } = body as {
      attemptId: string
      paperId: string
      answers?: Record<string, unknown>
      criterionScores?: Record<string, { score: number; max: number }>
      totalScore: number
      maxScore: number
      mypGrade: number
      xpEarned: number
      badgesEarned: string[]
      timeTaken: number
      focusStrikes: number
      scores: Record<string, unknown>
    }

    if (!attemptId) {
      return NextResponse.json(
        { error: 'attemptId is required' },
        { status: 400 }
      )
    }

    const supabase = createServiceClient()

    // 1. UPDATE the attempt row
    const { error: updateError } = await supabase
      .from('attempts')
      .update({
        scores: scores ?? {},
        total_score: totalScore,
        max_score: maxScore,
        myp_grade: mypGrade,
        criterion_scores: criterionScores ?? null,
        time_taken: timeTaken,
        xp_earned: xpEarned,
        badges_earned: badgesEarned ?? [],
        focus_strikes: focusStrikes ?? 0,
        answers: answers ?? {},
        status: 'completed',
        completed_at: new Date().toISOString(),
      })
      .eq('id', attemptId)

    if (updateError) {
      console.error('[submit] update error:', updateError)
      return NextResponse.json(
        { error: updateError.message },
        { status: 500 }
      )
    }

    // 2. Get user_id from the attempt (needed to insert user_badges)
    const { data: attemptRow, error: fetchError } = await supabase
      .from('attempts')
      .select('user_id')
      .eq('id', attemptId)
      .single<{ user_id: string }>()

    if (fetchError || !attemptRow) {
      console.error('[submit] fetch attempt error:', fetchError)
      return NextResponse.json(
        { error: 'Could not find attempt' },
        { status: 500 }
      )
    }

    // 3. Insert each badge (ON CONFLICT DO NOTHING via upsert / ignore)
    if (badgesEarned && badgesEarned.length > 0) {
      const badgeRows = badgesEarned.map((badgeId: string) => ({
        user_id: attemptRow.user_id,
        badge_id: badgeId,
        paper_id: paperId ?? null,
      }))

      const { error: badgeError } = await supabase
        .from('user_badges')
        .upsert(badgeRows, {
          onConflict: 'user_id,badge_id',
          ignoreDuplicates: true,
        })

      if (badgeError) {
        // Non-fatal: log but don't fail the request
        console.error('[submit] badge upsert error:', badgeError)
      }
    }

    return NextResponse.json({ success: true, attemptId })
  } catch (err) {
    console.error('[submit] unexpected error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
