// MYP4 — Prototyping for People: Criterion A.iii (analyse products) and A.iv (design brief).
//
// These stages complete Criterion A. They sit after the Research Plan and before the teacher review so that students
// already part-way through the activity keep their place (stages are saved by position). Each writing field carries
// `scaffoldByChoice`: worked examples, shown to the student, that change with the DIRECTION they picked in
// "Persona & Empathy" (week1 → direction → direction). They are models to learn from, not answers to copy.

import type { LiveStage, WorksheetField } from './types'

const FROM = { stage: 'week1', section: 'direction', field: 'direction' }
type ByDir = Record<string, string[]>
const scaffold = (title: string, byValue: ByDir): WorksheetField['scaffoldByChoice'] => ({ from: FROM, title, byValue })

const PRODUCTS: ByDir = {
  'One-handed tool': [
    'Rubber jar gripper · for adults with weak grip · grips the lid to twist · silicone · Strength: cheap and small · Limit: slips on wet lids, and the other hand must still hold the jar.',
    'Wall-mounted jar opener · for people with one working hand · holds the lid still so one hand turns the jar · plastic and steel · Strength: firm hold · Limit: needs drilling and cannot be moved.',
    'Electric jar opener · for people with arthritis · clamps and turns by itself · plastic and motor · Strength: almost no force · Limit: expensive and bulky.',
  ],
  'Low-vision object': [
    'Raised-dot label stickers · for people with low vision · feel the dot to find an item · plastic · Strength: cheap and reliable · Limit: little room to say what the item is.',
    'Talking label reader · for blind and low-vision users · reads a tag aloud · plastic and electronics · Strength: hands-free · Limit: needs batteries and costs a lot.',
    'Large-print, high-contrast tray organiser · for low-vision users · big bold labels on bright colours · plastic · Strength: readable at a glance · Limit: takes up desk space.',
  ],
  'Sensory organiser': [
    'Fidget cube · for people who need to calm their hands · six small textures to press and roll · plastic · Strength: quiet and portable · Limit: not for storing or organising anything.',
    'Compartment box with soft lining · for people who get overwhelmed by clutter · one place for each item · fabric and card · Strength: calm and tidy · Limit: bulky for a school bag.',
    'Visual timer · for people who find time hard to feel · colour disc shrinks as time passes · plastic · Strength: no sound · Limit: only helps with time, not objects.',
  ],
  'Elderly-friendly kitchen aid': [
    'Thick-handled foam peeler · for people with arthritis · wider handle means less pinch force · foam and steel · Strength: comfortable · Limit: blade dulls and the foam gets dirty.',
    'Kettle tipper · for people who cannot lift a full kettle · cradle tilts it for them · metal frame · Strength: safer pouring · Limit: large and one use only.',
    'Spiked chopping board · for one-handed cooks · spikes hold food while cutting · wood and steel · Strength: stable · Limit: hard to clean, and the spikes can scratch.',
  ],
  'Classroom accessibility': [
    'Triangular pencil grip · for students with weak finger control · soft shape guides the fingers · rubber · Strength: cheap · Limit: fits only some pencils.',
    'Slant board · for students who tire or have poor posture when writing · tilts the page toward them · plastic · Strength: easier posture · Limit: heavy for a school bag.',
    'Colour-coded folder system · for students who lose papers · one colour per subject · card · Strength: quick to find things · Limit: depends on students putting things back.',
  ],
  '*': [
    'Describe three real products that try to solve a similar problem for a similar user. For each one write: who it is for, what it does, what it is made from, one strength and one limitation FOR YOUR USER.',
    'A limitation is stronger when it is specific to your user: “the handle is too thin for arthritic fingers”, not “it is not very good”.',
  ],
}

const GAPS: ByDir = {
  'One-handed tool': ['All three products either need two hands to start (the gripper), need fixing to a wall, or cost too much. None is a cheap, portable tool that a one-handed user can use on a jar anywhere. That gap is my opportunity.'],
  'Low-vision object': ['The tactile stickers are cheap but cannot say what an item is, and the talking reader says it but costs a lot and needs batteries. No product is both cheap and easy to read by touch and sight. That gap is my opportunity.'],
  'Sensory organiser': ['The fidget cube calms but cannot organise, and the compartment box organises but is too bulky for school. No product helps a student keep their calming items together and with them. That gap is my opportunity.'],
  'Elderly-friendly kitchen aid': ['Each aid makes one task easier but none is easy to clean, and several are large. No product combines a comfortable grip, easy cleaning and a small size. That gap is my opportunity.'],
  'Classroom accessibility': ['The grip and slant board help with writing but are bulky or only fit some pencils, and the folders depend on habit. No product is a light, adjustable aid for this user. That gap is my opportunity.'],
  '*': ['Look at your three limitations. Which one appears in more than one product? That repeated problem, for your named user, is your gap: “None of the products ___, so there is an opportunity to ___.”'],
}

