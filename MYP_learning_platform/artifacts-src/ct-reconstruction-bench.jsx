import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

/* ============================================================
   CT RECONSTRUCTION BENCH  ·  two modes
   VOXELS : the A-level 2x2 hand calculation
   SLICE  : the continuous Radon transform, 128x128
   ============================================================ */

const N = 128, NDET = 128, NANG = 180, RAYSTEPS = 180;

const C = {
  bg: "#080B10", panel: "#0E141C", line: "#1C2836", edge: "#2A3B4F",
  amber: "#FFB020", teal: "#5EEAD4", text: "#C9D6E3", dim: "#5C7085", bright: "#EAF2FA",
};
const MONO = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace";
const DISP = "'Barlow Condensed', 'Oswald', Impact, sans-serif";

/* ================= SLICE MODE MATHS ================= */

const ELLIPSES = [
  [0.0, 0.0, 0.74, 0.9, 0, 1.0],
  [0.0, 0.0, 0.68, 0.84, 0, 0.28],
  [-0.26, 0.1, 0.15, 0.3, 0.3, 0.06],
  [0.26, 0.1, 0.15, 0.3, -0.3, 0.06],
  [0.16, -0.38, 0.1, 0.1, 0, 0.72],
  [-0.34, -0.5, 0.045, 0.045, 0, 1.0],
  [0.0, 0.46, 0.34, 0.07, 0, 0.42],
];

function buildPhantom() {
  const img = new Float32Array(N * N);
  for (let j = 0; j < N; j++) {
    const yn = (j - N / 2 + 0.5) / (N / 2);
    for (let i = 0; i < N; i++) {
      const xn = (i - N / 2 + 0.5) / (N / 2);
      let v = 0;
      for (const [cx, cy, a, b, t, val] of ELLIPSES) {
        const dx = xn - cx, dy = yn - cy, ct = Math.cos(t), st = Math.sin(t);
        const u = (dx * ct + dy * st) / a, w = (-dx * st + dy * ct) / b;
        if (u * u + w * w <= 1) v = val;
      }
      img[j * N + i] = v;
    }
  }
  return img;
}

function sampleBilinear(img, x, y) {
  if (x < 0 || y < 0 || x > N - 1 || y > N - 1) return 0;
  const x0 = x | 0, y0 = y | 0;
  const x1 = Math.min(x0 + 1, N - 1), y1 = Math.min(y0 + 1, N - 1);
  const fx = x - x0, fy = y - y0;
  return img[y0 * N + x0] * (1 - fx) * (1 - fy) + img[y0 * N + x1] * fx * (1 - fy)
       + img[y1 * N + x0] * (1 - fx) * fy + img[y1 * N + x1] * fx * fy;
}

function forwardProject(img) {
  const sino = new Float32Array(NANG * NDET), half = N / 2;
  for (let a = 0; a < NANG; a++) {
    const th = (a * Math.PI) / NANG, ct = Math.cos(th), st = Math.sin(th);
    for (let d = 0; d < NDET; d++) {
      const s = d - NDET / 2 + 0.5;
      let sum = 0;
      for (let k = 0; k < RAYSTEPS; k++) {
        const t = k - RAYSTEPS / 2 + 0.5;
        sum += sampleBilinear(img, s * ct - t * st + half, s * st + t * ct + half);
      }
      sino[a * NDET + d] = sum;
    }
  }
  return sino;
}

function filterSinogram(sino) {
  const L = 2 * NDET - 1, k = new Float32Array(L);
  for (let i = 0; i < L; i++) {
    const n = i - (NDET - 1);
    k[i] = n === 0 ? 0.25 : (n % 2 !== 0 ? -1 / (n * n * Math.PI * Math.PI) : 0);
  }
  const out = new Float32Array(NANG * NDET);
  for (let a = 0; a < NANG; a++) {
    const off = a * NDET;
    for (let d = 0; d < NDET; d++) {
      let s = 0;
      for (let m = 0; m < NDET; m++) s += sino[off + m] * k[d - m + (NDET - 1)];
      out[off + d] = s;
    }
  }
  return out;
}

