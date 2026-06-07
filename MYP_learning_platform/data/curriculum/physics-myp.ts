/**
 * MYP Physics Curriculum Taxonomy — Years 4 & 5 (Grades 9–10, ages 14–16)
 *
 * Source: IBO MYP Sciences Guide, Oxford MYP Physics Years 4&5 (Heathcote 2018),
 *         Hodder MYP Physics Years 4&5 (Morris 2019)
 *
 * Used by:
 *  • The PDF-to-questions pipeline to auto-tag every generated question
 *  • The practice-paper generator to filter questions by unit/topic/level
 *  • The results dashboard to show per-unit performance
 *
 * PIPELINE RULE: Every question.tags must have a valid unit + topics[] from this file.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Units
// ─────────────────────────────────────────────────────────────────────────────

export type MYPUnit =
  | 'measurement-motion'
  | 'forces-interactions'
  | 'pressure'
  | 'work-energy'
  | 'thermal-physics'
  | 'light-optics'
  | 'sound-waves'
  | 'em-spectrum'
  | 'electricity-circuits'
  | 'magnetism-electromagnetism'
  | 'atomic-physics'
  | 'astrophysics'

export interface UnitMeta {
  id: MYPUnit
  name: string
  relatedConcept: string
  topics: string[]
}

export const PHYSICS_UNITS: UnitMeta[] = [
  {
    id: 'measurement-motion',
    name: 'Measurement & Motion',
    relatedConcept: 'Movement',
    topics: [
      'SI units and conversions',
      'speed and velocity',
      'acceleration',
      'distance-time graphs',
      'velocity-time graphs',
      'equations of motion (SUVAT)',
      'free fall',
      'projectile motion',
      'relative motion',
      'displacement vs distance',
    ],
  },
  {
    id: 'forces-interactions',
    name: 'Forces & Interactions',
    relatedConcept: 'Interaction',
    topics: [
      "Newton's first law",
      "Newton's second law",
      "Newton's third law",
      'friction and air resistance',
      'weight and mass',
      'normal force',
      'resultant force',
      'momentum and impulse',
      'elastic and inelastic collisions',
      'Hooke\'s law',
      'circular motion',
      'terminal velocity',
    ],
  },
  {
    id: 'pressure',
    name: 'Pressure',
    relatedConcept: 'Systems',
    topics: [
      'pressure in solids',
      'pressure in liquids',
      'hydrostatic pressure',
      'atmospheric pressure',
      "Pascal's principle",
      'hydraulic systems',
      'gas pressure and volume',
      'pressure formula',
    ],
  },
  {
    id: 'work-energy',
    name: 'Work & Energy',
    relatedConcept: 'Transformation',
    topics: [
      'work done',
      'kinetic energy',
      'gravitational potential energy',
      'elastic potential energy',
      'conservation of energy',
      'energy efficiency',
      'power',
      'energy chains and Sankey diagrams',
      'energy sources (renewable vs non-renewable)',
      'energy transfer mechanisms',
    ],
  },
  {
    id: 'thermal-physics',
    name: 'Thermal Physics & Heat',
    relatedConcept: 'Transformation',
    topics: [
      'states of matter',
      'phase changes',
      'kinetic theory',
      'temperature scales',
      'specific heat capacity',
      'thermal expansion',
      'conduction',
      'convection',
      'radiation (thermal)',
      'thermal equilibrium',
      'evaporation and condensation',
      'gas laws',
    ],
  },
  {
    id: 'light-optics',
    name: 'Light & Optics',
    relatedConcept: 'Evidence',
    topics: [
      'reflection and laws of reflection',
      'refraction',
      'refractive index',
      'Snell\'s law',
      'total internal reflection',
      'converging and diverging lenses',
      'ray diagrams',
      'visible light spectrum',
      'colour and filters',
      'applications of optics',
    ],
  },
  {
    id: 'sound-waves',
    name: 'Sound & Waves',
    relatedConcept: 'Patterns',
    topics: [
      'transverse and longitudinal waves',
      'wave properties (wavelength, frequency, amplitude, period)',
      'wave speed equation',
      'sound as a mechanical wave',
      'speed of sound',
      'infrasound and ultrasound',
      'echoes',
      'Doppler effect',
      'diffraction of waves',
      'reflection and refraction of waves',
      'interference and superposition',
    ],
  },
  {
    id: 'em-spectrum',
    name: 'Electromagnetic Spectrum',
    relatedConcept: 'Patterns',
    topics: [
      'electromagnetic spectrum overview',
      'radio waves',
      'microwaves',
      'infrared radiation',
      'visible light',
      'ultraviolet radiation',
      'X-rays',
      'gamma rays',
      'uses and hazards of EM radiation',
      'wave-particle duality (introductory)',
    ],
  },
  {
    id: 'electricity-circuits',
    name: 'Electricity & Circuits',
    relatedConcept: 'Interaction',
    topics: [
      'electric charge',
      'static electricity',
      'induction',
      'electric current',
      'potential difference (voltage)',
      'resistance',
      "Ohm's law",
      'series circuits',
      'parallel circuits',
      'electrical power',
      'circuit symbols',
      'measuring current and voltage',
      'internal resistance',
    ],
  },
  {
    id: 'magnetism-electromagnetism',
    name: 'Magnetism & Electromagnetism',
    relatedConcept: 'Interaction',
    topics: [
      'magnetic poles and fields',
      'magnetic field lines',
      'electromagnetic induction',
      'solenoids and electromagnets',
      'motors',
      'generators',
      'transformers',
      'Lenz\'s law',
      'Fleming\'s left-hand rule',
      'AC vs DC',
    ],
  },
  {
    id: 'atomic-physics',
    name: 'Atomic Physics & Radioactivity',
    relatedConcept: 'Models',
    topics: [
      'atomic structure',
      'protons neutrons electrons',
      'atomic number and mass number',
      'isotopes',
      'radioactive decay',
      'alpha radiation',
      'beta radiation',
      'gamma radiation',
      'penetrating power and ionisation',
      'half-life',
      'half-life calculations',
      'nuclear equations',
      'uses of radioactive materials',
      'radiation safety',
      'background radiation',
      'nuclear energy',
    ],
  },
  {
    id: 'astrophysics',
    name: 'Astrophysics & Space',
    relatedConcept: 'Evidence',
    topics: [
      'solar system structure',
      'planetary motion',
      'gravitational fields',
      "Newton's law of gravitation",
      'satellites and orbital mechanics',
      'stars and stellar evolution',
      'Big Bang theory',
      'expansion of the universe',
      'telescopes',
    ],
  },
]

// Lookup helper
export const UNIT_MAP: Record<MYPUnit, UnitMeta> = Object.fromEntries(
  PHYSICS_UNITS.map(u => [u.id, u]),
) as Record<MYPUnit, UnitMeta>

// ─────────────────────────────────────────────────────────────────────────────
// Difficulty / Achievement levels
// ─────────────────────────────────────────────────────────────────────────────

export type QuestionLevel = 'foundation' | 'developing' | 'proficient' | 'advanced'

export interface LevelMeta {
  id: QuestionLevel
  mypBand: string         // e.g. "1–2"
  mypLabel: string        // e.g. "Limited"
  commandTerms: string[]
  description: string
}

export const LEVELS: LevelMeta[] = [
  {
    id: 'foundation',
    mypBand: '1–2',
    mypLabel: 'Limited',
    commandTerms: ['State', 'Identify', 'Define', 'List', 'Name', 'Annotate'],
    description: 'Direct recall; basic identification; no calculation or reasoning required.',
  },
  {
    id: 'developing',
    mypBand: '3–4',
    mypLabel: 'Adequate',
    commandTerms: ['Outline', 'Describe', 'Calculate', 'Predict', 'Label', 'Select'],
    description: 'Application in familiar context; standard calculation; basic description.',
  },
  {
    id: 'proficient',
    mypBand: '5–6',
    mypLabel: 'Substantial',
    commandTerms: ['Explain', 'Analyse', 'Compare', 'Suggest', 'Design', 'Show', 'Determine'],
    description: 'Explanation with reasoning; unfamiliar context; multi-step analysis.',
  },
  {
    id: 'advanced',
    mypBand: '7–8',
    mypLabel: 'Excellent',
    commandTerms: ['Evaluate', 'Justify', 'Discuss', 'Derive', 'Assess', 'Deduce'],
    description: 'Critical evaluation; synthesis across concepts; multi-perspective reasoning.',
  },
]

export const LEVEL_MAP: Record<QuestionLevel, LevelMeta> = Object.fromEntries(
  LEVELS.map(l => [l.id, l]),
) as Record<QuestionLevel, LevelMeta>

// Helper: infer level from highest command term in question text
export function inferLevel(questionText: string): QuestionLevel {
  const upper = questionText.toUpperCase()
  if (LEVELS[3].commandTerms.some(t => upper.includes(t.toUpperCase()))) return 'advanced'
  if (LEVELS[2].commandTerms.some(t => upper.includes(t.toUpperCase()))) return 'proficient'
  if (LEVELS[1].commandTerms.some(t => upper.includes(t.toUpperCase()))) return 'developing'
  return 'foundation'
}

// ─────────────────────────────────────────────────────────────────────────────
// Criteria (mirrors lib/types.ts Criterion, with descriptions for UI)
// ─────────────────────────────────────────────────────────────────────────────

export const CRITERIA_META = {
  A: {
    name: 'Knowing and Understanding',
    short: 'Knowledge',
    color: '#0079a8',
    description: 'Recall and application of scientific knowledge and concepts.',
  },
  B: {
    name: 'Inquiring and Designing',
    short: 'Investigation Design',
    color: '#27ae60',
    description: 'Formulating problems, identifying variables, designing experiments.',
  },
  C: {
    name: 'Processing and Evaluating',
    short: 'Data Analysis',
    color: '#e67e22',
    description: 'Organising data, identifying trends, evaluating validity.',
  },
  D: {
    name: 'Reflecting on the Impacts of Science',
    short: 'Science & Society',
    color: '#8e44ad',
    description: 'Societal, ethical and environmental impacts of science.',
  },
} as const
