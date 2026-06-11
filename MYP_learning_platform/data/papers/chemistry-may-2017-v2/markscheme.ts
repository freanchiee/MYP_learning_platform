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

export const MS: MSRecord = {
  // Q1 — Medieval Stained Glass and Redox
  q1_a: {
    marks: 2,
    exemplar: 'Iron(II) oxide: FeO [1]; Cobalt(II) oxide: CoO [1]',
    keyConcepts: ['Chemical formulae', 'Transition metal oxides'],
    keywords: ['FeO', 'CoO', 'iron(II) oxide', 'cobalt(II) oxide'],
    feedbackHit: 'Correct formulae for both glass pigments.',
    feedbackMiss: 'Iron(II) oxide is FeO (Fe in +2 state). Cobalt(II) oxide is CoO (Co in +2 state).',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Any named transition metal other than Fe or Co (e.g. nickel, chromium, manganese, copper) [1]; Justify with any two of: d-block/transition metal [1], variable oxidation states [1], forms coloured compounds [1], named metallic property [1].',
    keyConcepts: ['Transition metals', 'Properties of d-block elements'],
    keywords: ['transition metal', 'd-block', 'variable oxidation states', 'coloured compounds'],
    feedbackHit: 'Correct identification with two valid justifications.',
    feedbackMiss: 'Any d-block transition metal other than Fe or Co. Justify with: variable oxidation states, coloured compounds, d-block position, or metallic properties.',
  },
  q1_c: {
    marks: 2,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q1_d: {
    marks: 3,
    exemplar: 'Watercolour wash is soluble in water [1]; oil-based enamel is not soluble in water [1]; so watercolour dissolves/washes away but enamel does not [1]. (WTTE)',
    keyConcepts: ['Solubility', 'Like dissolves like'],
    keywords: ['soluble', 'water', 'insoluble', 'oil', 'watercolour', 'enamel'],
    feedbackHit: 'Correct solubility explanation.',
    feedbackMiss: 'Watercolour is water-soluble; oil-based enamel uses organic solvents and is immiscible with water.',
  },
  q1_e: {
    marks: 4,
    exemplar: 'Statement about which paint causes less damage with valid reason [1]; any three further environmental points [1 each]: watercolour uses water (non-toxic solvent) [1]; oil enamel uses organic solvents (soil/water pollution) [1]; watercolour pigments more biodegradable [1]; enamel more durable (less repainting) [1]; max 4 marks.',
    keyConcepts: ['Environmental chemistry', 'Sustainability', 'Solvents'],
    keywords: ['environmental', 'solvent', 'pollution', 'biodegradable', 'toxic'],
    feedbackHit: 'Statement plus three supported environmental points.',
    feedbackMiss: 'Consider solvent type, biodegradability, durability trade-offs.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O [1 each side correct; both marks for fully balanced]',
    keyConcepts: ['Half-equations', 'Balancing redox', 'Dichromate'],
    keywords: ['Cr₂O₇²⁻', 'Cr³⁺', '14H⁺', '6e⁻', '7H₂O', 'balanced'],
    feedbackHit: 'Correctly balanced: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.',
    feedbackMiss: 'Balance Cr (×2 on right), O (7H₂O on right), H (14H⁺ on left), then charge: −2+14−6=+6; right 2(+3)=+6 ✓. Six electrons needed.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Reduction [1]; because Cr⁶⁺ / Cr(VI) gains electrons to form Cr³⁺ / Cr(III) [1].',
    keyConcepts: ['Reduction', 'Electron gain', 'Chromium oxidation states'],
    keywords: ['reduction', 'gains electrons', 'Cr⁶⁺', 'Cr³⁺'],
    feedbackHit: 'Correctly identified as reduction; Cr⁶⁺ → Cr³⁺ gains electrons.',
    feedbackMiss: 'Reduction = gain of electrons. Chromium changes from +6 (in Cr₂O₇²⁻) to +3, gaining 3 electrons per atom.',
  },

  // Q2 — Blueprint Photography
  q2_a: {
    marks: 3,
    exemplar: 'Correct structural formula: H–C(=O)–OH with the C=O and O–H bonds shown [1]; single carbon shown correctly [1]; functional group named as carboxyl / carboxylic acid group [1].',
    keyConcepts: ['Structural formulae', 'Carboxylic acids', 'Functional groups'],
    keywords: ['structural formula', 'carboxyl', 'HCOOH', 'methanoic acid', 'H-C=O-OH'],
    feedbackHit: 'Correct methanoic acid structure with carboxyl group named.',
    feedbackMiss: 'Methanoic acid: H–COOH. The –COOH group is the carboxyl (carboxylic acid) functional group. Only one carbon.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Neutralization.',
    keyConcepts: ['Acid-base reactions', 'Neutralization'],
    keywords: ['neutralization', 'acid-base'],
    feedbackHit: 'Correct: neutralization.',
    feedbackMiss: 'Acid reacting with a base = neutralization.',
  },
  q2_c: {
    marks: 1,
    exemplar: '126 g/mol (or amu). [C₆H₆O₃: 6×12 + 6×1 + 3×16 = 72 + 6 + 48 = 126]',
    keyConcepts: ['Molecular mass', 'Relative molecular mass'],
    keywords: ['126', 'g/mol', 'pyrogallol', 'C₆H₆O₃'],
    feedbackHit: 'Correct: Mr = 126 g/mol.',
    feedbackMiss: 'Mr(C₆H₆O₃) = 6(12) + 6(1) + 3(16) = 72 + 6 + 48 = 126 g/mol.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Molar mass of Ag = 108 g/mol [1]; Molar mass of AgBr = 108 + 80 = 188 g/mol [1]; Moles Ag = 3240/108 = 30.0 mol → moles AgBr = 30.0 mol [1]; Mass AgBr = 30.0 × 188 = 5640 g = 5.64 kg [1]. (ECF; sig fig independent.)',
    keyConcepts: ['Stoichiometry', 'Mole calculations', 'Molar mass'],
    keywords: ['moles', 'AgBr', '188', '5640', '5.64', '30 mol'],
    feedbackHit: 'Correct: 30.0 mol Ag → 30.0 mol AgBr → 5.64 kg.',
    feedbackMiss: 'Mr AgBr=188. Moles Ag=3240/108=30.0. Moles AgBr=30.0 (1:1). Mass=30.0×188=5640 g=5.64 kg.',
  },

  // Q3 — Earthquake-Zone Water Purification
  q3_a: {
    marks: 1,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q3_b: {
    marks: 2,
    exemplar: 'Water vapour loses heat/energy [1]; condensation — changes from gas/vapour to liquid [1].',
    keyConcepts: ['Condensation', 'Kinetic theory'],
    keywords: ['condensation', 'loses energy', 'vapour to liquid'],
    feedbackHit: 'Correct: vapour loses energy and condenses.',
    feedbackMiss: 'The vapour loses energy on the cool panel and condenses — gas → liquid.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Two essential items correctly identified from: filter paper, funnel, beaker/flask [1]; all three correctly labelled [1]; correctly arranged for filtration [1].',
    keyConcepts: ['Filtration', 'Laboratory equipment'],
    keywords: ['filter paper', 'funnel', 'beaker', 'filtration'],
    feedbackHit: 'All three correctly labelled and arranged.',
    feedbackMiss: 'Filtration: filter paper inside funnel, collection beaker underneath.',
  },
  q3_d: {
    marks: 3,
    exemplar: 'Blank 1: high [1]; Blank 2: decreases [1]; Blank 3: ions [1].',
    keyConcepts: ['Conductivity', 'Ionic solutions', 'Silver nitrate testing'],
    keywords: ['high conductivity', 'decreases', 'ions', 'Ag⁺', 'AgCl'],
    feedbackHit: 'All three blanks correct: high, decreases, ions.',
    feedbackMiss: 'Initially Ag⁺ ions give HIGH conductivity. As Cl⁻ added: Ag⁺ + Cl⁻ → AgCl↓ removes ions → conductivity DECREASES.',
    blankAnswers: ['high', 'decreases', 'ions'],
  },
  q3_e: {
    marks: 2,
    exemplar: 'Sharp/sudden drop in conductivity between 20–25 cm³ [1]; silver ions completely precipitated as AgCl at equivalence point [1].',
    keyConcepts: ['Equivalence point', 'Precipitation'],
    keywords: ['sharp drop', 'equivalence', 'AgCl', 'silver ions removed'],
    feedbackHit: 'Correct: sharp drop + equivalence point.',
    feedbackMiss: 'Equivalence point: all Ag⁺ precipitated as AgCl → no conducting ions → sharp drop.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Dependent variable: conductivity / water purity / dissolved ion concentration [1]; Control variable: temperature / same water source / same volume / same equipment [1].',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['dependent variable', 'control variable', 'conductivity', 'temperature'],
    feedbackHit: 'Correct DV and CV.',
    feedbackMiss: 'DV = what changes (conductivity/purity). CV = what stays the same (temperature, source, equipment).',
  },
  q3_g: {
    marks: 14,
    exemplar: 'Score band descriptors:\n1–2: Attempt at research question; attempts to plan method.\n3–5: Research question links filter type to conductivity; plans to measure conductivity using one filter method; insufficient detail.\n6–9: Correct research question; tests two filter methods; equipment for volume OR temperature; method could be followed.\n10–14: Correct research question with justification; all three filter types tested; equipment for volume AND temperature; complete, fully-explained, repeatable method; plans to calculate mean.',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Ion removal'],
    keywords: ['research question', 'conductivity', 'three filters', 'repeat', 'mean', 'volume', 'temperature'],
    feedbackHit: 'Excellent: all three filters, full method, volume and temperature equipment, means.',
    feedbackMiss: 'For top marks: research question + all 3 filters + conductivity + volume AND temperature equipment + complete repeatable method + means.',
  },

  // Q4 — South-East Asian Fuels
  q4_a: {
    marks: 2,
    exemplar: 'LPG: 35.8% use in urban areas [1]; Crop waste: 11.2% use in rural areas [1].',
    keyConcepts: ['Data reading', 'Tables'],
    keywords: ['LPG', '35.8', 'crop waste', '11.2', 'urban', 'rural'],
    feedbackHit: 'Correct values from table.',
    feedbackMiss: 'LPG = 35.8% urban; Crop waste = 11.2% rural.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Calcium hydroxide solution / Ca(OH)₂ / Limewater [1]; bubble gas through the limewater [1]; turns white or cloudy / precipitate / CaCO₃ forms [1]. (WTTE)',
    keyConcepts: ['Testing for gases', 'Limewater test', 'CO₂'],
    keywords: ['limewater', 'Ca(OH)₂', 'bubble', 'white', 'cloudy', 'CaCO₃'],
    feedbackHit: 'Correct: limewater, bubble, turns white.',
    feedbackMiss: 'Bubble CO₂ through limewater (Ca(OH)₂). Positive: turns milky/white — CaCO₃ forms.',
  },
  q4_c: {
    marks: 11,
    exemplar: 'Score band descriptors:\n1–3: Either wood or crop waste identified; attempt at method.\n4–6: Both fuels; DV=volume CO₂/gas; mass of fuel controlled; partial method.\n7–9: Both fuels; DV and CV; ≥3 trials per fuel; burn, collect gas in syringe, measure volume.\n10–11: All above + safety concern.',
    keyConcepts: ['Experimental design', 'Combustion', 'Gas collection'],
    keywords: ['wood', 'crop waste', 'volume CO₂', 'syringe', 'mass', 'repeat', 'safety'],
    feedbackHit: 'Full marks: both fuels, DV/CV, 3 trials, syringe, safety.',
    feedbackMiss: 'Both fuels, volume DV, mass CV, ≥3 repeats, burn/combust, syringe, measure volume, safety.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'All CO₂ is collected / no CO₂ is lost.',
    keyConcepts: ['Experimental assumptions'],
    keywords: ['all CO₂', 'no loss', 'assumption'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'Assumption: all gas is captured — none escapes.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'Smoke = incomplete combustion [1]; less CO₂ than expected [1]; results not valid/accurate [1]. (WTTE)',
    keyConcepts: ['Incomplete combustion', 'Validity'],
    keywords: ['incomplete combustion', 'less CO₂', 'not valid', 'smoke'],
    feedbackHit: 'Correct: smoke → incomplete combustion → less CO₂ → invalid.',
    feedbackMiss: 'Smoke means incomplete combustion → less CO₂ → underestimates true yield → validity reduced.',
  },
  q4_f: {
    marks: 1,
    exemplar: 'Increase air flow / more oxygen / more air for complete combustion. (WTTE)',
    keyConcepts: ['Combustion conditions', 'Improvement'],
    keywords: ['more air', 'oxygen', 'complete combustion'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'Ensure sufficient oxygen so all carbon burns completely to CO₂.',
  },

  // Q5 — Titration and CO₂ Calculation
  q5_a: {
    marks: 2,
    exemplar: 'Average = (18.75 + 21.25) / 2 = 20.00 ml [1]; correct to 4 significant figures [1].',
    keyConcepts: ['Titration', 'Average calculation', 'Significant figures'],
    keywords: ['20.00', 'average', 'titration', '4 s.f.'],
    feedbackHit: 'Correct: 20.00 ml to 4 s.f.',
    feedbackMiss: 'Average = (18.75 + 21.25) ÷ 2 = 20.00 ml. Must be 4 s.f. (20.00, not 20).',
  },
  q5_b: {
    marks: 2,
    exemplar: '1.76 (g) [1]; unit: g [1]. (Unit mark independent.)',
    keyConcepts: ['Graph reading', 'Units'],
    keywords: ['1.76', 'g', 'CO₂', 'graph', '20 cm³'],
    feedbackHit: 'Correct: 1.76 g at 20 cm³.',
    feedbackMiss: 'Read graph at x = 20 cm³. Value ≈ 1.76 g. Units (g) needed.',
  },
  q5_c: {
    marks: 4,
    exemplar: '1.76 × 10 = 17.6 g CO₂ [1; ECF]; 17.6/44 = 0.400 mol [1]; 0.400 × 22.7 = 9.08 [1; award 3 for correct mass]; dm³ or L [1; unit independent].',
    keyConcepts: ['Mole calculations', 'Gas volumes', 'Molar volume'],
    keywords: ['17.6', '0.400', '9.08', 'dm³', '44', '22.7'],
    feedbackHit: 'Correct: 17.6 g → 0.400 mol → 9.08 dm³.',
    feedbackMiss: 'Step 1: 1.76×10=17.6 g. Step 2: 17.6/44=0.400 mol. Step 3: 0.400×22.7=9.08 dm³.',
  },

  // Q6 — Acid Rain Data
  q6_a: {
    marks: 2,
    exemplar: 'Data in numerical time order [1]; all volumes in cm³ [1].',
    keyConcepts: ['Data processing', 'Tables', 'Units'],
    keywords: ['numerical order', 'cm³', 'units', 'table'],
    feedbackHit: 'Correct time order with uniform cm³ units.',
    feedbackMiss: 'Present in table with time ascending; convert all to cm³.',
  },
  q6_b: {
    marks: 2,
    type: 'mcq',
    correct: 0,
  } as MCQEntry,
  q6_c: {
    marks: 2,
    exemplar: 'Value at t = 90 s identified as outlier [1]; estimated value ≈ 23.2 cm³ [1]. (Units required.)',
    keyConcepts: ['Outliers', 'Data analysis'],
    keywords: ['outlier', '90 s', '15.8', '23.2 cm³', 'anomalous'],
    feedbackHit: 'Correct: 90 s value (15.8 cm³) is outlier; expected ~23.2 cm³.',
    feedbackMiss: 'The 90 s value (15.8 cm³) is far below the trend. Based on surrounding values (23.1 at 80 s, 23.2 at 100 s), expected ≈ 23.2 cm³.',
  },
  q6_d: {
    marks: 1,
    exemplar: 'Repeat the measurement at 90 s AND calculate the average value.',
    keyConcepts: ['Reliability', 'Repeating measurements'],
    keywords: ['repeat', 'average', '90 s', 'validity'],
    feedbackHit: 'Correct: repeat and average.',
    feedbackMiss: 'Repeat measurement at t = 90 s and calculate mean.',
  },

  // Q7 — Germanium Properties
  q7_a: {
    marks: 2,
    exemplar: 'Group 14 (accept Group IVA) [1]; Period 4 [1]. (Check group and period are correctly paired.)',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Germanium'],
    keywords: ['Group 14', 'Group IVA', 'Period 4', 'germanium', 'Ge'],
    feedbackHit: 'Correct: Group 14, Period 4.',
    feedbackMiss: 'Germanium (Ge, Z=32) is in Group 14 (IVA) and Period 4.',
  },
  q7_b: {
    marks: 1,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q7_c: {
    marks: 1,
    exemplar: 'Low reactivity with air/water OR high chemical stability / does not corrode readily. (WTTE)',
    keyConcepts: ['Reactivity', 'Chemical stability'],
    keywords: ['low reactivity', 'stable', 'unreactive', 'corrosion resistant'],
    feedbackHit: 'Correct: low reactivity / high stability.',
    feedbackMiss: 'Germanium survives decades of use because it has low chemical reactivity.',
  },
  q7_d: {
    marks: 2,
    exemplar: '32 protons [1]; 42 neutrons (74 − 32 = 42) [1]. (Accept 42n, 32p. Do NOT accept "42, 32" without labels.)',
    keyConcepts: ['Atomic structure', 'Protons and neutrons'],
    keywords: ['32 protons', '42 neutrons', 'mass number', 'atomic number', '74Ge'],
    feedbackHit: 'Correct: 32 protons, 42 neutrons.',
    feedbackMiss: 'Protons = atomic number = 32. Neutrons = mass number − atomic number = 74 − 32 = 42.',
  },

  // Q8 — Cadmium Pollution Discussion (Criterion D)
  q8_: {
    marks: 14,
    exemplar: 'Score band descriptors:\n1–2: Cadmium adversely affects health; cadmium levels have changed.\n3–6: Cadmium linked to bone/kidney disease graph; cadmium accumulates in body; levels decreased after restrictions; societal impact mentioned.\n7–14: Cadmium correctly linked to osteoporosis and kidney failure; levels decreased since industrial restrictions; cadmium bioaccumulates in crops near smelters; references second graph on bone disease vs cadmium level; explains why long-term low-level exposure is particularly dangerous; discusses wider societal costs (healthcare, disability); final appraisal of removing cadmium from manufacturing.',
    keyConcepts: ['Cadmium toxicity', 'Bioaccumulation', 'Public health', 'Criterion D evaluation'],
    keywords: ['blood cadmium', 'osteoporosis', 'kidney', 'restricted', 'bioaccumulate', 'society', 'appraisal'],
    feedbackHit: 'Excellent: both graphs used, bioaccumulation, long-term exposure risk, societal impact, appraisal.',
    feedbackMiss: 'Higher bands: both graphs, chronic low-level exposure risk, bioaccumulation in food chain, societal costs, concluding appraisal.',
  },

  // Q9 — Medical Device Battery Evaluation (Criterion D)
  q9_: {
    marks: 10,
    exemplar: 'Score band descriptors:\n1: Identifies chosen battery with supporting statement.\n2–3: Identifies battery with valid support; comparison with at least one other implied.\n4–6: Valid identification with 2+ statements; compares at least two others; environmental OR economic factor mentioned.\n7–10: Identifies battery with 2+ data-backed statements; compares ALL four battery types; environmental AND economic factors discussed; concluding appraisal considering all factors including safety rating.',
    keyConcepts: ['Battery technology', 'Medical applications', 'Environmental and economic evaluation', 'Criterion D'],
    keywords: ['Li-ion', 'NiCd', 'zinc-air', 'silver oxide', 'capacity', 'shelf life', 'cost', 'safety', 'environmental', 'appraisal'],
    feedbackHit: 'Excellent: best battery identified with data, all four compared, both factors plus safety, appraisal.',
    feedbackMiss: 'For top marks: choose one battery; compare ALL four; discuss environmental AND economic factors AND safety; balanced conclusion.',
  },
}
