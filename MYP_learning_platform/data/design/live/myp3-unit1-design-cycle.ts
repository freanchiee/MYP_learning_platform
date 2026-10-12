// MYP3 — Unit 1 Kickoff, extended: the rest of the design cycle.
//
// Criterion A is taught and practised in the main file. These stages carry the SAME student, user, need and brief
// through Criterion B (develop ideas), C (create the solution) and D (evaluate), so the activity is a run-through of
// every design phase. Each criterion opens with an EXEMPLAR module: one worked case, the "pattern knob" (a knob whose
// surface pattern solves a real user's grip or visibility problem), shown strand by strand with weak-versus-strong
// comparisons. The case is only a model. Students apply every step to their OWN need and user.
//
// They sit AFTER the Criterion A journal entry and BEFORE the teacher review, so students already part-way through the
// activity keep their place (stages are saved by position).

import type { LiveStage } from './types'

const BLOCK_EXA = 'Block 3 · Model Criterion A'
const BLOCK_B = 'Block 3 · Develop ideas (Criterion B)'
const BLOCK_C = 'Block 4 · Create the solution (Criterion C)'
const BLOCK_D = 'Block 5 · Evaluate (Criterion D)'

export const DESIGN_CYCLE_STAGES: LiveStage[] = [
  // ============================================================ MODEL A
  {
    type: 'learn',
    key: 'exemplarA',
    label: 'Exemplar: A Full Criterion A',
    icon: '🌟',
    strand: 'A.iv',
    block: BLOCK_EXA,
    minutes: 8,
    intro: { title: '🌟 Exemplar — Criterion A, start to finish', blurb: 'One complete model: a pattern-based knob for Rosa. Read it, then compare it with your own Criterion A before you move on to designing.' },
    pages: [
      {
        icon: '🚪',
        title: 'The case: a knob that is hard to grip',
        body: ['Rosa, 78, has arthritis. The round, polished knobs on her kitchen cupboards and cooker are slippery, and she needs two hands and a lot of force to turn them. She has started leaving doors open and avoiding the cooker.'],
        bullets: ['User: Rosa, 78, lives alone, cooks every day.', 'Direction: inclusion and accessibility.', 'Product idea: a knob whose surface PATTERN helps her grip and see it (tactile ridges or dots, a high-contrast pattern).'],
        tip: 'You do not have to design a knob. The steps are the same for any need. Use this case as a model for the level of detail to aim for.',
      },
      {
        icon: '🔍',
        title: 'A.i: explain and justify the need',
        body: ['A strong need names the person, says what is hard, says why it matters, and proves it is a need and not a want.'],
        example: {
          label: 'Need statement',
          weak: '“Old people find knobs hard.”',
          strong: '“Rosa, 78, needs a way to turn her cupboard and cooker knobs with one hand because her arthritis makes round, smooth knobs slip, and it matters because she is starting to avoid cooking, which she loves and which keeps her independent.”',
          note: 'A want would be “a nicer-looking knob”. It would not change what Rosa can do.',
        },
      },
      {
        icon: '🗺️',
        title: 'A.ii: a ranked research plan',
        body: ['Rosa’s plan mixes primary and secondary research and puts the most useful step first.'],
        bullets: [
          '1 Primary · interview Rosa about the last time a knob slipped (10 min, Mon).',
          '2 Primary · watch Rosa open three knobs and time it (10 min, Mon).',
          '3 Secondary · read an occupational therapy page on grip with arthritis (Tue).',
          '4 Secondary · find the typical force needed to turn a cooker knob (Tue).',
        ],
        example: { label: 'Why this order', text: 'Primary first, because only Rosa can tell me what hurts. The secondary sources then check whether her problem is typical.' },
      },
      {
        icon: '🔎',
        title: 'A.iii: analyse a group of products',
        body: ['Three knobs are compared on the SAME features, and the gap becomes the opportunity.'],
        bullets: [
          'Smooth round knob: cheap, but slips when hands are wet. Needs a pinch grip.',
          'Knurled (diamond-ridged) knob: good grip, but the ridges are sharp and uncomfortable for a long time.',
          'Large lever handle: easy for one hand, but it sticks out and is not made for cooker dials.',
        ],
        example: { label: 'The gap', text: 'No knob has a soft raised pattern that grips without hurting AND shows clearly where the knob is pointing. That is the opportunity.' },
      },
      {
        icon: '📝',
        title: 'A.iv: the brief and measurable criteria',
        body: ['The brief summarises the research in a few lines and ends with criteria that can be checked.'],
        example: {
          label: 'The brief',
          strong: '“I am designing for Rosa, made from silicone-coated plastic, because my interview and product analysis show she needs a knob she can turn with one hand without it slipping or hurting. It must turn with under 15 N of force, have raised ridges at least 1.5 mm high with rounded tops, and show its position with a high-contrast pattern visible from 1 m.”',
        },
        tip: 'Retrieval check: which part of your own research supports your most important criterion?',
      },
    ],
  },

  // ============================================================ B
  {
    type: 'learn',
    key: 'exemplarB',
    label: 'Exemplar: Criterion B',
    icon: '💡',
    strand: 'B.i',
    block: BLOCK_B,
    minutes: 10,
    intro: { title: '💡 Exemplar — Criterion B: Developing ideas', blurb: 'The same pattern-knob case, now through B.i to B.iv: specification, a range of ideas, a justified choice, and planning drawings.' },
    pages: [
      {
        icon: '📐',
        title: 'B.i: a design specification',
        body: ['The specification turns your Criterion A criteria into the list your design will be judged against. Every line must be checkable and traceable to your research.'],
        example: {
          label: 'Rosa’s knob',
          weak: '“It should grip well and look nice.”',
          strong: '“1. Turns with under 15 N of force (Rosa could not manage more in my timing test). 2. Raised ridges at least 1.5 mm high with rounded tops, because sharp knurling hurt in product B. 3. A dark-and-light pattern that shows its position from 1 m. 4. Fits a standard 6 mm cooker spindle. 5. Cleanable with a damp cloth.”',
          note: 'Each line says HOW it will be tested and links back to the research.',
        },
        tip: 'Ask of each line: could a stranger test it with a ruler, a timer or a spring scale?',
      },
      {
        icon: '🧠',
        title: 'B.ii: a range of genuinely different ideas',
        body: ['Three or four ideas that are really different, not one idea in different colours. Rosa’s range explores two kinds of pattern:'],
        bullets: [
          'Tactile ergonomic: linear ridges · knurled diamond texture · raised dots.',
          'Visual and aesthetic: Art Deco sunburst lines · mandala-style carving · two-tone alternating pattern for visibility.',
        ],
        example: { label: 'Good sketches', text: 'Each idea is drawn clearly, with labels (material, ridge height, where the pattern is) so someone else could read the sketch correctly.' },
      },
      {
        icon: '✅',
        title: 'B.iii: choose and justify',
        body: ['Compare the ideas against the specification, then choose, and say why the others lost.'],
        example: {
          label: 'Decision matrix (✓ meets, ✗ misses)',
          text: 'Linear ridges: force ✓ · soft ridges ✓ · visible ✗ · fits spindle ✓. Raised dots: ✓ ✓ ✗ ✓. Sunburst lines: ✓ ✗ ✓ ✓. Two-tone ridges: ✓ ✓ ✓ ✓. → Chosen: soft linear ridges with a two-tone pointer, because it is the only idea that meets all four tested lines.',
        },
      },
      {
        icon: '✏️',
        title: 'B.iv: planning drawings',
        body: ['A planning drawing is detailed enough for someone else to make the product from it.'],
        bullets: ['Top, front and side views (orthographic) with dimensions in millimetres.', 'Labels: material, ridge height, pointer position, spindle hole size.', 'A list of what is needed: materials, tools, and the time to make it.'],
        tip: 'Retrieval check: could a classmate make your design from your drawing alone, without asking you anything?',
      },
    ],
  },
  {
    type: 'mcq',
    key: 'checkB',
    label: 'Criterion B Check',
    icon: '✅',
    block: BLOCK_B,
    minutes: 5,
    pacing: 'self-paced',
    pointsPerCorrect: 10,
    intro: { title: '✅ Quick check: Developing ideas', blurb: 'Pick the strongest answer. The answer shows as soon as you choose, and each correct answer earns 10 points.' },
    questions: [
      { icon: '📐', context: 'Specification', q: 'Which specification line is strongest?', options: ['It should be strong and easy to use.', 'Turns with under 15 N of force, because the user could not manage more in my test.', 'It must look nice.', 'It should be better than other knobs.'], correct: 1 },
      { icon: '🧠', context: 'Range of ideas', q: 'Which set is a genuine RANGE of ideas?', options: ['The same knob in red, blue and green.', 'Raised dots, linear ridges and a two-tone pointer.', 'Three drawings of one idea from different angles.', 'One idea and two copies.'], correct: 1 },
      { icon: '✅', context: 'Justify', q: 'What makes a choice justified?', options: ['Choosing the one you drew best.', 'Saying it is your favourite.', 'Comparing it with the other ideas against the specification, line by line.', 'Asking a friend which they like.'], correct: 2 },
      { icon: '✏️', context: 'Planning drawing', q: 'Which makes a planning drawing accurate?', options: ['Colourful shading.', 'Labelled dimensions, views and materials.', 'A photo from the internet.', 'A very small sketch.'], correct: 1 },
    ],
  },
  {
    type: 'worksheet',
    key: 'develop',
    label: 'Develop Your Ideas',
    icon: '💡',
    block: BLOCK_B,
    minutes: 50,
    intro: { title: '💡 Criterion B — your specification, ideas and chosen design', blurb: 'Use your own need, user and brief from Criterion A. Work at your own pace: no need to click Next.' },
    sections: [
      {
        key: 'spec',
        label: 'Design specification',
        icon: '📐',
        criterion: 'B.i',
        strandLabel: 'Develop a design specification which describes the success criteria for the design of a solution',
        brief: { title: 'Brief: checkable, and linked to your research', points: ['Start from the measurable criteria in your Criterion A brief.', 'Say how you will test each line.', 'Name the evidence it came from (your interview, product analysis or a source).'] },
        fields: [
          {
            key: 'lines',
            label: 'My design specification',
            type: 'table',
            minRows: 4,
            columns: [
              { key: 'req', label: 'Requirement', placeholder: 'e.g. Turns with under 15 N of force' },
              { key: 'test', label: 'How I will test it', placeholder: 'e.g. Spring scale pulled at the edge of the knob' },
              { key: 'source', label: 'Evidence it comes from', placeholder: 'e.g. Rosa could not manage more in my interview' },
            ],
          },
          {
            key: 'ref',
            label: 'Which line matters most to your user, and why?',
            type: 'textarea',
            exemplars: [
              'The force line matters most because Rosa said she avoids the cooker when knobs need two hands, so if it still needs too much force the design fails her however good it looks.',
              'The readable-from-a-distance line matters most because my user said he cannot find the setting without picking the bottle up, and that is the main thing he asked for.',
            ],
            celebrateKeywords: ['because', 'user', 'evidence', 'test', 'matters'],
            points: 10,
          },
        ],
      },
      {
        key: 'ideas',
        label: 'A range of ideas',
        icon: '🧠',
        criterion: 'B.ii',
        strandLabel: 'Present a range of feasible design ideas which can be correctly interpreted by others',
        brief: { title: 'Brief: three or four really different ideas', points: ['Change something big between ideas, not just the colour.', 'Label each sketch: materials, sizes, how it works.', 'Photograph or scan each sketch and upload it.'] },
        fields: [
          {
            key: 'range',
            label: 'My ideas',
            type: 'table',
            minRows: 3,
            columns: [
              { key: 'idea', label: 'Idea', placeholder: 'e.g. Soft linear ridges' },
              { key: 'how', label: 'How it works and what it is made from', placeholder: 'e.g. Silicone sleeve over a plastic core' },
              { key: 'differs', label: 'How it differs from my other ideas', placeholder: 'e.g. Ridges instead of dots' },
            ],
          },
          { key: 'sketches', label: 'Photos of your idea sketches', type: 'image', hint: 'One photo per idea, labelled.', multiple: true },
        ],
      },
      {
        key: 'choose',
        label: 'Choose and justify',
        icon: '✅',
        criterion: 'B.iii',
        strandLabel: 'Present the chosen design and outline the reasons for its selection',
        fields: [
          {
            key: 'matrix',
            label: 'Compare every idea against your specification',
            type: 'table',
            minRows: 3,
            columns: [
              { key: 'idea', label: 'Idea', placeholder: 'e.g. Raised dots' },
              { key: 'meets', label: 'Specification lines it meets', placeholder: 'e.g. Force ✓, soft ✓' },
              { key: 'misses', label: 'Lines it misses', placeholder: 'e.g. Visibility ✗' },
            ],
          },
          { key: 'chosen', label: 'Which idea did you choose?', type: 'text', placeholder: 'e.g. Soft linear ridges with a two-tone pointer' },
          {
            key: 'why',
            label: 'Why this one, and why not the others?',
            type: 'textarea',
            hint: 'Refer to the specification lines, and name at least one idea you rejected.',
            exemplars: [
              'I chose the soft linear ridges with a two-tone pointer because it was the only idea that met all four tested lines, unlike the raised dots, which missed the visibility line.',
              'The sunburst looked best, but it failed the force line because its smooth centre slipped, so I rejected it and kept the ridged design that met my specification.',
            ],
            celebrateKeywords: ['because', 'unlike', 'meets', 'specification', 'rejected'],
            points: 10,
          },
        ],
      },
      {
        key: 'drawings',
        label: 'Planning drawings and requirements',
        icon: '✏️',
        criterion: 'B.iv',
        strandLabel: 'Develop accurate planning drawings and outline the requirements for the creation of the chosen solution',
        brief: { title: 'Brief: detailed enough to be made by someone else', points: ['Show top, front and side views with dimensions.', 'Label materials and key features.', 'List what you need to make it.'] },
        fields: [
          { key: 'drawing', label: 'Your planning drawing(s)', type: 'image', hint: 'Photo or screenshot of your dimensioned drawing (paper, Tinkercad or Fusion 360).', multiple: true },
          {
            key: 'notes',
            label: 'Describe what your drawing shows',
            type: 'textarea',
            hint: 'Views, sizes in mm, materials, and what the labels point to.',
            exemplars: [
              'The drawing shows the knob from the top, front and side, 40 mm wide and 25 mm tall, with ridges 1.5 mm high and 3 mm apart. Labels name the silicone sleeve, the 6 mm spindle hole and the white pointer line.',
              'My sketch is drawn to scale with every length in millimetres, the material of each part labelled, and the position of the pattern marked on each view so a classmate could make it.',
            ],
            celebrateKeywords: ['views', 'mm', 'labelled', 'material', 'scale'],
            points: 10,
          },
          { key: 'requirements', label: 'What do you need to make it?', type: 'checklist', hint: 'One row per material or tool. You will use this list again when you make it.', placeholder: 'e.g. Silicone, 3D printer' },
        ],
      },
    ],
  },

  // ============================================================ C
  {
    type: 'learn',
    key: 'exemplarC',
    label: 'Exemplar: Criterion C',
    icon: '🛠️',
    strand: 'C.i',
    block: BLOCK_C,
    minutes: 10,
    intro: { title: '🛠️ Exemplar — Criterion C: Creating the solution', blurb: 'Rosa’s knob again: how to plan it, make it, follow the plan and justify every change.' },
    pages: [
      {
        icon: '📋',
        title: 'C.i: a logical plan others could follow',
        body: ['A plan lists the steps in order, with the tools, materials, time and any safety or quality check for each step. A classmate should be able to follow it.'],
        example: {
          label: 'Plan, step by step',
          weak: '“Make the knob. Test it.”',
          strong: '“1. Model the knob in Tinkercad (30 min; check ridge height = 1.5 mm). 2. 3D-print it in PLA (45 min; supervised printer). 3. Sand the ridge tops until they feel rounded (10 min; mask on). 4. Cover with a silicone sleeve (15 min). 5. Fit on a 6 mm spindle and check it does not wobble.”',
        },
        tip: 'Other ways to make a knob: laser-cut acrylic layers, or a clay or resin mould. Choose a method you can really do in school.',
      },
      {
        icon: '🔧',
        title: 'C.ii: technical skills',
        body: ['Show good technique: accurate measuring, clean cutting or modelling, safe use of tools, and checks as you go.'],
        bullets: ['Measure twice, then cut or model.', 'Use the right tool and the safety rules for it.', 'Check against your drawing at each stage and take a photo.'],
        example: { label: 'Evidence of skill', text: 'A dated photo of the CAD model with its dimensions, a photo of the print, and a note: “ridges came out 1.4 mm, close to the 1.5 mm target; reprinted at a slightly higher setting.”' },
      },
      {
        icon: '✅',
        title: 'C.iii: follow the plan, make something that works',
        body: ['The finished solution should work as intended and match the design and specification. Test it quickly before you present it.'],
        example: { label: 'Works as intended?', text: 'The knob fits the spindle without wobble, turns by hand, and the two-tone pointer shows its position. Photos show the finished knob from three sides.' },
      },
      {
        icon: '🔁',
        title: 'C.iv: justify changes',
        body: ['Real making involves changes. List every change to the design or plan, say why, and what it did to your specification.'],
        example: {
          label: 'Change log',
          weak: '“I changed the size.”',
          strong: '“I made the ridges 0.5 mm taller than planned because the printed ridges felt too faint under Rosa’s fingers. This helps the grip line and still meets the 15 N force line.”',
        },
        tip: 'Retrieval check: for each change you made, which specification line does it affect?',
      },
    ],
  },
  {
    type: 'mcq',
    key: 'checkC',
    label: 'Criterion C Check',
    icon: '✅',
    block: BLOCK_C,
    minutes: 5,
    pacing: 'self-paced',
    pointsPerCorrect: 10,
    intro: { title: '✅ Quick check: Creating the solution', blurb: 'The answer shows as soon as you choose, and each correct answer earns 10 points.' },
    questions: [
      { icon: '📋', context: 'Plan', q: 'Which plan step could a classmate follow?', options: ['Make it.', 'Cut the base 40 mm wide from 3 mm acrylic using the laser cutter (10 min), checking the width with a ruler.', 'Do the building.', 'Use some tools.'], correct: 1 },
      { icon: '🔧', context: 'Technical skill', q: 'Which shows good technical skill?', options: ['Rushing so it is finished first.', 'Measuring, checking against the drawing, and recording it with dated photos.', 'Skipping safety rules to save time.', 'Copying a classmate’s method.'], correct: 1 },
      { icon: '✅', context: 'Works as intended', q: 'When does a solution “work as intended”?', options: ['When it looks finished.', 'When it does the job in the specification, such as turning with under 15 N of force.', 'When the teacher says so.', 'When it is the same as an existing product.'], correct: 1 },
      { icon: '🔁', context: 'Changes', q: 'Which is a justified change?', options: ['“I changed the colour.”', '“I made the ridges taller because they felt too faint, which improves the grip line.”', '“I changed it a bit.”', '“It was easier.”'], correct: 1 },
    ],
  },
  {
    type: 'worksheet',
    key: 'create',
    label: 'Create the Solution',
    icon: '🛠️',
    block: BLOCK_C,
    minutes: 100,
    intro: { title: '🛠️ Criterion C — plan it, make it, justify what changed', blurb: 'Make your chosen design from Criterion B. Add a dated photo at each stage. Work at your own pace: no need to click Next.' },
    sections: [
      {
        key: 'plan',
        label: 'Making plan',
        icon: '📋',
        criterion: 'C.i',
        strandLabel: 'Construct a logical plan which describes the efficient use of time and resources, sufficient for peers to be able to follow',
        brief: { title: 'Brief: a plan a classmate could follow', points: ['Put the steps in order.', 'Give tools, materials, time and a safety or quality check for each.', 'Say which method you will use and why (3D printing, laser cutting, hand-making, a mould).'] },
        fields: [
          {
            key: 'steps',
            label: 'My making plan',
            type: 'table',
            minRows: 5,
            columns: [
              { key: 'step', label: 'Step', placeholder: 'e.g. Model the knob in Tinkercad' },
              { key: 'resources', label: 'Tools and materials', placeholder: 'e.g. Tinkercad, school laptop' },
              { key: 'time', label: 'Time', placeholder: 'e.g. 30 min' },
              { key: 'check', label: 'Safety or quality check', placeholder: 'e.g. Ridge height is 1.5 mm' },
            ],
          },
          {
            key: 'method',
            label: 'Which making method did you choose, and why?',
            type: 'textarea',
            exemplars: [
              'I chose 3D printing because I can model the ridge pattern exactly in Tinkercad and the school printer is available, whereas laser cutting would not give me raised ridges.',
              'I will laser-cut layers of acrylic and glue them, because it gives crisp patterns and I can cut several prototypes in one lesson.',
            ],
            celebrateKeywords: ['because', 'method', 'time', 'material', 'available'],
            points: 10,
          },
        ],
      },
      {
        key: 'skills',
        label: 'Technical skills',
        icon: '🔧',
        criterion: 'C.ii',
        strandLabel: 'Demonstrate excellent technical skills when making the solution',
        brief: { title: 'Brief: show your technique', points: ['Take dated photos at key moments (model, cut, print, assemble).', 'Say what you measured or checked.', 'Mention any safety rule you followed.'] },
        fields: [
          { key: 'photos', label: 'Photos of the making process', type: 'image', hint: 'At least three dated photos from different stages.', multiple: true },
          {
            key: 'skills',
            label: 'What technical skills did you use, and how did you check your accuracy?',
            type: 'textarea',
            exemplars: [
              'I modelled the knob in Tinkercad with exact dimensions, checked the ridge height with callipers after printing (1.4 mm against 1.5 mm), and sanded the tops safely wearing a mask.',
              'I measured the acrylic twice before cutting, used the laser cutter with the teacher present, and checked each layer against my drawing before gluing.',
            ],
            celebrateKeywords: ['measured', 'checked', 'safely', 'accurate', 'tool'],
            points: 10,
          },
        ],
      },
      {
        key: 'make',
        label: 'The finished solution',
        icon: '🔨',
        criterion: 'C.iii',
        strandLabel: 'Follow the plan to create the solution, which functions as intended and is presented as a whole',
        fields: [
          { key: 'date', label: 'Date finished', type: 'text', placeholder: 'e.g. 12 Nov' },
          { key: 'final', label: 'Photos of the finished solution', type: 'image', hint: 'Show it from at least two sides, and in use if you can.', multiple: true },
          {
            key: 'works',
            label: 'Does it work as intended? How do you know?',
            type: 'textarea',
            exemplars: [
              'Yes: it fits the 6 mm spindle without wobble, turns by hand, and the two-tone pointer is visible from across the room, which matches my specification.',
              'It works as intended because I tried it on the real drawer and it stayed in place while pulled, as my plan required.',
            ],
            celebrateKeywords: ['works', 'because', 'specification', 'tested', 'fits'],
            points: 10,
          },
        ],
      },
      {
        key: 'changes',
        label: 'Changes and justification',
        icon: '🔁',
        criterion: 'C.iv',
        strandLabel: 'Fully justify changes made to the chosen design and plan when making the solution',
        brief: { title: 'Brief: every change has a reason', points: ['Say what changed and why.', 'Link it to your specification.', 'If nothing changed, explain how you know your plan was right.'] },
        fields: [
          {
            key: 'log',
            label: 'Change log',
            type: 'table',
            minRows: 2,
            columns: [
              { key: 'change', label: 'What I changed', placeholder: 'e.g. Ridges 0.5 mm taller' },
              { key: 'why', label: 'Why', placeholder: 'e.g. They felt too faint under my user’s fingers' },
              { key: 'effect', label: 'Effect on my specification', placeholder: 'e.g. Improves the grip line' },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================ D
  {
    type: 'learn',
    key: 'exemplarD',
    label: 'Exemplar: Criterion D',
    icon: '📊',
    strand: 'D.i',
    block: BLOCK_D,
    minutes: 10,
    intro: { title: '📊 Exemplar — Criterion D: Evaluating', blurb: 'Rosa’s knob again: test it with data, judge it against the specification, and say what to improve and what difference it makes.' },
    pages: [
      {
        icon: '🧪',
        title: 'D.i: a test that generates data',
        body: ['Test the things your specification promised, in a way that gives numbers or clear observations. Decide what success looks like BEFORE you test.'],
        example: {
          label: 'Rosa’s tests',
          weak: '“I will ask people if they like it.”',
          strong: '“Force test: pull a spring scale at the edge, target under 15 N. Grip test: Rosa turns the knob 10 times with wet hands, target no slips. Visibility test: three people say its position from 1 m, target 3 out of 3.”',
        },
      },
      {
        icon: '📏',
        title: 'D.ii: evaluate against the specification',
        body: ['Go line by line. Say what the test showed, and whether the line was met, partly met or not met.'],
        example: {
          label: 'Results table',
          text: 'Force: 11 N (target <15 N) → met. Ridge feel: Rosa said “a little sharp” → partly met. Visibility: 3/3 people → met. Spindle fit: slight wobble → not met.',
          note: 'An honest “not met” earns more than a made-up success.',
        },
      },
      {
        icon: '🔧',
        title: 'D.iii: how could it be improved?',
        body: ['Improvements must come from the test results, and say exactly what to change.'],
        example: {
          label: 'From result to improvement',
          weak: '“Make it better.”',
          strong: '“The ridges felt a little sharp, so the next version should round off the ridge tops and add a flexible silicone sleeve. The spindle wobble means the hole should be 0.2 mm smaller.”',
        },
      },
      {
        icon: '🌍',
        title: 'D.iv: the impact on the user',
        body: ['Say what difference the solution would make in your user’s real life, and for whom else (a family, a community, the environment).'],
        example: { label: 'Impact', text: '“Rosa can turn her cooker knob with one hand without it slipping, so she can keep cooking independently and feels less frustrated. A printed knob also uses little plastic and can be replaced when it wears.”' },
        tip: 'Retrieval check: what did your user actually say or do when they tried it?',
      },
    ],
  },
  {
    type: 'mcq',
    key: 'checkD',
    label: 'Criterion D Check',
    icon: '✅',
    block: BLOCK_D,
    minutes: 5,
    pacing: 'self-paced',
    pointsPerCorrect: 10,
    intro: { title: '✅ Quick check: Evaluating', blurb: 'The answer shows as soon as you choose, and each correct answer earns 10 points.' },
    questions: [
      { icon: '🧪', context: 'Testing', q: 'Which test generates data?', options: ['Asking “do you like it?”', 'Timing how long it takes the user to turn it 10 times and measuring the force with a spring scale.', 'Looking at it carefully.', 'Showing it to a friend.'], correct: 1 },
      { icon: '📏', context: 'Evaluating', q: 'How do you evaluate against the specification?', options: ['Say it is great.', 'Go through each line and say met, partly met or not met, with the test result.', 'Only mention the successes.', 'Compare it to a bought product.'], correct: 1 },
      { icon: '🔧', context: 'Improvement', q: 'Which is a useful improvement?', options: ['Make it better.', 'Round off the ridge tops because the user said they were sharp.', 'Change the colour.', 'Make it bigger.'], correct: 1 },
      { icon: '🌍', context: 'Impact', q: 'What does “impact on the user” mean?', options: ['How much it cost.', 'What difference it makes in their real life, using what they said or did.', 'How many people liked a photo.', 'How long it took to make.'], correct: 1 },
    ],
  },
  {
    type: 'worksheet',
    key: 'evaluate',
    label: 'Evaluate Your Solution',
    icon: '📊',
    block: BLOCK_D,
    minutes: 50,
    intro: { title: '📊 Criterion D — test it, judge it, improve it', blurb: 'Test your finished solution with your own user, then evaluate it against the specification you wrote in Criterion B. Work at your own pace: no need to click Next.' },
    sections: [
      {
        key: 'testplan',
        label: 'Testing method',
        icon: '🧪',
        criterion: 'D.i',
        strandLabel: 'Design testing methods, which generate data, to measure the success of the solution',
        brief: { title: 'Brief: set the target before you test', points: ['Test the lines in your specification.', 'Say how you will measure each (a timer, a ruler, a scale, a rating).', 'Write the target for success first.'] },
        fields: [
          {
            key: 'tests',
            label: 'My tests',
            type: 'table',
            minRows: 3,
            columns: [
              { key: 'line', label: 'Specification line', placeholder: 'e.g. Turns with under 15 N' },
              { key: 'method', label: 'How I will test it', placeholder: 'e.g. Spring scale at the knob edge' },
              { key: 'target', label: 'Target for success', placeholder: 'e.g. Under 15 N, three tries' },
            ],
          },
        ],
      },
      {
        key: 'results',
        label: 'Results and evaluation',
        icon: '📏',
        criterion: 'D.ii',
        strandLabel: 'Explain the success of the solution against the design specification',
        brief: { title: 'Brief: honest, line by line', points: ['Give the actual result for every test.', 'Say met, partly met or not met.', 'Include a photo of the test if you can.'] },
        fields: [
          {
            key: 'table',
            label: 'Results against my specification',
            type: 'table',
            minRows: 3,
            columns: [
              { key: 'line', label: 'Specification line', placeholder: 'e.g. Force under 15 N' },
              { key: 'result', label: 'Result', placeholder: 'e.g. 11 N' },
              { key: 'status', label: 'Met / partly / not met', placeholder: 'met' },
            ],
          },
          { key: 'photos', label: 'Photos of the testing', type: 'image', multiple: true },
          {
            key: 'explain',
            label: 'How successful is your solution overall? Explain using your results.',
            type: 'textarea',
            exemplars: [
              'The solution was mostly successful: it met the force and visibility lines (11 N and 3 out of 3 people), but only partly met the grip line because my user said the ridges felt a little sharp.',
              'Three of my four specification lines were met. The spindle fit was not met because there was a slight wobble, which my test showed clearly.',
            ],
            celebrateKeywords: ['met', 'because', 'result', 'specification', 'user said'],
            points: 10,
          },
        ],
      },
      {
        key: 'improve',
        label: 'Improvements',
        icon: '🔧',
        criterion: 'D.iii',
        strandLabel: 'Explain how the solution could be improved',
        fields: [
          {
            key: 'improve',
            label: 'What would you change in the next version, and why?',
            type: 'textarea',
            hint: 'Each improvement should come from a test result or something your user said.',
            exemplars: [
              'Because the ridges felt a little sharp to my user, the next version should round off the ridge tops and add a soft silicone sleeve. I would also make the spindle hole 0.2 mm smaller to remove the wobble.',
              'My test showed the pointer was only visible from 0.5 m, so I would use a thicker white line and a darker base colour to be readable from 1 m.',
            ],
            celebrateKeywords: ['because', 'next version', 'test', 'user', 'change'],
            points: 10,
          },
        ],
      },
      {
        key: 'impact',
        label: 'Impact',
        icon: '🌍',
        criterion: 'D.iv',
        strandLabel: 'Explain the impact of the solution on the client or target audience',
        fields: [
          {
            key: 'impact',
            label: 'What difference would this make for your user, and for anyone else?',
            type: 'textarea',
            exemplars: [
              'Rosa can now turn her cooker knob with one hand without it slipping, so she can keep cooking independently. Other people with weak grip, or children, could use it too.',
              'My user saves about ten minutes each morning and feels less stressed, so the solution has a real, positive effect on his routine.',
            ],
            celebrateKeywords: ['difference', 'user', 'because', 'independent', 'others'],
            points: 10,
          },
          {
            key: 'journal',
            label: 'Final journal entry: what did the whole design cycle teach you, and what will you do differently next time?',
            type: 'textarea',
            exemplars: [
              'I learned that my first idea was not the best one: testing with my user showed what actually mattered. Next time I will test earlier, before I finish making.',
              'The research in Criterion A changed my specification, and my specification decided how I judged the result. Next time I will write my testing plan at the same time as my specification.',
            ],
            celebrateKeywords: ['learned', 'next time', 'because', 'test', 'user'],
            points: 10,
          },
          { key: 'confidence', label: 'How confident are you in your solution?', type: 'select', options: ['Very confident', 'Fairly confident', 'A bit unsure', 'I need help'] },
        ],
      },
    ],
  },
]
