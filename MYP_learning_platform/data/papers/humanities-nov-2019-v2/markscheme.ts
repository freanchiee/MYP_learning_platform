import 'server-only'

/**
 * MYP Integrated Humanities — November 2019 · VARIANT 2 mark scheme (rubric-banded).
 * Mirrors humanities-nov-2019 exactly (same RubricBand + MSEntry interfaces, same
 * commandTerm / commandTermDefinition / rubricBands descriptors and marks). Only the
 * worked exemplars, keyConcepts and keywords are rewritten for the new scenarios
 * (forest clearance · powers/empires/institutions · Cape Town solar microgrid · the telephone).
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
    keyConcepts: ['forest cover', 'farming', 'population growth', 'rising incomes and meat consumption'],
    keywords: ['population growth', 'rising incomes', 'more meat consumption', 'Source A'],
    feedbackHit: 'Correct — you identified a reason explicitly given in Source A (population growth, rising incomes, or higher meat consumption).',
    feedbackMiss: 'Re-read conclusion 2 in Source A. It lists population growth and rising incomes (which lead to more meat consumption, needing pasture and feed crops) as reasons the overall forest cleared for farming has increased.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for stating one valid reason given in Source A. Responses may include: population growth; rising incomes; more meat consumption. Accept any valid response.',
        exemplar: 'Population growth.',
      },
    ],
  },

  q2_a: {
    marks: 1,
    exemplar: '4120 MHa.',
    keyConcepts: ['graph reading', 'prediction', 'forest cover'],
    keywords: ['4120', 'MHa', '2050', 'prediction'],
    feedbackHit: 'Correct — the dotted prediction line reads 4120 MHa at the year 2050.',
    feedbackMiss: 'Trace the dotted prediction line up from 2050 to the curve, then across to the y-axis. The value is 4120 MHa (the unit is not required).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for 4120 MHa. Note: The unit does not need to be included to award (1 mark).',
        exemplar: '4120',
      },
    ],
  },

  q2_b: {
    marks: 4,
    exemplar:
      'Based on the predictions, the quality and extent of forests might increase. As less land is cleared and some farmland is abandoned, forests would regrow on land that was previously cultivated, and the new forest would connect fragments that are isolated today. Because of this increase in quality and extent, animals that rely on forests, such as primates, forest birds, insects and large mammals, would have more continuous habitat and safer corridors to move between areas.',
    keyConcepts: ['biomes', 'forest cover change', 'habitat', 'reforestation / land returned to nature'],
    keywords: ['forest', 'grassland', 'aquatic', 'desert', 'habitat', 'animals', 'increase', 'biodiversity'],
    feedbackHit: 'Strong — you chose one biome and explained a likely impact with clear reasons (e.g. recovering forest connecting habitat fragments for forest species).',
    feedbackMiss: 'Pick just one biome and go beyond stating an impact: add reasons WHY the predicted recovery in forest cover would affect it (e.g. regrowing forest reconnects fragmented habitat and increases room for forest species).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states the possible impact on one biome. A (1 mark) response is likely to be one sentence that hints at a single impact.',
        exemplar: 'Based on the predictions, forests might increase.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the possible impact on one biome. A (2 mark) response is likely to be a single sentence with a single impact that is elaborated on; the detail provided will be brief.',
        exemplar: 'Based on the predictions, forests might increase. A variety of animals that live in forests would have more available habitat.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the possible impact on one biome. One way should be considered in detail without any comprehensive reasons given. An example may be used to support the description. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'Based on the predictions, forests might increase. Because of this increase, animals that rely on forests, such as primates and forest birds, would have more habitat.',
      },
      {
        marks: '4',
        descriptor: 'The student explains the possible impact on one biome. One way should be considered in detail, along with reasons for the impacts on the biome. An example may be given to support the explanation but is not essential to be awarded (4 marks).',
        exemplar: 'Based on the predictions, the quality and extent of forests might increase. As less land is cleared and some farmland is abandoned, forests would regrow on land that was previously cultivated, and the new forest would connect fragments that are isolated today. Because of this increase in quality and extent, animals that rely on forests, such as primates, forest birds, insects and large mammals, would have more continuous habitat and safer corridors to move between areas.',
      },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'STRENGTHS (top band): The data they collected was appropriate for understanding global forest clearance because it lets them see some important relationships. For instance, they can compare the hectares of forest cleared with the tonnes of beef, soy and palm oil produced. This allows them to better understand which products drive clearance and how this is changing over time. LIMITATIONS (top band): They could have collected data from more countries in order to have a truly global understanding of forest trends. Brazil, Indonesia and the DR Congo hold huge forests, but they are not the whole world and there are other regions with significant clearance. Without including some of these places, such as Bolivia or Malaysia, it may be difficult to get an accurate picture of global deforestation. APPRAISAL (top band): The investigation collected appropriate data, used a balanced range of sources and drew some conclusions based on the data it gathered and analysed. However, more data could have been collected, covering a wider range of countries and products. In addition, some conclusions seem to have been made without data to support them.',
    keyConcepts: ['evaluation', 'strengths and limitations', 'reliability of sources', 'data validity', 'global representativeness'],
    keywords: ['strengths', 'limitations', 'appraisal', 'data', 'sources', 'countries', 'Bolivia', 'Malaysia', 'global', 'conclusions', 'bias'],
    feedbackHit: 'Strong evaluation — you weighed at least one strength and one limitation with reasoning AND gave an overall appraisal that refers to specific aspects of the investigation (data, sources or conclusions).',
    feedbackMiss: 'An evaluation needs all three strands: a reasoned strength, a reasoned limitation, AND an overall appraisal that references the investigation (e.g. that only Brazil/Indonesia/DR Congo data limits global validity, or that conclusions lacked supporting data).',
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
        exemplar: 'The data they collected, such as hectares cleared and tonnes of beef, soy and palm oil produced, was appropriate for understanding global forest clearance.',
      },
      {
        marks: 'Strengths 3',
        descriptor: 'The student explains the strength(s) of the process and results of the investigation. Only one strength needs to be mentioned and elaborated on in additional detail with reasoning to warrant (3 marks). If a student outlines 3 or more strengths, they can be awarded 3 marks.',
        exemplar: 'The data they collected was appropriate for understanding global forest clearance because it lets them see some important relationships. For instance, they can compare the hectares of forest cleared with the tonnes of beef, soy and palm oil produced. This allows them to better understand which products drive clearance and how this is changing over time.',
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
        exemplar: 'They could have collected data from more countries. Brazil, Indonesia and the DR Congo hold huge forests but there are other important places, such as Bolivia or Malaysia, that should have been considered.',
      },
      {
        marks: 'Limitations 3',
        descriptor: 'The student explains the limitation(s) of the process and results of the investigation. Only one limitation needs to be mentioned and elaborated on in additional detail with reasoning to warrant (3 marks). If a student outlines 3 or more limitations, they can be awarded 3 marks.',
        exemplar: 'They could have collected data from more countries in order to have a truly global understanding of forest trends. Brazil, Indonesia and the DR Congo hold huge forests, but they are not the whole world and there are other regions with significant clearance. Without including some of these places, such as Bolivia or Malaysia, it may be difficult to get an accurate picture of global deforestation.',
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
        exemplar: 'The investigation collected appropriate data, used a balanced range of sources and drew some conclusions based on the data it gathered and analysed. However, more data could have been collected, covering a wider range of countries and products. In addition, some conclusions seem to have been made without data to support them.',
      },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent will the wider use of higher-yield maize seeds impact the forest cleared for farming in Brazil?',
    keyConcepts: ['research question', 'clarity', 'focus', 'future trends'],
    keywords: ['research question', 'higher-yield seeds', 'population growth', 'focused', 'clear', 'place', 'product'],
    feedbackHit: 'Excellent RQ — it is clear (intention is obvious), connected to a future trend, and focused by naming a specific place and product.',
    feedbackMiss: "Make your RQ both clear AND focused. Tie it to one trend (higher-yield seeds/technology or population growth) and narrow it with a specific location and crop, e.g. '…impact the forest cleared for farming in Brazil?'",
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. A bullet point with a question term at the start should be awarded (0 marks).' },
      {
        marks: '1',
        descriptor: 'The student formulates a research question that is either clear or focused and connected to one of the areas for further investigation. The RQ is clear and connected to a trend, but lacks focus (e.g. does not specify a location).',
        exemplar: 'To what extent will the wider use of higher-yield seeds impact forest clearance for farming?',
      },
      {
        marks: '2',
        descriptor: 'The student formulates a research question that is both clear and focused and connected to one of the areas for further investigation. The RQ is clear, connected to a trend, and focuses on a place and product.',
        exemplar: 'To what extent will the wider use of higher-yield maize seeds impact the forest cleared for farming in Brazil?',
      },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My research question is about the impact of higher-yield maize seeds on forest clearance in Brazil. This is relevant because higher-yield seeds can let farmers grow more food on land that is already cleared, which can in turn reduce the pressure to clear new forest. By looking specifically at maize in Brazil, I would be able to draw some further conclusions about the impact of better seeds in Brazil and elsewhere on future forest clearance.',
    keyConcepts: ['justification', 'relevance', 'future trends', 'land-use efficiency'],
    keywords: ['relevant', 'higher-yield seeds', 'reduce clearance', 'future', 'maize', 'Brazil', 'conclusions'],
    feedbackHit: 'Strong justification — you considered the relevance of your RQ in detail AND gave reasons why it matters to future forest-clearance trends (e.g. higher yields reducing the need to clear new forest).',
    feedbackMiss: 'Go beyond stating that your RQ is relevant: give reasons WHY (e.g. higher-yield seeds grow more food on existing land, easing pressure to clear forest) and link it explicitly to the future trend.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states how the research question is relevant to the issue of future trends in forest clearance for farming. No detail is required. This is likely to be a single sentence response that makes a simple connection between the future trend and the RQ.',
        exemplar: 'My research question is about how higher-yield seeds in Brazil will impact forest clearance in the future.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines how the research question is relevant to the issue of future trends in forest clearance for farming. Likely to be a single sentence with two clauses or two/three short sentences that provides brief detail on how the RQ is relevant to the future trend.',
        exemplar: 'My research question is about how higher-yield seeds in Brazil will impact forest clearance in the future. Looking at maize will give me specific information.',
      },
      {
        marks: '3',
        descriptor: 'The student describes how the research question is relevant to the issue of future trends in forest clearance for farming. At least one argument/factor should be considered in detail without providing reasoning why the RQ is relevant to the future trend. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'My research question is about the impact of higher-yield maize seeds on forest clearance in Brazil. This is relevant because higher-yield seeds can let farmers grow more food on land already cleared. By looking specifically at maize, I would be able to draw some further conclusions about other crops grown in the future.',
      },
      {
        marks: '4',
        descriptor: 'The student justifies how the research question is relevant to the issue of future trends in forest clearance for farming. At least one argument/factor should be considered in detail, along with reasoning why the RQ is relevant to the future trend. To provide the required level of detail for (4 marks), a short to mid-length paragraph is likely to be required.',
        exemplar: 'My research question is about the impact of higher-yield maize seeds on forest clearance in Brazil. This is relevant because higher-yield seeds can let farmers grow more food on land that is already cleared, which can in turn reduce the pressure to clear new forest. By looking specifically at maize in Brazil, I would be able to draw some further conclusions about the impact of better seeds in Brazil and elsewhere on future forest clearance.',
      },
    ],
  },

  q4_c: {
    marks: 4,
    exemplar:
      'Investigating future trends will always involve multiple unpredictable variables. For example, I know that higher-yield seeds usually let farmers grow more on the same land, so I might predict that better seeds in Brazil would reduce the forest cleared for maize. However, some unforeseen variables could arise. For instance, if higher yields made maize more profitable, more farmers might expand into the forest to grow it. This could cause forest clearance to increase instead, which is the opposite of my prediction.',
    keyConcepts: ['challenges of investigation', 'unpredictability', 'confounding variables', 'forecasting'],
    keywords: ['unpredictable', 'variables', 'future', 'challenge', 'higher-yield seeds', 'yields', 'unforeseen'],
    feedbackHit: 'Strong — you identified one challenge of investigating the future and explained it in detail with reasoning and an example (e.g. unforeseen variables overturning a higher-yield prediction).',
    feedbackMiss: "Focus on one challenge and develop it: not just 'the future is unpredictable' but WHY (e.g. an unforeseen variable like higher profitability could make more farmers expand into forest, increasing clearance against the prediction).",
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states one challenge of investigating future trends in forest clearance for farming. A (1 mark) response is likely to be one sentence that hints at a single challenge.',
        exemplar: 'It is difficult to predict what will happen in the future. Unexpected things can happen.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one challenge of investigating future trends in forest clearance for farming. A (2 mark) response is likely to be a single sentence with a single challenge that is elaborated on; the detail provided will be brief.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. Unforeseen variables could arise, which could cause forest clearance to change unexpectedly.',
      },
      {
        marks: '3',
        descriptor: 'The student describes one challenge of investigating future trends in forest clearance for farming. One challenge should be considered in detail without any comprehensive reasons given. An example may be used to support the description. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. For example, I know that higher-yield seeds usually let farmers grow more on the same land, so I might predict that better seeds in Brazil would reduce forest clearance. However, some unforeseen variables could arise, causing clearance to increase.',
      },
      {
        marks: '4',
        descriptor: 'The student explains one challenge of investigating future trends in forest clearance for farming. One challenge should be considered in detail, along with reasoning. An example may be given to support the explanation.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. For example, I know that higher-yield seeds usually let farmers grow more on the same land, so I might predict that better seeds in Brazil would reduce the forest cleared for maize. However, some unforeseen variables could arise. For instance, if higher yields made maize more profitable, more farmers might expand into the forest to grow it. This could cause forest clearance to increase instead, the opposite of my prediction.',
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
      'POSITIVE IMPACTS (Criterion A, 6 marks): The World Health Organization (WHO) has had some positive impacts on fairness and development. One clear example is its leadership of the global campaign that eradicated smallpox, declared complete in 1980. Smallpox had killed and disfigured millions of people for centuries, and the poorest communities suffered the most because they had the least access to care. By coordinating vaccination across rich and poor countries alike, sharing expertise and tracking every outbreak, the WHO removed this disease from the entire world. This advanced fairness because a deadly threat that once fell hardest on the vulnerable was ended for everyone, and it advanced development because healthier populations can work, learn and prosper. NEGATIVE IMPACTS (Criterion A, 6 marks): However, the WHO has also faced criticism that points to negative impacts on fairness. As a body that depends on the funding and cooperation of its member states, it can be slow to act and its priorities can be shaped by the most powerful or generous donors rather than by the communities in greatest need. During some outbreaks it has been accused of reacting too late, which cost lives in poorer regions. Its recommendations are not binding, so wealthy countries can ignore advice while poorer ones lack the resources to follow it, deepening existing inequalities. This shows that even an institution created to protect everyone’s health can reproduce the unfairness of the wider world order. [The presentation has a relevant title; the positive script connects clearly to the positive slide and the negative script connects clearly to the negative slide; language and slides read like a presentation (bullet points, short sentences, engaging features); ideas build logically with effective transitions.]',
    keyConcepts: ['fairness and development', 'superpowers', 'empires', 'supranational institutions', 'health and inequality', 'presentation communication'],
    keywords: ['World Health Organization', 'WHO', 'smallpox', 'positive impacts', 'negative impacts', 'fairness', 'development', 'title', 'slide', 'script', 'audience'],
    feedbackHit: 'Strong presentation — you focused on one power/empire/institution, thoroughly explained BOTH positive and negative impacts with accurate examples and terminology, gave a relevant title, and wrote scripts that connect to clearly formatted slides in a presentation style.',
    feedbackMiss: 'Cover all strands: (A) explain both positive AND negative impacts of ONE chosen power/empire/institution with a worked example; (C1) include a relevant title and ensure each script matches its slide; (C2) write in a presentation style (bullets, short sentences, audience engagement) not an essay; (C3) sequence ideas logically with transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes. (Note: Any information included in the slide that is not featured in the script should be rewarded under criterion A.)',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'Criterion A (Knowing and understanding, 0–6): The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor: 'The student demonstrates limited knowledge and understanding by outlining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using limited examples and limited relevant terminology. Responses are likely to be brief, with little detail. There is requirement to include an example but the lack of one does not mean the student cannot be awarded (1 mark). Terminology may be limited in terms of accuracy and/or frequency.',
        exemplar: 'Positive impacts: The WHO helped get rid of smallpox, which used to kill lots of people. Negative impacts: The WHO can be slow and is influenced by rich countries who give the most money, so poorer countries can lose out.',
      },
      {
        marks: 'CritA 2–3',
        descriptor: 'The student demonstrates adequate knowledge and understanding by describing the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using satisfactory examples, and appropriate relevant terminology.',
        exemplar: 'Positive impacts: The WHO led the campaign that eradicated smallpox by 1980. Smallpox had killed millions, and poorer communities suffered most. By coordinating vaccination across rich and poor countries, the WHO removed the disease worldwide, which helped fairness and development. Negative impacts: The WHO depends on its member states for funding, so it can be slow and its priorities can be shaped by powerful donors rather than the communities in greatest need. Its advice is not binding, so inequalities can remain.',
      },
      {
        marks: 'CritA 4–5',
        descriptor: 'The student demonstrates substantial knowledge and understanding by explaining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using accurate examples, and appropriate relevant terminology.',
        exemplar: 'Positive impacts: The WHO led the global campaign that eradicated smallpox, declared complete in 1980. Smallpox had killed and disfigured millions for centuries, and the poorest communities suffered most because they had the least access to care. By coordinating vaccination across rich and poor countries and tracking every outbreak, the WHO ended the disease worldwide, advancing both fairness and development. Negative impacts: As a body that depends on member-state funding, the WHO can be slow and its priorities can be shaped by powerful donors rather than communities in greatest need. Its recommendations are not binding, so wealthy countries can ignore advice while poorer ones lack the resources to follow it.',
      },
      {
        marks: 'CritA 6',
        descriptor: 'The student demonstrates detailed knowledge and understanding by thoroughly explaining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using accurate and effective descriptions and explanations, and appropriate relevant terminology. The response should be very detailed and provide clear reasoning, making use of example(s).',
        exemplar: 'Positive impacts: The WHO has had some positive impacts on fairness and development. One clear example is its leadership of the global campaign that eradicated smallpox, declared complete in 1980. Smallpox had killed and disfigured millions for centuries, and the poorest communities suffered most because they had the least access to care. By coordinating vaccination across rich and poor countries, sharing expertise and tracking every outbreak, the WHO removed the disease from the entire world, advancing fairness and development. Negative impacts: However, as a body that depends on the funding and cooperation of its member states, the WHO can be slow to act and its priorities can be shaped by the most powerful or generous donors rather than the communities in greatest need. During some outbreaks it has been accused of reacting too late, costing lives in poorer regions, and because its recommendations are not binding, inequalities between rich and poor can deepen.',
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
      'This new community solar microgrid will help make electricity more reliable and more affordable. With rolling blackouts affecting many cities, it is important to give neighbourhoods a power supply that keeps working when the main grid fails. The battery storage means homes, schools and clinics can keep the lights on during an outage. This will also have a beneficial effect on the environment because the system is powered mainly by sunlight rather than coal. Less coal burned means less air pollution and fewer greenhouse-gas emissions. Another benefit is that households can sell surplus electricity back to the grid, which lowers their bills and can help poorer families. The combination of these factors means the city becomes more resilient, cleaner and fairer at the same time.',
    keyConcepts: ['urban energy', 'sustainability', 'reliability and affordability', 'environmental impact'],
    keywords: ['reliable', 'affordable', 'battery storage', 'blackout', 'solar', 'coal', 'pollution', 'emissions', 'microgrid'],
    feedbackHit: 'Strong — you explained multiple positive effects (more reliable power, lower bills, cleaner solar energy, less pollution) with clear reasons linking the change to the benefit.',
    feedbackMiss: 'Add reasons, not just effects: explain WHY each change helps the city (e.g. battery storage keeps power on during blackouts, and using sunlight instead of coal cuts pollution and emissions).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1–2',
        descriptor: 'The student outlines how this change to Cape Town’s electricity supply will have a positive effect on the city. Responses are likely to be brief, with little detail for (1 mark). A (2 mark) response will elaborate to provide more information.',
        exemplar: 'This microgrid will make power more reliable. It also helps the environment because it uses sunlight instead of coal, so there is less pollution. Households can sell extra power and pay less.',
      },
      {
        marks: '3–4',
        descriptor: 'The student describes how this change to Cape Town’s electricity supply will have a positive effect on the city. It should be evident that the student has knowledge of the potential positive effect the change could have on the city. There are likely to be little or no reasons provided in the response.',
        exemplar: 'This microgrid will make power more reliable. With blackouts affecting many cities, battery storage keeps the lights on during outages. It will also help the environment. The system is powered mainly by sunlight rather than coal. There will be less air pollution and households can sell surplus power and lower their bills.',
      },
      {
        marks: '5–6',
        descriptor: 'The student explains how this change to Cape Town’s electricity supply will have a positive effect on the city. The response should be very detailed and provide clear reasons for the potential positive effects on the city.',
        exemplar: 'This new community solar microgrid will help make electricity more reliable and more affordable. With rolling blackouts affecting many cities, it is important to give neighbourhoods a supply that keeps working when the main grid fails, and the battery storage means homes, schools and clinics can keep the lights on during an outage. This will also have a beneficial effect on the environment because the system is powered mainly by sunlight rather than coal, so less coal burned means less air pollution and fewer greenhouse-gas emissions. Another benefit is that households can sell surplus electricity back to the grid, which lowers their bills and can help poorer families, making the city more resilient, cleaner and fairer at the same time.',
      },
    ],
  },

  q7_a: {
    marks: 3,
    exemplar:
      'It shows how the microgrid will work. It includes details of the rooftop solar panels, the shared local grid with battery storage, and the option to sell surplus power, to help a student see the wide-ranging impacts of this innovation on the city’s energy and environment. As it talks about using sunlight instead of coal, it suggests to the student that the environment will be positively impacted by reduced pollution and emissions.',
    keyConcepts: ['source evaluation', 'value/usefulness of a source', 'content, origin, purpose'],
    keywords: ['value', 'microgrid', 'solar panels', 'battery storage', 'environment', 'innovation', 'urban', 'coal'],
    feedbackHit: 'Strong — you described in detail a way the infographic is valuable (e.g. its details of the rooftop panels, battery storage and solar power show the innovation’s environmental impact on the city).',
    feedbackMiss: 'Develop one benefit into a short paragraph. Think content/origin/purpose: e.g. the infographic’s details of the panels, battery storage and solar power let a researcher see the innovation’s wide-ranging, pollution-reducing impact on the urban environment.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states the value of Source C to an MYP student researching how innovations impact urban environments. Only one benefit needs to be mentioned to warrant (1 mark). A (1 mark) response can be one sentence that refers to a single benefit.',
        exemplar: 'It shows how the microgrid will work.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the value of Source C. Only one benefit needs to be mentioned and elaborated on to warrant (2 marks). A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.',
        exemplar: 'It shows how the microgrid will work. It includes details of the rooftop solar panels and battery storage. As it talks about using sunlight instead of coal, it suggests to the student that the environment will be positively impacted.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the value of Source C. Only one benefit needs to be considered in detail to warrant (3 marks). A (3 mark) response is likely to take the form of a short paragraph.',
        exemplar: 'It shows how the microgrid will work. It includes details of the rooftop solar panels, the shared local grid with battery storage, and the option to sell surplus power, to help a student see the wide-ranging impacts of this innovation on the city’s energy and environment. As it talks about using sunlight instead of coal, it suggests to the student that the environment will be positively impacted by reduced pollution and emissions.',
      },
    ],
  },

  q7_b: {
    marks: 3,
    exemplar:
      'As it is an infographic made by the city government it may be one-sided or biased; it doesn’t discuss how much the system will cost, who will pay to install the panels, or whether poorer households without suitable roofs will be left out. The scope of the infographic is narrow as it only focuses on one city so this will limit its usefulness to the student.',
    keyConcepts: ['source evaluation', 'limitations of a source', 'bias', 'scope', 'origin and purpose'],
    keywords: ['limitation', 'biased', 'one-sided', 'city government', 'one city', 'narrow scope', 'cost', 'access'],
    feedbackHit: 'Strong — you described in detail a real limitation (e.g. government origin makes it potentially biased/promotional, it omits cost and access concerns, and its single-city scope limits usefulness).',
    feedbackMiss: 'Develop one limitation in detail. Consider origin/purpose: it was made by the city government (likely biased and promotional), omits drawbacks like cost and who is left out, and covers only one city, limiting how far a researcher can generalise.',
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
        exemplar: 'As it is an infographic made by the city government, it may be one-sided or biased. Also, it only talks about one city.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the limitations of Source C. Only one limitation needs to be considered in detail to warrant (3 marks).',
        exemplar: 'As it is an infographic made by the city government it may be one-sided or biased; it doesn’t discuss how much the system will cost, who will pay to install the panels, or whether poorer households without suitable roofs will be left out. The scope of the infographic is narrow as it only focuses on one city so this will limit its usefulness to the student.',
      },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'The telephone transformed quality of life by allowing people to speak to one another instantly across great distances. From one perspective, this was an enormous benefit. Families separated by migration could stay in contact, businesses could coordinate trade far more efficiently, and people could call for help in an emergency, which saved lives. Over time the telephone, and later the mobile phone, shrank the world and made information and relationships available to almost everyone, supporting both social well-being and economic development. From an economic perspective, faster communication lowered the cost of doing business and helped create whole new industries and jobs. However, other perspectives are more critical. Early telephone networks reached cities and wealthy households first, so for decades rural and poorer communities were left behind, deepening inequality of access. Some people argue that constant connection has eroded privacy and made it harder to switch off from work, while the spread of mobile phones has raised concerns about distraction, surveillance and the pressure to always be reachable. Weighing these views together, the telephone has clearly improved quality of life by connecting people and powering economies, but its benefits arrived unequally and it has brought new pressures on privacy and attention that earlier generations never faced. [Essay structured with introduction, main body and conclusion as separate paragraphs; formal, clear language; ideas build logically with effective transitions; provides different perspectives in a detailed discussion making clear arguments.]',
    keyConcepts: ['technological innovation', 'quality of life', 'different perspectives', 'critical analysis and synthesis', 'essay structure'],
    keywords: ['telephone', 'waterwheel', 'electric light', 'innovation', 'quality of life', 'perspectives', 'discuss', 'introduction', 'conclusion', 'synthesize'],
    feedbackHit: 'Strong essay — you discussed one innovation’s impact on quality of life from different perspectives, synthesised them into clear arguments (Crit D), demonstrated detailed knowledge with accurate examples (Crit A), used separate intro/body/conclusion paragraphs (C1), and wrote in a formal, well-organised style (C2/C3).',
    feedbackMiss: 'Make sure you: (D) present DIFFERENT perspectives (benefits and drawbacks) and synthesise them into clear arguments rather than listing; (A) support with accurate, detailed examples; (C1) use separate introduction, body and conclusion paragraphs; (C2/C3) write formally with logical transitions. Do not choose electricity supply or power generation (that was Source C).',
    commandTerm: 'Discuss',
    commandTermDefinition: 'Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'Criterion A (Knowing and understanding, 0–8): The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1–2',
        descriptor: 'The student demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology.',
        exemplar: 'The telephone lets people talk over long distances. Families can stay in contact and businesses can work together. You can also call for help in an emergency. Not everyone got phones at the same time though, and some people think we are now connected too much.',
      },
      {
        marks: 'CritA 3–4',
        descriptor: 'The student demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.',
        exemplar: 'The telephone improved quality of life by letting people speak instantly across distances. Families separated by migration could stay in touch, businesses could coordinate trade, and people could call for help in emergencies. However, early networks reached cities and wealthy homes first, so rural and poorer areas were left behind. Some people also worry that constant connection through mobile phones harms privacy and makes it hard to switch off.',
      },
      {
        marks: 'CritA 5–6',
        descriptor: 'The student demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology.',
        exemplar: 'The telephone transformed quality of life by allowing instant communication across great distances. Families could stay in contact, businesses could coordinate trade more efficiently, and people could call for help in emergencies, which saved lives. Over time the mobile phone made this available to almost everyone, supporting both social well-being and economic development. However, early networks reached cities and wealthy households first, deepening inequality of access, and constant connection has raised concerns about privacy and the pressure to always be reachable.',
      },
      {
        marks: 'CritA 7–8',
        descriptor: 'The student demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. Note: An (8 mark) response might provide more detailed examples (criterion A) or take a clearer stance on the issue (criterion D).',
        exemplar: 'The telephone transformed quality of life by allowing people to speak instantly across great distances. Families separated by migration could stay in contact, businesses could coordinate trade far more efficiently, and people could call for help in an emergency, which saved lives. Over time the telephone, and later the mobile phone, shrank the world and made information and relationships available to almost everyone, supporting both social well-being and economic development and lowering the cost of doing business. However, early networks reached cities and wealthy households first, so rural and poorer communities were left behind for decades, and the spread of mobile phones has raised concerns about privacy, surveillance and the pressure to always be reachable.',
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
