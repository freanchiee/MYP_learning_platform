'use server'

/**
 * Provider config — reads/writes data/.image-pipeline-keys.json (gitignored).
 * Also handles actual image generation for each provider so the dashboard
 * Regenerate button works without running the CLI script.
 */

import fs from 'fs'
import path from 'path'

const REPO_ROOT = process.cwd()
const CONFIG_FILE = path.join(REPO_ROOT, 'data', '.image-pipeline-keys.json')

// ─── types ───────────────────────────────────────────────────────────────────

export type ProviderId = 'openai' | 'gemini' | 'stability'

export interface ProviderConfig {
  activeProvider: ProviderId
  openai: { key: string; model: 'dall-e-3' | 'dall-e-2' }
  /** model: Gemini image-gen model name — Google renames these often, so it's configurable */
  gemini: { key: string; model: string }
  stability: { key: string }
  /** Anthropic key — used for Claude Vision (prompt analysis), NOT image generation */
  anthropic: { key: string }
}

// Gemini image-gen model names (as of 2025 — check aistudio.google.com if one fails):
// gemini-2.0-flash-exp-image-generation   ← default, works with standard AI Studio keys
// gemini-2.0-flash-preview-image-generation
// imagen-3.0-generate-001                 ← Vertex AI / special quota only
const GEMINI_DEFAULT_MODEL = 'gemini-2.0-flash-exp-image-generation'

const DEFAULT_CONFIG: ProviderConfig = {
  activeProvider: 'openai',
  openai: { key: '', model: 'dall-e-3' },
  gemini: { key: '', model: GEMINI_DEFAULT_MODEL },
  stability: { key: '' },
  anthropic: { key: '' },
}

// ─── read / write ─────────────────────────────────────────────────────────────

export async function readProviderConfig(): Promise<ProviderConfig> {
  if (!fs.existsSync(CONFIG_FILE)) return DEFAULT_CONFIG
  try {
    const raw = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'))
    return { ...DEFAULT_CONFIG, ...raw }
  } catch {
    return DEFAULT_CONFIG
  }
}

export async function saveProviderConfig(
  config: Partial<ProviderConfig>,
): Promise<{ ok: boolean }> {
  const current = await readProviderConfig()
  const merged: ProviderConfig = {
    ...current,
    ...config,
    openai:     { ...current.openai,     ...(config.openai     ?? {}) },
    gemini:     { ...current.gemini,     ...(config.gemini     ?? {}) },
    stability:  { ...current.stability,  ...(config.stability  ?? {}) },
    anthropic:  { ...current.anthropic,  ...(config.anthropic  ?? {}) },
  }
  fs.mkdirSync(path.dirname(CONFIG_FILE), { recursive: true })
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(merged, null, 2))
  return { ok: true }
}

// ─── vision key helper ────────────────────────────────────────────────────────

/**
 * Returns the Anthropic key for Claude Vision.
 * Priority: ANTHROPIC_API_KEY env var → config file → empty string.
 */
export async function getVisionKey(): Promise<string> {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY
  const cfg = await readProviderConfig()
  return cfg.anthropic?.key ?? ''
}

// ─── generate image via configured provider ───────────────────────────────────

const PUBLIC = path.join(REPO_ROOT, 'public')

const PROVIDER_NAMES: Record<ProviderId, string> = {
  openai:    'OpenAI (DALL-E 3)',
  gemini:    'Google Gemini (Imagen 3)',
  stability: 'Stability AI (SDXL Core)',
}

