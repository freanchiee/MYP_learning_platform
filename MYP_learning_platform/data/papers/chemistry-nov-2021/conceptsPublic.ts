type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2021: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Chemical formulae', 'Calcium carbonate'], keywords: ['CaCO₃', 'formula selection', 'calcium carbonate', 'toothpaste'] },
  q1_b: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['sodium group 1', 'period 3', 'alkali metals', 'periodic table'] },
  q1_c: { keyConcepts: ['Electron configuration', 'Fluorine'], keywords: ['2.7', 'fluorine electron config', '1s² 2s² 2p⁵', 'nine electrons'] },
  q1_d: { keyConcepts: ['Reactivity of metals', 'Bohr model', 'Nuclear attraction'], keywords: ['sodium more reactive', 'more electron shells', 'outer electron further', 'less nuclear attraction', 'Bohr model'] },

  q2_a: { keyConcepts: ['Chemical bonding', 'Covalent bonds'], keywords: ['covalent bond', 'H₂O₂ bonding', 'non-metal bond', 'shared electrons'] },
  q2_b: { keyConcepts: ['Lewis structures', 'Dot-cross diagrams'], keywords: ['H₂O₂ Lewis structure', 'lone pairs on oxygen', 'bonding pairs', 'dot cross diagram'] },
  q2_c: { keyConcepts: ['Balancing equations', 'State symbols', 'Decomposition'], keywords: ['2H₂O₂ → 2H₂O + O₂', 'balanced equation', 'state symbols aq l g', 'decomposition'] },
  q2_d: { keyConcepts: ['Hazard symbols', 'GHS symbols', 'Oxidising agents'], keywords: ['oxidising hazard', 'flame over circle', 'GHS symbol', 'hydrogen peroxide hazard'] },
  q2_e: { keyConcepts: ['Collision theory', 'Concentration and rate'], keywords: ['higher concentration', 'more particles', 'more collisions', 'faster rate', 'whitening rate'] },

  q3_a: { keyConcepts: ['Composition of atmosphere', 'Data reading'], keywords: ['nitrogen 78%', 'oxygen 20.9%', 'most common gases', 'atmosphere pie chart'] },
  q3_b: { keyConcepts: ['Classification of molecules', 'Monatomic diatomic polyatomic'], keywords: ['helium monatomic', 'oxygen diatomic', 'carbon dioxide polyatomic', 'noble gas single atom'] },
  q3_c: { keyConcepts: ['Noble gases', 'Full outer electron shell'], keywords: ['unreactive noble gas', 'full outer shell', 'stable configuration', 'monatomic reason'] },
  q3_d: { keyConcepts: ['Relative molecular mass', 'Calculation'], keywords: ['Freon C₂Cl₃F₃', 'RMM 187.5', '12+35.5+19', 'trichlorotrifluoroethane'] },
  q3_e: { keyConcepts: ['Diffusion', 'Particle theory', 'Temperature and kinetic energy'], keywords: ['particles move faster', 'higher temperature', 'more kinetic energy', 'diffuse quickly', 'scent spreading'] },
  q3_f: { keyConcepts: ['Structural formulae', 'Alkanes', 'Propane'], keywords: ['propane C₃H₈', 'structural formula', 'three carbon chain', 'full structural formula'] },

  q4_a: { keyConcepts: ['Reading instruments', 'Temperature measurement'], keywords: ['28.1°C', 'thermometer reading', 'Student A', 'temperature scale'] },
  q4_b: { keyConcepts: ['Graph reading', 'Melting point from graph'], keywords: ['29.7°C', 'Student B graph', 'plateau', 'melting point determination'] },
  q4_c: { keyConcepts: ['Melting point', 'Change of state', 'Experimental technique'], keywords: ['Student B correct', 'all gallium melted', 'temperature steady', 'plateau method'] },
  q4_d: { keyConcepts: ['Trends in data', 'Alloy composition'], keywords: ['melting point decreases', 'zinc increases', 'negative trend', 'brass alloy data'] },
  q4_e: { keyConcepts: ['Hypothesis', 'If/Then/Because', 'Density of alloys'], keywords: ['if zinc % increases', 'then density decreases', 'zinc lower density than copper', 'hypothesis format'] },
  q4_f: { keyConcepts: ['Graph reading', 'Prediction', 'Interpolation'], keywords: ['1000°C', '80% copper 20% zinc', 'read from graph', 'brass melting point prediction'] },
  q4_g: { keyConcepts: ['Applying data', 'Melting point selection', 'Material properties'], keywords: ['Type A', '1066°C above 1050', 'will not melt', 'space application'] },

  q5_a: { keyConcepts: ['Carbonation', 'Dissolved gases'], keywords: ['carbon dioxide', 'CO₂', 'carbonated drinks', 'dissolved gas'] },
  q5_b: { keyConcepts: ['Variables', 'IV and DV', 'Criterion B'], keywords: ['IV type of solute', 'DV freezing point', 'independent dependent variable', 'investigation'] },
  q5_c: { keyConcepts: ['Control variables', 'Fair test'], keywords: ['volume of solution', 'concentration of solute', 'freezer temperature', 'control variable'] },
  q5_d: { keyConcepts: ['Research question', 'Criterion B'], keywords: ['how does type of solute affect freezing point', 'research question', 'IV to DV format'] },

  q6_a: { keyConcepts: ['Graph plotting', 'Data presentation', 'Criterion C'], keywords: ['Sample B graph', 'data points', 'title temperature vs time', 'axis labels time s temperature °C'] },
  q6_b: { keyConcepts: ['Data interpretation', 'Plateau and melting point', 'Form V'], keywords: ['Sample B Form V', 'plateau at 35°C', 'melting temperature', 'form V identification'] },
  q6_c: { keyConcepts: ['Mean calculation', 'Significant figures', 'Criterion C'], keywords: ['36.7°C', 'average 60% cocoa', '(37+36+37)/3', 'three significant figures'] },
  q6_d: { keyConcepts: ['Graph reading', 'Interpolation'], keywords: ['43°C', '50% cocoa', 'read from graph', 'interpolation melting point'] },
  q6_e: { keyConcepts: ['Anomalous results', 'Experimental error'], keywords: ['outlier 37% cocoa', 'measurement error', 'incorrect sample', 'anomalous data'] },
  q6_f: { keyConcepts: ['Improving investigations', 'Data gaps'], keywords: ['intermediate percentages', '30–60% cocoa', 'improve experiment', 'more data points'] },

  q7_: { keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method', 'Safety'], keywords: ['IV sugar %', 'DV melting point', 'CVs cocoa mass', 'boiling tube water bath', 'three trials average', 'safety burns'] },

  q8_a: { keyConcepts: ['Ionic symbols', 'Lithium ion'], keywords: ['Li⁺', 'lithium ion', 'group 1 loses electron', '+1 charge'] },
  q8_b: { keyConcepts: ['Moles calculation', 'Relative atomic mass'], keywords: ['n = m/Mr', '12000/6.94', '1714.3 mol', 'moles of lithium'] },
  q8_c: { keyConcepts: ['Criterion D', 'Environmental impact', 'Social impact', 'Li batteries vs crude oil'], keywords: ['lithium mining habitat', 'water contamination', 'crude oil CO₂', 'air quality', 'social impacts', 'appraisal'] },

  q9_: { keyConcepts: ['Criterion D', 'Circular economy', 'Linear economy', 'Sustainability'], keywords: ['take-make-dispose linear', 'circular reuse recycle', 'economic impacts', 'resource use', 'social impacts', 'concluding appraisal'] },
}
