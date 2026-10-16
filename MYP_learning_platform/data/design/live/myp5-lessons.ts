// MYP5 Sustainability Check — self-learning slides with a short checkpoint after each criterion:
//   A (research a community) → B (ideas that fit) → C and D (plan, test, impact).
// Same pattern as MYP3 and MYP4: a `learn` stage teaches the strand just before the student practises it, then a
// checkpoint quiz whose questions carry `strand` and `why`, so the student gets a reason after every answer and a
// strand-by-strand summary at the end. These stages are inserted into an activity students are already working through,
// so myp5-sustainability.ts sets `legacyStageKeys` and nobody's saved position moves.

import type { LiveStage } from './types'

const SOI = 'Designing responsibly means asking who gains, who pays and who gets a say.'

export const MYP5_LEARN_A: LiveStage = {
  type: 'learn',
  key: 'learnA',
  label: 'Lesson: Research a Community',
  icon: '📘',
  strand: 'A.i',
  minutes: 10,
  intro: { title: '📘 Criterion A — Research a community responsibly', blurb: `Five short cards before you start the research. ${SOI}` },
  pages: [
    {
      icon: '✍️',
      title: 'Write the community’s need clearly',
      body: ['A need statement for a community works the same way as for one person. It names the group, what they cannot do, why, and what is at stake.'],
      example: {
        label: 'A strong need statement',
        text: '“[Community] needs a way to [do something] because [it causes this problem for them] and it matters because [what is at stake].”',
        strong: '“Residents of a river town need a way to prove when the water is polluted because officials keep saying the river is safe without evidence, and it matters because families drink from it and cannot afford to be wrong.”',
      },
      tip: 'Check: is it a NEED, not an app? “They need a way to prove…” leaves the solution open. “They need an app that…” does not.',
    },
    {
      icon: '🔬',
      title: 'Elaborate: cause, effect, stake',
      body: ['A thin statement stops at “has a problem”. An elaborated one follows three links:'],
      bullets: [
        'CAUSE: what exactly gets in the way, and who decides?',
        'EFFECT: what does it do to the community’s days, health or income?',
        'STAKE: what do they lose or risk if nothing changes? Be specific.',
      ],
      example: {
        label: 'Thin vs elaborated',
        weak: '“Factory workers need a better app because conditions are bad.”',
        strong: '“Factory workers need a way to report unsafe machinery without being identified because managers punish those who complain, so injuries go unrecorded, and it matters because they risk their jobs and their health.”',
      },
    },
    {
      icon: '🗺️',
      title: 'Who is affected, who decides, who benefits',
      body: ['A community is not one voice. Map the stakeholders and be honest about power.'],
      bullets: [
        'Who is AFFECTED? Who bears the cost without choosing it?',
        'Who DECIDES? Who has the power to change things?',
        'Who BENEFITS now, and who would lose if things changed?',
      ],
      keyTerms: [
        { term: 'Stakeholder', meaning: 'anyone affected by a decision or able to influence it' },
        { term: 'Power', meaning: 'how much say a group has over the outcome' },
      ],
      tip: 'Interviews with the characters are leads to check, not proof. Say which claims you would confirm with a source.',
    },
    {
      icon: '🤝',
      title: 'Research ethically',
      body: ['Researching a community means asking people to trust you.'],
      bullets: [
        'CONSENT: say what you are doing, and let people stop.',
        'PRIVACY: no names, faces or personal data you do not need.',
        'NO HARM: could what you collect expose someone who has little power?',
      ],
    },
    {
      icon: '🔎',
      title: 'From products to a brief',
      body: ['Look at products that already exist. For each, note what it does well, what it misses and who it leaves out. The gap that appears more than once is your opportunity. Your brief then says what the new product must do, and for whom.'],
      example: { label: 'A gap', text: 'None of the three reporting apps works on a basic phone, so the people with the least say cannot use them. There is an opportunity to design something that works without a smartphone.' },
    },
  ],
}

