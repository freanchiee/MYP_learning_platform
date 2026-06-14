#!/usr/bin/env node
/**
 * Mark-integrity checker for encoded Geography (I&S) papers.
 *
 * Invariant: in an I&S paper every task/strand-group has exactly one MSEntry keyed
 * q{id}_{label}, and every mark belongs to exactly one such entry — so the sum of all
 * MSEntry.marks must equal paperMeta.totalMarks. Also checks metadata + key coverage.
 *
 * Usage: node scripts/check-geo-paper.js geography-may-2025   (or pass nothing → all geography-*)
 */
const fs = require('fs')
const path = require('path')
const PAPERS = path.join(__dirname, '..', 'data/papers')

function checkPaper(id) {
  const dir = path.join(PAPERS, id)
  const qFile = path.join(dir, 'questions.ts')
  const mFile = path.join(dir, 'markscheme.ts')
  if (!fs.existsSync(qFile) || !fs.existsSync(mFile)) return { id, ok: false, errors: ['missing questions.ts or markscheme.ts'] }

  const qSrc = fs.readFileSync(qFile, 'utf8')
  const mSrc = fs.readFileSync(mFile, 'utf8')
  const errors = []

  // paperMeta (slice from the const so the interface isn't matched)
  const metaIdx = qSrc.search(/const\s+paperMeta\b/)
  const meta = metaIdx >= 0 ? qSrc.slice(metaIdx) : qSrc
  const total = parseInt((meta.match(/totalMarks\s*:\s*(\d+)/) || [])[1], 10)
  const dur = parseInt((meta.match(/durationMinutes\s*:\s*(\d+)/) || [])[1], 10)
  const subject = (meta.match(/subject\s*:\s*'([^']+)'/) || [])[1]

  if (subject !== 'Geography') errors.push(`subject is '${subject}', expected 'Geography'`)
  if (total !== 80) errors.push(`totalMarks is ${total}, expected 80`)
  if (dur !== 120) errors.push(`durationMinutes is ${dur}, expected 120`)

  // Sum MSEntry.marks — `marks: <int>,` (unquoted int; rubricBands use quoted strings so are excluded)
  const msKeys = [...mSrc.matchAll(/^\s*(q\d+_[a-z]*)\s*:\s*\{/gm)].map((m) => m[1])
  const entryMarks = [...mSrc.matchAll(/^\s{4}marks:\s*(\d+),/gm)].map((m) => parseInt(m[1], 10))
  const msSum = entryMarks.reduce((a, b) => a + b, 0)
  if (msSum !== total) errors.push(`Σ MSEntry.marks = ${msSum}, expected ${total} (= totalMarks). MS entries found: ${entryMarks.length}`)
  if (msKeys.length !== entryMarks.length) errors.push(`found ${msKeys.length} MS keys but ${entryMarks.length} top-level marks — check formatting`)

  // Question count
  const qCount = [...qSrc.matchAll(/^\s{4}id:\s*\d+,/gm)].length

  return { id, ok: errors.length === 0, errors, info: { total, dur, subject, qCount, msKeys: msKeys.length, msSum } }
}

const args = process.argv.slice(2)
const ids = args.length
  ? args
  : fs.readdirSync(PAPERS).filter((d) => /^geography-/.test(d)).sort()

let failed = 0
for (const id of ids) {
  const r = checkPaper(id)
  if (r.ok) {
    console.log(`✅ ${id}  (${r.info.qCount} Qs · ${r.info.msKeys} MS keys · Σmarks ${r.info.msSum}/${r.info.total})`)
  } else {
    failed++
    console.log(`❌ ${id}`)
    r.errors.forEach((e) => console.log(`     - ${e}`))
  }
}
console.log(`\n${ids.length - failed}/${ids.length} papers passed.`)
process.exit(failed ? 1 : 0)
