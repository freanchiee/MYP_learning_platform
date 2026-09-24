// MYP2 — Designing for Everyday Needs, Weeks 1–2. A toned-down cousin of the
// MYP4 "Prototyping for People" activity, built around the school's MYP2
// unit (Year 3 objectives): Week 1 = identify a real need for a real user
// (Criterion A.i, explain and justify the need); Week 2 = understand that
// user with evidence and plan the research (A.ii, a research plan that
// states and prioritises primary and secondary research).
//
// Simplified vs MYP4 on purpose: plain language, smaller tables, no AI
// persona interview (the unit itself says "interviews or role cards" — the
// teacher hands out role cards, students record the interview here), and a
// short quick-fire round on respectful interview questions instead.
//
// Bridge-map hooks for Year 2 (MYP Design -> DP DT): name a real client, not a
// generic "user"; interview a named user; keep a dated design journal.
//
// `exemplars` are never shown to students — they only feed the fuzzy-match
// auto-score suggestion on the teacher's review screen (WorksheetReview.tsx).

import type { LiveActivityDefinition } from './types'

export const MYP2_EVERYDAY_NEEDS: LiveActivityDefinition = {
  id: 'myp2-everyday-needs',
  year: 'MYP2',
  title: 'Designing for Everyday Needs',
  subtitle: 'Weeks 1–2 — find a real need, choose a real person to design for, and plan how to understand them.',
  icon: '🎒',
  theme: { accent: '#0E7A72', from: '#0B1F1E', via: '#123230', to: '#1A403D' },
  debriefQuestions: [
    'Who is your user, and how do you know what they really need?',
    'Which of your assumptions turned out to be wrong?',
    'Which research will you do first, and why?',
    'To what extent should empathy for your user matter more than time and materials?',
  ],
  stages: [
    {
      type: 'mcq',
      key: 'sort',
      label: 'Observation, Problem or Opportunity?',
      icon: '🔍',
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: {
        title: '🔍 Observe before you design',
        blurb: 'Good designers keep three things apart: what they SEE, what is WRONG, and what they could DO about it. Sort each statement.',
      },
      questions: [
        {
          icon: '🚪', context: 'The corridor',
          q: 'At 10:30 the corridor by the science lab has about 60 students in it.',
          options: [
            'An observation — something you can see or hear, with no opinion added.',
            'A problem — something that is not working well for a person.',
            'A design opportunity — a problem written so a designer can start solving it.',
          ],
          correct: 0,
        },
        {
          icon: '🚪', context: 'The corridor',
          q: 'Younger students get pushed in the narrow corridor, so they arrive late and feel nervous.',
          options: [
            'A problem — something that is not working well for a person.',
            'An observation — something you can see or hear, with no opinion added.',
            'A design opportunity — a problem written so a designer can start solving it.',
          ],
          correct: 0,
        },
        {
          icon: '🚪', context: 'The corridor',
          q: 'How might we help students move safely between lessons when the corridor is busy?',
          options: [
            'A design opportunity — a problem written so a designer can start solving it.',
            'An observation — something you can see or hear, with no opinion added.',
            'A problem — something that is not working well for a person.',
          ],
          correct: 0,
        },
        {
          icon: '🎒', context: 'School bags',
          q: 'Some students carry their bag on one shoulder.',
          options: [
            'An observation — something you can see or hear, with no opinion added.',
            'A problem — something that is not working well for a person.',
            'A design opportunity — a problem written so a designer can start solving it.',
          ],
          correct: 0,
        },
        {
          icon: '🎒', context: 'School bags',
          q: 'Heavy bags hurt some students’ backs because there is nowhere to leave books between lessons.',
          options: [
            'A problem — something that is not working well for a person.',
            'An observation — something you can see or hear, with no opinion added.',
            'A design opportunity — a problem written so a designer can start solving it.',
          ],
          correct: 0,
        },
        {
          icon: '🎒', context: 'School bags',
          q: 'How might we help students carry fewer books around all day?',
          options: [
            'A design opportunity — a problem written so a designer can start solving it.',
            'A problem — something that is not working well for a person.',
            'An observation — something you can see or hear, with no opinion added.',
          ],
          correct: 0,
        },
        {
          icon: '🍽️', context: 'Lunch',
          q: 'Students at the back of the lunch queue often have only a few minutes left to eat, so they rush.',
          options: [
            'A problem — something that is not working well for a person.',
            'An observation — something you can see or hear, with no opinion added.',
            'A design opportunity — a problem written so a designer can start solving it.',
          ],
          correct: 0,
        },
        {
          icon: '📝', context: 'Homework',
          q: 'The homework board is at the back of the room, written in small handwriting.',
          options: [
            'An observation — something you can see or hear, with no opinion added.',
            'A design opportunity — a problem written so a designer can start solving it.',
            'A problem — something that is not working well for a person.',
          ],
          correct: 0,
        },
        {
          icon: '📝', context: 'Homework',
          q: 'How might we make the homework board easy to read from every seat?',
          options: [
            'A design opportunity — a problem written so a designer can start solving it.',
            'An observation — something you can see or hear, with no opinion added.',
            'A problem — something that is not working well for a person.',
          ],
          correct: 0,
        },
      ],
    },

    {
      type: 'worksheet',
      key: 'week1',
      label: 'Week 1: Find Your Need',
      icon: '🧭',
      intro: {
        title: '🧭 Week 1: Find a need worth solving',
        blurb: 'Pick a challenge direction, look carefully, and turn what you notice into a design opportunity for a real person your teacher approves. Work at your own pace — no need to click Next.',
      },
      sections: [
        {
          key: 'direction',
          label: 'Challenge direction',
          icon: '🧭',
          blurb: 'Which part of everyday life do you want to improve?',
          fields: [
            {
              key: 'direction',
              label: 'My challenge direction',
              type: 'select',
              options: ['Physical space', 'Everyday routine', 'Learning experience', 'Inclusion', 'Community', 'Wellbeing'],
            },
          ],
        },
        {
          key: 'observe',
          label: 'Observe',
          icon: '👀',
          blurb: 'Look carefully for a few minutes. Write ONLY what you can see or hear — no opinions yet.',
          fields: [
            {
              key: 'log',
              label: 'My observation log',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'what', label: 'What I saw or heard', placeholder: 'e.g. Two students waited at the door for a minute' },
                { key: 'where', label: 'Where and when', placeholder: 'e.g. Science corridor, 10:30' },
                { key: 'who', label: 'Who it affects', placeholder: 'e.g. Younger students' },
              ],
            },
          ],
        },
        {
          key: 'problem',
          label: 'Problem',
          icon: '⚠️',
          blurb: 'Choose ONE observation. What is not working, and for whom?',
          fields: [
            {
              key: 'problem',
              label: 'The problem, in one or two sentences',
              type: 'textarea',
              hint: 'Say who is affected, what goes wrong, and why it matters.',
              exemplars: [
                'Younger students get pushed in the narrow corridor between lessons, so they arrive late and feel nervous.',
                'My user struggles to carry a heavy bag all day because there is nowhere to leave books, which makes their back hurt.',
                'It is hard for students at the end of the lunch queue to finish eating in time, so they rush and sometimes go hungry.',
              ],
              celebrateKeywords: ['because', 'struggle', 'hard to', 'so they'],
              points: 10,
            },
          ],
        },
        {
          key: 'opportunity',
          label: 'Opportunity',
          icon: '💡',
          blurb: 'Now turn the problem into a design opportunity that a designer could act on.',
          fields: [
            {
              key: 'statement',
              label: 'My opportunity statement',
              type: 'textarea',
              hint: 'Start with “How might we…”',
              placeholder: 'How might we…',
              exemplars: [
                'How might we help younger students move safely between lessons so that they arrive on time and feel calm?',
                'How might we help students carry fewer books around all day so that their backs do not hurt?',
                'How might we make the lunch queue fairer so that everyone has enough time to eat?',
              ],
              celebrateKeywords: ['how might we', 'so that', 'help'],
              points: 10,
            },
          ],
        },
        {
          key: 'user',
          label: 'My user',
          icon: '🧑',
          blurb: 'Designers work for a real, named person — not “everyone”. Choose someone your teacher can approve.',
          fields: [
            { key: 'name', label: 'Who is your user?', type: 'text', placeholder: 'e.g. My cousin Arjun, 9 — or the name on a role card' },
            {
              key: 'who',
              label: 'Who are they?',
              type: 'select',
              options: ['A classmate', 'A family member', 'A teacher-approved community member', 'A role card from my teacher'],
            },
            {
              key: 'why',
              label: 'Why does this need matter to them?',
              type: 'textarea',
              hint: 'Explain and justify: how does the problem affect their day, and what would improve if it were solved?',
              exemplars: [
                'This matters to my cousin because he carries his bag every day, and if it were easier he would feel less tired and more ready to learn.',
                'Arjun feels stressed every morning because he is always looking for his things, so a better routine would help him start the day calmly.',
                'The need matters because it affects how my user feels at school every day, and solving it would make school safer and more enjoyable.',
              ],
              celebrateKeywords: ['because', 'every day', 'feel', 'so that'],
              points: 10,
            },
          ],
        },
        {
          key: 'journal',
          label: 'Design journal',
          icon: '📓',
          blurb: 'Designers keep a dated journal. Add today’s date and one thing you learned or wondered about.',
          fields: [
            { key: 'date', label: 'Date', type: 'text', placeholder: 'e.g. 22 Sep' },
            { key: 'entry', label: 'Journal entry', type: 'textarea', hint: 'What surprised you this week? What are you still unsure about?' },
          ],
        },
      ],
    },

    {
      type: 'openIdeas',
      key: 'ask',
      label: 'Ask Better Questions',
      icon: '🎤',
      pointsPerSubmission: 10,
      prompts: [
        {
          icon: '🎤',
          text: 'Rewrite this leading question so it is open and respectful: “You hate carrying your heavy bag, don’t you?”',
          exemplars: [
            'How do you feel about carrying your bag during the school day?',
            'Tell me what carrying your bag is like at the end of the day.',
          ],
          celebrateKeywords: ['how', 'what', 'tell me'],
        },
        {
          icon: '🎤',
          text: 'Turn this yes/no question into one that gets a story: “Is lunch too crowded?”',
          exemplars: [
            'What happens when you go to lunch on a busy day?',
            'Can you tell me about the last time lunch was crowded?',
          ],
          celebrateKeywords: ['what', 'tell me', 'last time'],
        },
        {
          icon: '🎤',
          text: 'Rewrite this so it doesn’t assume the answer: “Why is the corridor so unsafe?”',
          exemplars: [
            'How would you describe the corridor between lessons?',
            'What is it like to walk along the corridor at break time?',
          ],
          celebrateKeywords: ['how', 'what'],
        },
        {
          icon: '🎤',
          text: 'Someone says: “I just skip breakfast because there is no time.” Write ONE respectful follow-up question.',
          exemplars: [
            'What makes it hard to find time in the morning?',
            'Can you tell me more about your mornings?',
            'What would make your mornings easier?',
          ],
          celebrateKeywords: ['tell me more', 'what', 'how'],
        },
        {
          icon: '🎤',
          text: 'Think of YOUR user’s need. Write a question that asks about a real moment, not an opinion.',
          exemplars: [
            'Can you tell me about a time when this was hard for you?',
            'What happened the last time this got in your way?',
          ],
          celebrateKeywords: ['tell me about a time', 'last time', 'what happened'],
        },
      ],
    },

    {
      type: 'worksheet',
      key: 'week2',
      label: 'Week 2: Understand Your User',
      icon: '🔎',
      intro: {
        title: '🔎 Week 2: Understand your user',
        blurb: 'Find out what your user really needs — with evidence, not guesses. Interview your user (or use a role card from your teacher), then plan the research you still need.',
      },
      sections: [
        {
          key: 'interview',
          label: 'Interview',
          icon: '🎤',
          blurb: 'Ask open, respectful questions. Write what they SAID, then mark whether it is evidence or something you assumed.',
          fields: [
            {
              key: 'record',
              label: 'My interview record',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'q', label: 'My question', placeholder: 'e.g. What is your morning like before school?' },
                { key: 'said', label: 'What they said', placeholder: 'Write it in their words' },
                { key: 'type', label: 'Evidence or assumption?', placeholder: 'Evidence / Assumption' },
              ],
            },
          ],
        },
        {
          key: 'assumptions',
          label: 'Assumptions',
          icon: '🤔',
          blurb: 'What did you assume about your user BEFORE you asked? Turn each assumption into a question you can research.',
          fields: [
            {
              key: 'rows',
              label: 'From assumption to research question',
              type: 'table',
              minRows: 2,
              columns: [
                { key: 'assume', label: 'I assumed…', placeholder: 'e.g. My user hates the crowd' },
                { key: 'question', label: 'So my research question is…', placeholder: 'e.g. Which times of day is the corridor hardest for my user?' },
              ],
            },
          ],
        },
        {
          key: 'plan',
          label: 'Research plan',
          icon: '📋',
          blurb: 'A research plan says what you need to find out, how, and what comes FIRST. Primary research = you collect it yourself. Secondary research = someone else already collected it.',
          fields: [
            {
              key: 'rows',
              label: 'My research plan',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'find', label: 'What I need to find out', placeholder: 'e.g. How long does the queue take?' },
                { key: 'kind', label: 'Primary or secondary?', placeholder: 'Primary / Secondary' },
                { key: 'method', label: 'How I will find out', placeholder: 'e.g. Time the queue on three days' },
                { key: 'order', label: 'Priority (1 = first)', placeholder: '1, 2, 3…' },
              ],
            },
          ],
        },
        {
          key: 'journey',
          label: 'User journey',
          icon: '🗺️',
          blurb: 'Walk through your user’s day around this need, step by step. Where does it go wrong?',
          fields: [
            {
              key: 'steps',
              label: 'My user’s journey',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'step', label: 'Step', placeholder: 'e.g. Packs bag' },
                { key: 'does', label: 'What my user does', placeholder: 'e.g. Puts every book in, just in case' },
                { key: 'wrong', label: 'What goes wrong or feels hard', placeholder: 'e.g. Bag is too heavy to lift' },
              ],
            },
          ],
        },
        {
          key: 'findings',
          label: 'What I learned',
          icon: '✅',
          blurb: 'Bring it together, using your evidence.',
          fields: [
            {
              key: 'summary',
              label: 'What does your user really need?',
              type: 'textarea',
              hint: 'Two or three sentences. Use evidence — “My user said…” or “I observed…” — and explain why the need is worth solving.',
              exemplars: [
                'My user said that carrying a heavy bag every day hurts their back, and I observed them rest it on the floor between lessons, so they need a way to carry less.',
                'From my interview I learned that my user forgets homework because it is written in different places; the evidence shows they need one clear place to check.',
                'I observed and my user confirmed that crowded corridors make them late and nervous, so the real need is a calmer, safer way to get between classes.',
              ],
              celebrateKeywords: ['said', 'observed', 'evidence', 'because'],
              points: 10,
            },
            {
              key: 'change',
              label: 'What changed from your first idea?',
              type: 'textarea',
              hint: 'Did talking to your user change what you thought the problem was?',
              exemplars: [
                'At first I assumed my user wanted a lighter bag, but they said the real problem is having nowhere to keep books, so my focus changed.',
                'I realised the problem was not the time but the noise, which is different from what I first thought.',
              ],
              celebrateKeywords: ['changed', 'realised', 'instead', 'assumed'],
              points: 10,
            },
          ],
        },
        {
          key: 'journal',
          label: 'Design journal',
          icon: '📓',
          blurb: 'Date your entry and record one thing you learned from your user.',
          fields: [
            { key: 'date', label: 'Date', type: 'text', placeholder: 'e.g. 29 Sep' },
            { key: 'entry', label: 'Journal entry', type: 'textarea', hint: 'What did your user say that surprised you?' },
          ],
        },
      ],
    },

    {
      type: 'grading',
      key: 'grading',
      label: 'Criterion A Review (Weeks 1–2)',
      icon: '📋',
      intro: {
        title: '📋 Criterion A: Weeks 1–2 review',
        blurb: 'Grade each student’s need, user and research plan against A.i and A.ii. (A.iii product analysis and A.iv the design brief follow in Weeks 3–4.)',
      },
      strands: [
        { key: 'A.i', label: 'Explain and justify the need for a solution to a problem' },
        { key: 'A.ii', label: 'Construct a research plan that states and prioritises the primary and secondary research needed' },
      ],
    },
  ],
}
