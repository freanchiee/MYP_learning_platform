#!/usr/bin/env python3
"""
MYP Exam Platform — AI TypeScript Generator
Cost: ~$0.035 per paper (3 × claude-3-5-haiku calls)

Reads:  data/papers/{id}/extracted.json  (from preprocess.py)
Writes: data/papers/{id}/questions.ts
        data/papers/{id}/markscheme.ts
        data/papers/{id}/conceptsPublic.ts

Usage:
  export ANTHROPIC_API_KEY=sk-ant-...
  python3 scripts/generate.py --id physics-nov-2024

Options:
  --only questions|markscheme|concepts   (re-generate a single file)
  --dry-run                              (print prompts, make no API calls)
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("ERROR: anthropic SDK not installed. Run: pip3 install anthropic")
    sys.exit(1)


# ─── Config ───────────────────────────────────────────────────────────────────

MODEL        = "claude-3-5-haiku-20241022"
DATA_DIR     = Path("data/papers")
IMAGES_BASE  = "/images/papers"

# Token budgets per call
MAX_TOKENS = {
    "questions":   8000,
    "markscheme":  6000,
    "concepts":    3000,
}


# ─── System prompts (cached — you pay for these once per session) ─────────────

SYSTEM_QUESTIONS = """\
You are a TypeScript code generator for an IB MYP Science exam platform.

## Task
Given extracted data from an exam paper, output a complete `questions.ts` file.

## TypeScript interfaces (from lib/types.ts)

```typescript
export type Criterion = 'A' | 'B' | 'C' | 'D'
export type QuestionType = 'mcq' | 'extended' | 'simulation' | 'dataTable'

export interface Task {
  label: string          // e.g. 'a', 'b i', 'c ii'
  text: string           // question text shown to student
  marks: number
  ph: string             // placeholder text for the answer box
  ans?: string           // always omit (leave undefined)
  figImages?: string[]   // per-task diagram paths
  widget?: 'radio_select' | 'drag_drop_planets' | ...
  widgetOptions?: string[]   // options for radio_select
  passage?: string           // reading article shown above this task
}

export interface Question {
  id: number
  crit: Criterion        // 'A' | 'B' | 'C' | 'D'
  type: QuestionType
  topic: string          // concise topic label, e.g. 'Pendulum Motion'
  marks: number          // total marks for this question
  stem?: string          // intro paragraph shown above all tasks
  figImages?: string[]   // question-level diagram (shown above all tasks)
  opts?: string[]        // MCQ options (type: 'mcq' only)
  correct?: number       // 0-based MCQ answer index
  tasks?: Task[]         // sub-tasks (type: 'extended')
  ans?: number | string | null  // always omit
}
```

## Rules

1. **File header** — always exactly:
   ```typescript
   import type { Question } from '@/lib/types'
   ```

2. **paperMeta** — export const with shape:
   ```typescript
   export const paperMeta = {
     id: '{paper-id}',
     subject: 'Physics',   // or Chemistry, Biology, etc.
     session: 'November',  // or 'May'
     year: 2024,
     totalMarks: 100,
     durationMinutes: 90,
     criteria: ['A', 'B', 'C', 'D'] as const,
   }
   ```

3. **MCQ questions** (type: 'mcq'):
   - `opts`: array of the 4 option strings
   - `correct`: 0-based index of the correct answer
   - no `tasks` array

4. **Extended questions** (type: 'extended'):
   - `tasks`: array of Task objects
   - MCQ inside an extended question uses `widget: 'radio_select'` and `widgetOptions: [...]`
   - `marks` on the Question equals sum of task marks

5. **figImages** placement:
   - If a diagram is relevant to the whole question → `figImages` on the Question
   - If a diagram is specific to one task → `figImages` on that Task
   - Paths are EXACTLY: `'/images/papers/{paperId}/page-NN-crop.png'`

6. **Passages** — if a task shows a reading article, put the article text in `task.passage`

