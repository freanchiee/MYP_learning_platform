# PDF → Interactive Assessment — Standing Quality Requirements

These rules apply to **every** paper converted from PDF into the MYP Learning Platform exam format.
Treat this as a pre-publish checklist **and** a self-check protocol to run before handing over any paper.

---

## 1. Image Extraction

| Rule | Detail |
|------|--------|
| **Crop to diagram only** | Never include the full PDF page. Crop to the bounding box of the figure / diagram / table, excluding question text, page headers, footers, and answer boxes. |
| **No watermarks** | The source PDFs may carry a `www.brilliantlearning.in` footer. Crop coordinates must end **above** that footer (typically `y < 1660` for a 1755-px-tall page at 150 DPI). |
| **Detect cream/sepia backgrounds** | Some diagrams (e.g., historical engravings) have a cream/sepia background, not pure white. Use `is_cream_not_white(r,g,b)` — detect pixels where `r>225 and g>210 and b>150 and NOT (r>252 and g>252 and b>252)` — to find their bounding box. A threshold of `< 220` misses them entirely. |
| **2× upscale after crop** | After cropping, resize to 2× with `Image.LANCZOS` before saving. This ensures the image is legible on high-DPI screens without being pixelated. |
| **Verify crop is not blank** | After saving each crop, sample pixels and verify ≥ 10% are non-white. A 0% or near-0% result means wrong coordinates. |
| **Output naming** | Save as `page-{NN}-crop.png` in `/public/images/papers/{paperId}/`. Never overwrite the original `page-{NN}.png` extractions. |
| **Extraction script** | Use `pdftoppm -r 150 -png` (poppler). Page numbering must match the online exam interface page numbers. |

---

## 2. figImages Placement

| Rule | Detail |
|------|--------|
| **Task-level, not question-level** | Each cropped image should be placed as a `figImages` entry on the **Task** object that references it, not (only) on the Question stem — unless the image is context for the entire question. |
| **Immediate proximity** | The image renders directly **above** the task's answer box. Place it on the task the student needs it for. If an image is needed for parts (c) and (d), put it on (c) and remind students it is shared, or duplicate it. |
| **Skip text-only pages** | Pages from the online exam that show only question text and an answer toolbar (no diagram, graph, table, or illustration) must **not** be included as figImages. |
| **Multi-page questions** | Some questions show an orbit/context diagram on one page and the actual options (A, B, C, D) on the next page. Include BOTH images in `figImages` for that task. |

---

## 3. Placeholder Text (`ph` field)

| Rule | Detail |
|------|--------|
| **Brief structural hints only** | The `ph` (placeholder) should give a skeleton for the **format** of the answer, not reveal the answer itself. |
| **Forbidden content** | Do NOT include: correct numerical answers, full worked solutions, complete exemplar paragraphs, or any content that a student could copy verbatim to score marks. |
| **Good examples** | `'Show your working (equation, substitution, answer with unit)...'` / `'Explain the path of light and how the brain interprets it...'` / `'BENEFITS:\n•\n\nLIMITATIONS:\n•\n\nCONCLUSION:'` |
| **Bad examples** | `'I = E/(V×t) = 150/(300×0.03) = 16.67 A'` / Full design plan filled in for Q5a |

---

## 4. Bold / Inline Markdown in Task Text

| Rule | Detail |
|------|--------|
| **Use `**word**` syntax** | Command terms (CALCULATE, EXPLAIN, DESCRIBE, etc.) and key phrases should be wrapped in `**double asterisks**`. |
| **Renderer handles it** | `renderTaskText()` in `ExtendedQuestion.tsx` now parses `**bold**` → `<strong>bold</strong>`. Do not use HTML tags directly in the `text` field. |
| **Bullet lists** | Use `\n•` prefix on lines for bullet points. The renderer converts these to `<ul><li>` items automatically. |

---

## 5. Widget Selection

| Question type | Use this widget |
|---------------|----------------|
| Single-blank fill from options | `energy_chain` (shows chain diagram + click-to-place chips) |
| Multi-blank path matching | `cannonball_paths` (4 dropdowns A–D, each with speed options) |
| Radio-button MCQ inside extended question | `radio_select` + `widgetOptions: ['A','B','C','D']` |
| Variable classification table | `variable_classify` |
| Sankey energy diagram | `sankey_q3` |
| Drag-drop planet sequence | `drag_drop_planets` |
| Data table fill-in | `q4e_table` / `q5c_table` |

**Widget onAnswer pattern**: Never use `useEffect` with `onAnswer` in the dependency array — it creates an infinite re-render loop. Call `onAnswer(...)` directly inside event handlers (click, change, drop), like `DragDropPlanets` does.

---

## 6. LiveKeywordTracker

