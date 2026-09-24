// Content is DATA. A module holds lessons; a lesson is an ordered list of blocks.
// Rendering lives in components/learn/*. Add a topic = add a data file + register it in index.ts.

export type Level = 'SL' | 'HL' | 'SL+HL'

export interface Mcq {
  q: string
  options: string[]
  answer: number
  why: string
}

export type WidgetId =
  | 'energy-generator'
  | 'measurable-sorter'
  | 'scalar-vector-sorter'
  | 'si-trainer'
  | 'tilt-forces'
  | 'four-forces'
  | 'themes-map'
  | 'assessment-map'
  | 'frame-of-reference'
  | 'pendulum'
  | 'zeno-series'
  | 'unit-converter'

export type BoxKind = 'yes' | 'no' | 'opt'

export interface FlowNode {
  q?: string // a question, shown large
  title?: string
  tag?: string
  boxes?: { text: string; kind: BoxKind }[]
  bracket?: { count: number; label: string } // groups the first `count` boxes under a label
  note?: string // hand-written aside
  then?: FlowNode // continues below this node
  branches?: { label: string; tone: 'yes' | 'no' | 'plain'; node: FlowNode }[]
}

export type Cell = { v: 'yes' | 'no' | 'tiny'; note?: string }

export type Block =
  | { t: 'matrix'; title: string; idea: string; cols: { head: string; sub?: string; ex?: string }[]; rows: { label: string; cells: Cell[] }[] }
  | { t: 'flow'; title: string; root: FlowNode }
  | { t: 'arrows'; title?: string; head?: [string, string]; rows: { from: string; to: string; note?: string; emoji?: string }[] }
  | { t: 'pills'; groups: { label: string; tone?: 'accent' | 'muted' | 'warn'; items: string[] }[] }
  | { t: 'formulas'; items: { eq: string; legend: string[] }[] }
  | { t: 'note'; text: string; by?: string }
  | { t: 'steps'; title: string; given: string; steps: { line: string; why: string }[]; answer: string }
  | { t: 'deck'; slides: { id: string; kicker: string; title: string; blocks: Block[] }[] }
  | { t: 'hook'; text: string }
  | { t: 'h'; id: string; text: string }
  | { t: 'p'; text: string }
  | { t: 'list'; items: string[] }
  | { t: 'callout'; kind: 'idea' | 'warn' | 'note'; title: string; text: string }
  | { t: 'def'; term: string; text: string }
  | { t: 'widget'; id: WidgetId; title: string; idea: string; predict?: Mcq }
  | { t: 'desmos'; src: string; title: string; description: string }
  | ({ t: 'check'; id: string; back?: string } & Mcq)
  | { t: 'apply'; id: string; prompt: string; model: string; checklist: string[] }
  | { t: 'retrieval'; items: (Mcq & { from: string })[] }
  | { t: 'summary'; points: string[]; terms: { term: string; def: string }[]; formulas: string[]; errors: string[] }

export interface Lesson {
  slug: string
  code: string
  title: string
  blurb: string
  syllabus: string
  level: Level
  difficulty: 1 | 2 | 3
  minutes: number
  access: 'free' | 'premium'
  blocks: Block[]
}

export interface Module {
  slug: string
  code: string
  title: string
  theme: string
  source: string // which class notes this module is built from
  intro: string
  lessons: Lesson[]
}
