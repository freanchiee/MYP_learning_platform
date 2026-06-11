type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2016: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Lewis structures', 'Covalent bonding'], keywords: ['Lewis dot structure', 'butane C₄H₁₀', 'ethanol C₂H₅OH', 'bonding pairs', 'lone pairs', 'organic molecules'] },
  q1_b: { keyConcepts: ['Organic chemistry', 'Homologous series'], keywords: ['alkane', 'alcohol', 'alkanol', 'homologous series', 'functional group', 'butane', 'ethanol'] },
  q1_c: { keyConcepts: ['Calorimetry', 'q = mcΔT'], keywords: ['q = mcΔT', 'specific heat capacity', '4.19 J g⁻¹°C⁻¹', 'mass of fuel', '30.0 kJ', '4.92 g', 'energy per gram'] },
  q1_d: { keyConcepts: ['Combustion', 'Energy comparison'], keywords: ['butane', 'more efficient', 'energy per gram', 'fuel comparison', 'combustion energy'] },

  q2_a: { keyConcepts: ['Physical properties', 'Materials science'], keywords: ['aluminium', 'malleable', 'corrosion resistant', 'carbon fibre', 'strength-to-weight', 'rigid', 'bicycle frame'] },
  q2_b: { keyConcepts: ['Chemical reactivity', 'Metals'], keywords: ['scandium', 'reacts with air', 'reacts with water', 'unsuitable', 'reactive metal'] },
  q2_c: { keyConcepts: ['Alloys', 'Yield strength'], keywords: ['scandium', 'alloy', 'yield strength', 'increases', 'aluminium–scandium', 'graph interpretation'] },

  q3_a: { keyConcepts: ['Group 2 elements', 'Periodic table'], keywords: ['Group 2', 'calcium orange-red', 'strontium bright red', 'barium green', 'fireworks', 'alkaline earth metals'] },
  q3_b: { keyConcepts: ['Exothermic reactions', 'Energy changes'], keywords: ['exothermic', 'heat released', 'fireworks', 'energy to surroundings', 'combustion'] },
  q3_c: { keyConcepts: ['Transition metals', 'd-block'], keywords: ['Cu copper', 'Fe iron', 'transition metal', 'd-block', 'Groups 3–12'] },
  q3_d: { keyConcepts: ['Isotopes', 'Atomic structure'], keywords: ['isotope', 'same element', 'same protons', 'different neutrons', 'different mass number'] },
  q3_e: { keyConcepts: ['Atomic number', 'Mass number', 'Neutrons'], keywords: ['Mg-24', 'magnesium', 'neutrons = 12', 'mass number − atomic number', '24 − 12'] },

  q4_a: { keyConcepts: ['Kinetic molecular theory', 'Diffusion'], keywords: ['helium', 'air N₂ O₂', 'molar mass', 'speed', 'diffusion', 'membrane', 'lighter particles move faster'] },
  q4_b: { keyConcepts: ['Kinetic energy', 'Gas density'], keywords: ['kinetic energy', 'temperature increase', 'volume expands', 'same mass', 'lower density', 'balloon rises'] },
  q4_c: { keyConcepts: ['Gas pressure', 'Altitude'], keywords: ['bag inflates', 'altitude', 'external pressure decreases', 'internal pressure unchanged', 'expands'] },

  q5_a: { keyConcepts: ['Criterion B — Inquiry and Design', 'Scientific investigation'], keywords: ['research question', 'hypothesis', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'safety', 'acid resistance', 'metals'] },
  q5_b: { keyConcepts: ['Data tables', 'Criterion C — Processing'], keywords: ['table design', 'all metals', 'dependent variable', 'units', 'repeats', 'average column'] },

  q6_a: { keyConcepts: ['Electrolytes', 'Ionic conduction'], keywords: ['ions', 'electrolyte', 'saltwater', 'charged particles', 'electric current'] },
  q6_b: { keyConcepts: ['Electrochemical cells', 'Electrolyte function'], keywords: ['no current', 'ions cannot move', 'circuit broken', 'electrolyte essential', 'Volta battery'] },

  q7_a: { keyConcepts: ['Electrochemical cells', 'Cell potential'], keywords: ['cell potential', 'voltage', 'magnesium zinc cell', '1.607 V', 'electrochemical series', 'simulation'] },
  q7_b: { keyConcepts: ['Hypothesis', 'Reactivity and cell potential'], keywords: ['hypothesis', 'reactivity difference', 'cell potential', 'greater difference', 'higher voltage'] },
  q7_c: { keyConcepts: ['Variables', 'Criterion B'], keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal type', 'cell potential', 'electrode size', 'concentration'] },
  q7_d: { keyConcepts: ['Evaluation', 'Standard conditions'], keywords: ['non-standard conditions', 'concentration', 'temperature', 'dirty electrodes', 'standard electrode potential', 'discrepancy'] },
  q7_e: { keyConcepts: ['Laboratory safety', 'Acid hazards'], keywords: ['eye protection', 'goggles', 'acid', 'safety precaution', 'corrosive'] },
  q7_f: { keyConcepts: ['Oxidation and reduction', 'Electrodes'], keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained', 'OIL RIG'] },
  q7_g: { keyConcepts: ['Electrodeposition', 'Electrode mass'], keywords: ['cathode', 'silver deposited', 'mass increases', 'anode', 'copper dissolves', 'mass decreases', 'electrolysis'] },

  q8_a: { keyConcepts: ['Cell potential', 'Concentration effects'], keywords: ['cell potential increases', 'copper sulfate diluted', 'Cu²⁺ concentration'] },
  q8_b: { keyConcepts: ['Colour of solutions', 'Concentration'], keywords: ['paler blue', 'fewer Cu²⁺', 'copper ions', 'blue colour', 'dilution'] },
  q8_c: { keyConcepts: ['Cell potential', 'Silver ion concentration'], keywords: ['cell potential decreases', 'silver nitrate diluted', 'Ag⁺ concentration'] },
  q8_d: { keyConcepts: ['Ionic equations', 'Redox reactions'], keywords: ['Cu(s)', '2Ag⁺(aq)', '2Ag(s)', 'Cu²⁺(aq)', 'balanced equation', 'state symbols', 'overall reaction'] },

  q9_a: { keyConcepts: ['Hypothesis', 'Lithium battery'], keywords: ['hypothesis', 'lower temperature', 'charge maintained', 'percentage charge', 'storage'] },
  q9_b: { keyConcepts: ['Graph selection', 'Continuous variables'], keywords: ['scatter graph', 'xy graph', 'continuous variables', 'temperature', 'percentage charge'] },
  q9_c: { keyConcepts: ['Graph reading', 'Interpolation'], keywords: ['50°C', '70%', 'interpolation', 'within data range', 'scatter graph reading'] },
  q9_d: { keyConcepts: ['Graph reading', 'Extrapolation'], keywords: ['80°C', '30%', 'extrapolation', 'outside data range', 'trend continuation'] },
  q9_e: { keyConcepts: ['Validity', 'Interpolation vs extrapolation'], keywords: ['valid', 'invalid', 'interpolation', 'extrapolation', '50°C within range', '80°C outside range'] },

  q10_a: { keyConcepts: ['Global inequalities', 'Olympic Games'], keywords: ['LEDC', 'economically developed', 'Southern hemisphere', 'political instability', 'wealthy nations', 'inequality'] },
  q10_b: { keyConcepts: ['Basic oxides', 'pH'], keywords: ['H⁺ decreases', 'pH increases', 'iron oxide basic', 'alkaline', 'neutralise', 'hydroxide'] },
  q10_c: { keyConcepts: ['Water quality', 'Ecosystem impacts'], keywords: ['pH change', 'organisms die', 'photosynthesis', 'less light', 'oxygen', 'fish', 'turbidity', 'clarity'] },

  q11_: { keyConcepts: ['Criterion D — Reflecting on Impacts', 'Mining and environment'], keywords: ['deforestation', 'economic development', 'community impact', 'industrial process', 'roads', 'noise', 'dust', 'power', 'Carajás', 'Amazon', 'iron ore', 'evaluation'] },

  q12_: { keyConcepts: ['Sustainability', 'Reduce Reuse Recycle'], keywords: ['conserve resources', 'CO₂ reduction', 'scrap steel recycling', 'waste reduction', 'habitat', 'steelmaking sustainability'] },
}
