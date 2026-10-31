import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Check, ChevronDown,
  CircleHelp, ClipboardList, Database, Dna, FileChartColumnIncreasing, HeartPulse,
  Layers3, Menu, Microscope, Network, Play, ScanLine, ShieldCheck, Sparkles,
  Stethoscope, TrendingUp, Workflow, X, Zap, Gauge, Clock3, Users, FlaskConical,
  Server, Bot, ChartNoAxesCombined, Hospital, BookOpen, ExternalLink
} from 'lucide-react'
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
  BarChart, Bar, Cell
} from 'recharts'
import './style.css'

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: .65, ease: [.22, 1, .36, 1] } }
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: .11 } } }

function useReveal() {
  return { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: .16 }, variants: stagger }
}

const trendData = [
  { month: 'Jan', value: 48 }, { month: 'Feb', value: 46 }, { month: 'Mar', value: 49 },
  { month: 'Apr', value: 54 }, { month: 'May', value: 59 }, { month: 'Jun', value: 67 }
]
const barData = [
  { name: 'Stable', value: 58, fill: '#38c6a6' },
  { name: 'Review', value: 27, fill: '#eab45b' },
  { name: 'Priority', value: 15, fill: '#f07878' }
]
const patients = [
  { id: 'PM-1042', name: 'Member A', age: 52, status: 'Stable', color: 'green', trend: 'Consistent trend', value: 'No major change', history: [42,44,43,45,44,43] },
  { id: 'PM-1088', name: 'Member B', age: 61, status: 'Review', color: 'amber', trend: 'Changing trend', value: 'Clinical review suggested', history: [38,40,43,48,51,57] },
  { id: 'PM-1126', name: 'Member C', age: 67, status: 'Priority', color: 'red', trend: 'Concerning trend', value: 'Priority clinical review', history: [34,39,44,53,61,72] }
]

function Button({ children, href, onClick, secondary=false, className='' }) {
  return href
    ? <a className={`button ${secondary ? 'button-secondary' : ''} ${className}`} href={href}>{children}</a>
    : <button onClick={onClick} className={`button ${secondary ? 'button-secondary' : ''} ${className}`}>{children}</button>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Solution','#solution'],['Workflow','#workflow'],['Technology','#technology'],['Demo dashboard','#demo'],['Roadmap','#roadmap']]
  return <header className="header">
    <a className="brand" href="#top" aria-label="PredictMed home">
      <span className="brand-mark"><Activity size={19}/></span>
      <span>PREDICT<span className="brand-light">MED</span><small>BY DEPLOYFORCE</small></span>
    </a>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
      <Button href="#demo" className="nav-cta">Explore demo <ArrowUpRight size={15}/></Button>
    </nav>
    <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </header>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid"/>
    <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
    <div className="hero-content">
      <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="eyebrow"><span className="pulse-dot"/> VIRTUSA JATAYU SEASON 6 <span className="eyebrow-line"/></motion.div>
      <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.12}}>See deterioration<br/><em>before it escalates.</em></motion.h1>
      <motion.p initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.24}}>An Agentic AI concept for chronic kidney disease deterioration detection — helping health plans turn longitudinal member data into earlier, actionable care-team review.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.36}}>
        <Button href="#solution">Discover the solution <ArrowRight size={16}/></Button>
        <Button href="#demo" secondary><Play size={15}/> Explore interactive demo</Button>
      </motion.div>
      <motion.div className="hero-proof" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}>
        <span><ShieldCheck size={15}/> Human-in-the-loop care</span><span><Database size={15}/> Longitudinal data</span><span><BrainCircuit size={15}/> Agentic ML workflow</span>
      </motion.div>
    </div>
    <motion.div className="hero-visual" initial={{opacity:0,scale:.94,x:20}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1,delay:.3}}>
      <div className="visual-glow"/>
      <img src="/predictmed-overview.png" alt="Illustration of kidney care data flowing through AI analysis to patient risk insights"/>
      <div className="float-card float-top"><span className="float-icon"><HeartPulse size={17}/></span><div><b>Member insight</b><small>Longitudinal trend detected</small></div><span className="live-dot"/></div>
      <div className="float-card float-bottom"><span className="mini-bars"><i/><i/><i/><i/><i/></span><div><b>Care-team prioritization</b><small>Review signals, not diagnosis</small></div></div>
    </motion.div>
    <a className="scroll-cue" href="#context"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>
}

