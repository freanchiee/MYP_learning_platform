import 'server-only'

/**
 * MYP Integrated Humanities — November 2019 · VARIANT 1 mark scheme (rubric-banded).
 * Mirrors humanities-nov-2019 exactly (same RubricBand + MSEntry interfaces, same
 * commandTerm / commandTermDefinition / rubricBands descriptors and marks). Only the
 * worked exemplars, keyConcepts and keywords are rewritten for the new scenarios
 * (agricultural water use · powers/empires/institutions · Rotterdam greenway · papermaking).
 */

export interface RubricBand {
  marks: string // e.g. '0', '1', '2–3', '7–8'
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
    exemplar: 'Population growth.',
    keyConcepts: ['freshwater use', 'farming', 'population growth', 'rising incomes and meat/dairy consumption'],
    keywords: ['population growth', 'rising incomes', 'more meat and dairy consumption', 'Source A'],
    feedbackHit: 'Correct — you identified a reason explicitly given in Source A (population growth, rising incomes, or higher meat/dairy consumption).',
    feedbackMiss: 'Re-read conclusion 2 in Source A. It lists population growth and rising incomes (which lead to more meat and dairy consumption) as reasons the overall freshwater withdrawn for farming has increased.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for stating one valid reason given in Source A. Responses may include: population growth; rising incomes; more meat and dairy consumption. Accept any valid response.',
        exemplar: 'Population growth.',
      },
    ],
  },

  q2_a: {
    marks: 1,
    exemplar: '2640 km³.',
    keyConcepts: ['graph reading', 'prediction', 'freshwater use'],
    keywords: ['2640', 'km³', '2050', 'prediction'],
    feedbackHit: 'Correct — the dotted prediction line reads 2640 km³ at the year 2050.',
    feedbackMiss: 'Trace the dotted prediction line up from 2050 to the curve, then across to the y-axis. The value is 2640 km³ (the unit is not required).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for 2640 km³. Note: The unit does not need to be included to award (1 mark).',
        exemplar: '2640',
      },
    ],
  },

  q2_b: {
    marks: 4,
    exemplar:
      'Based on the predictions, the quality and extent of wetlands might increase. Farmers divert water from the wettest, most fertile floodplains, so the wetlands that recover as withdrawals fall would likely be higher quality than many degraded wetlands today. Because of this increase in quality and extent, animals that rely on wetlands, such as wading birds, amphibians, fish and waterfowl, would have more habitat and breeding ground.',
    keyConcepts: ['biomes', 'water use change', 'habitat', 'wetland recovery / water returned to ecosystems'],
    keywords: ['wetland', 'forest', 'aquatic', 'desert', 'habitat', 'animals', 'increase', 'biodiversity'],
    feedbackHit: 'Strong — you chose one biome and explained a likely impact with clear reasons (e.g. falling withdrawals letting rivers and wetlands recover, increasing habitat).',
    feedbackMiss: 'Pick just one biome and go beyond stating an impact: add reasons WHY the predicted fall in agricultural water use would affect it (e.g. more water left in rivers lets wetlands recover and increases habitat for wetland species).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states the possible impact on one biome. A (1 mark) response is likely to be one sentence that hints at a single impact.',
        exemplar: 'Based on the predictions, wetlands might increase.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the possible impact on one biome. A (2 mark) response is likely to be a single sentence with a single impact that is elaborated on; the detail provided will be brief.',
        exemplar: 'Based on the predictions, wetlands might increase. A variety of animals that live in wetlands would have more available habitat.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the possible impact on one biome. One way should be considered in detail without any comprehensive reasons given. An example may be used to support the description. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'Based on the predictions, wetlands might increase. Because of this increase, animals that rely on wetlands, such as wading birds and amphibians, would have more habitat.',
      },
      {
        marks: '4',
        descriptor: 'The student explains the possible impact on one biome. One way should be considered in detail, along with reasons for the impacts on the biome. An example may be given to support the explanation but is not essential to be awarded (4 marks).',
        exemplar: 'Based on the predictions, the quality and extent of wetlands might increase. Farmers divert water from the wettest, most fertile floodplains, so the wetlands that recover as withdrawals fall would likely be higher quality than many degraded wetlands today. Because of this increase in quality and extent, animals that rely on wetlands, such as wading birds, amphibians, fish and waterfowl, would have more habitat and breeding ground.',
      },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'STRENGTHS (top band): The data they collected was appropriate for understanding global agricultural water use because it lets them see some important relationships. For instance, they can compare the cubic kilometres withdrawn for irrigation with the tonnes of crops produced. This allows them to better understand changes in water efficiency over time. LIMITATIONS (top band): They could have collected data from more countries in order to have a truly global understanding of water-use trends. India, China and the U.S. are important irrigators, but they do not make up the whole world and there are many other countries and regions with large agricultural water demands. Without including some of these countries, such as Pakistan or Egypt, it may be difficult to get an accurate picture of global water use. APPRAISAL (top band): The investigation collected appropriate data, used a balanced range of sources and drew some conclusions based on the data it gathered and analysed. However, more data could have been collected, covering a wider range of countries and crops. In addition, some conclusions seem to have been made without data to support them.',
    keyConcepts: ['evaluation', 'strengths and limitations', 'reliability of sources', 'data validity', 'global representativeness'],
    keywords: ['strengths', 'limitations', 'appraisal', 'data', 'sources', 'countries', 'Pakistan', 'Egypt', 'global', 'conclusions', 'bias'],
    feedbackHit: 'Strong evaluation — you weighed at least one strength and one limitation with reasoning AND gave an overall appraisal that refers to specific aspects of the investigation (data, sources or conclusions).',
    feedbackMiss: 'An evaluation needs all three strands: a reasoned strength, a reasoned limitation, AND an overall appraisal that references the investigation (e.g. that only India/China/US data limits global validity, or that conclusions lacked supporting data).',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: 'Strengths 1',
        descriptor: 'The student states the strength(s) of the process and results of the investigation. Only one strength needs to be mentioned to warrant (1 mark). A (1 mark) response can be one sentence that refers to a single strength.',
        exemplar: 'They collected a lot of appropriate data.',
      },
      {
        marks: 'Strengths 2',
        descriptor: 'The student outlines the strength(s) of the process and results of the investigation. Only one strength needs to be mentioned and elaborated on to warrant (2 marks). However, if a student outlines 3 or more strengths, they can be awarded 3 marks. A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.',
        exemplar: 'The data they collected, such as cubic kilometres withdrawn and tonnes of crops produced, was appropriate for understanding global agricultural water use.',
      },
      {
        marks: 'Strengths 3',
        descriptor: 'The student explains the strength(s) of the process and results of the investigation. Only one strength needs to be mentioned and elaborated on in additional detail with reasoning to warrant (3 marks). If a student outlines 3 or more strengths, they can be awarded 3 marks.',
        exemplar: 'The data they collected was appropriate for understanding global agricultural water use because it lets them see some important relationships. For instance, they can compare the cubic kilometres withdrawn for irrigation with the tonnes of crops produced. This allows them to better understand changes in water efficiency over time.',
      },
      { marks: 'Limitations 0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Note: suggesting alternative methods can be interpreted as addressing limitations.' },
      {
        marks: 'Limitations 1',
        descriptor: 'The student states the limitation(s) of the process and results of the investigation. Only one limitation needs to be mentioned to warrant (1 mark). A (1 mark) response can be one sentence that refers to a single limitation.',
        exemplar: 'They could have collected data from more countries.',
      },
      {
        marks: 'Limitations 2',
        descriptor: 'The student outlines the limitation(s) of the process and results of the investigation. Only one limitation needs to be mentioned and elaborated on to warrant (2 marks). If a student outlines 3 or more limitations, they can be awarded 3 marks. A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.',
        exemplar: 'They could have collected data from more countries. The U.S., China and India are large irrigators but there are other important countries, such as Pakistan or Egypt, that should have been considered.',
      },
      {
        marks: 'Limitations 3',
        descriptor: 'The student explains the limitation(s) of the process and results of the investigation. Only one limitation needs to be mentioned and elaborated on in additional detail with reasoning to warrant (3 marks). If a student outlines 3 or more limitations, they can be awarded 3 marks.',
        exemplar: 'They could have collected data from more countries in order to have a truly global understanding of water-use trends. China, India and the U.S. are important irrigators, but they do not make up the whole world and there are many other countries and regions with large agricultural water demands. Without including some of these countries, such as Pakistan or Egypt, it may be difficult to get an accurate understanding of global water use.',
      },
      { marks: 'Appraisal 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: 'Appraisal 1',
        descriptor: 'The student provides an overall appraisal of the investigation process. Responses will give an overall appraisal without referencing aspects of the investigation to support it. It may be a general or vague comment that could apply to any investigation.',
        exemplar: 'The investigation does have some strengths, but overall there are ways that it could be improved to make the investigation more successful.',
      },
      {
        marks: 'Appraisal 2',
        descriptor: 'The student provides a detailed overall appraisal of the investigation process. Responses must refer to at least one aspect of the investigation to support the overall appraisal. The appraisal can appear anywhere in the response; it does not have to be a concluding statement.',
        exemplar: 'The investigation collected appropriate data, used a balanced range of sources and drew some conclusions based on the data it gathered and analysed. However, more data could have been collected, covering a wider range of countries and crops. In addition, some conclusions seem to have been made without data to support them.',
      },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent will the wider adoption of drip irrigation impact the freshwater used to grow cotton in Pakistan?',
    keyConcepts: ['research question', 'clarity', 'focus', 'future trends'],
    keywords: ['research question', 'drip irrigation', 'population growth', 'focused', 'clear', 'place', 'product'],
    feedbackHit: 'Excellent RQ — it is clear (intention is obvious), connected to a future trend, and focused by naming a specific place and product.',
    feedbackMiss: "Make your RQ both clear AND focused. Tie it to one trend (water-saving technology or population growth) and narrow it with a specific location and crop, e.g. '…impact the freshwater used to grow cotton in Pakistan?'",
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. A bullet point with a question term at the start should be awarded (0 marks).' },
      {
        marks: '1',
        descriptor: 'The student formulates a research question that is either clear or focused and connected to one of the areas for further investigation. The RQ is clear and connected to a trend, but lacks focus (e.g. does not specify a location).',
        exemplar: 'To what extent will the wider adoption of drip irrigation impact freshwater use in farming?',
      },
      {
        marks: '2',
        descriptor: 'The student formulates a research question that is both clear and focused and connected to one of the areas for further investigation. The RQ is clear, connected to a trend, and focuses on a place and product.',
        exemplar: 'To what extent will the wider adoption of drip irrigation impact the freshwater used to grow cotton in Pakistan?',
      },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My research question is about the impact of wider drip irrigation on cotton in Pakistan. This is relevant because drip irrigation can sharply reduce the amount of water needed to grow thirsty crops, such as cotton, which can in turn reduce the overall freshwater withdrawn for farming. By looking specifically at cotton, I would be able to draw some further conclusions about the impact of water-saving technology in Pakistan and elsewhere on future water use.',
    keyConcepts: ['justification', 'relevance', 'future trends', 'water-use efficiency'],
    keywords: ['relevant', 'drip irrigation', 'reduce water', 'future', 'cotton', 'Pakistan', 'conclusions'],
    feedbackHit: 'Strong justification — you considered the relevance of your RQ in detail AND gave reasons why it matters to future water-use trends (e.g. drip irrigation reducing water needed for crops).',
    feedbackMiss: 'Go beyond stating that your RQ is relevant: give reasons WHY (e.g. drip irrigation reduces water needed per crop, so studying it helps predict future water use) and link it explicitly to the future trend.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states how the research question is relevant to the issue of future trends in freshwater use for farming. No detail is required. This is likely to be a single sentence response that makes a simple connection between the future trend and the RQ.',
        exemplar: 'My research question is about how drip irrigation in Pakistan will impact water use in the future.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines how the research question is relevant to the issue of future trends in freshwater use for farming. Likely to be a single sentence with two clauses or two/three short sentences that provides brief detail on how the RQ is relevant to the future trend.',
        exemplar: 'My research question is about how drip irrigation in Pakistan will impact water use in the future. Looking at drip irrigation on cotton will give me specific information.',
      },
      {
        marks: '3',
        descriptor: 'The student describes how the research question is relevant to the issue of future trends in freshwater use for farming. At least one argument/factor should be considered in detail without providing reasoning why the RQ is relevant to the future trend. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'My research question is about the impact of wider drip irrigation on cotton in Pakistan. This is relevant because drip irrigation can decrease the amount of freshwater used for farming. By looking specifically at cotton, I would be able to draw some further conclusions about other crops grown in the future.',
      },
      {
        marks: '4',
        descriptor: 'The student justifies how the research question is relevant to the issue of future trends in freshwater use for farming. At least one argument/factor should be considered in detail, along with reasoning why the RQ is relevant to the future trend. To provide the required level of detail for (4 marks), a short to mid-length paragraph is likely to be required.',
        exemplar: 'My research question is about the impact of wider drip irrigation on cotton in Pakistan. This is relevant because drip irrigation can sharply reduce the amount of water needed to grow thirsty crops, such as cotton, which can in turn reduce the overall freshwater withdrawn for farming. By looking specifically at cotton, I would be able to draw some further conclusions about the impact of water-saving technology in Pakistan and elsewhere on future water use.',
      },
    ],
  },

  q4_c: {
    marks: 4,
    exemplar:
      'Investigating future trends will always involve multiple unpredictable variables. For example, I know that drip irrigation usually increases water efficiency and makes it possible to grow the same crop with less water. Therefore, I might predict that wider use of drip irrigation in Pakistan would lower the freshwater used to grow cotton. However, some unforeseen variables could arise. For instance, if drip irrigation made cotton more profitable, more farmers might plant cotton or expand their fields. This could cause total water use for cotton to rise instead.',
    keyConcepts: ['challenges of investigation', 'unpredictability', 'confounding variables', 'forecasting'],
    keywords: ['unpredictable', 'variables', 'future', 'challenge', 'drip irrigation', 'efficiency', 'unforeseen'],
    feedbackHit: 'Strong — you identified one challenge of investigating the future and explained it in detail with reasoning and an example (e.g. unforeseen variables overturning a drip-irrigation prediction).',
    feedbackMiss: "Focus on one challenge and develop it: not just 'the future is unpredictable' but WHY (e.g. an unforeseen variable like higher profitability could make more farmers plant cotton, expanding water use against the prediction).",
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states one challenge of investigating future trends in freshwater use for farming. A (1 mark) response is likely to be one sentence that hints at a single challenge.',
        exemplar: 'It is difficult to predict what will happen in the future. Unexpected things can happen.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one challenge of investigating future trends in freshwater use for farming. A (2 mark) response is likely to be a single sentence with a single challenge that is elaborated on; the detail provided will be brief.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. Unforeseen variables could arise, which could cause water use for cotton to change unexpectedly.',
      },
      {
        marks: '3',
        descriptor: 'The student describes one challenge of investigating future trends in freshwater use for farming. One challenge should be considered in detail without any comprehensive reasons given. An example may be used to support the description. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. For example, I know that drip irrigation usually increases water efficiency and makes it possible to grow the same crop with less water. Therefore, I might predict that wider use in Pakistan would lower the water used to grow cotton. However, some unforeseen variables could arise, causing water use for cotton to rise.',
      },
      {
        marks: '4',
        descriptor: 'The student explains one challenge of investigating future trends in freshwater use for farming. One challenge should be considered in detail, along with reasoning. An example may be given to support the explanation.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. For example, I know that drip irrigation usually increases water efficiency and makes it possible to grow the same crop with less water. Therefore, I might predict that wider use of drip irrigation in Pakistan would lower the freshwater used to grow cotton. However, some unforeseen variables could arise. For instance, if drip irrigation made cotton more profitable, more farmers might plant cotton or expand their fields. This could cause total water use for cotton to rise instead.',
      },
    ],
  },

  q4_d: {
    marks: 1,
    exemplar: 'Statistics/databases.',
    keyConcepts: ['research methods', 'data collection'],
    keywords: ['interviews', 'questionnaires', 'surveys', 'observations', 'experiments', 'statistics', 'databases'],
    feedbackHit: 'Correct — that is a valid method for collecting information (e.g. surveys, interviews, observations, experiments or statistics/databases).',
    feedbackMiss: 'Name a recognised data-collection method such as interviews, questionnaires/surveys, observations, experiments, or statistics/databases.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for identifying one valid research (data-collection) method. Responses may include: interviews; questionnaires/surveys; observations; experiments; statistics/databases. Accept any valid response.',
        exemplar: 'Questionnaires/surveys.',
      },
    ],
  },

  q4_e: {
    marks: 1,
    exemplar: 'Spreadsheet.',
    keyConcepts: ['recording information', 'data organization'],
    keywords: ['spreadsheet', 'note taking', 'summarizing', 'tables', 'graphs'],
    feedbackHit: 'Correct — that is a valid way to record information (e.g. spreadsheet, note-taking/summarizing, tables or graphs).',
    feedbackMiss: 'Name a recognised recording method such as a spreadsheet, note-taking/summarizing, tables, or graphs (note: a recording method differs from a collection method).',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for identifying one valid method to record information. Responses may include: spreadsheet; note taking / summarizing; tables; graphs. Accept any valid response.',
        exemplar: 'Tables.',
      },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'POSITIVE IMPACTS (Criterion A, 6 marks): The British Empire had some positive impacts on fairness and development. One example is its construction of an extensive railway network across India in the 19th century. Before the railways, moving goods and people across the subcontinent was slow and expensive, which limited trade and made famines harder to relieve. The railways connected distant regions to ports and cities, allowed food to be moved more quickly during shortages, and created jobs and engineering skills that remained after independence. In this sense the empire spread a form of development and improved access to markets for many ordinary people. NEGATIVE IMPACTS (Criterion A, 6 marks): However, the same empire also damaged fairness and development. The railways were built mainly to serve British commercial and military interests, moving raw materials such as cotton out of India for the benefit of British factories rather than developing Indian industry. Colonial policies taxed local people heavily, undermined traditional crafts such as hand-weaving, and concentrated power and privilege in the hands of a small foreign elite. Decisions affecting millions were taken without their consent, and several severe famines were worsened by colonial economic priorities. This shows that the development the empire brought was unequal and came at a high cost to the people it ruled. [The presentation has a relevant title; the positive script connects clearly to the positive slide and the negative script connects clearly to the negative slide; language and slides read like a presentation (bullet points, short sentences, engaging features); ideas build logically with effective transitions.]',
    keyConcepts: ['fairness and development', 'superpowers', 'empires', 'supranational institutions', 'power and privilege', 'presentation communication'],
    keywords: ['British Empire', 'India', 'railways', 'positive impacts', 'negative impacts', 'fairness', 'development', 'title', 'slide', 'script', 'audience'],
    feedbackHit: 'Strong presentation — you focused on one power/empire/institution, thoroughly explained BOTH positive and negative impacts with accurate examples and terminology, gave a relevant title, and wrote scripts that connect to clearly formatted slides in a presentation style.',
    feedbackMiss: 'Cover all strands: (A) explain both positive AND negative impacts of ONE chosen power/empire/institution with a worked example; (C1) include a relevant title and ensure each script matches its slide; (C2) write in a presentation style (bullets, short sentences, audience engagement) not an essay; (C3) sequence ideas logically with transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes. (Note: Any information included in the slide that is not featured in the script should be rewarded under criterion A.)',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'Criterion A (Knowing and understanding, 0–6): The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor: 'The student demonstrates limited knowledge and understanding by outlining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using limited examples and limited relevant terminology. Responses are likely to be brief, with little detail. There is requirement to include an example but the lack of one does not mean the student cannot be awarded (1 mark). Terminology may be limited in terms of accuracy and/or frequency.',
        exemplar: 'Positive impacts: The British Empire built railways in India, which helped move goods and people. Negative impacts: The railways were really built to help Britain, not India, and local people were taxed heavily and had no say.',
      },
      {
        marks: 'CritA 2–3',
        descriptor: 'The student demonstrates adequate knowledge and understanding by describing the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using satisfactory examples, and appropriate relevant terminology.',
        exemplar: 'Positive impacts: The British Empire built an extensive railway network in India in the 19th century. This connected distant regions to ports and cities and made it easier to move food during shortages. It also created some jobs and skills. Negative impacts: The railways were built mainly to serve British interests, moving raw materials out of India for British factories. Local people were taxed heavily and traditional crafts declined, while power stayed with a small foreign elite.',
      },
      {
        marks: 'CritA 4–5',
        descriptor: 'The student demonstrates substantial knowledge and understanding by explaining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using accurate examples, and appropriate relevant terminology.',
        exemplar: 'Positive impacts: The British Empire built an extensive railway network across India in the 19th century. Before this, moving goods and people was slow and expensive, which limited trade and made famines harder to relieve. The railways connected regions to ports, helped move food during shortages, and created jobs and engineering skills that lasted after independence. Negative impacts: The railways were built mainly to serve British commercial and military interests, moving raw materials such as cotton out of India for British factories rather than developing Indian industry. Heavy taxation and the decline of crafts such as hand-weaving concentrated power and privilege in a small foreign elite.',
      },
      {
        marks: 'CritA 6',
        descriptor: 'The student demonstrates detailed knowledge and understanding by thoroughly explaining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using accurate and effective descriptions and explanations, and appropriate relevant terminology. The response should be very detailed and provide clear reasoning, making use of example(s).',
        exemplar: 'Positive impacts: The British Empire had some positive impacts on fairness and development. One example is its construction of an extensive railway network across India in the 19th century. Before the railways, moving goods and people was slow and expensive, which limited trade and made famines harder to relieve. The railways connected distant regions to ports and cities, allowed food to be moved more quickly during shortages, and created jobs and engineering skills that remained after independence. Negative impacts: However, the railways were built mainly to serve British commercial and military interests, moving raw materials such as cotton out of India for British factories rather than developing Indian industry. Colonial policies taxed local people heavily, undermined traditional crafts such as hand-weaving, and concentrated power and privilege in a small foreign elite. Decisions affecting millions were taken without their consent, and several severe famines were worsened by colonial priorities, showing the development was unequal and came at a high cost.',
      },
      { marks: 'C1 Format 0', descriptor: 'Criterion C1 (Format, 0–2): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C1 Format 1', descriptor: 'Two of the following features are included: a relevant title for the presentation; the script for the positive impacts clearly connects to the content of the positive impacts slide; the script for the negative impacts clearly connects to the content of the negative impacts slide.' },
      { marks: 'C1 Format 2', descriptor: 'Three of the following features are included: a relevant title for the presentation; the script for the positive impacts clearly connects to the content of the positive impacts slide; the script for the negative impacts clearly connects to the content of the negative impacts slide.' },
      { marks: 'C2 Communicating 0', descriptor: 'Criterion C2 (Communicating information and ideas, 0–6): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C2 Communicating 1–2', descriptor: 'The student communicates information and ideas using a style and language that are rarely appropriate to the format of a presentation for an audience of MYP students and the purpose of explaining. Language reads more formally (like an essay); slides rarely formatted to be clear (bullet points, short sentences, effective use of space); language is basic/simple and doesn’t engage the audience effectively. Text may be extremely short.' },
      { marks: 'C2 Communicating 3–4', descriptor: 'The student communicates information and ideas using a style and language that are occasionally appropriate to the format of a presentation. The text reads at times like an essay and at times like a presentation. Slides are occasionally formatted to be clear. Some language features such as hyperbole, metaphor, rhetorical questions, concise sentences and emotive vocabulary are used to engage the audience. (Essay-like = 3 marks; presentation-like = 4 marks.)' },
      { marks: 'C2 Communicating 5–6', descriptor: 'The student communicates information and ideas using a style and language that are consistently appropriate to the format of a presentation. The text reads like a presentation throughout (e.g. by addressing the audience). Slides are consistently formatted to be clear (bullet points, short sentences, effective use of space). Language features such as hyperbole, metaphor, rhetorical questions, concise sentences and emotive vocabulary are often used to engage the audience.' },
      { marks: 'C3 Organizational 0', descriptor: 'Criterion C3 (Organizational structure, 0–4): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C3 Organizational 1', descriptor: 'The student structures information and ideas in a way that is rarely effective and appropriate to the audience of MYP students and purpose of explaining. Ideas rarely build on each other in a logical manner. When appropriate, the student rarely uses effective transitions within and/or between sentences and/or paragraphs to show relationships between ideas.' },
      { marks: 'C3 Organizational 2', descriptor: 'The student structures information and ideas in a way that is occasionally effective and appropriate. Ideas occasionally build on each other in a logical manner. When appropriate, the student sometimes uses effective transitions to show relationships between ideas.' },
      { marks: 'C3 Organizational 3', descriptor: 'The student structures information and ideas in a way that is mainly effective and appropriate. Ideas frequently build on each other in a logical manner. When appropriate, the student often uses effective transitions to show relationships between ideas.' },
      { marks: 'C3 Organizational 4', descriptor: 'The student structures information and ideas in a way that is consistently effective and appropriate. Ideas consistently build on each other in a clear and logical manner. When appropriate, the student always uses effective transitions within and/or between sentences and/or paragraphs to show relationships between ideas.' },
    ],
  },

  q6_: {
    marks: 6,
    exemplar:
      'This new riverfront greenway will help with traffic congestion and increase accessibility. With the increase of population in and around cities, it is important to give people safe alternatives to driving. This will also have a beneficial effect on the environment because the protected cycle network and walking routes will reduce the number of cars coming in and out of the centre. Less cars means less pollution. Another benefit is that several busy car lanes will be replaced with trees, planting and rain gardens. These green spaces absorb rainwater and cool the city. The combination of these factors means that there will be less carbon dioxide emitted by traffic and that will help to reduce overall pollution and improve people’s health.',
    keyConcepts: ['urban transport', 'sustainability', 'accessibility', 'environmental impact'],
    keywords: ['traffic congestion', 'accessibility', 'cycle network', 'walking', 'pollution', 'carbon dioxide', 'greenway', 'green space'],
    feedbackHit: 'Strong — you explained multiple positive effects (less congestion, more accessibility, safe active travel, greener cooler streets, less pollution) with clear reasons linking the change to the benefit.',
    feedbackMiss: 'Add reasons, not just effects: explain WHY each change helps the city (e.g. the cycle network and walking routes reduce cars entering the centre, and replacing lanes with planting cuts emissions and cools the city).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1–2',
        descriptor: 'The student outlines how this change to Rotterdam’s city-centre transport will have a positive effect on the city. Responses are likely to be brief, with little detail for (1 mark). A (2 mark) response will elaborate to provide more information.',
        exemplar: 'This new greenway will help with traffic congestion. It will also be good for the environment. Replacing car lanes with cycling and walking routes means fewer cars and less pollution.',
      },
      {
        marks: '3–4',
        descriptor: 'The student describes how this change to Rotterdam’s city-centre transport will have a positive effect on the city. It should be evident that the student has knowledge of the potential positive effect the change could have on the city. There are likely to be little or no reasons provided in the response.',
        exemplar: 'This new greenway will help with traffic congestion. The population in and around cities is increasing. It is important to give people safe alternatives to driving. This will also help the environment. Several car lanes will be replaced with trees and planting. There will be fewer cars and less overall pollution.',
      },
      {
        marks: '5–6',
        descriptor: 'The student explains how this change to Rotterdam’s city-centre transport will have a positive effect on the city. The response should be very detailed and provide clear reasons for the potential positive effects on the city.',
        exemplar: 'This new riverfront greenway will help with traffic congestion and increase accessibility. With the increase of population in and around cities, it is important to give people safe alternatives to driving. This will also have a beneficial effect on the environment because the protected cycle network and walking routes will reduce the number of cars coming in and out of the centre. Less cars means less pollution. Another benefit is that several busy car lanes will be replaced with trees, planting and rain gardens, which absorb rainwater and cool the city. The combination of these factors means there will be less carbon dioxide emitted by traffic and that will help to reduce overall pollution and improve people’s health.',
      },
    ],
  },

  q7_a: {
    marks: 3,
    exemplar:
      'It shows what the greenway will look like. It includes details of the protected cycle network, the new bridges and crossings, and the green spaces that will replace car lanes, to help a student see the wide-ranging impacts of this innovation on the city’s environment. As it talks about removing car lanes and adding planting, it suggests to the student that the environment will be positively impacted by reduced pollution and cooler streets.',
    keyConcepts: ['source evaluation', 'value/usefulness of a source', 'content, origin, purpose'],
    keywords: ['value', 'greenway', 'cycle network', 'bridges', 'green space', 'environment', 'innovation', 'urban'],
    feedbackHit: 'Strong — you described in detail a way the project pitch is valuable (e.g. its details of the cycle network, bridges and green spaces show the innovation’s environmental impact on the city).',
    feedbackMiss: 'Develop one benefit into a short paragraph. Think content/origin/purpose: e.g. the pitch’s details of the cycle network, crossings and planting let a researcher see the innovation’s wide-ranging, pollution-reducing impact on the urban environment.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states the value of Source C to an MYP student researching how innovations impact urban environments. Only one benefit needs to be mentioned to warrant (1 mark). A (1 mark) response can be one sentence that refers to a single benefit.',
        exemplar: 'It shows what the greenway will look like.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the value of Source C. Only one benefit needs to be mentioned and elaborated on to warrant (2 marks). A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.',
        exemplar: 'It shows what the greenway will look like. It includes details of the cycle network, bridges and green spaces. As it talks about removing car lanes, it suggests to the student that the environment will be positively impacted.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the value of Source C. Only one benefit needs to be considered in detail to warrant (3 marks). A (3 mark) response is likely to take the form of a short paragraph.',
        exemplar: 'It shows what the greenway will look like. It includes details of the protected cycle network, the new bridges and crossings, and the green spaces that will replace car lanes, to help a student see the wide-ranging impacts of this innovation on the city’s environment. As it talks about removing car lanes and adding planting, it suggests to the student that the environment will be positively impacted by reduced pollution and cooler streets.',
      },
    ],
  },

  q7_b: {
    marks: 3,
    exemplar:
      'As it is a project pitch made by the city council it may be one-sided or biased; it doesn’t discuss how much the greenway will cost, how long it will take to build, or how much disruption it will cause to businesses and drivers during construction. The scope of the pitch is narrow as it only focuses on one city so this will limit its usefulness to the student.',
    keyConcepts: ['source evaluation', 'limitations of a source', 'bias', 'scope', 'origin and purpose'],
    keywords: ['limitation', 'biased', 'one-sided', 'city council', 'one city', 'narrow scope', 'cost', 'construction disruption'],
    feedbackHit: 'Strong — you described in detail a real limitation (e.g. council origin makes it potentially biased/promotional, it omits cost and construction disruption, and its single-city scope limits usefulness).',
    feedbackMiss: 'Develop one limitation in detail. Consider origin/purpose: it was made by the city council (likely biased and promotional), omits drawbacks like cost and construction disruption, and covers only one city, limiting how far a researcher can generalise.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states the limitations of Source C to an MYP student researching how innovations impact urban environments. Only one limitation needs to be mentioned to warrant (1 mark). A (1 mark) response can be one sentence that refers to a single limitation.',
        exemplar: 'It may be one-sided or biased.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the limitations of Source C. Only one limitation needs to be mentioned and elaborated on to warrant (2 marks). A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.',
        exemplar: 'As it is a project pitch made by the city council, it may be one-sided or biased. Also, it only talks about one city.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the limitations of Source C. Only one limitation needs to be considered in detail to warrant (3 marks).',
        exemplar: 'As it is a project pitch made by the city council it may be one-sided or biased; it doesn’t discuss how much the greenway will cost, how long it will take to build, or how much disruption it will cause to businesses and drivers during construction. The scope of the pitch is narrow as it only focuses on one city so this will limit its usefulness to the student.',
      },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Vaccination has transformed quality of life by making it possible to prevent diseases that once killed or disabled huge numbers of people. From one perspective, the public-health benefits are enormous: diseases such as smallpox have been eradicated worldwide, and illnesses like measles and polio have become rare in many countries. Children who would once have died young now survive, families are spared grief, and societies save the cost of treating long illnesses, freeing resources for education and development. From an economic perspective, healthier populations can work and study more reliably, which supports prosperity. However, other perspectives are more critical. Some communities have historically distrusted vaccination because of past abuses or because programmes were imposed without consent, which raises questions of fairness and authority. Access is also unequal: wealthy countries can afford rapid vaccination while poorer regions may wait years, so the same innovation that improves life dramatically in one place has limited reach in another. There are also debates about safety and personal freedom, with some people resisting mandatory vaccination. Weighing these views together, vaccination has clearly improved quality of life on a global scale, but its benefits have not been shared equally and its rollout raises real questions about consent and trust. [Essay structured with introduction, main body and conclusion as separate paragraphs; formal, clear language; ideas build logically with effective transitions; provides different perspectives in a detailed discussion making clear arguments.]',
    keyConcepts: ['technological innovation', 'quality of life', 'different perspectives', 'critical analysis and synthesis', 'essay structure'],
    keywords: ['vaccination', 'papermaking', 'refrigeration', 'innovation', 'quality of life', 'perspectives', 'discuss', 'introduction', 'conclusion', 'synthesize'],
    feedbackHit: 'Strong essay — you discussed one innovation’s impact on quality of life from different perspectives, synthesised them into clear arguments (Crit D), demonstrated detailed knowledge with accurate examples (Crit A), used separate intro/body/conclusion paragraphs (C1), and wrote in a formal, well-organised style (C2/C3).',
    feedbackMiss: 'Make sure you: (D) present DIFFERENT perspectives (benefits and drawbacks) and synthesise them into clear arguments rather than listing; (A) support with accurate, detailed examples; (C1) use separate introduction, body and conclusion paragraphs; (C2/C3) write formally with logical transitions. Do not choose cycling, walking or public transport (that was Source C).',
    commandTerm: 'Discuss',
    commandTermDefinition: 'Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'Criterion A (Knowing and understanding, 0–8): The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1–2',
        descriptor: 'The student demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology.',
        exemplar: 'Vaccination stops people getting sick. It got rid of smallpox and made measles and polio rare. Children who would have died now survive. This is good for families. Not everyone can get vaccines though, and some people do not trust them.',
      },
      {
        marks: 'CritA 3–4',
        descriptor: 'The student demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.',
        exemplar: 'Vaccination has improved quality of life by preventing diseases that used to kill many people. Smallpox has been eradicated and measles and polio are rare in many countries. Children survive who would have died young, which helps families and saves money on treatment. However, access is unequal because poorer countries may wait longer for vaccines, and some people distrust vaccination or worry about safety.',
      },
      {
        marks: 'CritA 5–6',
        descriptor: 'The student demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology.',
        exemplar: 'Vaccination has improved quality of life by preventing diseases that once killed or disabled many people. Smallpox has been eradicated worldwide and measles and polio have become rare in many countries, so children survive who would once have died young, sparing families grief and saving the cost of long illnesses. Healthier populations can work and study more reliably. However, access is unequal, some communities distrust vaccination because of past abuses, and there are debates about safety and personal freedom.',
      },
      {
        marks: 'CritA 7–8',
        descriptor: 'The student demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. Note: An (8 mark) response might provide more detailed examples (criterion A) or take a clearer stance on the issue (criterion D).',
        exemplar: 'Vaccination has transformed quality of life by making it possible to prevent diseases that once killed or disabled huge numbers of people. Smallpox has been eradicated worldwide, and measles and polio have become rare in many countries, so children survive who would once have died young, families are spared grief, and societies save the cost of long illnesses, freeing resources for education and development. Healthier populations work and study more reliably, supporting prosperity. However, access is unequal between wealthy and poorer regions, some communities distrust vaccination because of past abuses or programmes imposed without consent, and there are debates about safety and personal freedom.',
      },
      { marks: 'CritD 0', descriptor: 'Criterion D (Thinking critically, 0–8): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'CritD 1–2', descriptor: 'The student provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed.' },
      { marks: 'CritD 3–4', descriptor: 'The student provides different perspectives in an analysis and summarizes information to make clear arguments in response to the question posed.' },
      { marks: 'CritD 5–6', descriptor: 'The student provides different perspectives in an analysis and synthesizes information to make clear arguments in response to the question posed.' },
      { marks: 'CritD 7–8', descriptor: 'The student provides different perspectives in a detailed discussion and synthesizes information to make clear arguments in response to the question posed.' },
      { marks: 'C1 Format 0', descriptor: 'Criterion C1 (Format, 0–2): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C1 Format 1', descriptor: 'Two of the following elements are included: introduction, a main body of argument or a conclusion. Note: The elements must appear as separate paragraphs. If this is not the case (0 marks) should be awarded.' },
      { marks: 'C1 Format 2', descriptor: 'Three of the following elements are included: introduction, a main body of argument and a conclusion. Note: The elements must appear as separate paragraphs.' },
      { marks: 'C2 Communicating 0', descriptor: 'Criterion C2 (Communicating information and ideas, 0–3): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C2 Communicating 1', descriptor: 'The style and language used are rarely appropriate to the audience and purpose of informing. The style of writing is rarely consistent with what would be expected in an essay. Language may be mostly unclear. Text may be extremely short so that not enough evidence is available to award a higher level.' },
      { marks: 'C2 Communicating 2', descriptor: 'The style and language used are occasionally appropriate to the audience and purpose of informing. The style of writing is not always consistent. It may appear to be more informal in style than expected in an essay. Language may be less clear in places.' },
      { marks: 'C2 Communicating 3', descriptor: 'The style and language used are consistently appropriate to the audience and purpose of informing. The style of writing is consistent with what would be expected in an essay. Language is formal and clear.' },
      { marks: 'C3 Organizational 0', descriptor: 'Criterion C3 (Organizational structure, 0–3): The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C3 Organizational 1', descriptor: 'The organizational structure is rarely effective. Paragraphs/ideas sometimes build on each other in a logical manner. When appropriate, rarely uses effective transitions within sentences or between sentences and/or paragraphs to show relationships between ideas. Text may be extremely short so that not enough evidence is available to award a higher level.' },
      { marks: 'C3 Organizational 2', descriptor: 'The organizational structure is occasionally effective. Paragraphs/ideas sometimes build on each other in a logical manner. When appropriate, sometimes uses effective transitions within sentences and between sentences and/or paragraphs to show relationships between ideas.' },
      { marks: 'C3 Organizational 3', descriptor: 'The organizational structure is consistently effective. Paragraphs/ideas build on each other in a consistently clear and logical manner. When appropriate, uses effective transitions within sentences and between sentences and/or paragraphs to show relationships between ideas.' },
    ],
  },
}
