import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2021_V1: Record<string, ConceptEntry> = {
  // Q1 — Electromagnetic Waves (Maritime Radio)
  q1_a: {
    keyConcepts: ['all EM waves travel at c = 3×10⁸ m/s in vacuum', 'radio waves have longer wavelength than visible light'],
    keywords: ['same speed', 'longer wavelength', 'electromagnetic', 'radio'],
  },
  q1_b: {
    keyConcepts: ['diffraction = bending of waves around obstacles', 'radio waves diffract around headlands and hills'],
    keywords: ['diffraction', 'bending', 'obstacle', 'radio waves'],
  },
  q1_c: {
    keyConcepts: ['t = d/v', '9 km = 9000 m', 't = 9000 / (3×10⁸) = 3.0×10⁻⁵ s'],
    keywords: ['t = d/v', '9000 m', '3.0 × 10⁻⁵ s'],
  },
  q1_d: {
    keyConcepts: ['radio enables long-range communication without cables', 'real-time maritime rescue', 'led to radar and navigation systems'],
    keywords: ['long range', 'no cables', 'real-time', 'rescue', 'radar'],
  },

  // Q2 — Radioactivity (Iodine-131)
  q2_a: {
    keyConcepts: ['atomic number = number of protons (53 for I)', 'mass number = number of nucleons (131)'],
    keywords: ['protons', 'atomic number', '53', 'mass number', 'nucleons', '131'],
  },
  q2_b: {
    keyConcepts: ['beta particles = electrons → negatively charged', 'deflected toward positive plate in electric field'],
    keywords: ['beta', 'electrons', 'negative', 'positive plate', 'deflected', 'image C'],
  },
  q2_c: {
    keyConcepts: ['half-life = time for activity/mass to halve', 'I-131 half-life ≈ 8 days from graph'],
    keywords: ['half-life', 'halves', '8 days', 'graph'],
  },
  q2_d: {
    keyConcepts: ['half-life suitable: long enough for treatment, short enough to limit exposure', 'beta destroys local cancer cells; gamma detected externally'],
    keywords: ['half-life', 'long enough', 'short enough', 'beta', 'gamma', 'external', 'thyroid'],
  },

  // Q3 — KE & Regenerative Braking (Electric Car)
  q3_a: {
    keyConcepts: ['KE = ½mv²', 'KE = ½ × 1800 × 576 = 518 400 J'],
    keywords: ['KE = ½mv²', '518 400 J', '1800 kg', '24 m/s'],
  },
  q3_b: {
    keyConcepts: ['v² = u² + 2as', 'a = −576/64 = −9.00 m s⁻²'],
    keywords: ['v² = u² + 2as', '−9.00 m s⁻²', 'deceleration'],
  },
  q3_c: {
    keyConcepts: ['wasted energy = cannot be converted to useful work', 'heat cannot drive the car'],
    keywords: ['wasted', 'heat', 'useful work', 'cannot drive'],
  },
  q3_d: {
    keyConcepts: ['energy chain: KE → mechanical → electrical → chemical potential → thermal'],
    keywords: ['kinetic energy', 'electrical', 'chemical potential', 'battery', 'thermal'],
  },
  q3_e: {
    keyConcepts: ['regenerative braking stores KE in battery → less energy from external source → longer range'],
    keywords: ['stored', 'battery', 'range', 'less charge needed'],
  },
  q3_f: {
    keyConcepts: ['burning fuel → CO₂ → greenhouse effect → global warming → global problem affecting all countries'],
    keywords: ['CO₂', 'greenhouse', 'global warming', 'climate change', 'global significance'],
  },

  // Q4 — Galileo's Ramp
  q4_a: {
    keyConcepts: ['research question links distance (IV) to time (DV)'],
    keywords: ['distance', 'time', 'ramp', 'affect'],
  },
  q4_b: {
    keyConcepts: ['IV = distance; DV = time; CVs = mass, size, angle'],
    keywords: ['IV', 'DV', 'CV', 'distance', 'time', 'mass', 'size', 'angle'],
  },
  q4_c: {
    keyConcepts: ['constant gravity component = constant net force', 'Newton\'s 2nd law (F=ma): constant F, m → constant a'],
    keywords: ['constant force', 'Newton', 'F=ma', 'constant acceleration', 'gravity'],
  },
  q4_d: {
    keyConcepts: ['s = ½at² → s ∝ t² → s vs t² gives straight line through origin (Graph B)'],
    keywords: ['s ∝ t²', 'straight line', 'origin', 'Graph B', 's vs t²'],
  },
  q4_e: {
    keyConcepts: ['unit = s²', '2.14² = 4.5796 ≈ 4.58 s²'],
    keywords: ['s²', '4.58', '2.14'],
  },
  q4_f: {
    keyConcepts: ['water clock = non-standard units → results not reproducible/comparable'],
    keywords: ['non-standard', 'units', 'reproducible', 'compare'],
  },
  q4_g: {
    keyConcepts: ['stopwatch = correct modern time measurement'],
    keywords: ['stopwatch', 'digital timer', 'stopclock'],
  },
  q4_h: {
    keyConcepts: ['new IV (e.g. angle), research question linking new IV to DV (time), 2 CVs'],
    keywords: ['angle', 'new IV', 'research question', 'CV'],
  },

  // Q5 — Coffee Filter Air Resistance
  q5_a: {
    keyConcepts: ['more mass → faster fall (greater weight)', 'same area → similar air resistance', 'particle theory: same collision frequency per unit area'],
    keywords: ['mass', 'faster', 'weight', 'air resistance', 'collisions', 'surface area'],
  },
  q5_b: {
    keyConcepts: ['IV/DV/2CVs justified; equipment list; step method with 5+ values, 3 repeats, mean; safety'],
    keywords: ['IV', 'DV', 'CV', 'equipment', 'method', 'repeats', 'mean', 'safety'],
  },

  // Q6 — Camera Lens
  q6_a: {
    keyConcepts: ['dᵢ = screen position − object distance = 41.7 − 25 = 16.7 cm'],
    keywords: ['dᵢ', '16.7 cm', '41.7 − 25'],
  },
  q6_b: {
    keyConcepts: ['table with dₒ/cm and dᵢ/cm headers; units in headers; ascending order; Q6a result included'],
    keywords: ['dₒ / cm', 'dᵢ / cm', 'ordered', '16.7'],
  },
  q6_c: {
    keyConcepts: ['header: f / m', '1/dᵢ = 6.67 m⁻¹', '1/f = 10.00 m⁻¹', 'f = 0.100 m'],
    keywords: ['f / m', '6.67', '10.00', '0.100 m'],
  },
  q6_d: {
    keyConcepts: ['anomalous data point = f = 0.124 m (dₒ = 40 cm, noticeably off from ~0.100 m)'],
    keywords: ['anomalous', '0.124 m', '40 cm'],
  },
  q6_e: {
    keyConcepts: ['Graph C: best-fit line excludes anomalous point, roughly equal points above/below'],
    keywords: ['Graph C', 'best fit', 'anomalous excluded', 'equal points'],
  },
  q6_f: {
    keyConcepts: ['y-intercept of 1/dᵢ vs 1/dₒ = 1/f', 'y-intercept ≈ 10.0 → f = 0.100 m'],
    keywords: ['y-intercept', '10.0 m⁻¹', '0.100 m'],
  },

  // Q7 — Helicopter
  q7_a: {
    keyConcepts: ['taking off = unbalanced forces, T > W → net upward force → upward acceleration', 'Diagram A: T > W'],
    keywords: ['T > W', 'unbalanced', 'net upward force', 'acceleration', 'Diagram A'],
  },
  q7_b: {
    keyConcepts: ['advantages: remote access, speed, dual use', 'disadvantages: cost, weather, payload, emissions', 'conclusion: emergency use in truly remote areas'],
    keywords: ['remote', 'cost', 'weather', 'payload', 'emergency', 'conclusion'],
  },

  // Q8 — Drones in Disaster Relief
  q8_a: {
    keyConcepts: ['2 disaster uses + scientific benefit', 'social implications (pos+neg)', 'political implications (pos+neg)', 'concluding appraisal'],
    keywords: ['search rescue', 'supply', 'social', 'political', 'privacy', 'sovereignty', 'conclusion'],
  },
}
