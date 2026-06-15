import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2022 · VARIANT 2  (isomorphic to biology-may-2022)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget types, tags) in a NEW biological context — DIFFERENT from
// both the source AND variant 1. Self-contained data-driven artefacts. Answers
// recomputed.
//   Q1 Cells:         key uses nucleus-then-wall branches; organelle labels A/B
//   Q2 Digestion:     respiratory+muscular systems; fats→fatty acids+glycerol
//   Q3 Eutrophication: freshwater reservoir / drinking-water lake
//   Q4 Transpiration:  number-of-leaves transpiration with mass-loss on a balance
//   Q5 Crit B design:  potometer + light intensity on transpiration
//   Q6 Stomata Crit C: pine needles / eucalyptus / floating water lettuce
//   Q7 Plastics:       plastic-eating beetle larvae + natural selection
//   Q8 Crit D essay:   plastics recycling methods (fresh appraisal context)
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2022-v2',
  subject: 'Biology',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Cells & Organisation (7 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells & Organisation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 7,
    stem: 'The questions below are about cell structure and organisation.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="270" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Classification key for three cell types</text><rect x="240" y="40" width="140" height="34" rx="6" fill="#e6f4ea" stroke="#2f9e44"/><text x="310" y="61" font-size="12" text-anchor="middle" fill="#1f4d2a">Does it have a nucleus?</text><line x1="270" y1="74" x2="150" y2="110" stroke="#5b6b78" stroke-width="1.5"/><line x1="350" y1="74" x2="470" y2="110" stroke="#5b6b78" stroke-width="1.5"/><text x="200" y="96" font-size="11" fill="#0b7285">NO</text><text x="420" y="96" font-size="11" fill="#0b7285">YES</text><rect x="70" y="112" width="150" height="34" rx="6" fill="#fff4e6" stroke="#f08c00"/><text x="145" y="133" font-size="12" text-anchor="middle" fill="#7a4a00">Cell type 1</text><rect x="400" y="112" width="150" height="34" rx="6" fill="#e6f4ea" stroke="#2f9e44"/><text x="475" y="133" font-size="12" text-anchor="middle" fill="#1f4d2a">Does it have a cell wall?</text><line x1="430" y1="146" x2="360" y2="190" stroke="#5b6b78" stroke-width="1.5"/><line x1="520" y1="146" x2="560" y2="190" stroke="#5b6b78" stroke-width="1.5"/><text x="380" y="172" font-size="11" fill="#0b7285">NO</text><text x="548" y="172" font-size="11" fill="#0b7285">YES</text><rect x="285" y="192" width="150" height="34" rx="6" fill="#fff4e6" stroke="#f08c00"/><text x="360" y="213" font-size="12" text-anchor="middle" fill="#7a4a00">Cell type 2</text><rect x="480" y="192" width="130" height="34" rx="6" fill="#fff4e6" stroke="#f08c00"/><text x="545" y="213" font-size="12" text-anchor="middle" fill="#7a4a00">Cell type 3</text></svg>',
      },
      caption: 'A classification key. Each branch must be matched to a plant, animal or bacterial cell.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the correct cell type for each branch of the classification key shown.',
        marks: 1,
        ph: 'Use the nucleus and cell-wall branches to classify plant, animal and bacterial cells.',
      },
      {
        label: 'b',
        text: '**Suggest** an alternative question to tell the difference between a plant cell and an animal cell.',
        marks: 1,
        ph: 'Think of a yes/no question using a unique organelle.',
      },
      {
        label: 'c',
        text: '**State** the name of the organelle labelled A in the diagram.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="cyto2" cx="0.5" cy="0.45"><stop offset="0" stop-color="#fdeef2"/><stop offset="1" stop-color="#f7d7e1"/></radialGradient></defs><rect width="420" height="300" fill="#ffffff"/><ellipse cx="210" cy="150" rx="170" ry="110" fill="url(#cyto2)" stroke="#c2255c" stroke-width="3"/><text x="210" y="284" font-size="12" text-anchor="middle" fill="#7a1538">an animal cell</text><circle cx="210" cy="150" r="42" fill="#cbd9ff" stroke="#3b5bdb" stroke-width="2"/><circle cx="210" cy="150" r="15" fill="#5b76d6"/><text x="210" y="208" font-size="11" text-anchor="middle" fill="#3b5bdb">nucleus</text><ellipse cx="120" cy="105" rx="26" ry="14" fill="#e3a93c" stroke="#a8721a" stroke-width="2"/><line x1="120" y1="97" x2="120" y2="113" stroke="#a8721a"/><line x1="108" y1="105" x2="132" y2="105" stroke="#a8721a"/><text x="120" y="79" font-size="13" font-weight="700" text-anchor="middle" fill="#7a4a00">A</text><line x1="44" y1="150" x2="62" y2="150" stroke="#c0392b" stroke-width="3"/><text x="70" y="154" font-size="13" font-weight="700" fill="#c0392b">B</text></svg>',
          },
          caption: 'An animal cell. Organelle A is the site of all metabolic (respiration) reactions; structure B is the outer boundary of the cell.',
        },
        ph: 'Organelle A is the site of all metabolic reactions.',
      },
      {
        label: 'd',
        text: '**State** the function of the organelle labelled B in the diagram.',
        marks: 1,
        ph: 'Think about what controls entry and exit of substances.',
      },
      {
        label: 'e',
        text: '**Outline** the relationship between cells and tissues.',
        marks: 3,
        ph: 'Describe what tissues are made of and how cells work together.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Body Systems & Digestion (11 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Body Systems & Digestion',
    topicCanonical: 'Digestion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 11,
    stem: 'The questions below are about body systems and the digestive system.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="300" fill="#ffffff"/><text x="260" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two human body systems</text><g><text x="130" y="46" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">1</text><line x1="130" y1="60" x2="130" y2="120" stroke="#5b6b78" stroke-width="4"/><path d="M130,120 C110,150 100,160 96,200" fill="none" stroke="#c0392b" stroke-width="2"/><path d="M130,120 C150,150 160,160 164,200" fill="none" stroke="#c0392b" stroke-width="2"/><ellipse cx="96" cy="220" rx="26" ry="36" fill="#fbe0e0" stroke="#c0392b" stroke-width="2"/><ellipse cx="164" cy="220" rx="26" ry="36" fill="#fbe0e0" stroke="#c0392b" stroke-width="2"/><path d="M80,210 q16,12 32,0 M148,210 q16,12 32,0" fill="none" stroke="#c0392b"/><text x="130" y="290" font-size="11" text-anchor="middle" fill="#5b6b78">lungs + airways</text></g><g><text x="380" y="46" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">2</text><ellipse cx="380" cy="120" rx="22" ry="44" fill="#e8772e" stroke="#a8531a" stroke-width="2"/><path d="M380,80 q-14,40 0,80 M380,80 q14,40 0,80" fill="none" stroke="#a8531a" stroke-width="1.5"/><ellipse cx="350" cy="210" rx="16" ry="40" fill="#e8772e" stroke="#a8531a" stroke-width="2" transform="rotate(12 350 210)"/><ellipse cx="410" cy="210" rx="16" ry="40" fill="#e8772e" stroke="#a8531a" stroke-width="2" transform="rotate(-12 410 210)"/><text x="380" y="290" font-size="11" text-anchor="middle" fill="#5b6b78">muscles</text></g></svg>',
      },
      caption: 'System 1 shows the lungs and airways; system 2 shows the muscles of the body.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of each body system as you click on the numbers in the diagram.',
        marks: 2,
        ph: 'Identify the respiratory and muscular systems from the diagrams.',
      },
      {
        label: 'b',
        text: '**Select** the term for all the chemical processes occurring in cells.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Circulation', 'Digestion', 'Enzymes', 'Metabolism'],
        ph: 'All chemical reactions in a living organism.',
      },
      {
        label: 'c',
        text: '**State** two advantages of breaking food into smaller pieces during mechanical digestion.',
        marks: 3,
        ph: 'Think about surface area and the role of enzymes.',
      },
      {
        label: 'd',
        text: '**State** what is produced when fats (lipids) are chemically digested.',
        marks: 1,
        ph: 'Fats are broken down into two smaller molecules — their building blocks.',
      },
      {
        label: 'e',
        text: '**Explain** how the structure of the small intestine is adapted to absorb nutrients into the blood. You should use scientific language in your answer.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="vil2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd9c0"/><stop offset="1" stop-color="#f0a878"/></linearGradient></defs><rect width="560" height="300" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Lining of the small intestine (villi)</text><path d="M40,250 L40,120 Q70,60 100,120 Q130,60 160,120 Q190,60 220,120 Q250,60 280,120 Q310,60 340,120 Q370,60 400,120 Q430,60 460,120 Q490,60 520,120 L520,250 Z" fill="url(#vil2)" stroke="#c06030" stroke-width="2"/><ellipse cx="160" cy="150" rx="9" ry="30" fill="#fff3ec" stroke="#c06030"/><path d="M160,124 a14,14 0 0 1 0,52" fill="none" stroke="#c0392b" stroke-width="2"/><text x="200" y="96" font-size="11" fill="#7a3d12">finger-like villi</text><line x1="178" y1="92" x2="160" y2="118" stroke="#7a3d12" stroke-width="1"/><circle cx="290" cy="160" r="5" fill="#c0392b"/><circle cx="310" cy="190" r="5" fill="#3b5bdb"/><text x="340" y="200" font-size="11" fill="#3b5bdb">capillary network (blood supply)</text><path d="M400,124 C400,170 400,210 400,240" fill="none" stroke="#f0c419" stroke-width="3"/><text x="420" y="240" font-size="11" fill="#9a7d0f">lacteal</text><text x="60" y="278" font-size="11" fill="#5b6b78">walls one cell thick → short diffusion distance</text></svg>',
          },
          caption: 'Villi line the small intestine: a large folded surface area, thin walls, a rich blood supply and a lacteal.',
        },
        ph: 'Describe villi features and link each to efficient absorption.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Reservoir Eutrophication (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Eutrophication',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 10,
    stem: 'Eutrophication is a natural process that occurs in bodies of water over hundreds of years. A freshwater reservoir is used to supply drinking water to a nearby town. Excess nutrients such as nitrogen, phosphorus and potassium slowly wash from the surrounding land into the reservoir, causing increased growth of algae and aquatic plants and making the water more difficult to treat.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="res2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9f6"/><stop offset="1" stop-color="#5e9ec0"/></linearGradient><marker id="rar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="620" height="300" fill="#ffffff"/><polygon points="0,160 0,40 200,40 240,160" fill="#dfe8cf" stroke="#9fb070"/><text x="90" y="86" font-size="12" fill="#5f6b3a">crop field</text><g stroke="#a8b878" stroke-width="1"><line x1="30" y1="100" x2="180" y2="100"/><line x1="30" y1="116" x2="180" y2="116"/><line x1="30" y1="132" x2="180" y2="132"/></g><path d="M120,132 q40,12 110,28" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#rar2)"/><text x="120" y="178" font-size="10" fill="#2f9e44">fertiliser runoff</text><rect x="200" y="160" width="420" height="140" fill="url(#res2)"/><text x="20" y="290" font-size="10" fill="#2c5468">reservoir (drinking-water supply)</text><ellipse cx="430" cy="195" rx="130" ry="18" fill="#7bbf5a" opacity="0.85"/><ellipse cx="430" cy="195" rx="78" ry="10" fill="#4f9e30" opacity="0.9"/><text x="430" y="182" font-size="11" text-anchor="middle" fill="#2c5e16">algal bloom</text><rect x="540" y="120" width="50" height="40" fill="#cdd6dd" stroke="#5b6b78"/><text x="565" y="112" font-size="10" text-anchor="middle" fill="#5b6b78">water plant</text><line x1="540" y1="160" x2="520" y2="178" stroke="#3f7e98" stroke-width="3"/></svg>',
      },
      caption: 'Fertiliser washing from a crop field into a drinking-water reservoir drives an algal bloom.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** one source of nutrients that causes natural eutrophication.',
        marks: 1,
        ph: 'A natural source that releases nutrients into water — not from human activity.',
      },
      {
        label: 'b',
        text: '**Suggest** one direct source and one indirect source of nutrients that contribute to eutrophication caused by human actions.',
        marks: 2,
        ph: 'Direct = enters water straight; indirect = travels via runoff or drainage.',
      },
      {
        label: 'c',
        text: '**Describe** how eutrophication caused by human actions can lead to an algal bloom.',
        marks: 3,
        ph: 'Follow the nutrient chain from water entry to algae population boom.',
      },
      {
        label: 'd',
        text: '**Explain** how a large algal bloom could cause a decrease in biomass in the ecosystem.',
        marks: 4,
        ph: 'Link algae → sunlight blocked → plants die → bacteria → oxygen depletion → organisms die.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Transpiration Investigation (17 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Transpiration Investigation',
    topicCanonical: 'Transpiration & Translocation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 17,
    stem: 'Transpiration is the evaporation and diffusion of water from plants. Water is transported from the roots to the leaves through the xylem and exits through the stomata in the leaves. Two student groups investigated transpiration by standing leafy shoots in conical flasks of water on a balance and recording the loss of mass over time.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wat4b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfeef9"/><stop offset="1" stop-color="#8cc9e3"/></linearGradient></defs><rect width="560" height="290" fill="#ffffff"/><g><path d="M86,150 L70,210 L170,210 L154,150 Q145,140 95,140 Z" fill="none" stroke="#5b6b78" stroke-width="2"/><path d="M82,175 L74,210 L166,210 L158,175 Z" fill="url(#wat4b)"/><line x1="120" y1="150" x2="120" y2="60" stroke="#4a7d34" stroke-width="4"/><path d="M120,90 q-30,-14 -44,4 q24,8 44,2 z" fill="#5b9a4a" stroke="#356b22"/><path d="M120,72 q30,-14 44,4 q-24,8 -44,2 z" fill="#5b9a4a" stroke="#356b22"/><rect x="60" y="216" width="120" height="14" rx="3" fill="#cdd6dd" stroke="#5b6b78"/><rect x="96" y="230" width="48" height="20" rx="2" fill="#222"/><text x="120" y="244" font-size="10" fill="#3ad36a" text-anchor="middle" font-family="monospace">248.6 g</text><text x="120" y="270" font-size="11" text-anchor="middle" fill="#5b6b78">group 1 (2 leaves)</text></g><g><path d="M396,150 L380,210 L480,210 L464,150 Q455,140 405,140 Z" fill="none" stroke="#5b6b78" stroke-width="2"/><path d="M392,172 L384,210 L476,210 L468,172 Z" fill="url(#wat4b)"/><line x1="430" y1="150" x2="430" y2="56" stroke="#4a7d34" stroke-width="4"/><path d="M430,84 q-30,-14 -44,4 q24,8 44,2 z" fill="#5b9a4a" stroke="#356b22"/><path d="M430,68 q30,-14 44,4 q-24,8 -44,2 z" fill="#5b9a4a" stroke="#356b22"/><path d="M430,100 q-30,-14 -44,4 q24,8 44,2 z" fill="#5b9a4a" stroke="#356b22"/><rect x="370" y="216" width="120" height="14" rx="3" fill="#cdd6dd" stroke="#5b6b78"/><rect x="406" y="230" width="48" height="20" rx="2" fill="#222"/><text x="430" y="244" font-size="10" fill="#3ad36a" text-anchor="middle" font-family="monospace">252.1 g</text><text x="430" y="270" font-size="11" text-anchor="middle" fill="#5b6b78">group 2 (4 leaves)</text></g></svg>',
      },
      caption: 'Leafy shoots stand in flasks of water on a balance. The shoots have different numbers of leaves; loss of mass over time measures transpiration.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable in this investigation.',
        marks: 1,
        ph: 'What did the students change between the flasks?',
      },
      {
        label: 'b',
        text: '**Outline** the measurements needed to calculate the rate of transpiration in grams per hour (g h⁻¹).',
        marks: 3,
        ph: 'Mass of water lost, initial and final masses, and time duration.',
      },
      {
        label: 'c',
        text: '**State** two control variables for this investigation.',
        marks: 2,
        ph: 'Variables kept the same — temperature, plant species, stem dimensions, light.',
      },
      {
        label: 'd',
        text: '**State** two improvements that group 2 made to the research question. **Justify** how each would improve the investigation.',
        marks: 4,
        ph: 'Identify the two improvements and explain why each makes the investigation stronger.',
      },
      {
        label: 'e',
        text: '**State** and **justify** two reasons why the results from group 2 are more valid than the results from group 1.',
        marks: 4,
        ph: 'Link two significant figures, control group, or stated conditions to validity.',
      },
      {
        label: 'f',
        text: '**Suggest** why the two groups should not combine their results.',
        marks: 1,
        ph: 'Think about differences in method, precision, or research question.',
      },
      {
        label: 'g',
        text: '**Suggest** and **justify** why adding a layer of oil on the water surface is an improvement to the method.',
        marks: 2,
        ph: 'How does the oil layer prevent a confounding factor affecting the dependent variable?',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Potometer Design Investigation (17 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Potometer Design Investigation',
    topicCanonical: 'Transpiration & Translocation',
    topicGroup: 'Metabolism',
    marks: 17,
    stem: 'Students researched alternative methods to investigate the transport of water in plants. They read about a piece of equipment called a potometer, which measures how quickly a leafy shoot takes up water. You are provided with a potometer, a lamp that can be placed at different distances, a light meter and standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="pwat5b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfeef9"/><stop offset="1" stop-color="#7cc0de"/></linearGradient><radialGradient id="lamp5b" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="580" height="280" fill="#ffffff"/><text x="290" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A potometer with a lamp</text><circle cx="500" cy="80" r="24" fill="url(#lamp5b)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="476" y1="80" x2="200" y2="90"/><line x1="478" y1="92" x2="200" y2="110"/></g><text x="500" y="124" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><line x1="120" y1="170" x2="120" y2="60" stroke="#4a7d34" stroke-width="5"/><path d="M120,90 q-34,-16 -50,4 q28,10 50,2 z" fill="#5b9a4a" stroke="#356b22"/><path d="M120,72 q34,-16 50,4 q-28,10 -50,2 z" fill="#5b9a4a" stroke="#356b22"/><rect x="96" y="150" width="48" height="40" rx="6" fill="#dfe6ec" stroke="#5b6b78" stroke-width="2"/><text x="120" y="206" font-size="10" text-anchor="middle" fill="#5b6b78">leafy shoot</text><path d="M144,176 L300,176 L300,210 L420,210" fill="none" stroke="#5b6b78" stroke-width="6"/><rect x="296" y="172" width="124" height="8" fill="url(#pwat5b)"/><circle cx="350" cy="176" r="6" fill="#ffffff" stroke="#3f7e98" stroke-width="2"/><text x="350" y="160" font-size="10" text-anchor="middle" fill="#3f7e98">air bubble</text><rect x="400" y="180" width="56" height="56" rx="4" fill="#eef3f6" stroke="#5b6b78"/><g stroke="#94a3ad" stroke-width="1"><line x1="406" y1="192" x2="450" y2="192"/><line x1="406" y1="204" x2="450" y2="204"/><line x1="406" y1="216" x2="450" y2="216"/></g><text x="428" y="252" font-size="10" text-anchor="middle" fill="#5b6b78">scale (mm)</text></svg>',
      },
      caption: 'A potometer lit by a lamp: as the shoot transpires, the air bubble moves along the scale; moving the lamp changes the light intensity.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of light intensity on the rate of transpiration. In your design, you should:\n- identify the independent, dependent and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how to manipulate, measure or monitor all of the variables\n- describe a method to collect sufficient data\n- justify one calculation needed to transform the data collected\n- state how you will make your method safe',
        marks: 17,
        ph: 'Plan a full investigation: variables, hypothesis, method, data collection, calculation, safety.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Stomata Investigation (14 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Stomata Investigation',
    topicCanonical: 'Transpiration & Translocation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 14,
    stem: 'Having learned that stomata are important in both transpiration and gas exchange, students examined the surfaces of leaves. To compare leaves, they estimated the number of stomata per square millimetre of leaf — the stomatal density. They counted stomata in a microscope field of view of 0.5 mm × 0.5 mm for the lower surface of eucalyptus leaves.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Eucalyptus leaf sample', 'Stomata counted (0.5 mm × 0.5 mm field)'],
        rows: [['1', '14'], ['2', '16'], ['3', '15'], ['4', '13'], ['5', '15'], ['6', '16'], ['7', '14'], ['8', '15'], ['9', '16'], ['10', '?']],
      },
      caption: 'Stomata counted in the lower surface of 10 eucalyptus leaves. The count for sample 10 must be read from the field of view.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why the sample of 10 leaves from each plant was randomly selected.',
        marks: 2,
        ph: 'Two reasons: reduce bias, allow calculation of averages, representative sample.',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why a leaf might be rejected from the random sample.',
        marks: 1,
        ph: 'A leaf that is not representative — damaged, dead, diseased.',
      },
      {
        label: 'c',
        text: '**Determine** the number of stomata present in eucalyptus leaf sample 10 and add your value to the table.',
        marks: 1,
        widget: 'fill_blank',
        widgetOptions: ['16'],
        ph: 'Count the stomata visible in the 0.5 × 0.5 mm field of view for sample 10.',
      },
      {
        label: 'd',
        text: '**Calculate** the average stomatal density of the lower surface of eucalyptus leaves. Give your answer to an appropriate degree of accuracy.',
        marks: 3,
        ph: 'Average count = 15; use the density formula: stomata ÷ area (0.25 mm²) = 60 mm⁻².',
      },
      {
        label: 'e',
        text: '**Select** the name given to the type of data shown by the pictures and habitat descriptions.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Continuous', 'Graphical', 'Qualitative', 'Quantitative'],
        ph: 'The pictures and habitat descriptions are descriptive, not numerical.',
      },
      {
        label: 'f',
        text: '**Suggest** why floating water lettuce does not have stomata on its lower surface.',
        marks: 1,
        ph: 'The lower surface is in contact with water — no need for stomata since gas exchange happens differently.',
      },
      {
        label: 'g',
        text: '**Explain** the similarities and differences in distribution of stomata in eucalyptus trees and pine trees. You should use scientific language in your answer.',
        marks: 5,
        ph: 'Compare number and location of stomata; link to transpiration and habitat.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Plastics, Enzymes & Natural Selection (7 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Plastics, Enzymes & Natural Selection',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Natural Selection', 'Enzymes & Biochemistry'],
    marks: 7,
    stem: 'Humans use resources to create products that simplify our lives without always considering the long-term impacts. Creative methods to recycle plastics are required to protect the environment for future generations. Plastics are large molecules made of repeated building blocks joined together in a long chain. The larvae of some beetles can eat polystyrene foam, helped by enzymes produced by microbes in their guts, and beetles able to digest plastic are becoming more common where plastic waste collects.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="nsa2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="620" height="220" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Natural selection of plastic-eating beetle larvae</text><rect x="20" y="60" width="120" height="80" rx="8" fill="#e6f4ea" stroke="#2f9e44" stroke-width="2"/><text x="80" y="92" font-size="11" text-anchor="middle" fill="#1f4d2a">Box 1</text><text x="80" y="110" font-size="10" text-anchor="middle" fill="#356b44">Beetles reproduce to</text><text x="80" y="124" font-size="10" text-anchor="middle" fill="#356b44">make many larvae</text><line x1="140" y1="100" x2="180" y2="100" stroke="#0b7285" stroke-width="2" marker-end="url(#nsa2)"/><rect x="180" y="60" width="120" height="80" rx="8" fill="#f1f3f5" stroke="#adb5bd" stroke-width="2" stroke-dasharray="4 3"/><text x="240" y="100" font-size="11" text-anchor="middle" fill="#868e96">Box 2</text><line x1="300" y1="100" x2="340" y2="100" stroke="#0b7285" stroke-width="2" marker-end="url(#nsa2)"/><rect x="340" y="60" width="120" height="80" rx="8" fill="#f1f3f5" stroke="#adb5bd" stroke-width="2" stroke-dasharray="4 3"/><text x="400" y="100" font-size="11" text-anchor="middle" fill="#868e96">Box 3</text><line x1="460" y1="100" x2="500" y2="100" stroke="#0b7285" stroke-width="2" marker-end="url(#nsa2)"/><rect x="500" y="60" width="110" height="80" rx="8" fill="#f1f3f5" stroke="#adb5bd" stroke-width="2" stroke-dasharray="4 3"/><text x="555" y="100" font-size="11" text-anchor="middle" fill="#868e96">Box 4</text><text x="310" y="186" font-size="11" text-anchor="middle" fill="#5b6b78">Boxes 2, 3 and 4 are empty — drag the statements into the correct order.</text></svg>',
      },
      caption: 'A natural-selection sequence with boxes 2, 3 and 4 left blank for the student to complete.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct meaning of the term "food web".',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'The interconnected food chains in an ecosystem',
          'A single chain showing what organisms are eaten in',
          'The total weight of all organisms in an area',
          'The part of the planet containing living organisms',
        ],
        ph: 'A food web connects multiple food chains — not just one chain.',
      },
      {
        label: 'b',
        text: '**Describe** how enzymes can break down plastics. You should use scientific language in your answer.',
        marks: 4,
        ph: 'Enzymes break bonds between building blocks; mention active site, substrate, catabolic.',
      },
      {
        label: 'c',
        text: '**Organize** the statements to complete the natural selection diagram.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Box 2', 'Box 3', 'Box 4'],
        widgetOptions: [
          'Beetle larvae in a population have different characteristics from one another',
          'Larvae whose gut microbes digest plastic survive and reproduce more',
          'The ability to digest plastic becomes more common in the population',
        ],
        ph: 'Follow the logic: variation → survival → population change.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Plastics Recycling (17 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Plastics Recycling',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 17,
    stem: 'Plastics have a wide range of properties so they can be used to make a wide range of items. For example, plastic packaging is lightweight and waterproof. After they have been used, some plastics are recycled. An infographic shows three methods of recycling plastics: Chemical recycling, Mechanical recycling, Biological recycling.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="220" fill="#ffffff"/><text x="310" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Three methods of recycling plastics</text><g><rect x="30" y="60" width="170" height="120" rx="10" fill="#e7f1f5" stroke="#0b7285" stroke-width="2"/><text x="115" y="86" font-size="13" font-weight="700" text-anchor="middle" fill="#0b5a6a">Chemical</text><text x="115" y="112" font-size="10" text-anchor="middle" fill="#33707f">Plastics broken into</text><text x="115" y="128" font-size="10" text-anchor="middle" fill="#33707f">basic chemicals</text><text x="115" y="152" font-size="10" text-anchor="middle" fill="#33707f">→ new plastic</text></g><g><rect x="225" y="60" width="170" height="120" rx="10" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><text x="310" y="86" font-size="13" font-weight="700" text-anchor="middle" fill="#9a5a00">Mechanical</text><text x="310" y="112" font-size="10" text-anchor="middle" fill="#a86a14">Plastics washed,</text><text x="310" y="128" font-size="10" text-anchor="middle" fill="#a86a14">shredded, melted</text><text x="310" y="152" font-size="10" text-anchor="middle" fill="#a86a14">→ remoulded</text></g><g><rect x="420" y="60" width="170" height="120" rx="10" fill="#e6f4ea" stroke="#2f9e44" stroke-width="2"/><text x="505" y="86" font-size="13" font-weight="700" text-anchor="middle" fill="#1f6b34">Biological</text><text x="505" y="112" font-size="10" text-anchor="middle" fill="#357a44">Enzymes / microbes</text><text x="505" y="128" font-size="10" text-anchor="middle" fill="#357a44">digest the plastic</text><text x="505" y="152" font-size="10" text-anchor="middle" fill="#357a44">→ building blocks</text></g></svg>',
      },
      caption: 'Chemical, mechanical and biological methods of recycling plastics.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the methods of recycling plastics. In your answer, you should include:\n- reasons why the properties of plastics make them useful and widely used\n- the environmental consequences of two methods of recycling\n- the economic impacts of two methods of recycling\n- a concluding appraisal justifying your opinion of how plastics should be recycled',
        marks: 13,
        ph: 'Cover properties/uses, environmental and economic impacts of two methods, then conclude.',
      },
      {
        label: 'b',
        text: '**Suggest** and **justify** two additional ways in which pollution from plastics can be reduced.',
        marks: 4,
        ph: 'Two different ways (e.g. government policy, education, behavioural changes) + justification.',
      },
    ],
  },
]
