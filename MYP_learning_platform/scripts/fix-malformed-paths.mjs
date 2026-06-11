/**
 * Fix malformed figImages paths in chemistry-nov questions.ts files.
 *
 * Three patterns found in audit:
 *   A) 'page-02.png'                          → '/images/papers/{sourceId}/page-02.png'
 *   B) 'papers/chemistry-nov-2021/page-02.png' → '/images/papers/chemistry-nov-2021/page-02.png'
 *   C) 'chemistry-nov-2022/page-02.png'        → '/images/papers/chemistry-nov-2022/page-02.png'
 *
 * For variants (-v1/-v2): Pattern A bare filenames are prefixed with the SOURCE paperId
 * (i.e. strip -v1/-v2), because that is where the physical files exist.
 *
 * Run: node scripts/fix-malformed-paths.mjs [--dryRun]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DATA_PAPERS = path.join(REPO_ROOT, 'data', 'papers')

const dryRun = process.argv.includes('--dryRun') || process.argv.includes('--dry-run')

// Papers with PATTERN A: bare 'page-XX.png' — source paperId for the physical files
const PATTERN_A_PAPERS = {
  'chemistry-nov-2019':    'chemistry-nov-2019',
  'chemistry-nov-2019-v1': 'chemistry-nov-2019',   // v1 uses source images
  'chemistry-nov-2019-v2': 'chemistry-nov-2019',
  'chemistry-nov-2020':    'chemistry-nov-2020',
  'chemistry-nov-2020-v1': 'chemistry-nov-2020',
  'chemistry-nov-2020-v2': 'chemistry-nov-2020',
}

// Papers with PATTERN B: 'papers/{id}/page-XX.png'  (just needs '/images' prepended)
const PATTERN_B_PAPERS = ['chemistry-nov-2021']

// Papers with PATTERN C: '{id}/page-XX.png'  (needs '/images/papers/' prepended)
const PATTERN_C_PAPERS = [
  'chemistry-nov-2022',
  'chemistry-nov-2023',
  'chemistry-nov-2023-v1',
  'chemistry-nov-2023-v2',
  'chemistry-nov-2024',
  'chemistry-nov-2024-v1',
  'chemistry-nov-2024-v2',
]

function fixPatternA(content, sourceId) {
  // Match figImages arrays that contain bare filenames like 'page-02.png'
  // Pattern: single/double-quoted string that looks like page-XX.png (no slashes)
  return content.replace(
    /figImages\s*:\s*\[([^\]]+)\]/g,
    (match, inner) => {
      const fixedInner = inner.replace(
        /(['"])(page-\d+[^'"]*\.(png|jpg|jpeg))(['"])/g,
        (_, q1, filename, _ext, q2) => `'${'/images/papers/' + sourceId + '/'}${filename}'`
      )
      return `figImages: [${fixedInner}]`
    }
  )
}

function fixPatternB(content) {
  // 'papers/{id}/page-XX.png' → '/images/papers/{id}/page-XX.png'
  return content.replace(
    /(['"])papers\/(chemistry-nov-\d+)\/([^'"]+)(['"])/g,
    (_match, _q1, id, filename, _q2) => `'/images/papers/${id}/${filename}'`
  )
}

function fixPatternC(content) {
  // '{id}/page-XX.png' → '/images/papers/{id}/page-XX.png'
  // Only match paths that start with chemistry-nov-XXXX/ (no leading slash)
  return content.replace(
    /(['"])(chemistry-nov-\d+)\/(page-[^'"]+)(['"])/g,
    (_match, _q1, id, filename, _q2) => `'/images/papers/${id}/${filename}'`
  )
}

function countMatches(content, pattern) {
  return (content.match(pattern) ?? []).length
}

let totalFixed = 0
let totalFiles = 0

function processFile(paperId, fixFn, description) {
  const qFile = path.join(DATA_PAPERS, paperId, 'questions.ts')
  if (!fs.existsSync(qFile)) {
    console.log(`  ⚠️  Not found: ${qFile}`)
    return
  }

  const original = fs.readFileSync(qFile, 'utf8')
  const fixed = fixFn(original)

  if (original === fixed) {
    console.log(`  ✓ ${paperId} — no changes needed`)
    return
  }

  const linesBefore = original.split('\n').filter(l => l.includes('figImages')).length
  const linesAfter  = fixed.split('\n').filter(l => l.includes('figImages')).length

  // Verify no valid paths were accidentally corrupted
  const badAfter = (fixed.match(/figImages.*?['"][^/][^'"]*\.(png|jpg)['"]/) ?? []).length
  if (badAfter > 0) {
    console.error(`  ❌ ${paperId} — fix produced ${badAfter} still-malformed entries, SKIPPING`)
    return
  }

  if (dryRun) {
    console.log(`  [DRY RUN] ${paperId} (${description}) — would fix ${linesBefore} figImages lines`)
    // Show a diff sample
    const origLines = original.split('\n').filter(l => l.includes('figImages'))
    const fixedLines = fixed.split('\n').filter(l => l.includes('figImages'))
    origLines.slice(0, 2).forEach((l, i) => {
      console.log(`    - ${l.trim()}`)
      if (fixedLines[i]) console.log(`    + ${fixedLines[i].trim()}`)
    })
  } else {
    fs.writeFileSync(qFile, fixed)
    console.log(`  ✅ ${paperId} (${description}) — fixed ${linesBefore} figImages lines`)
    totalFixed += linesBefore
    totalFiles++
  }
}

console.log(`\n🔧 Fixing malformed figImages paths…${dryRun ? ' [DRY RUN]' : ''}`)

console.log('\nPattern A — bare filenames (prefix with source dir):')
for (const [paperId, sourceId] of Object.entries(PATTERN_A_PAPERS)) {
  processFile(paperId, content => fixPatternA(content, sourceId), `source=${sourceId}`)
}

console.log('\nPattern B — missing /images prefix:')
for (const paperId of PATTERN_B_PAPERS) {
  processFile(paperId, fixPatternB, 'add /images prefix')
}

console.log('\nPattern C — missing /images/papers/ prefix:')
for (const paperId of PATTERN_C_PAPERS) {
  processFile(paperId, fixPatternC, 'add /images/papers/ prefix')
}

if (!dryRun) {
  console.log(`\n✅ Fixed ${totalFixed} figImages references across ${totalFiles} files`)
  console.log('   Re-run the audit to verify: node scripts/audit-image-classification.mjs')
} else {
  console.log('\n[DRY RUN] — no files written. Remove --dryRun to apply.')
}
