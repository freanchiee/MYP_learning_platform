import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { groqChat, type GroqMessage } from '@/lib/groq'
import { getPersona } from '@/data/design/live/personas'

const MAX_MESSAGE_CHARS = 400
const MAX_HISTORY_TURNS = 10

interface ChatBody {
  sessionCode: string
  playerId: string
  characterId: string
  message: string
  history?: { role: 'user' | 'assistant'; text: string }[]
}

function buildSystemPrompt(characterId: string): string | null {
  const p = getPersona(characterId)
  if (!p) return null
  const anthroLines = p.anthro.map((a) => `- ${a.measure}: ${a.value}${a.unit ? ' ' + a.unit : ''} (${a.why})`).join('\n')
  return `You are ${p.name}, age ${p.age}, a persona created for an MYP Design class so a student can interview you and build an empathy map (Says / Thinks / Does / Feels) for their design project.

Your bio: ${p.bio}
Your everyday struggles: ${p.struggles.join('; ')}
Traits: ${p.traits}
Measurements a designer might need, and why they matter to you:
${anthroLines}

Rules:
- Always answer in first person, in character, as ${p.name}. Never break character or mention you are an AI.
- Keep replies short and conversational: 2-4 sentences, like a real chat message, not an essay.
- Ground every answer in the bio/struggles/traits/measurements above — don't invent new medical details that contradict them.
- If the student's message is vague, generic, or asks "what should I ask" / "I don't know what to ask", gently nudge them toward ONE specific unexplored angle — e.g. how you feel about it, what you actually do day-to-day to cope, or one of your measurements and why it matters — rather than answering nothing.
- If asked something with a numeric answer (a measurement), always give the actual number and briefly explain why it matters to a designer.
- Never provide real medical advice or claim to represent all people with this condition — you are one specific person with your own experience.`
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatBody
    const { sessionCode, playerId, characterId, message } = body
    const history = Array.isArray(body.history) ? body.history.slice(-MAX_HISTORY_TURNS) : []

    if (!sessionCode || !playerId || !characterId || !message?.trim()) {
      return NextResponse.json({ error: 'sessionCode, playerId, characterId and message are required' }, { status: 400 })
    }
    if (message.length > MAX_MESSAGE_CHARS) {
      return NextResponse.json({ error: `message too long (max ${MAX_MESSAGE_CHARS} characters)` }, { status: 400 })
    }

    const systemPrompt = buildSystemPrompt(characterId)
    if (!systemPrompt) {
      return NextResponse.json({ error: `Unknown character: ${characterId}` }, { status: 400 })
    }

    // Auth guard — the caller must be signed in AND be the actual player
    // they claim to be, in that session. Prevents an arbitrary anonymous
    // caller from draining the platform's shared Groq quota.
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Sign in required' }, { status: 401 })
    }
    const { data: player, error: playerErr } = await supabase
      .from('live_players')
      .select('id')
      .eq('id', playerId)
      .eq('session_code', sessionCode)
      .eq('user_id', user.id)
      .maybeSingle()
    if (playerErr || !player) {
      return NextResponse.json({ error: 'Not a recognised player in this session' }, { status: 403 })
    }

    const messages: GroqMessage[] = [
      { role: 'system', content: systemPrompt },
      ...history.map((h) => ({ role: h.role === 'user' ? 'user' : 'assistant', content: h.text.slice(0, MAX_MESSAGE_CHARS) }) as GroqMessage),
      { role: 'user', content: message.trim() },
    ]

    const reply = await groqChat(messages)
    return NextResponse.json({ reply })
  } catch (err) {
    console.error('[persona-chat] error:', err)
    return NextResponse.json({ error: 'Could not reach the persona right now — try again in a moment.' }, { status: 502 })
  }
}
