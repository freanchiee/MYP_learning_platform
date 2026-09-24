
import { useState, useEffect, useRef } from "react";

const CW = 780, CH = 480, LW = 2900;
const GRAV = 0.52, JF = -13.2, SPD = 4.6;
const PW = 34, PH = 44;

const CHARS = [
  { id:"dalton",  name:"Kanad & Dalton",     yr:"600 BC – 1808", model:"Billiard Ball Model",
    icon:"⚫", color:"#D4A017", skyA:"#1A0C03", skyB:"#5C3010", platC:"#5C2D0A", platB:"#D4A017",
    world:"The Indivisible Realm",
    desc:"Atoms are tiny, solid, indivisible spheres — the ultimate building blocks of all matter." },
  { id:"thomson", name:"J.J. Thomson",        yr:"1897",          model:"Plum Pudding Model",
    icon:"🔴", color:"#FF80AB", skyA:"#15002A", skyB:"#6A0080", platC:"#6A0080", platB:"#FF80AB",
    world:"The Pudding Dimension",
    desc:"Electrons (plums) embedded in a positive sphere (pudding) — first subatomic particles!" },
  { id:"rutherford", name:"Ernest Rutherford", yr:"1911",         model:"Nuclear Model",
    icon:"☢",  color:"#FFD700", skyA:"#000308", skyB:"#0A1929", platC:"#0D2040", platB:"#FFD700",
    world:"The Nuclear Void",
    desc:"A tiny dense nucleus in mostly empty space — electrons orbit freely around it." },
  { id:"bohr",    name:"Niels Bohr",           yr:"1913",          model:"Shell / Orbital Model",
    icon:"🔵", color:"#00E5FF", skyA:"#000C18", skyB:"#003050", platC:"#004D60", platB:"#00E5FF",
    world:"The Quantum Rings",
    desc:"Electrons in fixed energy shells — absorb energy to jump up, emit light to drop down!" },
];

