// Lays a WorkDoc (lib/design-live/studentWork.ts) out as a PDF with pdfmake.
//
// Written for two readers at once: a student revising the design cycle, and an
// AI assistant helping a teacher grade. So every block says in plain text who
// wrote it — STUDENT'S WORK / TASK CONTEXT / REFERENCE EXEMPLAR / AI-GENERATED —
// because colour does not survive text extraction, and the work is organised by
// criterion and strand (A → B → C → D) to show how the thinking progressed.
//
// Pure function (no DOM), so it can be tested under Node as well as the browser.

import type { Content, ContentTable, TDocumentDefinitions, TableCell } from 'pdfmake/interfaces'
import type { WorkDoc, WorkItem, WorkStrand, WorkCriterion } from './studentWork'
import { CRITERIA } from './criteria'

export type ImageMap = Record<string, { dataUrl: string; w: number; h: number }>

const INK = '#1B2430'
const MUTED = '#5B6675'
const FAINT = '#9AA3B0'
const RULE = '#DDE2EA'
const PANEL = '#F4F6F9'
const REF = '#B7791F'
const REF_BG = '#FFF8E8'
const WIDTH = 515

/** Roboto has no emoji or pictographs; strip them so they don't print as boxes. */
export const clean = (t: string) =>
  (t || '')
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '')
    .replace(/[←-⇿☀-➿⬀-⯿️‍]/g, '')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()

