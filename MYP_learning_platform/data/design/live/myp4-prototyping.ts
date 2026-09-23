// MYP4 — Prototyping for People: Ergonomics, Structure and Inclusion
// (Weeks 1-2). Live Class Creator activity: one worksheet stage
// (direction, persona & empathy map, anthropometrics, research plan)
// followed by teacher grading against Criterion A strands. Trimmed
// from the reference build `myp4-prototyping-w1w2.html` — the scripted
// persona-chat, accessibility audit and product-range stages are
// intentionally left out of this v1 port; see the skill doc for how to
// extend the engine to bring them back.

import type { LiveActivityDefinition } from './types'

export const MYP4_PROTOTYPING: LiveActivityDefinition = {
  id: 'myp4-prototyping',
  year: 'MYP4',
  title: 'Prototyping for People',
  subtitle: 'Ergonomics, Structure and Inclusion — pick a direction, build a persona and empathy map, plan your research.',
  icon: '🦾',
  theme: { accent: '#5C3FD6', from: '#150F2A', via: '#1D1640', to: '#241C46' },
  stages: [
    {
      type: 'worksheet',
      key: 'week1',
      label: 'Persona & Empathy',
      icon: '❤️',
      intro: { title: '❤️ Week 1: Persona, Empathy Map & Anthropometrics', blurb: 'Pick a direction, build a persona and empathy map, and log the measurements that matter for your user — free explore, no need to click Next.' },
      sections: [
        {
          key: 'direction',
          label: 'Direction',
          icon: '🧭',
          fields: [
            { key: 'direction', label: 'Accessibility-focused direction', type: 'select', options: ['One-handed tool', 'Low-vision object', 'Sensory organiser', 'Elderly-friendly kitchen aid', 'Classroom accessibility', 'Something else'] },
          ],
        },
        {
          key: 'persona',
          label: 'Persona',
          icon: '🧑',
          fields: [
            { key: 'name', label: 'Persona name', type: 'text', placeholder: 'e.g. Marcus, 34' },
            { key: 'type', label: 'Persona type', type: 'select', options: ['A consenting classmate or family member', 'An approved persona-pack character', 'A composite persona based on real research'] },
            {
              key: 'traits',
              label: 'Key traits relevant to the design problem',
              type: 'textarea',
              hint: 'What matters physically/sensorially for this user?',
              exemplars: [
                'Marcus has limited grip strength in his right hand after a wrist injury, so tasks needing a firm two-handed grip are difficult. He\'s also sensitive to loud, sudden sounds.',
                'Limited hand mobility on one side makes it hard to grip firmly; loud noises are distracting and uncomfortable for this user.',
                'Reduced strength in one hand means one-handed operation matters most; sensory sensitivity to sound also affects comfort.',
              ],
              celebrateKeywords: ['grip', 'mobility', 'sensory', 'vision', 'reach'],
              points: 10,
            },
          ],
        },
        {
          key: 'personaChat',
          label: 'Interview',
          icon: '🎭',
          blurb: 'Optional but recommended: pick a persona-pack character and interview them — use what they tell you to fill in the empathy map below.',
          fields: [{ key: 'chat', label: 'Interview a persona-pack character', type: 'personaChat' }],
        },
        {
          key: 'empathy',
          label: 'Empathy map',
          icon: '💭',
          fields: [
            {
              key: 'says',
              label: 'Says',
              type: 'textarea',
              hint: 'What does your persona actually say about this problem?',
              exemplars: [
                '"I just leave it on the counter because carrying it one-handed makes my wrist hurt."',
                '"I can\'t grip it properly so I end up asking someone else to carry it."',
                '"It\'s easier if I just avoid picking it up at all."',
              ],
              celebrateKeywords: ['because', "i can't", 'i wish'],
              points: 10,
            },
            {
              key: 'thinks',
              label: 'Thinks',
              type: 'textarea',
              hint: 'What might they be thinking, but not always saying out loud?',
              exemplars: [
                'He wonders if people notice him struggling, and hopes for something that doesn\'t make him feel singled out.',
                'She worries classmates will think she is being lazy rather than dealing with a real limitation.',
                'He hopes there is a way to manage this without needing to explain himself every time.',
              ],
              celebrateKeywords: ['worried', 'embarrassed', 'wonders', 'hopes'],
              points: 10,
            },
            {
              key: 'does',
              label: 'Does',
              type: 'textarea',
              hint: 'What do they currently do to work around the problem?',
              exemplars: [
                'He currently avoids carrying more than one item at a time, and asks a classmate for help when the load is heavy.',
                'She switches to her other hand constantly and takes more trips instead of carrying everything at once.',
                'He waits until fewer people are around before attempting a task that is hard for him.',
              ],
              celebrateKeywords: ['instead', 'avoids', 'asks for help', 'currently'],
              points: 10,
            },
            {
              key: 'feels',
              label: 'Feels',
              type: 'textarea',
              hint: 'How does the problem make them feel?',
              exemplars: [
                'Frustrated when a task takes longer than it should, and anxious about dropping something in front of others.',
                'Embarrassed asking for help repeatedly, and relieved on days the task goes smoothly.',
                'Self-conscious about being watched, and hopeful that a better solution exists.',
              ],
              celebrateKeywords: ['frustrated', 'anxious', 'relieved', 'confident'],
              points: 10,
            },
          ],
        },
        {
          key: 'anthro',
          label: 'Anthropometrics',
          icon: '📏',
          fields: [
            {
              key: 'measurements',
              label: 'Measurements that matter for this user',
              type: 'table',
              minRows: 2,
              columns: [
                { key: 'measure', label: 'Measure', placeholder: 'e.g. Grip diameter' },
                { key: 'value', label: 'Value', placeholder: 'e.g. 4.5 cm' },
                { key: 'why', label: 'Why it matters', placeholder: 'e.g. largest handle they can close around' },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'week2',
      label: 'Research Plan',
      icon: '📊',
      intro: { title: '📊 Week 2: Research Plan', blurb: 'Plan the primary and secondary research you need before designing a solution.' },
      sections: [
        {
          key: 'plan',
          label: 'Research plan',
          icon: '📋',
          fields: [
            {
              key: 'rows',
              label: 'What you need to find out',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'what', label: 'What', placeholder: 'e.g. How much force can they apply one-handed?' },
                { key: 'method', label: 'Method', placeholder: 'Interview / Observation / Survey / Secondary reading' },
                { key: 'timeframe', label: 'Timeframe', placeholder: 'e.g. By Friday' },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'grading',
      key: 'grading',
      label: 'Criterion A Review',
      icon: '📋',
      intro: { title: '📋 Criterion A review & grading', blurb: 'Review each student’s persona, empathy map, anthropometrics and research plan, then grade A.i–A.iv.' },
      strands: [
        { key: 'A.i', label: 'Justify the need, for a specified client' },
        { key: 'A.ii', label: 'Identify & prioritize primary/secondary research' },
        { key: 'A.iii', label: 'Analyse a range of existing products' },
        { key: 'A.iv', label: 'Detailed brief summarising the research' },
      ],
    },
  ],
}
