import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2021-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Nebulae & moons, atomic structure ─────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & periodic table — nebulae',
    marks: 9,
    stem: 'Scientists study stellar nebulae and planetary moons to understand how elements form in the universe. Moons around gas giants contain oxygen (O), sulfur (S) and nickel (Ni). Their icy plumes and atmospheres contain argon (Ar), chlorine (Cl₂) and nitrogen dioxide (NO₂).',
    tasks: [
      {
        label: 'a',
        text: '**Select** the number of electrons in the outer shell of an atom of oxygen.',
        marks: 1,
        ph: 'Outer shell electrons for O',
        widget: 'radio_select',
        widgetOptions: ['2', '4', '6', '8'],
      },
      {
        label: 'b',
        text: 'Using the periodic table, **state** the group and period of sulfur.\n\nGroup:\n\nPeriod:',
        marks: 2,
        ph: 'Group 6, Period 3 for S',
      },
      {
        label: 'c',
        text: '**Select** the region of the periodic table where nickel is located.',
        marks: 1,
        ph: 'Select periodic table region for Ni',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'd',
        text: 'Some of the major components of moon atmospheres and plumes are argon (Ar), chlorine (Cl₂) and nitrogen dioxide (NO₂). **Explain** why chlorine occurs as diatomic molecules, but argon does not.',
        marks: 4,
        ph: 'Cl needs 1 more electron to fill outer shell; Ar has full outer shell already',
      },
      {
        label: 'e',
        text: '**Select** the diagram that shows the Lewis structure (electron dot or dot cross diagram) of chlorine, Cl₂.',
        marks: 1,
        ph: 'Select correct Lewis structure for Cl₂',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
    ],
  },

  // ── Q2 (12 marks, Crit A) — Nitrogen on Mars, isotopes, catalysts ─────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Isotopes, reactions & catalysts — Mars',
    marks: 12,
    stem: 'Scientists are exploring Mars for signs of past or present life. Mars has a thin atmosphere containing nitrogen (N₂) and traces of nitrogen dioxide (NO₂). Nitrogen itself is not a reliable sign of life because it forms through lightning and atmospheric chemistry. The Martian atmosphere contains isotopes of nitrogen.',
    tasks: [
      {
        label: 'a',
        text: 'Nitrogen occurs as a mixture of isotopes, including one with 7 protons and 8 neutrons. **Calculate** the mass number of this nitrogen isotope.',
        marks: 2,
        ph: 'Mass number = protons + neutrons; 7 + 8',
      },
      {
        label: 'b',
        text: 'Nitrogen gas has been detected in the Martian atmosphere. **Suggest** why the presence of nitrogen does not necessarily indicate the presence of life.',
        marks: 1,
        ph: 'N₂ can form through non-biological processes such as lightning',
      },
      {
        label: 'c',
        text: '**Calculate** the relative molecular mass of nitrogen dioxide (NO₂) containing nitrogen-15 and oxygen-16 only.',
        marks: 1,
        ph: 'Add: 15 + 16 + 16',
      },
      {
        label: 'd',
        text: 'Traces of acidic gases dissolve in Martian ice. A scientist uses two indicators to determine the pH of an ice-melt solution.\n\nThe chart shows the colour changes for two indicators, indicator A and indicator B.\n\nUse information from the chart to **determine** the **range** of pH possible for the Martian ice-melt solution.',
        marks: 2,
        ph: 'Read overlap region of indicators; range 6.5 to 9.0',
      },
      {
        label: 'e',
        text: 'There is evidence of photochemical reactions in the Martian upper atmosphere:\n\n2NO₂(g) → 2NO(g) + O₂(g)\n\n**Suggest** why the rate of this reaction increases when Mars is closer to the Sun during certain points in its orbit.',
        marks: 2,
        ph: 'More solar energy → higher temperature → greater number of successful collisions',
      },
      {
        label: 'f',
        text: 'Nitric oxide (NO) can react with ozone in the presence of a catalyst:\n\nNO(g) + O₃(g) → NO₂(g) + O₂(g)\n\n**Outline** the role of a catalyst in a chemical reaction.',
        marks: 2,
        ph: 'Catalyst provides alternative lower activation energy pathway; not consumed',
      },
      {
        label: 'g',
        text: 'Space agencies have sent multiple rovers to Mars to study its geology and atmosphere. **Suggest** two reasons why scientists are interested in exploring Mars.',
        marks: 2,
        ph: 'Search for signs of ancient microbial life; study planet formation; future human settlement',
      },
    ],
  },

  // ── Q3 (16 marks, Crit A/B/C) — Propane camping stove / heptane ──────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'States of matter, combustion & data analysis — heptane fuel',
    marks: 16,
    stem: 'Scented pillar candles made with bergamot and lavender fragrances are popular in aromatherapy. One common hydrocarbon component of candle wax blends is heptane, C₇H₁₆. Scientists study how different additives affect candle burn time.',
    tasks: [
      {
        label: 'a',
        text: 'Several changes occur when a candle burns.\n\n**Select** the state of the wax at A and B in the diagram above.',
        marks: 2,
        ph: 'A = liquid melted wax pool; B = gas (vapour) rising to flame',
        widget: 'inline_dropdown_select',
        widgetItems: ['A', 'B'],
        widgetOptions: ['Solid', 'Liquid', 'Gas'],
      },
      {
        label: 'b',
        text: 'Candle wax blends contain hydrocarbons. One component is heptane, C₇H₁₆. **State** the name and chemical class of C₇H₁₆.\n\nName:\n\nChemical class:',
        marks: 2,
        ph: 'Heptane; Alkane',
      },
      {
        label: 'c',
        text: '**Select** numbers to balance the equation showing complete combustion of C₇H₁₆.\n\n[?] C₇H₁₆(g) + [?] O₂(g) → [?] CO₂(g) + [?] H₂O(g)',
        marks: 2,
        ph: 'Coefficients: 1, 11, 7, 8',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      },
      {
        label: 'd',
        text: 'A student compared scented candles burned in a draught compared to still air.\n\n**Formulate** a hypothesis for the student\'s question.\n\nIf the candle is burned in a draught then the time taken to burn will [blank] because:',
        marks: 3,
        ph: 'decrease; draught increases O₂ supply and dissipates heat faster',
        widget: 'fill_blank',
        widgetOptions: ['increase', 'decrease'],
      },
      {
        label: 'e',
        text: 'A student investigated the effect of wick thickness on how quickly a candle burns. Her processed data is shown in the table below.\n\n| Wick diameter / mm | Rate of wax combustion / g min⁻¹ |\n|---|---|\n| 0.5 | 0.0651 |\n| 1.0 | 0.0743 |\n| 1.5 | 0.0850 |\n| 2.0 | 0.0921 |\n| 2.5 | 0.105 |\n\n**State** the rate of wax combustion at a wick diameter of 2.0 mm in standard form.',
        marks: 1,
        ph: '9.21 × 10⁻² g min⁻¹',
      },
      {
        label: 'f',
        text: 'The student produced a graph of her results. **Identify** two errors in the presentation of the data in the graph above.',
        marks: 2,
        ph: 'Missing axis labels/units; bars should be line/scatter; no title/scale starts not at zero',
      },
      {
        label: 'g',
        text: 'The student repeated the experiment the following week. The equipment set up on each occasion was different: Week 1 used a sealed glass cloche; Week 2 used an open room.\n\n**Outline** why the sets of results are different and **suggest** how the **rate** of wax combustion would be affected.',
        marks: 4,
        ph: 'Sealed cloche restricts O₂; rate decreases; open room maintains O₂; rate higher',
      },
    ],
  },

  // ── Q4 (10 marks, Crit B/C) — Bergamot vs lavender candles ──────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Investigation variables & data evaluation — scented candles',
    marks: 10,
    stem: 'A student compared two pillar candles: one fragranced with bergamot and one fragranced with lavender.\n\nBergamot candle (in glass jar): 190 g; trials 25.0, 30.3, 26.0 hours; average 27.1 hours.\nLavender candle (in tin): 130 g; trials 33.0, 34.5, 33.0 hours; average not shown.',
    tasks: [
      {
        label: 'a',
        text: '**State** the independent variable and the dependent variable in **this** investigation.\n\nIndependent variable:\n\nDependent variable:',
        marks: 2,
        ph: 'IV = fragrance type; DV = burn time/duration',
      },
      {
        label: 'b',
        text: '**Calculate** the average burn time for the lavender candle.',
        marks: 2,
        ph: '(33.0 + 34.5 + 33.0) ÷ 3 = 33.5 hours',
      },
      {
        label: 'c',
        text: 'The student\'s friend examined the data and suggested that the average burn time for the bergamot candle should be 25.5 hours and not 27.1 hours. **Suggest** a reason for this different average time.',
        marks: 1,
        ph: 'Friend excluded the outlier 30.3 hours from the bergamot data',
      },
      {
        label: 'd',
        text: 'The student hypothesized that the lavender candle would last longer because it had a higher fragrance load. Use the data in the tables above part (a) to **evaluate** the validity of the student\'s hypothesis.',
        marks: 3,
        ph: 'Not valid; different containers, different masses of wax — not a controlled comparison',
      },
      {
        label: 'e',
        text: '**Suggest** one improvement to increase the validity of the method. **Justify** your answer.\n\nImprovement:\n\nJustification:',
        marks: 2,
        ph: 'Use identical containers and same mass of wax; ensures fair test with one variable changing',
      },
    ],
  },

  // ── Q5 (12 marks, Crit A/B/C/D) — Sugarcane bagasse & biomass ───────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Separation, energy & green chemistry — sugarcane',
    marks: 12,
    stem: 'Sugarcane bagasse is the fibrous residue left after crushing sugarcane to extract juice. Approximately 180 million tonnes of bagasse are produced annually. The first stage of processing bagasse into solid fuel involves treating it with chlorine gas (Cl₂) as a bleaching agent. The mixture is then filtered to remove the chlorinated lignin fraction.',
    tasks: [
      {
        label: 'a',
        text: '**Organise** the equipment below to show how to separate the solid and liquid fractions from the bagasse/solvent mixture.\n\nNote: the filter funnel stand is already provided; drag the filter paper and correct beaker to complete the setup.',
        marks: 2,
        ph: 'Drag filter paper into funnel; beaker underneath to collect filtrate',
      },
      {
        label: 'b',
        text: 'Chlorine gas (Cl₂) is used as the bleaching agent. **Select** the hazard symbol for chlorine gas.',
        marks: 1,
        ph: 'Cl₂ is toxic — select toxic/skull symbol',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'Once the bagasse has been processed, the solid fraction can be pressed into fuel pellets. The table below shows data for different forms of biomass compared with eucalyptus biochar pellets.\n\n| Biomass | Energy / MJ tonne⁻¹ |\n|---|---|\n| Eucalyptus | 18 500 |\n| Coconut shell | 17 200 |\n| Sugarcane bagasse | 16 000 |\n| Corn cob | 13 500 |\n| Rice husk | 12 800 |\n\n**Plot** the energy content of biomass fuels data shown in the table. You should **label** the axes and use the tools in the drawing palette to create your graph.',
        marks: 6,
        ph: 'Bar chart; x=biomass type; y=energy/MJ tonne⁻¹; scale from 0; all 5 bars correct',
      },
      {
        label: 'd',
        text: 'The bagasse fuel pellets are burned to produce heat energy. **Select** the type of process used to produce energy.',
        marks: 1,
        ph: 'Burning releases energy — exothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Photosynthesis', 'Fermentation'],
      },
      {
        label: 'e',
        text: '**Suggest** why it is important to recycle sugarcane bagasse. **Justify** your answer.',
        marks: 2,
        ph: 'Reduces agricultural waste; renewable fuel reduces fossil fuel consumption and carbon emissions',
      },
    ],
  },

  // ── Q6 (16 marks, Crit B) — Design: biomass fuel pellet energy density ────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design (biomass fuel energy density)',
    marks: 16,
    stem: 'Different biomass fuel pellets release different amounts of energy when burned. Energy density can be determined by measuring the temperature increase of a known mass of water. The diagram shows two ways to set up equipment to determine the energy density of a fuel. A student wants to investigate the energy density of five types of biomass pellet: eucalyptus, coconut shell, sugarcane bagasse, corn cob and rice husk.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which type of biomass pellet has the highest energy density. In your answer, you should include:\n- an identification of the independent, dependent and two control variables\n- a justification of which equipment set-up you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables, set-up justification, method, safety for biomass energy density experiment',
      },
    ],
  },

  // ── Q7 (12 marks, Crit C/D) — Global water consumption & filtration ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water purification & filtration evaluation — biosand vs RO',
    marks: 12,
    stem: 'Global water consumption has changed dramatically over the last 120 years. The graph shows the change in water consumption for each region during this period.',
    figImages: ['/images/papers/chemistry-may-2021/page-28.png'],
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **identify** the region that had the second highest water consumption in 2020.',
        marks: 1,
        ph: 'Read graph values in 2020; second highest = North America',
      },
      {
        label: 'b',
        text: 'Use the graph to **state** the water consumption in Europe in 1950.',
        marks: 2,
        ph: 'Read graph at 1950 for Europe; ~500 ± 50 billion m³',
      },
      {
        label: 'c',
        text: '**Suggest** a reason why the water consumption in Asia increased dramatically after 1960.',
        marks: 1,
        ph: 'Rapid population growth and agricultural expansion in Asia after 1960',
      },
      {
        label: 'd',
        text: 'Rajan and Maya live near a borehole in a rural area. They are choosing between a biosand filter and a reverse osmosis (RO) filter to make their water safe for drinking.\n\n| Feature | Biosand filter | RO filter |\n|---|---|---|\n| Cost of unit / US$ | 50 | 200 |\n| Cost of filters / US$ | 0 | 45 |\n| Filter life / months | 24+ | 12 |\n| Water flow / dm³ min⁻¹ | 0.4–0.6 | 1.5–2.0 |\n| Filter pore size / μm | 0.1–1.0 | 0.0001 |\n| Operating temp / °C | 15–35 | 5–45 |\n\n**Select** the most important feature of the filter that is needed in a filtration device. **Justify** your answer.\n\nJustification:',
        marks: 2,
        ph: 'Pore size — must be small enough to remove bacteria, viruses and contaminants',
        widget: 'radio_select',
        widgetOptions: ['Cost of unit', 'Filter life span', 'Pore size', 'Water flow rate'],
      },
      {
        label: 'e',
        text: 'Using the information in the table above, **explain** the advantages and disadvantages of using a biosand filter compared to a reverse osmosis filter, when obtaining water from a borehole. In your answer, you should:\n- describe the advantages and disadvantages of the biosand filter compared to the RO filter\n- justify which would be the most suitable filter for Rajan and Maya.',
        marks: 6,
        ph: 'Biosand: cheaper, no replacement cost, longer life but slower flow and larger pore size; RO: removes viruses but expensive',
      },
    ],
  },

  // ── Q8 (13 marks, Crit D) — Industrial water treatment evaluation ─────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Industrial water treatment for riverside city',
    marks: 13,
    stem: 'City planners near a large river are expanding an industrial district over the next decade. The district processes chemicals and produces pharmaceutical waste, which releases organic solvents, hormones and heavy metals (mercury, arsenic) into local waterways. Three water treatment technologies are being considered for the main municipal plant: flocculation/sedimentation, UV disinfection, and ion exchange.\n\nUsing your knowledge of water purification techniques and your wider MYP studies, discuss and evaluate the different technologies available. In your answer, you should include:\n- a comparison of the economic implications of each of the three technologies\n- an example of the environmental impact of each of the three technologies\n- an outline of the social aspects of building and running a water purification facility\n- an appraisal of which technology would not be suitable for this district.',
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the different technologies available for water treatment for the riverside pharmaceutical district.',
        marks: 13,
        ph: 'Economic/environmental/social comparison; identify unsuitable technology; justified appraisal',
      },
    ],
  },
]
