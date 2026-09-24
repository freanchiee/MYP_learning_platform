
import { useState, useMemo } from "react";

// ── Core Logic ──────────────────────────────────────────────────────────────
function analyzeSigFigs(input) {
  if (!input || !/^[0-9]*\.?[0-9]+$/.test(input)) return null;
  const digits = input.split("");
  const isSignificant = new Array(digits.length).fill(false);
  const hasDot = input.includes(".");
  const numOnly = input.replace(".", "");
  let numIdx = 0;

  // Map digit positions (skip the dot)
  const positions = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== ".") positions.push(i);
  }

  // Rule 1: Find first non-zero digit
  let firstNonZero = -1;
  for (let i = 0; i < numOnly.length; i++) {
    if (numOnly[i] !== "0") { firstNonZero = i; break; }
  }

  if (firstNonZero === -1) return null; // all zeros

  // Rule 3/4: trailing zeros
  let lastNonZero = -1;
  for (let i = numOnly.length - 1; i >= 0; i--) {
    if (numOnly[i] !== "0") { lastNonZero = i; break; }
  }

  for (let i = 0; i < numOnly.length; i++) {
    const d = numOnly[i];
    const posIdx = positions[i];
    if (i < firstNonZero) {
      isSignificant[posIdx] = false; // leading zeros
    } else if (d !== "0") {
      isSignificant[posIdx] = true; // non-zero always significant
    } else {
      // zero at or after firstNonZero
      if (i < lastNonZero) {
        isSignificant[posIdx] = true; // sandwiched
      } else {
        // trailing zero
        isSignificant[posIdx] = hasDot; // significant only if decimal present
      }
    }
  }

  const dotIdx = digits.indexOf(".");
  if (dotIdx !== -1) isSignificant[dotIdx] = false;

  const count = isSignificant.filter(Boolean).length;
  return { digits, isSignificant, count };
}

// ── Data ────────────────────────────────────────────────────────────────────
const RULES = [
  {
    id: 1, title: "Leading Zeros", icon: "←",
    description: "Zeros to the LEFT of the first non-zero digit are NEVER significant.",
    reasoning: "These zeros are just placeholders. They tell us how small the number is, but not about measurement accuracy. Change units and they disappear!",
    examples: [
      { value: "0.005", sf: 1, explanation: "The '0.00' just places the '5' in the thousandths place." },
      { value: "0.0420", sf: 3, explanation: "The two leading zeros are placeholders; 4, 2, and the trailing 0 are significant." }
    ]
  },
  {
    id: 2, title: "Sandwiched Zeros", icon: "⊕",
    description: "Zeros BETWEEN two non-zero digits are ALWAYS significant.",
    reasoning: "If you measured a '5' and a '2', any zero in between must have been measured too — it's part of the actual instrument reading.",
    examples: [
      { value: "502", sf: 3, explanation: "The zero is trapped between 5 and 2." },
      { value: "1.0008", sf: 5, explanation: "All three zeros are sandwiched between 1 and 8." }
    ]
  },
  {
    id: 3, title: "Trailing Zeros (No Decimal)", icon: "→",
    description: "Zeros at the END of a number WITHOUT a decimal point are NOT significant.",
    reasoning: "If someone says a mountain is 5000 m high, they probably haven't measured to the exact metre. The zeros are approximations, not measurements.",
    examples: [
      { value: "500", sf: 1, explanation: "Rounded to the nearest hundred — only the 5 is certain." },
      { value: "12000", sf: 2, explanation: "Only 1 and 2 are certain; the zeros are placeholders." }
    ]
  },
  {
    id: 4, title: "Trailing Zeros (With Decimal)", icon: "✓",
    description: "Zeros at the END of a number WITH a decimal point ARE significant.",
    reasoning: "Why write '5.00' instead of '5'? Because you measured it exactly! Those zeros tell us the instrument was precise enough to confirm them.",
    examples: [
      { value: "5.00", sf: 3, explanation: "'.00' shows measurement to the hundredths place." },
      { value: "0.040", sf: 2, explanation: "Leading zeros don't count, but the trailing zero after the decimal does!" }
    ]
  }
];

