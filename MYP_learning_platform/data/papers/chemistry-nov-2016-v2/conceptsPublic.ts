type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2016_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Lewis structures', 'Covalent bonding'], keywords: ['Lewis dot structure', 'methane CH₄', 'propan-1-ol C₃H₇OH', 'bonding pairs', 'lone pairs on O', 'C–H bonds', 'O–H bond'] },
  q1_b: { keyConcepts: ['Organic chemistry', 'Homologous series'], keywords: ['alkane', 'alcohol', 'alkanol', 'methane', 'propan-1-ol', 'functional group', '–OH group'] },
  q1_c: { keyConcepts: ['Calorimetry', 'q = mcΔT'], keywords: ['q = mcΔT', 'specific heat capacity', '4.19 J g⁻¹°C⁻¹', 'energy per gram', '30.0 kJ', '0.896 g', '33.5 kJ g⁻¹'] },
  q1_d: { keyConcepts: ['Combustion', 'Energy comparison'], keywords: ['methane', 'more efficient', 'energy per gram', '55.8 kJ g⁻¹', 'fuel comparison', 'combustion energy'] },

  q2_a: { keyConcepts: ['Physical properties', 'Materials science'], keywords: ['beryllium', 'strength-to-weight', 'low density', 'stiff', 'carbon fibre', 'rigid', 'satellite panel'] },
  q2_b: { keyConcepts: ['Chemical reactivity', 'Metals'], keywords: ['sodium', 'soft', 'reacts violently with water', 'too reactive', 'unsuitable', 'structural material'] },
  q2_c: { keyConcepts: ['Alloys', 'Yield strength'], keywords: ['copper', 'alloy', 'yield strength', 'increases', 'aluminium–copper', 'graph interpretation', 'MPa'] },

  q3_a: { keyConcepts: ['Group 1 elements', 'Periodic table'], keywords: ['Group 1', 'lithium crimson red', 'sodium yellow-orange', 'potassium lilac', 'flame test', 'alkali metals'] },
  q3_b: { keyConcepts: ['Endothermic processes', 'Energy changes'], keywords: ['endothermic', 'absorbs energy', 'heat from flame', 'surroundings', 'excite ions', 'flame test'] },
  q3_c: { keyConcepts: ['Transition metals', 'd-block'], keywords: ['Cu copper', 'transition metal', 'd-block', 'Groups 3–12'] },
  q3_d: { keyConcepts: ['Isotopes', 'Atomic structure'], keywords: ['isotope', 'same element', 'same protons', 'different neutrons', 'different mass number'] },
  q3_e: { keyConcepts: ['Atomic number', 'Mass number', 'Neutrons'], keywords: ['Li-7', 'lithium', 'neutrons = 4', 'mass number − atomic number', '7 − 3'] },

  q4_a: { keyConcepts: ['Kinetic molecular theory', 'Diffusion'], keywords: ['ammonia NH₃', 'hydrogen chloride HCl', 'molar mass', 'lighter particles move faster', 'diffusion', 'white ring'] },
  q4_b: { keyConcepts: ['Kinetic energy', 'Gas pressure'], keywords: ['heating', 'kinetic energy increases', 'particles faster', 'more collisions', 'fixed volume', 'pressure increases', 'car tyre'] },
  q4_c: { keyConcepts: ['Gas pressure', 'Altitude'], keywords: ['crisp bag inflates', 'altitude', 'cabin pressure decreases', 'internal pressure unchanged', 'expands', 'aeroplane'] },

  q5_a: { keyConcepts: ['Criterion B — Inquiry and Design', 'Scientific investigation'], keywords: ['research question', 'hypothesis', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'safety', 'acid resistance', 'pipe metals', 'gas volume'] },
  q5_b: { keyConcepts: ['Data tables', 'Criterion C — Processing'], keywords: ['table design', 'all metals', 'dependent variable', 'units', 'repeats', 'average column'] },

  q6_a: { keyConcepts: ['Electrolytes', 'Ionic conduction'], keywords: ['ions', 'electrolyte', 'salt water', 'Na⁺', 'Cl⁻', 'charged particles', 'brine'] },
  q6_b: { keyConcepts: ['Electrochemical cells', 'Electrolyte function'], keywords: ['no current', 'no ions', 'pure water', 'circuit broken', 'electrolyte essential', 'saltwater battery'] },

  q7_a: { keyConcepts: ['Electrochemical cells', 'Cell potential'], keywords: ['cell potential', 'voltage', 'iron silver cell', '1.239 V', 'electrochemical series', 'simulation'] },
  q7_b: { keyConcepts: ['Hypothesis', 'Reactivity and cell potential'], keywords: ['hypothesis', 'reactivity difference', 'cell potential', 'greater difference', 'higher voltage'] },
  q7_c: { keyConcepts: ['Variables', 'Criterion B'], keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal type', 'cell potential', 'electrode size', 'concentration'] },
  q7_d: { keyConcepts: ['Evaluation', 'Standard conditions'], keywords: ['non-standard conditions', 'concentration', 'temperature', 'dirty electrodes', 'standard electrode potential', 'discrepancy'] },
  q7_e: { keyConcepts: ['Laboratory safety', 'Acid hazards'], keywords: ['eye protection', 'goggles', 'acid', 'safety precaution', 'corrosive'] },
  q7_f: { keyConcepts: ['Oxidation and reduction', 'Electrodes'], keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained', 'OIL RIG'] },
  q7_g: { keyConcepts: ['Electrodeposition', 'Electrode mass'], keywords: ['cathode', 'copper deposited', 'mass increases', 'anode', 'iron dissolves', 'mass decreases', 'electrolysis'] },

  q8_a: { keyConcepts: ['Cell potential', 'Concentration effects'], keywords: ['cell potential increases', 'magnesium sulfate diluted', 'Mg²⁺ concentration'] },
  q8_b: { keyConcepts: ['Colour of solutions', 'Concentration'], keywords: ['paler blue', 'fewer Cu²⁺', 'copper ions', 'blue colour', 'dilution', 'copper sulfate'] },
  q8_c: { keyConcepts: ['Cell potential', 'Copper ion concentration'], keywords: ['cell potential decreases', 'copper sulfate diluted', 'Cu²⁺ concentration'] },
  q8_d: { keyConcepts: ['Ionic equations', 'Redox reactions'], keywords: ['Mg(s)', 'Cu²⁺(aq)', 'Mg²⁺(aq)', 'Cu(s)', 'balanced equation', 'state symbols', 'overall reaction'] },

  q9_a: { keyConcepts: ['Hypothesis', 'Self-discharge'], keywords: ['hypothesis', 'higher temperature', 'lower charge', 'percentage charge', 'storage', 'self-discharge'] },
  q9_b: { keyConcepts: ['Graph selection', 'Continuous variables'], keywords: ['scatter graph', 'xy graph', 'continuous variables', 'temperature', 'percentage charge'] },
  q9_c: { keyConcepts: ['Graph reading', 'Interpolation'], keywords: ['30°C', '75%', 'interpolation', 'within data range', 'graph reading'] },
  q9_d: { keyConcepts: ['Graph reading', 'Extrapolation'], keywords: ['60°C', '38%', 'extrapolation', 'outside data range', 'trend continuation'] },
  q9_e: { keyConcepts: ['Validity', 'Interpolation vs extrapolation'], keywords: ['valid', 'invalid', 'interpolation', 'extrapolation', '30°C within range', '60°C outside range'] },

  q10_a: { keyConcepts: ['Global inequalities', 'Commonwealth Games'], keywords: ['developed nations', 'wealthy', 'Africa', 'infrastructure', 'inequality', 'under-represented'] },
  q10_b: { keyConcepts: ['Bases', 'pH'], keywords: ['H⁺ decreases', 'pH increases', 'alkaline', 'basic', 'sodium hydroxide', 'OH⁻', 'neutralise', 'red mud'] },
  q10_c: { keyConcepts: ['Water quality', 'Ecosystem impacts'], keywords: ['pH change', 'alkaline', 'organisms die', 'caustic', 'biodiversity', 'food chain', 'clarity', 'fish'] },

  q11_: { keyConcepts: ['Criterion D — Reflecting on Impacts', 'Mining and environment'], keywords: ['deforestation', 'Hambach Forest', 'CO₂', 'lignite', 'electricity', 'community impact', 'open pit', 'displacement', 'renewables', 'evaluation'] },

  q12_: { keyConcepts: ['Sustainability', 'Reduce Reuse Recycle'], keywords: ['conserve raw materials', 'energy saving', 'CO₂ reduction', 'glass recycling', 'cullet', 'refill bottles', 'waste reduction', 'reduce reuse recycle'] },
}