const SENTENCE: ByDir = {
  'One-handed tool': ['I am designing a one-handed jar opener for Marcus, 34, made from silicone and wood, because my interview and product analysis show he needs a way to open jars without a second hand.'],
  'Low-vision object': ['I am designing a high-contrast, raised-dot medicine organiser for Elias, 72, made from plastic and card, because my research shows he cannot read small print and wants to find his pills by touch.'],
  'Sensory organiser': ['I am designing a soft-lined calm kit for Leo, 13, made from fabric and card, because my interview shows noise and clutter overwhelm him and he needs his calming items in one place.'],
  'Elderly-friendly kitchen aid': ['I am designing a thick-handled, easy-clean peeler for Rosa, 78, made from silicone and steel, because her arthritis makes thin handles painful and she wants to keep cooking.'],
  'Classroom accessibility': ['I am designing an adjustable writing support for Anaya, 12, made from plastic and foam, because she tires quickly when writing and her handwriting suffers in long lessons.'],
  '*': ['I am designing a ___ for ___ (name, age), made from ___, because my research shows they need ___.'],
}

const BRIEF: ByDir = {
  'One-handed tool': ['Marcus, 34, lost use of his left hand and cannot open jars. My interview showed he avoids cooking, and my analysis found that all three openers need two hands, fixed fixings or cost too much. My solution must open a standard jar with one hand, be portable and easy to clean, and stay within a small budget I set with my user.'],
  'Low-vision object': ['Elias, 72, has low vision and cannot read medicine labels. My interview showed he asks family to check them, and my analysis found tactile stickers cannot say what an item is. My solution must be readable from arm’s length, identifiable by touch, and need no batteries.'],
  'Sensory organiser': ['Leo, 13, gets overwhelmed by noise and clutter at school. My interview showed he waits until the room is quiet to find his things, and my analysis found no product keeps calming items together in a small size. My solution must fit in a school bag, be quiet to use and hold at least three items.'],
  'Elderly-friendly kitchen aid': ['Rosa, 78, has arthritis and avoids peeling vegetables. My interview showed thin handles hurt her, and my analysis found no peeler that is comfortable, easy to clean and small. My solution must have a handle at least 3 cm thick, wash in a sink, and fit in a kitchen drawer.'],
  'Classroom accessibility': ['Anaya, 12, tires quickly when writing. My interview showed her handwriting gets worse after ten minutes, and my analysis found writing aids are bulky or fit only some pencils. My solution must work with a standard pencil, weigh under 200 g, and fit in her pencil case.'],
  '*': ['Name your user and the need. Say what your research (interview, observation, secondary sources) showed. Say what your product analysis found. End with what the product must do and must not do.'],
}

const CRITERIA: ByDir = {
  'One-handed tool': ['Opens a standard 70 mm jar with one hand · test: timed trial · under 15 s · from my interview with Marcus.', 'Needs under 15 N of force · test: spring scale · from my research on one-handed grip.', 'Washes in a sink · test: soak and rinse · from my product analysis.', 'Made within a small budget I set with my user · test: costed materials list · from my analysis of expensive products.'],
  'Low-vision object': ['Text readable from arm’s length (50 cm) · test: user reads it · from my interview with Elias.', 'Each pill compartment found by touch alone · test: eyes closed · from my research.', 'Needs no batteries · test: inspection · from my product analysis.', 'Contrast between text and background at least 7:1 · test: contrast checker · from secondary research.'],
  'Sensory organiser': ['Fits in a school bag (under 20 × 15 × 6 cm) · test: measure · from my interview with Leo.', 'Makes no noise when opened · test: user rating · from my research on noise.', 'Holds at least three items · test: count · from my product analysis.', 'Lining feels soft to my user · test: user rating out of 5 · from my interview.'],
  'Elderly-friendly kitchen aid': ['Handle at least 3 cm thick · test: measure · from my anthropometric research.', 'Peels a potato in under 60 s · test: timed trial · from my interview with Rosa.', 'Washes in a sink · test: soak and rinse · from my product analysis.', 'Fits in a standard 30 cm drawer · test: measure · from my interview.'],
  'Classroom accessibility': ['Works with a standard pencil · test: try three pencils · from my product analysis.', 'Weighs under 200 g · test: scales · from my interview with Anaya.', 'Student writes for 20 minutes without stopping · test: observation · from my research.', 'Fits in a standard pencil case · test: measure · from my interview.'],
  '*': ['Write 4–6 criteria a stranger could test. Each one has a number or a clear yes/no, a way to test it and a source: “Opens a jar in under 15 s · timed trial · from my interview.”'],
}

