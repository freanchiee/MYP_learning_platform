export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  widget?: Widget
  widgetOptions?: string[]
  widgetItems?: string[]
  figImages?: string[]
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  marks: number
  stem: string
  figImages?: string[]
  tasks: Task[]
}

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2021-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 (7 marks, Crit A) ─── Rock salt mining / NaCl / potassium / chlorine ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table — rock salt and halite',
    marks: 7,
    stem: 'Rock salt, also called halite, is a naturally occurring mineral that has been used by humans for thousands of years as a food preservative and seasoning. The main component of rock salt is sodium chloride. Ancient salt-mining communities in Central Europe developed sophisticated techniques for extracting salt from underground deposits. Salt mines also yield other minerals including potassium-bearing salts and chloride-containing compounds used in industrial processes.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the formula of sodium carbonate.',
        marks: 1,
        ph: 'Select one formula',
        widget: 'radio_select',
        widgetOptions: ['Na₂O', 'NaCl', 'Na₂CO₃', 'NaOH'],
      },
      {
        label: 'b',
        text: 'Rock salt deposits often contain potassium chloride (KCl). Use the periodic table to **state** the group and period of potassium. Group: ___ Period: ___',
        marks: 2,
        ph: 'Group 1, Period 4',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** the electron configuration of chlorine.',
        marks: 1,
        ph: '2.8.7 or 1s² 2s² 2p⁶ 3s² 3p⁵',
      },
      {
        label: 'd',
        text: 'The diagram below shows the Bohr model of a potassium atom and a sodium atom. Using the Bohr model, **explain** why potassium is more reactive than sodium.',
        marks: 3,
        ph: 'More electron shells → outer e⁻ further from nucleus → less attraction → easier to remove',
      },
    ],
  },

  // ─── Q2 (9 marks, Crit A) ─── Swimming pool disinfection / chlorine ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding and chemical equations — pool disinfection',
    marks: 9,
    stem: 'Swimming pools are disinfected using chlorine-based compounds to kill harmful bacteria and prevent the spread of disease. Sodium hypochlorite (NaClO) is widely used as a pool disinfectant. When dissolved in water it releases chlorine, which is the active disinfecting agent.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonds in chlorine gas (Cl₂).',
        marks: 1,
        ph: 'Covalent',
        widget: 'radio_select',
        widgetOptions: ['Ionic', 'Covalent', 'Metallic', 'Coordinate'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (dot cross diagram) of chlorine gas (Cl₂).',
        marks: 1,
        ph: 'Option C — :Cl–Cl: with three lone pairs on each Cl and one bonding pair',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'Sodium hypochlorite decomposes slowly when exposed to light. When sodium hypochlorite decomposes, it forms sodium chloride and oxygen. **Write down** the balanced equation for the decomposition of sodium hypochlorite. You should include state symbols in your answer.',
        marks: 3,
        ph: '2NaClO(aq) → 2NaCl(aq) + O₂(g)',
      },
      {
        label: 'd',
        text: '**Select** the hazard symbol for chlorine gas.',
        marks: 1,
        ph: 'Option A — toxic (skull and crossbones)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'e',
        text: 'Pool operators vary the concentration of NaClO in pool water. Using your knowledge of collision theory, **explain** how the concentration of NaClO affects the rate at which bacteria are killed.',
        marks: 3,
        ph: 'Higher concentration → more NaClO particles → more frequent successful collisions with bacteria → faster kill rate',
      },
    ],
  },

  // ─── Q3 (12 marks, Crit A/C) ─── Air fresheners / noble gases / Freon-22 / butane ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atmosphere and particle theory — air fresheners',
    marks: 12,
    stem: 'Air fresheners are used in homes and offices worldwide. Many types release scented compounds into the air, or use compressed gas propellants to spray liquid fragrance.',
    tasks: [
      {
        label: 'a',
        text: 'Use the diagram below to **state** the two most common gases in the atmosphere and their percentage. Gas 1: ___ Percentage: ___% Gas 2: ___ Percentage: ___%',
        marks: 2,
        ph: 'Nitrogen 78%, Oxygen 20.9%',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Air freshener propellant canisters contain different types of gas molecules. **Select** the correct classification for each molecule as Monatomic gas, Diatomic gas, or Polyatomic gas.',
        marks: 3,
        ph: 'N₂→Diatomic; Argon→Monatomic; O₃→Polyatomic',
        widget: 'match_drag_drop',
        widgetItems: ['N₂ (nitrogen)', 'Argon', 'O₃ (ozone)'],
        widgetOptions: ['Monatomic gas', 'Polyatomic gas', 'Diatomic gas'],
      },
      {
        label: 'c',
        text: '**State** a reason why argon is found naturally as a monatomic gas.',
        marks: 1,
        ph: 'Full outer electron shell — unreactive/inert; does not bond with other atoms',
      },
      {
        label: 'd',
        text: 'Some older air fresheners used Freon-22 (chemical name chlorodifluoromethane, CHClF₂) as a propellant. Here is the structure of Freon-22. Use the periodic table to **calculate** the relative molecular mass of Freon-22.',
        marks: 2,
        ph: '12 + 1 + 35.5 + 2(19) = 86.5',
      },
      {
        label: 'e',
        text: 'The scent molecules from an air freshener diffuse through the room. Using particle theory, **explain** why the scent spreads faster in a warm room at 30°C than in a cool room at 10°C.',
        marks: 3,
        ph: 'Higher temperature → particles have more kinetic energy → move faster → diffuse more quickly',
      },
      {
        label: 'f',
        text: 'Modern eco-friendly air fresheners use butane (C₄H₁₀) as a propellant instead of CFCs. **Draw** the structure of butane.',
        marks: 1,
        ph: '4 carbon chain, CH₃–CH₂–CH₂–CH₃, all C–C and C–H bonds shown',
      },
    ],
  },

  // ─── Q4 (12 marks, Crit B/C) ─── Indium melting point / indium-bismuth alloys ───
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Melting points and alloys — indium and indium-bismuth',
    marks: 12,
    stem: 'Indium is a soft, silvery metal used in electronics and LCD screens. Its melting point is a useful characteristic for quality control in manufacturing. Two students measured the melting point of indium using different equipment. Student A used a thermometer and Student B used a digital temperature probe connected to a data logger.',
    tasks: [
      {
        label: 'a',
        text: '**State** the temperature shown on the thermometer for Student A.',
        marks: 1,
        ph: '156.5°C',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Student B used a temperature probe and plotted a graph. **Determine** the melting point of indium from Student B\'s graph.',
        marks: 1,
        ph: '156.8°C',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** which student has measured the melting point correctly and justify your answer.',
        marks: 2,
        ph: 'Student B — measured temperature when all indium had melted and temperature was steady (plateau)',
      },
      {
        label: 'd',
        text: 'The table shows the melting points of different indium–bismuth alloys with varying percentages of bismuth. **State** the trend in melting point as the percentage of bismuth increases.',
        marks: 1,
        ph: 'Melting point decreases as percentage of bismuth increases',
      },
      {
        label: 'e',
        text: 'Using the data from the table, **formulate** a hypothesis to predict how the density of an indium–bismuth alloy changes as the percentage of bismuth increases. Use the If/Then/Because format.',
        marks: 3,
        ph: 'If bismuth % increases then density increases because bismuth has higher density than indium',
      },
      {
        label: 'f',
        text: 'Using the graph, **predict** the melting point of an alloy made of 70% indium and 30% bismuth.',
        marks: 2,
        ph: '110°C (±10)',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Select** the type of indium–bismuth alloy most suitable for soldering components that must not exceed 120°C and justify your choice.',
        marks: 2,
        ph: 'Type C — melting point below 120°C so it can be soldered without damaging heat-sensitive components',
      },
    ],
  },

  // ─── Q5 (7 marks, Crit A/B) ─── Boiling point elevation / pasta cooking ───
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Boiling point elevation — dissolved solutes in cooking',
    marks: 7,
    stem: 'A student investigated whether adding different solutes to water changes its boiling point. The student tested salt water, sugar water, vinegar solution, baking soda solution and pure water.',
    tasks: [
      {
        label: 'a',
        text: '**State** the gas that is produced when baking soda (NaHCO₃) is heated.',
        marks: 1,
        ph: 'Carbon dioxide (CO₂)',
      },
      {
        label: 'b',
        text: '**State** the variables in the student\'s experiment. Independent variable: ___ Dependent variable: ___',
        marks: 2,
        ph: 'IV: type of solute; DV: boiling point / boiling temperature',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables for this experiment.',
        marks: 2,
        ph: 'Any two: volume of water; concentration/mass of solute; type of heating equipment; starting temperature; container material',
      },
      {
        label: 'd',
        text: '**Formulate** a research question for this experiment.',
        marks: 2,
        ph: 'How does the type of solute affect the boiling point/temperature of the solution?',
      },
    ],
  },

  // ─── Q6 (14 marks, Crit C) ─── Coffee roasting data analysis ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis — coffee bean roasting temperatures',
    marks: 14,
    stem: 'The roasting of coffee beans involves carefully controlled temperature changes. During roasting, chemical reactions including the Maillard reaction and caramelisation change the flavour compounds in the beans. The table shows the internal temperatures of coffee bean samples at different percentages of moisture content for three different roast levels.',
    tasks: [
      {
        label: 'a',
        text: '**Plot** the data for Roast B on the graph provided. Your graph should include: missing data points, a title linking temperature change with time, and correct axis labels (time in minutes, temperature in °C).',
        marks: 5,
        ph: 'Plot all Roast B data points; title: Temperature of coffee beans Roast B vs time; x-axis: time (min); y-axis: temperature (°C)',
      },
      {
        label: 'b',
        text: '**Determine** which roast level represents a dark roast and justify your answer using the graph.',
        marks: 2,
        ph: 'Roast B — graph shows plateau at highest temperature (~204°C) characteristic of dark roast',
      },
      {
        label: 'c',
        text: '**Calculate** the average temperature for the three dark roast samples at the 12-minute mark.',
        marks: 3,
        ph: '(204 + 203 + 205) / 3 = 612 / 3 = 204°C',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Determine** the temperature at the 8-minute mark for medium roast samples from the graph.',
        marks: 2,
        ph: '185°C (±2)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Suggest** why the data point for the 5% moisture sample might be an outlier.',
        marks: 1,
        ph: 'Sample had incorrect moisture content measured; probe not properly inserted; oven temperature fluctuation',
      },
      {
        label: 'f',
        text: '**Suggest** how the experiment could be improved to better understand the relationship between moisture content and roasting temperature.',
        marks: 1,
        ph: 'Test samples with intermediate moisture content percentages between the values already tested',
      },
    ],
  },

  // ─── Q7 (15 marks, Crit B) ─── Coffee bean moisture investigation design ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation design — moisture content and coffee roasting time',
    marks: 15,
    stem: 'A student wants to investigate how the moisture content of coffee beans affects the time needed to complete roasting. **Design** a complete investigation to test this.',
    tasks: [
      {
        label: '',
        text: '**Design** a full investigation into how the moisture content of coffee beans affects the time needed to complete roasting. Include: (1) identification of independent and dependent variables and at least two control variables; (2) equipment needed; (3) a clear step-by-step method; (4) a plan for sufficient data; (5) a safety precaution linked to a specific hazard.',
        marks: 15,
        ph: 'IV: % moisture content of beans; DV: roasting time (minutes); CVs: oven temperature, mass of beans, bean variety; Method: dry beans to different moisture levels, roast at fixed temp, measure time until first crack; Sufficient data: ≥3 trials per moisture level, calculate averages; Safety: hot oven — use heat-resistant gloves',
      },
    ],
  },

  // ─── Q8 (12 marks, Crit D/A/C) ─── Sodium-ion batteries ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Sodium-ion batteries — environmental evaluation',
    marks: 12,
    stem: 'Sodium-ion batteries are an emerging technology for energy storage in electric vehicles and grid systems. Sodium is more abundant than lithium and can be extracted from seawater. The relative atomic mass of sodium is 22.99.',
    tasks: [
      {
        label: 'a',
        text: '**Write** the symbol for a sodium ion.',
        marks: 1,
        ph: 'Na⁺',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A sodium-ion battery has a mass of 8 kg and is made entirely of sodium. **Calculate** the number of moles of sodium in this battery.',
        marks: 2,
        ph: 'n = 8000 / 22.99 = 348.0 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Evaluate** the environmental and social consequences of using sodium-ion batteries compared to lithium-ion batteries for electric vehicles. In your answer, consider advantages and disadvantages of both options and state your conclusion.',
        marks: 9,
        ph: 'Env: Na from seawater — less land disruption; Li mining — habitat loss, water use; Social: Na more abundant/cheaper → wider access; Li mining — community displacement; Conclusion: Na-ion batteries more sustainable resource-wise but technology still developing',
      },
    ],
  },

  // ─── Q9 (12 marks, Crit D) ─── Fast fashion vs sustainable fashion ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Fast fashion vs sustainable fashion — resource use and social impact',
    marks: 12,
    stem: 'The fast fashion model produces large quantities of cheap clothing at high speed, encouraging frequent purchases and disposal. Sustainable fashion aims to reduce environmental impact by using eco-friendly materials, fair labour practices, and designing clothes for longer use.',
    tasks: [
      {
        label: '',
        text: '**Evaluate** the sustainable fashion model compared to the fast fashion model. In your answer, consider economic aspects, use of resources, social impacts, and state a justified conclusion.',
        marks: 12,
        ph: 'Economic: fast fashion cheap for consumers but hidden environmental costs; sustainable fashion higher upfront cost but lower long-term waste costs; Resources: fast fashion uses more water/chemicals; sustainable uses recycled fibres, organic cotton; Social: fast fashion — sweatshop labour; sustainable — fair wages, safer working conditions; Conclusion: sustainable fashion reduces long-term harm despite higher cost',
      },
    ],
  },
]
