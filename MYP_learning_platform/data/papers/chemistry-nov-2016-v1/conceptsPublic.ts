type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2016_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Lewis structures', 'Covalent bonding'], keywords: ['Lewis dot structure', 'propane C₃H₈', 'methanol CH₃OH', 'bonding pairs', 'lone pairs on O', 'C–O bond', 'O–H bond'] },
  q1_b: { keyConcepts: ['Organic chemistry', 'Homologous series'], keywords: ['alkane', 'alcohol', 'alkanol', 'propane', 'methanol', 'functional group', '–OH group'] },
  q1_c: { keyConcepts: ['Calorimetry', 'q = mcΔT'], keywords: ['q = mcΔT', '4.19 J g⁻¹°C⁻¹', '7.50 kJ/g', 'methanol', '4.00 g', 'energy per gram', '30.0 kJ'] },
  q1_d: { keyConcepts: ['Combustion', 'Fuel efficiency'], keywords: ['propane', 'methanol', 'more efficient', 'energy per gram', 'camping fuel', 'comparison'] },

  q2_a: { keyConcepts: ['Physical properties', 'Materials science'], keywords: ['aluminium', 'malleable', 'corrosion resistant', 'carbon fibre', 'strength-to-weight', 'rigid', 'bicycle frame', 'lightweight'] },
  q2_b: { keyConcepts: ['Chemical reactivity', 'Metal suitability'], keywords: ['vanadium', 'brittle oxide', 'corrodes', 'reacts with moisture', 'unsuitable frame material'] },
  q2_c: { keyConcepts: ['Alloys', 'Yield strength'], keywords: ['vanadium', 'Al-V alloy', 'yield strength increases', 'alloy strengthening', 'graph interpretation'] },

  q3_a: { keyConcepts: ['Group 1 elements', 'Periodic table'], keywords: ['Group 1 alkali metals', 'potassium lilac', 'rubidium red-violet', 'caesium blue-violet', 'Chinese New Year fireworks'] },
  q3_b: { keyConcepts: ['Exothermic reactions'], keywords: ['exothermic', 'heat released', 'light energy', 'fireworks combustion'] },
  q3_c: { keyConcepts: ['Transition metals', 'd-block'], keywords: ['Cu copper', 'Fe iron', 'transition metal', 'd-block', 'Groups 3–12'] },
  q3_d: { keyConcepts: ['Isotopes', 'Atomic structure'], keywords: ['isotope', 'same element', 'same proton number', 'different neutrons', 'different mass number'] },
  q3_e: { keyConcepts: ['Neutrons', 'Mass number'], keywords: ['calcium-40', 'Ca', '20 neutrons', '40 − 20', 'mass number minus atomic number'] },

  q4_a: { keyConcepts: ['Kinetic theory', 'Diffusion', 'Molar mass'], keywords: ['hydrogen H₂', 'molar mass 2', 'N₂ O₂', 'air heavier', 'faster diffusion', 'membrane', 'weather balloon deflates'] },
  q4_b: { keyConcepts: ['Kinetic energy', 'Gas density', 'Buoyancy'], keywords: ['KE increases', 'larger volume', 'same mass', 'lower density', 'hot air rises', 'balloon'] },
  q4_c: { keyConcepts: ['Gas pressure', 'Altitude'], keywords: ['IV bag inflates', 'altitude', 'external pressure decreases', 'internal pressure unchanged', 'expands'] },

  q5_a: { keyConcepts: ['Criterion B — Inquiry and Design'], keywords: ['research question', 'hypothesis', 'IV DV CV', 'method steps', 'HCl hydrochloric acid', 'metals', 'corrosion resistance', 'safety goggles'] },
  q5_b: { keyConcepts: ['Data tables', 'Criterion C'], keywords: ['table design', 'all metals', 'units', 'repeats', 'average', 'DV column'] },

  q6_a: { keyConcepts: ['Electrolytes', 'Ionic conduction'], keywords: ['ions', 'citric acid', 'lemon electrolyte', 'charged particles', 'galvanic cell'] },
  q6_b: { keyConcepts: ['Electrolyte function', 'Circuit'], keywords: ['no current', 'rubber no electrolyte', 'ions cannot move', 'circuit broken', 'lemon battery'] },

  q7_a: { keyConcepts: ['Electrochemical cells', 'Cell potential'], keywords: ['Zn anode', 'Ag cathode', 'cell potential 1.560 V', 'electrochemical series', 'simulation'] },
  q7_b: { keyConcepts: ['Hypothesis', 'Reactivity'], keywords: ['hypothesis', 'reactivity difference', 'cell potential', 'higher voltage', 'Zn simulation'] },
  q7_c: { keyConcepts: ['Variables', 'Criterion B'], keywords: ['IV cathode metal', 'DV cell potential', 'CV electrode size', 'CV concentration', 'CV temperature'] },
  q7_d: { keyConcepts: ['Evaluation', 'Standard electrode potential'], keywords: ['non-standard conditions', 'concentration', 'temperature', 'corroded electrodes', 'discrepancy'] },
  q7_e: { keyConcepts: ['Laboratory safety'], keywords: ['goggles', 'acid', 'wash hands', 'corrosive', 'safety precaution'] },
  q7_f: { keyConcepts: ['Oxidation and reduction', 'Electrodes'], keywords: ['anode oxidation', 'electrons lost', 'cathode reduction', 'electrons gained', 'OIL RIG'] },
  q7_g: { keyConcepts: ['Electrodeposition', 'Electrode mass'], keywords: ['Cu deposited cathode', 'mass increases', 'Fe anode dissolves', 'mass decreases', 'Fe oxidised', 'Cu²⁺ reduced'] },

  q8_a: { keyConcepts: ['Cell potential', 'Concentration'], keywords: ['cell potential increases', 'FeSO₄ diluted', 'Fe²⁺ concentration decreases'] },
  q8_b: { keyConcepts: ['Colour of solutions', 'Dilution'], keywords: ['paler green', 'fewer Fe²⁺', 'iron(II) ions', 'pale green colour', 'diluted iron sulfate'] },
  q8_c: { keyConcepts: ['Cell potential', 'Ag⁺ concentration'], keywords: ['cell potential decreases', 'AgNO₃ diluted', 'Ag⁺ decreases'] },
  q8_d: { keyConcepts: ['Ionic equations', 'Redox'], keywords: ['Fe(s)', '2Ag⁺(aq)', '2Ag(s)', 'Fe²⁺(aq)', 'balanced equation', 'state symbols', 'iron-silver cell'] },

  q9_a: { keyConcepts: ['Hypothesis', 'NiMH battery'], keywords: ['lower temperature', 'more charge retained', 'NiMH battery', 'hypothesis'] },
  q9_b: { keyConcepts: ['Graph selection', 'Continuous variables'], keywords: ['scatter graph', 'xy graph', 'temperature', 'percentage charge', 'continuous variables'] },
  q9_c: { keyConcepts: ['Interpolation', 'Graph reading'], keywords: ['40°C', '85%', 'interpolation', 'within data range', 'NiMH battery'] },
  q9_d: { keyConcepts: ['Extrapolation', 'Graph reading'], keywords: ['90°C', '10%', 'extrapolation', 'beyond data range'] },
  q9_e: { keyConcepts: ['Validity', 'Interpolation vs extrapolation'], keywords: ['40°C valid interpolation', '90°C less valid extrapolation', 'data range', 'validity comparison'] },

  q10_a: { keyConcepts: ['Global inequalities'], keywords: ['LEDC', 'wealthy nations', 'political instability', 'Southern hemisphere', 'Olympic Games inequality'] },
  q10_b: { keyConcepts: ['Basic oxides', 'pH'], keywords: ['ZnO basic oxide', 'H⁺ decreases', 'pH increases', 'OH⁻ neutralises H⁺', 'Seine river'] },
  q10_c: { keyConcepts: ['Water quality', 'Ecological impacts'], keywords: ['pH change harms organisms', 'turbidity reduces photosynthesis', 'less O₂', 'fish affected', 'Seine pollution'] },

  q11_: { keyConcepts: ['Criterion D', 'Mining impacts'], keywords: ['copper mining', 'Atacama Desert', 'water scarcity', 'economic development', 'dust pollution', 'copper tailings', 'indigenous community', 'evaluation'] },

  q12_: { keyConcepts: ['Sustainability', 'Reduce Reuse Recycle'], keywords: ['aluminium recycling', 'bauxite', 'energy saving 95%', 'CO₂ reduction', 'habitat destruction', 'finite resources'] },
}
