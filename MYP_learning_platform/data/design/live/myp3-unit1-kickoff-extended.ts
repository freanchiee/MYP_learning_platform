// MYP3 — Unit 1 Kickoff, extended. "Designing for Everyday Needs: Evidence,
// Materials and Making" (Year 3 objectives, Criterion A in Weeks 1–2).
//
// The original Unit 1 Kickoff (myp3-unit1-kickoff.ts) is a 12-question quiz. This
// version keeps that quiz as the warm-up and builds a full lesson round it, in two
// blocks that match the unit planner:
//
//   BLOCK 1 · single period (about 50 min) — choose a worthwhile need.
//     Unpack the unit → mini-lesson on needs → spot the opportunity → strong or
//     weak research question? → choose a direction and a named user, with a
//     personality map → interview that user with the chatbot and build an empathy
//     map → exit ticket. (Week 1, Monday in the planner.)
//
//   BLOCK 2 · double period (about 100 min) — evidence, research plan, product
//     analysis and the brief. Mini-lessons on each Criterion A strand alternate
//     with quick host-paced quizzes and worksheet sections that carry the strand
//     they evidence. (Week 1 double + Week 2 in the planner.)
//
// SELF-PACED: each student moves through the stages on their own, beginning at the
// first new lesson (stage 2) because the original Unit 1 Kickoff quizzes come first and
// were already done. The teacher's screen shows where everyone is. Block 1 ends at the
// exit ticket: tell students to stop there and carry on in Block 2 from the same link
// (their work and position are saved).
// `block` and `minutes` on each stage are lesson-planning hints shown to the
// teacher only. `exemplars` are never shown to students; they feed the fuzzy-match
// suggestion on the teacher's review screen.

import type { LiveActivityDefinition } from './types'

const CRITERION_A_LABELS = {
  'A.i': 'Explain and justify the need for a solution to a problem',
  'A.ii': 'Construct a research plan that states and prioritises primary and secondary research',
  'A.iii': 'Analyse a group of similar products that inspire a solution',
  'A.iv': 'Develop a design brief that presents the analysis of relevant research',
}

const BLOCK1 = 'Block 1 · single period'
const BLOCK2 = 'Block 2 · double period'

