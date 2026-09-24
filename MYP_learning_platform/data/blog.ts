// Original SEO blog posts targeting high-intent MYP informational queries
// ("what is the MYP", "how is MYP graded", "MYP command terms", etc.).
// All content is original — written for CritABCD, not copied from IB materials.

import { ARTIFACT_POSTS } from './blog-artifact-posts'

export interface BlogSection {
  heading?: string
  body?: string[]
  bullets?: string[]
}

/** An interactive tool embedded inline in a post via <iframe> — the static
 *  file lives under public/ (e.g. public/artifacts/vent-expedition.html)
 *  and is served same-origin, so it needs no CORS/sandbox allowances. The
 *  surrounding article text (intro, sections, faq) is what actually gets
 *  indexed and ranks — the embed is the payoff for a reader who's already
 *  landed on the page, not a substitute for real written content. */
export interface BlogEmbed {
  src: string
  title: string
  height?: number // px, default 760
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  datePublished: string // ISO date
  readMinutes: number
  tags: string[]
  intro: string
  embed?: BlogEmbed
  embedIntro?: string // one-line caption shown directly above the embed
  sections: BlogSection[]
  faq?: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

const CORE_POSTS: BlogPost[] = [
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
  {
    slug: 'hydrothermal-vents-chemosynthesis-myp-biology',
    title: 'Hydrothermal Vents & Chemosynthesis: MYP Biology Explained (with a Live Classification Lab)',
    description:
      'How life survives at hydrothermal vents without sunlight — chemosynthesis vs photosynthesis, cell theory and classification, explained for MYP Biology with a free interactive lab.',
    datePublished: '2026-09-24',
    readMinutes: 7,
    tags: ['Biology', 'Sciences'],
    intro:
      'In 1977, researchers exploring the Galápagos Rift in a submersible found something that shouldn\'t have been possible: dense communities of life clustered around hydrothermal vents nearly 2,500 metres down, in total darkness, bathed in water hot enough to melt lead a few centimetres away. No sunlight reaches that deep — so where was the energy for life coming from? The answer, chemosynthesis, is one of the clearest real-world tests of what a "producer" actually is, which is exactly why it shows up so often in MYP Biology.',
    embed: { src: '/artifacts/vent-expedition.html', title: 'The Vent Expedition — an interactive MYP Biology classification & chemosynthesis lab', height: 780 },
    embedIntro:
      'Try it yourself: a submersible has just pulled an unclassified organism from a vent 2,400 m down. Classify it using cell theory, then work through the chemistry that keeps it alive — a free, self-contained lab built around the ideas below. Your progress saves on this device.',
    sections: [
      {
        heading: 'Photosynthesis needs light. Chemosynthesis doesn\'t.',
        body: [
          'Every living thing needs a source of energy to build the organic molecules (like glucose) that power its cells. Producers get that energy from their environment rather than by eating something else — but "producer" does not mean "plant", and it does not require sunlight.',
          'Photoautotrophs (most plants, algae, some bacteria) capture light energy and use it to combine carbon dioxide and water into glucose — photosynthesis. Chemoautotrophs instead capture energy released by chemical reactions between inorganic compounds — at a hydrothermal vent, typically hydrogen sulfide reacting with oxygen dissolved in seawater — and use that energy to build glucose from carbon dioxide, the same way a plant would, just without the light step. The product is the same; the energy source is completely different.',
        ],
      },
      {
        heading: 'Why this matters for Criterion A (Knowing and understanding)',
        body: [
          'A common exam trap is defining a producer as "an organism that photosynthesises". That definition breaks the moment you meet a vent ecosystem. The MYP-safe definition is broader and more accurate: a producer is an organism that makes its own organic molecules from inorganic starting materials, using an external energy source — light for photoautotrophs, chemical reactions for chemoautotrophs. Being able to apply a concept to an unfamiliar situation, not just recite the plant example, is precisely what Criterion A rewards at the higher bands.',
        ],
      },
      {
        heading: 'Classifying an unfamiliar organism with cell theory',
        body: [
          'Cell theory gives you a small, reusable toolkit for classifying anything you\'ve never seen before: is it made of one cell or many? Does it have a nucleus (eukaryotic) or not (prokaryotic)? What structures does it contain, and what does each one most likely do? A membrane-bound nucleus suggests a eukaryote; the presence of something mitochondria-like suggests aerobic respiration is happening inside it. You don\'t need to already know the species to reason about what it is and how it probably lives — that\'s the whole point of applying a framework instead of memorising a list of organisms.',
        ],
      },
      {
        heading: 'A quick sanity check: energy still has to balance',
        body: [
          'Whichever energy source an organism uses, the biology underneath is still governed by the same rules: anabolic reactions build larger molecules and require energy input; catabolic reactions break larger molecules down and release energy. Chemosynthesis is anabolic (building glucose); respiration, which every living cell does afterwards to release that stored energy, is catabolic. Sorting real reactions into these two categories is a fast way to check you actually understand what "metabolism" means, rather than just being able to say the word.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is chemosynthesis the same as photosynthesis?',
        a: 'No. Both build glucose from carbon dioxide, but photosynthesis is powered by light energy while chemosynthesis is powered by energy released from chemical reactions (e.g. hydrogen sulfide reacting with oxygen). The energy source is different; the basic idea — an organism making its own food — is the same.',
      },
      {
        q: 'Can an organism be a producer without doing photosynthesis?',
        a: 'Yes. Chemoautotrophs (e.g. many bacteria and archaea at hydrothermal vents) are producers that never use light at all. "Producer" describes how an organism gets its organic molecules, not whether it uses sunlight specifically.',
      },
      {
        q: 'How deep are hydrothermal vents, and why is there no light there?',
        a: 'Many hydrothermal vents sit at depths of 2,000–2,500 metres or more. Sunlight is absorbed by seawater and effectively disappears within the top ~200 metres (the photic zone), so vent ecosystems exist in permanent darkness and cannot rely on photosynthesis.',
      },
    ],
    related: [
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'MYP Biology subject guide', href: '/guides/biology' },
      { label: 'Classification: kingdoms & dichotomous keys', href: '/blog/classification-kingdoms-dichotomous-keys-myp-biology' },
      { label: 'Practise MYP Biology past papers', href: '/bio-papers' },
    ],
  },
  {
    slug: 'classification-kingdoms-dichotomous-keys-myp-biology',
    title: 'Classification in MYP Biology: Kingdoms, Binomial Names & Dichotomous Keys',
    description:
      'How scientists classify living things — the five kingdoms, genus and species names, and how to use a dichotomous key — explained for MYP Biology with a free interactive classification quest.',
    datePublished: '2026-09-24',
    readMinutes: 7,
    tags: ['Biology', 'Sciences'],
    intro:
      'There are millions of known species, and every one of them has to fit somewhere in a system that scientists everywhere agree on. Classification is that system. It turns "a huge pile of living things" into a tidy set of groups you can reason about — and it is one of the most reliably examined topics in early MYP Biology because it tests whether you can apply a rule to something you have never seen before.',
    embed: { src: '/artifacts/biological-blueprint-quest.html', title: 'The Biological Blueprint — an interactive MYP Biology classification quest', height: 780 },
    embedIntro:
      'Try it yourself: sort real organisms into kingdoms, read their scientific names, and identify unknown "mystery organisms" with a dichotomous key. Progress saves on this device.',
    sections: [
      {
        heading: 'Why we classify',
        body: [
          'Common names are unreliable: the same animal can have different names in different languages, and different animals can share one name. A shared classification system gives every organism one agreed identity and shows how organisms are related, which lets us predict features of an unfamiliar species from the group it belongs to.',
        ],
      },
      {
        heading: 'The five kingdoms',
        body: ['A widely taught scheme sorts living things into five kingdoms, using features you can check for:'],
        bullets: [
          'Animals — multicellular, no cell walls, feed on other organisms (e.g. tiger, honeybee, frog).',
          'Plants — multicellular, cell walls, photosynthesise; can be flowering or non-flowering (e.g. wheat, rose, bracken fern).',
          'Fungi — cell walls made of chitin, feed by absorbing nutrients from dead material (saprotrophic), e.g. the button mushroom.',
          'Protoctists — mostly single-celled organisms with a true nucleus, e.g. amoeba.',
          'Prokaryotes — no true nucleus (their DNA floats free in the cell), e.g. the bacterium E. coli.',
        ],
      },
      {
        heading: 'Two-part scientific names',
        body: [
          'Every species has a binomial name made of its genus (capitalised) and species (lower case), written in italics: Panthera tigris for the tiger, Homo sapiens for humans. Closely related organisms share a genus — the domestic cat, Felis catus, is a different genus from the tiger, but both belong to the mammals. A common exam mistake is to write the name with the wrong capitalisation, so it is worth practising until it is automatic.',
        ],
      },
      {
        heading: 'Using a dichotomous key',
        body: [
          'A dichotomous key identifies an organism by a chain of yes/no choices about observable features. Each step splits the remaining possibilities in two — for example "backbone present" leads towards the vertebrate groups (mammal, bird, reptile, amphibian, fish), while "no backbone" leads to invertebrates such as insects and crustaceans. Follow the choices one at a time, and never skip ahead: the order is what makes the key work.',
          'To score well when asked to build a key, make each question about a feature that is clear and observable (not "looks scary"), and check that every organism ends up at exactly one answer.',
        ],
      },
      {
        heading: 'How this is assessed',
        body: [
          'Classification questions mostly sit in Criterion A (Knowing and understanding): recall the groups, then apply them to unfamiliar organisms. Higher bands reward explaining why an organism belongs to a group by pointing to its specific features, not just naming the group.',
        ],
      },
    ],
    faq: [
      { q: 'How many kingdoms are there in MYP Biology?', a: 'MYP courses commonly teach five kingdoms: animals, plants, fungi, protoctists and prokaryotes. Other schemes group life differently (for example into three domains), so use whichever your teacher and course follow.' },
      { q: 'How do you write a scientific name correctly?', a: 'Use two parts: the genus with a capital letter first, then the species in lower case, both italicised or underlined — for example Homo sapiens.' },
      { q: 'What is a dichotomous key?', a: 'A step-by-step tool for identifying organisms in which each step gives two choices based on an observable feature, until only one organism is left.' },
    ],
    related: [
      { label: 'Hydrothermal vents & chemosynthesis', href: '/blog/hydrothermal-vents-chemosynthesis-myp-biology' },
      { label: 'Cells, tissues & organs', href: '/blog/cells-tissues-organs-levels-of-organisation-myp-biology' },
      { label: 'MYP Biology subject guide', href: '/guides/biology' },
    ],
  },
  {
    slug: 'cells-tissues-organs-levels-of-organisation-myp-biology',
    title: 'Cells, Tissues, Organs & Organ Systems: Levels of Biological Organisation (MYP Year 4)',
    description:
      'From organelles to whole organisms: how cells, tissues, organs and organ systems fit together, with a free interactive MYP Year 4 Biology unit on cells and life.',
    datePublished: '2026-09-24',
    readMinutes: 7,
    tags: ['Biology', 'Sciences'],
    intro:
      'A living thing is not one big blob — it is a nested set of parts, each built from the level below. Understanding those levels of organisation is the backbone of MYP Year 4 Biology, because almost every later topic (digestion, respiration, disease, homeostasis) is really a question about how one level depends on another.',
    embed: { src: '/artifacts/myp-year4-cells-and-life.html', title: 'MYP Year 4 Biology — Cells & Life: an interactive unit on cells, tissues and organs', height: 800 },
    embedIntro:
      'Work through the unit yourself: three short sessions on what makes something alive, the levels of biological organisation, and how cells, tissues and organs work together, with self-checking tasks.',
    sections: [
      {
        heading: 'What counts as "alive"?',
        body: [
          'Biologists decide whether something is living by checking for a set of shared characteristics: living things move, respire, sense their surroundings, grow, reproduce, excrete waste and need nutrition. A single feature is never enough — fire moves and grows, but it does not reproduce or respire. It is the whole set that defines life.',
        ],
      },
      {
        heading: 'The levels of organisation',
        body: ['Read the levels from smallest to largest, and notice that each one is made of the one before it:'],
        bullets: [
          'Atom → molecule: atoms join to make the molecules of life (water, proteins, DNA).',
          'Organelle: a specialised structure inside a cell, such as the nucleus or mitochondria, that does one job.',
          'Cell: the basic unit of life.',
          'Tissue: a group of similar cells working together (e.g. muscle tissue).',
          'Organ: a group of different tissues that carries out a particular function (e.g. the heart or the stomach).',
          'Organ system: organs cooperating on a larger job (e.g. the digestive or circulatory system).',
          'Organism: the whole living thing.',
        ],
      },
      {
        heading: 'Structure matches function',
        body: [
          'A recurring MYP idea is that a structure is shaped by the job it does. Specialised cells show this clearly: a red blood cell has no nucleus, leaving more room to carry oxygen; a nerve cell is long so signals can travel far; a root hair cell has a thin extension that increases its surface area for absorbing water. When an exam asks you to "explain how the cell is adapted", name the feature and link it to the function.',
        ],
      },
      {
        heading: 'Why failure at one level matters at the next',
        body: [
          'Because each level is built from the previous one, damage travels upwards. Harm to the cells of the skin — for example from too much ultraviolet radiation — affects the skin tissue, then the skin as an organ, and finally the body\'s ability to protect itself. Being able to trace a problem up through the levels is exactly the kind of applied reasoning that earns higher-band marks.',
        ],
      },
      {
        heading: 'How this is assessed',
        body: [
          'The unit maps mainly onto Criterion A (Knowing and understanding) and Criterion D (Reflecting on the impacts of science). Aim to define each level accurately, give an example of each, and explain how one level depends on another rather than just listing them.',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between a tissue and an organ?', a: 'A tissue is a group of similar cells doing the same job. An organ is made of several different tissues working together for a particular function.' },
      { q: 'What are the levels of organisation in biology?', a: 'From smallest to largest: atom, molecule, organelle, cell, tissue, organ, organ system, organism.' },
      { q: 'Why do cells specialise?', a: 'Different jobs need different structures. Specialised cells are adapted to their function, which makes the organism as a whole more efficient than if every cell did everything.' },
    ],
    related: [
      { label: 'Classification: kingdoms & dichotomous keys', href: '/blog/classification-kingdoms-dichotomous-keys-myp-biology' },
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'MYP Biology subject guide', href: '/guides/biology' },
    ],
  },
  {
    slug: 'scalars-vectors-si-units-myp-physics',
    title: 'Scalars vs Vectors, SI Units & Measurement: MYP Physics Explained',
    description:
      'What makes a quantity measurable, why physics uses SI units, and the difference between scalars and vectors (distance vs displacement) — with a free interactive MYP Physics mission game.',
    datePublished: '2026-09-24',
    readMinutes: 7,
    tags: ['Physics', 'Sciences'],
    intro:
      'Physics starts with measurement: if you cannot put a number and a unit on something, you cannot test a prediction about it. Once you can measure, the next question is whether direction matters — and that single question separates scalars from vectors, one of the most useful ideas in the whole subject.',
    embed: { src: '/artifacts/quantity-quest.html', title: 'Quantity Quest: Mission Vector — an interactive MYP Physics game on measurement and vectors', height: 780 },
    embedIntro:
      'Try it yourself: four short missions on what can be measured, SI units, scalar vs vector quantities, and a vector navigation lab where you plot a route. Your progress saves on this device.',
    sections: [
      {
        heading: 'What makes something measurable?',
        body: [
          'A physical quantity is something you can measure with a number and a unit — length, mass, time, temperature. Feelings such as "how scary a film is" are not physical quantities, because there is no agreed unit or instrument. A useful test: could two different people measure it and get the same result?',
        ],
      },
      {
        heading: 'SI units: one shared language',
        body: [
          'Scientists use the International System of Units (SI) so results can be compared anywhere. The base units you meet most often are the metre (length), kilogram (mass), second (time), kelvin (temperature) and ampere (electric current). Other units are combinations — speed is metres per second (m/s), force is the newton. Always write the unit; a number without one loses most of its marks.',
        ],
      },
      {
        heading: 'Scalars and vectors',
        body: ['Some quantities need only a size, and others need a direction too:'],
        bullets: [
          'Scalar — magnitude only: distance, speed, mass, time, energy, temperature.',
          'Vector — magnitude and direction: displacement, velocity, force, acceleration.',
        ],
      },
      {
        heading: 'Distance vs displacement — a worked example',
        body: [
          'Walk 3 km east, then 4 km north. The distance you travelled is 3 + 4 = 7 km, a scalar. Your displacement is the straight line from start to finish: because the two legs are at right angles, Pythagoras gives √(3² + 4²) = 5 km, at an angle of about 53° north of east. Same journey, two different answers — and both are correct, because they answer different questions.',
        ],
      },
      {
        heading: 'Adding vectors',
        body: [
          'Vectors are added head to tail: draw the first, start the second where the first ends, and the resultant runs from the very start to the very end. If vectors point in opposite directions they partly cancel, which is why two equal forces pulling in opposite directions give a resultant of zero. This is the idea behind navigation, forces and, later, motion in two dimensions.',
        ],
      },
      {
        heading: 'How this is assessed',
        body: [
          'Expect Criterion A questions that ask you to classify quantities, convert or state units, and apply vector addition to a simple scenario. Show the direction as well as the size whenever the question involves a vector.',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between a scalar and a vector?', a: 'A scalar has magnitude only (e.g. speed, mass). A vector has magnitude and direction (e.g. velocity, force, displacement).' },
      { q: 'What is the difference between distance and displacement?', a: 'Distance is the total path length travelled (a scalar). Displacement is the straight-line change in position from start to finish, with a direction (a vector).' },
      { q: 'Why do we use SI units?', a: 'A single international system means measurements made anywhere can be compared and combined without conversion errors.' },
    ],
    related: [
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'MYP Physics subject guide', href: '/guides/physics' },
      { label: 'Scientific method: hypotheses & variables', href: '/blog/scientific-method-hypothesis-variables-myp-science' },
    ],
  },
  {
    slug: 'scientific-method-hypothesis-variables-myp-science',
    title: 'Scientific Method in MYP Science: Predictions, Hypotheses & Variables (with the Butterfly Effect)',
    description:
      'The difference between a prediction and a hypothesis, how to identify independent, dependent and controlled variables, and field vs lab investigations — with a free interactive MYP inquiry game.',
    datePublished: '2026-09-24',
    readMinutes: 7,
    tags: ['Sciences', 'Criterion B'],
    intro:
      'Every science investigation, from a Year 7 experiment to real research, rests on the same handful of habits: asking a testable question, predicting what will happen, and controlling what could confuse the result. Those habits are what Criterion B (Inquiring and designing) assesses — and they are easier to learn by trying them than by reading about them.',
    embed: { src: '/artifacts/butterfly-code.html', title: 'The Butterfly Code — an interactive MYP science game on inquiry and scientific method', height: 780 },
    embedIntro:
      'Try it yourself: predict outcomes, write hypotheses, sort real scenarios into field and lab investigations, and earn badges along the way, with a theme built around the butterfly effect. Progress saves on this device.',
    sections: [
      {
        heading: 'Prediction vs hypothesis',
        body: [
          'A prediction states what you expect to happen: "the plant near the window will grow taller". A hypothesis goes further and gives a testable explanation: "plants grow taller with more light because light drives photosynthesis". The "because" is what turns a guess into something you can test and explain. In Criterion B the explanation is what earns the higher bands.',
        ],
      },
      {
        heading: 'The three kinds of variable',
        body: ['A fair test changes one thing and keeps everything else the same:'],
        bullets: [
          'Independent variable — the one thing you deliberately change (amount of light).',
          'Dependent variable — the thing you measure as the result (height of the plant).',
          'Controlled variables — everything you keep the same so the test is fair (water, soil, pot size, temperature).',
        ],
      },
      {
        heading: 'Field investigations and lab investigations',
        body: [
          'A lab investigation lets you control almost everything but is artificial. A field investigation happens in the real environment, which is more realistic but harder to control — weather, time of day and other organisms all interfere. Good scientists can say which approach suits a question and name the trade-off.',
        ],
      },
      {
        heading: 'Why the butterfly effect belongs in a science lesson',
        body: [
          'The "butterfly effect" comes from the study of chaotic systems such as the weather, where a tiny difference at the start can grow into a very different outcome later. It is a reminder of why scientists control variables and record their methods precisely: small uncontrolled differences can change the result, and if you did not write them down you cannot explain what happened.',
        ],
      },
      {
        heading: 'Writing a method others can repeat',
        body: [
          'A strong method lists the materials, states exactly what is changed, measured and kept constant, and gives steps clear enough for someone else to repeat. If a stranger could not run your experiment from your write-up, the method is not finished.',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between a prediction and a hypothesis?', a: 'A prediction says what you expect to happen. A hypothesis also gives a testable scientific reason (often using "because") for why it should happen.' },
      { q: 'What are independent, dependent and controlled variables?', a: 'The independent variable is what you change, the dependent variable is what you measure, and controlled variables are the factors you keep the same to make the test fair.' },
      { q: 'Which MYP criterion covers scientific method?', a: 'Criterion B, Inquiring and designing, covers formulating a hypothesis, identifying variables and designing a method. Criterion C covers processing and evaluating the results.' },
    ],
    related: [
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
      { label: 'Scalars vs vectors & SI units', href: '/blog/scalars-vectors-si-units-myp-physics' },
      { label: 'MYP command terms', href: '/blog/myp-command-terms' },
    ],
  },
]

// Posts that wrap an interactive artifact live in their own file to keep this one readable.
export const POSTS: BlogPost[] = [...CORE_POSTS, ...ARTIFACT_POSTS]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
