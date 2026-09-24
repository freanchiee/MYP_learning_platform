import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Spectral:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #06080f;
    color: #c8d8f0;
    font-family: 'Spectral', serif;
  }

  .app {
    min-height: 100vh;
    background: #06080f;
    background-image:
      radial-gradient(ellipse at 20% 10%, rgba(30,60,120,0.18) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 80%, rgba(10,80,60,0.12) 0%, transparent 50%);
    padding: 0 0 80px 0;
  }

  .header {
    border-bottom: 1px solid rgba(100,160,255,0.12);
    padding: 28px 48px;
    display: flex;
    align-items: baseline;
    gap: 16px;
  }

  .header-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: rgba(80,160,255,0.5);
    text-transform: uppercase;
  }

  .header h1 {
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #d0e4ff;
  }

  .header h1 em {
    font-style: italic;
    color: #5ab4ff;
  }

  .nav {
    display: flex;
    gap: 0;
    padding: 0 48px;
    border-bottom: 1px solid rgba(100,160,255,0.08);
    overflow-x: auto;
  }

  .nav-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 1.5px;
    padding: 14px 20px;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: rgba(150,180,220,0.45);
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .nav-btn:hover { color: rgba(150,180,220,0.8); }

  .nav-btn.active {
    color: #5ab4ff;
    border-bottom-color: #5ab4ff;
  }

  .content {
    max-width: 860px;
    margin: 0 auto;
    padding: 52px 48px 0;
  }

  .section-intro {
    margin-bottom: 44px;
  }

  .section-intro .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    color: rgba(80,200,140,0.6);
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .section-intro h2 {
    font-size: 30px;
    font-weight: 300;
    line-height: 1.3;
    color: #ddeeff;
    margin-bottom: 14px;
  }

  .section-intro p {
    font-size: 17px;
    line-height: 1.75;
    color: rgba(180,210,240,0.7);
    font-weight: 300;
  }

  /* CARDS */
  .card {
    background: rgba(15,25,50,0.6);
    border: 1px solid rgba(80,130,200,0.12);
    border-radius: 4px;
    padding: 28px 32px;
    margin-bottom: 20px;
  }

  .card h3 {
    font-size: 13px;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(80,200,140,0.8);
    margin-bottom: 16px;
  }

  .card p {
    font-size: 16px;
    line-height: 1.75;
    color: rgba(180,210,240,0.75);
    font-weight: 300;
  }

  .card p + p { margin-top: 10px; }

  /* KET NOTATION */
  .ket-row {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(80,130,200,0.08);
  }

  .ket-row:last-child { border-bottom: none; }

  .ket-symbol {
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    color: #5ab4ff;
    min-width: 90px;
    letter-spacing: 1px;
  }

  .ket-meaning {
    font-size: 15px;
    color: rgba(180,210,240,0.65);
    font-weight: 300;
  }

  .ket-note {
    font-size: 13px;
    font-style: italic;
    color: rgba(130,180,240,0.45);
    margin-top: 3px;
  }

  /* CODE BLOCK */
  .code-block {
    background: rgba(5,10,25,0.9);
    border: 1px solid rgba(80,130,200,0.15);
    border-left: 3px solid #5ab4ff;
    border-radius: 0 4px 4px 0;
    padding: 20px 24px;
    margin: 20px 0;
    overflow-x: auto;
  }

  .code-block pre {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    line-height: 1.85;
    color: #b8d4f0;
  }

  .code-comment { color: rgba(100,160,100,0.6); }
  .code-keyword { color: #ff9f7a; }
  .code-string { color: #7affa0; }
  .code-number { color: #ffda7a; }
  .code-fn { color: #a0c8ff; }

  /* GATE DISPLAY */
  .gate-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 8px;
  }

  .gate-card {
    background: rgba(10,18,40,0.8);
    border: 1px solid rgba(80,130,200,0.12);
    border-radius: 4px;
    padding: 20px 22px;
    cursor: pointer;
    transition: all 0.25s;
  }

  .gate-card:hover {
    border-color: rgba(90,180,255,0.3);
    background: rgba(15,28,60,0.9);
  }

  .gate-card.selected {
    border-color: rgba(90,180,255,0.5);
    background: rgba(15,30,70,0.95);
  }

  .gate-symbol {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    background: rgba(90,180,255,0.15);
    border: 1px solid rgba(90,180,255,0.3);
    border-radius: 3px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 10px;
  }

  .gate-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(80,200,140,0.7);
    margin-bottom: 8px;
  }

  .gate-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(160,200,240,0.65);
    font-weight: 300;
  }

  .gate-detail {
    margin-top: 20px;
    background: rgba(5,12,30,0.7);
    border: 1px solid rgba(90,180,255,0.18);
    border-radius: 4px;
    padding: 22px 26px;
  }

  .gate-detail h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 2px;
    color: #5ab4ff;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  /* CIRCUIT VISUAL */
  .circuit {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 2.2;
    color: #b0d0f0;
    padding: 16px 0 8px;
    overflow-x: auto;
  }

  .circuit .qubit-label { color: rgba(80,200,140,0.7); }
  .circuit .gate-box {
    display: inline-block;
    background: rgba(90,180,255,0.12);
    border: 1px solid rgba(90,180,255,0.35);
    border-radius: 2px;
    padding: 0 6px;
    color: #fff;
  }

  .circuit .wire { color: rgba(100,140,200,0.4); }
  .circuit .measure {
    display: inline-block;
    background: rgba(200,100,80,0.12);
    border: 1px solid rgba(200,120,80,0.35);
    border-radius: 2px;
    padding: 0 6px;
    color: #ffaa88;
  }

  /* BLOCH */
  .bloch-container {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    margin-top: 8px;
  }

  .bloch-svg-wrap {
    flex-shrink: 0;
  }

  .bloch-states {
    flex: 1;
  }

  .bloch-state-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(80,130,200,0.08);
    cursor: pointer;
    transition: all 0.2s;
  }

  .bloch-state-row:hover { background: rgba(30,60,120,0.15); }
  .bloch-state-row:last-child { border-bottom: none; }

  .bloch-state-row.active { background: rgba(30,60,120,0.25); }

  .bloch-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .bloch-ket {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    color: #5ab4ff;
    min-width: 50px;
  }

  .bloch-info {
    font-size: 13px;
    color: rgba(160,200,240,0.6);
    font-weight: 300;
  }

  /* UNCERTAINTY TABLE */
  .u-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin-top: 8px;
  }

  .u-table th {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(80,200,140,0.6);
    padding: 12px 16px;
    border-bottom: 1px solid rgba(80,130,200,0.15);
    text-align: left;
  }

  .u-table td {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(80,130,200,0.06);
    color: rgba(180,210,240,0.7);
    font-weight: 300;
  }

  .u-table tr:last-child td { border-bottom: none; }

  .certain { color: #7affa0; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
  .uncertain { color: #ffaa88; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
  .ket-inline { font-family: 'JetBrains Mono', monospace; color: #5ab4ff; }

  /* HISTOGRAM */
  .histogram {
    display: flex;
    gap: 4px;
    align-items: flex-end;
    height: 80px;
    margin: 16px 0 8px;
  }

  .hist-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1;
  }

  .hist-fill {
    width: 100%;
    border-radius: 2px 2px 0 0;
    transition: height 0.6s ease;
  }

  .hist-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(150,190,230,0.6);
  }

  /* CALLOUT */
  .callout {
    background: rgba(10,50,30,0.3);
    border: 1px solid rgba(80,200,140,0.2);
    border-left: 3px solid rgba(80,200,140,0.5);
    border-radius: 0 4px 4px 0;
    padding: 16px 20px;
    margin: 20px 0;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(160,230,190,0.75);
    font-style: italic;
    font-weight: 300;
  }

  .callout strong {
    font-style: normal;
    font-weight: 600;
    color: rgba(100,230,150,0.9);
  }

  /* STEP FLOW */
  .steps { margin-top: 8px; }

  .step {
    display: flex;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(80,130,200,0.07);
  }

  .step:last-child { border-bottom: none; }

  .step-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(90,180,255,0.4);
    min-width: 24px;
    padding-top: 3px;
  }

  .step-body h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 1px;
    color: #5ab4ff;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .step-body p {
    font-size: 14px;
    line-height: 1.65;
    color: rgba(160,200,240,0.65);
    font-weight: 300;
  }

  /* TABS (sub) */
  .sub-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(80,130,200,0.1);
  }

  .sub-tab {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px 18px;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: rgba(120,160,210,0.4);
    cursor: pointer;
    transition: all 0.2s;
  }

  .sub-tab.active { color: rgba(80,200,140,0.8); border-bottom-color: rgba(80,200,140,0.6); }
  .sub-tab:hover:not(.active) { color: rgba(120,160,210,0.7); }

  .divider {
    height: 1px;
    background: rgba(80,130,200,0.08);
    margin: 36px 0;
  }
