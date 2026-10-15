// Tuned answer-coach content for the MYP3 activities (Unit 1 Kickoff Extended and its design cycle B–D) and the MYP2
// "Designing for Everyday Needs" activity. Each coach is the same shape as the MYP4 need statement in
// myp4-criterion-a.ts: keyword groups by level (basic = names the thing, developed = explains why, justified = links
// cause, effect and stake), a few `hints` that nudge towards the next level without giving the answer, and, on the
// most important field of each strand, a `scaffold` (sentence frame + steps) a student can unlock for points.
//
// The engine only ever shows students the words THEY wrote that matched, never this list, and ignores a keyword that is
// repeated or crammed in with no ordinary words around it. Model answers stay in each field's `exemplars` and are never shown.
// scripts/check-answer-coach-myp23.ts checks that weak < strong and that keyword-stuffed answers score low for every coach here.

import type { FieldCoach } from './types'

/** Reasoning words nearly every written answer can use; added to the 'developed' group of each coach. */
const BECAUSE = ['because', 'so that', 'which means', 'as a result', 'leads to']

function coach(
  basic: string[],
  developed: string[],
  justified: string[],
  hints: string[],
  scaffold?: FieldCoach['scaffold'],
): FieldCoach {
  return {
    groups: [
      { level: 'basic', words: basic },
      { level: 'developed', words: [...BECAUSE, ...developed] },
      { level: 'justified', words: justified },
    ],
    ...(scaffold ? { scaffold } : {}),
    hints,
  }
}

// ============================================================ MYP3 · Criterion A (Unit 1 Kickoff Extended)

/** A.i · the need statement. Same pattern as the MYP4 version: [Name] needs a way to … because … and it matters because … */
export const MYP3_NEED_STATEMENT = coach(
  ['needs a way to', 'needs', 'cannot', 'struggles', 'has trouble', 'unable to', 'hard for', 'difficult', 'forgets', 'wastes'],
  ['which causes', 'so he', 'so she', 'so they', 'every day', 'every morning', 'every week', 'most days', 'often', 'whenever', 'rushes'],
  ['it matters because', 'matters because', 'what is at stake', 'otherwise', 'loses marks', 'falls behind', 'misses out', 'embarrassed', 'independence', 'safety', 'cannot concentrate', 'confidence', 'stressed', 'in pain', 'left out'],
  [
    'Show the problem happening: when, where or how often does it get in the way?',
    'Add the effect on your person: what do they do instead, or how do they feel?',
    'Make the stake specific. What exactly does your person lose or miss out on if nothing changes?',
  ],
  {
    frame: '[Name] needs a way to [do something] because [it causes this problem for them], and it matters because [what is at stake].',
    steps: [
      'WHO: name one person and one detail about them.',
      'DO: what do they need to be able to do? Start with a verb.',
      'CAUSE: what gets in the way, and what does that cause for them?',
      'STAKE: what do they lose or risk if this is not solved?',
    ],
  },
)

/** A.i · prove it is a need, not a want. */
export const MYP3_NEED_PROOF = coach(
  ['need', 'want', 'problem', 'difficulty', 'struggle', 'goes wrong', 'happens'],
  ['every week', 'every day', 'each', 'often', 'without', 'costs', 'instead', 'repeats'],
  ['not a want', 'a want would', 'real difficulty', 'if it were solved', 'if it was solved', 'would change', 'affects', 'independence', 'marks', 'safety', 'otherwise', 'a preference'],
  [
    'Say how often it happens and what it costs them. One time is a story; every week is a need.',
    'Describe what would be different if the problem were solved.',
    'Compare it with a want: what nice-to-have would NOT change the problem?',
  ],
  {
    frame: 'It is a need and not a want because [what goes wrong and how often]. Without a fix, [what they lose]. A want would be [a nicer extra], which would not [change the problem].',
    steps: [
      'WHAT GOES WRONG: describe it once, and say how often.',
      'COST: what do they lose (time, marks, safety, independence)?',
      'WANT TEST: name a nice-to-have that would not fix it.',
    ],
  },
)

/** A.i · two sentences on who the user is. */
export const MYP3_USER_SUMMARY = coach(
  ['years old', 'loves', 'likes', 'hates', 'prefers', 'enjoys', 'friendly', 'shy', 'busy', 'proud'],
  ['but', 'although', 'however', 'rushes', 'remembers', 'every morning', 'usually', 'never'],
  ['embarrassed', 'does not like asking', 'worries', 'independent', 'sees', 'visible', 'cannot stand', 'gets stressed', 'the problem for'],
  [
    'Give a habit or a feeling, not just an age and a job.',
    'Use “but” to show a tension: something they like and something that gets in the way.',
    'Connect one trait to your problem. How does it make the problem better or worse?',
  ],
)

