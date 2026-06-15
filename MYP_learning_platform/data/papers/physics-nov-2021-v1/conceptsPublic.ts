/**
 * CLIENT-SAFE concept data for Physics November 2021 — Variant 1.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_b', 'q4_e'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2021_V1: Record<string, ConceptEntry> = {

  // ── Q1: Kinetic Theory & Brownian Motion (pollen + scuba air cylinder) ──
  q1_a: {
    keyConcepts: ['pollen grains are visible under a microscope', 'water molecules are too small to see but constantly move'],
    keywords: ['pollen grain', 'water molecule', 'visible', 'microscope', 'Brownian motion'],
  },
  q1_b: {
    keyConcepts: ['higher temperature → particles have greater kinetic energy → move faster', 'faster particles collide more forcefully with the container walls'],
    keywords: ['temperature', 'kinetic energy', 'faster', 'collisions', 'particles'],
  },
  q1_c: {
    keyConcepts: ['heating gas → greater kinetic energy → faster particles', 'more frequent and harder wall collisions → greater pressure'],
    keywords: ['kinetic energy', 'faster particles', 'collisions', 'frequency', 'force', 'pressure', '18°C', '78°C'],
  },
  q1_d: {
    keyConcepts: ['water molecules constantly move despite being invisible', 'collisions with larger pollen grains cause random motion'],
    keywords: ['water molecules', 'random motion', 'collide', 'pollen grains', 'invisible', 'kinetic theory'],
  },

  // ── Q2: Energy & E = mc² (skateboarder + proton–antiproton) ──
  q2_a: {
    keyConcepts: ['E = mc²: E in joules, m in kilograms, c in m s⁻¹', 'SI units must be stated correctly'],
    keywords: ['joule', 'kilogram', 'metre per second', 'SI unit', 'E = mc²'],
  },
  q2_b: {
    keyConcepts: ['conservation of energy: total input = sum of all outputs', 'Sankey diagram: arrow width represents energy value', 'remaining energy lost as heat to friction'],
    keywords: ['Sankey diagram', 'heat', 'friction', 'conservation of energy', '78 J', 'energy transformation'],
  },
  q2_c: {
    keyConcepts: ['KE = ½mv²', 'rearrange: v = √(2KE/m)', 'give answer to 2 significant figures'],
    keywords: ['KE = ½mv²', 'velocity', '2 significant figures', '7.3 m/s', '810 J', '30 kg'],
  },
  q2_d: {
    keyConcepts: ['E = mc²: total mass converts to energy', 'annihilation: proton + antiproton → energy only', 'total mass = sum of both particle masses'],
    keywords: ['E = mc²', 'annihilation', 'proton', 'antiproton', 'total mass', 'speed of light', '3.0 × 10⁻¹⁰ J'],
  },

  // ── Q3: Red-Shift & Hubble's Law (distant quasar / galaxies) ──
  q3_a: {
    keyConcepts: ['light is a transverse electromagnetic wave', 'not mechanical — travels through a vacuum'],
    keywords: ['transverse', 'electromagnetic', 'light wave', 'not mechanical'],
  },
  q3_b: {
    keyConcepts: ['Doppler effect: source moving away → wavelength increases', 'longer wavelength = red-shift', 'frequency decreases when wavelength increases'],
    keywords: ['wavelength stretched', 'source moving away', 'Doppler effect', 'longer wavelength', 'red-shift', 'Graph D'],
  },
  q3_c: {
    keyConcepts: ['red-shift = increase in wavelength of light from distant galaxies', 'red light has the longest wavelength in the visible spectrum', 'galaxies moving away appear redder'],
    keywords: ['wavelength increased', 'red end', 'spectrum', 'moving away', 'red-shift', 'redder'],
  },
  q3_d: {
    keyConcepts: ['line of best fit: straight line through origin with equal points above/below', 'Hubble\'s law graph passes through the origin (v ∝ d)'],
    keywords: ['line of best fit', 'origin', 'LOBF', 'scatter graph', 'equal distribution'],
  },
  q3_e: {
    keyConcepts: ['Hubble\'s law: velocity ∝ distance', 'proportional relationship → straight line through the origin'],
    keywords: ['distance increases', 'velocity increases', 'proportional', 'straight line', 'origin'],
  },
  q3_f: {
    keyConcepts: ['origin of Hubble graph → all matter once at the same point (Big Bang)', 'galaxies moving apart → universe is expanding'],
    keywords: ['Big Bang', 'origin', 'expanding universe', 'same point', 'galaxies moving apart'],
  },
  q3_g: {
    keyConcepts: ['more data → more accurate line of best fit → more reliable gradient → better age estimate'],
    keywords: ['more data', 'reliable', 'estimate', 'gradient', 'Hubble constant', 'age of universe'],
  },

  // ── Q4: Ohm's Law & Non-Ohmic Conductors (resistor X vs filament lamp Y) ──
  q4_a: {
    keyConcepts: ['data table: headers with quantity and unit', 'units in headers only', 'ascending order of IV', '402 mA = 0.402 A', 'consistent decimal places'],
    keywords: ['Voltage / V', 'Current / A', 'ascending order', 'mA to A', '0.40 A', 'headers', 'units'],
  },
  q4_b: {
    keyConcepts: ['test hypothesis: doubling V should double I for an ohmic conductor', 'calculate V/I ratios to verify proportionality', 'identify anomalous values'],
    keywords: ['double voltage', 'double current', 'proportional', 'hypothesis', 'calculation', 'anomaly', '5 ohm'],
  },
  q4_c: {
    keyConcepts: ['ohmic conductor: straight I-V graph', 'non-ohmic conductor: curved/non-linear I-V graph', 'non-constant gradient = non-proportional'],
    keywords: ['non-linear', 'curved', 'non-ohmic', 'gradient not constant', 'Ohm\'s law', 'filament lamp'],
  },
  q4_d: {
    keyConcepts: ['graphs show relationships more clearly than tables', 'easier to identify linear vs non-linear patterns visually'],
    keywords: ['visual representation', 'easier', 'graph', 'relationship', 'linear', 'pattern'],
  },
  q4_e: {
    keyConcepts: ['R = V/I', 'read V or I from the graph for the given condition', 'non-ohmic: resistance varies with current'],
    keywords: ['R = V/I', 'resistance', 'ohms', 'graph reading', '4.0 Ω', '5.0 Ω'],
  },
  q4_f: {
    keyConcepts: ['ammeter in series measures current', 'series circuit: one current path through all components', 'circuit diagram symbols'],
    keywords: ['series circuit', 'ammeter', 'circuit diagram', 'bulbs', 'current'],
  },

  // ── Q5: Resistance of a Wire (nichrome 3D-printer hot-end) ──
  q5_a: {
    keyConcepts: ['R = ρl/A → gradient of R vs l graph = ρ/A', 'slope = resistivity ÷ area when area is constant'],
    keywords: ['gradient', 'ρ/A', 'resistivity', 'area', 'R = ρl/A'],
  },
  q5_b: {
    keyConcepts: ['gradient = ΔR/Δl', 'use points on the LOBF, far apart', 'units of ρ/A = Ω m⁻¹'],
    keywords: ['gradient', 'Ω m⁻¹', 'LOBF', 'calculation', 'ΔR/Δl', '0.060'],
  },
  q5_c: {
    keyConcepts: ['systematic error: constant offset added to all readings', 'R = 0 when l = 0 (theoretical)', 'non-zero y-intercept is evidence of a systematic error'],
    keywords: ['systematic error', 'y-intercept', 'zero resistance', 'zero length', 'origin', 'constant offset'],
  },
  q5_d: {
    keyConcepts: ['systematic error cancels in the gradient calculation (constant offset subtracts out)', 'gradient = ΔR/Δl — differences eliminate the constant offset', 'statement is invalid'],
    keywords: ['constant offset', 'cancels', 'gradient', 'differences', 'invalid', 'accurate gradient'],
  },
  q5_e: {
    keyConcepts: ['systematic errors: zero error, calibration error, extra circuit resistance'],
    keywords: ['zero error', 'calibration error', 'connecting lead resistance', 'crocodile clips'],
  },
  q5_f: {
    keyConcepts: ['R ∝ 1/A (inversely proportional from R = ρl/A)', 'larger area → more pathways for electrons → less resistance', 'model of moving charge carriers (electrons)'],
    keywords: ['inversely proportional', 'R ∝ 1/A', 'electrons', 'pathways', 'charge carriers', 'area increases', 'resistance decreases'],
  },

  // ── Q6: Series Circuit Investigation (stage LED fairy lights) ──
  q6_a: {
    keyConcepts: ['series circuit diagram: two bulbs and an ammeter in one loop', 'ammeter in series measures total current', 'no extra series components'],
    keywords: ['series', 'ammeter', 'circuit diagram', 'bulbs', 'correct symbols'],
  },
  q6_b: {
    keyConcepts: ['more bulbs in series → more resistance → less current (I = V/R)', 'IV = number of bulbs, DV = current, CV = supply voltage', 'need 5+ values, repeats, data table'],
    keywords: ['research question', 'hypothesis', 'IV', 'DV', 'control variable', 'voltage', 'current decreases', 'resistance increases', 'method'],
  },

  // ── Q7: Renewable Energy (solar PV / wind / hydroelectric) ──
  q7_a: {
    keyConcepts: ['solar disadvantages: daylight only, weather-dependent', 'wind disadvantages: intermittent, visual impact', 'hydro disadvantages: flooding disrupts ecosystems'],
    keywords: ['solar', 'wind', 'hydroelectric', 'disadvantage', 'daylight', 'intermittent', 'ecosystem'],
  },
  q7_b: {
    keyConcepts: ['hydroelectric energy flow: gravitational potential → kinetic → kinetic (turbine) → electrical', 'falling water drives a turbine; generator produces electricity'],
    keywords: ['gravitational potential', 'kinetic', 'turbine', 'electrical', 'energy chain', 'hydroelectric'],
  },
  q7_c: {
    keyConcepts: ['renewable energy advantages: no CO₂, no fuel cost, sustainable', 'link advantages/disadvantages to a specific country context'],
    keywords: ['advantage', 'disadvantage', 'country-specific', 'renewable', 'CO₂', 'cost', 'justified'],
  },

  // ── Q8: Azores Island Energy Options ──
  q8_a: {
    keyConcepts: ['nuclear fuel (uranium) is non-renewable — finite resource', 'geothermal and wind are renewable — continuously available'],
    keywords: ['nuclear', 'SMR', 'uranium', 'non-renewable', 'finite', 'limited', 'not replenished'],
  },
  q8_b: {
    keyConcepts: ['evaluate using data from the infographic (cost, construction, lifetime)', 'political: energy independence, public opposition, waste', 'economic: compare costs per kWh and construction costs', 'conclude with a justified recommendation'],
    keywords: ['advantages', 'political implications', 'economic implications', 'data', 'recommendation', 'Azores', 'justified conclusion'],
  },

}