`;

// ── DATA ────────────────────────────────────────────────────

const GATES = {
  H: {
    name: "Hadamard",
    symbol: "H",
    desc: "Creates superposition. Turns |0⟩ into an equal mix of |0⟩ and |1⟩.",
    action: "|0⟩ → (|0⟩ + |1⟩)/√2",
    physics: "Like splitting a wave into two equal paths — the qubit genuinely exists in both states until measured.",
    circuit: "|0⟩ ──[H]── Measure → 50% chance of 0, 50% chance of 1",
    qiskit: `from qiskit import QuantumCircuit
qc = QuantumCircuit(1, 1)
qc.h(0)          # Apply Hadamard gate
qc.measure(0, 0) # Measure qubit 0`,
  },
  X: {
    name: "Pauli-X (NOT)",
    symbol: "X",
    desc: "Flips the qubit. Turns |0⟩ into |1⟩ and vice versa. The quantum NOT gate.",
    action: "|0⟩ → |1⟩  and  |1⟩ → |0⟩",
    physics: "Analogous to a 180° rotation around the X-axis of the Bloch sphere. Equivalent to a classical bit flip.",
    circuit: "|0⟩ ──[X]── Measure → Always gives 1",
    qiskit: `from qiskit import QuantumCircuit
qc = QuantumCircuit(1, 1)
qc.x(0)          # Flip qubit
qc.measure(0, 0)`,
  },
  Z: {
    name: "Pauli-Z (Phase Flip)",
    symbol: "Z",
    desc: "Flips the phase. |0⟩ unchanged. |1⟩ gets a negative sign. Invisible to Z-measurement.",
    action: "|0⟩ → |0⟩  and  |1⟩ → −|1⟩",
    physics: "Phase is the 'hidden' wave property of a qubit. Z-gate changes it — you can only detect this by measuring in a different basis (e.g. after an H gate).",
    circuit: "|0⟩ ──[H]──[Z]──[H]── Measure → Always gives 0",
    qiskit: `from qiskit import QuantumCircuit
qc = QuantumCircuit(1, 1)
qc.h(0)          # Into superposition
qc.z(0)          # Flip the phase
qc.h(0)          # Back to Z-basis
qc.measure(0, 0) # → always 0`,
  },
  S: {
    name: "S Gate (Phase √Z)",
    symbol: "S",
    desc: "Rotates the phase by 90°. Half of a Z-gate. Moves the qubit along the equator of the Bloch sphere.",
    action: "|0⟩ → |0⟩  and  |1⟩ → i|1⟩",
    physics: "Introduces a 90° phase shift. After [H][S][H] the outcome is mixed — perfect for demonstrating the uncertainty trade-off.",
    circuit: "|0⟩ ──[H]──[S]──[H]── Measure → Mixed result",
    qiskit: `from qiskit import QuantumCircuit
qc = QuantumCircuit(1, 1)
qc.h(0)
qc.s(0)          # 90° phase rotation
qc.h(0)
qc.measure(0, 0) # → random outcome`,
  },
};

