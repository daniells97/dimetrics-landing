import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiNotion, SiMiro, SiSnowflake,
  SiGooglebigquery, SiDbt, SiPython,
  SiTableau, SiLooker,
} from 'react-icons/si';
import { FaMicrosoft, FaDatabase } from 'react-icons/fa';
import { TbBrandAzure } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

type Tool = { name: string };

const TOOL_ICONS: Record<string, { icon: React.ElementType; color: string }> = {
  'Notion':           { icon: SiNotion,         color: '#000000' },
  'Miro':             { icon: SiMiro,           color: '#FFD02F' },
  'Snowflake':        { icon: SiSnowflake,      color: '#29B5E8' },
  'Excel':            { icon: FaMicrosoft,      color: '#217346' },
  'BigQuery':         { icon: SiGooglebigquery, color: '#4285F4' },
  'Azure ADF':        { icon: TbBrandAzure,     color: '#0089D6' },
  'Microsoft Fabric': { icon: FaMicrosoft,      color: '#F25022' },
  'Fivetran':         { icon: FaDatabase,       color: '#0073FF' },
  'dbt':              { icon: SiDbt,            color: '#FF694A' },
  'Python':           { icon: SiPython,         color: '#3776AB' },
  'Airflow':          { icon: FaDatabase,       color: '#017CEE' },
  'n8n':              { icon: FaDatabase,       color: '#EA4B71' },
  'Prefect':          { icon: FaDatabase,       color: '#024DFD' },
  'Power BI':         { icon: FaMicrosoft,      color: '#F2C811' },
  'Looker':           { icon: SiLooker,         color: '#4285F4' },
  'Superset':         { icon: FaDatabase,       color: '#20A6C9' },
  'Tableau':          { icon: SiTableau,        color: '#E97627' },
  'Looker Studio':    { icon: SiLooker,         color: '#4285F4' },
};

type Step = {
  id: string; number: string; phase: string;
  title: string; description: string; tools: Tool[];
  accent: string; result: string; resultLabel: string;
  iconBg: string;
};

const STEPS: Step[] = [
  {
    id: 'diagnostico', number: '01', phase: 'Etapa Inicial',
    title: 'Diagnóstico',
    description: 'Identificamos dónde se pierden sus datos, qué información falta para decidir y cómo estructurar la arquitectura para crecer.',
    tools: [{ name: 'Notion' }, { name: 'Miro' }, { name: 'Snowflake' }, { name: 'Excel' }],
    accent: '#5b9e8f', iconBg: 'linear-gradient(135deg,#5b9e8f,#3d7a70)',
    result: '2 sem.', resultLabel: 'Entrega',
  },
  {
    id: 'centralizacion', number: '02', phase: 'Infraestructura',
    title: 'Centralización',
    description: 'Unificamos todas sus fuentes en un solo Data Warehouse seguro. Su equipo trabaja con una única versión de la verdad.',
    tools: [{ name: 'BigQuery' }, { name: 'Snowflake' }, { name: 'Azure ADF' }, { name: 'Microsoft Fabric' }, { name: 'Fivetran' }],
    accent: '#7ab3c8', iconBg: 'linear-gradient(135deg,#7ab3c8,#4e8fa8)',
    result: '3×', resultLabel: 'Más rápido',
  },
  {
    id: 'automatizacion', number: '03', phase: 'Optimización',
    title: 'Automatización',
    description: 'Eliminamos el trabajo manual. Los datos llegan limpios, transformados y listos — sin intervención humana.',
    tools: [{ name: 'dbt' }, { name: 'Python' }, { name: 'Airflow' }, { name: 'n8n' }, { name: 'Prefect' }],
    accent: '#8b9e7a', iconBg: 'linear-gradient(135deg,#8b9e7a,#637052)',
    result: '80%', resultLabel: 'Menos manual',
  },
  {
    id: 'visualizacion', number: '04', phase: 'Descubrimiento',
    title: 'Visualización',
    description: 'Sus directivos ven en tiempo real lo que pasa en el negocio. Dashboards que responden preguntas antes de que las hagan.',
    tools: [{ name: 'Power BI' }, { name: 'Looker' }, { name: 'Superset' }, { name: 'Tableau' }, { name: 'Looker Studio' }],
    accent: '#4a6080', iconBg: 'linear-gradient(135deg,#4a6080,#2d3f55)',
    result: '10×', resultLabel: 'Decisiones',
  },
];