export async function generateImageWithProvider(
  prompt: string,
  destPath: string,
  overrideProvider?: ProviderId,
  /** Path to original image (relative to /public) — enables img2img / structure control */
  originalImagePath?: string,
): Promise<{ ok: boolean; error?: string; method?: string }> {
  const cfg = await readProviderConfig()
  const provider = overrideProvider ?? cfg.activeProvider
  const providerName = PROVIDER_NAMES[provider] ?? provider

  // Check key upfront — give a clear, actionable error
  const providerKey = (cfg[provider] as { key: string })?.key
  if (!providerKey) {
    return {
      ok: false,
      error: `${providerName} is the active provider but no API key is saved. Open ⚙️ Image Providers → enter your key → Save Configuration.`,
    }
  }

  try {
    if (provider === 'openai') {
      await generateOpenAI(prompt, destPath, cfg.openai.key, cfg.openai.model)
      return { ok: true, method: 'text2img' }
    } else if (provider === 'gemini') {
      await generateGemini(prompt, destPath, cfg.gemini.key, cfg.gemini.model)
      return { ok: true, method: 'text2img' }
    } else if (provider === 'stability') {
      // When the original image is available, use Structure Control:
      // it preserves the spatial layout (crane position, heights, building) while
      // generating new original artwork — much better than text-only for diagrams.
      if (originalImagePath) {
        const physOrig = path.join(PUBLIC, originalImagePath)
        if (fs.existsSync(physOrig)) {
          try {
            await generateStabilityStructure(prompt, destPath, cfg.stability.key, physOrig)
            return { ok: true, method: 'structure_control' }
          } catch (structErr: unknown) {
            // Structure control failed — fall through to plain text2img
            const msg = structErr instanceof Error ? structErr.message : String(structErr)
            console.warn(`[stability] Structure control failed (${msg.slice(0, 80)}) → falling back to text2img`)
          }
        }
      }
      await generateStability(prompt, destPath, cfg.stability.key)
      return { ok: true, method: 'text2img' }
    } else {
      return { ok: false, error: `Unknown provider: ${provider}` }
    }
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}

// ─── provider implementations ─────────────────────────────────────────────────

async function saveImageBuffer(buf: Buffer, destPath: string) {
  const physDest = path.join(PUBLIC, destPath)
  fs.mkdirSync(path.dirname(physDest), { recursive: true })
  fs.writeFileSync(physDest, buf)
}

async function generateOpenAI(
  prompt: string,
  destPath: string,
  key: string,
  model: string,
) {
  if (!key) throw new Error('OpenAI key not configured')
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      prompt: prompt.slice(0, 4000),
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      response_format: 'url',
    }),
    signal: AbortSignal.timeout(60_000),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`OpenAI ${res.status}: ${body.slice(0, 300)}`)
  }
  const json = await res.json() as { data?: { url?: string }[] }
  const imgUrl = json.data?.[0]?.url
  if (!imgUrl) throw new Error('OpenAI: no URL in response')
  const imgRes = await fetch(imgUrl, { signal: AbortSignal.timeout(30_000) })
  if (!imgRes.ok) throw new Error(`OpenAI CDN download error ${imgRes.status}`)
  await saveImageBuffer(Buffer.from(await imgRes.arrayBuffer()), destPath)
}

async function generateGemini(prompt: string, destPath: string, key: string, model: string) {
  if (!key) throw new Error('Gemini key not configured')

  // Uses generateContent with responseModalities IMAGE — works with standard AI Studio keys.
  // If you get a 404, open ⚙️ Image Providers and try a different model name.
  // Common alternatives: gemini-2.0-flash-exp-image-generation, gemini-2.0-flash-exp
  model = model || GEMINI_DEFAULT_MODEL
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt.slice(0, 2000) }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
      }),
      signal: AbortSignal.timeout(90_000),
    },
  )
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Gemini ${res.status}: ${body.slice(0, 400)}`)
  }

  type GeminiPart = { text?: string } | { inlineData?: { mimeType?: string; data?: string } }
  const json = await res.json() as {
    candidates?: { content?: { parts?: GeminiPart[] } }[]
  }

  const parts = json.candidates?.[0]?.content?.parts ?? []
  const imgPart = parts.find(
    (p): p is { inlineData: { mimeType: string; data: string } } =>
      'inlineData' in p && !!p.inlineData?.data,
  )
  if (!imgPart) {
    throw new Error(`Gemini: no image in response — ${JSON.stringify(json).slice(0, 300)}`)
  }
  await saveImageBuffer(Buffer.from(imgPart.inlineData.data, 'base64'), destPath)
}

async function generateStability(prompt: string, destPath: string, key: string) {
  if (!key) throw new Error('Stability AI key not configured')
  // Stable Image Core — $0.003/image
  const formData = new FormData()
  formData.append('prompt', prompt.slice(0, 10000))
  formData.append('output_format', 'png')
  const res = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Accept': 'image/*',
    },
    body: formData,
    signal: AbortSignal.timeout(60_000),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Stability ${res.status}: ${body.slice(0, 300)}`)
  }
  await saveImageBuffer(Buffer.from(await res.arrayBuffer()), destPath)
}

