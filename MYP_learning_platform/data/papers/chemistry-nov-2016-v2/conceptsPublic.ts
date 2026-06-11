type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2016_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Lewis structures', 'Covalent bonding'], keywords: ['Lewis dot structure', 'hexane C₆H₁₄', 'propan-1-ol C₃H₇OH', 'bonding pairs', 'lone pairs on O', 'C–C bonds', 'O–H bond'] },
  q1_b: { keyConcepts: ['Organic chemistry', 'Homologous series'], keywords: ['alkane', 'alcohol', 'alkanol', 'hexane', 'propan-1-ol', 'functional group', '–OH group'] },
  q1_c: { keyConcepts: ['Calorimetry', 'q = mcΔT'], keywords: ['q = mcΔT', '4.19 J g⁻¹°C⁻¹', '10.0 kJ/g', 'propanol', '3.00 g', 'energy per gram', '30.0 kJ'] },
  q1_d: { keyConcepts: ['Combustion', 'Fuel efficiency'], keywords: ['hexane', 'propan-1-ol', 'more efficient', 'energy per gram', 'laboratory fuel', 'comparison'] },

  q2_a: { keyConcepts: ['Physical properties', 'Materials science'], keywords: ['titanium', 'lightweight', 'corrosion resistant', 'carbon fibre', 'strength-to-weight', 'rigid', 'satellite component'] },
  q2_b: { keyConcepts: ['Material properties', 'Processing'], keywords: ['molybdenum', 'high melting point', 'brittle', 'difficult to process', 'dense', 'unsuitable satellite material'] },
  q2_c: { keyConcepts: ['Alloys', 'Yield strength'], keywords: ['molybdenum', 'Ti-Mo alloy', 'yield strength increases', 'alloy strengthening', 'graph interpretation'] },

  q3_a: { keyConcepts: ['Group 1 elements', 'Periodic table'], keywords: ['Group 1 alkali metals', 'lithium crimson', 'sodium yellow', 'potassium lilac', 'Diwali fireworks'] },
  q3_b: { keyConcepts: ['Exothermic reactions'], keywords: ['exothermic', 'heat released', 'light energy', 'fireworks combustion', 'Diwali'] },
  q3_c: { keyConcepts: ['Transition metals', 'd-block'], keywords: ['Cu copper', 'Mn manganese', 'transition metal', 'd-block', 'Groups 3–12'] },
  q3_d: { keyConcepts: ['Isotopes', 'Atomic structure'], keywords: ['isotope', 'same element', 'same proton number', 'different neutrons', 'different mass number'] },
  q3_e: { keyConcepts: ['Neutrons', 'Mass number'], keywords: ['neon-20', 'Ne', '10 neutrons', '20 − 10', 'mass number minus atomic number'] },

  q4_a: { keyConcepts: ['Kinetic theory', 'Diffusion', 'Molar mass'], keywords: ['neon Ne 20 g/mol', 'argon Ar 40 g/mol', 'Ne lighter', 'Ne faster', 'diffuses faster', 'membrane', 'noble gas balloons'] },
  q4_b: { keyConcepts: ['Kinetic energy', 'Gas density', 'Buoyancy'], keywords: ['KE increases', 'larger volume', 'same mass', 'lower density', 'hot air rises', 'balloon'] },
  q4_c: { keyConcepts: ['Gas pressure', 'Altitude'], keywords: ['cling film bulges', 'altitude', 'external pressure decreases', 'internal pressure unchanged', 'outward force'] },

  q5_a: { keyConcepts: ['Criterion B — Inquiry and Design'], keywords: ['research question', 'hypothesis', 'IV DV CV', 'method steps', 'citric acid', 'pipeline metals', 'corrosion resistance', 'safety'] },
  q5_b: { keyConcepts: ['Data tables', 'Criterion C'], keywords: ['table design', 'all metals', 'units', 'repeats', 'average', 'DV column'] },

  q6_a: { keyConcepts: ['Electrolytes', 'Ionic conduction'], keywords: ['ions', 'KOH', 'K⁺', 'OH⁻', 'potassium hydroxide electrolyte', 'zinc-air battery', 'charged particles'] },
  q6_b: { keyConcepts: ['Electrolyte function', 'Pure water'], keywords: ['no current', 'pure water no ions', 'circuit fails', 'autoionisation', 'negligible current', 'zinc-air battery'] },

  q7_a: { keyConcepts: ['Electrochemical cells', 'Cell potential'], keywords: ['Fe anode', 'Cu cathode', 'cell potential 0.780 V', 'E° = +0.34 − (−0.44)', 'electrochemical series'] },
  q7_b: { keyConcepts: ['Hypothesis', 'Reactivity'], keywords: ['hypothesis', 'reactivity difference', 'cell potential', 'higher voltage', 'Fe simulation'] },
  q7_c: { keyConcepts: ['Variables', 'Criterion B'], keywords: ['IV cathode metal', 'DV cell potential', 'CV electrode size', 'CV concentration', 'Fe always anode'] },
  q7_d: { keyConcepts: ['Evaluation', 'Standard electrode potential'], keywords: ['non-standard conditions', 'temperature', 'concentration', 'corroded electrodes', 'standard conditions'] },
  q7_e: { keyConcepts: ['Laboratory safety'], keywords: ['goggles', 'acid', 'eye protection', 'wash hands', 'corrosive'] },
  q7_f: { keyConcepts: ['Oxidation and reduction', 'Electrodes'], keywords: ['anode oxidation', 'electrons lost', 'cathode reduction', 'electrons gained', 'OIL RIG'] },
  q7_g: { keyConcepts: ['Electrodeposition', 'Electrode mass'], keywords: ['Ag deposited cathode', 'mass increases', 'Ni anode dissolves', 'mass decreases', 'Ni oxidised', 'Ag⁺ reduced'] },

  q8_a: { keyConcepts: ['Cell potential', 'Concentration'], keywords: ['cell potential increases', 'NiSO₄ diluted', 'Ni²⁺ concentration decreases'] },
  q8_b: { keyConcepts: ['Colour of solutions', 'Dilution'], keywords: ['paler green', 'fewer Ni²⁺', 'nickel(II) ions', 'green colour', 'diluted nickel sulfate'] },
  q8_c: { keyConcepts: ['Cell potential', 'Ag⁺ concentration'], keywords: ['cell potential decreases', 'AgNO₃ diluted', 'Ag⁺ decreases'] },
  q8_d: { keyConcepts: ['Ionic equations', 'Redox'], keywords: ['Ni(s)', '2Ag⁺(aq)', '2Ag(s)', 'Ni²⁺(aq)', 'balanced equation', 'state symbols', 'nickel-silver cell'] },

  q9_a: { keyConcepts: ['Hypothesis', 'Alkaline battery'], keywords: ['lower temperature', 'more charge retained', 'alkaline battery', 'hypothesis'] },
  q9_b: { keyConcepts: ['Graph selection', 'Continuous variables'], keywords: ['scatter graph', 'xy graph', 'temperature', 'percentage charge', 'continuous variables'] },
  q9_c: { keyConcepts: ['Interpolation', 'Graph reading'], keywords: ['45°C', '75%', 'interpolation', 'within data range', 'alkaline battery'] },
  q9_d: { keyConcepts: ['Extrapolation', 'Graph reading'], keywords: ['85°C', '25%', 'extrapolation', 'beyond data range'] },
  q9_e: { keyConcepts: ['Validity', 'Interpolation vs extrapolation'], keywords: ['45°C valid interpolation', '85°C less valid extrapolation', 'data range', 'validity comparison'] },

  q10_a: { keyConcepts: ['Global inequalities'], keywords: ['LEDC', 'wealthy nations', 'political instability', 'Southern hemisphere', 'Olympic Games inequality'] },
  q10_b: { keyConcepts: ['Basic oxides', 'pH'], keywords: ['CuO basic oxide', 'H⁺ decreases', 'pH increases', 'OH⁻ neutralises H⁺', 'copper oxide', 'Tokyo Bay'] },
  q10_c: { keyConcepts: ['Water quality', 'Ecological impacts'], keywords: ['Cu²⁺ toxic', 'pH change', 'reduced photosynthesis', 'less O₂', 'fish affected', 'Tokyo Bay pollution'] },

  q11_: { keyConcepts: ['Criterion D', 'Mining impacts'], keywords: ['nickel mining', 'Sulawesi Indonesia', 'rainforest deforestation', 'EV battery supply', 'economic development', 'river pollution', 'SO₂', 'evaluation'] },

  q12_: { keyConcepts: ['Sustainability', 'Reduce Reuse Recycle'], keywords: ['copper recycling', 'copper ore', 'energy saving', 'CO₂ reduction', 'acid mine drainage', 'habitat destruction', 'finite resources'] },
}