const STATIONS = [
  { id: "therm", name: "The Frozen Peak", instrument: "Digital Thermometer", reading: "0.0050", unit: "°C", answer: 2, explanation: "Leading zeros (0.00) are placeholders. The trailing zero after the decimal shows the thermometer's precision — 2 SF!" },
  { id: "scale", name: "The Golden Vault", instrument: "Precision Scale", reading: "500.0", unit: "g", answer: 4, explanation: "The '.0' means the scale measures to the tenths place. All 4 digits are significant!" },
  { id: "speed", name: "The Neon Highway", instrument: "Speedometer", reading: "1020", unit: "km/h", answer: 3, explanation: "The middle zero is sandwiched (significant), but the trailing zero without a decimal is just a placeholder — 3 SF!" },
  { id: "beaker", name: "The Alchemist's Lab", instrument: "Graduated Cylinder", reading: "0.040", unit: "L", answer: 2, explanation: "Leading zeros don't count, but that trailing zero after the decimal is a measured value — 2 SF!" },
  { id: "ruler", name: "The Giant's Workshop", instrument: "Steel Ruler", reading: "12.00", unit: "cm", answer: 4, explanation: "The zeros after the decimal confirm the ruler's precision to hundredths. All 4 digits are significant!" }
];

const QUIZ_Q = [
  { number: "0.0045", answer: 2, explanation: "Leading zeros are placeholders. Only 4 and 5 are significant." },
  { number: "5006", answer: 4, explanation: "The zero is sandwiched between 5 and 6 — always significant!" },
  { number: "1200", answer: 2, explanation: "No decimal point, so the trailing zeros are not significant." },
  { number: "12.00", answer: 4, explanation: "Trailing zeros WITH a decimal are significant — precision matters!" },
  { number: "0.050", answer: 2, explanation: "Leading zeros are not significant; the trailing zero after the decimal IS." },
  { number: "1020", answer: 3, explanation: "Middle zero is sandwiched (sig), trailing zero without decimal is not." },
  { number: "0.0001", answer: 1, explanation: "Only the 1 is significant — all others are leading zeros." },
  { number: "7.0", answer: 2, explanation: "The zero after the decimal shows precision — 2 SF!" }
];

