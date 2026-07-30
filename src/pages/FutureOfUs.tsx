import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Stethoscope,
  Mic2,
  UtensilsCrossed,
  HeartHandshake,
  GraduationCap,
  Building2,
  Cpu,
  Sparkles,
} from "lucide-react";

const CONTACT_EMAIL = "jat@jathub.com";

const tour = [
  {
    pill: "OCT 2026",
    place: "University of Reading",
    sub: "London Road Campus",
    focus: "Youth Mental Health & Community Wellness",
    tier: "Stall Space Available",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    pill: "NOV 2026",
    place: "Oxford North",
    sub: "Innovation District",
    focus: "Innovation, HealthTech & Youth Empowerment",
    tier: "Keynote Slots Open",
    accent: "from-violet-400 to-fuchsia-400",
  },
  {
    pill: "DEC 2026",
    place: "University of Surrey",
    sub: "& Surrey Research Park",
    focus: "BioTech, Health Research & Clinical Impact",
    tier: "Sponsor This Stop",
    accent: "from-teal-300 to-emerald-400",
  },
];

const zones = [
  {
    icon: Stethoscope,
    title: "Interactive Exhibition Zone",
    body: "Health stalls, NHS Mobile Bus, interactive wellness resources, and on-site physical and mental health check-ups.",
  },
  {
    icon: Mic2,
    title: "Auditorium & Live Stage",
    body: "\u201CLet\u2019s Talk\u201D panel discussions pairing clinical experts with youth voices, keynote speeches, and live choir performances.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Community Village",
    body: "Local food trucks (pizza, rice, ice cream) and relaxed community networking spaces.",
  },
  {
    icon: HeartHandshake,
    title: "Charity Fundraising",
    body: "Direct proceeds supporting regional healthcare charities, including Berkshire Healthcare Charity and Royal Surrey Charity.",
  },
];

type Partner = { name: string; note?: string };

const partnerGroups: { id: string; icon: typeof GraduationCap; title: string; items: Partner[] }[] = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic Leadership",
    items: [
      { name: "University of Reading" },
      { name: "University of Surrey" },
      { name: "Oxford North" },
      { name: "Surrey Business School" },
    ],
  },
  {
    id: "health",
    icon: Stethoscope,
    title: "Healthcare & NHS",
    items: [
      { name: "NHS SUN", note: "Service User Network" },
      { name: "Berkshire Healthcare Charity", note: "NHS Health Bus" },
      { name: "Reading Hospital", note: "Berkshire NHS" },
    ],
  },
  {
    id: "civic",
    icon: Building2,
    title: "Civic & Community",
    items: [{ name: "Reading Borough Council" }, { name: "The Vine Centre" }, { name: "ACRE" }],
  },
  {
    id: "enterprise",
    icon: Cpu,
    title: "Ecosystem & Enterprise",
    items: [
      { name: "Visa", note: "Reading" },
      { name: "JatLink" },
      { name: "JatPoint" },
      { name: "Artac", note: "CodeLife.AI" },
    ],
  },
];

