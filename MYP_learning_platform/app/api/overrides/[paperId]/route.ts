import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { DEV_NO_AUTH } from '@/lib/dev-auth'

interface Params { params: { paperId: string } }

// Load published overrides for a paper. Public read (RLS allows anon select).
export async function GET(_req: NextRequest, { params }: Params) {
  const supabase = createClient()
  const { data } = await supabase
    .from('paper_overrides')
    .select('image_overrides, deleted_images, text_overrides, artefact_overrides')
    .eq('paper_id', params.paperId)
    .maybeSingle()

  return NextResponse.json({
    imageOverrides: data?.image_overrides ?? {},
    deletedImages: data?.deleted_images ?? {},
    textOverrides: data?.text_overrides ?? {},
    artefactOverrides: data?.artefact_overrides ?? {},
  })
}

// Publish overrides for a paper. Editors only (authenticated); RLS enforces writes.
export async function POST(req: NextRequest, { params }: Params) {
  const body = await req.json().catch(() => ({}))
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && !DEV_NO_AUTH) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }

  // In dev-bypass (no session) write via the service-role client; in prod the user's
  // session client is used so RLS gates the write to authenticated editors.
  const db = !session && DEV_NO_AUTH ? createAdminClient() : supabase

  const { error } = await db.from('paper_overrides').upsert(
    {
      paper_id: params.paperId,
      image_overrides: body.imageOverrides ?? {},
      deleted_images: body.deletedImages ?? {},
      text_overrides: body.textOverrides ?? {},
      artefact_overrides: body.artefactOverrides ?? {},
      updated_by: session?.user?.id ?? null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'paper_id' },
  )

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
