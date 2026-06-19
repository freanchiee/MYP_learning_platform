import 'server-only'

// NOTE: Variant 1 of chemistry-nov-2024. Original content — every answer is
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
  // ── Q1: Lavender distillation / propan-1-ol / copper sulfate ───────────────
  q1_a: { type: 'mcq', correct: 1 },   // Transition metals (index 1)
  q1_b: { type: 'mcq', correct: 1 },   // Different boiling points (index 1)
  q1_c: {
    marks: 4,
    exemplar: 'X to Y: The liquid is heated; the particles gain kinetic energy; the particles at the surface escape the liquid and become a gas (evaporation/vaporisation).\nY to Z: The vapour passes into the cooler condenser; the particles lose kinetic energy; they slow down and move closer together; the gas condenses back to a liquid (condensation).',
    keyConcepts: ['States of matter', 'Particle theory', 'Evaporation and condensation'],
    keywords: ['particles gain energy evaporate', 'particles lose energy condense', 'liquid to gas', 'gas to liquid', 'distillation state changes'],
    feedbackHit: 'Correct — particles gain energy at X→Y (evaporation); lose energy at Y→Z (condensation).',
    feedbackMiss: '4 marks: X→Y: (1) particles gain energy; (2) liquid becomes gas (evaporation). Y→Z: (3) particles lose energy; (4) gas becomes liquid (condensation).',
  },
  q1_d: { type: 'mcq', correct: 2 },   // C = propan-1-ol (CH₃CH₂CH₂OH, index 2)
  q1_e: {
    marks: 2,
    exemplar: 'Mr(CuSO₄) = 64 + 32 + 4(16) = 64 + 32 + 64 = 160 g mol⁻¹',
    keyConcepts: ['Relative formula mass', 'Molar mass calculation'],
    keywords: ['CuSO4 molar mass', '160', 'Cu=64 S=32 O=16', 'formula mass'],
    feedbackHit: 'Correct — Mr(CuSO₄) = 160 g mol⁻¹.',
    feedbackMiss: 'Mr = Cu + S + 4×O = 64 + 32 + 64 = 160 g mol⁻¹. Award 1 mark for method (adding atomic masses), 1 for correct answer 160 with unit.',
    blankAnswers: ['160'],
  },

  // ── Q2: SO₂ / sparkling water / contact process / catalyst ─────────────────
  q2_a: { type: 'mcq', correct: 1 },   // Covalent bonding (index 1)
  q2_b: {
    marks: 3,
    exemplar: 'The gas (SO₂ or CO₂) is dissolved in the drink under high pressure. When the bottle is opened, the pressure above the liquid drops. The dissolved gas comes out of solution as bubbles (dissolved gas → gas). The rapidly expanding gas pushes the liquid out, so the drink fizzes and sprays.',
    keyConcepts: ['Gas solubility', 'Pressure and equilibrium', 'Gas in solution'],
    keywords: ['gas dissolved under pressure', 'opening reduces pressure', 'gas comes out of solution', 'gas expands pushes spray'],
    feedbackHit: 'Correct — gas dissolved under pressure; opening drops pressure; gas escapes as bubbles; expands and sprays out.',
    feedbackMiss: '3 marks: (1) gas dissolved under high pressure; (2) opening bottle → pressure drops → gas escapes from solution; (3) gas expands rapidly and pushes spray/liquid out.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Mr(SO₂) = 32 + 2(16) = 64; Mr(SO₃) = 32 + 3(16) = 80.\nn(SO₂) = 384 ÷ 64 = 6.00 mol.\nMole ratio SO₂ : SO₃ = 2 : 2 = 1 : 1, so n(SO₃) = 6.00 mol.\nm(SO₃) = 6.00 × 80 = 480 g = 4.80 × 10² g.',
    keyConcepts: ['Stoichiometry', 'Moles calculation', 'Standard form'],
    keywords: ['n=m/Mr', '384/64', '6.00 mol', '6.00×80=480', '4.80×10² g', 'standard form'],
    feedbackHit: 'Correct — n(SO₂)=6.00mol; n(SO₃)=6.00mol; m=480g=4.80×10² g.',
    feedbackMiss: '4 marks: (1) Mr(SO₂)=64 used; (2) n(SO₂)=6.00 mol; (3) 1:1 mole ratio applied; (4) m=480g in standard form 4.80×10².',
    blankAnswers: ['4.80 × 10²'],
  },
  q2_d: {
    marks: 3,
    exemplar: 'A catalyst (vanadium(V) oxide) provides an alternative reaction pathway with a lower activation energy. More reactant particles have enough energy to overcome the lower activation energy. Therefore more successful collisions occur per second and the rate of sulfur trioxide production increases.',
    keyConcepts: ['Catalysis', 'Activation energy', 'Reaction rate'],
    keywords: ['alternative pathway lower activation energy', 'more particles sufficient energy', 'more successful collisions', 'rate increases'],
    feedbackHit: 'Correct — lower activation energy → more particles with sufficient energy → more collisions → faster rate.',
    feedbackMiss: '3 marks: (1) provides alternative pathway / lower activation energy; (2) more particles have sufficient energy; (3) more successful collisions → rate increases.',
  },

  // ── Q3: Diving gases / helium balloon / periodicity ───────────────────────
  q3_a: { type: 'mcq', correct: 1 },   // Oxygen (index 1)
  q3_b: {
    marks: 2,
    exemplar: 'Helium: Group 18 (accept Group 0). Neon: Period 2.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['helium group 18', 'neon period 2', 'group period noble gases'],
    feedbackHit: 'Correct — helium Group 18, neon Period 2.',
    feedbackMiss: 'Helium (He): 2 electrons, config 2 → Group 18 (or 0). Neon (Ne): 10 electrons, config 2.8 → Period 2.',
    blankAnswers: ['18', '2'],
  },
  q3_c: {
    marks: 3,
    exemplar: 'Helium has the electron configuration 2. The first (outer) shell is FULL with 2 electrons. A full outer shell is chemically stable/inert — there is no tendency for helium to gain, lose or share electrons. As bonding requires the transfer or sharing of electrons, helium cannot form bonds and therefore does not form compounds.',
    keyConcepts: ['Noble gas stability', 'Electron configuration', 'Chemical bonding'],
    keywords: ['helium config 2 full outer shell', 'stable configuration', 'no tendency to share electrons', 'cannot form bonds'],
    feedbackHit: 'Correct — full outer shell (2) → stable → no tendency to react → no compounds formed.',
    feedbackMiss: '3 marks: (1) helium has 2 electrons filling its outer shell (config 2); (2) full outer shell is stable; (3) no tendency to gain/lose/share electrons so no compounds formed.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'Hydrogen is flammable and reactive: near a flame it reacts rapidly with oxygen in the air in an exothermic reaction, producing a sudden expansion of hot gas that bursts the balloon (explosion). Helium is a noble gas — it is unreactive and does not burn, so a helium balloon does not explode.',
    keyConcepts: ['Reactivity of gases', 'Combustion', 'Noble gas inertness'],
    keywords: ['hydrogen flammable reacts with oxygen', 'exothermic explosion', 'rapid gas expansion', 'helium inert does not burn'],
    feedbackHit: 'Correct — hydrogen burns/reacts with oxygen exothermically → rapid expansion → explosion; helium is inert.',
    feedbackMiss: '2 marks: (1) hydrogen is flammable and reacts with oxygen near a flame (exothermic); (2) rapid gas expansion bursts the balloon, while helium is inert and does not react.',
  },

  // ── Q4: Hard-water scale / ion-exchange resin investigation ───────────────
  q4_a: {
    marks: 1,
    exemplar: '"What is the effect of the type of softening resin on the conductivity (Ca²⁺ ion concentration) of hard water after 10 minutes?"',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['effect of softening resin', 'conductivity Ca²⁺ ions', 'research question'],
    feedbackHit: 'Correct — research question states IV (type of resin) and a measurable DV (conductivity/Ca²⁺ concentration).',
    feedbackMiss: 'Must state IV (type of softening resin) and a measurable DV (conductivity/Ca²⁺ concentration). E.g. "What is the effect of resin type on the conductivity of hard water after 10 minutes?"',
  },
  q4_b: {
    marks: 4,
    exemplar: 'IV = Type of softening resin.\nDV = Conductivity / concentration of Ca²⁺ ions (mg dm⁻³).\nCV1 = Time (10 minutes).\nCV2 = Initial concentration (or volume) of the hard water sample.',
    keyConcepts: ['Variables', 'Scientific investigation', 'Criterion B'],
    keywords: ['IV type softening resin', 'DV conductivity Ca²⁺ concentration', 'CV time 10 min', 'CV initial concentration volume'],
    feedbackHit: 'Correct — IV=type of resin; DV=conductivity/Ca²⁺; two valid CVs.',
    feedbackMiss: 'IV = type of softening resin. DV = conductivity / Ca²⁺ concentration. CV = time AND volume/initial concentration of hard water.',
    blankAnswers: ['Type of softening resin', 'Conductivity / concentration of Ca²⁺ ions', 'Time (10 minutes)', 'Initial volume/concentration of hard water'],
  },
  q4_c: {
    marks: 2,
    exemplar: 'The second student\'s method is less valid. The first student measures conductivity BEFORE and AFTER to determine the change. The second setup lacks an initial reading, so it cannot measure how the conductivity (Ca²⁺ concentration) changes. Without a baseline, no conclusion about how much calcium each resin removed can be drawn.',
    keyConcepts: ['Experimental validity', 'Control measurements'],
    keywords: ['no before reading', 'cannot measure change', 'less valid', 'no baseline'],
    feedbackHit: 'Correct — second method less valid; cannot measure change (no initial reading).',
    feedbackMiss: '2 marks: (1) second method less valid; (2) because it lacks an initial reading so cannot determine change in Ca²⁺ concentration.',
  },
  q4_d: {
    marks: 3,
    exemplar: 'If the hard water is boiled before a resin is added,\nthen the final conductivity will be lower than using the resin alone,\nbecause boiling precipitates some Ca²⁺ ions out as limescale, leaving fewer ions in solution for the resin to remove, so more total calcium is removed.',
    keyConcepts: ['Hypothesis', 'If–Then–Because', 'Hard-water softening'],
    keywords: ['if boiled before resin', 'then lower conductivity', 'because boiling precipitates calcium'],
    feedbackHit: 'Correct If/Then/Because with logical reasoning about boiling and calcium removal.',
    feedbackMiss: 'IF boiled before adding resin → THEN lower final conductivity → BECAUSE boiling precipitates some Ca²⁺ as scale so fewer ions remain.',
  },
  q4_e: {
    marks: 2,
    exemplar: 'Anomalous result: Resin C, Trial 2 = 155 mg dm⁻³ — far higher than its other trials (54 and 57 mg dm⁻³). Experimental reason: the hard water for that trial may have been contaminated, the resin may not have been added (or was exhausted/old), the sample may not have been left the full 10 minutes, or the meter was misread/recorded incorrectly.',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['Resin C Trial 2 155 anomalous', 'contamination resin not added', 'measurement error', 'outlier'],
    feedbackHit: 'Correct — Resin C Trial 2 (155) identified as anomalous; valid experimental reason given.',
    feedbackMiss: '2 marks: (1) identify Resin C Trial 2 (155 mg dm⁻³) as the outlier; (2) suggest a valid experimental reason (contamination, resin not added, short timing, misreading).',
  },
  q4_f: {
    marks: 2,
    exemplar: 'Exclude the anomalous value (155). Average of the remaining two trials = (54 + 57) ÷ 2 = 55.5 ≈ 56 mg dm⁻³ (2 s.f.).',
    keyConcepts: ['Mean calculation', 'Significant figures', 'Excluding anomalies'],
    keywords: ['exclude 155 anomaly', '(54+57)/2', '55.5', '56 mg dm⁻³', 'significant figures'],
    feedbackHit: 'Correct — anomaly excluded; mean = (54+57)/2 = 55.5 ≈ 56 mg dm⁻³.',
    feedbackMiss: '2 marks: (1) exclude the anomaly (155) and average the remaining two: (54+57)/2 = 55.5; (2) round to appropriate sig figs (≈56) AND include unit mg dm⁻³.',
    blankAnswers: ['56 mg dm⁻³'],
  },
  q4_g: {
    marks: 1,
    exemplar: 'Resin D is the best choice. It gives the LOWEST conductivity after 10 minutes (≈41 mg dm⁻³), which means the fewest Ca²⁺ ions remain — so it removed the most calcium and softened the water most effectively.',
    keyConcepts: ['Data interpretation', 'Water softening'],
    keywords: ['Resin D lowest conductivity', 'fewest Ca²⁺ ions remaining', 'most effective softening'],
    feedbackHit: 'Correct — Resin D (lowest conductivity ≈41) justified as best choice (most Ca²⁺ removed).',
    feedbackMiss: 'Identify the resin with the lowest conductivity (Resin D ≈41 mg dm⁻³) and state it removed the most Ca²⁺ = most effective.',
  },
  q4_h: {
    marks: 1,
    exemplar: 'A larger washing machine holds a larger volume of hard water, which contains a greater total number of Ca²⁺ ions. More resin is therefore needed to exchange/remove all of those extra ions.',
    keyConcepts: ['Proportional dosing', 'Ion exchange'],
    keywords: ['larger machine more water', 'more total Ca²⁺ ions', 'more resin needed'],
    feedbackHit: 'Correct — larger machine = more water = more total Ca²⁺ ions = more resin needed.',
    feedbackMiss: 'A larger machine holds more water with more total Ca²⁺ ions, so a larger dose of resin is needed to remove them all.',
  },

  // ── Q5: Sea-wall blocks / sulfuric acid / Crit B design ───────────────────
  q5_a: { type: 'mcq', correct: 0 },   // Bubbles of gas given off (index 0)
  q5_b: {
    marks: 18,
    exemplar: 'Crit B design rubric:\n\nBand 4 criteria:\n• IV = type of building material (limestone/concrete/granite/recycled brick/sandstone) STATED\n• DV = rate of reaction / mass lost / volume of gas produced / time to react STATED AND measured\n• 2 CVs: volume of sulfuric acid (e.g. 50 cm³) AND temperature of acid (e.g. 20°C) STATED\n• Equipment: balance (±0.01g), measuring cylinder (50 cm³), beaker, 1 mol dm⁻³ sulfuric acid, gas syringe or electronic balance, stopwatch\n• Method: cut each material to equal 10×10 cm size, weigh, place in 50 cm³ of 1 mol dm⁻³ sulfuric acid at 20°C for 10 minutes, measure mass lost OR collect gas per minute, repeat 3+ times, calculate mean for each material\n• Data collection: record initial and final mass (mass loss) OR gas volume at set intervals; repeat ≥3 times per material\n• Safety: sulfuric acid is corrosive — wear gloves, goggles and lab coat; work in a well-ventilated area; avoid skin/eye contact\n\nExample method: Cut each material into equal 10×10 cm pieces. Weigh each using an electronic balance (±0.01g). Place each separately into a 250 cm³ beaker with 50 cm³ of 1 mol dm⁻³ sulfuric acid at 20°C. Leave 10 minutes. Remove, dry and re-weigh. Mass lost = initial − final. Repeat 3 times per material and calculate the mean. Safety: corrosive acid — wear goggles, gloves and a lab coat.',
    keyConcepts: ['Criterion B', 'Experimental design', 'Chemical reactions', 'Safety'],
    keywords: ['IV material type', 'DV mass lost rate reaction', 'CV volume acid temperature', 'equipment balance beaker', '3 repeats mean', 'corrosive sulfuric acid safety'],
    feedbackHit: 'Strong Crit B — IV/DV/CVs stated, equipment listed, clear method, safety linked to corrosive acid.',
    feedbackMiss: 'Bands: (1) IV or DV stated; (2) IV AND DV stated; (3) measurements collected for multiple materials + CVs; (4) full method with equipment + safety.',
  },
  q5_c: {
    marks: 1,
    exemplar: 'Temperature of the acid (to model warmer vs cooler coasts) OR salt concentration of the spray (to model exposure to seawater) OR concentration of the acid (to model more vs less polluted air) OR number of wetting/drying or freeze-thaw cycles.',
    keyConcepts: ['Variables', 'Climate factors'],
    keywords: ['temperature of acid', 'salt concentration spray', 'acid concentration', 'freeze-thaw cycles', 'climate IV'],
    feedbackHit: 'Correct — valid IV linked to climate (temperature/salinity/acid concentration/freeze-thaw).',
    feedbackMiss: 'Suggest a measurable IV linked to climate: e.g. temperature of acid, salt concentration of spray, acid concentration, or freeze-thaw cycles.',
  },

  // ── Q6: Ship-hull sacrificial anode / seawater salinity ───────────────────
  q6_a: {
    marks: 6,
    exemplar: 'Scatter graph: x-axis = Salinity / g dm⁻³ (0–35); y-axis = Average mass lost / mg (0–90); plot 5 points: (0,8), (5,20), (15,44), (25,60), (35,84); draw a straight line of best fit; both axes labelled with quantity and unit; appropriate scale used (majority of the grid).',
    keyConcepts: ['Graph plotting', 'Line of best fit', 'Data presentation'],
    keywords: ['x salinity g dm⁻³', 'y average mass lost mg', '5 data points plotted', 'line of best fit', 'axes labelled units'],
    feedbackHit: 'Correct — x-axis salinity, y-axis mass lost, 5 points plotted, line of best fit, axes labelled with units.',
    feedbackMiss: '6 marks: (1) x-axis label + unit; (2) y-axis label + unit; (3) appropriate scale; (4) 3+ points correct; (5) all 5 points correct; (6) straight line of best fit.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Trend: As the salinity of the water increases, the average mass lost by the zinc anode increases (positive/directly proportional relationship). At higher salinity, more mass is lost due to faster corrosion.\n\nPurpose of the 0 g dm⁻³ trial: It acts as a control / baseline / reference. It shows how much mass is lost in salt-free water, so the extra corrosion caused specifically by the salt can be compared against it.',
    keyConcepts: ['Trend analysis', 'Control experiment'],
    keywords: ['as salinity increases mass lost increases', 'positive relationship', '0 g dm⁻³ control baseline', 'comparison without salt'],
    feedbackHit: 'Correct — positive trend stated + 0 g dm⁻³ = control/baseline/comparison.',
    feedbackMiss: '3 marks: (1) as salinity increases, mass lost increases; (2) positive/direct relationship; (3) 0 g dm⁻³ = control (corrosion in salt-free water / baseline).',
  },
  q6_c: {
    marks: 3,
    exemplar: 'The hypothesis is INVALID. The data shows that as salinity increases, MORE mass is lost — not less. This is the OPPOSITE of the prediction. The reasoning is also incorrect: higher salinity means MORE dissolved ions, not fewer, so charge is carried more easily and corrosion is faster, increasing the mass lost.',
    keyConcepts: ['Hypothesis evaluation', 'Data interpretation', 'Validity'],
    keywords: ['hypothesis invalid', 'data shows more mass lost at higher salinity', 'opposite prediction', 'reasoning incorrect more ions'],
    feedbackHit: 'Correct — hypothesis invalid; data shows more mass lost as salinity increases (opposite to prediction); reasoning about ions is incorrect.',
    feedbackMiss: '3 marks: (1) hypothesis is invalid/not supported; (2) data shows INCREASE in mass lost as salinity rises (opposite to hypothesis); (3) the reasoning (fewer ions) is wrong — more salt means more ions and faster corrosion.',
  },
  q6_d: {
    marks: 1,
    exemplar: 'Nails are standardised (same shape and size), making it easier to compare results. They are made of iron/steel — the same base metal as a ship hull — so they corrode in the same way. Nails are also cheaper and easier to weigh accurately than a real hull section.',
    keyConcepts: ['Experimental design', 'Model validity'],
    keywords: ['standardised size shape', 'same metal iron steel hull', 'easier weigh handle', 'cheaper model'],
    feedbackHit: 'Correct — nails are standardised/same metal as the hull/easier to handle.',
    feedbackMiss: 'Any valid reason: (1) standardised size/shape; (2) same metal (iron/steel) as the hull; (3) easier to weigh/handle; (4) cheaper.',
  },

  // ── Q7: Fusion / tritium fuel transport ───────────────────────────────────
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
    exemplar: 'For the nuclei to join, the gas must be heated to an extremely high temperature so the nuclei move fast enough to overcome their electrostatic repulsion and collide. When deuterium and tritium fuse, they form a helium nucleus and release a fast neutron and a large amount of energy. Energy is released because a small amount of mass is converted to energy as the new, more stable nucleus forms.',
    keyConcepts: ['Nuclear fusion', 'Energy release'],
    keywords: ['high temperature overcome repulsion collide', 'deuterium tritium fuse to helium + neutron', 'releases energy', 'mass converted to energy'],
    feedbackHit: 'Correct — high temperature → nuclei collide → fuse to helium + neutron → energy released.',
    feedbackMiss: '3 marks: (1) very high temperature/speed needed so nuclei overcome repulsion and collide; (2) form helium + a neutron; (3) a large amount of energy is released (mass converted to energy).',
  },
  q7_c: {
    marks: 6,
    exemplar: 'Risks: Tritium is radioactive and emits beta radiation; if a container leaks, tritium gas can be inhaled or contaminate water, soil and air, increasing cancer risk. An accident in transit (crash, derailment, sinking, plane crash) could release it.\n\nPrecautions:\n• Road: armoured, double-sealed containers; trained drivers; escort; remote routes; travel at quiet times.\n• Rail: purpose-built sealed flasks; fixed monitored routes; emergency teams on standby.\n• River/ship: double-hulled vessels; routes away from populated coasts; decontamination kit aboard.\n• Air: generally avoided — a crash would scatter material widely; only very small, well-shielded quantities.\n\nConclusion: Rail is the safest method for routine tritium delivery. Trains run on fixed, controlled routes that can be pre-cleared and monitored; derailments are rarer than road accidents; sealed flasks can be purpose-built for the freight wagon; and rail avoids the water-contamination risk of sea transport.',
    keyConcepts: ['Criterion D', 'Radioactive material', 'Risk assessment', 'Transport safety'],
    keywords: ['tritium radiation risk inhaled contamination', 'sealed containers', 'precautions each method', 'rail safest controlled route', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — risks stated, precautions per method, justified conclusion (rail/road).',
    feedbackMiss: '(1) risk stated (radiation/leak/inhalation); (2) precaution for ≥2 methods; (3) precautions for all methods; (4) conclusion with justification; (5-6) quality of evaluation with evidence.',
  },

  // ── Q8: Space disposal vs deep-borehole storage — Crit D essay ────────────
  q8_: {
    marks: 13,
    exemplar: 'Crit D evaluation rubric:\n\nEffects on living things (Band 4):\nSpace disposal: if every launch succeeds there is no effect on Earth\'s organisms; but rockets fail in a small percentage of launches, and a failure on or after lift-off would scatter radioactive waste through the atmosphere and across land and sea, exposing many living things to radiation over a wide area.\nDeep-borehole storage: waste sealed 3000–5000 m down in stable rock is isolated from surface life; the main risk is slow groundwater contamination if a container corrodes, but the depth and clay/cement seals make this very unlikely.\n\nEconomic impact (Band 4):\nSpace disposal: extremely expensive — each rocket launch costs an enormous amount and can carry only a small mass of waste, so the cost per tonne is huge; a failed launch also wastes the rocket.\nDeep-borehole storage: expensive to drill and seal the boreholes and to monitor them, but far cheaper than repeated rocket launches and reusable for many containers.\n\nConclusion (Band 4): Deep-borehole storage is the better method. Although drilling is costly, it is far cheaper and far safer than firing waste into space, where even a small launch-failure rate would risk a catastrophic, wide-area release. Sealing waste deep in stable rock protects living things for thousands of years, so the cost is justified.',
    keyConcepts: ['Criterion D', 'Radioactive waste disposal', 'Environmental ethics', 'Economic evaluation'],
    keywords: ['space disposal launch failure scatters waste', 'deep borehole sealed safe long term', 'economic cost rockets very expensive', 'groundwater contamination risk', 'justified conclusion borehole better'],
    feedbackHit: 'Strong Crit D — effects on living things (both methods), economic impact (both methods), justified conclusion.',
    feedbackMiss: 'Must include: (1) effect on living things for ONE method; (2) effect on living things for BOTH methods; (3) economic impact ONE method; (4) economic BOTH methods + justified conclusion.',
  },
}
