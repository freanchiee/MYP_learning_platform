// Browser-side client for the on-device sentence-similarity model (public/semantic/worker.js).
// Starts lazily the first time a coached field is on screen, keeps one worker for the page, caches every
// embedding, and reports its state so the UI can say "smart check is loading". If the model cannot load
// (blocked CDN, old browser, offline) every call resolves to null and callers fall back to rule-based coaching.

export type SemanticStatus = 'idle' | 'loading' | 'ready' | 'failed'

let worker: Worker | null = null
let status: SemanticStatus = 'idle'
let seq = 0
const pending = new Map<number, { resolve: (v: number[][] | null) => void; timer: ReturnType<typeof setTimeout> }>()
const cache = new Map<string, number[]>()
const listeners = new Set<(s: SemanticStatus) => void>()

function setStatus(s: SemanticStatus) {
  status = s
  listeners.forEach((l) => l(s))
}

export function semanticStatus(): SemanticStatus {
  return status
}

export function onSemanticStatus(l: (s: SemanticStatus) => void): () => void {
  listeners.add(l)
  return () => { listeners.delete(l) }
}

function fail() {
  setStatus('failed')
  pending.forEach((p) => { clearTimeout(p.timer); p.resolve(null) })
  pending.clear()
  try { worker?.terminate() } catch { /* already gone */ }
  worker = null
}

function start(): boolean {
  if (status === 'failed') return false
  if (worker) return true
  if (typeof window === 'undefined' || typeof Worker === 'undefined') { setStatus('failed'); return false }
  try {
    worker = new Worker('/semantic/worker.js', { type: 'module' })
  } catch {
    setStatus('failed')
    return false
  }
  setStatus('loading')
  worker.onmessage = (e: MessageEvent) => {
    const d = e.data as { ready?: boolean; id?: number; vectors?: number[][]; error?: string }
    if (d.ready) return
    if (d.id == null) return
    const p = pending.get(d.id)
    if (!p) return
    pending.delete(d.id)
    clearTimeout(p.timer)
    if (d.error || !d.vectors) { p.resolve(null); if (status !== 'ready') fail(); return }
    if (status !== 'ready') setStatus('ready')
    p.resolve(d.vectors)
  }
  worker.onerror = () => fail()
  return true
}

async function embed(texts: string[]): Promise<number[][] | null> {
  const missing = Array.from(new Set(texts.filter((t) => !cache.has(t))))
  if (missing.length) {
    if (!start() || !worker) return null
    const id = ++seq
    // The first call has to download and start the model, so it gets a long timeout; later calls are quick.
    const wait = status === 'ready' ? 15000 : 90000
    const vectors = await new Promise<number[][] | null>((resolve) => {
      const timer = setTimeout(() => { pending.delete(id); if (status !== 'ready') fail(); resolve(null) }, wait)
      pending.set(id, { resolve, timer })
      worker!.postMessage({ id, texts: missing })
    })
    if (!vectors) return null
    missing.forEach((t, i) => cache.set(t, vectors[i]))
  }
  return texts.map((t) => cache.get(t)!)
}

const dot = (a: number[], b: number[]) => a.reduce((s, x, i) => s + x * b[i], 0)

/** Meaning similarity (0-1) between a written answer and its closest model answer, or null if the model is unavailable. */
export async function semanticSimilarity(text: string, references: string[]): Promise<number | null> {
  const refs = references.map((r) => r.trim()).filter(Boolean)
  if (!refs.length || !text.trim()) return null
  const vecs = await embed([text.trim().slice(0, 1200), ...refs])
  if (!vecs) return null
  const [t, ...rs] = vecs
  return Math.max(0, ...rs.map((r) => dot(t, r)))
}