function SectionHeading({kicker,title,description,light=false}) {
  return <motion.div className={`section-heading ${light?'light':''}`} variants={reveal}>
    <div className="section-kicker">{kicker}</div>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </motion.div>
}

function Context() {
  const items = [
    {icon:Hospital,title:'Payer context',text:'Health plans work across member management, utilization, medical cost and quality programs.'},
    {icon:FileChartColumnIncreasing,title:'Scattered signals',text:'Relevant information can sit across lab results and other healthcare data over time.'},
    {icon:Clock3,title:'Timing matters',text:'Care teams need support identifying members who may need attention before conditions escalate.'}
  ]
  return <section className="section context-section" id="context">
    <div className="container">
      <motion.div {...useReveal()}>
        <SectionHeading kicker="THE OPPORTUNITY" title={<>A clearer view of<br/><em>changing kidney health.</em></>} description="PredictMed is designed around the payer-context use case supplied by Virtusa: detect chronic condition deterioration and help care teams prioritize members for intervention."/>
      </motion.div>
      <motion.div className="context-grid" {...useReveal()}>
        {items.map((it,i)=><motion.article className="context-card" variants={reveal} key={it.title}>
          <div className="icon-tile"><it.icon size={21}/></div><span className="card-index">0{i+1}</span><h3>{it.title}</h3><p>{it.text}</p>
        </motion.article>)}
      </motion.div>
      <div className="statement"><span className="statement-mark">“</span><p>Move from reviewing isolated values to understanding the <strong>direction of a member’s health journey.</strong></p></div>
    </div>
  </section>
}

function Solution() {
  const features = [
    {icon:Database,n:'01',title:'Longitudinal member timelines',text:'Organize available CKD-related lab results into a time-aware view of each member.'},
    {icon:TrendingUp,n:'02',title:'Lab trend feature engineering',text:'Derive meaningful trend features from historical lab values for model development.'},
    {icon:Bot,n:'03',title:'Agentic feature selection',text:'An agent coordinates the feature-selection workflow as part of the ML pipeline.'},
    {icon:ChartNoAxesCombined,n:'04',title:'Experiment tracking',text:'Use MLflow experiments to track model development and compare results.'}
  ]
  return <section className="section solution-section" id="solution">
    <div className="container">
      <motion.div {...useReveal()}><SectionHeading kicker="THE PREDICTMED APPROACH" title={<>A connected workflow.<br/><em>One clearer picture.</em></>} description="The concept combines payer-context data engineering with a coordinated Agentic AI and machine-learning development workflow."/></motion.div>
      <div className="solution-layout">
        <motion.div className="solution-image" initial={{opacity:0,x:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.8}}>
          <img src="/predictmed-workflow.png" alt="Illustration of health data, AI analysis, clinician review and monitoring"/>
          <div className="image-caption"><span className="pulse-dot"/> CONCEPTUAL SOLUTION VISUAL</div>
        </motion.div>
        <motion.div className="feature-list" {...useReveal()}>
          {features.map(f=><motion.div className="feature-row" variants={reveal} key={f.n}>
            <span className="feature-number">{f.n}</span><span className="feature-icon"><f.icon size={20}/></span>
            <div><h3>{f.title}</h3><p>{f.text}</p></div><ArrowUpRight className="feature-arrow" size={17}/>
          </motion.div>)}
        </motion.div>
      </div>
      <div className="note-strip"><ShieldCheck size={18}/><p><strong>Clinical responsibility stays with clinicians.</strong> PredictMed is intended to support prioritization and review, not to provide an autonomous diagnosis or treatment decision.</p></div>
    </div>
  </section>
}

