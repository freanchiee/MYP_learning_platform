import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2022 · Set 2 ISOMORPHIC VARIANT (v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-nov-2022 (same crit / command terms / marks / task shape).
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (B, 8) · Q3 (B, 12) · Q4 (A, 4)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (4) · Q7 (4) · Q8 (4) · Q9 (24)
 *
 * NEW scenario (surface only — construct invariants preserved):
 *   • Task 1: soil erosion and land degradation on the Loess Plateau in China — a
 *     reforestation NGO's action plan, sustainable wetland/peatland management, biomes.
 *   • Task 2: a Heritage Festival speech celebrating migration in an inland industrial city.
 *   • Task 3: the global PLASTIC-WASTE / RECYCLING trade — exported plastic dumped near
 *     Bangun village, Java, Indonesia — replacing the source's fast-fashion trade and the
 *     v1 e-waste trade.
 *
 * Per the I&S variant carve-out, each artefact uses a DIFFERENT component than BOTH the
 * source AND v1:
 *   Q1 → NetworkGraph        — source LocatedMap · v1 ChoroplethWorld
 *   Q2 → DataTableInteractive — source InfoGraphicPanel · v1 TimelineScrubber
 *   Q5 → InfoGraphicPanel    — source SourceDocViewer · v1 SlideDeck
 *   Q6 → PieChart (nested)   — source InteractiveChart · v1 DataTableInteractive
 *   Q7 → InteractiveChart    — source InfoGraphicPanel · v1 SourceDocViewer
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
  id: 'geography-nov-2022-v2',
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
    topic: 'Soil erosion & land degradation — the Loess Plateau',
    marks: 2,
    stem:
      'The Loess Plateau in north-central China was once one of the most severely eroded places on Earth. Centuries of tree-clearing, over-cultivation and grazing on its deep, dusty loess soils stripped the hillsides bare, so that every rainstorm washed huge amounts of soil into the Yellow River (see Source A).\n\n' +
      'Use Source A and your own knowledge to answer the questions that follow.',
    artefact: {
      component: 'NetworkGraph',
      caption:
        'Source A — Causes of land degradation on the Loess Plateau (original recreation). The central hub is the degraded plateau; each spoke is a driver of degradation. Hover or tap a spoke to read it.',
      data: {
        title: 'Source A — Why the Loess Plateau became degraded',
        source: 'Loess Plateau case study (recreated)',
        center: {
          label: 'Degraded Loess Plateau',
          detail:
            'Key facts: the Loess Plateau covers about 640,000 km² of deep, wind-blown silt soils. By the 1990s decades of tree-clearing and over-farming had left the slopes bare, and each year roughly 1.6 billion tonnes of eroded soil were washed into the Yellow River. Restoration since 1999 has re-greened large areas through terracing and tree-planting.',
          color: '#7c4a1e',
        },
        nodes: [
          {
            id: 'deforestation',
            label: 'Deforestation',
            color: '#2f9e44',
            detail: 'Human factor: forests cleared for fuel and farmland left the soil with no roots to hold it, so it washed away in storms.',
          },
          {
            id: 'overcultivation',
            label: 'Over-cultivation',
            color: '#e8590c',
            detail: 'Human factor: continuous ploughing of steep slopes for grain exhausted the soil and broke up its structure.',
          },
          {
            id: 'overgrazing',
            label: 'Overgrazing',
            color: '#9c36b5',
            detail: 'Human factor: too many goats and sheep stripped the grass cover, exposing the bare loess to erosion.',
          },
          {
            id: 'population',
            label: 'Population growth',
            color: '#1971c2',
            detail: 'Human factor: a growing rural population pushed farming and grazing onto ever steeper, more fragile land.',
          },
          {
            id: 'rainfall',
            label: 'Heavy summer rain',
            color: '#0b7285',
            detail: 'Natural factor: intense, concentrated summer downpours rapidly wash loose soil off the unprotected slopes.',
          },
          {
            id: 'drought',
            label: 'Drought & wind',
            color: '#f08c00',
            detail: 'Natural factor: dry spells and strong winds dry out and blow away the fine, loose loess particles.',
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** one human factor that has caused land degradation on the Loess Plateau.',
        marks: 1,
        ph: 'One human factor, e.g. deforestation/tree-clearing, over-cultivation, overgrazing, population growth. An unsustainable practice on its own scores 0.',
      },
      {
        label: 'b',
        text: '**Identify** one natural factor that has caused land degradation on the Loess Plateau.',
        marks: 1,
        ph: 'One natural factor, e.g. heavy summer rainfall, drought, strong winds, the loose loess soil structure.',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — the Loess Plateau restoration (NGO action plan)',
    marks: 8,
    stem:
      'Roots & Ridges is a non-governmental organization (NGO) that has been working in Shaanxi province, China, since 2008. They focus on reforesting and terracing the Loess Plateau and have created an action plan in order to finalize their yearly report.\n\n' +
      'You will be asked to evaluate this action plan, which is shown below as the NGO’s task-tracker table (each row is a step in finalizing this year’s report, with its current status).',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'The NGO’s task-tracker table — the marked stimulus. Hover a row to highlight it; click a row to pin the one you are reading.',
      data: {
        title: 'Roots & Ridges — Yearly-report task tracker',
        source: 'Roots & Ridges (NGO), Shaanxi · yearly report',
        caption:
          'The NGO’s action plan for finalizing this year’s report. “Done” tasks are complete; “In progress” tasks are being worked on; “Upcoming” tasks have not yet started.',
        headers: ['Task', 'Status', 'Detail'],
        rows: [
          ['Review funding & finalize budget', 'Done', 'Reviewed donor funding and finalized next year’s budget.'],
          [
            'Collect yearly results (Shaanxi)',
            'Done',
            '812 farmers trained; 5,900 hectares terraced; 4,400 hectares reforested; 148,000 trees planted in one year.',
          ],
          ['Read partner reports', 'Done', 'Read reports published by partnership organizations.'],
          [
            'Visit two villages & interview',
            'In progress',
            'Visit two villages and interview one person in each village about the impact of the project.',
          ],
          [
            'Analyse development indicators',
            'In progress',
            'Analyse the change in development indicators in China from 2020 to today: % of arable land; % of population in extreme poverty.',
          ],
          ['Set next year’s goal', 'Upcoming', 'Agree and set next year’s restoration goal — not yet started.'],
          ['Write yearly report', 'Upcoming', 'Write and publish the yearly report — not yet started.'],
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
        ph: 'One challenge, elaborated with a single impact (e.g. difficult to collect primary data from a large, waterlogged area such as the Flow Country peatlands).',
      },
      {
        label: 'd',
        text: '**Outline** one primary source, other than interview responses, that could be used to investigate your research question.',
        marks: 2,
        ph: 'One primary source (not interviews), elaborated, e.g. measure the difference in water-table depth between a re-wetted and a drained stretch of peatland.',
      },
      {
        label: 'e',
        text: '**Outline** one secondary source that could be used to investigate your research question.',
        marks: 2,
        ph: 'One secondary source, elaborated, e.g. journal articles on peatland-rewetting technology, to see how technology can combat unsustainable drainage.',
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
        ph: 'One impact of conserving your chosen biome considered in detail, with reasons (e.g. the Arctic/tundra biome stores carbon in frozen permafrost peat → protecting it keeps the ground frozen → carbon stays locked away → less CO₂/methane → less warming). If you choose a different biome than you discuss, you are marked on what you write.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — celebrating migration (Heritage Festival speech)',
    marks: 18,
    stem:
      'You have been selected to deliver a speech to celebrate migration at your city’s Heritage Festival. The event is a celebration of the different cultural backgrounds of your community.\n\n' +
      'As part of your research you have found a community noticeboard display in which two residents have posted their opposing perspectives on migration.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'The community noticeboard display — two residents post opposing perspectives on migration. Hover a panel to spotlight it. Use it to inform (or to counter) your celebratory speech.',
      data: {
        title: 'Community noticeboard — two perspectives on migration',
        source: 'Posts collected from a community noticeboard ahead of the Heritage Festival',
        layout: 'grid',
        intro:
          'Two residents of the industrial city have pinned their views on migration to the community noticeboard.',
        blocks: [
          {
            heading: 'Perspective 1 — Resident A',
            icon: '🗯',
            items: [
              '“Migration causes a drain on our economy; we don’t have enough jobs for the people already here.”',
              '“How can we support migrants moving into our city? Migration makes things worse for our own people.”',
            ],
          },
          {
            heading: 'Perspective 2 — Resident B',
            icon: '💬',
            items: [
              '“In the past, newcomers would assimilate by taking on aspects of our culture.”',
              '“Now, many don’t try to fit in and don’t speak our language.”',
            ],
          },
          {
            heading: 'Glossary',
            icon: '📖',
            items: [
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
    topic: 'The rise of plastic waste (data interpretation)',
    marks: 4,
    stem:
      'Look at **Source B** below and answer the questions that follow.\n\n' +
      '**Source B** — “The Rise of Plastic Waste”. The nested-ring chart compares the world’s plastic waste in 2010 (the inner ring) and in 2022 (the outer ring), split into two shares: the plastic that is recycled and the plastic that is discarded (landfilled, burned or dumped). Read the two rings to see how the split has changed.',
    artefact: {
      component: 'PieChart',
      caption:
        'Source B — “The Rise of Plastic Waste” (original recreation of an OECD Global Plastics dataset). Outer ring = 2022, inner ring = 2010. Hover a slice or legend row to read its share.',
      data: {
        kind: 'nested',
        title: 'The Rise of Plastic Waste — recycled vs discarded',
        source: 'OECD Global Plastics Outlook (recreated)',
        unit: '%',
        series: [
          { name: 'Discarded (landfilled, burned or dumped) — 2022', value: 91, color: '#c2255c' },
          { name: 'Recycled — 2022', value: 9, color: '#2f9e44' },
        ],
        innerSeries: [
          { name: 'Discarded — 2010', value: 86, color: '#e8590c' },
          { name: 'Recycled — 2010', value: 14, color: '#0b7285' },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of the data.',
        marks: 1,
        ph: 'The source/author of the data (e.g. the OECD Global Plastics Outlook).',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between the amount of plastic waste produced and the share of plastic that is recycled.',
        marks: 3,
        ph: 'Describe the inverse relationship — as plastic waste produced increases, the share recycled decreases — elaborated (we produce more plastic but recycle a smaller proportion of it; the recycled share fell from 14% in 2010 to 9% in 2022). Reference to data is helpful but not essential.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — plastic-waste import graph',
    marks: 4,
    stem:
      'A government official from Surabaya in Indonesia is using the graph in **Source C** below to demonstrate the impacts of imported plastic waste on people and the environment.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source C — “Plastic waste imported into Indonesia, 2015–2021” (original recreation). Toggle a series in the legend; hover a point to read its value.',
      data: {
        kind: 'bar',
        title: 'Plastic waste imported into Indonesia (thousand tonnes)',
        source: 'Graph shown to a government official, Surabaya, Indonesia',
        x: { label: 'Year', categories: ['2015', '2017', '2019', '2021'] },
        y: { label: 'Imported plastic waste (thousand tonnes)', min: 0, max: 350, ticks: [0, 50, 100, 150, 200, 250, 300, 350], unit: '' },
        series: [
          { name: 'Imported plastic waste', color: '#1971c2', points: [120, 320, 230, 195] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** one value or one limitation of the graph to the government official.',
        marks: 4,
        ph: 'One value OR one limitation considered in detail, with reasons (e.g. it provides figures on how much plastic waste is imported into Indonesia each year, so the official can quantify the scale of the problem). Build from stating (1) → outlining (2) → describing (3) → explaining (4).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Individual responsibility for plastic waste',
    marks: 4,
    stem:
      'Source B and Source C above are repeated here for information.\n\n' +
      'Consider who is responsible for reducing the impact of plastic waste on people and the environment.',
    tasks: [
      {
        label: '',
        text:
          '**Justify** how the responsibility to reduce the impact of plastic waste lies with the individual.',
        marks: 4,
        ph: 'One argument considered in detail, with reasons (e.g. every person can choose to refuse single-use plastics and reuse containers → reduced demand drives down plastic production → less plastic is discarded and exported → less ends up dumped). Build from stating (1) → outlining (2) → describing (3) → justifying with reasons (4).',
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