function backprojectAngle(acc, sino, a) {
  const th = (a * Math.PI) / NANG, ct = Math.cos(th), st = Math.sin(th);
  const off = a * NDET, half = N / 2;
  for (let j = 0; j < N; j++) {
    const yr = j - half + 0.5;
    for (let i = 0; i < N; i++) {
      const s = (i - half + 0.5) * ct + yr * st + NDET / 2 - 0.5;
      if (s < 0 || s > NDET - 1) continue;
      const s0 = s | 0, s1 = Math.min(s0 + 1, NDET - 1), f = s - s0;
      acc[j * N + i] += sino[off + s0] * (1 - f) + sino[off + s1] * f;
    }
  }
}

function drawGray(cv, data, w, h, lo, hi) {
  if (!cv) return;
  const ctx = cv.getContext("2d"), im = ctx.createImageData(w, h), r = hi - lo || 1;
  for (let p = 0; p < w * h; p++) {
    let v = ((data[p] - lo) / r) * 255;
    v = v < 0 ? 0 : v > 255 ? 255 : v;
    const o = p * 4;
    im.data[o] = im.data[o + 1] = im.data[o + 2] = v;
    im.data[o + 3] = 255;
  }
  ctx.putImageData(im, 0, 0);
}

/* ================= SHARED UI ================= */

