import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Lightbulb, Sparkles, Zap, Brain, Target, Layers,
  Telescope, FlaskConical, Rocket, Briefcase, GraduationCap,
  Check, FileCheck2, Search, Users2, Megaphone,
  Gamepad2, Bot, Glasses, BarChart2, PenTool, Palette,
  CheckCircle, Calendar, MapPin, ArrowRight
} from "lucide-react";

const XPlore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const revealRefs = useRef<HTMLElement[]>([]);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Cursor light trail effect
  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow || !window.matchMedia("(min-width: 768px)").matches) return;

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let dotX = mouseX, dotY = mouseY, glowX = mouseX, glowY = mouseY;
    let active = false;

    const onMove = (e: MouseEvent) => {
      if (!active) { dot.classList.remove("opacity-0"); glow.classList.remove("opacity-0"); active = true; }
      mouseX = e.clientX; mouseY = e.clientY;
    };
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) { dot.classList.add("opacity-0"); glow.classList.add("opacity-0"); active = false; }
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onOut);

    let raf: number;
    const animate = () => {
      dotX += (mouseX - dotX) * 0.2; dotY += (mouseY - dotY) * 0.2;
      glowX += (mouseX - glowX) * 0.05; glowY += (mouseY - glowY) * 0.05;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => { document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseout", onOut); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased selection:bg-[#D4FF00] selection:text-black overflow-x-hidden">
      {/* Cursor light trail */}
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 bg-[#D4FF00] rounded-full z-[100] mix-blend-screen shadow-[0_0_15px_#D4FF00] opacity-0 transition-opacity duration-500 hidden md:block" />
      <div ref={glowRef} className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full z-[90] mix-blend-screen opacity-0 transition-opacity duration-500 hidden md:block" style={{ background: "radial-gradient(circle, rgba(212,255,0,0.12) 0%, rgba(212,255,0,0) 60%)" }} />

      <style>{`
        .glass-panel {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .glass-panel:hover {
          border-color: rgba(212,255,0,0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
        .text-glow { text-shadow: 0 0 20px rgba(212,255,0,0.3); }
        .reveal-on-scroll {
          transition: all 0.8s cubic-bezier(0.5,0,0,1);
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes floatDelayed { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 8s ease-in-out 2s infinite; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="/" className="font-mono text-lg md:text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4FF00] rounded-sm shadow-[0_0_10px_#D4FF00]" />
            JatHub <span className="text-[#D4FF00]">X-PLORE</span>
          </a>
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-gray-400">
            <a href="#philosophy" className="hover:text-[#D4FF00] transition-colors cursor-pointer">Philosophy</a>
            <a href="#partners" className="hover:text-[#D4FF00] transition-colors cursor-pointer">For Partners</a>
            <a href="#students" className="hover:text-[#D4FF00] transition-colors cursor-pointer">For Students</a>
            <a href="#process" className="hover:text-[#D4FF00] transition-colors cursor-pointer">The Process</a>
            <a href="/xplore/challenge" className="hover:text-[#D4FF00] transition-colors cursor-pointer">Challenges</a>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#students" className="px-4 py-2 text-sm font-bold text-white hover:text-[#D4FF00] transition-colors">Join as Student</a>
            <a href="#partners" className="bg-[#D4FF00] text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(212,255,0,0.3)]">Partner With Us</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 bg-[#050505]/95 backdrop-blur-xl border-t border-white/5 flex flex-col gap-3">
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-[#D4FF00] transition-colors text-sm">Philosophy</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white transition-colors text-sm">For Partners</a>
            <a href="#students" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white transition-colors text-sm">For Students</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white transition-colors text-sm">The Process</a>
            <a href="#students" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center py-3 text-sm font-bold text-white border border-white/20 rounded-full hover:text-[#D4FF00]">Join as Student</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="text-center py-3 bg-[#D4FF00] text-black rounded-full text-sm font-bold hover:bg-white transition-all">Partner With Us</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 opacity-50">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale mix-blend-screen" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />
        </div>

        <div className="absolute top-20 left-10 opacity-30 animate-float"><Lightbulb className="w-12 h-12 text-[#D4FF00]" /></div>
        <div className="absolute top-40 right-20 opacity-20 animate-float-delayed"><Sparkles className="w-10 h-10 text-[#8B5CF6]" /></div>
        <div className="absolute bottom-32 left-20 opacity-25 animate-float"><Zap className="w-14 h-14 text-[#3B82F6]" /></div>
        <div className="absolute bottom-20 right-16 opacity-20 animate-float-delayed"><Brain className="w-11 h-11 text-[#D4FF00]" /></div>
        <div className="absolute top-1/3 right-32 opacity-15 animate-float"><Target className="w-8 h-8 text-[#8B5CF6]" /></div>
        <div className="absolute bottom-1/3 left-32 opacity-20 animate-float-delayed"><Layers className="w-9 h-9 text-[#3B82F6]" /></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto reveal-on-scroll opacity-0 translate-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight mb-8 leading-none text-white">
            X-PLORE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 text-2xl sm:text-3xl md:text-5xl lg:text-6xl block mt-2 tracking-normal whitespace-nowrap">Marketing Ideathon</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-normal mb-12 tracking-tight text-[#D4FF00] text-glow">
            Beyond the Brief. Build the Experience.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "200ms" }}>
            <a href="#partners" className="group bg-[#D4FF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,255,0,0.2)] flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" /> For Partners
            </a>
            <a href="#students" className="group px-8 py-4 rounded-full font-medium text-white glass-panel hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5" /> For Students
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-8 md:py-12 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Qe8HaLXdu0o"
              title="X-PLORE Marketing Ideathon"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </section>

      {/* 2026 Marketing Ideathon CTA */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#c8ef50] rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="relative z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
                <span className="bg-black/10 backdrop-blur-md text-black px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Upcoming 2026
                </span>
              </div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-black mb-2 md:mb-3 tracking-tight">
                2026 Marketing Ideathon
              </h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 text-black/70 font-medium text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  April-June
                </span>
                <span className="w-1 h-1 bg-black/30 rounded-full hidden md:block" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  Hybrid Mode
                </span>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-auto">
              <a href="/xplore/tracks" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-black text-white w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black shadow-xl">
                Click to Explore
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 bg-[#0F0F0F] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-8">
            <div className="text-[#D4FF00] font-mono text-sm uppercase tracking-widest mb-3">The Philosophy</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A Mindset Shift</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't accept concepts as outcomes. "Beyond the Brief" means moving from theoretical slides to buildable realities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "100ms" }}>
            <div className="glass-panel p-8 rounded-2xl group border-t-2 border-t-[#3B82F6] hover:!border-t-[#D4FF00]">
              <div className="mb-6 bg-[#3B82F6]/10 w-14 h-14 rounded-lg flex items-center justify-center text-[#3B82F6] group-hover:text-[#D4FF00] transition-colors">
                <Telescope className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
              <p className="text-sm text-gray-400 leading-relaxed">We explore emerging frontiers like AI, Gaming, and Immersion. We move beyond traditional advertising into worlds where audiences live.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl group border-t-2 border-t-[#8B5CF6] hover:!border-t-[#D4FF00]">
              <div className="mb-6 bg-[#8B5CF6]/10 w-14 h-14 rounded-lg flex items-center justify-center text-[#8B5CF6] group-hover:text-[#D4FF00] transition-colors">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exploration</h3>
              <p className="text-sm text-gray-400 leading-relaxed">No hypothetical campaigns. We experiment with real-world tools to find solutions that actually work in today's digital ecosystem.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl group border-t-2 border-t-[#D4FF00] hover:!border-t-white">
              <div className="mb-6 bg-[#D4FF00]/10 w-14 h-14 rounded-lg flex items-center justify-center text-[#D4FF00] group-hover:text-white transition-colors">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Execution</h3>
              <p className="text-sm text-gray-400 leading-relaxed">No "nice concepts" without delivery. We prioritize buildable prototypes that deliver measurable commercial impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Tearing Down The Wall */}
      <section id="mission" className="py-24 bg-[#050505] relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll opacity-0 translate-y-8">
            <div className="text-[#D4FF00] font-mono text-sm uppercase tracking-widest mb-3">The Mission</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Tearing Down The Wall</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              For too long, academia and industry have operated in parallel worlds. <br />X-PLORE demolishes that wall.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 text-center md:text-right group reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "100ms" }}>
              <div className="glass-panel p-10 rounded-3xl md:border-r-4 border-r-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-3xl group-hover:bg-[#3B82F6]/30 transition-all" />
                <h4 className="text-3xl font-bold text-white mb-2 relative z-10">Students</h4>
                <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">Creative, ambitious, digitally native — but disconnected from real commercial execution.</p>
                <div className="inline-flex items-center justify-end gap-2 text-[#3B82F6] text-xs font-mono uppercase font-bold relative z-10">
                  Action-Oriented Future Makers <Zap className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col items-center justify-center h-full py-6 md:py-0 relative reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "200ms" }}>
              <div className="bg-black border border-[#D4FF00] text-[#D4FF00] px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest font-bold z-10 shadow-[0_0_20px_rgba(212,255,0,0.2)] animate-pulse-slow whitespace-nowrap">
                We Connect
              </div>
            </div>
            <div className="md:col-span-5 text-center md:text-left group reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "300ms" }}>
              <div className="glass-panel p-10 rounded-3xl md:border-l-4 border-l-[#8B5CF6] hover:bg-[#8B5CF6]/5 transition-all relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-3xl group-hover:bg-[#8B5CF6]/30 transition-all" />
                <h4 className="text-3xl font-bold text-white mb-2 relative z-10">Brands</h4>
                <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">Seeking relevance and innovation — but stuck in traditional operational cycles.</p>
                <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-xs font-mono uppercase font-bold relative z-10">
                  Growth-Seeking Enterprises
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Partners */}
      <section id="partners" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal-on-scroll opacity-0 translate-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-mono font-bold mb-4">FOR BRANDS & ENTERPRISES</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stop Guessing What Gen Z Wants. <br /><span className="text-[#8B5CF6]">Let Them Build It.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">Traditional agencies are expensive and detached. Gen Z ignores corporate messaging. We offer active collaboration to solve the relevance crisis.</p>
              <a href="mailto:Jat@jathub.com" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#8B5CF6] hover:text-white transition-all hover:scale-105">Request Partner Deck</a>
            </div>
            <div className="relative reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "200ms" }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8B5CF6] to-blue-600 rounded-2xl blur-lg opacity-30" />
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                    <div className="bg-[#8B5CF6] text-white p-3 rounded-full"><Check className="w-5 h-5" /></div>
                    <div>
                      <div className="font-bold text-white">Direct Gen Z Insights</div>
                      <div className="text-xs text-gray-400">Validated by 5,000+ Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "300ms" }}>
            {[
              { icon: FileCheck2, title: "Actionable Assets", desc: "Full rights to concepts, prototypes, and activation strategies ready for development." },
              { icon: Search, title: "Direct Insights", desc: "Real feedback and cultural validation from your target demographic." },
              { icon: Users2, title: "Talent Pipeline", desc: "Identify high-potential creators early. Reduce recruitment friction." },
              { icon: Megaphone, title: "Brand Visibility", desc: "Deep engagement across UK campuses. Presence in workshops and showcases." },
            ].map((item) => (
              <div key={item.title} className="glass-panel p-6 rounded-2xl hover:!border-[#8B5CF6]/50 group">
                <div className="bg-[#8B5CF6]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#8B5CF6] group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Students */}
      <section id="students" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1 reveal-on-scroll opacity-0 translate-y-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6] to-cyan-500 rounded-2xl blur-lg opacity-30" />
              <div className="relative rounded-2xl overflow-hidden h-[500px] group">
                <img src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2670&auto=format&fit=crop" alt="Student VR" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-block bg-[#3B82F6] text-black font-bold px-4 py-1 rounded text-sm mb-2">Build The Future</div>
                  <h3 className="text-2xl font-bold text-white">Interactive Prototypes</h3>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "100ms" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-mono font-bold mb-4">FOR STUDENTS & CREATORS</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Not Just Ideas on Slides. <br /><span className="text-[#3B82F6]">Build Real Experiences.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">Open to ALL university students across the UK. Don't just write a strategy document. Build a portfolio that gets you hired by top brands.</p>
              <a href="#contact" className="inline-block border border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-full font-bold hover:bg-[#3B82F6] hover:text-white transition-all">Apply Now</a>
            </div>
          </div>
          <div className="mb-16 reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "200ms" }}>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><Layers className="w-4 h-4 text-gray-500" /> Recruiting Cross-Disciplinary Talent</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Gamepad2, label: "Game Devs" },
                { icon: Bot, label: "AI Creators" },
                { icon: Glasses, label: "XR Designers" },
                { icon: BarChart2, label: "Strategists" },
                { icon: PenTool, label: "Copywriters" },
                { icon: Palette, label: "Designers" },
              ].map((role) => (
                <div key={role.label} className="glass-panel p-5 rounded-xl text-center hover:bg-white/5 transition-colors cursor-default group">
                  <div className="mb-3 text-white group-hover:text-[#D4FF00] transition-colors flex justify-center">
                    <role.icon className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold text-white">{role.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-24 bg-[#0F0F0F] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll opacity-0 translate-y-8">
              <div className="text-[#D4FF00] font-mono text-sm uppercase tracking-widest mb-4">The Brief</div>
              <h2 className="text-4xl font-bold mb-6">Real World. Real Rigour.</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">We ban vague requests like "Promote our brand." Every partner brief must follow our <strong className="text-white">Commercial Impact Framework</strong>.</p>
              <div className="p-8 bg-black border border-[#D4FF00]/20 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4FF00]/10 rounded-bl-full" />
                <h4 className="text-white font-bold mb-4 text-lg">The Outcome</h4>
                <ul className="space-y-4">
                  {["Commercial-ready marketing strategies", "Early-stage interactive prototypes", "Youth-validated engagement concepts"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="text-[#D4FF00] w-5 h-5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4 reveal-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: "100ms" }}>
              {[
                { num: "01", title: "Context", desc: "Brand reality in the UK market. Current positioning. Competitive landscape.", tags: ["UK Market", "Positioning"] },
                { num: "02", title: "The Challenge", desc: "A clear, specific friction point.", tags: ["Gen Z Perception", "Quality vs Image"] },
                { num: "03", title: "Objectives", desc: "Quantifiable KPIs. No vanity metrics.", tags: ["+15% Sentiment", "5k Interactions"] },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-6 p-6 rounded-2xl bg-[#1A1A1A] border border-[#D4FF00]/30 hover:border-[#D4FF00] transition-all hover:-translate-x-2">
                  <div className="text-4xl font-bold text-[#D4FF00]">{step.num}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-lg">{step.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{step.desc}</p>
                    <div className="flex gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-[#D4FF00]/10 text-[#D4FF00] px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,255,0,0.05)_0%,_black_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center reveal-on-scroll opacity-0 translate-y-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-white">
            Ready to co-create <br /> the future?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
            <a href="mailto:Jat@jathub.com" className="bg-[#D4FF00] text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,255,0,0.3)]">Partner With Us</a>
            <a href="mailto:Jat@jathub.com" className="border border-white/20 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 hover:border-white transition-all">Apply as Student</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XPlore;