/** A.ii · which interview question worked best. */
export const MYP3_BEST_QUESTION = coach(
  ['question', 'asked', 'open', 'closed', 'answer', 'interview'],
  ['real', 'detail', 'described', 'a time', 'story', 'example', 'habit', 'day', 'so I'],
  ['not a yes or no', 'rather than', 'instead of', 'would not have guessed', 'workaround', 'taught me', 'learned', 'opened up', 'made them describe'],
  [
    'Say what kind of question it was, and why that kind gets a fuller answer.',
    'Name one thing the answer told you that you could not have guessed.',
    'Compare it with a question that did not work: what was different?',
  ],
)

/** A.i · the assumption the interview changed. */
export const MYP3_ASSUMPTION_CHANGED = coach(
  ['assumed', 'thought', 'believed', 'expected', 'guessed'],
  ['but', 'showed', 'said', 'actually', 'turned out', 'in fact', 'told me'],
  ['instead', 'so I will', 'changed my', 'now I', 'the real problem', 'rather than', 'not the', 'so my focus'],
  [
    'Say what you assumed, then what the interview showed. The “but” is where the learning is.',
    'Name the evidence: who said it or what you saw?',
    'End with what you will do differently because of it.',
  ],
)

/** A.ii · why this order for the research plan. */
export const MYP3_PLAN_ORDER = coach(
  ['first', 'then', 'next', 'last', 'after', 'order', 'interview', 'observe', 'survey', 'compare', 'primary', 'secondary'],
  ['depends', 'before', 'quick', 'easy', 'so I know', 'need to know'],
  ['everything else depends', 'could change my mind', 'cannot compare until', 'otherwise', 'most valuable', 'so I do not waste', 'only after'],
  [
    'Give each step its own reason, not just the first one.',
    'Say what one step needs from an earlier one.',
    'Which step could change your mind about the whole project? Say why it goes early.',
  ],
  {
    frame: 'I put [step] first because [what the other steps depend on]. [Step] comes second because [reason]. [Step] comes last because [reason].',
    steps: [
      'FIRST: which step do the others depend on, or could change your mind?',
      'THEN: what does the next step need from the first?',
      'LAST: why can this one wait?',
    ],
  },
)

/** A.ii · the weakest step of the plan, and how to fix it. */
export const MYP3_WEAKEST_STEP = coach(
  ['weakest', 'step', 'method', 'source', 'purpose', 'missing', 'vague'],
  ['fix', 'will', 'name', 'decide', 'specific', 'so I can'],
  ['helps me decide', 'which helps me', 'so I can choose', 'now says', 'name three', 'who exactly', 'by when'],
  [
    'Say what is missing from that step: the method, the source or the purpose?',
    'Make the fix specific. Name the exact person, product or place.',
    'Finish by saying what the step will help you decide.',
  ],
  {
    frame: 'Step [number] is weakest because it has no [method / source / purpose]. I will fix it by [what exactly you will add], so it helps me decide [what].',
    steps: [
      'WHICH: pick one step.',
      'WHAT IS MISSING: method, source or purpose?',
      'FIX: name the exact thing you will add.',
      'DECIDE: what will this step help you decide?',
    ],
  },
)

/** A.ii · respectful research. */
export const MYP3_RESPECT = coach(
  ['permission', 'consent', 'first name', 'private', 'stop', 'say no'],
  ['protect', 'anonymous', 'explain what', 'what it is for'],
  ['at any time', 'can stop', 'not take photos', 'without consent', 'fictional client', 'record which', 'nobody else', 'notes private'],
  [
    'Say what you will do BEFORE you ask your questions.',
    'Say what the person is free to do, such as refuse a question or stop.',
    'Explain what happens to their name and your notes afterwards.',
  ],
)

/** A.ii · which evidence changed or confirmed your thinking. */
export const MYP3_EVIDENCE_REFLECTION = coach(
  ['evidence', 'interview', 'review', 'observation', 'source', 'survey'],
  ['assumed', 'showed', 'said', 'changed', 'confirmed', 'found'],
  ['so I will', 'instead', 'focus on', 'now I', 'rather than', 'the real problem', 'which means my'],
  [
    'Name the exact piece of evidence, not just “my research”.',
    'Say what you believed before and what you believe now.',
    'Finish with what it changes about what you will design.',
  ],
)

