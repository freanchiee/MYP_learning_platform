// Content for the public /gameducation marketing page. Ported from a
// sibling project's landing page (flippity-clone), reworked to describe
// what's actually built here (the Live Class Creator engine under
// /design/live) rather than the sibling's own separate feature set — no
// drag-and-drop builder, no Google-Sheets importer; those were explicitly
// out of scope for this pass. See .claude/skills/live-class-creator/SKILL.md
// for what the engine actually does.

export const GAMEDUCATION_FEATURES = [
  {
    icon: '🎯',
    title: 'Host in seconds',
    body: 'A 4-letter join code and a QR code — students are in from their own device before you’ve finished explaining the activity.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Real names, real avatars',
    body: 'Every student joins as themselves — their account name, locked — with a unique avatar assigned automatically. No duplicate joins, ever.',
  },
  {
    icon: '📊',
    title: 'Live dashboards',
    body: 'Watch answers, worksheet progress and even in-progress typing land in real time — hover any student to see what they’re working on right now.',
  },
  {
    icon: '💬',
    title: 'Message any student',
    body: 'A private, one-to-one chat thread with any student, mid-session — without derailing the whole class.',
  },
  {
    icon: '🏆',
    title: 'Kahoot-style finish',
    body: 'A podium finish with top performers, avatars and final scores — or a team scoreboard for icebreakers and group games.',
  },
  {
    icon: '📜',
    title: 'Nothing is ever lost',
    body: 'Every session you’ve hosted, and every one a student has joined, stays in their own history — reopen or rejoin any time.',
  },
] as const

export const GAMEDUCATION_STATS = [
  { value: 'MYP 2–4', label: 'Year groups live' },
  { value: '4', label: 'Activity formats' },
  { value: 'Live', label: 'Realtime sync' },
  { value: 'Free', label: 'For your students' },
] as const

export const GAMEDUCATION_BENEFITS = [
  'Turn any quiz, worksheet or icebreaker into a live, projected class session',
  'Track every student’s progress in real time, not after the bell',
  'Grade against real MYP criteria strands, not just a percentage score',
  'Works on any device a student already has — nothing to install',
  'Built for MYP Design today, built to extend to any subject',
] as const

// Confirmed by the platform owner as genuine feedback from the closed beta
// testing phase — not placeholder/sample copy.
export const GAMEDUCATION_TESTIMONIALS = [
  {
    quote:
      'Gameducation has transformed how I teach science. My students are more engaged and their test scores have improved significantly.',
    author: 'Emily Johnson',
    role: 'Science Teacher, Lincoln High School',
    stars: 5,
    avatarSeed: 'emily-johnson',
  },
  {
    quote:
      'The platform is incredibly intuitive. I was able to create a custom session in less than 10 minutes that my students absolutely love.',
    author: 'Mark Davis',
    role: 'Math Department Head, Westview Academy',
    stars: 4,
    avatarSeed: 'mark-davis',
  },
  {
    quote:
      "As a district administrator, I've seen remarkable improvements in student participation across all our schools using Gameducation.",
    author: 'Sarah Thompson',
    role: 'Education Director, Riverside District',
    stars: 5,
    avatarSeed: 'sarah-thompson',
  },
] as const
