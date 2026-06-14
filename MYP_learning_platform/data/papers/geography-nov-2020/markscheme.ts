import 'server-only'

/**
 * MYP Geography — November 2020 mark scheme (rubric-banded, "best fit").
 *
 * Open-ended I&S answers, so every entry carries the IB band descriptors + worked
 * exemplar responses (`rubricBands`) for "exemplars on submit". The two extended
 * responses marked across several criterion strands (Q5b /16 and Q8 /24) list EVERY
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
    exemplar: 'Education',
    keyConcepts: ['globalization', 'development', 'aid'],
    keywords: ['Education', 'aid', 'funding', 'largest', 'Source A'],
    feedbackHit: 'Correct — Education received the largest share of Australian aid (59%).',
    feedbackMiss: 'Read the funding pie in Source A: the largest single category is Education (59%).',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Education'],
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
      'Investing in education in Laos allows more children to have access to education, leading to these children getting better qualifications, which means they can get higher-skilled, higher-paid jobs. This will benefit local communities as with higher incomes, they will pay more tax, which could be reinvested back into the local community, in the form of schools and hospitals. This will benefit the community in the short and long term with increased life expectancy.',
    keyConcepts: ['globalization', 'aid', 'development', 'causality'],
    keywords: ['education', 'qualifications', 'higher-paid jobs', 'tax', 'reinvested', 'schools', 'hospitals', 'life expectancy'],
    feedbackHit: 'Well done — you explained one benefit of investing aid in education in detail with reasons.',
    feedbackMiss: 'Build from stating a benefit (1) → outlining (2) → describing (3) → explaining a chain of effects with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one benefit of investing in education for communities in Laos.', exemplar: 'Investing in education in Laos allows more children to have access to education. This will benefit local communities.' },
      { marks: '2', descriptor: 'Outlines one benefit (elaborated).', exemplar: '…leading to these children getting better qualifications and better jobs.' },
      { marks: '3', descriptor: 'Describes one benefit in detail.', exemplar: '…higher-skilled, higher-paid jobs; with higher incomes they pay more tax, which could be reinvested into the local community.' },
      { marks: '4', descriptor: 'Explains one benefit in detail, with reasons.', exemplar: '…reinvested in schools and hospitals, benefiting the community in the short and long term with increased life expectancy.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'To what extent has Australian aid affected primary education for girls in rural Laos?',
    keyConcepts: ['investigation', 'research question', 'globalization'],
    keywords: ['clear', 'focused', 'specific community', 'type of aid', 'statement of inquiry', 'rural Laos'],
    feedbackHit: 'Well done — a research question that is both clear and focused, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is clear AND focused (a specific community/type of aid/time) with a clear SoI connection scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'RQ is clear OR focused and connected to the SoI and the impact of aid in Laos.', exemplar: 'How have communities in Laos been helped by aid? (lacks focus — no specific community or type of aid)' },
      { marks: '2', descriptor: 'RQ is clear AND focused with a clear connection to the SoI and the impact of aid in Laos.', exemplar: 'To what extent has Australian aid affected primary education for girls in rural Laos?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'In Laos, they receive large amounts of aid to improve education. This RQ focuses on a specific group, which has been directly impacted by a global interaction: aid from Australia. This research question focuses on the changes for girls, as historically girls have had lower enrolment rates than boys in primary education around the world. This can lead to gender inequality. As rural areas are normally poorer and so have fewer schools, this investigation will highlight how the impact of global interactions can be limited depending on the location within a country.',
    keyConcepts: ['investigation', 'relevance', 'globalization', 'disparity & equity'],
    keywords: ['global interaction', 'gender inequality', 'enrolment', 'rural', 'relevance', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified the RQ’s relevance to the SoI and the context of aid in Laos with reasoning.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing (3) → justifying with reasoning (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States the relevance of the RQ to the SoI.', exemplar: 'In Laos, they receive large amounts of aid to improve education.' },
      { marks: '2', descriptor: 'Outlines the relevance to the SoI and the context of aid in Laos.', exemplar: '…This RQ focuses on a specific group, rural girls, who have been directly impacted by aid from Australia.' },
      { marks: '3', descriptor: 'Describes the relevance (new detail).', exemplar: '…a global interaction; as rural areas are poorer with fewer schools, this shows how the impact of global interactions can be limited by location.' },
      { marks: '4', descriptor: 'Justifies the relevance with reasoning.', exemplar: '…historically girls have had lower enrolment rates than boys, which can lead to gender inequality; the investigation highlights how the impact of global interactions is limited by location within a country.' },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: 'Teachers from a local school; Laos Government officials.',
    keyConcepts: ['investigation', 'stakeholders', 'primary data'],
    keywords: ['teachers', 'Government officials', 'students in Laos', 'stakeholders', 'interview'],
    feedbackHit: 'Well done — two specific stakeholders to interview.',
    feedbackMiss: 'List two specific stakeholders (e.g. teachers from a local school; Laos Government officials; students in a Laos school). 1 mark each; vague answers (“Government”, “students”, “locals”) score 0.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Teachers from a local school', 'Laos Government officials', 'Students in a school in Laos'],
  },

  q3_d: {
    marks: 2,
    exemplar: 'Photographs that show classrooms in Laos before and after aid.',
    keyConcepts: ['sources', 'primary data'],
    keywords: ['photographs', 'surveys', 'primary source', 'classrooms', 'enrolment'],
    feedbackHit: 'Well done — one primary source named and elaborated.',
    feedbackMiss: 'Name a primary source other than interviews (1) and elaborate (2), e.g. photographs of classrooms before and after aid; survey data on rural enrolment.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one primary source (other than interviews).', exemplar: 'Photographs / Surveys.' },
      { marks: '2', descriptor: 'Outlines one primary source.', exemplar: 'Photographs that show classrooms in Laos before and after aid; data from surveys on rural primary-school enrolment rates.' },
    ],
  },

  q3_e: {
    marks: 2,
    exemplar: 'A government website showing the amount of aid given to Laos on a yearly basis.',
    keyConcepts: ['sources', 'secondary data'],
    keywords: ['government website', 'newspaper article', 'secondary source', 'aid', 'enrolment'],
    feedbackHit: 'Well done — one secondary source named and elaborated.',
    feedbackMiss: 'Name a secondary source (1) and elaborate (2), e.g. a government website showing yearly aid to Laos. Bare “website” or “article” scores 0.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one secondary source.', exemplar: 'A government website. / A newspaper article. (not bare “website”/“article”)' },
      { marks: '2', descriptor: 'Outlines one secondary source.', exemplar: 'A government website showing the amount of aid given to Laos on a yearly basis; a newspaper article showing how increased funding improved enrolment for girls.' },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'The student has identified the categories they will use to sort the information collected into positive, negative and overall impacts. This is a strength as it helps to structure the information and make connections between pieces of information, and lets the student identify gaps. However, the student has only identified secondary sources that come from Australia, so the perspectives of people from Laos have not been considered — this makes the investigation biased and unreliable. Overall, the action plan has some good features including organising impacts into categories, but the potential bias in the sources is problematic and could be overcome by including sources from Laos and other countries; if changed, the plan would be more effective.',
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
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'The student has only identified secondary sources that come from Australia.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation.', exemplar: '…This means that the investigation is biased and is not a reliable investigation into how aid has impacted health in Laos.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation with reasoning.', exemplar: '…using only these sources means people from Laos’ perspectives have not been considered, making it biased and unreliable. (Other limitations: evaluation only at the end; no draft feedback after the video.)' },
      { marks: 'Appraisal 1', descriptor: 'Provides a brief overall appraisal (no aspects referenced).', exemplar: 'The investigation has some strengths, but there are ways that it could be improved.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed appraisal referring to at least one aspect of the investigation.', exemplar: 'Overall the plan has good features such as organising impacts into categories, but the potential bias in the sources is problematic and could be overcome by including sources from Laos; if changed, the plan would be more effective.' },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'California: Transform (conservative) boundary + Earthquake. (Iceland: Divergent (constructive) + Volcanic activity.)',
    keyConcepts: ['plate tectonics', 'geographic processes'],
    keywords: ['transform', 'conservative', 'divergent', 'constructive', 'earthquake', 'volcanic activity', 'plate boundary'],
    feedbackHit: 'Correct — the right boundary type and tectonic activity for your chosen map.',
    feedbackMiss: 'Map 1 (California): Transform/conservative boundary + Earthquake. Map 2 (Iceland): Divergent/constructive boundary + Volcanic activity. 1 mark per correct label, max 2.',
    commandTerm: 'Annotate',
    commandTermDefinition: 'Add brief notes to a diagram or graph.',
    rubricBands: [
      { marks: '1', descriptor: 'One correct label (boundary type OR tectonic activity).' },
      { marks: '2', descriptor: 'Both correct labels for the chosen map (boundary type AND tectonic activity).', exemplar: 'California → Transform/conservative + Earthquake. Iceland → Divergent/constructive + Volcanic activity.' },
    ],
  },

  q5_b: {
    marks: 16,
    exemplar:
      'Subject: Investing in earthquake-proof building codes for California. Dear Sir/Madam, As California is on a conservative plate boundary where both plates move alongside each other in the same direction at different speeds, it experiences earthquakes as the plates become stuck and pressure builds; eventually the plates slip, releasing the pressure as seismic waves. There is very little advance warning of earthquakes, and with a population density of 408 people per km², evacuation is not viable. California should adopt strict building codes ensuring every building uses earthquake-proof designs and materials — for example, Japan has used cross-bracing and shock absorbers in new high-rise buildings to minimise damage. California’s high GDP (US$60,359) makes this expensive option viable, and it is the most effective strategy because it reduces the risk of buildings collapsing, and so of injury and death. Yours sincerely, A local geography student.',
    keyConcepts: ['plate tectonics', 'management & intervention', 'communication'],
    keywords: ['conservative boundary', 'seismic waves', 'building codes', 'cross-bracing', 'Japan', 'GDP', 'population density', 'email', 'subject line'],
    feedbackHit: 'Well done — a convincing email explaining the cause of the tectonic activity and the most effective management strategy, with examples.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /4, Organization /4. Explain the cause of the tectonic activity AND the most effective management strategy, with MYP examples, in convincing email style (subject line + greeting/sign-off).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines the cause(s) and the management strategy; limited examples/terminology.', exemplar: 'California is on a plate boundary where both plates move and cause an earthquake. California should have strict building codes like Japan.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes the cause(s) and strategy; satisfactory examples and terminology.', exemplar: '…a conservative plate boundary where plates move alongside each other, building pressure until they slip → earthquake; strict building codes (cross-bracing as in Japan); high GDP makes it viable.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains the cause(s) and strategy with accurate examples and terminology.', exemplar: '…little advance warning so evacuation is not viable; building codes minimise damage; GDP US$60,359 makes the expensive option viable.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains the cause(s) and strategy with accurate, effective examples and terminology.', exemplar: '…plates stick and pressure builds, released as seismic waves; population density 408/km² makes evacuation impractical; Japan’s cross-bracing + shock absorbers since the 1980s; the strategy reduces collapse, injury and death.' },
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
    exemplar: 'Global Footprint Network (footprintnetwork.org).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'Global Footprint Network', 'footprintnetwork.org'],
    feedbackHit: 'Correct — the origin is the Global Footprint Network (footprintnetwork.org).',
    feedbackMiss: 'State the origin: Global Footprint Network / footprintnetwork.org.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Global Footprint Network', 'footprintnetwork.org'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To show the relationship between a country’s population size and its carbon footprint.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'relationship', 'population', 'carbon footprint', 'greenhouse gases'],
    feedbackHit: 'Correct — to show the relationship between a country’s population size and its carbon footprint.',
    feedbackMiss: 'State the purpose, e.g. to show the relationship between a country’s population size and its carbon footprint (or which countries emit the most).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'It uses a key to make it easier to compare values for individual countries, so we can determine a relationship between population size and carbon footprint.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['key', 'compare', 'relationship', '2017', 'reliable', 'up to date'],
    feedbackHit: 'Well done — you outlined one value of the graph with brief detail.',
    feedbackMiss: 'Outline one value (1→2), e.g. it uses a key to compare carbon footprint and population per country; the 2017 data makes it more reliable.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one value.', exemplar: 'It uses a key. / It compares carbon footprint and population. / The data is up to date.' },
      { marks: '2', descriptor: 'Outlines one value.', exemplar: 'It uses a key to make it easier to compare values for individual countries; the 2017 data makes it more reliable.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'It doesn’t tell you what the actual carbon footprint is, only proportions, so some may not understand the totals; and it shows only one year (2017), so no change can be seen.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['proportions', 'actual carbon', 'no management', 'one year', 'no change'],
    feedbackHit: 'Well done — you outlined one limitation of the graph with brief detail.',
    feedbackMiss: 'Outline one limitation (1→2), e.g. it shows proportions not actual emissions; shows no management strategies; shows only 2017 so no change is visible.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one limitation.', exemplar: 'It doesn’t tell you what the carbon footprint is. / It shows no management strategies. / It only shows one year.' },
      { marks: '2', descriptor: 'Outlines one limitation.', exemplar: 'It shows no management strategies, so it won’t help the student inquire into how GCC is managed; or it only shows one year so no change can be seen.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Mitigation addresses the causes and therefore reduces the need for adaptation. Mitigation strategies, such as energy-efficient transport, reduce greenhouse gas emissions into the atmosphere. The reduction in greenhouse gases, such as carbon dioxide, allows more solar radiation to escape into space, which stops the Earth from absorbing re-emitted energy, reducing the rate of global temperature increase. These strategies are better than building sea-walls and other adaptation strategies, which are reactive rather than proactive and only reduce vulnerability. Adaptation strategies are not sustainable as they do not address the cause of climate change, so they must be continued indefinitely, resulting in higher costs to governments to protect infrastructure and people.',
    keyConcepts: ['sustainability', 'management & intervention', 'causality'],
    keywords: ['mitigation', 'adaptation', 'causes', 'effects', 'greenhouse gases', 'sea walls', 'sustainable', 'reactive', 'proactive'],
    feedbackHit: 'Well done — you justified, with reasoning, whether mitigation or adaptation is more effective using Source E.',
    feedbackMiss: 'Build from stating a choice (1) → outlining (2) → describing (2–3) → justifying with reasoning (4–5) → thorough justification (6).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States whether mitigation or adaptation is the most effective approach.', exemplar: 'Mitigation is the most effective.' },
      { marks: '2–3', descriptor: 'Describes (2 = outline) whether mitigation or adaptation is most effective.', exemplar: 'Mitigation addresses the causes; energy-efficient transport reduces emissions… and is better than building sea-walls. Adaptation is not sustainable and costs more.' },
      { marks: '4–5', descriptor: 'Justifies whether mitigation or adaptation is most effective.', exemplar: '…the reduction in greenhouse gases lets more solar radiation escape, stopping the Earth absorbing re-emitted energy; adaptation does not reduce temperature rise and is unsustainable, with higher costs.' },
      { marks: '6', descriptor: 'Thoroughly justifies whether mitigation or adaptation is most effective.', exemplar: '…adaptation is reactive rather than proactive and only reduces vulnerability; because it does not address the cause it must be continued indefinitely, costing governments more to protect infrastructure and people.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Carbon emissions are too high, so a new global agreement should be signed to ensure that all countries’ carbon footprints are sustainable; if a country has a greater share of the world’s carbon footprint than of its population — as the USA does (15.6% vs 4.5%) — the Enhanced Greenhouse Effect will continue and global temperatures will rise. The IPCC has reported that a 1.5°C increase is irreversible. However, international policy is complex and earlier agreements have been voluntary, so countries are not required to join; the US, a large emitter with a small population, withdrew from the 2015 Paris Agreement, so a mandatory agreement would be required. The diagram shows proportions, not a sustainable target: proportions show relative rather than actual contribution, so a global agreement with set targets to cut actual emissions would be more effective — in ten years the proportions may be similar while actual emissions rise dramatically. Moreover, carbon footprint is only a theoretical measurement and ignores other greenhouse gases such as methane and CFCs, so an agreement covering all greenhouse gases would be more effective. On balance, to a large extent a new agreement is needed, but it should target actual, total emissions rather than population-proportional footprints.',
    keyConcepts: ['sustainability', 'power', 'globalization', 'synthesis'],
    keywords: ['carbon footprint', 'population share', 'Paris Agreement', 'IPCC', 'voluntary', 'mandatory', 'proportions', 'methane', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing whether a country’s carbon-footprint share should be capped at its population share, with balanced perspectives and a clear conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 perspectives, examples, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual/conceptual understanding in an outline; limited examples and terminology.', exemplar: 'Carbon emissions are too high so a new global agreement should be signed. It needs to be mandatory or not everyone will sign up — this happened with the Paris Agreement when the US withdrew.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate understanding in a description; satisfactory examples and terminology.', exemplar: '…international policy is complex and earlier agreements have been voluntary, so countries are not required to join (e.g. the US withdrew from the 2015 Paris Agreement); the diagram shows proportions, not a sustainable target.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial understanding in an explanation; accurate examples and terminology.', exemplar: '…if a country’s footprint share exceeds its population share, the Enhanced Greenhouse Effect continues; proportions mislead as they show relative not actual contribution; carbon footprint is a theoretical measure that ignores methane.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed understanding in a thorough explanation; accurate, effective examples and terminology.', exemplar: '…the IPCC reports a 1.5°C rise is irreversible; a mandatory agreement with targets for actual emissions (not proportions) and covering all greenhouse gases (methane, CFCs) would be more effective.' },
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
