type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2019: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Chemical formulae', 'Counting atoms'], keywords: ['nacrite', 'Al₂Si₂O₅(OH)₄', 'oxygen atoms', '9'] },
  q1_b: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['aluminium group 3 period 3', 'silicon group 4 period 3', 'periodic table position'] },
  q1_c: { keyConcepts: ['Lewis dot diagrams', 'Covalent bonding'], keywords: ['CO₂', 'Lewis structure', 'double bond', 'electron pairs'] },

  q2_a: { keyConcepts: ['Mixtures', 'Alloys'], keywords: ['alloy', 'steel', 'iron carbon manganese', 'mixture of metals'] },
  q2_b: { keyConcepts: ['Properties of steel', 'Carbon content'], keywords: ['low carbon steel soft', 'very high carbon brittle', 'slinky properties'] },
  q2_c: { keyConcepts: ['Moles calculation', 'n = m/M'], keywords: ['n = m/M', '405 g', 'M = 56', '7.2 mol', '2 significant figures'] },
  q2_d: { keyConcepts: ['Physical states', 'Cooling curve'], keywords: ['solid', 'point B', 'cooling curve', 'lead solidification'] },
  q2_e: { keyConcepts: ['Particle model', 'States of matter'], keywords: ['liquid irregular particles', 'solid regular lattice', 'particle diagram', 'cooling curve'] },
  q2_f: { keyConcepts: ['Melting point', 'Cooling curve'], keywords: ['327 °C', 'melting point', 'lead', 'plateau'] },

  q3_a: { keyConcepts: ['Acid–carbonate reactions', 'Products'], keywords: ['strontium nitrate', 'carbon dioxide', 'water', 'carbonate acid reaction'] },
  q3_b: { keyConcepts: ['Balanced equations', 'Symbol equations'], keywords: ['SrCO₃', '2HNO₃', 'Sr(NO₃)₂', 'balanced equation', 'coefficient 2'] },
  q3_c: { keyConcepts: ['Radioactivity', 'Health hazards'], keywords: ['zinc sulphide not radioactive', 'radiation damages cells', 'health hazard', 'radium'] },
  q3_d: { keyConcepts: ['Atomic structure', 'Subatomic particles'], keywords: ['polonium protons 84 neutrons 126', 'lead protons 82 neutrons 128', 'atomic number mass number'] },
  q3_e: { keyConcepts: ['Hazard symbols', 'Radioactivity'], keywords: ['radioactive hazard symbol', 'trefoil symbol', 'safety symbols'] },

  q4_a: { keyConcepts: ['Variables', 'Criterion B', 'Experimental design'], keywords: ['IV hydrogel type', 'DV volume absorbed', 'CV mass temperature time', 'fair test'] },
  q4_b: { keyConcepts: ['Data tables', 'Criterion C'], keywords: ['table headings', 'units cm³', 'hydrogel brand', 'three trials', 'raw data'] },
  q4_c: { keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'], keywords: ['bar chart', 'title', 'x-axis hydrogel type', 'y-axis volume cm³', 'scale zero'] },
  q4_d: { keyConcepts: ['Data interpretation', 'Research question'], keywords: ['raw data volume remaining', 'need to process', 'not directly answering RQ'] },
  q4_e: { keyConcepts: ['Data analysis', 'Calculation from data', 'Criterion C'], keywords: ['hydrogel 1', '400 minus 60 = 340', 'volume absorbed', 'calculation justification'] },

  q5_a: { keyConcepts: ['Criterion D', 'Environmental impact', 'Nappies'], keywords: ['disposable nappy landfill waste', 'reusable nappy energy water', 'environmental comparison', 'appraisal'] },
  q5_b: { keyConcepts: ['Criterion B', 'Investigation design', 'Nappy absorbency'], keywords: ['IV nappy brand DV volume absorbed', 'CVs mass temperature time', '5 brands 3 trials', 'replicable method equipment'] },

  q6_a: { keyConcepts: ['Data analysis', 'Criterion C', 'Hydrogel absorbency'], keywords: ['Pugs most absorbent', 'least hydrogel', 'fluff pulp affects absorption', 'data statements'] },
  q6_b: { keyConcepts: ['If–then–because reasoning', 'Criterion B', 'Hydrogel'], keywords: ['if hydrogel increases', 'water absorbed increases', 'because absorbs water', 'reasoning framework'] },
  q6_c: { keyConcepts: ['Fluff pulp function', 'Hydrogel', 'Nappy science'], keywords: ['fluff pulp removes ions impurities', 'hydrogel absorbs water', 'nappy function'] },

  q7_a: { keyConcepts: ['Chromatography', 'Dye identification', 'Criterion C'], keywords: ['Dye C', 'same spot pattern', 'irritant', 'chromatography match'] },
  q7_b: { keyConcepts: ['Chromatography', 'Spot patterns'], keywords: ['different components', 'Dye B only two pigments', 'Dye D extra pigment', 'not contained'] },
  q7_c: { keyConcepts: ['Rf value', 'Chromatography calculation'], keywords: ['Rf = distance spot / solvent front', '0.48', 'yellow spot', 'solvent front 3.7 cm'] },

  q8_a: { keyConcepts: ['Functional groups', 'Organic chemistry'], keywords: ['ester group', 'alcohol group', 'alkene group', 'monomer structures'] },
  q8_b: { keyConcepts: ['Criterion D', 'PET vs PLA', 'Environmental evaluation'], keywords: ['PET properties coffee cup', 'PLA biodegrade renewable', 'PLA expensive limited', 'justified conclusion'] },

  q9_: { keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Social impact', 'Algae-based plastics'], keywords: ['oil-based unsustainable', 'algae-based sustainable', 'environmental impact production end of use', 'social impacts jobs health', 'scientific appraisal'] },
}
