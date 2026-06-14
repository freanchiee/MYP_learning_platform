#!/usr/bin/env node
/**
 * MYP Exam Platform — Supabase Paper Upsert
 *
 * Reads data/papers/{id}/questions.ts to get subject/session/year/marks,
 * then upserts the row into public.papers.
 *
 * Usage:
 *   node scripts/supabase-upsert.js physics-nov-2024
 *   node scripts/supabase-upsert.js physics-nov-2024 --dry-run
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY=eyJ...   (service role, not anon key)
 */

// Disable strict TLS for self-signed certs (dev/admin script only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const fs   = require('fs')
const path = require('path')
const https = require('https')

const ROOT     = path.join(__dirname, '..')
const PAPERS   = path.join(ROOT, 'data/papers')
const ENV_FILE = path.join(ROOT, '.env.local')

// ─── Parse .env.local ─────────────────────────────────────────────────────────

function loadEnv() {
  const env = {}
  if (!fs.existsSync(ENV_FILE)) return env
  for (const line of fs.readFileSync(ENV_FILE, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_]+)\s*=\s*(.+)$/)
    if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '')
  }
  return env
}

// ─── Parse paperMeta from questions.ts ────────────────────────────────────────

function parseMeta(paperId) {
  const file = path.join(PAPERS, paperId, 'questions.ts')
  if (!fs.existsSync(file)) {
    throw new Error(`questions.ts not found for ${paperId}`)
  }
  const fullSrc = fs.readFileSync(file, 'utf8')

  // Read values from the `paperMeta` object literal only — not from any inline
  // `interface PaperMeta { subject: string; ... }` that precedes it (I&S papers
  // declare the interface inline, which would otherwise be matched first).
  const metaIdx = fullSrc.search(/(export\s+)?const\s+paperMeta\b/)
  const src = metaIdx >= 0 ? fullSrc.slice(metaIdx) : fullSrc

  const get = (key) => {
    const m = src.match(new RegExp(`${key}\\s*:\\s*([^,\\n]+)`))
    return m ? m[1].trim().replace(/['"]/g, '') : null
  }

  return {
    id:                paperId,
    subject:           get('subject')           || 'Physics',
    session:           get('session')           || 'November',
    year:              parseInt(get('year'))     || 2024,
    total_marks:       parseInt(get('totalMarks'))       || 100,
    duration_minutes:  parseInt(get('durationMinutes'))  || 90,
    is_published:      true,
  }
}

// ─── Supabase REST upsert ─────────────────────────────────────────────────────

function supabaseUpsert(url, key, row) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify([row])
    const u = new URL(`${url}/rest/v1/papers`)

    const options = {
      hostname: u.hostname,
      path:     u.pathname + '?on_conflict=id',
      method:   'POST',
      headers: {
        'Content-Type':  'application/json',
        'Content-Length': Buffer.byteLength(body),
        'apikey':        key,
        'Authorization': `Bearer ${key}`,
        'Prefer':        'resolution=merge-duplicates,return=minimal',
      },
    }

    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => { data += chunk })
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.statusCode)
        } else {
          reject(new Error(`Supabase returned ${res.statusCode}: ${data}`))
        }
      })
    })
    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const paperId = process.argv[2]
  const dryRun  = process.argv.includes('--dry-run')

  if (!paperId) {
    console.error('Usage: node scripts/supabase-upsert.js <paper-id> [--dry-run]')
    process.exit(1)
  }

  const env = loadEnv()
  const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const SERVICE_KEY  = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error('ERROR: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set in .env.local')
    console.error('Add SUPABASE_SERVICE_ROLE_KEY to .env.local (find it in Supabase dashboard → Settings → API)')
    process.exit(1)
  }

  let meta
  try {
    meta = parseMeta(paperId)
  } catch (e) {
    console.error(`ERROR: ${e.message}`)
    process.exit(1)
  }

  console.log(`  Paper row to upsert:`)
  console.log(`    ${JSON.stringify(meta, null, 4).replace(/\n/g, '\n    ')}`)

  if (dryRun) {
    console.log('  DRY RUN — Supabase upsert skipped')
    return
  }

  try {
    const status = await supabaseUpsert(SUPABASE_URL, SERVICE_KEY, meta)
    console.log(`  ✅ Supabase upsert OK (HTTP ${status})`)
  } catch (err) {
    console.error(`  ❌ Supabase upsert failed: ${err.message}`)
    process.exit(1)
  }
}

main()
