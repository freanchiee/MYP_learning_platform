/**
 * SINGLE SOURCE OF TRUTH for the discrete-sciences topic taxonomy.
 *
 * Tagging across the platform uses a TWO-LEVEL controlled vocabulary derived
 * from the official MYP discrete-sciences topic list:
 *
 *   topicGroup    – parent category of the PRIMARY topic (coarse filtering)
 *   topicCanonical – the single DOMINANT sub-topic assessed (fine filtering, stats)
 *   topicsAlso    – OPTIONAL additional sub-topics genuinely co-assessed (max 2)
 *
 * Because Topic / TopicGroup are string-literal unions, any vague or invalid
 * token becomes a TypeScript compile error at the call site — that is the
 * enforcement mechanism. Never add a free-text or bare-subject ("Biology")
 * token here.
 *
 * Chemistry and Physics tokens are appended to these unions as those subjects
 * come online (see the commented stubs at the bottom of each union).
 */

// ─────────────────────────────────────────────────────────────────────────────
// PARENT GROUPS
// ─────────────────────────────────────────────────────────────────────────────

/** Biology parent categories (9). */
export type BiologyTopicGroup =
  | 'Cells'
  | 'Organisms'
  | 'Processes'
  | 'Metabolism'
  | 'Evolution'
  | 'Interactions with Environment'
  | 'Interactions Between Organisms'
  | 'Human Interactions with Environments'
  | 'Biotechnology'

/** Chemistry parent categories (9). */
export type ChemistryTopicGroup =
  | 'Atomic Structure & Periodic Table'
  | 'Bonding & Structure'
  | 'States of Matter'
  | 'Chemical Reactions'
  | 'Quantitative Chemistry'
  | 'Organic Chemistry'
  | 'Electrochemistry'
  | 'Environmental Chemistry'
  | 'Nuclear Chemistry'

/** Physics parent categories (8). */
export type PhysicsTopicGroup =
  | 'Forces & Motion'
  | 'Thermal Physics'
  | 'Waves & Sound'
  | 'Electromagnetic Waves & Optics'
  | 'Electricity & Magnetism'
  | 'Nuclear & Atomic Physics'
  | 'Space & Astrophysics'
  | 'Pressure & Fluids'

export type TopicGroup = BiologyTopicGroup | ChemistryTopicGroup | PhysicsTopicGroup

// ─────────────────────────────────────────────────────────────────────────────
// SUB-TOPICS (the fine-grained dominant tokens)
// ─────────────────────────────────────────────────────────────────────────────

/** Biology sub-topics, grouped by parent (every token below is valid). */
export type BiologyTopic =
  // Cells
  | 'Cell Structure & Function'
  | 'Tissues, Organs & Systems'
  | 'Factors Affecting Human Health'
  | 'Physiology'
  | 'Vaccination'
  // Organisms
  | 'Habitats & Ecosystems'
  | 'Interdependency'
  | 'Unity & Diversity of Life'
  | 'Energy Transfer & Cycles'
  | 'Nutrient/Carbon/Nitrogen Cycles'
  | 'Classification'
  // Processes
  | 'Photosynthesis'
  | 'Cell Respiration'
  | 'Aerobic & Anaerobic Respiration'
  | 'Word & Chemical Equations'
  // Metabolism
  | 'Nutrition'
  | 'Digestion'
  | 'Enzymes & Biochemistry'
  | 'Movement & Transport'
  | 'Diffusion'
  | 'Osmosis'
  | 'Gas Exchange'
  | 'Circulation'
  | 'Transpiration & Translocation'
  | 'Homeostasis'
  // Evolution
  | 'Life Cycles'
  | 'Natural Selection'
  | 'Cell Division (Mitosis & Meiosis)'
  | 'Reproduction'
  | 'Biodiversity'
  | 'Inheritance & Variation'
  | 'DNA & Genetics'
  // Interactions with Environment
  | 'Tropism'
  | 'Senses'
  | 'Nervous System'
  | 'Receptors & Hormones'
  // Interactions Between Organisms
  | 'Pathogens & Parasites'
  | 'Predator/Prey'
  | 'Food Chains & Webs'
  | 'Competition'
  | 'Speciation & Extinction'
  // Human Interactions with Environments
  | 'Human Influences'
  | 'Habitat Change & Destruction'
  | 'Pollution & Conservation'
  | 'Overexploitation'
  | 'Mitigation of Adverse Effects'
  // Biotechnology
  | 'Genetic Modification'
  | 'Cloning'
  | 'Ethical Implications'
  | 'Genome Mapping & Application'
  | '3D Tissue & Organ Printing'