// ── Styles ──────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Outfit', sans-serif; background: #f8fafc; color: #1e293b; }
  .mono { font-family: 'JetBrains Mono', monospace; }
  .sig { color: #059669; font-weight: 700; }
  .nonsig { color: #94a3b8; }
  .dot { color: #cbd5e1; }
  .fade-in { animation: fadeIn 0.3s ease; }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  .card-hover { transition: all 0.2s; cursor: pointer; }
  .card-hover:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
  .btn { cursor: pointer; border: none; font-family: 'Outfit', sans-serif; font-weight: 700; transition: all 0.15s; }
  .btn:hover { filter: brightness(1.08); }
  .btn:active { transform: scale(0.97); }
  .progress-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  input { font-family: 'JetBrains Mono', monospace; }
  input:focus { outline: none; }
`;

// ── Sub-components ───────────────────────────────────────────────────────────
function DigitDisplay({ value, size = "3rem" }) {
  const analysis = analyzeSigFigs(value);
  if (!analysis) return <span className="mono" style={{ fontSize: size, color: "#94a3b8" }}>{value}</span>;
  return (
    <span className="mono" style={{ fontSize: size, letterSpacing: "0.08em" }}>
      {analysis.digits.map((d, i) => {
        let cls = "dot";
        if (d !== ".") cls = analysis.isSignificant[i] ? "sig" : "nonsig";
        return <span key={i} className={cls}>{d}</span>;
      })}
    </span>
  );
}

// ── Views ────────────────────────────────────────────────────────────────────
function Welcome({ onStart }) {
  const [name, setName] = useState("");
  return (
    <div className="fade-in" style={{ maxWidth: 420, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ width: 80, height: 80, background: "#059669", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", fontSize: 36, color: "white" }}>⚗️</div>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>SigFig Master</h1>
      <p style={{ color: "#64748b", marginBottom: 40, lineHeight: 1.6 }}>Master the language of precision. Every digit tells a story.</p>
      <input
        autoFocus
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={e => e.key === "Enter" && name.trim() && onStart(name.trim())}
        style={{ width: "100%", padding: "16px 24px", borderRadius: 14, border: "2px solid #e2e8f0", fontSize: "1.2rem", textAlign: "center", marginBottom: 16, background: "white" }}
      />
      <button className="btn" onClick={() => name.trim() && onStart(name.trim())}
        style={{ width: "100%", padding: "16px", borderRadius: 14, background: "#059669", color: "white", fontSize: "1.1rem" }}>
        Get Started →
      </button>
    </div>
  );
}

function Home({ name, setView }) {
  const cards = [
    { view: "learn", icon: "📖", label: "Learn", desc: "Master the 4 rules of sig figs", color: "#ecfdf5", accent: "#059669" },
    { view: "adventure", icon: "🗺️", label: "Adventure", desc: "Solve instrument puzzles", color: "#fff7ed", accent: "#ea580c" },
    { view: "sandbox", icon: "🔬", label: "Sandbox", desc: "Analyse any number live", color: "#eff6ff", accent: "#2563eb" },
    { view: "quiz", icon: "🧪", label: "Quiz", desc: "Test your precision skills", color: "#faf5ff", accent: "#7c3aed" }
  ];
  return (
    <div className="fade-in" style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: 12 }}>Welcome, {name}! 👋</h2>
        <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          Significant figures aren't just rules — they tell us how much we can trust our instruments. Ready to become a master of precision?
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 40 }}>
        {cards.map(c => (
          <div key={c.view} className="card-hover" onClick={() => setView(c.view)}
            style={{ background: "white", border: "2px solid #f1f5f9", borderRadius: 20, padding: 28 }}>
            <div style={{ width: 48, height: 48, background: c.color, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{c.icon}</div>
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 6 }}>{c.label}</h3>
            <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.5 }}>{c.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ background: "#0f172a", color: "white", borderRadius: 24, padding: "36px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fb923c", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>🆕 Featured</div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12 }}>SigFig Adventure!</h3>
          <p style={{ color: "#94a3b8", lineHeight: 1.7, maxWidth: 420, marginBottom: 24 }}>
            Travel across 5 unique locations and read from real instruments — thermometers, scales, speedometers and more!
          </p>
          <button className="btn" onClick={() => setView("adventure")}
            style={{ padding: "12px 28px", borderRadius: 12, background: "#ea580c", color: "white", fontSize: "0.95rem" }}>
            Start Adventure →
          </button>
        </div>
        <div style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", fontSize: 100, opacity: 0.07 }}>🗺️</div>
      </div>
    </div>
  );
}

function Learn({ setView }) {
  const [idx, setIdx] = useState(0);
  const rule = RULES[idx];
  return (
    <div className="fade-in" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
        <button className="btn" onClick={() => setView("home")} style={{ background: "none", color: "#64748b", fontSize: "0.9rem", padding: "8px 0" }}>← Back</button>
        <div style={{ display: "flex", gap: 8 }}>
          {RULES.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 28 : 10, height: 10, borderRadius: 5, background: i === idx ? "#059669" : "#e2e8f0", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
        <div>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#ecfdf5", color: "#059669", borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Rule #{rule.id}</div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>{rule.icon} {rule.title}</h2>
          <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.7, marginBottom: 24 }}>{rule.description}</p>
          <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 16, padding: "20px 24px" }}>
            <div style={{ fontWeight: 700, color: "#92400e", marginBottom: 8 }}>💡 Why this rule?</div>
            <p style={{ color: "#78350f", lineHeight: 1.7, fontSize: "0.95rem" }}>{rule.reasoning}</p>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <button className="btn" disabled={idx === 0} onClick={() => setIdx(i => i - 1)}
              style={{ flex: 1, padding: "14px", borderRadius: 12, border: "2px solid #e2e8f0", background: "white", color: idx === 0 ? "#cbd5e1" : "#334155", fontSize: "0.95rem", cursor: idx === 0 ? "default" : "pointer" }}>
              ← Previous
            </button>
            <button className="btn" onClick={() => idx < RULES.length - 1 ? setIdx(i => i + 1) : setView("adventure")}
              style={{ flex: 1, padding: "14px", borderRadius: 12, background: "#059669", color: "white", fontSize: "0.95rem" }}>
              {idx < RULES.length - 1 ? "Next Rule →" : "Start Adventure →"}
            </button>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Interactive Examples</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {rule.examples.map((ex, i) => (
              <div key={i} style={{ background: "white", border: "2px solid #f1f5f9", borderRadius: 18, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <DigitDisplay value={ex.value} size="2.2rem" />
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#059669" }}>{ex.sf}</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>Sig Figs</div>
                  </div>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6 }}>{ex.explanation}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#f8fafc", border: "2px dashed #cbd5e1", borderRadius: 16, padding: 20, marginTop: 16 }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#64748b", marginBottom: 10 }}>🔬 Instrument Scale</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 36 }}>
              {[...Array(20)].map((_, i) => (
                <div key={i} style={{ width: 3, background: "#94a3b8", borderRadius: 2, height: i % 5 === 0 ? 36 : 20 }} />
              ))}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: 8, fontStyle: "italic" }}>
              Sig figs are limited by the smallest marks on your measuring tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Adventure({ name, setView }) {
  const [stIdx, setStIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const st = STATIONS[stIdx];
  const correct = selected === st.answer;

  if (finished) return (
    <div className="fade-in" style={{ maxWidth: 500, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 72, marginBottom: 24 }}>🏆</div>
      <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: 12 }}>Adventure Complete!</h2>
      <p style={{ color: "#64748b", marginBottom: 32, lineHeight: 1.7 }}>
        Amazing work, {name}! You navigated all 5 measurement stations and proved you understand the language of precision!
      </p>
      <div style={{ background: "white", border: "2px solid #f1f5f9", borderRadius: 20, padding: 28, marginBottom: 24 }}>
        <p style={{ color: "#64748b", lineHeight: 1.7 }}>
          You've read thermometers, scales, speedometers and more. Every digit you identified tells the story of an instrument's accuracy!
        </p>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <button className="btn" onClick={() => { setStIdx(0); setAnswered(false); setSelected(null); setFinished(false); }}
          style={{ flex: 1, padding: "14px", borderRadius: 12, border: "2px solid #e2e8f0", background: "white", color: "#334155", fontSize: "0.95rem" }}>
          Replay
        </button>
        <button className="btn" onClick={() => setView("home")}
          style={{ flex: 1, padding: "14px", borderRadius: 12, background: "#ea580c", color: "white", fontSize: "0.95rem" }}>
          Back Home
        </button>
      </div>
    </div>
  );

  return (
    <div className="fade-in" style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <button className="btn" onClick={() => setView("home")} style={{ background: "none", color: "#64748b", fontSize: "0.9rem", padding: "8px 0" }}>← Back</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {STATIONS.map((_, i) => (
              <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: i < stIdx ? "#059669" : i === stIdx ? "#ea580c" : "#e2e8f0", transition: "all 0.3s" }} />
            ))}
          </div>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#94a3b8" }}>Station {stIdx + 1} / {STATIONS.length}</span>
        </div>
      </div>

      {/* Map progress */}
      <div style={{ background: "#f1f5f9", borderRadius: 20, padding: "20px 32px", marginBottom: 36, position: "relative", overflow: "hidden" }}>
        <div style={{ width: "100%", height: 4, background: "#e2e8f0", borderRadius: 2, position: "relative" }}>
          <div style={{ width: `${(stIdx / (STATIONS.length - 1)) * 100}%`, height: "100%", background: "#ea580c", borderRadius: 2, transition: "width 0.5s ease" }} />
          {STATIONS.map((s, i) => (
            <div key={s.id} title={s.name}
              style={{ position: "absolute", left: `${(i / (STATIONS.length - 1)) * 100}%`, top: "50%", transform: "translate(-50%,-50%)", width: 36, height: 36, borderRadius: "50%", background: i < stIdx ? "#059669" : i === stIdx ? "#ea580c" : "white", border: `3px solid ${i <= stIdx ? (i < stIdx ? "#059669" : "#ea580c") : "#e2e8f0"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, transition: "all 0.4s", zIndex: 2 }}>
              {i < stIdx ? "✓" : ["🌡️","⚖️","⚡","⚗️","📏"][i]}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 14px", background: "#fff7ed", color: "#ea580c", borderRadius: 20, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
            📍 {st.name}
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>The {st.instrument} Puzzle</h2>
          <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 24, fontSize: "1rem" }}>
            You've arrived at <strong>{st.name}</strong>. Read the instrument carefully and identify the significant figures to unlock the next path!
          </p>
          <div style={{ background: "white", border: "2px solid #f1f5f9", borderRadius: 20, padding: 32, textAlign: "center" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{st.instrument}</div>
            <DigitDisplay value={st.reading} size="3.5rem" />
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#94a3b8", marginTop: 8 }}>{st.unit}</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>How many Sig Figs?</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[1, 2, 3, 4, 5].map(n => {
              let bg = "white", border = "2px solid #e2e8f0", color = "#334155";
              if (answered) {
                if (n === st.answer) { bg = "#059669"; border = "2px solid #059669"; color = "white"; }
                else if (n === selected) { bg = "#ef4444"; border = "2px solid #ef4444"; color = "white"; }
                else { bg = "#f8fafc"; color = "#cbd5e1"; border = "2px solid #f1f5f9"; }
              }
              return (
                <button key={n} className="btn" disabled={answered} onClick={() => { setSelected(n); setAnswered(true); }}
                  style={{ padding: "20px 0", borderRadius: 16, background: bg, border, color, fontSize: "1.5rem", fontFamily: "JetBrains Mono", cursor: answered ? "default" : "pointer", transition: "all 0.2s" }}>
                  {n}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="fade-in" style={{ background: "white", border: "2px solid #f1f5f9", borderRadius: 18, padding: 24 }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: correct ? "#059669" : "#ef4444", marginBottom: 10 }}>
                {correct ? "✅ Correct! Path Unlocked." : "❌ Not quite — here's why:"}
              </div>
              <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 16 }}>{st.explanation}</p>
              {correct ? (
                <button className="btn" onClick={() => { stIdx < STATIONS.length - 1 ? (setStIdx(i => i + 1), setAnswered(false), setSelected(null)) : setFinished(true); }}
                  style={{ width: "100%", padding: "14px", borderRadius: 12, background: "#ea580c", color: "white", fontSize: "0.95rem" }}>
                  {stIdx < STATIONS.length - 1 ? "Move to Next Station →" : "Finish Adventure 🏆"}
                </button>
              ) : (
                <button className="btn" onClick={() => { setAnswered(false); setSelected(null); }}
                  style={{ width: "100%", padding: "14px", borderRadius: 12, background: "#f1f5f9", color: "#334155", fontSize: "0.95rem" }}>
                  Try Again
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Sandbox({ setView }) {
  const [input, setInput] = useState("0.04050");
  const analysis = useMemo(() => analyzeSigFigs(input), [input]);

  return (
    <div className="fade-in" style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: 8 }}>🔬 The SigFig Sandbox</h2>
        <p style={{ color: "#64748b" }}>Type any number and watch the rules come alive in real-time.</p>
      </div>

      <div style={{ background: "white", border: "2px solid #e2e8f0", borderRadius: 24, padding: 40, marginBottom: 24 }}>
        <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 12 }}>Enter a Measurement</label>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value.replace(/[^0-9.]/g, ""))}
          style={{ width: "100%", fontSize: "3rem", textAlign: "center", padding: "16px 0", borderBottom: "3px solid #e2e8f0", background: "none", letterSpacing: "0.1em", color: "#1e293b" }}
          placeholder="0.00"
        />

        {analysis ? (
          <div style={{ marginTop: 36 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ letterSpacing: "0.08em" }}>
                {analysis.digits.map((d, i) => {
                  let style = { fontSize: "3rem", fontFamily: "JetBrains Mono", padding: "4px 8px", borderRadius: 8 };
                  if (d === ".") style.color = "#cbd5e1";
                  else if (analysis.isSignificant[i]) { style.color = "#059669"; style.background = "#ecfdf5"; style.fontWeight = 700; }
                  else { style.color = "#94a3b8"; style.background = "#f8fafc"; }
                  return <span key={i} style={style}>{d}</span>;
                })}
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#059669", color: "white", borderRadius: 24, fontWeight: 700, fontSize: "1rem" }}>
                ✓ {analysis.count} Significant {analysis.count === 1 ? "Figure" : "Figures"}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ padding: 16, background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#059669", marginTop: 4, flexShrink: 0 }} />
                <p style={{ fontSize: "0.9rem", color: "#064e3b" }}><strong>Green</strong> digits are measured and certain.</p>
              </div>
              <div style={{ padding: 16, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#94a3b8", marginTop: 4, flexShrink: 0 }} />
                <p style={{ fontSize: "0.9rem", color: "#475569" }}><strong>Gray</strong> digits are just placeholders.</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#94a3b8", fontStyle: "italic" }}>
            Enter a valid number to see the analysis.
          </div>
        )}
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="btn" onClick={() => setView("adventure")}
          style={{ padding: "14px 32px", borderRadius: 14, background: "#ea580c", color: "white", fontSize: "1rem" }}>
          Go to Adventure →
        </button>
      </div>
    </div>
  );
}

