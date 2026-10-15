// Individuals & Societies (MYP4) exemplar activities — shared skeleton.
//
// Geography and History are assessed on the same four MYP criteria, but a student
// meets them in a different order of ideas, vocabulary and sources. This builder
// holds the part that is the same (the strand-by-strand journey, the checkpoints,
// the grading stage, the lead-capture card) and each subject file supplies the
// content as plain data. The result is an ordinary LiveActivityDefinition.
//
// The strands below are the IB's published Individuals and Societies strands for
// Years 3 and 5 (MYP4 sits between them), shortened into student language:
//   A Knowing and understanding  i terminology in context · ii knowledge and understanding
//   B Investigating              i research question and its relevance · ii action plan ·
//                                iii methods that collect relevant information · iv evaluate process and results
//   C Communicating              i audience and purpose · ii structure for the task · iii reference list and citations
//   D Thinking critically        i analyse concepts, issues, models · ii summarise information into well-supported arguments ·
//                                iii analyse sources by origin and purpose, value and limitation · iv different perspectives and implications
// Note the order: C is COMMUNICATING and D is THINKING CRITICALLY (some older school documents swap them).
//
// The journey mirrors the MYP on-screen Individuals and Societies exam: work from a
// stimulus, plan an investigation (Investigating), communicate the findings in a
// structured response (Communicating), and analyse sources and perspectives
// (Thinking critically). Sources inside the activities are constructed for the task
// and say so; they are patterned on real material, never presented as real quotations.

import type {
  ActivityBrief,
  FieldCoach,
  FlowStep,
  KeywordGroup,
  LearnPage,
  LiveActivityDefinition,
  LiveTheme,
  McqQuestion,
  WorksheetSection,
} from './types'

export const IS_STRANDS = {
  'A.i': 'Use a range of terminology in context',
  'A.ii': 'Show knowledge and understanding of content and concepts through descriptions, explanations and examples',
  'B.i': 'Formulate a clear and focused research question and explain its relevance',
  'B.ii': 'Formulate and follow an action plan to investigate the question',
  'B.iii': 'Use methods to collect and record relevant, varied information',
  'B.iv': 'Evaluate the process and results of the investigation',
  'C.i': 'Communicate information and ideas in a way that suits the audience and purpose',
  'C.ii': 'Structure information and ideas according to the task instructions',
  'C.iii': 'Create a reference list and cite sources of information',
  'D.i': 'Analyse concepts, issues, models, visual representations and theories',
  'D.ii': 'Summarise information to make valid, well-supported arguments',
  'D.iii': 'Analyse sources by origin and purpose, recognising value and limitations',
  'D.iv': 'Recognise different perspectives and explain their implications',
} as const

/** Subject words to add to a field's shared coach, by level. Typos and endings are forgiven when matched. */
export interface SubjectWords {
  basic?: string[]
  developed?: string[]
  justified?: string[]
}

/** Per-subject words for each coached written answer. Geography and History differ here; the shared lists below do not. */
export interface SocietyCoachWords {
  rq?: SubjectWords
  evaluation?: SubjectWords
  perspectives?: SubjectWords
  argument?: SubjectWords
  explain?: SubjectWords
  audience?: SubjectWords
}

