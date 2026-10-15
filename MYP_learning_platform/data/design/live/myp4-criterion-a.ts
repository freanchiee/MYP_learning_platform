// MYP4 Prototyping — Criterion A self-learning slides, their checkpoint quiz, and the coached need-statement section.
// Mirrors what MYP3 has (Need → Research plan), written for Year 4: a sentence pattern for the need statement, then
// how to ELABORATE it (cause, effect, stake). Slides are `learn` stages; the quiz carries `strand` and `why` so the
// student gets an explanation after every answer and a strand-by-strand summary at the end.
//
// The need statement is the most important sentence in Criterion A, so its field has the full answer coach:
// colour highlights for words that show good thinking, a level meter, hints from level 5, and a sentence-frame
// scaffold that costs points to unlock. Model answers here are never shown to students.

import type { LiveStage, WorksheetSection } from './types'

export const MYP4_LEARN_NEED: LiveStage = {
  type: 'learn',
  key: 'learnNeed',
  label: 'Lesson: Write the Need',
  icon: '📘',
  strand: 'A.i',
  minutes: 8,
  intro: { title: '📘 Criterion A.i — Explain and justify the need', blurb: 'Six short cards. The need statement is the most important sentence in Criterion A, so we build it step by step.' },
  pages: [
    {
      icon: '🎯',
      title: 'Start with a need, not a product',
      body: [
        'Designers do not begin with “I will make a jar opener”. They begin with a person who has a problem.',
        'A NEED is something a person genuinely struggles without or is held back by. A WANT is something nice to have. A strong project starts from a need.',
      ],
      example: {
        label: 'Need or want?',
        weak: '“Marcus wants a cooler-looking kitchen gadget.”',
        strong: '“Marcus cannot open jars with one hand, so he avoids cooking.”',
        note: 'The second one is something you can observe, measure and improve.',
      },
      keyTerms: [
        { term: 'Need', meaning: 'a real difficulty a person has' },
        { term: 'Want', meaning: 'something they would like' },
      ],
    },
    {
      icon: '🧑',
      title: 'Name the person',
      body: [
        'A need only makes sense for someone. “Everybody” and “people with one hand” are too big. Choose ONE named user: a consenting classmate or family member, an approved persona or a realistic composite built from research.',
        'This person is your client for the whole unit. Everything you decide later is checked against them.',
      ],
      example: { label: 'Too big vs just right', weak: '“People who struggle with jars.”', strong: '“Marcus, 34, who lost the use of his left hand and cooks for himself most nights.”' },
    },
    {
      icon: '✍️',
      title: 'Write the need clearly',
      body: ['Use this pattern to explain AND justify the need:'],
      example: {
        label: 'A strong need statement',
        text: '“[Name] needs a way to [do something] because [it causes this problem for them] and it matters because [what is at stake].”',
        strong: '“Nadia needs a way to keep her homework space tidy because her brother’s things spread onto her desk, and it matters because she cannot concentrate and finishes late.”',
      },
      tip: 'Retrieval check: which word makes a need statement a justification, not just a description? (Hint: it starts with “b”.)',
    },
    {
      icon: '🔬',
      title: 'Elaborate: cause, effect, stake',
      body: [
        'A good need statement is elaborated. It does not stop at “has trouble with”. It follows three links:',
      ],
      bullets: [
        'CAUSE: what exactly gets in the way, and when or how often?',
        'EFFECT: what does that do to the person, in their day or their feelings?',
        'STAKE: what do they lose or miss out on if it is not solved? Be specific.',
      ],
      example: {
        label: 'Thin vs elaborated',
        weak: '“Marcus needs a jar opener because jars are hard.”',
        strong: '“Marcus needs a way to open jars with one hand because he cannot hold the jar and twist the lid together, so he skips meals he would cook, and it matters because he is losing his independence in his own kitchen.”',
        note: 'The strong version has a cause (cannot hold and twist), an effect (skips meals) and a stake (independence).',
      },
    },
    {
      icon: '🧭',
      title: 'Back it with evidence',
      body: ['Your need statement is a claim. Say how you know. Evidence can be an interview, something you observed, or a source.'],
      bullets: [
        'From an interview: “In my interview, Marcus said…”.',
        'From observation: “I watched him try three times before…”.',
        'From a source: “A published guide on one-handed cooking says…”.',
      ],
      tip: 'If you are using a persona, say so honestly: a persona gives you leads to check, not proof.',
    },
    {
      icon: '💡',
      title: 'From need to opportunity',
      body: ['Once the need is clear, turn it into an opportunity you can design for: “How might we help [Name] [do something] so that [stake]?”'],
      example: { label: 'Need → opportunity', text: 'Need: Marcus cannot open jars one-handed. Opportunity: How might we help Marcus open jars with one hand so that cooking dinner is quick again and he keeps his independence?' },
      tip: 'Keep your need statement and your opportunity consistent. If they say different things, one of them needs rewriting.',
    },
  ],
}