export const MYP3_UNIT1_KICKOFF_EXTENDED: LiveActivityDefinition = {
  id: 'myp3-unit1-kickoff-extended',
  year: 'MYP3',
  title: 'Unit 1 Kickoff — Extended',
  subtitle: 'Self-paced, in two class blocks: find a worthwhile need and interview a user (single period), then plan your research, analyse products and write your brief (double period).',
  icon: '🧭',
  theme: { accent: '#2456C9', from: '#0E1626', via: '#152238', to: '#1C2A40' },
  // Self-paced: students move through the stages themselves, starting AFTER the original
  // Unit 1 Kickoff (its unpack and spot-the-opportunity quizzes are stages 0 and 1), which
  // they have already done. They can still go back to them.
  selfPaced: true,
  startStage: 2,
  debriefQuestions: [
    'To what extent should a designer prioritise user needs over the environmental impact of material sourcing?',
    'Which piece of evidence changed or confirmed your thinking, and how do you know it was reliable?',
    'Which of your assumptions about your user turned out to be wrong?',
    'Is it always possible to design something that balances how it looks, how well it works and its impact on the planet?',
  ],
  stages: [
    // ================================================================ BLOCK 1
    {
      type: 'mcq',
      key: 'unpack',
      label: 'Unpack the Unit',
      icon: '🧭',
      block: BLOCK1,
      minutes: 5,
      pacing: 'self-paced',
      intro: { title: '🧭 Unpack the Unit', blurb: "Before we design anything — let's lock in what this unit is actually about." },
      questions: [
        { q: "What is this unit's Key Concept?", options: ['Development', 'Change', 'Identity', 'Communication'], correct: 0 },
        { q: "What is this unit's Global Context?", options: ['Globalisation and sustainability', 'Personal and cultural expression', 'Fairness and development', 'Scientific and technical innovation'], correct: 0 },
        { q: 'The Statement of Inquiry says designers choose materials and gather evidence responsibly, understanding how sourcing and testing affect…', options: ['Both function and impact', 'Only how it looks', 'Only the cost', 'Only how fast it is made'], correct: 0 },
        { q: 'Which of these is a real NEED, not a want?', options: ['A way to find your pencils without emptying your whole bag', 'A cooler-looking pencil case', 'A pencil case with your favourite characters on it', 'A bigger pencil case'], correct: 0 },
        { q: 'Which of these is NOT one of the six challenge directions?', options: ['Physical space', 'Inclusion and accessibility', 'Exam revision techniques', 'Everyday routine'], correct: 2 },
        { q: 'A real research plan names, for each thing you need to find out…', options: ['The method, primary or secondary, the order, and a timeframe', 'Just a list of questions', 'Only the questions you like best', 'How long the interview will take'], correct: 0 },
      ],
    },
    {
      type: 'mcq',
      key: 'spot',
      label: 'Spot the Opportunity',
      icon: '🔍',
      block: BLOCK1,
      minutes: 6,
      pacing: 'self-paced',
      intro: { title: '🔍 Spot the Opportunity', blurb: 'Now switch into Design Detective mode. For each everyday scene, pick the option that names a real problem — not a guess, a want, or someone to blame.' },
      questions: [
        { icon: '🔌', context: 'Charging cables', q: 'Charging cables for laptops and tablets get tangled and lost in bags.', options: ['Tangled or missing cables waste time and cause frustration.', 'Cables should be more colourful.', 'Students should not bring devices to school.', 'Laptops charge too slowly.'], correct: 0 },
        { icon: '📱', context: 'Video calls', q: 'Students propping phones against books for video calls find them sliding or falling over.', options: ['An unstable phone makes hands-free video calls hard to rely on.', 'Phones are too heavy.', 'Students should not use phones for calls.', 'Books are the wrong shape.'], correct: 0 },
        { icon: '🎧', context: 'Headphones', q: 'Headphones left loose in bags get their wires knotted and the earbuds scratched.', options: ['Loose storage damages headphones and wastes time untangling them.', 'Headphones are too expensive.', 'Students should only use wireless.', 'Bags are too small.'], correct: 0 },
        { icon: '🔋', context: 'Shared power', q: 'In the design room, three students often need the one wall socket near the workbench at the same time.', options: ['Limited access to the socket creates waiting and disrupts the work session.', 'There should be no phones in class.', 'The workbench is in the wrong place.', 'Students should charge devices at home only.'], correct: 0 },
        { icon: '🎒', context: 'Studio storage', q: 'Some students cannot find their Design folder or supplies quickly when a lesson starts.', options: ['Disorganised storage wastes lesson time hunting for materials.', 'Lockers are too small for everyone.', 'Students should carry less.', 'The school needs more lockers.'], correct: 0 },
      ],
    },
    {
      type: 'learn',
      key: 'learnNeed',
      label: 'Lesson: A Need Worth Solving',
      icon: '📘',
      strand: 'A.i',
      block: BLOCK1,
      minutes: 6,
      intro: { title: '📘 Criterion A.i — Explain and justify the need', blurb: 'Five short cards. Read them at your own pace.' },
      pages: [
        {
          icon: '🎯',
          title: 'Start with a need, not a product',
          body: [
            'Designers do not begin with “I will make a phone stand”. They begin with a person who has a problem.',
            'A NEED is something a person genuinely struggles without or is held back by. A WANT is something nice to have. Both are fine, but a strong design project starts from a need.',
          ],
          example: {
            label: 'Need or want?',
            weak: '“Students want a cooler-looking pencil case.”',
            strong: '“Students lose time hunting for pencils in a full bag.”',
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
            'A need only makes sense for someone. “Everybody” and “students” are too big. Choose ONE named user: a classmate, a family member, a teacher or a realistic fictional client.',
            'This named person is your client for the whole unit. You will interview them, learn how they feel and design for them.',
          ],
          example: { label: 'Too big vs just right', weak: '“People who carry bags.”', strong: '“Tariq, 14, who forgets kit every week because his bag is packed in a rush.”' },
        },
        {
          icon: '🧭',
          title: 'Six challenge directions',
          body: ['Choose one direction. Each one is wide enough to give you many needs to find.'],
          bullets: [
            'Physical space: how a room, desk or corner works.',
            'Everyday routine: mornings, travel, chores, habits.',
            'Learning experience: notes, revision, lessons.',
            'Inclusion and accessibility: making things work for more people.',
            'Small community experience: a building, garden or club.',
            'Wellbeing: rest, calm, food, breaks, feeling good.',
          ],
        },
        {
          icon: '🔍',
          title: 'Observation → problem → opportunity',
          body: ['Keep three things apart:'],
          bullets: [
            'OBSERVATION: what you can see or hear, with no opinion. “Cables are tangled in bags.”',
            'PROBLEM: what is not working for a person. “Tangled cables waste time and cause frustration.”',
            'OPPORTUNITY: a problem written so you can start solving it. “How might we help students keep cables tidy and easy to find?”',
          ],
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
      ],
    },
    {
      type: 'mcq',
      key: 'goodq',
      label: 'Strong or Weak Research Question?',
      icon: '❓',
      block: BLOCK1,
      minutes: 10,
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: {
        title: '❓ Strong or weak?',
        blurb: 'A good research question is open, about a real person’s experience, and can be answered by research. Answer at your own pace: the right answer shows as soon as you choose, and each correct answer earns 10 points.',
      },
      questions: [
        {
          icon: '🎒', context: 'Bags', q: '“Do people like bags?”',
          options: [
            'Weak: it is vague and can be answered “yes” or “no”, so it teaches you almost nothing.',
            'Strong: it is short and easy to answer.',
            'Strong: it is about a product.',
          ],
          correct: 0,
        },
        {
          icon: '🛏️', context: 'A shared room', q: '“What happens to Nadia’s homework time when her brother is in the room, and what does she do about it?”',
          options: [
            'Strong: it is open, about one named person, and asks what really happens and what she does.',
            'Weak: it names a person, so it is too narrow.',
            'Weak: it is too long.',
          ],
          correct: 0,
        },
        {
          icon: '🖥️', context: 'A desk', q: '“Is a bigger desk better?”',
          options: [
            'Weak: it is a closed question and already assumes the solution is a bigger desk.',
            'Strong: it is a clear yes or no.',
            'Strong: because it mentions a product.',
          ],
          correct: 0,
        },
        {
          icon: '📄', context: 'Loose paper', q: '“How do Year 8 students currently keep track of loose worksheets during a school day?”',
          options: [
            'Strong: it is open, about real behaviour, and can be answered by observing or interviewing.',
            'Weak: it is about a whole year group.',
            'Weak: it does not mention a product.',
          ],
          correct: 0,
        },
        {
          icon: '🧹', context: 'Tidying', q: '“Why is Mr Osei too lazy to tidy the art room?”',
          options: [
            'Weak: it blames the person and is a leading question; it will make him defensive.',
            'Strong: it is direct and honest.',
            'Strong: it asks “why”.',
          ],
          correct: 0,
        },
        {
          icon: '🥫', context: 'Jars', q: '“Which existing products help people open jars with sore hands, and what are they made from and cost?”',
          options: [
            'Strong: it is a secondary-research question that will feed a product comparison.',
            'Weak: it is about too many things.',
            'Weak: it has a number in it.',
          ],
          correct: 0,
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'choose',
      label: 'Choose Your Need and Your User',
      icon: '🧑',
      block: BLOCK1,
      minutes: 12,
      intro: { title: '🧑 Choose a direction, a named user and a need', blurb: 'Work at your own pace — your work saves automatically. Your teacher will approve, narrow or redirect your choice.' },
      overview: {
        brief: {
          context:
            'Your Unit 1 project is a real, made and tested prototype for a named person. Before anything is built, you decide whose everyday need you will solve and why it matters to them.',
          task: 'Choose a challenge direction and ONE named user, write your need clearly, and build a personality map of your user. In the next steps you will interview them and understand them properly.',
          produce: [
            'One challenge direction and one named user',
            'A need statement that explains and justifies the need',
            'A personality map: traits, habits and how they affect your design',
          ],
          assessedOn: ['A.i', 'A.ii'],
          time: 'Block 1 · single period · about 50 minutes',
        },
        flow: [
          { strand: 'A.i', title: 'Choose and justify a need', asks: 'Name a direction, a user, and why the need matters.', sections: ['direction', 'need', 'persona'] },
          { strand: 'A.ii', title: 'Interview your user', asks: 'Gather primary evidence by asking good questions.', where: 'next stage · Interview Your User' },
          { strand: 'A.i', title: 'Understand your user', asks: 'Turn what you learn into an empathy map.', where: 'next stage · Interview Your User' },
          { strand: 'A.ii', title: 'Plan the research', asks: 'Prioritise primary and secondary research.', where: 'Block 2 · Research Plan' },
          { strand: 'A.iii', title: 'Analyse products', asks: 'Compare at least three similar products.', where: 'Block 2 · Products' },
          { strand: 'A.iv', title: 'Write the brief', asks: 'Summarise the research with measurable criteria.', where: 'Block 2 · Brief' },
        ],
      },
      sections: [
        {
          key: 'direction',
          label: 'Direction and user',
          icon: '🧭',
          criterion: 'A.i',
          strandLabel: CRITERION_A_LABELS['A.i'],
          brief: { title: 'Brief: choose something manageable', points: ['Pick the direction you find most interesting and can research in school.', 'Choose ONE named user you can interview, or a realistic fictional client.', 'Your teacher checks it is manageable in the studio.'] },
          fields: [
            { key: 'direction', label: 'Challenge direction', type: 'select', options: ['Physical space', 'Everyday routine', 'Learning experience', 'Inclusion and accessibility', 'Small community experience', 'Wellbeing'] },
            { key: 'usertype', label: 'Who is your user?', type: 'select', options: ['A classmate, family member or teacher I can interview', 'A persona-pack character I will interview here', 'A realistic fictional client'] },
            { key: 'user', label: 'Your user’s name and age', type: 'text', placeholder: 'e.g. Tariq, 14' },
          ],
        },
        {
          key: 'need',
          label: 'The need',
          icon: '🎯',
          criterion: 'A.i',
          strandLabel: CRITERION_A_LABELS['A.i'],
          brief: { title: 'Brief: explain AND justify', points: ['Say what is hard for them (explain).', 'Say why it matters, using because (justify).', 'Prove it is a need, not just a want.'] },
          fields: [
            {
              key: 'statement',
              label: 'Your need statement',
              type: 'textarea',
              hint: '[Name] needs a way to … because … and it matters because …',
              placeholder: 'e.g. Tariq needs a way to …',
              exemplars: [
                'Tariq needs a way to remember what to pack because he rushes in the morning and leaves things at home, and it matters because he loses marks and feels embarrassed asking his mum to bring items.',
                'Rosa needs a way to open jars without pain because arthritis makes gripping hard, and it matters because she wants to keep cooking for her grandchildren without asking for help.',
                'Nadia needs a way to keep a tidy homework space because her brother’s things spread onto her desk, and it matters because she cannot concentrate and finishes late.',
              ],
              celebrateKeywords: ['needs a way', 'because', 'it matters', 'so that'],
              points: 10,
            },
            {
              key: 'proof',
              label: 'Need or want? Prove it is a need',
              type: 'textarea',
              hint: 'What actually goes wrong for them, how often, and what would change if it were solved?',
              exemplars: [
                'It is a need because it happens almost every week, it costs him time and marks, and without a fix the problem repeats. A want would be a nicer-looking bag, which would not change that.',
                'She cannot open jars at all on bad days, so she has to wait for someone else. That is a real difficulty, not a preference, and it affects her independence.',
                'Homework is late every week because she has no clear space. If it were solved she could finish on time, so it is a need.',
              ],
              celebrateKeywords: ['because', 'every', 'without', 'costs', 'not a want'],
              points: 10,
            },
          ],
        },
        {
          key: 'persona',
          label: 'Personality map',
          icon: '🗺️',
          criterion: 'A.i',
          strandLabel: CRITERION_A_LABELS['A.i'],
          brief: { title: 'Brief: describe them as a real person', points: ['Note traits, habits and routines that matter for your problem.', 'Say how each one affects what you might design.', 'Mark what you KNOW and what you are guessing.'] },
          fields: [
            {
              key: 'traits',
              label: 'Personality map',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'trait', label: 'Trait, habit or routine', placeholder: 'e.g. Hates lists, forgets things' },
                { key: 'known', label: 'Known or guess?', placeholder: 'known / guess' },
                { key: 'effect', label: 'How it affects the design', placeholder: 'e.g. A reminder must be visible, not a list' },
              ],
            },
            {
              key: 'summary',
              label: 'In two sentences, who is your user?',
              type: 'textarea',
              exemplars: [
                'Tariq is a friendly, easygoing 14-year-old who rushes every morning and remembers things better when he can see them. He gets embarrassed when he forgets kit.',
                'Rosa is a proud, independent 78-year-old who loves cooking. Arthritis in her hands makes jars and packaging painful, but she does not like asking for help.',
              ],
              celebrateKeywords: ['who', 'because', 'but', 'loves', 'hates', 'prefers'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'interview',
      label: 'Interview Your User',
      icon: '🎭',
      block: BLOCK1,
      minutes: 20,
      intro: { title: '🎭 Interview and empathy map', blurb: 'Talk to your user with the chatbot, then turn what you learn into an empathy map. Work at your own pace: no need to click Next.' },
      overview: {
        brief: {
          context: 'Evidence beats assumption. The best way to understand a user is to ask them well and listen. Here you interview a named everyday user and record what you learn.',
          task: 'Interview a persona-pack user (or your real user, if you can), note your best questions, and build an empathy map for one person.',
          produce: ['An interview with a persona-pack user (or notes from a real one)', 'Your best questions and what they taught you', 'An empathy map: Says, Thinks, Does, Feels', 'One assumption you changed'],
          assessedOn: ['A.i', 'A.ii'],
          time: 'Block 1 · single period · about 20 minutes',
        },
        flow: [
          { strand: 'A.ii', title: 'Interview a user', asks: 'Gather primary evidence with open questions.', sections: ['personaChat', 'questions'] },
          { strand: 'A.i', title: 'Empathy map', asks: 'Say what they say, think, do and feel.', sections: ['empathy'] },
        ],
      },
      sections: [
        {
          key: 'personaChat',
          label: 'Interview',
          icon: '💬',
          criterion: 'A.ii',
          strandLabel: CRITERION_A_LABELS['A.ii'],
          brief: { title: 'Brief: ask good questions', points: ['Open questions (“tell me about…”, “what happens when…”) get better answers than yes/no ones.', 'Ask about a real day, the last time it went wrong, and what they have tried.', 'These characters are fictional: treat what they say as leads to check.'] },
          blurb: 'Pick a character who matches your challenge direction (or any you like) and chat with them. If you have a real user, use these questions with them too.',
          fields: [{ key: 'chat', label: 'Interview a persona-pack user', type: 'personaChat', personaPack: 'everyday' }],
        },
        {
          key: 'questions',
          label: 'My best questions',
          icon: '❓',
          criterion: 'A.ii',
          strandLabel: CRITERION_A_LABELS['A.ii'],
          fields: [
            {
              key: 'asked',
              label: 'Questions I asked',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'q', label: 'Question', placeholder: 'e.g. Tell me about the last time you could not find something' },
                { key: 'type', label: 'Open or closed?', placeholder: 'open' },
                { key: 'learned', label: 'What it taught me', placeholder: 'e.g. She loses about ten minutes each morning' },
              ],
            },
            {
              key: 'best',
              label: 'Which question got the best answer, and why?',
              type: 'textarea',
              exemplars: [
                'Tell me about the last time it went wrong got the best answer because it was open and made him describe a real day with details I would not have guessed.',
                'What do you do when you cannot open a jar? worked best because it asked about a real habit rather than a yes or no, so I learned her workaround.',
              ],
              celebrateKeywords: ['because', 'open', 'real', 'detail', 'described'],
              points: 10,
            },
          ],
        },
        {
          key: 'empathy',
          label: 'Empathy map',
          icon: '💭',
          criterion: 'A.i',
          strandLabel: CRITERION_A_LABELS['A.i'],
          brief: { title: 'Brief: one person, four views', points: ['Says: their real words.', 'Thinks: what they may think but not say.', 'Does: what they actually do to cope.', 'Feels: the emotions the problem causes.'] },
          fields: [
            {
              key: 'says', label: 'Says', type: 'textarea', hint: 'What did they actually say about the problem?',
              exemplars: [
                '“I always forget something because I am rushing,” and “I hate asking my mum to bring things.”',
                '“I cannot open it, so I wait for someone,” and “I do not like being fussed over.”',
                '“My desk is never mine because my brother’s things end up on it.”',
              ],
              celebrateKeywords: ['because', 'always', 'i cannot', 'i hate', 'i wish'], points: 10,
            },
            {
              key: 'thinks', label: 'Thinks', type: 'textarea', hint: 'What might they think but not say out loud?',
              exemplars: [
                'He probably worries people think he is careless, and hopes there is an easy fix that does not feel like a list.',
                'She may feel a bit useless and wonders if asking for help makes her a burden, though she would not say so.',
                'She likely thinks the room will never be tidy, and worries she will fall behind.',
              ],
              celebrateKeywords: ['worries', 'wonders', 'hopes', 'probably', 'may feel'], points: 10,
            },
            {
              key: 'does', label: 'Does', type: 'textarea', hint: 'What do they currently do to cope?',
              exemplars: [
                'He packs the bag the night before but forgets what he needs, so he pushes things in at the last minute and hopes.',
                'She waits until someone is around, or taps the lid on the counter, instead of asking.',
                'She does her homework on the floor and moves her things to a different corner each night.',
              ],
              celebrateKeywords: ['instead', 'currently', 'waits', 'avoids', 'workaround'], points: 10,
            },
            {
              key: 'feels', label: 'Feels', type: 'textarea', hint: 'How does the problem make them feel?',
              exemplars: [
                'Stressed and rushed in the mornings, and embarrassed when he forgets something in front of others.',
                'Frustrated and a little sad when she cannot do something she used to do easily, but proud when she finds a workaround.',
                'Annoyed and crowded, and worried her work is not good enough.',
              ],
              celebrateKeywords: ['frustrated', 'embarrassed', 'stressed', 'proud', 'worried'], points: 10,
            },
            {
              key: 'changed',
              label: 'One assumption you had that the interview changed',
              type: 'textarea',
              exemplars: [
                'I assumed he forgot things because he did not care, but the interview showed he cares a lot and it is the rush that causes it.',
                'I thought a bigger container would help, but she said the lid is the problem, not the size.',
              ],
              celebrateKeywords: ['assumed', 'thought', 'but', 'showed', 'actually'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'mcq',
      key: 'exit1',
      label: 'Block 1 Exit Ticket',
      icon: '🎟️',
      block: BLOCK1,
      minutes: 5,
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: { title: '🎟️ Exit ticket', blurb: 'Four quick questions to lock in today. This is the end of Block 1: stop here unless your teacher says to carry on. Block 2 starts at the next stage.' },
      questions: [
        { icon: '🎯', context: 'Need or want', q: 'Which is a NEED?', options: ['Kwame’s neighbours cannot fit their bikes, so bikes block the corridor every day.', 'The bike room would look nicer with a new paint colour.', 'Everyone would like a cooler bike rack.', 'Kwame wants a bigger office.'], correct: 0 },
        { icon: '💬', context: 'Interview', q: 'Which question is most likely to give you useful evidence from a user?', options: ['“Tell me about the last time this went wrong.”', '“Do you like my idea?”', '“Is this hard, yes or no?”', '“Why are you so bad at this?”'], correct: 0 },
        { icon: '💭', context: 'Empathy map', q: 'Which part of an empathy map holds what a person would NOT necessarily say out loud?', options: ['Thinks', 'Says', 'Does', 'None of them'], correct: 0 },
        { icon: '🔎', context: 'Evidence', q: 'You wrote “Tariq forgets things because he is lazy” before you interviewed him. What is that?', options: ['An assumption that the interview may prove wrong.', 'Primary evidence.', 'A research plan.', 'A success criterion.'], correct: 0 },
      ],
    },

    // ================================================================ BLOCK 2
    {
      type: 'learn',
      key: 'learnPlan',
      label: 'Lesson: Build a Research Plan',
      icon: '📘',
      strand: 'A.ii',
      block: BLOCK2,
      minutes: 10,
      intro: { title: '📘 Criterion A.ii — Construct and prioritise a research plan', blurb: 'A plan is more than a list of questions. Five cards to read at your own pace.' },
      pages: [
        {
          icon: '📋',
          title: 'A plan, not a list',
          body: ['A list of questions tells you what you are curious about. A research PLAN also says how you will find each answer, in what order, and by when.'],
          example: {
            label: 'Weak plan vs strong plan',
            weak: '“Find out about jars. Ask some people. Look online.”',
            strong: '“1. Interview Rosa about how she opens jars now (primary, Tue). 2. Compare three jar-opener products online (secondary, Wed). 3. Observe how she opens a jar for two minutes (primary, Thu).”',
            note: 'The strong plan names a method, a source and a purpose for each step.',
          },
        },
        {
          icon: '🔀',
          title: 'Primary and secondary research',
          body: ['PRIMARY research is information you collect yourself, first hand. SECONDARY research is information someone else already collected.'],
          bullets: [
            'Primary: an interview, a short survey, watching someone do a task, a test you run.',
            'Secondary: a website or article, a product review, a book, a photo or a video someone else made.',
          ],
          keyTerms: [
            { term: 'Primary', meaning: 'you collect it yourself' },
            { term: 'Secondary', meaning: 'someone else collected it' },
          ],
          tip: 'Retrieval check: is reading a review of a jar opener primary or secondary?',
        },
        {
          icon: '🥇',
          title: 'Prioritise: what comes first?',
          body: ['You cannot do everything, so rank your research. Put first what the rest depends on, what is quick, and what is most valuable.'],
          bullets: [
            'Ask: if I only had time for one piece of research, which one?',
            'Do the research that could change your mind earliest.',
            'Give each step a realistic timeframe you can keep.',
          ],
        },
        {
          icon: '✅',
          title: 'A checklist for your plan',
          body: ['Check every step against three questions:'],
          bullets: [
            'METHOD: how will I find this out?',
            'SOURCE: from whom or where?',
            'PURPOSE: what will this help me decide?',
          ],
          example: { label: 'A quick check', text: 'If a step has no method, no source or no purpose, it is not finished. Fix that step or remove it.' },
        },
        {
          icon: '🤝',
          title: 'Ask people respectfully',
          body: ['Research involves real people, so be kind and careful.'],
          bullets: [
            'Ask permission first and explain what you are doing.',
            'Keep names and notes private; use a first name or a code if asked.',
            'No photographs of other people’s homes or faces without consent.',
          ],
          tip: 'If you cannot interview a real person, a realistic fictional client is fine — just record which one it was.',
        },
      ],
    },
    {
      type: 'mcq',
      key: 'sources',
      label: 'Primary or Secondary?',
      icon: '🔀',
      block: BLOCK2,
      minutes: 8,
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: { title: '🔀 Sort the sources', blurb: 'Decide if each source is primary or secondary. The answer shows as soon as you choose, and each correct answer earns 10 points.' },
      questions: [
        { icon: '🗣️', context: 'Interview', q: 'You interview your grandmother about how she opens jars.', options: ['Primary: you collected it yourself.', 'Secondary: someone else collected it.'], correct: 0 },
        { icon: '📰', context: 'Article', q: 'You read an online article about arthritis-friendly kitchen tools.', options: ['Secondary: someone else collected and wrote it.', 'Primary: you found it yourself.'], correct: 0 },
        { icon: '👀', context: 'Observation', q: 'You watch a classmate pack their bag for two minutes and time it.', options: ['Primary: you observed and timed it yourself.', 'Secondary: because it was a classmate.'], correct: 0 },
        { icon: '⭐', context: 'Reviews', q: 'You read customer reviews of three different pencil cases.', options: ['Secondary: other people wrote them.', 'Primary: you read them yourself.'], correct: 0 },
        { icon: '📝', context: 'Survey', q: 'You ask 12 classmates a three-question survey about lost worksheets.', options: ['Primary: you collected the answers.', 'Secondary: because there are many people.'], correct: 0 },
        { icon: '🖼️', context: 'Photo', q: 'You use a photograph from a museum website of an old kitchen tool.', options: ['Secondary: someone else made it.', 'Primary: because it is a picture.'], correct: 0 },
      ],
    },
    {
      type: 'worksheet',
      key: 'plan',
      label: 'My Research Plan',
      icon: '📋',
      block: BLOCK2,
      minutes: 22,
      intro: { title: '📋 Criterion A.ii — your prioritised research plan', blurb: 'Build a plan for your named user. Work at your own pace: no need to click Next.' },
      overview: {
        brief: {
          context: 'Now that you know your user, plan the research you need before you design anything. A strong plan is ranked, uses both primary and secondary research, and is realistic.',
          task: 'Write a prioritised research plan for your need and user, check every step against method, source and purpose, and plan how you will ask people respectfully.',
          produce: ['A ranked research plan with methods and timeframes', 'A note on which step is weakest and how you will fix it', 'A respect-and-safety note for people you involve', 'An evidence log that you fill in as you research'],
          assessedOn: ['A.ii'],
          time: 'Block 2 · double period · about 100 minutes',
        },
        flow: [
          { strand: 'A.ii', title: 'Plan the research', asks: 'Rank primary and secondary research with methods.', sections: ['research', 'check', 'respect'] },
          { strand: 'A.ii', title: 'Log the evidence', asks: 'Record what you find and how it changes your thinking.', where: 'next stage · Evidence Log' },
          { strand: 'A.iii', title: 'Compare products', asks: 'Analyse at least three similar products.', where: 'later in Block 2' },
          { strand: 'A.iv', title: 'Write the brief', asks: 'Turn evidence into measurable criteria.', where: 'later in Block 2' },
        ],
      },
      sections: [
        {
          key: 'research',
          label: 'Research plan',
          icon: '🗓️',
          criterion: 'A.ii',
          strandLabel: CRITERION_A_LABELS['A.ii'],
          brief: { title: 'Brief: rank it, do not just list it', points: ['Number the steps in the order you will do them.', 'Mix primary and secondary methods.', 'Give each step a source, a purpose and a date.'] },
          fields: [
            {
              key: 'plan',
              label: 'My research plan, in priority order',
              type: 'table',
              minRows: 5,
              columns: [
                { key: 'rank', label: 'Order', placeholder: '1' },
                { key: 'find', label: 'What I need to find out', placeholder: 'e.g. How Rosa opens jars now' },
                { key: 'method', label: 'Method', placeholder: 'e.g. Interview' },
                { key: 'type', label: 'Primary or secondary?', placeholder: 'primary' },
                { key: 'source', label: 'From whom or where', placeholder: 'e.g. Rosa, kitchen' },
                { key: 'when', label: 'By when', placeholder: 'e.g. Wed' },
              ],
            },
            {
              key: 'why',
              label: 'Why this order?',
              type: 'textarea',
              exemplars: [
                'I put the interview first because everything else depends on knowing what she does now. The product comparison is second because I need to know what to compare, and the test is last because I need a design first.',
                'I start with observation because it is quick and could change my mind, then interview to find out why, then compare products so I know what already exists.',
              ],
              celebrateKeywords: ['because', 'first', 'depends', 'then', 'so that'],
              points: 10,
            },
          ],
        },
        {
          key: 'check',
          label: 'Check your plan',
          icon: '✅',
          criterion: 'A.ii',
          strandLabel: CRITERION_A_LABELS['A.ii'],
          fields: [
            {
              key: 'weak',
              label: 'Check every step for a method, a source and a purpose. Which step is weakest, and how will you fix it?',
              type: 'textarea',
              exemplars: [
                'Step 4 is weakest because it says look online but has no source or purpose. I will fix it by naming three specific products to compare and saying it helps me choose a feature to borrow.',
                'The survey step has no clear source, so I will decide it is twelve classmates in my class, and its purpose is to find out how often worksheets get lost.',
              ],
              celebrateKeywords: ['weakest', 'because', 'fix', 'method', 'source', 'purpose'],
              points: 10,
            },
          ],
        },
        {
          key: 'respect',
          label: 'Ask people respectfully',
          icon: '🤝',
          criterion: 'A.ii',
          strandLabel: CRITERION_A_LABELS['A.ii'],
          fields: [
            {
              key: 'note',
              label: 'How will you ask people respectfully and protect them?',
              type: 'textarea',
              exemplars: [
                'I will ask permission before interviewing, explain what it is for, use only a first name, keep my notes private and not take photos of anyone without consent.',
                'People can say no or stop at any time. I will keep the notes in my journal only, and if I cannot interview a real person I will use a realistic fictional client and say so.',
              ],
              celebrateKeywords: ['permission', 'consent', 'private', 'first name', 'stop'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'evidence',
      label: 'Evidence Log',
      icon: '🗂️',
      block: BLOCK2,
      minutes: 15,
      intro: { title: '🗂️ Log your evidence', blurb: 'Carry out (or schedule) the plan and record every source. Evidence beats assumption. Work at your own pace: no need to click Next.' },
      sections: [
        {
          key: 'log',
          label: 'Evidence log',
          icon: '🗂️',
          criterion: 'A.ii',
          strandLabel: CRITERION_A_LABELS['A.ii'],
          brief: { title: 'Brief: log every source', points: ['Date every entry.', 'Say if it is primary or secondary.', 'Say how it changed or confirmed your thinking.'] },
          fields: [
            {
              key: 'entries',
              label: 'Evidence log',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'date', label: 'Date', placeholder: 'e.g. 22 Sept' },
                { key: 'source', label: 'Source', placeholder: 'e.g. Interview with Tariq' },
                { key: 'type', label: 'Primary / secondary', placeholder: 'primary' },
                { key: 'found', label: 'What I found', placeholder: 'e.g. He packs at night but forgets kit' },
                { key: 'changed', label: 'How it changes my thinking', placeholder: 'e.g. I will focus on reminders, not bags' },
              ],
            },
          ],
        },
        {
          key: 'assumptions',
          label: 'Assumptions vs evidence',
          icon: '⚖️',
          criterion: 'A.i',
          strandLabel: CRITERION_A_LABELS['A.i'],
          fields: [
            {
              key: 'table',
              label: 'Assumptions I checked',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'assumption', label: 'My assumption', placeholder: 'e.g. A bigger bag would help' },
                { key: 'evidence', label: 'What the evidence showed', placeholder: 'e.g. The bag is big; he just rushes' },
                { key: 'result', label: 'Keep or change?', placeholder: 'change' },
              ],
            },
            {
              key: 'reflection',
              label: 'Which piece of evidence changed or confirmed your thinking, and why?',
              type: 'textarea',
              exemplars: [
                'The interview changed my thinking: I assumed the problem was the bag, but he said the problem is the rush in the morning, so I will look at reminders and routines instead.',
                'The product review confirmed my idea that grip size matters because several people complained the handle was too thin.',
              ],
              celebrateKeywords: ['changed', 'confirmed', 'assumed', 'because', 'so'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'learn',
      key: 'learnProducts',
      label: 'Lesson: Compare a Group of Products',
      icon: '📘',
      strand: 'A.iii',
      block: BLOCK2,
      minutes: 8,
      intro: { title: '📘 Criterion A.iii — Analyse a group of similar products', blurb: 'Four cards on why three products teach you more than one, and how to compare them.' },
      pages: [
        {
          icon: '🧩',
          title: 'Why a group, not one',
          body: ['One product can mislead you: it might be unusually good or unusually bad. Comparing at least three shows you what most of them do, where they differ, and what is missing.'],
          example: { label: 'Insight from a group', text: 'Three jar openers all use a rubber grip, but none has a handle thick enough for arthritic hands. That gap is your opportunity.' },
        },
        {
          icon: '🔍',
          title: 'Look at the same things every time',
          body: ['For each product, record the same five things:'],
          bullets: ['WHO it is for (the user).', 'WHAT it does (the function).', 'WHAT it is made of (the material).', 'ONE strength.', 'ONE limitation.'],
          keyTerms: [
            { term: 'Function', meaning: 'what the product is for' },
            { term: 'Limitation', meaning: 'where it falls short' },
          ],
        },
        {
          icon: '📊',
          title: 'A comparison matrix',
          body: ['Put features in rows and products in columns. Then mark each row:'],
          bullets: ['AGREE: all three do it the same way.', 'DISAGREE: they do it differently.', 'GAP: none of them does it.'],
          example: { label: 'Example row', text: 'Feature: handle thickness — Product A: thin, Product B: thin, Product C: thin → AGREE (all thin), and a GAP for a thick handle.' },
        },
        {
          icon: '💡',
          title: 'From analysis to a design decision',
          body: ['End by saying what your analysis means for your design: what you will KEEP, what you will AVOID and what you will IMPROVE, each with a reason.'],
          tip: 'Retrieval check: what is the difference between a strength and a limitation? Give one of each for a school bag.',
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'products',
      label: 'Product Analysis',
      icon: '🔎',
      block: BLOCK2,
      minutes: 25,
      intro: { title: '🔎 Criterion A.iii — analyse at least three products', blurb: 'Choose three real, comparable products that address your need. Work at your own pace: no need to click Next.' },
      sections: [
        {
          key: 'three',
          label: 'Three products',
          icon: '📦',
          criterion: 'A.iii',
          strandLabel: CRITERION_A_LABELS['A.iii'],
          brief: { title: 'Brief: same five things for each', points: ['Pick three products for the same need.', 'Fill every column for every product.', 'Name one real strength and one real limitation.'] },
          fields: [
            {
              key: 'products',
              label: 'Product analysis',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'product', label: 'Product', placeholder: 'e.g. Rubber jar gripper' },
                { key: 'who', label: 'Who it is for', placeholder: 'e.g. Adults with weak grip' },
                { key: 'does', label: 'What it does', placeholder: 'e.g. Grips the lid to twist' },
                { key: 'material', label: 'Material', placeholder: 'e.g. Silicone' },
                { key: 'strength', label: 'One strength', placeholder: 'e.g. Cheap and small' },
                { key: 'limit', label: 'One limitation', placeholder: 'e.g. Slips on wet lids' },
              ],
            },
          ],
        },
        {
          key: 'matrix',
          label: 'Comparison matrix',
          icon: '📊',
          criterion: 'A.iii',
          strandLabel: CRITERION_A_LABELS['A.iii'],
          fields: [
            {
              key: 'matrix',
              label: 'Cross-product comparison',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'feature', label: 'Feature', placeholder: 'e.g. Handle thickness' },
                { key: 'p1', label: 'Product 1', placeholder: 'thin' },
                { key: 'p2', label: 'Product 2', placeholder: 'thin' },
                { key: 'p3', label: 'Product 3', placeholder: 'medium' },
                { key: 'verdict', label: 'Agree, disagree or gap?', placeholder: 'gap: none is thick' },
              ],
            },
          ],
        },
        {
          key: 'insight',
          label: 'What it means for my design',
          icon: '💡',
          criterion: 'A.iii',
          strandLabel: CRITERION_A_LABELS['A.iii'],
          fields: [
            {
              key: 'keep',
              label: 'What will you KEEP, AVOID and IMPROVE, and why?',
              type: 'textarea',
              exemplars: [
                'I will keep the rubber grip because all three use it and users like it, avoid a thin handle because reviews say it hurts, and improve the lid grip because none works on wet lids.',
                'Keep a simple one-piece shape because it is cheap and easy to clean. Avoid small parts because they get lost. Improve visibility with a bright colour because none of the three is easy to spot in a bag.',
              ],
              celebrateKeywords: ['keep', 'avoid', 'improve', 'because', 'none of'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'learn',
      key: 'learnBrief',
      label: 'Lesson: From Evidence to a Brief',
      icon: '📘',
      strand: 'A.iv',
      block: BLOCK2,
      minutes: 8,
      intro: { title: '📘 Criterion A.iv — Develop a design brief', blurb: 'Four cards on turning your research into a clear brief with measurable criteria.' },
      pages: [
        {
          icon: '📝',
          title: 'What a brief is',
          body: ['A design brief presents the analysis of your research in a few lines: who it is for, what problem it solves, what the evidence showed, and what the product must do.'],
          example: { label: 'The one-sentence version', text: '“I am designing for ___, made from ___, because ___.”', strong: '“I am designing for Rosa, made from silicone and wood, because reviews and her interview show she needs a thick, non-slip handle.”', note: 'You will test materials in Week 3, so your material can be a first idea.' },
        },
        {
          icon: '📏',
          title: 'Make criteria measurable',
          body: ['A success criterion is a target you can check. “Strong” is a feeling. “Holds a 500 g load for ten seconds” is a measurement.'],
          example: { label: 'Vague vs measurable', weak: '“It should be strong and comfortable.”', strong: '“It must hold a 500 g load for 10 seconds without bending more than 5 mm; the handle must be at least 3 cm thick.”' },
        },
        {
          icon: '🧱',
          title: 'Include a material or making criterion',
          body: ['This year your idea ends in a made prototype, so add at least one criterion about materials or making, for example a load test or a sourcing note.'],
          bullets: ['Function: what it must do.', 'User: what it must feel like for THEM.', 'Size or limits: measurements.', 'Material or making: how it is made and tested.', 'Impact: where materials come from (an early sustainability lens).'],
        },
        {
          icon: '🔗',
          title: 'Link each criterion to evidence',
          body: ['Every criterion should trace back to something you found. That link is what makes a brief a summary of research and not a wish list.'],
          tip: 'Retrieval check: which piece of your own evidence supports your most important criterion?',
        },
      ],
    },
    {
      type: 'mcq',
      key: 'criteriaq',
      label: 'Which Criterion Is Measurable?',
      icon: '📏',
      block: BLOCK2,
      minutes: 6,
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: { title: '📏 Measurable or vague?', blurb: 'Pick the criterion you could actually check with a test or a measurement. Correct answers earn 10 points.' },
      questions: [
        { icon: '🎒', context: 'Bags', q: 'Which is measurable?', options: ['Fits a 15-inch laptop and weighs under 1.2 kg.', 'Looks great.', 'Is a good size.', 'Is comfortable for everyone.'], correct: 0 },
        { icon: '🥫', context: 'Jars', q: 'Which is measurable?', options: ['Opens a standard jar with under 20 N of force.', 'Is easy to use.', 'Feels nice in the hand.', 'Is strong.'], correct: 0 },
        { icon: '📚', context: 'Notes', q: 'Which is measurable?', options: ['A student can find any topic’s notes in under 30 seconds.', 'Notes are organised.', 'It is helpful for revision.', 'It is colourful.'], correct: 0 },
        { icon: '🌍', context: 'Materials', q: 'Which is a measurable MATERIAL criterion?', options: ['Made from at least 50% recycled material, with the source stated.', 'Uses good materials.', 'Is eco-friendly.', 'Uses lots of plastic.'], correct: 0 },
        { icon: '🧪', context: 'Testing', q: 'Which criterion links directly to a test?', options: ['Survives a 2 kg load for 10 seconds without breaking.', 'Is durable.', 'Is not flimsy.', 'Looks solid.'], correct: 0 },
      ],
    },
    {
      type: 'worksheet',
      key: 'brief',
      label: 'My Design Brief',
      icon: '📝',
      block: BLOCK2,
      minutes: 20,
      intro: { title: '📝 Criterion A.iv — your brief and measurable criteria', blurb: 'Turn your evidence into a brief and four to six measurable success criteria. Work at your own pace: no need to click Next.' },
      sections: [
        {
          key: 'sentence',
          label: 'The one-sentence brief',
          icon: '✍️',
          criterion: 'A.iv',
          strandLabel: CRITERION_A_LABELS['A.iv'],
          fields: [
            {
              key: 'one',
              label: 'I am designing for ___, made from ___, because ___.',
              type: 'textarea',
              exemplars: [
                'I am designing for Rosa, made from silicone and wood, because reviews and her interview show she needs a thick, non-slip handle she can grip without pain.',
                'I am designing for Tariq, made from card and plastic, because his interview showed he forgets things and needs a reminder he can see by the door.',
              ],
              celebrateKeywords: ['designing for', 'made from', 'because', 'interview', 'evidence'],
              points: 10,
            },
          ],
        },
        {
          key: 'brief',
          label: 'The design brief',
          icon: '📝',
          criterion: 'A.iv',
          strandLabel: CRITERION_A_LABELS['A.iv'],
          brief: { title: 'Brief: summarise your research', points: ['Who it is for and the need.', 'What your research showed (name the evidence).', 'What the product must do and must not do.'] },
          fields: [
            {
              key: 'text',
              label: 'Design brief',
              type: 'textarea',
              exemplars: [
                'Rosa, 78, needs to open jars without pain. My interview showed arthritis makes gripping hard, and my product analysis found three grippers that all slip on wet lids. My solution must be easy to hold, work on wet lids and fit in a kitchen drawer, and must not need small parts or strong wrists.',
                'Tariq, 14, forgets items because he rushes in the morning. Interviews and observation showed he needs a visible reminder rather than a list. The product must be seen by the door, take under ten seconds to check and cost under a small budget, and must not need an app.',
              ],
              celebrateKeywords: ['needs', 'showed', 'found', 'must', 'must not', 'evidence'],
              points: 10,
            },
          ],
        },
        {
          key: 'criteria',
          label: 'Measurable success criteria',
          icon: '📏',
          criterion: 'A.iv',
          strandLabel: CRITERION_A_LABELS['A.iv'],
          brief: { title: 'Brief: four to six, all checkable', points: ['Each criterion has a number or a clear yes/no test.', 'Include at least one material or making criterion.', 'Say what evidence each one comes from.'] },
          fields: [
            {
              key: 'list',
              label: 'Success criteria',
              type: 'table',
              minRows: 5,
              columns: [
                { key: 'criterion', label: 'Criterion', placeholder: 'e.g. Handle at least 3 cm thick' },
                { key: 'measure', label: 'How I will measure it', placeholder: 'e.g. Ruler' },
                { key: 'type', label: 'Type', placeholder: 'user / function / size / material / impact' },
                { key: 'evidence', label: 'Comes from', placeholder: 'e.g. Interview with Rosa' },
              ],
            },
          ],
        },
        {
          key: 'material',
          label: 'A first idea for a material',
          icon: '🧱',
          criterion: 'A.iv',
          strandLabel: CRITERION_A_LABELS['A.iv'],
          blurb: 'Next week you will test materials. For now, make a first guess and say what you still need to find out.',
          fields: [
            { key: 'family', label: 'Material family you might use', type: 'select', options: ['Wood', 'Metal', 'Polymer (plastic)', 'Fibre / textile', 'Composite', 'Not sure yet'] },
            {
              key: 'question',
              label: 'What do you still need to find out about your material, and how would you test it?',
              type: 'textarea',
              exemplars: [
                'I need to find out if silicone stays grippy when wet. I could test it by wetting a lid and measuring how much force it takes to slip, and where the silicone comes from.',
                'I need to know if card is strong enough to hold keys. I could hang a weight on a piece and see if it bends more than 5 mm.',
              ],
              celebrateKeywords: ['test', 'measure', 'find out', 'where', 'strong'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'reflect',
      label: 'Journal Entry and Reflection',
      icon: '🪞',
      block: BLOCK2,
      minutes: 5,
      intro: { title: '🪞 Dated journal entry', blurb: 'Finish by writing a short, dated journal entry. Work at your own pace: no need to click Next.' },
      sections: [
        {
          key: 'journal',
          label: 'Journal entry',
          icon: '📓',
          criterion: 'Reflection',
          strandLabel: 'Keep a dated journal and reflect on your learning',
          fields: [
            { key: 'date', label: 'Date', type: 'text', placeholder: 'e.g. 22 September 2026' },
            {
              key: 'entry',
              label: 'What did you learn today about your user and your research?',
              type: 'textarea',
              exemplars: [
                'Today I learned that my user’s real problem is different from what I assumed. The interview showed it is the rush, not the bag, and my product analysis showed none of the existing products solves that.',
                'I learned that a plan needs a method, a source and a purpose for every step, and that comparing three products shows gaps a single product would hide.',
              ],
              celebrateKeywords: ['learned', 'showed', 'assumed', 'because', 'next'],
              points: 10,
            },
            {
              key: 'next',
              label: 'What is one thing you would do differently in your research, and what is your next step?',
              type: 'textarea',
              exemplars: [
                'I would interview a second person because one interview gives only one view. My next step is to ask a classmate the same questions and compare.',
                'I would rank my plan better because some steps depended on others. Next I will finish my evidence log and choose materials to test.',
              ],
              celebrateKeywords: ['differently', 'next', 'because', 'second', 'compare'],
              points: 10,
            },
            { key: 'confidence', label: 'How confident are you in your brief?', type: 'select', options: ['Very confident', 'Fairly confident', 'A bit unsure', 'I need help'] },
          ],
        },
      ],
    },
    {
      type: 'grading',
      key: 'grading',
      label: 'Criterion A Review',
      icon: '📋',
      intro: { title: '📋 Criterion A: Inquiring and Analysing', blurb: 'Grade each student against A.i–A.iv (1–8) from their work across both blocks, using the fuzzy-match suggestions as a guide.' },
      strands: [
        { key: 'A.i', label: 'A.i Explain and justify the need for a solution' },
        { key: 'A.ii', label: 'A.ii Construct a research plan, stating and prioritising primary and secondary research' },
        { key: 'A.iii', label: 'A.iii Analyse a group of similar products' },
        { key: 'A.iv', label: 'A.iv Develop a design brief that presents the analysis' },
      ],
    },
  ],
}
