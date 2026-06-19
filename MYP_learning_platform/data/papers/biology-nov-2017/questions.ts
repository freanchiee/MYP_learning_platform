import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2017',
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
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="280" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A plant cell in three different solutions</text><!-- Diagram A: hypotonic / turgid --><g><text x="110" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Diagram A — hypotonic</text><rect x="40" y="60" width="140" height="120" rx="6" fill="#d8eef2" stroke="#2b7a86" stroke-width="3"/><rect x="50" y="70" width="120" height="100" rx="4" fill="#cdeccf" stroke="#3a8c46" stroke-width="2"/><rect x="60" y="80" width="100" height="80" rx="3" fill="#bfe2ff" stroke="#1971c2" stroke-width="1.5"/><text x="110" y="124" font-size="10" text-anchor="middle" fill="#1971c2">large vacuole</text><text x="110" y="138" font-size="10" text-anchor="middle" fill="#1971c2">full of water</text><path d="M30 100 L48 110" stroke="#1971c2" stroke-width="2" marker-end="url(#ar)"/><path d="M30 140 L48 130" stroke="#1971c2" stroke-width="2" marker-end="url(#ar)"/><text x="14" y="116" font-size="11" fill="#1971c2">H₂O</text><text x="110" y="200" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">TURGID</text><text x="110" y="216" font-size="9" text-anchor="middle" fill="#64748b">net water IN; cell firm</text></g><!-- Diagram B: isotonic / flaccid --><g><text x="320" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Diagram B — isotonic</text><rect x="250" y="60" width="140" height="120" rx="6" fill="#d8eef2" stroke="#2b7a86" stroke-width="3"/><rect x="262" y="74" width="116" height="92" rx="4" fill="#cdeccf" stroke="#3a8c46" stroke-width="2"/><rect x="276" y="88" width="88" height="64" rx="3" fill="#bfe2ff" stroke="#1971c2" stroke-width="1.5"/><path d="M240 100 L262 100" stroke="#94a3b8" stroke-width="2" marker-end="url(#ar2)"/><path d="M400 140 L378 140" stroke="#94a3b8" stroke-width="2" marker-end="url(#ar2)"/><text x="224" y="104" font-size="11" fill="#64748b">H₂O</text><text x="320" y="200" font-size="12" font-weight="700" text-anchor="middle" fill="#e8950c">FLACCID</text><text x="320" y="216" font-size="9" text-anchor="middle" fill="#64748b">water in = out; no net change</text></g><!-- Diagram C: hypertonic / plasmolysed --><g><text x="530" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Diagram C — hypertonic</text><rect x="460" y="60" width="140" height="120" rx="6" fill="#d8eef2" stroke="#2b7a86" stroke-width="3"/><path d="M482 88 Q470 130 486 162 Q530 150 574 162 Q586 122 570 90 Q530 104 482 88 Z" fill="#cdeccf" stroke="#3a8c46" stroke-width="2"/><path d="M500 104 Q495 130 506 148 Q530 140 554 148 Q560 122 550 106 Q530 116 500 104 Z" fill="#bfe2ff" stroke="#1971c2" stroke-width="1.5"/><path d="M620 100 L598 108" stroke="#c2255c" stroke-width="2" marker-end="url(#ar3)"/><path d="M620 140 L598 132" stroke="#c2255c" stroke-width="2" marker-end="url(#ar3)"/><text x="604" y="116" font-size="11" fill="#c2255c">H₂O</text><text x="530" y="200" font-size="12" font-weight="700" text-anchor="middle" fill="#c2255c">PLASMOLYSED</text><text x="530" y="216" font-size="9" text-anchor="middle" fill="#64748b">net water OUT; membrane pulls away</text></g><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#1971c2"/></marker><marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#94a3b8"/></marker><marker id="ar3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#c2255c"/></marker></defs><text x="320" y="250" font-size="10" text-anchor="middle" fill="#94a3ad">Outer green border = cell wall; inner blue = vacuole. Arrows show net water movement by osmosis.</text></svg>',
      },
      caption: 'A plant cell placed in hypotonic, isotonic and hypertonic solutions. Identify which diagram shows the turgid cell.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The animation shows different diagrams of water moving in and out of a plant cell.\n\n**Select** the diagram that correctly shows the movement of water molecules when a plant cell is turgid.',
        marks: 1,
        ph: 'Select the correct diagram.',
        widget: 'radio_select',
        widgetOptions: ['Diagram A', 'Diagram B', 'Diagram C'],
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
        text: 'Many environmental factors impact on the transpiration rate of plants. Marram grass is a plant that has had to adapt to dry and windy conditions.\n\nThe image shows that the leaves of marram grass are curled inward, the inner surface is quite thick, and the stomata are sunken so that stomata are also surrounded by hairs.\n\n**Explain** how one adaptation of the marram leaf reduces water loss by transpiration. You should include scientific knowledge and understanding in your answer.',
        marks: 4,
        ph: 'Curled leaves / sunken stomata / waxy cuticle; trapped water vapour / humid microclimate; reduces evaporation/transpiration rate...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of a rolled marram grass leaf</text><!-- rolled leaf outline --><path d="M280 50 C120 60 90 230 230 280 C250 290 270 290 280 286 C290 290 310 290 330 280 C470 230 440 60 280 50 Z" fill="#cdeccf" stroke="#2f9e44" stroke-width="3"/><!-- inner rolled cavity --><path d="M280 96 C200 104 188 220 270 252 C276 256 284 256 290 252 C372 220 360 104 280 96 Z" fill="#eaf7ec" stroke="#3a8c46" stroke-width="1.5"/><text x="280" y="186" font-size="11" text-anchor="middle" fill="#2f9e44">enclosed</text><text x="280" y="200" font-size="11" text-anchor="middle" fill="#2f9e44">humid air space</text><!-- thick waxy cuticle on outer (lower) epidermis --><path d="M280 50 C120 60 90 230 230 280" fill="none" stroke="#7a5c12" stroke-width="6" opacity="0.8"/><text x="92" y="160" font-size="10" fill="#7a5c12">thick waxy</text><text x="92" y="174" font-size="10" fill="#7a5c12">cuticle (outer)</text><!-- sunken stomata on inner surface with hairs --><g stroke="#1971c2" stroke-width="1.5"><circle cx="250" cy="150" r="5" fill="#bfe2ff"/><circle cx="262" cy="210" r="5" fill="#bfe2ff"/><circle cx="306" cy="150" r="5" fill="#bfe2ff"/><circle cx="298" cy="210" r="5" fill="#bfe2ff"/></g><text x="392" y="150" font-size="10" fill="#1971c2">sunken stomata</text><line x1="392" y1="145" x2="312" y2="150" stroke="#1971c2" stroke-width="1" stroke-dasharray="3 2"/><!-- hairs --><g stroke="#9c6b16" stroke-width="1.2"><line x1="256" y1="150" x2="266" y2="160"/><line x1="268" y1="210" x2="278" y2="200"/><line x1="300" y1="150" x2="290" y2="160"/><line x1="292" y1="210" x2="282" y2="200"/></g><text x="392" y="210" font-size="10" fill="#9c6b16">leaf hairs trap</text><text x="392" y="224" font-size="10" fill="#9c6b16">water vapour</text><line x1="392" y1="206" x2="306" y2="210" stroke="#9c6b16" stroke-width="1" stroke-dasharray="3 2"/><text x="280" y="306" font-size="10" text-anchor="middle" fill="#94a3ad">Rolling, sunken stomata, hairs and a thick cuticle all trap humid air and cut evaporation.</text></svg>',
          },
          caption: 'Cross-section of the rolled marram leaf showing the adaptations that reduce transpiration.',
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
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Tropisms — growth toward or away from a stimulus</text><!-- soil line --><line x1="40" y1="170" x2="520" y2="170" stroke="#9c6b16" stroke-width="2"/><rect x="40" y="170" width="480" height="70" fill="#f3e4c7" opacity="0.6"/><text x="500" y="186" font-size="10" text-anchor="end" fill="#9c6b16">soil</text><!-- shoot: positive phototropism, negative gravitropism --><path d="M180 170 C178 130 176 96 200 70" fill="none" stroke="#2f9e44" stroke-width="6" stroke-linecap="round"/><path d="M200 70 l-14 4 m14 -4 l-4 14" stroke="#2f9e44" stroke-width="3" fill="none"/><text x="120" y="86" font-size="11" font-weight="700" fill="#2f9e44">SHOOT</text><text x="120" y="102" font-size="10" fill="#475569">grows up, toward light</text><text x="120" y="116" font-size="10" fill="#475569">• positive phototropism</text><text x="120" y="130" font-size="10" fill="#475569">• negative gravitropism</text><!-- sun --><circle cx="498" cy="60" r="18" fill="#ffd43b" stroke="#f08c00" stroke-width="2"/><g stroke="#f08c00" stroke-width="2"><line x1="468" y1="60" x2="200" y2="68"/></g><text x="498" y="92" font-size="10" text-anchor="middle" fill="#f08c00">light</text><!-- roots: positive gravitropism, positive hydrotropism --><path d="M180 170 C182 200 184 220 168 236" fill="none" stroke="#9c6b16" stroke-width="5" stroke-linecap="round"/><path d="M180 190 C190 206 200 214 214 224" fill="none" stroke="#9c6b16" stroke-width="4" stroke-linecap="round"/><text x="300" y="206" font-size="11" font-weight="700" fill="#9c6b16">ROOTS</text><text x="300" y="220" font-size="10" fill="#475569">grow down, toward water</text><text x="300" y="234" font-size="10" fill="#475569">• positive gravitropism</text><!-- gravity arrow --><path d="M70 60 L70 150" stroke="#64748b" stroke-width="2" marker-end="url(#g)"/><text x="70" y="50" font-size="10" text-anchor="middle" fill="#64748b">gravity</text><defs><marker id="g" markerWidth="9" markerHeight="9" refX="4" refY="7" orient="auto"><path d="M0 0 L4 7 L8 0 Z" fill="#64748b"/></marker></defs><text x="280" y="282" font-size="10" text-anchor="middle" fill="#94a3ad">A single plant shows BOTH positive and negative tropism to the same stimulus (gravity).</text></svg>',
      },
      caption: 'Shoots and roots of one plant respond in opposite directions to light and gravity.',
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
        ph: 'Stem: positive tropism — grows upward / toward light; leaves exposed to light. Roots: negative tropism — grow downward; absorb water/nutrients; form stable root structure...',
      },
      {
        label: 'c',
        text: 'Mimosa pudica is a low-growing plant that responds to touch by closing its leaves.\n\n**Suggest** how this type of tropism might improve chances of survival for this plant.',
        marks: 3,
        ph: 'Touch causes leaves to close so cannot be eaten; gives wilted unappealing appearance; predators confused; improved chance of survival with more photosynthetic tissue...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="240" fill="#ffffff"/><text x="270" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mimosa pudica — thigmonasty (touch response)</text><!-- BEFORE: open leaflets --><text x="150" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">Before touch — leaflets OPEN</text><line x1="60" y1="170" x2="240" y2="120" stroke="#3a8c46" stroke-width="3"/><g stroke="#2f9e44" stroke-width="1.5" fill="#cdeccf"><ellipse cx="96" cy="148" rx="11" ry="5" transform="rotate(-15 96 148)"/><ellipse cx="96" cy="160" rx="11" ry="5" transform="rotate(15 96 160)"/><ellipse cx="128" cy="140" rx="11" ry="5" transform="rotate(-15 128 140)"/><ellipse cx="128" cy="152" rx="11" ry="5" transform="rotate(15 128 152)"/><ellipse cx="160" cy="132" rx="11" ry="5" transform="rotate(-15 160 132)"/><ellipse cx="160" cy="144" rx="11" ry="5" transform="rotate(15 160 144)"/><ellipse cx="192" cy="124" rx="11" ry="5" transform="rotate(-15 192 124)"/><ellipse cx="192" cy="136" rx="11" ry="5" transform="rotate(15 192 136)"/></g><text x="150" y="200" font-size="10" text-anchor="middle" fill="#64748b">broad surface exposed for photosynthesis</text><!-- arrow --><path d="M258 145 L300 145" stroke="#c2255c" stroke-width="3" marker-end="url(#t)"/><text x="279" y="135" font-size="10" text-anchor="middle" fill="#c2255c">touch</text><defs><marker id="t" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#c2255c"/></marker></defs><!-- AFTER: closed leaflets --><text x="410" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#9c6b16">After touch — leaflets FOLD</text><line x1="320" y1="170" x2="500" y2="120" stroke="#9c6b16" stroke-width="3"/><g stroke="#9c6b16" stroke-width="1.5" fill="#e7d4a8"><ellipse cx="358" cy="150" rx="6" ry="3" transform="rotate(60 358 150)"/><ellipse cx="362" cy="150" rx="6" ry="3" transform="rotate(60 362 150)"/><ellipse cx="390" cy="142" rx="6" ry="3" transform="rotate(60 390 142)"/><ellipse cx="394" cy="142" rx="6" ry="3" transform="rotate(60 394 142)"/><ellipse cx="422" cy="134" rx="6" ry="3" transform="rotate(60 422 134)"/><ellipse cx="426" cy="134" rx="6" ry="3" transform="rotate(60 426 134)"/><ellipse cx="454" cy="126" rx="6" ry="3" transform="rotate(60 454 126)"/><ellipse cx="458" cy="126" rx="6" ry="3" transform="rotate(60 458 126)"/></g><text x="410" y="200" font-size="10" text-anchor="middle" fill="#64748b">leaflets collapse — looks wilted, less to eat</text><text x="270" y="228" font-size="10" text-anchor="middle" fill="#94a3ad">Rapid folding deters herbivores and may dislodge insects.</text></svg>',
          },
          caption: 'Mimosa pudica folds its leaflets within seconds of being touched.',
        },
      },
      {
        label: 'd',
        text: 'In 1880, Charles Darwin and his son Francis Darwin carried out a famous experiment on plant tropism. Their experimental set-up is shown in the image.\n\n**Describe** what the results in the picture indicate about the response of plants to light.',
        marks: 3,
        ph: 'Stalk/plant bends toward light; only if the tip is exposed to light; light is perceived at the tip...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="280" fill="#ffffff"/><text x="320" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">The Darwins’ 1880 phototropism experiment</text><!-- light source on left --><circle cx="26" cy="120" r="16" fill="#ffd43b" stroke="#f08c00" stroke-width="2"/><text x="26" y="150" font-size="10" text-anchor="middle" fill="#f08c00">light</text><g stroke="#f6c343" stroke-width="2"><line x1="44" y1="120" x2="600" y2="120"/></g><!-- soil --><line x1="70" y1="230" x2="620" y2="230" stroke="#9c6b16" stroke-width="2"/><rect x="70" y="230" width="550" height="40" fill="#f3e4c7" opacity="0.6"/><!-- 1 Control: bends toward light --><g><path d="M120 230 C118 180 116 150 100 132" fill="none" stroke="#2f9e44" stroke-width="6" stroke-linecap="round"/><text x="116" y="252" font-size="9" text-anchor="middle" fill="#475569">1 Control</text><text x="116" y="265" font-size="9" font-weight="700" text-anchor="middle" fill="#2f9e44">bends</text></g><!-- 2 Tip removed: no bending --><g><line x1="225" y1="230" x2="225" y2="150" stroke="#2f9e44" stroke-width="6" stroke-linecap="round"/><line x1="216" y1="150" x2="234" y2="150" stroke="#c2255c" stroke-width="3"/><text x="225" y="252" font-size="9" text-anchor="middle" fill="#475569">2 Tip removed</text><text x="225" y="265" font-size="9" font-weight="700" text-anchor="middle" fill="#c2255c">no bend</text></g><!-- 3 Opaque cap on tip: no bending --><g><line x1="330" y1="230" x2="330" y2="148" stroke="#2f9e44" stroke-width="6" stroke-linecap="round"/><rect x="322" y="132" width="16" height="18" rx="3" fill="#343a40"/><text x="330" y="252" font-size="9" text-anchor="middle" fill="#475569">3 Opaque tip cap</text><text x="330" y="265" font-size="9" font-weight="700" text-anchor="middle" fill="#c2255c">no bend</text></g><!-- 4 Transparent cap on tip: bends --><g><path d="M440 230 C438 180 436 150 420 132" fill="none" stroke="#2f9e44" stroke-width="6" stroke-linecap="round"/><rect x="412" y="120" width="16" height="18" rx="3" fill="none" stroke="#1971c2" stroke-width="2"/><text x="440" y="252" font-size="9" text-anchor="middle" fill="#475569">4 Clear tip cap</text><text x="440" y="265" font-size="9" font-weight="700" text-anchor="middle" fill="#2f9e44">bends</text></g><!-- 5 Opaque shield on base: bends --><g><path d="M555 230 C553 180 551 150 535 132" fill="none" stroke="#2f9e44" stroke-width="6" stroke-linecap="round"/><rect x="545" y="180" width="18" height="40" rx="2" fill="#343a40"/><text x="556" y="252" font-size="9" text-anchor="middle" fill="#475569">5 Opaque base shield</text><text x="556" y="265" font-size="9" font-weight="700" text-anchor="middle" fill="#2f9e44">bends</text></g></svg>',
          },
          caption: 'Five coleoptiles lit from the left. The plant only bends toward the light when its TIP is exposed.',
        },
      },
      {
        label: 'e',
        text: 'Other researchers studied this behaviour further. The tips of two plants were separated from their bases with a thin sheet of mica. The mica on one plant was placed on the same side as the light source. The mica on the other plant was placed on the opposite side of the stem from the light source. Mica is a non-permeable material.\n\nBased on these results, the researchers concluded that the response was the result of the movement of a substance from the tip of the plant toward the base on the shaded side of the stalk.\n\nUse scientific knowledge and understanding to **justify** how these results support the conclusion.',
        marks: 4,
        ph: 'On shaded side, mica blocked substance from tip; plant did not bend; mica on lit side did not affect bending; so plant grew toward light...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">The mica experiment — blocking the substance from the tip</text><!-- light --><circle cx="24" cy="150" r="15" fill="#ffd43b" stroke="#f08c00" stroke-width="2"/><text x="24" y="178" font-size="10" text-anchor="middle" fill="#f08c00">light</text><g stroke="#f6c343" stroke-width="2"><line x1="40" y1="150" x2="560" y2="150"/></g><!-- soil --><line x1="80" y1="250" x2="560" y2="250" stroke="#9c6b16" stroke-width="2"/><rect x="80" y="250" width="480" height="36" fill="#f3e4c7" opacity="0.6"/><!-- Plant A: mica on LIT side (left) -> still bends --><g><text x="190" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Plant A — mica on LIT side</text><path d="M190 250 C188 200 186 170 168 150" fill="none" stroke="#2f9e44" stroke-width="7" stroke-linecap="round"/><rect x="170" y="196" width="16" height="4" fill="#6741d9"/><text x="150" y="194" font-size="9" fill="#6741d9">mica</text><text x="190" y="272" font-size="10" text-anchor="middle" fill="#2f9e44" font-weight="700">curves toward light</text><text x="190" y="286" font-size="9" text-anchor="middle" fill="#475569">shaded side free — substance passes</text></g><!-- Plant B: mica on SHADED side (right) -> no bend --><g><text x="430" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Plant B — mica on SHADED side</text><line x1="430" y1="250" x2="430" y2="150" stroke="#2f9e44" stroke-width="7" stroke-linecap="round"/><rect x="434" y="196" width="16" height="4" fill="#6741d9"/><text x="468" y="194" font-size="9" fill="#6741d9">mica</text><text x="430" y="272" font-size="10" text-anchor="middle" fill="#c2255c" font-weight="700">no curvature</text><text x="430" y="286" font-size="9" text-anchor="middle" fill="#475569">shaded side blocked — substance stopped</text></g><text x="300" y="118" font-size="10" text-anchor="middle" fill="#94a3ad">Mica is non-permeable. Blocking the shaded side stops the bending — the substance travels down the shaded side.</text></svg>',
          },
          caption: 'Mica on the shaded side (Plant B) prevents bending; mica on the lit side (Plant A) does not.',
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
        svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="360" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A generalised animal cell</text><!-- cytoplasm / membrane --><ellipse cx="290" cy="195" rx="200" ry="130" fill="#dff1f4" stroke="#1971c2" stroke-width="3"/><!-- nucleus --><circle cx="290" cy="190" r="58" fill="#e7d6f5" stroke="#7048b6" stroke-width="2.5"/><circle cx="290" cy="190" r="22" fill="#b18ad6"/><!-- mitochondria --><g><ellipse cx="180" cy="130" rx="34" ry="17" fill="#ffe0cc" stroke="#e8590c" stroke-width="2" transform="rotate(-20 180 130)"/><path d="M158 126 q10 -8 20 0 q10 8 20 0" fill="none" stroke="#e8590c" stroke-width="1.5"/></g><!-- golgi --><g stroke="#2f9e44" stroke-width="2.5" fill="none"><path d="M170 250 q40 -14 80 0"/><path d="M174 262 q36 -12 72 0"/><path d="M178 274 q32 -10 64 0"/></g><!-- vesicles --><circle cx="252" cy="276" r="5" fill="#2f9e44"/><circle cx="262" cy="284" r="4" fill="#2f9e44"/><!-- labels with leader lines --><g font-size="12" fill="#1f2d3a"><line x1="290" y1="190" x2="470" y2="96" stroke="#7048b6" stroke-width="1"/><text x="474" y="98" fill="#7048b6" font-weight="700">Nucleus</text><text x="474" y="114" font-size="10" fill="#64748b">contains DNA; controls cell</text><line x1="180" y1="130" x2="70" y2="86" stroke="#e8590c" stroke-width="1"/><text x="20" y="84" fill="#e8590c" font-weight="700">Mitochondria</text><text x="20" y="100" font-size="10" fill="#64748b">release energy from food</text><line x1="210" y1="262" x2="120" y2="320" stroke="#2f9e44" stroke-width="1"/><text x="20" y="318" fill="#2f9e44" font-weight="700">Golgi apparatus</text><text x="20" y="334" font-size="10" fill="#64748b">packages proteins, makes lysosomes</text><line x1="468" y1="240" x2="488" y2="200" stroke="#1971c2" stroke-width="1"/><text x="430" y="270" fill="#1971c2" font-weight="700">Cell membrane</text><text x="416" y="286" font-size="10" fill="#64748b">controls what enters/leaves</text><text x="350" y="300" fill="#0b7285" font-weight="700">Cytoplasm</text><text x="338" y="316" font-size="10" fill="#64748b">site of many reactions</text></g></svg>',
      },
      caption: 'Label this animal cell — match each organelle to its function.',
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
        text: 'Belgian Blue cattle are a good example of the application of selective breeding to produce an animal with desired traits.\n\n**Compare and contrast** genetic engineering and selective breeding as methods to produce plants and animals with desired traits.',
        marks: 4,
        ph: 'Similarity: both select for desired trait; both alter genetic code. Difference: GE introduces new trait vs SB uses existing; GE needs one generation vs SB needs many; GE is faster; GE is artificial, SB is natural...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Selective breeding', 'Genetic engineering'],
            rows: [
              ['Goal', 'produce a desired trait', 'produce a desired trait'],
              ['Source of trait', 'variation already in the species', 'a gene from any organism'],
              ['How DNA changes', 'choosing which parents breed', 'a gene is inserted directly'],
              ['Generations needed', 'many', 'one'],
              ['Speed', 'slow', 'fast'],
              ['Example', 'Belgian Blue cattle (extra muscle)', 'insulin-producing bacteria'],
            ],
          },
          caption: 'Two ways to obtain organisms with desired traits — compare the similarities and differences.',
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

  // ── Q4: Diffusion & Iodine Investigation (20 marks, Criterion A/B/C/D) ───────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion & Investigation Skills',
    topicCanonical: 'Diffusion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 20,
    stem: 'Cells take in molecules from their surroundings to use for energy and as building blocks for other molecules. Cells also produce waste and must move waste products out of the cell. Diffusion is the movement of molecules across a semi-permeable membrane. The students researched methods for measuring this process and decided to design an investigation using dialysis tubing as a model cell. Dialysis tubing is a semi-permeable membrane used in separation techniques.\n\nThe students set up an investigation with three beakers of 1%, 5%, and 15% iodine solution and tubes filled with a 10% solution of starch. The iodine will turn dark blue when mixed with starch. The students used a reference tube to hold up to the beaker and they stopped timing when they thought the tube was the same colour as the reference tube.',
    artefact: {
      component: 'ParticleSim',
      data: {
        mode: 'diffusion',
        title: 'Iodine diffusing across the dialysis-tubing membrane',
        substance: 'iodine',
        particleCount: 40,
      },
      caption: 'Iodine molecules diffuse from the high-concentration beaker, through the semi-permeable membrane, into the starch — turning it dark blue. Press Play or drag the slider to watch the spread.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that describes the movement of iodine molecules from a region of high concentration to a region of lower concentration.',
        marks: 1,
        ph: 'Select the correct process.',
        widget: 'radio_select',
        widgetOptions: ['Active transport', 'Diffusion', 'Osmosis', 'Transpiration'],
      },
      {
        label: 'b',
        text: 'The iodine solution used in this investigation is harmful. **Select** the correct hazard sign to label the iodine bottle.',
        marks: 1,
        ph: 'Select Sign C (harmful/exclamation).',
        widget: 'radio_select',
        widgetOptions: ['Sign A', 'Sign B', 'Sign C', 'Sign D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">GHS hazard pictograms</text><!-- Sign A: flammable --><g><polygon points="80,46 116,82 80,118 44,82" fill="#ffffff" stroke="#d6336c" stroke-width="4"/><path d="M80 64 q12 14 4 26 q-2 6 -8 8 q10 -16 -4 -22 q6 12 -4 18 q-8 -10 0 -22 q4 8 12 -8 z" fill="#e8590c"/><text x="80" y="146" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sign A</text><text x="80" y="162" font-size="9" text-anchor="middle" fill="#64748b">flammable</text></g><!-- Sign B: environmental hazard --><g><polygon points="220,46 256,82 220,118 184,82" fill="#ffffff" stroke="#d6336c" stroke-width="4"/><path d="M206 96 q14 -12 28 0" fill="none" stroke="#2f9e44" stroke-width="2"/><path d="M220 70 l-6 14 l12 0 z" fill="#2f9e44"/><ellipse cx="232" cy="100" rx="7" ry="3.5" fill="#1971c2"/><text x="220" y="146" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sign B</text><text x="220" y="162" font-size="9" text-anchor="middle" fill="#64748b">environmental</text></g><!-- Sign C: exclamation / harmful --><g><polygon points="360,46 396,82 360,118 324,82" fill="#ffffff" stroke="#d6336c" stroke-width="4"/><rect x="356" y="62" width="8" height="26" rx="2" fill="#1f2d3a"/><circle cx="360" cy="98" r="4.5" fill="#1f2d3a"/><text x="360" y="146" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sign C</text><text x="360" y="162" font-size="9" text-anchor="middle" fill="#64748b">harmful / irritant</text></g><!-- Sign D: corrosive --><g><polygon points="500,46 536,82 500,118 464,82" fill="#ffffff" stroke="#d6336c" stroke-width="4"/><rect x="478" y="70" width="14" height="9" fill="#343a40"/><rect x="508" y="70" width="14" height="9" fill="#343a40"/><path d="M484 80 l-2 14 m26 -14 l2 14" stroke="#343a40" stroke-width="2"/><line x1="476" y1="98" x2="494" y2="104" stroke="#343a40" stroke-width="2"/><line x1="524" y1="98" x2="506" y2="104" stroke="#343a40" stroke-width="2"/><text x="500" y="146" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sign D</text><text x="500" y="162" font-size="9" text-anchor="middle" fill="#64748b">corrosive</text></g><text x="300" y="190" font-size="9" text-anchor="middle" fill="#94a3ad">Each pictogram is a red-bordered diamond. Choose the one that warns a substance is harmful/irritant.</text></svg>',
          },
          caption: 'Four GHS hazard pictograms. Select the one used for a harmful/irritant substance such as iodine solution.',
        },
      },
      {
        label: 'c',
        text: '**Suggest** two precautions that the students should take before using iodine solution.',
        marks: 2,
        ph: 'Use gloves; use safety glasses...',
      },
      {
        label: 'd',
        text: '**State** the problem being tested by this experiment.',
        marks: 3,
        ph: 'Does the concentration of iodine solution affect the time taken for iodine to diffuse across a semi-permeable membrane?',
      },
      {
        label: 'e',
        text: '**Formulate** a testable prediction for this experiment.',
        marks: 1,
        ph: 'If concentration of iodine increases, then the rate of diffusion will increase...',
      },
      {
        label: 'f',
        text: '**Identify** the variables in this investigation. For each variable, **outline** how this variable is manipulated.',
        marks: 6,
        ph: 'IV: concentration of iodine solution (1%, 5%, 15%). DV: time for iodine to diffuse (turn tube dark blue). CV1: temperature (keep constant). CV2: volume of water / type of membrane / amount of starch...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">The diffusion apparatus (one of three set-ups)</text><!-- beaker --><path d="M120 90 L120 250 Q120 268 138 268 L300 268 Q318 268 318 250 L318 90" fill="#cdeafd" stroke="#1971c2" stroke-width="3"/><path d="M120 90 L318 90" stroke="#1971c2" stroke-width="3"/><!-- iodine solution surface --><line x1="124" y1="130" x2="314" y2="130" stroke="#8a5a00" stroke-width="1.5" stroke-dasharray="4 3"/><text x="219" y="210" font-size="12" text-anchor="middle" fill="#7a5c12" font-weight="700">iodine solution</text><text x="219" y="226" font-size="10" text-anchor="middle" fill="#475569">1%, 5% or 15% (IV)</text><!-- dialysis tube suspended --><rect x="200" y="60" width="36" height="150" rx="14" fill="#eef7ec" stroke="#2f9e44" stroke-width="2.5"/><line x1="218" y1="44" x2="218" y2="60" stroke="#64748b" stroke-width="2"/><circle cx="218" cy="44" r="4" fill="#64748b"/><text x="266" y="100" font-size="10" fill="#2f9e44">dialysis tube</text><text x="266" y="114" font-size="10" fill="#2f9e44">= semi-permeable</text><text x="266" y="128" font-size="10" fill="#2f9e44">membrane (CV)</text><text x="266" y="150" font-size="10" fill="#7048b6">10% starch (CV)</text><line x1="264" y1="146" x2="236" y2="150" stroke="#7048b6" stroke-width="1" stroke-dasharray="2 2"/><!-- reference tube --><rect x="400" y="120" width="34" height="120" rx="14" fill="#1b3a5a" stroke="#0b2942" stroke-width="2"/><text x="417" y="262" font-size="10" text-anchor="middle" fill="#475569">reference</text><text x="417" y="276" font-size="10" text-anchor="middle" fill="#475569">tube (target colour)</text><!-- timer --><rect x="470" y="120" width="78" height="50" rx="6" fill="#111827" stroke="#374151" stroke-width="2"/><text x="509" y="152" font-size="16" font-weight="700" text-anchor="middle" fill="#34d399" font-family="monospace">00:00</text><text x="509" y="186" font-size="10" text-anchor="middle" fill="#475569">stop when tube</text><text x="509" y="200" font-size="10" text-anchor="middle" fill="#475569">matches reference (DV)</text></svg>',
          },
          caption: 'A starch-filled dialysis tube in iodine solution, timed against a reference tube. Identify the IV, DV and control variables.',
        },
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
        artefact: {
          component: 'DataTable',
          data: {
            headers: [
              'Iodine concentration / %',
              'Time to match reference, trial 1 / s',
              'Time to match reference, trial 2 / s',
              'Time to match reference, trial 3 / s',
              'Mean time / s',
            ],
            rows: [
              ['1', '', '', '', ''],
              ['5', '', '', '', ''],
              ['15', '', '', '', ''],
            ],
          },
          caption: 'A blank results table you could design: the IV (concentration) in rows, repeated trials and a mean for the DV (time), all columns labelled with units.',
        },
      },
      {
        label: 'i',
        text: '**Suggest** one weakness in the method.',
        marks: 1,
        ph: 'Determining when bag was completely changed could be subjective; concentrations not changed in equal increments...',
      },
    ],
  },

  // ── Q5: Osmosis & Temperature Investigation (21 marks, Criterion B/C) ─────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Osmosis Data Analysis — Temperature',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'Osmosis is the movement of water molecules across a semi-permeable membrane from a region of low concentration of dissolved substances to a region of high concentration of dissolved substances. The movement of water molecules will cease until the concentration of dissolved substances on both sides of the membrane are equal. The students wanted to investigate whether the rate of osmosis was related to temperature. The students decided to use dialysis tubing as a model cell. Dialysis tubing is a semi-permeable membrane used in separation techniques.\n\nThe students planned to use dialysis tubing, beakers, a balance, a measuring cylinder and a timer. They planned to use 10 cm³ of starch solution in each tubing and to measure the mass change after 10 minutes. The start of the experiment is shown below.',
    artefact: {
      component: 'RateSim',
      data: {
        mode: 'scatter',
        title: 'Rate of osmosis vs temperature (students’ data)',
        variable: 'rate of osmosis',
        xAxis: { label: 'Temperature', min: 0, max: 40, tick: 5 },
        yAxis: { label: 'Rate of osmosis / g min⁻¹', min: 0, max: 0.16, tick: 0.02 },
        lineOfBestFit: true,
        scatterPoints: [
          { x: 5, y: 0.0 },
          { x: 10, y: 0.07 },
          { x: 15, y: 0.1 },
          { x: 20, y: 0.12 },
          { x: 35, y: 0.14 },
        ],
        note: 'Each dialysis tube holds 10 cm³ of starch solution and is weighed before and 10 min after. The DV is the mass gained by osmosis; rate = mass change ÷ time.',
      },
      caption: 'Drag the crosshair to read the students’ rate of osmosis at any temperature. The points are the same values used in the table in part (c): the rate rises as temperature increases.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the problem being studied in this investigation.',
        marks: 1,
        ph: 'Whether temperature affects the rate of movement of water molecules across a membrane...',
      },
      {
        label: 'b',
        text: '**Outline** how the rate of osmosis is determined and **formulate** the unit for the rate of osmosis.',
        marks: 3,
        ph: 'Change in mass over a fixed time period used to determine rate; unit = g min⁻¹ or g s⁻¹...',
      },
      {
        label: 'c',
        text: 'Complete the table below by **calculating** the missing value.\n\n(Negligible: very small and not important)\n\n| Temperature / °C | Avg initial mass / g | Avg final mass / g | Increase in mass after 10 min / g | Rate of osmosis / unit formulated in (b) |\n|---|---|---|---|---|\n| 5 | 10.90 | 10.91 | 0.01 | Negligible |\n| 10 | 11.06 | 11.76 | 0.70 | 0.07 |\n| 15 | 11.10 | 12.11 | 1.01 | **?** |\n| 20 | 11.41 | 12.58 | 1.17 | 0.12 |\n| 35 | 12.33 | 13.73 | 1.40 | 0.14 |',
        marks: 2,
        ph: 'Rate at 15°C = 0.10(1) g min⁻¹; accept 0.10 with correct significant figures...',
      },
      {
        label: 'd',
        text: '**Present** the data from the table in a graph.',
        marks: 4,
        ph: 'y-axis: rate of osmosis (unit from b), evenly spaced increments, all points plotted correctly, ignore point (5,0)...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Students’ data — rate of osmosis vs temperature',
            xLabel: 'Temperature',
            yLabel: 'Rate of osmosis',
            xUnit: '°C',
            yUnit: 'g min⁻¹',
            xMin: 0,
            xMax: 40,
            yMin: 0,
            yMax: 0.16,
            xStep: 5,
            yStep: 0.02,
            dataPoints: [
              { x: 5, y: 0.0 },
              { x: 10, y: 0.07 },
              { x: 15, y: 0.1 },
              { x: 20, y: 0.12 },
              { x: 35, y: 0.14 },
            ],
          },
          caption: 'The students’ rate values from the table in part (c), plotted against temperature. Note the (5, 0) point is negligible.',
        },
      },
      {
        label: 'e',
        text: 'After conducting their own investigation, the students researched other investigations to see if they matched similar conclusions. The students found a similar graph from a local university — that graph is shown below.\n\nScroll back to your graph in part (d) and **compare and contrast** the trend in the students\' data in part (d) with the graph of the university data.',
        marks: 4,
        ph: 'Both show similar trend until 35°C; both increase at similar rate; university shows plateau above 35°C; student data has no measurements above 35°C...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'University data — rate of osmosis vs temperature',
            xLabel: 'Temperature',
            yLabel: 'Rate of osmosis',
            xUnit: '°C',
            yUnit: 'g min⁻¹',
            xMin: 0,
            xMax: 60,
            yMin: 0,
            yMax: 0.16,
            xStep: 10,
            yStep: 0.02,
            dataPoints: [
              { x: 5, y: 0.0 },
              { x: 10, y: 0.07 },
              { x: 15, y: 0.1 },
              { x: 20, y: 0.12 },
              { x: 35, y: 0.14 },
              { x: 50, y: 0.135 },
            ],
          },
          caption: 'University data over a wider temperature range: the rate rises like the students’ data up to 35 °C, then levels off (plateaus) above 35 °C.',
        },
      },
      {
        label: 'f',
        text: '**Explain** one scientific reason for the trend shown in the university data.',
        marks: 4,
        ph: 'As temperature increases kinetic energy increases; particles move more quickly; rate of movement across membrane increases; above 35°C equilibrium reached so rate becomes constant; OR term kinetic energy / equilibrium / osmotic pressure used correctly...',
      },
      {
        label: 'g',
        text: '**State** whether the students\' method is valid based on comparison of their data with the university data. **Justify** your answer.',
        marks: 1,
        ph: 'Valid because trends match (below 35°C) OR data / results were similar; not valid because no measurements above 35°C...',
      },
      {
        label: 'h',
        text: '**Suggest** one extension **and** one improvement to this investigation.',
        marks: 2,
        ph: 'Extension: increase temperature range / investigate different solute. Improvement: fill in missing increments / increase duration of each trial...',
      },
    ],
  },

  // ── Q6: Investigation Design — Temperature & Osmosis in Potato Cells (17 marks, B) ─
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Osmosis & Potatoes',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 17,
    stem: 'The students then decided to study how molecules moved in and out of real cells. They decided to use potatoes to show how temperature is related to the movement of water in potato cells.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Studying osmosis in real potato cells</text><!-- potato --><ellipse cx="110" cy="80" rx="56" ry="34" fill="#e7d29a" stroke="#9c6b16" stroke-width="2"/><text x="110" y="128" font-size="10" text-anchor="middle" fill="#9c6b16">whole potato</text><!-- arrow to cylinders --><path d="M176 80 L214 80" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><text x="195" y="70" font-size="9" text-anchor="middle" fill="#64748b">cut equal pieces</text><!-- cylinders --><g fill="#eedcae" stroke="#9c6b16" stroke-width="1.5"><rect x="226" y="64" width="14" height="34" rx="3"/><rect x="246" y="64" width="14" height="34" rx="3"/><rect x="266" y="64" width="14" height="34" rx="3"/></g><text x="253" y="118" font-size="9" text-anchor="middle" fill="#9c6b16">identical chips (CV)</text><!-- arrow to beakers --><path d="M292 80 L330 80" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- three beakers at temps --><g><g transform="translate(340,52)"><path d="M0 24 L0 92 Q0 104 12 104 L52 104 Q64 104 64 92 L64 24" fill="#cdeafd" stroke="#1971c2" stroke-width="2.5"/><rect x="26" y="44" width="12" height="40" rx="3" fill="#eedcae" stroke="#9c6b16"/><text x="32" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#c2255c">5 °C</text></g><g transform="translate(420,52)"><path d="M0 24 L0 92 Q0 104 12 104 L52 104 Q64 104 64 92 L64 24" fill="#cdeafd" stroke="#1971c2" stroke-width="2.5"/><rect x="26" y="44" width="12" height="40" rx="3" fill="#eedcae" stroke="#9c6b16"/><text x="32" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#e8950c">20 °C</text></g><g transform="translate(500,52)"><path d="M0 24 L0 92 Q0 104 12 104 L52 104 Q64 104 64 92 L64 24" fill="#cdeafd" stroke="#1971c2" stroke-width="2.5"/><rect x="26" y="44" width="12" height="40" rx="3" fill="#eedcae" stroke="#9c6b16"/><text x="32" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#2f9e44">40 °C</text></g></g><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#64748b"/></marker></defs><text x="300" y="170" font-size="11" text-anchor="middle" fill="#475569">IV = temperature of the water · DV = change in mass of the potato chip</text><!-- balance before/after --><rect x="180" y="196" width="100" height="30" rx="5" fill="#111827" stroke="#374151" stroke-width="2"/><text x="230" y="216" font-size="13" font-weight="700" text-anchor="middle" fill="#34d399" font-family="monospace">2.50 g</text><text x="230" y="244" font-size="9" text-anchor="middle" fill="#64748b">mass BEFORE</text><rect x="320" y="196" width="100" height="30" rx="5" fill="#111827" stroke="#374151" stroke-width="2"/><text x="370" y="216" font-size="13" font-weight="700" text-anchor="middle" fill="#34d399" font-family="monospace">2.72 g</text><text x="370" y="244" font-size="9" text-anchor="middle" fill="#64748b">mass AFTER 10 min</text></svg>',
      },
      caption: 'Equal potato chips placed in water at different temperatures; the change in mass shows osmosis. Use this to design your method.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the equipment needed for this investigation. Click the "Palette Image Library" button to display the equipment available.',
        marks: 2,
        ph: 'Balance/ruler, potato, beaker, thermometer, flask of distilled water, knife, ice, kettle, paper towels, goggles — any three correct...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Equipment available', 'Use in this investigation'],
            rows: [
              ['Balance', 'measure mass of potato before and after (DV)'],
              ['Cork borer / knife', 'cut equal-sized potato chips'],
              ['Ruler', 'cut chips to the same length'],
              ['Beakers', 'hold water at each temperature'],
              ['Thermometer', 'set and check the temperature (IV)'],
              ['Kettle / ice + water bath', 'reach the different temperatures'],
              ['Distilled water', 'the solution the chips sit in'],
              ['Paper towels', 'blot chips dry before weighing'],
              ['Timer', 'keep each chip submerged the same time (CV)'],
              ['Safety goggles', 'protect eyes when using hot water'],
            ],
          },
          caption: 'The equipment library. Select the apparatus you would actually need to investigate temperature and osmosis in potato cells.',
        },
      },
      {
        label: 'b',
        text: '**Design** an investigation to study how temperature is related to osmosis in potato cells. In your investigation, you should include:\n\n- an identification of the independent, dependent and control variables\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- a description of your method\n- how you will ensure your method is safe',
        marks: 15,
        ph: 'IV: temperature (e.g. 5,10,15,20,35°C). DV: change in mass of potato. CV: volume of solution, size of potato piece, type of solution, time. Hypothesis: as temperature increases, rate of osmosis increases (until equilibrium). Method: cut equal potato pieces, place in solutions at different temperatures, measure mass before and after 10 min, 3 repeats. Safety: handle knife carefully, goggles for hot water...',
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Nutrient', 'Main role in the body', 'Example foods'],
        rows: [
          ['Carbohydrate', 'quick release of energy', 'rice, bread, pasta'],
          ['Fat', 'long-term energy storage and insulation', 'oils, butter, nuts'],
          ['Protein', 'building body structures and cell functions', 'meat, fish, beans'],
          ['Minerals and vitamins', 'support chemical reactions (metabolism)', 'fruit, vegetables'],
        ],
      },
      caption: 'The nutrients in a balanced diet and their functions. Use this to match each nutrient to its role.',
    },
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
        ph: 'Goat (meat)...',
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'stacked',
            title: 'Macronutrient makeup of various protein sources',
            x: {
              label: 'Food',
              categories: [
                'Almonds', 'Bacon', 'Beef', 'Catfish', 'Cheese', 'Chicken', 'Goat',
                'Hamburger', 'Ice cream', 'Kidney beans', 'Lentils', 'Milk', 'Pork',
                'Soya products', 'Spinach', 'White rice',
              ],
            },
            y: { label: 'Percentage nutrient by mass', min: 0, max: 100, unit: '%', ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
            series: [
              {
                name: 'Fat',
                color: '#1971c2',
                points: [70, 64, 20, 25, 70, 19, 17, 62, 50, 2, 3, 48, 42, 45, 12, 3],
              },
              {
                name: 'Protein',
                color: '#e03131',
                points: [15, 36, 78, 73, 28, 79, 82, 38, 8, 25, 28, 22, 58, 30, 30, 8],
              },
              {
                name: 'Carbohydrate',
                color: '#2f9e44',
                points: [15, 0, 0, 0, 2, 0, 0, 0, 42, 73, 69, 30, 0, 25, 58, 89],
              },
            ],
          },
          caption: 'Stacked bars show fat, protein and carbohydrate as a percentage by mass for each food. Hover a red (protein) segment for its exact value; the food with the tallest protein band has the highest percentage of protein.',
        },
      },
    ],
  },

  // ── Q8: In Vitro Meat Production (16 marks, Criterion D) ─────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'In Vitro Meat & Intensive Farming — Evaluate',
    topicCanonical: 'Cloning',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 16,
    stem: 'The video shows how scientific innovation is being used to produce foods with high percentages of protein. Scientists are combining fat cells and muscle cells, and from one muscle cell many millions of cells can be grown. The new muscle fibres are then minced and turned into burgers.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="260" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How in vitro (lab-grown) meat is made</text><!-- step 1 cow + biopsy --><g><circle cx="80" cy="90" r="34" fill="#e7d29a" stroke="#9c6b16" stroke-width="2"/><text x="80" y="95" font-size="22" text-anchor="middle">🐄</text><text x="80" y="142" font-size="10" text-anchor="middle" fill="#475569">1. Small sample of</text><text x="80" y="156" font-size="10" text-anchor="middle" fill="#475569">muscle + fat cells</text></g><path d="M120 90 L160 90" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 2 stem/muscle cell --><g><circle cx="200" cy="90" r="26" fill="#ffd9c2" stroke="#e8590c" stroke-width="2"/><circle cx="200" cy="90" r="9" fill="#e8590c"/><text x="200" y="138" font-size="10" text-anchor="middle" fill="#475569">2. Isolate one</text><text x="200" y="152" font-size="10" text-anchor="middle" fill="#475569">muscle cell</text></g><path d="M232 90 L272 90" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 3 bioreactor with many cells --><g><rect x="288" y="58" width="80" height="64" rx="8" fill="#dff1f4" stroke="#1971c2" stroke-width="2"/><g fill="#e8590c"><circle cx="306" cy="78" r="4"/><circle cx="322" cy="88" r="4"/><circle cx="340" cy="74" r="4"/><circle cx="352" cy="92" r="4"/><circle cx="314" cy="104" r="4"/><circle cx="336" cy="106" r="4"/><circle cx="352" cy="110" r="4"/></g><text x="328" y="138" font-size="10" text-anchor="middle" fill="#475569">3. Grow millions of</text><text x="328" y="152" font-size="10" text-anchor="middle" fill="#475569">cells in a bioreactor</text></g><path d="M372 90 L412 90" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 4 muscle fibres --><g><g stroke="#c2255c" stroke-width="3"><line x1="430" y1="74" x2="470" y2="74"/><line x1="430" y1="84" x2="470" y2="84"/><line x1="430" y1="94" x2="470" y2="94"/><line x1="430" y1="104" x2="470" y2="104"/></g><text x="450" y="138" font-size="10" text-anchor="middle" fill="#475569">4. Cells form</text><text x="450" y="152" font-size="10" text-anchor="middle" fill="#475569">muscle fibres</text></g><path d="M484 90 L524 90" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 5 burger --><g><ellipse cx="560" cy="86" rx="30" ry="10" fill="#e7b07a" stroke="#9c6b16"/><rect x="532" y="86" width="56" height="10" fill="#7a4a1e"/><ellipse cx="560" cy="100" rx="30" ry="10" fill="#e7b07a" stroke="#9c6b16"/><text x="560" y="138" font-size="10" text-anchor="middle" fill="#475569">5. Minced into</text><text x="560" y="152" font-size="10" text-anchor="middle" fill="#475569">a burger</text></g><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#64748b"/></marker></defs><text x="310" y="200" font-size="11" text-anchor="middle" fill="#1f2d3a" font-weight="700">No animal is slaughtered — but the process uses energy, growth medium and specialist labs.</text><text x="310" y="226" font-size="10" text-anchor="middle" fill="#94a3ad">Weigh these strengths and limitations against intensive meat farming.</text></svg>',
      },
      caption: 'In vitro meat production: a single cell is multiplied in a bioreactor and turned into a burger, avoiding slaughter but needing energy and lab facilities.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the implications of using in vitro meat production to address unsustainable intensive meat farming. In your answer, you should consider:\n\n- the impacts of intensive meat farming\n- the strengths and limitations of in vitro meat production\n- the environmental considerations of both intensive farming and in vitro production\n- the ethical issues involved in both intensive farming and in vitro production\n- a concluding appraisal.',
        marks: 16,
        ph: 'Impacts: deforestation, methane, water use. Strengths: no animal suffering, less land; Limitations: expensive, unnatural. Environmental: intensive uses land/water, in vitro uses less land but energy. Ethical: intensive farming welfare, in vitro artificial. Appraisal: in vitro could reduce suffering but cost and acceptability are barriers...',
      },
    ],
  },

  // ── Q9: 3D Bioprinting for Transplants (9 marks, Criterion D) ────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: '3D Bioprinting — Scientific Implications',
    topicCanonical: '3D Tissue & Organ Printing',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 9,
    stem: '3D printing has been suggested as a new source of body tissue for people with medical conditions requiring a transplant. Currently people requiring replacement body tissue must rely on transplanted material from a matching donor.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="280" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">3D bio-printing replacement tissue from a patient’s own cells</text><!-- step 1 patient cells --><g><circle cx="80" cy="92" r="30" fill="#e7d6f5" stroke="#7048b6" stroke-width="2"/><circle cx="80" cy="92" r="10" fill="#7048b6"/><text x="80" y="140" font-size="10" text-anchor="middle" fill="#475569">1. Take patient’s</text><text x="80" y="154" font-size="10" text-anchor="middle" fill="#475569">own cells</text></g><path d="M116 92 L156 92" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 2 bio-ink --><g><path d="M178 70 L210 70 L206 116 L182 116 Z" fill="#bfe2ff" stroke="#1971c2" stroke-width="2"/><text x="194" y="140" font-size="10" text-anchor="middle" fill="#475569">2. Mix into</text><text x="194" y="154" font-size="10" text-anchor="middle" fill="#475569">“bio-ink”</text></g><path d="M222 92 L262 92" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 3 3D printer --><g><rect x="282" y="56" width="86" height="70" rx="6" fill="#eef2f6" stroke="#475569" stroke-width="2"/><rect x="300" y="62" width="50" height="8" fill="#475569"/><line x1="325" y1="70" x2="325" y2="92" stroke="#475569" stroke-width="2"/><path d="M321 92 L329 92 L325 100 Z" fill="#1971c2"/><g stroke="#c2255c" stroke-width="2"><line x1="306" y1="112" x2="344" y2="112"/><line x1="306" y1="118" x2="344" y2="118"/></g><text x="325" y="146" font-size="10" text-anchor="middle" fill="#475569">3. Print tissue</text><text x="325" y="160" font-size="10" text-anchor="middle" fill="#475569">layer by layer</text></g><path d="M372 92 L412 92" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 4 organ --><g><path d="M448 70 q22 -6 30 14 q8 22 -12 34 q-22 12 -34 -8 q-10 -22 16 -40 z" fill="#f3a5b5" stroke="#c2255c" stroke-width="2"/><text x="455" y="140" font-size="10" text-anchor="middle" fill="#475569">4. New tissue /</text><text x="455" y="154" font-size="10" text-anchor="middle" fill="#475569">organ grown</text></g><path d="M500 92 L540 92" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/><!-- step 5 patient --><g><circle cx="572" cy="84" r="10" fill="#ffe0cc" stroke="#e8590c"/><rect x="562" y="96" width="20" height="26" rx="6" fill="#ffe0cc" stroke="#e8590c"/><text x="572" y="146" font-size="10" text-anchor="middle" fill="#475569">5. Implant —</text><text x="572" y="160" font-size="10" text-anchor="middle" fill="#475569">low rejection risk</text></g><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#64748b"/></marker></defs><text x="310" y="208" font-size="11" text-anchor="middle" fill="#2f9e44" font-weight="700">+ No waiting for a matching donor; uses the patient’s own cells, so less rejection.</text><text x="310" y="232" font-size="11" text-anchor="middle" fill="#c2255c" font-weight="700">– Expensive, limited tissue types, and not yet fully tested.</text><text x="310" y="258" font-size="10" text-anchor="middle" fill="#94a3ad">Compare this with traditional transplant from a matching donor.</text></svg>',
      },
      caption: '3D bio-printing builds replacement tissue from the patient’s own cells. Weigh its advantages and disadvantages against donor transplantation.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the scientific implications of replacing traditional transplantation techniques with 3D bio-printing. In your answer, you should include:\n\n- the advantages of 3D printing for transplant patients\n- the disadvantages of 3D printing for transplant patients\n- a concluding appraisal.',
        marks: 9,
        ph: 'Advantages: no need for matching donor, less rejection risk, on-demand production. Disadvantages: expensive, limited types of tissue, not fully tested. Appraisal: promising technology but not yet ready for widespread use...',
      },
    ],
  },
]
