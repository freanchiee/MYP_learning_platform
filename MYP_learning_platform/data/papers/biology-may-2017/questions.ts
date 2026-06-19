import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-may-2017',
  subject: 'Biology',
  session: 'May',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Senses & Nervous System (15 marks, Criterion A) ──────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Senses, Nervous System & Hearing Loss',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Senses'],
    marks: 15,
    stem: 'The human nervous system allows us to detect and respond to stimuli. The ear contains hair cells that respond to vibrations and generate nerve signals.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ear1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7d9c4"/><stop offset="1" stop-color="#eab69a"/></linearGradient></defs><rect width="600" height="340" fill="#ffffff"/><text x="300" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of the human ear</text><text x="120" y="46" font-size="11" text-anchor="middle" fill="#94a3ad">outer ear</text><text x="300" y="46" font-size="11" text-anchor="middle" fill="#94a3ad">middle ear</text><text x="470" y="46" font-size="11" text-anchor="middle" fill="#94a3ad">inner ear</text><line x1="215" y1="52" x2="215" y2="300" stroke="#e2e8f0" stroke-dasharray="4 4"/><line x1="370" y1="52" x2="370" y2="300" stroke="#e2e8f0" stroke-dasharray="4 4"/><path d="M40,90 Q70,60 110,80 Q140,95 120,150 Q110,185 150,185 L215,185 L215,205 L150,205 Q70,205 60,150 Q50,110 40,90 Z" fill="url(#ear1)" stroke="#c98a6a" stroke-width="1.5"/><text x="90" y="240" font-size="11" text-anchor="middle" fill="#7a3d12">pinna + ear canal</text><line x1="215" y1="160" x2="225" y2="160" stroke="#5b6b78"/><rect x="216" y="160" width="5" height="46" fill="#d97f5a" stroke="#a8531a"/><text x="218" y="280" font-size="10" text-anchor="middle" fill="#a8531a">ear drum</text><line x1="219" y1="206" x2="219" y2="270" stroke="#a8531a" stroke-width="0.8"/><circle cx="250" cy="150" r="8" fill="#cbd5e1" stroke="#5b6b78"/><circle cx="278" cy="135" r="8" fill="#cbd5e1" stroke="#5b6b78"/><circle cx="306" cy="150" r="8" fill="#cbd5e1" stroke="#5b6b78"/><text x="285" y="105" font-size="10" text-anchor="middle" fill="#5b6b78">middle-ear bones</text><line x1="285" y1="110" x2="285" y2="128" stroke="#5b6b78" stroke-width="0.8"/><path d="M375,150 q40,-15 55,20 q15,35 -20,48 q-35,12 -42,-22 q22,-6 22,-22 q0,-16 -22,-12 q4,-25 7,-12 Z" fill="#f3c7a0" stroke="#c98a6a" stroke-width="1.5"/><circle cx="410" cy="168" r="3" fill="#0b7285"/><circle cx="420" cy="178" r="3" fill="#0b7285"/><circle cx="416" cy="190" r="3" fill="#0b7285"/><text x="420" y="240" font-size="11" text-anchor="middle" fill="#0b7285" font-weight="700">cochlea</text><text x="420" y="256" font-size="9" text-anchor="middle" fill="#64748b">(contains hair cells)</text><line x1="416" y1="190" x2="420" y2="228" stroke="#0b7285" stroke-width="0.8"/><path d="M455,178 q40,4 70,-18" fill="none" stroke="#9c36b5" stroke-width="3"/><text x="520" y="150" font-size="11" text-anchor="middle" fill="#9c36b5">auditory nerve</text><text x="520" y="166" font-size="9" text-anchor="middle" fill="#9c36b5">(to brain)</text></svg>',
      },
      caption: 'The outer ear funnels sound to the ear drum; the middle-ear bones pass vibrations to the cochlea in the inner ear, where hair cells generate nerve signals carried to the brain by the auditory nerve.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two other human senses apart from hearing.',
        marks: 2,
        ph: 'Two of: sight, taste, smell, touch/proprioception...',
      },
      {
        label: 'b',
        text: '**Select** the type of cell that can detect a stimulus and generate nerve signals.',
        marks: 1,
        ph: 'Select the correct cell type.',
        widget: 'radio_select',
        widgetOptions: ['palisade', 'receptor', 'muscle', 'stem'],
      },
      {
        label: 'c',
        text: '**Outline** the route of a signal through the nervous system.',
        marks: 2,
        ph: 'Stimulus → sensory nerve → CNS/brain/spinal cord → motor nerve → effector/response...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr1c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="640" height="130" fill="#ffffff"/><text x="320" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pathway of a nerve signal</text><g><rect x="14" y="46" width="86" height="44" rx="8" fill="#fff3bf" stroke="#e8590c"/><text x="57" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#7a3d12">stimulus</text><text x="57" y="80" font-size="9" text-anchor="middle" fill="#a8531a">detected by</text></g><line x1="100" y1="68" x2="124" y2="68" stroke="#475569" stroke-width="1.6" marker-end="url(#arr1c)"/><g><rect x="126" y="46" width="92" height="44" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="172" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">receptor</text><text x="172" y="80" font-size="9" text-anchor="middle" fill="#0b7285">(sensory cell)</text></g><line x1="218" y1="68" x2="242" y2="68" stroke="#475569" stroke-width="1.6" marker-end="url(#arr1c)"/><g><rect x="244" y="46" width="104" height="44" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="296" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">sensory neuron</text><text x="296" y="80" font-size="9" text-anchor="middle" fill="#0b7285">(sensory nerve)</text></g><line x1="348" y1="68" x2="372" y2="68" stroke="#475569" stroke-width="1.6" marker-end="url(#arr1c)"/><g><rect x="374" y="46" width="96" height="44" rx="8" fill="#ede0f7" stroke="#9c36b5"/><text x="422" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#6d28a0">CNS</text><text x="422" y="78" font-size="9" text-anchor="middle" fill="#9c36b5">brain / spinal cord</text></g><line x1="470" y1="68" x2="494" y2="68" stroke="#475569" stroke-width="1.6" marker-end="url(#arr1c)"/><g><rect x="496" y="46" width="100" height="44" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="546" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">motor neuron</text><text x="546" y="80" font-size="9" text-anchor="middle" fill="#0b7285">→ effector</text></g><text x="546" y="112" font-size="9" text-anchor="middle" fill="#64748b">muscle / gland responds</text></svg>',
          },
          caption: 'A stimulus is detected by a receptor; sensory neurons carry the signal to the central nervous system, which sends a signal back along motor neurons to an effector.',
        },
      },
      {
        label: 'd',
        text: 'In the ear, hair cells respond to vibrations and generate nerve signals. Using the diagram above, **identify** the part of the ear where hair cells should be located.',
        marks: 1,
        ph: 'The cochlea...',
      },
      {
        label: 'e',
        text: 'Loud noises, including loud music, can damage hair cells which results in gradual hearing loss. Damaged or dead hair cells cannot be replaced through cell division so the hearing loss is permanent.\n\n**State** the names of the two different types of cell division and **list** two differences.',
        marks: 4,
        ph: 'Mitosis and Meiosis. Differences: meiosis produces genetically different cells / different chromosome number / 4 cells produced vs 2...',
      },
      {
        label: 'f',
        text: 'Loss of hearing can also be observed in young children. This loss of hearing can be caused by events during birth, or develop later in life, or it can be inherited. During birth, an extended shortage of oxygen supply can damage hair cells while muscle cells are not affected.\n\n**State** the metabolic process that allows muscle cells to produce energy in the absence of oxygen.',
        marks: 2,
        ph: 'Anaerobic respiration / fermentation / lactic acid fermentation...',
      },
      {
        label: 'g',
        text: '**Suggest** how a breakdown in the body\'s oxygen supply system could lead to a permanent loss of hearing.',
        marks: 3,
        ph: 'Lack of oxygen → lack of energy/ATP → hair cells cannot be repaired or replaced → permanent hearing loss...',
      },
    ],
  },

  // ── Q2: Hearing Aids & Cochlear Implants (9 marks, Criterion A/C/D) ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hearing Aids & Cochlear Implants',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 9,
    stem: 'The graph shows the range of frequencies that an average 20-year-old human can hear. Over time many devices have been used to assist humans with loss of hearing. All of the hearing aids below aim to increase the loudness of the sound entering the ear.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="360" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hearing range of an average 20-year-old</text><g stroke="#e5e7eb" stroke-width="0.6">' +
          '<line x1="80" y1="60" x2="560" y2="60"/><line x1="80" y1="98" x2="560" y2="98"/><line x1="80" y1="136" x2="560" y2="136"/><line x1="80" y1="174" x2="560" y2="174"/><line x1="80" y1="212" x2="560" y2="212"/><line x1="80" y1="250" x2="560" y2="250"/><line x1="80" y1="288" x2="560" y2="288"/></g>' +
          '<line x1="80" y1="60" x2="80" y2="288" stroke="#111" stroke-width="1.5"/><line x1="80" y1="288" x2="560" y2="288" stroke="#111" stroke-width="1.5"/>' +
          '<g font-size="10" fill="#374151" text-anchor="end">' +
          '<text x="74" y="64">70</text><text x="74" y="102">50</text><text x="74" y="140">30</text><text x="74" y="178">10</text><text x="74" y="216">-10</text><text x="74" y="254">-20</text></g>' +
          '<text x="26" y="180" font-size="11" fill="#374151" font-weight="500" transform="rotate(-90 26 180)" text-anchor="middle">Sound level / dB</text>' +
          '<g font-size="9" fill="#374151" text-anchor="middle">' +
          '<text x="100" y="302">15.6</text><text x="153" y="302">62.5</text><text x="207" y="302">250</text><text x="260" y="302">1000</text><text x="314" y="302">4000</text><text x="367" y="302">16000</text></g>' +
          '<text x="320" y="322" font-size="11" fill="#374151" font-weight="500" text-anchor="middle">Frequency / Hz (logarithmic scale)</text>' +
          '<text x="120" y="78" font-size="11" fill="#1f2d3a" font-weight="600">Louder ↑</text><text x="120" y="278" font-size="11" fill="#1f2d3a" font-weight="600">Quieter ↓</text>' +
          '<path d="M88,64 C140,150 200,196 280,236 C300,246 312,250 320,250 C360,248 380,212 420,224 C448,232 460,200 480,210 C510,224 535,150 552,138" fill="none" stroke="#0b7285" stroke-width="2.5"/>' +
          '<line x1="320" y1="250" x2="320" y2="288" stroke="#c0392b" stroke-width="1" stroke-dasharray="3 3"/><circle cx="320" cy="250" r="3.5" fill="#c0392b"/><text x="338" y="244" font-size="9" fill="#c0392b">most sensitive (≈ 3900 Hz)</text>' +
          '<text x="250" y="180" font-size="11" fill="#1f2d3a" font-weight="600">Audible</text><text x="250" y="266" font-size="11" fill="#94a3ad">Inaudible</text></svg>',
      },
      caption: 'Threshold of hearing: any sound above the curve is audible. The ear is most sensitive (can hear the quietest sound) at a frequency of about 3900 Hz.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the graph to **state** the frequency at which an average 20-year-old human can hear the quietest sound.',
        marks: 1,
        ph: 'Approximately 3900 Hz (accept ±100 Hz)...',
      },
      {
        label: 'b',
        text: 'Considering the function of the ear, **describe** an advantage and a disadvantage of amplifying the sound entering the ear.',
        marks: 2,
        ph: 'Advantage: louder sounds stimulate hair cells more strongly / improve hearing. Disadvantage: overstimulation can damage remaining hair cells...',
      },
      {
        label: 'c',
        text: 'Recently a different type of hearing aid was developed called the cochlear implant. The cochlear implant consists of a microphone and a processor (a) mounted outside the head and the actual implant, located under the skin (b) and partly inside the cochlea (c).\n\nUse the image above to **suggest** what kind of stimulus part (c) of the cochlear implant needs to generate for a person to detect a sound. **Justify** your answer.',
        marks: 2,
        ph: 'Electrical impulses/signals; because the cochlea/hair cells generate nerve signals electrically...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="head2c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7d9c4"/><stop offset="1" stop-color="#e9b896"/></linearGradient></defs><rect width="560" height="320" fill="#ffffff"/><text x="280" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cochlear implant</text><path d="M120,90 Q120,40 200,40 Q300,40 300,150 Q300,250 200,260 Q140,262 130,210 L120,210 Q108,180 124,168 Q120,130 120,90 Z" fill="url(#head2c)" stroke="#c98a6a" stroke-width="1.5"/><path d="M300,120 q40,0 44,40 q4,40 -40,46 q40,-10 36,-46 q-2,-30 -40,-40 Z" fill="#f3c7a0" stroke="#c98a6a" stroke-width="1.2"/><circle cx="316" cy="78" r="14" fill="#cbd5e1" stroke="#5b6b78" stroke-width="2"/><circle cx="316" cy="78" r="5" fill="#0b7285"/><line x1="316" y1="64" x2="316" y2="40" stroke="#5b6b78" stroke-width="3"/><circle cx="316" cy="36" r="6" fill="#5b6b78"/><text x="360" y="44" font-size="13" font-weight="700" fill="#e8590c">(a)</text><text x="378" y="60" font-size="10" fill="#7a3d12">microphone +</text><text x="378" y="74" font-size="10" fill="#7a3d12">processor (outside)</text><circle cx="316" cy="110" r="9" fill="#9ec5d6" stroke="#0b7285" stroke-width="1.5"/><text x="360" y="108" font-size="13" font-weight="700" fill="#0b7285">(b)</text><text x="378" y="122" font-size="10" fill="#0b5566">implant under skin</text><path d="M316,118 Q330,150 320,175 Q312,195 330,205" fill="none" stroke="#0b7285" stroke-width="2.5"/><g fill="#c0392b"><circle cx="324" cy="190" r="2"/><circle cx="330" cy="200" r="2"/><circle cx="320" cy="180" r="2"/></g><text x="360" y="190" font-size="13" font-weight="700" fill="#c0392b">(c)</text><text x="378" y="204" font-size="10" fill="#7a3d12">electrode array</text><text x="378" y="218" font-size="10" fill="#7a3d12">inside cochlea</text><text x="120" y="300" font-size="10" fill="#64748b">Part (c) sits among the hair-cell region of the cochlea and connects to the auditory nerve.</text></svg>',
          },
          caption: 'A cochlear implant: (a) external microphone + processor, (b) implant under the skin, (c) electrode array inside the cochlea, near the auditory nerve.',
        },
      },
      {
        label: 'd',
        text: '**Suggest** an advantage and a disadvantage of cochlear implants.',
        marks: 2,
        ph: 'Advantage: enables hearing even when hair cells do not function / no nerve impulses transmitted. Disadvantage: expensive / requires surgery...',
      },
      {
        label: 'e',
        text: '**Suggest** an advantage and a disadvantage of (traditional) hearing aids.',
        marks: 2,
        ph: 'Advantage: enables hearing / no surgery required / low cost / readily available. Disadvantage: expensive / heavy / uncomfortable...',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Two ways of assisting hearing loss',
            headers: ['Feature', 'Traditional hearing aid', 'Cochlear implant'],
            rows: [
              ['How it works', 'amplifies (makes louder) the sound entering the ear', 'electrodes stimulate the auditory nerve directly'],
              ['Surgery needed?', 'no', 'yes (implant placed in the cochlea)'],
              ['Works if hair cells are dead?', 'no — relies on working hair cells', 'yes — bypasses damaged hair cells'],
              ['Relative cost', 'lower', 'much higher (10–20× a hearing aid)'],
              ['Worn outside the body?', 'yes', 'only the microphone + processor'],
            ],
            caption: 'Compare the two devices to suggest an advantage and a disadvantage of each.',
          },
        },
      },
    ],
  },

  // ── Q3: Genetics — Hearing Loss (7 marks, Criterion A) ──────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Genetics & Heredity — Hearing Loss',
    topicCanonical: 'Inheritance & Variation',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 7,
    stem: 'Several genes have been discovered that are known to be responsible for hearing loss in humans. Some forms of hearing loss are inherited. The diagram below shows how two parents with normal hearing can have a child with hearing loss.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="320" fill="#ffffff"/><text x="240" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Punnett square: two carrier parents</text><text x="240" y="46" font-size="11" text-anchor="middle" fill="#64748b">For a recessively-inherited form of hearing loss (h = affected allele)</text><text x="190" y="86" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">Father  Hh</text><text x="86" y="200" font-size="13" font-weight="700" text-anchor="middle" fill="#9c36b5" transform="rotate(-90 86 200)">Mother  Hh</text><g font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a"><text x="170" y="108">H</text><text x="250" y="108">h</text></g><g font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a"><text x="118" y="160">H</text><text x="118" y="232">h</text></g><g stroke="#5b6b78" stroke-width="1.5" fill="none"><rect x="130" y="120" width="80" height="72"/><rect x="210" y="120" width="80" height="72"/><rect x="130" y="192" width="80" height="72"/><rect x="210" y="192" width="80" height="72"/></g><rect x="130" y="120" width="80" height="72" fill="#e6f4f6"/><rect x="210" y="120" width="80" height="72" fill="#e6f4f6"/><rect x="130" y="192" width="80" height="72" fill="#e6f4f6"/><rect x="210" y="192" width="80" height="72" fill="#fde2e1"/><g stroke="#5b6b78" stroke-width="1.5" fill="none"><rect x="130" y="120" width="80" height="72"/><rect x="210" y="120" width="80" height="72"/><rect x="130" y="192" width="80" height="72"/><rect x="210" y="192" width="80" height="72"/></g><g font-size="18" font-weight="700" text-anchor="middle" fill="#0b5566"><text x="170" y="162">HH</text><text x="250" y="162">Hh</text><text x="170" y="234">Hh</text></g><text x="250" y="234" font-size="18" font-weight="700" text-anchor="middle" fill="#c0392b">hh</text><rect x="130" y="284" width="14" height="14" fill="#e6f4f6" stroke="#5b6b78"/><text x="150" y="295" font-size="11" fill="#64748b">normal hearing (HH or Hh)</text><rect x="300" y="284" width="14" height="14" fill="#fde2e1" stroke="#5b6b78"/><text x="320" y="295" font-size="11" fill="#64748b">hearing loss (hh)</text></svg>',
      },
      caption: 'Two normal-hearing carrier parents (Hh × Hh) can produce a child with hearing loss (hh) — a 1-in-4 chance — which is only possible if the condition is recessive.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Parents with normal hearing have a child with genetically determined hearing loss. **Deduce and justify** whether this characteristic is controlled by a dominant allele or a recessive allele.',
        marks: 2,
        ph: 'Recessive; because both parents have normal hearing but the child is affected, so the affected allele must be recessive and the parents must be carriers; if the allele was dominant the parents would also be affected...',
      },
      {
        label: 'b',
        text: 'Use the symbols **H** (normal hearing) and **h** (hearing loss) to show the genetic information (allele combination) of the parents and child in part (a).',
        marks: 3,
        ph: 'Mother: Hh, Father: Hh, Child: hh (accept hH)...',
      },
      {
        label: 'c',
        text: 'Gene PAX3 is one of the genes that control hearing. The normal form of PAX3 is recessive (symbol **a**, normal hearing). The mutated form of PAX3 is dominant (symbol **A**, hearing loss).\n\n**Explain** why a person with hearing loss possessing two dominant alleles (genotype **AA**) would only have children with hearing loss.',
        marks: 2,
        ph: 'AA parent always passes on A (dominant) allele to every child; child always inherits at least one A; dominant allele inherited from other parent will have no effect...',
      },
    ],
  },

  // ── Q4: Blood Oxygen & Altitude (9 marks, Criterion A/B/C) ───────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Blood Oxygen, Altitude & Homeostasis',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'In 2011, a group of international students took part in a run in Bolivia. The runners started at a lower altitude (700 m above sea level) and finished at a higher altitude (3500 m above sea level). During the run, scientists monitored many factors to study how altitude impacts the human body.',
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'Effect of altitude on quantity of oxygen in the blood',
        mode: 'readoff',
        xLabel: 'Altitude / m',
        yLabel: 'Quantity of oxygen in blood / arbitrary units',
        xRange: [0, 4000],
        yRange: [0, 90],
        points: [
          [700, 72],
          [3500, 47],
        ],
        dataMaxX: 3500,
        readouts: [
          { x: 0, note: 'sea level (extrapolate)' },
          { x: 700, note: 'lower altitude', expected: '72' },
          { x: 3500, note: 'higher altitude', expected: '47' },
        ],
      },
      caption: 'Only two readings were taken: at 700 m the blood oxygen was about 72 units, and at 3500 m about 47 units. Drag the vertical cursor to read off any value; move it left to 0 m (sea level) to extrapolate.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the blood cell responsible for transporting oxygen.',
        marks: 1,
        ph: 'Red blood cell / erythrocyte...',
      },
      {
        label: 'b',
        text: 'The scientists conducted one trial of an investigation during the run. As one of the runners moved from lower to higher altitude, the scientists measured the quantity of oxygen in his blood.\n\n**Suggest** a research question that could be investigated by this experiment.',
        marks: 1,
        ph: 'Does the quantity/amount of oxygen in the blood vary with altitude? (link IV and DV)...',
      },
      {
        label: 'c',
        text: '**State** one weakness in the data shown on the graph.',
        marks: 1,
        ph: 'Only two data points / only one trial / only one runner...',
      },
      {
        label: 'd',
        text: 'Using the graph, **state** the relationship between altitude and quantity of oxygen in the blood.',
        marks: 1,
        ph: 'As altitude increases, quantity of oxygen in blood decreases / inverse relationship...',
      },
      {
        label: 'e',
        text: 'Using the graph, **predict** the quantity of oxygen in the blood at sea level.',
        marks: 1,
        ph: 'Accept any value in range 78–82 (arbitrary units)...',
      },
      {
        label: 'f',
        text: 'Hemoglobin is the molecule that transports oxygen in the blood around the body. A graph of hemoglobin concentration in the blood against altitude is shown above.\n\nThe percentage decrease in oxygen available in the air between an altitude of 700 m and 3500 m is 45%. However the percentage decrease in the quantity of oxygen in the blood is only about 35% over the same increase in altitude (from about 72 units to 47 units).\n\n**Explain** how the change in hemoglobin concentration in the blood is involved in homeostasis.',
        marks: 4,
        ph: 'Body responds to less oxygen; produces more hemoglobin; increases O2 carried in blood; at higher altitude oxygen availability decreases more than in blood; hemoglobin concentration increases to maintain oxygen supply...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Effect of altitude on hemoglobin concentration in the blood',
            xLabel: 'Altitude',
            yLabel: 'Hemoglobin concentration',
            xUnit: 'm',
            yUnit: 'g dm⁻³',
            xMin: 0,
            xMax: 4000,
            yMin: 15.0,
            yMax: 18.0,
            xStep: 500,
            yStep: 0.5,
            dataPoints: [
              { x: 700, y: 15.25 },
              { x: 3500, y: 17.3 },
            ],
            lobf: true,
          },
          caption: 'As altitude increases, the blood\'s hemoglobin concentration rises from about 15.25 g dm⁻³ at 700 m to about 17.3 g dm⁻³ at 3500 m.',
        },
      },
    ],
  },

  // ── Q5: Altitude & Physiological Investigation (13 marks, Criterion B/C) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Blood O₂ Saturation & Heart Rate — Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Gas Exchange'],
    marks: 13,
    stem: 'During the run, the blood oxygen saturation and heart rates of five students were measured at three different altitudes.',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Blood oxygen saturation and heart rate at three altitudes',
        headers: ['Student', 'Blood O₂ saturation / % at 700 m', 'at 2100 m', 'at 3500 m', 'Heart rate / beats per minute at 700 m', 'at 2100 m', 'at 3500 m'],
        rows: [
          ['1', '99', '90', '82', '64', '88', '108'],
          ['2', '98', '92', '84', '70', '90', '112'],
          ['3', '100', '89', '80', '60', '84', '104'],
          ['4', '97', '91', '83', '72', '94', '110'],
          ['5', '99', '88', '81', '66', '86', '106'],
        ],
        caption: 'Five students measured at three altitudes. Read down a column to see how each quantity changes as altitude increases.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables that should be considered in this investigation.',
        marks: 4,
        ph: 'IV: altitude. DV: blood oxygen saturation or heart rate. CV1: age of runners. CV2: resting heart rate / time of acclimatization / mass of food...',
      },
      {
        label: 'b',
        text: 'The measurements are shown in the graphs below. Blood oxygen saturation shows the actual quantity of oxygen in the blood compared to the maximum quantity of oxygen that could be carried. 100% saturation means that the blood carries as much oxygen as possible.\n\n**Interpret** the trends in the data shown in the graphs and **explain** the effect on the body shown by the results from this investigation.',
        marks: 3,
        ph: 'Blood O2 saturation decreases with altitude; heart rate increases with altitude; body moves blood faster to supply oxygen to meet oxygen demand as altitude decreases availability...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="280" fill="#ffffff"/>' +
              '<text x="160" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Blood oxygen saturation vs altitude</text>' +
              '<g stroke="#e5e7eb" stroke-width="0.6"><line x1="60" y1="50" x2="300" y2="50"/><line x1="60" y1="90" x2="300" y2="90"/><line x1="60" y1="130" x2="300" y2="130"/><line x1="60" y1="170" x2="300" y2="170"/></g>' +
              '<line x1="60" y1="50" x2="60" y2="210" stroke="#111" stroke-width="1.3"/><line x1="60" y1="210" x2="300" y2="210" stroke="#111" stroke-width="1.3"/>' +
              '<g font-size="9" fill="#374151" text-anchor="end"><text x="55" y="54">100</text><text x="55" y="94">90</text><text x="55" y="134">80</text><text x="55" y="174">70</text></g>' +
              '<g font-size="9" fill="#374151" text-anchor="middle"><text x="100" y="224">700</text><text x="180" y="224">2100</text><text x="260" y="224">3500</text></g>' +
              '<text x="180" y="244" font-size="10" fill="#374151" text-anchor="middle">Altitude / m</text>' +
              '<text x="22" y="130" font-size="10" fill="#374151" text-anchor="middle" transform="rotate(-90 22 130)">O₂ saturation / %</text>' +
              '<g fill="#0b7285"><circle cx="100" cy="54" r="2.5"/><circle cx="100" cy="58" r="2.5"/><circle cx="100" cy="50" r="2.5"/><circle cx="100" cy="62" r="2.5"/><circle cx="180" cy="90" r="2.5"/><circle cx="180" cy="94" r="2.5"/><circle cx="180" cy="98" r="2.5"/><circle cx="180" cy="86" r="2.5"/><circle cx="260" cy="126" r="2.5"/><circle cx="260" cy="130" r="2.5"/><circle cx="260" cy="134" r="2.5"/><circle cx="260" cy="138" r="2.5"/></g>' +
              '<text x="460" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Heart rate vs altitude</text>' +
              '<g stroke="#e5e7eb" stroke-width="0.6"><line x1="360" y1="50" x2="600" y2="50"/><line x1="360" y1="90" x2="600" y2="90"/><line x1="360" y1="130" x2="600" y2="130"/><line x1="360" y1="170" x2="600" y2="170"/></g>' +
              '<line x1="360" y1="50" x2="360" y2="210" stroke="#111" stroke-width="1.3"/><line x1="360" y1="210" x2="600" y2="210" stroke="#111" stroke-width="1.3"/>' +
              '<g font-size="9" fill="#374151" text-anchor="end"><text x="355" y="54">120</text><text x="355" y="94">100</text><text x="355" y="134">80</text><text x="355" y="174">60</text></g>' +
              '<g font-size="9" fill="#374151" text-anchor="middle"><text x="400" y="224">700</text><text x="480" y="224">2100</text><text x="560" y="224">3500</text></g>' +
              '<text x="480" y="244" font-size="10" fill="#374151" text-anchor="middle">Altitude / m</text>' +
              '<text x="322" y="130" font-size="10" fill="#374151" text-anchor="middle" transform="rotate(-90 322 130)">Heart rate / bpm</text>' +
              '<g fill="#c0392b"><circle cx="400" cy="178" r="2.5"/><circle cx="400" cy="170" r="2.5"/><circle cx="400" cy="182" r="2.5"/><circle cx="400" cy="166" r="2.5"/><circle cx="480" cy="134" r="2.5"/><circle cx="480" cy="126" r="2.5"/><circle cx="480" cy="122" r="2.5"/><circle cx="480" cy="138" r="2.5"/><circle cx="560" cy="94" r="2.5"/><circle cx="560" cy="86" r="2.5"/><circle cx="560" cy="90" r="2.5"/><circle cx="560" cy="98" r="2.5"/></g></svg>',
          },
          caption: 'Left: blood oxygen saturation falls as altitude increases. Right: heart rate rises as altitude increases. Each altitude shows the readings of all five students.',
        },
      },
      {
        label: 'c',
        text: '**Suggest** two improvements that could be made to this investigation. **Justify** your answers.',
        marks: 4,
        ph: 'Improvement 1: more altitudes / more runners. Justification: better idea of trend / more reliable data. Improvement 2: another measurable control variable. Justification: more controlled data...',
      },
      {
        label: 'd',
        text: '**Suggest** an extension for this investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Study various ages / other physiological factors (e.g. lung capacity). Justification: linked to extension...',
      },
    ],
  },

  // ── Q6: Pika Body Mass & Altitude (19 marks, Criterion B/C) ───────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Pika Body Mass — Natural Selection & Altitude',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    marks: 19,
    stem: 'The pika is a small mammal that lives in the mountains. A team of scientists was interested in studying whether groups of pikas had adjusted to living at different altitudes. The aim of the research was to determine whether body mass was related to altitude. The scientists identified isolated groups of pikas living at different altitudes and determined the mean body mass of each group.',
    artefact: {
      component: 'DataTableInteractive',
      data: {
        title: 'Mean body mass of pika groups at different altitudes',
        headers: ['Pika group (altitude / m)', 'Mean body mass / g'],
        rows: [
          ['Group A (500 m)', '139.8'],
          ['Group B (1000 m)', '143.0'],
          ['Group C (1500 m)', '146.5'],
          ['Group D (2000 m)', '149.8'],
          ['Group E (2500 m)', '153.1'],
          ['Group F (3000 m)', '156.4'],
        ],
        caption: 'Data collected by recording the mean body mass of each isolated pika group. Click the lowest-altitude and highest-altitude rows to read off the masses you need.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest and justify** two control variables that should be considered for this experiment.',
        marks: 4,
        ph: 'CV1: age of pika (justification: different ages have different mass). CV2: sex of pika (male/female may differ). CV3: time of year (seasonal mass changes)...',
      },
      {
        label: 'b',
        text: '**State** how many individuals in each group should be sampled to collect a sufficient amount of reliable data.',
        marks: 1,
        ph: 'At least three individuals...',
      },
      {
        label: 'c',
        text: 'Click on the rows in the interactive table above to pin the mean body mass data for each pika group.\n\n**Design** a data table and collect the data using the tool above. You should include headings in your table.',
        marks: 4,
        ph: 'Table headings: Altitude (m) and Mean (average) body mass (g); both units; at least five values recorded...',
      },
      {
        label: 'd',
        text: '**Calculate** the percentage increase in mean body mass between the groups living at the lowest altitude and the highest altitude. Give your answer to an appropriate number of significant figures.',
        marks: 3,
        ph: 'Difference = 16.6 g; percentage = 11.87% or 12% (to 3 sig figs). Accept any correctly calculated final value...',
      },
      {
        label: 'e',
        text: 'The hypothesis for this investigation was that groups of pikas living at higher altitudes will have a higher mean body mass in order to adjust to conditions at higher altitudes.\n\n**Outline** whether or not the data from this experiment support the hypothesis. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis is supported; justification refers to trends in data; answer supported by numerical data from table...',
      },
      {
        label: 'f',
        text: 'The scientists asked if natural selection led to the change in mean body mass in the groups of pikas living on this mountain.\n\n**Evaluate** whether the method of this investigation is appropriate to answer the question the researchers asked. In your answer, you should identify strengths and weaknesses of the method. Use scientific knowledge and understanding to give a concluding appraisal.',
        marks: 5,
        ph: 'Strength: separate groups identified / measurements at several altitudes / trait reliably measured. Limitation: did not check if groups were isolated / only one mountain / did not check food was same / change in mass ≠ natural selection. Appraisal: method was inappropriate...',
      },
    ],
  },

  // ── Q7: Investigation Design — Altitude & Athletic Performance (21 marks, B) ─
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Altitude & Athletic Performance',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The human body adjusts to changes in the environment. This is known as acclimatization. Some acclimatizations may allow athletes to improve their performance. Athletes sometimes train at high altitudes before they compete at lower altitudes as they think that training at high altitude might give them a competitive advantage.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr7" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="640" height="230" fill="#ffffff"/><text x="320" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How training at high altitude may improve performance</text><g><rect x="14" y="60" width="110" height="60" rx="8" fill="#ede0f7" stroke="#9c36b5"/><text x="69" y="84" font-size="11" font-weight="700" text-anchor="middle" fill="#6d28a0">Train at</text><text x="69" y="100" font-size="11" font-weight="700" text-anchor="middle" fill="#6d28a0">high altitude</text><text x="69" y="114" font-size="9" text-anchor="middle" fill="#9c36b5">less O₂ in the air</text></g><line x1="124" y1="90" x2="148" y2="90" stroke="#475569" stroke-width="1.6" marker-end="url(#arr7)"/><g><rect x="150" y="60" width="120" height="60" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="210" y="82" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">Body responds:</text><text x="210" y="98" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">makes more</text><text x="210" y="113" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">red blood cells</text></g><line x1="270" y1="90" x2="294" y2="90" stroke="#475569" stroke-width="1.6" marker-end="url(#arr7)"/><g><rect x="296" y="60" width="120" height="60" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="356" y="82" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">More hemoglobin</text><text x="356" y="98" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">→ blood carries</text><text x="356" y="113" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">more oxygen</text></g><line x1="416" y1="90" x2="440" y2="90" stroke="#475569" stroke-width="1.6" marker-end="url(#arr7)"/><g><rect x="442" y="60" width="120" height="60" rx="8" fill="#fff3bf" stroke="#e8590c"/><text x="502" y="82" font-size="11" font-weight="700" text-anchor="middle" fill="#7a3d12">Compete at</text><text x="502" y="98" font-size="11" font-weight="700" text-anchor="middle" fill="#7a3d12">low altitude:</text><text x="502" y="113" font-size="11" font-weight="700" text-anchor="middle" fill="#7a3d12">better performance?</text></g><text x="320" y="160" font-size="11" text-anchor="middle" fill="#64748b">Independent variable: altitude of training · Dependent variable: athletic performance (e.g. time or distance)</text><text x="320" y="180" font-size="11" text-anchor="middle" fill="#64748b">Control variables: age, fitness level and duration of training</text><text x="320" y="206" font-size="10" text-anchor="middle" fill="#94a3ad">Use this mechanism to formulate a hypothesis and design your investigation.</text></svg>',
      },
      caption: 'Acclimatization to altitude: a possible mechanism linking high-altitude training to improved performance, to help you frame the variables and hypothesis for your design.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the relationship between training at high altitude and performance in athletes. In your answer you should:\n\n- outline a suitable physical activity\n- explain the problem to be studied\n- formulate a testable hypothesis with a scientific explanation\n- identify relevant variables\n- describe how to measure and manipulate the variables in your method\n- list any safety considerations\n- outline any ethical concerns about investigations using humans.',
        marks: 21,
        ph: 'Problem: Does training at high altitude improve athletic performance at lower altitude? Hypothesis: Athletes who train at high altitude will perform better because body adapts (more hemoglobin, better O2 transport). IV: altitude of training. DV: performance (time / distance). CV: age, fitness level, duration of training. Method: groups train at different altitudes; measure performance before and after; repeat with control group. Safety: monitor vital signs; stay within safe altitude ranges. Ethics: informed consent; not exceed healthy limits...',
      },
    ],
  },

  // ── Q8: Chestnut Trees & Genetic Engineering (27 marks, Criterion A/D) ────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Genetic Engineering — American Chestnut Trees',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pathogens & Parasites', 'Ethical Implications'],
    marks: 27,
    stem: 'The American chestnut tree is native to North America. Many animals, such as squirrels, bears and birds, relied on chestnut trees as a food source. Humans also used chestnuts as a food source. The imported trees carried a disease-causing fungus, which causes chestnut blight disease in other tree species. 98 per cent of all American chestnut trees were killed within 50 years. The Japanese chestnut trees had evolved resistance to the fungus.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Collapse of the American chestnut after the blight fungus arrived',
        xLabel: 'Years after fungus introduced',
        yLabel: 'American chestnut trees remaining',
        xUnit: 'years',
        yUnit: '% of original',
        xMin: 0,
        xMax: 50,
        yMin: 0,
        yMax: 100,
        xStep: 10,
        yStep: 20,
        dataPoints: [
          { x: 0, y: 100 },
          { x: 10, y: 88 },
          { x: 20, y: 60 },
          { x: 30, y: 28 },
          { x: 40, y: 8 },
          { x: 50, y: 2 },
        ],
      },
      caption: 'Once the imported fungus arrived, the American chestnut population fell to just 2% of its original size within 50 years (98% of the trees were killed).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the information given above, **state** which **organism** caused American chestnut trees to die.',
        marks: 1,
        ph: 'Fungus...',
      },
      {
        label: 'b',
        text: '**Outline** the specific human action that caused the organism you named in part (a) to be introduced into North America.',
        marks: 2,
        ph: 'Introduction of Japanese/foreign/non-native/exotic trees that were carrying the blight disease/fungus/infection...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bark8" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9c6b3f"/><stop offset="1" stop-color="#7a4f2a"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Chestnut blight: a fungal canker on the trunk</text><rect x="200" y="44" width="160" height="210" rx="10" fill="url(#bark8)" stroke="#5a3a1d" stroke-width="2"/><g stroke="#5a3a1d" stroke-width="0.8" opacity="0.5"><line x1="222" y1="44" x2="222" y2="254"/><line x1="248" y1="44" x2="248" y2="254"/><line x1="312" y1="44" x2="312" y2="254"/><line x1="338" y1="44" x2="338" y2="254"/></g><ellipse cx="280" cy="150" rx="46" ry="70" fill="#c0612a" stroke="#7a3d12" stroke-width="2"/><ellipse cx="280" cy="150" rx="30" ry="50" fill="#e08a3c"/><g fill="#7a3d12"><circle cx="270" cy="130" r="3"/><circle cx="290" cy="140" r="3"/><circle cx="276" cy="160" r="3"/><circle cx="292" cy="170" r="3"/><circle cx="282" cy="150" r="3"/></g><text x="280" y="246" font-size="10" text-anchor="middle" fill="#fff">trunk</text><line x1="326" y1="150" x2="420" y2="120" stroke="#5b6b78" stroke-width="0.8"/><text x="424" y="108" font-size="11" font-weight="700" fill="#c0392b">sunken canker</text><text x="424" y="124" font-size="10" fill="#7a3d12">fungus grows in the bark</text><text x="424" y="146" font-size="10" fill="#7a3d12">and underlying tissue,</text><text x="424" y="160" font-size="10" fill="#7a3d12">killing the xylem and</text><text x="424" y="174" font-size="10" fill="#7a3d12">phloem that transport</text><text x="424" y="188" font-size="10" fill="#7a3d12">water and sugars.</text><text x="280" y="272" font-size="10" text-anchor="middle" fill="#64748b">The fungus arrived on imported (non-native) chestnut trees.</text></svg>',
          },
          caption: 'The blight fungus forms a sunken canker that destroys the bark and the transport tissue (xylem and phloem) of the trunk, ring-barking and killing the tree.',
        },
      },
      {
        label: 'c',
        text: 'Using scientific language, **outline** the effect of the damage on the transport processes in the diseased trees.',
        marks: 3,
        ph: 'Correct use of: xylem, phloem, translocation, transpiration. Xylem or phloem or transport tissue is damaged; water/mineral nutrients not transported (by damaged xylem); sugars/assimilates not transported (by damaged phloem)...',
      },
      {
        label: 'd',
        text: '**State** one similarity and one difference between genetic engineering and selective breeding.',
        marks: 2,
        ph: 'Similarity: both can add new traits/characteristics; both can create new combination of genes. Difference: GE produces faster results / GE can add traits from one species to a new species...',
      },
      {
        label: 'e',
        text: '**Describe** how biotechnology is used to create disease-resistant American chestnut trees.',
        marks: 4,
        ph: 'Extract resistance/target/oxo gene or desired DNA from wheat; insert gene into American chestnut using enzymes; resistance gene/DNA/genetic information is transferred to offspring...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr8e" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="640" height="220" fill="#ffffff"/><text x="320" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Genetic engineering of a disease-resistant chestnut</text><g><rect x="16" y="58" width="120" height="92" rx="8" fill="#dff0d8" stroke="#3a7d44"/><text x="76" y="80" font-size="11" font-weight="700" text-anchor="middle" fill="#2f6b39">Wheat plant</text><path d="M50,96 q26,-14 52,0" fill="none" stroke="#0b7285" stroke-width="2.5"/><path d="M50,104 q26,14 52,0" fill="none" stroke="#e8590c" stroke-width="2.5"/><rect x="64" y="92" width="24" height="20" fill="#fff3bf" stroke="#e8590c"/><text x="76" y="132" font-size="9" text-anchor="middle" fill="#2f6b39">has resistance gene</text></g><line x1="136" y1="104" x2="164" y2="104" stroke="#475569" stroke-width="1.6" marker-end="url(#arr8e)"/><g><rect x="166" y="58" width="130" height="92" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="231" y="78" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">Cut out the gene</text><rect x="196" y="92" width="28" height="22" fill="#fff3bf" stroke="#e8590c"/><path d="M188,103 l8,0 m32,0 l8,0" stroke="#0b7285" stroke-width="2.5"/><text x="231" y="134" font-size="9" text-anchor="middle" fill="#0b7285">using enzymes</text></g><line x1="296" y1="104" x2="324" y2="104" stroke="#475569" stroke-width="1.6" marker-end="url(#arr8e)"/><g><rect x="326" y="58" width="140" height="92" rx="8" fill="#e6f4f6" stroke="#0b7285"/><text x="396" y="78" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">Insert into chestnut</text><text x="396" y="92" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5566">DNA</text><path d="M346,116 q50,-16 100,0" fill="none" stroke="#9c36b5" stroke-width="2.5"/><rect x="384" y="106" width="24" height="18" fill="#fff3bf" stroke="#e8590c"/><text x="396" y="142" font-size="9" text-anchor="middle" fill="#0b7285">resistance gene added</text></g><line x1="466" y1="104" x2="494" y2="104" stroke="#475569" stroke-width="1.6" marker-end="url(#arr8e)"/><g><rect x="496" y="58" width="128" height="92" rx="8" fill="#dff0d8" stroke="#3a7d44"/><text x="560" y="78" font-size="11" font-weight="700" text-anchor="middle" fill="#2f6b39">Resistant chestnut</text><path d="M560,118 l0,-22 m0,8 l-12,-8 m12,0 l12,-8" stroke="#3a7d44" stroke-width="2.5" fill="none"/><circle cx="560" cy="92" r="10" fill="#7ab87a"/><text x="560" y="138" font-size="9" text-anchor="middle" fill="#2f6b39">passes gene to offspring</text></g></svg>',
          },
          caption: 'Biotechnology steps: a resistance gene is cut from wheat using enzymes, inserted into the American chestnut\'s DNA, and the resulting tree is resistant and passes the gene to its offspring.',
        },
      },
      {
        label: 'f',
        text: 'Using the information from this chestnut-restoration scenario and your wider MYP knowledge, **discuss and evaluate** the possible implications of changing the genome of American chestnut trees. In your answer you should include:\n\n- the advantages of introducing a new genetic variant\n- the disadvantages of introducing a new genetic variant\n- an environmental impact of introducing a new genetic variant\n- an economic impact of introducing a new genetic variant\n- an appraisal of the arguments you have discussed.',
        marks: 15,
        ph: 'Advantage: trees restored, food source returns, ecosystem recovered, genetic diversity. Disadvantage: unknown ecological effects, resistance gene from different species, modified genes spread to other plants. Environmental: restored ecosystem / could affect other species / genetic contamination. Economic: food source returns / cost of programme / loss of lumber. Appraisal: balance of benefits vs risks; restoration outweighs risks if carefully managed...',
      },
    ],
  },
]
