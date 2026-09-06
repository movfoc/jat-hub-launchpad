import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  Cpu,
  Dna,
  Globe2,
  GraduationCap,
  Instagram,
  Leaf,
  Linkedin,
  Menu,
  Network,
  Radio,
  Rocket,
  Trophy,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import globalRegistrationImage from "@/assets/wstc-global-registration.jpg";
import hongKongQualifiersImage from "@/assets/wstc-hong-kong-qualifiers.jpg";
import londonFinalImage from "@/assets/wstc-london-final.jpg";
import biotechnologyTrackImage from "@/assets/wstc-track-biotechnology.jpg";
import aiAutonomousTrackImage from "@/assets/wstc-track-ai-autonomous.jpg";
import digitalEconomyTrackImage from "@/assets/wstc-track-digital-economy.jpg";
import greenTechTrackImage from "@/assets/wstc-track-green-tech.jpg";
import partnerCorporateImage from "@/assets/wstc-partner-corporate.jpg";
import partnerVentureImage from "@/assets/wstc-partner-venture.jpg";
import partnerAcademicImage from "@/assets/wstc-partner-academic.jpg";

const FINAL_DATE = new Date("2026-11-14T09:00:00Z").getTime();

const useCountdown = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return useMemo(() => {
    const secondsLeft = Math.floor(Math.max(0, FINAL_DATE - now) / 1000);
    return [
      { label: "Days", value: Math.floor(secondsLeft / 86400) },
      { label: "Hours", value: Math.floor((secondsLeft % 86400) / 3600) },
      { label: "Minutes", value: Math.floor((secondsLeft % 3600) / 60) },
      { label: "Seconds", value: secondsLeft % 60 },
    ];
  }, [now]);
};

const navLinks = [
  { label: "Frontier", href: "#frontier" },
  { label: "Journey", href: "#journey" },
  { label: "Tracks", href: "#tracks" },
  { label: "Prestige", href: "#prizes" },
  { label: "Partner", href: "#partners" },
];

const phases = [
  { phase: "01", title: "Global Registration", place: "Hong Kong · Europe", copy: "Teams choose a championship track and transmit their first concept brief to the global judging network.", signal: "INTAKE OPEN", image: globalRegistrationImage, alt: "Europe and Asia connected across a digital globe" },
  { phase: "02", title: "Hong Kong Qualifiers", place: "Pitching · Prototypes", copy: "Working prototypes meet live scrutiny as experts select the strongest teams for the international stage.", signal: "REGIONAL NODE", image: hongKongQualifiersImage, alt: "Hong Kong skyline across Victoria Harbour at night" },
  { phase: "03", title: "United Kingdom Grand Final", place: "Global Convergence", copy: "Finalists cross continents for the world final, investor showcase and championship ceremony.", signal: "FINAL VECTOR", image: londonFinalImage, alt: "Big Ben and the Palace of Westminster beside the River Thames" },
];

const tracks = [
  { id: 1, name: "Biotechnology & Life Sciences", tag: "FLAGSHIP", icon: Dna, violet: true, image: biotechnologyTrackImage, alt: "DNA, molecular structures and biotechnology laboratory equipment", copy: "Therapeutics, synthetic biology, bioinformatics and AI-accelerated drug discovery.", points: ["Therapeutics & diagnostics", "Synthetic biology", "Bioinformatics pipelines", "AI drug discovery"] },
  { id: 2, name: "AI & Autonomous Systems", tag: "TRACK 02", icon: Cpu, violet: false, image: aiAutonomousTrackImage, alt: "Robotic hand connecting with an artificial intelligence neural network", copy: "Neural networks, machine intelligence and autonomous systems built for measurable real-world outcomes.", points: ["Neural architectures", "Applied ML models", "Smart robotics", "Edge autonomy"] },
  { id: 3, name: "Digital Economy & Web Technologies", tag: "TRACK 03", icon: Network, violet: false, image: digitalEconomyTrackImage, alt: "Connected digital infrastructure flowing towards a modern city", copy: "Decentralised applications and advanced software infrastructure for the next internet.", points: ["Decentralised apps", "Fintech rails", "Developer infrastructure", "Data platforms"] },
  { id: 4, name: "Green Tech & Sustainability", tag: "TRACK 04", icon: Leaf, violet: false, image: greenTechTrackImage, alt: "Wind turbines, solar panels and a sustainable future city", copy: "Clean energy solutions and environmental engineering with measurable global impact.", points: ["Clean energy", "Circular materials", "Climate analytics", "Environmental engineering"] },
];