7. **Criterion mapping** (IB MYP Sciences):
   - Criterion A: Knowing & Understanding (factual recall, concepts)
   - Criterion B: Inquiring & Designing (variables, hypotheses, methods)
   - Criterion C: Processing & Evaluating (data, graphs, calculations, conclusions)
   - Criterion D: Reflecting (evaluation of method, real-world application)

8. **No answers** — never fill in `ans` or `task.ans`

9. **Placeholder text** (`ph`) — helpful hint like:
   - 'Describe how you would measure...'
   - 'Explain, using the data, why...'
   - 'State one advantage of...'

10. **Output** — output ONLY the TypeScript file content, no markdown fences, no explanation.
"""

SYSTEM_MARKSCHEME = """\
You are a TypeScript code generator for an IB MYP Science exam platform.

## Task
Given extracted mark scheme text and question structure, output a complete `markscheme.ts` file.

## TypeScript types

```typescript
export type MSEntry = {
  marks: number
  exemplar: string           // model answer students can compare against
  keyConcepts: string[]      // 2–5 essential phrases; student must hit these
  keywords: string[]         // 5–10 individual physics terms to match
  feedbackHit: string        // 1–2 sentences praising a correct answer
  feedbackMiss: string       // 1–2 sentences explaining what was missing
}

export type MCQEntry = {
  type: 'mcq'
  correct: number            // 0-based index of correct option
}

export type MSRecord = MSEntry | MCQEntry
```

## Rules

1. **First line MUST be** exactly: `import 'server-only'`

2. **Exports** — exactly these three, in order:
   ```typescript
   export type { MSEntry }
   export type { MCQEntry }
   export type { MSRecord }
   export const MS: Record<string, MSRecord> = { ... }
   ```
   (Or define the types inline and export them together)

3. **Key format** — `q{id}_{label}` where label matches the task label exactly:
   - `q1_a`, `q1_b`, `q3_f`, `q7_c`
   - For multi-word labels: `q14_b_i` (spaces → underscores)
   - For standalone MCQ question: `q{id}` (no label)

4. **MCQ entries**: `{ type: 'mcq', correct: N }` — N is 0-based.
   If the correct answer is option B (second option), correct = 1.

5. **Written entries**:
   - `exemplar`: a complete model answer
   - `keyConcepts`: 2–5 SHORT phrases (3–6 words each) that capture the core idea.
     These drive the scoring — be precise but not verbatim.
   - `keywords`: individual scientific terms (1–3 words) related to the topic.
   - `feedbackHit`: e.g. "Excellent — you correctly identified X and explained Y."
   - `feedbackMiss`: e.g. "A complete answer needed X. Consider Y when answering."
     NEVER reproduce verbatim mark scheme answers in feedbackMiss.

6. **Mark assignment**: take marks directly from the mark scheme.
   For holistic rubrics (0-2-4-6 etc.), set `marks` to the maximum.

7. **Output** — output ONLY the TypeScript file content, no markdown fences, no explanation.
"""

SYSTEM_CONCEPTS = """\
You are a TypeScript code generator for an IB MYP Science exam platform.

## Task
Given a markscheme.ts file, output the corresponding `conceptsPublic.ts` file.
This is the CLIENT-SAFE version — it exposes only keyword hints, NOT answers.

## TypeScript type

```typescript
export interface ConceptEntry {
  keyConcepts: string[]   // generalised concept phrases (NOT the answer)
  keywords: string[]      // scientific terms relevant to the topic
}
```

## Rules

1. **No server-only import** (this file is used on the client side)

2. **Only include tasks with marks >= 2** (skip 1-mark recall tasks)

3. **Skip MCQ entries** (type: 'mcq')

4. **Export name**: `CONCEPTS_PUBLIC` — always this exact name
   ```typescript
   export const CONCEPTS_PUBLIC: Record<string, ConceptEntry> = { ... }
   ```

5. **Keys** must exactly match the markscheme keys: `q1_a`, `q3_f`, etc.