/** A.iii · what to keep, avoid and improve. */
export const MYP3_KEEP_AVOID_IMPROVE = coach(
  ['keep', 'avoid', 'improve', 'products', 'all three', 'two of', 'feature'],
  ['reviews', 'users', 'cheap', 'easy', 'cost', 'slips', 'hurts'],
  ['none of', 'none of them', 'a gap', 'unlike', 'which means mine', 'so mine', 'opportunity', 'nobody'],
  [
    'Give each of keep, avoid and improve its own reason.',
    'Point to the product or review that your reason comes from.',
    'Look for a gap: what does none of the three do?',
  ],
  {
    frame: 'I will KEEP [feature] because [evidence from the products]. I will AVOID [feature] because [problem it caused]. I will IMPROVE [feature] because [gap none of them fills].',
    steps: [
      'KEEP: a feature several products share that works for users.',
      'AVOID: a feature that caused a problem or a bad review.',
      'IMPROVE: a gap, something none of the three does well.',
    ],
  },
)

/** A.iv · the one-sentence brief. */
export const MYP3_ONE_SENTENCE_BRIEF = coach(
  ['designing for', 'made from', 'because', 'needs', 'solution'],
  ['interview', 'observation', 'reviews', 'showed', 'found', 'evidence', 'analysis', 'research'],
  ['so that', 'non slip', 'cannot', 'without pain', 'she needs', 'he needs', 'they need', 'show that'],
  [
    'Name the person AND the material, then link them with a “because”.',
    'Point to the evidence the “because” comes from: your interview, a review or an observation.',
    'Say what the material helps your person do.',
  ],
  {
    frame: 'I am designing for [name], made from [material], because [what my interview or product analysis showed they need].',
    steps: [
      'FOR: your named user.',
      'FROM: a first idea for a material (you will test it later).',
      'BECAUSE: the evidence that connects the user to the material.',
    ],
  },
)

/** A.iv · the design brief that summarises the research. */
export const MYP3_DESIGN_BRIEF = coach(
  ['needs', 'designing', 'user', 'product', 'solution', 'problem'],
  ['showed', 'found', 'interview', 'observation', 'analysis', 'research', 'evidence', 'must'],
  ['must not', 'must be', 'under', 'at least', 'without', 'cannot', 'fit in', 'cost'],
  [
    'Name the evidence: which interview, observation or product analysis showed it?',
    'Say what the product must do AND what it must not do.',
    'Put at least one limit in numbers, such as a size, a cost or a time.',
  ],
  {
    frame: '[Name], [age], needs [need] because [cause]. My interview showed [finding] and my product analysis found [finding]. My solution must [requirements] and must not [limits].',
    steps: [
      'WHO + NEED: one person and what they need.',
      'EVIDENCE: one finding from your interview or observation, one from your product analysis.',
      'MUST: two or three things the solution has to do.',
      'MUST NOT: one limit, such as no small parts or no app.',
    ],
  },
)

/** A.iv · what is still unknown about the material, and how to test it. */
export const MYP3_MATERIAL_QUESTION = coach(
  ['material', 'test', 'find out', 'need to know', 'strong', 'grip', 'weight'],
  ['measure', 'compare', 'how much', 'bend', 'force', 'wet', 'load', 'sourced'],
  ['where it comes from', 'recycled', 'sustainable', 'fair test', 'same each time', 'record the', 'mm', 'seconds'],
  [
    'Make the unknown a question you could answer with a test.',
    'Say what you will measure and with what: a ruler, a weight, a stopwatch.',
    'Add where the material comes from. That is part of the unit too.',
  ],
)

/** Reflection · journal entry. */
export const MYP3_JOURNAL_LEARNED = coach(
  ['learned', 'today', 'user', 'research', 'interview', 'plan'],
  ['showed', 'assumed', 'different', 'found', 'realised', 'noticed'],
  ['which means', 'so next', 'changed my', 'instead', 'none of the', 'a gap', 'taught me'],
  [
    'Name one specific thing you learned, not “a lot”.',
    'Say what made you learn it: what did you do or find?',
    'Say what it changes about your next step.',
  ],
)

