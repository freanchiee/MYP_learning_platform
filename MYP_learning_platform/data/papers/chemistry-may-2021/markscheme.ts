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
  // ── Q1 ────────────────────────────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 1 } as MCQEntry,  // 2 electrons (index 1)

  q1_b: {
    marks: 2,
    exemplar: 'Group 4 [1 mark]; Period 3 [1 mark]. Allow Group 14, IVA. Do not accept if group and period are switched.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'Silicon'],
    keywords: ['Group 4', 'Period 3', 'silicon', 'Si', 'periodic table', 'group 14'],
    feedbackHit: 'Correct — silicon is in Group 4, Period 3.',
    feedbackMiss: 'Silicon (Si, atomic number 14) is in Group 4 (Group 14) and Period 3 of the periodic table.',
  },

  q1_c: { type: 'mcq', correct: 1 } as MCQEntry,  // Transition metals (index 1)

  q1_d: {
    marks: 4,
    exemplar: 'H atom has one electron (in outer shell so is electronically unstable) [1 mark]. H atoms need to share electrons in order to gain stability OR to obtain the electron configuration of a noble gas [1 mark]. He (already) has a full outer shell of electrons OR complete outer shell [1 mark]. (so) there is no need for He to share electrons OR does not react OR does not bond OR is already stable [1 mark]. Accept "stable electron shell", "noble gas configuration", "complete duplet". Do NOT accept "balanced". Ignore "octet".',
    keyConcepts: ['Covalent bonding', 'Electron configuration', 'Noble gas stability'],
    keywords: ['outer shell', 'electron', 'share', 'stable', 'noble gas', 'duplet', 'helium', 'hydrogen', 'diatomic'],
    feedbackHit: 'Excellent — H needs to share electrons; He already has a full outer shell and does not bond.',
    feedbackMiss: 'H has 1 outer shell electron (unstable) → shares to get duplet. He has full outer shell → no need to share → does not form molecules.',
  },

  q1_e: { type: 'mcq', correct: 2 } as MCQEntry,  // Structure C (index 2)

  // ── Q2 ────────────────────────────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Working: mass number = number of protons + number of neutrons = 8 + 9 = 17 [1 mark]. Final answer: mass number = 17 [1 mark]. Award two marks for 17 alone (if working is implied). Max 1 if g is added (¹⁷g or similar).',
    keyConcepts: ['Isotopes', 'Mass number', 'Protons and neutrons'],
    keywords: ['mass number', '17', 'protons', 'neutrons', 'isotope', 'oxygen', '8+9'],
    feedbackHit: 'Correct — mass number = protons (8) + neutrons (9) = 17.',
    feedbackMiss: 'Mass number = number of protons + number of neutrons = 8 + 9 = 17. Oxygen always has 8 protons.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Accept any reasonable response related to oxygen, for example: oxygen can be produced from decomposition of CO₂; depends on the amount of water that decomposes; oxygen formed may not be enough for any kind of biological process to occur; reference to O₂ being in organic molecules. Do NOT accept that oxygen is in water.',
    keyConcepts: ['Abiotic oxygen sources', 'Photosynthesis vs decomposition'],
    keywords: ['decomposition', 'CO₂', 'non-biological', 'water', 'abiotic', 'organic molecules'],
    feedbackHit: 'Correct — molecular oxygen can be produced abiotically (e.g. from CO₂ decomposition).',
    feedbackMiss: 'Oxygen can form from decomposition of CO₂ or water without any living organisms being involved.',
  },

  q2_c: {
    marks: 1,
    exemplar: 'Relative molecular mass = 12 + 16 + 18 = 46. Ignore units if present.',
    keyConcepts: ['Relative molecular mass', 'Isotopes', 'Carbon dioxide'],
    keywords: ['46', 'relative molecular mass', 'carbon 12', 'oxygen 16', 'oxygen 18', 'CO₂'],
    feedbackHit: 'Correct — 12 + 16 + 18 = 46.',
    feedbackMiss: 'Add the atomic masses: C(12) + O-16(16) + O-18(18) = 46.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Top of the range = 7 [1 mark]. Range expressed precisely between 4.3–4.5 to 7 [second mark for both correct limits]. Award two marks for the correct answer (4.3–4.5 to 7).',
    keyConcepts: ['pH indicators', 'pH range', 'Acidic solutions'],
    keywords: ['pH', '7', '4.3', '4.5', 'range', 'indicator A', 'indicator B', 'carbon dioxide solution'],
    feedbackHit: 'Correct — the CO₂ solution has a pH range of approximately 4.3–4.5 to 7.',
    feedbackMiss: 'Use the chart: identify where both indicators would give the observed colours. The range is pH 4.3–4.5 to 7.',
  },

  q2_e: {
    marks: 2,
    exemplar: 'The temperature is higher OR there is more heat OR more energy on the surface of exoplanets that are closer to the star they orbit [1 mark]. (so) at higher temperatures the rate of the reaction increases [1 mark].',
    keyConcepts: ['Effect of temperature on reaction rate', 'Kinetic theory'],
    keywords: ['temperature', 'higher', 'energy', 'rate increases', 'star', 'closer', 'reaction rate'],
    feedbackHit: 'Well done — higher temperature closer to the star increases the rate of decomposition.',
    feedbackMiss: 'Closer to the star → higher temperature → more energy → particles collide more frequently/forcefully → rate increases.',
  },

  q2_f: {
    marks: 2,
    exemplar: 'Catalysts increase the rate of a reaction OR speed up a reaction [1 mark]. Any further additional point from the list: reaction using a catalyst has a lower (activation) energy; reaction using a catalyst reduces (activation) energy; reaction using a catalyst takes place by an alternative path; the catalyst is not used up or consumed [1 mark].',
    keyConcepts: ['Catalyst', 'Activation energy', 'Reaction rate'],
    keywords: ['catalyst', 'rate', 'activation energy', 'lower', 'alternative path', 'not consumed', 'speed up'],
    feedbackHit: 'Correct — catalyst increases reaction rate by providing a lower activation energy pathway.',
    feedbackMiss: 'A catalyst speeds up a reaction by providing an alternative reaction pathway with lower activation energy. It is not consumed.',
  },

  q2_g: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions, for example: collect materials that may be useful on the Earth; collect materials that may give information about the origin of the structure or atmosphere of the Moon or the universe; search for water; enable possible human settlement in the future; collect materials to look for signs of life; political control of the moon; the Moon could be used as a base for exploring other planets.',
    keyConcepts: ['Space exploration', 'Scientific discovery'],
    keywords: ['resources', 'water', 'human settlement', 'signs of life', 'political', 'base', 'exploration'],
    feedbackHit: 'Good — two valid reasons for returning to the Moon beyond those in the question.',
    feedbackMiss: 'Valid reasons include: searching for water/resources, enabling future human settlement, using the Moon as a base for further exploration, or political/scientific motivations.',
  },

  // ── Q3 ────────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'A: Solid [1 mark]; B: Liquid [1 mark].',
    keyConcepts: ['States of matter', 'Candle combustion'],
    keywords: ['solid', 'liquid', 'wax', 'state', 'A', 'B'],
    feedbackHit: 'Correct — A (candle base) = Solid; B (wax near wick) = Liquid.',
    feedbackMiss: 'The base of the candle (A) remains solid; the wax near the wick (B) melts to become liquid.',
    blankAnswers: ['Solid', 'Liquid'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Name: Pentane [1 mark]. Chemical class: Alkane [1 mark]. ECF for alkene if pentene was stated as the name of the hydrocarbon. Do NOT accept ? for pentane.',
    keyConcepts: ['Organic chemistry', 'Alkanes', 'Homologous series'],
    keywords: ['pentane', 'alkane', 'C₅H₁₂', 'hydrocarbon', 'homologous series'],
    feedbackHit: 'Correct — C₅H₁₂ is pentane, an alkane.',
    feedbackMiss: 'C₅H₁₂ follows the alkane formula (CₙH₂ₙ₊₂). Five carbons → pent → pentane. Class = alkane.',
  },

  q3_c: {
    marks: 2,
    exemplar: '1 C₅H₁₂(l) + 8 O₂(g) → 5 CO₂(g) + 6 H₂O(g). Reactants correctly balanced [1 mark]; Products correctly balanced [1 mark]. Do NOT accept ? for pentane.',
    keyConcepts: ['Balancing equations', 'Combustion reactions', 'Alkanes'],
    keywords: ['1', '8', '5', '6', 'C₅H₁₂', 'O₂', 'CO₂', 'H₂O', 'balanced', 'combustion'],
    feedbackHit: 'Correct — 1 C₅H₁₂ + 8 O₂ → 5 CO₂ + 6 H₂O.',
    feedbackMiss: 'Balance by counting atoms: C: 5→5CO₂✓; H: 12→6H₂O✓; O: 5×2+6=16=8×2✓. Coefficients: 1, 8, 5, 6.',
    blankAnswers: ['1', '8', '5', '6'],
  },

  q3_d: {
    marks: 3,
    exemplar: 'Hypothesis direction: increase OR decrease (Do not award the first marking point alone). Valid reasons: [Increase] The wax or fuel will not move away from the wick (and so will remain to allow the candle to burn for a longer time) OR reference to wick will burn longer [1 mark]. [Increase] The metal will remove the heat (and so the wax will not melt and be available to burn) [1 mark]. [Decrease] The wax is contained (and so it is available to burn) [1 mark]. All direction + reason combinations accepted.',
    keyConcepts: ['Hypothesis formulation', 'Candle combustion', 'Criterion B'],
    keywords: ['hypothesis', 'increase', 'decrease', 'because', 'metal holder', 'wax', 'wick', 'burn time'],
    feedbackHit: 'Well done — direction stated with a coherent scientific reason linking to the experiment.',
    feedbackMiss: 'State direction (increase/decrease) AND give a reason: e.g. "The metal will conduct heat away, so wax melts slower → candle burns longer."',
    blankAnswers: ['increase'],
  },

  q3_e: {
    marks: 1,
    exemplar: '1.06 × 10⁻¹ (g min⁻¹). Ignore units if present.',
    keyConcepts: ['Standard form', 'Scientific notation'],
    keywords: ['1.06', '10⁻¹', 'standard form', 'scientific notation', '3720', 'rate'],
    feedbackHit: 'Correct — 0.106 = 1.06 × 10⁻¹ g min⁻¹.',
    feedbackMiss: '0.106 in standard form: move decimal right 1 place → 1.06 × 10⁻¹.',
  },

  q3_f: {
    marks: 2,
    exemplar: 'Accept any two points from the list: data plotted incorrectly; should show rate decreasing with height or a negative correlation; should be a scatter graph; it is continuous data; IV (altitude) should be on x-axis OR DV should be on y-axis; number of decimal places on the rates axis; order of rates on the x-axis; increments on the x-axis. Accept linear or line graph.',
    keyConcepts: ['Graph errors', 'Data presentation', 'Axes'],
    keywords: ['axes swapped', 'scatter graph', 'bar chart', 'altitude', 'x-axis', 'y-axis', 'continuous data', 'decreasing'],
    feedbackHit: 'Correct — two valid graph errors identified.',
    feedbackMiss: 'Errors include: (1) altitude (IV) should be on x-axis, rate on y-axis; (2) should be scatter/line graph not bar chart (continuous data).',
  },

  q3_g: {
    marks: 4,
    exemplar: 'Accept any two reasons from the list [max 2]: different weather or location; different equipment; available oxygen or air composition. WTTE. Do not accept different type of wax. Correctly linked suggestion of how the result would be affected [max 2]: effect of specific weather type or location correctly linked to rate; effect of different equipment correctly linked to rate of combustion.',
    keyConcepts: ['Experimental variables', 'Oxygen availability', 'Rate of combustion'],
    keywords: ['different equipment', 'weather', 'location', 'oxygen', 'air composition', 'rate', 'combustion', 'lantern', 'enclosed'],
    feedbackHit: 'Well done — two reasons given with linked suggestion of how rate is affected.',
    feedbackMiss: 'Day 1 used an enclosed lantern (less O₂ available) → lower combustion rate. Day 2 used open tea-light → more O₂ → higher rate. Weather or location could also affect O₂ availability.',
  },

  // ── Q4 ────────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Independent variable: fragrance (Accept "flavour", "ingredient") [1 mark]. Dependent variable: burn time [1 mark].',
    keyConcepts: ['Independent and dependent variables'],
    keywords: ['independent variable', 'fragrance', 'flavour', 'ingredient', 'dependent variable', 'burn time'],
    feedbackHit: 'Correct — IV = fragrance/flavour; DV = burn time.',
    feedbackMiss: 'IV = what you deliberately change = fragrance (vanilla vs strawberry). DV = what you measure = burn time.',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Working: (32.0 + 28.5 + 29.5) / 3 [1 mark]. Answer: 30.0 hours (30(.0) hours) [1 mark]. ECF from first marking point for transcription error.',
    keyConcepts: ['Mean calculation', 'Data processing'],
    keywords: ['30', 'mean', 'average', '32.0', '28.5', '29.5', 'strawberry', 'burn time'],
    feedbackHit: 'Correct — (32.0 + 28.5 + 29.5) ÷ 3 = 30.0 hours.',
    feedbackMiss: 'Mean = (32.0 + 28.5 + 29.5) ÷ 3 = 90.0 ÷ 3 = 30.0 hours.',
  },

  q4_c: {
    marks: 1,
    exemplar: 'The second student did not include the outlier at 24.3 hours in their average calculation. WTTE.',
    keyConcepts: ['Outliers', 'Data analysis'],
    keywords: ['outlier', '24.3', 'excluded', 'anomalous', 'different average'],
    feedbackHit: 'Correct — the friend excluded the outlier 24.3 hours from the mean calculation.',
    feedbackMiss: 'The friend excluded the outlier value (24.3 hours) when calculating the average, giving 28.5 instead of 27.1.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Not valid because the strawberry has a longer time to burn [1 mark]. Accept any two additional points from the list: different containers; different masses so no direct comparison; insufficient data to test the hypothesis; in first data set would need to repeat investigation due to the 24.3 hours; different wick sizes. Ignore references to surface area.',
    keyConcepts: ['Hypothesis validity', 'Data evaluation', 'Fair test'],
    keywords: ['not valid', 'strawberry', 'longer', 'different containers', 'different mass', 'outlier', 'no direct comparison'],
    feedbackHit: 'Well done — not valid; strawberry candle burns longer than vanilla.',
    feedbackMiss: 'The hypothesis is not valid: the strawberry candle (30.0 h) burns longer than the vanilla candle (27.1 h), which is the opposite of what was predicted.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Improvement: Use the same style or mass of container OR the same candle OR additional trials and calculate averages OR use the same mass of wax OR time how long the candles took to burn [1 mark]. Justification: This would give identical heat transfer characteristics OR Reduce random error [1 mark]. WTTE. Do not accept trials with different fragrances as this will not improve validity.',
    keyConcepts: ['Validity improvement', 'Experimental design'],
    keywords: ['same container', 'same mass', 'heat transfer', 'more trials', 'average', 'validity', 'random error'],
    feedbackHit: 'Correct — same container type gives identical heat transfer conditions, improving validity.',
    feedbackMiss: 'Use the same container style/mass of wax so that heat transfer is identical for both candles. Or add more trials and calculate means to reduce random error.',
  },

  // ── Q5 ────────────────────────────────────────────────────────────────────
  q5_a: {
    marks: 2,
    exemplar: 'Correct arrangement visible (filter paper in funnel, beaker beneath) [1 mark]. Only filter paper and beaker selected — second mark awarded only if no other equipment is seen [1 mark]. The funnel is already provided to candidates so should not be counted as additional equipment.',
    keyConcepts: ['Filtration', 'Laboratory equipment', 'Separation techniques'],
    keywords: ['filter paper', 'beaker', 'funnel', 'filtration', 'equipment', 'arrangement'],
    feedbackHit: 'Correct — filter paper in the funnel and a beaker beneath to collect the filtrate.',
    feedbackMiss: 'For filtration: place filter paper in the funnel (already in stand) and put a beaker below to collect the filtrate. No other equipment needed.',
  },

  q5_b: { type: 'mcq', correct: 2 } as MCQEntry,  // Symbol C (flammable) — index 2

  q5_c: {
    marks: 6,
    exemplar: 'Bar chart with: y-axis scale with even increments [1 mark]; y-axis scale starting at zero [1 mark]; all data correctly plotted [1 mark]; a title linking IV with DV [1 mark]; x-axis label: Type of fuel OR biomass [1 mark]; y-axis label: Energy / MJ Tonne⁻¹ [1 mark].',
    keyConcepts: ['Graph construction', 'Bar chart', 'Biomass energy'],
    keywords: ['bar chart', 'y-axis scale', 'zero', 'plotted', 'title', 'type of fuel', 'energy', 'MJ tonne⁻¹'],
    feedbackHit: 'Excellent — bar chart with correct scale, labels, title, and all bars correctly plotted.',
    feedbackMiss: 'Bar chart: x-axis = "Type of fuel/biomass"; y-axis = "Energy / MJ Tonne⁻¹"; scale starts at 0 with even increments; all 5 bars correctly plotted; title links IV and DV.',
  },

  q5_d: { type: 'mcq', correct: 1 } as MCQEntry,  // Exothermic (index 1)

  q5_e: {
    marks: 2,
    exemplar: 'Any two points from: Reduces waste [1 mark] + Reduced reliance on landfill [1 mark]. OR As a new fuel source [1 mark] + Reduced reliance on fossil fuels or reduces waste [1 mark]. OR Used as fertiliser [1 mark] + Reduced need for artificial fertilisers or reduces waste [1 mark]. WTTE.',
    keyConcepts: ['Green chemistry', 'Waste reduction', 'Sustainability'],
    keywords: ['reduces waste', 'landfill', 'fossil fuels', 'fuel source', 'fertiliser', 'sustainable', 'recycling'],
    feedbackHit: 'Well done — two valid reasons for recycling coffee grounds with justification.',
    feedbackMiss: 'Recycling coffee grounds: (1) reduces waste → less landfill; (2) provides new fuel source → reduces reliance on fossil fuels.',
  },

  // ── Q6 ────────────────────────────────────────────────────────────────────
  q6_: {
    marks: 16,
    exemplar: 'Criterion B design rubric (16 marks):\n1. Variables [max 4]: some variables implied (1); fuel type as IV or DV as mass or one CV identified (2); fuel type as IV AND DV as mass AND one CV (3); fuel type as IV AND DV AND mass AND temperature change AND one CV AND additional CV identified (4).\n2. Justification [max 2]: set up one selected with justification that temp change can be measured (1); set up two selected with justification that temp change can be measured AND heat losses are minimized (2).\n3. Sufficient data [max 4]: reference to different fuels (1); all five fuels or three trials (2); all five fuels AND three trials (3); all five fuels AND three trials AND calculates mean (4).\n4. Method [max 4]: attempt at method but may not be relevant (1); attempt at method, insufficient detail and temperature change mentioned but not likely to give relevant data (2); method for measuring mass of fuel burned for fixed temperature change (<5 mins), described, could be followed, will produce relevant data (3); complete method for measuring mass of fuel burned, fixed temp change (<5 mins), for all fuels, fully explained and could be replicated (4).\n5. Safety [max 2]: a safety concern is mentioned (1); a safety concern is mentioned and linked to a specific hazard (2).',
    keyConcepts: ['Criterion B design', 'Energy density investigation', 'Variables', 'Safety'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'fuel type', 'mass', 'temperature', 'method', 'safety', 'trials', 'mean'],
    feedbackHit: 'Well-designed investigation — all five dimensions addressed with full method detail.',
    feedbackMiss: 'Strong design: IV=fuel type (A-E); DV=mass of fuel burned; CV=volume of water, time; justify set-up 2 for minimised heat loss; burn each fuel 3× for fixed time; calculate mean; safety: wear goggles, fire extinguisher nearby.',
  },

  // ── Q7 ────────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Australia (and Oceania). Full mark for Australia alone or Oceania alone.',
    keyConcepts: ['Graph reading', 'Water consumption data'],
    keywords: ['Australia', 'Oceania', 'smallest increase', 'graph reading', '1900', '1980'],
    feedbackHit: 'Correct — Australia and Oceania had the smallest increase between 1900 and 1980.',
    feedbackMiss: 'Read the graph: Australia and Oceania (blue line) shows the smallest increase between 1900 and 1980.',
  },

  q7_b: {
    marks: 2,
    exemplar: '2150 ±100 [1 mark]. Billion m³ OR cubic metres [1 mark]. Award second mark only if unit is given.',
    keyConcepts: ['Graph reading', 'Units', 'Water consumption'],
    keywords: ['2150', 'billion', 'm³', 'cubic metres', '1905', 'Asia', 'read graph'],
    feedbackHit: 'Correct — approximately 2150 billion m³ at 1905.',
    feedbackMiss: 'Read the y-axis at 1905 for Asia. The value is approximately 2150 billion m³. Must include units.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'Population increase. Do NOT accept increasing industrialisation alone.',
    keyConcepts: ['Water demand', 'Population growth'],
    keywords: ['population', 'increase', 'population growth', 'more people', 'demand'],
    feedbackHit: 'Correct — population increase in Asia led to greater water demand.',
    feedbackMiss: 'The main reason for dramatically increased water consumption in Asia is population growth (do not credit industrialisation alone).',
  },

  q7_d: {
    marks: 2,
    exemplar: 'Pore size [1 mark]. Justification: The pores of the filter need to be smaller than the material that is being separated out [1 mark]. WTTE.',
    keyConcepts: ['Filtration', 'Pore size', 'Water purification'],
    keywords: ['pore size', 'smaller', 'material', 'separated', 'filter', 'filtration'],
    feedbackHit: 'Correct — pore size is the most important feature; pores must be smaller than contaminants.',
    feedbackMiss: 'Pore size is most important because the filter pores must be smaller than the particles being removed (bacteria, parasites).',
  },

  q7_e: {
    marks: 6,
    exemplar: 'Criterion D explanation rubric (6 marks):\n1=an advantage OR disadvantage of CCU (ORA); 2=an advantage AND disadvantage of CCU (ORA); 3=an advantage AND disadvantage of CCU (ORA) with either supported by scientific reasoning; 4=an advantage AND disadvantage of CCU (ORA) with both supported by scientific reasoning. Justification: 1=a simple justification; 2=a simple justification with supporting evidence.\n\nExample: Ceramic core unit (CCU) advantage: longer filter life (12 months vs 6) → less frequent replacement costs. CCU disadvantage: higher initial cost ($166 vs $92) → more expensive to buy. CCU has smaller pore size (0.22 vs 1.2–2.6 μm) → better at removing bacteria and Giardia. Activated carbon unit (ACU) advantage: lower initial cost, better water flow rate. ACU disadvantage: shorter filter life, larger pore size → less effective at removing small pathogens. For a private well with contamination risk from E. coli and Giardia, the CCU is more suitable as its pore size (0.22 μm) is smaller than E. coli (0.5 μm) and Giardia (4–8 μm), ensuring safe drinking water.',
    keyConcepts: ['Criterion D evaluation', 'Ceramic filtration', 'Activated carbon', 'Water purification'],
    keywords: ['ceramic core', 'activated carbon', 'pore size', 'cost', 'filter life', 'E. coli', 'Giardia', 'bacteria', 'advantage', 'disadvantage'],
    feedbackHit: 'Excellent — advantages and disadvantages of both units with scientific reasoning and justified recommendation.',
    feedbackMiss: 'Compare CCU and ACU on cost, lifespan, pore size, and flow rate. Use pore size data to justify which removes bacteria (0.22 μm < E. coli 0.5 μm). Conclude which is suitable for private well water.',
  },

  // ── Q8 ────────────────────────────────────────────────────────────────────
  q8_: {
    marks: 13,
    exemplar: 'Criterion D evaluation rubric (13 marks):\n1. Economic comparison [max 4]: a statement comparing two technologies (1); a statement comparing all three technologies OR a statement comparing two technologies with supporting evidence (2); a statement comparing all three technologies with supporting evidence (3); a statement comparing all three technologies with supporting evidence using data (4).\n2. Environmental [max 4]: one impact on the environment is implied (1); a statement of one impact on the environment for one technology (2); a statement of one impact on the environment of at least two technologies (3); a statement of one impact on the environment of all three technologies (4).\n3. Not suitable [max 2]: one technology is supported with a reason (may be incorrect) (1); micro and ultrafiltration are not suitable as heavy metals are not removed (2).\n4. Social considerations [max 2]: a statement of a social impact (1); a statement of a social impact with supporting evidence (2).\n5. Appraisal [max 2]: a concluding appraisal (1); a concluding appraisal linking the issues discussed (2).\n\nExample: Microfiltration ($166 per 100 m³) is cheapest but cannot remove heavy metals — unsuitable for the coastal city (main industry = metal recycling → heavy metal contamination likely). Nanofiltration removes heavy metals but at higher cost. Desalination by reverse osmosis is most expensive but essential for a coastal city needing seawater treatment. Environmental: microfiltration produces filter waste; desalination raises seawater salt concentration near plant — harmful to marine life. Social: building a large desalination facility requires land near the coast and significant employment. Conclusion: Desalination is best suited as it can treat seawater (coastal location) and remove heavy metals.',
    keyConcepts: ['Criterion D evaluation', 'Water purification technologies', 'Microfiltration', 'Nanofiltration', 'Desalination'],
    keywords: ['economic', 'environmental', 'social', 'microfiltration', 'nanofiltration', 'desalination', 'heavy metals', 'not suitable', 'appraisal', 'coastal'],
    feedbackHit: 'Excellent — all five dimensions covered with evidence-based comparison and justified appraisal.',
    feedbackMiss: 'Address: (1) Economic: compare costs of all three; (2) Environmental: one impact each; (3) Not suitable: micro/ultrafiltration cannot remove heavy metals; (4) Social: employment/infrastructure; (5) Appraisal: desalination best for coastal city with heavy metal contamination.',
  },
}