const QZ = {
  dalton:[
    {q:"What did ancient Indian philosopher Kanad call the smallest indivisible particle?",
     o:["Parmanu","Electron","Nucleus","Photon"],a:0,
     f:"Kanad (600 BC) coined 'Parmanu' — the eternal indivisible particle, predating Dalton by 2400 years!"},
    {q:"In Dalton's model, atoms of the SAME element are:",
     o:["Identical in mass & size","Different sizes","Electrically charged","Hollow inside"],a:0,
     f:"Dalton's postulate: all atoms of the same element are perfectly identical in mass and properties."},
    {q:"Dalton's atomic model is nicknamed the:",
     o:["Billiard Ball Model","Plum Pudding Model","Shell Model","Nuclear Model"],a:0,
     f:"Dalton pictured atoms as tiny, solid, indivisible spheres — just like billiard balls!"},
    {q:"According to Dalton, atoms of different elements combine to form:",
     o:["Compounds","Isotopes","Ions","Photons"],a:0,
     f:"Dalton's law: atoms combine in fixed whole-number ratios to form compounds."},
    {q:"What was the BIGGEST limitation of Dalton's model?",
     o:["Could not explain subatomic particles","Had no atoms","Ignored atomic mass","Had no shapes"],a:0,
     f:"The solid sphere model had no room for electrons, protons, or nuclei — all discovered later!"},
  ],
  thomson:[
    {q:"What subatomic particle did J.J. Thomson discover in 1897?",
     o:["Electron","Proton","Neutron","Positron"],a:0,
     f:"Thomson's electron discovery proved atoms ARE divisible — shattering Dalton's billiard ball model!"},
    {q:"What apparatus did Thomson use to discover electrons?",
     o:["Cathode ray tube","Gold foil","Cloud chamber","Spectroscope"],a:0,
     f:"Cathode rays deflected by electric/magnetic fields → negatively charged particles = electrons!"},
    {q:"In Thomson's 'plum pudding' model, electrons are embedded in:",
     o:["A uniform positive sphere","The nucleus","Fixed orbital rings","Empty space"],a:0,
     f:"Thomson's model: electrons (plums) scattered inside a uniform positive charge sphere (the pudding)."},
    {q:"What charge does an electron carry?",
     o:["Negative (−1)","Positive (+1)","Neutral (0)","Variable"],a:0,
     f:"Electrons carry −1.6 × 10⁻¹⁹ C. Thomson confirmed this by measuring their deflection."},
    {q:"Thomson's model was disproved because it could not explain:",
     o:["Rutherford's gold foil deflections","Cathode rays","Electron charge","Chemical bonding"],a:0,
     f:"Rutherford's alpha particles bouncing back proved a dense nucleus — impossible in Thomson's pudding."},
  ],
  rutherford:[
    {q:"What particles did Rutherford fire at the gold foil?",
     o:["Alpha particles (α)","Beta particles (β)","Gamma rays (γ)","Electrons"],a:0,
     f:"Alpha particles = helium nuclei (2 protons + 2 neutrons) — positively charged and heavy."},
    {q:"What happened to MOST alpha particles fired at gold foil?",
     o:["Passed straight through","Bounced back 180°","Deflected 90°","Were absorbed"],a:0,
     f:"~99.9% passed straight through — proving the atom is overwhelmingly EMPTY SPACE!"},
    {q:"The rare large deflections proved the existence of:",
     o:["A tiny dense positive nucleus","Electron clouds","Energy shells","Uniform charge"],a:0,
     f:"Rutherford: 'It was as if you fired shells at tissue paper and they came back and hit you!'"},
    {q:"The atom is mostly made of:",
     o:["Empty space","Positive charge","Dense neutrons","Electron mass"],a:0,
     f:"Nucleus ~10⁻¹⁵ m; atom ~10⁻¹⁰ m. If nucleus = a marble, the atom = a football stadium!"},
    {q:"Rutherford's model FAILED to explain why electrons don't:",
     o:["Spiral into the nucleus","Carry negative charge","Orbit the nucleus","Exist at all"],a:0,
     f:"Accelerating charges radiate energy — orbiting electrons should spiral in. Bohr fixed this!"},
  ],
  bohr:[
    {q:"In Bohr's model, electrons can ONLY exist in:",
     o:["Fixed quantised energy shells","Random orbits","Inside the nucleus","Continuous spirals"],a:0,
     f:"Bohr's quantum rule: electrons occupy ONLY specific energy levels — jumping between them!"},
    {q:"When an electron drops to a lower shell, it emits:",
     o:["A photon of light","A proton","A neutron","An alpha particle"],a:0,
     f:"E = hf — the photon's frequency (colour!) depends on the energy gap between shells."},
    {q:"The atomic number Z equals the number of:",
     o:["Protons in the nucleus","Neutrons","Electrons in outer shell","Energy levels"],a:0,
     f:"Z = protons = electrons (neutral atom). It defines the element — change Z, change the element!"},
    {q:"Which electrons have the MOST energy in Bohr's model?",
     o:["Outermost shell electrons","Innermost shell electrons","All shells equal","Nucleus electrons"],a:0,
     f:"Outer shell electrons are at higher energy levels — they need less energy to escape (ionisation)."},
    {q:"Bohr's KEY improvement over Rutherford was:",
     o:["Quantised orbits explain stable atoms","Discovering the nucleus","Finding electrons","Splitting atoms"],a:0,
     f:"Quantised orbits don't radiate continuously — so electrons stay put! Stable atoms explained!"},
  ],
};

const makePlats = () => [
  {x:0,   y:436,w:560, h:60},{x:640, y:436,w:480,h:60},{x:1225,y:436,w:375,h:60},
  {x:1720,y:436,w:480,h:60},{x:2310,y:436,w:590,h:60},
  {x:490, y:354,w:170,h:18},{x:760, y:301,w:130,h:18},{x:990, y:364,w:140,h:18},
  {x:1150,y:274,w:145,h:18},{x:1410,y:341,w:135,h:18},{x:1577,y:259,w:160,h:18},
  {x:1660,y:379,w:115,h:18},{x:1958,y:311,w:168,h:18},{x:2190,y:369,w:132,h:18},
  {x:2400,y:291,w:148,h:18},
];
const makeGates = () => [
  {x:534, y:282,qi:0},{x:1163,y:202,qi:1},{x:1595,y:187,qi:2},
  {x:1970,y:239,qi:3},{x:2416,y:219,qi:4},
].map(g=>({...g,w:34,h:72,done:false,cooldown:0}));
const makeColls = () => [
  [160,402],[295,402],[415,402],[510,320],[692,402],[825,268],[1032,402],
  [1092,336],[1182,240],[1443,306],[1543,224],[1695,402],[1820,402],[2006,276],
  [2092,402],[2244,334],[2364,402],[2468,256],[2594,402],[2695,402],
].map(([x,y])=>({x,y,got:false}));

