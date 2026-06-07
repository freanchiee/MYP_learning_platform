import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2018: Record<string, ConceptEntry> = {
  // Q1 — Sound and Light
  q1_a: {
    keyConcepts: ['speed of sound = 330 ms⁻¹', 'speed of light = 300 000 000 ms⁻¹'],
    keywords: ['330', '300000000', 'sound', 'light', 'speed'],
  },
  q1_b: {
    keyConcepts: ['measure time between lightning and thunder', 'distance = speed × time', 'speed of sound = 330 ms⁻¹'],
    keywords: ['time', 'thunder', 'lightning', 'distance', '330', 'speed'],
  },
  q1_c: {
    keyConcepts: ['constant speed', 'storm moves toward then away from student', 'passes at ~1 km'],
    keywords: ['constant speed', 'toward', 'away', 'passes', 'distance-time graph'],
  },
  q1_d: {
    keyConcepts: ['speed = distance/time from graph', '12 km h⁻¹'],
    keywords: ['12', 'km/h', 'speed', 'graph', 'calculate'],
  },

  // Q2 — Lightning/Electricity
  q2_a: {
    keyConcepts: ['electrons transferred from crystals to water drops', 'charge transfer by electron movement'],
    keywords: ['electrons', 'crystals', 'water', 'transferred', 'charged'],
  },
  q2_b: {
    keyConcepts: ['R = V/I', '500000 ÷ 20000 = 25 Ω'],
    keywords: ['R = V/I', '25', 'Ω', 'resistance', 'ohms'],
  },
  q2_c: {
    keyConcepts: ['Q = IΔt', '20000 × 30 × 10⁻⁶ = 0.6 C'],
    keywords: ['Q = IΔt', '0.6', 'C', 'charge', 'coulombs'],
  },
  q2_d: {
    keyConcepts: ['metal lower resistance', 'current flows through conductor to earth', 'bypasses building'],
    keywords: ['conductor', 'resistance', 'current', 'earth', 'ground', 'bypass'],
  },

  // Q3 — Decay and Half-life
  q3_a: {
    keyConcepts: ['Am→Np: alpha', 'Po→Pb: alpha', 'Np→Pu: beta', 'alpha loses 4 mass 2 atomic; beta gains 1 atomic'],
    keywords: ['alpha', 'beta', 'decay', 'Am', 'Np', 'Po', 'Pb'],
  },
  q3_b: {
    keyConcepts: ['alpha decay: mass −4, atomic number −2', 'Meitnerium-274 → Bohrium-270', 'atomic number 107'],
    keywords: ['107', '270', 'bohrium', 'Bh', 'atomic number', 'mass number'],
  },
  q3_c: {
    keyConcepts: ['gamma = high energy EM radiation', 'high frequency short wavelength', 'not a particle'],
    keywords: ['electromagnetic', 'high energy', 'high frequency', 'short wavelength', 'photon'],
  },
  q3_d: {
    keyConcepts: ['Carbon-14 for dating 10000y artifact', 'half-life appropriate to timescale', 'found in organic materials'],
    keywords: ['carbon-14', '5700', 'half-life', 'organic', 'artifact'],
  },

  // Q4 — Football Bounce
  q4_a: {
    keyConcepts: ['IV = internal air pressure', 'DV = bounce height', 'controls = drop height, size, surface, material'],
    keywords: ['air pressure', 'independent', 'bounce height', 'dependent', 'control'],
  },
  q4_b: {
    keyConcepts: ['10 kPa intervals', '3 repetitions for reliability', 'allows mean calculation'],
    keywords: ['10 kPa', '3 repetitions', 'mean', 'reliability', 'range'],
  },
  q4_c: {
    keyConcepts: ['safety measure linked to experiment', 'justification for hazard prevention'],
    keywords: ['safety', 'drop', 'injury', 'pressure', 'justify'],
  },
  q4_d: {
    keyConcepts: ['read pressure gauge: 83 kPa', 'correct unit kPa'],
    keywords: ['83', 'kPa', 'pressure', 'gauge'],
  },
  q4_e: {
    keyConcepts: ['LOBF through all data points', 'straight line'],
    keywords: ['line of best fit', 'straight line', 'data points'],
  },
  q4_f: {
    keyConcepts: ['read LOBF at 38 kPa ≈ 0.63–0.65 m'],
    keywords: ['0.63', '0.65', '38 kPa', 'estimate', 'LOBF'],
  },
  q4_g: {
    keyConcepts: ['y-intercept at 0 kPa means deflated ball', 'deflated ball cannot bounce', 'y-intercept physically meaningless'],
    keywords: ['y-intercept', 'deflated', '0 kPa', 'not bounce', 'significance'],
  },
  q4_h: {
    keyConcepts: ['proportional → LOBF through origin', 'line not through origin → not proportional', 'hypothesis not supported'],
    keywords: ['origin', 'proportional', 'line', 'not supported', 'hypothesis'],
  },

  // Q5 — Ball Bounce Data
  q5_a: {
    keyConcepts: ['ruler not used correctly affects measurement', 'inconsistent ball drop affects validity', 'specific improvements'],
    keywords: ['ruler', 'angle', 'vertical', 'consistent', 'improvement', 'validity'],
  },
  q5_b: {
    keyConcepts: ['convert 5.5 × 10² cm to 0.55 m', 'mean = 0.51 m'],
    keywords: ['0.51', 'mean', 'average', 'convert', '55 cm', '0.55'],
  },
  q5_c: {
    keyConcepts: ['table headers with units', 'ordered data', 'consistent decimal places'],
    keywords: ['header', 'unit', 'order', 'decimal places', 'table'],
  },
  q5_d: {
    keyConcepts: ['plot (1.8, 0.51)', 'x = drop height, y = bounce height'],
    keywords: ['plot', '1.8', '0.51', 'drop height', 'bounce height', 'axes'],
  },

  // Q6 — Squash Ball
  q6_a: {
    keyConcepts: ['DV = bounce height', 'control variables: drop height, surface, ball size'],
    keywords: ['bounce height', 'dependent', 'control', 'drop height', 'surface'],
  },
  q6_b: {
    keyConcepts: ['testable hypothesis', 'specific equipment', 'systematic method', '5+ temperatures 3 repeats mean', 'safety'],
    keywords: ['hypothesis', 'temperature', 'equipment', 'method', 'trials', 'mean', 'safety'],
  },

  // Q7 — Climate Change
  q7_a: {
    keyConcepts: ['wind is renewable energy', 'coal uranium natural gas are non-renewable'],
    keywords: ['wind', 'renewable', 'energy'],
  },
  q7_b: {
    keyConcepts: ['CO₂ and temperature both increase', 'positive correlation from graph'],
    keywords: ['CO₂', 'temperature', 'both increase', 'correlation'],
  },
  q7_c: {
    keyConcepts: ['industrialization after 1800 increased fossil fuel use', 'burning fossil fuels releases CO₂'],
    keywords: ['industrialization', 'fossil fuels', '1800', 'burning', 'CO₂'],
  },
  q7_d: {
    keyConcepts: ['rising sea levels', 'changing weather patterns', 'linked impacts on environment/humans'],
    keywords: ['sea level', 'flooding', 'weather', 'drought', 'food', 'biodiversity'],
  },
  q7_e: {
    keyConcepts: ['specific technology reduces CO₂', 'mechanism + strength + limitation'],
    keywords: ['technology', 'reduces CO₂', 'strength', 'limitation'],
  },

  // Q8 — Transport Evaluation
  q8_a: {
    keyConcepts: ['health/wellbeing impacts', 'economic/social impacts', 'comparison of methods', 'justified recommendation'],
    keywords: ['health', 'economic', 'social', 'comparison', 'recommend', 'evaluate'],
  },
}
