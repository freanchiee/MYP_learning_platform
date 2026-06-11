import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2024_V2: Record<string, ConceptEntry> = {

  // ── Q1: Pendulum (Australia, L=95.0 cm) & Wrecking Ball (3000 kg, Δh=6.0 m)
  q1_b: {
    keyConcepts: ['KE max at bottom', 'PE max at top', 'speed max at B'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'speed', 'position B', 'bottom', 'energy'],
  },
  q1_c: {
    keyConcepts: ['T = time / 10', 'g = 4π²L / T²', '9.76 m s⁻²', 'three significant figures'],
    keywords: ['1.96', 'period', '4π²', 'rearrange', 'divide', '9.76', 'three', 'g ='],
  },
  q1_d: {
    keyConcepts: ['altitude affects g', 'measurement uncertainty', 'timing error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time'],
  },
  q1_e: {
    keyConcepts: ['Δh = 6.0 m', 'KE = mgh', '180 kJ', 'two significant figures'],
    keywords: ['6.0', '6 m', '3000', '9.81', '177', '180', 'kJ', 'height', 'mgh', 'kinetic'],
  },
  q1_f: {
    keyConcepts: ['friction', 'air resistance', 'energy lost as heat'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost'],
  },

  // ── Q2: Radioactivity (same as source)
  q2_a: {
    keyConcepts: ['smoke rises', 'less dense than air', 'ceiling position'],
    keywords: ['rises', 'dense', 'density', 'hot air', 'ceiling', 'convection', 'upward'],
  },
  q2_b: {
    keyConcepts: ['high ionizing power', 'helium nucleus', 'low penetrating power', 'positively charged'],
    keywords: ['ionize', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range'],
  },
  q2_d: {
    keyConcepts: ['isotopes same proton number', 'proton number 95', 'B has wrong proton number'],
    keywords: ['proton', 'atomic number', '95', '93', 'same', 'different element', 'isotope'],
  },
  q2_g: {
    keyConcepts: ['alpha ionizes air to create current', 'smoke reduces current', 'beta/gamma lower ionizing power'],
    keywords: ['ionize', 'current', 'plates', 'smoke', 'absorbs', 'beta', 'gamma', 'ionizing power', 'alarm'],
  },

  // ── Q3: Resistance Investigation (graphite rods d=8/12/16/20/24 mm)
  q3_a: {
    keyConcepts: ['diameter increases → resistance decreases', 'more cross-sectional area', 'more paths for electrons'],
    keywords: ['diameter', 'resistance', 'decrease', 'cross-section', 'area', 'electrons', 'paths', 'because'],
  },
  q3_b: {
    keyConcepts: ['one material only', 'five different diameters', 'material and length controlled'],
    keywords: ['one material', '5 diameters', 'controlled', 'length', 'constant', 'only diameter'],
  },
  q3_c: {
    keyConcepts: ['one material controls resistivity', 'different diameters to test RQ', 'length controlled'],
    keywords: ['resistivity', 'material', 'confound', 'fair test', 'diameter varies', 'length constant'],
  },
  q3_d: {
    keyConcepts: ['headings with units', 'Diameter / mm and Resistance / Ω', 'data ordered ascending'],
    keywords: ['diameter', 'resistance', 'mm', 'Ω', 'heading', 'unit', 'table', 'order', '8', '128', '24', '14'],
  },
  q3_e: {
    keyConcepts: ['calculate mean/average', 'reduce random errors', 'increase reliability'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable'],
  },
  q3_g: {
    keyConcepts: ['new research question', 'IV consistent with RQ', 'CV consistent with RQ'],
    keywords: ['length', 'material', 'research question', 'how does', 'affect', 'independent', 'control'],
  },

  // ── Q4: LDR with filter layers as IV
  q4_a: {
    keyConcepts: ['number of filter layers as IV', 'resistance as DV', 'research question format'],
    keywords: ['layers', 'filter paper', 'resistance', 'LDR', 'how does', 'affect', 'light source'],
  },
  q4_b: {
    keyConcepts: ['IV = filter layers DV = resistance', 'two CVs with justification', 'equipment list', 'detailed method', 'range and repeats'],
    keywords: ['layers', 'resistance', 'control', 'lamp', 'LDR', 'ohmmeter', 'method', 'range', 'repeat', 'mean', 'justify', 'distance', 'filter'],
  },

  // ── Q5: Resistance vs Temperature (same data/graphs as source)
  q5_b: {
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'battery', 'power supply', 'resistor'],
  },
  q5_c: {
    keyConcepts: ['IV = temperature', 'DV = current', 'CV = length diameter voltage'],
    keywords: ['independent', 'temperature', 'dependent', 'current', 'control', 'length', 'diameter', 'voltage'],
  },
  q5_e: {
    keyConcepts: ['test inverse proportion: I × T = constant?', 'products not equal', 'not inversely proportional'],
    keywords: ['product', 'constant', 'inversely proportional', 'not', 'equal', 'calculate', 'two points'],
  },
  q5_f: {
    keyConcepts: ['R = V / I', '30 V', '88 Ω at 50 °C'],
    keywords: ['R = V/I', '30', '88', 'Ω', '0.341'],
  },
  q5_i: {
    keyConcepts: ['gradient = ΔR / ΔT', 'two points on LOBF', 'unit Ω °C⁻¹'],
    keywords: ['gradient', 'ΔR', 'ΔT', 'slope', 'Ω/°C', 'line of best fit'],
  },
  q5_j: {
    keyConcepts: ['extrapolation beyond data range', 'linear may not continue', 'resistor destroyed at 1000 °C'],
    keywords: ['extrapolate', 'beyond', 'range', 'not valid', '1000', 'melted', 'destroyed'],
  },

  // ── Q6: Water Tower (Brazil, 6300 m³, 45 m → 2.8 × 10⁹ J)
  q6_a: {
    keyConcepts: ['mass = density × volume', 'W = mgh', '2.8 × 10⁹ J', 'standard form 2 s.f.'],
    keywords: ['1000', '6300', 'density', 'volume', 'W = mgh', '9.81', '45', '2.8', '10⁹', 'joule'],
  },
  q6_b: {
    keyConcepts: ['time lost from education', 'physical burden', 'economic productivity lost'],
    keywords: ['time', 'education', 'work', 'economic', 'burden', 'health', 'productivity'],
  },
  q6_c: {
    keyConcepts: ['health benefit of clean water', 'ethical advantage of fee', 'ethical disadvantage of fee', 'concluding appraisal'],
    keywords: ['disease', 'health', 'death', 'fee', 'maintain', 'ethical', 'poor', 'access', 'conclude', 'long-term'],
  },

  // ── Q7: SODIS (same as source)
  q7_b: {
    keyConcepts: ['UV high energy', 'damages DNA of microbes', 'kills microorganisms'],
    keywords: ['energy', 'high energy', 'frequency', 'DNA', 'kill', 'microbe', 'damage'],
  },
  q7_c: {
    keyConcepts: ['equatorial climate suitable', 'cloudy regions less suitable', 'reduces waterborne disease', 'implementation challenges', 'concluding appraisal'],
    keywords: ['equator', 'climate', 'sunny', 'cloud', 'health', 'disease', 'bottle', 'challenge', 'implement', 'conclude', 'suitable'],
  },
}
