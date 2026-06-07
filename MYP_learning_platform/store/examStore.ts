'use client'
import { create } from 'zustand'
import type { Question, ExamPhase, GraphPoint } from '@/lib/types'

// ---------------------------------------------------------------------------
// Convenience re-export for components that used the old CandidateInfo type
// ---------------------------------------------------------------------------
export interface CandidateInfo {
  name: string
  school: string
}

// ---------------------------------------------------------------------------
// Store shape
// ---------------------------------------------------------------------------

interface ExamStore {
  // Paper metadata
  paperId: string
  questions: Question[]
  /** O(1) question-id → array-index map; computed once in initExam */
  qIndexMap: Record<number, number>
  candidateName: string
  candidateSchool: string

  // Exam lifecycle phase
  phase: ExamPhase

  // Navigation
  currentIdx: number

  // Timer
  timerSeconds: number
  timerState: 'normal' | 'warning' | 'critical' | 'expired'

  // Anti-cheat focus tracking
  strikes: number
  showStrikeOverlay: boolean

  // Graph state (interactive plotting)
  graphPoints: Record<number, GraphPoint[]>
  graphMode: Record<string, 'point' | 'line'>

  // Gamification
  xp: number
  streak: number
  hintsUsed: number
  starsPerQ: Record<number, 0 | 1 | 2 | 3>
  badgesEarned: string[]

  // Floating tool panel
  activeTool: 'calculator' | 'formulae' | 'booklet' | 'converter' | null

  // Edit mode (for content editors / teachers; future: auth-gated)
  editMode: boolean
  /** Per-image URL overrides: maps original src → replacement src (data URL or new path) */
  imageOverrides: Record<string, string>
  /** Images marked as deleted; hidden in published mode, shown as placeholder in edit mode */
  deletedImages: Record<string, true>
  /** Text overrides: maps key (e.g. "q1:stem", "q1:task:a:text") → replacement string */
  textOverrides: Record<string, string>

  // Legacy compat — kept so existing components don't break
  candidate: CandidateInfo
  attemptId: string | null

  // -------------------------------------------------------------------------
  // Actions
  // -------------------------------------------------------------------------

  /** Load questions and reset timer for a paper. */
  initExam: (questions: Question[], paperId: string) => void

  /** Set candidate name and school (collected on the lock screen). */
  setCandidate: (nameOrObj: string | { name?: string; school?: string }, school?: string) => void

  /** Transition to a new exam phase. */
  setPhase: (phase: ExamPhase) => void

  /** Navigate to a specific question index. */
  setCurrentIdx: (idx: number) => void

  /** Navigate to the next question (no-op at end). */
  nextQuestion: () => void

  /** Navigate to the previous question (no-op at start). */
  prevQuestion: () => void

  /** Record the chosen MCQ option for a question (by array index). */
  setMCQAnswer: (qIdx: number, optIdx: number) => void

  /** Legacy: set answer by question id. */
  setAnswer: (qId: number, ans: number | string | null) => void

  /** Update the answer text for a specific task within an extended question (by array index). */
  setTaskAnswer: (qIdx: number, taskIdx: number, val: string) => void

  /** Update a single user-editable cell in a dataTable question. */
  setTableCell: (qIdx: number, rowIdx: number, colIdx: number, val: string) => void

  /** Toggle the flagged state of a question (for review purposes). */
  toggleFlag: (qIdx: number) => void

  /** Decrement the timer by 1 second; handles phase transitions automatically. */
  tick: () => void

  /** Record a focus-loss strike; auto-submit after 3 strikes. */
  addStrike: () => void

  /** Dismiss the strike warning overlay. */
  dismissStrike: () => void

  /** Toggle a tool panel; passing the active tool closes it. */
  setActiveTool: (tool: ExamStore['activeTool']) => void

  /** Toggle between edit and published mode. */
  setEditMode: (on: boolean) => void

  /** Store an image URL override (replacement src for an original src). Pass empty string to clear. */
  setImageOverride: (originalSrc: string, replacementSrc: string) => void

  /** Mark an image as deleted (hidden in published mode). Pass false to restore. */
  setDeletedImage: (src: string, deleted: boolean) => void

  /** Store a text override for a key like "q1:stem" or "q2:task:a:text". Pass empty string to clear. */
  setTextOverride: (key: string, text: string) => void

  /** Append a graph data point to a question's graph canvas. */
  addGraphPoint: (qId: number, point: GraphPoint) => void

  /** Remove the most recently added graph point (undo). */
  popGraphPoint: (qId: number) => void

  /** Clear all graph points for a question. */
  clearGraphPoints: (qId: number) => void

