// Server-only Groq client — free hosted inference of small open-weight
// models (Llama, Gemma). Used for the MYP4 persona-interview chat
// (app/api/persona-chat/route.ts). Requires GROQ_API_KEY as a server env
// var (never exposed to the client) — get one free at console.groq.com,
// no credit card required. This is a platform-level key, unlike the
// bring-your-own-key pattern in lib/ai-grading.ts: a classroom of
// students shouldn't each need their own API key just to interview a
// persona, so the server pays (nothing, within Groq's free tier) instead.
//
// Groq retires/renames model ids faster than Anthropic/OpenAI/Gemini do,
// AND which models a given account/key can see varies — the commonly-
// documented Llama/Gemma ids (llama-3.1-8b-instant, gemma2-9b-it,
// llama3-8b-8192...) all 404'd or came back "decommissioned" for this
// key. Don't guess again: hit GET https://api.groq.com/openai/v1/models
// with the real key (e.g. via a temporary route) to see what's actually
// available before changing this list. As of the last check, this
// account's only general-purpose text chat models were the ones below
// (everything else on the account was audio (whisper), speech synthesis
// (orpheus), or a safety/prompt-guard classifier — not a chat model).
// This still tries them in order and remembers whichever one worked for
// the life of this warm serverless instance, since Groq's catalog will
// keep moving.
const FALLBACK_MODELS = ['openai/gpt-oss-20b', 'openai/gpt-oss-120b', 'qwen/qwen3.8-27b']

let cachedWorkingModel: string | null = null

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

async function callGroq(apiKey: string, model: string, messages: GroqMessage[], maxTokens: number): Promise<{ ok: boolean; status: number; body: any }> {
  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages, max_tokens: maxTokens, temperature: 0.8 }),
  })
  const body = await resp.json().catch(() => ({}))
  return { ok: resp.ok, status: resp.status, body }
}

export async function groqChat(messages: GroqMessage[], maxTokens = 220): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) throw new Error('GROQ_API_KEY is not configured on the server')

  const configured = process.env.GROQ_MODEL
  const candidates = [cachedWorkingModel, configured, ...FALLBACK_MODELS].filter((m, i, arr): m is string => !!m && arr.indexOf(m) === i)

  let lastError: string | null = null
  for (const model of candidates) {
    const { ok, status, body } = await callGroq(apiKey, model, messages, maxTokens)
    if (ok) {
      cachedWorkingModel = model
      const reply = body.choices?.[0]?.message?.content
      if (typeof reply === 'string' && reply.trim()) return reply.trim()
      lastError = `Groq returned an empty reply from ${model}`
      continue
    }
    // A model-not-found/decommissioned error means "try the next
    // candidate" — anything else (bad key, rate limit, content policy)
    // is a real failure worth surfacing immediately instead of masking
    // it behind four more doomed attempts.
    const code = body?.error?.code
    if (status === 404 || code === 'model_not_found' || code === 'model_decommissioned') {
      lastError = `Groq API ${status} on ${model}: ${JSON.stringify(body)}`
      continue
    }
    throw new Error(`Groq API ${status}: ${JSON.stringify(body)}`)
  }
  throw new Error(lastError || 'No working Groq model found')
}
