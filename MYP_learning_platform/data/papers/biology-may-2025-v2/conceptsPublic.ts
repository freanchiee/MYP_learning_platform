/**
 * CLIENT-SAFE concept data for Biology May 2025 — VARIANT v2.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedback.
 * Key format: `q{id}_{label}`.
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_BIOLOGY_MAY2025_V2: Record<string, ConceptEntry> = {
  // Q1
  'q1_a': { keyConcepts: ['virus', 'virus is not a kingdom', 'non-cellular'], keywords: ['virus', 'kingdom', 'five kingdoms'] },
  'q1_b': { keyConcepts: ['vertebral column', 'backbone', 'spinal cord', 'birds', 'reptiles', 'amphibians', 'fish'], keywords: ['vertebral', 'backbone', 'spine', 'birds', 'reptiles', 'amphibians', 'fish', 'chordate'] },
  'q1_c': { keyConcepts: ['gray wolf', 'coyote', 'golden jackal', 'canis', 'same genus', 'most closely related'], keywords: ['canis', 'genus', 'gray wolf', 'coyote', 'jackal', 'closely related'] },
  'q1_d': { keyConcepts: ['gray wolf', 'coyote', '8 out of 10', 'most bases in common', 'most similar DNA'], keywords: ['gray wolf', 'coyote', '8', 'similar', 'DNA', 'bases'] },
  'q1_e': { keyConcepts: ['mutation', 'natural selection', 'speciation', 'random mutations', 'sexual reproduction', 'meiosis'], keywords: ['mutation', 'natural selection', 'speciation', 'evolution', 'random', 'meiosis'] },
  'q1_f': { keyConcepts: ['amino acids', 'amino acid', 'monomer', 'polymer'], keywords: ['amino acid', 'amino', 'monomer', 'protein'] },
  'q1_g': { keyConcepts: ['adrenaline', 'fight or flight', 'increases heart rate', 'increases breathing', 'releases glucose'], keywords: ['adrenaline', 'fight or flight', 'heart rate', 'breathing', 'glucose', 'increases'] },
  'q1_h': { keyConcepts: ['homeostasis'], keywords: ['homeostasis'] },
  // Q2
  'q2_a': { keyConcepts: ['high concentration in alveoli', 'low concentration in blood', 'concentration gradient', 'alveolar membrane', 'diffusion'], keywords: ['concentration gradient', 'high concentration', 'low concentration', 'alveolar', 'membrane', 'diffusion', 'thin wall'] },
  'q2_b': { keyConcepts: ['red blood cells', 'haemoglobin', 'oxyhaemoglobin', 'circulatory system', 'blood vessels', 'arteries', 'capillaries'], keywords: ['red blood cell', 'haemoglobin', 'oxyhaemoglobin', 'blood vessel', 'artery', 'capillary', 'circulatory'] },
  'q2_c': { keyConcepts: ['pulse rate increased', 'breathing rate increased', 'exercise', 'more energy', 'cellular respiration', 'more oxygen needed', 'more CO2 produced', 'heart rate', 'remove CO2'], keywords: ['pulse', 'breathing', 'respiration', 'oxygen', 'carbon dioxide', 'CO2', 'energy', 'muscles', 'exercise', 'increase', 'faster'] },
  'q2_d': { keyConcepts: ['omar', 'highest white blood cells', 'white blood cells fight infection', '9800'], keywords: ['omar', 'white blood cell', 'highest', '9800', 'infection', 'immune'] },
  'q2_e': { keyConcepts: ['age', 'fitness', 'stress', 'medical history', 'medication', 'ethnicity', 'diet'], keywords: ['age', 'fitness', 'stress', 'medication', 'medical history', 'ethnicity', 'diet'] },
  // Q3
  'q3_a': { keyConcepts: ['seed type L', 'L'], keywords: ['seed type L', 'L'] },
  'q3_b': { keyConcepts: ['control experiment', 'control', 'no light present', 'baseline'], keywords: ['control', 'baseline', 'no light', 'compare', 'zero'] },
  'q3_c': { keyConcepts: ['both germinated', 'increasing light increases germination', 'maximum at 100%', 'L more than M', 'M cannot germinate without light'], keywords: ['both', 'similar', 'increase', 'difference', 'seed type L', 'seed type M', '0%', 'more', 'germinate'] },
  'q3_d': { keyConcepts: ['does not require light', 'light does not affect', 'no light needed', 'light independent'], keywords: ['does not need light', 'light independent', 'no light required', 'independent of light'] },
  'q3_e': { keyConcepts: ['control other variables', 'control variables', 'fair test'], keywords: ['control', 'variable', 'fair test', 'other factors', 'standardise'] },
  'q3_f': { keyConcepts: ['seed type S 90%', 'seed type T 75%', '90 percent', '75 percent'], keywords: ['90', '75', 'seed type S', 'seed type T'] },
  'q3_g': { keyConcepts: ['80% maxes T', 'T optimum 75', 'S optimum 90', 'partially supported'], keywords: ['80', 'seed type S', 'seed type T', 'optimum', 'maximum', 'supported', 'not supported', '75', '90'] },
  // Q4
  'q4_a': { keyConcepts: ['carbon dioxide', 'water', 'oxygen', 'glucose', 'reactants', 'products'], keywords: ['carbon dioxide', 'water', 'oxygen', 'glucose'] },
  'q4_b': { keyConcepts: ['independent variable light intensity', 'dependent variable stem length', 'control temperature', 'control same plant type', 'control CO2', 'control water volume'], keywords: ['independent', 'light intensity', 'dependent', 'stem length', 'control', 'temperature', 'same plant', 'CO2', 'water'] },
  'q4_c': { keyConcepts: ['increases rate of photosynthesis', 'more glucose', 'glucose used for growth', 'cell division'], keywords: ['photosynthesis', 'glucose', 'sugar', 'food', 'growth', 'rate', 'light', 'cell division'] },
  'q4_d': { keyConcepts: ['40mm at 80%', '35mm average', 'average'], keywords: ['40', '35', 'average', 'measurement', 'mm'] },
  'q4_e': { keyConcepts: ['mm', 'millimetres', 'cm', 'centimetres'], keywords: ['mm', 'cm', 'millimetre', 'centimetre', 'length', 'units'] },
  'q4_f': { keyConcepts: ['80 percent', 'no longer a limiting factor', 'another limiting factor', 'light not limiting'], keywords: ['80', 'limiting factor', 'plateau', 'maximum', 'stopped', 'another factor'] },
  'q4_g': { keyConcepts: ['increase carbon dioxide', 'increase temperature', 'add fertiliser', 'longer time'], keywords: ['carbon dioxide', 'CO2', 'temperature', 'fertiliser', 'minerals', 'longer', 'time'] },
  'q4_h': { keyConcepts: ['data from 20 to 80 supports', 'stem length increases', 'beyond 80 does not support', 'growth constant'], keywords: ['support', 'does not support', '20', '80', '100', 'increase', 'constant', 'plateau', 'data'] },
  // Q5
  'q5_a': { keyConcepts: ['temperature'], keywords: ['temperature'] },
  'q5_b': { keyConcepts: ['x-axis temperature', 'y-axis stem length', 'units on axes', 'even scale', 'points plotted correctly'], keywords: ['temperature', 'stem length', 'increase', 'mm', 'axis', 'scale', 'plot', 'points'] },
  'q5_c': { keyConcepts: ['growth increases up to 40-50 degrees', 'photosynthesis increases', 'more glucose', 'growth stops beyond 50 degrees', 'enzymes denature', 'stomata close', 'optimum temperature'], keywords: ['temperature', 'increase', 'decrease', 'photosynthesis', 'enzyme', 'denature', 'optimum', 'stomata', 'glucose', '40', '50', '60'] },
  // Q6
  'q6_a': { keyConcepts: ['independent variable fertiliser concentration', 'dependent variable stem length', 'controlled temperature', 'controlled water volume', 'controlled plant type', 'equipment pots ruler solutions', 'method water plants', 'measure stem length', 'repeat each condition', 'safety gloves'], keywords: ['fertiliser', 'concentration', 'independent', 'dependent', 'controlled', 'stem length', 'growth', 'temperature', 'ruler', 'pots', 'measure', 'repeat', 'safety', 'gloves'] },
  // Q7
  'q7_a': { keyConcepts: ['mediterranean'], keywords: ['mediterranean'] },
  'q7_b': { keyConcepts: ['identify critical habitats', 'protect habitats', 'migration routes', 'nesting beaches', 'protected areas'], keywords: ['habitat', 'protect', 'migration', 'route', 'nesting', 'feeding', 'conservation', 'protected'] },
  'q7_c': { keyConcepts: ['turtle died', 'not seen again', 'tag not returned', 'no return mechanism', 'tag lost'], keywords: ['died', 'not found', 'not returned', 'lost', 'fell off', 'awareness', 'communication'] },
  'q7_d': { keyConcepts: ['repeat at different times', 'multiple locations', 'larger sample', 'different species', 'reliable', 'representative'], keywords: ['repeat', 'sample size', 'location', 'time', 'species', 'reliable', 'representative', 'replicate'] },
  'q7_e': { keyConcepts: ['coastal development', 'plastic pollution', 'bycatch', 'nesting beaches destroyed', 'protect beaches', 'reduce plastic', 'turtle-excluder devices'], keywords: ['development', 'pollution', 'plastic', 'bycatch', 'fishing', 'nesting', 'beach', 'protect', 'reduce', 'net'] },
  // Q8
  'q8_a': { keyConcepts: ['gps collar tracks individual', 'gps continuous location', 'camera trap fixed location', 'camera only when animal passes'], keywords: ['collar', 'camera trap', 'individual', 'fixed', 'continuous', 'location', 'photograph', 'position'] },
  'q8_b': { keyConcepts: ['advantage continuous data', 'large area', 'no scientist present', 'disadvantage affects behaviour', 'injury', 'expensive', 'battery'], keywords: ['advantage', 'disadvantage', 'continuous', 'behaviour', 'injury', 'discomfort', 'expensive', 'battery', 'area'] },
  'q8_c': { keyConcepts: ['identify conflict zones', 'barriers corridors', 'warn farmers', 'reduce retaliation killing', 'protected area management'], keywords: ['conflict', 'corridor', 'barrier', 'fence', 'warn', 'farmer', 'retaliation', 'killing', 'protected', 'manage', 'crop'] },
  'q8_d': { keyConcepts: ['continuous monitoring', 'large-area coverage', 'long-term trends', 'identifies threats', 'alters behaviour', 'expensive', 'data gaps', 'expert interpretation', 'benefits outweigh limitations'], keywords: ['benefit', 'limitation', 'behaviour', 'expensive', 'cost', 'injury', 'monitor', 'continuous', 'area', 'trend', 'population', 'welfare'] },
  'q8_e': { keyConcepts: ['public awareness', 'community support', 'secure funding', 'government policy', 'citizen science', 'conservation action'], keywords: ['awareness', 'public', 'community', 'support', 'funding', 'policy', 'government', 'citizen science', 'action', 'conservation'] },
}
