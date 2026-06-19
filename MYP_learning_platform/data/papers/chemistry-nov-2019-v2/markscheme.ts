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
  // Q1 — Olivine Mg₂SiO₄ / meteorite mineral
  q1_a: {
    marks: 1,
    exemplar: '4 oxygen atoms (all 4 come from the O₄ in Mg₂SiO₄)',
    keyConcepts: ['Chemical formulae', 'Counting atoms'],
    keywords: ['olivine', 'Mg₂SiO₄', '4 oxygen atoms'],
    feedbackHit: 'Correctly counted all four oxygen atoms in the formula.',
    feedbackMiss: 'In Mg₂SiO₄ the subscript on O is 4, so there are 4 oxygen atoms per formula unit.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Magnesium: Group 2, Period 3. Silicon: Group 4, Period 3. (1 mark per element with both correct)',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['magnesium group 2 period 3', 'silicon group 4 period 3', 'periodic table position'],
    feedbackHit: 'Correctly identified the group and period for both magnesium and silicon.',
    feedbackMiss: 'Mg is in Group 2, Period 3. Si is in Group 4, Period 3. Period = row number, group = column number.',
    blankAnswers: ['2', '3', '4', '3'],
  },
  q1_c: { type: 'mcq', correct: 1 },

  // Q2 — Titanium aircraft spring + aluminium casting cooling curve
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 2,
    exemplar: 'Pure titanium: too soft / would bend out of shape / would not spring back. Very brittle vanadium-rich blend: would crack or snap under the load of landing. (1 mark each)',
    keyConcepts: ['Properties of alloys', 'Hardness and brittleness'],
    keywords: ['pure titanium too soft', 'vanadium-rich blend brittle', 'spring unsuitable'],
    feedbackHit: 'Correctly linked the composition to the physical property that makes each unsuitable.',
    feedbackMiss: 'A landing spring must be strong and springy: pure titanium is too soft (bends); a very brittle blend cracks/snaps.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'n = m / M = 486 g / 27 g mol⁻¹ = 18 mol (to 2 sig figs). Award: 1 mark for converting 0.486 kg = 486 g; 1 mark for the formula n = m/M; 1 mark for M(Al)=27; 1 mark for the answer 18 mol.',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['moles', '486 g', 'M = 27', '18 mol', '2 significant figures'],
    feedbackHit: 'Correctly applied n = m/M and gave the answer to 2 significant figures.',
    feedbackMiss: 'Convert mass to grams: 0.486 kg = 486 g. Then n = 486/27 = 18 mol.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Solid',
    keyConcepts: ['Physical states', 'Cooling curve'],
    keywords: ['solid', 'point B', 'cooling curve', 'aluminium'],
    feedbackHit: 'Correctly identified the physical state at point B.',
    feedbackMiss: 'Point B is below the freezing plateau on the cooling curve, so the aluminium has fully solidified.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Point A (liquid): particles drawn in an irregular arrangement, close together but not in fixed positions, minimum 6 particles. Point B (solid): particles drawn in a regular, close-packed lattice, minimum 6 particles. (1 mark each correct diagram)',
    keyConcepts: ['Particle model', 'Liquid and solid states'],
    keywords: ['irregular liquid arrangement', 'regular solid lattice', 'particle diagram', 'close packed'],
    feedbackHit: 'Correctly drew irregular particles for the liquid and a regular lattice for the solid.',
    feedbackMiss: 'In a liquid (A) particles are close but randomly arranged; in a solid (B) they form a regular lattice with no gaps.',
  },
  q2_f: {
    marks: 1,
    exemplar: '660 °C (accept 657–663 °C)',
    keyConcepts: ['Freezing point', 'Cooling curve'],
    keywords: ['660 °C', 'freezing point', 'aluminium', 'graph plateau'],
    feedbackHit: 'Correctly read the freezing point from the plateau on the cooling curve.',
    feedbackMiss: 'The freezing point is where the curve is flat (plateau). Read the temperature value there — about 660 °C.',
  },

  // Q3 — Thorium camping gas mantles
  q3_a: {
    marks: 2,
    exemplar: 'Products: thorium nitrate + carbon dioxide + water. (1 mark for thorium nitrate; 1 mark for both carbon dioxide and water)',
    keyConcepts: ['Acid–carbonate reactions', 'Word equations'],
    keywords: ['thorium nitrate', 'carbon dioxide', 'water', 'acid carbonate reaction'],
    feedbackHit: 'Correctly identified all three products of the acid–carbonate reaction.',
    feedbackMiss: 'Acid + carbonate → salt + CO₂ + H₂O. The salt from thorium + nitric acid is thorium nitrate.',
  },
  q3_b: {
    marks: 3,
    exemplar: 'MgCO₃ + 2HNO₃ → Mg(NO₃)₂ + CO₂ + H₂O. Award: 1 mark for correct reactant formulae; 1 mark for correct product formulae; 1 mark for correct balancing (coefficient 2 before HNO₃).',
    keyConcepts: ['Balanced equations', 'Symbol equations'],
    keywords: ['MgCO₃', 'HNO₃', 'Mg(NO₃)₂', 'balanced equation', 'coefficient 2'],
    feedbackHit: 'Correctly wrote and balanced the equation with all correct formulae.',
    feedbackMiss: 'Mg(NO₃)₂ needs 2 nitrate ions, so 2HNO₃ is required on the left. Check every atom balances.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Yttrium compounds are not radioactive / do not emit radiation. Thorium emits radiation which damages body cells / causes cancer / is harmful to health. (1 mark each)',
    keyConcepts: ['Radioactivity', 'Health hazards'],
    keywords: ['yttrium not radioactive', 'radiation damages cells', 'health hazard', 'thorium radioactive'],
    feedbackHit: 'Correctly stated that yttrium is not radioactive and that radiation is harmful.',
    feedbackMiss: 'The key idea is that thorium emits radiation that damages DNA/cells, while yttrium compounds emit none.',
  },
  q3_d: {
    marks: 2,
    exemplar: '²³²Th (Z=90, A=232): protons=90, neutrons=232−90=142, electrons=90. ²³⁴Pa (Z=91, A=234): protons=91, neutrons=234−91=143, electrons=91. (1 mark for each complete correct column)',
    keyConcepts: ['Atomic structure', 'Protons, neutrons, electrons'],
    keywords: ['thorium 90 protons 142 neutrons', 'protactinium 91 protons 143 neutrons', 'atomic number mass number'],
    feedbackHit: 'Correctly determined protons, neutrons and electrons for both isotopes.',
    feedbackMiss: 'Protons = atomic number. Neutrons = mass number − atomic number. Electrons = protons. For ²³²Th: n = 232 − 90 = 142.',
    blankAnswers: ['90', '142', '90', '91', '143', '91'],
  },
  q3_e: { type: 'mcq', correct: 2 },

  // Q4 — Cat-litter granule absorbency
  q4_a: {
    marks: 4,
    exemplar: 'IV: type of granule (or brand/sample). DV: volume of water absorbed (or volume remaining after sieving). CVs: any two of — mass of granule used; temperature of the water; initial volume of water; time of stirring; number of times stirred. (1 mark each for IV, DV, and each CV)',
    keyConcepts: ['Variables', 'Experimental design', 'Criterion C'],
    keywords: ['IV granule type', 'DV volume absorbed', 'CV mass temperature volume time', 'investigation variables'],
    feedbackHit: 'Correctly identified IV, DV and two controlled variables linked to the investigation.',
    feedbackMiss: 'IV is what you change (granule type), DV is what you measure (volume absorbed). CVs keep the test fair.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Table with: correct column headings (granule type; volume of water remaining/cm³ or volume absorbed/cm³); units in the header only (cm³); a row for each granule; space for at least three trials. (Award up to 4 marks: 1 headings, 1 units, 1 all granules included, 1 three trials per granule)',
    keyConcepts: ['Data presentation', 'Tables', 'Criterion C'],
    keywords: ['table headings', 'units cm³', 'granule type', 'volume water', 'three trials'],
    feedbackHit: 'Correctly structured table with clear headings, units and space for all trials.',
    feedbackMiss: 'Headings should include what is being measured and in what unit. Always include a column for repeats.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Bar chart with: appropriate title; x-axis = type of granule (labelled); y-axis = volume/cm³ starting at 0 (labelled with units); bars for the three granules plotted correctly. (1 mark each for title, axis labels, scale, data accuracy)',
    keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'],
    keywords: ['bar chart', 'title', 'x-axis granule type', 'y-axis volume cm³', 'data plotted'],
    feedbackHit: 'Correctly drew a bar chart with title, labelled axes, correct scale and accurate data.',
    feedbackMiss: 'For a bar chart, x-axis shows categories (granule type), y-axis starts at 0 and shows the measured value with units.',
  },
  q4_d: { type: 'mcq', correct: 1 },
  q4_e: {
    marks: 3,
    exemplar: 'Granule 1. Calculation: volume remaining = 60 cm³; volume absorbed = 400 − 60 = 340 cm³. Justification: Granule 1 absorbs exactly 340 cm³ so it meets the requirement / it absorbs the most water. (1 mark for identifying the granule; 1 mark for the calculation; 1 mark for justification)',
    keyConcepts: ['Data analysis', 'Calculation from raw data'],
    keywords: ['granule 1', '400 − 60 = 340', 'volume absorbed', 'calculation justification'],
    feedbackHit: 'Correctly identified Granule 1, calculated volume absorbed and justified with data.',
    feedbackMiss: 'Volume absorbed = 400 − volume remaining. Granule 1: 400 − 60 = 340 cm³, which meets the requirement.',
  },

  // Q5 — Single-use vs reusable surgical gowns + experimental design
  q5_a: {
    marks: 5,
    exemplar: 'Environmental impacts for each type [max 2]: Single-use — clinical-waste incineration, plastic fibres from oil, energy used to keep manufacturing replacements. Reusable — hot water and energy to wash and sterilise, detergent use, eventually still discarded. Advantages/disadvantages linked [max 2] with clear reasoning. Concluding appraisal of which causes less harm, linked to earlier arguments.',
    keyConcepts: ['Environmental impact', 'Criterion D evaluation', 'Surgical gowns'],
    keywords: ['single-use gown incineration', 'reusable gown water energy sterilisation', 'environmental impact', 'appraisal conclusion'],
    feedbackHit: 'Provided environmental impacts for both types, advantages and disadvantages, and a justified conclusion.',
    feedbackMiss: 'Consider both sides: single-use creates incineration waste; reusable uses water/energy/sterilisation. Give a reasoned conclusion.',
  },
  q5_b: {
    marks: 15,
    exemplar: 'Band 4 (13–15): IV (gown material) and DV (volume absorbed) identified; at least two CVs stated; all five materials and three trials; equipment fully described and relevant; complete replicable method that could produce relevant data. Band 3 (9–12): IV, DV and one CV; equipment listed; method that could be followed. Band 2 (5–8): some variables implied; method attempted but insufficient detail. Band 1 (1–4): attempt at a method with minimal relevance.',
    keyConcepts: ['Criterion B', 'Experimental design', 'Investigation method'],
    keywords: ['IV gown material', 'DV volume absorbed', 'CV mass temperature time', '5 materials 3 trials', 'replicable method'],
    feedbackHit: 'Designed a full investigation with clearly stated variables, sufficient data collection and a complete method.',
    feedbackMiss: 'State IV (gown material), DV (volume absorbed), at least 2 CVs, equipment, all 5 materials with 3 trials, and a step-by-step method.',
  },

  // Q6 — Absorbent-pad composition data analysis
  q6_a: {
    marks: 3,
    exemplar: 'Any three reasonable data-linked statements: (1) The suggestion is not supported — the most absorbent pad is UltraSoak. (2) UltraSoak has the fewest polymer granules (8 g). (3) The cotton fibre also affects the volume of water absorbed. (4) Volume absorbed depends on the masses of both components. (1 mark each, max 3; do not credit the same idea twice)',
    keyConcepts: ['Data analysis', 'Criterion C'],
    keywords: ['UltraSoak most absorbent', 'least polymer granules', 'cotton fibre affects absorption', 'data statements'],
    feedbackHit: 'Made three clear, data-linked statements correctly interpreting the pad absorbency data.',
    feedbackMiss: 'Link each statement to the data. Note which pad absorbs most and look at its granule and cotton content.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'If–then–because: e.g. (1) If the mass of polymer granules increases, then the volume of water absorbed increases, because the polymer absorbs water — BUT the data does not support this, since UltraSoak has the fewest granules (8 g) yet absorbs the most (355 cm³). (2) If the total mass of absorbent material increases, then more water is absorbed, because both components take in water. Must contain a clear if–then–because structure referring to the data.',
    keyConcepts: ['If–then–because reasoning', 'Criterion B'],
    keywords: ['if then because', 'polymer increases water absorbed', 'UltraSoak contradicts', 'reasoning framework'],
    feedbackHit: 'Correctly used the if–then–because framework and referred to the data (including the contradicting brand).',
    feedbackMiss: 'Structure: If [condition], then [result], because [explanation]. Then check the data — UltraSoak contradicts the suggestion.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'The cotton fibre wicks and spreads the body fluid across the pad to reach the polymer granules (1 mark), so the granules can absorb the water from the fluid (1 mark).',
    keyConcepts: ['Pad structure', 'Absorption', 'Criterion B'],
    keywords: ['cotton wicks spreads fluid', 'reaches granules', 'granules absorb water', 'pad function'],
    feedbackHit: 'Correctly explained that the cotton fibre wicks fluid to the granules so they can absorb the water.',
    feedbackMiss: 'The cotton fibre spreads the fluid to all the granules, so more of the polymer can absorb the water.',
  },

  // Q7 — Marker-pen ink chromatography
  q7_a: { type: 'mcq', correct: 2 },
  q7_b: {
    marks: 3,
    exemplar: 'The other inks do not have the same spots in the same positions as the sample. Ink A has only two spots — it is missing the cyan (blue) component. Ink B is missing the purple spot. Ink D has an extra green spot that is not present in the sample. (WTTE — 1 mark per correct explanation, max 3)',
    keyConcepts: ['Chromatography', 'Spot patterns', 'Criterion C'],
    keywords: ['different components', 'Ink A missing cyan', 'Ink B missing purple', 'Ink D extra green', 'chromatography comparison'],
    feedbackHit: 'Correctly explained why each of the other inks cannot be the one in the pen sample.',
    feedbackMiss: 'A match needs ALL spots to correspond. A is missing the cyan spot; B is missing the purple spot; D has an extra green spot.',
  },
  q7_c: {
    marks: 3,
    exemplar: 'Rf = distance moved by the spot ÷ distance moved by the solvent front = 21 mm ÷ 42 mm = 0.50 (accept 0.45–0.55). Award: 1 mark for correct distances; 1 mark for applying the Rf formula; 1 mark for an answer in range.',
    keyConcepts: ['Rf value', 'Chromatography calculation'],
    keywords: ['Rf = distance spot / distance solvent front', '21 mm', '42 mm solvent front', '0.50', 'chromatography'],
    feedbackHit: 'Correctly used the distances and calculated the Rf value within the acceptable range.',
    feedbackMiss: 'Rf = distance to spot ÷ distance to solvent front = 21/42 = 0.50. Measure both from the start line.',
  },

  // Q8 — Polymers: functional groups & HDPE vs PLA
  q8_a: {
    marks: 3,
    exemplar: 'A = Ester; B = Alcohol; C = Alkene. (1 mark each)',
    keyConcepts: ['Functional groups', 'Organic chemistry', 'Criterion A'],
    keywords: ['ester group', 'alcohol group', 'alkene group', 'monomer functional groups', 'organic chemistry'],
    feedbackHit: 'Correctly identified all three functional groups from the circled sections of the monomers.',
    feedbackMiss: 'Ester: C=O with O–C; Alcohol: O–H attached to carbon; Alkene: C=C double bond.',
    blankAnswers: ['Ester', 'Alcohol', 'Alkene'],
  },
  q8_b: {
    marks: 7,
    exemplar: 'Properties of HDPE needed for a drinks bottle [max 2]: rigid/strong to hold the drink; waterproof; cheap; widely recycled. Advantage of PLA [max 1]: biodegradable / compostable; made from a renewable plant source; uses less oil; lower carbon footprint. Disadvantage of PLA [max 1]: softens at only 60 °C; more expensive (£52 vs £30 per 1000); limited recycling stream. Any two further points [max 2]. Conclusion linking all arguments (1 mark). Criterion D rubric.',
    keyConcepts: ['Criterion D', 'HDPE vs PLA', 'Environmental evaluation', 'Plastics'],
    keywords: ['HDPE properties cheap recycled', 'PLA biodegrade renewable', 'PLA softer expensive', 'limited recycling', 'drinks bottle', 'justified conclusion'],
    feedbackHit: 'Fully compared HDPE and PLA with properties, advantages, disadvantages and a reasoned conclusion.',
    feedbackMiss: 'Outline the properties a drinks bottle needs, then compare HDPE with PLA. State PLA advantages AND disadvantages, then a justified conclusion.',
  },

  // Q9 — Mushroom-mycelium vs polystyrene packaging essay (Crit D)
  q9_: {
    marks: 13,
    exemplar: 'Band 4 (10–13): Sustainability — clear statement that polystyrene is unsustainable (finite fossil feedstock) or mycelium packaging is sustainable (renewable fungus grown on crop waste), supported with reasoning. Environmental — clear statement of environmental impact of both production and end of use of both packaging types (greenhouse gases / persistence vs composting). Social — two social impacts (jobs, cost, health, wildlife/microplastics) at any stage. Appraisal with scientific reasoning. Band 3 (7–9): clear statements for each dimension but fewer supporting details. Band 2 (3–6): some statements with limited detail. Band 1 (1–2): one social impact implied.',
    keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Social impact', 'Mycelium packaging'],
    keywords: ['polystyrene unsustainable', 'mycelium sustainable', 'environmental impact production end of use', 'social impacts jobs health wildlife', 'scientific reasoning appraisal'],
    feedbackHit: 'Addressed sustainability, environmental and social impacts for both packaging types with scientific reasoning and a conclusion.',
    feedbackMiss: 'Structure: (1) Sustainability — fossil feedstock vs renewable mycelium. (2) Environmental impacts of production AND end of use. (3) Social impacts — jobs, health, wildlife. (4) Justified conclusion.',
  },
}
