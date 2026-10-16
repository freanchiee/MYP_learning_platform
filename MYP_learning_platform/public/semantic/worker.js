// Runs a small sentence-embedding model (all-MiniLM-L6-v2, 8-bit quantised, ~23 MB, served from /models/ on this
// site) INSIDE the student's browser, so a written answer is never sent anywhere to be checked.
// The model turns a sentence into numbers so two sentences with the same meaning land close together even when
// the wording or spelling differs. It is a general sentence-similarity model, not trained on MYP rubrics, so it is
// used only as ONE signal in the answer coach (see lib/design-live/answerFeedback.ts), never as a grade.
//
// Everything is served from this site: the model (/models/), the runtime (transformers.js 3.0.2, /semantic/transformers.min.js)
// and its WebAssembly engine (/semantic/ort-wasm-simd-threaded.jsep.wasm), so no outside network or CDN is needed. If it
// cannot load (old browser, blocked downloads) the page falls back to rule-based coaching and nothing breaks.

import { pipeline, env } from '/semantic/transformers.min.js'

env.allowRemoteModels = false
env.allowLocalModels = true
env.localModelPath = '/models/'
env.backends.onnx.wasm.numThreads = 1
env.backends.onnx.wasm.wasmPaths = '/semantic/'

let extractor = null
let loading = null

async function load() {
  if (extractor) return extractor
  if (!loading) loading = pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', { quantized: true }).then((p) => (extractor = p))
  return loading
}

self.onmessage = async (e) => {
  const { id, texts } = e.data
  try {
    const ex = await load()
    const out = await ex(texts, { pooling: 'mean', normalize: true })
    self.postMessage({ id, vectors: out.tolist() })
  } catch (err) {
    self.postMessage({ id, error: String((err && err.message) || err) })
  }
}

self.postMessage({ ready: true })
