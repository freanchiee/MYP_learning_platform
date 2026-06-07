#!/bin/bash
# ────────────────────────────────────────────────────────────
# convert-biology-pdfs.sh
# Converts biology (and chemistry) PDFs to per-page PNGs.
# Requires: pdftoppm  (brew install poppler)
# Usage:    ./scripts/convert-biology-pdfs.sh [paperId]
#   e.g.   ./scripts/convert-biology-pdfs.sh biology-may-2025
#   or     ./scripts/convert-biology-pdfs.sh   (converts all defined papers)
# ────────────────────────────────────────────────────────────

set -e

SRC_BASE="/Users/utkarshkumar/Desktop/MYP/Previous year papers MYP"
DEST_BASE="$(dirname "$0")/../public/images/papers"

# ── Biology papers ───────────────────────────────────────────
declare -A PAPERS=(
  ["biology-may-2025"]="$SRC_BASE/Biology/M25-Biology.pdf"
  ["biology-may-2024"]="$SRC_BASE/Biology/M24-Biology.pdf"
  ["biology-may-2023"]="$SRC_BASE/Biology/M23-Biology.pdf"
  ["biology-may-2022"]="$SRC_BASE/Biology/M22-Biology.pdf"
  ["biology-may-2021"]="$SRC_BASE/Biology/M21-Biology.pdf"
  ["biology-may-2019"]="$SRC_BASE/Biology/M19-Biology.pdf"
  ["biology-may-2018"]="$SRC_BASE/Biology/M18-Biology.pdf"
  ["biology-may-2017"]="$SRC_BASE/Biology/M17-Biology.pdf"
  ["biology-may-2016"]="$SRC_BASE/Biology/M16-Biology.pdf"
  ["biology-nov-2024"]="$SRC_BASE/Biology/N24-Biology.pdf"
  ["biology-nov-2023"]="$SRC_BASE/Biology/N23-Biology.pdf"
  ["biology-nov-2022"]="$SRC_BASE/Biology/N22-Biology.pdf"
  ["biology-nov-2021"]="$SRC_BASE/Biology/N21-Biology.pdf"
  ["biology-nov-2020"]="$SRC_BASE/Biology/N20-Biology.pdf"
  ["biology-nov-2019"]="$SRC_BASE/Biology/N19-Biology.pdf"
  ["biology-nov-2018"]="$SRC_BASE/Biology/N18-Biology.pdf"
  ["biology-nov-2017"]="$SRC_BASE/Biology/N17-Biology.pdf"
  ["biology-nov-2016"]="$SRC_BASE/Biology/N16-Biology.pdf"
)

# ── Mark schemes ─────────────────────────────────────────────
declare -A MARK_SCHEMES=(
  ["biology-may-2025-ms"]="$SRC_BASE/Biology/M25-Biology-English-markscheme.pdf"
  ["biology-may-2024-ms"]="$SRC_BASE/Biology/M24-Biology-Mark-Scheme.pdf"
  ["biology-may-2019-ms"]="$SRC_BASE/Biology/M19-Biology-Mark-Scheme.pdf"
  ["biology-may-2018-ms"]="$SRC_BASE/Biology/M18-Biology-Mark-Scheme.pdf"
  ["biology-may-2017-ms"]="$SRC_BASE/Biology/M17-Biology-Mark-Scheme.pdf"
  ["biology-may-2016-ms"]="$SRC_BASE/Biology/M16-Biology-Mark-Scheme.pdf"
  ["biology-nov-2024-ms"]="$SRC_BASE/Biology/N24-Biology-English-markscheme.pdf"
  ["biology-nov-2019-ms"]="$SRC_BASE/Biology/N19-Biology-Mark-Scheme.pdf"
  ["biology-nov-2018-ms"]="$SRC_BASE/Biology/N18-Biology-Mark-Scheme.pdf"
  ["biology-nov-2017-ms"]="$SRC_BASE/Biology/N17-Biology-Mark-Scheme.pdf"
  ["biology-nov-2016-ms"]="$SRC_BASE/Biology/N16-Biology-Mark-Scheme.pdf"
)

convert_pdf() {
  local paperId="$1"
  local pdfPath="$2"
  local outDir="$DEST_BASE/$paperId"

  if [ ! -f "$pdfPath" ]; then
    echo "⚠ SKIP $paperId — PDF not found: $pdfPath"
    return
  fi

  mkdir -p "$outDir"
  echo "→ Converting $paperId …"
  # pdftoppm outputs: {outDir}/page-1.png, page-2.png, etc.
  pdftoppm -r 150 -png "$pdfPath" "$outDir/page"
  # Fix zero-padding: page-01.png → page-1.png (pdftoppm pads with leading zeros on some versions)
  for f in "$outDir"/page-0*.png; do
    [ -f "$f" ] || continue
    newname=$(echo "$f" | sed 's/page-0*/page-/')
    [ "$f" != "$newname" ] && mv "$f" "$newname"
  done
  count=$(ls "$outDir"/*.png 2>/dev/null | wc -l | tr -d ' ')
  echo "  ✓ $count pages → $outDir"
}

# If a specific paperId was given, convert just that one
if [ -n "$1" ]; then
  if [ -n "${PAPERS[$1]+x}" ]; then
    convert_pdf "$1" "${PAPERS[$1]}"
  elif [ -n "${MARK_SCHEMES[$1]+x}" ]; then
    convert_pdf "$1" "${MARK_SCHEMES[$1]}"
  else
    echo "❌ Unknown paperId: $1"
    echo "Available: ${!PAPERS[@]} ${!MARK_SCHEMES[@]}"
    exit 1
  fi
else
  # Convert all question papers
  echo "=== Converting all Biology question papers ==="
  for paperId in "${!PAPERS[@]}"; do
    convert_pdf "$paperId" "${PAPERS[$paperId]}"
  done
  echo ""
  echo "=== Converting all mark scheme PDFs ==="
  for paperId in "${!MARK_SCHEMES[@]}"; do
    convert_pdf "$paperId" "${MARK_SCHEMES[$paperId]}"
  done
fi

echo ""
echo "Done. Images in public/images/papers/"
