import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2023 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Source: M23-INS. Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A + B, 26): Q1–Q4
 *   Task 2 Communicating (Crit A + C, 18): Q5
 *   Task 3 Thinking critically (Crit A + C + D, 36): Q6–Q8
 *
 * Stimulus sources are transcribed as text here (parallel original extracts) so the
 * paper is fully answerable today. The visual sources become interactive artefacts
 * (code_rendered components) wired via the `artefact` field:
 *   Q2  Source A  → <InfoGraphicPanel/>  (flags / global cooperation — photo recreated as a panel)
 *   Q3  Action plan → <InfoGraphicPanel/> (4-section investigation action-plan wheel)
 *   Q5  Source B  → <SourceDocViewer/>   (2023 Trade Fair video advertisement transcript)
 *   Q6/Q7 Source C → <InteractiveChart/> (Singapore 1972 & 1986 population pyramids, by age & sex)
 *   Q8  Source D  → <InfoGraphicPanel/>  (the four factors of production)
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
  id: 'humanities-may-2023',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2023,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source C — Singapore population pyramids (1972 & 1986) ──────────────────
// Age bands 0–4 … 80+; each value is the % of the total population in that
// age/sex band (men + women across all 17 bands ≈ 100% per year). The 1972
// distribution is expansive (wide young base, steady taper); the 1986
// distribution is constrictive/ageing (narrower base, a working-age bulge at
// 20–39, and more people surviving into older bands).
const SG_AGE_BANDS = [
  '0–4', '5–9', '10–14', '15–19', '20–24', '25–29', '30–34', '35–39',
  '40–44', '45–49', '50–54', '55–59', '60–64', '65–69', '70–74', '75–79', '80+',
]
const populationPyramidData = {
  kind: 'bar' as const,
  title: 'Singapore — population structure, 1972 and 1986',
  source: 'Tom Publishing, Wisconsin, United States',
  x: { label: 'Age group (years)', categories: SG_AGE_BANDS },
  y: { label: 'Percentage of population', min: 0, max: 10, unit: '%' },
  series: [
    // 1972 — expansive pyramid: wide young base tapering steadily to a tiny apex.
    { name: '1972 Men', color: '#1971c2', points: [5.6, 5.2, 4.8, 4.2, 3.6, 3.0, 2.4, 2.0, 1.6, 1.3, 1.0, 0.8, 0.6, 0.4, 0.3, 0.15, 0.08] },
    { name: '1972 Women', color: '#f08c00', points: [5.4, 5.0, 4.6, 4.0, 3.5, 2.9, 2.3, 1.9, 1.5, 1.2, 1.0, 0.8, 0.6, 0.45, 0.32, 0.18, 0.1] },
    // 1986 — constrictive/ageing: narrower base, a bulge at 20–39, more elderly.
    { name: '1986 Men', color: '#0b7285', points: [3.4, 3.6, 3.8, 4.0, 4.6, 5.2, 5.4, 4.8, 3.6, 2.8, 2.2, 1.7, 1.3, 1.0, 0.7, 0.4, 0.2] },
    { name: '1986 Women', color: '#c2255c', points: [3.2, 3.5, 3.7, 3.9, 4.5, 5.1, 5.3, 4.7, 3.6, 2.8, 2.3, 1.8, 1.4, 1.1, 0.85, 0.55, 0.35] },
  ],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'International institutions and world peace',
    marks: 4,
    stem:
      'As a response to wars and conflicts, many countries helped to create international institutions and organizations designed to bring peace, stability, and cooperation to the world.',
    tasks: [
      {
        label: '',
        text: '**Explain** how **one** international institution or organization has improved either peace, stability or cooperation in the world.',
        marks: 4,
        ph: 'Name one institution (e.g. UN); give reasoning for the improvement.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Resolving a current global challenge (Source A)',
    marks: 2,
    stem:
      'Look at **Source A** and answer the question that follows.\n\n' +
      'Source A — “The future of global cooperation”: an image of many national flags flying on flagpoles against a clear blue sky.\n\n' +
      'Text accompanying Source A: “In today’s world, the well-being of people depends on cooperation between countries to solve global challenges such as:\n' +
      '• disease\n' +
      '• access to health care\n' +
      '• climate change\n' +
      '• migration\n' +
      '• global economic inequality.”',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source A — “The future of global cooperation”: national flags and the global challenges that depend on cooperation between countries.',
      data: {
        title: 'The future of global cooperation',
        intro:
          'In today’s world, the well-being of people depends on cooperation between countries to solve global challenges such as:',
        layout: 'grid',
        blocks: [
          { icon: '🦠', heading: 'Disease', items: ['Spread of illness across borders'] },
          { icon: '🏥', heading: 'Access to health care', items: ['Unequal access to treatment and medicine'] },
          { icon: '🌍', heading: 'Climate change', items: ['Rising temperatures and extreme weather'] },
          { icon: '🧳', heading: 'Migration', items: ['Movement of people between countries'] },
          { icon: '⚖️', heading: 'Global economic inequality', items: ['Gaps in wealth between and within countries'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source A or** your own knowledge, **outline** how **one** current global challenge could be resolved.',
        marks: 2,
        ph: 'Pick one challenge; say HOW it could be resolved with brief detail.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: "Evaluating a team's investigation action plan (cultural strength)",
    marks: 8,
    stem:
      'There are many factors that can have an impact on superpowers or empires. A team developed an action plan for an investigation into the importance of one of these factors: **cultural strength**. You will be asked to evaluate their action plan.\n\n' +
      'The action plan has four sections:\n\n' +
      '**1. Team strategy**\n' +
      '• Assign roles\n' +
      '• Set small goals (to-do list)\n' +
      '• Set deadlines\n\n' +
      '**2. Brainstorm session**\n' +
      '• What could be our primary and secondary sources?\n' +
      '• Determine how we are going to share our notes.\n' +
      '• Agree on this research question: What is cultural strength?\n\n' +
      '**3. Sources**\n' +
      '• Documentary: The American Civil War in the United States (1861–1865), Ken Burns, Public Broadcasting Service, 1990.\n' +
      '• Interview with a university professor on the belief of certain values throughout history: country, race, religion, language.\n' +
      '• Encyclopaedia entry “The European Union”, Encyclopaedia Britannica.\n' +
      '• Research on communist views in China and in the USSR during the 20th century.\n\n' +
      '**4. Report**\n' +
      '• Combine our findings and write the report into the importance of cultural strength for a superpower or an empire.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: "Action plan — the team's four-section plan for investigating the importance of cultural strength for a superpower or empire.",
      data: {
        title: 'Action plan',
        intro: 'A team’s plan for investigating the importance of cultural strength for a superpower or an empire.',
        layout: 'flow',
        blocks: [
          {
            icon: '🎯',
            heading: '1. Team strategy',
            items: ['Assign roles', 'Set small goals (to-do list)', 'Set deadlines'],
          },
          {
            icon: '💡',
            heading: '2. Brainstorm session',
            items: [
              'What could be our primary and secondary sources?',
              'Determine how we are going to share our notes.',
              'Agree on this research question: What is cultural strength?',
            ],
          },
          {
            icon: '📖',
            heading: '3. Sources',
            items: [
              'Documentary: The American Civil War in the United States (1861–1865), Ken Burns, Public Broadcasting Service, 1990.',
              'Interview with a university professor on the belief of certain values throughout history: country, race, religion, language.',
              'Encyclopaedia entry “The European Union”, Encyclopaedia Britannica.',
              'Research on communist views in China and in the USSR during the 20th century.',
            ],
          },
          {
            icon: '👥',
            heading: '4. Report',
            items: ['Combine our findings and write the report into the importance of cultural strength for a superpower or an empire.'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: "**Evaluate** the team's action plan for the investigation on the importance of cultural strength for a superpower or an empire.",
        marks: 8,
        ph: 'Discuss strengths AND limitations of the plan, then give an overall appraisal.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Planning a team investigation into a factor affecting a superpower/empire',
    marks: 12,
    stem:
      'For a school project, your teacher has asked you to work in a team. Your task is to investigate the effect of **one** of the following factors on a superpower or empire:\n' +
      '• Military\n' +
      '• Economy\n' +
      '• Geography\n' +
      '• Technology\n' +
      '• Political system',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to investigate how **one** of the factors listed above has affected a superpower or an empire.',
        marks: 2,
        ph: 'Write one clear AND focused research question naming a factor and a superpower/empire.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question to the investigation.',
        marks: 4,
        ph: 'Explain why your RQ is relevant, with reasoning (not just repeating the question).',
      },
      {
        label: 'c',
        text: '**State** **one** primary source you would use that is clearly linked to your investigation and research question.',
        marks: 1,
        ph: 'Name one specific primary source linked to your RQ (e.g. interview with a military specialist).',
      },
      {
        label: 'd',
        text: '**Outline** the method you would use to record the information from the source stated in part (c).',
        marks: 2,
        ph: 'Describe how you would record info (e.g. notepad, highlighting main points).',
      },
      {
        label: 'e',
        text: '**State** **one** secondary source you would use that is clearly linked to your investigation and research question.',
        marks: 1,
        ph: 'Name one specific secondary source linked to your RQ (e.g. a book on the Cold War).',
      },
      {
        label: 'f',
        text: '**Outline** how you would make sure the team collaborates effectively during the investigation.',
        marks: 2,
        ph: 'Describe one way to ensure effective team collaboration with brief detail.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Persuasive speech on sustainable production and consumption (Source B)',
    marks: 18,
    stem:
      'As a leader of a shopkeeper association in your area you have been invited to the Trade Fair advertised in the video shown in **Source B** below. You have been asked to deliver a persuasive speech to an audience of stakeholders involved in production and consumption including producers, consumers, employees, governments, non-governmental organizations (NGOs) and members of the community.\n\n' +
      'Source B is a video advertisement for the 2023 Trade Fair. Source B transcript:\n\n' +
      '“We are using more resources and services than nature can regenerate through practices such as fishing and mining.\n' +
      'We are emitting more and more carbon dioxide into the atmosphere because of the number of cars being used and factories producing goods.\n' +
      'We replace things like clothes and electronics rather than repairing or reusing them too often, leading to massive amounts of waste.\n' +
      'The theme for the 2023 Trade Fair is the United Nation’s Sustainable Development Goal 12: ‘responsible consumption and production’.\n' +
      'Come along to your local exhibition centre to find out how you can help the cause of sustainable development!”',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source B — transcript of the video advertisement for the 2023 Trade Fair (UN Sustainable Development Goal 12: responsible consumption and production).',
      data: {
        title: '2023 Trade Fair — video advertisement',
        attribution: 'Source B (video transcript)',
        kind: 'Video advertisement',
        paragraphs: [
          'We are using more resources and services than nature can regenerate through practices such as fishing and mining.',
          'We are emitting more and more carbon dioxide into the atmosphere because of the number of cars being used and factories producing goods.',
          'We replace things like clothes and electronics rather than repairing or reusing them too often, leading to massive amounts of waste.',
          'The theme for the 2023 Trade Fair is the United Nation’s Sustainable Development Goal 12: ‘responsible consumption and production’.',
          'Come along to your local exhibition centre to find out how you can help the cause of sustainable development!',
        ],
        glossary: {
          'SDG 12': 'United Nations Sustainable Development Goal 12 — responsible consumption and production.',
          stakeholders: 'People affected by or involved in production and consumption: producers, consumers, employees, governments, NGOs and members of the community.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In your persuasive speech, **explain** how sustainable production and consumption can benefit **at least one** of the stakeholders mentioned above. Your speech must be accompanied by a supporting presentation slide with:\n' +
          '• a slogan to draw attention to the topic\n' +
          '• at least three points related to your speech.',
        marks: 18,
        ph: 'Write a persuasive speech (intro/body/conclusion) + a slide with a slogan and 3+ points.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Singapore population textbook (Source C)',
    marks: 6,
    stem:
      'Look at **Source C** and answer the questions that follow.\n\n' +
      'Source C is an excerpt from a digital textbook about population. Attribution shown: “Tom Publishing, Wisconsin, United States”. Text:\n\n' +
      '“In 1972, the prime minister of Singapore is quoted as saying the following relating to population growth: ‘Zero, possibly even negative population growth.’\n' +
      'In 1986, the same prime minister is quoted as saying the following relating to population growth: ‘At least two children. Better three. Four if you can afford it.’\n' +
      'The population pyramids for Singapore for 1972 and 1986 are shown below.”\n\n' +
      'Two population pyramids (1972 and 1986) accompany the source, with blue = Men and orange = Women, age bands 0–4 up to 80+ years on the vertical axis, and “Percentage of population” on the horizontal axis (scale 10–5–0–5–10).',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C — Singapore population structure for 1972 (expansive) and 1986 (ageing), shown by age group and sex. Toggle a series in the legend to compare years or sexes.',
      data: populationPyramidData,
    },
    tasks: [
      { label: 'a', text: '**State** the origin of **Source C**.', marks: 1, ph: 'Give the origin/publisher — must be more than just the location.' },
      { label: 'b', text: '**State** the purpose of **Source C**.', marks: 1, ph: 'Give the purpose in your own words (not copied from the source).' },
      { label: 'c', text: '**Outline** **one** value of **Source C** for a student studying population patterns in Singapore.', marks: 2, ph: 'Give one value (content/origin/purpose) with brief elaboration.' },
      { label: 'd', text: '**Outline** **one** limitation of **Source C** for a student studying population patterns in Singapore.', marks: 2, ph: 'Give one limitation with brief elaboration.' },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: "Justifying the PM's slogans using population pyramids (Singapore)",
    marks: 6,
    stem:
      'The population pyramids for Singapore in 1972 and 1986 are repeated.\n\n' +
      'Singapore 1972 pyramid: a wide base tapering steadily to a narrow top — a large young population (0–24 age bands are widest) and few older people. Singapore 1986 pyramid: a narrower base with bulges in the working-age/young-adult bands (around 20–39) and more people living to older ages — fewer young children, an ageing trend. Blue = Men (left), Orange = Women (right); vertical axis = age bands 0–4 to 80+; horizontal axis = “Percentage of population” (scale 10–5–0–5–10).\n\n' +
      'Prime minister’s slogans:\n' +
      '1972: “Zero, possibly even negative population growth.”\n' +
      '1986: “At least two children. Better three. Four if you can afford it.”',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C (repeated) — Singapore population structure for 1972 and 1986 by age group and sex. Use the legend to compare the two years.',
      data: populationPyramidData,
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to data from the population pyramids, **justify** why the prime minister chose to use the two different slogans in 1972 and 1986.\n' +
          '1972: “Zero, possibly even negative population growth.”\n' +
          '1986: “At least two children. Better three. Four if you can afford it.”',
        marks: 6,
        ph: 'Use pyramid data for BOTH years and give detailed reasoning for each slogan.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Essay — Population change and resources (Source D)',
    marks: 24,
    stem:
      'Look at **Source D** and answer the question that follows.\n\n' +
      'Source D is a four-panel infographic defining the factors of production, each with a photograph and caption:\n' +
      '• **Capital** — photo of an automated factory/robot assembly line. Caption: “Goods used to make other goods (e.g. machines used to make other goods).”\n' +
      '• **Labour** — photo of a worker in a hard hat and high-visibility jacket holding a tablet in a factory. Caption: “People who work to produce goods/services.”\n' +
      '• **Land** — photo of a stack of cut logs in a forest. Caption: “The natural resources such as land, minerals and forests used in production.”\n' +
      '• **Entrepreneurship** — photo of a group of people collaborating at a whiteboard/meeting. Caption: “People who combine other resources to produce or improve goods/services.”',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source D — the four factors of production: capital, labour, land and entrepreneurship.',
      data: {
        title: 'The factors of production',
        intro: 'The four resources combined to produce goods and services.',
        layout: 'grid',
        blocks: [
          { icon: '🏭', heading: 'Capital', items: ['Goods used to make other goods (e.g. machines used to make other goods).'] },
          { icon: '👷', heading: 'Labour', items: ['People who work to produce goods/services.'] },
          { icon: '🌲', heading: 'Land', items: ['The natural resources such as land, minerals and forests used in production.'] },
          { icon: '🧠', heading: 'Entrepreneurship', items: ['People who combine other resources to produce or improve goods/services.'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          '**To what extent** are changes in population related to changes in resources?\n\n' +
          'In a well-structured essay, you should:\n' +
          '• provide examples from your MYP studies\n' +
          '• consider different perspectives\n' +
          '• consider **at least one** of the resources shown in **Source D**.',
        marks: 24,
        ph: 'Write a structured essay: intro, balanced perspectives w/ examples, synthesised conclusion.',
      },
    ],
  },
]
