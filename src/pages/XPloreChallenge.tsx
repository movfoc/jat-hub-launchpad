import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ArrowRight, Users, Briefcase, HeartPulse, ShoppingBag, Gamepad2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const REGISTRATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfG_3QDNhKLRZLUjd97tr0hlgcvPRz4vCtC-ygr_YeQz8yJGQ/viewform?usp=publish-editor";

const TRACKS_DATA = [
  {
    id: "A",
    icon: Briefcase,
    title: "Next-Gen Career Development",
    description: "Convert your idea into reality using AI-driven design tools or AI agents. Reimagine how people discover careers, build skills, and navigate the future of work through intelligent, personalized experiences powered by AI.",
    deliverables: [
      "A working prototype or interactive demo built with AI-driven design tools or AI agents",
      "A short presentation explaining the idea, target users, and how AI powers the experience",
      "A written reflection on the workflow, tools used, and ethical considerations",
    ],
    currentTeams: 0,
    maxTeams: 3,
  },
  {
    id: "B",
    icon: HeartPulse,
    title: "Future of Healthcare & Wellbeing",
    description: "Reimagine how technology can improve healthcare access, mental wellbeing, and patient experiences. Design solutions that make health services more human-centered and accessible.",
    deliverables: [
      "A working prototype or detailed mockup of a health-tech solution",
      "User research findings and persona definitions",
      "A pitch deck with market analysis and implementation roadmap",
    ],
    currentTeams: 0,
    maxTeams: 3,
  },
  {
    id: "C",
    icon: ShoppingBag,
    title: "Immersive E-commerce Experiences",
    description: "Build the next generation of online shopping. Create immersive, interactive e-commerce experiences that blend AR, VR, or AI to transform how consumers discover and purchase products.",
    deliverables: [
      "An interactive prototype demonstrating the immersive shopping experience",
      "A business model canvas outlining revenue streams and scalability",
      "A demo video showcasing the user journey",
    ],
    currentTeams: 0,
    maxTeams: 3,
  },
  {
    id: "D",
    icon: Gamepad2,
    title: "Next-Gen Entertainment & Gaming",
    description: "Push the boundaries of interactive entertainment. Design innovative gaming concepts, interactive narratives, or mixed-reality experiences that captivate and engage audiences.",
    deliverables: [
      "A playable demo or interactive prototype",
      "Game design document with mechanics, narrative, and art direction",
      "A marketing strategy for launch and community building",
    ],
    currentTeams: 0,
    maxTeams: 3,
  },
];

type Track = typeof TRACKS_DATA[number];

const handleJoin = () => {
  window.open(REGISTRATION_FORM_URL, "_blank");
};

const XPloreChallenge = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  // Cursor trail effect (desktop only)
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let glowX = 0, glowY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => {
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = "1";
      if (cursorGlowRef.current) cursorGlowRef.current.style.opacity = "1";
    };

    const onLeave = () => {
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = "0";
      if (cursorGlowRef.current) cursorGlowRef.current.style.opacity = "0";
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;
      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;
      if (cursorDotRef.current) cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      if (cursorGlowRef.current) cursorGlowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#050505" }}>
      {/* Radial gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(30,64,175,0.4) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(126,34,206,0.4) 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />
      </div>

      {/* Cursor trail */}
      <div ref={cursorDotRef} className="pointer-events-none fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full z-[100] mix-blend-screen opacity-0 transition-opacity duration-500 hidden md:block" style={{ background: "#D4FF00", boxShadow: "0 0 15px #D4FF00" }} />
      <div ref={cursorGlowRef} className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full z-[90] mix-blend-screen opacity-0 transition-opacity duration-500 hidden md:block" style={{ background: "radial-gradient(circle, rgba(212,255,0,0.06) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to Jabhub
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
            Challenges
          </h1>
          <p className="text-white/50 text-center mt-4 text-lg max-w-xl mx-auto">
            Choose your mission. Solve real-world problems. Win big.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS_DATA.map((track) => {
            const isFull = track.currentTeams >= track.maxTeams;
            const Icon = track.icon;
            const progress = (track.currentTeams / track.maxTeams) * 100;

            return (
              <div
                key={track.id}
                className="group rounded-2xl border border-white/10 p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(59,130,246,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Icon + ID */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Challenge {track.id}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white leading-snug">{track.title}</h3>

                {/* Description */}
                <p className="text-sm text-white/50 line-clamp-3 flex-1">{track.description}</p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Teams</span>
                    <span>{track.currentTeams} / {track.maxTeams}</span>
                  </div>
                  <Progress value={progress} className="h-1.5 bg-white/10" />
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  {isFull ? (
                    <button
                      onClick={handleJoin}
                      className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors"
                      style={{ background: "rgba(217,119,6,0.2)", color: "#fbbf24" }}
                    >
                      Waiting List
                    </button>
                  ) : (
                    <button
                      onClick={handleJoin}
                      className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white transition-all flex items-center justify-center gap-1"
                      style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
                    >
                      Join Challenge <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedTrack(track)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedTrack} onOpenChange={(open) => !open && setSelectedTrack(null)}>
        {selectedTrack && (
          <DialogContent className="border-white/10 text-white max-w-lg" style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)" }}>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <selectedTrack.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Challenge {selectedTrack.id}</span>
              </div>
              <DialogTitle className="text-xl text-white">{selectedTrack.title}</DialogTitle>
              <DialogDescription className="text-white/50 mt-2">{selectedTrack.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              {/* Deliverables */}
              <div>
                <h4 className="text-sm font-semibold text-white/70 mb-2">Expected Deliverables</h4>
                <ul className="space-y-2">
                  {selectedTrack.deliverables.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/50">
                      <span className="text-blue-400 mt-0.5">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-white/40">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Team Capacity</span>
                  <span>{selectedTrack.currentTeams} / {selectedTrack.maxTeams}</span>
                </div>
                <Progress value={(selectedTrack.currentTeams / selectedTrack.maxTeams) * 100} className="h-2 bg-white/10" />
              </div>

              {/* Join button */}
              {selectedTrack.currentTeams >= selectedTrack.maxTeams ? (
                <button
                  onClick={handleJoin}
                  className="w-full py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{ background: "rgba(217,119,6,0.2)", color: "#fbbf24" }}
                >
                  Join Waiting List
                </button>
              ) : (
                <button
                  onClick={handleJoin}
                  className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all flex items-center justify-center gap-1"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
                >
                  Join This Challenge <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default XPloreChallenge;
