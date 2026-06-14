import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2019 · ISOMORPHIC VARIANT 1 (geography-nov-2019-v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Construct-identical to geography-nov-2019. Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (C, 2) · Q7 (C, 4) · Q8 (C, 6) · Q9 (24)
 *
 * NEW scenario (genuinely different surface, same assessed skills/commands):
 * coastal & marine resources and climate-hazard adaptation in South / Southeast Asia —
 * water-resource classification, sand-mining scarcity, mangrove-restoration cooperation
 * in the Sundarbans (Bay of Bengal), river-plastic pollution campaigning, cyclone risk &
 * vulnerability, and flood-warning technology.
 *
 * I&S carve-out: each artefact-bearing question presents the new scenario through a
 * DIFFERENT, scenario-appropriate `component` than the source used for that question:
 *   Q1 → InfoGraphicPanel (grid)      [source DragAnnotate]   classification poster of water resources
 *   Q3 → InfoGraphicPanel (flow)      [source SlideDeck]      mangrove-consultant investigation action plan
 *   Q5 → SourceDocViewer              [source SlideDeck]      river-plastic campaign report (evaluable source)
 *   Q6 → DataTableInteractive         [source InteractiveChart] decade table of cyclone deaths (value-read)
 *   Q7 → NetworkGraph                 [source VennOverlap]    hazard factors + vulnerability → greater risk
 *   Q8 → DataTableInteractive         [source SlideDeck]      "FloodWatch" app feature table (source-eval)
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
  id: 'geography-nov-2019-v1',
  subject: 'Geography',
  session: 'November',
  year: 2019,
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
    topic: 'Natural resources — renewable & non-renewable',
    marks: 2,
    stem:
      'Natural water-related resources can be classified as renewable or non-renewable.\n\n' +
      'Select four appropriate resources and complete the “Natural water resources” diagram — sorting each into the correct category.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Classify each water-related resource. Renewable: rainwater, river flow, tidal energy. Non-renewable: deep fossil groundwater (aquifer).',
      data: {
        title: 'Natural water resources',
        source: 'Classification panel',
        intro:
          'Sort each resource into the correct category. Renewable resources are naturally replenished within a human lifetime; non-renewable resources are used faster than they can be replaced. Four correctly positioned = 2 marks; two/three = 1 mark.',
        layout: 'grid',
        blocks: [
          { heading: 'Rainwater (harvested)', icon: '🌧️', items: ['Replenished by the water cycle each monsoon'], note: 'Category to assign: renewable / non-renewable' },
          { heading: 'River flow (hydropower)', icon: '🏞️', items: ['Continuously fed by precipitation and snowmelt'], note: 'Category to assign: renewable / non-renewable' },
          { heading: 'Tidal energy', icon: '🌊', items: ['Driven by the gravitational pull of the Moon and Sun'], note: 'Category to assign: renewable / non-renewable' },
          { heading: 'Deep fossil groundwater', icon: '🛢️', items: ['Stored in ancient aquifers over thousands of years; barely recharged'], note: 'Category to assign: renewable / non-renewable' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Select** four appropriate resources and complete the diagram, sorting them into renewable and non-renewable resources.',
        marks: 2,
        ph: 'Renewable: rainwater, river flow, tidal energy. Non-renewable: deep fossil groundwater. Four correct = 2; two/three correct = 1.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Causes of resource scarcity',
    marks: 4,
    stem: 'Natural resources can become scarce.',
    tasks: [
      {
        label: '',
        text:
          'Using an example from your MYP studies, **explain** one factor that can cause scarcity of natural resources.',
        marks: 4,
        ph: 'Explain one factor (e.g. unsustainable extraction such as sand mining) with reasons and a named example. No example → max 3 marks.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — mangrove restoration / coastal cooperation',
    marks: 8,
    stem:
      'Read the investigation action plan below and answer the question that follows.\n\n' +
      'The Sundarbans is the world’s largest mangrove forest, shared by Bangladesh and India in the Bay of Bengal. The mangroves protect coastal communities from cyclones and storm surges, but they are being lost to shrimp farming, embankment building and rising sea levels.\n\n' +
      'Bangladesh and India have hired a coastal-management consultant to help them agree on a plan to restore and share the mangrove belt. The consultant’s investigation action plan is shown below as a flow of stages — hover or click a stage to focus on it. You will be asked to evaluate this action plan.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The coastal-management consultant’s investigation action plan (flow: Research question → Interview → Further research). This action plan is the marked stimulus.',
      data: {
        title: 'Mangrove restoration — investigation action plan',
        source: 'Consultant · Action Plan',
        intro:
          'Statement of inquiry: “Natural resources can be protected more effectively through cross-border cooperation.” The consultant’s plan to investigate this is shown as three stages.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Research question',
            items: ['“To what extent can cooperation between countries lead to fair protection of the coast?”'],
            note: 'A broad question with no named place, river or type of cooperation specified.',
          },
          {
            heading: 'Interview',
            items: [
              'Interview with the Bangladeshi Forestry Minister.',
              '1. When will the restoration project be finished?',
              '2. Why is restoring the mangroves so important for Bangladesh?',
              '3. How will restoration affect the natural cycle of the delta?',
              '4. What benefits will restoration bring to India?',
            ],
            note: 'Only one official, from one of the two countries, is interviewed.',
          },
          {
            heading: 'Further research',
            items: [
              'Discuss with stakeholders the impact of restoration on: the share of fish and timber; economic development; the natural delta environment.',
              'www.UNwater.org — UN information on shared water and coastal resources.',
            ],
            note: 'Both primary (interview) and secondary (UN) sources are planned.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the consultant’s action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked: Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — natural resource management',
    marks: 12,
    stem:
      'Now that you have evaluated the consultant’s action plan in question 3, you will take on the role of a researcher who has been asked to plan an investigation into issues relating to natural resource management.\n\n' +
      'The following is the statement of inquiry you need to base your investigation on:\n\n' +
      '**Statement of inquiry:** “The extraction of natural resources can have a great impact on human and natural environments.”',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a location/place) and clearly connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of your research question to the statement of inquiry.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant to the SoI — build from a simple connection to a fully justified one.',
      },
      {
        label: 'c',
        text: '**List** two relevant methods for collecting information/data for your investigation.',
        marks: 2,
        ph: 'Two valid methods (e.g. interviews; questionnaire/survey; library/internet research). 1 mark each.',
      },
      {
        label: 'd',
        text: '**Outline** how one of the methods listed in part (c) could be useful to your investigation.',
        marks: 2,
        ph: 'Elaborate, with brief detail, on how your chosen method is useful (e.g. a video interview gives primary data from an expert).',
      },
      {
        label: 'e',
        text: '**Outline** one challenge you might face while collecting information/data for your investigation.',
        marks: 2,
        ph: 'Elaborate, with brief detail, on one possible challenge (e.g. unreliable data because operators may not publish it).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — river-plastic petition & TV interview',
    marks: 18,
    stem:
      'Read the campaign report below, then build your campaign.\n\n' +
      'The report has inspired you to start a petition to convince world leaders to take action and protect natural environments from plastic pollution. You will: write a title for your petition, choose one image idea to be shown on it and write a caption, and then give a TV interview to persuade people to sign.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'River-plastic campaign report (an evaluable source). Use the evaluation lenses; the four image ideas for your petition are listed at the end — choose one.',
      data: {
        title: 'Rivers of Plastic — campaign report',
        kind: 'Secondary source · campaign report',
        attribution: 'Ocean Futures coalition · environmental campaign briefing',
        glossary: {
          'overconsumption': 'using resources faster than they can be replaced or safely disposed of',
          'microplastics': 'plastic fragments smaller than 5 mm that pollute water and enter food chains',
          'single-use plastic': 'plastic items designed to be thrown away after one use, such as bags and bottles',
        },
        paragraphs: [
          'All over the world, rivers and oceans are coming under threat from plastic pollution driven by overconsumption. This is when single-use plastic enters waterways in an unsustainable way faster than it can ever break down.',
          'In many countries, governments are now considering banning single-use plastic and charging producers for the waste they create.',
          'Around 90% of the plastic in the oceans is carried there by just a small number of major rivers, including the Ganges in South Asia and the Mekong in Southeast Asia, which pass through densely populated regions.',
          'On the coast of Indonesia, marine species such as turtles and seabirds are dying after swallowing plastic bags they mistake for food, and microplastics are now found inside the fish that coastal communities rely on.',
          'Plastic waste is smothering coral on reefs and clogging the mangrove channels that protect coastlines from storms.',
          'If something is not done urgently, these natural environments will be lost to future generations.',
          'IMAGE IDEAS for your petition — choose ONE: (1) a sea turtle swimming beside a floating plastic bag in clear water; (2) fishers hauling a net full of plastic bottles instead of fish; (3) a river choked bank-to-bank with floating plastic waste in a city; (4) a child standing on a beach buried in washed-up plastic litter.',
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Build your petition and then give your TV interview.\n\n' +
          'You must:\n' +
          '• write an appropriate **title** for your petition\n' +
          '• choose **one** image idea and write a brief **caption** to help persuade people to sign\n' +
          '• in the interview, **explain** to viewers how natural environments are threatened by plastic pollution and how this can be managed sustainably for future generations, referring to examples from your MYP studies.',
        marks: 18,
        ph: 'A titled, captioned petition + a persuasive TV interview explaining plastic-pollution threats and sustainable management, with examples. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Reading data — global cyclone deaths 1900–2015',
    marks: 2,
    stem:
      'Using data from **Source A**, you will describe the trend in global deaths from tropical cyclones between the 1900s and 2010s.\n\n' +
      'The number of deaths is given as a total per decade (1900s to 2000s; and then six years from 2010 to 2015). Click a row to pin the decade you are reading off.',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source A — Global deaths from tropical cyclones by decade. The 1900s show 198,420 deaths; the 2010s ≈ 84,260 deaths. Deaths fall over the period while the number of recorded cyclones rises.',
      data: {
        title: 'Source A — Global deaths from tropical cyclones',
        source: 'Source A (recreated)',
        caption: 'Read the trend between the first decade (1900s) and the last (2010s).',
        headers: ['Decade', 'Reported deaths', 'Recorded cyclones'],
        rows: [
          ['1900s', '198,420', '34'],
          ['1910s', '142,000', '41'],
          ['1920s', '120,500', '52'],
          ['1930s', '305,000', '60'],
          ['1940s', '210,000', '71'],
          ['1950s', '155,000', '96'],
          ['1960s', '420,000', '128'],
          ['1970s', '360,000', '154'],
          ['1980s', '60,000', '188'],
          ['1990s', '230,000', '226'],
          ['2000s', '195,000', '281'],
          ['2010s', '84,260', '243'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using data from **Source A**, **outline** the trend in global deaths from tropical cyclones between the 1900s and 2010s.',
        marks: 2,
        ph: 'State the trend (it has decreased) and reference data, e.g. “decreased from 198,420 to 84,260”.',
      },
    ],
  },
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Disaster risk — factors & vulnerability',
    marks: 4,
    stem:
      'With reference to **Source B** below, you will describe the relationship between natural hazard factors and vulnerability.\n\n' +
      'Source B is a concept network. Where natural hazard factors (magnitude, frequency) combine with vulnerability (population density, management strategies), the result is a “Greater risk”. Hover or click a node to read its detail.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source B — natural hazard factors and vulnerability combine to produce “Greater risk”.',
      data: {
        title: 'Source B — Natural hazard factors & vulnerability',
        source: 'Source B',
        center: { label: 'Greater risk', detail: 'Risk is a product of BOTH the natural hazard factors AND the vulnerability of the area where the hazard occurs.', color: '#c2255c' },
        nodes: [
          { id: 'magnitude', label: 'Magnitude', color: '#2f9e44', detail: 'How powerful the hazard is — a larger magnitude tends to increase risk, especially in a densely populated area.' },
          { id: 'frequency', label: 'Frequency', color: '#2f9e44', detail: 'How often the hazard happens — frequent events can mean a population is better prepared, except in an extremely high-magnitude event.' },
          { id: 'density', label: 'Population density', color: '#f08c00', detail: 'How many people are exposed — a densely populated area raises the potential impact and so the risk.' },
          { id: 'management', label: 'Management strategies', color: '#f08c00', detail: 'Preparation and response — effective management can reduce the risk even when the magnitude is great.' },
        ],
        edges: [
          { from: 'magnitude', to: 'density', label: 'combine' },
          { from: 'frequency', to: 'management', label: 'combine' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source B**, **describe** the relationship between natural hazard factors and vulnerability.',
        marks: 4,
        ph: 'Describe in detail how the hazard factors (magnitude, frequency) and vulnerability (population density, management) combine to produce greater or lesser risk.',
      },
    ],
  },
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Source evaluation — FloodWatch app',
    marks: 6,
    stem:
      'The mobile phone app shown in **Source C** (the “FloodWatch” app) provides users with information on river floods across Bangladesh. It gives access to satellite images, maps and photos taken by other app users. The app’s features are listed in the interactive table below — click a row to pin the feature you are reading off.',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source C — the “FloodWatch” app features (what each screen shows, and what it does NOT show). Recreated as an original artefact.',
      data: {
        title: 'Source C — “FloodWatch” app · The app to keep you safe',
        source: 'Source C · mobile app',
        caption: 'The app shows where floods are, but not how fast or in which direction the water is rising.',
        headers: ['App screen', 'What it shows', 'Last updated'],
        rows: [
          ['Home menu', 'Three sections — satellite images, maps and user photos — plus a status bar.', '3 hours ago'],
          ['Satellite images', 'A satellite view of Bangladesh with three active flood zones marked along the Ganges–Brahmaputra delta.', '3 hours ago'],
          ['Maps', 'A road map of the delta showing the same floods plotted near towns such as Khulna and Barisal, with a zoom tool.', '3 hours ago'],
          ['User photos', 'Photographs uploaded by other users — a flooded street and water rising near homes.', '3 hours ago'],
          ['Not shown', 'The app does NOT show water depth, the speed of the rising water, or the direction the flood is spreading.', '—'],
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** one value of the FloodWatch app for local residents.',
        marks: 3,
        ph: 'Describe one value in detail (e.g. satellite images, maps and photos let residents assess the danger and decide whether to evacuate).',
      },
      {
        label: 'b',
        text: '**Describe** one limitation of the FloodWatch app for local residents.',
        marks: 3,
        ph: 'Describe one limitation in detail (e.g. it does not show water depth/speed, so residents cannot tell how fast the flood is rising).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — technology & disaster impacts in HICs',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay to answer the following question:\n\n' +
          '**To what extent** has technology reduced the impacts of natural disasters in highly industrialized countries (HICs)?\n\n' +
          'In your essay, you must:\n' +
          '• use examples from your MYP studies\n' +
          '• consider different perspectives/factors.',
        marks: 24,
        ph: 'A structured essay weighing how far technology has reduced disaster impacts in HICs, with ≥2 perspectives and named examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
