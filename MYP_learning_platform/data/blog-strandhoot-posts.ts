// SEO blog posts for Strandhoot (the live, strand-assessed MYP classroom activities).
// All content is original, written for CritABCD. Comparisons with Kahoot are deliberately fair: Kahoot is a
// good quick-quiz tool, and these posts say what Strandhoot does differently rather than running it down.
// Every Strandhoot capability named here exists in the product (join code, self-paced mode, live dashboard,
// typing preview, private chat, podium, strand grading 1-8, work PDFs); keep it that way when you edit.

import type { BlogPost } from './blog'

const DATE = '2026-10-15'
const S = '/strandhoot'

export const STRANDHOOT_POSTS: BlogPost[] = [
  {
    slug: 'kahoot-alternative-for-myp',
    seoTitle: 'Kahoot Alternative for IB MYP Teachers',
    title: 'A Kahoot Alternative for IB MYP Teachers: Live Classes Graded Strand by Strand',
    description:
      'Looking for a Kahoot alternative built for the IB MYP? Compare Kahoot with Strandhoot: live join codes and podiums, plus worksheets, sources, interviews and evidence against every criterion strand.',
    datePublished: DATE,
    readMinutes: 6,
    tags: ['Strandhoot', 'Live classes', 'Teaching'],
    intro:
      'Kahoot is brilliant at one thing: a fast, noisy, shared quiz where everyone answers on their own device. If that is all you need, keep using it. But MYP teachers also have to gather evidence against criteria strands such as B.ii (follow an action plan) or D.iii (analyse sources by origin and purpose), and a right-or-wrong score cannot show that. This is where a Kahoot alternative built for the MYP helps.',
    sections: [
      {
        heading: 'What teachers like about Kahoot, and what they still need',
        body: [
          'Kahoot gives you a join code, a lively shared screen, instant feedback and a leaderboard. It has also grown beyond quizzes, with study tools such as flashcards. Those strengths are real, and Strandhoot keeps the parts that make live class feel like a game: a code to join, a live dashboard, a podium at the end.',
          'The gap appears at the point of assessment. MYP criteria are judged on how well a student explains, investigates, evaluates and communicates, not only on whether a multiple-choice option was correct.',
        ],
      },
      {
        heading: 'How Strandhoot is different',
        bullets: [
          'Evidence by strand: every worksheet section is tagged with the criterion strand it evidences (for example B.i or D.iv), so the teacher sees evidence against strands rather than one total.',
          'More than quizzes: checkpoint quizzes sit alongside mini-lessons, worksheets, source packs, tables, and interviews with fictional characters.',
          'Teacher or self-paced: host it live with a join code, or let each student move at their own speed. Work saves automatically.',
          'Live visibility: see where every student is, watch drafts as they are typed, and send a private message or a quick reaction.',
          'Grading with judgement: each activity ends with a criteria review where the teacher scores every strand from 1 to 8. Suggested scores are only a first signal.',
          'Records that last: the class dashboard keeps every session, and each student can download their own work as a PDF.',
        ],
      },
      {
        heading: 'Kahoot and Strandhoot side by side',
        bullets: [
          'Best for quick recall: Kahoot. Best for gathering MYP strand evidence: Strandhoot.',
          'Question formats: Kahoot centres on quiz questions. Strandhoot adds worksheets, source analysis and interviews.',
          'What you see afterwards: Kahoot shows who answered correctly. Strandhoot shows each student’s evidence per criterion strand.',
          'Subject fit: Kahoot suits any subject. Strandhoot is built around MYP criteria A to D.',
        ],
      },
      {
        heading: 'Try one that exists today',
        body: [
          'MYP4 Geography (Cities, Water and Fairness) and MYP4 History (The Industrial Revolution: Change for Whom?) are complete Unit 1 activities, each with two checkpoint quizzes, a source pack, interviews with fictional characters and a teacher grading screen. You can preview the strands and stages for each one without logging in.',
        ],
      },
    ],
    faq: [
      { q: 'Is Strandhoot a free Kahoot alternative?', a: 'The exemplar activities can be tried without charge, and you can leave your email to hear about the next free ones. Students sign in so their work is saved.' },
      { q: 'Can I still use Kahoot?', a: 'Yes. Many teachers use Kahoot for quick recall and Strandhoot when they need evidence against MYP criteria strands.' },
      { q: 'Is it only for MYP Design?', a: 'No. There are Design activities for several years, plus MYP4 Geography and History, with more subjects being added.' },
      { q: 'Do students need a join code?', a: 'For a live class, yes: the teacher shares a code. Activities can also be self-paced.' },
    ],
    related: [
      { label: 'Strandhoot: all live activities', href: S },
      { label: 'What is Strandhoot?', href: '/blog/what-is-strandhoot' },
      { label: 'MYP4 Geography activity', href: `${S}/myp4-geography-urban-water` },
      { label: 'MYP4 History activity', href: `${S}/myp4-history-industrial-revolution` },
    ],
  },
  {
    slug: 'what-is-strandhoot',
    seoTitle: 'What Is Strandhoot? Live MYP Classes by Strand',
    title: 'What Is Strandhoot? Playing a Live MYP Class, Strand by Strand',
    description:
      'Strandhoot is a live, game-style classroom activity for the IB MYP. Join with a code, work through checkpoints, sources and interviews, and see progress against every criterion strand.',
    datePublished: DATE,
    readMinutes: 5,
    tags: ['Strandhoot', 'Live classes', 'MYP'],
    intro:
      'If you have ever played a Kahoot, you already know the feeling: a code on the board, everyone on a device, a leaderboard at the end. Strandhoot keeps that feeling and changes what happens in the middle. Instead of a string of quiz questions, students move through a short investigation, and progress is tracked against the MYP assessment strands.',
    sections: [
      {
        heading: 'The name',
        body: ['A strand is one line of an MYP criterion, for example A.i (use terminology) or D.iii (analyse sources by origin and purpose). “Strandhoot” is a live class where you can see how every student is doing on each strand.'],
      },
      {
        heading: 'How it works for a student',
        bullets: [
          'Join: enter the teacher’s code, or open a self-paced activity.',
          'Start Here: a short card sequence sets the scene, the key terms and the path through the strands.',
          'Checkpoint quizzes: quick multiple-choice rounds that show whether you are ready to move on.',
          'Investigate: choose a direction, write a research question, plan, interview a character and log evidence.',
          'Think and communicate: judge sources, weigh perspectives, argue, structure a report and list references.',
          'Finish: see your progress and, if your teacher wants, download your work as a PDF.',
        ],
      },
      {
        heading: 'How it works for a teacher',
        bullets: [
          'Host from any device and project the dashboard.',
          'See each student’s position and progress, typing previews, and a focus indicator.',
          'Message a student privately or send a quick reaction.',
          'Grade every strand from 1 to 8 with feedback. Checkpoint scores are a first signal only.',
          'Come back later: every session is kept in the class history.',
        ],
      },
      {
        heading: 'What is available now',
        body: ['Exemplar Unit 1 activities for MYP4 Geography (Cities, Water and Fairness) and MYP4 History (The Industrial Revolution: Change for Whom?), plus Design activities for MYP2 to MYP5. Open /strandhoot to see the full list and preview each one.'],
      },
    ],
    faq: [
      { q: 'What does Strandhoot mean?', a: 'A strand is one line of an MYP criterion, such as B.ii or D.iii. Strandhoot is a live class tracked strand by strand.' },
      { q: 'Is Strandhoot like Kahoot?', a: 'It shares the join code, live dashboard and podium, but adds worksheets, source analysis, interviews and strand-by-strand grading.' },
      { q: 'Who is it for?', a: 'IB MYP teachers and their students, roughly ages 11 to 16.' },
      { q: 'Do the AI interviews use real people?', a: 'No. The characters are fictional, and students are told their answers are leads to check, not evidence.' },
    ],
    related: [
      { label: 'Strandhoot: all live activities', href: S },
      { label: 'Kahoot alternative for MYP teachers', href: '/blog/kahoot-alternative-for-myp' },
      { label: 'Strandhoot for MYP teachers', href: '/blog/strandhoot-for-myp-teachers' },
    ],
  },
  {
    slug: 'strandhoot-for-myp-teachers',
    seoTitle: 'Strandhoot for MYP Teachers: Live Class Guide',
    title: 'Strandhoot for MYP Teachers: Run a Live Class and Grade It by Strand',
    description:
      'A practical guide for MYP teachers: host a Strandhoot live class, watch every student’s progress, and grade each criterion strand from 1 to 8, with single and double period plans.',
    datePublished: DATE,
    readMinutes: 6,
    tags: ['Strandhoot', 'Teaching', 'Live classes'],
    intro:
      'This is a hands-on guide for the teacher at the front of the room. It covers how to host, how a lesson fits a single or double period, what to watch for on the dashboard, and how to turn the evidence into a strand-by-strand grade.',
    sections: [
      {
        heading: 'Before the lesson',
        bullets: [
          'Pick an activity from /strandhoot and read its stages and strands.',
          'Create a class or open the activity directly, then choose “I’m hosting this for my class”.',
          'Share the join code. Students sign in so their work is saved against their name.',
          'For self-paced activities, tell students they can carry on from the same link next lesson.',
        ],
      },
      {
        heading: 'Planning single and double periods',
        body: ['Each stage shows a suggested time that only the teacher sees. For the MYP4 Geography and History activities, Lesson 1 (about 50 minutes) covers Start Here, Checkpoint 1, the Investigating mini-lesson and the Investigate worksheet. Lesson 2 covers the Source Pack, Checkpoint 2, Think and Communicate and the final card.'],
      },
      {
        heading: 'What to watch while students work',
        bullets: [
          'Where each student is, so you can help anyone who is stuck on a stage.',
          'Typing previews: hover a name to see a draft in progress.',
          'Checkpoint results: a low score on Checkpoint 1 flags strand A needs, a low score on Checkpoint 2 flags strand D needs.',
          'The focus dot, which shows whether a student has switched away from the tab.',
          'Private chat and quick reactions to nudge or praise without stopping the class.',
        ],
      },
      {
        heading: 'Grading each strand',
        body: [
          'Open the criteria review and score every strand from 1 to 8 with written feedback. The review screen shows each student’s written answers next to a suggested score. Treat it as a starting point: you decide.',
          'Each student can download their own work as a PDF, which is useful for portfolios and conversations with parents.',
        ],
      },
    ],
    faq: [
      { q: 'Can I host without a class?', a: 'Yes. Open the activity and choose “I’m hosting this for my class”, then share the code.' },
      { q: 'Does it work on phones and laptops?', a: 'Students can join from any device with a browser. The screens are designed to work well on a laptop.' },
      { q: 'Can I use it for summative assessment?', a: 'The grading screen is built for criterion judgements, but how you use any task for summative work is your school’s decision.' },
      { q: 'What if a student is absent?', a: 'Self-paced activities save progress, so they can pick up from the same link later.' },
    ],
    related: [
      { label: 'Strandhoot: all live activities', href: S },
      { label: 'Strandhoot for MYP coordinators', href: '/blog/strandhoot-for-myp-coordinators' },
      { label: 'MYP assessment criteria explained', href: '/blog/myp-assessment-criteria-explained' },
    ],
  },
  {
    slug: 'strandhoot-for-myp-coordinators',
    seoTitle: 'Strandhoot for MYP Coordinators and Schools',
    title: 'Strandhoot for MYP Coordinators: Strand Coverage, Records and Responsible AI Use',
    description:
      'What an MYP coordinator should know about Strandhoot: strand coverage across criteria, session records, student accounts, and how the fictional AI interviews are used.',
    datePublished: DATE,
    readMinutes: 5,
    tags: ['Strandhoot', 'MYP coordinators', 'Assessment'],
    intro:
      'Coordinators need to know three things before a school adopts a classroom tool: does it support criteria-based assessment, what records does it keep, and how does it use AI. This page answers those plainly, including what it does not claim.',
    sections: [
      {
        heading: 'Strand coverage',
        body: [
          'Each activity lists the criterion strands it evidences. The MYP4 Individuals and Societies exemplars cover all thirteen strands across criteria A to D (A.i to D.iv), and the Design activities map to the Design criteria. Every worksheet section shows its strand to the student, and the teacher’s criteria review scores each strand from 1 to 8.',
          'The I&S strand wording follows the IB’s published Year 3 and Year 5 statements, shortened into student language. Schools should check that it matches the wording in their own unit planners.',
        ],
      },
      {
        heading: 'Records and student work',
        bullets: [
          'Each student has one account-based record per session, so work is not duplicated or lost.',
          'The class dashboard keeps every session a teacher has hosted.',
          'Students can download their own work as a PDF.',
          'Teachers can see written answers, checkpoint results and their own grades together.',
        ],
      },
      {
        heading: 'How AI is used',
        body: [
          'The interview feature uses a small hosted language model to answer as a fictional character. The characters are invented composites, students are told that what they say is a lead to check and not evidence, and the transcript is saved so the teacher can see how the student questioned them.',
          'Checkpoint quizzes and the suggested scores on written answers are not AI judgements and never replace the teacher’s grade. Schools should still decide where interviews of this kind fit their academic integrity policy.',
        ],
      },
      {
        heading: 'What to ask next',
        body: ['If you would like activities for another subject or year, or want to run a pilot with a department, leave your email on the Strandhoot page and say what you need.'],
      },
    ],
    faq: [
      { q: 'Does Strandhoot replace teacher judgement?', a: 'No. Criterion scores are entered by the teacher. Suggested scores and checkpoint results are only a first signal.' },
      { q: 'Which subjects are covered?', a: 'Design activities for several years and MYP4 Geography and History exemplars, with more being added.' },
      { q: 'Is student work stored?', a: 'Yes. Work is saved to the student’s account so it can be reviewed, graded and downloaded.' },
      { q: 'Are the AI characters real people?', a: 'No. They are fictional composites and are labelled as such.' },
    ],
    related: [
      { label: 'Strandhoot: all live activities', href: S },
      { label: 'Strandhoot for MYP teachers', href: '/blog/strandhoot-for-myp-teachers' },
      { label: 'MYP grading explained', href: '/blog/myp-grading-explained' },
    ],
  },
]
