// Server-only Groq client — free hosted inference of small open-weight
// models (Llama 3.1/3.2, Gemma). Used for the MYP4 persona-interview chat
// (app/api/persona-chat/route.ts). Requires GROQ_API_KEY as a server env
// var (never exposed to the client) — get one free at console.groq.com,
// no credit card required. This is a platform-level key, unlike the
// bring-your-own-key pattern in lib/ai-grading.ts: a classroom of
// students shouldn't each need their own API key just to interview a
// persona, so the server pays (nothing, within Groq's free tier) instead.

const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.1-8b-instant'

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function groqChat(messages: GroqMessage[], maxTokens = 220): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) throw new Error('GROQ_API_KEY is not configured on the server')

  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      max_tokens: maxTokens,
      temperature: 0.8,
    }),
  })

  if (!resp.ok) {
    const text = await resp.text().catch(() => '')
    throw new Error(`Groq API ${resp.status}: ${text}`)
  }

  const data = await resp.json()
  const reply = data.choices?.[0]?.message?.content
  if (typeof reply !== 'string' || !reply.trim()) throw new Error('Groq returned an empty reply')
  return reply.trim()
}
