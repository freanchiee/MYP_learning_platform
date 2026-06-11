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
  // Q1 — Cave Paintings, Pigments, Redox
  q1_a: {
    marks: 2,
    exemplar: 'Iron(III) oxide: Fe₂O₃ [1]; Manganese dioxide: MnO₂ [1]',
    keyConcepts: ['Chemical formulae', 'Transition metal oxides'],
    keywords: ['Fe₂O₃', 'MnO₂', 'iron oxide', 'manganese dioxide'],
    feedbackHit: 'Correct formulae for both pigments.',
    feedbackMiss: 'Iron(III) oxide is Fe₂O₃ (3 oxygen atoms). Manganese dioxide is MnO₂ (2 oxygen atoms).',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Any named transition metal other than Fe or Mn (e.g. copper, cobalt, nickel, chromium) [1]; Justify with any two of: d-block/transition metal element [1], variable oxidation states [1], forms coloured compounds/solutions [1], named metallic property (malleable/ductile/conductor) [1].',
    keyConcepts: ['Transition metals', 'Properties of transition elements'],
    keywords: ['transition metal', 'd-block', 'variable oxidation states', 'coloured compounds', 'metallic'],
    feedbackHit: 'Correct identification with two valid justifications.',
    feedbackMiss: 'Transition metals share properties: d-block location, variable oxidation states, coloured compounds, and metallic properties.',
  },
  q1_c: {
    marks: 2,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q1_d: {
    marks: 3,
    exemplar: 'Watercolour is soluble in water [1]; oil-based paint is not soluble in water [1]; so watercolour will dissolve/wash away but oil paint will not [1]. (WTTE)',
    keyConcepts: ['Solubility', 'Like dissolves like', 'Paint chemistry'],
    keywords: ['soluble', 'water', 'dissolves', 'oil', 'insoluble'],
    feedbackHit: 'Correct explanation using solubility difference between watercolour and oil paint.',
    feedbackMiss: 'Watercolour uses water as solvent (water-soluble pigment) while oil paint uses oil as solvent — oil is immiscible with water, so it cannot be washed off.',
  },
  q1_e: {
    marks: 4,
    exemplar: 'Award up to 4 marks: statement about which paint causes less environmental damage with valid reason [1]; any three of: watercolour uses water as solvent (less toxic) [1]; oil paint uses organic solvents that can pollute soil/water [1]; watercolour pigments may be more biodegradable [1]; oil paint is more durable (may be better long-term) [1]; any valid environmental point with chemical reasoning [1]. Maximum 4 marks total.',
    keyConcepts: ['Environmental impact of materials', 'Solvents', 'Sustainability'],
    keywords: ['environmental', 'solvent', 'pollution', 'biodegradable', 'toxic'],
    feedbackHit: 'Clear statement with three supporting environmental points.',
    feedbackMiss: 'Consider: what solvents are used (water vs organic), which products break down more easily, and any trade-offs.',
  },
  q1_f: {
    marks: 2,
    exemplar: '2CrO₄²⁻ + 10H⁺ + 6e⁻ → Cr₂O₃ + 5H₂O [1 each for correct coefficients on each side; must balance for both marks]',
    keyConcepts: ['Half-equations', 'Balancing redox equations', 'Chromate chemistry'],
    keywords: ['CrO₄²⁻', 'Cr₂O₃', 'half-equation', 'electrons', 'balanced'],
    feedbackHit: 'Correctly balanced: 2 CrO₄²⁻ + 10 H⁺ + 6 e⁻ → Cr₂O₃ + 5 H₂O.',
    feedbackMiss: 'Balance chromium first (×2 on left), then oxygen (5 H₂O on right), then hydrogen (10 H⁺ on left), then electrons (6 e⁻).',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Reduction [1]; because Cr⁶⁺ / Cr(VI) gains electrons to form Cr³⁺ / Cr(III) [1].',
    keyConcepts: ['Oxidation and reduction', 'Electron gain', 'Redox definitions'],
    keywords: ['reduction', 'gains electrons', 'Cr⁶⁺', 'Cr³⁺', 'electron gain'],
    feedbackHit: 'Correctly identified as reduction with correct electron-gain explanation.',
    feedbackMiss: 'Reduction = gain of electrons. Chromium changes from +6 to +3 oxidation state, gaining 3 electrons per atom.',
  },

  // Q2 — Photography and Silver Chemistry
  q2_a: {
    marks: 3,
    exemplar: 'Correct structural formula showing CH₃–COOH with carboxyl group drawn [1]; all bonds shown correctly [1]; functional group named as carboxyl / carboxylic acid group [1].',
    keyConcepts: ['Structural formulae', 'Carboxylic acids', 'Functional groups'],
    keywords: ['structural formula', 'carboxyl', 'carboxylic acid', 'C=O', 'O-H'],
    feedbackHit: 'Correct structural formula with carboxyl group correctly identified.',
    feedbackMiss: 'Ethanoic acid: CH₃–C(=O)–OH. The functional group is the carboxyl group (–COOH).',
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
    exemplar: '110 g/mol (or amu). [C₆H₆O₂: 6×12 + 6×1 + 2×16 = 72 + 6 + 32 = 110]',
    keyConcepts: ['Molecular mass', 'Relative molecular mass calculation'],
    keywords: ['110', 'g/mol', 'molecular mass', 'molar mass'],
    feedbackHit: 'Correct: Mr = 110 g/mol.',
    feedbackMiss: 'Mr(C₆H₆O₂) = 6(12) + 6(1) + 2(16) = 72 + 6 + 32 = 110 g/mol.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Molar mass of Ag = 108 g/mol [1]; Molar mass of AgBr = 108 + 80 = 188 g/mol [1]; Moles Ag = 2000/108 = 18.52 mol → moles AgBr = 18.52 mol [1]; Mass AgBr = 18.52 × 188 = 3481 g ≈ 3.48 kg [1]. (ECF applies; sig fig mark awarded independently; accept 3500 g / 3.5 kg for 2 s.f.)',
    keyConcepts: ['Stoichiometry', 'Mole calculations', 'Molar mass'],
    keywords: ['moles', 'Ag', 'AgBr', '108', '188', '3481', '3.48'],
    feedbackHit: 'Full correct calculation with correct masses and mole ratio.',
    feedbackMiss: 'Step 1: Mr AgBr = 188. Step 2: moles Ag = 2000/108 = 18.52. Step 3: moles AgBr = 18.52 (1:1 ratio). Step 4: mass = 18.52 × 188 = 3481 g.',
  },

  // Q3 — Disaster Water Purification
  q3_a: {
    marks: 1,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q3_b: {
    marks: 2,
    exemplar: 'The water vapour loses heat/energy [1]; condensation occurs — water changes from vapour/gas to liquid [1].',
    keyConcepts: ['Condensation', 'Kinetic theory', 'State changes'],
    keywords: ['condensation', 'loses energy', 'vapour to liquid', 'cool surface'],
    feedbackHit: 'Correct: vapour loses energy and condenses to liquid.',
    feedbackMiss: 'When water vapour touches the cooler bottle surface, it loses energy (heat) and undergoes condensation — changing from gas to liquid.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Two essential items correctly identified from: filter paper, funnel, collection beaker/flask [1]; all three items correctly selected and labelled [1]; correctly arranged (funnel at top with filter paper inside, beaker below) [1].',
    keyConcepts: ['Filtration', 'Laboratory equipment', 'Separation techniques'],
    keywords: ['filter paper', 'funnel', 'beaker', 'filtration', 'filtrate'],
    feedbackHit: 'All three equipment items correctly labelled and arranged.',
    feedbackMiss: 'Filtration requires: filter paper (inside a funnel) on top; a collecting vessel (beaker/conical flask) below to collect the filtrate.',
  },
  q3_d: {
    marks: 3,
    exemplar: 'Blank 1: high [1]; Blank 2: decreases [1]; Blank 3: ions [1].',
    keyConcepts: ['Conductivity', 'Ionic solutions', 'Silver nitrate testing'],
    keywords: ['high conductivity', 'decreases', 'ions', 'silver ions', 'AgCl precipitate'],
    feedbackHit: 'All three blanks correct: high, decreases, ions.',
    feedbackMiss: 'Initially: high conductivity (many Ag⁺ ions). As Cl⁻ is added: Ag⁺ + Cl⁻ → AgCl↓ — conductivity decreases because fewer silver ions remain in solution.',
    blankAnswers: ['high', 'decreases', 'ions'],
  },
  q3_e: {
    marks: 2,
    exemplar: 'Sharp/sudden drop in conductivity between 20–25 cm³ [1]; because silver ions are all reacting / being removed / forming AgCl precipitate at the equivalence point [1].',
    keyConcepts: ['Equivalence point', 'Precipitation reactions', 'Conductimetric titration'],
    keywords: ['sharp drop', 'equivalence point', 'AgCl precipitate', 'silver ions removed'],
    feedbackHit: 'Correct: sharp drop and reason involving removal of silver ions.',
    feedbackMiss: 'At the equivalence point all Ag⁺ ions have been precipitated as AgCl — no more conducting ions, so conductivity drops sharply.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Dependent variable: conductivity / water purity / number of microbes / amount of microbes [1]; Control variable: temperature / same water source / same volume of water / same equipment [1].',
    keyConcepts: ['Variables', 'Experimental design', 'Criterion B'],
    keywords: ['dependent variable', 'control variable', 'conductivity', 'temperature', 'same conditions'],
    feedbackHit: 'Correct DV and CV identified.',
    feedbackMiss: 'DV measures what changes (conductivity/purity/microbes). CV keeps other things the same (temperature, source water, equipment).',
  },
  q3_g: {
    marks: 14,
    exemplar: 'Score band descriptors:\n1–2: Attempt at research question; attempt to plan a method.\n3–5: Research question links filter type to lowest conductivity; plans to measure conductivity using one purification method; method insufficient for another student to follow.\n6–9: Correct research question; plans to measure conductivity of two purification methods; equipment to measure volume OR temperature listed; method described and could be followed.\n10–14: Correct research question and justifies with conductivity rationale; plans to measure conductivity using all three purification methods; equipment for volume AND temperature listed; complete, fully explained method another student could follow; plans to repeat and calculate mean values.',
    keyConcepts: ['Experimental design', 'Scientific method', 'Criterion B investigation'],
    keywords: ['research question', 'conductivity', 'three filters', 'repeat', 'mean', 'volume', 'temperature', 'method'],
    feedbackHit: 'Excellent: all three filters tested, full method, equipment for volume and temperature, mean calculated.',
    feedbackMiss: 'Highest marks require: correct research question + all 3 filter types + conductivity measurement + volume AND temperature equipment + complete repeatable method + calculating means.',
  },

  // Q4 — Nepal Fuels and Combustion Design
  q4_a: {
    marks: 2,
    exemplar: 'LPG: 41.5% use in urban areas [1]; Dung (animal waste): 9.4% use in rural areas [1].',
    keyConcepts: ['Data reading', 'Tables', 'Percentage use'],
    keywords: ['LPG', '41.5', 'dung', '9.4', 'urban', 'rural'],
    feedbackHit: 'Correct values read from table.',
    feedbackMiss: 'From the table: LPG = 41.5% urban use; Dung = 9.4% rural use.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Use calcium hydroxide solution / Ca(OH)₂ / limewater [1]; bubble the gas through the limewater / pass gas through limewater [1]; limewater turns white or cloudy / precipitate forms / CaCO₃ is formed if CO₂ is present [1]. (Ignore incorrect formula CaOH if calcium hydroxide or limewater mentioned. WTTE.)',
    keyConcepts: ['Testing for gases', 'Limewater test', 'Carbon dioxide identification'],
    keywords: ['limewater', 'Ca(OH)₂', 'bubble through', 'turns white', 'cloudy', 'CaCO₃', 'milky'],
    feedbackHit: 'Correct: limewater, bubble through, turns white/cloudy.',
    feedbackMiss: 'Test: bubble CO₂ through limewater (Ca(OH)₂). Positive result: limewater turns milky/white because CaCO₃ precipitate forms.',
  },
  q4_c: {
    marks: 11,
    exemplar: 'Score band descriptors:\n1–3: Either wood or dung identified as fuel; attempt to plan a method.\n4–6: Both fuels identified; DV = volume of CO₂/gas measured; states mass of fuel controlled; attempt at stepwise method.\n7–9: Both fuels; DV correct; CV = mass of fuel; sufficient data (repeat for both fuels, min 3 trials); method includes burning fuel, collecting gas in syringe, leaving until all fuel burnt, measuring volume produced.\n10–11: All above PLUS safety concern mentioned. "Syringe" can be implied.',
    keyConcepts: ['Experimental design', 'Combustion', 'Gas collection', 'Variables', 'Safety'],
    keywords: ['wood', 'dung', 'volume', 'CO₂', 'syringe', 'mass controlled', 'repeat', 'three trials', 'safety', 'burn'],
    feedbackHit: 'Full marks: both fuels, correct DV/CV, 3 trials, method with syringe collection, safety mentioned.',
    feedbackMiss: 'Must include: both fuels, volume of gas as DV, mass of fuel as CV, at least 3 repeats per fuel, burn/combust fuel, collect gas in syringe, measure volume, and a safety concern.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'All the CO₂ is collected / no CO₂ is lost.',
    keyConcepts: ['Experimental assumptions', 'Gas collection'],
    keywords: ['all CO₂ collected', 'no CO₂ lost', 'assumption'],
    feedbackHit: 'Correct: assumption that all CO₂ is collected.',
    feedbackMiss: 'The assumption is that no CO₂ escapes — all gas produced is captured by the collection equipment.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'Smoke indicates incomplete combustion [1]; therefore less CO₂ is produced than expected / unwanted products (smoke) are produced instead [1]; results are not valid because not all the fuel burned to produce CO₂ [1]. (Accept "accurate" for "valid". WTTE.)',
    keyConcepts: ['Incomplete combustion', 'Validity', 'Experimental error'],
    keywords: ['incomplete combustion', 'less CO₂', 'not valid', 'smoke', 'unwanted products'],
    feedbackHit: 'Correct: smoke = incomplete combustion → less CO₂ → invalid results.',
    feedbackMiss: 'Smoke shows incomplete combustion. Less CO₂ is produced and the results underestimate the true CO₂ yield, so validity is reduced.',
  },
  q4_f: {
    marks: 1,
    exemplar: 'Increase air flow / supply more oxygen / more air to ensure complete combustion. (WTTE; accept "accurate" for valid.)',
    keyConcepts: ['Combustion conditions', 'Experimental improvement'],
    keywords: ['more air', 'more oxygen', 'air flow', 'complete combustion'],
    feedbackHit: 'Correct: increase air/oxygen supply.',
    feedbackMiss: 'To prevent smoke (incomplete combustion), ensure a sufficient supply of oxygen/air so all carbon burns to CO₂.',
  },

  // Q5 — Titration and CO₂ Calculation
  q5_a: {
    marks: 2,
    exemplar: 'Average = (22.75 + 27.25) / 2 = 25.00 ml [1]; correct to 4 significant figures [1].',
    keyConcepts: ['Titration', 'Average calculation', 'Significant figures'],
    keywords: ['25.00', 'average', 'titration', 'significant figures'],
    feedbackHit: 'Correct average of 25.00 ml to 4 s.f.',
    feedbackMiss: 'Average = (22.75 + 27.25) ÷ 2 = 25.00 ml. Must be written to 4 significant figures (25.00, not 25).',
  },
  q5_b: {
    marks: 2,
    exemplar: '1.65 (g) [1]; unit: g [1]. (Unit needed for second mark; award this mark independently.)',
    keyConcepts: ['Graph reading', 'Units'],
    keywords: ['1.65', 'g', 'CO₂', 'graph', 'read value'],
    feedbackHit: 'Correct: 1.65 g CO₂ read from graph at 25 cm³.',
    feedbackMiss: 'Read the y-axis value at x = 25 cm³ from the graph. The value should be approximately 1.65 g. Units (g) are required.',
  },
  q5_c: {
    marks: 4,
    exemplar: '1.65 × 10 = 16.5 g carbon dioxide [1; ECF; seen or implied]; 16.5/44 = 0.375 moles [1]; 0.375 × 22.7 = 8.51 [1; award 3 for correct mass]; dm³ or L [1; unit mark awarded independently].',
    keyConcepts: ['Mole calculations', 'Gas volumes', 'Stoichiometry', 'Molar volume'],
    keywords: ['16.5', '0.375', '8.51', 'dm³', 'moles', '44', '22.7'],
    feedbackHit: 'Correct full calculation: 16.5 g → 0.375 mol → 8.51 dm³.',
    feedbackMiss: 'Step 1: scale up (×10) → 16.5 g CO₂. Step 2: moles = 16.5/44 = 0.375 mol. Step 3: volume = 0.375 × 22.7 = 8.51 dm³.',
  },

  // Q6 — Acid Rain and Reaction Rate Data
  q6_a: {
    marks: 2,
    exemplar: 'Data values given in numerical order (by time) [1]; all volumes converted into the same units (cm³) [1].',
    keyConcepts: ['Data processing', 'Tables', 'Unit conversion'],
    keywords: ['numerical order', 'cm³', 'units', 'table', 'data'],
    feedbackHit: 'Data in correct order with uniform cm³ units.',
    feedbackMiss: 'Present data in a table with time in ascending order. Convert all volumes to cm³ before recording.',
  },
  q6_b: {
    marks: 2,
    type: 'mcq',
    correct: 0,
  } as MCQEntry,
  q6_c: {
    marks: 2,
    exemplar: 'Data value at t = 110 s identified as outlier [1]; estimated more likely value ≈ 21 cm³ [1]. (Units required.)',
    keyConcepts: ['Outliers', 'Data analysis', 'Anomalous results'],
    keywords: ['outlier', '110 s', '21 cm³', 'anomalous', 'trend'],
    feedbackHit: 'Correctly identified 110 s as outlier; estimated ~21 cm³.',
    feedbackMiss: 'The value at t = 110 s (20.1 cm³) dips below the trend. Based on surrounding values (~20.9 at 100 s and 21.1 at 120 s), the expected value is approximately 21 cm³.',
  },
  q6_d: {
    marks: 1,
    exemplar: 'Repeat the measurement at 110 s AND calculate the average value.',
    keyConcepts: ['Validity', 'Repeating measurements', 'Improving reliability'],
    keywords: ['repeat', 'average', 'measurement', '110 s', 'validity'],
    feedbackHit: 'Correct: repeat and average.',
    feedbackMiss: 'To check for outliers, repeat the measurement at that time point and calculate a mean from multiple readings.',
  },

  // Q7 — Lead Properties and Atomic Structure
  q7_a: {
    marks: 2,
    exemplar: 'Group 4 (accept Group 14 / IVA) [1]; Period 6 [1]. (Check group and number are correctly paired.)',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Lead'],
    keywords: ['Group 4', 'Group 14', 'Period 6', 'lead', 'Pb'],
    feedbackHit: 'Correct: Group 4/14, Period 6.',
    feedbackMiss: 'Lead (Pb, Z=82) is in Group 14 (IVA) and Period 6 of the periodic table.',
  },
  q7_b: {
    marks: 1,
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q7_c: {
    marks: 1,
    exemplar: 'Low reactivity with air/water OR high chemical stability. (WTTE)',
    keyConcepts: ['Chemical properties of metals', 'Reactivity', 'Corrosion resistance'],
    keywords: ['low reactivity', 'unreactive', 'stable', 'does not react', 'corrosion resistant'],
    feedbackHit: 'Correct: low reactivity / high chemical stability.',
    feedbackMiss: 'Lead survives for thousands of years because it has low reactivity — it does not react readily with air or water.',
  },
  q7_d: {
    marks: 2,
    exemplar: '82 protons [1]; 126 neutrons (208 − 82 = 126) [1]. (Accept 126n, 82p. Do NOT accept "126, 82" without labels.)',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Protons and neutrons'],
    keywords: ['82 protons', '126 neutrons', 'atomic number', 'mass number', '208'],
    feedbackHit: 'Correct: 82 protons and 126 neutrons.',
    feedbackMiss: 'Protons = atomic number = 82. Neutrons = mass number − atomic number = 208 − 82 = 126.',
  },

  // Q8 — Lead Blood Levels Discussion (Criterion D)
  q8_: {
    marks: 14,
    exemplar: 'Score band descriptors:\n1–2: Lead adversely affects the body; lead levels have changed.\n3–6: Lead adversely affects the body and links to learning difficulties graph; lead is accumulated in the body; lead levels have decreased over time; suggests an impact on society.\n7–14: Lead correctly linked to learning difficulties; levels decreased since lead was banned; level of lead generally increases with age as it is accumulated; links year of birth with lead levels; reference to second graph about learning difficulties; suggestion of why children are more sensitive to lead; wider societal impact discussed (healthcare costs, educational outcomes, productivity); final appraisal of removing lead from manufacturing.',
    keyConcepts: ['Lead toxicity', 'Public health', 'Environmental policy', 'Data interpretation', 'Criterion D evaluation'],
    keywords: ['blood lead', 'learning difficulties', 'banned', 'children', 'accumulated', 'graph', 'society', 'appraisal', 'implications'],
    feedbackHit: 'Excellent: correct links between graphs, societal impact, children\'s sensitivity, and balanced appraisal.',
    feedbackMiss: 'Higher bands require: both graphs referenced, explanation of why children are more sensitive, broader societal benefits discussed, and a final concluding appraisal.',
  },

  // Q9 — Mobile Phone Battery Evaluation (Criterion D)
  q9_: {
    marks: 10,
    exemplar: 'Score band descriptors:\n1: Identifies chosen battery with supporting statement.\n2–3: Identifies chosen battery with valid supporting statement; comparison with at least one other battery implied.\n4–6: Identifies chosen battery with more than one valid supporting statement; comparison with at least two other batteries implied; an environmental OR economic factor mentioned.\n7–10: Identifies chosen battery with more than two valid supporting statements; comparison of ALL battery types implied; environmental AND economic factors discussed; a concluding appraisal referring to all factors considered.',
    keyConcepts: ['Battery technology', 'Environmental impact', 'Economic factors', 'Data evaluation', 'Criterion D'],
    keywords: ['Li-ion', 'LiPoly', 'NiCd', 'NiMH', 'environmental', 'economic', 'cycle life', 'capacity', 'voltage', 'appraisal'],
    feedbackHit: 'Excellent: best battery identified with data, all others compared, both environmental and economic factors, concluding appraisal.',
    feedbackMiss: 'For full marks: choose battery and justify with data; compare ALL other types; discuss both environmental AND economic factors; end with a balanced conclusion.',
  },
}
