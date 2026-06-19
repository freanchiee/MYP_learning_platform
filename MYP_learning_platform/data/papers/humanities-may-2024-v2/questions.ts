import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2024 · Variant 2 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Construct mirrors humanities-may-2024 exactly: same crit / command term / marks /
 * task labels / number of tasks & questions. Total 80 marks, 120 minutes, 3 tasks:
 *   Task 1 Investigating (Crit A+B): Q1–Q5
 *   Task 2 Communicating (Crit A+C): Q6
 *   Task 3 Thinking critically (Crit A+B+C+D): Q7–Q9
 *
 * SURFACE CHANGED: scenario, datasets, exemplars and the artefacts themselves.
 *   Q4 → <TimelineScrubber/> (a school investigation timeline into rooftop solar adoption)
 *   Q7 / Q8 → <SourceDocViewer/> (Source A — a Heritage Trust report on a mill-district regeneration)
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
  id: 'humanities-may-2024-v2',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2024,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// Source A — Riverside Heritage Regeneration Trust report on the Mill Quarter (written secondary source).
// Reused by Q7 (source evaluation) and Q8 (economic-development explanation).
const MILL_QUARTER_SOURCE_A: import('@/lib/types').ArtefactSpec = {
  component: 'SourceDocViewer',
  caption:
    'Source A — A published report by the Riverside Heritage Regeneration Trust describing four methods used in its 2021 plan to regenerate the historic Mill Quarter, combining the district’s industrial heritage with green public space. Read the report.',
  data: {
    title: 'Regenerating the Mill Quarter — 2021 plan',
    attribution: 'Riverside Heritage Regeneration Trust, published report (2021)',
    kind: 'report',
    paragraphs: [
      'In 2021 the Riverside Heritage Regeneration Trust set out a plan to regenerate the Mill Quarter, the city’s historic textile district, by combining its industrial heritage with new green public space in the centre. This report describes four of the methods we used.',
      '1. Reuse of historic buildings. A 19th-century cotton mill was converted into apartments and workshops, and a former weaving shed was turned into a covered market hall, keeping the original brickwork and chimney rather than demolishing them.',
      '2. Historic and modern buildings together. New low-rise housing and offices were built around the preserved mill buildings to show that historic and modern structures can co-exist within the same district.',
      '3. Areas of cultural interest. Several mill structures were adapted to include modern features while respecting the character and history of the area: the old engine house became a museum of industry, a warehouse became an arts venue, and a restored canal basin was opened to the public.',
      '4. Natural spaces. The canal towpath, riverside footpaths and pocket parks were preserved and replanted, and the canal water itself was cleaned and reopened for recreation and for ecological reasons.',
    ],
    glossary: {
      'Mill Quarter': 'The city’s historic textile-manufacturing district.',
      'weaving shed': 'A large single-storey industrial building where cloth was woven on powered looms.',
      'canal basin': 'A widened section of canal where boats were once loaded and unloaded.',
    },
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
    artefact: {
      component: 'NetworkGraph',
      caption:
        'Stakeholder web — hover or tap a spoke to see how that group could benefit from industrialization. Use it only to prompt your own answer; you must write in your own words.',
      data: {
        title: 'Stakeholders of industrialization',
        source: 'MYP Integrated Humanities — concept web',
        center: { label: 'Industrialization', detail: 'The shift from hand production and farming towards machine-based manufacturing in factories.', color: '#1e293b' },
        nodes: [
          { id: 'factory-owners', label: 'Factory owners', color: '#0b7285', detail: 'Benefit: owned the new mills and machines, so they earned large profits as output rose.' },
          { id: 'merchants', label: 'Merchants & traders', color: '#1971c2', detail: 'Benefit: more goods were produced more cheaply, so they could buy, sell and export greater quantities.' },
          { id: 'investors', label: 'Investors & banks', color: '#2f9e44', detail: 'Benefit: lending money to build factories and railways earned interest and returns on their capital.' },
          { id: 'workers', label: 'Factory workers', color: '#e8590c', detail: 'Benefit: regular waged jobs in towns offered a more reliable income than seasonal farm work.' },
          { id: 'consumers', label: 'Consumers', color: '#9c36b5', detail: 'Benefit: mass production lowered prices, so more people could afford manufactured cloth, tools and goods.' },
          { id: 'engineers', label: 'Engineers & inventors', color: '#c2255c', detail: 'Benefit: demand for machines, steam power and railways created skilled, well-paid technical work.' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Identify** one stakeholder who has benefitted from industrialization.',
        marks: 1,
        ph: 'Name one stakeholder, e.g. merchants, workers, investors.',
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
    artefact: {
      component: 'NetworkGraph',
      caption:
        'Causes web — each spoke is a reason (a cause) that helped industrialization to begin, NOT a consequence of it. Hover or tap a spoke to read the reason, then explain one in your own words.',
      data: {
        title: 'Why industrialization occurred',
        source: 'MYP Integrated Humanities — concept web',
        center: { label: 'Why it occurred', detail: 'The conditions and resources that allowed manufacturing to shift into factories.', color: '#1e293b' },
        nodes: [
          { id: 'inventions', label: 'New inventions', color: '#0b7285', detail: 'Reason: machines such as the spinning jenny and the steam engine made factory production possible.' },
          { id: 'coal', label: 'Coal & raw materials', color: '#495057', detail: 'Reason: plentiful coal and iron provided the fuel and materials needed to power and build machines.' },
          { id: 'capital', label: 'Available capital', color: '#2f9e44', detail: 'Reason: profits and savings could be invested to build factories, mills and transport.' },
          { id: 'labour', label: 'Supply of labour', color: '#e8590c', detail: 'Reason: a growing population and people moving off the land provided workers for the new factories.' },
          { id: 'demand', label: 'Demand for goods', color: '#9c36b5', detail: 'Reason: growing home and overseas markets created demand that hand production could not meet.' },
          { id: 'transport', label: 'Transport networks', color: '#1971c2', detail: 'Reason: canals, ports and later railways allowed raw materials and finished goods to be moved.' },
        ],
      },
    },
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
    artefact: {
      component: 'InteractiveChart',
      caption:
        'How society changed across the stages of industrialization (illustrative trends, not exam data) — hover a point for its value, or toggle a series in the legend. Use it to prompt a change you could describe in your own words.',
      data: {
        kind: 'line',
        title: 'Society before, during and after industrialization',
        source: 'MYP Integrated Humanities — illustrative comparison (not exam data)',
        x: {
          label: 'Stage of industrialization',
          categories: ['Pre-industrial', 'Early industrial', 'Peak industrial', 'Post-industrial'],
        },
        y: { label: 'Relative index (max = 100)', min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100] },
        series: [
          { name: 'People living in towns/cities (%)', color: '#0b7285', points: [20, 45, 75, 88] },
          { name: 'Workers in factories vs farming (%)', color: '#e8590c', points: [10, 40, 70, 55] },
          { name: 'Adult literacy (%)', color: '#1971c2', points: [25, 40, 65, 92] },
          { name: 'Goods produced per worker (index)', color: '#2f9e44', points: [15, 45, 80, 100] },
        ],
      },
    },
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
    topic: 'Evaluate a student investigation into rooftop solar adoption by households',
    marks: 8,
    stem:
      'As a part of their research project, a group of MYP year 5 students in Morocco has led an investigation into understanding the impact of technological innovations.\n\n' +
      '**Statement of inquiry: Technological innovations have changed lives at local levels.**\n\n' +
      'The students chose to investigate the impact of rooftop solar panels on households in their town. They had one month to complete their investigation.\n\n' +
      'One of the students kept a record of how they conducted their investigation. The investigation process is presented across the interactive timeline below. You will be asked to evaluate their investigation process.\n\n' +
      '**Summary of the timeline:**\n' +
      '• **Week 1** — The students wrote the research question “To what extent have rooftop solar panels changed daily life for households in our town?” and interviewed four families who had installed panels, asking how the panels changed their electricity use and household costs.\n' +
      '• **Findings from the interviews** — All four families had used solar panels for at least two years; the panels are a reliable source of daytime electricity; one family said evening power cuts were no longer a problem thanks to a battery; two families now run small home businesses using the spare power; some said the upfront cost was high.\n' +
      '• **Week 3** — They found secondary information on a national energy-ministry website (published 2020) listing benefits of rooftop solar for households: lower electricity bills; reliable power during outages; reduced use of diesel generators; income from selling spare power; lower carbon emissions.\n' +
      '• **Week 4** — They visited a nearby village and took photographs of houses with rooftop panels and of a community battery store.',
    artefact: {
      component: 'TimelineScrubber',
      caption:
        'Q4 stimulus — the student investigation timeline. Scrub through the four weeks of the MYP year 5 students’ investigation into rooftop solar adoption by households.',
      data: {
        title: 'Investigation timeline',
        source: 'MYP year 5 student investigation, Morocco',
        events: [
          {
            date: 'Week 1',
            label: 'Research question + interviews with 4 solar households',
            detail:
              'Research question: “To what extent have rooftop solar panels changed daily life for households in our town?” We asked each family: How have the panels changed your electricity use? How have they changed your household costs?',
          },
          {
            date: 'Week 2',
            label: 'Summarised the interviews (primary data)',
            detail:
              'All 4 families had used panels for at least 2 years; the panels are a reliable source of daytime electricity; one family said evening power cuts were no longer a problem thanks to a battery; 2 families now run small home businesses using spare power; some said the upfront cost was high.',
          },
          {
            date: 'Week 3',
            label: 'Secondary research — national energy-ministry website (2020)',
            detail:
              'Listed benefits of rooftop solar for households: lower electricity bills; reliable power during outages; reduced use of diesel generators; income from selling spare power; lower carbon emissions.',
          },
          {
            date: 'Week 4',
            label: 'Fieldwork in a nearby village — photographs',
            detail:
              'Photographed houses with rooftop solar panels and a shared community battery store.',
          },
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
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Candidate case studies for your investigation — click a row to pin the one you choose, then build your research question, sources and interviewees around it. These are prompts only; your plan must be in your own words.',
      data: {
        title: 'Possible case studies — industrialization around the world',
        source: 'MYP Integrated Humanities — investigation planner',
        headers: ['Case study (place / industry)', 'How lives changed', 'Possible primary source', 'Possible secondary source', 'Who you could interview'],
        rows: [
          ['Textile mills, Manchester (UK)', 'Rural workers moved to crowded factory towns', 'Census records; factory workers’ diaries', 'A local-history museum website', 'A local historian; a museum curator'],
          ['Steel works, Pittsburgh (USA)', 'New industrial jobs but unsafe, polluted conditions', 'Old photographs of the steel works', 'A documentary on US industry', 'A retired steelworker; an industrial-heritage guide'],
          ['Garment factories, Bangladesh', 'Many jobs created, but low wages and long hours', 'Interview / questionnaire with garment workers', 'ILO or World Bank labour reports', 'A factory worker; a trade-union representative'],
          ['Car manufacturing, Japan', 'Rapid growth raised incomes and changed cities', 'A factory visit and field notes', 'Company history; economic textbooks', 'A factory engineer; an economics teacher'],
          ['Coal mining, Ruhr (Germany)', 'Mining communities grew then declined as pits closed', 'Photographs of mining towns then and now', 'A regional-government regeneration report', 'A former miner; a town-planning officer'],
        ],
        caption:
          'Pick ONE case study, then formulate a clear and focused research question about how industrialization changed lives there. The sources and people are examples to adapt, not a model answer.',
      },
    },
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
    topic: 'Script explaining to an economic agent how to help with rising food prices',
    marks: 18,
    stem:
      'As part of an MYP school project on the state of the economy around the world, your team has been tasked to create a short video about rising food prices. You must work on the script to explain to one economic agent how they could help with rising food prices for a country of your choice.\n\n' +
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
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'The four economic agents you can choose from — hover (or click to pin) one to spotlight it. Each card lists ways that agent could help with rising food prices. Choose ONE agent and develop two of these ideas in your own script.',
      data: {
        title: 'Economic agents and rising food prices',
        source: 'MYP Integrated Humanities — economics project',
        intro: 'Pick ONE economic agent below. Your script must include two ways that agent could help bring food prices down for a country of your choice.',
        layout: 'grid',
        blocks: [
          {
            icon: '🛒',
            heading: 'Consumers',
            items: [
              'Buy seasonal and local food to cut transport costs and waste',
              'Reduce food waste so less needs to be bought overall',
              'Switch to cheaper staple foods when prices rise',
            ],
          },
          {
            icon: '🚜',
            heading: 'Producers',
            items: [
              'Grow more food and use better farming methods to raise yields',
              'Sell directly to markets to cut out costly middlemen',
              'Store harvests well to supply food when prices are high',
            ],
          },
          {
            icon: '🏛️',
            heading: 'Governments',
            items: [
              'Subsidise farmers or staple foods to keep prices affordable',
              'Build food reserves and release them when prices spike',
              'Reduce import taxes on food or control prices of essentials',
            ],
          },
          {
            icon: '🏦',
            heading: 'Banks',
            items: [
              'Offer low-interest loans so farmers can buy seed and equipment',
              'Provide credit to food businesses to keep supply steady',
              'Adjust interest rates to help control inflation in the economy',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          '**Explain** to **one** economic agent how they could help with rising food prices for a country of your choice. Write the script for a short video (with an introduction and conclusion) that informs, engages and convinces, and includes **two** ways in which the economic agent could help.',
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
    topic: 'Source evaluation: origin, purpose, value and limitation of Source A (Mill Quarter)',
    marks: 8,
    stem:
      'In 2021, the Riverside Heritage Regeneration Trust introduced a plan aimed at regenerating the historic Mill Quarter by combining its industrial heritage with new green public space in the city centre. **Source A** is the Trust’s published report, which gives details of four of the methods they used to do this.\n\n' +
      'Read **Source A** and answer the questions that follow. You will be asked to analyse it in terms of its origin, purpose, value and limitations for an MYP student studying sustainable management of urban environments.\n\n' +
      '**The four methods described in Source A:**\n' +
      '1. **Reuse of historic buildings** — a 19th-century cotton mill turned into apartments and workshops and a former weaving shed turned into a covered market hall.\n' +
      '2. **Historic and modern buildings together** — new low-rise housing and offices built around the preserved mill buildings to show they can co-exist.\n' +
      '3. **Areas of cultural interest** — mill structures adapted with modern features while respecting the area’s character (a museum of industry, an arts venue, a restored canal basin).\n' +
      '4. **Natural spaces** — canal towpath, riverside footpaths and pocket parks preserved and replanted, and the canal water cleaned and reopened for recreation and ecological reasons.',
    artefact: MILL_QUARTER_SOURCE_A,
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
    topic: 'Explain how a Mill Quarter regeneration method contributed to economic development',
    marks: 4,
    stem:
      '**Source A** (the Riverside Heritage Regeneration Trust report on the Mill Quarter) is repeated here for information.',
    artefact: MILL_QUARTER_SOURCE_A,
    tasks: [
      {
        label: '',
        text:
          '**Explain** how **one** of the **following** methods used by the Riverside Heritage Regeneration Trust contributed to the economic development of the city.\n\n' +
          '○ Reuse of historic buildings\n' +
          '○ Historic and modern buildings together\n' +
          '○ Areas of cultural interest\n' +
          '○ Natural spaces',
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
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Alternative redevelopment examples (NOT the Mill Quarter) with contrasting perspectives — click a row to pin one you might use as evidence. The two perspective columns help you weigh "to what extent" the redevelopment was sustainable. These are prompts; write your essay in your own words.',
      data: {
        title: 'Redevelopment & sustainable management — possible examples',
        source: 'MYP Integrated Humanities — essay planner (you cannot use the Mill Quarter)',
        headers: ['Place / redevelopment', 'Perspective: more sustainable', 'Perspective: less sustainable / concern'],
        rows: [
          ['London Docklands (UK) — former docks to offices & housing', 'Reused derelict land; new jobs and transport links', 'Long-time residents priced out; original community displaced'],
          ['Cheonggyecheon stream, Seoul (S. Korea) — motorway to river park', 'Restored a river, cut heat and pollution, added green space', 'Very costly; some say it is managed nature, not truly natural'],
          ['Medellín (Colombia) — cable cars & libraries in poorer hillsides', 'Connected isolated communities; reduced inequality and crime', 'Benefits uneven; some areas still lack basic services'],
          ['Beijing Olympic Park (China) — venues for the 2008 Games', 'Modern facilities and public spaces in a redeveloped district', 'Some venues now underused; high upkeep and land costs'],
          ['Singapore — Marina Bay built on reclaimed land', 'Green buildings, water recycling, public waterfront', 'Land reclamation and high energy use raise environmental questions'],
        ],
        caption:
          'Choose ONE place (not the Mill Quarter). Use the two perspective columns to argue how far its redevelopment did — or did not — contribute to sustainable management, then reach a judgement.',
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** has the redevelopment of **one** place contributed to its sustainable management?\n\n' +
          'In your essay, you must:\n' +
          '• provide example(s) from your MYP studies and/or your own knowledge\n' +
          '• consider different perspectives.\n\n' +
          'You **cannot** use the regeneration of the Mill Quarter as an example.',
        marks: 24,
        ph: 'Balanced essay: example (not the Mill Quarter), multiple perspectives, reasoned judgement.',
      },
    ],
  },
]
