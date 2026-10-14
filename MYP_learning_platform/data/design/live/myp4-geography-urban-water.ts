// MYP4 Geography — Unit 1 exemplar: "Cities, Water and Fairness".
// Built from the shared Individuals & Societies skeleton (is-shared.ts); this file is
// only the Geography content. Sources are constructed for the task and say so.

import { buildSocietyActivity } from './is-shared'
import { GEO_URBAN_WATER_TOPICS } from './society-personas'

export const MYP4_GEOGRAPHY_URBAN_WATER = buildSocietyActivity({
  id: 'myp4-geography-urban-water',
  subject: 'Geography',
  title: 'Cities, Water and Fairness',
  subtitle: 'MYP4 Geography · Unit 1 — Who gets water when a city grows? Investigate, interview, judge sources and argue.',
  icon: '🚰',
  theme: { accent: '#1B8FD1', from: '#0A1B2A', via: '#0F2A40', to: '#143650' },
  unit: {
    name: 'Cities, Water and Fairness',
    keyConcept: 'Systems',
    relatedConcepts: ['causality', 'disparity and equity', 'governance', 'sustainability'],
    globalContext: 'Globalization and sustainability',
    statementOfInquiry: 'Cities are systems in which growth, climate and decisions about resources interact, so who gets water depends on choices as well as on rainfall.',
    inquiryQuestions: ['Why do some city neighbourhoods have more water than others?', 'How can a growing city supply water fairly and sustainably?', 'Whose views count when water is limited?'],
  },
  leadInterests: ['MYP Geography', 'MYP Humanities', 'Free interactive resources', 'Live classes for teachers (Gameducation)'],
  leadSource: '/design/live/myp4-geography-urban-water',
  hookPages: [
    {
      icon: '🚰',
      title: 'What if the tap ran dry?',
      body: [
        'Between about 2015 and 2018, Cape Town in South Africa came close to running out of water after several dry years. The city warned that “Day Zero” could arrive, the day taps in most homes would be switched off. Residents and the city cut water use sharply, and Day Zero did not arrive.',
        'Cities all over the world now face the same question in different forms: too little water, too much flood water, dirty water or water that some people can reach and others cannot.',
      ],
      example: {
        label: 'Same city, different experiences',
        weak: '“The city does not have enough water.”',
        strong: '“Households in the wealthy suburb keep their taps on while a settlement on the edge queues at a standpipe for a few hours a day.”',
        note: 'Geographers look for patterns, causes and who is affected. The second statement points to a pattern worth explaining.',
      },
      tip: 'Today you investigate one direction of the story. Which of the four will you choose?',
    },
  ],
  vocabPage: {
    icon: '📚',
    title: 'Words to use',
    body: ['Use these terms accurately in your own writing. A geographer who uses the right word is usually thinking more clearly.'],
    keyTerms: [
      { term: 'Urbanization', meaning: 'the growth of towns and cities as more people live in them' },
      { term: 'Water stress', meaning: 'when demand for water is higher than the supply that can be used' },
      { term: 'Surface runoff', meaning: 'rain that flows over the ground instead of soaking in' },
      { term: 'Informal settlement', meaning: 'housing built without official planning or land rights' },
      { term: 'Stakeholder', meaning: 'a person or group affected by a decision, or able to influence it' },
      { term: 'Sustainable', meaning: 'meeting today’s needs without using up what later people will need' },
    ],
    tip: 'Try to use at least four of these words, correctly, in your final paragraph.',
  },
  checkA: [
    {
      q: 'Which statement best describes urbanization?',
      options: ['A rise in the share of people living in towns and cities', 'A fall in rainfall in cities', 'Building roads between villages', 'Moving factories out of cities'],
      correct: 0,
    },
    {
      q: 'A city has more people wanting water than the reservoirs and pipes can supply. This is best called:',
      options: ['Water stress', 'Surface runoff', 'Water quality', 'Infiltration'],
      correct: 0,
    },
    {
      q: 'Why does paving over green space make flooding more likely?',
      options: ['Rain soaks in faster through concrete', 'Rain runs off the surface faster and overloads drains', 'Paved ground attracts more rainfall', 'Pavements store water for later'],
      correct: 1,
    },
    {
      q: 'Which pair is a stakeholder group and the reason they care?',
      options: ['Water utility — it needs to recover costs and keep supply safe', 'The ocean — it needs more rain', 'A reservoir — it wants to be full', 'Rainfall — it wants to reach drains'],
      correct: 0,
    },
    {
      q: 'In an informal settlement, residents often pay more per litre for water than richer areas. What is the best explanation?',
      options: ['They use more water', 'They buy from tankers or vendors because pipes do not reach them', 'Water is naturally more expensive in poor areas', 'They are charged a tax for living there'],
      correct: 1,
    },
    {
      q: 'Which action would make a city’s water use more sustainable?',
      options: ['Fixing leaking pipes and capturing rainwater', 'Drawing more from the reservoir each year', 'Banning all new housing', 'Moving the dam'],
      correct: 0,
    },
  ],
  directions: [...GEO_URBAN_WATER_TOPICS],
  directionBlurb:
    'Four directions: Water supply and drought (is there enough?), Flooding and drainage (too much at once), Water quality and sanitation (is it safe?), Fair access in informal settlements (who is left out?). Each one has two characters you can interview.',
  rq: {
    weak: '“Why does the city have water problems?”',
    strong: '“To what extent has rapid urban growth, rather than low rainfall, caused unequal access to water in Meridian’s informal settlements since 2010?”',
    note: 'The strong version names a place, a time, a cause to test and the people affected, so it can be answered with evidence.',
    exemplars: [
      'To what extent has rapid urban growth, rather than low rainfall, caused unequal access to clean water between wealthy suburbs and informal settlements in Meridian since 2010?',
      'How far have drainage decisions, rather than heavy rain alone, caused the repeated flooding of the market district in a fast-growing city in the last decade?',
      'Why do residents of informal settlements pay more per litre for water than richer neighbourhoods, and how could the city make supply fairer?',
    ],
    keywords: ['to what extent', 'how far', 'rather than', 'since', 'unequal', 'informal'],
  },
  plan: {
    weak: '“Look up water. Ask some people. Write it up.”',
    strong: '“1. Compare water use per person across three neighbourhoods using Source B (secondary, shows the pattern). 2. Interview a resident of the informal settlement (primary, shows daily reality). 3. Read the Water Authority’s press release (secondary, shows the official view) and judge its purpose.”',
    exemplars: [],
  },
  methodBullets: [
    'Primary here: your interview with a character, kept as a transcript.',
    'Secondary here: the source pack (a press release, a data table, a residents’ statement).',
    'Always write which source a fact came from, so you can cite it.',
  ],
  sourcePages: [
    {
      icon: '📰',
      title: 'Source A — Press release',
      body: ['Meridian City Water Authority, news release, March 2024 (constructed for this task; patterned on real utility releases).'],
      example: {
        label: 'Source A',
        text: 'Dam levels now stand at 24 per cent. Thanks to the efforts of residents, water use has fallen by 18 per cent since January and Day Zero is not expected. The Authority’s priority remains safe water for all residents. A new pipeline from the northern catchment will be completed within four years, subject to funding. Residents are reminded that fines apply to anyone using more than their daily limit.',
        note: 'Think: who wrote this, and for whom? What is it quiet about?',
      },
    },
    {
      icon: '📊',
      title: 'Source B — Data table',
      body: ['Water supply by neighbourhood, Meridian, 2024. Illustrative figures constructed for this task.'],
      bullets: [
        'Lakeview (high income): 310 litres per person per day · 98% of homes piped · cost about $1.20 per 1000 litres',
        'Central (middle income): 170 litres per person per day · 90% of homes piped · cost about $1.20 per 1000 litres',
        'Eastfield (informal settlement): 28 litres per person per day · 12% of homes piped, the rest rely on standpipes and tankers · cost about $6.50 per 1000 litres',
      ],
      example: { label: 'Source B', text: 'Eastfield residents receive roughly one-tenth of Lakeview’s water per person and pay about five times as much per litre. The table does not show where the figures came from or how they were measured.', note: 'Check: what does the table show well, and what would you need to know to trust it?' },
    },
    {
      icon: '🗣️',
      title: 'Source C — Residents’ statement',
      body: ['Eastfield Residents’ Association, open letter to the city council, 2024 (constructed for this task).'],
      example: {
        label: 'Source C',
        text: 'We queue at the standpipe before dawn and carry water home in buckets. We pay far more per litre than people in Lakeview, yet the Authority tells us to save water. Our homes are not on the city map, so we cannot apply for a connection. We ask the council to give us official addresses and a legal water supply.',
        note: 'Think: whose voice is this, what does it want, and what might it leave out?',
      },
    },
  ],
  opvlExample: {
    label: 'Judging a press release',
    weak: '“The source says dam levels are 24%.”',
    strong: '“Origin: the city water authority, 2024, a press release. Purpose: to reassure residents and justify restrictions, so it stresses success. Value: it gives official dam levels. Limitation: it says nothing about who is still without water, so it is one-sided.”',
    note: 'The strong answer judges the source instead of repeating it.',
  },
  checkD: [
    {
      q: 'Source A is a press release by the water authority. Its most likely purpose is to:',
      options: ['Reassure residents and justify restrictions', 'Prove that the pipeline will fail', 'Record rainfall for scientists', 'Criticise the council'],
      correct: 0,
    },
    {
      q: 'What is the main limitation of Source B?',
      options: ['It uses numbers', 'It does not say where the figures came from or how they were measured', 'It compares three neighbourhoods', 'It is a table'],
      correct: 1,
    },
    {
      q: 'Source C is most valuable for understanding:',
      options: ['The exact amount of water in the dams', 'How some residents experience unequal access and what they want', 'The water authority’s budget', 'The weather forecast'],
      correct: 1,
    },
    {
      q: 'Which statement best compares the perspectives in Source A and Source C?',
      options: ['Both say Day Zero is coming', 'Source A stresses overall success and rules, Source C stresses unfair daily experience and a lack of official recognition', 'Both come from the same person', 'Neither mentions water'],
      correct: 1,
    },
    {
      q: 'A strong implication of Source C’s perspective for the city’s plans is that:',
      options: ['Plans should ignore settlements without addresses', 'Plans may need to recognise settlements and extend supply to them, not just ask for savings', 'Residents should stop using water', 'The pipeline should be cancelled'],
      correct: 1,
    },
  ],
  sourceNames: ['Source A press release', 'Source B data table', 'Source C residents’ statement'],
  model: {
    title: 'Urban water as a system',
    blurb: 'A system has inputs, stores, flows, outputs and decisions. Fill in what each part is in Meridian and show one link between two parts.',
    rows: [
      { key: 'inputs', label: 'Inputs (rain, rivers, boreholes)' },
      { key: 'stores', label: 'Stores (dams, tanks)' },
      { key: 'flows', label: 'Flows (pipes, tankers, drains)' },
      { key: 'users', label: 'Users (homes, businesses)' },
      { key: 'decisions', label: 'Decisions (prices, rules, planning)' },
    ],
    exemplars: [],
  },
  perspectiveExemplars: [
    'The water authority’s perspective is that restrictions and fines protect a limited supply for everyone, whereas Eastfield residents’ perspective is that they already receive too little and are being asked to save from almost nothing. The implication is that a city-wide saving target treats unequal users as if they were equal, so the plan needs targets by neighbourhood as well as new supply.',
    'A planner sees the cost of laying pipes in unrecognised land as a barrier, however residents see the lack of official addresses as the barrier. As a result, solving legal recognition first could make connections cheaper and fairer, which is an implication the authority’s press release ignores.',
  ],
  argumentQuestion: 'To what extent is unequal access to water in Meridian caused by decisions rather than by low rainfall?',
  argumentExemplars: [
    'Unequal access to water in Meridian is caused more by decisions than by low rainfall. Source B shows Lakeview receiving 310 litres per person per day compared with 28 in Eastfield, although both are supplied from the same dams, which suggests that where pipes are laid and who is connected matter more than the amount of rain. Source C adds that Eastfield cannot be connected because it is not on the city map, a governance decision, not a weather effect. However, Source A says dam levels are low, so rainfall still limits total supply. Overall, drought reduces the water available, but decisions about connections and prices decide who receives it.',
    'The evidence suggests that decisions explain the inequality more than rainfall does. Rainfall is the same across the city, yet Source B shows a ten-fold difference between neighbourhoods, and because Eastfield pays about five times more per litre it is clear that infrastructure and prices are the cause. Even so, low dam levels in Source A mean that everyone faces limits, so rainfall makes the problem worse, but it does not explain the unfairness.',
  ],
  argumentKeywords: ['source', 'however', 'because', 'overall', 'suggests', 'evidence', 'whereas', 'decision'],
  explainPrompt: 'Explain why a growing city can end up with water stress even when rainfall has not changed. Use at least four key terms from the unit.',
  explainExemplars: [
    'Urbanization increases the number of people who need water, so demand grows faster than the supply the dams and pipes can provide. This creates water stress even when rainfall stays the same. For example, if a city doubles in size but its reservoirs do not, each person has less water. Leaking pipes and informal settlements without connections make the shortage worse for some stakeholders.',
    'When a city grows quickly, the system of dams, pipes and tankers is stretched. Water stress appears because more people use the same stores. Surface runoff from paved areas also means less rain soaks in to refill groundwater, so supply can shrink while demand rises. The stakeholders who lose most are usually residents of informal settlements.',
  ],
  explainKeywords: ['urbanization', 'water stress', 'demand', 'supply', 'stakeholder', 'informal settlement', 'for example', 'runoff'],
  evaluateExemplars: [
    'My plan worked because I used a data table, a press release and an interview, so I could compare official and personal views. A limitation is that my interview was with a fictional character, so I could not check their claims, and my data came from one table. Next time I would add a second data source and ask a real local person.',
    'The strongest part of my investigation was the question, which was focused enough to answer with the sources I had. However, my evidence was thin on flooding, so my conclusion is partly missing the other side. I would improve it by planning one more secondary source and checking the interview claims.',
  ],
  reportTitleHint: 'a short report of about 250 words with a title, introduction, two evidence paragraphs, a perspectives paragraph and a conclusion',
})
