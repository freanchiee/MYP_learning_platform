import 'server-only'

/**
 * MYP Geography — November 2024 · Set 2 ISOMORPHIC VARIANT mark scheme
 * (geography-nov-2024-v2), rubric-banded, "best fit".
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer (kept for the shared grading/results
 * consumers); the extra fields (`commandTerm`, `commandTermDefinition`,
 * `rubricBands`) are optional and ignored by consumers that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and
 * Q8 /24) list EVERY strand in `rubricBands` (e.g. 'CritA 6', 'Format 2',
 * 'Communicating 5–6', 'CritD 7–8'); the strand maxima sum to the question total.
 *
 * Band DESCRIPTORS are the construct invariants (unchanged from the source); only the
 * SCENARIO-SPECIFIC exemplars/keywords/feedback are rewritten for the new context
 * (coastal settlement, deforestation, environmental migration, tropical-cyclone risk,
 * and the global response to deforestation & biodiversity loss).
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
    exemplar: 'Asia',
    keyConcepts: ['patterns & trends', 'population'],
    keywords: ['Asia', 'coastal zone', 'low-elevation', 'population', '38%'],
    feedbackHit: 'Correct — Asia has the highest percentage of people living in the low-elevation coastal zone (38%).',
    feedbackMiss: 'Read the “Population in the coastal zone” column: Asia is highest at 38%. Award 1 mark for Asia.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Asia'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Low',
    keyConcepts: ['patterns & trends', 'population'],
    keywords: ['Low', 'Latin America/Caribbean', 'coastal zone', '10%', 'coastal exposure'],
    feedbackHit: 'Correct — Latin America/Caribbean has Low coastal exposure (only 10% of its population lives in the coastal zone).',
    feedbackMiss: 'A region with the smallest coastal-zone share (10%) has Low coastal exposure. Award 1 mark for Low.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['Low'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Forest is cleared for farmland because of the growing demand for food. Land is needed to grow crops and graze cattle, so trees are cut down and burned, permanently removing the forest and increasing deforestation.',
    keyConcepts: ['causality', 'geographic processes', 'land use'],
    keywords: ['deforestation', 'farmland', 'demand for food', 'crops', 'cattle', 'clearing forest'],
    feedbackHit: 'Well done — you explained one cause of deforestation in detail, with reasons.',
    feedbackMiss: 'Build from naming a cause (1) → outlining it (2) → describing it (3) → explaining it in detail with reasons (4). One cause considered well is enough.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student states one cause of deforestation. (A 1-mark response could be just naming a cause.)', exemplar: 'Clearing land for farming' },
      { marks: '2', descriptor: 'The student outlines one cause of deforestation. (Likely a single sentence with brief detail.)', exemplar: 'Forest is cleared for farmland because of the growing demand for food.' },
      { marks: '3', descriptor: 'The student describes one cause of deforestation. (One way considered in detail without comprehensive reason(s); a short paragraph is likely.)', exemplar: 'Forest is cleared for farmland because of the growing demand for food. Land is needed to grow crops and graze cattle.' },
      { marks: '4', descriptor: 'The student explains one cause of deforestation. (One way considered in detail, along with reason(s); an example may support but is not essential.)', exemplar: 'Forest is cleared for farmland because of the growing demand for food. Land is needed to grow crops and graze cattle, so trees are cut down and burned, permanently removing the forest and increasing deforestation.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'A range of statistics including the number of recorded forest fires and satellite forest-loss data are used, which the government can use to decide if they need to fund more fire prevention and forest protection. However, only 30 farmers will be interviewed from a region covering over 12 million hectares. The sample size is too small so the information gathered from this is unlikely to be representative of everyone affected by deforestation. Although a range of statistics will be collected, the small sample size for interviews is not reliable which means that, overall, the investigation will be unsuccessful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'statistics', 'satellite data', 'forest fires', 'sample size', 'representative', '30 farmers', 'reliable'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the investigation.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain a strength AND a limitation, then weigh them into one overall judgement. Suggesting alternative methods counts as addressing a limitation.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'A range of statistics are used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (single strength elaborated; brief detail).', exemplar: 'A range of statistics including satellite forest-loss data and the number of forest fires are used.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (a single strength elaborated in additional detail with reasoning).', exemplar: 'A range of statistics including satellite forest-loss data and the number of forest fires are used, which the government can use to decide if they need to fund more fire prevention and forest protection.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation).', exemplar: 'Only 30 farmers will be interviewed.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (single limitation elaborated; brief detail).', exemplar: 'Only 30 farmers will be interviewed from a region covering over 12 million hectares.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (a single limitation elaborated in detail with reasoning; suggesting alternative methods counts).', exemplar: 'Only 30 farmers will be interviewed from a region covering over 12 million hectares. The sample size is too small so the information gathered from this is unlikely to be representative of everyone affected by deforestation.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the action plan — a summary of the strengths and limitations or a brief judgement (anywhere in the response).', exemplar: 'Overall, the investigation will be unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal of the action plan — weighs up both positive and negative points and makes an overall judgement on the investigative process.', exemplar: 'Although a range of statistics will be collected, the small sample size for interviews is not reliable which means that, overall, the investigation will be unsuccessful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How has flood-driven migration to Dhaka changed Bangladesh’s population structure?',
    keyConcepts: ['investigation', 'research question', 'migration'],
    keywords: ['research question', 'clear', 'focused', 'named migration', 'place', 'statement of inquiry', 'time, place and space', 'environmental migration'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a named displacement movement to a specified place) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused — naming a specific displacement movement and place/time — scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. (Clear but lacks focus — no specific migration movement or time period.)', exemplar: 'How has migration to Dhaka changed its population structure?' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (a named migration movement to a specified place).', exemplar: 'How has flood-driven migration to Dhaka changed Bangladesh’s population structure?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'People displaced by flooding are often whole rural families moving to Dhaka, adding many young workers and children to the city. This increase in the economically active population and child population could impact the dependency ratio in the city. Therefore, people could understand how environmental migration changes population structures in both the areas people leave and the cities they move to.',
    keyConcepts: ['investigation', 'relevance', 'reasoning', 'migration'],
    keywords: ['displaced', 'flooding', 'rural families', 'Dhaka', 'economically active', 'dependency ratio', 'population structure', 'relevant to SoI'],
    feedbackHit: 'Well done — you justified, with reasoning, how investigating the RQ helps readers understand environmental migration’s role in changing population structures.',
    feedbackMiss: 'Build from stating a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how investigating their RQ will help them understand the role migration has in changing population structures (a simple connection between SoI and RQ).', exemplar: 'Flood-displaced people add to Dhaka’s population.' },
      { marks: '2', descriptor: 'Outlines how investigating their RQ will help (a single sentence with two clauses, or two/three short sentences; brief detail).', exemplar: 'People displaced by flooding are often whole rural families moving to Dhaka, adding many young workers and children to the city.' },
      { marks: '3', descriptor: 'Describes how investigating their RQ will help (at least one argument/factor considered in detail without providing reasoning why the RQ is relevant to the SoI).', exemplar: 'People displaced by flooding are often whole rural families moving to Dhaka. This increase in the economically active population and child population could impact the dependency ratio in the city.' },
      { marks: '4', descriptor: 'Justifies how investigating their RQ will help readers understand migration’s role (at least one factor in detail, with reasoning why the RQ is relevant to the SoI).', exemplar: '…This increase in the economically active population and child population could impact the dependency ratio. Therefore, people could understand how environmental migration changes population structures in both the areas people leave and the cities they move to.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Displaced people may be hard to trace once they have moved. There will not be enough qualitative data.',
    keyConcepts: ['investigation', 'methods', 'challenges'],
    keywords: ['challenge', 'displaced people', 'hard to trace', 'qualitative data', 'access'],
    feedbackHit: 'Well done — you outlined a challenge you might face, with brief elaboration.',
    feedbackMiss: 'State a challenge (1) then elaborate it (2), e.g. displaced people may be hard to trace once they have moved, so there will not be enough qualitative data.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States a challenge that they might face in their investigation.', exemplar: 'Displaced people may be hard to trace.' },
      { marks: '2', descriptor: 'Outlines a challenge that they might face in their investigation.', exemplar: 'Displaced people may be hard to trace once they have moved. There will not be enough qualitative data.' },
    ],
  },

  q4_d: {
    marks: 2,
    exemplar: 'I could collect quantitative data by carrying out a survey.',
    keyConcepts: ['investigation', 'methods', 'solutions'],
    keywords: ['overcome', 'quantitative data', 'survey', 'method'],
    feedbackHit: 'Well done — you outlined how you would overcome the challenge from part (c).',
    feedbackMiss: 'State how you would overcome the challenge (1) then elaborate it (2), e.g. collect quantitative data by carrying out a survey.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how they would attempt to overcome the challenge they outlined.', exemplar: 'I could collect quantitative data.' },
      { marks: '2', descriptor: 'Outlines how they would attempt to overcome the challenge they outlined.', exemplar: 'I could collect quantitative data by carrying out a survey.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'Flood-displaced families in Bangladesh; residents of the host city.',
    keyConcepts: ['investigation', 'primary data', 'stakeholders'],
    keywords: ['interview', 'displaced families', 'host city residents', 'aid workers', 'local government', 'stakeholders'],
    feedbackHit: 'Well done — two relevant individuals or groups to interview for your investigation.',
    feedbackMiss: 'List two individuals/groups relevant to YOUR investigation (e.g. flood-displaced families, host-city residents, aid workers, local government).',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Flood-displaced families in Bangladesh', 'Residents of the host city', 'Aid workers', 'Local government'],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE/OPENING: “Good evening, neighbours. Location: Riau Province, Sumatra, Indonesia · Land use: Certified sustainable palm-oil plantation.” We’ve heard that your main concern is that clearing land for our plantation destroys the forest and the soil. We work continuously to farm this land sustainably. First, we use a strict no-burning, zero-deforestation policy: instead of clearing primary rainforest we replant only on degraded land that has already been cleared, and we keep protected forest corridors so wildlife can still move through. Secondly, we protect the soil with cover crops and we recycle the palm waste back onto the land as natural compost, so the soil stays fertile for decades instead of being exhausted and abandoned. We are independently certified, and our practices are inspected every year. For all these reasons, I ask you to vote in our favour so we can keep farming responsibly.',
    keyConcepts: ['sustainability', 'management & intervention', 'systems', 'communication'],
    keywords: ['sustainable farming', 'land use', 'zero-deforestation', 'no-burning', 'degraded land', 'forest corridors', 'cover crops', 'compost', 'soil fertility', 'certified', 'persuasive', 'speech', 'palm oil', 'Indonesia'],
    feedbackHit: 'Well done — a persuasive speech explaining two ways your company farms the land sustainably, with examples and correct terminology.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain TWO sustainable farming methods with an example, include an intro/body/conclusion and use persuasive language for the residents.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge & understanding: outlines at least one way the company farms the land sustainably using limited examples and limited relevant terminology. (Brief, little detail; an example is not required.)', exemplar: 'We’ve heard that you are worried about the forest. We only replant on land that has already been cleared.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge & understanding: describes two ways the company farms the land sustainably using satisfactory examples and appropriate relevant terminology. (Little/no reasoning; examples may lack detail.)', exemplar: '…We use a no-burning policy and only replant on degraded land. We also protect the soil with cover crops so it stays fertile.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge & understanding: explains two ways the company farms the land sustainably, using accurate examples and appropriate relevant terminology. (Detailed; some reasoning.)', exemplar: '…We replant only on degraded land instead of clearing primary rainforest, keeping forest corridors so wildlife can move through. We protect the soil with cover crops and recycle palm waste as compost so the soil stays fertile.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge & understanding: thoroughly explains two ways the company farms the land sustainably using accurate and effective examples and appropriate relevant terminology. (Very detailed, clear reasoning, comprehensive understanding.)', exemplar: '…We use a strict no-burning, zero-deforestation policy: we replant only on degraded land that has already been cleared and keep protected forest corridors so wildlife can still move through. We protect the soil with cover crops and recycle the palm waste back onto the land as natural compost, so the soil stays fertile for decades instead of being exhausted and abandoned. We are independently certified and inspected every year.' },
      { marks: 'Format 1', descriptor: 'Two of the following are included: introduction/greeting to audience, body, conclusion/closing argument.' },
      { marks: 'Format 2', descriptor: 'Three of the following are included: introduction/greeting to audience, body, conclusion/closing argument.' },
      { marks: 'Communicating 1–2', descriptor: 'The style and language used are rarely appropriate to the format of a speech — the text rarely engages the listener, language may be unclear, persuasive language is rarely used.' },
      { marks: 'Communicating 3–4', descriptor: 'The style and language used are occasionally appropriate to the format of a speech — the text occasionally engages the listener, language is mainly clear and appropriate, persuasive language is mainly used.' },
      { marks: 'Communicating 5–6', descriptor: 'The style and language used are consistently appropriate to the format of a speech — the text engages the listener, language is clear and concise, communicating ideas effectively, persuasive language is used throughout.' },
      { marks: 'Organization 1', descriptor: 'Information and ideas structured in a way that is rarely effective and appropriate — ideas/paragraphs rarely build on each other logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structured in a way that is occasionally effective — ideas/paragraphs occasionally build on each other logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structured in a way that is mainly effective — ideas/paragraphs frequently build on each other logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structured in a way that is consistently effective — ideas/paragraphs build on each other in a consistently clear and logical manner; always uses effective transitions.' },
    ],
  },

  q6_a: {
    marks: 2,
    exemplar: 'It informs people about tropical-cyclone risk by determining the countries most at risk.',
    keyConcepts: ['source evaluation', 'purpose', 'patterns & trends'],
    keywords: ['purpose', 'inform', 'tropical cyclone', 'risk', 'countries at risk'],
    feedbackHit: 'Well done — you outlined the purpose of Source A.',
    feedbackMiss: 'State the purpose (1) then elaborate it (2), e.g. it informs people about tropical-cyclone risk by determining the countries most at risk.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the purpose of Source A.', exemplar: 'It informs people about tropical-cyclone risk.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source A.', exemplar: 'It informs people about tropical-cyclone risk by determining the countries most at risk.' },
    ],
  },

  q6_b: {
    marks: 2,
    exemplar: 'The chart comes from a reliable source. The policy maker can trust the information.',
    keyConcepts: ['source evaluation', 'value', 'reliability'],
    keywords: ['value', 'reliable source', 'trust', 'information', 'policy maker'],
    feedbackHit: 'Well done — you outlined one value of Source A to the policy maker.',
    feedbackMiss: 'State a value (1) then elaborate it (2), e.g. the chart comes from a reliable source, so the policy maker can trust the information.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source A.', exemplar: 'The chart comes from a reliable source.' },
      { marks: '2', descriptor: 'Outlines one value of Source A.', exemplar: 'The chart comes from a reliable source. The policy maker can trust the information.' },
    ],
  },

  q6_c: {
    marks: 2,
    exemplar: 'The chart gives a value for the whole country rather than by region. One value for an entire country is not specific enough.',
    keyConcepts: ['source evaluation', 'limitation', 'scale'],
    keywords: ['limitation', 'whole country', 'by region', 'not specific', 'scale'],
    feedbackHit: 'Well done — you outlined one limitation of Source A to the policy maker.',
    feedbackMiss: 'State a limitation (1) then elaborate it (2), e.g. it gives one value for the whole country rather than by region, which is not specific enough.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source A.', exemplar: 'The chart gives a value for the whole country rather than by region.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A.', exemplar: 'The chart gives a value for the whole country rather than by region. One value for an entire country is not specific enough.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Manila sits on a low-lying coastal plain on Manila Bay, much of it less than 5 m above sea level, so it is at far greater risk from typhoon flooding than Cebu City, which is built partly on higher, sloping ground away from the bay. Manila is also far more densely settled, at 46 000 people per km² compared with 2900 in Cebu City, so a typhoon there puts many more people at risk. Manila currently generates around US$47 billion more from exports than Cebu City. Coastal flooding will impact trade, jobs and the environment so a tropical cyclone would have a more significant negative impact on Manila than on Cebu City.',
    keyConcepts: ['causality', 'disparity & equity', 'management & intervention', 'scale'],
    keywords: ['Manila', 'Cebu City', 'low-lying', 'coastal plain', 'density', 'typhoon', 'flooding', 'exports', 'trade', 'justify'],
    feedbackHit: 'Well done — a thorough justification referring to both cities with specific evidence for your chosen location.',
    feedbackMiss: 'Justify your choice WITH reference to both cities. Build from a basic supporting argument (1) → describing (2–3) → detailed arguments (4–5) → in-depth arguments with specific details (6). Naming a location with no reason scores 0.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Limited justification — outlines which location is at greater risk, with reference to both cities (a basic supporting argument). Naming a location with no reason cannot be awarded.', exemplar: 'Manila is on a low-lying coastal plain while Cebu City is on higher ground, so Manila is at greater risk.' },
      { marks: '2–3', descriptor: 'Satisfactory justification — describes which location is at greater risk, with reference to both cities (brief arguments; no minimum number of points).', exemplar: 'Manila sits on a low-lying coastal plain on Manila Bay, much of it under 5 m above sea level, so it floods badly during typhoons. Cebu City is on higher, sloping ground away from the bay, so less of it is at risk of coastal flooding.' },
      { marks: '4–5', descriptor: 'A justification of which location is at greater risk, with reference to both cities (detailed arguments).', exemplar: '…Manila is also far more densely settled, at 46 000 people per km² compared with 2900 in Cebu City, so a typhoon there puts many more people at risk of flooding.' },
      { marks: '6', descriptor: 'A thorough justification of which location is at greater risk, with reference to both cities — in-depth arguments referring to specific details of why the location was chosen.', exemplar: '…Manila currently generates around US$47 billion more from exports than Cebu City. Coastal flooding will impact trade, jobs and the environment so a tropical cyclone would have a more significant negative impact on Manila than on Cebu City.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'It is important to a large extent that all countries respond to deforestation and biodiversity loss, but the responsibility is not equally shared. On one hand, forests and biodiversity are a global system: forests store carbon and the loss of one country’s forest changes rainfall and climate elsewhere, so a response from every country is needed — as the UN Secretary-General warned at COP15, treating nature carelessly means “committing suicide by proxy”. Around 10 million hectares of forest are lost each year and most of the world’s land species live in them, so without action from the countries where forests are being cleared, and from the high-consuming countries driving demand for timber, beef and palm oil, the 30-by-30 goal cannot be met. On the other hand, from an economic and developmental perspective, demanding the same response from every country is unfair: lower-income forest nations such as Brazil and Indonesia argue that wealthier countries already cleared most of their own forests while developing, so richer nations should respond first and fund forest protection (loss-and-damage and forest finance). Some also argue that without binding enforcement, COP pledges are often not met. Synthesising these perspectives, it is important to a large extent that all countries respond — because forests are a shared system and species loss is irreversible — but responses must be differentiated by responsibility and capacity, with high-consuming and historically high-deforestation countries doing the most and funding the rest.',
    keyConcepts: ['global interactions', 'systems', 'sustainability', 'disparity & equity', 'synthesis'],
    keywords: ['deforestation', 'biodiversity loss', 'all countries', 'COP15', 'Guterres', 'forests', 'carbon', 'species', 'high-income', 'low-income', 'Brazil', 'Indonesia', '30-by-30', 'perspectives', 'synthesis', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing different perspectives on whether all countries must respond, with examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 developed perspectives, accurate examples and terminology, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. (Brief, little detail.)' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. (Examples accurate but may lack detail; terminology accurate in context.)' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology. (Reasons included; very good understanding of deforestation and biodiversity loss; terminology effective in most of the essay.)' },
      { marks: 'CritA 7–8', descriptor: 'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. (References examples in detail; comprehensive understanding; terminology effective throughout.)' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included as separate paragraphs: introduction, a main body of argument or a conclusion.' },
      { marks: 'Format 2', descriptor: 'Three of the following elements are included as separate paragraphs: introduction, a main body of argument and a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'Style and language rarely appropriate to the audience and purpose of informing — rarely consistent with an essay, language rarely clear; text may be extremely short.' },
      { marks: 'Communicating 2', descriptor: 'Style and language occasionally appropriate to the audience and purpose of informing — not always consistent; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'Style and language consistently appropriate to the audience and purpose of informing — consistent with an essay; language formal and clear.' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is rarely effective — paragraphs/ideas sometimes build logically; rarely uses effective transitions; text may be extremely short.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is occasionally effective — paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently appropriate and effective — paragraphs/ideas build in a consistently clear and logical manner; uses effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question. (One perspective, considered superficially; may not reach a conclusion.)' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments. (At least two perspectives developed to show some understanding; a conclusion is expected but likely not fully developed.)' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments. (At least two perspectives with substantial development; ideas on countries’ responses combined into a clear, coherent conclusion.)' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information to make clear arguments. (Two or more balanced perspectives with thorough development; ideas combined into a clear, coherent and convincing conclusion/judgement.)' },
    ],
  },
}
