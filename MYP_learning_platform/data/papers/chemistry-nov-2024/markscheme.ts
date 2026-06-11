import 'server-only'

// NOTE: No official mark scheme exists for this paper. All answers below are
// best-effort derivations from chemistry knowledge and paper content.
// Data-reading answers (Q4e, Q4f) are estimated from paper images.

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
export type { MSRecord }

export const MS: MSRecord = {
  // ── Q1: Alchemy / distillation / ethanol / sulfuric acid ──────────────────
  q1_a: { type: 'mcq', correct: 1 },   // Transition metals (index 1 in widgetOptions)
  q1_b: { type: 'mcq', correct: 1 },   // Different boiling points (index 1)
  q1_c: {
    marks: 4,
    exemplar: 'X to Y: The liquid is heated; the particles gain kinetic energy; the particles at the surface escape the liquid and become a gas (evaporation/vaporisation).\nY to Z: The gas enters a cooler region; particles lose kinetic energy; particles slow down and come closer together; the gas condenses back to a liquid (condensation).',
    keyConcepts: ['States of matter', 'Particle theory', 'Evaporation and condensation'],
    keywords: ['particles gain energy evaporate', 'particles lose energy condense', 'liquid to gas', 'gas to liquid', 'distillation state changes'],
    feedbackHit: 'Correct — particles gain energy at X→Y (evaporation); lose energy at Y→Z (condensation).',
    feedbackMiss: '4 marks: X→Y: (1) particles gain energy; (2) liquid becomes gas (evaporation). Y→Z: (3) particles lose energy; (4) gas becomes liquid (condensation).',
  },
  q1_d: { type: 'mcq', correct: 1 },   // B = ethanol (C₂H₅OH structure, index 1)
  q1_e: {
    marks: 2,
    exemplar: 'Mr(FeSO₄) = 56 + 32 + 4(16) = 56 + 32 + 64 = 152 g mol⁻¹',
    keyConcepts: ['Relative formula mass', 'Molar mass calculation'],
    keywords: ['FeSO4 molar mass', '152', 'Fe=56 S=32 O=16', 'formula mass'],
    feedbackHit: 'Correct — Mr(FeSO₄) = 152 g mol⁻¹.',
    feedbackMiss: 'Mr = Fe + S + 4×O = 56 + 32 + 64 = 152 g mol⁻¹. Award 1 mark for method (adding atomic masses), 1 for correct answer 152 with unit.',
    blankAnswers: ['152'],
  },

  // ── Q2: CO₂ / champagne / methanol synthesis ──────────────────────────────
  q2_a: { type: 'mcq', correct: 1 },   // Covalent bonding (index 1)
  q2_b: {
    marks: 3,
    exemplar: 'CO₂ is dissolved in champagne under high pressure. When the bottle is opened, the pressure above the liquid drops. The CO₂ comes out of solution as gas bubbles (dissolved CO₂ → CO₂ gas). The rapidly expanding gas exerts a force on the cork and pushes it out of the bottle.',
    keyConcepts: ['Gas solubility', 'Pressure and equilibrium', 'CO₂ in solution'],
    keywords: ['CO₂ dissolved under pressure', 'opening reduces pressure', 'CO₂ comes out of solution', 'gas expands pushes cork'],
    feedbackHit: 'Correct — CO₂ dissolved under pressure; opening drops pressure; CO₂ escapes as gas; expands and pushes cork.',
    feedbackMiss: '3 marks: (1) CO₂ dissolved under high pressure in bottle; (2) opening bottle → pressure drops → CO₂ escapes from solution; (3) CO₂ gas expands rapidly and pushes cork out.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Mr(CO₂) = 44, Mr(CH₃OH) = 32.\nn(CO₂) = 446 ÷ 44 = 10.14 mol.\nMole ratio CO₂ : CH₃OH = 1 : 1, so n(CH₃OH) = 10.14 mol.\nm(CH₃OH) = 10.14 × 32 = 324.4 g ≈ 324 g = 3.24 × 10² g.',
    keyConcepts: ['Stoichiometry', 'Moles calculation', 'Standard form'],
    keywords: ['n=m/Mr', '446/44', '10.14 mol', '10.14×32=324', '3.24×10² g', 'standard form'],
    feedbackHit: 'Correct — n(CO₂)=10.14mol; n(CH₃OH)=10.14mol; m=324g=3.24×10² g.',
    feedbackMiss: '4 marks: (1) Mr(CO₂)=44 used; (2) n(CO₂)=10.14 mol; (3) 1:1 mole ratio applied; (4) m=324g in standard form 3.24×10².',
    blankAnswers: ['3.24 × 10²'],
  },
  q2_d: {
    marks: 3,
    exemplar: 'A catalyst provides an alternative reaction pathway with a lower activation energy. More particles (reactant molecules) have enough energy to overcome the lower activation energy. Therefore, more successful collisions occur per second and the rate of methanol production increases.',
    keyConcepts: ['Catalysis', 'Activation energy', 'Reaction rate'],
    keywords: ['alternative pathway lower activation energy', 'more particles sufficient energy', 'more successful collisions', 'rate increases'],
    feedbackHit: 'Correct — lower activation energy → more particles with sufficient energy → more collisions → faster rate.',
    feedbackMiss: '3 marks: (1) provides alternative pathway / lower activation energy; (2) more particles have sufficient energy; (3) more successful collisions → rate increases.',
  },

  // ── Q3: Noble gases / food packaging / lightbulbs ─────────────────────────
  q3_a: { type: 'mcq', correct: 1 },   // Oxygen (index 1)
  q3_b: {
    marks: 2,
    exemplar: 'Nitrogen: Group 15 (or Group V in old notation). Argon: Period 3.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['nitrogen group 15', 'argon period 3', 'group period'],
    feedbackHit: 'Correct — nitrogen Group 15, argon Period 3.',
    feedbackMiss: 'Nitrogen (N): 7 electrons, config 2.5 → Group 15 (or V). Argon (Ar): 18 electrons, config 2.8.8 → Period 3.',
    blankAnswers: ['15', '3'],
  },
  q3_c: {
    marks: 3,
    exemplar: 'Argon has the electron configuration 2.8.8. The outer shell is FULL with 8 electrons. Full outer shells are chemically stable/inert — there is no tendency for argon to gain, lose, or share electrons. As chemical bonding requires the transfer or sharing of electrons, argon cannot form bonds and therefore does not form compounds.',
    keyConcepts: ['Noble gas stability', 'Electron configuration', 'Chemical bonding'],
    keywords: ['argon 2.8.8 full outer shell', 'stable configuration', 'no tendency to share electrons', 'cannot form bonds'],
    feedbackHit: 'Correct — full outer shell (2.8.8) → stable → no tendency to react → no compounds formed.',
    feedbackMiss: '3 marks: (1) argon has 8 electrons in outer shell (2.8.8); (2) full outer shell is stable; (3) no tendency to gain/lose/share electrons so no compounds formed.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'The tungsten filament gets very hot when the bulb is on. Argon is unreactive, so it does not react with the filament. If argon is replaced by air, oxygen in the air reacts with the hot filament in an exothermic reaction. The rapid production/expansion of hot gases causes the bulb to explode.',
    keyConcepts: ['Reactivity of noble gases', 'Oxidation reactions'],
    keywords: ['oxygen reacts hot filament', 'exothermic reaction', 'rapid gas expansion', 'explosion', 'argon inert does not react'],
    feedbackHit: 'Correct — oxygen in air reacts with hot filament; exothermic; rapid gas expansion → explosion.',
    feedbackMiss: '2 marks: (1) oxygen in air reacts with hot tungsten/metal filament; (2) rapid expansion of gases from exothermic reaction causes explosion.',
  },

  // ── Q4: Fluoride / dental fillings / mouthwash investigation ──────────────
  q4_a: {
    marks: 1,
    exemplar: '"What is the effect of the type of filling material on the concentration of F⁻ ions after 10 minutes?"',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['effect of filling material', 'concentration F⁻ ions', 'research question'],
    feedbackHit: 'Correct — research question states IV (type of filling) and measurable DV (F⁻ concentration).',
    feedbackMiss: 'Must state IV (type of filling material) and a measurable DV (conductivity/F⁻ concentration). E.g. "What is the effect of filling material on the concentration of F⁻ ions after 10 minutes?"',
  },
  q4_b: {
    marks: 4,
    exemplar: 'IV = Type of filling material.\nDV = Conductivity / concentration of F⁻ ions (mg dm⁻³).\nCV1 = Time (10 minutes).\nCV2 = Initial concentration of F⁻ ion solution (or volume of solution).',
    keyConcepts: ['Variables', 'Scientific investigation', 'Criterion B'],
    keywords: ['IV type filling material', 'DV conductivity F⁻ concentration', 'CV time 10 min', 'CV initial concentration volume'],
    feedbackHit: 'Correct — IV=type of filling; DV=conductivity/F⁻; two valid CVs.',
    feedbackMiss: 'IV = type of filling material. DV = conductivity / F⁻ concentration. CV = time AND volume/concentration of F⁻ solution.',
    blankAnswers: ['Type of filling material', 'Conductivity / concentration of F⁻ ions', 'Time (10 minutes)', 'Volume of F⁻ ion solution'],
  },
  q4_c: {
    marks: 2,
    exemplar: 'The second student\'s method is less valid. The first student measures conductivity BEFORE and AFTER to determine the change. The second setup lacks a "Before" reading, so it cannot measure how the conductivity (F⁻ concentration) changes. Without a baseline, no conclusion about absorption of F⁻ ions can be drawn.',
    keyConcepts: ['Experimental validity', 'Control measurements'],
    keywords: ['no before reading', 'cannot measure change', 'less valid', 'no baseline'],
    feedbackHit: 'Correct — second method less valid; cannot measure change (no before reading).',
    feedbackMiss: '2 marks: (1) second method less valid; (2) because it lacks a before/initial reading so cannot determine change in F⁻ concentration.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'If mouthwash is used after toothpaste,\nthen the concentration of F⁻ ions in the mouth will be higher than using toothpaste alone,\nbecause mouthwash provides additional F⁻ ions beyond those delivered by toothpaste, increasing total fluoride available to protect teeth.',
    keyConcepts: ['Hypothesis', 'If–Then–Because', 'Fluoride protection'],
    keywords: ['if mouthwash used after toothpaste', 'then higher F⁻ concentration', 'because additional fluoride'],
    feedbackHit: 'Correct If/Then/Because with logical reasoning about fluoride.',
    feedbackMiss: 'IF mouthwash used after toothpaste → THEN higher F⁻ concentration in mouth → BECAUSE mouthwash provides additional fluoride beyond toothpaste.',
  },
  q4_e: {
    marks: 2,
    exemplar: 'NOTE: Exact answer depends on paper data table. Identify the trial value that is furthest from the other two trials for the same brand (anomalous = outlier). Suggest experimental reason: e.g. contamination of the solution, incorrect reading of conductivity meter, different temperature of the solution during that trial, or accidental dilution of the sample.',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['anomalous outlier', 'contamination', 'measurement error', 'temperature variation'],
    feedbackHit: 'Correct — anomalous trial identified from table; valid experimental reason given.',
    feedbackMiss: '2 marks: (1) identify the trial furthest from the other two for the same brand; (2) suggest valid experimental reason (contamination, measurement error, temperature change, etc.).',
  },
  q4_f: {
    marks: 2,
    exemplar: 'NOTE: Exact answer depends on paper data table. Method: sum of 3 trial values ÷ 3. Exclude anomalous value if identified and average remaining two values. Give answer to 3 significant figures with unit (mg dm⁻³).',
    keyConcepts: ['Mean calculation', 'Significant figures'],
    keywords: ['average conductivity Brand D', 'sum divide 3', 'mg dm⁻³', '3 significant figures'],
    feedbackHit: 'Correct — calculated mean from 3 trials; appropriate sig figs; mg dm⁻³ unit.',
    feedbackMiss: '2 marks: (1) correct calculation method (sum/3 or sum remaining/2 excluding anomaly); (2) appropriate sig figs AND unit included.',
  },
  q4_g: {
    marks: 1,
    exemplar: 'The brand with the HIGHEST conductivity after 10 minutes is the best choice because it contains the most F⁻ ions, providing the greatest fluoride protection to teeth and filling materials.',
    keyConcepts: ['Data interpretation', 'Fluoride protection'],
    keywords: ['highest conductivity most F⁻', 'best protection', 'justify best mouthwash'],
    feedbackHit: 'Correct — brand with highest conductivity justified as best choice due to most F⁻ ions.',
    feedbackMiss: 'Identify brand with highest conductivity after 10 min and state it provides most F⁻ = best protection.',
  },
  q4_h: {
    marks: 1,
    exemplar: 'As children grow, they develop more teeth / adult teeth are larger with greater surface area. More toothpaste is needed to protect this larger total surface area. Alternatively: higher body mass means 5 mg kg⁻¹ limit is proportionally higher.',
    keyConcepts: ['Fluoride dosage', 'Tooth development'],
    keywords: ['more teeth as grow', 'larger teeth more surface area', 'proportional to body mass'],
    feedbackHit: 'Correct — more/larger teeth (greater surface area) or increased body mass requires more fluoride.',
    feedbackMiss: 'As children grow: more teeth / bigger teeth / greater surface area → more toothpaste needed to protect all teeth. OR higher body mass means proportionally more F⁻ allowed within safe limit.',
  },

  // ── Q5: Acid rain / roofing materials / Crit B design ────────────────────
  q5_a: { type: 'mcq', correct: 0 },   // Change in colour (index 0)
  q5_b: {
    marks: 18,
    exemplar: 'Crit B design rubric:\n\nBand 4 criteria:\n• IV = type of roofing material (asphalt/clay/rubber/steel/slate) STATED\n• DV = rate of reaction / mass lost / volume of gas produced / time to react STATED AND measured\n• 2 CVs: volume of HCl (e.g. 50 cm³) AND temperature of HCl (e.g. 20°C) STATED\n• Equipment: balance (±0.01g), measuring cylinder (50 cm³), beaker, 1 mol dm⁻³ HCl, gas syringe or electronic balance, stopwatch\n• Method: weigh 10×10 cm sample of each material, place in 50 cm³ of 1 mol dm⁻³ HCl at 20°C for 10 minutes, measure mass lost OR collect gas produced per minute for 3+ repeats, calculate mean for each material\n• Data collection: record initial and final mass (for mass loss) OR volume of gas at set time intervals; repeat ≥3 times per material\n• Safety: HCl is corrosive — wear gloves, goggles and lab coat; work in a well-ventilated area; avoid skin contact\n\nExample method: Cut each material into equal 10×10 cm pieces. Weigh each sample using an electronic balance (record to ±0.01g). Place each sample separately into a 250 cm³ beaker containing 50 cm³ of 1 mol dm⁻³ HCl at 20°C. Leave for 10 minutes. Remove sample and re-weigh. Record mass lost = (initial − final mass). Repeat 3 times for each material. Calculate mean mass lost per material. Safety: HCl is corrosive — wear safety goggles, gloves and lab coat.',
    keyConcepts: ['Criterion B', 'Experimental design', 'Chemical reactions', 'Safety'],
    keywords: ['IV material type', 'DV mass lost rate reaction', 'CV volume HCl temperature', 'equipment balance beaker', '3 repeats mean', 'corrosive HCl safety'],
    feedbackHit: 'Strong Crit B — IV/DV/CVs stated, equipment listed, clear method, safety linked to corrosive HCl.',
    feedbackMiss: 'Bands: (1) IV or DV stated; (2) IV AND DV stated; (3) measurements collected for multiple materials + CVs; (4) full method with equipment + safety.',
  },
  q5_c: {
    marks: 1,
    exemplar: 'Temperature of the acid (to model warmer climates with more acidic rainwater) OR UV light intensity (to model sunnier vs. cooler climates) OR concentration of acid (to model varying levels of pollution in different regions).',
    keyConcepts: ['Variables', 'Climate factors'],
    keywords: ['temperature of acid', 'UV light', 'acid concentration', 'climate IV'],
    feedbackHit: 'Correct — valid IV linked to climate (temperature/UV/acid concentration).',
    feedbackMiss: 'Suggest IV linked to climate: e.g. temperature of HCl/acid, UV intensity, acid concentration, rainfall volume. Must be a VARIABLE (not a factor like "humidity" unless measurable).',
  },

  // ── Q6: Electroplated cutlery / NaCl corrosion ────────────────────────────
  q6_a: {
    marks: 6,
    exemplar: 'Scatter graph: x-axis = NaCl concentration / mol dm⁻³ (0–0.8); y-axis = Average mass lost / mg (0–90); plot 5 points: (0.0,10), (0.1,18), (0.3,43), (0.5,57), (0.8,86); draw smooth line of best fit; both axes labelled with quantity and unit; appropriate scale used (majority of grid).',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Data presentation'],
    keywords: ['x NaCl concentration', 'y average mass lost', '5 data points plotted', 'line of best fit', 'axes labelled units'],
    feedbackHit: 'Correct — x-axis NaCl concentration, y-axis mass lost, 5 points plotted, line of best fit, axes labelled with units.',
    feedbackMiss: '6 marks: (1) x-axis label + unit; (2) y-axis label + unit; (3) appropriate scale (majority of grid); (4) 3+ points correct; (5) all 5 points correct; (6) smooth line/curve of best fit.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Trend: As the concentration of NaCl increases, the average mass lost by the nail increases (positive/directly proportional relationship). At higher NaCl concentrations, more mass is lost due to increased corrosion.\n\nPurpose of 0.00 mol dm⁻³ trial: It acts as a control / baseline / reference. It shows how much mass is lost WITHOUT sodium chloride, allowing comparison to determine how much corrosion is caused specifically by the NaCl (rather than by other factors such as water alone).',
    keyConcepts: ['Trend analysis', 'Control experiment'],
    keywords: ['as NaCl increases mass lost increases', 'positive relationship', '0.00 mol dm⁻³ control baseline', 'comparison without NaCl'],
    feedbackHit: 'Correct — positive trend stated + 0.00 mol dm⁻³ = control/baseline/comparison.',
    feedbackMiss: '3 marks: (1) as NaCl concentration increases, mass lost increases; (2) positive/direct relationship; (3) 0.00 mol dm⁻³ = control (to show corrosion without NaCl / as baseline).',
  },
  q6_c: {
    marks: 3,
    exemplar: 'The hypothesis is INVALID. The data shows that as NaCl concentration increases, MORE mass is lost — not less. This is the OPPOSITE of what the hypothesis predicted. The reasoning in the hypothesis is also incorrect: more NaCl particles making more collisions with nail particles does not prevent corrosion; in fact it accelerates it by providing more ions that facilitate the electrochemical corrosion reaction.',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation', 'Validity'],
    keywords: ['hypothesis invalid', 'data shows more mass lost at higher concentration', 'opposite prediction', 'reasoning incorrect'],
    feedbackHit: 'Correct — hypothesis invalid; data shows more mass lost as concentration increases (opposite to prediction); reasoning about collisions is incorrect.',
    feedbackMiss: '3 marks: (1) hypothesis is invalid/not supported; (2) data shows INCREASE in mass lost as concentration increases (opposite to hypothesis); (3) the hypothesis reasoning (collisions between NaCl) is incorrect.',
  },
  q6_d: {
    marks: 1,
    exemplar: 'Nails are standardised (same shape and size), making it easier to compare results. Nails are made of iron/steel — the same base metal as cutlery — so they model the same corrosion reaction. Nails are cheaper, easier to handle, and easier to weigh accurately than real cutlery.',
    keyConcepts: ['Experimental design', 'Model validity'],
    keywords: ['standardised size shape', 'same metal iron steel', 'easier weigh handle', 'cheaper model'],
    feedbackHit: 'Correct — nails are standardised/same metal/easier to handle.',
    feedbackMiss: 'Any valid reason: (1) standardised size/shape; (2) same metal (iron/steel); (3) easier to weigh/handle; (4) cheaper.',
  },

  // ── Q7: Nuclear fission / radioactive waste transport ─────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Renewable sources (e.g. solar, wind) do not produce carbon dioxide / greenhouse gases when generating electricity. Non-renewable sources (fossil fuels) release CO₂ and other pollutants when burned. Accept: renewable sources are inexhaustible; non-renewable sources will run out. Accept: non-renewable produce more atmospheric pollution.',
    keyConcepts: ['Renewable vs non-renewable energy', 'Environmental impact'],
    keywords: ['CO₂ greenhouse gases fossil fuels', 'renewable do not produce CO₂', 'non-renewable pollutants', 'will run out'],
    feedbackHit: 'Correct — one valid difference beyond renewable/non-renewable (CO₂/pollution/inexhaustible/running out).',
    feedbackMiss: 'Give ONE difference beyond the renewable/non-renewable label: e.g. fossil fuels produce CO₂, renewable do not; or fossil fuels will run out but solar/wind will not.',
  },
  q7_b: {
    marks: 3,
    exemplar: 'A neutron collides with a uranium-235 nucleus. The nucleus becomes unstable and splits into two smaller atoms (barium and krypton). This releases a large amount of energy AND 2–3 additional neutrons. These neutrons go on to collide with other uranium-235 nuclei, causing them to split in turn. This creates a chain reaction that continues as long as sufficient fissile material is present.',
    keyConcepts: ['Nuclear fission', 'Chain reaction'],
    keywords: ['neutron hits nucleus unstable', 'splits into 2 smaller atoms', 'releases energy + more neutrons', 'chain reaction continues'],
    feedbackHit: 'Correct — neutron → unstable nucleus → splits releasing energy + more neutrons → chain reaction.',
    feedbackMiss: '3 marks: (1) neutron collides with nucleus → becomes unstable → splits; (2) releases energy + additional neutrons; (3) neutrons hit more nuclei → chain reaction.',
  },
  q7_c: {
    marks: 6,
    exemplar: 'Risks: Radioactive waste emits harmful radiation (alpha, beta, gamma) that can cause cancer, radiation sickness, and death. Accidents during transport (e.g. road crash, derailment, ship sinking) could cause leakage of radioactive material into the environment, contaminating water, soil, and air.\n\nPrecautions:\n• Road: use armoured, sealed containers; deploy police escort; choose remote routes; only travel at night to minimise public exposure.\n• Train: use purpose-built sealed containers; notify authorities along the route; have emergency response teams on standby.\n• River/ship: use double-hulled vessels; transport away from populated coastlines; have decontamination equipment on board.\n• Air: generally avoid — any crash would scatter radioactive material over a wide area; only for very small quantities with military-grade containers.\n\nConclusion: Trains are the safest method for large quantities of radioactive waste. Trains travel on fixed, controlled routes that can be pre-cleared; derailments are less common than road accidents; sealed containers can be purpose-built for the specific freight car dimensions. Rail also avoids the environmental risk of water contamination associated with river/sea transport.',
    keyConcepts: ['Criterion D', 'Radioactive waste', 'Risk assessment', 'Transport safety'],
    keywords: ['radiation risk cancer', 'sealed containers', 'precautions each method', 'trains safest controlled route', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — risks stated, precautions per method, justified conclusion (trains/road).',
    feedbackMiss: '(1) risk stated (radiation/leak); (2) precaution for ≥2 methods; (3) precautions for all methods; (4) conclusion with justification; (5-6) quality of evaluation with evidence.',
  },

  // ── Q8: Radioactive waste disposal Crit D essay ───────────────────────────
  q8_: {
    marks: 13,
    exemplar: 'Crit D evaluation rubric:\n\nEffects on living things (Band 4):\nSea dumping: radioactive waste in oceans enters food chains (bioaccumulation); fish and marine organisms absorb radiation; humans eating contaminated fish develop cancer; ocean currents spread contamination globally.\nUnderground storage: if sealed correctly, no direct impact on surface organisms; risk of groundwater contamination if containers corrode; deep geological formations designed to be stable for thousands of years.\n\nEconomic impact (Band 4):\nSea dumping: very cheap to implement (just transport to sea and sink); however, international ban means major financial penalties; long-term environmental cleanup costs are enormous.\nUnderground storage: very expensive to construct (deep mine/repository); requires ongoing monitoring and maintenance; but avoids catastrophic cleanup costs; creates engineering jobs.\n\nConclusion (Band 4): Underground storage is the better method. Although it is expensive, the long-term safety is far superior. Sea dumping was banned because of its catastrophic and irreversible effects on marine ecosystems and human health. The costs of building deep geological repositories are justified by the protection they offer to all living things for thousands of years. No radioactive waste should be placed where ocean currents can distribute it globally.',
    keyConcepts: ['Criterion D', 'Radioactive waste disposal', 'Environmental ethics', 'Economic evaluation'],
    keywords: ['sea dumping marine contamination food chain', 'underground storage safe long term', 'economic cost sea cheap underground expensive', 'international ban sea dumping', 'justified conclusion underground better'],
    feedbackHit: 'Strong Crit D — effects on living things (sea and underground), economic impact (both methods), justified conclusion.',
    feedbackMiss: 'Must include: (1) effect on living things for ONE method; (2) effect on living things for BOTH methods; (3) economic impact ONE method; (4) economic BOTH methods + justified conclusion.',
  },
}