function drawBg(ctx,ch,fr,cam) {
  if(ch.id==="dalton"){
    ctx.fillStyle="rgba(70,35,8,0.16)";
    for(let r=0;r<8;r++) for(let c=0;c<14;c++){const off=(r%2)*28;ctx.fillRect(c*58+off,r*58,52,54);}
    for(let i=0;i<6;i++){
      const sx=((i*170+fr*0.38*(i%2?1:-1))%(CW+50)+CW+50)%(CW+50)-25;
      const sy=50+i*52+Math.sin(fr*0.024+i)*18;
      ctx.beginPath();ctx.arc(sx,sy,13,0,Math.PI*2);
      ctx.fillStyle="rgba(212,160,23,0.16)";ctx.fill();
      ctx.strokeStyle="rgba(212,160,23,0.38)";ctx.lineWidth=2;ctx.stroke();
    }
  }
  if(ch.id==="thomson"){
    const gr=ctx.createRadialGradient(CW/2,CH/2,0,CW/2,CH/2,340);
    gr.addColorStop(0,"rgba(255,64,145,0.1)");gr.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=gr;ctx.fillRect(0,0,CW,CH);
    for(let i=0;i<16;i++){
      const ex=((i*68+fr*(0.52+i*0.07))%(CW+50)+CW+50)%(CW+50)-25;
      const ey=20+(i*35%(CH-80))+Math.sin(fr*0.042+i*0.85)*18;
      ctx.beginPath();ctx.arc(ex,ey,5,0,Math.PI*2);
      ctx.fillStyle="rgba(120,180,255,0.6)";ctx.fill();
    }
  }
  if(ch.id==="rutherford"){
    for(let i=0;i<72;i++){
      const sx=(i*131)%CW,sy=(i*79)%(CH-90);
      const b=Math.sin(fr*0.04+i)*0.35+0.55;
      ctx.fillStyle=`rgba(255,255,255,${(b*0.72).toFixed(2)})`;ctx.fillRect(sx,sy,1.5,1.5);
    }
    const g2=Math.sin(fr*0.06)*3;
    ctx.beginPath();ctx.arc(88,188,10+g2,0,Math.PI*2);ctx.fillStyle="rgba(255,215,0,0.72)";ctx.fill();
    ctx.beginPath();ctx.arc(88,188,26+g2,0,Math.PI*2);ctx.fillStyle="rgba(255,165,0,0.11)";ctx.fill();
    for(let i=0;i<3;i++){
      const ax=(fr*2.4+i*295)%(CW+90)-45,ay=128+i*94;
      ctx.beginPath();ctx.moveTo(ax-26,ay);ctx.lineTo(ax-2,ay);
      ctx.strokeStyle="rgba(255,200,0,0.52)";ctx.lineWidth=2;ctx.stroke();
      ctx.beginPath();ctx.arc(ax,ay,5,0,Math.PI*2);ctx.fillStyle="rgba(255,155,0,0.8)";ctx.fill();
    }
  }
  if(ch.id==="bohr"){
    for(let i=0;i<58;i++){
      const sx=(i*163)%CW,sy=(i*89)%(CH-60);
      ctx.fillStyle=`rgba(180,240,255,${0.18+(i%4)*0.14})`;ctx.fillRect(sx,sy,1.5,1.5);
    }
    const ocx=88,ocy=168;
    for(let r=0;r<4;r++){
      const rad=36+r*32;
      ctx.beginPath();ctx.arc(ocx,ocy,rad,0,Math.PI*2);
      ctx.strokeStyle=`rgba(0,229,255,${0.09+r*0.04})`;ctx.lineWidth=1;ctx.stroke();
      const ang=fr*0.046*(1+r*0.26)+r*1.42;
      ctx.beginPath();ctx.arc(ocx+Math.cos(ang)*rad,ocy+Math.sin(ang)*rad,4,0,Math.PI*2);
      ctx.fillStyle="rgba(0,229,255,0.72)";ctx.fill();
    }
  }
}

function drawHUD(ctx,g,ch,pName){
  ctx.fillStyle="rgba(0,0,0,0.6)";ctx.fillRect(8,8,136,30);
  ctx.fillStyle="#fff";ctx.font="16px sans-serif";ctx.textAlign="left";
  ctx.fillText("♥".repeat(g.lives)+"♡".repeat(Math.max(0,3-g.lives)),13,27);
  ctx.fillStyle="rgba(0,0,0,0.6)";ctx.fillRect(CW-126,8,118,30);
  ctx.fillStyle=ch.color;ctx.font="bold 14px monospace";ctx.textAlign="right";
  ctx.fillText("★ "+g.score,CW-10,27);
  ctx.fillStyle="rgba(0,0,0,0.6)";ctx.fillRect(CW/2-70,8,140,30);
  ctx.fillStyle="#ddd";ctx.font="12px sans-serif";ctx.textAlign="center";
  ctx.fillText("❓ "+g.gatesDone+" / 5 gates",CW/2,26);
  ctx.fillStyle="rgba(0,0,0,0.4)";ctx.fillRect(8,CH-15,CW-16,7);
  ctx.fillStyle=ch.color;ctx.fillRect(8,CH-15,(CW-16)*Math.min(g.p.x/(LW-220),1),7);
  ctx.fillStyle="rgba(255,255,255,0.5)";ctx.font="9px sans-serif";ctx.textAlign="right";
  ctx.fillText("EXIT →",CW-10,CH-18);
}

