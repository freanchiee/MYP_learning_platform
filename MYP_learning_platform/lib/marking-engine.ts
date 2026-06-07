import 'server-only'
import { getMSForPaper } from '@/data/markschemes/registry'
import type { MSEntry, MCQEntry } from '@/data/papers/physics-nov-2023/markscheme'
import type { Question, TaskResult, QuestionGradeResult } from '@/lib/types'

// ---------------------------------------------------------------------------
// Text normalisation helpers
// ---------------------------------------------------------------------------

/**
 * Normalise a student response for keyword matching:
 * - lowercase
 * - remove punctuation except hyphens in compound words
 * - collapse whitespace
 */
function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s\-\/\.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Lightweight Porter-style stemmer covering the most common English suffixes
 * relevant to physics mark-scheme keywords.
 */
function stemWord(w: string): string {
  if (w.length <= 3) return w
  // Step 1a — plurals / verb endings
  if (w.endsWith('sses')) return w.slice(0, -2)
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y'
  if (w.endsWith('ss')) return w
  if (w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1)
  // Step 1b — -ed / -ing
  if (w.endsWith('eed')) return w.slice(0, -1)
  if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2)
  if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3)
  // Step 1c — -y → -i
  if (w.endsWith('y') && w.length > 4) return w.slice(0, -1) + 'i'
  // Step 2 — common suffixes
  const step2Map: [string, string][] = [
    ['ational', 'ate'],
    ['tional', 'tion'],
    ['enci', 'ence'],
    ['anci', 'ance'],
    ['izer', 'ize'],
    ['ising', 'ise'],
    ['izing', 'ize'],
    ['alism', 'al'],
    ['ation', 'ate'],
    ['ations', 'ate'],
    ['ness', ''],
    ['ment', ''],
    ['ments', ''],
    ['ities', 'ity'],
    ['ity', ''],
    ['ional', 'ion'],
  ]
  for (const [suffix, replacement] of step2Map) {
    if (w.endsWith(suffix) && w.length > suffix.length + 2) {
      return w.slice(0, -suffix.length) + replacement
    }
  }
  return w
}

/**
 * Tokenise and stem a string into a set of meaningful words.
 */
function tokenSet(text: string): Set<string> {
  const STOP = new Set([
    'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'to', 'of', 'in', 'it', 'its', 'or', 'and', 'but', 'not', 'no', 'at',
    'by', 'on', 'as', 'if', 'so', 'do', 'did', 'does', 'has', 'have', 'had',
    'will', 'would', 'could', 'should', 'may', 'might', 'can', 'for', 'with',
    'from', 'than', 'that', 'this', 'each', 'also', 'both', 'more', 'very',
    'how', 'what', 'when', 'where', 'which', 'who', 'why',
  ])
  return new Set(
    normalise(text)
      .split(' ')
      .filter(w => w.length > 1 && !STOP.has(w))
      .map(stemWord)
  )
}

// ---------------------------------------------------------------------------
// Concept scoring
// ---------------------------------------------------------------------------

interface ConceptScoreResult {
  marksAwarded: number
  rawScore: number
  hitConcepts: string[]
  missConcepts: string[]
}

/**
 * Score a student answer against a mark-scheme entry.
 *
 * Strategy:
 * 1. Check keyConcepts — each is a short phrase; student text must contain
 *    all stemmed tokens of the phrase (phrase-level AND match).
 * 2. Check keywords — individual words; student text must contain a stemmed
 *    match for each keyword.
 * 3. rawScore = keyConcept hits + keyword hits.
 * 4. marksAwarded is scaled from rawScore proportionally, capped at ms.marks.
 *
 * The combined denominator is keyConcepts.length + keywords.length / 2 to
 * weight richer conceptual phrases more than simple keyword presence.
 */
