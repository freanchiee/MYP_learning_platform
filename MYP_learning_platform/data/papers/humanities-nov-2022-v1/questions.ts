import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2022 · VARIANT 1 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Mirrors humanities-nov-2022 EXACTLY for construct (crit, command terms, marks,
 * task structure, paper total 80) but uses a GENUINELY DIFFERENT scenario set.
 *
 * Theme: the Global Education Monitoring picture — an investigation into youth
 * literacy, a national/regional comparison of schooling, an 'Innovators of Science'
 * presentation, a dam-relocation community-newsletter source evaluation, and an
 * essay on the consumption of land for urban expansion.
 *
 * Visual stimulus sources are transcribed as text in the stem AND attached as
 * interactive artefacts (data-driven code_rendered components). Components are
 * chosen to FIT each new scenario (and differ from the source where sensible):
 *   Q1 (Source A)  → <ChoroplethWorld/> (highlight) — highest youth-literacy nations
 *   Q2 (Source B)  → <InteractiveChart/> (bar)      — components of the Education Index
 *   Q4 action plan → <DataTableInteractive/>        — Stage 1 indicators & methods
 *   Q5 promo       → <InfoGraphicPanel/>             — Innovators of Science competition post
 *   Q6 (Source C)  → <SourceDocViewer/>              — Riverbend community newsletter letter
 *   Q6a locator    → <ChoroplethWorld/> (highlight) — Brazil / Riverbend valley
 *   Q8 (Source D)  → <SlideDeck/>                    — land used for urban expansion
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
  id: 'humanities-nov-2022-v1',
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
    topic: 'Global Education Monitor — reading a map of youth-literacy leaders',
    marks: 2,
    stem:
      'The Global Education Monitor is published each year by an international education agency. It ranks countries according to the strength of their education systems, using survey data and a set of schooling and development indicators.\n\n' +
      'Source A: The map shows the ten countries with the highest Youth Literacy Index in the latest report. The ten shaded countries are: Cuba (the Caribbean / Latin America); Estonia, Finland, Poland, Ireland, Slovenia, Belgium (Europe — clustered in northern and central Europe); Japan and South Korea (East Asia); and New Zealand (Australasia/Oceania).',
    artefact: {
      component: 'ChoroplethWorld',
      data: {
        mode: 'highlight',
        title: 'Source A — The ten countries with the highest Youth Literacy Index',
        source: 'Global Education Monitor (international education agency)',
        highlight: [
          'Cuba',
          'Estonia',
          'Finland',
          'Poland',
          'Ireland',
          'Slovenia',
          'Belgium',
          'Japan',
          'South Korea',
          'New Zealand',
        ],
        highlightLabel: 'Highest Youth Literacy Index',
        baseLabel: 'Other countries',
        caption:
          'The map shows the ten countries with the highest Youth Literacy Index. By region: Europe = 6 (Estonia, Finland, Poland, Ireland, Slovenia, Belgium); Asia = 2 (Japan, South Korea); Americas = 1 (Cuba); Australasia/Oceania = 1 (New Zealand); Africa = 0.',
      },
      caption: 'Source A — world map of the ten highest-ranked countries on the Youth Literacy Index.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using **Source A**, **select** which region of the world has the largest number of countries with the highest Youth Literacy Index.\n\nOptions: America / Africa / Asia / Europe / Australasia-Oceania',
        marks: 1,
        ph: 'Count the shaded countries in each region of Source A.',
      },
      {
        label: 'b',
        text: "**State** one factor that could lower a country's youth literacy rate.",
        marks: 1,
        ph: 'One factor, e.g. poverty, conflict, child labour, lack of schools.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Justifying high literacy using a development indicator (Source B)',
    marks: 4,
    stem:
      'Look at the sources below and answer the question that follows. Source A is repeated for information.\n\n' +
      "Source B: The interactive bar chart shows some of the indicators used to score countries on the Education Index, measured on a 0–100 scale. The four indicators shown are:\n" +
      '• Expected years of schooling — how many years of education a child entering school today can expect to receive.\n' +
      '• Public spending on education (share of GDP) — the proportion of national income a government invests in schools and teachers.\n' +
      '• Pupil–teacher ratio (scored) — how many pupils each teacher is responsible for, converted to a score where smaller classes score higher.\n' +
      '• Access to learning resources — the share of pupils with reliable access to books, internet and digital devices.\n' +
      'The bars for the ten highest-ranked countries sit between roughly 80 and 95 on every indicator.',
    artefact: {
      component: 'InteractiveChart',
      data: {
        kind: 'bar',
        title: 'Source B — Indicators used to score countries on the Education Index',
        source: 'Global Education Monitor. Hover over a bar to read its value.',
        x: {
          label: 'Education Index indicator',
          categories: [
            'Expected years of schooling',
            'Public spending on education',
            'Pupil–teacher ratio (scored)',
            'Access to learning resources',
          ],
        },
        y: { label: 'Average score for the ten highest-ranked countries', min: 0, max: 100, ticks: 5, unit: '' },
        series: [
          {
            name: 'Top-ten average',
            color: '#0b7285',
            points: [92, 84, 88, 90],
          },
        ],
      },
      caption:
        'Source B — bar chart of four Education Index indicators (Expected years of schooling, Public spending on education, Pupil–teacher ratio, Access to learning resources) for the highest-ranked countries.',
    },
    tasks: [
      {
        label: '',
        text: '**Justify** why the countries shown in **source A** were able to reach the highest levels of youth literacy. In your response, you must refer to **one** indicator shown in **source B**.',
        marks: 4,
        ph: 'Pick one Source B indicator; give a reason and link it to a country’s ranking.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Planning an investigation: city vs country literacy',
    marks: 12,
    stem:
      'The Global Education Monitor also publishes rankings for individual cities. It shows that sometimes a city can be ranked as having a stronger education system than the country it is part of.\n\n' +
      'As an Integrated Humanities student, you must plan an investigation to verify this finding for a location (such as a village, town or city) and country of your choice.\n\n' +
      'With reference to one of the development indicators below, you will formulate a research question to guide your investigation:\n' +
      '• Expected years of schooling\n' +
      '• Public spending on education\n' +
      '• Access to learning resources\n\n' +
      'Your research question must focus on a component of one of the development indicators.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to **one** of the development indicators (Expected years of schooling; Public spending on education; Access to learning resources), **formulate** a clear and focused research question to guide your investigation. Your research question **must** focus on a component of **one** of the development indicators.',
        marks: 2,
        ph: 'Write a clear, focused RQ that names a location and a specific component.',
      },
      {
        label: 'b',
        text: "**Justify** how your research question would help you verify the findings of the report that sometimes a city can have a stronger education system than its country.",
        marks: 4,
        ph: 'Explain, with reasoning, how your RQ verifies the city-vs-country finding.',
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
    topic: "Evaluating a local government's education investigation action plan",
    marks: 8,
    stem:
      'A local government wants to improve schooling for its citizens. To do this, they have decided to look more closely at some of the other indicators used in the Education Index, in addition to the data they already have on expected years of schooling, public spending and access to learning resources.\n\n' +
      'They have chosen to focus on three indicators: pupil attendance; teacher qualifications; and the perception of fairness in how school places are allocated.\n\n' +
      'You will be asked to evaluate the local government’s action plan shown below.\n\n' +
      'ACTION PLAN — Deadline to complete the investigation: 10 days\n\n' +
      'Stage 1 — Gather data on the following indicators / Method:\n' +
      '• Pupil attendance → Survey 100 families for their opinion on why pupils miss school\n' +
      '• Teacher qualifications → Contact schools to determine the total number of fully qualified teachers employed in the past year\n' +
      '• Perception of fairness in allocating school places → Interview members of the local school board about how fairly places are allocated\n\n' +
      'Stage 2 — Once Stage 1 data has been gathered, present the findings to a professor in Education for analysis.\n\n' +
      'Stage 3 — Based on the findings, make recommendations to their local government leader.',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Action Plan',
        source: 'Deadline to complete the investigation: 10 days',
        caption:
          'Stage 1 — Gather data. Stage 2: present the findings to a professor in Education for analysis. Stage 3: based on the findings, make recommendations to their local government leader.',
        headers: ['Gather data on the following indicators', 'Method'],
        rows: [
          ['Pupil attendance', 'Survey 100 families for their opinion on why pupils miss school'],
          [
            'Teacher qualifications',
            'Contact schools to determine the total number of fully qualified teachers employed in the past year',
          ],
          [
            'Perception of fairness in allocating school places',
            'Interview members of the local school board about how fairly places are allocated',
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
    topic: "Presentation script — 'Innovators of Science' significant individual",
    marks: 18,
    stem:
      "Your school is participating in a global competition called 'Innovators of Science', where students in the MYP compete to convince a team of judges how an individual's discoveries or actions have brought about noteworthy change in history.\n\n" +
      "The competition is promoted by the International Baccalaureate / Middle Years Programme as a social-media style post headed 'COMPETITION! INNOVATORS OF SCIENCE — CALLING ALL MYP STUDENTS! Submit your presentation on how a well known individual's discoveries brought about noteworthy change in history today and WIN!' A row of portraits of well-known scientists and innovators is shown (e.g. Marie Curie, Charles Darwin, Rosalind Franklin, Isaac Newton, Alan Turing, Ada Lovelace, Louis Pasteur, Katherine Johnson).\n\n" +
      'To prepare for this competition, you must write a script for your presentation to explain how the actions of one significant individual brought about change in history.\n\n' +
      'Consider the below when preparing the script:\n' +
      '• Choose a well known individual who had a positive or negative impact.\n' +
      '• Use a tone that is appropriate for convincing and engaging your audience.\n' +
      '• Include an opening and concluding statement.',
    artefact: {
      component: 'InfoGraphicPanel',
      data: {
        title: 'COMPETITION! INNOVATORS OF SCIENCE — CALLING ALL MYP STUDENTS!',
        source: 'International Baccalaureate · Middle Years Programme (social-media post)',
        intro:
          "Submit your presentation on how a well known individual's discoveries brought about noteworthy change in history today and WIN!",
        layout: 'flow',
        blocks: [
          {
            heading: 'The challenge',
            icon: '🏆',
            items: [
              'Convince a team of judges how an individual’s discoveries or actions brought about noteworthy change in history.',
              'Choose a well known individual who had a positive OR negative impact.',
            ],
          },
          {
            heading: 'Featured figures (portraits shown)',
            icon: '🔬',
            items: [
              'Marie Curie',
              'Charles Darwin',
              'Rosalind Franklin',
              'Isaac Newton',
              'Alan Turing',
              'Ada Lovelace',
              'Louis Pasteur',
              'Katherine Johnson',
            ],
            note: 'You may choose any well known individual, not only those pictured.',
          },
        ],
      },
      caption:
        'Social-media style competition post promoting the IB MYP ‘Innovators of Science’ competition, with a strip of portraits of well-known scientists and innovators.',
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
    topic: 'Source evaluation — Riverbend dam relocation newsletter (Source C)',
    marks: 6,
    stem:
      'The community of Riverbend, in the Riverbend valley of Brazil, is being asked to relocate because a new hydroelectric dam will flood part of the valley. (A world map locates Brazil and, in a magnified inset, the position of the Riverbend valley in south-eastern Brazil.)\n\n' +
      'Source C is a letter written by the chair of the regional water authority to residents, published in the Riverbend Community Newsletter.\n\n' +
      'Analyse the letter from the perspective of a resident of Riverbend looking into the sustainable management of water and energy resources.\n\n' +
      'SOURCE C (community newsletter letter):\n' +
      'Dear residents of Riverbend,\n' +
      'I am writing to explain why our region needs the new hydroelectric dam, and what it will mean for our valley. Our towns are growing quickly and demand for clean electricity has never been higher. Hydroelectric power is renewable and produces almost none of the emissions that come from burning coal or gas.\n' +
      'The reservoir created by the dam will, regrettably, flood the lower part of the valley, and some families will need to relocate. I want to assure you that we are working with the best engineers and planners to make this transition as smooth as possible. New housing will be built on higher ground, and the authority will support families throughout the move.\n' +
      'Doing nothing is not an option. Without new clean energy, our region will fall back on imported fossil fuels, which are expensive and harmful to the environment. The dam will power our homes, schools, businesses and hospitals for generations to come, and it will create many local jobs during construction.\n' +
      'I understand that change is difficult, and that leaving a home is never easy. But I am confident that, together, we can build a more sustainable and prosperous future for Riverbend.\n' +
      'Yours sincerely, the Chair of the Regional Water Authority.',
    artefact: {
      component: 'SourceDocViewer',
      data: {
        title: 'Source C — Letter on the Riverbend hydroelectric dam',
        attribution: 'Published in the Riverbend Community Newsletter',
        kind: 'Open letter (community newsletter)',
        paragraphs: [
          'Dear residents of Riverbend,',
          'I am writing to explain why our region needs the new hydroelectric dam, and what it will mean for our valley. Our towns are growing quickly and demand for clean electricity has never been higher. Hydroelectric power is renewable and produces almost none of the emissions that come from burning coal or gas.',
          'The reservoir created by the dam will, regrettably, flood the lower part of the valley, and some families will need to relocate. I want to assure you that we are working with the best engineers and planners to make this transition as smooth as possible. New housing will be built on higher ground, and the authority will support families throughout the move.',
          'Doing nothing is not an option. Without new clean energy, our region will fall back on imported fossil fuels, which are expensive and harmful to the environment. The dam will power our homes, schools, businesses and hospitals for generations to come, and it will create many local jobs during construction.',
          'I understand that change is difficult, and that leaving a home is never easy. But I am confident that, together, we can build a more sustainable and prosperous future for Riverbend.',
          'Yours sincerely, the Chair of the Regional Water Authority.',
        ],
        glossary: {
          hydroelectric: 'Electricity generated by using flowing or falling water to turn turbines.',
          reservoir: 'A large artificial lake created behind a dam to store water.',
          renewable: 'An energy source that is naturally replenished and does not run out, such as water, wind or sunlight.',
        },
      },
      caption:
        'Source C — letter from the chair of the regional water authority to Riverbend residents about the new hydroelectric dam and the planned relocation, published in the community newsletter.',
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
            title: 'Locator map — Riverbend valley, Brazil',
            source: 'Locator map',
            highlight: ['Brazil'],
            highlightLabel: 'Brazil (the Riverbend valley is in south-eastern Brazil)',
            baseLabel: 'Other countries',
            caption:
              'The community of Riverbend, Brazil, is being asked to relocate for a new hydroelectric dam. The Riverbend valley lies in south-eastern Brazil.',
          },
          caption: 'World map locating Brazil; the Riverbend valley sits in south-eastern Brazil.',
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
        text: '**Outline** one value of **source C** from the perspective of a resident of Riverbend looking into the sustainable management of water and energy resources.',
        marks: 2,
        ph: 'One value, briefly elaborated.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of **source C** from the perspective of a resident of Riverbend looking into the sustainable management of water and energy resources.',
        marks: 2,
        ph: 'One limitation, briefly elaborated.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: "Justifying residents' opposition to the dam relocation plan",
    marks: 6,
    stem:
      'This question continues to use Source C (the Riverbend Community Newsletter letter from the chair of the regional water authority about the new hydroelectric dam and the planned relocation of residents in the Riverbend valley, Brazil).',
    artefact: {
      component: 'SourceDocViewer',
      data: {
        title: 'Source C — Letter on the Riverbend hydroelectric dam (repeated)',
        attribution: 'Published in the Riverbend Community Newsletter',
        kind: 'Open letter (community newsletter)',
        paragraphs: [
          'Dear residents of Riverbend,',
          'I am writing to explain why our region needs the new hydroelectric dam, and what it will mean for our valley. Our towns are growing quickly and demand for clean electricity has never been higher. Hydroelectric power is renewable and produces almost none of the emissions that come from burning coal or gas.',
          'The reservoir created by the dam will, regrettably, flood the lower part of the valley, and some families will need to relocate. I want to assure you that we are working with the best engineers and planners to make this transition as smooth as possible. New housing will be built on higher ground, and the authority will support families throughout the move.',
          'Doing nothing is not an option. Without new clean energy, our region will fall back on imported fossil fuels, which are expensive and harmful to the environment. The dam will power our homes, schools, businesses and hospitals for generations to come, and it will create many local jobs during construction.',
          'I understand that change is difficult, and that leaving a home is never easy. But I am confident that, together, we can build a more sustainable and prosperous future for Riverbend.',
          'Yours sincerely, the Chair of the Regional Water Authority.',
        ],
      },
      caption: 'Source C (repeated) — the Riverbend Community Newsletter dam letter.',
    },
    tasks: [
      {
        label: '',
        text: "**Justify** why some residents of Riverbend may not agree with the water authority's plans to build the dam and relocate the community.",
        marks: 6,
        ph: 'Give detailed, reasoned arguments for why residents would oppose the plan.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Essay — To what extent do the benefits of consuming land for urban expansion outweigh the problems?',
    marks: 24,
    stem:
      'Source D shows examples of land being consumed for urban expansion. Look at the source and answer the question that follows.\n\n' +
      'Source D is an interactive image slideshow (a carousel with left/right navigation arrows) showing photographs of different ways land is consumed as cities grow, each captioned:\n' +
      '• Farmland — a photograph of new housing estates spreading across what were once green agricultural fields on the edge of a city.\n' +
      '• Wetlands — a photograph of a drained marsh being filled in to make way for a new industrial park.\n' +
      '• Forest — a photograph of a cleared strip of forest where a new ring-road motorway is under construction.\n' +
      '• Coastline — a photograph of land reclaimed from the sea to build apartment towers and a marina.\n' +
      '• Brownfield — a photograph of a redeveloped former factory site turned into a high-density mixed-use neighbourhood with parks.',
    artefact: {
      component: 'SlideDeck',
      data: {
        title: 'Source D — Examples of land consumed for urban expansion',
        source: 'Source D',
        slides: [
          {
            title: 'Farmland',
            body:
              'New housing estates spreading across what were once green agricultural fields on the edge of a city.',
          },
          {
            title: 'Wetlands',
            body: 'A drained marsh being filled in to make way for a new industrial park.',
          },
          {
            title: 'Forest',
            body: 'A cleared strip of forest where a new ring-road motorway is under construction.',
          },
          {
            title: 'Coastline',
            body: 'Land reclaimed from the sea to build apartment towers and a marina.',
          },
          {
            title: 'Brownfield',
            body: 'A redeveloped former factory site turned into a high-density mixed-use neighbourhood with parks.',
          },
        ],
      },
      caption:
        'Source D — image carousel of five ways land is consumed for urban expansion: Farmland, Wetlands, Forest, Coastline and Brownfield. Use the arrows to move between slides.',
    },
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** do the benefits of consuming land for urban expansion outweigh the problems it could cause?\n\n' +
          'In your essay, you must:\n' +
          '• refer to **at least one** type of land use (you may use the examples given in **source D** but not **source C**)\n' +
          '• consider aspects such as economic, environmental, political and social\n' +
          '• consider different perspectives.\n\n' +
          '(Marked across five strands: Criterion A — Knowing & understanding /8; C1 Format /2; C2 Communicating /3; C3 Organizational structure /3; Criterion D — Thinking critically /8. Best fit is applied to each criterion separately.)',
        marks: 24,
        ph: 'A balanced essay weighing the benefits against the problems of consuming land for urban expansion.',
      },
    ],
  },
]
