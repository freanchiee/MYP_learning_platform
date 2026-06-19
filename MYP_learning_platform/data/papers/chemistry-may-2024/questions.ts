import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2024',
  subject: 'Chemistry',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (10 marks, Crit A) — Photosynthesis, chromatography ────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Photosynthesis, Lewis structures & chromatography — coral reef algae',
    topicCanonical: 'Separation & Purification',
    topicGroup: 'States of Matter',
    marks: 10,
    stem: 'Algae carry out photosynthesis to produce glucose, which is used for food by the coral. The word equation for the process of photosynthesis is: water + carbon dioxide → glucose + oxygen.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="230" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of glucose, C₆H₁₂O₆</text><g stroke="#334155" stroke-width="1.6" fill="none"><path d="M150 150 L200 120 L260 120 L300 150 L260 182 L200 182 Z"/><line x1="200" y1="120" x2="190" y2="92"/><line x1="190" y1="92" x2="205" y2="74"/></g><g font-size="12" fill="#334155" text-anchor="middle"><text x="150" y="155">O</text><text x="200" y="116">C</text><text x="260" y="116">C</text><text x="300" y="155">C</text><text x="260" y="186">C</text><text x="200" y="186">C</text><text x="186" y="90">CH₂</text><text x="208" y="70">OH</text></g><g font-size="11" fill="#475569" text-anchor="middle"><text x="320" y="120">OH</text><text x="320" y="182">OH</text><text x="140" y="120">HO</text><text x="200" y="205">OH</text><text x="260" y="205">OH</text></g><circle cx="208" cy="71" r="20" fill="none" stroke="#e8590c" stroke-width="2.2"/><text x="380" y="74" font-size="11" fill="#e8590c" font-weight="700">circled group</text><text x="260" y="222" font-size="10" fill="#94a3ad" text-anchor="middle">Ring carbons each carry –OH groups; the highlighted group is asked about in part (b).</text></svg>',
      },
      caption: 'Glucose ring structure. The circled group (top) is the one identified in part (b).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct coefficients to balance the chemical equation for the process of photosynthesis:\n\n[?]H₂O + [?]CO₂ → [?]C₆H₁₂O₆ + [?]O₂',
        marks: 2,
        ph: '6H₂O + 6CO₂ → C₆H₁₂O₆ + 6O₂ (reactants correct [1]; products correct [1])',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '12'],
      },
      {
        label: 'b',
        text: 'Below is the structure of glucose, C₆H₁₂O₆. **Identify** the functional group that is circled.',
        marks: 1,
        ph: 'Alcohol / hydroxyl (–OH) group',
      },
      {
        label: 'c',
        text: 'Through photosynthesis, the algae also provide the coral with oxygen. **Select** the Lewis structure (dot and cross) for O₂.',
        marks: 1,
        ph: 'O₂ has a double bond: :O=O: with 2 lone pairs each — select C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="160" fill="#ffffff"/><text x="280" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four proposed Lewis (dot-and-cross) structures for O₂</text><g font-size="13" text-anchor="middle"><text x="70" y="60" fill="#0b7285" font-weight="700">A</text><text x="70" y="92" fill="#334155">:O–O:</text><text x="70" y="112" fill="#94a3ad" font-size="9">single bond</text><text x="210" y="60" fill="#0b7285" font-weight="700">B</text><text x="210" y="92" fill="#334155">O–O</text><text x="210" y="112" fill="#94a3ad" font-size="9">single bond, no lone pairs</text><text x="350" y="60" fill="#0b7285" font-weight="700">C</text><text x="350" y="92" fill="#334155">:O=O:</text><text x="350" y="112" fill="#94a3ad" font-size="9">double bond, 2 lone pairs each</text><text x="490" y="60" fill="#0b7285" font-weight="700">D</text><text x="490" y="92" fill="#334155">:O≡O:</text><text x="490" y="112" fill="#94a3ad" font-size="9">triple bond</text></g><text x="280" y="146" font-size="10" fill="#94a3ad" text-anchor="middle">Each O atom has 6 outer electrons; O₂ shares two pairs to give a double bond.</text></svg>',
          },
          caption: 'Select the structure with a double bond and two lone pairs on each oxygen.',
        },
      },
      {
        label: 'd',
        text: 'Leaves also produce pigments. The animation below shows how the pigments in a leaf are separated by the process of chromatography.\n\n**Select** the term that best describes the leaf stain used in this animation of chromatography.',
        marks: 1,
        ph: 'The leaf stain contains many pigments mixed together — Mixture',
        widget: 'radio_select',
        widgetOptions: ['An element', 'A mixture', 'An alloy', 'An allotrope'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="320" height="320" fill="#ffffff"/><text x="160" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Paper chromatography of a leaf stain</text><rect x="120" y="40" width="80" height="240" fill="#f8fafc" stroke="#5b6b78" stroke-width="2"/><rect x="118" y="36" width="84" height="10" fill="#cbd5e1" stroke="#5b6b78"/><line x1="160" y1="46" x2="160" y2="64" stroke="#94a3ad" stroke-dasharray="3 3"/><ellipse cx="160" cy="92" rx="34" ry="16" fill="#2f9e44" opacity="0.85"/><ellipse cx="160" cy="138" rx="34" ry="16" fill="#f59f00" opacity="0.85"/><ellipse cx="160" cy="184" rx="34" ry="16" fill="#e67700" opacity="0.85"/><ellipse cx="160" cy="262" rx="20" ry="9" fill="#1f2d3a"/><g font-size="9" fill="#475569"><text x="208" y="44">Cylinder cover</text><text x="208" y="96">Band 1</text><text x="208" y="142">Band 2</text><text x="208" y="188">Band 3</text><text x="208" y="266">Leaf stain</text></g><text x="160" y="306" font-size="10" fill="#94a3ad" text-anchor="middle">Several coloured pigments separate as the solvent rises — the stain is a mixture.</text></svg>',
          },
          caption: 'The leaf stain spot separates into several coloured bands as it rises.',
        },
      },
      {
        label: 'e',
        text: '**Identify** the organic pigments corresponding to each band in the chromatography column.\n\nBand 1: [top]\nBand 2: [middle]\nBand 3: [bottom near leaf stain]',
        marks: 2,
        ph: 'Band 1 = Pigment C; Band 2 = Pigment B; Band 3 = Pigment A (one correct [1]; all correct [2])',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="360" height="320" fill="#ffffff"/><text x="180" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Separated pigment bands and Rf reference</text><rect x="80" y="40" width="80" height="240" fill="#f8fafc" stroke="#5b6b78" stroke-width="2"/><line x1="80" y1="58" x2="160" y2="58" stroke="#94a3ad" stroke-dasharray="3 3"/><ellipse cx="120" cy="86" rx="33" ry="15" fill="#2f9e44" opacity="0.85"/><ellipse cx="120" cy="132" rx="33" ry="15" fill="#f59f00" opacity="0.85"/><ellipse cx="120" cy="178" rx="33" ry="15" fill="#e67700" opacity="0.85"/><polygon points="100,262 140,262 120,282" fill="#1f2d3a"/><g font-size="10" fill="#475569"><text x="168" y="60">Solvent front</text><text x="168" y="90">Band 1</text><text x="168" y="136">Band 2</text><text x="168" y="182">Band 3</text><text x="168" y="270">Leaf stain</text></g><g font-size="10" fill="#0b7285" font-weight="700"><rect x="260" y="74" width="74" height="22" fill="#e6fcf5" stroke="#0b7285"/><text x="297" y="89" text-anchor="middle">Pigment A</text><rect x="260" y="118" width="74" height="22" fill="#e6fcf5" stroke="#0b7285"/><text x="297" y="133" text-anchor="middle">Pigment B</text><rect x="260" y="162" width="74" height="22" fill="#e6fcf5" stroke="#0b7285"/><text x="297" y="177" text-anchor="middle">Pigment C</text></g><text x="180" y="306" font-size="9" fill="#94a3ad" text-anchor="middle">Match each band to a pigment: the band that travels furthest is least attracted to the paper.</text></svg>',
          },
          caption: 'Three separated bands with draggable pigment labels A, B and C.',
        },
      },
      {
        label: 'f',
        text: 'The Rf value is the ratio of the solute\'s distance travelled to the solvent\'s distance travelled. The following diagram shows how the Rf value is calculated:\n\nRf = 2.1 / 2.8 = 0.75\n\nUsing the ruler in the diagram below, **calculate** the Rf value for band 1.',
        marks: 3,
        ph: 'Solvent front from application point = 10.0; Band 1 distance = 9.8; Rf = 9.8/10.0 = 0.98 (±0.01)',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="360" height="340" fill="#ffffff"/><text x="180" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring distances for the Rf calculation</text><rect x="70" y="36" width="70" height="262" fill="#f8fafc" stroke="#5b6b78" stroke-width="2"/><line x1="70" y1="52" x2="140" y2="52" stroke="#5b6b78" stroke-dasharray="4 3"/><ellipse cx="105" cy="74" rx="28" ry="13" fill="#2f9e44" opacity="0.85"/><ellipse cx="105" cy="120" rx="28" ry="13" fill="#f59f00" opacity="0.85"/><ellipse cx="105" cy="168" rx="28" ry="13" fill="#e67700" opacity="0.85"/><polygon points="88,282 122,282 105,298 " fill="#1f2d3a"/><g font-size="9" fill="#475569"><text x="146" y="54">Solvent front</text><text x="146" y="78">Band 1</text><text x="146" y="290">Application point</text></g><g stroke="#0b7285" stroke-width="1.4"><line x1="250" y1="52" x2="250" y2="290"/></g><g font-size="8" fill="#334155" text-anchor="end"><line x1="246" y1="52" x2="254" y2="52" stroke="#334155"/><text x="244" y="55">10.0</text><line x1="246" y1="76" x2="254" y2="76" stroke="#334155"/><text x="244" y="79">9.8</text><line x1="246" y1="100" x2="254" y2="100" stroke="#334155"/><text x="244" y="103">8.0</text><line x1="246" y1="148" x2="254" y2="148" stroke="#334155"/><text x="244" y="151">6.0</text><line x1="246" y1="196" x2="254" y2="196" stroke="#334155"/><text x="244" y="199">4.0</text><line x1="246" y1="244" x2="254" y2="244" stroke="#334155"/><text x="244" y="247">2.0</text><line x1="246" y1="290" x2="254" y2="290" stroke="#334155"/><text x="244" y="293">0</text></g><text x="270" y="60" font-size="9" fill="#0b7285">ruler / cm</text><text x="180" y="320" font-size="10" fill="#94a3ad" text-anchor="middle">Solvent front rises 10.0 cm from the application point; band 1 reaches 9.8 cm.</text></svg>',
          },
          caption: 'Read the solvent-front distance (10.0 cm) and band-1 distance (9.8 cm) from the ruler.',
        },
      },
    ],
  },

  // ── Q2 (9 marks, Crit A) — Hydrangeas, pH, calcium carbonate ─────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'pH, acids, salts & molar mass — hydrangea soil chemistry',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 9,
    stem: 'Hydrangea flowers are known for changing colour in response to changes in soil pH.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Universal indicator pH colour chart</text><g stroke="#ffffff" stroke-width="1"><rect x="30" y="40" width="36" height="40" fill="#e03131"/><rect x="66" y="40" width="36" height="40" fill="#f76707"/><rect x="102" y="40" width="36" height="40" fill="#f59f00"/><rect x="138" y="40" width="36" height="40" fill="#fab005"/><rect x="174" y="40" width="36" height="40" fill="#d8e600"/><rect x="210" y="40" width="36" height="40" fill="#a4d000"/><rect x="246" y="40" width="36" height="40" fill="#40c057"/><rect x="282" y="40" width="36" height="40" fill="#1ca672"/><rect x="318" y="40" width="36" height="40" fill="#0ca6c9"/><rect x="354" y="40" width="36" height="40" fill="#1c7ed6"/><rect x="390" y="40" width="36" height="40" fill="#3b5bdb"/><rect x="426" y="40" width="36" height="40" fill="#4263c9"/><rect x="462" y="40" width="36" height="40" fill="#6741d9"/><rect x="498" y="40" width="36" height="40" fill="#5f3dc4"/></g><g font-size="11" fill="#334155" text-anchor="middle"><text x="48" y="98">1</text><text x="84" y="98">2</text><text x="120" y="98">3</text><text x="156" y="98">4</text><text x="192" y="98">5</text><text x="228" y="98">6</text><text x="264" y="98">7</text><text x="300" y="98">8</text><text x="336" y="98">9</text><text x="372" y="98">10</text><text x="408" y="98">11</text><text x="444" y="98">12</text><text x="480" y="98">13</text><text x="516" y="98">14</text></g><g font-size="11" font-weight="700" fill="#475569"><text x="48" y="120" text-anchor="middle">acidic</text><text x="264" y="120" text-anchor="middle">neutral</text><text x="516" y="120" text-anchor="middle">alkaline</text></g><text x="280" y="142" font-size="10" fill="#94a3ad" text-anchor="middle">Pure water is neutral and turns universal indicator green at pH 7.</text></svg>',
      },
      caption: 'Universal indicator colour scale from pH 1 (red) to pH 14 (violet); green = neutral pH 7.',
    },
    tasks: [
      {
        label: 'a',
        text: 'To measure the soil pH, a pH probe or universal indicator could be used.\n\n**Select** the pH of universal indicator when added to pure water.',
        marks: 1,
        ph: 'Pure water is neutral — pH 7',
        widget: 'radio_select',
        widgetOptions: ['4', '5', '7', '10'],
      },
      {
        label: 'b',
        text: 'Sulfuric acid (H₂SO₄) can be used to decrease the pH of the soil, and calcium carbonate (CaCO₃) to increase it. Hydrangea flowers are blue in soil with a pH of 5.5 or lower and pink if soil pH is 7 or higher.\n\n**Outline** how you could grow blue flowers if the soil has pH = 6.',
        marks: 2,
        ph: 'Increase acidity / decrease the pH by adding sulfuric acid / H₂SO₄ (or any acid)',
      },
      {
        label: 'c',
        text: 'Calcium carbonate is a metal carbonate. Using the periodic table, **calculate** the molar mass of calcium carbonate.',
        marks: 2,
        ph: 'M(CaCO₃) = 40 + 12 + (3×16) = 100 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'Calcium carbonate can be used to neutralize sulfuric acid, which produces a salt.\n\nH₂SO₄ + CaCO₃ → salt + product A + product B\n\n**Select** the other two products that are formed when acid is neutralized by a metal carbonate.',
        marks: 2,
        ph: 'Products are H₂O and CO₂ (in either order)',
        widget: 'inline_dropdown_select',
        widgetItems: ['Product A', 'Product B'],
        widgetOptions: ['H₂O', 'CO₂', 'H₂', 'CaO', 'SO₂'],
      },
      {
        label: 'e',
        text: '**Determine** the formula of the salt that is produced when calcium carbonate neutralizes sulfuric acid.',
        marks: 1,
        ph: 'CaSO₄ (calcium sulfate; correct subscripts required)',
      },
      {
        label: 'f',
        text: '**State** the pH of a solution of the salt produced in part (e).',
        marks: 1,
        ph: 'pH = 7 (CaSO₄ is a neutral salt)',
      },
    ],
  },

  // ── Q3 (9 marks, Crit A/D) — Tractor, nitrogen monoxide, gas particles ─────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Balancing equations, particle model & diffusion — tractor emissions',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'Some farming techniques can have a significant impact on nature and can change environmental conditions. A tractor working on a farm burns fuel in its engine.\n\nThe heat generated by the engine in a tractor causes nitrogen and oxygen from the air to react to produce nitrogen monoxide gas as an emission.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Particle model — arrangement and motion of a gas',
        mode: 'states',
        substance: 'nitrogen monoxide',
        states: ['gas'],
        particleCount: 24,
      },
      caption: 'Gas particles are sparse, far apart and move quickly in random directions — use this for the arrangement (b) and motion (c) of a gas.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write down** the balanced chemical equation when nitrogen monoxide is formed by the reaction of nitrogen and oxygen.',
        marks: 2,
        ph: 'N₂ + O₂ → 2NO (reactants correct [1]; products correct [1])',
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
        text: 'Even though a tractor is slow and does not travel far, the emitted nitrogen monoxide can pollute a large area, even without wind.\n\n**Explain** why the emission can pollute a large area. You should use scientific terminology in your answer.',
        marks: 4,
        ph: 'NO is a gas; gas particles spread/move/travel out; from area of high concentration to low concentration; this is diffusion',
        artefact: {
          component: 'ParticleSim',
          data: {
            title: 'Diffusion of nitrogen monoxide from a point source',
            mode: 'diffusion',
            substance: 'nitrogen monoxide',
            particleCount: 30,
          },
          caption: 'Press Play: gas particles spread from the emission point (high concentration) to fill the surroundings (low concentration) — this is diffusion.',
        },
      },
    ],
  },

  // ── Q4 (9 marks, Crit C/B/D) — Egg yolk colour, denaturation ────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hypothesis, measurement & denaturation — egg yolk pigments',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 9,
    stem: 'Chicken eggs are commonly eaten either whole or as an ingredient in a recipe. When we crack open an egg, we are immediately aware of the yolk\'s colour and make a judgement about whether the egg is safe to eat.\n\nThree eggs from different chickens have yolks of different colours, from pale yellow to deep orange.\n\nThe difference in colour of the yolks is due to the chicken\'s diet. Farmers use a qualitative measuring tool called a YolkFan™ to compare the colour of the yolks. Consumers prefer a yolk colour between 7 and 8. The farmer can change the colour of the yolk by adding yellow and red organic pigments as additives to the chicken\'s diet.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['YolkFan™ score', 'Yellow pigment / ppm', 'Red pigment / ppm'],
        rows: [
          ['4', '7.5', '0.5'],
          ['6', '12.5', '1.5'],
          ['8', '30.5', '3'],
          ['10', '52.5', '4'],
          ['12', '76.1', '5.5'],
          ['14', '86.1', '6.5'],
          ['16', '90.5', '7'],
        ],
      },
      caption: 'How the yellow and red pigment additives (ppm) change the YolkFan™ colour score. ppm = parts per million.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Two students are investigating the colour of eggs laid by the same chicken. One student uses a colorimeter; the other uses the YolkFan™ scale.\n\n**Justify** which method gives a better measurement of the colour of the yolk.',
        marks: 1,
        ph: 'Colorimeter — gives quantitative/numerical data OR more accurate/precise OR removes human error',
      },
      {
        label: 'b',
        text: 'The table below shows how additives can change the yolk colour.\n\n| YolkFan™ score | Yellow pigment / ppm | Red pigment / ppm |\n|---|---|---|\n| 4 | 7.5 | 0.5 |\n| 6 | 12.5 | 1.5 |\n| 8 | 30.5 | 3 |\n| 10 | 52.5 | 4 |\n| 12 | 76.1 | 5.5 |\n| 14 | 86.1 | 6.5 |\n| 16 | 90.5 | 7 |\n\nA student wants to determine how the yolk colour changes with additives. Using the information in the table, **formulate** the student\'s hypothesis.',
        marks: 3,
        ph: 'If concentration of red/yellow pigment is increased; Then the yolk colour will become darker/more orange/closer to 16; Because the pigment changes the colour of the yolk',
      },
      {
        label: 'c',
        text: 'Eggs are often used in cooking. They can be used whole or separately as the yolk or white. When they are heated, these proteins denature and become solid. A student separated an egg into the yolk and white, heated each one and measured the temperature when the proteins became solid. The results are shown below.\n\n| | Starting temperature / °C | Temperature at which protein is denatured / °C |\n|---|---|---|\n| Yolk | 20 | 76 |\n| White | 20 | [blank] |\n\n**Measure** the temperature at which the egg white becomes denatured. Add your value to the table.',
        marks: 1,
        ph: 'Accept any single value in the range 62–70 °C',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="360" height="230" fill="#ffffff"/><text x="180" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Thermometer reading for the egg white</text><rect x="40" y="40" width="60" height="160" rx="8" fill="#f1f5f9" stroke="#5b6b78" stroke-width="2"/><rect x="64" y="50" width="12" height="150" rx="6" fill="#ffffff" stroke="#94a3ad"/><rect x="64" y="120" width="12" height="80" rx="6" fill="#e03131"/><circle cx="70" cy="200" r="11" fill="#e03131"/><text x="70" y="218" font-size="9" fill="#475569" text-anchor="middle">egg white</text><line x1="120" y1="120" x2="200" y2="80" stroke="#94a3ad" stroke-dasharray="3 3"/><circle cx="250" cy="110" r="60" fill="#ffffff" stroke="#0b7285" stroke-width="2"/><line x1="250" y1="55" x2="250" y2="165" stroke="#cbd5e1" stroke-width="6"/><line x1="250" y1="115" x2="250" y2="165" stroke="#e03131" stroke-width="6"/><g font-size="9" fill="#334155" text-anchor="start"><line x1="258" y1="70" x2="266" y2="70" stroke="#334155"/><text x="270" y="73">80</text><line x1="258" y1="92" x2="266" y2="92" stroke="#334155"/><text x="270" y="95">70</text><line x1="258" y1="114" x2="266" y2="114" stroke="#334155"/><text x="270" y="117">60</text><line x1="258" y1="136" x2="266" y2="136" stroke="#334155"/><text x="270" y="139">50</text></g><text x="208" y="50" font-size="9" fill="#0b7285">Zoom in / °C</text><text x="180" y="223" font-size="9" fill="#94a3ad" text-anchor="middle">The red liquid level sits between the 60 and 70 marks — read the egg-white value.</text></svg>',
          },
          caption: 'Zoomed thermometer for the egg white: the level lies between 60 °C and 70 °C.',
        },
      },
      {
        label: 'd',
        text: 'The diagram below shows two different methods for measuring temperature.\n\n**Select** which method would produce the most valid measurement of the temperature at which the proteins denature. **Justify** your answer.',
        marks: 1,
        ph: 'Method B — thermometer is measuring where the egg white / proteins are (not in water)',
        widget: 'radio_select',
        widgetOptions: ['Method A', 'Method B'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="250" fill="#ffffff"/><text x="230" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two methods for measuring the denaturing temperature</text><text x="120" y="46" font-size="12" font-weight="700" fill="#0b7285" text-anchor="middle">Method A</text><text x="340" y="46" font-size="12" font-weight="700" fill="#0b7285" text-anchor="middle">Method B</text><g><rect x="70" y="120" width="100" height="70" rx="4" fill="#cfe8f5" stroke="#5b6b78" stroke-width="2"/><ellipse cx="120" cy="170" rx="30" ry="16" fill="#ffe066" stroke="#e0a800"/><rect x="116" y="70" width="8" height="120" rx="4" fill="#ffffff" stroke="#94a3ad"/><rect x="116" y="150" width="8" height="40" fill="#e03131"/><circle cx="120" cy="192" r="7" fill="#e03131"/><text x="120" y="212" font-size="9" fill="#475569" text-anchor="middle">bulb in water bath,</text><text x="120" y="224" font-size="9" fill="#475569" text-anchor="middle">not in the egg</text></g><g><rect x="290" y="120" width="100" height="70" rx="4" fill="#cfe8f5" stroke="#5b6b78" stroke-width="2"/><ellipse cx="340" cy="170" rx="30" ry="16" fill="#ffe066" stroke="#e0a800"/><rect x="336" y="70" width="8" height="100" rx="4" fill="#ffffff" stroke="#94a3ad"/><rect x="336" y="138" width="8" height="32" fill="#e03131"/><circle cx="340" cy="170" r="7" fill="#e03131"/><text x="340" y="212" font-size="9" fill="#475569" text-anchor="middle">bulb inside the egg /</text><text x="340" y="224" font-size="9" fill="#475569" text-anchor="middle">protein itself</text></g></svg>',
          },
          caption: 'Method A: thermometer bulb in the water bath. Method B: thermometer bulb inside the egg (the protein being measured).',
        },
      },
      {
        label: 'e',
        text: '**Predict** the temperature for a mixture of yolk and white to denature. **Justify** your answer.',
        marks: 3,
        ph: 'Accept range 62–70 °C; unit °C; because that was the maximum temperature that the individual components of the egg denatured',
      },
    ],
  },

  // ── Q5 (8 marks, Crit B/C) — Pickling eggs in vinegar ────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Pickling eggs investigation — vinegar pH and tenderness',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 8,
    stem: 'One method of food preservation is pickling, in which the food is soaked in vinegar. Cooked peeled eggs can be pickled. When pickling, care has to be taken that the white of the eggs stays tender and the yolk keeps its yellow colour.\n\nA student has decided to investigate the effect of vinegars with different pH on pickled eggs. They read a research paper. In this paper, the taste and tenderness scores were given by a trained panel consisting of a group of people who gave a score out of 10, where 10 is the best score. The average of the values for each vinegar was calculated and is shown in the following table:\n\n| Solution | Average starting pH of solution | Average pH of egg white after 3 weeks | Average panel score for taste | Average panel score for tenderness |\n|---|---|---|---|---|\n| Apple cider vinegar (~1.5% sol) | 3.1 | 4.8 | 6.1 | 7.2 |\n| Red wine vinegar (~1.5% sol) | 3.6 | pH meter not working | 5.0 | 7.2 |\n| Distilled white vinegar (~1.5% sol) | 2.9 | 4.2 | 6.7 | 5.2 |',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Solution', 'Average starting pH of solution', 'Average pH of egg white after 3 weeks', 'Average panel score for taste', 'Average panel score for tenderness'],
        rows: [
          ['Apple cider vinegar (~1.5% sol)', '3.1', '4.8', '6.1', '7.2'],
          ['Red wine vinegar (~1.5% sol)', '3.6', 'pH meter not working', '5.0', '7.2'],
          ['Distilled white vinegar (~1.5% sol)', '2.9', '4.2', '6.7', '5.2'],
        ],
      },
      caption: 'Trained-panel results for eggs pickled for 3 weeks in three vinegars (scores out of 10). Note the missing pH value for red wine vinegar.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables for this investigation.',
        marks: 4,
        ph: 'IV: type of vinegar; DV: pH of egg white OR tenderness OR taste score; CVs x2: volume of solution, temperature, size of egg, initial concentration of solution, % of salt, time, type of egg',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable research question for this investigation.',
        marks: 2,
        ph: 'How does the type of vinegar affect the final pH of the egg whites / tenderness of the egg?',
      },
      {
        label: 'c',
        text: 'The starting pH of the cooked egg white was pH = 7. **State** what happens to the pH of the egg white when pickled with apple cider vinegar.',
        marks: 1,
        ph: 'The pH decreases (from 7 to ~4.8)',
      },
      {
        label: 'd',
        text: 'The student was surprised that there was no value for the pH of egg white after being pickled for three weeks with red wine vinegar. **Suggest** an improvement to the method to increase the validity of the data.',
        marks: 1,
        ph: 'Repeat the investigation with a new pH meter OR use a pH meter AND universal indicator to measure pH',
      },
    ],
  },

  // ── Q6 (14 marks, Crit C) — Vitamin C in juices and oranges ──────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Criterion C: Data processing & graph — vitamin C in juices',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 14,
    stem: 'Vitamin C is an essential nutrient without which the body cannot function. The stability of the vitamin C structure is dependent upon environmental conditions such as temperature and oxygen availability. In the presence of oxygen, vitamin C oxidises, causing it to break down. The structure of vitamin C is shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="210" fill="#ffffff"/><text x="210" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of vitamin C (ascorbic acid)</text><g stroke="#334155" stroke-width="1.6" fill="none"><polygon points="150,90 190,70 230,90 220,134 160,134"/><line x1="150" y1="90" x2="120" y2="80"/><line x1="120" y1="80" x2="120" y2="50"/><line x1="190" y1="70" x2="190" y2="42"/><line x1="230" y1="90" x2="262" y2="80"/><line x1="220" y1="134" x2="244" y2="160"/><line x1="160" y1="134" x2="138" y2="160"/></g><g font-size="11" fill="#334155" text-anchor="middle"><text x="150" y="94">O</text><text x="116" y="50">O</text><text x="190" y="38">OH</text><text x="270" y="80">OH</text><text x="250" y="172">OH</text><text x="130" y="172">HO</text></g><text x="190" y="116" font-size="9" fill="#94a3ad" text-anchor="middle">C₆H₈O₆</text><text x="210" y="200" font-size="10" fill="#94a3ad" text-anchor="middle">Ascorbic acid has several –OH groups that are oxidised in the presence of oxygen.</text></svg>',
      },
      caption: 'Vitamin C (ascorbic acid), C₆H₈O₆: the –OH groups make it readily oxidised when exposed to oxygen.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The table below shows the vitamin C concentration of some juices:\n\n| Juice sample | Vitamin C concentration / mg 100cm⁻³ |\n|---|---|\n| Apple | 240 |\n| Pink grapefruit | 82 |\n| Beetroot | 33 |\n| Red cabbage | 41 |\n| Tomato | 143 |\n\n**Present** this data in a graph.',
        marks: 5,
        ph: 'Title linking vit C and juice type; x-axis = juice type; y-axis = vit C concentration; correct scale from 0; all values plotted correctly (bar chart)',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Juice sample', 'Vitamin C concentration / mg 100cm⁻³'],
            rows: [
              ['Apple', '240'],
              ['Pink grapefruit', '82'],
              ['Beetroot', '33'],
              ['Red cabbage', '41'],
              ['Tomato', '143'],
            ],
          },
          caption: 'Vitamin C concentration of five juice samples — present these five values as a bar chart.',
        },
      },
      {
        label: 'b',
        text: 'Oranges are a good source of vitamin C and are recommended as part of a healthy diet. Orange juice is extracted from the pulp in oranges.\n\nA student was interested in determining if the vitamin C concentration of orange juice changes over time when kept in a fridge at 4°C over a period of 3 weeks. The following three orange juices were tested:\n- fresh orange juice\n- orange juice that had been heat-treated to 70°C\n- orange juice that had been treated with CO₂ to remove some of the oxygen present\n\nThe graph shows the vitamin C concentration over 21 days for the three juices.\n\n**Identify** which juice has the lowest vitamin C concentration at the start of the investigation. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Heat-treated juice (pasteurized); vitamin C is broken down at high temperatures; reference to oxidized or denatured',
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Vitamin C concentration of three orange juices over 21 days',
            x: { label: 'Storage time / days', categories: ['0', '7', '14', '21'] },
            y: { label: 'Vitamin C concentration', unit: 'µg cm⁻³', min: 200, max: 500, ticks: [200, 250, 300, 350, 400, 450, 500] },
            series: [
              { name: 'Fresh juice', color: '#e03131', points: [450, 445, 440, 435] },
              { name: 'CO₂-treated juice', color: '#1971c2', points: [375, 367, 358, 350] },
              { name: 'Heat-treated juice', color: '#2f9e44', points: [210, 207, 204, 200] },
            ],
          },
          caption: 'Hover any point for its exact value. Fresh juice starts highest (450 µg cm⁻³); CO₂-treated is in the middle (375 → 350); heat-treated is lowest (210 µg cm⁻³).',
        },
      },
      {
        label: 'c',
        text: 'Using the graph from part (b), **calculate** the rate of change in vitamin C concentration for the CO₂-treated orange juice over the 21-day period.',
        marks: 2,
        ph: 'Change = 375−350 = 25 μg cm⁻³; rate = 25/21 = 1.19 μg cm⁻³ day⁻¹ (accept 0.95–1.43)',
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'CO₂-treated orange juice — vitamin C concentration over 21 days',
            x: { label: 'Storage time / days', categories: ['0', '7', '14', '21'] },
            y: { label: 'Vitamin C concentration', unit: 'µg cm⁻³', min: 200, max: 500, ticks: [200, 250, 300, 350, 400, 450, 500] },
            series: [
              { name: 'CO₂-treated juice', color: '#1971c2', points: [375, 367, 358, 350] },
            ],
          },
          caption: 'Hover the day-0 and day-21 points to read the exact values: 375 µg cm⁻³ falling to 350 µg cm⁻³, a change of 25 over 21 days.',
        },
      },
      {
        label: 'd',
        text: 'The student made the following hypothesis:\n\n"If a whole orange is left for a number of weeks, the vitamin C concentration will decrease because the vitamin C will be oxidized."\n\nUsing the graph from part (b), **evaluate** the validity of this hypothesis.',
        marks: 4,
        ph: 'The vitamin C will not be oxidized as much / oxidized as much; because the pulp/juice is not exposed to oxygen / lower exposure to oxygen; due to protective layer of the peel; therefore invalid',
      },
    ],
  },

  // ── Q7 (16 marks, Crit B) — Can material investigation design ────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — can materials for soft drinks',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 16,
    stem: 'Cans are used to extend the shelf life of the food they contain.\n\nThe four main materials currently used in can production are steel, tin-coated steel, chromium-coated steel and aluminium. These materials are known to react with acidic soft drinks. A packaging company has developed a new alloy called can-x aimed at the soft drink market.\n\n**Design** an investigation to determine the best material from steel, tin-coated steel, chromium-coated steel and can-x to make the soft drink containers from. You are provided with standard laboratory equipment, samples of each material and a sample of the soft drink.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Candidate can material', 'Description', 'Reacts with acidic soft drink?'],
        rows: [
          ['Steel', 'Iron alloy, uncoated', 'yes — corrodes readily'],
          ['Tin-coated steel', 'Steel with a thin protective tin layer', 'slowly, until coating is broken'],
          ['Chromium-coated steel', 'Steel with a thin protective chromium layer', 'slowly, until coating is broken'],
          ['can-x', 'New alloy developed for soft drinks', 'unknown — to be tested'],
        ],
      },
      caption: 'The candidate materials provided. Design an investigation to compare how each reacts with the acidic soft drink (e.g. mass change over time).',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine the best material from steel, tin-coated steel, chromium-coated steel and can-x to make the soft drink containers from. You are provided with standard laboratory equipment, samples of each material and a sample of the soft drink.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
        marks: 16,
        ph: 'IV: type of material; DV: amount of corrosion/mass change; CVs: volume/type of soft drink, mass of sample, time; equipment; method with 5 values, 3 repeats, mean',
      },
    ],
  },

  // ── Q8 (8 marks, Crit D/C) — Saline water, crops, conductivity ──────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Electrical conductivity, salinity & crop yield — irrigation water',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 8,
    stem: 'The global human population has increased from 6 billion to 9 billion in the last 20 years. The availability of land to produce food to sustain this increasing population needs to be addressed before we run out of time. According to a study carried out in 2014, at least 20% of all land used to grow crops is affected by the increased salinity of the water that is used for irrigation.\n\nSalinity in water is caused by dissolved salts such as sodium chloride, and it is determined by measuring the water\'s electrical conductivity.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Andes', 'Colorado', 'Napa', 'Pacific'],
        rows: [
          ['Electrical conductivity / S m⁻¹', '0.45', '0.13', '0.35', '15'],
          ['Dissolved salt / μg m⁻³', '2000', '950', '2730', '10 000'],
        ],
      },
      caption: 'Salinity of water from four locations. Conductivity (S m⁻¹) rises with dissolved-salt content — Pacific (ocean) water is by far the most saline.',
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
        text: 'The table below contains information about the salinity of water from four different locations. Electrical conductivity is measured in units of S m⁻¹ (siemens per metre).\n\n| | Andes | Colorado | Napa | Pacific |\n|---|---|---|---|---|\n| Electrical conductivity / S m⁻¹ | 0.45 | 0.13 | 0.35 | 15 |\n| Dissolved salt / μg m⁻³ | 2000 | 950 | 2730 | 10 000 |\n\nUsing the information in the table, **identify** the location of water with the highest salinity. **Justify** your answer.',
        marks: 2,
        ph: 'Pacific (ocean) water; highest electrical conductivity OR highest dissolved salts',
      },
      {
        label: 'c',
        text: 'High salinity affects plant growth and crop yield. The graph shows the crop yield of three types of plants grown with different concentrations of salt in water, compared with how the plants would grow with fresh water.\n\n**Determine** the optimum concentration of salt for a maximum crop yield for plant C.',
        marks: 1,
        ph: '1.4 ±0.2 mmol dm⁻³ (read from graph at maximum of plant C curve)',
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Percentage crop yield vs salt concentration',
            x: { label: 'Concentration of salt / mmol dm⁻³', categories: ['0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0'] },
            y: { label: '% crop yield', unit: '%', min: 0, max: 140, ticks: [0, 20, 40, 60, 80, 100, 120, 140] },
            series: [
              { name: 'Plant A', color: '#e03131', points: [100, 20, 10, 5, 2, 0, 0] },
              { name: 'Plant B', color: '#1971c2', points: [100, 95, 80, 55, 30, 10, 0] },
              { name: 'Plant C', color: '#2f9e44', points: [80, 100, 120, 130, 95, 50, 15] },
            ],
          },
          caption: 'Hover any point for its exact value. Plant C (green) peaks at ~1.5 mmol dm⁻³; Plant A (red) collapses by 0.5 mmol dm⁻³; Plant B (blue) tolerates higher salinity.',
        },
      },
      {
        label: 'd',
        text: '**Compare** how salinity affects the percentage crop yield of plant A and plant B. You should include data from the graph in your answer.',
        marks: 3,
        ph: 'Plant A decreases rapidly to 20% at low salinity (0.5 mmol dm⁻³); plant B yield starts decreasing at a higher concentration (0.8 mmol dm⁻³) and at a lower rate; plant B tolerates higher salinity than plant A',
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Percentage crop yield vs salt concentration (Plants A and B)',
            x: { label: 'Concentration of salt / mmol dm⁻³', categories: ['0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0'] },
            y: { label: '% crop yield', unit: '%', min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100] },
            series: [
              { name: 'Plant A', color: '#e03131', points: [100, 20, 10, 5, 2, 0, 0] },
              { name: 'Plant B', color: '#1971c2', points: [100, 95, 80, 55, 30, 10, 0] },
            ],
          },
          caption: 'Hover any point for its exact value. Plant A yield collapses to ~20% by 0.5 mmol dm⁻³; Plant B stays high until ~0.8 mmol dm⁻³ then falls more gradually.',
        },
      },
    ],
  },

  // ── Q9 (17 marks, Crit D) — Desalination systems ─────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Desalination systems — efficiency, economy & environment',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Most of the drinking water consumed in the world comes from either surface water (streams, rivers, lakes, reservoirs) or ground water sources (spaces between rocks). This water has a low concentration of salts and is known as fresh water.\n\nOne other source of water is saline water from seas and oceans. Through the process of desalination, saline water is converted into water suitable for human consumption or irrigation of plants and crops. While desalination is very costly and requires a lot of energy, it is necessary in places where fresh water is not available. How efficient a process is can be determined by how much energy or resources are needed to produce fresh water.\n\nThe images in the tabs below show three different desalination systems: thermal-based, membrane-based, and solar-based.',
    artefact: {
      component: 'SlideDeck',
      data: {
        title: 'Three desalination systems',
        slides: [
          {
            title: 'Thermal-based',
            body: 'Uses successive evaporations and distillations of saline water.',
            bullets: [
              'Simple to build and operate; no dangerous moving parts',
              'Treated water contains no dissolved minerals; water heated to 115 °C',
              'Energy needed for condensation; high efficiency',
              'High operating temperatures cause scale (e.g. calcium sulfate)',
              'High-energy process: CO₂ emission ≈ 24 kg CO₂ m⁻³',
              'Suitable for large-scale industrial use',
            ],
          },
          {
            title: 'Membrane-based',
            body: 'Saltwater is pushed through a semi-permeable membrane that removes chlorine, salts and dirt; pore size sets the impurities removed.',
            bullets: [
              'Expensive to build; clean and safe',
              'Treated water contains adequate concentration of dissolved minerals',
              'Water suitable for human consumption',
              'Operates at room temperature',
              'Low CO₂ emission ≈ 0.3 kg CO₂ m⁻³',
            ],
          },
          {
            title: 'Solar-based',
            body: 'Uses energy from sunlight to evaporate and then condense saline water.',
            bullets: [
              'No fuel cost — energy from the Sun',
              'Very low CO₂ emissions',
              'Cheap to run but low output / slow',
              'Depends on sunshine; suited to small or remote use',
            ],
          },
        ],
      },
      caption: 'Tabbed comparison of the thermal-, membrane- and solar-based desalination systems used in parts (a) and (b).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the data in both tabs to **identify** the region with the highest number of desalination systems in the world and **justify** why this is the case.',
        marks: 3,
        ph: 'Latin America and Caribbean; surrounded by saline water OR little surface water suitable for drinking or irrigation; freshwater required for high populations',
        artefact: {
          component: 'PieChart',
          data: {
            kind: 'pie',
            title: 'Number of desalination systems by world region',
            unit: '',
            series: [
              { name: 'Latin America and Caribbean', value: 4826 },
              { name: 'East Asia and Pacific', value: 3505 },
              { name: 'Middle East and North Africa', value: 3373 },
              { name: 'North America', value: 2341 },
              { name: 'Western Europe', value: 2337 },
              { name: 'Southern Asia', value: 655 },
              { name: 'Eastern Europe and Central Asia', value: 566 },
              { name: 'Sub-Saharan Africa', value: 303 },
            ],
          },
          caption: 'Desalination systems per region. Latin America and the Caribbean has the most (4826).',
        },
      },
      {
        label: 'b',
        text: 'There are various systems used for desalination such as thermal-based, membrane-based and solar-based systems.\n\nUsing the information provided and your wider MYP knowledge, **discuss** and **evaluate** the systems available for water desalination. In your answer you should include:\n- a comparison of the efficiencies of the three systems\n- the economic impacts of the three systems\n- the environmental impacts of the three systems\n- an appraisal of the three systems.',
        marks: 14,
        ph: 'Efficiency: thermal high CO₂ & energy; membrane low energy; solar no energy; Economy: membrane expensive to build/maintain; solar cheap; thermal moderate; Environment: thermal CO₂ emissions (24 kg); membrane low CO₂ (0.3 kg); solar minimal; Appraisal with evidence',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Desalination system', 'Operating conditions', 'CO₂ emission / kg m⁻³', 'Cost & efficiency'],
            rows: [
              ['Thermal-based', 'Heats water to 115 °C; distillation', '24', 'High energy; moderate cost; large-scale'],
              ['Membrane-based', 'Room temperature; pressure through membrane', '0.3', 'Low energy; expensive to build/maintain'],
              ['Solar-based', 'Sunlight evaporation', '≈ 0 (minimal)', 'No fuel cost; cheap; low output'],
            ],
          },
          caption: 'Efficiency, economic and environmental data for the three desalination systems — use this to compare, evaluate and appraise them.',
        },
      },
    ],
  },
]
