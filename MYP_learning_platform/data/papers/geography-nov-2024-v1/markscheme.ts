import 'server-only'

/**
 * MYP Geography — November 2024 · Set 1 ISOMORPHIC VARIANT mark scheme
 * (rubric-banded, "best fit").
 *
 * Isomorphic to geography-nov-2024: SAME keys, SAME marks per entry, SAME rubric-band
 * DESCRIPTORS and command terms. Only the worked exemplars, keyConcepts, keywords and
 * feedback are rewritten for the NEW scenario (urbanisation, rural-to-urban migration and
 * megacity growth + freshwater / drought vulnerability of cities + the global water crisis).
 *
 * `exemplar` holds the top-band model answer; the I&S extensions (`commandTerm`,
 * `commandTermDefinition`, `rubricBands`) are optional and ignored by consumers that don't
 * use them. The two extended responses marked across several criterion strands (Q5 /18 and
 * Q8 /24) list EVERY strand in `rubricBands`; the strand maxima sum to the question total.
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
    exemplar: 'North America',
    keyConcepts: ['patterns & trends', 'urbanisation'],
    keywords: ['North America', 'urban areas', 'urbanisation', 'highest', '83%'],
    feedbackHit: 'Correct — North America has the highest percentage of people living in urban areas (83%).',
    feedbackMiss: 'Read the segments: North America is highest at 83%. Award 1 mark for North America.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['North America'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Low',
    keyConcepts: ['patterns & trends', 'urbanisation'],
    keywords: ['Low', 'Africa', 'urban areas', 'urbanisation', '44%'],
    feedbackHit: 'Correct — Africa has a Low level of urbanisation (only 44% urban — fewer than half live in towns and cities).',
    feedbackMiss: 'A region with the smallest urban share (44%, under half its people) has a Low level of urbanisation. Award 1 mark for Low.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['Low'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'There are few jobs in rural areas, so people migrate to cities. Better-paid factory and service work in the city attracts rural migrants, so the urban population grows quickly through rural-to-urban migration.',
    keyConcepts: ['causality', 'geographic processes', 'urbanisation'],
    keywords: ['rapid urbanisation', 'rural-to-urban migration', 'rural jobs', 'factory work', 'pull factors', 'cities'],
    feedbackHit: 'Well done — you explained one cause of rapid urbanisation in detail, with reasons.',
    feedbackMiss: 'Build from naming a cause (1) → outlining it (2) → describing it (3) → explaining it in detail with reasons (4). One cause considered well is enough.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student states one cause of rapid urbanisation. (A 1-mark response could be just naming a cause.)', exemplar: 'Lack of jobs in rural areas' },
      { marks: '2', descriptor: 'The student outlines one cause of rapid urbanisation. (Likely a single sentence with brief detail.)', exemplar: 'There are few jobs in rural areas, so people migrate to cities.' },
      { marks: '3', descriptor: 'The student describes one cause of rapid urbanisation. (One way considered in detail without comprehensive reason(s); a short paragraph is likely.)', exemplar: 'There are few jobs in rural areas, so people migrate to cities where there is better-paid factory work.' },
      { marks: '4', descriptor: 'The student explains one cause of rapid urbanisation. (One way considered in detail, along with reason(s); an example may support but is not essential.)', exemplar: 'There are few jobs in rural areas, so people migrate to cities. Better-paid factory and service work in the city attracts rural migrants, so the urban population grows quickly through rural-to-urban migration.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'A range of data including households without piped water is collected, which the government can use to decide if they need to invest in water infrastructure for the growing population. However, only 35 residents of one informal settlement will be interviewed from over 15 million people. The sample size is too small so the information gathered from this is unlikely to be representative of the urbanising population. Although a range of data will be collected, the small sample size for interviews is not reliable which means that, overall, the investigation will be unsuccessful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'data', 'piped water', 'sample size', 'representative', '35 residents', 'reliable'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the investigation.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain a strength AND a limitation, then weigh them into one overall judgement. Suggesting alternative methods counts as addressing a limitation.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'A range of data is collected.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (single strength elaborated; brief detail).', exemplar: 'A range of data including households without piped water is collected.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (a single strength elaborated in additional detail with reasoning).', exemplar: 'A range of data including households without piped water is collected, which the government can use to decide if they need to invest in water infrastructure for the growing population.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation).', exemplar: 'Only 35 residents of one informal settlement will be interviewed.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (single limitation elaborated; brief detail).', exemplar: 'Only 35 residents of one informal settlement will be interviewed from over 15 million people.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (a single limitation elaborated in detail with reasoning; suggesting alternative methods counts).', exemplar: 'Only 35 residents of one informal settlement will be interviewed from over 15 million people. The sample size is too small so the information gathered from this is unlikely to be representative of the urbanising population.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the action plan — a summary of the strengths and limitations or a brief judgement (anywhere in the response).', exemplar: 'Overall, the investigation will be unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal of the action plan — weighs up both positive and negative points and makes an overall judgement on the investigative process.', exemplar: 'Although a range of data will be collected, the small sample size for interviews is not reliable which means that, overall, the investigation will be unsuccessful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How has rural-to-urban migration changed the growth of Mumbai since 2000?',
    keyConcepts: ['investigation', 'research question', 'migration'],
    keywords: ['research question', 'clear', 'focused', 'named migration', 'city', 'statement of inquiry', 'time, place and space'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a named migration movement to a specified city) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused — naming a specific migration movement and city/time — scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. (Clear but lacks focus — no specific migration movement or time period.)', exemplar: 'How has migration changed the growth of cities?' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (a named migration movement to a specified place).', exemplar: 'How has rural-to-urban migration changed the growth of Mumbai since 2000?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Rural migrants moving to Mumbai need somewhere to live, increasing the demand for housing in the city. This rapid demand could lead to the growth of informal settlements where housing is unplanned. Therefore, people could understand how rural-to-urban migration drives the physical and social growth of cities.',
    keyConcepts: ['investigation', 'relevance', 'reasoning', 'migration'],
    keywords: ['rural migrants', 'demand for housing', 'informal settlements', 'growth of cities', 'unplanned', 'relevant to SoI'],
    feedbackHit: 'Well done — you justified, with reasoning, how investigating the RQ helps readers understand migration’s role in the growth of cities.',
    feedbackMiss: 'Build from stating a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how investigating their RQ will help them understand the role migration has in the growth of cities (a simple connection between SoI and RQ).', exemplar: 'Rural migrants moving to Mumbai need housing.' },
      { marks: '2', descriptor: 'Outlines how investigating their RQ will help (a single sentence with two clauses, or two/three short sentences; brief detail).', exemplar: 'Rural migrants moving to Mumbai need somewhere to live, increasing the demand for housing in the city.' },
      { marks: '3', descriptor: 'Describes how investigating their RQ will help (at least one argument/factor considered in detail without providing reasoning why the RQ is relevant to the SoI).', exemplar: 'Rural migrants moving to Mumbai need somewhere to live, increasing the demand for housing. This rapid demand could lead to the growth of informal settlements where housing is unplanned.' },
      { marks: '4', descriptor: 'Justifies how investigating their RQ will help readers understand migration’s role (at least one factor in detail, with reasoning why the RQ is relevant to the SoI).', exemplar: '…This rapid demand could lead to the growth of informal settlements where housing is unplanned. Therefore, people could understand how rural-to-urban migration drives the physical and social growth of cities.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Recent migrants may be hard to reach in informal settlements. There will not be enough qualitative data.',
    keyConcepts: ['investigation', 'methods', 'challenges'],
    keywords: ['challenge', 'recent migrants', 'informal settlements', 'hard to reach', 'qualitative data', 'access'],
    feedbackHit: 'Well done — you outlined a challenge you might face, with brief elaboration.',
    feedbackMiss: 'State a challenge (1) then elaborate it (2), e.g. recent migrants may be hard to reach in informal settlements, so there will not be enough qualitative data.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States a challenge that they might face in their investigation.', exemplar: 'Recent migrants may be hard to reach.' },
      { marks: '2', descriptor: 'Outlines a challenge that they might face in their investigation.', exemplar: 'Recent migrants may be hard to reach in informal settlements. There will not be enough qualitative data.' },
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
    exemplar: 'Rural migrants in Mumbai; city planners in Mumbai.',
    keyConcepts: ['investigation', 'primary data', 'stakeholders'],
    keywords: ['interview', 'rural migrants', 'long-term residents', 'informal traders', 'city planners', 'stakeholders'],
    feedbackHit: 'Well done — two relevant individuals or groups to interview for your investigation.',
    feedbackMiss: 'List two individuals/groups relevant to YOUR investigation (e.g. rural migrants in Mumbai, long-term city residents, informal traders, city planners).',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Rural migrants in Mumbai', 'Long-term city residents', 'Informal traders', 'City planners'],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE/OPENING: “Good evening, neighbours. Location: Dharavi, Mumbai, India · Development: Affordable high-rise housing.” We’ve heard that one of your concerns about our project is the strain on water and green space in the area. We build sustainably in two ways. First, every block is fitted with rainwater-harvesting tanks and greywater recycling, so the development reuses water rather than drawing more from the city supply — this protects your water during the dry season. Second, we build compact high-rise homes instead of sprawling outwards, which preserves open green space and reduces the land we clear, so the local ecosystem can recover. We always monitor water use and replant native trees on site to protect your health and the environment. For all these reasons, I ask you to vote in our favour so we can keep building responsibly.',
    keyConcepts: ['sustainability', 'management & intervention', 'systems', 'communication'],
    keywords: ['sustainable urban development', 'sustainably', 'rainwater harvesting', 'greywater recycling', 'green space', 'high-rise', 'compact', 'monitor', 'persuasive', 'speech', 'Dharavi', 'housing'],
    feedbackHit: 'Well done — a persuasive speech explaining two ways your company builds sustainably, with examples and correct terminology.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain TWO sustainable building methods with an example, include an intro/body/conclusion and use persuasive language for the residents.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge & understanding: outlines at least one way the company builds sustainably using limited examples and limited relevant terminology. (Brief, little detail; an example is not required.)', exemplar: 'We’ve heard that one of your concerns about our project is the strain on water in the area. We use rainwater harvesting to reduce the water we take from the city.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge & understanding: describes two ways the company builds sustainably using satisfactory examples and appropriate relevant terminology. (Little/no reasoning; examples may lack detail.)', exemplar: '…We fit rainwater-harvesting tanks and greywater recycling so the development reuses water. We also build compact high-rise homes to preserve open green space. We always monitor water use to protect your health and the environment.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge & understanding: explains two ways the company builds sustainably, using accurate examples and appropriate relevant terminology. (Detailed; some reasoning.)', exemplar: '…We fit rainwater-harvesting tanks and greywater recycling so the development reuses water rather than drawing more from the city supply. We build compact high-rise homes instead of sprawling outwards, which preserves open green space. We always monitor water use to protect your health and the environment.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge & understanding: thoroughly explains two ways the company builds sustainably using accurate and effective examples and appropriate relevant terminology. (Very detailed, clear reasoning, comprehensive understanding.)', exemplar: '…Every block is fitted with rainwater-harvesting tanks and greywater recycling, so the development reuses water rather than drawing more from the city supply — this protects your water during the dry season. We build compact high-rise homes instead of sprawling outwards, which preserves open green space and reduces the land we clear, so the local ecosystem can recover. We always monitor water use and replant native trees on site.' },
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
    exemplar: 'It informs people about drought risk by determining the countries most at risk.',
    keyConcepts: ['source evaluation', 'purpose', 'patterns & trends'],
    keywords: ['purpose', 'inform', 'drought risk', 'water shortages', 'countries at risk'],
    feedbackHit: 'Well done — you outlined the purpose of Source A.',
    feedbackMiss: 'State the purpose (1) then elaborate it (2), e.g. it informs people about drought risk by determining the countries most at risk.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the purpose of Source A.', exemplar: 'It informs people about drought risk.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source A.', exemplar: 'It informs people about drought risk by determining the countries most at risk.' },
    ],
  },

  q6_b: {
    marks: 2,
    exemplar: 'The table comes from a reliable source. The policy maker can trust the information.',
    keyConcepts: ['source evaluation', 'value', 'reliability'],
    keywords: ['value', 'reliable source', 'trust', 'information', 'policy maker'],
    feedbackHit: 'Well done — you outlined one value of Source A to the policy maker.',
    feedbackMiss: 'State a value (1) then elaborate it (2), e.g. the table comes from a reliable source, so the policy maker can trust the information.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source A.', exemplar: 'The table comes from a reliable source.' },
      { marks: '2', descriptor: 'Outlines one value of Source A.', exemplar: 'The table comes from a reliable source. The policy maker can trust the information.' },
    ],
  },

  q6_c: {
    marks: 2,
    exemplar: 'The table gives a value for the whole country rather than by region. One value for an entire country is not specific enough.',
    keyConcepts: ['source evaluation', 'limitation', 'scale'],
    keywords: ['limitation', 'whole country', 'by region', 'not specific', 'scale'],
    feedbackHit: 'Well done — you outlined one limitation of Source A to the policy maker.',
    feedbackMiss: 'State a limitation (1) then elaborate it (2), e.g. it gives one value for the whole country rather than by region, which is not specific enough.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source A.', exemplar: 'The table gives a value for the whole country rather than by region.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A.', exemplar: 'The table gives a value for the whole country rather than by region. One value for an entire country is not specific enough.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Ho Chi Minh City is at a lower elevation than Hanoi so is at greater risk from flooding and saltwater intrusion caused by sea level rise. Hanoi is further inland in the Red River delta so is less exposed to coastal flooding. Ho Chi Minh City sits in the low-lying Mekong delta with much of the city less than 2 m above sea level. Ho Chi Minh City currently generates around seven billion US dollars more from exports than Hanoi. Flooding and saltwater intrusion will impact trade, jobs and the environment so climate change would have a more significant negative impact on Ho Chi Minh City than Hanoi.',
    keyConcepts: ['causality', 'disparity & equity', 'management & intervention', 'scale'],
    keywords: ['Ho Chi Minh City', 'Hanoi', 'elevation', 'flooding', 'saltwater intrusion', 'sea level rise', 'Mekong delta', 'exports', 'trade', 'justify'],
    feedbackHit: 'Well done — a thorough justification referring to both cities with specific evidence for your chosen location.',
    feedbackMiss: 'Justify your choice WITH reference to both cities. Build from a basic supporting argument (1) → describing (2–3) → detailed arguments (4–5) → in-depth arguments with specific details (6). Naming a location with no reason scores 0.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Limited justification — outlines which location is at greater risk, with reference to both cities (a basic supporting argument). Naming a location with no reason cannot be awarded.', exemplar: 'Ho Chi Minh City is at a lower elevation than Hanoi so is at greater risk.' },
      { marks: '2–3', descriptor: 'Satisfactory justification — describes which location is at greater risk, with reference to both cities (brief arguments; no minimum number of points).', exemplar: 'Ho Chi Minh City is at a lower elevation than Hanoi so is at greater risk from flooding and saltwater intrusion caused by sea level rise. Hanoi is further inland so is less exposed to coastal flooding.' },
      { marks: '4–5', descriptor: 'A justification of which location is at greater risk, with reference to both cities (detailed arguments).', exemplar: '…Ho Chi Minh City sits in the low-lying Mekong delta with much of the city less than 2 m above sea level. Flooding will impact trade.' },
      { marks: '6', descriptor: 'A thorough justification of which location is at greater risk, with reference to both cities — in-depth arguments referring to specific details of why the location was chosen.', exemplar: '…Ho Chi Minh City currently generates around seven billion US dollars more from exports than Hanoi. Flooding and saltwater intrusion will impact trade, jobs and the environment so climate change would have a more significant negative impact on Ho Chi Minh City than Hanoi.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'It is important to a large extent that all countries respond to the global water crisis, but the responsibility is not equally shared. On one hand, fresh water is a shared system: rivers and groundwater cross borders, so when one country over-extracts or pollutes a river, downstream countries face shortages too — as the UN Secretary-General warned at the 2023 Water Conference, “Water is humanity’s lifeblood.” Around 2 billion people already lack safely managed drinking water and demand is expected to outstrip supply by 40% by 2030, so a response from every country, especially heavy water users, is needed for the problem to be solved at all. On the other hand, from an economic and developmental perspective, demanding the same response from every country is unfair: lower-income countries argue that wealthier nations grew their economies through unsustainable water and energy use, so wealthier nations should respond first and fund water infrastructure in poorer ones. Some also argue that without binding agreements, conference pledges are often not met. Synthesising these perspectives, it is important to a large extent that all countries respond — because rivers and aquifers are shared and shortages are accelerating — but responses must be differentiated by responsibility and capacity, with the biggest water users and wealthiest nations doing the most.',
    keyConcepts: ['global interactions', 'systems', 'sustainability', 'disparity & equity', 'synthesis'],
    keywords: ['water crisis', 'all countries', 'UN Water Conference', 'Guterres', 'fresh water', 'rivers', 'groundwater', 'cross borders', 'high-income', 'low-income', '2 billion', 'perspectives', 'synthesis', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing different perspectives on whether all countries must respond, with examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 developed perspectives, accurate examples and terminology, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. (Brief, little detail.)' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. (Examples accurate but may lack detail; terminology accurate in context.)' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology. (Reasons included; very good understanding of the water crisis; terminology effective in most of the essay.)' },
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
