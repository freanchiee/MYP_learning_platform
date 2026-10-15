// MYP4 — Prototyping for People: model answers written for the choices a student makes.
//
//   1. DIRECTION — chosen in Persona & Empathy → Direction. Used for the need, the traits, the specification, the
//      choice, the planning drawing, the prototype, the test, the improvements, the product gap and the brief, so a
//      student designing a kitchen aid is never shown a model answer about a classroom.
//   2. PERSONA — the persona-pack character interviewed in Persona & Empathy → Interview. Used for the empathy map
//      and for the impact on the user, which must be about that exact person.
//
// Keyed by "<stageKey>.<sectionKey>.<fieldKey>", then by the direction's label as written in the select, or by the
// persona's id (see personas.ts). The teacher can reveal one to a single student from the review window. A direction
// of "Something else" has no model answers (nothing could be specific), so it falls back to each field's own exemplars.

type ByChoice = Record<string, string[]>

const OH = 'One-handed tool'
const LV = 'Low-vision object'
const SO = 'Sensory organiser'
const EK = 'Elderly-friendly kitchen aid'
const CA = 'Classroom accessibility'

export const MYP4_DIRECTION_EXEMPLARS: Record<string, ByChoice> = {
  'week1.opportunity.mine': {
    [OH]: [
      'How might we help Marcus open jars and bottles with one hand, because he can no longer hold a jar steady while he twists, and he now avoids cooking for himself, which he used to enjoy after work?',
      'How might we help Aiko, 9, zip her backpack and hold paper still with her one hand, because she needs a friend’s help every day and she wants to do school things on her own?',
    ],
    [LV]: [
      'How might we help Elias read the labels on his medicine and food, because his central vision loss means standard print blurs, and mistakes could be unsafe for someone who lives alone?',
      'How might we help Priya find the pen or ruler she needs in her pencil case without tipping everything out, because she loses time in Design lessons and does not want to ask for help.',
    ],
    [SO]: [
      'How might we help Leo get through the noisy, crowded canteen at lunch, because the sound and crush are painful for him and he often skips eating, which leaves him too tired to learn in the afternoon?',
      'How might we help Noor create a calm, uncluttered corner at her desk, because flickering light and visual clutter give her headaches, and she needs to stay focused to support pupils.',
    ],
    [EK]: [
      'How might we help Rosa peel and chop vegetables without gripping thin handles, because her arthritis makes her hands hurt after two minutes, and cooking is what keeps her independent and happy?',
      'How might we help Tom pour hot water without spilling it, because his hand tremor makes a full kettle unsafe, and he wants to keep making his own tea and meals.',
    ],
    [CA]: [
      'How might we help Zara reach the materials on high classroom shelves from her wheelchair, because she has to wait for someone to fetch them, and she wants to be as independent in Design as everyone else.',
      'How might we help Ben keep track of his worksheets and instructions, because loose paper and spoken multi-step instructions get lost, and he loses marks that have nothing to do with how hard he tries.',
    ],
  },

  'week1.persona.traits': {
    [OH]: [
      'Right-handed with one working hand; grip diameter about 4.5 cm; reach across a worktop about 55 cm. This affects my design because anything that needs two hands, or a reach of more than 55 cm, will not work, so my tool must hold the object steady by itself.',
      'Confident and independent, hates being helped, cooks most nights. Because he wants to do things himself, my design must look like a normal kitchen tool and not a medical device.',
    ],
    [LV]: [
      'Central vision loss, side vision intact, needs text roughly 10 times larger than standard print, reads best in bright, even light. This affects my design because labels must be very large and high-contrast, and placed where he does not have to lean in.',
      'Uses a magnifier, prefers touch and colour cues, lives alone. Because he cannot rely on small print, my design must give information by touch or large contrast, not only by text.',
    ],
    [SO]: [
      'Sensitive to noise, light and scratchy textures, prefers routine, uses headphones between lessons. This affects my design because it must be quiet, soft to touch and predictable, with no flashing parts.',
      'Needs a small, simple, uncluttered space with everything within reach (about 50 cm). Because clutter causes stress, my design must hold objects in one tidy place with few visual details.',
    ],
    [EK]: [
      'Arthritis in both hands, pain after about two minutes of gripping, prefers thick, soft handles of about 5 cm. This affects my design because the handle must spread the force over her palm and need little continuous squeezing.',
      'Mild hand tremor, about 3 mm at rest, worse when tired, prefers heavy, stable tools. Because the shake makes light tools hard to control, my design needs weight or a wide base to stay steady.',
    ],
    [CA]: [
      'Full-time wheelchair user, seat height 51 cm, comfortable overhead reach about 118 cm, strong upper body. This affects my design because anything she needs must sit below 118 cm and have room for the wheelchair to reach it.',
      'Benefits from written, step-by-step instructions, fidgets while concentrating, keeps everything within about 42 cm. Because he loses loose paper, my design must keep each task’s materials together in one visible place.',
    ],
  },

  'develop.specification.spec': {
    [OH]: [
      'It must open a standard jar using only one hand in under 15 seconds, because Marcus currently avoids jars. It must hold the jar steady without him gripping it, since his left hand cannot. It must need less than 15 N of force, and be washable in a sink.',
      'It must be operated with one hand and zipped or closed in under 5 seconds, because Aiko needs help today. The grip must be no wider than 3.2 cm so it fits her hand, and it must work on a school bag she carries herself.',
    ],
    [LV]: [
      'The text must be at least 25 mm tall with a contrast ratio of at least 7:1, because Elias needs print about ten times larger than normal. It must be readable from arm’s length without a magnifier, and identifiable by touch.',
      'Each compartment must be found by touch without looking, using different textures or raised marks, because Priya cannot scan a cluttered pencil case. It must use bold, high-contrast colours she can tell apart in classroom light.',
    ],
    [SO]: [
      'It must make no noise when opened or used, because sudden sound startles Leo. It must fit in a school bag (under 20 × 15 × 6 cm), use soft materials with no scratchy seams, and hold at least three calming items.',
      'It must use a calm colour palette with no more than three colours and no flashing or reflective parts, because Noor is sensitive to visual clutter. It must keep everything within 50 cm and take under ten seconds to set up.',
    ],
    [EK]: [
      'The handle must be at least 5 cm thick and soft, because Rosa’s joints hurt with thin hard handles. It must work with less than 10 N of force, wash in a sink, and fit in a standard kitchen drawer.',
      'The tool must weigh at least 300 g or have a base wider than 12 cm, because Tom’s tremor makes light tools shake. It must have numbers at least 15 mm tall, and let him pour without lifting a full kettle.',
    ],
    [CA]: [
      'Everything must be reachable below 118 cm and from a seated position, because Zara’s overhead reach is 118 cm. It must leave at least 90 cm of clear width for the wheelchair, and open with one hand using under 20 N.',
      'It must hold a day’s worksheets in one place with a numbered, written checklist, because Ben loses loose paper. It must fit on a desk beside his reach (about 42 cm) and take under 10 seconds to find any sheet.',
    ],
  },

  'develop.choose.justify': {
    [OH]: [
      'I chose the wall-clamp lid holder because it meets all three tested lines (one hand, under 15 s, under 15 N), unlike the gripper sleeve, which still needed Marcus to hold the jar with his weak hand and failed my one-hand requirement.',
      'The zipper pull ring beat the magnetic clasp because it can be closed in under 5 seconds with one hand and fits Aiko’s 3.2 cm grip. The clasp looked clever, but it needed two hands to line up, so I rejected it.',
    ],
    [LV]: [
      'I chose the raised-dot, high-contrast label system because it can be read by touch and sight from arm’s length, unlike the large-print sticker alone, which did not help Elias when the light was low.',
      'The textured, colour-coded divider tray won because Priya can find each section by touch without looking. The clear lid idea was rejected because glare on the plastic made it harder, not easier, for her to see.',
    ],
    [SO]: [
      'I chose the soft-lined, silent-closing box because it meets the no-noise and bag-size lines, unlike the zip pouch, which was loud and made Leo flinch in my test. The magnetic lid was rejected because the click startled him.',
      'The single-colour desk corner organiser won for Noor because it uses three calm colours and keeps everything within 50 cm. The patterned tray looked nicer, but its busy design broke her low-clutter requirement.',
    ],
    [EK]: [
      'I chose the 5 cm silicone-covered peeler because it spreads force across Rosa’s palm and needs under 10 N, unlike the thin steel handle, which hurt after two minutes. I rejected the electric peeler because it was too heavy for her to hold.',
      'The weighted, wide-based kettle tipper won because it kept Tom steady despite his 3 mm tremor and let him pour without lifting. The lightweight jug idea was rejected because it shook too easily.',
    ],
    [CA]: [
      'I chose the low rail shelf with pull-down trays because every item sits under 118 cm, so Zara can reach them from her chair. The high cupboard with a long grabber was rejected because it needs fine control at full stretch.',
      'I chose the numbered folder wall with a written checklist because Ben can see every sheet and the steps at once. The digital reminder was rejected because it adds another screen to his distractions.',
    ],
  },

  'develop.drawings.drawing': {
    [OH]: [
      'The drawing shows the lid holder from the top, front and side, 18 cm wide and 7 cm high, with the clamp angle marked at 35°, the rubber lining labelled 3 mm silicone and the wall-fixing holes dimensioned in millimetres.',
      'My sketch shows the zip pull ring at actual size: 30 mm across, with a 3.2 cm grip loop. Labels name the nylon cord, the knot position and the 12 cm length from the zip.',
    ],
    [LV]: [
      'The drawing shows the label holder from the front and side, with letters 25 mm high, a 5 mm raised border, a black-on-yellow colour note, and dimensions that place the text at Elias’s 118 cm seated eye height.',
      'The sketch shows the divider tray from above with four sections labelled by texture (ridged, dotted, smooth, woven), each 6 cm wide, with the colour of each section written in.',
    ],
    [SO]: [
      'The drawing shows the box open and closed in three views, 20 × 15 × 6 cm, with a felt lining of 3 mm marked, a magnet-free soft-close flap labelled, and the three compartments dimensioned.',
      'The sketch shows the desk corner organiser from above and the side, 28 × 20 cm, three calm colours named, rounded corners marked, and the distance from the user’s hand (48 cm) shown with an arrow.',
    ],
    [EK]: [
      'The drawing shows the peeler from the side and the top, with a 5 cm diameter handle, a 15 cm length, the silicone sleeve labelled 4 mm, and the blade position dimensioned in millimetres.',
      'My sketch shows the kettle tipper from the front and side, with a 14 cm wide base, a 350 g weight marked, the tilt arm angle at 40° and the numbers 15 mm tall on the dial.',
    ],
    [CA]: [
      'The drawing shows the shelf wall from the front and side, with shelf heights marked at 40, 80 and 110 cm, 90 cm clear width in front, and the pull-down tray handles labelled as 3 cm thick.',
      'The sketch shows the folder wall from the front with seven numbered slots, 25 cm wide, a checklist card on the left, and a label showing the whole unit stays within 42 cm of Ben’s hand.',
    ],
  },

  'make.plan.proves': {
    [OH]: [
      'My first prototype must prove that the jar stays still while Marcus turns the lid with one hand, so I will test it on a real jar and time how long it takes.',
      'It must prove that Aiko can close the zip with one hand in under 5 seconds, so I will have her try it three times on a real bag.',
    ],
    [LV]: [
      'My first prototype must prove that Elias can read the label from arm’s length without a magnifier, so I will test three letter heights with him.',
      'It must prove that Priya can find the item she wants by touch with her eyes closed, so I will test all four sections with her.',
    ],
    [SO]: [
      'My first prototype must prove that the box opens and closes without any sound that startles Leo, so I will test it in the school corridor and ask him to rate it.',
      'It must prove that my corner organiser keeps everything within Noor’s 48 cm reach, so I will measure and watch her use it for ten minutes.',
    ],
    [EK]: [
      'My first prototype must prove that Rosa can peel a potato in under 60 seconds with less than 10 N of grip force, so I will test with a spring scale and a timer.',
      'It must prove that Tom can pour a cup of hot water without spilling, so I will test with a safe cup of room-temperature water first.',
    ],
    [CA]: [
      'My first prototype must prove that Zara can reach and take any item from the shelf from her seat, so I will test every shelf with her.',
      'It must prove that Ben can find a particular worksheet in under 10 seconds, so I will time him three times.',
    ],
  },

  'make.build.learned': {
    [OH]: [
      'The clamp held the jar still, but the rubber lining slipped on wet glass, so next I will add a ridged silicone pad. It did not fit the biggest jars at all, which I did not expect, so I will make the clamp adjustable.',
      'The pull ring worked because Aiko closed the zip in four seconds, but the cord was too long and caught, so I will shorten it to 9 cm and tie it with a firmer knot.',
    ],
    [LV]: [
      'The 25 mm letters were readable from arm’s length, but the yellow looked washed out in dim light, so next I will test a darker background. The raised border helped Elias find the edge by touch.',
      'The tray sections were easy to find by texture, but the ridged and dotted sections felt too similar, so I will make the dots bigger and the ridges deeper.',
    ],
    [SO]: [
      'The soft-close flap made no noise, which worked because Leo did not flinch, but the felt lining caught on the zip, so I will glue it flatter. The box was slightly too tall for a school bag, so I will cut 1 cm off.',
      'The desk organiser kept everything within reach, but the green I chose looked bright under the classroom lights, so I will test a softer green with Noor.',
    ],
    [EK]: [
      'The thick handle felt comfortable and Rosa peeled with less strain, but the silicone slid on wet hands, so I will add shallow ridges. The peeler blade was too far forward, which I did not expect, so I will move it 5 mm back.',
      'The tipper stayed steady, but it took too long to set up for Tom, so I will redesign the cradle so the kettle drops straight in. The weight made it stable but heavy to lift.',
    ],
    [CA]: [
      'Zara could reach the first two shelves easily, but the top one was too high at 125 cm, so next I will lower it to 110 cm. The pull-down trays moved smoothly, which worked well.',
      'Ben found his sheets quickly, but the numbers were too small, so I will increase them to 30 mm. The checklist card kept falling out, so I will fix it into the frame.',
    ],
  },

  'evaluate.results.evaluation': {
    [OH]: [
      'Met: the jar stayed still and Marcus opened it in 11 seconds (target under 15). Met: force was 12 N (target under 15). Partly met: it only fits jars up to 8 cm wide, so larger jars did not work. Not met: it is hard to wash around the clamp.',
      'Met: Aiko closed the zip in 4 seconds with one hand. Met: the loop fits her 3.2 cm grip. Partly met: it works on two of her three bags, because the third zip pull is much bigger.',
    ],
    [LV]: [
      'Met: Elias read the label from 55 cm without a magnifier (target arm’s length). Met: contrast measured 9:1 (target 7:1). Partly met: it was harder to read in dim evening light. Not met: touch identification, because the raised marks were too small.',
      'Met: Priya found three of four sections with her eyes closed (target all four, so partly met). Met: the colours were distinct in classroom light. Not met: the ridged and dotted sections felt too similar.',
    ],
    [SO]: [
      'Met: the box was silent (Leo rated the noise 0 out of 5). Met: it fits in the bag at 19 × 14 × 5 cm. Partly met: it holds three items, but the fourth would not fit. Not met: one seam felt scratchy to him.',
      'Met: everything is within 48 cm and it took 8 seconds to set up. Met: only three calm colours are used. Partly met: Noor still found the green slightly bright under the fluorescent lights.',
    ],
    [EK]: [
      'Met: handle thickness 5 cm and Rosa peeled a potato in 52 seconds (target under 60). Met: grip force was 8 N (target under 10). Partly met: it wipes clean but the ridges trap peel. Not met: it does not fit in a standard drawer.',
      'Met: the base is 14 cm wide and weighs 380 g, and Tom poured without spilling in three tries. Partly met: the numbers are 12 mm tall instead of the 15 mm I specified. Not met: it is too heavy for him to lift.',
    ],
    [CA]: [
      'Met: Zara reached every item on the first two shelves from her seat. Partly met: the top shelf at 125 cm is above the 118 cm target. Met: there is 92 cm of clear width. Not met: the door handle takes 25 N to pull, over the 20 N target.',
      'Met: Ben found any sheet in 7 seconds on average (target under 10). Met: the unit stays within 42 cm of his hand. Partly met: the checklist card has to be replaced when it falls out.',
    ],
  },

  'evaluate.improve.improve': {
    [OH]: [
      'Because the jar only fit up to 8 cm wide, the next version should have an adjustable clamp that opens to 11 cm. Because the rubber slipped on wet glass, I would add ridges to the pad and use food-safe silicone that can be washed.',
      'Because Aiko’s third bag has a larger zip, the next version should have a pull ring that clips on and adjusts. Because the cord caught, I would shorten it and add a small stopper.',
    ],
    [LV]: [
      'Because the yellow background looked faint in dim light, the next version should use black on a bright white background with a thicker border. Because the raised marks were too small, I would make them 2 mm high.',
      'Because the ridged and dotted textures felt too similar, the next version should use a rough fabric, a smooth surface and bold bumps. I would also add a Braille-style dot pattern for the section number.',
    ],
    [SO]: [
      'Because one seam felt scratchy to Leo, the next version should use a flat, covered seam or a smoother fabric. Because the box would not fit a fourth item, I would make it 1 cm deeper and test again in the bag.',
      'Because the green was slightly bright, the next version should use a soft grey-green and a matte finish. I would also add a lid so the contents are hidden when Noor needs less visual information.',
    ],
    [EK]: [
      'Because the ridges trapped peel, the next version should use a smoother grip pattern that wipes clean. Because it did not fit a standard drawer, I would shorten the handle by 2 cm without going below 5 cm thickness.',
      'Because the tipper was too heavy for Tom to lift, the next version should be made from lighter material with the weight lower in the base. Because the numbers were small, I would print them 15 mm tall.',
    ],
    [CA]: [
      'Because the top shelf was above Zara’s 118 cm reach, the next version should lower it to 110 cm. Because the handle took 25 N, I would add a longer lever or a lighter spring to bring it under 20 N.',
      'Because the checklist card fell out, the next version should clip into the frame. Because Ben still needs a prompt, I would add a coloured tab for each day so he can see what is next at a glance.',
    ],
  },

  'analyse.products.gap': {
    [OH]: [
      'None of the three jar openers can be used with one hand and carried anywhere: the gripper still needs a second hand, the wall opener needs drilling and the electric one is expensive. So there is an opportunity to design a cheap, portable one-handed lid holder.',
      'The zip aids I looked at either need two hands to attach or do not fit a child’s grip. So there is an opportunity to design a one-handed pull ring sized for a small hand.',
    ],
    [LV]: [
      'The raised stickers are cheap but cannot say what an item is, and the talking reader says it but costs too much and needs batteries. So there is an opportunity to design a low-cost label that works by touch and by sight.',
      'The magnifier lamps help with reading but not with finding things, and the organiser trays are not designed for low vision. So there is an opportunity to design a tactile, high-contrast organiser.',
    ],
    [SO]: [
      'The fidget toys calm but cannot organise, and the compartment boxes organise but are bulky and loud to open. So there is an opportunity to design a quiet, soft, bag-sized calm kit.',
      'The desk organisers I found are bright and busy, which is the opposite of what Noor needs. So there is an opportunity to design a calm, low-clutter organiser with muted colours.',
    ],
    [EK]: [
      'Each aid makes one task easier, but none is a comfortable, easy-clean tool small enough for a drawer. So there is an opportunity to design a thick-handled, washable tool that fits a standard kitchen.',
      'The tremor-friendly products are either heavy to lift or expensive, and few have large numbers. So there is an opportunity to design a steady, lightweight pouring aid with clear markings.',
    ],
    [CA]: [
      'The adjustable shelving products need installation or fixed heights, and none give a wheelchair user full independent reach. So there is an opportunity to design a low, reach-friendly classroom storage unit.',
      'The organisation tools I found are digital or too complicated, and none give a visual, step-by-step system for a student with ADHD. So there is an opportunity to design a simple, visible paper system.',
    ],
  },

  'analyse.brief.sentence': {
    [OH]: [
      'I am designing a one-handed lid holder for Marcus, made from silicone and wood, because my interview and product analysis show he needs to open jars without a second hand.',
      'I am designing a one-handed zip pull ring for Aiko, made from cord and rubber, because my research shows she needs to close her bag without help.',
    ],
    [LV]: [
      'I am designing a raised-dot, high-contrast label for Elias, made from plastic and card, because my research shows he cannot read small print and needs to identify items by touch.',
      'I am designing a textured, colour-coded pencil tray for Priya, made from plastic and felt, because my research shows she needs to find items quickly without a magnifier.',
    ],
    [SO]: [
      'I am designing a soft-lined, silent calm box for Leo, made from felt and card, because my research shows noise and clutter overwhelm him and he needs his items in one place.',
      'I am designing a muted, low-clutter desk organiser for Noor, made from matte plastic and card, because my research shows visual clutter and bright light give her headaches.',
    ],
    [EK]: [
      'I am designing a thick-handled, easy-clean peeler for Rosa, made from silicone and steel, because my research shows arthritis makes thin handles painful and she wants to keep cooking.',
      'I am designing a weighted kettle tipper for Tom, made from wood and metal, because my research shows his tremor makes lifting a full kettle unsafe.',
    ],
    [CA]: [
      'I am designing a low, reach-friendly shelf for Zara, made from plywood and steel, because my research shows she cannot reach high shelves from her wheelchair.',
      'I am designing a numbered folder wall for Ben, made from card and plywood, because my research shows loose paper and verbal instructions make him lose work.',
    ],
  },

  'analyse.brief.text': {
    [OH]: [
      'Marcus, 34, lost the use of his left hand and cannot open jars. My interview showed he avoids cooking, and my analysis found that all three openers need two hands, fixings or a high price. My solution must open a standard jar with one hand in under 15 seconds, need under 15 N of force and be washable.',
      'Aiko, 9, was born with one hand and cannot zip her bag alone. My interview showed she needs help every day, and my analysis found no pull aid sized for a small grip. My solution must work with one hand, fit a 3.2 cm grip and close the zip in under 5 seconds.',
    ],
    [LV]: [
      'Elias, 71, has macular degeneration and cannot read small print. My interview showed he asks family to check his labels, and my analysis found that touch stickers cannot say what an item is. My solution must have text 25 mm tall with 7:1 contrast, be identified by touch, and need no batteries.',
      'Priya, 15, has low vision and loses time finding items. My interview showed she tips out her pencil case, and my analysis found no tray built for low vision. My solution must have sections found by touch, use bold colours and fit in her bag.',
    ],
    [SO]: [
      'Leo, 12, finds noise and clutter painful. My interview showed he waits for quiet before finding his things, and my analysis found calming products are loud or bulky. My solution must be silent, fit a school bag under 20 × 15 × 6 cm, use soft materials and hold three items.',
      'Noor, 26, is sensitive to visual clutter and flicker. My interview showed she gets headaches by mid-morning, and my analysis found organisers are bright and busy. My solution must use three calm colours, keep everything within 50 cm and set up in under ten seconds.',
    ],
    [EK]: [
      'Rosa, 78, has arthritis and avoids peeling. My interview showed thin handles hurt after two minutes, and my analysis found no peeler that is comfortable, easy to clean and small. My solution must have a handle at least 5 cm thick, need under 10 N and wash in a sink.',
      'Tom, 82, has a hand tremor and fears pouring hot water. My interview showed he spills when the kettle is full, and my analysis found tipping aids are heavy or costly. My solution must weigh over 300 g, have numbers 15 mm tall and let him pour without lifting.',
    ],
    [CA]: [
      'Zara, 13, uses a wheelchair and cannot reach high shelves. My interview showed she waits for others to fetch materials, and my analysis found storage units are fixed or hard to reach. My solution must keep every item below 118 cm, leave 90 cm of clear width and open with under 20 N.',
      'Ben, 11, has ADHD and loses loose paper. My interview showed he forgets multi-step instructions, and my analysis found tools are digital or complicated. My solution must keep sheets visible, use a written checklist and let him find a sheet in under 10 seconds.',
    ],
  },
}