export const MYP5_CHECK_A: LiveStage = {
  type: 'mcq',
  key: 'checkA',
  label: 'Checkpoint · Research',
  icon: '✅',
  pacing: 'self-paced',
  minutes: 6,
  pointsPerCorrect: 10,
  intro: { title: '✅ Checkpoint — Criterion A', blurb: 'Six quick questions. You see the answer, with a reason, straight after you choose. Each correct answer earns 10 points.' },
  questions: [
    {
      strand: 'A.i', icon: '✍️', context: 'The need', q: 'Which is the best need statement?',
      options: [
        '“Workers need a way to report unsafe machinery without being identified because managers punish those who complain, and it matters because they risk their jobs and health.”',
        '“Workers need a better app.”',
        '“Workers are unhappy with their conditions.”',
      ],
      correct: 0,
      why: 'It names the group, the cause (managers punish complaints) and the stake (jobs and health), and it leaves the solution open.',
    },
    {
      strand: 'A.i', icon: '🔬', context: 'Elaborate', q: 'What turns a thin need into an elaborated one?',
      options: ['Following cause, effect and stake', 'Making it longer', 'Adding a product idea'],
      correct: 0,
      why: 'Length alone does not help. An elaborated need shows what gets in the way, what it does to people, and what they risk losing.',
    },
    {
      strand: 'A.ii', icon: '🤝', context: 'Ethics', q: 'You want to interview residents about a polluted river. Which is the most responsible plan?',
      options: [
        'Explain the purpose, ask for consent, record no names, and let people stop at any time.',
        'Record everyone and decide later what to use.',
        'Only interview people who will agree with you.',
      ],
      correct: 0,
      why: 'Consent, privacy and the right to stop protect people who may have little power. Choosing only friendly voices also biases your research.',
    },
    {
      strand: 'A.ii', icon: '🥇', context: 'Prioritise', q: 'You can only do one piece of research. Which should come first?',
      options: ['The one the rest of your design depends on', 'The easiest one', 'The one that confirms your idea'],
      correct: 0,
      why: 'Ranking by what the rest depends on stops you building on a guess. Easy or confirming research can leave the key question open.',
    },
    {
      strand: 'A.iii', icon: '🔎', context: 'Products', q: 'Three existing apps all work only on smartphones. What does that suggest?',
      options: ['A gap: people without smartphones are left out', 'The apps are good enough', 'Smartphones are the best platform'],
      correct: 0,
      why: 'A limitation repeated across products points to a need none of them meets, which is where a new design can help.',
    },
    {
      strand: 'A.iv', icon: '📋', context: 'The brief', q: 'What should a design brief do?',
      options: [
        'Summarise the research and say what the product must do, and for whom',
        'Describe the final product in detail',
        'List every app you looked at',
      ],
      correct: 0,
      why: 'A brief links research to requirements. The solution comes later, in Criterion B.',
    },
  ],
}

