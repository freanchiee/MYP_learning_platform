type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2017_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['group 12', 'group 2', 'period 4', 'zinc Zn', 'periodic table'] },
  q1_b: { keyConcepts: ['Balancing equations', 'Conservation of atoms'], keywords: ['2ZnS', '3O₂', '2ZnO', '2SO₂', '2Zn', 'CO₂', 'zinc extraction', 'balancing'] },
  q1_c: { keyConcepts: ['Pollution', 'Environmental chemistry'], keywords: ['SO₂', 'acid rain', 'CO₂', 'climate change', 'zinc extraction', 'environmental damage'] },
  q1_d: { keyConcepts: ['Metallic properties', 'Physical properties'], keywords: ['electrical conductivity', 'thermal conductivity', 'malleability', 'metallic lustre', 'zinc properties'] },
  q1_e: { keyConcepts: ['Metalloids', 'Periodic table classification'], keywords: ['metalloid', 'semi-metal', 'germanium', 'different structure', 'different properties', 'Group 14'] },
  q1_f: { keyConcepts: ['Isotopes', 'Atomic structure'], keywords: ['isotope', 'mass number', 'atomic number', 'neutrons', 'Zn-64', 'Zn-70', 'zinc', 'protons electrons neutrons'] },
  q1_g: { keyConcepts: ['Isotopes', 'Chemical reactivity'], keywords: ['same electron configuration', 'same chemical properties', 'isotopes react same way', 'zinc oxide'] },

  q2_a: { keyConcepts: ['Research question', 'Criterion B inquiry'], keywords: ['research question', 'volatility', 'esters', 'hydrocarbon chain', 'investigation'] },
  q2_b: { keyConcepts: ['Hypothesis', 'Intermolecular forces'], keywords: ['hypothesis', 'chain length increases', 'volatility decreases', 'intermolecular forces', 'stronger bonds'] },
  q2_c: { keyConcepts: ['Variables', 'Experimental design'], keywords: ['independent variable', 'dependent variable', 'control variable', 'ester chain length', 'time to evaporate', 'temperature'] },
  q2_d: { keyConcepts: ['Reversible reactions', 'Equilibrium', 'Ester hydrolysis'], keywords: ['cold temperature', 'ester breakdown', 'equilibrium', 'dry conditions', 'water', 'Le Chatelier', 'reversible'] },
  q2_e: { keyConcepts: ['Structural formulae', 'Esters', 'Organic chemistry'], keywords: ['ethyl propanoate', 'structural formula', 'propanoic acid', 'ethanol', 'carboxylic acid', 'alcohol'] },

  q3_a: { keyConcepts: ['GHS hazard symbols', 'Chemical safety'], keywords: ['iron(II) sulfate', 'harmful', 'irritant', 'hazard symbol', 'GHS', 'exclamation mark'] },
  q3_b: { keyConcepts: ['Laboratory equipment', 'Measurement'], keywords: ['thermometer', 'temperature probe', 'equipment', 'temperature change', 'iron(II) sulfate reaction'] },
  q3_c: { keyConcepts: ['Criterion B — Inquiry and Design', 'Investigation design'], keywords: ['method', 'equipment', 'variables', 'safety', 'iron(II) sulfate', 'temperature', 'metals', 'repeats', 'averages'] },
  q3_d: { keyConcepts: ['Reactivity series', 'Displacement reactions'], keywords: ['reactivity order', 'tin nickel zinc aluminium magnesium', 'least reactive', 'most reactive', 'displacement'] },
  q3_e: { keyConcepts: ['Reactivity', 'Scientific reasoning'], keywords: ['temperature rise', 'more reactive', 'larger temperature change', 'exothermic reaction', 'scientific reasoning'] },
  q3_f: { keyConcepts: ['Graph selection', 'Data presentation'], keywords: ['bar graph', 'discrete data', 'metals', 'temperature change', 'categorical data'] },
  q3_g: { keyConcepts: ['Bar graph', 'Criterion C data presentation'], keywords: ['bar graph', 'x-axis metals', 'y-axis temperature change', '°C', 'title', 'data plotted', 'graph construction'] },
  q3_h: { keyConcepts: ['Validity', 'Reliability', 'Evaluation'], keywords: ['single trial', 'limited validity', 'repeats', 'averages', 'reliability', 'errors'] },

  q4_a: { keyConcepts: ['Hydrogen gas test', 'Chemical testing'], keywords: ['lit splint', 'squeaky pop', 'hydrogen', 'gas test', 'burns'] },
  q4_b: { keyConcepts: ['Hypothesis', 'Metal reactivity'], keywords: ['hypothesis', 'thickest copper plating', 'least exposed steel', 'slowest reaction', 'least reactive', 'copper reactivity'] },
  q4_c: { keyConcepts: ['Variables', 'Experimental design'], keywords: ['independent variable', 'coin type', 'dependent variable', 'volume of gas', 'time', 'control variable', 'temperature', 'acid concentration'] },
  q4_d: { keyConcepts: ['Graph reading', 'Data interpretation'], keywords: ['reaction time', 'plating thickness', 'copper-plated steel', '5-cent', '2-cent', '1-cent', 'cross-reference', 'euro coin'] },
  q4_e: { keyConcepts: ['Evaluation', 'Sources of error'], keywords: ['averages', 'calibration graph', 'no repeats', 'experimental errors', 'gas collection', 'plating thickness varies'] },
  q4_f: { keyConcepts: ['Experimental limitations', 'Evaluation'], keywords: ['destructive method', 'cannot keep coin', 'cannot repeat', 'limitation', 'coin destroyed'] },

  q5_a: { keyConcepts: ['Scientific notation', 'Standard form'], keywords: ['scientific notation', '1.20754 × 10⁴', 'standard form', '12075.4 g', 'mass'] },
  q5_b: { keyConcepts: ['Criterion C evaluation', 'Scientific method'], keywords: ['acid test', 'destructive', 'subjective colour', 'no repeats', 'validity', 'nitric acid', 'silver purity'] },
  q5_c: { keyConcepts: ['Hypothesis evaluation', 'Scientific accuracy'], keywords: ['react not dissolve', 'concentrated not stronger', 'silver unreactive', 'slow to react', 'IV DV relationship'] },
  q5_d: { keyConcepts: ['Significant figures', 'Rounding'], keywords: ['3 significant figures', '31.1 g', 'sig figs', 'silver mass', 'bullion coin'] },
  q5_e: { keyConcepts: ['Percentage calculation', 'Purity'], keywords: ['percentage', '31.07 / 31.10 × 100', '99.9%', 'silver purity', 'calculation'] },

  q6_a: { keyConcepts: ['Carbon cycle', 'Photosynthesis', 'Respiration', 'Combustion'], keywords: ['carbon cycle', 'combustion', 'respiration', 'photosynthesis', 'CO₂', 'glucose', 'oxygen', 'water'] },
  q6_b: { keyConcepts: ['Graph reading', 'Temperature anomaly', 'Climate change'], keywords: ['temperature increase', '0.37°C', 'global temperature', '1970–2000', 'graph calculation', 'anomaly'] },
  q6_c: { keyConcepts: ['Criterion D — societal impact', 'Carbon footprint', 'Sustainability'], keywords: ['carbon footprint', 'fossil fuels', 'renewable energy', 'individual', 'society', 'CO₂ emissions', 'climate change response'] },

  q7_: { keyConcepts: ['Criterion D — evaluation', 'Sustainability', 'Electricity generation'], keywords: ['coal', 'natural gas', 'wind farm', 'solar farm', 'CO₂ emissions', 'generating costs', 'fuel sustainability', 'usefulness', 'appraisal'] },
}
