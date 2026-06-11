type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2021_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Chemical formulae', 'Calcium hydroxide'], keywords: ['Ca(OH)₂', 'formula selection', 'calcium hydroxide', 'limestone caves'] },
  q1_b: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['magnesium group 2', 'period 3', 'alkaline earth metals', 'Mg'] },
  q1_c: { keyConcepts: ['Electron configuration', 'Noble gases', 'Neon'], keywords: ['2.8', 'neon electron config', '1s² 2s² 2p⁶', 'ten electrons'] },
  q1_d: { keyConcepts: ['Reactivity of metals', 'Bohr model', 'Nuclear attraction'], keywords: ['rubidium vs sodium', 'more electron shells', 'outer electron further', 'less nuclear attraction Bohr'] },

  q2_a: { keyConcepts: ['Chemical bonding', 'Covalent bonds'], keywords: ['covalent bonds ethanol', 'C₂H₅OH bonding', 'non-metal bond', 'organic molecule'] },
  q2_b: { keyConcepts: ['Lewis structures', 'Water'], keywords: ['H₂O Lewis structure', 'lone pairs on O', 'H–O–H', 'dot cross water'] },
  q2_c: { keyConcepts: ['Balancing equations', 'Combustion', 'State symbols'], keywords: ['C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O', 'ethanol combustion', 'state symbols l g', 'balanced combustion'] },
  q2_d: { keyConcepts: ['Hazard symbols', 'Flammable'], keywords: ['flammable flame symbol', 'ethanol hazard', 'GHS flammable', 'fire hazard'] },
  q2_e: { keyConcepts: ['Collision theory', 'Concentration and rate'], keywords: ['higher ethanol concentration', 'more molecules', 'more collisions', 'faster kill rate antiseptic'] },

  q3_a: { keyConcepts: ['Composition of atmosphere'], keywords: ['nitrogen 78%', 'oxygen 20.9%', 'atmospheric composition exhaust'] },
  q3_b: { keyConcepts: ['Classification of molecules', 'Monatomic diatomic polyatomic'], keywords: ['CO₂ polyatomic', 'argon monatomic', 'N₂ diatomic', 'exhaust gas molecules'] },
  q3_c: { keyConcepts: ['Noble gases', 'Full outer shell'], keywords: ['argon unreactive', 'full outer shell stable', 'monatomic noble gas exhaust'] },
  q3_d: { keyConcepts: ['Relative molecular mass', 'Calculation'], keywords: ['Freon-11 CCl₃F', 'RMM 137.5', '12+3(35.5)+19', 'trichlorofluoromethane'] },
  q3_e: { keyConcepts: ['Diffusion', 'Particle theory', 'Kinetic energy'], keywords: ['NO₂ faster diffusion 35°C', 'more kinetic energy', 'particles move faster', 'exhaust diffusion temperature'] },
  q3_f: { keyConcepts: ['Structural formulae', 'Alkanes', 'Ethane'], keywords: ['ethane C₂H₆', 'structural formula', 'CH₃–CH₃', 'two carbon alkane'] },

  q4_a: { keyConcepts: ['Reading instruments', 'Temperature measurement'], keywords: ['271.5°C', 'thermometer bismuth', 'melting point Student A'] },
  q4_b: { keyConcepts: ['Graph reading', 'Melting point from graph'], keywords: ['271.3°C', 'Student B bismuth plateau', 'temperature probe graph'] },
  q4_c: { keyConcepts: ['Melting point', 'Change of state'], keywords: ['Student B correct bismuth', 'all melted steady temperature', 'plateau method'] },
  q4_d: { keyConcepts: ['Trends in data', 'Alloy composition'], keywords: ['melting point decreases tin increases', 'bismuth-tin trend', 'negative correlation'] },
  q4_e: { keyConcepts: ['Hypothesis', 'If/Then/Because', 'Material properties'], keywords: ['if tin increases', 'then hardness increases', 'tin harder than bismuth'] },
  q4_f: { keyConcepts: ['Graph reading', 'Prediction'], keywords: ['180°C', '40% tin bismuth alloy', 'melting point prediction'] },
  q4_g: { keyConcepts: ['Applying data', 'Material selection'], keywords: ['Type B', '138°C fire sprinkler', 'bismuth-tin fuse plug'] },

  q5_a: { keyConcepts: ['Osmosis', 'Semi-permeable membrane'], keywords: ['osmosis', 'water movement', 'dilute to concentrated', 'semi-permeable'] },
  q5_b: { keyConcepts: ['Variables', 'IV and DV'], keywords: ['IV salt concentration', 'DV change in mass', 'beetroot osmosis variables'] },
  q5_c: { keyConcepts: ['Control variables', 'Fair test'], keywords: ['beetroot piece size', 'volume solution', 'temperature time', 'control variable osmosis'] },
  q5_d: { keyConcepts: ['Research question'], keywords: ['how does salt concentration affect mass change', 'research question osmosis beetroot'] },

  q6_a: { keyConcepts: ['Graph plotting', 'Data presentation'], keywords: ['Type B candle graph', 'temperature vs time', 'axis labels min °C', 'data points wax'] },
  q6_b: { keyConcepts: ['Data interpretation', 'Solidification temperature'], keywords: ['Type B hardest', 'plateau 57°C', 'highest solidification temperature candle'] },
  q6_c: { keyConcepts: ['Mean calculation'], keywords: ['54.3°C', '(54+55+54)/3', 'average solidification 40% paraffin'] },
  q6_d: { keyConcepts: ['Graph reading', 'Interpolation'], keywords: ['48°C', '60% paraffin', 'solidification temperature read graph'] },
  q6_e: { keyConcepts: ['Anomalous results'], keywords: ['outlier 20% paraffin', 'candle measurement error', 'anomalous wax'] },
  q6_f: { keyConcepts: ['Improving investigations'], keywords: ['intermediate paraffin %', 'more data candle wax', 'improve experiment'] },

  q7_: { keyConcepts: ['Criterion B', 'Investigation design'], keywords: ['IV dye concentration', 'DV burn time', 'CVs mass wick', 'three trials average candle', 'safety naked flame'] },

  q8_a: { keyConcepts: ['Ionic symbols', 'Cobalt ion', 'Transition metals'], keywords: ['Co²⁺', 'cobalt(II) ion', '+2 charge', 'transition metal'] },
  q8_b: { keyConcepts: ['Moles calculation'], keywords: ['n = m/Mr', '6000/58.93', '101.8 mol', 'moles cobalt cathode'] },
  q8_c: { keyConcepts: ['Criterion D', 'Cobalt mining', 'Environmental impact', 'Social impact'], keywords: ['cobalt DRC mining', 'child labour', 'crude oil CO₂', 'electric vehicle trade-offs', 'appraisal'] },

  q9_: { keyConcepts: ['Criterion D', 'Right-to-repair', 'Planned obsolescence', 'E-waste', 'Sustainability'], keywords: ['planned obsolescence e-waste', 'right-to-repair extends product life', 'economic social resource impacts', 'concluding appraisal'] },
}