const BLOCH_STATES = [
  { ket: "|0⟩", label: "North pole", desc: "Z-basis: certain 0. X-basis: fully uncertain.", color: "#5ab4ff", theta: 0, phi: 0 },
  { ket: "|1⟩", label: "South pole", desc: "Z-basis: certain 1. X-basis: fully uncertain.", color: "#ff7a7a", theta: Math.PI, phi: 0 },
  { ket: "|+⟩", label: "Equator front", desc: "X-basis: certain +. Z-basis: fully uncertain.", color: "#7affa0", theta: Math.PI/2, phi: 0 },
  { ket: "|−⟩", label: "Equator back", desc: "X-basis: certain −. Z-basis: fully uncertain.", color: "#ffda7a", theta: Math.PI/2, phi: Math.PI },
];

// ── BLOCH SPHERE SVG ────────────────────────────────────────

function BlochSphere({ activeIdx }) {
  const cx = 100, cy = 110, r = 72;
  const state = BLOCH_STATES[activeIdx];
  const { theta, phi } = state;

  const x3 = Math.sin(theta) * Math.cos(phi);
  const y3 = Math.cos(theta);
  const z3 = Math.sin(theta) * Math.sin(phi);

  const px = cx + r * x3;
  const py = cy - r * y3;

  return (
    <svg width="200" height="220" viewBox="0 0 200 220">
      <defs>
        <radialGradient id="sphereGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="rgba(80,130,200,0.12)" />
          <stop offset="100%" stopColor="rgba(10,20,50,0.4)" />
        </radialGradient>
      </defs>
      {/* Sphere */}
      <circle cx={cx} cy={cy} r={r} fill="url(#sphereGrad)" stroke="rgba(80,130,200,0.2)" strokeWidth="1" />
      {/* Equator ellipse */}
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.28} fill="none" stroke="rgba(80,130,200,0.18)" strokeWidth="1" strokeDasharray="3,3" />
      {/* Meridian */}
      <ellipse cx={cx} cy={cy} rx={r * 0.28} ry={r} fill="none" stroke="rgba(80,130,200,0.12)" strokeWidth="1" strokeDasharray="3,3" />
      {/* Axes */}
      <line x1={cx} y1={cy - r - 12} x2={cx} y2={cy + r + 8} stroke="rgba(100,150,200,0.2)" strokeWidth="1" />
      <line x1={cx - r - 10} y1={cy} x2={cx + r + 10} y2={cy} stroke="rgba(100,150,200,0.2)" strokeWidth="1" />
      {/* Axis labels */}
      <text x={cx} y={cy - r - 16} textAnchor="middle" fill="rgba(80,200,140,0.6)" fontSize="10" fontFamily="JetBrains Mono">|0⟩</text>
      <text x={cx} y={cy + r + 20} textAnchor="middle" fill="rgba(80,200,140,0.6)" fontSize="10" fontFamily="JetBrains Mono">|1⟩</text>
      <text x={cx + r + 14} y={cy + 4} fill="rgba(100,150,200,0.5)" fontSize="10" fontFamily="JetBrains Mono">x</text>
      <text x={cx - r - 20} y={cy + 4} fill="rgba(100,150,200,0.5)" fontSize="10" fontFamily="JetBrains Mono">|+⟩</text>
      {/* State vector */}
      <line x1={cx} y1={cy} x2={px} y2={py} stroke={state.color} strokeWidth="2" strokeLinecap="round" />
      <circle cx={px} cy={py} r={5} fill={state.color} />
      {/* Origin dot */}
      <circle cx={cx} cy={cy} r={2.5} fill="rgba(200,220,255,0.3)" />
      {/* Label */}
      <text x={px + 8} y={py - 6} fill={state.color} fontSize="13" fontFamily="JetBrains Mono">{state.ket}</text>
    </svg>
  );
}