function WorkflowSection() {
  const steps = [
    {n:'01',icon:FlaskConical,title:'Discover & assess',text:'Identify CKD data sources, define the cohort and target, and assess data quality.',tag:'Discovery'},
    {n:'02',icon:Database,title:'Build the data pipeline',text:'Use Kafka streaming and Airflow batch ingestion to prepare longitudinal member data.',tag:'Data engineering'},
    {n:'03',icon:Layers3,title:'Create member timelines',text:'Store longitudinal patient timelines with Apache Iceberg and engineer lab-value trends.',tag:'Feature foundation'},
    {n:'04',icon:BrainCircuit,title:'Coordinate Agentic AI',text:'Build the workflow pipeline and develop an autonomous feature-selection agent.',tag:'Agentic workflow'},
    {n:'05',icon:ChartNoAxesCombined,title:'Train & evaluate models',text:'Run and track machine-learning experiments through MLflow.',tag:'Model development'}
  ]
  return <section className="section workflow-section" id="workflow">
    <div className="container">
      <motion.div {...useReveal()}><SectionHeading kicker="HOW IT WORKS" title={<>From raw signals to<br/><em>model-ready insight.</em></>} description="A five-step view of the proposed implementation. The first three phases follow the supplied Virtusa brief; validation and rollout are subsequent proposed activities."/></motion.div>
      <div className="workflow-line"/>
      <motion.div className="steps-grid" {...useReveal()}>
        {steps.map(s=><motion.article className="step-card" variants={reveal} key={s.n}>
          <div className="step-top"><span>{s.n}</span><s.icon size={21}/></div><div className="step-dot"/>
          <h3>{s.title}</h3><p>{s.text}</p><small>{s.tag}</small>
        </motion.article>)}
      </motion.div>
      <div className="workflow-visual"><img src="/predictmed-overview.png" alt="Patient information and AI analysis overview"/></div>
    </div>
  </section>
}

function Technology() {
  const tech = [
    {name:'Apache Kafka',role:'Streaming ingestion',icon:Network,desc:'Bring incoming data into the processing workflow.'},
    {name:'Apache Airflow',role:'Batch orchestration',icon:Workflow,desc:'Coordinate scheduled data-ingestion workflows.'},
    {name:'Apache Iceberg',role:'Longitudinal data',icon:Database,desc:'Create and manage longitudinal member timelines.'},
    {name:'Agentic AI',role:'Feature selection agent',icon:Bot,desc:'Coordinate the autonomous feature-selection workflow.'},
    {name:'MLflow',role:'ML experiments',icon:ChartNoAxesCombined,desc:'Track model-training experiments and results.'}
  ]
  return <section className="section tech-section" id="technology">
    <div className="container">
      <motion.div {...useReveal()}><SectionHeading kicker="TECHNOLOGY FOUNDATION" title={<>Purposeful tools.<br/><em>Connected by design.</em></>} description="The technologies below are the ones explicitly named in the PredictMed use-case brief, mapped to their intended roles."/></motion.div>
      <motion.div className="tech-grid" {...useReveal()}>
        {tech.map(t=><motion.article className="tech-card" variants={reveal} key={t.name}>
          <div className="tech-icon"><t.icon size={22}/></div><span className="tech-role">{t.role}</span><h3>{t.name}</h3><p>{t.desc}</p>
        </motion.article>)}
      </motion.div>
      <div className="architecture">
        <div className="architecture-head"><div><span className="section-kicker">CONCEPTUAL ARCHITECTURE</span><h3>One connected data-to-model path</h3></div><span className="architecture-label">PROPOSED DESIGN</span></div>
        <div className="architecture-flow">
          {['Data sources','Ingestion','Member timeline','Agentic workflow','ML experiments','Care-team review'].map((x,i)=><React.Fragment key={x}>
            <div className="arch-node"><span>0{i+1}</span><b>{x}</b></div>{i!==5&&<ArrowRight className="arch-arrow" size={17}/>}
          </React.Fragment>)}
        </div>
      </div>
    </div>
  </section>
}

