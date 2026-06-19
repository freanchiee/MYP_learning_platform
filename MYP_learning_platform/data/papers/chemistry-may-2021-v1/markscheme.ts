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
  // ── Q1 — Seawater minerals & natural gas ──────────────────────────────────
  q1_a: { type: 'mcq', correct: 1 } as MCQEntry, // 2 electrons (Ca, Group 2) — index 1

  q1_b: {
    marks: 2,
    exemplar: 'Group 1 (accept Group 1A) [1 mark]; Period 3 [1 mark]. Do not accept if group and period are switched.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Sodium'],
    keywords: ['Group 1', 'Period 3', 'sodium', 'Na', 'periodic table'],
    feedbackHit: 'Correct — sodium is in Group 1, Period 3.',
    feedbackMiss: 'Sodium (Na, atomic number 11) is in Group 1 and Period 3 of the periodic table.',
  },

  q1_c: { type: 'mcq', correct: 3 } as MCQEntry, // Halogens — index 3

  q1_d: {
    marks: 4,
    exemplar: 'H atom has one electron (in its outer shell so is electronically unstable) [1 mark]. H atoms need to share electrons in order to gain stability OR to obtain the electron configuration of a noble gas [1 mark]. He (already) has a full outer shell of electrons OR a complete outer shell [1 mark]. (so) there is no need for He to share electrons OR it does not react OR does not bond OR is already stable [1 mark]. Accept "stable electron shell", "noble gas configuration", "complete duplet". Do NOT accept "balanced". Ignore "octet".',
    keyConcepts: ['Covalent bonding', 'Electron configuration', 'Noble gas stability'],
    keywords: ['outer shell', 'electron', 'share', 'stable', 'noble gas', 'duplet', 'helium', 'hydrogen', 'diatomic'],
    feedbackHit: 'Excellent — H needs to share electrons; He already has a full outer shell and does not bond.',
    feedbackMiss: 'H has 1 outer-shell electron (unstable) → shares to get a duplet. He has a full outer shell → no need to share → does not form molecules.',
  },

  q1_e: { type: 'mcq', correct: 1 } as MCQEntry, // Structure B (methane: 4 shared pairs) — index 1

  // ── Q2 — Deep-sea hydrothermal vents ──────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Working: mass number = number of protons + number of neutrons = 16 + 17 = 33 [1 mark]. Final answer: mass number = 33 [1 mark]. Award two marks for 33 alone (if working is implied). Sulfur always has 16 protons.',
    keyConcepts: ['Isotopes', 'Mass number', 'Protons and neutrons'],
    keywords: ['mass number', '33', 'protons', 'neutrons', 'isotope', 'sulfur', '16+17'],
    feedbackHit: 'Correct — mass number = protons (16) + neutrons (17) = 33.',
    feedbackMiss: 'Mass number = number of protons + number of neutrons = 16 + 17 = 33. Sulfur always has 16 protons.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Accept any reasonable response, for example: oxygen can be produced from the decomposition of CO₂ or water; oxygen may form from non-biological (abiotic) chemical reactions; the oxygen formed may not be enough for any biological process. Do NOT accept that oxygen is in water.',
    keyConcepts: ['Abiotic oxygen sources', 'Photosynthesis vs decomposition'],
    keywords: ['decomposition', 'CO₂', 'non-biological', 'abiotic', 'water', 'not enough'],
    feedbackHit: 'Correct — molecular oxygen can be produced abiotically (e.g. from CO₂ decomposition).',
    feedbackMiss: 'Oxygen can form from the decomposition of CO₂ or water without any living organisms being involved.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'Relative molecular mass = 32 + 16 + 16 = 64. Ignore units if present.',
    keyConcepts: ['Relative molecular mass', 'Isotopes', 'Sulfur dioxide'],
    keywords: ['64', 'relative molecular mass', 'sulfur 32', 'oxygen 16', 'SO₂'],
    feedbackHit: 'Correct — 32 + 16 + 16 = 64.',
    feedbackMiss: 'Add the atomic masses: S-32 (32) + O-16 (16) + O-16 (16) = 64.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Top of the range = 7 [1 mark]. Range expressed precisely between 4.3–4.5 and 7 [second mark for both correct limits]. Award two marks for the correct answer (4.3–4.5 to 7).',
    keyConcepts: ['pH indicators', 'pH range', 'Acidic solutions'],
    keywords: ['pH', '7', '4.3', '4.5', 'range', 'indicator A', 'indicator B', 'hydrogen sulfide solution'],
    feedbackHit: 'Correct — the H₂S solution has a pH range of approximately 4.3–4.5 to 7.',
    feedbackMiss: 'Use the chart: find where both indicators give the observed colours. The range is pH 4.3–4.5 to 7.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'The temperature is higher OR there is more heat OR more energy in the fluid closer to the mouth of the vent [1 mark]. (so) at higher temperatures the rate of the reaction increases [1 mark].',
    keyConcepts: ['Effect of temperature on reaction rate', 'Kinetic theory'],
    keywords: ['temperature', 'higher', 'energy', 'rate increases', 'vent', 'closer', 'reaction rate'],
    feedbackHit: 'Well done — higher temperature nearer the vent increases the rate of decomposition.',
    feedbackMiss: 'Closer to the vent → higher temperature → more energy → particles collide more frequently/forcefully → rate increases.',
  },

  q2_f: {
    marks: 2,
    exemplar: 'Catalysts increase the rate of a reaction OR speed up a reaction [1 mark]. Any further point: a reaction using a catalyst has a lower (activation) energy; the catalyst provides an alternative reaction pathway; the catalyst is not used up or consumed [1 mark].',
    keyConcepts: ['Catalyst', 'Activation energy', 'Reaction rate'],
    keywords: ['catalyst', 'rate', 'activation energy', 'lower', 'alternative path', 'not consumed', 'speed up'],
    feedbackHit: 'Correct — a catalyst increases the reaction rate by providing a lower-activation-energy pathway.',
    feedbackMiss: 'A catalyst speeds up a reaction by providing an alternative pathway with lower activation energy. It is not consumed.',
  },

  q2_g: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions, for example: collect mineral or metal resources that may be useful; gain information about the origin of life or of the Earth; search for new species or new medicines; map the seabed for navigation or cables; national or commercial control of resources; use the site as a base for further research.',
    keyConcepts: ['Deep-sea exploration', 'Scientific discovery'],
    keywords: ['resources', 'minerals', 'new species', 'medicines', 'origin of life', 'control', 'mapping'],
    feedbackHit: 'Good — two valid reasons for exploring the deep ocean beyond those in the question.',
    feedbackMiss: 'Valid reasons include: searching for mineral/metal resources, discovering new species or medicines, learning about the origin of life, or commercial/strategic control.',
  },

  // ── Q3 — Camping-stove butane canisters ───────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'A: Liquid [1 mark]; B: Gas [1 mark]. Under pressure inside the sealed canister the fuel is a liquid; once released through the jet it is a gas.',
    keyConcepts: ['States of matter', 'Liquefied fuel gas'],
    keywords: ['liquid', 'gas', 'butane', 'state', 'A', 'B', 'pressure'],
    feedbackHit: 'Correct — A (inside the sealed canister) = Liquid; B (released to the burner) = Gas.',
    feedbackMiss: 'Under pressure the fuel is a liquid in the canister (A); released to the burner it becomes a gas (B).',
    blankAnswers: ['Liquid', 'Gas'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Name: Hexane [1 mark]. Chemical class: Alkane [1 mark]. ECF for alkene if hexene was stated as the name. Do NOT accept "?".',
    keyConcepts: ['Organic chemistry', 'Alkanes', 'Homologous series'],
    keywords: ['hexane', 'alkane', 'C₆H₁₄', 'hydrocarbon', 'homologous series'],
    feedbackHit: 'Correct — C₆H₁₄ is hexane, an alkane.',
    feedbackMiss: 'C₆H₁₄ follows the alkane formula (CₙH₂ₙ₊₂). Six carbons → hex → hexane. Class = alkane.',
  },

  q3_c: {
    marks: 2,
    exemplar: '2 C₄H₁₀(g) + 13 O₂(g) → 8 CO₂(g) + 10 H₂O(g). Reactants correctly balanced [1 mark]; Products correctly balanced [1 mark]. Do NOT accept "?".',
    keyConcepts: ['Balancing equations', 'Combustion reactions', 'Alkanes'],
    keywords: ['2', '13', '8', '10', 'C₄H₁₀', 'O₂', 'CO₂', 'H₂O', 'balanced', 'combustion'],
    feedbackHit: 'Correct — 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.',
    feedbackMiss: 'Balance by counting atoms: C: 2×4=8→8CO₂✓; H: 2×10=20→10H₂O✓; O: 16+10=26=13×2✓. Coefficients: 2, 13, 8, 10.',
    blankAnswers: ['2', '13', '8', '10'],
  },

  q3_d: {
    marks: 3,
    exemplar: 'Hypothesis direction: increase OR decrease (do not award the direction alone). Valid reasons: [Increase] the windshield stops the breeze blowing the flame about, so the fuel is used more steadily / less is wasted, making the canister last longer [1 mark]. [Increase] the windshield reduces heat loss so less fuel is needed to keep the burner hot [1 mark]. [Decrease] the windshield restricts the air supply, so the fuel must flow faster / burns less efficiently and runs out sooner [1 mark]. All direction + reason combinations accepted.',
    keyConcepts: ['Hypothesis formulation', 'Combustion', 'Criterion B'],
    keywords: ['hypothesis', 'increase', 'decrease', 'because', 'windshield', 'breeze', 'running time', 'heat loss'],
    feedbackHit: 'Well done — direction stated with a coherent scientific reason linking to the experiment.',
    feedbackMiss: 'State a direction (increase/decrease) AND give a reason: e.g. "The windshield reduces heat loss, so less fuel is needed → the canister lasts longer."',
    blankAnswers: ['increase'],
  },

  q3_e: {
    marks: 1,
    exemplar: '1.18 × 10⁻¹ (g min⁻¹). Ignore units if present.',
    keyConcepts: ['Standard form', 'Scientific notation'],
    keywords: ['1.18', '10⁻¹', 'standard form', 'scientific notation', '3720', 'rate'],
    feedbackHit: 'Correct — 0.118 = 1.18 × 10⁻¹ g min⁻¹.',
    feedbackMiss: '0.118 in standard form: move the decimal right 1 place → 1.18 × 10⁻¹.',
  },

  q3_f: {
    marks: 2,
    exemplar: 'Accept any two points: the data should show rate decreasing with altitude (a negative correlation); it should be a scatter or line graph because the data is continuous, not a bar chart; the IV (altitude) should be on the x-axis AND the DV (rate) on the y-axis (the axes are swapped); issues with the scale or increments. Accept "line graph".',
    keyConcepts: ['Graph errors', 'Data presentation', 'Axes'],
    keywords: ['axes swapped', 'scatter graph', 'bar chart', 'altitude', 'x-axis', 'y-axis', 'continuous data', 'decreasing'],
    feedbackHit: 'Correct — two valid graph errors identified.',
    feedbackMiss: 'Errors include: (1) altitude (IV) should be on the x-axis and rate (DV) on the y-axis — they are swapped; (2) it should be a scatter/line graph not a bar chart (the data is continuous).',
  },

  q3_g: {
    marks: 4,
    exemplar: 'Accept any two reasons [max 2]: different equipment (enclosed windshield vs open stove); different weather or breeze; different oxygen or air supply to the flame. WTTE. Correctly linked suggestion of how the rate would be affected [max 2]: Day 1 enclosed → restricted air → slower / less complete combustion; Day 2 open in a breeze → more oxygen reaches the flame → faster combustion. Each effect must be linked to the rate.',
    keyConcepts: ['Experimental variables', 'Oxygen availability', 'Rate of combustion'],
    keywords: ['different equipment', 'weather', 'breeze', 'oxygen', 'air supply', 'rate', 'combustion', 'enclosed', 'windshield'],
    feedbackHit: 'Well done — two reasons given with a linked suggestion of how the rate is affected.',
    feedbackMiss: 'Day 1 enclosed windshield → restricted air supply → slower/less-complete combustion. Day 2 open in a breeze → more oxygen reaches the flame → faster combustion.',
  },

  // ── Q4 — Two hand-warmer brands ───────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Independent variable: the brand of hand-warmer (accept "type of hand-warmer") [1 mark]. Dependent variable: the time the hand-warmer stays warm OR the time above 40 °C [1 mark].',
    keyConcepts: ['Independent and dependent variables'],
    keywords: ['independent variable', 'brand', 'type', 'dependent variable', 'time', 'stays warm'],
    feedbackHit: 'Correct — IV = brand/type of hand-warmer; DV = time it stays warm.',
    feedbackMiss: 'IV = what you deliberately change = the brand (PolarPro vs TrailHeat). DV = what you measure = the time it stays warm.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Working: (9.5 + 8.0 + 8.5) / 3 [1 mark]. Answer: 8.7 hours (26.0 ÷ 3 = 8.67, accept 8.7) [1 mark]. ECF from the first marking point for a transcription error.',
    keyConcepts: ['Mean calculation', 'Data processing'],
    keywords: ['8.7', 'mean', 'average', '9.5', '8.0', '8.5', 'TrailHeat', 'warm time'],
    feedbackHit: 'Correct — (9.5 + 8.0 + 8.5) ÷ 3 = 8.7 hours.',
    feedbackMiss: 'Mean = (9.5 + 8.0 + 8.5) ÷ 3 = 26.0 ÷ 3 = 8.7 hours.',
  },

  q4_c: {
    marks: 1,
    exemplar: 'The friend did not include the outlier at 6.3 hours when calculating the average. WTTE.',
    keyConcepts: ['Outliers', 'Data analysis'],
    keywords: ['outlier', '6.3', 'excluded', 'anomalous', 'different average'],
    feedbackHit: 'Correct — the friend excluded the outlier (6.3 hours) from the mean calculation.',
    feedbackMiss: 'The friend excluded the outlier value (6.3 hours): (8.0 + 7.6) ÷ 2 = 7.8 hours instead of 7.3.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Not valid because the TrailHeat hand-warmer has the longer warm time (8.7 h vs PolarPro 7.3 h) [1 mark]. Accept any two further points: the two sachets contain different masses of iron, so it is not a fair comparison; insufficient data to test the hypothesis; the 6.3 h outlier in the PolarPro data reduces reliability; surface area was not measured. Ignore references to surface area as a justification.',
    keyConcepts: ['Hypothesis validity', 'Data evaluation', 'Fair test'],
    keywords: ['not valid', 'TrailHeat', 'longer', 'different mass of iron', 'fair comparison', 'outlier'],
    feedbackHit: 'Well done — not valid; TrailHeat stays warm longer than PolarPro.',
    feedbackMiss: 'The hypothesis is not valid: TrailHeat (8.7 h) stays warm longer than PolarPro (7.3 h), the opposite of the prediction.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Improvement: use the same mass of iron in each sachet OR test more brands of the same mass OR carry out additional trials and calculate averages [1 mark]. Justification: this makes it a fair comparison / controls a key variable / reduces random error [1 mark]. WTTE.',
    keyConcepts: ['Validity improvement', 'Experimental design'],
    keywords: ['same mass of iron', 'fair comparison', 'control variable', 'more trials', 'average', 'random error'],
    feedbackHit: 'Correct — using the same mass of iron makes the comparison fair, improving validity.',
    feedbackMiss: 'Use the same mass of iron in each sachet so the comparison is fair, or add more trials and average to reduce random error.',
  },

  // ── Q5 — Spent tea leaves & biomass ───────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: 'Correct arrangement visible (filter paper in the funnel, beaker beneath) [1 mark]. Only filter paper and beaker selected — second mark awarded only if no other equipment is added [1 mark]. The funnel is already provided so should not be counted as additional equipment.',
    keyConcepts: ['Filtration', 'Laboratory equipment', 'Separation techniques'],
    keywords: ['filter paper', 'beaker', 'funnel', 'filtration', 'equipment', 'arrangement'],
    feedbackHit: 'Correct — filter paper in the funnel and a beaker beneath to collect the filtrate.',
    feedbackMiss: 'For filtration: place the filter paper in the funnel (already in the stand) and put a beaker below to collect the filtrate. No other equipment is needed.',
  },

  q5_b: { type: 'mcq', correct: 1 } as MCQEntry, // Symbol B (flammable) — index 1

  q5_c: {
    marks: 6,
    exemplar: 'Bar chart with: y-axis scale with even increments [1 mark]; y-axis scale starting at zero [1 mark]; all data correctly plotted (Tea logs 17 200, Compost 11 500, Poultry waste 10 800, Straw 14 400, Wood chips 13 000) [1 mark]; a title linking the IV with the DV [1 mark]; x-axis label: Type of biomass / fuel [1 mark]; y-axis label: Energy / MJ tonne⁻¹ [1 mark].',
    keyConcepts: ['Graph construction', 'Bar chart', 'Biomass energy'],
    keywords: ['bar chart', 'y-axis scale', 'zero', 'plotted', 'title', 'type of biomass', 'energy', 'MJ tonne⁻¹'],
    feedbackHit: 'Excellent — bar chart with correct scale, labels, title, and all bars correctly plotted.',
    feedbackMiss: 'Bar chart: x-axis = "Type of biomass/fuel"; y-axis = "Energy / MJ tonne⁻¹"; scale starts at 0 with even increments; all 5 bars correctly plotted; a title links the IV and DV.',
  },

  q5_d: { type: 'mcq', correct: 1 } as MCQEntry, // Exothermic — index 1

  q5_e: {
    marks: 2,
    exemplar: 'Any two linked points: reduces waste [1 mark] + reduces reliance on landfill [1 mark]. OR provides a new fuel source [1 mark] + reduces reliance on fossil fuels [1 mark]. OR can be used as a fertiliser/compost [1 mark] + reduces the need for artificial fertilisers [1 mark]. WTTE.',
    keyConcepts: ['Green chemistry', 'Waste reduction', 'Sustainability'],
    keywords: ['reduces waste', 'landfill', 'fossil fuels', 'fuel source', 'fertiliser', 'sustainable', 'recycling'],
    feedbackHit: 'Well done — two valid reasons for recycling spent tea leaves with justification.',
    feedbackMiss: 'Recycling spent tea leaves: (1) reduces waste → less landfill; (2) provides a new fuel source → reduces reliance on fossil fuels.',
  },

  // ── Q6 — BBQ charcoal energy density (Crit B design) ──────────────────────
  q6_: {
    marks: 16,
    exemplar: 'Criterion B design rubric (16 marks):\n1. Variables [max 4]: some variables implied (1); charcoal brand as IV OR mass of charcoal burned as DV OR one CV identified (2); brand as IV AND mass burned as DV AND one CV (3); brand as IV AND DV as mass burned AND fixed temperature change AND one CV AND an additional CV (4). Typical CVs: volume of water, fixed temperature rise, distance from flame, same container.\n2. Justification [max 2]: set-up 1 selected with a justification that the temperature change can be measured (1); set-up 2 (shielded) selected with a justification that the temperature change can be measured AND heat losses are minimised (2).\n3. Sufficient data [max 4]: reference to different charcoals (1); all five charcoals OR three trials (2); all five charcoals AND three trials (3); all five charcoals AND three trials AND calculates a mean (4).\n4. Method [max 4]: attempt at a method but may not be relevant (1); method mentions temperature change but is not likely to give relevant data (2); method for measuring the mass of charcoal burned to give a fixed temperature change, described and able to be followed (3); complete method for all five charcoals, fully explained and replicable (4).\n5. Safety [max 2]: a safety concern is mentioned (1); a safety concern is mentioned and linked to a specific hazard (e.g. hot apparatus, naked flame) (2).',
    keyConcepts: ['Criterion B design', 'Energy density investigation', 'Variables', 'Safety'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'charcoal brand', 'mass burned', 'temperature', 'method', 'safety', 'trials', 'mean'],
    feedbackHit: 'Well-designed investigation — all five dimensions addressed with full method detail.',
    feedbackMiss: 'Strong design: IV = charcoal brand (A–E); DV = mass of charcoal burned for a fixed temperature rise; CV = volume of water, temperature change, distance from flame; choose set-up 2 to minimise heat loss; burn each charcoal 3× and average; safety: heatproof mat, goggles, fire extinguisher nearby.',
  },

  // ── Q7 — Global plastic production & rainwater filters ────────────────────
  q7_a: {
    marks: 1,
    exemplar: '1950–1960 (the decade with the smallest rise, only ~6 million tonnes). Accept "1950s" or the first decade shown.',
    keyConcepts: ['Graph reading', 'Plastic production data'],
    keywords: ['1950–1960', '1950s', 'smallest increase', 'graph reading', 'plastic production'],
    feedbackHit: 'Correct — 1950–1960 shows the smallest increase in plastic production.',
    feedbackMiss: 'Read the graph: the 1950–1960 decade has the shallowest rise (about 2 → 8 million tonnes).',
  },

  q7_b: {
    marks: 2,
    exemplar: '35 ±5 million tonnes [1 mark]. Unit: million tonnes [1 mark]. Award the second mark only if a unit is given.',
    keyConcepts: ['Graph reading', 'Units', 'Plastic production'],
    keywords: ['35', 'million tonnes', '1970', 'read graph', 'units'],
    feedbackHit: 'Correct — approximately 35 million tonnes in 1970.',
    feedbackMiss: 'Read the y-axis at 1970: the value is about 35 million tonnes. Must include units.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'Increase in population OR increase in consumer demand for plastic products / packaging. Do NOT accept a single industry alone without linking to demand.',
    keyConcepts: ['Plastic demand', 'Population and consumption'],
    keywords: ['population', 'consumer demand', 'packaging', 'more products', 'demand'],
    feedbackHit: 'Correct — rising population and consumer demand drove the increase in plastic production.',
    feedbackMiss: 'The main reason is rising population and consumer demand for cheap plastic products and packaging.',
  },

  q7_d: {
    marks: 2,
    exemplar: 'Pore size [1 mark]. Justification: the pores of the filter need to be smaller than the material that is being removed (e.g. bacteria, silt, dissolved contaminants) [1 mark]. WTTE.',
    keyConcepts: ['Filtration', 'Pore size', 'Water purification'],
    keywords: ['pore size', 'smaller', 'material', 'removed', 'filter', 'filtration'],
    feedbackHit: 'Correct — pore size is the most important feature; pores must be smaller than the contaminants.',
    feedbackMiss: 'Pore size is most important because the filter pores must be smaller than the particles being removed (bacteria, silt, dissolved metals).',
  },

  q7_e: {
    marks: 6,
    exemplar: 'Criterion D explanation rubric (6 marks):\n1 = an advantage OR disadvantage of the reverse-osmosis unit (RO); 2 = an advantage AND a disadvantage of RO; 3 = an advantage AND a disadvantage with one supported by scientific reasoning; 4 = an advantage AND a disadvantage with both supported by scientific reasoning. Justification: 1 = a simple justification; 2 = a simple justification with supporting evidence.\n\nExample: RO advantage — its tiny pore size (0.0001 μm) removes dissolved metals such as lead washed off a roof AND kills/removes bacteria, so the water is safe to drink. RO disadvantage — higher cost ($210 vs $130) and a much slower flow rate (1.5 vs 6.0 L min⁻¹), so it is more expensive and slower to fill a glass. UV advantage — cheaper and faster flow, and it still kills bacteria. UV disadvantage — it does NOT remove dissolved metals such as lead. For rooftop rainwater, which can pick up lead and other metals from the roof, the RO unit is more suitable because only it removes dissolved metals as well as bacteria, making the water genuinely safe to drink.',
    keyConcepts: ['Criterion D evaluation', 'Reverse osmosis', 'UV treatment', 'Water purification'],
    keywords: ['reverse osmosis', 'UV', 'pore size', 'cost', 'flow rate', 'dissolved metals', 'lead', 'bacteria', 'advantage', 'disadvantage'],
    feedbackHit: 'Excellent — advantages and disadvantages of both units with scientific reasoning and a justified recommendation.',
    feedbackMiss: 'Compare RO and UV on cost, flow rate, pore size and what each removes. Use the data: only RO removes dissolved metals (lead from the roof). Conclude which is suitable for rooftop rainwater.',
  },

  // ── Q8 — Alpine town water purification (Crit D evaluation) ────────────────
  q8_: {
    marks: 13,
    exemplar: 'Criterion D evaluation rubric (13 marks):\n1. Economic comparison [max 4]: a statement comparing two technologies (1); a statement comparing all three OR a comparison of two with supporting evidence (2); a comparison of all three with supporting evidence (3); a comparison of all three using the cost data ($90 / $180 / $260 per 100 m³) (4).\n2. Environmental [max 4]: one impact implied (1); a stated impact for one technology (2); a stated impact of at least two technologies (3); a stated impact of all three technologies (4).\n3. Not suitable [max 2]: one technology supported with a reason, possibly incorrect (1); sand filtration is not suitable on its own because it does not remove dissolved fertiliser nitrates (2).\n4. Social considerations [max 2]: a statement of a social impact (1); a social impact with supporting evidence (2).\n5. Appraisal [max 2]: a concluding appraisal (1); a concluding appraisal linking the issues discussed (2).\n\nExample: Sand filtration ($90 per 100 m³, low energy) is the cheapest and removes the rock silt from the glacier-melt river, but it cannot remove the dissolved fertiliser nitrates from farm run-off, so on its own it is unsuitable for this town. Nanofiltration ($180, medium energy) removes both the silt and the nitrates at a moderate cost and energy use. Reverse osmosis ($260, high energy) also removes both but costs the most and uses the most energy. Environmental: sand filtration produces solid silt waste; nanofiltration and reverse osmosis use more electricity (carbon footprint) and produce a concentrated brine/reject stream that must be disposed of. Social: building and running a treatment plant creates jobs but needs land and ongoing funding from residents and the ski industry. Conclusion: nanofiltration is best suited — it removes both the silt and the nitrate contamination at a lower cost and energy use than reverse osmosis, while sand filtration alone is unsuitable.',
    keyConcepts: ['Criterion D evaluation', 'Water purification technologies', 'Sand filtration', 'Nanofiltration', 'Reverse osmosis'],
    keywords: ['economic', 'environmental', 'social', 'sand filtration', 'nanofiltration', 'reverse osmosis', 'rock silt', 'nitrates', 'not suitable', 'appraisal'],
    feedbackHit: 'Excellent — all five dimensions covered with evidence-based comparison and a justified appraisal.',
    feedbackMiss: 'Address: (1) Economic: compare the costs of all three; (2) Environmental: one impact each; (3) Not suitable: sand filtration cannot remove dissolved nitrates; (4) Social: jobs/infrastructure/funding; (5) Appraisal: nanofiltration best for an alpine town with silt and nitrate contamination.',
  },
}
