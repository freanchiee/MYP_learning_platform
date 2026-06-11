import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2021_V2: Record<string, ConceptEntry> = {
  // Q1 — Electromagnetic Waves (Aviation Radio)
  q1_a: {
    keyConcepts: ['all EM waves travel at c = 3×10⁸ m/s in vacuum', 'radio waves have longer wavelength than visible light'],
    keywords: ['same speed', 'longer wavelength', 'electromagnetic', 'radio'],
  },
  q1_b: {
    keyConcepts: ['diffraction = bending of waves around obstacles', 'radio waves diffract around Earth\'s curvature'],
    keywords: ['diffraction', 'bending', 'curvature', 'horizon'],
  },
  q1_c: {
    keyConcepts: ['t = d/v', '12 km = 12 000 m', 't = 12 000 / (3×10⁸) = 4.0×10⁻⁵ s'],
    keywords: ['t = d/v', '12 000 m', '4.0 × 10⁻⁵ s'],
  },
  q1_d: {
    keyConcepts: ['radio enables real-time air traffic guidance', 'prevents mid-air collisions', 'emergency communication', 'radar development'],
    keywords: ['guidance', 'collision', 'emergency', 'radar', 'real-time'],
  },

  // Q2 — Radioactivity (Technetium-99m)
  q2_a: {
    keyConcepts: ['atomic number = number of protons (43 for Tc)', 'mass number = number of nucleons (99)'],
    keywords: ['protons', 'atomic number', '43', 'mass number', 'nucleons', '99'],
  },
  q2_b: {
    keyConcepts: ['beta particles = electrons → negatively charged', 'deflected toward positive plate'],
    keywords: ['beta', 'electrons', 'negative', 'positive plate', 'image C'],
  },
  q2_c: {
    keyConcepts: ['half-life = time for mass to halve', 'Tc-99m half-life ≈ 6 h from graph'],
    keywords: ['half-life', '6 h', 'halves', 'graph'],
  },
  q2_d: {
    keyConcepts: ['short half-life: minimises dose post-scan; long enough for procedure', 'gamma: penetrates → external detection; no beta = no tissue damage'],
    keywords: ['short', 'minimises dose', 'gamma', 'penetrates', 'external', 'no tissue damage'],
  },

  // Q3 — KE & Regenerative Braking (Hybrid Bus)
  q3_a: {
    keyConcepts: ['KE = ½mv²', 'KE = ½ × 2000 × 256 = 256 000 J'],
    keywords: ['KE = ½mv²', '256 000 J', '2000 kg', '16 m/s'],
  },
  q3_b: {
    keyConcepts: ['v² = u² + 2as', 'a = −256/44 = −5.82 m s⁻²'],
    keywords: ['v² = u² + 2as', '−5.82 m s⁻²', 'deceleration'],
  },
  q3_c: {
    keyConcepts: ['wasted energy = cannot be converted to useful work', 'heat cannot drive the bus'],
    keywords: ['wasted', 'heat', 'useful work', 'cannot drive'],
  },
  q3_d: {
    keyConcepts: ['energy chain: KE → mechanical → electrical → chemical potential → thermal'],
    keywords: ['kinetic energy', 'electrical', 'chemical potential', 'battery', 'thermal'],
  },
  q3_e: {
    keyConcepts: ['regenerative braking stores KE in battery → less diesel burned'],
    keywords: ['stored', 'battery', 'less diesel', 'fuel', 'reused'],
  },
  q3_f: {
    keyConcepts: ['diesel → CO₂ + particulates → global warming and air pollution → global problem'],
    keywords: ['CO₂', 'greenhouse', 'global warming', 'particulates', 'air pollution', 'global'],
  },

  // Q4 — Ball on Ramp
  q4_a: {
    keyConcepts: ['research question links distance (IV) to time (DV)'],
    keywords: ['distance', 'time', 'affect', 'ramp'],
  },
  q4_b: {
    keyConcepts: ['IV = distance; DV = time; CVs = mass, size, angle'],
    keywords: ['IV', 'DV', 'CV', 'distance', 'time', 'mass', 'size', 'angle'],
  },
  q4_c: {
    keyConcepts: ['constant gravity component → constant force', 'F=ma: constant F, m → constant a'],
    keywords: ['constant force', 'gravity', 'Newton', 'F=ma', 'constant acceleration'],
  },
  q4_d: {
    keyConcepts: ['s = ½at² → s ∝ t² → s vs t² straight line through origin (Graph B)'],
    keywords: ['s ∝ t²', 'Graph B', 'straight line', 'origin'],
  },
  q4_e: {
    keyConcepts: ['unit = s²', '2.38² = 5.6644 ≈ 5.66 s²'],
    keywords: ['s²', '5.66', '2.38'],
  },
  q4_f: {
    keyConcepts: ['water clock = non-standard units → not reproducible/comparable'],
    keywords: ['non-standard', 'units', 'reproducible'],
  },
  q4_g: {
    keyConcepts: ['stopwatch for time measurement'],
    keywords: ['stopwatch', 'digital timer'],
  },
  q4_h: {
    keyConcepts: ['new IV (e.g. angle); research question; 2 CVs'],
    keywords: ['angle', 'research question', 'IV', 'CV'],
  },

  // Q5 — Cone Drag
  q5_a: {
    keyConcepts: ['larger base area → more air particle collisions → more air resistance → smaller net force → falls more slowly'],
    keywords: ['area', 'slower', 'collisions', 'air resistance', 'net force'],
  },
  q5_b: {
    keyConcepts: ['IV/DV/2CVs justified; equipment; method 5+ values, 3 repeats, mean; safety'],
    keywords: ['IV', 'DV', 'CV', 'equipment', 'method', 'repeats', 'mean', 'safety'],
  },

  // Q6 — Projector Lens
  q6_a: {
    keyConcepts: ['dᵢ = screen position − dₒ = 58.0 − 30 = 28.0 cm'],
    keywords: ['dᵢ', '28.0 cm', '58.0 − 30'],
  },
  q6_b: {
    keyConcepts: ['table: dₒ/cm and dᵢ/cm headers; ascending order; 0.345 m → 34.5 cm conversion; Q6a included'],
    keywords: ['dₒ / cm', 'dᵢ / cm', 'ordered', '28.0', '34.5'],
  },
  q6_c: {
    keyConcepts: ['header: f / m', '1/dᵢ = 4.40 m⁻¹', '1/f = 6.90 m⁻¹', 'f = 0.145 m'],
    keywords: ['f / m', '4.40', '6.90', '0.145 m'],
  },
  q6_d: {
    keyConcepts: ['anomalous = f = 0.121 m (dₒ = 50 cm row)'],
    keywords: ['anomalous', '0.121 m', '50 cm'],
  },
  q6_e: {
    keyConcepts: ['Graph C: best-fit excludes anomalous, equal points above/below'],
    keywords: ['Graph C', 'best fit', 'anomalous', 'equal points'],
  },
  q6_f: {
    keyConcepts: ['y-intercept = 1/f ≈ 6.90 → f = 0.145 m'],
    keywords: ['y-intercept', '6.90 m⁻¹', '0.145 m'],
  },

  // Q7 — Hot Air Balloon
  q7_a: {
    keyConcepts: ['takeoff: T > W → unbalanced → net upward force → acceleration', 'Diagram A selected'],
    keywords: ['T > W', 'unbalanced', 'net upward', 'Diagram A'],
  },
  q7_b: {
    keyConcepts: ['advantages: high-altitude access, payload, silent', 'disadvantages: no steering, weather, slow, crash risk', 'conclusion: non-urgent scheduled deliveries only'],
    keywords: ['access', 'payload', 'silent', 'steering', 'slow', 'weather', 'conclusion'],
  },

  // Q8 — Marine Drones
  q8_a: {
    keyConcepts: ['2 marine uses with scientific benefit', 'social implications (pos+neg)', 'political implications (pos+neg)', 'concluding appraisal'],
    keywords: ['coral', 'whale', 'social', 'political', 'sovereignty', 'conservation', 'conclusion'],
  },
}
