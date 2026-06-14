import 'server-only'

/**
 * MYP Integrated Humanities — May 2025 · VARIANT 2 mark scheme (rubric-banded).
 * Mirrors humanities-may-2025/markscheme.ts EXACTLY (same band descriptors, marks,
 * commandTerm / commandTermDefinition). Only the worked exemplars, keyConcepts and
 * keywords are rewritten for the new scenario (trade, colonial legacies & global inequality).
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
      'A cause of global economic inequality is unfair trade rules that keep poorer countries dependent on exporting cheap raw materials. (A 2-mark response is a single sentence naming one cause that is elaborated on; the detail is brief.)',
    keyConcepts: ['causality', 'trade', 'governance'],
    keywords: ['cause of inequality', 'unfair trade', 'raw materials', 'debt', 'colonial legacy', 'dependency'],
    feedbackHit: 'Well done — you named a cause of global inequality and elaborated on it.',
    feedbackMiss: 'A 2-mark answer names one cause of global inequality (e.g. unfair trade rules) and adds brief detail (… keeping poorer countries dependent on cheap exports).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'The student states a cause of global economic inequality.', exemplar: 'A cause of inequality is unfair trade. / "Some countries are rich", "money problems".' },
      { marks: '2', descriptor: 'The student outlines a cause of global economic inequality.', exemplar: 'A cause of inequality is unfair trade rules that keep poorer countries dependent on cheap raw exports. / "Heavy debt repayments draining budgets".' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'A lasting effect of colonialism on the Democratic Republic of the Congo is an economy that still depends heavily on exporting a few raw minerals. Because the colonial system was built to extract resources rather than build local industry, the country was left without factories or trained managers, so even after independence it struggled to add value to its own resources and remained vulnerable to falling commodity prices.',
    keyConcepts: ['causality', 'trade', 'consequences'],
    keywords: ['effect of colonialism', 'Congo', 'resource dependence', 'extraction', 'economy', 'minerals'],
    feedbackHit: 'Well done — you explained one lasting effect of colonialism on a specific country with clear reasons.',
    feedbackMiss: 'A response that does not name a specific country scores a maximum of 2; one that only names a country scores 0. Explain one effect with reasons.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached (or only a specific country is stated).' },
      { marks: '1', descriptor: 'States an effect of colonialism on one country.', exemplar: 'An effect of colonialism on the Congo was a resource-dependent economy.' },
      { marks: '2', descriptor: 'Outlines an effect of colonialism on one country.', exemplar: 'An effect of colonialism on the Congo was an economy that still depends heavily on exporting a few raw minerals.' },
      { marks: '3', descriptor: 'Describes an effect of colonialism on one country (detail, no full reasoning; a country must be named).', exemplar: '…the colonial system was built to extract resources rather than build local industry.' },
      { marks: '4', descriptor: 'Explains an effect of colonialism on one country (detail + reasons).', exemplar: '…so even after independence it struggled to add value to its own resources and stayed vulnerable to falling commodity prices.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Overall the plan is fairly strong: it is split into clear sections (deadline, sources, organizers, success criteria) covering the main aspects of running the stall, and it draws on a trustworthy report from the Fairtrade Foundation and a documentary on cocoa farming, which give students accurate information to share. However, one source — a promotional video from a single large chocolate company — is likely to be biased toward that company’s image rather than the farmers’ reality, and the treasurer is new to fair trade, so the project risks spreading a one-sided message; more independent sources and some background reading would fix this. On balance, the plan is a promising starting point but needs a more balanced evidence base before it can genuinely help the farming communities.',
    keyConcepts: ['source evaluation', 'perspectives', 'communication'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sources', 'bias', 'audience', 'fair trade'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the plan.',
    feedbackMiss: 'Marked across three strands (Strengths /3, Limitations /3, Appraisal /2). Aim to outline/explain strengths AND limitations, then give an overall judgement.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the plan.', exemplar: 'The plan is split into sections like deadlines, sources and organizers.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength of the plan.', exemplar: '…it draws on a trustworthy report from the Fairtrade Foundation and a documentary on cocoa farming.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength of the plan.', exemplar: '…which give students accurate information to share with shoppers at the stall.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'One of the sources is a company advert.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation.', exemplar: 'A promotional video from a single large chocolate company is likely to be biased.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation.', exemplar: '…biased toward the company’s image rather than the farmers’ reality, so the project risks spreading a one-sided message unless more independent sources are added.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal.', exemplar: 'Overall, the plan is good, it has some strengths but could be improved.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal (weighs positives and negatives into one judgement).', exemplar: 'Overall the plan is a promising starting point because it is well organised and uses some reliable sources, but it should replace the company advert with independent sources.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How did the AfCFTA free-trade agreement change small textile businesses in Ghana?',
    keyConcepts: ['investigation', 'research question', 'statement of inquiry'],
    keywords: ['research question', 'trade agreement', 'community', 'change', 'focus'],
    feedbackHit: 'Well done — a clear, focused research question covering three aspects.',
    feedbackMiss: 'The RQ must include three specific aspects (e.g. a specific trade agreement; a location/community; a type of change/impact). Rephrasing the SOI scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached / the RQ rephrases the SOI.', exemplar: 'To what extent did a trade agreement create change for a community?' },
      { marks: '1', descriptor: 'RQ is either clear OR focused (two aspects).', exemplar: 'How did the AfCFTA agreement change businesses in Ghana?' },
      { marks: '2', descriptor: 'RQ is both clear AND focused (three aspects).', exemplar: 'How did the AfCFTA free-trade agreement change small textile businesses in Ghana?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My RQ identifies a specific community, small textile businesses in Ghana, that changed after the African Continental Free Trade Area (AfCFTA) agreement came into force. By lowering tariffs across African markets, the agreement let these businesses sell cloth to neighbouring countries more cheaply, but also exposed them to stronger competition — showing clearly how the trade agreement created both opportunity and pressure for that community.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['AfCFTA', 'Ghana', 'tariffs', 'textiles', 'competition', 'relevance', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified the RQ’s relevance with detailed, reasoned argument.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing with detail (3) → justifying with a comprehensive reason (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States how the RQ is relevant to the SOI.', exemplar: 'My RQ identifies a specific community, textile businesses in Ghana, that changed.' },
      { marks: '2', descriptor: 'Outlines how the RQ is relevant.', exemplar: '…that changed after the AfCFTA free-trade agreement came into force.' },
      { marks: '3', descriptor: 'Describes how the RQ is relevant (new detail).', exemplar: '…By lowering tariffs across African markets, the agreement let these businesses sell cloth more cheaply abroad.' },
      { marks: '4', descriptor: 'Justifies relevance (detail + comprehensive reasoning).', exemplar: '…but also exposed them to stronger competition, showing how the trade agreement created both opportunity and pressure for that community.' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'A World Trade Organization report on how the AfCFTA agreement has affected trade between African countries.',
    keyConcepts: ['sources', 'relevance'],
    keywords: ['source type', 'specific source', 'report', 'documentary', 'interview', 'article'],
    feedbackHit: 'Well done — you identified a relevant source with specific details.',
    feedbackMiss: 'Name a source type AND details (organisation, title, person, place). You cannot reuse any source from question 3; stating only a type scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '0', descriptor: 'Only a source type stated, or a source reused from Q3.' },
      { marks: '1', descriptor: 'A valid, specific source relevant to the RQ/SOI.', exemplar: 'A World Trade Organization report on the effects of the AfCFTA agreement.' },
    ],
  },

  q4_d: {
    marks: 3,
    exemplar:
      'A World Trade Organization report is a reliable source that provides detailed data and analysis on trade between African countries. For example, I could use its figures on how exports from Ghana changed after the agreement to show the impact on small textile businesses.',
    keyConcepts: ['source evaluation', 'usefulness', 'reliability'],
    keywords: ['reliable', 'usefulness', 'content', 'source type', 'detail'],
    feedbackHit: 'Well done — you described the source’s usefulness in detail.',
    feedbackMiss: 'Describe usefulness of the source type OR its content: state (1) → outline (2) → describe in detail (3).',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '1', descriptor: 'States the usefulness of the source.', exemplar: 'A World Trade Organization report is a reliable source.' },
      { marks: '2', descriptor: 'Outlines the usefulness.', exemplar: '…a reliable source that provides detailed data and analysis on trade between African countries.' },
      { marks: '3', descriptor: 'Describes the usefulness in detail.', exemplar: '…For example, I could use its figures on how exports from Ghana changed after the agreement.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'I will become **principled** by reporting the costs as well as the benefits of the trade agreement honestly, even where the evidence is mixed.',
    keyConcepts: ['IB learner profile', 'reflection', 'investigation'],
    keywords: ['learner profile', 'principled', 'thinker', 'inquirer', 'attribute'],
    feedbackHit: 'Well done — you named an attribute and outlined how the investigation develops it.',
    feedbackMiss: 'Only naming an attribute scores 0. Name one of the 10 attributes and outline how this investigation develops it.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'Only states an IB learner profile attribute.' },
      { marks: '1', descriptor: 'States one way they will develop as an IB learner.', exemplar: 'I will become principled by reporting the evidence honestly.' },
      { marks: '2', descriptor: 'Outlines one way they will develop as an IB learner.', exemplar: '…by reporting the costs as well as the benefits of the trade agreement, even where the evidence is mixed.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE: Poverty Is More Than an Empty Wallet.\nDear friends — when we picture poverty we think of low income, but for millions it means a child without a school, a home without clean water, a family one illness away from disaster. The Multidimensional Poverty Index reminds us that poverty has many faces. Take education: in countries such as Bangladesh, when girls are kept out of school, families stay trapped in poverty for another generation, because without schooling there is no path to better-paid work. Investing in schools breaks that cycle — every extra year of education raises a person’s future earnings and lifts whole communities. It is not fair that where you are born decides whether you ever sit in a classroom. We must act: fund schools, train teachers, and demand that every child can learn. Thank you for listening.',
    keyConcepts: ['development indicators', 'quality of life', 'communication', 'audience'],
    keywords: ['MPI', 'multidimensional poverty', 'education', 'living standards', 'persuasive', 'call to action', 'Bangladesh'],
    feedbackHit: 'Well done — a persuasive, well-structured speech on one dimension with a clear call to action.',
    feedbackMiss: 'Marked across four strands: Knowledge (CritA /6), Format /2, Communicating /6, Organization /4. Select one Source B dimension, add a title and a call to action, and write in speech style.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how to reduce poverty with limited examples/terminology.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how to reduce poverty with satisfactory examples and relevant terminology.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how to reduce poverty with accurate examples and terminology.' },
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
    exemplar: 'The World Bank (worldbank.org).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'World Bank', 'author'],
    feedbackHit: 'Correct — the origin is the World Bank.',
    feedbackMiss: 'State the origin: the World Bank.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_b: {
    marks: 1,
    exemplar: 'To inform people about which countries have the most people living in extreme poverty.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'inform', 'extreme poverty', 'distribution'],
    feedbackHit: 'Correct — the purpose is to inform on which countries have the most people in extreme poverty.',
    feedbackMiss: 'State the purpose: to inform on which countries have the most people in extreme poverty.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'The map is clear; it helps us identify which regions are most affected by extreme poverty and which are least affected.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'clear', 'compare', 'most affected', 'least affected', 'visual'],
    feedbackHit: 'Well done — you outlined one value of the source with brief detail.',
    feedbackMiss: 'Outline one value (content, layout/communication or origin/purpose), e.g. it lets you compare most vs least affected regions.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States the value of the source.', exemplar: 'The map is clear.' },
      { marks: '2', descriptor: 'Outlines the value of the source.', exemplar: 'The map is clear, it helps us identify which regions are most affected and which are least affected by extreme poverty.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'It does not show the causes of extreme poverty — whether it is due to conflict, debt or a lack of jobs in those regions.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'no causes', 'conflict', 'debt', 'scope'],
    feedbackHit: 'Well done — you outlined one limitation of the source with brief detail.',
    feedbackMiss: 'Outline one limitation, e.g. the map does not show the causes of extreme poverty.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States the limitation.', exemplar: 'It does not show the causes of extreme poverty.' },
      { marks: '2', descriptor: 'Outlines the limitation.', exemplar: 'It does not show the causes of extreme poverty, whether it is due to conflict, debt or a lack of jobs in those regions.' },
    ],
  },

  q7_: {
    marks: 2,
    exemplar:
      'The global community should cancel or restructure unpayable debts owed by the poorest countries, because heavy repayments drain money that could fund schools and clinics; wealthier nations and bodies such as the IMF can also fund development programmes so poorer countries can invest in their own people.',
    keyConcepts: ['global cooperation', 'governance', 'sustainability'],
    keywords: ['global community', 'cooperation', 'debt relief', 'IMF', 'aid', 'development'],
    feedbackHit: 'Well done — you outlined one role of the global community.',
    feedbackMiss: 'A response with no reference to the global community scores 0. Outline one global-community role (e.g. debt relief or development funding) with brief detail.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one role of the global community.', exemplar: 'Wealthier countries could cancel debts owed by the poorest countries.' },
      { marks: '2', descriptor: 'Outlines one role of the global community.', exemplar: 'The global community should cancel or restructure unpayable debts, because heavy repayments drain money that could fund schools and clinics…' },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'Rising extreme poverty in the Sahel region of Africa, including countries such as Niger and Chad, could increase forced migration and instability, because when families can no longer afford food after repeated droughts and price rises they are driven to leave their land, which strains neighbouring areas and can fuel conflict over scarce resources.',
    keyConcepts: ['causality', 'sustainability', 'global inequality'],
    keywords: ['future impact', 'Sahel', 'Niger', 'Chad', 'migration', 'instability', 'food prices'],
    feedbackHit: 'Well done — you explained one future impact on a named region with reasons.',
    feedbackMiss: 'If no country/region is named, 0 marks. Build: state (1) → outline (2) → describe (3) → explain with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '1', descriptor: 'States one future impact for a country/region.', exemplar: 'Rising extreme poverty in the Sahel could increase forced migration.' },
      { marks: '2', descriptor: 'Outlines one future impact.', exemplar: '…in the Sahel region of Africa, including countries such as Niger and Chad…' },
      { marks: '3', descriptor: 'Describes one future impact (detail, no full reasons).', exemplar: '…families who can no longer afford food are driven to leave their land.' },
      { marks: '4', descriptor: 'Explains one future impact (detail + reasons).', exemplar: '…which strains neighbouring areas and can fuel conflict over scarce resources.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Technological advances can narrow the gap between rich and poor countries, but their impact is best judged country by country and perspective by perspective. In Kenya, mobile-money platforms such as M-Pesa have given millions of people without bank accounts a safe way to save, send money and start small businesses — a development economist would stress how this kind of "leapfrogging" lets a poorer country skip costly old infrastructure and catch up quickly. Yet from a dependency perspective, much advanced technology is owned by firms in wealthy countries, so poorer nations may end up paying licence fees and exporting their data and profits, deepening inequality rather than easing it. From a labour perspective, automation can wipe out the low-cost manufacturing jobs that some developing economies rely on to grow. Weighing these perspectives, technology is a powerful equaliser only under the right conditions. To a large extent, then, technological advances can reduce inequality between countries — but only when poorer nations also build their own skills, infrastructure and ownership, rather than simply consuming technology designed elsewhere.',
    keyConcepts: ['perspectives', 'synthesis', 'sustainability', 'systems'],
    keywords: ['technology', 'inequality', 'M-Pesa', 'Kenya', 'leapfrogging', 'dependency', 'perspectives', 'synthesis'],
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