// ── HISTOGRAM ───────────────────────────────────────────────

function HistBar({ pct, label, color }) {
  return (
    <div className="hist-bar">
      <div className="hist-fill" style={{ height: `${pct * 64}px`, background: color, opacity: 0.75 }} />
      <div className="hist-label">{label}</div>
    </div>
  );
}

// ── SECTIONS ────────────────────────────────────────────────

function SectionNotation() {
  return (
    <div>
      <div className="section-intro">
        <div className="eyebrow">Chapter 01</div>
        <h2>The Language of Quantum States</h2>
        <p>Quantum mechanics has its own notation called <em>Dirac notation</em> or <em>bra-ket notation</em>. It looks unusual but has one job: describe a quantum state precisely.</p>
      </div>

      <div className="card">
        <h3>Ket Notation — Writing a State</h3>
        <div className="ket-row">
          <div>
            <div className="ket-symbol">|0⟩</div>
            <div className="ket-note">read: "ket zero"</div>
          </div>
          <div>
            <div className="ket-meaning">The qubit is definitely in state 0.</div>
            <div className="ket-note">Analogy: a coin showing heads. Classical, definite.</div>
          </div>
        </div>
        <div className="ket-row">
          <div>
            <div className="ket-symbol">|1⟩</div>
            <div className="ket-note">read: "ket one"</div>
          </div>
          <div>
            <div className="ket-meaning">The qubit is definitely in state 1.</div>
            <div className="ket-note">Analogy: coin showing tails. Still classical.</div>
          </div>
        </div>
        <div className="ket-row">
          <div>
            <div className="ket-symbol" style={{fontSize: 16}}>α|0⟩ + β|1⟩</div>
            <div className="ket-note">superposition state</div>
          </div>
          <div>
            <div className="ket-meaning">The qubit is in both states simultaneously. α and β are complex probability amplitudes.</div>
            <div className="ket-note">|α|² + |β|² = 1 always (total probability = 100%)</div>
          </div>
        </div>
        <div className="ket-row">
          <div>
            <div className="ket-symbol">|+⟩</div>
            <div className="ket-note">read: "ket plus"</div>
          </div>
          <div>
            <div className="ket-meaning">Equal superposition. Shorthand for (|0⟩ + |1⟩)/√2</div>
            <div className="ket-note">The state after applying H gate to |0⟩</div>
          </div>
        </div>
      </div>

      <div className="callout">
        <strong>Physics connection:</strong> α and β are exactly like wave amplitudes. The probability of measuring 0 is |α|² — this is the Born Rule, the quantum equivalent of intensity = amplitude².
      </div>

      <div className="card">
        <h3>What Measurement Does</h3>
        <p>Before measurement: the qubit is in superposition α|0⟩ + β|1⟩. The moment you measure, the wave function <em>collapses</em> — you get 0 (with probability |α|²) or 1 (with probability |β|²). The superposition is destroyed.</p>
        <p>This is why you must run a circuit many times (called <em>shots</em>) to reconstruct probabilities. One measurement only ever gives you a single classical bit.</p>
        <div className="divider" />
        <h3 style={{marginBottom: 12}}>Example: 1000 shots of |+⟩ state</h3>
        <div style={{display:'flex', gap: 32, alignItems:'flex-end'}}>
          <div>
            <div style={{fontSize:13, fontFamily:'JetBrains Mono', color:'rgba(80,200,140,0.6)', marginBottom: 8, letterSpacing:1}}>IDEAL (SIMULATOR)</div>
            <div className="histogram">
              <HistBar pct={0.5} label="|0⟩" color="#5ab4ff" />
              <HistBar pct={0.5} label="|1⟩" color="#ff9f7a" />
            </div>
            <div style={{fontSize:12, color:'rgba(150,190,230,0.4)', fontFamily:'JetBrains Mono'}}>500 / 500</div>
          </div>
          <div>
            <div style={{fontSize:13, fontFamily:'JetBrains Mono', color:'rgba(80,200,140,0.6)', marginBottom: 8, letterSpacing:1}}>REAL HARDWARE (NOISY)</div>
            <div className="histogram">
              <HistBar pct={0.513} label="|0⟩" color="#5ab4ff" />
              <HistBar pct={0.487} label="|1⟩" color="#ff9f7a" />
            </div>
            <div style={{fontSize:12, color:'rgba(150,190,230,0.4)', fontFamily:'JetBrains Mono'}}>513 / 487</div>
          </div>
        </div>
        <p style={{marginTop: 16}}>The skew in real hardware is caused by <em>decoherence</em> — the qubit interacts with its thermal environment and loses quantum coherence. A direct link to thermodynamics.</p>
      </div>
    </div>
  );
}