function Demo() {
  const [selected,setSelected] = useState(patients[1])
  const [tab,setTab] = useState('overview')
  const trend = selected.history.map((v,i)=>({month:['Jan','Feb','Mar','Apr','May','Jun'][i],value:v}))
  const statusClass = selected.color
  return <section className="section demo-section" id="demo">
    <div className="container">
      <motion.div {...useReveal()}><SectionHeading kicker="INTERACTIVE CONCEPT DEMO" title={<>Explore a member-level<br/><em>review experience.</em></>} description="Select an illustrative member profile to see how historical trends and review signals could be presented to a care team."/></motion.div>
      <motion.div className="dashboard" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}>
        <div className="dash-top">
          <div className="dash-brand"><span className="brand-mark"><Activity size={16}/></span><div><b>PredictMed</b><small>Care intelligence workspace</small></div></div>
          <div className="demo-label"><span className="pulse-dot"/> INTERACTIVE SAMPLE</div>
        </div>
        <div className="dash-body">
          <aside className="dash-sidebar">
            <span className="side-label">WORKSPACE</span>
            <button className={tab==='overview'?'side-active':''} onClick={()=>setTab('overview')}><Gauge size={16}/> Overview</button>
            <button className={tab==='members'?'side-active':''} onClick={()=>setTab('members')}><Users size={16}/> Member profiles</button>
            <button className={tab==='insights'?'side-active':''} onClick={()=>setTab('insights')}><TrendingUp size={16}/> Trend insights</button>
            <div className="sidebar-bottom"><ShieldCheck size={15}/> Human review required</div>
          </aside>
          <main className="dash-main">
            <div className="dash-title"><div><span className="side-label">POPULATION HEALTH / CKD</span><h3>{tab==='members'?'Member profiles':tab==='insights'?'Trend insights':'Overview'}</h3></div><span className="sample-pill">Illustrative data</span></div>
            {tab==='overview'&&<>
              <div className="metric-grid">
                <div className="metric"><span>Sample members</span><b>100</b><small>Illustrative cohort</small></div>
                <div className="metric"><span>Stable signal</span><b>58%</b><small className="green-text">No major trend change</small></div>
                <div className="metric"><span>Review signal</span><b>27%</b><small className="amber-text">Further review suggested</small></div>
                <div className="metric"><span>Priority signal</span><b>15%</b><small className="red-text">Priority review suggested</small></div>
              </div>
              <div className="dash-panels">
                <div className="chart-panel"><div className="panel-heading"><div><b>Illustrative lab trend</b><small>Selected member · sample trend index</small></div><span className={`status-pill ${statusClass}`}>{selected.status}</span></div>
                  <div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trend} margin={{top:12,right:8,left:-20,bottom:0}}><defs><linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#36bda4" stopOpacity={.27}/><stop offset="100%" stopColor="#36bda4" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 4" vertical={false} stroke="#e8eff1"/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill:'#84949b',fontSize:11}}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#84949b',fontSize:10}}/><Tooltip contentStyle={{border:'1px solid #e2ebed',borderRadius:12,fontSize:12}}/><Area type="monotone" dataKey="value" stroke="#2aa88f" strokeWidth={2.5} fill="url(#trendFill)"/></AreaChart></ResponsiveContainer></div>
                  <div className="chart-foot"><span>Jan – Jun sample period</span><span>Not a clinical lab value</span></div>
                </div>
                <div className="member-panel"><b>Member review</b><div className="member-avatar">{selected.name.slice(-1)}</div><h4>{selected.name}</h4><small>{selected.id} · Age {selected.age}</small><span className={`status-pill ${statusClass}`}>{selected.status} signal</span><p>{selected.value}</p><div className="review-note"><CircleHelp size={14}/> {selected.trend}. Care-team evaluation is required.</div></div>
              </div>
            </>}
            {tab==='members'&&<div className="member-table"><div className="table-head"><span>MEMBER</span><span>PROFILE</span><span>TREND</span><span>SIGNAL</span></div>{patients.map(p=><button className={`member-row ${selected.id===p.id?'row-selected':''}`} onClick={()=>setSelected(p)} key={p.id}><span><b>{p.name}</b><small>{p.id}</small></span><span>Age {p.age}</span><span>{p.trend}</span><span className={`status-pill ${p.color}`}>{p.status}</span></button>)}<p className="table-hint">Select a member to update the overview chart.</p></div>}
            {tab==='insights'&&<div className="insights-layout"><div className="chart-panel"><div className="panel-heading"><div><b>Illustrative signal distribution</b><small>Example cohort only</small></div></div><div className="bar-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={barData} margin={{top:15,right:15,left:-18,bottom:0}}><CartesianGrid strokeDasharray="3 4" vertical={false} stroke="#e8eff1"/><XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#84949b',fontSize:11}}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#84949b',fontSize:10}}/><Tooltip/><Bar dataKey="value" radius={[7,7,0,0]}>{barData.map((d,i)=><Cell key={i} fill={d.fill}/>)}</Bar></BarChart></ResponsiveContainer></div></div><div className="insight-copy"><h4>What this view demonstrates</h4><p>A care-team workspace can summarize members by review signal and allow users to inspect each member's longitudinal trend.</p><p className="muted">The percentages and profiles are fictional placeholders to demonstrate the interface only.</p></div></div>}
          </main>
        </div>
        <div className="dash-disclaimer"><ShieldCheck size={14}/> Demo only · Synthetic illustrative data · Not validated clinical predictions or medical advice</div>
      </motion.div>
    </div>
  </section>
}

