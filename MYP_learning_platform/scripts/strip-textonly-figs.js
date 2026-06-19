#!/usr/bin/env node
/**
 * Remove dead figImages refs that the image audit classified as `text_only`
 * (mis-crops of the original that contained only question prose/UI — no diagram).
 * These render nothing useful and are IB screenshots, so the ref is deleted.
 * If a figImages array becomes empty, the whole property is removed.
 *
 * Usage: node scripts/strip-textonly-figs.js [subjectPrefix|all]   DRY=1 to preview
 */
const fs = require('fs')
const path = require('path')
const PAPERS = path.join(__dirname, '..', 'data/papers')
const DRY = process.env.DRY === '1'
const prefix = process.argv[2] || 'all'

let removed = 0, papersTouched = [], cleared = []

for (const id of fs.readdirSync(PAPERS)) {
  if (id.startsWith('_')) continue
  if (prefix !== 'all' && !id.startsWith(prefix)) continue
  const qf = path.join(PAPERS, id, 'questions.ts')
  const cf = path.join(PAPERS, id, 'image-classifications.json')
  if (!fs.existsSync(qf) || !fs.existsSync(cf)) continue
  let src = fs.readFileSync(qf, 'utf8')
  if (!src.includes('.png')) continue

  // Variants (-v1/-v2) are isomorphic and share figure crops with their base paper,
  // so a basename classified text_only in the base is also a mis-crop here.
  const baseId = id.replace(/-v[12]$/, '')
  const manifests = [cf]
  if (baseId !== id) {
    const bcf = path.join(PAPERS, baseId, 'image-classifications.json')
    if (fs.existsSync(bcf)) manifests.push(bcf)
  }
  const textOnly = new Set()
  for (const mf of manifests) {
    for (const e of JSON.parse(fs.readFileSync(mf, 'utf8'))) {
      if (e && e.image_type === 'text_only' && e.original_path) textOnly.add(path.basename(e.original_path))
    }
  }
  if (!textOnly.size) continue

  let n = 0
  const next = src.replace(/(\n[ \t]*)figImages:\s*\[([^\]]*)\](,?)/g, (m, lead, body, comma) => {
    const entries = body.split(',').map(s => s.trim()).filter(Boolean)
    const kept = entries.filter(entry => {
      const base = (entry.match(/[\w.\-]+\.(png|svg)/) || [])[0]
      const drop = base && textOnly.has(path.basename(base))
      if (drop) n++
      return !drop
    })
    if (kept.length === entries.length) return m            // nothing removed here
    if (kept.length === 0) return ''                        // drop whole property + its line
    return `${lead}figImages: [${kept.join(', ')}]${comma}`
  })

  if (n > 0) {
    if (!DRY) fs.writeFileSync(qf, next)
    removed += n
    papersTouched.push(`${id} (-${n})`)
    if (!next.includes('.png')) cleared.push(id)
  }
}

console.log(`${DRY ? '[DRY] ' : ''}removed ${removed} text_only refs across ${papersTouched.length} papers`)
console.log(`\nFULLY CLEARED (now .png-free): ${cleared.length}\n  ${cleared.join('\n  ')}`)
console.log(`\nTouched:\n  ${papersTouched.join('\n  ')}`)
