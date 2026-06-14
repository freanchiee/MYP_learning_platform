import 'server-only'

/**
 * MYP Integrated Humanities — November 2022 · VARIANT 2 mark scheme (rubric-banded).
 * Mirrors humanities-nov-2022/markscheme.ts EXACTLY for construct — same RubricBand
 * + MSEntry interfaces, same commandTerm / commandTermDefinition / rubricBands
 * descriptors and marks structure. Only the worked exemplars, example responses,
 * keyConcepts and keywords are rewritten for the new (ocean-health) scenario.
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
  q1_a: {
    marks: 1,
    exemplar: 'Europe.',
    keyConcepts: ['Ocean Health Index', 'development indicators', 'map reading', 'regions of the world'],
    keywords: ['Europe', 'Ocean Health Index', 'region', 'Source A'],
    feedbackHit:
      'Correct — four of the ten highest-ranked countries (Germany, Iceland, Ireland, Portugal) are in Europe, more than any other region.',
    feedbackMiss:
      'Count the shaded countries in each region on Source A. Europe has the most (four), so Europe is the correct selection.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    rubricBands: [
      { marks: '0', descriptor: 'Any answer other than Europe.' },
      { marks: '1', descriptor: 'Award (1 mark) for selecting EUROPE.', exemplar: 'Europe' },
    ],
  },

  q1_b: {
    marks: 1,
    exemplar: "Widespread overfishing would lower a country's Ocean Health Index.",
    keyConcepts: ['marine sustainability', 'development', 'factors affecting ocean health'],
    keywords: ['overfishing', 'plastic pollution', 'oil spills', 'coastal development', 'warming seas', 'sewage'],
    feedbackHit:
      'Correct — any valid factor such as overfishing, plastic pollution, oil spills, untreated sewage, warming seas or unchecked coastal development earns the mark.',
    feedbackMiss:
      'Name one clear factor that would reduce a country’s ocean health, e.g. overfishing, plastic pollution, oil spills, untreated sewage or unchecked coastal development.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'No valid factor given.' },
      {
        marks: '1',
        descriptor:
          "States one valid factor that could lower a country's Ocean Health Index. Responses may include: overfishing; plastic pollution; oil spills; untreated sewage; warming seas; unchecked coastal development. Accept any valid response.",
        exemplar: 'overfishing / plastic pollution / oil spills / untreated sewage / warming seas / coastal development',
      },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'These countries probably set strict catch limits so that fish are only taken at a rate the populations can replace. When fish stocks stay healthy instead of collapsing, the seas remain productive year after year, which has a direct impact on the sustainable fisheries score. This would have a significant impact on the country’s ranking.',
    keyConcepts: ['development indicators', 'sustainable fisheries', 'clean waters', 'habitat protection', 'coastal livelihoods', 'marine sustainability'],
    keywords: ['sustainable fisheries', 'catch limits', 'clean waters', 'habitat protection', 'ranking', 'indicator'],
    feedbackHit:
      "Strong — you selected one indicator from Source B, explained it in detail and linked it directly to a country's ocean-health ranking.",
    feedbackMiss:
      "Choose ONE indicator from Source B (e.g. sustainable fisheries), explain it in detail, then connect it to WHY this raises a country's ocean-health ranking to reach the top band.",
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor:
          'The student states why the countries shown in Source A were able to reach the highest Ocean Health Index. A (1 mark) response is likely to be one sentence that hints at a single reason for a high ocean-health score.',
        exemplar: 'They probably do not allow too much fishing.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines why the countries shown in Source A were able to reach the highest Ocean Health Index. A (2 mark) response is likely to be a single sentence with a single reason that is elaborated on; the detail provided will be brief.',
        exemplar: 'They set strict catch limits so that fish are only taken at a rate the populations can replace.',
      },
      {
        marks: '3',
        descriptor:
          'The student describes why the countries shown in Source A were able to reach the highest Ocean Health Index. One reason should be considered in detail without any comprehensive reasons given. An example may be used to support the description. More important than length is the quality and depth provided.',
        exemplar:
          'These countries probably set strict catch limits so that fish are only taken at a rate the populations can replace. When fish stocks stay healthy instead of collapsing, the seas remain productive year after year.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies why the countries shown in Source A were able to reach the highest Ocean Health Index. One way should be considered in detail, along with a reason. An example may be given but is not essential to be awarded (4 marks). Students may talk about the countries in general or make specific reference to a single country.',
        exemplar:
          'These countries probably set strict catch limits so that fish are only taken at a rate the populations can replace. When fish stocks stay healthy instead of collapsing, the seas remain productive year after year, which has a direct impact on the sustainable fisheries score. This would have a significant impact on the country’s ranking.',
      },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'Are local fish stocks being caught sustainably in Galway Bay?',
    keyConcepts: ['research question', 'development indicators', 'components', 'focus'],
    keywords: ['research question', 'clear', 'focused', 'location', 'component', 'indicator'],
    feedbackHit:
      'Strong — your RQ is clear, focused on a named location and tied to a specific component of one indicator.',
    feedbackMiss:
      'Make your RQ both clear AND focused: name a specific location and a specific component of one indicator (e.g. sustainable catch levels). Do not just repeat the indicator from the question.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not achieve a standard described by any of the descriptors given below. Note: If the student does not specify a component of the development indicator or repeats it as stated in the question, zero marks should be awarded.',
      },
      {
        marks: '1',
        descriptor:
          'The student formulates a research question that is either clear OR focused and connected to the research scenario. (RQ is clear and connected to one component but lacks focus as it does not specify, for example, a named location.)',
        exemplar: 'Are local fish stocks being caught sustainably?',
      },
      {
        marks: '2',
        descriptor:
          'The student formulates a research question that is both clear AND focused AND connected to the research scenario. (RQ is clear, connected to one component of the development indicators, and also focuses on a location.)',
        exemplar: 'Are local fish stocks being caught sustainably in Galway Bay?',
      },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      "My research question refers to one of the development indicators through the sustainability of fish catches in Galway Bay. I would find out how much fish is landed in Galway Bay compared to Ireland as a whole, and whether it is within safe limits. This would allow me to understand why Galway Bay's ocean-health score is different to that of Ireland and perhaps rated healthier than the country.",
    keyConcepts: ['verification', 'coast vs country comparison', 'development indicators', 'reasoning'],
    keywords: ['verify', 'compare', 'coast', 'country', 'ranking', 'reasoning'],
    feedbackHit:
      'Strong — you considered your factor in detail AND gave reasoning for how it verifies the coast-versus-country finding.',
    feedbackMiss:
      "Add reasoning: explain in detail how comparing your location's data to the country's would let you VERIFY whether the coastal region is healthier than the country.",
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          "The student states how the research question would help verify the findings of the report. No detail required; likely a single sentence making a simple connection between the report's findings and the RQ.",
        exemplar: 'My research question refers to one of the development indicators.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines how the research would help verify the findings of the report. Likely a single sentence with two clauses or two/three short sentences providing brief detail on how the RQ is relevant to the findings.',
        exemplar: 'My research question refers to one of the development indicators through the sustainability of fish catches in Galway Bay.',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the research question would help verify the findings of the report. At least one argument/factor considered in detail without reasoning why the RQ is relevant. A short paragraph is likely required.',
        exemplar:
          'My research question refers to one of the development indicators through the sustainability of fish catches in Galway Bay. I would find out how much fish is landed there.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies how the research question would help verify the findings of the report. At least one argument/factor considered in detail along with reasoning why the RQ is relevant. A short to mid-length paragraph is likely required.',
        exemplar:
          "My research question refers to one of the development indicators through the sustainability of fish catches in Galway Bay. I would find out how much fish is landed in Galway Bay compared to Ireland as a whole, and whether it is within safe limits. This would allow me to understand why Galway Bay's ocean-health score is different to that of Ireland and perhaps rated healthier than the country.",
      },
    ],
  },

  q3_c: {
    marks: 2,
    exemplar: "1. The weight of fish landed in Galway Bay each month. 2. Ireland's Ocean Health Index score.",
    keyConcepts: ['data collection', 'investigation planning', 'relevance to research question'],
    keywords: ['data', 'fish catch', 'ocean-health score', 'Ocean Health Report', 'safe limits'],
    feedbackHit: 'Correct — both items are valid data that link to your research question (one mark each).',
    feedbackMiss:
      'List TWO concrete data items that connect to your RQ, location or indicator (e.g. the weight of fish landed each month; the country’s ocean-health score).',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    rubricBands: [
      { marks: '0', descriptor: 'Neither piece of data is valid / relevant to the RQ.' },
      { marks: '1', descriptor: 'One valid piece of data listed.' },
      {
        marks: '2',
        descriptor:
          'Two valid pieces of data listed. Responses may include: the weight of fish landed each month; the safe catch limit for the species; Ireland’s Ocean Health Index score; a copy of the Ocean Health Report. Accept any valid response that relates to the chosen location and/or development indicator and/or a component of a development indicator. Note: BOD (benefit of the doubt) should be applied if there are possible links to the RQ.',
        exemplar: "The weight of fish landed in Galway Bay each month; Ireland's Ocean Health Index score.",
      },
    ],
  },

  q3_d: {
    marks: 2,
    exemplar: 'There is too much data regarding fish catches in Galway Bay to consider fully.',
    keyConcepts: ['investigation challenges', 'data management', 'reliability'],
    keywords: ['challenge', 'too much data', 'consider fully', 'elaborate'],
    feedbackHit: 'Strong — you named one challenge and elaborated on it with brief detail to reach the top band.',
    feedbackMiss:
      'Name ONE challenge and add brief elaboration (e.g. there is too much data on fish catches in your location to consider fully) rather than just hinting at it.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor:
          'The student states one challenge. A (1 mark) response is likely to be one sentence that hints at a single challenge.',
        exemplar: 'There is too much data to consider.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines one challenge. A (2 mark) response is likely to be a single sentence with a single challenge that is elaborated on; the detail provided will be brief.',
        exemplar: 'There is too much data regarding fish catches in Galway Bay to consider fully.',
      },
    ],
  },

  q3_e: {
    marks: 2,
    exemplar: 'A spreadsheet organized by species and month landed.',
    keyConcepts: ['data recording', 'investigation methods', 'organisation of data'],
    keywords: ['spreadsheet', 'phone', 'record', 'interview', 'categories', 'method'],
    feedbackHit: 'Strong — you gave one recording method with brief elaboration on how it would be used/organised.',
    feedbackMiss:
      'Name ONE recording method and elaborate briefly (e.g. a spreadsheet organised by species and month landed; using a phone to record an interview).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor:
          'The student states one method of recording data. A (1 mark) response is likely to be one sentence that provides a single method.',
        exemplar: 'A spreadsheet. / My phone.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines one method of recording data. A (2 mark) response is likely to be a single sentence with a single method that is elaborated on; the detail provided will be brief.',
        exemplar: 'A spreadsheet organized by species and month landed. / I would use my phone to record an interview.',
      },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'Strengths: They gathered data on the three remaining indicators using different methods. By investigating the three indicators, they will gain a fuller insight into the health of the sea around their community. Limitations: Responses about how well fishing rules are enforced, which were from members of the fisheries authority, might not be honest. This is because if the authority has been failing to enforce the rules, they might be worried about answering truthfully. Appraisal: Overall, the action plan has some strengths in terms of providing clear plans for each stage to be completed but it could be more reliable by including sources other than the fisheries authority.',
    keyConcepts: ['evaluation', 'reliability', 'bias', 'research methods', 'validity of data'],
    keywords: ['strength', 'limitation', 'appraisal', 'bias', 'reliability', 'different methods', 'honesty', 'enforcement'],
    feedbackHit:
      'Strong — you explained a strength with reasoning, explained a limitation (e.g. bias in interviewing the fisheries authority) and gave a balanced overall appraisal.',
    feedbackMiss:
      'Cover all three strands: explain a strength WITH reasoning, explain a limitation WITH reasoning (e.g. interviewing the fisheries authority about enforcement may give dishonest answers), and add a balanced appraisal judging the plan overall.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: 'Strengths 1',
        descriptor:
          'The student states the strength(s) of the investigation. Only one strength needs to be mentioned. A (1 mark) response can be one sentence referring to a single strength.',
        exemplar: 'They gathered data on the three remaining indicators.',
      },
      {
        marks: 'Strengths 2',
        descriptor:
          'The student outlines the strength(s) of the investigation. Only one strength needs to be mentioned and elaborated on. However, if a student outlines 3 or more strengths, they can be awarded (3 marks). A (2 mark) response is likely a single sentence with two clauses or two/three short sentences.',
        exemplar: 'They gathered data on the three remaining indicators using different methods.',
      },
      {
        marks: 'Strengths 3',
        descriptor:
          'The student explains the strength(s) of the investigation. Only one strength needs to be mentioned and elaborated on with reasoning. If a student outlines 3 or more strengths, they can be awarded (3 marks).',
        exemplar:
          'They gathered data on the three remaining indicators using different methods. By investigating the three indicators, they will gain a fuller insight into the health of the sea around their community.',
      },
      {
        marks: 'Limitations 0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: suggesting alternative methods can be interpreted as addressing limitations.',
      },
      {
        marks: 'Limitations 1',
        descriptor:
          'The student states the limitation(s) of the investigation. Only one limitation needs to be mentioned. A (1 mark) response can be one sentence referring to a single limitation.',
        exemplar: 'Responses about how well the rules are enforced might not be honest.',
      },
      {
        marks: 'Limitations 2',
        descriptor:
          'The student outlines the limitation(s) of the investigation. Only one limitation needs to be mentioned and elaborated on. If a student outlines 3 or more limitations, they can be awarded (3 marks).',
        exemplar: 'Responses about enforcement, which were from members of the fisheries authority, might not be honest.',
      },
      {
        marks: 'Limitations 3',
        descriptor:
          'The student explains the limitation(s) of the investigation. Only one limitation needs to be mentioned and elaborated on with reasoning.',
        exemplar:
          'Responses about how well fishing rules are enforced, which were from members of the fisheries authority, might not be honest. This is because if the authority has been failing to enforce the rules, they might be worried about answering truthfully.',
      },
      { marks: 'Appraisal 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: 'Appraisal 1',
        descriptor:
          'An appraisal is stated. The appraisal is likely to be a summary of the strengths and limitations or a brief judgment on the action plan. It can appear anywhere in the response; it does not have to be a concluding statement.',
        exemplar: 'Overall, the action plan is good but there is room for improvement.',
      },
      {
        marks: 'Appraisal 2',
        descriptor:
          "An appraisal is outlined. The appraisal weighs up both positive and negative points (implicitly or explicitly) and makes an overall judgement on the student's investigative process. It can appear anywhere in the response.",
        exemplar:
          'Overall, the action plan has some strengths in terms of providing clear plans for each stage to be completed but it could be more reliable by including sources other than the fisheries authority.',
      },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      '[Opening] One person known for her courage in the fight for the right to education is Malala Yousafzai. As many of you are probably aware, not every child in history — or even today — has been free to go to school. In the Swat Valley of Pakistan, an armed group banned girls from attending classes, and that is where the famous Malala grew up. As a schoolgirl, Malala spoke out publicly for girls’ right to learn, writing a diary and giving interviews even when it was dangerous to do so. In 2012 she was shot by a gunman on her school bus, but she survived and refused to be silenced. Instead, she became a global voice for education, addressing the United Nations on her sixteenth birthday and later becoming the youngest person ever to win the Nobel Peace Prize in 2014. Through the Malala Fund she has helped open schools and campaign for millions of girls worldwide. [Concluding statement convincing the judges of her lasting impact.]',
    keyConcepts: ['significant individuals', 'change', 'historical impact', 'presentation/script format', 'audience and purpose'],
    keywords: [
      'significant individual',
      'change in history',
      'opening statement',
      'concluding statement',
      'convincing',
      'engaging',
      'presentation',
      'terminology',
      'transitions',
    ],
    feedbackHit:
      "Strong script — you thoroughly explained one individual's historical impact with accurate examples and reasoning (Crit A), included clear opening and closing statements (C1), wrote in an engaging presentation style addressing the judges (C2) and built ideas logically with transitions (C3).",
    feedbackMiss:
      'To maximise marks: choose ONE significant individual and explain their impact in DETAIL with accurate examples and reasoning (Crit A); include a clear opening AND closing statement (C1); write in a convincing, engaging presentation voice rather than an essay (C2); and order ideas logically with effective transitions (C3).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor:
          'The student demonstrates limited knowledge and understanding by outlining how the actions of one significant individual brought about change in history, using limited examples and limited relevant terminology. Responses are likely to be brief, with little detail. Terminology may be limited in accuracy and/or frequency.',
        exemplar:
          'One girl who changed things was Malala Yousafzai. She spoke up for girls going to school and later won a big prize.',
      },
      {
        marks: 'CritA 2–3',
        descriptor:
          'The student demonstrates adequate knowledge and understanding by describing how the actions of one significant individual brought about change in history, using satisfactory examples and appropriate relevant terminology. There is likely to be little or no reasoning provided. Terminology used should be accurately used in the correct context.',
        exemplar:
          'One person known for the fight for education is Malala Yousafzai... In the Swat Valley of Pakistan, an armed group banned girls from school. As a schoolgirl, Malala spoke out publicly for girls’ right to learn. In 2012 she was shot but survived, and she later won the Nobel Peace Prize in 2014.',
      },
      {
        marks: 'CritA 4–5',
        descriptor:
          'The student demonstrates substantial knowledge and understanding by explaining how the actions of one significant individual brought about change in history, using accurate examples and appropriate relevant terminology. Students need to demonstrate good understanding of the individual’s impact through a detailed response. Terminology used accurately and effectively in the correct context.',
        exemplar:
          '...Malala spoke out publicly for girls’ right to learn even when it was dangerous, and after surviving being shot in 2012 she became a global voice for education, addressing the United Nations and later winning the Nobel Peace Prize in 2014.',
      },
      {
        marks: 'CritA 6',
        descriptor:
          'The student demonstrates detailed knowledge and understanding by thoroughly explaining how the actions of one significant individual brought about change in history, using accurate and effective examples, and appropriate relevant terminology. The response should be very detailed and provide clear reasoning, making use of example(s). Comprehensive understanding of the impact of the individual should be included.',
        exemplar:
          '...As a schoolgirl in the Swat Valley, Malala spoke out for girls’ right to learn even when an armed group had banned it. In 2012 she was shot on her school bus but survived and refused to be silenced; instead she addressed the United Nations on her sixteenth birthday and became the youngest ever Nobel Peace Prize winner in 2014. Through the Malala Fund she has since helped open schools and campaign for millions of girls worldwide.',
      },
      { marks: 'C1 Format 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C1 Format 1',
        descriptor:
          'One of the following features are included: an opening statement that opens the presentation in a recognizable way; a closing statement that should not introduce new ideas.',
      },
      {
        marks: 'C1 Format 2',
        descriptor:
          'Two of the following features are included: an opening statement that opens the presentation in a recognizable way; a closing statement that should not introduce new ideas.',
      },
      { marks: 'C2 Communicating 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C2 Communicating 1–2',
        descriptor:
          'The student communicates information and ideas using a style and language that are rarely appropriate to the format of a script for a presentation for an audience of judges and the purpose of convincing and engaging. Language is rarely clear or appropriate to what would be expected in a presentation; the text reads more formally e.g. like an essay. Language is basic/simple and doesn’t engage the audience effectively. Text may be extremely short.',
      },
      {
        marks: 'C2 Communicating 3–4',
        descriptor:
          'The student communicates information and ideas using a style and language that are occasionally appropriate to the format of a script for a presentation for an audience of judges and the purpose of convincing and engaging. Language is clear and appropriate to what would be expected in a presentation. (A presentation written more like an essay → 3 marks; written more like a presentation → 4 marks; best-fit applied.) Some language features such as concise sentences and emotive vocabulary are used.',
      },
      {
        marks: 'C2 Communicating 5–6',
        descriptor:
          'The student communicates information and ideas using a style and language that are consistently appropriate to the format of a script for a presentation for an audience of judges and the purpose of convincing and engaging. The text reads like a presentation throughout, including addressing the audience directly and displaying enthusiasm. Language features such as concise sentences and emotive vocabulary are often used to engage the audience.',
      },
      { marks: 'C3 Structure 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C3 Structure 1',
        descriptor:
          'The student structures information and ideas in a way that is rarely effective and appropriate to the audience of judges and purpose of convincing and engaging. Ideas rarely build on each other in a logical manner. When appropriate, the student rarely uses effective transitions within/between sentences and/or paragraphs.',
      },
      {
        marks: 'C3 Structure 2',
        descriptor:
          'The student structures information and ideas in a way that is occasionally effective and appropriate. Ideas occasionally build on each other in a logical manner. When appropriate, the student sometimes uses effective transitions.',
      },
      {
        marks: 'C3 Structure 3',
        descriptor:
          'The student structures information and ideas in a way that is mainly effective and appropriate. Ideas frequently build on each other in a logical manner. When appropriate, the student often uses effective transitions.',
      },
      {
        marks: 'C3 Structure 4',
        descriptor:
          'The student structures information and ideas in a way that is consistently effective and appropriate. Ideas consistently build on each other in a clear and logical manner. When appropriate, the student always uses effective transitions within/between sentences and/or paragraphs.',
      },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: 'The Blue Lagoon Resorts website (the developer).',
    keyConcepts: ['origin of a source', 'source analysis'],
    keywords: ['Blue Lagoon Resorts', 'website', 'developer', 'origin'],
    feedbackHit: 'Correct — Source C originates from the Blue Lagoon Resorts promotional website (the developer).',
    feedbackMiss: 'State where the source came from: it is the promotional website of the developer, Blue Lagoon Resorts.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'No valid origin given.' },
      {
        marks: '1',
        descriptor: 'States the origin of Source C. Responses may include: Blue Lagoon Resorts (the developer); the resort website. Accept any valid response.',
        exemplar: 'Blue Lagoon Resorts website',
      },
    ],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To convince the community to support the building of the new beach resort.',
    keyConcepts: ['purpose of a source', 'source analysis', 'audience'],
    keywords: ['convince', 'persuade', 'promote', 'purpose', 'beach resort'],
    feedbackHit:
      'Correct — a valid purpose such as to convince, persuade or promote the community to support the resort earns the mark.',
    feedbackMiss:
      'State WHY the source was made, e.g. to convince or persuade the community to support the proposed beach resort.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'No valid purpose given.' },
      {
        marks: '1',
        descriptor:
          'States the purpose of Source C. Responses may include: to convince the community to support the new beach resort; to persuade residents and investors to back the project; to promote and advertise the resort. Accept any valid response.',
        exemplar: 'To convince the community to support the building of the new beach resort.',
      },
    ],
  },

  q6_c: {
    marks: 2,
    exemplar:
      'The website is produced by the developer themselves, this shows directly what the company is promising the residents of Maribago Bay, Philippines.',
    keyConcepts: ['value of a source', 'perspective', 'OPVL', 'sustainable management'],
    keywords: ['value', 'developer', 'promises', 'perspective', 'resident'],
    feedbackHit: "Strong — you identified one value and elaborated on why it matters from a resident's perspective.",
    feedbackMiss:
      'Name ONE value (e.g. the website comes directly from the developer) and add brief detail explaining why this is valuable to a resident investigating the sustainable management of the coastline and reef.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student states one value of Source C from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef. A (1 mark) response is likely to be one sentence that gives a single value. The context does not have to be explicitly referred to.',
        exemplar: 'The website is produced by the developer themselves.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines one value of Source C from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef. A (2 mark) response is likely to be 1–2 sentences that elaborate on a single value with some brief detail.',
        exemplar:
          'The website is produced by the developer themselves, this shows directly what the company is promising the residents of Maribago Bay, Philippines.',
      },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar:
      'The website is biased because it is an advertisement, for example, it is not specific enough about how the reef will actually be protected during construction.',
    keyConcepts: ['limitation of a source', 'bias', 'perspective', 'OPVL'],
    keywords: ['limitation', 'biased', 'advertisement', 'reef protection', 'not specific'],
    feedbackHit: "Strong — you identified one limitation and elaborated on why it weakens the source for a resident's purposes.",
    feedbackMiss:
      "Name ONE limitation (e.g. the website is a biased advertisement) and add brief detail, such as a lack of specifics on how the reef will actually be protected.",
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student states one limitation of Source C from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef. A (1 mark) response is likely to be one sentence that gives a single limitation. The context does not have to be explicitly referred to.',
        exemplar: 'The website is biased because it is an advertisement.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines one limitation of Source C from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef. A (2 mark) response is likely to be 1–2 sentences that elaborate on a single limitation with some brief detail.',
        exemplar:
          'The website is biased because it is an advertisement, for example, it is not specific enough about how the reef will actually be protected during construction.',
      },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'The residents may think that building a 300-room hotel and a marina right next to the reef will damage a habitat that has taken thousands of years to grow and can never be replaced, and that this loss is too high a price for tourist income. They might feel that the developer is asking them to risk their coastline for profits that will mostly go to the company rather than the community. The construction could stir up sediment that smothers coral, and waste water and crowds of tourists could pollute the bay. Can residents be sure the "green promise" is genuine, when the website gives no firm detail on how the reef will be protected and is clearly an advertisement designed to persuade? They may also worry that depending on a single resort makes the community vulnerable, since tourism can collapse, while a healthy reef supports fishing that feeds families for generations. Residents could think that smaller, community-led eco-tourism that protects the reef would be a more sustainable way to bring in income.',
    keyConcepts: ['sustainability', 'coastal development', 'environmental risk', 'reef and habitat protection', 'alternatives'],
    keywords: ['reef', 'coral', 'habitat', 'sediment', 'pollution', 'tourism', 'future generations', 'fishing', 'eco-tourism', 'sustainable'],
    feedbackHit:
      "Strong — you justified residents' opposition in detail with specific evidence (e.g. irreversible reef damage, sediment and pollution, vague green claims, over-dependence on tourism, and more sustainable alternatives like community eco-tourism) and clear reasoning.",
    feedbackMiss:
      'Move beyond stating worries: give detailed reasons WHY residents object — e.g. irreversible damage to the coral reef, sediment and pollution from construction and tourists, the vague and biased "green promise", over-dependence on one resort, and the existence of more sustainable alternatives like community-led eco-tourism.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          "The student states why some residents of Maribago Bay may not agree with the developer's plans. Students do not include sufficient detail to warrant a mark in a higher band.",
        exemplar: 'They might worry that the resort will damage the coral reef.',
      },
      {
        marks: '2–3',
        descriptor:
          'The student outlines why some residents may not agree with the developer’s plans. In this markband, students will give a brief account of an argument without providing reasons.',
        exemplar:
          'The residents may think that building a hotel and marina next to the reef will damage the habitat. They might feel the developer mostly wants profit. Construction could pollute the bay. The website is just an advertisement. They may prefer other ways to bring in income.',
      },
      {
        marks: '4–5',
        descriptor:
          'The student justifies why some residents may not agree with the developer’s plans. To reach this markband, students should provide a good level of understanding along with reason(s) to support their point(s).',
        exemplar:
          'The residents may think that building a 300-room hotel and marina next to the reef will damage a habitat that can never be replaced, and that this is too high a price for tourist income. The construction could stir up sediment that smothers the coral, and waste water could pollute the bay. Residents could think that smaller, community-led eco-tourism that protects the reef would be a more sustainable way to bring in income.',
      },
      {
        marks: '6',
        descriptor:
          'The student justifies in detail why some residents of Maribago Bay may not agree with the developer’s plans. To reach this markband, the student should provide detailed evidence and reason(s).',
        exemplar:
          'The residents may think that building a hotel and marina right next to the reef will damage a habitat that has taken thousands of years to grow and can never be replaced. Construction could stir up sediment that smothers coral, and waste water and crowds of tourists could pollute the bay. Can residents be sure the "green promise" is genuine, when the website gives no firm detail and is clearly an advertisement designed to persuade? They may also worry that depending on a single resort makes the community vulnerable, since tourism can collapse, while a healthy reef supports fishing that feeds families for generations. Residents could think community-led eco-tourism would be a more sustainable alternative.',
      },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Introduction: Define the consumption of ocean resources through fishing and state that whether the benefits outweigh the problems depends on which method is used and how it is managed. Main body: Take at least one fishing method (e.g. trawling) and weigh different perspectives — economic (cheap protein, jobs, export earnings, supplying the global market), environmental (damage to the seabed, bycatch of unwanted species, the collapse of fish stocks through overfishing), political (catch limits and enforcement, international fishing agreements), and social (food security and coastal livelihoods vs the loss of jobs when stocks run out). Contrast a more sustainable example from Source D (small-scale fishing, or fish farming) to show that some ways of consuming ocean resources are far less harmful, balancing the benefits against problems such as waste from fish farms or lower volumes from small boats. Synthesize the perspectives (this may appear in the body or the conclusion). Conclusion: Combine the benefits and the problems into a clear, coherent and convincing judgement on the extent to which the benefits outweigh the problems — concluding either that they do, do not, or are equally balanced, supported by the evidence and reasoning developed in the body.',
    keyConcepts: ['ocean resource consumption', 'fishing', 'sustainability', 'benefits vs problems', 'multiple perspectives', 'synthesis', 'judgement'],
    keywords: ['fishing', 'trawling', 'overfishing', 'bycatch', 'aquaculture', 'economic', 'environmental', 'political', 'social', 'perspectives', 'benefits', 'problems', 'sustainable', 'conclusion', 'synthesis'],
    feedbackHit:
      'Excellent essay — you explained at least one fishing method in detail with accurate examples (Crit A), used a clear intro/body/conclusion in separate paragraphs (C1), wrote in a consistent formal style (C2), structured ideas logically with transitions (C3), and gave a balanced, synthesised discussion of multiple perspectives ending in a clear, convincing judgement (Crit D).',
    feedbackMiss:
      'For top marks: discuss at least one fishing method in detail across economic/environmental/political/social aspects with accurate examples (Crit A); use separate intro, body and conclusion paragraphs (C1); keep a formal, clear essay style (C2); link ideas with transitions (C3); and balance at least two perspectives, synthesising them into a clear, convincing judgement on whether the benefits outweigh the problems (Crit D).',
    commandTerm: 'To what extent',
    commandTermDefinition:
      'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1–2',
        descriptor:
          'The student demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. Responses are likely to be brief, with little detail. There is requirement to include one fishing method and aspects such as economic, environmental, political, social as per the question. Terminology may be limited in accuracy and/or frequency.',
      },
      {
        marks: 'CritA 3–4',
        descriptor:
          'The student demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. The student should show knowledge of at least one fishing method and aspects (economic, environmental, political, social). Examples are accurate but might be lacking in detail or not the most appropriate. There may be some reasons but if examples/terminology/detail are not sufficient for the higher band, a mark in this band should be awarded. Terminology should be accurately used in the correct context.',
      },
      {
        marks: 'CritA 5–6',
        descriptor:
          'The student demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology. Students need a very good understanding of at least one fishing method and aspects, providing a response that is accurate and responds to the question. An explanation requires reasons to be included. The student should call on appropriate examples that support their points. Terminology accurate and effective in the correct context in most of the essay.',
      },
      {
        marks: 'CritA 7–8',
        descriptor:
          'The student demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. The response should provide accurate detail throughout and clear reasons, making use of examples that demonstrate a comprehensive understanding of at least one fishing method and aspects (economic, environmental, political, social). For (7–8 marks) the response must reference examples in detail. Terminology accurate and effective throughout.',
      },
      { marks: 'C1 Format 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C1 Format 1',
        descriptor:
          'Two of the following elements are included: introduction, a main body of argument or a conclusion. The elements must appear as separate paragraphs. If this is not the case, (0 marks) should be awarded.',
      },
      {
        marks: 'C1 Format 2',
        descriptor:
          'Three of the following elements are included: introduction, a main body of argument and a conclusion. The elements must appear as separate paragraphs.',
      },
      { marks: 'C2 Communicating 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C2 Communicating 1',
        descriptor:
          'The style and language used are rarely appropriate to the audience and purpose of informing. The style of writing is rarely consistent with what would be expected in an essay. Language is rarely clear. Text may be extremely short.',
      },
      {
        marks: 'C2 Communicating 2',
        descriptor:
          'The style and language used are occasionally appropriate to the audience and purpose of informing. The style of writing is not always consistent. Language is less clear in places.',
      },
      {
        marks: 'C2 Communicating 3',
        descriptor:
          'The style and language used are consistently appropriate to the audience and purpose of informing. The style of writing is consistent with what would be expected in an essay. Language is formal and clear.',
      },
      { marks: 'C3 Structure 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C3 Structure 1',
        descriptor:
          'The organizational structure is rarely effective. Paragraphs/ideas sometimes build on each other in a logical manner. When appropriate, rarely uses effective transitions within or between sentences and/or paragraphs. Text may be extremely short.',
      },
      {
        marks: 'C3 Structure 2',
        descriptor:
          'The organizational structure is occasionally effective. Paragraphs/ideas build on each other in a mainly logical manner. When appropriate, sometimes uses effective transitions within sentences and between sentences and/or paragraphs.',
      },
      {
        marks: 'C3 Structure 3',
        descriptor:
          'The organizational structure is consistently appropriate and effective. Paragraphs/ideas build on each other in consistently clear and logical manner. When appropriate, uses effective transitions within sentences and between sentences and/or paragraphs.',
      },
      { marks: 'CritD 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: 'CritD 1–2',
        descriptor:
          'The student provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed. One perspective is included and only considered superficially, i.e. only general or vague points are made. The response might not reach a conclusion or fully answer the question at this level.',
      },
      {
        marks: 'CritD 3–4',
        descriptor:
          'The student provides different perspectives in an analysis and summarizes information to make clear arguments in response to the question posed. At least two perspectives (e.g. risks and benefits; different aspects) must be included with development of these to show some understanding and their implications; perspectives might not be equally considered/balanced. A conclusion is expected but is likely to be not fully developed at this level.',
      },
      {
        marks: 'CritD 5–6',
        descriptor:
          'The student provides different perspectives in an analysis and synthesizes information to make clear arguments in response to the question posed. At least two perspectives must be included with substantial development to show a good understanding, although perspectives might not be equally considered/balanced. The benefits of consuming ocean resources through fishing and the problems are combined to form a clear and coherent conclusion. The synthesis could appear in the main body or the conclusion.',
      },
      {
        marks: 'CritD 7–8',
        descriptor:
          'The student provides different perspectives in a detailed discussion and synthesizes information to make clear arguments in response to the question posed. At least two perspectives or more must be included with thorough development to show an excellent understanding; perspectives must be equally considered/balanced. The benefits and the problems are combined to form a clear, coherent and convincing conclusion that gives a judgment on whether the benefits outweigh the problems; they can conclude that they are equally balanced. The synthesis could appear in the main body or the conclusion.',
      },
    ],
  },
}
