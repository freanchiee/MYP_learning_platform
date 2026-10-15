// MYP4 History — Unit 1 exemplar: "The Industrial Revolution: Change for Whom?".
// Built from the shared Individuals & Societies skeleton (is-shared.ts); this file is
// only the History content. Sources are constructed for the task and say so: they are
// patterned on the kinds of document historians use, never real quotations.

import { buildSocietyActivity } from './is-shared'
import { HIST_INDUSTRIAL_TOPICS } from './society-personas'

export const MYP4_HISTORY_INDUSTRIAL_REVOLUTION = buildSocietyActivity({
  id: 'myp4-history-industrial-revolution',
  subject: 'History',
  title: 'The Industrial Revolution: Change for Whom?',
  subtitle: 'MYP4 History · Unit 1 — Machines, mills and empire. Investigate, interview, judge sources and argue.',
  icon: '🏭',
  theme: { accent: '#C2692B', from: '#241409', via: '#38200E', to: '#4A2B14' },
  unit: {
    name: 'The Industrial Revolution: Change for Whom?',
    keyConcept: 'Change',
    relatedConcepts: ['causality', 'perspective', 'significance', 'conflict'],
    globalContext: 'Fairness and development',
    statementOfInquiry: 'New technology can transform how people work and live, but its benefits and costs fall unevenly, so historians must weigh the perspectives of those it helped and those it harmed.',
    inquiryQuestions: ['What caused the factory system to grow in Britain?', 'How did industrial change affect different groups of people?', 'How did Britain’s empire connect to industry in other parts of the world?'],
  },
  leadInterests: ['MYP Humanities', 'Free interactive resources', 'Live classes for teachers (Strandhoot)', '1:1 tutoring'],
  leadSource: '/design/live/myp4-history-industrial-revolution',
  hookPages: [
    {
      icon: '🏭',
      title: 'A town that changed in a lifetime',
      body: [
        'In 1800 Manchester in England was a market town of tens of thousands of people. By 1850 it was a crowded industrial city of hundreds of thousands, with chimneys, canals, railways and rows of workers’ housing. Machines made cloth faster and cheaper than ever before.',
        'Historians call this change the Industrial Revolution. Nearly everyone agrees it was important. The harder question is: important for whom? A mill owner, a child worker, a doctor and a weaver in Bengal could each tell it very differently.',
      ],
      example: {
        label: 'One fact, two stories',
        weak: '“Factories made cloth cheaper, so the Industrial Revolution was good.”',
        strong: '“Factories made cloth cheaper, which helped many buyers, but it also lowered the price of hand-woven cloth and left many weavers poorer.”',
        note: 'Historians weigh both sides and say who gained and who lost.',
      },
      tip: 'Today you choose one group’s story to investigate. Which of the four will you choose?',
    },
  ],
  vocabPage: {
    icon: '📚',
    title: 'Words to use',
    body: ['Use these terms accurately in your own writing. A historian who uses the right word is usually thinking more clearly.'],
    keyTerms: [
      { term: 'Industrialization', meaning: 'the shift from making things by hand to making them by machine in factories' },
      { term: 'Urbanization', meaning: 'the growth of towns and cities as more people live in them' },
      { term: 'Factory system', meaning: 'work done in one building with machines, set hours and wages' },
      { term: 'Reform', meaning: 'a change made to improve laws or conditions' },
      { term: 'Empire', meaning: 'a state ruling other territories and peoples' },
      { term: 'Perspective', meaning: 'the point of view of a person or group, shaped by their situation' },
    ],
    tip: 'Try to use at least four of these words, correctly, in your final paragraph.',
  },
  checkA: [
    {
      q: 'Which description best fits industrialization?',
      options: ['Moving from hand production to machine production in factories', 'Building more farms', 'A rise in sea trade only', 'Closing all workshops'],
      correct: 0,
    },
    {
      q: 'Why did towns like Manchester grow so quickly in the early 1800s?',
      options: ['Mills offered paid work, so many people moved from the countryside and abroad', 'The government forced people to move', 'Farms stopped growing food', 'Railways were banned'],
      correct: 0,
    },
    {
      q: 'Which is an effect of crowded industrial cities on health?',
      options: ['Disease spread more easily where water was dirty and drains were missing', 'Everyone became healthier', 'Doctors were no longer needed', 'Rubbish disappeared'],
      correct: 0,
    },
    {
      q: 'A “reform” in the Industrial Revolution was, for example:',
      options: ['A law limiting the hours children could work in mills', 'A new type of spinning machine', 'A fall in cotton prices', 'A merchant’s ship'],
      correct: 0,
    },
    {
      q: 'How could British industry affect Indian weavers?',
      options: ['Cheap machine-made cloth competed with hand-woven cloth, so some lost orders', 'It made hand-weaving easier', 'It gave Indian weavers new machines for free', 'It had no effect on India'],
      correct: 0,
    },
    {
      q: 'Why do historians study different perspectives?',
      options: ['Because one group’s account rarely shows how everyone experienced the change', 'To avoid using evidence', 'Because all accounts agree', 'To find only the best story'],
      correct: 0,
    },
  ],
  directions: [...HIST_INDUSTRIAL_TOPICS],
  directionBlurb:
    'Four directions: Factory workers and child labour (life inside the mill), Inventors and mill owners (who drove the change), Crowded cities and public health (life outside the mill), Empire, cotton and India (the global link). Each has two fictional characters you can interview.',
  rq: {
    weak: '“What was the Industrial Revolution like?”',
    strong: '“To what extent did the factory system improve the lives of working families in Manchester between 1800 and 1850?”',
    note: 'The strong version names a place, a period and a group, and invites a judgement that evidence can support or challenge.',
    exemplars: [
      'To what extent did the factory system improve the lives of working families in Manchester between 1800 and 1850?',
      'How far did the arrival of machine-made cloth from Britain cause the decline of hand-weaving in Bengal in the early 1800s?',
      'Why did public-health conditions in industrial cities become so poor in the 1830s and 1840s, and how far did reformers change them?',
    ],
    keywords: ['to what extent', 'how far', 'between', 'working families', 'improve', 'cause'],
  },
  plan: {
    weak: '“Read about factories. Ask somebody. Write it up.”',
    strong: '“1. Read the mill owner’s letter, Source A (secondary, shows one view and its purpose). 2. Use the health table, Source B (secondary, shows a pattern). 3. Interview a worker character (primary-style, shows daily experience). 4. Compare them and judge which perspective is best supported.”',
    exemplars: [],
  },
  methodBullets: [
    'Primary here: your interview with a character, kept as a transcript (remember it is fictional).',
    'Secondary here: the source pack (a mill owner’s letter, a health table, a weavers’ petition).',
    'Always write which source a fact came from, so you can cite it.',
  ],
  sourcePages: [
    {
      icon: '✉️',
      title: 'Source A — A mill owner’s letter',
      body: ['Letter to a newspaper from a Lancashire mill owner, 1844 (constructed for this task; patterned on the kinds of letters owners wrote when Parliament debated factory hours).'],
      example: {
        label: 'Source A',
        text: 'Sir, my mill gives bread to four hundred families who would otherwise starve. My young hands are warm, fed and paid, and their parents thank me. If Parliament shortens our hours, the mills of France and Germany will undersell us, and the very people it means to help will be thrown out of work. I ask you to leave honest manufacturers to manage their own affairs.',
        note: 'Think: who is writing, who is he trying to persuade, and what does he not say about the children?',
      },
    },
    {
      icon: '📊',
      title: 'Source B — A health table',
      body: ['Average age at death by place and class, 1840s. Illustrative figures constructed for this task, patterned on public-health reports of the time.'],
      bullets: [
        'Industrial city — professional and gentry families: about 38 years',
        'Industrial city — tradesmen and shopkeepers: about 20 years',
        'Industrial city — labourers and mill workers: about 17 years',
        'Country village — labourers: about 38 years',
      ],
      example: { label: 'Source B', text: 'The table suggests that mill workers in the city died, on average, much younger than labourers in the countryside. It does not say how the figures were gathered, and an average age at death is pulled down by the many babies and children who died.', note: 'Check: what does an average hide?' },
    },
    {
      icon: '📜',
      title: 'Source C — A weavers’ petition',
      body: ['Petition from handloom weavers in Bengal to the colonial authorities, about 1830s (constructed for this task; patterned on petitions about falling cloth trade).'],
      example: {
        label: 'Source C',
        text: 'Our families have woven fine cloth for generations. Now English cloth arrives by ship and sells in our markets for less, while our cloth pays heavy duties when sent to England. Our looms stand idle and we are in debt to the thread merchants. We ask that the duties be made fair so that we may feed our children.',
        note: 'Think: who is asking, who is the audience, and why might they exaggerate or leave things out?',
      },
    },
  ],
  opvlExample: {
    label: 'Judging a letter',
    weak: '“The source says the owner feeds four hundred families.”',
    strong: '“Origin: a mill owner writing to a newspaper in 1844. Purpose: to persuade readers to oppose shorter hours, so he stresses benefits. Value: it shows how owners defended the factory system. Limitation: it is one-sided and says nothing about the children’s own view.”',
    note: 'The strong answer judges the source instead of repeating it.',
  },
  checkD: [
    {
      q: 'The most likely purpose of Source A (the mill owner’s letter) is to:',
      options: ['Persuade readers to oppose shorter hours', 'Report neutral facts to historians', 'Praise Parliament', 'Describe the children’s feelings'],
      correct: 0,
    },
    {
      q: 'What is a limitation of Source B’s “average age at death”?',
      options: ['Averages can hide that many young children died, and the source does not say how the data was gathered', 'It uses numbers', 'It compares two places', 'It was made in the 1840s'],
      correct: 0,
    },
    {
      q: 'Source C is most valuable for understanding:',
      options: ['How some weavers in Bengal experienced competition from machine-made cloth', 'The inventor of the power loom', 'What a mill owner thought', 'The number of mills in Lancashire'],
      correct: 0,
    },
    {
      q: 'Which pair of sources gives the most different perspectives on the factory system?',
      options: ['Source A and Source C', 'Source B alone', 'Source A and Source A', 'Source B and a modern map'],
      correct: 0,
    },
    {
      q: 'An implication of Source B’s evidence for a reformer in the 1840s could be that:',
      options: ['Cleaner water, drains and housing might be needed to improve health', 'Factories should be closed overnight', 'Nothing needs to change', 'Farm labourers should move to cities'],
      correct: 0,
    },
  ],
  sourceNames: ['Source A mill owner’s letter', 'Source B health table', 'Source C weavers’ petition'],
  model: {
    title: 'Causes and consequences of industrial change',
    blurb: 'A cause makes something happen; a consequence follows from it. For each part, say what happened in this case and how it led to the next.',
    rows: [
      { key: 'causes', label: 'Causes (coal, machines, trade, capital)' },
      { key: 'change', label: 'The change (factories, new cities)' },
      { key: 'work', label: 'Effects on work and wages' },
      { key: 'living', label: 'Effects on living conditions' },
      { key: 'response', label: 'Responses (reform, protest, trade rules)' },
    ],
    exemplars: [],
  },
  perspectiveExemplars: [
    'A mill owner’s perspective is that factories provide wages and cheap cloth, whereas a child worker’s perspective is that long hours and fines took away her health and schooling. The implication is that an owner would oppose laws limiting hours because they raise his costs, while reformers would push for them, so the debate over reform was really a conflict between profit and welfare.',
    'A Lancashire broker saw rising cotton imports and exports as progress, however a Bengal weaver saw the same trade as the loss of his market. As a result, the same change was described as growth in Britain and decline in India, which shows that the Industrial Revolution cannot be judged from one place.',
  ],
  argumentQuestion: 'To what extent did the Industrial Revolution improve life for ordinary people in the early 1800s?',
  argumentExemplars: [
    'The Industrial Revolution improved some aspects of life for ordinary people but harmed others, so its overall effect before 1850 was mixed rather than clearly positive. Source A suggests that mills gave wages to hundreds of families, and cheaper cloth helped buyers. However, Source B shows mill workers in the city dying on average at about 17, compared with 38 for country labourers, which suggests that crowded housing and dirty water outweighed the benefits of wages. Source C adds that machine-made cloth damaged weavers in Bengal. Overall, wages and cheap goods were real gains, but for many ordinary people the costs to health and livelihood were greater.',
    'To a limited extent, ordinary people’s lives improved in the early 1800s. Wages and cheaper cloth were benefits, as Source A claims, but the owner who wrote it had a reason to exaggerate them. By contrast, Source B’s health figures and Source C’s petition show serious costs, so the evidence suggests that improvement was uneven and reached owners and buyers sooner than workers. It therefore seems fairer to say the revolution changed life greatly but did not improve it equally.',
  ],
  argumentKeywords: ['source', 'however', 'because', 'overall', 'suggests', 'evidence', 'by contrast', 'mixed'],
  explainPrompt: 'Explain why industrialization led to the rapid growth of cities such as Manchester, and one problem this caused. Use at least four key terms from the unit.',
  explainExemplars: [
    'Industrialization meant that machines and the factory system could make cloth faster and cheaper, which created paid work in towns. As a result urbanization followed, because people moved from the countryside to the mills. For example, Manchester grew from a market town to a large city, but housing, clean water and drains did not grow as fast, so disease spread. This pushed reformers to demand change.',
    'The factory system needed many workers in one place, so families moved to industrial towns and urbanization increased. A problem was that the fast growth left crowded, dirty housing, which damaged health. Reform movements, such as laws limiting child labour, appeared in response, though they were slow and not always enforced.',
  ],
  explainKeywords: ['industrialization', 'urbanization', 'factory system', 'reform', 'perspective', 'empire', 'for example', 'as a result'],
  evaluateExemplars: [
    'My plan worked because I used a letter, a table and a petition, so I could compare owners, workers and weavers. A limitation is that my interview was with a fictional character, so I could not check what they said, and Source B was only one table. Next time I would add a second health source and look for a worker’s own account.',
    'The strongest part of my investigation was the question, which was focused enough to answer with the sources I had. However, I had little evidence about inventors, so my conclusion is partly missing that side. I would improve it by planning another secondary source and checking the interview claims against it.',
  ],
  reportTitleHint: 'a short report of about 250 words with a title, introduction, two evidence paragraphs, a perspectives paragraph and a conclusion',
})
