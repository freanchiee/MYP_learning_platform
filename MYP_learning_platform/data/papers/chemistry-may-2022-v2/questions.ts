import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2022-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (9 marks, Crit A) — Iron Age meteorite tools, hydrated salt ────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, compounds & moles — Iron Age meteorite iron-nickel tools',
    marks: 9,
    stem: 'Some of the earliest iron tools were made from meteoritic iron — a natural alloy of iron (Fe) and nickel (Ni). Archaeological sites in Egypt revealed iron-nickel daggers that had barely corroded after 5,000 years. Analysis of the meteorite rock showed it contained nickel oxide (NiO), iron sulfide and traces of an unknown element W. The site also yielded iron(II) sulfate heptahydrate (FeSO₄·7H₂O) — a green hydrated salt. Hydrated salts are ionic compounds with a constant number of water molecules as part of their structure.',
    tasks: [
      {
        label: 'a',
        text: '**Select** a reason why the iron-nickel daggers remained intact for thousands of years.',
        marks: 1,
        ph: 'High nickel content resists corrosion — nickel-iron alloy less reactive than pure iron',
        widget: 'radio_select',
        widgetOptions: ['The high nickel content makes it resistant to corrosion', 'Iron is a transition metal', 'Iron is ductile', 'Iron is magnetic'],
      },
      {
        label: 'b',
        text: 'Two compounds present in the meteorite rock are listed below. **Write down** the missing name and formula.\n\n| Name | Formula |\n|---|---|\n| [blank] | NiO |\n| Iron sulfide | [blank] |',
        marks: 2,
        ph: 'Nickel oxide; FeS',
        widget: 'fill_blank',
        widgetOptions: ['Nickel oxide', 'Nickel(II) oxide', 'Iron sulfide', 'FeS', 'NiO', 'Fe₂S₃', 'NiO₂'],
      },
      {
        label: 'c',
        text: 'Traces of unknown element W were also found. The electron configuration of element W is 2, 8, 6.\n\n**Identify** element W.',
        marks: 1,
        ph: 'Sulfur (S) — 16 electrons, Group 6, Period 3',
      },
      {
        label: 'd',
        text: 'Analysis showed that one isotope of element W had 18 neutrons. **Determine** the mass number of this isotope.',
        marks: 2,
        ph: 'Protons = 16; mass number = 16 + 18 = 34',
      },
      {
        label: 'e',
        text: 'The formula FeSO₄·7H₂O means that one mole of FeSO₄ contains seven moles of water molecules. **Calculate** the mass of water present in 4 moles of the hydrated salt.',
        marks: 3,
        ph: '4 mol × 7 = 28 mol H₂O; molar mass H₂O = 18 g/mol; 28 × 18 = 504 g',
      },
    ],
  },

  // ── Q2 (15 marks, Crit A) — Painted murals, HCl, molecular models ─────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Transition metals, moles, molecular models & acids — mineral pigment murals',
    marks: 15,
    stem: 'Prehistoric cave painters and ancient Egyptians used mineral pigments — mostly transition metal compounds — to create murals that survive thousands of years. Today, conservators apply lactic acid solution to remove mineral deposits from mural surfaces before restoration. Lactic acid (IUPAC: 2-hydroxypropanoic acid, C₃H₆O₃) is a mild organic acid. Mural plaster typically contains SiO₂, Na₂O and magnesium oxide (MgO) fused together.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** one of the transition metals used in mineral pigments, giving the name of the metal and its symbol.',
        marks: 1,
        ph: 'Iron and Fe / Cobalt and Co / Chromium and Cr (any one)',
      },
      {
        label: 'b',
        text: '**Identify** the element in these compounds that is in group 2 and period 3.',
        marks: 1,
        ph: 'Magnesium or Mg',
      },
      {
        label: 'c',
        text: 'A 50.0 g sample of mural plaster contains 38.0 g of SiO₂ and 7.0 g of Na₂O; the remainder is MgO. **Calculate** the number of moles of magnesium oxide in the sample. Give your answer to two significant figures.',
        marks: 4,
        ph: 'Mass MgO = 50.0−38.0−7.0 = 5.0 g; M(MgO) = 40 g/mol; n = 5.0/40 = 0.13 mol',
      },
      {
        label: 'd',
        text: 'Lactic acid (2-hydroxypropanoic acid) is applied as a cleaning solution. Its molecular formula is C₃H₆O₃.\n\nIn the following models, C atoms are black, H atoms are white and O atoms are red. **Select** the model showing lactic acid.',
        marks: 1,
        ph: 'Select model A — correct 3D structure for C₃H₆O₃',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'e',
        text: 'The conservator wants to find the most acidic H₂SO₄ concentration for removing carbonate deposits. **Select** the most acidic option from the list below.',
        marks: 1,
        ph: 'Most acidic = lowest pH = H₂SO₄ (pH = 0.5)',
        widget: 'radio_select',
        widgetOptions: ['H₂SO₄ (pH = 3.0)', 'H₂SO₄ (pH = 0.5)', 'H₂SO₄ (pH = 2.0)', 'H₂SO₄ (pH = 1.5)'],
      },
      {
        label: 'f',
        text: 'The conservator added HCl to water for a test reaction. Before adding HCl the temperature was 25°C; after dissolving it was 42°C.\n\n**Measure** the temperature after the HCl was added and **calculate** the temperature change.',
        marks: 2,
        ph: 'Temperature after = 42°C; temperature change = +17°C',
      },
      {
        label: 'g',
        text: 'Using your answer from part (f), **state** the type of reaction when HCl dissolves in water.',
        marks: 1,
        ph: 'Exothermic (temperature increased)',
      },
      {
        label: 'h',
        text: 'After the lactic acid cleaning is complete, the excess acid is neutralised using magnesium hydroxide Mg(OH)₂. Select the options to **complete** the balanced equation:\n\n[?] HCl + [?] Mg(OH)₂ → [?] [?] + [?] H₂O',
        marks: 4,
        ph: '2HCl + Mg(OH)₂ → 1MgCl₂ + 2H₂O; blanks: 2, 1, MgCl₂, 2',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', 'MgCl₂', 'MgCl', 'Mg(OH)₂', 'HCl'],
      },
    ],
  },

  // ── Q3 (6 marks, Crit C/D) — NaOCl wound cleaning ───────────────────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'NaOCl hazards, Lewis structures & disinfectant effectiveness',
    marks: 6,
    stem: 'Sodium hypochlorite (NaOCl) is a common disinfectant used in hospitals to clean wounds and surfaces. It must be diluted carefully before use as concentrated NaOCl is corrosive. NaOCl kills bacteria by releasing active chlorine that oxidises bacterial cell walls. Hospitals compare a one-step and a two-step disinfection process for medical equipment.',
    tasks: [
      {
        label: 'a',
        text: 'Concentrated NaOCl damages skin and tissue. **Select** which of the following hazard symbols you would expect to find on a bottle of concentrated NaOCl.',
        marks: 1,
        ph: 'NaOCl concentrated = corrosive — select symbol A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'b',
        text: '**Select** which of the following diagrams represents the Lewis structure (electron dot or dot cross diagram) of HCl.',
        marks: 1,
        ph: 'HCl = H–Cl with three lone pairs on Cl — select C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'A researcher compared two disinfection processes on medical instruments. Results are shown in the graph.\n\n**State** the percentage of bacteria remaining on equipment after using a one-step disinfection process for 2 hours.',
        marks: 1,
        ph: 'Read graph at 2h for one-step: approximately 8–12% bacteria remaining',
      },
      {
        label: 'd',
        text: '**State** the time required to remove 99% of bacteria using the two-step process.',
        marks: 1,
        ph: 'Read graph: two-step reaches 1% remaining at ≈ 8 hours',
      },
      {
        label: 'e',
        text: 'Use the data in the graph to **justify** which process and time you would recommend for disinfecting medical equipment.',
        marks: 2,
        ph: 'Recommend two-step; removes more bacteria; cite specific data values from graph',
      },
    ],
  },

  // ── Q4 (18 marks, Crit A/B/C) — MnO₂ catalyst H₂O₂ decomposition ─────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Decomposition, hypothesis, variables & data analysis — MnO₂ variants on H₂O₂',
    marks: 18,
    stem: 'Manganese dioxide (MnO₂) is one of the most effective catalysts for H₂O₂ decomposition. Researchers want to compare different forms and concentrations of MnO₂ to find the most effective variant:\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nThe research team has MnO₂ in powder, granule and solution forms. They want to find which gives the greatest rate of O₂ production.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** how you would test that oxygen was produced in the decomposition reaction.',
        marks: 2,
        ph: 'Collect gas in test tube; hold glowing splint at mouth — it relights',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis to test which particle size of MnO₂ (powder or granule) will give the greatest increase in rate of reaction. You should use collision theory in your answer.',
        marks: 3,
        ph: 'If MnO₂ is powder → larger surface area → more frequent collisions with H₂O₂ → faster rate',
      },
      {
        label: 'c',
        text: 'A researcher compared five forms of MnO₂ catalyst, measuring O₂ volume collected in a eudiometer over 30 seconds.\n\n**Identify** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable one:\n\nControl variable two:',
        marks: 4,
        ph: 'IV=form/type of MnO₂; DV=volume O₂ in 30s; CV1=mass MnO₂; CV2=volume/concentration H₂O₂',
      },
      {
        label: 'd',
        text: 'The researcher formulated the hypothesis:\n\n*"The best MnO₂ form will produce the darkest colour change because the most oxygen is produced."*\n\n**State** and **justify** whether this hypothesis is valid.',
        marks: 3,
        ph: 'Invalid: colour change of MnO₂ does not measure rate; O₂ volume over time is the valid measure',
      },
      {
        label: 'e',
        text: 'A second researcher measured O₂ volume after 30 s for three trials:\n\n| Volume from trial one / cm³ | Volume from trial two / cm³ | Volume from trial three / cm³ |\n|---|---|---|\n| 48 | 50 | 52 |\n\n**Calculate** the average volume of oxygen collected and **determine** the rate of oxygen production.',
        marks: 3,
        ph: 'Average = (48+50+52)/3 = 50 cm³; rate = 50÷30 = 1.67 cm³ s⁻¹',
      },
      {
        label: 'f',
        text: 'The researcher carried out a fourth trial and collected 65 cm³ of O₂. The equipment for trial 4 is shown below.\n\n**Suggest** two reasons why the result for trial 4 was not consistent with the previous trials. **Justify** your answer.',
        marks: 3,
        ph: 'Bung not sealed / extra H₂O₂ added / time exceeded 30s; justification: additional O₂ captured',
      },
    ],
  },

  // ── Q5 (16 marks, Crit B) — Design: MnO₂ form comparison ─────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — H₂O₂ decomposition rate with 5 MnO₂ forms',
    marks: 16,
    stem: 'The researchers decided to compare five forms of MnO₂ catalyst: fine powder, coarse powder, small granules, large granules, and MnO₂ solution.\n\n2H₂O₂(aq) → 2H₂O(l) + O₂(g)\n\nYou are provided with a eudiometer, stopwatch, five forms of MnO₂, and a 1.0 mol/dm³ H₂O₂ solution. The independent variable in your investigation is the form of MnO₂ used. One control variable is the concentration of hydrogen peroxide.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine the rate of H₂O₂ decomposition with each MnO₂ form. In your answer, you should include:\n- the independent variable, the dependent variable and one other control variable\n- a list of additional equipment you will use\n- details of the method to allow you to collect sufficient data\n- how you will ensure that your method is safe.',
        marks: 16,
        ph: 'Variables; equipment (balance, stopwatch); method (3 repeats, same mass catalyst, 30s window); safety (H₂O₂ oxidiser/irritant)',
      },
    ],
  },

  // ── Q6 (11 marks, Crit C) — Hair dye colorimetry ─────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data interpretation, graphing & validity — hair dye oxidant concentration',
    marks: 11,
    stem: 'Hair dyes contain an oxidant (usually H₂O₂) which opens hair cuticles and allows colour pigment to bond. The concentration of oxidant affects how much the cuticle opens — too low and colour does not absorb, too high and hair is damaged. Quality control labs use a spectrophotometer to measure oxidant concentration in dye batches.',
    tasks: [
      {
        label: 'a',
        text: '**Interpret** these results and **explain** them using scientific reasoning.',
        marks: 3,
        ph: 'Higher oxidant concentration → more cuticles opened → more pigment absorbed → stronger colour; levels off at high concentration',
      },
      {
        label: 'b',
        text: 'The results for different known oxidant concentrations are shown in the table below.\n\n| Oxidant concentration / % | Signal strength |\n|---|---|\n| 1 | 400 |\n| 2 | 1100 |\n| 3 | 1900 |\n| 4 | 2800 |\n| 6 | 3950 |\n| 8 | 4350 |\n| 10 | 4800 |\n\n**Present** this data using a graph. Label the axes and add a title.',
        marks: 5,
        ph: 'Scatter/line graph; x=oxidant conc (%); y=signal strength; title; scale; 5+ points correct',
      },
      {
        label: 'c',
        text: 'Use your graph in part (b) to **predict** the signal output expected for a 5% oxidant solution.',
        marks: 1,
        ph: 'Interpolate between 4% (2800) and 6% (3950) → approximately 3375 ± 200',
      },
      {
        label: 'd',
        text: 'A cosmetics supplier provided six batches of oxidant solution. The average signal output was 2650. The lab needs to confirm no individual batch exceeds 4% concentration.\n\n**Comment** on the validity of using an average.',
        marks: 2,
        ph: 'Not valid: average does not show individual batch signals; one batch could be above 4% while average appears below',
      },
    ],
  },

  // ── Q7 (9 marks, Crit A/D) — Parchment vs coated paper properties ─────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Parchment material properties & long-term cultural preservation',
    marks: 9,
    stem: 'Parchment (made from animal skin) was used for centuries to record legal documents, religious texts and maps. Medieval parchment survives in archives around the world. Modern archives use acid-free paper for documents intended to last more than 200 years. Some documents are also coated with thin polymeric films for extra protection.',
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one property of parchment that allows it to be rolled into a scroll for storage.',
        marks: 1,
        ph: 'Flexible / malleable / resilient — can bend without cracking',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why some archive papers are coated with a thin polymeric film.',
        marks: 1,
        ph: 'Waterproofing / protection from humidity and air pollutants / physical strength',
      },
      {
        label: 'c',
        text: 'UV ozone (O₃) treatment is an alternative to chlorine (Cl₂) for bleaching archive paper. **State** a reason why conservators would choose O₃ over Cl₂ for archive paper restoration.',
        marks: 1,
        ph: 'O₃ produces O₂ which is non-toxic; Cl₂ produces toxic by-products that could degrade paper fibres',
      },
      {
        label: 'd',
        text: 'A researcher argues that medieval parchment is superior to acid-free paper for preserving historical documents. Use information and knowledge from your wider MYP studies to **discuss** this suggestion. In your answer, you should include:\n- the advantages and disadvantages of parchment\n- the advantages and disadvantages of acid-free paper\n- a conclusion, with justification, on which is best for long-term preservation.',
        marks: 6,
        ph: 'Parchment: adv=resilient/animal collagen; disadv=expensive/susceptible to humidity. Acid-free: adv=cheap/stable pH; disadv=thinner/shorter lifespan. Justified conclusion.',
      },
    ],
  },

  // ── Q8 (10 marks, Crit D) — Sugarcane bagasse vs tree paper implications ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental & economic implications — sugarcane bagasse vs tree paper',
    marks: 10,
    stem: 'Sugarcane bagasse is the fibrous residue left after sugarcane juice is extracted. It is an agricultural by-product that can be processed into paper. The infographic below compares "bagasse-to-paper" and "tree-to-paper" production processes.',
    tasks: [
      {
        label: '',
        text: 'Using the infographic and knowledge from your wider MYP studies, **discuss** the implications of both types of paper production. In your answer, you should include:\n- a comparison of the impacts on the environment\n- a comparison of the impacts on the economy\n- your conclusion, with justification, on which paper production process is best.',
        marks: 10,
        ph: 'Environment: bagasse=uses waste/no deforestation vs tree=deforestation/habitat loss; Economy: bagasse=new industry vs tree=established; Justified conclusion',
      },
    ],
  },

  // ── Q9 (6 marks, Crit D) — Cave paintings vs electronic archives ──────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Cultural advantages — cave art preservation vs electronic archives',
    marks: 6,
    stem: "Prehistoric cave paintings represent some of humanity's earliest cultural expression. Conservators are increasingly digitising these images and storing them in cloud-based archives.",
    tasks: [
      {
        label: '',
        text: '**Suggest** and **justify** the **cultural** advantages and disadvantages of preserving cave paintings physically and through electronic digital archiving.',
        marks: 6,
        ph: 'Physical: authentic/tangible/irreplaceable; disadv=fragile/access limited. Digital: global sharing/searchable; disadv=technology dependence/cultural gap. Justified conclusion.',
      },
    ],
  },
]