function Roadmap() {
  const phases = [
    {n:'01',time:'PHASE 1',title:'Discovery & data assessment',text:'Identify CKD data sources (lab results), define the cohort and target, and assess data quality.',status:'Specified in brief'},
    {n:'02',time:'PHASE 2',title:'Pipeline & feature store',text:'Build Kafka streaming and Airflow batch ingestion, create Apache Iceberg timelines, and engineer lab-value trends.',status:'Specified in brief'},
    {n:'03',time:'PHASE 3',title:'Agentic AI development',text:'Build the workflow pipeline, develop an autonomous feature-selection agent, and train models through MLflow experiments.',status:'Specified in brief'},
    {n:'04',time:'NEXT STEP',title:'Validation & monitoring',text:'Proposed: evaluate model performance with domain experts, review false positives and negatives, and establish monitoring.',status:'Proposed extension'},
    {n:'05',time:'NEXT STEP',title:'Controlled deployment',text:'Proposed: pilot with a health-plan care team, gather feedback and refine the workflow before broader rollout.',status:'Proposed extension'}
  ]
  return <section className="section roadmap-section" id="roadmap">
    <div className="container">
      <motion.div {...useReveal()}><SectionHeading kicker="FUTURE READINESS" title={<>Build carefully.<br/><em>Scale responsibly.</em></>} description="A phased roadmap keeps the initial scope aligned with Virtusa's brief while identifying sensible next steps beyond the stated phases."/></motion.div>
      <div className="roadmap-list">
        {phases.map((p,i)=><motion.div className="roadmap-item" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} key={p.n}>
          <div className="roadmap-marker">{p.n}</div><div className="roadmap-content"><div className="roadmap-meta"><span>{p.time}</span><small>{p.status}</small></div><h3>{p.title}</h3><p>{p.text}</p></div>
          {i!==phases.length-1&&<div className="roadmap-connector"/>}
        </motion.div>)}
      </div>
    </div>
  </section>
}

