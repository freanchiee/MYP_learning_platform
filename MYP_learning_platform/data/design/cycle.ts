// MYP Design — the design cycle (Years 4–5 / published "Year 5" criteria).
// This REPLACES the marks/markscheme model used by exam papers: students are
// assessed against four equally-weighted criteria (A–D), each scored 1–8.
// Descriptors transcribed from the MYP Design guide (from 2014), Year 5.

export type CriterionKey = 'A' | 'B' | 'C' | 'D'

export interface RubricBand {
  range: string // e.g. '7–8'
  label: string // Limited / Adequate / Substantial / Excellent
  descriptors: string[] // the i–iv strand wording for this band
}

export interface Criterion {
  key: CriterionKey
  title: string // 'Inquiring and analysing'
  phase: string // design-cycle phase verb, e.g. 'Inquire & Analyse'
  summary: string // one line: what students do
  /** End-of-year-5 objective strands. These double as the build-mode scaffold prompts. */
  objectives: string[]
  bands: RubricBand[] // four bands, weakest → strongest
  cssVar: string // criterion colour token
}

export const BAND_LABELS = ['Limited', 'Adequate', 'Substantial', 'Excellent'] as const

export const DESIGN_CYCLE: Criterion[] = [
  {
    key: 'A',
    title: 'Inquiring and analysing',
    phase: 'Inquire & Analyse',
    summary:
      'Identify the need for a solution, research the problem, and analyse existing products.',
    cssVar: 'var(--cA)',
    objectives: [
      'Explain and justify the need for a solution to a problem for a specified client / target audience.',
      'Identify and prioritize the primary and secondary research needed to develop a solution.',
      'Analyse a range of existing products that inspire a solution to the problem.',
      'Develop a detailed design brief, which summarizes the analysis of relevant research.',
    ],
    bands: [
      {
        range: '1–2',
        label: 'Limited',
        descriptors: [
          'States the need for a solution to a problem for a specified client/target audience.',
          'Develops a basic design brief, which states the findings of relevant research.',
        ],
      },
      {
        range: '3–4',
        label: 'Adequate',
        descriptors: [
          'Outlines the need for a solution for a specified client/target audience.',
          'Outlines a research plan identifying primary and secondary research needed, with some guidance.',
          'Analyses one existing product that inspires a solution to the problem.',
          'Develops a design brief, which outlines the analysis of relevant research.',
        ],
      },
      {
        range: '5–6',
        label: 'Substantial',
        descriptors: [
          'Explains the need for a solution for a specified client/target audience.',
          'Constructs a research plan, which identifies and prioritizes primary and secondary research, with some guidance.',
          'Analyses a range of existing products that inspire a solution to the problem.',
          'Develops a design brief, which explains the analysis of relevant research.',
        ],
      },
      {
        range: '7–8',
        label: 'Excellent',
        descriptors: [
          'Explains and justifies the need for a solution for a client/target audience.',
          'Constructs a detailed research plan, which identifies and prioritizes primary and secondary research independently.',
          'Analyses a range of existing products that inspire a solution in detail.',
          'Develops a detailed design brief, which summarizes the analysis of relevant research.',
        ],
      },
    ],
  },
  {
    key: 'B',
    title: 'Developing ideas',
    phase: 'Develop Ideas',
    summary:
      'Write a design specification, generate feasible ideas, choose one, and plan how to make it.',
    cssVar: 'var(--cB)',
    objectives: [
      'Develop a design specification, which clearly states the success criteria for the design of a solution.',
      'Develop a range of feasible design ideas, which can be correctly interpreted by others.',
      'Present the chosen design and justify its selection.',
      'Develop accurate and detailed planning drawings/diagrams and outline the requirements for the creation of the chosen solution.',
    ],
    bands: [
      {
        range: '1–2',
        label: 'Limited',
        descriptors: [
          'Lists some basic design specifications for the design of a solution.',
          'Presents one design, which can be interpreted by others.',
          'Creates incomplete planning drawings/diagrams.',
        ],
      },
      {
        range: '3–4',
        label: 'Adequate',
        descriptors: [
          'Lists some design specifications, which relate to the success criteria for the solution.',
          'Presents a few feasible designs, using an appropriate medium(s) or annotation, which can be interpreted by others.',
          'Justifies the selection of the chosen design with reference to the design specification.',
          'Creates planning drawings/diagrams or lists requirements for the creation of the chosen solution.',
        ],
      },
      {
        range: '5–6',
        label: 'Substantial',
        descriptors: [
          'Develops design specifications, which outline the success criteria for the solution.',
          'Develops a range of feasible design ideas, using an appropriate medium(s) and annotation, which can be interpreted by others.',
          'Presents the chosen design and justifies its selection with reference to the design specification.',
          'Develops accurate planning drawings/diagrams and lists requirements for the creation of the chosen solution.',
        ],
      },
      {
        range: '7–8',
        label: 'Excellent',
        descriptors: [
          'Develops detailed design specifications, which explain the success criteria based on the analysis of the research.',
          'Develops a range of feasible design ideas, using an appropriate medium(s) and detailed annotation, which can be correctly interpreted by others.',
          'Presents the chosen design and justifies fully and critically its selection with detailed reference to the design specification.',
          'Develops accurate and detailed planning drawings/diagrams and outlines requirements for the creation of the chosen solution.',
        ],
      },
    ],
  },
  {
    key: 'C',
    title: 'Creating the solution',
    phase: 'Create',
    summary:
      'Plan the build, make the solution with technical skill, and justify changes along the way.',
    cssVar: 'var(--cC)',
    objectives: [
      'Construct a logical plan, which describes the efficient use of time and resources, sufficient for peers to follow.',
      'Demonstrate excellent technical skills when making the solution.',
      'Follow the plan to create the solution, which functions as intended.',
      'Fully justify changes made to the chosen design and plan when making the solution, and present the solution as a whole.',
    ],
    bands: [
      {
        range: '1–2',
        label: 'Limited',
        descriptors: [
          'Demonstrates minimal technical skills when making the solution.',
          'Creates the solution, which functions poorly and is presented in an incomplete form.',
        ],
      },
      {
        range: '3–4',
        label: 'Adequate',
        descriptors: [
          'Constructs a plan that contains some production details, resulting in peers having difficulty following it.',
          'Demonstrates satisfactory technical skills when making the solution.',
          'Creates the solution, which partially functions and is adequately presented.',
          'Outlines changes made to the chosen design and plan when making the solution.',
        ],
      },
      {
        range: '5–6',
        label: 'Substantial',
        descriptors: [
          'Constructs a logical plan, which considers time and resources, sufficient for peers to follow.',
          'Demonstrates competent technical skills when making the solution.',
          'Creates the solution, which functions as intended and is presented appropriately.',
          'Describes changes made to the chosen design and plan when making the solution.',
        ],
      },
      {
        range: '7–8',
        label: 'Excellent',
        descriptors: [
          'Constructs a detailed and logical plan, which describes the efficient use of time and resources, sufficient for peers to follow.',
          'Demonstrates excellent technical skills when making the solution.',
          'Follows the plan to create the solution, which functions as intended and is presented appropriately.',
          'Fully justifies changes made to the chosen design and plan when making the solution.',
        ],
      },
    ],
  },
  {
    key: 'D',
    title: 'Evaluating',
    phase: 'Evaluate',
    summary:
      'Design tests, evaluate the solution against the specification, and judge its impact.',
    cssVar: 'var(--cD)',
    objectives: [
      'Design detailed and relevant testing methods, which generate data, to measure the success of the solution.',
      'Critically evaluate the success of the solution against the design specification.',
      'Explain how the solution could be improved.',
      'Explain the impact of the solution on the client / target audience.',
    ],
    bands: [
      {
        range: '1–2',
        label: 'Limited',
        descriptors: [
          'Designs a testing method, which is used to measure the success of the solution.',
          'States the success of the solution.',
        ],
      },
      {
        range: '3–4',
        label: 'Adequate',
        descriptors: [
          'Designs a relevant testing method, which generates data, to measure the success of the solution.',
          'Outlines the success of the solution against the design specification based on relevant product testing.',
          'Outlines how the solution could be improved.',
          'Outlines the impact of the solution on the client/target audience.',
        ],
      },
      {
        range: '5–6',
        label: 'Substantial',
        descriptors: [
          'Designs relevant testing methods, which generate data, to measure the success of the solution.',
          'Explains the success of the solution against the design specification based on relevant product testing.',
          'Describes how the solution could be improved.',
          'Explains the impact of the solution on the client/target audience, with guidance.',
        ],
      },
      {
        range: '7–8',
        label: 'Excellent',
        descriptors: [
          'Designs detailed and relevant testing methods, which generate data, to measure the success of the solution.',
          'Critically evaluates the success of the solution against the design specification based on authentic product testing.',
          'Explains how the solution could be improved.',
          'Explains the impact of the product on the client/target audience.',
        ],
      },
    ],
  },
]

