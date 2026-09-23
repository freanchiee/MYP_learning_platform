// MYP2 — Design Studio icebreaker. Live Class Creator activity: a
// team-based, host-paced MCQ round ("Spot the Need") followed by a
// quick-fire open-ideas round ("Idea Face-Off"). Adapted from the
// reference build `spot-the-need-live.html`, which also included
// Design Detective (tiered MCQ), Pictionary and Charades rounds played
// on a physical whiteboard with server-hidden secret words — those are
// intentionally left out of this v1 port (they need real-time
// round-timer + host-only-secret plumbing beyond the generic engine);
// see .claude/skills/live-class-creator/SKILL.md for how to extend it.

import type { LiveActivityDefinition } from './types'

export const MYP2_DESIGN_STUDIO: LiveActivityDefinition = {
  id: 'myp2-design-studio',
  year: 'MYP2',
  title: 'Design Studio Icebreaker',
  subtitle: 'Two teams. Spot the real need, then race to pitch the fastest idea.',
  icon: '🎨',
  theme: { accent: '#2456C9', from: '#0E1626', via: '#152238', to: '#1C2A40' },
  teams: [
    { name: 'Team Blueprints', short: 'Blueprints', icon: '🔵', color: '#2456C9' },
    { name: 'Team Innovators', short: 'Innovators', icon: '🟠', color: '#E8672A' },
  ],
  stages: [
    {
      type: 'mcq',
      key: 'spot',
      label: 'Spot the Need',
      icon: '🔍',
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: { title: '🔍 Spot the Need', blurb: 'Quick-fire multiple choice — spot the real problem hiding in each everyday scene.' },
      questions: [
        { icon: '🎒', context: 'School bags', q: "Some students' bags are so heavy that their shoulders hurt by the end of the day.", options: ['The weight is uncomfortable and could affect posture over time.', 'Students should just carry less to school.', 'Bags are the wrong colour for most students.', 'Heavy bags look untidy in the classroom.'], correct: 0 },
        { icon: '📚', context: 'Desks', q: 'Pencil cases, books and water bottles are always sliding off the edge of student desks.', options: ['Falling items interrupt learning and can damage belongings.', 'Desks are too small for modern classrooms.', 'Students do not listen during lessons.', 'Pencil cases are the wrong shape.'], correct: 0 },
        { icon: '📖', context: 'Classroom organisation', q: 'The classroom library often ends up with books in the wrong shelves by the end of the week.', options: ['Misplaced books are hard to find again, wasting reading time.', "There aren't enough books in the library.", 'Students do not like reading.', 'The shelves are too high to reach.'], correct: 0 },
        { icon: '📝', context: 'Homework', q: 'Some students forget which homework is due on which day.', options: ['Students without a reliable way to record it forget deadlines.', 'Teachers give too much homework.', 'Students are lazy about homework.', 'The board is too small to read.'], correct: 0 },
        { icon: '🍽️', context: 'Lunch', q: 'The lunch queue gets crowded and some younger students end up waiting the longest.', options: ['Younger, smaller students can get lost in a crowded queue.', "The canteen food isn't tasty enough.", 'Students eat lunch too slowly.', "There's only one type of lunch on offer."], correct: 0 },
        { icon: '⏰', context: 'Getting ready for school', q: 'Some students arrive at school without one of their books because they packed in a hurry.', options: ['Rushed mornings lead to forgotten items.', 'Students wake up too early.', 'School starts at the wrong time.', 'Uniforms are uncomfortable.'], correct: 0 },
        { icon: '📓', context: 'Studying', q: "Many students say they don't know where to start when revising for a test.", options: ['Without a starting point, revision time gets wasted or avoided.', 'Tests are too difficult for students.', "Students don't care about grades.", "Teachers don't explain topics well."], correct: 0 },
        { icon: '💻', context: 'Shared spaces', q: 'The shared computer and reading corner always has more students wanting to use it than there is space.', options: ["Students either wait a long time or don't get a turn at all.", "There aren't enough computers in the whole school.", "Students don't want to share.", 'The corner is in the wrong part of the room.'], correct: 0 },
        { icon: '🦯', context: 'Accessibility', q: 'A student using crutches finds it hard to carry their lunch tray across the cafeteria.', options: ['The student either needs help every day or struggles alone.', 'The cafeteria is too far from class.', 'The student should bring their own lunch.', 'Trays are the wrong colour.'], correct: 0 },
        { icon: '♻️', context: 'Shared spaces', q: 'Recycling and rubbish bins in the art room often get mixed up, so recyclable paper is thrown away.', options: ['Recyclable materials end up as waste by mistake.', "There isn't enough recycling in the school.", "Students don't care about the environment.", 'The art room is too messy in general.'], correct: 0 },
      ],
    },
    {
      type: 'openIdeas',
      key: 'idea',
      label: 'Idea Face-Off',
      icon: '💡',
      prompts: [
        { icon: '🎒', text: 'How might we make packing a school bag easier?' },
        { icon: '🪑', text: 'How might we help students keep their desks organised?' },
        { icon: '🏫', text: 'How might we make a shared classroom space easier to use?' },
        { icon: '📝', text: 'How might we help students remember their homework?' },
        { icon: '🍽️', text: 'How might we make the lunch queue fairer for everyone?' },
      ],
      constraintCards: [
        { icon: '♿', label: 'Accessibility', text: 'Your design must work for a user with limited hand mobility.' },
        { icon: '♻️', label: 'Sustainability', text: 'Use materials responsibly and consider the environmental impact.' },
        { icon: '💰', label: 'Cost', text: 'The solution should be affordable to make.' },
        { icon: '🏫', label: 'Context', text: 'The design must work inside a classroom.' },
        { icon: '👤', label: 'User', text: 'The solution must work for one specific user, not everyone.' },
        { icon: '⚠️', label: 'Safety', text: 'The design must avoid creating a new safety problem.' },
      ],
      bonusCategories: [
        { key: 'empathy', label: 'User Empathy', icon: '👤', points: 10 },
        { key: 'evidence', label: 'Evidence', icon: '🔎', points: 10 },
        { key: 'creativity', label: 'Creativity', icon: '💡', points: 10 },
        { key: 'function', label: 'Function', icon: '⚙️', points: 10 },
        { key: 'accessibility', label: 'Accessibility', icon: '♿', points: 10 },
        { key: 'responsible', label: 'Responsible Design', icon: '♻️', points: 10 },
      ],
    },
  ],
}