function Impact() {
  const items = [
    {icon:Clock3,title:'Earlier visibility',text:'Surface changing trends sooner for care-team attention.'},
    {icon:Users,title:'Prioritized outreach',text:'Help care teams focus review effort where it may be needed.'},
    {icon:ChartNoAxesCombined,title:'Payer program support',text:'Support member management, utilization, cost and quality workflows.'}
  ]
  return <section className="impact-section">
    <div className="container impact-inner">
      <motion.div {...useReveal()}><SectionHeading light kicker="INTENDED VALUE" title={<>Make the next action<br/><em>more informed.</em></>} description="PredictMed aims to provide health plans with a structured way to identify potential deterioration signals and support human-led care prioritization."/></motion.div>
      <motion.div className="impact-cards" {...useReveal()}>{items.map(it=><motion.div variants={reveal} className="impact-card" key={it.title}><it.icon size={22}/><h3>{it.title}</h3><p>{it.text}</p></motion.div>)}</motion.div>
    </div>
  </section>
}


function Research() {
  const evidence = [
    {tag:'CLINICAL GUIDANCE',title:'Track kidney function and albuminuria together',text:'KDIGO 2024 recommends assessing both GFR and albuminuria in people with CKD, with more frequent monitoring for people at higher risk when results may affect care.',source:'KDIGO 2024 guideline',url:'https://kdigo.org/guidelines/ckd-evaluation-and-management/'},
    {tag:'CLINICAL DATA',title:'Build a timeline, not a one-off snapshot',text:'KDIGO notes that CKD chronicity is established over time and cautions against assuming chronicity from one abnormal eGFR or ACR result. This supports a longitudinal-data design.',source:'KDIGO 2024 executive summary',url:'https://doi.org/10.1016/j.kint.2023.10.016'},
    {tag:'ML RESEARCH',title:'Promising models still need external validation',text:'A 2026 scoping review found ML approaches including gradient boosting, random forests, decision trees and regression. It also highlighted limited external validation, explainability and clinical integration as gaps.',source:'Kidney Medicine · 2026 scoping review',url:'https://www.sciencedirect.com/science/article/pii/S259005952600275X'},
    {tag:'RESPONSIBLE AI',title:'Keep people in control of clinical decisions',text:'WHO’s 2026 guidance emphasizes ethics review and oversight for AI-related health research, including attention to fairness, equity and protection of people’s rights.',source:'WHO · 2026 guidance',url:'https://www.who.int/publications/i/item/9789240124073'}
  ]
  const design = [
    {n:'01',title:'Data-quality agent',text:'Checks missingness, inconsistent units, duplicate records and time ordering before feature creation.'},
    {n:'02',title:'Feature-selection agent',text:'Proposes relevant longitudinal features for review and records why each feature was selected.'},
    {n:'03',title:'Experiment-orchestration agent',text:'Coordinates reproducible training runs and logs model, data and metric versions in MLflow.'},
    {n:'04',title:'Monitoring & drift agent',text:'Proposed extension: watches input distributions and model performance, then flags when human review or retraining assessment is needed.'}
  ]
  return <section className="section research-section" id="research">
    <div className="container">
      <motion.div {...useReveal()}><SectionHeading kicker="RESEARCH-BACKED DESIGN" title={<>Grounded in evidence.<br/><em>Designed for responsible use.</em></>} description="We reviewed current kidney-disease guidance and ML literature to strengthen the original PredictMed concept. These research insights inform the design; they are not claims that our prototype is clinically validated."/></motion.div>
      <div className="research-callout"><div className="research-callout-icon"><Microscope size={23}/></div><div><b>What research changes in our design</b><p>Prioritize longitudinal eGFR and urine albumin-to-creatinine ratio (UACR) trends, avoid conclusions from a single abnormal result, compare candidate ML models, and require external validation plus clinician oversight before any real-world use.</p></div></div>
      <motion.div className="research-grid" {...useReveal()}>
        {evidence.map((e,i)=><motion.article variants={reveal} className="research-card" key={e.title}>
          <span className="research-tag">{e.tag}</span><span className="research-index">0{i+1}</span><h3>{e.title}</h3><p>{e.text}</p><a href={e.url} target="_blank" rel="noreferrer">{e.source} <ExternalLink size={13}/></a>
        </motion.article>)}
      </motion.div>
      <div className="agent-design">
        <div className="agent-heading"><div><span className="section-kicker">PROPOSED AGENT DESIGN</span><h3>Small, focused agents. One governed workflow.</h3></div><span className="architecture-label">DESIGN EXTENSION</span></div>
        <div className="agent-grid">{design.map(a=><div className="agent-card" key={a.n}><span>{a.n}</span><h4>{a.title}</h4><p>{a.text}</p></div>)}</div>
      </div>
      <div className="model-ideas">
        <div><span className="section-kicker">MODEL DEVELOPMENT IDEA</span><h3>Start with baselines. Earn complexity.</h3><p>Evaluate interpretable baselines such as logistic regression alongside tree-based candidates such as Random Forest and gradient boosting. Compare them using time-aware validation, calibration, sensitivity/recall, precision and subgroup performance. Select only after testing on data not used for training.</p></div>
        <div className="model-pills"><span>Logistic Regression</span><span>Random Forest</span><span>Gradient Boosting</span><span>Calibration</span><span>External validation</span><span>Explainability</span></div>
      </div>
      <p className="research-footnote">Research-informed suggestions are proposed design choices, not part of the supplied Virtusa specification unless explicitly stated there. Clinical thresholds and model outputs must be determined and validated by qualified domain experts using appropriate local data.</p>
    </div>
  </section>
}

