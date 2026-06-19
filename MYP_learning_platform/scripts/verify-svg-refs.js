#!/usr/bin/env node
/**
 * Read-only audit. HTTP-verify that EVERY .svg figImages ref in every launched
 * paper actually exists in the public Storage bucket — so no launched paper
 * renders a broken image. Reports any missing ref.
 */
const fs = require('fs')
const path = require('path')
const PAPERS = path.join(__dirname, '..', 'data/papers')
const PUBLIC = 'https://hbgeynkqphigwicjigvu.supabase.co/storage/v1/object/public'

const launchedSrc = fs.readFileSync(path.join(PAPERS, '..', 'launched-papers.ts'), 'utf8')
const launched = new Set([...launchedSrc.matchAll(/'([\w-]+)'/g)].map(m => m[1]))

async function exists(bucket, paperId, file) {
  const url = `${PUBLIC}/${bucket}/papers/${paperId}/${file}`
  for (let attempt = 0; attempt < 3; attempt++) {
    try { const r = await fetch(url, { method: 'HEAD' }); if (r.ok) return true; if (r.status === 404 || r.status === 400) { if (attempt === 2) return false } }
    catch { /* network blip — retry */ }
    await new Promise(r => setTimeout(r, 150 * (attempt + 1)))
  }
  return false
}

async function pool(items, n, fn) {
  const out = []; let i = 0
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const idx = i++; out[idx] = await fn(items[idx]) }
  }))
  return out
}

async function main() {
  const refs = []
  for (const id of fs.readdirSync(PAPERS)) {
    if (!launched.has(id)) continue
    const qf = path.join(PAPERS, id, 'questions.ts')
    if (!fs.existsSync(qf)) continue
    const src = fs.readFileSync(qf, 'utf8')
    // figImages arrays only (not GenericSVG inline svg strings)
    for (const m of src.matchAll(/figImages:\s*\[([^\]]*)\]/g)) {
      for (const f of m[1].match(/[\w.\-/]+\.svg/g) || []) {
        refs.push({ id, file: path.basename(f) })
      }
    }
  }
  const results = await pool(refs, 8, r => exists(r.id.split('-')[0], r.id, r.file))
  const missing = refs.filter((r, i) => !results[i]).map(r => `${r.id}/${r.file}`)
  console.log(`checked ${refs.length} svg figImages refs across launched papers`)
  console.log(`MISSING (broken — would 404): ${missing.length}`)
  if (missing.length) console.log('  ' + missing.sort().join('\n  '))
}
main()
