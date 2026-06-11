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
  // ─── Q1 — Formic Acid ─────────────────────────────────────────────────────
  q1_a: {
    marks: 3,
    exemplar: 'Carbon: Group 4, Period 2 [1 if all groups correct; 1 if all periods correct; 1 if all correct — deduct if groups and periods interchanged]; Hydrogen: Group 1, Period 1; Oxygen: Group 6, Period 2',
    keyConcepts: ['Periodic table', 'Groups and periods', 'HCOOH elements'],
    keywords: ['Group 4', 'Period 2', 'Group 1', 'Period 1', 'Group 6', 'carbon', 'hydrogen', 'oxygen'],
    feedbackHit: 'Correct group and period assignments for all three elements.',
    feedbackMiss: 'Carbon is in Group 4, Period 2. Hydrogen is in Group 1, Period 1. Oxygen is in Group 6, Period 2.',
    blankAnswers: ['4', '2', '1', '1', '6', '2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'methanoic (acid)',
    keyConcepts: ['IUPAC nomenclature', 'Carboxylic acids'],
    keywords: ['methanoic', 'IUPAC', 'systematic name', 'formic acid'],
    feedbackHit: 'Correct systematic name: methanoic acid.',
    feedbackMiss: 'Formic acid is the common name; the systematic (IUPAC) name is methanoic acid (meth- = 1 carbon, -anoic acid = carboxylic acid).',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Lewis structure of HCOOH: C central atom, double bond to O (with two lone pairs), single bond to OH (O with two lone pairs), single bond to H. All bonds shown as dots/crosses or lines. [1] correct bonds shown OR all lone pairs correct; [2] structure fully correct.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Lone pairs', 'Carboxylic acid structure'],
    keywords: ['Lewis', 'dot-cross', 'lone pairs', 'double bond', 'C=O', 'O–H', 'HCOOH'],
    feedbackHit: 'Correct Lewis structure with bonds and lone pairs shown.',
    feedbackMiss: 'HCOOH has: C=O (carbonyl), C–O–H (hydroxyl), and C–H. Carbon forms 4 bonds total. Oxygen atoms each have 2 lone pairs.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'HCOOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCOO⁻(aq). Award 1 mark each for: reactants correct; products correct (H₃O⁺ and HCOO⁻); state symbols all correct; equilibrium arrow (⇌). Allow HCOOH(aq) ⇌ H⁺(aq) + HCOO⁻(aq). Accept CHOOH for HCOOH.',
    keyConcepts: ['Weak acid dissociation', 'Equilibrium', 'State symbols', 'Conjugate base'],
    keywords: ['HCOOH', 'H₂O', 'H₃O⁺', 'HCOO⁻', 'aq', 'l', 'equilibrium', 'reversible'],
    feedbackHit: 'Correct balanced equilibrium equation with all state symbols.',
    feedbackMiss: 'Use ⇌ (not →). Formic acid donates H⁺ to water: HCOOH + H₂O ⇌ H₃O⁺ + HCOO⁻. All four state symbols are required: (aq), (l), (aq), (aq).',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Add/react with a base or alkali (e.g. NaOH, Na₂CO₃, CaCO₃)',
    keyConcepts: ['Neutralisation', 'Acid-base reactions'],
    keywords: ['base', 'alkali', 'neutralise', 'NaOH', 'neutralization'],
    feedbackHit: 'Correct: react with a base or alkali.',
    feedbackMiss: 'To neutralize an acid, add a base or alkali (e.g. NaOH, sodium hydroxide). The H⁺ ions react with OH⁻ ions to form water.',
  },

  // ─── Q2 — Hard Water ─────────────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Protons = 12 [1]; neutrons = 12 [1]. (Mass number 24, atomic number 12; the 2+ charge removes 2 electrons but does not affect protons or neutrons.)',
    keyConcepts: ['Atomic structure', 'Protons', 'Neutrons', 'Mass number'],
    keywords: ['12 protons', '12 neutrons', 'mass number 24', 'atomic number 12', 'magnesium'],
    feedbackHit: 'Correct: 12 protons and 12 neutrons.',
    feedbackMiss: 'For ²⁴Mg²⁺: mass number = protons + neutrons = 24; atomic number = protons = 12; neutrons = 24 − 12 = 12. The 2+ charge only affects electrons (not counted here).',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Mg₃(PO₄)₂ — brackets must be present',
    keyConcepts: ['Ionic formulae', 'Cross-multiplication of charges'],
    keywords: ['Mg₃(PO₄)₂', 'magnesium phosphate', 'formula', 'brackets'],
    feedbackHit: 'Correct formula: Mg₃(PO₄)₂.',
    feedbackMiss: 'Mg²⁺ has charge 2+; PO₄³⁻ has charge 3−. Cross-multiply: 3 × Mg²⁺ and 2 × PO₄³⁻ → Mg₃(PO₄)₂. Brackets around PO₄ are required.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Any two relevant physical properties, e.g.: (1) State: Mg is solid at 25°C, Cl₂ is gas — distinguishes because states differ at room temperature. (2) Electrical conductivity: Mg conducts electricity (metallic), Cl₂ does not — distinguishes because one is a metal, the other a non-metal. Other acceptable: malleable/brittle; lustre; melting/boiling point; density. Do NOT accept reference to valence electrons, solubility or type of element.',
    keyConcepts: ['Physical properties of metals vs non-metals', 'State of matter', 'Electrical conductivity'],
    keywords: ['solid', 'gas', 'state', 'conductor', 'malleable', 'lustre', 'metal', 'non-metal', '25°C'],
    feedbackHit: 'Two valid physical properties each with correct distinction.',
    feedbackMiss: 'Give a physical property (not chemical), then state how that property differs for Mg vs Cl₂. e.g. Mg is a solid, Cl₂ is a gas — different states at 25°C.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Ionic bond (accept electrovalent bond)',
    keyConcepts: ['Ionic bonding', 'Metal-non-metal reaction'],
    keywords: ['ionic', 'electrovalent', 'Mg²⁺', 'Cl⁻', 'transfer of electrons'],
    feedbackHit: 'Correct: ionic bond.',
    feedbackMiss: 'When a metal (Mg) reacts with a non-metal (Cl), it transfers electrons to form ions → ionic bond. Do not say covalent (that is for non-metal + non-metal).',
  },
  q2_e: {
    marks: 4,
    exemplar: 'Add sulphate ions/sulphuric acid [1]; calcium sulphate is insoluble (from table) [1]; magnesium sulphate is soluble so Mg²⁺ ions remain in solution [1]; filter (calcium sulphate from the solution) OR remove precipitate OR remove solid [1]. Accept Ca ions / Mg ions.',
    keyConcepts: ['Selective precipitation', 'Solubility', 'Filtration'],
    keywords: ['sulphate', 'CaSO₄', 'insoluble', 'Mg²⁺', 'soluble', 'filter', 'precipitate'],
    feedbackHit: 'Correct: add sulphate; CaSO₄ precipitates; Mg²⁺ stays in solution; filter.',
    feedbackMiss: 'The table shows CaSO₄ is insoluble but MgSO₄ is soluble. So add SO₄²⁻ (e.g. as H₂SO₄): only Ca²⁺ precipitates as CaSO₄; Mg²⁺ stays dissolved. Then filter to remove the CaSO₄ solid.',
  },
  q2_f: {
    marks: 1,
    exemplar: '2.5 moles of water. (Each formula unit has 5 water molecules: 0.5 × 5 = 2.5)',
    keyConcepts: ['Water of crystallisation', 'Mole calculations'],
    keywords: ['2.5', 'moles', 'water', 'MgSO₄·5H₂O', 'crystallisation'],
    feedbackHit: 'Correct: 2.5 moles of water.',
    feedbackMiss: 'MgSO₄·5H₂O has 5 moles of water per mole of compound. So 0.5 mol × 5 = 2.5 mol water.',
  },

  // ─── Q3 — Animal Bones/Teeth ──────────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 0 } as MCQEntry,
  q3_b: {
    marks: 4,
    exemplar: 'Independent variable: percentage of calcium carbonate in bone/tooth OR type of bone/tooth (do not accept "calcium" or "amount of bone"). Dependent variable: volume or amount of carbon dioxide produced. Control variable 1 (any two from): mass of bone/tooth; volume or amount of acid used; concentration of acid used; temperature; surface area or size of bone. Control variable 2: (second acceptable control variable from the list above).',
    keyConcepts: ['Experimental variables', 'Independent variable', 'Dependent variable', 'Controlled variables'],
    keywords: ['independent', 'dependent', 'control', 'percentage CaCO₃', 'volume CO₂', 'mass', 'concentration'],
    feedbackHit: 'Correct IV, DV and two appropriate CVs.',
    feedbackMiss: 'IV = what you change (% CaCO₃ or type of bone/tooth); DV = what you measure (volume CO₂); CV = what you keep constant (mass of bone, acid concentration, temperature, etc.).',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Table must show: indication of more than one trial [1]; column for independent variable (type of bone/tooth or animal part) [1]; column for dependent variable (volume of CO₂) [1]; unit for volume (cm³ or dm³ or mL or L) [1]. ECF from part (b).',
    keyConcepts: ['Data tables', 'Recording data', 'Units'],
    keywords: ['Animal Part', 'Trial 1', 'Trial 2', 'Trial 3', 'Volume CO₂', 'cm³'],
    feedbackHit: 'Table has animal/bone type column, multiple trial columns, volume CO₂ column with units.',
    feedbackMiss: 'The table needs: a column for the type of bone/tooth (IV); columns for at least 2 trials (to allow repeat); a column for volume of CO₂ with cm³ units.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Full Criterion B design rubric (1–4 scale): [1] Equipment suggested but insufficient; attempt at method; data to collect identified; [2] Equipment to measure mass and volume CO₂; method for manipulating variables stated; plan to collect at least one type of bone; [3] Adequate equipment list; method could be followed; data plan would allow comparison; assumptions identified; safety mentioned; [4] Complete method: equipment listed (balance, gas syringe, conical flask, HCl, bone samples of same mass); control all variables; measure volume CO₂ per bone type with repeats; use table/graph to compare; state assumptions (all CO₂ collected, constant temperature); safety measures (HCl hazard, disposal). Total 17 marks distributed across bands.',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Equipment list', 'Data collection', 'Safety'],
    keywords: ['gas syringe', 'conical flask', 'balance', 'fixed mass', 'repeat', 'control variables', 'safety', 'HCl corrosive', 'assumptions'],
    feedbackHit: 'Complete method with equipment, variable control, data collection plan, assumptions and safety.',
    feedbackMiss: 'Full design requires: detailed equipment list; method to control all variables; plan for repeats; data recording table; how to identify highest % CaCO₃; at least one assumption; at least one safety measure.',
  },

  // ─── Q4 — Graph Analysis ─────────────────────────────────────────────────
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
    exemplar: 'Reading from graph at 540 cm³: ~2.1 g CaCO₃ [ECF from graph]; % CaCO₃ = (2.1 ÷ 8.71) × 100 ≈ 24.1% [1 for correct method]; correct identification of Horse bone (24.70% in table closest to calculated value) [1]. ECF from part (b) reading; do not award if only interpolation used without calculation.',
    keyConcepts: ['Graph reading', 'Percentage by mass', 'Data identification'],
    keywords: ['540 cm³', '8.71 g', '24.1%', 'horse bone', 'percentage by mass', 'graph', 'best-fit line'],
    feedbackHit: 'Correctly read graph, calculated % CaCO₃ and identified horse bone.',
    feedbackMiss: '% CaCO₃ = (mass of CaCO₃ from graph ÷ total mass of bone) × 100. At 540 cm³, the graph gives ~2.1 g CaCO₃. Then 2.1/8.71 × 100 ≈ 24.1%. Looking at the table, Horse bone = 24.70% is closest.',
  },

  // ─── Q5 — Eggshells and Rates of Reaction ────────────────────────────────
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
    exemplar: 'Appropriate average = 56 cm³ (average of 57 and 55, excluding Trial 2 = 67 which is the outlier) [1]. Justification: it is not appropriate to include an outlier/anomalous result in the average [1]. Do not award if inappropriate average (e.g. including 67) is used without identifying the outlier.',
    keyConcepts: ['Anomalous data', 'Calculating averages', 'Data analysis'],
    keywords: ['56 cm³', 'outlier', 'Trial 2', '67', 'exclude', 'average', '57', '55'],
    feedbackHit: 'Correctly excluded outlier and calculated average of 56 cm³.',
    feedbackMiss: 'At t=40 s: Trial 1=57, Trial 2=67, Trial 3=55. Trial 2 (67) is an outlier that does not fit the trend. Exclude it: average = (57+55)÷2 = 56 cm³.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Limestone = 1.33 ± 0.03 cm³ s⁻¹ [1]; Crushed oyster shell = 0.28 ± 0.03 cm³ s⁻¹ [1]. (Read total volume from graph at t=60 s; divide by 60.)',
    keyConcepts: ['Rate of reaction', 'Calculating rate', 'Graph reading'],
    keywords: ['1.33 cm³s⁻¹', '0.28 cm³s⁻¹', 'rate', 'volume ÷ time', 'limestone', 'oyster shell'],
    feedbackHit: 'Correct rates for both limestone and oyster shell.',
    feedbackMiss: 'Rate = total volume produced ÷ total time. Read total volume at t=60 s from graph for each material, then divide by 60 seconds.',
  },
  q5_e: {
    marks: 3,
    exemplar: 'Limestone particles are smaller than crushed oyster shell [1 ORA]; (so) rate of reaction is greater for limestone / rate of reaction is lower for crushed oyster shell [1 ORA]; correct use of terms "surface area" and "rate of reaction" [1].',
    keyConcepts: ['Surface area and rate', 'Particle size', 'Rates of reaction'],
    keywords: ['smaller particles', 'surface area', 'rate of reaction', 'greater', 'limestone', 'oyster shell'],
    feedbackHit: 'Smaller particles → larger surface area → greater rate of reaction for limestone.',
    feedbackMiss: 'Smaller particles have a larger surface area exposed to the acid. This means more collisions per second → greater rate of reaction. Limestone chips are smaller than crushed oyster shell.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'The crushed oyster shell takes longer to be broken down [1]; allowing more time for the hen to absorb or use the calcium carbonate for eggshell production (accept "digest") [1].',
    keyConcepts: ['Reaction rate and biological function', 'Dissolution time'],
    keywords: ['longer', 'broken down', 'absorb', 'digest', 'eggshell', 'calcium carbonate', 'time'],
    feedbackHit: 'Oyster shell dissolves more slowly → hen has more time to absorb CaCO₃.',
    feedbackMiss: 'The graph shows oyster shell reacts more slowly. This means it stays in the digestive system longer, giving the hen more time to absorb Ca²⁺ for eggshell formation.',
  },
  q5_g: {
    marks: 4,
    exemplar: 'Limestone data is less reliable [1]; because of greater variability/poor consistency between trials [1]; crushed oyster shell data is more reliable [1]; because data have good agreement/low variability/good consistency between trials [1].',
    keyConcepts: ['Reliability', 'Data variability', 'Consistency'],
    keywords: ['reliable', 'variability', 'consistency', 'agreement', 'limestone', 'oyster shell'],
    feedbackHit: 'Compared reliability of both datasets with supporting reasoning.',
    feedbackMiss: 'Compare the spread (variability) of the three trials for each material. Limestone trials vary considerably = less reliable. Oyster shell trials are close together = more reliable.',
  },
  q5_h: {
    marks: 1,
    exemplar: 'Increase number of trials (repeats) OR use the same size particles of limestone and oyster shell.',
    keyConcepts: ['Improving validity', 'Experimental design'],
    keywords: ['increase trials', 'same particle size', 'validity', 'repeat'],
    feedbackHit: 'Valid suggestion to improve the investigation.',
    feedbackMiss: 'To improve validity: ensure the same particle size is used for both materials (so only one variable differs), or increase the number of repeats to improve reliability.',
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
    exemplar: 'Rubric (1–4 scale): [1] Comment about removal using one method; [2] Comment about more than one method of removal; [3] Describes removal using all three methods (Skimmer: oil immiscible with water collected from surface; Burning: fumes/smoke produced; Dispersion: chemicals break down oil, components remain in water/affect aquatic life); [4] All three methods described and linked to science — Skimmer: oil and water are immiscible; Burning: fumes, smoke toxic; Dispersion: components remain in water, affect aquatic life. Award additional marks for Advantages/Disadvantages (1–2 points) and Appraisal (identifying best method with scientific justification). Total 8 marks across Method, A/D and Appraisal bands.',
    keyConcepts: ['Oil spill cleanup', 'Environmental evaluation', 'Criterion D', 'Advantages/disadvantages'],
    keywords: ['skimmer', 'burning', 'dispersion', 'immiscible', 'fumes', 'aquatic life', 'environment', 'best method'],
    feedbackHit: 'Discussed all three methods with advantages/disadvantages and identified best method with justification.',
    feedbackMiss: 'For full marks: describe how each method works (skimmer collects oil, burning destroys it, dispersion breaks it down); give advantage and disadvantage for each; conclude with best method and why (e.g. skimmer best because it physically removes oil without adding chemicals).',
  },

  // ─── Q7 — Oil Transport Methods ───────────────────────────────────────────
  q7_: {
    marks: 14,
    exemplar: 'Rubric (1–4 scale) across Pipeline (P), Alternative Methods (AM), Environmental (E), Social (S), Appraisal (A):\n[1] Comment about a pipeline; one advantage or disadvantage implied;\n[2] One advantage OR disadvantage of a pipeline implied; one advantage or disadvantage of one alternative method;\n[3] One advantage AND disadvantage of a pipeline; one advantage or disadvantage of both alternative methods OR more than one advantage AND disadvantage of one alternative method; more than one environmental impact; a social impact; more than one environmental impact with at least one supported by science;\n[4] More than one advantage AND disadvantage of both pipeline AND alternatives; more than one environmental impact with at least one supported by science; more than one social impact; concluding appraisal linking all issues discussed.\nKey points: Pipeline advantages: cheap long-distance transport, no road congestion, continuous flow; disadvantages: expensive to build/maintain, risk of leaks, environmental damage. Road tanker: flexible, no fixed route; risk of accident, traffic congestion. Sea tanker: large volumes transported; risk of oil spill, environmental damage to coral reefs/marine life. Environmental: pipeline leaks contaminate soil/water; burning oil creates air pollution; sea spills damage coral reefs. Social: employment for indigenous communities; tourism affected by oil industry; cheap energy for LEDC.',
    keyConcepts: ['Oil transport methods', 'Environmental impact', 'Social considerations', 'Criterion D evaluation', 'Appraisal'],
    keywords: ['pipeline', 'road tanker', 'sea tanker', 'advantages', 'disadvantages', 'environmental', 'social', 'indigenous', 'tourism', 'appraisal', 'Country X'],
    feedbackHit: 'Discussed pipeline and two alternatives with environmental, social considerations and concluding appraisal.',
    feedbackMiss: 'Compare pipeline vs road and sea transport. Pipeline: cheap over long distances but expensive to install and risk of leaks. Road tanker: flexible but accident risk. Sea tanker: large volumes but catastrophic spill risk (especially near coral reefs). Consider tourism/environment of Country X. Conclude with best method and why.',
  },
}
