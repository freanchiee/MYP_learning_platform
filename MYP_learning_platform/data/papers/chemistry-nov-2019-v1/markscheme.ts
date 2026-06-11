import 'server-only'

interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export type { MSRecord }

export const MS: MSRecord = {
  // Q1 — Talc / cosmetic powder
  q1_a: {
    marks: 1,
    exemplar: '12 oxygen atoms (10 from O₁₀ + 2 from (OH)₂)',
    keyConcepts: ['Chemical formulae', 'Counting atoms'],
    keywords: ['talc', 'Mg₃Si₄O₁₀(OH)₂', '12 oxygen atoms'],
    feedbackHit: 'Correctly counted all oxygen atoms in the talc formula including those in the hydroxyl groups.',
    feedbackMiss: 'Count O₁₀ = 10, then add 2 from (OH)₂. Total = 10 + 2 = 12 oxygen atoms.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Magnesium: Group 2, Period 3. Silicon: Group 4, Period 3. (1 mark per element with both group and period correct)',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['magnesium group 2 period 3', 'silicon group 4 period 3', 'periodic table position'],
    feedbackHit: 'Correctly identified the group and period for both magnesium and silicon.',
    feedbackMiss: 'Mg is in Group 2, Period 3. Si is in Group 4, Period 3. Period = row number, Group = column number in the periodic table.',
    blankAnswers: ['2', '3', '4', '3'],
  },
  q1_c: { type: 'mcq', correct: 1 },

  // Q2 — Bedspring / nickel-steel + tin cooling curve
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 2,
    exemplar: 'Very low nickel content: too soft / corrodes easily / would not hold shape under compression. Very high carbon content: too brittle / would snap / not malleable enough. (1 mark each)',
    keyConcepts: ['Properties of alloys', 'Metal composition'],
    keywords: ['low nickel corrodes soft', 'high carbon brittle', 'bed spring unsuitable'],
    feedbackHit: 'Correctly linked composition extremes to the physical property that makes each unsuitable for a spring.',
    feedbackMiss: 'Think about what a spring needs: it must bounce back and resist corrosion. Too little nickel = soft/corrodes; too much carbon = brittle.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'n = m / M = 174 g / 56 g mol⁻¹ = 3.107... mol → 3.1 mol (to 2 sig figs). Award: 1 mark for M(Fe)=56; 1 mark for n=m/M; 1 mark for 3.107 (or 3.11); 1 mark for 3.1 (2 sig figs).',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['moles', '174 g', 'M = 56', '3.1 mol', '2 significant figures'],
    feedbackHit: 'Correctly applied n = m/M and rounded to 2 significant figures.',
    feedbackMiss: 'Convert mass to grams: 0.174 kg = 174 g. Then n = 174/56 = 3.107 → round to 3.1 mol (2 sig figs).',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Solid',
    keyConcepts: ['Physical states', 'Cooling curve'],
    keywords: ['solid', 'point B', 'cooling curve', 'tin'],
    feedbackHit: 'Correctly identified the physical state of tin at point B.',
    feedbackMiss: 'Point B is below the plateau on the cooling curve, so tin has fully solidified.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Point A (liquid): particles in irregular, random arrangement, not in fixed positions, at least 6 particles. Point B (solid): particles in regular, close-packed arrangement, at least 6 particles. (1 mark each)',
    keyConcepts: ['Particle model', 'States of matter'],
    keywords: ['irregular liquid', 'regular solid', 'particle diagram', 'close-packed'],
    feedbackHit: 'Correctly drew irregular particles for liquid state and regular lattice for solid state.',
    feedbackMiss: 'Liquid (A): particles close but random. Solid (B): particles in a regular ordered pattern.',
  },
  q2_f: {
    marks: 1,
    exemplar: '232 °C (accept 231–233 °C)',
    keyConcepts: ['Melting point', 'Cooling curve'],
    keywords: ['232 °C', 'melting point', 'tin', 'plateau'],
    feedbackHit: 'Correctly read the melting point of tin from the plateau on the cooling curve.',
    feedbackMiss: 'Find the flat section (plateau) on the cooling curve and read the temperature.',
  },

  // Q3 — Radium-dial watches
  q3_a: {
    marks: 2,
    exemplar: 'Products: radium nitrate + carbon dioxide + water. (1 mark for radium nitrate; 1 mark for both carbon dioxide and water)',
    keyConcepts: ['Acid–carbonate reactions', 'Word equations'],
    keywords: ['radium nitrate', 'carbon dioxide', 'water', 'acid carbonate products'],
    feedbackHit: 'Correctly identified all three products of the radium carbonate–nitric acid reaction.',
    feedbackMiss: 'Metal carbonate + acid → salt + CO₂ + H₂O. Salt from Ra²⁺ + NO₃⁻ = radium nitrate.',
  },
  q3_b: {
    marks: 3,
    exemplar: 'RaCO₃ + 2HNO₃ → Ra(NO₃)₂ + CO₂ + H₂O. Award: 1 mark for correct reactant formulae; 1 mark for correct product formulae; 1 mark for balancing (coefficient 2 before HNO₃).',
    keyConcepts: ['Balanced equations', 'Symbol equations'],
    keywords: ['RaCO₃', 'HNO₃', 'Ra(NO₃)₂', 'balanced equation', 'coefficient 2'],
    feedbackHit: 'Correctly wrote and balanced the equation with correct formulae.',
    feedbackMiss: 'Ra(NO₃)₂ needs 2 NO₃⁻ groups, so 2HNO₃ are needed on the left side.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Zinc sulphide is not radioactive / does not emit radiation. Radium emits radiation which damages/kills body cells / causes cancer. (1 mark each)',
    keyConcepts: ['Radioactivity', 'Health hazards'],
    keywords: ['zinc sulphide not radioactive', 'radium emits radiation', 'damages cells', 'cancer'],
    feedbackHit: 'Correctly stated that ZnS is non-radioactive and that radium\'s radiation harms the body.',
    feedbackMiss: 'Key points: (1) ZnS does not emit radiation. (2) Radium emits alpha/gamma radiation that damages cells.',
  },
  q3_d: {
    marks: 2,
    exemplar: '²²⁶Ra (Z=88, A=226): protons=88, neutrons=138, electrons=88. ²²²Rn (Z=86, A=222): protons=86, neutrons=136, electrons=86. (1 mark for each correct column)',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['radium 88 protons 138 neutrons', 'radon 86 protons 136 neutrons', 'atomic number mass number'],
    feedbackHit: 'Correctly determined protons, neutrons and electrons for both isotopes.',
    feedbackMiss: 'Protons = Z. Neutrons = A − Z. Electrons = Z (neutral atom). ²²⁶Ra: Z=88, n=226−88=138.',
    blankAnswers: ['88', '138', '88', '86', '136', '86'],
  },
  q3_e: { type: 'mcq', correct: 2 },

  // Q4 — Superabsorbent polymers
  q4_a: {
    marks: 4,
    exemplar: 'IV: brand/type of SAP wound dressing. DV: volume of saline absorbed (or volume remaining). CVs: any two of — mass of SAP used; temperature of saline; initial volume of saline; time of stirring; concentration of saline. (1 mark each)',
    keyConcepts: ['Variables', 'Experimental design', 'Criterion B'],
    keywords: ['IV SAP brand', 'DV volume absorbed', 'CV mass temperature time', 'fair test'],
    feedbackHit: 'Correctly identified IV, DV and two controlled variables relevant to the investigation.',
    feedbackMiss: 'IV = what you change (SAP brand), DV = what you measure (volume absorbed), CVs = what you keep the same.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Table with: correct column headings (SAP brand; volume saline remaining/cm³ or absorbed/cm³); units in headings only; at least 5 brands; at least 3 trials per brand. (1 mark each for headings, units, all brands, repeats)',
    keyConcepts: ['Data presentation', 'Tables', 'Criterion C'],
    keywords: ['table', 'SAP brand', 'volume cm³', 'three trials', 'headings units'],
    feedbackHit: 'Correctly structured table with clear headings, units and space for all brands and repeats.',
    feedbackMiss: 'Include column headings with units, rows for each SAP brand, and columns for repeat measurements.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Bar chart with: appropriate title; x-axis = SAP brand (labelled); y-axis = volume/cm³ starting at 0 (labelled with units); bars plotted correctly. (1 mark each)',
    keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'],
    keywords: ['bar chart', 'title', 'x-axis SAP brand', 'y-axis volume cm³', 'scale starts zero'],
    feedbackHit: 'Correctly drew a bar chart with title, labelled axes, scale starting at zero and accurate bars.',
    feedbackMiss: 'Bar charts need: title, x-axis with category labels, y-axis starting at 0 with units, accurate bar heights.',
  },
  q4_d: { type: 'mcq', correct: 1 },
  q4_e: {
    marks: 3,
    exemplar: 'SAP-2. Calculation: volume remaining = 150 cm³; volume absorbed = 500 − 150 = 350 cm³. Justification: SAP-2 absorbs 350 cm³ which is ≥ 300 cm³ required / SAP-2 is the smallest amount remaining so absorbs the most and exceeds 300 cm³. (1 mark for identifying SAP; 1 mark for calculation; 1 mark for justification)',
    keyConcepts: ['Data analysis', 'Calculation from raw data'],
    keywords: ['SAP-2', '500 − 150 = 350', 'volume absorbed', 'exceeds 300 cm³', 'justification'],
    feedbackHit: 'Correctly identified SAP-2, calculated volume absorbed and justified with data.',
    feedbackMiss: 'Volume absorbed = 500 − volume remaining. Find which SAP gives ≥ 300 cm³ absorbed.',
  },

  // Q5 — Wound dressings
  q5_a: {
    marks: 5,
    exemplar: 'Environmental impacts [max 2]: Disposable — plastic waste/landfill, oil-based polymer production, chemical manufacturing waste. Reusable — energy for sterilisation, water use, chemical sterilants disposal. Advantages/disadvantages [max 2]: Disposable: hygienic/infection-free; Reusable: reduces waste over time. Concluding appraisal linked to arguments.',
    keyConcepts: ['Environmental impact', 'Criterion D', 'Medical waste'],
    keywords: ['disposable landfill plastic', 'reusable energy sterilisation', 'environmental comparison', 'appraisal'],
    feedbackHit: 'Provided environmental impacts for both types, advantages and disadvantages, and a justified conclusion.',
    feedbackMiss: 'Cover impacts of both types. Disposable: plastic waste; Reusable: sterilisation energy/water. Give a reasoned conclusion.',
  },
  q5_b: {
    marks: 15,
    exemplar: 'Band 4 (13–15): IV (SAP brand) and DV (volume absorbed) identified; at least two CVs (mass, temperature, time, concentration); all five brands with three trials; equipment fully described (beaker, measuring cylinder, filter funnel, filter paper, balance, timer); complete replicable method. Band 3 (9–12): IV and DV and one CV; equipment listed; method could be followed. Band 2 (5–8): some variables stated; method attempted. Band 1 (1–4): attempt at method with minimal detail.',
    keyConcepts: ['Criterion B', 'Investigation design', 'SAP absorbency'],
    keywords: ['IV dressing brand DV volume absorbed', 'CVs mass temperature time', '5 brands 3 trials', 'replicable method equipment'],
    feedbackHit: 'Designed a complete investigation with variables, sufficient data and a replicable method.',
    feedbackMiss: 'State IV (brand), DV (volume absorbed), ≥2 CVs, list all equipment, test 5 brands with 3 repeats, write step-by-step method.',
  },

  // Q6 — Wound dressing brand data analysis
  q6_a: {
    marks: 3,
    exemplar: 'Any three data-linked statements: (1) The hypothesis is not supported — DressMed absorbs the most saline despite having the least SAP crystal. (2) The mass of gauze also affects the volume of saline absorbed. (3) Volume absorbed depends on both SAP and gauze composition. (1 mark each, max 3)',
    keyConcepts: ['Data analysis', 'Criterion C'],
    keywords: ['DressMed most absorbent', 'least SAP', 'gauze affects absorption', 'data statements'],
    feedbackHit: 'Made three clear data-linked statements correctly interpreting the wound dressing absorbency data.',
    feedbackMiss: 'Link each statement directly to the data. Which brand absorbs most? What is unusual about its composition?',
  },
  q6_b: {
    marks: 3,
    exemplar: 'If–then–because: (1) If the mass of SAP crystal increases, then the volume of saline absorbed increases, because SAP absorbs saline. However, data does not support this — DressMed has least SAP but absorbs most. (2) If gauze content is greater, then more saline is absorbed, because gauze also absorbs liquid. (3) If total absorbent material increases, then volume absorbed increases, because both components absorb saline.',
    keyConcepts: ['If–then–because reasoning', 'Criterion B'],
    keywords: ['if SAP increases then absorbed increases', 'because absorbs saline', 'DressMed contradicts hypothesis'],
    feedbackHit: 'Correctly applied the if–then–because framework to evaluate the claim about SAP mass.',
    feedbackMiss: 'Structure: If [condition], then [prediction], because [scientific reason]. Include all three parts and link to data.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'Gauze removes proteins, cells or impurities/ions from the wound fluid (1 mark), so the SAP crystals can absorb the remaining water/saline (1 mark).',
    keyConcepts: ['Gauze function', 'SAP', 'Wound dressings'],
    keywords: ['gauze removes proteins ions', 'SAP absorbs water', 'wound fluid', 'dressing function'],
    feedbackHit: 'Correctly explained that gauze filters impurities from wound fluid, allowing SAP to absorb water.',
    feedbackMiss: 'Gauze acts as a pre-filter removing proteins/ions from wound exudate, leaving water for SAP to absorb.',
  },

  // Q7 — Chromatography of food dyes
  q7_a: { type: 'mcq', correct: 1 },
  q7_b: {
    marks: 3,
    exemplar: 'The other dyes do not have the same components as the sports drink sample. Dye A is missing one pigment found in the sample. Dye C has an additional pigment not present in the sample. Dye D has a different number/position of spots. (WTTE — 1 mark per correct explanation, max 3)',
    keyConcepts: ['Chromatography', 'Spot pattern analysis'],
    keywords: ['different components', 'Dye A missing pigment', 'Dye C extra pigment', 'Dye D different pattern'],
    feedbackHit: 'Correctly explained why each of the other dyes cannot be the one in the sports drink.',
    feedbackMiss: 'Compare spot numbers and positions. A true match requires ALL spots to align. Any extra or missing spot means it is not a match.',
  },
  q7_c: {
    marks: 3,
    exemplar: 'Rf = distance moved by spot ÷ distance moved by solvent front. In Dye B: yellow/allergenic spot ≈ 2.1 cm; solvent front ≈ 4.2 cm. Rf = 2.1/4.2 = 0.50. Award: 1 mark for measurements; 1 mark for applying Rf formula; 1 mark for Rf value 0.45–0.55.',
    keyConcepts: ['Rf value', 'Chromatography calculation'],
    keywords: ['Rf = spot / solvent front', '2.1 cm', '4.2 cm', '0.50', 'chromatography calculation'],
    feedbackHit: 'Correctly measured distances and calculated Rf = 0.50 within acceptable range.',
    feedbackMiss: 'Rf = distance spot moved ÷ distance solvent moved. Measure from the start (base) line.',
  },

  // Q8 — Bioplastics functional groups + HDPE vs PHB
  q8_a: {
    marks: 3,
    exemplar: 'A = Carboxylic acid; B = Alkene; C = Alcohol. (1 mark each)',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['carboxylic acid COOH', 'alkene C=C', 'alcohol OH', 'monomer functional groups'],
    feedbackHit: 'Correctly identified all three functional groups from the circled sections of the monomer structures.',
    feedbackMiss: 'Carboxylic acid: –COOH (C=O with O–H). Alkene: C=C double bond. Alcohol: –OH attached to carbon chain.',
    blankAnswers: ['Carboxylic acid', 'Alkene', 'Alcohol'],
  },
  q8_b: {
    marks: 7,
    exemplar: 'Properties needed for food packaging [max 2]: strong/rigid; waterproof; food-safe; cheap; transparent (optional). Advantages of PHB [max 1]: biodegrades; made from renewable sources (bacteria/waste); does not release harmful toxins; lower carbon footprint. Disadvantage of PHB [max 1]: more expensive than HDPE; limited production scale; lower heat resistance. Any two further arguments [max 2]. Conclusion linking all arguments (1 mark). Criterion D rubric.',
    keyConcepts: ['Criterion D', 'PHB vs HDPE', 'Bioplastics evaluation'],
    keywords: ['HDPE food packaging properties', 'PHB biodegrade renewable', 'PHB expensive limited', 'justified conclusion'],
    feedbackHit: 'Fully compared HDPE and PHB with properties, advantages, disadvantages and a reasoned conclusion.',
    feedbackMiss: 'State properties needed in food packaging, then compare PHB vs HDPE on each. Give advantages AND disadvantages of PHB. Conclude with justification.',
  },

  // Q9 — Biofuel vs fossil fuel essay
  q9_: {
    marks: 13,
    exemplar: 'Band 4 (10–13): Sustainability — clear statement that fossil fuels are unsustainable (finite resource) and biofuels are sustainable (renewable) with scientific reasoning. Environmental — clear statements of environmental impact of production AND use of both fuel types (e.g. CO₂ emissions, land use, water use). Social — clear statements of two social impacts (jobs in farming/refining, food security, energy access, health). Appraisal with scientific reasoning supported by evidence. Band 3 (7–9): clear statements for each dimension with some support. Band 2 (3–6): limited statements. Band 1 (1–2): one impact implied.',
    keyConcepts: ['Criterion D', 'Biofuels', 'Sustainability', 'Environmental impact', 'Social impact'],
    keywords: ['fossil fuels finite unsustainable', 'biofuels renewable sustainable', 'CO₂ emissions land use', 'social impacts food security jobs', 'scientific appraisal'],
    feedbackHit: 'Addressed sustainability, environmental and social impacts for both fuel types with scientific reasoning and a justified conclusion.',
    feedbackMiss: 'Structure: (1) Sustainability — finite vs renewable. (2) Environmental impacts of production and use of each. (3) Social impacts — food security, jobs, health. (4) Justified conclusion on replacement.',
  },
}
