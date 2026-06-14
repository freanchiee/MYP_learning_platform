import 'server-only'

/**
 * MYP Integrated Humanities — May 2025 · VARIANT 1 mark scheme (rubric-banded).
 * Mirrors humanities-may-2025/markscheme.ts EXACTLY (same band descriptors, marks,
 * commandTerm / commandTermDefinition). Only the worked exemplars, keyConcepts and
 * keywords are rewritten for the new scenario (migration, displacement & global health).
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
      'A cause of forced migration is persecution of a minority group that forces families to flee their homes. (A 2-mark response is a single sentence naming one cause that is elaborated on; the detail is brief.)',
    keyConcepts: ['causality', 'migration', 'governance'],
    keywords: ['cause of migration', 'persecution', 'conflict', 'natural disaster', 'poverty', 'flee'],
    feedbackHit: 'Well done — you named a cause of forced migration and elaborated on it.',
    feedbackMiss: 'A 2-mark answer names one cause of forced migration (e.g. persecution) and adds brief detail (… that forces families to flee).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'The student states a cause of forced migration.', exemplar: 'A cause of forced migration is persecution. / "Trouble", "they had to leave", "bad situation".' },
      { marks: '2', descriptor: 'The student outlines a cause of forced migration.', exemplar: 'A cause of forced migration is persecution of a minority group that forces families to flee. / "War destroying homes", "drought ruining farmland".' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'An effect of the Syrian refugee crisis is severe pressure on housing in neighbouring host cities. As hundreds of thousands of people arrived in cities such as Amman, rents rose sharply and many families had to share crowded apartments, because the supply of affordable homes could not grow fast enough to match the sudden demand.',
    keyConcepts: ['causality', 'migration', 'consequences'],
    keywords: ['effect of crisis', 'Syrian refugee crisis', 'host cities', 'housing', 'rents', 'pressure'],
    feedbackHit: 'Well done — you explained one effect of a specific refugee crisis with clear reasons.',
    feedbackMiss: 'A response that does not name a specific crisis scores a maximum of 2; one that only names a crisis scores 0. Explain one effect with reasons.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached (or only a specific crisis is stated).' },
      { marks: '1', descriptor: 'States an effect of one crisis.', exemplar: 'An effect of the Syrian refugee crisis was pressure on housing in host cities.' },
      { marks: '2', descriptor: 'Outlines an effect of one crisis.', exemplar: 'An effect of the Syrian refugee crisis was pressure on housing in host cities such as Amman, where rents rose.' },
      { marks: '3', descriptor: 'Describes an effect of one crisis (detail, no full reasoning; a crisis must be named).', exemplar: '…rents rose sharply and many families had to share crowded apartments.' },
      { marks: '4', descriptor: 'Explains an effect of one crisis (detail + reasons).', exemplar: '…because the supply of affordable homes could not grow fast enough to match the sudden demand.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Overall the plan is fairly strong: it is split into clear sections (deadline, sources, organizers, success criteria) that cover the main aspects of preparing the campaign, and crucially it promises to translate the posters into the main local languages, which means the campaign can actually reach the diverse families it is meant to help. However, several of its sources are weak — a leaflet from the bottled-water industry and a wellness influencer’s blog are biased or unreliable, giving a distorted picture of safe water; more trustworthy public-health sources are needed for the community to take the campaign seriously. On balance, the plan is a good starting point but its evidence base must be strengthened before it can genuinely help the community.',
    keyConcepts: ['source evaluation', 'perspectives', 'communication'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sources', 'bias', 'audience', 'campaign'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the plan.',
    feedbackMiss: 'Marked across three strands (Strengths /3, Limitations /3, Appraisal /2). Aim to outline/explain strengths AND limitations, then give an overall judgement.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the plan.', exemplar: 'The plan is split into sections like deadlines, sources and organizers.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength of the plan.', exemplar: '…it promises to translate the posters into the main languages spoken locally.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength of the plan.', exemplar: '…which means the campaign can actually reach the diverse families it is meant to help.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'Some of the sources are unreliable.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation.', exemplar: 'A leaflet from the bottled-water industry and a wellness influencer’s blog are biased or unreliable.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation.', exemplar: '…giving a distorted picture of safe water, so more trustworthy public-health sources are needed for the community to take the campaign seriously.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal.', exemplar: 'Overall, the plan is good, it has some strengths but could be improved.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal (weighs positives and negatives into one judgement).', exemplar: 'Overall the plan is a good starting point because it is well organised and translated, but it could be improved by replacing the biased sources with reliable health sources.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How did Germany’s 2015 open-door asylum policy change the city of Berlin?',
    keyConcepts: ['investigation', 'research question', 'statement of inquiry'],
    keywords: ['research question', 'migration policy', 'community', 'change', 'focus'],
    feedbackHit: 'Well done — a clear, focused research question covering three aspects.',
    feedbackMiss: 'The RQ must include three specific aspects (e.g. a specific migration policy; a location/community; a type of change/impact). Rephrasing the SOI scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached / the RQ rephrases the SOI.', exemplar: 'To what extent did a migration policy create change for a community?' },
      { marks: '1', descriptor: 'RQ is either clear OR focused (two aspects).', exemplar: 'How did Germany’s 2015 asylum policy change Berlin?' },
      { marks: '2', descriptor: 'RQ is both clear AND focused (three aspects).', exemplar: 'How did Germany’s 2015 open-door asylum policy change the city of Berlin?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My RQ identifies a specific community, the city of Berlin, that changed after Germany adopted its 2015 open-door asylum policy. The arrival of hundreds of thousands of asylum seekers meant the city had to rapidly expand language classes and school places, which strained budgets but also revitalised some neighbourhoods — showing clearly how the migration policy created change for that community.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['asylum policy', 'Berlin', 'integration', 'language classes', 'relevance', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified the RQ’s relevance with detailed, reasoned argument.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing with detail (3) → justifying with a comprehensive reason (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States how the RQ is relevant to the SOI.', exemplar: 'My RQ identifies a specific community, Berlin, that changed after 2015.' },
      { marks: '2', descriptor: 'Outlines how the RQ is relevant.', exemplar: '…Berlin, that changed after Germany adopted its 2015 open-door asylum policy.' },
      { marks: '3', descriptor: 'Describes how the RQ is relevant (new detail).', exemplar: '…The city had to rapidly expand language classes and school places for new arrivals.' },
      { marks: '4', descriptor: 'Justifies relevance (detail + comprehensive reasoning).', exemplar: '…which strained budgets but also revitalised some neighbourhoods, showing how the policy created change for that community.' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'A UNHCR report on the integration of asylum seekers in German cities after 2015.',
    keyConcepts: ['sources', 'relevance'],
    keywords: ['source type', 'specific source', 'report', 'documentary', 'interview', 'article'],
    feedbackHit: 'Well done — you identified a relevant source with specific details.',
    feedbackMiss: 'Name a source type AND details (organisation, title, person, place). You cannot reuse any source from question 3; stating only a type scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '0', descriptor: 'Only a source type stated, or a source reused from Q3.' },
      { marks: '1', descriptor: 'A valid, specific source relevant to the RQ/SOI.', exemplar: 'A UNHCR report on the integration of asylum seekers in German cities.' },
    ],
  },

  q4_d: {
    marks: 3,
    exemplar:
      'A UNHCR report is a reliable source that provides detailed data and case studies on how asylum seekers settled into German cities. For example, I could use its figures on how many new arrivals found work or school places in Berlin to show the change the policy created.',
    keyConcepts: ['source evaluation', 'usefulness', 'reliability'],
    keywords: ['reliable', 'usefulness', 'content', 'source type', 'detail'],
    feedbackHit: 'Well done — you described the source’s usefulness in detail.',
    feedbackMiss: 'Describe usefulness of the source type OR its content: state (1) → outline (2) → describe in detail (3).',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '1', descriptor: 'States the usefulness of the source.', exemplar: 'A UNHCR report is a reliable source.' },
      { marks: '2', descriptor: 'Outlines the usefulness.', exemplar: '…a reliable source that provides detailed data and case studies on asylum seekers in German cities.' },
      { marks: '3', descriptor: 'Describes the usefulness in detail.', exemplar: '…For example, I could use its figures on how many new arrivals found work or school places in Berlin.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'I will become **open-minded** by seeking out the perspectives of both long-term residents and new arrivals in Berlin.',
    keyConcepts: ['IB learner profile', 'reflection', 'investigation'],
    keywords: ['learner profile', 'open-minded', 'caring', 'inquirer', 'attribute'],
    feedbackHit: 'Well done — you named an attribute and outlined how the investigation develops it.',
    feedbackMiss: 'Only naming an attribute scores 0. Name one of the 10 attributes and outline how this investigation develops it.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'Only states an IB learner profile attribute.' },
      { marks: '1', descriptor: 'States one way they will develop as an IB learner.', exemplar: 'I will become open-minded by listening to different views on migration.' },
      { marks: '2', descriptor: 'Outlines one way they will develop as an IB learner.', exemplar: '…by seeking out the perspectives of both long-term residents and new arrivals in Berlin.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE: Every Child Deserves a Fifth Birthday.\nDear friends — today, somewhere in the world, a child will die from a disease we already know how to prevent. Under-five mortality is the clearest sign that a community’s health system is failing the most vulnerable. By targeting preventable child deaths — through vaccines, clean water and trained midwives — countries such as Rwanda have cut their under-five mortality by more than half in a generation, freeing parents to work and children to grow up and learn. It is not fair that where a child is born still decides whether they survive. The UN’s Sustainable Development Goal 3 aims to end preventable child deaths everywhere. We must act: fund clinics, train health workers, and demand that no child dies from a preventable illness. Thank you for listening.',
    keyConcepts: ['development indicators', 'quality of life', 'communication', 'audience'],
    keywords: ['SDG 3', 'child mortality', 'vaccines', 'universal health coverage', 'persuasive', 'call to action', 'Rwanda'],
    feedbackHit: 'Well done — a persuasive, well-structured speech on one target with a clear call to action.',
    feedbackMiss: 'Marked across four strands: Knowledge (CritA /6), Format /2, Communicating /6, Organization /4. Select one Source B target, add a title and a call to action, and write in speech style.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how to improve health and well-being with limited examples/terminology.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how to improve health and well-being with satisfactory examples and relevant terminology.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how to improve health and well-being with accurate examples and terminology.' },
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
    exemplar: 'World Health Organization (who.int).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'World Health Organization', 'WHO', 'author'],
    feedbackHit: 'Correct — the origin is the World Health Organization.',
    feedbackMiss: 'State the origin: the World Health Organization (WHO).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_b: {
    marks: 1,
    exemplar: 'To inform people about how global child vaccination coverage has changed over time.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'inform', 'vaccination', 'coverage', 'trend'],
    feedbackHit: 'Correct — the purpose is to inform on how vaccination coverage has changed over time.',
    feedbackMiss: 'State the purpose: to inform on how child vaccination coverage has changed over time.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'The chart is clear; it lets us see the overall trend and spot the years when coverage rose or fell.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'clear', 'trend', 'over time', 'compare years', 'visual'],
    feedbackHit: 'Well done — you outlined one value of the source with brief detail.',
    feedbackMiss: 'Outline one value (content, layout/communication or origin/purpose), e.g. it lets you see the trend over time.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States the value of the source.', exemplar: 'The chart is clear.' },
      { marks: '2', descriptor: 'Outlines the value of the source.', exemplar: 'The chart is clear, it lets us see the overall trend and spot the years when coverage rose or fell.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'It only shows a global average, so it hides the big differences between individual countries or regions.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'global average', 'no countries', 'no causes', 'scope'],
    feedbackHit: 'Well done — you outlined one limitation of the source with brief detail.',
    feedbackMiss: 'Outline one limitation, e.g. it only shows a global average and hides differences between countries.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States the limitation.', exemplar: 'It only shows a global average.' },
      { marks: '2', descriptor: 'Outlines the limitation.', exemplar: 'It only shows a global average, so it hides the big differences between individual countries or regions.' },
    ],
  },

  q7_: {
    marks: 2,
    exemplar:
      'The global community should fund and coordinate vaccination programmes through bodies such as the WHO and Gavi, because many countries cannot afford vaccines alone; wealthier countries can donate doses and pay for cold-chain storage so clinics in poorer regions can keep vaccines safe.',
    keyConcepts: ['global cooperation', 'governance', 'sustainability'],
    keywords: ['global community', 'cooperation', 'WHO', 'Gavi', 'funding', 'aid'],
    feedbackHit: 'Well done — you outlined one role of the global community.',
    feedbackMiss: 'A response with no reference to the global community scores 0. Outline one global-community role (e.g. funding vaccination programmes) with brief detail.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one role of the global community.', exemplar: 'Wealthier countries could donate vaccine doses to poorer countries.' },
      { marks: '2', descriptor: 'Outlines one role of the global community.', exemplar: 'The global community should fund and coordinate vaccination programmes through bodies such as the WHO and Gavi…' },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'Falling vaccination coverage in parts of central Africa such as the Democratic Republic of the Congo could trigger large outbreaks of measles, because once the share of protected children drops below a certain level the disease spreads easily through crowded communities, overwhelming clinics and causing preventable deaths among young children.',
    keyConcepts: ['causality', 'sustainability', 'public health'],
    keywords: ['future impact', 'Africa', 'measles', 'outbreak', 'children', 'clinics', 'coverage'],
    feedbackHit: 'Well done — you explained one future impact on a named region with reasons.',
    feedbackMiss: 'If no country/region is named, 0 marks. Build: state (1) → outline (2) → describe (3) → explain with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '1', descriptor: 'States one future impact for a country/region.', exemplar: 'Falling vaccination coverage in parts of central Africa could cause measles outbreaks.' },
      { marks: '2', descriptor: 'Outlines one future impact.', exemplar: '…in parts of central Africa such as the Democratic Republic of the Congo…' },
      { marks: '3', descriptor: 'Describes one future impact (detail, no full reasons).', exemplar: '…large measles outbreaks could overwhelm clinics and harm young children.' },
      { marks: '4', descriptor: 'Explains one future impact (detail + reasons).', exemplar: '…because once protection drops below a certain level the disease spreads easily through crowded communities, causing preventable deaths.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Technological advances can dramatically widen access to healthcare, and their impact is best judged country by country and perspective by perspective. In rural India, telemedicine platforms and smartphone apps now let patients consult specialists hundreds of kilometres away, while drones deliver medicines and test samples to villages with no roads — a development economist would stress how these tools leapfrog missing infrastructure and reach people clinics never could. Yet from an equity perspective, the same technologies can deepen divides: those without electricity, internet or digital skills are left behind, and private telehealth firms may serve only those who can pay. From a clinician’s perspective, technology supports but cannot replace trained staff, who remain scarce in many regions. Weighing these perspectives, technology’s impact on access is powerful but uneven: it removes some barriers while raising new ones. To a large extent, then, technological advances can improve access to healthcare — but only when governments pair them with investment in infrastructure and trained people, so that the benefits reach everyone rather than a connected few.',
    keyConcepts: ['perspectives', 'synthesis', 'sustainability', 'systems'],
    keywords: ['technology', 'healthcare access', 'telemedicine', 'India', 'equity', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay referencing a specific place, with balanced perspectives and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (CritA /8), Format /2, Communicating /3, Organization /3, Thinking critically (CritD /8). Reference ≥1 country/region (else max 4), give ≥2 perspectives and a conclusion answering "to what extent".',
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
