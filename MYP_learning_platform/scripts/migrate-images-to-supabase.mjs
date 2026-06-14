#!/usr/bin/env node
/**
 * Migrate / sync exam images from public/images/papers → subject-wise Supabase
 * Storage buckets (physics / chemistry / biology), each public-read.
 *
 *   bucket   = paperId.split('-')[0]          (physics-may-2024 → physics)
 *   key      = papers/{paperId}/{file}        (mirrors the resolver in lib/assets.ts)
 *
 * Re-runnable (upsert). Pass an optional filter to sync just one paper/subject:
 *   node scripts/migrate-images-to-supabase.mjs                 # everything
 *   node scripts/migrate-images-to-supabase.mjs physics-may-2024
 *   node scripts/migrate-images-to-supabase.mjs physics         # prefix match
 *
 * Reads NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY from .env.local.
 */
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PAPERS_DIR = path.join(ROOT, 'public', 'images', 'papers')

// ── load env from .env.local (no dotenv dependency) ──────────────────────────
function loadEnv() {
  const envPath = path.join(ROOT, '.env.local')
  const out = {}
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line)
      if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
  return { ...out, ...process.env }
}
const env = loadEnv()
const URL = env.NEXT_PUBLIC_SUPABASE_URL
const KEY = env.SUPABASE_SERVICE_ROLE_KEY
if (!URL || !KEY) {
  console.error('✖ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const filter = process.argv[2] ?? '' // optional paperId / subject prefix
const supabase = createClient(URL, KEY, { auth: { persistSession: false } })

const CT = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml', gif: 'image/gif' }
const ctByExt = f => CT[f.split('.').pop()?.toLowerCase()] ?? 'application/octet-stream'
const subjectOf = paperId => paperId.split('-')[0]

/**
 * Content-type from the actual bytes, falling back to extension. Many `.svg` files
 * on disk are really PNG/JPEG (manual AI images saved into an svg-named slot); serving
 * those as image/svg+xml breaks rendering, so trust the magic numbers.
 */
function sniffContentType(b, filename) {
  if (b.length >= 4 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'image/png'
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg'
  if (b.length >= 3 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46) return 'image/gif'
  if (b.length >= 12 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
      b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return 'image/webp'
  return ctByExt(filename)
}

// ── collect files ────────────────────────────────────────────────────────────
function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    if (fs.statSync(full).isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

if (!fs.existsSync(PAPERS_DIR)) {
  console.error(`✖ ${PAPERS_DIR} does not exist`)
  process.exit(1)
}

const paperDirs = fs.readdirSync(PAPERS_DIR)
  .filter(d => d !== '_archive')
  .filter(d => fs.statSync(path.join(PAPERS_DIR, d)).isDirectory())
  .filter(d => !filter || d.startsWith(filter) || subjectOf(d) === filter)

// ── ensure buckets exist (public) ────────────────────────────────────────────
const subjects = [...new Set(paperDirs.map(subjectOf))]
for (const s of subjects) {
  const { error } = await supabase.storage.createBucket(s, {
    public: true,
    fileSizeLimit: '15MB',
  })
  if (error && !/already exists/i.test(error.message)) {
    console.error(`✖ createBucket ${s}: ${error.message}`)
    process.exit(1)
  }
  console.log(`• bucket "${s}" ready`)
}

// ── build upload jobs ────────────────────────────────────────────────────────
const jobs = []
for (const paperId of paperDirs) {
  for (const file of walk(path.join(PAPERS_DIR, paperId))) {
    const rel = path.relative(path.join(PAPERS_DIR, paperId), file).split(path.sep).join('/')
    jobs.push({
      bucket: subjectOf(paperId),
      key: `papers/${paperId}/${rel}`,
      file,
    })
  }
}
console.log(`\n↑ uploading ${jobs.length} files across ${subjects.length} bucket(s)…\n`)

// ── upload with a small concurrency pool ─────────────────────────────────────
let done = 0, failed = 0
const CONCURRENCY = 8
async function worker(queue) {
  while (queue.length) {
    const job = queue.pop()
    const body = fs.readFileSync(job.file)
    const { error } = await supabase.storage
      .from(job.bucket)
      .upload(job.key, body, { contentType: sniffContentType(body, job.key), upsert: true })
    if (error) { failed++; console.error(`  ✖ ${job.bucket}/${job.key}: ${error.message}`) }
    else done++
    if ((done + failed) % 100 === 0) console.log(`  …${done + failed}/${jobs.length}`)
  }
}
const queue = [...jobs]
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)))

console.log(`\n✓ done: ${done} uploaded, ${failed} failed, ${jobs.length} total`)
process.exit(failed ? 1 : 0)
