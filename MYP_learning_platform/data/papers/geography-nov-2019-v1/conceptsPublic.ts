/**
 * Public (client-safe) concept tags for MYP Geography — November 2019 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2019_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['natural resources', 'sustainability', 'classification'], keywords: ['renewable', 'non-renewable', 'rainwater', 'river flow', 'tidal energy', 'fossil groundwater', 'aquifer'] },
  q2_: { keyConcepts: ['causality', 'natural resources', 'scarcity'], keywords: ['unsustainable extraction', 'sand mining', 'demand', 'dredging', 'river beds', 'erosion'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'evaluation', 'cooperation'], keywords: ['strengths', 'limitations', 'appraisal', 'interview', 'research question', 'primary data', 'secondary data', 'bias'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'natural resources'], keywords: ['clear', 'focused', 'location', 'statement of inquiry', 'extraction'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['extraction', 'erosion', 'communities', 'fish', 'delta ecosystem', 'statement of inquiry'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'data collection'], keywords: ['interviews', 'questionnaire', 'survey', 'library research', 'internet research'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'usefulness'], keywords: ['video interview', 'primary data', 'expert', 'extraction', 'human and natural environments'] },
  q4_e: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['challenge', 'reliable data', 'sand dredging', 'operators', 'governments', 'may not publish'] },
  q5_: { keyConcepts: ['globalization', 'sustainability', 'management & intervention', 'communication'], keywords: ['plastic pollution', 'single-use plastic', 'sustainable', 'Indonesia', 'marine reserve', 'Kenya plastic ban', 'India', 'Ganges', 'petition', 'persuasive'] },
  q6_: { keyConcepts: ['interpretation', 'trends', 'natural disasters'], keywords: ['trend', 'decreased', 'deaths', 'data', '198,420', '84,260'] },
  q7_: { keyConcepts: ['causality', 'risk', 'vulnerability', 'management & intervention'], keywords: ['risk', 'magnitude', 'frequency', 'vulnerability', 'population density', 'management strategies', 'preparedness'] },
  q8_a: { keyConcepts: ['source evaluation', 'value', 'management & intervention'], keywords: ['satellite images', 'maps', 'photographs', 'assess danger', 'evacuate', 'higher ground'] },
  q8_b: { keyConcepts: ['source evaluation', 'limitation', 'management & intervention'], keywords: ['water depth', 'speed of rising water', 'direction flood is spreading', 'at risk', 'local residents'] },
  q9_: { keyConcepts: ['causality', 'management & intervention', 'disparity & equity', 'synthesis'], keywords: ['technology', 'HICs', 'seismometers', 'Japan text alerts', 'shock absorbers', 'robots', 'drones', 'Hurricane Katrina', 'education', 'perspectives', 'conclusion'] },
}
