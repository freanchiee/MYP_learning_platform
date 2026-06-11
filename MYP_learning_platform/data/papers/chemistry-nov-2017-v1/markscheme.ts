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
  // ── Q1: Tin and Antimony ─────────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Group 4 (accept Group 14); Period 5.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 4', 'group 14', 'period 5', 'tin Sn'],
    feedbackHit: 'Correct — tin is in Group 4/14, Period 5.',
    feedbackMiss: 'Locate Sn on the periodic table: count across for group, down for period.',
  },
  q1_b: {
    marks: 4,
    exemplar: 'Equation 1: 2SnS + 3O₂ → 2SnO + 2SO₂ (reactants correct 1 mark; products correct 1 mark). Equation 2: 2SnO + C → 2Sn + CO₂ (reactants correct 1 mark; products correct 1 mark).',
    keyConcepts: ['Balancing equations', 'Conservation of atoms'],
    keywords: ['2SnS', '3O₂', '2SnO', '2SO₂', '2SnO', '2Sn', 'CO₂', 'balancing'],
    feedbackHit: 'Both tin extraction equations correctly balanced.',
    feedbackMiss: 'Count atoms on each side. Eq1: 2Sn, 2S, 6O each side ✓; Eq2: 2Sn, 2O, 1C each side ✓.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'SO₂ is formed which contributes to the formation of acid rain (1 mark). OR CO₂ is formed which contributes to climate change (1 mark).',
    keyConcepts: ['Pollution', 'Acid rain', 'Climate change'],
    keywords: ['SO₂', 'acid rain', 'CO₂', 'climate change'],
    feedbackHit: 'Correct — SO₂ → acid rain and/or CO₂ → climate change.',
    feedbackMiss: 'Name the specific gas (SO₂ or CO₂) and its environmental consequence.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Any two from: electrical conductivity, thermal conductivity, malleability, appearance (metallic lustre). Do NOT accept high melting point for tin (it has a relatively low melting point).',
    keyConcepts: ['Metallic properties'],
    keywords: ['electrical conductivity', 'thermal conductivity', 'malleability', 'lustre'],
    feedbackHit: 'Correct — two valid metallic properties of tin.',
    feedbackMiss: 'Focus on general metallic properties: conduct electricity, conduct heat, can be bent/shaped, shiny.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Antimony is a metalloid/semi-metal, so it would have a different structure; different structure gives rise to different properties (WTTE — would be different).',
    keyConcepts: ['Metalloids', 'Semi-metals'],
    keywords: ['metalloid', 'semi-metal', 'different structure', 'different properties', 'antimony'],
    feedbackHit: 'Correct — antimony is a metalloid with different structure from tin.',
    feedbackMiss: 'Antimony is NOT a metal — it is a metalloid. Its structure differs, so its properties differ from tin.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'Sb-121: electrons = 51, neutrons = 70 (121 − 51). Sb-123: protons = 51, neutrons = 72 (123 − 51). Mark for: neutrons of Sb-121 = 70 (1 mark); neutrons of Sb-123 = 72 (1 mark).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['neutrons', 'mass number minus atomic number', '121 − 51', '123 − 51', '70', '72'],
    feedbackHit: 'Correct — neutrons = mass number − atomic number.',
    feedbackMiss: 'Neutrons = mass number − proton number. Sb-121: 121 − 51 = 70. Sb-123: 123 − 51 = 72.',
  },
  q1_g: {
    marks: 2,
    exemplar: 'Same electron configuration (1 mark), so all isotopes of antimony will react in the same way (1 mark). WTTE — only award second mark if first is given.',
    keyConcepts: ['Isotopes', 'Chemical reactivity'],
    keywords: ['same electron configuration', 'same chemical properties', 'react same way'],
    feedbackHit: 'Correct — isotopes share the same electron arrangement and react identically.',
    feedbackMiss: 'Chemical behaviour depends on electrons, not neutrons. All Sb isotopes have 51 electrons → react identically.',
  },

  // ── Q2: Food Flavouring Esters ───────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'WTTE — must relate to volatility of esters. Example: "How does the volatility of food flavouring esters depend on the length of their hydrocarbon chain?"',
    keyConcepts: ['Research question', 'Inquiry'],
    keywords: ['volatility', 'ester', 'carbon chain length', 'research question'],
    feedbackHit: 'Good research question relating ester chain length to volatility.',
    feedbackMiss: 'Your RQ must specify what is being investigated (volatility) and what is being changed (chain length).',
  },
  q2_b: {
    marks: 3,
    exemplar: 'WTTE — ECF from (a). As the length of the carbon chain increases, the volatility of the ester will decrease, because the intermolecular forces become stronger (WTTE — accept "bonds are stronger").',
    keyConcepts: ['Hypothesis', 'Intermolecular forces'],
    keywords: ['chain length increases', 'volatility decreases', 'intermolecular forces stronger'],
    feedbackHit: 'Complete hypothesis linking chain length → stronger IMFs → lower volatility.',
    feedbackMiss: 'State: direction of IV change, direction of DV change, and the reason (intermolecular forces).',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Independent variable: ester OR length of carbon chain. Dependent variable: time to completely evaporate. Control variables (any two): temperature, surface area, mass or volume of ester, container size or shape, wind.',
    keyConcepts: ['Variables', 'Experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'temperature', 'surface area'],
    feedbackHit: 'Variables correctly identified — IV, DV, and two CVs.',
    feedbackMiss: 'IV = what you change; DV = time to evaporate; CVs = at least two factors kept constant.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Cold: low temperature — no heat added so avoids breakdown/hydrolysis of the ester; or equilibrium remains towards the right/ester-forming side. Dry: avoids adding water to the mixture; no change in water concentration so avoids hydrolysis; equilibrium remains towards the right (ORA).',
    keyConcepts: ['Reversible reactions', 'Equilibrium', 'Ester hydrolysis'],
    keywords: ['cold', 'low temperature', 'ester breakdown', 'equilibrium', 'dry', 'no water', 'hydrolysis'],
    feedbackHit: 'Correct — cold prevents hydrolysis; dry prevents water shifting equilibrium left.',
    feedbackMiss: 'Adding heat or water would reverse the ester-forming reaction. Cold prevents thermal decomposition; dry prevents water-induced hydrolysis.',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,

  // ── Q3: Silver Nitrate + Metals ──────────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,
  q3_b: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,
  q3_c: {
    marks: 15,
    exemplar: 'Rubric marking (max 15). Equipment (1→2→3): some equipment listed → includes thermometer → appropriate complete set (silver nitrate solution, thermometer/probe, test tubes, measuring cylinder). Variables (1→2): one CV → two CVs stated. Method (1→2→3): attempt at method → temperature measured → fine technique (record temp when stable, minimise heat loss). Measurements (1→2→3): one metal → more than two → all five metals. Sufficient data (1→2): trials planned → trials + averages. Safety (1→2): safety precaution stated → linked to hazard (silver nitrate oxidising, stains skin).',
    keyConcepts: ['Criterion B — Inquiry and Design'],
    keywords: ['silver nitrate', 'thermometer', 'temperature', 'metals', 'variables', 'safety', 'repeats'],
    feedbackHit: 'Well-designed method with equipment, variables, steps, repeats, and safety.',
    feedbackMiss: 'List equipment, state IV/DV/CV, clear steps, plan repeats, link safety to silver nitrate hazard (oxidising, stains skin yellow-brown).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'Order (least to most reactive): Copper – Iron – Zinc – Aluminium – Magnesium. All correct for 1 mark.',
    keyConcepts: ['Reactivity series'],
    keywords: ['copper', 'iron', 'zinc', 'aluminium', 'magnesium', 'reactivity order'],
    feedbackHit: 'Correct — Cu < Fe < Zn < Al < Mg in reactivity.',
    feedbackMiss: 'More reactive metals produce a larger temperature rise. Cu=6°C < Fe=15°C < Zn=31°C < Al=38°C < Mg=49°C.',
    blankAnswers: ['Copper', 'Iron', 'Zinc', 'Aluminium', 'Magnesium'],
  },
  q3_e: {
    marks: 2,
    exemplar: 'The order of reactivity is based on the temperature rise (WTTE). The larger the temperature change, the more reactive the metal.',
    keyConcepts: ['Reactivity', 'Scientific reasoning'],
    keywords: ['temperature rise', 'more reactive', 'larger temperature change'],
    feedbackHit: 'Correct reasoning linking temperature change to reactivity.',
    feedbackMiss: 'State: larger temperature change = more reactive metal. Reference specific data values if possible.',
  },
  q3_f: {
    type: 'mcq',
    correct: 0,
  } as MCQEntry,
  q3_g: {
    marks: 5,
    exemplar: 'Bar graph with: labels for metal on x-axis (Cu, Fe, Zn, Al, Mg) (1 mark); title linking temperature change to different metals (1 mark); data for one metal correctly plotted (1 mark); data for all metals plotted correctly (1 mark); unit °C on y-axis (1 mark). Correct heights: Cu=6, Fe=15, Zn=31, Al=38, Mg=49.',
    keyConcepts: ['Bar graph', 'Data presentation'],
    keywords: ['bar graph', 'x-axis metals', 'y-axis temperature change', '°C', 'title'],
    feedbackHit: 'Correct bar graph with all metals, accurate heights, title, and units.',
    feedbackMiss: 'Title linking temperature to metal; x-axis: Cu, Fe, Zn, Al, Mg; y-axis: "Temperature change / °C"; bars at Cu=6, Fe=15, Zn=31, Al=38, Mg=49.',
  },
  q3_h: {
    marks: 2,
    exemplar: 'Limited validity as results produced once only (WTTE). More than one trial should be carried out to produce an average.',
    keyConcepts: ['Validity', 'Reliability'],
    keywords: ['single trial', 'limited validity', 'repeats', 'average'],
    feedbackHit: 'Correct — single results lack validity; repeats improve reliability.',
    feedbackMiss: 'Only one result per metal means errors cannot be detected. Repeat each trial and average the results.',
  },

  // ── Q4: US Penny + Sulfuric Acid ─────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Test with lit splint/spill/stick (1 mark). Gas burns with a squeaky pop — so it is hydrogen (1 mark).',
    keyConcepts: ['Hydrogen gas test'],
    keywords: ['lit splint', 'squeaky pop', 'burns', 'hydrogen'],
    feedbackHit: 'Correct — lit splint gives squeaky pop confirming hydrogen.',
    feedbackMiss: 'Hold a lit splint near the gas — hydrogen burns with a characteristic squeaky pop.',
  },
  q4_b: {
    marks: 3,
    exemplar: 'If the coin is 100% copper then it will react the slowest (1 mark), because copper is the least reactive of these metals (1 mark). Accept "newer coins will react the fastest" with appropriate reasoning (1 mark).',
    keyConcepts: ['Hypothesis', 'Reactivity'],
    keywords: ['100% copper', 'slowest', 'least reactive', 'copper'],
    feedbackHit: 'Correct hypothesis linking copper composition to slowest reaction.',
    feedbackMiss: 'Link composition to reactivity: the more copper in the coin, the less reactive it will be.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'IV: composition of coin OR date of coin. DV: volume of gas produced in fixed time OR time to produce fixed volume (not volume or time alone). CV (any two): temperature, concentration of acid, type of acid.',
    keyConcepts: ['Variables'],
    keywords: ['independent variable', 'composition', 'dependent variable', 'volume of gas', 'control variable'],
    feedbackHit: 'All variables correctly identified.',
    feedbackMiss: 'IV = coin composition/date; DV = gas volume in fixed time or time for fixed volume; CV = temperature and acid concentration.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Coin 1 (~55 s) → Cu/Zn composition → 1962–1982 (1 mark); Coin 2 (~25 s) → Zn/Cu composition → 1982–present (1 mark); Coin 3 (~90 s) → Cu/Ni composition → 1857–1865 (1 mark).',
    keyConcepts: ['Graph interpretation', 'Data analysis'],
    keywords: ['bar chart', 'composition', '1962–1982', '1982–present', '1857–1865', 'cross-reference'],
    feedbackHit: 'Correct years identified for all three coins.',
    feedbackMiss: 'Read time from simulation → find composition on bar chart → find year range from composition table.',
    blankAnswers: ['1962–1982', '1982–present', '1857–1865'],
  },
  q4_e: {
    marks: 3,
    exemplar: 'Any three: coins may not be exact percentages in chart; calibration graph uses averages not specific coins; no repeats so experimental errors possible; gas collection may be inaccurate.',
    keyConcepts: ['Evaluation', 'Sources of error'],
    keywords: ['averages', 'not exact percentages', 'no repeats', 'errors', 'gas collection'],
    feedbackHit: 'Three valid sources of discrepancy identified.',
    feedbackMiss: 'Consider: exact composition, average vs specific coins, repeatability, gas collection accuracy.',
  },
  q4_f: {
    marks: 2,
    exemplar: 'Destructive method (WTTE) — so cannot keep the coin OR cannot repeat results.',
    keyConcepts: ['Experimental limitations'],
    keywords: ['destructive', 'cannot keep coin', 'cannot repeat'],
    feedbackHit: 'Correct — acid dissolves the coin so it cannot be preserved.',
    feedbackMiss: 'Once placed in acid, the coin is destroyed — it cannot be kept or retested.',
  },

  // ── Q5: Welcome Stranger Nugget ─────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: '7.10 × 10⁴ g (accept 7.102 × 10⁴, 7.1019 × 10⁴). 1 mark for correct coefficient (7.10…), 1 mark for correct power of 10 (×10⁴).',
    keyConcepts: ['Scientific notation'],
    keywords: ['7.10', '× 10⁴', 'scientific notation', '71019 g'],
    feedbackHit: 'Correct — 71019 g expressed as 7.10 × 10⁴ g.',
    feedbackMiss: '71019 → move decimal to get a number between 1 and 10: 7.1019 × 10⁴. Round to 3 sig figs: 7.10 × 10⁴.',
  },
  q5_b: {
    marks: 4,
    exemplar: 'Any three comments about the method: destructive; able to prove metal is gold; no details of how solution was measured; no safety precaution; no repeats/not reproducible. Comment on validity (1 mark): result is inconclusive OR artefact could be less than 24K.',
    keyConcepts: ['Criterion C evaluation', 'Scientific method'],
    keywords: ['destructive', 'no safety', 'no repeats', 'inconclusive', 'less than 24K'],
    feedbackHit: 'Good evaluation of method limitations and validity.',
    feedbackMiss: 'Is it destructive? Reproducible? Is there safety information? Does it give a definitive result for the exact karat?',
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two evaluative points: "weaker" is incorrect — should be "stronger" or "more concentrated" (purer gold needs more concentrated acid); gold IS resistant to acids / slow to react (second part of hypothesis is correct); the relationship between IV (purity) and DV (acid concentration) is inverted in this hypothesis.',
    keyConcepts: ['Hypothesis evaluation'],
    keywords: ['weaker incorrect', 'stronger/concentrated', 'gold resistant', 'slow to react', 'relationship inverted'],
    feedbackHit: 'Correctly identifies error in hypothesis: "weaker" should be "stronger"; identifies what is correct.',
    feedbackMiss: 'Check the hypothesis against the data: purer gold (24K) requires the MOST concentrated acid, not the least. Gold IS resistant to acids — this part is correct.',
  },
  q5_d: {
    marks: 2,
    exemplar: '31.1 g (to 3 significant figures). 1 mark for correct value; 1 mark for correct unit g.',
    keyConcepts: ['Significant figures'],
    keywords: ['31.1', 'g', '3 significant figures', 'gold mass'],
    feedbackHit: 'Correct — 31.1035 g rounded to 3 sig figs is 31.1 g.',
    feedbackMiss: '31.1035 → 3 sig figs: count 3 significant digits from left: 3, 1, 1 → 31.1 g.',
  },
  q5_e: {
    marks: 1,
    exemplar: '31.1035 / 33.93 × 100 = 91.7% (to 3 significant figures).',
    keyConcepts: ['Percentage calculation', 'Purity'],
    keywords: ['percentage', '31.1035 / 33.93', '× 100', '91.7%'],
    feedbackHit: 'Correct — 31.1035/33.93 × 100 = 91.66…% ≈ 91.7%.',
    feedbackMiss: 'Percentage = (mass of gold / total coin mass) × 100 = (31.1035 / 33.93) × 100.',
  },

  // ── Q6: Carbon Cycle V1 ─────────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Grey arrow (1) = fuel + oxygen → carbon dioxide + water. Red arrow (2) = glucose + oxygen → carbon dioxide + water. Green arrow (3) = carbon dioxide + water → glucose + oxygen. 1 mark for one correct; 2 marks for all correct.',
    keyConcepts: ['Carbon cycle', 'Combustion', 'Respiration', 'Photosynthesis'],
    keywords: ['combustion', 'respiration', 'photosynthesis', 'carbon dioxide', 'glucose'],
    feedbackHit: 'Correct — grey=combustion, red=respiration, green=photosynthesis.',
    feedbackMiss: 'Grey arrows = combustion (burning fuel); red = cellular respiration; green = photosynthesis (reverse of respiration).',
    blankAnswers: ['fuel + oxygen → carbon dioxide + water', 'glucose + oxygen → carbon dioxide + water', 'carbon dioxide + water → glucose + oxygen'],
  },
  q6_b: {
    marks: 2,
    exemplar: 'Correct answer: 0.52°C (1985 ≈ +0.08°C; 2015 ≈ +0.60°C; difference = 0.52°C). Correct unit: °C. (1 mark each)',
    keyConcepts: ['Graph reading', 'Climate change'],
    keywords: ['0.52', '°C', '1985', '2015', 'temperature increase'],
    feedbackHit: 'Correct — reads 1985 and 2015 values from graph and calculates the difference.',
    feedbackMiss: 'Read the temperature anomaly at 1985 and 2015 from the GISS graph, then subtract to find the increase.',
  },
  q6_c: {
    marks: 12,
    exemplar: 'Rubric (max 12, Crit D). Activities increasing footprint (1→2→3): single mention → relevant with emissions → more than one. Activities decreasing footprint (1→2→3): single mention → relevant with explanation → more than one. Impact on individual/society (1→2→3): general reference → specific individual OR society → both individual AND society. Explanations (1→2→3): incomplete → complete for increase OR decrease → complete for both.',
    keyConcepts: ['Criterion D', 'Carbon footprint', 'Sustainability'],
    keywords: ['carbon footprint', 'fossil fuels', 'renewable energy', 'individual', 'society', 'emissions', 'carbon cycle'],
    feedbackHit: 'Strong Crit D response with specific activities, individual and societal impacts, and full explanation.',
    feedbackMiss: 'Cover: activities increasing footprint, activities decreasing it, individual AND societal impacts, scientific explanation of carbon cycle effects.',
  },

  // ── Q7: Evaluate Heating Systems ─────────────────────────────────────────────
  q7_: {
    marks: 17,
    exemplar: 'Rubric (max 17, Crit D). Environmental impact (1→2→3→4): one system mentioned → both systems → both with data → both with supporting data. Running costs/economic impact (1→2→3→4): one economic impact → both systems → both with explicit data → both with data. Fuel sustainability (1→2→3→4): one comment → one fuel with justification OR both fuels → both with justification → both with full justification. Usefulness (1→2→3→4): one general comment → usefulness for both with data → more than one comment for both with data → more than one with explicit data. Appraisal (1→2→3): linked to previous arguments → with some scientific justification → complete detailed justification. Context: gas boiler vs air-source heat pump (or other selected pair).',
    keyConcepts: ['Criterion D', 'Environmental sustainability', 'Domestic energy'],
    keywords: ['gas boiler', 'heat pump', 'CO₂ emissions', 'running costs', 'electricity', 'natural gas', 'renewable', 'sustainability', 'COP', 'efficiency'],
    feedbackHit: 'Excellent Crit D evaluation with environmental, cost, sustainability, and usefulness dimensions, supported by data and a justified conclusion.',
    feedbackMiss: 'Compare your two heating systems across: environmental impact (CO₂ per kWh), running costs (electricity vs gas prices), fuel sustainability (renewable vs finite), usefulness (warm climate vs cold climate performance). Support with data and conclude.',
  },
}
