import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2024 · VARIANT 1  (isomorphic to chemistry-nov-2024)
// Every question re-tests the SAME construct (crit, command term = first bold
// word, marks, task structure, widget type/counts, tags) in a NEW real-world
// context, with a self-contained DATA-DRIVEN INTERACTIVE artefact on EVERY
// question (no external image files, no markdown tables). Answers recomputed.
//   Q1 States/distillation/structure/Mr:  alchemy/aqua-regia → lavender perfumery (steam distillation); ethanol → propan-1-ol; FeSO₄ → CuSO₄
//   Q2 Bonding/gas-out/stoichiometry:      CO₂/champagne/methanol → SO₂/sparkling water/sulfur-trioxide contact process
//   Q3 Periodic/noble gases/oxidation:     food packaging/argon bulb → diving gas mixes / helium party-balloon hazard
//   Q4 Crit B fluoride investigation:      tooth fillings/F⁻ → hard-water scale / Ca²⁺ ion exchange resins
//   Q5 Crit B acid-rain design:            recycled roofing + HCl → seashore sea-wall blocks + sulfuric acid
//   Q6 Crit C corrosion graph:             electroplated cutlery + NaCl → ship-hull sacrificial anodes + seawater salinity
//   Q7 Crit D nuclear fission/transport:   nuclear waste by road/rail → fusion-reactor tritium fuel delivery
//   Q8 Crit D waste-disposal evaluation:   sea dumping vs underground → space disposal vs deep-borehole storage
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
  id: 'chemistry-nov-2024-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Lavender perfumery — distillation, propan-1-ol, copper sulfate (9m, Crit A)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Perfume Distillation, Organic Structures & States of Matter',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'A traditional perfume house extracts fragrance from freshly cut lavender flowers. Steam is passed through the flowers, picking up the scented oil as a vapour. The mixture of vapours is then cooled and collected. The same separation technique — distillation — has been used by perfumers for centuries to purify the alcohols and oils that carry a scent.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Particle model along the still: X → Y → Z',
        mode: 'states',
        substance: 'lavender water',
        states: ['X — liquid in flask', 'Y — vapour in still head', 'Z — condensed liquid'],
        particleCount: 36,
      },
      caption: 'Step through the stages: X = hot liquid in the flask, Y = scented vapour rising through the still head, Z = the cooled, condensed distillate. Watch how the particle arrangement and motion change.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the region of the periodic table where copper, used to make the still, can be found.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'b',
        text: 'Perfumers separate scented oils from water using distillation. **Select** the property that allows the oil and water to be separated by distillation.',
        marks: 1,
        ph: 'Different boiling points',
        widget: 'radio_select',
        widgetOptions: ['Different densities', 'Different boiling points', 'Different solubilities', 'Different melting points'],
      },
      {
        label: 'c',
        text: '**Describe** the state changes that take place from X to Y and from Y to Z on the distillation diagram. Use particle theory in your answer.',
        marks: 4,
        ph: 'X to Y: liquid evaporates (particles gain energy, escape as gas); Y to Z: gas condenses (particles lose energy, return to liquid)',
      },
      {
        label: 'd',
        text: 'The alcohol propan-1-ol is used to dissolve perfume oils. **Select** the diagram showing the structure of propan-1-ol.',
        marks: 1,
        ph: 'C — CH₃CH₂CH₂OH: three carbons in a chain, ending in an OH group',
        widget: 'radio_select',
        widgetOptions: [
          'A — CH₃OH (one carbon, ends in OH)',
          'B — CH₃CH₂OH (two carbons, ends in OH)',
          'C — CH₃CH₂CH₂OH (three carbons, ends in OH)',
          'D — CH₃CH₂CH₃ (three carbons, no OH)',
        ],
      },
      {
        label: 'e',
        text: 'The blue dye copper(II) sulfate (CuSO₄) is sometimes added to scented crystals as a colourant. **Calculate** the formula mass for CuSO₄. (Ar: Cu = 64, S = 32, O = 16)',
        marks: 2,
        ph: 'Mr = 64 + 32 + 4(16) = 160 g/mol',
        widget: 'fill_blank',
      },
    ],
  },

  // ─── Q2: Contact process — SO₂ bonding, sparkling water, sulfur trioxide synthesis, catalyst (11m, Crit A)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Covalent Bonding, Moles & Rates of Reaction',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 11,
    stem: 'Sulfur dioxide (SO₂) has many uses: as a preservative in dried fruit and wine, as a bleach for paper, and as the starting material for making sulfuric acid. SO₂ is a gas at room temperature with a boiling point of −10 °C. When dissolved under pressure it gives drinks a sharp, tangy taste, just as carbon dioxide makes water sparkle.',
    artefact: {
      component: 'GasLawSim',
      data: {
        title: 'SO₂ dissolved in a sealed bottle of sparkling water under pressure',
        vessel: 'sealed bottle (gas + liquid)',
        coupling: 'More dissolved SO₂ stays in solution at higher pressure; releasing the pressure lets the gas escape as bubbles.',
        massSlider_kg: [0, 0.5, 1.0, 1.5, 2.0],
        pvUnit: 'kPa·cm³',
      },
      caption: 'Load the plunger to raise the pressure: dissolved gas stays in solution. Release it and the gas comes out — exactly what happens when a bottle is opened.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonding in a molecule of sulfur dioxide.',
        marks: 1,
        ph: 'Covalent bonding',
        widget: 'radio_select',
        widgetOptions: ['Ionic bonding', 'Covalent bonding', 'Metallic bonding', 'Hydrogen bonding'],
      },
      {
        label: 'b',
        text: 'SO₂ is dissolved in some sparkling drinks under high pressure. **Explain** why the cap fizzes and sprays when a warm bottle of sparkling water is opened. In your answer include why bubbles are seen.',
        marks: 3,
        ph: 'Pressure drops on opening; dissolved gas comes out of solution; bubbles of gas form; expanding gas pushes liquid/spray out',
      },
      {
        label: 'c',
        text: 'In the contact process, sulfur dioxide is converted to sulfur trioxide (SO₃), which is then used to make sulfuric acid. The reaction is:\n\n2SO₂(g) + O₂(g) → 2SO₃(g)\n\n**Calculate** the mass of sulfur trioxide (SO₃) that can be produced from 384 g of SO₂. Give your answer in grams in standard form. (Ar: S = 32, O = 16)',
        marks: 4,
        ph: 'n(SO₂)=384/64=6.00mol; ratio 2:2 so n(SO₃)=6.00mol; m=6.00×80=480g=4.80×10² g',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'The contact process uses a vanadium(V) oxide catalyst. **Explain** how a catalyst works to increase the rate of sulfur trioxide production.',
        marks: 3,
        ph: 'Catalyst provides alternative reaction pathway with lower activation energy; more particles have sufficient energy; more successful collisions per second; rate increases',
      },
    ],
  },

  // ─── Q3: Diving gas mixes & helium balloons — noble gases, periodicity, oxidation (8m, Crit A)
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Noble Gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 8,
    stem: 'Some gases are very unreactive. Divers breathe special gas mixtures to stay safe at depth, and unreactive gases are also used to fill balloons, lasers and lighting. Choosing the right gas depends on its position in the periodic table and how it reacts — or does not react — with other substances.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Noble gas', 'Group', 'Period', 'Electron configuration', 'Typical use'],
        rows: [
          ['Helium (He)', '18', '1', '2', 'deep-diving gas mix, balloons'],
          ['Neon (Ne)', '18', '2', '2.8', 'bright signs and lighting'],
          ['Argon (Ar)', '18', '3', '2.8.8', 'lasers, welding shields'],
          ['Krypton (Kr)', '18', '4', '2.8.18.8', 'high-performance lamps'],
        ],
      },
      caption: 'All noble gases sit in Group 18 with a full outer shell — read off the group, period and electron configuration for each gas.',
    },
    tasks: [
      {
        label: 'a',
        text: 'When iron diving equipment is left wet in sea air, it slowly turns orange-brown. **Select** which gas in air causes iron to rust.',
        marks: 1,
        ph: 'Oxygen',
        widget: 'radio_select',
        widgetOptions: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
      },
      {
        label: 'b',
        text: 'Helium is added to deep-diving gas mixtures, and neon is used in bright signs. **State** the correct group for helium and the correct period for neon.',
        marks: 2,
        ph: 'Helium group = 18 (accept 0); Neon period = 2',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Explain** why helium does not form compounds. Use the electronic configuration of helium in your answer.',
        marks: 3,
        ph: 'Helium electron config = 2; full outer shell; no tendency to gain/lose/share electrons; does not bond',
      },
      {
        label: 'd',
        text: 'A child\'s helium party balloon is sometimes mistakenly filled with hydrogen instead, because hydrogen is cheaper. Near a flame, a hydrogen balloon explodes but a helium balloon does not. **Outline** why the hydrogen balloon explodes but the helium balloon does not.',
        marks: 2,
        ph: 'Hydrogen is flammable/reactive — reacts with oxygen exothermically near flame, rapid gas expansion → explosion; helium is inert/unreactive so does not burn',
      },
    ],
  },

  // ─── Q4: Hard-water scale & ion-exchange resins — Crit B investigation (16m, Crit B)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Ionic Compounds',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 16,
    stem: 'In areas with hard water, dissolved calcium ions (Ca²⁺) build up as limescale inside kettles, pipes and washing machines, shortening their life. Water-softening materials remove these ions. Different softening resins are sold, and a student wants to find out which resin removes calcium ions from hard water most effectively.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Softening resin', 'Trial 1 conductivity / mg dm⁻³', 'Trial 2 / mg dm⁻³', 'Trial 3 / mg dm⁻³'],
        rows: [
          ['Resin A', '88', '90', '89'],
          ['Resin B', '72', '70', '71'],
          ['Resin C', '54', '155', '57'],
          ['Resin D', '40', '42', '41'],
        ],
      },
      caption: 'Conductivity of the hard water after 10 minutes with each resin (lower = more Ca²⁺ removed). One value is anomalous.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wanted to investigate which softening resin removes Ca²⁺ ions from hard water most effectively. **State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of type of softening resin on the conductivity (Ca²⁺ concentration) of hard water after 10 minutes?',
      },
      {
        label: 'b',
        text: 'A conductivity meter measures the change in concentration of Ca²⁺ ions. The student uses hard water with a known concentration of Ca²⁺ ions with each resin and measures how the conductivity changes after 10 minutes. **Identify** the independent variable, the dependent variable and two control variables in this investigation.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=type of softening resin; DV=conductivity/Ca²⁺ concentration; CV=time (10 min); CV=initial volume/concentration of hard water',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: 'A second student repeated the investigation but only took a reading at the end (using a single conductivity reading, with no initial measurement). **Comment** on the validity of the second student\'s method compared with that of the first student. **Justify** your answer.',
        marks: 2,
        ph: 'Second method less valid; cannot measure initial conductivity; cannot determine change in Ca²⁺ concentration',
      },
      {
        label: 'd',
        text: 'Boiling is another way to reduce hardness. The student wonders whether boiling the water before adding a resin removes even more calcium. **Formulate** a testable hypothesis to determine if boiling then using a resin is more effective than using a resin alone. If… Then… Because…',
        marks: 3,
        ph: 'If hard water is boiled before adding resin, then conductivity falls further, because boiling precipitates some Ca²⁺ as scale so fewer ions remain for the resin to remove',
      },
      {
        label: 'e',
        text: 'The students tested each resin three times, as shown in the table. **Identify** the anomalous result. **Suggest** an experimental reason that may have produced this result.',
        marks: 2,
        ph: 'Anomaly = Resin C Trial 2 (155 mg dm⁻³, far higher than 54 and 57). Reason: contamination, fresh hard water not used, resin not added, or measurement/recording error.',
      },
      {
        label: 'f',
        text: '**Calculate** the average conductivity after 10 minutes for Resin C. Give your answer to an appropriate number of significant figures and include the unit. (Exclude any anomalous result.)',
        marks: 2,
        ph: 'Exclude 155; average = (54 + 57)/2 = 55.5 ≈ 56 mg dm⁻³',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Use** the data in part (f) and the table to justify the best choice of softening resin.',
        marks: 1,
        ph: 'Resin D gives the lowest conductivity (≈41 mg dm⁻³) = fewest Ca²⁺ ions remaining = most effective softening = best choice',
      },
      {
        label: 'h',
        text: 'Very soft water (almost no Ca²⁺) can taste flat and may not supply calcium the body needs. Manufacturers recommend a larger dose of resin for larger washing machines. **Suggest** why the recommended dose of resin increases with the size of the machine.',
        marks: 1,
        ph: 'Larger machine holds more water with more total Ca²⁺ ions, so more resin is needed to remove them all',
      },
    ],
  },

  // ─── Q5: Sea-wall blocks & sulfuric acid spray — Crit B design (20m, Crit B)
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Coastal towns build sea walls to protect against storms. The blocks are constantly attacked by salty spray and, near industrial ports, by acidic pollution that makes the spray more corrosive. An engineer is choosing which recycled building material to use for new sea-wall blocks, and needs to know how fast each material reacts with acid.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'How fast do candidate sea-wall materials react with acid?',
        mode: 'bars',
        variable: 'Building material',
        metric: 'Mass lost in 10 min with 1 mol dm⁻³ acid / g',
        bars: [
          { label: 'limestone', value: 14 },
          { label: 'concrete', value: 9 },
          { label: 'granite', value: 1 },
          { label: 'recycled brick', value: 5 },
          { label: 'sandstone', value: 7 },
        ],
        note: 'A larger mass loss means the material reacts faster with acid — a worse choice for a sea wall.',
      },
      caption: 'Preliminary screening: the taller the bar, the more the block is eaten away by acidic spray.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The engineer dropped acid onto a limestone block and watched it bubble and fizz. **Select** how you can tell a chemical reaction has taken place.',
        marks: 1,
        ph: 'Bubbles / gas given off (effervescence)',
        widget: 'radio_select',
        widgetOptions: ['Bubbles of gas given off', 'Change in size', 'Change in temperature', 'Change in mass'],
      },
      {
        label: 'b',
        text: 'You are given a (10 cm × 10 cm) sample of each candidate material (limestone, concrete, granite, recycled brick, sandstone) to model its rate of reaction with acidic spray using 1 mol dm⁻³ sulfuric acid. **Design** an experiment that will determine the rate of reaction of the acid with each type of material. In your answer you should include:\n• the independent variable, the dependent variable and two additional control variables\n• a list of equipment you will use\n• details of your method\n• details of the data you will collect\n• how you will ensure that your method is safe.',
        marks: 18,
        ph: 'IV=type of material; DV=rate of reaction (mass lost / gas volume / time); CVs=volume of acid + temperature; equipment + safe method + repeats',
      },
      {
        label: 'c',
        text: 'Different coastlines have different climates. A material suitable in one place may not suit another. **Suggest** a different independent variable linked to climate that could be investigated.',
        marks: 1,
        ph: 'Temperature of acid / concentration of acid / salt concentration of spray / number of freeze-thaw cycles',
      },
    ],
  },

  // ─── Q6: Ship-hull sacrificial anodes & seawater salinity — Crit C corrosion graph (13m, Crit C)
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrochemistry & Data Analysis',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 13,
    stem: 'Steel ship hulls corrode quickly in seawater. To protect them, engineers bolt on blocks of a more reactive metal called a sacrificial anode, which corrodes instead of the hull. A student models this by attaching a zinc block to an iron nail and measuring how much mass the zinc loses in salt water of different salinities after 7 days.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Mass lost by the zinc sacrificial anode vs seawater salinity',
        mode: 'scatter',
        lineOfBestFit: true,
        xLabel: 'Salinity / g dm⁻³',
        yLabel: 'Average mass lost / mg',
        xAxis: { label: 'Salinity / g dm⁻³', min: 0, max: 40, tick: 5 },
        yAxis: { label: 'Average mass lost / mg', min: 0, max: 90, tick: 10 },
        scatterPoints: [
          { x: 0, y: 8 },
          { x: 5, y: 20 },
          { x: 15, y: 44 },
          { x: 25, y: 60 },
          { x: 35, y: 84 },
        ],
        note: 'Drag the cursor to read a value. The more salt in the water, the more the zinc anode corrodes.',
      },
      caption: 'Five trials at different salinities. Read the trend and find the purpose of the 0 g dm⁻³ trial.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Plot** a graph of salinity and average mass lost. You should include a line of best fit.\n\nData — salinity / g dm⁻³ then average mass lost / mg: 0 → 8; 5 → 20; 15 → 44; 25 → 60; 35 → 84.',
        marks: 6,
        ph: 'x=salinity/g dm⁻³; y=mass lost/mg; 5 points; line of best fit; axes labelled with units',
      },
      {
        label: 'b',
        text: '**Describe** the trend shown in the data in part (a). **Suggest** the purpose of the trial at 0 g dm⁻³ salinity.',
        marks: 3,
        ph: 'As salinity increases, mass lost increases (positive correlation). 0 g dm⁻³ = control/baseline showing corrosion in salt-free water for comparison.',
      },
      {
        label: 'c',
        text: 'Before their investigation, the student wrote the following hypothesis:\n"If the salinity increases, then less mass will be lost from the zinc after 7 days because there are fewer ions to carry charge through the water."\n\n**Evaluate** the validity of this hypothesis using the data in part (a).',
        marks: 3,
        ph: 'Hypothesis is INVALID. Data shows MORE mass lost as salinity increases (positive relationship). Reasoning is also incorrect — higher salinity means MORE ions, faster corrosion.',
      },
      {
        label: 'd',
        text: 'The student used a zinc block on an iron nail to model a sacrificial anode on a ship hull. **Suggest** why nails were used to model a ship hull.',
        marks: 1,
        ph: 'Standardised size/shape; same base metal (iron/steel) as hull; easier to measure mass change; cheaper than real hull section',
      },
    ],
  },

  // ─── Q7: Fusion-reactor tritium fuel delivery — Crit D (10m, Crit D)
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Chemistry, Energy & Environmental Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'Fossil fuels have powered everyday life but harm the environment, so alternative energy sources are needed. One future option is nuclear fusion, in which small nuclei such as hydrogen isotopes are forced together to release energy. Fusion reactors need a supply of tritium, a radioactive form of hydrogen that must be delivered to the reactor and handled with great care.',
    artefact: {
      component: 'DecaySim',
      data: {
        title: 'Radioactive decay of tritium fuel',
        isotope: 'Tritium (H-3)',
        daughter: 'Helium-3',
        decayMode: 'beta',
        halfLife: 12,
        units: 'years',
        initialCount: 1000,
        axisMax: 60,
        xAxis: 'Time / years',
        yAxis: 'Tritium nuclei remaining',
      },
      caption: 'Tritium is radioactive: scrub the time slider to see that about half of it decays every 12 years, so the fuel cannot be stockpiled indefinitely and any leak releases radiation.',
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
        text: 'In a fusion reactor, two hydrogen isotopes — deuterium and tritium — are heated until their nuclei collide and join, forming helium and releasing a fast neutron and a large amount of energy. **Describe** the fusion reaction shown in the simulation. In your answer you should include:\n• what must happen for the nuclei to join\n• what is released when they fuse\n• why this releases energy.',
        marks: 3,
        ph: 'Nuclei need very high temperature/speed to overcome repulsion and collide → deuterium + tritium fuse → form helium + a neutron + energy; mass converted to energy / strong nuclear force binds the new nucleus',
      },
      {
        label: 'c',
        text: 'Tritium fuel must be transported from the production plant to the fusion reactor. Methods include road, rail, river and air. **Discuss** the considerations when choosing a method of transport. In your answer you should include:\n• what risks are involved when transporting radioactive tritium\n• what precautions should be taken when using each method of transport\n• a conclusion with justification of which is the safest method of transport.',
        marks: 6,
        ph: 'Risks: radiation leak/accident/contamination, tritium can be inhaled. Precautions: sealed/double containers, remote routes, trained staff, monitoring. Conclusion: rail/road with justification.',
      },
    ],
  },

  // ─── Q8: Space disposal vs deep-borehole storage — Crit D essay (13m, Crit D)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Waste, Ethics & Societal Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 13,
    stem: 'High-level radioactive waste from nuclear power stations stays dangerous for thousands of years and must be disposed of safely. Two methods have been proposed. In space disposal, the waste is sealed in containers and launched on rockets to be fired into the Sun or out of the Solar System. In deep-borehole storage, the waste is sealed in containers and lowered into boreholes drilled 3000 to 5000 metres into stable rock, then sealed with clay and cement to stop anything leaking back to the surface.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Disposal method', 'Set-up cost', 'Risk to living things', 'Permanence'],
        rows: [
          ['Space disposal (rocket)', 'Very high', 'High — a launch failure scatters waste over a wide area', 'Permanent if successful'],
          ['Deep-borehole storage', 'High', 'Low if sealed — small risk of groundwater contamination', 'Stable for thousands of years'],
        ],
      },
      caption: 'Compare the two proposed disposal methods before evaluating one of them.',
    },
    tasks: [
      {
        label: '',
        text: '**Using** the information above, **discuss and evaluate** one of the two methods for the disposal of radioactive waste. In your answer you should include:\n• the effects of either space disposal or deep-borehole storage on living things\n• the economic impact\n• a justification of your opinion on which is the best method for disposing of radioactive waste.',
        marks: 13,
        ph: 'Space: rocket-failure risk scatters waste/contaminates atmosphere; economic: extremely expensive per launch. Borehole: expensive to drill, long-term safe deep underground, small groundwater risk. Justified conclusion: deep-borehole better because far safer and cheaper than rockets despite cost.',
      },
    ],
  },
]
