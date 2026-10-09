import type { Lesson, Module } from './types'

// Built from Classes 34 and 36 (Theme D · Fields): where fields come from, field strength, Newton's law of
// gravitation and Coulomb's law, magnetic field strength and current-carrying wires, work, potential energy and
// potential, orbital motion and escape speed. Every number quoted below is computed in lib/learn/fields-model.ts
// and re-checked in scripts/test-learn-physics.mjs. The quiz questions are ORIGINAL.
//
// One notation choice: electric potential is V = kQ/r, with the sign of the source charge Q carried in Q. The minus
// sign belongs to GRAVITY (V_g = −GM/r) because gravity only attracts.

const lessons: Lesson[] = [
  // ------------------------------------------------------------------ 1
  {
    slug: 'what-is-a-field',
    code: 'D · 1',
    title: 'What is a field?',
    blurb: 'Where gravitational, electric and magnetic fields come from, and how we measure how strong they are.',
    syllabus: 'D.1 / D.2 · Gravitational, electric and magnetic fields',
    level: 'SL+HL',
    difficulty: 1,
    minutes: 18,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'The Moon never touches the oceans, yet it lifts them twice a day. A magnet moves a paper clip with no contact. How does one object act on another across empty space?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'origin',
            kicker: 'Where do fields come from?',
            title: 'Which object makes which field',
            blocks: [
              {
                t: 'matrix',
                title: 'Which fields does each kind of object create?',
                idea: 'Tick the boxes yourself first, then check. GF = gravitational field, EF = electric field, MF = magnetic field.',
                cols: [
                  { head: 'GF', sub: 'gravitational', ex: 'made by mass' },
                  { head: 'EF', sub: 'electric', ex: 'made by charge' },
                  { head: 'MF', sub: 'magnetic', ex: 'made by moving charge' },
                ],
                rows: [
                  { label: 'Neutral mass, m', cells: [{ v: 'yes' }, { v: 'no' }, { v: 'no' }] },
                  { label: 'Charged mass, m and q', cells: [{ v: 'yes' }, { v: 'yes' }, { v: 'no' }] },
                  { label: 'Moving charged mass, m and q with velocity v', cells: [{ v: 'yes' }, { v: 'yes' }, { v: 'yes' }] },
                ],
              },
              { t: 'note', text: 'A moving charge is a current. So every wire carrying a current has a magnetic field around it.' },
            ],
          },
          {
            id: 'definition',
            kicker: 'Definition',
            title: 'A field is a 3D region where a force is felt',
            blocks: [
              { t: 'def', term: 'Field', text: 'A three-dimensional region around a source in which another object experiences a force.' },
              {
                t: 'table',
                head: ['Field', 'Created by (the source)', 'Felt by (experiences a force)'],
                rows: [
                  ['Gravitational, GF', 'a mass', 'another mass'],
                  ['Electric, EF', 'a charge', 'another charge'],
                  ['Magnetic, MF', 'a moving charge or a magnet', 'another moving charge or magnet'],
                ],
                firstColHeader: true,
                note: 'The source creates the field. The other object, placed in it, experiences the force.',
              },
            ],
          },
          {
            id: 'strength',
            kicker: 'Field strength',
            title: 'How strong is it? Force per unit mass, or per unit charge',
            blocks: [
              {
                t: 'arrows',
                head: ['Field', 'Strength = force on each unit'],
                rows: [
                  { from: 'Gravitational, g', to: 'g = F_{G} / m', note: 'force per unit mass. Unit: N kg⁻¹', emoji: '🌍' },
                  { from: 'Electric, E', to: 'E = F_{E} / q', note: 'force per unit charge. Unit: N C⁻¹', emoji: '⚡' },
                ],
              },
              {
                t: 'steps',
                title: 'Worked example: field strength from a force',
                given: 'A small test mass of 2.0 kg is placed at a point in the gravitational field of a planet and feels a force of 20 N toward the planet.',
                steps: [
                  { line: 'g = F_{G} / m', why: 'field strength is the force on each kilogram' },
                  { line: 'g = 20 N ÷ 2.0 kg', why: 'substitute the force and the test mass' },
                  { line: 'g = 10 N kg⁻¹, toward the planet', why: 'the direction is the way the mass is pulled' },
                ],
                answer: 'g = 10 N kg⁻¹, pointing toward the planet',
              },
              {
                t: 'steps',
                title: 'Worked example: electric field strength',
                given: 'A small test charge of 3.0 μC is placed near a charged sphere and feels a force of 30 μN. (1 μC = 10⁻⁶ C and 1 μN = 10⁻⁶ N.)',
                steps: [
                  { line: 'E = F_{E} / q', why: 'field strength is the force on each coulomb' },
                  { line: 'E = (30 × 10⁻⁶ N) ÷ (3.0 × 10⁻⁶ C)', why: 'the micro prefixes cancel' },
                  { line: 'E = 10 N C⁻¹', why: 'the direction is the way a POSITIVE test charge is pushed' },
                ],
                answer: 'E = 10 N C⁻¹',
              },
              { t: 'note', text: 'Near the Earth’s surface the force on a mass is its weight, F_G = W = mg. So g = W / m = mg / m = 9.8 N kg⁻¹. That is why g is both “field strength” and “acceleration of free fall”.' },
            ],
          },
          {
            id: 'direction',
            kicker: 'Direction',
            title: 'Which way does the field point?',
            blocks: [
              {
                t: 'arrows',
                head: ['Field', 'Direction'],
                rows: [
                  { from: 'Gravitational', to: 'toward the mass M (inward)', note: 'the way another mass would move', emoji: '⬇️' },
                  { from: 'Electric', to: 'away from +Q (outward), toward −Q (inward)', note: 'the way a positive test charge would move', emoji: '➕' },
                  { from: 'Magnetic', to: 'the way the N pole of a compass points', note: 'we come back to this in lesson 3', emoji: '🧭' },
                ],
              },
              { t: 'callout', kind: 'warn', title: 'Test charges are positive', text: 'The direction of E is the direction of the force on a POSITIVE test charge. A negative charge in the same field is pushed the opposite way.' },
            ],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'Field lines and field strength',
            blocks: [
              {
                t: 'widget',
                id: 'field-lines-lab',
                title: 'Mass, +Q or −Q: which way do the lines point?',
                idea: 'Switch the source and move the test particle. Watch the arrows and the field strength.',
                predict: { q: 'Predict: the source is a negative charge, −Q. A small positive test charge is placed nearby. The force on it points…', options: ['toward the source', 'away from the source', 'at right angles to the field lines'], answer: 0, why: 'Opposite charges attract. The field lines of −Q point inward, the way a positive test charge moves.' },
              },
            ],
          },
          {
            id: 'myth',
            kicker: 'Misconception',
            title: 'A field is not “nothing” until something is in it',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: '✗ Common mistake', tone: 'warn', items: ['There is no field in a room until you put a mass in it', 'A field is the same thing as a force'] },
                  { label: '✓ Better', items: ['The source makes the field everywhere around it, all the time', 'The force appears when a second object is placed in the field', 'Field strength is force PER UNIT mass or charge'] },
                ],
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'd1-c1', q: 'Which of these creates a magnetic field?', options: ['a neutral mass at rest', 'a charged object at rest', 'a moving charge'], answer: 2, why: 'A moving charge is a current, and a current creates a magnetic field. A charge at rest makes only an electric field (and a gravitational field, because it has mass).', back: 'origin' },
      { t: 'check', id: 'd1-c2', q: 'A 4.0 kg mass is placed in a gravitational field and feels a force of 36 N. The gravitational field strength is…', options: ['0.11 N kg⁻¹', '9.0 N kg⁻¹', '144 N kg⁻¹'], answer: 1, why: 'g = F / m = 36 N ÷ 4.0 kg = 9.0 N kg⁻¹.', back: 'strength' },
      { t: 'check', id: 'd1-c3', q: 'A small positive test charge of 2.0 × 10⁻⁶ C feels a force of 6.0 × 10⁻⁶ N toward the west. The electric field strength there is…', options: ['3.0 N C⁻¹ toward the west', '3.0 N C⁻¹ toward the east', '12 N C⁻¹ toward the west'], answer: 0, why: 'E = F / q = 6.0 × 10⁻⁶ ÷ 2.0 × 10⁻⁶ = 3.0 N C⁻¹. For a positive test charge the field points the way the force points: west.', back: 'strength' },
      { t: 'check', id: 'd1-c4', q: 'A positively charged metal sphere is fixed in place. At a point nearby, the electric field points…', options: ['away from the sphere, the way a positive test charge would be pushed', 'toward the sphere, because a nearby charge would be attracted', 'nowhere, until a positive charge is placed there'], answer: 0, why: 'The field exists whether or not a test charge is there. Its direction is defined by the force on a positive test charge, which is repelled by +Q.', back: 'direction' },
      { t: 'check', id: 'd1-c5', q: 'The units of gravitational field strength g and electric field strength E are, in that order…', options: ['N kg⁻¹ and N C⁻¹', 'N kg and N C', 'kg N⁻¹ and C N⁻¹'], answer: 0, why: 'Both are force per unit: force per kilogram for g, force per coulomb for E.', back: 'strength' },
      { t: 'apply', id: 'd1-a1', prompt: 'A friend says: “There is no gravitational field in an empty room, because nothing in the room is being pulled.” Explain what is wrong with this.', model: 'A field is a region around a source where another object WOULD feel a force. The Earth creates a gravitational field all around it, including inside the room, whether or not a mass is there. The field strength is g = F / m, about 9.8 N kg⁻¹ pointing toward the centre of the Earth. A test mass placed in the room would feel a force; the field was already there before it arrived.', checklist: ['I said the source (the Earth) makes the field everywhere around it', 'I said the force appears when a second mass is placed in the field', 'I gave the field strength as force per unit mass, about 9.8 N kg⁻¹', 'I gave the direction: toward the Earth'] },
      { t: 'retrieval', items: [{ from: 'A.2 · 1', q: 'A trolley moves at constant velocity. The net force on it is…', options: ['zero', 'equal to its weight', 'equal to its momentum'], answer: 0, why: 'Constant velocity means no acceleration, so F_net = 0.' }, { from: 'A.2 · 2', q: 'The unit N s is equivalent to…', options: ['kg m s⁻¹', 'kg m s⁻²', 'kg m² s⁻²'], answer: 0, why: '1 N s = 1 kg m s⁻² × s = 1 kg m s⁻¹.' }] },
      { t: 'summary', points: ['Mass makes a gravitational field. Charge makes an electric field. A moving charge (a current) makes a magnetic field.', 'A field is a 3D region around a source where another object experiences a force.', 'Field strength is the force per unit mass (g = F / m) or per unit charge (E = F / q).', 'g points toward the mass. E points away from +Q and toward −Q, the way a positive test charge moves.'], terms: [{ term: 'Field', def: 'a region where another object experiences a force' }, { term: 'Field strength', def: 'force per unit mass or per unit charge' }, { term: 'Test charge', def: 'a small positive charge used to define the direction of E' }], formulas: ['g = F_{G} / m', 'E = F_{E} / q'], errors: ['Thinking a field only exists once a test object is in it.', 'Forgetting that a negative charge is pushed opposite to E.', 'Mixing up the source (creates the field) and the test object (feels the force).'] },
    ],
  },

  // ------------------------------------------------------------------ 2
  {
    slug: 'gravitation-and-coulomb',
    code: 'D · 2',
    title: 'Newton’s law of gravitation and Coulomb’s law',
    blurb: 'Two force laws with the same shape: both fall off as 1 / r². Then the field of a point source.',
    syllabus: 'D.1 / D.2 · Gravitational and electric force laws',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 22,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'In a hydrogen atom the electron and proton attract each other twice over: by gravity AND by electric force. Which one actually holds the atom together?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'nlg',
            kicker: 'Gravity',
            title: 'Newton’s law of gravitation',
            blocks: [
              {
                t: 'law',
                ordinal: 'gravitation',
                kicker: 'Newton’s law of gravitation',
                name: 'Law of universal gravitation',
                nameNote: 'every mass attracts every other mass',
                words: 'The gravitational force between two point masses is proportional to the product of the masses and inversely proportional to the square of the distance between them. It always attracts.',
                maths: ['F_{G} = G M m / r²', 'G = 6.67 × 10⁻¹¹ N m² kg⁻²'],
                mathsNote: 'each mass feels a force of the same size, toward the other (Newton’s third law)',
              },
            ],
          },
          {
            id: 'cl',
            kicker: 'Charge',
            title: 'Coulomb’s law',
            blocks: [
              {
                t: 'law',
                ordinal: 'Coulomb',
                kicker: 'Coulomb’s law',
                name: 'Law of electric force',
                nameNote: 'unlike charges attract, like charges repel',
                words: 'The electric force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them.',
                maths: ['F_{E} = k Q q / r²', 'k = 8.99 × 10⁹ N m² C⁻²', 'k = 1 / 4πε_{0}'],
                mathsNote: 'put in the sizes of Q and q to get the magnitude, then use the signs to decide attract or repel',
              },
            ],
          },
          {
            id: 'point',
            kicker: 'When can I use them?',
            title: 'Point sources and spheres',
            blocks: [
              {
                t: 'arrows',
                head: ['Situation', 'What you do'],
                rows: [
                  { from: 'r is much greater than the size of the objects', to: 'treat them as point masses or point charges', note: 'r is the distance between their centres', emoji: '•' },
                  { from: 'a uniform sphere', to: 'it acts as if all its mass or charge were at its centre', note: 'so r is centre to centre: for a satellite, r = R_{Earth} + height', emoji: '🌐' },
                ],
              },
              { t: 'callout', kind: 'warn', title: 'r is from the centre', text: 'At a height equal to the Earth’s radius R above the surface, r is 2R, not R. This is the most common slip in field-strength questions.' },
            ],
          },
          {
            id: 'field',
            kicker: 'Field of a point source',
            title: 'Divide the force by the test object',
            blocks: [
              {
                t: 'steps',
                title: 'Worked example: from the force law to the field',
                given: 'A point or spherical mass M creates a field. A small test mass m is placed a distance r from its centre.',
                steps: [
                  { line: 'F_{G} = G M m / r²', why: 'Newton’s law of gravitation' },
                  { line: 'g = F_{G} / m = G M m / (r² m)', why: 'field strength is force per unit mass' },
                  { line: 'g = G M / r²', why: 'm cancels: the field depends on the SOURCE mass M, not on the test mass' },
                ],
                answer: 'g = GM / r² toward M. In the same way E = kQ / r² for a point charge.',
              },
              {
                t: 'formulas',
                items: [
                  { eq: 'g = F_{G} / m = G M / r²', legend: ['g: gravitational field strength (N kg⁻¹)', 'M: the mass that creates the field', 'r: distance from its centre'] },
                  { eq: 'E = F_{E} / q = k Q / r²', legend: ['E: electric field strength (N C⁻¹)', 'Q: the charge that creates the field', 'r: distance from the point charge'] },
                ],
              },
            ],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'The inverse-square law',
            blocks: [
              {
                t: 'widget',
                id: 'field-lines-lab',
                title: 'Move the test particle away',
                idea: 'Compare the field strength at different distances. Does it fall off like 1 / r or 1 / r²?',
                predict: { q: 'Predict: the test particle is moved to twice the distance from the source. The field strength becomes…', options: ['half', 'one quarter', 'one eighth'], answer: 1, why: 'g and E are proportional to 1 / r². Doubling r gives 1 / 2² = 1 / 4 of the field strength.' },
              },
            ],
          },
          {
            id: 'compare',
            kicker: 'Side by side',
            title: 'Gravity and electric force compared',
            blocks: [
              {
                t: 'table',
                head: ['', 'Gravitational', 'Electric'],
                rows: [
                  ['Source', 'mass', 'charge'],
                  ['Force between two sources', 'always attractive', 'attractive or repulsive'],
                  ['Force law', 'F = G M m / r²', 'F = k Q q / r²'],
                  ['Constant', 'G = 6.67 × 10⁻¹¹ N m² kg⁻²', 'k = 8.99 × 10⁹ N m² C⁻²'],
                  ['Field strength', 'g = G M / r²', 'E = k Q / r²'],
                  ['Field direction', 'toward M', 'away from +Q, toward −Q'],
                ],
                firstColHeader: true,
              },
            ],
          },
          {
            id: 'worked',
            kicker: 'Worked examples',
            title: 'The Moon, and the hydrogen atom',
            blocks: [
              {
                t: 'steps',
                title: 'Gravity between the Earth and the Moon',
                given: 'The Earth (5.97 × 10²⁴ kg) and the Moon (7.35 × 10²² kg) are 3.84 × 10⁸ m apart, centre to centre. Find the gravitational force between them.',
                steps: [
                  { line: 'F = G M m / r²', why: 'both bodies are nearly uniform spheres, so r is centre to centre' },
                  { line: 'F = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 7.35 × 10²² ÷ (3.84 × 10⁸)²', why: 'substitute SI values' },
                  { line: 'F = 1.98 × 10²⁰ N', why: 'attractive, and the same size on each body' },
                ],
                answer: '1.98 × 10²⁰ N, on the Moon toward the Earth and on the Earth toward the Moon',
              },
              {
                t: 'steps',
                title: 'Which force holds the hydrogen atom together?',
                given: 'In a hydrogen atom the electron (9.11 × 10⁻³¹ kg, charge −1.6 × 10⁻¹⁹ C) is 5.3 × 10⁻¹¹ m from the proton (1.67 × 10⁻²⁷ kg, charge +1.6 × 10⁻¹⁹ C). Compare the electric force with the gravitational force.',
                steps: [
                  { line: 'F_{E} = k e² / r² = 8.99 × 10⁹ × (1.6 × 10⁻¹⁹)² ÷ (5.3 × 10⁻¹¹)²', why: 'Coulomb’s law. Unlike charges, so it attracts' },
                  { line: 'F_{E} = 8.2 × 10⁻⁸ N', why: 'the electric force' },
                  { line: 'F_{G} = G m_{e} m_{p} / r² = 3.6 × 10⁻⁴⁷ N', why: 'the gravitational force, same distance' },
                  { line: 'F_{E} / F_{G} ≈ 2 × 10³⁹', why: 'divide the two forces' },
                ],
                answer: 'The electric force is about 10³⁹ times bigger. Gravity is negligible between charged particles.',
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'd2-c1', q: 'The distance between two point masses is tripled. The gravitational force between them becomes…', options: ['one third', 'one ninth', 'nine times larger'], answer: 1, why: 'F ∝ 1 / r². Tripling r gives 1 / 3² = 1 / 9 of the force.', back: 'nlg' },
      { t: 'check', id: 'd2-c2', q: 'Two small charged spheres repel each other with a force F. One sphere’s charge is doubled and the distance between them is also doubled. The new force is…', options: ['F / 2', 'F', '2F'], answer: 0, why: 'Doubling one charge doubles the force. Doubling the distance divides it by 2² = 4. Together: 2 ÷ 4 = 1/2, so F / 2.', back: 'cl' },
      { t: 'check', id: 'd2-c3', q: 'At the surface of the Earth g = 9.8 N kg⁻¹. At a height equal to one Earth radius above the surface, g is about…', options: ['9.8 N kg⁻¹', '4.9 N kg⁻¹', '2.5 N kg⁻¹'], answer: 2, why: 'The distance from the centre is now r = 2R, so g falls to 1 / 2² = 1/4: 9.8 ÷ 4 = 2.45 N kg⁻¹. Height R above the surface is NOT distance R.', back: 'point' },
      { t: 'check', id: 'd2-c4', q: 'A point charge of 2.0 μC is fixed in place. The electric field strength 0.20 m from it is about…', options: ['9.0 × 10⁴ N C⁻¹', '4.5 × 10⁵ N C⁻¹', '9.0 × 10⁶ N C⁻¹'], answer: 1, why: 'E = kQ / r² = 8.99 × 10⁹ × 2.0 × 10⁻⁶ ÷ (0.20)² = 4.5 × 10⁵ N C⁻¹. The first option forgets to square r.', back: 'field' },
      { t: 'check', id: 'd2-c5', q: 'Why is gravity NOT the main force holding an electron in an atom?', options: ['At that distance it is far weaker than the electric force', 'It only acts on large masses', 'It repels at very small distances'], answer: 0, why: 'Gravity acts on every mass, but between an electron and a proton it is about 10³⁹ times smaller than the electric force.', back: 'worked' },
      { t: 'apply', id: 'd2-a1', prompt: 'The Earth and the Moon are huge, yet we use F = G M m / r² with r = 3.84 × 10⁸ m. Explain why this is allowed, and what r means.', model: 'Both are nearly uniform spheres, and a uniform sphere attracts as if all its mass were at its centre, so r is the distance between the centres. The distance is also much larger than either radius, so they behave like point masses. By Newton’s third law the force on each is the same size and attractive.', checklist: ['I said a uniform sphere acts as if its mass were at its centre', 'I said r is measured centre to centre', 'I said r is much larger than the sizes of the bodies', 'I said the force on each body is equal and attractive'] },
      { t: 'retrieval', items: [{ from: 'D · 1', q: 'Which field does a moving charge create, in addition to the others?', options: ['magnetic', 'none', 'only a gravitational one'], answer: 0, why: 'A moving charge is a current, which creates a magnetic field.' }, { from: 'D · 1', q: 'The direction of an electric field is the direction of the force on…', options: ['a positive test charge', 'a negative test charge', 'a neutral mass'], answer: 0, why: 'By definition, a positive test charge.' }] },
      { t: 'summary', points: ['F_G = GMm / r² always attracts. F_E = kQq / r² attracts unlike and repels like charges.', 'Both fall off as 1 / r². Double the distance and the force (and field) is a quarter.', 'g = GM / r² and E = kQ / r². The test object cancels.', 'For a sphere, r is measured from the centre.'], terms: [{ term: 'Point mass', def: 'an object much smaller than the distances involved' }, { term: 'Inverse-square law', def: 'a quantity proportional to 1 / r²' }], formulas: ['F_{G} = G M m / r²', 'F_{E} = k Q q / r²', 'g = G M / r²', 'E = k Q / r²'], errors: ['Using the height above the surface as r instead of the distance to the centre.', 'Forgetting to square r.', 'Using the signs of the charges as part of the magnitude of F.'] },
    ],
  },

  // ------------------------------------------------------------------ 3
  {
    slug: 'magnetic-fields-and-currents',
    code: 'D · 3',
    title: 'Magnetic field strength and currents',
    blurb: 'Define B from the force on a moving charge, then on a wire, then between two wires.',
    syllabus: 'D.2 · Magnetic fields, force between parallel currents',
    level: 'SL+HL',
    difficulty: 2,
    minutes: 20,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Run a current through a wire near a compass and the needle swings, though nothing touches it. What is the wire making around itself?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'source',
            kicker: 'Where does it come from?',
            title: 'A moving charge makes a magnetic field',
            blocks: [
              {
                t: 'arrows',
                head: ['Step', 'What it makes'],
                rows: [
                  { from: 'charge q moving with velocity v', to: 'a current I', note: 'current is moving charge', emoji: '🔌' },
                  { from: 'a current I', to: 'a magnetic field B around it', note: 'the field is a region where another moving charge or magnet feels a force', emoji: '🧲' },
                ],
              },
              { t: 'note', text: 'Around a long straight wire the field lines are circles. Grip rule: point your right thumb along the current, and your fingers curl the way the field points.' },
            ],
          },
          {
            id: 'definition',
            kicker: 'Field strength',
            title: 'B is force per unit charge per unit speed',
            blocks: [
              {
                t: 'formulas',
                items: [
                  { eq: 'B = F / (q v)', legend: ['F: magnetic force on the moving charge (N)', 'q: its charge (C)', 'v: its speed, at right angles to B (m s⁻¹)', 'unit: tesla (T) = N C⁻¹ m⁻¹ s = N A⁻¹ m⁻¹'] },
                  { eq: 'B = F / (I L)', legend: ['F: force on a length L of wire (N)', 'I: current in the wire (A)', 'L: length of wire in the field (m), at right angles to B'] },
                ],
              },
              {
                t: 'steps',
                title: 'Why the two definitions say the same thing',
                given: 'A charge q moves along a straight wire of length L in a time t. So the current is I = q / t and the speed of the charge is v = L / t.',
                steps: [
                  { line: 'q v = (I t)(L / t)', why: 'write q as I t and v as L / t' },
                  { line: 'q v = I L', why: 'the time t cancels' },
                  { line: 'B = F / (q v) = F / (I L)', why: 'so the force on the moving charges is the force on the wire' },
                ],
                answer: 'q v = I L, so F / (q v) and F / (I L) are the same quantity',
              },
            ],
          },
          {
            id: 'direction',
            kicker: 'Direction',
            title: 'Which way does B point?',
            blocks: [
              {
                t: 'arrows',
                head: ['Field', 'Direction'],
                rows: [
                  { from: 'Magnetic, B', to: 'the way the N pole of a compass points', note: 'out of a magnet’s N pole, into its S pole', emoji: '🧭' },
                ],
              },
              { t: 'callout', kind: 'warn', title: 'The force is sideways', text: 'The magnetic force on a moving charge or a current is at right angles to both the field and the motion (use the right-hand rule). It is not along the field lines like the other two fields.' },
            ],
          },
          {
            id: 'examples',
            kicker: 'Worked examples',
            title: 'Force on a charge, and on a wire',
            blocks: [
              {
                t: 'steps',
                title: 'A proton in a magnetic field',
                given: 'A proton (charge 1.6 × 10⁻¹⁹ C) enters a region of uniform magnetic field 0.30 T at 2.0 × 10⁶ m s⁻¹, at right angles to the field.',
                steps: [
                  { line: 'F = q v B', why: 'rearrange B = F / (q v), valid when v is at right angles to B' },
                  { line: 'F = 1.6 × 10⁻¹⁹ × 2.0 × 10⁶ × 0.30', why: 'substitute SI values' },
                  { line: 'F = 9.6 × 10⁻¹⁴ N', why: 'sideways to both v and B, so it bends the path without changing the speed' },
                ],
                answer: '9.6 × 10⁻¹⁴ N',
              },
              {
                t: 'steps',
                title: 'Measuring B with a wire',
                given: 'A 0.10 m length of wire carries 3.0 A at right angles to a uniform magnetic field. The wire feels a force of 0.045 N. Find B.',
                steps: [
                  { line: 'B = F / (I L)', why: 'the wire definition of field strength' },
                  { line: 'B = 0.045 ÷ (3.0 × 0.10)', why: 'substitute' },
                  { line: 'B = 0.15 T', why: 'unit check: N A⁻¹ m⁻¹ = T' },
                ],
                answer: 'B = 0.15 T',
              },
            ],
          },
          {
            id: 'wires',
            kicker: 'Two wires',
            title: 'The force between parallel currents',
            blocks: [
              {
                t: 'formulas',
                items: [{ eq: 'F / L = μ_{0} I_{1} I_{2} / (2π r)', legend: ['F / L: force on each metre of either wire (N m⁻¹)', 'I_{1}, I_{2}: the two currents (A)', 'r: separation of the wires (m)', 'μ_{0} = 4π × 10⁻⁷ T m A⁻¹'] }],
              },
              {
                t: 'arrows',
                head: ['Currents', 'The wires'],
                rows: [
                  { from: 'in the SAME direction', to: 'attract', note: 'the opposite of like charges', emoji: '🧲' },
                  { from: 'in OPPOSITE directions', to: 'repel', emoji: '↔️' },
                ],
              },
              {
                t: 'steps',
                title: 'Force between two wires',
                given: 'Two long parallel wires are 0.050 m apart and each carries 10 A in the same direction. Find the force on each metre of wire.',
                steps: [
                  { line: 'F / L = μ_{0} I_{1} I_{2} / (2π r)', why: 'force per metre between parallel currents' },
                  { line: 'F / L = (4π × 10⁻⁷ × 10 × 10) ÷ (2π × 0.050)', why: 'substitute SI values' },
                  { line: 'F / L = 4.0 × 10⁻⁴ N m⁻¹', why: 'same direction, so the wires attract' },
                ],
                answer: '4.0 × 10⁻⁴ N m⁻¹, attractive, on each metre of each wire',
              },
              { t: 'callout', kind: 'note', title: 'Per metre', text: 'This formula gives the force per unit length. The force on a wire of length L is (F / L) × L. Each wire feels the same size force (Newton’s third law).' },
            ],
          },
          {
            id: 'myth',
            kicker: 'Misconception',
            title: 'Two ways to go wrong',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: '✗ Common mistakes', tone: 'warn', items: ['The magnetic force points along the field lines', 'Parallel currents in the same direction repel, like like charges'] },
                  { label: '✓ Better', items: ['The force is at right angles to the field and to the motion', 'Same direction: attract. Opposite directions: repel'] },
                ],
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'd3-c1', q: 'The tesla, the unit of magnetic field strength, is equivalent to…', options: ['N A⁻¹ m⁻¹', 'N A m', 'N A⁻¹ m'], answer: 0, why: 'B = F / (I L) gives N ÷ (A × m) = N A⁻¹ m⁻¹.', back: 'definition' },
      { t: 'check', id: 'd3-c2', q: 'A 0.25 m length of wire carries 4.0 A at right angles to a uniform magnetic field of 0.20 T. The force on the wire is…', options: ['0.20 N', '0.80 N', '3.2 N'], answer: 0, why: 'F = B I L = 0.20 × 4.0 × 0.25 = 0.20 N. The second option forgets the length.', back: 'examples' },
      { t: 'check', id: 'd3-c3', q: 'Two long parallel wires carry currents in opposite directions. The wires…', options: ['attract', 'repel', 'do not interact'], answer: 1, why: 'Currents in the same direction attract. In opposite directions they repel.', back: 'wires' },
      { t: 'check', id: 'd3-c4', q: 'Two long parallel wires carry fixed currents. The separation of the wires is doubled. The force per metre becomes…', options: ['half', 'one quarter', 'double'], answer: 0, why: 'F / L ∝ 1 / r (not 1 / r²). Doubling r halves the force per metre.', back: 'wires' },
      { t: 'check', id: 'd3-c5', q: 'An electron (charge 1.6 × 10⁻¹⁹ C) moves at 3.0 × 10⁶ m s⁻¹ at right angles to a magnetic field of 0.020 T. The magnetic force on it is…', options: ['9.6 × 10⁻¹⁵ N', '4.8 × 10⁻¹³ N', '9.6 × 10⁻¹³ N'], answer: 0, why: 'F = q v B = 1.6 × 10⁻¹⁹ × 3.0 × 10⁶ × 0.020 = 9.6 × 10⁻¹⁵ N.', back: 'examples' },
      { t: 'apply', id: 'd3-a1', prompt: 'Show that the definition of field strength B = F / (q v) becomes B = F / (I L) for a straight wire carrying current I, and explain what q v turns into.', model: 'In a wire of length L, a charge q passes in time t, so I = q / t and v = L / t. Then q v = (I t)(L / t) = I L, because t cancels. So B = F / (q v) = F / (I L): the force per unit current per unit length of wire, in tesla (N A⁻¹ m⁻¹).', checklist: ['I wrote I = q / t and v = L / t', 'I showed q v = I L (the time cancels)', 'I concluded B = F / (I L)', 'I gave the unit as N A⁻¹ m⁻¹ (tesla)'] },
      { t: 'retrieval', items: [{ from: 'D · 1', q: 'A moving charge creates which kind of field?', options: ['a magnetic field', 'only a gravitational field', 'no field'], answer: 0, why: 'A moving charge is a current, which makes a magnetic field.' }, { from: 'D · 2', q: 'The distance between two point charges is doubled. The electric force becomes…', options: ['one quarter', 'half', 'one eighth'], answer: 0, why: 'F ∝ 1 / r², so doubling r gives 1/4.' }] },
      { t: 'summary', points: ['A moving charge, that is a current, creates a magnetic field. B points the way the N pole of a compass points.', 'B = F / (q v) = F / (I L). The unit is the tesla, T = N A⁻¹ m⁻¹.', 'The magnetic force is at right angles to both B and the motion.', 'Parallel wires: F / L = μ₀ I₁ I₂ / (2πr). Same direction attract, opposite repel.'], terms: [{ term: 'Tesla', def: 'the unit of B: one newton per ampere per metre' }, { term: 'Current', def: 'charge moving per unit time, I = q / t' }], formulas: ['B = F / (q v)', 'B = F / (I L)', 'F / L = μ_{0} I_{1} I_{2} / (2π r)'], errors: ['Using F = B I L when the wire is not at right angles to the field.', 'Forgetting that the force between wires is per metre.', 'Thinking the magnetic force acts along the field lines.'] },
    ],
  },

  // ------------------------------------------------------------------ 4
  {
    slug: 'potential-energy-and-potential',
    code: 'D · 4',
    title: 'Potential energy and potential',
    blurb: 'Work done is stored energy. Divide by the mass or charge and you get potential.',
    syllabus: 'D.1 / D.2 · Gravitational and electric potential',
    level: 'SL+HL',
    difficulty: 3,
    minutes: 24,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'Lifting a box, stretching a spring and pushing two like charges together all store energy. Is there one idea that covers all three?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'work',
            kicker: 'Work and energy',
            title: 'Work done is stored as potential energy',
            blocks: [
              {
                t: 'arrows',
                head: ['Stored energy', 'How it gets there'],
                rows: [
                  { from: 'Gravitational PE (GPE)', to: 'work done lifting against gravity', emoji: '🏋️' },
                  { from: 'Elastic PE (EPE)', to: 'work done stretching the spring', emoji: '🌀' },
                ],
              },
              { t: 'formulas', items: [{ eq: 'WD = force × displacement (in the direction of the force)', legend: ['only for a CONSTANT force', 'for a force that changes, WD is the area under the force–displacement graph'] }] },
            ],
          },
          {
            id: 'spring',
            kicker: 'Try it',
            title: 'Area under a force–displacement graph',
            blocks: [
              {
                t: 'widget',
                id: 'spring-work-lab',
                title: 'Stretch a spring and shade the area',
                idea: 'Force grows with extension, F = kx. The shaded triangle is the work done.',
                predict: { q: 'Predict: you double the extension of a spring. The elastic energy stored becomes…', options: ['double', 'four times', 'half'], answer: 1, why: 'EPE = ½kx² and x is squared. Doubling x makes the energy 2² = 4 times bigger.' },
              },
              { t: 'note', text: 'Note: the area under a force–displacement graph = work done = change in energy. For a spring this is ½ × x × kx = ½kx².' },
            ],
          },
          {
            id: 'potential',
            kicker: 'Potential',
            title: 'Energy per kilogram, energy per coulomb',
            blocks: [
              {
                t: 'table',
                head: ['Stored energy', 'Divide by…', 'You get the potential'],
                rows: [
                  ['GPE (J)', 'the test mass m', 'gravitational potential V_{g} (J kg⁻¹)'],
                  ['EPE of a charge (J)', 'the test charge q', 'electric potential V (J C⁻¹, which is the volt)'],
                ],
                firstColHeader: true,
              },
              { t: 'def', term: 'Potential', text: 'The work done by an external force per unit mass (or per unit charge) in bringing a small test mass (or positive charge) from infinity to that point. It is zero at infinity.' },
            ],
          },
          {
            id: 'table',
            kicker: 'The four boxes',
            title: 'Potential and field strength together',
            blocks: [
              {
                t: 'table',
                head: ['', 'Gravitational', 'Electric'],
                rows: [
                  ['Potential: energy per unit…', 'V_{g} = WD / m = −GM / r', 'V = WD / q = kQ / r'],
                  ['Field strength: force per unit…', 'g = F / m = GM / r²', 'E = F / q = kQ / r²'],
                ],
                firstColHeader: true,
                note: 'Potential falls as 1 / r. Field strength falls as 1 / r². The sign of Q is carried in Q.',
              },
              { t: 'callout', kind: 'idea', title: 'Why gravitational potential is always negative', text: 'Gravity only attracts. To bring a mass in from infinity you must HOLD IT BACK, so the work you do is negative. Zero is at infinity, so everywhere closer is below zero. For +Q the work you do pushing a positive charge in is positive, so V = kQ / r is positive.' },
            ],
          },
          {
            id: 'diff',
            kicker: 'Potential difference',
            title: 'Volts are joules per coulomb',
            blocks: [
              {
                t: 'steps',
                title: 'Energy from a potential difference',
                given: 'In a circuit one point is at 6 V and another is at 12 V. A charge of 2.0 C is moved from the 6 V point to the 12 V point. How much work does an external agent do?',
                steps: [
                  { line: 'ΔV = 12 V − 6 V = 6 V', why: '6 V means 6 joules for every coulomb moved across' },
                  { line: 'WD = q ΔV', why: 'work done = charge × potential difference' },
                  { line: 'WD = 2.0 C × 6 V = 12 J', why: 'the charge ends with 12 J more electric potential energy' },
                ],
                answer: '12 J',
              },
            ],
          },
          {
            id: 'values',
            kicker: 'Worked examples',
            title: 'Earth, and a point charge',
            blocks: [
              {
                t: 'steps',
                title: 'Lifting a satellite from the ground to 400 km',
                given: 'A 1000 kg satellite is lifted from the Earth’s surface (r = 6.37 × 10⁶ m) to a height of 400 km (r = 6.77 × 10⁶ m). Earth mass M = 5.97 × 10²⁴ kg.',
                steps: [
                  { line: 'V_{g} (surface) = −GM / r = −6.25 × 10⁷ J kg⁻¹', why: 'potential at the starting point' },
                  { line: 'V_{g} (400 km) = −5.88 × 10⁷ J kg⁻¹', why: 'potential at 400 km, closer to zero' },
                  { line: 'ΔV_{g} = +3.69 × 10⁶ J kg⁻¹', why: 'each kilogram gains this much energy' },
                  { line: 'ΔE = m ΔV_{g} = 1000 × 3.69 × 10⁶ = 3.69 × 10⁹ J', why: 'energy gained by the satellite' },
                ],
                answer: '3.69 × 10⁹ J. (m g h with g = 9.81 would give 3.92 × 10⁹ J, about 6% too much, because g gets weaker with height.)',
              },
              {
                t: 'steps',
                title: 'Bringing a charge in from far away',
                given: 'A small sphere carries +2.0 μC. A test charge of +1.0 μC is brought from very far away to a point 0.30 m from the centre of the sphere.',
                steps: [
                  { line: 'V = kQ / r = 8.99 × 10⁹ × 2.0 × 10⁻⁶ ÷ 0.30', why: 'electric potential at 0.30 m' },
                  { line: 'V = 6.0 × 10⁴ V', why: 'positive, because Q is positive' },
                  { line: 'WD = q V = 1.0 × 10⁻⁶ × 6.0 × 10⁴ = 0.060 J', why: 'work done by the external agent, against the repulsion' },
                ],
                answer: 'V = 6.0 × 10⁴ V and WD = 0.060 J',
              },
            ],
          },
          {
            id: 'myth',
            kicker: 'Misconception',
            title: 'Potential is not potential energy',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: '✗ Common mistakes', tone: 'warn', items: ['Potential and potential energy are the same thing', 'Gravitational potential can be positive'] },
                  { label: '✓ Better', items: ['Potential is energy PER unit mass or charge. Energy = mass (or charge) × potential', 'V_{g} = −GM / r is negative everywhere, and zero only at infinity'] },
                ],
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'd4-c1', q: 'A spring (k = 40 N m⁻¹) is stretched from rest by 0.10 m. The elastic energy stored is…', options: ['0.20 J', '0.40 J', '4.0 J'], answer: 0, why: 'EPE = ½kx² = ½ × 40 × 0.10² = 0.20 J. The second option forgets the ½, and 4.0 is the force (kx) in newtons, not an energy.', back: 'spring' },
      { t: 'check', id: 'd4-c2', q: 'The area under a force–displacement graph represents…', options: ['work done', 'power', 'momentum'], answer: 0, why: 'Force × displacement is work, so the area under the graph is the work done (the energy transferred).', back: 'spring' },
      { t: 'check', id: 'd4-c3', q: 'The gravitational potential at a point is −6.0 × 10⁷ J kg⁻¹. The work needed to take a 2.0 kg mass from there to infinity is…', options: ['1.2 × 10⁸ J', '−1.2 × 10⁸ J', '3.0 × 10⁷ J'], answer: 0, why: 'The potential rises from −6.0 × 10⁷ to 0 J kg⁻¹, a gain of 6.0 × 10⁷ per kg. For 2.0 kg: 1.2 × 10⁸ J, positive because you must supply it.', back: 'table' },
      { t: 'check', id: 'd4-c4', q: 'The electric potential a distance r from a point charge +Q is V. At a distance 2r it is…', options: ['V / 2', 'V / 4', '2V'], answer: 0, why: 'V = kQ / r, so potential goes as 1 / r. Doubling r halves V. (The field strength E would fall to a quarter.)', back: 'table' },
      { t: 'check', id: 'd4-c5', q: 'Gravitational potential V_g = −GM / r is negative everywhere because…', options: ['gravity only attracts, and V is defined as zero at infinity', 'mass is a negative quantity', 'potential energy is measured downward from the floor'], answer: 0, why: 'Bringing a mass in from infinity needs negative work (you hold it back), so every point closer than infinity is below zero.', back: 'table' },
      { t: 'check', id: 'd4-c6', q: 'A charge of 3.0 C is moved from a point at 4.0 V to a point at 10 V. The work done by an external agent is…', options: ['18 J', '42 J', '2.0 J'], answer: 0, why: 'ΔV = 10 − 4.0 = 6.0 V. WD = qΔV = 3.0 × 6.0 = 18 J.', back: 'diff' },
      { t: 'apply', id: 'd4-a1', prompt: 'Explain the difference between gravitational potential energy and gravitational potential. Give the unit of each.', model: 'Gravitational potential energy is the energy a particular mass has because of its place in the field, in joules (J). Gravitational potential is the energy per unit mass at that place, V_g = WD / m = −GM / r, in J kg⁻¹. The potential energy of a mass m is E = m V_g. Potential belongs to the point in the field; potential energy depends on which mass you put there.', checklist: ['I said potential energy is in J and belongs to a particular mass', 'I said potential is the energy per unit mass, in J kg⁻¹', 'I linked them: energy = m × V_g', 'I said potential is a property of the point in the field'] },
      { t: 'retrieval', items: [{ from: 'D · 2', q: 'At a height equal to the Earth’s radius above its surface, g is about…', options: ['2.5 N kg⁻¹', '4.9 N kg⁻¹', '9.8 N kg⁻¹'], answer: 0, why: 'r = 2R from the centre, so g = 9.8 ÷ 4 ≈ 2.5 N kg⁻¹.' }, { from: 'D · 3', q: 'The tesla is equivalent to…', options: ['N A⁻¹ m⁻¹', 'N A m', 'N A⁻¹ m'], answer: 0, why: 'B = F / (I L).' }] },
      { t: 'summary', points: ['Work done = area under the force–displacement graph = energy change. For a spring EPE = ½kx².', 'Potential is energy per unit mass or charge, zero at infinity.', 'V_g = −GM / r (always negative). V = kQ / r (sign of Q).', 'Energy = mass × V_g, or charge × V. A potential difference of 1 V means 1 J per coulomb.'], terms: [{ term: 'Gravitational potential', def: 'energy per unit mass, zero at infinity, always negative' }, { term: 'Electric potential', def: 'energy per unit charge, V = kQ / r' }, { term: 'Volt', def: 'one joule per coulomb' }], formulas: ['EPE = ½kx²', 'V_{g} = −GM / r', 'V = kQ / r', 'WD = q ΔV'], errors: ['Using force × distance when the force is not constant.', 'Giving gravitational potential a positive sign.', 'Treating potential (per unit) as if it were the energy of the object.'] },
    ],
  },

  // ------------------------------------------------------------------ 5
  {
    slug: 'orbits-and-escape-speed',
    code: 'D · 5',
    title: 'Orbits and escape speed',
    blurb: 'Gravity as the centripetal force: orbital speed, period, the energy of a satellite, and how fast to leave for good.',
    syllabus: 'D.1 · Orbital motion, escape speed',
    level: 'HL',
    difficulty: 3,
    minutes: 28,
    access: 'free',
    blocks: [
      { t: 'hook', text: 'The International Space Station moves at 7.7 km every second and never hits the ground. Is it escaping gravity, or falling?' },
      {
        t: 'deck',
        slides: [
          {
            id: 'speed',
            kicker: 'Orbital motion',
            title: 'Gravity is the centripetal force',
            blocks: [
              {
                t: 'steps',
                title: 'Orbital speed of a satellite',
                given: 'A satellite of mass m moves at constant speed v in a circle of radius r (measured from the centre) around a planet of mass M.',
                steps: [
                  { line: 'GMm / r² = mv² / r', why: 'gravity is the only force, so it provides the centripetal force m v² / r' },
                  { line: 'GM / r = v²', why: 'cancel m and one factor of r' },
                  { line: 'v = √(GM / r)', why: 'take the square root' },
                ],
                answer: 'v = √(GM / r). It does not depend on the satellite’s mass.',
              },
              { t: 'note', text: 'The acceleration of an object in circular motion is a = v² / r, directed to the centre. Here it equals g = GM / r², the field strength at that radius.' },
            ],
          },
          {
            id: 'lab',
            kicker: 'Try it',
            title: 'Change the orbit',
            blocks: [
              {
                t: 'widget',
                id: 'orbit-lab',
                title: 'Move the satellite higher and lower',
                idea: 'Watch the speed, the period and the three energies as the orbital radius changes.',
                predict: { q: 'Predict: a satellite is moved to a larger orbit around the same planet. Its orbital speed will…', options: ['increase', 'decrease', 'stay the same'], answer: 1, why: 'v = √(GM / r). A larger r gives a smaller v: higher satellites move more slowly.' },
              },
            ],
          },
          {
            id: 'period',
            kicker: 'Period',
            title: 'Kepler’s third law',
            blocks: [
              {
                t: 'steps',
                title: 'From speed to period',
                given: 'The same satellite goes once round in a period T.',
                steps: [
                  { line: 'v = 2πr / T', why: 'one orbit is a distance 2πr' },
                  { line: '(2πr / T)² = GM / r', why: 'put it into v² = GM / r' },
                  { line: 'T² = 4π² r³ / (GM)', why: 'rearrange' },
                  { line: 'T² ∝ r³, or T = k r^{3/2}', why: '4π² / GM is a constant for a given planet' },
                ],
                answer: 'T² = 4π² r³ / (GM), so r³ ∝ T²',
              },
              {
                t: 'steps',
                title: 'The International Space Station',
                given: 'The ISS orbits at r = 6.78 × 10⁶ m from the centre of the Earth (about 400 km above the surface).',
                steps: [
                  { line: 'v = √(GM / r) = √(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ ÷ 6.78 × 10⁶)', why: 'orbital speed' },
                  { line: 'v = 7.66 × 10³ m s⁻¹', why: 'about 7.7 km per second' },
                  { line: 'T = 2πr / v = 5.56 × 10³ s ≈ 93 minutes', why: 'about 15 orbits a day' },
                ],
                answer: 'v = 7.66 km s⁻¹ and T ≈ 93 minutes. Gravity at that height is g = 8.7 N kg⁻¹, 88% of its surface value.',
              },
            ],
          },
          {
            id: 'energy',
            kicker: 'Energy of a satellite',
            title: 'KE, GPE and total energy',
            blocks: [
              {
                t: 'arrows',
                head: ['Energy', 'Circular orbit, radius r'],
                rows: [
                  { from: 'Kinetic, KE = ½mv²', to: '+GMm / 2r', note: 'use v² = GM / r. Call GMm / r one unit: KE is +½ unit', emoji: '💨' },
                  { from: 'Gravitational PE', to: '−GMm / r', note: '−1 unit. Negative: it is an attractive system, PE is below zero at infinity', emoji: '⬇️' },
                  { from: 'Total, TE = KE + GPE', to: '−GMm / 2r', note: '−½ unit: the same size as KE but negative, so TE = −KE', emoji: '➕' },
                ],
              },
              {
                t: 'steps',
                title: 'Energies of a research satellite',
                given: 'A 500 kg satellite is in a circular orbit of radius 6.78 × 10⁶ m around the Earth.',
                steps: [
                  { line: 'KE = GMm / 2r = +1.47 × 10¹⁰ J', why: 'half of GMm / r' },
                  { line: 'GPE = −GMm / r = −2.94 × 10¹⁰ J', why: 'twice the size of KE, and negative' },
                  { line: 'TE = KE + GPE = −1.47 × 10¹⁰ J', why: 'to escape it must gain +1.47 × 10¹⁰ J to reach TE = 0' },
                ],
                answer: 'KE = +1.47 × 10¹⁰ J, GPE = −2.94 × 10¹⁰ J, TE = −1.47 × 10¹⁰ J',
              },
            ],
          },
          {
            id: 'escape',
            kicker: 'Escape speed',
            title: 'Enough kinetic energy to bring the total to zero',
            blocks: [
              { t: 'def', term: 'Escape speed', text: 'The minimum launch speed at which an object, with no further propulsion, can get infinitely far from a planet: its kinetic energy must cancel its (negative) gravitational potential energy, so that its total energy is zero.' },
              {
                t: 'steps',
                title: 'Escape speed from the Earth’s surface',
                given: 'A probe of mass m is launched from the surface of the Earth (radius R = 6.37 × 10⁶ m). Ignore air resistance and the Earth’s rotation.',
                steps: [
                  { line: 'KE + GPE = 0', why: 'it just reaches infinity (with zero speed there), so the total energy is zero' },
                  { line: '½ m v² − GMm / R = 0', why: 'KE plus the (negative) GPE' },
                  { line: 'v_{esc} = √(2GM / R)', why: 'solve for v; m cancels' },
                  { line: 'v_{esc} = 1.12 × 10⁴ m s⁻¹', why: 'about 11 km per second' },
                ],
                answer: '1.12 × 10⁴ m s⁻¹ (about 11 km s⁻¹), the same for any mass',
              },
              {
                t: 'pills',
                groups: [
                  { label: 'Escape speed and orbital speed', items: ['v_{esc} = √2 × v_{orbit} at the same radius', 'twice the kinetic energy gives √2 ≈ 1.4 times the speed', 'just above the Earth: orbit 7.9 km s⁻¹, escape 11.2 km s⁻¹'] },
                ],
              },
            ],
          },
          {
            id: 'myth',
            kicker: 'Misconception',
            title: 'Astronauts are not beyond gravity',
            blocks: [
              {
                t: 'pills',
                groups: [
                  { label: '✗ Common mistake', tone: 'warn', items: ['There is no gravity on the ISS, that is why astronauts float', 'A satellite in orbit has escaped the Earth'] },
                  { label: '✓ Better', items: ['Gravity is 88% as strong there. It provides the centripetal force', 'The station and the astronauts are in free fall together, so nothing pushes on them: apparent weightlessness', 'In orbit the total energy is still NEGATIVE'] },
                ],
              },
            ],
          },
        ],
      },
      { t: 'check', id: 'd5-c1', q: 'A satellite moves in a circular orbit of radius r around a planet of mass M. Its orbital speed is…', options: ['√(GM / r)', 'GM / r', '√(GM r)'], answer: 0, why: 'Gravity provides the centripetal force: GMm / r² = mv² / r, so v² = GM / r.', back: 'speed' },
      { t: 'check', id: 'd5-c2', q: 'A satellite is moved from an orbit of radius r to an orbit of radius 4r around the same planet. Its orbital speed becomes…', options: ['half', 'one quarter', 'double'], answer: 0, why: 'v ∝ 1 / √r. With r × 4, v is divided by √4 = 2.', back: 'speed' },
      { t: 'check', id: 'd5-c3', q: 'Satellite A orbits a planet at radius r with period T. Satellite B orbits the same planet at radius 4r. The period of B is…', options: ['2T', '8T', '16T'], answer: 1, why: 'T² ∝ r³, so T ∝ r^(3/2). With r × 4: 4^(3/2) = 8, so the period is 8T.', back: 'period' },
      { t: 'check', id: 'd5-c4', q: 'A satellite of mass m moves in a circular orbit of radius r around a planet of mass M. Its total energy is…', options: ['−GMm / 2r', '+GMm / 2r', '−GMm / r'], answer: 0, why: 'KE = +GMm / 2r and GPE = −GMm / r. Their sum is −GMm / 2r.', back: 'energy' },
      { t: 'check', id: 'd5-c5', q: 'The escape speed from the surface of a planet of mass M and radius R is…', options: ['√(2GM / R)', '√(GM / R)', '2GM / R'], answer: 0, why: 'Set ½mv² = GMm / R. The mass of the probe cancels.', back: 'escape' },
      { t: 'check', id: 'd5-c6', q: 'A 500 kg research satellite is in low Earth orbit at radius 6.78 × 10⁶ m. Its kinetic energy is about…', options: ['1.5 × 10¹⁰ J', '2.9 × 10¹⁰ J', '7.3 × 10⁹ J'], answer: 0, why: 'KE = GMm / 2r = 1.47 × 10¹⁰ J. The second option is the size of the GPE, and the third is half the KE.', back: 'energy' },
      { t: 'check', id: 'd5-c7', q: 'The escape speed from a moon is 12 km s⁻¹. A probe moves in a circular orbit just above its surface. Its orbital speed is about…', options: ['8.5 km s⁻¹', '6.0 km s⁻¹', '17 km s⁻¹'], answer: 0, why: 'v_esc = √2 × v_orbit at the same radius, so v_orbit = 12 ÷ 1.41 = 8.5 km s⁻¹.', back: 'escape' },
      { t: 'apply', id: 'd5-a1', prompt: 'An astronaut on the ISS says: “There is no gravity up here, that is why I float.” Use the ideas of this lesson to explain what is wrong.', model: 'At the ISS orbit the field strength is g = GM / r² ≈ 8.7 N kg⁻¹, about 88% of its value at the surface, so gravity is almost as strong. It is gravity that provides the centripetal force, GMm / r² = mv² / r, keeping the station in orbit. The astronaut and the station are both in free fall with the same acceleration, so the floor does not push on the astronaut. That feels like weightlessness, but gravity has not gone away.', checklist: ['I said gravity is still strong there (about 8.7 N kg⁻¹)', 'I said gravity provides the centripetal force', 'I said the astronaut and station fall together (free fall)', 'I explained that no contact force means apparent weightlessness'] },
      { t: 'retrieval', items: [{ from: 'D · 4', q: 'Gravitational potential V_g = −GM / r is…', options: ['negative everywhere, zero at infinity', 'positive everywhere', 'zero at the surface'], answer: 0, why: 'Gravity only attracts and V_g is defined as zero at infinity.' }, { from: 'D · 2', q: 'The distance to a mass is doubled. The field strength g becomes…', options: ['one quarter', 'half', 'double'], answer: 0, why: 'g = GM / r² ∝ 1 / r².' }] },
      { t: 'summary', points: ['Gravity provides the centripetal force: v = √(GM / r), independent of the satellite’s mass.', 'T² = 4π² r³ / (GM), so r³ ∝ T² (Kepler’s third law).', 'KE = GMm / 2r, GPE = −GMm / r, TE = −GMm / 2r = −KE.', 'Escape speed v = √(2GM / R) makes the total energy zero. It is √2 times the orbital speed at that radius.'], terms: [{ term: 'Orbital radius', def: 'distance from the centre of the planet to the satellite' }, { term: 'Escape speed', def: 'the minimum launch speed to reach infinity with no more propulsion' }, { term: 'Free fall', def: 'motion under gravity alone, which feels weightless' }], formulas: ['v = √(GM / r)', 'T² = 4π² r³ / (GM)', 'TE = −GMm / 2r', 'v_{esc} = √(2GM / R)'], errors: ['Using the height above the surface as the orbital radius.', 'Thinking a faster satellite must be in a higher orbit.', 'Giving a bound satellite a positive total energy.'] },
    ],
  },
]

export const D_FIELDS: Module = {
  slug: 'd-fields',
  code: 'D',
  title: 'Fields',
  theme: 'Theme D · Fields',
  source: 'Classes 34 to 36 · fields, potential and orbits',
  intro: 'Where gravitational, electric and magnetic fields come from; field strength; Newton’s law of gravitation and Coulomb’s law; magnetic field strength and currents; potential energy and potential; and circular orbits with escape speed.',
  lessons,
}
