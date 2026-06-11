type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2020_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Physical changes', 'States of matter'], keywords: ['condensation', 'water vapour cools', 'gas to liquid', 'physical process'] },
  q1_b: { keyConcepts: ['Naming compounds', 'Chemical formulae'], keywords: ['potassium oxide K₂O', 'aluminium oxide Al₂O₃', 'oxide names', 'IUPAC'] },
  q1_c: { keyConcepts: ['Classification of rocks', 'SiO₂ content'], keywords: ['rhyolitic 68.3–77.4%', 'Reykjavik 72.1%', 'lava type', 'rock classification'] },
  q1_d: { keyConcepts: ['Percentage by mass', 'Calculation'], keywords: ['1.14/2.00×100', '57.0%', 'SiO₂ percentage', 'andesitic dyke'] },
  q1_e: { keyConcepts: ['Classification of rocks', 'ECF'], keywords: ['andesitic 52.0–63.7%', 'dyke 57.0%', 'rock type', 'ECF from d'] },

  q2_a: { keyConcepts: ['Acids from dissolved gases', 'pH'], keywords: ['H₂S CO₂ HCl dissolves', 'forms acid', 'low pH', 'karst spring'] },
  q2_b: { keyConcepts: ['Lewis dot structures', 'Covalent bonding'], keywords: ['HCl Lewis structure', 'lone pairs on Cl', 'bonding pair', 'dot cross diagram'] },
  q2_c: { keyConcepts: ['Periodic table', 'Periods'], keywords: ['xenon period 5', 'noble gas', 'group 18', 'periodic table position'] },
  q2_d: { keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'], keywords: ['¹³¹Xe protons 54', 'neutrons 77', 'electrons 54', 'mass number atomic number'] },
  q2_e: { keyConcepts: ['Electron configuration', 'Electron shells'], keywords: ['sulfur 2.8.6', 'three shells', 'outer shell 6', 'electron arrangement'] },

  q3_a: { keyConcepts: ['Organic chemistry', 'Alkenes'], keywords: ['alkene', 'C=C double bond', 'pent-1-ene hex-1-ene', 'functional group'] },
  q3_b: { keyConcepts: ['Alkene nomenclature', 'IUPAC names'], keywords: ['pent-1-ene', 'hex-1-ene', 'five carbons six carbons', 'alkene naming'] },
  q3_c: { keyConcepts: ['Cracking hydrocarbons', 'Conservation of atoms'], keywords: ['C₄H₁₀', 'pentadecane C₁₅H₃₂', 'cracking', 'molecular formula balance'] },
  q3_d: { keyConcepts: ['Neutralisation', 'Air pollution'], keywords: ['Ca(OH)₂ neutralises', 'acidic gases', 'incineration', 'biopolymer waste'] },
  q3_e: { keyConcepts: ['Physical changes', 'Boiling'], keywords: ['boiling', 'liquid to gas', 'hex-1-ene', 'industrial heating'] },
  q3_f: { keyConcepts: ['Environmental regulations', 'Incineration'], keywords: ['hazardous materials', 'emissions controlled', 'scrubbers filters', 'biopolymer incineration'] },
  q3_g: { keyConcepts: ['Surface area and reaction rate', 'Biodegradation', 'Graph interpretation'], keywords: ['B < C < A particle size', 'surface area', 'faster biodegradation', 'smaller particles'] },

  q4_a: { keyConcepts: ['Catalysts', 'Activation energy'], keywords: ['speeds up reaction', 'lowers activation energy', 'not used up', 'bacterial luciferase'] },
  q4_b: { keyConcepts: ['Functional groups', 'Esters'], keywords: ['ester functional group', 'bacterial luciferin', 'C=O with O–C', 'bioluminescent substrate'] },
  q4_c: { keyConcepts: ['Reading instruments', 'Temperature measurement'], keywords: ['55°C', 'thermometer reading', 'temperature measurement', 'deep-sea bacteria experiment'] },
  q4_d: { keyConcepts: ['Variables', 'Fair test', 'Criterion B'], keywords: ['IV temperature', 'DV glow duration', 'CV bacteria species', 'CV volume culture'] },
  q4_e: { keyConcepts: ['Hypothesis', 'If–then–because', 'Criterion B'], keywords: ['if temperature increases', 'then glow duration decreases', 'because rate increases', 'hypothesis bioluminescence'] },
  q4_f: { keyConcepts: ['Graph reading', 'Interpolation', 'Criterion C'], keywords: ['220 minutes', '25°C interpolation', 'reading from curve', 'bacteria glow graph'] },
  q4_g: { keyConcepts: ['Rate of reaction', 'Calculation', 'Units'], keywords: ['rate = molecules/time', '7.56×10⁵/180', '4200 molecules/min', '70 molecules/s'] },

  q5_a: { keyConcepts: ['Data interpretation', 'Effectiveness'], keywords: ['UltraGuard most effective', '8% beads changed', 'fewest beads', 'best UV block'] },
  q5_b: { keyConcepts: ['Electromagnetic spectrum', 'Modelling limitations'], keywords: ['sunlight all wavelengths', 'UV lamp narrow band', 'electromagnetic spectrum', 'not good model'] },
  q5_c: { keyConcepts: ['Criterion B', 'Investigation design', 'Mineral sunscreen ingredients'], keywords: ['IV mineral ingredient SunSmart', 'DV beads changed', 'CVs concentration time', 'Crit B design UV beads'] },

  q6_a: { keyConcepts: ['Data analysis', 'Research question'], keywords: ['compare beads changed', 'zinc oxide fewest', 'research question supported', 'SunSmart ingredient'] },
  q6_b: { keyConcepts: ['Extending investigations', 'Experimental design'], keywords: ['different concentrations', 'combinations ingredients', 'sunlight exposure', 'extension investigation'] },
  q6_c: { keyConcepts: ['Graph plotting', 'Line of best fit', 'Anomalous data', 'Criterion C'], keywords: ['absorbance vs concentration', 'LOBF from origin', 'anomalous 40 μmol dm⁻³', 'octinoxate UV block'] },
  q6_d: { keyConcepts: ['Reliability', 'Anomalous data'], keywords: ['anomalous point 40 μmol dm⁻³', 'one trial', 'no averages', 'reliability comment'] },

  q7_a: { keyConcepts: ['Deforestation', 'Photosynthesis', 'Criterion D'], keywords: ['less photosynthesis', 'habitat loss', 'less oxygen', 'justify CO₂ increase'] },
  q7_b: { keyConcepts: ['State symbols', 'Physical states at 25°C'], keywords: ['Zn(s)', 'CO₂(g)', 'H₂O(l)', 'state symbols 25°C'] },
  q7_c: { keyConcepts: ['Naming ionic compounds', 'Zinc compounds'], keywords: ['zinc carbonate', 'ZnCO₃', 'IUPAC naming', 'ionic compound'] },
  q7_d: { keyConcepts: ['Redox chemistry', 'Oxidation numbers', 'Electron transfer'], keywords: ['oxidation number 0 to +2', 'zinc loses electrons', 'oxidised', 'redox Zn'] },
  q7_e: { keyConcepts: ['Balancing equations', 'Hydrogen peroxide decomposition'], keywords: ['2H₂O₂ → 2H₂O + O₂', 'balanced equation', 'decomposition', 'coefficients'] },
  q7_f: { keyConcepts: ['Environmental impact', 'Combustion products', 'Criterion D'], keywords: ['only water product', 'no CO₂ NOx SOx', 'non-toxic', 'hydrogen vs petrol'] },

  q8_: { keyConcepts: ['Criterion D', 'Ocean acidification', 'Carbon chemistry', 'Scientific appraisal', 'Economic and social impact'], keywords: ['ocean liming CaO', 'seagrass restoration', 'shipping emission controls', 'carbonic acid pH', 'coral marine organisms', 'economic cost', 'fishing communities', 'concluding appraisal'] },
}
