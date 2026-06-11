import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2017_V1: Record<string, ConceptEntry> = {

  // Q1 — Atoms & Static Electricity
  q1_a: {
    keyConcepts: ['proton: nucleus, mass 1, charge +1', 'neutron: nucleus, mass 1, charge 0', 'electron: orbitals, mass 0, charge −1'],
    keywords: ['nucleus', 'orbitals', 'proton', 'neutron', 'electron', 'mass 1', 'charge +1', 'charge 0', 'charge -1'],
  },
  q1_b: {
    keyConcepts: ['electrons transferred from cloth to polythene strip', 'charge transfer via electron movement'],
    keywords: ['electrons', 'transferred', 'cloth', 'polythene', 'strip'],
  },
  q1_c: {
    keyConcepts: ['like charges repel', 'both strips same negative charge'],
    keywords: ['repulsion', 'repel', 'same charge'],
  },
  q1_d: {
    keyConcepts: ['no charge transfer between same-charge objects', 'nothing happens'],
    keywords: ['nothing', 'same charge', 'no exchange'],
  },

  // Q2 — Snowflakes & Terminal Velocity
  q2_a: {
    keyConcepts: ['v² = u² + 2as', 'v = √(2gh)', 'v = 120 ms⁻¹ for h = 720 m'],
    keywords: ['v² = u² + 2as', '120', 'ms⁻¹', 'free fall', 'kinematics'],
  },
  q2_c: {
    keyConcepts: ['air resistance acts upward on falling object', 'weight acts downward'],
    keywords: ['air resistance', 'drag', 'weight', 'upward', 'downward'],
  },
  q2_d: {
    keyConcepts: ['unit conversion kg to grams: × 1000', '5.0 × 10⁻⁵ kg = 0.05 g'],
    keywords: ['unit conversion', 'grams', 'kilograms', '0.05'],
  },
  q2_e: {
    keyConcepts: ['momentum p = mv', 'p = 5.0×10⁻⁵ × 120 = 6.0×10⁻³ kgms⁻¹'],
    keywords: ['p = mv', 'momentum', '6.0 × 10⁻³', 'kgms⁻¹'],
  },
  q2_f: {
    keyConcepts: ['proportionality requires straight line through origin', 'validity of hypothesis evaluated against graph'],
    keywords: ['straight line', 'origin', 'proportional', 'hypothesis', 'not supported'],
  },
  q2_g: {
    keyConcepts: ['straight line through origin shows direct proportionality', 'v² ∝ r'],
    keywords: ['straight line', 'origin', 'v² ∝ r', 'directly proportional'],
  },

  // Q3 — Electricity & Light Bulbs
  q3_a: {
    keyConcepts: ['battery: chemical to electrical energy', 'bulb: electrical to light energy'],
    keywords: ['chemical', 'electrical', 'light', 'energy chain'],
  },
  q3_b: {
    keyConcepts: ['P = VI', 'P = 9 × 0.3 = 2.7 W'],
    keywords: ['power', 'P = VI', '2.7 W', 'watts'],
  },
  q3_c: {
    keyConcepts: ['charge Q = It', 'Q = 0.3 × 150 = 45 C'],
    keywords: ['Q = It', 'charge', '45 C', 'coulombs'],
  },
  q3_d: {
    keyConcepts: ['increasing resistance reduces current (I = V/R, fixed V)', 'less current → less power → dimmer bulb'],
    keywords: ['resistance', 'current', 'I = V/R', 'power', 'brightness', 'decreases'],
  },
  q3_e: {
    keyConcepts: ['gradient = running cost rate', 'y-intercept = purchase price', 'intersection = break-even'],
    keywords: ['gradient', 'y-intercept', 'intersection', 'LED', 'running cost', 'economical'],
  },
  q3_f: {
    keyConcepts: ['bulb lifespan needed for total cost-of-ownership comparison'],
    keywords: ['life span', 'lifespan', 'replacement'],
  },

  // Q4 — Evaporation Surface Area Investigation
  q4_a: {
    keyConcepts: ['investigation question links IV (surface area) to DV (mass evaporated)'],
    keywords: ['surface area', 'mass evaporated', 'investigation question'],
  },
  q4_b: {
    keyConcepts: ['rate = mass/time', 'convert per-minute to per-hour by × 60', '1.20 g h⁻¹'],
    keywords: ['rate', 'mass', 'time', '1.20 g h⁻¹', 'convert'],
  },
  q4_c: {
    keyConcepts: ['larger surface area → more particles escape → greater evaporation rate', 'hypothesis must include direction and particle reason'],
    keywords: ['surface area', 'rate', 'particles', 'escape', 'proportional'],
  },
  q4_d: {
    keyConcepts: ['IV = surface area', 'DV = mass evaporated', 'control variables: time, temperature, liquid type, air movement'],
    keywords: ['surface area', 'independent', 'mass', 'dependent', 'control', 'time', 'temperature', 'liquid type'],
  },
  q4_e: {
    keyConcepts: ['at least 5 different IV values', 'at least 3 repeats per value', 'calculate mean'],
    keywords: ['5 increments', '3 repeats', 'mean', 'mass', 'surface area'],
  },
  q4_f: {
    keyConcepts: ['mass evaporated proportional to surface area', 'linear relationship through origin'],
    keywords: ['proportional', 'linear', 'area', 'mass', 'origin'],
  },
  q4_g: {
    keyConcepts: ['gradient = constant of proportionality k', 'k = Δy/Δx ≈ 0.0200 g cm⁻²'],
    keywords: ['gradient', 'constant', '0.0200', 'g cm⁻²'],
  },
  q4_h: {
    keyConcepts: ['mass = k × area', '60 000 cm² = 6 m²', 'answer 1.2 kg'],
    keywords: ['mass = k × area', '60000', '1.2 kg', '1200 g'],
  },

  // Q5 — Temperature & Evaporation
  q5_a: {
    keyConcepts: ['question links temperature (IV) to rate of evaporation (DV)'],
    keywords: ['temperature', 'rate of evaporation', 'affect'],
  },
  q5_b: {
    keyConcepts: ['higher temperature → greater kinetic energy → more molecules escape → faster evaporation'],
    keywords: ['temperature', 'kinetic energy', 'particles', 'escape', 'rate'],
  },
  q5_c: {
    keyConcepts: ['IV = temperature', 'control variables: surface area, liquid type, air speed'],
    keywords: ['temperature', 'independent', 'control', 'surface area', 'liquid type'],
  },

  // Q6 — Mount Fuji Boiling Point vs Altitude
  q6_a: {
    keyConcepts: ['table headings: altitude (m) and boiling point (°C)', 'reading thermometer from photograph'],
    keywords: ['altitude', 'boiling point', 'heading', 'temperature', '°C', '91.5'],
  },
  q6_b: {
    keyConcepts: ['line graph for continuous variables', 'bar chart only for discrete/categorical data'],
    keywords: ['line graph', 'continuous', 'bar chart', 'discrete'],
  },
  q6_c: {
    keyConcepts: ['anomalous result = point not on line of best fit', 'must identify specific altitude'],
    keywords: ['anomalous', 'line of best fit', '1600 m'],
  },
  q6_d: {
    keyConcepts: ['as altitude increases, boiling point decreases', 'linear relationship'],
    keywords: ['altitude', 'boiling point', 'decreases', 'linear'],
  },
  q6_e: {
    keyConcepts: ['lower air pressure at high altitude', 'fewer air particles → less energy needed to escape → lower boiling point'],
    keywords: ['pressure', 'lower', 'particles', 'energy', 'escape', 'boiling point'],
  },

  // Q7 — Boiling Point Investigation Design (banded)
  q7_a: {
    keyConcepts: ['IV = air pressure (varied by vacuum pump)', 'DV = boiling point of liquid', '2 justified CVs', 'equipment for both measurements', 'complete reproducible method', '5 pressure values × 3 repeats'],
    keywords: ['pressure', 'boiling point', 'vacuum pump', 'thermometer', 'control', '5 values', '3 repeats', 'mean'],
  },

  // Q8 — Troglodyte Housing & Cooling Features
  q8_a: {
    keyConcepts: ['advantages: natural light, no electricity', 'disadvantages: daytime only, limited range, expensive, maintenance'],
    keywords: ['natural light', 'no electricity', 'daytime', 'expensive', 'maintenance', 'limited range'],
  },
  q8_b: {
    keyConcepts: ['evaluate cooling feature: strengths, limitations, environmental, economic, recommendation', 'plant transpiration + evaporation as natural cooling'],
    keywords: ['strengths', 'limitations', 'humidity', 'CO₂', 'water', 'economic', 'recommendation'],
  },

}
