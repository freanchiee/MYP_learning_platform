import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2025 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Source: M25-INS (filename code humanMOEENGTZ0XXXX). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1–Q4
 *   Task 2 Communicating (Crit A+C, 18): Q5
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6–Q9
 *
 * Stimulus sources are transcribed as text here (parallel original extracts) so the
 * paper is fully answerable today. The visual sources become interactive artefacts
 * (code_rendered components + SVG fallbacks) wired via the image sidecar in a later
 * pass — see ARTEFACT notes:
 *   Q3  → <MuseumSlideDeck/>      (WWII exhibition film-reel)
 *   Q4e → <LearnerProfileCards/>  (Source A — IB Learner Profile)
 *   Q5  → <SankeyFlow/>           (Source B — HDI dimensions→indicators)
 *   Q6/Q7/Q8 → <ChoroplethWorld/> (Source C — Global Water Stress map)
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
  id: 'humanities-may-2025',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2025,
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
    topic: 'Conflict — causes of war',
    marks: 2,
    tasks: [
      {
        label: '',
        text: '**Outline** one cause of war.',
        marks: 2,
        ph: 'One cause, briefly elaborated — e.g. lack of human rights leading to uprisings.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Conflict — effects of war',
    marks: 4,
    tasks: [
      {
        label: '',
        text: '**Explain** one effect of a specific war.',
        marks: 4,
        ph: 'One effect of a named war, with reasons — e.g. WWII displaced people relying on aid.',
      },
    ],
  },
  {
    id: 3,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — museum WWII exhibition plan',
    marks: 8,
    stem:
      'The Museum of Photography in New York City has created the following plan for an exhibition on major battles of the Second World War. Since you are a frequent visitor to the museum, you have been asked to provide feedback on the initial plan to determine if the exhibition will be of interest to your local community.\n\n' +
      "The museum's plan — titled **The Second World War**:\n\n" +
      '**Sources providing information for the exhibition**\n' +
      '• Documentary on the Second World War (History Channel)\n' +
      '• Documentary on the campaigns of the Second World War (streaming service)\n' +
      '• Interview from relatives of people who lived during the Second World War\n' +
      '• Book: *My Struggle (Mein Kampf)*, by Adolf Hitler, 1925\n\n' +
      '**Additional primary sources for the exhibition**\n' +
      "• Review the museum's archives for photographs of the battles of the Second World War\n\n" +
      '**Deadline to complete the exhibition**\n' +
      '• Six weeks\n\n' +
      '**Next steps**\n' +
      '• Write the text that will appear next to the photographs\n' +
      '• Set up the exhibition\n\n' +
      '**Organizers of the exhibition**\n' +
      '• Mark Johnson, an award-winning military historian and university professor\n' +
      '• Anna Petersen, a designer with technical drawing skills\n\n' +
      '**Success criteria**\n' +
      '• Content is clear: photographs, artefacts and testimonies of the Second World War\n' +
      '• Well-organized setup: the exhibition includes signs, banners and interactive stations\n' +
      '• Strong overall style: present artefacts in an interesting way\n' +
      '• Appropriate for the audience: accessible to everyone that visits the museum',
    artefact: {
      component: 'SlideDeck',
      caption: 'The museum’s exhibition plan (interactive film-reel) — page through the sections.',
      data: {
        title: 'The Museum of Photography — “The Second World War”',
        source: 'Museum of Photography, New York City',
        slides: [
          { title: 'The Second World War', body: 'Proposed photography exhibition on the major battles of the Second World War.' },
          { title: 'Sources providing information', bullets: ['Documentary on the Second World War (History Channel)', 'Documentary on the campaigns of the Second World War (streaming service)', 'Interview from relatives of people who lived during the Second World War', 'Book: My Struggle (Mein Kampf), by Adolf Hitler, 1925'] },
          { title: 'Additional primary sources', bullets: ['Review the museum’s archives for photographs of the battles of the Second World War'] },
          { title: 'Deadline to complete the exhibition', body: 'Six weeks.' },
          { title: 'Next steps', bullets: ['Write the text that will appear next to the photographs', 'Set up the exhibition'] },
          { title: 'Organizers of the exhibition', bullets: ['Mark Johnson — an award-winning military historian and university professor', 'Anna Petersen — a designer with technical drawing skills'] },
          { title: 'Success criteria', bullets: ['Content is clear: photographs, artefacts and testimonies of the Second World War', 'Well-organized setup: signs, banners and interactive stations', 'Strong overall style: present artefacts in an interesting way', 'Appropriate for the audience: accessible to everyone that visits the museum'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: "**Evaluate** the museum's plan to determine if the exhibition will be of interest to your local community.",
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan, then give an overall appraisal.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — peace and conflict',
    marks: 12,
    stem:
      'You have just completed a unit on peace and conflict in school. Your teacher has asked your class to organize an exhibition based on the unit’s statement of inquiry.\n\n' +
      '**Statement of inquiry: Peace agreements create change for communities.**\n\n' +
      'In preparation for your exhibition, answer the following questions.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to investigate the statement of inquiry.',
        marks: 2,
        ph: 'A research question naming three aspects: a peace agreement, a community/location, a type of change.',
      },
      {
        label: 'b',
        text: '**Justify** the usefulness of your research question in relation to the statement of inquiry.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant to the statement of inquiry.',
      },
      {
        label: 'c',
        text: '**Identify** one source that is relevant to your research question or the statement of inquiry. You **cannot** use any of the sources mentioned in question 3.',
        marks: 1,
        ph: 'Name a source type AND specific details (e.g. a named book, documentary or person).',
      },
      {
        label: 'd',
        text: '**Describe** the usefulness of the source you identified in part (c) for your exhibition.',
        marks: 3,
        ph: 'Describe in detail one way the source type or its content is useful.',
      },
      {
        label: 'e',
        passage:
          'Source A — the IB learner profile.\nThe aim of all IB programmes is to develop internationally minded people who, recognizing their common humanity and shared guardianship of the planet, help to create a better and more peaceful world.\nAs IB learners we strive to be: (1) Inquirers (2) Knowledgeable (3) Thinkers (4) Communicators (5) Principled (6) Open-minded (7) Caring (8) Risk-takers (9) Balanced (10) Reflective.',
        artefact: {
          component: 'InfoGraphicPanel',
          caption: 'Source A — the IB Learner Profile (10 attributes).',
          data: {
            title: 'Source A — The IB Learner Profile',
            source: 'International Baccalaureate',
            intro: 'The aim of all IB programmes is to develop internationally minded people who help to create a better and more peaceful world. As IB learners we strive to be:',
            layout: 'grid',
            blocks: [
              { heading: 'Inquirers', icon: '🔎' }, { heading: 'Knowledgeable', icon: '📚' },
              { heading: 'Thinkers', icon: '💭' }, { heading: 'Communicators', icon: '💬' },
              { heading: 'Principled', icon: '⚖️' }, { heading: 'Open-minded', icon: '🌍' },
              { heading: 'Caring', icon: '🤝' }, { heading: 'Risk-takers', icon: '🚀' },
              { heading: 'Balanced', icon: '☯️' }, { heading: 'Reflective', icon: '🪞' },
            ],
          },
        },
        text: '**Outline** how you will develop **one** of the 10 attributes shown in **Source A** throughout this investigation.',
        marks: 2,
        ph: 'Name one attribute and briefly outline how the investigation develops it.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — quality of life & development',
    marks: 18,
    stem:
      'Various development indicators such as GDP have traditionally been used to measure the growth of a country’s economy.\n\n' +
      'More recently, other indicators of development such as HDI have been created to better understand the quality of life in a country.\n\n' +
      '**Source B** illustrates different aspects that may be considered when measuring quality of life.\n\n' +
      'Source B — the **Human Development Index (HDI)**. Three dimensions, each measured by an indicator:\n' +
      '• A long and healthy life → Life expectancy at birth\n' +
      '• Access to education → Expected years of schooling\n' +
      '• A decent standard of living → GNI* per capita\n' +
      '(*GNI — Gross National Income: the total income received by the country from its residents and businesses regardless of whether they are located in the country or abroad.)\n\n' +
      'In preparation for an upcoming youth conference, you have been given the task of persuading the audience of the importance of improving quality of life for all.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source B — the Human Development Index: three dimensions, each measured by an indicator.',
      data: {
        title: 'Source B — the Human Development Index (HDI)',
        source: 'United Nations Development Programme',
        center: { label: 'Human Development Index' },
        nodes: [
          { id: 'health', label: 'A long and healthy life', color: '#c2255c', detail: 'Measured by the indicator: life expectancy at birth.' },
          { id: 'edu', label: 'Access to education', color: '#1971c2', detail: 'Measured by the indicator: expected years of schooling.' },
          { id: 'living', label: 'A decent standard of living', color: '#2f9e44', detail: 'Measured by the indicator: GNI* per capita. (*GNI — Gross National Income: the total income received by the country from its residents and businesses, whether located in the country or abroad.)' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to your MYP studies, write a persuasive speech to **explain** why a country or region may need to improve the quality of life for its population.\n\n' +
          'In your speech, you must:\n' +
          '• select **one** of the three indicators listed in **Source B** to show how a country or region’s quality of life may be improved\n' +
          '• provide a title\n' +
          '• make a call to action\n' +
          '• consider your audience.',
        marks: 18,
        ph: 'A titled persuasive speech on one HDI indicator, with a call to action, addressed to the conference.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — global water stress',
    marks: 6,
    stem:
      'Water stress occurs when the demand for safe water is greater than the amount available in a country or region.\n\n' +
      'Look at **Source C** below, a map by the World Resources Institute, and answer the questions that follow.\n\n' +
      'Source C — **Global Water Stress**. A world choropleth map shading each country by its level of water stress: Extremely high (>80%), High (40–80%), Medium–high (20–40%), Low–medium (10–20%), Low (<10%), and Low water use. (*Water stress: when demand for safe, usable water in a country exceeds the supply.)',
    nativeContent: 'water_stress_map', // ARTEFACT: interactive Source C choropleth (hover region + legend spotlight)
    tasks: [
      { label: 'a', text: '**State** the origin of **Source C**.', marks: 1, ph: 'World Resources Institute (wri.org).' },
      { label: 'b', text: '**State** the purpose of **Source C**.', marks: 1, ph: "To inform on countries' exposure to water stress." },
      { label: 'c', text: '**Outline** one value of **Source C** for an MYP student researching water stress.', marks: 2, ph: 'One value (e.g. it clearly identifies most/least affected countries), briefly elaborated.' },
      { label: 'd', text: '**Outline** one limitation of **Source C** for an MYP student researching water stress.', marks: 2, ph: 'One limitation (e.g. it does not show the causes of water stress), briefly elaborated.' },
    ],
  },
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Water stress — global cooperation',
    marks: 2,
    stem: '**Source C** (Global Water Stress, World Resources Institute) is repeated here for information.',
    nativeContent: 'water_stress_map', // ARTEFACT: interactive Source C choropleth (repeated)
    tasks: [
      {
        label: '',
        text: '**Outline** one way the global community can support countries suffering from water stress.',
        marks: 2,
        ph: 'One role of the global community, referencing the global community, briefly elaborated.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water stress — future impact',
    marks: 4,
    stem:
      '**Source C** (Global Water Stress, World Resources Institute) is repeated here for information.\n\n' +
      'Experts are predicting that water stress will become worse in the future. Global water demand is projected to increase by 20% to 25% by 2050.',
    nativeContent: 'water_stress_map', // ARTEFACT: interactive Source C choropleth (repeated)
    tasks: [
      {
        label: '',
        text: '**Explain** one potential future impact of water stress on a specific country or region.',
        marks: 4,
        ph: 'One future impact on a named country/region, explained with reasons.',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — technology & natural environments',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** can technological advances impact natural environments?\n\n' +
          'In your essay, you must:\n' +
          '• reference **at least one** biome\n' +
          '• consider different perspectives.\n\n' +
          'You **cannot** include the topic of water stress due to its use in the previous questions.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) on technology and a named biome, weighing perspectives.',
      },
    ],
  },
]
