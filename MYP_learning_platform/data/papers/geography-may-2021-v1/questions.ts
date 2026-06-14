import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2021 · Set 1 ISOMORPHIC VARIANT (geography-may-2021-v1).
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-may-2021: identical paperMeta (bar id), identical question/task
 * structure, criteria, marks and command terms. ONLY the surface scenario + artefact
 * components change (a genuinely new context per the I&S variant carve-out).
 *
 * NEW scenarios (3-task / 80-mark blueprint preserved):
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *     — air pollution / atmospheric degradation; investigation into coral-reef bleaching.
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18) — urban heat-island & flood management,
 *     coastal city of Marisport.
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (D, 6) · Q7 (D, 6) · Q8 (24)
 *     — river-flood hazard GIS across the Lower Mekong basin; essay on flood effects.
 *
 * Artefact components are DELIBERATELY different from the source paper (variant carve-out):
 *   Q1/Q2 → InteractiveChart (was PieChart)        — grouped-bar, causes of air pollution
 *   Q3    → SourceDocViewer + DataTableInteractive  (was ImageCompareSlider + InfoGraphicPanel)
 *   Q5    → InfoGraphicPanel                         (was DragAnnotate) — labelled site briefing A/B
 *   Q6/Q7 → ChoroplethWorld (highlight mode)        (was LocatedMap) — flood-risk thematic map
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
  id: 'geography-may-2021-v1',
  subject: 'Geography',
  session: 'May',
  year: 2021,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source B — grouped-bar chart (main sources of outdoor air pollution, two cities) ──
// Value-read artefact. Megacity totals = sum of the four bars.
//   Megacity (Delhi-type) total = 100 (32 + 28 + 24 + 16) — read as % of PM2.5 by source.
//   Coastal city (Cape Town-type) total = 100 (14 + 22 + 18 + 46).
// Largest source in the Megacity = Road transport (32 %). Used by Q1 and Q2.
const sourceB = {
  component: 'InteractiveChart',
  caption:
    'Source B — main sources of outdoor (ambient) air pollution in two cities, shown as a percentage of fine-particle (PM2.5) emissions by source. Hover a bar to read its exact value; click the legend to toggle a city. Each city’s four sources add up to 100 %.',
  data: {
    kind: 'bar' as const,
    title: 'Sources of outdoor air pollution by city (% of PM2.5 emissions)',
    source: 'Source B',
    x: {
      label: 'Source of air pollution',
      categories: ['Road transport', 'Industry & power', 'Domestic fuel burning', 'Construction & dust'],
    },
    y: { label: 'Share of PM2.5', min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50], unit: '%' },
    series: [
      { name: 'Hazepur (megacity)', color: '#c0392b', points: [32, 28, 24, 16] },
      { name: 'Marisport (coastal city)', color: '#1971c2', points: [14, 22, 18, 46] },
    ],
  },
}

