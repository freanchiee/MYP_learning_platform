import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2024 · VARIANT 2  (isomorphic to chemistry-nov-2024)
// Every question re-tests the SAME construct (crit, command term = first bold
// word, marks, task structure, widget type/counts, tags) in a NEW real-world
// context — distinct from BOTH the source and Variant 1 — with a self-contained
// DATA-DRIVEN INTERACTIVE artefact on EVERY question (no image files, no
// markdown tables). Answers recomputed throughout.
//   Q1 States/distillation/structure/Mr:  alchemy/aqua-regia → solar-still seawater desalination; ethanol → butan-1-ol; FeSO₄ → MgCl₂
//   Q2 Bonding/gas-out/stoichiometry:      CO₂/champagne/methanol → N₂O cream-charger / Haber process ammonia synthesis
//   Q3 Periodic/noble gases/oxidation:     food packaging/argon bulb → welding shield gas / krypton halogen lamp air-leak
//   Q4 Crit B fluoride investigation:      tooth fillings/F⁻ → aquarium nitrate (NO₃⁻) removal by filter media
//   Q5 Crit B acid-rain design:            recycled roofing + HCl → car underbody panels + acidic road-salt brine
//   Q6 Crit C corrosion graph:             electroplated cutlery + NaCl → buried steel pipeline + soil acid concentration
//   Q7 Crit D nuclear fission/transport:   nuclear waste by road/rail → medical radioisotope (Mo-99/Tc-99m) hospital delivery
//   Q8 Crit D waste-disposal evaluation:   sea dumping vs underground → ocean-floor subduction vs dry-cask surface storage
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2024-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Solar-still desalination — distillation, butan-1-ol, magnesium chloride (9m, Crit A)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Desalination, Organic Structures & States of Matter',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'On a remote island with no fresh water, villagers use a simple solar still made from a stainless-steel tray and a sloping glass cover. Sunlight heats salty seawater in the tray; the water turns to vapour, rises, then cools and trickles down the glass as pure drinking water, leaving the salt behind. This is distillation, the same method used for thousands of years to purify liquids.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Particle model in the solar still: X → Y → Z',
        mode: 'states',
        substance: 'seawater',
        states: ['X — salty liquid in tray', 'Y — water vapour rising', 'Z — pure liquid on glass'],
        particleCount: 36,
      },
      caption: 'Step through the stages: X = warm seawater in the tray, Y = water vapour rising, Z = pure water condensing on the cool glass. Watch how the particle arrangement and motion change.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the region of the periodic table where the iron used in the stainless-steel tray can be found.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'b',
        text: 'The still separates pure water from dissolved salt. **Select** the property that allows water to be separated from salt by distillation.',
        marks: 1,
        ph: 'Different boiling points',
        widget: 'radio_select',
        widgetOptions: ['Different densities', 'Different boiling points', 'Different solubilities', 'Different melting points'],
      },
      {
        label: 'c',
        text: '**Describe** the state changes that take place from X to Y and from Y to Z in the solar still. Use particle theory in your answer.',
        marks: 4,
        ph: 'X to Y: liquid evaporates (particles gain energy, escape as gas); Y to Z: gas condenses on cool glass (particles lose energy, return to liquid)',
      },
      {
        label: 'd',
        text: 'The alcohol butan-1-ol is sometimes used as a fuel and solvent. **Select** the diagram showing the structure of butan-1-ol.',
        marks: 1,
        ph: 'D — CH₃CH₂CH₂CH₂OH: four carbons in a chain, ending in an OH group',
        widget: 'radio_select',
        widgetOptions: [
          'A — CH₃OH (one carbon, ends in OH)',
          'B — CH₃CH₂OH (two carbons, ends in OH)',
          'C — CH₃CH₂CH₂CH₃ (four carbons, no OH)',
          'D — CH₃CH₂CH₂CH₂OH (four carbons, ends in OH)',
        ],
      },
      {
        label: 'e',
        text: 'The white salt left behind in the still is mostly magnesium chloride (MgCl₂). **Calculate** the formula mass for MgCl₂. (Ar: Mg = 24, Cl = 35.5)',
        marks: 2,
        ph: 'Mr = 24 + 2(35.5) = 95 g/mol',
        widget: 'fill_blank',
      },
    ],
  },

  // ─── Q2: Cream charger N₂O & Haber process ammonia synthesis (11m, Crit A)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Covalent Bonding, Moles & Rates of Reaction',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 11,
    stem: 'Whipped-cream dispensers use small steel chargers filled with nitrous oxide (N₂O) gas under high pressure. When the trigger is pressed, the gas is released into the cream, making it foam. Nitrogen chemistry is also vital to feeding the world: ammonia (NH₃) made from nitrogen and hydrogen is the basis of most fertilisers.',
    artefact: {
      component: 'GasLawSim',
      data: {
        title: 'N₂O held in a cream charger under high pressure',
        vessel: 'sealed steel charger (gas under pressure)',
        coupling: 'More gas stays compressed at higher pressure; releasing the pressure lets it expand and foam the cream.',
        massSlider_kg: [0, 0.5, 1.0, 1.5, 2.0],
        pvUnit: 'kPa·cm³',
      },
      caption: 'Load the plunger to raise the pressure: the gas is forced into a small volume. Release it and the gas expands — exactly what happens when the trigger is pressed.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonding in a molecule of nitrous oxide.',
        marks: 1,
        ph: 'Covalent bonding',
        widget: 'radio_select',
        widgetOptions: ['Ionic bonding', 'Covalent bonding', 'Metallic bonding', 'Hydrogen bonding'],
      },
      {
        label: 'b',
        text: 'N₂O is stored in the charger under high pressure. **Explain** why the cream suddenly foams and sprays when the dispenser trigger is pressed. In your answer include why bubbles are seen.',
        marks: 3,
        ph: 'Pressure drops when valve opens; compressed gas expands rapidly; gas comes out into the cream as bubbles; expanding gas whips/sprays the cream out',
      },
      {
        label: 'c',
        text: 'In the Haber process, ammonia is made from nitrogen and hydrogen:\n\nN₂(g) + 3H₂(g) → 2NH₃(g)\n\n**Calculate** the mass of ammonia (NH₃) that can be produced from 280 g of nitrogen (N₂). Give your answer in grams in standard form. (Ar: N = 14, H = 1)',
        marks: 4,
        ph: 'n(N₂)=280/28=10.0mol; ratio 1:2 so n(NH₃)=20.0mol; m=20.0×17=340g=3.40×10² g',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'The Haber process is slow without help. It uses an iron catalyst. **Explain** how a catalyst works to increase the rate of ammonia production.',
        marks: 3,
        ph: 'Catalyst provides alternative reaction pathway with lower activation energy; more particles have sufficient energy; more successful collisions per second; rate increases',
      },
    ],
  },

  // ─── Q3: Welding shield gases & krypton halogen lamp — noble gases, periodicity, oxidation (8m, Crit A)
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Noble Gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 8,
    stem: 'Welders surround the hot metal with an unreactive gas to stop it reacting with the air while it cools. Unreactive gases are also sealed inside double glazing and inside bright halogen lamps. Choosing the right gas depends on its position in the periodic table and how it reacts — or refuses to react — with other substances.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Noble gas', 'Group', 'Period', 'Electron configuration', 'Typical use'],
        rows: [
          ['Helium (He)', '18', '1', '2', 'leak detection, balloons'],
          ['Neon (Ne)', '18', '2', '2.8', 'bright signs and lighting'],
          ['Argon (Ar)', '18', '3', '2.8.8', 'welding shield, double glazing'],
          ['Krypton (Kr)', '18', '4', '2.8.18.8', 'high-output halogen lamps'],
        ],
      },
      caption: 'All noble gases sit in Group 18 with a full outer shell — read off the group, period and electron configuration for each gas.',
    },
    tasks: [
      {
        label: 'a',
        text: 'When a freshly cut apple or sliced avocado is left in the air, it quickly turns brown. **Select** which gas in air causes cut fruit to turn brown.',
        marks: 1,
        ph: 'Oxygen',
        widget: 'radio_select',
        widgetOptions: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
      },
      {
        label: 'b',
        text: 'Argon is used as a welding shield gas and neon is used in bright signs. **State** the correct group for argon and the correct period for neon.',
        marks: 2,
        ph: 'Argon group = 18 (accept 0); Neon period = 2',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Explain** why neon does not form compounds. Use the electronic configuration of neon in your answer.',
        marks: 3,
        ph: 'Neon electron config = 2.8; full outer shell; no tendency to gain/lose/share electrons; does not bond',
      },
      {
        label: 'd',
        text: 'A high-output halogen lamp is sealed with krypton gas. Over time the seal can fail and air leaks in. The lamp can shatter violently soon after air gets in. **Outline** why the lamp might shatter if krypton is replaced by air.',
        marks: 2,
        ph: 'Oxygen in air reacts with the very hot tungsten filament; exothermic reaction; rapid gas production/expansion; lamp shatters',
      },
    ],
  },

  // ─── Q4: Aquarium nitrate removal — Crit B investigation (16m, Crit B)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Ionic Compounds',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 16,
    stem: 'Fish waste in an aquarium builds up as dissolved nitrate ions (NO₃⁻), which are harmful to fish at high levels. Aquarium shops sell different filter media that claim to remove nitrate ions from the water. A student wants to find out which filter medium removes nitrate ions most effectively.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Filter medium', 'Trial 1 conductivity / mg dm⁻³', 'Trial 2 / mg dm⁻³', 'Trial 3 / mg dm⁻³'],
        rows: [
          ['Medium A', '64', '66', '65'],
          ['Medium B', '52', '50', '51'],
          ['Medium C', '38', '120', '40'],
          ['Medium D', '29', '31', '30'],
        ],
      },
      caption: 'Conductivity of the aquarium water after 10 minutes with each filter medium (lower = more NO₃⁻ removed). One value is anomalous.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wanted to investigate which filter medium removes NO₃⁻ ions from aquarium water most effectively. **State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of type of filter medium on the conductivity (NO₃⁻ concentration) of aquarium water after 10 minutes?',
      },
      {
        label: 'b',
        text: 'A conductivity meter measures the change in concentration of NO₃⁻ ions. The student uses aquarium water with a known concentration of NO₃⁻ ions with each filter medium and measures how the conductivity changes after 10 minutes. **Identify** the independent variable, the dependent variable and two control variables in this investigation.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=type of filter medium; DV=conductivity/NO₃⁻ concentration; CV=time (10 min); CV=initial volume/concentration of aquarium water',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: 'A second student repeated the investigation but only took a reading at the end (a single conductivity reading, with no initial measurement). **Comment** on the validity of the second student\'s method compared with that of the first student. **Justify** your answer.',
        marks: 2,
        ph: 'Second method less valid; cannot measure initial conductivity; cannot determine change in NO₃⁻ concentration',
      },
      {
        label: 'd',
        text: 'Adding live plants is another way to lower nitrate, because plants absorb NO₃⁻ as they grow. The student wonders whether adding plants as well as a filter medium removes even more nitrate. **Formulate** a testable hypothesis to determine if adding plants and a filter medium is more effective than a filter medium alone. If… Then… Because…',
        marks: 3,
        ph: 'If plants are added as well as the filter medium, then conductivity falls further, because plants absorb NO₃⁻ ions for growth in addition to those removed by the medium',
      },
      {
        label: 'e',
        text: 'The students tested each filter medium three times, as shown in the table. **Identify** the anomalous result. **Suggest** an experimental reason that may have produced this result.',
        marks: 2,
        ph: 'Anomaly = Medium C Trial 2 (120 mg dm⁻³, far higher than 38 and 40). Reason: contamination, fresh water not used, medium not added, or measurement/recording error.',
      },
      {
        label: 'f',
        text: '**Calculate** the average conductivity after 10 minutes for Medium C. Give your answer to an appropriate number of significant figures and include the unit. (Exclude any anomalous result.)',
        marks: 2,
        ph: 'Exclude 120; average = (38 + 40)/2 = 39 mg dm⁻³',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Use** the data in part (f) and the table to justify the best choice of filter medium.',
        marks: 1,
        ph: 'Medium D gives the lowest conductivity (≈30 mg dm⁻³) = fewest NO₃⁻ ions remaining = most effective = best choice',
      },
      {
        label: 'h',
        text: 'A tank with no nitrate at all can starve helpful bacteria. Manufacturers recommend a larger amount of filter medium for larger aquariums. **Suggest** why the recommended amount of filter medium increases with the size of the aquarium.',
        marks: 1,
        ph: 'Larger aquarium holds more water with more total NO₃⁻ ions, so more filter medium is needed to remove them all',
      },
    ],
  },

  // ─── Q5: Car underbody panels & acidic road brine — Crit B design (20m, Crit B)
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'In cold countries, roads are gritted with salt in winter. The salty, slightly acidic spray thrown up under cars attacks the metal underbody, causing rust that can write a vehicle off. A car designer is choosing which panel material to use for the underbody, and needs to know how fast each material reacts with the acidic spray.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'How fast do candidate underbody materials react with acid?',
        mode: 'bars',
        variable: 'Panel material',
        metric: 'Mass lost in 10 min with 1 mol dm⁻³ acid / g',
        bars: [
          { label: 'mild steel', value: 13 },
          { label: 'aluminium', value: 4 },
          { label: 'galvanised steel', value: 6 },
          { label: 'stainless steel', value: 1 },
          { label: 'magnesium alloy', value: 18 },
        ],
        note: 'A larger mass loss means the material reacts faster with the acidic spray — a worse choice for an underbody panel.',
      },
      caption: 'Preliminary screening: the taller the bar, the more the panel is eaten away by acidic road spray.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The designer dropped acid onto a mild-steel panel and saw bubbles rise from the surface. **Select** how you can tell a chemical reaction has taken place.',
        marks: 1,
        ph: 'Bubbles of gas given off (effervescence)',
        widget: 'radio_select',
        widgetOptions: ['Bubbles of gas given off', 'Change in size', 'Change in temperature', 'Change in mass'],
      },
      {
        label: 'b',
        text: 'You are given a (10 cm × 10 cm) sample of each candidate material (mild steel, aluminium, galvanised steel, stainless steel, magnesium alloy) to model its rate of reaction with acidic road spray using 1 mol dm⁻³ hydrochloric acid. **Design** an experiment that will determine the rate of reaction of the acid with each type of material. In your answer you should include:\n• the independent variable, the dependent variable and two additional control variables\n• a list of equipment you will use\n• details of your method\n• details of the data you will collect\n• how you will ensure that your method is safe.',
        marks: 18,
        ph: 'IV=type of material; DV=rate of reaction (mass lost / gas volume / time); CVs=volume of acid + temperature; equipment + safe method + repeats',
      },
      {
        label: 'c',
        text: 'Different countries have different winters. A material suitable in one place may not suit another. **Suggest** a different independent variable linked to climate that could be investigated.',
        marks: 1,
        ph: 'Temperature of acid / concentration of acid / salt concentration of brine / number of freeze-thaw or wet-dry cycles',
      },
    ],
  },

  // ─── Q6: Buried steel pipeline & soil acidity — Crit C corrosion graph (13m, Crit C)
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrochemistry & Data Analysis',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 13,
    stem: 'Underground steel pipelines that carry water and gas slowly corrode in the soil around them. Corrosion is faster where the soil water is more acidic, for example near industrial sites. An engineer models this by burying clean iron nails in soil water of different acid concentrations and measuring how much mass each nail loses after 7 days.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Mass lost by a buried iron nail vs acid concentration of soil water',
        mode: 'scatter',
        lineOfBestFit: true,
        xLabel: 'Acid concentration / mol dm⁻³',
        yLabel: 'Average mass lost / mg',
        xAxis: { label: 'Acid concentration / mol dm⁻³', min: 0, max: 1, tick: 0.1 },
        yAxis: { label: 'Average mass lost / mg', min: 0, max: 100, tick: 10 },
        scatterPoints: [
          { x: 0, y: 9 },
          { x: 0.2, y: 28 },
          { x: 0.4, y: 47 },
          { x: 0.6, y: 66 },
          { x: 0.8, y: 88 },
        ],
        note: 'Drag the cursor to read a value. The more acidic the soil water, the more the iron nail corrodes.',
      },
      caption: 'Five trials at different acid concentrations. Read the trend and find the purpose of the 0 mol dm⁻³ trial.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Plot** a graph of acid concentration and average mass lost. You should include a line of best fit.\n\nData — acid concentration / mol dm⁻³ then average mass lost / mg: 0 → 9; 0.2 → 28; 0.4 → 47; 0.6 → 66; 0.8 → 88.',
        marks: 6,
        ph: 'x=acid concentration/mol dm⁻³; y=mass lost/mg; 5 points; line of best fit; axes labelled with units',
      },
      {
        label: 'b',
        text: '**Describe** the trend shown in the data in part (a). **Suggest** the purpose of the trial at 0 mol dm⁻³ acid concentration.',
        marks: 3,
        ph: 'As acid concentration increases, mass lost increases (positive correlation). 0 mol dm⁻³ = control/baseline showing corrosion in neutral soil water for comparison.',
      },
      {
        label: 'c',
        text: 'Before their investigation, the engineer wrote the following hypothesis:\n"If the acid concentration increases, then less mass will be lost from the nail after 7 days because the acid forms a protective coating on the iron."\n\n**Evaluate** the validity of this hypothesis using the data in part (a).',
        marks: 3,
        ph: 'Hypothesis is INVALID. Data shows MORE mass lost as acid concentration increases (positive relationship). Reasoning is also incorrect — acid attacks/dissolves the iron, it does not form a protective coating.',
      },
      {
        label: 'd',
        text: 'The engineer used iron nails buried in soil water to model a steel pipeline. **Suggest** why nails were used to model a pipeline.',
        marks: 1,
        ph: 'Standardised size/shape; same base metal (iron/steel) as pipeline; easier to measure mass change; cheaper than real pipe section',
      },
    ],
  },

  // ─── Q7: Medical radioisotope hospital delivery — Crit D (10m, Crit D)
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Chemistry, Energy & Environmental Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'Fossil fuels have powered everyday life but harm the environment, so alternatives are needed — and the same nuclear reactors that can generate electricity also make life-saving medicines. Molybdenum-99 is produced by nuclear fission in a reactor and decays into technetium-99m, the radioisotope used in millions of hospital scans each year. Because it decays so fast, it must be rushed from the reactor to hospitals.',
    artefact: {
      component: 'DecaySim',
      data: {
        title: 'Radioactive decay of technetium-99m used in hospital scans',
        isotope: 'Technetium-99m',
        daughter: 'Technetium-99',
        decayMode: 'gamma',
        halfLife: 6,
        units: 'hours',
        initialCount: 1000,
        axisMax: 30,
        xAxis: 'Time / hours',
        yAxis: 'Tc-99m nuclei remaining',
      },
      caption: 'Technetium-99m decays fast: scrub the time slider to see that about half is gone every 6 hours, so it must be delivered to hospitals quickly.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Energy can come from renewable sources such as solar and wind, or non-renewable sources such as fossil fuels. In addition to being renewable or non-renewable, **state** one other difference between these two types of energy source.',
        marks: 1,
        ph: 'Renewable sources do not produce CO₂/greenhouse gases; non-renewable produce CO₂ and pollutants (or: non-renewable will run out)',
      },
      {
        label: 'b',
        text: 'Molybdenum-99 is made by nuclear fission. Nuclear fission happens when a neutron collides with a uranium-235 nucleus, producing an unstable nucleus that splits into two smaller atoms and releases energy. Additional neutrons are also released, which can start new fission reactions. **Describe** the chain reaction of nuclear fission shown in the simulation. In your answer you should include:\n• what causes the nucleus to become unstable\n• what is released when the nucleus splits\n• how a chain reaction occurs.',
        marks: 3,
        ph: 'Neutron hits U-235 nucleus → unstable → splits into 2 smaller nuclei + 2-3 neutrons + energy → those neutrons hit more nuclei → chain reaction',
      },
      {
        label: 'c',
        text: 'Technetium-99m must be transported from the reactor to hospitals across the country. Methods include road, rail, river and air. **Discuss** the considerations when choosing a method of transport. In your answer you should include:\n• what risks are involved when transporting the radioactive isotope\n• what precautions should be taken when using each method of transport\n• a conclusion with justification of which is the safest method of transport.',
        marks: 6,
        ph: 'Risks: radiation exposure to staff/public, leak/accident/contamination, isotope decays so speed matters. Precautions: lead-lined sealed containers, fast routes, monitoring, trained staff. Conclusion: road (fast, flexible, door-to-door) or air for long distance, with justification.',
      },
    ],
  },

  // ─── Q8: Ocean-floor subduction vs dry-cask surface storage — Crit D essay (13m, Crit D)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Waste, Ethics & Societal Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 13,
    stem: 'High-level radioactive waste from nuclear power stations stays dangerous for thousands of years and must be disposed of safely. Two methods have been proposed. In subduction-zone disposal, the waste is sealed in containers and placed on the deep ocean floor where one tectonic plate slides beneath another, so that over millions of years the waste is dragged down into the Earth\'s mantle. In dry-cask surface storage, the waste is sealed in thick steel-and-concrete casks that sit on a guarded concrete pad above ground, where they can be watched and cooled by air.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Disposal method', 'Set-up cost', 'Risk to living things', 'Permanence'],
        rows: [
          ['Subduction-zone (ocean floor)', 'High', 'High — leaks would contaminate the deep ocean and food chains', 'Permanent over millions of years if it works'],
          ['Dry-cask surface storage', 'Lower', 'Low if guarded — exposed to accidents, attack and weather', 'Temporary — casks need replacing and watching'],
        ],
      },
      caption: 'Compare the two proposed disposal methods before evaluating one of them.',
    },
    tasks: [
      {
        label: '',
        text: '**Using** the information above, **discuss and evaluate** one of the two methods for the disposal of radioactive waste. In your answer you should include:\n• the effects of either subduction-zone disposal or dry-cask surface storage on living things\n• the economic impact\n• a justification of your opinion on which is the best method for disposing of radioactive waste.',
        marks: 13,
        ph: 'Subduction: leak risk contaminates deep ocean/food chains, very slow, hard to monitor or retrieve; economic: high placement cost. Dry-cask: cheaper, watchable and coolable, but only temporary and exposed to accidents/attack/weather, needs ongoing guarding. Justified conclusion (either way) with reasoning.',
      },
    ],
  },
]