/** Reflection · what to do differently. */
export const MYP3_JOURNAL_NEXT = coach(
  ['differently', 'next', 'would', 'step', 'second', 'plan'],
  ['compare', 'finish', 'choose', 'ask', 'test', 'rank'],
  ['so that', 'one view', 'which would', 'so I can', 'instead of', 'to make sure', 'less guessing'],
  [
    'Name one thing you would change, not three.',
    'Say why that change would improve your research.',
    'Finish with the very next step you will take.',
  ],
)

// ============================================================ MYP3 · Criterion B (design cycle)

/** B.i · which specification line matters most. */
export const MYP3_SPEC_PRIORITY = coach(
  ['matters most', 'requirement', 'line', 'force', 'user', 'specification', 'test'],
  ['said', 'interview', 'evidence', 'asked', 'main thing', 'my test'],
  ['fails', 'fail him', 'fail her', 'fail them', 'however good', 'if it does not', 'whatever else', 'otherwise', 'cannot use'],
  [
    'Name the one line and point to the evidence it comes from.',
    'Say what your user said or did that makes this line the most important.',
    'Say what happens to the design if that line is not met.',
  ],
  {
    frame: '[Line] matters most to [user] because [what they said or what my research showed]. If it is not met, [what happens to them or to the design].',
    steps: [
      'LINE: pick one line from your specification.',
      'EVIDENCE: what did your user say, or what did you find?',
      'CONSEQUENCE: what happens if it is not met?',
    ],
  },
)

/** B.iii · why this idea and not the others. */
export const MYP3_CHOICE_JUSTIFICATION = coach(
  ['chose', 'idea', 'specification', 'meets', 'line', 'matrix'],
  ['unlike', 'whereas', 'rejected', 'missed', 'failed', 'compared', 'only idea'],
  ['but', 'however', 'so I rejected', 'every line', 'all four', 'all of', 'looked best', 'although'],
  [
    'Refer to the specification lines the chosen idea met.',
    'Name an idea you rejected and the line it missed.',
    'Be honest about an idea you liked but did not choose, and say why.',
  ],
  {
    frame: 'I chose [idea] because it met [specification lines], unlike [rejected idea], which missed [line]. [Another idea] looked [good in some way], but [problem], so I rejected it.',
    steps: [
      'CHOSEN: which idea, and which specification lines it met.',
      'REJECTED 1: which idea, and the line it missed.',
      'REJECTED 2: an idea you liked but did not choose, and why.',
    ],
  },
)

/** B.iv · what the planning drawing shows. */
export const MYP3_DRAWING_NOTES = coach(
  ['views', 'top', 'front', 'side', 'drawing', 'labelled', 'labels', 'material'],
  ['mm', 'millimetres', 'scale', 'dimensions', 'thick', 'hole', 'ridge', 'wide', 'tall'],
  ['so that', 'a classmate could', 'could make it', 'every length', 'each view', 'position', 'marked', 'tolerance'],
  [
    'Give actual measurements, in millimetres.',
    'Name the material of each part and what the labels point to.',
    'Say how you know someone else could make it from your drawing alone.',
  ],
)

// ============================================================ MYP3 · Criterion C

/** C.i · why this making method. */
export const MYP3_MAKING_METHOD = coach(
  ['method', '3D print', 'laser', 'cut', 'hand', 'mould', 'tinkercad', 'chose', 'will use'],
  ['available', 'time', 'material', 'accurate', 'exactly', 'quickly', 'cheap', 'one lesson'],
  ['whereas', 'unlike', 'would not', 'could not', 'instead of', 'rather than', 'does not give', 'cannot make'],
  [
    'Give a reason that comes from your design: a shape, a size or a pattern.',
    'Add a reason from your situation: time, tools or what the school has.',
    'Say why another method would be worse for this design.',
  ],
)

/** C.ii · technical skills and how accuracy was checked. */
export const MYP3_TECHNICAL_SKILLS = coach(
  ['measured', 'checked', 'tool', 'skill', 'cut', 'sanded', 'modelled', 'used', 'printed'],
  ['accurate', 'callipers', 'ruler', 'against', 'drawing', 'twice', 'dimensions', 'carefully'],
  ['against my drawing', 'compared', 'safely', 'wearing', 'mask', 'goggles', 'supervised', 'teacher present', 'recorded', 'dated photo', 'mm against'],
  [
    'Name the tool and what you used it for.',
    'Give a measurement you checked, and what it was supposed to be.',
    'Mention one safety rule you followed while you worked.',
  ],
  {
    frame: 'I used [tool or skill] to [what you did]. I checked [measurement] against [drawing or specification] and got [result]. I kept safe by [rule].',
    steps: [
      'SKILL: the tool or technique you used, and for what.',
      'CHECK: a measurement you took, compared with your drawing.',
      'SAFE: one safety rule you followed.',
    ],
  },
)

