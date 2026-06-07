import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2017: Record<string, ConceptEntry> = {
  // Q1 — Atoms & Static Electricity
  q1_a: {
    keyConcepts: ['proton: nucleus, mass 1, charge +1', 'neutron: nucleus, mass 1, charge 0', 'electron: orbitals, mass 0, charge −1'],
    keywords: ['nucleus', 'orbitals', 'proton', 'neutron', 'electron', 'mass 1', 'charge +1', 'charge 0', 'charge -1'],
  },
  q1_b: {
    keyConcepts: ['electrons transferred from cloth to nylon', 'charge transfer via electron movement'],
    keywords: ['electrons', 'transferred', 'cloth', 'nylon'],
  },
  q1_c: {
    keyConcepts: ['like charges repel', 'both nylon pieces same negative charge'],
    keywords: ['repulsion', 'repel', 'same charge'],
  },
  q1_d: {
    keyConcepts: ['no transfer between same charges', 'nothing happens'],
    keywords: ['nothing', 'same charge', 'no exchange'],
  },

  // Q2 — Raindrops / Terminal Velocity
  q2_a: {
    keyConcepts: ['v² = u² + 2as or mgh = ½mv²', 'v = √(2gh) = 100 ms⁻¹'],
    keywords: ['v² = u² + 2as', '100', 'ms⁻¹', 'v = √2gh'],
  },
  q2_b: {
    keyConcepts: ['terminal velocity: balanced forces (equal A and B arrows)', 'diagram 1 shows equal forces'],
    keywords: ['terminal velocity', 'balanced', 'equal forces', 'diagram 1'],
  },
  q2_c: {
    keyConcepts: ['Force A (up) = air resistance / drag', 'Force B (down) = weight / gravitational force'],
    keywords: ['air resistance', 'drag', 'weight', 'gravitational force'],
  },
  q2_d: {
    keyConcepts: ['3.0 × 10⁻⁵ kg = 3.0 × 10⁻² g = 0.03 g'],
    keywords: ['0.03 g', '3.0 × 10⁻²', 'grams', 'conversion'],
  },
  q2_e: {
    keyConcepts: ['p = mv = 3.0×10⁻⁵ × 100 = 3.0×10⁻³ kgms⁻¹'],
    keywords: ['momentum', 'p = mv', '3.0 × 10⁻³', 'kgms⁻¹'],
  },
  q2_f: {
    keyConcepts: ['proportional requires straight line through origin', 'graph not straight line → hypothesis incorrect'],
    keywords: ['straight line', 'origin', 'proportional', 'hypothesis incorrect'],
  },
  q2_g: {
    keyConcepts: ['v² vs r: straight line through origin → v² ∝ r'],
    keywords: ['v² ∝ r', 'proportional', 'straight line', 'origin'],
  },

  // Q3 — Electricity & Light Bulbs
  q3_a: {
    keyConcepts: ['chemical → electrical → light (energy chain in battery + bulb circuit)'],
    keywords: ['chemical', 'electrical', 'light'],
  },
  q3_b: {
    keyConcepts: ['P = VI = 12 × 0.5 = 6 W'],
    keywords: ['6 W', 'watts', 'P = VI'],
  },
  q3_c: {
    keyConcepts: ['Q = It = 0.5 × 100 = 50 C'],
    keywords: ['50 C', 'coulombs', 'Q = It'],
  },
  q3_d: {
    keyConcepts: ['variable resistor increases total R', 'I = V/R decreases (V fixed)', 'less current → less power → dimmer bulb'],
    keywords: ['resistance', 'increases', 'current', 'decreases', 'brightness', 'voltage drops'],
  },
  q3_e: {
    keyConcepts: ['gradient = running cost rate (LED shallowest = cheapest to run)', 'y-intercept = purchase price', 'intersection shows break-even point', 'LED 4W = lowest energy use'],
    keywords: ['gradient', 'y-intercept', 'intersection', 'LED', '4W', 'running cost', 'economical'],
  },
  q3_f: {
    keyConcepts: ['life span of bulb needed for full comparison'],
    keywords: ['life span', 'lifespan', 'how long lasts'],
  },

  // Q4 — Evaporation Investigation
  q4_a: {
    keyConcepts: ['question: how does surface area affect mass evaporated?'],
    keywords: ['surface area', 'mass evaporated', 'affect'],
  },
  q4_b: {
    keyConcepts: ['rate = mass/time = 0.25/12 min × 60 = 1.25 g h⁻¹'],
    keywords: ['1.25', 'g h⁻¹', 'rate', 'convert minutes to hours'],
  },
  q4_c: {
    keyConcepts: ['larger area → more particles escape → more evaporation', 'proportional relationship predicted'],
    keywords: ['surface area', 'particles', 'escape', 'evaporation increases', 'proportional'],
  },
  q4_d: {
    keyConcepts: ['IV = surface area', 'DV = mass evaporated', 'CV = time, temperature, liquid type'],
    keywords: ['surface area', 'independent', 'mass', 'dependent', 'control', 'time', 'temperature'],
  },
  q4_e: {
    keyConcepts: ['5 different areas', 'measure mass AND diameter/radius', '3 repeats per area'],
    keywords: ['5 increments', '3 repeats', 'diameter', 'radius', 'mass'],
  },
  q4_f: {
    keyConcepts: ['mass ∝ area', 'linear relationship through origin'],
    keywords: ['proportional', 'linear', 'origin', 'increases with area'],
  },
  q4_g: {
    keyConcepts: ['k = gradient ≈ 0.0284 g cm⁻²'],
    keywords: ['0.0284', 'gradient', 'g cm⁻²'],
  },
  q4_h: {
    keyConcepts: ['mass = k × area = 0.0284 × 40000 ≈ 1.1 kg'],
    keywords: ['1.1 kg', '1136 g', '40000 cm²', 'mass = k × area'],
  },

  // Q5 — Temperature & Evaporation
  q5_a: {
    keyConcepts: ['how does temperature affect rate of evaporation?'],
    keywords: ['temperature', 'evaporation rate', 'affect'],
  },
  q5_b: {
    keyConcepts: ['temperature increases → evaporation rate increases', 'particles have more KE at higher temperature → escape more easily'],
    keywords: ['temperature', 'rate increases', 'kinetic energy', 'particles escape'],
  },
  q5_c: {
    keyConcepts: ['IV = temperature or air speed', 'CV = type of liquid, surface area, air speed'],
    keywords: ['temperature', 'independent', 'control', 'surface area', 'liquid type'],
  },

  // Q6 — Kilimanjaro Boiling Point
  q6_a: {
    keyConcepts: ['Heading 1 = altitude/height (m)', 'Heading 2 = boiling point/temperature (°C)', '5200m reading = 83.5°C'],
    keywords: ['altitude', 'm', 'temperature', '°C', '83.5'],
  },
  q6_b: {
    keyConcepts: ['line graph for continuous data', 'bar chart for discrete data', 'line graph allows LOBF'],
    keywords: ['line graph', 'continuous', 'bar chart', 'line of best fit'],
  },
  q6_c: {
    keyConcepts: ['3700m = anomalous (88.0°C)', 'does not lie on line of best fit'],
    keywords: ['3700', 'anomalous', '88.0', 'line of best fit'],
  },
  q6_d: {
    keyConcepts: ['as altitude increases boiling point decreases', 'linear relationship'],
    keywords: ['altitude', 'increases', 'boiling point', 'decreases', 'linear'],
  },
  q6_e: {
    keyConcepts: ['lower pressure at altitude', 'less energy needed for particles to escape', 'lower boiling point'],
    keywords: ['pressure', 'lower', 'particles escape', 'less energy', 'boiling point'],
  },

  // Q7 — Design Investigation
  q7_a: {
    keyConcepts: ['IV = pressure/altitude', 'DV = boiling point', '2 justified CVs', '5 pressure values, 3 repeats'],
    keywords: ['pressure', 'boiling point', 'control variables', 'method', '5 values', '3 repeats'],
  },

  // Q8 — Solar Tubes & Water Features
  q8_a: {
    keyConcepts: ['advantages: free light, no electricity', 'disadvantages: daytime only, limited range'],
    keywords: ['free light', 'no electricity', 'daytime', 'limited range', 'maintenance'],
  },
  q8_b: {
    keyConcepts: ['strengths: natural cooling, no electricity', 'limitations: humidity, water supply', 'environmental: less CO₂ but uses water', 'economic cost-benefit', 'justified recommendation'],
    keywords: ['natural cooling', 'humidity', 'water supply', 'CO₂', 'economic', 'recommend'],
  },
}
