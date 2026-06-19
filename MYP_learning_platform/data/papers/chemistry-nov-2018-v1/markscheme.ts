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
  // ─── Q1: Nickel ──────────────────────────────────────────────────────────────
  q1_a: {
    type: 'mcq',
    correct: 3,
  },
  q1_b: {
    type: 'mcq',
    correct: 1,
  },
  q1_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two of: variable oxidation state / variable oxidation number; forms coloured compounds (e.g. nickel(II) ions are green); acts as a catalyst; any named metallic property such as electrical conductivity, thermal conductivity, malleability, ductility, metallic lustre. Accept "they have colour." Do NOT accept "hard."',
    keyConcepts: ['Transition metal properties', 'Periodic table'],
    keywords: ['variable oxidation state', 'coloured compounds', 'catalyst', 'metallic property', 'transition metals'],
    feedbackHit: 'Correct — variable oxidation state and forming coloured compounds are defining transition metal properties.',
    feedbackMiss: 'Transition metals are characterised by: (1) variable oxidation states (e.g. Ni²⁺, Ni³⁺); (2) forming coloured compounds; (3) acting as catalysts; (4) metallic properties (conductivity, malleability).',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Protons = 28 (atomic number unchanged); Neutrons = 58 − 28 = 30; Electrons = 28 − 2 = 26 (Ni²⁺ has lost 2 electrons). Award 1 mark per correct value.',
    keyConcepts: ['Atomic structure', 'Ions'],
    keywords: ['protons 28', 'neutrons 30', 'electrons 26', 'Ni²⁺ ion', 'atomic number', 'mass number'],
    feedbackHit: 'Correct — protons = atomic number; neutrons = mass − protons; electrons = protons − charge.',
    feedbackMiss: 'For Ni²⁺: protons = 28 (always = atomic number); neutrons = 58 − 28 = 30; electrons = 28 − 2 = 26 (ion has lost 2 electrons).',
  },
  q1_e: {
    type: 'mcq',
    correct: 0,
  },
  q1_f: {
    marks: 2,
    exemplar: 'NiO = nickel oxide or nickel(II) oxide. NiCO₃ = nickel carbonate or nickel(II) carbonate. Award 1 mark each. Roman numeral II must be correct if stated.',
    keyConcepts: ['Compound nomenclature', 'Transition metal compounds'],
    keywords: ['nickel oxide', 'nickel(II) oxide', 'nickel carbonate', 'nickel(II) carbonate', 'nomenclature'],
    feedbackHit: 'Correct — NiO is nickel(II) oxide; NiCO₃ is nickel(II) carbonate.',
    feedbackMiss: 'Name the metal ion first, then the anion: NiO = nickel(II) oxide; NiCO₃ = nickel(II) carbonate. The (II) shows the nickel has a +2 charge.',
  },

  // ─── Q2: Ceramic Glaze Recycling ─────────────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'Paper sticker: dissolves in organic solvent. Steel clip: magnetic. Ceramic tile: sinks in water. Award 1 mark per correct property.',
    keyConcepts: ['Separation techniques', 'Physical properties'],
    keywords: ['dissolves in organic solvent', 'magnetic', 'sinks in water', 'paper', 'steel', 'ceramic'],
    feedbackHit: 'Correct — each material has a distinct physical property used to separate it.',
    feedbackMiss: 'Match each material to its separable property: Paper → dissolves in organic solvent; Steel → magnetic; Ceramic → sinks in water.',
    blankAnswers: ['dissolves in organic solvent', 'magnetic', 'sinks in water'],
  },
  q2_b: {
    marks: 1,
    exemplar: 'Cr₂O₃. This is the only colourant present in the Tang green glaze column but absent from the other three glazes.',
    keyConcepts: ['Data interpretation', 'Chemical formulae'],
    keywords: ['Cr₂O₃', 'chromium oxide', 'Tang green glaze', 'formula'],
    feedbackHit: 'Correct — Cr₂O₃ (chromium(III) oxide) is present only in the Tang green glaze.',
    feedbackMiss: 'Scan the table for the compound that only appears in the Tang green glaze column. That compound is Cr₂O₃.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Cr = 52 AND O = 16 seen or implied (1 mark). Molar mass = 2(52) + 3(16) = 104 + 48 = 152 (1 mark). Unit: g mol⁻¹ or g (1 mark).',
    keyConcepts: ['Molar mass', 'Relative atomic masses'],
    keywords: ['Cr 52', 'O 16', '152 g mol⁻¹', 'molar mass', 'Cr₂O₃'],
    feedbackHit: 'Correct — Mr(Cr₂O₃) = 2×52 + 3×16 = 152 g mol⁻¹.',
    feedbackMiss: 'Molar mass = sum of all atomic masses. Cr₂O₃: 2 chromium atoms (52 each) + 3 oxygen atoms (16 each) = 104 + 48 = 152 g mol⁻¹.',
  },
  q2_d: {
    marks: 3,
    exemplar: '11% of 200 g = 22 g of Cr₂O₃ (1 mark). n = m/M = 22/152 seen or implied (1 mark). Final answer: n = 0.145 mol to 3 significant figures (1 mark). Accept 0.1447 mol rounded to 0.145 mol.',
    keyConcepts: ['Moles calculation', 'n = m/M'],
    keywords: ['n = m/M', '22 g', '152 g/mol', '0.145 mol', '3 significant figures'],
    feedbackHit: 'Correct — n = 22/152 = 0.145 mol (3 sig figs).',
    feedbackMiss: 'Step 1: Cr₂O₃ is 11% of 200 g → mass = 22 g. Step 2: n = m/M = 22/152 = 0.1447 mol. To 3 sig figs = 0.145 mol.',
  },
  q2_e: {
    type: 'mcq',
    correct: 0,
  },
  q2_f: {
    marks: 2,
    exemplar: 'Silicon dioxide is insoluble in water (1 mark). Justification: it has a giant covalent structure — the strong covalent bonds throughout the structure mean it will not dissolve in water. Accept reference to sand or ceramic not dissolving in water as evidence (1 mark).',
    keyConcepts: ['Giant covalent structure', 'Solubility'],
    keywords: ['insoluble', 'giant covalent', 'strong bonds', 'silicon dioxide', 'SiO₂', 'not dissolve'],
    feedbackHit: 'Correct — SiO₂ is insoluble because its giant covalent network has too many strong bonds to be broken by water molecules.',
    feedbackMiss: 'Silicon dioxide (SiO₂) is insoluble because it has a giant covalent structure — all atoms are connected by strong covalent bonds which water cannot break.',
  },
  q2_g: {
    marks: 3,
    exemplar: 'Award any 3 reasonable points, for example: conserves raw materials (less clay/sand mined, less iron ore for steel); reduces landfill waste; saves the energy needed to fire new ceramics or smelt new steel; reduces CO₂ from manufacturing new materials; improves sustainability.',
    keyConcepts: ['Environmental sustainability', 'Recycling'],
    keywords: ['conserves raw materials', 'reduces landfill', 'saves energy', 'sustainability', 'recycling', 'lower CO₂'],
    feedbackHit: 'Good — you identified environmental benefits of recycling over landfilling.',
    feedbackMiss: 'Think about what landfill causes (waste build-up, wasted resources) and what recycling provides (conserved raw materials, energy savings, lower emissions).',
  },

  // ─── Q3: Cooking Vinegar pH ──────────────────────────────────────────────────
  q3_a: {
    marks: 4,
    exemplar: 'IV: type of vinegar (1 mark). DV: pH (accept "acidity") (1 mark). Control variables — 2 marks for any two of: volume of vinegar tested; temperature; stirring time; same pH probe/equipment used. Do not accept "amount."',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV type of vinegar', 'DV pH', 'CV volume', 'CV temperature', 'CV stirring time'],
    feedbackHit: 'Correct variables — IV: vinegar type; DV: pH; CVs: volume, temperature, stirring time.',
    feedbackMiss: 'IV = what you change (type of vinegar); DV = what you measure (pH); CVs = what you keep the same (volume, temperature, stirring time, equipment).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Accept any clear research question linking type of vinegar to pH or acidity, for example: "How does the type of vinegar affect the pH of the vinegar?" Accept "acidity" as a substitute for pH.',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['research question', 'type of vinegar', 'pH', 'acidity'],
    feedbackHit: 'Correct — your research question identifies the IV (vinegar type) and DV (pH).',
    feedbackMiss: 'The research question must link the IV to the DV: "How does the TYPE OF VINEGAR affect the pH?"',
  },
  q3_c: {
    marks: 3,
    exemplar: 'White vinegar AND pH = 2.4 (1 mark). It has the lowest pH OR the highest acidity (1 mark). The lower the pH, the more acid attacks the tooth enamel, so it is the most damaging (1 mark — this third mark can be awarded for any vinegar if the student correctly links acidity to enamel damage).',
    keyConcepts: ['Data analysis', 'pH and acidity'],
    keywords: ['white vinegar', 'pH 2.4', 'lowest pH', 'highest acidity', 'tooth enamel damage'],
    feedbackHit: 'Correct — white vinegar (pH 2.4) has the lowest pH = highest acidity = most enamel damage.',
    feedbackMiss: 'The lower the pH, the more acidic. White vinegar has pH 2.4 (lowest), meaning it is most acidic and would damage tooth enamel the most.',
  },
  q3_d: {
    marks: 5,
    exemplar: 'Award 1 mark each for: (1) bar chart selected (not line graph); (2) data for all five vinegars presented correctly; (3) title that links DV with IV (e.g. "pH of different cooking vinegars"); (4) x-axis labelled "type of vinegar" with all 5 vinegars named; (5) y-axis labelled "pH" with appropriate scale.',
    keyConcepts: ['Data presentation', 'Bar graph'],
    keywords: ['bar chart', 'title', 'x-axis type of vinegar', 'y-axis pH', 'White 2.4', 'Rice 4.2'],
    feedbackHit: 'Well done — your graph has appropriate type, correct data, title, and labelled axes.',
    feedbackMiss: 'Bar chart checklist: bar chart (not line); title linking pH to vinegar type; x-axis = type of vinegar; y-axis = pH with scale; all 5 bars: White 2.4, Cider 3.1, Red wine 2.9, Balsamic 3.6, Rice 4.2.',
  },
  q3_e: {
    marks: 1,
    exemplar: 'Accept any reasonable extension, for example: test different brands of the same vinegar; investigate the effect of diluting the vinegar on its pH; investigate the effect of temperature on the pH reading.',
    keyConcepts: ['Extension', 'Scientific investigation'],
    keywords: ['extension', 'different brands', 'dilution', 'temperature effect'],
    feedbackHit: 'Good extension — you suggested a new variable to investigate using the same method.',
    feedbackMiss: 'An extension changes one new aspect of the investigation. Suggestions: different brands, effect of dilution, effect of temperature.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Award 1 mark each: (1) with more than one trial you are able to calculate the mean; (2) reduces experimental errors OR increases accuracy/reliability.',
    keyConcepts: ['Reliability', 'Validity'],
    keywords: ['calculate mean', 'reduce experimental error', 'accuracy', 'reliability', 'anomalous results'],
    feedbackHit: 'Correct — multiple trials allow calculation of a mean and reduce experimental errors.',
    feedbackMiss: 'Multiple trials: (1) allow you to calculate a mean (average), reducing the effect of random error; (2) identify anomalous results; (3) increase reliability.',
  },
  q3_g: {
    marks: 4,
    exemplar: 'pH 2.0 → Red (strong acid, pH 1–3); pH 11.5 → Green (strong alkali, pH 10–13); pH 7.0 → Purple (neutral, pH 6–7); pH 4.5 → Pink (weak acid, pH 4–5). Award 1 mark per correct colour.',
    keyConcepts: ['Indicators', 'pH scale'],
    keywords: ['red strong acid', 'green strong alkali', 'purple neutral', 'pink weak acid', 'red-cabbage indicator'],
    feedbackHit: 'Correct — you matched each pH to the right indicator colour using the red-cabbage scale.',
    feedbackMiss: 'From the red-cabbage scale: red = pH 1–3; pink = pH 4–5; purple = pH 6–7 (neutral); blue = pH 8–9; green = pH 10–13. Apply this to each beaker.',
    blankAnswers: ['Red', 'Green', 'Purple', 'Pink'],
  },
  q3_h: {
    marks: 1,
    exemplar: 'Accept either: the indicator gives a range of pH (not exact values); OR the colour change would not be visible in a coloured vinegar (e.g. balsamic or red wine vinegar).',
    keyConcepts: ['Indicator limitations', 'pH measurement'],
    keywords: ['range of pH', 'not exact', 'colour not visible', 'coloured vinegar', 'limitation'],
    feedbackHit: 'Correct — indicators only give a pH range, not an exact value.',
    feedbackMiss: 'Red-cabbage extract (like all indicators) changes colour over a range of pH, not at a single value — so you cannot determine the exact pH.',
  },

  // ─── Q4: Caffeine ────────────────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Correct order from most to least caffeine (based on bar chart): Espresso → Instant coffee → Black tea → Green tea. Award 1 mark for any two items in the correct position; 2 marks for all correct.',
    keyConcepts: ['Data analysis', 'Ordering from graph'],
    keywords: ['Espresso', 'Instant coffee', 'Black tea', 'Green tea', 'most caffeine', 'caffeine content'],
    feedbackHit: 'Correct order from most to least caffeine based on the bar chart data.',
    feedbackMiss: 'Read the caffeine content (mg per 200 cm³) from the bar chart for each drink and rank from highest to lowest. Espresso has the highest bar.',
    blankAnswers: ['Espresso', 'Instant coffee', 'Black tea', 'Green tea'],
  },
  q4_b: {
    marks: 2,
    exemplar: 'The data show that espresso contains the most caffeine (1 mark — must reference data). Therefore Wei\'s prediction (that black tea has the most caffeine) is not valid (1 mark — only award if the first mark is awarded).',
    keyConcepts: ['Data validity', 'Hypothesis evaluation'],
    keywords: ['espresso most caffeine', 'prediction not valid', 'data show', 'black tea incorrect'],
    feedbackHit: 'Correct — espresso has the most caffeine so Wei\'s prediction (black tea most caffeine) is not valid.',
    feedbackMiss: 'Use the graph data: espresso has the highest caffeine content. Wei predicted black tea would have the most, so the prediction is NOT valid.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Award 1 mark each for any two differences: (1) Compound 1 has an extra methyl (–CH₃) group compared with Compound 2 (three methyls versus two). (2) Compound 1 has a methyl group attached to a nitrogen (N–CH₃) where Compound 2 has an N–H. Accept "Compound 1 has one more carbon/methyl group."',
    keyConcepts: ['Molecular structure', 'Organic chemistry'],
    keywords: ['extra methyl group', 'CH₃', 'N–CH₃', 'N–H', 'structural difference'],
    feedbackHit: 'Correct — the extra –CH₃ group and the N–CH₃ vs N–H substitution are the two structural differences.',
    feedbackMiss: 'Compare the two structures carefully: (1) Compound 1 has one more –CH₃ (methyl) group; (2) Compound 1 has an N–CH₃ where Compound 2 has an N–H.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) If the brewing water temperature is high (boiled, ~95 °C) (condition); (2) then the caffeine content of the drink will be the highest OR will increase (prediction); (3) because more caffeine dissolves into hotter water (solubility increases with temperature) (reason).',
    keyConcepts: ['Hypothesis', 'Criterion B'],
    keywords: ['hot water', '95 °C boiled', 'highest caffeine', 'more dissolves', 'solubility increases'],
    feedbackHit: 'Correct hypothesis — hotter brewing water dissolves the most caffeine.',
    feedbackMiss: 'A hypothesis needs: condition (high temperature / boiled water), prediction (most caffeine), reason (caffeine is more soluble in hotter water, so more dissolves out of the leaves).',
  },

  // ─── Q5: Kettle Descaler Design ──────────────────────────────────────────────
  q5_: {
    marks: 19,
    exemplar: 'Full Criterion B design rubric (0–19 marks). Key elements for each band: Variables (IV: type of descaler/acid; DV: time for the limescale to fully dissolve OR rate of CO₂ released; CVs: mass of limescale, volume of descaler, concentration of descaler, temperature); Additional equipment (stopwatch, balance, measuring cylinder, gas syringe or top-pan balance to follow CO₂ loss); Method (add a fixed 5 g piece of limescale to a fixed volume of each descaler at the same concentration; time how long until the fizzing stops / the limescale fully dissolves; OR measure the volume of CO₂ collected after a fixed time; repeat each descaler several times; calculate means); Data (compare the dissolving times or CO₂ volumes; the descaler with the shortest time / steepest curve works fastest; use means to decide); Assumptions (each piece of limescale is pure CaCO₃ of equal mass and shape; descalers are all at the same concentration); Safety (acids are irritant/corrosive — wear goggles and gloves, avoid skin contact, work in a ventilated area as CO₂ is released).',
    keyConcepts: ['Criterion B — Inquiry and Design', 'Neutralisation', 'Metal carbonates'],
    keywords: ['IV descaler type', 'DV dissolving time', 'CV mass of limescale', 'CV volume of descaler', 'CV concentration', 'stopwatch', 'balance', 'repeats', 'acid irritant', 'safety'],
    feedbackHit: 'Excellent design — all elements including variables, equipment, method, data use, assumptions, and safety are addressed.',
    feedbackMiss: 'A full Crit B design needs: IV/DV/CVs; equipment list; step-by-step method; how data will decide the fastest descaler; assumptions stated; safety precautions for the acids.',
  },

  // ─── Q6: Carbon Footprint ────────────────────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Step 1: Read the petrol-car emission factor = 170 g per passenger-km (1 mark). Step 2: Multiply by the 20 km distance: 170 × 20 (1 mark). Step 3: = 3400 g (= 3.4 kg) CO₂ (1 mark). Step 4: Final value given to 2 significant figures = 3400 g (or 3.4 kg) (1 mark).',
    keyConcepts: ['Carbon footprint calculation', 'Significant figures'],
    keywords: ['170 g per km', '20 km', '3400 g', '3.4 kg', '2 significant figures'],
    feedbackHit: 'Correct calculation — 170 g/km × 20 km = 3400 g (3.4 kg) to 2 sig figs.',
    feedbackMiss: 'Multiply the emission factor by the distance: 170 g/km × 20 km = 3400 g. To 2 sig figs that is 3400 g (3.4 kg).',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Award 1 mark each: (1) State that both people travel the same 20 km distance. (2) The petrol-car journey has a higher carbon footprint / greater environmental impact than the bus-and-walking journey. (3) Correct use of data: petrol car = 3400 g CO₂ versus bus (1520 g) + walking (0 g) = 1520 g CO₂ — the car emits over twice as much. Do not award the third mark if no data is given.',
    keyConcepts: ['Environmental impact', 'Carbon footprint comparison'],
    keywords: ['car higher footprint', '3400 g', '1520 g', 'same distance', 'environmental impact'],
    feedbackHit: 'Correct — you identified that both journeys are the same distance but the car emits over twice the CO₂, with supporting data.',
    feedbackMiss: 'Both journeys are 20 km, but the petrol car emits 3400 g CO₂ versus 1520 g for bus-and-walking — more than double. Always quote the data values when comparing.',
  },

  // ─── Q7: Biogas Methane ──────────────────────────────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Reactants correct (2 before O₂) (1 mark). Products correct (2 before H₂O) (1 mark).',
    keyConcepts: ['Balancing equations', 'Combustion of methane'],
    keywords: ['CH₄', '2O₂', 'CO₂', '2H₂O', 'balanced equation', 'combustion'],
    feedbackHit: 'Correct — CH₄ + 2O₂ → CO₂ + 2H₂O is the balanced combustion equation.',
    feedbackMiss: 'Balance by counting atoms: 1C, 4H, 4O on left → need 2O₂ on left and 2H₂O on right. Balanced: CH₄ + 2O₂ → CO₂ + 2H₂O.',
  },
  q7_b: {
    marks: 14,
    exemplar: 'Full Criterion D rubric (0–14 marks). Key content: Advantages of collecting/processing food waste: diverts waste from landfill so less landfill methane escapes; produces a useful biogas fuel and a digestate fertiliser; supports a circular economy. Disadvantages: collection lorries and sorting cost energy and money; digesters need space and maintenance; some people will not separate their food waste. Economic impacts: digesters create jobs and can sell biogas/electricity and fertiliser; high build cost; can reduce a community\'s waste-disposal and energy bills. Environmental advantages of biogas: captures methane (a greenhouse gas ~25× more potent than CO₂) that would otherwise escape; biogas is a renewable fuel that burns cleanly to CO₂ + H₂O; the CO₂ released was recently taken in by the plants, so it is roughly carbon-neutral. Environmental disadvantages: CO₂ is still produced on combustion; methane can leak from the digester; transport of waste has its own footprint. Ethical aspects: should we power vehicles/homes from food that could have been eaten or composted? equitable access to the energy produced; reducing food waste at source may be a better priority. Concluding appraisal: a balanced, justified conclusion on whether the benefits outweigh the costs. Higher bands: balanced account with at least one advantage AND disadvantage, economic AND environmental AND ethical points justified, concluding appraisal present.',
    keyConcepts: ['Criterion D', 'Methane capture', 'Environmental sustainability', 'Ethics'],
    keywords: ['food waste', 'landfill methane', 'biogas fuel', 'digestate fertiliser', 'economic impact', 'environmental impact', 'ethical aspects', 'appraisal', 'carbon neutral'],
    feedbackHit: 'Excellent Criterion D response — you covered all aspects (advantages, disadvantages, economic, environmental, ethical) with a clear concluding appraisal.',
    feedbackMiss: 'Structure your answer: (1) advantages AND disadvantages of collecting/processing food waste; (2) economic impacts; (3) environmental advantages AND disadvantages of biogas; (4) ethical aspects; (5) concluding appraisal. Include data from the stimulus.',
  },
}