function conceptScore(studentText: string, ms: MSEntry): ConceptScoreResult {
  const studentTokens = tokenSet(studentText)
  const studentNorm = normalise(studentText)

  const hitConcepts: string[] = []
  const missConcepts: string[] = []

  // --- keyConcepts: phrase match ---
  for (const concept of ms.keyConcepts) {
    const conceptTokens = tokenSet(concept)
    // Also check raw normalised substring for short numeric concepts
    const rawMatch = normalise(concept).split(' ').every(part => studentNorm.includes(part))
    const tokenMatch = conceptTokens.size > 0 && Array.from(conceptTokens).every(t => studentTokens.has(t))
    if (rawMatch || tokenMatch) {
      hitConcepts.push(concept)
    } else {
      missConcepts.push(concept)
    }
  }

  // --- keywords: individual word match ---
  let kwHits = 0
  for (const kw of ms.keywords) {
    const kwNorm = normalise(kw)
    const kwStemmed = stemWord(kwNorm.replace(/\s+/g, ''))
    const match =
      studentNorm.includes(kwNorm) ||
      studentTokens.has(kwStemmed) ||
      studentTokens.has(stemWord(kwNorm))
    if (match) kwHits++
  }

  // Compute raw score
  const keyConceptWeight = ms.keyConcepts.length
  const keywordWeight = ms.keywords.length * 0.5
  const totalPossible = keyConceptWeight + keywordWeight
  const rawScore =
    totalPossible > 0
      ? (hitConcepts.length * 1.0 + kwHits * 0.5) / totalPossible
      : 0

  // Scale to marks, with a minimum-bar: need rawScore >= 0.25 to get any marks
  let marksAwarded = 0
  if (rawScore >= 0.25) {
    marksAwarded = Math.min(ms.marks, Math.round(rawScore * ms.marks * 1.1))
    // Ensure at least 1 mark if any keyConcept was hit
    if (hitConcepts.length > 0 && marksAwarded < 1) marksAwarded = 1
    marksAwarded = Math.min(marksAwarded, ms.marks)
  }

  return { marksAwarded, rawScore, hitConcepts, missConcepts }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Grade a single question against the mark scheme.
 * Handles MCQ, extended, simulation, and dataTable question types.
 * @param q        The question with student answers populated.
 * @param paperId  The paper this question belongs to (used to select the correct MS).
 */
export function gradeQuestion(q: Question, paperId = 'physics-nov-2023'): QuestionGradeResult {
  const MS = getMSForPaper(paperId)
  const taskResults: TaskResult[] = []

  // ---- MCQ questions -------------------------------------------------------
  if (q.type === 'mcq') {
    const msKey = `q${q.id}`
    const msEntry = MS[msKey]
    const isCorrect =
      msEntry &&
      'type' in msEntry &&
      msEntry.type === 'mcq' &&
      q.ans === msEntry.correct

    taskResults.push({
      label: 'mcq',
      marksAwarded: isCorrect ? 1 : 0,
      maxMarks: 1,
      hitConcepts: [],
      missConcepts: [],
      rawScore: isCorrect ? 1 : 0,
      studentAnswer: q.ans !== null && q.ans !== undefined ? String(q.ans) : '',
      exemplar: msEntry && 'type' in msEntry ? `Correct answer: option ${msEntry.correct}` : '',
      feedback: isCorrect
        ? 'Correct answer selected.'
        : `Incorrect. The correct answer was option ${
            msEntry && 'type' in msEntry ? msEntry.correct : '?'
          }.`,
    })

    const awarded = taskResults[0].marksAwarded
    return {
      totalAwarded: awarded,
      totalAvailable: 1,
      tasks: taskResults,
    }
  }

  // ---- Extended / Simulation / DataTable questions -------------------------
  if (!q.tasks || q.tasks.length === 0) {
    return { totalAwarded: 0, totalAvailable: q.marks, tasks: [] }
  }

  let totalAwarded = 0
  let totalAvailable = 0

  for (const task of q.tasks) {
    // Build MS key: q{id}_{label} — spaces in label become underscores
    const msKey = `q${q.id}_${task.label.replace(/\s+/g, '_')}`
    // Also try raw label (for keys like 'q14_b i')
    const msKeyRaw = `q${q.id}_${task.label}`
    const msEntry = (MS[msKey] ?? MS[msKeyRaw]) as MSEntry | undefined

    const studentAnswer = task.ans ?? ''
    const maxMarks = task.marks

    // MCQ task inside an extended question (radio_select widget)
    if (msEntry && 'type' in msEntry && msEntry.type === 'mcq') {
      const mcqEntry = msEntry as unknown as MCQEntry
      const correctOption = task.widgetOptions?.[mcqEntry.correct] ?? String(mcqEntry.correct)
      const isCorrect = studentAnswer.trim() === correctOption
      taskResults.push({
        label: task.label,
        marksAwarded: isCorrect ? maxMarks : 0,
        maxMarks,
        hitConcepts: [],
        missConcepts: [],
        rawScore: isCorrect ? maxMarks : 0,
        studentAnswer,
        exemplar: `Correct answer: ${correctOption}`,
        feedback: isCorrect
          ? 'Correct answer selected.'
          : `Incorrect. The correct answer was ${correctOption}.`,
      })
      totalAwarded += isCorrect ? maxMarks : 0
      // eslint-disable-next-line no-continue
      totalAvailable += maxMarks
      continue
    }

    if (!msEntry) {
      // No mark-scheme entry found — award 0
      taskResults.push({
        label: task.label,
        marksAwarded: 0,
        maxMarks,
        hitConcepts: [],
        missConcepts: [],
        rawScore: 0,
        studentAnswer,
        exemplar: '',
        feedback: 'No mark scheme entry found for this task.',
      })
      totalAvailable += maxMarks
      continue
    }

    // Empty answer
    if (!studentAnswer.trim()) {
      taskResults.push({
        label: task.label,
        marksAwarded: 0,
        maxMarks,
        hitConcepts: [],
        missConcepts: msEntry.keyConcepts,
        rawScore: 0,
        studentAnswer: '',
        exemplar: msEntry.exemplar,
        feedback: msEntry.feedbackMiss,
      })
      totalAvailable += maxMarks
      continue
    }

    const { marksAwarded, rawScore, hitConcepts, missConcepts } = conceptScore(
      studentAnswer,
      msEntry
    )

    taskResults.push({
      label: task.label,
      marksAwarded,
      maxMarks,
      hitConcepts,
      missConcepts,
      rawScore,
      studentAnswer,
      exemplar: msEntry.exemplar,
      feedback: marksAwarded >= maxMarks ? msEntry.feedbackHit : msEntry.feedbackMiss,
    })

    totalAwarded += marksAwarded
    totalAvailable += maxMarks
  }

  return {
    totalAwarded: Math.min(totalAwarded, totalAvailable),
    totalAvailable,
    tasks: taskResults,
  }
}

// ---------------------------------------------------------------------------
// MYP Grade Boundaries
// ---------------------------------------------------------------------------

export interface MYPGrade {
  grade: number
  label: string
  cssClass: string
}

/**
 * Convert a percentage score to an MYP grade (1–7).
 * Grade boundaries are based on standard IB MYP descriptor thresholds.
 */
export function toMYPGrade(pct: number): MYPGrade {
  // pct is 0–100
  if (pct >= 88) return { grade: 7, label: 'Outstanding', cssClass: 'myp-grade-7' }
  if (pct >= 76) return { grade: 6, label: 'Excellent', cssClass: 'myp-grade-6' }
  if (pct >= 62) return { grade: 5, label: 'Substantial', cssClass: 'myp-grade-5' }
  if (pct >= 48) return { grade: 4, label: 'Adequate', cssClass: 'myp-grade-4' }
  if (pct >= 35) return { grade: 3, label: 'Partial', cssClass: 'myp-grade-3' }
  if (pct >= 20) return { grade: 2, label: 'Rudimentary', cssClass: 'myp-grade-2' }
  return { grade: 1, label: 'Minimal', cssClass: 'myp-grade-1' }
}

// ---------------------------------------------------------------------------
// Criterion Score Aggregation
// ---------------------------------------------------------------------------

/**
 * Given a map of questionId → QuestionGradeResult and the original questions
 * array (to look up criteria), compute the total awarded/max per criterion.
 */
export function calculateCriterionScores(
  questions: Question[],
  grades: Record<number, QuestionGradeResult>
): Record<string, { score: number; max: number }> {
  const result: Record<string, { score: number; max: number }> = {}

  for (const q of questions) {
    const crit = q.crit
    if (!result[crit]) result[crit] = { score: 0, max: 0 }

    const grade = grades[q.id]
    if (grade) {
      result[crit].score += grade.totalAwarded
      result[crit].max += grade.totalAvailable
    } else {
      result[crit].max += q.marks
    }
  }

  return result
}
