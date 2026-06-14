import 'server-only'

/**
 * MYP Integrated Humanities — May 2024 · Variant 2 mark scheme (rubric-banded).
 *
 * Construct mirrors humanities-may-2024 EXACTLY: identical RubricBand / MSEntry
 * interfaces, identical band descriptors + marks structure + commandTerm /
 * commandTermDefinition. Only the worked exemplars, keyConcepts, keywords and
 * feedback are rewritten for the new scenarios (Mill Quarter regeneration;
 * rooftop-solar investigation; rising-food-prices script).
 */

export interface RubricBand {
  marks: string // e.g. '0', '1', '2–3', 'CritA 7–8'
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
  q1_: {
    marks: 1,
    exemplar: 'Merchants who traded the manufactured goods.',
    keyConcepts: ['industrialization', 'stakeholders', 'economic systems'],
    keywords: ['investors', 'merchants', 'mill owners', 'government policy makers', 'workers', 'labour unions', 'citizens', 'countries'],
    feedbackHit: 'You correctly named one valid stakeholder (e.g. merchants, mill owners, investors, workers, governments, countries) that benefitted from industrialization.',
    feedbackMiss: 'State a specific stakeholder group or named individual/country that gained from industrialization, e.g. merchants or mill owners.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      {
        marks: '1',
        descriptor:
          'Identifies one valid stakeholder who has benefitted from industrialization. Responses may include: Investors; Business owners; Traders; Government policy makers; Workers; Labour unions; Citizens; Countries (can also be a named country/region); Specific named individuals. Accept any valid response. Note: a response can reference any industrialization period.',
      },
    ],
  },

  q2_: {
    marks: 2,
    exemplar: 'The invention of new machinery such as the powered loom that allowed goods to be made in factories.',
    keyConcepts: ['industrialization', 'causation', 'technology'],
    keywords: ['new machinery', 'powered loom', 'inventions', 'factories', 'cause'],
    feedbackHit: 'You outlined one genuine reason (cause) for industrialization and added brief elaborating detail to lift it beyond a bare statement.',
    feedbackMiss: 'Give a reason (a cause), not a consequence. Ease, speed and improvements are changes/consequences, not reasons. Add brief detail to your reason to reach 2 marks.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student states one reason why industrialization occurred. A (1 mark) response is likely to be one sentence that hints at a single reason.', exemplar: 'The invention of new machinery.' },
      { marks: '2', descriptor: 'The student outlines one reason why industrialization occurred. A (2 mark) response is likely to be a single sentence with a single reason that is elaborated on; the detail provided will be brief.', exemplar: 'The invention of new machinery such as the powered loom that allowed goods to be made in factories.' },
    ],
  },

  q3_: {
    marks: 3,
    exemplar:
      'Family life changed as work moved out of the home and into the factory. Men, women and often children left cottage workshops to work fixed shifts at the mills for a wage, so households now depended on factory pay and were organised around the factory clock and bell rather than working together at home as before.',
    keyConcepts: ['industrialization', 'social change', 'family life', 'factory work'],
    keywords: ['work moved to the factory', 'cottage workshops', 'fixed shifts', 'wage', 'factory clock', 'family life', 'new ways of living'],
    feedbackHit: 'You described a societal change in detail (e.g. family/work life, factory work, migration), giving depth and possibly an example rather than just naming it.',
    feedbackMiss: 'Move beyond merely stating a change. Develop one change in detail (e.g. explain how factory work reshaped family life) and consider supporting it with an example.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student states how society changed after industrialization. A (1 mark) response is likely to be one sentence that hints at a single change.', exemplar: 'Work moved out of the home and into factories.' },
      { marks: '2', descriptor: 'The student outlines how society changed after industrialization. A (2 mark) response is likely to be a single sentence with a way society changed that is elaborated on; the detail provided will be brief.', exemplar: 'Work moved out of the home into factories, so families left cottage workshops to work fixed shifts at the mills for a wage.' },
      { marks: '3', descriptor: 'The student describes how society changed after industrialization. How society changed should be considered in detail. An example may be used to support the description. More important than the length of the response is the quality and depth provided.', exemplar: '1. Work moved out of the home and into the factory, so families left cottage workshops to work fixed shifts at the mills for a wage. 2. Households now depended on factory pay and were organised around the factory clock and bell rather than working together at home as before.' },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'STRENGTH: The investigation includes primary and secondary sources, such as interviews with the local solar households. This provides a first-hand account of how rooftop panels changed daily life because the families describe exactly how their electricity use and costs changed, which strengthens the validity of the findings. LIMITATION: They did not consult a broad enough range of sources and mostly relied on the interviews with the four families. Looking at a broader range of sources would have improved the reliability of the team’s findings because they would be better informed about how solar adoption has affected households across the whole town. APPRAISAL: Overall the investigation is good as it has some strengths — it conducts interviews with local solar households — however, they need to expand the number of sources to improve the investigation. On balance the process was effective but could be made more reliable.',
    keyConcepts: ['primary and secondary sources', 'reliability', 'validity', 'investigation process', 'evaluation'],
    keywords: ['primary sources', 'secondary sources', 'interviews', 'range of sources', 'reliability', 'first-hand account', 'appraisal', 'overall judgement', 'strengths', 'limitations'],
    feedbackHit: 'You evaluated the process across all three strands — identifying and explaining at least one strength (e.g. use of primary AND secondary sources/interviews) and one limitation (e.g. too narrow a range of sources) with reasoning, and gave a balanced overall appraisal that weighs both sides into a judgement.',
    feedbackMiss: 'Evaluate means weigh strengths AND limitations and reach an overall appraisal. Explain at least one strength and one limitation with reasoning (not just a statement plus reason), then give a balanced judgement of the whole process that links to the points you made.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: 'Strengths 1', descriptor: 'The student states the strength(s) of the investigation. Only one strength needs to be mentioned to warrant 1 mark; quality is rewarded, not the number of strengths. A 1-mark response can be one sentence referring to a single strength.', exemplar: 'The investigation includes primary and secondary sources.' },
      { marks: 'Strengths 2', descriptor: 'The student outlines the strength(s) of the investigation. Only one strength needs to be mentioned and elaborated on. A 2-mark response is likely to be a single sentence with two clauses or two/three short sentences; the detail will be brief. (If a student outlines 3 or more strengths they can be awarded 3 marks.)', exemplar: 'The investigation includes primary and secondary sources, such as interviews with local solar households.' },
      { marks: 'Strengths 3', descriptor: 'The student explains the strength(s) of the investigation. Only one strength needs to be mentioned and elaborated on in additional detail with reasoning. (If a student outlines 3 or more strengths they can be awarded 3 marks.)', exemplar: 'The investigation includes primary and secondary sources, such as interviews with local solar households. This provides a first-hand account of how rooftop panels changed daily life because the families describe exactly how their electricity use and costs changed.' },
      { marks: 'Limitations 0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Note: suggesting alternative methods can be interpreted as addressing limitations.' },
      { marks: 'Limitations 1', descriptor: 'The student states the limitation(s) of the investigation. Only one limitation needs to be mentioned. A 1-mark response can be one sentence referring to a single limitation.', exemplar: 'They did not consult a broad enough range of sources.' },
      { marks: 'Limitations 2', descriptor: 'The student outlines the limitation(s) of the investigation. Only one limitation needs to be mentioned and elaborated on. A 2-mark response is likely to be a single sentence with two clauses or two/three short sentences. (If a student outlines 3 or more limitations they can be awarded 3 marks.)', exemplar: 'They did not consult a broad enough range of sources and mostly relied on the interviews with the four families.' },
      { marks: 'Limitations 3', descriptor: 'The student explains the limitation(s) of the investigation, elaborated on in additional detail with reasoning. (If a student outlines 3 or more limitations they can be awarded 3 marks.)', exemplar: 'They did not consult a broad enough range of sources and mostly relied on the interviews with the four families. Looking at a broader range of sources would have improved the reliability of the team’s findings because they would be better informed about how solar adoption has affected households across the whole town.' },
      { marks: 'Appraisal 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: 'Appraisal 1', descriptor: 'The student states an appraisal of the investigation. The appraisal statement is likely to be a summary of the strengths and limitations or a brief judgment on the investigative process. The appraisal can appear anywhere in the response; it does not have to be a concluding statement.', exemplar: 'Overall the investigation is good but there is room for improvement.' },
      { marks: 'Appraisal 2', descriptor: 'The student outlines an appraisal of the investigation. The appraisal weighs up both positive and negative points (with examples for both sides) and makes an overall judgement on the students’ investigative process. It must reflect the entire response/arguments to count as an appraisal.', exemplar: 'Overall the investigation is good as it has some strengths - it conducts interviews with local solar households, however, they need to expand the number of sources to improve the investigation.' },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'To what extent did coal mining change the health of mining families in the Ruhr Valley?',
    keyConcepts: ['research question', 'statement of inquiry', 'focus', 'industrialization'],
    keywords: ['clear', 'focused', 'specific group', 'specific location', 'connected to SoI', 'to what extent'],
    feedbackHit: 'Your research question is both clear and focused — it connects to industrialization AND narrows to a specific group (e.g. mining families) or place (e.g. the Ruhr Valley).',
    feedbackMiss: 'Make the question both clear AND focused: connect it to industrialization and narrow it to a specific community, group or location. Don’t just reword the statement of inquiry.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. Note: rewording the statement of inquiry into a question should be awarded 0 marks.' },
      { marks: '1', descriptor: 'The student formulates a research question that is either clear OR focused and connected to the statement of inquiry. The RQ is clear (you understand the intention of the investigation) and connected to the SoI but lacks focus as it doesn’t specify, for example, a location or community.', exemplar: 'To what extent did coal mining change people’s health?' },
      { marks: '2', descriptor: 'The student formulates a research question that is both clear AND focused and connected to the statement of inquiry. The RQ is clear, connected to the SoI (coal mining) and focuses on a specific group of people or a specific location.', exemplar: 'To what extent did coal mining change the health of mining families? / To what extent did coal mining change people’s health in the Ruhr Valley?' },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'The Ruhr Valley was one of the most heavily industrialized coal regions, where whole families depended on the mines for work and lived in mining towns. Studying how working conditions and disease rates changed over the period of industrialization will reveal the extent to which the growth of mining damaged or improved the health of those families. This makes the question worthy of investigation because it links an economic change directly to a measurable human outcome.',
    keyConcepts: ['justification', 'significance of research', 'industrialization', 'social change'],
    keywords: ['worthy of investigation', 'coal region', 'mining towns', 'mining families', 'working conditions', 'disease rates', 'reasoning'],
    feedbackHit: 'You justified the question — you developed a specific factor in detail AND gave clear reasoning for why this question is worth investigating, not just a generic statement.',
    feedbackMiss: 'To justify (4 marks) you must develop a specific argument in detail AND add reasoning for why the RQ matters. Avoid vague restatements of the question; build on specifics relevant to your chosen focus.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: '1', descriptor: 'The student states why the research question is worthy of investigation. No detail is required/brief — likely a single sentence making a simple statement of why the RQ is worthy. Responses may apply to any research (e.g. “My question identifies a change relating to industrialization”).', exemplar: 'The Ruhr Valley is a region with lots of coal mines.' },
      { marks: '2', descriptor: 'The student outlines why the research question is worthy of investigation. Likely a single sentence with two clauses or two/three short sentences providing brief detail. Responses may include general or vague information (nothing specific) that repeats the content of the question without adding new specific details.', exemplar: 'The Ruhr Valley is a region with lots of coal mines that employed many families.' },
      { marks: '3', descriptor: 'The student describes why the research question is worthy of investigation. At least one specific argument/factor should be considered in detail without providing reasoning why the RQ is worthy. More important than length is the quality and depth provided. Responses include new information that derives from the question.', exemplar: 'The Ruhr Valley was a heavily industrialized coal region where whole families depended on the mines for work and lived in mining towns.' },
      { marks: '4', descriptor: 'The student justifies why the research question is worthy of investigation. At least one specific argument/factor should be considered in detail, along with reasoning why the RQ is worthy. More important than length is the quality and depth provided. Responses include a comprehensive reason that builds on the details of the description.', exemplar: 'The Ruhr Valley was a heavily industrialized coal region where whole families depended on the mines for work. Studying how working conditions and disease rates changed over the period of industrialization will reveal the extent to which the growth of mining damaged or improved the health of those families.' },
    ],
  },

  q5_c: {
    marks: 1,
    exemplar: 'Conducting interviews with a retired miner on the topic (relevant to my research question on coal mining and mining families in the Ruhr Valley).',
    keyConcepts: ['primary source', 'research methods'],
    keywords: ['interview', 'survey', 'photographs', 'first-hand', 'primary source'],
    feedbackHit: 'You named a valid primary source (e.g. interview/survey/photographs) made specific to your investigation.',
    feedbackMiss: 'Name a primary source AND tie it to your investigation. A bare word like “survey” scores 0 — specify, e.g. “a survey of mining families in the Ruhr Valley”.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '1', descriptor: 'States one valid primary source relevant to the topic of investigation, the RQ and/or the SoI. Responses may include: Survey; Interviews; Taking photographs (each relevant to the investigation). Note: stating only “survey” (generic, not specific to the investigation) should be awarded 0 marks. Responses can be general as long as there are details in support. Accept any valid response.' },
    ],
  },

  q5_d: {
    marks: 1,
    exemplar: 'Published medical or census records on disease rates in Ruhr Valley mining towns (relevant to my research question/SoI).',
    keyConcepts: ['secondary source', 'research methods'],
    keywords: ['published articles', 'census records', 'previous studies', 'newspaper reports', 'secondary source'],
    feedbackHit: 'You named a valid secondary source (e.g. published records/web research/newspaper reports) made specific to your investigation.',
    feedbackMiss: 'Name a secondary source AND make it specific to your investigation. A bare phrase like “newspaper reports” scores 0 — add detail relevant to your topic.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '1', descriptor: 'States one valid secondary source relevant to the topic of investigation, the RQ and/or the SoI. Responses may include: Use published articles; Conduct web research on previous studies; Newspaper reports (each relevant to the investigation). Note: stating only “newspaper reports” (generic, not specific to the investigation) should be awarded 0 marks. Responses can be general as long as there are details in support. Accept any valid response.' },
    ],
  },

  q5_e: {
    marks: 2,
    exemplar: '1. A retired coal miner from the Ruhr Valley. 2. A doctor at a clinic that served the mining towns.',
    keyConcepts: ['interviews', 'stakeholders', 'research planning'],
    keywords: ['mine owners', 'miners', 'employees', 'mining-town doctor', 'history professor', 'mining families', 'specific people'],
    feedbackHit: 'You identified two specific, relevant people to interview (e.g. a retired miner, a mining-town doctor) who would broaden your investigation.',
    feedbackMiss: 'Name two SPECIFIC people relevant to your investigation. Generic words like “stakeholders” score 0 — be precise, e.g. “a retired miner” and “a mine owner”.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '2', descriptor: 'Identifies two people who could be interviewed to broaden the investigation. Award 1 mark per valid response up to a maximum of 2 marks. Responses may include: Officers of a government department; Relevant stakeholders such as mine owners, miners, employees; History professor; Workers/families connected to the industry being studied. Note: stating only “stakeholders” (not specific to the investigation) should be awarded 0 marks. Accept any valid response that relates to the student’s investigation.' },
    ],
  },

  q5_f: {
    marks: 2,
    exemplar: 'From the retired miner I would gather what the working conditions underground were like and whether he or his family suffered illnesses he linked to the mine.',
    keyConcepts: ['data collection', 'interviews', 'research planning'],
    keywords: ['information gathered', 'working conditions', 'illness', 'elaborated detail'],
    feedbackHit: 'You outlined the information you’d gather from one named person, developing a single piece of information with brief elaborating detail (linked to your RQ).',
    feedbackMiss: 'Outline (not just state) the information: take one piece of information from one of your interviewees and add brief detail showing how it informs your research question.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student states the information they would gather. A 1-mark response is likely to be one sentence that hints at a single piece of information.', exemplar: 'What the working conditions were like.' },
      { marks: '2', descriptor: 'The student outlines the information they would gather. A 2-mark response is likely to be a single piece of information that is elaborated on; the detail provided will be brief.', exemplar: 'What the working conditions underground were like and whether his family suffered illnesses he linked to the mine.' },
    ],
  },

  q6_: {
    marks: 18,
    exemplar:
      'Did you know that a basic basket of food now costs a third more than it did just two years ago, and families in our country are skipping meals to make ends meet? Governments, this one’s for you — you hold the power to ease rising food prices. Our first main point is that the government should provide targeted subsidies on staple foods such as bread, rice and cooking oil. Prices have climbed because of higher fuel and fertiliser costs that ripple through the whole food chain, so the poorest households are hit hardest. To respond to this, the government could cover part of the cost of staples so shop prices fall for those who need it most. Secondly, we propose that the government invest in local food production by giving low-cost loans to small farmers, because relying on expensive imports leaves our shelves exposed whenever global prices spike. However, support is still skewed towards large importers, leaving smallholders unable to grow more. So, governments — act now: subsidise staple foods and back our local farmers, and together we can keep food on every family’s table.',
    keyConcepts: ['economic agents', 'rising food prices', 'persuasion', 'script writing', 'explanation'],
    keywords: ['economic agent', 'government', 'food prices', 'two ways', 'subsidies', 'staple foods', 'local food production', 'loans', 'hook', 'call to action', 'introduction', 'conclusion', 'rhetorical question', 'emotive vocabulary'],
    feedbackHit: 'Strong script: you explained (with reasoning and examples) two ways your chosen economic agent could help with rising food prices [Crit A], included an introduction and conclusion [C1], wrote in a convincing script style with a hook and call to action [C2], and structured ideas so they flow seamlessly [C3].',
    feedbackMiss: 'Make sure you (1) explain TWO ways the agent can help with reasons/examples — only one way caps Crit A at 3; (2) include both an introduction AND conclusion; (3) write like a persuasive video script (hook, direct address, call to action) not an essay; (4) connect ideas logically with transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. (Criterion A assesses only the content of the argument(s)/explanation(s); format, language style and organization are assessed by Criterion C.)' },
      { marks: 'CritA 1', descriptor: 'The student demonstrates limited knowledge and understanding by outlining to one economic agent one way in which they could help with rising food prices for a country, using limited examples and limited relevant terminology. Responses are likely to be brief, with little detail. There is a requirement to include an example but the lack of one does not mean the student cannot be awarded 1 mark. Terminology may be limited in terms of accuracy and/or frequency.', exemplar: 'The government should subsidise staple foods such as bread and rice. Prices have gone up a lot.' },
      { marks: 'CritA 2–3', descriptor: 'The student demonstrates adequate knowledge and understanding by describing to one economic agent two ways in which they could help with rising food prices for a country, using satisfactory examples and appropriate relevant terminology. (If the student only provides one way, the maximum is 3 marks.) There is likely little or no reasoning; terminology used should be accurately used in the correct context.', exemplar: 'Our first main point is that the government should subsidise staple foods such as bread, rice and cooking oil. To respond to high prices the government could cover part of the cost so shop prices fall. Secondly, we propose that the government invest in local food production by giving low-cost loans to small farmers.' },
      { marks: 'CritA 4–5', descriptor: 'The student demonstrates substantial knowledge and understanding by explaining to one economic agent two ways in which they could help with rising food prices for a country, using accurate examples and appropriate relevant terminology. Students need to demonstrate good understanding by providing a detailed response to the question, calling on appropriate example(s) that support their point(s). Terminology used accurately and effectively in the correct context.', exemplar: '…Prices have climbed because of higher fuel and fertiliser costs that ripple through the food chain, so the poorest households are hit hardest. To respond, the government could cover part of the cost of staples. Secondly, we propose that the government invest in local food production by giving low-cost loans to small farmers.' },
      { marks: 'CritA 6', descriptor: 'The student demonstrates detailed knowledge and understanding by thoroughly explaining to one economic agent two ways in which they could help with rising food prices for a country, using accurate and effective descriptions and explanations, and appropriate relevant terminology. The response should be very detailed and provide clear reasoning, making use of example(s); comprehensive understanding of how one economic agent could help should be included. (An excellent response need not be perfect; different responses may earn the same mark.)', exemplar: '…Prices have climbed because of higher fuel and fertiliser costs that ripple through the whole food chain, so the poorest households are hit hardest. To respond, the government could cover part of the cost of staples so shop prices fall for those who need it most. Secondly, we propose that the government invest in local food production by giving low-cost loans to small farmers, because relying on expensive imports leaves our shelves exposed whenever global prices spike. However, support is still skewed towards large importers, leaving smallholders unable to grow more.' },
      { marks: 'C1 format 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C1 format 1', descriptor: 'One of the following features is included: an introduction; a conclusion.' },
      { marks: 'C1 format 2', descriptor: 'Two of the following features are included: an introduction; a conclusion.' },
      { marks: 'C2 communicating 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C2 communicating 1–2', descriptor: 'The student communicates information and ideas using a style and language that are rarely appropriate to the format of an informative and convincing script for the chosen economic agent and the purpose of explaining. Language is rarely clear or appropriate to a script; reads more formally (e.g. like an essay). Language is basic/simple and doesn’t engage the audience effectively. Text may be extremely short (5-6 lines or less) so not enough evidence to award higher.' },
      { marks: 'C2 communicating 3–4', descriptor: 'The student communicates information and ideas using a style and language that are occasionally appropriate to the format of an informative and convincing script for the chosen economic agent and the purpose of explaining. Language is clear and appropriate; text reads at times more formally (like an essay) and at times like a script (more essay-like → 3 marks; more script-like → 4 marks; best-fit applied). Some language features such as adjectives, adverbs, similes, hyperbole, metaphor, imagery, rhetorical questions, concise sentences and emotive vocabulary used to engage the audience. To convince and engage, you must address a person/audience; if done once, can be awarded 4 marks. Other features needed for higher.' },
      { marks: 'C2 communicating 5–6', descriptor: 'The student communicates information and ideas using a style and language that are consistently appropriate to the format of an informative and convincing script for the chosen economic agent and the purpose of explaining. Language is clear and completely appropriate; text reads like a script throughout — it compels and convinces the economic agent so they identify with the issue and are led into possible action. Language features (adjectives, adverbs, similes, hyperbole, metaphor, imagery, rhetorical questions, concise sentences, emotive vocabulary) often used. An effective hook at the beginning should be included to get the viewer’s attention and introduce the message/topic. First-person plural may be used. To be consistently appropriate, there should be a clear “call to action” at the end along with other language features.' },
      { marks: 'C3 organization 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C3 organization 1', descriptor: 'The student structures information and ideas in a way that is rarely effective and appropriate to the economic agent and purpose of explaining. Ideas rarely build on each other in a logical manner; rarely uses effective transitions within/between sentences and/or paragraphs. Text may be extremely short (5-6 lines or less). Text may read like a list of items.' },
      { marks: 'C3 organization 2', descriptor: 'The student structures information and ideas in a way that is occasionally effective and appropriate to the economic agent and purpose of explaining. Ideas occasionally build on each other in a logical manner; sometimes uses effective transitions within/between sentences and/or paragraphs.' },
      { marks: 'C3 organization 3', descriptor: 'The student structures information and ideas in a way that is mainly effective and appropriate to the economic agent and the purpose of explaining. Ideas frequently build on each other in a logical manner; often uses effective transitions within/between sentences and/or paragraphs.' },
      { marks: 'C3 organization 4', descriptor: 'The student structures information and ideas in a way that is consistently effective and appropriate to the economic agent and the purpose of explaining. Ideas consistently build on each other in a clear and logical manner; always uses effective transitions. Ideas flow seamlessly.' },
    ],
  },

  q7_a: {
    marks: 1,
    exemplar: 'The Riverside Heritage Regeneration Trust (its published report).',
    keyConcepts: ['origin of sources', 'source analysis'],
    keywords: ['Riverside Heritage Regeneration Trust', 'published report', 'Mill Quarter'],
    feedbackHit: 'You correctly stated the origin — the Riverside Heritage Regeneration Trust / its published report.',
    feedbackMiss: 'State where the source comes from: it is the published report of the Riverside Heritage Regeneration Trust.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '1', descriptor: 'States the origin of Source A. Responses may include: the Riverside Heritage Regeneration Trust; the Trust’s published report; the Mill Quarter regeneration report. Accept any valid response.' },
    ],
  },

  q7_b: {
    marks: 1,
    exemplar: 'To inform people about how the Trust regenerated the historic Mill Quarter.',
    keyConcepts: ['purpose of sources', 'source analysis'],
    keywords: ['inform people', 'regeneration', 'preserving heritage', 'raise awareness', 'combine heritage and green space'],
    feedbackHit: 'You stated a valid purpose, e.g. to inform people about the regeneration / raise awareness of preserving industrial heritage and green space.',
    feedbackMiss: 'State why the source was made: e.g. to inform people about the Mill Quarter regeneration or to raise awareness of preserving industrial heritage alongside green space.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '1', descriptor: 'States the purpose of Source A. Responses may include: to inform people about how the Trust regenerated the historic Mill Quarter; to inform people about the value of preserving industrial heritage; to raise awareness about combining heritage with green public space; to show how history and modern life can be combined. Accept any valid response.' },
    ],
  },

  q7_c: {
    marks: 3,
    exemplar: 'It shows different ways that the Mill Quarter has been managed focusing on combining industrial heritage with green public space, such as cleaning and reopening the canal and replanting riverside parks and towpaths, which gives an MYP student a concrete real-world example of sustainable urban management to study.',
    keyConcepts: ['value of sources', 'source analysis', 'sustainable management', 'urban environments'],
    keywords: ['value', 'manages urban environment', 'industrial heritage and green space', 'canal', 'pocket parks', 'towpaths', 'detailed account'],
    feedbackHit: 'You described one value in detail — e.g. the source shows real ways the Mill Quarter was managed (industrial heritage and green space such as the canal and riverside parks), useful for a student of sustainable urban management.',
    feedbackMiss: 'Develop ONE value into a detailed account. Don’t stop at a generic statement — add specific detail (e.g. how it shows heritage reuse AND natural/green management like the canal and parks) to reach 3 marks.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: '1', descriptor: 'States one value of Source A for an MYP student studying sustainable management of urban environments. For 1 mark, the response might be general or generic.', exemplar: 'It shows different ways that the Mill Quarter has been managed.' },
      { marks: '2', descriptor: 'Outlines one value of Source A for an MYP student studying sustainable management of urban environments. To award 2 marks, the student must provide some brief detail.', exemplar: 'It shows different ways that the Mill Quarter has been managed focusing on combining industrial heritage with green public space.' },
      { marks: '3', descriptor: 'Describes one value of Source A for an MYP student studying sustainable management of urban environments. To award 3 marks, the student must give a detailed account. (Note: the value can relate to sustainable management in general and not only to the Mill Quarter.)', exemplar: 'It shows different ways that the Mill Quarter has been managed focusing on combining industrial heritage with green public space, such as cleaning and reopening the canal and replanting riverside parks and towpaths.' },
    ],
  },

  q7_d: {
    marks: 3,
    exemplar: 'It doesn’t show if the plan was successful, for example we don’t know the reactions of local residents or whether their lives improved after the Mill Quarter was regenerated, which limits its usefulness for a student trying to evaluate whether the regeneration achieved sustainable management.',
    keyConcepts: ['limitation of sources', 'source analysis', 'sustainable management', 'bias/reliability'],
    keywords: ['limitation', 'plan’s success unknown', 'reactions of residents', 'lives improved', 'detailed account'],
    feedbackHit: 'You described one limitation in detail — e.g. the source doesn’t reveal whether the plan succeeded (no resident reactions / no evidence lives improved), which restricts its usefulness.',
    feedbackMiss: 'Develop ONE limitation into a detailed account. Move beyond a generic statement by adding specific detail (e.g. it omits residents’ reactions or whether lives improved) to reach 3 marks.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: '1', descriptor: 'States one limitation of Source A for an MYP student studying sustainable management of urban environments. For 1 mark, the response might be general or generic. (Note: suggesting improvements to the source can be interpreted as addressing limitations.)', exemplar: 'It doesn’t show if the plan was successful.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A for an MYP student studying sustainable management of urban environments. To award 2 marks, the student must provide some brief detail.', exemplar: 'It doesn’t show if the plan was successful, for example we don’t know the reactions of local residents.' },
      { marks: '3', descriptor: 'Describes one limitation of Source A for an MYP student studying sustainable management of urban environments. To award 3 marks, the student must give a detailed account. (Note: the limitation can relate to sustainable management in general and not only to the Mill Quarter.) Note: the report is written by the Trust itself, which may present its own work favourably.', exemplar: 'It doesn’t show if the plan was successful, for example we don’t know the reactions of local residents or whether their lives improved after the Mill Quarter was regenerated, and because it is written by the Trust it may present the work favourably.' },
    ],
  },

  q8_: {
    marks: 4,
    exemplar: 'The reuse of historic buildings for things such as a covered market hall provides the opportunity to attract shoppers and traders and create revenue for the city. This could be used to regenerate other mill buildings and streets, which could attract more visitors and businesses and increase economic development further.',
    keyConcepts: ['economic development', 'urban redevelopment', 'tourism revenue', 'explanation'],
    keywords: ['reuse of historic buildings', 'market hall', 'attract shoppers', 'revenue', 'regenerate', 'economic development', 'reasons'],
    feedbackHit: 'You explained one method in a detailed account WITH reasons/causes — e.g. reusing historic mill buildings as a market hall attracts shoppers, creates revenue, and funds further regeneration that drives more economic development.',
    feedbackMiss: 'To reach 4 marks, give a detailed account that includes reasons or causes — show the chain (e.g. method → attracts visitors/traders → revenue → further regeneration), not just a statement that it “helps the economy”.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: '1', descriptor: 'The student states how one of the four methods the Riverside Heritage Regeneration Trust used contributed to the economic development of the city. For 1 mark, the response might be general or generic.', exemplar: 'The reuse of historic buildings provides the opportunity to attract visitors.' },
      { marks: '2', descriptor: 'The student outlines one of the four methods the Riverside Heritage Regeneration Trust used contributed to the economic development of the city. To award 2 marks, the student must provide some brief detail.', exemplar: 'The reuse of historic buildings for things such as a covered market hall provides the opportunity to attract shoppers and traders.' },
      { marks: '3', descriptor: 'The student describes how one of the four methods the Riverside Heritage Regeneration Trust used contributed to the economic development of the city. To award 3 marks, the student must give a detailed account.', exemplar: 'The reuse of historic buildings for things such as a covered market hall provides the opportunity to attract shoppers and traders and create revenue for the city.' },
      { marks: '4', descriptor: 'The student explains how one of the four methods the Riverside Heritage Regeneration Trust used contributed to the economic development of the city. To award 4 marks, the student must give a detailed account including reason(s) or cause(s).', exemplar: 'The reuse of historic buildings for things such as a covered market hall provides the opportunity to attract shoppers and traders and create revenue for the city. This could be used to regenerate other mill buildings and streets, which could attract more visitors and businesses and increase economic development further.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Using a detailed example from MYP studies (NOT the Mill Quarter) — e.g. the redevelopment of a chosen city, area or building — the essay thoroughly explains the redevelopment with accurate, effective examples and correct terminology throughout, demonstrating comprehensive contextual and conceptual understanding of the place and its sustainable management. It is set out as separate introduction, main-body and conclusion paragraphs in clear, formal essay style. It develops at least two balanced perspectives (e.g. pros and cons of redevelopment; cultural, natural and economic aspects; impacts on different groups; before/after) and synthesises them into a clear, coherent and convincing conclusion that judges whether the impact on sustainable management is more positive or negative or equally balanced, with examples used effectively to support the argument.',
    keyConcepts: ['sustainable management', 'redevelopment of place', 'perspectives', 'synthesis', 'critical thinking', 'to what extent'],
    keywords: ['redevelopment', 'sustainable management', 'perspectives', 'pros and cons', 'cultural natural economic', 'impacts on different groups', 'before/after', 'synthesis', 'judgement', 'not the Mill Quarter', 'examples'],
    feedbackHit: 'Strong essay across all criteria: a detailed, accurate non-Mill-Quarter example with comprehensive understanding [Crit A]; clear intro, body and conclusion as separate paragraphs in formal essay style [Crit C]; and at least two balanced, well-developed perspectives synthesised into a clear, convincing judgement on the extent of contribution to sustainable management [Crit D].',
    feedbackMiss: 'Lift the response by: choosing a detailed non-Mill-Quarter example and explaining it with reasons [Crit A]; structuring intro/body/conclusion as separate paragraphs in formal essay style [Crit C]; and crucially, weighing at least TWO balanced perspectives and synthesising them into a clear reasoned judgement on “to what extent” (not just one perspective or a missing conclusion) [Crit D].',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. (Note: a place can be an area, town, building…)' },
      { marks: 'CritA 1-2', descriptor: 'The student demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. Responses are likely to be brief, with little detail; the lack of an example does not bar a mark in this band; terminology may be limited in accuracy/frequency.' },
      { marks: 'CritA 3-4', descriptor: 'The student demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. The student has knowledge of the redevelopment of a place; example(s) are accurate but may lack detail or not be the most appropriate. There may be some reasons, but if examples/terminology/detail are insufficient for the higher band, a mark here is awarded. Terminology accurately used in correct context.' },
      { marks: 'CritA 5-6', descriptor: 'The student demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology. Students need to demonstrate a very good understanding of the redevelopment of a place by providing a response that is accurate and responds to the question; an explanation requires reasons. The student should call on appropriate examples that support their points. Terminology accurately and effectively used in correct context in most of the essay.' },
      { marks: 'CritA 7-8', descriptor: 'The student demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. The response should provide accurate detail throughout and clear reasons that support the point(s) made, making use of examples that demonstrate a comprehensive understanding of the redevelopment of a place. For 7-8 marks the response must reference examples in detail to support points. Terminology accurate and effective throughout. (An excellent response need not be perfect or the best seen; different responses may earn the same mark.)' },
      { marks: 'C1 format 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C1 format 1', descriptor: 'Two of the following elements are included: introduction, a main body of argument or a conclusion. The elements must appear as separate paragraphs. If this is not the case, 0 marks should be awarded.' },
      { marks: 'C1 format 2', descriptor: 'Three of the following elements are included: introduction, a main body of argument and a conclusion. The elements must appear as separate paragraphs.' },
      { marks: 'C2 communicating 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. (Note: first-person singular is appropriate and formal in the context of a “to what extent” question, e.g. “I believe that […]”.)' },
      { marks: 'C2 communicating 1', descriptor: 'The style and language used are rarely appropriate to the audience and purpose of informing. The style is rarely consistent with what would be expected in an essay; language is rarely clear. Text may be extremely short (5-6 lines or less) so not enough evidence to award higher.' },
      { marks: 'C2 communicating 2', descriptor: 'The style and language used are occasionally appropriate to the audience and purpose of informing. The style of writing is not always consistent; language is less clear in places.' },
      { marks: 'C2 communicating 3', descriptor: 'The style and language used are consistently appropriate to the audience and purpose of informing. The style of writing is consistent with what would be expected in an essay; language is formal and clear.' },
      { marks: 'C3 organization 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. (Essay should be easy to read with ideas logically connected from one sentence to the next.)' },
      { marks: 'C3 organization 1', descriptor: 'The organizational structure is rarely effective. Paragraphs/ideas sometimes build on each other logically; rarely uses effective transitions within or between sentences and/or paragraphs. Text may be extremely short (5-6 lines or less).' },
      { marks: 'C3 organization 2', descriptor: 'The organizational structure is occasionally effective. Paragraphs/ideas build on each other in a mainly logical manner; sometimes uses effective transitions within and between sentences and/or paragraphs.' },
      { marks: 'C3 organization 3', descriptor: 'The organizational structure is consistently appropriate and effective. Paragraphs/ideas build on each other in a consistently clear and logical manner; when appropriate, uses effective transitions within and between sentences and/or paragraphs.' },
      { marks: 'CritD 0', descriptor: 'The student does not reach a standard described by any of the descriptors below. (Note: a response that includes one perspective is likely to be awarded 1-2 marks. A conclusion shouldn’t present new aspects.)' },
      { marks: 'CritD 1-2', descriptor: 'The student provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed. One perspective is included and considered only superficially (general/vague points). The response does not reach a conclusion or fully answer the question. The response shows little or no evidence of examples being used to help inform the argument; the argument may not always be relevant or appropriate.' },
      { marks: 'CritD 3-4', descriptor: 'The student provides different perspectives in an analysis and summarizes information to make clear arguments in response to the question posed. At least two perspectives (e.g. pros and cons of redevelopment; cultural, natural and economic ways; impacts on different groups, before/after) must be included with development showing some understanding and their implications; perspectives will not be equally considered/balanced. A conclusion related to redevelopment of a place and sustainable management is expected but likely not fully developed. The response should include evidence of examples being used to inform the argument.' },
      { marks: 'CritD 5-6', descriptor: 'The student provides different perspectives in an analysis and synthesizes information to make clear arguments in response to the question posed. At least two perspectives must be included with substantial development showing a good understanding and their implications; perspectives must be equally considered/balanced but might not be highly detailed. Ideas on redevelopment of a place and sustainable management are combined to form a clear and coherent conclusion. The synthesis may appear in the main body or conclusion. The response should include evidence of examples being used effectively to inform and support an argument.' },
      { marks: 'CritD 7-8', descriptor: 'The student provides different perspectives in a detailed discussion and synthesizes information to make clear arguments in response to the question posed. At least two perspectives or more must be included with thorough development showing an excellent understanding and their implications; perspectives must be equally considered/balanced and detailed. Ideas on redevelopment of a place and sustainable management are combined to form a clear, coherent and convincing conclusion that gives a judgment on whether the impact is more positive or negative or equally balanced. Synthesis may appear in the main body or conclusion. The response should include evidence of examples being used effectively to help inform and support a comprehensive argument. (Critical thinking demonstrated need not be perfect; different responses may earn the same mark.)' },
    ],
  },
}
