// Live Class Creator — the declarative shape every live activity is
// authored against. One generic engine (components/design/live/*)
// renders ANY definition that satisfies this shape: a host screen, a
// join screen, live sync, scoring and (optionally) teacher grading —
// so a new year-wise activity is a new data file, not new UI code.
//
// See .claude/skills/live-class-creator/SKILL.md for the full pattern
// this was extracted from (three one-off HTML builds) and how to
// author a new activity.

export type MypYear = 'MYP2' | 'MYP3' | 'MYP4' | 'MYP5'

export interface LiveTheme {
  accent: string // primary brand colour for this activity, e.g. '#2456C9'
  from: string // gradient stop for hub cards
  via: string
  to: string
}

export interface LiveTeam {
  name: string
  short: string
  icon: string
  color: string
}

// ---------------------------------------------------------------
// Stage: MCQ (quiz)
// ---------------------------------------------------------------
export interface McqQuestion {
  q: string
  context?: string // short label shown above the stem, e.g. a scenario name
  icon?: string
  options: string[]
  correct: number // index into options — shuffled client-side per viewer, never hidden server-side (v1)
}

export interface McqStage {
  type: 'mcq'
  key: string
  label: string
  icon: string
  /** 'self-paced': every student free-explores all questions independently (live dashboard shows a grid).
   *  'host-paced': the host controls the current question; everyone answers the same one, host can lock/reveal/advance. */
  pacing: 'self-paced' | 'host-paced'
  intro?: { title: string; blurb: string }
  questions: McqQuestion[]
  pointsPerCorrect?: number // default 10
}

// ---------------------------------------------------------------
// Stage: Worksheet (structured research/build artefacts + grading)
// ---------------------------------------------------------------
export type WorksheetFieldType = 'text' | 'textarea' | 'select' | 'table' | 'personaChat' | 'personalityPrompt' | 'opportunityCards' | 'makeCards' | 'productCards'

export interface WorksheetTableColumn {
  key: string
  label: string
  placeholder?: string
}

export interface WorksheetField {
  key: string
  label: string
  type: WorksheetFieldType
  placeholder?: string
  options?: string[] // for 'select'
  columns?: WorksheetTableColumn[] // for 'table'
  minRows?: number // for 'table' — rows to start with
  hint?: string
  /** A variety of model answers (2-3 recommended, different phrasings of a
   *  strong response) — NEVER shown to the student. Used only server/
   *  client-side to fuzzy-match their typed answer and suggest an auto
   *  score a teacher can accept or override (see lib/design-live/
   *  fuzzyMatch.ts and WorksheetReview.tsx). */
  exemplars?: string[]
  /** Words or short phrases (case-insensitive) that, the first time they
   *  appear in this field's typed text, burst confetti for the student —
   *  a light-touch nudge that they've hit something worth including. Also
   *  feeds into the fuzzy-match auto score. */
  celebrateKeywords?: string[]
  /** For 'personaChat': which pack of characters to offer. Default 'accessibility'. */
  personaPack?: 'accessibility' | 'community'
  /** Max points this field contributes to its section's fuzzy-match auto
   *  score, for text/textarea fields with exemplars/celebrateKeywords set.
   *  Default 10. */
  points?: number
}

/** Short, student-facing brief that leads a stage: why, what, what you hand in, how it is assessed. */
export interface ActivityBrief {
  context: string
  task: string
  produce: string[]
  /** Criterion strands this activity evidences, e.g. ['A.i', 'A.ii']. */
  assessedOn: string[]
  time?: string
}

/** One step of the activity's journey, tagged with the criterion strand it evidences. */
export interface FlowStep {
  strand: string // e.g. 'A.i'
  title: string
  asks: string // one line: what the strand asks of the student
  sections?: string[] // section keys in THIS stage that make up the step (clickable)
  where?: string // where it happens when it is in another stage, e.g. 'Week 2 · Research Plan'
}

