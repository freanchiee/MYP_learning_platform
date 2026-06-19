import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2019',
  subject: 'Chemistry',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Modern Day Periodic Table / Mendeleev (Crit A, 6 marks) ────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table and Atomic Structure',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 6,
    stem: 'The modern day periodic table is arranged by atomic number. Dmitri Mendeleev\'s original periodic table (1869) arranged elements by atomic mass. Some elements present in the modern periodic table did not appear in Mendeleev\'s original table. Element 117 is now officially recognised by the International Union of Pure and Applied Chemistry (IUPAC) and is named tennessine, symbol Ts.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="270" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Selected elements of the modern periodic table</text><text x="320" y="40" font-size="10" text-anchor="middle" fill="#64748b">Each tile shows symbol and atomic number (number of protons)</text><g><rect x="40" y="60" width="74" height="58" fill="#eef4f7" stroke="#5b6b78"/><text x="77" y="90" font-size="22" font-weight="700" text-anchor="middle" fill="#0b7285">Fe</text><text x="77" y="110" font-size="11" text-anchor="middle" fill="#475569">26 · iron</text></g><g><rect x="150" y="60" width="74" height="58" fill="#f8f9fa" stroke="#5b6b78"/><text x="187" y="90" font-size="22" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pb</text><text x="187" y="110" font-size="11" text-anchor="middle" fill="#475569">82 · lead</text></g><g><rect x="260" y="60" width="74" height="58" fill="#fff7ed" stroke="#5b6b78"/><text x="297" y="90" font-size="22" font-weight="700" text-anchor="middle" fill="#e8590c">Hs</text><text x="297" y="110" font-size="11" text-anchor="middle" fill="#475569">108 · hassium</text></g><g><rect x="370" y="60" width="74" height="58" fill="#f3f0ff" stroke="#5b6b78"/><text x="407" y="90" font-size="22" font-weight="700" text-anchor="middle" fill="#7048e8">Ts</text><text x="407" y="110" font-size="11" text-anchor="middle" fill="#475569">117 · tennessine</text></g><g><rect x="480" y="60" width="74" height="58" fill="#ebfbee" stroke="#5b6b78"/><text x="517" y="90" font-size="22" font-weight="700" text-anchor="middle" fill="#2b8a3e">Ar</text><text x="517" y="110" font-size="11" text-anchor="middle" fill="#475569">18 · argon</text></g><line x1="40" y1="150" x2="600" y2="150" stroke="#dee2e6" stroke-width="1"/><text x="40" y="174" font-size="11" fill="#475569">• Modern table is ordered by atomic number (protons), not atomic mass.</text><text x="40" y="194" font-size="11" fill="#475569">• Noble gases (e.g. Ar) and the heaviest synthetic elements (Ts, Hs) were unknown to Mendeleev in 1869.</text><text x="40" y="214" font-size="11" fill="#475569">• Nuclear fusion: ²⁰⁸Pb (82 p) + X → ²⁶⁶Hs (108 p), so X has 108 − 82 = 26 protons.</text><text x="40" y="234" font-size="11" fill="#475569">• 26 protons identifies X as iron (Fe); neutrons in X = mass − protons.</text></svg>',
      },
      caption: 'Reference tiles for the elements named in this question. Use the atomic numbers to balance the fusion equation in part (c).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the symbol of one element present in the modern periodic table but not in Mendeleev\'s original version.',
        marks: 1,
        ph: 'Any noble gas (e.g. He, Ne, Ar), any synthetic super-heavy element (e.g. Ts, Hs), or Sc/Ga/Ge',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why a group of transition elements present in the modern periodic table is missing from Mendeleev\'s table.',
        marks: 2,
        ph: 'e.g. lanthanides/actinides — rare or not found in compounds',
      },
      {
        label: 'c',
        text: 'Element hassium, atomic number 108, is made in a laboratory. Hassium was created by the nuclear fusion of ²⁰⁸Pb and atoms of a lighter element. The isotope of hassium produced has a mass number 266: ²⁰⁸Pb + X → ²⁶⁶Hs. **Calculate** the number of protons and neutrons in element X.',
        marks: 2,
        ph: '26 protons, 32 neutrons',
      },
      {
        label: 'd',
        text: '**State** the name of element X from part (c).',
        marks: 1,
        ph: 'Iron / Fe',
      },
    ],
  },

  // ─── Q2 — London Fog 1952 / Air Pollution / VOCs (Crit A, 12 marks) ──────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Air Pollution, Organic Compounds and Molar Mass',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'On December 8, 1952, a British newspaper reported on a thick fog over London. When the fog lifted, at least 4000 people had died from lung diseases. The pollutants were made by burning coal. When the coal was burned, the following pollutants were formed: sulfur dioxide (SO₂) and nitrogen dioxide (NO₂).\n\nToday, most air pollution in cities is photochemical smog. Photochemical smog contains many different pollutants including volatile organic compounds (VOCs). Ball-and-stick models of four VOCs are shown in part (f): the black spheres represent C atoms, the white spheres represent H atoms and the red spheres represent O atoms.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Pollutant from burning coal', 'Formula', 'Acid formed in moist air', 'Effect'],
        rows: [
          ['Sulfur dioxide', 'SO₂', 'sulfurous / sulfuric acid (H₂SO₄)', 'acid rain, lung damage'],
          ['Nitrogen dioxide', 'NO₂', 'nitric acid (HNO₃)', 'acid rain, smog'],
        ],
      },
      caption: 'The 1952 London fog pollutants. Both dissolve to form acids — which is why universal indicator paper turned red (acidic) when the fog was tested.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct Lewis structure (dot cross diagram) for a water molecule.',
        marks: 1,
        ph: 'Structure B: O shares one bonding pair with each H and keeps two lone pairs',
        widget: 'radio_select',
        widgetOptions: ['Structure A', 'Structure B', 'Structure C'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="180" fill="#ffffff"/><text x="270" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Three proposed dot-and-cross diagrams for water, H₂O</text><g font-size="26" fill="#1f2d3a" font-weight="600"><g><text x="60" y="100">H</text><text x="92" y="92" font-size="14" fill="#0b7285">× ×</text><text x="98" y="105">O</text><text x="92" y="120" font-size="14" fill="#0b7285">× ×</text><text x="132" y="100">H</text><text x="100" y="150" font-size="13" font-weight="700" fill="#64748b" text-anchor="middle">A — four lone pairs, no shared pairs</text></g><g><text x="240" y="100">H</text><text x="270" y="92" font-size="14" fill="#0b7285">× ×</text><text x="276" y="105">O</text><text x="270" y="120" font-size="14" fill="#0b7285">× ×</text><text x="312" y="100">H</text><circle cx="262" cy="100" r="2.4" fill="#e8590c"/><circle cx="308" cy="100" r="2.4" fill="#e8590c"/><text x="282" y="150" font-size="13" font-weight="700" fill="#2b8a3e" text-anchor="middle">B — two bonding pairs + two lone pairs</text></g><g><text x="430" y="100">H</text><text x="465" y="100">O</text><text x="500" y="100">H</text><line x1="452" y1="93" x2="465" y2="93" stroke="#1f2d3a" stroke-width="2"/><line x1="483" y1="93" x2="496" y2="93" stroke="#1f2d3a" stroke-width="2"/><text x="468" y="150" font-size="13" font-weight="700" fill="#64748b" text-anchor="middle">C — single lines, no lone pairs</text></g></g></svg>',
          },
          caption: 'Dot = electron from H, cross = electron from O. A correct Lewis structure of water shares one pair between O and each H and leaves two lone pairs on O.',
        },
      },
      {
        label: 'b',
        text: 'When NO₂ reacts with water in the presence of oxygen, nitric acid HNO₃ is produced. **Select** numbers to balance the chemical equation for NO₂ and HNO₃. Make sure you select an option for each box:\n[blank] NO₂(g) + O₂(g) + [blank] H₂O(l) → [blank] HNO₃(aq)',
        marks: 2,
        ph: '4 NO₂ + O₂ + 2 H₂O → 4 HNO₃',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'c',
        text: 'When the fog was tested with universal indicator paper, it turned red. **State** what this information can tell you about the chemical properties of the fog.',
        marks: 1,
        ph: 'Fog is acidic / contains acid / low pH',
      },
      {
        label: 'd',
        text: '**State** the group and period of sulfur.',
        marks: 2,
        ph: 'Group 6, Period 3',
      },
      {
        label: 'e',
        text: '**Calculate** the mass of one mole of sulfuric acid, H₂SO₄.',
        marks: 2,
        ph: '98 g/mol',
      },
      {
        label: 'f',
        text: '**Select** the class and name of each VOC compound shown. The four compounds shown are ball-and-stick models of volatile organic compounds.',
        marks: 4,
        ph: 'Ester/Ethyl ethanoate; Alkane/Pentane; Alcohol/Propan-1-ol; Carboxylic acid/Pentanoic acid',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Ball-and-stick models of four volatile organic compounds</text><text x="280" y="36" font-size="10" text-anchor="middle" fill="#64748b">black = carbon · white = hydrogen · red = oxygen</text><g stroke="#94a3ad" stroke-width="5" stroke-linecap="round"><g><line x1="40" y1="80" x2="70" y2="80"/><line x1="70" y1="80" x2="100" y2="80"/><line x1="100" y1="80" x2="118" y2="62"/><line x1="100" y1="80" x2="118" y2="98"/><circle cx="40" cy="80" r="11" fill="#2b2b2b" stroke="none"/><circle cx="70" cy="80" r="11" fill="#2b2b2b" stroke="none"/><circle cx="100" cy="80" r="9" fill="#e03131" stroke="none"/><circle cx="118" cy="62" r="9" fill="#e03131" stroke="none"/><circle cx="118" cy="98" r="11" fill="#2b2b2b" stroke="none"/><circle cx="148" cy="98" r="11" fill="#2b2b2b" stroke="none"/></g><text x="100" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">Compound 1: contains –COO– link</text><g><line x1="320" y1="80" x2="350" y2="80"/><line x1="350" y1="80" x2="380" y2="80"/><line x1="380" y1="80" x2="410" y2="80"/><line x1="410" y1="80" x2="440" y2="80"/><line x1="440" y1="80" x2="470" y2="80"/><circle cx="320" cy="80" r="11" fill="#2b2b2b" stroke="none"/><circle cx="350" cy="80" r="11" fill="#2b2b2b" stroke="none"/><circle cx="380" cy="80" r="11" fill="#2b2b2b" stroke="none"/><circle cx="410" cy="80" r="11" fill="#2b2b2b" stroke="none"/><circle cx="440" cy="80" r="11" fill="#2b2b2b" stroke="none"/></g><text x="395" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">Compound 2: 5 C, only C and H</text><g><line x1="40" y1="220" x2="70" y2="220"/><line x1="70" y1="220" x2="100" y2="220"/><line x1="100" y1="220" x2="130" y2="220"/><line x1="130" y1="220" x2="150" y2="204"/><circle cx="40" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="70" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="100" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="130" cy="220" r="9" fill="#e03131" stroke="none"/><circle cx="150" cy="204" r="6" fill="#f1f3f5" stroke="#adb5bd" stroke-width="1"/></g><text x="100" y="270" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">Compound 3: 3 C, ends in –OH</text><g><line x1="320" y1="220" x2="350" y2="220"/><line x1="350" y1="220" x2="380" y2="220"/><line x1="380" y1="220" x2="410" y2="220"/><line x1="410" y1="220" x2="440" y2="220"/><line x1="440" y1="220" x2="460" y2="204"/><line x1="440" y1="220" x2="460" y2="236"/><circle cx="320" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="350" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="380" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="410" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="440" cy="220" r="11" fill="#2b2b2b" stroke="none"/><circle cx="460" cy="204" r="9" fill="#e03131" stroke="none"/><circle cx="460" cy="236" r="9" fill="#e03131" stroke="none"/></g><text x="395" y="270" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a" stroke="none">Compound 4: 5 C, ends in –COOH</text></g></svg>',
          },
          caption: 'Four VOCs: Compound 1 has the ester (–COO–) link, Compound 2 is all C–H (alkane), Compound 3 ends in –OH (alcohol), Compound 4 ends in –COOH (carboxylic acid). Identify the class and name of each.',
        },
      },
    ],
  },

  // ─── Q3 — Cooking Pans / Metals / Teflon (Crit A, 9 marks) ──────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Metals, Bonding and Teflon Coatings',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 9,
    stem: 'One everyday task that people undertake is cooking food. A variety of materials are used to make cooking pans including different metals and heat-resistant glass. The main metals used for making cooking pans are copper, iron and aluminium.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Metal used for pans', 'Ion formed', 'Thermal conductivity', 'Note'],
        rows: [
          ['Copper (Cu)', 'Cu²⁺', 'very high', 'Cu²⁺ ions linked to liver damage'],
          ['Iron (Fe)', 'Fe²⁺ / Fe³⁺', 'high', 'iron ions can reduce anaemia'],
          ['Aluminium (Al)', 'Al³⁺', 'high', 'Al³⁺ ions linked to Alzheimer\'s'],
        ],
      },
      caption: 'The three main pan metals: all are good thermal conductors (a useful property), and all can lose electrons to form positive ions during cooking.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two physical properties of metals that make them suitable to make cooking pans.',
        marks: 2,
        ph: 'e.g. good thermal/heat conductivity; high melting point; malleable; rigid/solid',
      },
      {
        label: 'b',
        text: 'During cooking, a chemical reaction takes place in which metals are converted into metal ions. These metal ions mix with the food being cooked and it has been suggested that these could have an impact on health. Copper ions have been linked with liver damage and aluminium ions have been linked to Alzheimer\'s disease. In rural Africa, iron ions in cooked food have been known to reduce anaemia in children. **Determine** the charge on an aluminium ion and **justify** if the aluminium has been reduced or oxidised.',
        marks: 3,
        ph: 'Al³⁺; oxidised (loses electrons, oxidation state increases from 0 to +3)',
      },
      {
        label: 'c',
        text: 'Some cooking pans have protective layers added to reduce the production of ions. An example of a protective layer used on a cooking pan is Teflon™, an unreactive plastic. **State** the type of bonding in the Teflon™ coated cooking pan and in the metal cooking pan in the diagram above. Use the diagram to **discuss** the advantages of Teflon™ coated cooking pans compared with metal cooking pans.',
        marks: 4,
        ph: 'Covalent (Teflon); metallic (pan); Teflon forms coating, metals produce soluble ions, Teflon insoluble, prevents health issues',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="145" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Teflon™-coated pan</text><text x="415" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Uncoated metal pan</text><g><rect x="30" y="40" width="230" height="26" rx="4" fill="#d0ebff" stroke="#1c7ed6"/><text x="145" y="57" font-size="11" font-weight="700" text-anchor="middle" fill="#1864ab">Teflon™ coating (food side)</text><rect x="30" y="66" width="230" height="150" fill="#f1f3f5" stroke="#868e96"/><text x="145" y="84" font-size="10" text-anchor="middle" fill="#495057">covalently bonded plastic — a fixed network</text><g stroke="#1864ab" stroke-width="2"><line x1="60" y1="110" x2="100" y2="110"/><line x1="100" y1="110" x2="140" y2="110"/><line x1="140" y1="110" x2="180" y2="110"/><line x1="180" y1="110" x2="220" y2="110"/><line x1="80" y1="150" x2="120" y2="150"/><line x1="120" y1="150" x2="160" y2="150"/><line x1="160" y1="150" x2="200" y2="150"/></g><g fill="#1c7ed6"><circle cx="60" cy="110" r="6"/><circle cx="100" cy="110" r="6"/><circle cx="140" cy="110" r="6"/><circle cx="180" cy="110" r="6"/><circle cx="220" cy="110" r="6"/><circle cx="80" cy="150" r="6"/><circle cx="120" cy="150" r="6"/><circle cx="160" cy="150" r="6"/><circle cx="200" cy="150" r="6"/></g><text x="145" y="200" font-size="10" text-anchor="middle" fill="#495057">no free electrons · no ions released into food</text></g><g><rect x="300" y="40" width="230" height="26" rx="4" fill="#ffe3e3" stroke="#e03131"/><text x="415" y="57" font-size="11" font-weight="700" text-anchor="middle" fill="#c92a2a">metal surface (food side)</text><rect x="300" y="66" width="230" height="150" fill="#f8f9fa" stroke="#868e96"/><text x="415" y="84" font-size="10" text-anchor="middle" fill="#495057">metallic bonding — lattice of cations + sea of e⁻</text><g fill="#adb5bd" stroke="#868e96"><circle cx="330" cy="115" r="9"/><circle cx="370" cy="115" r="9"/><circle cx="410" cy="115" r="9"/><circle cx="450" cy="115" r="9"/><circle cx="490" cy="115" r="9"/><circle cx="350" cy="155" r="9"/><circle cx="390" cy="155" r="9"/><circle cx="430" cy="155" r="9"/><circle cx="470" cy="155" r="9"/></g><g font-size="10" font-weight="700" fill="#1971c2"><text x="350" y="119">e⁻</text><text x="430" y="119">e⁻</text><text x="370" y="159">e⁻</text><text x="450" y="159">e⁻</text><text x="410" y="140">e⁻</text></g><text x="415" y="200" font-size="10" text-anchor="middle" fill="#c92a2a">delocalised e⁻ allow metal to form soluble ions in food</text></g><text x="280" y="245" font-size="11" text-anchor="middle" fill="#475569">Teflon = covalent (insoluble coating)  ·  pan = metallic (releases ions)</text></svg>',
          },
          caption: 'Left: Teflon™ is a covalently bonded plastic with no free electrons, so it forms an insoluble coating. Right: the metal pan has metallic bonding with delocalised electrons (e⁻), so it can release soluble ions into food.',
        },
      },
    ],
  },

  // ─── Q4 — Tea Bag Diffusion Experiment (Crit B+C, 9 marks) ───────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion and Scientific Method',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'A student has noticed that when making a cup of tea by placing a tea bag in boiling water, the colour of the water changes. This is due to the diffusion of tea from the tea bag. The student wanted to know whether there is a relationship between the temperature of the water and the time for the diffusion to be complete.\n\nThe variables for this experiment are:\n- Independent variable: Temperature\n- Dependent variable: Time taken for diffusion to be complete\n- Control variable 1: Type of tea\n- Control variable 2: Same type of glass or cup',
    artefact: {
      component: 'ParticleSim',
      data: {
        mode: 'diffusion',
        title: 'Diffusion of tea colour from a tea bag through water',
        substance: 'tea particles in water',
        particleCount: 44,
        note: 'Higher temperature gives the particles more kinetic energy, so they spread (diffuse) through the water more quickly.',
      },
      caption: 'Coloured tea particles spread out from the tea bag and mix through the water by diffusion. Press play to watch them spread.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** another control variable for this investigation.',
        marks: 1,
        ph: 'e.g. volume of water / mass of tea bag / brand of tea',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\nIf the temperature of the water increases then the time taken for diffusion to be complete [blank] because:',
        marks: 3,
        ph: 'decreases; kinetic energy increases so particles mix more quickly',
        widget: 'fill_blank',
        widgetOptions: ['decreases', 'increases', 'stays the same'],
      },
      {
        label: 'c',
        text: 'The student carried out one trial and collected data to test his hypothesis. He presented this data in a graph. **Use** the graph to **predict** how long it would take for diffusion to be complete at a temperature of 50°C.',
        marks: 2,
        ph: '400 ± 10 seconds (s)',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Diffusion time vs water temperature (one trial)',
            xLabel: 'Temperature',
            yLabel: 'Time for diffusion to be complete',
            xUnit: '°C',
            yUnit: 's',
            xMin: 0,
            xMax: 120,
            yMin: 0,
            yMax: 700,
            xStep: 20,
            yStep: 100,
            dataPoints: [
              { x: 20, y: 600 },
              { x: 30, y: 530 },
              { x: 40, y: 470 },
              { x: 50, y: 400 },
              { x: 60, y: 340 },
              { x: 70, y: 270 },
              { x: 80, y: 210 },
              { x: 90, y: 140 },
            ],
          },
          caption: 'The student\'s single-trial data, plotted as a straight line. Read the time at 50 °C straight off the graph.',
        },
      },
      {
        label: 'd',
        text: 'After further research, the student determined that the relationship in the graph should have been non-linear. **Outline** how the method could be improved to confirm that the relationship is non-linear.',
        marks: 3,
        ph: 'record data at intermediate temperatures; more than one trial; calculate average',
      },
    ],
  },

  // ─── Q5 — Soap Bubble Lifespan (Crit B+C, 19 marks) ─────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Soap Bubbles, Rate and Data Analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 19,
    stem: 'Children enjoy blowing bubbles. The bubbles do not last a long time and burst easily if they come into contact with another object or if they are made with too much force. Bubbles used in play are made from a mixture of liquid soap and water in a fixed ratio. The basic structure of the bubble consists of two layers of soap film with a layer of water inside. The exact ratio of water to soap will determine its lifespan.\n\nA student has decided to explore the ratio of water to soap to determine the mixture that will produce the bubbles with longest lifespan. The student has liquid soap, distilled water and various pieces of laboratory equipment. A volume of 10 cm³ of each solution was produced in the following dilutions.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Bubble mixture', 'Volume of soap / cm³', 'Volume of water / cm³', 'Total volume / cm³'],
        rows: [
          ['1', '1.0', '9.0', '10.0'],
          ['2', '2.0', '8.0', '10.0'],
          ['3', '3.0', '7.0', '10.0'],
          ['4', '4.0', '6.0', '10.0'],
          ['5', '5.0', '5.0', '10.0'],
          ['6', '6.0', '4.0', '10.0'],
          ['7', '7.0', '3.0', '10.0'],
        ],
      },
      caption: 'Seven dilutions of soap and water, each made up to a total volume of 10.0 cm³. The bubble film is two layers of soap with water inside.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the most appropriate piece of equipment for accurately measuring the volume of each liquid.',
        marks: 1,
        ph: '1 cm³ pipette',
        widget: 'radio_select',
        widgetOptions: ['Beaker', '100 cm³ measuring cylinder', 'Ruler', '1 cm³ pipette'],
      },
      {
        label: 'b',
        text: 'Bubbles were produced by dipping a straw into the bubble solution and blowing a bubble. The time of the bubble\'s lifespan for each solution is recorded in the table below. For bubble mixture 2, **calculate** the mean lifespan to 1 decimal place. Show your working in the box below and add your final value to the table.',
        marks: 2,
        ph: '(11.4 + 10.1 + 10.5) / 3 = 10.7 s',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Bubble mixture', 'Trial 1 / s', 'Trial 2 / s', 'Trial 3 / s', 'Mean lifespan / s'],
            rows: [
              ['1', '7.2', '6.6', '6.2', '6.7'],
              ['2', '11.4', '10.1', '10.5', '?'],
              ['3', '13.7', '14.1', '12.3', '13.4'],
              ['4', '5.3', '5.9', '5.1', '5.4'],
              ['5', '4.0', '4.2', '3.8', '4.0'],
              ['6', '3.2', '2.9', '2.9', '3.0'],
              ['7', '2.9', '2.8', '3.3', '3.0'],
            ],
          },
          caption: 'Bubble lifespan trial data. Calculate the mean for mixture 2 (the missing value) to 1 decimal place.',
        },
      },
      {
        label: 'c',
        text: '**Present** the bubble lifespan data in a graph. You should give your graph an appropriate title, add the scale and label the axes.',
        marks: 6,
        ph: 'Bar chart: bubble mixture (x-axis), mean lifespan/s (y-axis); title; correct scale; all points plotted',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Bubble mixture', 'Mean lifespan / s'],
            rows: [
              ['1', '6.7'],
              ['2', '10.7'],
              ['3', '13.4'],
              ['4', '5.4'],
              ['5', '4.0'],
              ['6', '3.0'],
              ['7', '3.0'],
            ],
          },
          caption: 'The mean lifespan for each bubble mixture. Plot bubble mixture on the x-axis and mean lifespan / s on the y-axis.',
        },
      },
      {
        label: 'd',
        text: '**Identify** the independent and dependent variables for the following research question: "The lifespan of a bubble will increase if an additive is added to the soap solution because there is increased bonding between the additive and the soap solution."',
        marks: 2,
        ph: 'IV: volume of glycerine; DV: lifespan of bubble',
        widget: 'inline_dropdown_select',
        widgetItems: ['Independent variable', 'Dependent variable'],
        widgetOptions: ['Colour of bubble', 'Lifespan of bubble', 'Type of additive', 'Volume of bubble solution', 'Volume of glycerine'],
      },
      {
        label: 'e',
        text: 'Two students examined the lifespan of bubbles made using a mixture of soap solution and different volumes of glycerine additive. One student produced bubbles using a straw and blew them onto the laboratory bench while the other student blew bubbles using a bubble wand. Their results are shown in the image above. **Suggest** which of the two methods for producing bubbles shown in the image above will produce the most reliable data. **Justify** your answer.',
        marks: 3,
        ph: 'Straw/method 1 more reliable; wand bubbles different sizes/affected by gravity/not reproducible',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="250" fill="#ffffff"/><text x="145" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Method 1: straw onto a bench</text><text x="415" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Method 2: bubble wand in the air</text><g><rect x="20" y="170" width="250" height="14" fill="#dee2e6"/><text x="145" y="200" font-size="11" text-anchor="middle" fill="#495057">flat bench — bubble rests on a surface</text><circle cx="120" cy="150" r="26" fill="#e7f5ff" stroke="#74c0fc"/><line x1="146" y1="160" x2="180" y2="178" stroke="#868e96" stroke-width="4" stroke-linecap="round"/><text x="190" y="178" font-size="10" fill="#495057">straw</text><text x="120" y="120" font-size="10" text-anchor="middle" fill="#1971c2">same size each time</text><text x="145" y="225" font-size="11" font-weight="700" text-anchor="middle" fill="#2b8a3e">reproducible · supported · controlled size</text></g><g><circle cx="380" cy="90" r="14" fill="#fff0f6" stroke="#f783ac"/><circle cx="430" cy="120" r="22" fill="#fff0f6" stroke="#f783ac"/><circle cx="470" cy="70" r="9" fill="#fff0f6" stroke="#f783ac"/><circle cx="410" cy="170" r="30" fill="#fff0f6" stroke="#f783ac"/><ellipse cx="340" cy="175" rx="16" ry="26" fill="#ffe3e3" stroke="#fa5252"/><text x="340" y="215" font-size="10" text-anchor="middle" fill="#495057">wand</text><text x="430" y="40" font-size="10" text-anchor="middle" fill="#c2255c">many different sizes</text><text x="415" y="230" font-size="11" font-weight="700" text-anchor="middle" fill="#c92a2a">varied sizes · falling · affected by gravity</text></g></svg>',
          },
          caption: 'Method 1 makes one bubble at a time on a bench (consistent size, supported). Method 2 makes many bubbles of different sizes in the air, where gravity thins and bursts them unpredictably.',
        },
      },
      {
        label: 'f',
        text: 'A student recorded lifespan values for bubbles with lemon juice or sugar added to the mixture. Their results are shown in the image. **Calculate** the mean lifespan for the bubble with lemon juice added.',
        marks: 3,
        ph: '(70 + 77 + 75) / 3 = 74 s (accept 1 min 14 s)',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Additive', 'Trial 1 / s', 'Trial 2 / s', 'Trial 3 / s'],
            rows: [
              ['Lemon juice', '70 (1 min 10 s)', '77', '75 (1¼ min)'],
              ['Sugar', '25', '20', '24'],
              ['Pure bubble solution (no additive)', '21', '21', '23'],
            ],
          },
          caption: 'Bubble lifespans with lemon juice or sugar added, compared with the pure (no-additive) solution. Calculate the mean lifespan for the lemon-juice bubble.',
        },
      },
      {
        label: 'g',
        text: 'The hypothesis for this experiment was: "The lifespan of a bubble will increase if an additive is added to the soap solution because there is increased bonding between the additive and the soap solution." Use the data in part (f) to **comment** on the validity of the hypothesis.',
        marks: 2,
        ph: 'Not valid; two additives show different trends; sugar decreases lifespan',
      },
    ],
  },

  // ─── Q6 — Bubble Investigation Design + Graph Selection (Crit B+C, 18 marks)
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 18,
    stem: 'Bubbles can burst when the soap film is pulled towards the ground by gravity. The soap film gets thinner and eventually pulls apart. A dry finger will also cause a bubble to burst as it breaks the bonding in the bubble. Water evaporating from the bubble is another cause of bubbles bursting.\n\nYou have seen that the lifespan of a bubble will change if additives are added to the bubble mixture.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Additive to test', 'Type', 'Why it might help'],
        rows: [
          ['Corn syrup', 'sugar syrup', 'thickens film, slows water evaporation'],
          ['Glycerine', 'thick alcohol', 'holds water, strengthens film'],
          ['Sugar', 'dissolved solid', 'increases bonding in the film'],
          ['Lemon juice', 'weak acid', 'changes surface tension'],
        ],
      },
      caption: 'The four additives to compare in your investigation. Design a fair test to find which gives the bubble the longest lifespan.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a method to investigate whether corn syrup, glycerine, sugar or lemon juice produce the bubbles with the longest lifespan. In your answer you should include:\n- the independent, dependent and control variables\n- a list of equipment you will use\n- details of the measurements you will take to collect sufficient data',
        marks: 17,
        ph: 'Variables (IV: additive type/volume; DV: lifespan; CVs); equipment (straw, beakers, pipette, stopwatch); method (add each additive, blow bubble, time until burst, repeat 3+ times); sufficient data',
      },
      {
        label: 'b',
        text: 'The student found that the best additive for increasing the lifespan of a bubble was glycerine. **Select** the correct graph to present the data for drops of glycerine added versus lifespan.',
        marks: 1,
        ph: 'Graph C (bar chart for discrete data)',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="360" fill="#ffffff"/><text x="280" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Glycerine added to bubble mixture 1</text><text x="280" y="34" font-size="10" text-anchor="middle" fill="#64748b">Drops: 1→6.4 s · 2→7.3 s · 3→8.7 s · 4→10.2 s · 5→15.5 s   (drops = discrete whole numbers)</text><g><text x="145" y="58" font-size="12" font-weight="700" text-anchor="middle" fill="#1971c2">Graph A — line/scatter</text><rect x="50" y="66" width="190" height="110" fill="#f8f9fa" stroke="#ced4da"/><line x1="70" y1="160" x2="70" y2="76" stroke="#495057"/><line x1="70" y1="160" x2="225" y2="160" stroke="#495057"/><polyline points="90,150 120,142 150,130 180,116 210,84" fill="none" stroke="#1971c2" stroke-width="2"/><circle cx="90" cy="150" r="3" fill="#1971c2"/><circle cx="120" cy="142" r="3" fill="#1971c2"/><circle cx="150" cy="130" r="3" fill="#1971c2"/><circle cx="180" cy="116" r="3" fill="#1971c2"/><circle cx="210" cy="84" r="3" fill="#1971c2"/></g><g><text x="415" y="58" font-size="12" font-weight="700" text-anchor="middle" fill="#e8590c">Graph B — pie chart</text><circle cx="415" cy="120" r="48" fill="#ffe8cc" stroke="#e8590c"/><path d="M415,120 L415,72 A48,48 0 0,1 456,98 Z" fill="#ffd8a8"/><path d="M415,120 L456,98 A48,48 0 0,1 444,158 Z" fill="#ffc078"/><path d="M415,120 L444,158 A48,48 0 0,1 380,160 Z" fill="#ffa94d"/></g><g><text x="145" y="218" font-size="12" font-weight="700" text-anchor="middle" fill="#2b8a3e">Graph C — bar chart</text><rect x="50" y="226" width="190" height="110" fill="#f8f9fa" stroke="#ced4da"/><line x1="70" y1="320" x2="70" y2="236" stroke="#495057"/><line x1="70" y1="320" x2="225" y2="320" stroke="#495057"/><rect x="86" y="296" width="20" height="24" fill="#2b8a3e"/><rect x="116" y="290" width="20" height="30" fill="#2b8a3e"/><rect x="146" y="280" width="20" height="40" fill="#2b8a3e"/><rect x="176" y="268" width="20" height="52" fill="#2b8a3e"/><rect x="206" y="244" width="20" height="76" fill="#2b8a3e"/></g><g><text x="415" y="218" font-size="12" font-weight="700" text-anchor="middle" fill="#7048e8">Graph D — smooth S-curve</text><rect x="320" y="226" width="190" height="110" fill="#f8f9fa" stroke="#ced4da"/><line x1="340" y1="320" x2="340" y2="236" stroke="#495057"/><line x1="340" y1="320" x2="495" y2="320" stroke="#495057"/><path d="M350,312 C390,312 400,250 440,250 C470,250 480,242 485,242" fill="none" stroke="#7048e8" stroke-width="2"/></g></svg>',
          },
          caption: 'Four ways to present the glycerine results. Drops of glycerine are discrete (whole-number) categories, so the best presentation is the bar chart.',
        },
      },
    ],
  },

  // ─── Q7 — Green Chemistry / Plastics + Glass Bottles (Crit D, 10 marks) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Green Chemistry Principles and Life Cycle Assessment',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 10,
    stem: 'In 1998, some scientists proposed a framework called green chemistry. Green chemistry promotes products, processes and systems which focus on sustainability and a safe environment. There are 12 principles of green chemistry. This task will reflect on four of these principles: constant monitoring of processes for hazardous chemicals, prevention of waste, energy efficiency and use of renewable raw materials.\n\nIn 2006, the State of California in the United States approved two laws aiming to encourage green chemistry. Many European governments have also introduced legislation for chemical manufacturers to ensure that their products and processes are safe.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Green chemistry principle (of 4 used here)', 'What it means'],
        rows: [
          ['Constant monitoring for hazardous chemicals', 'check processes so pollution is prevented at source'],
          ['Prevention of waste', 'design out waste rather than clean it up later'],
          ['Energy efficiency', 'use less energy / use by-products as fuel'],
          ['Use of renewable raw materials', 'reuse and recycle materials instead of new resources'],
        ],
      },
      caption: 'The four green chemistry principles this task focuses on. Use them to discuss generating energy from plastics.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** why using plastics to generate energy fits with the green chemistry principles of constant monitoring of processes for pollution prevention and prevention of waste. In your answer, you should consider:\n- the impact on landfills\n- the effects of pollution\n- the use of by-products\n- reuse of raw materials',
        marks: 8,
        ph: 'Impact on landfills (reduction); pollution control; by-products used for energy; raw material reuse; compare advantages/disadvantages',
      },
      {
        label: 'b',
        text: 'The diagram shows the life cycle assessment of a glass bottle. **Use** the image above to **suggest** two reasons why companies are now reusing glass bottles.',
        marks: 2,
        ph: 'e.g. can be reused directly; fewer chemicals released; less material processed; economic benefits',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="380" fill="#ffffff"/><text x="230" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Life cycle assessment of a glass bottle</text><circle cx="230" cy="200" r="60" fill="#e6fcf5" stroke="#0ca678"/><text x="230" y="196" font-size="11" font-weight="700" text-anchor="middle" fill="#087f5b">glass</text><text x="230" y="212" font-size="11" font-weight="700" text-anchor="middle" fill="#087f5b">bottle</text><g font-size="11" font-weight="700" fill="#1f2d3a" text-anchor="middle"><g><circle cx="230" cy="70" r="30" fill="#d3f9d8" stroke="#2b8a3e"/><text x="230" y="68">Material</text><text x="230" y="82">processing</text></g><g><circle cx="370" cy="150" r="30" fill="#d0ebff" stroke="#1c7ed6"/><text x="370" y="148">Product</text><text x="370" y="162">manufacture</text></g><g><circle cx="345" cy="300" r="30" fill="#fff3bf" stroke="#f08c00"/><text x="345" y="304">Distribution</text></g><g><circle cx="115" cy="300" r="30" fill="#ffe3e3" stroke="#e03131"/><text x="115" y="304">Use</text></g><g><circle cx="90" cy="150" r="30" fill="#f3f0ff" stroke="#7048e8"/><text x="90" y="148">End</text><text x="90" y="162">of life</text></g></g><g fill="none" stroke="#868e96" stroke-width="2.5" marker-end="url(#ah)"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#868e96"/></marker></defs><path d="M260,80 A150,150 0 0,1 350,128"/><path d="M378,182 A150,150 0 0,1 372,272"/><path d="M318,322 A150,150 0 0,1 148,322"/><path d="M92,272 A150,150 0 0,1 84,182"/><path d="M108,124 A150,150 0 0,1 198,76"/></g><rect x="60" y="345" width="180" height="22" rx="11" fill="#e6fcf5" stroke="#0ca678"/><text x="150" y="360" font-size="10" font-weight="700" text-anchor="middle" fill="#087f5b">Reuse: skip back to "Use" stage</text><path d="M118,330 A120,120 0 0,1 320,330" fill="none" stroke="#0ca678" stroke-width="2.5" stroke-dasharray="6 4"/></svg>',
          },
          caption: 'The glass bottle\'s life cycle: material processing → manufacture → distribution → use → end of life. Reusing a bottle (green dashed loop) returns it straight to the use stage, avoiding most processing steps.',
        },
      },
    ],
  },

  // ─── Q8 — Copper Removal / PCBs / Green Chemistry Evaluation (Crit D, 17 marks)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Treatment Methods and Green Chemistry Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Global population increases have caused an increased demand for safe drinking water. Many governments are passing laws to make sure that factories and processing plants remove waste products from any water that leaves their sites before it enters rivers or other water sources. Heavy metal ions such as copper, arsenic, mercury and lead need to be removed as they have been linked to a variety of health problems.\n\nModern chemical industries try to adopt the principles of green chemistry. This involves several aspects such as preventing waste, being energy efficient and using renewable raw materials.\n\nPrinted circuit boards (PCBs) are made using a copper layer. The electrical connections are removed using a chemical reaction. This reaction produces a waste copper ion solution. It is important that the dissolved copper ions are removed before the water is returned to the water supply as they may cause liver damage and anaemia.\n\nThere are several processes for removing copper ions in industry: Precipitation, Recovery using electrochemical methods, Chemisorption, and Photocatalysis.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Process', 'Efficiency', 'Cost & energy', 'Waste / environment', 'Complexity'],
        rows: [
          ['Precipitation', 'removes most copper even at high concentrations', 'inexpensive', 'large amount of waste sludge that is hard to dispose of; uses extra chemicals', 'simple and safe'],
          ['Recovery (electrochemical)', 'particular, pure metals recovered', 'high set-up cost, high energy, electrodes need replacing', 'no waste products; no chemicals consumed', 'moderate'],
          ['Chemisorption', 'highly efficient at low concentrations (removes >99%)', 'high initial set-up cost', 'minimal waste; adsorbent can be reused', 'not efficient at high concentrations'],
          ['Photocatalysis', '100% of copper ions removed from waste water', 'uses solar energy; cheap catalyst', 'no chemicals consumed', 'new technology; needs >1 week and large UV-lit area'],
        ],
      },
      caption: 'Four industrial methods for removing copper ions from waste water. Choose two to discuss and evaluate against efficiency, environmental impact, economics, green chemistry and complexity.',
    },
    tasks: [
      {
        label: '',
        text: 'You are about to set up a company in an area with a population with high levels of liver disease and anaemia which have been caused by high amounts of copper in the water supply from an old factory. Your new factory will produce PCBs. **Discuss** and **evaluate** two processes for treating waste water from the information given. In your answer, you should consider:\n- the efficiency of each process\n- the environmental impact of each process\n- the economic impact of each process\n- how each process matches the principles of green chemistry\n- the complexity of each process\n- your final choice of process with justification',
        marks: 17,
        ph: 'Compare 2 processes (e.g. electrochemical vs photocatalysis); efficiency, environmental, economic, green chemistry, complexity; justify final choice',
      },
    ],
  },
]
