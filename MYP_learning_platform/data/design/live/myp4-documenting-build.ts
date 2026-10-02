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
            },
            {
              key: 'next',
              label: 'If you had another week, what would you try next?',
              type: 'textarea',
              hint: 'One honest idea — a material, a shape, or a test you did not get to.',
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
