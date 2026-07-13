// Original SEO blog posts targeting high-intent MYP informational queries
// ("what is the MYP", "how is MYP graded", "MYP command terms", etc.).
// All content is original — written for CritABCD, not copied from IB materials.

export interface BlogSection {
  heading?: string
  body?: string[]
  bullets?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  datePublished: string // ISO date
  readMinutes: number
  tags: string[]
  intro: string
  sections: BlogSection[]
  faq?: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'what-is-the-myp',
    title: 'What Is the IB MYP? A Plain-English Guide for Students & Parents',
    description:
      'The IB Middle Years Programme (MYP) explained simply: who it’s for, the eight subject groups, how it’s assessed against criteria, and how it differs from GCSE.',
    datePublished: '2026-07-08',
    readMinutes: 6,
    tags: ['MYP basics', 'Assessment'],
    intro:
      'The IB Middle Years Programme (MYP) is a curriculum framework for students aged roughly 11 to 16. Instead of memorising facts for one big exam, MYP students are assessed on a set of skills — described by four criteria in every subject — and on how well they can apply what they know to unfamiliar situations. Here is what that means in practice.',
    sections: [
      {
        heading: 'Who the MYP is for',
        body: [
          'The MYP spans five years (MYP 1–5), typically ages 11–16, bridging the IB Primary Years Programme and the IB Diploma. It is designed to develop “learning how to learn” — the approaches to learning (ATL) skills of communication, research, self-management, thinking and collaboration.',
        ],
      },
      {
        heading: 'The eight subject groups',
        body: ['Every MYP student studies across eight subject groups:'],
        bullets: [
          'Language and literature',
          'Language acquisition',
          'Individuals and societies (humanities: history, geography, economics, civics)',
          'Sciences (biology, chemistry, physics)',
          'Mathematics',
          'Arts',
          'Physical and health education',
          'Design',
        ],
      },
      {
        heading: 'How the MYP is assessed',
        body: [
          'Each subject has four assessment criteria (labelled A, B, C and D), and each is marked out of 8 against published level descriptors. Teachers judge work against these descriptors throughout the year rather than awarding a single percentage. The four criterion levels are then combined and mapped through grade boundaries to a final grade from 1 (lowest) to 7 (highest).',
          'Concepts and global contexts sit at the heart of the MYP: students explore big ideas (like systems, change or relationships) through real-world lenses (like globalization and sustainability, or identities and relationships).',
        ],
      },
      {
        heading: 'MYP vs GCSE / national curricula',
        body: [
          'Unlike many national systems, the MYP is a framework, not a fixed content list — schools choose engaging content that meets local requirements. Assessment is criterion-referenced and skills-focused, and for Year 5 students the IB offers optional on-screen eAssessments and ePortfolios that lead to the IB MYP Certificate.',
        ],
      },
    ],
    faq: [
      { q: 'What ages is the MYP for?', a: 'The MYP is designed for students aged 11 to 16, across five years (MYP 1–5).' },
      { q: 'How is the MYP graded?', a: 'Each subject is assessed against four criteria (A–D), each out of 8. The combined criterion levels map to a final grade from 1 to 7.' },
      { q: 'Is the MYP harder than GCSE?', a: 'It is different rather than harder — the MYP emphasises skills, concepts and applying knowledge to new situations, assessed continuously against criteria rather than in one terminal exam.' },
    ],
    related: [
      { label: 'How MYP grading works', href: '/blog/myp-grading-explained' },
      { label: 'Browse subject guides', href: '/guides' },
    ],
  },
  {
    slug: 'myp-grading-explained',
    title: 'MYP Grading Explained: Criteria, the 1–8 Levels and the Final 1–7 Grade',
    description:
      'How MYP grading actually works: the four criteria, level descriptors out of 8, grade boundaries, and how criterion levels become a final grade from 1 to 7.',
    datePublished: '2026-07-09',
    readMinutes: 5,
    tags: ['Assessment', 'Grading'],
    intro:
      'MYP grading confuses a lot of students and parents because it uses two different scales: criteria are marked out of 8, but the final grade is out of 7. Here is how the two connect.',
    sections: [
      {
        heading: 'Step 1 — Four criteria, each out of 8',
        body: [
          'Every MYP subject is assessed against four criteria (A, B, C, D). Each criterion is marked from 0 to 8 using level descriptors — bands of wording (usually 1–2, 3–4, 5–6, 7–8) that describe what a piece of work at that level looks like. Teachers match a student’s work to the descriptor it best fits.',
        ],
      },
      {
        heading: 'Step 2 — Add the criterion levels',
        body: [
          'Across a reporting period the four criterion levels are combined to give a total out of 32. A student does not need every task to hit all four criteria; teachers use their professional judgement of the best-fit level for each criterion based on the body of work.',
        ],
      },
      {
        heading: 'Step 3 — Apply the grade boundaries',
        body: [
          'The total out of 32 is then converted to a final MYP grade from 1 to 7 using the IB’s general grade boundaries. Grade 7 represents excellent, consistent achievement; grade 4 sits around adequate; grade 1 represents very limited achievement.',
        ],
      },
      {
        heading: 'Why criterion feedback matters more than a single mark',
        body: [
          'Because each criterion is separate, feedback tells you exactly where to improve — you might be strong on Knowing and understanding but need work on evaluating or communicating. That is why CritABCD marks practice against each criterion individually rather than giving one percentage.',
        ],
      },
    ],
    faq: [
      { q: 'Why is MYP marked out of 8 but graded out of 7?', a: 'Each of the four criteria is marked out of 8. The four levels are combined (out of 32) and converted through grade boundaries into a final grade from 1 to 7.' },
      { q: 'What is a good MYP grade?', a: 'Grade 6–7 is excellent, 4–5 is solid/good, and 3 is around the threshold of adequate achievement. Boundaries are set by the IB.' },
      { q: 'Do all four criteria have equal weight?', a: 'Yes — the four criteria are equally weighted, each out of 8.' },
    ],
    related: [
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'Practice with AI marking', href: '/guides' },
    ],
  },
  {
    slug: 'myp-assessment-criteria-explained',
    title: 'MYP Assessment Criteria (A–D) Explained for Every Subject',
    description:
      'What the four MYP assessment criteria (A, B, C, D) mean in Sciences, Individuals & Societies and Design — and how to move up the level descriptors.',
    datePublished: '2026-07-10',
    readMinutes: 6,
    tags: ['Assessment', 'Criteria'],
    intro:
      'Every MYP subject uses four criteria, but the titles change by subject group. Here is what A, B, C and D mean in the subjects CritABCD covers, and how to climb from the lower bands to the top.',
    sections: [
      {
        heading: 'Sciences (Biology, Chemistry, Physics)',
        bullets: [
          'A — Knowing and understanding: recall and apply science to new situations.',
          'B — Inquiring and designing: hypothesise and plan a valid investigation.',
          'C — Processing and evaluating: handle data, conclude, and evaluate the method.',
          'D — Reflecting on the impacts of science: discuss implications for people and the environment.',
        ],
      },
      {
        heading: 'Individuals & Societies (Humanities, Geography)',
        bullets: [
          'A — Knowing and understanding: use terminology and explain content and concepts.',
          'B — Investigating: set a research question and follow an action plan.',
          'C — Communicating: structure and reference work for the audience.',
          'D — Thinking critically: analyse sources, weigh perspectives, build arguments.',
        ],
      },
      {
        heading: 'Design',
        bullets: [
          'A — Inquiring and analysing: justify the need and analyse existing products.',
          'B — Developing ideas: specify success criteria and design feasible solutions.',
          'C — Creating the solution: plan and make with technical skill.',
          'D — Evaluating: test against the specification and judge impact.',
        ],
      },
      {
        heading: 'How to move up the bands',
        body: [
          'Level descriptors escalate through verbs. Lower bands ask you to state or outline; higher bands ask you to explain, then analyse, justify or evaluate. The single most reliable way to gain marks is to answer with the command verb the top band uses — and to back every claim with specific evidence.',
        ],
      },
    ],
    faq: [
      { q: 'Are the MYP criteria the same in every subject?', a: 'There are always four criteria (A–D), each out of 8, but their titles and focus differ by subject group — for example Sciences uses “Inquiring and designing” for B, while Individuals & Societies uses “Investigating”.' },
      { q: 'How do I get a 7–8 on a criterion?', a: 'Match the command verb the top band uses (analyse, justify, evaluate), address every strand of the criterion, and support each point with specific, relevant evidence.' },
    ],
    related: [
      { label: 'How MYP grading works', href: '/blog/myp-grading-explained' },
      { label: 'MYP command terms', href: '/blog/myp-command-terms' },
    ],
  },
  {
    slug: 'myp-command-terms',
    title: 'MYP Command Terms: What “Analyse”, “Evaluate” and “Justify” Really Want',
    description:
      'A student’s guide to MYP command terms. What examiners mean by describe, explain, analyse, evaluate, justify and more — with quick tips to answer each correctly.',
    datePublished: '2026-07-11',
    readMinutes: 5,
    tags: ['Exam skills', 'Command terms'],
    intro:
      'Command terms are the verbs that tell you exactly what an MYP question wants. Misreading them is one of the most common — and most avoidable — ways to lose marks. Here is what the key ones mean.',
    sections: [
      {
        heading: 'Lower-order (knowledge & comprehension)',
        bullets: [
          'State / Identify — give a brief, specific answer, no explanation.',
          'Describe — give a detailed account, but not reasons.',
          'Outline — give a brief summary of the main points.',
        ],
      },
      {
        heading: 'Middle-order (application & analysis)',
        bullets: [
          'Explain — give reasons or causes; say why or how.',
          'Analyse — break something into parts and show how they relate.',
          'Compare / Contrast — give similarities and/or differences, point by point.',
        ],
      },
      {
        heading: 'Higher-order (synthesis & evaluation)',
        bullets: [
          'Evaluate — weigh strengths and limitations and reach a supported judgement.',
          'Justify — give valid reasons to support a choice or conclusion.',
          'To what extent — argue how far something is true, with evidence on both sides.',
        ],
      },
      {
        heading: 'The one habit that lifts marks',
        body: [
          'Underline the command term before you write, then check your answer actually performs that verb. An “evaluate” answer that only describes will cap in the lower bands no matter how much you write.',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between “explain” and “analyse”?', a: '“Explain” asks for reasons or causes (why/how). “Analyse” asks you to break something into parts and show how those parts relate or contribute to a whole.' },
      { q: 'What does “to what extent” mean in MYP?', a: 'It asks you to argue how far a statement is true — present evidence for and against, then reach a supported, balanced judgement.' },
    ],
    related: [
      { label: 'MYP assessment criteria', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'Subject guides', href: '/guides' },
    ],
  },
  {
    slug: 'myp-eassessment-explained',
    title: 'MYP eAssessment: On-Screen Exams and ePortfolios Explained',
    description:
      'How MYP eAssessment works in Year 5: the 2-hour on-screen examinations, the ePortfolios for Design and Arts, and what leads to the IB MYP Certificate.',
    datePublished: '2026-07-12',
    readMinutes: 5,
    tags: ['eAssessment', 'MYP basics'],
    intro:
      'For students who want a formal, externally validated qualification at the end of MYP Year 5, the IB offers optional eAssessment. It comes in two forms — on-screen examinations and ePortfolios — and together they can lead to the IB MYP Certificate.',
    sections: [
      {
        heading: 'On-screen examinations (2 hours)',
        body: [
          'On-screen exams are sat for language and literature, individuals and societies, sciences, mathematics and interdisciplinary learning. Each is a 2-hour examination built around unseen stimulus material — text, data, images and scenarios — and assessed against the subject’s criteria.',
        ],
      },
      {
        heading: 'ePortfolios',
        body: [
          'Design, arts, language acquisition and physical and health education are assessed by ePortfolio — a body of coursework marked by the school’s teachers against the published criteria and moderated by the IB. In Design, this is a design folder documenting the whole design cycle.',
        ],
      },
      {
        heading: 'What earns the IB MYP Certificate',
        body: [
          'To earn the Certificate, students complete on-screen exams in the required groups, submit at least one ePortfolio, complete a moderated personal project, and meet the school’s expectations for service as action. Schools can also enter students for individual course results.',
        ],
      },
      {
        heading: 'How to prepare',
        body: [
          'Because on-screen exams use unseen sources, the best preparation is practising the skills — reading data, analysing sources and answering to the command term — under timed conditions. That is exactly what CritABCD’s simulated exams and criterion practice are built for.',
        ],
      },
    ],
    faq: [
      { q: 'How long are MYP on-screen exams?', a: 'Each MYP on-screen examination is 2 hours long.' },
      { q: 'Is MYP eAssessment compulsory?', a: 'No — eAssessment is optional. It is for students seeking the formal IB MYP Certificate or IB-validated course results at the end of Year 5.' },
      { q: 'How is MYP Design assessed?', a: 'Design uses an ePortfolio (a design folder), not an on-screen exam, marked against criteria A–D and moderated by the IB.' },
    ],
    related: [
      { label: 'The MYP design cycle explained', href: '/blog/myp-design-cycle-explained' },
      { label: 'Practice past papers', href: '/guides' },
    ],
  },
  {
    slug: 'myp-design-cycle-explained',
    title: 'The MYP Design Cycle Explained (Criteria A–D)',
    description:
      'A clear guide to the MYP design cycle: inquiring & analysing, developing ideas, creating the solution and evaluating — and how each maps to criteria A–D.',
    datePublished: '2026-07-12',
    readMinutes: 5,
    tags: ['Design', 'Criteria'],
    intro:
      'MYP Design is built around one repeating process: the design cycle. Its four stages map exactly onto the four assessment criteria, so understanding the cycle is understanding how you are marked.',
    sections: [
      {
        heading: 'A — Inquiring and analysing',
        body: ['Identify and justify a real need, plan and prioritise research, and analyse existing products to write a detailed design brief.'],
      },
      {
        heading: 'B — Developing ideas',
        body: ['Turn research into a design specification with measurable success criteria, generate a range of feasible ideas, choose one with justification, and produce accurate planning drawings.'],
      },
      {
        heading: 'C — Creating the solution',
        body: ['Make a logical plan, then build the solution with technical skill, following the plan and justifying any changes you make along the way.'],
      },
      {
        heading: 'D — Evaluating',
        body: ['Design tests that generate data, evaluate the solution against your own specification, and explain both improvements and the impact on the client or audience.'],
      },
      {
        heading: 'Why it is a cycle, not a line',
        body: [
          'Evaluation feeds back into new inquiry — real designers loop. On CritABCD you can study a fully worked exemplar project through all four stages, then rebuild it for your own brief.',
        ],
      },
    ],
    faq: [
      { q: 'What are the four stages of the MYP design cycle?', a: 'Inquiring and analysing (A), developing ideas (B), creating the solution (C), and evaluating (D).' },
      { q: 'How is MYP Design graded?', a: 'Against the four criteria A–D, each out of 8, via a design folder (ePortfolio) rather than a written exam.' },
    ],
    related: [
      { label: 'MYP Design subject guide', href: '/guides/design' },
      { label: 'Open the Design module', href: '/design' },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
