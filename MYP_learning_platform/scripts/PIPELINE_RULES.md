# PDF → questions.ts Pipeline Rules
## Permanent memory for the MYP Learn question-generation pipeline

---

## 1. Mandatory Tags on Every Question

Every `Question` object generated from a PDF **must** include a `tags` field:

```typescript
tags: {
  unit: MYPUnit        // from data/curriculum/physics-myp.ts
  topics: string[]     // 1–3 specific sub-topics from the unit's topics[]
  level: QuestionLevel // 'foundation' | 'developing' | 'proficient' | 'advanced'
}
```

**Unit inference rules:**
| PDF question context | unit |
|---|---|
| speed, velocity, acceleration, motion graphs, SUVAT | `measurement-motion` |
| Newton's laws, forces, friction, momentum, Hooke's law | `forces-interactions` |
| pressure (solid/liquid/gas), hydraulics | `pressure` |
| work, KE, PE, energy chains, Sankey, efficiency, power | `work-energy` |
| heat transfer (conduction/convection/radiation), specific heat, states | `thermal-physics` |
| refraction, reflection, lenses, refractive index | `light-optics` |
| waves, wavelength, frequency, amplitude, sound, infrasound | `sound-waves` |
| EM spectrum, radio/micro/IR/UV/X-ray/gamma uses | `em-spectrum` |
| circuits, current, voltage, resistance, Ohm's law, static electricity | `electricity-circuits` |
| magnetic fields, motors, generators, transformers, induction | `magnetism-electromagnetism` |
| atoms, radioactivity, alpha/beta/gamma, half-life, nuclear | `atomic-physics` |
| solar system, gravity, orbits, stars, Big Bang | `astrophysics` |

**Level inference rules (use highest-demand command term in any task):**
| Command term(s) | level |
|---|---|
| State, Identify, Define, List, Name | `foundation` |
| Describe, Calculate, Outline, Predict, Select | `developing` |
| Explain, Analyse, Compare, Suggest, Design, Show | `proficient` |
| Evaluate, Justify, Discuss, Derive, Assess | `advanced` |

**Per-task level** (optional, only set when a task's level differs from the question overall):
```typescript
{ label: 'a', level: 'foundation', ... }   // overrides question-level for this task
```

---

## 2. Context-Aware Rephrasing Rules

IB past papers are © International Baccalaureate. Every question **must be rephrased** before publishing.

### What TO change
- **The real-world context / story** (character names, animals, objects, locations)
- **The numerical values** (keep physically realistic, same order of magnitude)
- **Surface phrasing** ("The bar-tailed godwit flies…" → "A cheetah sprints across…")

### What NOT to change
- **The physics concept** being tested
- **The command term** (EXPLAIN, CALCULATE, STATE — never swap these)
- **The arc** — the flow and dependency between sub-parts (a→b→c→d):
  - If (a) asks to calculate speed and (b) uses that speed, the rephrased (b) must still use the answer from (a)
  - If (c) asks to explain why velocity is constant and refers to a graph feature, the rephrased (c) must still reference the same graph feature
  - Sub-parts that scaffold on earlier answers MUST preserve that scaffolding relationship
- **The mark allocation** (do not change marks per task)
- **The diagram structure** (if a question uses a v-t graph with 4 segments, keep 4 segments)
- **Data tables** (keep same structure, change values within ±20%)

### Rephrasing examples
| Original | Rephrased |
|---|---|
| "A bar-tailed godwit flies 1200 km in a day" | "A peregrine falcon migrates 1400 km in a day" |
| "Zaina carries ice cream home" | "Amir transports frozen yoghurt from the market" |
| "Scientists fit satellite transmitters to 16 godwits" | "Researchers tag 18 falcons with GPS trackers" |
| "Harry is a cat…polystyrene pellets" | "Priya's wool jumper…small foam balls" |
| "Gareth finds his cup of coffee cools quickly" | "Nina notices her hot chocolate cools quickly" |

### Arc preservation example (N16 Q1 bird migration):
```
arc: calculate speed → outline factors affecting speed → select force diagram →
     explain Newton's law → calculate distance from graph
```
This arc must survive in the rephrased version — same logical progression, different context.

---

## 3. Stem Text Rules

- Use `**bold**` for command terms and key physics quantities
- Use `\n\n` between distinct paragraphs
- Use `| col | col |` pipe-table syntax for any data table in the stem
- Never include the question number in the stem text
- The stem must provide exactly the context needed — no more, no less

---

## 4. Task Rules

- `label`: single lowercase letter ('a', 'b', 'c'…)
- `text`: starts with `**COMMAND_TERM**` (bold), ends with a period
- `marks`: integer ≥ 1
- `ph`: helpful placeholder that hints at structure (e.g. "Speed = distance / time = …")
- `figImages`: only if the task needs a diagram not shown in the stem
- `widget`: use an appropriate interactive widget instead of textarea wherever possible:
  - Multiple-choice option → `radio_select`
  - "Select a value for each item" → `inline_dropdown_select`
  - "Label the diagram by dragging" → appropriate `*_label_drag_drop` widget
  - Never force-fit a textarea onto a drag/drop or selection question

---

## 5. Figure/Image Rules

- Prefer SVG-rendered React components over PDF screenshots
- If a diagram cannot be rendered in SVG, document it with a ChatGPT generation prompt in the widget file
- Crop all screenshot images to remove: watermarks, question numbers, blue "scroll" buttons, top-text strips
- All crops saved at 2× resolution
- `nativeContent` takes precedence over `figImages` when a custom React component exists

---

## 6. Quality Checklist (run before committing any questions.ts)

- [ ] Every question has `tags: { unit, topics, level }`
- [ ] All text rephrased — no original IB exam context verbatim
- [ ] Arc of sub-parts preserved (a→b→c logical flow intact)
- [ ] Marks sum matches paper's question marks
- [ ] All command terms are **bold** in task text
- [ ] Widget used wherever selection/drag-drop is appropriate
- [ ] No blank/placeholder images in figImages
- [ ] `npx tsc --noEmit` passes with zero errors

---

## 7. Paper ID Convention

```
physics-{session}{year2digit}   e.g.  physics-nov16, physics-may24
```
In full: `physics-may-2024`, `physics-nov-2017` etc.

---

## 8. Processing Order (priority)

Process most recent papers first (richer context for practice):
1. physics-may-2024 (M24)
2. physics-nov-2022 (N22)
3. physics-may-2023 (M23)
4. physics-may-2022 (M22)
5. physics-nov-2021 (N21)
6. physics-may-2021 (M21)
7. physics-nov-2020 (N20)
8. physics-nov-2019 (N19)
9. physics-may-2019 (M19)
10. physics-nov-2018 (N18)
11. physics-may-2018 (M18)
12. physics-nov-2017 (N17)
13. physics-may-2017 (M17)
14. physics-may-2016 (M16)
