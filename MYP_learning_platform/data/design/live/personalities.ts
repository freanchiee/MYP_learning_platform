// MYP4 "Prototyping for People" — well-known people students can choose as
// their target user for a *simulated* interview, two per accessibility track
// (matching the persona pack's directions in personas.ts).
//
// These are NOT chatbots we run: the game hands the student a ready-made
// prompt to paste into whichever AI assistant their school approves, and the
// AI role-plays the person. So the facts below are deliberately limited to
// widely-documented public information, and the prompt (buildInterviewPrompt)
// carries guardrails: it is an imagined role-play, the AI must not invent
// facts, quotes or medical details, and its answers are assumptions to check
// against real sources — not evidence. That last point is the design-education
// payoff: primary research is talking to a real user; a simulated interview
// is a stand-in that has to be verified with secondary research.

import type { Persona } from './personas'

export interface Personality {
  id: string
  direction: Persona['direction']
  icon: string
  name: string
  tagline: string
  /** Public, widely-documented facts — also fed into the prompt so the AI stays grounded. */
  facts: string[]
  /** Why this person's experience is useful to a designer on this track. */
  designRelevance: string
}

export const PERSONALITIES: Personality[] = [
  // ── One-handed tool ──────────────────────────────────────────────────────
  {
    id: 'jim-abbott', direction: 'onehand', icon: '⚾', name: 'Jim Abbott',
    tagline: 'Former Major League Baseball pitcher, born without a right hand',
    facts: [
      'Was born without a right hand',
      'Pitched in Major League Baseball in the late 1980s and 1990s, including a no-hitter for the New York Yankees in 1993',
      'Developed his own technique for switching his glove between his arm and his hand while pitching and fielding',
    ],
    designRelevance: 'Sports and school equipment assume two hands. Which workarounds did he invent himself, and what would have helped from the start?',
  },
  {
    id: 'bethany-hamilton', direction: 'onehand', icon: '🏄', name: 'Bethany Hamilton',
    tagline: 'Professional surfer who surfs with one arm',
    facts: [
      'Lost her left arm in a shark attack in 2003, when she was 13 years old',
      'Returned to surfing soon afterwards and has competed as a professional surfer',
      'Uses equipment adapted for surfing with one arm',
    ],
    designRelevance: 'Balance, grip and paddling with one arm — a very physical, real-world test of adapted equipment.',
  },

  // ── Low-vision object ────────────────────────────────────────────────────
  {
    id: 'stevie-wonder', direction: 'lowvision', icon: '🎹', name: 'Stevie Wonder',
    tagline: 'Singer-songwriter and multi-Grammy winner, blind since shortly after birth',
    facts: [
      'Has been blind since shortly after he was born',
      'A singer, songwriter and multi-instrumentalist who has won many Grammy Awards',
      'Has spoken publicly in support of accessibility for blind people',
    ],
    designRelevance: 'Music studios, stages and everyday devices are full of screens and small labels. How does he find his way around them without sight?',
  },
  {
    id: 'andrea-bocelli', direction: 'lowvision', icon: '🎤', name: 'Andrea Bocelli',
    tagline: 'Italian tenor who lost his remaining sight at age 12',
    facts: [
      'Was born with poor eyesight (congenital glaucoma)',
      'Lost the rest of his sight at age 12 after an accident during a football game',
      'An Italian tenor who has performed and recorded all over the world',
    ],
    designRelevance: 'He lost his sight in childhood and has travelled and worked internationally — what makes unfamiliar places and objects easier or harder?',
  },

  // ── Sensory organiser ────────────────────────────────────────────────────
  {
    id: 'temple-grandin', direction: 'sensory', icon: '🐄', name: 'Temple Grandin',
    tagline: 'Autistic professor and designer of livestock-handling equipment',
    facts: [
      'Is autistic and has written and spoken publicly about her sensory sensitivities',
      'Is a professor of animal science at Colorado State University',
      'Designed livestock-handling equipment, and built a "squeeze machine" to help calm her own anxiety',
    ],
    designRelevance: 'She is both a user and a designer: she built a product for her own sensory needs. What did she notice that other designers miss?',
  },
  {
    id: 'chris-packham', direction: 'sensory', icon: '🦉', name: 'Chris Packham',
    tagline: 'Naturalist and TV presenter who is publicly open about being autistic',
    facts: [
      'Is a British naturalist, wildlife photographer and television presenter',
      'Has spoken publicly about being autistic',
      'Has spoken publicly about his sensory experiences as an autistic person',
    ],
    designRelevance: 'Busy studios, travel and public places are sensory-heavy. What helps him manage them, and what makes things worse?',
  },

  // ── Elderly-friendly kitchen aid ─────────────────────────────────────────
  {
    id: 'mary-berry', direction: 'elderly', icon: '🍰', name: 'Mary Berry',
    tagline: 'British cook and TV presenter with decades of home-kitchen experience',
    facts: [
      'Was born in 1935',
      'A British cookery writer and television presenter, best known for baking and home cooking',
      'Has spent decades cooking in ordinary home kitchens',
    ],
    designRelevance: 'An expert in kitchen tools and routines, and an older user. Which tools has she stuck with for years, and why? (Do not assume she has any particular physical difficulty — ask.)',
  },
  {
    id: 'judi-dench', direction: 'elderly', icon: '🎭', name: 'Judi Dench',
    tagline: 'Actress who has spoken publicly about living with macular degeneration',
    facts: [
      'Was born in 1934 and has worked as a stage and screen actress for many decades',
      'Has spoken publicly about having age-related macular degeneration, which affects her central vision',
      'Has said in interviews that reading scripts is difficult and that others help by reading lines to her',
    ],
    designRelevance: 'An older user whose sight has changed. Think about labels, measuring and reading in a kitchen when small print is hard to see.',
  },

  // ── Classroom accessibility ──────────────────────────────────────────────
  {
    id: 'haben-girma', direction: 'classroom', icon: '⚖️', name: 'Haben Girma',
    tagline: 'Deafblind disability rights lawyer and author',
    facts: [
      'Is deafblind',
      'Was the first deafblind graduate of Harvard Law School',
      'Is a disability rights advocate and author who speaks about accessible technology and design',
      'Uses assistive technology, such as a braille display, to communicate',
    ],
    designRelevance: 'She has studied in classrooms, lecture halls and libraries — and campaigns for accessible design. What did schools get wrong, and what worked?',
  },
  {
    id: 'marlee-matlin', direction: 'classroom', icon: '🎬', name: 'Marlee Matlin',
    tagline: 'Deaf actress and the first Deaf performer to win an Academy Award',
    facts: [
      'Is Deaf',
      'Won the Academy Award for Best Actress for "Children of a Lesser God", the first Deaf performer to do so',
      'Has spoken publicly in support of captioning and access for Deaf people',
    ],
    designRelevance: 'Classrooms rely on hearing — announcements, discussion, video. What makes a room work (or not) for a Deaf student?',
  },
]

