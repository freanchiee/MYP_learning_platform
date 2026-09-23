import { NextResponse } from 'next/server'

// Temporary diagnostic route — lists the models actually available to this
// server's GROQ_API_KEY, straight from Groq. Not linked from anywhere in
// the UI. Delete once lib/groq.ts's model list is confirmed current.
export async function GET() {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'GROQ_API_KEY not set' }, { status: 500 })
  const resp = await fetch('https://api.groq.com/openai/v1/models', {
    headers: { Authorization: `Bearer ${apiKey}` },
  })
  const data = await resp.json()
  return NextResponse.json(data, { status: resp.status })
}
