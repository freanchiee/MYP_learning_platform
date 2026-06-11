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
  // ─── Q1: Copper and Silicon ──────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Group 11 (accept Group IB / Group 1B), Period 4. Award 1 mark per correct answer.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 11', 'IB', '1B', 'period 4', 'copper'],
    feedbackHit: 'Correct — copper is in Group 11 (transition metals), Period 4.',
    feedbackMiss: 'Use the periodic table: copper (Cu, Z=29) is in Period 4 and Group 11 (the first of the transition metals group 11).',
  },
  q1_b: {
    marks: 4,
    exemplar: 'Eq1: 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂. Eq2: 2Cu₂O + C → 4Cu + CO₂. Award 1 mark per correct coefficient set (2 marks per equation).',
    keyConcepts: ['Balancing equations', 'Conservation of atoms'],
    keywords: ['2Cu₂S', '3O₂', '2Cu₂O', '2SO₂', '2Cu₂O', 'C', '4Cu', 'CO₂'],
    feedbackHit: 'Correct — both equations are balanced: copper and sulfur atoms are conserved in Eq1; copper, carbon and oxygen atoms are conserved in Eq2.',
    feedbackMiss: 'Count each atom on both sides. Note Eq2 produces 4Cu (not 2Cu) because each Cu₂O unit gives 2Cu atoms.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for two of: SO₂ released → dissolves in rainwater → forms sulfurous/sulfuric acid → acid rain (damages ecosystems, buildings); CO₂ released → enhances greenhouse effect → contributes to global warming/climate change.',
    keyConcepts: ['Pollution', 'Environmental chemistry'],
    keywords: ['SO₂', 'acid rain', 'CO₂', 'greenhouse effect', 'climate change', 'habitat destruction'],
    feedbackHit: 'Well done — you identified both the acid rain and climate change impacts of copper smelting.',
    feedbackMiss: 'Two key pollutants: SO₂ → acid rain; CO₂ → climate change. Name the pollutant and its effect.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two of: conducts electricity; conducts heat; malleable (can be hammered into shape); shiny/metallic lustre; ductile (can be drawn into wires).',
    keyConcepts: ['Metallic properties'],
    keywords: ['electrical conductivity', 'thermal conductivity', 'malleability', 'lustre', 'ductility'],
    feedbackHit: 'Correct — copper is an excellent electrical and thermal conductor and is highly malleable.',
    feedbackMiss: 'Think about uses of copper: electrical wires (conducts electricity), cooking pots (conducts heat), piping (malleable).',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Award 2 marks: Silicon is a metalloid / semi-metal with properties between metals and non-metals. Its atomic structure is different (covalent network solid, not metallic lattice) so it does not have the same properties as copper (e.g. poor conductor of heat, semiconductor not conductor, brittle not malleable). Award 1 mark for stating properties would differ with a reason; 2 marks for linking to atomic/structural difference.',
    keyConcepts: ['Metalloids', 'Periodic table'],
    keywords: ['metalloid', 'semi-metal', 'semiconductor', 'different structure', 'brittle', 'not malleable'],
    feedbackHit: 'Correct — silicon\'s covalent network structure gives it very different properties from the metallic lattice of copper.',
    feedbackMiss: 'Silicon is a metalloid with intermediate properties. Its covalent network structure means it lacks the free electrons and ductility of metals like copper.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'Si-28: electrons = 14, neutrons = 28 − 14 = 14. Si-30: protons = 14, neutrons = 30 − 14 = 16. Award 1 mark for each correct pair of values.',
    keyConcepts: ['Isotopes', 'Atomic structure'],
    keywords: ['Si-28', 'Si-30', '14 neutrons', '16 neutrons', 'mass number − atomic number'],
    feedbackHit: 'Correct — neutrons = mass number − atomic number; all silicon isotopes have 14 protons.',
    feedbackMiss: 'For any element: neutrons = mass number − protons (atomic number). Silicon always has 14 protons.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'All isotopes of silicon react in the same way because they have the same number of electrons and the same electron configuration. The number of neutrons does not affect chemical reactivity. They would all form silicon dioxide (SiO₂) when reacting with oxygen. Award 1 mark per valid point.',
    keyConcepts: ['Isotopes', 'Chemical reactivity'],
    keywords: ['same electron configuration', 'react same way', 'neutrons do not affect', 'silicon dioxide'],
    feedbackHit: 'Correct — chemical reactivity depends on electron configuration, which is identical for all silicon isotopes.',
    feedbackMiss: 'Chemical reactions involve electrons, not neutrons. Since all Si isotopes have 14 electrons with the same configuration, they all react identically.',
  },

  // ─── Q2: Formate Esters ──────────────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'Accept any clear research question linking chain length of formate esters to volatility/evaporation rate, e.g. "How does the length of the hydrocarbon chain in formate esters affect the time taken for the ester to evaporate?"',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['chain length', 'volatility', 'evaporation', 'formate esters', 'time'],
    feedbackHit: 'Good — your research question identifies the IV (chain length) and DV (evaporation/volatility).',
    feedbackMiss: 'A research question must include both the variable being changed (chain length) and what is being measured (evaporation time or volatility).',
  },
  q2_b: {
    marks: 3,
    exemplar: 'Award marks for: (1) direction — as chain length increases, volatility decreases / time to evaporate increases; (2) justification — longer chain → more atoms → stronger/greater London dispersion / van der Waals forces; (3) quality — clear prediction linked to molecular explanation. Award 1 mark per valid point, max 3.',
    keyConcepts: ['Hypothesis', 'Intermolecular forces'],
    keywords: ['chain length increases', 'volatility decreases', 'London dispersion forces', 'van der Waals', 'intermolecular forces'],
    feedbackHit: 'Well done — your hypothesis correctly links longer chain length to stronger intermolecular forces and lower volatility.',
    feedbackMiss: 'A hypothesis needs: (1) a clear prediction (longer chain = less volatile), (2) a reason from science (more atoms = stronger London dispersion forces = harder to vaporise).',
  },
  q2_c: {
    marks: 4,
    exemplar: 'IV: type/chain length of formate ester (1 mark). DV: time taken for ester to evaporate / rate of evaporation (1 mark). CVs — 2 marks for any two of: volume/mass of ester used; temperature of room; surface area of filter paper; air currents/draught; initial temperature of ester.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['IV chain length', 'DV time to evaporate', 'CV temperature', 'CV volume', 'CV surface area'],
    feedbackHit: 'Correct — you identified all three variable types with accurate examples.',
    feedbackMiss: 'IV is what you change (chain length of ester); DV is what you measure (time to evaporate); CVs are what you keep the same (temperature, volume, surface area).',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Award 1 mark each for any four of: Sealed container — prevents ester vapour escaping, keeping equilibrium shifted towards ester product; Cold — lower temperature slows the rate of hydrolysis reaction; slows forward reaction breaking ester bonds; Dry — no water present to act as reactant in hydrolysis; prevents equilibrium shifting toward acid + alcohol products; reduces rate of degradation.',
    keyConcepts: ['Reversible reactions', 'Equilibrium', 'Ester hydrolysis'],
    keywords: ['sealed', 'prevent evaporation', 'cold', 'slow hydrolysis', 'dry', 'no water', 'equilibrium', 'reversible'],
    feedbackHit: 'Excellent — you linked each storage condition to a specific chemical reason.',
    feedbackMiss: 'Three conditions, each with a reason: sealed (keeps vapour in / shifts equilibrium); cold (slows hydrolysis/reverse reaction); dry (removes water needed for hydrolysis).',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  },

  // ─── Q3: Lead(II) Nitrate Investigation ─────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 1,
  },
  q3_b: {
    type: 'mcq',
    correct: 1,
  },
  q3_c: {
    marks: 15,
    exemplar: 'A full Criterion B design response. Marks awarded using the MYP rubric bands (0, 1–2, 3–4, 5–6, 7–8, 9–10, 11–12, 13–14, 15). Key elements: Equipment list (test tubes, measuring cylinder, balance, thermometer/temperature probe, stopwatch, lead nitrate solution, metal powders — safety: toxic lead nitrate, gloves, goggles); Method (measure fixed volume of Pb(NO₃)₂, add fixed mass of each metal powder, record temperature change, repeat 3× for each metal); Variables (IV: metal type; DV: temperature change; CVs: volume of Pb(NO₃)₂, mass of metal, initial temperature, concentration of solution); Safety (lead compounds are toxic — wear gloves and goggles, avoid skin contact, dispose of lead waste properly).',
    keyConcepts: ['Criterion B — Inquiry and Design'],
    keywords: ['Pb(NO₃)₂', 'toxic', 'temperature probe', 'method', 'repeats', 'variables', 'safety', 'gloves'],
    feedbackHit: 'Excellent design — you addressed equipment, method, variables, and safety with lead nitrate.',
    feedbackMiss: 'A Crit B design needs: equipment list, step-by-step method, IV/DV/CVs identified, safety precautions for Pb(NO₃)₂ (toxic), and plan for repeats.',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Correct order from least to most reactive: Nickel, Iron, Zinc, Aluminium, Magnesium.',
    keyConcepts: ['Reactivity series', 'Displacement'],
    keywords: ['Nickel', 'Iron', 'Zinc', 'Aluminium', 'Magnesium', 'reactivity order'],
    feedbackHit: 'Correct order: Ni < Fe < Zn < Al < Mg (least to most reactive).',
    feedbackMiss: 'Use the temperature change data: the greater the temperature rise, the more reactive the metal. Rank from smallest ΔT (Ni = 7°C) to largest (Mg = 53°C).',
    blankAnswers: ['Nickel', 'Iron', 'Zinc', 'Aluminium', 'Magnesium'],
  },
  q3_e: {
    marks: 2,
    exemplar: 'Award 1 mark each for: (1) Larger temperature rise indicates a more exothermic reaction / more energy released; (2) The more reactive metal releases more energy when displacing Pb²⁺ ions from solution, so produces a greater temperature increase.',
    keyConcepts: ['Reactivity', 'Scientific reasoning'],
    keywords: ['temperature rise', 'more reactive', 'more exothermic', 'larger temperature change', 'displaces lead'],
    feedbackHit: 'Correct — you linked temperature change to reactivity through the energy released in the displacement reaction.',
    feedbackMiss: 'The temperature change is caused by the displacement reaction. A more reactive metal releases more energy when displacing Pb²⁺ ions, so the temperature rises more.',
  },
  q3_f: {
    type: 'mcq',
    correct: 0,
  },
  q3_g: {
    marks: 5,
    exemplar: 'Award 1 mark each for: (1) appropriate title (e.g. "Temperature change of metals reacting with lead(II) nitrate solution"); (2) x-axis labelled "Metal" with 5 metals named; (3) y-axis labelled "Temperature change" with unit "°C"; (4) all 5 bars drawn at correct heights (Ni=7, Fe=12, Zn=28, Al=45, Mg=53); (5) bars clearly separated (bar chart not line graph).',
    keyConcepts: ['Bar graph', 'Criterion C'],
    keywords: ['title', 'x-axis metals', 'y-axis temperature change', '°C', 'Ni=7', 'Fe=12', 'Zn=28', 'Al=45', 'Mg=53'],
    feedbackHit: 'Well done — your bar graph has a title, labelled axes with units, and all bars at correct heights.',
    feedbackMiss: 'Bar graph checklist: title; x-axis = Metal (Ni, Fe, Zn, Al, Mg); y-axis = Temperature change / °C; bars: Ni=7, Fe=12, Zn=28, Al=45, Mg=53.',
  },
  q3_h: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) Comment on validity — only one trial/data set shown; results are not reliable without repeats; no way to know if the data is anomalous; (2) Improvement — carry out at least 3 repeats for each metal and calculate a mean temperature change.',
    keyConcepts: ['Validity', 'Reliability'],
    keywords: ['single trial', 'limited validity', 'not reliable', 'repeats', 'averages', 'anomalous'],
    feedbackHit: 'Correct — you identified the lack of repeats as limiting validity and suggested a practical improvement.',
    feedbackMiss: 'One set of results has limited validity — there is no way to identify anomalous results or calculate a reliable average. Suggest carrying out repeats.',
  },

  // ─── Q4: US Penny + Phosphoric Acid ─────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Test: hold a lit splint/burning splint near the mouth of the test tube collecting the gas. Result: a squeaky pop / the gas burns with a popping sound. Award 1 mark per correct component.',
    keyConcepts: ['Hydrogen gas test'],
    keywords: ['lit splint', 'burning splint', 'squeaky pop', 'hydrogen', 'ignites'],
    feedbackHit: 'Correct — the lit splint test with a squeaky pop is the standard test for hydrogen gas.',
    feedbackMiss: 'Hydrogen test = lit splint at the gas source → squeaky pop when the gas ignites.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Award marks for: (1) Clear prediction — the coin minted between 1793–1849 (100% copper) will produce the slowest reaction / least gas; (2) Justification using reactivity — copper is the least reactive metal in the coins so reacts most slowly with phosphoric acid; (3) Scientific quality — if a coin contains more copper, it reacts more slowly. Award 1 per valid element, max 3.',
    keyConcepts: ['Hypothesis', 'Reactivity'],
    keywords: ['1793–1849', '100% copper', 'slowest reaction', 'least reactive', 'copper', 'hypothesis'],
    feedbackHit: 'Good hypothesis — you linked the composition (100% copper) to the slowest reaction rate using reactivity.',
    feedbackMiss: 'State which coin type AND why. Coins made entirely of copper (1793–1849) will react most slowly because copper is the least reactive metal present.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'IV: coin composition / year of manufacture (1 mark). DV: volume of gas produced in a fixed time OR time to produce a fixed volume of gas (1 mark). CVs — 2 marks for any two of: temperature; concentration of phosphoric acid; volume of acid; surface area of coin; mass of coin; pressure.',
    keyConcepts: ['Variables'],
    keywords: ['IV coin composition', 'DV gas volume', 'CV temperature', 'CV acid concentration', 'CV volume'],
    feedbackHit: 'Correct variables identified — well done.',
    feedbackMiss: 'IV = what changes (coin type/year); DV = what you measure (gas produced); CVs = what you keep constant (temperature, acid concentration, volume of acid).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Coin 1 (≈ 120 s) → 1793–1849 (100% Cu, most copper → slowest). Coin 2 (≈ 70 s) → 1865–1943 (95% Cu, medium). Coin 3 (≈ 35 s) → 1982–present (97.5% Zn, mostly zinc → fastest). Award 1 mark per correct coin.',
    keyConcepts: ['Graph reading', 'Data interpretation'],
    keywords: ['1793–1849', '1865–1943', '1982–present', 'slowest', 'fastest', 'copper content'],
    feedbackHit: 'Correct — you matched reaction time to copper content and then to the year-composition table.',
    feedbackMiss: 'More copper = slower reaction. Coin 1 is slowest (120 s) = most copper = 1793–1849; Coin 3 is fastest (35 s) = least copper = 1982–present.',
    blankAnswers: ['1793–1849', '1865–1943', '1982–present'],
  },
  q4_e: {
    marks: 3,
    exemplar: 'Award 1 mark each for any three of: The graph shows average/idealized values but actual coins may vary slightly in composition; no repeats were carried out so results could be anomalous; gas collection method may be inaccurate (some gas may escape); temperature of the room/acid was not controlled; coins may have a coating or surface oxidation affecting the reaction.',
    keyConcepts: ['Evaluation', 'Sources of error'],
    keywords: ['composition varies', 'no repeats', 'gas collection', 'temperature not controlled', 'surface oxidation', 'averages'],
    feedbackHit: 'Good evaluation — you identified realistic sources of discrepancy between your results and the reference graph.',
    feedbackMiss: 'Consider: (1) real coins may not perfectly match average compositions; (2) no repeats means results could be anomalous; (3) gas collection may be imprecise.',
  },
  q4_f: {
    marks: 2,
    exemplar: 'The method is destructive — the coin is chemically dissolved in phosphoric acid and cannot be recovered. This means: (1) the coin is destroyed and cannot be kept as a collectible/artefact; (2) the experiment cannot be repeated with the same coin. Award 1 mark per valid point.',
    keyConcepts: ['Experimental limitations'],
    keywords: ['destructive', 'coin destroyed', 'cannot repeat', 'cannot keep', 'acid dissolves coin'],
    feedbackHit: 'Correct — the acid dissolves the coin, making the method destructive and non-repeatable with the same sample.',
    feedbackMiss: 'The coin reacts with the acid and is dissolved — this is a destructive method. Once dissolved it cannot be recovered, and the same coin cannot be tested again.',
  },

  // ─── Q5: Pepita Canaa Nugget ─────────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: '60 820 g = 6.082 × 10⁴ g. Accept 6.08 × 10⁴ g (3 sig figs). Award 1 mark for correct coefficient (6.08 or 6.082); 1 mark for correct power (× 10⁴).',
    keyConcepts: ['Scientific notation'],
    keywords: ['6.08 × 10⁴', '6.082 × 10⁴', 'scientific notation', 'Pepita Canaa'],
    feedbackHit: 'Correct — 60 820 g written in scientific notation is 6.08 × 10⁴ g.',
    feedbackMiss: 'Move the decimal point so there is one non-zero digit before it: 60 820 → 6.082 × 10⁴ (the decimal moved 4 places left).',
  },
  q5_b: {
    marks: 4,
    exemplar: 'Award 2 marks for discussion of method: uses different concentrations of aqua regia to test purity; each solution dissolves gold of a specific karat or lower; method allows bracket for purity (between two concentrations). Award 2 marks for comment on validity: destructive method — artefact is damaged/dissolved; only one test (no repeats); boundary not exact (cannot pinpoint exact karat); no safety precautions mentioned for concentrated acids.',
    keyConcepts: ['Criterion C evaluation', 'Method evaluation'],
    keywords: ['destructive', 'no repeats', 'aqua regia', 'karat', 'validity', 'concentrated acid', 'one test'],
    feedbackHit: 'Good — you discussed the logic of the method and identified its key limitations (destructive, no repeats).',
    feedbackMiss: 'Method discussion: explain how different concentrations bracket the purity. Validity comment: it is destructive (artefact damaged), only one test (no repeats), results cannot be verified.',
  },
  q5_c: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) Correct part of hypothesis: "more concentrated solution needed for purer gold" is correct — purer gold is more resistant and requires a stronger acid; (2) Incorrect part: "dissolves more easily" is wrong — gold is an unreactive metal and does NOT dissolve easily; even aqua regia is a very strong/specific mixture needed to attack it.',
    keyConcepts: ['Hypothesis evaluation'],
    keywords: ['more concentrated correct', 'dissolves more easily wrong', 'gold resistant', 'unreactive', 'strong acid needed'],
    feedbackHit: 'Correct evaluation — you identified which part of the hypothesis is supported and which is not.',
    feedbackMiss: 'Evaluate each part separately: "purer needs more concentrated" = correct (pure gold resists acid more); "dissolves more easily" = incorrect (gold is unreactive and dissolves with difficulty).',
  },
  q5_d: {
    marks: 2,
    exemplar: '7.6500 g to 3 significant figures = 7.65 g. Award 1 mark for correct value; 1 mark for correct number of significant figures.',
    keyConcepts: ['Significant figures'],
    keywords: ['7.65 g', '3 significant figures', 'Spanish gold escudo', 'sig figs'],
    feedbackHit: 'Correct — 7.6500 g rounded to 3 significant figures is 7.65 g.',
    feedbackMiss: 'To 3 significant figures: count from the first non-zero digit. 7.6500 → the first 3 significant figures are 7, 6, 5 → 7.65 g.',
  },
  q5_e: {
    marks: 1,
    exemplar: '(7.6500 / 8.50) × 100 = 90.0%. Award 1 mark for correct answer (accept 90.0 or 90%).',
    keyConcepts: ['Percentage calculation'],
    keywords: ['7.65 / 8.50 × 100', '90.0%', 'percentage gold', 'escudo'],
    feedbackHit: 'Correct — 7.65 / 8.50 × 100 = 90.0%.',
    feedbackMiss: 'Percentage = (mass of gold / total mass) × 100 = (7.65 / 8.50) × 100 = 90.0%.',
  },

  // ─── Q6: Carbon Cycle ────────────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Grey arrow (1) = combustion: fuel + oxygen → carbon dioxide + water. Red arrow (2) = respiration: glucose + oxygen → carbon dioxide + water. Green arrow (3) = photosynthesis: carbon dioxide + water → glucose + oxygen. Award 1 mark for each correct pair, max 2.',
    keyConcepts: ['Carbon cycle', 'Combustion', 'Respiration', 'Photosynthesis'],
    keywords: ['combustion', 'respiration', 'photosynthesis', 'CO₂', 'glucose', 'oxygen', 'water'],
    feedbackHit: 'Correct — you matched all three arrows to the correct chemical processes.',
    feedbackMiss: 'Grey = combustion (burning fuel); Red = respiration (organisms releasing energy); Green = photosynthesis (plants taking in CO₂).',
    blankAnswers: ['fuel + oxygen → carbon dioxide + water', 'glucose + oxygen → carbon dioxide + water', 'carbon dioxide + water → glucose + oxygen'],
  },
  q6_b: {
    marks: 2,
    exemplar: 'From the graph: 1985 ≈ +0.05°C anomaly; 2005 ≈ +0.35°C anomaly. Temperature increase = 0.35 − 0.05 = 0.30°C. Award 1 mark for reading both values; 1 mark for calculating the correct difference (accept ±0.05 tolerance on each reading).',
    keyConcepts: ['Graph reading', 'Climate change'],
    keywords: ['0.30°C', '1985', '2005', 'temperature anomaly', 'GISS', 'temperature increase'],
    feedbackHit: 'Correct — you read both graph values and subtracted to find the increase of 0.30°C.',
    feedbackMiss: 'Read the anomaly values for 1985 and 2005 from the graph, then subtract: 2005 value − 1985 value ≈ 0.30°C.',
  },
  q6_c: {
    marks: 12,
    exemplar: 'Criterion D rubric (0–12 marks). Activities that increase carbon footprint: driving cars/burning petrol; flying; using electricity from coal/gas power stations; heating homes with gas/oil; deforestation. Explanation of increase: fossil fuels release CO₂ and other greenhouse gases; CO₂ absorbs infrared radiation; enhanced greenhouse effect → global warming; deforestation reduces photosynthesis (less CO₂ removed). Activities that decrease carbon footprint: using renewable energy (solar, wind); switching to electric vehicles; reducing air travel; improving home insulation; planting trees. Justification for decrease: renewables do not burn fossil fuels so no CO₂ release; trees increase photosynthesis and act as carbon sinks; electric vehicles produce no direct emissions. Individual vs societal: individuals can change diet, transport, home energy; governments can implement carbon taxes, renewable energy policies, international agreements (Paris Agreement). Link to carbon cycle: reduced fossil fuel burning means less carbon enters atmosphere as CO₂; reforestation increases rate of carbon uptake by photosynthesis.',
    keyConcepts: ['Criterion D', 'Carbon footprint', 'Sustainability'],
    keywords: ['carbon footprint', 'fossil fuels', 'renewable energy', 'individual', 'society', 'climate change', 'greenhouse gas', 'deforestation', 'photosynthesis'],
    feedbackHit: 'Excellent Criterion D response — you covered increasing and decreasing activities at individual and societal scale with scientific justification.',
    feedbackMiss: 'Structure your answer: (1) activities that increase footprint + explanation; (2) activities that decrease footprint + justification; (3) individual and societal examples; (4) link to the carbon cycle.',
  },

  // ─── Q7: Vehicle Fuel Systems ────────────────────────────────────────────────
  q7_: {
    marks: 17,
    exemplar: 'Criterion D rubric (0–17 marks). Students compare two vehicle fuel systems (e.g. diesel car vs hydrogen fuel-cell car). Environmental impact: diesel burns hydrocarbon fuel → CO₂, NOₓ, particulates → air pollution and climate change; hydrogen fuel cell → only water vapour emitted, but hydrogen production may involve fossil fuels (grey hydrogen) or electrolysis (green hydrogen). Running costs: diesel currently cheaper per km in many regions; hydrogen refuelling infrastructure is limited and more expensive; fuel-cell cars have higher purchase price. Fuel sustainability: diesel is a finite fossil fuel and contributes to resource depletion and emissions; hydrogen can be renewable (electrolysis from solar/wind) making it sustainable long-term. Usefulness: diesel cars have extensive infrastructure and range; hydrogen cars have faster refuelling than battery electric but fewer refuelling stations; range anxiety less of an issue than battery EV. Balance: award marks for balanced, evidence-based comparison; deduct for one-sided account without counter-argument. Higher bands require evaluation of limitations and trade-offs.',
    keyConcepts: ['Criterion D', 'Environmental sustainability', 'Vehicle emissions'],
    keywords: ['diesel', 'hydrogen fuel cell', 'CO₂', 'NOₓ', 'water vapour', 'green hydrogen', 'grey hydrogen', 'running costs', 'fuel sustainability', 'usefulness', 'infrastructure', 'appraisal'],
    feedbackHit: 'Excellent — you provided a balanced comparison of environmental impact, costs, sustainability, and usefulness for both systems.',
    feedbackMiss: 'Compare BOTH systems across all four areas: (1) environmental impact; (2) running costs; (3) fuel sustainability; (4) usefulness/practicality. Include supporting data and acknowledge trade-offs.',
  },
}
