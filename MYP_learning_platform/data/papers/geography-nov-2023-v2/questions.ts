import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2023 · Set 2 ISOMORPHIC VARIANT (geography-nov-2023-v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-nov-2023: SAME construct (criteria, command terms, marks,
 * 3-task blueprint, task labels) — a genuinely NEW real-world scenario throughout, and
 * a DIFFERENT scenario-appropriate artefact component for every artefact-bearing task
 * (different from BOTH the source AND Set 1 / v1).
 *
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (D, 4) · Q7 (A, 8) · Q8 (D, 24)
 *
 * NEW theme: sustainable tourism on the Komodo Islands (Indonesia) → sustainable
 * shea-butter trade in West Africa & the SDGs → threatened grassland/savanna biomes →
 * a mangrove-loss source from the Sundarbans.
 *
 * Artefact components changed vs BOTH source AND v1 (I&S carve-out — component is NOT an
 * invariant; it must change with the new scenario):
 *   Q1  LocatedMap (src) / ChoroplethWorld (v1)  → DragAnnotate (annotate, coast scene — read
 *                                                   features & a bearing off an original map scene)
 *   Q3  InfoGraphicPanel (src) / TimelineScrubber (v1) → SlideDeck (the action plan as paged stages)
 *   Q5  SourceDocViewer (src) / InteractiveChart (v1) → PieChart (Source A — doughnut of trade stats)
 *   Q6  SlideDeck (src) / NetworkGraph (v1)       → InfoGraphicPanel (Source B — grid of threat panels)
 *   Q7  InfoGraphicPanel (src) / SourceDocViewer (v1) → InteractiveChart (Source C — a chart from a report)
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
  id: 'geography-nov-2023-v2',
  subject: 'Geography',
  session: 'November',
  year: 2023,
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
    topic: 'Map skills — Komodo Island visitor map',
    marks: 2,
    stem:
      'Komodo is a group of islands in eastern Indonesia, protected as Komodo National Park. The islands are home to the Komodo dragon, the world’s largest lizard. Many tourism activities are run by local Indonesian guides from the fishing village of Kampung Komodo, whose families have lived alongside the dragons for generations and who lead small-group walks that share their knowledge of the land.\n\n' +
      'Look at the visitor map of the main ranger station area on Komodo Island below. The map shows the coastline on the west side, the forested hills inland to the east, and the key sites tourists visit. Each numbered marker sits at a labelled point on the map. Use the map to answer the questions that follow.',
    artefact: {
      component: 'DragAnnotate',
      caption:
        'Visitor map of the Komodo Island ranger station area (original recreation). The sea lies to the west (left) and the forested hills inland to the east (right). Hover or read each numbered marker: ① the boat jetty on the coast, ② the ranger station, ③ the dragon viewing platform on the inland hillside, and ④ the proposed new car park (‘B’). Pick up a label and drop it on a marker to test yourself.',
      data: {
        title: 'Komodo Island — ranger station visitor map',
        prompt:
          'The sea is on the WEST (left) side; the forested hills are INLAND to the EAST (right). Read the position of each numbered site, then match the labels to the markers.',
        mode: 'annotate',
        scene: 'coast',
        sceneHint: 'Coastline on the left (west), forested hills inland on the right (east).',
        chips: [
          { id: 'jetty', text: 'Boat jetty' },
          { id: 'station', text: 'Ranger station' },
          { id: 'platform', text: 'Dragon viewing platform' },
          { id: 'carpark', text: '‘B’ — proposed car park' },
        ],
        targets: [
          { id: 't1', x: 22, y: 30, label: '①', correctLabelId: 'jetty' },
          { id: 't2', x: 44, y: 52, label: '②', correctLabelId: 'station' },
          { id: 't3', x: 78, y: 40, label: '③', correctLabelId: 'platform' },
          { id: 't4', x: 40, y: 76, label: '④', correctLabelId: 'carpark' },
        ],
        showScore: true,
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the coastal feature located at marker ①, on the west coast of the island. This is where tourist boats arrive.',
        marks: 1,
        ph: 'The named coastal feature at marker ① where boats arrive (the boat jetty / landing jetty). ‘Coast’ alone cannot be accepted.',
      },
      {
        label: 'b',
        text:
          'The ranger station is at marker ②. The dragon viewing platform is at marker ③, on the inland hillside.\n\n' +
          '**State** the compass direction from the ranger station to the dragon viewing platform.',
        marks: 1,
        ph: 'A single compass direction (East or East-North-East).',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Managing tourism — Komodo trail options',
    marks: 4,
    stem:
      'Visitor numbers to Komodo Island have increased sharply over time. The growing number of tourists is damaging the natural environment around the dragon viewing platform (marker ③) and along the inland trail that leads to it — the path is widening, vegetation is being trampled, and the dragons are being disturbed at their resting sites.\n\n' +
      'The Komodo National Park authority has created two options to manage the increase in visitors. Their aim is to prevent damage to the natural environment while still allowing tourism.\n\n' +
      '**Option A:** Charge tourists a higher park entry fee and set a maximum number of visitors allowed onto the inland trail each day.\n\n' +
      '**Option B:** Build a raised boardwalk and an additional car park for the increased number of tourists. The car park is marked ‘B’, at marker ④.\n\n' +
      'Refer to the visitor map of Komodo Island above (the same map used in Question 1).',
    tasks: [
      {
        label: '',
        text: 'With reference to the map, **explain** one positive impact of Option A or Option B.',
        marks: 4,
        ph: 'One positive impact of A or B, explained in detail with reasons AND a reference to the map (named site, marker or map feature, e.g. the viewing platform ③ or car park ④). No map reference caps at 3.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating an action plan',
    marks: 8,
    stem:
      'The Komodo National Park authority is now investigating Option A and Option B to decide which one they will choose. A team of 9 park rangers has eight weeks to make their final decision. They have created the following action plan to investigate the options, set out below as a series of stages.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'The park rangers’ action plan, presented stage by stage. Use the arrows, the page dots, or your ← / → keys to step through it. This plan is the marked stimulus.',
      data: {
        title: 'Park rangers’ action plan — 9 rangers, 8 weeks',
        source: 'Komodo National Park authority',
        slides: [
          {
            title: 'Goal',
            body: 'Decide whether Option A or Option B is the best way to manage visitor numbers on the inland trail to the dragon viewing platform.',
            bullets: [
              'Option A: higher entry fee + a daily cap on trail visitors.',
              'Option B: build a raised boardwalk and an additional car park (‘B’).',
            ],
          },
          {
            title: 'Phase 1 · Data collection (4 weeks)',
            body: 'Collect both quantitative and qualitative primary data about the two options.',
            bullets: [
              'Interview rangers in other Indonesian parks that have charged a higher entry fee.',
              'Interview residents of Kampung Komodo about their opinions on building a car park.',
              'Carry out a visitor count along the trail over three weeks to identify the peak tourist times.',
            ],
          },
          {
            title: 'Phase 2 · Analysis (2 weeks)',
            body: 'Make sense of the data that has been collected.',
            bullets: [
              'Review the data.',
              'Explain the strengths and weaknesses of each proposal.',
            ],
          },
          {
            title: 'Phase 3 · Decision (1 week)',
            body: 'Reach and communicate a final decision.',
            bullets: [
              'Decide on Option A or Option B to manage visitor numbers.',
              'Write a report to present to the island community on the option chosen.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the park rangers’ action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the action plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — design your own investigation',
    marks: 12,
    stem:
      'Now that you have explored the management of tourism on Komodo Island, you will plan an investigation into the future of sustainable tourism in another location of your choice. The information collected will be used to write an article for a travel magazine exploring sustainable tourism. You will use the statement of inquiry below to plan your investigation.\n\n' +
      '**Statement of Inquiry:** Global interactions can change identities and relationships.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a location/community) and connected to the SoI. Rewording the SoI into a question scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** the importance of investigating your research question.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant to the SoI and worth investigating — build from a simple connection to a fully justified one.',
      },
      {
        label: 'c',
        text: 'Your teacher has suggested including a GIS map showing tourist numbers for the past ten years in your chosen location.\n\n**Outline** one benefit or limitation to including this GIS map in your investigation.',
        marks: 2,
        ph: 'One benefit OR limitation of the GIS map, elaborated with brief detail (e.g. it lets you compare data sets spatially to see patterns).',
      },
      {
        label: 'd',
        text: '**List** two secondary sources that could be used in your investigation, other than GIS maps.',
        marks: 2,
        ph: 'Two specific secondary sources (e.g. national-park statistics on visitor numbers; a journal article). Vague answers like ‘statistics’ score 0.',
      },
      {
        label: 'e',
        text: '**Outline** one challenge you could face in your investigation.',
        marks: 2,
        ph: 'One challenge, elaborated with brief detail (e.g. not being able to survey enough tourists, reducing the validity of primary data).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — sustainable shea-butter trade & the SDGs',
    marks: 18,
    stem:
      'You are a researcher working for the World Trade Organization (WTO) and have found the statistics on the West African shea-butter trade shown in Source A below. Shea butter is made from the nuts of the shea tree and is collected and processed almost entirely by women’s cooperatives.\n\n' +
      'As a result, you have decided to write a report to **explain** how sustainable trade can contribute to progress in achieving **one** of the Sustainable Development Goals listed below. You will present your report to government officials and other interested groups.\n\n' +
      'From the list below, choose **one** Sustainable Development Goal to focus on in your report:\n' +
      '• Goal 1: No Poverty\n' +
      '• Goal 5: Gender equality\n' +
      '• Goal 12: Responsible Consumption and Production',
    artefact: {
      component: 'PieChart',
      caption:
        'Source A — who does the work in the West African shea-butter supply chain. Hover a slice (or the legend) to read its exact share. Use these figures to support your report.',
      data: {
        kind: 'doughnut',
        title: 'Source A — Who collects and processes shea butter (% of the workforce)',
        source: 'Compiled from fao.org · Fairtrade.net · unwomen.org',
        unit: '%',
        series: [
          { name: 'Women in women’s cooperatives', value: 80, color: '#0b7285' },
          { name: 'Women working independently', value: 14, color: '#9c36b5' },
          { name: 'Men', value: 6, color: '#e8590c' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a report to **explain** how sustainable trade can contribute to progress in achieving your chosen Sustainable Development Goal.\n\n' +
          'To write a report, the following elements are required:\n' +
          '• A title\n' +
          '• Sub-headings\n' +
          '• Detailed explanations, evidence and examples\n' +
          '• Recommendations and/or a conclusion.\n\n' +
          'Begin by stating your chosen SDG and a title for your report.',
        marks: 18,
        ph: 'A titled, sub-headed report explaining how sustainable trade advances one chosen SDG, with examples/evidence and a conclusion. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Thinking critically — threats to biomes',
    marks: 4,
    stem:
      'Source B is an information panel showing four human activities that threaten biomes — over-exploitation (unsustainable resource consumption, e.g. overgrazing), pollution, deforestation and land-use change — with the main impact of each. Hover or tap a panel to spotlight it.\n\n' +
      'Choose **one** biome from the list below:\n' +
      '• Aquatic\n' +
      '• Deserts\n' +
      '• Forests\n' +
      '• Grasslands\n' +
      '• Arctic/tundra',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Source B — four human activities that threaten biomes, each in its own panel. Hover a panel to spotlight it and read how that activity damages a biome.',
      data: {
        title: 'Source B — Human activities that threaten biomes',
        source: 'Threat panel (recreated)',
        intro: 'Each panel shows one human activity that threatens biomes and the main impact it has.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Over-exploitation',
            icon: '🐄',
            note: 'Unsustainable resource consumption',
            items: [
              'Overgrazing by livestock and overfishing remove resources faster than they can be replaced.',
              'Impact: stocks and vegetation cannot recover; biodiversity falls and soil is exposed.',
            ],
          },
          {
            heading: 'Pollution',
            icon: '🏭',
            note: 'Waste and emissions',
            items: [
              'Plastic waste, chemicals and industrial smoke contaminate soil, water and air.',
              'Impact: poisons wildlife and disrupts food chains across the biome.',
            ],
          },
          {
            heading: 'Deforestation',
            icon: '🌲',
            note: 'Clearing of trees',
            items: [
              'Logging and clearing remove trees and the habitat and stored carbon they hold.',
              'Impact: exposes soil to erosion and releases carbon, fragmenting the ecosystem.',
            ],
          },
          {
            heading: 'Land-use change',
            icon: '🏙️',
            note: 'Conversion of natural land',
            items: [
              'Urban expansion and new farmland convert natural biome into built-up or cultivated land.',
              'Impact: fragments habitats and reduces the biodiversity the biome can support.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'For your chosen biome, **justify** which of the human activities shown in Source B is the greatest threat to this biome.',
        marks: 4,
        ph: 'Justify in detail, with a clear conclusion, why one named human activity is the greatest threat to your chosen biome. Simply naming a biome and an activity scores 0.',
      },
    ],
  },
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Source evaluation — Sundarbans mangrove report',
    marks: 8,
    stem:
      'Source C is a chart taken from a report about the loss of mangrove forest in the Sundarbans, a large coastal mangrove biome shared by Bangladesh and India. Study the source and answer the questions that follow.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source C — mangrove cover in the Sundarbans, taken from a report by the Sundarbans Mangrove Trust (2021). Hover a point to read its exact value, or click the legend to toggle the series.',
      data: {
        kind: 'line',
        title: 'Source C — Mangrove forest cover in the Sundarbans, 1990–2020',
        source: 'Sundarbans Mangrove Trust report, 2021 (no raw data tables published)',
        x: {
          label: 'Year',
          categories: ['1990', '2000', '2010', '2020'],
        },
        y: { label: 'Mangrove cover (thousand km²)', min: 0, max: 12, ticks: [0, 3, 6, 9, 12], unit: 'k km²' },
        series: [
          {
            name: 'Mangrove cover (thousand km²)',
            color: '#2f9e44',
            points: [10, 9, 8, 6],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of Source C.',
        marks: 2,
        ph: 'State and elaborate what Source C is for (e.g. to inform people about the decline in Sundarbans mangrove cover over time).',
      },
      {
        label: 'b',
        text: '**Explain** one value of Source C to an ecologist studying the loss of mangrove forest in the Sundarbans.',
        marks: 3,
        ph: 'One value of the source for an ecologist, explained with reasoning (e.g. it gives mangrove-cover figures over 30 years, so the rate of loss can be measured).',
      },
      {
        label: 'c',
        text: '**Explain** one limitation of Source C to an ecologist studying the loss of mangrove forest in the Sundarbans.',
        marks: 3,
        ph: 'One limitation of the source for an ecologist, explained with reasoning (e.g. it publishes no raw data tables, so the figures’ accuracy cannot be checked).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — biome management vs economic development',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** is the sustainable management of biome(s) more important than economic development?\n\n' +
          'In your essay, you must:\n' +
          '• refer to at least one biome\n' +
          '• provide explanations and examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing sustainable biome management against economic development, with ≥1 biome, ≥2 perspectives and a clear conclusion. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
