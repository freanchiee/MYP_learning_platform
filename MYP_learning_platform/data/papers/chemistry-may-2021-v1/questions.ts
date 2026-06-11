import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2021-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Comets & asteroids, atomic structure ──────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & periodic table — comets',
    marks: 9,
    stem: 'Scientists study comets and asteroids to understand the early solar system. Rocky comets contain sodium (Na), phosphorus (P) and manganese (Mn). Their gaseous tails contain helium (He), nitrogen (N₂) and hydrogen sulfide (H₂S).',
    tasks: [
      {
        label: 'a',
        text: '**Select** the number of electrons in the outer shell of an atom of sodium.',
        marks: 1,
        ph: 'Select outer shell electrons for Na',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '4', '8'],
      },
      {
        label: 'b',
        text: 'Using the periodic table, **state** the group and period of phosphorus.\n\nGroup:\n\nPeriod:',
        marks: 2,
        ph: 'State group number and period number for P',
      },
      {
        label: 'c',
        text: '**Select** the region of the periodic table where manganese is located.',
        marks: 1,
        ph: 'Select periodic table region for Mn',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'd',
        text: 'Some of the major components of gaseous comet tails are helium (He), nitrogen (N₂) and hydrogen sulfide (H₂S). **Explain** why nitrogen occurs as diatomic molecules, but helium does not.',
        marks: 4,
        ph: 'Explain electron sharing for N vs full outer shell for He',
      },
      {
        label: 'e',
        text: '**Select** the diagram that shows the Lewis structure (electron dot or dot cross diagram) of hydrogen sulfide, H₂S.',
        marks: 1,
        ph: 'Select correct Lewis structure for H₂S',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
    ],
  },

  // ── Q2 (12 marks, Crit A) — Methane on Titan, isotopes, catalysts ─────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Isotopes, reactions & catalysts — Titan',
    marks: 12,
    stem: 'Scientists are studying Titan, Saturn\'s largest moon, as a possible environment for life. Titan has a thick atmosphere rich in methane (CH₄) and nitrogen (N₂). Methane itself is not a reliable sign of life because it can form from geological processes. Titan\'s atmosphere contains several isotopes of carbon.',
    tasks: [
      {
        label: 'a',
        text: 'Carbon occurs as a mixture of isotopes, including one with 6 protons and 8 neutrons. **Calculate** the mass number of this carbon isotope.',
        marks: 2,
        ph: 'Mass number = protons + neutrons; 6 + 8',
      },
      {
        label: 'b',
        text: 'Methane has been detected on Titan and on several exoplanets. **Suggest** why the presence of methane does not necessarily indicate the presence of life.',
        marks: 1,
        ph: 'Methane can form from non-biological geological processes',
      },
      {
        label: 'c',
        text: '**Calculate** the relative molecular mass of hydrogen cyanide (HCN) containing hydrogen-1, carbon-13 and nitrogen-14.',
        marks: 1,
        ph: 'Add atomic masses: 1 + 13 + 14',
      },
      {
        label: 'd',
        text: 'Liquid methane lakes on Titan may dissolve small amounts of HCN. A scientist uses two indicators to determine the pH of a methane-HCN solution.\n\nThe chart shows the colour changes for two indicators, indicator A and indicator B.\n\nUse information from the chart to **determine** the **range** of pH possible for the methane-HCN solution.',
        marks: 2,
        ph: 'Read where both indicators overlap; range 5.0 to 8.0',
      },
      {
        label: 'e',
        text: 'There is evidence of photochemical reactions in Titan\'s upper atmosphere:\n\n2CH₄(g) → C₂H₂(g) + 3H₂(g)\n\n**Suggest** why the rate of this reaction increases the closer Titan is to the Sun at certain points in its orbit.',
        marks: 2,
        ph: 'Higher solar energy input → higher temperature → faster reaction',
      },
      {
        label: 'f',
        text: 'Acetylene (C₂H₂) can react with hydrogen in the presence of a catalyst:\n\nC₂H₂(g) + H₂(g) → C₂H₄(g)\n\n**Outline** the role of a catalyst in a chemical reaction.',
        marks: 2,
        ph: 'Catalyst speeds up reaction, not consumed, lowers activation energy',
      },
      {
        label: 'g',
        text: 'Space agencies are planning robotic missions to Titan to study its surface and atmosphere. **Suggest** two reasons why scientists are interested in exploring Titan.',
        marks: 2,
        ph: 'Search for signs of life; study early Earth chemistry; unique liquid hydrocarbon lakes',
      },
    ],
  },

  // ── Q3 (16 marks, Crit A/B/C) — Camping fuel tablets ────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'States of matter, combustion & data analysis — camping fuel',
    marks: 16,
    stem: 'Camping fuel tablets are used by hikers to heat food and water. The length of time a fuel tablet burns will determine how much food can be heated.',
    tasks: [
      {
        label: 'a',
        text: 'Several changes occur when a camping fuel tablet burns.\n\n**Select** the state of the fuel tablet at A and B in the diagram above.',
        marks: 2,
        ph: 'A = solid unlit tablet; B = liquid melted fuel near flame',
        widget: 'inline_dropdown_select',
        widgetItems: ['A', 'B'],
        widgetOptions: ['Solid', 'Liquid', 'Gas'],
      },
      {
        label: 'b',
        text: 'Camping fuel tablets contain hydrocarbons. One common component is propane, C₃H₈. **State** the name and chemical class of C₃H₈.\n\nName:\n\nChemical class:',
        marks: 2,
        ph: 'Propane; Alkane',
      },
      {
        label: 'c',
        text: '**Select** numbers to balance the equation showing complete combustion of C₃H₈.\n\n[?] C₃H₈(g) + [?] O₂(g) → [?] CO₂(g) + [?] H₂O(g)',
        marks: 2,
        ph: 'Coefficients: 1, 5, 3, 4',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
      {
        label: 'd',
        text: 'A student compared fuel tablets burned inside a small wind shield versus without a wind shield.\n\n**Formulate** a hypothesis for the student\'s question.\n\nIf the fuel tablet is burned inside a wind shield then the time taken to burn will [blank] because:',
        marks: 3,
        ph: 'Direction: increase or decrease; give scientific reason',
        widget: 'fill_blank',
        widgetOptions: ['increase', 'decrease'],
      },
      {
        label: 'e',
        text: 'A student investigated the effect of altitude on how quickly a fuel tablet burns. Her processed data is shown in the table below.\n\n| Altitude / m | Rate of fuel combustion / g min⁻¹ |\n|---|---|\n| 850 | 0.153 |\n| 2400 | 0.126 |\n| 3100 | 0.103 |\n| 3900 | 0.0850 |\n| 4600 | 0.0774 |\n\n**State** the rate of fuel combustion at an altitude of 3900 m in standard form.',
        marks: 1,
        ph: '8.50 × 10⁻² g min⁻¹',
      },
      {
        label: 'f',
        text: 'The student produced a graph of her results. **Identify** two errors in the presentation of the data in the graph above.',
        marks: 2,
        ph: 'Axes swapped; should be scatter/line not bar chart',
      },
      {
        label: 'g',
        text: 'The student repeated the experiment the following week. The equipment set up on each occasion was different: Week 1 used an enclosed lantern-style holder; Week 2 used an open tray holder.\n\n**Outline** why the sets of results are different and **suggest** how the **rate** of fuel combustion would be affected.',
        marks: 4,
        ph: 'Enclosed vs open affects O₂ availability; state direction of rate change',
      },
    ],
  },

  // ── Q4 (10 marks, Crit B/C) — Rose vs jasmine wax melts ─────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Investigation variables & data evaluation — wax melts',
    marks: 10,
    stem: 'Scented wax melts are used in warmers to release fragrance. A student compared two wax melts: one fragranced with rose and one fragranced with jasmine.\n\nRose wax melt (in ceramic dish): 175 g; trials 31.0, 36.2, 32.5 hours; average 33.2 hours.\nJasmine wax melt (in glass dish): 120 g; trials 27.0, 30.0, 27.0 hours; average not shown.',
    tasks: [
      {
        label: 'a',
        text: '**State** the independent variable and the dependent variable in **this** investigation.\n\nIndependent variable:\n\nDependent variable:',
        marks: 2,
        ph: 'IV = fragrance type; DV = burn duration/time',
      },
      {
        label: 'b',
        text: '**Calculate** the average burn duration for the jasmine wax melt.',
        marks: 2,
        ph: '(27.0 + 30.0 + 27.0) ÷ 3 = 28.0 hours',
      },
      {
        label: 'c',
        text: 'The student\'s friend examined the data and suggested that the average burn duration for a rose wax melt should be 31.75 hours and not 33.2 hours. **Suggest** a reason for this different average time.',
        marks: 1,
        ph: 'Friend excluded the outlier 36.2 hours',
      },
      {
        label: 'd',
        text: 'The student hypothesized that the rose wax melt would last longer because it had a smaller surface area. Use the data in the tables above part (a) to **evaluate** the validity of the student\'s hypothesis.',
        marks: 3,
        ph: 'Not valid due to different containers and masses; not a fair comparison',
      },
      {
        label: 'e',
        text: '**Suggest** one improvement to increase the validity of the method. **Justify** your answer.\n\nImprovement:\n\nJustification:',
        marks: 2,
        ph: 'Use same dish type or same mass of wax; gives identical heat transfer conditions',
      },
    ],
  },

  // ── Q5 (12 marks, Crit A/B/C/D) — Tea leaves & biomass energy ────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Separation, energy & green chemistry — tea',
    marks: 12,
    stem: 'Tea is one of the most widely consumed beverages in the world. After brewing, approximately 2 million tonnes of spent tea leaves are generated annually. The first stage of processing spent tea leaves to produce solid fuel is to treat the leaves with an alkaline solvent such as sodium hydroxide solution (NaOH). The mixture is then filtered, producing a liquid fraction and a solid fraction.',
    tasks: [
      {
        label: 'a',
        text: '**Organise** the equipment below to show how to separate the solid and liquid fractions from the tea leaf/solvent mixture.\n\nNote: the filter funnel stand is already provided; drag the filter paper and correct beaker to complete the setup.',
        marks: 2,
        ph: 'Drag filter paper into funnel; place beaker underneath to collect filtrate',
      },
      {
        label: 'b',
        text: 'Sodium hydroxide solution (NaOH) is used as the alkaline solvent. **Select** the hazard symbol for sodium hydroxide solution.',
        marks: 1,
        ph: 'NaOH is corrosive — select corrosive symbol',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'Once the tea leaves have been processed, the solid fraction can be pressed into fuel pellets. The table below shows data for different forms of biomass compared with tea biochar pellets.\n\n| Biomass | Energy / MJ tonne⁻¹ |\n|---|---|\n| Tea biochar | 17 500 |\n| Palm kernel | 16 800 |\n| Bamboo | 15 200 |\n| Olive pits | 14 100 |\n| Wheat straw | 12 500 |\n\n**Plot** the energy content of biomass fuels data shown in the table. You should **label** the axes and use the tools in the drawing palette to create your graph.',
        marks: 6,
        ph: 'Bar chart; x=biomass type; y=energy/MJ tonne⁻¹; even scale from 0; all 5 bars correct',
      },
      {
        label: 'd',
        text: 'The tea biochar pellets are burned to produce heat energy. **Select** the type of process used to produce energy.',
        marks: 1,
        ph: 'Burning fuel pellets releases energy — exothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Photosynthesis', 'Fermentation'],
      },
      {
        label: 'e',
        text: '**Suggest** why it is important to recycle spent tea leaves. **Justify** your answer.',
        marks: 2,
        ph: 'Reduces waste and landfill; provides renewable fuel source reducing fossil fuel dependence',
      },
    ],
  },

  // ── Q6 (16 marks, Crit B) — Design: wax energy density investigation ──────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design (wax energy density)',
    marks: 16,
    stem: 'Different types of candle wax release different amounts of energy when they burn. Energy density can be determined by measuring the mass change of the wax burned to produce a specific temperature increase. The diagram shows two ways to set up equipment to determine the energy density of a liquid. A student wants to investigate the energy density of five types of wax: soy, paraffin, beeswax, coconut wax and carnauba wax.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which type of wax has the highest energy density. In your answer, you should include:\n- an identification of the independent, dependent and two control variables\n- a justification of which equipment set-up you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables (IV=wax type, DV=mass change/temp rise), set-up justification, method, safety',
      },
    ],
  },

  // ── Q7 (12 marks, Crit C/D) — Global water consumption & filtration ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water purification & filtration evaluation — hollow fiber vs GAC',
    marks: 12,
    stem: 'Global water consumption has changed dramatically over the last 120 years. The graph shows the change in water consumption for each region during this period.',
    figImages: ['/images/papers/chemistry-may-2021/page-28.png'],
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **identify** the region that had the largest increase in water consumption between 1900 and 2020.',
        marks: 1,
        ph: 'Read graph; largest increase = Asia',
      },
      {
        label: 'b',
        text: 'Use the graph to **state** the water consumption in North America in 1960.',
        marks: 2,
        ph: 'Read graph at 1960 for North America; ~1000 ± 100 billion m³',
      },
      {
        label: 'c',
        text: '**Suggest** a reason why the water consumption in North America increased dramatically between 1950 and 1980.',
        marks: 1,
        ph: 'Industrialisation, population growth, agricultural expansion',
      },
      {
        label: 'd',
        text: 'Hana and Tom have a mountain cabin with a spring water supply. They are choosing between a hollow fiber membrane filter and a granular activated carbon (GAC) filter to make their water safe for drinking.\n\n| Feature | Hollow fiber | GAC filter |\n|---|---|---|\n| Cost of unit / US$ | 145 | 70 |\n| Cost of filters / US$ | 35 | 15 |\n| Filter life / months | 9 | 4 |\n| Water flow / dm³ min⁻¹ | 1.5–2.5 | 3.0–4.0 |\n| Filter pore size / μm | 0.2 | 0.5–1.0 |\n| Operating temp / °C | 5–40 | 5–40 |\n\n**Select** the most important feature of the filter that is needed in a filtration device. **Justify** your answer.\n\nJustification:',
        marks: 2,
        ph: 'Pore size — must be smaller than particles/bacteria being removed',
        widget: 'radio_select',
        widgetOptions: ['Cost of unit', 'Filter life span', 'Pore size', 'Water flow rate'],
      },
      {
        label: 'e',
        text: 'Using the information in the table above, **explain** the advantages and disadvantages of using a hollow fiber membrane filter compared to a granular activated carbon filter, when obtaining water from a mountain spring. In your answer, you should:\n- describe the advantages and disadvantages of a hollow fiber filter compared to the GAC filter\n- justify which would be the most suitable filter for Hana and Tom.',
        marks: 6,
        ph: 'Compare cost, lifespan, pore size, flow rate; justify for spring water with bacteria/parasites',
      },
    ],
  },

  // ── Q8 (13 marks, Crit D) — Industrial water treatment evaluation ─────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Industrial water treatment technologies',
    marks: 13,
    stem: 'City planners in an inland industrial region are expanding a manufacturing district over the next decade. The district processes textiles, which releases dyes, heavy metals (chromium, lead), and organic solvents into local waterways. The region has no access to the ocean but has a large river as its water source. Three water treatment technologies are being considered: activated sludge, advanced oxidation (UV/H₂O₂), and ion exchange.\n\nUsing your knowledge of water purification techniques and your wider MYP studies, discuss and evaluate the different technologies available. In your answer, you should include:\n- a comparison of the economic implications of each of the three technologies\n- an example of the environmental impact of each of the three technologies\n- an outline of the social aspects of building and running a water purification facility\n- an appraisal of which technology would not be suitable for this district.',
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the different technologies available for water treatment for the industrial textile district.',
        marks: 13,
        ph: 'Economic/environmental/social comparison; identify unsuitable technology; justified appraisal',
      },
    ],
  },
]