function SectionGates() {
  const [selected, setSelected] = useState("H");
  const g = GATES[selected];

  return (
    <div>
      <div className="section-intro">
        <div className="eyebrow">Chapter 02</div>
        <h2>Quantum Gates</h2>
        <p>Gates are operations applied to qubits. They are <em>always reversible</em> (unlike classical gates). Each one is a rotation on the Bloch sphere.</p>
      </div>

      <div className="gate-grid">
        {Object.entries(GATES).map(([key, gate]) => (
          <div key={key} className={`gate-card ${selected === key ? "selected" : ""}`} onClick={() => setSelected(key)}>
            <div className="gate-symbol">{gate.symbol}</div>
            <div className="gate-name">{gate.name}</div>
            <div className="gate-desc">{gate.desc}</div>
          </div>
        ))}
      </div>

      <div className="gate-detail">
        <h4>What it does mathematically</h4>
        <div style={{fontFamily:'JetBrains Mono', fontSize:15, color:'#a0d4ff', marginBottom: 16, padding:'8px 0'}}>{g.action}</div>

        <h4>Physics intuition</h4>
        <p style={{fontSize:15, lineHeight:1.7, color:'rgba(160,200,240,0.7)', fontWeight:300, marginBottom:20}}>{g.physics}</p>

        <h4>Circuit notation</h4>
        <div className="circuit">{g.circuit}</div>

        <h4 style={{marginTop:20}}>Qiskit code</h4>
        <div className="code-block">
          <pre>{g.qiskit}</pre>
        </div>
      </div>
    </div>
  );
}

