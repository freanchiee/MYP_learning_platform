import React, { useState, useEffect } from 'react';
import { Award, BookOpen, ChevronRight, Download, Home, Sparkles, Trophy } from 'lucide-react';

const ChemicalBondingStrandhoot = () => {
  const [studentName, setStudentName] = useState('');
  const [started, setStarted] = useState(false);
  const [currentStrand, setCurrentStrand] = useState(0);
  const [strandProgress, setStrandProgress] = useState({
    1: { completed: false, score: 0, maxScore: 50 },
    2: { completed: false, score: 0, maxScore: 50 },
    3: { completed: false, score: 0, maxScore: 50 },
    4: { completed: false, score: 0, maxScore: 50 },
    5: { completed: false, score: 0, maxScore: 50 }
  });
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showLearning, setShowLearning] = useState({});

  // Calculate total score and progress
  const totalScore = Object.values(strandProgress).reduce((acc, s) => acc + s.score, 0);
  const totalMaxScore = 250;
  const progressPercent = Math.round((totalScore / totalMaxScore) * 100);
  const completedStrands = Object.values(strandProgress).filter(s => s.completed).length;
  const badgesEarned = completedStrands;

  // Badges
  const badges = [
    { id: 1, name: '⚡ Ion Master', earned: strandProgress[1].completed },
    { id: 2, name: '🤝 Bond Builder', earned: strandProgress[2].completed },
    { id: 3, name: '💎 Structure Sage', earned: strandProgress[3].completed },
    { id: 4, name: '🔗 Metallic Maven', earned: strandProgress[4].completed },
    { id: 5, name: '🏆 Bonding Champion', earned: strandProgress[5].completed }
  ];

  const startStrandhoot = () => {
    if (studentName.trim()) {
      setStarted(true);
    }
  };

  const selectStrand = (strandNum) => {
    setCurrentStrand(strandNum);
  };

  const completeStrand = (strandNum) => {
    setStrandProgress(prev => ({
      ...prev,
      [strandNum]: { ...prev[strandNum], completed: true }
    }));
    createConfetti();
    setCurrentStrand(0);
  };

  const createConfetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}%;
          top: -10px;
          border-radius: 50%;
          animation: fall ${2 + Math.random() * 2}s linear forwards;
          z-index: 9999;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
      }, i * 30);
    }
  };

  const checkAnswer = (strand, question, answerText) => {
    const scoringData = getScoringData(strand, question);
    const answer = answerText.toLowerCase().trim();

    if (!answer) {
      setFeedback(prev => ({
        ...prev,
        [`${strand}-${question}`]: {
          type: 'needs-improvement',
          text: '⚠️ No Answer Provided',
          detail: 'Please write your answer before checking.'
        }
      }));
      return;
    }

    // Count keywords found
    let keywordsFound = 0;
    scoringData.keywords.forEach(keyword => {
      if (answer.includes(keyword.toLowerCase())) {
        keywordsFound++;
      }
    });

    const percentageFound = (keywordsFound / scoringData.keywords.length) * 100;
    let score = 0;
    let feedbackType = '';
    let feedbackText = '';

    if (percentageFound >= 80) {
      score = 10;
      feedbackType = 'excellent';
      feedbackText = scoringData.excellent;
    } else if (percentageFound >= 60) {
      score = 8;
      feedbackType = 'good';
      feedbackText = scoringData.good;
    } else if (percentageFound >= 40) {
      score = 6;
      feedbackType = 'good';
      feedbackText = scoringData.medium;
    } else {
      score = 4;
      feedbackType = 'needs-improvement';
      feedbackText = scoringData.poor;
    }

    // Update score
    setStrandProgress(prev => ({
      ...prev,
      [strand]: { ...prev[strand], score: prev[strand].score + score }
    }));

    setFeedback(prev => ({
      ...prev,
      [`${strand}-${question}`]: {
        type: feedbackType,
        text: `✓ Answer Checked - ${score}/10 points`,
        detail: feedbackText,
        exemplar: scoringData.exemplar,
        score: score
      }
    }));

    if (score >= 9) createConfetti();
  };

  const checkMCQ = (strand, question, selectedOption, correctOption) => {
    const isCorrect = selectedOption === correctOption;
    const score = isCorrect ? 10 : 5;

    setStrandProgress(prev => ({
      ...prev,
      [strand]: { ...prev[strand], score: prev[strand].score + score }
    }));

    setFeedback(prev => ({
      ...prev,
      [`${strand}-${question}`]: {
        type: isCorrect ? 'excellent' : 'needs-improvement',
        text: `${isCorrect ? '✓ Correct!' : '✗ Incorrect'} - ${score}/10 points`,
        detail: isCorrect ? 'Well done!' : 'Review the learning material and try again.',
        score: score
      }
    }));

    if (isCorrect) createConfetti();
  };

  const getScoringData = (strand, question) => {
    const scoring = {
      1: {
        1: {
          keywords: ['sodium', 'loses', 'electron', 'chlorine', 'gains', 'na+', 'cl-', 'attract', 'electrostatic', 'opposite', 'charges'],
          excellent: 'Excellent! You clearly described the electron transfer and formation of oppositely charged ions with electrostatic attraction.',
          good: 'Good explanation! You covered most key points. Consider adding more detail about the electrostatic attraction.',
          medium: 'Decent attempt. Make sure to explain what happens to electrons and why the ions attract.',
          poor: 'Your answer needs more detail. Focus on: electron transfer, ions formed, and the attraction between them.',
          exemplar: 'The sodium atom loses its outer electron to form a Na⁺ ion with electronic configuration 2,8. The chlorine atom gains this electron to form a Cl⁻ ion with configuration 2,8,8. The ionic bond is the strong electrostatic attraction between these oppositely charged ions.'
        },
        2: {
          keywords: ['strong', 'electrostatic', 'forces', 'attraction', 'ions', 'energy', 'break', 'lattice', 'giant'],
          excellent: 'Outstanding! You explained the strong forces in the giant lattice and the energy needed to break them.',
          good: 'Good work! Your explanation covers the main points about bonding strength.',
          medium: 'You have the right idea. Expand on why the forces are strong and their effect on melting point.',
          poor: 'Try to explain the forces between ions and why they require high temperatures to overcome.',
          exemplar: 'Ionic compounds have high melting and boiling points because of the strong electrostatic forces of attraction between oppositely charged ions in the giant lattice structure. A large amount of energy is required to overcome these strong forces and separate the ions.'
        },
        3: {
          keywords: ['molten', 'aqueous', 'ions', 'free', 'move', 'solid', 'fixed', 'lattice', 'positions', 'conduct'],
          excellent: 'Perfect! You clearly explained that ions need to be free to move to conduct electricity.',
          good: 'Good answer! You understand the key concept about ion mobility.',
          medium: 'You have the right idea. Be more specific about when ions can and cannot move.',
          poor: 'Focus on the difference between solid (ions fixed) and molten/aqueous (ions free to move).',
          exemplar: 'When molten or aqueous, the ions are free to move and can carry electrical charge through the substance. When solid, the ions are fixed in position in the lattice structure and cannot move to conduct electricity.'
        },
        4: {
          keywords: ['magnesium', 'loses', 'two', 'electrons', 'mg2+', 'oxygen', 'gains', 'o2-', '2,8', 'stable'],
          excellent: 'Excellent! You correctly described both ion formations with configurations.',
          good: 'Good! You covered the main points about electron transfer.',
          medium: 'Decent attempt. Include specific electron configurations for both ions.',
          poor: 'Describe how many electrons are transferred and the final configurations of both ions.',
          exemplar: 'Magnesium loses 2 electrons to form Mg²⁺ with electronic configuration 2,8. Oxygen gains 2 electrons to form O²⁻ with configuration 2,8. The ionic bond forms due to strong electrostatic attraction between the ions in MgO.'
        }
      },
      2: {
        1: {
          keywords: ['share', 'pair', 'electrons', 'hydrogen', 'stable', 'noble gas', 'helium'],
          excellent: 'Excellent! You described electron sharing and achieving stable configurations.',
          good: 'Good work! You understand the key concept of electron sharing.',
          medium: 'You have the basic idea. Add more about why this creates a stable molecule.',
          poor: 'Focus on the sharing of electrons and how this makes both atoms stable.',
          exemplar: 'Each hydrogen atom has 1 electron. They share a pair of electrons (one from each), forming a covalent bond. By sharing, each hydrogen achieves 2 electrons, giving it the stable configuration of helium.'
        },
        2: {
          keywords: ['weak', 'intermolecular', 'forces', 'between', 'molecules', 'little', 'energy', 'low', 'overcome'],
          excellent: 'Perfect! You distinguished between strong covalent bonds within molecules and weak forces between them.',
          good: 'Good explanation! You understand about intermolecular forces.',
          medium: 'You\'re on the right track. Clarify the difference between bonds within and forces between molecules.',
          poor: 'Explain that weak forces between molecules need little energy to overcome.',
          exemplar: 'Simple molecular compounds have low boiling points because there are only weak intermolecular forces between molecules. These require little energy to overcome. The strong covalent bonds within molecules don\'t break during boiling.'
        },
        3: {
          keywords: ['carbon', 'four', 'hydrogen', 'single', 'covalent', 'bonds', 'share', 'eight', 'electrons', 'stable'],
          excellent: 'Excellent! You described all four bonds and explained stability.',
          good: 'Good work! You understand the bonding in methane.',
          medium: 'Decent answer. Be more specific about the number of bonds and electron sharing.',
          poor: 'Describe how many bonds carbon forms with hydrogen and why this is stable.',
          exemplar: 'In methane (CH₄), carbon forms four single covalent bonds - one with each hydrogen. Carbon shares one electron with each hydrogen. This gives carbon 8 outer electrons (like neon) and each hydrogen 2 electrons (like helium).'
        },
        4: {
          keywords: ['single', 'pair', 'double', 'four', 'triple', 'six', 'electrons', 'shared'],
          excellent: 'Perfect! You explained all three bond types with correct electron numbers.',
          good: 'Good explanation! You understand the different bond types.',
          medium: 'You have the basic idea. Include specific numbers of shared electrons.',
          poor: 'Explain how many electrons are shared in each type and give examples.',
          exemplar: 'A single bond has 2 electrons shared (e.g., H₂). A double bond has 4 electrons shared (e.g., O₂). A triple bond has 6 electrons shared (e.g., N₂). Multiple bonds are stronger.'
        }
      },
      3: {
        1: {
          keywords: ['carbon', 'four', 'covalent', 'bonds', 'tetrahedral', 'giant', 'three', 'dimensional', 'lattice', 'strong', 'rigid'],
          excellent: 'Excellent! You described the 3D structure and related it to hardness.',
          good: 'Good work! You understand diamond\'s structure.',
          medium: 'You have the right idea. Explain more about the three-dimensional bonding.',
          poor: 'Describe the giant lattice with four bonds per carbon and why this makes it hard.',
          exemplar: 'Diamond has a giant covalent structure where each carbon forms four strong covalent bonds in a tetrahedral arrangement. This creates a rigid 3D lattice. All bonds are strong, making diamond extremely hard.'
        },
        2: {
          keywords: ['graphite', 'delocalized', 'electrons', 'free', 'move', 'conduct', 'diamond', 'no', 'all', 'bonding'],
          excellent: 'Perfect! You explained the key difference - delocalized electrons in graphite.',
          good: 'Good explanation! You understand about electron mobility.',
          medium: 'You\'re on the right track. Be more specific about delocalized electrons.',
          poor: 'Explain that graphite has delocalized electrons that can move, while diamond doesn\'t.',
          exemplar: 'Graphite conducts electricity because each carbon only forms three covalent bonds, leaving one electron per carbon delocalized. These electrons are free to move and carry charge. Diamond has all electrons in bonding, so no free electrons.'
        },
        3: {
          keywords: ['layers', 'weak', 'forces', 'between', 'slide', 'over', 'slippery', 'hexagonal'],
          excellent: 'Excellent! You clearly linked the layer structure to lubricant properties.',
          good: 'Good work! You understand the structure-property relationship.',
          medium: 'You have the basic idea. Explain more about how layers can slide.',
          poor: 'Describe the layer structure and weak forces that allow layers to slide.',
          exemplar: 'Graphite has layers of hexagonal carbon rings. Within layers are strong covalent bonds, but only weak forces between layers. These weak forces allow layers to slide easily, making graphite slippery - ideal as a lubricant.'
        },
        4: {
          keywords: ['giant', 'covalent', 'structure', 'similar', 'three', 'dimensional', 'strong', 'bonds', 'hard', 'high'],
          excellent: 'Perfect! You identified the similar giant covalent structures.',
          good: 'Good answer! You understand the structural similarity.',
          medium: 'You\'re on the right path. Be more specific about the type of structure.',
          poor: 'Explain that both have giant covalent structures with atoms bonded throughout.',
          exemplar: 'Silicon(IV) oxide has a giant covalent structure like diamond - a 3D lattice with strong covalent bonds throughout. This makes it very hard with a very high melting point, just like diamond.'
        }
      },
      4: {
        1: {
          keywords: ['positive', 'ions', 'lattice', 'sea', 'delocalized', 'electrons', 'electrostatic', 'attraction'],
          excellent: 'Excellent! You described the structure with positive ions and delocalized electrons.',
          good: 'Good work! You understand metallic bonding.',
          medium: 'You have the basic idea. Include more detail about the sea of electrons.',
          poor: 'Describe the giant lattice of positive ions and the delocalized electrons.',
          exemplar: 'Metallic bonding is the electrostatic attraction between positive metal ions arranged in a giant lattice and a sea of delocalized electrons that can move freely throughout the structure.'
        },
        2: {
          keywords: ['delocalized', 'electrons', 'free', 'move', 'carry', 'charge', 'current', 'conduct'],
          excellent: 'Perfect! You explained how delocalized electrons enable conductivity.',
          good: 'Good explanation! You understand the role of electrons.',
          medium: 'You\'re on the right track. Be more specific about electron movement.',
          poor: 'Explain that free electrons can move and carry electrical charge.',
          exemplar: 'Metals conduct electricity well because they have delocalized electrons that are free to move throughout the structure. When voltage is applied, these electrons flow, carrying electric current.'
        },
        3: {
          keywords: ['layers', 'ions', 'slide', 'electrons', 'move', 'bonding', 'maintained', 'no', 'bonds', 'broken'],
          excellent: 'Excellent! You explained how layers can slide while maintaining bonding.',
          good: 'Good work! You understand malleability.',
          medium: 'You have the right idea. Explain why bonds don\'t break.',
          poor: 'Describe how ions can move while the sea of electrons maintains bonding.',
          exemplar: 'Metals are malleable because layers of ions can slide over each other. The sea of delocalized electrons moves with them, maintaining metallic bonding throughout. No bonds are broken - they just reform in new positions.'
        },
        4: {
          keywords: ['metals', 'delocalized', 'electrons', 'free', 'solid', 'ionic', 'ions', 'fixed', 'cannot'],
          excellent: 'Perfect! You explained the difference in charged particle mobility.',
          good: 'Good answer! You understand the key distinction.',
          medium: 'You\'re on the right track. Be more specific about particle movement.',
          poor: 'Explain that metals have free electrons but ionic compounds have fixed ions when solid.',
          exemplar: 'Metals conduct when solid because delocalized electrons are free to move. Ionic compounds cannot conduct when solid because ions are fixed in lattice positions and cannot move to carry charge.'
        }
      },
      5: {
        1: {
          keywords: ['giant', 'covalent', 'diamond', 'silicon', 'very high', 'melting', 'no', 'conduct', 'electrons', 'bonding'],
          excellent: 'Excellent! You correctly identified giant covalent bonding and explained your reasoning.',
          good: 'Good work! You understand the properties of giant covalent structures.',
          medium: 'You have the right idea. Explain why it doesn\'t conduct electricity.',
          poor: 'Think about which bonding type has very high melting points but no conductivity.',
          exemplar: 'The substance has giant covalent bonding. Very high melting point indicates a giant structure with many strong bonds. No conductivity in any state rules out metallic and ionic bonding, leaving giant covalent (like diamond).'
        },
        2: {
          keywords: ['ionic', 'strong', 'electrostatic', 'forces', 'ions', 'metallic', 'delocalized', 'electrons', 'lattice'],
          excellent: 'Perfect! You explained both types have strong forces but for different reasons.',
          good: 'Good explanation! You understand both bonding types.',
          medium: 'You\'re on the right track. Be more specific about the forces in each.',
          poor: 'Explain the strong forces in both ionic and metallic bonding.',
          exemplar: 'Both have high melting points due to strong forces in giant structures. Ionic: strong electrostatic attraction between oppositely charged ions. Metallic: strong attraction between positive ions and delocalized electrons.'
        },
        3: {
          keywords: ['metallic', 'bonding', 'delocalized', 'electrons', 'free', 'conduct', 'malleable', 'layers', 'slide'],
          excellent: 'Excellent! You correctly identified metallic bonding from all the properties.',
          good: 'Good work! You understand metallic properties.',
          medium: 'You have the right idea. Explain how all properties fit metallic bonding.',
          poor: 'Think about which bonding type allows conductivity when solid and malleability.',
          exemplar: 'The substance has metallic bonding. Malleability indicates layers can slide (metallic). Conducts when solid means free electrons (metallic). High melting point fits the strong forces in metallic bonding.'
        },
        4: {
          keywords: ['diamond', 'four', 'bonds', 'tetrahedral', 'rigid', 'hard', 'graphite', 'three', 'layers', 'weak', 'soft', 'delocalized', 'conducts'],
          excellent: 'Outstanding! You provided a thorough comparison of both structures and properties.',
          good: 'Good comparison! You covered the main differences.',
          medium: 'Decent attempt. Include more about structural differences.',
          poor: 'Compare the number of bonds per carbon and the resulting structures.',
          exemplar: 'Similarities: Both are giant covalent structures of carbon. Differences: Diamond - 4 bonds per carbon, 3D tetrahedral, very hard, no conductivity. Graphite - 3 bonds per carbon, layered structure, soft/slippery, conducts electricity due to delocalized electrons.'
        }
      }
    };

    return scoring[strand]?.[question] || {
      keywords: [],
      excellent: 'Good answer!',
      good: 'Decent attempt.',
      medium: 'Needs more detail.',
      poor: 'Try again with more information.',
      exemplar: 'No exemplar available.'
    };
  };

  // Welcome Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-4">
        <style>{`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="text-6xl mb-4">⚛️</div>
          <h1 className="text-5xl font-bold text-purple-800 mb-4">Chemical Bonding Strandhoot</h1>
          <p className="text-xl text-gray-600 mb-8">Master ionic, covalent, and metallic bonding through interactive learning!</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && startStrandhoot()}
            className="w-full max-w-md mx-auto px-6 py-4 text-lg border-2 border-gray-300 rounded-xl mb-6 focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={startStrandhoot}
            className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </button>
          <div className="mt-8 text-gray-500">
            📚 5 Interactive Strands | 🎮 Gamified Learning | 📊 Real-time Feedback
          </div>
        </div>
      </div>
    );
  }

  // Main Interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">👋 Hello, {studentName}!</h2>
            <button
              onClick={() => setCurrentStrand(0)}
              className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
            >
              <Home size={20} />
              View All Strands
            </button>
          </div>
        </div>

        {/* Progress Area */}
        <div className="bg-gray-50 p-8 border-b-4 border-purple-600">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-purple-800">Your Progress</h3>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{totalScore}</div>
                <div className="text-sm text-gray-600">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{completedStrands}/5</div>
                <div className="text-sm text-gray-600">Strands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{badgesEarned}/5</div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-300 h-8 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-600 to-purple-800 h-full flex items-center justify-end pr-4 text-white font-bold transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            >
              {progressPercent}%
            </div>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  badge.earned ? 'opacity-100 scale-105' : 'opacity-30'
                }`}
                style={{
                  background: badge.earned
                    ? badge.id === 1 ? '#ff6b6b' : badge.id === 2 ? '#4ecdc4' : badge.id === 3 ? '#45b7d1' : badge.id === 4 ? '#f9ca24' : '#6c5ce7'
                    : '#e0e0e0',
                  color: badge.earned && badge.id === 4 ? '#333' : 'white'
                }}
              >
                {badge.name}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {currentStrand === 0 ? (
            <StrandSelector strandProgress={strandProgress} selectStrand={selectStrand} />
          ) : currentStrand === 1 ? (
            <Strand1
              answers={answers}
              setAnswers={setAnswers}
              feedback={feedback}
              checkAnswer={checkAnswer}
              checkMCQ={checkMCQ}
              completeStrand={completeStrand}
              showLearning={showLearning}
              setShowLearning={setShowLearning}
            />
          ) : currentStrand === 2 ? (
            <Strand2
              answers={answers}
              setAnswers={setAnswers}
              feedback={feedback}
              checkAnswer={checkAnswer}
              checkMCQ={checkMCQ}
              completeStrand={completeStrand}
              showLearning={showLearning}
              setShowLearning={setShowLearning}
            />
          ) : currentStrand === 3 ? (
            <Strand3
              answers={answers}
              setAnswers={setAnswers}
              feedback={feedback}
              checkAnswer={checkAnswer}
              checkMCQ={checkMCQ}
              completeStrand={completeStrand}
              showLearning={showLearning}
              setShowLearning={setShowLearning}
            />
          ) : currentStrand === 4 ? (
            <Strand4
              answers={answers}
              setAnswers={setAnswers}
              feedback={feedback}
              checkAnswer={checkAnswer}
              checkMCQ={checkMCQ}
              completeStrand={completeStrand}
              showLearning={showLearning}
              setShowLearning={setShowLearning}
            />
          ) : (
            <Strand5
              answers={answers}
              setAnswers={setAnswers}
              feedback={feedback}
              checkAnswer={checkAnswer}
              checkMCQ={checkMCQ}
              completeStrand={completeStrand}
              showLearning={showLearning}
              setShowLearning={setShowLearning}
            />
          )}

          {/* Final completion */}
          {completedStrands === 5 && currentStrand === 0 && (
            <div className="text-center mt-12 p-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl">
              <Trophy size={64} className="mx-auto text-yellow-500 mb-4" />
              <h2 className="text-4xl font-bold text-purple-800 mb-4">🎉 Congratulations!</h2>
              <p className="text-xl text-gray-700 mb-6">You've completed all strands!</p>
              <div className="text-3xl font-bold text-purple-600 mb-8">Final Score: {totalScore}/{totalMaxScore}</div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                📄 Download Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Strand Selector Component
const StrandSelector = ({ strandProgress, selectStrand }) => {
  const strands = [
    { num: 1, icon: '⚡', title: 'Ionic Bonding', color: 'from-red-400 to-red-600' },
    { num: 2, icon: '🤝', title: 'Covalent Bonding', color: 'from-teal-400 to-teal-600' },
    { num: 3, icon: '💎', title: 'Giant Structures', color: 'from-blue-400 to-blue-600' },
    { num: 4, icon: '🔗', title: 'Metallic Bonding', color: 'from-yellow-400 to-yellow-600' },
    { num: 5, icon: '🎯', title: 'Comparative Analysis', color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {strands.map(strand => (
        <div
          key={strand.num}
          onClick={() => selectStrand(strand.num)}
          className={`p-8 rounded-2xl cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl ${
            strandProgress[strand.num].completed
              ? 'bg-green-100 border-4 border-green-500'
              : 'bg-white border-2 border-gray-200'
          }`}
        >
          <div className="text-6xl mb-4 text-center">{strand.icon}</div>
          <h3 className="text-xl font-bold text-center mb-2">Strand {strand.num}</h3>
          <p className="text-gray-600 text-center">{strand.title}</p>
          <div className="mt-4 text-center">
            {strandProgress[strand.num].completed ? (
              <span className="text-green-600 font-semibold">✓ Completed</span>
            ) : (
              <span className="text-purple-600 font-semibold">Start →</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Strand 1: Ionic Bonding
const Strand1 = ({ answers, setAnswers, feedback, checkAnswer, checkMCQ, completeStrand, showLearning, setShowLearning }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-800 mb-6">⚡ Strand 1: Ionic Bonding</h1>

      <button
        onClick={() => setShowLearning(prev => ({ ...prev, 1: !prev[1] }))}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold mb-6 flex items-center gap-2"
      >
        <BookOpen size={20} />
        {showLearning[1] ? 'Hide' : 'Show'} Learning Material
      </button>

      {showLearning[1] && (
        <div className="bg-gray-50 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">What is Ionic Bonding?</h2>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <strong>Key Concept:</strong> An ionic bond is a strong electrostatic attraction between oppositely charged ions.
          </div>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">Formation of Ions</h3>
          <p className="mb-4">Atoms form ions to achieve stable electron configurations (usually 8 electrons in their outer shell, like noble gases).</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Cations (Positive Ions):</strong> Formed when atoms LOSE electrons. Metal atoms typically form cations.</li>
            <li><strong>Anions (Negative Ions):</strong> Formed when atoms GAIN electrons. Non-metal atoms typically form anions.</li>
          </ul>

          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600 mb-6">
            <h4 className="font-bold mb-3">Example: Sodium Chloride (NaCl)</h4>
            <p className="mb-2"><strong>Sodium (Na):</strong></p>
            <ul className="list-disc pl-6 mb-3">
              <li>Electronic configuration: 2,8,1</li>
              <li>Loses 1 electron to form Na⁺ (2,8)</li>
              <li>Now has same configuration as neon (stable)</li>
            </ul>
            <p className="mb-2"><strong>Chlorine (Cl):</strong></p>
            <ul className="list-disc pl-6 mb-3">
              <li>Electronic configuration: 2,8,7</li>
              <li>Gains 1 electron to form Cl⁻ (2,8,8)</li>
              <li>Now has same configuration as argon (stable)</li>
            </ul>
            <p><strong>Ionic Bond:</strong> The Na⁺ and Cl⁻ ions are strongly attracted to each other, forming NaCl.</p>
          </div>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">Properties of Ionic Compounds</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>High melting and boiling points:</strong> Strong electrostatic forces between ions require lots of energy to break</li>
            <li><strong>Electrical conductivity:</strong>
              <ul className="list-circle pl-6 mt-1">
                <li>Good when MOLTEN or AQUEOUS (dissolved in water) - ions are free to move</li>
                <li>Poor when SOLID - ions are fixed in lattice positions</li>
              </ul>
            </li>
          </ul>
        </div>
      )}

      {/* Question 1 */}
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 1</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Describe how a sodium atom (2,8,1) and a chlorine atom (2,8,7) form an ionic bond. Include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>What happens to the electrons</li>
          <li>What ions are formed</li>
          <li>Why the bond forms</li>
        </ul>

        <textarea
          value={answers['1-1'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '1-1': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => checkAnswer(1, 1, answers['1-1'] || '')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Check Answer
          </button>
        </div>

        {feedback['1-1'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['1-1'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['1-1'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['1-1'].text}</div>
            <p className="mb-4">{feedback['1-1'].detail}</p>
            {feedback['1-1'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['1-1'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question 2 */}
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 2</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Explain why ionic compounds have high melting and boiling points. Your answer should refer to structure and bonding.
        </p>

        <textarea
          value={answers['1-2'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '1-2': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => checkAnswer(1, 2, answers['1-2'] || '')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Check Answer
          </button>
        </div>

        {feedback['1-2'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['1-2'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['1-2'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['1-2'].text}</div>
            <p className="mb-4">{feedback['1-2'].detail}</p>
            {feedback['1-2'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['1-2'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question 3 */}
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 3</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Why can ionic compounds conduct electricity when molten or aqueous, but not when solid?
        </p>

        <textarea
          value={answers['1-3'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '1-3': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => checkAnswer(1, 3, answers['1-3'] || '')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Check Answer
          </button>
        </div>

        {feedback['1-3'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['1-3'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['1-3'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['1-3'].text}</div>
            <p className="mb-4">{feedback['1-3'].detail}</p>
            {feedback['1-3'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['1-3'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question 4 */}
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 4</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Magnesium (Mg, 2,8,2) reacts with oxygen (O, 2,6) to form magnesium oxide. Describe the formation of magnesium oxide, including the ions formed and their electron configurations.
        </p>

        <textarea
          value={answers['1-4'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '1-4': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => checkAnswer(1, 4, answers['1-4'] || '')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Check Answer
          </button>
        </div>

        {feedback['1-4'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['1-4'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['1-4'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['1-4'].text}</div>
            <p className="mb-4">{feedback['1-4'].detail}</p>
            {feedback['1-4'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['1-4'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question 5 - MCQ */}
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 5</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Which statement about ionic bonding is correct?
        </p>

        <div className="space-y-3">
          {[
            { text: 'A) Ionic bonds form between metals and non-metals', correct: true },
            { text: 'B) Ionic compounds have low melting points', correct: false },
            { text: 'C) Solid ionic compounds conduct electricity well', correct: false },
            { text: 'D) Anions are formed when atoms lose electrons', correct: false }
          ].map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                setAnswers(prev => ({ ...prev, '1-5': idx }));
                checkMCQ(1, 5, idx, 0);
              }}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                answers['1-5'] === idx ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-300'
              }`}
            >
              {option.text}
            </div>
          ))}
        </div>

        {feedback['1-5'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['1-5'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['1-5'].text}</div>
            <p>{feedback['1-5'].detail}</p>
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => completeStrand(1)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
        >
          Complete Strand 1 <ChevronRight />
        </button>
      </div>
    </div>
  );
};

// Simplified Strand 2-5 (same structure, different content)
const Strand2 = ({ answers, setAnswers, feedback, checkAnswer, checkMCQ, completeStrand, showLearning, setShowLearning }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-800 mb-6">🤝 Strand 2: Covalent Bonding</h1>
      
      <button
        onClick={() => setShowLearning(prev => ({ ...prev, 2: !prev[2] }))}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold mb-6 flex items-center gap-2"
      >
        <BookOpen size={20} />
        {showLearning[2] ? 'Hide' : 'Show'} Learning Material
      </button>

      {showLearning[2] && (
        <div className="bg-gray-50 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">What is Covalent Bonding?</h2>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <strong>Key Concept:</strong> A covalent bond is formed when a pair of electrons is shared between two atoms, leading to noble gas electronic configurations.
          </div>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">How Covalent Bonds Form</h3>
          <p className="mb-4">Covalent bonds typically form between non-metal atoms. By sharing electrons, both atoms achieve stable electron configurations.</p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600 mb-6">
            <h4 className="font-bold mb-3">Simple Examples</h4>
            <ul className="space-y-2">
              <li><strong>H₂:</strong> Two H atoms share 2 electrons → both get 2 electrons (like helium)</li>
              <li><strong>Cl₂:</strong> Two Cl atoms share 2 electrons → both get 8 outer electrons</li>
              <li><strong>H₂O:</strong> O shares with 2 H atoms → O gets 8, each H gets 2</li>
              <li><strong>CH₄:</strong> C shares with 4 H atoms → C gets 8, each H gets 2</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">Properties</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Low melting/boiling points:</strong> Weak intermolecular forces between molecules</li>
            <li><strong>Poor electrical conductivity:</strong> No charged particles free to move</li>
          </ul>
        </div>
      )}

      {/* Similar question structure as Strand 1 */}
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 1</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Describe how a covalent bond forms in a hydrogen molecule (H₂). Include what happens to the electrons and why this leads to a stable molecule.
        </p>

        <textarea
          value={answers['2-1'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '2-1': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => checkAnswer(2, 1, answers['2-1'] || '')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Check Answer
          </button>
        </div>

        {feedback['2-1'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['2-1'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['2-1'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['2-1'].text}</div>
            <p className="mb-4">{feedback['2-1'].detail}</p>
            {feedback['2-1'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['2-1'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => completeStrand(2)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
        >
          Complete Strand 2 <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const Strand3 = ({ answers, setAnswers, feedback, checkAnswer, checkMCQ, completeStrand, showLearning, setShowLearning }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-800 mb-6">💎 Strand 3: Giant Structures</h1>
      <button
        onClick={() => setShowLearning(prev => ({ ...prev, 3: !prev[3] }))}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold mb-6 flex items-center gap-2"
      >
        <BookOpen size={20} />
        {showLearning[3] ? 'Hide' : 'Show'} Learning Material
      </button>

      {showLearning[3] && (
        <div className="bg-gray-50 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Giant Covalent Structures</h2>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <strong>Key Concept:</strong> Giant covalent structures are huge networks of atoms bonded together by strong covalent bonds extending in all directions.
          </div>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">Diamond</h3>
          <p className="mb-3"><strong>Structure:</strong> Each carbon forms 4 strong covalent bonds in a tetrahedral 3D lattice</p>
          <p className="mb-3"><strong>Properties:</strong> Extremely hard, very high melting point, doesn't conduct electricity</p>
          <p><strong>Uses:</strong> Cutting tools due to extreme hardness</p>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">Graphite</h3>
          <p className="mb-3"><strong>Structure:</strong> Each carbon forms 3 bonds, creating layers with delocalized electrons</p>
          <p className="mb-3"><strong>Properties:</strong> Soft/slippery layers, high melting point, conducts electricity</p>
          <p><strong>Uses:</strong> Lubricant and electrodes</p>
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 1</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Describe the structure of diamond and explain why it is extremely hard.
        </p>

        <textarea
          value={answers['3-1'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '3-1': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <button
          onClick={() => checkAnswer(3, 1, answers['3-1'] || '')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
        >
          Check Answer
        </button>

        {feedback['3-1'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['3-1'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['3-1'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['3-1'].text}</div>
            <p className="mb-4">{feedback['3-1'].detail}</p>
            {feedback['3-1'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['3-1'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => completeStrand(3)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
      >
        Complete Strand 3 <ChevronRight />
      </button>
    </div>
  );
};

const Strand4 = ({ answers, setAnswers, feedback, checkAnswer, checkMCQ, completeStrand, showLearning, setShowLearning }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-800 mb-6">🔗 Strand 4: Metallic Bonding</h1>
      <button
        onClick={() => setShowLearning(prev => ({ ...prev, 4: !prev[4] }))}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold mb-6 flex items-center gap-2"
      >
        <BookOpen size={20} />
        {showLearning[4] ? 'Hide' : 'Show'} Learning Material
      </button>

      {showLearning[4] && (
        <div className="bg-gray-50 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">What is Metallic Bonding?</h2>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <strong>Key Concept:</strong> Metallic bonding is the electrostatic attraction between positive metal ions in a giant lattice and a 'sea' of delocalized electrons.
          </div>

          <h3 className="text-xl font-semibold text-purple-600 mt-6 mb-3">Properties Explained</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Good conductivity:</strong> Delocalized electrons free to move</li>
            <li><strong>Malleable:</strong> Layers can slide while electrons maintain bonding</li>
            <li><strong>High melting points:</strong> Strong attraction throughout structure</li>
          </ul>
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 1</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          Describe metallic bonding, including the structure of metals and the role of delocalized electrons.
        </p>

        <textarea
          value={answers['4-1'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '4-1': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <button
          onClick={() => checkAnswer(4, 1, answers['4-1'] || '')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
        >
          Check Answer
        </button>

        {feedback['4-1'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['4-1'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['4-1'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['4-1'].text}</div>
            <p className="mb-4">{feedback['4-1'].detail}</p>
            {feedback['4-1'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['4-1'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => completeStrand(4)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
      >
        Complete Strand 4 <ChevronRight />
      </button>
    </div>
  );
};

const Strand5 = ({ answers, setAnswers, feedback, checkAnswer, checkMCQ, completeStrand, showLearning, setShowLearning }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-800 mb-6">🎯 Strand 5: Comparative Analysis</h1>
      <button
        onClick={() => setShowLearning(prev => ({ ...prev, 5: !prev[5] }))}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold mb-6 flex items-center gap-2"
      >
        <BookOpen size={20} />
        {showLearning[5] ? 'Hide' : 'Show'} Learning Material
      </button>

      {showLearning[5] && (
        <div className="bg-gray-50 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Comparing Bonding Types</h2>
          
          <div className="bg-purple-100 p-4 rounded-lg mb-6">
            <strong>Key Skill:</strong> Predict properties from bonding type and structure
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Melting Point</th>
                  <th className="text-left p-2">Conductivity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-2">Ionic</td><td className="p-2">High</td><td className="p-2">Good when molten/aqueous</td></tr>
                <tr className="border-b"><td className="p-2">Simple Covalent</td><td className="p-2">Low</td><td className="p-2">Poor</td></tr>
                <tr className="border-b"><td className="p-2">Giant Covalent</td><td className="p-2">Very High</td><td className="p-2">Poor (except graphite)</td></tr>
                <tr><td className="p-2">Metallic</td><td className="p-2">High</td><td className="p-2">Good when solid/liquid</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">Question 1</span>
          <span className="text-gray-600 font-semibold">10 marks</span>
        </div>
        
        <p className="text-lg mb-6">
          A substance has a very high melting point and does not conduct electricity in any state. What type of bonding does it have? Explain your reasoning.
        </p>

        <textarea
          value={answers['5-1'] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, '5-1': e.target.value }))}
          placeholder="Type your answer here..."
          className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />

        <button
          onClick={() => checkAnswer(5, 1, answers['5-1'] || '')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold mt-4"
        >
          Check Answer
        </button>

        {feedback['5-1'] && (
          <div className={`mt-6 p-6 rounded-lg ${
            feedback['5-1'].type === 'excellent' ? 'bg-green-50 border-l-4 border-green-500' :
            feedback['5-1'].type === 'good' ? 'bg-blue-50 border-l-4 border-blue-500' :
            'bg-yellow-50 border-l-4 border-yellow-500'
          }`}>
            <div className="font-bold text-lg mb-2">{feedback['5-1'].text}</div>
            <p className="mb-4">{feedback['5-1'].detail}</p>
            {feedback['5-1'].exemplar && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                <div className="font-semibold text-purple-700 mb-2">📖 Exemplar Response:</div>
                <p>{feedback['5-1'].exemplar}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => completeStrand(5)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
      >
        Complete Strand 5 <ChevronRight />
      </button>
    </div>
  );
};

export default ChemicalBondingStrandhoot;