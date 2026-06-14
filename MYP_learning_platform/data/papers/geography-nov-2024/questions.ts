import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2024 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (N24). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (D, 24)
 *
 * Theme: population structures, ageing, migration (S. Korea, Germany) + climate-change
 * vulnerability (Spain — Barcelona vs Madrid) and the global climate-change response.
 * Text/audio sources are transcribed as original extracts; visual sources become
 * interactive artefacts wired via the `artefact` field:
 *   Q1  → InteractiveChart    (Population Structures Around the World, by Region, 2022)
 *   Q3  → SlideDeck           (the city official's video-call action-plan presentation)
 *   Q6  → ChoroplethWorld     (Source A — Level of Vulnerability to Climate Change 2021)
 *   Q7  → ChoroplethWorld + DataTableInteractive (Source B — Spain climate-risk map + city panels)
 *   Q8  → SourceDocViewer     (the COP27 / António Guterres video transcript)
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
  id: 'geography-nov-2024',
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
    topic: 'Population structures — reading an infographic',
    marks: 2,
    stem:
      'The infographic below shows population structures in 2022. It gives the estimated share of the population in two age groups — under 15 year olds and over 65 year olds — for each world region. Look at the infographic and answer the questions that follow.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Population Structures Around the World, by Region (2022) — estimated share of population in stated age groups, by world region (in %). Source: Population Reference Bureau. Hover a bar to read its value.',
      data: {
        kind: 'bar',
        title: 'Population Structures Around the World, by Region',
        source: 'Population Reference Bureau (2022)',
        x: {
          label: 'World region',
          categories: ['North America', 'Latin America/Caribbean', 'Europe', 'Africa', 'Asia', 'Oceania'],
        },
        y: { label: 'Share of population', min: 0, max: 45, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45], unit: '%' },
        series: [
          { name: 'Under 15 year olds', color: '#e03131', points: [18, 23, 16, 40, 24, 23] },
          { name: 'Over 65 year olds', color: '#1971c2', points: [17, 10, 19, 3, 10, 13] },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the region with the highest percentage of over 65 year olds.',
        marks: 1,
        ph: 'Read the blue bars off the infographic and name the region with the largest over-65 share.',
      },
      {
        label: 'b',
        text: '**Select** the population structure for the African region (Youthful, Stable or Ageing).',
        marks: 1,
        ph: 'A region with a very high under-15 share and a very low over-65 share has which structure?',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Population change — causes of ageing populations',
    marks: 4,
    stem: 'Many countries around the world are experiencing ageing populations.',
    tasks: [
      {
        label: '',
        text: '**Explain** one cause of ageing populations.',
        marks: 4,
        ph: 'One cause considered in detail with reasons (e.g. improved health care → higher life expectancy → more people living over 65).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating an action plan (S. Korea ageing)',
    marks: 8,
    stem:
      'In South Korea there is a growing number of people over 65 years old. A city official will investigate the impacts of the ageing population in the city so that the local government can take action.\n\n' +
      'The city official needs to present their action plan for their investigation to the local government for approval. They want you to evaluate the action plan before they submit it and have set up an online call to show it to you. Step through their presentation below.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'The city official’s investigation action plan, presented over a video call. Use ← / → (or the dots) to step through the three stages — this presentation is the marked stimulus.',
      data: {
        title: 'City official’s action plan — investigating the ageing population (South Korea)',
        source: 'Online call · city official → you (evaluator)',
        slides: [
          {
            title: 'Introduction',
            body:
              '“Hi. Thanks for agreeing to evaluate my action plan. My investigation is on the impact of ageing populations in my city in South Korea.”',
          },
          {
            title: 'Overview — three stages',
            bullets: [
              'Stage 1: Collection of data',
              'Stage 2: Presentation and analysis of data',
              'Stage 3: Prepare report',
            ],
          },
          {
            title: 'Stage 1 · Collection of data (≈ four weeks)',
            bullets: [
              'Interview 40 residents of nursing homes in the city',
              'Identify demographic trends using census data from 2020',
              'Collect data on the number of hospital admissions for 65 year olds',
              'Collect income and pension data for the last year',
            ],
          },
          {
            title: 'Stage 2 · Presentation and analysis of data (≈ two weeks)',
            bullets: [
              'Death rate: 7.8 per 1000 people',
              'Population data for city: 1 549 500 people',
              'Use spreadsheets to create graphs to help analyse the data',
            ],
          },
          {
            title: 'Stage 3 · Prepare report (≈ two weeks)',
            bullets: [
              'Structure the report under the headings: Social impacts · Economic impacts · Environmental impacts · Political impacts',
              'Cite sources to create a reference list',
            ],
          },
          {
            title: 'Closing',
            body: '“Thank you again and I look forward to receiving your evaluation.”',
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
    topic: 'Investigating — migration & changing population structures',
    marks: 12,
    stem:
      'You are a journalist working for the Asian Development Bank and will write an article for the website. The purpose of the article is to help readers understand the role of migration in changing population structures around the world. You will formulate your investigation around the following statement of inquiry.\n\n' +
      '**Statement of Inquiry:** Changes in populations can be impacted by time, place and space.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question based on the statement of inquiry.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a specific migration movement, place or time period) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** how your research question will help you to understand the role that migration has in changing population structures.',
        marks: 4,
        ph: 'Give reasons, in detail, why the RQ is relevant to the SoI — build from a simple connection to a fully justified one (e.g. link migration → economically active population → dependency ratio).',
      },
      {
        label: 'c',
        text: '**Outline** one challenge that you might face in your investigation.',
        marks: 2,
        ph: 'State and elaborate one challenge (e.g. refugees may not want to be interviewed, so there will not be enough qualitative data).',
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
        ph: 'Two specific people/groups relevant to YOUR investigation (e.g. Syrian refugees in Germany; elderly Germans; business owners; local government).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — sustainable resource extraction (speech)',
    marks: 18,
    stem:
      'You work for a company which extracts natural resources. Some residents have raised concerns about the sustainability of resource extraction in the local area. There will be a vote on whether to allow your company to continue extracting natural resources in the area. You must gain the support of locals so that they vote in your favour.\n\n' +
      'A community meeting has been arranged where you will give a speech.\n\n' +
      'Before you write, name the location and natural resource(s) being extracted (for example — Location: Cadia Mine, Australia · Natural resource: Gold).',
    tasks: [
      {
        label: '',
        text:
          'Your speech must **explain** two ways that your company sustainably extracts the natural resource(s).\n\n' +
          'In your speech, you should:\n' +
          '• name the location and natural resource(s) being extracted\n' +
          '• include an introduction/greeting to the audience, a body and a conclusion/closing argument\n' +
          '• use persuasive language appropriate to a speech for an audience of local residents.',
        marks: 18,
        ph: 'A persuasive speech explaining two ways your company sustainably extracts the resource. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — climate-change vulnerability map (Spain context)',
    marks: 6,
    stem:
      'A policy maker is researching the impact of climate change in Spain and they have found the map below (**Source A**).\n\n' +
      '**Source A** — “Level of Vulnerability to Climate Change in 2021”. The vulnerability of a location to climate change can be measured by the extent it is negatively affected and whether it can adapt to the changes. The map shades each country by a single national value on a five-class scale (Very low → Very high); circle icons represent island countries located in the Pacific Ocean.',
    artefact: {
      component: 'ChoroplethWorld',
      caption:
        'Source A — Level of Vulnerability to Climate Change in 2021 (original recreation). The most vulnerable countries (High / Very high — much of Africa, parts of South Asia, South-East Asia and South America) are highlighted; the scale gives ONE value per whole country.',
      data: {
        mode: 'highlight',
        title: 'Level of Vulnerability to Climate Change in 2021',
        source: 'Recreated thematic map (after a global climate-vulnerability index)',
        highlightLabel: 'High / Very high vulnerability',
        baseLabel: 'Lower vulnerability',
        highlight: [
          'Niger', 'Chad', 'Mali', 'Mauritania', 'Sudan', 'S. Sudan', 'Somalia', 'Ethiopia',
          'Eritrea', 'Nigeria', 'Dem. Rep. Congo', 'Central African Rep.', 'Angola', 'Zambia',
          'Mozambique', 'Madagascar', 'Tanzania', 'Kenya', 'Uganda', 'Burkina Faso', 'Guinea',
          'Sierra Leone', 'Liberia', 'Ghana', 'Cameroon', 'Zimbabwe', 'Malawi',
          'Afghanistan', 'Pakistan', 'India', 'Bangladesh', 'Myanmar',
          'Indonesia', 'Papua New Guinea', 'Philippines',
          'Bolivia', 'Peru', 'Haiti',
        ],
        caption:
          'A clear global overview of which countries are most vulnerable to climate change — but it gives one value for an entire country, so it is not specific enough to show variation by region within a country.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of **Source A**.',
        marks: 2,
        ph: 'State and elaborate the purpose (e.g. it informs people about vulnerability to climate change by determining the areas most at risk).',
      },
      {
        label: 'b',
        text: '**Outline** one value of **Source A** to the policy maker researching the impact of climate change in Spain.',
        marks: 2,
        ph: 'State and elaborate one value (e.g. the map comes from a reliable source, so the policy maker can trust the information).',
      },
      {
        label: 'c',
        text: '**Outline** one limitation of **Source A** to the policy maker researching the impact of climate change in Spain.',
        marks: 2,
        ph: 'State and elaborate one limitation (e.g. it gives one value for the whole country rather than by region, which is not specific enough).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Thinking critically — Barcelona vs Madrid climate impact (justify)',
    marks: 6,
    stem:
      'Spain is impacted by climate change. A policy maker has created the map in **Source B** to show the risks to two cities in Spain: **Barcelona** and **Madrid**. The map can be viewed under different layers (Country summary · Water stress · Fire risk · Risk of coastal flooding), with elevation shading, major urban areas (sized by population) and major container ports (sized by million containers).\n\n' +
      'Two city fact panels accompany the map:\n' +
      '• **Madrid** — capital city of Spain; in 2019 hosted 5.6 million tourists; population density 5400 people per km²; trade exports 2022: €4.99 billion. Madrid is further inland and at a higher elevation.\n' +
      '• **Barcelona** — second-largest city in Spain; in 2019 hosted 7.02 million tourists; population density 16 000 people per km²; trade exports 2022: €6.33 billion. Barcelona is on the coast, at a lower elevation, and is a major port (3–5 million containers).\n\n' +
      'Look at the source and answer the question that follows.',
    artefact: {
      component: 'ChoroplethWorld',
      caption:
        'Source B — a climate-risk map of Spain (original recreation). Madrid (inland, higher elevation) and Barcelona (coastal, lower elevation, major port) are highlighted; the city fact panels below carry the figures to weigh up.',
      data: {
        mode: 'highlight',
        title: 'Source B — climate risks to Barcelona and Madrid, Spain',
        source: 'Recreated GIS map (Country summary / Water stress / Fire risk / Coastal-flooding layers)',
        highlightLabel: 'Spain (Barcelona & Madrid)',
        highlight: ['Spain'],
        caption:
          'Coastal Barcelona sits at a lower elevation than inland Madrid, so it is more exposed to coastal flooding from sea-level rise; as a major port (3–5 million containers) generating ~€1 billion more in exports, flooding there would hit trade, jobs and the environment harder.',
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to **both** cities in **Source B**, **justify** whether Barcelona or Madrid will be impacted more by climate change.\n\n' +
          'Note: either location can be selected, but you must refer to both cities and give reasons for your choice.',
        marks: 6,
        ph: 'Choose a city and justify it with reference to BOTH cities (e.g. lower-elevation coastal Barcelona faces coastal flooding; its port and higher exports mean greater impact on trade). Naming a location with no reason scores 0.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — responding to climate change',
    marks: 24,
    stem:
      'Watch the video below (transcript provided) and answer the question that follows.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'The video transcript — the UN, COPs and the call for a global response to climate change.',
      data: {
        kind: 'Video transcript',
        title: 'COP27 — the global climate-change summit',
        attribution: 'UN climate summit (COP27, 2022) · António Guterres, UN Secretary-General',
        paragraphs: [
          'Since 1995, the UN has been bringing together almost every country for global climate summits, called COPs. This stands for “Conference of the Parties”.',
          'In 2022, at COP27, António Guterres, the UN Secretary General, stated “Greenhouse gas emissions keep growing. Global temperatures keep rising. And our planet is fast approaching tipping points that will make climate chaos irreversible.”',
          'He stressed the need for all to respond and stated “It will take each and every one of us. Humanity has a choice: cooperate or perish.”',
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** is it important that all countries must respond to the problem of climate change?\n\n' +
          'In your essay, you must:\n' +
          '• consider different perspectives\n' +
          '• provide explanations and examples to support your arguments.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing how important it is that ALL countries respond, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