/** Chemistry sub-topics (10 canonical tokens). */
export type ChemistryTopic =
  // Atomic Structure & Periodic Table
  | 'Periodic Table & Atomic Structure'
  // Bonding & Structure
  | 'Bonding & Molecular Structure'
  // States of Matter
  | 'States of Matter & Particle Theory'
  | 'Separation & Purification'
  // Chemical Reactions
  | 'Chemical Equations & Reactions'
  | 'Acids, Bases & Salts'
  | 'Rates of Reaction & Catalysis'
  // Quantitative Chemistry
  | 'Moles & Stoichiometry'
  // Organic Chemistry
  | 'Organic Chemistry & Fuels'
  // Electrochemistry
  | 'Electrochemistry & Redox'
  // Environmental Chemistry
  | 'Environmental Impact & Sustainability'
  // Nuclear Chemistry
  | 'Nuclear Chemistry & Radioactivity'

/** Physics sub-topics (13 canonical tokens). */
export type PhysicsTopic =
  // Forces & Motion
  | "Newton's Laws & Momentum"
  | 'Kinematics & Motion Graphs'
  // Thermal Physics
  | 'Heat Transfer'
  | 'States of Matter & Kinetic Theory'
  // Waves & Sound
  | 'Waves, Sound & Frequency'
  // Electromagnetic Waves & Optics
  | 'Electromagnetic Spectrum'
  | 'Light, Reflection & Refraction'
  // Electricity & Magnetism
  | 'Circuits, Resistance & Power'
  | 'Electromagnetic Induction & Motors'
  // Nuclear & Atomic Physics
  | 'Atomic Structure & Radioactivity'
  | 'Nuclear Reactions & Energy'
  // Space & Astrophysics
  | 'Solar System, Gravity & Space'
  // Pressure & Fluids
  | 'Pressure, Density & Buoyancy'

export type Topic = BiologyTopic | ChemistryTopic | PhysicsTopic

// ─────────────────────────────────────────────────────────────────────────────
// TOPIC → PARENT GROUP MAP
// ─────────────────────────────────────────────────────────────────────────────

