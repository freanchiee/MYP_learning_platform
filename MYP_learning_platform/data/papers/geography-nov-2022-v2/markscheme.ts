import 'server-only'

/**
 * MYP Geography — November 2022 · Set 2 ISOMORPHIC VARIANT (v2) mark scheme.
 * Rubric-banded, "best fit". Mirrors the source's interfaces/exports exactly; same keys
 * and same marks as the source. The rubric band DESCRIPTORS are unchanged (the band
 * criteria don't change between variants); only the `exemplar`s, keyConcepts, keywords and
 * feedback are rewritten for the new scenarios:
 *   • Task 1: Loess Plateau soil erosion / reforestation NGO action plan / peatland biome.
 *   • Task 2: Heritage Festival speech celebrating migration.
 *   • Task 3: the global plastic-waste / recycling trade (Bangun, Java, Indonesia).
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
    exemplar: 'Deforestation (tree-clearing).',
    keyConcepts: ['causality', 'geographic processes', 'sustainability'],
    keywords: ['deforestation', 'tree-clearing', 'over-cultivation', 'overgrazing', 'population growth', 'human factor', 'land degradation'],
    feedbackHit: 'Correct — a valid human factor that has caused land degradation on the Loess Plateau.',
    feedbackMiss: 'Identify one human factor, e.g. deforestation/tree-clearing, over-cultivation, overgrazing, population growth. Note: identifying an unsustainable practice on its own without naming the human cause scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Deforestation', 'Tree-clearing', 'Over-cultivation', 'Overgrazing', 'Population growth'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Heavy summer rainfall.',
    keyConcepts: ['geographic processes', 'patterns & trends', 'sustainability'],
    keywords: ['heavy rainfall', 'summer rain', 'drought', 'strong winds', 'loose loess soil', 'natural factor', 'land degradation'],
    feedbackHit: 'Correct — a valid natural factor that has caused land degradation on the Loess Plateau.',
    feedbackMiss: 'Identify one natural factor, e.g. heavy summer rainfall, drought, strong winds, the loose loess soil structure. Accept any valid response.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Heavy summer rainfall', 'Drought', 'Strong winds', 'Loose loess soil'],
  },

  q2_: {
    marks: 8,
    exemplar:
      'The action plan uses both economic and social indices to measure the progress of the work in Shaanxi, including % in extreme poverty and % in arable land — this will provide a balanced review of the project’s aims. However, interviewing only 2 people from two different villages will not provide the NGO with sufficient data to analyse: people within villages will have varying experiences, so this gives a limited representation of the project’s impact on the community. Although the action plan uses a small sample size for interviews, overall the use of a range of indices in the action plan will allow the investigation to be successful.',
    keyConcepts: ['investigation', 'management & intervention', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'range of indices', 'economic indices', 'social indices', 'arable land', 'extreme poverty', 'sample size', 'two villages', 'representation'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part to access full marks; suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the investigation (one sentence referring to a single strength).', exemplar: 'The action plan uses a range of indices.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the investigation (a single elaborated strength; brief detail). 3+ outlined strengths can earn 3.', exemplar: 'The action plan uses both economic and social indices including % in extreme poverty and % in arable land.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the investigation — elaborated in additional detail with reasoning.', exemplar: 'The action plan uses both economic and social indices to measure the progress of their work in Shaanxi, including % in extreme poverty and % in arable land. This will provide a balanced review of the project’s aims.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the investigation (one sentence referring to a single limitation).', exemplar: 'The sample size for the interviews is not large enough.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the investigation (a single elaborated limitation; brief detail). 3+ outlined limitations can earn 3.', exemplar: 'Interviewing 2 people from two different villages will not provide the NGO with sufficient data to analyse.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) — elaborated in additional detail with reasoning (alternative methods count as addressing limitations).', exemplar: 'Interviewing 2 people from two different villages will not provide the NGO with sufficient data to analyse. People within villages will have varying experiences, so this will provide a limited representation of the project’s impact on the community.' },
      { marks: 'Appraisal 1', descriptor: 'An appraisal is stated (a summary of strengths and limitations or a brief judgment; can appear anywhere in the response).', exemplar: 'Overall, the strengths of the action plan will allow the investigation to be successful.' },
      { marks: 'Appraisal 2', descriptor: 'An appraisal is outlined — weighs up positive and negative points (implicitly or explicitly) and makes an overall judgement on the investigative process.', exemplar: 'Although the action plan uses a small sample size for interviews, overall, the use of a range of indices in the action plan will allow the investigation to be successful.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'How can peatland-rewetting technology be used in the Flow Country of Scotland to reduce carbon loss from drained peat?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'place', 'product', 'statement of inquiry', 'peatland rewetting', 'technology'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a place and product/technology) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (e.g. specifies a location and product/technology) scores 2. Repeating the SoI with a question term at the start scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Repeating the SoI with a question term at the start scores 0.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry.', exemplar: 'How can peatland-rewetting technology be used to reduce carbon loss? (clear and connected, but lacks focus — no location specified)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (focuses on a place and product).', exemplar: 'How can peatland-rewetting technology be used in the Flow Country of Scotland to reduce carbon loss from drained peat?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'The Flow Country peatlands are under threat from past drainage and forestry. Large areas have been drained for plantations. Without a high water table, the exposed peat dries out and decomposes, releasing stored carbon. These actions cause both a loss of habitat and a release of greenhouse gases. Rewetting technology could be used to raise the water table and lock the carbon back in, so it is therefore important to investigate.',
    keyConcepts: ['investigation', 'relevance', 'causality', 'reasoning'],
    keywords: ['Flow Country', 'peatland', 'drainage', 'drained peat', 'carbon release', 'habitat loss', 'rewetting', 'worthy of investigation'],
    feedbackHit: 'Well done — you justified, with reasoning, why the RQ is worthy of investigation.',
    feedbackMiss: 'Build from stating a simple reason (1) → outlining (2) → describing a factor in detail (3) → justifying with at least one factor in detail plus reasoning why the RQ should be investigated (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States why the research question is worthy of investigation (a single sentence with a simple comment on the RQ and its importance).', exemplar: 'The Flow Country peatlands are under threat from past drainage.' },
      { marks: '2', descriptor: 'Outlines how the research question is worthy of investigation (brief detail).', exemplar: 'The Flow Country peatlands are under threat from past drainage. Large areas have been drained for plantations.' },
      { marks: '3', descriptor: 'Describes how the research question is worthy of investigation — at least one argument/factor considered in detail, without reasoning why the RQ should be investigated.', exemplar: 'The Flow Country peatlands are under threat from drainage. Large areas have been drained for plantations. When this happens the exposed peat dries out and decomposes, releasing stored carbon.' },
      { marks: '4', descriptor: 'Justifies why the research question is worthy of investigation — at least one factor in detail, along with reasoning why the RQ should be investigated.', exemplar: '…Without a high water table the exposed peat dries out and decomposes, releasing stored carbon. These actions cause both habitat loss and a release of greenhouse gases. Rewetting technology could lock the carbon back in, so it is therefore important to investigate.' },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: 'It will be difficult to collect primary data from a large, waterlogged area such as the Flow Country peatlands.',
    keyConcepts: ['investigation', 'methods', 'feasibility'],
    keywords: ['challenge', 'primary data', 'large area', 'waterlogged', 'peatland', 'Flow Country', 'difficult to collect'],
    feedbackHit: 'Well done — you outlined one challenge with a single elaborated impact.',
    feedbackMiss: 'State one challenge (1), then elaborate on its impact for 2, e.g. it will be difficult to collect primary data from a large, waterlogged area such as the Flow Country peatlands.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one challenge of the investigation (one sentence hinting at a single impact).', exemplar: 'It will be difficult to collect primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge of the investigation — a single impact that is elaborated on (brief detail).', exemplar: 'It will be difficult to collect primary data from a large, waterlogged area such as the Flow Country peatlands.' },
    ],
  },

  q3_d: {
    marks: 2,
    exemplar: 'Measure the difference in water-table depth between an area where peatland rewetting has taken place and an area that has been left drained.',
    keyConcepts: ['investigation', 'sources', 'primary data'],
    keywords: ['primary source', 'water-table depth', 'measure', 'rewetting', 'drained area', 'fieldwork'],
    feedbackHit: 'Well done — you outlined one primary source (other than interviews) with a single elaborated impact.',
    feedbackMiss: 'State one primary source other than interview responses (1), then elaborate it for 2, e.g. measure the difference in water-table depth between a re-wetted and a drained stretch of peatland.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one primary source, other than interview responses, that could be used to investigate the research question.', exemplar: 'Measure the difference in water-table depth.' },
      { marks: '2', descriptor: 'Outlines one primary source, other than interview responses — a single impact that is elaborated on (brief detail).', exemplar: 'Measure the difference in water-table depth between an area where peatland rewetting has taken place and an area that has been left drained.' },
    ],
  },

  q3_e: {
    marks: 2,
    exemplar: 'To use journal articles on peatland-rewetting technology to see how technology can be used to combat unsustainable drainage.',
    keyConcepts: ['investigation', 'sources', 'secondary data'],
    keywords: ['secondary source', 'journal articles', 'peatland rewetting', 'technology', 'unsustainable drainage'],
    feedbackHit: 'Well done — you outlined one secondary source with a single elaborated impact.',
    feedbackMiss: 'State one secondary source (1), then elaborate it for 2, e.g. journal articles on peatland-rewetting technology, to see how technology can combat unsustainable drainage.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one secondary source that could be used to investigate the research question.', exemplar: 'To use journal articles on peatland-rewetting technology.' },
      { marks: '2', descriptor: 'Outlines one secondary source — a single impact that is elaborated on (brief detail).', exemplar: 'To use journal articles on peatland-rewetting technology to see how technology can be used to combat unsustainable drainage.' },
    ],
  },

  q4_: {
    marks: 4,
    exemplar:
      'As Arctic tundra stores huge amounts of carbon in frozen permafrost peat, protecting the tundra keeps the ground frozen and maintains those carbon stores, keeping CO₂ and methane out of the atmosphere. Preventing the permafrost from thawing stops the release of these greenhouse gases, therefore reducing further global warming.',
    keyConcepts: ['systems', 'sustainability', 'causality', 'management & intervention'],
    keywords: ['biome', 'Arctic tundra', 'permafrost', 'frozen peat', 'carbon store', 'thaw', 'CO₂', 'methane', 'global warming'],
    feedbackHit: 'Well done — you explained in detail, with reasons, how protecting one biome reduces a cause of climate change.',
    feedbackMiss: 'Build from stating an impact (1) → outlining (2) → describing in detail (3) → explaining with reasons (4), e.g. Arctic tundra stores carbon in frozen permafrost → protecting it keeps the ground frozen → carbon stays locked away → less CO₂/methane → less warming. If you select a different biome than you discuss, you are marked on what you write.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how protecting one biome could reduce one cause of global climate change (a single impact hinted at).', exemplar: 'Protecting the tundra will keep some carbon out of the atmosphere.' },
      { marks: '2', descriptor: 'Outlines how protecting one biome could reduce one cause of global climate change (a single impact elaborated; brief detail).', exemplar: 'Protecting the Arctic tundra keeps the permafrost frozen, storing carbon and keeping it out of the atmosphere.' },
      { marks: '3', descriptor: 'Describes how protecting one biome could reduce one cause — an impact considered in detail without comprehensive reasons (an example may support the description).', exemplar: 'Protecting the Arctic tundra keeps the permafrost frozen and maintains its carbon stores, keeping CO₂ and methane out of the atmosphere. Preventing the permafrost from thawing stops these gases being released.' },
      { marks: '4', descriptor: 'Explains how protecting one biome could reduce one cause — one impact considered in detail, along with reasons (an example may support but is not essential).', exemplar: 'As Arctic tundra stores huge amounts of carbon in frozen permafrost peat, protecting the tundra keeps the ground frozen and maintains those carbon stores, keeping CO₂ and methane out of the atmosphere. Preventing the permafrost from thawing stops the release of these greenhouse gases, therefore reducing further global warming.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'Good evening, and welcome to our Heritage Festival! Tonight we celebrate the people who have chosen to make our city their home. Migrants have helped to offset our ageing population. Germany had an ageing population and a low birth rate of 1.3 per woman. This created a large dependent population with older people relying on a smaller economically active population. Migration from Syria to Germany was mainly young people in the first wave of refugees. The 1 million migrants welcomed created a more balanced population as most migrants could help the economy grow. Secondly, Syrian migrants have assimilated, with many learning German and helping to fill labour shortages in our factories and care homes, which has decreased the dependency ratio and strengthened our community. So as we celebrate this festival, let us remember: migration does not weaken us — it renews us. Thank you.',
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
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains two benefits of migration, using accurate and effective examples and appropriate relevant terminology (clear reasoning; both benefits covered in detail).', exemplar: '…with older people relying on a smaller economically active population and a low birth rate. The 1 million migrants we welcomed created a more balanced population. Syrian migrants have assimilated, with many learning German and helping to fill labour shortages in our factories and care homes, which has decreased the dependency ratio and created a more balanced population.' },
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
    exemplar: 'OECD Global Plastics Outlook.',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['OECD', 'Global Plastics Outlook', 'origin', 'source'],
    feedbackHit: 'Correct — the origin/author of the data.',
    feedbackMiss: 'State the origin of the data, e.g. the OECD Global Plastics Outlook. Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['OECD Global Plastics Outlook', 'OECD'],
  },

  q6_b: {
    marks: 3,
    exemplar:
      'As the amount of plastic waste produced increases, the share that is recycled decreases. We produce more plastic but recycle a smaller proportion of it — the recycled share fell from 14% in 2010 to 9% in 2022.',
    keyConcepts: ['patterns & trends', 'globalization', 'sustainability'],
    keywords: ['inverse relationship', 'plastic waste increases', 'recycled share decreases', 'more plastic', 'smaller proportion recycled', 'negative correlation'],
    feedbackHit: 'Well done — you described the inverse relationship between the amount of plastic waste produced and the share recycled.',
    feedbackMiss: 'Build from stating the simple relationship (1) → outlining it (2) → describing it (3). Reference to data from the chart is likely but not essential if the level of detail is sufficient.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account.',
    rubricBands: [
      { marks: '1', descriptor: 'States the relationship between the plastic waste produced and the share recycled (a simple relationship hinted at).', exemplar: 'As one increases, the other decreases.' },
      { marks: '2', descriptor: 'Outlines the relationship between the plastic waste produced and the share recycled (a simple relationship elaborated; brief detail).', exemplar: 'As one increases, the other decreases. We produce more plastic but recycle a smaller proportion of it.' },
      { marks: '3', descriptor: 'Describes the relationship between the plastic waste produced and the share recycled (named values, elaborated).', exemplar: 'As the amount of plastic waste produced increases, the share that is recycled decreases. The recycled share fell from 14% in 2010 to 9% in 2022.' },
    ],
  },

  q7_: {
    marks: 4,
    exemplar:
      'It provides figures on how much plastic waste is imported into Indonesia each year, peaking at about 320 thousand tonnes in 2017. It helps the government official to understand the scale of the impact that imported plastic has on people and the environment. The source is therefore valuable because the government official would need to use reliable and accurate figures to quantify the true scale of the plastic-waste problem and justify a policy response.',
    keyConcepts: ['source evaluation', 'value', 'globalization', 'sustainability'],
    keywords: ['value', 'limitation', 'figures', 'imported plastic waste', 'Indonesia', 'scale of impact', 'reliable', 'quantify'],
    feedbackHit: 'Well done — you explained one value (or limitation) of the graph to the government official, with reasoning.',
    feedbackMiss: 'Build from stating one value/limitation (1) → outlining (2) → describing in detail (3) → explaining with reasons (4), e.g. it provides figures on plastic-waste imports into Indonesia, so the official can quantify the scale of the problem.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value or one limitation of the graph to the government official.', exemplar: 'It provides figures.' },
      { marks: '2', descriptor: 'Outlines one value or one limitation of the graph (a single point elaborated; brief detail).', exemplar: 'It provides figures on how much plastic waste is imported into Indonesia each year.' },
      { marks: '3', descriptor: 'Describes one value or one limitation in detail, without comprehensive reasons (an example may support).', exemplar: 'It provides figures on how much plastic waste is imported into Indonesia each year, peaking at about 320 thousand tonnes in 2017. It helps the government official to understand the scale of the impact that imported plastic has on people and the environment.' },
      { marks: '4', descriptor: 'Explains one value or one limitation in detail, along with reason(s) (an example may support but is not essential).', exemplar: '…The source is therefore valuable because the government official would need to use reliable and accurate figures to quantify the true scale of the plastic-waste problem and justify a policy response.' },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'Every person has a choice to influence the issue of plastic waste. One way they can do this is to refuse single-use plastics and reuse containers. If each individual buys less single-use plastic, then the reduced demand will drive down production of plastic packaging. With less plastic being made, individuals will throw less away, which means less plastic will be exported abroad and dumped, so we will each contribute less to the problem.',
    keyConcepts: ['power', 'sustainability', 'management & intervention', 'causality'],
    keywords: ['individual responsibility', 'choice', 'refuse single-use plastic', 'reuse', 'reduced demand', 'drive down production', 'less dumped'],
    feedbackHit: 'Well done — you justified, with reasoning, how individual responsibility can reduce the impact of plastic waste.',
    feedbackMiss: 'Build from stating a simple argument (1) → outlining (2) → describing one argument in detail (3) → justifying with reasons (4), e.g. each person refusing single-use plastics reduces demand → less production → less plastic dumped.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how the responsibility to reduce the impact of plastic waste lies with the individual (limited argument or detail).', exemplar: 'Every person has a choice to influence the issue of plastic waste.' },
      { marks: '2', descriptor: 'Outlines how the responsibility lies with the individual (a single elaborated point; brief detail).', exemplar: 'Every person has a choice to influence the issue of plastic waste. One way they can do this is to refuse single-use plastics.' },
      { marks: '3', descriptor: 'Describes how the responsibility lies with the individual — one argument in detail without comprehensive reasons (an example may support).', exemplar: '…One way they can do this is to refuse single-use plastics and reuse containers. If each individual buys less single-use plastic, then the reduced demand will drive down production of plastic packaging.' },
      { marks: '4', descriptor: 'Justifies how the responsibility lies with the individual — one argument in detail, along with reasons (an example may support but is not essential).', exemplar: '…If each individual buys less single-use plastic, then the reduced demand will drive down production of plastic packaging. With less plastic being made, individuals will throw less away, which means less plastic will be exported abroad and dumped, so we will each contribute less to the problem.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Trade is only partly environmentally and socially sustainable; whether it is depends on how it is regulated and on the choices of producers and consumers. On one hand, the global recycling trade brings social and economic benefits: importing and sorting plastic waste supports livelihoods, and recoverable materials have real value, so communities and businesses gain income from handling the world’s waste. On the other hand, the trade is environmentally unsustainable: wealthy countries ship their plastic waste to lower-income countries such as Indonesia — imports peaked at around 320 thousand tonnes in 2017 — and a large share is so contaminated it cannot be recycled, ending up dumped or burned near villages like Bangun in Java, polluting soil, water and air. The fast-consumption model worsens this — the amount of plastic waste produced keeps rising while the share recycled has fallen from 14% in 2010 to 9% in 2022, so more is made and discarded. Considering different perspectives, trade can be made more socially and environmentally sustainable through better waste regulation, import bans on contaminated loads and investment in domestic recycling, but in its current form the plastic-waste trade is environmentally unsustainable and only partially socially sustainable. To a moderate extent, then, trade is sustainable — but only where its social gains are not outweighed by its environmental costs.',
    keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'causality', 'synthesis'],
    keywords: ['trade', 'environmental sustainability', 'social sustainability', 'plastic waste', 'recycling trade', 'Indonesia', 'Bangun', 'dumped', 'livelihoods', 'perspectives', 'conclusion', 'synthesis'],
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
