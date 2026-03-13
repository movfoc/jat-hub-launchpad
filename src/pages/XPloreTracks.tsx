import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft, ChevronDown, ArrowRight, CalendarClock,
  Lightbulb, Target, Settings, Sparkles, BarChart,
  Rocket, CheckCircle2, Users, Building2, Globe,
  Crosshair, Eye, CheckSquare, X
} from "lucide-react";

/* ─── Data ─── */

const universalDeliverables = [
  { title: "1. Prototype", desc: "Executable build (e.g., Unity, WebGL), Code repo with run instructions, or Online link. Must demonstrate key interactions." },
  { title: "2. Pitch Deck", desc: "Structured presentation (PDF/PPT/PPTX) covering problem insights, concept overview, user journey, and feasibility." },
  { title: "3. Demo Video", desc: "Short video (MP4, 2-5 mins) showcasing the core experience, main flow, and value proposition." },
  { title: "4. Documentation", desc: "Written explanation (PDF/DOCX, 500-800 words) supporting design rationale, technical details, and potential scalability." },
];

interface Challenge {
  title: string;
  statement: string;
  brandOverview: string;
  context: string;
  coreChallenge: string;
  lookingFor: string;
}

interface TrackData {
  month: string;
  title: string;
  subtitle: string;
  bg: string;
  status: { name: string; count: number }[];
  challenges: Challenge[];
}

const trackData: Record<string, TrackData> = {
  april: {
    month: "April Track",
    title: "Immersive Experience",
    subtitle: "AR/VR & Spatial Retail",
    bg: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    status: [
      { name: "Challenge A: Virtual Try-On", count: 12 },
      { name: "Challenge B: Spatial Pop-up", count: 8 },
    ],
    challenges: [
      {
        title: "Challenge A: Virtual Try-On Revolution",
        statement: "Design a frictionless AR try-on experience that dramatically reduces return rates for fashion brands.",
        brandOverview: "A leading global fast-fashion enterprise aiming to drastically enhance digital shopping experiences while simultaneously reducing the massive logistics costs and environmental footprint associated with high return volumes across European and North American markets.",
        context: "Gen Z shops heavily online but consistently struggles with sizing confidence. This leads to the 'wardrobing' effect and an industry-wide 30% return rate. Current AR filters often feel gimmicky and lack the physical accuracy needed for genuine purchasing decisions.",
        coreChallenge: "How can we architect a highly accurate, socially shareable AR try-on directly within the mobile browser (WebAR) that builds immediate purchase confidence without requiring users to download a heavy, standalone application?",
        lookingFor: "A robust Web-based AR prototype focusing on seamless UX, integrated social sharing mechanics, and high-fidelity 3D rendering of clothing items that accurately reflect fabric draping, lighting, and sizing on diverse body types.",
      },
      {
        title: "Challenge B: The Spatial Pop-up Store",
        statement: "Build a 3D web-based pop-up environment that exponentially increases average session duration.",
        brandOverview: "An innovative consumer electronics brand launching a highly anticipated flagship device, looking to completely break away from standard, boring 2D landing pages and create a digital 'destination'.",
        context: "Traditional 2D product landing pages currently suffer from soaring bounce rates (often >70%) and remarkably low engagement. They fundamentally fail to convey the premium feel, scale, and intricate details of high-end consumer technology products.",
        coreChallenge: "How do we design and engineer a spatial 3D web experience that authentically replicates the feeling of stepping into an exclusive, interactive, and highly curated pop-up store, fully accessible and performant from any standard smartphone?",
        lookingFor: "A 3D immersive room using WebGL/Three.js or similar frameworks. It must include hidden easter eggs to drive exploration, interactive 360-degree product demos, spatial audio cues, and seamless e-commerce integration.",
      },
    ],
  },
  may: {
    month: "May Track",
    title: "AI-Generated Content",
    subtitle: "Hyper-Personalized Ads",
    bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    status: [{ name: "Challenge A: Rapid A/B Video", count: 16 }],
    challenges: [
      {
        title: "Challenge A: Rapid A/B Video Generation",
        statement: "Create an automated AI workflow pipeline to generate 50 localized short-form video variations.",
        brandOverview: "A global beverage brand rolling out a massive new summer drink campaign simultaneously across 5 radically different European markets, requiring hyper-localized messaging.",
        context: "Ad fatigue on platforms like TikTok and Instagram Reels happens incredibly fast—often within 48 hours. To maintain a positive ROAS, brands require a massive, continuous volume of localized, trend-reactive content. Traditional agency production timelines are too slow and expensive.",
        coreChallenge: "Construct a generative AI workflow to scale video production autonomously. The system must seamlessly swap out languages, AI voiceovers, visual hooks, and cultural references while maintaining strict adherence to corporate brand safety and visual identity guidelines.",
        lookingFor: "A highly scalable AI generation framework leveraging chained tools (e.g., Midjourney + Runway Gen-2 + ElevenLabs + CapCut templates) to output variations systematically based on a single core creative brief.",
      },
    ],
  },
  june: {
    month: "June Track",
    title: "Mini-game Development",
    subtitle: "Gamified Reward Loops",
    bg: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop",
    status: [{ name: "Challenge A: Loyalty Game", count: 18 }],
    challenges: [
      {
        title: "Challenge A: The Daily Loyalty Check-in",
        statement: "Develop a highly addictive HTML5 mini-game integrated directly into a major retailer's existing loyalty app.",
        brandOverview: "A multinational cosmetics and beauty retailer desperately looking to boost Gen Z loyalty app usage beyond purely transactional, point-of-sale interactions.",
        context: "Currently, users download the brand's app but only open it at the physical checkout counter. Traditional points-based loyalty systems feel outdated and lack the instant gratification demanded by modern consumers.",
        coreChallenge: "Design an engaging, daily 60-second game loop that rewards users with micro-points or digital cosmetics. The goal is to create a habit-forming mechanic that keeps them actively engaged with the brand's digital ecosystem every single day.",
        lookingFor: "A highly addictive, simple HTML5 game mechanic (resembling popular hyper-casual mobile games) that is securely tied to a virtual economy and backend database.",
      },
    ],
  },
};

