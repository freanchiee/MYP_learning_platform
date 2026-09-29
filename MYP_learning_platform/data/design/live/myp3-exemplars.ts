// MYP3 Unit 1 Kickoff — Extended: model answers that vary along TWO independent
// choices a student makes:
//
//   1. DIRECTION — chosen in "Choose Your Need and Your User" → Direction and
//      user → Challenge direction. Used for the need statement and personality
//      summary, which are about the DIRECTION more than any one character.
//   2. PERSONA — the persona-pack character interviewed in "Interview Your
//      User" → Interview. Used for the empathy map, which should reflect that
//      exact person's own situation, not a generic version of their direction.
//
// Keyed by "<stageKey>.<sectionKey>.<fieldKey>", then by the choice value exactly
// as it appears (the direction's label string, or the persona's id from
// everyday-personas.ts). The teacher can reveal one to a single student from
// the worksheet review; fields not listed here keep the field's own general
// exemplars.

type ByChoice = Record<string, string[]>

export const MYP3_DIRECTION_EXEMPLARS: Record<string, ByChoice> = {
  'choose.need.statement': {
    'Physical space': [
      'Nadia needs a way to keep her half of the desk clear because her brother’s things spread onto it, and it matters because she cannot concentrate and finishes homework late.',
      'Mr Osei needs a way to see what is inside his supply cupboards because they are too deep and cluttered, and it matters because lessons start late while students hunt for materials.',
    ],
    'Everyday routine': [
      'Tariq needs a way to remember what to pack because he rushes every morning, and it matters because he loses marks and feels embarrassed asking his mum to bring things in.',
      'Mrs Lin needs a way to find her keys and phone quickly because mornings are a rush with two children, and it matters because being late affects her whole day.',
    ],
    'Learning experience': [
      'Anaya needs a way to find the right notes quickly because they are scattered across loose sheets and notebooks, and it matters because she spends more time searching than revising.',
      'Ms Farah needs a way to hand out and collect worksheets in order because lessons are short, and it matters because students lose feedback time when sheets go missing.',
    ],
    'Inclusion and accessibility': [
      'Jonas needs a way to read instructions without struggling through dense text because he has dyslexia, and it matters because he loses time and confidence on tasks he can actually do.',
      'Rosa needs a way to open jars and packaging without pain because arthritis makes gripping hard, and it matters because she wants to keep cooking for her grandchildren without asking for help.',
    ],
    'Small community experience': [
      'Kwame needs a way to know who has a shared bike so the bike room stays clear, and it matters because blocked corridors cause arguments between neighbours.',
      'Lila needs a way to know where each garden tool belongs because they go missing or get left in the rain, and it matters because volunteers waste time and equipment gets ruined.',
    ],
    Wellbeing: [
      'Hugo needs a calm place to go for a few minutes because busy corridors and canteens overwhelm him, and it matters because he is too exhausted to learn well by the afternoon.',
      'Dr Amara needs a way to remember to drink water and eat during long shifts because she forgets when busy, and it matters because it affects her health and her ability to care for patients.',
    ],
  },
  'choose.need.proof': {
    'Physical space': [
      'It is a need because Nadia loses usable desk space almost every evening, not occasionally, and without a fix she keeps working on the floor. A want would be a nicer-looking desk, which would not solve the crowding.',
      'It happens every lesson change, not once — that is a real, repeated problem, not a preference for a tidier room.',
    ],
    'Everyday routine': [
      'It is a need because it happens most mornings and costs him marks and dignity, not just convenience. A want would be a cooler bag, which would not stop him forgetting things.',
      'She is late or missing something several times a week — that is a repeating problem with real consequences, not just a wish for a calmer morning.',
    ],
    'Learning experience': [
      'It is a need because it happens before every test, wasting real revision time she cannot get back. A want would be prettier notes, which would not fix the searching.',
      'Worksheets go missing most weeks, which is a real gap in feedback, not simply a preference for neater paperwork.',
    ],
    'Inclusion and accessibility': [
      'It is a need because Jonas cannot access the same instructions as everyone else without real difficulty, every time — that is a barrier, not a preference for bigger font as a nice-to-have.',
      'Rosa genuinely cannot open some jars at all on bad days, so this is about ability, not about liking things easier.',
    ],
    'Small community experience': [
      'It is a need because the corridor is blocked most days, causing a real safety issue, not just an untidy-looking bike room.',
      'Tools go missing on most Saturdays, which stops real work happening — that is a need, not a wish for a fancier shed.',
    ],
    Wellbeing: [
      'It is a need because Hugo is overwhelmed on most days and it affects his ability to learn afterwards — that is a real impact, not just a preference for quiet.',
      'She misses meals or water on most long shifts, which is a genuine health risk, not simply a wish for a tidier routine.',
    ],
  },
  'choose.persona.summary': {
    'Physical space': [
      'My user shares a cramped space with someone else and struggles to keep their own area usable. They are organised at heart but get frustrated when their things move or get crowded out.',
      'My user manages a shared or busy space with far too little storage for what it needs to hold, and loses real time dealing with the mess it causes.',
    ],
    'Everyday routine': [
      'My user has a busy, rushed routine with little slack, so small daily friction (forgetting things, losing time) adds up into a real problem for them.',
      'My user juggles several responsibilities at once each day, and a small daily task keeps going wrong in the same way.',
    ],
    'Learning experience': [
      'My user works hard but their system for organising work lets them down, costing them time and confidence when it matters most.',
      'My user wants lessons or revision to go well, but a practical, everyday obstacle (finding things, managing time) gets in the way.',
    ],
    'Inclusion and accessibility': [
      'My user is capable and independent, but an ordinary object or space was not designed with their needs in mind, so an everyday task is harder than it should be.',
      'My user does not want to be singled out, but a common design assumption (average grip, average vision, average hearing) leaves them out.',
    ],
    'Small community experience': [
      'My user shares a resource or space with others and ends up doing more than their share of the tidying or fixing because there is no shared system.',
      'My user cares about their shared space, but a lack of clear rules or storage causes avoidable conflict or waste.',
    ],
    Wellbeing: [
      'My user is often overloaded or overstimulated and has no easy, low-effort way to recover a few minutes of calm during a busy day.',
      'My user is caring for others so much that they forget to look after their own basic needs.',
    ],
  },
}