const tint = (hex: string, amount: number) => {
  const n = parseInt(hex.slice(1), 16)
  const mix = (c: number) => Math.round(c + (255 - c) * amount)
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => mix(c).toString(16).padStart(2, '0')).join('')}`
}

const noBorders = { hLineWidth: () => 0, vLineWidth: () => 0 }

/** Splits long answers so no single table row is taller than a page (pdfmake rows cannot split). */
function chunk(text: string, max = 700): string[] {
  const out: string[] = []
  for (const para of clean(text).split(/\n+/)) {
    if (!para.trim()) continue
    if (para.length <= max) { out.push(para); continue }
    let cur = ''
    for (const s of para.match(/[^.!?]+[.!?]*\s*/g) || [para]) {
      if ((cur + s).length > max && cur) { out.push(cur.trim()); cur = s } else cur += s
    }
    if (cur.trim()) out.push(cur.trim())
  }
  return out
}

const eyebrow = (text: string, color = MUTED): Content => ({ text: text.toUpperCase(), fontSize: 7.5, bold: true, color, characterSpacing: 0.9 })

// ---------------------------------------------------------------- blocks
/** A label row (context) followed by answer rows with a coloured bar down the left — one table so it stays together. */
function block(opts: { label: Content[]; rows: Content[]; bar: string; fill: string; tag: string; tagColor: string }): Content {
  const rowCells = (cells: Content[]): TableCell[][] =>
    cells.map((c, i) => [
      { text: '', fillColor: opts.bar },
      { stack: i === 0 ? [{ text: opts.tag, fontSize: 7, bold: true, color: opts.tagColor, characterSpacing: 0.9, margin: [0, 0, 0, 3] }, c] : [c], fillColor: opts.fill },
    ])
  const body: TableCell[][] = [
    [{ colSpan: 2, stack: opts.label, margin: [0, 0, 0, 4] }, {}],
    ...(opts.rows.length ? rowCells(opts.rows) : []),
  ]
  const table: ContentTable = {
    table: { widths: [3.5, '*'], body, headerRows: 1, keepWithHeaderRows: 1, dontBreakRows: true },
    layout: {
      ...noBorders,
      paddingLeft: (i: number) => (i === 0 ? 0 : 10),
      paddingRight: () => 8,
      paddingTop: (r: number) => (r === 0 ? 0 : 3),
      paddingBottom: (r: number, node: any) => (r === 0 ? 0 : r === node.table.body.length - 1 ? 8 : 3),
    },
    margin: [0, 0, 0, 10],
  }
  return table
}

const para = (text: string, extra: Record<string, unknown> = {}): Content => ({ text, fontSize: 10, lineHeight: 1.3, color: INK, ...extra })

function labelStack(item: { label: string; prompt?: string }): Content[] {
  return [
    { text: [{ text: 'QUESTION  ', fontSize: 7, bold: true, color: FAINT, characterSpacing: 0.9 }, { text: clean(item.label), fontSize: 10.5, bold: true, color: INK }] },
    ...(item.prompt ? [{ text: clean(item.prompt), fontSize: 8.5, italics: true, color: MUTED, margin: [0, 1, 0, 0] } as Content] : []),
  ]
}

const NO_RESPONSE: Content = { text: 'No response recorded.', italics: true, color: FAINT, fontSize: 9.5 }

function exemplarBlock(texts: string[]): Content {
  return {
    table: {
      widths: [3.5, '*'],
      body: texts.map((t, i) => [
        { text: '', fillColor: REF },
        { stack: [...(i === 0 ? [{ text: 'REFERENCE EXEMPLAR - NOT STUDENT WORK', fontSize: 7, bold: true, color: REF, characterSpacing: 0.9, margin: [0, 0, 0, 2] } as Content] : []), { text: clean(t), fontSize: 8.5, italics: true, color: MUTED, lineHeight: 1.25 }], fillColor: REF_BG },
      ]),
      dontBreakRows: true,
    },
    layout: { ...noBorders, paddingLeft: (i: number) => (i === 0 ? 0 : 10), paddingRight: () => 8, paddingTop: () => 3, paddingBottom: () => 3 },
    margin: [0, -4, 0, 10],
  }
}

function itemContent(item: WorkItem, color: string, images: ImageMap): Content[] {
  const fill = tint(color, 0.93)
  const student = (rows: Content[], label = labelStack(item as any)) => block({ label, rows: rows.length ? rows : [NO_RESPONSE], bar: color, fill, tag: "STUDENT'S WORK", tagColor: color })

  switch (item.kind) {
    case 'text': {
      const rows = chunk(item.answer).map((t) => para(t))
      return [student(rows), ...(item.exemplars.length ? [exemplarBlock(item.exemplars)] : [])]
    }
    case 'rows': {
      const rows: Content[] = item.rows.map((r, i) => ({
        stack: [
          { text: clean(r.title).toUpperCase(), fontSize: 7, bold: true, color: MUTED, characterSpacing: 0.8, margin: [0, 0, 0, 1] },
          ...r.cells.map((c) => ({ text: [{ text: `${clean(c.label)}: `, bold: true, color: MUTED, fontSize: 9 }, { text: clean(c.value), fontSize: 9.5, color: INK }], margin: [10, 0, 0, 1], lineHeight: 1.25 } as Content)),
        ],
      }))
      return [student(rows)]
    }
    case 'list': {
      const rows = item.items.map((i) => para(`${i.checked ? '[x]' : '[ ]'}  ${clean(i.text)}`, { fontSize: 9.5 }))
      return [student(rows)]
    }
    case 'chat': {
      const rows: Content[] = item.messages.map((m) => ({
        stack: [
          { text: m.from === 'student' ? "STUDENT'S QUESTION" : `${clean(item.who) || 'Interviewee'} (AI-GENERATED REPLY - CONTEXT)`, fontSize: 6.8, bold: true, color: m.from === 'student' ? color : FAINT, characterSpacing: 0.6 },
          { text: clean(m.text), fontSize: 9.5, color: m.from === 'student' ? INK : MUTED, italics: m.from !== 'student', lineHeight: 1.25 },
        ],
      }))
      const label: Content[] = [
        { text: [{ text: 'INTERVIEW  ', fontSize: 7, bold: true, color: FAINT, characterSpacing: 0.9 }, { text: clean(item.label), fontSize: 10.5, bold: true }] },
        { text: item.who ? `Interviewee chosen by the student: ${clean(item.who)}` : 'No interviewee chosen.', fontSize: 8.5, italics: true, color: MUTED },
      ]
      return [student(rows, label)]
    }
    case 'choice': {
      const rows: Content[] = item.choice
        ? [para(clean(item.choice), { bold: true }), ...(item.custom ? [para(clean(item.custom))] : [])]
        : []
      const out: Content[] = [student(rows, labelStack({ label: item.label }))]
      if (item.context) out.push(block({ label: [], rows: [{ text: clean(item.context), fontSize: 8.5, color: MUTED, italics: true }], bar: FAINT, fill: PANEL, tag: 'TASK CONTEXT - DESCRIPTION OF THE CHOSEN CARD', tagColor: FAINT }) as Content)
      return out
    }
    case 'images': {
      const rows: Content[] = item.images.map((im) => {
        const img = images[im.url]
        if (!img) return { text: [{ text: `${clean(im.name)}  `, bold: true, fontSize: 9 }, { text: im.url, color: '#2F6FED', fontSize: 8, link: im.url }] } as Content
        const scale = Math.min(320 / img.w, 240 / img.h, 1)
        return { stack: [{ image: img.dataUrl, width: Math.round(img.w * scale), height: Math.round(img.h * scale) }, { text: clean(im.name), fontSize: 8, color: MUTED, margin: [0, 2, 0, 0] }] } as Content
      })
      return [student(rows, labelStack(item))]
    }
  }
}

// ---------------------------------------------------------------- criteria
const statusText = (s: WorkStrand['status']) => (s === 'complete' ? 'Evidenced' : s === 'partial' ? 'Partly evidenced' : 'Not started')

function progressBar(pct: number, color: string, width = 100): Content {
  return { canvas: [{ type: 'rect', x: 0, y: 0, w: width, h: 4, r: 2, color: '#E6EAF0' }, { type: 'rect', x: 0, y: 0, w: Math.max(0, Math.min(1, pct / 100)) * width, h: 4, r: 2, color }] }
}

function cycleOverview(doc: WorkDoc): Content {
  const present = doc.criteria.filter((c) => c.letter)
  const cells: TableCell[] = []
  present.forEach((c, i) => {
    cells.push({
      stack: [
        { canvas: [{ type: 'rect', x: 0, y: 0, w: 96, h: 4, color: c.color }] },
        { text: c.letter, fontSize: 26, bold: true, color: c.color, margin: [0, 4, 0, 0] },
        { text: c.name, fontSize: 8.5, bold: true, color: INK, margin: [0, 0, 0, 6] },
        progressBar(c.pct, c.color, 96),
        { text: `${c.pct}% evidenced`, fontSize: 7.5, color: MUTED, margin: [0, 2, 0, 6] },
        ...c.strands.map((s) => ({ text: [{ text: `${s.key}  `, bold: true, color: s.status === 'none' ? FAINT : c.color, fontSize: 8.5 }, { text: s.status === 'complete' ? 'done' : s.status === 'partial' ? 'partial' : 'to do', fontSize: 7.5, color: s.status === 'none' ? FAINT : MUTED }], margin: [0, 0, 0, 1] } as Content)),
      ],
      fillColor: tint(c.color, 0.94),
      margin: [8, 0, 8, 8],
    })
    if (i < present.length - 1) cells.push({ text: '>', fontSize: 16, bold: true, color: FAINT, alignment: 'center', margin: [0, 28, 0, 0] })
  })
  const widths = present.flatMap((_, i) => (i < present.length - 1 ? ['*', 14] : ['*']))
  return {
    table: { widths, body: [cells] },
    layout: { ...noBorders, paddingLeft: () => 0, paddingRight: () => 0, paddingTop: () => 0, paddingBottom: () => 0 },
    margin: [0, 6, 0, 14],
  }
}

function journeyTable(doc: WorkDoc): Content {
  const head = ['STRAND', 'WHAT THE STRAND ASKS', 'EVIDENCE IN THIS DOCUMENT', 'DONE', "OPENING OF THE STUDENT'S RESPONSE"].map((t) => ({ text: t, fontSize: 6.8, bold: true, color: MUTED, characterSpacing: 0.6 }))
  const body: TableCell[][] = [head]
  doc.criteria.forEach((c) =>
    c.strands.forEach((s) => {
      const texts = s.sections.flatMap((x) => x.items).filter((i): i is Extract<WorkItem, { kind: 'text' }> => i.kind === 'text' && !!i.answer)
      const firstText = texts.find((i) => i.answer.length >= 30) ?? texts[0]
      const excerpt = firstText ? clean(firstText.answer).slice(0, 110) + (firstText.answer.length > 110 ? '...' : '') : '-'
      body.push([
        { text: s.key, bold: true, color: c.color, fontSize: s.key.length > 4 ? 7 : 10 },
        { text: clean(s.label), fontSize: 8.5, color: INK },
        { text: s.sections.map((x) => clean(x.title)).join('; '), fontSize: 8, color: MUTED },
        { stack: [{ text: `${s.pct}%`, fontSize: 8.5, bold: true, color: INK }, { text: statusText(s.status), fontSize: 6.8, color: MUTED }] },
        { text: excerpt, fontSize: 8, italics: true, color: MUTED },
      ])
    })
  )
  return {
    table: { headerRows: 1, widths: [40, 128, 108, 46, '*'], body, dontBreakRows: true },
    layout: {
      hLineWidth: (i: number, node: any) => (i === 0 || i === node.table.body.length ? 0 : 0.5),
      vLineWidth: () => 0,
      hLineColor: () => RULE,
      paddingTop: () => 5,
      paddingBottom: () => 5,
      paddingLeft: () => 4,
      paddingRight: () => 4,
    },
  }
}

function criterionChapter(c: WorkCriterion, doc: WorkDoc, images: ImageMap): Content[] {
  const present = doc.criteria.filter((x) => x.letter)
  const step = c.letter ? present.findIndex((x) => x.letter === c.letter) + 1 : 0
  const track: Content = c.letter
    ? {
        table: {
          widths: present.map(() => '*'),
          body: [present.map((x) => ({ text: `${x.letter}  ${x.name}`, fontSize: 7.5, bold: x.letter === c.letter, color: x.letter === c.letter ? '#FFFFFF' : MUTED, fillColor: x.letter === c.letter ? x.color : PANEL, alignment: 'center' as const, margin: [0, 3, 0, 3] }))],
        },
        layout: { ...noBorders, paddingLeft: () => 1, paddingRight: () => 1 },
        margin: [0, 0, 0, 12],
      }
    : { text: '', margin: [0, 0, 0, 4] }

  const out: Content[] = [
    {
      table: {
        widths: ['*'],
        body: [[{
          stack: [
            { text: c.letter ? `CRITERION ${c.letter}  -  STEP ${step} OF ${present.length} IN THE DESIGN CYCLE` : 'OTHER WORK', fontSize: 8, bold: true, color: '#FFFFFF', characterSpacing: 1.2 },
            { text: c.name, fontSize: 22, bold: true, color: '#FFFFFF', margin: [0, 2, 0, 0] },
            { text: `${c.strands.map((s) => s.key).join('  ')}   |   ${c.pct}% evidenced`, fontSize: 9, color: tint(c.color, 0.8), margin: [0, 3, 0, 0] },
          ],
          fillColor: c.color,
          margin: [16, 14, 16, 14],
        }]],
      },
      layout: noBorders,
      margin: [0, 0, 0, 8],
      pageBreak: 'before',
    } as Content,
    track,
  ]

  c.strands.forEach((s) => {
    out.push({
      table: {
        widths: [44, '*', 90],
        body: [[
          { text: s.key, fontSize: 17, bold: true, color: c.color, margin: [0, 1, 0, 0] },
          { stack: [eyebrow('Strand - what it asks'), { text: clean(s.label), fontSize: 10.5, bold: true, color: INK }] },
          { stack: [progressBar(s.pct, c.color, 90), { text: `${statusText(s.status)} - ${s.pct}%`, fontSize: 7.5, color: MUTED, margin: [0, 2, 0, 0] }], margin: [0, 6, 0, 0] },
        ]],
      },
      layout: { hLineWidth: (i: number) => (i === 1 ? 1 : 0), vLineWidth: () => 0, hLineColor: () => c.color, paddingLeft: () => 0, paddingRight: () => 4, paddingBottom: () => 6, paddingTop: () => 0 },
      margin: [0, 6, 0, 8],
    } as Content)

    s.sections.forEach((sec) => {
      out.push({ text: clean(sec.title), fontSize: 12.5, bold: true, color: INK, margin: [0, 2, 0, 2] } as Content)
      if (sec.blurb) out.push({ text: [{ text: 'TASK CONTEXT  ', fontSize: 7, bold: true, color: FAINT, characterSpacing: 0.9 }, { text: clean(sec.blurb), fontSize: 8.5, italics: true, color: MUTED }], margin: [0, 0, 0, 3], lineHeight: 1.25 } as Content)
      if (sec.guidance.length)
        out.push({ text: [{ text: 'TASK CONTEXT - WHAT GOOD LOOKS LIKE  ', fontSize: 7, bold: true, color: FAINT, characterSpacing: 0.9 }, { text: sec.guidance.map(clean).join('  |  '), fontSize: 8, color: MUTED }], margin: [0, 0, 0, 6], lineHeight: 1.25 } as Content)
      sec.items.forEach((it) => out.push(...itemContent(it, c.color, images)))
    })
  })
  return out
}

// ---------------------------------------------------------------- document
export function buildWorkPdf(doc: WorkDoc, images: ImageMap = {}): TDocumentDefinitions {
  const legendCell = (color: string, fill: string, tag: string, body: string): TableCell => ({
    table: { widths: [3.5, '*'], body: [[{ text: '', fillColor: color }, { stack: [{ text: tag, fontSize: 7, bold: true, color, characterSpacing: 0.9 }, { text: body, fontSize: 8, color: INK, margin: [0, 2, 0, 0], lineHeight: 1.2 }], fillColor: fill }]] },
    layout: { ...noBorders, paddingLeft: (i: number) => (i === 0 ? 0 : 8), paddingRight: () => 6, paddingTop: () => 6, paddingBottom: () => 6 },
  })

  const stat = (value: string, label: string): TableCell => ({ stack: [{ text: value, fontSize: 18, bold: true, color: '#FFFFFF' }, { text: label.toUpperCase(), fontSize: 6.8, color: tint(doc.accent, 0.78), characterSpacing: 0.8 }] })
  const answered = doc.criteria.flatMap((c) => c.strands)
  const evidenced = answered.filter((s) => s.status !== 'none').length

  const content: Content[] = [
    {
      table: {
        widths: ['*'],
        body: [[{
          stack: [
            { text: 'DESIGN CYCLE PORTFOLIO', fontSize: 8, bold: true, color: tint(doc.accent, 0.78), characterSpacing: 1.6 },
            { text: clean(doc.activityTitle), fontSize: 26, bold: true, color: '#FFFFFF', margin: [0, 4, 0, 0] },
            { text: clean(doc.student), fontSize: 15, color: '#FFFFFF', margin: [0, 4, 0, 0] },
            { text: `${clean(doc.className)}   |   ${doc.date}`, fontSize: 9, color: tint(doc.accent, 0.78), margin: [0, 2, 0, 12] },
            { table: { widths: ['*', '*', '*'], body: [[stat(`${doc.completionPct}%`, 'Overall evidenced'), stat(`${evidenced}/${answered.length}`, 'Strands with evidence'), stat(String(doc.wordCount), "Words written by student")]] }, layout: noBorders },
          ],
          fillColor: doc.accent,
          margin: [20, 18, 20, 18],
        }]],
      },
      layout: noBorders,
      margin: [0, 0, 0, 14],
    },

    eyebrow('How to read this document'),
    { text: "Every block is labelled in text, so the distinction survives copy-paste and AI processing. Only blocks labelled STUDENT'S WORK were written or chosen by the student.", fontSize: 8.5, color: MUTED, margin: [0, 2, 0, 6], lineHeight: 1.25 },
    {
      table: {
        widths: ['*', '*', '*'],
        body: [[
          legendCell(doc.accent, tint(doc.accent, 0.92), "STUDENT'S WORK", 'What the student typed, chose or uploaded. Judge this.'),
          legendCell(FAINT, PANEL, 'TASK CONTEXT', 'The question, hint or brief the student was given. Not student work.'),
          legendCell(REF, REF_BG, 'REFERENCE EXEMPLAR', 'Model answers and AI-generated interview replies. Not student work.'),
        ]],
      },
      layout: { ...noBorders, paddingLeft: () => 0, paddingRight: () => 4 },
      margin: [0, 0, 0, 14],
    },

    ...(doc.brief
      ? ([
          eyebrow('The task - context'),
          { text: [{ text: 'Context  ', bold: true }, clean(doc.brief.context)], fontSize: 8.5, color: MUTED, margin: [0, 2, 0, 2], lineHeight: 1.25 },
          { text: [{ text: 'Task  ', bold: true }, clean(doc.brief.task)], fontSize: 8.5, color: MUTED, margin: [0, 0, 0, 2], lineHeight: 1.25 },
          { text: [{ text: 'Students produce  ', bold: true }, doc.brief.produce.map(clean).join('  |  ')], fontSize: 8.5, color: MUTED, margin: [0, 0, 0, 14], lineHeight: 1.25 },
        ] as Content[])
      : []),

    eyebrow('Progression through the design cycle'),
    cycleOverview(doc),
    eyebrow('Journey at a glance - strand by strand'),
    { text: '', margin: [0, 3] },
    journeyTable(doc),
  ]

  if (doc.grade) {
    content.push(
      { text: '', margin: [0, 10] },
      eyebrow('Teacher assessment', '#1B2430'),
      { text: 'Strand scores (1-8)', fontSize: 15, bold: true, margin: [0, 2, 0, 8] },
      {
        table: { widths: [44, '*', 50], body: doc.grade.strands.map((s) => [{ text: s.key, bold: true, color: CRITERIA[s.key[0]]?.color ?? INK, fontSize: 10 }, { text: clean(s.label), fontSize: 9 }, { text: `${s.score} / 8`, bold: true, alignment: 'right' as const }]) },
        layout: { hLineWidth: () => 0.5, vLineWidth: () => 0, hLineColor: () => RULE, paddingTop: () => 5, paddingBottom: () => 5 },
      },
      ...(doc.grade.feedback ? ([{ text: 'TEACHER FEEDBACK', fontSize: 7.5, bold: true, color: MUTED, characterSpacing: 0.9, margin: [0, 12, 0, 3] }, { text: clean(doc.grade.feedback), fontSize: 10, lineHeight: 1.3 }] as Content[]) : [])
    )
  }

  if (doc.quizzes.some((q) => q.answered)) {
    content.push({ text: '', margin: [0, 10] }, eyebrow('Knowledge check - before the design cycle'), { text: 'Quiz responses', fontSize: 15, bold: true, margin: [0, 2, 0, 8] })
    doc.quizzes.filter((q) => q.answered).forEach((q) => {
      content.push({ text: `${clean(q.title)}: ${q.correct} correct of ${q.answered} answered (${q.total} questions in the quiz)`, fontSize: 11, bold: true, margin: [0, 0, 0, 6] })
      q.items.forEach((it, i) =>
        content.push({
          unbreakable: true,
          margin: [0, 0, 0, 6],
          stack: [
            { text: [{ text: 'QUESTION  ', fontSize: 7, bold: true, color: FAINT }, { text: `${i + 1}. ${clean(it.q)}`, fontSize: 9, bold: true }] },
            { text: [{ text: "STUDENT'S ANSWER  ", fontSize: 7, bold: true, color: doc.accent }, { text: `${clean(it.chosen)}  `, fontSize: 9 }, { text: it.ok ? '(correct)' : `(incorrect - correct answer: ${clean(it.correctAnswer)})`, fontSize: 8, color: it.ok ? '#1A8F6F' : '#C0392B' }] },
          ],
        } as Content)
      )
    })
  }

  doc.criteria.forEach((c) => content.push(...criterionChapter(c, doc, images)))

  if (doc.stageFeedback.length) {
    content.push({ text: '', pageBreak: 'before' }, eyebrow("Student's reflection on each part"), { text: 'How the student rated the activity', fontSize: 15, bold: true, margin: [0, 2, 0, 8] })
    doc.stageFeedback.forEach((f) =>
      content.push({
        unbreakable: true,
        margin: [0, 0, 0, 8],
        stack: [
          { text: `${clean(f.stage)}  -  ${f.stars}/5`, fontSize: 10, bold: true },
          ...(f.liked ? [{ text: [{ text: "STUDENT'S WORK - WHAT WORKED  ", fontSize: 7, bold: true, color: doc.accent }, { text: clean(f.liked), fontSize: 9 }] } as Content] : []),
          ...(f.improve ? [{ text: [{ text: "STUDENT'S WORK - TO IMPROVE  ", fontSize: 7, bold: true, color: doc.accent }, { text: clean(f.improve), fontSize: 9 }] } as Content] : []),
        ],
      } as Content)
    )
  }

  return {
    pageSize: 'A4',
    pageMargins: [40, 52, 40, 48],
    info: {
      title: `${doc.activityTitle} - ${doc.student}`,
      author: 'CritABCD',
      subject: `Design cycle portfolio (criteria A-D) for ${doc.student}, ${doc.className}`,
      keywords: 'MYP Design, design cycle, criterion A, criterion B, criterion C, criterion D, student work',
    },
    defaultStyle: { font: 'Roboto', fontSize: 10, color: INK },
    header: (page: number) => (page === 1 ? null : { text: `${clean(doc.activityTitle)}  |  ${clean(doc.student)}`, fontSize: 7.5, color: FAINT, margin: [40, 24, 40, 0] }),
    footer: (page: number, count: number) => ({
      columns: [
        { text: `${clean(doc.className)}  |  generated ${new Date().toLocaleDateString()}`, fontSize: 7.5, color: FAINT },
        { text: `Page ${page} of ${count}`, fontSize: 7.5, color: FAINT, alignment: 'right' },
      ],
      margin: [40, 18, 40, 0],
    }),
    content,
  }
}

export { WIDTH as PDF_CONTENT_WIDTH }
