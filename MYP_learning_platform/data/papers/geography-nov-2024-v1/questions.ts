import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2024 · Set 1 ISOMORPHIC VARIANT (geography-nov-2024-v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-nov-2024 (N24). Total 80 marks, 3 tasks, same blueprint:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (D, 24)
 *
 * NEW SCENARIO (surface only — construct invariants preserved): urbanisation, rural-to-urban
 * migration and megacity growth (India, Nigeria) + freshwater / drought vulnerability of cities
 * (Vietnam — Ho Chi Minh City vs Hanoi) and the global response to the water crisis.
 *
 * Each artefact-bearing question uses a DIFFERENT component than the source (I&S carve-out):
 *   Q1  → PieChart            (source used InteractiveChart) — urban-population share by region
 *   Q3  → InfoGraphicPanel    (source used SlideDeck)        — the city official's action plan (flow)
 *   Q6  → DataTableInteractive(source used ChoroplethWorld)  — Source A national drought-risk index
 *   Q7  → LocatedMap          (source used ChoroplethWorld)  — Source B Vietnam city-risk map
 *   Q8  → SlideDeck           (source used SourceDocViewer)  — UN Water Conference video transcript
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
  id: 'geography-nov-2024-v1',
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
    topic: 'Urbanisation — reading an infographic',
    marks: 2,
    stem:
      'The infographic below shows levels of urbanisation in 2022. It gives the estimated share of each world region’s population that lives in urban areas (towns and cities). Look at the infographic and answer the questions that follow.',
    artefact: {
      component: 'PieChart',
      caption:
        'Share of the Population Living in Urban Areas, by World Region (2022), in %. Source: UN World Urbanization Prospects. Hover a segment (or its legend row) to read its exact value.',
      data: {
        kind: 'doughnut',
        title: 'Share of the Population Living in Urban Areas, by World Region (2022)',
        source: 'UN World Urbanization Prospects (2022)',
        unit: '%',
        series: [
          { name: 'North America', value: 83, color: '#1971c2' },
          { name: 'Latin America/Caribbean', value: 81, color: '#0b7285' },
          { name: 'Europe', value: 75, color: '#2f9e44' },
          { name: 'Oceania', value: 68, color: '#f08c00' },
          { name: 'Asia', value: 51, color: '#9c36b5' },
          { name: 'Africa', value: 44, color: '#e03131' },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the region with the highest percentage of people living in urban areas.',
        marks: 1,
        ph: 'Read the segments off the infographic and name the region with the largest urban share.',
      },
      {
        label: 'b',
        text: '**Select** the level of urbanisation for the African region (Low, Moderate or High).',
        marks: 1,
        ph: 'A region with the smallest urban share (44%) — fewer than half its people live in towns and cities — has which level of urbanisation?',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Population change — causes of rapid urbanisation',
    marks: 4,
    stem: 'Many cities in lower-income countries are experiencing rapid urbanisation.',
    tasks: [
      {
        label: '',
        text: '**Explain** one cause of rapid urbanisation.',
        marks: 4,
        ph: 'One cause considered in detail with reasons (e.g. lack of rural jobs → people migrate to cities for factory work → urban population grows quickly).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating an action plan (Lagos urbanisation)',
    marks: 8,
    stem:
      'In Lagos, Nigeria, the number of people moving into the city from rural areas is growing rapidly. A city official will investigate the impacts of rapid urbanisation in the city so that the local government can take action.\n\n' +
      'The city official needs to present their action plan for their investigation to the local government for approval. They want you to evaluate the action plan before they submit it and have shared it with you as the poster below. Step through the stages of their plan.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'The city official’s investigation action plan, shown as a three-stage process poster. Hover (or tap) a stage to spotlight it — this action plan is the marked stimulus.',
      data: {
        layout: 'flow',
        title: 'City official’s action plan — investigating rapid urbanisation in Lagos',
        source: 'City official → you (evaluator)',
        intro:
          'My investigation is on the impacts of rapid urbanisation in my city, Lagos, Nigeria. My plan has three stages, shown below.',
        blocks: [
          {
            heading: 'Stage 1 · Collection of data (≈ four weeks)',
            items: [
              'Interview 35 residents of one informal settlement in the city',
              'Identify migration trends using census data from 2020',
              'Collect data on the number of households without piped water',
              'Collect housing and rent data for the last year',
            ],
            note: '≈ four weeks',
          },
          {
            heading: 'Stage 2 · Presentation and analysis of data (≈ two weeks)',
            items: [
              'Population growth rate: 3.2% per year',
              'Population data for city: 15 388 000 people',
              'Use spreadsheets to create graphs to help analyse the data',
            ],
            note: '≈ two weeks',
          },
          {
            heading: 'Stage 3 · Prepare report (≈ two weeks)',
            items: [
              'Structure the report under the headings: Social impacts · Economic impacts · Environmental impacts · Political impacts',
              'Cite sources to create a reference list',
            ],
            note: '≈ two weeks',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the city official’s investigation.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the action plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — migration & growth of cities',
    marks: 12,
    stem:
      'You are a journalist working for the World Bank and will write an article for the website. The purpose of the article is to help readers understand the role of rural-to-urban migration in the growth of cities around the world. You will formulate your investigation around the following statement of inquiry.\n\n' +
      '**Statement of Inquiry:** Changes in populations can be impacted by time, place and space.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question based on the statement of inquiry.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a specific migration movement, city or time period) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** how your research question will help you to understand the role that rural-to-urban migration has in the growth of cities.',
        marks: 4,
        ph: 'Give reasons, in detail, why the RQ is relevant to the SoI — build from a simple connection to a fully justified one (e.g. link migration → demand for housing → growth of informal settlements).',
      },
      {
        label: 'c',
        text: '**Outline** one challenge that you might face in your investigation.',
        marks: 2,
        ph: 'State and elaborate one challenge (e.g. recent migrants may be hard to reach in informal settlements, so there will not be enough qualitative data).',
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
        ph: 'Two specific people/groups relevant to YOUR investigation (e.g. rural migrants in Mumbai; long-term city residents; informal traders; city planners).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — sustainable urban development (speech)',
    marks: 18,
    stem:
      'You work for a company which builds new housing developments in growing cities. Some residents have raised concerns about the sustainability of new building projects in the local area. There will be a vote on whether to allow your company to continue building in the area. You must gain the support of locals so that they vote in your favour.\n\n' +
      'A community meeting has been arranged where you will give a speech.\n\n' +
      'Before you write, name the location and the type of development being built (for example — Location: Dharavi, Mumbai, India · Development: Affordable high-rise housing).',
    tasks: [
      {
        label: '',
        text:
          'Your speech must **explain** two ways that your company builds new developments sustainably.\n\n' +
          'In your speech, you should:\n' +
          '• name the location and the type of development being built\n' +
          '• include an introduction/greeting to the audience, a body and a conclusion/closing argument\n' +
          '• use persuasive language appropriate to a speech for an audience of local residents.',
        marks: 18,
        ph: 'A persuasive speech explaining two ways your company builds sustainably. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — global drought-risk index (Vietnam context)',
    marks: 6,
    stem:
      'A policy maker is researching the impact of water shortages in Vietnam and they have found the table below (**Source A**).\n\n' +
      '**Source A** — “National Drought-Risk Index, 2021”. The drought risk of a country can be measured by how exposed it is to long dry periods and whether it can adapt to them. The table gives each country a single national index value on a 0–100 scale (the higher the value, the greater the drought risk) and a risk band (Very low → Very high). It reports one value for each whole country.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Source A — National Drought-Risk Index, 2021 (original recreation). The table gives ONE index value per whole country. Hover a row to highlight it; click to pin the row you are reading.',
      data: {
        title: 'National Drought-Risk Index, 2021',
        source: 'Recreated dataset (after a global drought-risk index)',
        headers: ['Country', 'Drought-risk index (0–100)', 'Risk band'],
        rows: [
          ['Somalia', '88', 'Very high'],
          ['Niger', '84', 'Very high'],
          ['Afghanistan', '79', 'Very high'],
          ['India', '71', 'High'],
          ['Pakistan', '69', 'High'],
          ['Vietnam', '58', 'High'],
          ['Mexico', '52', 'Medium'],
          ['Spain', '47', 'Medium'],
          ['Brazil', '38', 'Low'],
          ['Canada', '21', 'Very low'],
        ],
        caption:
          'A clear national overview of which countries face the greatest drought risk — but it gives one value for an entire country, so it cannot show how risk varies between regions inside a country such as Vietnam.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of **Source A**.',
        marks: 2,
        ph: 'State and elaborate the purpose (e.g. it informs people about drought risk by determining the countries most at risk).',
      },
      {
        label: 'b',
        text: '**Outline** one value of **Source A** to the policy maker researching the impact of water shortages in Vietnam.',
        marks: 2,
        ph: 'State and elaborate one value (e.g. the table comes from a reliable source, so the policy maker can trust the information).',
      },
      {
        label: 'c',
        text: '**Outline** one limitation of **Source A** to the policy maker researching the impact of water shortages in Vietnam.',
        marks: 2,
        ph: 'State and elaborate one limitation (e.g. it gives one value for the whole country rather than by region, which is not specific enough).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Thinking critically — Ho Chi Minh City vs Hanoi water risk (justify)',
    marks: 6,
    stem:
      'Vietnam is affected by water shortages and flooding. A policy maker has created the map in **Source B** to show the water risks to two cities in Vietnam: **Ho Chi Minh City** and **Hanoi**. The map can be viewed under different layers (Elevation · Saltwater intrusion · Flood risk), with major urban areas marked.\n\n' +
      'Two city fact panels accompany the map:\n' +
      '• **Hanoi** — capital city of Vietnam; in 2019 hosted 8.65 million tourists; population density 2400 people per km²; trade exports 2022: US$17 billion. Hanoi is further inland in the Red River delta and at a slightly higher elevation.\n' +
      '• **Ho Chi Minh City** — largest city in Vietnam; in 2019 hosted 8.6 million tourists; population density 4500 people per km²; trade exports 2022: US$24 billion. Ho Chi Minh City sits in the low-lying Mekong delta near the coast, at a lower elevation, and much of it is less than 2 m above sea level, exposing it to saltwater intrusion and tidal flooding.\n\n' +
      'Look at the source and answer the question that follows.',
    artefact: {
      component: 'LocatedMap',
      caption:
        'Source B — a water-risk map of Vietnam (original recreation). Ho Chi Minh City (low-lying Mekong delta, near the coast) and Hanoi (inland Red River delta, higher elevation) are marked; the city fact panels above carry the figures to weigh up.',
      data: {
        title: 'Source B — water risks to Ho Chi Minh City and Hanoi, Vietnam',
        source: 'Recreated GIS map (Elevation / Saltwater intrusion / Flood-risk layers)',
        region: 'Vietnam',
        regionCountries: ['Vietnam'],
        scaleKm: 400,
        north: true,
        locator: true,
        markers: [
          {
            lon: 105.85,
            lat: 21.03,
            label: 'Hanoi',
            detail: 'Capital · inland Red River delta · higher elevation · exports US$17bn',
            color: '#1971c2',
            glyph: '◉',
          },
          {
            lon: 106.66,
            lat: 10.76,
            label: 'Ho Chi Minh City',
            detail: 'Largest city · low-lying Mekong delta · near coast · <2 m above sea level · exports US$24bn',
            color: '#e8590c',
            glyph: '▲',
          },
        ],
        caption:
          'Coastal Ho Chi Minh City sits at a lower elevation than inland Hanoi, so it is more exposed to tidal flooding and saltwater intrusion as sea levels rise; generating ~US$7 billion more in exports, flooding there would hit trade, jobs and the environment harder.',
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to **both** cities in **Source B**, **justify** whether Ho Chi Minh City or Hanoi will be impacted more by water-related climate change.\n\n' +
          'Note: either location can be selected, but you must refer to both cities and give reasons for your choice.',
        marks: 6,
        ph: 'Choose a city and justify it with reference to BOTH cities (e.g. lower-elevation coastal Ho Chi Minh City faces flooding and saltwater intrusion; its higher exports mean greater impact on trade). Naming a location with no reason scores 0.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — responding to the global water crisis',
    marks: 24,
    stem:
      'Watch the video below (transcript provided as slides) and answer the question that follows.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The video transcript, slide by slide — the UN, the Water Conference and the call for a global response to the water crisis. Use ← / → (or the dots) to step through.',
      data: {
        title: 'UN 2023 Water Conference — the global water crisis',
        source: 'UN Water Conference (2023) · António Guterres, UN Secretary-General',
        slides: [
          {
            title: 'Background',
            body:
              'In 2023, for the first time in almost 50 years, the UN brought together governments from almost every country for a global summit on water — the UN Water Conference.',
          },
          {
            title: 'The warning',
            body:
              'At the conference, UN Secretary-General António Guterres stated: “Water is in deep trouble. We are draining humanity’s lifeblood through vampiric overconsumption and unsustainable use, and evaporating it through global heating.”',
          },
          {
            title: 'The call to act',
            body:
              'He stressed that the crisis affects everyone and that no country can solve it alone: “Water is humanity’s lifeblood… We must protect it for ourselves and for generations to come.”',
          },
          {
            title: 'Why it matters',
            bullets: [
              'Around 2 billion people lack safely managed drinking water',
              'Demand for fresh water is expected to outstrip supply by 40% by 2030',
              'Rivers and groundwater cross borders, so water shortages in one country affect its neighbours',
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
          '**To what extent** is it important that all countries must respond to the problem of the global water crisis?\n\n' +
          'In your essay, you must:\n' +
          '• consider different perspectives\n' +
          '• provide explanations and examples to support your arguments.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing how important it is that ALL countries respond, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