/** C.iii · does it work as intended? */
export const MYP3_WORKS_AS_INTENDED = coach(
  ['works', 'yes', 'no', 'fits', 'tried', 'tested', 'turns', 'holds'],
  ['specification', 'plan', 'intended', 'stayed', 'against', 'requirement', 'drawing'],
  ['matches', 'as required', 'which shows', 'proves', 'evidence', 'from across', 'on the real', 'did not work', 'one problem', 'not quite'],
  [
    'Say what you tried it on and what happened.',
    'Link the result to a line of your specification.',
    'Be honest: is there one thing that did not work as intended?',
  ],
  {
    frame: 'It works as intended because I tested [what you did] and [result], which matches [specification line]. One thing that did not work is [issue], so [what you did about it].',
    steps: [
      'TEST: what did you try it on?',
      'RESULT + LINE: what happened, and which specification line it matches.',
      'HONEST: one thing that did not work, and what you did.',
    ],
  },
)

// ============================================================ MYP3 · Criterion D

/** D.ii · how successful is the solution, using results. */
export const MYP3_EXPLAIN_SUCCESS = coach(
  ['met', 'partly met', 'not met', 'result', 'test', 'overall', 'line'],
  ['specification', 'target', 'out of', 'user said', 'measured', 'recorded'],
  ['but', 'only partly', 'mostly', 'whereas', 'which shows', 'however', 'did not meet', 'failed'],
  [
    'Use numbers or counts from your own results.',
    'Say which lines were met and which were only partly met or not met.',
    'Explain WHY a line was not met, using a result or something your user said.',
  ],
  {
    frame: 'Overall my solution was [mostly / partly] successful. It met [lines] with results of [data]. It only partly met or did not meet [line] because [test result or user comment].',
    steps: [
      'OVERALL: one honest judgement.',
      'MET: which lines, with the number you measured.',
      'NOT MET: which line, and the result or comment that shows it.',
    ],
  },
)

/** D.iii · improvements for the next version. */
export const MYP3_IMPROVEMENTS = coach(
  ['change', 'next version', 'improve', 'test', 'user', 'result'],
  ['user said', 'showed', 'round', 'thicker', 'smaller', 'bigger', 'darker', 'add', 'remove', 'replace'],
  ['so that', 'would fix', 'which would', 'by 0.2', 'instead of', 'to remove', 'to improve the line', 'the line'],
  [
    'Start from a test result or a comment, then say the change.',
    'Make the change exact: what, how much, which part.',
    'Say which specification line the change would improve.',
  ],
  {
    frame: 'Because [test result or user comment], the next version should [specific change]. This would [effect on the specification line].',
    steps: [
      'EVIDENCE: the result or comment that shows the problem.',
      'CHANGE: what exactly, how much, which part.',
      'EFFECT: which specification line it improves.',
    ],
  },
)

/** D.iv · impact on the user and others. */
export const MYP3_IMPACT = coach(
  ['difference', 'user', 'independent', 'others', 'can now', 'helps'],
  ['saves', 'less', 'feels', 'routine', 'every day', 'said', 'now'],
  ['also', 'could use', 'community', 'environment', 'families', 'long term', 'replaced', 'reduce', 'other people'],
  [
    'Use what your user said or did when they tried it.',
    'Say what they can do now that they could not before.',
    'Add one effect beyond your user, such as others who could use it or the materials.',
  ],
  {
    frame: 'This makes a difference to [user] because [what they can do now, using what they said or did]. It could also help [others or the environment] by [how].',
    steps: [
      'USER: what is different in their day?',
      'EVIDENCE: what did they say or do when they tried it?',
      'BEYOND: someone or something else it could help.',
    ],
  },
)

/** D.iv · final journal. */
export const MYP3_FINAL_JOURNAL = coach(
  ['learned', 'cycle', 'research', 'test', 'specification', 'user'],
  ['showed', 'changed', 'realised', 'found', 'noticed', 'first idea'],
  ['next time', 'differently', 'earlier', 'instead', 'which means', 'taught me', 'would test'],
  [
    'Name one thing the cycle taught you that you did not expect.',
    'Say which stage changed your thinking, and how.',
    'Finish with one specific thing you will do differently next time.',
  ],
)

