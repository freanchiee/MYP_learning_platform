type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2016_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Lewis structures', 'Covalent bonding'], keywords: ['Lewis dot structure', 'propane C₃H₈', 'methanol CH₃OH', 'bonding pairs', 'lone pairs on O', 'C–O bond', 'O–H bond'] },
  q1_b: { keyConcepts: ['Organic chemistry', 'Homologous series'], keywords: ['alkane', 'alcohol', 'alkanol', 'propane', 'methanol', 'functional group', '–OH group'] },
  q1_c: { keyConcepts: ['Calorimetry', 'q = mcΔT'], keywords: ['q = mcΔT', 'specific heat capacity', '4.19 J g⁻¹°C⁻¹', 'energy per gram', '30.0 kJ', '1.33 g', '22.5 kJ g⁻¹'] },
  q1_d: { keyConcepts: ['Combustion', 'Energy comparison'], keywords: ['propane', 'more efficient', 'energy per gram', '50.8 kJ g⁻¹', 'fuel comparison', 'combustion energy'] },

  q2_a: { keyConcepts: ['Physical properties', 'Materials science'], keywords: ['titanium', 'corrosion resistant', 'passivates', 'carbon fibre', 'strength-to-weight', 'rigid', 'drone frame'] },
  q2_b: { keyConcepts: ['Chemical reactivity', 'Metals'], keywords: ['magnesium', 'reacts with air', 'burns in air', 'reacts with water', 'unsuitable', 'reactive metal'] },
  q2_c: { keyConcepts: ['Alloys', 'Yield strength'], keywords: ['magnesium', 'alloy', 'yield strength', 'increases', 'aluminium–magnesium', 'graph interpretation', 'MPa'] },

  q3_a: { keyConcepts: ['Group 2 elements', 'Periodic table'], keywords: ['Group 2', 'calcium orange-red', 'strontium bright red', 'barium apple green', 'flame test', 'alkaline earth metals'] },
  q3_b: { keyConcepts: ['Exothermic reactions', 'Energy changes'], keywords: ['exothermic', 'heat released', 'distress flare', 'energy to surroundings', 'combustion', 'light'] },
  q3_c: { keyConcepts: ['Transition metals', 'd-block'], keywords: ['Cu copper', 'Mn manganese', 'transition metal', 'd-block', 'Groups 3–12'] },
  q3_d: { keyConcepts: ['Isotopes', 'Atomic structure'], keywords: ['isotope', 'same element', 'same protons', 'different neutrons', 'different mass number'] },
  q3_e: { keyConcepts: ['Atomic number', 'Mass number', 'Neutrons'], keywords: ['Sr-90', 'strontium', 'neutrons = 52', 'mass number − atomic number', '90 − 38'] },

  q4_a: { keyConcepts: ['Kinetic molecular theory', 'Diffusion'], keywords: ['helium', 'air N₂ O₂', 'molar mass', 'speed', 'diffusion', 'membrane', 'lighter particles move faster'] },
  q4_b: { keyConcepts: ['Gas pressure', 'Altitude'], keywords: ['weather balloon', 'external pressure decreases', 'altitude', 'particles push outward', 'larger volume', 'expands'] },
  q4_c: { keyConcepts: ['Gas pressure', 'Pressure and volume'], keywords: ['scuba tank', 'high pressure', 'volume increases', 'expands', 'atmospheric pressure', 'inverse relationship'] },

  q5_a: { keyConcepts: ['Criterion B — Inquiry and Design', 'Scientific investigation'], keywords: ['research question', 'hypothesis', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'safety', 'acid resistance', 'roofing metals', 'mass lost'] },
  q5_b: { keyConcepts: ['Data tables', 'Criterion C — Processing'], keywords: ['table design', 'all metals', 'dependent variable', 'units', 'repeats', 'average column'] },

  q6_a: { keyConcepts: ['Electrolytes', 'Ionic conduction'], keywords: ['ions', 'electrolyte', 'lemon juice', 'charged particles', 'electric current', 'acidic'] },
  q6_b: { keyConcepts: ['Electrochemical cells', 'Electrolyte function'], keywords: ['no current', 'ions cannot move', 'circuit broken', 'electrolyte essential', 'fruit battery', 'dry cork'] },

  q7_a: { keyConcepts: ['Electrochemical cells', 'Cell potential'], keywords: ['cell potential', 'voltage', 'zinc copper cell', '1.100 V', 'electrochemical series', 'simulation'] },
  q7_b: { keyConcepts: ['Hypothesis', 'Reactivity and cell potential'], keywords: ['hypothesis', 'reactivity difference', 'cell potential', 'greater difference', 'higher voltage'] },
  q7_c: { keyConcepts: ['Variables', 'Criterion B'], keywords: ['independent variable', 'dependent variable', 'controlled variable', 'metal type', 'cell potential', 'electrode size', 'concentration'] },
  q7_d: { keyConcepts: ['Evaluation', 'Standard conditions'], keywords: ['non-standard conditions', 'concentration', 'temperature', 'dirty electrodes', 'standard electrode potential', 'discrepancy'] },
  q7_e: { keyConcepts: ['Laboratory safety', 'Acid hazards'], keywords: ['eye protection', 'goggles', 'acid', 'safety precaution', 'corrosive'] },
  q7_f: { keyConcepts: ['Oxidation and reduction', 'Electrodes'], keywords: ['anode', 'oxidation', 'electrons lost', 'cathode', 'reduction', 'electrons gained', 'OIL RIG'] },
  q7_g: { keyConcepts: ['Electrodeposition', 'Electrode mass'], keywords: ['cathode', 'copper deposited', 'mass increases', 'anode', 'zinc dissolves', 'mass decreases', 'electrolysis'] },

  q8_a: { keyConcepts: ['Cell potential', 'Concentration effects'], keywords: ['cell potential increases', 'zinc sulfate diluted', 'Zn²⁺ concentration', 'Daniell cell'] },
  q8_b: { keyConcepts: ['Colour of solutions', 'Concentration'], keywords: ['paler blue', 'fewer Cu²⁺', 'copper ions', 'blue colour', 'dilution', 'copper sulfate'] },
  q8_c: { keyConcepts: ['Cell potential', 'Copper ion concentration'], keywords: ['cell potential decreases', 'copper sulfate diluted', 'Cu²⁺ concentration'] },
  q8_d: { keyConcepts: ['Ionic equations', 'Redox reactions'], keywords: ['Zn(s)', 'Cu²⁺(aq)', 'Zn²⁺(aq)', 'Cu(s)', 'balanced equation', 'state symbols', 'overall reaction'] },

  q9_a: { keyConcepts: ['Hypothesis', 'Battery degradation'], keywords: ['hypothesis', 'higher temperature', 'lower capacity', 'percentage capacity', 'charging', 'cycle life'] },
  q9_b: { keyConcepts: ['Graph selection', 'Continuous variables'], keywords: ['scatter graph', 'xy graph', 'continuous variables', 'temperature', 'percentage capacity'] },
  q9_c: { keyConcepts: ['Graph reading', 'Interpolation'], keywords: ['30°C', '84%', 'interpolation', 'within data range', 'graph reading'] },
  q9_d: { keyConcepts: ['Graph reading', 'Extrapolation'], keywords: ['60°C', '55%', 'extrapolation', 'outside data range', 'trend continuation'] },
  q9_e: { keyConcepts: ['Validity', 'Interpolation vs extrapolation'], keywords: ['valid', 'invalid', 'interpolation', 'extrapolation', '30°C within range', '60°C outside range'] },

  q10_a: { keyConcepts: ['Global inequalities', 'World Cup hosting'], keywords: ['developed nations', 'wealthy', 'Southern hemisphere', 'Africa', 'Oceania', 'inequality', 'under-represented'] },
  q10_b: { keyConcepts: ['Acids', 'pH'], keywords: ['H⁺ increases', 'pH decreases', 'sulfuric acid', 'acidic', 'releases H⁺', 'acid mine drainage'] },
  q10_c: { keyConcepts: ['Water quality', 'Ecosystem impacts'], keywords: ['pH change', 'organisms die', 'toxic metals', 'biodiversity', 'food chain', 'oxygen', 'fish'] },

  q11_: { keyConcepts: ['Criterion D — Reflecting on Impacts', 'Mining and environment'], keywords: ['water use', 'desert', 'SO₂', 'smelting', 'economic development', 'community impact', 'open pit', 'Chuquicamata', 'Atacama', 'copper', 'evaluation'] },

  q12_: { keyConcepts: ['Sustainability', 'Reduce Reuse Recycle'], keywords: ['conserve bauxite', '95% energy saving', 'CO₂ reduction', 'aluminium recycling', 'remelting', 'waste reduction', 'reduce reuse recycle'] },
}
