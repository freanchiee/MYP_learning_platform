# PDF → Interactive Assessment Conversion Guide

This document describes the process and prompts to convert a new IB MYP exam PDF into a fully interactive e-assessment on this platform.

---

## Overview

The pipeline has two phases:
1. **Extract** — convert PDF pages to PNG images using `pdftoppm`
2. **Reverse-engineer** — analyse each page and build native React components

---

## Phase 1: PDF Page Extraction

```bash
# Install poppler-utils (if not present)
apt-get install poppler-utils  # Linux
brew install poppler            # macOS

# Extract all pages at 150 DPI (good balance of quality vs file size)
mkdir -p public/images/papers/<paper-id>
pdftoppm -r 150 -png <input.pdf> public/images/papers/<paper-id>/page

# This produces page-01.png, page-02.png, etc.
# Rename if needed to ensure zero-padded numbering
for f in public/images/papers/<paper-id>/page-*.png; do
  # ensure page-1.png → page-01.png
  echo $f
done
```

For the Nov 2023 Physics paper, pages were extracted at 150 DPI producing 33 PNG files (each ~200–400 KB).

---

## Phase 2: Question Analysis & Component Mapping

For each question in the PDF, decide which **native component** to use:

| Content type | Native component | Notes |
|---|---|---|
| Text-only question | `RichTextEditor` | Default for all extended responses |
| Bullet point list | `renderTaskText()` | Auto-parsed from `\n•` in task text |
| Multiple choice | `MCQQuestion` | Pass `opts` and `correct` arrays |
| Data table (read-only) | Inline `<table>` in stem text | Just style it |
| Data table (editable, one cell) | New `Q4eDataTable`-style widget | Create per-question if needed |
| Erroneous table (student corrects) | New `Q5cDataTable`-style widget | Show original + corrected form |
| Exponential decay / half-life graph | `CarbonDecayGraph` | SVG with hover crosshair |
| Two comparison graphs | `BounceGraphsAB` | Side-by-side SVG scatter plots |
| Variable classification table | `VariableClassifyTable` | Radio IV / DV / CV per row |
| Sankey / energy flow diagram | `SankeyDiagram` | SVG arrows with fill-in |
| Drag-and-drop labelling | `DragDropPlanets` | HTML5 drag API, adaptable |
| Screenshot (last resort) | `figImages: ['/images/...']` | Use when above don't apply |

---

## Phase 3: Add the Paper

### 1. Create the questions file

`data/papers/<paper-id>/questions.ts`

```typescript
import type { Question } from '@/lib/types'

export const paperMeta = {
  id: '<paper-id>',
  subject: 'Physics',   // or Biology / Chemistry
  session: 'November',  // or May
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',      // or 'simulation' | 'mcq' | 'dataTable'
    topic: 'Topic name',
    marks: 10,
    stem: 'Question stem text...',
    nativeContent: 'carbon_decay',   // if a graph exists (see table above)
    tasks: [
      {
        label: 'a',
        text: 'Task text...\n• bullet one\n• bullet two',  // \n• renders as list
        marks: 2,
        ph: 'Placeholder hint...',
        widget: 'variable_classify',  // if this task needs a custom widget
      },
    ],
  },
]
```

### 2. Create the mark scheme

`data/papers/<paper-id>/markscheme.ts`

```typescript
import type { MarkSchemeEntry } from '@/lib/types'

export const markScheme: Record<number, Record<string, MarkSchemeEntry>> = {
  1: {
    a: {
      marks: 2,
      exemplar: 'Model answer text...',
      keyConcepts: ['concept1', 'concept2'],
      keywords: ['keyword1', 'keyword2'],
      feedbackHit: 'Well done! You identified...',
      feedbackMiss: 'Remember to mention...',
    },
  },
}
```

### 3. Register the paper

In `app/exam/[paperId]/page.tsx`, add the new paper ID to the PAPERS import map.

---

## Standby Agent Prompt

When a new PDF is shared, spawn an agent with this prompt template:

```
You are working on an MYP Sciences e-assessment platform at /home/user/MYP_learning_platform.
A new exam PDF has been extracted to: public/images/papers/<paper-id>/page-XX.png (pages 1–N).

Your task:
1. Study each page image carefully (Read the PNG files)
2. For each question, decide which native component to use (see docs/pdf-to-assessment-guide.md)
3. Create data/papers/<paper-id>/questions.ts with ALL questions
4. Create data/papers/<paper-id>/markscheme.ts with mark schemes
5. For any custom graphs or tables, create new widget components in components/exam/widgets/
6. Register the paper in app/exam/[paperId]/page.tsx
7. Run: npx tsc --noEmit — fix any TypeScript errors
8. Commit with: feat: add <paper-id> interactive assessment

Rules:
- NEVER embed screenshots as figImages if a native component is possible
- Bullet points in task text: use \n• prefix — they render as proper list items
- Command terms (STATE, DESCRIBE, etc.) are auto-highlighted — just include them naturally in task text
- For graphs: recreate as SVG with correct axis labels, data points, and interactive hover
- For tables: recreate as HTML tables with editable cells where needed
```

---

## Widget Development Pattern

To add a new custom widget:

1. Create `components/exam/widgets/MyWidget.tsx`:
```tsx
'use client'
interface MyWidgetProps { onAnswer: (val: string) => void }
export default function MyWidget({ onAnswer }: MyWidgetProps) {
  // ... render interactive UI
  // call onAnswer() whenever the student's response changes
}
```

2. Add to `lib/types.ts` Task.widget union:
```typescript
widget?: '...' | 'my_widget'
```

3. Import and render in `ExtendedQuestion.tsx`:
```tsx
} : task.widget === 'my_widget' ? (
  <MyWidget onAnswer={(ans) => setTaskAnswer(qIdx, taskIdx, ans)} />
) : (
```

---

## File Naming Convention

```
public/images/papers/<subject>-<session>-<year>/page-01.png
data/papers/<subject>-<session>-<year>/questions.ts
data/papers/<subject>-<session>-<year>/markscheme.ts
data/papers/<subject>-<session>-<year>/hints.ts        (optional)
```

Example: `physics-nov-2023`, `biology-may-2024`, `chemistry-nov-2022`