// ---------------------------------------------------------------- persona axis
const e = (...x: string[]) => x

export const MYP4_PERSONA_EXEMPLARS: Record<string, ByChoice> = {
  'week1.empathy.says': {
    marcus: e('“I can do it, it just takes me ages.” “I avoid jars because I need a second pair of hands.” “I do not want something that looks like a hospital gadget.”', 'He said he cooks most nights, that jars and bottles are the worst part, and that he would rather work around a problem than ask for help.'),
    aiko: e('“I can do it myself!” “My friend zips my bag when I get stuck.” “I like drawing, but the paper moves when I cut.”', 'She said she is used to doing everything with one hand, but that zips and scissors need another hand, and she does not want a special thing that makes her stand out.'),
    elias: e('“I cannot read the small print any more.” “I use a magnifier, but it is slow and I have to find it first.” “I live alone, so I have to get the labels right.”', 'He said print on medicine and food is too small, that low light makes colours blur, and that he wants to stay independent.'),
    priya: e('“I can read, I just need to be close.” “Finding my pen in a full pencil case takes forever.” “I do not want people making a fuss.”', 'She said the board is hard to read from the back, that she loses time looking for items, and that she wants to manage on her own.'),
    leo: e('“The canteen is too loud.” “I need things to stay the same.” “Tags and seams are the worst.”', 'He said sudden noise hurts, that he skips lunch when it is crowded, and that he likes routines and quiet one-to-one time.'),
    noor: e('“The lights flicker and it gives me a headache.” “I need a calm corner.” “Visual clutter wears me out.”', 'She said she works best with a simple desk and soft light, and that busy classrooms make her tired and tense by lunchtime.'),
    rosa: e('“My hands hurt after a couple of minutes.” “I love cooking, I just have to plan around it.” “Jars are my enemy.”', 'She said thin handles are painful, that she wants to keep cooking by herself, and that she does not want to stop doing what she loves.'),
    tom: e('“My hands shake more when I am tired.” “I want to make my own tea.” “I prefer heavy things; light ones wobble.”', 'He said pouring hot water scares him, that small numbers are hard to read, and that he is determined to look after himself.'),
    zara: e('“I know which parts of the school work for me.” “I hate waiting for someone to get things down.” “I want to build things like everyone else.”', 'She said high shelves and tight desk rows get in her way, and that she has plenty of opinions on how classrooms should be designed.'),
    ben: e('“I am not lazy, I just lose my worksheets.” “I forget the steps if they are only said out loud.” “I get bored if it is the same thing for too long.”', 'He said written steps help, that loose paper disappears, and that he does his best thinking when he can fidget.'),
  },
  'week1.empathy.thinks': {
    marcus: e('He may think people see his hand before they see him, and that asking for help means giving up independence. He probably wonders why everyday objects assume two hands.', 'He might think he should be able to manage on his own, and worry that a clumsy tool will draw attention.'),
    aiko: e('She may think she should be able to do everything her friends can, and wonder why school things are not made for her. She may worry about being the odd one out.', 'She might think asking for help makes her look different, and want a solution she can use without anyone noticing.'),
    elias: e('He may think he is becoming a burden, and worry about a medicine mistake. He probably misses reading easily and wonders what he will lose next.', 'He might think a bigger print label would fix most of his problems, but doubt anyone will design it properly.'),
    priya: e('She may think she works twice as hard as others to get the same result, and that people assume she cannot manage. She probably wants to be seen as capable.', 'She might think the classroom was built without her in mind, and wonder how much time she loses each day.'),
    leo: e('He may think the world is too loud and that other people do not understand. He probably thinks about escape routes in crowded places.', 'He might think he is being judged for needing headphones, and worry about getting to the next lesson without getting overwhelmed.'),
    noor: e('She may think she has to hide how much the light and clutter bother her, and worry about burning out at work. She probably wishes there were somewhere quiet.', 'She might think a small change like a calmer desk would help a lot, but not want to ask for special treatment.'),
    rosa: e('She may think her hands are letting her down, and worry that one day she will not be able to cook. She probably wishes tools were made for hands like hers.', 'She might think she should not complain, and that asking for help means losing independence.'),
    tom: e('He may think he is losing control of his hands, and worry about a spill or a burn. He probably does not want to be fussed over.', 'He might think a steadier kettle would let him carry on as before, but worry it would cost too much.'),
    zara: e('She may think she has to plan every day around access, and that others forget how much she can do. She probably wishes the school had asked her first.', 'She might think many problems are easy to fix, and wonder why nobody has fixed them yet.'),
    ben: e('He may think he is letting people down when he loses things, and that teachers see him as careless. He probably thinks his ideas are good, but his organisation is not.', 'He might think a simple system would help if it were visual, but worry it will be another thing to forget.'),
  },
  'week1.empathy.does': {
    marcus: e('He braces jars against his body or the worktop, uses a towel for grip, and sometimes asks a neighbour. He often chooses food that does not need opening.', 'He cooks simple meals, uses one knife and a board with a damp cloth, and avoids tools that need two hands.'),
    aiko: e('She holds paper with her elbow, asks a friend to zip her bag, and carries her tray with her body. She draws a lot and practises tricks to do things alone.', 'She finds her own workarounds, such as pinning a zip with her chin, and gets frustrated when they fail.'),
    elias: e('He uses a handheld magnifier, memorises where things are in the kitchen and keeps a bright lamp by the table. He sometimes asks family to read medicine labels.', 'He puts rubber bands on bottles to tell them apart and reads labels very slowly.'),
    priya: e('She sits near the front, uses a phone magnifier and tips her pencil case onto the desk to find items. She takes photos of the board to read later.', 'She keeps her bag very organised, but still loses time looking for small things.'),
    leo: e('He wears noise-cancelling headphones between lessons, eats in a quiet corridor when the canteen is full and cuts labels out of his clothes. He follows the same route each day.', 'He plans his day around quiet places and avoids busy corridors when possible.'),
    noor: e('She wears tinted glasses, keeps a tidy desk with a small organiser and asks to switch off flickering lights. She builds short calm breaks into her day.', 'She covers busy displays and puts items in boxes so they are out of sight.'),
    rosa: e('She rests her hands often, uses a damp cloth for jars, and chooses lighter pans. She plans cooking in short bursts and asks the neighbour for help with very tight lids.', 'She wraps tape around thin handles to make them thicker, and cooks every day despite the pain.'),
    tom: e('He uses both hands, rests his elbows on the worktop and picks heavy cups. He fills the kettle only half full to reduce spills.', 'He tapes a card with large numbers next to his cooker and goes slowly when tired.'),
    zara: e('She plans routes around desks, asks classmates to reach things and uses a long grabber from her chair. She arrives early to sort her materials.', 'She waits at heavy doors until someone opens them and chooses a seat near the aisle.'),
    ben: e('He writes steps on his hand, stuffs papers into his bag and fidgets with a pen. He asks a friend to repeat instructions.', 'He uses a coloured folder for each subject when a teacher gives him one, and loses it within a week.'),
  },
  'week1.empathy.feels': {
    marcus: e('Frustrated and sometimes embarrassed, but proud of what he can do. He feels cut off from cooking he used to enjoy.', 'He feels determined, but tired of having to find workarounds for everyday objects.'),
    aiko: e('Confident but sometimes left out. She feels proud when she manages alone and annoyed when something gets in her way.', 'She feels happy when she draws, but frustrated and a bit shy when she has to ask for help.'),
    elias: e('Anxious about mistakes and sad about losing small independence. He feels proud when he manages a label alone.', 'He feels cautious and isolated, and worried about becoming dependent.'),
    priya: e('Determined but tired from working harder. She feels annoyed when people assume she cannot manage.', 'She feels proud of her independence, but frustrated by wasted time.'),
    leo: e('Anxious, overwhelmed and drained after noisy places. He feels calm and safe when it is quiet and predictable.', 'He feels misunderstood by people who say it is just noise.'),
    noor: e('Tense and headachy in busy rooms, calm and focused in a simple space. She feels worried about burning out.', 'She feels self-conscious asking for changes, but relieved when she gets them.'),
    rosa: e('Sad and frustrated when her hands hurt, but proud that she still cooks. She feels worried about losing independence.', 'She feels grateful when a tool is comfortable, and embarrassed when she cannot open a jar.'),
    tom: e('Anxious about spills, proud of his independence and a little embarrassed by his shake. He feels determined to carry on.', 'He feels frustrated when small numbers are hard to read, and relieved when a tool stays steady.'),
    zara: e('Independent and capable, but frustrated by barriers. She feels annoyed when she has to wait for help.', 'She feels proud when she builds things, and left out when the room is not designed for her.'),
    ben: e('Embarrassed when he loses work, frustrated when he is told to “try harder”, and energised when a task is creative. He feels let down by systems that are not designed for him.', 'He feels anxious about forgetting, and relieved when instructions are written down.'),
  },
  'evaluate.impact.impact': {
    marcus: e('Marcus can now open a jar with one hand in 11 seconds without help, which links to his empathy-map line “I avoid jars because I need a second pair of hands”. He can cook the meals he enjoys without asking anyone, so he feels more independent.', 'The lid holder removes the main frustration Marcus described and does not look like a medical gadget, so it protects his pride as well as his hands.'),
    aiko: e('Aiko can close her bag in four seconds with one hand, so she no longer needs a friend to zip it. This links to her line “I can do it myself”, and she feels more confident at school.', 'The pull ring lets Aiko manage alone without anything that makes her stand out, which matters because she said she hates being the odd one out.'),
    elias: e('Elias can read his labels at arm’s length without a magnifier, which links to “I cannot read the small print any more”. He is safer with his medicine and feels more independent.', 'The raised, high-contrast labels let Elias check items by touch and sight, so the fear of a medicine mistake he described is reduced.'),
    priya: e('Priya can find the item she needs in seconds instead of tipping out her pencil case, which links to “finding my pen takes forever”. She saves time and feels more capable in Design lessons.', 'The tray lets Priya manage on her own and not ask for help, which matters because she said she does not want people making a fuss.'),
    leo: e('Leo can open his calm kit silently, so his lunch break is less stressful. This links to “the canteen is too loud”, and it lets him recover and eat before afternoon lessons.', 'The soft, quiet box reduces the startle response Leo described, so he feels calmer and in control of his day.'),
    noor: e('Noor’s desk is now calm and uncluttered, which links to “visual clutter wears me out”. She gets fewer headaches and finds it easier to stay focused for pupils.', 'The organiser gives Noor a small calm zone without special treatment, so she can ask for less and cope better.'),
    rosa: e('Rosa can peel vegetables with less pain and for longer than two minutes, which links to “my hands hurt after a couple of minutes”. She can keep cooking independently, which is what she said she wants most.', 'The thick, soft handle spreads the force across her palm, so the pain and fear of losing cooking that she described are reduced.'),
    tom: e('Tom can pour hot water without spilling thanks to the weighted base, which links to “I want to make my own tea”. He feels safer and more independent in his kitchen.', 'The tipper steadies his tremor and the large numbers are easy to read, so the worries about spills and small dials that he described are eased.'),
    zara: e('Zara can reach every item from her chair without waiting, which links to “I hate waiting for someone to get things down”. She is as independent in Design as anyone else.', 'The low shelves remove a barrier Zara has pointed out for two years, and show the school listens to her ideas.'),
    ben: e('Ben can find a worksheet in seven seconds and see the steps in writing, which links to “I am not lazy, I just lose my worksheets”. He loses fewer marks and feels less embarrassed.', 'The folder wall gives Ben a visual, written system, so the forgetting and frustration he described are reduced and he can focus on his creative ideas.'),
  },
}
