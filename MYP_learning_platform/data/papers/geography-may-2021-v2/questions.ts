import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2021 · Set 2 ISOMORPHIC VARIANT (geography-may-2021-v2).
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-may-2021: identical paperMeta (bar id), identical question/task
 * structure, criteria, marks and command terms. ONLY the surface scenario + artefact
 * components change (a genuinely new context per the I&S variant carve-out — and the
 * artefacts differ from BOTH the source AND Set 1).
 *
 * NEW scenarios (3-task / 80-mark blueprint preserved):
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *     — freshwater stress / water degradation; investigation into wetland (peatland) drainage.
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18) — glacier-fed mountain town of Tarnvik,
 *     meltwater flooding & mining pollution management.
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (D, 6) · Q7 (D, 6) · Q8 (24)
 *     — wildfire-hazard GIS across a Mediterranean region; essay on wildfire effects.
 *
 * Artefact components are DELIBERATELY different from BOTH the source AND Set 1:
 *   Q1/Q2 → DataTableInteractive (source PieChart · v1 InteractiveChart)
 *   Q3    → SlideDeck + TimelineScrubber (source ImageCompareSlider+InfoGraphicPanel · v1 SourceDocViewer+DataTableInteractive)
 *   Q5    → NetworkGraph (source DragAnnotate · v1 InfoGraphicPanel)
 *   Q6/Q7 → InfoGraphicPanel (source LocatedMap · v1 ChoroplethWorld)
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
  id: 'geography-may-2021-v2',
  subject: 'Geography',
  session: 'May',
  year: 2021,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source B — interactive data table (causes of freshwater degradation, two basins) ──
// Value-read artefact. Each basin's four causes are given in km³ of water withdrawn per
// year (the volume that degrades the freshwater system through over-abstraction & pollution).
//   Indus-type basin total = 278 km³ (164 + 58 + 41 + 15). Biggest cause = Irrigation (164).
//   Rhine-type basin total = 96 km³ (12 + 44 + 28 + 12). Biggest cause = Industry (44).
// Indus basin has the most total water degraded (278 vs 96 km³). Used by Q1 and Q2.
const sourceBIndus = {
  component: 'DataTableInteractive',
  caption:
    'Source B — main causes of freshwater degradation in the Indara basin, given as the volume of water withdrawn per year in cubic kilometres (km³). Click a row to pin it while you read off a value. Indara basin total = 278 km³.',
  data: {
    title: 'Causes of freshwater degradation — Indara basin (278 km³ per year)',
    source: 'Source B',
    caption: 'Cubic kilometres of water withdrawn per year, by cause. The larger the volume, the greater the pressure that cause places on the freshwater system. Indara basin total = 278 km³.',
    headers: ['Cause of freshwater degradation', 'Water withdrawn (km³ per year)'],
    rows: [
      ['Irrigation for farming', '164'],
      ['Domestic & municipal use', '58'],
      ['Industry & power', '41'],
      ['Over-abstraction of groundwater', '15'],
    ],
  },
}
const sourceBRhine = {
  component: 'DataTableInteractive',
  caption:
    'Source B — main causes of freshwater degradation in the Veltmark basin, given as the volume of water withdrawn per year in cubic kilometres (km³). Veltmark basin total = 96 km³.',
  data: {
    title: 'Causes of freshwater degradation — Veltmark basin (96 km³ per year)',
    source: 'Source B',
    caption: 'Cubic kilometres of water withdrawn per year, by cause. Veltmark basin total = 96 km³ — much less than the Indara basin (278 km³).',
    headers: ['Cause of freshwater degradation', 'Water withdrawn (km³ per year)'],
    rows: [
      ['Industry & power', '44'],
      ['Domestic & municipal use', '28'],
      ['Irrigation for farming', '12'],
      ['Over-abstraction of groundwater', '12'],
    ],
  },
}