export const CRITERION_BY_KEY: Record<CriterionKey, Criterion> = Object.fromEntries(
  DESIGN_CYCLE.map((c) => [c.key, c]),
) as Record<CriterionKey, Criterion>

// MYP Design conceptual framework (guide, "Curriculum overview").
export const KEY_CONCEPTS = ['Communication', 'Communities', 'Development', 'Systems'] as const

export const RELATED_CONCEPTS = [
  'Adaptation',
  'Collaboration',
  'Ergonomics',
  'Form',
  'Function',
  'Innovation',
  'Invention',
  'Markets and trends',
  'Perspective',
  'Resources',
  'Sustainability',
] as const

export const GLOBAL_CONTEXTS = [
  'Identities and relationships',
  'Orientation in space and time',
  'Personal and cultural expression',
  'Scientific and technical innovation',
  'Globalization and sustainability',
  'Fairness and development',
] as const

export const DESIGN_AIMS = [
  'Enjoy the design process and develop an appreciation of its elegance and power.',
  'Develop knowledge, understanding and skills from different disciplines to design and create solutions using the design cycle.',
  'Use and apply technology effectively to access, process and communicate information, model and create solutions, and solve problems.',
  'Develop an appreciation of the impact of design innovations for life, global society and environments.',
  'Appreciate past, present and emerging design within cultural, political, social, historical and environmental contexts.',
  'Develop respect for others’ viewpoints and appreciate alternative solutions to problems.',
  'Act with integrity and honesty, and take responsibility for their own actions, developing effective working practices.',
]
