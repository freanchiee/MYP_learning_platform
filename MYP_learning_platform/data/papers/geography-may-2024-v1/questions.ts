import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2024 · Set 1 isomorphic VARIANT (geography-may-2024-v1).
 * Subject group: Individuals & Societies · Course: Geography
 *
 * ISOMORPHIC to geography-may-2024: identical paperMeta (bar id), identical
 * question ids / crit / type / marks, identical task labels + marks, identical
 * command terms (first **bold** word of each task), and the same 3-task / 80-mark
 * blueprint:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 6) · Q2 (B, 8) · Q3 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q4 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q5 (6) · Q6 (6) · Q7 (24)
 *
 * NEW scenario (West Africa): the Volta River basin (Ghana) and its water-quality
 * decline; Sahel drought management; and the rapid urbanisation of Tema New Town
 * on Ghana's coast. Each artefact-bearing question presents this new context through
 * a DIFFERENT, scenario-appropriate component than the source (per the I&S variant
 * carve-out — the artefact component is NOT an invariant). Component map vs source:
 *   Q2  source LocatedMap+InfoGraphicPanel → ChoroplethWorld (basin context)
 *         + TimelineScrubber (the students' dated 6-week action plan — the marked stimulus)
 *   Q4  source DataTableInteractive        → SlideDeck (the emailed questions, one slide per category)
 *   Q5  source LocatedMap (scene)          → InfoGraphicPanel (Source A, the annotated land-use brief)
 *   Q6  source InfoGraphicPanel            → SourceDocViewer (Source B, the city fact extract)
 *   Q7  source InfoGraphicPanel            → NetworkGraph (megacity hub + eight quality-of-life spokes)
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
  id: 'geography-may-2024-v1',
  subject: 'Geography',
  session: 'May',
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
    topic: 'Physical processes — rivers & coasts',
    marks: 6,
    stem: 'Rivers and coasts are shaped by physical processes, some of which can put nearby communities at risk.',
    tasks: [
      {
        label: 'a',
        text: '**State** two physical processes that may impact rivers or coasts.',
        marks: 2,
        ph: 'Two distinct physical processes (e.g. deposition, weathering, abrasion, transportation, mass movement).',
      },
      {
        label: 'b',
        text: '**Explain** how one physical process in rivers or coasts can threaten communities.',
        marks: 4,
        ph: 'One process considered in detail, with reasons (e.g. coastal deposition silts up a harbour → boats can no longer dock → fishing income is lost).',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — Volta River management',
    marks: 8,
    stem:
      'The people of coastal Ghana are growing increasingly concerned about the health of the Volta River. Since the Akosombo Dam was built, the flow of the Volta below the dam has changed and the delta is shrinking. The water reaching the coast carries less sediment, the shoreline is eroding, and salt water is creeping further up the river, harming farms and fisheries. By the time the Volta reaches the delta at Ada, it has completed most of its journey through its catchment area, and downstream communities have little control over how much water the dam releases.\n\n' +
      'MYP5 students from Akosombo (upstream, beside the reservoir) and Ada (downstream, on the delta) are working together to investigate management strategies for the Volta River. The two basin countries that share the river are shown highlighted on the interactive map. The students met online and designed the action plan below for their investigation. You will be asked to evaluate this action plan.\n\n' +
      'Background facts shown alongside the map:\n' +
      '• The Akosombo Dam created Lake Volta, one of the world’s largest reservoirs, to generate hydro-electricity.\n' +
      '• Around 24 million people in the Volta basin rely on the river for water, food and power.\n' +
      '• Sediment that once rebuilt the delta is now trapped behind the dam, so the coast at Ada is retreating by several metres each year.\n' +
      '• Reduced flow lets salt water push upstream, ruining rice paddies and clam fisheries.\n' +
      '• When the reservoir is full, the dam releases large volumes of water at once, flooding downstream villages.',
    artefact: {
      component: 'ChoroplethWorld',
      caption: 'The Volta River basin is shared mainly by Ghana and Burkina Faso (highlighted). Akosombo (upstream) and Ada (the delta) are the two student field sites within Ghana.',
      data: {
        mode: 'highlight',
        title: 'The Volta River basin — the two basin countries',
        source: 'Student investigation map (recreated)',
        highlight: ['Ghana', 'Burkina Faso'],
        highlightLabel: 'Volta basin countries',
        baseLabel: 'Other countries',
        caption: 'The Volta rises in Burkina Faso and flows south through Ghana to its delta on the Gulf of Guinea. Akosombo lies on the reservoir; Ada lies on the delta downstream.',
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the students’ action plan.',
        marks: 8,
        ph: 'Weigh the strengths and limitations of the plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part.',
        artefact: {
          component: 'TimelineScrubber',
          caption: 'The students’ Volta River Investigation Action Plan, laid out week by week over six weeks. Team Akosombo (upstream) and Team Ada (downstream) work in parallel. This dated plan is the marked stimulus.',
          data: {
            title: 'Volta River Investigation Action Plan (6-week timeline)',
            source: 'MYP5 students, Akosombo & Ada (Ghana)',
            events: [
              {
                date: 'Week 1',
                label: 'Both teams · Design the investigation',
                detail: 'Research question: How can the Volta River be better managed so that both upstream and downstream communities in Ghana have enough clean water? Sub-questions: How does the Akosombo Dam change the river? What would happen to the delta if the dam released more water? Would more reservoirs upstream help farmers?',
              },
              {
                date: 'Week 2',
                label: 'Team Ada · Interview delta farmers',
                detail: 'Team Ada (downstream) interview rice farmers and clam fishers about the problems caused by salt water and the shrinking delta. Primary data from one perspective.',
              },
              {
                date: 'Week 3',
                label: 'Team Akosombo · Email the power company',
                detail: 'Team Akosombo (upstream) email the hydro-power company asking how much water is stored in Lake Volta and when it is released. Secondary data.',
              },
              {
                date: 'Week 4',
                label: 'Team Akosombo · Visit the dam',
                detail: 'Team Akosombo visit the Akosombo Dam to see how it works and how electricity is generated.',
              },
              {
                date: 'Week 5–6',
                label: 'Both teams · Present the findings',
                detail: 'Both teams combine their data and create a video to show the findings of the investigation. No water-quality testing (e.g. salinity or oxygen levels) is planned.',
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — sustainable river/coastal management',
    marks: 12,
    stem:
      'The local government of a river or coastal area wants to investigate ways to better protect the environment and the community. You must choose a location and design an action plan to investigate sustainable management solutions for the local government.\n\n' +
      '**Statement of inquiry:** Sustainable management of rivers and coastal environments can protect communities and the environment.\n\n' +
      'You must **not** repeat information from Question 2 in your responses.',
    tasks: [
      {
        label: 'a',
        text: 'Use the statement of inquiry to **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a place and a strategy) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** how investigating your research question will help the local council to better protect the environment and the community.',
        marks: 4,
        ph: 'Consider at least one factor in detail, with reasoning for why the RQ is relevant to the statement of inquiry. Build from a simple connection to a full justification.',
      },
      {
        label: 'c',
        text: '**Identify** one reliable secondary source you would use to investigate your research question.',
        marks: 1,
        ph: 'One specific reliable secondary source (e.g. national coastal-monitoring agency erosion data; satellite shoreline imagery). Vague responses like “websites” score 0.',
      },
      {
        label: 'd',
        text: '**Explain** how the secondary source you identified in part (c) will help you investigate your research question.',
        marks: 4,
        ph: 'One benefit of the source considered in detail, with reasons for how it helps you answer the research question.',
      },
      {
        label: 'e',
        text: '**State** one challenge you could face in your investigation.',
        marks: 1,
        ph: 'One specific challenge (e.g. unable to access dam-release records; tides make fieldwork timing difficult). Vague responses score 0.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — managing drought',
    marks: 18,
    stem:
      'You have been invited to give an online presentation to MYP4 students in Canada as you live in a drought-prone country in the Sahel that regularly experiences long dry seasons and water shortages. You have been asked to explain how drought is successfully managed in your country.\n\n' +
      'Before the presentation, the students in Canada have emailed some questions for you to consider. Your teacher has organised them into three categories, shown on the slides below. You must choose **two** questions, each from a **different** category.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The emailed questions, one slide per category (Environmental, Social, Economic). Page through and choose two — each from a different category — to answer in your script.',
      data: {
        title: 'Questions from the MYP4 students in Canada',
        source: 'Canadian MYP4 class',
        slides: [
          {
            title: 'Category 1 — Environmental',
            body: 'Choose at most one question from this category.',
            bullets: [
              'How does your country reduce the environmental damage caused by long droughts?',
              'How does your country protect soil and farmland from turning into desert during a drought?',
            ],
          },
          {
            title: 'Category 2 — Social',
            body: 'Choose at most one question from this category.',
            bullets: [
              'Why do so few people have to leave their homes when a drought happens in your country?',
              'How does your country make sure communities still have safe drinking water during a drought?',
            ],
          },
          {
            title: 'Category 3 — Economic',
            body: 'Choose at most one question from this category.',
            bullets: [
              'How are the economic impacts of drought on farmers managed in your country?',
              'How does your country keep food affordable when harvests fail during a drought?',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Prepare for your presentation and your chosen questions by writing a **script** to explain how drought is successfully managed in your country.\n\n' +
          'Your script must include the following:\n' +
          '• an introduction\n' +
          '• a conclusion\n' +
          '• named location(s).',
        marks: 18,
        ph: 'A presentation script explaining how drought is managed, answering two questions from two categories, with an introduction, conclusion and named locations. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 5,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Tema land-use brief',
    marks: 6,
    stem:
      'You are a city planner working in Tema, a fast-growing port city on the coast of Ghana. ‘Plot Z’, described in **Source A** below, is being considered as a possible site for development. You and other city planners are considering whether to expand the port’s container yard or build more housing.\n\n' +
      '**Source A** is a planning brief for the area around Plot Z. It lists the surrounding land uses (port container yard, fishing harbour, low- / mid- / high-income housing, market district, wetland) and gives a scale bar so distances can be measured. It does not include street names, the locations of schools or clinics, or the views of individual residents.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source A — a land-use planning brief for the area around Plot Z, Tema (original recreation). Use it to judge the value and limitations of the source for the planners’ decision.',
      data: {
        title: 'Source A — Plot Z land-use brief (Tema)',
        source: 'City planning department (recreated)',
        intro: 'A summary of land use around Plot Z. A scale bar is provided (1 cm on the brief = 0.5 km on the ground), but no street names, school or clinic locations, or resident opinions are shown.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Plot Z (the site)',
            items: ['The site being considered — expand the port container yard or build housing?', 'Lies between the existing port and the residential districts.'],
          },
          {
            heading: 'Scale',
            items: ['A scale bar is printed on the brief: 1 cm = 0.5 km.', 'Plot Z is about 1.5 km from the market district along the main road.'],
          },
          {
            heading: 'Port & harbour',
            items: ['Existing container yard and a fishing harbour line the coast to the south of Plot Z.'],
          },
          {
            heading: 'Housing',
            items: ['Low-, mid- and high-income housing districts lie to the north and west of Plot Z.'],
          },
          {
            heading: 'Other land use',
            items: ['A market district lies inland; a protected coastal wetland borders the site to the east.'],
          },
          {
            heading: 'Not shown',
            items: ['No street names, school or clinic locations, or the needs of individual residents are included.'],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** one value of **Source A** for the city planners’ discussion on whether to expand the port’s container yard or build more housing.',
        marks: 2,
        ph: 'One value of the source elaborated on (e.g. it includes a scale that helps planners judge how far Plot Z is from the market district).',
      },
      {
        label: 'b',
        text: '**Explain** one limitation of **Source A** that could prevent the city planners from making an informed decision about how to develop Plot Z.',
        marks: 4,
        ph: 'One limitation considered with reasoning (e.g. the brief lacks detail such as school locations, which planners need to decide housing vs container yard).',
      },
    ],
  },
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying a development decision (Tema)',
    marks: 6,
    stem:
      '**Source A** (the Plot Z land-use brief for Tema from Question 5) still applies. Read **Source B** below — a short fact file on Tema — and, together with Source A, decide how Plot Z should be developed.\n\n' +
      'Choose the opinion you would support:\n' +
      '• Build more housing\n' +
      '• Expand the port’s container yard.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source B — a fact file on Tema. Use these facts (and Source A from Q5) to justify your decision.',
      data: {
        title: 'Source B — Facts about Tema',
        kind: 'Secondary source',
        attribution: 'City profile, Tema Metropolitan Assembly (recreated extract)',
        paragraphs: [
          'Tema has a population of about 400,000 people. Because of urbanization, the population grows every year as workers move to the city from rural areas in search of jobs.',
          'More than one third of Tema’s residents live in overcrowded housing, and there is a large and rising shortage of affordable homes.',
          'Tema is Ghana’s largest seaport. The container yard is already one of the busiest in West Africa, and the city profits mainly from trade passing through the port.',
          'The port authority says the container yard is nearly full and that expanding it would let the port handle more cargo, creating jobs and increasing trade income for the city.',
          'A protected coastal wetland next to Plot Z is an important habitat for migratory birds, so any development must avoid draining or polluting it.',
        ],
        glossary: {
          urbanization: 'The growth in the proportion of a country’s population that lives in towns and cities.',
          'container yard': 'The area of a port where shipping containers are stored, loaded and unloaded.',
          wetland: 'Land where the soil is saturated with water, supporting specialised plants and wildlife.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **both** opinions, **justify** your decision.',
        marks: 6,
        ph: 'State your chosen opinion, then justify it in detail with supporting reasons drawn from Sources A and B, referring to BOTH options. Referring to only one option caps at 3 marks.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — megacities & quality of life',
    marks: 24,
    stem:
      'The network below places **living in a megacity** at the centre, surrounded by eight **quality-of-life indicators**: health, work, belonging to a community, financial wellbeing, quality of environment, personal safety, social relationships and emotional wellbeing. Hover a spoke to see what it covers. Use at least two of these indicators to build your argument.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Eight quality-of-life indicators radiating from “living in a megacity” — choose at least two indicators to argue with.',
      data: {
        title: 'Quality-of-life indicators around living in a megacity',
        source: 'Wellbeing framework',
        center: { label: 'Living in a megacity', detail: 'Does living in a megacity raise or lower these quality-of-life indicators? Consider at least two.', color: '#1e293b' },
        nodes: [
          { id: 'health', label: 'Health', detail: 'Access to clean air, healthcare and sanitation.' },
          { id: 'work', label: 'Work', detail: 'Employment opportunities, commuting and job security.' },
          { id: 'community', label: 'Belonging to a community', detail: 'Connection to neighbours and local identity.' },
          { id: 'finance', label: 'Financial wellbeing', detail: 'Cost of living, housing affordability and income.' },
          { id: 'environment', label: 'Quality of environment', detail: 'Pollution, green space and congestion.' },
          { id: 'safety', label: 'Personal safety', detail: 'Crime, traffic and exposure to hazards.' },
          { id: 'relationships', label: 'Social relationships', detail: 'Time with family and friends, social networks.' },
          { id: 'emotional', label: 'Emotional wellbeing', detail: 'Stress, noise and overall life satisfaction.' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** does living in a megacity decrease the quality of life of societies?\n\n' +
          'In your essay, you must:\n' +
          '• consider at least two different quality of life indicators\n' +
          '• consider different perspectives\n' +
          '• use examples from your MYP studies to support your arguments\n' +
          '• use appropriate geographical terms.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing how living in a megacity affects quality of life, using ≥2 indicators, ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