function Tile({ label, sub, accent, children, foot }) {
  return (
    <div style={{ background: C.panel, border: `1px solid ${C.line}`, display: "flex", flexDirection: "column", minWidth: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6, padding: "5px 8px", borderBottom: `1px solid ${C.line}` }}>
        <span style={{ fontSize: 9, letterSpacing: "0.12em", color: accent || C.dim, whiteSpace: "nowrap" }}>{label}</span>
        <span style={{ fontSize: 8.5, color: C.dim, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sub}</span>
      </div>
      <div style={{ padding: 6, flex: 1, minWidth: 0 }}>{children}</div>
      {foot && <div style={{ fontSize: 9, color: C.dim, lineHeight: 1.45, padding: "0 8px 7px" }}>{foot}</div>}
    </div>
  );
}

const btn = (on, color) => ({
  background: on ? color : "transparent",
  color: on ? "#080B10" : color,
  border: `1px solid ${on ? color : C.edge}`,
  padding: "6px 12px", fontFamily: MONO, fontSize: 10, fontWeight: 600,
  letterSpacing: "0.09em", cursor: "pointer", borderRadius: 2,
});

/* ================= VOXEL MODE ================= */
/*  Four views through a 2x2 block. Back-projected total for any
    voxel = 2*(that voxel) + S, where S is the sum of all four.
    Subtract S, halve, and the block is recovered exactly.        */

function VoxelBench() {
  const [v, setV] = useState([6, 2, 3, 5]); // a b / c d
  const [step, setStep] = useState(0);      // 0 blank, 1-4 views, 5 subtract, 6 halve
  const [a, b, c, d] = v;
  const S = a + b + c + d;

  // what each view contributes to each voxel
  const contrib = [
    [a + b, a + b, c + d, c + d],   // view 1 : horizontal
    [a + c, b + d, a + c, b + d],   // view 2 : vertical
    [a, b + c, b + c, d],           // view 3 : diagonal
    [b, a + d, a + d, c],           // view 4 : anti-diagonal
  ];

  const cells = [0, 1, 2, 3].map((i) => {
    let t = 0;
    for (let k = 0; k < Math.min(step, 4); k++) t += contrib[k][i];
    if (step >= 5) t -= S;
    if (step >= 6) t = t / 2;
    return t;
  });

  const views = [
    { name: "VIEW 1", ang: "0°", dirs: "→", reads: [`${a + b}`, `${c + d}`], note: "rows" },
    { name: "VIEW 2", ang: "90°", dirs: "↓", reads: [`${a + c}`, `${b + d}`], note: "columns" },
    { name: "VIEW 3", ang: "45°", dirs: "↘", reads: [`${a}`, `${b + c}`, `${d}`], note: "diagonals" },
    { name: "VIEW 4", ang: "135°", dirs: "↙", reads: [`${b}`, `${a + d}`, `${c}`], note: "anti-diagonals" },
  ];

  const label = ["Scanner knows nothing yet", "After view 1", "After views 1–2", "After views 1–3",
    "All four views back-projected", `Subtract S = ${S} from every voxel`, "Halve — original recovered"][step];

  const setCell = (i, val) => {
    const nv = [...v];
    nv[i] = Math.max(0, Math.min(9, Number(val) || 0));
    setV(nv);
    setStep(0);
  };

  const recovered = step >= 6;

  return (
    <div>
      <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
        <button onClick={() => setStep(Math.max(0, step - 1))} style={btn(false, C.dim)}>◀ BACK</button>
        <button onClick={() => setStep(Math.min(6, step + 1))} style={btn(step < 6, C.amber)}>
          {step === 0 ? "START BACK-PROJECTING" : step < 4 ? "ADD NEXT VIEW" : step === 4 ? "CORRECT" : step === 5 ? "SCALE" : "DONE"}
        </button>
        <button onClick={() => setStep(0)} style={btn(false, C.dim)}>RESET</button>
        <span style={{ marginLeft: "auto", fontSize: 10, color: C.teal }}>STEP {step} / 6</span>
      </div>

      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>

        {/* the voxel block */}
        <Tile label="① The voxel block" sub="tap a value to change it" accent={C.amber}
          foot="Four voxels, each with its own attenuation. The scanner cannot see these — it only ever measures sums along a line.">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            {v.map((val, i) => (
              <input key={i} type="number" min={0} max={9} value={val}
                onChange={(e) => setCell(i, e.target.value)}
                style={{
                  background: `rgba(255,176,32,${0.08 + (val / 9) * 0.5})`,
                  border: `1px solid ${C.edge}`, color: C.bright, fontFamily: MONO,
                  fontSize: 26, fontWeight: 600, textAlign: "center", padding: "14px 0",
                  width: "100%", boxSizing: "border-box", borderRadius: 2,
                }} />
            ))}
          </div>
        </Tile>

        {/* the measurements */}
        <Tile label="② What the detector reads" sub={`4 views · total S = ${S}`} accent={C.teal}
          foot="Each number is a line sum. This is the entire dataset — the whole reconstruction comes from these ten numbers.">
          {views.map((vw, k) => (
            <div key={k} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "5px 4px",
              borderBottom: k < 3 ? `1px solid ${C.line}` : "none",
              opacity: step === 0 || step > k ? 1 : 0.3,
              background: step === k + 1 ? "rgba(94,234,212,0.07)" : "transparent",
            }}>
              <span style={{ fontSize: 9, color: C.dim, width: 46 }}>{vw.name}</span>
              <span style={{ fontSize: 13, color: C.amber, width: 16 }}>{vw.dirs}</span>
              <span style={{ display: "flex", gap: 5 }}>
                {vw.reads.map((r, ri) => (
                  <span key={ri} style={{
                    fontSize: 12, fontWeight: 600, color: C.teal, background: "rgba(94,234,212,0.1)",
                    border: `1px solid rgba(94,234,212,0.25)`, padding: "1px 7px", borderRadius: 2,
                  }}>{r}</span>
                ))}
              </span>
              <span style={{ fontSize: 8.5, color: C.dim, marginLeft: "auto" }}>{vw.note}</span>
            </div>
          ))}
        </Tile>

        {/* the reconstruction */}
        <Tile label="③ Back-projected" sub={label} accent={recovered ? C.teal : C.dim}
          foot={step >= 4
            ? `Every voxel now holds 2× its own value plus S. That constant S is the blur — it is identical everywhere, so subtracting it is the whole correction.`
            : "Each view's reading is added to every voxel that ray passed through. Nothing is divided or apportioned — the ray has no idea where along its path the attenuation happened."}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            {cells.map((val, i) => {
              const ok = recovered && val === v[i];
              return (
                <div key={i} style={{
                  background: ok ? `rgba(94,234,212,${0.08 + (val / 9) * 0.45})` : `rgba(200,215,230,${step ? 0.05 + Math.min(val, 40) / 90 : 0.03})`,
                  border: `1px solid ${ok ? "rgba(94,234,212,0.5)" : C.edge}`,
                  color: ok ? C.teal : C.bright, fontSize: 26, fontWeight: 600,
                  textAlign: "center", padding: "14px 0", borderRadius: 2,
                }}>{val}</div>
              );
            })}
          </div>
          {step >= 4 && step < 6 && (
            <div style={{ fontSize: 10, color: C.amber, textAlign: "center", marginTop: 6 }}>
              each cell = 2 × voxel + {S}
            </div>
          )}
        </Tile>
      </div>

      <div style={{ border: `1px solid ${C.line}`, borderLeft: `2px solid ${C.amber}`, background: C.panel, padding: 10, marginTop: 10 }}>
        <p style={{ fontSize: 10.5, lineHeight: 1.6, margin: 0, color: C.text }}>
          <strong style={{ color: C.amber }}>This is the exam answer.</strong> Take readings from
          several directions, back-project each one across the voxels it passed through, then remove
          the uniform background it leaves behind. Change the four values and the arithmetic still
          works — that generality is the point. With 4 voxels the background is a single number you
          subtract; with a real 512 × 512 slice it becomes a frequency-dependent correction. Same
          idea, harder sum.
        </p>
      </div>
    </div>
  );
}