| Rule | Detail |
|------|--------|
| **Required for extended tasks** | Every task with `marks ≥ 2` that expects a written paragraph response should have a `conceptsPublic` entry. |
| **Sequential reveal** | Keywords are **not** all shown upfront. The tracker shows: all hit concepts (green) + the **next one** target (blue dashed) + a `+N more` locked badge. This prevents students from just hunting a displayed word list. |
| **Per-paper conceptsPublic** | Create `data/papers/{paperId}/conceptsPublic.ts` for each new paper. Register it in `data/concepts/registry.ts`. Key format: `q{id}_{label}` e.g. `q3_a`. |
| **Never include mark-scheme answers** | `keyConcepts` must be generalised concepts / formulae, not the exact answer string. `keywords` are matching helpers, not giveaways. |

---

## 7. Paper Registration

Every new paper must be registered in **three** places:

1. **`app/exam/[paperId]/page.tsx`** — add import + entry in the `PAPERS` record.
2. **`app/(platform)/papers/page.tsx`** — add entry in `LOCAL_PAPER_META` with correct `total_marks` and `duration_minutes`.
3. **Supabase** — run `INSERT INTO public.papers (id, subject, session, year, total_marks, duration_minutes, is_published) VALUES (...)` in the SQL editor.

---

## 8. Mark Scheme (`markscheme.ts`)

| Rule | Detail |
|------|--------|
| **`server-only`** | First line must be `import 'server-only'`. The mark scheme is never shipped to the client. |
| **Key format** | `q{id}_{label}` e.g. `'q6_g'`. MCQ tasks use `{ type: 'mcq', correct: N }`. |
| **Holistic marks** | For Criterion B/D extended essays (≥ 8 marks) use a multi-paragraph `exemplar` that describes the top-band response qualitatively. Do not enumerate every bullet point. |

---

## 9. Self-Check Protocol (Run Before Handing Over)

Run through this full list after every paper build. Fix everything before marking a paper as publishable.

### 9a. Image checks — run for every `figImages` entry

```
For each page-NN-crop.png:
  □ Open the image. Is it blank or mostly white? → wrong crop coordinates; re-scan
  □ Does it include the brilliantlearning.in watermark? → y coordinate too low
  □ Does it include question text or answer boxes? → crop starts/ends in wrong area
  □ Is the diagram cut off at any edge? → expand the crop box
  □ For sepia/cream diagrams: used cream-not-white detection, not strict threshold?
  □ Is it at 2× resolution (at least 600px wide for a typical diagram)?
  □ Placed at the correct task level (not just question level)?
```

### 9b. Question type checks

```
For each task:
  □ Does the task require selecting from a fixed option list?
      → Use radio_select / energy_chain / cannonball_paths, not a text input
  □ Does the task have multiple labelled options (A, B, C, D) in the image?
      → Include BOTH context image AND options image in figImages
  □ Is the task a "select one correct answer" type?
      → Use radio_select widget, not a RichTextEditor
  □ Are widget path descriptions / option labels correct?
      (e.g. cannonball_paths: A=curved falls back, B=orbit, C=straight down, D=escape)
```

### 9c. Text / content checks

```
For each task:
  □ Does the ph field contain any worked answers, numerical results, or exemplar paragraphs? → Remove them
  □ Are command terms (CALCULATE, DESCRIBE, etc.) wrapped in **double asterisks**?
  □ Does the task have a reading passage (article, data table, context text)?
      → Add it as task.passage so it renders as a styled reading card
  □ Are inline superscripts/subscripts represented correctly (e.g. m s⁻¹, cm³)?
  □ Are there bullet point lists that use \n• format?
```

### 9d. Question order and structure

```
  □ Verify that multi-part question labelling (a, b, c, i, ii...) matches the paper
  □ Check that marks on each task add up to the question's declared total marks
  □ Check that all question marks add up to paper's totalMarks
  □ conceptsPublic keys match actual task labels (q{id}_{label}) — typos cause silent failures
```

### 9e. LiveKeywordTracker

```
  □ Every written-response task with marks ≥ 2 has a conceptsPublic entry
  □ No keyConcepts entry contains the verbatim answer (e.g. '16.67 A' is a giveaway)
  □ conceptsPublic.ts registered in data/concepts/registry.ts
```

### 9f. TypeScript

```
  □ npx tsc --noEmit → zero errors
  □ No any casts on question data
```

---

## 10. Pre-Publish Checklist

Before marking a paper as `is_published = true`, verify:

- [ ] All figImages use `-crop.png` files (no full-page screenshots)
- [ ] No watermark (`brilliantlearning.in`) visible in any image
- [ ] No crop is blank/white (verified with pixel sampling)
- [ ] Each cropped image appears at the correct task level
- [ ] No `ph` field contains a worked answer or exemplar
- [ ] Select-type questions use appropriate widgets (not text boxes)
- [ ] All `**bold**` syntax renders correctly in the browser
- [ ] Reading passages stored in `task.passage` and render as blue cards
- [ ] `conceptsPublic.ts` created and registered in `registry.ts`
- [ ] `markscheme.ts` has `server-only` at the top
- [ ] Total marks sum matches `paperMeta.totalMarks`
- [ ] TypeScript passes: `npx tsc --noEmit` with zero errors
- [ ] Paper registered in `exam/[paperId]/page.tsx` and `papers/page.tsx`
- [ ] Supabase `papers` row inserted and `is_published = true`