function drawPlayer(ctx,p,ch,pName,fr){
  const legs=p.onGround;
  ctx.fillStyle=ch.platC;
  if(legs){ctx.fillRect(p.x+4,p.y+PH,10,10);ctx.fillRect(p.x+20,p.y+PH,10,10);}
  else{ctx.fillRect(p.x+2,p.y+PH,10,13);ctx.fillRect(p.x+22,p.y+PH,10,7);}
  ctx.fillStyle=ch.color;ctx.fillRect(p.x,p.y,PW,PH);
  ctx.fillStyle="rgba(255,255,255,0.28)";ctx.fillRect(p.x+11,p.y,4,PH);
  ctx.fillStyle="#FDBCB4";ctx.fillRect(p.x+4,p.y-18,26,20);
  ctx.fillStyle="#222";ctx.fillRect(p.x+8,p.y-12,4,4);ctx.fillRect(p.x+20,p.y-12,4,4);
  const nw=Math.min(pName.length*6.5+14,140);
  ctx.fillStyle="rgba(0,0,0,0.65)";ctx.fillRect(p.x+PW/2-nw/2,p.y-32,nw,14);
  ctx.fillStyle="#fff";ctx.font="9px monospace";ctx.textAlign="center";
  ctx.fillText(pName.substring(0,18),p.x+PW/2,p.y-21);
}