export const MYP5_LEARN_B: LiveStage = {
  type: 'learn',
  key: 'learnB',
  label: 'Lesson: Ideas that Fit',
  icon: '📘',
  strand: 'B.i',
  minutes: 8,
  intro: { title: '📘 Criterion B — Develop ideas that fit the community', blurb: 'Four cards on turning research into a specification, a range of ideas and a justified choice.' },
  pages: [
    {
      icon: '📏',
      title: 'A specification you can test',
      body: ['A specification says what success looks like in terms someone else could check. Every requirement should come from your research.'],
      example: {
        label: 'Weak vs strong requirement',
        weak: '“It should be easy to use.”',
        strong: '“Works on a basic phone with 2G, because the interview said most residents have no smartphone · test: load it on a basic phone · from the interview.”',
        note: 'Strong requirements have a measure, a test and a source. Add a “must not” (for example, it must not collect names).',
      },
    },
    {
      icon: '🧩',
      title: 'A range, not variations',
      body: ['A range of ideas is genuinely different approaches, not the same idea in three colours. Try changing WHO uses it, HOW they use it, or WHAT it replaces.'],
      example: { label: 'Different or the same?', weak: 'Three apps that all report pollution by photo.', strong: 'A photo app, a text-message line and a community noticeboard with a volunteer who logs reports.' },
    },
    {
      icon: '⚖️',
      title: 'Choose and justify',
      body: ['Score each idea against your criteria, weight them by how important they are, and explain the weights from your research. The total gives you a leading idea, and your justification says why it wins.'],
      tip: 'If the matrix picks an idea you dislike, check your weights before you change the answer. Then explain what the matrix cannot show.',
    },
    {
      icon: '📐',
      title: 'Plan it accurately',
      body: ['Planning drawings show enough for someone else to build it: screens or parts, how they connect, and the key details that matter for the community.'],
      bullets: ['Label each screen or part and what it does.', 'Show how a user moves from one to the next.', 'Note anything that affects accessibility or privacy.'],
    },
  ],
}

export const MYP5_CHECK_B: LiveStage = {
  type: 'mcq',
  key: 'checkB',
  label: 'Checkpoint · Ideas',
  icon: '✅',
  pacing: 'self-paced',
  minutes: 5,
  pointsPerCorrect: 10,
  intro: { title: '✅ Checkpoint — Criterion B', blurb: 'Five quick questions on specifications, ideas and choosing. A reason shows after each answer.' },
  questions: [
    {
      strand: 'B.i', icon: '📏', context: 'Specification', q: 'Which requirement is strongest?',
      options: [
        '“Loads on a basic phone in under 10 seconds · test: time it · from the interview.”',
        '“Fast and simple.”',
        '“Looks modern.”',
      ],
      correct: 0,
      why: 'It has a measure, a test and a source in your research. The others cannot be checked by someone else.',
    },
    {
      strand: 'B.i', icon: '🚫', context: 'Must not', q: 'Why include a “must not” in a specification?',
      options: ['It protects people from harm the design could cause', 'To make the list longer', 'Because the teacher asks'],
      correct: 0,
      why: 'Responsible designs say what they will not do, for example collect names, as clearly as what they will do.',
    },
    {
      strand: 'B.ii', icon: '🧩', context: 'A range', q: 'Which set is a real range of ideas?',
      options: [
        'A photo app, a text-message line and a community noticeboard',
        'Three photo apps in different colours',
        'One app with three menus',
      ],
      correct: 0,
      why: 'The first set uses different approaches to who uses it and how. The others vary only the surface.',
    },
    {
      strand: 'B.iii', icon: '⚖️', context: 'Weights', q: 'How should you justify the weight you give a criterion?',
      options: ['By pointing to your research', 'By saying it feels important', 'By giving everything the same weight'],
      correct: 0,
      why: 'Weights that come from research show the choice is about the community, not about your preference.',
    },
    {
      strand: 'B.iv', icon: '📐', context: 'Drawings', q: 'What makes a planning drawing useful?',
      options: ['It shows screens or parts, how they connect and what each one does', 'It looks beautiful', 'It is as small as possible'],
      correct: 0,
      why: 'A planning drawing is for building. If someone else could not follow it, it is not finished.',
    },
  ],
}

