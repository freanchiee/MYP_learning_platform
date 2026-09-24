// Bundles each React learning artifact in artifacts-src/ into a standalone,
// self-contained HTML page in public/artifacts/ — React (and any npm
// packages the artifact imports, e.g. three) are bundled INTO the page, and
// Tailwind CSS is generated from that file's own class names, so the artifact
// is isolated from the site's bundle and styling and embeds via <iframe> just
// like the hand-written static HTML artifacts.
//
//   node scripts/build-artifacts.mjs            # build everything
//   node scripts/build-artifacts.mjs slug ...   # build only these slugs
//
// To add one: put <slug>.tsx/.jsx in artifacts-src/ (default export = the
// component), add it to ARTIFACTS below, run the script, commit the output.

import { build } from 'esbuild'
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'artifacts')

// slug -> { file, title }
export const ARTIFACTS = {
  'ct-reconstruction-bench': { file: 'ct-reconstruction-bench.jsx', title: 'CT Reconstruction Bench' },
  'atomic-quest': { file: 'atomic-quest.tsx', title: 'Atomic Quest' },
  'chemical-bonding': { file: 'chemical-bonding.tsx', title: 'Chemical Bonding Strandhoot' },
  'ecosystem-learning-game': { file: 'ecosystem-learning-game.tsx', title: 'Ecosystem Explorers' },
  'physics-ia-scaffolder': { file: 'physics-ia-scaffolder.tsx', title: 'Physics Internal Assessment Scaffolder' },
  'quantum-computing-primer': { file: 'quantum-computing-primer.tsx', title: 'A Primer to Quantum Computing' },
  'how-to-be-a-scientist': { file: 'how-to-be-a-scientist.jsx', title: 'How to Be a Scientist' },
  'sigfig-master': { file: 'sigfig-master.tsx', title: 'SigFig Master' },
  'em-spectrum-strandhoot': { file: 'em-spectrum-strandhoot.tsx', title: 'Electromagnetic Spectrum Strandhoot' },
  'toiletries-chemistry-strandhoot': { file: 'toiletries-chemistry-strandhoot.tsx', title: 'Toiletries Science Challenge' },
  'stellar-evolution': { file: 'stellar-evolution.tsx', title: 'Stellar Evolution Explorer' },
}

const tailwindCli = path.join(root, 'node_modules', 'tailwindcss', 'lib', 'cli.js')
const tailwindConfig = path.join(root, 'scripts', 'tailwind.artifacts.config.cjs')

function tailwindCss(sourceFile, tmp) {
  const input = path.join(tmp, 'in.css')
  const output = path.join(tmp, 'out.css')
  writeFileSync(input, '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n')
  execFileSync(process.execPath, [tailwindCli, '-i', input, '-o', output, '--config', tailwindConfig, '--content', sourceFile, '--minify'], {
    cwd: root,
    stdio: ['ignore', 'ignore', 'pipe'],
  })
  return readFileSync(output, 'utf8')
}

async function buildOne(slug, { file, title }) {
  const source = path.join(root, 'artifacts-src', file)
  if (!existsSync(source)) throw new Error(`missing source: ${source}`)
  const tmp = mkdtempSync(path.join(tmpdir(), 'artifact-'))
  try {
    const entry = `
      import React from 'react'
      import { createRoot } from 'react-dom/client'
      import App from ${JSON.stringify(source)}
      createRoot(document.getElementById('root')).render(React.createElement(App))
    `
    const result = await build({
      stdin: { contents: entry, resolveDir: root, loader: 'js' },
      bundle: true,
      write: false,
      minify: true,
      format: 'iife',
      target: 'es2019',
      jsx: 'automatic',
      loader: { '.js': 'jsx' },
      define: { 'process.env.NODE_ENV': '"production"' },
      logLevel: 'error',
    })
    const js = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script')
    const css = tailwindCss(source, tmp)
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>${css}</style>
</head>
<body>
<div id="root"></div>
<script>${js}</script>
</body>
</html>
`
    mkdirSync(outDir, { recursive: true })
    const target = path.join(outDir, `${slug}.html`)
    writeFileSync(target, html)
    console.log(`built ${slug}.html  (${(html.length / 1024).toFixed(0)} KB)`)
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
}

const wanted = process.argv.slice(2)
const slugs = wanted.length ? wanted : Object.keys(ARTIFACTS)
for (const slug of slugs) {
  if (!ARTIFACTS[slug]) throw new Error(`unknown artifact: ${slug}`)
  await buildOne(slug, ARTIFACTS[slug])
}
