import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2023 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (N23). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (D, 4) · Q7 (A, 8) · Q8 (D, 24)
 *
 * Theme: sustainable tourism & biome management — managing tourism on the Kaikōura
 * Peninsula (New Zealand) → sustainable trade & the SDGs → threatened biomes & the
 * Coral Triangle. Text/list/table sources are transcribed as original extracts; visual
 * sources become interactive artefacts wired via the `artefact` field:
 *   Q1  → LocatedMap        (topographic map of the Kaikōura Peninsula, recreated as original SVG — reused by Q2)
 *   Q3  → InfoGraphicPanel  (the tourist operators' Goal → A/B → Phase 1–3 action plan)
 *   Q5  → SourceDocViewer   (Source A — four gender/trade statistics)
 *   Q6  → SlideDeck         (Source B — six human-activity threat photos, recreated as captioned slides)
 *   Q7  → InfoGraphicPanel  (Source C — the Coral Triangle infographic, recreated with exact figures — reused across 7a–7c)
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
  id: 'geography-nov-2023',
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
    topic: 'Map skills — Kaikōura topographic map',
    marks: 2,
    stem:
      'Kaikōura is a region in New Zealand. The original inhabitants in New Zealand are called Māori. 90% of the tourism activities in Kaikōura are owned and operated by Māori. Many tourist activities in the area focus on Māori culture and the spiritual connection between the land and people.\n\n' +
      'Look at the topographic map of the Kaikōura Peninsula below (1:250 000) and answer the questions that follow. The map uses a numbered grid — eastings run 44–51 along the bottom and northings 02–06 up the right-hand side, so a four-figure grid reference such as 5003 means easting 50, northing 03.',
    artefact: {
      component: 'LocatedMap',
      caption:
        'Topographic map of the Kaikōura Peninsula (1:250 000, original recreation). Hover the markers to read them; the inset globe locates New Zealand. Point Kean (grid 5003) is the black box on the east coast; the Māori Leap Caves (4504) are the purple marker and the racecourse (4604) the pink marker inland; ‘B’ (4702) is the proposed car-park site by South Bay.',
      data: {
        title: 'Kaikōura Peninsula — topographic map (1:250 000)',
        source: 'Recreated NZ topographic map · grid 44–51 E / 02–06 N',
        region: 'Kaikōura Peninsula, New Zealand',
        scene: 'coast',
        water: 'left',
        terrain: 'right',
        scaleKm: 2,
        north: true,
        locator: [173.68, -42.42],
        legend: [
          { label: 'Built-up / town area', color: '#c8a27a' },
          { label: 'Native / exotic forest', color: '#9bbf7f' },
        ],
        groups: [
          { id: 'town', label: 'Built-up / town area', color: '#c8a27a', count: 130, zone: 'all' },
          { id: 'forest', label: 'Forest', color: '#9bbf7f', count: 60, zone: 'inland north' },
        ],
        markers: [
          { x: 14, y: 30, glyph: '●', color: '#7048e8', label: 'Māori Leap Caves (4504)', detail: 'Marked with a purple circle, inland to the west of the peninsula.' },
          { x: 24, y: 38, glyph: '●', color: '#e64980', label: 'Racecourse (4604)', detail: 'Marked with a pink circle — east of (and roughly East / East-South-East from) the Māori Leap Caves.' },
          { x: 84, y: 50, glyph: '■', color: '#212529', label: 'Point Kean (5003)', detail: 'Black box on the east coast. The coastal feature here is Coastal Rocks.' },
          { x: 36, y: 62, glyph: 'B', color: '#e03131', label: '‘B’ — proposed car park (4702)', detail: 'Option B: an additional car park and viewing platform, by South Bay.' },
          { x: 48, y: 70, glyph: '⌕', color: '#0f2a43', label: 'South Bay (4702) & Lookout Walk (4802)', detail: 'Tourist numbers are damaging the natural environment around South Bay and the South Bay Lookout Walk.' },
        ],
        caption:
          'Key features: coastal rocks at Point Kean (5003); a mast at A79R and the recycle centre inland; the racecourse (4604) just east of the Māori Leap Caves (4504); South Bay (4702), the South Bay Lookout Walk (4802) and the proposed car-park site ‘B’ (4702). N-arrow bottom-left, scale bar bottom-right.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the coastal feature located at Point Kean at grid reference 5003. This is marked by a black box.',
        marks: 1,
        ph: 'The named coastal feature at grid 5003 (‘Rocks’ alone cannot be accepted).',
      },
      {
        label: 'b',
        text:
          'The Māori Leap Caves are located at grid reference 4504 (purple circle). The racecourse is located at grid reference 4604 (pink circle).\n\n' +
          '**State** the compass direction from the Māori Leap Caves to the racecourse.',
        marks: 1,
        ph: 'A single compass direction (East or East-South-East).',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Managing tourism — South Bay options',
    marks: 4,
    stem:
      'Tourist numbers to Kaikōura have increased over time. The increased number of tourists is causing damage to the natural environment in the area of South Bay, located at grid reference 4702, and the South Bay Lookout Walk, located at grid reference 4802.\n\n' +
      'The tourist operators have created two options to manage the increase in tourists. Their aim is to prevent damage to the natural environment while still allowing tourism.\n\n' +
      '**Option A:** Charge tourists a fee to enter South Bay and the Lookout Walk and set a maximum number of tourists allowed into the area each day.\n\n' +
      '**Option B:** Build an additional car park and viewing platform for the increased number of tourists. This is marked ‘B’, located at grid reference 4702.\n\n' +
      'Refer to the topographic map of the Kaikōura Peninsula above (the same map used in Question 1).',
    tasks: [
      {
        label: '',
        text: 'With reference to the map, **explain** one positive impact of Option A or Option B.',
        marks: 4,
        ph: 'One positive impact of A or B, explained in detail with reasons AND a reference to the map (named location, grid reference or map feature). No map reference caps at 3.',
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
      'The local tourist operators in Kaikōura are now investigating Option A and Option B to decide which one they will choose. The group of 12 tourist operators have eight weeks to make their final decision. They have created the following action plan to investigate the options.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The tourist operators’ action plan — hover a stage to spotlight it. This plan is the marked stimulus.',
      data: {
        title: 'Tourist operators’ action plan',
        source: '12 tourist operators · 8 weeks to decide',
        intro: 'Goal: Decide if Option A or Option B is the best way to manage tourist numbers in the area of South Bay.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Option A',
            icon: 'A',
            note: 'One of the two proposals being investigated',
            items: [
              'Charge tourists a fee to enter South Bay and the Lookout Walk and set a maximum number of tourists allowed into the area each day.',
            ],
          },
          {
            heading: 'Option B',
            icon: 'B',
            note: 'The other proposal being investigated',
            items: [
              'Build an additional car park and viewing platform for the increased number of tourists.',
            ],
          },
          {
            heading: 'Phase 1 · 4 weeks',
            icon: '①',
            note: 'Data collection',
            items: [
              'Interview tourist operators in neighbouring towns who have charged a fee for tourists entering the area.',
              'Interview residents in Kaikōura about their opinions on building a car park.',
              'Carry out a traffic count survey over three weeks to identify the peak tourist times.',
            ],
          },
          {
            heading: 'Phase 2 · 2 weeks',
            icon: '②',
            note: 'Analysis',
            items: [
              'Review data.',
              'Explain the strengths and weaknesses of each proposal.',
            ],
          },
          {
            heading: 'Phase 3 · 1 week',
            icon: '③',
            note: 'Decision',
            items: [
              'Decide on Option A or B to manage tourist numbers.',
              'Create a written report to present to the community on the option chosen.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the tourist operators’ action plan.',
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
      'Now that you have explored the management of tourism in Kaikōura, you will plan an investigation into the future of sustainable tourism in another location of your choice. The information collected will be used to write an article for a tourist magazine exploring sustainable tourism. You will use the statement of inquiry below to plan your investigation.\n\n' +
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
        ph: 'Two specific secondary sources (e.g. local-government statistics on tourist numbers; a journal article). Vague answers like ‘statistics’ score 0.',
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
    topic: 'Communicating — sustainable trade & the SDGs',
    marks: 18,
    stem:
      'You are a researcher working for the World Trade Organization (WTO) and have found the four statistics shown in Source A below.\n\n' +
      'As a result, you have decided to write a report to **explain** how sustainable trade can contribute to progress in achieving **one** of the Sustainable Development Goals listed below. You will present your report to government officials and other interested groups.\n\n' +
      'From the list below, choose **one** Sustainable Development Goal to focus on in your report:\n' +
      '• Goal 1: No Poverty\n' +
      '• Goal 5: Gender equality\n' +
      '• Goal 12: Responsible Consumption and Production',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source A — four statistics on women in global production and food. Use these to support your report.',
      data: {
        kind: 'Statistics card (Source A)',
        title: 'Source A — Women, production and food',
        attribution: 'Compiled from fao.org · Fairtrade.net · unwomen.org · undp.org',
        paragraphs: [
          '70% of the total workforce in global cotton production are women. (fao.org)',
          'Around 60%–80% of the world’s food is grown by women. (Fairtrade.net)',
          'More women than men live on less than US$1.90 per day. (unwomen.org)',
          '1.3 billion tonnes of food is wasted every year while 2 billion people go hungry or are under-nourished. (undp.org)',
        ],
        glossary: {
          'sustainable trade': 'Trade that liberates trade by removing barriers (e.g. tariffs) while protecting people and the environment, e.g. fair-trade schemes.',
          'Fairtrade': 'A scheme that guarantees producers fairer prices and better working conditions for their crops.',
        },
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
      'Source B shows a set of photographs of human activities that threaten biomes — over-exploitation (unsustainable resource consumption, e.g. overfishing), pollution, deforestation and land-use change.\n\n' +
      'Choose **one** biome from the list below:\n' +
      '• Aquatic\n' +
      '• Deserts\n' +
      '• Forests\n' +
      '• Grasslands\n' +
      '• Arctic/tundra',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source B — six photographs of human activities that threaten biomes (originals recreated as captioned slides). Use the controls to step through them.',
      data: {
        title: 'Source B — Human activities that threaten biomes',
        source: 'Photo set · recreated captions',
        slides: [
          {
            title: 'Over-exploitation: unsustainable resource consumption',
            body: 'A fishing trawler’s deck and net filled with a large catch of fish — overfishing removes more fish than can be replaced.',
            bullets: ['Threat: over-exploitation / overfishing', 'Impact: stocks cannot reproduce fast enough; biodiversity falls'],
          },
          {
            title: 'Pollution',
            body: 'Camels graze on open desert land scattered with discarded plastic and other litter.',
            bullets: ['Threat: solid-waste pollution', 'Impact: contaminates soil and harms wildlife that ingests waste'],
          },
          {
            title: 'Pollution',
            body: 'Two industrial chimneys release thick plumes of smoke into the sky at dusk.',
            bullets: ['Threat: air pollution from industry', 'Impact: greenhouse gases and acid deposition damage ecosystems'],
          },
          {
            title: 'Deforestation',
            body: 'A logging machine grabs cut tree trunks in a clear-felled patch of forest.',
            bullets: ['Threat: deforestation / logging', 'Impact: removes habitat and stored carbon; exposes soil to erosion'],
          },
          {
            title: 'Land-use change',
            body: 'A dense city of high-rise buildings presses up against a green hillside — urban expansion into natural land.',
            bullets: ['Threat: urbanisation / land-use change', 'Impact: natural habitat is converted to built-up land'],
          },
          {
            title: 'Land-use change',
            body: 'An aerial view of new fields and development encroaching across a previously natural landscape.',
            bullets: ['Threat: agricultural / built land-use change', 'Impact: fragments habitats and reduces biodiversity'],
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
    topic: 'Source evaluation — Coral Triangle infographic',
    marks: 8,
    stem:
      'Source C is an infographic about the Coral Triangle, a system of biodiverse reefs. Study the source and answer the questions that follow.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source C — the Coral Triangle infographic (original recreation with exact figures). Hover a panel to spotlight it.',
      data: {
        title: 'Source C — The Coral Triangle: the world’s centre of marine biodiversity',
        source: 'Infographic created by www.savingcoralreefs.org for World Reef Day, 2020',
        intro: 'The Coral Triangle is a 6 million km² area covering parts or the whole of 6 countries.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Six countries',
            icon: '🗺',
            note: 'Parts or the whole of each lie within the triangle',
            items: ['Philippines', 'Malaysia', 'Indonesia', 'Papua New Guinea', 'Solomon Islands', 'Timor-Leste'],
          },
          {
            heading: 'Direct threat to reefs by local human activities',
            icon: '⚠️',
            note: 'Share of reefs under direct local threat',
            items: ['The Coral Triangle: more than 85%', 'The global average: 60%', '79% decline in reef-fish reproduction'],
          },
          {
            heading: 'Status of tuna',
            icon: '🐟',
            note: 'Global demand for tuna is increasing the amount of tuna being caught in the Coral Triangle',
            items: ['Skipjack tuna — not overfished', 'Yellowfin tuna — overfished', 'Bigeye tuna — fully exploited'],
          },
          {
            heading: 'People who depend on the reefs',
            icon: '👥',
            note: 'The Coral Triangle sustains 120 million people',
            items: ['120 million people sustained', 'Approximately 2.25 million are fishers who depend on healthy seas to make a living'],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of Source C.',
        marks: 2,
        ph: 'State and elaborate what Source C is for (e.g. to inform people about the Coral Triangle, including the threats of human activities).',
      },
      {
        label: 'b',
        text: '**Explain** one value of Source C to a marine biologist studying the impact of fishing in the Coral Triangle.',
        marks: 3,
        ph: 'One value of the source for a marine biologist, explained with reasoning (e.g. it provides statistics on the unsustainable fishing of tuna).',
      },
      {
        label: 'c',
        text: '**Explain** one limitation of Source C to a marine biologist studying the impact of fishing in the Coral Triangle.',
        marks: 3,
        ph: 'One limitation of the source for a marine biologist, explained with reasoning (e.g. it does not cite all its sources, so credibility can’t be checked).',
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
