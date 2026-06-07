import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2018: Record<string, ConceptEntry> = {
  // Q1 — Magnetism & Electromagnetic Induction
  q1_a: {
    keyConcepts: ['magnetic field lines curve from N to S outside magnet', 'field lines closer together at poles (stronger field)', 'lines never cross'],
    keywords: ['field lines', 'north', 'south', 'magnet', 'curve', 'poles'],
  },
  q1_b: {
    keyConcepts: ['stronger magnet increases induced current', 'faster magnet movement increases rate of change of flux', 'more turns in coil increases EMF'],
    keywords: ['stronger magnet', 'faster', 'more turns', 'induced current', 'coil'],
  },
  q1_c: {
    keyConcepts: ['reversing pole direction reverses current direction', 'Lenz\'s law: induced current opposes change'],
    keywords: ['opposite direction', 'south pole', 'reverse', 'induced current'],
  },
  q1_d: {
    keyConcepts: ['transformer equation: V_s/V_p = N_s/N_p', '110 × 20/10 = 220 V', 'step-up transformer'],
    keywords: ['transformer', '220', 'turns ratio', 'V_s/V_p = N_s/N_p', 'step-up'],
  },
  q1_e: {
    keyConcepts: ['efficiency = P_output / P_input', 'P = VI', 'P_primary = 60 W, P_secondary = 57 W', 'efficiency = 95%'],
    keywords: ['efficiency', '95%', '60 W', '57 W', 'power', 'P = VI'],
  },
  q1_f: {
    keyConcepts: ['AC creates constantly changing magnetic field', 'changing field continuously induces current', 'DC only induces on switch on/off'],
    keywords: ['alternating current', 'changing magnetic field', 'continuously', 'DC', 'switched'],
  },

  // Q2 — Dry Ski Slope / Energy
  q2_a: {
    keyConcepts: ['velocity = speed in a direction', 'kinetic energy = energy of motion', 'power = energy per unit time'],
    keywords: ['velocity', 'direction', 'kinetic energy', 'motion', 'power', 'per unit time'],
  },
  q2_b: {
    keyConcepts: ['gravitational potential energy stored due to height', 'energy gained when lifted uphill'],
    keywords: ['gravitational potential', 'height', 'energy', 'uphill'],
  },
  q2_c: {
    keyConcepts: ['GPE = mgh', 'mass = 52 kg, g = 10 ms⁻², height = 50 m', 'GPE = 26 000 J = 26 kJ'],
    keywords: ['mgh', '26 kJ', '26000', '52', '50', 'gravitational potential energy'],
  },
  q2_d: {
    keyConcepts: ['friction reduces kinetic energy of skier', 'friction acts between ski and slope surface'],
    keywords: ['friction', 'drag', 'air resistance', 'force'],
  },
  q2_e: {
    keyConcepts: ['40% kinetic energy', '50% thermal/heat energy', '10% sound energy', 'energy dissipation in real systems'],
    keywords: ['kinetic', '40%', 'thermal', '50%', 'sound', '10%', 'efficiency'],
  },

  // Q3 — Heat Transfer
  q3_a: {
    keyConcepts: ['convection = heat transfer through fluid movement due to density differences', 'air cooling units at top use convection currents'],
    keywords: ['convection', 'fluid', 'density', 'cooling', 'top'],
  },
  q3_b: {
    keyConcepts: ['cold air denser → sinks', 'hot air less dense → rises', 'convection currents distribute cold air downward'],
    keywords: ['cold air', 'sinks', 'hot air', 'rises', 'less dense', 'convection'],
  },
  q3_c: {
    keyConcepts: ['high energy particles escape from liquid surface (evaporation)', 'lower energy particles remain', 'average KE decreases → temperature decreases'],
    keywords: ['high energy', 'escape', 'surface', 'lower energy', 'average kinetic energy', 'temperature'],
  },
  q3_d: {
    keyConcepts: ['silver/white/shiny = poor absorber of infrared radiation', 'good reflector reduces energy absorbed'],
    keywords: ['silver', 'white', 'shiny', 'infrared', 'poor absorber', 'reflector'],
  },

  // Q4 — Water Clocks (Inquiry)
  q4_a: {
    keyConcepts: ['research question links IV (area of hole) to DV (time to fill)', 'WTTE format'],
    keywords: ['area', 'hole', 'time', 'fill', 'empty', 'affect'],
  },
  q4_b: {
    keyConcepts: ['larger area → greater flow rate → shorter fill time', 'inverse relationship predicted', 'hypothesis includes direction and reason'],
    keywords: ['larger area', 'decreases', 'flow rate', 'inverse', 'hypothesis'],
  },
  q4_c: {
    keyConcepts: ['IV = area of out-flow tube', 'DV = time to fill second container', 'CV = liquid type AND viscosity'],
    keywords: ['independent', 'dependent', 'control', 'area', 'time', 'viscosity'],
  },
  q4_d: {
    keyConcepts: ['stopwatch measures time', 'calipers/ruler measures hole size/area', 'measuring cylinder for liquid volume'],
    keywords: ['stopwatch', 'calipers', 'ruler', 'measuring cylinder'],
  },
  q4_e: {
    keyConcepts: ['minimum 5 increments of IV', 'minimum 3 trials per value', 'calculate mean for reliability'],
    keywords: ['5 increments', '3 trials', 'mean', 'repeats', 'reliability'],
  },
  q4_f: {
    keyConcepts: ['graph title must name both IV (area) and DV (fill time)'],
    keywords: ['area', 'fill time', 'variation', 'title'],
  },
  q4_g: {
    keyConcepts: ['Graph 2: straight line through origin → directly proportional', 'fill time ∝ 1/area'],
    keywords: ['proportional', 'straight line', 'origin', 'inversely proportional'],
  },
  q4_h: {
    keyConcepts: ['constant k = gradient of Graph 2', 'k ≈ 15 s cm²'],
    keywords: ['gradient', 'k', '15', 's cm²', 'constant of proportionality'],
  },
  q4_i: {
    keyConcepts: ['t = k × (1/a) → a = k/t', 'a = 15/90 ≈ 0.17 cm²'],
    keywords: ['0.17', 'cm²', 'area', 'k/t', 'calculate'],
  },

  // Q5 — Design
  q5_a: {
    keyConcepts: ['IV = volume of water', 'DV = time to empty', 'controlled variables justified', '5 increments, 3 repeats, calculate mean'],
    keywords: ['volume', 'time', 'control variables', 'method', '5 increments', '3 trials'],
  },

  // Q6 — Processing & Evaluating
  q6_a: {
    keyConcepts: ['read stopwatch to 1 d.p.', 'value = 12.8 s', 'state unit separately'],
    keywords: ['12.8', 's', 'seconds', 'stopwatch', 'read'],
  },
  q6_b: {
    keyConcepts: ['table headers include units', 'units in header not next to values', 'data ordered', 'all 5 values correct'],
    keywords: ['header', 'units', 'cm', 's', 'ordered', 'table'],
  },
  q6_c: {
    keyConcepts: ['proportional → straight line through origin', 'graph A = straight line from origin'],
    keywords: ['proportional', 'straight line', 'origin', 'graph A'],
  },
  q6_d: {
    keyConcepts: ['proportional requires y-intercept = 0', 'y-intercept ≈ 5.0 → not proportional', 'or: curve fits better than straight line'],
    keywords: ['y-intercept', '5.0', 'origin', 'not proportional', 'curve'],
  },
  q6_e: {
    keyConcepts: ['student D most valid: widest data range shows true curve', 'narrow range makes curve appear linear'],
    keywords: ['student D', 'widest range', 'most valid', 'curve', 'narrow range'],
  },
  q6_f: {
    keyConcepts: ['alternative IV: viscosity, pressure, type/density of liquid', 'not: hole size, container volume'],
    keywords: ['viscosity', 'pressure', 'liquid type', 'density', 'alternative'],
  },
  q6_g: {
    keyConcepts: ['prediction links new IV to time', 'scientific explanation required', 'direction of change stated'],
    keywords: ['prediction', 'increases', 'decreases', 'viscosity', 'flow', 'molecular'],
  },

  // Q7 — China Electricity / Three Gorges
  q7_a: {
    keyConcepts: ['China consumption increased from ~200 to ~1000 kWh/person (1975–2005)', 'faster increase than world average', 'converging toward world average'],
    keywords: ['increased', 'China', 'world average', '1975', '2005', 'faster'],
  },
  q7_b: {
    keyConcepts: ['industrialisation', 'economic growth', 'urbanisation', 'increased manufacturing'],
    keywords: ['industrialisation', 'economic', 'urbanisation', 'industry'],
  },
  q7_c: {
    keyConcepts: ['read ~3150 kWh/person from energy graph', 'read ~1.25 × 10⁹ from population graph', 'total = 3.94 × 10¹² kWh'],
    keywords: ['3150', '1.25 × 10⁹', '3.94 × 10¹²', 'kWh', 'population'],
  },
  q7_d: {
    keyConcepts: ['CO₂ from fossil fuels → climate change', 'air pollution', 'habitat destruction from mining'],
    keywords: ['CO₂', 'climate change', 'air pollution', 'habitat', 'mining'],
  },
  q7_e: {
    keyConcepts: ['gravitational PE → kinetic energy → electrical energy', 'turbine converts KE to electrical'],
    keywords: ['gravitational potential', 'kinetic', 'electrical', 'turbine', 'energy chain'],
  },

  // Q8 — Three Gorges Evaluation
  q8_a: {
    keyConcepts: ['river impacts: flood control vs biodiversity loss', 'landscape: displacement of 1.2M people', 'global: CO₂ saving vs construction emissions', 'balanced conclusion required'],
    keywords: ['flood', 'biodiversity', 'displaced', 'CO₂', 'Three Gorges', 'evaluate', 'conclusion'],
  },
}
