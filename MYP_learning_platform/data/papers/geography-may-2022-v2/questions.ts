import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2022 · ISOMORPHIC VARIANT 2 (geography-may-2022-v2)
 * Subject group: Individuals & Societies · Course: Geography. Total 80 marks, 3 tasks.
 *
 * Construct preserved 1:1 from geography-may-2022 (same crit / command term / marks /
 * task structure):
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (6) · Q7 (4) · Q8 (2) · Q9 (24)
 *
 * NEW scenario (genuinely different context per question, same assessed skill) — and
 * distinct from BOTH the source AND variant 1:
 *   2011 South-East Asia monsoon floods & transboundary displacement (lower Mekong basin) ·
 *   access to electricity by world region · community rainwater-harvesting programme ·
 *   sustainable forestry vs terrestrial (forest) biodiversity loss.
 *
 * Per the I&S variant carve-out, EVERY artefact-bearing question presents the new
 * scenario through a DIFFERENT component than EITHER the source or variant 1 used for it:
 *   Q1  source ImageCompareSlider · v1 InteractiveChart   → PieChart            (flood impacts by share, value-read)
 *   Q3  source SourceDocViewer    · v1 SlideDeck           → InfoGraphicPanel     (the NGO's methodology poster)
 *       source LocatedMap         · v1 DataTableInteractive → ChoroplethWorld      (countries the cross-border study covered)
 *   Q6  source LocatedMap         · v1 InteractiveChart    → DataTableInteractive  (electricity access by region, value-read)
 *   Q7  source InfoGraphicPanel   · v1 NetworkGraph        → TimelineScrubber      (dated rollout plan of the programme)
 *   Q8  reuses Source C           · reuses the Q7 graph     → reuses the Q7 TimelineScrubber
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
  id: 'geography-may-2022-v2',
  subject: 'Geography',
  session: 'May',
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
    topic: 'Natural disasters — flood impacts',
    marks: 2,
    stem:
      'During the 2011 monsoon season, unusually heavy rains fell for weeks across the lower Mekong basin of South-East Asia. Rivers burst their banks and floodwater spread slowly across the wide plains of central Thailand, Cambodia and the Mekong Delta of Vietnam.\n\n' +
      '**Source A (video transcript):** “The 2011 monsoon brought far more rain than the rivers of the lower Mekong basin could carry. From July, the water rose week after week, until vast areas of central Thailand lay under more than a metre of water for months. The flood killed more than 800 people across the region and submerged over 20 000 square kilometres of farmland and seven huge industrial estates. Roads, railways and water-treatment plants were swamped, cutting clean water and power to millions. More than 2.5 million people were displaced from their homes, many moving to relief centres on higher ground. The impact was not felt in Thailand alone — flooding spread across the border into Cambodia and Vietnam, and the loss of factory output disrupted supply chains as far away as Japan and Europe.”\n\n' +
      'Use the chart in Source A to read the recorded impacts of the 2011 floods in the lower Mekong basin.',
    artefact: {
      component: 'PieChart',
      caption: 'Source A — how the 2011 lower-Mekong floods displaced 2.5 million people, by destination type (original recreation, not the IB imagery). Hover a slice for its exact share.',
      data: {
        kind: 'doughnut',
        title: 'Source A — Where the 2.5 million displaced people of the 2011 floods went',
        source: 'ASEAN Disaster Monitor (recreated)',
        unit: '%',
        series: [
          { name: 'Official relief centres on higher ground', value: 40, color: '#0b7285' },
          { name: 'Stayed with relatives in other towns', value: 33, color: '#e8590c' },
          { name: 'Temporary roadside / embankment camps', value: 19, color: '#9c36b5' },
          { name: 'Crossed the border (Cambodia / Vietnam)', value: 8, color: '#2f9e44' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**State** two impacts of the 2011 floods in South-East Asia.',
        marks: 2,
        ph: 'Two distinct impacts (e.g. loss of life; flooding of farmland; destruction of infrastructure; loss of clean water/power; forced displacement). Responses need not be shown in the source.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Disparity & equity — disaster impacts',
    marks: 4,
    stem: 'Communities are not affected equally by natural disasters. Income can shape how vulnerable people are when a hazard strikes.',
    tasks: [
      {
        label: '',
        text: '**Explain** how disparities in income can worsen the impacts of **one** natural disaster.',
        marks: 4,
        ph: 'One way income disparity worsens a disaster’s impact, considered in detail with reasons (e.g. low-income families farm low-lying floodplain land and cannot afford to raise their home or insure their crop → greater loss).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — displacement after the floods',
    marks: 8,
    stem:
      'Following the 2011 floods, a non-governmental organization (NGO) called **Mekong Flood Response** carried out an investigation into how the floods forced people to move. They produced a map using the action plan below. You will evaluate their investigation.\n\n' +
      '**Statement of inquiry:** Place and space determine the impact of natural disasters on communities.\n\n' +
      '**Research question:** How did the 2011 floods affect the movement of people across the lower Mekong basin?\n\n' +
      'The map (shown alongside) highlights the countries in which the NGO recorded flood-related displacement between July 2011 and January 2012.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The NGO’s investigation poster — its goal, statement of inquiry, research question and methodology (the marked action plan). Hover or tap a block to spotlight it.',
      data: {
        title: 'Mekong Flood Response — Lower Mekong basin 2011',
        source: 'www.mekongfloodresponse.org/projects',
        layout: 'flow',
        intro:
          'Our team set out to analyse the movement of people forced from their homes by the 2011 monsoon floods. The methodology we used for this investigation is set out below.',
        blocks: [
          {
            heading: 'Goal & statement of inquiry',
            icon: '🎯',
            items: [
              'Goal: use relief-centre registrations to map where displaced people moved to, and to publish a map of the results.',
              'Statement of inquiry: Place and space determine the impact of natural disasters on communities.',
            ],
            note: 'Why we are investigating',
          },
          {
            heading: 'Research question',
            icon: '❓',
            items: [
              'How did the 2011 floods affect the movement of people across the lower Mekong basin?',
            ],
            note: 'What we will answer',
          },
          {
            heading: 'Data collection',
            icon: '📋',
            items: [
              'A person is counted as displaced when they register at an official relief centre away from their home.',
              'Collect registration records from relief centres in every affected province of Thailand, Cambodia and Vietnam.',
              'About 1.8 million people registered — roughly three quarters of those displaced.',
            ],
            note: 'How we gather evidence',
          },
          {
            heading: 'Timeframe',
            icon: '🗓️',
            items: [
              'Data collection ran from 25 July 2011 to 15 January 2012, covering the full flood season.',
            ],
            note: 'When',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the investigation carried out by the NGO.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan or map.',
        artefact: {
          component: 'ChoroplethWorld',
          caption: 'The NGO’s map — the countries in which flood-related displacement was recorded between July 2011 and January 2012. People displaced within their own country are NOT shown, so internal movement is missing from the map.',
          data: {
            mode: 'highlight',
            title: 'Recorded flood displacement, lower Mekong basin — July 2011 to January 2012',
            source: 'Mekong Flood Response (recreated)',
            highlight: ['Thailand', 'Cambodia', 'Vietnam', 'Laos'],
            highlightLabel: 'Displacement recorded',
            baseLabel: 'No data collected',
            caption:
              'The map highlights the four countries where the NGO collected relief-centre registrations. It gives a clear regional overview of which countries were affected, but it only shows displacement at the country level — it does not show WHERE within each country people moved to, so it is only a partial picture.',
          },
        },
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — designing an investigation',
    marks: 12,
    stem:
      'A Non-Governmental Organisation (NGO) has asked you to investigate the strategies used to manage a natural disaster. The investigation will allow the NGO to evaluate the effectiveness of strategies in different locations.\n\n' +
      '**Statement of inquiry:** Time, place and space can influence the effectiveness of a community’s response to natural disasters.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (names a management strategy and a specific natural disaster/location) and connected to the SoI. A reworded SoI scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** why your research question will help the NGO to achieve their goal.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is worthy of investigating — build from a simple connection to a fully justified one (a factor in detail, with reasoning).',
      },
      {
        label: 'c',
        text: '**List** two methods of collecting primary data that you could use to answer the research question you formulated in part (a).',
        marks: 2,
        ph: 'Two valid primary-data methods (e.g. interviews; questionnaires; surveys). One mark per valid method.',
      },
      {
        label: 'd',
        text: '**Explain** why one of the primary data sources in part (c) would help your investigation.',
        marks: 4,
        ph: 'One benefit of a chosen method, considered in detail with reasons for how it helps you answer the RQ (e.g. a survey counts how many people reached a flood shelter in time, so you can evaluate the strategy).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — tourism & culture',
    marks: 18,
    stem:
      'You are a popular travel **blogger** who has many online followers.\n\n' +
      'You decide to write a blog post to explain the positive and negative impacts of tourism on the culture of **one** community.\n\n' +
      '(A photograph of a travel writer’s desk — laptop, camera, glasses, passport and an open notebook — accompanies the task in the exam. It is decorative and is not a marked source.)',
    tasks: [
      {
        label: '',
        text:
          'Write a blog post to explain the positive and negative impacts of tourism on the culture of **one** community.\n\n' +
          'In your blog post, you must:\n' +
          '• include a relevant title and sub-headings\n' +
          '• **explain** at least one positive and at least one negative impact of tourism on the culture of one community\n' +
          '• conclude with advice for future travellers.',
        marks: 18,
        ph: 'A titled, sub-headed blog post explaining ≥1 positive AND ≥1 negative cultural impact of tourism on one community, ending with advice for travellers. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — access to electricity by region',
    marks: 6,
    stem:
      'Access to electricity is uneven across the world. In some regions almost everyone is connected to a reliable supply, while in others many households still have no electricity at all. This shapes people’s health, education and ability to earn a living.\n\n' +
      '**Source B** shows the share of the population with access to electricity in six world regions in 2021. (Created by globalenergydata.org.)',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source B — share of the population with access to electricity by world region, 2021. Click a row to pin it while you read. Original recreation.',
      data: {
        title: 'Source B — Access to electricity by world region (2021)',
        source: 'globalenergydata.org',
        headers: ['World region', 'Population with access (%)'],
        rows: [
          ['East Asia & Pacific', '98'],
          ['Latin America & Caribbean', '97'],
          ['Middle East & North Africa', '94'],
          ['South Asia', '92'],
          ['Sub-Saharan Africa', '51'],
          ['Oceania (small islands)', '76'],
        ],
        caption:
          'The table gives the percentage of people with access to electricity in each region. Sub-Saharan Africa has by far the lowest access at 51%, while East Asia & Pacific has the highest at 98%.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct answer to complete the sentence below.\n\nThe region with the lowest access to electricity on Source B is ____.\n\nOptions: (i) South Asia · (ii) Sub-Saharan Africa · (iii) Oceania (small islands).',
        marks: 1,
        ph: 'Pick the region with the lowest percentage on Source B.',
      },
      {
        label: 'b',
        text: '**State** the origin of **Source B**.',
        marks: 1,
        ph: 'Name the organisation/website that created Source B (read it from the table).',
      },
      {
        label: 'c',
        text: '**Explain** one value of **Source B** to an MYP student investigating access to electricity around the world.',
        marks: 4,
        ph: 'One value of the table, considered with reasoning (e.g. it gives the access figure for every region, so the student can identify which region most needs investment in electricity supply).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying an alternative perspective — rainwater harvesting',
    marks: 4,
    stem:
      'A town council in a dry region of India is investigating ways to provide more reliable fresh water during the long dry season. They plan to roll out a community **rainwater-harvesting** programme: collecting rain from rooftops and storing it in tanks and recharge pits for use later in the year.\n\n' +
      '**Source C** shows the council’s timeline for rolling out the rainwater-harvesting programme over one year, from survey to handover.\n\n' +
      'One resident of the town was interviewed about the council’s plan to invest in rainwater harvesting. Their perspective is given in the interview alongside.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'Source C — the council’s one-year rollout plan for the community rainwater-harvesting programme. Drag the handle, click a marker, or use the arrow keys to move through the stages.',
      data: {
        title: 'Source C — Rollout plan for the rainwater-harvesting programme',
        source: 'Town council planning office',
        events: [
          { date: 'Jan 2024', label: 'Survey of rooftops', detail: 'Engineers survey rooftops and soil to estimate how much rain can be collected and where recharge pits should go.' },
          { date: 'Mar 2024', label: 'Households sign up', detail: 'Residents are shown the plan and asked to join; the council records how many households opt in.' },
          { date: 'Jun 2024', label: 'Tanks & gutters installed', detail: 'Before the monsoon, gutters, filters and storage tanks are fitted to rooftops that joined the scheme.' },
          { date: 'Aug 2024', label: 'First monsoon collection', detail: 'The monsoon rains are captured; tanks fill and recharge pits begin to top up the groundwater under the town.' },
          { date: 'Dec 2024', label: 'Handover & training', detail: 'The council hands the systems over to households and trains them to clean filters and maintain the tanks through the dry season.' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'A resident was asked: *“What do you think about the council’s plan to provide more reliable water through rainwater harvesting?”* They replied:\n\n' +
          '*“The tanks cost too much for a poor household, and the council should be spending that money on a piped supply from the river instead! In a year with a weak monsoon there will be hardly any rain to collect, so the tanks will sit empty when we need them most. People will stop cleaning the filters and the stored water will go bad. It isn’t worth it — we must look at other ways to secure our water.”*\n\n' +
          '**Justify** why another resident of the town might disagree with this perspective.',
        marks: 4,
        ph: 'Give a valid reason, with detail, why another resident might support rainwater harvesting (e.g. it captures water that would otherwise run off and recharges the groundwater, so a household has its own supply through the dry season — the cost is worth it).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — limitation of a diagram',
    marks: 2,
    stem:
      'Re-examine **Source C** (the rainwater-harvesting rollout plan from Question 7). A resident of the town is learning about the council’s proposal to invest in rainwater harvesting.',
    tasks: [
      {
        label: '',
        text: '**Outline** one limitation of **Source C** to a resident of the town who is learning about the council’s proposal to invest in rainwater harvesting.',
        marks: 2,
        ph: 'One limitation of the diagram for residents, elaborated (e.g. the timeline does not show how much the system will cost a household or how much water it will actually provide).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — sustainable forestry & biodiversity',
    marks: 24,
    stem: 'A report by the United Nations found that the world is losing about 10 million hectares of forest every year, and that this loss of forest habitat is one of the leading causes of biodiversity loss on land.',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** is sustainable forestry essential for reducing biodiversity loss?\n\n' +
          'In your essay, you must:\n' +
          '• include explanations and examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing whether sustainable forestry is essential for reducing biodiversity loss, with ≥2 balanced perspectives, named examples and geographical terms. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
