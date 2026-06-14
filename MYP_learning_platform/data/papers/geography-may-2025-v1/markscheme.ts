import 'server-only'

/**
 * MYP Geography — May 2025 · Set 1 VARIANT mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-may-2025: identical keys, marks and rubric-band DESCRIPTORS;
 * every `exemplar`, keyConcepts/keywords and feedback rewritten for the new scenarios
 * (garment trade · Turkana water access · Valencia floods). Command terms and command-term
 * definitions are unchanged from the source.
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band descriptors
 * plus worked exemplar responses at each band (`rubricBands`). The two extended responses
 * marked across several criterion strands (Q4 /18 and Q7 /24) list EVERY strand in
 * `rubricBands`; the strand maxima sum to the question total.
 */

export interface RubricBand {
  marks: string // e.g. '0', '1', '2–3', '7–8', 'Strengths 3', 'CritD 7–8'
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
  q1_a: {
    marks: 2,
    exemplar: 'Cheaper electronics; sharing of medical knowledge between countries.',
    keyConcepts: ['globalization', 'global interactions'],
    keywords: ['cheaper electronics', 'medical knowledge', 'cultures', 'languages', 'trade', 'positive impact'],
    feedbackHit: 'Correct — two valid positive impacts of globalization.',
    feedbackMiss: 'Identify two positive impacts (e.g. cheaper electronics, sharing of medical knowledge, appreciating other cultures, learning other languages, faster trade). Single words that do not signify an impact score 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Cheaper electronics', 'Sharing of medical knowledge between countries', 'Appreciating other cultures', 'Learning other languages', 'Faster trade between countries'],
  },

  q1_b: {
    marks: 4,
    exemplar:
      'Cheaper electronics mean people replace devices more often, so more are thrown away. Many of these end up as e-waste in lower-income countries, where they are broken apart for metals. This releases toxic substances such as lead and mercury, which contaminate soil and water and harm the health of the workers and communities nearby.',
    keyConcepts: ['causality', 'globalization', 'sustainability'],
    keywords: ['negative consequence', 'e-waste', 'toxic substances', 'lead', 'mercury', 'contamination', 'cheaper electronics'],
    feedbackHit: 'Well done — you explained one negative consequence in detail with clear reasons.',
    feedbackMiss: 'Build from stating a consequence (1) → outlining (2) → describing (3) → explaining with reasons (4). The consequence need not link to part (a) to be awarded.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one negative consequence of globalisation.', exemplar: 'Cheaper electronics lead to more e-waste being thrown away.' },
      { marks: '2', descriptor: 'Outlines one negative consequence (a single elaborated sentence; brief detail).', exemplar: 'Cheaper electronics lead to more e-waste. Much of this waste is shipped to lower-income countries.' },
      { marks: '3', descriptor: 'Describes one negative consequence in detail, without comprehensive reasons.', exemplar: 'Cheaper electronics mean devices are replaced more often, so more e-waste ends up in lower-income countries where it is broken apart for metals.' },
      { marks: '4', descriptor: 'Explains one negative consequence in detail, with reasons.', exemplar: '…breaking the devices apart releases toxic substances such as lead and mercury, which contaminate soil and water and harm the health of the workers and communities nearby.' },
    ],
  },

  q2_: {
    marks: 8,
    exemplar:
      'The research consultant is using reliable primary and secondary data; the different sources will support the investigation and help them investigate ways to improve access to clean water. However, only five villagers are interviewed in a county where most rural households collect their own water, so the sample size will not represent the problems and the consultant will not gain sufficient information. Although multiple data sets were collected, the lack of research into why boreholes break down or how repairs could be funded means the research question can’t be fully answered, therefore overall the investigation was only partly successful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'secondary data', 'sample size', 'reliable', 'sub-questions'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the investigation.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss every part of the plan.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the investigation.', exemplar: 'The research consultant is using primary data.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength (elaborated).', exemplar: 'The research consultant is using reliable primary and secondary data.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength with reasoning.', exemplar: '…The different sources of data will support the investigation and help the research consultant investigate ways to improve access to clean water.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'Only five villagers are interviewed.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation (elaborated).', exemplar: 'Only five villagers are interviewed in a county where most rural households have to collect their own water.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation with reasoning (alternative methods count as addressing limitations).', exemplar: '…The sample size will not represent the problems and the consultant will not gain sufficient information.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the investigation.', exemplar: 'Overall, the investigation was unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs positives and negatives into one overall judgement (anywhere in the response).', exemplar: 'Although multiple data sets were collected, the lack of research into why boreholes break down means the RQ can’t be answered, therefore overall, the investigation was unsuccessful.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'How has the growth of clothing exports changed the lives of garment-factory workers in Dhaka, Bangladesh?',
    keyConcepts: ['investigation', 'research question', 'globalization'],
    keywords: ['research question', 'clear', 'focused', 'location', 'stakeholder', 'statement of inquiry'],
    feedbackHit: 'Well done — a research question that is both clear and focused, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (e.g. specifies a location/stakeholder) and connected to the SoI scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'RQ is either clear OR focused, and connected to the SoI.', exemplar: 'How has the growth of clothing exports changed the lives of garment workers? (lacks focus — no location/stakeholder)' },
      { marks: '2', descriptor: 'RQ is both clear AND focused and connected to the SoI.', exemplar: 'How has the growth of clothing exports changed the lives of garment-factory workers in Dhaka, Bangladesh?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'The growth of clothing exports has led to more people being employed in garment factories. A legal minimum wage has been introduced to stop workers being exploited. With a regular income from the export trade, families can invest in their health or their children’s education. The government will understand the social impact of globalisation.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['employment', 'minimum wage', 'social impact', 'globalisation', 'worthy of investigating', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why the RQ is worthy of investigating.',
    feedbackMiss: 'Build from stating a simple reason (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is worthy of investigation (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States how the RQ will allow the government to achieve their goal.', exemplar: 'The growth of clothing exports has led to more people being employed in garment factories.' },
      { marks: '2', descriptor: 'Outlines how the RQ will allow the government to achieve their goal.', exemplar: '…The government will understand the social impact of globalisation.' },
      { marks: '3', descriptor: 'Describes how the RQ is worthy of investigating (a factor in detail, no full reasoning).', exemplar: '…A legal minimum wage has been introduced to stop garment workers being exploited.' },
      { marks: '4', descriptor: 'Justifies how the RQ is worthy of investigating (a factor in detail, with reasoning).', exemplar: '…With a regular income from the export trade, families can invest in their health or their children’s education.' },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: 'Data from the International Labour Organization (ILO) on garment-worker wages in Bangladesh; statistics from NGOs working in Dhaka.',
    keyConcepts: ['sources', 'reliability'],
    keywords: ['ILO', 'NGO statistics', 'wage data', 'reliable source', 'specific'],
    feedbackHit: 'Well done — two specific, reliable sources for the investigation.',
    feedbackMiss: 'Name two specific reliable sources (e.g. ILO wage data for Bangladesh; NGO statistics from Dhaka). Vague responses that only state a source type score 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Data from the International Labour Organization on garment-worker wages in Bangladesh', 'Statistics from NGOs working in Dhaka'],
  },

  q3_d: {
    marks: 4,
    exemplar:
      'The ILO wage data will help me to see the impact of the growing clothing-export trade on people who are employed in the factories, such as a rise in workers’ wages. This will help me understand the social benefits and limitations of increased exports in Bangladesh on people. By basing my research on reliable statistics I can make an informed conclusion to my research question.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['wage data', 'social benefits', 'reliable statistics', 'informed conclusion', 'wages'],
    feedbackHit: 'Well done — you explained, with reasons, how the source helps answer your RQ.',
    feedbackMiss: 'Build from stating a basic way the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '1', descriptor: 'States how the source will help investigate the RQ.', exemplar: 'The ILO wage data will help me to see whether the growing export trade has an impact on workers.' },
      { marks: '2', descriptor: 'Outlines how the source will help (a single elaborated benefit).', exemplar: '…such as a rise in workers’ wages.' },
      { marks: '3', descriptor: 'Describes how the source helps, in detail.', exemplar: '…This will help me understand the social benefits and limitations of increased exports in Bangladesh on people.' },
      { marks: '4', descriptor: 'Explains how the source helps, in detail with reasons.', exemplar: '…By basing my research on reliable statistics I can make an informed conclusion to my research question.' },
    ],
  },

  q4_: {
    marks: 18,
    exemplar:
      'TITLE: “Tech for the Wild — Saving Biomes One Innovation at a Time”. Welcome back, viewers! Today we’re asking how human innovation can both harm and protect biomes. Take the rainforest biome: heli-logging uses GIS to locate only suitable trees, so fewer trees are cut down, natural habitats are not destroyed, and extinction rates fall because the food chain stays intact. But innovation cuts both ways. In the aquatic biome, overfishing — taking an unsustainable number of fish — has been made worse by trawler nets towed through the water, which cause bycatch and waste, and if too many fish are removed there aren’t enough left to reproduce. So before we cut to the break: the same technologies that threaten our biomes can also protect them — it all depends on how we choose to use them. Thanks for watching, and we’ll see you in the next episode!',
    keyConcepts: ['systems', 'sustainability', 'management & intervention', 'communication'],
    keywords: ['biome', 'rainforest', 'aquatic', 'heli-logging', 'GIS', 'overfishing', 'trawler nets', 'bycatch', 'innovation', 'documentary', 'title', 'closing statement'],
    feedbackHit: 'Well done — a documentary-style script explaining innovation’s impact on ≥2 biomes, with a title and closing statement.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Reference ≥2 biomes, add a title and a closing statement, and write in documentary style (address viewers, rhetorical questions).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines the impact of humans on a biome with limited examples/terminology.', exemplar: 'Heli-logging has helped to reduce deforestation.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes the impact of humans on a biome with satisfactory examples and relevant terminology.', exemplar: 'Heli-logging has helped to reduce deforestation in the rainforest biome, increasing biodiversity with less habitat loss. The aquatic biome has been impacted by overfishing.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains the impacts of humans on biomes with accurate examples and terminology.', exemplar: '…Heli-logging uses GIS to locate trees suitable to be removed. Overfishing uses trawler nets, making it easier to fish in large quantities.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: explains in detail, with accurate and effective descriptions/explanations and terminology.', exemplar: '…fewer trees cut down means habitats are not destroyed, lowering extinction rates as the food chain is intact. Trawler nets cause bycatch and waste; if too many fish are removed there aren’t enough to reproduce.' },
      { marks: 'Format 1', descriptor: 'Two of: an appropriate episode title, an introduction, a closing statement.' },
      { marks: 'Format 2', descriptor: 'All three: an appropriate episode title, an introduction AND a closing statement.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a student documentary (reads like an essay); basic, not engaging.' },
      { marks: 'Communicating 3–4', descriptor: 'Style occasionally appropriate; some documentary features (rhetorical questions, analogies, concise sentences).' },
      { marks: 'Communicating 5–6', descriptor: 'Style consistently appropriate to a student documentary throughout (addresses viewers, clarifications, references to other episodes); engaging.' },
      { marks: 'Organization 1', descriptor: 'Ideas rarely build logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Ideas occasionally build logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Ideas frequently build logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Ideas consistently build in a clear, logical manner; always uses effective transitions.' },
    ],
  },

  q5_a: {
    marks: 3,
    exemplar:
      'The map highlights the countries at the highest risk of flooding. It gives the NGO an overview of where damaging floods are most likely. This allows the NGO to pre-position food and shelter in the highest-risk countries before a flood happens.',
    keyConcepts: ['source evaluation', 'value', 'management & intervention'],
    keywords: ['highlighted', 'highest risk', 'overview', 'pre-position', 'prioritise', 'countries'],
    feedbackHit: 'Well done — you explained one value of the map for the NGO, with reasoning.',
    feedbackMiss: 'Build from stating a value (1) → outlining (2) → explaining with reasoning (3), e.g. the map highlights high-risk countries so the NGO can pre-position aid where flooding is most likely.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '1', descriptor: 'States one value of Source B to the NGO’s project.', exemplar: 'It gives them an overview of which countries are most at risk of flooding.' },
      { marks: '2', descriptor: 'Outlines one value of Source B to the NGO’s project.', exemplar: 'The map highlights the highest-risk countries. It gives the NGO an overview of where damaging floods are most likely.' },
      { marks: '3', descriptor: 'Explains one value of Source B to the NGO’s project, with reasoning.', exemplar: '…This allows the NGO to pre-position food and shelter in the highest-risk countries before a flood happens.' },
    ],
  },

  q5_b: {
    marks: 3,
    exemplar:
      'The map only shows risk at the level of whole countries. This means it cannot show which towns, roads or communities inside a country need help, so the NGO cannot tell where to deliver aid once a flood strikes.',
    keyConcepts: ['source evaluation', 'limitation', 'scale'],
    keywords: ['limitation', 'country scale', 'no towns', 'no roads', 'where to deliver', 'detail'],
    feedbackHit: 'Well done — you explained one limitation of the map for the NGO, with reasoning.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3), e.g. it works at country scale → can’t show which towns or roads within a country need help.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '1', descriptor: 'States one limitation of Source B to the NGO’s project.', exemplar: 'The map only shows whole countries.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source B to the NGO’s project.', exemplar: 'The map only shows risk at the level of whole countries, not individual towns or roads.' },
      { marks: '3', descriptor: 'Explains one limitation of Source B to the NGO’s project, with reasoning.', exemplar: '…This means the NGO cannot tell which communities inside a country need help or where to deliver aid once a flood strikes.' },
    ],
  },

  q6_: {
    marks: 6,
    exemplar:
      'A wheelchair user may have difficulty relying on the phone-app alerts. They might not own a smartphone or be confident using apps and social media, so they may not receive the flood warning in time. The evacuation drills will help residents learn the safest routes and keep more people safe. However, the marked routes climb to upper floors and cross raised kerbs, so a wheelchair user may not be able to follow them quickly when a flood strikes. Overall, the phone-app alerts and evacuation drills will not be very effective for this resident, especially from the wheelchair user’s perspective.',
    keyConcepts: ['analysis', 'perspectives', 'management & intervention', 'disparity & equity'],
    keywords: ['phone-app alerts', 'smartphone', 'evacuation drills', 'mobility', 'wheelchair user', 'effectiveness', 'conclusion'],
    feedbackHit: 'Well done — you analysed both strategies for the wheelchair user in detail and reached a conclusion on their effectiveness.',
    feedbackMiss: 'Analyse BOTH strategies (phone-app alerts; evacuation drills) from the wheelchair user’s perspective and conclude on effectiveness. Analysing only one strategy caps at 3 marks; with no conclusion, max 5.',
    commandTerm: 'Analyse',
    commandTermDefinition: 'Break down in order to bring out the essential elements or structure. To identify parts and relationships, and to interpret information to reach conclusions.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the effectiveness of at least one strategy from the wheelchair user’s perspective.', exemplar: 'A wheelchair user may have difficulty relying on the phone-app alerts.' },
      { marks: '2–3', descriptor: 'Outlines the effectiveness of the two strategies (limited supporting detail). One strategy only → max 3.', exemplar: '…They might not be confident using apps. The evacuation drills help people learn the safest routes, but the routes use stairs and kerbs.' },
      { marks: '4–5', descriptor: 'Describes the effectiveness of the two strategies in detail (detailed analysis). No conclusion → max 5.', exemplar: '…Therefore they may not receive the flood warning in time. The drills help residents learn safe routes and keep more people safe, but the climb to upper floors limits a wheelchair user’s ability to follow them.' },
      { marks: '6', descriptor: 'Analyses in detail the effectiveness of both strategies and reaches a relevant conclusion.', exemplar: '…Overall, the phone-app alerts and evacuation drills will not be very effective for this resident, especially from the wheelchair user’s perspective.' },
    ],
  },

  q7_: {
    marks: 24,
    exemplar:
      'Differences in income strongly influence how severely natural disasters affect people, though the level of preparedness and governance also matter. On one hand, lower-income communities suffer more: in the 2010 Haiti earthquake, poorly built housing and weak emergency services meant over 200,000 deaths, because limited income left little to spend on resilient infrastructure or rapid response. On the other hand, higher-income places are better protected: a comparable magnitude quake in Christchurch, New Zealand, in 2011 caused far fewer deaths thanks to strict building codes, insurance and well-funded rescue services — wealth bought preparedness. However, income is not the whole story: even wealthy areas suffer when warnings are ignored, and well-prepared low-income communities can reduce losses. Weighing these perspectives, differences in income influence disaster severity to a large extent, because income shapes the preparedness, infrastructure and recovery capacity that ultimately determine the human impact — but its effect is mediated by how that income is used.',
    keyConcepts: ['disparity & equity', 'management & intervention', 'causality', 'sustainability', 'synthesis'],
    keywords: ['income', 'disparity', 'preparedness', 'infrastructure', 'Haiti earthquake', 'Christchurch', 'building codes', 'recovery', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing how income differences affect disaster severity, with ≥2 balanced perspectives, a named disaster and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 perspectives, ≥1 named disaster, geographical terms, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual/conceptual understanding in an outline; limited examples and terminology.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual/conceptual understanding in a description; satisfactory examples and appropriate terminology.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial understanding in an explanation (reasons included); accurate examples and terminology used effectively in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed understanding in a thorough explanation; references examples (e.g. responses to a disaster) in detail; accurate, effective terminology throughout.' },
      { marks: 'Format 1', descriptor: 'Two of: introduction, a main body of argument, a conclusion (as separate paragraphs).' },
      { marks: 'Format 2', descriptor: 'All three — introduction, main body and conclusion — as separate paragraphs.' },
      { marks: 'Communicating 1', descriptor: 'Style/language rarely appropriate to an essay; may be mostly unclear or very short.' },
      { marks: 'Communicating 2', descriptor: 'Style/language occasionally appropriate; sometimes informal or less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'Style/language consistently appropriate to an essay — formal and clear throughout.' },
      { marks: 'Organization 1', descriptor: 'Organizational structure rarely effective; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Organizational structure occasionally effective; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Organizational structure consistently effective; ideas build logically with effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'One perspective in a basic analysis; summarizes to a limited extent; may not reach a conclusion.' },
      { marks: 'CritD 3–4', descriptor: 'Different perspectives (for and against) with development; clear arguments; a conclusion on the impact of income (not fully developed).' },
      { marks: 'CritD 5–6', descriptor: 'Different perspectives with substantial development; synthesizes information; ideas on the impact of income levels included.' },
      { marks: 'CritD 7–8', descriptor: 'Different perspectives in a detailed, balanced discussion; synthesizes into a clear, coherent and convincing conclusion on the impact of income.' },
    ],
  },
}
