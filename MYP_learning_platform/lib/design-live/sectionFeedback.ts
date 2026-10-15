// Teacher feedback on one worksheet section of a student's work (live_grades.section_feedback).
// Stored as { "<stageKey>.<sectionKey>": { text, at } }. The student's own `_feedbackSeen` map (in live_players.data)
// remembers the `at` they have already looked at, so a new or edited note shows up as unread.

export interface SectionFeedback { text: string; at: string }
export type SectionFeedbackMap = Record<string, SectionFeedback>

export const feedbackKey = (stageKey: string, sectionKey: string) => `${stageKey}.${sectionKey}`

export const feedbackFor = (map: SectionFeedbackMap | null | undefined, stageKey: string, sectionKey: string): SectionFeedback | undefined => {
  const f = map?.[feedbackKey(stageKey, sectionKey)]
  return f && typeof f.text === 'string' && f.text.trim() ? f : undefined
}

export const isUnseen = (fb: SectionFeedback | undefined, seen: Record<string, string> | null | undefined, key: string) => !!fb && (seen?.[key] ?? '') < fb.at

/** Keys of feedback the student has not looked at yet. */
export function unseenKeys(map: SectionFeedbackMap | null | undefined, seen: Record<string, string> | null | undefined): string[] {
  return Object.entries(map ?? {}).filter(([k, v]) => v?.text?.trim() && isUnseen(v, seen, k)).map(([k]) => k)
}