/** Brief + journey shown at the top of a stage (students see it before they start). */
export interface StageOverview {
  brief?: ActivityBrief
  flow?: FlowStep[]
}

export interface WorksheetSection {
  key: string
  label: string
  icon?: string
  blurb?: string
  fields: WorksheetField[]
  /** MYP criterion strand this section evidences, e.g. 'A.ii' — shown as a chip so work is organised criterion by criterion. */
  criterion?: string
  /** What that strand asks, in the student's words, e.g. 'Justify the need, for a specified client'. */
  strandLabel?: string
  /** A short brief shown at the top of the open section: what this step is and how to do it well. */
  brief?: { title: string; points: string[] }
  /** Minimum filled-field ratio (0–1) counted as "meaningfully complete" for the progress dashboard. */
  completenessTarget?: number
}

export interface WorksheetStage {
  type: 'worksheet'
  key: string
  label: string
  icon: string
  intro?: { title: string; blurb: string }
  /** Activity brief + criteria-wise flow shown before the sections. */
  overview?: StageOverview
  sections: WorksheetSection[]
}

// ---------------------------------------------------------------
// Stage: Open Ideas (quick-fire free text, host-paced, optional teams)
// ---------------------------------------------------------------
export interface OpenIdeasPrompt {
  text: string
  icon?: string
  exemplars?: string[] // a variety of model pitches — never shown to the student, see WorksheetField.exemplars
  celebrateKeywords?: string[] // see WorksheetField.celebrateKeywords
}

export interface ConstraintCard {
  icon: string
  label: string
  text: string
}

export interface BonusCategory {
  key: string
  label: string
  icon: string
  points: number
}

export interface OpenIdeasStage {
  type: 'openIdeas'
  key: string
  label: string
  icon: string
  prompts: OpenIdeasPrompt[]
  constraintCards?: ConstraintCard[] // host can draw one at random per prompt
  bonusCategories?: BonusCategory[] // host awards ad-hoc bonus points (per team if teams present, else per player)
  pointsPerSubmission?: number // default 10
}

// ---------------------------------------------------------------
// Stage: Grading (teacher reviews worksheet/quiz output against criteria)
// ---------------------------------------------------------------
export interface CriterionStrand {
  key: string // e.g. 'A.i'
  label: string
}

export interface GradingStage {
  type: 'grading'
  key: string
  label: string
  icon: string
  intro?: { title: string; blurb: string }
  strands: CriterionStrand[] // each scored 1–8, matching MYP practice
}

// ---------------------------------------------------------------
// Stage: Board game (Sustainability Check) — a two-phase, turn-based game
// with a 3D board. Rules live in lib/design-live/sustainability.ts; state is
// host-written into live_sessions.state.game.
// ---------------------------------------------------------------
export interface BoardGameStage {
  type: 'boardGame'
  key: string
  label: string
  icon: string
  intro?: { title: string; blurb: string }
  /** Shown to students above the game, so the brief comes BEFORE play. */
  overview?: StageOverview
}

export type LiveStage = McqStage | WorksheetStage | OpenIdeasStage | GradingStage | BoardGameStage

/**
 * Model answers that depend on a choice the student made earlier (for example which community they are
 * designing for). `from` points at the select that holds the choice; `byField` maps
 * "<stageKey>.<sectionKey>.<fieldKey>" -> choice -> exemplars. A field with no entry for the student's
 * choice falls back to the exemplars written on the field itself.
 */
export interface ExemplarsByChoice {
  from: { stage: string; section: string; field: string }
  noun: string // shown to the teacher and student, e.g. 'community'
  byField: Record<string, Record<string, string[]>>
}

export interface LiveActivityDefinition {
  id: string
  year: MypYear
  title: string
  subtitle: string
  icon: string
  theme: LiveTheme
  teams?: LiveTeam[] // present => team-based (icebreaker style); absent => individual
  stages: LiveStage[]
  debriefQuestions?: string[]
  exemplarsByChoice?: ExemplarsByChoice
}