/* ================= SLICE MODE ================= */

function SliceBench() {
  const phantom = useMemo(buildPhantom, []);
  const [ready, setReady] = useState(false);
  const [angleCount, setAngleCount] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(3);

  const dataRef = useRef({ sino: null, fsino: null, lo: 0, hi: 1 });
  const accPlain = useRef(new Float32Array(N * N));
  const accFilt = useRef(new Float32Array(N * N));
  const builtTo = useRef(0);
  const phantomCv = useRef(null), overlayCv = useRef(null),
        sinoCv = useRef(null), bpCv = useRef(null), fbpCv = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const sino = forwardProject(phantom);
      const fsino = filterSinogram(sino);
      let lo = Infinity, hi = -Infinity;
      for (const x of sino) { if (x < lo) lo = x; if (x > hi) hi = x; }
      dataRef.current = { sino, fsino, lo, hi };
      setReady(true);
    }, 30);
    return () => clearTimeout(id);
  }, [phantom]);

  useEffect(() => { drawGray(phantomCv.current, phantom, N, N, 0, 1); }, [phantom, ready]);

  const syncTo = useCallback((count) => {
    const { sino, fsino } = dataRef.current;
    if (!sino) return;
    if (count < builtTo.current) {
      accPlain.current.fill(0); accFilt.current.fill(0); builtTo.current = 0;
    }
    for (let a = builtTo.current; a < count; a++) {
      backprojectAngle(accPlain.current, sino, a);
      backprojectAngle(accFilt.current, fsino, a);
    }
    builtTo.current = count;
  }, []);

  useEffect(() => {
    if (!ready) return;
    const { sino, lo, hi } = dataRef.current;
    syncTo(angleCount);

    const view = new Float32Array(NANG * NDET);
    view.set(sino.subarray(0, angleCount * NDET));
    drawGray(sinoCv.current, view, NDET, NANG, lo, hi);

    let pLo = Infinity, pHi = -Infinity;
    for (const x of accPlain.current) { if (x < pLo) pLo = x; if (x > pHi) pHi = x; }
    drawGray(bpCv.current, accPlain.current, N, N, pLo, pHi);

    let fHi = -Infinity;
    for (const x of accFilt.current) if (x > fHi) fHi = x;
    drawGray(fbpCv.current, accFilt.current, N, N, 0, fHi || 1);

    const cv = overlayCv.current;
    if (cv) {
      const ctx = cv.getContext("2d");
      ctx.clearRect(0, 0, N, N);
      const th = ((angleCount - 1) * Math.PI) / NANG, ct = Math.cos(th), st = Math.sin(th);
      ctx.lineWidth = 0.7; ctx.strokeStyle = "rgba(255,176,32,0.45)";
      for (let s = -60; s <= 60; s += 9) {
        ctx.beginPath();
        ctx.moveTo(s * ct + 95 * st + N / 2, s * st - 95 * ct + N / 2);
        ctx.lineTo(s * ct - 95 * st + N / 2, s * st + 95 * ct + N / 2);
        ctx.stroke();
      }
      ctx.lineWidth = 3.5; ctx.strokeStyle = C.amber;
      ctx.beginPath();
      ctx.moveTo(-66 * ct + 72 * st + N / 2, -66 * st - 72 * ct + N / 2);
      ctx.lineTo(66 * ct + 72 * st + N / 2, 66 * st - 72 * ct + N / 2);
      ctx.stroke();
      ctx.strokeStyle = C.teal;
      ctx.beginPath();
      ctx.moveTo(-66 * ct - 72 * st + N / 2, -66 * st + 72 * ct + N / 2);
      ctx.lineTo(66 * ct - 72 * st + N / 2, 66 * st + 72 * ct + N / 2);
      ctx.stroke();
    }
  }, [angleCount, ready, syncTo]);

  useEffect(() => {
    if (!playing || !ready) return;
    const id = setInterval(() => {
      setAngleCount((c) => { if (c >= NANG) { setPlaying(false); return c; } return Math.min(NANG, c + speed); });
    }, 45);
    return () => clearInterval(id);
  }, [playing, ready, speed]);

  const profile = useMemo(() => {
    const { sino } = dataRef.current;
    if (!sino || !ready) return "";
    const off = (angleCount - 1) * NDET;
    let hi = 1;
    for (let d = 0; d < NDET; d++) hi = Math.max(hi, sino[off + d]);
    let p = "";
    for (let d = 0; d < NDET; d++)
      p += (d ? "L" : "M") + ((d / (NDET - 1)) * 300).toFixed(1) + " " + (46 - (sino[off + d] / hi) * 42).toFixed(1);
    return p;
  }, [angleCount, ready]);

  const cvS = { width: "100%", display: "block", imageRendering: "pixelated", background: "#000" };
  const deg = (((angleCount - 1) * 180) / NANG).toFixed(0);

  if (!ready) return <div style={{ padding: 50, textAlign: "center", color: C.dim, fontSize: 11 }}>Computing {NANG} projections…</div>;

  return (
    <div>
      {/* console */}
      <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
        <button onClick={() => { if (angleCount >= NANG) { setAngleCount(1); } setPlaying(!playing); }}
          style={btn(!playing, C.amber)}>
          {playing ? "PAUSE" : angleCount >= NANG ? "REPLAY" : "ROTATE GANTRY"}
        </button>
        <button onClick={() => { setPlaying(false); setAngleCount(1); }} style={btn(false, C.dim)}>RESET</button>
        <div style={{ display: "flex", gap: 12, marginLeft: "auto", fontSize: 10 }}>
          <span style={{ color: C.dim }}>θ <span style={{ color: C.amber, fontWeight: 600 }}>{deg}°</span></span>
          <span style={{ color: C.dim }}>VIEWS <span style={{ color: C.teal, fontWeight: 600 }}>{angleCount}</span></span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
        <input type="range" min={1} max={NANG} value={angleCount}
          onChange={(e) => { setPlaying(false); setAngleCount(+e.target.value); }}
          style={{ flex: 3 }} aria-label="Gantry position" />
        <input type="range" min={1} max={10} value={speed} onChange={(e) => setSpeed(+e.target.value)}
          style={{ flex: 1 }} aria-label="Rotation speed" />
      </div>

      {/* 2 x 2 stage — everything visible at once */}
      <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        <Tile label="① SLICE" sub="μ(x,y)" accent={C.amber}>
          <div style={{ position: "relative" }}>
            <canvas ref={phantomCv} width={N} height={N} style={cvS} />
            <canvas ref={overlayCv} width={N} height={N} style={{ ...cvS, position: "absolute", inset: 0, background: "transparent" }} />
          </div>
        </Tile>
        <Tile label="② SINOGRAM" sub={`${angleCount}/${NANG}`} accent={C.teal}>
          <canvas ref={sinoCv} width={NDET} height={NANG} style={{ ...cvS, aspectRatio: "128/180" }} />
        </Tile>
        <Tile label="③ RAW" sub="unfiltered" accent={C.dim}>
          <canvas ref={bpCv} width={N} height={N} style={cvS} />
        </Tile>
        <Tile label="④ FILTERED" sub="FBP" accent={C.teal}>
          <canvas ref={fbpCv} width={N} height={N} style={cvS} />
        </Tile>
      </div>

      {/* profile strip */}
      <div style={{ background: C.panel, border: `1px solid ${C.line}`, padding: "6px 8px", marginTop: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: "0.12em", color: C.amber, marginBottom: 2 }}>
          DETECTOR OUTPUT AT θ = {deg}° — one row of the sinogram
        </div>
        <svg viewBox="0 0 300 48" style={{ width: "100%", display: "block" }} preserveAspectRatio="none">
          <path d={profile} fill="none" stroke={C.amber} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div style={{ border: `1px solid ${C.line}`, borderLeft: `2px solid ${C.teal}`, background: C.panel, padding: 10, marginTop: 8 }}>
        <p style={{ fontSize: 10.5, lineHeight: 1.6, margin: 0, color: C.text }}>
          Panels ③ and ④ receive <em>identical</em> back-projection. The only difference is that ④'s
          projections were sharpened first. Stop at 20 views: ④ is already readable while ③ is fog.
          Run to 180: ③ never sharpens, however much data you add. Detail is not lost in the
          measurement — it is lost in a careless reconstruction.
        </p>
      </div>
    </div>
  );
}

