import { useEffect, useMemo, useState } from "react";
import { Globe, Cpu, Dna, Leaf, Network, Trophy, Rocket, Sparkles, ArrowRight, Youtube, Linkedin, Instagram, Menu, X } from "lucide-react";
import { toast } from "sonner";

const FINAL_DATE = new Date("2026-11-14T09:00:00Z").getTime();

const useCountdown = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  return useMemo(() => {
    const diff = Math.max(0, FINAL_DATE - now);
    const s = Math.floor(diff / 1000);
    return {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      minutes: Math.floor((s % 3600) / 60),
      seconds: s % 60,
    };
  }, [now]);
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Journey", href: "#journey" },
  { label: "Prizes", href: "#prizes" },
  { label: "Partners & Sponsors", href: "#partners" },
];

const tracks = [
  {
    id: 1,
    name: "Biotechnology & Life Sciences",
    tag: "FLAGSHIP TRACK",
    icon: Dna,
    accent: "violet" as const,
    copy: "Therapeutics, synthetic biology, bioinformatics and AI-accelerated drug discovery.",
    points: ["Therapeutics & diagnostics", "Synthetic biology", "Bioinformatics pipelines", "AI-accelerated drug discovery"],
  },
  {
    id: 2,
    name: "AI & Autonomous Systems",
    tag: "TRACK 02",
    icon: Cpu,
    accent: "cyan" as const,
    copy: "Neural networks, machine learning models and smart robotics built for the real world.",
    points: ["Neural architectures", "Applied ML models", "Smart robotics", "Edge autonomy"],
  },
  {
    id: 3,
    name: "Digital Economy & Web Technologies",
    tag: "TRACK 03",
    icon: Network,
    accent: "cyan" as const,
    copy: "Decentralised applications and advanced software infrastructure for the next internet.",
    points: ["Decentralised apps", "Fintech rails", "Developer infrastructure", "Data platforms"],
  },
  {
    id: 4,
    name: "Green Tech & Sustainability",
    tag: "TRACK 04",
    icon: Leaf,
    accent: "cyan" as const,
    copy: "Clean energy solutions and environmental engineering with measurable impact.",
    points: ["Clean energy", "Circular materials", "Climate analytics", "Environmental engineering"],
  },
];

const phases = [
  {
    phase: "PHASE 01",
    title: "Global Registration",
    where: "Hong Kong & Europe",
    copy: "Teams register, choose a championship track and submit their concept brief.",
  },
  {
    phase: "PHASE 02",
    title: "Hong Kong Regional Qualifiers",
    where: "Pitching & Prototypes",
    copy: "Live pitching, working prototypes and expert judging select the strongest teams.",
  },
  {
    phase: "PHASE 03",
    title: "UK Grand Final",
    where: "Top Teams Converge",
    copy: "Finalists fly to the UK for the grand final and an international investor showcase.",
  },
];

const tiers = ["Title Sponsor", "Track Sponsor", "Ecosystem Partner"];

const Ticker = () => (
  <div className="border-y border-cyan-400/20 bg-cyan-400/5 overflow-hidden">
    <div className="flex whitespace-nowrap py-2 animate-[wstc-marquee_28s_linear_infinite]">
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0 items-center gap-10 pr-10 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
          <span>◆ Hong Kong qualifiers open</span>
          <span>◆ 4 championship tracks live</span>
          <span>◆ Biotechnology flagship focus</span>
          <span>◆ UK grand final · investor showcase</span>
          <span>◆ Presented by JAT Hub</span>
        </div>
      ))}
    </div>
  </div>
);

