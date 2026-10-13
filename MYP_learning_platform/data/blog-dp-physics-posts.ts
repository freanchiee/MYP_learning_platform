// SEO blog posts for the DP Physics lessons (A.1 projectile motion and relative velocity, Theme D fields).
// All content is original, written for CritABCD. Every number here is the one the lessons use, and each is
// recomputed in scripts/test-learn-physics.mjs. The exam-style problems are described in our own words and
// our own figures; they are not copies of any exam paper.

import type { BlogPost } from './blog'

const DATE = '2026-10-13'
const L = '/dp-physics/a1-kinematics'
const D = '/dp-physics/d-fields'

export const DP_PHYSICS_POSTS: BlogPost[] = [
  // ---------------------------------------------------------------- 1
  {
    slug: 'projectile-motion-horizontal-vertical-independence-ib-physics',
    seoTitle: 'Independence of Horizontal & Vertical Motion',
    title: 'Independence of Horizontal and Vertical Motion: Why Two Balls Land Together (IB Physics)',
    description: 'Why a dropped ball and a ball thrown sideways land together. Projectile motion with the two-axis method, worked numbers and a free game.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['DP Physics', 'Physics', 'Kinematics'],
    intro: 'Drop one ball and throw another sideways from the same height at the same moment. Which lands first? Almost everyone guesses the dropped one, and almost everyone is wrong. The two balls land together, and the reason is the single most useful idea in projectile motion: horizontal and vertical motion are independent.',
    sections: [
      {
        heading: 'The experiment that surprises everyone',
        body: [
          'Ball A is released from rest. Ball B leaves the same height at the same instant, but it is thrown horizontally. B travels a long way sideways, so it feels as though it must be in the air longer. It is not. Film them side by side and the two balls are at the same height in every frame, right down to the ground.',
        ],
      },
      {
        heading: 'Why it works: two separate motions',
        body: [
          'Gravity pulls straight down. It does nothing sideways. So the motion splits cleanly into two parts that never interfere with each other.',
        ],
        bullets: [
          'Horizontal motion: no force, so acceleration a = 0 and the velocity stays constant. Distance is simply s = ut.',
          'Vertical motion: gravity only, so a = g downward. A ball released horizontally has zero initial vertical velocity, the same as a ball that is just dropped.',
          'The only thing the two motions share is time. The same clock runs for both axes. That is how you connect them: find the time from one axis, then use it in the other.',
        ],
      },
      {
        heading: 'The equations you need',
        bullets: [
          'Horizontal: s = ut (constant velocity).',
          'Vertical, starting from rest vertically: s = ½gt², v = gt, v² = 2gs.',
          'Combine the two parts of a vector with Pythagoras, because horizontal and vertical are at right angles: resultant = √(x² + y²).',
        ],
      },
      {
        heading: 'Worked example (take g = 10 m/s²)',
        body: [
          'Two small balls start together from a height of 50 m. A is dropped. B is projected horizontally at 5 m/s. Air resistance is negligible.',
          'Q1, the time for A to land: use s = ut + ½at² with u = 0. 50 = ½ × 10 × t², so t² = 10 and t = √10 = 3.16 s.',
          'Q2, how far across B lands: B takes the same 3.16 s, and horizontal motion is uniform, so R = 5 × 3.16 = 15.8 m.',
          'Q3, the displacement of B from start to landing: the horizontal part is 15.8 m and the vertical part is 50 m, at right angles. d = √(15.8² + 50²) = √2750 = 52.4 m, at about 72.5° below the horizontal.',
        ],
      },
      {
        heading: 'Common mistakes',
        bullets: [
          'Thinking the thrown ball falls more slowly because it is moving sideways. Sideways speed changes where it lands, not when.',
          'Using the horizontal speed in the vertical equation, or the other way round.',
          'Giving the length of the curved path when the question asks for displacement, which is the straight line from start to landing.',
          'Writing the horizontal acceleration as g. It is zero when air resistance is ignored.',
        ],
      },
      {
        heading: 'Try it: drop, throw and play',
        body: [
          'Our free DP Physics lesson on independence of motion has an animation of this exact problem where you can change the speed and the height, a worked solution for all three questions, and a "supply drop" game where you decide when to release a crate so that it lands on a target. The key to winning is the same two steps as above: find the time to fall, then the distance travelled sideways in that time.',
        ],
      },
    ],
    faq: [
      { q: 'Do a dropped ball and a ball thrown sideways land at the same time?', a: 'Yes, if air resistance is negligible and they start from the same height. The time to fall depends only on the height and g, because gravity acts only vertically and both balls start with zero vertical velocity.' },
      { q: 'What does independence of horizontal and vertical motion mean?', a: 'It means the horizontal motion (constant velocity) and the vertical motion (constant acceleration g) do not affect each other. You can solve them separately and link them only through the time.' },
      { q: 'Which equation gives the time of fall for a horizontal launch?', a: 'Use s = ut + ½at² on the vertical axis with u = 0, which gives t = √(2h / g). For 50 m and g = 10 m/s² that is 3.16 s.' },
      { q: 'Does air resistance change this result?', a: 'In real life it does slightly, which is why a feather and a stone differ. In IB Physics projectile problems air resistance is stated to be negligible, so the result holds exactly.' },
    ],
    related: [
      { label: 'Free lesson: independence of motion', href: `${L}/independence-of-motion` },
      { label: 'Worked example: parcel from an aircraft', href: '/blog/projectile-motion-parcel-dropped-from-aircraft-worked-example' },
      { label: 'IB Physics formula sheet', href: '/dp-physics/formulas' },
      { label: 'Scalars vs vectors', href: '/blog/scalars-vectors-si-units-myp-physics' },
    ],
  },

  // ---------------------------------------------------------------- 2
  {
    slug: 'projectile-motion-parcel-dropped-from-aircraft-worked-example',
    seoTitle: 'Parcel Dropped From an Aircraft: Worked Solution',
    title: 'Parcel Dropped From an Aircraft: A Step-by-Step Projectile Motion Solution (IB Physics)',
    description: 'A classic projectile motion problem solved step by step: a parcel released from a level-flying aircraft. Time, vertical speed and landing speed.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['DP Physics', 'Physics', 'Kinematics'],
    intro: 'A parcel released from a level-flying aircraft is one of the most common projectile motion questions. It asks for the path, the time to land, the vertical speed and the landing speed. Here is the whole thing solved step by step, including the rounding slip that quietly costs marks.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'A small aircraft flies horizontally at 42 m/s at a height of 63 m above level ground. It releases a small parcel. Air resistance is negligible. Take g = 9.8 m/s². Find: (i) the path of the parcel, (ii) the time to reach the ground, (iii) the vertical component of its velocity just before landing, (iv) its speed on landing.',
          'This is an exam-style problem described in our own words with our own numbers worked from it, not a copy of any paper.',
        ],
      },
      {
        heading: 'Part (i): sketch the path',
        body: [
          'The path starts horizontal, because at release the parcel is moving only at 42 m/s along the flight direction. It then curves downward, getting steeper, and lands ahead of the release point. It is a curve (a parabola), not a straight line down and not a straight slope.',
        ],
      },
      {
        heading: 'Part (ii): time to reach the ground',
        body: [
          'Use the vertical axis only. The initial vertical velocity is 0 because the aircraft is level, and the acceleration is g = 9.8 m/s² downward.',
          's = ut + ½at² gives 63 = ½ × 9.8 × t². So 63 = 4.9t², t² = 12.86 and t = 3.59 s (about 3.6 s). The aircraft speed of 42 m/s was not needed. Horizontal speed never changes how long it takes to fall.',
        ],
      },
      {
        heading: 'Part (iii): vertical speed just before landing',
        body: [
          'v = u + at on the vertical axis: v_y = 0 + 9.8 × 3.586 = 35.1 m/s downward. A quick check that does not need the time: v_y = √(2gh) = √(2 × 9.8 × 63) = 35.1 m/s.',
        ],
      },
      {
        heading: 'Part (iv): speed on landing',
        body: [
          'The horizontal component is still 42 m/s, because nothing acted sideways. The two components are at right angles, so use Pythagoras: speed = √(42² + 35.1²) = 54.7 m/s, at about 40° below the horizontal.',
          'You can check it with energy. The gravitational potential energy lost equals the kinetic energy gained, so v² = 42² + 2 × 9.8 × 63 = 2998.8, which gives 54.8 m/s. The mass cancels, so a heavier parcel lands at the same speed.',
        ],
      },
      {
        heading: 'The rounding trap',
        body: [
          'If you round the time to 3.6 s and then use it again, you get v_y = 9.8 × 3.6 = 35.3 m/s instead of 35.1 m/s. The 54.7 and 54.8 m/s answers differ for a similar reason: 35.1 was rounded before squaring. The habit that protects your marks is to keep the unrounded value in the calculator and round only the final answer.',
        ],
      },
      {
        heading: 'Where is the aircraft when the parcel lands?',
        body: [
          'If the aircraft carries on at a steady 42 m/s and air resistance is ignored, it is directly above the parcel all the way down, because both have the same horizontal velocity. The parcel lands about 42 × 3.586 = 151 m ahead of where it was released.',
        ],
      },
    ],
    faq: [
      { q: 'Does the speed of the aircraft affect how long the parcel takes to fall?', a: 'No. The time of fall depends only on the height and g. A faster aircraft makes the parcel land further away, not later.' },
      { q: 'How do you find the landing speed of a projectile?', a: 'Find the horizontal and vertical components just before landing, then combine them with Pythagoras: speed = √(v_x² + v_y²). You can check it with energy: v² = u² + 2gh for a horizontal launch.' },
      { q: 'Why do I get 54.7 m/s and the answer key says 54.8 m/s?', a: 'Rounding. If you round the vertical speed to 35.1 m/s before squaring you get 54.7 m/s; with unrounded values you get 54.8 m/s. Both round to 55 m/s, so keep extra digits in the working.' },
      { q: 'Where is the aircraft relative to the parcel as it falls?', a: 'Directly above it, because the aircraft and the parcel keep the same horizontal velocity when air resistance is ignored.' },
    ],
    related: [
      { label: 'Free lesson: parcel from an aircraft, with animation', href: `${L}/exam-questions-three` },
      { label: 'Independence of horizontal and vertical motion', href: '/blog/projectile-motion-horizontal-vertical-independence-ib-physics' },
      { label: 'Ball thrown over a wall (angled launch)', href: '/blog/projectile-motion-over-a-wall-will-it-clear-worked-solution' },
    ],
  },

  // ---------------------------------------------------------------- 3
  {
    slug: 'projectile-motion-over-a-wall-will-it-clear-worked-solution',
    seoTitle: 'Ball Over a Wall: Will It Clear? Worked Solution',
    title: 'Ball Thrown Over a Wall: Will It Clear, How Far Away, How High? (Projectile Motion at an Angle)',
    description: 'Projectile motion at an angle: resolve the velocity, find the time, then the height. Will it clear the wall? Includes a free editable simulator.',
    datePublished: DATE,
    readMinutes: 9,
    tags: ['DP Physics', 'Physics', 'Kinematics'],
    intro: 'A ball is thrown at an angle toward a wall. Will it get over? How far away could the wall be and still be cleared? If it does not clear, how high up the wall does it hit? These three questions look different but are answered with the same method: resolve the velocity, find the time from the horizontal motion, then find the height from the vertical motion.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'A student throws a ball from a height of 1.2 m above level ground with a speed of 22 m/s at 40° above the horizontal, toward a vertical wall 36 m away. Air resistance is negligible. Take g = 9.81 m/s². The ball just goes over the wall. Find the height of the wall. (An exam-style problem in our own words, not a copy of a paper.)',
        ],
      },
      {
        heading: 'Step 1: choose signs and resolve the velocity',
        body: [
          'Take up as positive, so the vertical acceleration is −9.81 m/s² and the horizontal acceleration is 0.',
          'Horizontal component: u_x = 22 cos 40° = 16.85 m/s. Vertical component: u_y = 22 sin 40° = 14.14 m/s. The vertical component is the one you will be asked for first, and it is the initial vertical velocity, not the speed 22 m/s.',
        ],
      },
      {
        heading: 'Step 2: time to reach the wall (horizontal axis)',
        body: [
          'Horizontally the motion is uniform, so time = distance ÷ speed: t = 36 ÷ 16.85 = 2.136 s.',
        ],
      },
      {
        heading: 'Step 3: height at the wall (vertical axis)',
        body: [
          'Use s = ut + ½at² vertically: s = 14.14 × 2.136 − ½ × 9.81 × 2.136² = 30.21 − 22.38 = 7.83 m above the launch point.',
          'The ball started 1.2 m above the ground, so the height above the ground is 7.83 + 1.2 = 9.03 m. If the ball only just goes over the wall, the wall is 9.0 m high.',
        ],
      },
      {
        heading: 'The rounding trap: 9.0 m or 9.3 m?',
        body: [
          'Round the time to 2.1 s and the same calculation gives 14.14 × 2.1 − 4.905 × 2.1² = 8.1 m, so 9.3 m. Using 2.136 s gives 9.0 m. The answers differ by 0.3 m because near the wall the ball is already falling at about 6.8 m/s, so a 0.036 s error in the time moves the height by about 0.25 m. Keep the unrounded time in your calculator and round only at the end.',
        ],
      },
      {
        heading: 'Three ways the question can end',
        bullets: [
          'Will it clear the wall? Find the height of the ball at the wall (t = d ÷ u_x, then y = y₀ + u_y t − ½gt²) and compare it with the wall height. For this throw, a wall of 8 m is cleared by 1.03 m.',
          'How far should the wall be so the ball only just clears it? Solve y = wall height for t. That is a quadratic, with two answers: the ball is at that height once going up and once coming down. The later time gives the farthest wall that is still just cleared. For an 8 m wall that is d = 38.3 m, and any wall from 10.3 m to 38.3 m away is cleared.',
          'How high up the wall does it hit? If the wall is taller than the ball is at that distance, the ball hits at the height y you calculated. With a 12 m wall at 36 m, it hits 9.03 m up, 2.97 m below the top.',
        ],
      },
      {
        heading: 'Quick sense checks',
        bullets: [
          'Highest point: y₀ + u_y² ÷ 2g = 1.2 + 14.14² ÷ 19.62 = 11.4 m. A wall taller than that can never be cleared at any distance.',
          'Range: the ball comes back to the ground about 50.0 m from the thrower, so a wall farther than that is never reached.',
          'The ball is at the top of its flight when its vertical velocity is zero, after u_y ÷ g = 1.44 s.',
        ],
      },
    ],
    faq: [
      { q: 'How do you find the time for a projectile launched at an angle?', a: 'Use the horizontal axis if you know the horizontal distance: t = d ÷ (u cos θ). If you need the time to land, solve the vertical equation y = 0, which is a quadratic in t.' },
      { q: 'How do you know if a ball clears a wall?', a: 'Calculate the ball’s height at the wall’s horizontal distance. If that height is greater than or equal to the wall height, it clears; if it is less, it hits the wall at that height.' },
      { q: 'Why are there two times when the ball is at the same height?', a: 'The ball rises through a given height on the way up and passes it again on the way down. Both give valid answers to the quadratic. A wall anywhere between those two positions is cleared.' },
      { q: 'Which value of g should I use, 9.8, 9.81 or 10?', a: 'Use the value your question or data booklet gives. The method is identical, but the numbers differ slightly, so do not mix values within one solution.' },
    ],
    related: [
      { label: 'Free lesson with an editable simulator', href: `${L}/exam-questions-four` },
      { label: 'Parcel dropped from an aircraft', href: '/blog/projectile-motion-parcel-dropped-from-aircraft-worked-example' },
      { label: 'IB Physics formula sheet', href: '/dp-physics/formulas' },
    ],
  },

  // ---------------------------------------------------------------- 4
  {
    slug: 'crosswind-landing-relative-velocity-vector-addition-physics',
    seoTitle: 'Crosswind Landing: Relative Velocity Explained',
    title: 'Landing a Plane in a Crosswind: Relative Velocity and Vector Addition Explained (IB Physics)',
    description: 'Why pilots point the nose into the wind. Relative velocity worked through with a 200 km/h aircraft in a 50 km/h crosswind, plus a free landing game.',
    datePublished: DATE,
    readMinutes: 7,
    tags: ['DP Physics', 'Physics', 'Kinematics'],
    intro: 'To fly straight down a runway in a crosswind, a pilot does not point the nose along the runway. The nose has to point into the wind, and the amount can be worked out with a right-angled triangle. This is relative velocity, and it is a clean example of why velocities add as vectors.',
    sections: [
      {
        heading: 'The big idea: velocities add as vectors',
        body: [
          'An aircraft moves through the air, and the air itself moves over the ground. So the velocity of the aircraft over the ground is the velocity through the air plus the velocity of the air: v(ground) = v(air) + v(wind). Draw the two vectors head to tail and their sum is the third side of the triangle, the velocity you really have over the ground.',
        ],
      },
      {
        heading: 'The problem',
        body: [
          'An aircraft has an airspeed of 200 km/h. A steady 50 km/h wind blows across the runway, at right angles to it. The pilot wants the aircraft to move straight along the runway. At what angle must the nose point, and how fast does the aircraft move along the runway?',
        ],
      },
      {
        heading: 'The solution',
        bullets: [
          'For no sideways drift, the sideways part of the aircraft’s velocity through the air must cancel the wind: V sin θ = W.',
          'sin θ = 50 ÷ 200 = 0.25, so θ = sin⁻¹(0.25) = 14.5°. The nose points 14.5° into the wind. Pilots call this the crab angle.',
          'The 200 km/h airspeed is the hypotenuse, so the speed along the runway is √(200² − 50²) = 193.6 km/h. It is a little less than the airspeed because part of it is used to fight the wind.',
        ],
      },
      {
        heading: 'What happens if you ignore the wind',
        body: [
          'Point the nose straight down the runway and the aircraft keeps its 200 km/h along the runway but also drifts sideways at 50 km/h. Over a 4 km approach, which takes 4 ÷ 200 = 0.02 hours or 72 s, the drift is 50 × 72 ÷ 3600 = 1.0 km. That is far off the runway.',
        ],
      },
      {
        heading: 'Same method, a different river',
        body: [
          'A swimmer can swim at 1.5 m/s in still water and wants to cross a river straight across. The river flows at 0.60 m/s. The swimmer’s own speed is the hypotenuse again: sin θ = 0.60 ÷ 1.5 = 0.40, so θ = 23.6° upstream, and the speed across is √(1.5² − 0.60²) = 1.4 m/s. Aircraft in wind and swimmers in rivers are the same problem.',
        ],
      },
      {
        heading: 'How to choose sin, cos or tan',
        body: [
          'Always draw the triangle first and ask which side you know. In the crosswind problem the airspeed (the longest side) is known, so the angle comes from sin θ = W ÷ V. In the umbrella problem (see the related post) the rain speed is a shorter side, so the angle comes from tan θ = W ÷ v. Same method, different triangle.',
        ],
      },
      {
        heading: 'Common mistakes',
        bullets: [
          'Pointing the nose at the destination in a crosswind.',
          'Adding the speeds instead of using Pythagoras for vectors at right angles.',
          'Using the airspeed as one leg of the triangle when it is the hypotenuse.',
        ],
      },
    ],
    faq: [
      { q: 'Why do pilots point the nose into the wind in a crosswind?', a: 'The wind adds a sideways velocity to the aircraft. Pointing the nose into the wind gives the aircraft an equal and opposite sideways part of its own velocity, so the sum points straight along the runway.' },
      { q: 'How do you calculate the crab angle?', a: 'sin θ = wind speed ÷ airspeed, when the wind is at right angles to the desired track. For 50 km/h and 200 km/h, θ = 14.5°.' },
      { q: 'Is ground speed the same as airspeed?', a: 'No. Airspeed is the speed through the air. Ground speed is the speed over the ground, which is the vector sum of the airspeed and the wind, so it is generally different.' },
      { q: 'What is relative velocity?', a: 'The velocity of one object as seen from another: v(A relative to B) = v(A) − v(B). The ground velocity of an aircraft is its velocity relative to the ground.' },
    ],
    related: [
      { label: 'Free lesson with a crosswind landing game', href: `${L}/vector-addition-crosswind-umbrella` },
      { label: 'Why you tilt an umbrella forward in rain', href: '/blog/umbrella-rain-walking-relative-velocity-physics-explained' },
      { label: 'Stellar aberration explained', href: '/blog/stellar-aberration-explained-speed-of-light-bradley' },
      { label: 'Scalars vs vectors', href: '/blog/scalars-vectors-si-units-myp-physics' },
    ],
  },

  // ---------------------------------------------------------------- 5
  {
    slug: 'umbrella-rain-walking-relative-velocity-physics-explained',
    seoTitle: 'Why You Tilt an Umbrella Forward in Rain',
    title: 'Why Do You Tilt an Umbrella Forward When Walking in Rain? The Physics of Relative Velocity',
    description: 'Rain falls straight down, so why does it hit you from the front? Relative velocity explained with numbers: tan θ = walking speed ÷ rain speed.',
    datePublished: DATE,
    readMinutes: 6,
    tags: ['DP Physics', 'Physics', 'Kinematics'],
    intro: 'On a windless day the rain falls straight down. Yet when you walk, it hits you in the face and you tilt your umbrella forward. Nothing about the rain changed. What changed is the frame of reference: you are moving. This is relative velocity, and the lean angle is a one-line calculation.',
    sections: [
      {
        heading: 'Two points of view',
        body: [
          'Someone standing still on the pavement sees the rain falling vertically. You, walking forward, see the same raindrops coming at you from in front and above. Both are correct, because velocity depends on who is measuring it.',
        ],
      },
      {
        heading: 'The rule for relative velocity',
        body: [
          'The velocity of the rain relative to you is the rain’s velocity minus your velocity: v(rain relative to you) = v(rain) − v(you). Taking away your forward velocity leaves the rain with a backward component. So from your point of view the rain moves down and backward, which means it comes from the front.',
        ],
      },
      {
        heading: 'Worked example',
        body: [
          'Rain falls vertically at 8 m/s. A person walks at 2 m/s. In the walker’s frame the rain has components 8 m/s down and 2 m/s backward.',
          'The angle from the vertical satisfies tan θ = 2 ÷ 8 = 0.25, so θ = 14.0°. The umbrella shaft should lean forward by 14.0°, pointing toward where the rain seems to come from. The speed at which the rain meets the walker is √(8² + 2²) = 8.25 m/s.',
        ],
      },
      {
        heading: 'How the lean changes with speed',
        body: ['With the same 8 m/s rain, tan θ = walking speed ÷ 8, so the lean grows as you speed up:'],
        bullets: [
          'Stroll at 1.5 m/s: lean 10.6° forward.',
          'Walk at 2 m/s: lean 14.0°.',
          'Brisk walk at 3 m/s: lean 20.6°.',
          'Jog at 5 m/s: lean 32.0°.',
          'Standing still (0 m/s): no lean at all.',
        ],
      },
      {
        heading: 'Why the shaft points where the rain comes from',
        body: [
          'An umbrella blocks the most rain when the canopy faces the rain head-on, which means the shaft is lined up with the direction the rain seems to come from. Lean it less and your legs get wet. A small umbrella and a fast pace mean you may need to lean a little more than the formula says, because the canopy only covers a small area.',
        ],
      },
      {
        heading: 'Try it: the walking-in-the-rain game',
        body: [
          'Our free DP Physics lesson on adding velocities has a walking-in-the-rain game. Change your speed, lean the umbrella, and watch the "body kept dry" meter. Switch between watching from the pavement (rain falls straight) and from the walker (rain slants) to see the same event from two frames.',
        ],
      },
    ],
    faq: [
      { q: 'Why does rain hit me from the front when I walk?', a: 'Because you are moving into it. Relative to you, the rain’s velocity is the rain’s velocity minus your velocity, which gives it a backward component, so it seems to come from in front.' },
      { q: 'What angle should I hold my umbrella at?', a: 'Lean it forward by θ where tan θ = walking speed ÷ rain speed. For a 2 m/s walk in 8 m/s rain that is 14 degrees.' },
      { q: 'Does rain really fall at an angle?', a: 'In still air it falls vertically relative to the ground. Relative to a moving person it falls at an angle. Both statements are true in their own frame of reference.' },
      { q: 'Is the umbrella problem the same as a plane landing in a crosswind?', a: 'The method is the same: add or subtract velocity vectors with a triangle. The numbers and which side you know differ, so the trigonometry (tan instead of sin) differs.' },
    ],
    related: [
      { label: 'Free lesson: crosswind landing and umbrella games', href: `${L}/vector-addition-crosswind-umbrella` },
      { label: 'Landing a plane in a crosswind', href: '/blog/crosswind-landing-relative-velocity-vector-addition-physics' },
      { label: 'Stellar aberration: the same triangle with starlight', href: '/blog/stellar-aberration-explained-speed-of-light-bradley' },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    slug: 'stellar-aberration-explained-speed-of-light-bradley',
    seoTitle: 'Stellar Aberration Explained & Speed of Light',
    title: 'Stellar Aberration Explained: How a Tilted Telescope Measures the Speed of Light',
    description: 'Why a telescope must tilt toward the Earth’s motion (20.5 arcseconds) and how Bradley’s idea gives the speed of light. Worked example and umbrella analogy.',
    datePublished: DATE,
    readMinutes: 8,
    tags: ['DP Physics', 'Physics', 'Kinematics'],
    intro: 'Point a telescope straight at a star directly overhead and you will slightly miss it. The telescope is fine. The Earth is moving, and light takes time to travel down the tube. The effect is called stellar aberration, it is the same physics as tilting an umbrella in the rain, and it can be used to measure the speed of light.',
    sections: [
      {
        heading: 'The umbrella analogy',
        body: [
          'In the rain, you tilt the umbrella forward because you are walking into the rain. Starlight is the rain, the Earth is the walker and the telescope is the umbrella. Light from a star overhead comes straight down in the frame of the Sun, but the Earth is moving sideways at about 30 km/s. While the light travels down the tube, the tube moves sideways, so the tube has to be tilted forward to keep the light in it.',
        ],
      },
      {
        heading: 'The size of the tilt',
        body: [
          'The relative velocity triangle has the speed of light c as one side and the Earth’s speed v as the other, exactly like the rain (8 m/s) and the walker (2 m/s). The tilt angle satisfies tan α = v ÷ c.',
          'First the Earth’s speed. One orbit is 2πr in a time T of one year: v = 2π × 1.496 × 10¹¹ ÷ 3.156 × 10⁷ = 2.98 × 10⁴ m/s, or 29.8 km/s.',
          'Then tan α = 2.98 × 10⁴ ÷ 3.00 × 10⁸ = 9.93 × 10⁻⁵. For such a tiny angle, α ≈ tan α in radians, so α = 9.93 × 10⁻⁵ rad. Convert: × (180 ÷ π) × 3600 = 20.5 arcseconds, which is 0.0057 degrees. Small, but measurable with a good telescope.',
        ],
      },
      {
        heading: 'Bradley’s idea: measuring c',
        body: [
          'In the 1720s the astronomer James Bradley was looking for stellar parallax and found a different yearly shift in the positions of stars. It was the same for stars at very different distances, so it could not be parallax. Bradley explained it as the combination of the Earth’s motion and the finite speed of light, and his result for the speed of light was close to the modern value.',
          'Run the sum backwards. If you measure α = 20.5″ and know the Earth’s speed, then c = v ÷ tan α. Convert 20.5″ to 9.94 × 10⁻⁵ rad and c = 2.98 × 10⁴ ÷ 9.94 × 10⁻⁵ = 3.00 × 10⁸ m/s.',
        ],
      },
      {
        heading: 'Why the tilt flips through the year',
        body: [
          'Six months later the Earth is moving the opposite way round its orbit, so the telescope must be tilted the other way. Over a year, a star at the pole of the Earth’s orbit seems to trace a tiny circle of angular radius 20.5″. A star in the plane of the orbit swings back and forth along a line, and stars in between trace small ellipses.',
        ],
      },
      {
        heading: 'Aberration versus parallax',
        body: [
          'Parallax is the shift you get from looking at a star from two different places, and it depends on the star’s distance: nearer stars shift more. Aberration depends only on v ÷ c, so every star at the same place in the sky shows the same shift, near or far. That difference is how Bradley could tell them apart.',
        ],
      },
      {
        heading: 'Common mistakes',
        bullets: [
          'Thinking the star really moves in an ellipse. The star stays put; the Earth’s velocity changes the direction we must point.',
          'Forgetting to convert arcseconds to radians (or degrees) before using tan.',
          'Mixing units: use v and c in the same units, both metres per second or both kilometres per second.',
        ],
      },
    ],
    faq: [
      { q: 'What causes stellar aberration?', a: 'The Earth’s motion while light travels down the telescope. The velocity of the light relative to the moving Earth is the light’s velocity minus the Earth’s velocity, so it comes in at a small angle and the telescope must tilt toward the direction of motion.' },
      { q: 'How big is stellar aberration?', a: 'About 20.5 arcseconds at most, from tan α = v ÷ c with v = 29.8 km/s and c = 3.00 × 10⁸ m/s.' },
      { q: 'How does aberration give the speed of light?', a: 'If you measure the aberration angle α and know the Earth’s orbital speed v, then c = v ÷ tan α. With 20.5 arcseconds and 29.8 km/s that gives 3.00 × 10⁸ m/s.' },
      { q: 'What is the difference between aberration and parallax?', a: 'Parallax depends on the star’s distance and comes from viewing it from two places. Aberration depends on the Earth’s velocity and the speed of light, not on the distance.' },
    ],
    related: [
      { label: 'Free lesson: stellar aberration with an interactive lab', href: `${L}/stellar-aberration` },
      { label: 'Why you tilt an umbrella forward in rain', href: '/blog/umbrella-rain-walking-relative-velocity-physics-explained' },
      { label: 'Landing a plane in a crosswind', href: '/blog/crosswind-landing-relative-velocity-vector-addition-physics' },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    slug: 'gravitational-electric-magnetic-fields-ib-physics-theme-d',
    seoTitle: 'Gravitational, Electric & Magnetic Fields',
    title: 'Gravitational, Electric and Magnetic Fields Explained: IB Physics Theme D Made Simple',
    description: 'What a field is, where gravitational, electric and magnetic fields come from, and how field strength is defined: g = F/m, E = F/q, B = F/qv.',
    datePublished: DATE,
    readMinutes: 9,
    tags: ['DP Physics', 'Physics', 'Fields'],
    intro: 'The Moon lifts the oceans without touching them. A magnet moves a paper clip across a gap. Physics explains both with the idea of a field. This guide explains what a field is, which objects create which fields, how to measure how strong a field is, and how gravity and electric force turn out to follow the same inverse-square pattern.',
    sections: [
      {
        heading: 'What is a field?',
        body: [
          'A field is a three-dimensional region around a source where another object experiences a force. The source creates the field. The other object, placed in it, feels the force. A gravitational field is created by a mass and felt by another mass. An electric field is created by a charge and felt by another charge. A magnetic field is created by a moving charge or a magnet and felt by another moving charge or magnet.',
        ],
      },
      {
        heading: 'Where each field comes from',
        bullets: [
          'A neutral mass makes a gravitational field only.',
          'A charged mass makes a gravitational field and an electric field.',
          'A moving charged mass (a current) makes all three: gravitational, electric and magnetic fields.',
        ],
      },
      {
        heading: 'Field strength and its units',
        body: ['Field strength is the force on each unit of the thing that feels the field:'],
        bullets: [
          'Gravitational field strength g = F ÷ m, in newtons per kilogram. A 2.0 kg mass feeling 20 N has g = 10 N/kg, pointing toward the source.',
          'Electric field strength E = F ÷ q, in newtons per coulomb. The direction is that of the force on a positive test charge.',
          'Magnetic field strength B = F ÷ (qv) = F ÷ (IL), in tesla (N A⁻¹ m⁻¹), with the force at right angles to both the field and the motion.',
        ],
      },
      {
        heading: 'The direction rules',
        bullets: [
          'The gravitational field points toward the mass, because gravity only attracts.',
          'The electric field points away from a positive charge and toward a negative charge, the way a positive test charge would be pushed.',
          'The magnetic field points the way the north pole of a compass points.',
        ],
      },
      {
        heading: 'Two laws with the same shape',
        body: [
          'Newton’s law of gravitation: F = GMm ÷ r², always attractive, with G = 6.67 × 10⁻¹¹ N m² kg⁻². Coulomb’s law: F = kQq ÷ r², attractive for unlike charges and repulsive for like charges, with k = 8.99 × 10⁹ N m² C⁻². Dividing by the test object gives the fields of a point source: g = GM ÷ r² and E = kQ ÷ r².',
          'Both are inverse-square laws: double the distance and the force or field falls to a quarter. For a sphere, r is measured from the centre. At a height equal to the Earth’s radius above the surface, r is 2R and g falls to 9.8 ÷ 4 = 2.5 N/kg, a classic slip when students use R instead of 2R.',
        ],
      },
      {
        heading: 'Two worked comparisons',
        bullets: [
          'The Earth (5.97 × 10²⁴ kg) and the Moon (7.35 × 10²² kg), 3.84 × 10⁸ m apart: F = GMm ÷ r² = 1.98 × 10²⁰ N.',
          'The electron and proton in a hydrogen atom, 5.3 × 10⁻¹¹ m apart: the electric force is 8.2 × 10⁻⁸ N and the gravitational force is 3.6 × 10⁻⁴⁷ N. The electric force is about 10³⁹ times bigger, which is why gravity is negligible between charged particles.',
        ],
      },
      {
        heading: 'Magnetic force between two wires',
        body: [
          'Two long parallel wires carrying currents I₁ and I₂, a distance r apart, attract each other when the currents flow the same way and repel when they flow in opposite directions. The force on each metre is F ÷ L = μ₀I₁I₂ ÷ 2πr, with μ₀ = 4π × 10⁻⁷ T m/A. For two 10 A currents 5.0 cm apart that is 4.0 × 10⁻⁴ N per metre.',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between gravitational and electric fields?', a: 'Gravitational fields come from mass and only attract, with g = GM ÷ r². Electric fields come from charge and can attract or repel, with E = kQ ÷ r². Both fall off as 1 ÷ r².' },
      { q: 'How is magnetic field strength defined?', a: 'B = F ÷ (qv) for a charge q moving at speed v at right angles to the field, or B = F ÷ (IL) for a length L of wire carrying current I. The unit is the tesla.' },
      { q: 'What are the units of g and E?', a: 'g is in newtons per kilogram (N/kg) and E is in newtons per coulomb (N/C). They are both force per unit mass or charge.' },
      { q: 'Do parallel currents attract or repel?', a: 'Currents in the same direction attract. Currents in opposite directions repel. This is the opposite of the pattern for like charges.' },
    ],
    related: [
      { label: 'Free lesson: what is a field?', href: `${D}/what-is-a-field` },
      { label: 'Free lesson: Newton’s law of gravitation and Coulomb’s law', href: `${D}/gravitation-and-coulomb` },
      { label: 'Free lesson: magnetic field strength and currents', href: `${D}/magnetic-fields-and-currents` },
      { label: 'Orbital speed and escape velocity', href: '/blog/orbital-speed-escape-velocity-derivation-ib-physics' },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    slug: 'orbital-speed-escape-velocity-derivation-ib-physics',
    seoTitle: 'Orbital Speed & Escape Velocity Derivations',
    title: 'Orbital Speed, Kepler’s Third Law and Escape Velocity: Derivations and Worked Examples (IB Physics)',
    description: 'Derive orbital speed, Kepler’s third law and escape velocity from gravity as the centripetal force. ISS example, satellite energies, why astronauts float.',
    datePublished: DATE,
    readMinutes: 9,
    tags: ['DP Physics', 'Physics', 'Fields'],
    intro: 'The International Space Station moves at about 7.7 km every second and never hits the ground. It is not escaping gravity: it is falling around the Earth. This guide derives the orbital speed, the period, the energy of a satellite and the escape speed from one idea, that gravity is the centripetal force.',
    sections: [
      {
        heading: 'Gravity is the centripetal force',
        body: [
          'A satellite of mass m moves at constant speed v in a circle of radius r around a planet of mass M, where r is measured from the centre. Gravity is the only force, so it provides the centripetal force: GMm ÷ r² = mv² ÷ r. Cancel m and one factor of r: v² = GM ÷ r, so v = √(GM ÷ r).',
          'Notice that the satellite’s mass cancels, so heavy and light satellites move at the same speed at the same height, and a higher orbit means a slower satellite.',
        ],
      },
      {
        heading: 'The period and Kepler’s third law',
        body: [
          'One orbit is a distance 2πr, so v = 2πr ÷ T. Put it into v² = GM ÷ r and rearrange: T² = 4π²r³ ÷ GM. Since 4π² ÷ GM is a constant for a given planet, T² is proportional to r³, which is Kepler’s third law. A satellite at 4 times the radius takes 8 times as long to orbit.',
        ],
      },
      {
        heading: 'Worked example: the International Space Station',
        body: [
          'The ISS orbits at r = 6.78 × 10⁶ m from the centre of the Earth, about 400 km above the surface. v = √(GM ÷ r) = √(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ ÷ 6.78 × 10⁶) = 7.66 × 10³ m/s. The period is T = 2πr ÷ v = 5.56 × 10³ s, about 93 minutes, which is roughly 15 orbits a day.',
        ],
      },
      {
        heading: 'Why astronauts float',
        body: [
          'At the ISS orbit the field strength is g = GM ÷ r² = 8.7 N/kg, about 88% of its value at the surface. Gravity has not gone away: it is what keeps the station in orbit. The station and the astronauts are in free fall together, so nothing pushes on them. That is the feeling of weightlessness.',
        ],
      },
      {
        heading: 'The energy of a satellite',
        body: ['In a circular orbit the kinetic energy is ½mv² = GMm ÷ 2r. The gravitational potential energy is −GMm ÷ r, negative because gravity only attracts. The total energy is the sum:'],
        bullets: [
          'KE = +GMm ÷ 2r',
          'GPE = −GMm ÷ r',
          'Total = −GMm ÷ 2r, which is minus the kinetic energy.',
          'Example: a 500 kg satellite at r = 6.78 × 10⁶ m has KE = +1.47 × 10¹⁰ J, GPE = −2.94 × 10¹⁰ J and total energy −1.47 × 10¹⁰ J. A negative total energy means the satellite is bound.',
        ],
      },
      {
        heading: 'Escape velocity',
        body: [
          'The escape speed is the minimum launch speed that lets an object, with no further propulsion, get infinitely far away. Its total energy must reach zero: ½mv² − GMm ÷ R = 0, so v_esc = √(2GM ÷ R). The mass cancels again.',
          'For the Earth’s surface, v_esc = 1.12 × 10⁴ m/s, about 11 km/s. That is √2 times the circular orbital speed at the same radius (7.9 km/s just above the surface): twice the kinetic energy gives √2 times the speed.',
        ],
      },
      {
        heading: 'Common mistakes',
        bullets: [
          'Using the height above the surface as the orbital radius. The radius is measured from the planet’s centre.',
          'Thinking a faster satellite must be in a higher orbit. Higher orbits are slower.',
          'Giving a bound satellite a positive total energy.',
          'Saying there is no gravity on the space station.',
        ],
      },
    ],
    faq: [
      { q: 'How do you derive the orbital speed of a satellite?', a: 'Set gravity equal to the centripetal force: GMm ÷ r² = mv² ÷ r. Cancel m and r once to get v² = GM ÷ r, so v = √(GM ÷ r).' },
      { q: 'What is the escape velocity of the Earth?', a: 'v = √(2GM ÷ R) = 1.12 × 10⁴ m/s, about 11.2 km/s, using the Earth’s mass and radius. It does not depend on the mass of the object.' },
      { q: 'Why is a satellite’s total energy negative?', a: 'Its kinetic energy is +GMm ÷ 2r but its gravitational potential energy is −GMm ÷ r, so the total is −GMm ÷ 2r. Negative total energy means it is bound to the planet.' },
      { q: 'Why do astronauts feel weightless if gravity is still there?', a: 'They are in free fall with the space station, both accelerating toward the Earth at the same rate, so there is no contact force pushing on them.' },
    ],
    related: [
      { label: 'Free lesson: orbits and escape speed, with an orbit lab', href: `${D}/orbits-and-escape-speed` },
      { label: 'Gravitational, electric and magnetic fields', href: '/blog/gravitational-electric-magnetic-fields-ib-physics-theme-d' },
      { label: 'IB Physics formula sheet', href: '/dp-physics/formulas' },
    ],
  },
]
