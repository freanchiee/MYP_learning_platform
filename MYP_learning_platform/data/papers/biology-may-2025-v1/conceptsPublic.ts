/**
 * CLIENT-SAFE concept data for Biology May 2025 — VARIANT v1.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedback.
 * Key format: `q{id}_{label}`.
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_BIOLOGY_MAY2025_V1: Record<string, ConceptEntry> = {
  // Q1
  'q1_a': { keyConcepts: ['mineral', 'mineral is not a kingdom', 'non-living'], keywords: ['mineral', 'kingdom', 'five kingdoms'] },
  'q1_b': { keyConcepts: ['vertebral column', 'backbone', 'spinal cord', 'birds', 'reptiles', 'amphibians', 'fish'], keywords: ['vertebral', 'backbone', 'spine', 'birds', 'reptiles', 'amphibians', 'fish', 'chordate'] },
  'q1_c': { keyConcepts: ['brown bear', 'polar bear', 'black bear', 'ursus', 'same genus', 'most closely related'], keywords: ['ursus', 'genus', 'brown bear', 'polar bear', 'black bear', 'closely related'] },
  'q1_d': { keyConcepts: ['brown bear', 'polar bear', '8 out of 10', 'most bases in common', 'most similar DNA'], keywords: ['brown bear', 'polar bear', '8', 'similar', 'DNA', 'bases'] },
  'q1_e': { keyConcepts: ['mutation', 'natural selection', 'speciation', 'random mutations', 'sexual reproduction', 'meiosis'], keywords: ['mutation', 'natural selection', 'speciation', 'evolution', 'random', 'meiosis'] },
  'q1_f': { keyConcepts: ['amino acids', 'amino acid', 'monomer', 'polymer'], keywords: ['amino acid', 'amino', 'monomer', 'protein'] },
  'q1_g': { keyConcepts: ['thyroxine', 'adrenaline', 'increases metabolic rate', 'raises metabolism'], keywords: ['thyroxine', 'adrenaline', 'metabolic rate', 'metabolism', 'increases', 'raises'] },
  'q1_h': { keyConcepts: ['homeostasis'], keywords: ['homeostasis'] },
  // Q2
  'q2_a': { keyConcepts: ['high concentration in alveoli', 'low concentration in blood', 'concentration gradient', 'alveolar membrane', 'diffusion'], keywords: ['concentration gradient', 'high concentration', 'low concentration', 'alveolar', 'membrane', 'diffusion', 'thin wall'] },
  'q2_b': { keyConcepts: ['red blood cells', 'haemoglobin', 'oxyhaemoglobin', 'circulatory system', 'blood vessels', 'arteries', 'capillaries'], keywords: ['red blood cell', 'haemoglobin', 'oxyhaemoglobin', 'blood vessel', 'artery', 'capillary', 'circulatory'] },
  'q2_c': { keyConcepts: ['pulse rate increased', 'breathing rate increased', 'exercise', 'more energy', 'cellular respiration', 'more oxygen needed', 'more CO2 produced', 'heart rate', 'remove CO2'], keywords: ['pulse', 'breathing', 'respiration', 'oxygen', 'carbon dioxide', 'CO2', 'energy', 'muscles', 'exercise', 'increase', 'faster'] },
  'q2_d': { keyConcepts: ['priya', 'highest white blood cells', 'white blood cells fight infection', '10100'], keywords: ['priya', 'white blood cell', 'highest', '10100', 'infection', 'immune'] },
  'q2_e': { keyConcepts: ['age', 'fitness', 'stress', 'medical history', 'medication', 'ethnicity', 'diet'], keywords: ['age', 'fitness', 'stress', 'medication', 'medical history', 'ethnicity', 'diet'] },
  // Q3
  'q3_a': { keyConcepts: ['seed type P', 'P'], keywords: ['seed type P', 'P'] },
  'q3_b': { keyConcepts: ['control experiment', 'control', 'no light present', 'baseline'], keywords: ['control', 'baseline', 'no light', 'compare', 'zero'] },
  'q3_c': { keyConcepts: ['both germinated', 'increasing light increases germination', 'maximum at 100%', 'P more than Q', 'Q cannot germinate without light'], keywords: ['both', 'similar', 'increase', 'difference', 'seed type P', 'seed type Q', '0%', 'more', 'germinate'] },
  'q3_d': { keyConcepts: ['does not require light', 'light does not affect', 'no light needed', 'light independent'], keywords: ['does not need light', 'light independent', 'no light required', 'independent of light'] },
  'q3_e': { keyConcepts: ['control other variables', 'control variables', 'fair test'], keywords: ['control', 'variable', 'fair test', 'other factors', 'standardise'] },
  'q3_f': { keyConcepts: ['seed type Y 85%', 'seed type Z 70%', '85 percent', '70 percent'], keywords: ['85', '70', 'seed type Y', 'seed type Z'] },
  'q3_g': { keyConcepts: ['80% maxes Z', 'Z optimum 70', 'Y optimum 85', 'partially supported'], keywords: ['80', 'seed type Y', 'seed type Z', 'optimum', 'maximum', 'supported', 'not supported', '70', '85'] },
  // Q4
  'q4_a': { keyConcepts: ['carbon dioxide', 'water', 'oxygen', 'glucose', 'reactants', 'products'], keywords: ['carbon dioxide', 'water', 'oxygen', 'glucose'] },
  'q4_b': { keyConcepts: ['independent variable CO2 concentration', 'dependent variable stem length', 'control temperature', 'control same plant type', 'control light', 'control water volume'], keywords: ['independent', 'carbon dioxide', 'CO2', 'dependent', 'stem length', 'control', 'temperature', 'same plant', 'light', 'water'] },
  'q4_c': { keyConcepts: ['increases rate of photosynthesis', 'more glucose', 'glucose used for growth', 'cell division'], keywords: ['photosynthesis', 'glucose', 'sugar', 'food', 'growth', 'rate', 'carbon dioxide', 'cell division'] },
  'q4_d': { keyConcepts: ['44mm at 0.12%', '38mm average', 'average'], keywords: ['44', '38', 'average', 'measurement', 'mm'] },
  'q4_e': { keyConcepts: ['mm', 'millimetres', 'cm', 'centimetres'], keywords: ['mm', 'cm', 'millimetre', 'centimetre', 'length', 'units'] },
  'q4_f': { keyConcepts: ['0.12 percent', 'no longer a limiting factor', 'another limiting factor', 'CO2 not limiting'], keywords: ['0.12', 'limiting factor', 'plateau', 'maximum', 'stopped', 'another factor'] },
  'q4_g': { keyConcepts: ['increase light', 'increase temperature', 'add fertiliser', 'longer time'], keywords: ['light', 'temperature', 'fertiliser', 'minerals', 'longer', 'time'] },
  'q4_h': { keyConcepts: ['data from 0.04 to 0.12 supports', 'stem length increases', 'beyond 0.12 does not support', 'growth constant'], keywords: ['support', 'does not support', '0.04', '0.12', '0.16', 'increase', 'constant', 'plateau', 'data'] },
  // Q5
  'q5_a': { keyConcepts: ['temperature'], keywords: ['temperature'] },
  'q5_b': { keyConcepts: ['x-axis temperature', 'y-axis stem length', 'units on axes', 'even scale', 'points plotted correctly'], keywords: ['temperature', 'stem length', 'increase', 'mm', 'axis', 'scale', 'plot', 'points'] },
  'q5_c': { keyConcepts: ['growth increases up to 35-40 degrees', 'photosynthesis increases', 'more glucose', 'growth stops beyond 40 degrees', 'enzymes denature', 'stomata close', 'optimum temperature'], keywords: ['temperature', 'increase', 'decrease', 'photosynthesis', 'enzyme', 'denature', 'optimum', 'stomata', 'glucose', '35', '40', '45'] },
  // Q6
  'q6_a': { keyConcepts: ['independent variable salinity', 'dependent variable stem length', 'controlled temperature', 'controlled water volume', 'controlled plant type', 'equipment pots ruler solutions', 'method water plants', 'measure stem length', 'repeat each condition', 'safety gloves'], keywords: ['salinity', 'salt', 'concentration', 'independent', 'dependent', 'controlled', 'stem length', 'growth', 'temperature', 'ruler', 'pots', 'measure', 'repeat', 'safety', 'gloves'] },
  // Q7
  'q7_a': { keyConcepts: ['river fish', 'river'], keywords: ['river'] },
  'q7_b': { keyConcepts: ['identify critical habitats', 'protect habitats', 'migration routes', 'protected areas', 'fishing restrictions'], keywords: ['habitat', 'protect', 'migration', 'route', 'spawning', 'conservation', 'restriction', 'breeding'] },
  'q7_c': { keyConcepts: ['fish died', 'not recaptured', 'tag not returned', 'no return mechanism', 'tag lost'], keywords: ['died', 'not caught', 'not returned', 'lost', 'fell off', 'awareness', 'communication'] },
  'q7_d': { keyConcepts: ['repeat at different times', 'multiple locations', 'larger sample', 'different species', 'reliable', 'representative'], keywords: ['repeat', 'sample size', 'location', 'time', 'species', 'reliable', 'representative', 'replicate'] },
  'q7_e': { keyConcepts: ['dam building', 'pollution', 'overfishing', 'blocks migration', 'fish ladders', 'reduce pollution', 'fishing quotas'], keywords: ['dam', 'pollution', 'overfishing', 'migration', 'spawning', 'fish ladder', 'quota', 'reduce', 'protect', 'restore'] },
  // Q8
  'q8_a': { keyConcepts: ['acoustic limited range', 'satellite global range', 'acoustic needs receivers nearby', 'satellite anywhere'], keywords: ['range', 'global', 'local', 'distance', 'satellite', 'acoustic', 'receiver', 'sound', 'ocean'] },
  'q8_b': { keyConcepts: ['advantage non-disturbing', 'continuous data', 'inaccessible habitat', 'disadvantage affects behaviour', 'injury', 'expensive', 'battery'], keywords: ['advantage', 'disadvantage', 'disturb', 'behaviour', 'injury', 'drag', 'expensive', 'battery', 'continuous'] },
  'q8_c': { keyConcepts: ['identify overlap zones', 'beach warnings closures', 'reduce culling', 'educate public', 'protected area management'], keywords: ['overlap', 'beach', 'warning', 'closure', 'cull', 'educate', 'public', 'protected', 'conflict', 'manage'] },
  'q8_d': { keyConcepts: ['non-invasive monitoring', 'continuous data', 'ocean coverage', 'long-term trends', 'identifies threats', 'alters behaviour', 'expensive', 'data gaps', 'expert interpretation', 'benefits outweigh limitations'], keywords: ['benefit', 'limitation', 'behaviour', 'expensive', 'cost', 'injury', 'monitor', 'continuous', 'ocean', 'trend', 'population', 'migration', 'welfare', 'invasive'] },
  'q8_e': { keyConcepts: ['public awareness', 'community support', 'secure funding', 'government policy', 'citizen science', 'conservation action'], keywords: ['awareness', 'public', 'community', 'support', 'funding', 'policy', 'government', 'citizen science', 'action', 'conservation'] },
}
