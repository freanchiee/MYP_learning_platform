import 'server-only'

/**
 * MYP Geography — November 2020 · VARIANT 1 mark scheme (rubric-banded, "best fit").
 *
 * Construct mirror of geography-nov-2020: SAME keys, SAME marks, SAME rubricBand
 * DESCRIPTORS. Only the exemplars/keywords/feedback are rewritten for the NEW scenario
 * (Japan→Kenya clean-water aid; Japan/Chile subduction hazards; water footprints). The two
 * extended responses marked across several criterion strands (Q5b /16 and Q8 /24) list EVERY
 * strand in `rubricBands`; the strand maxima sum to the question total.
 */

export interface RubricBand {
  marks: string
  descriptor: string
  exemplar?: string
}

export interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
  commandTerm?: string
  commandTermDefinition?: string
  rubricBands?: RubricBand[]
}

export type MSRecord = Record<string, MSEntry>

export const MS: MSRecord = {
  q1_a: {
    marks: 1,
    exemplar: 'Water & Sanitation',
    keyConcepts: ['globalization', 'development', 'aid'],
    keywords: ['Water & Sanitation', 'aid', 'funding', 'largest', 'Source A'],
    feedbackHit: 'Correct — Water & Sanitation received the largest share of Japanese aid (54%).',
    feedbackMiss: 'Read the funding bar chart in Source A: the largest single category is Water & Sanitation (54%).',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Water & Sanitation', 'Water and Sanitation'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Life expectancy at birth',
    keyConcepts: ['development', 'HDI'],
    keywords: ['HDI', 'life expectancy at birth', 'indicator'],
    feedbackHit: 'Correct — the third HDI indicator is life expectancy at birth.',
    feedbackMiss: 'The three HDI indicators are GNI per capita, the Education Index and life expectancy at birth.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose an answer from a number of possibilities.',
    blankAnswers: ['Life expectancy at birth', 'life expectancy at birth'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Investing in clean water and sanitation in Kenya means more communities have a safe water point nearby, which reduces the spread of waterborne diseases such as cholera and diarrhoea. With fewer people falling ill, children miss fewer days of school and adults miss less work, so families can earn more and pay more tax. This tax can be reinvested into the local community, in the form of clinics and schools, benefiting the community in the short and long term with increased life expectancy.',
    keyConcepts: ['globalization', 'aid', 'development', 'causality'],
    keywords: ['clean water', 'sanitation', 'waterborne disease', 'fewer days off', 'income', 'tax', 'reinvested', 'clinics', 'life expectancy'],
    feedbackHit: 'Well done — you explained one benefit of investing aid in clean water and sanitation in detail with reasons.',
    feedbackMiss: 'Build from stating a benefit (1) → outlining (2) → describing (3) → explaining a chain of effects with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one benefit of investing in clean water and sanitation for communities in Kenya.', exemplar: 'Investing in clean water in Kenya means more communities have a safe water point nearby. This will benefit local communities.' },
      { marks: '2', descriptor: 'Outlines one benefit (elaborated).', exemplar: '…which reduces the spread of waterborne diseases such as cholera and diarrhoea.' },
      { marks: '3', descriptor: 'Describes one benefit in detail.', exemplar: '…with fewer people falling ill, children miss fewer days of school and adults less work, so families earn more and pay more tax, which could be reinvested into the local community.' },
      { marks: '4', descriptor: 'Explains one benefit in detail, with reasons.', exemplar: '…reinvested in clinics and schools, benefiting the community in the short and long term with increased life expectancy.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'To what extent has Japanese aid affected access to clean water for households in rural Kenya?',
    keyConcepts: ['investigation', 'research question', 'globalization'],
    keywords: ['clear', 'focused', 'specific community', 'type of aid', 'statement of inquiry', 'rural Kenya'],
    feedbackHit: 'Well done — a research question that is both clear and focused, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is clear AND focused (a specific community/type of aid/time) with a clear SoI connection scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'RQ is clear OR focused and connected to the SoI and the impact of aid in Kenya.', exemplar: 'How have communities in Kenya been helped by aid? (lacks focus — no specific community or type of aid)' },
      { marks: '2', descriptor: 'RQ is clear AND focused with a clear connection to the SoI and the impact of aid in Kenya.', exemplar: 'To what extent has Japanese aid affected access to clean water for households in rural Kenya?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'In Kenya, communities receive large amounts of aid to improve water and sanitation. This RQ focuses on a specific group, rural households, which has been directly impacted by a global interaction: aid from Japan. The question focuses on access to clean water because rural areas historically have far lower access than cities, which can deepen inequality between regions. As rural areas are normally poorer and further from the water network, this investigation will highlight how the impact of global interactions can be limited depending on the location within a country.',
    keyConcepts: ['investigation', 'relevance', 'globalization', 'disparity & equity'],
    keywords: ['global interaction', 'inequality', 'water access', 'rural', 'relevance', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified the RQ’s relevance to the SoI and the context of aid in Kenya with reasoning.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing (3) → justifying with reasoning (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States the relevance of the RQ to the SoI.', exemplar: 'In Kenya, communities receive large amounts of aid to improve water and sanitation.' },
      { marks: '2', descriptor: 'Outlines the relevance to the SoI and the context of aid in Kenya.', exemplar: '…This RQ focuses on a specific group, rural households, who have been directly impacted by aid from Japan.' },
      { marks: '3', descriptor: 'Describes the relevance (new detail).', exemplar: '…a global interaction; as rural areas are poorer and further from the water network, this shows how the impact of global interactions can be limited by location.' },
      { marks: '4', descriptor: 'Justifies the relevance with reasoning.', exemplar: '…rural areas historically have far lower water access than cities, which can deepen regional inequality; the investigation highlights how the impact of global interactions is limited by location within a country.' },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: 'Nurses from a local clinic; Kenya Government water officials.',
    keyConcepts: ['investigation', 'stakeholders', 'primary data'],
    keywords: ['nurses', 'Government water officials', 'village residents', 'stakeholders', 'interview'],
    feedbackHit: 'Well done — two specific stakeholders to interview.',
    feedbackMiss: 'List two specific stakeholders (e.g. nurses from a local clinic; Kenya Government water officials; residents of a village in Kenya). 1 mark each; vague answers (“Government”, “people”, “locals”) score 0.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Nurses from a local clinic', 'Kenya Government water officials', 'Residents of a village in Kenya'],
  },

  q3_d: {
    marks: 2,
    exemplar: 'Photographs that show a village water point in Kenya before and after aid.',
    keyConcepts: ['sources', 'primary data'],
    keywords: ['photographs', 'surveys', 'primary source', 'water point', 'household water access'],
    feedbackHit: 'Well done — one primary source named and elaborated.',
    feedbackMiss: 'Name a primary source other than interviews (1) and elaborate (2), e.g. photographs of a water point before and after aid; survey data on rural household water access.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one primary source (other than interviews).', exemplar: 'Photographs / Surveys.' },
      { marks: '2', descriptor: 'Outlines one primary source.', exemplar: 'Photographs that show a village water point in Kenya before and after aid; data from surveys on rural household water access.' },
    ],
  },

  q3_e: {
    marks: 2,
    exemplar: 'A government website showing the amount of aid given to Kenya on a yearly basis.',
    keyConcepts: ['sources', 'secondary data'],
    keywords: ['government website', 'newspaper article', 'secondary source', 'aid', 'water access'],
    feedbackHit: 'Well done — one secondary source named and elaborated.',
    feedbackMiss: 'Name a secondary source (1) and elaborate (2), e.g. a government website showing yearly aid to Kenya. Bare “website” or “article” scores 0.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one secondary source.', exemplar: 'A government website. / A newspaper article. (not bare “website”/“article”)' },
      { marks: '2', descriptor: 'Outlines one secondary source.', exemplar: 'A government website showing the amount of aid given to Kenya on a yearly basis; a newspaper article showing how new boreholes improved water access in a region.' },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'The student has identified the categories they will use to sort the information collected into positive, negative and overall impacts. This is a strength as it helps to structure the information and make connections between pieces of information, and lets the student identify gaps. However, the student has only identified secondary sources that come from Japanese aid agencies, so the perspectives of people from Kenya have not been considered — this makes the investigation biased and unreliable. Overall, the action plan has some good features including organising impacts into categories, but the potential bias in the sources is problematic and could be overcome by including sources from Kenya and other countries; if changed, the plan would be more effective.',
    keyConcepts: ['investigation', 'evaluation', 'reliability', 'bias'],
    keywords: ['strengths', 'limitations', 'appraisal', 'categories', 'bias', 'secondary sources', 'due dates', 'reliable'],
    feedbackHit: 'Well done — you weighed strengths and limitations and gave an overall appraisal of the action plan.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement referring to the plan.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the action plan.', exemplar: 'The student has identified the categories they will use to sort the information collected.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength.', exemplar: '…into positive, negative and overall impacts. This helps to structure the information.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength with reasoning.', exemplar: '…and make connections between the pieces of information collected; it also allows the student to identify gaps in their research. (Other strengths: due dates, referencing, using secondary data to support primary data.)' },
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'The student has only identified secondary sources that come from Japanese aid agencies.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation.', exemplar: '…This means that the investigation is biased and is not a reliable investigation into how aid has impacted health in Kenya.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation with reasoning.', exemplar: '…using only these sources means people from Kenya’s perspectives have not been considered, making it biased and unreliable. (Other limitations: evaluation only at the end; no draft feedback after the podcast.)' },
      { marks: 'Appraisal 1', descriptor: 'Provides a brief overall appraisal (no aspects referenced).', exemplar: 'The investigation has some strengths, but there are ways that it could be improved.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed appraisal referring to at least one aspect of the investigation.', exemplar: 'Overall the plan has good features such as organising impacts into categories, but the potential bias in the sources is problematic and could be overcome by including sources from Kenya; if changed, the plan would be more effective.' },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'Japan: Convergent (destructive) boundary + Earthquake. (Chile: Convergent (destructive) + Earthquake — a tsunami or volcanic activity is also accepted.)',
    keyConcepts: ['plate tectonics', 'geographic processes'],
    keywords: ['convergent', 'destructive', 'subduction', 'earthquake', 'tsunami', 'volcanic activity', 'plate boundary'],
    feedbackHit: 'Correct — the right boundary type and tectonic activity for your chosen map.',
    feedbackMiss: 'Map 1 (Japan) and Map 2 (Chile) are both convergent/destructive subduction boundaries → Convergent/destructive boundary + Earthquake (tsunami / volcanic activity also accepted). 1 mark per correct label, max 2.',
    commandTerm: 'Annotate',
    commandTermDefinition: 'Add brief notes to a diagram or graph.',
    rubricBands: [
      { marks: '1', descriptor: 'One correct label (boundary type OR tectonic activity).' },
      { marks: '2', descriptor: 'Both correct labels for the chosen map (boundary type AND tectonic activity).', exemplar: 'Japan → Convergent/destructive + Earthquake. Chile → Convergent/destructive + Earthquake (tsunami / volcanic activity also accepted).' },
    ],
  },

  q5_b: {
    marks: 16,
    exemplar:
      'Subject: Investing in an offshore earthquake and tsunami early-warning system for the Tōhoku coast. Dear Sir/Madam, Japan’s Tōhoku coast sits on a convergent (destructive) plate boundary where the dense oceanic Pacific Plate subducts beneath the lighter Eurasian Plate. As the plates lock together, pressure builds; when it releases, the seabed jolts upward, sending out seismic waves that cause earthquakes and can displace huge volumes of water as a tsunami. There is very little natural warning, and with a population density of 347 people per km² along the coast, fast evacuation is essential. The most effective strategy is to invest in an offshore sensor network linked to sirens and phone alerts — Japan already operates such a system, which gave several minutes’ warning before the 2011 Tōhoku tsunami and saved many lives. Japan’s relatively high GDP (US$38,332) makes the technology viable, and it is the most effective strategy because, unlike sea walls alone, it protects people across a wide area by buying time to move to higher ground. Yours sincerely, A local geography student.',
    keyConcepts: ['plate tectonics', 'management & intervention', 'communication'],
    keywords: ['convergent boundary', 'subduction', 'seismic waves', 'tsunami', 'early-warning system', 'Japan', 'GDP', 'population density', 'email', 'subject line'],
    feedbackHit: 'Well done — a convincing email explaining the cause of the tectonic activity and the most effective management strategy, with examples.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /4, Organization /4. Explain the cause of the tectonic activity AND the most effective management strategy, with MYP examples, in convincing email style (subject line + greeting/sign-off).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines the cause(s) and the management strategy; limited examples/terminology.', exemplar: 'Japan is on a plate boundary where plates move together and cause an earthquake. Japan should have an early-warning system.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes the cause(s) and strategy; satisfactory examples and terminology.', exemplar: '…a convergent (destructive) boundary where the Pacific Plate subducts beneath the Eurasian Plate, building pressure until it releases → earthquake and tsunami; an early-warning sensor network like Japan’s; high GDP makes it viable.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains the cause(s) and strategy with accurate examples and terminology.', exemplar: '…little natural warning so rapid evacuation is essential; offshore sensors linked to sirens and phone alerts buy time; GDP US$38,332 makes the technology viable.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains the cause(s) and strategy with accurate, effective examples and terminology.', exemplar: '…plates lock and pressure builds, released as seismic waves that jolt the seabed and displace water as a tsunami; population density 347/km² makes fast evacuation vital; Japan’s offshore warning system gave minutes’ warning in 2011; it protects a wide area, unlike sea walls alone.' },
      { marks: 'Format 1', descriptor: 'One of: a relevant email subject line; an opening greeting and sign-off.' },
      { marks: 'Format 2', descriptor: 'Both a relevant subject line AND an opening greeting and sign-off.' },
      { marks: 'Communicating 1', descriptor: 'Style/language rarely appropriate to a convincing email; basic, not engaging.' },
      { marks: 'Communicating 2', descriptor: 'Occasionally appropriate; some features (concise sentences, emotive vocabulary).' },
      { marks: 'Communicating 3', descriptor: 'Mainly appropriate; satisfactory audience awareness; features used often.' },
      { marks: 'Communicating 4', descriptor: 'Consistently appropriate to a convincing email; good audience awareness; features used frequently.' },
      { marks: 'Organization 1', descriptor: 'Rarely effective; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Occasionally effective; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Mainly effective; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Consistently effective; consistently uses effective transitions.' },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: 'Water Footprint Network (waterfootprint.org).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'Water Footprint Network', 'waterfootprint.org'],
    feedbackHit: 'Correct — the origin is the Water Footprint Network (waterfootprint.org).',
    feedbackMiss: 'State the origin: Water Footprint Network / waterfootprint.org.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Water Footprint Network', 'waterfootprint.org'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To show the relationship between a country’s population size and its water footprint.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'relationship', 'population', 'water footprint', 'water use'],
    feedbackHit: 'Correct — to show the relationship between a country’s population size and its water footprint.',
    feedbackMiss: 'State the purpose, e.g. to show the relationship between a country’s population size and its water footprint (or which countries use the most water).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'It uses a key to make it easier to compare values for individual countries, so we can determine a relationship between population size and water footprint.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['key', 'compare', 'relationship', '2017', 'reliable', 'up to date'],
    feedbackHit: 'Well done — you outlined one value of the graph with brief detail.',
    feedbackMiss: 'Outline one value (1→2), e.g. it uses a key to compare water footprint and population per country; the 2017 data makes it more reliable.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one value.', exemplar: 'It uses a key. / It compares water footprint and population. / The data is up to date.' },
      { marks: '2', descriptor: 'Outlines one value.', exemplar: 'It uses a key to make it easier to compare values for individual countries; the 2017 data makes it more reliable.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'It doesn’t tell you what the actual water footprint is, only proportions, so some may not understand the totals; and it shows only one year (2017), so no change can be seen.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['proportions', 'actual water use', 'no management', 'one year', 'no change'],
    feedbackHit: 'Well done — you outlined one limitation of the graph with brief detail.',
    feedbackMiss: 'Outline one limitation (1→2), e.g. it shows proportions not actual water use; shows no management strategies; shows only 2017 so no change is visible.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one limitation.', exemplar: 'It doesn’t tell you what the water footprint is. / It shows no management strategies. / It only shows one year.' },
      { marks: '2', descriptor: 'Outlines one limitation.', exemplar: 'It shows no management strategies, so it won’t help the student inquire into how GCC is managed; or it only shows one year so no change can be seen.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Mitigation addresses the causes and therefore reduces the need for adaptation. Mitigation strategies, such as energy-efficient transport, reduce greenhouse gas emissions into the atmosphere. The reduction in greenhouse gases, such as carbon dioxide, allows more solar radiation to escape into space, which stops the Earth from absorbing re-emitted energy, reducing the rate of global temperature increase. These strategies are better than building coastal defences and other adaptation strategies, which are reactive rather than proactive and only reduce vulnerability. Adaptation strategies are not sustainable as they do not address the cause of climate change, so they must be continued indefinitely, resulting in higher costs to governments to protect infrastructure and people.',
    keyConcepts: ['sustainability', 'management & intervention', 'causality'],
    keywords: ['mitigation', 'adaptation', 'causes', 'effects', 'greenhouse gases', 'coastal defences', 'sustainable', 'reactive', 'proactive'],
    feedbackHit: 'Well done — you justified, with reasoning, whether mitigation or adaptation is more effective using Source E.',
    feedbackMiss: 'Build from stating a choice (1) → outlining (2) → describing (2–3) → justifying with reasoning (4–5) → thorough justification (6).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States whether mitigation or adaptation is the most effective approach.', exemplar: 'Mitigation is the most effective.' },
      { marks: '2–3', descriptor: 'Describes (2 = outline) whether mitigation or adaptation is most effective.', exemplar: 'Mitigation addresses the causes; energy-efficient transport reduces emissions… and is better than building coastal defences. Adaptation is not sustainable and costs more.' },
      { marks: '4–5', descriptor: 'Justifies whether mitigation or adaptation is most effective.', exemplar: '…the reduction in greenhouse gases lets more solar radiation escape, stopping the Earth absorbing re-emitted energy; adaptation does not reduce temperature rise and is unsustainable, with higher costs.' },
      { marks: '6', descriptor: 'Thoroughly justifies whether mitigation or adaptation is most effective.', exemplar: '…adaptation is reactive rather than proactive and only reduces vulnerability; because it does not address the cause it must be continued indefinitely, costing governments more to protect infrastructure and people.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Freshwater use is too high, so a new global agreement should be signed to ensure that all countries’ water footprints are sustainable; if a country has a greater share of the world’s water footprint than of its population — as the USA does (14.1% vs 4.5%) — pressure on shared freshwater resources will keep rising and intensify droughts that climate change is already worsening. The UN has reported that billions of people already face water scarcity for part of the year. However, international policy is complex and earlier agreements have been voluntary, so countries are not required to join; large consumers can withdraw or simply not sign, as happened with some climate treaties, so a mandatory agreement would be required. The diagram shows proportions, not a sustainable target: proportions show relative rather than actual contribution, so a global agreement with set targets to cut actual water use would be more effective — in ten years the proportions may be similar while actual water use rises dramatically. Moreover, a water footprint is only an estimated measurement and much of a country’s footprint is “virtual water” embedded in imported food, so an agreement covering trade in virtual water would be more effective. On balance, to a large extent a new agreement is needed, but it should target actual, total water use rather than population-proportional footprints.',
    keyConcepts: ['sustainability', 'power', 'globalization', 'synthesis'],
    keywords: ['water footprint', 'population share', 'water scarcity', 'UN', 'voluntary', 'mandatory', 'proportions', 'virtual water', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing whether a country’s water-footprint share should be capped at its population share, with balanced perspectives and a clear conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 perspectives, examples, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual/conceptual understanding in an outline; limited examples and terminology.', exemplar: 'Freshwater use is too high so a new global agreement should be signed. It needs to be mandatory or not everyone will sign up — this has happened with voluntary climate treaties when large consumers withdrew.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate understanding in a description; satisfactory examples and terminology.', exemplar: '…international policy is complex and earlier agreements have been voluntary, so countries are not required to join (large consumers can withdraw or not sign); the diagram shows proportions, not a sustainable target.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial understanding in an explanation; accurate examples and terminology.', exemplar: '…if a country’s footprint share exceeds its population share, pressure on shared freshwater keeps rising; proportions mislead as they show relative not actual contribution; a water footprint is an estimate that ignores virtual water in trade.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed understanding in a thorough explanation; accurate, effective examples and terminology.', exemplar: '…the UN reports billions already face seasonal water scarcity; a mandatory agreement with targets for actual water use (not proportions) and covering virtual water embedded in imported food would be more effective.' },
      { marks: 'Format 1', descriptor: 'Two of: introduction, main body, conclusion (as separate paragraphs).' },
      { marks: 'Format 2', descriptor: 'All three — introduction, main body and conclusion — as separate paragraphs.' },
      { marks: 'Communicating 1', descriptor: 'Style/language rarely appropriate to an essay; may be unclear.' },
      { marks: 'Communicating 2', descriptor: 'Occasionally appropriate; sometimes informal (e.g. first person); mainly clear.' },
      { marks: 'Communicating 3', descriptor: 'Consistently appropriate to an essay; formal and clear.' },
      { marks: 'Organization 1', descriptor: 'Rarely effective; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Occasionally effective; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Consistently clear and logical; uses effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'One perspective in a basic analysis; summarizes to a limited extent.' },
      { marks: 'CritD 3–4', descriptor: 'Different perspectives in an analysis; summarizes to make clear arguments.' },
      { marks: 'CritD 5–6', descriptor: 'Different perspectives in a discussion; synthesizes information to make clear arguments.' },
      { marks: 'CritD 7–8', descriptor: 'Different perspectives in a detailed discussion; synthesizes information to make clear, convincing arguments and a judged conclusion.' },
    ],
  },
}