export const MYP4_CHECK_NEED: LiveStage = {
  type: 'mcq',
  key: 'checkNeed',
  label: 'Checkpoint · The Need',
  icon: '✅',
  pacing: 'host-paced',
  minutes: 6,
  pointsPerCorrect: 10,
  intro: { title: '✅ Checkpoint — Criterion A.i', blurb: 'Six quick questions. The right answer shows as soon as you choose, with a short reason. Each correct answer earns 10 points, which you can spend later to unlock a writing scaffold.' },
  questions: [
    {
      strand: 'A.i', icon: '🎯', context: 'Need or want?', q: 'Which statement describes a NEED?',
      options: ['“Leo cannot find his headphones quickly, so a noisy classroom overwhelms him.”', '“Leo would like a bag in his favourite colour.”', '“Leo thinks organisers are cool.”'],
      correct: 0,
      why: 'A need is a real difficulty that causes a problem you can observe. The others describe things Leo would like.',
    },
    {
      strand: 'A.i', icon: '🧑', context: 'Name the person', q: 'Which user is best for a need statement?',
      options: ['“Rosa, 78, who has arthritis and avoids peeling vegetables.”', '“Older people.”', '“Anyone who cooks.”'],
      correct: 0,
      why: 'A named person with one relevant detail can be interviewed and designed for. Groups are too big to check your design against.',
    },
    {
      strand: 'A.i', icon: '✍️', context: 'Justify', q: 'Which word turns a description of a problem into a justification?',
      options: ['because', 'also', 'maybe'],
      correct: 0,
      why: '“Because” links the need to its cause. “It matters because” links it to what is at stake.',
    },
    {
      strand: 'A.i', icon: '🔬', context: 'Elaborate', q: 'Which is the most elaborated need statement?',
      options: [
        '“Anaya needs a pencil grip because her hand tires, so her handwriting gets worse after ten minutes, and it matters because she falls behind in long lessons.”',
        '“Anaya needs a pencil grip because pencils are hard.”',
        '“Anaya needs a pencil grip.”',
      ],
      correct: 0,
      why: 'It has a cause (hand tires), an effect (handwriting worsens) and a stake (falls behind). The others stop earlier.',
    },
    {
      strand: 'A.i', icon: '🧱', context: 'The stake', q: 'In “Elias needs a way to read medicine labels because the print is small, and it matters because ___”, which ending states the stake?',
      options: ['“he might take the wrong dose and has to rely on others for something private.”', '“labels are made of paper.”', '“many people have bad eyesight.”'],
      correct: 0,
      why: 'The stake says what the person risks or loses. The others are facts about labels or other people, not about Elias.',
    },
    {
      strand: 'A.i', icon: '🔎', context: 'Observation or problem?', q: '“Cables are tangled in bags.” is best described as:',
      options: ['An observation: what you can see, with no opinion.', 'A need statement.', 'An opportunity.'],
      correct: 0,
      why: 'An observation is what you see. A problem says what is not working for a person, and an opportunity (“How might we…”) turns that into a design question.',
    },
  ],
}

