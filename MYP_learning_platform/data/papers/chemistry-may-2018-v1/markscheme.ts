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
  // ─── Q1 — Ethanoic Acid ───────────────────────────────────────────────────
  q1_a: {
    marks: 3,
    exemplar: 'Carbon: Group 4, Period 2 [1 if all groups correct; 1 if all periods correct; 1 if all correct — deduct if groups and periods interchanged]; Hydrogen: Group 1, Period 1; Oxygen: Group 6, Period 2',
    keyConcepts: ['Periodic table', 'Groups and periods', 'CH₃COOH elements'],
    keywords: ['Group 4', 'Period 2', 'Group 1', 'Period 1', 'Group 6', 'carbon', 'hydrogen', 'oxygen'],
    feedbackHit: 'Correct group and period assignments for all three elements.',
    feedbackMiss: 'Ethanoic acid contains the same three elements as any carboxylic acid: Carbon is in Group 4, Period 2. Hydrogen is in Group 1, Period 1. Oxygen is in Group 6, Period 2.',
    blankAnswers: ['4', '2', '1', '1', '6', '2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'acetic (acid)',
    keyConcepts: ['Common nomenclature', 'Carboxylic acids'],
    keywords: ['acetic', 'common name', 'vinegar', 'ethanoic acid'],
    feedbackHit: 'Correct common name: acetic acid.',
    feedbackMiss: 'Ethanoic acid is the systematic (IUPAC) name; the common (traditional) name is acetic acid, from the Latin acetum meaning vinegar.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Lewis structure of CH₃COOH: a CH₃ carbon with three C–H bonds, joined to a second carbon that has a double bond to O (with two lone pairs) and a single bond to O–H (that O with two lone pairs). All bonds shown as dots/crosses or lines. [1] correct bonds shown OR all lone pairs correct; [2] structure fully correct.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Lone pairs', 'Carboxylic acid structure'],
    keywords: ['Lewis', 'dot-cross', 'lone pairs', 'double bond', 'C=O', 'O–H', 'CH₃COOH'],
    feedbackHit: 'Correct Lewis structure with bonds and lone pairs shown.',
    feedbackMiss: 'CH₃COOH has: a CH₃ group (three C–H bonds), a C=O (carbonyl) and a C–O–H (hydroxyl). Each carbon forms 4 bonds; each oxygen has 2 lone pairs.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq). Award 1 mark each for: reactants correct; products correct (H₃O⁺ and CH₃COO⁻); state symbols all correct; equilibrium arrow (⇌). Allow CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq).',
    keyConcepts: ['Weak acid dissociation', 'Equilibrium', 'State symbols', 'Conjugate base'],
    keywords: ['CH₃COOH', 'H₂O', 'H₃O⁺', 'CH₃COO⁻', 'aq', 'l', 'equilibrium', 'reversible'],
    feedbackHit: 'Correct balanced equilibrium equation with all state symbols.',
    feedbackMiss: 'Use ⇌ (not →). Ethanoic acid donates H⁺ to water: CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻. All four state symbols are required: (aq), (l), (aq), (aq).',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Add/react with a base or alkali (e.g. NaOH, Na₂CO₃, NaHCO₃)',
    keyConcepts: ['Neutralisation', 'Acid-base reactions'],
    keywords: ['base', 'alkali', 'neutralise', 'NaOH', 'neutralization'],
    feedbackHit: 'Correct: react with a base or alkali.',
    feedbackMiss: 'To neutralize an acid, add a base or alkali (e.g. NaOH, sodium hydroxide). The H⁺ ions react with OH⁻ ions to form water.',
  },

  // ─── Q2 — Kettle Limescale ────────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Protons = 20 [1]; neutrons = 20 [1]. (Mass number 40, atomic number 20; the 2+ charge removes 2 electrons but does not affect protons or neutrons.)',
    keyConcepts: ['Atomic structure', 'Protons', 'Neutrons', 'Mass number'],
    keywords: ['20 protons', '20 neutrons', 'mass number 40', 'atomic number 20', 'calcium'],
    feedbackHit: 'Correct: 20 protons and 20 neutrons.',
    feedbackMiss: 'For ⁴⁰Ca²⁺: mass number = protons + neutrons = 40; atomic number = protons = 20; neutrons = 40 − 20 = 20. The 2+ charge only affects electrons (not counted here).',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Ca₃(PO₄)₂ — brackets must be present',
    keyConcepts: ['Ionic formulae', 'Cross-multiplication of charges'],
    keywords: ['Ca₃(PO₄)₂', 'calcium phosphate', 'formula', 'brackets'],
    feedbackHit: 'Correct formula: Ca₃(PO₄)₂.',
    feedbackMiss: 'Ca²⁺ has charge 2+; PO₄³⁻ has charge 3−. Cross-multiply: 3 × Ca²⁺ and 2 × PO₄³⁻ → Ca₃(PO₄)₂. Brackets around PO₄ are required.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Any two relevant physical properties, e.g.: (1) State: Ca is solid at 25°C, Cl₂ is gas — distinguishes because states differ at room temperature. (2) Electrical conductivity: Ca conducts electricity (metallic), Cl₂ does not — distinguishes because one is a metal, the other a non-metal. Other acceptable: malleable/brittle; lustre; melting/boiling point; density. Do NOT accept reference to valence electrons, solubility or type of element.',
    keyConcepts: ['Physical properties of metals vs non-metals', 'State of matter', 'Electrical conductivity'],
    keywords: ['solid', 'gas', 'state', 'conductor', 'malleable', 'lustre', 'metal', 'non-metal', '25°C'],
    feedbackHit: 'Two valid physical properties each with correct distinction.',
    feedbackMiss: 'Give a physical property (not chemical), then state how that property differs for Ca vs Cl₂. e.g. Ca is a solid, Cl₂ is a gas — different states at 25°C.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Ionic bond (accept electrovalent bond)',
    keyConcepts: ['Ionic bonding', 'Metal-non-metal reaction'],
    keywords: ['ionic', 'electrovalent', 'Ca²⁺', 'Cl⁻', 'transfer of electrons'],
    feedbackHit: 'Correct: ionic bond.',
    feedbackMiss: 'When a metal (Ca) reacts with a non-metal (Cl), it transfers electrons to form ions → ionic bond. Do not say covalent (that is for non-metal + non-metal).',
  },
  q2_e: {
    marks: 4,
    exemplar: 'Add sulphate ions/sulphuric acid [1]; strontium sulphate is insoluble (from table) [1]; calcium sulphate is soluble so Ca²⁺ ions remain in solution [1]; filter (strontium sulphate from the solution) OR remove precipitate OR remove solid [1]. Accept Sr ions / Ca ions.',
    keyConcepts: ['Selective precipitation', 'Solubility', 'Filtration'],
    keywords: ['sulphate', 'SrSO₄', 'insoluble', 'Ca²⁺', 'soluble', 'filter', 'precipitate'],
    feedbackHit: 'Correct: add sulphate; SrSO₄ precipitates; Ca²⁺ stays in solution; filter.',
    feedbackMiss: 'The table shows SrSO₄ is insoluble but CaSO₄ is soluble. So add SO₄²⁻ (e.g. as H₂SO₄): only Sr²⁺ precipitates as SrSO₄; Ca²⁺ stays dissolved. Then filter to remove the SrSO₄ solid.',
  },
  q2_f: {
    marks: 1,
    exemplar: '3 moles of water. (Each formula unit has 6 water molecules: 0.5 × 6 = 3)',
    keyConcepts: ['Water of crystallisation', 'Mole calculations'],
    keywords: ['3', 'moles', 'water', 'CaCl₂·6H₂O', 'crystallisation'],
    feedbackHit: 'Correct: 3 moles of water.',
    feedbackMiss: 'CaCl₂·6H₂O has 6 moles of water per mole of compound. So 0.5 mol × 6 = 3 mol water.',
  },

  // ─── Q3 — Estuary Sediment Grading ────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 0 } as MCQEntry,
  q3_b: {
    marks: 4,
    exemplar: 'Independent variable: percentage of calcium carbonate in the sediment OR site/depth of sediment (do not accept "calcium" or "amount of mud"). Dependent variable: volume or amount of carbon dioxide produced. Control variable 1 (any two from): mass of sediment; volume or amount of acid used; concentration of acid used; temperature; surface area or grain size of sediment. Control variable 2: (second acceptable control variable from the list above).',
    keyConcepts: ['Experimental variables', 'Independent variable', 'Dependent variable', 'Controlled variables'],
    keywords: ['independent', 'dependent', 'control', 'percentage CaCO₃', 'volume CO₂', 'mass', 'concentration'],
    feedbackHit: 'Correct IV, DV and two appropriate CVs.',
    feedbackMiss: 'IV = what you change (% CaCO₃ or site/depth of sediment); DV = what you measure (volume CO₂); CV = what you keep constant (mass of sediment, acid concentration, temperature, etc.).',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Table must show: indication of more than one trial [1]; column for independent variable (sediment sample / site) [1]; column for dependent variable (volume of CO₂) [1]; unit for volume (cm³ or dm³ or mL or L) [1]. ECF from part (b).',
    keyConcepts: ['Data tables', 'Recording data', 'Units'],
    keywords: ['Sediment Sample', 'Trial 1', 'Trial 2', 'Trial 3', 'Volume CO₂', 'cm³'],
    feedbackHit: 'Table has sediment-sample column, multiple trial columns, volume CO₂ column with units.',
    feedbackMiss: 'The table needs: a column for the sediment sample/site (IV); columns for at least 2 trials (to allow repeats); a column for volume of CO₂ with cm³ units.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Full Criterion B design rubric (1–4 scale): [1] Equipment suggested but insufficient; attempt at method; data to collect identified; [2] Equipment to measure mass and volume CO₂; method for manipulating variables stated; plan to collect at least one sediment type; [3] Adequate equipment list; method could be followed; data plan would allow comparison; assumptions identified; safety mentioned; [4] Complete method: equipment listed (balance, gas syringe, conical flask, HCl, dried sediment samples of same mass, sieve to standardise grain size); control all variables; measure volume CO₂ per sediment with repeats; use table/graph to compare; state assumptions (all CO₂ collected, constant temperature, only carbonate reacts with acid); safety measures (HCl hazard, eye protection, disposal). Total 17 marks distributed across bands.',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Equipment list', 'Data collection', 'Safety'],
    keywords: ['gas syringe', 'conical flask', 'balance', 'fixed mass', 'repeat', 'control variables', 'safety', 'HCl corrosive', 'assumptions'],
    feedbackHit: 'Complete method with equipment, variable control, data collection plan, assumptions and safety.',
    feedbackMiss: 'Full design requires: detailed equipment list; method to control all variables; plan for repeats; data recording table; how to identify highest % CaCO₃; at least one assumption; at least one safety measure.',
  },

  // ─── Q4 — Estuary Sediment Graph Analysis ─────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Data for 1.9 g and 2.5 g appear anomalous/inconsistent with the trend (outliers) [1]; suggest repeating measurements for these two data points to check if they are genuine [1]. Do not accept "interpolation" — repeat the experiment.',
    keyConcepts: ['Anomalous data', 'Outliers', 'Repeating measurements'],
    keywords: ['anomalous', 'outlier', 'repeat', '1.9 g', '2.5 g', 'inconsistent', 'trend'],
    feedbackHit: 'Identified as anomalous; suggested repeating measurements.',
    feedbackMiss: 'The data points for 1.9 g and 2.5 g do not follow the general trend (outliers). To check them, the experiment should be repeated for those masses.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Reading from the best-fit line at 504 cm³: ~2.1 g CaCO₃ [ECF from graph]; % CaCO₃ = (2.1 ÷ 8.94) × 100 ≈ 23.5% [1 for correct method, 1 for correct answer]; the closest value in the Q3 table is River bend, deep mud (23.18%), so the sample most likely came from the River bend site [1]. ECF from the candidate\'s graph reading. Accept Harbour-mouth deep mud (22.41%) only if the candidate\'s own % rounds nearer to it.',
    keyConcepts: ['Graph reading', 'Percentage by mass', 'Data identification'],
    keywords: ['504 cm³', '8.94 g', '23.5%', 'River bend', 'percentage by mass', 'graph', 'best-fit line'],
    feedbackHit: 'Correctly read the graph, calculated % CaCO₃ and identified the closest sampling site.',
    feedbackMiss: '% CaCO₃ = (mass of CaCO₃ from graph ÷ total mass of sample) × 100. At 504 cm³, the best-fit line gives ~2.1 g CaCO₃. Then 2.1/8.94 × 100 ≈ 23.5%. Comparing with the Q3 table, River bend deep mud (23.18%) is closest.',
  },

  // ─── Q5 — Antacid Chalk and Rates of Reaction ─────────────────────────────
  q5_a: {
    marks: 3,
    exemplar: 'Image 1: Corrosive; Image 2: Flammable; Image 3: Toxic. Award 1 mark for each correct identification.',
    keyConcepts: ['Hazard symbols', 'Laboratory safety', 'GHS symbols'],
    keywords: ['corrosive', 'flammable', 'toxic', 'hazard symbol', 'GHS', 'safety'],
    feedbackHit: 'All three hazard symbols correctly identified.',
    feedbackMiss: 'Image 1 (liquid dripping, corroding surface) = Corrosive. Image 2 (flame) = Flammable. Image 3 (skull and crossbones) = Toxic.',
    blankAnswers: ['Corrosive', 'Flammable', 'Toxic'],
  },
  q5_b: { type: 'mcq', correct: 0 } as MCQEntry,
  q5_c: {
    marks: 2,
    exemplar: 'Appropriate average = 40 cm³ (average of 41 and 39, excluding Trial 2 = 51 which is the outlier) [1]. Justification: it is not appropriate to include an outlier/anomalous result in the average [1]. Do not award if inappropriate average (e.g. including 51) is used without identifying the outlier.',
    keyConcepts: ['Anomalous data', 'Calculating averages', 'Data analysis'],
    keywords: ['40 cm³', 'outlier', 'Trial 2', '51', 'exclude', 'average', '41', '39'],
    feedbackHit: 'Correctly excluded outlier and calculated average of 40 cm³.',
    feedbackMiss: 'At t=30 s: Trial 1=41, Trial 2=51, Trial 3=39. Trial 2 (51) is an outlier that does not fit the trend. Exclude it: average = (41+39)÷2 = 40 cm³.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Powdered chalk = 1.33 ± 0.03 cm³ s⁻¹ [1]; chalk lumps = 0.28 ± 0.03 cm³ s⁻¹ [1]. (Read total volume from graph at t=60 s; divide by 60. Powder ≈ 80 cm³ ÷ 60 ≈ 1.33; lumps ≈ 17 cm³ ÷ 60 ≈ 0.28.)',
    keyConcepts: ['Rate of reaction', 'Calculating rate', 'Graph reading'],
    keywords: ['1.33 cm³s⁻¹', '0.28 cm³s⁻¹', 'rate', 'volume ÷ time', 'powdered chalk', 'chalk lumps'],
    feedbackHit: 'Correct rates for both powdered chalk and chalk lumps.',
    feedbackMiss: 'Rate = total volume produced ÷ total time. Read the total volume at t=60 s from the graph for each form, then divide by 60 seconds.',
  },
  q5_e: {
    marks: 3,
    exemplar: 'Powdered chalk particles are smaller than the chalk lumps [1 ORA]; (so) rate of reaction is greater for the powder / rate of reaction is lower for the lumps [1 ORA]; correct use of terms "surface area" and "rate of reaction" [1].',
    keyConcepts: ['Surface area and rate', 'Particle size', 'Rates of reaction'],
    keywords: ['smaller particles', 'surface area', 'rate of reaction', 'greater', 'powdered chalk', 'chalk lumps'],
    feedbackHit: 'Smaller particles → larger surface area → greater rate of reaction for the powder.',
    feedbackMiss: 'Smaller particles have a larger surface area exposed to the acid. This means more collisions per second → greater rate of reaction. Powdered chalk has smaller particles than the lumps.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'The chalk lumps are broken down/react more slowly [1]; so they stay in the gut longer, neutralising the acid over a longer period of time (giving lasting relief) [1].',
    keyConcepts: ['Reaction rate and biological function', 'Dissolution time'],
    keywords: ['slower', 'broken down', 'longer', 'neutralise', 'gut', 'lasting relief', 'time'],
    feedbackHit: 'Chalk lumps react more slowly → stay in the gut longer → lasting relief.',
    feedbackMiss: 'The graph shows the lumps react more slowly. This means they last longer in the gut, neutralising stomach acid over a longer period, so they give slower but more lasting relief.',
  },
  q5_g: {
    marks: 4,
    exemplar: 'Powdered chalk data is less reliable [1]; because of greater variability/poor consistency between trials [1]; chalk-lump data is more reliable [1]; because data have good agreement/low variability/good consistency between trials [1].',
    keyConcepts: ['Reliability', 'Data variability', 'Consistency'],
    keywords: ['reliable', 'variability', 'consistency', 'agreement', 'powdered chalk', 'chalk lumps'],
    feedbackHit: 'Compared reliability of both datasets with supporting reasoning.',
    feedbackMiss: 'Compare the spread (variability) of the trials for each form. Powder trials vary considerably = less reliable. Chalk-lump trials are close together = more reliable.',
  },
  q5_h: {
    marks: 1,
    exemplar: 'Increase number of trials (repeats) OR use the same size particles of chalk lumps and powder.',
    keyConcepts: ['Improving validity', 'Experimental design'],
    keywords: ['increase trials', 'same particle size', 'validity', 'repeat'],
    feedbackHit: 'Valid suggestion to improve the investigation.',
    feedbackMiss: 'To improve validity: control particle size carefully (so only the chosen variable differs), or increase the number of repeats to improve reliability.',
  },

  // ─── Q6 — Crude Oil and Fractional Distillation ───────────────────────────
  q6_a: { type: 'mcq', correct: 0 } as MCQEntry,
  q6_b: {
    marks: 3,
    exemplar: 'More than two compounds or mixtures of compounds can be separated [1 WTTE]; boiling point depends on size of molecules OR change in state from liquid to gas [1]; molecules with smallest mass or length will have the lowest boiling point [1 ORA].',
    keyConcepts: ['Fractional distillation', 'Boiling point', 'Separation of mixtures'],
    keywords: ['boiling point', 'vaporise', 'condense', 'fractions', 'size of molecules', 'column', 'temperature'],
    feedbackHit: 'Outlined key principles: multiple fractions separated; different boiling points; smallest molecules lowest boiling point.',
    feedbackMiss: 'Fractional distillation: crude oil heated → vaporises → rises in column → different fractions condense at different levels (temperatures) → smaller molecules have lower boiling points and rise higher.',
  },
  q6_c: {
    marks: 8,
    exemplar: 'Rubric (1–4 scale): [1] Comment about cleaning the river using one method; [2] Comment about more than one method; [3] Describes all three methods (Skimmer: oil floats on the freshwater and is collected from the surface; Burning: smoke/fumes produced, releases CO₂; Dispersants: chemicals break oil into droplets that remain in the water and can harm fish/wetland life); [4] All three methods described and linked to science — Skimmer: oil is immiscible with water so it floats and can be lifted off; Burning: produces toxic fumes/smoke and air pollution; Dispersants: oil components remain in the river and affect aquatic life and the drinking-water supply. Award additional marks for Advantages/Disadvantages and Appraisal (identify best method — typically the skimmer, because it physically removes oil from a sensitive drinking-water river without adding chemicals or smoke — with scientific justification). Total 8 marks across Method, A/D and Appraisal bands.',
    keyConcepts: ['Oil spill cleanup', 'Environmental evaluation', 'Criterion D', 'Advantages/disadvantages'],
    keywords: ['skimmer', 'burning', 'dispersants', 'immiscible', 'fumes', 'aquatic life', 'drinking water', 'best method'],
    feedbackHit: 'Discussed all three methods with advantages/disadvantages and identified best method with justification.',
    feedbackMiss: 'For full marks: describe how each method works (skimmer collects floating oil, burning destroys it, dispersants break it into droplets); give an advantage and disadvantage for each; conclude with the best method and why (e.g. skimmer best on a drinking-water river because it removes oil physically without adding chemicals or smoke).',
  },

  // ─── Q7 — Oil Transport Methods, Marisla ──────────────────────────────────
  q7_: {
    marks: 14,
    exemplar: 'Rubric (1–4 scale) across Pipeline (P), Alternative Methods (AM), Environmental (E), Social (S), Appraisal (A):\n[1] Comment about a pipeline; one advantage or disadvantage implied;\n[2] One advantage OR disadvantage of a pipeline implied; one advantage or disadvantage of one alternative method;\n[3] One advantage AND disadvantage of a pipeline; one advantage or disadvantage of both alternative methods OR more than one advantage AND disadvantage of one alternative method; more than one environmental impact; a social impact; more than one environmental impact with at least one supported by science;\n[4] More than one advantage AND disadvantage of both pipeline AND alternatives; more than one environmental impact with at least one supported by science; more than one social impact; concluding appraisal linking all issues discussed.\nKey points: Pipeline advantages: cheap long-distance transport, continuous flow, can be buried/submarine to avoid the stormy strait; disadvantages: very expensive to lay across the strait, leaks hard to detect underwater, construction disturbs reefs. Sea tanker: moves large volumes between the islands; high accident risk in the stormy strait, catastrophic spill onto coral reefs/mangroves. Road tanker: flexible on the Main Island; cannot cross the strait, accident risk, useless between islands. Environmental: pipeline/tanker leaks damage coral reefs and mangroves; burning/spills cause water pollution. Social: jobs and cheap energy for the LEDC; risk to Outer-Island fishing and indigenous communities; tourism (reefs, beaches) threatened by any spill.',
    keyConcepts: ['Oil transport methods', 'Environmental impact', 'Social considerations', 'Criterion D evaluation', 'Appraisal'],
    keywords: ['pipeline', 'sea tanker', 'road tanker', 'advantages', 'disadvantages', 'environmental', 'social', 'indigenous', 'tourism', 'reef', 'appraisal', 'Marisla'],
    feedbackHit: 'Discussed pipeline and two alternatives with environmental, social considerations and concluding appraisal.',
    feedbackMiss: 'Compare a pipeline with sea and road transport. Pipeline: cheap over long distances but very expensive to lay across the stormy strait and leaks are hard to find. Sea tanker: large volumes but high spill risk in storms near reefs. Road tanker: flexible on land but cannot cross the strait. Weigh impacts on Marisla\'s reefs, mangroves, fishing and indigenous communities, then conclude with the best method and why.',
  },
}
