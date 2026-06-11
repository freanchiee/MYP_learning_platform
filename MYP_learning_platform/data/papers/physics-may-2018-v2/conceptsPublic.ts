import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2018_V2: Record<string, ConceptEntry> = {
  // Q1 — Electric Bicycle Transformer
  q1_a: { keyConcepts: ['magnetic field lines curve from N to S', 'closer at poles = stronger', 'lines never cross'], keywords: ['field lines', 'north', 'south', 'magnet', 'poles'] },
  q1_b: { keyConcepts: ['stronger magnet → more flux', 'faster movement → greater rate of change', 'more turns → greater EMF'], keywords: ['stronger magnet', 'faster', 'more turns', 'induced current'] },
  q1_c: { keyConcepts: ['reversing pole → reverse current direction', 'Lenz\'s law'], keywords: ['opposite direction', 'south pole', 'reverse'] },
  q1_d: { keyConcepts: ['transformer equation V_s/V_p = N_s/N_p', '240 × 4/8 = 120 V', 'step-down'], keywords: ['transformer', '120 V', 'turns ratio', 'step-down'] },
  q1_e: { keyConcepts: ['P = VI', 'efficiency = P_out/P_in', '54/60 = 90%'], keywords: ['60 W', '54 W', '90%', 'efficiency'] },
  q1_f: { keyConcepts: ['AC creates constantly changing magnetic field', 'changing field → continuous induction', 'DC: on/off only'], keywords: ['AC', 'alternating', 'changing field', 'continuously', 'DC'] },

  // Q2 — Roller Coaster Energy
  q2_a: { keyConcepts: ['velocity = speed + direction', 'KE = energy of motion', 'power = energy/time'], keywords: ['velocity', 'direction', 'kinetic energy', 'power', 'per unit time'] },
  q2_b: { keyConcepts: ['chain lift → GPE gained'], keywords: ['gravitational potential', 'GPE', 'lifted'] },
  q2_c: { keyConcepts: ['GPE = mgh', 'm=75 kg, h=40 m → 30 000 J = 30 kJ'], keywords: ['30000', '30', 'kJ', 'mgh', '75', '40'] },
  q2_d: { keyConcepts: ['friction/drag opposes motion → reduces speed'], keywords: ['friction', 'drag', 'air resistance'] },
  q2_e: { keyConcepts: ['40% KE, ~50% thermal, ~10% sound'], keywords: ['kinetic', 'thermal', 'sound', '40%'] },

  // Q3 — Refrigerated Cargo Ship Heat Transfer
  q3_a: { keyConcepts: ['convection: density-driven fluid movement'], keywords: ['convection', 'air', 'density'] },
  q3_b: { keyConcepts: ['cold air denser → sinks', 'warm air less dense → rises', 'convection circulates cool air'], keywords: ['denser', 'sinks', 'rises', 'convection', 'currents'] },
  q3_c: { keyConcepts: ['highest KE molecules escape surface', 'lower average KE → lower temperature'], keywords: ['kinetic energy', 'escape', 'evaporate', 'average', 'temperature falls'] },
  q3_d: { keyConcepts: ['white/silver = good reflector of IR', 'poor absorber → less solar energy'], keywords: ['white', 'silver', 'infrared', 'solar', 'reflector'] },

  // Q4 — Drip Irrigation Inquiry
  q4_a: { keyConcepts: ['question links IV (nozzle area) to DV (fill time)'], keywords: ['area', 'nozzle', 'time', 'fill'] },
  q4_b: { keyConcepts: ['larger area → more flow per unit time → shorter fill time', 'quantitative: double area → half time'], keywords: ['area', 'larger', 'time decreases', 'flow rate', 'quantitative'] },
  q4_c: { keyConcepts: ['IV = nozzle area', 'DV = fill time', 'CV = liquid type, volume, viscosity'], keywords: ['independent', 'dependent', 'controlled', 'nozzle area', 'fill time'] },
  q4_d: { keyConcepts: ['stopwatch for time', 'calipers for nozzle'], keywords: ['stopwatch', 'calipers', 'nozzle', 'measure'] },
  q4_e: { keyConcepts: ['5+ nozzle areas', '3+ repeats', 'mean'], keywords: ['5 nozzle areas', '3 repeats', 'mean', 'fill time'] },
  q4_f: { keyConcepts: ['title links IV and DV'], keywords: ['nozzle area', 'fill time', 'variation'] },
  q4_g: { keyConcepts: ['t ∝ 1/A', 'straight line through origin → proportionality'], keywords: ['proportional', 'straight line', 'origin', 'inverse'] },
  q4_h: { keyConcepts: ['gradient of Graph 2 = k ≈ 18 s·cm²'], keywords: ['gradient', '18', 'constant', 's cm²'] },
  q4_i: { keyConcepts: ['a = k/t = 18/120 = 0.15 cm²'], keywords: ['0.15', 'cm²', 'a = k/t'] },

  // Q5 — Drip Irrigation Full Design (banded)
  q5_a: { keyConcepts: ['full experimental design: IV/DV/CVs, equipment, method, data plan'], keywords: ['IV', 'DV', 'CV', 'method', 'equipment', '5 volumes', '3 repeats'] },

  // Q6 — Drip Container Height Investigation
  q6_a: { keyConcepts: ['read stopwatch to 0.1 s with unit'], keywords: ['13.2', 's', 'stopwatch'] },
  q6_b: { keyConcepts: ['table: headers with units, ascending order, all 5 rows'], keywords: ['table', 'headers', 'height / cm', 'time / s', 'ordered', '13.2'] },
  q6_c: { keyConcepts: ['proportional → straight line through origin'], keywords: ['proportional', 'origin', 'straight line'] },
  q6_d: { keyConcepts: ['not proportional: y-intercept ≠ 0'], keywords: ['y-intercept', 'not zero', 'not proportional'] },
  q6_e: { keyConcepts: ['Student D: widest range reveals curve', 'narrow range masks curvature'], keywords: ['Student D', 'widest range', 'curved', 'narrow'] },
  q6_f: { keyConcepts: ['valid alternative IV: viscosity, temperature, liquid type'], keywords: ['viscosity', 'temperature', 'liquid type', 'density'] },
  q6_g: { keyConcepts: ['hypothesis: viscosity↑ → time↑ via intermolecular forces'], keywords: ['viscosity', 'time increases', 'intermolecular forces', 'flow rate'] },

  // Q7 — Brazil Electricity & Wind Power
  q7_a: { keyConcepts: ['Brazil consumption increased', 'close to world average'], keywords: ['increased', 'Brazil', 'world average', '600', '2350'] },
  q7_b: { keyConcepts: ['economic growth → increased demand'], keywords: ['economic', 'urbanisation', 'manufacturing'] },
  q7_c: { keyConcepts: ['total = kWh/person × population', '2350 × 1.9×10⁸ = 4.5×10¹¹ kWh'], keywords: ['2350', '1.9 × 10⁸', '4.5 × 10¹¹', 'kWh'] },
  q7_d: { keyConcepts: ['CO₂/climate change', 'air pollution', 'habitat destruction'], keywords: ['CO₂', 'climate change', 'air pollution', 'habitat'] },
  q7_e: { keyConcepts: ['KE (wind) → KE (rotor) → electrical'], keywords: ['kinetic energy', 'wind', 'rotor', 'electrical'] },

  // Q8 — Offshore Wind Farm Evaluation (banded)
  q8_a: { keyConcepts: ['marine ecosystem (positive: reef effect; negative: noise, seabed)', 'coastal/community', 'global CO₂ and rare earth', 'concluding appraisal'], keywords: ['marine', 'CO₂', 'whale', 'seabed', 'rare earth', 'decarbonisation', 'conclusion'] },
}