export const MYP4_LEARN_PLAN: LiveStage = {
  type: 'learn',
  key: 'learnPlan',
  label: 'Lesson: Plan the Research',
  icon: '📘',
  strand: 'A.ii',
  minutes: 8,
  intro: { title: '📘 Criterion A.ii — Plan and prioritise research', blurb: 'Four cards on turning your need into a research plan you can actually carry out.' },
  pages: [
    {
      icon: '📋',
      title: 'A plan, not a list',
      body: ['A list says what you are curious about. A research PLAN says how you will find each answer, in what order, and by when.'],
      example: {
        label: 'Weak plan vs strong plan',
        weak: '“Find out about jars. Ask some people. Look online.”',
        strong: '“1. Interview Marcus about how he opens jars now (primary, Tuesday). 2. Compare three one-handed openers online (secondary, Wednesday). 3. Watch him open a jar for two minutes (primary, Thursday).”',
        note: 'The strong plan names a method, a source and a purpose for each step.',
      },
    },
    {
      icon: '🔀',
      title: 'Primary and secondary research',
      body: ['PRIMARY research is information you collect yourself. SECONDARY research is information someone else already collected.'],
      bullets: ['Primary: an interview, a short survey, watching someone do a task, a test you run.', 'Secondary: a website, a product review, a book, a video someone else made.'],
      keyTerms: [{ term: 'Primary', meaning: 'you collect it yourself' }, { term: 'Secondary', meaning: 'someone else collected it' }],
      tip: 'Retrieval check: is reading a review of a jar opener primary or secondary?',
    },
    {
      icon: '🥇',
      title: 'Prioritise',
      body: ['You cannot do everything, so rank your research. Put first what the rest depends on, what is quick and what is most valuable.'],
      bullets: ['Ask: if I only had time for one piece of research, which one?', 'Do the research that could change your mind earliest.', 'Give each step a realistic timeframe.'],
    },
    {
      icon: '🤝',
      title: 'Ask people respectfully',
      body: ['Research involves real people, so be kind and careful.'],
      bullets: ['Ask permission first and explain what you are doing.', 'Keep names and notes private if asked.', 'No photographs of other people’s homes or faces without consent.'],
      tip: 'If you cannot interview a real person, an approved persona or a composite based on research is fine. Record which one it was.',
    },
  ],
}

/** The need-statement section, placed in week 1 after the persona. */
export const MYP4_NEED_SECTION: WorksheetSection = {
  key: 'need',
  label: 'Need statement',
  icon: '🧱',
  criterion: 'A.i',
  strandLabel: 'Justify the need for a solution, for a specified client',
  brief: {
    title: 'Brief: write the need clearly, then elaborate it',
    points: [
      'One named person, what they need to do, why it is hard (cause), what it does to them (effect) and what is at stake.',
      'Type it in your own words. Pasting is switched off.',
      'Highlights show words that carry good thinking. The meter shows how developed the answer is.',
    ],
  },
  fields: [
    {
      key: 'statement',
      label: 'My need statement',
      type: 'textarea',
      placeholder: '[Name] needs a way to … because … and it matters because …',
      hint: 'Pattern: [Name] needs a way to [do something] because [it causes this problem for them] and it matters because [what is at stake].',
      exemplars: [
        'Marcus needs a way to open jars with one hand because he cannot hold the jar and twist the lid together, so he skips meals he would cook, and it matters because he is losing his independence in his own kitchen.',
        'Elias needs a way to read his medicine labels because the print is too small for his low vision, so he waits for family to check them, and it matters because he could take the wrong dose and loses privacy.',
        'Leo needs a way to keep his headphones and fidget tools within reach because a noisy classroom overwhelms him when he has to hunt for them, and it matters because he cannot concentrate and falls behind.',
      ],
      points: 10,
      coach: {
        groups: [
          { level: 'basic', words: ['needs a way to', 'needs', 'cannot', 'struggles', 'has trouble', 'unable to', 'hard for', 'difficult'] },
          { level: 'developed', words: ['because', 'so that', 'which causes', 'which means', 'leads to', 'so he', 'so she', 'so they', 'results in', 'makes it hard'] },
          { level: 'justified', words: ['it matters because', 'matters because', 'what is at stake', 'otherwise', 'loses', 'misses out', 'falls behind', 'independence', 'safety', 'wrong dose', 'cannot concentrate', 'left out', 'confidence'] },
        ],
        scaffold: {
          frame: '[Name] needs a way to [do something] because [it causes this problem for them], and it matters because [what is at stake].',
          steps: [
            'WHO: name one person and one detail about them.',
            'DO: what do they need to be able to do? Start with a verb.',
            'CAUSE: what gets in the way, and what does that cause for them?',
            'STAKE: what do they lose or risk if this is not solved?',
          ],
        },
        hints: [
          'Show the problem happening: when, where or how often does it get in the way?',
          'Add the effect on the person: what do they do instead, or how do they feel?',
          'Make the stake specific. What exactly does your person lose or miss out on?',
        ],
      },
    },
    {
      key: 'evidence',
      label: 'How I know (interview, observation or source)',
      type: 'textarea',
      hint: 'Say where your need statement comes from. A persona gives you leads to check, not proof.',
      exemplars: [
        'In my interview Marcus said he avoids cooking because jars take two hands, and I watched him try a jar three times before giving up. A persona is only a lead, so I will check it against a published source.',
        'I know this from an observation of Elias reading a label, where he held it very close, and from a source on low vision that says small print is a common barrier. I will confirm it with a real user.',
      ],
      celebrateKeywords: ['interview', 'observed', 'observation', 'source', 'said', 'check'],
      points: 10,
    },
  ],
}
