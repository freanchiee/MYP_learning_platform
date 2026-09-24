import React, { useState, useEffect, useRef } from 'react';
import { Star, Sparkles, Award, Play, ChevronRight, Trophy, Zap } from 'lucide-react';
import * as THREE from 'three';

const StellarEvolutionExplorer = () => {
  // State management
  const [studentName, setStudentName] = useState('');
  const [currentSection, setCurrentSection] = useState('welcome');
  const [stellarMass, setStellarMass] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [evolutionStage, setEvolutionStage] = useState(0);
  const [selectedHRRegion, setSelectedHRRegion] = useState(null);
  const [parallaxAngle, setParallaxAngle] = useState(0.5);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [badges, setBadges] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [sectionStars, setSectionStars] = useState({ section1: 0, section2: 0, section3: 0 });
  const [knobAngle, setKnobAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);
  const evolutionPathRef = useRef([]);

  // Constants
  const chandrasekharLimit = 1.4;
  const tovLimit = 2.5;

  // Helper functions
  const getCoreMass = (mass) => {
    if (mass < 0.5) return mass * 0.45;
    if (mass < 8) return mass * 0.45;
    if (mass < 20) return mass * 0.15;
    return mass * 0.12;
  };

  const coreMass = getCoreMass(stellarMass);

  const getEvolutionPath = (mass) => {
    const core = getCoreMass(mass);
    if (mass < 0.5) {
      return ['Main Sequence', 'Red Dwarf', 'Stable'];
    } else if (mass < 8) {
      return ['Main Sequence', 'Red Giant', 'Planetary Nebula', 'White Dwarf'];
    } else if (mass < 20) {
      return core < tovLimit 
        ? ['Main Sequence', 'Red Supergiant', 'Supernova', 'Neutron Star']
        : ['Main Sequence', 'Red Supergiant', 'Supernova', 'Black Hole'];
    } else {
      return ['Main Sequence', 'Red Supergiant', 'Supernova', 'Black Hole'];
    }
  };

  // Knob interaction
  const handleKnobMouseDown = (e) => {
    setIsDragging(true);
    updateKnobPosition(e);
  };

  const updateKnobPosition = (e) => {
    const knobElement = document.querySelector('[data-knob]');
    if (!knobElement) return;
    
    const rect = knobElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degrees = (angle * 180 / Math.PI + 90 + 360) % 360;
    setKnobAngle(degrees);
    const mass = (degrees / 360) * 99.9 + 0.1;
    setStellarMass(mass);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => updateKnobPosition(e);
    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Play evolution
  const playEvolution = () => {
    evolutionPathRef.current = getEvolutionPath(stellarMass);
    setEvolutionStage(0);
    setIsPlaying(true);
  };

  // Auto-advance stages
  useEffect(() => {
    if (!isPlaying || !evolutionPathRef.current.length) return;

    if (evolutionStage >= evolutionPathRef.current.length - 1) {
      setIsPlaying(false);
      return;
    }

    const stageName = evolutionPathRef.current[evolutionStage];
    const delay = stageName.includes('Supernova') ? 3000 : 
                  stageName.includes('Giant') ? 2500 : 2000;

    const timer = setTimeout(() => {
      setEvolutionStage(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [isPlaying, evolutionStage]);

  // Three.js setup
  useEffect(() => {
    if (currentSection !== 'section1' || showQuiz || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(600, 400);
    camera.position.z = 10;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Star core
    const coreGeometry = new THREE.SphereGeometry(1, 32, 32);
    const coreMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffff00,
      emissive: 0xff9900,
      emissiveIntensity: 0.5
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Outer layer
    const outerGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const outerMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffaa00,
      transparent: true,
      opacity: 0.6,
      emissive: 0xff6600,
      emissiveIntensity: 0.3
    });
    const outer = new THREE.Mesh(outerGeometry, outerMaterial);
    scene.add(outer);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(1000 * 3);
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ 
      color: 0xff6600,
      size: 0.1,
      transparent: true,
      opacity: 0
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    sceneRef.current = { scene, renderer, camera, core, outer, particles };

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      core.rotation.y += 0.01;
      outer.rotation.y -= 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      outerGeometry.dispose();
      outerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [currentSection, showQuiz]);

  // Update 3D visualization
  useEffect(() => {
    if (!isPlaying || !sceneRef.current || !evolutionPathRef.current.length) return;

    const { core, outer, particles } = sceneRef.current;
    const stageName = evolutionPathRef.current[evolutionStage];

    if (stageName.includes('Main Sequence')) {
      core.scale.setScalar(1);
      outer.scale.setScalar(1.2);
      core.material.color.setHex(0xffff00);
      outer.material.opacity = 0.6;
      particles.material.opacity = 0;
    } else if (stageName.includes('Giant')) {
      const scale = stageName.includes('Supergiant') ? 3.5 : 2.8;
      core.scale.setScalar(0.7);
      outer.scale.setScalar(scale);
      core.material.color.setHex(0xffaa00);
      outer.material.color.setHex(0xff4400);
      outer.material.opacity = 0.4;
      particles.material.opacity = 0;
    } else if (stageName.includes('Supernova')) {
      core.scale.setScalar(0.3);
      outer.scale.setScalar(0.3);
      particles.material.opacity = 1;
      particles.material.color.setHex(0xff6600);
    } else if (stageName.includes('White Dwarf')) {
      core.scale.setScalar(0.3);
      outer.scale.setScalar(0);
      core.material.color.setHex(0xffffff);
      core.material.emissive.setHex(0xaaaaff);
      particles.material.opacity = 0;
    } else if (stageName.includes('Neutron')) {
      core.scale.setScalar(0.2);
      outer.scale.setScalar(0);
      core.material.color.setHex(0xaa88ff);
      core.material.emissive.setHex(0x8844ff);
      particles.material.opacity = 0;
    } else if (stageName.includes('Black Hole')) {
      core.scale.setScalar(0.4);
      outer.scale.setScalar(0);
      core.material.color.setHex(0x000000);
      core.material.emissive.setHex(0x000000);
      particles.material.opacity = 0.8;
      particles.material.color.setHex(0xff8800);
    }
  }, [isPlaying, evolutionStage]);

  // Quiz data
  const quizData = {
    section1: [
      {
        q: 'What maintains stellar stability?',
        options: ['Gravity only', 'Radiation pressure only', 'Balance between radiation pressure and gravity', 'Magnetic fields'],
        correct: 2
      },
      {
        q: 'What is the Chandrasekhar Limit?',
        options: ['Maximum stellar mass', 'Maximum core mass for white dwarf (~1.4 M☉)', 'Minimum fusion temperature', 'Maximum radius'],
        correct: 1
      },
      {
        q: 'What determines neutron star vs black hole formation?',
        options: ['Surface temperature', 'If core mass exceeds TOV limit (~2.5 M☉)', 'Star color', 'Distance from Earth'],
        correct: 1
      }
    ],
    section2: [
      {
        q: 'Where do stars spend most of their lifetime?',
        options: ['Red Giant region', 'Main Sequence', 'White Dwarf region', 'Instability Strip'],
        correct: 1
      },
      {
        q: 'What characterizes red supergiant stars?',
        options: ['High temp, low luminosity', 'Low temp, high luminosity', 'High temp, high luminosity', 'Low temp, low luminosity'],
        correct: 1
      },
      {
        q: 'What supports white dwarfs?',
        options: ['Nuclear fusion', 'Radiation pressure', 'Electron degeneracy pressure', 'Magnetic fields'],
        correct: 2
      }
    ],
    section3: [
      {
        q: 'What is the parallax formula?',
        options: ['d = p', 'd = 1/p', 'd = p²', 'd = 2p'],
        correct: 1
      },
      {
        q: 'What is a parsec?',
        options: ['Distance at parallax of 1 arc-second', '1 light year', '1 AU', '1 million km'],
        correct: 0
      },
      {
        q: 'How to determine stellar radius?',
        options: ['Using parallax only', 'From luminosity, temperature and distance', 'By measuring directly', 'Cannot be determined'],
        correct: 1
      }
    ]
  };

  const checkQuiz = (section) => {
    const answers = quizAnswers[section] || {};
    const quiz = quizData[section];
    let correct = 0;
    quiz.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    const stars = Math.round((correct / quiz.length) * 3);
    setSectionStars(prev => ({ ...prev, [section]: stars }));
    setTotalScore(prev => prev + correct * 10);
    
    const newBadges = [...badges];
    if (correct === quiz.length && section === 'section1' && !badges.includes('Fusion Master')) {
      newBadges.push('Fusion Master');
    }
    if (correct === quiz.length && section === 'section2' && !badges.includes('HR Diagram Expert')) {
      newBadges.push('HR Diagram Expert');
    }
    if (correct === quiz.length && section === 'section3' && !badges.includes('Parallax Pioneer')) {
      newBadges.push('Parallax Pioneer');
    }
    setBadges(newBadges);
    setShowQuiz(false);
  };

  const hrRegions = [
    { name: 'Main Sequence', x: 40, y: 30, color: 'bg-yellow-400', info: 'Stars fusing hydrogen. High temp & luminosity (top) to low (bottom). 90% of lifetime here.' },
    { name: 'Red Giants', x: 15, y: 20, color: 'bg-red-400', info: 'Cool surface, very high luminosity. Large size. Fusing hydrogen in shell around core.' },
    { name: 'Red Supergiants', x: 10, y: 10, color: 'bg-red-600', info: 'Extremely large and luminous. Cool surface. From very massive stars (>8 M☉).' },
    { name: 'White Dwarfs', x: 70, y: 70, color: 'bg-blue-100', info: 'Hot surface, low luminosity due to small size. No fusion. Electron degeneracy support.' },
    { name: 'Instability Strip', x: 35, y: 35, color: 'bg-purple-300', info: 'Pulsating stars with varying luminosity. Intermediate stage. Short time here.' }
  ];

  const distance = parallaxAngle > 0 ? (1 / parallaxAngle).toFixed(2) : 0;

  // Render
  if (currentSection === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-8 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <Star className="w-20 h-20 text-yellow-400 animate-pulse mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Stellar Evolution Explorer</h1>
          <p className="text-xl mb-8 text-gray-300">Journey through the life cycles of stars</p>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <label className="block text-lg mb-3">Enter Your Name to Begin:</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-400 mb-4"
              placeholder="Your name..."
            />
            <button
              onClick={() => studentName && setCurrentSection('section1')}
              disabled={!studentName}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-bold text-lg disabled:opacity-50 hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              Start Exploring <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 'complete') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-8 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <Trophy className="w-32 h-32 text-yellow-400 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold mb-4">Congratulations, {studentName}!</h1>
          <p className="text-2xl mb-8">You've mastered stellar evolution!</p>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <p className="text-3xl font-bold mb-4">Total Score: {totalScore} points</p>
            <div className="flex justify-center gap-4 mb-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="text-center">
                  <p className="text-sm mb-2">Section {i}</p>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <Star key={j} className={`w-6 h-6 ${j < sectionStars[`section${i}`] ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/30 pt-6">
              <p className="text-xl mb-3">Badges Earned:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {badges.map(badge => (
                  <div key={badge} className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-full flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white/10 backdrop-blur p-4 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold">Welcome, {studentName}!</h2>
            <p className="text-sm text-gray-300">Score: {totalScore} points</p>
          </div>
          <div className="flex gap-2">
            {badges.map(badge => (
              <div key={badge} className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Award className="w-4 h-4" />
                {badge.split(' ')[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Section 1 */}
        {currentSection === 'section1' && !showQuiz && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Stellar Evolution Simulator
            </h2>

            {/* Triple Screen Layout */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              
              {/* LEFT PANEL - Mass Selector */}
              <div className="bg-black/40 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Mass Control</h3>
                
                {/* Rotating Knob */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-48 h-48" data-knob>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="90" fill="none" stroke="#4a5568" strokeWidth="2"/>
                      
                      {/* Chandrasekhar limit marker */}
                      <g transform={`rotate(${(1.4 / 100) * 360} 100 100)`}>
                        <line x1="100" y1="10" x2="100" y2="30" stroke="#fbbf24" strokeWidth="3"/>
                        <text x="100" y="8" textAnchor="middle" fill="#fbbf24" fontSize="9">Ch</text>
                      </g>
                      
                      {/* TOV limit marker */}
                      <g transform={`rotate(${(2.5 / 100) * 360} 100 100)`}>
                        <line x1="100" y1="10" x2="100" y2="30" stroke="#60a5fa" strokeWidth="3"/>
                        <text x="100" y="8" textAnchor="middle" fill="#60a5fa" fontSize="9">TOV</text>
                      </g>
                    </svg>
                    
                    <div
                      className="absolute inset-0 cursor-grab active:cursor-grabbing"
                      onMouseDown={handleKnobMouseDown}
                      style={{ transform: `rotate(${knobAngle}deg)` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 shadow-2xl border-4 border-blue-400">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-10 bg-white rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                          {stellarMass.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-sm font-bold mb-4">Stellar Mass: {stellarMass.toFixed(1)} M☉</p>
                
                {/* Core Mass Display */}
                <div className="bg-indigo-900/40 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">Core Mass:</span>
                    <span className="text-xl font-bold text-yellow-400">{coreMass.toFixed(2)} M☉</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-3">
                    Only ~{((coreMass/stellarMass)*100).toFixed(0)}% remains as core
                  </p>
                  
                  {stellarMass >= 0.5 && stellarMass < 8 && (
                    <div className={`p-2 rounded text-xs ${coreMass > chandrasekharLimit ? 'bg-red-900/50' : 'bg-green-900/50'}`}>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">Chandrasekhar:</span>
                        <span>{chandrasekharLimit} M☉</span>
                      </div>
                      <p>
                        {coreMass <= chandrasekharLimit 
                          ? '✓ → White Dwarf' 
                          : '✗ → Collapse!'}
                      </p>
                    </div>
                  )}
                  
                  {stellarMass >= 8 && (
                    <div className={`p-2 rounded text-xs ${coreMass > tovLimit ? 'bg-red-900/50' : 'bg-blue-900/50'}`}>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">TOV Limit:</span>
                        <span>{tovLimit} M☉</span>
                      </div>
                      <p>
                        {coreMass <= tovLimit 
                          ? '✓ → Neutron Star' 
                          : '✗ → Black Hole'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={playEvolution}
                    disabled={isPlaying}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2 mx-auto disabled:opacity-50 text-sm"
                  >
                    <Play className="w-4 h-4" />
                    {isPlaying ? 'Playing...' : 'Play Evolution'}
                  </button>
                </div>
              </div>

              {/* CENTER PANEL - 3D Animation */}
              <div className="bg-black/40 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Stellar Evolution</h3>
                <div className="flex items-center justify-center" style={{ height: '400px' }}>
                  <canvas ref={canvasRef} className="rounded-lg" style={{ maxWidth: '100%' }}></canvas>
                </div>
                <div className="text-center mt-4">
                  <p className="text-2xl font-bold mb-2">
                    {evolutionPathRef.current[evolutionStage] || 'Main Sequence'}
                  </p>
                  {isPlaying && evolutionPathRef.current[evolutionStage] && (
                    <p className="text-sm text-gray-300">
                      {evolutionPathRef.current[evolutionStage].includes('Main Sequence') && '🔥 Fusing hydrogen in core'}
                      {evolutionPathRef.current[evolutionStage].includes('Giant') && !evolutionPathRef.current[evolutionStage].includes('Supergiant') && '📈 Massive expansion!'}
                      {evolutionPathRef.current[evolutionStage].includes('Supergiant') && '🌟 Enormous size!'}
                      {evolutionPathRef.current[evolutionStage].includes('Supernova') && '💥 EXPLOSION!'}
                      {evolutionPathRef.current[evolutionStage].includes('White Dwarf') && '⚪ Dense remnant'}
                      {evolutionPathRef.current[evolutionStage].includes('Neutron') && '🌀 Ultra-dense!'}
                      {evolutionPathRef.current[evolutionStage].includes('Black Hole') && '⚫ Singularity'}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    {evolutionPathRef.current.length > 0 
                      ? evolutionPathRef.current.join(' → ') 
                      : getEvolutionPath(stellarMass).join(' → ')}
                  </p>
                </div>
              </div>

              {/* RIGHT PANEL - Live HR Diagram */}
              <div className="bg-black/40 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">HR Diagram</h3>
                <div className="relative bg-black/60 rounded-lg" style={{ height: '400px' }}>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold">
                    Luminosity →
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold">
                    ← Temperature
                  </div>
                  
                  {/* Main Sequence Line */}
                  <div className="absolute top-8 left-8 bottom-8 right-8">
                    <svg className="w-full h-full">
                      <line x1="10%" y1="15%" x2="85%" y2="85%" stroke="yellow" strokeWidth="2" opacity="0.4" />
                    </svg>
                  </div>

                  {/* HR Regions as background */}
                  <div className="absolute" style={{ left: '40%', top: '50%', width: '30px', height: '30px', transform: 'translate(-50%, -50%)' }}>
                    <div className="w-full h-full bg-yellow-400/20 rounded-full"></div>
                  </div>
                  <div className="absolute" style={{ left: '15%', top: '20%', width: '40px', height: '40px', transform: 'translate(-50%, -50%)' }}>
                    <div className="w-full h-full bg-red-400/20 rounded-full"></div>
                  </div>
                  <div className="absolute" style={{ left: '70%', top: '70%', width: '20px', height: '20px', transform: 'translate(-50%, -50%)' }}>
                    <div className="w-full h-full bg-blue-100/20 rounded-full"></div>
                  </div>

                  {/* Current Position Marker */}
                  {(() => {
                    const currentStage = evolutionPathRef.current[evolutionStage] || 'Main Sequence';
                    let position = { x: 40, y: 50 }; // Default: Main Sequence
                    
                    if (currentStage.includes('Main Sequence')) {
                      // Position based on mass
                      if (stellarMass < 0.5) position = { x: 60, y: 70 };
                      else if (stellarMass < 2) position = { x: 50, y: 60 };
                      else if (stellarMass < 8) position = { x: 35, y: 40 };
                      else position = { x: 20, y: 25 };
                    } else if (currentStage.includes('Red Giant')) {
                      position = { x: 15, y: 20 };
                    } else if (currentStage.includes('Red Supergiant')) {
                      position = { x: 12, y: 15 };
                    } else if (currentStage.includes('White Dwarf')) {
                      position = { x: 70, y: 70 };
                    } else if (currentStage.includes('Neutron')) {
                      position = { x: 75, y: 65 };
                    } else if (currentStage.includes('Black Hole')) {
                      position = { x: 50, y: 10 };
                    }
                    
                    return (
                      <div 
                        className="absolute w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg animate-pulse transition-all duration-1000"
                        style={{ 
                          left: `${position.x}%`, 
                          top: `${position.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                    );
                  })()}

                  {/* Stage Labels */}
                  <div className="absolute left-4 top-4 text-xs">
                    <div className="bg-yellow-400/80 text-black px-2 py-1 rounded mb-1">Main Seq</div>
                  </div>
                  <div className="absolute left-4 top-16 text-xs">
                    <div className="bg-red-400/80 text-white px-2 py-1 rounded mb-1">Red Giant</div>
                  </div>
                  <div className="absolute right-4 bottom-4 text-xs">
                    <div className="bg-blue-100/80 text-black px-2 py-1 rounded">White Dwarf</div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm font-bold text-green-400">● Current Stage</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Watch the star's position move through the HR diagram as it evolves!
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowQuiz(true)}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold mx-auto block"
            >
              Take Quiz →
            </button>
          </div>
        )}

        {/* Section 1 Quiz */}
        {currentSection === 'section1' && showQuiz && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Section 1 Quiz</h2>
            {quizData.section1.map((item, idx) => (
              <div key={idx} className="mb-6 bg-black/20 p-4 rounded">
                <p className="font-bold mb-3">{idx + 1}. {item.q}</p>
                {item.options.map((opt, optIdx) => (
                  <label key={optIdx} className="block mb-2 cursor-pointer hover:bg-white/10 p-2 rounded">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      checked={quizAnswers.section1?.[idx] === optIdx}
                      onChange={() => setQuizAnswers(prev => ({
                        ...prev,
                        section1: { ...prev.section1, [idx]: optIdx }
                      }))}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}
            <button
              onClick={() => {
                checkQuiz('section1');
                setCurrentSection('section2');
              }}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold"
            >
              Submit & Continue
            </button>
          </div>
        )}

        {/* Section 2 */}
        {currentSection === 'section2' && !showQuiz && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              HR Diagram
            </h2>

            <div className="relative bg-black/60 p-8 rounded-lg h-96 mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-bold">
                Luminosity (High → Low)
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold">
                Temperature (High ← → Low)
              </div>
              
              <div className="absolute top-8 left-16 bottom-16 right-16">
                <svg className="w-full h-full">
                  <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="yellow" strokeWidth="3" opacity="0.6" />
                </svg>
              </div>

              {hrRegions.map((region, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHRRegion(region)}
                  className={`absolute ${region.color} rounded-full w-16 h-16 flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform shadow-lg`}
                  style={{ left: `${region.x}%`, top: `${region.y}%` }}
                >
                  {region.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {selectedHRRegion && (
              <div className="bg-purple-900/40 p-6 rounded-lg mb-6">
                <h3 className="text-2xl font-bold mb-3">{selectedHRRegion.name}</h3>
                <p>{selectedHRRegion.info}</p>
              </div>
            )}

            <button
              onClick={() => setShowQuiz(true)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold mx-auto block"
            >
              Take Quiz →
            </button>
          </div>
        )}

        {/* Section 2 Quiz */}
        {currentSection === 'section2' && showQuiz && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Section 2 Quiz</h2>
            {quizData.section2.map((item, idx) => (
              <div key={idx} className="mb-6 bg-black/20 p-4 rounded">
                <p className="font-bold mb-3">{idx + 1}. {item.q}</p>
                {item.options.map((opt, optIdx) => (
                  <label key={optIdx} className="block mb-2 cursor-pointer hover:bg-white/10 p-2 rounded">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      checked={quizAnswers.section2?.[idx] === optIdx}
                      onChange={() => setQuizAnswers(prev => ({
                        ...prev,
                        section2: { ...prev.section2, [idx]: optIdx }
                      }))}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}
            <button
              onClick={() => {
                checkQuiz('section2');
                setCurrentSection('section3');
              }}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold"
            >
              Submit & Continue
            </button>
          </div>
        )}

        {/* Section 3 */}
        {currentSection === 'section3' && !showQuiz && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-8 h-8 text-yellow-400" />
              Stellar Parallax
            </h2>

            <div className="mb-6 bg-blue-900/30 p-4 rounded">
              <h3 className="text-xl font-bold mb-2">Measuring Star Distances</h3>
              <p className="mb-2">Parallax is the apparent shift in position when observed from different points in Earth's orbit.</p>
              <p className="text-lg font-bold mt-3">Formula: d (parsec) = 1 / p (arc-second)</p>
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-3">Parallax Angle: {parallaxAngle.toFixed(3)} arc-seconds</label>
              <input
                type="range"
                min="0.001"
                max="1"
                step="0.001"
                value={parallaxAngle}
                onChange={(e) => setParallaxAngle(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg"
              />
            </div>

            <div className="bg-black/60 p-8 rounded-lg text-center mb-6">
              <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4"></div>
              <div className="text-3xl font-bold mb-2">Distance: {distance} parsecs</div>
              <div className="text-xl text-gray-300">≈ {(distance * 3.26).toFixed(2)} light years</div>
            </div>

            <button
              onClick={() => setShowQuiz(true)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold mx-auto block"
            >
              Take Quiz →
            </button>
          </div>
        )}

        {/* Section 3 Quiz */}
        {currentSection === 'section3' && showQuiz && (
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Section 3 Quiz</h2>
            {quizData.section3.map((item, idx) => (
              <div key={idx} className="mb-6 bg-black/20 p-4 rounded">
                <p className="font-bold mb-3">{idx + 1}. {item.q}</p>
                {item.options.map((opt, optIdx) => (
                  <label key={optIdx} className="block mb-2 cursor-pointer hover:bg-white/10 p-2 rounded">
                    <input
                      type="radio"
                      name={`q${idx}`}
                      checked={quizAnswers.section3?.[idx] === optIdx}
                      onChange={() => setQuizAnswers(prev => ({
                        ...prev,
                        section3: { ...prev.section3, [idx]: optIdx }
                      }))}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}
            <button
              onClick={() => {
                checkQuiz('section3');
                setCurrentSection('complete');
              }}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold"
            >
              Complete Course!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StellarEvolutionExplorer;