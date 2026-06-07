#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# MYP Exam Platform — Batch Folder Ingest Pipeline
#
# Processes a folder of PDF pairs in parallel (preprocessing),
# then generates TypeScript files 5 papers at a time (Haiku rate limit).
#
# Usage:
#   ./scripts/ingest-folder.sh <papers-dir> [--dry-run] [--parallel N]
#
# Folder structure expected:
#   papers/
#     physics-nov-2024/
#       qp.pdf
#       ms.pdf
#     physics-may-2024/
#       qp.pdf
#       ms.pdf
#
# Example:
#   ./scripts/ingest-folder.sh ./papers/physics/
#   ./scripts/ingest-folder.sh ./papers/ --parallel 3
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

PAPERS_DIR="${1:-}"
DRY_RUN=""
PARALLEL=5  # Haiku allows ~50 RPM; 5 concurrent x 3 calls = 15 RPM, safe

# Parse flags
for arg in "$@"; do
  case "$arg" in
    --dry-run)    DRY_RUN="--dry-run" ;;
    --parallel)   shift; PARALLEL="${1:-5}" ;;
  esac
done

if [[ -z "$PAPERS_DIR" ]]; then
  echo "Usage: ./scripts/ingest-folder.sh <papers-dir> [--dry-run] [--parallel N]"
  echo ""
  echo "Folder structure:"
  echo "  papers-dir/"
  echo "    {paper-id}/"
  echo "      qp.pdf"
  echo "      ms.pdf"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

BANNER="═══════════════════════════════════════════════════════"

echo ""
echo "$BANNER"
echo "  MYP Batch Ingest: $PAPERS_DIR"
echo "  Parallel: $PARALLEL papers at a time"
[[ -n "$DRY_RUN" ]] && echo "  MODE: DRY RUN"
echo "$BANNER"

# ── Discover paper directories ─────────────────────────────────────────────────
PAPER_DIRS=()
while IFS= read -r -d '' dir; do
  # Only include dirs that have both qp.pdf and ms.pdf
  if [[ -f "$dir/qp.pdf" && -f "$dir/ms.pdf" ]]; then
    PAPER_DIRS+=("$dir")
  fi
done < <(find "$PAPERS_DIR" -mindepth 1 -maxdepth 1 -type d -print0 | sort -z)

