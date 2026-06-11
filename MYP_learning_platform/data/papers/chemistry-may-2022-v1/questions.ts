import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2022-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Bronze Age tools: alloys, isotopes, hydrates ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, compounds & moles — Bronze Age copper-tin tools',
    marks: 9,
    stem: 'Bronze Age warriors used copper-tin alloy (bronze) for swords and shields. Archaeological analysis found that the metal artifacts contained magnesium oxide (MgO), tin oxide and traces of an unknown element Z. Researchers also found copper(II) sulfate pentahydrate (CuSO₄·5H₂O) — a blue hydrated salt — alongside the bronze weapons. Hydrated salts are ionic compounds with a constant number of water molecules as part of their structure.',
    tasks: [
      {
        label: 'a',
        text: '**Select** a reason why bronze tools found in archaeological digs are still structurally intact after thousands of years.',
        marks: 1,
        ph: 'Bronze resists corrosion — does not react easily with air or water',
        widget: 'radio_select',
        widgetOptions: ['Bronze is hard', 'Bronze is ductile', 'Bronze resists corrosion', 'Bronze is magnetic'],
      },
      {
        label: 'b',
        text: 'Two compounds present in the rock matrix are listed below. **Write down** the missing name and formula.\n\n| Name | Formula |\n|---|---|\n| [blank] | MgO |\n| Tin oxide | [blank] |',
        marks: 2,
        ph: 'Magnesium oxide; SnO₂',
        widget: 'fill_blank',
        widgetOptions: ['Magnesium oxide', 'Magnesium(II) oxide', 'Tin oxide', 'SnO₂', 'MgO', 'Sn₂O', 'SnO'],
      },
      {
        label: 'c',
        text: 'Traces of unknown element Z were found. The electron configuration of element Z is 2, 8, 2.\n\n**Identify** element Z.',
        marks: 1,
        ph: 'Magnesium (Mg) — 12 electrons, Group 2, Period 3',
      },
      {
        label: 'd',
        text: 'Analysis showed that one isotope of element Z had 14 neutrons. **Determine** the mass number of this isotope.',
        marks: 2,
        ph: 'Protons = 12; mass number = 12 + 14 = 26',
      },
      {
        label: 'e',
        text: 'The formula CuSO₄·5H₂O means that one mole of CuSO₄ contains five moles of water molecules as part of its structure. **Calculate** the mass of water present in 3 moles of the hydrated salt.',
        marks: 3,
        ph: '3 mol × 5 = 15 mol H₂O; molar mass H₂O = 18 g/mol; 15 × 18 = 270 g',
      },
    ],
  },

  // ── Q2 (15 marks, Crit A) — Mosaic tiles, NaOH etching, molecular models ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Transition metals, moles, molecular models & acids — ceramic mosaic tiles',
    marks: 15,
    stem: 'Mosaic tiles decorated Roman buildings. Transition metal oxides gave tiles their vivid colours. Modern restoration artists use alkali-resistant acrylic paint. Some restoration projects use sodium hydroxide (NaOH) solution to strip old paint from tile surfaces before re-applying colour. NaOH is a strong alkali. Tile compositions vary: a typical mosaic tile contains silicon dioxide (SiO₂), potassium oxide (K₂O) and calcium oxide (CaO) fused together.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** one of the transition metals used to colour mosaic tiles, giving the name of the metal and its symbol.',
        marks: 1,
        ph: 'Cobalt and Co / Manganese and Mn / Chromium and Cr (any one)',
      },
      {
        label: 'b',
        text: '**Identify** the element in these compounds that is in group 1 and period 3.',
        marks: 1,
        ph: 'Sodium or Na',
      },
      {
        label: 'c',
        text: 'A 40.0 g sample of mosaic tile contains 30.0 g of SiO₂ and 6.0 g of K₂O; the remainder is CaO. **Calculate** the number of moles of calcium oxide in the sample. Give your answer to two significant figures.',
        marks: 4,
        ph: 'Mass CaO = 40.0−30.0−6.0 = 4.0 g; M(CaO) = 56 g/mol; n = 4.0/56 = 0.071 mol',
      },
      {
        label: 'd',
        text: 'One of the monomers in alkali-resistant acrylic is methacrylic acid (IUPAC name: 2-methylpropenoic acid). The molecular formula is C₄H₆O₂.\n\nIn the following models, C atoms are black, H atoms are white and O atoms are red. **Select** the model showing methacrylic acid.',
        marks: 1,
        ph: 'Select model C — correct 3D structure for C₄H₆O₂',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'e',
        text: 'The conservator wants to dilute NaOH to a safe working concentration. She tests four different dilutions of HCl for comparison. **Select** the most acidic chemical from the options below.',
        marks: 1,
        ph: 'Most acidic = lowest pH = HCl (pH = 1.9)',
        widget: 'radio_select',
        widgetOptions: ['HCl (pH = 1.9)', 'HCl (pH = 2.2)', 'HCl (pH = 2.8)', 'HCl (pH = 3.8)'],
      },
      {
        label: 'f',
        text: 'The conservator added concentrated NaOH to water. The temperature of the water before adding NaOH was 25°C. After dissolving, the thermometer read 41°C.\n\n**Measure** the temperature after the NaOH was added and **calculate** the temperature change.',
        marks: 2,
        ph: 'Temperature after = 41°C; temperature change = +16°C',
      },
      {
        label: 'g',
        text: 'Using your answer from part (f), **state** the type of reaction when NaOH dissolves in water.',
        marks: 1,
        ph: 'Exothermic (temperature increased)',
      },
      {
        label: 'h',
        text: 'After the restoration process is complete, the excess NaOH is neutralised with sulfuric acid (H₂SO₄). Select the options to **complete** the balanced equation:\n\n[?] NaOH + [?] H₂SO₄ → [?] [?] + [?] H₂O',
        marks: 4,
        ph: '2NaOH + H₂SO₄ → 1Na₂SO₄ + 2H₂O; blanks: 2, 1, Na₂SO₄, 2',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', 'Na₂SO₄', 'NaSO₄', 'Na₂SO₃', 'H₂SO₄'],
      },
    ],
  },

  // ── Q3 (6 marks, Crit C/D) — Cl₂ bleach fabric cleaning ─────────────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'Cl₂ hazards, Lewis structures & fabric bleaching effectiveness',
    marks: 6,
    stem: 'Chlorine gas (Cl₂) is used to bleach fabrics in the textile industry. Cl₂ oxidises the colour pigments in fibres to make them white. If Cl₂ is not removed after bleaching, it damages the fabric. Industrial fabric bleaching must remove mould spores from fibres. Factories compare a one-step and a two-step Cl₂ bleaching process.',
    tasks: [
      {
        label: 'a',
        text: 'Cl₂ is a toxic gas used in the textile factory. **Select** which of the following hazard symbols you would expect to find on a cylinder of Cl₂.',
        marks: 1,
        ph: 'Cl₂ is toxic — select symbol B (skull and crossbones)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'b',
        text: '**Select** which of the following diagrams represents the Lewis structure (electron dot or dot cross diagram) of Cl₂.',
        marks: 1,
        ph: 'Cl₂ = Cl–Cl with three lone pairs on each Cl — select D',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'A technician covered fabric samples with mould spores and compared the two bleaching processes. Results are shown in the graph.\n\n**State** the percentage of mould spores remaining after using a two-step bleaching process for 3 hours.',
        marks: 1,
        ph: 'Read graph at 3h for two-step: approximately 6–9% mould spores remaining',
      },
      {
        label: 'd',
        text: '**State** the time required to remove 90% of the mould spores using the one-step process.',
        marks: 1,
        ph: 'Read graph: one-step reaches 10% remaining (90% removed) at ≈ 5 hours',
      },
      {
        label: 'e',
        text: 'Use the data in the graph to **justify** which process and time you would recommend for industrial fabric bleaching.',
        marks: 2,
        ph: 'Recommend two-step; removes more spores over same time; cite data from graph',
      },
    ],
  },

  // ── Q4 (18 marks, Crit A/B/C) — KMnO₄ catalyst decomposition ────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Decomposition, hypothesis, variables & data analysis — KMnO₄ catalysts',
    marks: 18,
    stem: 'Potassium permanganate (KMnO₄) decomposes when heated to produce manganese dioxide (MnO₂), potassium manganate (K₂MnO₄) and oxygen:\n\n4KMnO₄(s) → 2K₂MnO₄(s) + 2MnO₂(s) + O₂(g)\n\nThe decomposition can also be catalysed at room temperature by certain metallic compounds. A student has each catalyst in two states: a solid and a solution. The student wants to determine which state produces oxygen fastest.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you would test that oxygen was produced in the decomposition reaction.',
        marks: 2,
        ph: 'Collect gas in test tube; hold glowing splint — it relights',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis to test which state of catalyst (solid or solution) will give the greatest increase in rate of decomposition. You should use collision theory in your answer.',
        marks: 3,
        ph: 'If catalyst is solution → higher rate because ions dispersed → more frequent collisions with KMnO₄',
      },
      {
        label: 'c',
        text: 'A student wanted to investigate several catalysts to find which decomposes KMnO₄ fastest, measuring O₂ volume in a eudiometer.\n\n**Identify** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable one:\n\nControl variable two:',
        marks: 4,
        ph: 'IV=type of catalyst; DV=volume O₂ in 30s; CV1=mass catalyst; CV2=mass KMnO₄',
      },
      {
        label: 'd',
        text: 'The student formulated the following hypothesis:\n\n*"The best catalyst will heat up the most because it releases energy fastest."*\n\n**State** and **justify** whether this hypothesis is valid.',
        marks: 3,
        ph: 'Invalid: temperature rise ≠ rate of O₂ production; cannot infer rate from heat released',
      },
      {
        label: 'e',
        text: 'A second student measured volume of O₂ collected after 30 seconds for three trials:\n\n| Volume from trial one / cm³ | Volume from trial two / cm³ | Volume from trial three / cm³ |\n|---|---|---|\n| 38 | 40 | 42 |\n\n**Calculate** the average volume of oxygen collected and **determine** the rate of oxygen production.',
        marks: 3,
        ph: 'Average = (38+40+42)/3 = 40 cm³; rate = 40÷30 = 1.33 cm³ s⁻¹',
      },
      {
        label: 'f',
        text: 'The student carried out a fourth trial and collected 55 cm³ of O₂. The equipment for this trial is shown below.\n\n**Suggest** two reasons why the result for this trial was not consistent with the trials above. **Justify** your answer.',
        marks: 3,
        ph: 'Tube not sealed / timing > 30s / extra catalyst added; justification: extra O₂ collected',
      },
    ],
  },

  // ── Q5 (16 marks, Crit B) — Design: KMnO₄ catalyst comparison ────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — KMnO₄ decomposition with 5 catalysts',
    marks: 16,
    stem: 'The students decided to compare the effect of different catalysts on the decomposition of KMnO₄ using a eudiometer to measure volume of O₂ produced.\n\n4KMnO₄(s) → 2K₂MnO₄(s) + 2MnO₂(s) + O₂(g)\n\nYou are provided with a eudiometer, stopwatch, five catalysts: MnO₂(s), FeO(s), CuCl₂(s), NiCl₂(s) and CoCl₂(s), and samples of solid KMnO₄. The independent variable in your investigation is the type of catalyst used. One control variable is the mass of KMnO₄.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine the rate of decomposition of potassium permanganate with each catalyst. In your answer, you should include:\n- the independent variable, the dependent variable and one other control variable\n- a list of additional equipment you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables; equipment (balance, stopwatch, eudiometer); method (3 repeats); safety (KMnO₄ oxidiser/staining hazard)',
      },
    ],
  },

  // ── Q6 (11 marks, Crit C) — Cl₂ bleach spectrophotometry ─────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data interpretation, graphing & validity — Cl₂ bleach concentration',
    marks: 11,
    stem: 'Chlorine solution (Cl₂ dissolved in water) is used to bleach fabrics. The degree of bleaching depends on the Cl₂ concentration. Higher concentrations remove more colour pigment. Regulators must check Cl₂ concentration in batches. A spectrophotometer measures the signal proportional to the Cl₂ concentration.',
    tasks: [
      {
        label: 'a',
        text: '**Interpret** the relationship between Cl₂ concentration and bleaching effect, and **explain** using scientific reasoning.',
        marks: 3,
        ph: 'Higher Cl₂ concentration → more Cl₂ molecules → faster oxidation of pigment → more colour removed',
      },
      {
        label: 'b',
        text: 'Results for different known Cl₂ concentrations are shown in the table below.\n\n| Cl₂ concentration / % | Signal strength |\n|---|---|\n| 1 | 300 |\n| 2 | 900 |\n| 3 | 1650 |\n| 4 | 2500 |\n| 6 | 3800 |\n| 8 | 4300 |\n| 10 | 4700 |\n\n**Present** this data using a graph. Label the axes and add a title.',
        marks: 5,
        ph: 'Scatter/line graph; x=Cl₂ conc (%); y=signal strength; title; scale; 5+ points correct',
      },
      {
        label: 'c',
        text: 'Use your graph in part (b) to **predict** the signal output expected for a 5% Cl₂ solution.',
        marks: 1,
        ph: 'Interpolate between 4% (2500) and 6% (3800) → approximately 3150 ± 200',
      },
      {
        label: 'd',
        text: 'Four batches of Cl₂ solution were tested. The average signal output was 2420. Regulators need to confirm no batch exceeds 4% Cl₂.\n\n**Comment** on the validity of using an average.',
        marks: 2,
        ph: 'Not valid: average does not show individual batch values; one batch could exceed 4% while others are below',
      },
    ],
  },

  // ── Q7 (9 marks, Crit A/D) — Ceramic tile properties & preservation ───────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Ceramic material properties & long-term cultural preservation',
    marks: 9,
    stem: 'Ceramic materials have been used throughout history for containers, tiles and writing tablets. Clay tablets were used in ancient Mesopotamia to record laws and stories. Museums today use a combination of acid-free paper and digital records for preservation. Ceramic tiles are coated with a layer of glaze (a glass-like substance) for protection.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one property of clay that allows potters to mould it on a wheel.',
        marks: 1,
        ph: 'Plastic/malleable when wet — can be shaped without breaking',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why ceramic tiles are coated with a layer of glaze.',
        marks: 1,
        ph: 'Waterproofing / glossy aesthetic / protects from scratching and chemical attack',
      },
      {
        label: 'c',
        text: 'Ozone (O₃) is an alternative to chlorine (Cl₂) for bleaching. **State** a reason why ceramic restorers would choose O₃ instead of Cl₂ for surface cleaning.',
        marks: 1,
        ph: 'O₃ produces O₂ (non-toxic); Cl₂ produces toxic HCl gas / harmful chlorinated by-products',
      },
      {
        label: 'd',
        text: 'A researcher claims that ancient clay tablets are the best medium for long-term preservation of written records. Use information and knowledge from your wider MYP studies to **discuss** this suggestion. In your answer, you should include:\n- the advantages and disadvantages of clay tablets\n- the advantages and disadvantages of acid-free paper\n- a conclusion, with justification, on which is best for long-term preservation.',
        marks: 6,
        ph: 'Clay: adv=lasts millennia/fire resistant; disadv=heavy/brittle. Acid-free: adv=lightweight/cheap; disadv=less durable. Justified conclusion.',
      },
    ],
  },

  // ── Q8 (10 marks, Crit D) — Bamboo-to-paper vs tree-to-paper implications ─
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental & economic implications — bamboo vs tree paper production',
    marks: 10,
    stem: 'Bamboo is one of the fastest-growing plants on Earth. It can reach full maturity in 3–5 years compared to 25–50 years for trees. The infographic below compares "bamboo-to-paper" and "tree-to-paper" paper production processes.',
    tasks: [
      {
        label: '',
        text: 'Using the infographic and knowledge from your wider MYP studies, **discuss** the implications of both types of paper production. In your answer, you should include:\n- a comparison of the impacts on the environment\n- a comparison of the impacts on the economy\n- your conclusion, with justification, on which paper production process is best.',
        marks: 10,
        ph: 'Environment: bamboo regrows quickly vs deforestation; Economy: bamboo cheaper long-term vs established industry; Conclusion justified',
      },
    ],
  },

  // ── Q9 (6 marks, Crit D) — Stone inscriptions vs electronic storage ────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Cultural advantages — stone inscriptions vs electronic storage',
    marks: 6,
    stem: 'Ancient cultures carved important records into stone monuments. There is now a trend to digitise these inscriptions and store them electronically in national archives.',
    tasks: [
      {
        label: '',
        text: '**Suggest** and **justify** the **cultural** advantages and disadvantages of stone inscriptions and electronic information storage.',
        marks: 6,
        ph: 'Stone: cultural identity/tangible heritage; disadv=immovable/damaged. Electronic: shareable/translatable; disadv=technology gap. Justified conclusion.',
      },
    ],
  },
]