const trackKeys = ["april", "may", "june"] as const;

/* ─── Sub-components ─── */

function ChallengeAccordion({ challenge, index, teamCount }: { challenge: Challenge; index: number; teamCount: number }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(new Array(universalDeliverables.length).fill(false));

  const toggleCheck = (i: number) => setChecked(prev => { const n = [...prev]; n[i] = !n[i]; return n; });

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}>
      <div className="p-6 md:p-8 cursor-pointer flex justify-between items-start md:items-center" onClick={() => setOpen(o => !o)}>
        <div className="pr-6 w-full">
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{challenge.title}</h4>
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">{challenge.statement}</p>
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ef50] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ef50]" />
            </span>
            {teamCount} Teams Registered
          </div>
        </div>
        <button className="shrink-0 w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
          <ChevronDown className={`w-5 h-5 text-[#c8ef50] transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}>
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8 pt-6 mt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-[11px] text-[#c8ef50] uppercase font-bold tracking-widest mb-3 flex items-center gap-2"><Building2 className="w-4 h-4" /> Brand Overview & Mission</h5>
              <p className="text-sm text-white/80 leading-relaxed">{challenge.brandOverview}</p>
            </div>
            <div>
              <h5 className="text-[11px] text-[#c8ef50] uppercase font-bold tracking-widest mb-3 flex items-center gap-2"><Globe className="w-4 h-4" /> Context & Industry Insight</h5>
              <p className="text-sm text-white/80 leading-relaxed">{challenge.context}</p>
            </div>
            <div className="md:col-span-2 bg-white/5 p-6 rounded-2xl border border-white/5">
              <h5 className="text-[11px] text-[#c8ef50] uppercase font-bold tracking-widest mb-3 flex items-center gap-2"><Crosshair className="w-4 h-4" /> The Core Challenge</h5>
              <p className="text-base text-white leading-relaxed font-medium">{challenge.coreChallenge}</p>
            </div>
            <div className="md:col-span-2">
              <h5 className="text-[11px] text-[#c8ef50] uppercase font-bold tracking-widest mb-3 flex items-center gap-2"><Eye className="w-4 h-4" /> What We Are Looking For</h5>
              <p className="text-sm text-white/80 leading-relaxed border-l-2 border-[#c8ef50]/50 pl-4 py-1">{challenge.lookingFor}</p>
            </div>
            <div className="md:col-span-2 bg-black/30 p-6 rounded-xl border border-white/5">
              <h5 className="text-[11px] text-[#c8ef50] uppercase font-bold tracking-widest mb-6 flex items-center gap-2"><CheckSquare className="w-4 h-4" /> Submission Checklist</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {universalDeliverables.map((d, i) => (
                  <label key={i} className="flex items-start gap-4 cursor-pointer group/item relative">
                    <input type="checkbox" className="peer sr-only" checked={checked[i]} onChange={() => toggleCheck(i)} />
                    <div className="mt-0.5 w-5 h-5 rounded border-2 border-white/30 peer-checked:border-[#c8ef50] peer-checked:bg-[#c8ef50] transition-all duration-300 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`w-3 h-3 transition-opacity duration-300 ${checked[i] ? "opacity-100" : "opacity-0"}`}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className={`transition-all duration-300 select-none ${checked[i] ? "opacity-40 line-through" : ""}`}>
                      <span className="block text-sm font-bold text-white mb-1 group-hover/item:text-[#c8ef50] transition-colors">{d.title}</span>
                      <span className="block text-xs text-white/60 leading-relaxed">{d.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

const XPloreTracks = () => {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  // Cursor effect
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const active = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!active.current) {
        dotRef.current?.classList.remove("opacity-0");
        glowRef.current?.classList.remove("opacity-0");
        active.current = true;
      }
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        dotRef.current?.classList.add("opacity-0");
        glowRef.current?.classList.add("opacity-0");
        active.current = false;
      }
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onOut);

    let raf: number;
    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.05;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.05;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      if (glowRef.current) glowRef.current.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => { document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseout", onOut); cancelAnimationFrame(raf); };
  }, []);

  const openTrack = useCallback((key: string) => {
    setActiveTrack(key);
    setTimeout(() => setOverlayVisible(true), 10);
  }, []);

  const closeTrack = useCallback(() => {
    setOverlayVisible(false);
    setTimeout(() => setActiveTrack(null), 600);
  }, []);

  const data = activeTrack ? trackData[activeTrack] : null;

  const panels = [
    { key: "april", label: "April", title: "Immersive Experience", sub: "AR/VR & Spatial Retail", bg: trackData.april.bg },
    { key: "may", label: "May", title: "AI-Generated Content", sub: "Hyper-Personalized Ads", bg: trackData.may.bg },
    { key: "june", label: "June", title: "Mini-game Development", sub: "Gamified Reward Loops", bg: trackData.june.bg },
  ];

  return (
    <div className="bg-black text-white font-sans antialiased selection:bg-[#c8ef50] selection:text-black min-h-screen overflow-hidden relative">
      {/* Cursor effects (desktop only) */}
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 bg-[#c8ef50] rounded-full z-[200] mix-blend-screen shadow-[0_0_15px_#c8ef50] opacity-0 transition-opacity duration-500 hidden md:block" />
      <div ref={glowRef} className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full z-[190] mix-blend-screen opacity-0 transition-opacity duration-500 hidden md:block" style={{ background: "radial-gradient(circle, rgba(200,239,80,0.12) 0%, rgba(200,239,80,0) 60%)" }} />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-40 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="w-full px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/xplore" className="flex items-center gap-2 text-white font-semibold tracking-tight">X-PLORE</Link>
          <Link to="/xplore" className="text-xs font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </nav>

      {/* Main grid */}
      <section className={`w-full min-h-screen grid grid-cols-1 md:grid-cols-3 bg-black pt-16 md:pt-0 md:absolute md:inset-0 z-10 transition-opacity duration-700 ${activeTrack ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {panels.map((p) => (
          <div key={p.key} className={`relative w-full h-[calc(33.33vh-1px)] md:h-full group overflow-hidden flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 ${p.key === "april" ? "cursor-pointer" : "cursor-default"}`} onClick={() => p.key === "april" ? openTrack(p.key) : null}>
            <img src={p.bg} className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 z-0" alt={p.label} />
            <div className="absolute inset-0 bg-black/60 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:bg-white/80 md:group-hover:backdrop-blur-md z-0" />
            <div className="relative z-10 text-white transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:text-black flex flex-col items-center text-center px-6">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase border border-current px-3 py-1 rounded-full mb-3 md:mb-6 opacity-80">{p.label}</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-1.5 md:mb-3">{p.title}</h2>
              <p className="text-sm md:text-base lg:text-lg font-light opacity-80">{p.sub}</p>
              {p.key === "april" ? (
                <span className="mt-4 md:hidden text-xs font-medium flex items-center gap-1.5 bg-white/10 text-white px-4 py-2 rounded-full">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              ) : (
                <span className="mt-4 md:hidden text-xs font-medium flex items-center gap-1.5 bg-white/10 text-white/50 px-4 py-2 rounded-full">
                  Coming soon
                </span>
              )}
              <div className="hidden md:block overflow-hidden mt-0 h-0 opacity-0 group-hover:mt-8 group-hover:h-10 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                {p.key === "april" ? (
                  <span className="text-sm font-medium flex items-center gap-1.5 bg-black text-white px-5 py-2.5 rounded-full">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="text-sm font-medium flex items-center gap-1.5 bg-white/20 text-white/70 px-5 py-2.5 rounded-full cursor-default">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Detail overlay */}
      {activeTrack && data && (
        <section className={`fixed inset-0 z-50 flex flex-col transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${overlayVisible ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
          <img src={data.bg} className="absolute inset-0 w-full h-full object-cover z-0" alt="Track Background" />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl z-0" />

          {/* Top bar */}
          <div className="relative z-10 w-full px-6 md:px-10 h-20 flex items-center justify-between border-b border-white/10 shrink-0 pt-4">
            <div className="flex items-center gap-3">
              <button onClick={closeTrack} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">{data.month}</span>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="relative z-10 flex-1 overflow-y-auto w-full scroll-smooth pb-32">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 md:pt-20">
              {/* Title */}
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">{data.title}</h1>
                <p className="text-xl md:text-2xl font-light text-white/70">{data.subtitle}</p>
              </div>

              {/* Sprint Timeline */}
              <div className="mb-20 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <CalendarClock className="w-5 h-5 text-[#c8ef50]" />
                  <h3 className="text-xl font-semibold tracking-tight">Sprint Timeline</h3>
                </div>
                <div className="p-4 sm:p-6 md:p-8 rounded-3xl" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="relative flex flex-col md:flex-row justify-between w-full gap-6 md:gap-0">
                    {/* Horizontal line for desktop */}
                    <div className="hidden md:block absolute top-[15px] left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-white/10 z-0" />
                    {/* Vertical line for mobile */}
                    <div className="md:hidden absolute top-4 bottom-4 left-[15px] w-px bg-white/10 z-0" />
                    {[
                      { label: "Pre-Sprint", desc: "Global Team Formation & Registration", tag: "Online", tagClass: "bg-white/5 text-white/60 border-white/10" },
                      { label: "Week 1", desc: "Challenge Reveal & Hybrid Workshops", tag: "Hybrid", tagClass: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
                      { label: "Week 2-3", desc: "Intensive Prototype Development Sprint", tag: "Online", tagClass: "bg-white/5 text-white/60 border-white/10" },
                      { label: "Week 4", desc: "Screening Feedback & Live Final Pitch", tag: "On-site", tagClass: "bg-[#c8ef50]/10 text-[#c8ef50] border-[#c8ef50]/20" },
                    ].map((node, i) => (
                      <div key={i} className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full md:w-1/4 group/node gap-4 md:gap-0">
                        <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20 group-hover/node:border-[#c8ef50] transition-colors flex items-center justify-center shrink-0 md:mb-3">
                          <div className="w-2 h-2 rounded-full bg-white/50 group-hover/node:bg-[#c8ef50] transition-colors" />
                        </div>
                        <div className="flex flex-col md:items-center">
                          <h5 className="font-bold text-white text-sm mb-0.5 md:mb-1">{node.label}</h5>
                          <p className="text-xs text-white/60">{node.desc}</p>
                          <span className={`mt-2 md:mt-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border w-fit md:mx-auto ${node.tagClass}`}>{node.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Track Challenges */}
              <div className="mb-24 max-w-4xl mx-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                  <h3 className="text-2xl font-semibold tracking-tight">Track Challenges</h3>
                  {data.month === "April Track" ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/60 font-medium text-xs sm:text-sm cursor-not-allowed">
                      <Users className="w-4 h-4" /> Coming Soon...
                    </span>
                  ) : (
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-colors text-xs sm:text-sm">
                      <Users className="w-4 h-4" /> Form a Team
                    </button>
                  )}
                </div>
                {data.month === "April Track" ? (
                  <div className="text-center py-16 text-white/50">
                    <p className="text-lg">Coming Soon...</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {data.challenges.map((c, i) => (
                      <ChallengeAccordion key={i} challenge={c} index={i} teamCount={data.status[i]?.count ?? 0} />
                    ))}
                  </div>
                )}
              </div>

              {/* Scoring Criteria */}
              <div className="mb-24 max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold tracking-tight border-b border-white/10 pb-4 mb-8">Scoring Criteria</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    { icon: Lightbulb, label: "Insight", pct: "30%", desc: "Unearths a hidden cultural truth or behavioral nuance. Data-backed friction points rather than assumptions." },
                    { icon: Target, label: "Strategy", pct: "30%", desc: "A commercially sharp, scalable idea. A flawless logical connection between insight, action, and brand KPIs." },
                    { icon: Settings, label: "Feasibility", pct: "20%", desc: "Launch-ready 'Plug & Play' solution. Prototypes function smoothly within corporate budget and timeline constraints." },
                    { icon: Sparkles, label: "Creativity", pct: "20%", desc: "A disruptive 'scroll-stopper.' Visual hooks or mechanics that cut through modern digital noise." },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl relative overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="absolute top-0 right-0 bg-[#c8ef50]/10 text-[#c8ef50] text-xs font-bold px-3 py-1 rounded-bl-lg">{item.pct}</div>
                      <item.icon className="w-6 h-6 text-[#c8ef50] mb-4" />
                      <h4 className="font-bold mb-2">{item.label}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Grading scale */}
                <div className="p-8 rounded-3xl" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2"><BarChart className="w-5 h-5 text-[#c8ef50]" /> Grading Scale Details</h4>
                  <div className="space-y-4">
                    {[
                      { range: "90-100", label: "Exceptional", color: "text-[#c8ef50]", desc: "Transformative, launch-ready, and sets a new industry standard." },
                      { range: "80-89", label: "High Quality", color: "text-white", desc: "Compelling, data-backed, and technically sound." },
                      { range: "70-79", label: "Competent", color: "text-white/80", desc: "Logical and functional but lacks a unique competitive 'hook.'" },
                      { range: "60-69", label: "Basic", color: "text-white/60", desc: "Surface-level assumptions; tactics poorly linked to objectives." },
                      { range: "< 60", label: "Insufficient", color: "text-red-400/90", desc: "Flawed logic or technically broken prototypes." },
                    ].map((g, i) => (
                      <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 ${i < 4 ? "border-b border-white/5 pb-4" : ""}`}>
                        <div className="flex-shrink-0 w-32">
                          <span className={`${g.color} font-mono font-bold text-lg`}>{g.range}</span>
                          <span className={`block text-xs ${g.color === "text-red-400/90" ? "text-red-400/60" : "text-white/50"} uppercase tracking-wider mt-0.5`}>{g.label}</span>
                        </div>
                        <p className="text-sm text-white/80">{g.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Participate & Team Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-8 rounded-3xl relative overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white"><Rocket className="w-5 h-5 text-[#c8ef50]" /> Why Participate</h4>
                    <ul className="space-y-4 text-sm text-white/70 leading-relaxed">
                      {[
                        { bold: "Real-World Impact:", text: "Build functional solutions that solve actual commercial friction points for global enterprises." },
                        { bold: "Elite Brand Mentorship:", text: "Receive high-level guidance and early feedback directly from brand managers and industry experts." },
                        { bold: "Fast-Track Your Career:", text: "Pitch your finalized solutions to active CMOs and agency leads to unlock direct hiring pipelines." },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#c8ef50] shrink-0 mt-0.5" />
                          <span><strong className="text-white">{item.bold}</strong> {item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 rounded-3xl relative overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white"><Users className="w-5 h-5 text-[#c8ef50]" /> Team Requirements</h4>
                    <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                      <div className="bg-black/30 p-5 rounded-xl border border-white/5 hover:border-[#c8ef50]/30 transition-colors">
                        <span className="block font-extrabold text-[#c8ef50] text-base mb-1 tracking-tight">Global Team Formation</span>
                        Open to university students and digital-native talents worldwide. We encourage you to break geographical boundaries and collaborate internationally!
                      </div>
                      <div className="bg-black/30 p-5 rounded-xl border border-white/5 hover:border-[#c8ef50]/30 transition-colors">
                        <span className="block font-extrabold text-[#c8ef50] text-base mb-1 tracking-tight">Required Team Size: 3 - 5 Members</span>
                        To master the friction of real-world teamwork, we highly advise forming <strong>cross-disciplinary teams</strong> uniting Creative Strategists, Tech Developers, and UI/UX Designers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default XPloreTracks;
