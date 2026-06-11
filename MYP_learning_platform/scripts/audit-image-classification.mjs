/**
 * Phase 1: Image Audit Script
 * Walks every data/papers/*\/questions.ts, extracts all figImages paths,
 * classifies each entry, and scans for missing_image patterns.
 *
 * Run: node scripts/audit-image-classification.mjs
 * Output: scripts/audit-results.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DATA_PAPERS = path.join(REPO_ROOT, 'data', 'papers')
const PUBLIC = path.join(REPO_ROOT, 'public')

// ─── helpers ────────────────────────────────────────────────────────────────

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Extract const P = '...' value from file content */
function extractP(content) {
  const m = content.match(/const P\s*=\s*['"`]([^'"`]+)['"`]/)
  return m ? m[1] : ''
}

/**
 * Extract all figImages array contents with their character positions.
 * Returns [{arrayContent, startIndex}]
 */
function extractFigImagesArrays(content) {
  const results = []
  const re = /figImages\s*:\s*\[([^\]]*)\]/g
  let m
  while ((m = re.exec(content)) !== null) {
    results.push({ arrayContent: m[1], startIndex: m.index, fullMatch: m[0] })
  }
  return results
}

/**
 * Parse paths out of a figImages array content string.
 * Handles: `${P}page-XX.png`, '/images/...', "images/...", relative paths.
 */
function parsePaths(arrayContent, P) {
  const paths = []

  // Template literals with ${P}: `${P}page-05-crop.png`
  const tplRe = /`\$\{P\}([^`]+)`/g
  let m
  while ((m = tplRe.exec(arrayContent)) !== null) {
    paths.push(P + m[1])
  }

  // String literals (single/double quoted)
  const strRe = /['"]([^'"]+)['"]/g
  while ((m = strRe.exec(arrayContent)) !== null) {
    const p = m[1]
    // Ignore empty strings, template-literal fragments, or duplicates
    if (p && !p.includes('${') && !paths.includes(p)) {
      paths.push(p)
    }
  }

  return paths.filter(p => p.length > 0)
}

/**
 * For a figImages entry at `pos`, look backward to find:
 * - nearest question id (number after `id:`)
 * - nearest task label (string after `label:`)
 * - whether this is task-level (label found AFTER the question id)
 */
function findContext(content, pos) {
  const before = content.substring(0, pos)

  // Nearest id: N (question id)
  const idMatches = [...before.matchAll(/\bid\s*:\s*(\d+)/g)]
  const lastIdMatch = idMatches.length > 0 ? idMatches[idMatches.length - 1] : null
  const questionId = lastIdMatch ? parseInt(lastIdMatch[1]) : null
  const idPos = lastIdMatch ? lastIdMatch.index : 0

  // Nearest label: 'x' AFTER the question id
  const afterId = before.substring(idPos)
  const labelMatch = afterId.match(/\blabel\s*:\s*['"`]([a-z0-9]*)['"`]/)
  const taskLabel = labelMatch ? (labelMatch[1] || null) : null

  // Extract short stem/text for classification context
  const stemMatch = before.match(/\bstem\s*:\s*['"`]([\s\S]{0,300})/)
  const stemText = stemMatch ? stemMatch[1].replace(/\\n/g, ' ').replace(/['"`][\s\S]*$/, '').trim().slice(0, 200) : ''

  const textMatch = before.match(/\btext\s*:\s*['"`]([\s\S]{0,300})/)
  const taskText = textMatch ? textMatch[1].replace(/\\n/g, ' ').replace(/['"`][\s\S]*$/, '').trim().slice(0, 200) : ''

  const topicMatch = before.match(/\btopic\s*:\s*['"`]([^'"`]{0,100})/)
  const topic = topicMatch ? topicMatch[1] : ''

  return { questionId, taskLabel: taskLabel || null, stemText, taskText, topic }
}

/**
 * Determine the status of a resolved path.
 */
function classifyPath(resolvedPath, paperId) {
  // Malformed: doesn't start with /images/papers/
  if (!resolvedPath.startsWith('/images/papers/')) {
    return { status: 'malformed_path', fileExists: false, sourcePaperId: null }
  }

  const physicalPath = path.join(PUBLIC, resolvedPath)
  const fileExists = fs.existsSync(physicalPath)

  // Already generated
  if (resolvedPath.endsWith('-generated.png') && fileExists) {
    return { status: 'already_generated', fileExists: true, sourcePaperId: null }
  }

  // Extract the directory paperId from the path: /images/papers/{id}/filename
  const pathParts = resolvedPath.split('/')  // ['', 'images', 'papers', '{id}', 'filename']
  const pathPaperId = pathParts[3] || ''

  const isVariant = paperId.endsWith('-v1') || paperId.endsWith('-v2')

  if (!fileExists) {
    return { status: 'broken_path', fileExists: false, sourcePaperId: pathPaperId !== paperId ? pathPaperId : null }
  }

  // File exists. Is this a variant reusing a source image?
  if (isVariant && pathPaperId !== paperId) {
    return { status: 'variant_shared_source', fileExists: true, sourcePaperId: pathPaperId }
  }

  // File exists, paper is a source paper (or variant with own dir)
  return { status: 'existing_source_image', fileExists: true, sourcePaperId: null }
}

// ─── missing_image scan ──────────────────────────────────────────────────────

const IMAGE_REF_PATTERNS = [
  /diagram below/i,
  /figure below/i,
  /the figure shows/i,
  /as shown in/i,
  /photograph/i,
  /the image shows/i,
  /shown in the diagram/i,
  /refer to (the )?(fig|diagram|image|photograph)/i,
  /from the image/i,
  /measure the .{0,30} shown/i,
]

/**
 * Find positions in file that reference an image in text/stem but have no nearby figImages.
 */
function findMissingImages(content, paperId) {
  const missing = []
  const figImagePositions = [...content.matchAll(/figImages\s*:/g)].map(m => m.index)

  for (const pattern of IMAGE_REF_PATTERNS) {
    const re = new RegExp(pattern.source, 'gi')
    let m
    while ((m = re.exec(content)) !== null) {
      const pos = m.index
      // Check if there's a figImages entry within 800 chars before or after
      const nearby = figImagePositions.some(fpos => Math.abs(fpos - pos) < 800)
      if (!nearby) {
        const ctx = findContext(content, pos)
        // Avoid duplicate entries for same question+task
        const key = `${paperId}:q${ctx.questionId}:${ctx.taskLabel}`
        if (!missing.find(e => `${e.paperId}:q${e.questionId}:${e.taskLabel}` === key)) {
          missing.push({
            paperId,
            questionId: ctx.questionId,
            taskLabel: ctx.taskLabel,
            path: null,
            physicalPath: null,
            fileExists: false,
            status: 'missing_image',
            sourcePaperId: null,
            keyword: m[0],
            stemText: ctx.stemText,
            taskText: ctx.taskText,
            topic: ctx.topic,
          })
        }
      }
    }
  }
  return missing
}

// ─── main ────────────────────────────────────────────────────────────────────

function auditPaper(paperId) {
  const qFile = path.join(DATA_PAPERS, paperId, 'questions.ts')
  if (!fs.existsSync(qFile)) return []

  const content = fs.readFileSync(qFile, 'utf8')
  const P = extractP(content)
  const entries = []

  const arrays = extractFigImagesArrays(content)
  for (const { arrayContent, startIndex } of arrays) {
    const paths = parsePaths(arrayContent, P)
    if (paths.length === 0) continue

    const ctx = findContext(content, startIndex)

    for (const resolvedPath of paths) {
      const { status, fileExists, sourcePaperId } = classifyPath(resolvedPath, paperId)
      const physicalPath = resolvedPath.startsWith('/images/papers/')
        ? path.relative(REPO_ROOT, path.join(PUBLIC, resolvedPath))
        : null

      entries.push({
        paperId,
        questionId: ctx.questionId,
        taskLabel: ctx.taskLabel,
        topic: ctx.topic,
        path: resolvedPath,
        physicalPath,
        fileExists,
        status,
        sourcePaperId,
        stemText: ctx.stemText.slice(0, 200),
        taskText: ctx.taskText.slice(0, 200),
      })
    }
  }

  // missing_image scan
  const missing = findMissingImages(content, paperId)
  entries.push(...missing)

  return entries
}

function main() {
  console.log('🔍 Auditing image references...')

  const paperDirs = fs.readdirSync(DATA_PAPERS)
    .filter(d => d !== '_archive' && fs.existsSync(path.join(DATA_PAPERS, d, 'questions.ts')))
    .sort()

  console.log(`   Found ${paperDirs.length} papers`)

  const allEntries = []
  let processed = 0

  for (const paperId of paperDirs) {
    const entries = auditPaper(paperId)
    allEntries.push(...entries)
    processed++
    if (processed % 20 === 0) {
      process.stdout.write(`   ${processed}/${paperDirs.length} papers scanned...\r`)
    }
  }

  console.log(`\n   Scanned ${processed} papers, found ${allEntries.length} entries`)

  // Build summary
  const summary = {
    existing_source_image: 0,
    variant_shared_source: 0,
    broken_path: 0,
    malformed_path: 0,
    already_generated: 0,
    missing_image: 0,
  }
  for (const e of allEntries) {
    if (summary[e.status] !== undefined) summary[e.status]++
    else summary[e.status] = 1
  }

  const output = {
    scannedAt: null,  // stamped after script completes (see hard rule #8)
    totalPapers: processed,
    totalRefs: allEntries.filter(e => e.status !== 'missing_image').length,
    totalEntries: allEntries.length,
    entries: allEntries,
    summary,
  }

  const outPath = path.join(__dirname, 'audit-results.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2))

  // Stamp timestamp AFTER writing (hard rule #8)
  const withTimestamp = { ...output, scannedAt: new Date().toISOString() }
  fs.writeFileSync(outPath, JSON.stringify(withTimestamp, null, 2))

  console.log('\n📊 Summary:')
  for (const [k, v] of Object.entries(summary)) {
    const icon = { existing_source_image: '📷', variant_shared_source: '🔗', broken_path: '💔',
                   malformed_path: '⚠️', already_generated: '✅', missing_image: '❓' }[k] || '•'
    console.log(`   ${icon} ${k}: ${v}`)
  }
  console.log(`\n✅ Written to scripts/audit-results.json`)
}

main()
