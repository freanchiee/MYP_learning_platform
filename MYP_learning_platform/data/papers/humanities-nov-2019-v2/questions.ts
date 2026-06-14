import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2019 · VARIANT 2 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Total 80 marks, 3 tasks (identical construct to humanities-nov-2019):
 *   Task 1 Investigating (Crit A+B+D): Q1–Q4
 *   Task 2 Communicating (Crit A+C): Q5
 *   Task 3 Thinking critically (Crit A+B+C+D): Q6–Q8
 *
 * NEW SCENARIO (Investigating): global trends in FOREST COVER and land cleared for farming.
 * NEW SCENARIO (Communicating): impacts of superpowers/empires/supranational institutions
 *   on fairness and development (same construct, fresh stimulus).
 * NEW SCENARIO (Thinking critically): a city's COMMUNITY SOLAR MICROGRID project.
 * Scenario-fitting artefacts (chosen to differ from source and from v1, varied within paper):
 *   Q2 → InteractiveChart   (Source B — line graph of global forest cover)
 *   Q3 → NetworkGraph       (Source — the deforestation investigation as a relationship map)
 *   Q5 → SlideDeck          (inspiration deck on powers/empires/institutions + key concepts)
 *   Q6/Q7 → InfoGraphicPanel (Source C — solar microgrid project infographic)
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
  id: 'humanities-nov-2019-v2',
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
    topic: 'Forest cover and farmland — identifying a reason from a text source',
    marks: 1,
    stem:
      'Source A\n\n' +
      'A group of environmental scientists investigated global historical trends in the amount of forest cleared to make way for farming. They reached the following conclusions:\n' +
      '1. Globally, growing a given amount of food now clears far less forest per tonne than it did in 1970. This is due to higher crop yields, better seeds, fertilizers and farming on land that is already cleared.\n' +
      '2. Despite the fact that each tonne of food now clears less forest than in 1970, the overall area of forest cleared for farming has actually increased due to:\n' +
      '   • population growth\n' +
      '   • rising incomes (as people become wealthier, they eat more meat, and pasture and feed crops need large areas of cleared land).',
    tasks: [
      {
        label: '',
        text: '**State** one reason given in **Source A** for why the overall area of forest cleared for farming has increased.',
        marks: 1,
        ph: 'Name one reason from Source A (e.g. population growth)',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Reading a prediction off a forest-cover line graph + explaining biome impact',
    marks: 5,
    stem:
      'The group of environmental scientists from Source A summarized their findings and predictions in the following graph (Source B): an interactive line graph titled “Falling and recovering forests: global forest cover 1970–2020 and prediction for 2021–2060”. The x-axis is Year (1970 to 2060 in 10-year intervals); the y-axis is “Global forest cover in millions of hectares / MHa” (3800 to 4400). A solid line shows recorded data 1970–2020 and a dotted line shows the prediction 2021–2060. Hover values: 1970 = 4250 MHa, 1980 = 4200 MHa, 1990 = 4150 MHa, 2000 = 4100 MHa, 2010 = 4060 MHa, 2020 = 4030 MHa (lowest recorded), then recovering: 2030 = 4060 MHa, 2040 = 4090 MHa, 2050 = 4120 MHa, 2060 = 4150 MHa.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source B — Falling and recovering forests: global forest cover 1970–2020 and prediction for 2021–2060.',
      data: {
        kind: 'line',
        title: 'Falling and recovering forests: global forest cover 1970–2020 and prediction for 2021–2060',
        x: {
          label: 'Year',
          categories: ['1970', '1980', '1990', '2000', '2010', '2020', '2030', '2040', '2050', '2060'],
        },
        y: {
          label: 'Global forest cover in millions of hectares',
          unit: 'MHa',
          min: 3800,
          max: 4400,
          ticks: [3800, 4000, 4200, 4400],
        },
        series: [
          {
            name: 'Data 1970–2020',
            color: '#16a34a',
            points: [4250, 4200, 4150, 4100, 4060, 4030, NaN, NaN, NaN, NaN],
          },
          {
            name: 'Prediction 2021–2060',
            color: '#64748b',
            points: [NaN, NaN, NaN, NaN, NaN, 4030, 4060, 4090, 4120, 4150],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: 'Using **Source B**, **state** how many millions of hectares of forest cover are predicted in the year 2050.',
        marks: 1,
        ph: 'Read the dotted prediction line at 2050 (in MHa)',
      },
      {
        label: 'b',
        text:
          'Assuming the prediction of forest cover from 2021–2060 is accurate, **explain** the possible impact on **one** of the following biomes:\n' +
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
    topic: 'Evaluating the process and results of the deforestation investigation (relationship map)',
    marks: 8,
    stem:
      'The environmental scientists investigating forest clearance produced a relationship map to demonstrate their investigation. You will be asked to evaluate the process and results of their investigation.\n\n' +
      'The map links each part of the investigation: the INFORMATION / DATA collected, the SOURCES used, and the CONCLUSIONS drawn.\n' +
      'INFORMATION / DATA collected: total hectares of forest cleared each year; past trends in global population growth; future predictions of global population growth; tonnes of beef, soy and palm oil produced per year; global meat consumption per capita.\n' +
      'SOURCES used: environment ministries in Brazil, Indonesia and the Democratic Republic of the Congo; a global association of timber producers; a satellite forest-monitoring institute; the UN Food and Agriculture Organization (FAO); the UN Department of Economic and Social Affairs; a reference book, Global Forest Resources, published in 1998.\n' +
      'CONCLUSIONS: 1. Globally, growing a given amount of food now clears far less forest per tonne than in 1970, due to higher yields, better seeds, fertilizers and farming on already-cleared land. 2. Despite clearing less forest per tonne than in 1970, the overall area of forest cleared for farming has increased due to population growth and rising incomes (wealthier people eat more meat, and pasture and feed crops need large areas of cleared land).\n\n' +
      'Note: Students do not need to discuss both strengths and limitations of every part of the investigation to access full marks. Marks are awarded based on the quality of the response, not the number of strengths or limitations referred to.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source — INVESTIGATING FOREST CLEARANCE (the scientists’ investigation as a relationship map).',
      data: {
        title: 'INVESTIGATING FOREST CLEARANCE',
        center: { label: 'Forest-clearance investigation' },
        nodes: [
          { id: 'data', label: 'Information / data', color: '#16a34a', detail: 'The categories of data the scientists collected.' },
          { id: 'd1', label: 'Hectares of forest cleared each year', detail: 'Total area of forest cleared annually.' },
          { id: 'd2', label: 'Past and future population growth', detail: 'Past trends and future predictions of global population growth.' },
          { id: 'd3', label: 'Beef, soy and palm oil produced', detail: 'Tonnes of beef, soy and palm oil produced per year.' },
          { id: 'd4', label: 'Global meat consumption per capita', detail: 'How much meat people eat on average worldwide.' },
          { id: 'src', label: 'Sources', color: '#2563eb', detail: 'Where the data came from.' },
          { id: 's1', label: 'Environment ministries (Brazil, Indonesia, DR Congo)', detail: 'Government ministries in three heavily forested countries.' },
          { id: 's2', label: 'Global timber producers’ association', detail: 'An industry body representing timber producers.' },
          { id: 's3', label: 'Satellite forest-monitoring institute', detail: 'An institute that measures forest cover from satellites.' },
          { id: 's4', label: 'UN FAO & UN DESA', detail: 'UN Food and Agriculture Organization and UN Department of Economic and Social Affairs.' },
          { id: 's5', label: 'Reference book: Global Forest Resources (1998)', detail: 'A reference book published in 1998.' },
          { id: 'conc', label: 'Conclusions', color: '#d97706', detail: 'The conclusions the scientists drew.' },
          { id: 'c1', label: 'Less forest cleared per tonne than in 1970', detail: 'Higher yields, better seeds, fertilizers and farming already-cleared land.' },
          { id: 'c2', label: 'But total forest cleared has increased', detail: 'Driven by population growth and rising incomes / more meat.' },
        ],
        edges: [
          { from: 'center', to: 'data' },
          { from: 'data', to: 'd1' },
          { from: 'data', to: 'd2' },
          { from: 'data', to: 'd3' },
          { from: 'data', to: 'd4' },
          { from: 'center', to: 'src' },
          { from: 'src', to: 's1' },
          { from: 'src', to: 's2' },
          { from: 'src', to: 's3' },
          { from: 'src', to: 's4' },
          { from: 'src', to: 's5' },
          { from: 'center', to: 'conc' },
          { from: 'conc', to: 'c1' },
          { from: 'conc', to: 'c2' },
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
      'Based on their conclusions, the environmental scientists noted that it would be good to carry out further investigations into future trends that will impact forest clearance for farming. Their suggested future trends are:\n' +
      '• increased use of higher-yield seeds, fertilizers and technology in farming\n' +
      '• changing global population growth.\n\n' +
      'You will continue the investigation carried out by the scientists. You will need to develop an action plan by answering the following questions.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to **one** of the areas for further investigation and its impact on forest clearance for farming, **formulate** a clear and focused research question.',
        marks: 2,
        ph: 'Write one clear, focused RQ tied to a future trend (specify place + product)',
      },
      {
        label: 'b',
        text:
          '**Justify** the relevance of your research question to the issue of future trends in forest clearance for farming.\n\n' +
          'The future trends suggested by the scientists are:\n' +
          '• increased use of higher-yield seeds, fertilizers and technology in farming\n' +
          '• changing global population growth.',
        marks: 4,
        ph: 'Give reasons why your RQ matters to future forest-clearance trends',
      },
      {
        label: 'c',
        text: '**Explain** one challenge you would have to overcome when investigating future trends in forest clearance for farming.',
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
      'Your teacher has asked you to prepare a class presentation about the unit Superpowers, empires and supranational institutions and organizations that you have recently studied. Your teacher has given you the slide deck below as inspiration for your presentation.\n\n' +
      'The inspiration deck (interactive — “Click through the slides for more information”) is titled “FAIRNESS AND DEVELOPMENT”. Slide 1 introduces SUPERPOWERS with the examples the United States and China. Slide 2 introduces EMPIRES with the examples the Roman Empire and the Mongol Empire. Slide 3 introduces SUPRANATIONAL INSTITUTIONS/ORGANIZATIONS with the examples the World Health Organization (WHO) and the World Trade Organization (WTO). Slide 4 lists key/related concepts: Power, Authority, Privilege, Inequality, Justice, Peace, Security, Freedom, Conflict management, Difference and Inclusion.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Inspiration deck — FAIRNESS AND DEVELOPMENT (click through the slides for more information).',
      data: {
        title: 'FAIRNESS AND DEVELOPMENT',
        slides: [
          {
            title: 'Superpowers',
            body: 'Nations with global political, military and economic influence.',
            bullets: ['The United States', 'China'],
          },
          {
            title: 'Empires',
            body: 'States that ruled over many peoples and large territories.',
            bullets: ['The Roman Empire', 'The Mongol Empire'],
          },
          {
            title: 'Supranational institutions / organizations',
            body: 'Bodies in which many states cooperate beyond their borders.',
            bullets: ['The World Health Organization (WHO)', 'The World Trade Organization (WTO)'],
          },
          {
            title: 'Key / related concepts',
            bullets: ['Power', 'Authority', 'Privilege', 'Inequality', 'Justice', 'Peace', 'Security', 'Freedom', 'Conflict management', 'Difference', 'Inclusion'],
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
          '• focus on **one** superpower **or** empire **or** supranational institution/organization (from the slide deck or your own knowledge)\n' +
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
    topic: 'Explaining the positive effect of a city’s community solar microgrid project (project infographic source)',
    marks: 6,
    stem:
      'In the city of Cape Town in South Africa, the city government has announced changes to how electricity is supplied to homes that will be made in the near future. This is in response to growing demand for reliable, affordable and cleaner power. Source C below is an infographic published in 2018 by the city government to present the project to the public. You will need to explain how these changes will have a positive impact on the city.\n\n' +
      'Source C (project infographic) summary:\n' +
      'Cape Town is changing how it supplies electricity by building a community solar microgrid. Solar panels will be installed on the roofs of homes, schools and community halls across several neighbourhoods.\n' +
      'The panels will feed into a shared local grid with battery storage, so neighbourhoods can keep the lights on even when the main grid fails.\n' +
      'Households will be able to sell surplus electricity back to the grid, lowering their bills.\n' +
      'The system will be powered mainly by sunlight rather than coal.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source C — Cape Town community solar microgrid project infographic, city government, 2018.',
      data: {
        title: 'Source C — Cape Town community solar microgrid',
        source: 'Infographic published in 2018 by the city government of Cape Town, South Africa, to present the project to the public.',
        intro: 'How the new community solar microgrid will work.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Rooftop solar',
            items: ['Solar panels installed on homes, schools and community halls', 'Rolled out across several neighbourhoods'],
          },
          {
            heading: 'Shared local grid',
            items: ['Panels feed into a shared local grid with battery storage', 'Neighbourhoods keep power even when the main grid fails'],
          },
          {
            heading: 'Lower bills',
            items: ['Households can sell surplus electricity back to the grid', 'This lowers their electricity bills'],
          },
          {
            heading: 'Cleaner power',
            items: ['Powered mainly by sunlight rather than coal'],
            note: 'Less coal burned means lower air pollution and emissions.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** how this change to Cape Town’s electricity supply will have a positive effect on the city.',
        marks: 6,
        ph: 'Explain positive effects with reasons (reliability, affordability, environment)',
      },
    ],
  },
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Describing the value and limitations of Source C (government project infographic) for an MYP researcher',
    marks: 6,
    stem:
      'Source C is repeated to help you answer the questions that follow.\n\n' +
      'Source C (project infographic) summary:\n' +
      'Cape Town is changing how it supplies electricity by building a community solar microgrid. Solar panels will be installed on the roofs of homes, schools and community halls across several neighbourhoods.\n' +
      'The panels will feed into a shared local grid with battery storage, so neighbourhoods can keep the lights on even when the main grid fails.\n' +
      'Households will be able to sell surplus electricity back to the grid, lowering their bills.\n' +
      'The system will be powered mainly by sunlight rather than coal.\n\n' +
      'Note: Responses to both part (a) and part (b) may include content (accuracy/objectivity of information, number of perspectives included and depth of those perspectives, layout and communication), origin (bias, how recent the source is, country or author — experts/reliability of source or studies, citations), purpose (intended audience, platform, facts or opinions).',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source C (repeated) — Cape Town community solar microgrid project infographic, city government, 2018.',
      data: {
        title: 'Source C — Cape Town community solar microgrid',
        source: 'Infographic published in 2018 by the city government of Cape Town, South Africa, to present the project to the public.',
        intro: 'How the new community solar microgrid will work.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Rooftop solar',
            items: ['Solar panels installed on homes, schools and community halls', 'Rolled out across several neighbourhoods'],
          },
          {
            heading: 'Shared local grid',
            items: ['Panels feed into a shared local grid with battery storage', 'Neighbourhoods keep power even when the main grid fails'],
          },
          {
            heading: 'Lower bills',
            items: ['Households can sell surplus electricity back to the grid', 'This lowers their electricity bills'],
          },
          {
            heading: 'Cleaner power',
            items: ['Powered mainly by sunlight rather than coal'],
            note: 'Less coal burned means lower air pollution and emissions.',
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** the value of **Source C** to an MYP student researching how innovations impact urban environments.',
        marks: 3,
        ph: 'Describe how the infographic is useful (what it shows, content, origin, purpose)',
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
      '• The waterwheel — Ancient Greece / Rome — around 200 BCE\n' +
      '• The telephone — United States — 1876\n' +
      '• The electric light bulb — various locations — late 19th century.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'Timeline — examples of technological developments and innovations through time.',
      data: {
        title: 'Technological developments and innovations through time',
        events: [
          {
            date: 'around 200 BCE',
            label: 'The waterwheel',
            detail: 'The waterwheel — Ancient Greece / Rome, around 200 BCE. A wheel turned by flowing water, used to grind grain and later to power machinery.',
          },
          {
            date: '1876',
            label: 'The telephone',
            detail: 'The telephone — United States, 1876. A device that carries the human voice over wires across long distances, transforming communication.',
          },
          {
            date: 'Late 19th century',
            label: 'The electric light bulb',
            detail: 'The electric light bulb — various locations, late 19th century. A safe, long-lasting source of electric light that extended the working and social day.',
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
          '• you must not discuss electricity supply or power generation as addressed in **Source C** (questions 6 and 7)\n' +
          '• you must include different perspectives about the impact of your chosen technological development/innovation.',
        marks: 24,
        ph: 'Write a structured essay discussing one innovation’s impact on quality of life from different perspectives',
      },
    ],
  },
]