function Quiz({ name, setView }) {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const q = QUIZ_Q[qIdx];

  const rank = score === QUIZ_Q.length ? "🥇 SigFig Master" :
    score >= QUIZ_Q.length * 0.75 ? "🥈 Senior Scientist" :
    score >= QUIZ_Q.length * 0.5 ? "🥉 Junior Scientist" : "🔬 Apprentice";

  if (finished) return (
    <div className="fade-in" style={{ maxWidth: 500, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>
        {score === QUIZ_Q.length ? "🎉" : score >= QUIZ_Q.length / 2 ? "👍" : "💪"}
      </div>
      <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: 8 }}>Well done, {name}!</h2>
      <p style={{ color: "#64748b", marginBottom: 32, lineHeight: 1.7 }}>You scored <strong>{score} out of {QUIZ_Q.length}</strong></p>
      <div style={{ background: "white", border: "2px solid #f1f5f9", borderRadius: 20, padding: 32, marginBottom: 28 }}>
        <div style={{ fontSize: "2rem", marginBottom: 8 }}>{rank}</div>
        <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem" }}>
          {score === QUIZ_Q.length
            ? `Perfect score! You truly understand that measurement is all about precision.`
            : score >= QUIZ_Q.length / 2
            ? `Solid grasp of the rules! A little more practice in the Sandbox and you'll be a pro.`
            : `Significant figures can be tricky. Head to Learn mode to review the 4 rules!`}
        </p>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <button className="btn" onClick={() => { setQIdx(0); setScore(0); setAnswered(false); setSelected(null); setFinished(false); }}
          style={{ flex: 1, padding: "14px", borderRadius: 12, border: "2px solid #e2e8f0", background: "white", color: "#334155", fontSize: "0.95rem" }}>
          Try Again
        </button>
        <button className="btn" onClick={() => setView("home")}
          style={{ flex: 1, padding: "14px", borderRadius: 12, background: "#059669", color: "white", fontSize: "0.95rem" }}>
          Back Home
        </button>
      </div>
    </div>
  );

  return (
    <div className="fade-in" style={{ maxWidth: 620, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Precision Challenge</h2>
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#94a3b8" }}>Q {qIdx + 1} / {QUIZ_Q.length}</span>
      </div>
      <div style={{ height: 8, background: "#f1f5f9", borderRadius: 4, marginBottom: 32, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${((qIdx + 1) / QUIZ_Q.length) * 100}%`, background: "#7c3aed", borderRadius: 4, transition: "width 0.4s ease" }} />
      </div>

      <div style={{ background: "white", border: "2px solid #e2e8f0", borderRadius: 24, padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
          How many significant figures?
        </div>
        <div className="mono" style={{ fontSize: "3.5rem", fontWeight: 700, color: "#1e293b", marginBottom: 36, letterSpacing: "0.08em" }}>
          {q.number}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
          {[1, 2, 3, 4].map(n => {
            let bg = "white", border = "2px solid #e2e8f0", color = "#334155";
            if (answered) {
              if (n === q.answer) { bg = "#059669"; border = "2px solid #059669"; color = "white"; }
              else if (n === selected) { bg = "#ef4444"; border = "2px solid #ef4444"; color = "white"; }
              else { bg = "#f8fafc"; color = "#cbd5e1"; border = "2px solid #f1f5f9"; }
            }
            return (
              <button key={n} className="btn" disabled={answered} onClick={() => { setSelected(n); setAnswered(true); if (n === q.answer) setScore(s => s + 1); }}
                style={{ padding: "20px 0", borderRadius: 14, background: bg, border, color, fontSize: "1.4rem", fontFamily: "JetBrains Mono", cursor: answered ? "default" : "pointer", transition: "all 0.2s" }}>
                {n}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="fade-in" style={{ borderTop: "2px solid #f1f5f9", paddingTop: 24 }}>
            <div style={{ fontWeight: 700, color: selected === q.answer ? "#059669" : "#ef4444", marginBottom: 10, fontSize: "1.05rem" }}>
              {selected === q.answer ? "✅ Correct!" : "❌ Not quite!"}
            </div>
            <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 20, fontSize: "0.95rem" }}>{q.explanation}</p>
            <button className="btn" onClick={() => { qIdx < QUIZ_Q.length - 1 ? (setQIdx(i => i + 1), setAnswered(false), setSelected(null)) : setFinished(true); }}
              style={{ width: "100%", padding: "14px", borderRadius: 12, background: "#1e293b", color: "white", fontSize: "0.95rem" }}>
              {qIdx < QUIZ_Q.length - 1 ? "Next Question →" : "See Results"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("welcome");
  const [name, setName] = useState("");

  return (
    <>
      <style>{css}</style>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {view !== "welcome" && (
          <nav style={{ background: "white", borderBottom: "2px solid #f1f5f9", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => setView("home")}>
              <div style={{ width: 40, height: 40, background: "#059669", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⚗️</div>
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b" }}>SigFig Master</span>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {["learn", "adventure", "sandbox", "quiz"].map(v => (
                <button key={v} className="btn" onClick={() => setView(v)}
                  style={{ padding: "8px 16px", borderRadius: 10, background: view === v ? "#ecfdf5" : "none", color: view === v ? "#059669" : "#64748b", fontSize: "0.9rem", textTransform: "capitalize" }}>
                  {v}
                </button>
              ))}
            </div>
            <div style={{ padding: "6px 16px", background: "#ecfdf5", color: "#059669", borderRadius: 20, fontWeight: 700, fontSize: "0.9rem" }}>{name}</div>
          </nav>
        )}

        <main style={{ flex: 1 }}>
          {view === "welcome" && <Welcome onStart={n => { setName(n); setView("home"); }} />}
          {view === "home" && <Home name={name} setView={setView} />}
          {view === "learn" && <Learn setView={setView} />}
          {view === "adventure" && <Adventure name={name} setView={setView} />}
          {view === "sandbox" && <Sandbox setView={setView} />}
          {view === "quiz" && <Quiz name={name} setView={setView} />}
        </main>

        <footer style={{ background: "white", borderTop: "2px solid #f1f5f9", padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 600 }}>Designed for MYP Scientists • Accuracy Matters 🔬</p>
        </footer>
      </div>
    </>
  );
}
