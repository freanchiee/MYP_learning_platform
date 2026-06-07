/**
 * lib/ai-grading.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Thin provider-agnostic AI grading adapter.
 *
 * Usage: called from /api/grade when X-AI-Provider + X-AI-Key headers are set.
 * Structured tasks (MCQ, widgets, tables) always use the keyword engine.
 * Only open-ended prose tasks are routed here.
 */

export type AIProvider = 'claude' | 'openai' | 'gemini'

export interface AIGradeResult {
  marksAwarded: number
  feedback: string
  hitConcepts: string[]
  provider: AIProvider
}

interface GradeRequest {
  taskText: string
  markScheme: {
    marks: number
    exemplar: string
    keyConcepts: string[]
    keywords: string[]
    feedbackHit: string
    feedbackMiss: string
  }
  studentAnswer: string
  provider: AIProvider
  apiKey: string
  model?: string
}

// ── Default models per provider ──────────────────────────────────────────
const DEFAULT_MODELS: Record<AIProvider, string> = {
  claude: 'claude-3-5-haiku-20241022',
  openai: 'gpt-4o-mini',
  gemini: 'gemini-1.5-flash',
}

// ── Shared prompt builder ─────────────────────────────────────────────────
function buildPrompt(req: GradeRequest): string {
  return `You are an IB MYP Sciences examiner. Grade the student's answer strictly against the mark scheme provided.

TASK QUESTION:
${req.taskText}

MARK SCHEME:
- Maximum marks: ${req.markScheme.marks}
- Exemplar answer: ${req.markScheme.exemplar}
- Key concepts required (award 1 mark per concept demonstrated): ${req.markScheme.keyConcepts.join('; ')}
- Supporting keywords: ${req.markScheme.keywords.join(', ')}

STUDENT ANSWER:
${req.studentAnswer || '(no answer provided)'}

INSTRUCTIONS:
1. Award marks (0 to ${req.markScheme.marks}) based strictly on key concepts present.
2. Do NOT award marks for irrelevant statements.
3. List only the key concepts the student correctly demonstrated.
4. Give specific, constructive feedback referencing the mark scheme.

Respond with ONLY valid JSON (no markdown, no explanation outside JSON):
{
  "marksAwarded": <integer 0-${req.markScheme.marks}>,
  "feedback": "<1-2 sentence feedback>",
  "hitConcepts": ["<concept 1>", "<concept 2>"]
}`
}

// ── Claude (Anthropic) ────────────────────────────────────────────────────
async function gradeWithClaude(req: GradeRequest): Promise<AIGradeResult> {
  const model = req.model ?? DEFAULT_MODELS.claude
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': req.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 512,
      messages: [{ role: 'user', content: buildPrompt(req) }],
    }),
  })
  if (!resp.ok) throw new Error(`Claude API ${resp.status}: ${await resp.text()}`)
  const data = await resp.json()
  const text = data.content?.[0]?.text ?? '{}'
  return { ...JSON.parse(text), provider: 'claude' }
}

// ── OpenAI ────────────────────────────────────────────────────────────────
async function gradeWithOpenAI(req: GradeRequest): Promise<AIGradeResult> {
  const model = req.model ?? DEFAULT_MODELS.openai
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${req.apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_tokens: 512,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'You are an IB MYP Sciences examiner. Always respond with valid JSON.' },
        { role: 'user', content: buildPrompt(req) },
      ],
    }),
  })
  if (!resp.ok) throw new Error(`OpenAI API ${resp.status}: ${await resp.text()}`)
  const data = await resp.json()
  const text = data.choices?.[0]?.message?.content ?? '{}'
  return { ...JSON.parse(text), provider: 'openai' }
}

// ── Gemini (REST, no npm needed) ──────────────────────────────────────────
async function gradeWithGemini(req: GradeRequest): Promise<AIGradeResult> {
  const model = req.model ?? DEFAULT_MODELS.gemini
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${req.apiKey}`
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: buildPrompt(req) }] }],
      generationConfig: { responseMimeType: 'application/json', maxOutputTokens: 512 },
    }),
  })
  if (!resp.ok) throw new Error(`Gemini API ${resp.status}: ${await resp.text()}`)
  const data = await resp.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}'
  return { ...JSON.parse(text), provider: 'gemini' }
}

// ── Public entry point ────────────────────────────────────────────────────
export async function aiGradeTask(req: GradeRequest): Promise<AIGradeResult> {
  if (!req.studentAnswer?.trim()) {
    return {
      marksAwarded: 0,
      feedback: 'No answer provided.',
      hitConcepts: [],
      provider: req.provider,
    }
  }

  switch (req.provider) {
    case 'claude': return gradeWithClaude(req)
    case 'openai': return gradeWithOpenAI(req)
    case 'gemini': return gradeWithGemini(req)
    default:       throw new Error(`Unknown provider: ${req.provider}`)
  }
}

// ── Helper: is this task open-ended (should use AI)? ─────────────────────
// Structured tasks stay with keyword engine regardless of provider config.
const STRUCTURED_WIDGETS = new Set([
  'radio_select', 'checkbox_select', 'fill_blank', 'match_drag_drop',
  'drag_drop_planets', 'variable_classify', 'sankey_q3', 'bounce_graphs_ab',
  'q4e_table', 'q5c_table', 'cannonball_paths', 'energy_chain',
  'wave_label_drag_drop', 'inline_dropdown_select', 'refraction_label_drag_drop',
])

export function isOpenEndedTask(widget?: string): boolean {
  if (!widget) return true                      // plain RichTextEditor → open-ended
  return !STRUCTURED_WIDGETS.has(widget)
}