// Shared coach words. Level means HOW the answer is built, not how long it is:
//   basic = names the thing · developed = explains why · justified = links cause, effect and stake.
// Words are plain thinking moves; the subject lists add the vocabulary of the topic. Students only ever
// see what they hit (see lib/design-live/answerFeedback.ts), so these lists are never shown.
const SHARED_WORDS: Record<keyof SocietyCoachWords, Required<SubjectWords>> = {
  rq: {
    basic: ['to what extent', 'how far', 'why did', 'why do', 'why does', 'how did', 'how has', 'how can', 'how have'],
    developed: ['rather than', 'compared with', 'between', 'since', 'over the last', 'in the last', 'impact on', 'effect on', 'cause of', 'responsible for'],
    justified: ['and how', 'and what', 'whether', 'most important', 'main reason', 'balance'],
  },
  evaluation: {
    basic: ['worked well', 'strength', 'strongest', 'useful', 'helped', 'weakest'],
    developed: ['because', 'limitation', 'however', 'missing', 'biased', 'one-sided', 'too thin', 'only one', 'could not check', 'did not'],
    justified: ['next time', 'i would improve', 'i would add', 'i would change', 'to improve', 'instead', 'second source', 'check against', 'cross-check', 'more reliable', 'real person', 'fictional', 'too wide', 'too narrow'],
  },
  perspectives: {
    basic: ['perspective', 'point of view', 'view', 'sees', 'believes', 'would want', 'argues'],
    developed: ['whereas', 'by contrast', 'on the other hand', 'however', 'because', 'while', 'but'],
    justified: ['implication', 'implies', 'as a result', 'this means', 'which means', 'therefore', 'consequence', 'leads to', 'so the plan', 'would oppose', 'would push'],
  },
  argument: {
    basic: ['i argue', 'my claim', 'mainly', 'mostly', 'more than', 'to a limited extent', 'to a large extent', 'mixed', 'rather than'],
    developed: ['source a', 'source b', 'source c', 'shows', 'suggests', 'according to', 'for example', 'because', 'however', 'whereas', 'by contrast'],
    justified: ['this shows that', 'this suggests', 'which means', 'therefore', 'overall', 'on balance', 'although', 'even so', 'this is because', 'outweigh', 'the other side', 'counter'],
  },
  explain: {
    basic: ['for example', 'for instance'],
    developed: ['because', 'which means', 'leads to', 'this creates', 'results in', 'so that', 'as a result'],
    justified: ['even when', 'at the same time', 'which makes', 'even though', 'whereas', 'however', 'more than', 'faster than', 'in turn'],
  },
  audience: {
    basic: ['audience', 'reader', 'readers', 'purpose', 'tone', 'formal', 'informal'],
    developed: ['because', 'simple', 'simpler', 'plain', 'specific', 'explain', 'example', 'short', 'headings', 'define'],
    justified: ['so that', 'which means', 'therefore', 'recommend', 'persuade', 'convince', 'inform', 'lead with', 'suits', 'suitable for', 'jargon'],
  },
}

