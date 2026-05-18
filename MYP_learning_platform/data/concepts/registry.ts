/**
 * Global concepts registry — merges conceptsPublic from every paper.
 * LiveKeywordTracker imports from here so it works across all papers.
 *
 * Keys are NOT globally unique — they're namespaced by paperId:
 *   `{paperId}::q{id}_{label}`  e.g. 'physics-nov-2023::q3_a'
 *
 * For backwards compat the nov-2023 keys are also registered bare
 * (no namespace) as they were in the original CONCEPTS_PUBLIC.
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'
import { CONCEPTS_PUBLIC } from '@/data/papers/physics-nov-2023/conceptsPublic'
import { CONCEPTS_PUBLIC_MAY2025 } from '@/data/papers/physics-may-2025/conceptsPublic'

export type { ConceptEntry }

// Build the merged registry
const _registry: Record<string, Record<string, ConceptEntry>> = {
  'physics-nov-2023': CONCEPTS_PUBLIC,
  'physics-may-2025': CONCEPTS_PUBLIC_MAY2025,
}

/**
 * Look up a concept entry for a given paper and question/task key.
 * @param paperId  e.g. 'physics-may-2025'
 * @param key      e.g. 'q6_g'  (format: q{id}_{label})
 */
export function getConceptEntry(paperId: string, key: string): ConceptEntry | undefined {
  return _registry[paperId]?.[key]
}

export { CONCEPTS_PUBLIC }
