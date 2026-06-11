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
  // ─── Q1 — Propanoic Acid ──────────────────────────────────────────────────
  q1_a: {
    marks: 3,
    exemplar: 'Carbon: Group 4, Period 2; Hydrogen: Group 1, Period 1; Oxygen: Group 6, Period 2. Award 1 mark if all groups correct; 1 mark if all periods correct; award only 1 mark total if groups and periods interchanged.',
    keyConcepts: ['Periodic table', 'Groups and periods', 'CH₃CH₂COOH elements'],
    keywords: ['Group 4', 'Period 2', 'Group 1', 'Period 1', 'Group 6', 'carbon', 'hydrogen', 'oxygen'],
    feedbackHit: 'Correct group and period assignments for all three elements.',
    feedbackMiss: 'Carbon: Group 4, Period 2. Hydrogen: Group 1, Period 1. Oxygen: Group 6, Period 2.',
    blankAnswers: ['4', '2', '1', '1', '6', '2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'propanoic (acid)',
    keyConcepts: ['IUPAC nomenclature', 'Carboxylic acids'],
    keywords: ['propanoic', 'IUPAC', 'systematic name', 'propionic acid', '3 carbons'],
    feedbackHit: 'Correct systematic name: propanoic acid.',
    feedbackMiss: 'The IUPAC name uses prop- (3 carbons) + -anoic acid = propanoic acid.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Lewis structure of CH₃CH₂COOH: two methylene groups (CH₃–CH₂–) joined by C–C bonds to carboxyl (–COOH with C=O and C–OH). [1] correct bonds shown OR all lone pairs correct; [2] structure fully correct.',
    keyConcepts: ['Lewis structures', 'Covalent bonding', 'Propanoic acid'],
    keywords: ['Lewis', 'C–C', 'C=O', 'O–H', 'lone pairs', 'CH₃CH₂COOH', 'three carbons'],
    feedbackHit: 'Correct Lewis structure with C–C–C skeleton, C=O, C–OH, all bonds and lone pairs.',
    feedbackMiss: 'CH₃CH₂COOH: CH₃–CH₂ connected by C–C bond to carboxyl –COOH. Carboxyl has C=O and C–O–H. All oxygens have lone pairs.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq). Award 1 mark each for: reactants correct; products correct (H₃O⁺ and CH₃CH₂COO⁻); state symbols all correct; equilibrium arrow (⇌). Allow CH₃CH₂COOH(aq) ⇌ H⁺(aq) + CH₃CH₂COO⁻(aq).',
    keyConcepts: ['Weak acid dissociation', 'Equilibrium', 'Propanoate ion'],
    keywords: ['CH₃CH₂COOH', 'H₂O', 'H₃O⁺', 'CH₃CH₂COO⁻', 'propanoate', 'aq', 'l', 'equilibrium'],
    feedbackHit: 'Correct balanced equilibrium with all state symbols and ⇌.',
    feedbackMiss: 'CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq). Must use ⇌ and all four state symbols.',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Add/react with a base or alkali (e.g. NaOH, Na₂CO₃)',
    keyConcepts: ['Neutralisation', 'Acid-base reactions'],
    keywords: ['base', 'alkali', 'neutralise', 'NaOH'],
    feedbackHit: 'Correct: add a base or alkali.',
    feedbackMiss: 'Neutralize propanoic acid by adding a base (e.g. NaOH) → sodium propanoate + water.',
  },

  // ─── Q2 — Hot Spring Water ────────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Protons = 12 [1]; neutrons = 14 [1]. (²⁶Mg: atomic number 12, mass number 26; neutrons = 26 − 12 = 14.)',
    keyConcepts: ['Atomic structure', 'Protons and neutrons', 'Isotopes'],
    keywords: ['12 protons', '14 neutrons', 'mass number 26', 'atomic number 12', 'magnesium', 'isotope'],
    feedbackHit: 'Correct: 12 protons and 14 neutrons.',
    feedbackMiss: 'For ²⁶Mg²⁺: atomic number (protons) = 12; mass number = 26; neutrons = 26 − 12 = 14. Note: this is a different isotope from ²⁴Mg (has 2 extra neutrons).',
  },
  q2_b: {
    marks: 1,
    exemplar: 'MgCO₃',
    keyConcepts: ['Ionic formulae', 'Magnesium carbonate'],
    keywords: ['MgCO₃', 'magnesium carbonate', 'formula', '1:1 ratio'],
    feedbackHit: 'Correct formula: MgCO₃.',
    feedbackMiss: 'Mg²⁺ charge 2+; CO₃²⁻ charge 2−. Equal charges: 1 Mg²⁺ per CO₃²⁻ → MgCO₃ (no brackets needed for 1:1 ratio).',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Any two relevant physical properties, e.g.: (1) State at 25°C: Mg is solid, Br₂ is a red-brown liquid — distinguishes because Mg is a solid metal while Br₂ is liquid at room temperature. (2) Electrical conductivity: Mg conducts electricity (metal), Br₂ does not — distinguishes because Mg is a metal and Br₂ is a non-metal. Other: colour; malleable vs brittle; density. Do NOT accept valence electrons or chemical properties.',
    keyConcepts: ['Physical properties', 'Metals vs non-metals', 'Magnesium and bromine'],
    keywords: ['solid', 'liquid', 'state', 'conductor', 'malleable', 'Mg', 'Br₂', '25°C', 'red-brown'],
    feedbackHit: 'Two valid physical properties each with correct distinction for Mg vs Br₂.',
    feedbackMiss: 'Mg is solid at 25°C; Br₂ is a red-brown liquid — different states. Mg conducts electricity; Br₂ does not — Mg is a metal, Br₂ is a non-metal.',
  },
  q2_d: {
    marks: 1,
    exemplar: 'Ionic bond (accept electrovalent bond)',
    keyConcepts: ['Ionic bonding', 'Metal-non-metal reaction'],
    keywords: ['ionic', 'electrovalent', 'Mg²⁺', 'Br⁻', 'electron transfer'],
    feedbackHit: 'Correct: ionic bond.',
    feedbackMiss: 'Metal Mg reacts with non-metal Br → electron transfer → ionic bond (Mg²⁺ and Br⁻ ions).',
  },
  q2_e: {
    marks: 4,
    exemplar: 'Add sulphate ions/sulphuric acid [1]; calcium sulphate is insoluble (from table) [1]; magnesium sulphate is soluble so Mg²⁺ ions remain in solution [1]; filter (calcium sulphate) OR remove precipitate [1].',
    keyConcepts: ['Selective precipitation', 'Solubility', 'Filtration'],
    keywords: ['sulphate', 'CaSO₄', 'insoluble', 'Mg²⁺', 'soluble', 'filter', 'precipitate'],
    feedbackHit: 'Add sulphate; Ca²⁺ precipitates; Mg²⁺ stays dissolved; filter.',
    feedbackMiss: 'CaSO₄ is insoluble but MgSO₄ is soluble. Add SO₄²⁻: Ca²⁺ precipitates as CaSO₄, Mg²⁺ stays in solution. Filter off CaSO₄.',
  },
  q2_f: {
    marks: 1,
    exemplar: '2.8 moles of water. (MgSO₄·7H₂O has 7 water molecules per formula unit: 0.4 × 7 = 2.8)',
    keyConcepts: ['Water of crystallisation', 'Mole calculations'],
    keywords: ['2.8', 'moles', 'water', 'MgSO₄·7H₂O', 'Epsom salt', 'crystallisation'],
    feedbackHit: 'Correct: 2.8 moles of water.',
    feedbackMiss: 'MgSO₄·7H₂O (Epsom salt) has 7 water molecules per formula unit. So 0.4 mol × 7 = 2.8 mol water.',
  },

  // ─── Q3 — Asian Wildlife ─────────────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 0 } as MCQEntry,
  q3_b: {
    marks: 4,
    exemplar: 'Independent variable: percentage of calcium carbonate in bone/tooth OR type of bone/tooth. Dependent variable: volume or amount of CO₂ produced. Control variable 1 (any two): mass of bone/tooth; volume or amount of acid; concentration of acid; temperature; surface area or size of bone. Control variable 2: (second from above).',
    keyConcepts: ['Experimental variables', 'Scientific investigation'],
    keywords: ['independent', 'dependent', 'control', 'percentage CaCO₃', 'volume CO₂', 'mass'],
    feedbackHit: 'Correct IV, DV and two CVs.',
    feedbackMiss: 'IV = % CaCO₃ or type of bone/tooth; DV = volume CO₂; CV = mass of bone, acid concentration, temperature, etc.',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Table: more than one trial [1]; column for IV (type of bone/tooth/animal) [1]; column for DV (volume CO₂) [1]; unit for volume (cm³ or dm³ or mL) [1].',
    keyConcepts: ['Data tables', 'Recording data', 'Units'],
    keywords: ['Animal Part', 'Trial 1', 'Trial 2', 'Trial 3', 'Volume CO₂', 'cm³'],
    feedbackHit: 'Table with animal column, multiple trial columns, volume CO₂ with units.',
    feedbackMiss: 'Include: animal/bone type column (IV); ≥2 trial columns; volume CO₂ column with cm³ units.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Criterion B design rubric (1–4): [1] Equipment suggested; attempt at method; [2] Equipment to measure mass and CO₂; method for manipulating variables; [3] Adequate equipment; followable method; data allows comparison; assumptions; safety; [4] Complete: equipment (balance, gas syringe, conical flask, HCl, samples same mass); control all variables; repeats; table/graph; assumptions (all CO₂ collected); safety (HCl corrosive, goggles).',
    keyConcepts: ['Criterion B design', 'Scientific method', 'Gas collection'],
    keywords: ['gas syringe', 'conical flask', 'fixed mass', 'repeat', 'HCl', 'safety', 'Asian wildlife'],
    feedbackHit: 'Complete method with equipment, variable control, data plan, assumptions and safety.',
    feedbackMiss: 'Full design: equipment list; method controlling variables; repeats; data table; comparison method; assumptions; safety measures.',
  },

  // ─── Q4 — Graph Analysis ──────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Data for 1.9 g and 2.5 g appear anomalous/outliers [1]; suggest repeating measurements at these two masses [1].',
    keyConcepts: ['Anomalous data', 'Outliers'],
    keywords: ['anomalous', 'outlier', 'repeat', '1.9 g', '2.5 g'],
    feedbackHit: 'Identified as anomalous; suggested repeating.',
    feedbackMiss: '1.9 g and 2.5 g are outliers — they do not follow the general trend. Repeat at these masses to check.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Reading from graph at 570 cm³: ~2.2 g CaCO₃ [ECF]; % CaCO₃ = (2.2 ÷ 9.14) × 100 ≈ 24.1% [1]; correct identification of Bear bone (24.12% in table is closest) [1]. ECF from graph reading.',
    keyConcepts: ['Graph reading', 'Percentage by mass', 'Data identification'],
    keywords: ['570 cm³', '9.14 g', '24.1%', 'Bear bone', 'percentage by mass', 'best-fit line'],
    feedbackHit: 'Correctly read graph, calculated % CaCO₃ and identified Bear bone.',
    feedbackMiss: '% = (mass from graph ÷ 9.14) × 100. At 570 cm³ → ~2.2 g CaCO₃. Then 2.2/9.14 × 100 ≈ 24.1%. Closest to Bear bone (24.12%).',
  },

  // ─── Q5 — Marble vs Chalk ────────────────────────────────────────────────
  q5_a: {
    marks: 3,
    exemplar: 'Image 1: Toxic; Image 2: Flammable; Image 3: Corrosive. Award 1 mark for each correct identification.',
    keyConcepts: ['Hazard symbols', 'Laboratory safety', 'GHS symbols'],
    keywords: ['toxic', 'flammable', 'corrosive', 'GHS', 'hazard symbol'],
    feedbackHit: 'All three hazard symbols correctly identified.',
    feedbackMiss: 'Image 1 (skull and crossbones) = Toxic. Image 2 (flame) = Flammable. Image 3 (liquid dripping on surface/hand) = Corrosive.',
    blankAnswers: ['Toxic', 'Flammable', 'Corrosive'],
  },
  q5_b: { type: 'mcq', correct: 2 } as MCQEntry,
  q5_c: {
    marks: 2,
    exemplar: 'Appropriate average = 66 cm³ (average of 67 and 65, excluding Trial 2 = 55 which is the outlier) [1]. Justification: not appropriate to include an outlier/anomalous result [1].',
    keyConcepts: ['Anomalous data', 'Calculating averages'],
    keywords: ['66 cm³', 'outlier', 'Trial 2', '55', 'exclude', 'average', '67', '65'],
    feedbackHit: 'Correctly excluded Trial 2 as outlier; average = 66 cm³.',
    feedbackMiss: 'At t=40 s: T1=67, T2=55 (outlier, doesn\'t fit trend), T3=65. Exclude T2: average = (67+65)÷2 = 66 cm³.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Chalk granules = 1.45 ± 0.03 cm³ s⁻¹ [1]; Marble chips = 0.30 ± 0.03 cm³ s⁻¹ [1]. (Rate = volume at 60 s ÷ 60.)',
    keyConcepts: ['Rate of reaction', 'Calculating rate'],
    keywords: ['1.45 cm³s⁻¹', '0.30 cm³s⁻¹', 'rate', 'chalk granules', 'marble chips'],
    feedbackHit: 'Correct rates for both chalk granules and marble chips.',
    feedbackMiss: 'Rate = total volume at t=60 s ÷ 60. Read volumes from graph for each material.',
  },
  q5_e: {
    marks: 3,
    exemplar: 'Chalk granule particles are smaller than marble chips [1 ORA]; (so) rate of reaction is greater for chalk granules [1 ORA]; correct use of "surface area" and "rate of reaction" [1].',
    keyConcepts: ['Surface area and rate', 'Particle size'],
    keywords: ['smaller particles', 'surface area', 'rate', 'chalk granules', 'marble chips'],
    feedbackHit: 'Smaller chalk particles → larger surface area → greater rate.',
    feedbackMiss: 'Chalk granules are smaller than marble chips → greater surface area → more acid-CaCO₃ contact per second → faster rate.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'Marble chips take longer to be broken down/dissolved [1]; allowing more time for the reaction to neutralise acid in the soil/available over a longer period [1].',
    keyConcepts: ['Dissolution rate', 'Agricultural application'],
    keywords: ['slower', 'dissolves', 'neutralise', 'soil', 'longer period', 'liming'],
    feedbackHit: 'Marble dissolves more slowly → neutralises acid over a longer period in the soil.',
    feedbackMiss: 'Marble chips react more slowly with soil acid → takes longer to dissolve → maintains neutral pH for a longer period, which is better for crops.',
  },
  q5_g: {
    marks: 4,
    exemplar: 'Chalk granule data is less reliable [1]; greater variability between trials [1]; marble chip data is more reliable [1]; data have good agreement/low variability/consistent [1].',
    keyConcepts: ['Reliability', 'Data variability'],
    keywords: ['reliable', 'variability', 'consistency', 'chalk granules', 'marble chips', 'agreement'],
    feedbackHit: 'Compared reliability with reasoning for both materials.',
    feedbackMiss: 'Chalk trials vary significantly = less reliable. Marble trials are close together = more reliable.',
  },
  q5_h: {
    marks: 1,
    exemplar: 'Increase number of trials OR use the same size particles of marble and chalk.',
    keyConcepts: ['Improving validity', 'Experimental design'],
    keywords: ['increase trials', 'same particle size', 'validity'],
    feedbackHit: 'Valid suggestion to improve validity.',
    feedbackMiss: 'Use same particle size for both materials or increase number of repeats.',
  },

  // ─── Q6 — Crude Oil and Fractional Distillation ───────────────────────────
  q6_a: { type: 'mcq', correct: 1 } as MCQEntry,
  q6_b: {
    marks: 3,
    exemplar: 'More than two compounds/mixtures can be separated [1 WTTE]; boiling point depends on size of molecules [1]; molecules with smallest mass/length have the lowest boiling point [1 ORA].',
    keyConcepts: ['Fractional distillation', 'Boiling point', 'Separation'],
    keywords: ['boiling point', 'vaporise', 'condense', 'fractions', 'size of molecules', 'column'],
    feedbackHit: 'Outlined key principles: multiple fractions; different boiling points; smaller molecules lowest boiling point.',
    feedbackMiss: 'Crude oil heated → vaporises → rises in column → different fractions condense at different temperatures. Smaller/lighter molecules have lower boiling points.',
  },
  q6_c: {
    marks: 8,
    exemplar: 'Rubric (1–4): [1] Comment about one cleanup method; [2] More than one method described; [3] All three described (Skimmer: collect oil from surface; Burning: destroy oil by combustion; Dispersants: break oil into droplets); link to science; [4] All three + science: Skimmer: oil immiscible with water, collects floating layer; Burning: produces toxic smoke/CO₂, kills heat-sensitive corals; Dispersants: break oil into fine droplets, absorbed by microbes, but chemicals may harm corals. A+D for each and Appraisal for remaining marks.',
    keyConcepts: ['Coral reef oil spill cleanup', 'Environmental evaluation', 'Criterion D'],
    keywords: ['skimming', 'burning', 'dispersants', 'coral reefs', 'immiscible', 'toxic fumes', 'microbes', 'appraisal'],
    feedbackHit: 'All three methods discussed with A/D and best method identified with scientific justification.',
    feedbackMiss: 'For full marks: describe all three methods with scientific detail; give advantages and disadvantages of each; conclude with the best method for the coral reef environment.',
  },

  // ─── Q7 — Oil Transport, Country C ────────────────────────────────────────
  q7_: {
    marks: 14,
    exemplar: 'Rubric (1–4 scale): Pipeline (P): [1] comment about submarine pipeline; [2] one A or D; [3] one A AND D; [4] multiple A+D. Alternatives (AM): [3] A+D for both FPSO/tanker and coastal tankers; [4] multiple A+D for each. Environmental (E): [3] more than one reef impact; [4] reef/marine impacts with science. Social (S): [3] fishing/tourism; [4] multiple social impacts. Appraisal (A). Key points: Pipeline: permanent, no spill from transport, expensive to install in shallow reef areas, risk of pipe damage. FPSO: flexible, no need for onshore pipeline, risk of large tanker spill, reef damage during tanker navigation. Coastal tankers: local transport flexible, small spill risk but multiple journeys. Environmental: reef bleaching, fish kill, tourism damage, coral fragility. Social: fishing communities, tourism income, island energy security.',
    keyConcepts: ['Offshore oil transport', 'Environmental impact', 'Social considerations', 'Criterion D', 'Small island state'],
    keywords: ['submarine pipeline', 'FPSO', 'coastal tankers', 'coral reefs', 'tourism', 'fishing', 'spill risk', 'island state', 'appraisal', 'Country C'],
    feedbackHit: 'Pipeline vs FPSO vs coastal tankers with reef/social impacts and concluding appraisal.',
    feedbackMiss: 'Pipeline: stable but expensive, reef damage during construction. FPSO: flexible but tanker spill catastrophic for reefs. Coastal tankers: local but many journeys = more risk. Consider coral/fish/tourism. Conclude with best method.',
  },
}
