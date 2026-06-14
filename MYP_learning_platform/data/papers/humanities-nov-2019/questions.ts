import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2019 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Source: N19-INS. Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B+D): Q1–Q4
 *   Task 2 Communicating (Crit A+C): Q5
 *   Task 3 Thinking critically (Crit A+B+C+D): Q6–Q8
 *
 * Text/list/table stimulus is transcribed in full into stem/passage so the paper is
 * fully answerable today. Visual stimulus sources are attached as interactive
 * `artefact` fields (data-driven code-rendered components):
 *   Q2 → InteractiveChart   (Source B — rising and falling farmland line graph)
 *   Q3 → InfoGraphicPanel   (Q3 infographic — INVESTIGATING LAND USE)
 *   Q5 → InfoGraphicPanel   (Q5 inspiration image — FAIRNESS AND DEVELOPMENT)
 *   Q6/Q7 → SourceDocViewer (Source C — Quebec City transport video transcript)
 *   Q8 → TimelineScrubber   (Q8 timeline — technological developments/innovations)
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
  id: 'humanities-nov-2019',
  subject: 'Integrated Humanities',
  session: 'November',
  year: 2019,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B + D) ──────────────────────────
  {
    id: 1,
    crit: 'B',
    type: 'extended',
    topic: 'Land use for farming — identifying a reason from a text source',
    marks: 1,
    stem:
      'Source A\n\n' +
      'Recently, a group of researchers investigated global historical trends of land used for farming. They came to the following conclusions:\n' +
      '1. Globally, the production of crops requires 65 % less land than it did in 1960. This is due to fertilizers, pesticides, wider use of technology and better varieties of crops.\n' +
      '2. Despite the fact that the production of crops requires less land than it did in 1960, the overall land used for farming has actually increased due to:\n' +
      '   • population growth\n' +
      '   • increasing wealth (as people get wealthier, they consume more meat, which requires more land to produce).',
    tasks: [
      {
        label: '',
        text: '**State** one reason given in **Source A** for why the overall amount of land used for farming has increased.',
        marks: 1,
        ph: 'Name one reason from Source A (e.g. population growth)',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Reading a prediction off a farmland line graph + explaining biome impact',
    marks: 5,
    stem:
      'The group of researchers mentioned in Source A summarized their findings and predictions in the following graph (Source B): an interactive line graph titled “Rising and falling farmland: global farmland 1960–2020 and prediction for 2021–2060”. The x-axis is Year (1960 to 2060 in 10-year intervals); the y-axis is “Amount of land used in millions of hectares / MHa” (1200 to 1800). A solid line shows recorded data 1960–2020 (shaded orange region) and a dotted line shows the prediction 2021–2060. Hover values: 1960 = 1350 MHa, 1980 = 1420 MHa, 1990 = 1460 MHa, 2000 = 1490 MHa, 2010 = 1480 MHa, 2020 = 1500 MHa (peak), then declining: 2030 = 1470 MHa, 2040 = 1450 MHa, 2050 = 1420 MHa, 2060 = 1390 MHa.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source B — Rising and falling farmland: global farmland 1960–2020 and prediction for 2021–2060.',
      data: {
        kind: 'line',
        title: 'Rising and falling farmland: global farmland 1960–2020 and prediction for 2021–2060',
        x: {
          label: 'Year',
          categories: ['1960', '1970', '1980', '1990', '2000', '2010', '2020', '2030', '2040', '2050', '2060'],
        },
        y: {
          label: 'Amount of land used in millions of hectares',
          unit: 'MHa',
          min: 1200,
          max: 1800,
          ticks: [1200, 1400, 1600, 1800],
        },
        series: [
          {
            name: 'Data 1960–2020',
            color: '#d97706',
            points: [1350, 1400, 1420, 1460, 1490, 1480, 1500, NaN, NaN, NaN, NaN],
          },
          {
            name: 'Prediction 2021–2060',
            color: '#64748b',
            points: [NaN, NaN, NaN, NaN, NaN, NaN, 1500, 1470, 1450, 1420, 1390],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: 'Using **Source B**, **state** how many millions of hectares of land are predicted to be used in the year 2050.',
        marks: 1,
        ph: 'Read the dotted prediction line at 2050 (in MHa)',
      },
      {
        label: 'b',
        text:
          'Assuming the prediction of land use from 2021–2060 is accurate, **explain** the possible impact on **one** of the following biomes:\n' +
          '• aquatic\n' +
          '• desert\n' +
          '• forest\n' +
          '• grassland.',
        marks: 4,
        ph: 'Pick one biome; explain a likely impact with reasons',
      },
    ],
  },
  {
    id: 3,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating the process and results of the land-use investigation (infographic)',
    marks: 8,
    stem:
      'The researchers investigating land use produced an infographic (titled “INVESTIGATING LAND USE”) to demonstrate their investigation. You will be asked to evaluate the process and results of their investigation.\n\n' +
      'The infographic has three sections:\n' +
      'INFORMATION / DATA collected: “Total amount of hectares used for farming different crops”; “Past trends in global population growth”; “Future predictions of global population growth”; “Amount of corn, wheat and rice harvested per year”; “Global gross domestic product (GDP) per capita”.\n' +
      'SOURCES used: Government ministries in India, China and the United States; International Fertilizer Association (IFA); International Organization of Pesticide Producers; UN Food and Agriculture Organization (FAO); UN Department of Economic and Social Affairs; a reference book called International Historical Statistics, published in 1992; International Organization of Farm Machinery Producers.\n' +
      'CONCLUSIONS: 1. Globally, the production of crops requires 65 % less land than it did in 1960. This is due to fertilizers, pesticides, wider use of technology and better varieties of crops. 2. Despite the fact that the production of crops requires less land than it did in 1960, the overall land used for farming has actually increased due to: population growth; increasing wealth (as people get wealthier, they consume more meat, which requires more land to produce).\n\n' +
      'Note: Students do not need to discuss both strengths and limitations of every part of the investigation to access full marks. Marks are awarded based on the quality of the response, not the number of strengths or limitations referred to.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Infographic — INVESTIGATING LAND USE (the researchers’ investigation).',
      data: {
        title: 'INVESTIGATING LAND USE',
        layout: 'grid',
        blocks: [
          {
            heading: 'INFORMATION / DATA',
            items: [
              'Total amount of hectares used for farming different crops',
              'Past trends in global population growth',
              'Future predictions of global population growth',
              'Amount of corn, wheat and rice harvested per year',
              'Global gross domestic product (GDP) per capita',
            ],
          },
          {
            heading: 'SOURCES',
            items: [
              'Government ministries in India, China and the United States',
              'International Fertilizer Association (IFA)',
              'International Organization of Pesticide Producers',
              'UN Food and Agriculture Organization (FAO)',
              'UN Department of Economic and Social Affairs',
              'Reference book: International Historical Statistics, published in 1992',
              'International Organization of Farm Machinery Producers',
            ],
          },
          {
            heading: 'CONCLUSIONS',
            items: [
              'Globally, the production of crops requires 65 % less land than it did in 1960. This is due to fertilizers, pesticides, wider use of technology and better varieties of crops.',
              'Despite requiring less land than in 1960, the overall land used for farming has increased due to population growth and increasing wealth (wealthier people consume more meat, which requires more land to produce).',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the process and results of the investigation.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the data, sources and conclusions, then appraise overall',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Action plan — formulating a research question and planning investigation methods',
    marks: 12,
    stem:
      'Based on their conclusions, the researchers noted that it would be good to carry out further investigations into future trends that will impact on land use for farming. Their suggested future trends are:\n' +
      '• increased use of fertilizers, pesticides and technology in farming\n' +
      '• changing global population growth.\n\n' +
      'You will continue the investigation carried out by the researchers. You will need to develop an action plan by answering the following questions.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to **one** of the areas for further investigation and its impact on land use for farming, **formulate** a clear and focused research question.',
        marks: 2,
        ph: 'Write one clear, focused RQ tied to a future trend (specify place + product)',
      },
      {
        label: 'b',
        text:
          '**Justify** the relevance of your research question to the issue of future trends in land use for farming.\n\n' +
          'The future trends suggested by the researchers are:\n' +
          '• increased use of fertilizers, pesticides and technology in farming\n' +
          '• changing global population growth.',
        marks: 4,
        ph: 'Give reasons why your RQ matters to future farmland trends',
      },
      {
        label: 'c',
        text: '**Explain** one challenge you would have to overcome when investigating future trends in land use for farming.',
        marks: 4,
        ph: 'Describe one challenge with reasons (e.g. unpredictability of the future)',
      },
      {
        label: 'd',
        text: '**Identify** one research method you will use to collect information for your research question.',
        marks: 1,
        ph: 'Name one data-collection method (e.g. surveys, statistics)',
      },
      {
        label: 'e',
        text: '**Identify** one method you will use to record information for your research question.',
        marks: 1,
        ph: 'Name one recording method (e.g. spreadsheet, table)',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Presentation — positive and negative impacts of a superpower / empire / supranational institution on fairness and development',
    marks: 18,
    stem:
      'Your teacher has asked you to prepare a class presentation about the unit Superpowers, empires and supranational institutions and organizations that you have recently studied. Your teacher has given you an image below as inspiration for your presentation.\n\n' +
      'The image (interactive — “Click on the flags for more information”) is titled “FAIRNESS AND DEVELOPMENT”. On the left are three rows of paired flags: (1) the United States flag and the USSR (Soviet) flag — clicking reveals “The US and USSR are examples of superpowers”; (2) the Imperial Japanese (Rising Sun) flag and the Spanish Empire / Holy Roman Empire coat-of-arms flag — clicking reveals “Both Japan and Spain ruled over large empires”; (3) the United Nations flag and the League of Nations flag — clicking reveals “The United Nations and League of Nations are examples of supranational institutions/organizations”. On the right are coloured 3-D banner labels of key concepts/related concepts: Privilege, Conflict management, Security, Power, Freedom, Peace, Inclusion, Authority, Difference, Inequality, Justice.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Inspiration image — FAIRNESS AND DEVELOPMENT (click the flags for more information).',
      data: {
        title: 'FAIRNESS AND DEVELOPMENT',
        intro: 'Click on the flags for more information.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Superpowers',
            items: ['United States flag', 'USSR (Soviet) flag'],
            note: 'The US and USSR are examples of superpowers.',
          },
          {
            heading: 'Empires',
            items: ['Imperial Japan (Rising Sun) flag', 'Spanish Empire / Holy Roman Empire coat-of-arms flag'],
            note: 'Both Japan and Spain ruled over large empires.',
          },
          {
            heading: 'Supranational institutions / organizations',
            items: ['United Nations flag', 'League of Nations (Société des Nations) flag'],
            note: 'The United Nations and League of Nations are examples of supranational institutions/organizations.',
          },
          {
            heading: 'Key concepts / related concepts',
            items: ['Privilege', 'Conflict management', 'Security', 'Power', 'Freedom', 'Peace', 'Inclusion', 'Authority', 'Difference', 'Inequality', 'Justice'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Using knowledge from your MYP studies, **explain** the positive **and** negative impacts that **one** of the following has had on fairness and development:\n' +
          '• superpowers\n' +
          '• empires\n' +
          '• supranational institutions/organizations.\n\n' +
          'In your response, you must:\n' +
          '• focus on **one** superpower **or** empire **or** supranational institution/organization (from the image or your own knowledge)\n' +
          '• include a relevant title for your presentation\n' +
          '• create **one** presentation slide for positive impacts and **one** presentation slide for negative impacts. Your slides should be well-structured to communicate clearly to the audience.\n' +
          '• include a script to support each of your presentation slides.',
        marks: 18,
        ph: 'Write a titled presentation: positive-impacts slide+script and negative-impacts slide+script on one chosen power/empire/institution',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + B + C + D) ─────────────────
  {
    id: 6,
    crit: 'A',
    type: 'extended',
    topic: 'Explaining the positive effect of Quebec City’s public transport change (video source)',
    marks: 6,
    stem:
      'In Quebec City in Canada, the local government has announced changes to public transportation that will be made in the near future. This is in response to the increase in demand for better transport. Source C below is a video made in 2018 by the government to present the project to the public. You will need to explain how these changes will have a positive impact on the city.\n\n' +
      'Source C transcript:\n' +
      'Quebec City is changing its public transportation to make it more modern. In the near future, the bus system will be connected with a tramway service.\n' +
      'This service will increase mobility for everyone and connect the suburbs to the city via underground and outdoor stations.\n' +
      'Parking for cars and bikes will be available at the end of the lines.\n' +
      'Electricity will be the main power source for the tramway.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source C — Quebec City public transport video (transcript), local government, 2018.',
      data: {
        kind: 'Video transcript',
        title: 'Source C — Quebec City public transport',
        attribution: 'Video made in 2018 by the local government of Quebec City, Canada, to present the project to the public.',
        paragraphs: [
          'Quebec City is changing its public transportation to make it more modern. In the near future, the bus system will be connected with a tramway service.',
          'This service will increase mobility for everyone and connect the suburbs to the city via underground and outdoor stations.',
          'Parking for cars and bikes will be available at the end of the lines.',
          'Electricity will be the main power source for the tramway.',
        ],
        glossary: {
          tramway: 'An electric rail system that runs along streets and dedicated tracks to carry passengers within a city.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** how this change to Quebec City’s public transport system will have a positive effect on the city.',
        marks: 6,
        ph: 'Explain positive effects with reasons (traffic, accessibility, environment)',
      },
    ],
  },
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Describing the value and limitations of Source C (government video) for an MYP researcher',
    marks: 6,
    stem:
      'Source C is repeated to help you answer the questions that follow.\n\n' +
      'Source C transcript:\n' +
      'Quebec City is changing its public transportation to make it more modern. In the near future, the bus system will be connected with a tramway service.\n' +
      'This service will increase mobility for everyone and connect the suburbs to the city via underground and outdoor stations.\n' +
      'Parking for cars and bikes will be available at the end of the lines.\n' +
      'Electricity will be the main power source for the tramway.\n\n' +
      'Note: Responses to both part (a) and part (b) may include content (accuracy/objectivity of information, number of perspectives included and depth of those perspectives, layout and communication), origin (bias, how recent the source is, country or author — experts/reliability of source or studies, citations), purpose (intended audience, platform, facts or opinions).',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source C (repeated) — Quebec City public transport video transcript, local government, 2018.',
      data: {
        kind: 'Video transcript',
        title: 'Source C — Quebec City public transport',
        attribution: 'Video made in 2018 by the local government of Quebec City, Canada, to present the project to the public.',
        paragraphs: [
          'Quebec City is changing its public transportation to make it more modern. In the near future, the bus system will be connected with a tramway service.',
          'This service will increase mobility for everyone and connect the suburbs to the city via underground and outdoor stations.',
          'Parking for cars and bikes will be available at the end of the lines.',
          'Electricity will be the main power source for the tramway.',
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** the value of **Source C** to an MYP student researching how innovations impact urban environments.',
        marks: 3,
        ph: 'Describe how the video is useful (what it shows, content, origin, purpose)',
      },
      {
        label: 'b',
        text: '**Describe** the limitations of **Source C** to an MYP student researching how innovations impact urban environments.',
        marks: 3,
        ph: 'Describe weaknesses (bias, narrow scope, what it omits)',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Essay — discussing how one technological development/innovation has impacted quality of life',
    marks: 24,
    stem:
      'The timeline below shows examples of technological developments and innovations through time. Look at these and answer the question that follows.\n\n' +
      'The interactive timeline (“Click on the timeline to show more information”) plots three innovations along a line, each pinned to a location on a rotating globe:\n' +
      '• The compass — China — 1040 BCE\n' +
      '• The Gutenberg printing press — Germany — 1430s\n' +
      '• The internal combustion engine — various locations — late 19th century.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'Timeline — examples of technological developments and innovations through time.',
      data: {
        title: 'Technological developments and innovations through time',
        events: [
          {
            date: '1040 BCE',
            label: 'The compass',
            detail: 'The compass — China, 1040 BCE. An early magnetic instrument used to determine direction.',
          },
          {
            date: '1430s',
            label: 'The Gutenberg printing press',
            detail: 'The Gutenberg printing press — Germany, 1430s. A movable-type press that allowed books to be produced in large numbers.',
          },
          {
            date: 'Late 19th century',
            label: 'The internal combustion engine',
            detail: 'The internal combustion engine — various locations, late 19th century. An engine that burns fuel internally to power vehicles and machinery.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, **discuss** how **one** technological development/innovation has impacted quality of life.\n\n' +
          'In your response:\n' +
          '• you can use an example given in the timeline above or one from your own knowledge\n' +
          '• you must not discuss public transport or public transport systems as addressed in **Source C** (questions 6 and 7)\n' +
          '• you must include different perspectives about the impact of your chosen technological development/innovation.',
        marks: 24,
        ph: 'Write a structured essay discussing one innovation’s impact on quality of life from different perspectives',
      },
    ],
  },
]
