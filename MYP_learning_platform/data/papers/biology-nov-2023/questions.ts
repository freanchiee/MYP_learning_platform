import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2023',
  subject: 'Biology',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'DNA, Genetics & Cystic Fibrosis',
    topicCanonical: 'DNA & Genetics',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'The questions below are about DNA, inheritance, and the genetic disease cystic fibrosis.',
    artefact: {
      component: 'GenericSVG',
      data: {
        // Static labelled structural diagram of the DNA double helix: a true
        // anatomical figure (no parameter to vary), so GenericSVG is the right fit.
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of DNA — the double helix</text><g stroke-width="6" fill="none"><path d="M150 50 C 230 90, 230 130, 150 170 C 70 210, 70 250, 150 290" stroke="#0b7285"/><path d="M270 50 C 190 90, 190 130, 270 170 C 350 210, 350 250, 270 290" stroke="#1971c2"/></g><g font-size="11" font-weight="700" text-anchor="middle"><g><line x1="156" y1="78" x2="262" y2="78" stroke="#94a3ad" stroke-width="2"/><rect x="178" y="69" width="26" height="18" rx="4" fill="#e8590c"/><text x="191" y="82" fill="#fff">A</text><rect x="214" y="69" width="26" height="18" rx="4" fill="#2f9e44"/><text x="227" y="82" fill="#fff">T</text></g><g><line x1="150" y1="118" x2="270" y2="118" stroke="#94a3ad" stroke-width="2"/><rect x="172" y="109" width="26" height="18" rx="4" fill="#9c36b5"/><text x="185" y="122" fill="#fff">G</text><rect x="222" y="109" width="26" height="18" rx="4" fill="#f08c00"/><text x="235" y="122" fill="#fff">C</text></g><g><line x1="156" y1="158" x2="262" y2="158" stroke="#94a3ad" stroke-width="2"/><rect x="178" y="149" width="26" height="18" rx="4" fill="#2f9e44"/><text x="191" y="162" fill="#fff">T</text><rect x="214" y="149" width="26" height="18" rx="4" fill="#e8590c"/><text x="227" y="162" fill="#fff">A</text></g></g><line x1="120" y1="70" x2="60" y2="70" stroke="#64748b" stroke-width="1"/><text x="56" y="74" font-size="10" text-anchor="end" fill="#475569">sugar–phosphate</text><text x="56" y="86" font-size="10" text-anchor="end" fill="#475569">backbone</text><line x1="300" y1="118" x2="380" y2="118" stroke="#64748b" stroke-width="1"/><text x="384" y="115" font-size="10" fill="#475569">complementary</text><text x="384" y="127" font-size="10" fill="#475569">base pair</text><text x="280" y="290" font-size="10" text-anchor="middle" fill="#94a3ad">Base-pairing rule: A–T and G–C</text></svg>',
      },
      caption: 'DNA is two sugar–phosphate backbones held together by complementary base pairs (A–T, G–C).',
    },
    figCaption: 'DNA, inheritance and cystic fibrosis.',
    tasks: [
      {
        label: 'a',
        text: '**State** the cell organelle where an animal\'s DNA is found.',
        marks: 1,
        ph: 'The organelle that contains genetic material.',
      },
      {
        label: 'b',
        text: 'DNA, deoxyribonucleic acid, consists of two sugar-phosphate backbones held together by complementary base pairs. **Select** and drag the correct complementary bases to complete the molecule.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="200" fill="#ffffff"/><text x="230" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Complete the base pairs</text><line x1="120" y1="40" x2="120" y2="180" stroke="#0b7285" stroke-width="6"/><line x1="340" y1="40" x2="340" y2="180" stroke="#1971c2" stroke-width="6"/><g font-size="13" font-weight="700" text-anchor="middle"><g><line x1="120" y1="70" x2="340" y2="70" stroke="#94a3ad" stroke-width="2"/><rect x="150" y="60" width="30" height="20" rx="4" fill="#e8590c"/><text x="165" y="75" fill="#fff">A</text><rect x="280" y="60" width="30" height="20" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="3 3"/><text x="295" y="75" fill="#94a3ad">?</text></g><g><line x1="120" y1="120" x2="340" y2="120" stroke="#94a3ad" stroke-width="2"/><rect x="150" y="110" width="30" height="20" rx="4" fill="#9c36b5"/><text x="165" y="125" fill="#fff">G</text><rect x="280" y="110" width="30" height="20" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="3 3"/><text x="295" y="125" fill="#94a3ad">?</text></g></g><text x="230" y="35" font-size="10" text-anchor="middle" fill="#64748b">left strand given</text><text x="120" y="195" font-size="9" text-anchor="middle" fill="#94a3ad">backbone</text><text x="340" y="195" font-size="9" text-anchor="middle" fill="#94a3ad">backbone</text></svg>',
          },
          caption: 'Drag the complementary base onto each dashed slot to complete the two base pairs.',
        },
        widget: 'match_drag_drop',
        widgetItems: ['A pairs with', 'G pairs with'],
        widgetOptions: ['T', 'C', 'U', 'N'],
        ph: 'A pairs with T; G pairs with C. U and N are distractors.',
      },
      {
        label: 'c',
        text: 'Cystic fibrosis is an inherited disease caused by a defective recessive allele. **Select** the meaning of the term allele.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Alleles are bacteria that cause disease',
          'Alleles are different forms of the same gene',
          'Alleles are proteins found in cells',
          'Alleles are traits seen in organisms',
        ],
        ph: 'Alleles are alternate versions of the same gene.',
      },
      {
        label: 'd',
        text: 'Use the symbols **A** and **a** to complete the Punnett square below. (Father = Aa; Mother = Aa)',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['', 'Father: A', 'Father: a'],
            rows: [
              ['Mother: A', 'AA', 'Aa'],
              ['Mother: a', 'Aa', 'aa'],
            ],
          },
          caption: 'Punnett square for two heterozygous (Aa) parents. Each cell is one possible genotype of the child.',
        },
        ph: 'Fill in AA, Aa, Aa, aa in the four cells of the Punnett square.',
      },
      {
        label: 'e',
        text: '**Determine** the probability that a child does not have the disease but is able to pass it on.',
        marks: 1,
        ph: 'Count the Aa genotypes in the Punnett square — express as % or fraction.',
      },
      {
        label: 'f',
        text: '**Outline** how the structure of the alveoli supports gas exchange.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            // Labelled comparison of healthy vs cystic-fibrosis alveoli — a static
            // anatomical diagram, so GenericSVG is appropriate.
            svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="250" fill="#ffffff"/><text x="140" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Healthy alveoli</text><text x="420" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Alveoli with cystic fibrosis</text><g><circle cx="100" cy="110" r="38" fill="#fde6ea" stroke="#c2255c" stroke-width="2"/><circle cx="170" cy="95" r="30" fill="#fde6ea" stroke="#c2255c" stroke-width="2"/><circle cx="160" cy="160" r="32" fill="#fde6ea" stroke="#c2255c" stroke-width="2"/><path d="M55 110 q15 -8 30 0 M140 95 q12 -7 26 0 M130 160 q14 -7 28 0" stroke="#1971c2" stroke-width="1.5" fill="none"/></g><text x="140" y="220" font-size="10" text-anchor="middle" fill="#475569">thin moist walls · large surface area · rich capillary supply</text><g><circle cx="380" cy="110" r="38" fill="#fde6ea" stroke="#c2255c" stroke-width="2"/><circle cx="450" cy="95" r="30" fill="#fde6ea" stroke="#c2255c" stroke-width="2"/><circle cx="440" cy="160" r="32" fill="#fde6ea" stroke="#c2255c" stroke-width="2"/><circle cx="380" cy="110" r="20" fill="#9aa37a" opacity="0.85"/><circle cx="450" cy="95" r="16" fill="#9aa37a" opacity="0.85"/><circle cx="440" cy="160" r="18" fill="#9aa37a" opacity="0.85"/></g><text x="420" y="220" font-size="10" text-anchor="middle" fill="#475569">thick sticky mucus fills the air spaces</text><text x="490" y="150" font-size="9" fill="#6b7a3a">mucus</text><line x1="460" y1="160" x2="488" y2="148" stroke="#6b7a3a" stroke-width="1"/></svg>',
          },
          caption: 'Cross-section of healthy alveoli and alveoli of a person with cystic fibrosis.',
        },
        ph: 'Large surface area + further structural point (thin walls, moist, capillary supply).',
      },
      {
        label: 'g',
        text: '**Suggest** one symptom caused by mucus collecting in the alveoli for people with cystic fibrosis.',
        marks: 1,
        ph: 'Think about breathing difficulties, oxygen supply, or infections.',
      },
      {
        label: 'h',
        text: 'Cystic fibrosis is caused by a defective recessive allele. Gene editing technologies like CRISPR allow us to identify and repair defective alleles. **Outline** one benefit and one ethical consideration of gene editing.',
        marks: 2,
        ph: 'Benefit: cure disease/less medication. Ethical: long-term effects unknown / cosmetic use.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nervous System & Homeostasis',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Homeostasis'],
    marks: 11,
    stem: 'The questions below are about the nervous system and how it maintains a stable internal environment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        // Four labelled body-system silhouettes for the "select the nervous system"
        // task — a static comparison diagram, so GenericSVG is the right fit.
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four human body systems</text><g><g transform="translate(40,40)"><circle cx="35" cy="22" r="14" fill="#f1f5f9" stroke="#94a3ad"/><rect x="22" y="36" width="26" height="80" rx="10" fill="#f1f5f9" stroke="#94a3ad"/><path d="M35 30 L35 150 M22 60 L8 110 M48 60 L62 110 M28 116 L20 180 M42 116 L50 180" stroke="#c2255c" stroke-width="2.5" fill="none"/><circle cx="35" cy="48" r="5" fill="#c2255c"/><text x="35" y="205" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 1</text><text x="35" y="220" font-size="9" text-anchor="middle" fill="#64748b">circulatory</text></g><g transform="translate(190,40)"><circle cx="35" cy="22" r="14" fill="#f1f5f9" stroke="#94a3ad"/><rect x="22" y="36" width="26" height="80" rx="10" fill="#f1f5f9" stroke="#94a3ad"/><path d="M35 40 C 20 60, 50 80, 30 100 C 15 120, 45 140, 30 160" stroke="#e8590c" stroke-width="3.5" fill="none"/><text x="35" y="205" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 2</text><text x="35" y="220" font-size="9" text-anchor="middle" fill="#64748b">digestive</text></g><g transform="translate(340,40)"><circle cx="35" cy="22" r="14" fill="#fff7ed" stroke="#f08c00"/><rect x="22" y="36" width="26" height="80" rx="10" fill="#fff7ed" stroke="#f08c00"/><path d="M35 12 L35 150 M35 60 L8 100 M35 60 L62 100 M35 120 L22 185 M35 120 L48 185" stroke="#f08c00" stroke-width="2" fill="none"/><circle cx="35" cy="22" r="6" fill="#f08c00"/><circle cx="8" cy="100" r="3" fill="#f08c00"/><circle cx="62" cy="100" r="3" fill="#f08c00"/><text x="35" y="205" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 3</text><text x="35" y="220" font-size="9" text-anchor="middle" fill="#64748b">nervous</text></g><g transform="translate(490,40)"><circle cx="35" cy="22" r="14" fill="#f1f5f9" stroke="#94a3ad"/><path d="M35 36 L35 120 M22 44 L18 110 M48 44 L52 110 M28 120 L22 185 M42 120 L48 185" stroke="#475569" stroke-width="5" fill="none" stroke-linecap="round"/><text x="35" y="205" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 4</text><text x="35" y="220" font-size="9" text-anchor="middle" fill="#64748b">musculoskeletal</text></g></g></svg>',
      },
      caption: 'Four body systems. The nervous system (Image 3) shows the brain, spinal cord and nerve pathways branching through the body.',
    },
    figCaption: 'The nervous system and homeostasis.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the image showing the nervous system.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Image 1 — circulatory system', 'Image 2 — digestive system', 'Image 3 — nervous system', 'Image 4 — musculoskeletal system'],
        ph: 'The nervous system shows nerve pathways throughout the body.',
      },
      {
        label: 'b',
        text: '**Select** the process which is **not** controlled by the nervous system.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Breathing', 'Mitosis', 'Muscle contractions', 'Digestion'],
        ph: 'The nervous system controls voluntary and involuntary processes — but not cell division.',
      },
      {
        label: 'c',
        text: '**State** the meaning of the term homeostasis.',
        marks: 1,
        ph: 'Maintenance of a constant internal environment.',
      },
      {
        label: 'd',
        text: 'Body temperature is monitored by the nervous system. In Image A, the hair is standing up. **State** another response to cold temperatures.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            // Labelled comparison of skin in cold (Image A) vs hot (Image B)
            // conditions — a static anatomical cross-section, GenericSVG is suitable.
            svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="250" fill="#ffffff"/><text x="140" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image A — cold</text><text x="420" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image B — hot</text><g><rect x="20" y="40" width="240" height="180" fill="#fbeff0" stroke="#e2e8f0"/><line x1="20" y1="60" x2="260" y2="60" stroke="#c2255c" stroke-width="2"/><line x1="120" y1="60" x2="115" y2="25" stroke="#475569" stroke-width="3"/><text x="100" y="20" font-size="9" fill="#475569">hair erect</text><circle cx="60" cy="150" r="14" fill="none" stroke="#1971c2" stroke-width="4"/><text x="60" y="200" font-size="9" text-anchor="middle" fill="#1971c2">narrow vessel</text><text x="180" y="150" font-size="9" text-anchor="middle" fill="#475569">no sweat</text></g><g><rect x="300" y="40" width="240" height="180" fill="#fff4e6" stroke="#e2e8f0"/><line x1="300" y1="60" x2="540" y2="60" stroke="#c2255c" stroke-width="2"/><line x1="380" y1="60" x2="392" y2="48" stroke="#475569" stroke-width="3"/><text x="380" y="40" font-size="9" fill="#475569">hair flat</text><circle cx="340" cy="150" r="20" fill="none" stroke="#1971c2" stroke-width="7"/><text x="340" y="205" font-size="9" text-anchor="middle" fill="#1971c2">wide vessel</text><g fill="#38bdf8"><circle cx="470" cy="70" r="4"/><circle cx="490" cy="80" r="4"/><circle cx="455" cy="90" r="4"/></g><text x="475" y="120" font-size="9" text-anchor="middle" fill="#0ea5e9">sweat droplets</text></g></svg>',
          },
          caption: 'Skin in the cold (Image A) and in the heat (Image B): note the hair, the blood vessels and the sweat.',
        },
        ph: 'Shivering or vasoconstriction are both valid cold responses.',
      },
      {
        label: 'e',
        text: 'Image B shows how the body responds to an increase in ambient temperature. Use this image to identify two responses to increased ambient temperature. For each response, **explain** how body temperature is reduced.',
        marks: 6,
        ph: 'Two responses (e.g. sweating, vasodilation, hair flat) each with a linked explanation.',
      },
      {
        label: 'f',
        text: 'The diagram shows how negative feedback maintains body temperature at a set value. **State** one other example of negative feedback in the body.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            // Static negative-feedback flow diagram for body temperature control.
            svg: '<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="270" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Negative feedback: body temperature held at 37 °C</text><g font-size="10" text-anchor="middle"><rect x="220" y="40" width="120" height="34" rx="6" fill="#e7f5ff" stroke="#1971c2"/><text x="280" y="61" fill="#1864ab">set point: 37 °C</text><rect x="30" y="110" width="130" height="40" rx="6" fill="#ffe3e3" stroke="#c2255c"/><text x="95" y="128" fill="#a61e4d">temperature</text><text x="95" y="142" fill="#a61e4d">rises above 37 °C</text><rect x="400" y="110" width="130" height="40" rx="6" fill="#e6fcf5" stroke="#0ca678"/><text x="465" y="128" fill="#087f5b">temperature</text><text x="465" y="142" fill="#087f5b">drops below 37 °C</text><rect x="30" y="200" width="130" height="40" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="95" y="218" fill="#b45309">body cools:</text><text x="95" y="232" fill="#b45309">sweat / vasodilation</text><rect x="400" y="200" width="130" height="40" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="465" y="218" fill="#b45309">body warms:</text><text x="465" y="232" fill="#b45309">shiver / vasoconstrict</text></g><g stroke="#94a3ad" stroke-width="1.5" fill="none" marker-end="url(#ar)"><path d="M220 57 L160 120"/><path d="M340 57 L400 120"/><path d="M95 150 L95 200"/><path d="M465 150 L465 200"/><path d="M95 240 C 95 262, 280 262, 280 80"/><path d="M465 240 C 465 262, 280 262, 280 80"/></g><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#94a3ad"/></marker></defs></svg>',
          },
          caption: 'A rise or fall away from 37 °C triggers a response that returns the body to the set point.',
        },
        ph: 'Blood glucose levels / water balance / hormone levels / CO₂ concentration.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Yeast & UV Radiation Investigation',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 15,
    stem: 'Yeast is a unicellular organism that is often used for laboratory experiments. A student wanted to study the effect of ultraviolet (UV) radiation on the rate of respiration of yeast. She planned the method below to investigate how exposure time affects the production of CO₂.',
    artefact: {
      component: 'GenericSVG',
      data: {
        // Static labelled apparatus diagram for the CO₂-measurement set-up.
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring CO₂ produced by respiring yeast</text><rect x="120" y="150" width="200" height="90" rx="6" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><text x="220" y="245" font-size="10" text-anchor="middle" fill="#1864ab">water bath at 37 °C</text><path d="M195 80 L185 150 L255 150 L245 80 Z" fill="#fff7ed" stroke="#e8590c" stroke-width="2"/><ellipse cx="220" cy="80" rx="25" ry="6" fill="#fde6c8" stroke="#e8590c"/><rect x="170" y="120" width="100" height="30" fill="#fde6c8" opacity="0.6"/><text x="220" y="138" font-size="9" text-anchor="middle" fill="#9a3412">glucose + yeast</text><rect x="212" y="55" width="16" height="28" rx="3" fill="#cbd5e1" stroke="#475569"/><text x="220" y="50" font-size="8" text-anchor="middle" fill="#475569">bung</text><line x1="228" y1="60" x2="360" y2="60" stroke="#475569" stroke-width="2"/><rect x="360" y="40" width="110" height="50" rx="6" fill="#111827"/><text x="415" y="62" font-size="10" text-anchor="middle" fill="#4ade80">CO₂ sensor</text><text x="415" y="78" font-size="11" text-anchor="middle" fill="#ffffff" font-weight="700">ppm</text><text x="415" y="105" font-size="9" text-anchor="middle" fill="#64748b">+ data logger</text><line x1="80" y1="60" x2="180" y2="100" stroke="#9c36b5" stroke-width="2" stroke-dasharray="4 3"/><text x="70" y="58" font-size="9" text-anchor="end" fill="#9c36b5">UV lamp</text><path d="M55 50 l-8 -8 M62 45 l-6 -10 M48 58 l-12 -4" stroke="#9c36b5" stroke-width="1.5"/></svg>',
      },
      caption: 'Yeast is exposed to UV, then placed in a 37 °C water bath while a sensor logs CO₂ concentration in ppm.',
    },
    figCaption: 'Investigating the effect of UV radiation on yeast respiration.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the characteristic of living organisms shown in the video.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            // Three frames of a budding yeast cell dividing — a labelled sequence.
            svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="180" fill="#ffffff"/><text x="270" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A yeast cell over time (video frames)</text><g><ellipse cx="90" cy="95" rx="40" ry="34" fill="#eef4f7" stroke="#0b7285" stroke-width="2"/><circle cx="90" cy="95" r="10" fill="#0b7285" opacity="0.4"/><text x="90" y="160" font-size="10" text-anchor="middle" fill="#475569">frame 1</text></g><g><ellipse cx="250" cy="95" rx="40" ry="34" fill="#eef4f7" stroke="#0b7285" stroke-width="2"/><circle cx="250" cy="95" r="10" fill="#0b7285" opacity="0.4"/><ellipse cx="300" cy="80" rx="16" ry="14" fill="#eef4f7" stroke="#0b7285" stroke-width="2"/><text x="250" y="160" font-size="10" text-anchor="middle" fill="#475569">frame 2 — bud forms</text></g><g><ellipse cx="410" cy="95" rx="40" ry="34" fill="#eef4f7" stroke="#0b7285" stroke-width="2"/><ellipse cx="470" cy="78" rx="26" ry="22" fill="#eef4f7" stroke="#0b7285" stroke-width="2"/><circle cx="470" cy="78" r="7" fill="#0b7285" opacity="0.4"/><text x="430" y="160" font-size="10" text-anchor="middle" fill="#475569">frame 3 — bud grows</text></g><text x="270" y="40" font-size="9" text-anchor="middle" fill="#94a3ad">the cell grows a bud that enlarges into a new cell</text></svg>',
          },
          caption: 'The yeast cell grows a bud that enlarges into a second cell across the three video frames.',
        },
        ph: 'Yeast cells are dividing — which characteristic of life does this show?',
      },
      {
        label: 'b',
        text: 'Another characteristic of living organisms is respiration. **Select** the correct location for each of the terms in the word equation for aerobic respiration.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="120" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Word equation for aerobic respiration</text><g font-size="12" text-anchor="middle"><rect x="20" y="50" width="80" height="34" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="4 3"/><text x="60" y="71" fill="#94a3ad">?</text><text x="112" y="71" font-size="16" fill="#475569">+</text><rect x="125" y="50" width="80" height="34" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="4 3"/><text x="165" y="71" fill="#94a3ad">?</text><text x="232" y="71" font-size="16" fill="#475569">&#8594;</text><rect x="255" y="50" width="95" height="34" rx="5" fill="#f1f5f9" stroke="#94a3ad"/><text x="302" y="70" font-size="11" fill="#1f2d3a">carbon dioxide</text><text x="358" y="71" font-size="16" fill="#475569">+</text><rect x="372" y="50" width="80" height="34" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="4 3"/><text x="412" y="71" fill="#94a3ad">?</text><text x="460" y="71" font-size="16" fill="#475569">+</text><rect x="472" y="50" width="80" height="34" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="4 3"/><text x="512" y="71" fill="#94a3ad">?</text></g><text x="280" y="108" font-size="10" text-anchor="middle" fill="#64748b">Drag: Energy · Oxygen · Sugar · Water into the dashed boxes</text></svg>',
          },
          caption: 'Only "carbon dioxide" is filled in. Place Sugar, Oxygen, Water and Energy into the dashed boxes.',
        },
        widget: 'fill_blank',
        widgetOptions: ['Energy', 'Oxygen', 'Sugar', 'Water'],
        ph: 'Sugar + Oxygen → Carbon dioxide + Water + Energy.',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Method step', 'Detail'],
            rows: [
              ['1', 'Place 10 cm³ of 5% glucose + yeast mixture into a flask'],
              ['2', 'Expose the yeast to UV radiation for a set time'],
              ['3', 'Remove the mixture after the chosen exposure time'],
              ['4', 'Seal the flask with a bung and a CO₂ sensor'],
              ['5', 'Place the flask in a water bath at 37 °C'],
              ['6', 'Record CO₂ concentration (ppm) after 3 minutes'],
              ['7', 'Repeat for each exposure time with fresh mixture'],
            ],
          },
          caption: 'The student\'s method. Use it to identify what is changed, what is measured and what is kept the same.',
        },
        ph: 'IV = UV exposure time; DV = CO₂ concentration; 2 CVs (temperature, sugar concentration, yeast concentration, type of sugar).',
      },
      {
        label: 'd',
        text: '**Formulate** a hypothesis for this investigation.',
        marks: 3,
        ph: 'If exposure time increases, then CO₂ production decreases, because UV affects enzyme/DNA structure.',
      },
      {
        label: 'e',
        text: '**State** the reason for using a water bath in the method above.',
        marks: 1,
        ph: 'To control/maintain a constant temperature.',
      },
      {
        label: 'f',
        text: '**Suggest** two weaknesses of the investigation and **justify** your answers.',
        marks: 4,
        ph: 'Not enough increments (need more to see trend); not enough trials (need repeats for reliability/average).',
      },
      {
        label: 'g',
        text: 'At the start of the investigation, the student measured the CO₂ concentration produced by yeast that had not been exposed to UV radiation. **State** a reason for including an experiment using yeast that had not been exposed to UV radiation.',
        marks: 1,
        ph: 'To ensure results are due to UV exposure / it is a control experiment.',
      },
    ],
  },
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'UV Radiation — Data Analysis',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 20,
    stem: 'Students in the biology class carried out the investigation in Question 3 and collected their results in the table below.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Exposure time to UV radiation / minutes', 'Student 1', 'Student 2', 'Student 3', 'Student 4'],
        rows: [
          ['0', '2201', '2499', '2397', '2303'],
          ['30', '1278', '1199', '1406', '1321'],
          ['45', '789', '746', '700', '765'],
        ],
      },
      caption: 'Concentration of CO₂ after 3 minutes / ppm, measured by four students at each UV exposure time.',
    },
    figCaption: 'Raw class results for the UV investigation.',
    tasks: [
      {
        label: 'a',
        text: '**State** a reason for having four students repeat the same experiment and **justify** your answer.',
        marks: 2,
        ph: 'Increase number of trials → reduce random error / calculate average / increase accuracy.',
      },
      {
        label: 'b',
        text: 'The class started to transform the data. Their transformed data is shown in the table below. Use the raw data to calculate the missing values and complete the table.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Exposure time to UV radiation / minutes', 'Average concentration of CO₂ after 3 minutes / ppm', 'Average rate of CO₂ production / ppm min⁻¹'],
            rows: [
              ['0', '2350', '783'],
              ['30', '?', '?'],
              ['45', '750', '250'],
            ],
          },
          caption: 'Transformed data. Average concentration = sum of the four values ÷ 4; rate = average ÷ 3 minutes. The 30-minute row is missing.',
        },
        ph: 'Average concentration = sum ÷ 4; rate = average ÷ 3 min. For 30 min: avg = 1301, rate = 433.67 → 434 ppm min⁻¹.',
      },
      {
        label: 'c',
        text: '**Plot** the data in part (b) on the axes below. Draw a line of best fit and add labels for the axes.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            title: 'The effect of UV radiation on the rate of respiration of yeast',
            xLabel: 'Time of UV exposure / min',
            yLabel: 'Rate of CO₂ production / ppm min⁻¹',
            xAxis: { label: 'Time of UV exposure / min', min: 0, max: 45, tick: 5 },
            yAxis: { label: 'Rate of CO₂ production / ppm min⁻¹', min: 200, max: 900, tick: 100 },
            dataTable: [
              { x: 0, y: 783 },
              { x: 30, y: 434 },
              { x: 45, y: 250 },
            ],
            bestFit: 'Draw a straight line of best fit through the three points.',
          },
          caption: 'Drag each point to its rate from part (b), then read off the line of best fit. Points: (0, 783), (30, 434), (45, 250).',
        },
        ph: 'Plot (0, 783), (30, 434) and (45, 250); draw line of best fit; X = time of UV exposure / min; Y = rate of CO₂ production / ppm min⁻¹.',
      },
      {
        label: 'd',
        text: 'Use the graph in part (c) to **predict** the average rate of CO₂ produced by yeast exposed to UV radiation for 20 minutes.',
        marks: 1,
        ph: 'Read from line of best fit at x = 20 min → approximately 550 ± 5 ppm min⁻¹.',
      },
      {
        label: 'e',
        text: 'The class left the experiment to continue overnight. They noticed that the concentration of CO₂ was unchanged at 750 ppm. **Suggest** two reasons why the concentration of CO₂ was unchanged.',
        marks: 2,
        ph: 'Sugar is a limiting factor OR yeast is dead (ethanol poisoning) OR no respiration occurring.',
      },
      {
        label: 'f',
        text: 'A researcher wanted to investigate the reason behind the decrease in CO₂ production with UV exposure. **Outline** the meaning of the term gene.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            // Static diagram: a gene as a labelled section of a DNA strand coding
            // for a protein (the enzyme needed for a respiration step).
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A gene is a section of DNA that codes for a protein</text><rect x="30" y="55" width="500" height="26" rx="13" fill="#eef4f7" stroke="#94a3ad"/><rect x="190" y="52" width="120" height="32" rx="6" fill="#0b7285" opacity="0.85"/><text x="250" y="73" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Gene A</text><text x="60" y="73" font-size="10" fill="#475569">DNA</text><line x1="250" y1="84" x2="250" y2="110" stroke="#94a3ad" stroke-width="1.5" marker-end="url(#g)"/><rect x="190" y="115" width="120" height="30" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="250" y="135" font-size="10" text-anchor="middle" fill="#b45309">enzyme (protein)</text><text x="345" y="133" font-size="10" fill="#475569">needed for a step of respiration</text><defs><marker id="g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#94a3ad"/></marker></defs></svg>',
          },
          caption: 'A gene (e.g. Gene A) is a section of DNA that codes for a protein such as a respiration enzyme.',
        },
        ph: 'A section of DNA that leads to a heritable characteristic and codes for a protein.',
      },
      {
        label: 'g',
        text: 'After exposing yeast to UV radiation for different lengths of time, the researcher did a genetic analysis on Gene A, Gene B, and Gene C. **Interpret** the data in the table to suggest the relationship between UV radiation and the number of observed changes in yeast DNA.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Exposure time to UV radiation / minutes', 'Gene A', 'Gene B', 'Gene C'],
            rows: [
              ['0', '0', '0', '0'],
              ['30', '2', '2', '2'],
              ['45', '5', '3', '2'],
            ],
          },
          caption: 'Number of observed changes in yeast DNA for each gene at each UV exposure time.',
        },
        ph: 'As UV exposure time increases, the number of DNA changes increases (positive correlation).',
      },
      {
        label: 'h',
        text: 'Using these results and the results from part (g), **suggest** the effects of UV on the rate of respiration of yeast.',
        marks: 3,
        ph: 'More UV → more DNA changes in enzymes → enzyme active site changed/denatured → cannot bind substrate → cellular respiration decreases.',
      },
      {
        label: 'i',
        text: 'The class determined that the yeast was killed after 60 minutes of exposure to UV radiation. Use evidence from this investigation and scientific reasoning to **suggest** if UV radiation would be effective in sanitizing surfaces by killing microorganisms.',
        marks: 2,
        ph: 'UV kills yeast at 60 min, may kill other microbes, but: no evidence others are killed / not practical outside lab / method lacks CVs.',
      },
    ],
  },
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Temperature & Yeast Respiration Design Investigation',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 19,
    stem: '**Design** an investigation to test the effect of changing the temperature on the rate of respiration of yeast. You are provided with standard laboratory equipment.',
    artefact: {
      component: 'ThermalSim',
      data: {
        // Interactive: scrub temperature to see how a respiration rate varies — a
        // genuine parametric stimulus that supports designing a temperature study.
        title: 'Rate of yeast respiration changes with temperature',
        mode: 'state',
        variable: 'Water-bath temperature',
        timeUnit: '°C',
        stateMin: 10,
        stateMax: 60,
        stops: [
          { time: 10, primary: 'Slow respiration', secondary: 'Low temperature — enzymes work slowly, little CO₂ produced.' },
          { time: 20, primary: 'Faster respiration', secondary: 'Warmer — enzyme and substrate collide more often, more CO₂.' },
          { time: 37, primary: 'Optimum (≈ 37 °C)', secondary: 'Fastest rate — enzymes work best near body temperature.' },
          { time: 50, primary: 'Rate falling', secondary: 'Too hot — enzymes begin to denature, active site changes shape.' },
          { time: 60, primary: 'Very slow / stopped', secondary: 'Enzymes denatured — respiration almost stops.' },
        ],
      },
      caption: 'Scrub the temperature to see how the rate of respiration rises to an optimum near 37 °C, then falls as enzymes denature. Use this to choose a sensible range for your independent variable.',
    },
    figCaption: 'Standard laboratory equipment is available to design a temperature investigation.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test the effect of changing the temperature on the rate of respiration of yeast. In your answer, you should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor the variables\n- details of the method used to collect sufficient data\n- a justification of the range you will use for the independent variable',
        marks: 19,
        ph: 'Full Criteria B design: IV=temperature, DV=CO₂ concentration, CVs, hypothesis, method, data plan, range justification.',
      },
    ],
  },
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Rabies & Ecosystems',
    topicCanonical: 'Pathogens & Parasites',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 8,
    stem: 'Rabies is a disease that affects mammals around the world. Managing healthy populations of wild animals is different across the world. Animal populations can suffer from injuries and diseases. Over-population and unsustainable grazing can destroy habitats.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Feeding relationships in the ecosystem (food web)',
        source: 'arrows point from prey to predator',
        nodes: [
          { id: 'plants', label: 'Plants', color: '#2f9e44', detail: 'Producer — the base of every food chain.' },
          { id: 'insects', label: 'Insects & crustaceans', color: '#1971c2', detail: 'Invertebrates — not mammals, cannot get rabies.' },
          { id: 'squirrel', label: 'Squirrel', color: '#e8590c', detail: 'A mammal — can be infected with rabies.' },
          { id: 'deer', label: 'Deer', color: '#e8590c', detail: 'A mammal — can be infected with rabies.' },
          { id: 'frog', label: 'Frog', color: '#1971c2', detail: 'An amphibian — not a mammal, cannot get rabies.' },
          { id: 'shrew', label: 'Shrew', color: '#e8590c', detail: 'A mammal — can be infected with rabies.' },
          { id: 'woodpecker', label: 'Woodpecker', color: '#1971c2', detail: 'A bird — not a mammal, cannot get rabies.' },
          { id: 'salmon', label: 'Salmon', color: '#1971c2', detail: 'A fish — not a mammal, cannot get rabies.' },
          { id: 'raccoon', label: 'Raccoon', color: '#e8590c', detail: 'A mammal — can be infected with rabies.' },
          { id: 'cougar', label: 'Cougar', color: '#e8590c', detail: 'A mammal (top predator) — can be infected with rabies.' },
          { id: 'bear', label: 'Bear', color: '#e8590c', detail: 'A mammal — can be infected with rabies.' },
          { id: 'eagle', label: 'Eagle', color: '#1971c2', detail: 'A bird (top predator) — not a mammal, cannot get rabies.' },
        ],
        edges: [
          { from: 'plants', to: 'insects' },
          { from: 'plants', to: 'squirrel' },
          { from: 'plants', to: 'deer' },
          { from: 'insects', to: 'frog' },
          { from: 'insects', to: 'shrew' },
          { from: 'insects', to: 'woodpecker' },
          { from: 'frog', to: 'raccoon' },
          { from: 'shrew', to: 'cougar' },
          { from: 'deer', to: 'cougar' },
          { from: 'salmon', to: 'bear' },
          { from: 'salmon', to: 'eagle' },
          { from: 'squirrel', to: 'eagle' },
          { from: 'raccoon', to: 'cougar' },
          { from: 'woodpecker', to: 'eagle' },
        ],
      },
      caption: 'Hover a node to see whether it is a mammal. Green = producer, blue = non-mammal, orange = mammal. Arrows run from prey to predator.',
    },
    figCaption: 'Rabies, ecosystems and food webs.',
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows the number of reported cases of bat rabies in Europe between 1980 and 2010. Use information from the video to **suggest** one human action that has led to a change in the number of cases of bat rabies in Europe.',
        marks: 1,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Number of reported cases of bat rabies in Europe',
            xLabel: 'Year',
            yLabel: 'Number of infected bats',
            xMin: 1975,
            xMax: 2015,
            yMin: 0,
            yMax: 140,
            xStep: 5,
            yStep: 20,
            dataPoints: [
              { x: 1980, y: 100 },
              { x: 1985, y: 62 },
              { x: 1990, y: 38 },
              { x: 1995, y: 20 },
              { x: 2000, y: 11 },
              { x: 2005, y: 8 },
              { x: 2010, y: 7 },
            ],
          },
          caption: 'Reported cases fall sharply from about 100 in 1980 to fewer than 10 by 2010.',
        },
        ph: 'Vaccination or killing of infected bats.',
      },
      {
        label: 'b',
        text: 'The feeding relationships in an ecosystem are shown in the food web below. Using the diagram, **identify** a food chain containing organisms that cannot be infected with rabies.',
        marks: 2,
        artefact: {
          component: 'NetworkGraph',
          data: {
            title: 'Food web — find a chain with no mammals',
            source: 'orange = mammal (can get rabies)',
            nodes: [
              { id: 'plants', label: 'Plants', color: '#2f9e44', detail: 'Producer — not a mammal.' },
              { id: 'insects', label: 'Insects & crustaceans', color: '#1971c2', detail: 'Invertebrates — not mammals.' },
              { id: 'frog', label: 'Frog', color: '#1971c2', detail: 'Amphibian — not a mammal.' },
              { id: 'woodpecker', label: 'Woodpecker', color: '#1971c2', detail: 'Bird — not a mammal.' },
              { id: 'salmon', label: 'Salmon', color: '#1971c2', detail: 'Fish — not a mammal.' },
              { id: 'eagle', label: 'Eagle', color: '#1971c2', detail: 'Bird (top predator) — not a mammal.' },
              { id: 'squirrel', label: 'Squirrel', color: '#e8590c', detail: 'Mammal — can get rabies.' },
              { id: 'raccoon', label: 'Raccoon', color: '#e8590c', detail: 'Mammal — can get rabies.' },
            ],
            edges: [
              { from: 'plants', to: 'insects' },
              { from: 'plants', to: 'squirrel' },
              { from: 'insects', to: 'frog' },
              { from: 'insects', to: 'woodpecker' },
              { from: 'frog', to: 'raccoon' },
              { from: 'woodpecker', to: 'eagle' },
              { from: 'salmon', to: 'eagle' },
              { from: 'squirrel', to: 'eagle' },
            ],
          },
          caption: 'A valid rabies-free chain uses only blue/green nodes, e.g. Plants → Insects & crustaceans → Woodpecker → Eagle.',
        },
        ph: 'Start with a producer; include non-mammal organisms. E.g. Plants → Insects → Woodpecker → Eagle.',
      },
      {
        label: 'c',
        text: 'Some raccoons in the ecosystem were infected with rabies. **Suggest** two possible consequences for other organisms present in the ecosystem. **Justify** your answers. You should use scientific language in your answer.',
        marks: 5,
        ph: 'Two consequences (e.g. cougar decreases, squirrel increases) each with scientific justification.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oral Rabies Vaccine — Evaluation',
    topicCanonical: 'Vaccination',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 16,
    stem: 'Rabies is a disease which affects people across borders and in different regions. 99% of cases in humans occur as a result of bites from dogs infected with rabies. One strategy to eradicate rabies in humans is to vaccinate dogs and prevent transmission between these two species. People in different regions have a shared responsibility to work together to develop an effective global solution. The WHO has a target to eradicate rabies by 2030.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Feature', 'Oral vaccine (in food/bait)', 'Injectable vaccine'],
        rows: [
          ['How given', 'Hidden in food bait, left for stray/wild dogs', 'Injected by a vet or nurse, dog must be caught'],
          ['Reaches stray & wild dogs', 'Yes — no need to handle the animal', 'Hard — wild dogs are difficult to catch'],
          ['Dose control', 'Uncertain — may be eaten by other animals', 'Exact, supervised dose'],
          ['Cost & training', 'Low cost, little training', 'Higher cost, trained staff needed'],
          ['Can add a contraceptive', 'Yes — helps control the dog population', 'Possible but needs a second handling'],
        ],
      },
      caption: 'Comparison of oral and injectable rabies vaccines for stray and wild dogs. Use it to evaluate the two approaches.',
    },
    figCaption: 'Evaluating an oral rabies vaccine as a global solution.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the use of an oral vaccine to prevent the transmission of rabies from infected stray and wild dogs to humans. In your answer, you should include:\n- an advantage and a disadvantage of using an oral vaccine rather than an injectable vaccine, with justification\n- a suggestion of why a contraceptive might be included with the rabies vaccine\n- an outline of the ethical considerations of using oral vaccines in stray and wild dogs\n- a discussion of why economic and political collaboration is needed to solve global issues\n- a concluding statement',
        marks: 14,
        ph: 'Cover oral vs injectable vaccine, contraceptive rationale, ethics, global collaboration, conclusion.',
      },
      {
        label: 'b',
        text: 'An alternative strategy for preventing rabies in humans is to give an anti-rabies vaccine directly to children. **Suggest** an advantage and a disadvantage of vaccinating children against rabies.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Strategy', 'Who is protected', 'Main limitation'],
            rows: [
              ['Vaccinate dogs (oral bait)', 'Stops the source — fewer infected dogs to bite people', 'Hard to reach every stray/wild dog'],
              ['Vaccinate children directly', 'Children given the vaccine are protected if bitten', 'Only vaccinated children are protected; supply & cost issues'],
            ],
          },
          caption: 'Two strategies for preventing rabies in humans. Vaccinating children protects the individual but not the wider population.',
        },
        ph: 'Advantage: included in vaccine schedule / guaranteed dose. Disadvantage: not all people vaccinated / supply issues / side effects.',
      },
    ],
  },
]
