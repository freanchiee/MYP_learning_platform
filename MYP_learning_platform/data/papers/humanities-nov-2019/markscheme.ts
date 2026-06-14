import 'server-only'

/**
 * MYP Integrated Humanities — November 2019 mark scheme (rubric-banded).
 *
 * I&S answers are open-ended, so every entry carries the IB band descriptors plus
 * worked exemplar responses at each band (`rubricBands`) — surfaced to the student
 * on submission and in the downloadable exam report. `exemplar` holds the top-band
 * model answer (kept for the shared grading/results consumers); the extra fields
 * (`commandTerm`, `commandTermDefinition`, `rubricBands`) are optional and ignored
 * by consumers that don't use them.
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
    keyConcepts: ['land use', 'farming', 'population growth', 'wealth and meat consumption'],
    keywords: ['population growth', 'increasing wealth', 'more meat consumption', 'Source A'],
    feedbackHit: 'Correct — you identified a reason explicitly given in Source A (population growth, increasing wealth, or higher meat consumption).',
    feedbackMiss: 'Re-read conclusion 2 in Source A. It lists population growth and increasing wealth (which leads to more meat consumption) as reasons the overall land used for farming has increased.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for stating one valid reason given in Source A. Responses may include: population growth; increasing wealth; more meat consumption. Accept any valid response.',
        exemplar: 'Population growth.',
      },
    ],
  },

  q2_a: {
    marks: 1,
    exemplar: '1420 MHa.',
    keyConcepts: ['graph reading', 'prediction', 'land use'],
    keywords: ['1420', 'MHa', '2050', 'prediction'],
    feedbackHit: 'Correct — the dotted prediction line reads 1420 MHa at the year 2050.',
    feedbackMiss: 'Trace the dotted prediction line up from 2050 to the curve, then across to the y-axis. The value is 1420 MHa (the unit is not required).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor: 'Award (1 mark) for 1420 MHa. Note: The unit does not need to be included to award (1 mark).',
        exemplar: '1420',
      },
    ],
  },

  q2_b: {
    marks: 4,
    exemplar:
      'Based on the predictions, quality and quantity of grasslands might increase. Farmers take the best grasslands, so the lands they return to nature would likely be higher quality than most grasslands that are still wild today. Because of this increase in quality and quantity, animals that rely on grasslands, such as some types of rodents, birds, grazing animals and carnivores, would have more habitat.',
    keyConcepts: ['biomes', 'land use change', 'habitat', 'rewilding / land returned to nature'],
    keywords: ['grassland', 'forest', 'aquatic', 'desert', 'habitat', 'animals', 'increase', 'biodiversity'],
    feedbackHit: 'Strong — you chose one biome and explained a likely impact with clear reasons (e.g. land returning to nature increasing grassland quality and habitat).',
    feedbackMiss: 'Pick just one biome and go beyond stating an impact: add reasons WHY the predicted fall in farmland would affect it (e.g. land returned to nature increases habitat for grassland species).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states the possible impact on one biome. A (1 mark) response is likely to be one sentence that hints at a single impact.',
        exemplar: 'Based on the predictions, grasslands might increase.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the possible impact on one biome. A (2 mark) response is likely to be a single sentence with a single impact that is elaborated on; the detail provided will be brief.',
        exemplar: 'Based on the predictions, grasslands might increase. A variety of animals that live in grasslands would have more available habitat.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the possible impact on one biome. One way should be considered in detail without any comprehensive reasons given. An example may be used to support the description. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'Based on the predictions, grasslands might increase. Because of this increase, animals that rely on grasslands, such as some types of rodents and birds, would have more habitat.',
      },
      {
        marks: '4',
        descriptor: 'The student explains the possible impact on one biome. One way should be considered in detail, along with reasons for the impacts on the biome. An example may be given to support the explanation but is not essential to be awarded (4 marks).',
        exemplar: 'Based on the predictions, quality and quantity of grasslands might increase. Farmers take the best grasslands, so the lands they return to nature would likely be higher quality than most grasslands that are still wild today. Because of this increase in quality and quantity, animals that rely on grasslands, such as some types of rodents, birds, grazing animals and carnivores, would have more habitat.',
      },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'STRENGTHS (top band): The data they collected was appropriate for understanding global land use for farming because it allows them to see some important relationships. For instance, they can see the relationship between the total amount harvested and the acres needed to reach this amount. This allows them to better understand changes in efficiency of farming over time. LIMITATIONS (top band): They could have collected data from more countries in order to have a truly global understanding of farming trends. China, India and the U.S. are important countries, but they don’t even make up half of the world population and there are many other countries and regions which have large agricultural outputs. Without including some of these countries, such as Brazil, it may be difficult to get an accurate understanding of global farming. APPRAISAL (top band): The investigation collected appropriate data, used a balanced range of sources and drew some conclusions based on the data they collected and analysed. However, more data could have been collected, covering a wider range of countries and crops. In addition, some conclusions seem to have been made without data to support them.',
    keyConcepts: ['evaluation', 'strengths and limitations', 'reliability of sources', 'data validity', 'global representativeness'],
    keywords: ['strengths', 'limitations', 'appraisal', 'data', 'sources', 'countries', 'Brazil', 'global', 'conclusions', 'bias'],
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
        exemplar: 'The data they collected, such as total crops harvested and hectares used, was appropriate for understanding global land use for farming.',
      },
      {
        marks: 'Strengths 3',
        descriptor: 'The student explains the strength(s) of the process and results of the investigation. Only one strength needs to be mentioned and elaborated on in additional detail with reasoning to warrant (3 marks). If a student outlines 3 or more strengths, they can be awarded 3 marks.',
        exemplar: 'The data they collected was appropriate for understanding global land use for farming because it allows them to see some important relationships. For instance, they can see the relationship between the total amount harvested and the acres needed to reach this amount. This allows them to better understand changes in efficiency of farming over time.',
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
        exemplar: 'They could have collected data from more countries. The U.S., China and India are large countries but there are other important countries, such as Brazil, that should have been considered.',
      },
      {
        marks: 'Limitations 3',
        descriptor: 'The student explains the limitation(s) of the process and results of the investigation. Only one limitation needs to be mentioned and elaborated on in additional detail with reasoning to warrant (3 marks). If a student outlines 3 or more limitations, they can be awarded 3 marks.',
        exemplar: 'They could have collected data from more countries in order to have a truly global understanding of farming trends. China, India and the U.S. are important countries, but they don’t even make up half of the world population and there are many other countries and regions which have large agricultural outputs. Without including some of these countries, such as Brazil, it may be difficult to get an accurate understanding of global farming.',
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
        exemplar: 'The investigation collected appropriate data, used a balanced range of sources and drew some conclusions based on the data they collected and analysed. However, more data could have been collected, covering a wider range of countries and crops. In addition, some conclusions seem to have been made without data to support them.',
      },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent will the introduction of more widely available fertilizers impact the growth of sugarcane in Kenya?',
    keyConcepts: ['research question', 'clarity', 'focus', 'future trends'],
    keywords: ['research question', 'fertilizers', 'population growth', 'focused', 'clear', 'place', 'product'],
    feedbackHit: 'Excellent RQ — it is clear (intention is obvious), connected to a future trend, and focused by naming a specific place and product.',
    feedbackMiss: "Make your RQ both clear AND focused. Tie it to one trend (fertilizers/technology or population growth) and narrow it with a specific location and crop, e.g. '…impact the growth of sugarcane in Kenya?'",
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. A bullet point with a question term at the start should be awarded (0 marks).' },
      {
        marks: '1',
        descriptor: 'The student formulates a research question that is either clear or focused and connected to one of the areas for further investigation. The RQ is clear and connected to a trend, but lacks focus (e.g. does not specify a location).',
        exemplar: 'To what extent will the introduction of more widely available fertilizers impact crop growth?',
      },
      {
        marks: '2',
        descriptor: 'The student formulates a research question that is both clear and focused and connected to one of the areas for further investigation. The RQ is clear, connected to a trend, and focuses on a place and product.',
        exemplar: 'To what extent will the introduction of more widely available fertilizers impact the growth of sugarcane in Kenya?',
      },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My research question is about the impact of more widely available fertilizers on sugarcane in Kenya. This is relevant because fertilizers can decrease the amount of land needed to grow crops, such as sugarcane, which can in turn reduce the overall land use for farming. By looking specifically at sugarcane, I would be able to draw some further conclusions about the impact of fertilizers in Kenya and elsewhere on future land use.',
    keyConcepts: ['justification', 'relevance', 'future trends', 'land use efficiency'],
    keywords: ['relevant', 'fertilizers', 'decrease land', 'future', 'sugarcane', 'Kenya', 'conclusions'],
    feedbackHit: 'Strong justification — you considered the relevance of your RQ in detail AND gave reasons why it matters to future farmland trends (e.g. fertilizers reducing land needed for crops).',
    feedbackMiss: 'Go beyond stating that your RQ is relevant: give reasons WHY (e.g. fertilizers reduce land needed per crop, so studying them helps predict future land use) and link it explicitly to the future trend.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states how the research question is relevant to the issue of future trends in land use for farming. No detail is required. This is likely to be a single sentence response that makes a simple connection between the future trend and the RQ.',
        exemplar: 'My research question is about how fertilizers in Kenya will impact land use in the future.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines how the research question is relevant to the issue of future trends in land use for farming. Likely to be a single sentence with two clauses or two/three short sentences that provides brief detail on how the RQ is relevant to the future trend.',
        exemplar: 'My research question is about how fertilizers in Kenya will impact land use in the future. Looking at fertilizer use on sugarcane will give me specific information.',
      },
      {
        marks: '3',
        descriptor: 'The student describes how the research question is relevant to the issue of future trends in land use for farming. At least one argument/factor should be considered in detail without providing reasoning why the RQ is relevant to the future trend. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'My research question is about the impact of more widely available fertilizers on sugarcane in Kenya. This is relevant because fertilizers can decrease the amount of land used for farming. By looking specifically at sugarcane, I would be able to draw some further conclusions about other crops grown in the future.',
      },
      {
        marks: '4',
        descriptor: 'The student justifies how the research question is relevant to the issue of future trends in land use for farming. At least one argument/factor should be considered in detail, along with reasoning why the RQ is relevant to the future trend. To provide the required level of detail for (4 marks), a short to mid-length paragraph is likely to be required.',
        exemplar: 'My research question is about the impact of more widely available fertilizers on sugarcane in Kenya. This is relevant because fertilizers can decrease the amount of land needed to grow crops, such as sugarcane, which can in turn reduce the overall land use for farming. By looking specifically at sugarcane, I would be able to draw some further conclusions about the impact of fertilizers in Kenya and elsewhere on future land use.',
      },
    ],
  },

  q4_c: {
    marks: 4,
    exemplar:
      'Investigating future trends will always involve multiple unpredictable variables. For example, I know that fertilizers usually increase crop yields and make it possible to grow the same amount of crop with less land. Therefore, I might predict that increasing use of fertilizer in Kenya would lower the amount of land used to grow sugarcane. However, some unforeseen variables could arise. For instance, if fertilizer use made sugarcane growth more profitable, more farmers might start growing sugarcane. This could cause land use for sugarcane to expand.',
    keyConcepts: ['challenges of investigation', 'unpredictability', 'confounding variables', 'forecasting'],
    keywords: ['unpredictable', 'variables', 'future', 'challenge', 'fertilizer', 'yields', 'unforeseen'],
    feedbackHit: 'Strong — you identified one challenge of investigating the future and explained it in detail with reasoning and an example (e.g. unforeseen variables overturning a fertilizer-based prediction).',
    feedbackMiss: "Focus on one challenge and develop it: not just 'the future is unpredictable' but WHY (e.g. an unforeseen variable like higher profitability could make more farmers plant sugarcane, expanding land use against the prediction).",
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states one challenge of investigating future trends in land use for farming. A (1 mark) response is likely to be one sentence that hints at a single challenge.',
        exemplar: 'It is difficult to predict what will happen in the future. Unexpected things can happen.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one challenge of investigating future trends in land use for farming. A (2 mark) response is likely to be a single sentence with a single challenge that is elaborated on; the detail provided will be brief.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. Unforeseen variables could arise, which could cause land use for sugarcane to change unexpectedly.',
      },
      {
        marks: '3',
        descriptor: 'The student describes one challenge of investigating future trends in land use for farming. One challenge should be considered in detail without any comprehensive reasons given. An example may be used to support the description. To provide the required level of detail for (3 marks), a short paragraph is likely to be required.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. For example, I know that fertilizers usually increase crop yields and make it possible to grow the same amount of crop with less land. Therefore, I might predict that increasing use of fertilizer in Kenya would lower the amount of land used to grow sugarcane. However, some unforeseen variables could arise, causing land use for sugarcane to expand.',
      },
      {
        marks: '4',
        descriptor: 'The student explains one challenge of investigating future trends in land use for farming. One challenge should be considered in detail, along with reasoning. An example may be given to support the explanation.',
        exemplar: 'Investigating future trends will always involve multiple unpredictable variables. For example, I know that fertilizers usually increase crop yields and make it possible to grow the same amount of crop with less land. Therefore, I might predict that increasing use of fertilizer in Kenya would lower the amount of land used to grow sugarcane. However, some unforeseen variables could arise. For instance, if fertilizer use made sugarcane growth more profitable, more farmers might start growing sugarcane. This could cause land use for sugarcane to expand.',
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
      'POSITIVE IMPACTS (Criterion A, 6 marks): The UN has had some positive impacts on fairness and development. One example of this is its impact on the conflict in Korea from 1950–1953. In 1950, communist North Korea invaded South Korea with the intention of uniting the peninsula under their extreme dictatorship. This was a clearly unfair attempt to take away the rights and self-determination of the South Korean people. Following this unjust invasion, the United Nations got involved by asking all permanent members to vote in order to act and maintain peace and stability and, hence, avoid conflict. Despite the fact that not all members agreed, the UN was still able to successfully organise a force to protect South Korea from the threat to their freedom and way of life. NEGATIVE IMPACTS (Criterion A, 6 marks): Despite the fact that the Korean War created an escalation between the United States and communist China and the USSR and that it represented the first conflict between communist and American forces, the UN was able to organise a force to successfully repel the North Koreans from South Korea. However, the UN force then pushed deeply into North Korea, eventually leading to China and the Soviet Union becoming involved on North Korea’s side. This made the conflict even larger and more destructive than it otherwise would have been. This war almost devastated all of North Korea’s economic and agricultural infrastructure and impacts its transportation system because of bombing. This can be viewed as a failure on the part of an organization that was established to maintain peace and unity. [The presentation has a relevant title; the positive script connects clearly to the positive slide and the negative script connects clearly to the negative slide; language and slides read like a presentation (bullet points, short sentences, engaging features); ideas build logically with effective transitions.]',
    keyConcepts: ['fairness and development', 'superpowers', 'empires', 'supranational institutions', 'peace and conflict', 'presentation communication'],
    keywords: ['United Nations', 'USSR', 'Korea', 'positive impacts', 'negative impacts', 'fairness', 'development', 'title', 'slide', 'script', 'audience'],
    feedbackHit: 'Strong presentation — you focused on one power/empire/institution, thoroughly explained BOTH positive and negative impacts with accurate examples and terminology, gave a relevant title, and wrote scripts that connect to clearly formatted slides in a presentation style.',
    feedbackMiss: 'Cover all strands: (A) explain both positive AND negative impacts of ONE chosen power/empire/institution with a worked example; (C1) include a relevant title and ensure each script matches its slide; (C2) write in a presentation style (bullets, short sentences, audience engagement) not an essay; (C3) sequence ideas logically with transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes. (Note: Any information included in the slide that is not featured in the script should be rewarded under criterion A.)',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'Criterion A (Knowing and understanding, 0–6): The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor: 'The student demonstrates limited knowledge and understanding by outlining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using limited examples and limited relevant terminology. Responses are likely to be brief, with little detail. There is requirement to include an example but the lack of one does not mean the student cannot be awarded (1 mark). Terminology may be limited in terms of accuracy and/or frequency.',
        exemplar: 'Positive impacts: The UN had a positive impact on a conflict in South Korea in the 1950s when North Korea invaded South Korea. The UN got involved to maintain peace. Negative impacts: The UN went too far into North Korea, which upset other Communist countries who took North Korea’s side, which meant the conflict got bigger.',
      },
      {
        marks: 'CritA 2–3',
        descriptor: 'The student demonstrates adequate knowledge and understanding by describing the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using satisfactory examples, and appropriate relevant terminology.',
        exemplar: 'Positive impacts: The UN has had some positive impacts on fairness and development. One example of this is its impact on the conflict in Korea in the early 1950s. In 1950, North Korea invaded South Korea. Following this unjust invasion, the United Nations got involved to maintain peace. Despite the fact that not all members agreed, the UN was still able to successfully organise a force to protect South Korea from the threat to their freedom and way of life. Negative impacts: The UN was able to organise a force to successfully repel the North Koreans from South Korea. However, the UN force then pushed deeply into North Korea. Communist countries took North Korea’s side. This made the conflict even larger and more destructive than it otherwise would have been. This can be viewed as a failure on the part of an organization that was established to maintain peace and unity.',
      },
      {
        marks: 'CritA 4–5',
        descriptor: 'The student demonstrates substantial knowledge and understanding by explaining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using accurate examples, and appropriate relevant terminology.',
        exemplar: 'Positive impacts: The UN has had some positive impacts on fairness and development. One example of this is its impact on the conflict in Korea from 1950–1953. In 1950, communist North Korea invaded South Korea with the intention of uniting the peninsula under their extreme dictatorship. Following this unjust invasion, the United Nations got involved to maintain peace and stability and, hence, avoid conflict. Negative impacts: Despite tensions in the region with China and the USSR, the UN was able to organize a force to successfully repel the North Koreans from South Korea. However, the UN force then pushed deeply into North Korea, eventually leading to the Soviet Union becoming involved on North Korea’s side. This made the conflict even larger and more destructive than it otherwise would have been. This war almost devastated all of North Korea’s economic and agricultural infrastructure.',
      },
      {
        marks: 'CritA 6',
        descriptor: 'The student demonstrates detailed knowledge and understanding by thoroughly explaining the positive and negative impacts that one empire or superpower or supranational institution/organization has had on fairness and development, using accurate and effective descriptions and explanations, and appropriate relevant terminology. The response should be very detailed and provide clear reasoning, making use of example(s).',
        exemplar: 'Positive impacts: The UN has had some positive impacts on fairness and development. One example is its impact on the conflict in Korea from 1950–1953. In 1950, communist North Korea invaded South Korea with the intention of uniting the peninsula under their extreme dictatorship. This was a clearly unfair attempt to take away the rights and self-determination of the South Korean people. Following this unjust invasion, the UN got involved by asking all permanent members to vote in order to act and maintain peace and stability and, hence, avoid conflict. Negative impacts: Despite the fact that the Korean War created an escalation between the United States and communist China and the USSR and that it represented the first conflict between communist and American forces, the UN was able to organise a force to successfully repel the North Koreans from South Korea. However, the UN force then pushed deeply into North Korea, eventually leading to China and the Soviet Union becoming involved on North Korea’s side. This made the conflict even larger and more destructive and almost devastated all of North Korea’s economic and agricultural infrastructure. This can be viewed as a failure on the part of an organization established to maintain peace and unity.',
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
      'This new transportation system will help with traffic congestion and increase accessibility. With the increase of population in and around cities, it is important to facilitate mass transit. This will also have a beneficial effect on the environment because the tramway will reduce the number of cars coming in and out of the city. Less cars means less pollution. Another benefit is that the tramway runs on electricity. This resource is a much cleaner source of energy than gas used by cars and buses. The combination of these factors means that there will be less carbon monoxide emissions and that will help to reduce overall pollution.',
    keyConcepts: ['urban transport', 'sustainability', 'accessibility', 'environmental impact'],
    keywords: ['traffic congestion', 'accessibility', 'mass transit', 'electricity', 'pollution', 'carbon monoxide', 'tramway', 'cleaner energy'],
    feedbackHit: 'Strong — you explained multiple positive effects (less congestion, more accessibility, cleaner electric power, less pollution) with clear reasons linking the change to the benefit.',
    feedbackMiss: 'Add reasons, not just effects: explain WHY each change helps the city (e.g. the tramway reduces cars entering the city, and running on electricity rather than gas cuts carbon monoxide and overall pollution).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1–2',
        descriptor: 'The student outlines how this change to Quebec City’s public transport system will have a positive effect on the city. Responses are likely to be brief, with little detail for (1 mark). A (2 mark) response will elaborate to provide more information.',
        exemplar: 'This new transportation system will help with traffic congestion. This will also have a beneficial effect on the environment. It runs on electricity, which is much cleaner than gas. There will be less overall pollution.',
      },
      {
        marks: '3–4',
        descriptor: 'The student describes how this change to Quebec City’s public transport system will have a positive effect on the city. It should be evident that the student has knowledge of the potential positive effect the change could have on the city. There are likely to be little or no reasons provided in the response.',
        exemplar: 'This new transportation system will help with traffic congestion. The population in and around cities is increasing. It is important to facilitate mass transit. This will also have a beneficial effect on the environment. The tramway runs on electricity. This resource is a much cleaner source of energy than gas used by cars and buses. There will be less carbon monoxide emissions and less overall pollution.',
      },
      {
        marks: '5–6',
        descriptor: 'The student explains how this change to Quebec City’s public transport system will have a positive effect on the city. The response should be very detailed and provide clear reasons for the potential positive effects on the city.',
        exemplar: 'This new transportation system will help with traffic congestion and increase accessibility. With the increase of population in and around cities, it is important to facilitate mass transit. This will also have a beneficial effect on the environment because the tramway will reduce the number of cars coming in and out of the city. Less cars means less pollution. Another benefit is that the tramway runs on electricity. This resource is a much cleaner source of energy than gas used by cars and buses. The combination of these factors means that there will be less carbon monoxide emissions and that will help to reduce overall pollution.',
      },
    ],
  },

  q7_a: {
    marks: 3,
    exemplar:
      'It shows what the tramway will look like. It includes images of the underground and outdoor stations and parking areas to help a student see the wide-ranging impacts of this innovation on the city’s environment. As it talks about using electricity, it suggests to the student that the environment will be positively impacted by reduced pollution levels.',
    keyConcepts: ['source evaluation', 'value/usefulness of a source', 'content, origin, purpose'],
    keywords: ['value', 'tramway', 'images', 'stations', 'electricity', 'environment', 'innovation', 'urban'],
    feedbackHit: 'Strong — you described in detail a way the video is valuable (e.g. its visuals of stations/parking and its mention of electric power show the innovation’s environmental impact on the city).',
    feedbackMiss: 'Develop one benefit into a short paragraph. Think content/origin/purpose: e.g. the video’s visuals of stations and parking and its reference to electric power let a researcher see the innovation’s wide-ranging, pollution-reducing impact on the urban environment.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor: 'The student states the value of Source C to an MYP student researching how innovations impact urban environments. Only one benefit needs to be mentioned to warrant (1 mark). A (1 mark) response can be one sentence that refers to a single benefit.',
        exemplar: 'It shows what the tramway will look like.',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the value of Source C. Only one benefit needs to be mentioned and elaborated on to warrant (2 marks). A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.',
        exemplar: 'It shows what the tramway will look like. It includes images of the stations and parking areas. As it talks about using electricity, it suggests to the student that the environment will be positively impacted.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the value of Source C. Only one benefit needs to be considered in detail to warrant (3 marks). A (3 mark) response is likely to take the form of a short paragraph.',
        exemplar: 'It shows what the tramway will look like. It includes images of the underground and outdoor stations and parking areas to help a student see the wide-ranging impacts of this innovation on the city’s environment. As it talks about using electricity, it suggests to the student that the environment will be positively impacted by reduced pollution levels.',
      },
    ],
  },

  q7_b: {
    marks: 3,
    exemplar:
      'As it is a video that is made by the local government it may be one-sided or biased; it doesn’t discuss how much time it will take to build or how much disruption it will cause to commuters during construction. The scope of the video is narrow as it only focuses on one city so this will limit its usefulness to the student.',
    keyConcepts: ['source evaluation', 'limitations of a source', 'bias', 'scope', 'origin and purpose'],
    keywords: ['limitation', 'biased', 'one-sided', 'local government', 'one city', 'narrow scope', 'construction disruption'],
    feedbackHit: 'Strong — you described in detail a real limitation (e.g. government origin makes it potentially biased/one-sided, it omits construction time/disruption, and its single-city scope limits usefulness).',
    feedbackMiss: 'Develop one limitation in detail. Consider origin/purpose: it was made by the local government (likely biased and promotional), omits drawbacks like construction time and disruption, and covers only one city, limiting how far a researcher can generalise.',
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
        exemplar: 'As it is a video that is made by the local government, it may be one-sided or biased. Also, it only talks about one city.',
      },
      {
        marks: '3',
        descriptor: 'The student describes the limitations of Source C. Only one limitation needs to be considered in detail to warrant (3 marks).',
        exemplar: 'As it is a video that is made by the local government it may be one-sided or biased; it doesn’t discuss how much time it will take to build or how much disruption it will cause to commuters during construction. The scope of the video is narrow as it only focuses on one city so this will limit its usefulness to the student.',
      },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Internet technology promotes the sharing of information because it is easy to use and has many uses such as email and the possibility to do transactions (for banking, to buy products and make travel arrangements). This technology is also a valued source of information for interests such as news, weather reports and for more specialized topics that can help people understand subjects like medical issues or specific global concerns. You can now watch movies and listen to music from around the world and play online games. Social media is now very prominent on the internet but it is also much easier for people to have access to other people’s personal information so fraud is a risk. Digital connections also help to bring different perspectives on the news because everyone can use their smartphones to present a certain point of view during an event. The media must consider this when reporting what is happening. Global attention and awareness can now easily be brought to certain issues and it makes it possible to organize protests, for example. On a logistics level, it is much less complicated than before to build awareness on issues. The access to varied information can be overwhelming and sometimes, instead of building awareness, people shift their attention to something else because they are exposed to many things at the same time. Keeping people’s attention on an issue is a challenge. The access to more information also means that a lot of falsified information is available. It is now even more important to be able to know how to analyse a source to find out if the information has some value. [Essay structured with introduction, main body and conclusion as separate paragraphs; formal, clear language; ideas build logically with effective transitions; provides different perspectives in a detailed discussion making clear arguments.]',
    keyConcepts: ['technological innovation', 'quality of life', 'different perspectives', 'critical analysis and synthesis', 'essay structure'],
    keywords: ['internet', 'compass', 'printing press', 'internal combustion engine', 'innovation', 'quality of life', 'perspectives', 'discuss', 'introduction', 'conclusion', 'synthesize'],
    feedbackHit: 'Strong essay — you discussed one innovation’s impact on quality of life from different perspectives, synthesised them into clear arguments (Crit D), demonstrated detailed knowledge with accurate examples (Crit A), used separate intro/body/conclusion paragraphs (C1), and wrote in a formal, well-organised style (C2/C3).',
    feedbackMiss: 'Make sure you: (D) present DIFFERENT perspectives (benefits and drawbacks) and synthesise them into clear arguments rather than listing; (A) support with accurate, detailed examples; (C1) use separate introduction, body and conclusion paragraphs; (C2/C3) write formally with logical transitions. Do not choose public transport (that was Source C).',
    commandTerm: 'Discuss',
    commandTermDefinition: 'Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'Criterion A (Knowing and understanding, 0–8): The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1–2',
        descriptor: 'The student demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology.',
        exemplar: 'Internet technology promotes the sharing of information because it is easy to use. You can now watch movies and listen to music from around the world and play online games. Social media is now very prominent on the internet. Digital connections also help to bring different perspectives on the news. The media must consider this. Global attention and awareness can now easily be brought to certain issues. The internet makes this less complicated.',
      },
      {
        marks: 'CritA 3–4',
        descriptor: 'The student demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.',
        exemplar: 'Internet technology promotes the sharing of information because it is easy to use and has many uses. This technology is also a valued source of information for interests such as news, weather and other subjects. Social media is now very prominent on the internet, but it is also much easier for people to have access to other people’s personal information. Digital connections help bring different perspectives on the news because everyone can use their smartphones to present a certain point of view during an event. The access to more information also means that a lot of falsified information is available. It is now even more important to be able to know if a source is good.',
      },
      {
        marks: 'CritA 5–6',
        descriptor: 'The student demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology.',
        exemplar: 'Internet technology promotes the sharing of information because it is easy to use and has many uses such as email and the possibility to do transactions. This technology is also a valued source of information for interests such as news, weather and other subjects like medical issues or specific global concerns. Social media is now very prominent but it is also much easier to access other people’s personal information so fraud is a risk. Digital connections help bring different perspectives on the news. On a logistics level, it is much less complicated than before to build awareness on issues but sometimes people shift their attention to something else because they are exposed to many things at the same time. It is now even more important to know how to analyse a source.',
      },
      {
        marks: 'CritA 7–8',
        descriptor: 'The student demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. Note: An (8 mark) response might provide more detailed examples (criterion A) or take a clearer stance on the issue (criterion D).',
        exemplar: 'Internet technology promotes the sharing of information because it is easy to use and has many uses such as email and the possibility to do transactions (for banking, to buy products and make travel arrangements). This technology is also a valued source of information for interests such as news, weather reports and for more specialized topics that can help people understand subjects like medical issues or specific global concerns. Social media is now prominent but it is also much easier to access other people’s personal information so fraud is a risk. Digital connections help bring different perspectives because everyone can use their smartphones to present a certain point of view during an event, and it makes it possible to organize protests. However, the access to varied information can be overwhelming and a lot of falsified information is available, so it is even more important to know how to analyse a source to find out if the information has some value.',
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
