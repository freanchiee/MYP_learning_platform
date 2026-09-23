// MYP3 — Unit 1 Kickoff. Live Class Creator activity: two self-paced MCQ
// stages (unpack the unit, spot the opportunity) followed by a teacher
// grading stage against Criterion A strands. Adapted from the reference
// build `unit1-kickoff.html` — see .claude/skills/live-class-creator.

import type { LiveActivityDefinition } from './types'

export const MYP3_UNIT1_KICKOFF: LiveActivityDefinition = {
  id: 'myp3-unit1-kickoff',
  year: 'MYP3',
  title: 'Unit 1 Kickoff',
  subtitle: 'Unpack the unit, then spot the real opportunity in six everyday scenes.',
  icon: '🧩',
  theme: { accent: '#2456C9', from: '#0E1626', via: '#152238', to: '#1C2A40' },
  stages: [
    {
      type: 'mcq',
      key: 'unpack',
      label: 'Unpack the Unit',
      icon: '🧭',
      pacing: 'self-paced',
      intro: {
        title: '🧭 Unpack the Unit',
        blurb: "Before we design anything — let's lock in what this unit is actually about.",
      },
      questions: [
        { q: "What is this unit's Key Concept?", options: ['Development', 'Change', 'Identity', 'Communication'], correct: 0 },
        { q: "What is this unit's Global Context?", options: ['Globalisation and sustainability', 'Personal and cultural expression', 'Fairness and development', 'Scientific and technical innovation'], correct: 0 },
        { q: 'The Statement of Inquiry says designers gather evidence responsibly, understanding how sourcing and testing affect…', options: ['Both function and impact', 'Only how it looks', 'Only the cost', 'Only how fast it is made'], correct: 0 },
        { q: 'Which of these is a real NEED, not a want?', options: ['A way to find your pencils without emptying your whole bag', 'A cooler-looking pencil case', 'A pencil case with your favourite characters on it', 'A bigger pencil case'], correct: 0 },
        { q: 'Which of these is NOT one of the six challenge directions?', options: ['Physical space', 'Inclusion and accessibility', 'Exam revision techniques', 'Everyday routine'], correct: 2 },
        { q: 'A real research plan names, for each thing you need to find out…', options: ['The method, primary/secondary, the order, and a timeframe', 'Just a list of questions', 'Only the questions you like best', 'How long the interview will take'], correct: 0 },
      ],
    },
    {
      type: 'mcq',
      key: 'spot',
      label: 'Spot the Opportunity',
      icon: '🔍',
      pacing: 'self-paced',
      intro: {
        title: '🔍 Spot the Opportunity',
        blurb: 'Now switch into Design Detective mode. For each everyday digital-life scene, pick the option that names a real problem — not a guess, a want, or someone to blame.',
      },
      questions: [
        { icon: '🔌', context: 'Charging cables', q: 'Charging cables for laptops and tablets get tangled and lost in bags.', options: ['Tangled or missing cables waste time and cause frustration.', 'Cables should be more colourful.', 'Students should not bring devices to school.', 'Laptops charge too slowly.'], correct: 0 },
        { icon: '📱', context: 'Video calls', q: 'Students propping phones against books for video calls find them sliding or falling over.', options: ['An unstable phone makes hands-free video calls hard to rely on.', 'Phones are too heavy.', 'Students should not use phones for calls.', 'Books are the wrong shape.'], correct: 0 },
        { icon: '🎧', context: 'Headphones', q: 'Headphones left loose in bags get their wires knotted and the earbuds scratched.', options: ['Loose storage damages headphones and wastes time untangling them.', 'Headphones are too expensive.', 'Students should only use wireless.', 'Bags are too small.'], correct: 0 },
        { icon: '🔋', context: 'Shared power', q: 'In the design room, three students often need the one wall socket near the workbench at the same time.', options: ['Limited access to the socket creates waiting and disrupts the work session.', 'There should be no phones in class.', 'The workbench is in the wrong place.', 'Students should charge devices at home only.'], correct: 0 },
        { icon: '🎒', context: 'Studio storage', q: 'Some students cannot find their Design folder or supplies quickly when a lesson starts.', options: ['Disorganised storage wastes lesson time hunting for materials.', 'Lockers are too small for everyone.', 'Students should carry less.', 'The school needs more lockers.'], correct: 0 },
      ],
    },
    {
      type: 'grading',
      key: 'grading',
      label: 'Criterion A Review',
      icon: '📋',
      intro: { title: '📋 Criterion A: Research & Analysis', blurb: 'Grade each student against A.i–A.iv (1–8) based on their in-class discussion and notebook work.' },
      strands: [
        { key: 'A.i', label: 'Explain & justify the need, for a specified client' },
        { key: 'A.ii', label: 'Identify & prioritize research' },
        { key: 'A.iii', label: 'Analyse a range of existing products' },
        { key: 'A.iv', label: 'Detailed brief summarising the research' },
      ],
    },
  ],
}