// ── Source D — global river-flood-risk thematic map (reused by Q6 and Q7) ──
// HIGHLIGHT mode: the eight Lower Mekong / Southeast-Asian basin countries flagged as the
// "very high river-flood risk" set. Locations X and Y are two of the highlighted countries
// (Cambodia = X, Laos = Y) — the two candidate sites for flood-defence investment.
// The Q6a count (countries highlighted = 8) reads directly off this set.
const sourceD = {
  component: 'ChoroplethWorld',
  caption:
    'Source D — World-Flood-Watch map of countries at very high river-flood risk in monsoon Asia. The highlighted set are the basin nations flagged for the 2021 flood-defence programme. Location X = Cambodia and Location Y = Laos are the two candidate sites for earthquake-and-flood-proof investment. Cambodia (X) sits on the low-lying Mekong floodplain near the river mouth with dense riverside population; Laos (Y) is mountainous and upstream with lower population density.',
  data: {
    mode: 'highlight' as const,
    title: 'Source D — countries at very high river-flood risk (monsoon Asia)',
    source: 'World-Flood-Watch',
    highlight: ['Cambodia', 'Vietnam', 'Laos', 'Thailand', 'Myanmar', 'Bangladesh', 'India', 'China'],
    highlightLabel: 'Very high river-flood risk',
    baseLabel: 'Other countries',
    caption:
      'Highlighted = the eight monsoon-Asia countries flagged as very high river-flood risk. Location X (Cambodia) lies on the low Mekong floodplain near the delta with high riverside population density; Location Y (Laos) is upstream, mountainous and less densely populated. The same set is shown for both Question 6 and Question 7.',
  },
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Air pollution — reading data (Source B)',
    marks: 2,
    stem:
      'The air we breathe is an essential part of life on Earth — plants, animals and humans all depend on clean air to survive. The atmosphere also regulates temperature and shields living things from harmful radiation.\n\n' +
      'We all depend on clean air. Yet the thin layer of gases around our planet is under intense pressure. Around 99 % of the world’s population now breathes air that exceeds World Health Organization pollution guidelines, and outdoor (ambient) air pollution is linked to roughly 4.2 million premature deaths every year.\n\n' +
      'The evidence is clear that our air is being damaged. Air degradation is the decline in the overall quality of the air, most commonly caused by human activities that release fine particles and gases. It is occurring across the globe, but it is worst in fast-growing cities. We must take action. Clean air must be protected. (Source A — video transcript)\n\n' +
      '**Source B** below shows the main sources of outdoor air pollution in two contrasting cities — the inland megacity of Hazepur and the coastal city of Marisport — expressed as a percentage of fine-particle (PM2.5) emissions by source.',
    artefact: sourceB,
    tasks: [
      {
        label: 'a',
        text: 'Using the data from **Source B**, **identify** the biggest source of air pollution in Hazepur.',
        marks: 1,
        ph: 'One source — read the tallest Hazepur bar (Road transport, 32 %). A short answer is acceptable. More than one answer scores 0.',
      },
      {
        label: 'b',
        text: 'Using the data from **Source B**, **identify** which source contributes the most to air pollution in Marisport.',
        marks: 1,
        ph: 'One source — read the tallest Marisport bar (Construction & dust, 46 %). A short answer is acceptable. More than one answer scores 0.',
        // Source B already shows both cities together (Hazepur in the question context above,
        // Marisport read off the same grouped-bar chart), so the comparison reads directly.
        artefact: sourceB,
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Air pollution — human causes',
    marks: 4,
    stem: '**Source B** is repeated below for information.',
    artefact: sourceB,
    tasks: [
      {
        label: '',
        text: '**Explain** how one human activity causes air pollution.',
        marks: 4,
        ph: 'One human activity (e.g. road transport / burning fossil fuels) considered in detail, with reasons — build from a single cause to a full chain of effects on air quality.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — coral-reef bleaching action plan',
    marks: 8,
    stem:
      'As part of a unit of inquiry, an MYP year 5 class in Australia learned more about the effect of human actions on the marine biome and on the coastal communities who depend on it. The class was shown **Source C**, a marine scientist’s field report on the impact of coral bleaching on the people of the Great Barrier Reef coast.\n\n' +
      '**Source C** describes how rising sea temperatures and pollution are bleaching the reef, and how the lasting effects are reaching the fishing and tourism communities along the coast. The report covers reefs off Queensland, Australia, and records that: many coral colonies have turned white and died, fish catches near the reef have fallen, water that local people swim and fish in has become murkier, and dive-tourism businesses that hold cultural and economic value have lost customers.\n\n' +
      'Based on this source, the class decided to investigate how coral bleaching has changed the lives of coastal communities on the Great Barrier Reef. The class produced the action plan shown below to collect data. You will be asked to evaluate the action plan.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Source C — a marine scientist’s field report on coral bleaching and its impact on Great Barrier Reef communities (original recreation). Use the evaluation lenses and hover the dotted terms.',
      data: {
        kind: 'Secondary source — field report',
        title: 'Source C — coral bleaching on the Great Barrier Reef',
        attribution: 'Dr H. Marlow, Reef Field Station, Queensland, Australia, 2021.',
        paragraphs: [
          'Over the past two summers, marine heatwaves have pushed sea temperatures above the threshold that corals can tolerate. Stressed corals expel the algae that feed and colour them, leaving the reef bleached white. Where bleaching is severe and repeated, the coral dies.',
          'As the reef declines, the fish that shelter and feed among the coral move away or die. Local fishers report that catches close to the reef have fallen sharply, and many families who relied on the reef for food and income are struggling.',
          'Run-off from farming and coastal development has made the water murkier, which blocks sunlight and adds further stress to the surviving coral. Access to clean, clear water for fishing and recreation has decreased for many coastal residents.',
          'Dive and snorkel tourism, which holds both economic and cultural value for these communities, has lost visitors as the reef has lost its colour. Some long-established family businesses have closed, weakening the identity of towns that grew up around the reef.',
        ],
        glossary: {
          bleached: 'When corals lose the colourful algae living in their tissue, turning white and becoming more likely to die.',
          'marine heatwaves': 'Prolonged periods of unusually warm sea-surface temperatures.',
          'run-off': 'Water from rain or irrigation that flows over land into the sea, often carrying sediment and chemicals.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan.',
        artefact: {
          component: 'DataTableInteractive',
          caption:
            'The MYP class’s action plan, set out as a table — the marked stimulus. Statement of inquiry: Change in the natural environment can impact human identities and relationships. Research question: To what extent do changes in the marine environment impact coastal communities?',
          data: {
            title: 'Class action plan — coral bleaching & coastal communities',
            source: 'MYP year 5 class, Australia',
            caption:
              'Click a row to pin it while you evaluate that part of the plan. The plan was designed to investigate how coral bleaching has changed life in the four reef towns.',
            headers: ['Stage of the plan', 'What the class will do'],
            rows: [
              ['Procedure', 'Visit the 4 reef towns shown in Source C over two weeks and interview different families about how coral bleaching has changed their daily lives. Water-clarity readings will also be taken at each town.'],
              ['Sample size', '12 families total (3 families from each of the 4 reef towns).'],
              ['Primary data', 'Take 5 water-clarity readings at each town. Ask open-ended questions: a) Do you catch fewer fish because of bleaching? b) Is there still enough work in fishing or tourism? c) How has bleaching affected your children? d) How many family businesses have closed?'],
              ['Secondary data', 'Maps showing reef bleaching along the Queensland coast. Statistics on coral cover from marine science organizations.'],
            ],
          },
        },
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — design your own (biome)',
    marks: 12,
    stem:
      'You have seen an investigation into coral bleaching in the marine biome in question 3. You will now design your own investigation into a different human activity that is changing a biome that you have studied.\n\n' +
      '**Statement of inquiry:** Human activities can change the natural environment.',
    tasks: [
      {
        label: 'a',
        text: 'Use the statement of inquiry to **formulate** a clear and focused research question for an investigation into a biome you have studied.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (names a human activity and a location) and connected to the statement of inquiry. Re-wording the SoI, or reusing the Q3 RQ, scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question in 4(a) to the statement of inquiry.',
        marks: 4,
        ph: 'Build from stating relevance (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning (4) why the RQ connects to the SoI.',
      },
      {
        label: 'c',
        text: '**Outline** one challenge you might face in your investigation.',
        marks: 2,
        ph: 'State one challenge (1), then elaborate on the reason for it with brief detail (2), e.g. why collecting the relevant primary data would be difficult.',
      },
      {
        label: 'd',
        text: 'Excluding interviews, **explain** the benefit of using one other method of data collection in your investigation.',
        marks: 4,
        ph: 'Name one non-interview method (e.g. a survey) and explain its benefit in detail with reasons. Simply stating a method scores 0.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — Marisport urban heat & flood management',
    marks: 18,
    stem:
      'The site briefing below describes Marisport, a low-lying coastal city in a warm temperate region. You have been asked to create a presentation for the city council. Your aim is to persuade the council officials to adopt sustainable management strategies for the urban heat **and/or** coastal flooding problems in Marisport.\n\n' +
      'You will use the briefing below to support your presentation. It marks **two** threats with the labels **A** and **B** that your presentation will focus on (for example A = urban heat island, B = coastal flooding). In your script, refer to **A** and **B** and the locations shown, then write your script.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Marisport site briefing — the two threats your presentation will focus on are flagged as block A and block B; the remaining blocks describe other features of the city you can refer to. Hover a block to spotlight it.',
      data: {
        title: 'Marisport — coastal city site briefing',
        source: 'Marisport City Council',
        intro:
          'Marisport is a coastal city of 240,000 people. The dense city centre has little green space; new housing has spread onto reclaimed land beside the harbour. Refer to threats A and B in your script.',
        layout: 'grid' as const,
        blocks: [
          {
            heading: 'A — Urban heat island (city centre)',
            icon: '🌡',
            items: [
              'The concrete-and-glass city centre traps heat; summer temperatures run several degrees hotter than the surrounding countryside.',
              'Few trees or parks; little shade for residents during heatwaves.',
            ],
          },
          {
            heading: 'B — Coastal flooding (harbour district)',
            icon: '🌊',
            items: [
              'Low-lying reclaimed land beside the harbour floods at high spring tides and during storms.',
              'Sea defences are old; rising sea levels increase the flood risk each decade.',
            ],
          },
          {
            heading: 'Industrial waterfront',
            icon: '🏭',
            items: ['Factories and a busy port line the river mouth; warm waste water is released into the estuary.'],
          },
          {
            heading: 'Green corridor & wetland',
            icon: '🌿',
            items: ['A strip of wetland and parkland survives upstream; it cools the air and stores floodwater.'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script for your persuasive presentation to **explain** the sustainable management strategies you would recommend to address the two threats you have identified.\n\n' +
          'In your script, you must include:\n' +
          '• examples from your MYP studies\n' +
          '• reference(s) to your labelled briefing (A and B)\n' +
          '• a concluding statement or summary.',
        marks: 18,
        ph: 'A persuasive presentation script explaining sustainable management strategies for the two labelled threats (A urban heat, B coastal flooding), with MYP examples, references to A/B and a closing summary. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — global flood-risk map',
    marks: 6,
    stem:
      'The map below was produced by **World-Flood-Watch**, a global mapping organization. It highlights the countries of monsoon Asia that are at very high river-flood risk. Many of these countries lie on large, low-lying river floodplains where heavy monsoon rains cause severe seasonal flooding.\n\n' +
      'Use the highlighted thematic map in **Source D** (countries flagged as very high river-flood risk) to answer the parts below.',
    artefact: sourceD,
    tasks: [
      {
        label: 'a',
        text: 'Using **Source D**, **identify** the number of countries highlighted as being at very high river-flood risk.',
        marks: 1,
        ph: 'Count the highlighted countries in Source D (the very-high-flood-risk set): 8.',
      },
      {
        label: 'b',
        text: '**State** the origin of **Source D**.',
        marks: 1,
        ph: 'Name who produced the source (read the source attribution).',
      },
      {
        label: 'c',
        text: '**Outline** one value of **Source D** to a resident living in monsoon Asia.',
        marks: 2,
        ph: 'State one value of the map to a resident (1), then give a brief reason / elaboration (2), e.g. they can judge the flood risk and decide whether to live there.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of **Source D** for a resident living in monsoon Asia.',
        marks: 2,
        ph: 'State one limitation (1), then elaborate with brief detail (2), e.g. the map does not show the impacts of the flooding such as deaths or which areas within a country are worst hit.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justify — flood-defence investment (X or Y)',
    marks: 6,
    stem:
      'The regional government has decided to invest in flood-defence structures (raised embankments and early-warning systems). They need to decide whether to invest in **location X** (Cambodia) or **location Y** (Laos). Both are highlighted on the map in **Source D** (repeated below for information). Use the map and its caption — which describe each country’s position in the river basin and its population density — to compare the two sites.',
    artefact: sourceD,
    tasks: [
      {
        label: '',
        text: 'Using evidence from **Source D**, **justify** which location the government should invest in.',
        marks: 6,
        ph: 'Choose X (Cambodia) or Y (Laos) and justify it with in-depth, specific evidence from the map (position in the basin — low floodplain near the delta vs mountainous upstream — and population density). Simply selecting a location scores 0.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — primary vs secondary flood effects',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** do secondary effects of flooding pose a greater risk to people and property than primary effects?\n\n' +
          'In your essay, you must:\n' +
          '• include examples from your MYP studies to support your arguments\n' +
          '• refer to river flooding and/or coastal flooding\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing secondary vs primary flood effects, with ≥2 perspectives, named flood examples and geographical terms. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
