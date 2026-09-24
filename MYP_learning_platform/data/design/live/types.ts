// Live Class Creator — the declarative shape every live activity is
// authored against. One generic engine (components/design/live/*)
// renders ANY definition that satisfies this shape: a host screen, a
// join screen, live sync, scoring and (optionally) teacher grading —
// so a new year-wise activity is a new data file, not new UI code.
//
// See .claude/skills/live-class-creator/SKILL.md for the full pattern
// this was extracted from (three one-off HTML builds) and how to
// author a new activity.

export type MypYear = 'MYP2' | 'MYP3' | 'MYP4'

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
export type WorksheetFieldType = 'text' | 'textarea' | 'select' | 'table' | 'personaChat' | 'personalityPrompt'

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
  /** Max points this field contributes to its section's fuzzy-match auto
   *  score, for text/textarea fields with exemplars/celebrateKeywords set.
   *  Default 10. */
  points?: number
}

export interface WorksheetSection {
  key: string
  label: string
  icon?: string
  blurb?: string
  fields: WorksheetField[]
  /** Minimum filled-field ratio (0–1) counted as "meaningfully complete" for the progress dashboard. */
  completenessTarget?: number
}

export interface WorksheetStage {
  type: 'worksheet'
  key: string
  label: string
  icon: string
  intro?: { title: string; blurb: string }
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

export type LiveStage = McqStage | WorksheetStage | OpenIdeasStage | GradingStage

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
}
