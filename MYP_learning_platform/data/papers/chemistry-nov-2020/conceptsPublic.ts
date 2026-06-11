type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2020: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Physical changes', 'States of matter'], keywords: ['solidification', 'lava cools', 'liquid to solid', 'physical process'] },
  q1_b: { keyConcepts: ['Naming compounds', 'Chemical formulae'], keywords: ['silicon dioxide SiO₂', 'magnesium oxide MgO', 'oxide names', 'IUPAC'] },
  q1_c: { keyConcepts: ['Classification of rocks', 'SiO₂ content'], keywords: ['basaltic 45.6–55.2%', 'Kilauea 49.7%', 'lava type', 'rock classification'] },
  q1_d: { keyConcepts: ['Percentage by mass', 'Calculation'], keywords: ['1.16/2.00×100', '58.0%', 'SiO₂ percentage', 'Vesuvius'] },
  q1_e: { keyConcepts: ['Classification of rocks', 'ECF'], keywords: ['andesitic 52.0–63.7%', 'Vesuvius 58.0%', 'rock type', 'ECF from d'] },

  q2_a: { keyConcepts: ['Acids from non-metal oxides', 'pH'], keywords: ['SO₂ dissolves water', 'forms acid', 'low pH 0.1', 'volcanic crater lake'] },
  q2_b: { keyConcepts: ['Lewis dot structures', 'Covalent bonding'], keywords: ['H₂S Lewis structure', 'lone pairs on S', 'bonding pairs', 'dot cross diagram'] },
  q2_c: { keyConcepts: ['Periodic table', 'Periods'], keywords: ['argon period 3', 'noble gas', 'group 18', 'periodic table position'] },
  q2_d: { keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'], keywords: ['²²Ne protons 10', 'neutrons 12', 'electrons 10', 'mass number atomic number'] },
  q2_e: { keyConcepts: ['Electron configuration', 'Electron shells'], keywords: ['neon 2.8', 'inner shell 2', 'outer shell 8', 'electron arrangement'] },

  q3_a: { keyConcepts: ['Organic chemistry', 'Alkenes'], keywords: ['alkene', 'C=C double bond', 'ethene propene', 'functional group'] },
  q3_b: { keyConcepts: ['Alkene nomenclature', 'IUPAC names'], keywords: ['ethene', 'propene', 'two carbons three carbons', 'alkene naming'] },
  q3_c: { keyConcepts: ['Cracking hydrocarbons', 'Conservation of atoms'], keywords: ['C₅H₁₂', 'decane C₁₀H₂₂', 'cracking', 'molecular formula balance'] },
  q3_d: { keyConcepts: ['Neutralisation', 'Air pollution'], keywords: ['Ca(OH)₂ neutralises', 'acidic gases', 'HCl SO₂', 'incineration gases'] },
  q3_e: { keyConcepts: ['Physical changes', 'Boiling'], keywords: ['boiling', 'liquid to gas', 'water to steam', 'thermovaporization stage 2 3'] },
  q3_f: { keyConcepts: ['Environmental regulations', 'Incineration'], keywords: ['hazardous materials', 'emissions controlled', 'environmental regulation', 'plastic incineration'] },
  q3_g: { keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Graph interpretation'], keywords: ['A < C < B particle size', 'surface area', 'faster biodegradation', 'smaller particles'] },

  q4_a: { keyConcepts: ['Catalysts', 'Activation energy'], keywords: ['speeds up reaction', 'lowers activation energy', 'not used up', 'chemiluminescence catalyst'] },
  q4_b: { keyConcepts: ['Functional groups', 'Esters'], keywords: ['ester functional group', 'phenyl oxalate', 'C=O with O–C', 'organic compound'] },
  q4_c: { keyConcepts: ['Reading instruments', 'Temperature measurement'], keywords: ['65°C', 'thermometer reading', 'temperature measurement', 'glow stick experiment'] },
  q4_d: { keyConcepts: ['Variables', 'Fair test', 'Criterion B'], keywords: ['IV temperature', 'DV glow time', 'CV type glow stick', 'CV volume water'] },
  q4_e: { keyConcepts: ['Hypothesis', 'If–then–because', 'Criterion B'], keywords: ['if temperature increases', 'then glow time decreases', 'because rate increases', 'hypothesis formulation'] },
  q4_f: { keyConcepts: ['Graph reading', 'Interpolation', 'Criterion C'], keywords: ['330 minutes', '15°C interpolation', 'reading from curve', 'glow stick graph'] },
  q4_g: { keyConcepts: ['Rate of reaction', 'Calculation', 'Units'], keywords: ['rate = molecules/time', '6.58×10⁵/260', '2530 molecules/min', '42.2 molecules/s'] },

  q5_a: { keyConcepts: ['Data interpretation', 'Effectiveness'], keywords: ['Aurum most effective', '10% beads changed', 'fewest beads', 'best UV block'] },
  q5_b: { keyConcepts: ['Electromagnetic spectrum', 'Modelling limitations'], keywords: ['sunlight all wavelengths', 'UV lamp narrow band', 'UVA only', 'not good model'] },
  q5_c: { keyConcepts: ['Criterion B', 'Investigation design', 'Sunscreen ingredients'], keywords: ['IV ingredient', 'DV beads changed', 'CVs concentration time', 'Crit B design UV beads'] },

  q6_a: { keyConcepts: ['Data analysis', 'Research question'], keywords: ['compare beads changed', 'TiO₂ fewest', 'research question supported', 'titanium dioxide best'] },
  q6_b: { keyConcepts: ['Extending investigations', 'Experimental design'], keywords: ['different concentrations', 'combinations ingredients', 'sunlight exposure', 'extension investigation'] },
  q6_c: { keyConcepts: ['Graph plotting', 'Line of best fit', 'Anomalous data', 'Criterion C'], keywords: ['absorbance vs concentration', 'LOBF from origin', 'anomalous 70 μmol dm⁻³', 'myporium UV block'] },
  q6_d: { keyConcepts: ['Reliability', 'Anomalous data'], keywords: ['anomalous point 70 μmol dm⁻³', 'one trial', 'no averages', 'reliability comment'] },

  q7_a: { keyConcepts: ['Deforestation', 'Photosynthesis', 'Criterion D'], keywords: ['less photosynthesis', 'food shortage', 'habitat loss', 'justify CO₂ increase'] },
  q7_b: { keyConcepts: ['State symbols', 'Physical states at 25°C'], keywords: ['Fe(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols 25°C'] },
  q7_c: { keyConcepts: ['Naming ionic compounds', 'Iron compounds'], keywords: ['iron II carbonate', 'FeCO₃', 'transition metal naming', 'Roman numerals'] },
  q7_d: { keyConcepts: ['Redox chemistry', 'Oxidation numbers', 'Electron transfer'], keywords: ['oxidation number 0 to +2', 'iron loses electrons', 'oxidised', 'redox Fe'] },
  q7_e: { keyConcepts: ['Balancing equations', 'Hydrogen combustion'], keywords: ['2H₂ + O₂ → 2H₂O', 'balanced equation', 'hydrogen fuel', 'coefficients'] },
  q7_f: { keyConcepts: ['Environmental impact', 'Combustion products', 'Criterion D'], keywords: ['only water product', 'no CO₂ NOx SOx', 'non-toxic', 'hydrogen vs petrol'] },

  q8_: { keyConcepts: ['Criterion D', 'CO₂ sinks', 'Climate change', 'Scientific appraisal', 'Economic and social impact'], keywords: ['Ferrock CO₂ sink', 'carbon capture CDC', 'desert conversion', 'economic cost USD10', 'social employment', 'scientific evaluation concluding appraisal'] },
}
