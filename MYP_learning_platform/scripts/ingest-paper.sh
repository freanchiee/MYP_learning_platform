#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# MYP Exam Platform — Single Paper Ingest Pipeline
#
# Usage:
#   ./scripts/ingest-paper.sh <paper-id> <qp.pdf> <ms.pdf> [--dry-run]
#
# Example:
#   ./scripts/ingest-paper.sh physics-nov-2024 \
#       papers/physics-nov-2024/qp.pdf \
#       papers/physics-nov-2024/ms.pdf
#
# Prerequisites:
#   export ANTHROPIC_API_KEY=sk-ant-...
#   pip3 install pdfplumber anthropic pillow
#   pdftoppm (brew install poppler)
#
# What it does (fully automated, ~40 seconds, ~$0.035):
#   1. Extract PDF pages + auto-crop diagrams   (free, pdftoppm + PIL)
#   2. Generate questions.ts                    ($0.015, Haiku)
#   3. Generate markscheme.ts                   ($0.015, Haiku)
#   4. Generate conceptsPublic.ts               ($0.005, Haiku)
#   5. Update all registry files                (free, Node.js)
#   6. TypeScript type-check                    (free, tsc)
#   7. Supabase upsert                          (free, curl)
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ── Args ──────────────────────────────────────────────────────────────────────
PAPER_ID="${1:-}"
QP_PATH="${2:-}"
MS_PATH="${3:-}"
DRY_RUN=""

# Parse --dry-run from any position
for arg in "$@"; do
  if [[ "$arg" == "--dry-run" ]]; then DRY_RUN="--dry-run"; fi
done

if [[ -z "$PAPER_ID" || -z "$QP_PATH" || -z "$MS_PATH" ]]; then
  echo "Usage: ./scripts/ingest-paper.sh <paper-id> <qp.pdf> <ms.pdf> [--dry-run]"
  exit 1
fi

# ── Resolve paths (support running from project root) ─────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

EXTRACTED_JSON="data/papers/$PAPER_ID/extracted.json"
BANNER="═══════════════════════════════════════════════════════"

echo ""
echo "$BANNER"
echo "  MYP Ingest: $PAPER_ID"
[[ -n "$DRY_RUN" ]] && echo "  MODE: DRY RUN (no API calls)"
echo "$BANNER"

# ── Check API key ──────────────────────────────────────────────────────────────
if [[ -z "${ANTHROPIC_API_KEY:-}" ]] && [[ -z "$DRY_RUN" ]]; then
  # Try loading from .env.local
  if [[ -f ".env.local" ]]; then
    export $(grep "^ANTHROPIC_API_KEY=" .env.local | head -1 || true)
  fi
  if [[ -z "${ANTHROPIC_API_KEY:-}" ]]; then
    echo ""
    echo "ERROR: ANTHROPIC_API_KEY not set."
    echo "  Add it to your shell: export ANTHROPIC_API_KEY=sk-ant-..."
    echo "  Or add to .env.local:  ANTHROPIC_API_KEY=sk-ant-..."
    exit 1
  fi
fi

# ── Step 1: Preprocess (free) ──────────────────────────────────────────────────
echo ""
echo "[1/7] Preprocessing PDF → JSON + crops..."

# In dry-run mode, skip preprocessing if extracted.json already exists
if [[ -n "$DRY_RUN" && -f "$EXTRACTED_JSON" ]]; then
  echo "  ⏩ DRY RUN: using existing $EXTRACTED_JSON"
elif [[ ! -f "$QP_PATH" || ! -f "$MS_PATH" ]]; then
  if [[ -n "$DRY_RUN" ]]; then
    echo "  ⏩ DRY RUN: PDFs not found — skipping preprocessing"
  else
    echo "ERROR: PDF not found: $QP_PATH or $MS_PATH"
    exit 1
  fi
else
  python3 scripts/preprocess.py \
    --qp  "$QP_PATH"         \
    --ms  "$MS_PATH"         \
    --id  "$PAPER_ID"        \
    --out "$EXTRACTED_JSON"

  if [[ ! -f "$EXTRACTED_JSON" && -z "$DRY_RUN" ]]; then
    echo "ERROR: preprocess.py did not produce $EXTRACTED_JSON"
    exit 1
  fi
  echo "  ✅ Preprocessing done"
fi

# ── Step 2-4: AI generation ────────────────────────────────────────────────────
echo ""
echo "[2-4/7] Generating TypeScript files via Haiku..."
python3 scripts/generate.py --id "$PAPER_ID" $DRY_RUN

# Verify the generated files exist (unless dry-run)
if [[ -z "$DRY_RUN" ]]; then
  MISSING=0
  for f in "data/papers/$PAPER_ID/questions.ts" \
           "data/papers/$PAPER_ID/markscheme.ts" \
           "data/papers/$PAPER_ID/conceptsPublic.ts"; do
    if [[ ! -f "$f" ]]; then
      echo "  ❌ Missing: $f"
      MISSING=1
    fi
  done
  if [[ $MISSING -eq 1 ]]; then
    echo ""
    echo "ERROR: Some TypeScript files were not generated."
    echo "  Check the .raw files in data/papers/$PAPER_ID/ for raw model output."
    echo "  Fix the issues manually, then run:"
    echo "    node scripts/update-registries.js && npx tsc --noEmit"
    exit 1
  fi
fi

# ── Step 5: Update registries ──────────────────────────────────────────────────
echo ""
echo "[5/7] Updating registry files..."
node scripts/update-registries.js

# ── Step 6: TypeScript check ───────────────────────────────────────────────────
echo ""
echo "[6/7] TypeScript type-check..."
if npx tsc --noEmit 2>&1 | tee /tmp/tsc-output.txt | grep -q "error TS"; then
  echo ""
  echo "  ❌ TypeScript errors found:"
  cat /tmp/tsc-output.txt
  echo ""
  echo "  Fix the errors in data/papers/$PAPER_ID/*.ts, then re-run:"
  echo "    node scripts/update-registries.js && npx tsc --noEmit"
  exit 1
else
  echo "  ✅ Zero TypeScript errors"
fi

# ── Step 7: Supabase upsert ────────────────────────────────────────────────────
echo ""
echo "[7/7] Upserting to Supabase..."
node scripts/supabase-upsert.js "$PAPER_ID" $DRY_RUN || {
  echo "  ⚠  Supabase upsert skipped (scripts/supabase-upsert.js not found or failed)"
  echo "     Run this SQL manually in the Supabase dashboard:"
  echo "     INSERT INTO public.papers (id, subject, session, year, total_marks, duration_minutes, is_published)"
  echo "     SELECT '$PAPER_ID',"
  echo "            'Physics',"    # adjust if not physics
  echo "            split_part('$PAPER_ID', '-', 2),"
  echo "            split_part('$PAPER_ID', '-', 3)::int,"
  echo "            100, 90, true"
  echo "     ON CONFLICT (id) DO UPDATE SET is_published = true;"
}

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo "$BANNER"
echo "  ✅ Ingest complete: $PAPER_ID"
echo "  Files:"
echo "    data/papers/$PAPER_ID/questions.ts"
echo "    data/papers/$PAPER_ID/markscheme.ts"
echo "    data/papers/$PAPER_ID/conceptsPublic.ts"
echo "  Cost: ~\$0.035  |  Paper URL: /exam/$PAPER_ID"
echo "$BANNER"
echo ""
