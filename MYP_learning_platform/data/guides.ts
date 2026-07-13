// Free, ORIGINAL MYP subject overviews — a copyright-safe traffic magnet.
// These are our own summaries of each MYP subject's framework (aims, the A–D
// assessment criteria, key/related concepts, global contexts). We do NOT host
// IB's copyrighted subject-guide PDFs; each page links out to the official IB
// source instead. Edit here — the /guides pages are generic over this data.

export interface GuideCriterion {
  key: 'A' | 'B' | 'C' | 'D'
  title: string
  summary: string
}

export interface SubjectGuide {
  slug: string
  subject: string
  group: string // 'MYP Sciences' | 'MYP Individuals & Societies' | 'MYP Design'
  papersHref: string
  tagline: string
  overview: string
  aims: string[]
  criteria: GuideCriterion[]
  keyConcepts: string[]
  relatedConcepts: string[]
  officialUrl: string
  faq: { q: string; a: string }[]
}

// Shared across all MYP subjects.
export const MYP_GLOBAL_CONTEXTS = [
  'Identities and relationships',
  'Orientation in space and time',
  'Personal and cultural expression',
  'Scientific and technical innovation',
  'Globalization and sustainability',
  'Fairness and development',
]

// Assessment criteria are shared within a subject group; each is marked out of 8.
const SCIENCES_CRIT: GuideCriterion[] = [
  { key: 'A', title: 'Knowing and understanding', summary: 'Recall and apply scientific knowledge to solve problems in familiar and unfamiliar situations, and analyse information to make judgements.' },
  { key: 'B', title: 'Inquiring and designing', summary: 'Formulate a testable hypothesis, design a method, and plan a safe, logical scientific investigation.' },
  { key: 'C', title: 'Processing and evaluating', summary: 'Present, analyse and interpret data, draw valid conclusions, and evaluate the method and suggest improvements.' },
  { key: 'D', title: 'Reflecting on the impacts of science', summary: 'Explain how science is applied to a problem and discuss its implications for people, society and the environment.' },
]

const IANDS_CRIT: GuideCriterion[] = [
  { key: 'A', title: 'Knowing and understanding', summary: 'Use terminology in context and show knowledge of content and concepts through description, explanation and examples.' },
  { key: 'B', title: 'Investigating', summary: 'Formulate a clear research question, follow an action plan, collect and record relevant information, and reflect on the process.' },
  { key: 'C', title: 'Communicating', summary: 'Communicate information and ideas appropriately for the audience and purpose, structure work logically, and reference sources.' },
  { key: 'D', title: 'Thinking critically', summary: 'Analyse concepts, issues and arguments, recognise perspectives, and synthesise information into well-supported conclusions.' },
]

const DESIGN_CRIT: GuideCriterion[] = [
  { key: 'A', title: 'Inquiring and analysing', summary: 'Explain and justify the need for a solution, research the problem, and analyse existing products.' },
  { key: 'B', title: 'Developing ideas', summary: 'Write a design specification, generate and present feasible ideas, and produce planning drawings.' },
  { key: 'C', title: 'Creating the solution', summary: 'Plan and make the solution with technical skill, following the plan and justifying any changes.' },
  { key: 'D', title: 'Evaluating', summary: 'Design tests, evaluate the solution against the specification, and explain improvements and impact.' },
]

const SCIENCES_URL = 'https://www.ibo.org/programmes/middle-years-programme/curriculum/sciences/'
const IANDS_URL = 'https://www.ibo.org/programmes/middle-years-programme/curriculum/individuals-and-societies/'
const DESIGN_URL = 'https://www.ibo.org/programmes/middle-years-programme/curriculum/design/'

const SCIENCES_KEY = ['Change', 'Relationships', 'Systems']
const IANDS_KEY = ['Change', 'Global interactions', 'Systems', 'Time, place and space']
const DESIGN_KEY = ['Communication', 'Communities', 'Development', 'Systems']