// ============================================================ MYP2 · Designing for Everyday Needs

/** A.i · the problem, in one or two sentences. */
export const MYP2_PROBLEM = coach(
  ['students', 'struggles', 'hard to', 'difficult', 'problem', 'not working', 'trouble'],
  ['so they', 'so he', 'so she', 'every day', 'often', 'when', 'because of'],
  ['late', 'nervous', 'hurt', 'pain', 'tired', 'hungry', 'unsafe', 'embarrassed', 'misses', 'falls behind', 'stressed', 'cannot concentrate'],
  [
    'Say who is affected, not just what goes wrong.',
    'Add what happens to them because of it.',
    'Say how it makes them feel, or what they miss out on.',
  ],
  {
    frame: '[Who] struggles to [do something] because [what goes wrong], so [what happens to them].',
    steps: [
      'WHO: the people affected.',
      'WHAT GOES WRONG: what gets in the way?',
      'RESULT: what happens to them because of it?',
    ],
  },
)

/** A.i · the opportunity statement. */
export const MYP2_OPPORTUNITY = coach(
  ['how might we', 'help', 'make'],
  ['so that', 'easier', 'safely', 'so they', 'so everyone'],
  ['everyone', 'each', 'on time', 'calm', 'fairer', 'comfortable', 'without', 'safe'],
  [
    'Check that it starts with “How might we” and names who you are helping.',
    'Say what you want to be better for them, after “so that”.',
    'Keep it open: do not put a solution inside the question.',
  ],
  {
    frame: 'How might we help [who] [do something] so that [what gets better for them]?',
    steps: [
      'WHO: the person or group.',
      'DO: what you want them to be able to do.',
      'SO THAT: how their day gets better.',
    ],
  },
)

/** A.i · why the need matters to the user. */
export const MYP2_WHY_MATTERS = coach(
  ['matters', 'user', 'need', 'problem', 'affects'],
  ['every day', 'each morning', 'feels', 'so that', 'when', 'stressed', 'tired'],
  ['if it were solved', 'if it was solved', 'would feel', 'would be able', 'less', 'more ready', 'calm', 'safer', 'happier', 'confident'],
  [
    'Say what happens to your user in a normal day.',
    'Say how it makes them feel.',
    'Say what would be better if it were solved.',
  ],
  {
    frame: 'This matters to [name] because [how the problem affects their day]. If it were solved, [what would be better for them].',
    steps: [
      'THEIR DAY: when does the problem happen?',
      'FEELING: how does it make them feel?',
      'IF SOLVED: what would be better?',
    ],
  },
)

/** A.ii · what the user really needs, with evidence. */
export const MYP2_FINDINGS = coach(
  ['need', 'user', 'learned', 'interview', 'role card'],
  ['said', 'observed', 'evidence', 'showed', 'saw', 'told me', 'confirmed'],
  ['so they need', 'the real need', 'worth solving', 'which means', 'matters because', 'so the real'],
  [
    'Use “My user said…” and “I observed…” to show where it comes from.',
    'Say what you think the need really is.',
    'Say why it is worth solving.',
  ],
  {
    frame: 'My user said [what]. I observed [what]. So the real need is [need], and it is worth solving because [why].',
    steps: [
      'SAID: something your user told you.',
      'OBSERVED: something you saw.',
      'NEED + WHY: what they really need, and why it matters.',
    ],
  },
)

/** A.ii · what changed from the first idea. */
export const MYP2_WHAT_CHANGED = coach(
  ['assumed', 'thought', 'first', 'at first', 'changed'],
  ['but', 'said', 'realised', 'found out', 'showed', 'actually'],
  ['instead', 'the real problem', 'not the', 'so now', 'my focus', 'rather than'],
  [
    'Say what you first thought, then what you found out.',
    'Say who or what changed your mind.',
    'Say what you will focus on now.',
  ],
)

/** Design journal (Week 1 and Week 2). */
export const MYP2_JOURNAL = coach(
  ['today', 'learned', 'wondered', 'surprised', 'unsure', 'noticed'],
  ['saw', 'heard', 'said', 'found out', 'realised'],
  ['next', 'want to find out', 'which means', 'instead', 'I will', 'different'],
  [
    'Write one specific thing, not a general feeling.',
    'Say what made you notice it.',
    'Say what you want to find out next.',
  ],
)
