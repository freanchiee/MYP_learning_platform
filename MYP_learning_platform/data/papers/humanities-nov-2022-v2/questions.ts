import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2022 · VARIANT 2 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Mirrors humanities-nov-2022 EXACTLY for construct (crit, command terms, marks,
 * task structure, paper total 80) but uses a GENUINELY DIFFERENT scenario set —
 * distinct from both the source and Variant 1.
 *
 * Theme: the Ocean Health picture — an investigation into coastal-community
 * wellbeing and fisheries, a coast-vs-country comparison, a 'Voices of Change'
 * presentation, a coastal-resort developer's promotional website source evaluation,
 * and an essay on the consumption of ocean resources through industrial fishing.
 *
 * Visual stimulus sources are transcribed as text in the stem AND attached as
 * interactive artefacts (data-driven code_rendered components). Components are
 * chosen to FIT each new scenario (and differ from the source and Variant 1):
 *   Q1 (Source A)  → <ChoroplethWorld/> (highlight) — highest Ocean Health Index nations
 *   Q2 (Source B)  → <DataTableInteractive/>        — components of the Ocean Health Index
 *   Q4 action plan → <DataTableInteractive/>        — Stage 1 indicators & methods
 *   Q5 promo       → <InfoGraphicPanel/>             — Voices of Change competition post
 *   Q6 (Source C)  → <SlideDeck/>                    — Blue Lagoon Resort promotional website
 *   Q6a locator    → <ChoroplethWorld/> (highlight) — Philippines / Maribago Bay
 *   Q8 (Source D)  → <InfoGraphicPanel/>             — ocean resources consumed by fishing
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
  id: 'humanities-nov-2022-v2',
  subject: 'Integrated Humanities',
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
    crit: 'B',
    type: 'extended',
    topic: 'Ocean Health Report — reading a map of the healthiest coastal nations',
    marks: 2,
    stem:
      'The Ocean Health Report is published each year by an international marine institute. It ranks coastal countries according to the health of their seas, using survey data and a set of marine and development indicators.\n\n' +
      'Source A: The map shows the ten countries with the highest Ocean Health Index in the latest report. The ten shaded countries are: Germany, Iceland, Ireland, Portugal (Europe); Canada and the United States (North America); Australia and New Zealand (Australasia/Oceania); Japan (East Asia); and Chile (South America).',
    artefact: {
      component: 'ChoroplethWorld',
      data: {
        mode: 'highlight',
        title: 'Source A — The ten countries with the highest Ocean Health Index',
        source: 'Ocean Health Report (international marine institute)',
        highlight: [
          'Germany',
          'Iceland',
          'Ireland',
          'Portugal',
          'Canada',
          'United States of America',
          'Australia',
          'New Zealand',
          'Japan',
          'Chile',
        ],
        highlightLabel: 'Highest Ocean Health Index',
        baseLabel: 'Other countries',
        caption:
          'The map shows the ten countries with the highest Ocean Health Index. By region: Europe = 4 (Germany, Iceland, Ireland, Portugal); North America = 2 (Canada, USA); Australasia/Oceania = 2 (Australia, New Zealand); Asia = 1 (Japan); South America = 1 (Chile); Africa = 0.',
      },
      caption: 'Source A — world map of the ten highest-ranked countries on the Ocean Health Index.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using **Source A**, **select** which region of the world has the largest number of countries with the highest Ocean Health Index.\n\nOptions: America / Africa / Asia / Europe / Australasia-Oceania',
        marks: 1,
        ph: 'Count the shaded countries in each region of Source A.',
      },
      {
        label: 'b',
        text: "**State** one factor that could lower a country's Ocean Health Index.",
        marks: 1,
        ph: 'One factor, e.g. overfishing, plastic pollution, oil spills, coastal development.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Justifying a high ocean-health score using a development indicator (Source B)',
    marks: 4,
    stem:
      'Look at the sources below and answer the question that follows. Source A is repeated for information.\n\n' +
      "Source B: The interactive table shows some of the indicators used to score countries on the Ocean Health Index, together with a brief definition of each. The four indicators are:\n" +
      '• Sustainable fisheries — "The share of fish caught at a rate that allows fish populations to replace themselves so stocks do not collapse."\n' +
      '• Clean waters — "How free coastal waters are from pollution such as plastics, chemicals and untreated sewage."\n' +
      '• Habitat protection — "The proportion of important marine habitats, such as coral reefs, mangroves and seagrass, that are legally protected."\n' +
      '• Coastal livelihoods — "Whether coastal communities have stable jobs and income from ocean-related work such as fishing and tourism."',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Source B — Indicators used to score countries on the Ocean Health Index',
        source: 'Ocean Health Report',
        caption: 'Some of the indicators used to score countries on the Ocean Health Index, with a brief definition of each.',
        headers: ['Indicator', 'What it measures'],
        rows: [
          [
            'Sustainable fisheries',
            'The share of fish caught at a rate that allows fish populations to replace themselves so stocks do not collapse.',
          ],
          [
            'Clean waters',
            'How free coastal waters are from pollution such as plastics, chemicals and untreated sewage.',
          ],
          [
            'Habitat protection',
            'The proportion of important marine habitats, such as coral reefs, mangroves and seagrass, that are legally protected.',
          ],
          [
            'Coastal livelihoods',
            'Whether coastal communities have stable jobs and income from ocean-related work such as fishing and tourism.',
          ],
        ],
      },
      caption:
        'Source B — table of four Ocean Health Index indicators (Sustainable fisheries, Clean waters, Habitat protection, Coastal livelihoods) with a definition of each.',
    },
    tasks: [
      {
        label: '',
        text: '**Justify** why the countries shown in **source A** were able to reach the highest Ocean Health Index. In your response, you must refer to **one** indicator shown in **source B**.',
        marks: 4,
        ph: 'Pick one Source B indicator; give a reason and link it to a country’s ranking.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Planning an investigation: coast vs country ocean health',
    marks: 12,
    stem:
      'The Ocean Health Report also publishes scores for individual coastal regions and ports. It shows that sometimes a single coastal region can be scored as healthier than the country it is part of.\n\n' +
      'As an Integrated Humanities student, you must plan an investigation to verify this finding for a coastal location (such as a port, bay or coastal town) and country of your choice.\n\n' +
      'With reference to one of the development indicators below, you will formulate a research question to guide your investigation:\n' +
      '• Sustainable fisheries\n' +
      '• Clean waters\n' +
      '• Habitat protection\n\n' +
      'Your research question must focus on a component of one of the development indicators.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to **one** of the development indicators (Sustainable fisheries; Clean waters; Habitat protection), **formulate** a clear and focused research question to guide your investigation. Your research question **must** focus on a component of **one** of the development indicators.',
        marks: 2,
        ph: 'Write a clear, focused RQ that names a location and a specific component.',
      },
      {
        label: 'b',
        text: "**Justify** how your research question would help you verify the findings of the report that sometimes a coastal region can be rated as 'healthier' than its country.",
        marks: 4,
        ph: 'Explain, with reasoning, how your RQ verifies the coast-vs-country finding.',
      },
      {
        label: 'c',
        text: '**List** two pieces of data you would need to help you investigate your research question.',
        marks: 2,
        ph: 'Name two data items linked to your RQ, location or indicator.',
      },
      {
        label: 'd',
        text: '**Outline** one challenge you might face during your investigation.',
        marks: 2,
        ph: 'Give one challenge with brief elaboration.',
      },
      {
        label: 'e',
        text: '**Outline** one method of recording the data that you would use during your investigation.',
        marks: 2,
        ph: 'Give one recording method, briefly elaborated.',
      },
    ],
  },
  {
    id: 4,
    crit: 'D',
    type: 'extended',
    topic: "Evaluating a local government's ocean-health investigation action plan",
    marks: 8,
    stem:
      'A coastal local government wants to improve the health of the sea around its community. To do this, they have decided to look more closely at some of the other indicators used in the Ocean Health Index, in addition to the data they already have on sustainable fisheries, clean waters and habitat protection.\n\n' +
      'They have chosen to focus on three indicators: the amount of plastic waste on local beaches; the size of local fish catches; and the perception of how well fishing rules are enforced.\n\n' +
      'You will be asked to evaluate the local government’s action plan shown below.\n\n' +
      'ACTION PLAN — Deadline to complete the investigation: 10 days\n\n' +
      'Stage 1 — Gather data on the following indicators / Method:\n' +
      '• Plastic waste on local beaches → Survey 100 beach visitors for their opinion on how much litter they see\n' +
      '• Size of local fish catches → Contact fishing boat operators to determine the total weight of fish landed in the past month\n' +
      '• Perception of how well fishing rules are enforced → Interview members of the local fisheries authority about how strictly the rules are applied\n\n' +
      'Stage 2 — Once Stage 1 data has been gathered, present the findings to a professor in Marine Science for analysis.\n\n' +
      'Stage 3 — Based on the findings, make recommendations to their local government leader.',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Action Plan',
        source: 'Deadline to complete the investigation: 10 days',
        caption:
          'Stage 1 — Gather data. Stage 2: present the findings to a professor in Marine Science for analysis. Stage 3: based on the findings, make recommendations to their local government leader.',
        headers: ['Gather data on the following indicators', 'Method'],
        rows: [
          ['Plastic waste on local beaches', 'Survey 100 beach visitors for their opinion on how much litter they see'],
          [
            'Size of local fish catches',
            'Contact fishing boat operators to determine the total weight of fish landed in the past month',
          ],
          [
            'Perception of how well fishing rules are enforced',
            'Interview members of the local fisheries authority about how strictly the rules are applied',
          ],
        ],
      },
      caption: "The local government's action plan — Stage 1 indicators and the method used to gather data for each.",
    },
    tasks: [
      {
        label: '',
        text:
          "**Evaluate** the local government's action plan.\n\n" +
          '(Note: you do not need to discuss both strengths and limitations of every part of the investigation to access full marks. Marks are awarded for the quality of the response, not the number of strengths or limitations. This question is marked across three strands: Strengths /3, Limitations /3, Appraisal /2.)',
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan, then give an overall appraisal.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: "Presentation script — 'Voices of Change' significant individual",
    marks: 18,
    stem:
      "Your school is participating in a global competition called 'Voices of Change', where students in the MYP compete to convince a team of judges how an individual's actions have brought about noteworthy change in history.\n\n" +
      "The competition is promoted by the International Baccalaureate / Middle Years Programme as a social-media style post headed 'COMPETITION! VOICES OF CHANGE — CALLING ALL MYP STUDENTS! Submit your presentation on how a well known individual's actions brought about noteworthy change in history today and WIN!' A row of portraits of well-known reformers and leaders is shown (e.g. Mahatma Gandhi, Rosa Parks, Malala Yousafzai, Florence Nightingale, Nelson Mandela, Eleanor Roosevelt, Mary Seacole, Kofi Annan).\n\n" +
      'To prepare for this competition, you must write a script for your presentation to explain how the actions of one significant individual brought about change in history.\n\n' +
      'Consider the below when preparing the script:\n' +
      '• Choose a well known individual who had a positive or negative impact.\n' +
      '• Use a tone that is appropriate for convincing and engaging your audience.\n' +
      '• Include an opening and concluding statement.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'COMPETITION! VOICES OF CHANGE — CALLING ALL MYP STUDENTS!',
        source: 'International Baccalaureate · Middle Years Programme (social-media post)',
        intro:
          "Submit your presentation on how a well known individual's actions brought about noteworthy change in history today and WIN!",
        layout: 'flow',
        blocks: [
          {
            heading: 'The challenge',
            icon: '🏆',
            items: [
              'Convince a team of judges how an individual’s actions brought about noteworthy change in history.',
              'Choose a well known individual who had a positive OR negative impact.',
            ],
          },
          {
            heading: 'Featured figures (portraits shown)',
            icon: '🗣️',
            items: [
              'Mahatma Gandhi',
              'Rosa Parks',
              'Malala Yousafzai',
              'Florence Nightingale',
              'Nelson Mandela',
              'Eleanor Roosevelt',
              'Mary Seacole',
              'Kofi Annan',
            ],
            note: 'You may choose any well known individual, not only those pictured.',
          },
        ],
      },
      caption:
        'Social-media style competition post promoting the IB MYP ‘Voices of Change’ competition, with a strip of portraits of well-known reformers and leaders.',
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script for your presentation to **explain** how the actions of **one** significant individual brought about change in history.\n\n' +
          '(Marked across four strands: Criterion A — Knowing & understanding /6; C1 Format /2; C2 Communicating information and ideas /6; C3 Organizational structure /4.)',
        marks: 18,
        ph: "A presentation script explaining one individual's historical impact, in an engaging, convincing tone.",
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — Blue Lagoon Resort promotional website (Source C)',
    marks: 6,
    stem:
      'The coastal community of Maribago Bay, in the Philippines, is being asked to approve a large new beach resort that would be built on the shoreline next to a coral reef. (A world map locates the Philippines and, in a magnified inset, the position of Maribago Bay in the central Philippines.)\n\n' +
      'Source C is the promotional website of the developer, Blue Lagoon Resorts, which is shown to the community to win support for the project.\n\n' +
      'Analyse the website from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef.\n\n' +
      'SOURCE C (developer website — page by page):\n' +
      'Page 1 — Welcome: "Blue Lagoon Resort — a world-class destination coming to beautiful Maribago Bay. Discover paradise on your doorstep."\n' +
      'Page 2 — Jobs and growth: "Our resort will create hundreds of local jobs and bring visitors and investment to the whole community. Local businesses will thrive."\n' +
      'Page 3 — Our green promise: "We care about the ocean. We will use the latest eco-friendly technology and work with leading experts to protect the bay for future generations."\n' +
      'Page 4 — The plan: "A 300-room beachfront hotel, a marina, restaurants and a private beach club, all built to the highest modern standards."\n' +
      'Page 5 — Join us: "Doing nothing means missing out. Support Blue Lagoon Resort and help build a brighter future for Maribago Bay today!"',
    artefact: {
      component: 'SlideDeck',
      data: {
        title: 'Source C — Blue Lagoon Resort promotional website',
        source: 'Blue Lagoon Resorts (developer website)',
        slides: [
          {
            title: 'Welcome',
            body:
              'Blue Lagoon Resort — a world-class destination coming to beautiful Maribago Bay. Discover paradise on your doorstep.',
          },
          {
            title: 'Jobs and growth',
            body:
              'Our resort will create hundreds of local jobs and bring visitors and investment to the whole community. Local businesses will thrive.',
          },
          {
            title: 'Our green promise',
            body:
              'We care about the ocean. We will use the latest eco-friendly technology and work with leading experts to protect the bay for future generations.',
          },
          {
            title: 'The plan',
            body:
              'A 300-room beachfront hotel, a marina, restaurants and a private beach club, all built to the highest modern standards.',
          },
          {
            title: 'Join us',
            body: 'Doing nothing means missing out. Support Blue Lagoon Resort and help build a brighter future for Maribago Bay today!',
          },
        ],
      },
      caption:
        'Source C — the promotional website of Blue Lagoon Resorts, used to win community support for a new beach resort beside the reef at Maribago Bay. Use the arrows to move between pages.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of **source C**.',
        marks: 1,
        ph: 'Where the source came from.',
        artefact: {
          component: 'ChoroplethWorld',
          data: {
            mode: 'highlight',
            title: 'Locator map — Maribago Bay, Philippines',
            source: 'Locator map',
            highlight: ['Philippines'],
            highlightLabel: 'Philippines (Maribago Bay is in the central Philippines)',
            baseLabel: 'Other countries',
            caption:
              'The coastal community of Maribago Bay, Philippines, is being asked to approve a new beach resort beside a coral reef. Maribago Bay lies in the central Philippines.',
          },
          caption: 'World map locating the Philippines; Maribago Bay sits in the central Philippines.',
        },
      },
      {
        label: 'b',
        text: '**State** the purpose of **source C**.',
        marks: 1,
        ph: 'Why the source was produced.',
      },
      {
        label: 'c',
        text: '**Outline** one value of **source C** from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef.',
        marks: 2,
        ph: 'One value, briefly elaborated.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of **source C** from the perspective of a resident of Maribago Bay looking into the sustainable management of the coastline and its reef.',
        marks: 2,
        ph: 'One limitation, briefly elaborated.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: "Justifying residents' opposition to the beach resort plan",
    marks: 6,
    stem:
      'This question continues to use Source C (the Blue Lagoon Resorts promotional website used to win community support for a large new beach resort beside the coral reef at Maribago Bay, Philippines).',
    artefact: {
      component: 'SlideDeck',
      data: {
        title: 'Source C — Blue Lagoon Resort promotional website (repeated)',
        source: 'Blue Lagoon Resorts (developer website)',
        slides: [
          {
            title: 'Welcome',
            body:
              'Blue Lagoon Resort — a world-class destination coming to beautiful Maribago Bay. Discover paradise on your doorstep.',
          },
          {
            title: 'Jobs and growth',
            body:
              'Our resort will create hundreds of local jobs and bring visitors and investment to the whole community. Local businesses will thrive.',
          },
          {
            title: 'Our green promise',
            body:
              'We care about the ocean. We will use the latest eco-friendly technology and work with leading experts to protect the bay for future generations.',
          },
          {
            title: 'The plan',
            body:
              'A 300-room beachfront hotel, a marina, restaurants and a private beach club, all built to the highest modern standards.',
          },
          {
            title: 'Join us',
            body: 'Doing nothing means missing out. Support Blue Lagoon Resort and help build a brighter future for Maribago Bay today!',
          },
        ],
      },
      caption: 'Source C (repeated) — the Blue Lagoon Resorts promotional website.',
    },
    tasks: [
      {
        label: '',
        text: "**Justify** why some residents of Maribago Bay may not agree with the developer's plans to build the beach resort beside the reef.",
        marks: 6,
        ph: 'Give detailed, reasoned arguments for why residents would oppose the plan.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Essay — To what extent do the benefits of consuming ocean resources through fishing outweigh the problems?',
    marks: 24,
    stem:
      'Source D shows examples of ocean resources being consumed through different fishing and harvesting methods. Look at the source and answer the question that follows.\n\n' +
      'Source D is an interactive infographic panel showing different ways the ocean is used to provide food and income, each described:\n' +
      '• Trawling — large nets dragged along the seabed scoop up huge quantities of fish but also damage the ocean floor and catch unwanted species.\n' +
      '• Small-scale fishing — local families fish from small boats with lines and nets, providing food and income for coastal villages.\n' +
      '• Fish farming (aquaculture) — fish are raised in coastal pens, supplying protein without catching wild fish, but producing waste.\n' +
      '• Shellfish harvesting — divers and gatherers collect crabs, clams and seaweed from the shallows for food and sale.\n' +
      '• Tuna purse-seining — boats encircle large schools of tuna with deep nets to supply the global canned-fish market.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'Source D — Examples of ocean resources consumed through fishing',
        source: 'Source D',
        intro: 'Different ways the ocean is used to provide food and income.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Trawling',
            icon: '🚢',
            items: [
              'Large nets are dragged along the seabed.',
              'They scoop up huge quantities of fish but damage the ocean floor and catch unwanted species.',
            ],
          },
          {
            heading: 'Small-scale fishing',
            icon: '🎣',
            items: [
              'Local families fish from small boats with lines and nets.',
              'This provides food and income for coastal villages.',
            ],
          },
          {
            heading: 'Fish farming (aquaculture)',
            icon: '🐟',
            items: [
              'Fish are raised in coastal pens.',
              'This supplies protein without catching wild fish, but produces waste.',
            ],
          },
          {
            heading: 'Shellfish harvesting',
            icon: '🦀',
            items: [
              'Divers and gatherers collect crabs, clams and seaweed from the shallows.',
              'The catch is used for food and sale.',
            ],
          },
          {
            heading: 'Tuna purse-seining',
            icon: '🐠',
            items: [
              'Boats encircle large schools of tuna with deep nets.',
              'This supplies the global canned-fish market.',
            ],
          },
        ],
      },
      caption:
        'Source D — infographic of five ways ocean resources are consumed through fishing: Trawling, Small-scale fishing, Fish farming, Shellfish harvesting and Tuna purse-seining.',
    },
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** do the benefits of consuming ocean resources through fishing outweigh the problems it could cause?\n\n' +
          'In your essay, you must:\n' +
          '• refer to **at least one** fishing or harvesting method (you may use the examples given in **source D** but not **source C**)\n' +
          '• consider aspects such as economic, environmental, political and social\n' +
          '• consider different perspectives.\n\n' +
          '(Marked across five strands: Criterion A — Knowing & understanding /8; C1 Format /2; C2 Communicating /3; C3 Organizational structure /3; Criterion D — Thinking critically /8. Best fit is applied to each criterion separately.)',
        marks: 24,
        ph: 'A balanced essay weighing the benefits against the problems of consuming ocean resources through fishing.',
      },
    ],
  },
]