/** Persona ids from data/design/live/everyday-personas.ts. */
export const MYP3_PERSONA_EXEMPLARS: Record<string, ByChoice> = {
  'interview.empathy.says': {
    'e-nadia': ['"I just want one shelf that is actually mine," and "My brother never puts anything back."'],
    'e-osei': ['"I spend the first five minutes of every lesson just finding the paint," and "Nobody puts things back where they found them."'],
    'e-tariq': ['"I swear I packed it last night," and "I hate having to ask Mum to bring stuff in."'],
    'e-lin': ['"I put my keys down for two seconds," and "We are always five minutes from being late."'],
    'e-anaya': ['"I know I wrote it down somewhere," and "By the time I find my notes I am too tired to actually revise."'],
    'e-farah': ['"I lose ten minutes just setting up and packing away," and "Half the sheets never make it back to me."'],
    'e-jonas': ['"I get it, I just can\'t read it fast enough," and "I don\'t want extra time if it means everyone stares."'],
    'e-rosa': ['"I just wait until someone visits," and "I am not helpless, the jar is just impossible."'],
    'e-kwame': ['"Someone always leaves their bike right across the doorway," and "I end up tidying because nobody else will."'],
    'e-lila': ['"The trowels just vanish," and "New volunteers never know where anything lives."'],
    'e-hugo': ['"It is just really loud, all the time," and "I don\'t want to make a big deal of needing a break."'],
    'e-amara': ['"I realised at 3am I hadn\'t drunk anything since the shift started," and "You just push through it."'],
  },
  'interview.empathy.thinks': {
    'e-nadia': ['She probably worries her space will never really be hers, and wonders if anyone would notice if she just gave up trying to keep it tidy.'],
    'e-osei': ['He wonders if it is even worth teaching students to tidy up if the system makes it so hard, and worries lessons are shorter than they should be.'],
    'e-tariq': ['He probably thinks people assume he is careless, when really the mornings are just too rushed to think clearly.'],
    'e-lin': ['She worries that being late reflects badly on her, even though the mess is really about having no system, not about trying hard enough.'],
    'e-anaya': ['She wonders if she is just bad at revising, when really the problem is finding her notes, not understanding the topic.'],
    'e-farah': ['She worries that lost time on logistics means less time actually teaching, and wonders if a simpler system would fix it.'],
    'e-jonas': ['He wonders if teachers think he has not read the instructions, when actually reading them is the hard part.'],
    'e-rosa': ['She worries that asking for help too often makes her seem less capable, even though it is really about grip, not ability.'],
    'e-kwame': ['He wonders if residents even read the notices he puts up, and worries the same argument will happen again next week.'],
    'e-lila': ['She worries new volunteers feel unwelcome when they cannot find anything, even though nobody meant it that way.'],
    'e-hugo': ['He worries that needing quiet makes him seem antisocial, when really it is just how he recharges.'],
    'e-amara': ['She worries that admitting she is exhausted makes her seem less dedicated, even though rest would make her a better doctor.'],
  },
  'interview.empathy.does': {
    'e-nadia': ['She currently works on the floor most evenings and moves her things to whichever corner is free that night.'],
    'e-osei': ['He spends extra time before each class laying out what he thinks will be needed, to avoid searching mid-lesson.'],
    'e-tariq': ['He tries packing his bag the night before, then still digs through the pile by the door in the morning.'],
    'e-lin': ['She keeps a mental list and does one last sweep of the house before leaving, which does not always work.'],
    'e-anaya': ['She colour-codes for the first week of a topic, then the system falls apart once she is busy.'],
    'e-farah': ['She counts sheets in and out by hand and chases missing ones at the end of the day.'],
    'e-jonas': ['He asks a friend to summarise written instructions out loud instead of reading them himself.'],
    'e-rosa': ['She taps the lid on the counter or runs it under warm water before trying again.'],
    'e-kwame': ['He personally moves bikes and re-sorts the recycling most weeks so the space stays usable.'],
    'e-lila': ['She keeps a mental note of who borrowed what, since there is no written system.'],
    'e-hugo': ['He puts his headphones on between lessons, even though he is not always allowed to.'],
    'e-amara': ['She sets phone reminders that she often ignores because she is mid-task when they go off.'],
  },
  'interview.empathy.feels': {
    'e-nadia': ['Frustrated most evenings, and a little embarrassed when friends come over and the room is a mess she did not cause.'],
    'e-osei': ['Tired of tidying up after every class, but still proud when a lesson goes well despite it.'],
    'e-tariq': ['Stressed most mornings, and relieved on the rare day everything goes smoothly.'],
    'e-lin': ['Rushed and a little anxious most mornings, and satisfied on the days the system actually works.'],
    'e-anaya': ['Anxious before tests when she cannot find her notes, and proud when a good system holds for once.'],
    'e-farah': ['Slightly overloaded by logistics, but energised when a lesson runs smoothly despite it.'],
    'e-jonas': ['Tired of reading being the hardest part of tasks he is otherwise good at, and confident when given a fairer way in.'],
    'e-rosa': ['A little frustrated by her own hands, but proud and happy when she manages something herself.'],
    'e-kwame': ['Tired of being the one who always sorts it out, but genuinely fond of the neighbours he helps.'],
    'e-lila': ['A bit frustrated when tools go missing, but happy and proud when new volunteers stick around.'],
    'e-hugo': ['Drained by midday most days, and calmer once he gets even a few quiet minutes.'],
    'e-amara': ['Exhausted by the end of a shift, and guilty for not looking after herself the way she looks after patients.'],
  },
}
