import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2023-v2',
  subject: 'Physics',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Work, Energy & Power (11 marks) Criterion A
  // V2: Working donkeys in agriculture (North African context)
  // Q1a: 6 km in 75 min → 6×60/75 = 4.8 km/h
  // Q1c: A=280 kg→2744 N, B=3920 N→400 kg
  // Q1e: h=18 m, t=8.0 s → ΔEp=400×9.8×18=70560 J, P=70560/8.0=8820 W=8.82≈8.8 kW
  // Q1f: 3.0 hp×746=2238 W; I=2238/230≈9.7 A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['speed and velocity', 'work done', 'power', 'gravitational potential energy'], level: 'proficient' },
    stem: 'Donkeys have been used in agriculture across the world for thousands of years. They perform work by carrying loads and pulling ploughs. Physics can be used to analyse how they complete these tasks.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="dkF" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect width="600" height="190" fill="#e7eef2"/><path d="M0 160 Q160 124 330 150 Q470 172 600 140 L600 205 L0 205 Z" fill="#d8c79a"/><path d="M0 320 L0 215 Q300 168 600 248 L600 320 Z" fill="#caa472"/><g stroke="#a07b46" stroke-width="2" opacity="0.6" fill="none"><path d="M20 252 Q300 200 580 268"/><path d="M20 270 Q300 218 580 286"/></g><g transform="translate(330,158)"><g fill="#9aa3ad"><ellipse cx="44" cy="40" rx="52" ry="24"/><rect x="22" y="54" width="7" height="38"/><rect x="58" y="54" width="7" height="38"/><path d="M90 30 Q104 20 106 34 L96 40 Z"/><path d="M84 22 L80 2 M94 24 L98 2" stroke="#6b7480" stroke-width="4"/><rect x="-10" y="34" width="18" height="9" rx="4"/></g><g fill="#b6b0a4"><ellipse cx="58" cy="54" rx="56" ry="27"/><rect x="36" y="70" width="8" height="42"/><rect x="72" y="70" width="8" height="42"/><path d="M108 42 Q124 32 126 46 L114 52 Z"/><path d="M102 34 L98 12 M112 36 L116 12" stroke="#8a857a" stroke-width="4"/><rect x="2" y="48" width="20" height="10" rx="4"/></g><rect x="6" y="20" width="60" height="22" rx="4" fill="#b5651d" opacity="0.85"/><text x="36" y="35" font-size="9" fill="#fff" text-anchor="middle">load</text></g><line x1="430" y1="100" x2="510" y2="100" stroke="#0b7285" stroke-width="3" marker-end="url(#dkF)"/><text x="470" y="92" font-size="12" fill="#0b7285" text-anchor="middle" font-weight="bold">direction of motion</text><text x="300" y="306" font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Donkeys carrying a load across a field</text></svg>',
      },
      caption: 'Donkeys do work as they carry a load across a field.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A donkey covers a distance of **6 km** in **75 minutes**. **Calculate** its speed in km per hour (km h⁻¹).',
        marks: 2,
        ph: 'Speed = distance ÷ time\n= 6 ÷ (75/60)\n= 6 × (60/75)\n= 4.8 km h⁻¹',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Power is the rate of transforming energy or the rate of doing work. **Select** the formula for power.\n\nA. energy transformed = power ÷ distance\nB. energy transformed = power + distance\nC. energy transformed = power × time\nD. energy transformed = power − time',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'The table below gives data about two donkeys A and B. **Calculate** the missing values. Use **g = 9.8 N kg⁻¹**.\n\n| Donkey | Mass / kg | Weight / N |\n|--------|-----------|------------|\n| A | 280 | ? |\n| B | ? | 3920 |',
        marks: 2,
        ph: 'Donkey A weight = 280 × 9.8 = 2744 N\nDonkey B mass = 3920 ÷ 9.8 = 400 kg',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Select** the correct terms to complete the energy transformation diagram for a donkey that starts from rest at the bottom of a hill, walks up the hill and then stops at the top.\n\nThe energy transformations are: [?] → [?] → [?]',
        marks: 1,
        widget: 'energy_chain',
        widgetOptions: ['Chemical potential energy', 'Gravitational potential energy', 'Elastic potential energy', 'Electrical energy', 'Kinetic energy'],
        ph: 'Chemical potential energy → Kinetic energy → Gravitational potential energy',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The hill in part (d) is **18 m** high. Using information from part (c) and the formula **ΔEₚ = mgΔh**, calculate the minimum power required for donkey B to reach this height in **8.0 s**. Give your answer in kW.',
        marks: 3,
        ph: 'ΔEp = mgΔh = 400 × 9.8 × 18 = 70560 J\nPower = ΔEp ÷ t = 70560 ÷ 8.0 = 8820 W = 8.82 kW ≈ 8.8 kW',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'Power is sometimes given in horsepower (hp), where **1.0 hp = 746 W**. A water desalination pump has a power of **3.0 hp** and operates at a voltage of **230 V**. **Calculate** the current the pump requires.',
        marks: 2,
        ph: 'Power = 3.0 × 746 = 2238 W\nI = P ÷ V = 2238 ÷ 230 = 9.73 A ≈ 9.7 A',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Light & EM Waves (7 marks) Criterion A
  // V2: Prism dispersion; wavelength 580 nm (yellow)
  // f = 3×10⁸ / (580×10⁻⁹) = 5.17×10¹⁴ Hz
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light & Electromagnetic Waves',
    marks: 7,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['dispersion', 'refraction', 'electromagnetic spectrum', 'wave equation'], level: 'proficient' },
    stem: 'When white light passes through a glass prism, it separates into the seven colours of the visible spectrum. This dispersion effect is used in many scientific instruments such as spectroscopes.',
    tasks: [
      {
        label: 'a',
        text: 'The image shows white light being separated into different colours as it passes through a prism. **Select** the term that best describes this process.\n\nA. Absorption\nB. Deflection\nC. Reflection\nD. Dispersion',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><rect x="40" y="150" width="180" height="6" fill="#9aa3ad"/><line x1="42" y1="153" x2="216" y2="153" stroke="#5b6b78" stroke-width="1"/><text x="120" y="140" font-size="12" fill="#1f2d3a" text-anchor="middle">white light</text><polygon points="250,90 320,210 180,210" fill="#bcd8e8" opacity="0.4" stroke="#0b7285" stroke-width="2"/><text x="250" y="232" font-size="12" fill="#0b7285" text-anchor="middle">glass prism</text><g stroke-width="5"><line x1="300" y1="160" x2="560" y2="118" stroke="#e23b3b"/><line x1="300" y1="163" x2="560" y2="138" stroke="#ef7d2e"/><line x1="300" y1="166" x2="560" y2="158" stroke="#f2c512"/><line x1="300" y1="169" x2="560" y2="178" stroke="#3aa14b"/><line x1="300" y1="172" x2="560" y2="198" stroke="#2f6fd0"/><line x1="300" y1="175" x2="560" y2="218" stroke="#3b3be2"/><line x1="300" y1="178" x2="560" y2="238" stroke="#8e3be2"/></g><text x="578" y="122" font-size="12" fill="#e23b3b" text-anchor="end" font-weight="bold">Red</text><text x="578" y="162" font-size="12" fill="#c79a00" text-anchor="end" font-weight="bold">Yellow</text><text x="578" y="242" font-size="12" fill="#8e3be2" text-anchor="end" font-weight="bold">Violet</text><text x="300" y="300" font-size="13" fill="#1f2d3a" text-anchor="middle">White light dispersed into the visible spectrum by a prism</text></svg>',
          },
          caption: 'White light splitting into the visible spectrum, with yellow appearing in the middle of the spread.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Explain** why yellow light appears in the middle of the visible spectrum produced by the prism. Use scientific terminology in your answer.',
        marks: 3,
        ph: 'Yellow light has a medium wavelength (around 580 nm) compared to the other colours. It is refracted by an intermediate amount — more than red (lower frequency, less refraction) but less than violet (higher frequency, more refraction). Yellow travels at an intermediate speed through the glass and is bent by a moderate angle at the surface.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Infrared (IR) waves exist just beyond red in the spectrum. Unlike yellow light, IR waves are not visible to the human eye. **State** one other difference between IR waves and yellow light.',
        marks: 1,
        ph: 'IR waves have a longer wavelength than yellow light / IR has a lower frequency / IR carries less energy per photon / IR can be detected as heat.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In air, all colours of light travel at **3.00 × 10⁸ m s⁻¹**. **Calculate** the frequency of yellow light with a wavelength of **580 nm**. Give your answer in scientific notation.',
        marks: 2,
        ph: 'f = v ÷ λ = (3.00 × 10⁸) ÷ (580 × 10⁻⁹) = 5.17 × 10¹⁴ Hz',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Atomic Physics (9 marks) Criterion A
  // V2: Oxygen-18 atom (Z=8, A=18; 8p, 10n)
  // Q3c: same variable_classify structure
  // Q3d: ²¹⁰₈₄Po→⁴₂He alpha; ¹³¹₅₃I→¹³¹₅₄Xe beta
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics & Radioactivity',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'isotopes', 'alpha and beta decay', 'gamma radiation and x-rays'], level: 'proficient' },
    stem: 'The diagram shows an atom of oxygen-18, which has 8 protons and 10 neutrons.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="420" fill="#ffffff"/><circle cx="210" cy="210" r="90" fill="none" stroke="#5b6b78" stroke-width="1.5"/><circle cx="210" cy="210" r="150" fill="none" stroke="#5b6b78" stroke-width="1.5"/><g stroke="#fff" stroke-width="1"><circle cx="200" cy="196" r="9.5" fill="#e8553b"/><circle cx="218" cy="194" r="9.5" fill="#9aa3ad"/><circle cx="210" cy="210" r="9.5" fill="#e8553b"/><circle cx="226" cy="208" r="9.5" fill="#9aa3ad"/><circle cx="194" cy="212" r="9.5" fill="#9aa3ad"/><circle cx="208" cy="224" r="9.5" fill="#e8553b"/><circle cx="224" cy="222" r="9.5" fill="#9aa3ad"/><circle cx="192" cy="226" r="9.5" fill="#e8553b"/><circle cx="208" cy="184" r="9.5" fill="#9aa3ad"/><circle cx="226" cy="184" r="9.5" fill="#e8553b"/><circle cx="188" cy="198" r="9.5" fill="#9aa3ad"/><circle cx="230" cy="224" r="9.5" fill="#e8553b"/><circle cx="184" cy="214" r="9.5" fill="#9aa3ad"/><circle cx="234" cy="198" r="9.5" fill="#e8553b"/><circle cx="200" cy="236" r="9.5" fill="#9aa3ad"/><circle cx="222" cy="236" r="9.5" fill="#9aa3ad"/><circle cx="196" cy="186" r="9.5" fill="#e8553b"/><circle cx="216" cy="240" r="9.5" fill="#9aa3ad"/></g><circle cx="210" cy="120" r="8" fill="#0b7285"/><circle cx="210" cy="300" r="8" fill="#0b7285"/><circle cx="60" cy="210" r="8" fill="#0b7285"/><circle cx="360" cy="210" r="8" fill="#0b7285"/><circle cx="125" cy="125" r="8" fill="#0b7285"/><circle cx="295" cy="125" r="8" fill="#0b7285"/><circle cx="125" cy="295" r="8" fill="#0b7285"/><circle cx="295" cy="295" r="8" fill="#0b7285"/><g font-size="12" fill="#1f2d3a"><circle cx="40" cy="396" r="7" fill="#e8553b"/><text x="52" y="400">8 protons</text><circle cx="150" cy="396" r="7" fill="#9aa3ad"/><text x="162" y="400">10 neutrons</text><circle cx="278" cy="396" r="7" fill="#0b7285"/><text x="290" y="400">8 electrons</text></g><text x="210" y="28" font-size="14" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Oxygen-18 atom</text></svg>',
      },
      caption: 'An atom of oxygen-18: 8 protons and 10 neutrons in the nucleus, with 8 electrons in shells.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the atomic number and mass number for this atom.',
        marks: 2,
        ph: 'Atomic number: 8\nMass number: 18',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** one similarity and one difference between a nucleus of oxygen-16 and a nucleus of oxygen-18.',
        marks: 2,
        ph: 'Similarity: both have the same number of protons (8) / same atomic number / same positive charge\nDifference: oxygen-18 has more neutrons (10) than oxygen-16 (8) / different mass number / oxygen-18 is more massive',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Gamma rays and X-rays are both types of electromagnetic radiation. The key below shows where each type is produced. **Classify** each type of radiation by placing it in the correct category.\n\n• Gamma ray — produced from the nucleus of an atom\n• X-ray — produced from the inner orbits of electrons\n• Cosmic ray — produced outside the atom\n• Ultrasound wave — not EM radiation',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="360" fill="#ffffff"/><g transform="translate(0,10)"><circle cx="190" cy="180" r="78" fill="none" stroke="#5b6b78" stroke-width="1.5"/><circle cx="190" cy="180" r="130" fill="none" stroke="#5b6b78" stroke-width="1.5"/><g stroke="#fff" stroke-width="1"><circle cx="182" cy="170" r="9" fill="#e8553b"/><circle cx="198" cy="168" r="9" fill="#9aa3ad"/><circle cx="190" cy="182" r="9" fill="#e8553b"/><circle cx="206" cy="180" r="9" fill="#9aa3ad"/><circle cx="176" cy="184" r="9" fill="#9aa3ad"/><circle cx="190" cy="196" r="9" fill="#e8553b"/><circle cx="204" cy="194" r="9" fill="#9aa3ad"/><circle cx="174" cy="196" r="9" fill="#e8553b"/></g><circle cx="190" cy="100" r="7" fill="#0b7285"/><circle cx="190" cy="260" r="7" fill="#0b7285"/><circle cx="60" cy="180" r="7" fill="#0b7285"/><circle cx="320" cy="180" r="7" fill="#0b7285"/><g stroke="#7048b8" stroke-width="4"><path d="M206 166 l9 -9 m4 0 l9 -9 m4 0 l9 -9"/></g><line x1="206" y1="166" x2="258" y2="114" stroke="#7048b8" stroke-width="2" stroke-dasharray="3 3"/><g stroke="#f08c00" stroke-width="4"><path d="M140 130 l-9 -9 m0 -5 l-9 -9 m0 -5 l-9 -9"/></g><line x1="131" y1="121" x2="92" y2="82" stroke="#f08c00" stroke-width="2" stroke-dasharray="3 3"/></g><g transform="translate(360,40)"><text x="0" y="0" font-size="14" font-weight="bold" fill="#1f2d3a">Key</text><g stroke="#7048b8" stroke-width="4"><path d="M0 18 l9 -9 m4 0 l9 -9"/></g><text x="40" y="14" font-size="12" fill="#1f2d3a">Produced from the</text><text x="40" y="30" font-size="12" fill="#1f2d3a">nucleus of an atom</text><g stroke="#f08c00" stroke-width="4"><path d="M0 70 l9 -9 m4 0 l9 -9"/></g><text x="40" y="66" font-size="12" fill="#1f2d3a">Produced from the inner</text><text x="40" y="82" font-size="12" fill="#1f2d3a">orbit of electrons</text></g><text x="300" y="350" font-size="12" fill="#5b6b78" text-anchor="middle">Two types of electromagnetic radiation emitted from an atom</text></svg>',
          },
          caption: 'Gamma rays are emitted from the nucleus; X-rays from the inner electron orbits.',
        },
        widget: 'variable_classify',
        widgetOptions: ['Gamma ray', 'X-ray', 'Cosmic ray', 'Ultrasound wave'],
        widgetItems: ['Produced from nucleus', 'Produced from inner electron orbit', 'Neither'],
        ph: 'Nucleus: Gamma ray\nInner electron orbit: X-ray\nNeither: Cosmic ray, Ultrasound wave',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Complete** the following two nuclear decay equations by filling in the missing values:\n\n²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ?₂α\n\n¹³¹₅₃I → ?₅₄Xe + ⁰₋₁β',
        marks: 2,
        ph: 'Equation 1: alpha particle = ⁴₂He (mass 210−206=4; atomic 84−82=2 ✓)\nEquation 2: daughter nucleus = ¹³¹₅₄Xe (mass 131, atomic number 53+1=54)',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** what is happening in the reaction shown below:\n\n²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n',
        marks: 1,
        ph: 'A neutron is absorbed by uranium-235, causing the nucleus to split (nuclear fission) into barium-141 and krypton-92, releasing 3 neutrons and a large amount of energy.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ideal Gas & Boyle's Law Investigation (13 marks) Criterion B
  // V2: Gas in a sealed flask with weighted bung
  // Q4b: variable_classify same structure
  // Q4c: radio_select correct=0 (increase)
  // Q4d: area=5.0×10⁻⁴ m², mass=2.0 kg, P_atm=102000 Pa
  //   ΔP=2.0×9.81/5.0×10⁻⁴=39240 Pa; Total=141240 Pa≈1.41×10⁵ Pa
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: "Ideal Gas & Boyle's Law",
    marks: 13,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['pressure and volume', "Boyle's law", 'gas laws', 'scientific investigation'], level: 'advanced' },
    stem: "A student investigates how the pressure on a fixed mass of gas in a sealed flask affects its volume. They apply increasing masses to a weighted bung fitted to the flask opening. Masses are added slowly so that temperature remains constant throughout.",
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 360 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="fmass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#94a3ad"/><stop offset="1" stop-color="#6b7a85"/></linearGradient><radialGradient id="fgas" cx="50%" cy="40%" r="65%"><stop offset="0" stop-color="#d6f0fa"/><stop offset="1" stop-color="#bfe3f2"/></radialGradient></defs><rect width="360" height="420" fill="#ffffff"/><rect x="132" y="18" width="96" height="22" rx="3" fill="url(#fmass)" stroke="#3a4750" stroke-width="1.5"/><rect x="120" y="40" width="120" height="24" rx="3" fill="url(#fmass)" stroke="#3a4750" stroke-width="1.5"/><text x="180" y="57" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">masses</text><rect x="166" y="64" width="28" height="30" fill="#b5651d" stroke="#7a4513" stroke-width="1.5"/><text x="248" y="84" font-size="11" fill="#7a4513">bung</text><rect x="170" y="94" width="20" height="20" fill="#cfd6dc" stroke="#0b7285" stroke-width="2"/><path d="M150 118 L210 118 L250 360 Q250 392 180 392 Q110 392 110 360 Z" fill="url(#fgas)" stroke="#0b7285" stroke-width="2.5"/><rect x="170" y="112" width="20" height="10" fill="#eef6fb" stroke="#0b7285" stroke-width="2"/><text x="180" y="320" font-size="14" fill="#1f4d61" text-anchor="middle" font-weight="bold">gas</text><line x1="118" y1="220" x2="118" y2="370" stroke="#0b7285" stroke-width="1" stroke-dasharray="2 4" opacity="0.6"/><text x="262" y="300" font-size="11" fill="#0b7285">sealed flask</text><line x1="300" y1="20" x2="300" y2="96" stroke="#e8553b" stroke-width="3"/><polygon points="300,98 293,82 307,82" fill="#e8553b"/><text x="312" y="62" font-size="12" fill="#e8553b">force</text></svg>',
      },
      caption: 'Masses applied to the weighted bung increase the pressure on the fixed amount of gas in the sealed flask.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that this investigation could answer.',
        marks: 1,
        ph: 'How does the mass applied to the bung affect the volume of gas in the flask? (or: How does pressure affect the volume of a fixed amount of gas at constant temperature?)',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Amount of gas in flask | | | |\n| Mass applied to bung | | | |\n| Temperature | | | |\n| Volume of gas | | | |',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Amount of gas in flask', 'Mass applied to bung', 'Temperature', 'Volume of gas'],
        widgetItems: ['Independent', 'Dependent', 'Control'],
        ph: 'Independent: Mass applied to bung\nDependent: Volume of gas\nControl: Amount of gas in flask, Temperature',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** the correct response to complete the sentence:\n\nWhen masses are added to the bung, the pressure will: [Select]',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['increase', 'decrease', 'stay the same'],
        ph: 'increase',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The bung has an area of **5.0 × 10⁻⁴ m²**. Atmospheric pressure is **102 000 Pa**. **Calculate** the total pressure on the gas in the flask when the mass applied is **2.0 kg**. Use **g = 9.81 N kg⁻¹**.',
        marks: 3,
        ph: 'ΔP = F/A = mg/A = (2.0 × 9.81) / (5.0 × 10⁻⁴)\n= 19.62 / 0.0005 = 39240 Pa\nTotal pressure = 39240 + 102000 = 141240 Pa ≈ 1.41 × 10⁵ Pa',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The student calculated the pressure for each mass. They presented the processed data in two graphs below.\n\n**Use both graphs** to **describe** the relationship between pressure and volume of a gas.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><g transform="translate(0,0)"><text x="160" y="22" font-size="13" font-weight="bold" fill="#1f2d3a" text-anchor="middle">Volume vs Pressure</text><line x1="60" y1="40" x2="60" y2="230" stroke="#333" stroke-width="1.5"/><line x1="60" y1="230" x2="290" y2="230" stroke="#333" stroke-width="1.5"/><path d="M78 58 Q120 150 150 180 Q200 215 280 224" fill="none" stroke="#0b7285" stroke-width="2.5"/><circle cx="80" cy="62" r="3" fill="#0b7285"/><circle cx="110" cy="120" r="3" fill="#0b7285"/><circle cx="150" cy="180" r="3" fill="#0b7285"/><circle cx="210" cy="210" r="3" fill="#0b7285"/><circle cx="278" cy="224" r="3" fill="#0b7285"/><text x="175" y="270" font-size="11" fill="#1f2d3a" text-anchor="middle">Pressure / kPa</text><text x="22" y="135" font-size="11" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 22 135)">Volume / cm³</text></g><g transform="translate(310,0)"><text x="160" y="22" font-size="13" font-weight="bold" fill="#1f2d3a" text-anchor="middle">1/V vs Pressure</text><line x1="60" y1="40" x2="60" y2="230" stroke="#333" stroke-width="1.5"/><line x1="60" y1="230" x2="290" y2="230" stroke="#333" stroke-width="1.5"/><line x1="60" y1="225" x2="278" y2="60" stroke="#f08c00" stroke-width="2.5"/><circle cx="78" cy="211" r="3" fill="#f08c00"/><circle cx="118" cy="181" r="3" fill="#f08c00"/><circle cx="168" cy="143" r="3" fill="#f08c00"/><circle cx="218" cy="105" r="3" fill="#f08c00"/><circle cx="268" cy="67" r="3" fill="#f08c00"/><text x="175" y="270" font-size="11" fill="#1f2d3a" text-anchor="middle">Pressure / kPa</text><text x="22" y="135" font-size="11" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 22 135)">1/V × 10⁻³ / cm⁻³</text></g></svg>',
          },
          caption: 'Left: volume falls as pressure rises (inverse curve). Right: 1/V is a straight line through the origin against pressure.',
        },
        ph: "As pressure increases, volume decreases. The relationship is non-linear (inverse). The V vs P graph shows a curve, consistent with Boyle's law: pressure and volume are inversely proportional at constant temperature.",
        level: 'proficient',
      },
      {
        label: 'f',
        text: "Another student multiplied pressure × volume (pV) and plotted the result. Boyle's law states that pV is constant at constant temperature. **Suggest** whether the graph supports Boyle's law. **Justify** your answer.",
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'pV against pressure',
            xLabel: 'Pressure', xUnit: 'kPa',
            yLabel: 'pV', yUnit: 'kPa·cm³',
            dataPoints: [{ x: 50, y: 10900 }, { x: 75, y: 11050 }, { x: 100, y: 10950 }, { x: 125, y: 11100 }, { x: 150, y: 11000 }],
            xMin: 0, xMax: 175, yMin: 0, yMax: 14000, xStep: 25, yStep: 2000,
          },
          caption: 'pV stays close to a constant value of about 11 000 kPa·cm³ across the range of pressures.',
        },
        ph: "The graph broadly supports Boyle's law. The pV values are approximately constant across the pressure range (close to a horizontal line), with small deviations attributable to experimental error.",
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Use the graph** in part (f) to **calculate** the volume of the gas when the pressure is **75 kPa**. Include a unit in your answer.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'pV against pressure',
            xLabel: 'Pressure', xUnit: 'kPa',
            yLabel: 'pV', yUnit: 'kPa·cm³',
            dataPoints: [{ x: 50, y: 10900 }, { x: 75, y: 11050 }, { x: 100, y: 10950 }, { x: 125, y: 11100 }, { x: 150, y: 11000 }],
            xMin: 0, xMax: 175, yMin: 0, yMax: 14000, xStep: 25, yStep: 2000,
          },
          caption: 'Read the constant pV value (≈ 11 000 kPa·cm³), then divide by the pressure to find the volume.',
        },
        ph: 'Read constant pV value from the graph (e.g. ≈ 11000 kPa·cm³).\nV = pV ÷ p = 11000 ÷ 75 ≈ 147 cm³\n(Accept 140–155 cm³)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Balloon Temperature Investigation Design (17 marks) Criterion B
  // V2: Gas in balloon — same structure, different framing
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Gas in a Balloon: Temperature Investigation',
    marks: 17,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['kinetic theory', 'temperature and gas volume', 'experimental design'], level: 'advanced' },
    stem: 'A group of students investigates how the volume of a gas trapped in a sealed balloon changes with temperature.\n\nThey make the following prediction:\n\n*"If the temperature of the gas inside the balloon increases, the balloon will expand and its circumference will increase."*',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="balg3" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f6b26b"/><stop offset="1" stop-color="#e8772e"/></radialGradient></defs><rect width="420" height="420" fill="#ffffff"/><ellipse cx="220" cy="195" rx="120" ry="135" fill="url(#balg3)" stroke="#c25e15" stroke-width="2"/><polygon points="212,325 230,325 221,346" fill="#c25e15"/><path d="M221 346 Q236 372 216 392 Q202 406 220 418" fill="none" stroke="#7a4a16" stroke-width="2"/><path d="M104 210 Q220 252 336 200" fill="none" stroke="#0b7285" stroke-width="14" opacity="0.85"/><path d="M104 210 Q220 252 336 200" fill="none" stroke="#ffffff" stroke-width="14" stroke-dasharray="2 9"/><line x1="150" y1="118" x2="200" y2="150" stroke="#1f2d3a" stroke-width="1.5"/><text x="142" y="116" font-size="14" fill="#1f2d3a" text-anchor="end">Balloon</text><line x1="160" y1="300" x2="200" y2="228" stroke="#1f2d3a" stroke-width="1.5"/><text x="152" y="312" font-size="14" fill="#0b7285" text-anchor="end" font-weight="bold">Circumference</text><text x="350" y="216" font-size="11" fill="#0b7285">tape measure</text></svg>',
      },
      caption: 'A tape measure is wrapped around the balloon to record its circumference.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use kinetic theory to explain** the prediction.',
        marks: 3,
        ph: 'At higher temperatures, gas particles have greater kinetic energy and move faster. They collide with the inner walls of the balloon more often and with greater force per collision. The increased force expands the elastic balloon outward — so its volume and circumference increase.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Since measuring volume directly is difficult, students measure the circumference of the balloon as a proxy for volume.\n\n**Design** an experiment to carry out this investigation. Standard laboratory equipment, including a water bath, is available. In your plan, you must include:\n\n• a research question\n• the independent, dependent and one control variable\n• a list of the equipment needed\n• a detailed method for collecting data\n• an explanation of how sufficient data will be collected\n• details of how to make the method safe',
        marks: 14,
        ph: 'Research question: How does temperature affect the circumference of a balloon containing a fixed amount of gas?\n\nIV: temperature (°C)\nDV: circumference (cm)\nCV: amount of gas in balloon\n\nEquipment: balloon, tape measure, thermometer, water bath with heater, tongs, stopwatch\n\nMethod:\n1. Inflate balloon to fixed circumference; measure.\n2. Place in water bath at 20°C; equilibrate 5 min; measure circumference.\n3. Repeat at 30, 40, 50, 60, 70°C.\n4. Take 3 repeats; calculate mean at each temperature.\n\nSufficiency: ≥5 temperatures, 3 repeats each, graph of circumference vs temperature.\n\nSafety: use tongs; avoid overheating; do not exceed 80°C (balloon may burst).',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Balloon Rocket & Newton's Laws (17 marks) Criterion C
  // V2: Same structure; diameter = 15.0 cm → C = π×15.0 = 47.1 cm
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: "Balloon Rocket & Newton's Laws",
    marks: 17,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ["Newton's second law", "Newton's third law", 'data processing', 'hypothesis evaluation'], level: 'advanced' },
    stem: 'When a balloon is inflated and the air is released, the balloon accelerates along a string threaded through a straw attached to it.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="balg4" cx="38%" cy="34%" r="72%"><stop offset="0" stop-color="#f6b26b"/><stop offset="1" stop-color="#e8772e"/></radialGradient><marker id="airB" markerWidth="10" markerHeight="10" refX="2" refY="3" orient="auto"><path d="M8,0 L1,3 L8,6 Z" fill="#0b7285"/></marker><marker id="motB" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect y="248" width="600" height="72" fill="#eef2f4"/><rect x="80" y="70" width="8" height="180" fill="#9aa3ad"/><rect x="55" y="248" width="58" height="14" rx="3" fill="#5b6b78"/><rect x="512" y="70" width="8" height="180" fill="#9aa3ad"/><rect x="487" y="248" width="58" height="14" rx="3" fill="#5b6b78"/><line x1="84" y1="100" x2="516" y2="100" stroke="#5b6b78" stroke-width="2"/><text x="430" y="92" font-size="11" fill="#5b6b78">string</text><rect x="250" y="95" width="70" height="9" rx="3" fill="#cfd6dc" stroke="#9aa3ad"/><text x="330" y="90" font-size="12" fill="#5b6b78">straw on string</text><ellipse cx="222" cy="120" rx="60" ry="34" fill="url(#balg4)" stroke="#c25e15" stroke-width="2"/><polygon points="166,120 148,108 148,132" fill="url(#balg4)" stroke="#c25e15" stroke-width="2"/><line x1="146" y1="120" x2="96" y2="120" stroke="#0b7285" stroke-width="3" marker-start="url(#airB)"/><text x="118" y="148" font-size="11" fill="#0b7285" text-anchor="middle">escaping air</text><line x1="290" y1="120" x2="350" y2="120" stroke="#2f9e44" stroke-width="3" marker-end="url(#motB)"/><text x="324" y="112" font-size="11" fill="#2f9e44" text-anchor="middle">motion</text><line x1="180" y1="172" x2="216" y2="148" stroke="#1f2d3a" stroke-width="1.5"/><text x="172" y="180" font-size="14" fill="#1f2d3a" text-anchor="end">Balloon</text></svg>',
      },
      caption: 'Air escaping backwards pushes the balloon forwards along the string (action–reaction).',
    },
    tasks: [
      {
        label: 'a',
        text: "**Use Newton's laws** to **explain** the motion of the balloon along the string.",
        marks: 3,
        ph: "Newton's 3rd law: the balloon pushes air backwards; the air exerts an equal and opposite reaction force on the balloon, pushing it forward.\nNewton's 2nd law: the net forward force causes the balloon to accelerate (F = ma).",
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Students investigate how the circumference of the balloon affects the distance it travels along the string.\n\n**State** the research question the students are investigating.',
        marks: 1,
        ph: 'How does the circumference (or volume) of a balloon affect the distance it travels along the string when released?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The students inflate a balloon until its diameter is **15.0 cm**. **Calculate** the circumference of this balloon. Include a unit in your answer.',
        marks: 1,
        ph: 'Circumference = π × d = π × 15.0 = 47.1 cm\n(Accept 47.0–47.2 cm)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The students recorded their raw data in their notebook. **Organise and present** the data into a table, including the result from part (c) with an estimated distance of **2.50 m**.\n\nRaw data (unordered):\n- Circumference 30.2 cm → 0.45 m\n- Circumference 38.6 cm → 1.20 m\n- Circumference 55.8 cm → 4.18 m\n- Circumference 62.5 cm → 6.20 m\n- Circumference 68.0 cm → 8.10 m',
        marks: 4,
        ph: 'Table headers: Circumference / cm | Distance travelled / m\nAscending circumference order:\n30.2 | 0.45\n38.6 | 1.20\n47.1 | 2.50 (from part c)\n55.8 | 4.18\n62.5 | 6.20\n68.0 | 8.10\nUnits in headers only; consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Before their investigation, students suggested:\n\n*"If the circumference of the balloon increases, then the distance travelled will increase because the net force will be greater with a larger volume of air."*\n\nThe students plotted three different graphs. **Use the graphs** to **describe** the relationship between circumference and distance, and **evaluate** the validity of the hypothesis.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 660 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="660" height="250" fill="#ffffff"/><g transform="translate(0,0)"><text x="115" y="20" font-size="12" font-weight="bold" fill="#1f2d3a" text-anchor="middle">Graph A</text><line x1="50" y1="34" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="210" y2="190" stroke="#333" stroke-width="1.5"/><path d="M58 184 Q140 178 150 150 Q170 95 200 44" fill="none" stroke="#0b7285" stroke-width="2.5"/><circle cx="60" cy="183" r="3" fill="#0b7285"/><circle cx="110" cy="172" r="3" fill="#0b7285"/><circle cx="150" cy="150" r="3" fill="#0b7285"/><circle cx="180" cy="100" r="3" fill="#0b7285"/><circle cx="198" cy="48" r="3" fill="#0b7285"/><text x="130" y="218" font-size="10" fill="#1f2d3a" text-anchor="middle">Circumference / cm</text><text x="20" y="112" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 20 112)">Distance / m</text></g><g transform="translate(220,0)"><text x="115" y="20" font-size="12" font-weight="bold" fill="#1f2d3a" text-anchor="middle">Graph B</text><line x1="50" y1="34" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="210" y2="190" stroke="#333" stroke-width="1.5"/><path d="M58 50 Q90 150 120 168 Q160 184 200 187" fill="none" stroke="#7048b8" stroke-width="2.5"/><circle cx="62" cy="60" r="3" fill="#7048b8"/><circle cx="90" cy="135" r="3" fill="#7048b8"/><circle cx="130" cy="172" r="3" fill="#7048b8"/><circle cx="170" cy="184" r="3" fill="#7048b8"/><circle cx="200" cy="187" r="3" fill="#7048b8"/><text x="130" y="218" font-size="10" fill="#1f2d3a" text-anchor="middle">1/circumference / cm⁻¹</text><text x="20" y="112" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 20 112)">Distance / m</text></g><g transform="translate(440,0)"><text x="115" y="20" font-size="12" font-weight="bold" fill="#2f9e44" text-anchor="middle">Graph C</text><line x1="50" y1="34" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="210" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="202" y2="44" stroke="#2f9e44" stroke-width="2.5"/><circle cx="74" cy="167" r="3" fill="#2f9e44"/><circle cx="110" cy="132" r="3" fill="#2f9e44"/><circle cx="146" cy="98" r="3" fill="#2f9e44"/><circle cx="178" cy="68" r="3" fill="#2f9e44"/><circle cx="200" cy="46" r="3" fill="#2f9e44"/><text x="130" y="218" font-size="10" fill="#1f2d3a" text-anchor="middle">Circumference cubed / cm³</text><text x="20" y="112" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 20 112)">Distance / m</text></g></svg>',
          },
          caption: 'Graph A: distance vs circumference (curved). Graph B: distance vs 1/circumference. Graph C: distance vs circumference³ (straight line through the origin).',
        },
        ph: 'As circumference increases, distance increases — hypothesis direction is supported. The relationship is not directly proportional (Graph A not linear). Graph C (distance vs circumference³) is a straight line through origin, suggesting distance ∝ circumference³. Hypothesis is partially valid: correct direction, but the assumption of direct proportion is not supported.',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'Students want to extend their investigation. **Suggest** a new independent variable and two control variables. The dependent variable (distance travelled) is given.\n\n• Independent variable: ...\n• Dependent variable: distance travelled\n• Control variable 1: ...\n• Control variable 2: ...',
        marks: 3,
        ph: 'IV: type of gas inside balloon (e.g. helium vs air vs CO₂)\nCV1: circumference of balloon (same starting volume)\nCV2: length of string / angle of string',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Formulate** a hypothesis for the extension investigation described in part (f).',
        marks: 2,
        ph: 'If helium is used instead of air, the balloon will travel further because helium is less dense than air, so the balloon + gas system has less mass. For the same thrust force, less mass → greater acceleration (F = ma) → more distance.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Waves & Radio Communication (18 marks) Criterion C/D
  // V2: Different waveform (T = 1.6 s → f = 0.625 ≈ 0.63 Hz)
  // Q7b: radio_select 4 opts, correct=2 (C)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Radio Communication',
    marks: 18,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['wave properties', 'frequency and period', 'radio waves', 'electromagnetic communication'], level: 'advanced' },
    stem: 'The frequency of any wave can be found from a graph of displacement against time.',
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows a wave. **Calculate** the frequency of the waveform shown. Give your answer to two significant figures and include a unit.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Position against time',
            xLabel: 'Time', xUnit: 's',
            yLabel: 'Position', yUnit: 'cm',
            dataPoints: [{ x: 0.0, y: 0.0 }, { x: 0.16, y: 0.588 }, { x: 0.32, y: 0.951 }, { x: 0.48, y: 0.951 }, { x: 0.64, y: 0.588 }, { x: 0.8, y: 0.0 }, { x: 0.96, y: -0.588 }, { x: 1.12, y: -0.951 }, { x: 1.28, y: -0.951 }, { x: 1.44, y: -0.588 }, { x: 1.6, y: 0.0 }, { x: 1.76, y: 0.588 }, { x: 1.92, y: 0.951 }, { x: 2.08, y: 0.951 }, { x: 2.24, y: 0.588 }, { x: 2.4, y: 0.0 }, { x: 2.56, y: -0.588 }, { x: 2.72, y: -0.951 }, { x: 2.88, y: -0.951 }, { x: 3.04, y: -0.588 }, { x: 3.2, y: 0.0 }],
            xMin: 0, xMax: 3.2, yMin: -1.5, yMax: 1.5, xStep: 0.4, yStep: 0.5,
          },
          caption: 'One complete cycle of the wave takes 1.6 s.',
        },
        ph: 'Period T = read from graph ≈ 1.6 s (one complete cycle)\nFrequency f = 1/T = 1/1.6 = 0.625 Hz ≈ 0.63 Hz\n(Answer to 2 s.f. with unit)',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Select** the waveform with the **same frequency** as the waveform in part (a). Waveforms A–D are shown below.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="500" height="300" fill="#ffffff"/><g transform="translate(0,0)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">A</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 33,71.3 36,63.5 39,57.3 42,53.4 45,52 48,53.4 51,57.3 54,63.5 57,71.3 60,80 63,88.7 66,96.5 69,102.7 72,106.6 75,108 78,106.6 81,102.7 84,96.5 87,88.7 90,80 93,71.3 96,63.5 99,57.3 102,53.4 105,52 108,53.4 111,57.3 114,63.5 117,71.3 120,80 123,88.7 126,96.5 129,102.7 132,106.6 135,108 138,106.6 141,102.7 144,96.5 147,88.7 150,80 153,71.3 156,63.5 159,57.3 162,53.4 165,52 168,53.4 171,57.3 174,63.5 177,71.3 180,80 183,88.7 186,96.5 189,102.7 192,106.6 195,108 198,106.6 201,102.7 204,96.5 207,88.7 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g><g transform="translate(250,0)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">B</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 36,74.2 42,68.6 48,63.5 54,59.2 60,55.8 66,53.4 72,52.2 78,52.2 84,53.4 90,55.8 96,59.2 102,63.5 108,68.6 114,74.2 120,80 126,85.8 132,91.4 138,96.5 144,100.8 150,104.2 156,106.6 162,107.8 168,107.8 174,106.6 180,104.2 186,100.8 192,96.5 198,91.4 204,85.8 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g><g transform="translate(0,150)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">C</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 33,74.2 36,68.6 39,63.5 42,59.2 45,55.8 48,53.4 51,52.2 54,52.2 57,53.4 60,55.8 63,59.2 66,63.5 69,68.6 72,74.2 75,80 78,85.8 81,91.4 84,96.5 87,100.8 90,104.2 93,106.6 96,107.8 99,107.8 102,106.6 105,104.2 108,100.8 111,96.5 114,91.4 117,85.8 120,80 123,74.2 126,68.6 129,63.5 132,59.2 135,55.8 138,53.4 141,52.2 144,52.2 147,53.4 150,55.8 153,59.2 156,63.5 159,68.6 162,74.2 165,80 168,85.8 171,91.4 174,96.5 177,100.8 180,104.2 183,106.6 186,107.8 189,107.8 192,106.6 195,104.2 198,100.8 201,96.5 204,91.4 207,85.8 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g><g transform="translate(250,150)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">D</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 33,68.6 36,59.2 39,53.4 42,52.2 45,55.8 48,63.5 51,74.2 54,85.8 57,96.5 60,104.2 63,107.8 66,106.6 69,100.8 72,91.4 75,80 78,68.6 81,59.2 84,53.4 87,52.2 90,55.8 93,63.5 96,74.2 99,85.8 102,96.5 105,104.2 108,107.8 111,106.6 114,100.8 117,91.4 120,80 123,68.6 126,59.2 129,53.4 132,52.2 135,55.8 138,63.5 141,74.2 144,85.8 147,96.5 150,104.2 153,107.8 156,106.6 159,100.8 162,91.4 165,80 168,68.6 171,59.2 174,53.4 177,52.2 180,55.8 183,63.5 186,74.2 189,85.8 192,96.5 195,104.2 198,107.8 201,106.6 204,100.8 207,91.4 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g></svg>',
          },
          caption: 'Four candidate waveforms A–D plotted over the same time window.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Marina and Tomas are communicating using mobile phones. The phones send and receive information as radio waves.\n\n**Put the following statements in order** to outline how the mobile phone network transmits the call.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="360" fill="#ffffff"/><line x1="0" y1="320" x2="620" y2="320" stroke="#cdd6dc" stroke-width="2"/><g transform="translate(60,230)"><circle cx="0" cy="0" r="14" fill="#0b7285"/><rect x="-12" y="14" width="24" height="50" rx="8" fill="#0e5d6e"/><rect x="10" y="6" width="8" height="14" rx="2" fill="#1f2d3a"/><text x="0" y="90" font-size="13" fill="#1f2d3a" text-anchor="middle">Marina</text></g><g transform="translate(230,150)"><polygon points="0,0 -18,150 18,150" fill="none" stroke="#5b6b78" stroke-width="2.5"/><line x1="-12" y1="50" x2="12" y2="50" stroke="#5b6b78" stroke-width="2"/><line x1="-15" y1="100" x2="15" y2="100" stroke="#5b6b78" stroke-width="2"/><path d="M-6 -6 q-14 6 0 18 M6 -6 q14 6 0 18" fill="none" stroke="#2f9e44" stroke-width="2"/><text x="0" y="-18" font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Nearest tower</text></g><g transform="translate(420,110)"><polygon points="0,0 -20,190 20,190" fill="none" stroke="#5b6b78" stroke-width="2.5"/><line x1="-13" y1="60" x2="13" y2="60" stroke="#5b6b78" stroke-width="2"/><line x1="-17" y1="125" x2="17" y2="125" stroke="#5b6b78" stroke-width="2"/><path d="M-6 -6 q-14 6 0 18 M6 -6 q14 6 0 18" fill="none" stroke="#2f9e44" stroke-width="2"/><text x="0" y="-18" font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Tower near Tomas</text></g><g transform="translate(560,230)"><circle cx="0" cy="0" r="14" fill="#f08c00"/><rect x="-12" y="14" width="24" height="50" rx="8" fill="#c87400"/><rect x="-18" y="6" width="8" height="14" rx="2" fill="#1f2d3a"/><text x="0" y="90" font-size="13" fill="#1f2d3a" text-anchor="middle">Tomas</text></g><path d="M85 215 q40 -30 130 -55" fill="none" stroke="#0b7285" stroke-width="1.8" stroke-dasharray="5 4"/><text x="135" y="170" font-size="10" fill="#0b7285">radio wave</text><path d="M230 305 q95 30 190 -10" fill="none" stroke="#1f2d3a" stroke-width="2"/><text x="320" y="345" font-size="10" fill="#5b6b78" text-anchor="middle">wired / fibre-optic link</text><path d="M420 130 q70 30 130 90" fill="none" stroke="#0b7285" stroke-width="1.8" stroke-dasharray="5 4"/><text x="512" y="160" font-size="10" fill="#0b7285">radio wave</text></svg>',
          },
          caption: "Marina's phone sends a radio wave to the nearest tower, which links via fibre-optic cable to the tower near Tomas, which sends a radio wave to his phone.",
        },
        ph: "1. Marina's voice is converted into an electrical signal by the microphone. The phone converts that into a radio wave.\n2. The radio wave is transmitted from Marina's phone to the nearest tower.\n3. The tower sends the signal via fibre-optic cables to the tower nearest to Tomas.\n4. Tomas's phone receives the radio wave and converts it to sound he can hear.",
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Mobile phone networks track the location of phones in real time to route calls. This location data is also available to app developers, advertisers, and governments.\n\n**Discuss and evaluate** the implications of mobile phone technology being used to track the locations and movements of individuals. In your answer, discuss:\n\n• the advantages and disadvantages for an individual\n• the economic benefits for a company\n• the positive and negative security implications for a country\n• an overall appraisal evaluating the points discussed',
        marks: 13,
        ph: 'Advantages for individual: navigation, fitness tracking, emergency services, family safety.\nDisadvantages: loss of privacy, data sold, risk of stalking, surveillance without consent.\n\nEconomic for company: targeted advertising, logistics optimisation, consumer analytics, data monetisation.\n\nSecurity positive: tracking criminals, disaster response, public event safety.\nSecurity negative: authoritarian surveillance, suppression of protest, data breach risks.\n\nConclusion: Significant benefits but serious privacy risks. Regulation and user consent are essential to balance benefits with protection of civil liberties.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Scientific Misinformation Online (8 marks) Criterion D
  // V2: Climate change denial as alternative misinformation context
  // topicCanonical and topicGroup preserved from source
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Scientific Misinformation Online',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['science and society', 'misinformation', 'internet and science communication'], level: 'advanced' },
    stem: 'Social media allows rapid sharing of ideas globally. Some online communities promote ideas that contradict scientific consensus — for example, claims that Earth\'s climate has not been significantly affected by human activity, despite overwhelming scientific agreement on human-caused climate change.\n\nSome scientists and policymakers have suggested that scientific misinformation should be removed from social media platforms.\n\n**Discuss and evaluate** the benefits and limitations of controlling scientific information shared on the internet.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
        marks: 8,
        ph: 'Benefits of controlling:\n• Prevents spread of misinformation that could undermine public health or environmental policy\n• Protects scientific consensus and public trust\n• Reduces harmful consequences of people acting on false information\n\nLimitations:\n• Who decides what is correct science? Scientific consensus evolves — early climate data was disputed by legitimate scientists\n• Risk of suppressing valid scientific dissent or emerging minority views\n• Technically and economically difficult to implement at global scale\n• Governments may exploit control to suppress inconvenient data\n• Undermines freedom of expression and open academic debate\n\nConclusion: Removing clearly false and harmful content has merit. However, broad removal risks censorship. A more nuanced approach — clearly labelling disputed claims with the current scientific consensus — preserves free debate while protecting public understanding.',
        level: 'advanced',
      },
    ],
  },

]