/* ================= SHELL ================= */

export default function CTBench() {
  const [mode, setMode] = useState("voxel");

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100%", padding: "14px 12px 34px", fontFamily: MONO }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=JetBrains+Mono:wght@400;600&display=swap');
        input[type=range]{-webkit-appearance:none;appearance:none;height:3px;background:${C.line};border-radius:2px;outline:none}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:${C.amber};cursor:pointer}
        input[type=range]::-moz-range-thumb{width:14px;height:14px;border:none;border-radius:50%;background:${C.amber};cursor:pointer}
        input[type=number]::-webkit-inner-spin-button{opacity:0.25}
        button:focus-visible,input:focus-visible{outline:2px solid ${C.amber};outline-offset:2px}
        @media (prefers-reduced-motion:reduce){*{transition:none!important}}
      `}</style>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 10, flexWrap: "wrap", borderBottom: `1px solid ${C.line}`, paddingBottom: 10, marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 8.5, letterSpacing: "0.28em", color: C.amber }}>RADON TRANSFORM · CT RECONSTRUCTION</div>
          <h1 style={{ fontFamily: DISP, fontWeight: 700, fontSize: 27, lineHeight: 1, margin: "3px 0 0", textTransform: "uppercase", color: C.bright }}>
            From line sums to a slice
          </h1>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button onClick={() => setMode("voxel")} style={btn(mode === "voxel", C.amber)}>VOXELS</button>
          <button onClick={() => setMode("slice")} style={btn(mode === "slice", C.teal)}>FULL SLICE</button>
        </div>
      </div>

      <p style={{ fontSize: 10.5, color: C.dim, lineHeight: 1.55, margin: "0 0 12px", maxWidth: 560 }}>
        {mode === "voxel"
          ? "Four voxels, four views, ten numbers. Step through the arithmetic the scanner does — this is the A-level treatment, done exactly."
          : "The same three operations on a 128 × 128 slice and 180 views. Nothing new has been added — only the number of unknowns."}
      </p>

      {mode === "voxel" ? <VoxelBench /> : <SliceBench />}
    </div>
  );
}
