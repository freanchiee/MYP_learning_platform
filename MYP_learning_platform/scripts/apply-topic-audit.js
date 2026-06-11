#!/usr/bin/env node
/* One-shot migration: inject topicCanonical / topicGroup / topicsAlso into every
 * biology question, derived from the Goal-1 tagging audit. Idempotent: skips a
 * question that already has topicCanonical. */
const fs = require('fs')
const path = require('path')

const TOPIC_GROUP_OF = {
  'Cell Structure & Function': 'Cells', 'Tissues, Organs & Systems': 'Cells',
  'Factors Affecting Human Health': 'Cells', 'Physiology': 'Cells', 'Vaccination': 'Cells',
  'Habitats & Ecosystems': 'Organisms', 'Interdependency': 'Organisms',
  'Unity & Diversity of Life': 'Organisms', 'Energy Transfer & Cycles': 'Organisms',
  'Nutrient/Carbon/Nitrogen Cycles': 'Organisms', 'Classification': 'Organisms',
  'Photosynthesis': 'Processes', 'Cell Respiration': 'Processes',
  'Aerobic & Anaerobic Respiration': 'Processes', 'Word & Chemical Equations': 'Processes',
  'Nutrition': 'Metabolism', 'Digestion': 'Metabolism', 'Enzymes & Biochemistry': 'Metabolism',
  'Movement & Transport': 'Metabolism', 'Diffusion': 'Metabolism', 'Osmosis': 'Metabolism',
  'Gas Exchange': 'Metabolism', 'Circulation': 'Metabolism',
  'Transpiration & Translocation': 'Metabolism', 'Homeostasis': 'Metabolism',
  'Life Cycles': 'Evolution', 'Natural Selection': 'Evolution',
  'Cell Division (Mitosis & Meiosis)': 'Evolution', 'Reproduction': 'Evolution',
  'Biodiversity': 'Evolution', 'Inheritance & Variation': 'Evolution', 'DNA & Genetics': 'Evolution',
  'Tropism': 'Interactions with Environment', 'Senses': 'Interactions with Environment',
  'Nervous System': 'Interactions with Environment', 'Receptors & Hormones': 'Interactions with Environment',
  'Pathogens & Parasites': 'Interactions Between Organisms', 'Predator/Prey': 'Interactions Between Organisms',
  'Food Chains & Webs': 'Interactions Between Organisms', 'Competition': 'Interactions Between Organisms',
  'Speciation & Extinction': 'Interactions Between Organisms',
  'Human Influences': 'Human Interactions with Environments',
  'Habitat Change & Destruction': 'Human Interactions with Environments',
  'Pollution & Conservation': 'Human Interactions with Environments',
  'Overexploitation': 'Human Interactions with Environments',
  'Mitigation of Adverse Effects': 'Human Interactions with Environments',
  'Genetic Modification': 'Biotechnology', 'Cloning': 'Biotechnology',
  'Ethical Implications': 'Biotechnology', 'Genome Mapping & Application': 'Biotechnology',
  '3D Tissue & Organ Printing': 'Biotechnology',
}

