export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/**
 * Data-driven interactive artefact (mirrors lib/types.ts ArtefactSpec).
 * `component` names a renderer in components/exam/QuestionImage.tsx's switch;
 * `data` is passed to it as render_data. Replaces copyrighted figure images with
 * original interactive figures (sims, data tables, line graphs, labelled SVGs).
 */
export interface ArtefactSpec {
  component: string
  data?: unknown
  caption?: string
}

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  widget?: Widget
  widgetOptions?: string[]
  widgetItems?: string[]
  figImages?: string[]
  /** interactive artefact shown above the answer box */
  artefact?: ArtefactSpec
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  topicCanonical?: import('@/data/taxonomy/topics').Topic
  topicGroup?: import('@/data/taxonomy/topics').TopicGroup
  marks: number
  stem: string
  figImages?: string[]
  /** question-level interactive artefact (rendered in the context/stimulus slot) */
  artefact?: ArtefactSpec
  tasks: Task[]
}

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
  id: 'chemistry-nov-2024',
  subject: 'Chemistry',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Alchemy / distillation / ethanol / sulfuric acid (9m, Crit A) ────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table, Organic Chemistry & States of Matter',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'One of the main aims of alchemists was to transform metals such as lead and iron into gold. To help with this, alchemists produced acids to react with metals. One such mixture was called aqua regia, a combination of hydrochloric and nitric acid. Aqua regia is still used today in the purification of gold.',
    // Replaces page-01 figure (distillation apparatus photo) — interactive distillation rig.
    artefact: {
      component: 'ThermalSim',
      data: {
        title: 'Simple distillation of an impure liquid (e.g. wine)',
        mode: 'distill',
        substance: 'ethanol / water mixture',
        column: {
          topC: 78,
          bottomC: 100,
          fractions: [
            { name: 'Z — collected liquid (distillate)', boilC: 78, use: 'pure ethanol collected after condensing' },
            { name: 'Y — vapour in the delivery tube', boilC: 85, use: 'ethanol vapour travelling to the condenser' },
            { name: 'X — boiling mixture in the flask', boilC: 100, use: 'the heated ethanol / water mixture' },
          ],
        },
      },
      caption: 'The mixture is heated in the flask (X), the vapour rises and travels along the cooled tube (Y), then condenses and is collected as a pure liquid (Z).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the region of the periodic table where gold can be found.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Noble gases', 'Halogens'],
      },
      {
        label: 'b',
        text: 'Alchemists were interested in how substances could be separated. A technique developed by alchemists is distillation. **Select** the property that allows liquids to be separated by distillation.',
        marks: 1,
        ph: 'Different boiling points',
        widget: 'radio_select',
        widgetOptions: ['Different densities', 'Different boiling points', 'Different solubilities', 'Different melting points'],
      },
      {
        label: 'c',
        text: '**Describe** the state changes that take place from X to Y and from Y to Z on the distillation image. Use particle theory in your answer.',
        marks: 4,
        ph: 'X to Y: liquid evaporates (particles gain energy, escape as gas); Y to Z: gas condenses (particles lose energy, return to liquid)',
        // Replaces page-01 figure crop — particle model of the liquid→gas→liquid changes at X, Y, Z.
        artefact: {
          component: 'ParticleSim',
          data: {
            title: 'Particle model at the three stages of distillation',
            mode: 'states',
            substance: 'ethanol',
            containers: ['X — liquid in flask', 'Y — vapour in tube', 'Z — condensed liquid'],
            particleCount: 40,
          },
          caption: 'X→Y: the liquid evaporates (particles gain energy and break apart into a gas). Y→Z: the gas condenses (particles lose energy and rejoin as a liquid).',
        },
      },
      {
        label: 'd',
        text: 'When wine is distilled, a pure alcohol called ethanol is obtained. **Select** the diagram showing the structure of ethanol.',
        marks: 1,
        ph: 'B — CH₃CH₂OH: two carbons each with Hs, ending in OH',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        // Replaces page-02 figure — the four candidate structural formulae (A–D). Static labelled
        // diagram is required: this is a "select the correct structure" MCQ where each option's
        // exact bonding must be shown for the student to choose.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><g stroke="#1f2d3a" stroke-width="2" fill="none"><g transform="translate(40,30)"><text x="0" y="0" font-size="16" font-weight="700" fill="#1f2d3a">A.</text><line x1="40" y1="70" x2="70" y2="70"/><line x1="100" y1="70" x2="130" y2="70"/><line x1="160" y1="70" x2="200" y2="70"/><line x1="85" y1="55" x2="85" y2="30"/><line x1="85" y1="85" x2="85" y2="110"/><line x1="145" y1="55" x2="145" y2="30"/></g><g transform="translate(360,30)"><text x="0" y="0" font-size="16" font-weight="700" fill="#1f2d3a">B.</text><line x1="40" y1="70" x2="70" y2="70"/><line x1="100" y1="70" x2="130" y2="70"/><line x1="160" y1="70" x2="200" y2="70"/><line x1="85" y1="55" x2="85" y2="30"/><line x1="85" y1="85" x2="85" y2="110"/><line x1="145" y1="55" x2="145" y2="30"/><line x1="145" y1="85" x2="145" y2="110"/></g><g transform="translate(40,180)"><text x="0" y="0" font-size="16" font-weight="700" fill="#1f2d3a">C.</text><line x1="40" y1="70" x2="70" y2="70"/><line x1="100" y1="70" x2="130" y2="70"/><line x1="160" y1="70" x2="190" y2="70"/><line x1="85" y1="55" x2="85" y2="30"/><line x1="85" y1="85" x2="85" y2="110"/><line x1="145" y1="55" x2="145" y2="30"/><line x1="145" y1="85" x2="145" y2="110"/></g><g transform="translate(360,180)"><text x="0" y="0" font-size="16" font-weight="700" fill="#1f2d3a">D.</text><line x1="40" y1="70" x2="70" y2="70"/><line x1="100" y1="70" x2="130" y2="70"/><line x1="160" y1="70" x2="190" y2="70"/><line x1="85" y1="55" x2="85" y2="30"/><line x1="85" y1="85" x2="85" y2="110"/><line x1="141" y1="58" x2="141" y2="33"/><line x1="149" y1="58" x2="149" y2="33"/></g></g><g font-size="14" font-weight="700" fill="#1f2d3a" text-anchor="middle"><g transform="translate(40,30)"><text x="35" y="75">H</text><text x="85" y="75">C</text><text x="145" y="75">C</text><text x="210" y="75">OH</text><text x="85" y="25">H</text><text x="85" y="123">H</text><text x="145" y="25">O</text></g><g transform="translate(360,30)"><text x="35" y="75">H</text><text x="85" y="75">C</text><text x="145" y="75">C</text><text x="210" y="75">OH</text><text x="85" y="25">H</text><text x="85" y="123">H</text><text x="145" y="25">H</text><text x="145" y="123">H</text></g><g transform="translate(40,180)"><text x="35" y="75">H</text><text x="85" y="75">C</text><text x="145" y="75">C</text><text x="200" y="75">H</text><text x="85" y="25">H</text><text x="85" y="123">H</text><text x="145" y="25">H</text><text x="145" y="123">H</text></g><g transform="translate(360,180)"><text x="35" y="75">H</text><text x="85" y="75">C</text><text x="145" y="75">C</text><text x="200" y="75">H</text><text x="85" y="25">H</text><text x="85" y="123">H</text><text x="145" y="25">O</text></g></g><text x="320" y="312" font-size="11" text-anchor="middle" fill="#64748b">Each structure shows a different arrangement of two carbon atoms, hydrogen atoms and an oxygen atom.</text></svg>',
          },
          caption: 'Four candidate structures (A–D). Ethanol is CH₃CH₂OH: two carbon atoms, each carbon bonded to hydrogen atoms, with an –OH group on the end carbon.',
        },
      },
      {
        label: 'e',
        text: 'Another acid used by alchemists was sulfuric acid. Sulfuric acid (H₂SO₄) was produced through a number of chemical reactions starting with iron vitriol, now known as iron sulfate (FeSO₄). **Calculate** the formula mass for FeSO₄.',
        marks: 2,
        ph: 'Mr = 56+32+4(16) = 152 g/mol',
        widget: 'fill_blank',
        // Added artefact: relative atomic masses needed to compute Mr(FeSO₄).
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Element', 'Symbol', 'Relative atomic mass (Ar)', 'Number of atoms in FeSO₄'],
            rows: [
              ['Iron', 'Fe', '56', '1'],
              ['Sulfur', 'S', '32', '1'],
              ['Oxygen', 'O', '16', '4'],
            ],
          },
          caption: 'Relative atomic masses for the atoms in iron sulfate (FeSO₄). Formula mass = sum of (Ar × number of atoms).',
        },
      },
    ],
  },

  // ─── Q2: CO₂ / dry ice / champagne / methanol synthesis (11m, Crit A) ─────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Covalent Bonding, Moles & Rates of Reaction',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 11,
    stem: 'Carbon dioxide (CO₂) has many uses, for example to remove caffeine from coffee, in smoke machines, as a component in fire extinguishers, to keep food cold and to make carbonated drinks. CO₂ has a boiling point of −78 °C. Solid CO₂ is known as dry ice.',
    // Replaces page-03 figure (dry-ice smoke photo) — particle model of CO₂ subliming from solid to gas.
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Dry ice (solid CO₂) subliming to gas',
        mode: 'states',
        substance: 'carbon dioxide',
        states: ['solid (dry ice)', 'gas (CO₂ vapour)'],
        particleCount: 36,
      },
      caption: 'Below −78 °C, CO₂ is a solid (dry ice). On warming it sublimes straight to a gas — the white "smoke" seen in smoke machines.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonding in a molecule of carbon dioxide.',
        marks: 1,
        ph: 'Covalent bonding',
        widget: 'radio_select',
        widgetOptions: ['Ionic bonding', 'Covalent bonding', 'Metallic bonding', 'Hydrogen bonding'],
        // Added artefact: labelled CO₂ molecule showing the shared (covalent) double bonds.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="200" fill="#ffffff"/><text x="230" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A molecule of carbon dioxide, CO₂</text><g><circle cx="110" cy="110" r="34" fill="#e8590c" stroke="#a8410a" stroke-width="2"/><circle cx="230" cy="110" r="26" fill="#495057" stroke="#1f2d3a" stroke-width="2"/><circle cx="350" cy="110" r="34" fill="#e8590c" stroke="#a8410a" stroke-width="2"/><g stroke="#1f2d3a" stroke-width="3"><line x1="144" y1="100" x2="204" y2="100"/><line x1="144" y1="120" x2="204" y2="120"/><line x1="256" y1="100" x2="316" y2="100"/><line x1="256" y1="120" x2="316" y2="120"/></g><text x="110" y="116" font-size="18" font-weight="700" text-anchor="middle" fill="#ffffff">O</text><text x="230" y="116" font-size="18" font-weight="700" text-anchor="middle" fill="#ffffff">C</text><text x="350" y="116" font-size="18" font-weight="700" text-anchor="middle" fill="#ffffff">O</text></g><text x="230" y="172" font-size="12" text-anchor="middle" fill="#64748b">Each double line is two shared pairs of electrons — a covalent (double) bond.</text></svg>',
          },
          caption: 'In CO₂ the carbon atom shares electrons with each oxygen atom — these shared pairs are covalent bonds.',
        },
      },
      {
        label: 'b',
        text: 'CO₂ is soluble in water and acts as a preservative. Champagne contains CO₂ at high pressure. **Explain** why the cork will fly off when a bottle of champagne is opened. In your answer include why champagne bubbles are seen.',
        marks: 3,
        ph: 'Pressure drops on opening; CO₂ comes out of solution; bubbles of CO₂ gas form; expanding gas pushes cork out',
        // Replaces page-04 figure (champagne cork-popping photo) — pressure/volume relationship for the
        // trapped gas: lowering the pressure lets the gas expand and forces the cork out.
        artefact: {
          component: 'GasLawSim',
          data: {
            title: 'Pressure on a sealed bottle of champagne',
            vessel: 'sealed champagne bottle',
            massSlider_kg: [2.0, 1.4, 0.8, 0.4, 0],
            coupling: 'Sealed bottle = high pressure (CO₂ stays dissolved). Opening = pressure released → trapped CO₂ expands and escapes.',
          },
          caption: 'In a sealed bottle the CO₂ is held under high pressure and stays dissolved. Reduce the pressure (open it) and the gas expands rapidly — pushing out the cork and forming bubbles as CO₂ leaves solution.',
        },
      },
      {
        label: 'c',
        text: 'CO₂ in the atmosphere is increasing. One possible solution to reduce atmospheric CO₂ is to produce carbon-neutral methanol using the following reaction:\n\nCO₂(g) + 3H₂(g) → CH₃OH(g) + H₂O(g)\n\n**Calculate** the mass of methanol (CH₃OH) that can be produced from 446 g of CO₂. Give your answer in grams in standard form.',
        marks: 4,
        ph: 'n(CO₂)=446/44=10.14mol; n(CH₃OH)=10.14mol; m=10.14×32=324g=3.24×10² g',
        widget: 'fill_blank',
        // Replaces page-04 figure crop — molar masses + 1:1 mole ratio needed for the stoichiometry calc.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Substance', 'Formula', 'Molar mass / g mol⁻¹', 'Mole ratio in equation'],
            rows: [
              ['Carbon dioxide', 'CO₂', '44', '1'],
              ['Hydrogen', 'H₂', '2', '3'],
              ['Methanol', 'CH₃OH', '32', '1'],
              ['Water', 'H₂O', '18', '1'],
            ],
          },
          caption: 'CO₂(g) + 3H₂(g) → CH₃OH(g) + H₂O(g). CO₂ and CH₃OH react in a 1 : 1 mole ratio. Use moles = mass ÷ molar mass.',
        },
      },
      {
        label: 'd',
        text: 'The rate of production of methanol from hydrogen and carbon dioxide is low. The rate can be increased by using a catalyst. **Explain** how a catalyst works to increase the rate of methanol production.',
        marks: 3,
        ph: 'Catalyst provides alternative reaction pathway with lower activation energy; more particles have sufficient energy; more successful collisions per second; rate increases',
        // Added artefact: energy profile showing the lower activation energy with a catalyst.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="300" fill="#ffffff"/><text x="260" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Energy profile: with and without a catalyst</text><line x1="60" y1="250" x2="500" y2="250" stroke="#495057" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="#495057" stroke-width="1.5"/><text x="20" y="150" font-size="12" fill="#64748b" transform="rotate(-90 20 150)" text-anchor="middle">Energy</text><text x="280" y="284" font-size="12" fill="#64748b" text-anchor="middle">Progress of reaction →</text><path d="M90 200 C 150 200, 170 60, 250 60 C 330 60, 350 215, 430 215" fill="none" stroke="#c2255c" stroke-width="2.5"/><path d="M90 200 C 150 200, 175 130, 250 130 C 325 130, 350 215, 430 215" fill="none" stroke="#2f9e44" stroke-width="2.5" stroke-dasharray="6 4"/><line x1="90" y1="200" x2="445" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/><line x1="250" y1="60" x2="250" y2="200" stroke="#c2255c" stroke-width="1" stroke-dasharray="2 2"/><line x1="250" y1="130" x2="250" y2="200" stroke="#2f9e44" stroke-width="1" stroke-dasharray="2 2"/><text x="100" y="192" font-size="11" fill="#1f2d3a">reactants (CO₂ + H₂)</text><text x="360" y="230" font-size="11" fill="#1f2d3a">products (CH₃OH + H₂O)</text><text x="262" y="100" font-size="11" font-weight="700" fill="#c2255c">Eₐ without catalyst</text><text x="262" y="160" font-size="11" font-weight="700" fill="#2f9e44">Eₐ with catalyst (lower)</text></svg>',
          },
          caption: 'A catalyst provides an alternative pathway with a lower activation energy (Eₐ). More reacting particles now have enough energy to react, so there are more successful collisions per second and the rate increases.',
        },
      },
    ],
  },

  // ─── Q3: Noble gases / food packaging / lightbulbs (8m, Crit A) ──────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Noble Gases',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 8,
    stem: 'Some gases have low reactivity with other chemicals. These gases can be used in industry and for the preservation and transportation of food.',
    // Replaces page-05 figure (apple-packaging process illustration) — composition + reactivity of the
    // gases used in food packaging.
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Gas', 'Approx. % in dry air', 'Reactivity', 'Use in food packaging'],
        rows: [
          ['Nitrogen (N₂)', '78', 'very low', 'flushed in to remove air and stop spoilage'],
          ['Oxygen (O₂)', '21', 'reactive', 'causes browning / spoilage — removed'],
          ['Argon (Ar)', '0.9', 'inert (noble gas)', 'displaces air to preserve food'],
          ['Carbon dioxide (CO₂)', '0.04', 'low', 'slows growth of microbes'],
        ],
      },
      caption: 'Gases used to preserve and transport food. Unreactive gases (nitrogen, argon) replace the oxygen that would otherwise spoil the food.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Apple slices can be packaged and used for snacks. When sliced apples come into contact with air, they turn brown. **Select** which gas in air causes apples to turn brown when sliced.',
        marks: 1,
        ph: 'Oxygen',
        widget: 'radio_select',
        widgetOptions: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
        // Replaces page-05 figure crop — composition of air, to identify the reactive gas.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Gas in air', 'Approx. % by volume', 'Reacts with cut apple?'],
            rows: [
              ['Nitrogen', '78', 'no — unreactive'],
              ['Oxygen', '21', 'yes — causes browning'],
              ['Argon', '0.9', 'no — inert'],
              ['Carbon dioxide', '0.04', 'no'],
            ],
          },
          caption: 'Only one gas in air is reactive enough to make a cut apple turn brown.',
        },
      },
      {
        label: 'b',
        text: 'Nitrogen and argon can be added to food packets to remove air. **State** the correct group for nitrogen and the correct period for argon.',
        marks: 2,
        ph: 'Nitrogen group = 15; Argon period = 3',
        widget: 'fill_blank',
        // Added artefact: periodic-table snippet locating N (group 15) and Ar (period 3).
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table (groups 13–18)</text><g font-size="9" fill="#64748b" text-anchor="middle"><text x="120" y="44">13</text><text x="180" y="44">14</text><text x="240" y="44">15</text><text x="300" y="44">16</text><text x="360" y="44">17</text><text x="420" y="44">18</text></g><g font-size="9" fill="#64748b"><text x="60" y="86">Period 2</text><text x="60" y="146">Period 3</text></g><g stroke="#5b6b78" fill="#eef4f7"><rect x="90" y="55" width="60" height="46"/><rect x="150" y="55" width="60" height="46"/><rect x="210" y="55" width="60" height="46" fill="#fff7ed"/><rect x="270" y="55" width="60" height="46"/><rect x="330" y="55" width="60" height="46"/><rect x="390" y="55" width="60" height="46"/><rect x="90" y="115" width="60" height="46"/><rect x="150" y="115" width="60" height="46"/><rect x="210" y="115" width="60" height="46"/><rect x="270" y="115" width="60" height="46"/><rect x="330" y="115" width="60" height="46"/><rect x="390" y="115" width="60" height="46" fill="#fff7ed"/></g><g font-size="15" font-weight="700" text-anchor="middle"><text x="120" y="84" fill="#1f2d3a">B</text><text x="180" y="84" fill="#1f2d3a">C</text><text x="240" y="84" fill="#e8590c">N</text><text x="300" y="84" fill="#1f2d3a">O</text><text x="360" y="84" fill="#1f2d3a">F</text><text x="420" y="84" fill="#1f2d3a">Ne</text><text x="120" y="144" fill="#1f2d3a">Al</text><text x="180" y="144" fill="#1f2d3a">Si</text><text x="240" y="144" fill="#1f2d3a">P</text><text x="300" y="144" fill="#1f2d3a">S</text><text x="360" y="144" fill="#1f2d3a">Cl</text><text x="420" y="144" fill="#e8590c">Ar</text></g><text x="280" y="196" font-size="11" text-anchor="middle" fill="#64748b">Group number = column. Period number = row.</text></svg>',
          },
          caption: 'Nitrogen (N) and argon (Ar) highlighted. Use the column number for the group and the row number for the period.',
        },
      },
      {
        label: 'c',
        text: '**Explain** why argon does not form compounds. Use the electronic configuration of argon in your answer.',
        marks: 3,
        ph: 'Argon electron config = 2.8.8; full outer shell; no tendency to gain/lose/share electrons; does not bond',
        // Added artefact: Bohr shell diagram of argon (2.8.8) — full outer shell.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="320" height="320" fill="#ffffff"/><text x="160" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Argon atom — electron configuration 2.8.8</text><g fill="none" stroke="#94a3b8" stroke-width="1.2"><circle cx="160" cy="170" r="40"/><circle cx="160" cy="170" r="80"/><circle cx="160" cy="170" r="120"/></g><circle cx="160" cy="170" r="20" fill="#0b7285"/><text x="160" y="175" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">Ar</text><g fill="#e8590c"><circle cx="160" cy="130" r="5"/><circle cx="160" cy="210" r="5"/><circle cx="120" cy="142" r="5"/><circle cx="200" cy="142" r="5"/><circle cx="112" cy="170" r="5"/><circle cx="208" cy="170" r="5"/><circle cx="120" cy="198" r="5"/><circle cx="200" cy="198" r="5"/><circle cx="160" cy="106" r="5"/><circle cx="160" cy="234" r="5"/><circle cx="84" cy="124" r="5"/><circle cx="236" cy="124" r="5"/><circle cx="70" cy="170" r="5"/><circle cx="250" cy="170" r="5"/><circle cx="84" cy="216" r="5"/><circle cx="236" cy="216" r="5"/><circle cx="120" cy="92" r="5"/><circle cx="200" cy="92" r="5"/></g><g font-size="10" fill="#64748b" text-anchor="middle"><text x="160" y="214">2</text><text x="160" y="254">8</text><text x="160" y="296">8 (full outer shell)</text></g></svg>',
          },
          caption: 'Argon has the configuration 2.8.8 — a full (stable) outer shell, so it has no tendency to gain, lose or share electrons and does not form compounds.',
        },
      },
      {
        label: 'd',
        text: 'Some light bulbs can be filled with argon. Over time, the argon leaks from the light bulb and is replaced by air. The images show that a light bulb can explode if the argon is replaced by air. **Outline** why the bulb might explode if argon is replaced by air.',
        marks: 2,
        ph: 'Oxygen in air reacts with hot metal filament; exothermic reaction; rapid gas production/expansion; explosion',
        // Replaces page-06 figure crop (bulb before/after explosion photos) — labelled before/after diagram.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="260" fill="#ffffff"/><text x="130" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Before — argon-filled</text><text x="390" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">After — air leaks in</text><g><path d="M130 50 a55 55 0 1 1 -0.1 0 Z" fill="#eef4f7" stroke="#5b6b78" stroke-width="2"/><rect x="115" y="158" width="30" height="26" fill="#cbd5e1" stroke="#5b6b78"/><path d="M120 120 q10 -20 20 0" fill="none" stroke="#e8590c" stroke-width="2.5"/><text x="130" y="150" font-size="10" fill="#0b7285" text-anchor="middle">Ar (inert)</text></g><g><path d="M390 50 a55 55 0 1 1 -0.1 0 Z" fill="#fff4ed" stroke="#c2255c" stroke-width="2"/><rect x="375" y="158" width="30" height="26" fill="#cbd5e1" stroke="#5b6b78"/><path d="M380 120 q10 -20 20 0" fill="none" stroke="#c2255c" stroke-width="3"/><g stroke="#e8590c" stroke-width="2"><line x1="390" y1="60" x2="390" y2="40"/><line x1="430" y1="78" x2="446" y2="64"/><line x1="350" y1="78" x2="334" y2="64"/><line x1="448" y1="105" x2="466" y2="100"/><line x1="332" y1="105" x2="314" y2="100"/></g><text x="390" y="150" font-size="10" fill="#c2255c" text-anchor="middle">O₂ + hot filament</text></g><text x="260" y="244" font-size="11" text-anchor="middle" fill="#64748b">Oxygen from the air reacts with the hot metal filament — a rapid exothermic reaction that can shatter the bulb.</text></svg>',
          },
          caption: 'With argon the hot filament is protected. When air leaks in, oxygen reacts rapidly with the very hot filament (an exothermic reaction), which can make the bulb explode.',
        },
      },
    ],
  },

  // ─── Q4: Fluoride ions / tooth fillings / mouthwash investigation (16m, Crit B)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Ionic Compounds',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 16,
    stem: 'Many different materials have been developed to repair teeth and bones. Examples of materials used for filling holes in teeth or both are shown below. The natural material of our teeth is protected by fluoride ions (F⁻) which are present in toothpaste and mouthwash. Areas of the world that have increased F⁻ ions in drinking water have increased tooth decay.',
    // Replaces page-06 figure + page-07 figure — the tooth-filling materials compared.
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Filling / repair material', 'Made from', 'Note'],
        rows: [
          ['Amalgam', 'alloy of mercury and other metals', 'long-lasting, metallic appearance'],
          ['Composite', 'plastic-based resin', 'tooth-coloured'],
          ['Gold', 'pure metal', 'very unreactive, expensive'],
          ['Ceramic', 'material made from clay', 'tooth-coloured, hard'],
          ['Natural tooth', 'mineral protected by fluoride ions (F⁻)', 'reference material'],
        ],
      },
      caption: 'Materials used to fill or repair teeth. The investigation compares how well each material is protected by fluoride ions, as natural teeth are.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wanted to investigate whether F⁻ ions protect filling materials in the same way as natural teeth. **State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of type of filling material on the concentration of F⁻ ions after 10 minutes?',
        // Added artefact: variable map for forming the research question.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Role in the investigation', 'Quantity'],
            rows: [
              ['What is changed (independent)', 'type of filling material'],
              ['What is measured (dependent)', 'concentration of F⁻ ions after 10 minutes'],
              ['Kept the same (control)', 'time, starting F⁻ concentration, volume of solution'],
            ],
          },
          caption: 'A research question links the independent variable to the dependent variable.',
        },
      },
      {
        label: 'b',
        text: 'A conductivity meter can be used to measure the change in concentration of F⁻ ions. The student uses a solution with a known concentration of F⁻ ions with each filling material and determines how the concentration of F⁻ ions changes after 10 minutes. **Identify** the independent variable, the dependent variable and two control variables in this investigation.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=type of filling material; DV=conductivity/concentration of F⁻ ions; CV=time (10 min); CV=initial volume/concentration of F⁻ solution',
        widget: 'fill_blank',
        // Replaces page-07 figure — the before/after conductivity-meter apparatus (550 → 450 mg dm⁻³).
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="170" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Before</text><text x="450" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">After 10 minutes</text><g><rect x="40" y="40" width="90" height="150" rx="10" fill="#e2e8f0" stroke="#5b6b78" stroke-width="2"/><rect x="52" y="58" width="66" height="34" rx="4" fill="#0b1f1d"/><text x="85" y="82" font-size="18" font-weight="700" text-anchor="middle" fill="#34d399" font-family="monospace">550</text><text x="85" y="108" font-size="9" text-anchor="middle" fill="#94a3b8">mg dm⁻³</text></g><g><rect x="190" y="120" width="120" height="120" rx="4" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><rect x="240" y="80" width="14" height="100" fill="#cbd5e1" stroke="#5b6b78"/><rect x="225" y="210" width="50" height="22" rx="3" fill="#94a3b8"/><text x="250" y="262" font-size="10" text-anchor="middle" fill="#64748b">F⁻ ion solution +</text><text x="250" y="276" font-size="10" text-anchor="middle" fill="#64748b">tooth filling material</text></g><line x1="500" y1="0" x2="500" y2="0" stroke="none"/><g><rect x="490" y="40" width="90" height="150" rx="10" fill="#e2e8f0" stroke="#5b6b78" stroke-width="2"/><rect x="502" y="58" width="66" height="34" rx="4" fill="#0b1f1d"/><text x="535" y="82" font-size="18" font-weight="700" text-anchor="middle" fill="#34d399" font-family="monospace">450</text><text x="535" y="108" font-size="9" text-anchor="middle" fill="#94a3b8">mg dm⁻³</text></g><g><rect x="370" y="120" width="120" height="120" rx="4" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><rect x="420" y="80" width="14" height="100" fill="#cbd5e1" stroke="#5b6b78"/><rect x="405" y="210" width="50" height="22" rx="3" fill="#94a3b8"/></g><text x="340" y="170" font-size="11" font-weight="700" text-anchor="middle" fill="#c2255c">F⁻ falls</text></svg>',
          },
          caption: 'A conductivity meter reads the F⁻ concentration in the solution before and after 10 minutes with each filling material. A fall in reading (here 550 → 450 mg dm⁻³) shows F⁻ ions were taken up.',
        },
      },
      {
        label: 'c',
        text: 'A second student repeated the investigation with a simpler set up (using only one conductivity meter). **Comment** on the validity of the second student\'s method compared with that of the first student. **Justify** your answer.',
        marks: 2,
        ph: 'Second method less valid; cannot measure initial conductivity separately; cannot determine change in F⁻ concentration',
        // Replaces page-08 figure crop — the simplified single-meter apparatus.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="280" fill="#ffffff"/><text x="210" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Second student — one conductivity meter only</text><g><rect x="60" y="50" width="90" height="150" rx="10" fill="#e2e8f0" stroke="#5b6b78" stroke-width="2"/><rect x="72" y="68" width="66" height="34" rx="4" fill="#0b1f1d"/><text x="105" y="92" font-size="18" font-weight="700" text-anchor="middle" fill="#34d399" font-family="monospace">###</text><text x="105" y="118" font-size="9" text-anchor="middle" fill="#94a3b8">mg dm⁻³</text></g><path d="M150 80 C 230 70, 250 90, 270 110" fill="none" stroke="#1f2d3a" stroke-width="2"/><g><rect x="240" y="150" width="120" height="100" rx="4" fill="#dbeafe" stroke="#5b6b78" stroke-width="2"/><rect x="290" y="110" width="14" height="80" fill="#cbd5e1" stroke="#5b6b78"/><rect x="275" y="222" width="50" height="20" rx="3" fill="#94a3b8"/><text x="300" y="270" font-size="10" text-anchor="middle" fill="#64748b">F⁻ solution + filling material</text></g></svg>',
          },
          caption: 'The simplified set-up reads the solution only once, so it cannot compare the F⁻ concentration before and after — the change in F⁻ cannot be found.',
        },
      },
      {
        label: 'd',
        text: 'Mouthwash is a common source of F⁻ ions. Mouthwash might be used after brushing with toothpaste to clean teeth further. **Formulate** a testable hypothesis to determine if using mouthwash and toothpaste is more effective at cleaning teeth than toothpaste alone. If… Then… Because…',
        marks: 3,
        ph: 'If mouthwash is used after toothpaste, then more F⁻ ions will be in the mouth, because mouthwash provides additional fluoride beyond toothpaste alone',
        // Replaces page-08 figure crop (two mouthwash demonstration videos) — fluoride sources compared.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Cleaning routine', 'Sources of fluoride (F⁻)', 'Expected F⁻ delivered'],
            rows: [
              ['Toothpaste alone', 'toothpaste', 'lower'],
              ['Toothpaste then mouthwash', 'toothpaste + mouthwash', 'higher'],
            ],
          },
          caption: 'Compare the fluoride delivered by toothpaste alone with toothpaste followed by mouthwash, to frame an If… Then… Because… hypothesis.',
        },
      },
      {
        label: 'e',
        text: 'The students decided to use the method in part (b) to test different brands of mouthwash on one type of tooth filling material. **Identify** the anomalous result. **Suggest** an experimental reason that may have produced this result.',
        marks: 2,
        ph: 'Identify trial that is furthest from others for same brand; suggest: contamination, measurement error, different temperature',
        // Replaces page-09 figure — the brand A–D conductivity results table (real values).
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Brand', 'Initial conductivity / mg dm⁻³', 'After 10 min — Trial 1', 'Trial 2', 'Trial 3'],
            rows: [
              ['A', '165', '150', '153', '157'],
              ['B', '110', '103', '105', '30'],
              ['C', '220', '212', '211', '209'],
              ['D', '198', '179', '176', '175'],
            ],
          },
          caption: 'Conductivity (mg dm⁻³) after 10 minutes for four mouthwash brands. Look for a trial that does not fit the pattern of its own brand.',
        },
      },
      {
        label: 'f',
        text: '**Calculate** the average conductivity after 10 minutes for Brand D. Give your answer to an appropriate number of significant figures and include the unit.',
        marks: 2,
        ph: 'Average = (179+176+175)/3 = 177 mg dm⁻³ (3 s.f.)',
        widget: 'fill_blank',
        // Replaces page-09 figure crop — Brand D trials needed for the average.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Brand', 'After 10 min — Trial 1', 'Trial 2', 'Trial 3'],
            rows: [
              ['D', '179', '176', '175'],
            ],
          },
          caption: 'Brand D conductivity after 10 minutes (mg dm⁻³). Average the three trials and give the answer to an appropriate number of significant figures with the unit.',
        },
      },
      {
        label: 'g',
        text: '**Use** the data in part (f) to justify the best choice of mouthwash.',
        marks: 1,
        ph: 'Brand with highest conductivity after 10 min = most F⁻ ions remaining = best protection',
        // Replaces page-09 figure crop — average conductivity per brand to choose the best.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Brand', 'Average conductivity after 10 min / mg dm⁻³'],
            rows: [
              ['A', '153'],
              ['B', '104 (ignoring anomaly)'],
              ['C', '211'],
              ['D', '177'],
            ],
          },
          caption: 'Average remaining conductivity per brand. A higher remaining conductivity means more F⁻ ions left to protect teeth.',
        },
      },
      {
        label: 'h',
        text: 'F⁻ in low concentrations is good for healthy teeth. Scientists have suggested that 50% of people will suffer unwanted effects with an intake of F⁻ ions above 5 mg kg⁻¹ of body weight. The table shows recommended mass of toothpaste by age. **Suggest** why the recommended mass of toothpaste increases as children grow.',
        marks: 1,
        ph: 'More/larger teeth as children grow; more surface area; higher body mass needs proportionally more fluoride',
        // Replaces page-10 figure crop — recommended toothpaste mass by age (real values).
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Age', 'Recommended mass of toothpaste / g'],
            rows: [
              ['Under 3', '0.25'],
              ['3–6 years', '0.50'],
              ['7+ years', '1.00'],
            ],
          },
          caption: 'Recommended amount of toothpaste increases with age. A full set of adult teeth is 32 teeth, compared with fewer in young children.',
        },
      },
    ],
  },

  // ─── Q5: Acid rain / roofing materials / Crit B design (20m, Crit B) ──────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 20,
    stem: 'Despite efforts in the industrial world to reduce pollution, acid rain is present. Designing cheap and sustainable shelters that can be long lasting and resist weather conditions is a challenge. A student has been researching rooftops made of recycled material. One of the challenges in using recycled material to build sustainable rooftops is their reaction with acid rain.',
    // Replaces page-10 figure + page-11 figure — the candidate roofing materials.
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Roofing material', 'Type', 'Likely reaction with acid rain'],
        rows: [
          ['Asphalt', 'bitumen / mineral', 'low'],
          ['Clay', 'ceramic (fired clay)', 'low'],
          ['Rubber', 'recycled polymer', 'very low'],
          ['Steel', 'metal (iron alloy)', 'reacts — corrodes'],
          ['Slate', 'natural rock', 'low'],
        ],
      },
      caption: 'Five recycled roofing materials, each supplied as a 10 cm × 10 cm sample, to be tested against dilute acid (modelling acid rain).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student placed a piece of recycled steel roofing in acid. An image of their results is shown. **Select** how you can tell a chemical reaction has taken place in the image.',
        marks: 1,
        ph: 'Change in colour (rust/orange-brown formed)',
        widget: 'radio_select',
        widgetOptions: ['Change in colour', 'Change in size', 'Change in temperature', 'Change in mass'],
        // Replaces page-11 figure crop — steel before/after the acid reaction (colour change evidence).
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="230" fill="#ffffff"/><text x="120" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Initial</text><text x="360" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Final</text><rect x="40" y="44" width="160" height="140" rx="6" fill="#9aa3ab" stroke="#5b6b78" stroke-width="2"/><text x="120" y="120" font-size="11" text-anchor="middle" fill="#3b4654">shiny grey steel</text><rect x="280" y="44" width="160" height="140" rx="6" fill="#a8531f" stroke="#7a3a12" stroke-width="2"/><g fill="#6b3211" opacity="0.5"><circle cx="320" cy="90" r="10"/><circle cx="380" cy="130" r="14"/><circle cx="350" cy="160" r="9"/><circle cx="410" cy="80" r="8"/></g><text x="360" y="120" font-size="11" text-anchor="middle" fill="#3a1c0a">orange-brown rust</text><text x="240" y="216" font-size="11" text-anchor="middle" fill="#64748b">A new orange-brown substance (rust) has appeared — a clear sign of a chemical reaction.</text></svg>',
          },
          caption: 'The steel changes from shiny grey to orange-brown — a new substance (rust) has formed.',
        },
      },
      {
        label: 'b',
        text: 'You are given a (10 cm × 10 cm) sample of each type of roofing material (asphalt, clay, rubber, steel, slate) to model its rate of reaction with acid rain using 1 mol dm⁻³ HCl. **Design** an experiment that will determine the rate of reaction of HCl with each type of roofing material. In your answer you should include:\n• the independent variable, the dependent variable and two additional control variables\n• a list of equipment you will use\n• details of your method\n• details of the data you will collect\n• how you will ensure that your method is safe.',
        marks: 18,
        ph: 'IV=type of material; DV=rate of reaction (mass lost / bubble production / time); CVs=volume of HCl + temp; equipment + safe method',
        // Replaces page-12 figure — the five materials being tested with acid.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Material', 'Sample size', 'Acid', 'Suggested measurement'],
            rows: [
              ['Asphalt', '10 cm × 10 cm', '1 mol dm⁻³ HCl', 'mass lost / gas produced over time'],
              ['Clay', '10 cm × 10 cm', '1 mol dm⁻³ HCl', 'mass lost / gas produced over time'],
              ['Rubber', '10 cm × 10 cm', '1 mol dm⁻³ HCl', 'mass lost / gas produced over time'],
              ['Steel', '10 cm × 10 cm', '1 mol dm⁻³ HCl', 'mass lost / gas produced over time'],
              ['Slate', '10 cm × 10 cm', '1 mol dm⁻³ HCl', 'mass lost / gas produced over time'],
            ],
          },
          caption: 'Each material is the same size and tested with the same acid — change only the material (independent variable) and measure the rate of reaction (dependent variable).',
        },
      },
      {
        label: 'c',
        text: 'Climate conditions are different around the world. Roofing used in one country may not be suitable for a different country. **Suggest** a different independent variable linked to climate that could be investigated.',
        marks: 1,
        ph: 'Temperature of acid / concentration of acid / UV exposure / humidity',
        // Added artefact: climate-linked variables that could be tested.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Climate factor', 'How it could be the independent variable'],
            rows: [
              ['Temperature', 'test the same material at different acid temperatures'],
              ['Acid concentration', 'vary the concentration of HCl (acidity of the rain)'],
              ['UV exposure', 'expose samples to different amounts of sunlight'],
              ['Humidity', 'vary how wet the samples are kept'],
            ],
          },
          caption: 'Climate varies around the world — any of these factors could be chosen as a new independent variable.',
        },
      },
    ],
  },

  // ─── Q6: Electroplated cutlery / NaCl corrosion investigation (13m, Crit C)
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrochemistry & Data Analysis',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 13,
    stem: 'Food often contains chemicals which can react with metal over time causing corrosion. Cutlery is made of a metal which is cheap to produce and then plated using electrolysis to give the cutlery a more expensive look. A student wants to model the reaction between electroplated cutlery and sodium chloride (NaCl). To replace the cutlery, the student uses iron nails that have been electroplated with zinc. The student investigated the effect of NaCl concentration on the rate of corrosion by measuring the mass lost by the nail after 7 days.',
    // Replaces page-13 figure — the corrosion data and the empty plotting grid. RateSim renders the
    // concentration vs average-mass-lost scatter with a line of best fit (the data the plot task uses).
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Corrosion of zinc-plated nails vs NaCl concentration',
        mode: 'scatter',
        xLabel: 'Concentration of NaCl / mol dm⁻³',
        yLabel: 'Average mass lost in 7 days / mg',
        xAxis: { label: 'Concentration of NaCl / mol dm⁻³', min: 0, max: 1, tick: 0.1 },
        yAxis: { label: 'Average mass lost / mg', min: 0, max: 100, tick: 10 },
        scatterPoints: [
          { x: 0.0, y: 10 },
          { x: 0.1, y: 18 },
          { x: 0.3, y: 43 },
          { x: 0.5, y: 57 },
          { x: 0.8, y: 86 },
        ],
        lineOfBestFit: true,
        note: 'As the NaCl concentration increases, the average mass lost increases — a positive correlation.',
      },
      caption: 'Average mass lost by the nail after 7 days at each NaCl concentration (mg), with a line of best fit. The 0.0 mol dm⁻³ point is the control.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Plot** a graph of concentration and average mass lost. You should include a line of best fit.\n\nData:\n| Concentration / mol dm⁻³ | Average mass lost / mg |\n|---|---|\n| 0.0 | 10 |\n| 0.1 | 18 |\n| 0.3 | 43 |\n| 0.5 | 57 |\n| 0.8 | 86 |',
        marks: 6,
        ph: 'x=NaCl concentration/mol dm⁻³; y=mass lost/mg; 5 points; line of best fit; axes labelled with units',
        // Replaces page-13 figure crop — full trial data (Trial 1–3 and average) for plotting.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Concentration of NaCl / mol dm⁻³', 'Mass lost — Trial 1 / mg', 'Trial 2 / mg', 'Trial 3 / mg', 'Average / mg'],
            rows: [
              ['0.0', '10', '8', '12', '10'],
              ['0.1', '16', '19', '19', '18'],
              ['0.3', '45', '39', '45', '43'],
              ['0.5', '60', '55', '54', '57'],
              ['0.8', '81', '89', '88', '86'],
            ],
          },
          caption: 'Mass lost in 7 days (mg) at each NaCl concentration. Plot concentration (x-axis) against the average mass lost (y-axis) and add a line of best fit.',
        },
      },
      {
        label: 'b',
        text: '**Describe** the trend shown in the data in part (a). **Suggest** the purpose of the trial at 0.00 mol dm⁻³ NaCl.',
        marks: 3,
        ph: 'As NaCl concentration increases, mass lost increases (positive correlation). 0.00 mol dm⁻³ = control/baseline/reference to show corrosion without NaCl.',
        // Added artefact: concentration vs average mass-lost, to describe the trend and the 0.0 control.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Concentration of NaCl / mol dm⁻³', 'Average mass lost / mg'],
            rows: [
              ['0.0 (control)', '10'],
              ['0.1', '18'],
              ['0.3', '43'],
              ['0.5', '57'],
              ['0.8', '86'],
            ],
          },
          caption: 'The 0.0 mol dm⁻³ trial (no NaCl) acts as a control. Compare the other concentrations to describe the trend.',
        },
      },
      {
        label: 'c',
        text: 'Before their investigation, the student wrote the following hypothesis:\n"If the NaCl concentration increases, then less mass will be lost from the nail after 7 days because there are more collisions between particles of NaCl in the solution."\n\n**Evaluate** the validity of this hypothesis using the data in part (a).',
        marks: 3,
        ph: 'Hypothesis is INVALID. Data shows MORE mass lost as concentration increases (positive relationship). Reasoning about collisions is also incorrect.',
        // Added artefact: hypothesis vs observed data side by side, for the evaluation.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Concentration of NaCl / mol dm⁻³', 'Hypothesis predicts', 'Data actually shows (mg)'],
            rows: [
              ['0.0', 'most mass lost', '10 (least)'],
              ['0.8', 'least mass lost', '86 (most)'],
            ],
          },
          caption: 'The hypothesis predicts LESS mass lost at higher concentration, but the data shows MORE mass lost — use this to evaluate its validity.',
        },
      },
      {
        label: 'd',
        text: 'The student used iron nails plated with zinc to model the effect of electroplating on cutlery. **Suggest** why nails were used to model cutlery.',
        marks: 1,
        ph: 'Standardised size/shape; same base metal (iron/steel); easier to measure mass change; cheaper to obtain',
        // Added artefact: labelled zinc-plated iron nail (the model for electroplated cutlery).
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="200" fill="#ffffff"/><text x="240" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">An iron nail electroplated with zinc</text><rect x="80" y="92" width="300" height="22" fill="#9aa3ab" stroke="#5b6b78" stroke-width="1.5"/><rect x="80" y="92" width="300" height="6" fill="#cbd5e1"/><polygon points="380,92 430,103 380,114" fill="#9aa3ab" stroke="#5b6b78" stroke-width="1.5"/><ellipse cx="80" cy="103" rx="10" ry="16" fill="#7c868f" stroke="#5b6b78" stroke-width="1.5"/><line x1="120" y1="80" x2="120" y2="60" stroke="#0b7285"/><text x="120" y="52" font-size="10" text-anchor="middle" fill="#0b7285">thin zinc plating</text><line x1="240" y1="125" x2="240" y2="150" stroke="#495057"/><text x="240" y="166" font-size="10" text-anchor="middle" fill="#495057">iron (steel) core</text></svg>',
          },
          caption: 'Each nail is the same standard size and shape and has an iron core plated with zinc — just like electroplated cutlery — making mass changes easy to compare.',
        },
      },
    ],
  },

  // ─── Q7: Nuclear fission / radioactive waste transport (10m, Crit D) ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Chemistry, Energy & Environmental Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'Fossil fuels have been used widely as an energy source in everyday life. This has had a negative impact on the environment and so alternative sources of energy are needed. One alternative source of energy is nuclear fission. Nuclear fission releases an enormous amount of energy but also radioactive waste that must be disposed of. This radioactive waste is extremely dangerous and must be disposed of safely.',
    // Replaces page-14 figure — energy-source comparison setting up the renewable/non-renewable contrast.
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Energy source', 'Renewable?', 'CO₂ / greenhouse gases', 'Other notes'],
        rows: [
          ['Solar', 'renewable', 'none in use', 'depends on sunlight'],
          ['Wind', 'renewable', 'none in use', 'depends on wind'],
          ['Fossil fuels', 'non-renewable', 'high', 'will run out'],
          ['Nuclear fission', 'non-renewable', 'very low', 'produces radioactive waste'],
        ],
      },
      caption: 'Comparison of energy sources. Renewable sources will not run out and release little or no CO₂; non-renewable sources are finite.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Energy can be obtained from renewable energy sources such as solar and wind, or non-renewable sources such as fossil fuels. In addition to being renewable and non-renewable, **state** one other difference between these two types of energy source.',
        marks: 1,
        ph: 'Renewable sources do not produce CO₂/greenhouse gases; non-renewable produce CO₂ and pollutants',
        // Added artefact: renewable vs non-renewable contrast for the "one other difference" answer.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Renewable (solar, wind)', 'Non-renewable (fossil fuels)'],
            rows: [
              ['Will it run out?', 'no — naturally replaced', 'yes — finite supply'],
              ['CO₂ / pollution', 'little or none', 'large amounts'],
            ],
          },
          caption: 'Renewable and non-renewable sources differ in more than just being replaceable.',
        },
      },
      {
        label: 'b',
        text: 'Energy from nuclear fission is produced in nuclear reactors. Nuclear fission happens when a neutron collides with an atom, producing an unstable nucleus which splits into two different atoms, releasing energy. Additional neutrons are also released which can start new fission reactions. **Describe** the chain reaction of nuclear fission shown in the animation. In your answer you should include:\n• what causes the nucleus to become unstable\n• what is released when the nucleus splits\n• how a chain reaction occurs.',
        marks: 3,
        ph: 'Neutron hits nucleus → unstable → splits into 2 smaller nuclei + 2-3 neutrons + energy → neutrons hit more nuclei → chain reaction',
        // Replaces page-15 figure (fission animation) — labelled chain-reaction diagram.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#0b1220"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#ffffff">Nuclear fission chain reaction</text><g><circle cx="60" cy="150" r="7" fill="#cbd5e1"/><text x="60" y="178" font-size="10" text-anchor="middle" fill="#94a3b8">neutron</text><line x1="70" y1="150" x2="120" y2="150" stroke="#e8590c" stroke-width="2" marker-end="url(#a)"/></g><circle cx="150" cy="150" r="22" fill="#c2255c"/><text x="150" y="120" font-size="10" text-anchor="middle" fill="#ffffff">U-235</text><line x1="172" y1="150" x2="220" y2="150" stroke="#e8590c" stroke-width="2"/><circle cx="250" cy="120" r="16" fill="#2f9e44"/><circle cx="250" cy="180" r="16" fill="#1971c2"/><text x="285" y="124" font-size="9" fill="#94a3b8">Ba-141</text><text x="285" y="190" font-size="9" fill="#94a3b8">Kr-92</text><g stroke="#e8590c" stroke-width="2"><line x1="266" y1="110" x2="330" y2="70"/><line x1="270" y1="150" x2="340" y2="150"/><line x1="266" y1="190" x2="330" y2="230"/></g><g fill="#cbd5e1"><circle cx="338" cy="66" r="6"/><circle cx="348" cy="150" r="6"/><circle cx="338" cy="234" r="6"/></g><circle cx="400" cy="60" r="18" fill="#c2255c"/><circle cx="410" cy="150" r="18" fill="#c2255c"/><circle cx="400" cy="240" r="18" fill="#c2255c"/><g stroke="#e8590c" stroke-width="1.5"><line x1="416" y1="55" x2="470" y2="40"/><line x1="416" y1="68" x2="470" y2="85"/><line x1="426" y1="146" x2="480" y2="135"/><line x1="426" y1="156" x2="480" y2="170"/><line x1="416" y1="235" x2="470" y2="220"/><line x1="416" y1="248" x2="470" y2="262"/></g><text x="500" y="150" font-size="10" fill="#94a3b8" text-anchor="middle">…and so on</text><text x="280" y="290" font-size="11" text-anchor="middle" fill="#cbd5e1">A neutron splits a nucleus, releasing energy + more neutrons, which split more nuclei — a chain reaction.</text></svg>',
          },
          caption: 'A neutron is absorbed by a U-235 nucleus, making it unstable. It splits into two smaller nuclei, releasing energy and 2–3 more neutrons, which split further nuclei — a self-sustaining chain reaction.',
        },
      },
      {
        label: 'c',
        text: 'It is necessary to transport radioactive waste from the nuclear reactor to a storage facility. There are several methods of transport that can be used. These include road, trains, rivers and air. **Discuss** the considerations when choosing a method of transport. In your answer you should include:\n• what risks are involved when transporting radioactive waste\n• what precautions should be taken when using each method of transport\n• a conclusion with justification of which is the safest method of transport.',
        marks: 6,
        ph: 'Risks: radiation leak/accident/contamination. Precautions: sealed containers, remote routes, trained staff, monitoring. Conclusion: trains/road with justification.',
        // Replaces page-16 figure crop — transport methods, risks and precautions.
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Method of transport', 'Main risk', 'Precaution'],
            rows: [
              ['Road', 'traffic accident / collision', 'sealed shielded containers, planned routes away from towns'],
              ['Train (rail)', 'derailment', 'dedicated freight trains, robust containers, monitoring'],
              ['River / sea', 'leak / sinking', 'sealed waterproof casks, away from drinking water'],
              ['Air', 'crash — wide contamination', 'generally avoided for high-level waste'],
            ],
          },
          caption: 'Each transport method carries a risk of a radiation leak or contamination, so precautions and a justified choice are needed.',
        },
      },
    ],
  },

  // ─── Q8: Radioactive waste disposal — Crit D essay (13m, Crit D) ──────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Waste, Ethics & Societal Impact',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 13,
    stem: 'When energy is produced from the nuclear fission of uranium-235, the by-products are atoms of barium-141 and krypton-92 which are also radioactive. This radioactive waste is extremely dangerous and must be disposed of safely. There are two main methods under discussion: sea dumping and underground storage.\n\nIn sea dumping, the waste is sealed in containers and transported to a port. It is transported on ships away from populated areas where it is placed in oceans. Sea dumping was used for more than 50 years but was banned in 1993. Some organisations became aware of the limitations of dumping waste in seas and oceans and developed new storage methods. Underground storage areas, radioactive nuclear waste is stored in special containers 200 to 1000 metres below Earth\'s surface in materials such as clay to prevent harmful materials seeping out of the sites.',
    // Replaces page-17 figure (sea-dumping video still) — comparison of the two disposal methods.
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Disposal method', 'Effect on living things', 'Economic impact', 'Status'],
        rows: [
          ['Sea dumping', 'risk of marine contamination / food-chain damage', 'cheap to set up', 'banned in 1993'],
          ['Underground storage', 'isolated 200–1000 m below ground in clay; low risk if sealed', 'expensive to build', 'current method'],
        ],
      },
      caption: 'The two main methods for disposing of radioactive waste. Use the data to discuss and evaluate one method.',
    },
    tasks: [
      {
        label: '',
        text: '**Using** the information above, **discuss and evaluate** one of the two methods for the disposal of radioactive waste. In your answer you should include:\n• the effects of either sea dumping or underground storage on living things\n• the economic impact\n• a justification of your opinion on which is the best method for disposing of radioactive waste.',
        marks: 13,
        ph: 'Sea dumping: marine ecosystem damage/contamination of food chain; economic: cheap to set up, banned internationally. Underground: expensive to build, long-term safe, no ecosystem impact. Justified conclusion: underground better because long-term safety despite cost.',
      },
    ],
  },
]
