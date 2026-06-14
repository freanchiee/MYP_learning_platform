import 'server-only'

/**
 * MYP Geography — May 2023 · Set 1 variant mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-may-2023: same keys, same marks, same rubricBand DESCRIPTORS
 * (the band criteria do not change). Only the worked exemplars, keyConcepts, keywords and
 * feedback are rewritten to match the new variant scenarios (air quality, Singapore water
 * supply, urban heat island, Greek wildfire GIS, fast-fashion source/essay).
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
    exemplar: '4.2 million per year',
    keyConcepts: ['air quality', 'patterns & trends'],
    keywords: ['premature deaths', '4.2 million', 'hazardous air', 'PM2.5', 'air pollution'],
    feedbackHit: 'Correct — Source A shows 4.2 million premature deaths per year worldwide under hazardous air quality.',
    feedbackMiss: 'Read the premature-deaths figure for hazardous air off Source A: 4.2 million per year.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['4.2 million per year', '4.2 million'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'True',
    keyConcepts: ['air quality', 'systems'],
    keywords: ['PM2.5', 'fine particles', 'lungs', 'bloodstream', 'true'],
    feedbackHit: 'Correct — PM2.5 are fine particles small enough to enter the lungs and bloodstream, so the statement is true.',
    feedbackMiss: 'The statement is true: PM2.5 (particulate matter under 2.5 micrometres) is fine enough to enter the lungs and bloodstream.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['True'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Reduced visibility from smog is caused by a build-up of fine particles in the air. When vehicles and factories burn fossil fuels they release PM2.5 particles. On still, sunny days these particles cannot disperse, so they accumulate near the ground and scatter sunlight, forming a haze that reduces how far people can see.',
    keyConcepts: ['causality', 'air quality', 'geographic processes'],
    keywords: ['smog', 'PM2.5', 'fossil fuels', 'vehicles', 'factories', 'cause', 'asthma', 'crop yields', 'premature deaths'],
    feedbackHit: 'Well done — you explained one cause of your chosen impact in detail, with reasons.',
    feedbackMiss: 'Build from stating a cause (1) → outlining (2) → describing in detail (3) → explaining one cause with reasons (4). An example may support but is not essential.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'The student states one cause of their chosen impact (likely one sentence that hints at a single cause).', exemplar: 'Smog is caused by burning fossil fuels.' },
      { marks: '2', descriptor: 'The student outlines one cause of their chosen impact (a single elaborated sentence or two short sentences; brief detail).', exemplar: 'Smog is caused by burning fossil fuels. Vehicles and factories release fine PM2.5 particles into the air.' },
      { marks: '3', descriptor: 'The student describes one cause in detail without comprehensive reasons (a short paragraph; an example may support).', exemplar: 'Smog is caused by burning fossil fuels. Vehicles and factories release fine PM2.5 particles into the air. On still, sunny days these particles cannot disperse.' },
      { marks: '4', descriptor: 'The student explains one cause in detail, with reasons. An example may be given but is not essential.', exemplar: '…so they accumulate near the ground and scatter sunlight, forming a haze that reduces how far people can see.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The proposed Marina Barrage will secure Singapore’s water supply. By damming the channel it creates a freshwater reservoir holding around 10 000 000 m³, so the city has a reliable store of drinking water and is less dependent on imported water, meeting the goal of the investigation. However, not all stakeholders were consulted — the engineer interviewed water-agency officials and residents but did not speak to shipping companies that use the channel, which might mean the plan faces opposition. Overall, the investigation is done well: the outcome meets the goal even with the limited range of stakeholders consulted.',
    keyConcepts: ['investigation', 'methods', 'management & intervention', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'Marina Barrage', 'reservoir', 'freshwater', 'stakeholders', 'methodology', 'outcome', 'drought'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the investigation and gave an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Strengths and weaknesses can include the planning, methodology and outcome; suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the investigation (one sentence referring to a single strength).', exemplar: 'The proposed Marina Barrage will secure Singapore’s water supply.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength, elaborated (a single sentence with two clauses or two/three short sentences). Outlining 3+ strengths can be awarded 3.', exemplar: 'The proposed Marina Barrage will secure Singapore’s water supply by creating a freshwater reservoir in the city.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength, elaborated with reasoning. Quality is rewarded, not the number of strengths.', exemplar: 'The proposed Marina Barrage will secure Singapore’s water supply. By damming the channel it creates a freshwater reservoir holding around 10 000 000 m³, so the city has a reliable store of drinking water. Therefore reliance on imported water is reduced and the goal of the investigation is met.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation of the investigation (one sentence referring to a single limitation).', exemplar: 'Not all stakeholders were consulted.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation, elaborated. Outlining 3+ limitations can be awarded 3. Suggesting alternative methods counts as addressing limitations.', exemplar: 'Not all stakeholders were consulted. The engineer did not speak to shipping companies that use the channel.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation, elaborated with reasoning.', exemplar: '…Not consulting shipping companies might mean the plan faces opposition.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal of the investigation — a general or vague comment that could apply to any investigation, without referencing aspects of it.', exemplar: 'Overall, the investigation is done well.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal that refers to at least one aspect of the investigation to support it (anywhere in the response).', exemplar: 'Overall, the investigation is done well. The outcome meets the goal even with the limited range of stakeholders consulted.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How successful are street trees in Athens in reducing the urban heat island effect in residential neighbourhoods?',
    keyConcepts: ['investigation', 'research question', 'urban heat island'],
    keywords: ['research question', 'clear', 'focused', 'statement of inquiry', 'place', 'impact', 'street trees', 'urban heat island'],
    feedbackHit: 'Well done — a research question that is both clear and focused and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (e.g. specifies a place and an urban-temperature impact) scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. (Clear = the intention is understandable.)', exemplar: 'How successful are street trees in Athens? (clear and connected, but lacks focus — does not specify what the trees are for)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (focuses on a place and an impact of rising urban temperatures).', exemplar: 'How successful are street trees in Athens in reducing the urban heat island effect in residential neighbourhoods?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Athens is a densely built city that suffers severe summer heatwaves. Street trees provide shade and cool the air through evapotranspiration. Investigating how effective they are will help the city council decide where to plant trees to keep residents safe during heatwaves.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['worthy of investigating', 'heatwaves', 'street trees', 'shade', 'evapotranspiration', 'keep residents safe', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why your research question is worthy of investigation.',
    feedbackMiss: 'Build from stating a simple reason (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is worthy of investigating (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States why the research question is worthy of investigating (a single simple reason).', exemplar: 'Athens suffers severe summer heatwaves.' },
      { marks: '2', descriptor: 'Outlines why the research question is worthy of investigating (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Athens is a densely built city that suffers severe summer heatwaves.' },
      { marks: '3', descriptor: 'Describes why the RQ is worthy of investigating — at least one factor considered in detail, without full reasoning (a short paragraph).', exemplar: 'Athens is a densely built city that suffers severe summer heatwaves. Street trees provide shade and cool the air.' },
      { marks: '4', descriptor: 'Justifies how the research question is worthy of investigating — at least one factor in detail, with reasoning.', exemplar: '…Investigating how effective they are will help the city council decide where to plant trees to keep residents safe during heatwaves.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Limited access to equipment. I might not be able to borrow enough thermometers to measure temperatures across the whole city at the same time.',
    keyConcepts: ['investigation', 'methods'],
    keywords: ['challenge', 'access to equipment', 'thermometers', 'data collection', 'time', 'weather'],
    feedbackHit: 'Well done — you outlined one challenge you might experience, with brief supporting detail.',
    feedbackMiss: 'State a challenge (1), then outline it (2) — elaborate on the single challenge with brief detail on how it would affect your investigation.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge they might face when completing the investigation (one sentence hinting at a single challenge).', exemplar: 'Limited access to equipment.' },
      { marks: '2', descriptor: 'Outlines one challenge — a single sentence with a single challenge that is elaborated on; the detail provided will be brief.', exemplar: 'Limited access to equipment. I might not be able to borrow enough thermometers to measure temperatures across the whole city at the same time.' },
    ],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'Satellite thermal maps will let me see the land-surface temperature across the whole city at once, identify the hottest streets and compare areas with and without tree cover. I could use this information to determine whether street trees are successfully cooling the neighbourhoods.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['satellite thermal maps', 'land-surface temperature', 'tree cover', 'hottest streets', 'beneficial', 'urban heat island', 'reasons'],
    feedbackHit: 'Well done — you explained, with reasons, how your chosen source would be beneficial to your investigation.',
    feedbackMiss: 'Build from stating how the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4). If you select a different source to the one you explain, the response is marked in line with the mark-scheme.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how the chosen source would be beneficial to the investigation (one sentence hinting at a single benefit).', exemplar: 'Satellite thermal maps will show me the hottest areas.' },
      { marks: '2', descriptor: 'Outlines how the chosen source would be beneficial — a single elaborated benefit; brief detail.', exemplar: 'Satellite thermal maps will let me see the land-surface temperature across the whole city at once.' },
      { marks: '3', descriptor: 'Describes how the chosen source helps, in detail, without comprehensive reasons. An example may support.', exemplar: 'Satellite thermal maps will let me see the land-surface temperature across the whole city at once, identify the hottest streets and compare areas with and without tree cover.' },
      { marks: '4', descriptor: 'Explains how the chosen source helps, in detail with reasons. An example may support but is not essential.', exemplar: '…I could use this information to determine whether street trees are successfully cooling the neighbourhoods.' },
    ],
  },

  // ── Task 2 — Communicating ──────────────────────────────────────────────
  q5_: {
    marks: 18,
    exemplar:
      'SUBJECT: GIS and satellite remote sensing for managing wildfires in Greece — strengths and limitations. Dear Hellenic Forest Service, Thank you for your brief about this summer’s wildfire season. GIS combined with satellite remote sensing uses thermal and optical imagery to detect active fire fronts and map burned areas almost in real time, layering the hazard against settlements, roads and forest cover. This is a major strength: it lets you see where fires are spreading and which villages are most at risk, so you can plan evacuations and direct firefighting resources to the highest-priority regions — for example Evia, where the satellite-derived data shows 310 km² of forest burned, by far the most of any region. The measuring tools also let you quantify the loss accurately, separating forest from farmland damage. However, GIS and satellite mapping have limitations. Cloud and thick smoke can obscure the optical imagery, so the maps may be incomplete or delayed at exactly the moment a fire is most active. The systems are also expensive and require trained staff, which may be difficult to fund when resources are already stretched by recovery. Yours sincerely, SpatialCode.',
    keyConcepts: ['systems', 'networks', 'management & intervention', 'communication'],
    keywords: ['GIS', 'remote sensing', 'satellite imagery', 'thermal', 'layers', 'hazard', 'burned area', 'evacuation', 'smoke', 'cloud', 'expensive', 'strength', 'limitation', 'email', 'subject title', 'Evia'],
    feedbackHit: 'Well done — a formal email explaining ≥1 strength and ≥1 limitation of GIS/remote sensing for Greece, with a subject title, salutation and close.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. If you refer only to strengths OR only to limitations, Crit A is capped at 3 marks.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines at least one strength and/or limitation of using GIS and satellite remote sensing to manage wildfires in Greece, using limited examples and limited relevant terminology.', exemplar: 'GIS helps to map where wildfires are spreading but it is expensive.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes, using satisfactory examples and appropriate relevant terminology. (Best-fit: a described strength + an outlined limitation can reach 3.)', exemplar: 'GIS and satellite imagery map the burned area as layers so you can see which villages are at risk and plan evacuations. However, smoke and cloud can block the satellite view and the systems are expensive.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains at least one strength and at least one limitation, using accurate examples and appropriate relevant terminology.', exemplar: '…The measuring tools let you quantify the loss accurately, separating forest from farmland. However, cloud and thick smoke can obscure the imagery, so maps may be delayed when a fire is most active.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains the role of GIS in reducing the impacts, using accurate and effective descriptions/explanations and relevant terminology; comprehensive understanding with clear reasoning and examples.', exemplar: 'GIS combined with satellite remote sensing uses thermal and optical imagery to detect active fire fronts and map burned areas almost in real time, layering the hazard against settlements — for example Evia, where the data shows 310 km² of forest burned. However, smoke obscures optical imagery and the systems are expensive and require trained staff, which may be hard to fund during recovery.' },
      { marks: 'Format 1', descriptor: 'Two of: an appropriate subject title; a salutation for the recipient (e.g. Dear Hellenic Forest Service); a complimentary close (e.g. Yours sincerely).' },
      { marks: 'Format 2', descriptor: 'All three: an appropriate subject title; a salutation for the recipient; a complimentary close.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a formal email for the Hellenic Forest Service; basic/simple, rarely appropriate for the audience; may be too short to award higher.' },
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
    exemplar: 'ThreadFacts (www.threadfacts.org).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'ThreadFacts', 'threadfacts.org', 'infographic', 'campaign website'],
    feedbackHit: 'Correct — the origin of the infographic is ThreadFacts (www.threadfacts.org).',
    feedbackMiss: 'State who made/published the infographic: ThreadFacts / www.threadfacts.org.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['www.threadfacts.org', 'ThreadFacts'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To raise awareness of the environmental impact of fast fashion.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'raise awareness', 'fast fashion', 'environmental impact', 'campaign'],
    feedbackHit: 'Correct — the purpose is to raise awareness of the environmental impact of fast fashion.',
    feedbackMiss: 'State the purpose, e.g. to raise awareness of the environmental impact of fast fashion, or to persuade people to consume clothing more sustainably. Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['To raise awareness of the environmental impact of fast fashion.', 'To persuade people to consume clothing more sustainably.'],
  },

  q6_c: {
    marks: 2,
    exemplar: 'The source provides specific data about textile waste and water use, making it useful as evidence in the presentation.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'data', 'textile waste', 'water use', 'evidence', 'presentation'],
    feedbackHit: 'Well done — you outlined one value of the infographic for the student’s presentation.',
    feedbackMiss: 'State a value (1), then outline it (2) — elaborate on one value (e.g. it provides data about textile waste, making it useful as evidence).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value of the infographic (quality is rewarded, not the number of values referred to).', exemplar: 'The source provides data about textile waste.' },
      { marks: '2', descriptor: 'Outlines one value of the infographic — one value mentioned and elaborated on.', exemplar: 'The source provides specific data about textile waste and water use, making it useful as evidence in the presentation.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The infographic was made by a campaign website, so it may select only the data that supports its message and leave out balancing information.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'campaign website', 'bias', 'selective', 'one-sided', 'presentation'],
    feedbackHit: 'Well done — you outlined one limitation of the infographic for the student’s presentation.',
    feedbackMiss: 'State a limitation (1), then outline it (2) — elaborate on one limitation (e.g. a campaign website may select only data that supports its message).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one limitation of the infographic (quality is rewarded, not the number of limitations referred to).', exemplar: 'It was made by a campaign website.' },
      { marks: '2', descriptor: 'Outlines one limitation of the infographic — one limitation mentioned and elaborated on.', exemplar: 'The infographic was made by a campaign website, so it may select only the data that supports its message.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Option 2 will reduce waste at source while keeping clothing affordable. Free repair and take-back schemes extend the life of garments, so fewer end up in landfill, and they create local repair jobs. Option 1 funds recycling but a tax raises prices for consumers and recycling is limited because less than 1% of clothing is recycled into new clothing, so the tax does little to stop waste being created in the first place. Retailers running take-back schemes are also directly invested in collecting and reusing materials, therefore option 2 is the best next step because it tackles both the environment and the economy.',
    keyConcepts: ['management & intervention', 'sustainability', 'disparity & equity', 'reasoning'],
    keywords: ['justify', 'option 1', 'option 2', 'environmental tax', 'repair', 'take-back', 'recycling', 'landfill', 'jobs', 'environment', 'economy'],
    feedbackHit: 'Well done — a thorough justification of your chosen action, weighing it against the alternative with specific detail.',
    feedbackMiss: 'Build from stating which option to choose (1) → satisfactory justification with brief arguments (2–3) → detailed argument(s) (4–5) → an in-depth, thorough justification referring to specific details (6). There is no minimum number of points.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'Provides a limited justification by stating which option should be chosen (one or two sentences giving a basic supporting argument).', exemplar: 'Option 2 will reduce waste by repairing clothes.' },
      { marks: '2–3', descriptor: 'Provides a satisfactory justification — brief argument(s) to support; no minimum number of points/arguments.', exemplar: 'Option 2 will reduce waste because repairing garments keeps them out of landfill. Option 1 funds recycling but a tax raises prices for consumers.' },
      { marks: '4–5', descriptor: 'Provides a detailed justification — detailed argument(s) to support.', exemplar: 'Option 2 extends the life of garments through free repair and take-back, so fewer end up in landfill, and it creates local repair jobs. Option 1 funds recycling but a tax raises prices and recycling is limited.' },
      { marks: '6', descriptor: 'Provides a thorough justification — in-depth arguments referring to specific details.', exemplar: '…recycling is limited because less than 1% of clothing is recycled into new clothing, so the tax does little to stop waste being created. Retailers running take-back schemes are directly invested in reusing materials, therefore option 2 is the best next step because it tackles both the environment and the economy.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Changing what consumers buy is an important part of making fashion sustainable, but it is not the most effective lever on its own. On one hand, consumer choices clearly drive the problem: the fashion industry produces around 100 billion garments a year and clothing output has roughly doubled since 2000, with each garment worn on average only 7 to 10 times before disposal. If consumers bought fewer, longer-lasting clothes, demand for fast fashion would fall, and individual action also shifts cultural norms. From this perspective, changing consumption matters greatly. On the other hand, consumers can only choose from what is produced, and many cannot afford sustainable alternatives, so the responsibility cannot rest with shoppers alone. Producers and governments arguably have more leverage: the industry is responsible for about 8% of global carbon emissions and a cotton t-shirt uses around 2700 litres of water, impacts decided by manufacturing methods, not the checkout. Regulation such as environmental taxes, repair and take-back schemes, and bans on destroying unsold stock can change the whole system at once, whereas individual choices change it slowly and unevenly. Weighing these perspectives, I agree to a limited extent: changing consumer demand is necessary, but the most effective route to sustainable fashion is systemic change by producers and governments, because it is how clothes are designed, made and regulated — not only what shoppers buy — that determines whether fashion is environmentally, economically and socially sustainable.',
    keyConcepts: ['sustainability', 'management & intervention', 'patterns & trends', 'disparity & equity', 'synthesis'],
    keywords: ['sustainable fashion', 'consumer choices', 'fast fashion', 'textile waste', 'carbon emissions', 'water use', 'regulation', 'producers', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing whether changing consumer choices is the most effective route to sustainable fashion, with ≥2 balanced perspectives, examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Reference sustainable fashion, give ≥2 perspectives (e.g. consumers vs producers/governments; short- vs long-term; environmental vs economic vs social; affordability; scale) and reach a clear conclusion.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. There is a requirement to reference sustainable fashion, as per the question.' },
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
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments; at least two perspectives with substantial development and balance; ideas on consumer choice and other factors combined into a clear, coherent conclusion.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information; ≥2 perspectives with thorough development, equally considered/balanced; ideas combined into a clear, coherent and convincing conclusion giving a judgment on whether the impact is more positive, negative or balanced.' },
    ],
  },
}