6. **Abstraction rule** — keyConcepts must be GENERALISED hints, not the answer:
   - BAD:  ['Jupiter is between Mars and Saturn']
   - GOOD: ['planet order', 'solar system position']
   - BAD:  ['resistance increases with temperature']
   - GOOD: ['resistance temperature relationship', 'R-T graph']

7. **keywords** — scientific terms from the topic area (safe to show as hints)

8. **Output** — output ONLY the TypeScript file content, no markdown fences, no explanation.
"""


# ─── Helper: load extracted.json ─────────────────────────────────────────────

def load_extracted(paper_id: str) -> dict:
    path = DATA_DIR / paper_id / "extracted.json"
    if not path.exists():
        print(f"ERROR: {path} not found. Run preprocess.py first.")
        sys.exit(1)
    return json.loads(path.read_text())


# ─── Helper: build crop file list ────────────────────────────────────────────

def get_crop_files(paper_id: str) -> list[str]:
    """List available crop files for this paper."""
    pub_dir = Path("public/images/papers") / paper_id
    if not pub_dir.exists():
        return []
    return sorted(
        f"{IMAGES_BASE}/{paper_id}/{p.name}"
        for p in pub_dir.glob("page-*-crop*.png")
    )


# ─── User prompt builders ─────────────────────────────────────────────────────

def build_questions_prompt(ext: dict) -> str:
    paper_id     = ext["paper_id"]
    crops        = get_crop_files(paper_id)
    questions_raw = ext.get("questions_raw", [])

    # Extract useful page summaries (text + crop presence)
    page_summaries = []
    for p in ext.get("pages", []):
        text_snippet = (p.get("raw_text", "") or "")[:800].strip()
        crops_on_page = [c["file"] for c in p.get("diagram_crops", [])]
        page_summaries.append({
            "page": p["page_num"],
            "text": text_snippet,
            "crops": crops_on_page,
        })

    # Full QP text (cap at 6000 chars to keep prompt lean)
    qp_text = (ext.get("qp_full_text", "") or "")[:6000]

    prompt = f"""Paper ID: {paper_id}

## Parsed question structure (from pdfplumber):
{json.dumps(questions_raw, indent=2)}

## Available diagram crop files:
{json.dumps(crops, indent=2)}

## Page text extracts (pdfplumber):
{json.dumps(page_summaries, indent=2)}

## Full QP text (for context):
{qp_text}

Generate the complete questions.ts file for paper '{paper_id}'.
"""
    return prompt


def build_markscheme_prompt(ext: dict) -> str:
    paper_id      = ext["paper_id"]
    questions_raw = ext.get("questions_raw", [])
    ms_text       = (ext.get("ms_full_text", "") or "")[:6000]
    qp_text_snippet = (ext.get("qp_full_text", "") or "")[:2000]

    prompt = f"""Paper ID: {paper_id}

## Question structure (from QP):
{json.dumps(questions_raw, indent=2)}

## QP text (for question context):
{qp_text_snippet}

## Mark scheme text (full MS PDF):
{ms_text}

Generate the complete markscheme.ts file for paper '{paper_id}'.
"""
    return prompt


def build_concepts_prompt(paper_id: str, markscheme_ts: str) -> str:
    safe_id = paper_id.replace("-", "_").upper()
    prompt = f"""Paper ID: {paper_id}

## Generated markscheme.ts:
{markscheme_ts[:5000]}

