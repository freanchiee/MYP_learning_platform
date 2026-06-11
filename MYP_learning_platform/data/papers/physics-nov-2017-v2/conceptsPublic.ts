import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2017_V2: Record<string, ConceptEntry> = {

  // Q1 — Atoms & Static Electricity
  q1_a: {
    keyConcepts: ['proton: nucleus, mass 1, charge +1', 'neutron: nucleus, mass 1, charge 0', 'electron: orbitals, mass 0, charge −1'],
    keywords: ['nucleus', 'orbitals', 'proton', 'neutron', 'electron', 'mass 1', 'charge +1', 'charge 0', 'charge -1'],
  },
  q1_b: {
    keyConcepts: ['electrons transferred from silk cloth to PVC pipe', 'charge transfer via electron movement'],
    keywords: ['electrons', 'transferred', 'silk', 'cloth', 'PVC', 'pipe'],
  },
  q1_c: {
    keyConcepts: ['like charges repel', 'both pipes same negative charge'],
    keywords: ['repulsion', 'repel', 'same charge'],
  },
  q1_d: {
    keyConcepts: ['no charge transfer between same-charge objects', 'nothing happens'],
    keywords: ['nothing', 'same charge', 'no exchange'],
  },

  // Q2 — Hailstones & Terminal Velocity
  q2_a: {
    keyConcepts: ['v² = u² + 2as', 'v = √6400 = 80 ms⁻¹ for h = 320 m'],
    keywords: ['v² = u² + 2as', '80', 'ms⁻¹', 'free fall', 'kinematics'],
  },
  q2_c: {
    keyConcepts: ['air resistance upward', 'weight downward'],
    keywords: ['air resistance', 'drag', 'weight', 'upward', 'downward'],
  },
  q2_d: {
    keyConcepts: ['4.0 × 10⁻⁵ kg = 0.04 g', 'unit conversion × 1000'],
    keywords: ['unit conversion', '0.04 g', '4.0 × 10⁻² g'],
  },
  q2_e: {
    keyConcepts: ['p = mv = 4.0×10⁻⁵ × 80 = 3.2×10⁻³ kgms⁻¹'],
    keywords: ['p = mv', 'momentum', '3.2 × 10⁻³', 'kgms⁻¹'],
  },
  q2_f: {
    keyConcepts: ['proportional = straight line through origin', 'evaluate hypothesis against graph'],
    keywords: ['straight line', 'origin', 'proportional', 'hypothesis', 'not supported'],
  },
  q2_g: {
    keyConcepts: ['straight line through origin → v² directly proportional to r'],
    keywords: ['straight line', 'origin', 'v² ∝ r', 'directly proportional'],
  },

  // Q3 — Electricity & Light Bulbs
  q3_a: {
    keyConcepts: ['chemical → electrical → light energy chain'],
    keywords: ['chemical', 'electrical', 'light'],
  },
  q3_b: {
    keyConcepts: ['P = VI = 15 × 0.6 = 9.0 W'],
    keywords: ['P = VI', '9.0 W', 'power', 'watts'],
  },
  q3_c: {
    keyConcepts: ['Q = It = 0.6 × 80 = 48 C'],
    keywords: ['Q = It', '48 C', 'charge', 'coulombs'],
  },
  q3_d: {
    keyConcepts: ['increasing R reduces I (fixed V)', 'less I → less P → dimmer bulb'],
    keywords: ['resistance', 'current', 'I = V/R', 'power', 'brightness', 'decreases'],
  },
  q3_e: {
    keyConcepts: ['gradient = running cost per hour', 'y-intercept = purchase price', 'intersection = break-even'],
    keywords: ['gradient', 'y-intercept', 'intersection', 'LED', 'running cost'],
  },
  q3_f: {
    keyConcepts: ['bulb lifespan needed for full cost comparison'],
    keywords: ['life span', 'lifespan', 'replacement'],
  },

  // Q4 — Evaporation Surface Area Investigation
  q4_a: {
    keyConcepts: ['question: surface area (IV) → mass evaporated (DV)'],
    keywords: ['surface area', 'mass evaporated', 'investigation question'],
  },
  q4_b: {
    keyConcepts: ['rate = 0.48/16 × 60 = 1.80 g h⁻¹'],
    keywords: ['rate', '1.80 g h⁻¹', 'convert', 'mass', 'time'],
  },
  q4_c: {
    keyConcepts: ['larger area → more molecules escape → higher rate', 'particle-level reason required'],
    keywords: ['surface area', 'rate', 'particles', 'escape', 'proportional'],
  },
  q4_d: {
    keyConcepts: ['IV = surface area', 'DV = mass evaporated', 'CVs: time, temperature, liquid type, air movement'],
    keywords: ['surface area', 'independent', 'mass', 'dependent', 'control', 'time', 'temperature'],
  },
  q4_e: {
    keyConcepts: ['≥5 IV values', '≥3 repeats', 'calculate mean'],
    keywords: ['5 increments', '3 repeats', 'mean', 'surface area'],
  },
  q4_f: {
    keyConcepts: ['mass proportional to area', 'linear through origin'],
    keywords: ['proportional', 'linear', 'area', 'mass', 'origin'],
  },
  q4_g: {
    keyConcepts: ['k = gradient ≈ 0.0350 g cm⁻²'],
    keywords: ['gradient', 'constant', '0.0350', 'g cm⁻²'],
  },
  q4_h: {
    keyConcepts: ['mass = 0.0350 × 80 000 = 2800 g = 2.8 kg'],
    keywords: ['mass = k × area', '80000', '2.8 kg'],
  },

  // Q5 — Temperature & Evaporation
  q5_a: {
    keyConcepts: ['question links temperature to evaporation rate'],
    keywords: ['temperature', 'rate of evaporation'],
  },
  q5_b: {
    keyConcepts: ['higher T → more KE → more molecules escape → faster evaporation'],
    keywords: ['temperature', 'kinetic energy', 'particles', 'escape'],
  },
  q5_c: {
    keyConcepts: ['IV = temperature', 'CVs: surface area, liquid type, air speed'],
    keywords: ['temperature', 'independent', 'control'],
  },

  // Q6 — Mont Blanc Boiling Point vs Altitude
  q6_a: {
    keyConcepts: ['headings: altitude (m) and boiling point (°C)', 'thermometer read = 90.5°C at 3100 m'],
    keywords: ['altitude', 'boiling point', '°C', '90.5'],
  },
  q6_b: {
    keyConcepts: ['line graph for continuous data'],
    keywords: ['line graph', 'continuous'],
  },
  q6_c: {
    keyConcepts: ['anomalous = not on line of best fit', '2200 m identified'],
    keywords: ['anomalous', 'line of best fit', '2200 m'],
  },
  q6_d: {
    keyConcepts: ['altitude increases → boiling point decreases', 'linear'],
    keywords: ['altitude', 'boiling point', 'decreases', 'linear'],
  },
  q6_e: {
    keyConcepts: ['lower pressure at altitude → less energy needed → lower boiling point'],
    keywords: ['pressure', 'lower', 'energy', 'particles', 'boiling point'],
  },

  // Q7 — Boiling Point Investigation Design
  q7_a: {
    keyConcepts: ['IV = pressure (vacuum pump)', 'DV = boiling point', '2 justified CVs', 'equipment named', 'complete method', '5 values × 3 repeats'],
    keywords: ['pressure', 'boiling point', 'vacuum pump', 'thermometer', '5 values', '3 repeats', 'mean'],
  },

  // Q8 — Rammed-Earth Housing & Indoor Ponds
  q8_a: {
    keyConcepts: ['advantages: natural daylight no electricity', 'disadvantages: daytime only orientation maintenance'],
    keywords: ['natural light', 'no electricity', 'daytime', 'orientation', 'maintenance'],
  },
  q8_b: {
    keyConcepts: ['evaluate indoor pond: strengths, limitations, environmental, economic, recommendation'],
    keywords: ['strengths', 'limitations', 'humidity', 'CO₂', 'water', 'economic', 'recommendation'],
  },

}