function sciencesFaq(subject: string): { q: string; a: string }[] {
  return [
    {
      q: `What are the assessment criteria for MYP ${subject}?`,
      a: `MYP ${subject} is assessed against four criteria, each out of 8: A Knowing and understanding, B Inquiring and designing, C Processing and evaluating, and D Reflecting on the impacts of science.`,
    },
    {
      q: `How is MYP ${subject} graded?`,
      a: `Each criterion is marked from 1 to 8 against level descriptors. Teachers combine the four criterion levels and use published grade boundaries to award a final MYP grade from 1 (lowest) to 7 (highest).`,
    },
    {
      q: `Is there a separate MYP ${subject} guide?`,
      a: `${subject} is taught within the single MYP Sciences framework (which also covers the other sciences). The official IB MYP Sciences guide is available from the IB — see the link on this page.`,
    },
  ]
}

function iandsFaq(subject: string): { q: string; a: string }[] {
  return [
    {
      q: `What are the assessment criteria for MYP ${subject}?`,
      a: `MYP ${subject} (Individuals & Societies) is assessed against four criteria, each out of 8: A Knowing and understanding, B Investigating, C Communicating, and D Thinking critically.`,
    },
    {
      q: `How is MYP ${subject} graded?`,
      a: `Each criterion is marked from 1 to 8 against level descriptors. The four criterion levels are combined and mapped through published grade boundaries to a final MYP grade from 1 to 7.`,
    },
    {
      q: `What is the official MYP ${subject} guide?`,
      a: `${subject} sits within the MYP Individuals & Societies subject group. The official IB guide is published by the IB — see the link on this page.`,
    },
  ]
}

