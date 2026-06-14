import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2024 · Set 2 ISOMORPHIC VARIANT (geography-nov-2024-v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-nov-2024 (N24). Total 80 marks, 3 tasks, same blueprint:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (D, 24)
 *
 * NEW SCENARIO (surface only — construct invariants preserved): coastal settlement &
 * land-use change — deforestation and forest loss (Amazon/Brazil, Indonesia), environmental
 * (climate-displacement) migration changing population distributions, and tropical-cyclone /
 * flood vulnerability of coastal cities (Philippines — Manila vs Cebu) + the global response to
 * deforestation and biodiversity loss.
 *
 * Each artefact-bearing question uses a DIFFERENT component than BOTH the source AND Set 1 (I&S
 * carve-out — the artefact component changes with the scenario):
 *   Q1  → DataTableInteractive (source: InteractiveChart · v1: PieChart) — coastal-population share by region
 *   Q3  → TimelineScrubber     (source: SlideDeck       · v1: InfoGraphicPanel) — dated investigation plan
 *   Q6  → InteractiveChart     (source: ChoroplethWorld · v1: DataTableInteractive) — Source A national cyclone-risk index (bar)
 *   Q7  → VennOverlap          (source: ChoroplethWorld · v1: LocatedMap) — Source B Manila vs Cebu risk comparison
 *   Q8  → InfoGraphicPanel     (source: SourceDocViewer · v1: SlideDeck) — UN biodiversity-summit transcript (grid)
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
  id: 'geography-nov-2024-v2',
  subject: 'Geography',
  session: 'November',
  year: 2024,
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
    topic: 'Coastal populations — reading an infographic',
    marks: 2,
    stem:
      'The infographic below shows where people live in 2022. It gives the estimated share of each world region’s population that lives in the low-elevation coastal zone (land less than 10 metres above sea level, within reach of coastal flooding). Look at the infographic and answer the questions that follow.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Share of the Population Living in the Low-Elevation Coastal Zone, by World Region (2022), in %. Source: UN-Habitat / coastal-population dataset. Hover a row to highlight it; click to pin the row you are reading.',
      data: {
        title: 'Share of the Population Living in the Low-Elevation Coastal Zone, by World Region (2022)',
        source: 'UN-Habitat coastal-population dataset (2022)',
        headers: ['World region', 'Population in the coastal zone (%)'],
        rows: [
          ['Asia', '38'],
          ['Oceania', '27'],
          ['North America', '14'],
          ['Africa', '12'],
          ['Europe', '11'],
          ['Latin America/Caribbean', '10'],
        ],
        caption:
          'Reading down the table, Asia has by far the largest share of its population living in the low-elevation coastal zone, while Latin America/Caribbean has the smallest.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the region with the highest percentage of people living in the low-elevation coastal zone.',
        marks: 1,
        ph: 'Read the values off the infographic and name the region with the largest coastal-zone share.',
      },
      {
        label: 'b',
        text: '**Select** the level of coastal exposure for the Latin America/Caribbean region (Low, Moderate or High).',
        marks: 1,
        ph: 'A region with the smallest coastal-zone share (10%) — only about one in ten of its people live near the coast — has which level of coastal exposure?',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Land-use change — causes of deforestation',
    marks: 4,
    stem: 'Many forests around the world are being lost rapidly to deforestation.',
    tasks: [
      {
        label: '',
        text: '**Explain** one cause of deforestation.',
        marks: 4,
        ph: 'One cause considered in detail with reasons (e.g. demand for farmland → forest is cleared to grow crops or graze cattle → trees are permanently removed).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating an action plan (Amazon deforestation)',
    marks: 8,
    stem:
      'In the state of Pará in the Brazilian Amazon, the area of rainforest being cleared each year is growing. A regional official will investigate the impacts of deforestation in their region so that the regional government can take action.\n\n' +
      'The regional official needs to present their action plan for their investigation to the regional government for approval. They want you to evaluate the action plan before they submit it and have shared it with you as the dated timeline below. Step through the stages of their plan.',
    artefact: {
      component: 'TimelineScrubber',
      caption:
        'The regional official’s investigation action plan, shown as a dated timeline. Drag the handle, click a marker, or use the arrow keys to step through the four stages — this action plan is the marked stimulus.',
      data: {
        title: 'Regional official’s action plan — investigating deforestation in Pará, Brazil',
        source: 'Regional official → you (evaluator)',
        events: [
          {
            date: 'Mar 2024',
            label: 'Plan agreed',
            detail:
              'Investigation agreed: “The impact of deforestation in my region of Pará in the Brazilian Amazon.”',
          },
          {
            date: 'Apr 2024',
            label: 'Stage 1 · Collection of data (≈ four weeks)',
            detail:
              'Interview 30 farmers living on the edge of the rainforest · identify forest-loss trends using satellite data from 2020 · collect data on the number of recorded forest fires · collect timber-export and cattle-ranching income data for the last year.',
          },
          {
            date: 'May 2024',
            label: 'Stage 2 · Presentation and analysis of data (≈ two weeks)',
            detail:
              'Annual deforestation rate: 1.9% of the region’s forest per year · forest area for region: 12 480 000 hectares · use spreadsheets to create graphs to help analyse the data.',
          },
          {
            date: 'Jun 2024',
            label: 'Stage 3 · Prepare report (≈ two weeks)',
            detail:
              'Structure the report under the headings: Social impacts · Economic impacts · Environmental impacts · Political impacts · cite sources to create a reference list.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the regional official’s investigation.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the action plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — environmental migration & changing populations',
    marks: 12,
    stem:
      'You are a journalist working for the United Nations Environment Programme and will write an article for the website. The purpose of the article is to help readers understand the role of environmental (climate-displacement) migration in changing population structures around the world. You will formulate your investigation around the following statement of inquiry.\n\n' +
      '**Statement of Inquiry:** Changes in populations can be impacted by time, place and space.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question based on the statement of inquiry.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a specific displacement movement, place or time period) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** how your research question will help you to understand the role that environmental migration has in changing population structures.',
        marks: 4,
        ph: 'Give reasons, in detail, why the RQ is relevant to the SoI — build from a simple connection to a fully justified one (e.g. link flooding → people moving inland → changing rural and urban population structures).',
      },
      {
        label: 'c',
        text: '**Outline** one challenge that you might face in your investigation.',
        marks: 2,
        ph: 'State and elaborate one challenge (e.g. displaced people may be hard to trace once they have moved, so there will not be enough qualitative data).',
      },
      {
        label: 'd',
        text: '**Outline** how you would attempt to overcome the challenge you outlined in part (c).',
        marks: 2,
        ph: 'State and elaborate one way to overcome it (e.g. collect quantitative data by carrying out a survey).',
      },
      {
        label: 'e',
        text: '**List** two relevant individuals or groups that you would interview to help your investigation.',
        marks: 2,
        ph: 'Two specific people/groups relevant to YOUR investigation (e.g. flood-displaced families in Bangladesh; residents of the host city; aid workers; local government).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — sustainable land use & farming (speech)',
    marks: 18,
    stem:
      'You work for a company which clears and farms land in forested areas to grow crops. Some residents have raised concerns about the sustainability of clearing land for farming in the local area. There will be a vote on whether to allow your company to continue farming in the area. You must gain the support of locals so that they vote in your favour.\n\n' +
      'A community meeting has been arranged where you will give a speech.\n\n' +
      'Before you write, name the location and the crop or land use involved (for example — Location: Riau Province, Sumatra, Indonesia · Land use: Certified sustainable palm-oil plantation).',
    tasks: [
      {
        label: '',
        text:
          'Your speech must **explain** two ways that your company farms the land sustainably.\n\n' +
          'In your speech, you should:\n' +
          '• name the location and the crop or land use involved\n' +
          '• include an introduction/greeting to the audience, a body and a conclusion/closing argument\n' +
          '• use persuasive language appropriate to a speech for an audience of local residents.',
        marks: 18,
        ph: 'A persuasive speech explaining two ways your company farms sustainably. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — global tropical-cyclone risk index (Philippines context)',
    marks: 6,
    stem:
      'A policy maker is researching the impact of tropical cyclones in the Philippines and they have found the chart below (**Source A**).\n\n' +
      '**Source A** — “National Tropical-Cyclone Risk Index, 2021”. The cyclone risk of a country can be measured by how exposed it is to tropical storms and whether it can adapt to them. The chart gives each country a single national index value on a 0–100 scale (the higher the value, the greater the cyclone risk). It reports one value for each whole country.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source A — National Tropical-Cyclone Risk Index, 2021 (original recreation). The chart gives ONE index value per whole country. Hover a bar to read its exact value; click a legend chip to toggle the series.',
      data: {
        kind: 'bar',
        title: 'National Tropical-Cyclone Risk Index, 2021',
        source: 'Recreated dataset (after a global cyclone-risk index)',
        x: {
          label: 'Country',
          categories: ['Philippines', 'Bangladesh', 'Japan', 'Vietnam', 'Mexico', 'United States', 'Spain'],
        },
        y: {
          label: 'Cyclone-risk index (0–100)',
          min: 0,
          max: 100,
          ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        },
        series: [
          {
            name: 'Cyclone-risk index',
            color: '#0b7285',
            points: [86, 79, 64, 58, 41, 33, 9],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of **Source A**.',
        marks: 2,
        ph: 'State and elaborate the purpose (e.g. it informs people about tropical-cyclone risk by determining the countries most at risk).',
      },
      {
        label: 'b',
        text: '**Outline** one value of **Source A** to the policy maker researching the impact of tropical cyclones in the Philippines.',
        marks: 2,
        ph: 'State and elaborate one value (e.g. the chart comes from a reliable source, so the policy maker can trust the information).',
      },
      {
        label: 'c',
        text: '**Outline** one limitation of **Source A** to the policy maker researching the impact of tropical cyclones in the Philippines.',
        marks: 2,
        ph: 'State and elaborate one limitation (e.g. it gives one value for the whole country rather than by region, which is not specific enough).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Thinking critically — Manila vs Cebu cyclone impact (justify)',
    marks: 6,
    stem:
      'The Philippines is affected by tropical cyclones and flooding. A policy maker has compared the risks to two cities in the Philippines: **Manila** and **Cebu City**. The comparison (**Source B**) sorts the risk factors that apply to each city, with the factors that apply to BOTH cities placed in the overlap.\n\n' +
      'Two city fact panels accompany the comparison:\n' +
      '• **Manila** — capital city of the Philippines; in 2019 hosted 8.0 million tourists; population density 46 000 people per km²; trade exports 2022: US$58 billion. Manila sits on a low-lying coastal plain on Manila Bay, much of it less than 5 m above sea level, and floods badly during typhoons.\n' +
      '• **Cebu City** — second-largest metro area in the Philippines; in 2019 hosted 3.4 million tourists; population density 2900 people per km²; trade exports 2022: US$11 billion. Cebu City is built partly on higher, sloping ground away from the bay, so a smaller share of it is at risk of coastal flooding.\n\n' +
      'Look at the source and answer the question that follows.',
    artefact: {
      component: 'VennOverlap',
      caption:
        'Source B — risk factors for Manila and Cebu City compared (original recreation). Factors shared by BOTH cities sit in the overlap; the city fact panels above carry the figures to weigh up.',
      data: {
        title: 'Source B — tropical-cyclone & flood risk: Manila vs Cebu City',
        source: 'Recreated risk comparison',
        setA: {
          label: 'Manila (only)',
          color: '#e8590c',
          items: ['Low-lying coastal plain', 'Very high density (46 000/km²)', 'Exports US$58bn'],
        },
        setB: {
          label: 'Cebu City (only)',
          color: '#1971c2',
          items: ['Higher, sloping ground', 'Lower density (2900/km²)', 'Exports US$11bn'],
        },
        overlapLabel: 'Both: hit by typhoons',
        caption:
          'Low-lying coastal Manila has far more people, denser settlement and much larger exports exposed to typhoon flooding than higher-ground Cebu City, so a major cyclone would have a more significant negative impact on Manila.',
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to **both** cities in **Source B**, **justify** whether Manila or Cebu City will be impacted more by tropical cyclones.\n\n' +
          'Note: either location can be selected, but you must refer to both cities and give reasons for your choice.',
        marks: 6,
        ph: 'Choose a city and justify it with reference to BOTH cities (e.g. low-lying, denser, higher-export Manila is more exposed to typhoon flooding than higher-ground Cebu City). Naming a location with no reason scores 0.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — responding to deforestation & biodiversity loss',
    marks: 24,
    stem:
      'Read the summit briefing below (the transcript of the opening address, presented as a poster) and answer the question that follows.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'The opening-address transcript, presented as a briefing poster — the UN, the biodiversity summits (COPs) and the call for a global response to deforestation and biodiversity loss. Hover (or tap) a panel to spotlight it.',
      data: {
        layout: 'grid',
        title: 'UN Biodiversity Conference — the global response to deforestation',
        source: 'UN Biodiversity Conference (COP15, 2022) · António Guterres, UN Secretary-General',
        intro:
          'Since 1994, the UN has brought together almost every country for global biodiversity summits, called COPs (“Conference of the Parties”). At COP15 in 2022, the UN Secretary-General opened the conference with this address.',
        blocks: [
          {
            icon: '🌍',
            heading: 'The summit',
            items: [
              'Almost every country meets to agree action on nature',
              'COP15 set a goal to protect 30% of land and sea by 2030',
            ],
          },
          {
            icon: '⚠️',
            heading: 'The warning',
            items: [
              '“Humanity has become a weapon of mass extinction.”',
              'Forests are being cleared and species lost at an alarming rate',
            ],
          },
          {
            icon: '🤝',
            heading: 'The call to act',
            items: [
              '“We are treating nature like a toilet… and ultimately we are committing suicide by proxy.”',
              'No country can protect the world’s forests and species alone',
            ],
          },
          {
            icon: '📊',
            heading: 'Why it matters',
            items: [
              'About 10 million hectares of forest are lost each year',
              'Forests store carbon and are home to most land species',
              'Forest loss in one country affects rainfall and climate elsewhere',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** is it important that all countries must respond to the problem of deforestation and biodiversity loss?\n\n' +
          'In your essay, you must:\n' +
          '• consider different perspectives\n' +
          '• provide explanations and examples to support your arguments.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing how important it is that ALL countries respond, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
