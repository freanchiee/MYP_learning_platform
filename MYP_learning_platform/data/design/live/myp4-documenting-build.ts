// MYP4 — Documenting the Build: the closing step of Prototyping for People
// (or any build project). A materials checklist, then a one-page build
// journal (photo, final description, justified changes, a reflection),
// followed by Criterion C grading. Self-paced — short enough that most
// students finish it in one sitting, but there's no shared "current
// question" to keep in sync, so each student just moves at their own pace.

import type { LiveActivityDefinition } from './types'

export const MYP4_DOCUMENTING_BUILD: LiveActivityDefinition = {
  id: 'myp4-documenting-build',
  year: 'MYP4',
  title: 'Documenting the Build',
  subtitle: 'The final step — get your materials ready, then write up the one-pager that tells the story of what you built.',
  icon: '📔',
  theme: { accent: '#C9722A', from: '#241709', via: '#3A230F', to: '#4A2C12' },
  selfPaced: true,
  stages: [
    {
      type: 'worksheet',
      key: 'document',
      label: 'Documenting the Build',
      icon: '📔',
      intro: {
        title: '📔 Documenting the Build',
        blurb: 'Get everything ready, then write up the one-pager that tells the story of what you actually built. Work at your own pace — no need to click Next.',
      },
      sections: [
        {
          key: 'materials',
          label: 'Materials checklist',
          icon: '✅',
          criterion: 'C.i',
          strandLabel: 'Construct a logical plan, including the efficient use of resources',
          blurb: 'List everything you need to build your final version — tools and materials — then tick each one off once you actually have it in hand.',
          fields: [
            {
              key: 'items',
              label: 'What you need to build this',
              type: 'checklist',
              hint: 'Add one row per material or tool. Check the box once you have it.',
              placeholder: 'e.g. Cardboard, hot glue, scissors',
            },
          ],
        },
        {
          key: 'journal',
          label: 'Build journal — one pager',
          icon: '📸',
          criterion: 'C.iii',
          strandLabel: 'Follow the plan to create the solution, which functions as intended, and justify changes',
          blurb: 'Tell the story of your finished build in one page: a photo, what you made, what changed along the way, and what you would try next.',
          fields: [
            {
              key: 'photos',
              label: 'Photos of your finished build',
              type: 'image',
              multiple: true,
              hint: 'One clear photo of the whole thing, plus any close-ups that show detail your teacher should see.',
            },
            {
              key: 'description',
              label: 'Describe your final build',
              type: 'textarea',
              hint: 'What is it, what is it made from, and how does your user use it?',
              exemplars: [
                'The final jar-opener is a two-piece cardboard-and-rubber-band grip that clamps around the lid so Marcus only needs to twist with one hand.',
                'The finished label stand holds a card at a fixed angle and distance so Elias can read the text without needing to pick anything up.',
                'The completed fidget tray is a shallow box with three fixed slots so Leo can find his headphones and fidget tool by touch, without looking.',
              ],
              celebrateKeywords: ['made from', 'so that', 'my user', 'uses it'],
              points: 10,
              coach: {
                groups: [
                  { level: 'basic', words: ['made from', 'final', 'build', 'finished', 'prototype', 'wood', 'card', 'silicone', 'rubber', 'foam', 'plastic'] },
                  { level: 'developed', words: ['so that', 'so', 'which', 'clamps', 'holds', 'uses', 'my user', 'from', 'fixed'] },
                  { level: 'justified', words: ['without needing', 'by touch', 'one hand', 'as intended', 'works as', 'fits', 'my user uses', 'only needs'] },
                ],
                hints: [
                  'Say what it is and what it is made from.',
                  'Explain how your user uses it, step by step.',
                  'Say how it works as intended for them: what does it let them do?',
                ],
              },
            },
            {
              key: 'changes',
              label: 'What changed from your plan, and why?',
              type: 'textarea',
              hint: 'Compare this to your Build log and Make plan — be specific about what is different and justify why you changed it.',
              exemplars: [
                'I planned a rubber band grip, but it slipped on smooth lids, so I changed to a textured silicone strip — that change held the jar still through ten test turns.',
                'My plan used small print for the label, but Elias still struggled from arm\'s length, so I doubled the font size, which fixed the problem.',
                'I originally fixed the slots too close together; after testing, I widened the gaps because Leo kept confusing which slot held which item.',
              ],
              celebrateKeywords: ['planned', 'changed', 'because', 'tested', 'instead'],
              points: 10,
              coach: {
                groups: [
                  { level: 'basic', words: ['planned', 'changed', 'plan', 'instead', 'originally', 'switched', 'replaced', 'doubled', 'widened'] },
                  { level: 'developed', words: ['because', 'so I', 'which', 'tested', 'after testing', 'but', 'too', 'slipped'] },
                  { level: 'justified', words: ['fixed the problem', 'that change', 'which fixed', 'evidence', 'test results', 'my user said', 'so that', 'improved', 'held'] },
                ],
                scaffold: {
                  frame: 'I planned [original], but [what went wrong], so I changed to [new thing]. That change [what it fixed], shown by [evidence].',
                  steps: [
                    'PLAN: what did you intend?',
                    'PROBLEM: what went wrong or did not fit?',
                    'CHANGE: what did you do instead?',
                    'EVIDENCE: how do you know it helped?',
                  ],
                },
                hints: [
                  'Compare what you planned with what you built. Be specific about the difference.',
                  'Give the reason for each change, from a test or something your user said.',
                  'Say what the change fixed.',
                ],
              },
            },
            {
              key: 'next',
              label: 'If you had another week, what would you try next?',
              type: 'textarea',
              hint: 'One honest idea — a material, a shape, or a test you did not get to.',
              coach: {
                groups: [
                  { level: 'basic', words: ['try', 'next', 'would', 'another week', 'material', 'shape', 'test', 'idea'] },
                  { level: 'developed', words: ['because', 'so that', 'instead', 'which', 'test with', 'compare'] },
                  { level: 'justified', words: ['did not get', 'to see whether', 'my user', 'weakness', 'the problem was', 'limit', 'improve', 'find out'] },
                ],
                hints: [
                  'Pick one idea and be specific about the material, shape or test.',
                  'Say what weakness in your build it would fix.',
                  'Say how you would know it worked.',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      type: 'grading',
      key: 'grading',
      label: 'Criterion C Review',
      icon: '📋',
      intro: { title: '📋 Criterion C review & grading', blurb: 'Review each student’s materials checklist and build journal, then grade C.i–C.iv.' },
      strands: [
        { key: 'C.i', label: 'Construct a logical plan, including efficient use of resources' },
        { key: 'C.ii', label: 'Demonstrate excellent technical skills' },
        { key: 'C.iii', label: 'Follow the plan to create a solution that functions as intended' },
        { key: 'C.iv', label: 'Justify changes made to the plan when creating the solution' },
      ],
    },
  ],
}