const tiers = ["Title Sponsor", "Track Sponsor", "Ecosystem Partner"];

const particles = [
  ["left-[6%]", "top-[72%]", "[animation-delay:-1s]", "from-transparent via-wstc-cyan to-transparent"],
  ["left-[16%]", "top-[88%]", "[animation-delay:-9s]", "from-transparent via-wstc-violet to-transparent"],
  ["left-[27%]", "top-[64%]", "[animation-delay:-4s]", "from-transparent via-wstc-cyan to-transparent"],
  ["left-[38%]", "top-[92%]", "[animation-delay:-12s]", "from-transparent via-wstc-cyan to-transparent"],
  ["left-[49%]", "top-[70%]", "[animation-delay:-6s]", "from-transparent via-wstc-violet to-transparent"],
  ["left-[58%]", "top-[86%]", "[animation-delay:-2s]", "from-transparent via-wstc-cyan to-transparent"],
  ["left-[69%]", "top-[60%]", "[animation-delay:-10s]", "from-transparent via-wstc-cyan to-transparent"],
  ["left-[78%]", "top-[90%]", "[animation-delay:-5s]", "from-transparent via-wstc-violet to-transparent"],
  ["left-[87%]", "top-[68%]", "[animation-delay:-7s]", "from-transparent via-wstc-cyan to-transparent"],
  ["left-[95%]", "top-[84%]", "[animation-delay:-3s]", "from-transparent via-wstc-cyan to-transparent"],
];

function Telemetry({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center justify-between gap-6 border-y border-wstc-line/40 py-3 font-mono text-[9px] uppercase text-wstc-muted sm:text-[10px]">
      <span>{left}</span>
      <span className="flex items-center gap-2 text-wstc-cyan"><span className="h-1 w-1 rounded-full bg-wstc-cyan shadow-[0_0_10px_currentColor]" />{right}</span>
    </div>
  );
}

function ChapterHeading({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy: string }) {
  return (
    <div className="relative max-w-4xl">
      <div className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase text-wstc-cyan">
        <span className="border border-wstc-cyan/30 bg-wstc-cyan/5 px-3 py-1.5">Chapter {number}</span>
        <span className="h-px w-16 bg-wstc-line" />
        <span className="text-wstc-muted">{eyebrow}</span>
      </div>
      <h2 className="text-4xl font-black uppercase leading-[0.98] text-wstc-foreground sm:text-5xl lg:text-7xl">{title}</h2>
      <p className="mt-6 max-w-2xl text-base font-light leading-8 text-wstc-muted md:text-lg">{copy}</p>
      <span aria-hidden="true" className="pointer-events-none absolute -right-4 -top-12 hidden text-[10rem] font-black leading-none text-wstc-foreground/[0.025] lg:block">{number}</span>
    </div>
  );
}