  /** Legacy: replace all graph points for a question at once. */
  setGraphPoints: (qId: number, points: GraphPoint[]) => void

  /** Set the drawing mode for a graph canvas ('point' or 'line'). */
  setGraphMode: (key: string, mode: 'point' | 'line') => void

  /** Increment the global hint counter. */
  incrementHints: () => void

  /** Store the star rating for a question. */
  setStars: (qId: number, stars: 0 | 1 | 2 | 3) => void

  /** Add XP to the running total. */
  addXP: (amount: number) => void

  /** Merge newly earned badges into the earned set (deduplicates). */
  addBadges: (badges: string[]) => void

  /** Legacy compat actions. */
  setAttemptId: (id: string) => void
  startGrading: () => void

  /** Reset all state back to the initial values (logout / new attempt). */
  reset: () => void
}

// ---------------------------------------------------------------------------
// Initial state snapshot (used by reset())
// ---------------------------------------------------------------------------

const initialState = {
  paperId: '',
  questions: [] as Question[],
  qIndexMap: {} as Record<number, number>,
  candidateName: '',
  candidateSchool: '',
  phase: 'lock' as ExamPhase,
  currentIdx: 0,
  timerSeconds: 90 * 60,
  timerState: 'normal' as const,
  strikes: 0,
  showStrikeOverlay: false,
  graphPoints: {} as Record<number, GraphPoint[]>,
  graphMode: {} as Record<string, 'point' | 'line'>,
  xp: 0,
  streak: 0,
  hintsUsed: 0,
  starsPerQ: {} as Record<number, 0 | 1 | 2 | 3>,
  badgesEarned: [] as string[],
  activeTool: null as ExamStore['activeTool'],
  editMode: false,
  imageOverrides: {} as Record<string, string>,
  deletedImages: {} as Record<string, true>,
  textOverrides: {} as Record<string, string>,
  // Legacy compat
  candidate: { name: '', school: '' } as CandidateInfo,
  attemptId: null as string | null,
}

// ---------------------------------------------------------------------------
// Store implementation
// ---------------------------------------------------------------------------