export default function AtomicQuest(){
  const [screen,setScreen]=useState("name");
  const [pName,setPName]=useState("");
  const [ch,setCh]=useState(null);
  const [aq,setAq]=useState(null);
  const [qRes,setQRes]=useState(null);
  const [log,setLog]=useState([]);
  const [endScore,setEndScore]=useState(0);

  const cvs=useRef(null);
  const gRef=useRef(null);
  const keys=useRef({});
  const quizOn=useRef(false);
  const rafId=useRef(null);
  const running=useRef(false);
  const fr=useRef(0);

  const initGame=(char,name)=>{
    gRef.current={
      p:{x:80,y:370,vx:0,vy:0,onGround:false},
      lives:3,score:0,cam:0,gatesDone:0,checkpoint:80,physLog:[],
      platforms:makePlats(),gates:makeGates(),colls:makeColls(),
    };
    quizOn.current=false;fr.current=0;
    setAq(null);setQRes(null);setLog([]);
  };

  const handleAnswer=(optIdx)=>{
    if(!aq||!ch)return;
    const g=gRef.current;
    const qd=QZ[ch.id][aq.qi];
    const ok=optIdx===qd.a;
    if(ok){
      g.score+=50;g.gates[aq.gi].done=true;g.gatesDone++;
      g.physLog.push({q:qd.q,f:qd.f});
      setLog([...g.physLog]);setQRes("ok");
      setTimeout(()=>{setQRes(null);setAq(null);quizOn.current=false;},1300);
    } else {
      g.lives--;setQRes("ng");
      g.gates[aq.gi].cooldown=Date.now()+3500;
      if(g.lives<=0){
        setTimeout(()=>{setEndScore(g.score);setScreen("gameover");},1100);
      } else {
        setTimeout(()=>{setQRes(null);setAq(null);quizOn.current=false;},1300);
      }
    }
  };

  useEffect(()=>{
    if(screen!=="playing"||!ch)return;
    const canvas=cvs.current;if(!canvas)return;
    const ctx=canvas.getContext("2d");
    running.current=true;

    const onKey=(e)=>{
      keys.current[e.code]=e.type==="keydown";
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code))e.preventDefault();
    };
    window.addEventListener("keydown",onKey);
    window.addEventListener("keyup",onKey);

    const loop=()=>{
      if(!running.current)return;
      fr.current++;
      const g=gRef.current;if(!g)return;

      if(!quizOn.current){
        const p=g.p;
        if(keys.current["ArrowLeft"]||keys.current["KeyA"])p.vx=-SPD;
        else if(keys.current["ArrowRight"]||keys.current["KeyD"])p.vx=SPD;
        else p.vx*=0.6;
        if((keys.current["ArrowUp"]||keys.current["KeyW"]||keys.current["Space"])&&p.onGround){p.vy=JF;p.onGround=false;}
        p.vy+=GRAV;p.x+=p.vx;p.y+=p.vy;p.onGround=false;
        p.x=Math.max(0,p.x);
        for(const pl of g.platforms){
          if(p.x+PW>pl.x&&p.x<pl.x+pl.w&&p.y+PH>pl.y&&p.y+PH<pl.y+pl.h+18&&p.vy>=0){
            p.y=pl.y-PH;p.vy=0;p.onGround=true;
          }
        }
        g.cam=Math.max(0,Math.min(p.x-CW/2+PW/2,LW-CW));
        for(const c of g.colls){
          if(!c.got&&Math.abs(p.x+PW/2-c.x)<22&&Math.abs(p.y+PH/2-c.y)<22){c.got=true;g.score+=10;}
        }
        const now=Date.now();
        for(let i=0;i<g.gates.length;i++){
          const gt=g.gates[i];
          if(!gt.done&&now>gt.cooldown&&p.x+PW>gt.x&&p.x<gt.x+gt.w&&p.y+PH>gt.y&&p.y<gt.y+gt.h){
            gt.cooldown=now+99999;quizOn.current=true;setAq({qi:gt.qi,gi:i});break;
          }
        }
        if(p.x>LW-180){
          g.score+=100;setEndScore(g.score);setLog([...g.physLog]);
          running.current=false;setScreen("win");return;
        }
        if(p.y>CH+100){
          g.lives--;
          if(g.lives<=0){setEndScore(g.score);running.current=false;setScreen("gameover");return;}
          p.x=g.checkpoint;p.y=280;p.vx=0;p.vy=0;
        }
        if(g.gatesDone>0){
          const last=g.gates.filter(gt=>gt.done).at(-1);
          if(last)g.checkpoint=Math.max(g.checkpoint,last.x-60);
        }
      }

      // DRAW
      const sky=ctx.createLinearGradient(0,0,0,CH);
      sky.addColorStop(0,ch.skyA);sky.addColorStop(1,ch.skyB);
      ctx.fillStyle=sky;ctx.fillRect(0,0,CW,CH);
      drawBg(ctx,ch,fr.current,g.cam);

      ctx.save();ctx.translate(-g.cam,0);

      for(const pl of g.platforms){
        ctx.fillStyle=ch.platC;ctx.fillRect(pl.x,pl.y,pl.w,pl.h);
        ctx.fillStyle=ch.platB;ctx.fillRect(pl.x,pl.y,pl.w,4);
        ctx.fillStyle=ch.platB+"1A";
        for(let tx=pl.x;tx<pl.x+pl.w;tx+=28)ctx.fillRect(tx,pl.y,2,pl.h);
      }

      for(const c of g.colls){
        if(c.got)continue;
        ctx.beginPath();ctx.arc(c.x,c.y,8,0,Math.PI*2);
        ctx.fillStyle=ch.color+"99";ctx.fill();
        ctx.strokeStyle=ch.color;ctx.lineWidth=2;ctx.stroke();
        ctx.beginPath();ctx.arc(c.x,c.y,3,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();
      }

      for(const gt of g.gates){
        if(gt.done){
          ctx.fillStyle="#222";ctx.fillRect(gt.x-4,gt.y,gt.w+8,gt.h);
          ctx.fillStyle="#4CAF50";ctx.font="bold 24px sans-serif";ctx.textAlign="center";
          ctx.fillText("✓",gt.x+gt.w/2,gt.y+46);
        } else {
          const gv=Math.sin(fr.current*0.08)*0.22+0.78;
          ctx.fillStyle=ch.color+"BB";ctx.fillRect(gt.x-4,gt.y,gt.w+8,gt.h);
          ctx.strokeStyle=ch.color;ctx.lineWidth=2;ctx.strokeRect(gt.x-4,gt.y,gt.w+8,gt.h);
          ctx.fillStyle="#fff";ctx.font=`bold 22px sans-serif`;ctx.textAlign="center";
          ctx.fillText("?",gt.x+gt.w/2,gt.y+46);
          // label
          ctx.fillStyle=ch.color;ctx.font="bold 9px sans-serif";ctx.textAlign="center";
          ctx.fillText("Q"+(gt.qi+1),gt.x+gt.w/2,gt.y+gt.h+12);
        }
      }

      // Exit portal
      const ex=LW-150,ey=390,pg=Math.sin(fr.current*0.05)*0.4+0.6;
      ctx.beginPath();ctx.ellipse(ex,ey,40,56,0,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${pg*0.09})`;ctx.fill();
      ctx.strokeStyle=ch.color;ctx.lineWidth=3+pg*2;ctx.stroke();
      ctx.fillStyle="#fff";ctx.font="bold 11px sans-serif";ctx.textAlign="center";ctx.fillText("EXIT ✨",ex,ey+4);

      drawPlayer(ctx,g.p,ch,pName,fr.current);
      ctx.restore();
      drawHUD(ctx,g,ch,pName);

      rafId.current=requestAnimationFrame(loop);
    };
    rafId.current=requestAnimationFrame(loop);
    return()=>{
      running.current=false;
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("keydown",onKey);
      window.removeEventListener("keyup",onKey);
    };
  },[screen,ch,pName]);

  const setKey=(code,val)=>{keys.current[code]=val;};

  // ── NAME SCREEN ──────────────────────────────────────────────────────────
  if(screen==="name") return(
    <div style={{minHeight:"100vh",background:"#030810",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"}}>
      <div style={{textAlign:"center",maxWidth:420,width:"100%"}}>
        <div style={{fontSize:64,marginBottom:8}}>⚛️</div>
        <h1 style={{color:"#fff",fontSize:36,fontWeight:900,margin:"0 0 4px",fontFamily:"system-ui"}}>ATOMIC QUEST</h1>
        <p style={{color:"#8899aa",marginBottom:8,fontFamily:"system-ui"}}>A Physics Platformer · MYP Grade 9</p>
        <p style={{color:"#667788",fontSize:13,marginBottom:28,fontFamily:"system-ui"}}>Atomic Physics — Models of the Atom</p>
        <input value={pName} onChange={e=>setPName(e.target.value)}
          placeholder="Enter your name to begin..."
          style={{width:"100%",background:"#111a24",color:"#fff",border:"2px solid #334",borderRadius:12,padding:"12px 16px",fontSize:17,outline:"none",boxSizing:"border-box",fontFamily:"system-ui",marginBottom:14}}
          onKeyDown={e=>e.key==="Enter"&&pName.trim()&&setScreen("select")}/>
        <button onClick={()=>pName.trim()&&setScreen("select")} disabled={!pName.trim()}
          style={{width:"100%",padding:"13px",borderRadius:12,fontWeight:700,fontSize:17,cursor:pName.trim()?"pointer":"not-allowed",background:pName.trim()?"#1a6fff":"#222",color:pName.trim()?"#fff":"#555",border:"none",fontFamily:"system-ui",transition:"background 0.2s"}}>
          Choose Your Scientist →
        </button>
        <p style={{color:"#445566",fontSize:12,marginTop:16,fontFamily:"system-ui"}}>← → / A D to move &nbsp;|&nbsp; ↑ / W / Space to jump</p>
      </div>
    </div>
  );

  // ── SELECT SCREEN ─────────────────────────────────────────────────────────
  if(screen==="select") return(
    <div style={{minHeight:"100vh",background:"#030810",padding:"24px"}}>
      <div style={{textAlign:"center",marginBottom:20}}>
        <h2 style={{color:"#fff",fontSize:22,fontWeight:800,fontFamily:"system-ui",margin:0}}>
          Choose Your Scientist, <span style={{color:"#FFD700"}}>{pName}</span>
        </h2>
        <p style={{color:"#778899",fontSize:13,margin:"6px 0 0",fontFamily:"system-ui"}}>Each scientist unlocks a unique world · Complete 5 quiz gates to escape the atom!</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:680,margin:"0 auto"}}>
        {CHARS.map(c=>(
          <div key={c.id}
            onClick={()=>{setCh(c);initGame(c,pName);setScreen("playing");}}
            style={{cursor:"pointer",borderRadius:18,padding:18,border:`2px solid ${c.color}44`,background:"#0a1020",transition:"all 0.18s",boxShadow:`0 0 0 0 ${c.color}`}}
            onMouseEnter={e=>{e.currentTarget.style.border=`2px solid ${c.color}`;e.currentTarget.style.background="#0d1828";}}
            onMouseLeave={e=>{e.currentTarget.style.border=`2px solid ${c.color}44`;e.currentTarget.style.background="#0a1020";}}>
            <div style={{fontSize:30,marginBottom:4}}>{c.icon}</div>
            <div style={{fontWeight:800,color:"#fff",fontSize:15,fontFamily:"system-ui"}}>{c.name}</div>
            <div style={{color:c.color,fontSize:11,marginBottom:8,fontFamily:"system-ui"}}>{c.yr} · {c.model}</div>
            <div style={{color:"#8899aa",fontSize:12,lineHeight:1.5,fontFamily:"system-ui"}}>{c.desc}</div>
            <div style={{marginTop:10,fontSize:11,fontWeight:700,color:c.color,fontFamily:"system-ui"}}>🗺 {c.world}</div>
          </div>
        ))}
      </div>
      <div style={{textAlign:"center",marginTop:18}}>
        <button onClick={()=>setScreen("name")} style={{color:"#556677",background:"none",border:"none",cursor:"pointer",fontFamily:"system-ui",fontSize:13}}>← Back</button>
      </div>
    </div>
  );

  // ── PLAYING SCREEN ─────────────────────────────────────────────────────────
  if(screen==="playing") return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",background:"#020810",minHeight:"100vh",padding:"8px 4px"}}>
      <div style={{position:"relative",display:"inline-block"}}>
        <canvas ref={cvs} width={CW} height={CH} style={{display:"block",borderRadius:12,boxShadow:"0 0 40px rgba(0,0,0,0.8)"}}/>
        {aq&&(
          <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.84)",borderRadius:12}}>
            <div style={{background:"#0d1520",border:`2px solid ${ch.color}`,borderRadius:18,padding:24,maxWidth:460,width:"90%"}}>
              {qRes?(
                <div style={{textAlign:"center",padding:"32px 0",fontSize:26,fontWeight:700,color:qRes==="ok"?"#4CAF50":"#f44336",fontFamily:"system-ui"}}>
                  {qRes==="ok"?"✓  Correct! +50 points 🎉":"✗  Wrong! −1 Life 💔"}
                  {qRes==="ok"&&log.length>0&&(
                    <div style={{marginTop:12,fontSize:12,color:"#8bc34a",fontWeight:400,lineHeight:1.5,maxWidth:380,margin:"12px auto 0"}}>
                      💡 {log[log.length-1].f}
                    </div>
                  )}
                </div>
              ):(
                <>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",color:ch.color,textTransform:"uppercase",marginBottom:8,fontFamily:"system-ui"}}>
                    Atomic Gate — Question {aq.qi+1} of 5
                  </div>
                  <div style={{color:"#fff",fontSize:15,fontWeight:600,marginBottom:16,lineHeight:1.5,fontFamily:"system-ui"}}>
                    {QZ[ch.id][aq.qi].q}
                  </div>
                  {QZ[ch.id][aq.qi].o.map((opt,i)=>(
                    <button key={i} onClick={()=>handleAnswer(i)}
                      style={{display:"block",width:"100%",textAlign:"left",padding:"10px 14px",marginBottom:8,borderRadius:10,border:"1px solid #334",background:"#111c2a",color:"#ccd",fontSize:13,cursor:"pointer",fontFamily:"system-ui",transition:"all 0.15s"}}
                      onMouseEnter={e=>{e.currentTarget.style.border="1px solid #fff";e.currentTarget.style.background="#1a2a3a";e.currentTarget.style.color="#fff";}}
                      onMouseLeave={e=>{e.currentTarget.style.border="1px solid #334";e.currentTarget.style.background="#111c2a";e.currentTarget.style.color="#ccd";}}>
                      <span style={{fontWeight:700,marginRight:8}}>{["A","B","C","D"][i]}.</span>{opt}
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div style={{color:"#445566",fontSize:11,margin:"6px 0 4px",fontFamily:"system-ui"}}>
        ← → / A D to move &nbsp;·&nbsp; ↑ / W / Space to jump
      </div>
      <div style={{display:"flex",gap:10,alignItems:"center"}}>
        <button onMouseDown={()=>setKey("ArrowLeft",true)} onMouseUp={()=>setKey("ArrowLeft",false)}
          onTouchStart={e=>{e.preventDefault();setKey("ArrowLeft",true)}} onTouchEnd={()=>setKey("ArrowLeft",false)}
          style={{width:52,height:52,borderRadius:"50%",background:"#1a2233",border:"1px solid #445",color:"#fff",fontSize:20,cursor:"pointer",userSelect:"none",fontFamily:"system-ui"}}>◀</button>
        <button onMouseDown={()=>setKey("Space",true)} onMouseUp={()=>setKey("Space",false)}
          onTouchStart={e=>{e.preventDefault();setKey("Space",true)}} onTouchEnd={()=>setKey("Space",false)}
          style={{width:74,height:52,borderRadius:26,background:"#1a2233",border:`2px solid ${ch?.color||"#FFD700"}`,color:ch?.color||"#FFD700",fontWeight:700,fontSize:12,cursor:"pointer",userSelect:"none",fontFamily:"system-ui"}}>JUMP ▲</button>
        <button onMouseDown={()=>setKey("ArrowRight",true)} onMouseUp={()=>setKey("ArrowRight",false)}
          onTouchStart={e=>{e.preventDefault();setKey("ArrowRight",true)}} onTouchEnd={()=>setKey("ArrowRight",false)}
          style={{width:52,height:52,borderRadius:"50%",background:"#1a2233",border:"1px solid #445",color:"#fff",fontSize:20,cursor:"pointer",userSelect:"none",fontFamily:"system-ui"}}>▶</button>
      </div>
    </div>
  );

  // ── WIN SCREEN ────────────────────────────────────────────────────────────
  if(screen==="win") return(
    <div style={{minHeight:"100vh",background:"#030810",display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{maxWidth:560,width:"100%"}}>
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{fontSize:52,marginBottom:6}}>🎉</div>
          <h1 style={{color:"#fff",fontSize:28,fontWeight:900,margin:"0 0 6px",fontFamily:"system-ui"}}>You Escaped the Atom!</h1>
          <p style={{color:"#aab",fontFamily:"system-ui",margin:0}}>{pName} &nbsp;|&nbsp; Final Score: <span style={{color:ch?.color,fontWeight:700,fontSize:22}}>{endScore}</span></p>
        </div>
        <div style={{background:"#0a1422",border:`2px solid ${ch?.color||"#fff"}44`,borderRadius:16,padding:20,marginBottom:16}}>
          <h2 style={{color:ch?.color,fontSize:15,fontWeight:700,margin:"0 0 14px",fontFamily:"system-ui"}}>⚗️ Physics Log — {ch?.model}</h2>
          {log.length===0&&<p style={{color:"#556",fontFamily:"system-ui",fontSize:13}}>You reached the exit before answering all questions — try again!</p>}
          {log.map((e,i)=>(
            <div key={i} style={{marginBottom:14,paddingBottom:14,borderBottom:i<log.length-1?"1px solid #1a2a3a":"none"}}>
              <div style={{color:"#667788",fontSize:12,marginBottom:4,fontFamily:"system-ui"}}>Q{i+1}: {e.q}</div>
              <div style={{color:"#8bc34a",fontSize:13,lineHeight:1.5,fontFamily:"system-ui"}}>💡 {e.f}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:10}}>
          <button onClick={()=>{setCh(null);setScreen("select");}}
            style={{flex:1,padding:13,borderRadius:12,fontWeight:700,background:ch?.color,color:"#000",border:"none",cursor:"pointer",fontFamily:"system-ui",fontSize:14}}>
            Change Character
          </button>
          <button onClick={()=>{initGame(ch,pName);setScreen("playing");}}
            style={{flex:1,padding:13,borderRadius:12,fontWeight:700,background:"transparent",color:"#fff",border:`2px solid ${ch?.color}`,cursor:"pointer",fontFamily:"system-ui",fontSize:14}}>
            Play Again ↺
          </button>
        </div>
      </div>
    </div>
  );

  // ── GAME OVER SCREEN ──────────────────────────────────────────────────────
  if(screen==="gameover") return(
    <div style={{minHeight:"100vh",background:"#030810",display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{textAlign:"center",maxWidth:360,width:"100%"}}>
        <div style={{fontSize:60,marginBottom:8}}>💥</div>
        <h1 style={{color:"#f44336",fontSize:28,fontWeight:900,margin:"0 0 8px",fontFamily:"system-ui"}}>Quantum Collapse!</h1>
        <p style={{color:"#aab",fontFamily:"system-ui",margin:"0 0 4px"}}>{pName}</p>
        <p style={{color:"#778899",fontFamily:"system-ui",margin:"0 0 24px"}}>Score: <span style={{color:"#FFD700",fontWeight:700,fontSize:20}}>{endScore}</span></p>
        <div style={{display:"flex",gap:10}}>
          <button onClick={()=>{initGame(ch,pName);setScreen("playing");}}
            style={{flex:1,padding:13,borderRadius:12,fontWeight:700,background:"#c62828",color:"#fff",border:"none",cursor:"pointer",fontFamily:"system-ui",fontSize:14}}>
            Try Again ↺
          </button>
          <button onClick={()=>setScreen("select")}
            style={{flex:1,padding:13,borderRadius:12,fontWeight:700,background:"transparent",color:"#aab",border:"1px solid #445",cursor:"pointer",fontFamily:"system-ui",fontSize:14}}>
            Change Scientist
          </button>
        </div>
      </div>
    </div>
  );

  return null;
}