export const GUIDES: SubjectGuide[] = [
  {
    slug: 'physics',
    subject: 'Physics',
    group: 'MYP Sciences',
    papersHref: '/physics-papers',
    tagline: 'Aims, assessment criteria (A–D), concepts and how MYP Physics is graded.',
    overview:
      'MYP Physics sits within the MYP Sciences subject group. It develops students’ ability to investigate the physical world — forces, energy, waves, electricity and the models that describe them — through hands-on inquiry, data analysis and reflection on the role of science in society. Assessment is criterion-based rather than a single exam mark.',
    aims: [
      'Understand and apply physics knowledge to explain the natural world and solve problems.',
      'Design and carry out safe, logical scientific investigations.',
      'Process and evaluate data to reach and justify valid conclusions.',
      'Reflect on the impact of physics and technology on people, society and the environment.',
    ],
    criteria: SCIENCES_CRIT,
    keyConcepts: SCIENCES_KEY,
    relatedConcepts: ['Energy', 'Forces', 'Movement', 'Interaction', 'Models', 'Transformation', 'Consequences'],
    officialUrl: SCIENCES_URL,
    faq: sciencesFaq('Physics'),
  },
  {
    slug: 'chemistry',
    subject: 'Chemistry',
    group: 'MYP Sciences',
    papersHref: '/chem-papers',
    tagline: 'Aims, assessment criteria (A–D), concepts and how MYP Chemistry is graded.',
    overview:
      'MYP Chemistry is part of the MYP Sciences subject group. Students explore matter, reactions, bonding and the patterns that govern chemical change through investigation and evidence. As with all MYP sciences, achievement is judged against four equally weighted criteria, not a single terminal exam.',
    aims: [
      'Understand chemical concepts and apply them to familiar and unfamiliar situations.',
      'Plan and conduct safe, valid chemical investigations.',
      'Analyse and evaluate experimental data and draw supported conclusions.',
      'Consider the ethical, social and environmental implications of chemistry.',
    ],
    criteria: SCIENCES_CRIT,
    keyConcepts: SCIENCES_KEY,
    relatedConcepts: ['Balance', 'Conditions', 'Consequences', 'Interaction', 'Patterns', 'Transfer', 'Transformation'],
    officialUrl: SCIENCES_URL,
    faq: sciencesFaq('Chemistry'),
  },
  {
    slug: 'biology',
    subject: 'Biology',
    group: 'MYP Sciences',
    papersHref: '/bio-papers',
    tagline: 'Aims, assessment criteria (A–D), concepts and how MYP Biology is graded.',
    overview:
      'MYP Biology, within the MYP Sciences subject group, develops students’ understanding of living systems — cells, organisms, ecosystems and the relationships between them — through inquiry and the analysis of evidence. It is assessed against the four MYP Sciences criteria, each out of 8.',
    aims: [
      'Understand biological concepts and apply them to explain living systems.',
      'Design and carry out valid, ethical biological investigations.',
      'Process, analyse and evaluate biological data.',
      'Reflect on how biology and biotechnology affect people and the environment.',
    ],
    criteria: SCIENCES_CRIT,
    keyConcepts: SCIENCES_KEY,
    relatedConcepts: ['Balance', 'Consequences', 'Environment', 'Form', 'Function', 'Interaction', 'Models', 'Patterns'],
    officialUrl: SCIENCES_URL,
    faq: sciencesFaq('Biology'),
  },
  {
    slug: 'humanities',
    subject: 'Individuals & Societies (Humanities)',
    group: 'MYP Individuals & Societies',
    papersHref: '/humanities-papers',
    tagline: 'Aims, assessment criteria (A–D), concepts and how MYP I&S is graded.',
    overview:
      'MYP Individuals & Societies — often taught as Integrated Humanities — draws on history, geography, economics and civics to help students understand people, place, power and change. It is assessed against four criteria: Knowing and understanding, Investigating, Communicating, and Thinking critically.',
    aims: [
      'Understand the interactions between individuals, societies and environments over time.',
      'Investigate independently, using a clear research question and action plan.',
      'Communicate ideas and arguments clearly and reference sources.',
      'Think critically — analyse issues, recognise perspectives and build supported arguments.',
    ],
    criteria: IANDS_CRIT,
    keyConcepts: IANDS_KEY,
    relatedConcepts: ['Causality', 'Culture', 'Perspective', 'Processes', 'Significance', 'Governance', 'Identity', 'Global interactions'],
    officialUrl: IANDS_URL,
    faq: iandsFaq('Individuals & Societies'),
  },
  {
    slug: 'geography',
    subject: 'Geography',
    group: 'MYP Individuals & Societies',
    papersHref: '/geography-papers',
    tagline: 'Aims, assessment criteria (A–D), concepts and how MYP Geography is graded.',
    overview:
      'MYP Geography sits within the Individuals & Societies subject group. Students examine places, environments, and the human and physical processes that connect them — from population and urbanisation to resources and sustainability — using maps, data and fieldwork. It is assessed against the four MYP I&S criteria.',
    aims: [
      'Understand geographic processes and the interactions between people and environments.',
      'Investigate geographic questions using data, maps and fieldwork.',
      'Communicate findings clearly using geographic tools and terminology.',
      'Think critically about issues such as development, sustainability and inequality.',
    ],
    criteria: IANDS_CRIT,
    keyConcepts: IANDS_KEY,
    relatedConcepts: ['Causality', 'Processes', 'Scale', 'Sustainability', 'Resources', 'Networks', 'Management', 'Power'],
    officialUrl: IANDS_URL,
    faq: iandsFaq('Geography'),
  },
  {
    slug: 'design',
    subject: 'Design',
    group: 'MYP Design',
    papersHref: '/design',
    tagline: 'Aims, the design cycle (A–D), concepts and how MYP Design is graded.',
    overview:
      'MYP Design challenges students to solve authentic problems by working through the design cycle: inquiring and analysing, developing ideas, creating the solution, and evaluating. Rather than exams, students build a design folder that documents each stage, assessed against four criteria (A–D), each out of 8.',
    aims: [
      'Enjoy the design process and appreciate its power to solve real problems.',
      'Use the design cycle to inquire, develop, create and evaluate solutions.',
      'Apply practical and creative-thinking skills, and use technology effectively.',
      'Consider the impact of design decisions on people, society and the environment.',
    ],
    criteria: DESIGN_CRIT,
    keyConcepts: DESIGN_KEY,
    relatedConcepts: ['Adaptation', 'Ergonomics', 'Sustainability', 'Innovation', 'Collaboration', 'Form', 'Function'],
    officialUrl: DESIGN_URL,
    faq: [
      {
        q: 'What are the MYP Design assessment criteria?',
        a: 'MYP Design uses four criteria, each out of 8: A Inquiring and analysing, B Developing ideas, C Creating the solution, and D Evaluating — together forming the design cycle.',
      },
      {
        q: 'How is MYP Design assessed?',
        a: 'Design is project-based. Instead of exams, students submit a design folder documenting each stage of the design cycle, marked against the four criteria and mapped to a final MYP grade from 1 to 7.',
      },
      {
        q: 'What is the design cycle?',
        a: 'The design cycle is the process at the heart of MYP Design: inquire and analyse the problem, develop ideas, create the solution, then evaluate it — mirrored by criteria A, B, C and D.',
      },
    ],
  },
]