/**
 * Stability AI Structure Control — uses the original image's edges/outline as a
 * spatial guide while regenerating content from the prompt.
 *
 * Perfect for educational diagrams: preserves the layout (crane position, building,
 * heights, ball positions) while producing new original artwork.
 * Cost: ~$0.01/image (slightly more than Core).
 * Docs: https://platform.stability.ai/docs/api-reference#tag/Control/paths/~1v2beta~1stable-image~1control~1structure/post
 */
async function generateStabilityStructure(
  prompt: string,
  destPath: string,
  key: string,
  /** Absolute filesystem path to the original image */
  origPhysPath: string,
  /** 0–1: how strongly to follow the original's structure (0.7 = good balance) */
  controlStrength = 0.7,
) {
  if (!key) throw new Error('Stability AI key not configured')

  const imgBuf = fs.readFileSync(origPhysPath)
  const ext = path.extname(origPhysPath).toLowerCase()
  const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
    : ext === '.webp' ? 'image/webp' : 'image/png'

  const formData = new FormData()
  formData.append('prompt', prompt.slice(0, 10000))
  formData.append('image', new Blob([imgBuf], { type: mime }), path.basename(origPhysPath))
  formData.append('control_strength', String(controlStrength))
  formData.append('output_format', 'png')

  const res = await fetch('https://api.stability.ai/v2beta/stable-image/control/structure', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${key}`,
      'Accept': 'image/*',
    },
    body: formData,
    signal: AbortSignal.timeout(90_000),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Stability structure control ${res.status}: ${body.slice(0, 300)}`)
  }
  await saveImageBuffer(Buffer.from(await res.arrayBuffer()), destPath)
}

// ─── test connection ──────────────────────────────────────────────────────────

export async function testProvider(
  provider: ProviderId,
  key: string,
): Promise<{ ok: boolean; error?: string }> {
  try {
    if (provider === 'openai') {
      const res = await fetch('https://api.openai.com/v1/models', {
        headers: { 'Authorization': `Bearer ${key}` },
        signal: AbortSignal.timeout(10_000),
      })
      if (res.status === 401) return { ok: false, error: 'Invalid API key' }
      if (!res.ok) return { ok: false, error: `HTTP ${res.status}` }
      return { ok: true }
    }

    if (provider === 'gemini') {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`,
        { signal: AbortSignal.timeout(10_000) },
      )
      if (res.status === 400 || res.status === 403) return { ok: false, error: 'Invalid API key' }
      if (!res.ok) return { ok: false, error: `HTTP ${res.status}` }
      // Check if the image-generation model is in the list
      const json = await res.json() as { models?: { name: string }[] }
      const models = json.models?.map(m => m.name) ?? []
      // Check for any image-capable Gemini model
      const imgModels = models.filter(n =>
        n.includes('image-generation') || n.includes('imagen') || n.includes('flash-exp'),
      )
      return {
        ok: true,
        error: imgModels.length > 0
          ? `✅ Key valid · image models: ${imgModels.map(n => n.split('/').pop()).slice(0, 3).join(', ')}`
          : `⚠️ Key valid but no image-gen model found — try a different model name`,
      }
    }

    if (provider === 'stability') {
      const res = await fetch('https://api.stability.ai/v1/user/account', {
        headers: { 'Authorization': `Bearer ${key}` },
        signal: AbortSignal.timeout(10_000),
      })
      if (res.status === 401) return { ok: false, error: 'Invalid API key' }
      if (!res.ok) return { ok: false, error: `HTTP ${res.status}` }
      const json = await res.json() as { credits?: number }
      return { ok: true, error: json.credits !== undefined ? `${json.credits} credits remaining` : undefined }
    }

    return { ok: false, error: 'Unknown provider' }
  } catch (e: unknown) {
    const msg = e instanceof Error ? (e.cause as { message?: string } | undefined)?.message ?? e.message : String(e)
    return { ok: false, error: `Connection error: ${msg}` }
  }
}

export async function testAnthropicKey(
  key: string,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('https://api.anthropic.com/v1/models', {
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      signal: AbortSignal.timeout(10_000),
    })
    if (res.status === 401) return { ok: false, error: 'Invalid API key' }
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` }
    return { ok: true, error: '✅ Connected — Claude Vision ready' }
  } catch (e: unknown) {
    const msg = e instanceof Error ? (e.cause as { message?: string } | undefined)?.message ?? e.message : String(e)
    return { ok: false, error: `Connection error: ${msg}` }
  }
}
