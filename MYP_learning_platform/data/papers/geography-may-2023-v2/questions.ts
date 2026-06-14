import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2023 · Set 2 isomorphic variant (geography-may-2023-v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-may-2023: identical paperMeta (bar id), question/task
 * structure, criteria, command terms and mark allocations. Only the SURFACE changes —
 * a genuinely new set of real-world geography scenarios, presented through DIFFERENT
 * artefact components than BOTH the source AND Set 1 (per the I&S variant carve-out).
 *
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (24)
 *
 * NEW scenarios (vs source climate/flood/Tonga/Galápagos and vs v1 air-quality/Singapore/
 * heat-island/Greece/fast-fashion):
 *   ocean plastic pollution (sources of marine plastic), mangrove-restoration coastal
 *   protection investigation (Mekong Delta, Vietnam), desertification / land-restoration
 *   investigation design (the Sahel), flood-risk mapping with GIS for monsoon flooding
 *   (Pakistan, GIS company), and the cobalt / electric-vehicle-battery supply chain
 *   (DR Congo — source evaluation + critical-minerals essay).
 *
 * Artefact components (each DIFFERENT from BOTH the source's AND Set 1's for that question):
 *   Q1/Q2 → PieChart            (Source A — sources of ocean plastic, nested doughnut, reused at Q2)
 *   Q3    → TimelineScrubber    (the coastal engineer's phased investigation plan, dated)
 *   Q5    → InfoGraphicPanel    (the National Disaster Management Authority briefing poster)
 *           + DataTableInteractive (flood-impact GIS data by district)
 *   Q6/Q7 → NetworkGraph        (Source B — the cobalt / EV-battery supply-chain diagram, reused at Q7)
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
  id: 'geography-may-2023-v2',
  subject: 'Geography',
  session: 'May',
  year: 2023,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source A — sources of ocean plastic pollution (value-read). Reused at Q1 and Q2. ──
// A nested doughnut: the OUTER ring shows the share of plastic waste entering the ocean
// from each source each year (the shares sum to 100%); the INNER ring pairs land-based
// against sea-based origins. A later task reads a share off this, so the values are EXACT.
const SOURCE_A_OCEANPLASTIC = {
  component: 'PieChart',
  caption:
    'Source A — where the plastic waste that enters the ocean each year comes from, shown as a share of the total (the outer ring sums to 100%). The inner ring groups the same data into land-based and sea-based origins. Hover or click a slice to read its exact share.',
  data: {
    kind: 'nested',
    title: 'Source A · Sources of the plastic waste entering the ocean each year',
    source: 'Global marine-litter monitoring (recreated)',
    unit: '%',
    series: [
      { name: 'Rivers carrying litter from towns and cities', value: 41, color: '#0b7285' },
      { name: 'Litter dropped on coastlines and beaches', value: 23, color: '#e8590c' },
      { name: 'Abandoned and lost fishing gear', value: 18, color: '#2f9e44' },
      { name: 'Waste dumped or lost from ships', value: 11, color: '#1971c2' },
      { name: 'Microplastics washed from synthetic clothing', value: 7, color: '#9c36b5' },
    ],
    innerSeries: [
      { name: 'Land-based sources', value: 71, color: '#0b7285' },
      { name: 'Sea-based sources', value: 29, color: '#1971c2' },
    ],
  },
}

// ── Source B — cobalt / electric-vehicle-battery supply-chain diagram. Reused at Q6 and Q7. ──
// An evaluable visual source the student found online, presented as a hub-and-spoke
// network (origin, purpose, value, limitation): the central hub is the EV battery; each
// spoke is a stage in the supply chain, carrying an impact in its readout detail.
const SOURCE_B_COBALT = {
  component: 'NetworkGraph',
  caption:
    'Source B — the supply-chain diagram the student found on a campaign organisation’s website (hover or tap a node to read its detail). Treat it as a source to evaluate: who made it, why, and what it can and cannot tell you.',
  data: {
    title: 'Source B — The journey of an electric-vehicle battery',
    source: 'FairMineral Watch · www.fairmineralwatch.org',
    center: {
      label: 'EV battery',
      detail:
        'A lithium-ion battery for an electric vehicle. Around 70% of the world’s cobalt — a key battery metal — is mined in the Democratic Republic of the Congo (DRC).',
      color: '#1e293b',
    },
    nodes: [
      {
        id: 'mining',
        label: 'Cobalt mining (DRC)',
        color: '#e8590c',
        detail:
          'Cobalt is dug from mines in the DRC. Some is produced by artisanal miners working by hand in dangerous conditions, and child labour has been reported.',
      },
      {
        id: 'refining',
        label: 'Refining (China)',
        color: '#0b7285',
        detail:
          'Most cobalt ore is shipped to be refined, with around 75% of refining taking place in China before the metal is sold to battery makers.',
      },
      {
        id: 'manufacture',
        label: 'Battery manufacture',
        color: '#2f9e44',
        detail:
          'Refined metals are made into battery cells in large factories, an energy-intensive stage that adds to the battery’s carbon footprint.',
      },
      {
        id: 'use',
        label: 'Electric vehicles',
        color: '#1971c2',
        detail:
          'The finished batteries power electric vehicles, which produce no exhaust emissions and help cut urban air pollution and carbon emissions.',
      },
      {
        id: 'disposal',
        label: 'End of life',
        color: '#c2255c',
        detail:
          'At the end of their life fewer than 5% of lithium-ion batteries are currently recycled; the rest risk leaking toxic metals if they are landfilled.',
      },
    ],
    edges: [
      { from: 'mining', to: 'refining', label: 'ore' },
      { from: 'refining', to: 'manufacture', label: 'metal' },
      { from: 'manufacture', to: 'use', label: 'cells' },
      { from: 'use', to: 'disposal', label: 'waste' },
    ],
  },
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Marine pollution — sources of ocean plastic',
    marks: 2,
    stem:
      'Source A shows where the plastic waste that enters the ocean each year comes from, given as a share of the total. Answer the questions that follow.',
    artefact: SOURCE_A_OCEANPLASTIC,
    tasks: [
      {
        label: 'a',
        text: '**Identify** the share of the plastic entering the ocean each year that comes from rivers carrying litter from towns and cities.',
        marks: 1,
        ph: 'Read the value off Source A for the rivers slice.',
      },
      {
        label: 'b',
        text:
          '“Microplastics are pieces of plastic smaller than five millimetres that can be eaten by marine animals.”\n\n' +
          '**Select** whether the statement is true or false.',
        marks: 1,
        ph: 'Choose true or false.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Marine pollution — causes of plastic sources',
    marks: 4,
    stem:
      'Source A is repeated below. You will explain a cause of one of the sources of ocean plastic shown in Source A.\n\n' +
      'Choose one source (rivers carrying litter / litter dropped on coastlines / abandoned fishing gear / waste lost from ships / microplastics from clothing), then explain a cause of it.',
    artefact: SOURCE_A_OCEANPLASTIC,
    tasks: [
      {
        label: '',
        text: '**Explain** one cause of your chosen source from Source A.',
        marks: 4,
        ph: 'Pick one source, then build from stating a cause (1) to explaining it in detail with reasons (4). An example may support but is not required.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — mangrove coastal protection (Mekong Delta)',
    marks: 8,
    stem:
      'The Mekong Delta in southern Vietnam is a low-lying coastline of farms and villages. Rising seas and stronger storms are eroding the coast and pushing salt water into the rice fields each year.\n\n' +
      'A coastal engineer is investigating how to protect the coast from erosion and storm surges using nature rather than concrete. The engineer is focusing on a stretch of eroding shoreline near the town of Soc Trang.\n\n' +
      'You will evaluate the coastal engineer’s investigation below. The investigation is presented as the dated planning timeline shown beneath this brief.\n\n' +
      '**Goal:** To develop a strategy that protects the eroding shoreline near Soc Trang from erosion and storm surges while keeping farmland productive. **Solution:** Restore a wide belt of coastal mangrove forest in front of the villages. The mangroves trap sediment, build up the shoreline and absorb wave energy before it reaches the land.\n\n' +
      '**Plan for the area:** the restored mangrove belt would be around 1000 metres wide and could reduce wave height by up to 60% during a storm, trapping sediment so the coast grows seaward over time.\n\n' +
      '**Outcome:** the mangrove belt was planted; it now buffers the villages from storm waves, traps sediment that rebuilds the shoreline, and provides a nursery for fish that local people catch.',
    artefact: {
      component: 'TimelineScrubber',
      caption:
        'The coastal engineer’s investigation plan (the Planning Stage), as a dated timeline. Phase 1 (weeks 1–8) is data collection; Phase 2 (weeks 9–12) is design. Drag the handle, click a marker, or use the arrow keys — this plan is the marked stimulus.',
      data: {
        title: 'Mekong Delta mangrove-restoration investigation · Planning Stage',
        source: 'Coastal engineer, Soc Trang, Vietnam',
        events: [
          {
            date: 'Week 1',
            label: 'Phase 1 · Interview local officials',
            detail: 'Interview members of the provincial coastal authority to evaluate the success of other mangrove-restoration schemes along the Mekong Delta.',
          },
          {
            date: 'Week 2',
            label: 'Phase 1 · Survey residents',
            detail: 'Interview villagers and fishers to determine how they currently use the shoreline and the mudflats.',
          },
          {
            date: 'Week 4',
            label: 'Phase 1 · Measure erosion',
            detail: 'Use shoreline and tide-gauge data to identify the rate of coastal erosion and the highest storm-surge level the defence must withstand.',
          },
          {
            date: 'Week 6',
            label: 'Phase 1 · Sample the mudflats',
            detail: 'Take sediment and salinity samples to calculate whether the mudflats can support healthy mangrove growth.',
          },
          {
            date: 'Week 8',
            label: 'Phase 1 · Use storm predictions',
            detail: 'Use national meteorological-service predictions of the strongest storms expected at this location.',
          },
          {
            date: 'Week 9',
            label: 'Phase 2 · Review the data',
            detail: 'Review all the data collected in Phase 1.',
          },
          {
            date: 'Week 10',
            label: 'Phase 2 · Sketch plans',
            detail: 'Sketch planting plans for the width and species of the mangrove belt.',
          },
          {
            date: 'Week 12',
            label: 'Phase 2 · Digital modelling',
            detail: 'Create digital modelling to show how the restored mangroves would reduce wave height.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the coastal engineer’s investigation.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the planning, methodology and outcome, then give an overall appraisal. Marked: Strengths /3, Limitations /3, Appraisal /2.',
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
      'You have been asked by a regional government to investigate land-restoration strategies that are used to address desertification. Desertification is the process by which fertile land turns into desert, usually because of drought, overgrazing and the loss of vegetation.\n\n' +
      'The investigation will allow the regional government to consider the actions they need to take to keep farmland productive and stop the desert from spreading in the Sahel region of Africa.\n\n' +
      '**Statement of inquiry:** Effective planning can reduce the impact of land degradation on people and places.\n\n' +
      'You must not repeat information from Question 3 in your responses.',
    tasks: [
      {
        label: 'a',
        text: 'Use the statement of inquiry to **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a place and an impact) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** why your research question is worthy of investigation.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is worthy of investigating — build from a simple reason to a fully justified one.',
      },
      {
        label: 'c',
        text: '**Outline** one challenge that you might experience when completing your investigation.',
        marks: 2,
        ph: 'One challenge, elaborated with brief detail (e.g. travelling to remote areas and how it would affect your data collection).',
      },
      {
        label: 'd',
        text:
          'Choose one of the sources below and **explain** how the source would be beneficial to your investigation.\n\n' +
          '• Recent newspaper articles on the topic\n' +
          '• Rainfall and crop-yield statistics from the regional government\n' +
          '• Satellite vegetation (land-cover) maps of the region\n' +
          '• Scripts of interviews with local farmers',
        marks: 4,
        ph: 'Pick one source, then explain in detail with reasons how it helps answer your RQ.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — GIS for flood-risk mapping (Pakistan)',
    marks: 18,
    stem:
      'You work for a geographic information systems (GIS) company called SpatialCode. You receive a request from the National Disaster Management Authority of Pakistan, shown in the briefing panel below. The brief links to data about a recent monsoon flood and its impacts (shown as the GIS flood-impact table beneath the task).\n\n' +
      'Reply to the request to explain at least one strength and at least one limitation of using geographic information systems (GIS) to manage the impacts of river flooding in Pakistan. Write a subject title for your email, then reply.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The briefing panel received from the National Disaster Management Authority of Pakistan — the request your reply must answer. Hover or tap a panel to spotlight it.',
      data: {
        title: 'Brief from the National Disaster Management Authority · To: SpatialCode',
        source: 'National Disaster Management Authority, Pakistan',
        intro:
          'We coordinate the national response to flooding in Pakistan. After this year’s monsoon we are asking SpatialCode to advise us on using GIS to map and manage flood risk.',
        layout: 'grid',
        blocks: [
          {
            icon: '🏛️',
            heading: 'Who we are',
            items: [
              'We are the National Disaster Management Authority of Pakistan.',
              'We coordinate flood warnings, evacuations and aid across the country.',
            ],
          },
          {
            icon: '🌧️',
            heading: 'What happened',
            items: [
              'An intense monsoon caused the Indus River to overflow across Sindh and Punjab provinces.',
              'Whole districts were submerged and millions of people were displaced from their homes.',
            ],
          },
          {
            icon: '❓',
            heading: 'The problem',
            items: [
              'In the floods it was very hard to know quickly which districts were under water and where aid was most needed.',
              'We need a faster, more accurate way to map the flood hazard.',
            ],
          },
          {
            icon: '✉️',
            heading: 'Your task',
            items: [
              'See the GIS flood-impact table beneath this brief.',
              'Reply by email explaining at least one strength AND at least one limitation of using GIS to manage river flooding in Pakistan.',
              'Write an appropriate subject title and reply formally.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a subject title for your email, then reply to the request to **explain** at least one strength and at least one limitation of using GIS to manage the impacts of river flooding in Pakistan.\n\n' +
          'Use the data in the GIS flood-impact table (below) to support your reply.',
        marks: 18,
        ph: 'A formal email reply explaining ≥1 strength AND ≥1 limitation of GIS for Pakistan flooding, with a subject title, salutation and close. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Only strengths OR only limitations caps Crit A at 3.',
        artefact: {
          component: 'DataTableInteractive',
          caption:
            'National Disaster Management Authority — GIS flood-impact data by district, derived from satellite imagery (original recreation). Click a row to pin the value you are reading off.',
          data: {
            title: 'GIS — flood impact by district (satellite-derived)',
            source: 'National Disaster Management Authority, Pakistan (recreated)',
            caption:
              'Each row is one flood-affected district mapped from satellite imagery: the area flooded (in km²), people displaced, and the share of the district under water.',
            headers: ['District', 'Area flooded (km²)', 'People displaced', 'District under water'],
            rows: [
              ['Dadu', '2300', '480 000', '64%'],
              ['Larkana', '1700', '350 000', '51%'],
              ['Khairpur', '1450', '290 000', '43%'],
              ['Rajanpur', '1100', '210 000', '38%'],
              ['Naseerabad', '900', '160 000', '47%'],
            ],
          },
        },
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — EV-battery supply chain',
    marks: 6,
    stem:
      'An MYP student is creating a presentation on the hidden impacts of new technology. Whilst researching they have found the supply-chain diagram shown in Source B below on a campaign organisation’s website. Study the diagram and answer the questions that follow.',
    artefact: SOURCE_B_COBALT,
    tasks: [
      {
        label: 'a',
        text: '**Identify** the origin of the diagram.',
        marks: 1,
        ph: 'State who made/published the diagram (read it off Source B).',
      },
      {
        label: 'b',
        text: '**State** the purpose of the diagram.',
        marks: 1,
        ph: 'Why was the diagram made? (e.g. to raise awareness of the social and environmental impacts of electric-vehicle batteries).',
      },
      {
        label: 'c',
        text: '**Outline** one value of the diagram for the MYP student’s presentation.',
        marks: 2,
        ph: 'One value, elaborated (e.g. it shows the whole supply chain, making the hidden stages easy to explain).',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of the diagram for the MYP student’s presentation.',
        marks: 2,
        ph: 'One limitation, elaborated (e.g. a campaign organisation may show only the negative stages of the supply chain).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justify — mitigating EV-battery supply-chain impacts',
    marks: 6,
    stem:
      'Source B is repeated for your information (the EV-battery supply-chain diagram above). A national government is considering implementing one of the following actions to mitigate the social and environmental impacts of electric-vehicle batteries:\n\n' +
      '1. Require carmakers to prove their cobalt is mined responsibly before the cars can be sold.\n' +
      '2. Build battery-recycling plants so that metals from old batteries can be recovered and reused.',
    artefact: SOURCE_B_COBALT,
    tasks: [
      {
        label: '',
        text: '**Justify** which one of the actions you think the government should choose.',
        marks: 6,
        ph: 'Choose one action and justify it with detailed, in-depth arguments — weigh it against the other option (economy and environment).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — sustainable energy transition',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          'Rising demand for minerals is the greatest threat to a sustainable energy transition. **To what extent** do you agree with this statement?\n\n' +
          'In your essay, you should:\n' +
          '• use examples from your MYP studies\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) on whether rising mineral demand is the greatest threat to a sustainable energy transition, with ≥2 balanced perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