function SectionBloch() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div>
      <div className="section-intro">
        <div className="eyebrow">Chapter 03</div>
        <h2>The Bloch Sphere</h2>
        <p>Every possible single-qubit state maps to a point on a sphere. The north pole is |0⟩, the south pole is |1⟩, and the equator is superposition. This geometry is the Uncertainty Principle made visual.</p>
      </div>

      <div className="card">
        <h3>Interactive States</h3>
        <div className="bloch-container">
          <div className="bloch-svg-wrap">
            <BlochSphere activeIdx={activeIdx} />
          </div>
          <div className="bloch-states">
            {BLOCH_STATES.map((s, i) => (
              <div key={s.ket} className={`bloch-state-row ${activeIdx === i ? "active" : ""}`} onClick={() => setActiveIdx(i)}>
                <div className="bloch-dot" style={{background: s.color}} />
                <div className="bloch-ket">{s.ket}</div>
                <div>
                  <div style={{fontSize:12, fontFamily:'JetBrains Mono', color:'rgba(120,180,220,0.5)', marginBottom:3}}>{s.label}</div>
                  <div className="bloch-info">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="callout">
        <strong>The key insight:</strong> A state certain in the Z-axis (poles) is maximally uncertain in the X-axis — and vice versa. You cannot be at a pole AND on the equator. This is the Uncertainty Principle, geometrically.
      </div>

      <div className="card">
        <h3>Gates as Rotations</h3>
        <div className="steps">
          <div className="step">
            <div className="step-num">X</div>
            <div className="step-body">
              <h4>Pauli-X gate</h4>
              <p>180° rotation around X-axis. Flips |0⟩ to |1⟩ — moves the vector from north pole to south pole.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">Z</div>
            <div className="step-body">
              <h4>Pauli-Z gate</h4>
              <p>180° rotation around Z-axis. Poles don't move. But a state on the equator flips to the opposite side — the phase changes.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">H</div>
            <div className="step-body">
              <h4>Hadamard gate</h4>
              <p>Rotates 180° around the axis halfway between X and Z. Sends the north pole to the equator — creating superposition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionUncertainty() {
  const [subTab, setSubTab] = useState(0);

  return (
    <div>
      <div className="section-intro">
        <div className="eyebrow">Chapter 04</div>
        <h2>Uncertainty Principle on a Qubit</h2>
        <p>ΔxΔp ≥ ℏ/2 is usually taught as a vague idea. A qubit lets students <em>measure</em> the trade-off directly using two complementary bases.</p>
      </div>

      <div className="sub-tabs">
        {["Concept", "The Three Circuits", "Qiskit Code"].map((t, i) => (
          <button key={t} className={`sub-tab ${subTab === i ? "active" : ""}`} onClick={() => setSubTab(i)}>{t}</button>
        ))}
      </div>

      {subTab === 0 && (
        <div>
          <div className="card">
            <h3>Two Complementary Bases</h3>
            <p>For a qubit, the two conjugate observables are:</p>
            <div style={{display:'flex', gap:20, marginTop:16}}>
              <div style={{flex:1, background:'rgba(10,20,50,0.5)', border:'1px solid rgba(90,180,255,0.15)', borderRadius:4, padding:'16px 20px'}}>
                <div style={{fontFamily:'JetBrains Mono', fontSize:12, color:'rgba(90,180,255,0.7)', marginBottom:8, letterSpacing:2}}>Z-BASIS</div>
                <div style={{fontFamily:'JetBrains Mono', fontSize:18, color:'#5ab4ff', marginBottom:8}}>|0⟩ / |1⟩</div>
                <div style={{fontSize:14, color:'rgba(160,200,240,0.6)', fontWeight:300}}>Analogous to <em>position</em>. Measured with a standard detector.</div>
              </div>
              <div style={{flex:1, background:'rgba(10,40,20,0.5)', border:'1px solid rgba(80,200,140,0.15)', borderRadius:4, padding:'16px 20px'}}>
                <div style={{fontFamily:'JetBrains Mono', fontSize:12, color:'rgba(80,200,140,0.7)', marginBottom:8, letterSpacing:2}}>X-BASIS</div>
                <div style={{fontFamily:'JetBrains Mono', fontSize:18, color:'#7affa0', marginBottom:8}}>|+⟩ / |−⟩</div>
                <div style={{fontSize:14, color:'rgba(160,200,240,0.6)', fontWeight:300}}>Analogous to <em>momentum</em>. Measured by applying H before measuring.</div>
              </div>
            </div>
          </div>

          <div className="callout">
            <strong>The rule:</strong> If a qubit has a definite X-basis state, its Z-basis outcome is completely random — and vice versa. Knowing one destroys knowledge of the other.
          </div>

          <div className="card">
            <h3>Summary Table</h3>
            <table className="u-table">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Z-basis measurement</th>
                  <th>X-basis measurement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="ket-inline">|0⟩</span></td>
                  <td><span className="certain">certain → 0</span></td>
                  <td><span className="uncertain">random 50/50</span></td>
                </tr>
                <tr>
                  <td><span className="ket-inline">|1⟩</span></td>
                  <td><span className="certain">certain → 1</span></td>
                  <td><span className="uncertain">random 50/50</span></td>
                </tr>
                <tr>
                  <td><span className="ket-inline">|+⟩</span></td>
                  <td><span className="uncertain">random 50/50</span></td>
                  <td><span className="certain">certain → +</span></td>
                </tr>
                <tr>
                  <td><span className="ket-inline">|−⟩</span></td>
                  <td><span className="uncertain">random 50/50</span></td>
                  <td><span className="certain">certain → −</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {subTab === 1 && (
        <div>
          <div className="card">
            <h3>Circuit A — Z certain, X uncertain</h3>
            <div className="circuit">
              <span className="qubit-label">q: </span>|0⟩ ──────────── <span className="measure">[M_z]</span>
            </div>
            <p style={{fontSize:14, color:'rgba(160,200,240,0.65)', marginTop:12, fontWeight:300}}>The qubit starts in |0⟩. Measuring in Z gives <span style={{color:'#7affa0', fontFamily:'JetBrains Mono'}}>0</span> with 100% certainty. But if you measured in X instead — random. Z is known. X is not.</p>
          </div>

          <div className="card">
            <h3>Circuit B — Superposition, Z uncertain</h3>
            <div className="circuit">
              <span className="qubit-label">q: </span>|0⟩ ──<span className="gate-box">H</span>──── <span className="measure">[M_z]</span>
            </div>
            <p style={{fontSize:14, color:'rgba(160,200,240,0.65)', marginTop:12, fontWeight:300}}>H puts qubit into |+⟩. Now Z-measurement is <span style={{color:'#ffaa88', fontFamily:'JetBrains Mono'}}>random 50/50</span>. Z is now uncertain. But X is perfectly certain — measuring in X would always give |+⟩.</p>
          </div>

          <div className="card">
            <h3>Circuit C — X basis measurement (restore certainty)</h3>
            <div className="circuit">
              <span className="qubit-label">q: </span>|0⟩ ──<span className="gate-box">H</span>──── <span className="gate-box">H</span>── <span className="measure">[M_z]</span>
            </div>
            <p style={{fontSize:14, color:'rgba(160,200,240,0.65)', marginTop:12, fontWeight:300}}>The second H rotates back to Z-basis. This is equivalent to measuring in X-basis. Result: <span style={{color:'#7affa0', fontFamily:'JetBrains Mono'}}>always 0</span>. Applying H→H proves the X-certainty was real.</p>
          </div>

          <div className="callout">
            <strong>Student investigation prompt:</strong> "Run all three circuits with 1024 shots each on both the simulator and real hardware. For each circuit, record what fraction of results are 0. Write a conclusion about the relationship between basis certainty and measurement outcome."
          </div>
        </div>
      )}

      {subTab === 2 && (
        <div>
          <div className="card">
            <h3>Full Qiskit Code — All Three Circuits</h3>
            <div className="code-block">
              <pre>
{`from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

simulator = AerSimulator()
shots = 1024

# ── Circuit A: |0⟩ in Z-basis ─────────────────────────
qc_A = QuantumCircuit(1, 1)
qc_A.measure(0, 0)          # No gates — just measure

# ── Circuit B: |+⟩ in Z-basis ─────────────────────────
qc_B = QuantumCircuit(1, 1)
qc_B.h(0)                   # Create superposition
qc_B.measure(0, 0)          # Measure in Z-basis → random

# ── Circuit C: |+⟩ in X-basis ─────────────────────────
qc_C = QuantumCircuit(1, 1)
qc_C.h(0)                   # Into superposition
qc_C.h(0)                   # Rotate to measure in X
qc_C.measure(0, 0)          # → always 0 (X certainty)

# ── Run all circuits ──────────────────────────────────
for label, qc in [("A", qc_A), ("B", qc_B), ("C", qc_C)]:
    compiled = transpile(qc, simulator)
    result = simulator.run(compiled, shots=shots).result()
    counts = result.get_counts()
    print(f"Circuit {label}: {counts}")
    plot_histogram(counts, title=f"Circuit {label}")`}
              </pre>
            </div>
          </div>

          <div className="card">
            <h3>Running on Real IBM Hardware</h3>
            <div className="code-block">
              <pre>
{`from qiskit_ibm_runtime import QiskitRuntimeService, Sampler

# ── Connect to IBM Quantum ────────────────────────────
service = QiskitRuntimeService(
    channel="ibm_quantum",
    token="YOUR_IBM_TOKEN"      # Free at quantum.ibm.com
)

# ── Choose a real backend ─────────────────────────────
backend = service.least_busy(
    operational=True,
    simulator=False             # Real hardware only
)
print(f"Using: {backend.name}")

# ── Run Circuit B on real hardware ───────────────────
sampler = Sampler(backend)
job = sampler.run([qc_B], shots=1024)
result = job.result()
print(result[0].data.c.get_counts())`}
              </pre>
            </div>
            <p style={{fontSize:14, color:'rgba(160,200,240,0.65)', marginTop:16, fontWeight:300}}>
              IBM Quantum is free for education. Sign up at <span style={{fontFamily:'JetBrains Mono', color:'#5ab4ff'}}>quantum.ibm.com</span>. Jobs queue within seconds on small circuits like these.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionWorkflow() {
  return (
    <div>
      <div className="section-intro">
        <div className="eyebrow">Chapter 05</div>
        <h2>Student Lab Workflow</h2>
        <p>How to structure a 45-minute lesson using real quantum hardware and Claude-powered analysis.</p>
      </div>

      <div className="card">
        <h3>Phase Flow</h3>
        <div className="steps">
          {[
            { n: "01", title: "Predict (10 min)", body: "Teacher introduces the circuit diagram using notation from Chapter 01. Students write down expected histogram outcomes before running anything. This triggers prior knowledge of wave behaviour and probability." },
            { n: "02", title: "Simulate (15 min)", body: "Students run circuits on AerSimulator in IBM Quantum Lab (free, browser-based, no install). They record histograms for circuits A, B, C. Simulator is noise-free — results match theory exactly." },
            { n: "03", title: "Real Hardware (async)", body: "Queue the same circuits on a real IBM backend (e.g. ibm_brisbane). Results arrive within minutes. Students compare real vs simulator — the discrepancy opens a discussion on decoherence and thermal noise." },
            { n: "04", title: "Claude Analysis (10 min)", body: "Students paste their histogram data into your EdTech tool. Claude explains the physics behind discrepancies in IB language, and generates Criterion D evaluation questions specific to their results." },
            { n: "05", title: "Conclusion (10 min)", body: "Students complete a structured conclusion template: 'When the qubit is in state ___, the Z-basis is ___ because ___.' Links directly to MYP/DP Criterion C." },
          ].map(s => (
            <div key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <div className="step-body">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Your Next.js Tool Architecture</h3>
        <div className="code-block">
          <pre>
{`// pages/api/quantum.js  (Next.js API route)
// This is the bridge between browser and IBM Quantum

export default async function handler(req, res) {
  const { circuit, shots } = req.body

  // 1. Send circuit to IBM Quantum REST API
  const ibmResponse = await fetch(
    'https://api.quantum-computing.ibm.com/runtime/jobs',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${process.env.IBM_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ program_id: 'sampler',
                             backend: 'ibm_brisbane',
                             params: { circuits: [circuit], shots }})
    }
  )

  // 2. Return job ID to frontend (poll for results)
  const { id } = await ibmResponse.json()
  res.json({ jobId: id })
}`}
          </pre>
        </div>
      </div>

      <div className="callout">
        <strong>The learning architecture:</strong> Simulator builds intuition → Real hardware creates anomaly → Claude explains the physics → Student writes the conclusion. Inquiry-based, Criterion-B ready, and genuinely novel for IB Physics.
      </div>
    </div>
  );
}

// ── APP ─────────────────────────────────────────────────────

const TABS = [
  { id: "notation", label: "01  Notation" },
  { id: "gates", label: "02  Gates" },
  { id: "bloch", label: "03  Bloch Sphere" },
  { id: "uncertainty", label: "04  Uncertainty" },
  { id: "workflow", label: "05  Lab Workflow" },
];

export default function App() {
  const [tab, setTab] = useState("notation");

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <div className="header-tag">Quantum Physics Primer</div>
          <h1>Qubits for <em>IB Physics</em> — Bare Minimum</h1>
        </div>
        <nav className="nav">
          {TABS.map(t => (
            <button key={t.id} className={`nav-btn ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="content">
          {tab === "notation" && <SectionNotation />}
          {tab === "gates" && <SectionGates />}
          {tab === "bloch" && <SectionBloch />}
          {tab === "uncertainty" && <SectionUncertainty />}
          {tab === "workflow" && <SectionWorkflow />}
        </div>
      </div>
    </>
  );
}
