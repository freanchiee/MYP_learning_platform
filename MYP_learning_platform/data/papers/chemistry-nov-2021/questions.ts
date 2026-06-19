export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/** Data-driven interactive artefact shown in the context/stimulus slot. */
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
  /** Per-task interactive artefact, rendered above the answer box. */
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
  /** Question-level interactive artefact, rendered in the context/stimulus slot. */
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
  id: 'chemistry-nov-2021',
  subject: 'Chemistry',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 (7 marks, Crit A) ─── Ancient toothpaste / calcium carbonate / Na & F ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table — toothpaste ingredients',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 7,
    stem: 'The ingredients of ancient toothpastes changed over time and were very different to modern varieties. Ingredients used by Ancient Egyptians included a powder of cow hoof ashes and burnt eggshells, which was combined with pumice, a type of crumbly rock. The Greeks and Romans preferred more abrasive substances and their toothpaste ingredients included crushed bones and oyster shells. In Asia a wide variety of substances such as ginseng and salt were found in toothpaste.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table — toothpaste elements</text><g font-size="8" fill="#64748b"><text x="60" y="50">Group 1</text><text x="380" y="50">Group 17</text></g><g><rect x="40" y="56" width="58" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="69" y="70" font-size="8" text-anchor="middle" fill="#94a3ad">3</text><text x="69" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Li</text><text x="69" y="98" font-size="7" text-anchor="middle" fill="#64748b">lithium</text></g><g><rect x="40" y="112" width="58" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="69" y="126" font-size="8" text-anchor="middle" fill="#94a3ad">11</text><text x="69" y="142" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Na</text><text x="69" y="154" font-size="7" text-anchor="middle" fill="#64748b">sodium</text></g><g><rect x="368" y="56" width="58" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="397" y="70" font-size="8" text-anchor="middle" fill="#94a3ad">9</text><text x="397" y="86" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">F</text><text x="397" y="98" font-size="7" text-anchor="middle" fill="#64748b">fluorine</text></g><g><rect x="180" y="112" width="58" height="46" fill="#f3f5f7" stroke="#5b6b78"/><text x="209" y="126" font-size="8" text-anchor="middle" fill="#94a3ad">20</text><text x="209" y="142" font-size="16" font-weight="700" text-anchor="middle" fill="#495057">Ca</text><text x="209" y="154" font-size="7" text-anchor="middle" fill="#64748b">calcium</text></g><text x="40" y="186" font-size="10" fill="#475569">Period number (rows) = number of occupied electron shells.</text><text x="40" y="202" font-size="10" fill="#475569">Group number (main groups) = number of outer-shell electrons.</text></svg>',
      },
      caption: 'Periodic-table positions of the elements found in toothpaste ingredients (Li, Na, Ca, F).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the formula of calcium carbonate.',
        marks: 1,
        ph: 'Select one formula',
        widget: 'radio_select',
        widgetOptions: ['CaO', 'CaCO₃', 'Ca(OH)₂', 'CaSO₄'],
      },
      {
        label: 'b',
        text: 'Modern toothpaste can contain sodium fluoride. Use the periodic table to **state** the group and period of sodium. Group: ___ Period: ___',
        marks: 2,
        ph: 'Group 1, Period 3',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** the electron configuration of fluorine.',
        marks: 1,
        ph: '2.7 or 1s² 2s² 2p⁵',
      },
      {
        label: 'd',
        text: 'The diagram below shows the Bohr model of a sodium atom and a lithium atom. Using the Bohr model, **explain** why sodium is more reactive than lithium.',
        marks: 3,
        ph: 'More electron shells → outer e⁻ further from nucleus → less attraction → easier to remove',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="150" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sodium (Na)</text><g fill="none" stroke="#5b6b78" stroke-width="1.3"><circle cx="150" cy="150" r="40"/><circle cx="150" cy="150" r="68"/><circle cx="150" cy="150" r="96"/></g><circle cx="150" cy="150" r="26" fill="#c0392b"/><text x="150" y="156" font-size="15" font-weight="700" text-anchor="middle" fill="#fff">Na</text><g fill="#1f2d3a"><circle cx="150" cy="110" r="4.5"/><circle cx="150" cy="190" r="4.5"/><circle cx="110" cy="150" r="4.5"/><circle cx="190" cy="150" r="4.5"/><circle cx="150" cy="82" r="4.5"/><circle cx="150" cy="218" r="4.5"/><circle cx="92" cy="118" r="4.5"/><circle cx="208" cy="118" r="4.5"/><circle cx="92" cy="182" r="4.5"/><circle cx="208" cy="182" r="4.5"/><circle cx="150" cy="54" r="4.5"/></g><text x="150" y="262" font-size="12" text-anchor="middle" fill="#475569">2.8.1 — 3 shells</text><text x="410" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Lithium (Li)</text><g fill="none" stroke="#5b6b78" stroke-width="1.3"><circle cx="410" cy="150" r="40"/><circle cx="410" cy="150" r="68"/></g><circle cx="410" cy="150" r="26" fill="#c0392b"/><text x="410" y="156" font-size="15" font-weight="700" text-anchor="middle" fill="#fff">Li</text><g fill="#1f2d3a"><circle cx="410" cy="110" r="4.5"/><circle cx="410" cy="190" r="4.5"/><circle cx="410" cy="82" r="4.5"/></g><text x="410" y="262" font-size="12" text-anchor="middle" fill="#475569">2.1 — 2 shells</text></svg>',
          },
          caption: 'Bohr models: sodium (2.8.1, three shells) and lithium (2.1, two shells). Both have one outer-shell electron.',
        },
      },
    ],
  },

  // ─── Q2 (9 marks, Crit A) ─── Teeth whitening / hydrogen peroxide ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding and chemical equations — hydrogen peroxide',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 9,
    stem: 'Personal hygiene products have changed as a result of developments over time. Recently, people have been using more teeth whitening products. Many of these teeth whitening products contain hydrogen peroxide as the active ingredient.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hydrogen peroxide molecule (H₂O₂)</text><line x1="210" y1="110" x2="290" y2="110" stroke="#5b6b78" stroke-width="3"/><circle cx="210" cy="110" r="26" fill="#c0392b"/><text x="210" y="115" font-size="15" font-weight="700" text-anchor="middle" fill="#fff">O</text><circle cx="290" cy="110" r="26" fill="#c0392b"/><text x="290" y="115" font-size="15" font-weight="700" text-anchor="middle" fill="#fff">O</text><line x1="185" y1="92" x2="150" y2="66" stroke="#5b6b78" stroke-width="3"/><circle cx="140" cy="58" r="16" fill="#eef4f7" stroke="#94a3ad"/><text x="140" y="63" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text><line x1="315" y1="128" x2="350" y2="154" stroke="#5b6b78" stroke-width="3"/><circle cx="360" cy="162" r="16" fill="#eef4f7" stroke="#94a3ad"/><text x="360" y="167" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">H</text><text x="280" y="192" font-size="11" text-anchor="middle" fill="#475569">An H–O–O–H molecule: each bond is a shared pair of electrons (covalent).</text></svg>',
      },
      caption: 'Hydrogen peroxide (H₂O₂), the active whitening agent, is a small covalently bonded molecule.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonds in hydrogen peroxide (H₂O₂).',
        marks: 1,
        ph: 'Covalent',
        widget: 'radio_select',
        widgetOptions: ['Ionic', 'Covalent', 'Metallic', 'Coordinate'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (dot cross diagram) of hydrogen peroxide.',
        marks: 1,
        ph: 'Option C — H bonded to O, lone pairs on each O, single O–O bond',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><g><text x="40" y="36" font-size="14" font-weight="700" fill="#1f2d3a">A</text><text x="70" y="100" font-size="14" fill="#1f2d3a">H</text><text x="100" y="100" font-size="20" fill="#0b7285">O</text><text x="128" y="100" font-size="18" fill="#c0392b">=</text><text x="150" y="100" font-size="20" fill="#0b7285">O</text><text x="184" y="100" font-size="14" fill="#1f2d3a">H</text><text x="60" y="124" font-size="10" fill="#94a3ad">O=O double bond</text></g><g><text x="320" y="36" font-size="14" font-weight="700" fill="#1f2d3a">B</text><text x="350" y="100" font-size="14" fill="#1f2d3a">H</text><text x="378" y="100" font-size="18" fill="#c0392b">⋮</text><text x="392" y="100" font-size="20" fill="#0b7285">O</text><text x="426" y="100" font-size="20" fill="#0b7285">O</text><text x="460" y="100" font-size="18" fill="#c0392b">⋮</text><text x="476" y="100" font-size="14" fill="#1f2d3a">H</text><text x="350" y="124" font-size="10" fill="#94a3ad">both H on same O</text></g><g><rect x="20" y="180" width="270" height="120" fill="#f0fbf4" stroke="#2f9e44" stroke-width="1.5" rx="6"/><text x="40" y="206" font-size="14" font-weight="700" fill="#2f9e44">C</text><text x="70" y="252" font-size="14" fill="#1f2d3a">H</text><circle cx="96" cy="241" r="2" fill="#c0392b"/><circle cx="96" cy="255" r="2" fill="#c0392b"/><text x="104" y="252" font-size="20" fill="#0b7285">O</text><circle cx="136" cy="234" r="2" fill="#c0392b"/><circle cx="144" cy="234" r="2" fill="#c0392b"/><text x="132" y="252" font-size="14" fill="#1f2d3a">·×</text><text x="158" y="252" font-size="20" fill="#0b7285">O</text><circle cx="186" cy="262" r="2" fill="#c0392b"/><circle cx="194" cy="262" r="2" fill="#c0392b"/><text x="200" y="252" font-size="14" fill="#1f2d3a">H</text><text x="40" y="288" font-size="10" fill="#2f9e44">H–O–O–H, single O–O bond, lone pairs on each O</text></g><g><text x="320" y="206" font-size="14" font-weight="700" fill="#1f2d3a">D</text><text x="350" y="252" font-size="14" fill="#1f2d3a">H</text><text x="376" y="252" font-size="20" fill="#0b7285">O</text><text x="410" y="252" font-size="20" fill="#0b7285">O</text><text x="444" y="252" font-size="14" fill="#1f2d3a">H</text><text x="350" y="278" font-size="10" fill="#94a3ad">single bonds but no lone pairs shown</text></g></svg>',
          },
          caption: 'Four candidate dot-cross (Lewis) diagrams for hydrogen peroxide.',
        },
      },
      {
        label: 'c',
        text: 'Hydrogen peroxide is unstable and decomposes slowly. As it decomposes, the teeth whitening process is less effective. When hydrogen peroxide decomposes, it forms water and oxygen. **Write down** the balanced equation for the decomposition of hydrogen peroxide. You should include state symbols in your answer.',
        marks: 3,
        ph: '2H₂O₂(aq) → 2H₂O(l) + O₂(g)',
      },
      {
        label: 'd',
        text: '**Select** the hazard symbol for hydrogen peroxide.',
        marks: 1,
        ph: 'Option D — oxidising (flame over circle)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><g transform="translate(75,90)"><rect x="-42" y="-42" width="84" height="84" rx="8" transform="rotate(45)" fill="#fff" stroke="#c0392b" stroke-width="5"/><path d="M-18,18 h36 M-2,2 l-14,18 M2,2 l14,18" stroke="#1f2d3a" stroke-width="2.5" fill="none"/><path d="M-12,-8 q8,-14 18,-2" stroke="#1f2d3a" stroke-width="2" fill="none"/><circle cx="-6" cy="-2" r="2.5" fill="#1f2d3a"/><circle cx="10" cy="2" r="2.5" fill="#1f2d3a"/></g><text x="75" y="180" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A — corrosive</text><g transform="translate(225,90)"><rect x="-42" y="-42" width="84" height="84" rx="8" transform="rotate(45)" fill="#fff" stroke="#c0392b" stroke-width="5"/><path d="M0,-26 C14,-6 18,4 8,18 C4,24 -2,24 -6,18 C-12,10 -4,4 0,-4 C2,2 6,8 4,14 C8,12 10,4 0,-26 Z" fill="#1f2d3a"/></g><text x="225" y="180" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">B — flammable</text><g transform="translate(375,90)"><rect x="-42" y="-42" width="84" height="84" rx="8" transform="rotate(45)" fill="#fff" stroke="#c0392b" stroke-width="5"/><circle cx="0" cy="-8" r="10" fill="none" stroke="#1f2d3a" stroke-width="2.5"/><circle cx="-3" cy="-10" r="1.5" fill="#1f2d3a"/><circle cx="3" cy="-10" r="1.5" fill="#1f2d3a"/><path d="M-4,-4 q4,4 8,0" stroke="#1f2d3a" stroke-width="2" fill="none"/><path d="M0,2 L-12,22 M0,2 L12,22 M0,2 L0,22" stroke="#1f2d3a" stroke-width="2.5"/></g><text x="375" y="180" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">C — toxic</text><g transform="translate(525,90)"><rect x="-42" y="-42" width="84" height="84" rx="8" transform="rotate(45)" fill="#fff" stroke="#c0392b" stroke-width="5"/><circle cx="0" cy="6" r="16" fill="none" stroke="#1f2d3a" stroke-width="3"/><path d="M0,-26 C12,-12 14,-6 6,4 C3,8 -2,8 -5,4 C-10,-2 -3,-8 0,-14 C2,-9 5,-4 3,0 C7,-2 9,-8 0,-26 Z" fill="#1f2d3a"/></g><text x="525" y="180" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">D — oxidising</text></svg>',
          },
          caption: 'Four hazard pictograms. D shows a flame over a circle — the oxidising-agent symbol.',
        },
      },
      {
        label: 'e',
        text: 'Different teeth whitening products vary in hydrogen peroxide concentration. Using information from the video and your knowledge of collision theory, **explain** how concentration affects the rate at which the teeth are whitened.',
        marks: 3,
        ph: 'Higher concentration → more H₂O₂ particles → more successful collisions → faster rate',
      },
    ],
  },

  // ─── Q3 (12 marks, Crit A/C) ─── Deodorants / atmosphere / diffusion ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atmosphere and particle theory — deodorants',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 12,
    stem: 'Deodorants are used daily throughout the world and many types of these release gases into the air.',
    artefact: {
      component: 'PieChart',
      data: {
        kind: 'pie',
        title: 'Composition of the atmosphere',
        unit: '%',
        series: [
          { name: 'Nitrogen', value: 78, color: '#1971c2' },
          { name: 'Oxygen', value: 20.9, color: '#c0392b' },
          { name: 'Argon', value: 0.9, color: '#f4d03f' },
          { name: 'Other gases', value: 0.17, color: '#2f9e44' },
          { name: 'Carbon dioxide', value: 0.03, color: '#9c36b5' },
        ],
      },
      caption: 'Approximate composition of dry air by volume. Hover a slice to read its percentage.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the diagram above to **state** the two most common gases in the atmosphere and their percentage. Gas 1: ___ Percentage: ___% Gas 2: ___ Percentage: ___%',
        marks: 2,
        ph: 'Nitrogen 78%, Oxygen 20.9%',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Most of the gases in the atmosphere are diatomic or polyatomic. Noble gases, however, are monatomic. **Select** the correct location for the draggable items to classify each molecule as Monatomic gas, Diatomic gas, or Polyatomic gas.',
        marks: 3,
        ph: 'Helium→Monatomic; Carbon dioxide→Polyatomic; Oxygen→Diatomic',
        widget: 'match_drag_drop',
        widgetItems: ['Helium', 'Carbon dioxide', 'Oxygen'],
        widgetOptions: ['Monatomic gas', 'Polyatomic gas', 'Diatomic gas'],
      },
      {
        label: 'c',
        text: '**State** a reason why noble gases are found naturally as a monatomic gas.',
        marks: 1,
        ph: 'Unreactive — full outer electron shell; do not bond with other atoms',
      },
      {
        label: 'd',
        text: 'Aerosol sprays, like deodorants, are filled with a compressed gas that mixes with the deodorant liquid and sprays the liquid out of the can onto your skin. In the past, the compressed gases used in aerosols were chlorofluorocarbons (CFCs), like Freon® (chemical name trichlorotrifluoroethane). The structure of Freon® is shown below. Use the periodic table to **calculate** the relative molecular mass of Freon®.',
        marks: 2,
        ph: '2(12) + 3(35.5) + 3(19) = 187.5',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="260" fill="#ffffff"/><text x="240" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Freon® — trichlorotrifluoroethane (C₂Cl₃F₃)</text><g stroke="#5b6b78" stroke-width="2.5"><line x1="180" y1="130" x2="300" y2="130"/><line x1="180" y1="130" x2="180" y2="74"/><line x1="180" y1="130" x2="124" y2="130"/><line x1="180" y1="130" x2="180" y2="186"/><line x1="300" y1="130" x2="300" y2="74"/><line x1="300" y1="130" x2="356" y2="130"/><line x1="300" y1="130" x2="300" y2="186"/></g><g font-size="18" font-weight="700" text-anchor="middle"><text x="180" y="136" fill="#1f2d3a">C</text><text x="300" y="136" fill="#1f2d3a">C</text><text x="180" y="68" fill="#0b7285">Cl</text><text x="112" y="136" fill="#0b7285">Cl</text><text x="180" y="206" fill="#e8590c">F</text><text x="300" y="68" fill="#0b7285">Cl</text><text x="368" y="136" fill="#e8590c">F</text><text x="300" y="206" fill="#e8590c">F</text></g><text x="240" y="244" font-size="11" text-anchor="middle" fill="#475569">2 carbon, 3 chlorine, 3 fluorine atoms.  Ar: C = 12, Cl = 35.5, F = 19.</text></svg>',
          },
          caption: 'Structural formula of Freon® (C₂Cl₃F₃): two carbon, three chlorine and three fluorine atoms.',
        },
      },
      {
        label: 'e',
        text: 'Deodorant sprays diffuse in the air, so that after some time the scent spreads further and will even fill small rooms. Using particle theory, **explain** why it takes longer for the scent to fill a room at 4°C compared to a room at 20°C.',
        marks: 3,
        ph: 'Higher temperature → particles have more kinetic energy → move faster → diffuse more quickly',
      },
      {
        label: 'f',
        text: 'CFCs cause gradual thinning of the ozone layer of the atmosphere and therefore contribute to climate change. Today, industries have replaced CFCs with other gases such as propane C₃H₈. **Draw** the structure of propane.',
        marks: 1,
        ph: '3 carbon chain, each C fully bonded to H atoms (C₃H₈ full structural formula)',
      },
    ],
  },

  // ─── Q4 (12 marks, Crit B/C) ─── Gallium melting point / brass alloys ───
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Melting points and alloys — gallium and brass',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 12,
    stem: 'State of matter is a physical characteristic which allows materials to be classified and grouped together. Melting point is a useful property which is an important characteristic of materials. Two students wanted to check the melting point of the metal gallium. One student used a thermometer and the other used a temperature probe. The samples of gallium are placed in boiling tubes which are placed in water baths as shown in the diagram below. As the temperature of the water increased, the students observed the change in state of the gallium.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="150" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Student A — thermometer</text><text x="450" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Student B — temperature probe</text><g><path d="M90,250 q-6,16 0,24 h120 q6,-8 0,-24 Z" fill="#cfe9f6" stroke="#3f7e98"/><rect x="86" y="206" width="128" height="48" rx="4" fill="#dff0fb" stroke="#3f7e98"/><rect x="120" y="150" width="22" height="100" rx="6" fill="#f4f6f8" stroke="#5b6b78"/><rect x="120" y="150" width="22" height="14" rx="6" fill="#c0392b"/><circle cx="131" cy="252" r="9" fill="#c0392b"/><rect x="132" y="120" width="3" height="36" fill="#5b6b78"/><circle cx="133.5" cy="118" r="6" fill="#f4f6f8" stroke="#5b6b78"/></g><g><circle cx="280" cy="150" r="56" fill="#fff" stroke="#5b6b78" stroke-width="1.5"/><rect x="232" y="118" width="96" height="64" fill="#fff"/><g stroke="#5b6b78" stroke-width="1"><line x1="262" y1="120" x2="278" y2="120"/><line x1="262" y1="150" x2="278" y2="150"/><line x1="262" y1="180" x2="278" y2="180"/></g><g font-size="11" fill="#1f2d3a"><text x="290" y="124">29</text><text x="290" y="154">28</text><text x="290" y="184">27</text></g><rect x="269" y="150" width="8" height="32" fill="#c0392b"/><line x1="248" y1="151" x2="300" y2="151" stroke="#c0392b" stroke-width="1" stroke-dasharray="2 2"/><text x="280" y="232" font-size="13" font-weight="700" text-anchor="middle" fill="#c0392b">reads 28.1 °C</text></g><g><path d="M390,250 q-6,16 0,24 h120 q6,-8 0,-24 Z" fill="#cfe9f6" stroke="#3f7e98"/><rect x="386" y="206" width="128" height="48" rx="4" fill="#dff0fb" stroke="#3f7e98"/><rect x="420" y="150" width="22" height="100" rx="6" fill="#f4f6f8" stroke="#5b6b78"/><line x1="431" y1="150" x2="431" y2="96" stroke="#2c3e50" stroke-width="2"/><rect x="470" y="86" width="60" height="36" rx="4" fill="#222"/><text x="500" y="109" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">°C</text><line x1="431" y1="96" x2="470" y2="100" stroke="#2c3e50" stroke-width="2"/></g></svg>',
      },
      caption: 'Gallium samples heated in water baths. Student A reads a thermometer; Student B logs with a temperature probe and data logger.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the temperature shown on the thermometer for Student A.',
        marks: 1,
        ph: '28.1°C',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Student B used a temperature probe and plotted the graph below. **Determine** the melting point of gallium from Student B\'s graph.',
        marks: 1,
        ph: '29.7°C',
        widget: 'fill_blank',
        artefact: {
          component: 'ThermalSim',
          data: {
            title: 'Student B — temperature of gallium vs time',
            mode: 'heat',
            substance: 'gallium',
            timeUnit: 'min',
            tempUnit: '°C',
            yMinC: 27,
            yMaxC: 33,
            yTicksC: [27, 28, 29, 30, 31, 32, 33],
            totalTime: 8,
            series: [
              [1, 28.0],
              [2, 29.0],
              [3, 29.5],
              [4, 29.7],
              [5, 29.7],
              [6, 29.7],
              [7, 30.0],
              [8, 32.0],
            ],
            plateaus: [{ atC: 29.7, label: 'melting', fromTime: 4, toTime: 6 }],
            markers: [{ time: 5, tempC: 29.7, state: 'melting point' }],
          },
          caption: 'Student B\'s temperature-probe data for gallium. The plateau marks the melting point.',
        },
      },
      {
        label: 'c',
        text: '**State** which student has measured the melting point correctly and justify your answer.',
        marks: 2,
        ph: 'Student B — measured temperature when all gallium had melted and temperature was steady',
      },
      {
        label: 'd',
        text: 'The table below shows the melting points of different brass alloys with varying percentages of zinc. **State** the trend in melting point as the percentage of zinc increases.',
        marks: 1,
        ph: 'Melting point decreases as percentage of zinc increases',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Type of brass', 'Percentage of Cu / %', 'Percentage of Zn / %', 'Melting point / °C', 'Density / g cm⁻³', 'Uses'],
            rows: [
              ['A', '95', '5', '1066', '8.86', 'Pre-1983 coins'],
              ['B', '88', '12', '1035', '8.78', 'Jewellery'],
              ['C', '85', '15', '1027', '8.75', 'Electrical sockets'],
              ['D', '70', '30', '954', '8.47', 'Radiators'],
            ],
          },
          caption: 'Composition, melting point, density and uses of four brass alloys.',
        },
      },
      {
        label: 'e',
        text: 'Using the data from the table above, **formulate** a hypothesis to predict how the density of a brass alloy changes as the percentage of zinc increases. Use the If/Then/Because format.',
        marks: 3,
        ph: 'If zinc % increases then density decreases because zinc has lower density than copper',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Type of brass', 'Percentage of Zn / %', 'Density / g cm⁻³'],
            rows: [
              ['A', '5', '8.86'],
              ['B', '12', '8.78'],
              ['C', '15', '8.75'],
              ['D', '30', '8.47'],
            ],
          },
          caption: 'Density of each brass alloy against its zinc content — use this to formulate your hypothesis.',
        },
      },
      {
        label: 'f',
        text: 'Using the graph below, **predict** the melting point of a brass alloy made of 80% copper and 20% zinc.',
        marks: 2,
        ph: '1000°C (±10)',
        widget: 'fill_blank',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Melting point of brass vs percentage of zinc',
            xLabel: 'Percentage of zinc',
            xUnit: '%',
            yLabel: 'Melting point',
            yUnit: '°C',
            xMin: 0,
            xMax: 35,
            yMin: 900,
            yMax: 1100,
            xStep: 5,
            yStep: 50,
            dataPoints: [
              { x: 5, y: 1066 },
              { x: 12, y: 1035 },
              { x: 15, y: 1027 },
              { x: 30, y: 954 },
            ],
            lobf: true,
          },
          caption: 'Melting point of brass against its zinc content. Read off the melting point at 20% zinc.',
        },
      },
      {
        label: 'g',
        text: '**Select** the type of brass most suitable for use in a space where temperatures can exceed 1050°C and justify your choice.',
        marks: 2,
        ph: 'Type A — melting point 1066°C which is above 1050°C so it will not melt',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Type of brass', 'Melting point / °C'],
            rows: [
              ['A', '1066'],
              ['B', '1035'],
              ['C', '1027'],
              ['D', '954'],
            ],
          },
          caption: 'Melting point of each brass alloy — choose one that will not melt above 1050 °C.',
        },
      },
    ],
  },

  // ─── Q5 (7 marks, Crit A/B) ─── Freezing point depression / soda ───
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Freezing point depression — carbonated drinks investigation',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 7,
    stem: 'A student placed salt water, sugar water, carbonated water, tap water and pure water into a freezer to investigate their freezing points.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Liquid tested', 'Solute added', 'Freezing point / °C'],
        rows: [
          ['Pure water', 'none', '0.0'],
          ['Tap water', 'trace minerals', '−0.2'],
          ['Carbonated water', 'carbon dioxide', '−0.5'],
          ['Sugar water', 'sugar', '−1.8'],
          ['Salt water', 'salt', '−5.9'],
        ],
      },
      caption: 'Freezing points the student recorded for the five liquids. Dissolved solutes lower the freezing point.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the gas that is added to drinks to make them carbonated.',
        marks: 1,
        ph: 'Carbon dioxide (CO₂)',
      },
      {
        label: 'b',
        text: '**State** the variables in the student\'s experiment. Independent variable: ___ Dependent variable: ___',
        marks: 2,
        ph: 'IV: type of solute; DV: freezing point / freezing temperature',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables for this experiment.',
        marks: 2,
        ph: 'Any two: volume/size of ice cube; amount/concentration of solute; temperature of freezer; starting temperature',
      },
      {
        label: 'd',
        text: '**Formulate** a research question for this experiment.',
        marks: 2,
        ph: 'How does the type of solute affect the freezing point/temperature of the solution?',
      },
    ],
  },

  // ─── Q6 (14 marks, Crit C) ─── Chocolate tempering / Form V data analysis ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis — chocolate tempering and Form V',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 14,
    stem: 'Chocolate is a mixture of cocoa, cocoa butter and other substances. The process of melting and cooling chocolate at specific temperatures, called tempering, allows the chocolate to form crystals. There are different forms of crystals possible, with Form V producing the best tasting chocolate. Two samples of chocolate, sample A and sample B, are heated in a water bath set to 70 °C and the temperature of each sample is recorded over time.',
    artefact: {
      component: 'ThermalSim',
      data: {
        title: 'Temperature of chocolate samples A and B over time',
        mode: 'heat',
        substance: 'chocolate',
        timeUnit: 's',
        tempUnit: '°C',
        yMinC: 20,
        yMaxC: 50,
        yTicksC: [20, 30, 40, 50],
        totalTime: 150,
        seriesLabel: 'Sample A',
        seriesBLabel: 'Sample B',
        series: [
          [0, 22], [15, 25], [30, 34], [45, 35], [60, 36], [75, 38], [90, 40], [105, 40], [120, 41], [135, 44], [150, 45],
        ],
        seriesB: [
          [0, 21], [15, 25], [30, 27], [45, 31], [60, 34], [75, 35], [90, 35], [105, 35], [120, 39], [135, 42], [150, 44],
        ],
        plateaus: [{ atC: 35, label: 'Form V melt', fromTime: 75, toTime: 105 }],
      },
      caption: 'Heating curves for chocolate sample A and sample B. Sample B shows a clear plateau at 35 °C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Plot** the data for Sample B on the graph provided. Your graph should include: missing data points, a title linking temperature change with time, and correct axis labels (time in s, temperature in °C).',
        marks: 5,
        ph: 'Plot all Sample B data points; title: Temperature of chocolate sample B vs time; x-axis: time (s); y-axis: temperature (°C)',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Time / s', 'Temperature / °C (Sample B)'],
            rows: [
              ['0', '21'], ['15', '25'], ['30', '27'], ['45', '31'], ['60', '34'], ['75', '35'],
              ['90', '35'], ['105', '35'], ['120', '39'], ['135', '42'], ['150', '44'],
            ],
          },
          caption: 'Chocolate sample B data to be plotted.',
        },
      },
      {
        label: 'b',
        text: '**Determine** which sample is Form V chocolate and justify your answer using the graph.',
        marks: 2,
        ph: 'Sample B — graph shows steady plateau at 35°C which is the melting/solidification temperature of Form V',
      },
      {
        label: 'c',
        text: 'A student tested several chocolate bars with different percentages of cocoa and recorded the results below. **Calculate** the average melting point of the three samples with 60% cocoa. Give your final value to three significant figures.',
        marks: 3,
        ph: '(37.0 + 36.0 + 37.0) / 3 = 36.7°C',
        widget: 'fill_blank',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Percentage of cocoa / %', 'Melting point / °C', '', '', 'Average melting point / °C'],
            rows: [
              ['30', '69.0', '68.0', '70.0', '69.0'],
              ['37', '50.0', '51.0', '51.0', '51.0'],
              ['60', '37.0', '36.0', '37.0', '?'],
              ['70', '32.4', '31.6', '32.0', '32.0'],
              ['85', '28.0', '27.7', '27.8', '27.8'],
            ],
          },
          caption: 'Melting points of chocolate bars at different cocoa percentages. Calculate the missing 60% average.',
        },
      },
      {
        label: 'd',
        text: '**Determine** the melting point at 50% cocoa from the graph below.',
        marks: 2,
        ph: '43°C (±0.5)',
        widget: 'fill_blank',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Average melting point of chocolate vs percentage of cocoa',
            xLabel: 'Percentage of cocoa',
            xUnit: '%',
            yLabel: 'Average melting point',
            yUnit: '°C',
            xMin: 20,
            xMax: 90,
            yMin: 20,
            yMax: 75,
            xStep: 10,
            yStep: 5,
            dataPoints: [
              { x: 30, y: 69.0 },
              { x: 37, y: 51.0 },
              { x: 60, y: 36.7 },
              { x: 70, y: 32.0 },
              { x: 85, y: 27.8 },
            ],
          },
          caption: 'Average melting point against cocoa percentage. Read off the value at 50% cocoa.',
        },
      },
      {
        label: 'e',
        text: '**Suggest** why the data point for 37% cocoa chocolate might be an outlier.',
        marks: 1,
        ph: 'Melting point not measured correctly; incorrect % cocoa used; water bath at wrong temperature',
      },
      {
        label: 'f',
        text: '**Suggest** how the experiment could be improved to better understand the trend.',
        marks: 1,
        ph: 'Investigate samples with intermediate percentages between 30% and 60% cocoa',
      },
    ],
  },

  // ─── Q7 (15 marks, Crit B) ─── Chocolate sugar investigation design ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation design — effect of sugar on chocolate melting point',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 15,
    stem: 'A student wants to investigate how the amount of sugar in chocolate affects its melting point. **Design** a complete investigation to test this. Your design should include: variables (independent, dependent, control), equipment, a clear method, sufficient data collection, and a safety precaution.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="240" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Suggested apparatus — melting point of chocolate</text><path d="M120,250 q-8,18 0,26 h160 q8,-8 0,-26 Z" fill="#cfe9f6" stroke="#3f7e98"/><rect x="112" y="150" width="180" height="104" rx="6" fill="#dff0fb" stroke="#3f7e98"/><text x="202" y="278" font-size="11" text-anchor="middle" fill="#2c5468">water bath (beaker of warm water)</text><g><rect x="186" y="120" width="34" height="120" rx="8" fill="#f7f9fa" stroke="#5b6b78"/><rect x="190" y="200" width="26" height="36" rx="4" fill="#7a4a21"/><text x="203" y="222" font-size="9" text-anchor="middle" fill="#fff">choc</text></g><text x="232" y="138" font-size="10" fill="#475569">boiling tube</text><line x1="203" y1="120" x2="203" y2="70" stroke="#2c3e50" stroke-width="2.5"/><rect x="150" y="40" width="64" height="34" rx="4" fill="#222"/><text x="182" y="62" font-size="12" fill="#3ad36a" text-anchor="middle" font-family="monospace">°C</text><line x1="203" y1="70" x2="214" y2="57" stroke="#2c3e50" stroke-width="2.5"/><text x="182" y="92" font-size="10" text-anchor="middle" fill="#475569">temperature probe</text><g stroke="#e8772e" stroke-width="2"><line x1="150" y1="246" x2="150" y2="236"/><line x1="255" y1="246" x2="255" y2="236"/></g><text x="202" y="298" font-size="10" text-anchor="middle" fill="#94a3ad">Vary the % sugar in the chocolate; record the temperature at which it melts.</text></svg>',
      },
      caption: 'Apparatus you could use: a chocolate sample in a boiling tube heated in a water bath, with a temperature probe.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a full investigation into how the amount of sugar in chocolate affects its melting point. Include: (1) identification of independent and dependent variables and at least two control variables; (2) equipment needed; (3) a clear step-by-step method; (4) a plan for sufficient data; (5) a safety precaution linked to a specific hazard.',
        marks: 15,
        ph: 'IV: % sugar in chocolate; DV: melting point (°C); CVs: cocoa %, mass of chocolate, water bath setup; Method: boiling tube in water bath, temperature probe, heat until all chocolate melts; Sufficient data: ≥3 trials for each chocolate, plan to calculate averages; Safety: hot water burns — use tongs',
      },
    ],
  },

  // ─── Q8 (12 marks, Crit D/A/C) ─── Lithium batteries / electric cars ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Lithium batteries — environmental evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'Lithium-ion batteries are used to power electric cars. Lithium is extracted by mining. The relative atomic mass of lithium is 6.94.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Lithium-ion battery (electric car)', 'Crude oil (petrol / diesel)'],
        rows: [
          ['Energy source', 'electricity (can be renewable)', 'finite fossil fuel'],
          ['Gases released in use', 'none at the car', 'CO₂, NOₓ, SO₂ from combustion'],
          ['Main extraction impact', 'lithium mining: water use, habitat loss', 'drilling and spills, refining emissions'],
          ['Waste / end of life', 'battery recycling needed', 'cannot be reused once burned'],
          ['Social impact', 'mining affects local communities and water', 'air pollution affects health near roads'],
        ],
      },
      caption: 'Comparison of lithium-ion battery cars and crude-oil fuels — use this to evaluate both options.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write** the symbol for a lithium ion.',
        marks: 1,
        ph: 'Li⁺',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A lithium-ion car battery has a mass of 12 kg and is made entirely of lithium. **Calculate** the number of moles of lithium in this battery.',
        marks: 2,
        ph: 'n = 12000 / 6.94 = 1729.1 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Evaluate** the environmental and social consequences of using lithium-ion batteries in electric cars compared to using crude oil (petrol/diesel) as a fuel. In your answer, consider advantages and disadvantages of both options and state your conclusion.',
        marks: 9,
        ph: 'Env: Li mining — habitat loss, water pollution vs crude oil — CO₂, SO₂, NOₓ emissions, spills; Social: Li mining — local communities, water scarcity vs petrol — health effects, economic dependency; Conclusion: both have impacts; Li batteries preferable for urban air quality but mining impacts must be managed',
      },
    ],
  },

  // ─── Q9 (12 marks, Crit D) ─── Circular vs linear economy ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Circular vs linear economy — resource use and sustainability',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 12,
    stem: 'The linear economy model follows a "take-make-dispose" approach: raw materials are extracted, manufactured into products, and then thrown away. The circular economy model aims to keep resources in use for as long as possible, recover and regenerate products at the end of their service life.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ae9" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker><marker id="ag9" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><text x="150" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Linear economy</text><g font-size="11" text-anchor="middle"><rect x="40" y="60" width="100" height="40" rx="6" fill="#f3f5f7" stroke="#5b6b78"/><text x="90" y="84" fill="#1f2d3a">Take</text><rect x="100" y="130" width="100" height="40" rx="6" fill="#f3f5f7" stroke="#5b6b78"/><text x="150" y="154" fill="#1f2d3a">Make</text><rect x="160" y="200" width="100" height="40" rx="6" fill="#fde8e8" stroke="#c0392b"/><text x="210" y="224" fill="#c0392b">Dispose</text></g><path d="M90,100 L150,130" stroke="#5b6b78" stroke-width="2" marker-end="url(#ae9)"/><path d="M150,170 L210,200" stroke="#5b6b78" stroke-width="2" marker-end="url(#ae9)"/><text x="90" y="270" font-size="10" fill="#94a3ad">raw materials become waste</text><text x="450" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#2f9e44">Circular economy</text><g font-size="10" text-anchor="middle" fill="#1f2d3a"><rect x="410" y="56" width="80" height="32" rx="6" fill="#f0fbf4" stroke="#2f9e44"/><text x="450" y="76">Make</text><rect x="520" y="140" width="80" height="32" rx="6" fill="#f0fbf4" stroke="#2f9e44"/><text x="560" y="160">Use</text><rect x="410" y="224" width="80" height="32" rx="6" fill="#f0fbf4" stroke="#2f9e44"/><text x="450" y="244">Recycle</text><rect x="300" y="140" width="80" height="32" rx="6" fill="#f0fbf4" stroke="#2f9e44"/><text x="340" y="160">Recover</text></g><path d="M490,72 Q560,90 560,140" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ag9)"/><path d="M560,172 Q540,224 490,240" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ag9)"/><path d="M410,240 Q340,224 340,172" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ag9)"/><path d="M340,140 Q380,90 410,72" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ag9)"/><text x="450" y="300" font-size="10" fill="#94a3ad">resources are kept in use and regenerated</text></svg>',
      },
      caption: 'The linear "take–make–dispose" model versus the closed-loop circular economy.',
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the circular economy model compared to the linear economy model. In your answer, consider economic aspects, use of resources, social impacts, and state a justified conclusion.',
        marks: 12,
        ph: 'Economic: circular reduces raw material costs but higher recycling investment; Resources: circular keeps materials in use longer, reduces waste; Social: circular creates new jobs in recycling, reduces pollution in communities; Conclusion: circular economy is more sustainable in the long term',
      },
    ],
  },
]
