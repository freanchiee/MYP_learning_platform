import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2022 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Source: N22-INS. Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B): Q1–Q4
 *   Task 2 Communicating (Crit A+C): Q5
 *   Task 3 Thinking critically (Crit A+C+D): Q6–Q8
 *
 * Theme: the World Happiness Report / development indicators, an investigation into
 * city-vs-country happiness, a 'People in History' presentation, a Labrador City
 * nuclear-waste source evaluation, and an essay on natural resource consumption.
 *
 * Visual stimulus sources are transcribed as text in the stem AND attached as
 * interactive artefacts (data-driven code_rendered components):
 *   Q1 (Source A)  → <ChoroplethWorld/> (highlight) — ten happiest countries
 *   Q2 (Source B)  → <NetworkGraph/>            — Happiness Index indicators
 *   Q4 action plan → <DataTableInteractive/>    — Stage 1 indicators & methods
 *   Q5 promo       → <InfoGraphicPanel/>         — People in History competition post
 *   Q6 (Source C)  → <SourceDocViewer/>          — Labrador Times interview transcript
 *   Q6a locator    → <ChoroplethWorld/> (highlight) — Canada / Labrador City
 *   Q8 (Source D)  → <SlideDeck/>                — natural resource consumption photos
 */

export interface PaperMeta {
  id: string
  subject: string
  session: 'May' | 'November'
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'humanities-nov-2022',
  subject: 'Integrated Humanities',
  session: 'November',
  year: 2022,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'B',
    type: 'extended',
    topic: 'World Happiness Report — reading a map of the happiest countries',
    marks: 2,
    stem:
      'The World Happiness Report is published by the United Nations (UN) every year. It ranks countries according to their level of happiness. These rankings are based on surveys completed by citizens and specific growth and development indicators.\n\n' +
      'Source A: The map shows the ten countries with the highest Happiness Index based on the 2018 World Happiness Report. The ten shaded countries are: Canada (North America); Iceland, Norway, Sweden, Finland, Denmark, Netherlands, Switzerland (Europe — clustered around Scandinavia/northern Europe); and Australia and New Zealand (Australasia/Oceania).',
    artefact: {
      component: 'ChoroplethWorld',
      data: {
        mode: 'highlight',
        title: 'Source A — The ten countries with the highest Happiness Index (2018)',
        source: '2018 World Happiness Report (United Nations)',
        highlight: [
          'Canada',
          'Iceland',
          'Norway',
          'Sweden',
          'Finland',
          'Denmark',
          'Netherlands',
          'Switzerland',
          'Australia',
          'New Zealand',
        ],
        highlightLabel: 'Highest Happiness Index',
        baseLabel: 'Other countries',
        caption:
          'The map shows the ten countries with the highest Happiness Index based on the 2018 World Happiness Report. By region: America = 1 (Canada); Europe = 7 (Iceland, Norway, Sweden, Finland, Denmark, Netherlands, Switzerland); Australasia/Oceania = 2 (Australia, New Zealand); Africa = 0; Asia = 0.',
      },
      caption: 'Source A — world map of the ten highest-ranked countries on the Happiness Index.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using **Source A**, **select** which region of the world has the largest number of countries with the highest Happiness Index.\n\nOptions: America / Africa / Asia / Europe / Australasia-Oceania',
        marks: 1,
        ph: 'Count the shaded countries in each region of Source A.',
      },
      {
        label: 'b',
        text: "**State** one factor that could lower a country's level of happiness.",
        marks: 1,
        ph: 'One factor, e.g. poverty, war, corruption, unemployment.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Justifying high happiness using a development indicator (Source B)',
    marks: 4,
    stem:
      'Look at the sources below and answer the question that follows. Source A is repeated for information.\n\n' +
      "Source B: The interactive diagram shows some of the indicators used to rank countries in the World Happiness Index. The central node is labelled 'World Happiness Index'. Four indicators branch from it:\n" +
      '• Surveys — "Citizens are asked various questions about the quality of their lives."\n' +
      '• Social support — "The level of assistance and care provided by individuals, organizations, and governments in times of trouble."\n' +
      '• Gross Domestic Product (GDP) — "GDP per capita of a country is defined as the total value of all final goods and services produced within a country in a given period of time divided by the population. (Source: Oxford dictionary)"\n' +
      '• Healthy life expectancy at birth — "The age people are expected to live to from birth."',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Source B — Indicators used to rank countries in the World Happiness Index',
        source: 'World Happiness Index. Hover over the indicators for more information.',
        center: {
          label: 'World Happiness Index',
          detail: 'Some of the indicators used to rank countries in the World Happiness Index.',
          color: '#1c3d5a',
        },
        nodes: [
          {
            id: 'surveys',
            label: 'Surveys',
            color: '#0b7285',
            detail: 'Citizens are asked various questions about the quality of their lives.',
          },
          {
            id: 'social',
            label: 'Social support',
            color: '#e8590c',
            detail:
              'The level of assistance and care provided by individuals, organizations, and governments in times of trouble.',
          },
          {
            id: 'gdp',
            label: 'Gross Domestic Product (GDP)',
            color: '#c2255c',
            detail:
              'GDP per capita of a country is defined as the total value of all final goods and services produced within a country in a given period of time divided by the population. (Source: Oxford dictionary)',
          },
          {
            id: 'life',
            label: 'Healthy life expectancy at birth',
            color: '#1971c2',
            detail: 'The age people are expected to live to from birth.',
          },
        ],
      },
      caption:
        'Source B — hub-and-spoke diagram of four indicators (Surveys, Social support, GDP, Healthy life expectancy at birth). Hover an indicator for its definition.',
    },
    tasks: [
      {
        label: '',
        text: '**Justify** why the countries shown in **source A** were able to reach the highest levels of happiness. In your response, you must refer to **one** indicator shown in **source B**.',
        marks: 4,
        ph: 'Pick one Source B indicator; give a reason and link it to a country’s ranking.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Planning an investigation: city vs country happiness',
    marks: 12,
    stem:
      'In the World Happiness Report, a ranking of various cities is also available. It shows that sometimes a city can be ranked as happier than the country it is part of.\n\n' +
      'As an Integrated Humanities student, you must plan an investigation to verify this finding for a location (such as a village, town or city) and country of your choice.\n\n' +
      'With reference to one of the development indicators below, you will formulate a research question to guide your investigation:\n' +
      '• GDP per capita\n' +
      '• Social support\n' +
      '• Healthy life expectancy at birth\n\n' +
      'Your research question must focus on a component of one of the development indicators.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to **one** of the development indicators (GDP per capita; Social support; Healthy life expectancy at birth), **formulate** a clear and focused research question to guide your investigation. Your research question **must** focus on a component of **one** of the development indicators.',
        marks: 2,
        ph: 'Write a clear, focused RQ that names a location and a specific component.',
      },
      {
        label: 'b',
        text: "**Justify** how your research question would help you verify the findings of the report that sometimes a city can be rated as 'happier' than its country.",
        marks: 4,
        ph: 'Explain, with reasoning, how your RQ verifies the city-vs-country finding.',
      },
      {
        label: 'c',
        text: '**List** two pieces of data you would need to help you investigate your research question.',
        marks: 2,
        ph: 'Name two data items linked to your RQ, location or indicator.',
      },
      {
        label: 'd',
        text: '**Outline** one challenge you might face during your investigation.',
        marks: 2,
        ph: 'Give one challenge with brief elaboration.',
      },
      {
        label: 'e',
        text: '**Outline** one method of recording the data that you would use during your investigation.',
        marks: 2,
        ph: 'Give one recording method, briefly elaborated.',
      },
    ],
  },
  {
    id: 4,
    crit: 'D',
    type: 'extended',
    topic: "Evaluating a local government's happiness investigation action plan",
    marks: 8,
    stem:
      'A local government wants to improve the lives of its citizens. To do this, they have analysed some of the other indicators used in determining the Happiness Index, in addition to the data they already have on GDP per capita, social support and healthy life expectancy at birth.\n\n' +
      'They have chosen to focus on three indicators: freedom to make life choices; generosity; and the perception of corruption.\n\n' +
      'You will be asked to evaluate the local government’s action plan shown below.\n\n' +
      'ACTION PLAN — Deadline to complete the investigation: 10 days\n\n' +
      'Stage 1 — Gather data on the following indicators / Method:\n' +
      '• Freedom to make life choices → Survey 100 citizens for their opinion\n' +
      '• Generosity → Contact charities to determine the total amount of donations made to charities in the past month by citizens\n' +
      '• Perception of corruption amongst leadership → Interview local government members about the level of honesty in the government\n\n' +
      'Stage 2 — Once Stage 1 data has been gathered, present the findings to a professor in Economics for analysis.\n\n' +
      'Stage 3 — Based on the findings, make recommendations to their local government leader.',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Action Plan',
        source: 'Deadline to complete the investigation: 10 days',
        caption:
          'Stage 1 — Gather data. Stage 2: present the findings to a professor in Economics for analysis. Stage 3: based on the findings, make recommendations to their local government leader.',
        headers: ['Gather data on the following indicators', 'Method'],
        rows: [
          ['Freedom to make life choices', 'Survey 100 citizens for their opinion'],
          [
            'Generosity',
            'Contact charities to determine the total amount of donations made to charities in the past month by citizens',
          ],
          [
            'Perception of corruption amongst leadership',
            'Interview local government members about the level of honesty in the government',
          ],
        ],
      },
      caption: "The local government's action plan — Stage 1 indicators and the method used to gather data for each.",
    },
    tasks: [
      {
        label: '',
        text:
          "**Evaluate** the local government's action plan.\n\n" +
          '(Note: you do not need to discuss both strengths and limitations of every part of the investigation to access full marks. Marks are awarded for the quality of the response, not the number of strengths or limitations. This question is marked across three strands: Strengths /3, Limitations /3, Appraisal /2.)',
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan, then give an overall appraisal.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: "Presentation script — 'People in History' significant individual",
    marks: 18,
    stem:
      "Your school is participating in a global competition called 'People in History', where students in the MYP compete to convince a team of judges how an individual's actions have brought about noteworthy change in history.\n\n" +
      "The competition is promoted by the International Baccalaureate / Middle Years Programme as a social-media style post headed 'COMPETITION! PEOPLE IN HISTORY — CALLING ALL MYP STUDENTS! Submit your presentation on how a well known individual's actions brought about noteworthy change in history today and WIN!' A row of portraits of well-known historical figures is shown (e.g. Abraham Lincoln, Anne Frank, Frida Kahlo, William Shakespeare, Henry VIII, Princess Diana, Martin Luther King Jr, Vincent van Gogh).\n\n" +
      'To prepare for this competition, you must write a script for your presentation to explain how the actions of one significant individual brought about change in history.\n\n' +
      'Consider the below when preparing the script:\n' +
      '• Choose a well known individual who had a positive or negative impact.\n' +
      '• Use a tone that is appropriate for convincing and engaging your audience.\n' +
      '• Include an opening and concluding statement.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'COMPETITION! PEOPLE IN HISTORY — CALLING ALL MYP STUDENTS!',
        source: 'International Baccalaureate · Middle Years Programme (social-media post)',
        intro:
          "Submit your presentation on how a well known individual's actions brought about noteworthy change in history today and WIN!",
        layout: 'flow',
        blocks: [
          {
            heading: 'The challenge',
            icon: '🏆',
            items: [
              'Convince a team of judges how an individual’s actions brought about noteworthy change in history.',
              'Choose a well known individual who had a positive OR negative impact.',
            ],
          },
          {
            heading: 'Featured figures (portraits shown)',
            icon: '🖼️',
            items: [
              'Abraham Lincoln',
              'Anne Frank',
              'Frida Kahlo',
              'William Shakespeare',
              'Henry VIII',
              'Princess Diana',
              'Martin Luther King Jr',
              'Vincent van Gogh',
            ],
            note: 'You may choose any well known individual, not only those pictured.',
          },
        ],
      },
      caption:
        'Social-media style competition post promoting the IB MYP ‘People in History’ competition, with a strip of portraits of well-known historical figures.',
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script for your presentation to **explain** how the actions of **one** significant individual brought about change in history.\n\n' +
          '(Marked across four strands: Criterion A — Knowing & understanding /6; C1 Format /2; C2 Communicating information and ideas /6; C3 Organizational structure /4.)',
        marks: 18,
        ph: "A presentation script explaining one individual's historical impact, in an engaging, convincing tone.",
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — Labrador City nuclear waste interview (Source C)',
    marks: 6,
    stem:
      'The community of Labrador City, Canada, is looking into a plan to store nuclear waste in the area. (A world map locates Canada and, in a magnified inset, the position of Labrador City within eastern Canada.)\n\n' +
      'Source C is a transcript of an interview between a politician from Labrador City and a local journalist discussing the plan. The interview was published in the Labrador Times newspaper.\n\n' +
      'Analyse the interview from the perspective of a resident of Labrador City looking into the sustainable management of nuclear waste.\n\n' +
      'SOURCE C (transcript):\n' +
      'Journalist: Can you tell me why you think it is a good idea to store nuclear waste near Labrador City?\n' +
      'Politician: We are a generation that is benefitting from nuclear energy. We have used it to produce electricity to power our homes, our schools, our businesses, and hospitals. However, we have the responsibility to find a long-term solution for nuclear waste.\n' +
      'Journalist: How do you plan to deal with the waste?\n' +
      'Politician: Our plan is to store the used fuel in a deep underground storage facility. We are working with the best engineers and most recent technology to bury the waste in containers that could even withstand the next ice age.\n' +
      'Journalist: Some people are worried about this plan and what it will do to the area. Why should we consider this for our community?\n' +
      'Politician: Doing nothing is not an option — we have to protect future generations. Most of the waste is sitting in concrete and steel containers that are growing in number every year and there is no alternative plan to deal with it. We are proposing to build a facility that will dispose of the waste in a safe and secure manner. It will be buried 500 metres or more underground and stored in containers that have many layers.\n' +
      'Journalist: How will you make sure that we are safe in the long-term? How will the waste be transported to the site?\n' +
      'Politician: Right now, highly radioactive waste sits in storage emitting radiation that can pose serious risks to human health and the environment. With nowhere to go for now, the hazardous materials and their containers continue to age. This is an unsustainable situation.',
    artefact: {
      component: 'SourceDocViewer',
      data: {
        title: 'Source C — Interview on storing nuclear waste near Labrador City',
        attribution: 'Published in the Labrador Times newspaper',
        kind: 'Interview transcript (newspaper)',
        paragraphs: [
          'Journalist: Can you tell me why you think it is a good idea to store nuclear waste near Labrador City?',
          'Politician: We are a generation that is benefitting from nuclear energy. We have used it to produce electricity to power our homes, our schools, our businesses, and hospitals. However, we have the responsibility to find a long-term solution for nuclear waste.',
          'Journalist: How do you plan to deal with the waste?',
          'Politician: Our plan is to store the used fuel in a deep underground storage facility. We are working with the best engineers and most recent technology to bury the waste in containers that could even withstand the next ice age.',
          'Journalist: Some people are worried about this plan and what it will do to the area. Why should we consider this for our community?',
          'Politician: Doing nothing is not an option — we have to protect future generations. Most of the waste is sitting in concrete and steel containers that are growing in number every year and there is no alternative plan to deal with it. We are proposing to build a facility that will dispose of the waste in a safe and secure manner. It will be buried 500 metres or more underground and stored in containers that have many layers.',
          'Journalist: How will you make sure that we are safe in the long-term? How will the waste be transported to the site?',
          'Politician: Right now, highly radioactive waste sits in storage emitting radiation that can pose serious risks to human health and the environment. With nowhere to go for now, the hazardous materials and their containers continue to age. This is an unsustainable situation.',
        ],
        glossary: {
          'nuclear waste': 'The radioactive material left over after nuclear fuel has been used to produce energy.',
          radioactive: 'Emitting radiation that can be harmful to human health and the environment.',
        },
      },
      caption:
        'Source C — transcript of an interview between a Labrador City politician and a local journalist about the plan to store nuclear waste underground, published in the Labrador Times.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of **source C**.',
        marks: 1,
        ph: 'Where the source came from.',
        artefact: {
          component: 'ChoroplethWorld',
          data: {
            mode: 'highlight',
            title: 'Locator map — Labrador City, Canada',
            source: 'Locator map',
            highlight: ['Canada'],
            highlightLabel: 'Canada (Labrador City is in the Labrador region of eastern Canada)',
            baseLabel: 'Other countries',
            caption:
              'The community of Labrador City, Canada, is looking into a plan to store nuclear waste in the area. Labrador City lies in the Labrador region of eastern Canada.',
          },
          caption: 'World map locating Canada; Labrador City sits in the Labrador region of eastern Canada.',
        },
      },
      {
        label: 'b',
        text: '**State** the purpose of **source C**.',
        marks: 1,
        ph: 'Why the source was produced.',
      },
      {
        label: 'c',
        text: '**Outline** one value of **source C** from the perspective of a resident of Labrador City looking into the sustainable management of nuclear waste.',
        marks: 2,
        ph: 'One value, briefly elaborated.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of **source C** from the perspective of a resident of Labrador City looking into the sustainable management of nuclear waste.',
        marks: 2,
        ph: 'One limitation, briefly elaborated.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: "Justifying residents' opposition to the nuclear waste plan",
    marks: 6,
    stem:
      'This question continues to use Source C (the Labrador Times interview between a politician from Labrador City and a journalist about the plan to store nuclear waste underground near Labrador City, Canada).',
    artefact: {
      component: 'SourceDocViewer',
      data: {
        title: 'Source C — Interview on storing nuclear waste near Labrador City (repeated)',
        attribution: 'Published in the Labrador Times newspaper',
        kind: 'Interview transcript (newspaper)',
        paragraphs: [
          'Journalist: Can you tell me why you think it is a good idea to store nuclear waste near Labrador City?',
          'Politician: We are a generation that is benefitting from nuclear energy. We have used it to produce electricity to power our homes, our schools, our businesses, and hospitals. However, we have the responsibility to find a long-term solution for nuclear waste.',
          'Journalist: How do you plan to deal with the waste?',
          'Politician: Our plan is to store the used fuel in a deep underground storage facility. We are working with the best engineers and most recent technology to bury the waste in containers that could even withstand the next ice age.',
          'Journalist: Some people are worried about this plan and what it will do to the area. Why should we consider this for our community?',
          'Politician: Doing nothing is not an option — we have to protect future generations. Most of the waste is sitting in concrete and steel containers that are growing in number every year and there is no alternative plan to deal with it. We are proposing to build a facility that will dispose of the waste in a safe and secure manner. It will be buried 500 metres or more underground and stored in containers that have many layers.',
          'Journalist: How will you make sure that we are safe in the long-term? How will the waste be transported to the site?',
          'Politician: Right now, highly radioactive waste sits in storage emitting radiation that can pose serious risks to human health and the environment. With nowhere to go for now, the hazardous materials and their containers continue to age. This is an unsustainable situation.',
        ],
      },
      caption: 'Source C (repeated) — the Labrador Times nuclear-waste interview transcript.',
    },
    tasks: [
      {
        label: '',
        text: "**Justify** why some residents of Labrador City may not agree with the politician's plans for the management of nuclear waste.",
        marks: 6,
        ph: 'Give detailed, reasoned arguments for why residents would oppose the plan.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Essay — To what extent do the benefits of natural resource consumption outweigh the problems?',
    marks: 24,
    stem:
      'Source D shows examples of the consumption of different natural resources. Look at the source and answer the question that follows.\n\n' +
      'Source D is an interactive image slideshow (a carousel with left/right navigation arrows) showing photographs of the consumption of different natural resources, each captioned:\n' +
      '• Forests — a photograph of a deforested hillside: a small remaining cluster of trees beside a vast clear-cut slope littered with felled logs and debris under a blue cloudy sky.\n' +
      '• Fossil fuels — a photograph of oil pumpjacks (nodding donkeys) operating at an oilfield at sunset.\n' +
      '• Coal — a photograph of a yellow front-loader scooping coal at an open coal mine/stockpile.\n' +
      '• Water — an aerial photograph of a hydroelectric dam releasing water across a reservoir surrounded by forested slopes.\n' +
      '• Sunlight — an aerial photograph of a large solar panel farm laid out across green fields.',
    artefact: {
      component: 'SlideDeck',
      data: {
        title: 'Source D — Examples of the consumption of different natural resources',
        source: 'Source D',
        slides: [
          {
            title: 'Forests',
            body:
              'A deforested hillside: a small remaining cluster of trees beside a vast clear-cut slope littered with felled logs and debris under a blue cloudy sky.',
          },
          {
            title: 'Fossil fuels',
            body: 'Multiple oil pumpjacks ("nodding donkeys") operating at an oilfield at sunset.',
          },
          {
            title: 'Coal',
            body: 'A yellow front-loader (wheel loader) scooping coal at an open-cast coal mine / stockpile.',
          },
          {
            title: 'Water',
            body:
              'An aerial view of a hydroelectric dam discharging water across a reservoir surrounded by forested slopes.',
          },
          {
            title: 'Sunlight',
            body: 'An aerial view of a large solar panel farm — rows of blue photovoltaic panels laid out across green fields.',
          },
        ],
      },
      caption:
        'Source D — image carousel of five natural resources being consumed: Forests, Fossil fuels, Coal, Water and Sunlight. Use the arrows to move between slides.',
    },
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** do the benefits of natural resource consumption outweigh the problems it could cause?\n\n' +
          'In your essay, you must:\n' +
          '• refer to **at least one** natural resource (you may use the examples given in **source D** but not **source C**)\n' +
          '• consider aspects such as economic, environmental, political and social\n' +
          '• consider different perspectives.\n\n' +
          '(Marked across five strands: Criterion A — Knowing & understanding /8; C1 Format /2; C2 Communicating /3; C3 Organizational structure /3; Criterion D — Thinking critically /8. Best fit is applied to each criterion separately.)',
        marks: 24,
        ph: 'A balanced essay weighing the benefits against the problems of natural resource consumption.',
      },
    ],
  },
]