export default function WSTC() {
  const countdown = useCountdown();
  const [activeTrack, setActiveTrack] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ org: "", contact: "", tier: tiers[0], message: "" });

  useEffect(() => {
    document.title = "WSTC 2026 | World Science & Technology Championship";
  }, []);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.org.trim() || !form.contact.trim()) {
      toast.error("Please add your organisation and contact person.");
      return;
    }
    toast.success("Partnership inquiry received — our team will be in touch shortly.");
    setForm({ org: "", contact: "", tier: tiers[0], message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-wstc-bg text-wstc-foreground [font-family:Inter,sans-serif] selection:bg-wstc-cyan/30">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="wstc-atmosphere absolute inset-0" />
        <div className="absolute left-[-15%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-wstc-cyan/25 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[42rem] w-[42rem] rounded-full bg-wstc-violet/25 blur-[160px]" />
        <div className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-wstc-cyan/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-wstc-cyan/10 to-transparent" />
        {particles.map(([x, y, delay, tone], index) => (
          <span key={index} className={`wstc-particle absolute ${x} ${y} ${delay} h-24 w-px rounded-full bg-gradient-to-t ${tone} opacity-70`} />
        ))}
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-wstc-line/40 bg-wstc-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <a href="#frontier" className="group flex items-center gap-3" aria-label="WSTC home">
            <span className="grid h-9 w-9 place-items-center border border-wstc-cyan/35 bg-wstc-cyan/5 transition group-hover:border-wstc-cyan">
              <Globe2 className="h-4 w-4 text-wstc-cyan" />
            </span>
            <span><strong className="block text-sm font-black">WSTC</strong><span className="block text-[9px] uppercase text-wstc-muted">JAT Hub · 2026</span></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="text-[11px] uppercase text-wstc-muted transition hover:text-wstc-cyan">{link.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[9px] text-wstc-cyan md:flex"><Radio className="h-3 w-3 animate-pulse" /> SIG · STABLE · 100%</span>
            <Button asChild size="sm" className="hidden rounded-none bg-wstc-cyan text-white shadow-[0_0_28px_hsl(var(--wstc-cyan)/0.4)] hover:bg-wstc-violet hover:shadow-[0_0_34px_hsl(var(--wstc-violet)/0.45)] sm:inline-flex"><a href="#register">Register team</a></Button>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen((open) => !open)} className="rounded-none text-wstc-foreground hover:bg-wstc-surface lg:hidden" aria-label="Toggle menu">
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-wstc-line/40 bg-wstc-bg px-5 py-5 lg:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block border-b border-wstc-line/30 py-3 text-sm uppercase text-wstc-muted">{link.label}</a>)}</nav>}
      </header>

      <aside className="fixed bottom-10 left-6 z-40 hidden items-center gap-5 xl:flex">
        <span className="rotate-180 text-[9px] uppercase text-wstc-muted [writing-mode:vertical-lr]">Narrative progress</span>
        <div className="flex flex-col gap-4 border-l border-wstc-line/60 py-3 pl-5">
          {navLinks.map((link, index) => <a key={link.href} href={link.href} aria-label={link.label} className={`block rounded-full transition hover:scale-150 ${index === 0 ? "h-2 w-2 bg-wstc-cyan shadow-[0_0_12px_currentColor]" : "h-1.5 w-1.5 bg-wstc-muted/50 hover:bg-wstc-cyan"}`} />)}
        </div>
      </aside>

      <main className="relative z-10">
        <section id="frontier" className="relative flex min-h-screen items-center border-b border-wstc-line/40 px-5 pb-16 pt-28 lg:px-10">
          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-8 flex items-center gap-4 text-[10px] font-bold uppercase text-wstc-cyan"><span className="border border-wstc-cyan/30 bg-wstc-cyan/5 px-3 py-1.5">Chapter I</span><span className="h-px w-20 bg-wstc-line" /><span className="text-wstc-muted">The Frontier</span></div>
              <p className="mb-5 font-mono text-[10px] uppercase text-wstc-muted">N 51.50° · W 0.12° / London node online</p>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.86] sm:text-7xl lg:text-[6.7rem]">
                Building the global <span className="wstc-gradient-text block">innovation frontier.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base font-light leading-8 text-wstc-muted md:text-xl">The World Science and Technology Championship bridges Hong Kong and the United Kingdom — connecting young builders with world-class scientists, investors and institutions.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group rounded-none bg-wstc-cyan px-8 text-white shadow-[0_0_34px_hsl(var(--wstc-cyan)/0.45)] hover:bg-wstc-violet hover:shadow-[0_0_40px_hsl(var(--wstc-violet)/0.5)]"><a href="#register">Register team <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a></Button>
                <Button asChild size="lg" variant="outline" className="rounded-none border-wstc-violet/50 bg-white/70 px-8 text-wstc-foreground hover:border-wstc-violet hover:bg-wstc-violet/10"><a href="#partners">Partner with us</a></Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-wstc-cyan/10" />
              <div className="wstc-glass relative aspect-square overflow-hidden p-7 sm:p-9">
                <div className="absolute inset-8 rounded-full border border-wstc-cyan/15" />
                <div className="absolute inset-20 rounded-full border border-wstc-violet/20" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between font-mono text-[9px] uppercase text-wstc-muted"><span>Final transmission</span><span className="text-wstc-cyan">Live</span></div>
                  <div className="grid grid-cols-4 gap-2">
                    {countdown.map((item) => <div key={item.label} className="border-l border-wstc-cyan/35 pl-2"><strong className="block text-xl font-light tabular-nums text-wstc-foreground sm:text-3xl">{String(item.value).padStart(2, "0")}</strong><span className="mt-1 block text-[8px] uppercase text-wstc-muted">{item.label}</span></div>)}
                  </div>
                  <div><div className="mb-3 h-px bg-gradient-to-r from-transparent via-wstc-cyan/50 to-transparent" /><div className="grid grid-cols-2 gap-4 text-[9px] uppercase text-wstc-muted"><span>HK Node · Active</span><span className="text-right">UK Final · 14.11.26</span></div></div>
                </div>
              </div>
            </div>
          </div>
          <a href="#journey" aria-label="Continue to chapter two" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase text-wstc-muted md:flex"><span>Continue journey</span><ArrowDown className="h-4 w-4 animate-bounce" /></a>
        </section>

        <section id="journey" className="min-h-screen border-b border-wstc-line/40 px-5 py-28 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <ChapterHeading number="II" eyebrow="Hong Kong to United Kingdom" title="The unified journey." copy="One continuous trajectory: from first signal to final stage. Every chapter raises the technical bar and expands the audience." />
            <div className="mt-16 grid gap-px overflow-hidden border border-wstc-line/50 bg-wstc-line/50 lg:grid-cols-3">
              {phases.map((phase, index) => (
                <article key={phase.phase} className="group relative min-h-[420px] overflow-hidden bg-wstc-bg p-7 sm:p-9">
                  <img src={phase.image} alt={phase.alt} loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-28 saturate-[0.9] transition duration-700 group-hover:scale-[1.04] group-hover:opacity-45 group-hover:saturate-100" />
                  <div className="absolute inset-0 bg-gradient-to-b from-wstc-bg/65 via-wstc-bg/80 to-wstc-bg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-wstc-bg/80 via-wstc-bg/40 to-transparent" />
                  <div className="relative z-10 flex h-full min-h-[348px] flex-col justify-between">
                    <div className="flex items-start justify-between"><span className="text-6xl font-black text-wstc-foreground/20 transition group-hover:text-wstc-cyan/40">{phase.phase}</span><span className="border border-wstc-cyan/25 bg-white/80 px-2 py-1 font-mono text-[9px] uppercase text-wstc-cyan backdrop-blur-md">{phase.signal}</span></div>
                    <div><span className="text-[10px] uppercase text-wstc-violet">{phase.place}</span><h3 className="mt-3 text-2xl font-bold text-wstc-foreground">{phase.title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-wstc-muted">{phase.copy}</p></div>
                  </div>
                  {index < phases.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 rounded-full bg-wstc-cyan p-1 text-white lg:block" />}
                </article>
              ))}
            </div>
            <Telemetry left="Vector · HKG 22.3193° N / 114.1694° E" right="Route synchronised" />
          </div>
        </section>

        <section id="tracks" className="min-h-screen border-b border-wstc-line/40 px-5 py-28 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <ChapterHeading number="III" eyebrow="Four disciplines · one world stage" title="Championship tracks." copy="Select a frontier. Each track rewards technological depth, human relevance and the courage to build what does not yet exist." />
            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {tracks.map((track) => {
                const active = activeTrack === track.id;
                return (
                  <button key={track.id} type="button" onClick={() => setActiveTrack(track.id)} aria-expanded={active} className={`wstc-glass group relative min-h-[360px] overflow-hidden p-7 text-left transition duration-500 sm:p-9 ${active ? track.violet ? "border-wstc-violet/70 shadow-[0_0_50px_hsl(var(--wstc-violet)/0.12)]" : "border-wstc-cyan/70 shadow-[0_0_50px_hsl(var(--wstc-cyan)/0.12)]" : ""}`}>
                    <img src={track.image} alt={track.alt} loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-25 saturate-[0.9] transition duration-700 group-hover:scale-[1.04] group-hover:opacity-45 group-hover:saturate-100" />
                    <span className="absolute inset-0 bg-gradient-to-b from-wstc-bg/25 via-wstc-bg/45 to-wstc-bg" />
                    <span className="absolute inset-0 bg-gradient-to-r from-wstc-bg/85 via-wstc-bg/45 to-transparent" />
                    <span className="relative z-10 flex min-h-[288px] flex-col">
                      <span className="flex items-start justify-between"><span className={`grid h-11 w-11 place-items-center border bg-white/80 backdrop-blur-md ${track.violet ? "border-wstc-violet/40 text-wstc-violet" : "border-wstc-cyan/40 text-wstc-cyan"}`}><track.icon className="h-5 w-5" /></span><span className={`border bg-white/80 px-2 py-1 font-mono text-[9px] uppercase backdrop-blur-md ${track.violet ? "border-wstc-violet/30 text-wstc-violet" : "border-wstc-cyan/25 text-wstc-cyan"}`}>{track.tag}</span></span>
                      <span className="mt-auto block"><span className="block text-2xl font-bold text-wstc-foreground">{track.name}</span><span className="mt-3 block max-w-xl text-sm leading-7 text-wstc-muted">{track.copy}</span></span>
                      <span className={`grid transition-all duration-500 ${active ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><span className="grid min-h-0 gap-2 overflow-hidden sm:grid-cols-2">{track.points.map((point) => <span key={point} className="flex items-center gap-2 text-xs text-wstc-muted"><Check className={`h-3.5 w-3.5 ${track.violet ? "text-wstc-violet" : "text-wstc-cyan"}`} />{point}</span>)}</span></span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="prizes" className="min-h-screen border-b border-wstc-line/40 px-5 py-28 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <ChapterHeading number="IV" eyebrow="Recognition beyond the podium" title="Global prestige & prizes." copy="Victory opens doors: capital, intellectual property support, international visibility and the networks required to move an idea into the world." />
            <div className="mt-20 grid items-end gap-4 md:grid-cols-3">
              {[
                { place: "02", name: "Silver Laureate", copy: "Cash prize · patent advisory", height: "md:min-h-[280px]", color: "text-wstc-foreground" },
                { place: "01", name: "World Champion", copy: "Grand cash prize · acceleration · investor showcase", height: "md:min-h-[390px]", color: "text-wstc-cyan" },
                { place: "03", name: "Bronze Laureate", copy: "Cash prize · global mentorship", height: "md:min-h-[235px]", color: "text-wstc-violet" },
              ].map((prize) => <article key={prize.place} className={`wstc-glass group flex min-h-[230px] flex-col justify-between p-8 transition duration-500 ${prize.height}`}><div className="flex justify-between"><Trophy className={`h-6 w-6 ${prize.color}`} /><span className="font-mono text-[9px] text-wstc-muted">PODIUM / {prize.place}</span></div><div><strong className={`block text-7xl font-black ${prize.color}`}>{prize.place}</strong><h3 className="mt-4 text-xl font-bold">{prize.name}</h3><p className="mt-2 text-sm text-wstc-muted">{prize.copy}</p></div></article>)}
            </div>
            <div className="mt-5 grid gap-px bg-wstc-line/50 sm:grid-cols-4">{["Cash prizes", "Patent support", "Investor showcases", "International media"].map((benefit) => <div key={benefit} className="bg-wstc-bg px-5 py-5 text-center text-[10px] uppercase text-wstc-muted">{benefit}</div>)}</div>
          </div>
        </section>

        <section id="partners" className="min-h-screen px-5 py-28 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <ChapterHeading number="V" eyebrow="Sponsor & partner portal" title="Build the frontier with us." copy="Stand beside the teams shaping the next decade. Partners gain meaningful access to ideas, talent and influence across Hong Kong and the United Kingdom." />
            <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-px bg-wstc-line/50">
                {[
                  { icon: Building2, title: "Corporate partners", copy: "Own a stage, shape a track and connect your brand with ambitious international builders.", image: partnerCorporateImage, alt: "Futuristic corporate boardroom overlooking a glowing global city skyline" },
                  { icon: Users, title: "Venture capital", copy: "Meet deep-tech and biotech teams early through the UK Grand Final investor showcase.", image: partnerVentureImage, alt: "Investor showcase stage with founders pitching beneath holographic data visualisations" },
                  { icon: GraduationCap, title: "Academic institutions", copy: "Join the judging network, support research and build a pipeline of future applicants.", image: partnerAcademicImage, alt: "Advanced university research hall with DNA helix and neural network holograms" },
                ].map((item) => (
                  <article key={item.title} className="group relative min-h-[240px] overflow-hidden bg-wstc-bg p-7 transition sm:p-9">
                    <img src={item.image} alt={item.alt} loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-25 saturate-[0.9] transition duration-700 group-hover:scale-[1.04] group-hover:opacity-40 group-hover:saturate-100" />
                    <div className="absolute inset-0 bg-gradient-to-b from-wstc-bg/70 via-wstc-bg/85 to-wstc-bg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-wstc-bg/80 via-wstc-bg/40 to-transparent" />
                    <div className="relative z-10 flex h-full min-h-[168px] flex-col justify-between">
                      <span className="grid h-10 w-10 place-items-center border border-wstc-cyan/40 bg-white/80 backdrop-blur-md text-wstc-cyan"><item.icon className="h-5 w-5" /></span>
                      <div>
                        <h3 className="text-lg font-bold text-wstc-foreground">{item.title}</h3>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-wstc-muted">{item.copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <form id="register" onSubmit={submit} className="wstc-glass p-7 sm:p-10">
                <div className="flex items-center justify-between gap-4 border-b border-wstc-line/50 pb-6"><div><p className="font-mono text-[9px] uppercase text-wstc-cyan">Direct inquiry channel</p><h3 className="mt-2 text-2xl font-bold">Partnership inquiry</h3></div><Rocket className="h-7 w-7 text-wstc-violet" /></div>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="text-[10px] uppercase text-wstc-muted">Organization name<input value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className="mt-2 w-full rounded-none border border-wstc-line bg-white/80 px-4 py-3.5 text-sm normal-case text-wstc-foreground outline-none transition focus:border-wstc-cyan" placeholder="Organisation" /></label>
                  <label className="text-[10px] uppercase text-wstc-muted">Contact person<input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="mt-2 w-full rounded-none border border-wstc-line bg-white/80 px-4 py-3.5 text-sm normal-case text-wstc-foreground outline-none transition focus:border-wstc-cyan" placeholder="Name and email" /></label>
                  <label className="text-[10px] uppercase text-wstc-muted sm:col-span-2">Partnership tier<select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })} className="mt-2 w-full rounded-none border border-wstc-line bg-white/80 px-4 py-3.5 text-sm normal-case text-wstc-foreground outline-none transition focus:border-wstc-cyan">{tiers.map((tier) => <option key={tier}>{tier}</option>)}</select></label>
                  <label className="text-[10px] uppercase text-wstc-muted sm:col-span-2">Inquiry message<textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full resize-none rounded-none border border-wstc-line bg-white/80 px-4 py-3.5 text-sm normal-case text-wstc-foreground outline-none transition focus:border-wstc-cyan" placeholder="What would you like to sponsor or explore?" /></label>
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full rounded-none bg-wstc-cyan text-white shadow-[0_0_28px_hsl(var(--wstc-cyan)/0.4)] hover:bg-wstc-violet hover:shadow-[0_0_34px_hsl(var(--wstc-violet)/0.45)]">Submit partnership inquiry <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <p className="mt-4 text-center text-xs text-wstc-muted">Direct contact · <a href="mailto:jat@jathub.com" className="text-wstc-cyan hover:underline">jat@jathub.com</a></p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-wstc-line bg-wstc-surface-strong px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center border border-wstc-cyan/40"><Globe2 className="h-4 w-4 text-wstc-cyan" /></span><strong className="text-sm">WSTC · JAT Hub</strong></div><p className="mt-5 max-w-md text-sm leading-7 text-wstc-muted">The World Science and Technology Championship is presented by JAT Hub CIC, a Community Interest Company registered in England and Wales.</p></div>
          <div className="text-sm text-wstc-muted"><h4 className="mb-4 text-[10px] uppercase text-wstc-foreground">Official contact</h4><a href="mailto:jat@jathub.com" className="block transition hover:text-wstc-cyan">jat@jathub.com</a><a href="tel:+447766456376" className="mt-2 block transition hover:text-wstc-cyan">+44 7766 456376</a><p className="mt-4">Company No. 17193758</p></div>
          <div><h4 className="mb-4 text-[10px] uppercase text-wstc-foreground">Global channels</h4><div className="flex gap-4">{[{ icon: Youtube, href: "https://www.youtube.com/@JatHub", label: "YouTube" }, { icon: Linkedin, href: "https://www.linkedin.com/company/jathub", label: "LinkedIn" }, { icon: Instagram, href: "https://www.instagram.com/jathub_uk/", label: "Instagram" }].map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-10 w-10 place-items-center border border-wstc-line text-wstc-muted transition hover:border-wstc-cyan hover:text-wstc-cyan"><social.icon className="h-4 w-4" /></a>)}</div><p className="mt-6 text-xs text-wstc-muted">© 2026 JAT Hub CIC. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}