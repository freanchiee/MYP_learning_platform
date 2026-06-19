import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2024-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (10 marks, Crit A) — Combustion & flower chromatography ─────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, Lewis structures & chromatography — camping gas and flower pigments',
    marks: 10,
    stem: 'Camping gas is a mixture of butane and propane. When butane burns completely in oxygen, it produces carbon dioxide and water. The word equation for the complete combustion of butane is: butane + oxygen → carbon dioxide + water.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="320" fill="#ffffff"/><text x="260" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Chromatogram of flower-petal pigments</text><rect x="170" y="40" width="120" height="250" fill="#fbfdfe" stroke="#5b6b78" stroke-width="1.5"/><line x1="170" y1="62" x2="290" y2="62" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 3"/><text x="296" y="66" font-size="10" fill="#475569">solvent front</text><line x1="170" y1="270" x2="290" y2="270" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/><text x="296" y="274" font-size="10" fill="#94a3ad">application point (baseline)</text><ellipse cx="230" cy="78" rx="34" ry="9" fill="#7c3aed" opacity="0.75"/><text x="150" y="82" font-size="11" font-weight="700" text-anchor="end" fill="#7c3aed">Band 1</text><ellipse cx="230" cy="150" rx="34" ry="9" fill="#eab308" opacity="0.8"/><text x="150" y="154" font-size="11" font-weight="700" text-anchor="end" fill="#a16207">Band 2</text><ellipse cx="230" cy="240" rx="34" ry="10" fill="#16a34a" opacity="0.8"/><text x="150" y="244" font-size="11" font-weight="700" text-anchor="end" fill="#15803d">Band 3</text><g stroke="#1f2d3a" stroke-width="1"><line x1="330" y1="62" x2="330" y2="270"/></g><g font-size="8" fill="#475569" text-anchor="middle"><line x1="326" y1="270" x2="334" y2="270" stroke="#1f2d3a"/><text x="345" y="273">0</text><line x1="326" y1="249" x2="334" y2="249" stroke="#1f2d3a"/><text x="345" y="252">2</text><line x1="326" y1="228" x2="334" y2="228" stroke="#1f2d3a"/><text x="345" y="231">4</text><line x1="326" y1="207" x2="334" y2="207" stroke="#1f2d3a"/><text x="345" y="210">6</text><line x1="326" y1="186" x2="334" y2="186" stroke="#1f2d3a"/><text x="345" y="189">8</text><line x1="326" y1="165" x2="334" y2="165" stroke="#1f2d3a"/><text x="345" y="168">10</text><line x1="326" y1="123" x2="334" y2="123" stroke="#1f2d3a"/><text x="345" y="126">14</text><line x1="326" y1="62" x2="334" y2="62" stroke="#1f2d3a"/><text x="345" y="65">20</text></g><text x="385" y="170" font-size="9" fill="#94a3ad" transform="rotate(90 385 170)">distance from baseline / cm</text></svg>',
      },
      caption: 'Pigment bands separated up the chromatography paper; use the ruler on the right (cm) to read each band\'s distance and the solvent front for the Rf calculation.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct coefficients to balance the chemical equation for the complete combustion of butane:\n\n[?]C₄H₁₀ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O (reactants correct [1]; products correct [1])',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      },
      {
        label: 'b',
        text: 'Banana aroma is partly caused by the compound isoamyl acetate. The structure of isoamyl acetate contains a characteristic functional group. **Identify** the functional group present in isoamyl acetate that is circled.',
        marks: 1,
        ph: 'Ester / ester group (–COO–)',
      },
      {
        label: 'c',
        text: 'Chlorine gas (Cl₂) is used as a disinfectant. **Select** the Lewis structure (dot and cross) for Cl₂.',
        marks: 1,
        ph: 'Cl₂ has a single covalent bond with 3 lone pairs on each Cl — select B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: 'Flower petals produce coloured pigments. The technique of chromatography can be used to separate these pigments.\n\n**Select** the term that best describes a flower petal extract used in chromatography.',
        marks: 1,
        ph: 'Flower petal extract contains many different pigments dissolved together — a mixture',
        widget: 'radio_select',
        widgetOptions: ['An element', 'A compound', 'A mixture', 'An allotrope'],
      },
      {
        label: 'e',
        text: '**Identify** the organic pigments corresponding to each band in the chromatography column.\n\nBand 1: [top]\nBand 2: [middle]\nBand 3: [bottom near petal stain]',
        marks: 2,
        ph: 'Band 1 = Anthocyanin C (highest Rf); Band 2 = Flavonoid B; Band 3 = Chlorophyll A (one correct [1]; all correct [2])',
      },
      {
        label: 'f',
        text: 'The Rf value is the ratio of the solute\'s distance travelled to the solvent\'s distance travelled.\n\nUsing the ruler in the diagram, **calculate** the Rf value for band 1.',
        marks: 3,
        ph: 'Read from the ruler: solvent front = 20 cm; Band 1 distance ≈ 18.5 cm; Rf = 18.5/20 = 0.93 (±0.03)',
      },
    ],
  },

  // ── Q2 (9 marks, Crit A) — Baking soda, vinegar, pH ─────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'pH, acids, salts & molar mass — baking soda and vinegar',
    marks: 9,
    stem: 'Baking soda (sodium hydrogen carbonate, NaHCO₃) and vinegar (dilute acetic acid, CH₃COOH) are common household chemicals. When mixed, they react vigorously. Gardeners sometimes use vinegar to lower soil pH for acid-loving plants.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Universal-indicator pH scale</text><defs><linearGradient id="ph" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d32f2f"/><stop offset="0.2" stop-color="#f57c00"/><stop offset="0.35" stop-color="#fbc02d"/><stop offset="0.5" stop-color="#7cb342"/><stop offset="0.6" stop-color="#2e7d32"/><stop offset="0.75" stop-color="#00897b"/><stop offset="0.9" stop-color="#1565c0"/><stop offset="1" stop-color="#4a148c"/></linearGradient></defs><rect x="30" y="60" width="500" height="34" fill="url(#ph)" stroke="#5b6b78"/><g font-size="10" fill="#1f2d3a" text-anchor="middle">' +
          [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(function(n){var x=30+n*(500/14);return '<line x1="'+x+'" y1="94" x2="'+x+'" y2="100" stroke="#5b6b78"/><text x="'+x+'" y="112">'+n+'</text>';}).join('') +
          '</g><text x="60" y="132" font-size="10" font-weight="700" fill="#b71c1c">acidic</text><text x="270" y="132" font-size="10" font-weight="700" text-anchor="middle" fill="#2e7d32">neutral</text><text x="500" y="132" font-size="10" font-weight="700" text-anchor="end" fill="#4a148c">alkaline</text><g><polygon points="135,58 129,48 141,48" fill="#b71c1c"/><text x="135" y="44" font-size="10" font-weight="700" text-anchor="middle" fill="#b71c1c">vinegar (pH 3)</text></g><g><polygon points="280,58 274,48 286,48" fill="#2e7d32"/><text x="280" y="44" font-size="10" font-weight="700" text-anchor="middle" fill="#2e7d32">target / NaCl (pH 7)</text></g><g><polygon points="351,98 345,108 357,108" fill="#1565c0"/><text x="351" y="124" font-size="10" font-weight="700" text-anchor="middle" fill="#1565c0">baking soda (pH 9)</text></g><text x="280" y="168" font-size="10" fill="#94a3ad" text-anchor="middle">Adding vinegar moves the baking-soda solution left (lower pH) toward the neutral target.</text></svg>',
      },
      caption: 'Where vinegar, baking-soda solution and the neutral salt sit on the pH scale; adding acid lowers pH toward the pH 7 target.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student tests a sample of white vinegar with universal indicator.\n\n**Select** the pH reading that is most likely for white vinegar.',
        marks: 1,
        ph: 'Vinegar is a weak acid — pH 3',
        widget: 'radio_select',
        widgetOptions: ['3', '7', '9', '12'],
      },
      {
        label: 'b',
        text: 'Baking soda solution has pH = 9. The pH target for the acid-loving plant is pH = 7.\n\n**Outline** how you could adjust the pH of the baking soda solution to reach pH = 7.',
        marks: 2,
        ph: 'Decrease the pH / increase the acidity by adding vinegar / acetic acid / any dilute acid',
      },
      {
        label: 'c',
        text: 'Washing soda (sodium carbonate, Na₂CO₃) is closely related to baking soda. Using the periodic table, **calculate** the molar mass of sodium carbonate.',
        marks: 2,
        ph: 'M(Na₂CO₃) = (2×23) + 12 + (3×16) = 46 + 12 + 48 = 106 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'Sodium hydrogen carbonate reacts with hydrochloric acid (HCl) to produce a salt and two other products.\n\nNaHCO₃ + HCl → salt + product A + product B\n\n**Select** the other two products that are formed when sodium hydrogen carbonate reacts with hydrochloric acid.',
        marks: 2,
        ph: 'Products are H₂O and CO₂ (in either order)',
        widget: 'inline_dropdown_select',
        widgetItems: ['Product A', 'Product B'],
        widgetOptions: ['H₂O', 'CO₂', 'H₂', 'NaOH', 'Cl₂'],
      },
      {
        label: 'e',
        text: '**Determine** the formula of the salt that is produced when sodium hydrogen carbonate reacts with hydrochloric acid.',
        marks: 1,
        ph: 'NaCl (sodium chloride; correct subscripts required)',
      },
      {
        label: 'f',
        text: '**State** the pH of a solution of the salt produced in part (e).',
        marks: 1,
        ph: 'pH = 7 (NaCl is a neutral salt formed from strong acid + strong base)',
      },
    ],
  },

  // ── Q3 (9 marks, Crit A) — Ammonia synthesis, gas particles ─────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Balancing equations, particle model & diffusion — Haber process',
    marks: 9,
    stem: 'The Haber process is one of the most important chemical reactions in the world. It produces ammonia from nitrogen and hydrogen. Ammonia is used to make fertilisers, which help grow much of the world\'s food supply.\n\nHigh temperatures and pressures are used in the Haber process, which can cause gases such as ammonia to spread into the surrounding environment.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Ammonia gas spreading from a leak',
        mode: 'diffusion',
        substance: 'ammonia (NH₃)',
        particleCount: 40,
        source: 'Particle model — random motion and diffusion of a gas',
      },
      caption: 'Press Play to release ammonia particles from the leak: in random, high-energy motion they spread out from high to low concentration to fill the space — this is diffusion.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write down** the balanced chemical equation for the formation of ammonia from nitrogen and hydrogen in the Haber process.',
        marks: 2,
        ph: 'N₂ + 3H₂ → 2NH₃ (reactants correct [1]; products correct [1])',
      },
      {
        label: 'b',
        text: 'In the box below, **draw** a diagram showing the arrangement of particles in a gas.',
        marks: 1,
        ph: 'Two or more particles randomly placed, not touching each other',
      },
      {
        label: 'c',
        text: '**Outline** how particles move in a gas.',
        marks: 2,
        ph: 'Random motion; high kinetic energy / high speed',
      },
      {
        label: 'd',
        text: 'Ammonia has a very strong smell. Even small leaks from the Haber process plant can be detected from a great distance away.\n\n**Explain** why the ammonia smell can spread over a large area even when there is no wind. You should use scientific terminology in your answer.',
        marks: 4,
        ph: 'Ammonia is a gas; gas particles spread/move/travel out; from area of high concentration to low concentration; this is diffusion',
      },
    ],
  },

  // ── Q4 (9 marks, Crit C/B/D) — Milk protein denaturation ─────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hypothesis, measurement & denaturation — milk protein and heat',
    marks: 9,
    stem: 'Milk contains several proteins, the main ones being casein and whey. These proteins are responsible for milk\'s white appearance and nutritional value. When heated, milk proteins denature and the milk becomes less cloudy.\n\nA special instrument called a turbidimeter measures the cloudiness (turbidity) of a liquid — giving a numeric reading. Higher turbidity readings mean the liquid is cloudier.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Protein fraction', 'Starting temperature / °C', 'Temperature at which protein denatures / °C'],
        rows: [
          ['Casein', '20', '82'],
          ['Whey', '20', 'to be measured'],
        ],
      },
      caption: 'Denaturation results for the separated milk-protein fractions. Casein denatures at 82 °C; measure (read off) the whey value to complete the table in part (c).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Two students are investigating the cloudiness of heated milk. One student uses a turbidimeter; the other holds the test tube up to the light and estimates cloudiness by eye.\n\n**Justify** which method gives a better measurement of milk cloudiness.',
        marks: 1,
        ph: 'Turbidimeter — gives quantitative/numerical data OR more accurate/precise OR removes human error / subjective judgement',
      },
      {
        label: 'b',
        text: 'A student wants to investigate how the concentration of casein affects the temperature at which milk denatures. Using the information above, **formulate** the student\'s hypothesis.',
        marks: 3,
        ph: 'If the concentration of casein is increased; Then the milk will denature at a lower/higher temperature / turbidity will change more; Because casein concentration changes the protein structure / affects the stability of the protein',
      },
      {
        label: 'c',
        text: 'A student separated full-fat milk into casein and whey fractions, heated each one and measured the temperature when the protein became denatured. The results are shown below.\n\n| | Starting temperature / °C | Temperature at which protein denatures / °C |\n|---|---|---|\n| Casein | 20 | 82 |\n| Whey | 20 | [blank] |\n\n**Measure** the temperature at which the whey protein becomes denatured. Add your value to the table.',
        marks: 1,
        ph: 'Accept any single value in the range 70–78 °C',
      },
      {
        label: 'd',
        text: 'The diagram below shows two different setups for measuring the temperature of denaturing milk proteins.\n\n**Select** which setup would produce the most valid measurement of the temperature at which the proteins denature. **Justify** your answer.',
        marks: 1,
        ph: 'Method A — thermometer is measuring where the milk protein is (directly in the protein fraction, not only in the water bath)',
        widget: 'radio_select',
        widgetOptions: ['Method A', 'Method B'],
      },
      {
        label: 'e',
        text: '**Predict** the temperature at which a mixture of casein and whey proteins would denature. **Justify** your answer.',
        marks: 3,
        ph: 'Accept range 70–78 °C; unit °C; because that is the maximum temperature at which the individual protein components denatured / whey denatures first since it has a lower denaturation temperature',
      },
    ],
  },

  // ── Q5 (8 marks, Crit B/C) — Kombucha fermentation ──────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Kombucha fermentation investigation — type of tea and pH',
    marks: 8,
    stem: 'Kombucha is a fermented drink made by adding a SCOBY (symbiotic culture of bacteria and yeast) to sweetened tea. During fermentation, the bacteria and yeast produce acids, which lower the pH of the drink. A student has decided to investigate how the type of tea used affects the pH of the final kombucha.\n\nThey record the following data after 7 days of fermentation:\n\n| Tea type | Starting pH of tea | Final pH of kombucha | Acidity score (taste panel) |\n|---|---|---|---|\n| Green tea | 7.2 | 3.2 | 8 |\n| Black tea | 7.0 | pH meter failure | 6 |\n| White tea | 7.1 | 3.6 | 7 |',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Tea type', 'Starting pH of tea', 'Final pH of kombucha', 'Acidity score (taste panel)'],
        rows: [
          ['Green tea', '7.2', '3.2', '8'],
          ['Black tea', '7.0', 'pH meter failure', '6'],
          ['White tea', '7.1', '3.6', '7'],
        ],
      },
      caption: 'Fermentation results after 7 days: starting pH ≈ 7 for every tea falls during fermentation. Note the missing reading for black tea.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables for this investigation.',
        marks: 4,
        ph: 'IV: type of tea; DV: pH of kombucha OR acidity score; CVs x2: volume of tea, mass of SCOBY, amount of sugar, fermentation temperature, fermentation time',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable research question for this investigation.',
        marks: 2,
        ph: 'How does the type of tea affect the final pH of the kombucha / acidity of the fermented drink?',
      },
      {
        label: 'c',
        text: 'The starting pH of each tea was approximately 7. **State** what happens to the pH during kombucha fermentation.',
        marks: 1,
        ph: 'The pH decreases / the drink becomes more acidic (bacteria produce acids during fermentation)',
      },
      {
        label: 'd',
        text: 'The student was surprised to find that there was no pH reading for black tea kombucha. **Suggest** an improvement to the method to increase the validity of the data.',
        marks: 1,
        ph: 'Use a new / calibrated pH meter OR use universal indicator paper as a backup measurement',
      },
    ],
  },

  // ── Q6 (14 marks, Crit C) — Vitamin C in frozen vs fresh strawberries ─────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Criterion C: Data processing & graph — vitamin C in strawberry products',
    marks: 14,
    stem: 'Vitamin C (ascorbic acid) is an essential nutrient that the body cannot produce on its own. Strawberries are an excellent natural source of vitamin C. However, the vitamin C content changes depending on how the strawberries are processed and stored. In the presence of heat or oxygen, vitamin C oxidises and breaks down.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Vitamin C in three strawberry juices stored at 4 °C over 21 days',
        xLabel: 'Storage time / days',
        yLabel: 'Vitamin C concentration / mg 100g⁻¹',
        xAxis: { label: 'Storage time / days', min: 0, max: 21, tick: 3 },
        yAxis: { label: 'Vitamin C / mg 100g⁻¹', min: 0, max: 360, tick: 60 },
        options: [
          {
            label: 'N₂ atmosphere (no oxygen)',
            color: 'teal',
            points: [[0, 320], [3, 317], [7, 312], [14, 304], [21, 298]],
          },
          {
            label: 'Fresh-pressed (air)',
            color: 'blue',
            points: [[0, 300], [3, 272], [7, 238], [14, 188], [21, 150]],
          },
          {
            label: 'Heated to 75 °C (pasteurised)',
            color: 'orange',
            points: [[0, 210], [3, 186], [7, 158], [14, 122], [21, 96]],
          },
        ],
        note: 'Toggle each juice on/off and drag the cursor to read a value. The pasteurised juice starts lowest; the N₂ juice falls only ~22 mg 100g⁻¹ over the 21 days.',
      },
      caption: 'Vitamin C concentration of three strawberry juices over 21 days — read off start values (part b), the N₂ rate of change (part c) and the protective effect of excluding oxygen (part d).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The table below shows the vitamin C concentration of different strawberry products:\n\n| Strawberry product | Vitamin C concentration / mg 100g⁻¹ |\n|---|---|\n| Fresh strawberries | 59 |\n| Frozen strawberries | 48 |\n| Strawberry jam | 12 |\n| Strawberry yogurt | 21 |\n| Freeze-dried strawberries | 53 |\n\n**Present** this data in a graph.',
        marks: 5,
        ph: 'Title linking vit C and product type; x-axis = product type; y-axis = vit C concentration; correct scale from 0; all values plotted correctly (bar chart)',
      },
      {
        label: 'b',
        text: 'A student measured the vitamin C concentration in three strawberry juices stored at 4°C over 21 days:\n- fresh-pressed strawberry juice\n- juice heated to 75°C (pasteurised)\n- juice stored in a nitrogen (N₂) atmosphere (no oxygen)\n\nUsing the graph of vitamin C concentration over 21 days, **identify** which juice has the lowest vitamin C concentration at the start of the investigation. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Heat-treated (pasteurised) juice; vitamin C is broken down at high temperatures; vitamin C is oxidised / denatured by heat',
      },
      {
        label: 'c',
        text: 'Using the graph from part (b), **calculate** the rate of change in vitamin C concentration for the N₂-atmosphere strawberry juice over the 21-day period.',
        marks: 2,
        ph: 'Change = initial − final ≈ 320 − 298 = 22 mg 100g⁻¹; rate = 22/21 = 1.05 mg 100g⁻¹ day⁻¹ (accept 0.85–1.25)',
      },
      {
        label: 'd',
        text: 'A student made the following hypothesis:\n\n"If a whole strawberry is left for several weeks, the vitamin C concentration will decrease because the vitamin C will be oxidised."\n\nUsing the graph from part (b), **evaluate** the validity of this hypothesis.',
        marks: 4,
        ph: 'The vitamin C will not be oxidised as much; because the juice/pulp inside a whole strawberry is not exposed to oxygen / lower exposure to oxygen; due to the protective outer layer of the fruit skin; therefore the hypothesis is invalid',
      },
    ],
  },

  // ── Q7 (16 marks, Crit B) — Packaging film degradation design ────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — packaging film degradation in soil',
    marks: 16,
    stem: 'Environmental pollution from plastic packaging is a global problem. Scientists are investigating biodegradable packaging films made from different plant-based materials. A research company has developed four types of packaging film:\n- conventional plastic (polyethylene)\n- cornstarch-based film\n- cassava-based film\n- seaweed-based film\n\n**Design** an investigation to determine which packaging film degrades fastest when buried in soil. You are provided with standard laboratory equipment, pre-weighed samples of each film and a sample of standard garden soil.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Packaging film (independent variable)', 'Base material', 'Starting mass / g', 'Biodegradable?'],
        rows: [
          ['Conventional plastic', 'polyethylene (oil-based)', '5.00', 'no (control)'],
          ['Cornstarch-based film', 'cornstarch (plant)', '5.00', 'yes'],
          ['Cassava-based film', 'cassava starch (plant)', '5.00', 'yes'],
          ['Seaweed-based film', 'seaweed extract (plant)', '5.00', 'yes'],
        ],
      },
      caption: 'The four pre-weighed film samples to bury in soil. Film type is the independent variable; equal starting masses let you compare mass loss (the dependent variable) fairly.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine which packaging film degrades fastest when buried in soil. You are provided with standard laboratory equipment, pre-weighed samples of each film and a sample of standard garden soil.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
        marks: 16,
        ph: 'IV: type of film; DV: mass loss/change; CVs: mass of soil, depth of burial, temperature, time; equipment; method with 4 film types + control, 3 repeats, calculate mean mass loss',
      },
    ],
  },

  // ── Q8 (8 marks, Crit D/C) — River salinity and fish aquaculture ─────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Electrical conductivity, salinity & fish yield — aquaculture water quality',
    marks: 8,
    stem: 'Global demand for fish protein is growing rapidly as human populations increase. Many countries have turned to aquaculture (fish farming) to supplement wild fisheries. The salinity of the water in which fish are farmed is critical — it must fall within the tolerance range of the species being farmed. Salinity in water is caused by dissolved salts such as sodium chloride, which can be measured using electrical conductivity.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Percentage yield of farmed fish vs salt concentration',
        xLabel: 'Salt concentration / mmol dm⁻³',
        yLabel: 'Yield relative to fresh water / %',
        xAxis: { label: 'Salt concentration / mmol dm⁻³', min: 0, max: 2, tick: 0.4 },
        yAxis: { label: 'Yield / %', min: 0, max: 140, tick: 20 },
        options: [
          {
            label: 'Tilapia',
            color: 'teal',
            points: [[0, 100], [0.4, 118], [0.8, 130], [1.2, 110], [1.6, 78], [2, 50]],
          },
          {
            label: 'Fish species A',
            color: 'orange',
            points: [[0, 100], [0.4, 98], [0.5, 96], [0.8, 70], [1.2, 40], [1.6, 18], [2, 6]],
          },
          {
            label: 'Fish species B',
            color: 'purple',
            points: [[0, 100], [0.4, 100], [0.8, 98], [1.2, 92], [1.6, 74], [2, 52]],
          },
        ],
        note: 'Toggle each species and drag the cursor to read a value. Tilapia peaks near 0.8 mmol dm⁻³; species A falls sharply above 0.5, while species B holds up to ~1.2.',
      },
      caption: 'Relative percentage yield against salt concentration for tilapia and two other species — read the tilapia optimum (part c) and compare species A and B tolerance (part d).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why electrical conductivity can be used to determine the salt content of water.',
        marks: 2,
        ph: 'Na⁺ and Cl⁻ are charged particles; ions are mobile when dissolved in water / ions can conduct electricity',
      },
      {
        label: 'b',
        text: 'The table below shows electrical conductivity data for water from four different aquaculture sites.\n\n| Location | Amazon delta | Nile estuary | Baltic Sea | Mediterranean Sea |\n|---|---|---|---|---|\n| Electrical conductivity / mS cm⁻¹ | 0.18 | 0.52 | 8.3 | 52.4 |\n| Dissolved salt / mg L⁻¹ | 120 | 380 | 6200 | 38 000 |\n\nUsing the information in the table, **identify** the location of water with the highest salinity. **Justify** your answer.',
        marks: 2,
        ph: 'Mediterranean Sea; highest electrical conductivity OR highest dissolved salt concentration',
      },
      {
        label: 'c',
        text: 'The salinity of water affects the yield of farmed tilapia. The graph shows the percentage yield of tilapia relative to fresh water conditions at different salt concentrations.\n\n**Determine** the optimum concentration of salt for maximum tilapia yield.',
        marks: 1,
        ph: '0.8 ±0.15 mmol dm⁻³ (read from graph at maximum of tilapia curve)',
      },
      {
        label: 'd',
        text: '**Compare** how salinity affects the percentage yield of fish species A and fish species B. You should include data from the graph in your answer.',
        marks: 3,
        ph: 'Species A: yield decreases sharply above 0.5 mmol dm⁻³; Species B: yield decreases more gradually / starts dropping at higher concentration (1.2 mmol dm⁻³); Species B tolerates higher salinity than Species A',
      },
    ],
  },

  // ── Q9 (17 marks, Crit D) — Atmospheric water generation ─────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Atmospheric water generation — fog collection systems',
    marks: 17,
    stem: 'In many arid regions of the world, fresh water from rivers, lakes, and underground aquifers is very scarce. However, fog — which is composed of tiny water droplets suspended in the air — is common in certain coastal and mountainous regions. Atmospheric water generation (AWG) is the process of collecting water from atmospheric moisture such as fog, dew, or humid air.\n\nThree main types of atmospheric water generation have been developed: fog-net collection (passive), refrigeration-based condensation (active), and desiccant-based absorption. The data panels below describe these three approaches.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['AWG system', 'Energy use / efficiency', 'Setup & running cost', 'Environmental impact', 'Best suited region'],
        rows: [
          ['Fog-net collection (passive)', 'no electricity; depends on frequent fog', 'low cost, easy to maintain', 'minimal — no emissions', 'foggy coasts (e.g. coastal Chile/Peru)'],
          ['Refrigeration condensation (active)', 'high electricity demand; works in many climates', 'high cost to build and run', 'CO₂ emissions if grid is fossil-fuelled', 'humid areas with power supply'],
          ['Desiccant absorption', 'moderate energy to regenerate desiccant', 'moderate cost', 'moderate — desiccant disposal', 'hot, dry regions (e.g. Sub-Saharan Africa)'],
        ],
      },
      caption: 'Comparison of the three atmospheric water generation systems on efficiency, cost and environmental impact — use it to identify regions of greatest need (part a) and to evaluate the systems (part b).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the data in both tabs to **identify** the region with the greatest need for atmospheric water generation and **justify** why this is the case.',
        marks: 3,
        ph: 'Sub-Saharan Africa / coastal North Africa / coastal Chile and Peru; limited or no surface/groundwater; high frequency of coastal fog / arid climate; large population needing water',
      },
      {
        label: 'b',
        text: 'There are three systems used for atmospheric water generation: fog-net collection, refrigeration-based condensation and desiccant-based absorption.\n\nUsing the information provided and your wider MYP knowledge, **discuss** and **evaluate** the systems available for atmospheric water generation. In your answer you should include:\n- a comparison of the efficiencies of the three systems\n- the economic impacts of the three systems\n- the environmental impacts of the three systems\n- an appraisal of the three systems.',
        marks: 14,
        ph: 'Efficiency: fog-net passive/no energy; condensation requires electricity; desiccant moderate energy; Economy: fog-net cheap to build/maintain; condensation expensive; desiccant moderate; Environment: condensation CO₂ emissions; fog-net minimal impact; desiccant moderate; Appraisal with evidence',
      },
    ],
  },
]