export default function WSTC() {
  const { days, hours, minutes, seconds } = useCountdown();
  const [activeTrack, setActiveTrack] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ org: "", contact: "", tier: tiers[0], message: "" });

  useEffect(() => {
    document.title = "WSTC 2026 | World Science and Technology Championship | JAT Hub";
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.org || !form.contact) {
      toast.error("Please add your organisation and contact person.");
      return;
    }
    toast.success("Partnership inquiry received — our team will be in touch shortly.");
    setForm({ org: "", contact: "", tier: tiers[0], message: "" });
  };

  const timeBoxes = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 [font-family:Inter,sans-serif]">
      <style>{`
        @keyframes wstc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .wstc-display { font-family: Orbitron, Inter, sans-serif; letter-spacing: 0.02em; }
        .wstc-grid-bg {
          background-image:
            linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px);
          background-size: 56px 56px;
        }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-cyan-400/15 bg-[#030712]/85 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.35)]">
              <Globe className="h-5 w-5 text-cyan-300" />
            </span>
            <span className="leading-tight">
              <span className="wstc-display block text-sm font-black text-white">WSTC</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400">by JAT Hub</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-cyan-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Hong Kong Qualifiers Open
            </span>
            <a
              href="#register"
              className="hidden sm:inline-flex wstc-display rounded-lg border border-cyan-400/60 bg-cyan-400/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-200 shadow-[0_0_24px_rgba(6,182,212,0.35)] transition hover:bg-cyan-400/25"
            >
              [ Register Your Team ]
            </a>
            <button className="lg:hidden text-slate-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-cyan-400/15 px-5 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-cyan-300">
                {l.label}
              </a>
            ))}
            <a href="#register" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-lg border border-cyan-400/60 bg-cyan-400/15 py-2 text-center text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
              [ Register Your Team ]
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="top" className="pt-[68px]">
        <section className="relative overflow-hidden wstc-grid-bg">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="container relative mx-auto px-5 py-20 md:py-28 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" /> Presented by JAT Hub
            </span>
            <h1 className="wstc-display mx-auto mt-6 max-w-5xl text-3xl sm:text-5xl md:text-6xl font-black leading-[1.12] text-white">
              WSTC 2026: <span className="text-cyan-300 drop-shadow-[0_0_24px_rgba(6,182,212,0.5)]">INNOVATE.</span>{" "}
              <span className="text-violet-300 drop-shadow-[0_0_24px_rgba(139,92,246,0.5)]">COMPETE.</span> TRIUMPH.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
              The World Science and Technology Championship takes young innovators from the Hong Kong preliminary rounds
              all the way to the UK Grand Final — judged by scientists, engineers and global investors.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-2 sm:gap-4">
              {timeBoxes.map((b) => (
                <div key={b.label} className="rounded-2xl border border-cyan-400/25 bg-slate-900/60 px-2 py-4 backdrop-blur shadow-[0_0_30px_rgba(6,182,212,0.12)]">
                  <div className="wstc-display text-2xl sm:text-4xl font-black text-cyan-300 tabular-nums">
                    {String(b.value).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500">{b.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#register" className="wstc-display w-full sm:w-auto rounded-xl bg-cyan-400 px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-950 shadow-[0_0_36px_rgba(6,182,212,0.5)] transition hover:scale-[1.03]">
                [ Register Team Now ]
              </a>
              <a href="#partners" className="wstc-display w-full sm:w-auto rounded-xl border border-violet-400/50 bg-violet-500/10 px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-violet-200 transition hover:bg-violet-500/20">
                [ Join as Sponsor / Partner ]
              </a>
            </div>
          </div>
          <Ticker />
        </section>

        {/* ABOUT */}
        <section id="about" className="container mx-auto px-5 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Globe, title: "Two continents, one championship", copy: "Qualifiers in Hong Kong, grand final in the United Kingdom — a genuinely global stage for student innovation." },
              { icon: Rocket, title: "Build, prototype, pitch", copy: "Every team ships a working prototype and defends it in front of an expert judging panel." },
              { icon: Trophy, title: "Beyond the trophy", copy: "Cash prizes, patent support, acceleration and introductions to investors and industry partners." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-7 backdrop-blur transition hover:border-cyan-400/40 hover:shadow-[0_0_36px_rgba(6,182,212,0.15)]">
                <c.icon className="h-7 w-7 text-cyan-300" />
                <h3 className="wstc-display mt-4 text-base font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="relative border-y border-slate-800/80 bg-slate-950/60 py-20">
          <div className="container mx-auto px-5">
            <h2 className="wstc-display text-center text-2xl md:text-4xl font-black text-white">The Global Championship Journey</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">Three phases. From first registration to the international final stage.</p>

            <div className="relative mt-14">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-violet-400/0 md:block" />
              <div className="grid gap-8 md:grid-cols-3">
                {phases.map((p, i) => (
                  <div key={p.phase} className="group relative">
                    <div className="relative z-10 mx-auto md:mx-0 grid h-12 w-12 place-items-center rounded-full border border-cyan-400/50 bg-[#030712] wstc-display text-sm font-black text-cyan-300 shadow-[0_0_26px_rgba(6,182,212,0.35)]">
                      {i + 1}
                    </div>
                    <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 text-center md:text-left backdrop-blur transition group-hover:border-cyan-400/40 group-hover:shadow-[0_0_36px_rgba(6,182,212,0.15)]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">{p.phase}</span>
                      <h3 className="wstc-display mt-2 text-lg font-bold text-white">{p.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-violet-300">{p.where}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRACKS */}
        <section id="tracks" className="container mx-auto px-5 py-20">
          <h2 className="wstc-display text-center text-2xl md:text-4xl font-black text-white">The Four Championship Tracks</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">Select a track to explore what teams will be building.</p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {tracks.map((t) => {
              const active = activeTrack === t.id;
              const violet = t.accent === "violet";
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTrack(t.id)}
                  className={`text-left rounded-2xl border bg-slate-900/60 p-7 backdrop-blur transition ${
                    active
                      ? violet
                        ? "border-violet-400/70 shadow-[0_0_48px_rgba(139,92,246,0.28)]"
                        : "border-cyan-400/70 shadow-[0_0_48px_rgba(6,182,212,0.25)]"
                      : "border-slate-700/60 hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`grid h-12 w-12 place-items-center rounded-xl border ${violet ? "border-violet-400/40 bg-violet-500/10" : "border-cyan-400/40 bg-cyan-400/10"}`}>
                      <t.icon className={`h-6 w-6 ${violet ? "text-violet-300" : "text-cyan-300"}`} />
                    </span>
                    <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${violet ? "text-violet-300" : "text-slate-500"}`}>{t.tag}</span>
                  </div>
                  <h3 className="wstc-display mt-5 text-lg font-bold text-white">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.copy}</p>
                  <div className={`grid overflow-hidden transition-all duration-300 ${active ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <ul className="min-h-0 space-y-2">
                      {t.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                          <ArrowRight className={`h-3.5 w-3.5 ${violet ? "text-violet-300" : "text-cyan-300"}`} /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* PRIZES */}
        <section id="prizes" className="border-y border-slate-800/80 bg-slate-950/60 py-20">
          <div className="container mx-auto px-5">
            <h2 className="wstc-display text-center text-2xl md:text-4xl font-black text-white">Prizes & Global Prestige</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">A podium built for careers, not just certificates.</p>

            <div className="mt-16 grid items-end gap-5 sm:grid-cols-3">
              {[
                { place: "2nd", h: "h-40", prize: "Silver Laureate", copy: "Cash prize + patent advisory support", ring: "border-slate-400/40", glow: "shadow-[0_0_40px_rgba(148,163,184,0.2)]", text: "text-slate-200" },
                { place: "1st", h: "h-56", prize: "World Champion", copy: "Grand cash prize, global acceleration & investor showcase", ring: "border-cyan-400/70", glow: "shadow-[0_0_60px_rgba(6,182,212,0.35)]", text: "text-cyan-300" },
                { place: "3rd", h: "h-32", prize: "Bronze Laureate", copy: "Cash prize + mentorship programme", ring: "border-violet-400/50", glow: "shadow-[0_0_40px_rgba(139,92,246,0.25)]", text: "text-violet-300" },
              ].map((p) => (
                <div key={p.place} className="flex flex-col justify-end">
                  <div className={`rounded-2xl border ${p.ring} bg-slate-900/60 p-6 backdrop-blur ${p.glow}`}>
                    <Trophy className={`mx-auto h-8 w-8 ${p.text}`} />
                    <h3 className={`wstc-display mt-3 text-center text-lg font-black ${p.text}`}>{p.prize}</h3>
                    <p className="mt-2 text-center text-sm text-slate-400">{p.copy}</p>
                  </div>
                  <div className={`mt-4 ${p.h} rounded-t-2xl border-x border-t ${p.ring} bg-gradient-to-b from-slate-800/70 to-slate-900/10 grid place-items-start justify-center pt-5`}>
                    <span className={`wstc-display text-3xl font-black ${p.text}`}>{p.place}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-4">
              {["Cash prizes", "Patent support", "Global acceleration", "Worldwide fame"].map((b) => (
                <div key={b} className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-4 text-center text-xs uppercase tracking-[0.15em] text-slate-300">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="relative overflow-hidden py-20">
          <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="container relative mx-auto px-5">
            <div className="text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">Sponsor & Partner Portal</span>
              <h2 className="wstc-display mt-3 text-2xl md:text-4xl font-black text-white">Power the Future of Global Innovation</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                Put your brand at the centre of a championship that spans Hong Kong and the United Kingdom, and meet the
                student scientists, engineers and founders shaping the next decade.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                {[
                  { t: "Corporate partners", c: "Brand visibility across both stages, co-branded track ownership, and direct recruitment access to top-tier international student talent." },
                  { t: "Venture capital", c: "Front-row seats at the UK Grand Final investor showcase and early sight of deep-tech and biotech teams before anyone else." },
                  { t: "Academic institutions", c: "Joint research visibility, judging and mentorship roles, and a pipeline of motivated applicants across four disciplines." },
                ].map((v) => (
                  <div key={v.t} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur transition hover:border-cyan-400/40">
                    <h3 className="wstc-display text-base font-bold text-cyan-200">{v.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.c}</p>
                  </div>
                ))}
              </div>

              <form id="register" onSubmit={submit} className="rounded-2xl border border-cyan-400/30 bg-slate-900/60 p-7 backdrop-blur shadow-[0_0_48px_rgba(6,182,212,0.15)]">
                <h3 className="wstc-display text-lg font-bold text-white">Partnership Application</h3>
                <p className="mt-1 text-sm text-slate-400">Tell us how you would like to be involved.</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="org" className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-slate-400">Organization name</label>
                    <input id="org" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)]" placeholder="Acme Biosciences" />
                  </div>
                  <div>
                    <label htmlFor="contact" className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-slate-400">Contact person</label>
                    <input id="contact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)]" placeholder="Name and email" />
                  </div>
                  <div>
                    <label htmlFor="tier" className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-slate-400">Partnership tier</label>
                    <select id="tier" value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70">
                      {tiers.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="msg" className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-slate-400">Inquiry message</label>
                    <textarea id="msg" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70" placeholder="What would you like to sponsor or explore?" />
                  </div>
                </div>

                <button type="submit" className="wstc-display mt-6 w-full rounded-xl bg-cyan-400 py-4 text-xs font-black uppercase tracking-[0.15em] text-slate-950 shadow-[0_0_36px_rgba(6,182,212,0.45)] transition hover:scale-[1.02]">
                  [ Submit Partnership Inquiry ]
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Prefer email? <a href="mailto:jat@jathub.com" className="text-cyan-300 hover:underline">jat@jathub.com</a>
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-[#020509] py-12">
          <div className="container mx-auto grid gap-8 px-5 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-400/40 bg-cyan-400/10">
                  <Globe className="h-4 w-4 text-cyan-300" />
                </span>
                <span className="wstc-display text-sm font-black text-white">WSTC · JAT Hub</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                The World Science and Technology Championship is presented by JAT Hub CIC, a Community Interest Company
                registered in England and Wales.
              </p>
            </div>
            <div className="text-sm text-slate-500">
              <h4 className="mb-3 text-[11px] uppercase tracking-[0.2em] text-slate-300">Contact</h4>
              <p><a className="hover:text-cyan-300" href="mailto:jat@jathub.com">jat@jathub.com</a></p>
              <p><a className="hover:text-cyan-300" href="tel:+447766456376">+44 7766 456376</a></p>
              <p className="mt-3">Company Number: 17193758</p>
              <p>Suite 642 Chremma House, 14 London Road, Guildford, GU1 2AG</p>
            </div>
            <div>
              <h4 className="mb-3 text-[11px] uppercase tracking-[0.2em] text-slate-300">Follow</h4>
              <div className="flex gap-5">
                <a href="https://www.youtube.com/@JatHub" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-500 hover:text-cyan-300"><Youtube className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/company/jathub" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-cyan-300"><Linkedin className="h-5 w-5" /></a>
                <a href="https://www.instagram.com/jathub_uk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-cyan-300"><Instagram className="h-5 w-5" /></a>
              </div>
              <p className="mt-6 text-xs text-slate-600">© 2026 JAT Hub CIC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
