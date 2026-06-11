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
  // Q1 — Terracotta / Nacrite clay
  q1_a: {
    marks: 1,
    exemplar: '9 oxygen atoms (5 from O₅ + 4 from (OH)₄)',
    keyConcepts: ['Chemical formulae', 'Counting atoms'],
    keywords: ['nacrite', 'Al₂Si₂O₅(OH)₄', '9 oxygen atoms'],
    feedbackHit: 'Correctly counted all oxygen atoms including those in the hydroxyl groups.',
    feedbackMiss: 'Remember to count oxygen in (OH)₄ — each OH contributes 1 oxygen. Total = 5 + 4 = 9.',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Aluminium: Group 3, Period 3. Silicon: Group 4, Period 3. (1 mark per element with both correct)',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['aluminium group 3 period 3', 'silicon group 4 period 3', 'periodic table position'],
    feedbackHit: 'Correctly identified the group and period for both aluminium and silicon.',
    feedbackMiss: 'Al is in Group 3, Period 3. Si is in Group 4, Period 3. Check the periodic table — period = row number, group = column number.',
    blankAnswers: ['3', '3', '4', '3'],
  },
  q1_c: { type: 'mcq', correct: 1 },

  // Q2 — Slinky / Steel + Lead cooling curve
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 2,
    exemplar: 'Low carbon steel: not strong enough / too malleable / would not hold the spring shape. Very high carbon steel: too brittle / would break / not malleable enough to form into a spring. (1 mark each)',
    keyConcepts: ['Properties of steel', 'Carbon content'],
    keywords: ['low carbon steel too soft', 'very high carbon steel brittle', 'slinky unsuitable'],
    feedbackHit: 'Correctly linked carbon content to the physical property that makes each type unsuitable.',
    feedbackMiss: 'Think about what property a Slinky needs: it must be springy and durable. Low carbon = too soft; very high carbon = too brittle.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'n = m / M = 405 g / 56 g mol⁻¹ = 7.2 mol (to 2 sig figs). Award: 1 mark for identifying M(Fe)=56; 1 mark for correct formula n=m/M; 1 mark for answer 7.23; 1 mark for 7.2 (2 sig figs).',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['moles', '405 g', 'M = 56', '7.2 mol', '2 significant figures'],
    feedbackHit: 'Correctly applied n = m/M and rounded to 2 significant figures.',
    feedbackMiss: 'Convert mass to grams: 0.405 kg = 405 g. Then n = 405/56 = 7.23 → round to 7.2 mol to 2 sig figs.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Solid',
    keyConcepts: ['Physical states', 'Cooling curve'],
    keywords: ['solid', 'point B', 'cooling curve', 'lead'],
    feedbackHit: 'Correctly identified the physical state of lead at point B.',
    feedbackMiss: 'Point B is below the plateau (melting/freezing point) on the cooling curve, so lead has fully solidified.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Point A (liquid): particles drawn in irregular arrangement, not touching in fixed positions, minimum 6 particles shown. Point B (solid): particles drawn in regular, close-packed arrangement at the base, minimum 6 particles. (1 mark each correct diagram)',
    keyConcepts: ['Particle model', 'Liquid and solid states'],
    keywords: ['irregular liquid arrangement', 'regular solid arrangement', 'particle diagram', 'close packed'],
    feedbackHit: 'Correctly drew irregular particles for liquid and regular lattice for solid.',
    feedbackMiss: 'In a liquid (A), particles are close but randomly arranged. In a solid (B), particles are in a regular lattice with no gaps.',
  },
  q2_f: {
    marks: 1,
    exemplar: '327 °C (accept 326–328 °C)',
    keyConcepts: ['Melting point', 'Cooling curve'],
    keywords: ['327 °C', 'melting point', 'lead', 'graph plateau'],
    feedbackHit: 'Correctly read the melting point of lead from the plateau on the cooling curve.',
    feedbackMiss: 'The melting point is where the curve is flat (plateau). Read the temperature value at that point.',
  },

  // Q3 — Radioactive toys / Atomic Energy Lab
  q3_a: {
    marks: 2,
    exemplar: 'Products: strontium nitrate + carbon dioxide + water. (1 mark for strontium nitrate; 1 mark for both carbon dioxide and water)',
    keyConcepts: ['Acid–carbonate reactions', 'Word equations'],
    keywords: ['strontium nitrate', 'carbon dioxide', 'water', 'acid carbonate reaction'],
    feedbackHit: 'Correctly identified all three products of the acid–carbonate reaction.',
    feedbackMiss: 'Acid + carbonate → salt + CO₂ + H₂O. Salt from strontium + nitric acid = strontium nitrate.',
  },
  q3_b: {
    marks: 3,
    exemplar: 'SrCO₃ + 2HNO₃ → Sr(NO₃)₂ + CO₂ + H₂O. Award: 1 mark for correct formulae for reactants; 1 mark for correct formulae for products; 1 mark for correct balancing (coefficient 2 before HNO₃).',
    keyConcepts: ['Balanced equations', 'Symbol equations'],
    keywords: ['SrCO₃', 'HNO₃', 'Sr(NO₃)₂', 'balanced equation', 'coefficient 2'],
    feedbackHit: 'Correctly wrote and balanced the equation with all correct formulae.',
    feedbackMiss: 'Sr(NO₃)₂ needs 2 NO₃⁻ groups, requiring 2HNO₃ on the left. Check all atoms are balanced.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Zinc sulphide is not radioactive / does not emit radiation. Radium/radioactive materials emit radiation which damages body cells / causes cancer / is harmful to health. (1 mark each)',
    keyConcepts: ['Radioactivity', 'Health hazards'],
    keywords: ['zinc sulphide not radioactive', 'radiation damages cells', 'health hazard', 'radium radioactive'],
    feedbackHit: 'Correctly stated that ZnS is not radioactive and that radiation is harmful to the body.',
    feedbackMiss: 'The key idea is that radium emits radiation that damages DNA/cells, while ZnS does not emit any radiation.',
  },
  q3_d: {
    marks: 2,
    exemplar: '²¹⁰Po (Z=84, A=210): protons=84, neutrons=126, electrons=84. ²¹⁰Pb (Z=82, A=210): protons=82, neutrons=128, electrons=82. (1 mark for each complete correct column)',
    keyConcepts: ['Atomic structure', 'Protons, neutrons, electrons'],
    keywords: ['polonium 84 protons 126 neutrons', 'lead 82 protons 128 neutrons', 'atomic number mass number'],
    feedbackHit: 'Correctly determined protons, neutrons and electrons for both isotopes.',
    feedbackMiss: 'Protons = atomic number (Z). Neutrons = mass number − atomic number. Electrons = protons (neutral atom). For ²¹⁰Po: Z=84, n=210−84=126.',
    blankAnswers: ['84', '126', '84', '82', '128', '82'],
  },
  q3_e: { type: 'mcq', correct: 2 },

  // Q4 — Hydrogels experiment
  q4_a: {
    marks: 4,
    exemplar: 'IV: type of hydrogel (or brand/sample). DV: volume of water absorbed (or volume remaining after filtering). CVs: any two of — mass of hydrogel used; temperature of water; initial volume of water; time of stirring; number of times stirred. (1 mark each for IV, DV, and each CV)',
    keyConcepts: ['Variables', 'Experimental design', 'Criterion B'],
    keywords: ['IV type hydrogel', 'DV volume absorbed', 'CV mass temperature volume time', 'investigation variables'],
    feedbackHit: 'Correctly identified IV, DV and two controlled variables with clear links to the investigation.',
    feedbackMiss: 'IV is what you change (hydrogel type), DV is what you measure (volume absorbed). CVs are things you keep the same to make it a fair test.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Table with: correct column headings (hydrogel type/brand; volume of water remaining/cm³ or volume absorbed/cm³); units in header only (cm³); minimum of two rows for different hydrogels; space for at least three trials. (Award up to 4 marks: 1 for headings, 1 for units, 1 for all five brands included, 1 for three trials per brand)',
    keyConcepts: ['Data presentation', 'Tables', 'Criterion C'],
    keywords: ['table headings', 'units cm³', 'hydrogel type', 'volume water', 'three trials'],
    feedbackHit: 'Correctly structured table with clear headings, units and space for all trials.',
    feedbackMiss: 'Headings should include what is being measured and in what unit. Always include a column for repeats.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Bar chart with: appropriate title; x-axis = type/sample of hydrogel (labelled); y-axis = volume/cm³ starting at 0 (labelled with units); bars for at least three hydrogels plotted correctly. (1 mark each for title, axes labels, scale, data accuracy)',
    keyConcepts: ['Bar chart', 'Graph skills', 'Criterion C'],
    keywords: ['bar chart', 'title', 'x-axis hydrogel type', 'y-axis volume cm³', 'data plotted'],
    feedbackHit: 'Correctly drew a bar chart with title, labelled axes, correct scale and accurate data.',
    feedbackMiss: 'For a bar chart, x-axis shows categories (hydrogel type), y-axis starts at 0 and shows the measured value with units.',
  },
  q4_d: { type: 'mcq', correct: 1 },
  q4_e: {
    marks: 3,
    exemplar: 'Hydrogel 1 (or equivalent with most absorbed). Calculation: volume remaining = 60 cm³; volume absorbed = 400 − 60 = 340 cm³. Justification: Hydrogel 1 absorbs exactly 340 cm³ so it meets the requirement / is the only one that can absorb this amount. (1 mark for identifying hydrogel; 1 mark for correct calculation; 1 mark for justification)',
    keyConcepts: ['Data analysis', 'Calculation from raw data'],
    keywords: ['hydrogel 1', '400 − 60 = 340', 'volume absorbed', 'calculation justification'],
    feedbackHit: 'Correctly identified the right hydrogel, calculated volume absorbed and justified with data.',
    feedbackMiss: 'Volume absorbed = 400 − volume remaining. Calculate for each hydrogel and find which equals or exceeds 340 cm³.',
  },

  // Q5 — Nappies comparison and experimental design
  q5_a: {
    marks: 5,
    exemplar: 'Environmental impacts for each type [max 2]: Disposable — waste water, pesticides from cotton, energy use, detergent use. Reusable — time to wash, need to buy new each time, hygiene considerations, cost of energy. Advantages/disadvantages linked [max 2]: stated with clear reasoning. Concluding appraisal linked to earlier arguments.',
    keyConcepts: ['Environmental impact', 'Criterion D evaluation', 'Nappies'],
    keywords: ['disposable nappy landfill', 'reusable nappy water energy', 'environmental impact', 'appraisal conclusion'],
    feedbackHit: 'Provided environmental impacts for both types, advantages and disadvantages, and a justified conclusion.',
    feedbackMiss: 'Consider both sides: disposable creates landfill waste; reusable uses water/energy for washing. Give a reasoned conclusion.',
  },
  q5_b: {
    marks: 15,
    exemplar: 'Band 4 (13–15): IV and DV identified; at least two CVs stated; all five brands and three trials; equipment fully described and relevant; complete replicable method that could produce relevant data. Band 3 (9–12): IV and DV and one CV; equipment listed; method described and could be followed. Band 2 (5–8): some variables implied; method attempted but insufficient detail. Band 1 (1–4): attempt at method with minimal relevance.',
    keyConcepts: ['Criterion B', 'Experimental design', 'Investigation method'],
    keywords: ['IV nappy brand', 'DV volume absorbed', 'CV mass temperature time', '5 brands 3 trials', 'replicable method'],
    feedbackHit: 'Designed a full investigation with clearly stated variables, sufficient data collection and a complete method.',
    feedbackMiss: 'Ensure you state IV (nappy brand), DV (volume absorbed), at least 2 CVs, equipment, all 5 brands with 3 trials, and a step-by-step method.',
  },

  // Q6 — Nappy brand data analysis
  q6_a: {
    marks: 3,
    exemplar: 'Any three reasonable data-linked statements: (1) The hypothesis is not supported — the most absorbent nappy is Pugs. (2) Pugs has the least amount of hydrogel. (3) The fluff pulp also affects the volume of water absorbed. (4) Volume absorbed depends on the composition of both fluff pulp and hydrogel. (1 mark each, max 3; do not credit the same idea in both categories)',
    keyConcepts: ['Data analysis', 'Criterion C'],
    keywords: ['Pugs most absorbent', 'least hydrogel', 'fluff pulp affects absorption', 'data statements'],
    feedbackHit: 'Made three clear, data-linked statements correctly interpreting the nappy absorbency data.',
    feedbackMiss: 'Link each statement to the data. Note which nappy absorbs most and look at its hydrogel and fluff pulp content.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'If–then–because: (1) If the total mass of absorbent material increases, then the mass of water absorbed increases, because fluff pulp and hydrogel both absorb water or hydrogel absorbs more. (2) If the mass of hydrogel increases, then the mass of water absorbed by the hydrogel increases, because hydrogel absorbs a larger proportion. (3) If the mass of fluff pulp is greater, then more water is absorbed, because fluff pulp absorbs water.',
    keyConcepts: ['If–then–because reasoning', 'Criterion B'],
    keywords: ['if then because', 'hydrogel increases water absorbed', 'fluff pulp absorbs water', 'reasoning framework'],
    feedbackHit: 'Correctly used the if–then–because framework to explain the role of hydrogel/fluff pulp.',
    feedbackMiss: 'Structure: If [condition], then [result], because [scientific explanation]. Must include all three parts.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'Fluff pulp removes ions or impurities or minerals from the urine (1 mark), so the hydrogel absorbs the (pure) water (1 mark).',
    keyConcepts: ['Fluff pulp function', 'Hydrogel', 'Criterion B'],
    keywords: ['fluff pulp removes ions', 'impurities', 'hydrogel absorbs water', 'nappy function'],
    feedbackHit: 'Correctly explained that fluff pulp removes ions/impurities so that the hydrogel can absorb water.',
    feedbackMiss: 'Fluff pulp acts as a pre-filter removing ions from urine, leaving water for the hydrogel to absorb.',
  },

  // Q7 — Chromatography of nappy dyes
  q7_a: { type: 'mcq', correct: 2 },
  q7_b: {
    marks: 3,
    exemplar: 'The other dyes do not have the same components as the nappy sample. Dye B only has two pigments in common with the sample (it is missing one). Dye D has an additional pigment which is not present in the nappy sample. (WTTE — 1 mark per correct explanation, max 3)',
    keyConcepts: ['Chromatography', 'Spot patterns', 'Criterion C'],
    keywords: ['different components', 'Dye B only two pigments', 'Dye D extra pigment', 'chromatography comparison'],
    feedbackHit: 'Correctly explained why each of the other dyes cannot be the one in the nappy sample.',
    feedbackMiss: 'Compare spot positions and number. A match requires ALL spots to correspond. Dye B is missing one; Dye D has an extra one.',
  },
  q7_c: {
    marks: 3,
    exemplar: 'Rf = distance moved by spot ÷ distance moved by solvent front. Yellow spot in Dye C: approximately 1.5–1.9 cm from origin. Solvent front: approximately 3.7 cm from origin. Rf ≈ 0.48 ± 0.05. Award: 1 mark for correct measurements; 1 mark for applying Rf formula; 1 mark for Rf value 0.43–0.53.',
    keyConcepts: ['Rf value', 'Chromatography calculation'],
    keywords: ['Rf = distance spot / distance solvent front', '1.5–1.9 cm', '3.7 cm solvent front', '0.48', 'chromatography'],
    feedbackHit: 'Correctly measured distances and calculated Rf value within acceptable range.',
    feedbackMiss: 'Rf = distance from origin to spot centre ÷ distance from origin to solvent front. Measure carefully from the start line.',
  },

  // Q8 — Plastics
  q8_a: {
    marks: 3,
    exemplar: 'A = Ester; B = Alcohol; C = Alkene. (1 mark each)',
    keyConcepts: ['Functional groups', 'Organic chemistry', 'Criterion A'],
    keywords: ['ester group', 'alcohol group', 'alkene group', 'monomer functional groups', 'organic chemistry'],
    feedbackHit: 'Correctly identified all three functional groups from the circled sections of the monomer structures.',
    feedbackMiss: 'Ester: C=O with O-C; Alcohol: O-H attached to carbon; Alkene: C=C double bond.',
    blankAnswers: ['Ester', 'Alcohol', 'Alkene'],
  },
  q8_b: {
    marks: 7,
    exemplar: 'Properties of PET for coffee cup [max 2]: heat resistant/appropriate melting point; cheap; waterproof; strong; rigid. Advantage of PLA [max 1]: can biodegrade; made from renewable material; does not release harmful toxins; saves greenhouse gases; higher heat capacity; can be reused; uses less oil. Disadvantage of PLA [max 1]: limited production capacity; more expensive. Any two further points [max 2]. Conclusion linking all arguments (1 mark). Criterion D rubric.',
    keyConcepts: ['Criterion D', 'PET vs PLA', 'Environmental evaluation', 'Plastics'],
    keywords: ['PET properties', 'PLA biodegrade', 'PLA renewable', 'PLA more expensive', 'coffee cup', 'justified conclusion'],
    feedbackHit: 'Fully compared PET and PLA with properties, advantages, disadvantages and a reasoned conclusion.',
    feedbackMiss: 'Outline PET properties needed for a cup, then compare each with PLA. State advantages AND disadvantages of PLA. End with a justified conclusion.',
  },

  // Q9 — Algae-based plastics essay (Crit D)
  q9_: {
    marks: 13,
    exemplar: 'Band 4 (10–13): Sustainability — clear statement that oil-based plastics are unsustainable or algae-based are sustainable, supported with scientific reasoning. Environmental — clear statement of environmental impact of both production and end of use of both plastic types, including algae-based. Social — clear statements of two social impacts (jobs, production time, health effects, environmental damage) at any stage. Appraisal with scientific reasoning. Band 3 (7–9): clear statements for each dimension but fewer supporting details. Band 2 (3–6): some statements with limited detail. Band 1 (1–2): one social impact implied.',
    keyConcepts: ['Criterion D', 'Sustainability', 'Environmental impact', 'Social impact', 'Algae-based plastics'],
    keywords: ['oil-based unsustainable', 'algae-based sustainable', 'environmental impact production end of use', 'social impacts jobs health', 'scientific reasoning appraisal'],
    feedbackHit: 'Addressed sustainability, environmental and social impacts for both plastic types with scientific reasoning and a conclusion.',
    feedbackMiss: 'Structure your answer: (1) Sustainability of production — fossil fuels vs algae. (2) Environmental impacts of production AND end of use for each. (3) Social impacts — jobs, health, affordability. (4) Justified conclusion.',
  },
}
