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
      overview: {
        brief: {
          context:
            'Most everyday objects are designed for an “average” person. For someone with limited grip, low vision or sensory sensitivity, an ordinary jar, label or classroom can be hard to use. Good designers start from one real person, not the average.',
          task: 'Choose a direction, build a persona and an empathy map for ONE specific user, record the measurements that matter for them, make a first prototype, and plan the research you still need.',
          produce: [
            'A direction and a “How might we…” opportunity for a named user',
            'A persona with the traits that matter for the design problem',
            'An empathy map: Says, Thinks, Does, Feels',
            'Anthropometric measurements, each with a reason',
            'A first prototype with a build log, and a research plan (Week 2)',
          ],
          assessedOn: ['A.i', 'A.ii', 'A.iii', 'A.iv', 'C.i', 'C.iii'],
          time: 'Weeks 1–2 · work at your own pace, your work saves automatically',
        },
        flow: [
          { strand: 'A.i', title: 'Justify the need', asks: 'Explain why this problem matters, for a specified client.', sections: ['direction', 'opportunity', 'persona'] },
          { strand: 'A.ii', title: 'Research your user', asks: 'Gather primary and secondary research: interviews and simulated voices.', sections: ['personaChat', 'famous'] },
          { strand: 'A.i', title: 'Understand your user', asks: 'Turn what you learned into an empathy map.', sections: ['empathy'] },
          { strand: 'A.ii', title: 'Measure what matters', asks: 'Record anthropometrics and say why each one matters.', sections: ['anthro'] },
          { strand: 'C.i', title: 'Plan your make', asks: 'Choose what to build and plan your first steps.', where: 'next stage · What Will You Make?' },
          { strand: 'C.iii', title: 'Build and reflect', asks: 'Follow the plan, then justify what you change.', where: 'next stage · What Will You Make?' },
          { strand: 'A.ii', title: 'Plan the research', asks: 'Identify and prioritise the research you still need.', where: 'Week 2 · Research Plan' },
          { strand: 'A.iv', title: 'Teacher review', asks: 'Your teacher reviews everything against A.i–A.iv (including A.iii and A.iv).', where: 'Criterion A Review' },
        ],
      },
      sections: [
        {
          key: 'direction',
          label: 'Direction',
          icon: '🧭',
          criterion: 'A.i',
          strandLabel: 'Justify the need for a solution, for a specified client',
          fields: [
            { key: 'direction', label: 'Accessibility-focused direction', type: 'select', options: ['One-handed tool', 'Low-vision object', 'Sensory organiser', 'Elderly-friendly kitchen aid', 'Classroom accessibility', 'Something else'] },
          ],
        },
        {
          key: 'opportunity',
          label: 'Opportunity',
          icon: '💡',
          criterion: 'A.i',
          strandLabel: 'Justify the need for a solution, for a specified client',
          brief: { title: 'Brief: write a problem worth solving', points: ['Name ONE real person, not “people” or “everyone”.', 'Say what is hard for them and why it matters to them.', 'Start from a starting-point card, then make it your own.'] },
          blurb:
            'Not sure where to start? These starting points are built for an online class: each one says how to prototype it with things at home, what to measure, and how to test it on a video call. Pick one, then make it your own.',
          fields: [
            { key: 'starter', label: 'Starting points for your track', type: 'opportunityCards' },
            {
              key: 'mine',
              label: 'Your opportunity, written for YOUR user',
              type: 'textarea',
              hint: 'Rewrite it as “How might we…” for a specific, named person — and say why it matters to them.',
              placeholder: 'How might we…',
              exemplars: [
                'How might we help Marcus open jars with one hand so that cooking dinner is quicker and less frustrating for him?',
                'How might we make labels easier to read for Elias, because small print on his medicine is hard for him to see?',
                'How might we help Leo keep his headphones and fidget tools within reach so that a busy classroom feels calmer?',
              ],
              celebrateKeywords: ['how might we', 'so that', 'because', 'for'],
              points: 10,
            },
          ],
        },
        {
          key: 'persona',
          label: 'Persona',
          icon: '🧑',
          criterion: 'A.i',
          strandLabel: 'Justify the need for a solution, for a specified client',
          brief: { title: 'Brief: describe your client', points: ['Choose a persona you can learn from: a consenting person, an approved pack character or a composite from research.', 'List only the traits that matter for THIS design problem (grip, vision, hearing, reach…).'] },
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
          criterion: 'A.ii',
          strandLabel: 'Identify and prioritise the primary and secondary research needed',
          brief: { title: 'Brief: gather primary research', points: ['Ask about what they do, not what they would like. Ask “why” twice.', 'Note answers you can use in the empathy map, and answers you should double-check.'] },
          blurb: 'Optional but recommended: pick a persona-pack character and interview them — use what they tell you to fill in the empathy map below.',
          fields: [{ key: 'chat', label: 'Interview a persona-pack character', type: 'personaChat' }],
        },
        {
          key: 'famous',
          label: 'Famous voice',
          icon: '🌟',
          criterion: 'A.ii',
          strandLabel: 'Identify and prioritise the primary and secondary research needed',
          blurb:
            'Optional: pick a well-known person whose everyday experience matches your track, copy the prompt into your school’s approved AI assistant, and run a simulated interview. It’s practice and inspiration — not a substitute for talking to a real user.',
          fields: [
            { key: 'pick', label: 'Interview a well-known person (with an AI assistant)', type: 'personalityPrompt' },
            {
              key: 'takeaways',
              label: 'What did the simulated interview suggest — and what do you still need to check?',
              type: 'textarea',
              hint: 'Note 2–3 answers that surprised you. For each, say whether it is an assumption, and which real source (an interview, a biography, a real user) could confirm it.',
              exemplars: [
                'The AI said opening jars is the hardest task, which surprised me, but that is only an assumption. I need to check it against a real interview and ask a real user to confirm.',
                'One answer suggested small print is a problem. I will treat that as a simulated assumption and look for a published source or ask a real person before using it as evidence.',
                'The simulated answers gave me new questions, but they are not evidence. I will verify the important ones with secondary research and a real interview.',
              ],
              celebrateKeywords: ['assumption', 'check', 'source', 'evidence', 'simulated'],
              points: 10,
            },
          ],
        },
        {
          key: 'empathy',
          label: 'Empathy map',
          icon: '💭',
          criterion: 'A.i',
          strandLabel: 'Justify the need for a solution, for a specified client',
          brief: {
            title: 'Brief: before you fill in the map',
            points: [
              'An empathy map is a picture of ONE person’s experience of the problem, built from your interview and research.',
              'Says and Does can be observed. Thinks and Feels have to be inferred, so back them with evidence and mark guesses as assumptions.',
              'Use your persona’s traits and interview answers. Open the chat bubble to re-check what they told you.',
              'Be specific: “avoids carrying two things at once” beats “finds it hard”.',
            ],
          },
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
          criterion: 'A.ii',
          strandLabel: 'Identify and prioritise the primary and secondary research needed',
          brief: { title: 'Brief: measure the person, not the object', points: ['Pick measurements your design must fit: grip diameter, reach, hand span, force.', 'For each, say WHY it matters. A number with no reason is not research.'] },
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
      key: 'make',
      label: 'What Will You Make?',
      icon: '🛠️',
      intro: {
        title: '🛠️ Enough thinking — make something!',
        blurb:
          'Pick something to BUILD for your user, from the make menu for your track — or play the wild card and choose your own. Then plan the first steps and start building with what you have at home. Work at your own pace: no need to click Next.',
      },
      sections: [
        {
          key: 'choose',
          label: 'Choose your make',
          icon: '🃏',
          criterion: 'C.i',
          strandLabel: 'Construct a logical plan for what you will make',
          blurb: 'Your track is listed first. Stuck? Hit 🎲 Surprise me. Have your own idea? Play the wild card.',
          fields: [{ key: 'pick', label: 'What will you make?', type: 'makeCards' }],
        },
        {
          key: 'plan',
          label: 'Make plan',
          icon: '📐',
          criterion: 'C.i',
          strandLabel: 'Construct a logical plan that others could follow',
          blurb: 'Decide what your first version must prove, then plan your first three steps.',
          fields: [
            {
              key: 'proves',
              label: 'What must your first prototype prove?',
              type: 'textarea',
              hint: 'ONE thing only — for example “the jar stays still while one hand turns the lid”.',
              exemplars: [
                'My first prototype must prove that the jar stays still while my user turns the lid with one hand, so I will test it on a real jar.',
                'It needs to prove that the label can be read from arm’s length, so I will test three sizes with my user.',
                'The first version has to show that my user can find each setting by touch without looking, so I can check if the design works.',
              ],
              celebrateKeywords: ['prove', 'test', 'so that', 'my user', 'works'],
              points: 10,
            },
            {
              key: 'steps',
              label: 'My first three steps',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'step', label: 'Step', placeholder: 'e.g. Cut a cardboard base' },
                { key: 'materials', label: 'Materials I have at home', placeholder: 'e.g. Cereal box, tape, scissors' },
                { key: 'time', label: 'Time (minutes)', placeholder: 'e.g. 10' },
              ],
            },
          ],
        },
        {
          key: 'build',
          label: 'Build log',
          icon: '🔨',
          criterion: 'C.iii',
          strandLabel: 'Follow your plan to make the solution, and justify changes',
          blurb: 'Build your first version, then tell the story of what happened. Add a dated journal entry — photos go in your own design folder.',
          fields: [
            { key: 'date', label: 'Date', type: 'text', placeholder: 'e.g. 5 Oct' },
            {
              key: 'made',
              label: 'What did you make?',
              type: 'textarea',
              hint: 'Describe your first version: what it looks like and what you made it from.',
            },
            {
              key: 'learned',
              label: 'What worked, what did not, and what will you change?',
              type: 'textarea',
              hint: 'Be honest — a prototype that fails teaches you the most.',
              exemplars: [
                'The grip worked because the jar stayed still, but the rubber band slipped on smooth lids, so next I will add a rougher surface.',
                'It did not work as planned: the labels were still too small, so I will change the text size and test again with my user.',
                'The handle felt comfortable but too thin, which I did not expect, so my next version will be thicker.',
              ],
              celebrateKeywords: ['worked', 'did not', 'because', 'change', 'next'],
              points: 10,
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
          criterion: 'A.ii',
          strandLabel: 'Identify and prioritise the primary and secondary research needed',
          brief: { title: 'Brief: research you still need', points: ['List what you do not know yet, then choose the method that would answer it.', 'Prioritise: what must you find out first? Mix primary (interview, observation) and secondary (reading).'] },
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
