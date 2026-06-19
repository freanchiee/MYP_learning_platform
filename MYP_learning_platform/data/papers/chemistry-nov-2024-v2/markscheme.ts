import 'server-only'

// NOTE: Variant 2 of chemistry-nov-2024. Original content — every answer is
// recomputed for the new scenario. No official IB mark scheme is reproduced.

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
  // ── Q1: Solar-still desalination / butan-1-ol / magnesium chloride ─────────
  q1_a: { type: 'mcq', correct: 1 },   // Transition metals (index 1)
  q1_b: { type: 'mcq', correct: 1 },   // Different boiling points (index 1)
  q1_c: {
    marks: 4,
    exemplar: 'X to Y: The seawater is heated by the Sun; the particles gain kinetic energy; the particles at the surface escape the liquid and become a gas (evaporation/vaporisation).\nY to Z: The vapour meets the cool glass cover; the particles lose kinetic energy; they slow down and move closer together; the gas condenses back to a liquid (condensation).',
    keyConcepts: ['States of matter', 'Particle theory', 'Evaporation and condensation'],
    keywords: ['particles gain energy evaporate', 'particles lose energy condense', 'liquid to gas', 'gas to liquid', 'distillation state changes'],
    feedbackHit: 'Correct — particles gain energy at X→Y (evaporation); lose energy at Y→Z (condensation).',
    feedbackMiss: '4 marks: X→Y: (1) particles gain energy; (2) liquid becomes gas (evaporation). Y→Z: (3) particles lose energy; (4) gas becomes liquid (condensation).',
  },
  q1_d: { type: 'mcq', correct: 3 },   // D = butan-1-ol (CH₃CH₂CH₂CH₂OH, index 3)
  q1_e: {
    marks: 2,
    exemplar: 'Mr(MgCl₂) = 24 + 2(35.5) = 24 + 71 = 95 g mol⁻¹',
    keyConcepts: ['Relative formula mass', 'Molar mass calculation'],
    keywords: ['MgCl2 molar mass', '95', 'Mg=24 Cl=35.5', 'formula mass'],
    feedbackHit: 'Correct — Mr(MgCl₂) = 95 g mol⁻¹.',
    feedbackMiss: 'Mr = Mg + 2×Cl = 24 + 2(35.5) = 24 + 71 = 95 g mol⁻¹. Award 1 mark for method (adding atomic masses), 1 for correct answer 95 with unit.',
    blankAnswers: ['95'],
  },

  // ── Q2: N₂O cream charger / Haber process / catalyst ──────────────────────
  q2_a: { type: 'mcq', correct: 1 },   // Covalent bonding (index 1)
  q2_b: {
    marks: 3,
    exemplar: 'The N₂O gas is held in the charger compressed under high pressure. When the trigger opens the valve, the pressure drops suddenly. The compressed gas expands rapidly and comes out into the cream as bubbles (compressed gas → expanding gas). The expanding gas whips and sprays the cream out of the nozzle.',
    keyConcepts: ['Gas under pressure', 'Pressure and volume', 'Gas expansion'],
    keywords: ['gas compressed under pressure', 'valve opens pressure drops', 'gas expands rapidly', 'bubbles foam spray cream'],
    feedbackHit: 'Correct — gas compressed under pressure; valve opens; pressure drops; gas expands into bubbles and foams/sprays the cream.',
    feedbackMiss: '3 marks: (1) gas stored compressed under high pressure; (2) opening the valve drops the pressure so the gas expands/escapes; (3) gas forms bubbles and rapidly pushes/whips the cream out.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Mr(N₂) = 2(14) = 28; Mr(NH₃) = 14 + 3(1) = 17.\nn(N₂) = 280 ÷ 28 = 10.0 mol.\nMole ratio N₂ : NH₃ = 1 : 2, so n(NH₃) = 20.0 mol.\nm(NH₃) = 20.0 × 17 = 340 g = 3.40 × 10² g.',
    keyConcepts: ['Stoichiometry', 'Moles calculation', 'Standard form'],
    keywords: ['n=m/Mr', '280/28', '10.0 mol', '1:2 ratio', '20×17=340', '3.40×10² g', 'standard form'],
    feedbackHit: 'Correct — n(N₂)=10.0mol; 1:2 ratio → n(NH₃)=20.0mol; m=340g=3.40×10² g.',
    feedbackMiss: '4 marks: (1) Mr(N₂)=28 used; (2) n(N₂)=10.0 mol; (3) 1:2 mole ratio applied → n(NH₃)=20.0 mol; (4) m=340g in standard form 3.40×10².',
    blankAnswers: ['3.40 × 10²'],
  },
  q2_d: {
    marks: 3,
    exemplar: 'A catalyst (iron) provides an alternative reaction pathway with a lower activation energy. More reactant particles have enough energy to overcome the lower activation energy. Therefore more successful collisions occur per second and the rate of ammonia production increases.',
    keyConcepts: ['Catalysis', 'Activation energy', 'Reaction rate'],
    keywords: ['alternative pathway lower activation energy', 'more particles sufficient energy', 'more successful collisions', 'rate increases'],
    feedbackHit: 'Correct — lower activation energy → more particles with sufficient energy → more collisions → faster rate.',
    feedbackMiss: '3 marks: (1) provides alternative pathway / lower activation energy; (2) more particles have sufficient energy; (3) more successful collisions → rate increases.',
  },

  // ── Q3: Welding gases / krypton lamp / periodicity ────────────────────────
  q3_a: { type: 'mcq', correct: 1 },   // Oxygen (index 1)
  q3_b: {
    marks: 2,
    exemplar: 'Argon: Group 18 (accept Group 0). Neon: Period 2.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['argon group 18', 'neon period 2', 'group period noble gases'],
    feedbackHit: 'Correct — argon Group 18, neon Period 2.',
    feedbackMiss: 'Argon (Ar): 18 electrons, config 2.8.8 → Group 18 (or 0). Neon (Ne): 10 electrons, config 2.8 → Period 2.',
    blankAnswers: ['18', '2'],
  },
  q3_c: {
    marks: 3,
    exemplar: 'Neon has the electron configuration 2.8. The outer shell is FULL with 8 electrons. A full outer shell is chemically stable/inert — there is no tendency for neon to gain, lose or share electrons. As bonding requires the transfer or sharing of electrons, neon cannot form bonds and therefore does not form compounds.',
    keyConcepts: ['Noble gas stability', 'Electron configuration', 'Chemical bonding'],
    keywords: ['neon 2.8 full outer shell', 'stable configuration', 'no tendency to share electrons', 'cannot form bonds'],
    feedbackHit: 'Correct — full outer shell (2.8) → stable → no tendency to react → no compounds formed.',
    feedbackMiss: '3 marks: (1) neon has 8 electrons in its outer shell (2.8); (2) full outer shell is stable; (3) no tendency to gain/lose/share electrons so no compounds formed.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'The tungsten filament gets very hot when the lamp is on. Krypton is unreactive, so it does not react with the filament. If krypton is replaced by air, oxygen in the air reacts with the hot filament in an exothermic reaction. The rapid production/expansion of hot gas causes the lamp to shatter.',
    keyConcepts: ['Reactivity of noble gases', 'Oxidation reactions'],
    keywords: ['oxygen reacts hot filament', 'exothermic reaction', 'rapid gas expansion', 'lamp shatters', 'krypton inert does not react'],
    feedbackHit: 'Correct — oxygen in air reacts with the hot filament; exothermic; rapid gas expansion → lamp shatters.',
    feedbackMiss: '2 marks: (1) oxygen in air reacts with the hot tungsten filament; (2) rapid expansion of gas from the exothermic reaction shatters the lamp.',
  },

  // ── Q4: Aquarium nitrate removal investigation ────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: '"What is the effect of the type of filter medium on the conductivity (NO₃⁻ ion concentration) of aquarium water after 10 minutes?"',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['effect of filter medium', 'conductivity NO₃⁻ ions', 'research question'],
    feedbackHit: 'Correct — research question states IV (type of medium) and a measurable DV (conductivity/NO₃⁻ concentration).',
    feedbackMiss: 'Must state IV (type of filter medium) and a measurable DV (conductivity/NO₃⁻ concentration). E.g. "What is the effect of filter medium on the conductivity of aquarium water after 10 minutes?"',
  },
  q4_b: {
    marks: 4,
    exemplar: 'IV = Type of filter medium.\nDV = Conductivity / concentration of NO₃⁻ ions (mg dm⁻³).\nCV1 = Time (10 minutes).\nCV2 = Initial concentration (or volume) of the aquarium water sample.',
    keyConcepts: ['Variables', 'Scientific investigation', 'Criterion B'],
    keywords: ['IV type filter medium', 'DV conductivity NO₃⁻ concentration', 'CV time 10 min', 'CV initial concentration volume'],
    feedbackHit: 'Correct — IV=type of medium; DV=conductivity/NO₃⁻; two valid CVs.',
    feedbackMiss: 'IV = type of filter medium. DV = conductivity / NO₃⁻ concentration. CV = time AND volume/initial concentration of aquarium water.',
    blankAnswers: ['Type of filter medium', 'Conductivity / concentration of NO₃⁻ ions', 'Time (10 minutes)', 'Initial volume/concentration of aquarium water'],
  },
  q4_c: {
    marks: 2,
    exemplar: 'The second student\'s method is less valid. The first student measures conductivity BEFORE and AFTER to determine the change. The second setup lacks an initial reading, so it cannot measure how the conductivity (NO₃⁻ concentration) changes. Without a baseline, no conclusion about how much nitrate each medium removed can be drawn.',
    keyConcepts: ['Experimental validity', 'Control measurements'],
    keywords: ['no before reading', 'cannot measure change', 'less valid', 'no baseline'],
    feedbackHit: 'Correct — second method less valid; cannot measure change (no initial reading).',
    feedbackMiss: '2 marks: (1) second method less valid; (2) because it lacks an initial reading so cannot determine change in NO₃⁻ concentration.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'If live plants are added as well as the filter medium,\nthen the final conductivity will be lower than using the filter medium alone,\nbecause growing plants absorb NO₃⁻ ions as a nutrient, removing extra nitrate on top of what the filter medium removes.',
    keyConcepts: ['Hypothesis', 'If–Then–Because', 'Nitrate removal'],
    keywords: ['if plants added with medium', 'then lower conductivity', 'because plants absorb nitrate'],
    feedbackHit: 'Correct If/Then/Because with logical reasoning about plants absorbing nitrate.',
    feedbackMiss: 'IF plants added with the medium → THEN lower final conductivity → BECAUSE plants absorb NO₃⁻ ions for growth in addition to those removed by the medium.',
  },
  q4_e: {
    marks: 2,
    exemplar: 'Anomalous result: Medium C, Trial 2 = 120 mg dm⁻³ — far higher than its other trials (38 and 40 mg dm⁻³). Experimental reason: the aquarium water for that trial may have been contaminated, the medium may not have been added (or was exhausted/old), the sample may not have been left the full 10 minutes, or the meter was misread/recorded incorrectly.',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['Medium C Trial 2 120 anomalous', 'contamination medium not added', 'measurement error', 'outlier'],
    feedbackHit: 'Correct — Medium C Trial 2 (120) identified as anomalous; valid experimental reason given.',
    feedbackMiss: '2 marks: (1) identify Medium C Trial 2 (120 mg dm⁻³) as the outlier; (2) suggest a valid experimental reason (contamination, medium not added, short timing, misreading).',
  },
  q4_f: {
    marks: 2,
    exemplar: 'Exclude the anomalous value (120). Average of the remaining two trials = (38 + 40) ÷ 2 = 39 mg dm⁻³ (2 s.f.).',
    keyConcepts: ['Mean calculation', 'Significant figures', 'Excluding anomalies'],
    keywords: ['exclude 120 anomaly', '(38+40)/2', '39 mg dm⁻³', 'significant figures'],
    feedbackHit: 'Correct — anomaly excluded; mean = (38+40)/2 = 39 mg dm⁻³.',
    feedbackMiss: '2 marks: (1) exclude the anomaly (120) and average the remaining two: (38+40)/2 = 39; (2) appropriate sig figs AND include unit mg dm⁻³.',
    blankAnswers: ['39 mg dm⁻³'],
  },
  q4_g: {
    marks: 1,
    exemplar: 'Medium D is the best choice. It gives the LOWEST conductivity after 10 minutes (≈30 mg dm⁻³), which means the fewest NO₃⁻ ions remain — so it removed the most nitrate and cleaned the water most effectively.',
    keyConcepts: ['Data interpretation', 'Nitrate removal'],
    keywords: ['Medium D lowest conductivity', 'fewest NO₃⁻ ions remaining', 'most effective removal'],
    feedbackHit: 'Correct — Medium D (lowest conductivity ≈30) justified as best choice (most NO₃⁻ removed).',
    feedbackMiss: 'Identify the medium with the lowest conductivity (Medium D ≈30 mg dm⁻³) and state it removed the most NO₃⁻ = most effective.',
  },
  q4_h: {
    marks: 1,
    exemplar: 'A larger aquarium holds a larger volume of water, which contains a greater total number of NO₃⁻ ions. More filter medium is therefore needed to remove all of those extra ions.',
    keyConcepts: ['Proportional dosing', 'Filtration'],
    keywords: ['larger aquarium more water', 'more total NO₃⁻ ions', 'more medium needed'],
    feedbackHit: 'Correct — larger aquarium = more water = more total NO₃⁻ ions = more medium needed.',
    feedbackMiss: 'A larger aquarium holds more water with more total NO₃⁻ ions, so more filter medium is needed to remove them all.',
  },

  // ── Q5: Car underbody panels / road brine / Crit B design ─────────────────
  q5_a: { type: 'mcq', correct: 0 },   // Bubbles of gas given off (index 0)
  q5_b: {
    marks: 18,
    exemplar: 'Crit B design rubric:\n\nBand 4 criteria:\n• IV = type of panel material (mild steel/aluminium/galvanised steel/stainless steel/magnesium alloy) STATED\n• DV = rate of reaction / mass lost / volume of gas produced / time to react STATED AND measured\n• 2 CVs: volume of hydrochloric acid (e.g. 50 cm³) AND temperature of acid (e.g. 20°C) STATED\n• Equipment: balance (±0.01g), measuring cylinder (50 cm³), beaker, 1 mol dm⁻³ hydrochloric acid, gas syringe or electronic balance, stopwatch\n• Method: cut each material to equal 10×10 cm size, weigh, place in 50 cm³ of 1 mol dm⁻³ HCl at 20°C for 10 minutes, measure mass lost OR collect gas per minute, repeat 3+ times, calculate mean for each material\n• Data collection: record initial and final mass (mass loss) OR gas volume at set intervals; repeat ≥3 times per material\n• Safety: hydrochloric acid is corrosive/irritant — wear gloves, goggles and lab coat; work in a well-ventilated area; avoid skin/eye contact\n\nExample method: Cut each material into equal 10×10 cm pieces. Weigh each using an electronic balance (±0.01g). Place each separately into a 250 cm³ beaker with 50 cm³ of 1 mol dm⁻³ HCl at 20°C. Leave 10 minutes. Remove, dry and re-weigh. Mass lost = initial − final. Repeat 3 times per material and calculate the mean. Safety: corrosive acid — wear goggles, gloves and a lab coat.',
    keyConcepts: ['Criterion B', 'Experimental design', 'Chemical reactions', 'Safety'],
    keywords: ['IV material type', 'DV mass lost rate reaction', 'CV volume acid temperature', 'equipment balance beaker', '3 repeats mean', 'corrosive HCl safety'],
    feedbackHit: 'Strong Crit B — IV/DV/CVs stated, equipment listed, clear method, safety linked to corrosive acid.',
    feedbackMiss: 'Bands: (1) IV or DV stated; (2) IV AND DV stated; (3) measurements collected for multiple materials + CVs; (4) full method with equipment + safety.',
  },
  q5_c: {
    marks: 1,
    exemplar: 'Temperature of the acid (to model warmer vs colder winters) OR salt concentration of the brine (to model heavier vs lighter road gritting) OR concentration of the acid (to model more vs less polluted air) OR number of freeze-thaw / wet-dry cycles.',
    keyConcepts: ['Variables', 'Climate factors'],
    keywords: ['temperature of acid', 'salt concentration brine', 'acid concentration', 'freeze-thaw cycles', 'climate IV'],
    feedbackHit: 'Correct — valid IV linked to climate (temperature/salinity/acid concentration/freeze-thaw).',
    feedbackMiss: 'Suggest a measurable IV linked to climate: e.g. temperature of acid, salt concentration of brine, acid concentration, or freeze-thaw cycles.',
  },

  // ── Q6: Buried steel pipeline / soil acidity ──────────────────────────────
  q6_a: {
    marks: 6,
    exemplar: 'Scatter graph: x-axis = Acid concentration / mol dm⁻³ (0–0.8); y-axis = Average mass lost / mg (0–100); plot 5 points: (0,9), (0.2,28), (0.4,47), (0.6,66), (0.8,88); draw a straight line of best fit; both axes labelled with quantity and unit; appropriate scale used (majority of the grid).',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Data presentation'],
    keywords: ['x acid concentration mol dm⁻³', 'y average mass lost mg', '5 data points plotted', 'line of best fit', 'axes labelled units'],
    feedbackHit: 'Correct — x-axis acid concentration, y-axis mass lost, 5 points plotted, line of best fit, axes labelled with units.',
    feedbackMiss: '6 marks: (1) x-axis label + unit; (2) y-axis label + unit; (3) appropriate scale; (4) 3+ points correct; (5) all 5 points correct; (6) straight line of best fit.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Trend: As the acid concentration of the soil water increases, the average mass lost by the iron nail increases (positive/directly proportional relationship). At higher acid concentration, more mass is lost due to faster corrosion.\n\nPurpose of the 0 mol dm⁻³ trial: It acts as a control / baseline / reference. It shows how much mass is lost in neutral (acid-free) soil water, so the extra corrosion caused specifically by the acid can be compared against it.',
    keyConcepts: ['Trend analysis', 'Control experiment'],
    keywords: ['as acid concentration increases mass lost increases', 'positive relationship', '0 mol dm⁻³ control baseline', 'comparison without acid'],
    feedbackHit: 'Correct — positive trend stated + 0 mol dm⁻³ = control/baseline/comparison.',
    feedbackMiss: '3 marks: (1) as acid concentration increases, mass lost increases; (2) positive/direct relationship; (3) 0 mol dm⁻³ = control (corrosion in neutral water / baseline).',
  },
  q6_c: {
    marks: 3,
    exemplar: 'The hypothesis is INVALID. The data shows that as acid concentration increases, MORE mass is lost — not less. This is the OPPOSITE of the prediction. The reasoning is also incorrect: the acid attacks and dissolves the iron (reacting to form a salt and hydrogen), it does not form a protective coating, so higher acid concentration speeds corrosion up.',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation', 'Validity'],
    keywords: ['hypothesis invalid', 'data shows more mass lost at higher concentration', 'opposite prediction', 'reasoning incorrect no protective coating'],
    feedbackHit: 'Correct — hypothesis invalid; data shows more mass lost as acid concentration increases (opposite to prediction); reasoning about a protective coating is incorrect.',
    feedbackMiss: '3 marks: (1) hypothesis is invalid/not supported; (2) data shows INCREASE in mass lost as concentration rises (opposite to hypothesis); (3) the reasoning is wrong — acid dissolves the iron rather than coating it.',
  },
  q6_d: {
    marks: 1,
    exemplar: 'Nails are standardised (same shape and size), making it easier to compare results. They are made of iron/steel — the same base metal as a pipeline — so they corrode in the same way. Nails are also cheaper and easier to weigh accurately than a real pipe section.',
    keyConcepts: ['Experimental design', 'Model validity'],
    keywords: ['standardised size shape', 'same metal iron steel pipeline', 'easier weigh handle', 'cheaper model'],
    feedbackHit: 'Correct — nails are standardised/same metal as the pipeline/easier to handle.',
    feedbackMiss: 'Any valid reason: (1) standardised size/shape; (2) same metal (iron/steel) as the pipeline; (3) easier to weigh/handle; (4) cheaper.',
  },

  // ── Q7: Medical radioisotope hospital delivery ────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Renewable sources (e.g. solar, wind) do not produce carbon dioxide / greenhouse gases when generating electricity, whereas non-renewable sources (fossil fuels) release CO₂ and other pollutants when burned. Accept: renewable sources are effectively inexhaustible while non-renewable sources will run out.',
    keyConcepts: ['Renewable vs non-renewable energy', 'Environmental impact'],
    keywords: ['CO₂ greenhouse gases fossil fuels', 'renewable do not produce CO₂', 'non-renewable pollutants', 'will run out'],
    feedbackHit: 'Correct — one valid difference beyond renewable/non-renewable (CO₂/pollution/inexhaustible/running out).',
    feedbackMiss: 'Give ONE difference beyond the renewable/non-renewable label: e.g. fossil fuels produce CO₂ but renewables do not; or fossil fuels will run out but solar/wind will not.',
  },
  q7_b: {
    marks: 3,
    exemplar: 'A neutron collides with a uranium-235 nucleus. The nucleus becomes unstable and splits into two smaller atoms. This releases a large amount of energy AND 2–3 additional neutrons. These neutrons go on to collide with other uranium-235 nuclei, causing them to split in turn. This creates a chain reaction that continues as long as enough fissile material is present.',
    keyConcepts: ['Nuclear fission', 'Chain reaction'],
    keywords: ['neutron hits nucleus unstable', 'splits into 2 smaller atoms', 'releases energy + more neutrons', 'chain reaction continues'],
    feedbackHit: 'Correct — neutron → unstable nucleus → splits releasing energy + more neutrons → chain reaction.',
    feedbackMiss: '3 marks: (1) neutron collides with nucleus → becomes unstable → splits; (2) releases energy + additional neutrons; (3) neutrons hit more nuclei → chain reaction.',
  },
  q7_c: {
    marks: 6,
    exemplar: 'Risks: Technetium-99m is radioactive and emits gamma radiation, which can harm staff and the public if a container leaks or is damaged in an accident (crash, derailment, sinking, plane crash). It also decays quickly, so any delay wastes the dose and forces re-supply.\n\nPrecautions:\n• Road: lead-lined, sealed containers; trained drivers; planned fast routes; radiation monitoring badges.\n• Rail: shielded sealed flasks; fixed monitored routes; emergency teams on standby.\n• River/ship: shielded containers; routes away from populated coasts; generally too slow for a short-lived isotope.\n• Air: useful for long distances because it is fast, but a crash would scatter material; small shielded quantities only.\n\nConclusion: For a short-lived isotope like Tc-99m, ROAD is usually the safest practical method for nearby hospitals — it is fast, flexible and door-to-door, and lead-lined sealed containers keep radiation contained; AIR is justified for distant hospitals where speed matters more, because the isotope would otherwise decay before arrival.',
    keyConcepts: ['Criterion D', 'Radioactive isotope', 'Risk assessment', 'Transport safety'],
    keywords: ['gamma radiation risk leak accident', 'decays fast speed matters', 'lead-lined sealed containers precautions', 'road fast flexible / air for distance', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — risks stated, precautions per method, justified conclusion (road/air with reasoning).',
    feedbackMiss: '(1) risk stated (radiation/leak/fast decay); (2) precaution for ≥2 methods; (3) precautions for all methods; (4) conclusion with justification; (5-6) quality of evaluation with evidence.',
  },

  // ── Q8: Subduction-zone vs dry-cask surface storage — Crit D essay ────────
  q8_: {
    marks: 13,
    exemplar: 'Crit D evaluation rubric:\n\nEffects on living things (Band 4):\nSubduction-zone disposal: placing waste on the deep ocean floor risks containers corroding and leaking before the plates carry them down; radiation would enter deep-sea ecosystems and accumulate up the marine food chain, eventually reaching humans who eat seafood; the waste cannot easily be retrieved or monitored.\nDry-cask surface storage: sealed casks above ground keep radiation away from living things while intact, but they sit exposed to accidents, attack and extreme weather, and any breach would expose nearby people and wildlife; they can, however, be watched and fixed.\n\nEconomic impact (Band 4):\nSubduction-zone disposal: high cost to ship and precisely place containers in the deep ocean, and impossible to recover if something goes wrong.\nDry-cask surface storage: cheaper to build initially, but the casks are only a temporary solution — they must be guarded, cooled and replaced over decades, adding ongoing cost.\n\nConclusion (Band 4): Dry-cask surface storage is the better method for now. Although it is only temporary, it keeps the waste where it can be monitored, cooled and repaired, and it avoids the irreversible risk of contaminating the deep ocean. The ongoing cost of guarding the casks is justified because the waste stays retrievable and contained, unlike waste lost on the sea floor. (Accept a justified case for subduction-zone disposal that weighs permanence against the contamination and retrieval risks.)',
    keyConcepts: ['Criterion D', 'Radioactive waste disposal', 'Environmental ethics', 'Economic evaluation'],
    keywords: ['subduction ocean contamination food chain', 'dry cask monitored coolable but temporary', 'economic cost placement vs ongoing guarding', 'retrievable vs irreversible', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — effects on living things (both methods), economic impact (both methods), justified conclusion.',
    feedbackMiss: 'Must include: (1) effect on living things for ONE method; (2) effect on living things for BOTH methods; (3) economic impact ONE method; (4) economic BOTH methods + justified conclusion.',
  },
}