Generate the conceptsPublic.ts file for paper '{paper_id}'.
Export name must be exactly: CONCEPTS_PUBLIC
"""
    return prompt


# ─── API call wrapper ─────────────────────────────────────────────────────────

def call_haiku(client: anthropic.Anthropic, system: str, user: str,
               label: str, max_tokens: int, dry_run: bool) -> str:
    if dry_run:
        print(f"\n{'─'*60}")
        print(f"DRY RUN — {label}")
        print(f"System prompt: {len(system)} chars")
        print(f"User prompt:   {len(user)} chars")
        print(f"{'─'*60}\n")
        return f"// DRY RUN — {label} not generated"

    print(f"  🤖 Calling {MODEL} for {label}...")
    response = client.messages.create(
        model=MODEL,
        max_tokens=max_tokens,
        system=[
            {
                "type": "text",
                "text": system,
                "cache_control": {"type": "ephemeral"},  # cache the system prompt
            }
        ],
        messages=[{"role": "user", "content": user}],
        temperature=0,
    )
    content = response.content[0].text

    # Strip markdown fences if the model wrapped the output
    content = re.sub(r"^```(?:typescript|ts)?\n", "", content.strip())
    content = re.sub(r"\n```$", "", content.strip())

    usage = response.usage
    print(f"     ↳ {label}: {usage.input_tokens} in / {usage.output_tokens} out tokens")
    if hasattr(usage, 'cache_read_input_tokens') and usage.cache_read_input_tokens:
        print(f"     ↳ Cache read: {usage.cache_read_input_tokens} tokens saved")

    return content


# ─── Post-process: ensure correct export name for conceptsPublic ─────────────

def fix_concepts_export(content: str, paper_id: str) -> str:
    """
    The model is instructed to always output CONCEPTS_PUBLIC.
    If it outputs something else (hallucination), normalise it.
    update-registries.js will detect the actual export name via regex.
    """
    # If it used a different name, rename it to CONCEPTS_PUBLIC
    content = re.sub(
        r"export const CONCEPTS_\w+\s*:",
        "export const CONCEPTS_PUBLIC:",
        content
    )
    return content


# ─── Validate: rough sanity checks before writing ────────────────────────────

def validate_questions(content: str, paper_id: str) -> bool:
    if "import type { Question }" not in content:
        print("  ⚠  questions.ts: missing Question import")
        return False
    if "export const paperMeta" not in content:
        print("  ⚠  questions.ts: missing paperMeta")
        return False
    if "export const questions" not in content:
        print("  ⚠  questions.ts: missing questions export")
        return False
    if paper_id not in content:
        print(f"  ⚠  questions.ts: paper_id '{paper_id}' not found in output")
        return False
    return True


def validate_markscheme(content: str) -> bool:
    if not content.strip().startswith("import 'server-only'"):
        print("  ⚠  markscheme.ts: first line is not 'import server-only'")
        return False
    if "export const MS" not in content:
        print("  ⚠  markscheme.ts: missing MS export")
        return False
    return True


def validate_concepts(content: str) -> bool:
    if "CONCEPTS_PUBLIC" not in content:
        print("  ⚠  conceptsPublic.ts: missing CONCEPTS_PUBLIC export")
        return False
    if "import 'server-only'" in content:
        print("  ⚠  conceptsPublic.ts: must NOT have server-only import (client file)")
        return False
    return True


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Generate TypeScript files for an MYP exam paper")
    parser.add_argument("--id",       required=True, help="Paper ID, e.g. physics-nov-2024")
    parser.add_argument("--only",     choices=["questions", "markscheme", "concepts"],
                        help="Regenerate only one file")
    parser.add_argument("--dry-run",  action="store_true", help="Print prompts, no API calls")
    args = parser.parse_args()

    paper_id = args.id
    out_dir  = DATA_DIR / paper_id
    out_dir.mkdir(parents=True, exist_ok=True)

    # ── API key ──────────────────────────────────────────────────────────────
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not api_key and not args.dry_run:
        print("\nERROR: ANTHROPIC_API_KEY not set.")
        print("Add it to your shell: export ANTHROPIC_API_KEY=sk-ant-...")
        print("Or add it to .env.local: ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)

    # Load .env.local if key not in environment
    if not api_key:
        env_file = Path(".env.local")
        if env_file.exists():
            for line in env_file.read_text().splitlines():
                if line.startswith("ANTHROPIC_API_KEY="):
                    api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break

    client = anthropic.Anthropic(api_key=api_key) if not args.dry_run else None

    print(f"\n{'='*60}")
    print(f"  MYP Generator — {paper_id}")
    print(f"  Model: {MODEL}")
    print(f"{'='*60}\n")

    # ── Load extracted data ───────────────────────────────────────────────────
    ext = load_extracted(paper_id)

    run_questions  = args.only in (None, "questions")
    run_markscheme = args.only in (None, "markscheme")
    run_concepts   = args.only in (None, "concepts")

    generated_markscheme = None  # passed to concepts call

    # ── Call 1: questions.ts ──────────────────────────────────────────────────
    if run_questions:
        print("[1/3] Generating questions.ts...")
        user_prompt = build_questions_prompt(ext)
        content = call_haiku(client, SYSTEM_QUESTIONS, user_prompt,
                             "questions.ts", MAX_TOKENS["questions"], args.dry_run)

        if not args.dry_run:
            if validate_questions(content, paper_id):
                (out_dir / "questions.ts").write_text(content + "\n")
                print(f"  ✅ Written: data/papers/{paper_id}/questions.ts")
            else:
                raw_path = out_dir / "questions.ts.raw"
                raw_path.write_text(content)
                print(f"  ❌ Validation failed — raw output saved to {raw_path}")
                print("     Edit it manually and rename to questions.ts")

    # ── Call 2: markscheme.ts ─────────────────────────────────────────────────
    if run_markscheme:
        print("[2/3] Generating markscheme.ts...")
        user_prompt = build_markscheme_prompt(ext)
        content = call_haiku(client, SYSTEM_MARKSCHEME, user_prompt,
                             "markscheme.ts", MAX_TOKENS["markscheme"], args.dry_run)

        if not args.dry_run:
            # Ensure server-only is first line
            if not content.strip().startswith("import 'server-only'"):
                content = "import 'server-only'\n" + content.strip()

            if validate_markscheme(content):
                (out_dir / "markscheme.ts").write_text(content + "\n")
                print(f"  ✅ Written: data/papers/{paper_id}/markscheme.ts")
                generated_markscheme = content
            else:
                raw_path = out_dir / "markscheme.ts.raw"
                raw_path.write_text(content)
                print(f"  ❌ Validation failed — raw output saved to {raw_path}")
    elif run_concepts:
        # Load existing markscheme if we're only running concepts
        ms_path = out_dir / "markscheme.ts"
        if ms_path.exists():
            generated_markscheme = ms_path.read_text()

    # ── Call 3: conceptsPublic.ts ─────────────────────────────────────────────
    if run_concepts:
        print("[3/3] Generating conceptsPublic.ts...")
        ms_content = generated_markscheme or ""
        if not ms_content:
            ms_path = out_dir / "markscheme.ts"
            ms_content = ms_path.read_text() if ms_path.exists() else ""
            if not ms_content:
                print("  ⚠  No markscheme.ts found — skipping conceptsPublic.ts generation")
                run_concepts = False

    if run_concepts:
        user_prompt = build_concepts_prompt(paper_id, ms_content)
        content = call_haiku(client, SYSTEM_CONCEPTS, user_prompt,
                             "conceptsPublic.ts", MAX_TOKENS["concepts"], args.dry_run)

        if not args.dry_run:
            content = fix_concepts_export(content, paper_id)
            if validate_concepts(content):
                (out_dir / "conceptsPublic.ts").write_text(content + "\n")
                print(f"  ✅ Written: data/papers/{paper_id}/conceptsPublic.ts")
            else:
                raw_path = out_dir / "conceptsPublic.ts.raw"
                raw_path.write_text(content)
                print(f"  ❌ Validation failed — raw output saved to {raw_path}")

    print(f"\n{'='*60}")
    print(f"  Generation complete for {paper_id}")
    print(f"  Next: node scripts/update-registries.js && npx tsc --noEmit")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
