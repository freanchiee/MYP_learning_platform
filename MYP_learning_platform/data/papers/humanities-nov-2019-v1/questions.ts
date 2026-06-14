import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2019 · VARIANT 1 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Total 80 marks, 3 tasks (identical construct to humanities-nov-2019):
 *   Task 1 Investigating (Crit A+B+D): Q1–Q4
 *   Task 2 Communicating (Crit A+C): Q5
 *   Task 3 Thinking critically (Crit A+B+C+D): Q6–Q8
 *
 * NEW SCENARIO (Investigating): global trends in FRESHWATER WITHDRAWALS for agriculture.
 * NEW SCENARIO (Communicating): impacts of superpowers/empires/supranational institutions
 *   on fairness and development (same construct, fresh stimulus).
 * NEW SCENARIO (Thinking critically): a city's RIVERFRONT GREENWAY / cycle-network project.
 * Scenario-fitting artefacts (chosen to differ from source where sensible):
 *   Q2 → InteractiveChart   (Source B — line graph of global agricultural water withdrawals)
 *   Q3 → DataTableInteractive (Source — the water-use investigation summary table)
 *   Q5 → NetworkGraph       (inspiration map of powers/empires/institutions + key concepts)
 *   Q6/Q7 → SlideDeck        (Source C — city greenway project website/pitch deck)
 *   Q8 → TimelineScrubber    (timeline — technological developments through time)
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
  id: 'humanities-nov-2019-v1',
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
    topic: 'Freshwater use for farming — identifying a reason from a text source',
    marks: 1,
    stem:
      'Source A\n\n' +
      'A team of geographers investigated global historical trends in the amount of freshwater withdrawn for agriculture. They reached the following conclusions:\n' +
      '1. Globally, producing one tonne of grain requires far less water than it did in 1970. This is due to drip irrigation, more efficient pumps, soil-moisture sensors and drought-tolerant crop varieties.\n' +
      '2. Despite the fact that producing each tonne of grain requires less water than in 1970, the overall amount of freshwater withdrawn for farming has actually increased due to:\n' +
      '   • population growth\n' +
      '   • rising incomes (as people become wealthier, they eat more meat and dairy, which need far more water to produce).',
    tasks: [
      {
        label: '',
        text: '**State** one reason given in **Source A** for why the overall amount of freshwater withdrawn for farming has increased.',
        marks: 1,
        ph: 'Name one reason from Source A (e.g. population growth)',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Reading a prediction off a water-withdrawal line graph + explaining biome impact',
    marks: 5,
    stem:
      'The team of geographers from Source A summarized their findings and predictions in the following graph (Source B): an interactive line graph titled “Rising and falling water use: global agricultural water withdrawals 1970–2020 and prediction for 2021–2060”. The x-axis is Year (1970 to 2060 in 10-year intervals); the y-axis is “Freshwater withdrawn for agriculture in cubic kilometres per year / km³” (2000 to 3200). A solid line shows recorded data 1970–2020 and a dotted line shows the prediction 2021–2060. Hover values: 1970 = 2300 km³, 1980 = 2450 km³, 1990 = 2600 km³, 2000 = 2720 km³, 2010 = 2780 km³, 2020 = 2850 km³ (peak), then declining: 2030 = 2790 km³, 2040 = 2720 km³, 2050 = 2640 km³, 2060 = 2550 km³.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source B — Rising and falling water use: global agricultural water withdrawals 1970–2020 and prediction for 2021–2060.',
      data: {
        kind: 'line',
        title: 'Rising and falling water use: global agricultural water withdrawals 1970–2020 and prediction for 2021–2060',
        x: {
          label: 'Year',
          categories: ['1970', '1980', '1990', '2000', '2010', '2020', '2030', '2040', '2050', '2060'],
        },
        y: {
          label: 'Freshwater withdrawn for agriculture in cubic kilometres per year',
          unit: 'km³',
          min: 2000,
          max: 3200,
          ticks: [2000, 2400, 2800, 3200],
        },
        series: [
          {
            name: 'Data 1970–2020',
            color: '#0ea5e9',
            points: [2300, 2450, 2600, 2720, 2780, 2850, NaN, NaN, NaN, NaN],
          },
          {
            name: 'Prediction 2021–2060',
            color: '#64748b',
            points: [NaN, NaN, NaN, NaN, NaN, 2850, 2790, 2720, 2640, 2550],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: 'Using **Source B**, **state** how many cubic kilometres of freshwater are predicted to be withdrawn for agriculture in the year 2050.',
        marks: 1,
        ph: 'Read the dotted prediction line at 2050 (in km³)',
      },
      {
        label: 'b',
        text:
          'Assuming the prediction of agricultural water use from 2021–2060 is accurate, **explain** the possible impact on **one** of the following biomes:\n' +
          '• aquatic\n' +
          '• desert\n' +
          '• forest\n' +
          '• wetland.',
        marks: 4,
        ph: 'Pick one biome; explain a likely impact with reasons',
      },
    ],
  },
  {
    id: 3,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating the process and results of the water-use investigation (summary table)',
    marks: 8,
    stem:
      'The geographers investigating agricultural water use produced a summary table to demonstrate their investigation. You will be asked to evaluate the process and results of their investigation.\n\n' +
      'The table records, for each part of the investigation, the INFORMATION / DATA collected, the SOURCES used, and the CONCLUSIONS drawn.\n' +
      'INFORMATION / DATA collected: total cubic kilometres of freshwater withdrawn for irrigation; past trends in global population growth; future predictions of global population growth; tonnes of rice, wheat and cotton produced per year; global meat and dairy consumption per capita.\n' +
      'SOURCES used: agriculture ministries in India, China and the United States; the International Commission on Irrigation and Drainage; a global irrigation-equipment manufacturers’ association; the UN Food and Agriculture Organization (FAO); the UN Department of Economic and Social Affairs; a reference book, World Water Statistics, published in 1995.\n' +
      'CONCLUSIONS: 1. Globally, producing one tonne of grain requires far less water than it did in 1970, due to drip irrigation, efficient pumps, soil-moisture sensors and drought-tolerant varieties. 2. Despite needing less water per tonne than in 1970, the overall freshwater withdrawn for farming has increased due to population growth and rising incomes (wealthier people eat more meat and dairy, which need far more water to produce).\n\n' +
      'Note: Students do not need to discuss both strengths and limitations of every part of the investigation to access full marks. Marks are awarded based on the quality of the response, not the number of strengths or limitations referred to.',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source — INVESTIGATING AGRICULTURAL WATER USE (the geographers’ investigation summary).',
      data: {
        title: 'INVESTIGATING AGRICULTURAL WATER USE',
        caption: 'Summary of the investigation: data collected, sources used and conclusions drawn.',
        headers: ['Part of investigation', 'Details'],
        rows: [
          ['Information / data collected', 'Total cubic kilometres of freshwater withdrawn for irrigation'],
          ['Information / data collected', 'Past trends in global population growth'],
          ['Information / data collected', 'Future predictions of global population growth'],
          ['Information / data collected', 'Tonnes of rice, wheat and cotton produced per year'],
          ['Information / data collected', 'Global meat and dairy consumption per capita'],
          ['Sources used', 'Agriculture ministries in India, China and the United States'],
          ['Sources used', 'International Commission on Irrigation and Drainage'],
          ['Sources used', 'Global irrigation-equipment manufacturers’ association'],
          ['Sources used', 'UN Food and Agriculture Organization (FAO)'],
          ['Sources used', 'UN Department of Economic and Social Affairs'],
          ['Sources used', 'Reference book: World Water Statistics, published in 1995'],
          ['Conclusion 1', 'Producing one tonne of grain requires far less water than in 1970, due to drip irrigation, efficient pumps, soil-moisture sensors and drought-tolerant varieties.'],
          ['Conclusion 2', 'Despite needing less water per tonne, overall freshwater withdrawn for farming has increased due to population growth and rising incomes (wealthier people eat more meat and dairy, which need far more water).'],
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
      'Based on their conclusions, the geographers noted that it would be good to carry out further investigations into future trends that will impact freshwater use for farming. Their suggested future trends are:\n' +
      '• increased use of drip irrigation, efficient pumps and water-saving technology in farming\n' +
      '• changing global population growth.\n\n' +
      'You will continue the investigation carried out by the geographers. You will need to develop an action plan by answering the following questions.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to **one** of the areas for further investigation and its impact on freshwater use for farming, **formulate** a clear and focused research question.',
        marks: 2,
        ph: 'Write one clear, focused RQ tied to a future trend (specify place + product)',
      },
      {
        label: 'b',
        text:
          '**Justify** the relevance of your research question to the issue of future trends in freshwater use for farming.\n\n' +
          'The future trends suggested by the geographers are:\n' +
          '• increased use of drip irrigation, efficient pumps and water-saving technology in farming\n' +
          '• changing global population growth.',
        marks: 4,
        ph: 'Give reasons why your RQ matters to future water-use trends',
      },
      {
        label: 'c',
        text: '**Explain** one challenge you would have to overcome when investigating future trends in freshwater use for farming.',
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
      'Your teacher has asked you to prepare a class presentation about the unit Superpowers, empires and supranational institutions and organizations that you have recently studied. Your teacher has given you the interactive concept map below as inspiration for your presentation.\n\n' +
      'The map (interactive — “Click on a node for more information”) is titled “FAIRNESS AND DEVELOPMENT”. A central node, “Fairness and development”, links to three category nodes: SUPERPOWERS (with examples the United States and the USSR), EMPIRES (with examples the British Empire and the Ottoman Empire) and SUPRANATIONAL INSTITUTIONS/ORGANIZATIONS (with examples the United Nations and the European Union). The map also surfaces key/related concepts: Power, Authority, Privilege, Inequality, Justice, Peace, Security, Freedom, Conflict management, Difference and Inclusion.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Inspiration concept map — FAIRNESS AND DEVELOPMENT (click a node for more information).',
      data: {
        title: 'FAIRNESS AND DEVELOPMENT',
        center: { label: 'Fairness and development' },
        nodes: [
          { id: 'super', label: 'Superpowers', color: '#dc2626', detail: 'The United States and the USSR are examples of superpowers.' },
          { id: 'us', label: 'United States', detail: 'A superpower that shaped the post-1945 world order.' },
          { id: 'ussr', label: 'USSR', detail: 'A superpower whose rivalry with the US defined the Cold War.' },
          { id: 'empire', label: 'Empires', color: '#d97706', detail: 'The British Empire and the Ottoman Empire are examples of empires.' },
          { id: 'brit', label: 'British Empire', detail: 'An empire that ruled territory across every inhabited continent.' },
          { id: 'otto', label: 'Ottoman Empire', detail: 'An empire that ruled large parts of southeast Europe, western Asia and north Africa for centuries.' },
          { id: 'supra', label: 'Supranational institutions / organizations', color: '#2563eb', detail: 'The United Nations and the European Union are examples of supranational institutions/organizations.' },
          { id: 'un', label: 'United Nations', detail: 'A global organization founded in 1945 to maintain peace and cooperation.' },
          { id: 'eu', label: 'European Union', detail: 'A union of European states with shared institutions, laws and markets.' },
          { id: 'concepts', label: 'Key / related concepts', color: '#7c3aed', detail: 'Power, Authority, Privilege, Inequality, Justice, Peace, Security, Freedom, Conflict management, Difference, Inclusion.' },
        ],
        edges: [
          { from: 'center', to: 'super' },
          { from: 'super', to: 'us' },
          { from: 'super', to: 'ussr' },
          { from: 'center', to: 'empire' },
          { from: 'empire', to: 'brit' },
          { from: 'empire', to: 'otto' },
          { from: 'center', to: 'supra' },
          { from: 'supra', to: 'un' },
          { from: 'supra', to: 'eu' },
          { from: 'center', to: 'concepts' },
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
          '• focus on **one** superpower **or** empire **or** supranational institution/organization (from the concept map or your own knowledge)\n' +
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
    topic: 'Explaining the positive effect of a city’s riverfront greenway / cycle-network project (project pitch source)',
    marks: 6,
    stem:
      'In the city of Rotterdam in the Netherlands, the city council has announced changes to the way people move around the city centre that will be made in the near future. This is in response to growing demand for cleaner, healthier transport. Source C below is a project website/pitch deck published in 2018 by the council to present the project to the public. You will need to explain how these changes will have a positive impact on the city.\n\n' +
      'Source C (project pitch) summary:\n' +
      'Rotterdam is redesigning its city-centre waterfront. A continuous riverfront greenway will be built, linking parks, neighbourhoods and the main railway station with a protected cycle network.\n' +
      'The greenway will give everyone a safe, step-free route on foot or by bicycle, and connect the suburbs to the centre via new bridges and crossings.\n' +
      'Secure cycle parking and bike-share docks will be available at every junction along the route.\n' +
      'Several busy car lanes will be removed and replaced with trees, planting and rain gardens.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source C — Rotterdam riverfront greenway project (website/pitch deck), city council, 2018.',
      data: {
        title: 'Source C — Rotterdam riverfront greenway',
        source: 'Project website / pitch deck published in 2018 by the city council of Rotterdam, the Netherlands, to present the project to the public.',
        slides: [
          {
            title: 'A new riverfront greenway',
            body: 'Rotterdam is redesigning its city-centre waterfront with a continuous greenway.',
            bullets: ['Links parks, neighbourhoods and the main railway station', 'Includes a protected cycle network'],
          },
          {
            title: 'Access for everyone',
            bullets: ['A safe, step-free route on foot or by bicycle', 'Connects the suburbs to the centre via new bridges and crossings'],
          },
          {
            title: 'Parking and sharing',
            bullets: ['Secure cycle parking at every junction', 'Bike-share docks along the route'],
          },
          {
            title: 'Greening the streets',
            bullets: ['Several busy car lanes removed', 'Replaced with trees, planting and rain gardens'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** how this change to Rotterdam’s city-centre transport will have a positive effect on the city.',
        marks: 6,
        ph: 'Explain positive effects with reasons (traffic, accessibility, environment)',
      },
    ],
  },
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Describing the value and limitations of Source C (council project pitch) for an MYP researcher',
    marks: 6,
    stem:
      'Source C is repeated to help you answer the questions that follow.\n\n' +
      'Source C (project pitch) summary:\n' +
      'Rotterdam is redesigning its city-centre waterfront. A continuous riverfront greenway will be built, linking parks, neighbourhoods and the main railway station with a protected cycle network.\n' +
      'The greenway will give everyone a safe, step-free route on foot or by bicycle, and connect the suburbs to the centre via new bridges and crossings.\n' +
      'Secure cycle parking and bike-share docks will be available at every junction along the route.\n' +
      'Several busy car lanes will be removed and replaced with trees, planting and rain gardens.\n\n' +
      'Note: Responses to both part (a) and part (b) may include content (accuracy/objectivity of information, number of perspectives included and depth of those perspectives, layout and communication), origin (bias, how recent the source is, country or author — experts/reliability of source or studies, citations), purpose (intended audience, platform, facts or opinions).',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source C (repeated) — Rotterdam riverfront greenway project pitch, city council, 2018.',
      data: {
        title: 'Source C — Rotterdam riverfront greenway',
        source: 'Project website / pitch deck published in 2018 by the city council of Rotterdam, the Netherlands, to present the project to the public.',
        slides: [
          {
            title: 'A new riverfront greenway',
            body: 'Rotterdam is redesigning its city-centre waterfront with a continuous greenway.',
            bullets: ['Links parks, neighbourhoods and the main railway station', 'Includes a protected cycle network'],
          },
          {
            title: 'Access for everyone',
            bullets: ['A safe, step-free route on foot or by bicycle', 'Connects the suburbs to the centre via new bridges and crossings'],
          },
          {
            title: 'Parking and sharing',
            bullets: ['Secure cycle parking at every junction', 'Bike-share docks along the route'],
          },
          {
            title: 'Greening the streets',
            bullets: ['Several busy car lanes removed', 'Replaced with trees, planting and rain gardens'],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** the value of **Source C** to an MYP student researching how innovations impact urban environments.',
        marks: 3,
        ph: 'Describe how the project pitch is useful (what it shows, content, origin, purpose)',
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
      '• Papermaking — China — around 100 CE\n' +
      '• Vaccination — England — 1796\n' +
      '• Refrigeration — various locations — late 19th century.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'Timeline — examples of technological developments and innovations through time.',
      data: {
        title: 'Technological developments and innovations through time',
        events: [
          {
            date: 'around 100 CE',
            label: 'Papermaking',
            detail: 'Papermaking — China, around 100 CE. A process for turning plant fibres into cheap, writable sheets, allowing records and ideas to spread widely.',
          },
          {
            date: '1796',
            label: 'Vaccination',
            detail: 'Vaccination — England, 1796. A method of using a mild infection to protect people from a deadly disease, the basis of modern immunisation.',
          },
          {
            date: 'Late 19th century',
            label: 'Refrigeration',
            detail: 'Refrigeration — various locations, late 19th century. Machines that keep food and medicine cold, changing how the world stores and transports perishable goods.',
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
          '• you must not discuss cycling, walking or public transport systems as addressed in **Source C** (questions 6 and 7)\n' +
          '• you must include different perspectives about the impact of your chosen technological development/innovation.',
        marks: 24,
        ph: 'Write a structured essay discussing one innovation’s impact on quality of life from different perspectives',
      },
    ],
  },
]
