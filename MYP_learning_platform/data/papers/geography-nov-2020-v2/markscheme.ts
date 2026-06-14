import 'server-only'

/**
 * MYP Geography — November 2020 · VARIANT 2 mark scheme (rubric-banded, "best fit").
 *
 * Construct mirror of geography-nov-2020: SAME keys, SAME marks, SAME rubricBand
 * DESCRIPTORS. Only the exemplars/keywords/feedback are rewritten for the NEW scenario
 * (Norway→Malawi sustainable-agriculture aid; Indonesia/Italy volcanic subduction hazards;
 * ecological footprints). The two extended responses marked across several criterion strands
 * (Q5b /16 and Q8 /24) list EVERY strand in `rubricBands`; the strand maxima sum to the
 * question total.
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
    exemplar: 'Food Security & Agriculture',
    keyConcepts: ['globalization', 'development', 'aid'],
    keywords: ['Food Security & Agriculture', 'aid', 'funding', 'largest', 'Source A'],
    feedbackHit: 'Correct — Food Security & Agriculture received the largest share of Norwegian aid (52%).',
    feedbackMiss: 'Read the funding table in Source A: the largest single category is Food Security & Agriculture (52%).',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Food Security & Agriculture', 'Food Security and Agriculture'],
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
      'Investing in sustainable agriculture in Malawi means smallholder farmers are trained in climate-smart techniques, leading to higher and more reliable harvests even when the rains fail. This benefits local communities because there is less hunger and families have a surplus to sell at market, raising their incomes. With higher incomes they pay more tax, which could be reinvested back into the local community, in the form of clinics and schools. This will benefit the community in the short and long term with increased food security and life expectancy.',
    keyConcepts: ['globalization', 'aid', 'development', 'causality'],
    keywords: ['sustainable agriculture', 'climate-smart', 'reliable harvests', 'food security', 'surplus', 'income', 'tax', 'reinvested', 'life expectancy'],
    feedbackHit: 'Well done — you explained one benefit of investing aid in sustainable agriculture in detail with reasons.',
    feedbackMiss: 'Build from stating a benefit (1) → outlining (2) → describing (3) → explaining a chain of effects with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one benefit of investing in sustainable agriculture for communities in Malawi.', exemplar: 'Investing in sustainable agriculture in Malawi trains farmers in climate-smart techniques. This will benefit local communities.' },
      { marks: '2', descriptor: 'Outlines one benefit (elaborated).', exemplar: '…leading to higher and more reliable harvests even when the rains fail.' },
      { marks: '3', descriptor: 'Describes one benefit in detail.', exemplar: '…there is less hunger and families have a surplus to sell, raising incomes; with higher incomes they pay more tax, which could be reinvested into the local community.' },
      { marks: '4', descriptor: 'Explains one benefit in detail, with reasons.', exemplar: '…reinvested in clinics and schools, benefiting the community in the short and long term with increased food security and life expectancy.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'To what extent has Norwegian aid affected harvest sizes for smallholder farmers in rural Malawi?',
    keyConcepts: ['investigation', 'research question', 'globalization'],
    keywords: ['clear', 'focused', 'specific community', 'type of aid', 'statement of inquiry', 'rural Malawi'],
    feedbackHit: 'Well done — a research question that is both clear and focused, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is clear AND focused (a specific community/type of aid/time) with a clear SoI connection scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'RQ is clear OR focused and connected to the SoI and the impact of aid in Malawi.', exemplar: 'How have communities in Malawi been helped by aid? (lacks focus — no specific community or type of aid)' },
      { marks: '2', descriptor: 'RQ is clear AND focused with a clear connection to the SoI and the impact of aid in Malawi.', exemplar: 'To what extent has Norwegian aid affected harvest sizes for smallholder farmers in rural Malawi?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'In Malawi, communities receive large amounts of aid to improve food security through sustainable agriculture. This RQ focuses on a specific group, rural smallholder farmers, which has been directly impacted by a global interaction: aid from Norway. The question focuses on harvest sizes because rural farming families have historically been the most exposed to hunger when harvests fail, which can deepen inequality between regions. As rural areas are normally poorer and further from markets, this investigation will highlight how the impact of global interactions can be limited depending on the location within a country.',
    keyConcepts: ['investigation', 'relevance', 'globalization', 'disparity & equity'],
    keywords: ['global interaction', 'inequality', 'food security', 'smallholder farmers', 'rural', 'relevance', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified the RQ’s relevance to the SoI and the context of aid in Malawi with reasoning.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing (3) → justifying with reasoning (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '1', descriptor: 'States the relevance of the RQ to the SoI.', exemplar: 'In Malawi, communities receive large amounts of aid to improve food security through agriculture.' },
      { marks: '2', descriptor: 'Outlines the relevance to the SoI and the context of aid in Malawi.', exemplar: '…This RQ focuses on a specific group, rural smallholder farmers, who have been directly impacted by aid from Norway.' },
      { marks: '3', descriptor: 'Describes the relevance (new detail).', exemplar: '…a global interaction; as rural areas are poorer and further from markets, this shows how the impact of global interactions can be limited by location.' },
      { marks: '4', descriptor: 'Justifies the relevance with reasoning.', exemplar: '…rural farming families have historically been the most exposed to hunger when harvests fail, which can deepen regional inequality; the investigation highlights how the impact of global interactions is limited by location within a country.' },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: 'Smallholder farmers from a local village; Malawi Government agriculture officials.',
    keyConcepts: ['investigation', 'stakeholders', 'primary data'],
    keywords: ['smallholder farmers', 'Government agriculture officials', "women's farmer group", 'stakeholders', 'interview'],
    feedbackHit: 'Well done — two specific stakeholders to interview.',
    feedbackMiss: 'List two specific stakeholders (e.g. smallholder farmers from a local village; Malawi Government agriculture officials; members of a women’s farmer group). 1 mark each; vague answers (“Government”, “farmers”, “locals”) score 0.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Smallholder farmers from a local village', 'Malawi Government agriculture officials', 'Members of a women’s farmer group'],
  },

  q3_d: {
    marks: 2,
    exemplar: 'Photographs that show a farmer’s field in Malawi before and after aid.',
    keyConcepts: ['sources', 'primary data'],
    keywords: ['photographs', 'surveys', 'primary source', 'field', 'harvest sizes'],
    feedbackHit: 'Well done — one primary source named and elaborated.',
    feedbackMiss: 'Name a primary source other than interviews (1) and elaborate (2), e.g. photographs of a field before and after climate-smart farming; survey data on household harvest sizes.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one primary source (other than interviews).', exemplar: 'Photographs / Surveys.' },
      { marks: '2', descriptor: 'Outlines one primary source.', exemplar: 'Photographs that show a farmer’s field in Malawi before and after climate-smart farming; data from surveys on household harvest sizes.' },
    ],
  },

  q3_e: {
    marks: 2,
    exemplar: 'A government website showing the amount of aid given to Malawi on a yearly basis.',
    keyConcepts: ['sources', 'secondary data'],
    keywords: ['government website', 'newspaper article', 'secondary source', 'aid', 'harvest sizes'],
    feedbackHit: 'Well done — one secondary source named and elaborated.',
    feedbackMiss: 'Name a secondary source (1) and elaborate (2), e.g. a government website showing yearly aid to Malawi. Bare “website” or “article” scores 0.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one secondary source.', exemplar: 'A government website. / A newspaper article. (not bare “website”/“article”)' },
      { marks: '2', descriptor: 'Outlines one secondary source.', exemplar: 'A government website showing the amount of aid given to Malawi on a yearly basis; a newspaper article showing how climate-smart farming improved harvests in a region.' },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'The student has identified the categories they will use to sort the information collected into positive, negative and overall impacts. This is a strength as it helps to structure the information and make connections between pieces of information, and lets the student identify gaps. However, the student has only identified secondary sources that come from Norwegian aid agencies, so the perspectives of people from Malawi have not been considered — this makes the investigation biased and unreliable. Overall, the action plan has some good features including organising impacts into categories, but the potential bias in the sources is problematic and could be overcome by including sources from Malawi and other countries; if changed, the plan would be more effective.',
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
      { marks: 'Limitations 1', descriptor: 'States a limitation.', exemplar: 'The student has only identified secondary sources that come from Norwegian aid agencies.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation.', exemplar: '…This means that the investigation is biased and is not a reliable investigation into how aid has impacted health in Malawi.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation with reasoning.', exemplar: '…using only these sources means people from Malawi’s perspectives have not been considered, making it biased and unreliable. (Other limitations: evaluation only at the end; no draft feedback after the exhibition.)' },
      { marks: 'Appraisal 1', descriptor: 'Provides a brief overall appraisal (no aspects referenced).', exemplar: 'The investigation has some strengths, but there are ways that it could be improved.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed appraisal referring to at least one aspect of the investigation.', exemplar: 'Overall the plan has good features such as organising impacts into categories, but the potential bias in the sources is problematic and could be overcome by including sources from Malawi; if changed, the plan would be more effective.' },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'Java, Indonesia: Convergent (destructive) boundary + Volcanic activity. (Bay of Naples, Italy: Convergent (destructive) + Volcanic activity — an earthquake is also accepted.)',
    keyConcepts: ['plate tectonics', 'geographic processes'],
    keywords: ['convergent', 'destructive', 'subduction', 'volcanic activity', 'earthquake', 'plate boundary'],
    feedbackHit: 'Correct — the right boundary type and tectonic activity for your chosen map.',
    feedbackMiss: 'Map 1 (Java, Indonesia) and Map 2 (Bay of Naples, Italy) are both convergent/destructive subduction boundaries with active volcanoes → Convergent/destructive boundary + Volcanic activity (an earthquake is also accepted). 1 mark per correct label, max 2.',
    commandTerm: 'Annotate',
    commandTermDefinition: 'Add brief notes to a diagram or graph.',
    rubricBands: [
      { marks: '1', descriptor: 'One correct label (boundary type OR tectonic activity).' },
      { marks: '2', descriptor: 'Both correct labels for the chosen map (boundary type AND tectonic activity).', exemplar: 'Java → Convergent/destructive + Volcanic activity. Bay of Naples → Convergent/destructive + Volcanic activity (an earthquake is also accepted).' },
    ],
  },

  q5_b: {
    marks: 16,
    exemplar:
      'Subject: Investing in a volcano-monitoring and evacuation system for the Bay of Naples. Dear Sir/Madam, The Bay of Naples sits on a convergent (destructive) plate boundary where the dense African Plate subducts beneath the lighter Eurasian Plate. As the descending plate melts at depth, magma rises through the crust and erupts at the surface, building active volcanoes such as Mount Vesuvius. Eruptions can send out ash clouds, pyroclastic flows and lava with little warning, and with a population density of 2,650 people per km² around the bay, getting everyone to safety quickly is the central challenge. The most effective strategy is to invest in a dense volcano-monitoring network — seismometers, gas sensors and ground-deformation instruments — linked to a rehearsed, signposted evacuation plan. Italy already monitors Vesuvius this way, and similar systems gave days of warning before recent eruptions of Etna, allowing safe evacuation. Italy’s relatively high GDP (US$31,953) makes the technology and planning viable, and it is the most effective strategy because, unlike building walls, it protects a very large, densely populated area by giving people the time and the routes to escape. Yours sincerely, A local geography student.',
    keyConcepts: ['plate tectonics', 'management & intervention', 'communication'],
    keywords: ['convergent boundary', 'subduction', 'magma', 'volcanic activity', 'Vesuvius', 'monitoring', 'evacuation', 'Italy', 'GDP', 'population density', 'email', 'subject line'],
    feedbackHit: 'Well done — a convincing email explaining the cause of the tectonic activity and the most effective management strategy, with examples.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /4, Organization /4. Explain the cause of the tectonic activity AND the most effective management strategy, with MYP examples, in convincing email style (subject line + greeting/sign-off).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines the cause(s) and the management strategy; limited examples/terminology.', exemplar: 'The Bay of Naples is on a plate boundary where plates move together and cause a volcano. They should monitor the volcano and have an evacuation plan.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes the cause(s) and strategy; satisfactory examples and terminology.', exemplar: '…a convergent (destructive) boundary where the African Plate subducts beneath the Eurasian Plate; magma rises and forms volcanoes such as Vesuvius; a monitoring network and evacuation plan like Italy’s; high GDP makes it viable.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains the cause(s) and strategy with accurate examples and terminology.', exemplar: '…the descending plate melts at depth so magma rises and erupts; eruptions give little warning so monitoring and rehearsed evacuation are essential; GDP US$31,953 makes the technology viable.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains the cause(s) and strategy with accurate, effective examples and terminology.', exemplar: '…subduction melts the descending plate, magma rises through the crust and erupts as ash clouds, pyroclastic flows and lava; population density 2,650/km² makes fast evacuation vital; Italy’s monitoring of Vesuvius and Etna gave days of warning before recent eruptions; it protects a wide, dense area, unlike walls.' },
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
    exemplar: 'To show the relationship between a country’s population size and its ecological footprint.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'relationship', 'population', 'ecological footprint', 'land use'],
    feedbackHit: 'Correct — to show the relationship between a country’s population size and its ecological footprint.',
    feedbackMiss: 'State the purpose, e.g. to show the relationship between a country’s population size and its ecological footprint (or which countries use the most resources).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
  },

  q6_c: {
    marks: 2,
    exemplar: 'It places ecological footprint and population side by side for each country, making it easier to compare values, so we can determine a relationship between population size and ecological footprint.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['compare', 'side by side', 'relationship', '2017', 'reliable', 'up to date'],
    feedbackHit: 'Well done — you outlined one value of the graph with brief detail.',
    feedbackMiss: 'Outline one value (1→2), e.g. it lets you compare ecological footprint and population per country; the 2017 data makes it more reliable.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one value.', exemplar: 'It lets you compare values. / It compares ecological footprint and population. / The data is up to date.' },
      { marks: '2', descriptor: 'Outlines one value.', exemplar: 'It places ecological footprint and population side by side for each country, making them easy to compare; the 2017 data makes it more reliable.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'It doesn’t tell you the actual ecological footprint (the area of land used), only proportions, so some may not understand the totals; and it shows only one year (2017), so no change can be seen.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['proportions', 'actual land area', 'no management', 'one year', 'no change'],
    feedbackHit: 'Well done — you outlined one limitation of the graph with brief detail.',
    feedbackMiss: 'Outline one limitation (1→2), e.g. it shows proportions not actual land area used; shows no management strategies; shows only 2017 so no change is visible.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '1', descriptor: 'States one limitation.', exemplar: 'It doesn’t tell you the actual footprint. / It shows no management strategies. / It only shows one year.' },
      { marks: '2', descriptor: 'Outlines one limitation.', exemplar: 'It shows no management strategies, so it won’t help the student inquire into how GCC is managed; or it only shows one year so no change can be seen.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Mitigation addresses the causes and therefore reduces the need for adaptation. Mitigation strategies, such as energy-efficient transport, reduce greenhouse gas emissions into the atmosphere. The reduction in greenhouse gases, such as carbon dioxide, allows more solar radiation to escape into space, which stops the Earth from absorbing re-emitted energy, reducing the rate of global temperature increase. These strategies are better than building sea walls and other adaptation strategies, which are reactive rather than proactive and only reduce vulnerability. Adaptation strategies are not sustainable as they do not address the cause of climate change, so they must be continued indefinitely, resulting in higher costs to governments to protect infrastructure and people. As Source E shows, both approaches share the goal of protecting people, but only mitigation tackles the root of the problem.',
    keyConcepts: ['sustainability', 'management & intervention', 'causality'],
    keywords: ['mitigation', 'adaptation', 'causes', 'effects', 'greenhouse gases', 'sea walls', 'sustainable', 'reactive', 'proactive'],
    feedbackHit: 'Well done — you justified, with reasoning, whether mitigation or adaptation is more effective using Source E.',
    feedbackMiss: 'Build from stating a choice (1) → outlining (2) → describing (2–3) → justifying with reasoning (4–5) → thorough justification (6).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States whether mitigation or adaptation is the most effective approach.', exemplar: 'Mitigation is the most effective.' },
      { marks: '2–3', descriptor: 'Describes (2 = outline) whether mitigation or adaptation is most effective.', exemplar: 'Mitigation addresses the causes; energy-efficient transport reduces emissions… and is better than building sea walls. Adaptation is not sustainable and costs more.' },
      { marks: '4–5', descriptor: 'Justifies whether mitigation or adaptation is most effective.', exemplar: '…the reduction in greenhouse gases lets more solar radiation escape, stopping the Earth absorbing re-emitted energy; adaptation does not reduce temperature rise and is unsustainable, with higher costs.' },
      { marks: '6', descriptor: 'Thoroughly justifies whether mitigation or adaptation is most effective.', exemplar: '…adaptation is reactive rather than proactive and only reduces vulnerability; because it does not address the cause it must be continued indefinitely, costing governments more to protect infrastructure and people; both share the goal of protecting people, but only mitigation tackles the root cause.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Humanity’s demand on nature is too high, so a new global agreement should be signed to ensure that all countries’ ecological footprints are sustainable; if a country has a greater share of the world’s ecological footprint than of its population — as the USA does (17.4% vs 4.5%) — then humanity will keep using more resources than the planet can regenerate, pushing Earth Overshoot Day earlier each year. The Global Footprint Network reports that humanity already uses the resources of about 1.7 Earths. However, international policy is complex and earlier agreements have been voluntary, so countries are not required to join; large consumers can withdraw or simply not sign, as happened when the US left the 2015 Paris Agreement, so a mandatory agreement would be required. The diagram shows proportions, not a sustainable target: proportions show relative rather than actual demand, so a global agreement with set targets to cut actual resource use (measured in global hectares) would be more effective — in ten years the proportions may be similar while actual demand rises dramatically. Moreover, an ecological footprint is only an estimated measurement and a country’s footprint includes resources embedded in imported goods, so an agreement covering trade in those resources would be more effective. On balance, to a large extent a new agreement is needed, but it should target actual, total resource use rather than population-proportional footprints.',
    keyConcepts: ['sustainability', 'power', 'globalization', 'synthesis'],
    keywords: ['ecological footprint', 'population share', 'Earth Overshoot', 'Paris Agreement', 'voluntary', 'mandatory', 'proportions', 'global hectares', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing whether a country’s ecological-footprint share should be capped at its population share, with balanced perspectives and a clear conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 perspectives, examples, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual/conceptual understanding in an outline; limited examples and terminology.', exemplar: 'Demand on nature is too high so a new global agreement should be signed. It needs to be mandatory or not everyone will sign up — this happened with the Paris Agreement when the US withdrew.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate understanding in a description; satisfactory examples and terminology.', exemplar: '…international policy is complex and earlier agreements have been voluntary, so countries are not required to join (e.g. the US withdrew from the 2015 Paris Agreement); the diagram shows proportions, not a sustainable target.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial understanding in an explanation; accurate examples and terminology.', exemplar: '…if a country’s footprint share exceeds its population share, humanity keeps using more than the planet can regenerate; proportions mislead as they show relative not actual demand; an ecological footprint is an estimate that ignores resources embedded in imported goods.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed understanding in a thorough explanation; accurate, effective examples and terminology.', exemplar: '…the Global Footprint Network reports humanity uses about 1.7 Earths; a mandatory agreement with targets for actual resource use in global hectares (not proportions) and covering resources embedded in trade would be more effective.' },
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
