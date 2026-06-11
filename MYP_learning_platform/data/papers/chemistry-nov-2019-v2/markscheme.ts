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
  // Q1 — Diopside / Roman concrete
  q1_a: {
    marks: 1,
    exemplar: '6 oxygen atoms (directly from O₆ in CaMgSi₂O₆)',
    keyConcepts: ['Chemical formulae', 'Counting atoms'],
    keywords: ['diopside', 'CaMgSi₂O₆', '6 oxygen atoms'],
    feedbackHit: 'Correctly counted the 6 oxygen atoms in the diopside formula.',
    feedbackMiss: 'In CaMgSi₂O₆ the subscript after O is 6, meaning there are 6 oxygen atoms. No hydroxyl groups this time.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Calcium: Group 2, Period 4. Silicon: Group 4, Period 3. (1 mark per element with both group and period correct)',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['calcium group 2 period 4', 'silicon group 4 period 3', 'periodic table position'],
    feedbackHit: 'Correctly identified the group and period for both calcium and silicon.',
    feedbackMiss: 'Ca is in Group 2, Period 4 (below Mg). Si is in Group 4, Period 3. Check the periodic table — period = row, group = column.',
    blankAnswers: ['2', '4', '4', '3'],
  },
  q1_c: { type: 'mcq', correct: 1 },

  // Q2 — Guitar string / brass + bismuth cooling curve
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 2,
    exemplar: 'Very low zinc content: too soft / too malleable / poor acoustic properties / not strong enough for a guitar string. Very high zinc content: too brittle / snaps easily / cannot be drawn into wire. (1 mark each)',
    keyConcepts: ['Properties of brass', 'Zinc content'],
    keywords: ['low zinc too soft', 'high zinc brittle', 'guitar string unsuitable'],
    feedbackHit: 'Correctly linked the extreme zinc compositions to the physical properties that make them unsuitable.',
    feedbackMiss: 'Guitar strings must be strong and flexible. Too little zinc = too soft; too much zinc = too brittle.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'n = m / M = 224 g / 56 g mol⁻¹ = 4.00 mol → 4.0 mol (to 2 sig figs). Award: 1 mark for M(Fe)=56; 1 mark for n=m/M; 1 mark for 4.00; 1 mark for 4.0 (2 sig figs).',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['moles', '224 g', 'M = 56', '4.0 mol', '2 significant figures'],
    feedbackHit: 'Correctly applied n = m/M to get 4.0 mol (2 sig figs).',
    feedbackMiss: 'Convert mass: 0.224 kg = 224 g. Then n = 224/56 = 4.00 → to 2 sig figs = 4.0 mol.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Solid',
    keyConcepts: ['Physical states', 'Cooling curve'],
    keywords: ['solid', 'point B', 'cooling curve', 'bismuth'],
    feedbackHit: 'Correctly identified that bismuth is solid at point B.',
    feedbackMiss: 'Point B is below the flat section (melting point) of the cooling curve, so bismuth is fully solidified.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Point A (liquid): particles drawn in random/irregular arrangement, close but not in fixed positions, at least 6 particles shown. Point B (solid): particles in regular, ordered, close-packed lattice at least 6 particles. (1 mark each)',
    keyConcepts: ['Particle model', 'States of matter'],
    keywords: ['irregular liquid', 'regular solid lattice', 'particle model', 'cooling curve'],
    feedbackHit: 'Drew correct irregular particle diagram for liquid and regular lattice for solid.',
    feedbackMiss: 'Liquid: random/irregular arrangement. Solid: regular/ordered arrangement with particles in rows.',
  },
  q2_f: {
    marks: 1,
    exemplar: '271 °C (accept 270–272 °C)',
    keyConcepts: ['Melting point', 'Cooling curve'],
    keywords: ['271 °C', 'melting point', 'bismuth', 'plateau'],
    feedbackHit: 'Correctly read the melting point of bismuth from the cooling curve plateau.',
    feedbackMiss: 'The melting point is the temperature at the flat section (plateau) of the cooling curve.',
  },

  // Q3 — Fireworks chemistry
  q3_a: {
    marks: 2,
    exemplar: 'Products: calcium chloride + carbon dioxide + water. (1 mark for calcium chloride; 1 mark for both carbon dioxide and water)',
    keyConcepts: ['Acid–carbonate reactions', 'Word equations'],
    keywords: ['calcium chloride', 'carbon dioxide', 'water', 'carbonate acid products'],
    feedbackHit: 'Correctly named all three products of the calcium carbonate–hydrochloric acid reaction.',
    feedbackMiss: 'Acid + carbonate → salt + CO₂ + H₂O. Salt from Ca²⁺ + Cl⁻ = calcium chloride.',
  },
  q3_b: {
    marks: 3,
    exemplar: 'CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. Award: 1 mark for correct reactant formulae; 1 mark for correct product formulae; 1 mark for balancing (coefficient 2 before HCl).',
    keyConcepts: ['Balanced equations', 'Symbol equations'],
    keywords: ['CaCO₃', '2HCl', 'CaCl₂', 'balanced equation', 'coefficient 2'],
    feedbackHit: 'Correctly wrote and balanced the equation for calcium carbonate + hydrochloric acid.',
    feedbackMiss: 'CaCl₂ needs 2 Cl⁻ ions, so 2HCl are needed. Check all atoms on both sides are balanced.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Barium nitrate is not radioactive / does not emit radiation. Actinium-227 emits radiation which damages body cells / causes cancer / is hazardous to spectators. (1 mark each)',
    keyConcepts: ['Radioactivity', 'Health hazards'],
    keywords: ['barium nitrate not radioactive', 'actinium emits radiation', 'damages cells', 'safer for spectators'],
    feedbackHit: 'Correctly stated that barium nitrate is non-radioactive and that actinium\'s radiation is harmful.',
    feedbackMiss: 'Key points: (1) Barium nitrate does not emit radiation. (2) Actinium emits alpha particles that can damage body cells.',
  },
  q3_d: {
    marks: 2,
    exemplar: '²²⁷Ac (Z=89, A=227): protons=89, neutrons=138, electrons=89. ²²³Fr (Z=87, A=223): protons=87, neutrons=136, electrons=87. (1 mark for each correct column)',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Subatomic particles'],
    keywords: ['actinium 89 protons 138 neutrons', 'francium 87 protons 136 neutrons', 'atomic number mass number'],
    feedbackHit: 'Correctly determined protons, neutrons and electrons for both actinium-227 and francium-223.',
    feedbackMiss: 'Protons = Z (from periodic table). Neutrons = A − Z. Electrons = Z (neutral atom). ²²⁷Ac: Z=89, n=227−89=138.',
    blankAnswers: ['89', '138', '89', '87', '136', '87'],
  },
  q3_e: { type: 'mcq', correct: 2 },

  // Q4 — Soil wetting agents
  q4_a: {
    marks: 4,
    exemplar: 'IV: brand/type of soil wetting agent. DV: volume of water absorbed (or volume remaining after filtering). CVs: any two of — mass of soil sample; temperature of water; initial volume of water; time of stirring; type of sandy soil used. (1 mark each)',
    keyConcepts: ['Variables', 'Experimental design', 'Criterion B'],
    keywords: ['IV wetting agent brand', 'DV volume absorbed', 'CV mass temperature initial volume', 'fair test'],
    feedbackHit: 'Correctly identified IV, DV and two controlled variables for the wetting agent investigation.',
    feedbackMiss: 'IV = what you change (brand), DV = what you measure (volume absorbed), CVs = what stays the same.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Table with: column headings (wetting agent brand; volume remaining/cm³ or absorbed/cm³); units in headings only (cm³); at least 5 brands; at least 3 trials per brand. (1 mark each criterion)',
    keyConcepts: ['Data tables', 'Criterion C'],
    keywords: ['table headings', 'brand volume cm³', 'three trials', 'all brands listed'],
    feedbackHit: 'Correctly structured table with headings, units and space for all brands and repeats.',
    feedbackMiss: 'Table must have labelled columns with units, rows for each brand, columns for repeat readings.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Bar chart with: appropriate title; x-axis = brand (labelled); y-axis = volume/cm³ starting at 0 (labelled); bars plotted accurately. (1 mark each)',
    keyConcepts: ['Bar chart', 'Criterion C'],
    keywords: ['bar chart', 'title', 'x-axis brand', 'y-axis volume cm³', 'scale starts zero'],
    feedbackHit: 'Drew a correct bar chart with title, labelled axes, scale from zero and accurate data bars.',
    feedbackMiss: 'x-axis = categories (brands), y-axis = volume (cm³) starting at 0. Include a descriptive title.',
  },
  q4_d: { type: 'mcq', correct: 1 },
  q4_e: {
    marks: 3,
    exemplar: 'Brand 2. Calculation: volume remaining = 150 cm³; volume absorbed = 400 − 150 = 250 cm³. Justification: Brand 2 absorbs exactly 250 cm³ of water / Brand 2 absorbs the most and meets the 250 cm³ requirement. (1 mark for brand; 1 mark for calculation; 1 mark for justification)',
    keyConcepts: ['Data analysis', 'Calculation from data'],
    keywords: ['Brand 2', '400 − 150 = 250', 'volume absorbed', '250 cm³', 'justification'],
    feedbackHit: 'Correctly identified Brand 2, calculated 250 cm³ absorbed and justified with data.',
    feedbackMiss: 'Volume absorbed = 400 − volume remaining. Find which brand gives exactly or more than 250 cm³.',
  },

  // Q5 — Disposable vs reusable coffee cups
  q5_a: {
    marks: 5,
    exemplar: 'Environmental impacts [max 2]: Disposable — billions in landfill, plastic lining prevents recycling, oil-based raw materials. Reusable — energy/water for washing, detergent disposal. Advantages/disadvantages [max 2]: Disposable: convenient/hygienic; Reusable: reduces long-term waste. Concluding appraisal linked to arguments.',
    keyConcepts: ['Environmental impact', 'Criterion D', 'Plastic waste'],
    keywords: ['disposable landfill plastic lining', 'reusable energy washing', 'environmental comparison', 'appraisal conclusion'],
    feedbackHit: 'Provided environmental impacts, advantages and disadvantages for both cup types, with a justified conclusion.',
    feedbackMiss: 'Disposable cups: plastic waste, oil-based. Reusable cups: energy/water for washing. Give a balanced conclusion.',
  },
  q5_b: {
    marks: 15,
    exemplar: 'Band 4 (13–15): IV (cup material) and DV (temperature after set time) identified; at least two CVs (initial temperature, volume, time, type of drink); all five materials with three trials; equipment fully described (thermometer, stopwatch, measuring cylinder, identical volumes of hot water); complete replicable method. Band 3 (9–12): IV and DV and one CV; equipment listed; followable method. Band 2 (5–8): some variables implied; insufficient detail. Band 1 (1–4): attempt with minimal relevance.',
    keyConcepts: ['Criterion B', 'Investigation design', 'Cup insulation'],
    keywords: ['IV cup material DV temperature', 'CVs initial temperature volume time', '5 materials 3 trials', 'thermometer stopwatch method'],
    feedbackHit: 'Designed a full investigation with variables, equipment and a complete, replicable method.',
    feedbackMiss: 'IV = cup material, DV = temperature after time. CVs: initial temp, volume of water, time elapsed. Test 5 materials × 3 repeats.',
  },

  // Q6 — Coffee cup brand data analysis
  q6_a: {
    marks: 3,
    exemplar: 'Any three data-linked statements: (1) The hypothesis is not fully supported — ThermoSip retains the most heat despite having the thinnest wall. (2) The type of insulation material also affects heat retention. (3) Heat loss does not depend solely on wall thickness. (1 mark each, max 3)',
    keyConcepts: ['Data analysis', 'Criterion C'],
    keywords: ['ThermoSip most heat retained', 'thin wall highest retention', 'insulation type matters', 'data statements'],
    feedbackHit: 'Made three clear, data-linked statements correctly interpreting the cup insulation data.',
    feedbackMiss: 'Look at the data carefully. Which cup retains most heat? How does its wall thickness compare? What else differs?',
  },
  q6_b: {
    marks: 3,
    exemplar: 'If–then–because: (1) If wall thickness increases, then heat loss decreases, because thicker walls provide more insulation. However, the data does not fully support this — ThermoSip has the thinnest wall but least heat loss. (2) If insulation material is better, then heat is retained longer, because better materials reduce thermal conductivity. (3) If a vacuum exists between walls, then conduction is reduced, because vacuum prevents particle-to-particle energy transfer.',
    keyConcepts: ['If–then–because reasoning', 'Criterion B', 'Heat insulation'],
    keywords: ['if wall thicker then less heat loss', 'because insulation', 'ThermoSip contradicts', 'vacuum insulation'],
    feedbackHit: 'Used the if–then–because framework correctly to evaluate the wall-thickness claim with data.',
    feedbackMiss: 'Structure: If [condition], then [result], because [scientific reason]. Must address whether data supports or contradicts.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'A vacuum removes all particles/air between the walls (1 mark), so there are no particles to conduct or convect heat, reducing heat loss significantly (1 mark).',
    keyConcepts: ['Vacuum insulation', 'Thermal conduction'],
    keywords: ['vacuum removes particles air', 'no conduction convection', 'heat retained', 'double wall'],
    feedbackHit: 'Correctly explained that a vacuum prevents conduction and convection, reducing heat loss.',
    feedbackMiss: 'Heat is transferred by conduction (through particles) and convection (movement of particles). A vacuum has no particles so neither can occur.',
  },

  // Q7 — Chromatography of ink dyes
  q7_a: { type: 'mcq', correct: 3 },
  q7_b: {
    marks: 3,
    exemplar: 'The other pen brands\' inks do not have the same components as the document sample. Ink A has an additional pigment/spot not present in the document. Ink B is missing one pigment found in the document. Ink C has a different combination of pigments. (WTTE — 1 mark per explanation, max 3)',
    keyConcepts: ['Chromatography', 'Forensic evidence', 'Spot pattern'],
    keywords: ['Ink A extra pigment', 'Ink B missing pigment', 'Ink C different pattern', 'not contained in document'],
    feedbackHit: 'Correctly explained why each of the other ink brands cannot be a match for the document.',
    feedbackMiss: 'A match requires ALL spots to be in the same positions. Extra or missing spots mean it is not the same ink.',
  },
  q7_c: {
    marks: 3,
    exemplar: 'Rf = distance moved by spot ÷ distance moved by solvent front. Unique spot in Dye D: spot ≈ 1.8 cm from origin; solvent front ≈ 4.5 cm from origin. Rf = 1.8/4.5 = 0.40. Award: 1 mark for measurements; 1 mark for applying Rf formula; 1 mark for Rf = 0.35–0.45.',
    keyConcepts: ['Rf value', 'Chromatography calculation'],
    keywords: ['Rf = distance / solvent front', '1.8 cm', '4.5 cm', '0.40', 'chromatography forensic'],
    feedbackHit: 'Correctly measured distances and calculated Rf = 0.40 within the acceptable range.',
    feedbackMiss: 'Rf = (distance from start line to spot centre) ÷ (distance from start line to solvent front). Measure from the base line.',
  },

  // Q8 — Bioplastics functional groups + HDPE vs PHA
  q8_a: {
    marks: 3,
    exemplar: 'A = Alcohol; B = Ester; C = Alkene. (1 mark each)',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['alcohol OH group', 'ester C=O with O-C', 'alkene C=C double bond', 'monomer identification'],
    feedbackHit: 'Correctly identified Alcohol, Ester and Alkene functional groups from the circled structures.',
    feedbackMiss: 'Alcohol: –OH. Ester: –COO– (C=O bonded to O). Alkene: C=C double bond.',
    blankAnswers: ['Alcohol', 'Ester', 'Alkene'],
  },
  q8_b: {
    marks: 7,
    exemplar: 'Properties needed for carrier bag [max 2]: strong/flexible; waterproof/moisture resistant; cheap; lightweight. Advantages of PHA [max 1]: biodegrades in environment; produced from renewable/waste sources; does not accumulate in ocean. Disadvantage of PHA [max 1]: more expensive than HDPE; lower tensile strength; less widely produced. Any two further arguments [max 2]. Conclusion linking all arguments (1 mark). Criterion D rubric.',
    keyConcepts: ['Criterion D', 'PHA vs HDPE', 'Bioplastics evaluation'],
    keywords: ['HDPE bag properties strong waterproof', 'PHA biodegrade renewable', 'PHA expensive lower strength', 'justified conclusion supermarket'],
    feedbackHit: 'Fully compared HDPE and PHA with properties, advantages, disadvantages and a reasoned conclusion.',
    feedbackMiss: 'State bag properties needed, then compare PHA vs HDPE on each. Give advantages AND disadvantages of PHA. End with a justified conclusion.',
  },

  // Q9 — Wind energy vs fossil fuel essay
  q9_: {
    marks: 13,
    exemplar: 'Band 4 (10–13): Sustainability — clear statement that fossil fuels are finite/unsustainable and wind energy is renewable/sustainable, with scientific support. Environmental — clear statements of environmental impact of production AND use of both energy types (e.g. CO₂ from fossil fuels; turbine manufacture rare earth mining; habitat effects). Social — clear statements of two social impacts (jobs in energy sector, energy access, community noise, health benefits from cleaner air). Appraisal with scientific reasoning. Band 3 (7–9): clear statements with moderate support. Band 2 (3–6): limited statements. Band 1 (1–2): one impact implied.',
    keyConcepts: ['Criterion D', 'Wind energy', 'Fossil fuels', 'Sustainability', 'Environmental impact', 'Social impact'],
    keywords: ['fossil fuels finite unsustainable', 'wind energy renewable sustainable', 'CO₂ emissions turbine manufacture', 'jobs noise health social impacts', 'scientific appraisal'],
    feedbackHit: 'Addressed sustainability, environmental and social impacts for both energy sources with scientific reasoning and a justified conclusion.',
    feedbackMiss: 'Structure: (1) Sustainability — fossil fuels finite vs wind renewable. (2) Environmental impacts of production and use. (3) Social impacts — jobs, health, community effects. (4) Justified conclusion.',
  },
}