// paperId → { qid: [canonical, [also...]] }   (omit a qid to leave it untagged)
const M = {
  'biology-may-2016': {
    1: ['Movement & Transport', ['Diffusion', 'Osmosis']], 2: ['Cell Division (Mitosis & Meiosis)', ['DNA & Genetics']],
    3: ['Inheritance & Variation', ['DNA & Genetics']], 4: ['Photosynthesis', []], 5: ['Photosynthesis', []],
    6: ['Photosynthesis', ['Osmosis']], 7: ['Photosynthesis', []],
    8: ['Biodiversity', ['Human Influences', 'Interdependency']], 9: ['Food Chains & Webs', ['Interdependency']],
    10: ['Pollution & Conservation', ['Biodiversity']],
  },
  'biology-may-2017': {
    1: ['Nervous System', ['Senses']], 2: ['Senses', ['Nervous System']], 3: ['Inheritance & Variation', ['DNA & Genetics']],
    4: ['Homeostasis', ['Circulation']], 5: ['Circulation', ['Gas Exchange']], 6: ['Natural Selection', []],
    7: ['Homeostasis', []], 8: ['Genetic Modification', ['Pathogens & Parasites', 'Ethical Implications']],
  },
  'biology-may-2018': {
    1: ['Natural Selection', ['Inheritance & Variation']], 2: ['Nutrient/Carbon/Nitrogen Cycles', ['Human Influences']],
    3: ['Reproduction', ['Receptors & Hormones', 'Inheritance & Variation']], 4: ['Enzymes & Biochemistry', ['Digestion']],
    5: ['Enzymes & Biochemistry', []], 6: ['Enzymes & Biochemistry', []], 7: ['Photosynthesis', []],
    8: ['Human Influences', ['Habitat Change & Destruction']], 9: ['Human Influences', ['Mitigation of Adverse Effects']],
  },
  'biology-may-2019': {
    1: ['Cell Structure & Function', ['Tissues, Organs & Systems']], 2: ['Cell Division (Mitosis & Meiosis)', ['Inheritance & Variation']],
    3: ['Natural Selection', ['Speciation & Extinction']], 4: ['Photosynthesis', ['Habitats & Ecosystems']],
    5: ['Photosynthesis', ['Habitats & Ecosystems']], 6: ['Photosynthesis', ['Habitats & Ecosystems']],
    7: ['Pollution & Conservation', ['Mitigation of Adverse Effects']], 8: ['Overexploitation', ['Food Chains & Webs']],
    9: ['Genetic Modification', ['Ethical Implications']],
  },
  'biology-may-2021': {
    1: ['Cell Structure & Function', ['DNA & Genetics', 'Inheritance & Variation']],
    2: ['Food Chains & Webs', ['Interdependency', 'Habitat Change & Destruction']], 3: ['Predator/Prey', ['Habitats & Ecosystems']],
    4: ['Photosynthesis', []], 5: ['Photosynthesis', []], 6: ['Photosynthesis', []], 7: ['Enzymes & Biochemistry', ['Photosynthesis']],
    8: ['Circulation', ['Factors Affecting Human Health']], 9: ['Factors Affecting Human Health', ['Circulation']],
    10: ['Receptors & Hormones', ['Ethical Implications']],
  },
  'biology-may-2022': {
    1: ['Cell Structure & Function', ['Tissues, Organs & Systems']], 2: ['Digestion', ['Tissues, Organs & Systems']],
    3: ['Pollution & Conservation', ['Habitats & Ecosystems']], 4: ['Transpiration & Translocation', ['Gas Exchange']],
    5: ['Transpiration & Translocation', []], 6: ['Transpiration & Translocation', ['Gas Exchange']],
    7: ['Pollution & Conservation', ['Natural Selection', 'Enzymes & Biochemistry']],
    8: ['Pollution & Conservation', ['Mitigation of Adverse Effects']],
  },
  'biology-may-2023': {
    1: ['Tissues, Organs & Systems', ['Physiology']], 2: ['Factors Affecting Human Health', []],
    3: ['Enzymes & Biochemistry', ['Digestion', 'DNA & Genetics']], 4: ['Osmosis', ['Cell Structure & Function']],
    5: ['Osmosis', ['Cell Structure & Function']], 6: ['Cell Structure & Function', []], 7: ['Cell Structure & Function', []],
    8: ['Human Influences', ['Biodiversity']], 9: ['Mitigation of Adverse Effects', ['Biodiversity']],
  },
  'biology-may-2024': {
    1: ['Homeostasis', ['Tissues, Organs & Systems']], 2: ['Food Chains & Webs', ['Interdependency']],
    3: ['Life Cycles', []], 4: ['Life Cycles', ['Habitats & Ecosystems']],
    // 5 & 6 intentionally untagged: investigation-skills tasks in a physics (paper-helicopter) context, no valid biology topic
    7: ['Osmosis', ['Homeostasis']], 8: ['Nutrient/Carbon/Nitrogen Cycles', ['Pollution & Conservation']],
  },
  'biology-may-2025': {
    1: ['Classification', ['Unity & Diversity of Life']], 2: ['Gas Exchange', ['Circulation']],
    3: ['Life Cycles', ['Photosynthesis']], 4: ['Photosynthesis', []], 5: ['Photosynthesis', ['Habitats & Ecosystems']],
    6: ['Habitats & Ecosystems', ['Pollution & Conservation']], 7: ['Habitats & Ecosystems', ['Pollution & Conservation']],
    8: ['Pollution & Conservation', ['Habitats & Ecosystems']],
  },
  'biology-nov-2016': {
    1: ['Cell Structure & Function', []], 2: ['Circulation', ['Tissues, Organs & Systems']], 3: ['Gas Exchange', ['Pathogens & Parasites']],
    4: ['Aerobic & Anaerobic Respiration', ['Circulation']], 5: ['Genetic Modification', []],
    6: ['Genetic Modification', ['Pollution & Conservation']], 7: ['Vaccination', ['Pathogens & Parasites']],
    8: ['Genetic Modification', ['Vaccination', 'Ethical Implications']],
  },
  'biology-nov-2017': {
    1: ['Osmosis', ['Transpiration & Translocation']], 2: ['Tropism', []], 3: ['Cell Structure & Function', ['Genetic Modification']],
    4: ['Diffusion', ['Movement & Transport']], 5: ['Osmosis', []], 6: ['Osmosis', ['Cell Structure & Function']],
    7: ['Nutrition', ['Digestion']], 8: ['Cloning', ['Ethical Implications']], 9: ['3D Tissue & Organ Printing', ['Ethical Implications']],
  },
  'biology-nov-2018': {
    1: ['Nutrition', ['Factors Affecting Human Health']], 2: ['Pathogens & Parasites', ['Factors Affecting Human Health']],
    3: ['Senses', ['Nervous System']], 4: ['Nervous System', []], 5: ['Senses', ['Habitats & Ecosystems']],
    6: ['Food Chains & Webs', ['Predator/Prey']], 7: ['Genetic Modification', ['Nutrition']],
    8: ['Genetic Modification', ['Ethical Implications', 'Nutrition']],
  },
  'biology-nov-2019': {
    1: ['Food Chains & Webs', ['Interdependency']], 2: ['Photosynthesis', ['Cell Structure & Function']],
    3: ['Aerobic & Anaerobic Respiration', ['Cell Respiration']], 4: ['Aerobic & Anaerobic Respiration', ['Enzymes & Biochemistry']],
    5: ['Aerobic & Anaerobic Respiration', []], 6: ['Homeostasis', ['Receptors & Hormones']],
  },
  'biology-nov-2020': {
    1: ['Habitats & Ecosystems', ['Natural Selection']], 2: ['Homeostasis', ['Movement & Transport']], 3: ['Circulation', []],
    4: ['Circulation', ['Homeostasis']], 5: ['Circulation', ['Factors Affecting Human Health']],
    6: ['Circulation', ['Factors Affecting Human Health']], 7: ['Nutrient/Carbon/Nitrogen Cycles', ['Human Influences']],
    8: ['Mitigation of Adverse Effects', ['Human Influences']],
  },
  'biology-nov-2021': {
    1: ['Interdependency', ['Food Chains & Webs']], 2: ['Cell Division (Mitosis & Meiosis)', []], 3: ['Homeostasis', []],
    4: ['Cell Structure & Function', ['Pathogens & Parasites']], 5: ['Natural Selection', ['Pathogens & Parasites']],
    6: ['Factors Affecting Human Health', ['Pathogens & Parasites']], 7: ['Factors Affecting Human Health', ['Circulation']],
    8: ['Factors Affecting Human Health', ['Circulation']],
  },
  'biology-nov-2022': {
    1: ['Food Chains & Webs', ['Interdependency']], 2: ['Digestion', ['Nutrition', 'Movement & Transport']],
    3: ['Reproduction', ['DNA & Genetics']], 4: ['Photosynthesis', ['Nutrient/Carbon/Nitrogen Cycles']], 5: ['Photosynthesis', []],
    6: ['Photosynthesis', []], 7: ['Human Influences', ['Pollution & Conservation']],
    8: ['Factors Affecting Human Health', ['Cell Division (Mitosis & Meiosis)']],
    9: ['Genome Mapping & Application', ['DNA & Genetics', 'Ethical Implications']],
  },
  'biology-nov-2023': {
    1: ['DNA & Genetics', ['Inheritance & Variation']], 2: ['Nervous System', ['Homeostasis']],
    3: ['Aerobic & Anaerobic Respiration', ['Cell Respiration']], 4: ['Aerobic & Anaerobic Respiration', ['Cell Respiration']],
    5: ['Aerobic & Anaerobic Respiration', []], 6: ['Pathogens & Parasites', ['Habitats & Ecosystems']],
    7: ['Vaccination', ['Pathogens & Parasites']],
  },
  'biology-nov-2024': {
    1: ['Cell Structure & Function', []], 2: ['Receptors & Hormones', ['Reproduction']], 3: ['Classification', ['Unity & Diversity of Life']],
    4: ['Habitats & Ecosystems', []], 5: ['Habitats & Ecosystems', ['Photosynthesis']], 6: ['Habitats & Ecosystems', []],
    7: ['Pollution & Conservation', ['Habitats & Ecosystems']], 8: ['Mitigation of Adverse Effects', ['Habitats & Ecosystems']],
  },
}

