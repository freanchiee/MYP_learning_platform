import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2017 · VARIANT 1  (isomorphic to biology-nov-2017)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). Numbers recomputed.
//   Q1 Osmosis/turgor + xerophyte:  marram grass → cactus (desert succulent)
//   Q2 Tropisms + Darwin coleoptile: Mimosa pudica → Venus flytrap (thigmonasty)
//   Q3 Organelles + GE vs SB:        Belgian Blue cattle → Merino sheep (wool)
//   Q4 Diffusion investigation:      iodine/starch → potassium permanganate/agar
//   Q5 Osmosis rate vs temperature:  dialysis temp data → sucrose-conc gradient data
//   Q6 Osmosis design in real cells: potato → carrot cores
//   Q7 Nutrients + protein chart:    goat meat → soybean (highest protein)
//   Q8 Crit D essay:                 in vitro meat → cultured (lab-grown) seafood
//   Q9 Crit D essay:                 3D bioprinting → lab-grown organs from stem cells
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2017-v1',
  subject: 'Biology',
  session: 'November',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Water in Plants (7 marks, Criterion A) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Water in Plants & Transpiration',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Transpiration & Translocation'],
    marks: 7,
    stem: 'Plants can experience water stress either when there is not enough water in the soil or when the transpiration rate is too high. The diagram shows plant cells in hypotonic, isotonic, and hypertonic solutions.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="cw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8bc34a"/><stop offset="1" stop-color="#4f8f24"/></linearGradient></defs><rect width="640" height="230" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f3d1a">Plant cells in three solutions</text><g><rect x="40" y="55" width="22" height="130" fill="#2f9e44"/><rect x="62" y="55" width="120" height="130" rx="6" fill="none" stroke="#2f9e44" stroke-width="3"/><rect x="74" y="67" width="96" height="106" rx="4" fill="#bfe3c0" stroke="#37b24d"/><ellipse cx="122" cy="120" rx="20" ry="20" fill="#0b7285"/><text x="122" y="124" font-size="9" text-anchor="middle" fill="#fff">nucleus</text><text x="111" y="205" font-size="12" text-anchor="middle" fill="#1f3d1a">Turgid</text><text x="111" y="222" font-size="10" text-anchor="middle" fill="#5b6b78">(hypotonic)</text></g><g><rect x="250" y="62" width="110" height="116" rx="6" fill="none" stroke="#2f9e44" stroke-width="3"/><rect x="262" y="74" width="86" height="92" rx="4" fill="#cdeccf" stroke="#69b96d"/><ellipse cx="305" cy="120" rx="18" ry="18" fill="#0b7285"/><text x="305" y="124" font-size="9" text-anchor="middle" fill="#fff">nucleus</text><text x="305" y="205" font-size="12" text-anchor="middle" fill="#1f3d1a">Flaccid</text><text x="305" y="222" font-size="10" text-anchor="middle" fill="#5b6b78">(isotonic)</text></g><g><rect x="455" y="62" width="120" height="116" rx="6" fill="none" stroke="#2f9e44" stroke-width="3"/><path d="M478,84 Q515,72 552,84 Q560,120 552,156 Q515,168 478,156 Q470,120 478,84 Z" fill="#e7efe1" stroke="#f08c00" stroke-width="2"/><path d="M478,84 Q515,72 552,84 Q560,120 552,156 Q515,168 478,156 Q470,120 478,84 Z" fill="#bcd6a0" opacity="0.5"/><ellipse cx="515" cy="120" rx="16" ry="16" fill="#0b7285"/><text x="515" y="124" font-size="9" text-anchor="middle" fill="#fff">nucleus</text><text x="515" y="205" font-size="12" text-anchor="middle" fill="#1f3d1a">Plasmolyzed</text><text x="515" y="222" font-size="10" text-anchor="middle" fill="#5b6b78">(hypertonic)</text></g></svg>',
      },
      caption: 'A plant cell in a hypotonic solution becomes turgid; in a hypertonic solution the membrane pulls away from the wall (plasmolysis).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The animation shows different diagrams of water moving in and out of a plant cell.\n\n**Select** the diagram that correctly shows the movement of water molecules when a plant cell is turgid.',
        marks: 1,
        ph: 'Select the correct diagram.',
        widget: 'radio_select',
        widgetOptions: ['Diagram A', 'Diagram B', 'Diagram C', 'Diagram D'],
      },
      {
        label: 'b',
        text: '**State** the name of the structure in the cell that prevents it from bursting when it is turgid.',
        marks: 1,
        ph: 'The structure is the...',
      },
      {
        label: 'c',
        text: '**Suggest and justify** a possible effect of plasmolyzed cells on the plant\'s structure.',
        marks: 1,
        ph: 'Plant will wilt / go floppy / can no longer stand upright...',
      },
      {
        label: 'd',
        text: 'Many environmental factors impact on the transpiration rate of plants. The saguaro cactus is a plant that has had to adapt to hot, dry desert conditions.\n\nThe image shows that the cactus has no broad leaves but instead has spines, a thick waxy stem surface, and stomata that are sunken and open mainly at night.\n\n**Explain** how one adaptation of the cactus reduces water loss by transpiration. You should include scientific knowledge and understanding in your answer.',
        marks: 4,
        ph: 'Spines instead of leaves / thick waxy cuticle / sunken stomata; reduces surface area or traps water vapour; reduces evaporation/transpiration rate...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde9c8"/><stop offset="1" stop-color="#f6cf94"/></linearGradient></defs><rect width="480" height="300" fill="url(#sky1)"/><rect x="0" y="240" width="480" height="60" fill="#e0b878"/><circle cx="80" cy="60" r="28" fill="#f0a500" opacity="0.85"/><g><path d="M205,250 Q200,120 215,90 Q230,60 245,90 Q260,120 255,250 Z" fill="#2f9e44" stroke="#1f6b2c" stroke-width="2"/><path d="M210,170 Q150,165 150,210 Q150,250 200,250" fill="#37b24d" stroke="#1f6b2c" stroke-width="2"/><path d="M250,150 Q320,145 320,190 Q320,235 255,235" fill="#37b24d" stroke="#1f6b2c" stroke-width="2"/><g stroke="#1f6b2c" stroke-width="1"><line x1="215" y1="110" x2="207" y2="106"/><line x1="245" y1="110" x2="253" y2="106"/><line x1="220" y1="150" x2="212" y2="147"/><line x1="240" y1="150" x2="248" y2="147"/><line x1="160" y1="200" x2="152" y2="197"/><line x1="310" y1="190" x2="318" y2="187"/></g></g><line x1="300" y1="120" x2="360" y2="120" stroke="#0b7285" stroke-width="1.5"/><circle cx="300" cy="120" r="3" fill="#0b7285"/><text x="365" y="116" font-size="11" fill="#0b7285">spines (modified leaves)</text><text x="365" y="130" font-size="11" fill="#0b7285">— small surface area</text><line x1="232" y1="230" x2="360" y2="200" stroke="#a8531a" stroke-width="1.5"/><text x="365" y="198" font-size="11" fill="#a8531a">thick waxy stem</text><text x="365" y="212" font-size="11" fill="#a8531a">stores water</text><text x="240" y="290" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d1a">Saguaro cactus</text></svg>',
          },
          caption: 'Desert adaptations of the saguaro cactus: spines instead of broad leaves, a thick waxy water-storing stem, and sunken stomata.',
        },
      },
    ],
  },

  // ── Q2: Tropisms (16 marks, Criterion A/C) ──────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Tropisms & Plant Responses',
    topicCanonical: 'Tropism',
    topicGroup: 'Interactions with Environment',
    marks: 16,
    stem: 'Living organisms have the ability to respond to a stimulus. When a plant responds to a stimulus, it is called a tropism. If the tropism is positive, the stimulus causes growth of the plant toward the stimulus. If the tropism is negative, the stimulus causes growth of the plant away from the stimulus.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="280" fill="#ffffff"/><rect x="0" y="170" width="480" height="110" fill="#d8b98c"/><line x1="0" y1="170" x2="480" y2="170" stroke="#a8824f" stroke-width="2"/><circle cx="410" cy="50" r="26" fill="#f0a500"/><g stroke="#f0a500" stroke-width="3" stroke-linecap="round"><line x1="380" y1="30" x2="360" y2="20"/><line x1="445" y1="50" x2="470" y2="50"/><line x1="380" y1="70" x2="360" y2="80"/></g><path d="M180,170 Q176,110 210,80 Q230,62 250,58" fill="none" stroke="#2f9e44" stroke-width="8" stroke-linecap="round"/><ellipse cx="250" cy="56" rx="16" ry="9" fill="#37b24d" transform="rotate(-20 250 56)"/><ellipse cx="205" cy="100" rx="14" ry="8" fill="#37b24d" transform="rotate(-30 205 100)"/><text x="150" y="120" font-size="11" fill="#1f6b2c">shoot grows</text><text x="150" y="134" font-size="11" fill="#1f6b2c">toward light</text><text x="150" y="148" font-size="10" fill="#5b6b78">(positive phototropism)</text><path d="M180,170 Q176,215 150,235 M180,170 Q184,210 210,238 M180,170 Q180,220 180,250" fill="none" stroke="#8a6d3b" stroke-width="4" stroke-linecap="round"/><text x="250" y="220" font-size="11" fill="#8a6d3b">roots grow downward</text><text x="250" y="234" font-size="10" fill="#5b6b78">(positive gravitropism)</text></svg>',
      },
      caption: 'A germinating seedling: the shoot grows up toward light while the roots grow down into the soil.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two stimuli, other than gravity or touch, that cause tropism in plants.',
        marks: 2,
        ph: 'Two stimuli: e.g. light / water / heat / nutrients / pheromones...',
      },
      {
        label: 'b',
        text: 'A plant shows both positive and negative tropism.\n\n**Suggest** how the growth of a plant shows both positive and negative tropism towards gravity.',
        marks: 4,
        ph: 'Stem: negative gravitropism — grows upward / toward light; leaves exposed to light. Roots: positive gravitropism — grow downward; absorb water/nutrients; form stable root structure...',
      },
      {
        label: 'c',
        text: 'The Venus flytrap (Dionaea muscipula) is a carnivorous plant that responds to touch by rapidly snapping its modified leaves shut.\n\n**Suggest** how this type of tropism might improve chances of survival for this plant.',
        marks: 3,
        ph: 'Touch by an insect triggers trap to close; insect is captured and digested; provides nitrogen/nutrients lacking in poor boggy soil; improved chance of survival...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="250" fill="#ffffff"/><text x="120" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d1a">Trap open</text><text x="345" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d1a">Trap closed</text><g><path d="M120,180 L120,90" stroke="#2f9e44" stroke-width="6"/><path d="M120,90 Q70,50 60,95 Q70,120 120,100 Z" fill="#bcdca0" stroke="#2f9e44" stroke-width="2"/><path d="M120,90 Q170,50 180,95 Q170,120 120,100 Z" fill="#bcdca0" stroke="#2f9e44" stroke-width="2"/><g stroke="#c0392b" stroke-width="1.5"><line x1="66" y1="62" x2="62" y2="52"/><line x1="80" y1="55" x2="78" y2="44"/><line x1="160" y1="55" x2="162" y2="44"/><line x1="174" y1="62" x2="178" y2="52"/></g><circle cx="120" cy="80" r="4" fill="#7a3d12"/><text x="120" y="60" font-size="9" text-anchor="middle" fill="#7a3d12">fly</text><g fill="#0b7285"><circle cx="95" cy="92" r="2"/><circle cx="145" cy="92" r="2"/></g><text x="120" y="205" font-size="9" text-anchor="middle" fill="#5b6b78">trigger hairs sense touch</text></g><g><path d="M345,180 L345,90" stroke="#2f9e44" stroke-width="6"/><path d="M345,90 Q318,55 332,95 Q345,108 345,100 Z" fill="#9fc97f" stroke="#1f6b2c" stroke-width="2"/><path d="M345,90 Q372,55 358,95 Q345,108 345,100 Z" fill="#9fc97f" stroke="#1f6b2c" stroke-width="2"/><g stroke="#1f6b2c" stroke-width="2"><line x1="334" y1="62" x2="338" y2="92"/><line x1="345" y1="58" x2="345" y2="92"/><line x1="356" y1="62" x2="352" y2="92"/></g><text x="345" y="205" font-size="9" text-anchor="middle" fill="#5b6b78">leaves snap shut on prey</text></g></svg>',
          },
          caption: 'The Venus flytrap snaps its modified leaves shut when an insect touches the trigger hairs.',
        },
      },
      {
        label: 'd',
        text: 'In 1880, Charles Darwin and his son Francis Darwin carried out a famous experiment on plant tropism using young grass seedlings (coleoptiles). Their experimental set-up is shown in the image.\n\n**Describe** what the results in the picture indicate about the response of plants to light.',
        marks: 3,
        ph: 'Coleoptile/shoot bends toward light; only if the tip is exposed to light; light is perceived at the tip...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><circle cx="40" cy="60" r="20" fill="#f0a500"/><g stroke="#f0a500" stroke-width="2.5" stroke-linecap="round"><line x1="62" y1="50" x2="80" y2="44"/><line x1="62" y1="60" x2="82" y2="60"/><line x1="62" y1="70" x2="80" y2="76"/></g><text x="40" y="100" font-size="10" text-anchor="middle" fill="#9a7d0f">light</text><g><rect x="120" y="200" width="60" height="20" fill="#d8b98c"/><path d="M150,200 Q150,150 168,135" fill="none" stroke="#2f9e44" stroke-width="9" stroke-linecap="round"/><text x="150" y="245" font-size="11" text-anchor="middle" fill="#1f3d1a">A: intact</text><text x="150" y="260" font-size="9" text-anchor="middle" fill="#1f6b2c">bends to light</text></g><g><rect x="270" y="200" width="60" height="20" fill="#d8b98c"/><path d="M300,200 L300,140" stroke="#2f9e44" stroke-width="9" stroke-linecap="round"/><rect x="290" y="128" width="20" height="14" rx="3" fill="#555"/><text x="300" y="245" font-size="11" text-anchor="middle" fill="#1f3d1a">B: tip covered</text><text x="300" y="260" font-size="9" text-anchor="middle" fill="#5b6b78">no bending</text></g><g><rect x="430" y="200" width="60" height="20" fill="#d8b98c"/><path d="M460,200 Q460,150 478,135" fill="none" stroke="#2f9e44" stroke-width="9" stroke-linecap="round"/><rect x="450" y="165" width="20" height="14" rx="3" fill="#555"/><text x="460" y="245" font-size="11" text-anchor="middle" fill="#1f3d1a">C: base covered</text><text x="460" y="260" font-size="9" text-anchor="middle" fill="#1f6b2c">bends to light</text></g></svg>',
          },
          caption: 'Darwin\'s coleoptile experiment: the shoot only bends toward light when the tip is exposed.',
        },
      },
      {
        label: 'e',
        text: 'Other researchers studied this behaviour further. The tips of two coleoptiles were separated from their bases with a thin sheet of mica. The mica on one plant was placed on the same side as the light source. The mica on the other plant was placed on the opposite side of the stem from the light source. Mica is a non-permeable material.\n\nBased on these results, the researchers concluded that the response was the result of the movement of a substance from the tip of the plant toward the base on the shaded side of the stalk.\n\nUse scientific knowledge and understanding to **justify** how these results support the conclusion.',
        marks: 4,
        ph: 'On shaded side, mica blocked substance from tip; plant did not bend; mica on lit side did not affect bending; so plant grew toward light...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="270" fill="#ffffff"/><circle cx="40" cy="60" r="18" fill="#f0a500"/><g stroke="#f0a500" stroke-width="2.5" stroke-linecap="round"><line x1="58" y1="60" x2="76" y2="60"/><line x1="58" y1="50" x2="74" y2="44"/></g><text x="40" y="96" font-size="10" text-anchor="middle" fill="#9a7d0f">light →</text><g><rect x="150" y="200" width="56" height="18" fill="#d8b98c"/><path d="M178,200 L178,120" stroke="#2f9e44" stroke-width="9" stroke-linecap="round"/><rect x="178" y="150" width="14" height="5" fill="#7a4fb5"/><text x="178" y="240" font-size="10" text-anchor="middle" fill="#1f3d1a">mica on lit side</text><text x="178" y="255" font-size="9" text-anchor="middle" fill="#1f6b2c">still bends to light</text><path d="M178,120 q14,-8 26,-2" fill="none" stroke="#2f9e44" stroke-width="7" stroke-linecap="round"/></g><g><rect x="360" y="200" width="56" height="18" fill="#d8b98c"/><path d="M388,200 L388,120" stroke="#2f9e44" stroke-width="9" stroke-linecap="round"/><rect x="374" y="150" width="14" height="5" fill="#7a4fb5"/><text x="388" y="240" font-size="10" text-anchor="middle" fill="#1f3d1a">mica on shaded side</text><text x="388" y="255" font-size="9" text-anchor="middle" fill="#c0392b">does NOT bend</text></g><text x="450" y="150" font-size="9" fill="#7a4fb5">mica</text></svg>',
          },
          caption: 'Mica inserted on the shaded side blocks the growth substance and prevents bending; on the lit side it has no effect.',
        },
      },
    ],
  },

  // ── Q3: Cells & Selective Breeding (10 marks, Criterion A/D) ─────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Organelles & Genetic Engineering',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Genetic Modification'],
    marks: 10,
    stem: 'The cell is the basic structural, functional and biological unit of all living organisms. Cells are the smallest units of life that can reproduce independently and are often called the building blocks of life.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="cyto3" cx="0.5" cy="0.5"><stop offset="0" stop-color="#eaf6ec"/><stop offset="1" stop-color="#cdeccf"/></radialGradient></defs><rect width="520" height="320" fill="#ffffff"/><ellipse cx="240" cy="160" rx="200" ry="130" fill="url(#cyto3)" stroke="#2f9e44" stroke-width="3"/><text x="120" y="300" font-size="11" fill="#1f6b2c">cell membrane / cytoplasm</text><ellipse cx="210" cy="150" rx="58" ry="48" fill="#cfe7f3" stroke="#0b7285" stroke-width="2.5"/><circle cx="210" cy="150" r="14" fill="#0b7285"/><text x="210" y="120" font-size="11" text-anchor="middle" fill="#0b7285" font-weight="700">nucleus</text><g><ellipse cx="350" cy="120" rx="30" ry="16" fill="#f7c9a0" stroke="#f08c00" stroke-width="2" transform="rotate(-15 350 120)"/><ellipse cx="350" cy="120" rx="20" ry="9" fill="none" stroke="#f08c00" transform="rotate(-15 350 120)"/><text x="392" y="118" font-size="11" fill="#a8531a">mitochondrion</text></g><g><path d="M320,210 q14,-6 28,0 q14,6 28,0" fill="none" stroke="#7a4fb5" stroke-width="3"/><path d="M320,224 q14,-6 28,0 q14,6 28,0" fill="none" stroke="#7a4fb5" stroke-width="3"/><path d="M320,238 q14,-6 28,0 q14,6 28,0" fill="none" stroke="#7a4fb5" stroke-width="3"/><text x="348" y="262" font-size="11" text-anchor="middle" fill="#7a4fb5">Golgi apparatus</text></g><circle cx="140" cy="210" r="9" fill="#37b24d"/><circle cx="160" cy="230" r="6" fill="#37b24d"/><text x="120" y="252" font-size="10" fill="#1f6b2c">ribosomes</text></svg>',
      },
      caption: 'A generalised animal cell showing the nucleus, mitochondria, Golgi apparatus and other organelles.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct organelle for each of the following functions.',
        marks: 3,
        ph: 'Nucleus → DNA / control; Golgi apparatus → packaging proteins/lipids; Mitochondria → energy conversion.',
        widget: 'match_drag_drop',
        widgetItems: ['Cell membrane', 'Cytoplasm', 'Golgi apparatus', 'Mitochondria', 'Nucleus'],
        widgetOptions: [
          'The part of the cell containing DNA and responsible for control of growth and function',
          'Packaging of molecules like proteins, movement of lipids and the creation of lysosomes',
          'Conversion of energy in food molecules to energy',
        ],
      },
      {
        label: 'b',
        text: '**State** the function of a gene.',
        marks: 1,
        ph: 'A specific instruction for a specific trait/protein/characteristic...',
      },
      {
        label: 'c',
        text: 'Merino sheep are a good example of the application of selective breeding to produce an animal with a desired trait — in this case, very fine, dense wool.\n\n**Compare and contrast** genetic engineering and selective breeding as methods to produce plants and animals with desired traits.',
        marks: 4,
        ph: 'Similarity: both select for desired trait; both alter genetic code. Difference: GE introduces new trait vs SB uses existing; GE needs one generation vs SB needs many; GE is faster; GE is artificial, SB is natural...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="230" fill="#ffffff"/><rect x="0" y="180" width="480" height="50" fill="#cdeccf"/><text x="240" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d1a">Merino sheep — selectively bred for fine wool</text><g><ellipse cx="180" cy="120" rx="80" ry="52" fill="#f3efe6" stroke="#b9b09a" stroke-width="2"/><g stroke="#d9d2c0" stroke-width="2"><path d="M120,100 q-6,-8 0,-14"/><path d="M140,90 q-6,-8 0,-14"/><path d="M170,84 q-6,-8 0,-14"/><path d="M200,86 q6,-8 0,-14"/><path d="M230,98 q8,-6 14,-2"/></g><circle cx="252" cy="118" r="26" fill="#efe7d6" stroke="#b9b09a" stroke-width="2"/><circle cx="262" cy="112" r="3" fill="#333"/><path d="M270,124 q8,4 14,0" fill="none" stroke="#333"/><line x1="150" y1="170" x2="150" y2="185" stroke="#7a6a4f" stroke-width="3"/><line x1="210" y1="170" x2="210" y2="185" stroke="#7a6a4f" stroke-width="3"/></g><line x1="160" y1="120" x2="380" y2="80" stroke="#0b7285" stroke-width="1.5"/><circle cx="160" cy="120" r="3" fill="#0b7285"/><text x="385" y="78" font-size="11" fill="#0b7285">fine, dense fleece</text><text x="385" y="92" font-size="10" fill="#5b6b78">(desired trait)</text></svg>',
          },
          caption: 'Merino sheep have been selectively bred over many generations for fine, dense wool.',
        },
      },
      {
        label: 'd',
        text: '**Suggest** how selective breeding might weaken a species\' ability to survive.',
        marks: 2,
        ph: 'Reduction in gene pool/variation; trait desired by humans may negatively affect species; low variation reduces ability to survive changes in environment...',
      },
    ],
  },

  // ── Q4: Diffusion & Potassium Permanganate Investigation (20 marks, A/B/C/D) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion & Investigation Skills',
    topicCanonical: 'Diffusion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 20,
    stem: 'Cells take in molecules from their surroundings to use for energy and as building blocks for other molecules. Cells also produce waste and must move waste products out of the cell. Diffusion is the movement of molecules from a region of high concentration to a region of lower concentration. The students researched methods for measuring this process and decided to design an investigation using blocks of plain agar jelly as a model cell. Agar is a clear gel that coloured molecules can diffuse through.\n\nThe students set up an investigation with three beakers of 1%, 5%, and 15% potassium permanganate solution and cubes of clear agar jelly placed in each. Potassium permanganate is purple and stains the agar as it diffuses in. The students used a reference cube to hold up to the beaker and they stopped timing when they thought the agar cube was the same colour as the reference cube.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="pp1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d7a8e8"/><stop offset="1" stop-color="#8e44ad"/></linearGradient><linearGradient id="pp2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c98fde"/><stop offset="1" stop-color="#7a3697"/></linearGradient><linearGradient id="pp3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b56fce"/><stop offset="1" stop-color="#5e2879"/></linearGradient></defs><rect width="600" height="250" fill="#ffffff"/><text x="300" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#3a1a4a">Agar cubes in potassium permanganate solution</text><g><path d="M50,80 L170,80 L160,210 L60,210 Z" fill="url(#pp1)" opacity="0.55" stroke="#8e44ad"/><rect x="92" y="150" width="38" height="38" fill="#f0e6d2" stroke="#9c8b66"/><text x="110" y="230" font-size="12" text-anchor="middle" fill="#3a1a4a">1%</text></g><g><path d="M240,80 L360,80 L350,210 L250,210 Z" fill="url(#pp2)" opacity="0.7" stroke="#7a3697"/><rect x="282" y="150" width="38" height="38" fill="#e7d6c0" stroke="#9c8b66"/><text x="300" y="230" font-size="12" text-anchor="middle" fill="#3a1a4a">5%</text></g><g><path d="M430,80 L550,80 L540,210 L440,210 Z" fill="url(#pp3)" opacity="0.85" stroke="#5e2879"/><rect x="472" y="150" width="38" height="38" fill="#d8c2a8" stroke="#9c8b66"/><text x="490" y="230" font-size="12" text-anchor="middle" fill="#3a1a4a">15%</text></g><text x="92" y="146" font-size="9" fill="#5b6b78">agar</text></svg>',
      },
      caption: 'Clear agar cubes placed in 1%, 5% and 15% potassium permanganate solution; the purple stain diffuses into the agar.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that describes the movement of potassium permanganate molecules from a region of high concentration to a region of lower concentration.',
        marks: 1,
        ph: 'Select the correct process.',
        widget: 'radio_select',
        widgetOptions: ['Active transport', 'Diffusion', 'Osmosis', 'Transpiration'],
      },
      {
        label: 'b',
        text: 'The potassium permanganate solution used in this investigation is harmful. **Select** the correct hazard sign to label the bottle.',
        marks: 1,
        ph: 'Select Sign C (harmful/exclamation).',
        widget: 'radio_select',
        widgetOptions: ['Sign A', 'Sign B', 'Sign C', 'Sign D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="160" fill="#ffffff"/><g><rect x="22" y="40" width="76" height="76" transform="rotate(45 60 78)" fill="#fff" stroke="#c0392b" stroke-width="4"/><path d="M60,58 l-14,30 l28,0 Z" fill="#c0392b"/><text x="60" y="135" font-size="12" text-anchor="middle" fill="#1f2d3a">Sign A</text></g><g><rect x="152" y="40" width="76" height="76" transform="rotate(45 190 78)" fill="#fff" stroke="#000" stroke-width="4"/><circle cx="190" cy="70" r="8" fill="none" stroke="#000" stroke-width="3"/><line x1="190" y1="70" x2="190" y2="92" stroke="#000" stroke-width="3"/><text x="190" y="135" font-size="12" text-anchor="middle" fill="#1f2d3a">Sign B</text></g><g><rect x="282" y="40" width="76" height="76" transform="rotate(45 320 78)" fill="#fff" stroke="#000" stroke-width="4"/><text x="320" y="86" font-size="34" text-anchor="middle" font-weight="700" fill="#000">!</text><text x="320" y="135" font-size="12" text-anchor="middle" fill="#1f2d3a">Sign C</text></g><g><rect x="412" y="40" width="76" height="76" transform="rotate(45 450 78)" fill="#fff" stroke="#000" stroke-width="4"/><circle cx="450" cy="78" r="14" fill="none" stroke="#000" stroke-width="3"/><line x1="438" y1="66" x2="462" y2="90" stroke="#000" stroke-width="3"/><text x="450" y="135" font-size="12" text-anchor="middle" fill="#1f2d3a">Sign D</text></g></svg>',
          },
          caption: 'Four hazard pictograms. One indicates a harmful/irritant substance.',
        },
      },
      {
        label: 'c',
        text: '**Suggest** two precautions that the students should take before using potassium permanganate solution.',
        marks: 2,
        ph: 'Use gloves; use safety glasses...',
      },
      {
        label: 'd',
        text: '**State** the problem being tested by this experiment.',
        marks: 3,
        ph: 'Does the concentration of potassium permanganate solution affect the time taken for it to diffuse into the agar cube?',
      },
      {
        label: 'e',
        text: '**Formulate** a testable prediction for this experiment.',
        marks: 1,
        ph: 'If concentration of potassium permanganate increases, then the rate of diffusion will increase...',
      },
      {
        label: 'f',
        text: '**Identify** the variables in this investigation. For each variable, **outline** how this variable is manipulated.',
        marks: 6,
        ph: 'IV: concentration of potassium permanganate (1%, 5%, 15%). DV: time for stain to diffuse (cube to match reference colour). CV1: temperature (keep constant). CV2: volume of solution / size of agar cube...',
      },
      {
        label: 'g',
        text: '**State and justify** how many trials should be conducted for this experiment in order to collect sufficient data.',
        marks: 2,
        ph: 'At least three trials; average can be calculated / anomalous data identified for statistical analysis...',
      },
      {
        label: 'h',
        text: '**Design** a table to collect sufficient data for this investigation.',
        marks: 3,
        ph: 'Table with at least 3 rows (for concentrations), at least 3 trial columns, labels including units...',
      },
      {
        label: 'i',
        text: '**Suggest** one weakness in the method.',
        marks: 1,
        ph: 'Determining when the cube matched the reference colour could be subjective; concentrations not changed in equal increments...',
      },
    ],
  },

  // ── Q5: Osmosis & Sucrose Concentration Data Analysis (21 marks, Criterion C) ──
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Osmosis Data Analysis — Sucrose Concentration',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'Osmosis is the movement of water molecules across a semi-permeable membrane from a region of low concentration of dissolved substances to a region of high concentration of dissolved substances. The movement of water molecules will cease until the concentration of dissolved substances on both sides of the membrane are equal. The students wanted to investigate whether the rate of osmosis was related to the concentration of sugar in the surrounding solution. The students decided to use dialysis tubing as a model cell. Dialysis tubing is a semi-permeable membrane used in separation techniques.\n\nThe students planned to use dialysis tubing, beakers, a balance, a measuring cylinder and a timer. They filled each tube with the same 10% starch solution and placed each tube in a beaker of pure water surrounded by a different external sucrose concentration. They measured the mass change after 10 minutes. The start of the experiment is shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wtr5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d7eef8"/><stop offset="1" stop-color="#aad6ec"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#13405f">Dialysis tubing in sucrose solutions of different concentration</text><g><path d="M60,70 L170,70 L162,210 L68,210 Z" fill="url(#wtr5)" stroke="#5fa8cc"/><rect x="100" y="80" width="30" height="120" rx="14" fill="#fdf6dc" stroke="#caa84a" stroke-width="2"/><text x="115" y="230" font-size="11" text-anchor="middle" fill="#13405f">low sucrose</text></g><g><path d="M230,70 L340,70 L332,210 L238,210 Z" fill="url(#wtr5)" stroke="#5fa8cc"/><rect x="270" y="80" width="30" height="120" rx="14" fill="#fdf6dc" stroke="#caa84a" stroke-width="2"/><text x="285" y="230" font-size="11" text-anchor="middle" fill="#13405f">medium sucrose</text></g><g><path d="M400,70 L510,70 L502,210 L408,210 Z" fill="url(#wtr5)" stroke="#5fa8cc"/><rect x="440" y="80" width="30" height="120" rx="14" fill="#fdf6dc" stroke="#caa84a" stroke-width="2"/><text x="455" y="230" font-size="11" text-anchor="middle" fill="#13405f">high sucrose</text></g><text x="100" y="76" font-size="9" fill="#5b6b78">tubing</text></svg>',
      },
      caption: 'Identical dialysis tubes filled with 10% starch solution, each placed in a beaker with a different external sucrose concentration.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the problem being studied in this investigation.',
        marks: 1,
        ph: 'Whether the external sucrose concentration affects the rate of movement of water molecules across a membrane...',
      },
      {
        label: 'b',
        text: '**Outline** how the rate of osmosis is determined and **formulate** the unit for the rate of osmosis.',
        marks: 3,
        ph: 'Change in mass over a fixed time period used to determine rate; unit = g min⁻¹ or g s⁻¹...',
      },
      {
        label: 'c',
        text: 'Complete the table below by **calculating** the missing value.\n\n(Negligible: very small and not important)\n\n| External sucrose conc. / % | Avg initial mass / g | Avg final mass / g | Increase in mass after 10 min / g | Rate of osmosis / unit formulated in (b) |\n|---|---|---|---|---|\n| 0 | 9.80 | 9.81 | 0.01 | Negligible |\n| 2 | 9.94 | 10.74 | 0.80 | 0.08 |\n| 4 | 10.02 | 11.13 | 1.11 | **?** |\n| 6 | 10.20 | 11.50 | 1.30 | 0.13 |\n| 8 | 10.40 | 11.90 | 1.50 | 0.15 |',
        marks: 2,
        ph: 'Rate at 4% = 0.11(1) g min⁻¹; accept 0.11 with correct significant figures...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['External sucrose conc. / %', 'Avg initial mass / g', 'Avg final mass / g', 'Increase in mass after 10 min / g', 'Rate of osmosis / g min⁻¹'],
            rows: [
              ['0', '9.80', '9.81', '0.01', 'Negligible'],
              ['2', '9.94', '10.74', '0.80', '0.08'],
              ['4', '10.02', '11.13', '1.11', '?'],
              ['6', '10.20', '11.50', '1.30', '0.13'],
              ['8', '10.40', '11.90', '1.50', '0.15'],
            ],
          },
          caption: 'Mass change of the dialysis tubes after 10 minutes at five external sucrose concentrations.',
        },
      },
      {
        label: 'd',
        text: '**Present** the data from the table in a graph.',
        marks: 4,
        ph: 'y-axis: rate of osmosis (unit from b), evenly spaced increments, all points plotted correctly, ignore point (0,0)...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Rate of osmosis vs external sucrose concentration',
            xLabel: 'External sucrose concentration',
            xUnit: '%',
            yLabel: 'Rate of osmosis',
            yUnit: 'g min⁻¹',
            dataPoints: [
              { x: 0, y: 0 },
              { x: 2, y: 0.08 },
              { x: 4, y: 0.11 },
              { x: 6, y: 0.13 },
              { x: 8, y: 0.15 },
            ],
            xMin: 0, xMax: 8, yMin: 0, yMax: 0.16, xStep: 2, yStep: 0.02,
          },
          caption: 'Students\' data: rate of osmosis increases with external sucrose concentration.',
        },
      },
      {
        label: 'e',
        text: 'After conducting their own investigation, the students researched other investigations to see if they matched similar conclusions. The students found a similar graph from a local university — that graph is shown below.\n\nScroll back to your graph in part (d) and **compare and contrast** the trend in the students\' data in part (d) with the graph of the university data.',
        marks: 4,
        ph: 'Both show similar increasing trend up to 8%; both increase at similar rate; university shows plateau above 8%; student data has no measurements above 8%...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'University data: rate of osmosis vs sucrose concentration',
            xLabel: 'External sucrose concentration',
            xUnit: '%',
            yLabel: 'Rate of osmosis',
            yUnit: 'g min⁻¹',
            dataPoints: [
              { x: 0, y: 0 },
              { x: 2, y: 0.08 },
              { x: 4, y: 0.11 },
              { x: 6, y: 0.13 },
              { x: 8, y: 0.15 },
              { x: 10, y: 0.16 },
              { x: 12, y: 0.16 },
            ],
            xMin: 0, xMax: 12, yMin: 0, yMax: 0.18, xStep: 2, yStep: 0.02,
          },
          caption: 'University data: the rate rises then plateaus above an external sucrose concentration of about 8%.',
        },
      },
      {
        label: 'f',
        text: '**Explain** one scientific reason for the trend shown in the university data.',
        marks: 4,
        ph: 'As external sucrose concentration increases, the concentration gradient across the membrane increases; water moves faster by osmosis; rate increases; above 8% the gradient is so large the membrane reaches its maximum/equilibrium so rate becomes constant; OR term concentration gradient / equilibrium / osmotic pressure used correctly...',
      },
      {
        label: 'g',
        text: '**State** whether the students\' method is valid based on comparison of their data with the university data. **Justify** your answer.',
        marks: 1,
        ph: 'Valid because trends match (below 8%) OR data / results were similar; not valid because no measurements above 8%...',
      },
      {
        label: 'h',
        text: '**Suggest** one extension **and** one improvement to this investigation.',
        marks: 2,
        ph: 'Extension: increase concentration range / investigate a different solute. Improvement: fill in missing increments / increase duration of each trial...',
      },
    ],
  },

  // ── Q6: Investigation Design — Temperature & Osmosis in Carrot Cores (17 marks, B) ─
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Osmosis & Carrots',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 17,
    stem: 'The students then decided to study how molecules moved in and out of real cells. They decided to use cores cut from carrots to show how temperature is related to the movement of water in carrot cells.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wtr6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d7eef8"/><stop offset="1" stop-color="#aad6ec"/></linearGradient></defs><rect width="560" height="230" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#13405f">Carrot cores in water baths at different temperatures</text><g><path d="M60,80 L160,80 L154,200 L66,200 Z" fill="url(#wtr6)" stroke="#5fa8cc"/><rect x="100" y="100" width="20" height="80" rx="6" fill="#f08c00" stroke="#b8690a"/><text x="110" y="218" font-size="11" text-anchor="middle" fill="#13405f">5 °C</text></g><g><path d="M230,80 L330,80 L324,200 L236,200 Z" fill="url(#wtr6)" stroke="#5fa8cc"/><rect x="270" y="100" width="20" height="80" rx="6" fill="#f08c00" stroke="#b8690a"/><text x="280" y="218" font-size="11" text-anchor="middle" fill="#13405f">20 °C</text></g><g><path d="M400,80 L500,80 L494,200 L406,200 Z" fill="url(#wtr6)" stroke="#5fa8cc"/><rect x="440" y="100" width="20" height="80" rx="6" fill="#f08c00" stroke="#b8690a"/><text x="450" y="218" font-size="11" text-anchor="middle" fill="#13405f">35 °C</text></g><text x="100" y="96" font-size="9" fill="#5b6b78">carrot core</text></svg>',
      },
      caption: 'Equal-sized carrot cores placed in water at different temperatures to investigate osmosis.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the equipment needed for this investigation. Click the "Palette Image Library" button to display the equipment available.',
        marks: 2,
        ph: 'Balance/ruler, carrot, beaker, thermometer, flask of distilled water, cork borer/knife, ice, kettle, paper towels, goggles — any three correct...',
      },
      {
        label: 'b',
        text: '**Design** an investigation to study how temperature is related to osmosis in carrot cells. In your investigation, you should include:\n\n- an identification of the independent, dependent and control variables\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- a description of your method\n- how you will ensure your method is safe',
        marks: 15,
        ph: 'IV: temperature (e.g. 5,10,15,20,35°C). DV: change in mass of carrot core. CV: volume of solution, size of carrot core, type of solution, time. Hypothesis: as temperature increases, rate of osmosis increases (until equilibrium). Method: cut equal carrot cores, place in water at different temperatures, measure mass before and after 10 min, 3 repeats. Safety: handle cork borer/knife carefully, goggles for hot water...',
      },
    ],
  },

  // ── Q7: Balanced Diet & Nutrients (4 marks, Criterion A/C) ───────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Balanced Diet & Macronutrients',
    topicCanonical: 'Nutrition',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion'],
    marks: 4,
    stem: 'Living organisms need a balanced diet to remain healthy. A balanced diet should include the following nutrients: fat, carbohydrate, protein, minerals and vitamins.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the appropriate function for each nutrient.',
        marks: 3,
        ph: 'Carbohydrate→quick energy; Fat→long-term storage & insulation; Minerals & vitamins→support metabolism; Protein→body structures & cell functions.',
        widget: 'match_drag_drop',
        widgetItems: ['Carbohydrate', 'Fat', 'Minerals and vitamins', 'Protein'],
        widgetOptions: [
          'Quick energy release',
          'Long term energy storage and insulation',
          'Supports metabolism',
          'Body structures and cell functions',
        ],
      },
      {
        label: 'b',
        text: 'Diets are varied across the globe but all balanced diets need to contain a certain percentage of protein. The recommended mass of protein needed each day for an average sized adult is 51 g.\n\nUse the information in the graph to **identify** the food with the highest percentage of protein.',
        marks: 1,
        ph: 'Soybeans...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="280" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d1a">Protein content of selected foods</text><line x1="120" y1="50" x2="120" y2="230" stroke="#333" stroke-width="2"/><line x1="120" y1="230" x2="490" y2="230" stroke="#333" stroke-width="2"/><g font-size="10" fill="#5b6b78"><text x="112" y="234" text-anchor="end">0</text><text x="112" y="194" text-anchor="end">10</text><text x="112" y="154" text-anchor="end">20</text><text x="112" y="114" text-anchor="end">30</text><text x="112" y="74" text-anchor="end">40</text></g><line x1="115" y1="190" x2="490" y2="190" stroke="#e5e5e5"/><line x1="115" y1="150" x2="490" y2="150" stroke="#e5e5e5"/><line x1="115" y1="110" x2="490" y2="110" stroke="#e5e5e5"/><line x1="115" y1="70" x2="490" y2="70" stroke="#e5e5e5"/><text x="40" y="145" font-size="11" fill="#1f3d1a" transform="rotate(-90 40 145)" text-anchor="middle">Protein / %</text><g><rect x="140" y="158" width="50" height="72" fill="#37b24d"/><text x="165" y="246" font-size="10" text-anchor="middle" fill="#1f3d1a">lentils</text><text x="165" y="152" font-size="9" text-anchor="middle" fill="#1f6b2c">18</text></g><g><rect x="210" y="118" width="50" height="112" fill="#2f9e44"/><text x="235" y="246" font-size="10" text-anchor="middle" fill="#1f3d1a">eggs</text><text x="235" y="112" font-size="9" text-anchor="middle" fill="#1f6b2c">28</text></g><g><rect x="280" y="86" width="50" height="144" fill="#0b7285"/><text x="305" y="246" font-size="10" text-anchor="middle" fill="#1f3d1a">soybeans</text><text x="305" y="80" font-size="9" text-anchor="middle" fill="#0b5163">36</text></g><g><rect x="350" y="138" width="50" height="92" fill="#37b24d"/><text x="375" y="246" font-size="10" text-anchor="middle" fill="#1f3d1a">tofu</text><text x="375" y="132" font-size="9" text-anchor="middle" fill="#1f6b2c">23</text></g><g><rect x="420" y="174" width="50" height="56" fill="#37b24d"/><text x="445" y="246" font-size="10" text-anchor="middle" fill="#1f3d1a">rice</text><text x="445" y="168" font-size="9" text-anchor="middle" fill="#1f6b2c">14</text></g></svg>',
          },
          caption: 'Percentage of protein in five plant-based and protein-rich foods.',
        },
      },
    ],
  },

  // ── Q8: Cultured (Lab-Grown) Seafood Production (16 marks, Criterion D) ───────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Cultured Seafood & Intensive Fishing — Evaluate',
    topicCanonical: 'Cloning',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 16,
    stem: 'The video shows how scientific innovation is being used to produce protein-rich foods without farming or catching live animals. Scientists take a small sample of muscle cells from a fish and grow them in a nutrient broth inside a bioreactor. From one sample, many millions of cells can be grown. The new muscle tissue is then shaped into cultured (lab-grown) fish fillets.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the implications of using cultured (lab-grown) seafood production to address unsustainable industrial fishing and fish farming. In your answer, you should consider:\n\n- the impacts of industrial fishing and intensive fish farming\n- the strengths and limitations of cultured seafood production\n- the environmental considerations of both industrial fishing and cultured production\n- the ethical issues involved in both industrial fishing and cultured production\n- a concluding appraisal.',
        marks: 16,
        ph: 'Impacts: overfishing, bycatch, habitat damage, ocean pollution from fish farms. Strengths: no overfishing, no bycatch, less ocean pollution; Limitations: expensive, energy-intensive, unfamiliar. Environmental: fishing depletes stocks/damages seabed, culturing uses less ocean but needs energy. Ethical: fishing welfare/overexploitation, cultured artificial. Appraisal: cultured seafood could protect fish stocks but cost and acceptability are barriers...',
      },
    ],
  },

  // ── Q9: Lab-Grown Organs from Stem Cells (9 marks, Criterion D) ──────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Lab-Grown Organs — Scientific Implications',
    topicCanonical: '3D Tissue & Organ Printing',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 9,
    stem: 'Growing whole organs in the laboratory from a patient\'s own stem cells has been suggested as a new source of body tissue for people with medical conditions requiring a transplant. Currently people requiring replacement body tissue must rely on transplanted material from a matching donor.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the scientific implications of replacing traditional transplantation techniques with organs grown in the laboratory from a patient\'s own stem cells. In your answer, you should include:\n\n- the advantages of lab-grown organs for transplant patients\n- the disadvantages of lab-grown organs for transplant patients\n- a concluding appraisal.',
        marks: 9,
        ph: 'Advantages: no need for matching donor, grown from patient\'s own cells so less rejection risk, no waiting list. Disadvantages: expensive, only some tissues can be grown so far, not fully tested, slow to grow. Appraisal: promising technology but not yet ready for widespread use...',
      },
    ],
  },
]
