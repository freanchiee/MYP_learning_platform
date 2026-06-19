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
  // Q1 — Orthoclase feldspar / stained-glass kiln
  q1_a: {
    marks: 1,
    exemplar: '8 oxygen atoms (all 8 come from the O₈ in KAlSi₃O₈)',
    keyConcepts: ['Chemical formulae', 'Counting atoms'],
    keywords: ['orthoclase', 'KAlSi₃O₈', '8 oxygen atoms'],
    feedbackHit: 'Correctly counted all eight oxygen atoms in the formula.',
    feedbackMiss: 'In KAlSi₃O₈ the subscript on O is 8, so there are 8 oxygen atoms per formula unit.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Aluminium: Group 3, Period 3. Silicon: Group 4, Period 3. (1 mark per element with both correct)',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['aluminium group 3 period 3', 'silicon group 4 period 3', 'periodic table position'],
    feedbackHit: 'Correctly identified the group and period for both aluminium and silicon.',
    feedbackMiss: 'Al is in Group 3, Period 3. Si is in Group 4, Period 3. Period = row number, group = column number.',
    blankAnswers: ['3', '3', '4', '3'],
  },
  q1_c: { type: 'mcq', correct: 1 },

  // Q2 — Nickel-bronze guitar string + tin-solder cooling curve
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 2,
    exemplar: 'Pure copper: too soft / would stretch out of shape / would not stay tuned. Very hard nickel-rich blend: too brittle / would snap when wound or bent. (1 mark each)',
    keyConcepts: ['Properties of alloys', 'Hardness and brittleness'],
    keywords: ['pure copper too soft', 'nickel-rich blend brittle', 'guitar string unsuitable'],
    feedbackHit: 'Correctly linked the composition to the physical property that makes each unsuitable.',
    feedbackMiss: 'A string must be springy and durable: pure copper is too soft (stretches); a very hard blend is too brittle (snaps).',
  },
  q2_c: {
    marks: 4,
    exemplar: 'n = m / M = 448 g / 64 g mol⁻¹ = 7.0 mol (to 2 sig figs). Award: 1 mark for converting 0.448 kg = 448 g; 1 mark for the formula n = m/M; 1 mark for M(Cu)=64; 1 mark for the answer 7.0 mol.',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['moles', '448 g', 'M = 64', '7.0 mol', '2 significant figures'],
    feedbackHit: 'Correctly applied n = m/M and rounded to 2 significant figures.',
    feedbackMiss: 'Convert mass to grams: 0.448 kg = 448 g. Then n = 448/64 = 7.0 mol.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Solid',
    keyConcepts: ['Physical states', 'Cooling curve'],
    keywords: ['solid', 'point B', 'cooling curve', 'tin solder'],
    feedbackHit: 'Correctly identified the physical state at point B.',
    feedbackMiss: 'Point B is below the freezing plateau on the cooling curve, so the solder has fully solidified.',
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
    exemplar: '232 °C (accept 230–234 °C)',
    keyConcepts: ['Freezing point', 'Cooling curve'],
    keywords: ['232 °C', 'freezing point', 'tin solder', 'graph plateau'],
    feedbackHit: 'Correctly read the freezing point from the plateau on the cooling curve.',
    feedbackMiss: 'The freezing point is where the curve is flat (plateau). Read the temperature value there — about 232 °C.',
  },

  // Q3 — Radium luminous watch dials
  q3_a: {
    marks: 2,
    exemplar: 'Products: radium chloride + carbon dioxide + water. (1 mark for radium chloride; 1 mark for both carbon dioxide and water)',
    keyConcepts: ['Acid–carbonate reactions', 'Word equations'],
    keywords: ['radium chloride', 'carbon dioxide', 'water', 'acid carbonate reaction'],
    feedbackHit: 'Correctly identified all three products of the acid–carbonate reaction.',
    feedbackMiss: 'Acid + carbonate → salt + CO₂ + H₂O. The salt from radium + hydrochloric acid is radium chloride.',
  },
  q3_b: {
    marks: 3,
    exemplar: 'RaCO₃ + 2HCl → RaCl₂ + CO₂ + H₂O. Award: 1 mark for correct reactant formulae; 1 mark for correct product formulae; 1 mark for correct balancing (coefficient 2 before HCl).',
    keyConcepts: ['Balanced equations', 'Symbol equations'],
    keywords: ['RaCO₃', 'HCl', 'RaCl₂', 'balanced equation', 'coefficient 2'],
    feedbackHit: 'Correctly wrote and balanced the equation with all correct formulae.',
    feedbackMiss: 'RaCl₂ needs 2 chloride ions, so 2HCl is required on the left. Check every atom balances.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'The modern phosphor is not radioactive / does not emit radiation. Radium emits radiation which damages body cells / causes cancer / is harmful to health. (1 mark each)',
    keyConcepts: ['Radioactivity', 'Health hazards'],
    keywords: ['phosphor not radioactive', 'radiation damages cells', 'health hazard', 'radium radioactive'],
    feedbackHit: 'Correctly stated that the modern phosphor is not radioactive and that radiation is harmful.',
    feedbackMiss: 'The key idea is that radium emits radiation that damages DNA/cells, while the modern phosphor emits none.',
  },
  q3_d: {
    marks: 2,
    exemplar: '²¹⁰Pb (Z=82, A=210): protons=82, neutrons=210−82=128, electrons=82. ²¹⁴Bi (Z=83, A=214): protons=83, neutrons=214−83=131, electrons=83. (1 mark for each complete correct column)',
    keyConcepts: ['Atomic structure', 'Protons, neutrons, electrons'],
    keywords: ['lead 82 protons 128 neutrons', 'bismuth 83 protons 131 neutrons', 'atomic number mass number'],
    feedbackHit: 'Correctly determined protons, neutrons and electrons for both isotopes.',
    feedbackMiss: 'Protons = atomic number. Neutrons = mass number − atomic number. Electrons = protons. For ²¹⁴Bi: n = 214 − 83 = 131.',
    blankAnswers: ['82', '128', '82', '83', '131', '83'],
  },
  q3_e: { type: 'mcq', correct: 2 },

  // Q4 — Silica-gel desiccant absorbency
  q4_a: {
    marks: 4,
    exemplar: 'IV: type of desiccant (or brand/sample). DV: volume of water absorbed (or volume remaining after filtering). CVs: any two of — mass of desiccant used; temperature of the water; initial volume of water; time of stirring; number of times stirred. (1 mark each for IV, DV, and each CV)',
    keyConcepts: ['Variables', 'Experimental design', 'Criterion C'],
    keywords: ['IV type desiccant', 'DV volume absorbed', 'CV mass temperature volume time', 'investigation variables'],
    feedbackHit: 'Correctly identified IV, DV and two controlled variables linked to the investigation.',
    feedbackMiss: 'IV is what you change (desiccant type), DV is what you measure (volume absorbed). CVs keep the test fair.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Table with: correct column headings (desiccant type; volume of water remaining/cm³ or volume absorbed/cm³); units in the header only (cm³); a row for each desiccant; space for at least three trials. (Award up to 4 marks: 1 headings, 1 units, 1 all desiccants included, 1 three trials per desiccant)',
    keyConcepts: ['Data presentation', 'Tables', 'Criterion C'],
    keywords: ['table headings', 'units cm³', 'desiccant type', 'volume water', 'three trials'],
    feedbackHit: 'Correctly structured table with clear headings, units and space for all trials.',
    feedbackMiss: 'Headings should include what is being measured and in what unit. Always include a column for repeats.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Bar chart with: appropriate title; x-axis = type of desiccant (labelled); y-axis = volume/cm³ starting at 0 (labelled with units); bars for the three desiccants plotted correctly. (1 mark each for title, axis labels, scale, data accuracy)',
    keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'],
    keywords: ['bar chart', 'title', 'x-axis desiccant type', 'y-axis volume cm³', 'data plotted'],
    feedbackHit: 'Correctly drew a bar chart with title, labelled axes, correct scale and accurate data.',
    feedbackMiss: 'For a bar chart, x-axis shows categories (desiccant type), y-axis starts at 0 and shows the measured value with units.',
  },
  q4_d: { type: 'mcq', correct: 1 },
  q4_e: {
    marks: 3,
    exemplar: 'Desiccant 1. Calculation: volume remaining = 60 cm³; volume absorbed = 400 − 60 = 340 cm³. Justification: Desiccant 1 absorbs exactly 340 cm³ so it meets the requirement / it absorbs the most water. (1 mark for identifying the desiccant; 1 mark for the calculation; 1 mark for justification)',
    keyConcepts: ['Data analysis', 'Calculation from raw data'],
    keywords: ['desiccant 1', '400 − 60 = 340', 'volume absorbed', 'calculation justification'],
    feedbackHit: 'Correctly identified Desiccant 1, calculated volume absorbed and justified with data.',
    feedbackMiss: 'Volume absorbed = 400 − volume remaining. Desiccant 1: 400 − 60 = 340 cm³, which meets the requirement.',
  },

  // Q5 — Single-use vs washable sponges + experimental design
  q5_a: {
    marks: 5,
    exemplar: 'Environmental impacts for each type [max 2]: Single-use — landfill/incineration waste, plastic scourer not biodegradable, energy used to keep manufacturing replacements. Washable — hot water and energy to wash, detergent use, still needs replacing eventually. Advantages/disadvantages linked [max 2] with clear reasoning. Concluding appraisal of which causes less harm, linked to earlier arguments.',
    keyConcepts: ['Environmental impact', 'Criterion D evaluation', 'Sponges'],
    keywords: ['single-use sponge landfill', 'washable sponge water energy', 'environmental impact', 'appraisal conclusion'],
    feedbackHit: 'Provided environmental impacts for both types, advantages and disadvantages, and a justified conclusion.',
    feedbackMiss: 'Consider both sides: single-use creates landfill waste; washable uses water/energy. Give a reasoned conclusion.',
  },
  q5_b: {
    marks: 15,
    exemplar: 'Band 4 (13–15): IV (sponge brand) and DV (volume absorbed) identified; at least two CVs stated; all five brands and three trials; equipment fully described and relevant; complete replicable method that could produce relevant data. Band 3 (9–12): IV, DV and one CV; equipment listed; method that could be followed. Band 2 (5–8): some variables implied; method attempted but insufficient detail. Band 1 (1–4): attempt at a method with minimal relevance.',
    keyConcepts: ['Criterion B', 'Experimental design', 'Investigation method'],
    keywords: ['IV sponge brand', 'DV volume absorbed', 'CV mass temperature time', '5 brands 3 trials', 'replicable method'],
    feedbackHit: 'Designed a full investigation with clearly stated variables, sufficient data collection and a complete method.',
    feedbackMiss: 'State IV (sponge brand), DV (volume absorbed), at least 2 CVs, equipment, all 5 brands with 3 trials, and a step-by-step method.',
  },

  // Q6 — Sponge composition data analysis
  q6_a: {
    marks: 3,
    exemplar: 'Any three reasonable data-linked statements: (1) The suggestion is not supported — the most absorbent sponge is SpongeKing. (2) SpongeKing has the least cellulose foam (8 g). (3) The polyurethane foam also affects the volume of water absorbed. (4) Volume absorbed depends on the masses of both foams. (1 mark each, max 3; do not credit the same idea twice)',
    keyConcepts: ['Data analysis', 'Criterion C'],
    keywords: ['SpongeKing most absorbent', 'least cellulose', 'polyurethane foam affects absorption', 'data statements'],
    feedbackHit: 'Made three clear, data-linked statements correctly interpreting the sponge absorbency data.',
    feedbackMiss: 'Link each statement to the data. Note which sponge absorbs most and look at its cellulose and polyurethane content.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'If–then–because: e.g. (1) If the mass of cellulose foam increases, then the volume of water absorbed increases, because cellulose absorbs water — BUT the data does not support this, since SpongeKing has the least cellulose (8 g) yet absorbs the most (355 cm³). (2) If the total mass of foam increases, then more water is absorbed, because both foams take in water. Must contain a clear if–then–because structure referring to the data.',
    keyConcepts: ['If–then–because reasoning', 'Criterion B'],
    keywords: ['if then because', 'cellulose increases water absorbed', 'SpongeKing contradicts', 'reasoning framework'],
    feedbackHit: 'Correctly used the if–then–because framework and referred to the data (including the contradicting brand).',
    feedbackMiss: 'Structure: If [condition], then [result], because [explanation]. Then check the data — SpongeKing contradicts the suggestion.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'The polyurethane foam has open pores that trap grease and solid particles from the dirty water (1 mark), so the cellulose foam can absorb the (cleaner) water (1 mark).',
    keyConcepts: ['Sponge structure', 'Absorption', 'Criterion B'],
    keywords: ['polyurethane open pores', 'traps grease particles', 'cellulose absorbs water', 'sponge function'],
    feedbackHit: 'Correctly explained that the polyurethane foam traps particles so the cellulose can absorb the water.',
    feedbackMiss: 'The polyurethane foam acts like a filter, trapping grease/particles and leaving water for the cellulose to absorb.',
  },

  // Q7 — Food colouring chromatography of sweets
  q7_a: { type: 'mcq', correct: 2 },
  q7_b: {
    marks: 3,
    exemplar: 'The other dyes do not have the same spots in the same positions as the sample. Dye A has only two spots — it is missing the amber (yellow) component. Dye B is missing the blue spot. Dye D has an extra green spot that is not present in the sample. (WTTE — 1 mark per correct explanation, max 3)',
    keyConcepts: ['Chromatography', 'Spot patterns', 'Criterion C'],
    keywords: ['different components', 'Dye A missing amber', 'Dye B missing blue', 'Dye D extra green', 'chromatography comparison'],
    feedbackHit: 'Correctly explained why each of the other dyes cannot be the one in the sweet sample.',
    feedbackMiss: 'A match needs ALL spots to correspond. A is missing the amber spot; B is missing the blue spot; D has an extra green spot.',
  },
  q7_c: {
    marks: 3,
    exemplar: 'Rf = distance moved by the spot ÷ distance moved by the solvent front = 18 mm ÷ 37 mm = 0.49 (accept 0.44–0.54). Award: 1 mark for correct distances; 1 mark for applying the Rf formula; 1 mark for an answer in range.',
    keyConcepts: ['Rf value', 'Chromatography calculation'],
    keywords: ['Rf = distance spot / distance solvent front', '18 mm', '37 mm solvent front', '0.49', 'chromatography'],
    feedbackHit: 'Correctly used the distances and calculated the Rf value within the acceptable range.',
    feedbackMiss: 'Rf = distance to spot ÷ distance to solvent front = 18/37 = 0.49. Measure both from the start line.',
  },

  // Q8 — Polymers: functional groups & PP vs PLA
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
    exemplar: 'Properties of PP needed for a hot-food tub [max 2]: high softening temperature (160 °C) so it holds hot meals; cheap; waterproof; rigid/strong. Advantage of PLA [max 1]: biodegradable / compostable; made from a renewable plant source; uses less oil; lower carbon footprint. Disadvantage of PLA [max 1]: softens at only 60 °C so it deforms with very hot food; more expensive (£38 vs £22 per 1000). Any two further points [max 2]. Conclusion linking all arguments (1 mark). Criterion D rubric.',
    keyConcepts: ['Criterion D', 'PP vs PLA', 'Environmental evaluation', 'Plastics'],
    keywords: ['PP properties heat cheap', 'PLA biodegrade renewable', 'PLA softens 60', 'PLA more expensive', 'hot-food tub', 'justified conclusion'],
    feedbackHit: 'Fully compared PP and PLA with properties, advantages, disadvantages and a reasoned conclusion.',
    feedbackMiss: 'Outline the properties a hot-food tub needs, then compare PP with PLA. State PLA advantages AND disadvantages, then a justified conclusion.',
  },

  // Q9 — Seaweed-based vs oil-based films essay (Crit D)
  q9_: {
    marks: 13,
    exemplar: 'Band 4 (10–13): Sustainability — clear statement that oil-based films are unsustainable (finite fossil feedstock) or seaweed films are sustainable (renewable, fast-growing), supported with reasoning. Environmental — clear statement of environmental impact of both production and end of use of both film types (greenhouse gases vs composting/dissolving; ocean persistence). Social — two social impacts (jobs, cost, health, marine wildlife) at any stage. Appraisal with scientific reasoning. Band 3 (7–9): clear statements for each dimension but fewer supporting details. Band 2 (3–6): some statements with limited detail. Band 1 (1–2): one social impact implied.',
    keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Social impact', 'Seaweed-based films'],
    keywords: ['oil-based unsustainable', 'seaweed-based sustainable', 'environmental impact production end of use', 'social impacts jobs health wildlife', 'scientific reasoning appraisal'],
    feedbackHit: 'Addressed sustainability, environmental and social impacts for both film types with scientific reasoning and a conclusion.',
    feedbackMiss: 'Structure: (1) Sustainability — fossil feedstock vs renewable seaweed. (2) Environmental impacts of production AND end of use. (3) Social impacts — jobs, health, marine life. (4) Justified conclusion.',
  },
}