const root = path.join(__dirname, '..', 'data', 'papers')
let totalInserted = 0
for (const [paperId, qmap] of Object.entries(M)) {
  const file = path.join(root, paperId, 'questions.ts')
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  const out = []
  let curId = null
  let alreadyTagged = false
  for (const line of lines) {
    const idM = line.match(/^\s*id:\s*(\d+),/)
    if (idM) { curId = Number(idM[1]); alreadyTagged = false }
    if (/^\s*topicCanonical:/.test(line)) alreadyTagged = true
    out.push(line)
    const topicM = line.match(/^(\s*)topic:\s*'/)
    if (topicM && curId != null && !alreadyTagged && qmap[curId]) {
      const indent = topicM[1]
      const [canonical, also] = qmap[curId]
      const group = TOPIC_GROUP_OF[canonical]
      if (!group) throw new Error(`No group for "${canonical}" (${paperId} q${curId})`)
      out.push(`${indent}topicCanonical: '${canonical.replace(/'/g, "\\'")}',`)
      out.push(`${indent}topicGroup: '${group}',`)
      if (also && also.length) {
        const arr = also.map((t) => `'${t.replace(/'/g, "\\'")}'`).join(', ')
        out.push(`${indent}topicsAlso: [${arr}],`)
      }
      totalInserted++
    }
  }
  fs.writeFileSync(file, out.join('\n'))
  console.log(`${paperId}: tagged ${Object.keys(qmap).length} questions`)
}
console.log(`\nTotal questions tagged: ${totalInserted}`)
