#!/usr/bin/env node
/**
 * Wire already-generated figure recreations into questions.ts.
 *
 * Each paper's image-classifications.json maps an original IB screenshot
 * (original_path .png) to a generated original recreation (generated_path .svg,
 * already uploaded to Supabase Storage). This script repoints the figImages refs
 * in questions.ts from the .png to that .svg — but ONLY after HTTP-verifying the
 * .svg actually exists in the public bucket, so we never create a broken image.
 *
 * Usage: node scripts/wire-recreations.js <subjectPrefix|all>   (e.g. physics)
 * Read-only safe to dry-run with DRY=1.
 */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const PAPERS = path.join(ROOT, 'data/papers')
const PUBLIC = 'https://hbgeynkqphigwicjigvu.supabase.co/storage/v1/object/public'
const DRY = process.env.DRY === '1'
const prefix = process.argv[2] || 'all'

const existsCache = new Map()
async function svgExists(bucket, paperId, file) {
  const url = `${PUBLIC}/${bucket}/papers/${paperId}/${file}`
  if (existsCache.has(url)) return existsCache.get(url)
  let ok = false
  try {
    const r = await fetch(url, { method: 'HEAD' })
    ok = r.ok
  } catch { ok = false }
  existsCache.set(url, ok)
  return ok
}

async function main() {
  const dirs = fs.readdirSync(PAPERS).filter(id => {
    if (id.startsWith('_')) return false
    if (prefix !== 'all' && !id.startsWith(prefix)) return false
    return fs.existsSync(path.join(PAPERS, id, 'questions.ts')) &&
           fs.existsSync(path.join(PAPERS, id, 'image-classifications.json'))
  })

  const cleared = [], partial = [], skipped = [], missingSvg = []
  let swaps = 0

  for (const id of dirs) {
    const qf = path.join(PAPERS, id, 'questions.ts')
    let src = fs.readFileSync(qf, 'utf8')
    if (!src.includes('.png')) continue
    const bucket = id.split('-')[0]

    const manifest = JSON.parse(fs.readFileSync(path.join(PAPERS, id, 'image-classifications.json'), 'utf8'))
    const map = {}
    for (const e of manifest) {
      if (!e || !e.original_path || !e.generated_path) continue
      if (!String(e.generated_path).endsWith('.svg')) continue
      map[path.basename(e.original_path)] = path.basename(e.generated_path)
    }

    let changed = false
    for (const [png, svg] of Object.entries(map)) {
      if (!src.includes(png)) continue
      if (await svgExists(bucket, id, svg)) {
        src = src.split(png).join(svg)
        changed = true
        swaps++
      } else {
        missingSvg.push(`${id}: ${svg} (mapped from ${png}) NOT in storage`)
      }
    }

    if (changed && !DRY) fs.writeFileSync(qf, src)

    const stillPng = src.includes('.png')
    if (changed && !stillPng) cleared.push(id)
    else if (stillPng) partial.push(`${id} [${(src.match(/[\w-]+\.png/g) || []).filter((v,i,a)=>a.indexOf(v)===i).join(', ')}]`)
    else skipped.push(id)
  }

  console.log(`\n${DRY ? '[DRY] ' : ''}subject=${prefix}  swaps=${swaps}`)
  console.log(`\nCLEARED (now .png-free): ${cleared.length}\n  ${cleared.join('\n  ')}`)
  console.log(`\nPARTIAL (png left needing manual recreation): ${partial.length}\n  ${partial.join('\n  ')}`)
  if (missingSvg.length) console.log(`\n⚠ MAPPED SVG MISSING FROM STORAGE: ${missingSvg.length}\n  ${missingSvg.join('\n  ')}`)
}

main()