function FAQ() {
  const [active,setActive] = useState(0)
  const qs = [
    ['Is PredictMed a diagnostic tool?','No. The concept is intended to identify potential deterioration signals and support care-team prioritization. Diagnosis and treatment decisions remain with qualified healthcare professionals.'],
    ['Does the demo use real patient data?','No. All member profiles, trend values and dashboard percentages are fictional illustrative data created only to explain the proposed experience.'],
    ['Which parts are specified by Virtusa?','The use case specifies CKD deterioration detection from a payer context and implementation phases covering data assessment, Kafka/Airflow ingestion, Apache Iceberg timelines, lab trend engineering, an Agentic AI workflow, feature selection and MLflow experiments.'],
    ['Can this be extended to other chronic conditions?','Potentially, subject to new condition-specific data sources, clinical definitions, feature engineering, model validation and governance. This would be a future extension, not part of the initial CKD scope.']
  ]
  return <section className="section faq-section">
    <div className="container faq-grid">
      <motion.div {...useReveal()}><SectionHeading kicker="CLARITY & TRUST" title={<>Questions worth<br/><em>answering.</em></>} description="A few important boundaries around the concept and demonstration."/></motion.div>
      <div className="faq-list">{qs.map(([q,a],i)=><div className={`faq-item ${active===i?'faq-open':''}`} key={q}><button onClick={()=>setActive(active===i?-1:i)}><span>{q}</span><ChevronDown size={18}/></button><AnimatePresence initial={false}>{active===i&&<motion.div className="faq-answer" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.25}}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div>
    </div>
  </section>
}

function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer-main"><div><a className="brand footer-brand" href="#top"><span className="brand-mark"><Activity size={19}/></span><span>PREDICT<span className="brand-light">MED</span><small>BY DEPLOYFORCE</small></span></a><p>Agentic AI for Chronic Kidney Disease deterioration detection.</p></div><div className="footer-links"><a href="#solution">Solution</a><a href="#workflow">Workflow</a><a href="#technology">Technology</a><a href="#research">Research</a><a href="#demo">Demo</a><a href="#roadmap">Roadmap</a></div><a className="back-top" href="#top">Back to top <ArrowUpRight size={15}/></a></div>
      <div className="footer-bottom"><span>© 2026 DeployForce · Virtusa Jatayu Season 6 · Use Case 2</span><span>Concept presentation website</span></div>
    </div>
  </footer>
}

function App() {
  return <>
    <Header/>
    <main><Hero/><Context/><Solution/><WorkflowSection/><Technology/><Research/><Demo/><Roadmap/><Impact/><FAQ/></main>
    <Footer/>
    <a className="floating-top" href="#top" aria-label="Back to top"><ArrowUpRight size={18}/></a>
  </>
}

createRoot(document.getElementById('root')).render(<App/>)
