import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2018_V1: Record<string, ConceptEntry> = {
  // Q1 — Wind Turbine Generator & Transformer
  q1_a: { keyConcepts: ['magnetic field lines curve from N to S outside magnet', 'closer at poles = stronger field', 'lines never cross'], keywords: ['field lines', 'north', 'south', 'magnet', 'poles', 'curve'] },
  q1_b: { keyConcepts: ['stronger magnet → more flux', 'faster movement → greater rate of flux change', 'more turns → greater EMF'], keywords: ['stronger magnet', 'faster', 'more turns', 'induced current'] },
  q1_c: { keyConcepts: ['reversing pole reverses current direction', 'Lenz\'s law'], keywords: ['opposite direction', 'south pole', 'reverse'] },
  q1_d: { keyConcepts: ['transformer equation V_s/V_p = N_s/N_p', '220 × 10/5 = 440 V', 'step-up'], keywords: ['transformer', '440 V', 'turns ratio', 'step-up'] },
  q1_e: { keyConcepts: ['P = VI', 'efficiency = P_out / P_in', '253/276 = 91.7%'], keywords: ['276 W', '253 W', '91.7%', 'efficiency'] },
  q1_f: { keyConcepts: ['AC creates constantly changing magnetic field', 'changing field → continuous induction', 'DC: only at on/off'], keywords: ['AC', 'alternating', 'changing field', 'continuously', 'DC'] },

  // Q2 — Water Slide Energy
  q2_a: { keyConcepts: ['velocity = speed + direction', 'KE = energy of motion', 'power = energy/time'], keywords: ['velocity', 'direction', 'kinetic energy', 'power', 'per unit time'] },
  q2_b: { keyConcepts: ['lift → gravitational potential energy gained'], keywords: ['gravitational potential', 'GPE', 'lifted', 'energy'] },
  q2_c: { keyConcepts: ['GPE = mgh', 'm=65 kg, h=30 m → 19 500 J = 19.5 kJ'], keywords: ['19500', '19.5', 'kJ', 'mgh', '65', '30'] },
  q2_d: { keyConcepts: ['friction/drag reduces speed'], keywords: ['friction', 'drag', 'water resistance'] },
  q2_e: { keyConcepts: ['40% KE, ~50% thermal, ~10% sound'], keywords: ['kinetic', 'thermal', 'heat', 'sound', '40%'] },

  // Q3 — Refrigerated Warehouse Heat Transfer
  q3_a: { keyConcepts: ['convection: movement of fluid due to density differences'], keywords: ['convection', 'air movement', 'density', 'heat transfer'] },
  q3_b: { keyConcepts: ['cold air denser → sinks', 'warm air rises', 'convection currents cool whole space'], keywords: ['denser', 'sinks', 'rises', 'convection', 'currents'] },
  q3_c: { keyConcepts: ['high KE molecules escape surface (evaporate)', 'average KE of remaining molecules decreases', 'lower average KE → lower temperature'], keywords: ['kinetic energy', 'escape', 'evaporate', 'average', 'temperature falls'] },
  q3_d: { keyConcepts: ['white/silver = good reflector of IR', 'poor absorber → less thermal energy absorbed'], keywords: ['white', 'silver', 'infrared', 'reflector', 'poor absorber'] },

  // Q4 — Sand Timer Inquiry
  q4_a: { keyConcepts: ['question links IV (aperture diameter) to DV (empty time)'], keywords: ['diameter', 'aperture', 'time', 'empty'] },
  q4_b: { keyConcepts: ['larger diameter → greater area → more sand per unit time → shorter time', 'quantitative prediction'], keywords: ['diameter', 'larger', 'time decreases', 'flow rate', 'quantitative'] },
  q4_c: { keyConcepts: ['IV = aperture diameter', 'DV = time to empty', 'CV = sand type, volume, density'], keywords: ['independent', 'dependent', 'controlled', 'diameter', 'time'] },
  q4_d: { keyConcepts: ['stopwatch for time', 'calipers for diameter'], keywords: ['stopwatch', 'calipers', 'diameter', 'measure'] },
  q4_e: { keyConcepts: ['5+ values', '3+ repeats', 'mean'], keywords: ['5 diameters', '3 repeats', 'mean', 'time'] },
  q4_f: { keyConcepts: ['title links IV and DV'], keywords: ['diameter', 'time', 'empty', 'aperture'] },
  q4_g: { keyConcepts: ['t ∝ 1/d', 'straight line through origin → direct proportionality'], keywords: ['proportional', 'straight line', 'origin', 'inverse'] },
  q4_h: { keyConcepts: ['gradient of Graph 2 = k ≈ 12 s·cm'], keywords: ['gradient', '12', 'constant', 's cm'] },
  q4_i: { keyConcepts: ['d = k/t = 12/60 = 0.20 cm'], keywords: ['0.20', 'cm', 'd = k/t'] },

  // Q5 — Sand Timer Full Design (banded)
  q5_a: { keyConcepts: ['full experimental design: IV/DV/CVs, equipment, method, data plan'], keywords: ['IV', 'DV', 'CV', 'method', 'equipment', '5 volumes', '3 repeats'] },

  // Q6 — Sand Timer Height Investigation
  q6_a: { keyConcepts: ['read stopwatch to 0.1 s with unit'], keywords: ['11.5', 's', 'stopwatch'] },
  q6_b: { keyConcepts: ['table: correct headers with units, ascending order, all 5 rows'], keywords: ['table', 'headers', 'depth / cm', 'time / s', 'ordered'] },
  q6_c: { keyConcepts: ['proportional relationship → straight line through origin'], keywords: ['proportional', 'origin', 'straight line', 'graph'] },
  q6_d: { keyConcepts: ['not proportional: y-intercept ≠ 0'], keywords: ['y-intercept', 'not zero', 'not proportional'] },
  q6_e: { keyConcepts: ['Student D: widest range reveals true curve', 'narrow range masks curvature'], keywords: ['Student D', 'widest range', 'curved', 'narrow'] },
  q6_f: { keyConcepts: ['valid alternative IV: grain size, temperature, tilt angle'], keywords: ['grain size', 'temperature', 'angle'] },
  q6_g: { keyConcepts: ['hypothesis: direction + mechanism + scientific reasoning'], keywords: ['grain size', 'time decreases', 'friction', 'interlocking'] },

  // Q7 — India Electricity & Tidal Energy
  q7_a: { keyConcepts: ['India consumption increased', 'remained below world average'], keywords: ['increased', 'India', 'world average', 'below'] },
  q7_b: { keyConcepts: ['industrialisation/urbanisation → increased demand'], keywords: ['industrialisation', 'economic growth', 'urbanisation'] },
  q7_c: { keyConcepts: ['total = kWh/person × population', '600 × 1.10×10⁹ = 6.60×10¹¹ kWh'], keywords: ['600', '1.10 × 10⁹', '6.60 × 10¹¹', 'kWh'] },
  q7_d: { keyConcepts: ['CO₂/climate change', 'air pollution', 'habitat destruction'], keywords: ['CO₂', 'climate change', 'air pollution', 'habitat'] },
  q7_e: { keyConcepts: ['GPE → KE → electrical (tidal barrage)'], keywords: ['gravitational potential', 'kinetic', 'electrical', 'turbine'] },

  // Q8 — Tidal Barrage Evaluation (banded)
  q8_a: { keyConcepts: ['marine ecosystem impacts', 'coastal landscape', 'global CO₂', 'concluding appraisal'], keywords: ['renewable', 'fish', 'sediment', 'CO₂', 'seawall', 'conclusion'] },
}