export function getGuide(slug: string): SubjectGuide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

// Exam pattern + syllabus areas power the interactive Subject Explorer on each
// guide page. Kept as a slug-keyed map so the core GUIDES stay lean.
export interface ExamPattern {
  format: string
  details: string[]
}

const SCIENCES_EXAM: ExamPattern = {
  format: 'MYP eAssessment — optional 2-hour on-screen exam (Year 5)',
  details: [
    'Sat on-screen; students respond to tasks built around unseen scientific material, data and real-world scenarios.',
    'Assesses criteria A (Knowing and understanding), C (Processing and evaluating) and D (Reflecting on the impacts of science). Criterion B (Inquiring and designing) is assessed through classroom investigations.',
    'Schools may instead award grades through internal, IB-moderated assessment across the year.',
    'On CritABCD you practise full past papers under timed conditions with instant AI marking against each criterion.',
  ],
}

const IANDS_EXAM: ExamPattern = {
  format: 'MYP eAssessment — optional 2-hour on-screen exam (Year 5)',
  details: [
    'Sat on-screen; tasks are built around unseen sources — text, data, maps and images.',
    'Assesses the Individuals & Societies criteria through source analysis, structured responses and an extended answer.',
    'Schools may instead award grades through internal, IB-moderated assessment.',
    'On CritABCD you practise past I&S papers with interactive source artefacts and AI marking.',
  ],
}

const DESIGN_EXAM: ExamPattern = {
  format: 'No written exam — ePortfolio (design folder)',
  details: [
    'MYP Design is assessed by a portfolio, not a written examination.',
    'Students submit a design folder documenting the full design cycle: inquiring & analysing, developing ideas, creating the solution, and evaluating.',
    'Marked against criteria A–D (each out of 8) and, for eAssessment, moderated by the IB.',
    'On CritABCD you study worked exemplar projects and build your own folder in the Design module.',
  ],
}

export const GUIDE_EXTRAS: Record<string, { examPattern: ExamPattern; syllabusAreas: string[] }> = {
  physics: {
    examPattern: SCIENCES_EXAM,
    syllabusAreas: ['Forces & Motion', 'Thermal Physics', 'Waves & Sound', 'Electromagnetic Waves & Optics', 'Electricity & Magnetism', 'Nuclear & Atomic Physics', 'Space & Astrophysics', 'Pressure & Fluids'],
  },
  chemistry: {
    examPattern: SCIENCES_EXAM,
    syllabusAreas: ['Atomic Structure & Periodic Table', 'Bonding & Structure', 'States of Matter', 'Chemical Reactions', 'Quantitative Chemistry', 'Organic Chemistry', 'Electrochemistry', 'Environmental Chemistry', 'Nuclear Chemistry'],
  },
  biology: {
    examPattern: SCIENCES_EXAM,
    syllabusAreas: ['Cells', 'Organisms & Systems', 'Metabolism & Processes', 'Genetics & Evolution', 'Ecology & Environment', 'Human Health', 'Biotechnology'],
  },
  humanities: {
    examPattern: IANDS_EXAM,
    syllabusAreas: ['Historical inquiry', 'Geographic processes', 'Economic systems', 'Government, power & civics', 'Culture & society', 'Global interactions & development'],
  },
  geography: {
    examPattern: IANDS_EXAM,
    syllabusAreas: ['Population & settlement', 'Urbanisation', 'Resources & energy', 'Climate & environment', 'Development & globalisation', 'Natural hazards & risk', 'Maps, data & fieldwork'],
  },
  design: {
    examPattern: DESIGN_EXAM,
    syllabusAreas: ['The design cycle (A–D)', 'Product design', 'Digital design', 'Design & global contexts', 'Technical skills & materials', 'The design folder / ePortfolio'],
  },
}