const monogram = (name: string) =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter((w) => w.length > 2 || w === w.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const LogoCard = ({ p }: { p: Partner }) => (
  <div className="group relative rounded-2xl bg-white/95 p-5 ring-1 ring-white/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(56,189,248,0.45)]">
    <div className="flex h-16 items-center justify-center">
      <span className="text-2xl font-black tracking-tight bg-gradient-to-br from-sky-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
        {monogram(p.name)}
      </span>
    </div>
    <p className="mt-2 text-center text-[13px] font-semibold leading-tight text-slate-800">{p.name}</p>
    {p.note && <p className="mt-0.5 text-center text-[11px] text-slate-500">{p.note}</p>}
    <span className="mt-3 mx-auto block w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
      Confirmed Partner
    </span>
  </div>
);

const involvement = ["Sponsor", "Speaker", "Stall Holder", "Volunteer"];

type FormProps = { compact?: boolean };

const PartnerForm = ({ compact }: FormProps) => {
  const [form, setForm] = useState({ name: "", org: "", email: "", role: involvement[0] });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const org = form.org.trim();
    const email = form.email.trim();
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter your name and a valid email address.");
      return;
    }
    const subject = `The Future of Us 2026 — ${form.role} enquiry`;
    const body = `Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\nInterested in: ${form.role}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Thanks! Your email draft is ready to send.");
  };

  const field = "bg-white/5 border-white/15 text-white placeholder:text-slate-500 focus-visible:ring-sky-400";

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
      <div className="space-y-1.5">
        <Label htmlFor="fou-name" className="text-slate-300">Name</Label>
        <Input id="fou-name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field} placeholder="Your full name" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-org" className="text-slate-300">Organisation</Label>
        <Input id="fou-org" maxLength={120} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
          className={field} placeholder="Company, university or charity" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-email" className="text-slate-300">Email</Label>
        <Input id="fou-email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field} placeholder="you@organisation.co.uk" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-role" className="text-slate-300">How would you like to get involved?</Label>
        <select
          id="fou-role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full h-10 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          {involvement.map((i) => <option key={i} className="bg-slate-900">{i}</option>)}
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-6px_rgba(45,212,191,0.7)]"
        >
          Submit enquiry <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

const navLinks = [
  { label: "Tour Dates", href: "#tour-dates" },
  { label: "Impact Zones", href: "#zones" },
  { label: "Partners", href: "#partners" },
];

const FutureOfUs = () => {
  const [tab, setTab] = useState<string>("all");
  const shown = tab === "all" ? partnerGroups : partnerGroups.filter((g) => g.id === tab);

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-200 selection:bg-cyan-300/30">
      {/* Floating navbar */}
      <header className="fixed inset-x-0 top-3 z-50 px-4">
        <nav className="container mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)]">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-4 h-4" /> <span className="hidden xs:inline">JAT Hub</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#sponsor" className="rounded-full bg-gradient-to-r from-sky-400 to-teal-300 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_30px_-4px_rgba(56,189,248,0.8)]">
            Join as Sponsor
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-sky-500/25 blur-[120px] animate-pulse" />
            <div className="absolute top-24 right-0 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/20 blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-teal-400/20 blur-[110px]" />
            <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          </div>
          <div className="container mx-auto max-w-5xl relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-md shadow-[0_0_30px_-8px_rgba(34,211,238,0.8)]">
              <Sparkles className="w-3.5 h-3.5" /> JAT Hub CIC Festival Series
            </span>
            <h1 className="mt-7 text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-white">
              &ldquo;The Future of Us&rdquo;
              <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
                Wellbeing &amp; Community Festival Series 2026
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed">
              A 3-Month Cross-Regional Campaign Championing Youth Mental Health, Health Equity, and Innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 px-7 py-3.5 text-sm sm:text-base font-bold text-slate-950 transition-all hover:scale-[1.04] hover:shadow-[0_0_50px_-8px_rgba(45,212,191,0.9)]">
                    Become a Sponsor / Partner
                  </button>
                </DialogTrigger>
                <DialogContent className="border-white/10 bg-slate-950/90 backdrop-blur-xl sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-white">Partner with The Future of Us</DialogTitle>
                    <DialogDescription className="text-slate-400">
                      Tell us a little about you and we&rsquo;ll be in touch within two working days.
                    </DialogDescription>
                  </DialogHeader>
                  <PartnerForm compact />
                </DialogContent>
              </Dialog>
              <a
                href="#tour-dates"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-[1.04] hover:border-cyan-300/50 hover:bg-white/10"
              >
                View Event Tour Dates <CalendarDays className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Tour dates */}
        <section id="tour-dates" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-white">The 3-Month Journey</h2>
            <p className="mt-3 text-center text-slate-400 max-w-2xl mx-auto">Three regions, three themes, one shared mission.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {tour.map((stop, i) => (
                <article
                  key={stop.pill}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_25px_70px_-25px_rgba(56,189,248,0.7)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${stop.accent} opacity-70`} />
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${stop.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`} />
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full bg-gradient-to-r ${stop.accent} px-3 py-1 text-[11px] font-black tracking-widest text-slate-950`}>
                      {stop.pill}
                    </span>
                    <span className="text-4xl font-black text-white/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{stop.place}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin className="w-3.5 h-3.5" /> {stop.sub}
                  </p>
                  <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
                    <span className="font-semibold text-white">Focus: </span>{stop.focus}
                  </p>
                  <a href="#sponsor" className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-200 transition-all hover:border-cyan-300/50 hover:bg-cyan-300/10">
                    {stop.tier} <ArrowRight className="w-3 h-3" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zones */}
        <section id="zones" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-white">Key Highlights &amp; Impact Zones</h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {zones.map((z) => (
                <article key={z.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300/40 hover:shadow-[0_25px_70px_-25px_rgba(167,139,250,0.6)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-400/20 text-cyan-200 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    <z.icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{z.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{z.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner ecosystem */}
        <section id="partners" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-white">Partner &amp; Sponsor Ecosystem</h2>
            <p className="mt-3 text-center text-slate-400 max-w-2xl mx-auto">Universities, NHS teams, councils and enterprise innovators backing the series.</p>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {[{ id: "all", title: "All Partners", icon: Sparkles }, ...partnerGroups].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setTab(g.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    tab === g.id
                      ? "bg-gradient-to-r from-sky-400 to-teal-300 text-slate-950 shadow-[0_0_30px_-8px_rgba(56,189,248,0.9)]"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-white"
                  }`}
                >
                  <g.icon className="w-3.5 h-3.5" /> {g.title}
                </button>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {shown.map((g) => (
                <div key={g.id}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-cyan-200 ring-1 ring-white/10">
                      <g.icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">{g.title}</h3>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {g.items.map((p) => <LogoCard key={p.name} p={p} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsor CTA */}
        <section id="sponsor" className="scroll-mt-24 px-5 sm:px-6 pb-20 sm:pb-28">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-400/60 via-cyan-300/40 to-violet-400/60 p-px shadow-[0_30px_90px_-40px_rgba(56,189,248,0.9)]">
              <div className="rounded-[2rem] bg-[#070a14]/95 p-7 sm:p-10 backdrop-blur-xl">
                <h2 className="text-2xl sm:text-3xl font-black text-white">Join Us as a Sponsor or Community Partner</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">
                  Help us bridge the gap between healthcare, university talent, and regional communities. We offer headline sponsorship, stall space, speaking slots, and brand showcase opportunities.
                </p>
                <div className="mt-8">
                  <PartnerForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network links */}
        <section className="px-5 sm:px-6 pb-16">
          <div className="container mx-auto max-w-5xl flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: "jathub.com", href: "https://jathub.com" },
              { label: "jatlink.uk", href: "https://jatlink.uk" },
              { label: "artac.uk", href: "https://artac.uk" },
            ].map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-slate-300 backdrop-blur-md transition-all hover:border-cyan-300/50 hover:text-cyan-200">
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FutureOfUs;