export const MYP5_LEARN_CD: LiveStage = {
  type: 'learn',
  key: 'learnCD',
  label: 'Lesson: Plan, Test, Impact',
  icon: '📘',
  strand: 'C.i',
  minutes: 8,
  intro: { title: '📘 Criteria C and D — Plan it, test it, ask what it means', blurb: 'Four cards on a logical plan, testing that produces evidence, honest evaluation and impact on the community.' },
  pages: [
    {
      icon: '🪜',
      title: 'A logical plan',
      body: ['A logical plan puts steps in an order that makes sense, says what is needed for each, and gives each a realistic time. Steps that depend on earlier ones come later.'],
      example: { label: 'Weak vs strong', weak: '“Build it. Test it. Finish.”', strong: '“1. Sketch three screens (30 min). 2. Build the report screen (60 min) because the others link to it. 3. Test it on a basic phone (20 min).”' },
    },
    {
      icon: '📊',
      title: 'A test that creates data',
      body: ['A test should produce something you can compare with your specification: a number, a count, a rating from real users.'],
      bullets: ['Who tests it, and how many?', 'What do they do?', 'What will you measure, and what counts as success?', 'How do you keep them safe and anonymous?'],
    },
    {
      icon: '🔍',
      title: 'Evaluate honestly and improve',
      body: ['Compare your results with each requirement, one by one. Say where you met it, where you did not, and what you would change.'],
      example: { label: 'Weak vs strong', weak: '“It worked well.”', strong: '“It met 3 of 4 requirements. It loaded in 14 seconds, not the 10 I set, because the images were too big. Next I would compress them.”' },
    },
    {
      icon: '🌍',
      title: 'Impact and the circular question',
      body: ['Finally, say what your solution means for the community and for the planet. Who gains, who might lose, and what happens when it is no longer used?'],
      bullets: ['Impact on the community: be specific about who and how.', 'Impact on resources: energy, devices, data.', 'Circular thinking: how does it end, and can its parts be reused?'],
      tip: SOI,
    },
  ],
}

export const MYP5_CHECK_CD: LiveStage = {
  type: 'mcq',
  key: 'checkCD',
  label: 'Checkpoint · Plan and Test',
  icon: '✅',
  pacing: 'self-paced',
  minutes: 5,
  pointsPerCorrect: 10,
  intro: { title: '✅ Checkpoint — Criteria C and D', blurb: 'Five quick questions on planning, testing, evaluating and impact. A reason shows after each answer.' },
  questions: [
    {
      strand: 'C.i', icon: '🪜', context: 'A plan', q: 'Which plan is the most logical?',
      options: [
        'Sketch screens, build the one others depend on first, then test on a basic phone, each step with a time',
        'Build everything, then see',
        'Test first, then design',
      ],
      correct: 0,
      why: 'It orders steps by what depends on what, and gives each a time. The others skip dependencies or the order makes no sense.',
    },
    {
      strand: 'C.iv', icon: '🔁', context: 'Changes', q: 'Midway you change your plan. What should you do?',
      options: ['Record the change and say why it was needed', 'Hide it', 'Start again without saying'],
      correct: 0,
      why: 'Justifying a change shows you are responding to evidence, which is what a good designer does.',
    },
    {
      strand: 'D.i', icon: '📊', context: 'Testing', q: 'Which test will generate the most useful data?',
      options: [
        'Five residents try to submit a report on a basic phone while you time it and count errors',
        'Ask a friend if they like it',
        'Look at it yourself',
      ],
      correct: 0,
      why: 'It uses the intended users, the intended device, and gives numbers you can compare with your specification.',
    },
    {
      strand: 'D.ii', icon: '🔍', context: 'Evaluate', q: 'Which evaluation sentence is strongest?',
      options: [
        '“It met 3 of 4 requirements; it loaded in 14 seconds, not 10, because images were too large.”',
        '“It worked well.”',
        '“I am happy with it.”',
      ],
      correct: 0,
      why: 'It compares a result with a requirement, gives a number and explains why. The others give no evidence.',
    },
    {
      strand: 'D.iv', icon: '🌍', context: 'Impact', q: 'When you explain the impact on the community you should:',
      options: ['Say who gains, who could lose, and what happens when it is no longer used', 'Say it will help everyone', 'Skip the downsides'],
      correct: 0,
      why: 'Impact is about real effects on real people, including the costs. Claiming it helps everyone is rarely true.',
    },
  ],
}
