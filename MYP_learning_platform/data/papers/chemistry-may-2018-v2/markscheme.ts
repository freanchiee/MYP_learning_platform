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
  // ─── Q1 — Carbonic Acid ───────────────────────────────────────────────────
  q1_a: {
    marks: 3,
    exemplar: 'Carbon: Group 4, Period 2 [1 if all groups correct; 1 if all periods correct; 1 if all correct — deduct if groups and periods interchanged]; Hydrogen: Group 1, Period 1; Oxygen: Group 6, Period 2',
    keyConcepts: ['Periodic table', 'Groups and periods', 'H₂CO₃ elements'],
    keywords: ['Group 4', 'Period 2', 'Group 1', 'Period 1', 'Group 6', 'carbon', 'hydrogen', 'oxygen'],
    feedbackHit: 'Correct group and period assignments for all three elements.',
    feedbackMiss: 'Carbonic acid contains carbon, hydrogen and oxygen: Carbon is in Group 4, Period 2. Hydrogen is in Group 1, Period 1. Oxygen is in Group 6, Period 2.',
    blankAnswers: ['4', '2', '1', '1', '6', '2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'A carbonate (the carbonate ion, CO₃²⁻). Accept "a carbonate salt".',
    keyConcepts: ['Acid-base salts', 'Naming carbonates'],
    keywords: ['carbonate', 'CO₃²⁻', 'salt', 'carbonic acid'],
    feedbackHit: 'Correct: fully neutralised carbonic acid forms a carbonate.',
    feedbackMiss: 'When an acid is neutralised, it forms a salt named after the acid. Carbonic acid (H₂CO₃) forms a carbonate (the CO₃²⁻ ion), e.g. sodium carbonate with sodium hydroxide.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Lewis structure of H₂CO₃: a central carbon double-bonded to one O (with two lone pairs) and single-bonded to two O–H groups (each of those O atoms has two lone pairs). All bonds shown as dots/crosses or lines. [1] correct bonds shown OR all lone pairs correct; [2] structure fully correct.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Lone pairs', 'Oxoacid structure'],
    keywords: ['Lewis', 'dot-cross', 'lone pairs', 'double bond', 'C=O', 'O–H', 'H₂CO₃'],
    feedbackHit: 'Correct Lewis structure with bonds and lone pairs shown.',
    feedbackMiss: 'H₂CO₃ has: a central C with one C=O (carbonyl) and two C–O–H (hydroxyl) groups. Carbon forms 4 bonds; each oxygen has 2 lone pairs.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'H₂CO₃(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCO₃⁻(aq). Award 1 mark each for: reactants correct; products correct (H₃O⁺ and HCO₃⁻); state symbols all correct; equilibrium arrow (⇌). Allow H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq).',
    keyConcepts: ['Weak acid dissociation', 'Equilibrium', 'State symbols', 'Conjugate base'],
    keywords: ['H₂CO₃', 'H₂O', 'H₃O⁺', 'HCO₃⁻', 'aq', 'l', 'equilibrium', 'reversible'],
    feedbackHit: 'Correct balanced equilibrium equation with all state symbols.',
    feedbackMiss: 'Use ⇌ (not →). Carbonic acid donates one H⁺ to water: H₂CO₃ + H₂O ⇌ H₃O⁺ + HCO₃⁻ (the hydrogencarbonate ion). All four state symbols are required: (aq), (l), (aq), (aq).',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Add/react with a base or alkali (e.g. NaOH, KOH)',
    keyConcepts: ['Neutralisation', 'Acid-base reactions'],
    keywords: ['base', 'alkali', 'neutralise', 'NaOH', 'neutralization'],
    feedbackHit: 'Correct: react with a base or alkali.',
    feedbackMiss: 'To neutralize an acid, add a base or alkali (e.g. NaOH, sodium hydroxide). The H⁺ ions react with OH⁻ ions to form water.',
  },

  // ─── Q2 — Mine-Water Treatment ────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Protons = 56 [1]; neutrons = 81 [1]. (Mass number 137, atomic number 56; the 2+ charge removes 2 electrons but does not affect protons or neutrons.)',
    keyConcepts: ['Atomic structure', 'Protons', 'Neutrons', 'Mass number'],
    keywords: ['56 protons', '81 neutrons', 'mass number 137', 'atomic number 56', 'barium'],
    feedbackHit: 'Correct: 56 protons and 81 neutrons.',
    feedbackMiss: 'For ¹³⁷Ba²⁺: mass number = protons + neutrons = 137; atomic number = protons = 56; neutrons = 137 − 56 = 81. The 2+ charge only affects electrons (not counted here).',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Ba₃(PO₄)₂ — brackets must be present',
    keyConcepts: ['Ionic formulae', 'Cross-multiplication of charges'],
    keywords: ['Ba₃(PO₄)₂', 'barium phosphate', 'formula', 'brackets'],
    feedbackHit: 'Correct formula: Ba₃(PO₄)₂.',
    feedbackMiss: 'Ba²⁺ has charge 2+; PO₄³⁻ has charge 3−. Cross-multiply: 3 × Ba²⁺ and 2 × PO₄³⁻ → Ba₃(PO₄)₂. Brackets around PO₄ are required.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Any two relevant physical properties, e.g.: (1) State: Ba is solid at 25°C, Cl₂ is gas — distinguishes because states differ at room temperature. (2) Electrical conductivity: Ba conducts electricity (metallic), Cl₂ does not — distinguishes because one is a metal, the other a non-metal. Other acceptable: malleable/brittle; lustre; melting/boiling point; density. Do NOT accept reference to valence electrons, solubility or type of element.',
    keyConcepts: ['Physical properties of metals vs non-metals', 'State of matter', 'Electrical conductivity'],
    keywords: ['solid', 'gas', 'state', 'conductor', 'malleable', 'lustre', 'metal', 'non-metal', '25°C'],
    feedbackHit: 'Two valid physical properties each with correct distinction.',
    feedbackMiss: 'Give a physical property (not chemical), then state how that property differs for Ba vs Cl₂. e.g. Ba is a solid, Cl₂ is a gas — different states at 25°C.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Ionic bond (accept electrovalent bond)',
    keyConcepts: ['Ionic bonding', 'Metal-non-metal reaction'],
    keywords: ['ionic', 'electrovalent', 'Ba²⁺', 'Cl⁻', 'transfer of electrons'],
    feedbackHit: 'Correct: ionic bond.',
    feedbackMiss: 'When a metal (Ba) reacts with a non-metal (Cl), it transfers electrons to form ions → ionic bond. Do not say covalent (that is for non-metal + non-metal).',
  },
  q2_e: {
    marks: 4,
    exemplar: 'Add sulphate ions/sulphuric acid [1]; barium sulphate is insoluble (from table) [1]; calcium sulphate is soluble so Ca²⁺ ions remain in solution [1]; filter (barium sulphate from the solution) OR remove precipitate OR remove solid [1]. Accept Ba ions / Ca ions.',
    keyConcepts: ['Selective precipitation', 'Solubility', 'Filtration'],
    keywords: ['sulphate', 'BaSO₄', 'insoluble', 'Ca²⁺', 'soluble', 'filter', 'precipitate'],
    feedbackHit: 'Correct: add sulphate; BaSO₄ precipitates; Ca²⁺ stays in solution; filter.',
    feedbackMiss: 'The table shows BaSO₄ is insoluble but CaSO₄ is soluble. So add SO₄²⁻ (e.g. as H₂SO₄): only Ba²⁺ precipitates as BaSO₄; Ca²⁺ stays dissolved. Then filter to remove the BaSO₄ solid.',
  },
  q2_f: {
    marks: 1,
    exemplar: '1 mole of water. (Each formula unit has 2 water molecules: 0.5 × 2 = 1)',
    keyConcepts: ['Water of crystallisation', 'Mole calculations'],
    keywords: ['1', 'mole', 'water', 'BaCl₂·2H₂O', 'crystallisation'],
    feedbackHit: 'Correct: 1 mole of water.',
    feedbackMiss: 'BaCl₂·2H₂O has 2 moles of water per mole of compound. So 0.5 mol × 2 = 1 mol water.',
  },

  // ─── Q3 — Bird Eggshell Comparison ────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 0 } as MCQEntry,
  q3_b: {
    marks: 4,
    exemplar: 'Independent variable: percentage of calcium carbonate in the eggshell OR species/region of shell (do not accept "calcium" or "amount of shell"). Dependent variable: volume or amount of carbon dioxide produced. Control variable 1 (any two from): mass of eggshell; volume or amount of acid used; concentration of acid used; temperature; surface area or size of shell pieces. Control variable 2: (second acceptable control variable from the list above).',
    keyConcepts: ['Experimental variables', 'Independent variable', 'Dependent variable', 'Controlled variables'],
    keywords: ['independent', 'dependent', 'control', 'percentage CaCO₃', 'volume CO₂', 'mass', 'concentration'],
    feedbackHit: 'Correct IV, DV and two appropriate CVs.',
    feedbackMiss: 'IV = what you change (% CaCO₃ or species/region of shell); DV = what you measure (volume CO₂); CV = what you keep constant (mass of shell, acid concentration, temperature, etc.).',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Table must show: indication of more than one trial [1]; column for independent variable (eggshell sample / species) [1]; column for dependent variable (volume of CO₂) [1]; unit for volume (cm³ or dm³ or mL or L) [1]. ECF from part (b).',
    keyConcepts: ['Data tables', 'Recording data', 'Units'],
    keywords: ['Eggshell Sample', 'Trial 1', 'Trial 2', 'Trial 3', 'Volume CO₂', 'cm³'],
    feedbackHit: 'Table has eggshell-sample column, multiple trial columns, volume CO₂ column with units.',
    feedbackMiss: 'The table needs: a column for the eggshell sample/species (IV); columns for at least 2 trials (to allow repeats); a column for volume of CO₂ with cm³ units.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Full Criterion B design rubric (1–4 scale): [1] Equipment suggested but insufficient; attempt at method; data to collect identified; [2] Equipment to measure mass and volume CO₂; method for manipulating variables stated; plan to collect at least one eggshell type; [3] Adequate equipment list; method could be followed; data plan would allow comparison; assumptions identified; safety mentioned; [4] Complete method: equipment listed (balance, gas syringe, conical flask, HCl, eggshell samples of same mass, mortar/pestle to standardise size); control all variables; measure volume CO₂ per eggshell type with repeats; use table/graph to compare; state assumptions (all CO₂ collected, constant temperature, only carbonate reacts); safety measures (HCl hazard, eye protection, disposal). Total 17 marks distributed across bands.',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Equipment list', 'Data collection', 'Safety'],
    keywords: ['gas syringe', 'conical flask', 'balance', 'fixed mass', 'repeat', 'control variables', 'safety', 'HCl corrosive', 'assumptions'],
    feedbackHit: 'Complete method with equipment, variable control, data collection plan, assumptions and safety.',
    feedbackMiss: 'Full design requires: detailed equipment list; method to control all variables; plan for repeats; data recording table; how to identify highest % CaCO₃; at least one assumption; at least one safety measure.',
  },

  // ─── Q4 — Marble Building-Stone Graph Analysis ────────────────────────────
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
    exemplar: 'Reading from the best-fit line at 552 cm³: ~2.3 g CaCO₃ [ECF from graph]; % CaCO₃ = (2.3 ÷ 8.40) × 100 ≈ 27.4% [1 for correct method, 1 for correct answer]; the closest value in the Q3 table is Duck, thick end (28.71%), so the fragment is most similar to a duck eggshell [1]. ECF from the candidate\'s graph reading.',
    keyConcepts: ['Graph reading', 'Percentage by mass', 'Data identification'],
    keywords: ['552 cm³', '8.40 g', '27.4%', 'Duck', 'percentage by mass', 'graph', 'best-fit line'],
    feedbackHit: 'Correctly read the graph, calculated % CaCO₃ and identified the closest eggshell by ECF.',
    feedbackMiss: '% CaCO₃ = (mass of CaCO₃ from graph ÷ total mass of sample) × 100. At 552 cm³, the best-fit line gives ~2.3 g CaCO₃. Then 2.3/8.40 × 100 ≈ 27.4%. Comparing with the Q3 table, Duck thick end (28.71%) is closest.',
  },

  // ─── Q5 — Garden Lime and Rates of Reaction ───────────────────────────────
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
    exemplar: 'Appropriate average = 27 cm³ (average of 28 and 26, excluding Trial 2 = 37 which is the outlier) [1]. Justification: it is not appropriate to include an outlier/anomalous result in the average [1]. Do not award if inappropriate average (e.g. including 37) is used without identifying the outlier.',
    keyConcepts: ['Anomalous data', 'Calculating averages', 'Data analysis'],
    keywords: ['27 cm³', 'outlier', 'Trial 2', '37', 'exclude', 'average', '28', '26'],
    feedbackHit: 'Correctly excluded outlier and calculated average of 27 cm³.',
    feedbackMiss: 'At t=20 s: Trial 1=28, Trial 2=37, Trial 3=26. Trial 2 (37) is an outlier that does not fit the trend. Exclude it: average = (28+26)÷2 = 27 cm³.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Powdered lime = 1.33 ± 0.03 cm³ s⁻¹ [1]; lime pellets = 0.28 ± 0.03 cm³ s⁻¹ [1]. (Read total volume from graph at t=60 s; divide by 60. Powder ≈ 80 cm³ ÷ 60 ≈ 1.33; pellets ≈ 17 cm³ ÷ 60 ≈ 0.28.)',
    keyConcepts: ['Rate of reaction', 'Calculating rate', 'Graph reading'],
    keywords: ['1.33 cm³s⁻¹', '0.28 cm³s⁻¹', 'rate', 'volume ÷ time', 'powdered lime', 'lime pellets'],
    feedbackHit: 'Correct rates for both powdered lime and lime pellets.',
    feedbackMiss: 'Rate = total volume produced ÷ total time. Read the total volume at t=60 s from the graph for each form, then divide by 60 seconds.',
  },
  q5_e: {
    marks: 3,
    exemplar: 'Powdered lime particles are smaller than the lime pellets [1 ORA]; (so) rate of reaction is greater for the powder / rate of reaction is lower for the pellets [1 ORA]; correct use of terms "surface area" and "rate of reaction" [1].',
    keyConcepts: ['Surface area and rate', 'Particle size', 'Rates of reaction'],
    keywords: ['smaller particles', 'surface area', 'rate of reaction', 'greater', 'powdered lime', 'lime pellets'],
    feedbackHit: 'Smaller particles → larger surface area → greater rate of reaction for the powder.',
    feedbackMiss: 'Smaller particles have a larger surface area exposed to the acid. This means more collisions per second → greater rate of reaction. Powdered lime has smaller particles than the pellets.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'The lime pellets are broken down/react more slowly [1]; so they stay in the soil longer, neutralising the soil acid over a longer period of time (giving a longer-lasting effect) [1].',
    keyConcepts: ['Reaction rate and agricultural function', 'Dissolution time'],
    keywords: ['slower', 'broken down', 'longer', 'neutralise', 'soil', 'long-lasting', 'time'],
    feedbackHit: 'Lime pellets react more slowly → stay in the soil longer → longer-lasting effect.',
    feedbackMiss: 'The graph shows the pellets react more slowly. This means they last longer in the soil, neutralising soil acid over a longer period, so they give a longer-lasting effect than the powder.',
  },
  q5_g: {
    marks: 4,
    exemplar: 'Powdered lime data is less reliable [1]; because of greater variability/poor consistency between trials [1]; lime-pellet data is more reliable [1]; because data have good agreement/low variability/good consistency between trials [1].',
    keyConcepts: ['Reliability', 'Data variability', 'Consistency'],
    keywords: ['reliable', 'variability', 'consistency', 'agreement', 'powdered lime', 'lime pellets'],
    feedbackHit: 'Compared reliability of both datasets with supporting reasoning.',
    feedbackMiss: 'Compare the spread (variability) of the trials for each form. Powder trials vary considerably = less reliable. Lime-pellet trials are close together = more reliable.',
  },
  q5_h: {
    marks: 1,
    exemplar: 'Increase number of trials (repeats) OR use the same size particles of lime pellets and powder.',
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
    exemplar: 'Rubric (1–4 scale): [1] Comment about cleaning the estuary using one method; [2] Comment about more than one method; [3] Describes all three methods (Skimmer: oil floats on the water and is collected from the surface; Burning: smoke/fumes produced, releases CO₂; Dispersants: chemicals break oil into droplets that remain in the water and can harm shellfish/wading birds); [4] All three methods described and linked to science — Skimmer: oil is immiscible with water so it floats and can be lifted off; Burning: produces toxic fumes/smoke and air pollution; Dispersants: oil components remain in the estuary and affect shellfish beds and the salt-marsh food chain. Award additional marks for Advantages/Disadvantages and Appraisal (identify best method — typically the skimmer, because it physically removes oil from sensitive shellfish beds without adding chemicals or smoke — with scientific justification). Total 8 marks across Method, A/D and Appraisal bands.',
    keyConcepts: ['Oil spill cleanup', 'Environmental evaluation', 'Criterion D', 'Advantages/disadvantages'],
    keywords: ['skimmer', 'burning', 'dispersants', 'immiscible', 'fumes', 'shellfish', 'salt marsh', 'best method'],
    feedbackHit: 'Discussed all three methods with advantages/disadvantages and identified best method with justification.',
    feedbackMiss: 'For full marks: describe how each method works (skimmer collects floating oil, burning destroys it, dispersants break it into droplets); give an advantage and disadvantage for each; conclude with the best method and why (e.g. skimmer best in an estuary with shellfish beds because it removes oil physically without adding chemicals or smoke).',
  },

  // ─── Q7 — Oil Transport Methods, Veldannia ────────────────────────────────
  q7_: {
    marks: 14,
    exemplar: 'Rubric (1–4 scale) across Pipeline (P), Alternative Methods (AM), Environmental (E), Social (S), Appraisal (A):\n[1] Comment about a pipeline; one advantage or disadvantage implied;\n[2] One advantage OR disadvantage of a pipeline implied; one advantage or disadvantage of one alternative method;\n[3] One advantage AND disadvantage of a pipeline; one advantage or disadvantage of both alternative methods OR more than one advantage AND disadvantage of one alternative method; more than one environmental impact; a social impact; more than one environmental impact with at least one supported by science;\n[4] More than one advantage AND disadvantage of both pipeline AND alternatives; more than one environmental impact with at least one supported by science; more than one social impact; concluding appraisal linking all issues discussed.\nKey points: Pipeline advantages: cheap long-distance transport, continuous flow, runs in all weather once built (unaffected by blizzards); disadvantages: very expensive to build over the mountains, leaks hard to reach in remote terrain, construction scars forests/lakes. Rail tanker: economical over long distances, designed to survive accidents; track over the passes can be blocked by snow, derailment risk in mountains. Road tanker: flexible, uses existing roads; passes blocked for weeks in winter, accident/spill risk on icy mountain roads. Environmental: pipeline/tanker leaks contaminate glacial lakes and forests; spills harm rare wildlife. Social: jobs and cheap energy for the LEDC; risk to Highland farming and indigenous communities; tourism (lakes, forests, wildlife) threatened by any spill.',
    keyConcepts: ['Oil transport methods', 'Environmental impact', 'Social considerations', 'Criterion D evaluation', 'Appraisal'],
    keywords: ['pipeline', 'rail tanker', 'road tanker', 'advantages', 'disadvantages', 'environmental', 'social', 'indigenous', 'tourism', 'mountain', 'appraisal', 'Veldannia'],
    feedbackHit: 'Discussed pipeline and two alternatives with environmental, social considerations and concluding appraisal.',
    feedbackMiss: 'Compare a pipeline with rail and road transport. Pipeline: cheap over long distances and works in all weather, but very expensive to lay over the mountains and leaks are hard to reach. Rail: economical and crash-resistant but track can be snow-blocked. Road: flexible but passes close for weeks in winter and icy roads raise spill risk. Weigh impacts on Veldannia\'s lakes, forests, farming and indigenous communities, then conclude with the best method and why.',
  },
}
