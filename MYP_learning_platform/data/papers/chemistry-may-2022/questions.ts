import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2022',
  subject: 'Chemistry',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Ancient mirrors, compounds, isotopes, hydrates ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, compounds & moles — ancient mirrors',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'Ancient objects can provide information about human progress. The first mirrors were made from polished metals such as gold. Archaeologists also found mirrors made from polished volcanic rock (obsidian). Samples of the volcanic rock were found to contain iron oxide, aluminium oxide and traces of an unknown element X. Some scientists believe the first man-made mirror was a slab of selenite found in Egypt. Selenite is hydrated calcium sulfate, CaSO₄·2H₂O. Hydrated salts are ionic compounds with a constant number of water molecules as part of their structure.',
    tasks: [
      {
        label: 'a',
        text: '**Select** a reason for the perfect condition of the gold mirrors found in ancient Egypt.',
        marks: 1,
        ph: 'Gold is unreactive — does not corrode or tarnish',
        widget: 'radio_select',
        widgetOptions: ['Gold is conductive', 'Gold is ductile', 'Gold is malleable', 'Gold is unreactive'],
      },
      {
        label: 'b',
        text: 'Two compounds present in the volcanic rock are listed below. **Write down** the missing name and formula.\n\n| Name | Formula |\n|---|---|\n| [blank] | Al₂O₃ |\n| Iron oxide | [blank] |',
        marks: 2,
        ph: 'Aluminium oxide; Fe₂O₃',
        widget: 'fill_blank',
        widgetOptions: ['Aluminium oxide', 'Aluminium(III) oxide', 'Iron oxide', 'Fe₂O₃', 'Al₂O₃', 'FeO', 'Fe₃O₄'],
      },
      {
        label: 'c',
        text: 'Samples of the volcanic rock were found to contain traces of an unknown element X. The electron structure of element X is 2, 8, 7.\n\n**Identify** element X.',
        marks: 1,
        ph: 'Chlorine (Cl) — 17 electrons, Group 7',
      },
      {
        label: 'd',
        text: 'Analysis showed that one isotope of element X had 20 neutrons. **Determine** the mass number of this isotope.',
        marks: 2,
        ph: 'Protons = 17; mass number = 17 + 20 = 37',
      },
      {
        label: 'e',
        text: 'The formula CaSO₄·2H₂O means that one mole of CaSO₄ contains two moles of water molecules as part of its structure. **Calculate** the mass of water present in 5 moles of the hydrated salt.',
        marks: 3,
        ph: '5 mol × 2 = 10 mol H₂O; molar mass H₂O = 18 g/mol; 10 × 18 = 180 g',
      },
    ],
  },

  // ── Q2 (15 marks, Crit A) — Stained glass, acrylic acid, HF etching ────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Transition metals, moles, molecular models & acids — glass art',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 15,
    stem: 'Stained glass windows are one example of artwork using glass. The chemicals used to colour glass are mostly oxides of transition metals. Nowadays, most artists make stained glass using acrylic paint. The images below show some artwork using etched glass. Glass etching involves the use of hydrogen fluoride (HF), also known as hydrofluoric acid. Glass is a material that contains a mixture of compounds, such as silicon dioxide (SiO₂), sodium oxide (Na₂O) and calcium oxide (CaO), melted together at high temperatures.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** one of the transition metals pictured in the periodic table, giving the name of the metal and its symbol.',
        marks: 1,
        ph: 'Copper and Cu / Tungsten and W / Gold and Au (any one)',
      },
      {
        label: 'b',
        text: '**Identify** the element in these compounds that is in group 2 and period 4.',
        marks: 1,
        ph: 'Calcium or Ca',
      },
      {
        label: 'c',
        text: 'A 35.0 g sample of commercial glass contains 26.3 g of SiO₂ and 3.4 g of CaO; the remainder is Na₂O. **Calculate** the number of moles of sodium oxide in the sample. Give your answer to two significant figures.',
        marks: 4,
        ph: 'Mass Na₂O = 35.0−26.3−3.4 = 5.3g; M(Na₂O) = 62g/mol; n = 5.3/62 = 0.085 mol',
      },
      {
        label: 'd',
        text: 'One of the components of acrylic paint is acrylic acid (IUPAC name: propenoic acid). The molecular formula is C₃H₄O₂.\n\nIn the following models, C atoms are black, H atoms are white and O atoms are red. **Select** the model showing acrylic acid.',
        marks: 1,
        ph: 'Select model B — correct 3D structure for C₃H₄O₂',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'e',
        text: 'The artist wants to work on a piece of glass. She knows that the best results are obtained with a specific pH. **Select** the most acidic chemical from the options below.',
        marks: 1,
        ph: 'Most acidic = lowest pH = HF (pH = 2.1)',
        widget: 'radio_select',
        widgetOptions: ['HF (pH = 4.5)', 'HF (pH = 3.5)', 'HF (pH = 3.2)', 'HF (pH = 2.1)'],
      },
      {
        label: 'f',
        text: 'The artist added HF to water. The diagram shows the temperature of the water before (25°C) and after adding HF.\n\nBefore adding the HF, the reading on the thermometer was 25°C. **Measure** the temperature after the HF was added and **calculate** the temperature change.',
        marks: 2,
        ph: 'Temperature after = 39°C; temperature change = +14°C',
        figImages: ['/images/papers/chemistry-may-2022/page-07.png'],
      },
      {
        label: 'g',
        text: 'Using your answer from part (f), **state** the type of reaction when HF dissolves in water.',
        marks: 1,
        ph: 'Exothermic (temperature increased)',
      },
      {
        label: 'h',
        text: 'After the etching process is complete, the excess HF needs to be removed using an alkaline solution. Select the options to **complete** the balanced equation if HF was removed with calcium hydroxide Ca(OH)₂:\n\n[?] HF + Ca(OH)₂ → [?] [?] + [?] H₂O',
        marks: 4,
        ph: '2HF + Ca(OH)₂ → 1CaF₂ + 2H₂O; blanks: 2, 1, CaF₂, 2',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', 'CaF₂', 'CaCl₂', 'Ca(OH)₂', 'HF'],
      },
    ],
  },

  // ── Q3 (6 marks, Crit C/D) — H₂O₂ hazards & contact lens cleaning ─────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'H₂O₂ hazards, Lewis structures & contact lens bacteria removal',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 6,
    stem: 'Hydrogen peroxide (H₂O₂) has a number of uses which include household cleaning and cleaning wounds, removing stains, making hair colour lighter and as a high-power rocket fuel. H₂O₂ is commonly used to clean contact lenses. If the H₂O₂ is not fully removed after cleaning, it will cause irritation to the eyes. Contact lenses must be cleaned to remove any bacteria that may be attached to the surface. They can be cleaned in either a one-step or a two-step process.',
    tasks: [
      {
        label: 'a',
        text: 'H₂O₂ is placed between the contact lens and the surface of the eye. **Select** which of the following hazard symbols you would expect to find on a bottle of H₂O₂.',
        marks: 1,
        ph: 'H₂O₂ is an irritant/oxidiser — select symbol C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'b',
        text: '**Select** which of the following diagrams represents the Lewis structure (electron dot or dot cross diagram) of H₂O₂.',
        marks: 1,
        ph: 'H₂O₂ = H–O–O–H with lone pairs on each O — select A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'A scientist covered contact lenses with bacteria and then compared the two processes. The results are shown in the graph above.\n\n**State** the percentage of bacteria remaining on the lens after using a one-step cleaning process for 4 hours.',
        marks: 1,
        ph: 'Read graph at 4h for one-step: approximately 4–6% bacteria remaining',
        figImages: ['/images/papers/chemistry-may-2022/page-11.png'],
      },
      {
        label: 'd',
        text: '**State** the time required to remove 95% of the bacteria using the two-step process.',
        marks: 1,
        ph: 'Read graph: two-step reaches 5% remaining (95% removed) at ≥ 6 hours',
      },
      {
        label: 'e',
        text: 'Use the data in the graph to **justify** which process and time you would recommend to clean contact lenses.',
        marks: 2,
        ph: 'Recommend two-step; removes more bacteria during same time period; 4 hours and over',
      },
    ],
  },

  // ── Q4 (18 marks, Crit A/B/C) — Catalyst investigation for H₂O₂ decomposition
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Decomposition, hypothesis, variables & data analysis — H₂O₂ catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 18,
    stem: 'Oxygen and water are produced when hydrogen peroxide (H₂O₂) breaks down. The chemical term for this process is decomposition. The decomposition of H₂O₂ happens naturally at a slow rate, as shown in the equation:\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nH₂O₂ decomposes faster when a catalyst is added. A catalyst is a substance which increases the rate of reaction without being used up itself. A student has a catalyst in two states: a solid and a solution.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you would test that oxygen was produced in the decomposition reaction.',
        marks: 2,
        ph: 'Collect gas in test tube; hold glowing splint at mouth — it relights',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis to test which state of catalyst (solid or solution) will give the greatest increase in rate of reaction. You should use collision theory in your answer.',
        marks: 3,
        ph: 'If catalyst is solution → rate higher because particles move freely → more frequent collisions',
      },
      {
        label: 'c',
        text: 'A student wanted to investigate a number of catalysts to determine which one would decompose H₂O₂ the fastest. The student set up their equipment modelled on a rocket engine. The equipment and method are shown in the diagram above.\n\n**Identify** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable one:\n\nControl variable two:',
        marks: 4,
        ph: 'IV=type of catalyst; DV=time for flame to burn/stop; CV1=mass of catalyst; CV2=volume H₂O₂',
        figImages: ['/images/papers/chemistry-may-2022/page-13.png'],
      },
      {
        label: 'd',
        text: 'The student formulated the following hypothesis:\n\n*"The best catalyst will produce the flame that burns the longest because more oxygen is released."*\n\n**State** and **justify** whether this hypothesis is valid.',
        marks: 3,
        ph: 'Invalid: longer burn time ≠ faster rate of O₂ production; total O₂ released same for all; good catalyst = quicker rate not longer flame',
      },
      {
        label: 'e',
        text: 'A second student suggested an alternative method — using a eudiometer to measure the volume of oxygen produced. The volume of gas collected after 30 seconds for three trials is shown in the table.\n\n| Volume from trial one / cm³ | Volume from trial two / cm³ | Volume from trial three / cm³ |\n|---|---|---|\n| 42 | 44 | 46 |\n\n**Calculate** the average volume of oxygen collected for this experiment and **determine** the rate of oxygen production.',
        marks: 3,
        ph: 'Average = (42+44+46)/3 = 44 cm³; rate = 44÷30 = 1.47 cm³ s⁻¹',
        figImages: ['/images/papers/chemistry-may-2022/page-15.png'],
      },
      {
        label: 'f',
        text: 'The student carried out a fourth trial and their equipment is shown below. The volume of oxygen collected was 50 cm³.\n\n**Suggest** two reasons why the result for this trial was not consistent with the trials above. **Justify** your answer.',
        marks: 3,
        ph: 'Stopper not inserted / tubing not in eudiometer / timing > 30s; justification: extra gas collected',
        figImages: ['/images/papers/chemistry-may-2022/page-16.png'],
      },
    ],
  },

  // ── Q5 (16 marks, Crit B) — Design: H₂O₂ catalyst comparison ────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — H₂O₂ decomposition rate with 5 catalysts',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 16,
    stem: 'The students decided to use the method in the picture to compare the effect of different catalysts on the decomposition of H₂O₂ and measuring the volume of the oxygen produced.\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nYou are provided with a eudiometer, stopwatch, five catalysts: MnO₂(s), ZnO(s), CuCl₂(s), FeCl₃(s) and NiCl₂(s), and a solution of hydrogen peroxide. The independent variable in your investigation is the type of catalyst used. One control variable in your investigation is the concentration of hydrogen peroxide.',
    figImages: ['/images/papers/chemistry-may-2022/page-16.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine the rate of decomposition of hydrogen peroxide with each catalyst. In your answer, you should include:\n- the independent variable, the dependent variable and one other control variable\n- a list of additional equipment you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables; equipment (balance, stopwatch); method (3 repeats, same mass catalyst, same time); safety (H₂O₂ oxidiser/irritant)',
      },
    ],
  },

  // ── Q6 (11 marks, Crit C) — H₂O₂ hair bleaching, graphing, validity ───────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data interpretation, graphing & validity — H₂O₂ hair bleaching',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 11,
    stem: 'Hydrogen peroxide (H₂O₂) is used to change hair colour by removing the natural colour pigments in hair follicles. H₂O₂ is placed on the hair and then left for a set time. The results of an investigation using five different natural hair colours are shown below. The concentration of H₂O₂ used in the beauty industry is important. It is sold in different concentrations. Suppliers to the beauty industry are often not regulated. Analytical chemistry can be used to check the concentration of H₂O₂ using a spectrophotometer — the signal output is proportional to the concentration of H₂O₂.',
    figImages: ['/images/papers/chemistry-may-2022/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: '**Interpret** these results and **explain** them using scientific reasoning.',
        marks: 3,
        ph: 'As time increases, H₂O₂ reacts with hair pigment → more pigment removed → lighter colour; darker hair takes longer',
      },
      {
        label: 'b',
        text: 'The results for different known H₂O₂ concentrations are shown in the table below.\n\n| H₂O₂ concentration / % | Signal strength |\n|---|---|\n| 1 | 500 |\n| 2 | 1450 |\n| 3 | 2150 |\n| 4 | 3050 |\n| 6 | 4050 |\n| 8 | 4400 |\n| 10 | 4750 |\n\n**Present** this data using a graph. Label the axes and add a title.',
        marks: 5,
        ph: 'Scatter/line graph; x=H₂O₂ conc (%); y=signal strength; title linking both; scale; 5+ points correct',
      },
      {
        label: 'c',
        text: 'Use your graph in part (b) to **predict** the signal output expected for a 5% solution of H₂O₂.',
        marks: 1,
        ph: 'Interpolate between 4% (3050) and 6% (4050) → approximately 3500 ± 200',
      },
      {
        label: 'd',
        text: 'The scientists have been provided with four bottles of H₂O₂ from a hair salon owner. They need to test each bottle to see if the solution in any of them has a concentration above 4%.\n\nThe average signal output of the four bottles was 2960. **Comment** on the validity of using an average.',
        marks: 2,
        ph: 'Not valid: average does not give value of each individual bottle; each could be higher or lower than average',
      },
    ],
  },

  // ── Q7 (9 marks, Crit A/D) — Paper properties & preservation ────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Paper properties, chemistry & long-term preservation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Paper comes in different sizes, thicknesses, colours, textures and chemical compositions. It can be used for writing, drawing, painting and printing. Origami is an art form associated with Japan. Museums and libraries have collected documents throughout history. Written information has been found on a variety of materials, which have varying quality of preservation. Modern documents expected to be kept for a long time are printed on high quality "acid-free" paper.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one property of paper that allows it to be used for origami.',
        marks: 1,
        ph: 'Malleable / easy to fold / keeps its shape / strong / can be coloured',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why some papers are coated with an extra layer of plastic or wax.',
        marks: 1,
        ph: 'Waterproofing / gives a glossy appearance / to protect (from air, heat)',
      },
      {
        label: 'c',
        text: 'Chlorine is a common chemical used in the production of paper. Chlorine is used to turn the paper white. An alternative method to turn the paper white uses hydrogen peroxide (H₂O₂). **State** a reason why paper manufacturers would choose to use H₂O₂ instead of chlorine.',
        marks: 1,
        ph: '(Using H₂O₂) oxygen produced is not toxic; (using chlorine) a toxic gas is produced',
      },
      {
        label: 'd',
        text: 'A researcher has suggested that papyrus from ancient Egyptian times is the best material for long-term preservation of documents. Use the information in the graphic and knowledge from your wider MYP studies to **discuss** this suggestion. In your answer, you should include:\n- the advantages and disadvantages of papyrus\n- the advantages and disadvantages of acid-free paper\n- a conclusion, with justification, on which paper type is best for long-term preservation.',
        marks: 6,
        ph: 'Papyrus: adv=lasts 1000s years; disadv=brittle/fragile/expensive. Acid-free: adv=stable pH/cheap; disadv=not as durable. Conclusion with justification.',
        figImages: ['/images/papers/chemistry-may-2022/page-22.png'],
      },
    ],
  },

  // ── Q8 (10 marks, Crit D) — Implications of paper production processes ────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental & economic implications of paper production',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 10,
    stem: 'Over the centuries, paper has been made from a wide variety of materials, such as cotton, bamboo, wood, linen rags and hemp. Today, fibre comes mainly from two sources: wood and used paper. Using paper is a way to record our thoughts and ideas. The infographic below shows the "from tree to paper" and "from paper to paper" (recycling) processes.',
    figImages: ['/images/papers/chemistry-may-2022/page-23.png'],
    tasks: [
      {
        label: '',
        text: 'Using the infographic and knowledge from your wider MYP studies, **discuss** the implications of both types of paper production. In your answer, you should include:\n- a comparison of the impacts on the environment\n- a comparison of the impacts on the economy\n- your conclusion, with justification, on which paper production process is best.',
        marks: 10,
        ph: 'Environment: deforestation (virgin) vs water/chemical use (recycled); Economy: cost of machinery/employment; Conclusion with justification',
      },
    ],
  },

  // ── Q9 (6 marks, Crit D) — Cultural advantages of paper vs electronic ─────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Cultural advantages — paper vs electronic storage',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 6,
    stem: 'Prior to the 20th century, most information was stored in the form of paper documents. There is now a trend to save information by using cloud storage or other electronic methods.',
    figImages: ['/images/papers/chemistry-may-2022/page-24.png'],
    tasks: [
      {
        label: '',
        text: '**Suggest** and **justify** the **cultural** advantages and disadvantages of paper and electronic information storage.',
        marks: 6,
        ph: 'Paper: cultural/historical preservation, accessible without tech; Electronic: interactive, safe from physical damage; conclusion linked to culture',
      },
    ],
  },
]
