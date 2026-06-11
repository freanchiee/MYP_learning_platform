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
  // Q1 — Greek Pottery Pigments and Redox
  q1_a: {
    marks: 2,
    exemplar: 'Copper(II) oxide: CuO [1]; Manganese dioxide: MnO₂ [1]',
    keyConcepts: ['Chemical formulae', 'Transition metal oxides'],
    keywords: ['CuO', 'MnO₂', 'copper oxide', 'manganese dioxide'],
    feedbackHit: 'Correct formulae for both pigments.',
    feedbackMiss: 'Copper(II) oxide is CuO (Cu in +2 state, one O). Manganese dioxide is MnO₂ (Mn in +4 state, two O).',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Any named transition metal other than Cu or Mn (e.g. iron, cobalt, nickel, chromium, zinc) [1]; Justify with any two of: d-block/transition metal [1], variable oxidation states [1], forms coloured compounds [1], named metallic property [1].',
    keyConcepts: ['Transition metals', 'Properties of d-block elements'],
    keywords: ['transition metal', 'd-block', 'variable oxidation states', 'coloured compounds'],
    feedbackHit: 'Correct identification with two valid justifications.',
    feedbackMiss: 'Any d-block transition metal other than Cu or Mn works. Justify with properties shared by all transition metals: variable oxidation states, coloured compounds, d-block position.',
  },
  q1_c: {
    marks: 2,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q1_d: {
    marks: 3,
    exemplar: 'Watercolour wash is soluble in water [1]; oil-based glaze is not soluble in water [1]; so watercolour dissolves/washes away but oil-based glaze does not [1]. (WTTE)',
    keyConcepts: ['Solubility', 'Like dissolves like'],
    keywords: ['soluble', 'water', 'dissolves', 'oil', 'insoluble'],
    feedbackHit: 'Correct explanation using solubility difference.',
    feedbackMiss: 'Watercolour is water-soluble while oil-based glaze uses oil/organic solvent — immiscible with water, so cannot be rinsed off.',
  },
  q1_e: {
    marks: 4,
    exemplar: 'Statement about which paint causes less environmental damage with valid reason [1]; any three further points: watercolour uses water (less toxic solvent) [1]; oil-based uses organic solvents that pollute soil/water [1]; watercolour pigments may biodegrade more readily [1]; oil-based paint more durable (may reduce repainting) [1]; any valid chemically justified environmental point [1]. Maximum 4.',
    keyConcepts: ['Environmental impact of materials', 'Solvents', 'Sustainability'],
    keywords: ['environmental', 'solvent', 'pollution', 'biodegradable', 'toxic'],
    feedbackHit: 'Clear environmental statement plus three supporting points.',
    feedbackMiss: 'Consider solvent type (water vs organic), biodegradability, and longer-term trade-offs.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O [1 each side correct; both marks for fully balanced equation]',
    keyConcepts: ['Half-equations', 'Balancing redox', 'Permanganate'],
    keywords: ['MnO₄⁻', 'MnO₂', 'H⁺', 'e⁻', 'balanced', '4H⁺', '3e⁻', '2H₂O'],
    feedbackHit: 'Correctly balanced: MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O.',
    feedbackMiss: 'Balance Mn first (1:1), then O (2H₂O gives 4H on right needed → 4H⁺), then charge: −1+4−3=0; right=0 ✓. Three electrons are needed.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Reduction [1]; because Mn⁷⁺ / Mn(VII) gains electrons to form Mn⁴⁺ / Mn(IV) [1].',
    keyConcepts: ['Reduction', 'Electron gain', 'Oxidation states'],
    keywords: ['reduction', 'gains electrons', 'Mn⁷⁺', 'Mn⁴⁺'],
    feedbackHit: 'Correctly identified as reduction with Mn oxidation state change.',
    feedbackMiss: 'Reduction = gain of electrons. Mn goes from +7 (in MnO₄⁻) to +4 (in MnO₂), gaining 3 electrons.',
  },

  // Q2 — Daguerreotype Photography
  q2_a: {
    marks: 3,
    exemplar: 'Correct structural formula: CH₃–CH₂–C(=O)–OH with all bonds shown [1 for structure]; CH₂ group included correctly [1]; functional group named as carboxyl / carboxylic acid group [1].',
    keyConcepts: ['Structural formulae', 'Carboxylic acids', 'Functional groups'],
    keywords: ['structural formula', 'carboxyl', 'CH₃CH₂COOH', 'propanoic acid', 'carboxylic acid'],
    feedbackHit: 'Correct structure with three-carbon chain and carboxyl group named.',
    feedbackMiss: 'Propanoic acid: CH₃–CH₂–COOH. The –COOH group is the carboxyl (carboxylic acid) functional group.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Neutralization.',
    keyConcepts: ['Acid-base reactions', 'Neutralization'],
    keywords: ['neutralization', 'acid-base'],
    feedbackHit: 'Correct: neutralization.',
    feedbackMiss: 'When an acid reacts with a base, the reaction type is neutralization.',
  },
  q2_c: {
    marks: 1,
    exemplar: '170 g/mol (or amu). [C₇H₆O₅: 7×12 + 6×1 + 5×16 = 84 + 6 + 80 = 170]',
    keyConcepts: ['Molecular mass', 'Relative molecular mass'],
    keywords: ['170', 'g/mol', 'molecular mass', 'gallic acid', 'C₇H₆O₅'],
    feedbackHit: 'Correct: Mr = 170 g/mol.',
    feedbackMiss: 'Mr(C₇H₆O₅) = 7(12) + 6(1) + 5(16) = 84 + 6 + 80 = 170 g/mol.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Molar mass of Ag = 108 g/mol [1]; Molar mass of AgBr = 108 + 80 = 188 g/mol [1]; Moles Ag = 2160/108 = 20.0 mol → moles AgBr = 20.0 mol [1]; Mass AgBr = 20.0 × 188 = 3760 g = 3.76 kg [1]. (ECF applies; sig fig mark independent.)',
    keyConcepts: ['Stoichiometry', 'Mole calculations', 'Molar mass'],
    keywords: ['moles', 'AgBr', '188', '3760', '3.76', 'silver', '20 mol'],
    feedbackHit: 'Correct full calculation: 20.0 mol Ag → 20.0 mol AgBr → 3.76 kg.',
    feedbackMiss: 'Mr AgBr=188. Moles Ag=2160/108=20.0. Moles AgBr=20.0 (1:1). Mass=20.0×188=3760 g=3.76 kg.',
  },

  // Q3 — Cyclone-Zone Water Purification
  q3_a: {
    marks: 1,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q3_b: {
    marks: 2,
    exemplar: 'Water vapour loses heat/energy [1]; condensation occurs — changes from vapour/gas to liquid [1].',
    keyConcepts: ['Condensation', 'Kinetic theory', 'State changes'],
    keywords: ['condensation', 'loses energy', 'vapour to liquid', 'cooled surface'],
    feedbackHit: 'Correct: vapour loses energy and condenses.',
    feedbackMiss: 'On the cool surface the vapour loses energy (heat) and undergoes condensation — gas → liquid.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Two essential items correctly identified from: filter paper, funnel, collection beaker/flask [1]; all three correctly selected and labelled [1]; correctly arranged (funnel with filter paper, beaker below) [1].',
    keyConcepts: ['Filtration', 'Laboratory equipment', 'Separation techniques'],
    keywords: ['filter paper', 'funnel', 'beaker', 'filtration'],
    feedbackHit: 'All three items labelled and correctly arranged.',
    feedbackMiss: 'Filtration: filter paper inside funnel → collection beaker below.',
  },
  q3_d: {
    marks: 3,
    exemplar: 'Blank 1: high [1]; Blank 2: decreases [1]; Blank 3: ions [1].',
    keyConcepts: ['Conductivity', 'Ionic solutions', 'Silver nitrate testing'],
    keywords: ['high conductivity', 'decreases', 'ions', 'silver ions', 'AgCl'],
    feedbackHit: 'All three blanks correct: high, decreases, ions.',
    feedbackMiss: 'Initially Ag⁺ ions give HIGH conductivity. As Cl⁻ added: Ag⁺ + Cl⁻ → AgCl↓, conductivity DECREASES as IONS are removed.',
    blankAnswers: ['high', 'decreases', 'ions'],
  },
  q3_e: {
    marks: 2,
    exemplar: 'Sharp/sudden drop in conductivity between 20–25 cm³ [1]; all silver ions precipitated as AgCl at the equivalence point [1].',
    keyConcepts: ['Equivalence point', 'Precipitation', 'Conductimetric titration'],
    keywords: ['sharp drop', 'equivalence', 'AgCl', 'silver ions removed'],
    feedbackHit: 'Correct: sharp drop + equivalence point explanation.',
    feedbackMiss: 'At equivalence point all Ag⁺ is precipitated — no conducting ions → conductivity drops sharply.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Dependent variable: conductivity / water purity / number of microbes [1]; Control variable: temperature / same water source / same volume / same equipment [1].',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['dependent variable', 'control variable', 'conductivity', 'temperature'],
    feedbackHit: 'Correct DV and CV.',
    feedbackMiss: 'DV = what you measure (conductivity/purity). CV = what you keep the same (temperature, source water, equipment).',
  },
  q3_g: {
    marks: 14,
    exemplar: 'Score band descriptors:\n1–2: Attempt at research question; attempts to plan a method.\n3–5: Research question links filter type to lowest conductivity; plans to measure conductivity using one method; insufficient detail.\n6–9: Correct research question; measures conductivity of two purification methods; equipment for volume OR temperature; method could be followed.\n10–14: Correct research question with justification; all three filter types tested; equipment for volume AND temperature listed; complete fully-explained method; plans to repeat and calculate mean.',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Water filtration'],
    keywords: ['research question', 'conductivity', 'three filters', 'repeat', 'mean', 'volume', 'temperature'],
    feedbackHit: 'Excellent: all three filters, full method, volume and temperature equipment, mean calculated.',
    feedbackMiss: 'For top marks: research question + all 3 filters + conductivity measurement + volume AND temperature + complete repeatable method + means.',
  },

  // Q4 — East African Fuels
  q4_a: {
    marks: 2,
    exemplar: 'Charcoal: 39.5% in urban areas [1]; Crop waste: 7.2% in rural areas [1].',
    keyConcepts: ['Data reading', 'Tables'],
    keywords: ['charcoal', '39.5', 'crop waste', '7.2', 'urban', 'rural'],
    feedbackHit: 'Correct values from table.',
    feedbackMiss: 'Charcoal = 39.5% urban (highest); Crop waste = 7.2% rural.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Calcium hydroxide solution / Ca(OH)₂ / Limewater [1]; bubble gas through the limewater [1]; turns white or cloudy / precipitate/CaCO₃ forms if CO₂ present [1]. (WTTE)',
    keyConcepts: ['Testing for gases', 'Limewater test', 'Carbon dioxide'],
    keywords: ['limewater', 'Ca(OH)₂', 'bubble', 'white', 'cloudy', 'CaCO₃'],
    feedbackHit: 'Correct: limewater, bubble through, turns white.',
    feedbackMiss: 'Bubble gas through limewater (Ca(OH)₂). Positive result: turns milky/white — CaCO₃ precipitate forms.',
  },
  q4_c: {
    marks: 11,
    exemplar: 'Score band descriptors:\n1–3: Either wood or dung identified; attempt at method.\n4–6: Both fuels; DV=volume of CO₂/gas; mass of fuel controlled; partial method.\n7–9: Both fuels; DV and CV correct; 3+ trials per fuel; method with burning, gas collection in syringe, volume measured.\n10–11: All above + safety concern mentioned.',
    keyConcepts: ['Experimental design', 'Combustion', 'Gas collection'],
    keywords: ['wood', 'dung', 'volume CO₂', 'syringe', 'mass', 'repeat', 'three trials', 'safety'],
    feedbackHit: 'Full marks: both fuels, correct DV/CV, 3 trials, syringe collection, safety.',
    feedbackMiss: 'Must include: both fuels, volume gas DV, mass CV, ≥3 repeats, burn/combust, collect in syringe, measure volume, safety.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'All CO₂ is collected / no CO₂ is lost.',
    keyConcepts: ['Experimental assumptions'],
    keywords: ['all CO₂', 'no loss', 'assumption'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'Assumption: all gas produced is captured — none escapes.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'Smoke = incomplete combustion [1]; less CO₂ produced than expected / unwanted products [1]; results not valid as not all fuel burned to CO₂ [1]. (WTTE)',
    keyConcepts: ['Incomplete combustion', 'Validity'],
    keywords: ['incomplete combustion', 'less CO₂', 'not valid', 'smoke'],
    feedbackHit: 'Correct: smoke → incomplete combustion → less CO₂ → invalid.',
    feedbackMiss: 'Smoke indicates incomplete combustion → less CO₂ measured → results underestimate true yield → reduced validity.',
  },
  q4_f: {
    marks: 1,
    exemplar: 'Increase air flow / more oxygen / more air to ensure complete combustion. (WTTE)',
    keyConcepts: ['Combustion conditions', 'Experimental improvement'],
    keywords: ['more air', 'oxygen', 'air flow', 'complete combustion'],
    feedbackHit: 'Correct: increase air/oxygen.',
    feedbackMiss: 'Prevent smoke by ensuring adequate oxygen supply so all carbon burns completely to CO₂.',
  },

  // Q5 — Titration and CO₂ Calculation
  q5_a: {
    marks: 2,
    exemplar: 'Average = (19.35 + 24.65) / 2 = 22.00 ml [1]; correct to 4 significant figures [1].',
    keyConcepts: ['Titration', 'Average calculation', 'Significant figures'],
    keywords: ['22.00', 'average', 'titration', 'significant figures', '4 s.f.'],
    feedbackHit: 'Correct: 22.00 ml to 4 s.f.',
    feedbackMiss: 'Average = (19.35 + 24.65) ÷ 2 = 22.00 ml. Must write to 4 s.f.',
  },
  q5_b: {
    marks: 2,
    exemplar: '1.32 (g) [1]; unit: g [1]. (Unit mark independent.)',
    keyConcepts: ['Graph reading', 'Units'],
    keywords: ['1.32', 'g', 'CO₂', 'read from graph', '22 cm³'],
    feedbackHit: 'Correct: 1.32 g at 22 cm³.',
    feedbackMiss: 'Read the graph at x = 22 cm³. The CO₂ mass ≈ 1.32 g. Units (g) are required for second mark.',
  },
  q5_c: {
    marks: 4,
    exemplar: '1.32 × 10 = 13.2 g CO₂ [1; ECF]; 13.2/44 = 0.300 mol [1]; 0.300 × 22.7 = 6.81 [1; award 3 for correct mass]; dm³ or L [1; unit independent].',
    keyConcepts: ['Mole calculations', 'Gas volumes', 'Molar volume'],
    keywords: ['13.2', '0.300', '6.81', 'dm³', '0.300 mol', '44', '22.7'],
    feedbackHit: 'Correct: 13.2 g → 0.300 mol → 6.81 dm³.',
    feedbackMiss: 'Step 1: 1.32×10=13.2 g. Step 2: 13.2/44=0.300 mol. Step 3: 0.300×22.7=6.81 dm³.',
  },

  // Q6 — Acid Rain Data
  q6_a: {
    marks: 2,
    exemplar: 'Data in numerical time order [1]; all volumes in cm³ [1].',
    keyConcepts: ['Data processing', 'Tables', 'Units'],
    keywords: ['numerical order', 'cm³', 'units', 'table'],
    feedbackHit: 'Data in correct time order with uniform cm³ units.',
    feedbackMiss: 'Present in table with time ascending; convert all to cm³.',
  },
  q6_b: {
    marks: 2,
    type: 'mcq',
    correct: 0,
  } as MCQEntry,
  q6_c: {
    marks: 2,
    exemplar: 'Value at t = 100 s identified as outlier [1]; estimated value ≈ 21.3 cm³ [1]. (Units required.)',
    keyConcepts: ['Outliers', 'Data analysis'],
    keywords: ['outlier', '100 s', '12.5', '21.3 cm³', 'anomalous'],
    feedbackHit: 'Correct: 100 s value (12.5 cm³) is outlier; expected ~21.3 cm³.',
    feedbackMiss: 'The 100 s value (12.5 cm³) is far below the trend (~21 cm³). Based on surrounding values, expected ≈ 21.3 cm³.',
  },
  q6_d: {
    marks: 1,
    exemplar: 'Repeat the measurement at 100 s AND calculate the average value.',
    keyConcepts: ['Reliability', 'Repeating measurements'],
    keywords: ['repeat', 'average', '100 s', 'validity'],
    feedbackHit: 'Correct: repeat and average.',
    feedbackMiss: 'Repeat at t = 100 s and take the mean of multiple readings.',
  },

  // Q7 — Tin Properties
  q7_a: {
    marks: 2,
    exemplar: 'Group 14 (accept Group IVA) [1]; Period 5 [1]. (Check group and period are correctly paired.)',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Tin'],
    keywords: ['Group 14', 'Group IVA', 'Period 5', 'tin', 'Sn'],
    feedbackHit: 'Correct: Group 14, Period 5.',
    feedbackMiss: 'Tin (Sn, Z=50) is in Group 14 (IVA) and Period 5.',
  },
  q7_b: {
    marks: 1,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q7_c: {
    marks: 1,
    exemplar: 'Low reactivity with air/water OR high chemical stability / does not corrode readily. (WTTE)',
    keyConcepts: ['Reactivity of metals', 'Corrosion resistance'],
    keywords: ['low reactivity', 'stable', 'unreactive', 'corrosion resistant'],
    feedbackHit: 'Correct: low reactivity / high stability.',
    feedbackMiss: 'Tin survives thousands of years because it has low reactivity — it resists corrosion in air and water.',
  },
  q7_d: {
    marks: 2,
    exemplar: '50 protons [1]; 70 neutrons (120 − 50 = 70) [1]. (Accept 70n, 50p. Do NOT accept "70, 50" without labels.)',
    keyConcepts: ['Atomic structure', 'Protons and neutrons'],
    keywords: ['50 protons', '70 neutrons', 'mass number', 'atomic number', '120Sn'],
    feedbackHit: 'Correct: 50 protons, 70 neutrons.',
    feedbackMiss: 'Protons = atomic number = 50. Neutrons = 120 − 50 = 70.',
  },

  // Q8 — Mercury Pollution Discussion (Criterion D)
  q8_: {
    marks: 14,
    exemplar: 'Score band descriptors:\n1–2: Mercury adversely affects the body; blood mercury levels have changed.\n3–6: Links mercury exposure to neurological effects graph; mercury accumulates in body; levels decreased after restrictions; suggests societal impact.\n7–14: Mercury correctly linked to neurological/developmental difficulties; levels decreased since restrictions introduced; mercury bioaccumulates through food chain (fish); links year of exposure/birth to severity; references second graph; explains why children more vulnerable (developing nervous system); wider societal impact (healthcare costs, lost educational potential); final appraisal of restricting mercury use.',
    keyConcepts: ['Mercury toxicity', 'Bioaccumulation', 'Public health', 'Criterion D evaluation'],
    keywords: ['blood mercury', 'neurological', 'restricted', 'children', 'bioaccumulation', 'fishing', 'society', 'appraisal'],
    feedbackHit: 'Excellent: both graphs referenced, bioaccumulation explained, children\'s vulnerability, societal impact, appraisal.',
    feedbackMiss: 'Higher bands: both graphs, why children more sensitive (developing nervous system), bioaccumulation in fish, societal benefits, concluding appraisal.',
  },

  // Q9 — EV Battery Evaluation (Criterion D)
  q9_: {
    marks: 10,
    exemplar: 'Score band descriptors:\n1: Identifies chosen battery with supporting statement.\n2–3: Identifies battery with valid support; comparison with at least one other implied.\n4–6: Valid identification with 2+ supporting statements; compares at least two others; environmental OR economic factor mentioned.\n7–10: Identifies battery with 2+ data-backed statements; compares ALL battery types; environmental AND economic factors discussed; concluding appraisal referring to all factors.',
    keyConcepts: ['Battery technology', 'EV technology', 'Environmental and economic evaluation', 'Criterion D'],
    keywords: ['Li-ion', 'LiFePO₄', 'NiMH', 'lead-acid', 'energy density', 'cycle life', 'cost', 'environmental', 'economic', 'appraisal'],
    feedbackHit: 'Excellent: best battery identified with data, all others compared, both factors discussed, appraisal.',
    feedbackMiss: 'For top marks: choose one with data support; compare ALL four; discuss both environmental AND economic; conclude with balanced appraisal.',
  },
}
