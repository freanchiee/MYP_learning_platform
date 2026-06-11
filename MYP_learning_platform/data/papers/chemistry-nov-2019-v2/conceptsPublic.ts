type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2019_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Chemical formulae', 'Counting atoms'], keywords: ['diopside', 'CaMgSi₂O₆', '6 oxygen atoms', 'Roman concrete'] },
  q1_b: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['calcium group 2 period 4', 'silicon group 4 period 3', 'periodic table position'] },
  q1_c: { keyConcepts: ['Lewis dot diagrams', 'Covalent bonding'], keywords: ['CO₂', 'Lewis structure', 'double bond', 'electron pairs'] },

  q2_a: { keyConcepts: ['Mixtures', 'Alloys'], keywords: ['alloy', 'brass', 'copper zinc', 'guitar string mixture'] },
  q2_b: { keyConcepts: ['Properties of brass', 'Zinc content'], keywords: ['low zinc too soft', 'high zinc brittle', 'guitar string unsuitable'] },
  q2_c: { keyConcepts: ['Moles calculation', 'n = m/M'], keywords: ['n = m/M', '224 g', 'M = 56', '4.0 mol', '2 significant figures'] },
  q2_d: { keyConcepts: ['Physical states', 'Cooling curve'], keywords: ['solid', 'point B', 'bismuth', 'cooling curve'] },
  q2_e: { keyConcepts: ['Particle model', 'States of matter'], keywords: ['liquid irregular', 'solid regular lattice', 'particle diagram', 'bismuth cooling'] },
  q2_f: { keyConcepts: ['Melting point', 'Cooling curve'], keywords: ['271 °C', 'melting point', 'bismuth', 'plateau'] },

  q3_a: { keyConcepts: ['Acid–carbonate reactions', 'Products'], keywords: ['calcium chloride', 'carbon dioxide', 'water', 'carbonate hydrochloric acid'] },
  q3_b: { keyConcepts: ['Balanced equations', 'Symbol equations'], keywords: ['CaCO₃', '2HCl', 'CaCl₂', 'balanced equation', 'coefficient 2'] },
  q3_c: { keyConcepts: ['Radioactivity', 'Health hazards'], keywords: ['barium nitrate not radioactive', 'actinium emits radiation', 'damages cells', 'safer spectators'] },
  q3_d: { keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'], keywords: ['actinium 89 protons 138 neutrons', 'francium 87 protons 136 neutrons', 'atomic number mass number'] },
  q3_e: { keyConcepts: ['Hazard symbols', 'Radioactivity'], keywords: ['radioactive hazard symbol', 'trefoil', 'safety warning fireworks'] },

  q4_a: { keyConcepts: ['Variables', 'Criterion B'], keywords: ['IV wetting agent brand', 'DV volume absorbed', 'CV mass temperature time', 'fair test'] },
  q4_b: { keyConcepts: ['Data tables', 'Criterion C'], keywords: ['table wetting agent brand', 'volume cm³', 'three trials', 'raw data'] },
  q4_c: { keyConcepts: ['Bar chart', 'Criterion C'], keywords: ['bar chart brand', 'volume cm³', 'scale zero', 'title axes'] },
  q4_d: { keyConcepts: ['Data interpretation', 'Research question'], keywords: ['raw data volume remaining', 'not absorbed', 'process data'] },
  q4_e: { keyConcepts: ['Data analysis', 'Criterion C'], keywords: ['Brand 2', '400 − 150 = 250 cm³', 'exactly meets requirement', 'justification'] },

  q5_a: { keyConcepts: ['Criterion D', 'Environmental impact', 'Plastic waste'], keywords: ['disposable cup landfill plastic', 'reusable cup energy washing', 'environmental comparison', 'appraisal'] },
  q5_b: { keyConcepts: ['Criterion B', 'Investigation design', 'Cup insulation'], keywords: ['IV cup material DV temperature', 'CVs initial temp volume time', '5 materials 3 trials', 'thermometer method'] },

  q6_a: { keyConcepts: ['Data analysis', 'Criterion C'], keywords: ['ThermoSip most heat retained', 'thin wall best insulation', 'insulation type matters', 'data statements'] },
  q6_b: { keyConcepts: ['If–then–because reasoning', 'Criterion B', 'Thermal insulation'], keywords: ['if wall thicker less heat loss', 'because insulation', 'ThermoSip contradicts', 'reasoning framework'] },
  q6_c: { keyConcepts: ['Vacuum insulation', 'Heat transfer'], keywords: ['vacuum no particles', 'no conduction convection', 'heat retained', 'double wall cup'] },

  q7_a: { keyConcepts: ['Chromatography', 'Forensic science', 'Criterion C'], keywords: ['Dye D', 'same spot pattern', 'ink forensic', 'chromatography match'] },
  q7_b: { keyConcepts: ['Chromatography', 'Spot pattern analysis'], keywords: ['Ink A extra pigment', 'Ink B missing pigment', 'Ink C different', 'not contained'] },
  q7_c: { keyConcepts: ['Rf value', 'Chromatography calculation'], keywords: ['Rf = 0.40', '1.8 cm spot', '4.5 cm solvent front', 'chromatography forensic'] },

  q8_a: { keyConcepts: ['Functional groups', 'Organic chemistry'], keywords: ['alcohol OH', 'ester C=O with O-C', 'alkene C=C double bond', 'monomer bioplastic PHA'] },
  q8_b: { keyConcepts: ['Criterion D', 'PHA vs HDPE', 'Bioplastics evaluation'], keywords: ['HDPE carrier bag properties', 'PHA biodegrade renewable', 'PHA expensive lower strength', 'justified supermarket conclusion'] },

  q9_: { keyConcepts: ['Criterion D', 'Wind energy', 'Fossil fuels', 'Sustainability', 'Environmental impact', 'Social impact'], keywords: ['fossil fuels finite unsustainable', 'wind energy renewable', 'CO₂ turbine manufacture', 'jobs noise health', 'scientific appraisal'] },
}
