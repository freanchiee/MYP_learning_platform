import 'server-only'

/**
 * MYP Integrated Humanities — May 2025 mark scheme (rubric-banded).
 *
 * I&S answers are open-ended, so every entry carries the IB band descriptors plus
 * worked exemplar responses at each band (`rubricBands`) — surfaced to the student
 * on submission and in the downloadable exam report. `exemplar` holds the top-band
 * model answer (kept for the shared grading/results consumers); the extra fields
 * (`commandTerm`, `commandTermDefinition`, `rubricBands`) are optional and ignored
 * by consumers that don't use them.
 */

export interface RubricBand {
  marks: string // e.g. '0', '1', '2–3', '7–8'
  descriptor: string // IB band descriptor
  exemplar?: string // example response at this band
}

export interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
  // ── I&S rubric extensions (optional) ──
  commandTerm?: string
  commandTermDefinition?: string
  rubricBands?: RubricBand[]
}

export type MSRecord = Record<string, MSEntry>

export const MS: MSRecord = {
  q1_: {
    marks: 2,
    exemplar:
      'A cause of war is the lack of human rights that results in uprisings. (A 2-mark response is a single sentence naming one cause that is elaborated on; the detail is brief.)',
    keyConcepts: ['causality', 'conflict', 'governance'],
    keywords: ['cause of war', 'human rights', 'dictatorship', 'resources', 'land', 'uprising'],
    feedbackHit: 'Well done — you named a cause of war and elaborated on it.',
    feedbackMiss: 'A 2-mark answer names one cause of war (e.g. lack of human rights) and adds brief detail (… that results in uprisings).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'The student states a cause of war.', exemplar: 'A cause of war is the lack of human rights. / "Disagreement", "misunderstanding", "conflict".' },
      { marks: '2', descriptor: 'The student outlines a cause of war.', exemplar: 'A cause of war is the lack of human rights that results in uprisings. / "Disagreements about resources", "conflict about land".' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'An effect of the Second World War is displaced people who struggled to find a home and job in another country. These people relied on international aid which took some time to organize, negatively impacting people’s health.',
    keyConcepts: ['causality', 'conflict', 'consequences'],
    keywords: ['effect of war', 'displaced people', 'refugees', 'international aid', 'Second World War'],
    feedbackHit: 'Well done — you explained one effect of a specific war with clear reasons.',
    feedbackMiss: 'A response that does not name a specific war scores a maximum of 2; one that only states a war scores 0. Explain one effect with reasons.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached (or only a specific war is stated).' },
      { marks: '1', descriptor: 'States an effect of one war.', exemplar: 'An effect of the Second World War was displaced people.' },
      { marks: '2', descriptor: 'Outlines an effect of one war.', exemplar: 'An effect of the Second World War was displaced people who struggled to find a home and job in another country.' },
      { marks: '3', descriptor: 'Describes an effect of one war (detail, no full reasoning; a war must be named).', exemplar: '…displaced people who struggled to find a home and job. These people stayed in camps where living conditions were hard.' },
      { marks: '4', descriptor: 'Explains an effect of one war (detail + reasons).', exemplar: '…relied on international aid which took some time to organize, negatively impacting people’s health.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Overall the plan is strong: it is split into clear sections (deadline, sources, organizers, success criteria) that cover all major aspects of preparing the exhibition, which will help deliver a well-organized, meaningful experience for the community. However, it relies on only four sources, giving a limited perspective on the war and not enough content; more varied Second World War sources are needed for it to interest the community. On balance, the plan is a good starting point but needs broadening to fully engage a local audience.',
    keyConcepts: ['source evaluation', 'perspectives', 'communication'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sources', 'perspective', 'audience', 'exhibition'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the plan.',
    feedbackMiss: 'Marked across three strands (Strengths /3, Limitations /3, Appraisal /2). Aim to outline/explain strengths AND limitations, then give an overall judgement.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the plan.', exemplar: 'The plan is split into sections like deadlines, sources and organizers.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength of the plan.', exemplar: '…sections that provide information on all major aspects required to prepare the exhibition.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength of the plan.', exemplar: '…this structured approach will support the museum in delivering a well-organized and meaningful experience for the community.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'There are only four sources mentioned.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation.', exemplar: 'There are only four sources mentioned, providing a limited perspective on the war.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation.', exemplar: '…a limited perspective and not enough content; the plan needs more varied sources so it could be of interest to the community.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal.', exemplar: 'Overall, the museum’s plan is good, it has some strengths but could be improved.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal (weighs positives and negatives into one judgement).', exemplar: 'Overall the plan is good as it includes the steps required to prepare for the exhibition, but it could be improved by providing more Second World War sources.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How did the Treaty of Versailles impact Germany after the First World War?',
    keyConcepts: ['investigation', 'research question', 'statement of inquiry'],
    keywords: ['research question', 'peace agreement', 'community', 'change', 'focus'],
    feedbackHit: 'Well done — a clear, focused research question covering three aspects.',
    feedbackMiss: 'The RQ must include three specific aspects (e.g. a specific peace agreement; a location/community; a type of change/impact). Rephrasing the SOI scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached / the RQ rephrases the SOI.', exemplar: 'To what extent did a peace agreement create change for a community?' },
      { marks: '1', descriptor: 'RQ is either clear OR focused (two aspects).', exemplar: 'How did the Treaty of Versailles impact Germany?' },
      { marks: '2', descriptor: 'RQ is both clear AND focused (three aspects).', exemplar: 'How did the Treaty of Versailles impact Germany after the First World War?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My RQ identifies a specific community, Germany, that changed after the First World War when the Treaty of Versailles was adopted. The country had to pay a huge amount of money for the damage caused, which worsened a German economy already suffering from high levels of hyperinflation post-First World War — showing clearly how the peace agreement created change for that community.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['Treaty of Versailles', 'Germany', 'hyperinflation', 'reparations', 'relevance', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified the RQ’s relevance with detailed, reasoned argument.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing with detail (3) → justifying with a comprehensive reason (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States how the RQ is relevant to the SOI.', exemplar: 'My RQ identifies a specific community, Germany, that changed after the First World War.' },
      { marks: '2', descriptor: 'Outlines how the RQ is relevant.', exemplar: '…Germany, that changed after the First World War when the Treaty of Versailles was adopted.' },
      { marks: '3', descriptor: 'Describes how the RQ is relevant (new detail).', exemplar: '…The country had to pay a huge amount of money for the damage caused during the First World War.' },
      { marks: '4', descriptor: 'Justifies relevance (detail + comprehensive reasoning).', exemplar: '…This worsened the German economy that was already suffering from high levels of hyperinflation post-First World War.' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'Britannica Encyclopedia — an article on the Treaty of Versailles and its effects on Germany.',
    keyConcepts: ['sources', 'relevance'],
    keywords: ['source type', 'specific source', 'interview', 'documentary', 'article', 'book'],
    feedbackHit: 'Well done — you identified a relevant source with specific details.',
    feedbackMiss: 'Name a source type AND details (person, location, war, title). You cannot reuse any source from question 3; stating only a type scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '0', descriptor: 'Only a source type stated, or a source reused from Q3.' },
      { marks: '1', descriptor: 'A valid, specific source relevant to the RQ/SOI.', exemplar: 'Britannica Encyclopedia article on the Treaty of Versailles.' },
    ],
  },

  q4_d: {
    marks: 3,
    exemplar:
      'Britannica Encyclopedia is a reliable source that provides extensive information and facts about the Treaty of Versailles and its effects. For example, I can find out about the economic provisions and how these impacted Germany.',
    keyConcepts: ['source evaluation', 'usefulness', 'reliability'],
    keywords: ['reliable', 'usefulness', 'content', 'source type', 'detail'],
    feedbackHit: 'Well done — you described the source’s usefulness in detail.',
    feedbackMiss: 'Describe usefulness of the source type OR its content: state (1) → outline (2) → describe in detail (3).',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '1', descriptor: 'States the usefulness of the source.', exemplar: 'Britannica Encyclopedia is a reliable source.' },
      { marks: '2', descriptor: 'Outlines the usefulness.', exemplar: '…a reliable source that provides extensive information and facts about the Treaty of Versailles.' },
      { marks: '3', descriptor: 'Describes the usefulness in detail.', exemplar: '…For example, I can find out about the economic provisions and how these impacted Germany.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'I will become **knowledgeable** by researching the Treaty of Versailles and how it led to the Second World War.',
    keyConcepts: ['IB learner profile', 'reflection', 'investigation'],
    keywords: ['learner profile', 'knowledgeable', 'inquirer', 'thinker', 'attribute'],
    feedbackHit: 'Well done — you named an attribute and outlined how the investigation develops it.',
    feedbackMiss: 'Only naming an attribute scores 0. Name one of the 10 attributes and outline how this investigation develops it.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'Only states an IB learner profile attribute.' },
      { marks: '1', descriptor: 'States one way they will develop as an IB learner.', exemplar: 'I will become knowledgeable by researching the Treaty of Versailles.' },
      { marks: '2', descriptor: 'Outlines one way they will develop as an IB learner.', exemplar: '…by researching the Treaty of Versailles and how it led to the Second World War.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE: Education Changes Everything.\nDear friends — there are over 20 million children out of school in India and Pakistan. By increasing access to education, people can find higher-paying jobs, cover their basic needs and better understand the world around them. It is not fair that in some countries girls do not have the same opportunities as boys to go to school. Malala is a strong advocate for girls’ right to education — she helped send 40 girls to school, yet so many others still cannot finish school, meaning their quality of life is impacted. The UN’s Sustainable Development Goal for Quality Education aims to give everyone skills and to eliminate gender inequality in education. We must act: support schools, fund teachers, and demand equal access for every child. Thank you for listening.',
    keyConcepts: ['development indicators', 'quality of life', 'communication', 'audience'],
    keywords: ['HDI', 'education', 'life expectancy', 'GNI per capita', 'persuasive', 'call to action', 'SDGs', 'Malala'],
    feedbackHit: 'Well done — a persuasive, well-structured speech on one indicator with a clear call to action.',
    feedbackMiss: 'Marked across four strands: Knowledge (CritA /6), Format /2, Communicating /6, Organization /4. Select one Source B indicator, add a title and a call to action, and write in speech style.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how to improve quality of life with limited examples/terminology.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how to improve quality of life with satisfactory examples and relevant terminology.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how to improve quality of life with accurate examples and terminology.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains with accurate, effective examples and terminology.' },
      { marks: 'Format 1', descriptor: 'One of {title, call to action} included.' },
      { marks: 'Format 2', descriptor: 'Both title AND call to action included.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a speech (reads like an essay).' },
      { marks: 'Communicating 3–4', descriptor: 'Style occasionally appropriate; at least one speech language feature used.' },
      { marks: 'Communicating 5–6', descriptor: 'Style consistently appropriate to a Youth Conference speech ("dear friends", "thank you for listening", rhetorical devices).' },
      { marks: 'Organization 1–4', descriptor: 'Ideas build on each other logically with effective transitions — from rarely (1) to consistently (4).' },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: 'World Resources Institute (wri.org/insights/highest-water-stressed-countries).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'World Resources Institute', 'WRI', 'author'],
    feedbackHit: 'Correct — the origin is the World Resources Institute.',
    feedbackMiss: 'State the origin: the World Resources Institute (WRI).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_b: {
    marks: 1,
    exemplar: "To inform people about countries' exposure to water stress.",
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'inform', 'water stress', 'exposure'],
    feedbackHit: 'Correct — the purpose is to inform on countries’ exposure to water stress.',
    feedbackMiss: 'State the purpose: to inform on countries’ exposure to water stress.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'The map is clear; it helps us identify the countries that are most affected and least affected by water stress.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'clear', 'compare', 'most affected', 'least affected', 'visual'],
    feedbackHit: 'Well done — you outlined one value of the source with brief detail.',
    feedbackMiss: 'Outline one value (content, layout/communication or origin/purpose), e.g. it lets you compare most vs least affected countries.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States the value of the source.', exemplar: 'The map is clear.' },
      { marks: '2', descriptor: 'Outlines the value of the source.', exemplar: 'The map is clear, it helps us identify the countries that are most affected and least affected.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'It does not show the causes of water stress — whether it is due to mismanagement or to scarcity in certain regions.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'no causes', 'mismanagement', 'scarcity', 'scope'],
    feedbackHit: 'Well done — you outlined one limitation of the source with brief detail.',
    feedbackMiss: 'Outline one limitation, e.g. the map does not show the causes of water stress.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States the limitation.', exemplar: 'It does not show the causes of water stress.' },
      { marks: '2', descriptor: 'Outlines the limitation.', exemplar: 'It does not show the causes of water stress, if it’s mismanaged or because of scarcity in certain regions.' },
    ],
  },

  q7_: {
    marks: 2,
    exemplar:
      'Governments should manage water cooperatively, as freshwater sources go beyond international borders; to facilitate access for farmers, wealthier countries could help improve irrigation in water-stressed areas.',
    keyConcepts: ['global cooperation', 'governance', 'sustainability'],
    keywords: ['global community', 'cooperation', 'international borders', 'irrigation', 'aid'],
    feedbackHit: 'Well done — you outlined one role of the global community.',
    feedbackMiss: 'A response with no reference to the global community scores 0. Outline one global-community role (e.g. cooperative water management) with brief detail.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one role of the global community.', exemplar: 'Wealthier countries could help improve irrigation in water-stressed areas.' },
      { marks: '2', descriptor: 'Outlines one role of the global community.', exemplar: 'Governments should manage water cooperatively as freshwater sources go beyond international borders…' },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'Lack of water needed to grow crops and raise livestock in parts of Africa such as Eritrea, Ethiopia and Somalia will increase the number of people facing hunger, because longer periods of dry conditions reduce production and cause prices to soar, making it harder for families to secure food.',
    keyConcepts: ['causality', 'sustainability', 'food security'],
    keywords: ['future impact', 'Africa', 'hunger', 'crops', 'livestock', 'prices', 'drought'],
    feedbackHit: 'Well done — you explained one future impact on a named region with reasons.',
    feedbackMiss: 'If no country/region is named, 0 marks. Build: state (1) → outline (2) → describe (3) → explain with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '1', descriptor: 'States one future impact for a country/region.', exemplar: 'Lack of water in parts of Africa will increase the number of people facing hunger.' },
      { marks: '2', descriptor: 'Outlines one future impact.', exemplar: '…in parts of Africa such as Eritrea, Ethiopia and Somalia…' },
      { marks: '3', descriptor: 'Describes one future impact (detail, no full reasons).', exemplar: '…lack of water to grow crops and raise livestock will increase hunger.' },
      { marks: '4', descriptor: 'Explains one future impact (detail + reasons).', exemplar: '…because longer dry periods reduce production and cause prices to soar, making it harder for families to secure food.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Technological advances can profoundly reshape natural environments, and their impact is best judged biome by biome and perspective by perspective. In the tropical rainforest biome, mechanised logging and road-building technologies have accelerated deforestation, fragmenting habitats and releasing stored carbon — an environmentalist would stress this damage. Yet from an economic-development perspective, the same technologies (and newer precision-agriculture and reforestation drones) raise yields and can restore degraded land, reducing pressure to clear new forest. In the polar/tundra biome, satellite monitoring and cleaner energy technologies help track and slow ice loss, whereas extraction technologies open fragile regions to drilling. Weighing these perspectives, technology’s impact is double-edged: it is the driver of much environmental harm but also the most powerful tool for monitoring and remediation. To a large extent, then, technological advances impact natural environments — the decisive factor is not the technology itself but how societies choose to govern and apply it.',
    keyConcepts: ['perspectives', 'synthesis', 'sustainability', 'systems'],
    keywords: ['technology', 'biome', 'rainforest', 'tundra', 'deforestation', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay with a named biome, balanced perspectives and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (CritA /8), Format /2, Communicating /3, Organization /3, Thinking critically (CritD /8). Reference ≥1 biome (else max 4), give ≥2 perspectives and a conclusion answering "to what extent".',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual/conceptual understanding in an outline; limited examples and terminology.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate understanding in a description; satisfactory examples and terminology.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial understanding in an explanation; accurate examples and terminology.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed understanding in a thorough explanation; accurate, effective examples and terminology (examples in detail).' },
      { marks: 'Format 1–2', descriptor: 'Intro / body / conclusion as separate paragraphs — two (1) or all three (2).' },
      { marks: 'Communicating 1–3', descriptor: 'Essay style and clear, formal, precise language — rarely (1) to consistently (3).' },
      { marks: 'Organization 1–3', descriptor: 'Ideas build logically with effective transitions — rarely (1) to consistently (3).' },
      { marks: 'CritD 1–2', descriptor: 'One perspective, basic analysis; may not reach a conclusion.' },
      { marks: 'CritD 3–4', descriptor: '≥2 perspectives developed; clear arguments; a conclusion (not fully developed).' },
      { marks: 'CritD 5–6', descriptor: '≥2 perspectives with substantial development; synthesises ideas into a clear, coherent conclusion.' },
      { marks: 'CritD 7–8', descriptor: '≥2 perspectives in detailed discussion; synthesises into a coherent, convincing, judged conclusion.' },
    ],
  },
}