export const useExamStore = create<ExamStore>((set, get) => ({
  ...initialState,

  // ---- Paper initialisation ------------------------------------------------

  initExam: (questions, paperId) => {
    const mapped = questions.map(q => ({ ...q, ans: null, flagged: false }))
    return set({
      questions: mapped,
      qIndexMap: Object.fromEntries(mapped.map((q, i) => [q.id, i])),
      paperId,
      currentIdx: 0,
      phase: 'lock',
      timerSeconds: 90 * 60,
      timerState: 'normal',
      strikes: 0,
      showStrikeOverlay: false,
      activeTool: null,
      graphPoints: {},
      candidate: { name: '', school: '' },
      attemptId: null,
    })
  },

  // ---- Candidate info ------------------------------------------------------

  setCandidate: (nameOrObj, school) => {
    if (typeof nameOrObj === 'object') {
      const cur = get().candidate
      const next = { name: nameOrObj.name ?? cur.name, school: nameOrObj.school ?? cur.school }
      set({ candidateName: next.name, candidateSchool: next.school, candidate: next })
    } else {
      const s = school ?? ''
      set({ candidateName: nameOrObj, candidateSchool: s, candidate: { name: nameOrObj, school: s } })
    }
  },

  // ---- Phase ---------------------------------------------------------------

  setPhase: (phase) => set({ phase }),

  // ---- Navigation ----------------------------------------------------------

  setCurrentIdx: (idx) => {
    const { questions } = get()
    if (idx >= 0 && idx < questions.length) {
      set({ currentIdx: idx })
    }
  },

  nextQuestion: () => {
    const { currentIdx, questions } = get()
    if (currentIdx < questions.length - 1) {
      set({ currentIdx: currentIdx + 1 })
    }
  },

  prevQuestion: () => {
    const { currentIdx } = get()
    if (currentIdx > 0) {
      set({ currentIdx: currentIdx - 1 })
    }
  },

  // ---- Answer recording ----------------------------------------------------

  setMCQAnswer: (qIdx, optIdx) =>
    set(state => {
      const questions = [...state.questions]
      questions[qIdx] = { ...questions[qIdx], ans: optIdx }
      return { questions }
    }),

  /** Legacy: set answer by question id. */
  setAnswer: (qId, ans) =>
    set(state => ({
      questions: state.questions.map(q => (q.id === qId ? { ...q, ans } : q)),
    })),

  setTaskAnswer: (qIdx, taskIdx, val) =>
    set(state => {
      const questions = [...state.questions]
      const q = { ...questions[qIdx] }
      if (q.tasks) {
        const tasks = [...q.tasks]
        tasks[taskIdx] = { ...tasks[taskIdx], ans: val }
        q.tasks = tasks
      }
      q.ans = 'partial'
      questions[qIdx] = q
      return { questions }
    }),

  setTableCell: (qIdx, rowIdx, colIdx, val) =>
    set(state => {
      const questions = [...state.questions]
      const q = { ...questions[qIdx] }
      const tableData_user = { ...(q.tableData_user ?? {}) }
      tableData_user[rowIdx] = { ...(tableData_user[rowIdx] ?? {}), [colIdx]: val }
      q.tableData_user = tableData_user
      q.ans = 'partial'
      questions[qIdx] = q
      return { questions }
    }),

  toggleFlag: (qIdx) =>
    set(state => {
      const questions = [...state.questions]
      questions[qIdx] = { ...questions[qIdx], flagged: !questions[qIdx].flagged }
      return { questions }
    }),

  // ---- Timer ---------------------------------------------------------------

  tick: () =>
    set(state => {
      if (state.phase !== 'active') return {}
      const t = state.timerSeconds - 1

      if (t <= 0) {
        return { timerSeconds: 0, timerState: 'expired' as const, phase: 'grading' as ExamPhase }
      }

      let timerState: ExamStore['timerState'] = 'normal'
      if (t <= 300) timerState = 'critical'
      else if (t <= 600) timerState = 'warning'

      return { timerSeconds: t, timerState }
    }),

  // ---- Anti-cheat ----------------------------------------------------------

  addStrike: () =>
    set(state => {
      if (state.phase !== 'active') return {}
      const strikes = state.strikes + 1
      if (strikes >= 3) {
        return { strikes, showStrikeOverlay: false, phase: 'grading' as ExamPhase }
      }
      return { strikes, showStrikeOverlay: true }
    }),

  dismissStrike: () =>
    set(state => {
      if (state.strikes >= 3) {
        return { showStrikeOverlay: false, phase: 'grading' as ExamPhase }
      }
      return { showStrikeOverlay: false }
    }),

  // ---- Tool panel ----------------------------------------------------------

  setActiveTool: (tool) =>
    set(state => ({
      activeTool: state.activeTool === tool ? null : tool,
    })),

  setEditMode: (on) => set({ editMode: on }),

  setImageOverride: (originalSrc, replacementSrc) =>
    set(state => {
      const next = { ...state.imageOverrides }
      if (replacementSrc === '') { delete next[originalSrc] } else { next[originalSrc] = replacementSrc }
      return { imageOverrides: next }
    }),

  setDeletedImage: (src, deleted) =>
    set(state => {
      const next = { ...state.deletedImages } as Record<string, true>
      if (!deleted) { delete next[src] } else { next[src] = true }
      return { deletedImages: next }
    }),

  setTextOverride: (key, text) =>
    set(state => {
      const next = { ...state.textOverrides }
      if (text === '') { delete next[key] } else { next[key] = text }
      return { textOverrides: next }
    }),

  // ---- Graph canvas --------------------------------------------------------

  addGraphPoint: (qId, point) =>
    set(state => ({
      graphPoints: {
        ...state.graphPoints,
        [qId]: [...(state.graphPoints[qId] ?? []), point],
      },
    })),

  popGraphPoint: (qId) =>
    set(state => {
      const pts = [...(state.graphPoints[qId] ?? [])]
      pts.pop()
      return { graphPoints: { ...state.graphPoints, [qId]: pts } }
    }),

  clearGraphPoints: (qId) =>
    set(state => ({
      graphPoints: { ...state.graphPoints, [qId]: [] },
    })),

  setGraphPoints: (qId, points) =>
    set(state => ({
      graphPoints: { ...state.graphPoints, [qId]: points },
    })),

  setGraphMode: (key, mode) =>
    set(state => ({
      graphMode: { ...state.graphMode, [key]: mode },
    })),

  // ---- Gamification --------------------------------------------------------

  incrementHints: () => set(state => ({ hintsUsed: state.hintsUsed + 1 })),

  setStars: (qId, stars) =>
    set(state => ({
      starsPerQ: { ...state.starsPerQ, [qId]: stars },
    })),

  addXP: (amount) => set(state => ({ xp: state.xp + amount })),

  addBadges: (badges) =>
    set(state => ({
      badgesEarned: Array.from(new Set([...state.badgesEarned, ...badges])),
    })),

  // ---- Legacy compat -------------------------------------------------------

  setAttemptId: (id) => set({ attemptId: id }),

  startGrading: () => set({ phase: 'grading' }),

  // ---- Reset ---------------------------------------------------------------

  reset: () => set(initialState),
}))