export const TOPIC_GROUP_OF: Record<Topic, TopicGroup> = {
  // ── Physics ──────────────────────────────────────────────────────────────
  "Newton's Laws & Momentum":       'Forces & Motion',
  'Kinematics & Motion Graphs':     'Forces & Motion',
  'Heat Transfer':                  'Thermal Physics',
  'States of Matter & Kinetic Theory': 'Thermal Physics',
  'Waves, Sound & Frequency':       'Waves & Sound',
  'Electromagnetic Spectrum':       'Electromagnetic Waves & Optics',
  'Light, Reflection & Refraction': 'Electromagnetic Waves & Optics',
  'Circuits, Resistance & Power':   'Electricity & Magnetism',
  'Electromagnetic Induction & Motors': 'Electricity & Magnetism',
  'Atomic Structure & Radioactivity': 'Nuclear & Atomic Physics',
  'Nuclear Reactions & Energy':     'Nuclear & Atomic Physics',
  'Solar System, Gravity & Space':  'Space & Astrophysics',
  'Pressure, Density & Buoyancy':   'Pressure & Fluids',
  // ── Chemistry ────────────────────────────────────────────────────────────
  'Periodic Table & Atomic Structure':    'Atomic Structure & Periodic Table',
  'Bonding & Molecular Structure':        'Bonding & Structure',
  'States of Matter & Particle Theory':   'States of Matter',
  'Separation & Purification':            'States of Matter',
  'Chemical Equations & Reactions':       'Chemical Reactions',
  'Acids, Bases & Salts':                 'Chemical Reactions',
  'Rates of Reaction & Catalysis':        'Chemical Reactions',
  'Moles & Stoichiometry':                'Quantitative Chemistry',
  'Organic Chemistry & Fuels':            'Organic Chemistry',
  'Electrochemistry & Redox':             'Electrochemistry',
  'Environmental Impact & Sustainability':'Environmental Chemistry',
  'Nuclear Chemistry & Radioactivity':    'Nuclear Chemistry',
  // ── Biology ──────────────────────────────────────────────────────────────
  // Cells
  'Cell Structure & Function': 'Cells',
  'Tissues, Organs & Systems': 'Cells',
  'Factors Affecting Human Health': 'Cells',
  'Physiology': 'Cells',
  'Vaccination': 'Cells',
  // Organisms
  'Habitats & Ecosystems': 'Organisms',
  'Interdependency': 'Organisms',
  'Unity & Diversity of Life': 'Organisms',
  'Energy Transfer & Cycles': 'Organisms',
  'Nutrient/Carbon/Nitrogen Cycles': 'Organisms',
  'Classification': 'Organisms',
  // Processes
  'Photosynthesis': 'Processes',
  'Cell Respiration': 'Processes',
  'Aerobic & Anaerobic Respiration': 'Processes',
  'Word & Chemical Equations': 'Processes',
  // Metabolism
  'Nutrition': 'Metabolism',
  'Digestion': 'Metabolism',
  'Enzymes & Biochemistry': 'Metabolism',
  'Movement & Transport': 'Metabolism',
  'Diffusion': 'Metabolism',
  'Osmosis': 'Metabolism',
  'Gas Exchange': 'Metabolism',
  'Circulation': 'Metabolism',
  'Transpiration & Translocation': 'Metabolism',
  'Homeostasis': 'Metabolism',
  // Evolution
  'Life Cycles': 'Evolution',
  'Natural Selection': 'Evolution',
  'Cell Division (Mitosis & Meiosis)': 'Evolution',
  'Reproduction': 'Evolution',
  'Biodiversity': 'Evolution',
  'Inheritance & Variation': 'Evolution',
  'DNA & Genetics': 'Evolution',
  // Interactions with Environment
  'Tropism': 'Interactions with Environment',
  'Senses': 'Interactions with Environment',
  'Nervous System': 'Interactions with Environment',
  'Receptors & Hormones': 'Interactions with Environment',
  // Interactions Between Organisms
  'Pathogens & Parasites': 'Interactions Between Organisms',
  'Predator/Prey': 'Interactions Between Organisms',
  'Food Chains & Webs': 'Interactions Between Organisms',
  'Competition': 'Interactions Between Organisms',
  'Speciation & Extinction': 'Interactions Between Organisms',
  // Human Interactions with Environments
  'Human Influences': 'Human Interactions with Environments',
  'Habitat Change & Destruction': 'Human Interactions with Environments',
  'Pollution & Conservation': 'Human Interactions with Environments',
  'Overexploitation': 'Human Interactions with Environments',
  'Mitigation of Adverse Effects': 'Human Interactions with Environments',
  // Biotechnology
  'Genetic Modification': 'Biotechnology',
  'Cloning': 'Biotechnology',
  'Ethical Implications': 'Biotechnology',
  'Genome Mapping & Application': 'Biotechnology',
  '3D Tissue & Organ Printing': 'Biotechnology',
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** All groups a task touches (primary + any topicsAlso), deduped. */
export const topicGroupsOf = (topic: Topic, also?: Topic[]): TopicGroup[] =>
  Array.from(new Set([topic, ...(also ?? [])].map((t) => TOPIC_GROUP_OF[t])))
