import 'server-only'

/**
 * MYP Geography — May 2023 · Set 2 variant mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-may-2023: same keys, same marks, same rubricBand DESCRIPTORS
 * (the band criteria do not change). Only the worked exemplars, keyConcepts, keywords and
 * feedback are rewritten to match the new variant scenarios (ocean plastic, Mekong mangrove
 * coastal protection, Sahel desertification, Pakistan flood GIS, EV-battery source/essay).
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band descriptors
 * plus worked exemplar responses at each band (`rubricBands`) — surfaced to the student on
 * submission and in the downloadable exam report. `exemplar` holds the top-band model answer.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and Q8 /24)
 * list EVERY strand in `rubricBands`; the strand maxima sum to the question total.
 *
 * Σ MSEntry.marks = 80 (= totalMarks): 1+1+4+8+2+4+2+4+18+1+1+2+2+6+24.
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
  // ── Task 1 — Investigating ──────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: '41%',
    keyConcepts: ['marine pollution', 'patterns & trends'],
    keywords: ['rivers', '41%', 'ocean plastic', 'land-based', 'share'],
    feedbackHit: 'Correct — Source A shows 41% of the plastic entering the ocean each year comes from rivers carrying litter from towns and cities.',
    feedbackMiss: 'Read the rivers slice off Source A: 41% of ocean plastic each year comes from rivers carrying litter from towns and cities.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['41%', '41'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'True',
    keyConcepts: ['marine pollution', 'systems'],
    keywords: ['microplastics', 'five millimetres', 'marine animals', 'plastic', 'true'],
    feedbackHit: 'Correct — microplastics are pieces of plastic smaller than five millimetres that can be eaten by marine animals, so the statement is true.',
    feedbackMiss: 'The statement is true: microplastics are plastic pieces smaller than five millimetres that marine animals can mistake for food and eat.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['True'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Rivers carry litter from towns and cities into the ocean because of poor waste management inland. In many cities rubbish is not always collected or is dropped as litter on streets. When it rains, the water washes this plastic into drains and streams, which flow into rivers. The rivers then carry the plastic hundreds of kilometres downstream until it reaches the sea, so plastic dropped far inland still ends up in the ocean.',
    keyConcepts: ['causality', 'marine pollution', 'geographic processes'],
    keywords: ['rivers', 'waste management', 'litter', 'drains', 'rainfall', 'cause', 'fishing gear', 'microplastics', 'ships'],
    feedbackHit: 'Well done — you explained one cause of your chosen source in detail, with reasons.',
    feedbackMiss: 'Build from stating a cause (1) → outlining (2) → describing in detail (3) → explaining one cause with reasons (4). An example may support but is not essential.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'The student states one cause of their chosen source (likely one sentence that hints at a single cause).', exemplar: 'Rivers carry plastic to the ocean because of poor waste management.' },
      { marks: '2', descriptor: 'The student outlines one cause of their chosen source (a single elaborated sentence or two short sentences; brief detail).', exemplar: 'Rivers carry plastic to the ocean because of poor waste management. In many cities rubbish is dropped as litter or not collected.' },
      { marks: '3', descriptor: 'The student describes one cause in detail without comprehensive reasons (a short paragraph; an example may support).', exemplar: 'Rivers carry plastic to the ocean because of poor waste management. In many cities rubbish is dropped as litter, and when it rains the water washes this plastic into drains and streams.' },
      { marks: '4', descriptor: 'The student explains one cause in detail, with reasons. An example may be given but is not essential.', exemplar: '…The rivers then carry the plastic hundreds of kilometres downstream until it reaches the sea, so plastic dropped far inland still ends up in the ocean.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The proposed mangrove belt will protect the coast. By planting a wide belt of mangroves the engineer creates a natural barrier that absorbs wave energy and traps sediment, so the villages near Soc Trang are buffered from storm surges and the shoreline is rebuilt, meeting the goal of the investigation. However, not all stakeholders were consulted — the engineer interviewed officials, villagers and fishers but did not speak to the rice farmers whose land borders the mangroves, which might mean the planting takes land they rely on. Overall, the investigation is done well: the outcome meets the goal even with the limited range of stakeholders consulted.',
    keyConcepts: ['investigation', 'methods', 'management & intervention', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'mangroves', 'coastal erosion', 'storm surge', 'stakeholders', 'methodology', 'outcome', 'sediment'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the investigation and gave an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Strengths and weaknesses can include the planning, methodology and outcome; suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the investigation (one sentence referring to a single strength).', exemplar: 'The proposed mangrove belt will protect the coast.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength, elaborated (a single sentence with two clauses or two/three short sentences). Outlining 3+ strengths can be awarded 3.', exemplar: 'The proposed mangrove belt will protect the coast by absorbing wave energy and trapping sediment.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength, elaborated with reasoning. Quality is rewarded, not the number of strengths.', exemplar: 'The proposed mangrove belt will protect the coast. By planting a wide belt of mangroves the engineer creates a natural barrier that absorbs wave energy and traps sediment, so the villages are buffered from storm surges and the shoreline is rebuilt. Therefore the goal of the investigation is met.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation of the investigation (one sentence referring to a single limitation).', exemplar: 'Not all stakeholders were consulted.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation, elaborated. Outlining 3+ limitations can be awarded 3. Suggesting alternative methods counts as addressing limitations.', exemplar: 'Not all stakeholders were consulted. The engineer did not speak to the rice farmers whose land borders the mangroves.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation, elaborated with reasoning.', exemplar: '…Not consulting the rice farmers might mean the planting takes land they rely on, so they oppose the scheme.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal of the investigation — a general or vague comment that could apply to any investigation, without referencing aspects of it.', exemplar: 'Overall, the investigation is done well.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal that refers to at least one aspect of the investigation to support it (anywhere in the response).', exemplar: 'Overall, the investigation is done well. The outcome meets the goal even with the limited range of stakeholders consulted.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How successful is planting drought-resistant trees in Niger in stopping farmland turning into desert?',
    keyConcepts: ['investigation', 'research question', 'desertification'],
    keywords: ['research question', 'clear', 'focused', 'statement of inquiry', 'place', 'impact', 'drought-resistant trees', 'desertification'],
    feedbackHit: 'Well done — a research question that is both clear and focused and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (e.g. specifies a place and a land-degradation impact) scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. (Clear = the intention is understandable.)', exemplar: 'How successful is planting trees in Niger? (clear and connected, but lacks focus — does not specify what the trees are for)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (focuses on a place and an impact of land degradation).', exemplar: 'How successful is planting drought-resistant trees in Niger in stopping farmland turning into desert?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Niger is in the Sahel, where droughts and overgrazing are turning farmland into desert. Drought-resistant trees hold the soil together with their roots and provide shade that slows evaporation. Investigating how effective they are will help the regional government decide where to plant them to keep farmland productive and stop the desert spreading.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['worthy of investigating', 'Sahel', 'desertification', 'drought', 'trees', 'soil', 'keep farmland productive', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why your research question is worthy of investigation.',
    feedbackMiss: 'Build from stating a simple reason (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is worthy of investigating (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States why the research question is worthy of investigating (a single simple reason).', exemplar: 'Niger is losing farmland to the desert.' },
      { marks: '2', descriptor: 'Outlines why the research question is worthy of investigating (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Niger is in the Sahel, where droughts and overgrazing are turning farmland into desert.' },
      { marks: '3', descriptor: 'Describes why the RQ is worthy of investigating — at least one factor considered in detail, without full reasoning (a short paragraph).', exemplar: 'Niger is in the Sahel, where droughts and overgrazing are turning farmland into desert. Drought-resistant trees hold the soil together with their roots.' },
      { marks: '4', descriptor: 'Justifies how the research question is worthy of investigating — at least one factor in detail, with reasoning.', exemplar: '…Investigating how effective they are will help the regional government decide where to plant them to keep farmland productive and stop the desert spreading.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Travelling to remote areas. The farmland is far from any town, so I might not be able to reach all the sites I need to collect data from.',
    keyConcepts: ['investigation', 'methods'],
    keywords: ['challenge', 'remote areas', 'travel', 'access', 'data collection', 'time'],
    feedbackHit: 'Well done — you outlined one challenge you might experience, with brief supporting detail.',
    feedbackMiss: 'State a challenge (1), then outline it (2) — elaborate on the single challenge with brief detail on how it would affect your investigation.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge they might face when completing the investigation (one sentence hinting at a single challenge).', exemplar: 'Travelling to remote areas.' },
      { marks: '2', descriptor: 'Outlines one challenge — a single sentence with a single challenge that is elaborated on; the detail provided will be brief.', exemplar: 'Travelling to remote areas. The farmland is far from any town, so I might not be able to reach all the sites I need to collect data from.' },
    ],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'Satellite vegetation maps will let me see how much green vegetation covers the region and how it has changed over several years, identifying where the land is turning to desert and where it is recovering. I could use this information to determine whether the land-restoration strategy is successfully holding back the desert.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['satellite vegetation maps', 'land cover', 'change over time', 'desert', 'recovery', 'beneficial', 'desertification', 'reasons'],
    feedbackHit: 'Well done — you explained, with reasons, how your chosen source would be beneficial to your investigation.',
    feedbackMiss: 'Build from stating how the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4). If you select a different source to the one you explain, the response is marked in line with the mark-scheme.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how the chosen source would be beneficial to the investigation (one sentence hinting at a single benefit).', exemplar: 'Satellite vegetation maps will show me where the land is turning to desert.' },
      { marks: '2', descriptor: 'Outlines how the chosen source would be beneficial — a single elaborated benefit; brief detail.', exemplar: 'Satellite vegetation maps will let me see how much green vegetation covers the region.' },
      { marks: '3', descriptor: 'Describes how the chosen source helps, in detail, without comprehensive reasons. An example may support.', exemplar: 'Satellite vegetation maps will let me see how much green vegetation covers the region and how it has changed over several years, identifying where the land is turning to desert.' },
      { marks: '4', descriptor: 'Explains how the chosen source helps, in detail with reasons. An example may support but is not essential.', exemplar: '…I could use this information to determine whether the land-restoration strategy is successfully holding back the desert.' },
    ],
  },

  // ── Task 2 — Communicating ──────────────────────────────────────────────
  q5_: {
    marks: 18,
    exemplar:
      'SUBJECT: GIS for managing river-flood risk in Pakistan — strengths and limitations. Dear National Disaster Management Authority, Thank you for your brief about this year’s monsoon flooding along the Indus. GIS uses data from satellite images and digital elevation models to map which areas are under water and to model where floodwater will spread next, layering the flood extent against settlements, roads and farmland. This is a major strength: it lets you see at a glance which districts are worst affected and direct aid and rescue boats to the highest-priority areas — for example Dadu, where the GIS data shows 2300 km² flooded and 480 000 people displaced, the most of any district. The measuring tools also let you quantify the impact accurately, comparing the share of each district under water. However, GIS also has limitations. The maps are only as good as the data behind them, and thick monsoon cloud can hide the ground from optical satellites, so the flood map may be incomplete or out of date at exactly the moment a flood is spreading. The systems are also expensive and need trained staff and reliable electricity and internet, which may be hard to provide in flood-hit rural districts. Yours sincerely, SpatialCode.',
    keyConcepts: ['systems', 'networks', 'management & intervention', 'communication'],
    keywords: ['GIS', 'layers', 'flood extent', 'satellite images', 'digital elevation models', 'displaced', 'aid', 'cloud', 'expensive', 'strength', 'limitation', 'email', 'subject title', 'Dadu'],
    feedbackHit: 'Well done — a formal email explaining ≥1 strength and ≥1 limitation of GIS for flooding in Pakistan, with a subject title, salutation and close.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. If you refer only to strengths OR only to limitations, Crit A is capped at 3 marks.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines at least one strength and/or limitation of using GIS to manage river flooding in Pakistan, using limited examples and limited relevant terminology.', exemplar: 'GIS helps to map which districts are flooded but it is expensive.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes, using satisfactory examples and appropriate relevant terminology. (Best-fit: a described strength + an outlined limitation can reach 3.)', exemplar: 'GIS maps the flood extent as layers so you can see which districts are worst affected and direct aid there. However, monsoon cloud can hide the ground from satellites and the systems are expensive.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains at least one strength and at least one limitation, using accurate examples and appropriate relevant terminology.', exemplar: '…The measuring tools let you quantify the impact accurately, comparing the share of each district under water. However, thick cloud can hide the ground, so the flood map may be out of date when a flood is spreading.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains the role of GIS in reducing the impacts, using accurate and effective descriptions/explanations and relevant terminology; comprehensive understanding with clear reasoning and examples.', exemplar: 'GIS uses satellite images and digital elevation models to map which areas are under water and model where floodwater spreads next — for example Dadu, where the data shows 2300 km² flooded and 480 000 people displaced. However, monsoon cloud can hide the ground from optical satellites and the systems are expensive and need trained staff and reliable power, which may be hard to provide in flood-hit rural districts.' },
      { marks: 'Format 1', descriptor: 'Two of: an appropriate subject title; a salutation for the recipient (e.g. Dear National Disaster Management Authority); a complimentary close (e.g. Yours sincerely).' },
      { marks: 'Format 2', descriptor: 'All three: an appropriate subject title; a salutation for the recipient; a complimentary close.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a formal email for the National Disaster Management Authority; basic/simple, rarely appropriate for the audience; may be too short to award higher.' },
      { marks: 'Communicating 3–4', descriptor: 'Style/language occasionally appropriate to a formal email; reads at times like an essay (an email written more like an essay is likely 3); some features such as clear sentences and first person.' },
      { marks: 'Communicating 5–6', descriptor: 'Style/language consistently appropriate to a formal email throughout, referring to the brief received; clear sentences and first person often used; language clear and completely appropriate.' },
      { marks: 'Organization 1', descriptor: 'Information/ideas rarely build on each other logically; rarely uses effective transitions; may be too short.' },
      { marks: 'Organization 2', descriptor: 'Information/ideas occasionally build logically; sometimes uses effective transitions between sentences/paragraphs.' },
      { marks: 'Organization 3', descriptor: 'Information/ideas mainly build logically; often uses effective transitions to show relationships between ideas.' },
      { marks: 'Organization 4', descriptor: 'Information/ideas consistently build in a clear and logical manner; always uses effective transitions to show relationships between ideas.' },
    ],
  },

  // ── Task 3 — Thinking critically ────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'FairMineral Watch (www.fairmineralwatch.org).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'FairMineral Watch', 'fairmineralwatch.org', 'diagram', 'campaign organisation'],
    feedbackHit: 'Correct — the origin of the diagram is FairMineral Watch (www.fairmineralwatch.org).',
    feedbackMiss: 'State who made/published the diagram: FairMineral Watch / www.fairmineralwatch.org.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['www.fairmineralwatch.org', 'FairMineral Watch'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To raise awareness of the social and environmental impacts of electric-vehicle batteries.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'raise awareness', 'EV battery', 'cobalt', 'social and environmental impacts'],
    feedbackHit: 'Correct — the purpose is to raise awareness of the social and environmental impacts of electric-vehicle batteries.',
    feedbackMiss: 'State the purpose, e.g. to raise awareness of the hidden impacts of electric-vehicle batteries, or to show where the materials in a battery come from. Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['To raise awareness of the social and environmental impacts of electric-vehicle batteries.', 'To show where the materials in a battery come from.'],
  },

  q6_c: {
    marks: 2,
    exemplar: 'The diagram shows the whole supply chain from mining to disposal, making it easy to explain the hidden stages behind an electric vehicle in the presentation.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'supply chain', 'stages', 'mining', 'disposal', 'presentation'],
    feedbackHit: 'Well done — you outlined one value of the diagram for the student’s presentation.',
    feedbackMiss: 'State a value (1), then outline it (2) — elaborate on one value (e.g. it shows the whole supply chain, making the hidden stages easy to explain).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value of the diagram (quality is rewarded, not the number of values referred to).', exemplar: 'The diagram shows the whole supply chain.' },
      { marks: '2', descriptor: 'Outlines one value of the diagram — one value mentioned and elaborated on.', exemplar: 'The diagram shows the whole supply chain from mining to disposal, making it easy to explain the hidden stages behind an electric vehicle.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The diagram was made by a campaign organisation, so it may show only the negative stages of the supply chain and leave out the benefits of electric vehicles.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'campaign organisation', 'bias', 'selective', 'one-sided', 'presentation'],
    feedbackHit: 'Well done — you outlined one limitation of the diagram for the student’s presentation.',
    feedbackMiss: 'State a limitation (1), then outline it (2) — elaborate on one limitation (e.g. a campaign organisation may show only the negative stages of the supply chain).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one limitation of the diagram (quality is rewarded, not the number of limitations referred to).', exemplar: 'It was made by a campaign organisation.' },
      { marks: '2', descriptor: 'Outlines one limitation of the diagram — one limitation mentioned and elaborated on.', exemplar: 'The diagram was made by a campaign organisation, so it may show only the negative stages of the supply chain.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Option 2 will reduce the harm caused at both ends of the supply chain while keeping electric vehicles available. Building battery-recycling plants recovers cobalt and other metals from old batteries, so less new cobalt has to be mined in dangerous conditions in the DRC, and fewer toxic batteries end up in landfill where fewer than 5% are currently recycled. Option 1 makes carmakers prove their cobalt is responsibly mined, which helps the miners, but it does nothing about the waste at the end of life and is hard to check across a long supply chain. Recycling plants also create local jobs and a steady supply of metals, therefore option 2 is the best next step because it tackles both the environment and the economy.',
    keyConcepts: ['management & intervention', 'sustainability', 'disparity & equity', 'reasoning'],
    keywords: ['justify', 'option 1', 'option 2', 'responsible mining', 'recycling', 'cobalt', 'landfill', 'jobs', 'environment', 'economy'],
    feedbackHit: 'Well done — a thorough justification of your chosen action, weighing it against the alternative with specific detail.',
    feedbackMiss: 'Build from stating which option to choose (1) → satisfactory justification with brief arguments (2–3) → detailed argument(s) (4–5) → an in-depth, thorough justification referring to specific details (6). There is no minimum number of points.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'Provides a limited justification by stating which option should be chosen (one or two sentences giving a basic supporting argument).', exemplar: 'Option 2 will reduce waste by recycling old batteries.' },
      { marks: '2–3', descriptor: 'Provides a satisfactory justification — brief argument(s) to support; no minimum number of points/arguments.', exemplar: 'Option 2 recovers metals from old batteries, so less new cobalt has to be mined. Option 1 makes carmakers prove their cobalt is responsibly mined but does nothing about waste.' },
      { marks: '4–5', descriptor: 'Provides a detailed justification — detailed argument(s) to support.', exemplar: 'Option 2 recovers cobalt and other metals from old batteries, so less new cobalt is mined in dangerous conditions in the DRC and fewer toxic batteries end up in landfill. Option 1 helps miners but is hard to check across a long supply chain.' },
      { marks: '6', descriptor: 'Provides a thorough justification — in-depth arguments referring to specific details.', exemplar: '…fewer toxic batteries end up in landfill where fewer than 5% are currently recycled. Recycling plants also create local jobs and a steady supply of metals, therefore option 2 is the best next step because it tackles both the environment and the economy.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Rising demand for minerals is a serious challenge for a sustainable energy transition, but it is not on its own the greatest threat. On one hand, the shift to clean energy needs vast quantities of metals: an electric-vehicle battery depends on cobalt, around 70% of which is mined in the Democratic Republic of the Congo, sometimes by hand in dangerous conditions, and demand for these metals is forecast to rise sharply. Mining on this scale can damage ecosystems, pollute water and harm communities, so from this perspective rising mineral demand clearly threatens how sustainable the transition really is. On the other hand, demand for minerals can be managed, and other factors arguably matter more. Recycling old batteries, where fewer than 5% are currently recovered, could supply much of the future demand without new mines; better technology is reducing how much cobalt each battery needs; and stronger regulation can make mining cleaner and fairer. The greater threats may be a lack of recycling and weak governance, not the raw demand itself, because the same demand handled responsibly drives investment in cleaner power that cuts the carbon emissions warming the planet. Weighing these perspectives, I agree to a limited extent: rising mineral demand is a major threat to a sustainable energy transition, but the greatest threat is the unsustainable way that demand is currently met — through new mining rather than recycling and regulation — because it is how we source and reuse these minerals, not the demand alone, that decides whether the transition is environmentally, economically and socially sustainable.',
    keyConcepts: ['sustainability', 'management & intervention', 'patterns & trends', 'disparity & equity', 'synthesis'],
    keywords: ['energy transition', 'minerals', 'cobalt', 'EV battery', 'mining', 'recycling', 'regulation', 'governance', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing whether rising mineral demand is the greatest threat to a sustainable energy transition, with ≥2 balanced perspectives, examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Reference the sustainable energy transition, give ≥2 perspectives (e.g. mineral demand vs other factors such as recycling/governance/technology; short- vs long-term; environmental vs economic vs social; scale) and reach a clear conclusion.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. There is a requirement to reference the sustainable energy transition, as per the question.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation (reasons included), using accurate examples and terminology used effectively in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation; references examples in detail to support points; accurate and effective terminology throughout.' },
      { marks: 'Format 1', descriptor: 'Two of: introduction, a main body of argument, a conclusion — as separate paragraphs (if not separate paragraphs, 0).' },
      { marks: 'Format 2', descriptor: 'All three — introduction, a main body of argument and a conclusion — as separate paragraphs.' },
      { marks: 'Communicating 1', descriptor: 'The style and language used are rarely appropriate to an essay; language rarely clear; may be too short to award higher.' },
      { marks: 'Communicating 2', descriptor: 'The style and language used are occasionally appropriate to an essay; not always consistent; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'The style and language used are consistently appropriate to an essay; language formal and clear.' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is rarely effective; rarely uses effective transitions; may be too short.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is occasionally effective; paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently appropriate and effective; ideas build in a clear and logical manner with effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent; may not reach a conclusion or fully answer the question.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments; at least two perspectives with development (not necessarily balanced); a conclusion expected but likely not fully developed.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments; at least two perspectives with substantial development and balance; ideas on rising mineral demand and other factors combined into a clear, coherent conclusion.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information; ≥2 perspectives with thorough development, equally considered/balanced; ideas combined into a clear, coherent and convincing conclusion giving a judgment on whether the impact is more positive, negative or balanced.' },
    ],
  },
}
