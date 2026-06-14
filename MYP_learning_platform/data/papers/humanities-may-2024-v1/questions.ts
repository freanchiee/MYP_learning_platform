import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2024 · Variant 1 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Construct mirrors humanities-may-2024 exactly: same crit / command term / marks /
 * task labels / number of tasks & questions. Total 80 marks, 120 minutes, 3 tasks:
 *   Task 1 Investigating (Crit A+B): Q1–Q5
 *   Task 2 Communicating (Crit A+C): Q6
 *   Task 3 Thinking critically (Crit A+B+C+D): Q7–Q9
 *
 * SURFACE CHANGED: scenario, datasets, exemplars and the artefacts themselves.
 *   Q4 → <DataTableInteractive/> (a school investigation logbook into e-waste recycling)
 *   Q7 / Q8 → <InfoGraphicPanel/> (Source A — a coastal city resilience-agency campaign poster)
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
  id: 'humanities-may-2024-v1',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2024,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// Source A — Coastal Resilience Agency of Marina Bay (campaign infographic poster).
// Reused by Q7 (source evaluation) and Q8 (economic-development explanation).
const RESILIENCE_SOURCE_A: import('@/lib/types').ArtefactSpec = {
  component: 'InfoGraphicPanel',
  caption:
    'Source A — Public campaign poster produced by the Coastal Resilience Agency of Marina Bay, setting out four methods used in its 2020 "Sponge District" plan to protect the waterfront from flooding while reusing its dockland heritage. Read each panel of the poster.',
  data: {
    title: 'Marina Bay — 2020 "Sponge District" plan',
    source: 'Coastal Resilience Agency of Marina Bay (public campaign poster)',
    intro:
      'Protecting our waterfront for the next generation. Four methods that combine our maritime heritage with flood resilience in the city centre.',
    layout: 'grid',
    blocks: [
      {
        heading: '1. Reuse of dockland buildings',
        items: [
          'A 1900s grain warehouse converted into waterfront apartments raised above flood level.',
          'A former customs house turned into a maritime museum and visitor centre.',
        ],
        note: 'Old structures kept and adapted rather than demolished.',
        icon: 'building',
      },
      {
        heading: '2. Raised and historic buildings together',
        items: [
          'New stilt-raised housing built alongside preserved 19th-century quay buildings to show old and new can co-exist.',
        ],
        note: 'Modern flood-safe design surrounding heritage structures.',
        icon: 'layers',
      },
      {
        heading: '3. Areas of cultural interest',
        items: [
          'A restored lighthouse opened as a public viewpoint.',
          'A heritage shipyard converted into a craft and arts quarter.',
          'Excavated colonial-era jetty foundations displayed in a public plaza.',
        ],
        note: 'Heritage features adapted for modern public use.',
        icon: 'landmark',
      },
      {
        heading: '4. Natural spaces and water',
        items: [
          'Tidal wetlands and mangrove belts restored to absorb storm surge.',
          'A green riverside park with rain gardens that store and filter floodwater.',
        ],
        note: 'Natural defences preserved for recreation and ecological reasons.',
        icon: 'leaf',
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
    topic: 'Stakeholder who benefitted from industrialization',
    marks: 1,
    stem:
      'A short-response knowledge question on industrialization. A response can reference any industrialization period.',
    tasks: [
      {
        label: '',
        text: '**Identify** one stakeholder who has benefitted from industrialization.',
        marks: 1,
        ph: 'Name one stakeholder, e.g. factory owners, workers, investors.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reason why industrialization occurred',
    marks: 2,
    stem:
      'A short-response question on the causes of industrialization. Note: a response can reference any industrialization period. Note: ease, speed and improvements are considered as changes/consequences and not reasons.',
    tasks: [
      {
        label: '',
        text: '**Outline** one reason why industrialization occurred.',
        marks: 2,
        ph: 'Give a brief account of one cause, with brief detail.',
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'How society changed after industrialization',
    marks: 3,
    stem:
      'A short extended-response question. Note: a society can be considered as a nation, a country, or any structured group of people. Note: a response can reference any industrialization period.',
    tasks: [
      {
        label: '',
        text: '**Describe** how society changed after industrialization.',
        marks: 3,
        ph: 'Give a detailed account of one societal change; an example may support.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Evaluate a student investigation into e-waste recycling habits',
    marks: 8,
    stem:
      'As a part of their research project, a group of MYP year 5 students in Kenya has led an investigation into understanding the impact of technological innovations.\n\n' +
      '**Statement of inquiry: Technological innovations have changed lives at local levels.**\n\n' +
      'The students chose to investigate the impact of mobile-phone recycling (e-waste) on households and repair workers in their town. They had one month to complete their investigation.\n\n' +
      'One of the students kept a logbook recording how they conducted their investigation. The investigation process is presented in the interactive table below. You will be asked to evaluate their investigation process.\n\n' +
      '**Summary of the logbook:**\n' +
      '• **Week 1** — The students wrote the research question “To what extent has mobile-phone recycling changed the livelihoods of repair workers in our town?” and interviewed five repair-shop workers, asking how they collect and reuse old phone parts and how much of their income comes from recycled parts.\n' +
      '• **Findings from the interviews** — All five workers had repaired phones for at least four years; recycled parts are a reliable and cheap source of components; one worker said reusing screens roughly halved repair costs for customers; three of the five sell refurbished phones; two said e-waste collection is unreliable.\n' +
      '• **Week 3** — They found secondary information on a global environment-agency website (published 2019) listing benefits of e-waste recycling: recovering valuable metals; creating local repair jobs; reducing landfill; lowering the cost of devices; raising awareness of safe disposal.\n' +
      '• **Week 4** — They visited a second neighbourhood and took photographs of repair stalls and of an informal e-waste collection point.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Q4 stimulus — the student investigation logbook. Each row is one week of the MYP year 5 students’ investigation into mobile-phone recycling among repair workers.',
      data: {
        title: 'Investigation logbook',
        source: 'MYP year 5 student investigation, Kenya',
        caption: 'Research question: “To what extent has mobile-phone recycling changed the livelihoods of repair workers in our town?”',
        headers: ['Week', 'Method used', 'What we did / found'],
        rows: [
          [
            'Week 1',
            'Wrote research question; interviewed 5 repair-shop workers',
            'We asked: How do you collect and reuse old phone parts? How much of your income comes from recycled parts?',
          ],
          [
            'Week 2',
            'Summarised the interviews (primary data)',
            'All 5 had repaired phones for at least 4 years; recycled parts are a reliable, cheap source of components; one worker said reusing screens roughly halved repair costs; 3 of 5 sell refurbished phones; 2 said e-waste collection is unreliable.',
          ],
          [
            'Week 3',
            'Secondary research — global environment-agency website (published 2019)',
            'Listed benefits of e-waste recycling: recovering valuable metals; creating local repair jobs; reducing landfill; lowering device costs; raising awareness of safe disposal.',
          ],
          [
            'Week 4',
            'Fieldwork in a second neighbourhood — photographs',
            'Photographed repair stalls with workers at benches, and an informal e-waste collection point with stacked old phones and cables.',
          ],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** their investigation process.',
        marks: 8,
        ph: 'Weigh strengths and limitations; give an overall appraisal of the process.',
      },
    ],
  },
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Plan an investigation: industrialization changed lives around the world',
    marks: 12,
    stem:
      'You have been asked to investigate the impact of industrialization on the world. You have been given the following statement of inquiry:\n\n' +
      '**Statement of inquiry: Industrialization has changed lives around the world.**',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to help you investigate the statement of inquiry.',
        marks: 2,
        ph: 'Write a clear AND focused research question (specify a group/place).',
      },
      {
        label: 'b',
        text: '**Justify** why the research question is worthy of investigation.',
        marks: 4,
        ph: 'Give a reasoned argument why the RQ is worth investigating.',
      },
      {
        label: 'c',
        text: '**State** one primary source you would use for your investigation.',
        marks: 1,
        ph: 'Name one primary source relevant to your RQ/SoI.',
      },
      {
        label: 'd',
        text: '**State** one secondary source you would use for your investigation.',
        marks: 1,
        ph: 'Name one secondary source relevant to your RQ/SoI.',
      },
      {
        label: 'e',
        text: '**Identify** two people you would interview to broaden your investigation.',
        marks: 2,
        ph: 'Name two specific people relevant to your investigation.',
      },
      {
        label: 'f',
        text: '**Outline** the information you would gather from **one** of the people you identified in part (e).',
        marks: 2,
        ph: 'Brief account of the information you’d gather, with brief detail.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Script explaining to an economic agent how to reduce youth unemployment',
    marks: 18,
    stem:
      'As part of an MYP school project on the state of the economy around the world, your team has been tasked to create a short video about youth unemployment. You must work on the script to explain to one economic agent how they could help reduce youth unemployment for a country of your choice.\n\n' +
      'These are the economic agents you can choose from:\n' +
      '• Consumers\n' +
      '• Producers\n' +
      '• Governments\n' +
      '• Banks\n\n' +
      'Your script must:\n' +
      '• include an introduction and conclusion\n' +
      '• inform, engage, and convince so that your ideas lead the economic agent into action\n' +
      '• include two ways in which the economic agent could help.\n\n' +
      'Note: if you only provide one way in which the economic agent can help, the maximum mark that can be awarded for Criterion A is 3 marks.',
    tasks: [
      {
        label: '',
        text:
          '**Explain** to **one** economic agent how they could help reduce youth unemployment for a country of your choice. Write the script for a short video (with an introduction and conclusion) that informs, engages and convinces, and includes **two** ways in which the economic agent could help.',
        marks: 18,
        ph: 'Write a persuasive video script: hook, 2 ways the agent can help, call to action.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + B + C + D) ─────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation: origin, purpose, value and limitation of Source A (Marina Bay)',
    marks: 8,
    stem:
      'In 2020, the Coastal Resilience Agency of Marina Bay introduced an urban plan aimed at protecting the waterfront from flooding while reusing its dockland heritage in the city centre. **Source A** shows the agency’s public campaign poster, which gives details of four of the methods they used to do this.\n\n' +
      'Look at **Source A** and answer the questions that follow. You will be asked to analyse it in terms of its origin, purpose, value and limitations for an MYP student studying sustainable management of urban environments.\n\n' +
      '**The four methods shown in Source A:**\n' +
      '1. **Reuse of dockland buildings** — a 1900s grain warehouse turned into raised waterfront apartments and a former customs house turned into a maritime museum.\n' +
      '2. **Raised and historic buildings together** — new flood-safe stilt-raised housing built alongside preserved 19th-century quay buildings to show they can co-exist.\n' +
      '3. **Areas of cultural interest** — heritage features (a lighthouse, a shipyard, excavated jetty foundations) adapted for modern public use.\n' +
      '4. **Natural spaces and water** — tidal wetlands, mangrove belts and rain-garden parks restored to absorb storm surge and preserved for recreation and ecological reasons.',
    artefact: RESILIENCE_SOURCE_A,
    tasks: [
      { label: 'a', text: '**State** the origin of **Source A**.', marks: 1, ph: 'Who/where the source comes from.' },
      { label: 'b', text: '**State** the purpose of **Source A**.', marks: 1, ph: 'Why the source was made.' },
      {
        label: 'c',
        text: '**Describe** one value of **Source A** for an MYP student studying sustainable management of urban environments.',
        marks: 3,
        ph: 'Give a detailed account of one value of the source.',
      },
      {
        label: 'd',
        text: '**Describe** one limitation of **Source A** for an MYP student studying sustainable management of urban environments.',
        marks: 3,
        ph: 'Give a detailed account of one limitation of the source.',
      },
    ],
  },
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Explain how a Marina Bay resilience method contributed to economic development',
    marks: 4,
    stem:
      '**Source A** (the public campaign poster of the Coastal Resilience Agency of Marina Bay) is repeated here for information.',
    artefact: RESILIENCE_SOURCE_A,
    tasks: [
      {
        label: '',
        text:
          '**Explain** how **one** of the **following** methods used by the Coastal Resilience Agency of Marina Bay contributed to the economic development of the city.\n\n' +
          '○ Reuse of dockland buildings\n' +
          '○ Raised and historic buildings together\n' +
          '○ Areas of cultural interest\n' +
          '○ Natural spaces and water',
        marks: 4,
        ph: 'Give a detailed account with reasons of one method’s economic contribution.',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'To what extent has redevelopment of one place contributed to its sustainable management (essay)',
    marks: 24,
    stem:
      'Write a well-structured essay in response to the question below.\n\n' +
      'Note: a place can be an area, town, building, etc. Perspectives must be considered depending on the place selected (e.g. if you select cities as a place, two different cities could be considered as two perspectives). A response that does not include a conclusion indicating to what extent the redevelopment of one place has contributed to its sustainable management is likely to be awarded 1–2 marks for Criterion D. A conclusion should not present new aspects not previously included in the essay.',
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** has the redevelopment of **one** place contributed to its sustainable management?\n\n' +
          'In your essay, you must:\n' +
          '• provide example(s) from your MYP studies and/or your own knowledge\n' +
          '• consider different perspectives.\n\n' +
          'You **cannot** use the redevelopment of Marina Bay as an example.',
        marks: 24,
        ph: 'Balanced essay: example (not Marina Bay), multiple perspectives, reasoned judgement.',
      },
    ],
  },
]