/** Join the shared words with a subject's own, removing repeats, into the three level groups the coach reads. */
function mergeWords(field: keyof SocietyCoachWords, extra?: SubjectWords): KeywordGroup[] {
  const base = SHARED_WORDS[field]
  const seen = new Set<string>()
  const take = (words: string[]) =>
    words.filter((w) => {
      const k = w.toLowerCase()
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
  return [
    { level: 'basic', words: take([...(extra?.basic ?? []), ...base.basic]) },
    { level: 'developed', words: take([...(extra?.developed ?? []), ...base.developed]) },
    { level: 'justified', words: take([...(extra?.justified ?? []), ...base.justified]) },
  ]
}

export interface SocietyConfig {
  id: string
  subject: 'Geography' | 'History'
  title: string
  subtitle: string
  icon: string
  theme: LiveTheme
  /** Lines shown to the teacher/student about the unit. */
  unit: { name: string; keyConcept: string; relatedConcepts: string[]; globalContext: string; statementOfInquiry: string; inquiryQuestions: string[] }
  /** Interest labels from lib/interests.ts ticked by default on the lead form. */
  leadInterests: string[]
  /** Page name saved with a lead, e.g. '/design/live/myp4-geography-urban-water'. */
  leadSource: string
  /** The opening hook page(s), then the key vocabulary page. */
  hookPages: LearnPage[]
  vocabPage: LearnPage
  /** Checkpoint 1 — A.i / A.ii. */
  checkA: McqQuestion[]
  /** The directions a student can pursue, and the section blurb explaining them. */
  directions: string[]
  directionBlurb: string
  rq: { weak: string; strong: string; note: string; exemplars: string[]; keywords: string[] }
  plan: { weak: string; strong: string; exemplars: string[] }
  methodBullets: string[]
  /** Source pack pages, then Checkpoint 2 — D.iii / D.iv. */
  sourcePages: LearnPage[]
  opvlExample: { label: string; weak: string; strong: string; note: string }
  checkD: McqQuestion[]
  sourceNames: string[]
  model: { title: string; blurb: string; rows: { key: string; label: string }[]; exemplars: string[] }
  perspectiveExemplars: string[]
  argumentQuestion: string
  argumentExemplars: string[]
  argumentKeywords: string[]
  explainPrompt: string
  explainExemplars: string[]
  explainKeywords: string[]
  evaluateExemplars: string[]
  reportTitleHint: string
  /** Subject vocabulary for the answer coach on each written field (shared thinking words are added automatically). */
  coachWords?: SocietyCoachWords
}

const BLOCK1 = 'Lesson 1 · single period'
const BLOCK2 = 'Lesson 2 · single or double period'

export function buildSocietyActivity(c: SocietyConfig): LiveActivityDefinition {
  const brief: ActivityBrief = {
    context: `${c.unit.statementOfInquiry} This activity follows Unit 1: ${c.unit.name}.`,
    task: 'Choose a direction, write a research question, plan and carry out a small investigation (including an interview with a fictional character), then analyse sources, weigh different perspectives and write a short, well-structured argument.',
    produce: [
      'A focused research question with its relevance explained (B.i)',
      'An action plan and a log of what you found out (B.ii, B.iii)',
      'An interview and what you would still need to check (B.iii)',
      'A source analysis using origin, purpose, value and limitation (D.iii)',
      'Two perspectives and their implications (D.iv)',
      'A planned and written argument with a reference list (D.ii, C.i, C.ii, C.iii)',
      'An honest evaluation of your investigation (B.iv)',
    ],
    assessedOn: Object.keys(IS_STRANDS),
    time: 'Two lessons, at your own pace. Your work saves automatically.',
  }

  const flow: FlowStep[] = [
    { strand: 'A.i', title: 'Learn the language', asks: IS_STRANDS['A.i'], where: 'Checkpoint 1 · Knowing' },
    { strand: 'A.ii', title: 'Know the content', asks: IS_STRANDS['A.ii'], where: 'Checkpoint 1 and “Think and Communicate”' },
    { strand: 'B.i', title: 'Choose a question', asks: IS_STRANDS['B.i'], where: 'Investigate' },
    { strand: 'B.ii', title: 'Plan the investigation', asks: IS_STRANDS['B.ii'], where: 'Investigate' },
    { strand: 'B.iii', title: 'Collect evidence', asks: IS_STRANDS['B.iii'], where: 'Investigate' },
    { strand: 'D.iii', title: 'Judge the sources', asks: IS_STRANDS['D.iii'], where: 'Source pack, Checkpoint 2 and “Think and Communicate”' },
    { strand: 'D.i', title: 'Analyse the model', asks: IS_STRANDS['D.i'], where: 'Think and Communicate' },
    { strand: 'D.iv', title: 'Weigh the perspectives', asks: IS_STRANDS['D.iv'], where: 'Think and Communicate' },
    { strand: 'D.ii', title: 'Make the argument', asks: IS_STRANDS['D.ii'], where: 'Think and Communicate' },
    { strand: 'C.i', title: 'Write for a reader', asks: IS_STRANDS['C.i'], where: 'Think and Communicate' },
    { strand: 'C.ii', title: 'Structure it', asks: IS_STRANDS['C.ii'], where: 'Think and Communicate' },
    { strand: 'C.iii', title: 'Credit your sources', asks: IS_STRANDS['C.iii'], where: 'Think and Communicate' },
    { strand: 'B.iv', title: 'Evaluate your work', asks: IS_STRANDS['B.iv'], where: 'Investigate (last section)' },
  ]

  const w = c.coachWords ?? {}

  // Scaffolds are sentence frames with blanks and step prompts, never a model answer. They cost points to unlock.
  const rqCoach: FieldCoach = {
    groups: mergeWords('rq', w.rq),
    scaffold: {
      frame: 'To what extent / How far [did or has] [a cause or action] [lead to or change something] for [a named group] in [a place] [between or since a time], [rather than another explanation]?',
      steps: [
        'WHERE AND WHEN: name one place and one time period.',
        'WHO: name the group of people the question is about.',
        'WHAT: what do you want to explain? Pick one cause, change or effect.',
        'CONTRAST: add “rather than…” or “compared with…” so the question can be argued.',
        'CHECK: could you answer it with the sources in the pack? If not, narrow it.',
      ],
    },
    hints: [
      'Test your question: could two people look at the same evidence and disagree? If not, it asks for a fact, not an argument.',
      'Is your place or time precise enough that someone else could find the same evidence?',
      'Could you add a contrast, such as another possible cause or another group? That makes the question focused.',
    ],
  }
  const argumentCoach: FieldCoach = {
    groups: mergeWords('argument', w.argument),
    scaffold: {
      frame: 'CLAIM: [answer the question in one sentence]. EVIDENCE: [Source ?] shows [a fact or number]. EXPLANATION: This matters because [how it supports your claim]. LINK: Overall, [answer the question again], although [one counter-view].',
      steps: [
        'CLAIM: answer the question directly, with a judgement such as “mainly”, “partly” or “to a limited extent”.',
        'EVIDENCE: use two pieces of evidence, each with its source (Source A, B or C, or your log).',
        'EXPLANATION: after each piece, say HOW it supports your claim, not just what it says.',
        'COUNTER: admit one thing that points the other way, then say why it matters less.',
        'LINK: finish by answering the question again, in different words.',
      ],
    },
    hints: [
      'Does each piece of evidence say which source it came from?',
      'After your evidence, add a sentence that starts “This shows…” or “This means…” to explain how it proves your claim.',
      'What would someone who disagrees say? Add one counter-view and weigh it.',
    ],
  }

  const dirOpts = c.directions
  const topicFrom = { stage: 'investigate', section: 'direction', field: 'direction' }

  const investigateSections: WorksheetSection[] = [
    {
      key: 'direction',
      label: 'Direction',
      icon: '🧭',
      criterion: 'B.i',
      strandLabel: IS_STRANDS['B.i'],
      blurb: c.directionBlurb,
      brief: { title: 'Brief: pick one direction', points: ['Choose the direction you find most interesting, not the easiest.', 'Your direction decides which characters you can interview next.'] },
      fields: [{ key: 'direction', label: 'The direction I will investigate', type: 'select', options: dirOpts }],
    },
    {
      key: 'question',
      label: 'Research question',
      icon: '❓',
      criterion: 'B.i',
      strandLabel: IS_STRANDS['B.i'],
      brief: {
        title: 'Brief: ask one clear, focused question',
        points: ['Name the place or time and the people involved.', 'It must be answerable with evidence you can actually find, not just opinion.', 'Add one or two sentences on why it matters.'],
      },
      fields: [
        {
          key: 'rq',
          label: 'My research question',
          type: 'textarea',
          placeholder: 'To what extent… / How far… / Why did…',
          hint: `A weak question: ${c.rq.weak}  A stronger one: ${c.rq.strong}`,
          exemplars: c.rq.exemplars,
          celebrateKeywords: c.rq.keywords,
          coach: rqCoach,
          points: 10,
        },
        {
          key: 'why',
          label: 'Why this question matters, and for whom',
          type: 'textarea',
          hint: 'Say who is affected and why the answer is worth knowing.',
          exemplars: [
            'This matters because the people most affected have the least say, so understanding the causes helps explain who gains and who loses.',
            'It is relevant because the issue still affects communities today, and knowing why it happened helps judge what should be done.',
          ],
          celebrateKeywords: ['because', 'affects', 'matters', 'relevant'],
          points: 10,
        },
      ],
    },
    {
      key: 'plan',
      label: 'Action plan',
      icon: '🗺️',
      criterion: 'B.ii',
      strandLabel: IS_STRANDS['B.ii'],
      brief: { title: 'Brief: a plan, not a list', points: ['Each step names a method, a source and a purpose.', 'Mix primary and secondary sources.', 'Put the steps in a sensible order.'] },
      blurb: `Weak: ${c.plan.weak}  Strong: ${c.plan.strong}`,
      fields: [
        {
          key: 'steps',
          label: 'My action plan',
          type: 'table',
          minRows: 4,
          columns: [
            { key: 'step', label: 'Step', placeholder: 'What I will do' },
            { key: 'method', label: 'Method / source', placeholder: 'e.g. interview, data table, textbook' },
            { key: 'type', label: 'Primary or secondary', placeholder: 'Primary / Secondary' },
            { key: 'why', label: 'Why it helps', placeholder: 'What it will tell me' },
          ],
        },
      ],
    },
    {
      key: 'interview',
      label: 'Interview',
      icon: '🎭',
      criterion: 'B.iii',
      strandLabel: IS_STRANDS['B.iii'],
      brief: { title: 'Brief: gather first-hand evidence', points: ['Ask open questions (tell me about… how did… why do you think…).', 'These are fictional characters: their answers are leads to check, not proof.', 'Ask at least four questions.'] },
      blurb: 'Interview a character connected to your direction. They are made-up composites, so treat what they say as a lead, not as evidence.',
      fields: [
        { key: 'chat', label: 'Interview a character from your direction', type: 'personaChat', personaPack: 'society', personaTopicFrom: topicFrom },
        {
          key: 'takeaways',
          label: 'What did they tell you, and what must you still check?',
          type: 'textarea',
          hint: 'Write two or three useful points. Mark which are claims to check against a source.',
          exemplars: [
            'They said the problem is worse for people with less money. That is only one person’s view, so I need data or a second source to check it.',
            'The character claimed the authorities were slow to act. I will treat that as an opinion and look for figures or a document that confirm or challenge it.',
          ],
          celebrateKeywords: ['check', 'source', 'claim', 'opinion', 'evidence'],
          points: 10,
        },
      ],
    },
    {
      key: 'evidence',
      label: 'Evidence log',
      icon: '📒',
      criterion: 'B.iii',
      strandLabel: IS_STRANDS['B.iii'],
      brief: { title: 'Brief: record what you found', points: ['One row per piece of evidence.', 'Note where it came from so you can cite it later.', 'Choose evidence that answers YOUR question, not just anything interesting.'] },
      fields: [
        {
          key: 'log',
          label: 'Evidence log',
          type: 'table',
          minRows: 3,
          columns: [
            { key: 'fact', label: 'Evidence', placeholder: 'A fact, number or quotation' },
            { key: 'source', label: 'Source', placeholder: 'e.g. Source B, interview' },
            { key: 'link', label: 'How it helps my question', placeholder: 'Because…' },
          ],
        },
      ],
    },
    {
      key: 'evaluate',
      label: 'Evaluate my investigation',
      icon: '🔁',
      criterion: 'B.iv',
      strandLabel: IS_STRANDS['B.iv'],
      brief: { title: 'Brief: evaluate honestly', points: ['What worked well in your plan and methods? Give a reason.', 'What was missing, biased or too thin? What would you do differently?', 'Was your question too wide, or did you answer it?'] },
      fields: [
        {
          key: 'evaluation',
          label: 'How well did my investigation work?',
          type: 'textarea',
          exemplars: c.evaluateExemplars,
          celebrateKeywords: ['limitation', 'next time', 'because', 'improve', 'missing', 'bias'],
          coach: { groups: mergeWords('evaluation', w.evaluation) },
          points: 10,
        },
      ],
    },
  ]

  const thinkSections: WorksheetSection[] = [
    {
      key: 'explain',
      label: 'Explain the content',
      icon: '📖',
      criterion: 'A.ii',
      strandLabel: IS_STRANDS['A.ii'],
      brief: { title: 'Brief: use the vocabulary', points: ['Use at least four key terms from the unit, correctly.', 'Describe, then explain WHY, then give an example.'] },
      fields: [
        {
          key: 'explanation',
          label: c.explainPrompt,
          type: 'textarea',
          exemplars: c.explainExemplars,
          celebrateKeywords: c.explainKeywords,
          coach: { groups: mergeWords('explain', w.explain) },
          points: 10,
        },
      ],
    },
    {
      key: 'model',
      label: c.model.title,
      icon: '🧩',
      criterion: 'D.i',
      strandLabel: IS_STRANDS['D.i'],
      blurb: c.model.blurb,
      brief: { title: 'Brief: analyse, do not just list', points: ['For each part, say what is happening in this case.', 'Then say how one part affects another.'] },
      fields: [
        {
          key: 'rows',
          label: c.model.title,
          type: 'table',
          minRows: c.model.rows.length,
          columns: [
            { key: 'part', label: 'Part', placeholder: c.model.rows.map((r) => r.label).join(' / ') },
            { key: 'here', label: 'What happens in this case', placeholder: 'Describe it with a detail' },
            { key: 'effect', label: 'How it affects another part', placeholder: 'This leads to…' },
          ],
        },
      ],
    },
    {
      key: 'opvl',
      label: 'Judge the sources',
      icon: '🔍',
      criterion: 'D.iii',
      strandLabel: IS_STRANDS['D.iii'],
      blurb: `Use OPVL: Origin, Purpose, Value, Limitation. Example — ${c.opvlExample.label}. Weak: ${c.opvlExample.weak} Strong: ${c.opvlExample.strong}`,
      brief: { title: 'Brief: judge, do not summarise', points: ['Origin: who made it, when, and in what form?', 'Purpose: why was it made and for whom?', 'Value: what does it help you find out?', 'Limitation: what can it not tell you, or where might it be biased?'] },
      fields: [
        {
          key: 'sources',
          label: 'OPVL for each source',
          type: 'table',
          minRows: c.sourceNames.length,
          columns: [
            { key: 'source', label: 'Source', placeholder: c.sourceNames.join(' / ') },
            { key: 'origin', label: 'Origin', placeholder: 'Who, when, what kind' },
            { key: 'purpose', label: 'Purpose', placeholder: 'Why, for whom' },
            { key: 'value', label: 'Value', placeholder: 'It helps because…' },
            { key: 'limit', label: 'Limitation', placeholder: 'But it cannot…' },
          ],
        },
      ],
    },
    {
      key: 'perspectives',
      label: 'Perspectives',
      icon: '👥',
      criterion: 'D.iv',
      strandLabel: IS_STRANDS['D.iv'],
      brief: { title: 'Brief: two views, and what follows', points: ['Name two different groups.', 'For each, say what they would want and why.', 'Then explain what that means for the outcome: the implication.'] },
      fields: [
        {
          key: 'views',
          label: 'Two different perspectives and their implications',
          type: 'textarea',
          exemplars: c.perspectiveExemplars,
          celebrateKeywords: ['perspective', 'whereas', 'however', 'implication', 'as a result', 'because'],
          coach: { groups: mergeWords('perspectives', w.perspectives) },
          points: 10,
        },
      ],
    },
    {
      key: 'argument',
      label: 'My argument',
      icon: '⚖️',
      criterion: 'D.ii',
      strandLabel: IS_STRANDS['D.ii'],
      blurb: `Question: ${c.argumentQuestion}`,
      brief: { title: 'Brief: claim, evidence, explanation, link', points: ['Start with a clear claim that answers the question.', 'Back it with two pieces of evidence from the sources or your log.', 'Explain HOW the evidence supports the claim.', 'Finish by linking back to the question and admitting a counter-view.'] },
      fields: [
        {
          key: 'argument',
          label: 'My answer, in one well-built paragraph',
          type: 'textarea',
          exemplars: c.argumentExemplars,
          celebrateKeywords: c.argumentKeywords,
          coach: argumentCoach,
          points: 10,
        },
      ],
    },
    {
      key: 'audience',
      label: 'Audience and purpose',
      icon: '🎯',
      criterion: 'C.i',
      strandLabel: IS_STRANDS['C.i'],
      brief: { title: 'Brief: choose who you are writing for', points: ['A report for a city councillor sounds different from a summary for classmates.', 'Say how your tone and word choice fit your reader.'] },
      fields: [
        { key: 'audience', label: 'My audience', type: 'select', options: ['A local councillor or decision-maker', 'A class of younger students', 'A newspaper or website reader', 'A museum or exhibition visitor'] },
        {
          key: 'style',
          label: 'How I will write so it suits them',
          type: 'textarea',
          exemplars: [
            'My reader is a councillor, so I will use a formal tone, lead with the main finding and keep my recommendation short and specific.',
            'Because my audience is younger students, I will use simpler words, explain each key term and use one clear example.',
          ],
          celebrateKeywords: ['because', 'tone', 'audience', 'purpose', 'formal', 'explain'],
          coach: { groups: mergeWords('audience', w.audience) },
          points: 10,
        },
      ],
    },
    {
      key: 'structure',
      label: 'Plan the structure',
      icon: '🧱',
      criterion: 'C.ii',
      strandLabel: IS_STRANDS['C.ii'],
      brief: { title: 'Brief: follow the task instructions', points: [`Format: ${c.reportTitleHint}`, 'Give each part a job: introduction, evidence and analysis, perspectives, conclusion.', 'Sentences should flow from one idea to the next.'] },
      fields: [
        {
          key: 'outline',
          label: 'My outline',
          type: 'table',
          minRows: 4,
          columns: [
            { key: 'part', label: 'Part', placeholder: 'Introduction / Evidence / Perspectives / Conclusion' },
            { key: 'job', label: 'What this part does', placeholder: 'It will…' },
            { key: 'src', label: 'Sources used', placeholder: 'e.g. Source A, log row 2' },
          ],
        },
      ],
    },
    {
      key: 'references',
      label: 'Reference list',
      icon: '📚',
      criterion: 'C.iii',
      strandLabel: IS_STRANDS['C.iii'],
      brief: { title: 'Brief: credit every source', points: ['List each source in the same format (author or organisation, title, year, where you found it).', 'Cite it inside your writing, for example (Source A, 2024).', 'Say if a source was constructed for this task.'] },
      fields: [
        {
          key: 'refs',
          label: 'Reference list',
          type: 'textarea',
          placeholder: 'Source A — Organisation, title, year. (constructed for this task)',
          exemplars: [
            'Source A — City Water Authority, press release, 2024 (constructed for this task). Source B — table of water use by neighbourhood (constructed for this task). Interview with a fictional character, 2024.',
            'Source A, mill owner’s letter, 1844 (constructed for this task); Source B, illustrative health table; interview with a fictional character. All cited in the text as (Source A) or (Source B).',
          ],
          celebrateKeywords: ['source', 'constructed', 'cited', '2024', 'interview'],
          points: 10,
        },
      ],
    },
  ]

  return {
    id: c.id,
    year: 'MYP4',
    subject: c.subject,
    title: c.title,
    subtitle: c.subtitle,
    icon: c.icon,
    theme: c.theme,
    selfPaced: true,
    stages: [
      {
        type: 'learn',
        key: 'intro',
        label: 'Start Here',
        icon: '🚀',
        block: BLOCK1,
        minutes: 8,
        intro: { title: `${c.icon} ${c.title}`, blurb: 'A short, real-feeling investigation in two lessons. Read the cards, then start.' },
        overview: { brief, flow },
        pages: [
          ...c.hookPages,
          {
            icon: '🔭',
            title: 'The unit in one line',
            body: [`Statement of inquiry: ${c.unit.statementOfInquiry}`, `Key concept: ${c.unit.keyConcept}. Global context: ${c.unit.globalContext}.`],
            bullets: [`Ideas to look for: ${c.unit.relatedConcepts.join(', ')}.`, ...c.unit.inquiryQuestions.map((q) => `Inquiry question: ${q}`)],
            tip: 'Keep the statement of inquiry in mind. Every answer you write should help explain it.',
          },
          {
            icon: '🛤️',
            title: 'How the activity works',
            body: [
              'You move through four assessed criteria, one strand at a time. Two checkpoint quizzes tell you whether you are ready for the next part.',
              'It follows the same shape as the MYP on-screen exam: work from a stimulus, plan an investigation, communicate in a structured response, and think critically about sources and views.',
            ],
            bullets: [
              'A. Knowing and understanding → Checkpoint 1',
              'B. Investigating → choose a direction, ask a question, plan, interview, log evidence',
              'D. Thinking critically → Source pack, Checkpoint 2, analyse and weigh',
              'C. Communicating → audience, structure, references',
              'B.iv. Evaluate your own work, then see what to do next',
            ],
            tip: 'Your answers save automatically. You can go back at any time.',
          },
          c.vocabPage,
        ],
      },
      {
        type: 'mcq',
        key: 'checkA',
        label: 'Checkpoint 1 · Knowing',
        icon: '✅',
        pacing: 'self-paced',
        block: BLOCK1,
        minutes: 8,
        intro: { title: '✅ Checkpoint 1 — Criterion A', blurb: 'Show you can use the key terms and understand the content (A.i, A.ii). A score of 4 or more means you are ready to investigate.' },
        questions: c.checkA,
        pointsPerCorrect: 10,
      },
      {
        type: 'learn',
        key: 'lessonB',
        label: 'Lesson: Investigating',
        icon: '📘',
        strand: 'B.i',
        block: BLOCK1,
        minutes: 8,
        intro: { title: '📘 Criterion B — Investigating', blurb: 'Three cards on questions, plans and methods.' },
        pages: [
          {
            icon: '❓',
            title: 'A clear and focused question',
            body: ['A research question is not a topic. It names a place or time, the people involved and what you are trying to explain. It also needs a reason: why does it matter?'],
            example: { label: 'Weak versus strong', weak: c.rq.weak, strong: c.rq.strong, note: c.rq.note },
            keyTerms: [
              { term: 'Focused', meaning: 'narrow enough to answer with evidence' },
              { term: 'Relevant', meaning: 'it matters to real people or to understanding the unit' },
            ],
          },
          {
            icon: '🗺️',
            title: 'An action plan',
            body: ['A plan says what you will do, which source you will use and why, in a sensible order. Mix primary and secondary sources.'],
            example: { label: 'Weak plan versus strong plan', weak: c.plan.weak, strong: c.plan.strong },
          },
          {
            icon: '🧰',
            title: 'Methods and evidence',
            body: ['Primary sources are first-hand: an interview, an observation, a survey. Secondary sources were produced by someone else: a textbook, a news report, a data table. Good investigations use both, and record where each fact came from.'],
            bullets: c.methodBullets,
            tip: 'Before you start: could someone check where each piece of evidence came from?',
          },
        ],
      },
      {
        type: 'worksheet',
        key: 'investigate',
        label: 'Investigate',
        icon: '🔎',
        block: BLOCK1,
        minutes: 25,
        intro: { title: '🔎 Criterion B — Investigate', blurb: 'Choose a direction, ask your question, plan, interview a character and log evidence.' },
        overview: { brief, flow: flow.filter((f) => f.strand.startsWith('B')) },
        sections: investigateSections,
      },
      {
        type: 'learn',
        key: 'sources',
        label: 'Source Pack',
        icon: '🗂️',
        strand: 'D.iii',
        block: BLOCK2,
        minutes: 10,
        intro: { title: '🗂️ Source pack', blurb: 'Read each source closely. The sources are constructed for this task, patterned on real material.' },
        pages: [
          {
            icon: '🔍',
            title: 'How to judge a source: OPVL',
            body: ['Do not just report what a source says. Ask four questions of it.'],
            bullets: ['Origin: who made it, when, what kind of source?', 'Purpose: why was it made, and for whom?', 'Value: what does it help you find out?', 'Limitation: what can it not tell you, or where is it one-sided?'],
            example: c.opvlExample,
            keyTerms: [
              { term: 'Bias', meaning: 'a tilt towards one side, often without saying so' },
              { term: 'Reliable', meaning: 'trustworthy for the purpose you are using it for' },
            ],
          },
          ...c.sourcePages,
        ],
      },
      {
        type: 'mcq',
        key: 'checkD',
        label: 'Checkpoint 2 · Thinking critically',
        icon: '🧠',
        pacing: 'self-paced',
        block: BLOCK2,
        minutes: 8,
        intro: { title: '🧠 Checkpoint 2 — Criterion D', blurb: 'Can you judge sources and perspectives? (D.iii, D.iv). Use the source pack to answer.' },
        questions: c.checkD,
        pointsPerCorrect: 10,
      },
      {
        type: 'worksheet',
        key: 'think',
        label: 'Think and Communicate',
        icon: '✍️',
        block: BLOCK2,
        minutes: 35,
        intro: { title: '✍️ Criteria A, C and D — Think and communicate', blurb: 'Explain, analyse, judge sources, weigh perspectives, argue, then plan how to communicate it.' },
        overview: { flow: flow.filter((f) => !f.strand.startsWith('B')) },
        sections: thinkSections,
      },
      {
        type: 'worksheet',
        key: 'next',
        label: 'What Next?',
        icon: '🎓',
        block: BLOCK2,
        minutes: 3,
        intro: { title: '🎓 You finished', blurb: 'Nice work. Here is what to do next.' },
        sections: [
          {
            key: 'keepGoing',
            label: 'Keep going',
            icon: '🌱',
            blurb: 'This section is not assessed.',
            fields: [
              { key: 'lead', label: 'Next step', type: 'leadCapture', leadInterests: c.leadInterests, leadSource: c.leadSource },
            ],
          },
        ],
      },
      {
        type: 'grading',
        key: 'grading',
        label: 'Criteria Review',
        icon: '📋',
        intro: { title: '📋 Criteria review & grading', blurb: 'Review each student’s question, plan, evidence, source analysis and argument, then grade all four criteria. Use the checkpoint scores as a first signal for A and D.' },
        strands: (Object.keys(IS_STRANDS) as (keyof typeof IS_STRANDS)[]).map((k) => ({ key: k, label: IS_STRANDS[k] })),
      },
    ],
  }
}
