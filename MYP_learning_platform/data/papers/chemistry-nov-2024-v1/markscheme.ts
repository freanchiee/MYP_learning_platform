import 'server-only'

export interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

export interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {

  // ─── Q1: Silver / distillation / propan-1-ol / FeCl₂ ────────────────────
  q1_a: {
    type: 'mcq',
    correct: 1,
  },

  q1_b: {
    type: 'mcq',
    correct: 1,
  },

  q1_c: {
    marks: 4,
    exemplar:
      'X→Y: liquid evaporates/boils; particles gain kinetic energy; overcome intermolecular forces; escape as gas/vapour. (2 marks)\n' +
      'Y→Z: gas condenses; particles lose kinetic energy; intermolecular forces pull particles together; form liquid. (2 marks)',
    keyConcepts: ['States of matter', 'Particle theory', 'State changes'],
    keywords: ['evaporation', 'condensation', 'kinetic energy', 'intermolecular forces'],
    feedbackHit: 'Correctly described both state changes with particle-level reasoning.',
    feedbackMiss: 'Remember: X→Y is evaporation (liquid→gas); Y→Z is condensation (gas→liquid). Use particle theory.',
  },

  q1_d: {
    type: 'mcq',
    correct: 1,
  },

  q1_e: {
    marks: 2,
    exemplar: 'Mr(FeCl₂) = 56 + 2(35.5) = 56 + 71 = 127',
    keyConcepts: ['Formula mass', 'Relative atomic mass'],
    keywords: ['formula mass', 'Mr', 'FeCl₂', '127'],
    feedbackHit: 'Correct formula mass of 127 g/mol for FeCl₂.',
    feedbackMiss: 'Mr(FeCl₂) = Ar(Fe) + 2 × Ar(Cl) = 56 + 2(35.5) = 127.',
    blankAnswers: ['127'],
  },

  // ─── Q2: CO₂ / sparkling water / methane synthesis ───────────────────────
  q2_a: {
    type: 'mcq',
    correct: 1,
  },

  q2_b: {
    marks: 3,
    exemplar:
      'When bottle is opened, pressure decreases/drops. (1)\n' +
      'CO₂ becomes less soluble at lower pressure / comes out of solution. (1)\n' +
      'CO₂ escaping forms hissing sound / rapid gas release causes sound. (1)',
    keyConcepts: ['Gas solubility', 'Pressure', 'Henry\'s Law'],
    keywords: ['pressure', 'solubility', 'CO₂', 'hissing', 'bubbles'],
    feedbackHit: 'Correctly linked pressure drop to CO₂ coming out of solution and sound.',
    feedbackMiss: 'Pressure drops when bottle opens → CO₂ less soluble → bubbles form → escaping gas makes hissing sound.',
  },

  q2_c: {
    marks: 4,
    exemplar:
      'CO₂ + 4H₂ → CH₄ + 2H₂O\n' +
      'n(CO₂) = 528 / 44 = 12 mol\n' +
      'n(CH₄) = 12 mol (1:1 ratio)\n' +
      'm(CH₄) = 12 × 16 = 192 g = 1.92 × 10² g',
    keyConcepts: ['Moles', 'Stoichiometry', 'Standard form'],
    keywords: ['moles', 'stoichiometry', 'methane', '192', '1.92 × 10²'],
    feedbackHit: 'Correct calculation: 12 mol CO₂ → 12 mol CH₄ → 192 g = 1.92 × 10² g.',
    feedbackMiss: 'n = mass/Mr → n(CO₂)=528/44=12; 1:1 ratio → 12 mol CH₄; m=12×16=192g=1.92×10²g.',
    blankAnswers: ['1.92 × 10²'],
  },

  q2_d: {
    marks: 3,
    exemplar:
      'Catalyst provides alternative reaction pathway. (1)\n' +
      'This pathway has a lower activation energy. (1)\n' +
      'More reactant particles have energy ≥ activation energy; more successful collisions per unit time; rate increases. (1)',
    keyConcepts: ['Catalysis', 'Activation energy', 'Collision theory'],
    keywords: ['catalyst', 'activation energy', 'alternative pathway', 'collision', 'rate'],
    feedbackHit: 'Correctly explained lower activation energy leading to more successful collisions.',
    feedbackMiss: 'Catalyst → lower activation energy → more particles can react → increased rate. It is NOT consumed.',
  },

  // ─── Q3: Noble gases / krypton ───────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 1,
  },

  q3_b: {
    marks: 2,
    exemplar: 'Nitrogen: Group 15. Krypton: Period 4.',
    keyConcepts: ['Periodic Table', 'Groups and Periods'],
    keywords: ['Group 15', 'Period 4', 'nitrogen', 'krypton'],
    feedbackHit: 'Correct: nitrogen Group 15, krypton Period 4.',
    feedbackMiss: 'Nitrogen has 5 outer electrons → Group 15. Krypton has 4 electron shells → Period 4.',
    blankAnswers: ['15', '4'],
  },

  q3_c: {
    marks: 3,
    exemplar:
      'Krypton electron configuration: 2.8.18.8. (1)\n' +
      'Outer shell is full / has 8 electrons. (1)\n' +
      'No tendency to gain, lose, or share electrons; does not form bonds with other atoms. (1)',
    keyConcepts: ['Noble gases', 'Electronic configuration', 'Chemical reactivity'],
    keywords: ['2.8.18.8', 'full outer shell', 'stable', 'no bonding', 'inert'],
    feedbackHit: 'Correctly used 2.8.18.8 configuration to explain krypton\'s inertness.',
    feedbackMiss: 'Krypton = 2.8.18.8; full outer shell (8e⁻) → no tendency to gain/lose/share electrons → no compound formation.',
  },

  q3_d: {
    marks: 2,
    exemplar:
      'Oxygen in air reacts with hot metal inside laser tube. (1)\n' +
      'Exothermic reaction causes rapid gas expansion / pressure increase; tube cannot withstand pressure and ruptures. (1)',
    keyConcepts: ['Chemical reactions', 'Oxidation', 'Gas pressure'],
    keywords: ['oxygen', 'oxidation', 'exothermic', 'expansion', 'pressure', 'rupture'],
    feedbackHit: 'Correctly identified oxygen reacting with hot metal causing pressure build-up and rupture.',
    feedbackMiss: 'O₂ in air reacts with hot filament/metal → exothermic → rapid gas expansion → pressure increase → rupture.',
  },

  // ─── Q4: Fluoride / dental fillings / Crit B ─────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'What is the effect of the type of dental filling material on the concentration of F⁻ ions after 10 minutes?',
    keyConcepts: ['Research question', 'Independent variable', 'Dependent variable'],
    keywords: ['filling material', 'F⁻ concentration', 'conductivity', 'research question'],
    feedbackHit: 'Research question includes both IV and DV.',
    feedbackMiss: 'A research question must include what you change (IV = filling material) and what you measure (DV = F⁻ concentration).',
  },

  q4_b: {
    marks: 4,
    exemplar:
      'IV: type of filling material\n' +
      'DV: conductivity / concentration of F⁻ ions\n' +
      'CV1: time (10 minutes)\n' +
      'CV2: initial volume of F⁻ solution',
    keyConcepts: ['Variables', 'Scientific investigation'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'filling material', 'conductivity'],
    feedbackHit: 'All four variables correctly identified.',
    feedbackMiss: 'IV = what you change (filling material); DV = what you measure (F⁻ conductivity); CVs = what you keep same (time, volume).',
    blankAnswers: [
      'Type of filling material',
      'Conductivity / concentration of F⁻ ions',
      'Time (10 minutes)',
      'Initial volume of F⁻ ion solution',
    ],
  },

  q4_c: {
    marks: 2,
    exemplar:
      'Method is less valid because without a "before" reading the student cannot determine the change in F⁻ concentration. (1)\n' +
      'Without a baseline, it is impossible to know how much F⁻ was absorbed or released by the filling material. (1)',
    keyConcepts: ['Validity', 'Baseline measurement', 'Scientific method'],
    keywords: ['validity', 'baseline', 'initial reading', 'before', 'comparison'],
    feedbackHit: 'Correctly identified the missing baseline as the reason for reduced validity.',
    feedbackMiss: 'Without measuring conductivity BEFORE the filling material, you cannot calculate the CHANGE in F⁻ concentration.',
  },

  q4_d: {
    marks: 3,
    exemplar:
      'If fluoride mouthwash is used after brushing with toothpaste,\n' +
      'then the concentration of F⁻ ions in the mouth will be higher than with toothpaste alone,\n' +
      'because mouthwash delivers an additional dose of fluoride ions beyond what toothpaste alone provides.',
    keyConcepts: ['Hypothesis', 'Fluoride', 'Scientific prediction'],
    keywords: ['If', 'Then', 'Because', 'fluoride', 'mouthwash', 'concentration'],
    feedbackHit: 'Hypothesis correctly formatted as If/Then/Because with a mechanistic explanation.',
    feedbackMiss: 'Use If/Then/Because structure. Explain WHY mouthwash would increase F⁻ (additional source of fluoride ions).',
  },

  q4_e: {
    marks: 2,
    exemplar:
      'Identify: the data point that is furthest from the other trials for the same brand (anomalous result). (1)\n' +
      'Reason: possible experimental error such as contamination of the F⁻ solution, air bubble in the conductivity probe, or temperature variation during trial. (1)',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['anomalous', 'outlier', 'contamination', 'error', 'conductivity probe'],
    feedbackHit: 'Anomalous result identified and a plausible experimental reason given.',
    feedbackMiss: 'Look for the value that does not fit the pattern for that brand. Suggest a measurement/experimental error as the cause.',
  },

  q4_f: {
    marks: 2,
    exemplar: 'Sum valid Brand D trials ÷ number of valid trials; express to 3 significant figures; include units (mg dm⁻³ or µS cm⁻¹).',
    keyConcepts: ['Average', 'Significant figures', 'Units'],
    keywords: ['average', 'mean', 'Brand D', 'significant figures', 'mg dm⁻³'],
    feedbackHit: 'Average calculated correctly with appropriate significant figures and units.',
    feedbackMiss: 'Add valid Brand D values, divide by number of trials (exclude anomaly if identified), give units.',
  },

  q4_g: {
    marks: 1,
    exemplar: 'The brand with the highest conductivity reading has the highest F⁻ concentration and therefore provides the best fluoride protection.',
    keyConcepts: ['Data interpretation', 'Fluoride protection'],
    keywords: ['highest conductivity', 'most F⁻', 'best protection'],
    feedbackHit: 'Correctly linked highest conductivity to best fluoride delivery.',
    feedbackMiss: 'Higher conductivity = more F⁻ ions in solution = more fluoride available to protect teeth.',
  },

  q4_h: {
    marks: 1,
    exemplar: 'Children have more teeth / larger teeth as they grow, so greater surface area to protect. Also, higher body mass allows proportionally more fluoride within safe limits.',
    keyConcepts: ['Tooth development', 'Fluoride dosage'],
    keywords: ['more teeth', 'surface area', 'body mass', 'fluoride dose'],
    feedbackHit: 'Correctly suggested more/larger teeth or higher body mass.',
    feedbackMiss: 'Think about why older children might need more fluoride: more teeth, larger teeth, greater body mass.',
  },

  // ─── Q5: Acid rain / building materials / Crit B design ─────────────────
  q5_a: {
    type: 'mcq',
    correct: 0,
  },

  q5_b: {
    marks: 18,
    exemplar:
      '**0 marks**: No relevant information.\n\n' +
      '**1–2 marks**: Identifies some variables or mentions measuring mass change. Little or no method detail.\n\n' +
      '**3–6 marks**: States IV (type of building material) and DV (mass lost / gas produced). Lists some equipment. Method is incomplete; safety mention vague.\n\n' +
      '**7–10 marks**: States IV, DV, and two CVs. Equipment list largely complete. Method describes the procedure step-by-step with repeats. Data table planned. Safety briefly addressed.\n\n' +
      '**11–14 marks**: Clear variables. Full equipment list. Detailed stepwise method (measure/record initial mass; add to 50 cm³ of 1 mol dm⁻³ HCl; record mass/gas volume at intervals; repeat 3×). Data table with columns for material, replicate, initial mass, final mass, mass lost. Safety: HCl is corrosive — gloves, goggles, fume cupboard if needed.\n\n' +
      '**15–18 marks**: As above plus: standardised sample surface area (10 × 10 cm); use of a gas syringe to measure CO₂ volume as alternative DV; rate calculated (mass lost / time or initial rate from graph); discussion of why mass change or gas volume is better; explicit control of temperature; comparative graph planned; justification of choice of acid concentration; reliability improved by repeats.',
    keyConcepts: ['Experimental design', 'Variables', 'Safety', 'Data collection'],
    keywords: ['IV', 'DV', 'CV', 'mass lost', 'equipment', 'method', 'safety', 'corrosive', 'repeats'],
    feedbackHit: 'Full Crit B design with variables, equipment, stepwise method, data table, and safety.',
    feedbackMiss: 'Crit B design must include: IV/DV/2 CVs, equipment list, step-by-step method, data to collect, and safety precautions.',
  },

  q5_c: {
    marks: 1,
    exemplar: 'Temperature of the acid / UV irradiance / frequency of acid rain events / concentration of acid.',
    keyConcepts: ['Variables', 'Climate factors'],
    keywords: ['temperature', 'UV', 'concentration', 'climate'],
    feedbackHit: 'Suggested a valid climate-linked independent variable.',
    feedbackMiss: 'Think of climate factors that affect corrosion: temperature, UV, acid concentration, rainfall frequency.',
  },

  // ─── Q6: Electroplated pans / NaCl corrosion data / Crit C ───────────────
  q6_a: {
    marks: 6,
    exemplar:
      'Graph: x-axis "Concentration / mol dm⁻³" (0 to 0.8); y-axis "Average mass lost / mg" (0 to 90).\n' +
      'Points: (0.0, 8), (0.1, 14), (0.3, 36), (0.5, 51), (0.8, 75).\n' +
      'Smooth line of best fit through points.\n' +
      'Both axes labelled with units. Even scale. Points plotted accurately.',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Axes'],
    keywords: ['x-axis', 'y-axis', 'line of best fit', 'concentration', 'mass lost', 'units'],
    feedbackHit: 'Graph correctly drawn with labelled axes, accurate points, and line of best fit.',
    feedbackMiss: 'Label both axes with units. Plot all 5 points. Draw a smooth line of best fit (not dot-to-dot).',
  },

  q6_b: {
    marks: 3,
    exemplar:
      'As NaCl concentration increases, the average mass lost increases (positive correlation). (1)\n' +
      'The relationship appears linear / directly proportional. (1)\n' +
      'The 0.00 mol dm⁻³ trial is a control — shows the mass lost due to factors other than NaCl (baseline corrosion). (1)',
    keyConcepts: ['Trend description', 'Correlation', 'Control experiment'],
    keywords: ['increases', 'positive correlation', 'control', 'baseline', '0.00'],
    feedbackHit: 'Trend described and control correctly identified.',
    feedbackMiss: 'State the trend (more NaCl → more mass lost). The 0.0 trial is the control/baseline.',
  },

  q6_c: {
    marks: 3,
    exemplar:
      'The hypothesis is invalid. (1)\n' +
      'The data shows that as NaCl concentration increases, MORE mass is lost, not less. (1)\n' +
      'This contradicts the hypothesis that higher NaCl concentration prevents corrosion. (1)',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation'],
    keywords: ['invalid', 'contradicts', 'more mass lost', 'increases', 'corrosion'],
    feedbackHit: 'Correctly evaluated hypothesis as invalid and referenced the data.',
    feedbackMiss: 'Data shows MORE mass lost at higher NaCl → hypothesis is invalid (the opposite of what it predicted).',
  },

  q6_d: {
    marks: 1,
    exemplar: 'Nails provide a uniform/standardised shape, size, and surface area, making it easier to control variables and compare mass lost accurately.',
    keyConcepts: ['Fair test', 'Standardisation'],
    keywords: ['uniform', 'standardised', 'shape', 'size', 'surface area', 'control'],
    feedbackHit: 'Correctly identified standardisation/uniform shape as reason for using nails.',
    feedbackMiss: 'Nails are used because they are uniform in shape and size — easier to standardise the experiment.',
  },

  // ─── Q7: Nuclear fission / transport / Crit D ────────────────────────────
  q7_a: {
    marks: 1,
    exemplar:
      'Solar produces no radioactive/hazardous waste; nuclear produces long-lived radioactive waste.\n' +
      'OR: Solar energy is effectively inexhaustible; nuclear fuel (uranium) will eventually run out.\n' +
      'OR: Solar has negligible fuel cost; nuclear has high fuel extraction and processing costs.',
    keyConcepts: ['Renewable energy', 'Nuclear energy', 'Waste comparison'],
    keywords: ['radioactive waste', 'inexhaustible', 'uranium', 'fuel cost', 'solar'],
    feedbackHit: 'Valid additional difference beyond renewable/non-renewable.',
    feedbackMiss: 'Think beyond renewable/non-renewable: waste produced, fuel availability, running costs.',
  },

  q7_b: {
    marks: 3,
    exemplar:
      'A neutron strikes a uranium-235 nucleus, causing it to become unstable. (1)\n' +
      'The nucleus splits into two smaller (daughter) nuclei, releasing energy and 2–3 neutrons. (1)\n' +
      'These neutrons strike further uranium nuclei, causing more fission events — a self-sustaining chain reaction. (1)',
    keyConcepts: ['Nuclear fission', 'Chain reaction', 'Neutrons'],
    keywords: ['neutron', 'unstable', 'fission', 'daughter nuclei', 'energy', 'chain reaction'],
    feedbackHit: 'Chain reaction correctly described in sequence: neutron → unstable → splits + neutrons → further fission.',
    feedbackMiss: 'Steps: neutron hits U-235 → unstable → splits + 2-3 neutrons + energy → neutrons hit more U-235 → chain reaction.',
  },

  q7_c: {
    marks: 6,
    exemplar:
      '**Risks**: radiation leak if container is damaged in accident; contamination of environment/people. (1)\n\n' +
      '**Road**: risk of traffic collision; precautions include armoured containers, police escort, restricted routes. (1)\n' +
      '**Train**: low risk of derailment; precautions include dedicated carriages, locked containers, rail inspections. (1)\n' +
      '**River barge**: risk of sinking; precautions include watertight containers, shallow routes, emergency response vessels. (1)\n' +
      '**Air**: catastrophic if crash; risk to large population below; NOT recommended. (1)\n\n' +
      '**Conclusion**: Train is safest — low derailment risk, controlled routes, purpose-built shielded containers, away from populated areas. (1)',
    keyConcepts: ['Risk assessment', 'Transport methods', 'Radioactive waste'],
    keywords: ['radiation', 'risk', 'road', 'train', 'river', 'air', 'precautions', 'conclusion', 'safest'],
    feedbackHit: 'Full discussion of risks and precautions per transport method with a justified conclusion.',
    feedbackMiss: 'For each transport method: state the risk AND the precaution. Conclude with the safest method and justify why.',
  },

  // ─── Q8: Radioactive waste disposal / Crit D essay ───────────────────────
  q8_: {
    marks: 13,
    exemplar:
      '**0 marks**: No relevant information.\n\n' +
      '**1–2 marks**: Identifies one method; vague reference to effects. No evaluation.\n\n' +
      '**3–5 marks**: Describes one method with some effect on living things or an economic point. Limited evaluation.\n\n' +
      '**6–8 marks**: Describes effects of chosen method on living things (e.g. ocean disposal: food chain contamination, bioaccumulation; or geological: no surface contamination). Economic impact mentioned. Partial evaluation.\n\n' +
      '**9–11 marks**: Thorough description of effects on living things with specific examples. Economic impact quantified or compared (cheap vs. costly). Evaluation states which is better with a reason.\n\n' +
      '**12–13 marks**: Ocean disposal: radiation enters marine food chain → bioaccumulation in fish → human health risk via consumption; international ban justified by long-term risk; low short-term cost but enormous potential long-term cost. Geological: high construction/engineering cost; isolates waste from biosphere for 100,000+ years; no ecosystem contamination if engineered correctly. Justified conclusion: geological disposal is better despite cost because it protects living things reliably; cost is a one-time investment against irreversible environmental damage. Conclusion consistent with evidence presented.',
    keyConcepts: ['Radioactive waste', 'Environmental impact', 'Economic analysis', 'Ethical evaluation'],
    keywords: ['ocean disposal', 'geological disposal', 'food chain', 'bioaccumulation', 'cost', 'living things', 'justified'],
    feedbackHit: 'Thorough Crit D essay: living things, economic impact, justified conclusion.',
    feedbackMiss: 'Must cover: (1) effects on living things, (2) economic impact, (3) justified conclusion. Use evidence from the stem.',
  },
}

export type { MSRecord }
