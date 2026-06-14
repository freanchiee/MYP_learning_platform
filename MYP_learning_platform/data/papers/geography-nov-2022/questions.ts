import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2022 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (N22). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (B, 8) · Q3 (B, 12) · Q4 (A, 4)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (4) · Q7 (4) · Q8 (4) · Q9 (24)
 *
 * Theme: sustainability of land, trade and migration — the Sahel "Great Green Wall"
 * and land degradation, sustainable biome management, migration, and the global
 * fast-fashion / second-hand-clothing trade. Text/transcript sources are transcribed
 * as original extracts; visual sources become interactive artefacts wired via the
 * `artefact` field:
 *   Q1 → LocatedMap        (Source A — Africa's Great Green Wall located map, recreated)
 *   Q2 → InfoGraphicPanel  (the NGO "Chīmu" project-management / Kanban action plan)
 *   Q5 → SourceDocViewer   (the local news report — two perspectives on migration)
 *   Q6 → InteractiveChart  (Source B — "The Rise of Fast Fashion" line graph, 2000–2015)
 *   Q7 → InfoGraphicPanel  (Source C — fast-fashion / second-hand-clothing infographic)
 *   Q9 → (reuses Source B + Source C)
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
  id: 'geography-nov-2022',
  subject: 'Geography',
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
    crit: 'A',
    type: 'extended',
    topic: 'Land degradation — the Sahel',
    marks: 2,
    stem:
      'Land degradation is a serious problem in the Sahel region of Africa. To combat it, the African Union is building the Great Green Wall — a mosaic of trees, grasslands and plants stretching 8000 km across the width of the continent (see Source A).\n\n' +
      'Use Source A and your own knowledge to answer the questions that follow.',
    artefact: {
      component: 'LocatedMap',
      caption:
        'Source A — Africa’s Great Green Wall Project (original recreation). The green band marks the planned wall of vegetation; the salmon band marks the Sahel region it crosses. Hover a marker to read it.',
      data: {
        title: 'Source A — Africa’s Great Green Wall Project',
        source: 'Great Green Wall initiative (recreated)',
        region: 'Sahel region, Africa',
        regionCountries: [
          'Senegal',
          'Mauritania',
          'Mali',
          'Burkina Faso',
          'Niger',
          'Nigeria',
          'Chad',
          'Sudan',
          'Eritrea',
          'Ethiopia',
          'Djibouti',
        ],
        scaleKm: 2000,
        north: true,
        locator: [15, 15],
        legend: [
          { label: 'Great Green Wall (planned vegetation)', color: '#2f9e44' },
          { label: 'Sahel region', color: '#f4a58a' },
        ],
        markers: [
          { lon: -14.5, lat: 14.7, label: 'Senegal', detail: 'Western end of the wall (Dakar/Atlantic coast).' },
          { lon: -3.0, lat: 17.5, label: 'Mali', detail: 'Restored area to 2019 ≈ a large share of the total.' },
          { lon: 9.0, lat: 8.0, label: 'Nigeria', detail: 'Densely populated Sahel margin under pressure from over-farming.' },
          { lon: 30.0, lat: 13.0, label: 'Sudan', detail: 'Eastern stretch crossing into the Horn of Africa.' },
          { lon: 39.5, lat: 9.0, label: 'Ethiopia', detail: 'Largest single restored area to 2019 (’000 hectares).' },
          { lon: 42.6, lat: 11.6, label: 'Djibouti', detail: 'Eastern end of the wall · restored area to 2019 ≈ 0.13 (’000 ha).' },
        ],
        caption:
          'Key facts: the wall is expected to be 8000 km long and 15 km wide — three times the size of the Great Barrier Reef. 65% of Africa’s land has been degraded by climate change, changing weather patterns, population growth, over-grazing and other unsustainable practices. By 2022, nearly 18% of the project is estimated to have been completed.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** one human factor that has caused land degradation in the Sahel region.',
        marks: 1,
        ph: 'One human factor, e.g. overgrazing, population growth, agriculture, over-farming. An unsustainable practice on its own scores 0.',
      },
      {
        label: 'b',
        text: '**Identify** one natural factor that has caused land degradation in the Sahel region.',
        marks: 1,
        ph: 'One natural factor, e.g. extreme weather, drought, changing weather patterns.',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — the Great Green Wall (NGO action plan)',
    marks: 8,
    stem:
      'Green Beyond is a non-governmental organization (NGO) that has been working in Mali since 2007. They focus on the Great Green Wall Project and have created an action plan in order to finalize their yearly report.\n\n' +
      'You will be asked to evaluate this action plan, which is shown below as the NGO’s “Chīmu” project-management board (Upcoming · In progress · Done).',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'The NGO’s “Chīmu” project-management board — the marked stimulus. Hover a column to spotlight it.',
      data: {
        title: 'Chīmu — Project Management board',
        source: 'Green Beyond (NGO), Mali · yearly report',
        intro:
          'Yearly Report · Team member view. The NGO’s action plan for finalizing this year’s report, organised across three columns.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Upcoming',
            icon: '🗂',
            items: [
              'Set next year’s goal',
              'Write yearly report',
            ],
            note: 'Tasks not yet started.',
          },
          {
            heading: 'In progress',
            icon: '⏳',
            items: [
              'Visit two villages and interview one person in each village about the project',
              'Analyse change in development indicators in Mali from 2020 to today: % of arable land; % of population in extreme poverty',
            ],
            note: 'Tasks currently being worked on.',
          },
          {
            heading: 'Done',
            icon: '✅',
            items: [
              'Review funding and finalize next year’s budget',
              'Collect yearly results (Mali): 891 people trained; 6 300 hectares area reforested; 6 000 hectares land area restored; 165 203 trees planted in one year',
              'Read reports by partnership organizations',
            ],
            note: 'Completed tasks.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the NGO’s action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — sustainable management of a biome',
    marks: 12,
    stem:
      'You will now plan an investigation into sustainable management strategies for a biome.\n\n' +
      'Use the following statement of inquiry to formulate a clear and focused research question for an investigation into a biome impacted by humans.\n\n' +
      '**Statement of inquiry:** Technological innovation can allow natural environments to become more sustainable.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question for an investigation into a biome impacted by humans.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a place and product) and connected to the statement of inquiry. Repeating the SoI with a question term scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** why your research question is worthy of investigation.',
        marks: 4,
        ph: 'Give at least one factor in detail, with reasoning why the RQ should be investigated. Build from a simple comment to a fully justified argument.',
      },
      {
        label: 'c',
        text: '**Outline** one challenge you might face in your investigation.',
        marks: 2,
        ph: 'One challenge, elaborated with a single impact (e.g. difficult to collect primary data from a large area such as the rainforest in Sabah).',
      },
      {
        label: 'd',
        text: '**Outline** one primary source, other than interview responses, that could be used to investigate your research question.',
        marks: 2,
        ph: 'One primary source (not interviews), elaborated, e.g. measure the difference in soil quality between a selectively-logged and a cleared area.',
      },
      {
        label: 'e',
        text: '**Outline** one secondary source that could be used to investigate your research question.',
        marks: 2,
        ph: 'One secondary source, elaborated, e.g. journal articles on sustainable logging methods, to see how technology can combat unsustainable practices.',
      },
    ],
  },
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Biomes & climate change',
    marks: 4,
    stem:
      'Protecting natural biomes can play a part in reducing the causes of global climate change.\n\n' +
      'Select **one** biome from the list below: Aquatic biome · Desert biome · Forest biome · Grassland biome · Arctic/tundra biome.',
    tasks: [
      {
        label: '',
        text:
          '**Explain** how protecting one of the following biomes could reduce one cause of global climate change.',
        marks: 4,
        ph: 'One impact of conserving your chosen biome considered in detail, with reasons (e.g. the forest biome is a carbon sink → reducing deforestation maintains carbon stores → less CO₂ → less warming). If you choose a different biome than you discuss, you are marked on what you write.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — celebrating migration (Diversity Week speech)',
    marks: 18,
    stem:
      'You have been selected to deliver a speech to celebrate migration at your town’s Diversity Week. The event is a celebration of the different cultural backgrounds of your community.\n\n' +
      'As part of your research you have found a local news report including interviews with two people about their perspectives on migration.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'The local news report — two interviewees give opposing perspectives on migration. Use it to inform (or to counter) your celebratory speech.',
      data: {
        kind: 'Local news report (interviews)',
        title: 'Two perspectives on migration',
        attribution: 'From a local news report including interviews with two residents',
        paragraphs: [
          'Perspective 1: “Migration causes a drain on our economy; we don’t have enough jobs for the people here. How can we support migrants who are coming into our town? Migration makes it worse for our people.”',
          'Perspective 2: “In the past, immigrants would assimilate by taking on aspects of our culture. Now, they don’t try to fit in and many immigrants don’t speak our language.”',
        ],
        glossary: {
          assimilate: 'To adopt the customs, attitudes and way of life of the community one moves into.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In your speech celebrating diversity, **explain** two positive effects of migration for the communities they move to.\n\n' +
          'Your speech must include:\n' +
          '• an opening statement\n' +
          '• a concluding statement\n' +
          '• examples from your MYP studies.',
        marks: 18,
        ph: 'A speech that explains TWO positive effects of migration with examples, plus an opening and a concluding statement. Marked: Knowledge (Crit A /6, explaining only one benefit caps at 4), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'The rise of fast fashion (graph interpretation)',
    marks: 4,
    stem:
      'Look at **Source B** below and answer the questions that follow.\n\n' +
      '**Source B** — “The Rise of Fast Fashion”. The graph plots three indices from 2000 to 2015: World GDP (trillions of dollars) and Clothing sales (billion units) both rise from an index of 100, while Clothing use (the number of times an item is worn) falls from an index of 200.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source B — “The Rise of Fast Fashion” (original recreation of the Ellen MacArthur Foundation graph). Toggle a series in the legend; hover a point to read its value.',
      data: {
        kind: 'line',
        title: 'The Rise of Fast Fashion',
        source: 'Ellen MacArthur Foundation (recreated)',
        x: { label: 'Year', categories: ['2000', '2005', '2010', '2015'] },
        y: { label: 'Billion units of clothes / Trillions of dollars (index)', min: 100, max: 200, ticks: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], unit: '' },
        series: [
          { name: 'Clothing use', color: '#2f9e44', points: [200, 180, 170, 162] },
          { name: 'Clothing sales', color: '#3b3b9e', points: [100, 130, 160, 197] },
          { name: 'World GDP', color: '#f0962a', points: [100, 130, 140, 157] },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of the graph.',
        marks: 1,
        ph: 'The source/author of the graph (e.g. Ellen MacArthur Foundation; www.ellenmacarthurfoundation.org).',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between clothing sales and clothing use.',
        marks: 3,
        ph: 'Describe the inverse relationship — as clothing sales increase, clothing use decreases — elaborated (we have more clothes but each item is worn fewer times). Reference to data is helpful but not essential.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — fast-fashion infographic',
    marks: 4,
    stem:
      'A government official from Accra in Ghana is using the infographic in **Source C** below to demonstrate the impacts of second-hand clothing on people and the environment.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Source C — “The impacts of fast fashion: where do our unwanted clothes go?” (original recreation). Hover a panel to spotlight it.',
      data: {
        title: 'The impacts of fast fashion — where do our unwanted clothes go?',
        source: 'Infographic shown to a government official, Accra, Ghana',
        layout: 'grid',
        blocks: [
          {
            heading: '“Fast Fashion”',
            icon: '👕',
            items: [
              'The term used for cheap, poor-quality clothes that are manufactured and purchased in large quantities.',
              'These clothes are worn a few times then discarded.',
            ],
          },
          {
            heading: 'Kantamanto market',
            icon: '🌍',
            items: [
              'The Kantamanto market in Accra, Ghana, is the world’s largest second-hand clothing market.',
              'It receives 15 million items of used clothing from developed countries every week.',
            ],
          },
          {
            heading: '40% worthless',
            icon: '🗑',
            items: [
              '40% of these clothes are such poor quality they are worthless.',
              'They end up as landfill on the banks of the Korle Lagoon in Accra.',
            ],
          },
          {
            heading: '5000 retailers',
            icon: '🧺',
            items: ['5000 second-hand clothing retailers work at the Kantamanto market every day.'],
          },
          {
            heading: '4 million tonnes shipped',
            icon: '🚢',
            items: [
              'Every year, approximately 4 million tonnes of used textiles are shipped across the planet.',
              'This industry is estimated to be worth $4.6 billion.',
            ],
          },
          {
            heading: '85% to landfill',
            icon: '♻',
            items: ['Globally, an estimated 85% of all textiles end up in landfill each year.'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** one value or one limitation of the infographic to the government official.',
        marks: 4,
        ph: 'One value OR one limitation considered in detail, with reasons (e.g. it provides statistics on second-hand textiles ending up as landfill in Ghana, so the official can quantify the true impact). Build from stating (1) → outlining (2) → describing (3) → explaining (4).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Individual responsibility for fast fashion',
    marks: 4,
    stem:
      'Source B and Source C above are repeated here for information.\n\n' +
      'Consider who is responsible for reducing the impact of fast fashion on people and the environment.',
    tasks: [
      {
        label: '',
        text:
          '**Justify** how the responsibility to reduce the impact of fast fashion lies with the individual.',
        marks: 4,
        ph: 'One argument considered in detail, with reasons (e.g. every person can choose to buy fewer, better-quality clothes → reduced demand drives down production → less goes to landfill). Build from stating (1) → outlining (2) → describing (3) → justifying with reasons (4).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — the sustainability of trade',
    marks: 24,
    stem:
      'Source B and Source C above are repeated here for information.\n\n' +
      'In a well-structured essay, respond to the following question.',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, respond to the following question:\n\n' +
          '**To what extent** is trade environmentally and socially sustainable?\n\n' +
          'In your essay, you must:\n' +
          '• consider different perspectives\n' +
          '• use examples from your MYP studies to support your arguments.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing whether trade is environmentally AND socially sustainable, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