TOTAL=${#PAPER_DIRS[@]}
if [[ $TOTAL -eq 0 ]]; then
  echo ""
  echo "ERROR: No paper directories with qp.pdf + ms.pdf found in $PAPERS_DIR"
  echo "Expected structure: $PAPERS_DIR/{paper-id}/qp.pdf + ms.pdf"
  exit 1
fi

echo ""
echo "Found $TOTAL papers to process:"
for dir in "${PAPER_DIRS[@]}"; do
  echo "  - $(basename "$dir")"
done
echo ""

# ── Phase 1: Preprocessing (all papers in parallel — free, CPU-bound) ─────────
echo "Phase 1: Preprocessing all $TOTAL papers in parallel..."
echo ""

PIDS=()
FAILED_PREPROCESS=()

for dir in "${PAPER_DIRS[@]}"; do
  paper_id="$(basename "$dir")"
  extracted="data/papers/$paper_id/extracted.json"

  # Skip if already preprocessed (hash cache will handle this inside preprocess.py)
  python3 scripts/preprocess.py \
    --qp  "$dir/qp.pdf" \
    --ms  "$dir/ms.pdf" \
    --id  "$paper_id"   \
    --out "$extracted"  \
    > /tmp/preprocess-$paper_id.log 2>&1 &
  PIDS+=("$! $paper_id")
done

# Wait for all preprocessing jobs
for pid_paper in "${PIDS[@]}"; do
  pid="${pid_paper%% *}"
  paper="${pid_paper#* }"
  if wait "$pid"; then
    echo "  ✅ Preprocessed: $paper"
  else
    echo "  ❌ Failed: $paper (see /tmp/preprocess-$paper.log)"
    FAILED_PREPROCESS+=("$paper")
  fi
done

if [[ ${#FAILED_PREPROCESS[@]} -gt 0 ]]; then
  echo ""
  echo "WARNING: ${#FAILED_PREPROCESS[@]} papers failed preprocessing:"
  for p in "${FAILED_PREPROCESS[@]}"; do echo "  - $p"; done
  echo "Continuing with successfully preprocessed papers..."
fi

echo ""
echo "Phase 1 complete."

# ── Phase 2: AI generation ($PARALLEL at a time — Haiku rate limit) ───────────
echo ""
echo "Phase 2: Generating TypeScript ($PARALLEL papers at a time)..."
echo ""

FAILED_GEN=()
PROCESSED=0
BATCH_PIDS=()

for dir in "${PAPER_DIRS[@]}"; do
  paper_id="$(basename "$dir")"
  extracted="data/papers/$paper_id/extracted.json"

  # Skip if preprocessing failed
  if [[ ! -f "$extracted" ]]; then
    echo "  ⏩ Skipping $paper_id (no extracted.json)"
    continue
  fi

  # Skip if all TypeScript files already exist (incremental run)
  if [[ -f "data/papers/$paper_id/questions.ts" ]] \
  && [[ -f "data/papers/$paper_id/markscheme.ts" ]] \
  && [[ -f "data/papers/$paper_id/conceptsPublic.ts" ]]; then
    echo "  ⏩ Skipping $paper_id (TypeScript files already exist)"
    continue
  fi

  # Launch generation in background
  python3 scripts/generate.py \
    --id "$paper_id" $DRY_RUN \
    > /tmp/generate-$paper_id.log 2>&1 &
  BATCH_PIDS+=("$! $paper_id")
  PROCESSED=$((PROCESSED + 1))

  # Drain batch when we hit $PARALLEL
  if [[ ${#BATCH_PIDS[@]} -ge $PARALLEL ]]; then
    for pid_paper in "${BATCH_PIDS[@]}"; do
      pid="${pid_paper%% *}"
      paper="${pid_paper#* }"
      if wait "$pid"; then
        echo "  ✅ Generated: $paper"
      else
        echo "  ❌ Failed:    $paper (see /tmp/generate-$paper.log)"
        FAILED_GEN+=("$paper")
      fi
    done
    BATCH_PIDS=()
    # Brief pause between batches (respect rate limits)
    [[ -z "$DRY_RUN" ]] && sleep 2
  fi
done

# Drain remaining
for pid_paper in "${BATCH_PIDS[@]}"; do
  pid="${pid_paper%% *}"
  paper="${pid_paper#* }"
  if wait "$pid"; then
    echo "  ✅ Generated: $paper"
  else
    echo "  ❌ Failed:    $paper (see /tmp/generate-$paper.log)"
    FAILED_GEN+=("$paper")
  fi
done

echo ""
echo "Phase 2 complete. Processed: $PROCESSED papers."

# ── Phase 3: Update registries + type check ────────────────────────────────────
echo ""
echo "Phase 3: Updating registries + TypeScript check..."
node scripts/update-registries.js

if npx tsc --noEmit 2>&1 | tee /tmp/tsc-batch.txt | grep -q "error TS"; then
  echo ""
  echo "  ❌ TypeScript errors — see /tmp/tsc-batch.txt"
else
  echo "  ✅ Zero TypeScript errors"
fi

# ── Phase 4: Supabase batch upsert ────────────────────────────────────────────
echo ""
echo "Phase 4: Supabase batch upsert..."
for dir in "${PAPER_DIRS[@]}"; do
  paper_id="$(basename "$dir")"
  if [[ -f "data/papers/$paper_id/questions.ts" ]]; then
    node scripts/supabase-upsert.js "$paper_id" $DRY_RUN || true
  fi
done

# ── Final summary ─────────────────────────────────────────────────────────────
echo ""
echo "$BANNER"
echo "  Batch ingest complete"
echo "  Total papers: $TOTAL"
echo "  Processed:    $PROCESSED"
[[ ${#FAILED_PREPROCESS[@]} -gt 0 ]] && echo "  Failed (prep): ${FAILED_PREPROCESS[*]}"
[[ ${#FAILED_GEN[@]} -gt 0 ]]        && echo "  Failed (gen):  ${FAILED_GEN[*]}"
COST=$(echo "$PROCESSED * 0.035" | bc 2>/dev/null || echo "~\$$(( PROCESSED * 4 / 100 )).$(( (PROCESSED * 4 % 100) ))")
echo "  Est. cost:    \$$COST"
echo "$BANNER"
echo ""
