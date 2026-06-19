#!/usr/bin/env node
/**
 * Read-only. For every still-gated paper, categorise each remaining .png figImages
 * ref against its image-classifications.json entry, so we know what can be resolved
 * automatically (remove a text_only mis-crop / wire a code_rendered component) vs
 * what needs genuine new artwork.
 */
const fs = require('fs')
const path = require('path')
const PAPERS = path.join(__dirname, '..', 'data/papers')

const cat = { text_only: [], code_component: [], svg_pending: [], png_gen: [], no_entry: [] }
const perPaper = {}

for (const id of fs.readdirSync(PAPERS)) {
  if (id.startsWith('_')) continue
  const qf = path.join(PAPERS, id, 'questions.ts')
  const cf = path.join(PAPERS, id, 'image-classifications.json')
  if (!fs.existsSync(qf)) continue
  const src = fs.readFileSync(qf, 'utf8')
  const pngs = [...new Set((src.match(/[\w.\-/]+\.png/g) || []).map(s => path.basename(s)))]
  if (!pngs.length) continue
  const manifest = fs.existsSync(cf) ? JSON.parse(fs.readFileSync(cf, 'utf8')) : []
  const byPng = {}
  for (const e of manifest) if (e && e.original_path) byPng[path.basename(e.original_path)] = e
  perPaper[id] = {}
  for (const png of pngs) {
    const e = byPng[png]
    let c
    if (!e) c = 'no_entry'
    else if (e.image_type === 'text_only') c = 'text_only'
    else if (e.generated_path && String(e.generated_path).endsWith('.svg')) c = 'svg_pending' // svg named but missing in storage (wire skipped)
    else if (e.render_component && e.render_data) c = 'code_component'
    else if (e.generated_path && String(e.generated_path).endsWith('.png')) c = 'png_gen'
    else c = 'no_entry'
    cat[c].push(`${id}/${png}`)
    perPaper[id][png] = c
  }
}

console.log('=== counts by category (remaining .png refs) ===')
for (const k of Object.keys(cat)) console.log(`  ${k}: ${cat[k].length}`)

// How many papers fully clear if we auto-handle text_only + code_component?
let autoClear = 0, needsArt = []
for (const [id, m] of Object.entries(perPaper)) {
  const cats = Object.values(m)
  const allAuto = cats.every(c => c === 'text_only' || c === 'code_component')
  if (allAuto) autoClear++
  else needsArt.push(`${id} [${[...new Set(cats)].join(',')}]`)
}
console.log(`\n=== papers that fully clear via auto (text_only removal + component wire): ${autoClear} ===`)
console.log(`\n=== papers still needing new artwork/encoding (${needsArt.length}) ===`)
console.log('  ' + needsArt.sort().join('\n  '))
console.log(`\n=== code_component refs (wire as artefact): ${cat.code_component.length} ===`)
console.log('  ' + cat.code_component.join('\n  '))