const STEP_ICONS: Record<string, React.ReactNode> = {
  '01': (<svg viewBox="0 0 28 28" fill="none" width="22" height="22"><rect x="4" y="3" width="20" height="22" rx="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4"/><line x1="8" y1="10" x2="20" y2="10" stroke="rgba(255,255,255,0.8)" strokeWidth="1.3" strokeLinecap="round"/><line x1="8" y1="14" x2="17" y2="14" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round"/><circle cx="20" cy="20" r="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/><line x1="22.5" y1="22.5" x2="25" y2="25" stroke="rgba(255,255,255,0.8)" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  '02': (<svg viewBox="0 0 28 28" fill="none" width="22" height="22"><ellipse cx="14" cy="8" rx="9" ry="3.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/><path d="M5 8v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" fill="none"/><path d="M5 14v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-6" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" fill="none"/></svg>),
  '03': (<svg viewBox="0 0 28 28" fill="none" width="22" height="22"><circle cx="7" cy="14" r="3.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/><circle cx="21" cy="7" r="3.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/><circle cx="21" cy="21" r="3.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/><line x1="10.5" y1="12.5" x2="17.5" y2="8.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3"/><line x1="10.5" y1="15.5" x2="17.5" y2="19.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3"/></svg>),
  '04': (<svg viewBox="0 0 28 28" fill="none" width="22" height="22"><rect x="3" y="4" width="22" height="16" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/><polyline points="7,16 11,10 15,13 21,7" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="21" cy="7" r="1.5" fill="rgba(255,255,255,0.85)"/><line x1="3" y1="23" x2="25" y2="23" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/></svg>),
};

// Canvas BG
const DataCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    let animId: number, time = 0;
    let mouse = { x: -9999, y: -9999 };
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX-r.left; mouse.y = e.clientY-r.top; });
    canvas.addEventListener('mouseleave', () => { mouse.x=-9999; mouse.y=-9999; });
    type Node = { x:number;y:number;vx:number;vy:number;r:number;pulse:number;ps:number };
    const nodes: Node[] = Array.from({length:40},()=>({ x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.5+1,pulse:Math.random()*Math.PI*2,ps:.02+Math.random()*.025 }));
    type Sig={fi:number;ti:number;t:number;sp:number};
    const sigs:Sig[]=[];
    const spawnSig=()=>{const f=Math.floor(Math.random()*nodes.length);let b=-1,bd=9999;for(let i=0;i<nodes.length;i++){if(i===f)continue;const dx=nodes[f].x-nodes[i].x,dy=nodes[f].y-nodes[i].y,d=Math.sqrt(dx*dx+dy*dy);if(d<150&&d<bd){bd=d;b=i;}}if(b!==-1)sigs.push({fi:f,ti:b,t:0,sp:.012+Math.random()*.015});};
    const si=setInterval(spawnSig,300);
    const MD=145,MSD=130;
    const draw=()=>{
      time+=.01;ctx.clearRect(0,0,canvas.width,canvas.height);
      nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;n.pulse+=n.ps;if(n.x<0||n.x>canvas.width)n.vx*=-1;if(n.y<0||n.y>canvas.height)n.vy*=-1;});
      for(let i=0;i<nodes.length;i++){for(let j=i+1;j<nodes.length;j++){const dx=nodes[i].x-nodes[j].x,dy=nodes[i].y-nodes[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<MD){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.strokeStyle=`rgba(37,99,235,${(1-d/MD)*.11})`;ctx.lineWidth=.7;ctx.stroke();}}const mx=nodes[i].x-mouse.x,my=nodes[i].y-mouse.y,md=Math.sqrt(mx*mx+my*my);if(md<MSD){const a=(1-md/MSD);const g=ctx.createLinearGradient(nodes[i].x,nodes[i].y,mouse.x,mouse.y);g.addColorStop(0,`rgba(99,160,255,${a*.38})`);g.addColorStop(1,`rgba(37,99,235,${a*.58})`);ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(mouse.x,mouse.y);ctx.strokeStyle=g;ctx.lineWidth=1.2;ctx.stroke();}}
      for(let s=sigs.length-1;s>=0;s--){const sg=sigs[s];sg.t+=sg.sp;if(sg.t>=1){sigs.splice(s,1);continue;}const nx=nodes[sg.fi].x+(nodes[sg.ti].x-nodes[sg.fi].x)*sg.t,ny=nodes[sg.fi].y+(nodes[sg.ti].y-nodes[sg.fi].y)*sg.t;const al=sg.t<.5?sg.t*2:(1-sg.t)*2;const t2=Math.max(0,sg.t-.12);const tx=nodes[sg.fi].x+(nodes[sg.ti].x-nodes[sg.fi].x)*t2,ty=nodes[sg.fi].y+(nodes[sg.ti].y-nodes[sg.fi].y)*t2;const tg=ctx.createLinearGradient(tx,ty,nx,ny);tg.addColorStop(0,'rgba(99,160,255,0)');tg.addColorStop(1,`rgba(37,99,235,${al*.7})`);ctx.beginPath();ctx.moveTo(tx,ty);ctx.lineTo(nx,ny);ctx.strokeStyle=tg;ctx.lineWidth=1.8;ctx.stroke();ctx.beginPath();ctx.arc(nx,ny,2.5,0,Math.PI*2);ctx.fillStyle=`rgba(130,180,255,${al})`;ctx.fill();}
      nodes.forEach(n=>{const mx=n.x-mouse.x,my=n.y-mouse.y,near=Math.sqrt(mx*mx+my*my)<MSD;const pr=n.r+Math.sin(n.pulse)*.35;ctx.beginPath();ctx.arc(n.x,n.y,near?pr*2:pr,0,Math.PI*2);ctx.fillStyle=near?'rgba(37,99,235,0.55)':'rgba(37,99,235,0.17)';ctx.fill();});
      animId=requestAnimationFrame(draw);
    };
    draw();
    return()=>{cancelAnimationFrame(animId);clearInterval(si);window.removeEventListener('resize',resize);};
  },[]);
  return <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'auto',zIndex:0}}/>;
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .sv4-section { background:#e8edf8; padding:80px 0 100px; position:relative; overflow:hidden; }
        .sv4-inner { position:relative; z-index:1; }
        .sv4-container { max-width:1280px; margin:0 auto; padding:0 40px; }

        /* header */
        .sv4-header { text-align:center; margin-bottom:56px; }
        .sv4-badge { display:inline-block; background:rgba(255,255,255,0.88); border:1px solid rgba(37,99,235,0.2); border-radius:20px; padding:5px 18px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:700; letter-spacing:.18em; color:#2563eb; text-transform:uppercase; margin-bottom:18px; }
        .sv4-title { font-family:'DM Sans',sans-serif; font-size:clamp(34px,4vw,52px); font-weight:900; color:#0d141b; line-height:1.08; margin:0 0 14px; letter-spacing:-0.03em; }
        .sv4-title span { color:#2563eb; }
        .sv4-subtitle { font-family:'DM Sans',sans-serif; font-size:16px; color:#5a7499; line-height:1.65; max-width:520px; margin:0 auto; }

        /* cards grid */
        .sv4-grid {
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap:20px;
        }

        /* card */
        .sv4-card {
          background:rgba(255,255,255,0.86);
          backdrop-filter:blur(14px);
          -webkit-backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,0.92);
          border-radius:22px;
          padding:28px 24px 22px;
          box-shadow:0 4px 28px rgba(13,30,80,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          position:relative;
          overflow:hidden;
          transition:transform .3s, box-shadow .3s;
          visibility:hidden;
          display:flex; flex-direction:column;
        }
        .sv4-card:hover {
          transform:translateY(-6px);
          box-shadow:0 18px 48px rgba(37,99,235,0.14), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        /* big faded number */
        .sv4-num {
          position:absolute; top:14px; left:18px;
          font-family:'DM Sans',sans-serif;
          font-size:72px; font-weight:900;
          color:rgba(13,20,80,0.06);
          line-height:1; letter-spacing:-0.04em;
          pointer-events:none; user-select:none;
        }

        /* icon pill top-right */
        .sv4-icon-pill {
          position:absolute; top:20px; right:20px;
          width:42px; height:42px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 4px 12px rgba(0,0,0,0.15);
        }

        /* phase label */
        .sv4-phase {
          font-family:'DM Serif Display',serif;
          font-size:11px; font-style:italic;
          letter-spacing:.05em; color:#2563eb;
          margin:0 0 8px; margin-top:52px;
        }

        /* title */
        .sv4-step-title {
          font-family:'DM Sans',sans-serif;
          font-size:22px; font-weight:900;
          color:#0d141b; margin:0 0 10px;
          line-height:1.15; letter-spacing:-0.02em;
        }

        /* description */
        .sv4-step-desc {
          font-family:'DM Sans',sans-serif;
          font-size:13px; color:#5a7499;
          line-height:1.7; margin:0 0 20px;
          flex:1;
        }

        /* divider */
        .sv4-divider { height:1px; background:rgba(37,99,235,0.08); margin:0 0 16px; }

        /* tools row */
        .sv4-tools { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:16px; }
        .sv4-tool {
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 10px 4px 8px; border-radius:7px;
          font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600;
          border:1px solid #d8e4f0; color:#4c739a;
          background:rgba(244,247,253,0.9);
          transition:all .2s; cursor:default;
        }
        .sv4-tool:hover { border-color:#2563eb; color:#2563eb; background:#eff6ff; }

        /* result badge bottom */
        .sv4-result {
          display:inline-flex; align-items:center; gap:10px;
          background:linear-gradient(135deg,rgba(37,99,235,0.07),rgba(37,99,235,0.03));
          border:1px solid rgba(37,99,235,0.13);
          border-radius:10px; padding:8px 14px;
          margin-top:auto;
        }
        .sv4-result-val { font-family:'DM Sans',sans-serif; font-size:20px; font-weight:900; color:#2563eb; letter-spacing:-0.03em; line-height:1; }
        .sv4-result-lbl { font-family:'DM Sans',sans-serif; font-size:10px; color:#7a93b8; font-weight:500; }

        @media (max-width:1100px) { .sv4-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:640px)  { .sv4-grid { grid-template-columns:1fr; } .sv4-container { padding:0 20px; } }
      `}</style>

      <section id="servicios" ref={sectionRef} className="sv4-section">
        <DataCanvas />
        <div className="sv4-inner">
          <div className="sv4-container">
            <header className="sv4-header">
              <div className="sv4-badge">Arquitectura de Datos</div>
              <h2 className="sv4-title">Flujo <span>Dinámico</span></h2>
              <p className="sv4-subtitle">Las 4 fases de nuestra metodología para transformar sus datos en decisiones que generan valor real.</p>
            </header>

            <div className="sv4-grid">
              {STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className="sv4-card"
                  ref={(el) => { if (el) cardRefs.current[index] = el; }}
                >
                  {/* big number bg */}
                  <span className="sv4-num">{step.number}</span>

                  {/* icon top right */}
                  <div className="sv4-icon-pill" style={{ background: step.iconBg }}>
                    {STEP_ICONS[step.number]}
                  </div>

                  <p className="sv4-phase">{step.phase}</p>
                  <h3 className="sv4-step-title">{step.title}</h3>
                  <p className="sv4-step-desc">{step.description}</p>

                  <div className="sv4-divider" />

                  {/* tool logos */}
                  <div className="sv4-tools">
                    {step.tools.map((tool) => {
                      const ti = TOOL_ICONS[tool.name];
                      const IconComp = ti?.icon;
                      return (
                        <span key={tool.name} className="sv4-tool">
                          {IconComp && <IconComp size={12} color={ti.color} style={{ flexShrink: 0 }} />}
                          {tool.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* result */}
                  <div className="sv4-result">
                    <div className="sv4-result-val">{step.result}</div>
                    <div className="sv4-result-lbl">{step.resultLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;