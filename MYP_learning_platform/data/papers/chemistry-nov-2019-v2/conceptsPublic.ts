type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_CHEMISTRY_NOV2019_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['Chemical formulae', 'Counting atoms'], keywords: ['olivine', 'Mg₂SiO₄', 'oxygen atoms', '4'] },
  q1_b: { keyConcepts: ['Periodic table', 'Groups and periods'], keywords: ['magnesium group 2 period 3', 'silicon group 4 period 3', 'periodic table position'] },
  q1_c: { keyConcepts: ['Lewis dot diagrams', 'Covalent bonding'], keywords: ['CO₂', 'Lewis structure', 'double bond', 'electron pairs'] },

  q2_a: { keyConcepts: ['Mixtures', 'Alloys'], keywords: ['alloy', 'titanium alloy', 'titanium aluminium vanadium', 'mixture of metals'] },
  q2_b: { keyConcepts: ['Properties of alloys', 'Hardness and brittleness'], keywords: ['pure titanium soft', 'vanadium-rich blend brittle', 'spring properties'] },
  q2_c: { keyConcepts: ['Moles calculation', 'n = m/M'], keywords: ['n = m/M', '486 g', 'M = 27', '18 mol', '2 significant figures'] },
  q2_d: { keyConcepts: ['Physical states', 'Cooling curve'], keywords: ['solid', 'point B', 'cooling curve', 'aluminium solidification'] },
  q2_e: { keyConcepts: ['Particle model', 'States of matter'], keywords: ['liquid irregular particles', 'solid regular lattice', 'particle diagram', 'cooling curve'] },
  q2_f: { keyConcepts: ['Freezing point', 'Cooling curve'], keywords: ['660 °C', 'freezing point', 'aluminium', 'plateau'] },

  q3_a: { keyConcepts: ['Acid–carbonate reactions', 'Products'], keywords: ['thorium nitrate', 'carbon dioxide', 'water', 'carbonate acid reaction'] },
  q3_b: { keyConcepts: ['Balanced equations', 'Symbol equations'], keywords: ['MgCO₃', '2HNO₃', 'Mg(NO₃)₂', 'balanced equation', 'coefficient 2'] },
  q3_c: { keyConcepts: ['Radioactivity', 'Health hazards'], keywords: ['yttrium not radioactive', 'radiation damages cells', 'health hazard', 'thorium'] },
  q3_d: { keyConcepts: ['Atomic structure', 'Subatomic particles'], keywords: ['thorium protons 90 neutrons 142', 'protactinium protons 91 neutrons 143', 'atomic number mass number'] },
  q3_e: { keyConcepts: ['Hazard symbols', 'Radioactivity'], keywords: ['radioactive hazard symbol', 'trefoil symbol', 'safety symbols'] },

  q4_a: { keyConcepts: ['Variables', 'Criterion C', 'Experimental design'], keywords: ['IV granule type', 'DV volume absorbed', 'CV mass temperature time', 'fair test'] },
  q4_b: { keyConcepts: ['Data tables', 'Criterion C'], keywords: ['table headings', 'units cm³', 'granule type', 'three trials', 'raw data'] },
  q4_c: { keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'], keywords: ['bar chart', 'title', 'x-axis granule type', 'y-axis volume cm³', 'scale zero'] },
  q4_d: { keyConcepts: ['Data interpretation', 'Research question'], keywords: ['raw data volume remaining', 'need to process', 'not directly answering RQ'] },
  q4_e: { keyConcepts: ['Data analysis', 'Calculation from data', 'Criterion C'], keywords: ['granule 1', '400 minus 60 = 340', 'volume absorbed', 'calculation justification'] },

  q5_a: { keyConcepts: ['Criterion D', 'Environmental impact', 'Surgical gowns'], keywords: ['single-use gown incineration waste', 'reusable gown energy water sterilisation', 'environmental comparison', 'appraisal'] },
  q5_b: { keyConcepts: ['Criterion B', 'Investigation design', 'Gown absorbency'], keywords: ['IV gown material DV volume absorbed', 'CVs mass temperature time', '5 materials 3 trials', 'replicable method equipment'] },

  q6_a: { keyConcepts: ['Data analysis', 'Criterion C', 'Pad absorbency'], keywords: ['UltraSoak most absorbent', 'least polymer granules', 'cotton fibre affects absorption', 'data statements'] },
  q6_b: { keyConcepts: ['If–then–because reasoning', 'Criterion B', 'Absorbent pad'], keywords: ['if polymer increases', 'water absorbed increases', 'UltraSoak contradicts', 'reasoning framework'] },
  q6_c: { keyConcepts: ['Pad structure', 'Absorption'], keywords: ['cotton wicks spreads fluid', 'granules absorb water', 'pad function'] },

  q7_a: { keyConcepts: ['Chromatography', 'Ink identification', 'Criterion C'], keywords: ['Ink C', 'same spot pattern', 'marker pen', 'chromatography match'] },
  q7_b: { keyConcepts: ['Chromatography', 'Spot patterns'], keywords: ['different components', 'Ink A missing cyan', 'Ink B missing purple', 'Ink D extra green'] },
  q7_c: { keyConcepts: ['Rf value', 'Chromatography calculation'], keywords: ['Rf = distance spot / solvent front', '0.50', 'cyan spot 21 mm', 'solvent front 42 mm'] },

  q8_a: { keyConcepts: ['Functional groups', 'Organic chemistry'], keywords: ['ester group', 'alcohol group', 'alkene group', 'monomer structures'] },
  q8_b: { keyConcepts: ['Criterion D', 'HDPE vs PLA', 'Environmental evaluation'], keywords: ['HDPE properties cheap recycled', 'PLA biodegrade renewable', 'PLA softer expensive', 'justified conclusion'] },

  q9_: { keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Social impact', 'Mycelium packaging'], keywords: ['polystyrene unsustainable', 'mycelium sustainable', 'environmental impact production end of use', 'social impacts jobs health wildlife', 'scientific appraisal'] },
}
