import 'server-only'

/**
 * MYP Geography — November 2022 mark scheme (rubric-banded, "best fit").
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer (kept for the shared grading/results
 * consumers); the extra fields (`commandTerm`, `commandTermDefinition`,
 * `rubricBands`) are optional and ignored by consumers that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and
 * Q9 /24) list EVERY strand in `rubricBands` (e.g. 'CritA 6', 'Format 2',
 * 'Communicating 5–6', 'CritD 7–8'); the strand maxima sum to the question total.
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
    marks: 1,
    exemplar: 'Overgrazing.',
    keyConcepts: ['causality', 'geographic processes', 'sustainability'],
    keywords: ['overgrazing', 'population growth', 'agriculture', 'over-farming', 'human factor', 'land degradation'],
    feedbackHit: 'Correct — a valid human factor that has caused land degradation in the Sahel.',
    feedbackMiss: 'Identify one human factor, e.g. overgrazing, population growth, agriculture, over-farming, climate change. Note: identifying an unsustainable practice on its own is not a human factor and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Overgrazing', 'Population growth', 'Agriculture', 'Over-farming', 'Climate change'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Drought.',
    keyConcepts: ['geographic processes', 'patterns & trends', 'sustainability'],
    keywords: ['extreme weather', 'drought', 'changing weather patterns', 'natural factor', 'land degradation'],
    feedbackHit: 'Correct — a valid natural factor that has caused land degradation in the Sahel.',
    feedbackMiss: 'Identify one natural factor, e.g. extreme weather, drought, changing weather patterns. Accept any valid response.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Extreme weather', 'Drought', 'Changing weather patterns'],
  },

  q2_: {
    marks: 8,
    exemplar:
      'The action plan uses both economic and social indices to measure the progress of the work in Mali, including % in extreme poverty and % in arable land — this will provide a balanced review of the project’s aims. However, interviewing only 2 people from two different communities will not provide the NGO with sufficient data to analyse: people within villages will have varying experiences, so this gives a limited representation of the project’s impact on the community. Although the action plan uses a small sample size for interviews, overall the use of a range of indices in the action plan will allow the investigation to be successful.',
    keyConcepts: ['investigation', 'management & intervention', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'range of indices', 'economic indices', 'social indices', 'arable land', 'extreme poverty', 'sample size', 'two villages', 'representation'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part to access full marks; suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the investigation (one sentence referring to a single strength).', exemplar: 'The action plan uses a range of indices.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the investigation (a single elaborated strength; brief detail). 3+ outlined strengths can earn 3.', exemplar: 'The action plan uses both economic and social indices including % in extreme poverty and % in arable land.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the investigation — elaborated in additional detail with reasoning.', exemplar: 'The action plan uses both economic and social indices to measure the progress of their work in Mali, including % in extreme poverty and % in arable land. This will provide a balanced review of the project’s aims.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the investigation (one sentence referring to a single limitation).', exemplar: 'The sample size for the interviews is not large enough.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the investigation (a single elaborated limitation; brief detail). 3+ outlined limitations can earn 3.', exemplar: 'Interviewing 2 people from two different communities will not provide the NGO with sufficient data to analyse.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) — elaborated in additional detail with reasoning (alternative methods count as addressing limitations).', exemplar: 'Interviewing 2 people from two different communities will not provide the NGO with sufficient data to analyse. People within villages will have varying experiences, so this will provide a limited representation of the project’s impact on the community.' },
      { marks: 'Appraisal 1', descriptor: 'An appraisal is stated (a summary of strengths and limitations or a brief judgment; can appear anywhere in the response).', exemplar: 'Overall, the strengths of the action plan will allow the investigation to be successful.' },
      { marks: 'Appraisal 2', descriptor: 'An appraisal is outlined — weighs up positive and negative points (implicitly or explicitly) and makes an overall judgement on the investigative process.', exemplar: 'Although the action plan uses a small sample size for interviews, overall, the use of a range of indices in the action plan will allow the investigation to be successful.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'How can selective logging technology be used in the Sabah rainforests to reduce deforestation?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'place', 'product', 'statement of inquiry', 'selective logging', 'technology'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a place and product) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (e.g. specifies a location and product) scores 2. Repeating the SoI with a question term at the start scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Repeating the SoI with a question term at the start scores 0.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry.', exemplar: 'How can selective logging technology be used to reduce deforestation? (clear and connected, but lacks focus — no location specified)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (focuses on a place and product).', exemplar: 'How can selective logging technology be used in The Sabah rainforests to reduce deforestation?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'The Borneo rainforest is under threat from unsustainable logging practices. Large areas of forest are being cleared. Without plants to keep the soil in place, soil is eroded, leading to land degradation. These actions cause a loss of biodiversity. Selective logging could be used to limit the loss of biodiversity as habitats could be saved, and it is therefore important to investigate.',
    keyConcepts: ['investigation', 'relevance', 'causality', 'reasoning'],
    keywords: ['Borneo rainforest', 'unsustainable logging', 'forest cleared', 'soil erosion', 'land degradation', 'biodiversity', 'selective logging', 'worthy of investigation'],
    feedbackHit: 'Well done — you justified, with reasoning, why the RQ is worthy of investigation.',
    feedbackMiss: 'Build from stating a simple reason (1) → outlining (2) → describing a factor in detail (3) → justifying with at least one factor in detail plus reasoning why the RQ should be investigated (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States why the research question is worthy of investigation (a single sentence with a simple comment on the RQ and its importance).', exemplar: 'The Borneo rainforest is under threat from unsustainable logging practices.' },
      { marks: '2', descriptor: 'Outlines how the research question is worthy of investigation (brief detail).', exemplar: 'The Borneo rainforest is under threat from unsustainable logging practices. Large areas of forest are being cleared.' },
      { marks: '3', descriptor: 'Describes how the research question is worthy of investigation — at least one argument/factor considered in detail, without reasoning why the RQ should be investigated.', exemplar: 'The Borneo rainforest is under threat from unsustainable logging practices. Large areas of forest are being cleared. When this happens the soil is eroded, leading to land degradation.' },
      { marks: '4', descriptor: 'Justifies why the research question is worthy of investigation — at least one factor in detail, along with reasoning why the RQ should be investigated.', exemplar: '…Without plants to keep the soil in place, soil is eroded, leading to land degradation. These actions cause a loss of biodiversity. Selective logging could be used to limit the loss of biodiversity as habitats could be saved, and it is therefore important to investigate.' },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: 'It will be difficult to collect primary data from a large area such as the rainforest in Sabah.',
    keyConcepts: ['investigation', 'methods', 'feasibility'],
    keywords: ['challenge', 'primary data', 'large area', 'rainforest', 'Sabah', 'difficult to collect'],
    feedbackHit: 'Well done — you outlined one challenge with a single elaborated impact.',
    feedbackMiss: 'State one challenge (1), then elaborate on its impact for 2, e.g. it will be difficult to collect primary data from a large area such as the rainforest in Sabah.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one challenge of the investigation (one sentence hinting at a single impact).', exemplar: 'It will be difficult to collect primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge of the investigation — a single impact that is elaborated on (brief detail).', exemplar: 'It will be difficult to collect primary data from a large area such as the rainforest in Sabah.' },
    ],
  },

  q3_d: {
    marks: 2,
    exemplar: 'Measure the difference in soil quality between an area where selective logging has taken place and an area that has been totally cleared.',
    keyConcepts: ['investigation', 'sources', 'primary data'],
    keywords: ['primary source', 'soil quality', 'measure', 'selective logging', 'cleared area', 'fieldwork'],
    feedbackHit: 'Well done — you outlined one primary source (other than interviews) with a single elaborated impact.',
    feedbackMiss: 'State one primary source other than interview responses (1), then elaborate it for 2, e.g. measure the difference in soil quality between a selectively-logged and a totally-cleared area.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one primary source, other than interview responses, that could be used to investigate the research question.', exemplar: 'Measure the difference in soil quality.' },
      { marks: '2', descriptor: 'Outlines one primary source, other than interview responses — a single impact that is elaborated on (brief detail).', exemplar: 'Measure the difference in soil quality between an area where selective logging has taken place and an area that has been totally cleared.' },
    ],
  },

  q3_e: {
    marks: 2,
    exemplar: 'To use journal articles on sustainable logging methods to see how technology can be used to combat unsustainable logging methods.',
    keyConcepts: ['investigation', 'sources', 'secondary data'],
    keywords: ['secondary source', 'journal articles', 'sustainable logging', 'technology', 'unsustainable methods'],
    feedbackHit: 'Well done — you outlined one secondary source with a single elaborated impact.',
    feedbackMiss: 'State one secondary source (1), then elaborate it for 2, e.g. journal articles on sustainable logging methods, to see how technology can combat unsustainable logging.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one secondary source that could be used to investigate the research question.', exemplar: 'To use journal articles on sustainable logging methods.' },
      { marks: '2', descriptor: 'Outlines one secondary source — a single impact that is elaborated on (brief detail).', exemplar: 'To use journal articles on sustainable logging methods to see how technology can be used to combat unsustainable logging methods.' },
    ],
  },

  q4_: {
    marks: 4,
    exemplar:
      'As the Amazon is a carbon sink, reducing deforestation in the rainforest will maintain carbon stores, keeping CO₂ out of the atmosphere. Preventing an increase in carbon in the atmosphere allows longwave radiation to escape, therefore reducing further global warming.',
    keyConcepts: ['systems', 'sustainability', 'causality', 'management & intervention'],
    keywords: ['biome', 'rainforest', 'Amazon', 'carbon sink', 'deforestation', 'carbon stores', 'CO₂', 'longwave radiation', 'global warming'],
    feedbackHit: 'Well done — you explained in detail, with reasons, how protecting one biome reduces a cause of climate change.',
    feedbackMiss: 'Build from stating an impact (1) → outlining (2) → describing in detail (3) → explaining with reasons (4), e.g. the Amazon is a carbon sink → reducing deforestation maintains carbon stores → less CO₂ → longwave radiation escapes → less warming. If you select a different biome than you discuss, you are marked on what you write.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how protecting one biome could reduce one cause of global climate change (a single impact hinted at).', exemplar: 'Protecting the rainforest will keep some carbon out of the atmosphere.' },
      { marks: '2', descriptor: 'Outlines how protecting one biome could reduce one cause of global climate change (a single impact elaborated; brief detail).', exemplar: 'Reducing deforestation in the rainforest will store carbon, keeping it out of the atmosphere.' },
      { marks: '3', descriptor: 'Describes how protecting one biome could reduce one cause — an impact considered in detail without comprehensive reasons (an example may support the description).', exemplar: 'Reducing deforestation in the rainforest will maintain carbon stores, keeping CO₂ out of the atmosphere. Preventing an increase in carbon in the atmosphere allows longwave radiation to escape.' },
      { marks: '4', descriptor: 'Explains how protecting one biome could reduce one cause — one impact considered in detail, along with reasons (an example may support but is not essential).', exemplar: 'As the Amazon is a carbon sink, reducing deforestation in the rainforest will maintain carbon stores, keeping CO₂ out of the atmosphere. Preventing an increase in carbon in the atmosphere allows longwave radiation to escape, therefore reducing further global warming.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'Good evening, and welcome to Diversity Week! Tonight we celebrate the people who have chosen to make our town their home. Migrants have helped to offset our ageing population. Germany had an ageing population and a low birth rate of 1.3 per woman. This created a large dependent population with older people relying on a smaller economically active population. Migration from Syria to Germany was mainly young people in the first wave of refugees. The 1 million migrants welcomed created a more balanced population as most migrants could help the economy grow. Secondly, Syrian migrants have assimilated, with many speaking German and helping to fill labour shortages, which has decreased the dependency ratio and strengthened our communities. So as we celebrate this week, let us remember: migration does not weaken us — it renews us. Thank you.',
    keyConcepts: ['global interactions', 'culture', 'disparity & equity', 'communication'],
    keywords: ['migration', 'positive effects', 'ageing population', 'birth rate', 'dependency ratio', 'labour shortages', 'assimilate', 'economy', 'opening statement', 'concluding statement', 'speech'],
    feedbackHit: 'Well done — a speech-style address explaining TWO positive effects of migration with examples, plus an opening and a concluding statement.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6 — explaining only ONE benefit caps at 4), Format /2, Communicating /6, Organization /4. Explain two positive effects with examples; include an opening and a concluding statement and write in speech style (address the audience, use rhetorical devices).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines a benefit of migration, using limited examples and limited relevant terminology. (A response referring to only one benefit can still earn 1.)', exemplar: 'Migrants have helped to offset our ageing population.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes two benefits of migration, using satisfactory examples and appropriate relevant terminology (little or no reasoning).', exemplar: 'Migrants have helped to offset the negative effects of our ageing population. Germany had an ageing population and a low birth rate. Migration from Syria to Germany was mainly young people.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains two benefits of migration, using accurate examples and appropriate relevant terminology.', exemplar: 'Migrants have helped to offset our ageing population. Germany had an ageing population and a low birth rate of 1.3 per woman. This created a large dependent population. Migration from Syria to Germany was mainly young people in the first wave of refugees. The 1 million migrants we welcomed created a more balanced population as most migrants could help our economy grow.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains two benefits of migration, using accurate and effective examples and appropriate relevant terminology (clear reasoning; both benefits covered in detail).', exemplar: '…with older people relying on a smaller economically active population and a low birth rate. The 1 million migrants we welcomed created a more balanced population. Syrian migrants have assimilated, with many speaking German and helping to fill labour shortages, which has decreased the dependency ratio and created a more balanced population.' },
      { marks: 'Format 1', descriptor: 'One of: an opening statement; a concluding/summary statement appropriate to a presentation.' },
      { marks: 'Format 2', descriptor: 'Both: an opening statement AND a concluding/summary statement appropriate to a presentation.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a presentation (reads more formally, like an essay); basic and not engaging; text may be very short.' },
      { marks: 'Communicating 3–4', descriptor: 'Style/language occasionally appropriate; reads at times like an essay and at times like a speech; some language features (hyperbole, metaphor, rhetorical questions, concise sentences, emotive vocabulary) engage the audience.' },
      { marks: 'Communicating 5–6', descriptor: 'Style/language consistently appropriate — reads like a speech throughout (engages and appeals to the audience, simpler language, signposts such as “as you can see”, “firstly”, “secondly”; uses personal pronouns/first person; language features often used to engage).' },
      { marks: 'Organization 1', descriptor: 'Structure rarely effective and appropriate to audience/purpose; ideas rarely build logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structure occasionally effective; ideas occasionally build logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structure mainly effective; ideas frequently build logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structure consistently effective; ideas consistently build in a clear, logical manner; always uses effective transitions.' },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: 'Ellen MacArthur Foundation.',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['Ellen MacArthur Foundation', 'origin', 'source', 'www.ellenmacarthurfoundation.org'],
    feedbackHit: 'Correct — the origin/author of the graph.',
    feedbackMiss: 'State the origin of the graph, e.g. Ellen MacArthur Foundation (or www.ellenmacarthurfoundation.org). Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Ellen MacArthur Foundation', 'www.ellenmacarthurfoundation.org'],
  },

  q6_b: {
    marks: 3,
    exemplar:
      'As clothing sales increase, clothing use decreases. We have more clothes but the number of times an item is worn is decreasing.',
    keyConcepts: ['patterns & trends', 'globalization', 'sustainability'],
    keywords: ['inverse relationship', 'clothing sales increase', 'clothing use decreases', 'more clothes', 'worn fewer times', 'negative correlation'],
    feedbackHit: 'Well done — you described the inverse relationship between clothing sales and clothing use.',
    feedbackMiss: 'Build from stating the simple relationship (1) → outlining it (2) → describing it (3). Reference to data from the graph is likely but not essential if the level of detail is sufficient.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account.',
    rubricBands: [
      { marks: '1', descriptor: 'States the relationship between clothing sales and clothing use (a simple relationship hinted at).', exemplar: 'As one increases, the other decreases.' },
      { marks: '2', descriptor: 'Outlines the relationship between clothing sales and clothing use (a simple relationship elaborated; brief detail).', exemplar: 'As one increases, the other decreases. We have more clothes but the number of times an item is worn is decreasing.' },
      { marks: '3', descriptor: 'Describes the relationship between clothing sales and clothing use (named series, elaborated).', exemplar: 'As clothing sales increase, clothing use decreases. We have more clothes but the number of times an item is worn is decreasing.' },
    ],
  },

  q7_: {
    marks: 4,
    exemplar:
      'It provides statistics on the number of second-hand textiles that end up as landfill in Ghana. It helps the government official to understand the extent of the impact that second-hand clothing has on people and the environment. The source is therefore valuable because the government official would need to use reliable and accurate statistics to quantify the true impacts of second-hand clothing.',
    keyConcepts: ['source evaluation', 'value', 'globalization', 'sustainability'],
    keywords: ['value', 'limitation', 'statistics', 'second-hand textiles', 'landfill', 'Ghana', 'extent of impact', 'reliable', 'quantify'],
    feedbackHit: 'Well done — you explained one value (or limitation) of the infographic to the government official, with reasoning.',
    feedbackMiss: 'Build from stating one value/limitation (1) → outlining (2) → describing in detail (3) → explaining with reasons (4), e.g. it provides statistics on second-hand textiles ending up as landfill in Ghana, so the official can quantify the true impact.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value or one limitation of the infographic to the government official.', exemplar: 'It provides statistics.' },
      { marks: '2', descriptor: 'Outlines one value or one limitation of the infographic (a single point elaborated; brief detail).', exemplar: 'It provides statistics on the number of second-hand textiles that end up as landfill in Ghana.' },
      { marks: '3', descriptor: 'Describes one value or one limitation in detail, without comprehensive reasons (an example may support).', exemplar: 'It provides statistics on the number of second-hand textiles that end up as landfill in Ghana. It helps the government official to understand the extent of the impact that second-hand clothing has on people and the environment.' },
      { marks: '4', descriptor: 'Explains one value or one limitation in detail, along with reason(s) (an example may support but is not essential).', exemplar: '…The source is therefore valuable because the government official would need to use reliable and accurate statistics to quantify the true impacts of second-hand clothing.' },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'Every person has a choice to influence the issue of fast fashion. One way they can do this is to buy fewer clothes. If each individual buys less and buys better-quality clothing, then the reduced demand will drive down production of fast fashion. With a reduction in fast fashion, individuals will throw less clothing out, which means we will each contribute less to landfill.',
    keyConcepts: ['power', 'sustainability', 'management & intervention', 'causality'],
    keywords: ['individual responsibility', 'choice', 'buy fewer clothes', 'better quality', 'reduced demand', 'drive down production', 'less landfill'],
    feedbackHit: 'Well done — you justified, with reasoning, how individual responsibility can reduce the impact of fast fashion.',
    feedbackMiss: 'Build from stating a simple argument (1) → outlining (2) → describing one argument in detail (3) → justifying with reasons (4), e.g. each person buying fewer, better-quality clothes reduces demand → less production → less landfill.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how the responsibility to reduce the impact of fast fashion lies with the individual (limited argument or detail).', exemplar: 'Every person has a choice to influence the issue of fast fashion.' },
      { marks: '2', descriptor: 'Outlines how the responsibility lies with the individual (a single elaborated point; brief detail).', exemplar: 'Every person has a choice to influence the issue of fast fashion. One way they can do this is to buy fewer clothes.' },
      { marks: '3', descriptor: 'Describes how the responsibility lies with the individual — one argument in detail without comprehensive reasons (an example may support).', exemplar: '…One way they can do this is to buy fewer clothes. If each individual buys less, then the reduced demand will drive down production of fast fashion.' },
      { marks: '4', descriptor: 'Justifies how the responsibility lies with the individual — one argument in detail, along with reasons (an example may support but is not essential).', exemplar: '…If each individual buys less and buys better quality clothing, then the reduced demand will drive down production of fast fashion. With a reduction in fast fashion, individuals will throw less clothing out, which means we will each contribute less to landfill.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Trade is only partly environmentally and socially sustainable; whether it is depends on how it is regulated and on the choices of producers and consumers. On one hand, trade brings social benefits: the global second-hand clothing trade supports livelihoods — 5000 retailers work at the Kantamanto market in Accra every day, and the textile trade is worth $4.6 billion. On the other hand, trade is environmentally unsustainable: every year approximately 4 million tonnes of used textiles are shipped across the planet, and 40% of the clothing reaching Kantamanto is so poor in quality it ends up as landfill on the banks of the Korle Lagoon, while globally an estimated 85% of all textiles end up in landfill each year. The fast-fashion model worsens this — clothing sales have nearly doubled since 2000 while clothing use has fallen, so more is made and discarded. Considering different perspectives, trade can be made more socially and environmentally sustainable through fairer wages, better-quality goods and recycling, but in its current fast-fashion form it is environmentally unsustainable and only partially socially sustainable. To a moderate extent, then, trade is sustainable — but only where its social gains are not outweighed by its environmental costs.',
    keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'causality', 'synthesis'],
    keywords: ['trade', 'environmental sustainability', 'social sustainability', 'fast fashion', 'Kantamanto', 'landfill', 'textiles', 'livelihoods', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing whether trade is environmentally and socially sustainable, with balanced perspectives, examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Refer to BOTH social and environmental sustainability, give ≥2 perspectives with examples, and synthesise into a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline; limited examples and terminology; likely to refer to limited details on trade, social and/or environmental sustainability.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description; satisfactory examples and appropriate terminology; likely to refer to one of social OR environmental sustainability.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation (reasons included); accurate examples; refers to BOTH social and environmental sustainability; terminology accurate and effective in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation; accurate and effective examples referenced in detail; refers to BOTH social and environmental sustainability; terminology accurate and effective throughout.' },
      { marks: 'Format 1', descriptor: 'Two of: introduction, a main body of argument, a conclusion — as separate paragraphs (otherwise 0).' },
      { marks: 'Format 2', descriptor: 'All three: introduction, a main body of argument and a conclusion — as separate paragraphs.' },
      { marks: 'Communicating 1', descriptor: 'Style/language rarely appropriate to the audience and purpose of informing; rarely consistent with an essay; may be very short.' },
      { marks: 'Communicating 2', descriptor: 'Style/language occasionally appropriate; not always consistent; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'Style/language consistently appropriate to an essay — formal and clear throughout.' },
      { marks: 'Organization 1', descriptor: 'Organizational structure rarely effective; rarely uses effective transitions; may be very short.' },
      { marks: 'Organization 2', descriptor: 'Organizational structure occasionally effective; ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Organizational structure consistently effective; paragraphs/ideas build in a clear and logical manner; uses effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis; summarizes to a limited extent; considered only superficially; may not reach a conclusion or fully answer the question.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis (at least two on the sustainability of trade, with development); summarizes to make clear arguments; a conclusion expected but likely not fully developed.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments (substantial development); ideas on social and environmental sustainability combined into a clear, coherent conclusion.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed, balanced discussion and synthesizes information; ideas combined into a clear, coherent and convincing conclusion giving a judgment on whether trade is environmentally and socially sustainable.' },
    ],
  },
}