export function getPersonality(id: string): Personality | undefined {
  return PERSONALITIES.find((p) => p.id === id)
}

export function personalitiesByDirection(direction: Persona['direction']): Personality[] {
  return PERSONALITIES.filter((p) => p.direction === direction)
}

/** Questions that map onto the empathy map (says / thinks / does / feels) and
 *  ask about real moments rather than opinions — the same habit taught in MYP2. */
export const STARTER_QUESTIONS: string[] = [
  'Can you walk me through a normal day, and which everyday objects you use the most?',
  'Tell me about the last time an everyday object was hard to use. What happened?',
  'What do you do to work around it?',
  'How does that make you feel?',
  'What have you tried that worked well — and what did you stop using, and why?',
  'What do people usually get wrong when they design things for someone like you?',
]

/** The copy-and-paste prompt a student gives to an AI assistant. */
export function buildInterviewPrompt(p: Personality, directionLabel: string): string {
  return [
    `I am a school student doing a design project called "Prototyping for People". I want to practise interviewing a possible user, and I'd like you to role-play ${p.name} for this exercise.`,
    '',
    'Ground rules:',
    `- This is an imagined, educational role-play. You are an AI, not the real ${p.name}, so anything you say is a guess based on publicly known information — not something they actually said. If I ask something you cannot reasonably know, say "I'm not sure" instead of inventing facts, quotes, names or medical details.`,
    `- Be respectful. ${p.name} is a whole person, not an "inspiring story" or a stereotype. Do not exaggerate, and do not speak for a whole group of people.`,
    '- Answer in the first person, in natural spoken language, 2–4 sentences at a time. Do not use lists unless I ask.',
    '- Talk about everyday experiences: what you do, what frustrates you, the workarounds you use, and what you would like to be easier. Do not suggest product designs unless I specifically ask — I am here to understand you first.',
    '- If I ask something too personal or private, politely say you would rather not answer.',
    '',
    `What is publicly known about ${p.name} (stay consistent with this):`,
    ...p.facts.map((f) => `- ${f}`),
    '',
    `My design track is "${directionLabel}". Start by greeting me in one sentence and asking what I would like to know.`,
  ].join('\n')
}
