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
  // ─── Q1 — Acetic Acid ────────────────────────────────────────────────────
  q1_a: {
    marks: 3,
    exemplar: 'Carbon: Group 4, Period 2; Hydrogen: Group 1, Period 1; Oxygen: Group 6, Period 2. Award 1 mark if all groups correct; 1 mark if all periods correct; award only 1 mark total if groups and periods interchanged.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'CH₃COOH elements'],
    keywords: ['Group 4', 'Period 2', 'Group 1', 'Period 1', 'Group 6', 'carbon', 'hydrogen', 'oxygen'],
    feedbackHit: 'Correct group and period assignments for all three elements.',
    feedbackMiss: 'Carbon is in Group 4, Period 2. Hydrogen is in Group 1, Period 1. Oxygen is in Group 6, Period 2. These are the same as for formic acid since both contain C, H, O.',
    blankAnswers: ['4', '2', '1', '1', '6', '2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'ethanoic (acid)',
    keyConcepts: ['IUPAC nomenclature', 'Carboxylic acids'],
    keywords: ['ethanoic', 'IUPAC', 'systematic name', 'acetic acid', '2 carbons'],
    feedbackHit: 'Correct systematic name: ethanoic acid.',
    feedbackMiss: 'Acetic acid is the common name. The IUPAC name uses eth- (2 carbons) + -anoic acid = ethanoic acid.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Lewis structure of CH₃COOH: methyl group (C with 3 H bonds), single C–C bond to carboxyl group (C=O and C–OH), with lone pairs on all oxygen atoms. [1] correct bonds shown OR all lone pairs correct; [2] structure fully correct.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Carboxylic acid structure'],
    keywords: ['Lewis', 'dot-cross', 'C=O', 'C–C', 'C–H', 'O–H', 'lone pairs', 'CH₃COOH'],
    feedbackHit: 'Correct Lewis structure with C–C bond, C=O, C–OH, C–H bonds and lone pairs.',
    feedbackMiss: 'CH₃COOH has: methyl group (CH₃–) joined by C–C bond to carboxyl (–COOH). The carboxyl has C=O (carbonyl) and C–O–H (hydroxyl). All oxygens have 2 lone pairs.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq). Award 1 mark each for: reactants correct; products correct (H₃O⁺ and CH₃COO⁻); state symbols all correct; equilibrium arrow (⇌). Allow CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq).',
    keyConcepts: ['Weak acid dissociation', 'Equilibrium', 'State symbols', 'Acetate ion'],
    keywords: ['CH₃COOH', 'H₂O', 'H₃O⁺', 'CH₃COO⁻', 'acetate', 'aq', 'l', 'equilibrium'],
    feedbackHit: 'Correct balanced equilibrium with all state symbols and ⇌.',
    feedbackMiss: 'CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq). Use ⇌. All four state symbols required.',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Add/react with a base or alkali (e.g. NaOH, Na₂CO₃, CaCO₃)',
    keyConcepts: ['Neutralisation', 'Acid-base reactions'],
    keywords: ['base', 'alkali', 'neutralise', 'NaOH'],
    feedbackHit: 'Correct: add a base or alkali.',
    feedbackMiss: 'To neutralize ethanoic acid, add a base or alkali such as NaOH. The products are sodium ethanoate and water.',
  },

  // ─── Q2 — Industrial Cooling Water ────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Protons = 20 [1]; neutrons = 20 [1]. (⁴⁰Ca: atomic number 20, mass number 40; neutrons = 40 − 20 = 20; the 2+ charge affects electrons only.)',
    keyConcepts: ['Atomic structure', 'Protons and neutrons'],
    keywords: ['20 protons', '20 neutrons', 'mass number 40', 'atomic number 20', 'calcium'],
    feedbackHit: 'Correct: 20 protons and 20 neutrons.',
    feedbackMiss: 'For ⁴⁰Ca²⁺: atomic number (protons) = 20; mass number = 40; neutrons = 40 − 20 = 20. The 2+ charge only removes 2 electrons.',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Ca₃(PO₄)₂ — brackets must be present',
    keyConcepts: ['Ionic formulae', 'Cross-multiplication of charges'],
    keywords: ['Ca₃(PO₄)₂', 'calcium phosphate', 'formula', 'brackets'],
    feedbackHit: 'Correct formula: Ca₃(PO₄)₂.',
    feedbackMiss: 'Ca²⁺ charge 2+; PO₄³⁻ charge 3−. Cross-multiply: 3 × Ca²⁺ and 2 × PO₄³⁻ → Ca₃(PO₄)₂. Brackets around PO₄ required.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Any two relevant physical properties, e.g.: (1) State at 25°C: Ca is solid (melting point 842°C), Cl₂ is a yellow-green gas — distinguishes because states differ at room temperature. (2) Electrical conductivity: Ca conducts electricity (metal), Cl₂ does not — distinguishes because Ca is a metal and Cl₂ is a non-metal. Other: malleable vs brittle; density; colour. Do NOT accept reference to valence electrons, solubility or type of element.',
    keyConcepts: ['Physical properties', 'Metals vs non-metals', 'Calcium and chlorine'],
    keywords: ['solid', 'gas', 'state', 'conductor', 'malleable', 'lustre', '25°C', 'calcium', 'chlorine'],
    feedbackHit: 'Two valid physical properties each with correct distinction for Ca vs Cl₂.',
    feedbackMiss: 'State a physical property (not chemical) and explain how it differs. E.g., Ca is solid at 25°C while Cl₂ is a gas; Ca conducts electricity while Cl₂ does not.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Ionic bond (accept electrovalent bond)',
    keyConcepts: ['Ionic bonding', 'Metal-non-metal reaction'],
    keywords: ['ionic', 'electrovalent', 'Ca²⁺', 'Cl⁻', 'electron transfer'],
    feedbackHit: 'Correct: ionic bond.',
    feedbackMiss: 'When metal calcium reacts with non-metal chlorine, electrons transfer from Ca to Cl → ionic bond (Ca²⁺ and Cl⁻ ions).',
  },
  q2_e: {
    marks: 4,
    exemplar: 'Add sulphate ions/sulphuric acid [1]; calcium sulphate is insoluble (from table) [1]; magnesium sulphate is soluble so Mg²⁺ ions remain in solution [1]; filter (calcium sulphate from the solution) OR remove precipitate [1]. Accept Ca ions / Mg ions.',
    keyConcepts: ['Selective precipitation', 'Solubility', 'Filtration'],
    keywords: ['sulphate', 'CaSO₄', 'insoluble', 'Mg²⁺', 'soluble', 'filter', 'precipitate'],
    feedbackHit: 'Add sulphate; Ca²⁺ precipitates as CaSO₄; Mg²⁺ stays in solution; filter.',
    feedbackMiss: 'From the table: CaSO₄ is insoluble but MgSO₄ is soluble. Add SO₄²⁻: only Ca²⁺ precipitates; Mg²⁺ stays dissolved. Filter off the CaSO₄ solid.',
  },
  q2_f: {
    marks: 1,
    exemplar: '1.5 moles of water. (CuSO₄·5H₂O has 5 H₂O per formula unit: 0.3 × 5 = 1.5)',
    keyConcepts: ['Water of crystallisation', 'Mole calculations'],
    keywords: ['1.5', 'moles', 'water', 'CuSO₄·5H₂O', 'crystallisation', 'blue vitriol'],
    feedbackHit: 'Correct: 1.5 moles of water.',
    feedbackMiss: 'CuSO₄·5H₂O has 5 moles of water per mole of compound. So 0.3 mol × 5 = 1.5 mol water.',
  },

  // ─── Q3 — African Savanna Animals ──────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 0 } as MCQEntry,
  q3_b: {
    marks: 4,
    exemplar: 'Independent variable: percentage of calcium carbonate in bone/tooth OR type of bone/tooth. Dependent variable: volume or amount of CO₂ produced. Control variable 1 (any two): mass of bone/tooth; volume or amount of acid used; concentration of acid used; temperature; surface area or size of bone. Control variable 2: (second acceptable from above).',
    keyConcepts: ['Experimental variables', 'Scientific investigation'],
    keywords: ['independent', 'dependent', 'control', 'percentage CaCO₃', 'volume CO₂', 'mass', 'concentration'],
    feedbackHit: 'Correct IV, DV and two appropriate CVs.',
    feedbackMiss: 'IV = % CaCO₃ or type of bone/tooth; DV = volume CO₂; CV = mass of bone, acid concentration, temperature, etc.',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Table must show: more than one trial [1]; column for independent variable (type of bone/tooth/animal) [1]; column for dependent variable (volume CO₂) [1]; unit for volume (cm³ or dm³ or mL) [1].',
    keyConcepts: ['Data tables', 'Recording data', 'Units'],
    keywords: ['Animal Part', 'Trial 1', 'Trial 2', 'Trial 3', 'Volume CO₂', 'cm³'],
    feedbackHit: 'Table with animal column, multiple trial columns, volume CO₂ column with units.',
    feedbackMiss: 'Include: column for animal/bone type (IV); at least 2 trial columns for repeats; volume CO₂ column with cm³ units.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Full Criterion B design rubric (1–4 scale): [1] Equipment suggested; attempt at method; data collection identified; [2] Equipment to measure mass and volume CO₂; method for manipulating variables; plan to collect data for at least one bone type; [3] Adequate equipment list; method followable; data plan allows comparison; assumptions identified; safety mentioned; [4] Complete method: equipment (balance, gas syringe, conical flask, HCl, bone samples same mass); control all variables; measure CO₂ per animal/bone type with repeats; table/graph to compare; assumptions (all CO₂ collected); safety (HCl corrosive, eye protection). Total 17 marks across bands.',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Gas collection'],
    keywords: ['gas syringe', 'conical flask', 'balance', 'fixed mass', 'repeat', 'HCl', 'safety', 'assumptions'],
    feedbackHit: 'Complete method with equipment, variable control, data plan, assumptions and safety.',
    feedbackMiss: 'Design requires: equipment list; method to control variables; plan for repeats; data recording table; how to compare; assumptions; safety measures.',
  },

  // ─── Q4 — Graph Analysis ──────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Data for 1.9 g and 2.5 g appear anomalous/inconsistent with the trend (outliers) [1]; suggest repeating measurements for these two data points [1].',
    keyConcepts: ['Anomalous data', 'Outliers', 'Repeating measurements'],
    keywords: ['anomalous', 'outlier', 'repeat', '1.9 g', '2.5 g', 'inconsistent', 'trend'],
    feedbackHit: 'Identified as anomalous; suggested repeating measurements.',
    feedbackMiss: 'Both 1.9 g and 2.5 g are outliers that do not follow the general trend. Repeat the experiment at these masses to check the values.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Reading from graph at 500 cm³: ~2.0 g CaCO₃ [ECF]; % CaCO₃ = (2.0 ÷ 7.56) × 100 ≈ 26.5% [1 for correct method]; correct identification of Lion teeth (27.36% in table is closest) [1]. ECF from graph reading.',
    keyConcepts: ['Graph reading', 'Percentage by mass', 'Data identification'],
    keywords: ['500 cm³', '7.56 g', '26.5%', 'Lion teeth', 'percentage by mass', 'graph', 'best-fit line'],
    feedbackHit: 'Correctly read graph, calculated % CaCO₃ and identified Lion teeth.',
    feedbackMiss: '% CaCO₃ = (mass from graph ÷ 7.56) × 100. At 500 cm³ → ~2.0 g CaCO₃. Then 2.0/7.56 × 100 ≈ 26.5%. Closest to Lion teeth (27.36%) in the table.',
  },

  // ─── Q5 — Snail Shell vs Chalk ────────────────────────────────────────────
  q5_a: {
    marks: 3,
    exemplar: 'Image 1: Flammable; Image 2: Corrosive; Image 3: Toxic. Award 1 mark for each correct identification.',
    keyConcepts: ['Hazard symbols', 'Laboratory safety', 'GHS symbols'],
    keywords: ['flammable', 'corrosive', 'toxic', 'GHS', 'hazard symbol'],
    feedbackHit: 'All three hazard symbols correctly identified.',
    feedbackMiss: 'Image 1 (flame) = Flammable. Image 2 (liquid dripping on surface/hand) = Corrosive. Image 3 (skull and crossbones) = Toxic.',
    blankAnswers: ['Flammable', 'Corrosive', 'Toxic'],
  },
  q5_b: { type: 'mcq', correct: 1 } as MCQEntry,
  q5_c: {
    marks: 2,
    exemplar: 'Appropriate average = 42 cm³ (average of 43 and 41, excluding Trial 2 = 53 which is the outlier) [1]. Justification: not appropriate to include an outlier/anomalous result in the average [1].',
    keyConcepts: ['Anomalous data', 'Calculating averages'],
    keywords: ['42 cm³', 'outlier', 'Trial 2', '53', 'exclude', 'average', '43', '41'],
    feedbackHit: 'Correctly excluded Trial 2 as outlier and calculated average of 42 cm³.',
    feedbackMiss: 'At t=40 s: T1=43, T2=53 (outlier), T3=41. Trial 2 does not fit the trend. Exclude it: average = (43+41)÷2 = 42 cm³.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Snail shell = 1.05 ± 0.03 cm³ s⁻¹ [1]; Chalk powder = 0.23 ± 0.03 cm³ s⁻¹ [1]. (Read total volume at t=60 s from graph and divide by 60.)',
    keyConcepts: ['Rate of reaction', 'Calculating rate'],
    keywords: ['1.05 cm³s⁻¹', '0.23 cm³s⁻¹', 'rate', 'volume ÷ time', 'snail shell', 'chalk powder'],
    feedbackHit: 'Correct rates for both snail shell and chalk powder.',
    feedbackMiss: 'Rate = total volume at 60 s ÷ 60 s. Read total volume for each material from the graph at t=60 s.',
  },
  q5_e: {
    marks: 3,
    exemplar: 'Chalk powder particles are smaller than snail shell particles [1 ORA]; (so) rate of reaction is greater for chalk powder [1 ORA]; correct use of terms "surface area" and "rate of reaction" [1].',
    keyConcepts: ['Surface area and rate', 'Particle size', 'Rates of reaction'],
    keywords: ['smaller particles', 'surface area', 'rate of reaction', 'chalk powder', 'snail shell'],
    feedbackHit: 'Smaller chalk particles → larger surface area → greater rate of reaction.',
    feedbackMiss: 'Chalk powder has smaller particles than snail shell → greater surface area → more acid collisions per second → faster rate.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'Snail shell takes longer to be broken down/dissolved [1]; allowing more time for the snail to absorb calcium carbonate/Ca²⁺ ions for shell production [1].',
    keyConcepts: ['Dissolution rate', 'Biological application'],
    keywords: ['slower', 'broken down', 'absorb', 'shell production', 'Ca²⁺', 'time'],
    feedbackHit: 'Snail shell dissolves more slowly → snail has more time to absorb Ca²⁺.',
    feedbackMiss: 'Graph shows snail shell reacts more slowly. Slower dissolution → stays in digestive system longer → more time for Ca²⁺ absorption for shell formation.',
  },
  q5_g: {
    marks: 4,
    exemplar: 'Chalk powder data is less reliable [1]; because of greater variability/poor consistency between trials [1]; snail shell data is more reliable [1]; because data have good agreement/low variability [1].',
    keyConcepts: ['Reliability', 'Data variability', 'Consistency'],
    keywords: ['reliable', 'variability', 'consistency', 'agreement', 'chalk powder', 'snail shell'],
    feedbackHit: 'Compared reliability of both datasets with reasoning.',
    feedbackMiss: 'Compare the spread of the three trials for each material. Chalk: trials vary a lot = less reliable. Snail shell: trials are close = more reliable.',
  },
  q5_h: {
    marks: 1,
    exemplar: 'Increase number of trials OR use the same size particles of snail shell and chalk powder.',
    keyConcepts: ['Improving validity', 'Experimental design'],
    keywords: ['increase trials', 'same particle size', 'validity', 'repeat'],
    feedbackHit: 'Valid suggestion to improve the investigation.',
    feedbackMiss: 'To improve validity: use the same particle size for both materials, or increase the number of repeats.',
  },

  // ─── Q6 — Crude Oil and Fractional Distillation ───────────────────────────
  q6_a: { type: 'mcq', correct: 2 } as MCQEntry,
  q6_b: {
    marks: 3,
    exemplar: 'More than two compounds/mixtures can be separated [1 WTTE]; boiling point depends on size/length of molecules [1]; molecules with greatest mass/length have the highest boiling point and are collected lowest in the column [1 ORA].',
    keyConcepts: ['Fractional distillation', 'Boiling point', 'Separation'],
    keywords: ['boiling point', 'vaporise', 'condense', 'fractions', 'size', 'column', 'temperature'],
    feedbackHit: 'Outlined key principles: multiple fractions; different boiling points; larger molecules higher boiling point.',
    feedbackMiss: 'Crude oil heated → vaporises → rises in column → fractions condense at different levels. Larger/heavier molecules condense lower in the column (higher boiling point).',
  },
  q6_c: {
    marks: 8,
    exemplar: 'Rubric (1–4): [1] Comment about one method of cleanup; [2] More than one method described; [3] All three methods described (Booms: contain oil, collected; Bioremediation: bacteria degrade oil slowly; Dredging: removes contaminated sediment but disturbs riverbed); [4] All three methods with science: Booms: oil less dense than water, floats; Bioremediation: slow but no chemical additives; Dredging: invasive, disturbs ecosystem. Advantages/Disadvantages and Appraisal bands for remaining marks.',
    keyConcepts: ['Freshwater oil spill cleanup', 'Environmental evaluation', 'Criterion D'],
    keywords: ['booms', 'bioremediation', 'dredging', 'oil density', 'bacteria', 'sediment', 'environment', 'appraisal'],
    feedbackHit: 'Discussed all three methods with advantages/disadvantages and justified best method.',
    feedbackMiss: 'For each method: explain how it works, give an advantage and disadvantage. Conclude with best method for the environment and why.',
  },

  // ─── Q7 — Oil Transport, Country B ────────────────────────────────────────
  q7_: {
    marks: 14,
    exemplar: 'Rubric (1–4 scale): Pipeline (P): [1] comment about pipeline; [2] one advantage or disadvantage; [3] one advantage AND disadvantage; [4] multiple advantages and disadvantages. Alternative Methods (AM): [1] comment about alternative; [3] one A+D for both road and rail; [4] multiple A+D for each. Environmental (E): [1] one impact; [3] more than one; [4] multiple with science support. Social (S): [1] one social impact; [3] more than one including nomadic communities. Appraisal (A): concluding statement. Key points: Pipeline: cheap long-distance, protected underground, risk of leaks in mountains. Road tanker: flexible, road network, accident risk in mountain roads, avalanche. Rail: large volumes, existing railway, derailment risk. Environmental: leaks → soil/water contamination, mountain glaciers, endemic species. Social: nomadic herding communities displaced, employment, cheap energy for LEDC.',
    keyConcepts: ['Oil transport methods', 'Environmental impact', 'Social considerations', 'Criterion D', 'Landlocked country'],
    keywords: ['pipeline', 'road tanker', 'rail', 'advantages', 'disadvantages', 'environmental', 'nomadic communities', 'mountains', 'avalanche', 'appraisal', 'Country B'],
    feedbackHit: 'Pipeline vs road/rail with environmental, social considerations and concluding appraisal.',
    feedbackMiss: 'Pipeline: cheap but expensive to install in mountains, risk of leaks. Road: flexible but dangerous mountain roads. Rail: large volume but derailment risk. Consider impact on nomadic communities and mountain environment. Conclude with best method.',
  },
}
