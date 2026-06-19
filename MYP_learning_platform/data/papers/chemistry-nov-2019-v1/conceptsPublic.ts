type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2019_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Chemical formulae', 'Counting atoms'], keywords: ['orthoclase', 'KAlSi₃O₈', 'oxygen atoms', '8'] },
  q1_b: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['aluminium group 3 period 3', 'silicon group 4 period 3', 'periodic table position'] },
  q1_c: { keyConcepts: ['Lewis dot diagrams', 'Covalent bonding'], keywords: ['CO₂', 'Lewis structure', 'double bond', 'electron pairs'] },

  q2_a: { keyConcepts: ['Mixtures', 'Alloys'], keywords: ['alloy', 'nickel-bronze', 'copper nickel zinc', 'mixture of metals'] },
  q2_b: { keyConcepts: ['Properties of alloys', 'Hardness and brittleness'], keywords: ['pure copper soft', 'nickel-rich blend brittle', 'guitar string properties'] },
  q2_c: { keyConcepts: ['Moles calculation', 'n = m/M'], keywords: ['n = m/M', '448 g', 'M = 64', '7.0 mol', '2 significant figures'] },
  q2_d: { keyConcepts: ['Physical states', 'Cooling curve'], keywords: ['solid', 'point B', 'cooling curve', 'tin solder solidification'] },
  q2_e: { keyConcepts: ['Particle model', 'States of matter'], keywords: ['liquid irregular particles', 'solid regular lattice', 'particle diagram', 'cooling curve'] },
  q2_f: { keyConcepts: ['Freezing point', 'Cooling curve'], keywords: ['232 °C', 'freezing point', 'tin solder', 'plateau'] },

  q3_a: { keyConcepts: ['Acid–carbonate reactions', 'Products'], keywords: ['radium chloride', 'carbon dioxide', 'water', 'carbonate acid reaction'] },
  q3_b: { keyConcepts: ['Balanced equations', 'Symbol equations'], keywords: ['RaCO₃', '2HCl', 'RaCl₂', 'balanced equation', 'coefficient 2'] },
  q3_c: { keyConcepts: ['Radioactivity', 'Health hazards'], keywords: ['phosphor not radioactive', 'radiation damages cells', 'health hazard', 'radium'] },
  q3_d: { keyConcepts: ['Atomic structure', 'Subatomic particles'], keywords: ['lead protons 82 neutrons 128', 'bismuth protons 83 neutrons 131', 'atomic number mass number'] },
  q3_e: { keyConcepts: ['Hazard symbols', 'Radioactivity'], keywords: ['radioactive hazard symbol', 'trefoil symbol', 'safety symbols'] },

  q4_a: { keyConcepts: ['Variables', 'Criterion C', 'Experimental design'], keywords: ['IV desiccant type', 'DV volume absorbed', 'CV mass temperature time', 'fair test'] },
  q4_b: { keyConcepts: ['Data tables', 'Criterion C'], keywords: ['table headings', 'units cm³', 'desiccant type', 'three trials', 'raw data'] },
  q4_c: { keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'], keywords: ['bar chart', 'title', 'x-axis desiccant type', 'y-axis volume cm³', 'scale zero'] },
  q4_d: { keyConcepts: ['Data interpretation', 'Research question'], keywords: ['raw data volume remaining', 'need to process', 'not directly answering RQ'] },
  q4_e: { keyConcepts: ['Data analysis', 'Calculation from data', 'Criterion C'], keywords: ['desiccant 1', '400 minus 60 = 340', 'volume absorbed', 'calculation justification'] },

  q5_a: { keyConcepts: ['Criterion D', 'Environmental impact', 'Sponges'], keywords: ['single-use sponge landfill waste', 'washable sponge energy water', 'environmental comparison', 'appraisal'] },
  q5_b: { keyConcepts: ['Criterion B', 'Investigation design', 'Sponge absorbency'], keywords: ['IV sponge brand DV volume absorbed', 'CVs mass temperature time', '5 brands 3 trials', 'replicable method equipment'] },

  q6_a: { keyConcepts: ['Data analysis', 'Criterion C', 'Sponge absorbency'], keywords: ['SpongeKing most absorbent', 'least cellulose', 'polyurethane foam affects absorption', 'data statements'] },
  q6_b: { keyConcepts: ['If–then–because reasoning', 'Criterion B', 'Sponge'], keywords: ['if cellulose increases', 'water absorbed increases', 'SpongeKing contradicts', 'reasoning framework'] },
  q6_c: { keyConcepts: ['Sponge structure', 'Absorption'], keywords: ['polyurethane open pores trap grease', 'cellulose absorbs water', 'sponge function'] },

  q7_a: { keyConcepts: ['Chromatography', 'Dye identification', 'Criterion C'], keywords: ['Dye C', 'same spot pattern', 'food colouring', 'chromatography match'] },
  q7_b: { keyConcepts: ['Chromatography', 'Spot patterns'], keywords: ['different components', 'Dye A missing amber', 'Dye B missing blue', 'Dye D extra green'] },
  q7_c: { keyConcepts: ['Rf value', 'Chromatography calculation'], keywords: ['Rf = distance spot / solvent front', '0.49', 'amber spot 18 mm', 'solvent front 37 mm'] },

  q8_a: { keyConcepts: ['Functional groups', 'Organic chemistry'], keywords: ['ester group', 'alcohol group', 'alkene group', 'monomer structures'] },
  q8_b: { keyConcepts: ['Criterion D', 'PP vs PLA', 'Environmental evaluation'], keywords: ['PP properties hot-food tub', 'PLA biodegrade renewable', 'PLA softens expensive', 'justified conclusion'] },

  q9_: { keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Social impact', 'Seaweed-based films'], keywords: ['oil-based unsustainable', 'seaweed-based sustainable', 'environmental impact production end of use', 'social impacts jobs health wildlife', 'scientific appraisal'] },
}
