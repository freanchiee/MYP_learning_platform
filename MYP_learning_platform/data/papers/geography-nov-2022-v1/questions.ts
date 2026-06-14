import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2022 · Set 1 ISOMORPHIC VARIANT (v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-nov-2022 (same crit / command terms / marks / task shape).
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (B, 8) · Q3 (B, 12) · Q4 (A, 4)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (4) · Q7 (4) · Q8 (4) · Q9 (24)
 *
 * NEW scenario (surface only — construct invariants preserved):
 *   • Task 1: the drying of the Aral Sea basin in Central Asia — land/water degradation,
 *     a restoration NGO's action plan, sustainable wetland (mangrove) management, biomes.
 *   • Task 2: a Citizenship Day speech celebrating migration in a coastal port city.
 *   • Task 3: the global ELECTRONIC WASTE (e-waste) trade — Agbogbloshie, Ghana —
 *     replacing the source's fast-fashion / second-hand-clothing trade.
 *
 * Per the I&S variant carve-out, each artefact uses a DIFFERENT component than the source:
 *   Q1 → ChoroplethWorld (highlight) — source used LocatedMap
 *   Q2 → TimelineScrubber           — source used InfoGraphicPanel
 *   Q5 → SlideDeck                  — source used SourceDocViewer
 *   Q6 → DataTableInteractive       — source used InteractiveChart
 *   Q7 → SourceDocViewer            — source used InfoGraphicPanel
 *   Q9 → (reuses Q6 + Q7 sources)
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
  id: 'geography-nov-2022-v1',
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
    topic: 'Land & water degradation — the Aral Sea basin',
    marks: 2,
    stem:
      'The Aral Sea, once the world’s fourth-largest lake, has shrunk to a fraction of its original size since the 1960s. As the water disappeared it exposed a salt-and-dust desert called the Aralkum, and the surrounding land in Central Asia has become severely degraded (see Source A).\n\n' +
      'Use Source A and your own knowledge to answer the questions that follow.',
    artefact: {
      component: 'ChoroplethWorld',
      caption:
        'Source A — The Aral Sea basin, Central Asia (original recreation). The orange countries share the basin and its degraded land; hover a country to read it, or click the key to spotlight the highlighted set.',
      data: {
        mode: 'highlight',
        title: 'Source A — The Aral Sea basin (Central Asia)',
        source: 'Aral Sea basin (recreated)',
        highlight: ['Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Tajikistan', 'Kyrgyzstan'],
        highlightLabel: 'Aral Sea basin countries',
        baseLabel: 'Other countries',
        caption:
          'Key facts: since the 1960s the Aral Sea has lost about 90% of its volume after the Amu Darya and Syr Darya rivers were diverted to irrigate cotton fields. The drying has exposed ~60,000 km² of salt flats (the Aralkum). Salt-and-dust storms now carry pesticide-laden dust across the basin, degrading farmland, while overgrazing and intensive irrigation continue to dry the soil.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** one human factor that has caused land degradation in the Aral Sea basin.',
        marks: 1,
        ph: 'One human factor, e.g. irrigation/water diversion for cotton, overgrazing, population growth, intensive agriculture. An unsustainable practice on its own scores 0.',
      },
      {
        label: 'b',
        text: '**Identify** one natural factor that has caused land degradation in the Aral Sea basin.',
        marks: 1,
        ph: 'One natural factor, e.g. high evaporation, drought, salt-and-dust storms, the arid desert climate.',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — the Aral Sea restoration (NGO action plan)',
    marks: 8,
    stem:
      'BlueRoots is a non-governmental organization (NGO) that has been working in Kazakhstan since 2009. They focus on restoring the Northern Aral Sea and have created a dated action plan in order to finalize their yearly report.\n\n' +
      'You will be asked to evaluate this action plan, which is shown below as the NGO’s scheduled project timeline (each entry is a step in finalizing this year’s report).',
    artefact: {
      component: 'TimelineScrubber',
      caption:
        'The NGO’s scheduled action plan for finalizing this year’s report — the marked stimulus. Drag the handle, click a marker, or use the arrow keys to move between the dated steps.',
      data: {
        title: 'BlueRoots — Yearly-report action plan (Northern Aral Sea)',
        source: 'BlueRoots (NGO), Kazakhstan · yearly report',
        events: [
          {
            date: 'Jan',
            label: 'Review funding & finalize budget',
            detail: 'Completed: reviewed donor funding and finalized next year’s budget for the restoration programme.',
          },
          {
            date: 'Mar',
            label: 'Collect yearly results',
            detail:
              'Completed: collected this year’s field results — 740 farmers trained; 5,400 hectares of land replanted with salt-tolerant grasses; 130,000 saxaul trees planted to bind the soil; 1 dam section reinforced.',
          },
          {
            date: 'May',
            label: 'Read partner reports',
            detail: 'Completed: read reports published by partnership organizations working elsewhere in the basin.',
          },
          {
            date: 'Jul',
            label: 'Visit two villages & interview',
            detail:
              'In progress: visit two villages and interview one person in each village about the impact of the restoration project.',
          },
          {
            date: 'Sep',
            label: 'Analyse development indicators',
            detail:
              'In progress: analyse the change in development indicators in Kazakhstan from 2020 to today — % of arable land and % of population in extreme poverty.',
          },
          {
            date: 'Nov',
            label: 'Set next year’s goal',
            detail: 'Upcoming: agree and set next year’s restoration goal — not yet started.',
          },
          {
            date: 'Dec',
            label: 'Write yearly report',
            detail: 'Upcoming: write and publish the yearly report — not yet started.',
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
        ph: 'A research question that is both clear AND focused (e.g. names a place and product/technology) and connected to the statement of inquiry. Repeating the SoI with a question term scores 0.',
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
        ph: 'One challenge, elaborated with a single impact (e.g. difficult to collect primary data from a large, remote area such as the Sundarbans mangroves).',
      },
      {
        label: 'd',
        text: '**Outline** one primary source, other than interview responses, that could be used to investigate your research question.',
        marks: 2,
        ph: 'One primary source (not interviews), elaborated, e.g. measure the difference in water salinity between a replanted and an unprotected stretch of mangrove.',
      },
      {
        label: 'e',
        text: '**Outline** one secondary source that could be used to investigate your research question.',
        marks: 2,
        ph: 'One secondary source, elaborated, e.g. journal articles on mangrove-restoration technology, to see how technology can combat unsustainable coastal practices.',
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
        ph: 'One impact of conserving your chosen biome considered in detail, with reasons (e.g. the aquatic/coastal biome — mangroves and seagrass — store “blue carbon” → protecting them keeps carbon locked in sediment → less CO₂ → less warming). If you choose a different biome than you discuss, you are marked on what you write.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — celebrating migration (Citizenship Day speech)',
    marks: 18,
    stem:
      'You have been selected to deliver a speech to celebrate migration at your port city’s Citizenship Day. The event is a celebration of the different cultural backgrounds of your community.\n\n' +
      'As part of your research you have found a community radio feature in which two residents share their perspectives on migration.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'The community radio feature, presented as a paged transcript — two residents give opposing perspectives on migration. Use it to inform (or to counter) your celebratory speech.',
      data: {
        title: 'Community radio feature — two perspectives on migration',
        source: 'Transcript of a community radio feature (two residents interviewed)',
        slides: [
          {
            title: 'Introduction',
            body:
              'A community radio feature recorded ahead of Citizenship Day, in which the presenter interviews two residents of the port city about their perspectives on migration.',
          },
          {
            title: 'Perspective 1 — Resident A',
            body:
              '“Migration causes a drain on our economy; we don’t have enough jobs for the people already here. How can we support migrants moving into our city? Migration makes things worse for our own people.”',
          },
          {
            title: 'Perspective 2 — Resident B',
            body:
              '“In the past, newcomers would assimilate by taking on aspects of our culture. Now, many don’t try to fit in and don’t speak our language.”',
            bullets: [
              'assimilate — to adopt the customs, attitudes and way of life of the community one moves into.',
            ],
          },
        ],
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
    topic: 'The rise of electronic waste (data interpretation)',
    marks: 4,
    stem:
      'Look at **Source B** below and answer the questions that follow.\n\n' +
      '**Source B** — “The Rise of Electronic Waste”. The table records two indices from 2010 to 2022: the mass of e-waste generated worldwide (an index rising from 100) and the share of that e-waste that is formally recycled (an index falling from 200). The values are indexed so the two trends can be compared directly.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Source B — “The Rise of Electronic Waste” (original recreation of a Global E-waste Monitor dataset). Hover a row to highlight it; click to pin the row you are reading.',
      data: {
        title: 'The Rise of Electronic Waste',
        source: 'Global E-waste Monitor (recreated)',
        caption:
          'Both columns are index values. E-waste generated rises from an index of 100 in 2010; the recycling rate falls from an index of 200 in 2010 (a higher index = a larger share formally recycled).',
        headers: ['Year', 'E-waste generated (index)', 'Recycling rate (index)'],
        rows: [
          ['2010', '100', '200'],
          ['2014', '128', '178'],
          ['2018', '156', '150'],
          ['2022', '190', '124'],
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of the data.',
        marks: 1,
        ph: 'The source/author of the data (e.g. the Global E-waste Monitor).',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between the mass of e-waste generated and the share of e-waste recycled.',
        marks: 3,
        ph: 'Describe the inverse relationship — as e-waste generated increases, the share recycled decreases — elaborated (we produce more electronic waste but recycle a smaller proportion of it). Reference to data is helpful but not essential.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — e-waste report',
    marks: 4,
    stem:
      'A government official from Accra in Ghana is using the report in **Source C** below to demonstrate the impacts of imported electronic waste on people and the environment.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Source C — a briefing report on the Agbogbloshie e-waste site (original recreation). Hover the underlined terms for definitions; toggle a lens (Origin / Purpose / Value / Limitation) to evaluate it as a source.',
      data: {
        kind: 'Briefing report (secondary source)',
        title: 'Imported electronic waste: where do our old devices go?',
        attribution: 'Briefing report shown to a government official, Accra, Ghana',
        paragraphs: [
          'Electronic waste — or e-waste — is the term used for discarded phones, computers, televisions and other electrical goods. Around 62 million tonnes of e-waste are generated worldwide each year, and the amount is rising faster than any other type of household waste.',
          'The Agbogbloshie district in Accra, Ghana, became one of the world’s largest destinations for second-hand and broken electronics. Containers of used devices arrive from developed countries; an estimated 15 million items reach West African ports every month, and a large share no longer work.',
          'Workers burn cables and casings to recover small amounts of copper and other metals. This releases toxic fumes containing lead and mercury, contaminating the soil and the nearby Korle Lagoon. Roughly 40% of imported devices are beyond repair and end up dumped or burned.',
          'Globally, only about 22% of e-waste is formally collected and recycled; the rest is landfilled, burned or traded informally. The recoverable metals in the world’s annual e-waste are estimated to be worth over $60 billion.',
        ],
        glossary: {
          'e-waste': 'Discarded electrical and electronic equipment, such as phones, computers and televisions.',
          'Korle Lagoon': 'A coastal lagoon in Accra, Ghana, heavily polluted by waste from the Agbogbloshie site.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** one value or one limitation of the report to the government official.',
        marks: 4,
        ph: 'One value OR one limitation considered in detail, with reasons (e.g. it provides statistics on imported devices ending up burned or dumped in Ghana, so the official can quantify the true impact). Build from stating (1) → outlining (2) → describing (3) → explaining (4).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Individual responsibility for electronic waste',
    marks: 4,
    stem:
      'Source B and Source C above are repeated here for information.\n\n' +
      'Consider who is responsible for reducing the impact of electronic waste on people and the environment.',
    tasks: [
      {
        label: '',
        text:
          '**Justify** how the responsibility to reduce the impact of electronic waste lies with the individual.',
        marks: 4,
        ph: 'One argument considered in detail, with reasons (e.g. every person can choose to repair or keep devices for longer → reduced demand for new electronics → fewer devices discarded → less e-waste exported and burned). Build from stating (1) → outlining (2) → describing (3) → justifying with reasons (4).',
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