// ── Source D — Mediterranean wildfire-hazard GIS briefing (reused by Q6 and Q7) ──
// InfoGraphicPanel in 'grid' mode: each block is one mapped hazard zone in the
// Costa-Brava-type region of Aldoria, with its wildfire-risk class, recent fire history
// and population. The risk class lets Q6a count the "very high risk" zones (= 3), and the
// X/Y blocks are the two candidate sites for fire-resistant investment in Q7.
const sourceD = {
  component: 'InfoGraphicPanel',
  caption:
    'Source D — Wildfire-Watch GIS hazard briefing for the Aldoria region, a hot, dry Mediterranean coastland. Each block is one mapped zone with its wildfire-risk class, fires recorded 2010–2020 and population. Locations X and Y are the two candidate sites for fire-resistant investment. Hover a zone to spotlight it.',
  data: {
    title: 'Source D — Aldoria wildfire-hazard GIS',
    source: 'Wildfire-Watch',
    intro:
      'Aldoria is a Mediterranean region of dry pine forest, scrubland and coastal towns. Wildfire-Watch classes each zone as low, moderate, high or very high wildfire risk from fuel load, slope and summer drought. The same briefing is shown for both Question 6 and Question 7.',
    layout: 'grid' as const,
    blocks: [
      {
        heading: 'Pinhal Ridge — VERY HIGH risk',
        icon: '🔥',
        items: ['Steep, dry pine forest with heavy fuel load.', 'Fires recorded 2010–2020: 22.', 'Population: 2,000 in scattered hamlets.'],
      },
      {
        heading: 'Location X · Solano Hills — VERY HIGH risk',
        icon: '🔥',
        items: ['South-facing scrub slopes above a resort town; very dry summers.', 'Fires recorded 2010–2020: 19.', 'Population: 28,000 — a dense town packed against the forest edge.'],
      },
      {
        heading: 'Costa Verde — HIGH risk',
        icon: '🟠',
        items: ['Coastal pinewood beside holiday villages.', 'Fires recorded 2010–2020: 11.', 'Population: 9,000.'],
      },
      {
        heading: 'Location Y · Norte Plateau — VERY HIGH risk',
        icon: '🔥',
        items: ['Remote upland scrub, hard to reach by road.', 'Fires recorded 2010–2020: 16.', 'Population: 1,200 — sparse farming hamlets.'],
      },
      {
        heading: 'Vega Valley — MODERATE risk',
        icon: '🟡',
        items: ['Irrigated farmland in the valley floor; lower fuel load.', 'Fires recorded 2010–2020: 4.', 'Population: 14,000.'],
      },
      {
        heading: 'Mar Bay — LOW risk',
        icon: '🟢',
        items: ['Built-up coastal city with little vegetation.', 'Fires recorded 2010–2020: 1.', 'Population: 60,000.'],
      },
    ],
  },
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Freshwater degradation — reading data (Source B)',
    marks: 2,
    stem:
      'Fresh water is an essential part of life on Earth — plants, animals and humans all depend on it to stay alive. It is a source of drinking water, food production and habitat for countless species.\n\n' +
      'We all depend on fresh water. Yet less than 1 % of the water on Earth is fresh water that we can readily use, and it is under intense pressure. Around 2 billion people already live in countries experiencing high water stress, and demand keeps rising as populations and farming grow.\n\n' +
      'The evidence is clear that our fresh water is being damaged. Freshwater degradation is the decline in the quantity and quality of usable fresh water, most commonly caused by human activities that over-abstract and pollute rivers, lakes and aquifers. It is occurring across the globe. We must take action. Fresh water must be protected. (Source A — video transcript)\n\n' +
      '**Source B** below shows the main causes of freshwater degradation in two contrasting river basins — the dry farming basin of Indara and the industrial basin of Veltmark — given as the volume of water withdrawn per year in cubic kilometres (km³).',
    artefact: sourceBIndus,
    tasks: [
      {
        label: 'a',
        text: 'Using the data from **Source B**, **identify** the biggest cause of freshwater degradation in the Indara basin.',
        marks: 1,
        ph: 'One cause — read the largest row of the Indara table (Irrigation for farming, 164 km³). A short answer is acceptable. More than one answer scores 0.',
      },
      {
        label: 'b',
        text: 'Using the data from **Source B**, **identify** which basin has the most total fresh water degraded.',
        marks: 1,
        ph: 'One basin — compare the two table totals (Indara 278 km³ vs Veltmark 96 km³). A short answer is acceptable.',
        // Source B presents both basins; Indara is in the question context slot above,
        // Veltmark is shown here so the Indara-vs-Veltmark total comparison can be read directly.
        artefact: sourceBRhine,
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Freshwater degradation — human causes',
    marks: 4,
    stem: '**Source B** is repeated below for information.',
    artefact: sourceBRhine,
    tasks: [
      {
        label: '',
        text: '**Explain** how one human activity causes freshwater degradation.',
        marks: 4,
        ph: 'One human activity (e.g. irrigation for farming) considered in detail, with reasons — build from a single cause to a full chain of effects on the freshwater system.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — peatland drainage action plan',
    marks: 8,
    stem:
      'As part of a unit of inquiry, an MYP year 5 class in Ireland learned more about the effect of human actions on the wetland biome and on the rural communities who depend on it. The class was shown **Source C**, a set of slides about the impact of peatland drainage on the people of the Glanmore bog in western Ireland.\n\n' +
      '**Source C** is a slide set explaining how cutting and draining the peat bog for fuel and farmland is changing the wetland, and how the lasting effects reach the small farming communities living around it. The slides record that: large areas of bog have been drained and dried out, water held in the peat has been lost so local wells run low, the dried peat releases stored carbon and the land subsides, and traditional turf-cutting places that hold cultural value have been lost.\n\n' +
      'Based on this source, the class decided to investigate how peatland drainage has changed the lives of rural communities around the Glanmore bog. The class produced the action plan shown below to collect data. You will be asked to evaluate the action plan.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Source C — a slide set on peatland drainage and its impact on Glanmore bog communities (original recreation). Use the arrows or page dots to read each slide.',
      data: {
        title: 'Source C — peatland drainage at the Glanmore bog',
        source: 'County wetlands study group, Ireland, 2021',
        slides: [
          {
            title: 'A drying wetland',
            body: 'For decades the Glanmore bog has been drained with ditches and cut for turf to burn as fuel and to clear land for grazing. Large areas of the bog have dried out, and the spongy living surface that once held water has been lost.',
            bullets: ['Bog drained by ditches', 'Peat cut for fuel and farmland', 'The wet surface has dried and shrunk'],
          },
          {
            title: 'Water and wells',
            body: 'A healthy bog stores rainwater like a sponge and releases it slowly. As the peat dries, that store is lost: streams run lower in summer and several farm wells around the bog now run dry in dry spells.',
            bullets: ['Lost water store', 'Lower summer streamflow', 'Farm wells running low'],
          },
          {
            title: 'Carbon and subsidence',
            body: 'Drained peat decays and releases the carbon it had locked away for thousands of years, adding to climate change. The drying ground also subsides — it sinks and cracks — damaging tracks and field boundaries.',
            bullets: ['Stored carbon released', 'Land subsides and cracks', 'Damage to tracks and fields'],
          },
          {
            title: 'A changing way of life',
            body: 'Turf-cutting plots passed down through families, and the bog paths walked for generations, hold cultural value for the community. As the bog is drained and fenced, these places — and the identity tied to them — are being lost.',
            bullets: ['Loss of traditional turf plots', 'Loss of culturally valued paths', 'A weakening sense of place'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan.',
        artefact: {
          component: 'TimelineScrubber',
          caption:
            'The MYP class’s action plan, set out as a dated four-week schedule — the marked stimulus. Statement of inquiry: Change in the natural environment can impact human identities and relationships. Research question: To what extent does draining the wetland impact the rural communities around the Glanmore bog? Drag the scrubber or click a marker to read each stage.',
          data: {
            title: 'Class action plan — peatland drainage & rural communities',
            source: 'MYP year 5 class, Ireland',
            events: [
              {
                date: 'Week 1',
                label: 'Procedure — visit 4 villages',
                detail: 'Visit the 4 villages around the bog and interview different families to understand how peatland drainage has changed their daily lives. Water-table depth will also be measured in the bog.',
              },
              {
                date: 'Week 2',
                label: 'Sample size — 12 families',
                detail: '12 families total (3 families from each of the 4 villages) will be interviewed.',
              },
              {
                date: 'Week 3',
                label: 'Primary data — readings & questions',
                detail: 'Take 5 water-table readings in each village area. Ask open-ended questions: a) Has your well water changed because of the drainage? b) Can you still cut turf where you used to? c) How has the drained bog affected your children? d) How many traditional turf-cutting places have been lost?',
              },
              {
                date: 'Week 4',
                label: 'Secondary data — maps & statistics',
                detail: 'Collect maps showing where the bog has been drained, and statistics on peatland loss from wetland-conservation organizations.',
              },
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
      'You have seen an investigation into peatland drainage in the wetland biome in question 3. You will now design your own investigation into a different human activity that is changing a biome that you have studied.\n\n' +
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
    topic: 'Communicating — Tarnvik meltwater & mining management',
    marks: 18,
    stem:
      'The network diagram below describes Tarnvik, a small town in a glacier-fed mountain valley. You have been asked to create a presentation for the valley authority. Your aim is to persuade the authority officials to adopt sustainable management strategies for the meltwater river **and/or** mountain water system in Tarnvik.\n\n' +
      'You will use the diagram below to support your presentation. It links the town to **two** threats labelled **A** and **B** that your presentation will focus on (for example A = glacial-meltwater flooding, B = mining water pollution), each connected to the impacts it causes. In your script, refer to **A** and **B** and the impacts shown, then write your script.',
    artefact: {
      component: 'NetworkGraph',
      caption:
        'Tarnvik water-system map — the town (hub) is linked to threat A and threat B, and each threat is linked to the impacts it causes downstream. Hover or click a node to read its detail.',
      data: {
        title: 'Tarnvik — mountain water system: threats and impacts',
        source: 'Tarnvik valley authority',
        center: { label: 'Tarnvik town', detail: 'A town of 6,000 in a glacier-fed valley; its river supplies drinking water, farming and tourism. Two threats (A and B) put this water system at risk.', color: '#334155' },
        nodes: [
          { id: 'A', label: 'A — Glacial-meltwater flooding', color: '#1971c2', detail: 'Warming has accelerated glacier melt; a meltwater lake above the town could burst (a glacial-lake-outburst flood), and summer melt peaks now flood the valley floor.' },
          { id: 'B', label: 'B — Mining water pollution', color: '#e8590c', detail: 'An upstream mine discharges sediment and toxic metals into the meltwater river, polluting the water the town relies on.' },
          { id: 'i1', label: 'Floods homes & farmland', color: '#74c0fc', detail: 'Impact of A: sudden high flows inundate riverside homes and farm fields on the valley floor.' },
          { id: 'i2', label: 'Damages the road & bridge', color: '#74c0fc', detail: 'Impact of A: flood water scours and washes out the single valley road and bridge, cutting the town off.' },
          { id: 'i3', label: 'Unsafe drinking water', color: '#ffa94d', detail: 'Impact of B: metals and sediment make the river water unsafe to drink and treat.' },
          { id: 'i4', label: 'Harms fish & tourism', color: '#ffa94d', detail: 'Impact of B: pollution kills river fish and deters the anglers and walkers the town depends on.' },
        ],
        edges: [
          { from: 'A', to: 'i1' },
          { from: 'A', to: 'i2' },
          { from: 'B', to: 'i3' },
          { from: 'B', to: 'i4' },
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
          '• reference(s) to your labelled diagram (A and B)\n' +
          '• a concluding statement or summary.',
        marks: 18,
        ph: 'A persuasive presentation script explaining sustainable management strategies for the two labelled threats (A meltwater flooding, B mining pollution), with MYP examples, references to A/B and a closing summary. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Aldoria wildfire GIS',
    marks: 6,
    stem:
      'The briefing below was produced by **Wildfire-Watch**, a global hazard-mapping organization. It maps wildfire risk across the Aldoria region, a hot, dry Mediterranean coastland. The region’s dry pine forests and scrubland burn easily in the long summer droughts.\n\n' +
      'Use the mapped hazard zones in **Source D** (each zone shown with its wildfire-risk class, fires recorded 2010–2020 and population) to answer the parts below.',
    artefact: sourceD,
    tasks: [
      {
        label: 'a',
        text: 'Using **Source D**, **identify** the number of zones classed as being at very high wildfire risk.',
        marks: 1,
        ph: 'Count the zones with the “very high risk” class in Source D (Pinhal Ridge, Solano Hills/X and Norte Plateau/Y): 3.',
      },
      {
        label: 'b',
        text: '**State** the origin of **Source D**.',
        marks: 1,
        ph: 'Name who produced the source (read the source attribution).',
      },
      {
        label: 'c',
        text: '**Outline** one value of **Source D** to a resident living in the Aldoria region.',
        marks: 2,
        ph: 'State one value of the briefing to a resident (1), then give a brief reason / elaboration (2), e.g. they can judge the fire risk and decide whether to live there.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of **Source D** for a resident living in the Aldoria region.',
        marks: 2,
        ph: 'State one limitation (1), then elaborate with brief detail (2), e.g. the briefing does not show the impacts of the fires such as deaths or which streets within a zone are worst hit.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justify — fire-resistant investment (X or Y)',
    marks: 6,
    stem:
      'The regional government has decided to invest in fire-resistant infrastructure (firebreaks, water stores and early-warning systems). They need to decide whether to invest in **location X** (Solano Hills) or **location Y** (Norte Plateau). Both zones are mapped in **Source D** (repeated below for information). Use the briefing — which gives each zone’s fire history and population — to compare the two sites.',
    artefact: sourceD,
    tasks: [
      {
        label: '',
        text: 'Using evidence from **Source D**, **justify** which location the government should invest in.',
        marks: 6,
        ph: 'Choose X (Solano Hills) or Y (Norte Plateau) and justify it with in-depth, specific evidence from the briefing (number of fires recorded, very-high-risk class and population at risk). Simply selecting a location scores 0.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — primary vs secondary wildfire effects',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** do secondary effects of wildfires pose a greater risk to people and property than primary effects?\n\n' +
          'In your essay, you must:\n' +
          '• include examples from your MYP studies to support your arguments\n' +
          '• refer to forest fires and/or scrubland fires\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing secondary vs primary wildfire effects, with ≥2 perspectives, named wildfire examples and geographical terms. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