export const PRODUCT_BRIEF_STAGES: LiveStage[] = [
  {
    type: 'learn',
    key: 'learnProducts',
    label: 'Lesson: Analyse Existing Products',
    icon: '🔎',
    strand: 'A.iii',
    intro: { title: '🔎 Criterion A.iii — Analyse a range of existing products', blurb: 'Why three products teach you more than one, and how to compare them for YOUR user.' },
    pages: [
      {
        icon: '🧭',
        title: 'Why a range, not one',
        body: ['One product shows you one answer. Three show you what they agree on, where they disagree and what none of them does. That missing piece is your opportunity.'],
        example: { label: 'Insight from a range', text: 'Three jar openers all use a rubber grip, but none can be used with one hand and be taken anywhere. That gap is a design opportunity.' },
      },
      {
        icon: '📋',
        title: 'Compare the same things every time',
        body: ['Use the same columns for every product so you can see differences at a glance.'],
        bullets: ['Who is it for?', 'What does it do?', 'What is it made from?', 'One strength FOR YOUR USER', 'One limitation FOR YOUR USER'],
        example: { label: 'Weak vs strong limitation', weak: '“It is not very good.”', strong: '“The handle is too thin for arthritic fingers, so it needs a pinch grip that hurts Rosa.”' },
      },
      {
        icon: '🕳️',
        title: 'From analysis to a gap',
        body: ['Look for a limitation that appears in more than one product, or a need that none of them meets for your user. Write it as: “None of the products ___, so there is an opportunity to ___.”'],
        tip: 'Retrieval check: which of your own three limitations is repeated, and what does that tell you?',
      },
    ],
  },
  {
    type: 'learn',
    key: 'learnBrief',
    label: 'Lesson: From Research to a Brief',
    icon: '📝',
    strand: 'A.iv',
    intro: { title: '📝 Criterion A.iv — Develop a detailed design brief', blurb: 'Turn your research into a short brief and criteria that can be tested.' },
    pages: [
      {
        icon: '✍️',
        title: 'What a brief is',
        body: ['A design brief summarises your research: who it is for, the need, what your evidence showed and what the product must do. It is not a wish list.'],
        example: { label: 'One-sentence version', text: '“I am designing a ___ for ___, made from ___, because ___.”' },
      },
      {
        icon: '📏',
        title: 'Make success criteria measurable',
        body: ['A criterion is a target you can check. “Comfortable” is a feeling. “Handle at least 3 cm thick, tested with a ruler” is a measurement.'],
        example: { label: 'Vague vs measurable', weak: '“It should be easy to use.”', strong: '“A user opens a standard jar in under 15 seconds with one hand (timed trial).”' },
      },
      {
        icon: '🔗',
        title: 'Link each criterion to evidence',
        body: ['Every criterion should trace back to something you found: your interview, your measurements or a product limitation. These criteria become your Criterion B specification, so write them well.'],
        tip: 'Retrieval check: which piece of your own evidence supports your most important criterion?',
      },
    ],
  },
  {
    type: 'worksheet',
    key: 'analyse',
    label: 'Product Analysis & Brief',
    icon: '📝',
    intro: { title: '📝 Criterion A.iii and A.iv — products, gap and brief', blurb: 'Analyse three real products for YOUR user, then write your brief. The example boxes change with the direction you chose. Work at your own pace: no need to click Next.' },
    sections: [
      {
        key: 'products',
        label: 'Analyse three products',
        icon: '🔎',
        criterion: 'A.iii',
        strandLabel: 'Analyse a range of existing products that inspire a solution',
        brief: { title: 'Brief: same columns for each product', points: ['Pick three real products for a need like yours.', 'Fill every column for every product.', 'Judge strength and limitation for YOUR named user.'] },
        fields: [
          {
            key: 'compare',
            label: 'My three products',
            type: 'table',
            minRows: 3,
            scaffoldByChoice: scaffold('Example products for your direction', PRODUCTS),
            columns: [
              { key: 'product', label: 'Product', placeholder: 'e.g. Rubber jar gripper' },
              { key: 'who', label: 'Who it is for', placeholder: 'e.g. Adults with weak grip' },
              { key: 'does', label: 'What it does', placeholder: 'e.g. Grips the lid to twist' },
              { key: 'material', label: 'Material', placeholder: 'e.g. Silicone' },
              { key: 'strength', label: 'One strength for my user', placeholder: 'e.g. Cheap and small' },
              { key: 'limit', label: 'One limitation for my user', placeholder: 'e.g. Slips on wet lids' },
            ],
          },
          { key: 'photos', label: 'Photos or screenshots of the products', type: 'image', hint: 'One picture per product, with its name. Add as many as you need.', multiple: true },
          {
            key: 'gap',
            label: 'What gap or opportunity does your analysis reveal?',
            type: 'textarea',
            hint: 'None of the products ___, so there is an opportunity to ___.',
            scaffoldByChoice: scaffold('Example gap for your direction', GAPS),
            exemplars: [
              'None of the three products can be used with one hand and carried anywhere, so there is an opportunity to design a small tool that grips a lid while one hand turns it.',
              'The talking reader says what an item is but costs a lot, and the stickers are cheap but say nothing, so there is an opportunity to design a cheap, readable and tactile label.',
            ],
            celebrateKeywords: ['none of', 'gap', 'opportunity', 'because', 'my user'],
            points: 10,
          },
        ],
      },
      {
        key: 'brief',
        label: 'Design brief',
        icon: '📝',
        criterion: 'A.iv',
        strandLabel: 'Develop a detailed design brief which summarises the findings of the research',
        brief: { title: 'Brief: summarise your research', points: ['Who it is for and the need.', 'What your research and product analysis showed (name the evidence).', 'What the product must do and must not do.'] },
        fields: [
          {
            key: 'sentence',
            label: 'The one-sentence brief',
            type: 'textarea',
            hint: 'I am designing a ___ for ___, made from ___, because ___.',
            scaffoldByChoice: scaffold('Example sentence for your direction', SENTENCE),
            exemplars: [
              'I am designing a one-handed jar opener for Marcus, made from silicone and wood, because my interview and product analysis show he needs a way to open jars without a second hand.',
              'I am designing a raised-dot medicine organiser for Elias, made from plastic and card, because my research shows he cannot read small print.',
            ],
            celebrateKeywords: ['designing', 'for', 'made from', 'because', 'research'],
            points: 10,
          },
          {
            key: 'text',
            label: 'Design brief',
            type: 'textarea',
            hint: 'The need, what your research showed, what your analysis found, and what the product must and must not do.',
            scaffoldByChoice: scaffold('Example brief for your direction', BRIEF),
            exemplars: [
              'Rosa, 78, has arthritis and avoids peeling vegetables. My interview showed thin handles hurt her, and my analysis found no peeler that is comfortable, easy to clean and small. My solution must have a handle at least 3 cm thick, wash in a sink, and fit in a drawer.',
              'Marcus, 34, cannot open jars with one hand. My interview showed he avoids cooking, and my analysis found all three openers need two hands or cost too much. My solution must work one-handed, be portable and stay within a small budget.',
            ],
            celebrateKeywords: ['showed', 'found', 'must', 'must not', 'interview', 'analysis'],
            points: 10,
          },
          {
            key: 'criteria',
            label: 'My measurable success criteria',
            type: 'table',
            minRows: 4,
            scaffoldByChoice: scaffold('Example criteria for your direction', CRITERIA),
            columns: [
              { key: 'criterion', label: 'Criterion (with a number)', placeholder: 'e.g. Opens a jar in under 15 s' },
              { key: 'test', label: 'How I will test it', placeholder: 'e.g. Timed trial with my user' },
              { key: 'evidence', label: 'Evidence it comes from', placeholder: 'e.g. My interview with Marcus' },
            ],
          },
        ],
      },
    ],
  },
]
