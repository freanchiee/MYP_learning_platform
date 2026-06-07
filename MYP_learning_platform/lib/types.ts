export type Criterion = 'A' | 'B' | 'C' | 'D'

// ── MYP tagging ──────────────────────────────────────────────────────────────
// Re-exported from data/curriculum/physics-myp.ts for convenience
export type { MYPUnit, QuestionLevel } from '@/data/curriculum/physics-myp'

/**
 * Tags attached to every question and task in the pipeline.
 *
 * unit     – MYP curriculum unit (e.g. 'atomic-physics')
 * topics   – specific sub-topics within the unit (1-3 per question)
 * level    – overall question difficulty aligned to MYP achievement bands
 *            foundation=1-2 · developing=3-4 · proficient=5-6 · advanced=7-8
 *
 * Note: criterion (A/B/C/D) is already stored on Question.crit — no duplication.
 */
export interface QuestionTags {
  unit:    import('@/data/curriculum/physics-myp').MYPUnit
  topics:  string[]
  level:   import('@/data/curriculum/physics-myp').QuestionLevel
}
export type QuestionType = 'mcq' | 'extended' | 'simulation' | 'dataTable'
export type SimType = 'spring' | 'spring_data' | 'pendulum_geogebra' | 'wave' | 'decay' | 'bounce'
  | 'osmosis' | 'mitosis' | 'punnett' | 'food_web' | 'enzyme_rate'
export type ExamPhase = 'lock' | 'active' | 'grading' | 'results'
export type TimerState = 'normal' | 'warning' | 'critical' | 'expired'

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  ans?: string
  figImages?: string[]   // optional per-task diagram images, shown just above the answer box
  widget?: 'drag_drop_planets' | 'variable_classify' | 'sankey_q3' | 'bounce_graphs_ab' | 'q4e_table' | 'q5c_table' | 'cannonball_paths' | 'energy_chain' | 'radio_select' | 'wave_label_drag_drop' | 'inline_dropdown_select' | 'refraction_label_drag_drop' | 'match_drag_drop' | 'checkbox_select' | 'fill_blank'
  widgetOptions?: string[]   // dropdown choices for radio_select / inline_dropdown_select
  widgetItems?: string[]     // row labels for inline_dropdown_select (e.g. ['Electron','Proton','Neutron'])
  passage?: string           // reading passage / article shown above the task question
  level?: import('@/data/curriculum/physics-myp').QuestionLevel  // per-task difficulty (overrides question-level if set)
}

export interface Question {
  id: number
  crit: Criterion
  type: QuestionType
  topic: string
  marks: number
  stem?: string
  opts?: string[]
  correct?: number
  tableData?: { hd: string[]; rows: string[][] }
  figCaption?: string
  figImages?: string[]
  nativeContent?: 'solar_system' | 'carbon_decay' | 'sankey_q3' | 'bounce_graphs_ab' | 'wave_animations' | 'radiation_q7'
  tasks?: Task[]
  simType?: SimType
  simCaption?: string
  tableHeaders?: string[]
  tableRows?: (string | number)[][]
  editableCols?: number[]
  hasGraph?: boolean
  graphLabel?: { x: string; y: string; xMax: number; yMax: number; xStep: number; yStep: number }
  ans?: number | string | null
  flagged?: boolean
  tableData_user?: Record<number, Record<number, string>>
  /** Curriculum tags — required for all pipeline-generated questions */
  tags?: QuestionTags
}

export interface MarkSchemeEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

export interface MCQMarkScheme {
  type: 'mcq'
  correct: number
}

export interface TaskResult {
  label: string
  marksAwarded: number
  maxMarks: number
  hitConcepts: string[]
  missConcepts: string[]
  rawScore: number
  studentAnswer: string
  exemplar: string
  feedback: string
}

export interface QuestionGradeResult {
  totalAwarded: number
  totalAvailable: number
  tasks: TaskResult[]
}

export interface GraphPoint {
  x: number
  y: number
  x2?: number
  y2?: number
  type: 'point' | 'line'
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  subject: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export interface Profile {
  id: string
  name: string
  school: string
  avatar_url: string | null
  xp: number
  level: number
  streak_days: number
  last_active: string | null
  created_at: string
}

export interface UserBadge {
  id: string
  user_id: string
  badge_id: string
  paper_id: string | null
  earned_at: string
}

export interface Attempt {
  id: string
  user_id: string
  paper_id: string
  answers: Record<string, unknown>
  scores: Record<string, unknown>
  total_score: number | null
  max_score: number | null
  myp_grade: number | null
  criterion_scores: Record<string, { score: number; max: number }> | null
  time_taken: number | null
  xp_earned: number
  badges_earned: string[]
  focus_strikes: number
  status: 'in_progress' | 'completed' | 'abandoned'
  started_at: string
  completed_at: string | null
}
