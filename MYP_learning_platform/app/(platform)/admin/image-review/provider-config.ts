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
  gemini: { key: string }
  stability: { key: string }
}

const DEFAULT_CONFIG: ProviderConfig = {
  activeProvider: 'openai',
  openai: { key: '', model: 'dall-e-3' },
  gemini: { key: '' },
  stability: { key: '' },
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
    openai:    { ...current.openai,    ...(config.openai    ?? {}) },
    gemini:    { ...current.gemini,    ...(config.gemini    ?? {}) },
    stability: { ...current.stability, ...(config.stability ?? {}) },
  }
  fs.mkdirSync(path.dirname(CONFIG_FILE), { recursive: true })
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(merged, null, 2))
  return { ok: true }
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
): Promise<{ ok: boolean; error?: string }> {
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
    } else if (provider === 'gemini') {
      await generateGemini(prompt, destPath, cfg.gemini.key)
    } else if (provider === 'stability') {
      await generateStability(prompt, destPath, cfg.stability.key)
    } else {
      return { ok: false, error: `Unknown provider: ${provider}` }
    }
    return { ok: true }
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

async function generateGemini(prompt: string, destPath: string, key: string) {
  if (!key) throw new Error('Gemini key not configured')
  // Imagen 3 via Google AI Generative Language API
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt: prompt.slice(0, 2000) }],
        parameters: { sampleCount: 1, aspectRatio: '4:3' },
      }),
      signal: AbortSignal.timeout(60_000),
    },
  )
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Gemini ${res.status}: ${body.slice(0, 300)}`)
  }
  const json = await res.json() as {
    predictions?: { bytesBase64Encoded?: string; mimeType?: string }[]
  }
  const b64 = json.predictions?.[0]?.bytesBase64Encoded
  if (!b64) throw new Error(`Gemini: no image in response: ${JSON.stringify(json).slice(0, 200)}`)
  await saveImageBuffer(Buffer.from(b64, 'base64'), destPath)
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
      return { ok: true }
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
