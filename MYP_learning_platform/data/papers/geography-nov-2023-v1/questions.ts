import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2023 · Set 1 ISOMORPHIC VARIANT (geography-nov-2023-v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-nov-2023: SAME construct (criteria, command terms, marks,
 * 3-task blueprint, task labels) — a genuinely NEW real-world scenario throughout, and
 * a DIFFERENT scenario-appropriate artefact component for every artefact-bearing task.
 *
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (D, 4) · Q7 (A, 8) · Q8 (D, 24)
 *
 * NEW theme: ecotourism on the Galápagos Islands (Ecuador) → sustainable cocoa trade &
 * the SDGs → threatened freshwater/wetland biomes → an Arctic permafrost report.
 *
 * Artefact components changed vs source (I&S carve-out — component is NOT an invariant):
 *   Q1  LocatedMap        → ChoroplethWorld  (world locator/highlight map of Ecuador & Peru)
 *   Q3  InfoGraphicPanel  → TimelineScrubber (the dated investigation plan, week by week)
 *   Q5  SourceDocViewer   → InteractiveChart (Source A — bar chart of cocoa-trade statistics)
 *   Q6  SlideDeck         → NetworkGraph     (Source B — human-activity threats → biome impacts)
 *   Q7  InfoGraphicPanel  → SourceDocViewer  (Source C — an evaluable secondary report extract)
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
  id: 'geography-nov-2023-v1',
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
    topic: 'Map skills — locating the Galápagos Islands',
    marks: 2,
    stem:
      'The Galápagos Islands are an archipelago in the Pacific Ocean that belong to the South American country of Ecuador. The islands are a UNESCO World Heritage Site famous for their unique wildlife. Almost all visits to the islands begin on the Ecuadorian mainland, and a large share of the income from tourism stays with local Ecuadorian guides and naturalists, who lead small-group trips that focus on conservation.\n\n' +
      'Look at the world locator map below. Two South American countries are highlighted: Ecuador (which governs the Galápagos Islands) and Peru, its neighbour to the south. Hover a country to read it. Use the map to answer the questions that follow.',
    artefact: {
      component: 'ChoroplethWorld',
      caption:
        'World locator map (Natural Earth boundaries, original recreation). Ecuador and Peru are highlighted in orange; all other countries are grey. Hover a country to read its name, or click the key to spotlight the highlighted set. Ecuador governs the Galápagos Islands, which lie in the Pacific Ocean to the west of mainland Ecuador.',
      data: {
        mode: 'highlight',
        title: 'Locating Ecuador and the Galápagos Islands',
        source: 'Natural Earth · world locator (recreated)',
        highlight: ['Ecuador', 'Peru'],
        highlightLabel: 'Highlighted countries (Ecuador & Peru)',
        baseLabel: 'Other countries',
        caption:
          'Ecuador (the country that governs the Galápagos Islands) and Peru, which shares Ecuador’s southern border. The Galápagos Islands themselves lie about 1,000 km west of mainland Ecuador, in the Pacific Ocean.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the highlighted country that governs the Galápagos Islands.',
        marks: 1,
        ph: 'The named country highlighted on the map that governs the Galápagos Islands (Ecuador).',
      },
      {
        label: 'b',
        text:
          'Ecuador and Peru are both highlighted on the map. Peru shares Ecuador’s southern border.\n\n' +
          '**State** the compass direction you travel from Ecuador to reach Peru.',
        marks: 1,
        ph: 'A single compass direction (South or South-East).',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Managing tourism — Galápagos visitor options',
    marks: 4,
    stem:
      'Visitor numbers to the Galápagos Islands have increased sharply over time. The growing number of tourists is damaging the fragile natural environment — footpaths are widening, nesting sites are being disturbed, and litter is appearing along the coastal trails near the visitor landing sites.\n\n' +
      'The Galápagos National Park authority has created two options to manage the increase in visitors. Their aim is to prevent damage to the natural environment while still allowing tourism.\n\n' +
      '**Option A:** Raise the National Park entry fee for tourists and set a strict daily cap on the number of visitors allowed onto each island.\n\n' +
      '**Option B:** Build raised boardwalks and a designated visitor centre at the busiest landing site so that the increased number of tourists is kept off the fragile ground.\n\n' +
      'Refer to the location of Ecuador and the Galápagos Islands shown on the map above (the same map used in Question 1).',
    tasks: [
      {
        label: '',
        text: 'With reference to the map, **explain** one positive impact of Option A or Option B.',
        marks: 4,
        ph: 'One positive impact of A or B, explained in detail with reasons AND a reference to the map (named country/island, its highlighted location or its Pacific position). No map reference caps at 3.',
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
      'The Galápagos National Park authority is now investigating Option A and Option B to decide which one they will choose. A team of 10 park rangers has eight weeks to make their final decision. They have created the following action plan — set out week by week along the timeline below — to investigate the options.',
    artefact: {
      component: 'TimelineScrubber',
      caption:
        'The park rangers’ 8-week investigation plan. Drag the handle, click a marker, or use the arrow keys to step through each stage. This dated plan is the marked stimulus.',
      data: {
        title: 'Park rangers’ action plan — 10 rangers, 8 weeks',
        source: 'Galápagos National Park authority',
        events: [
          {
            date: 'Week 0',
            label: 'Goal set',
            detail: 'Goal: decide whether Option A (higher fee + daily visitor cap) or Option B (boardwalks + visitor centre) is the best way to manage visitor numbers at the busiest landing site.',
          },
          {
            date: 'Weeks 1–4',
            label: 'Phase 1 · Data collection',
            detail: 'Interview park rangers in other protected islands that have raised entry fees. Survey local tour operators about building a visitor centre. Carry out a visitor count at the landing site over three weeks to identify the peak tourist times.',
          },
          {
            date: 'Weeks 5–6',
            label: 'Phase 2 · Analysis',
            detail: 'Review the collected data and explain the strengths and weaknesses of each proposal.',
          },
          {
            date: 'Weeks 7–8',
            label: 'Phase 3 · Decision',
            detail: 'Decide on Option A or Option B to manage visitor numbers, and write a report to present to the island community on the option chosen.',
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
      'Now that you have explored the management of tourism on the Galápagos Islands, you will plan an investigation into the future of sustainable tourism in another location of your choice. The information collected will be used to write an article for a travel magazine exploring sustainable tourism. You will use the statement of inquiry below to plan your investigation.\n\n' +
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
    topic: 'Communicating — sustainable cocoa trade & the SDGs',
    marks: 18,
    stem:
      'You are a researcher working for the World Trade Organization (WTO) and have found the statistics on sustainable cocoa production shown in Source A below.\n\n' +
      'As a result, you have decided to write a report to **explain** how sustainable trade can contribute to progress in achieving **one** of the Sustainable Development Goals listed below. You will present your report to government officials and other interested groups.\n\n' +
      'From the list below, choose **one** Sustainable Development Goal to focus on in your report:\n' +
      '• Goal 1: No Poverty\n' +
      '• Goal 5: Gender equality\n' +
      '• Goal 12: Responsible Consumption and Production',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source A — four statistics on cocoa farming and Fairtrade. Hover a bar to read its exact value. Use these figures to support your report.',
      data: {
        kind: 'bar',
        title: 'Source A — Cocoa farming, women and Fairtrade',
        source: 'Compiled from fao.org · Fairtrade.net · worldbank.org',
        x: {
          label: 'Statistic',
          categories: [
            'Women in the cocoa workforce',
            'Cocoa farmers living in poverty',
            'Extra income for certified farmers',
            'World cocoa from smallholders',
          ],
        },
        y: { label: 'Percentage', min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], unit: '%' },
        series: [
          {
            name: 'Share / change (%)',
            color: '#0b7285',
            points: [45, 70, 30, 90],
          },
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
      'Source B shows the human activities that threaten biomes — over-exploitation (unsustainable resource consumption, e.g. overfishing), pollution, deforestation and land-use change — and the main impact each one has. The activities are arranged around a central node representing a threatened biome. Hover or click any node to read its detail.\n\n' +
      'Choose **one** biome from the list below:\n' +
      '• Aquatic\n' +
      '• Deserts\n' +
      '• Forests\n' +
      '• Grasslands\n' +
      '• Arctic/tundra',
    artefact: {
      component: 'NetworkGraph',
      caption:
        'Source B — four human activities that threaten biomes, shown as spokes around a central threatened biome. Hover or tap a node to read how that activity damages the biome.',
      data: {
        title: 'Source B — Human activities that threaten biomes',
        source: 'Threat–impact network (recreated)',
        center: { label: 'A threatened biome', detail: 'Each human activity around the ring damages the biome in a different way.', color: '#1e293b' },
        nodes: [
          { id: 'overexp', label: 'Over-exploitation', color: '#1971c2', detail: 'Unsustainable resource use such as overfishing or overgrazing removes species and resources faster than they can be replaced, so stocks cannot recover and biodiversity falls.' },
          { id: 'pollution', label: 'Pollution', color: '#e8590c', detail: 'Plastic waste, chemicals and air pollution from industry contaminate soil, water and air, poisoning wildlife and disrupting food chains across the biome.' },
          { id: 'deforestation', label: 'Deforestation', color: '#2f9e44', detail: 'Logging and clearing of trees removes habitat and stored carbon, and exposes the soil to erosion, fragmenting the ecosystem.' },
          { id: 'landuse', label: 'Land-use change', color: '#9c36b5', detail: 'Urban expansion and conversion of natural land to farmland fragment habitats and convert natural biome into built-up or cultivated land, reducing biodiversity.' },
        ],
        edges: [
          { from: 'overexp', to: 'pollution', label: 'both worsen with rising demand' },
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
    topic: 'Source evaluation — Arctic permafrost report',
    marks: 8,
    stem:
      'Source C is an extract from a report about thawing permafrost in the Arctic tundra, a fragile biome. Study the source and answer the questions that follow.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Source C — an extract from a report on thawing Arctic permafrost. Click a paragraph to highlight it, hover dotted terms for definitions, and use the evaluation lenses to scaffold your answer.',
      data: {
        kind: 'Secondary source (Source C)',
        title: 'Source C — Thawing permafrost: a warning from the Arctic',
        attribution: 'Extract from a blog post on www.arcticwatch.org, posted by a guide for World Tundra Day, 2021. No author named; data sources not given.',
        paragraphs: [
          'The Arctic tundra is warming nearly four times faster than the global average. As it warms, the permafrost — the frozen ground that has stayed solid for thousands of years — begins to thaw.',
          'Thawing permafrost releases methane and carbon dioxide that were locked in the frozen soil. These greenhouse gases speed up global warming, which in turn thaws even more permafrost.',
          'Across the tundra, thawing ground is causing the land to collapse, damaging roads and homes built on the permafrost and draining the shallow lakes that wildlife depend on.',
          'We must act now to protect the tundra before this fragile biome is lost forever.',
        ],
        glossary: {
          'permafrost': 'Ground that stays frozen for at least two years in a row; in the Arctic it can be thousands of years old.',
          'tundra': 'A cold, treeless biome where the subsoil is permanently frozen.',
          'methane': 'A powerful greenhouse gas released when frozen organic matter in permafrost thaws and decomposes.',
        },
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of Source C.',
        marks: 2,
        ph: 'State and elaborate what Source C is for (e.g. to inform/persuade people about thawing permafrost and the need to protect the Arctic tundra).',
      },
      {
        label: 'b',
        text: '**Explain** one value of Source C to a climate scientist studying the impact of warming on the Arctic tundra.',
        marks: 3,
        ph: 'One value of the source for a climate scientist, explained with reasoning (e.g. it explains how thawing permafrost releases methane and CO₂, helping explain the feedback loop).',
      },
      {
        label: 'c',
        text: '**Explain** one limitation of Source C to a climate scientist studying the impact of warming on the Arctic tundra.',
        marks: 3,
        ph: 'One limitation of the source for a climate scientist, explained with reasoning (e.g. it names no author and gives no data sources, so its reliability cannot be checked).',
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
