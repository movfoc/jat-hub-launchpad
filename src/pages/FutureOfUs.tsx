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

import readingUni from "@/assets/fou/reading-uni.png.asset.json";
import surreyLogo from "@/assets/fou/surrey.svg.asset.json";
import oxfordNorth from "@/assets/fou/oxford-north.jpg.asset.json";
import nhsBerkshire from "@/assets/fou/nhs-berkshire.webp.asset.json";
import berkshireCharity from "@/assets/fou/berkshire-charity.webp.asset.json";
import readingCouncil from "@/assets/fou/reading-council.png.asset.json";
import vineCentre from "@/assets/fou/vine-centre.avif.asset.json";
import acreLogo from "@/assets/fou/acre.png.asset.json";
import jatpointLogo from "@/assets/fou/jatpoint.png.asset.json";
import artacLogo from "@/assets/fou/artac.png.asset.json";
import craftingSmiles from "@/assets/fou/crafting-smiles.jpg.asset.json";
import treeOfLife from "@/assets/fou/tree-of-life.jpg.asset.json";
import oxfordHealthCharity from "@/assets/fou/oxford-health-charity.jpg.asset.json";
import nihrBpor from "@/assets/fou/nihr-bpor.jpg.asset.json";

const CONTACT_EMAIL = "jat@jathub.com";

const tour = [
  {
    pill: "OCT 2026",
    place: "University of Reading",
    sub: "London Road Campus",
    focus: "Youth Mental Health & Community Wellness",
    tier: "Stall Space Available",
    accent: "from-emerald-400 to-teal-300",
  },
  {
    pill: "NOV 2026",
    place: "Oxford North",
    sub: "Innovation District",
    focus: "Innovation, HealthTech & Youth Empowerment",
    tier: "Keynote Slots Open",
    accent: "from-lime-400 to-emerald-300",
  },
  {
    pill: "DEC 2026",
    place: "University of Surrey",
    sub: "& Surrey Research Park",
    focus: "BioTech, Health Research & Clinical Impact",
    tier: "Sponsor This Stop",
    accent: "from-teal-300 to-sky-300",
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

type Partner = { name: string; note?: string; logo: string; dark?: boolean };

const partnerGroups: { id: string; icon: typeof GraduationCap; title: string; items: Partner[] }[] = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic Leadership",
    items: [
      { name: "University of Reading", logo: readingUni.url },
      { name: "University of Surrey", logo: surreyLogo.url, dark: true },
      { name: "Oxford North", logo: oxfordNorth.url, dark: true },
    ],
  },
  {
    id: "health",
    icon: Stethoscope,
    title: "Healthcare & NHS",
    items: [
      { name: "Berkshire Healthcare NHS", note: "NHS Foundation Trust", logo: nhsBerkshire.url },
      { name: "Berkshire Healthcare Charity", note: "NHS Health Bus", logo: berkshireCharity.url },
      { name: "Oxford Health Charity", logo: oxfordHealthCharity.url },
      { name: "NIHR", note: "Be Part of Research", logo: nihrBpor.url },
    ],
  },
  {
    id: "civic",
    icon: Building2,
    title: "Civic & Community",
    items: [
      { name: "Reading Borough Council", logo: readingCouncil.url },
      { name: "The Vine Centre", logo: vineCentre.url },
      { name: "ACRE", logo: acreLogo.url },
      { name: "Crafting Smiles", logo: craftingSmiles.url },
      { name: "Tree of Life", logo: treeOfLife.url },
    ],
  },
  {
    id: "enterprise",
    icon: Cpu,
    title: "Ecosystem & Enterprise",
    items: [
      { name: "JatPoint", logo: jatpointLogo.url },
      { name: "Artac Academy", note: "CodeLife.AI", logo: artacLogo.url },
    ],
  },
];

const LogoCard = ({ p }: { p: Partner }) => (
  <div className="group relative rounded-2xl bg-white p-5 ring-1 ring-emerald-900/10 shadow-[0_10px_30px_-18px_rgba(6,78,59,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:ring-emerald-400/60 hover:shadow-[0_20px_45px_-18px_rgba(16,185,129,0.5)]">
    <div className={`flex h-20 items-center justify-center rounded-xl px-3 ${p.dark ? "bg-slate-900" : "bg-white"}`}>
      <img
        src={p.logo}
        alt={`${p.name} logo`}
        loading="lazy"
        className="max-h-14 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <p className="mt-3 text-center text-[13px] font-semibold leading-tight text-slate-800">{p.name}</p>
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

  const field = "bg-white border-emerald-900/15 text-slate-900 placeholder:text-slate-400 focus-visible:ring-emerald-400";

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
      <div className="space-y-1.5">
        <Label htmlFor="fou-name" className="text-slate-700">Name</Label>
        <Input id="fou-name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field} placeholder="Your full name" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-org" className="text-slate-700">Organisation</Label>
        <Input id="fou-org" maxLength={120} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
          className={field} placeholder="Company, university or charity" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-email" className="text-slate-700">Email</Label>
        <Input id="fou-email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field} placeholder="you@organisation.co.uk" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-role" className="text-slate-700">How would you like to get involved?</Label>
        <select
          id="fou-role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full h-10 rounded-md border border-emerald-900/15 bg-white px-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          {involvement.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_12px_35px_-10px_rgba(16,185,129,0.8)]"
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
    <div className="min-h-screen bg-[#f4fbf6] text-slate-700 selection:bg-emerald-200/60">
      {/* Floating navbar */}
      <header className="fixed inset-x-0 top-3 z-50 px-4">
        <nav className="container mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border border-emerald-900/10 bg-white/80 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-[0_10px_35px_-20px_rgba(6,78,59,0.5)]">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> <span className="hidden xs:inline">JAT Hub</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="relative transition-colors hover:text-emerald-700 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#sponsor" className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_30px_-8px_rgba(16,185,129,0.8)]">
            Join as Sponsor
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-emerald-300/40 blur-[120px]" />
            <div className="absolute top-24 right-0 h-[22rem] w-[22rem] rounded-full bg-lime-200/60 blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-teal-200/50 blur-[110px]" />
            <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(16,185,129,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.18)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          </div>
          <div className="container mx-auto max-w-5xl relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> JAT Hub CIC Festival Series
            </span>
            <h1 className="mt-7 text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
              &ldquo;The Future of Us&rdquo;
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-lime-500 bg-clip-text text-transparent">
                Wellbeing &amp; Community Festival Series 2026
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              A Cross-Regional Campaign Championing Youth Mental Health, Health Equity, and Innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:scale-[1.04] hover:shadow-[0_18px_45px_-12px_rgba(16,185,129,0.9)]">
                    Become a Sponsor / Partner
                  </button>
                </DialogTrigger>
                <DialogContent className="border-emerald-900/10 bg-white sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-slate-900">Partner with The Future of Us</DialogTitle>
                    <DialogDescription className="text-slate-500">
                      Tell us a little about you and we&rsquo;ll be in touch within two working days.
                    </DialogDescription>
                  </DialogHeader>
                  <PartnerForm compact />
                </DialogContent>
              </Dialog>
              <a
                href="#tour-dates"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-800 transition-all hover:scale-[1.04] hover:border-emerald-400 hover:text-emerald-700"
              >
                View Event Tour Dates <CalendarDays className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Tour dates */}
        <section id="tour-dates" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">The Cross Region Journey</h2>
            <p className="mt-3 text-center text-slate-500 max-w-2xl mx-auto">Three regions, three themes, one shared mission.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {tour.map((stop, i) => (
                <article
                  key={stop.pill}
                  className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_25px_60px_-30px_rgba(16,185,129,0.8)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stop.accent}`} />
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full bg-gradient-to-r ${stop.accent} px-3 py-1 text-[11px] font-black tracking-widest text-slate-900`}>
                      {stop.pill}
                    </span>
                    <span className="text-4xl font-black text-emerald-900/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{stop.place}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin className="w-3.5 h-3.5" /> {stop.sub}
                  </p>
                  <p className="mt-5 border-t border-emerald-900/10 pt-4 text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-slate-900">Focus: </span>{stop.focus}
                  </p>
                  <a href="#sponsor" className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700 transition-all hover:bg-emerald-100">
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
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">Key Highlights &amp; Impact Zones</h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {zones.map((z) => (
                <article key={z.title} className="group rounded-3xl border border-emerald-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_25px_60px_-30px_rgba(16,185,129,0.7)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 text-emerald-600 ring-1 ring-emerald-200 transition-transform duration-300 group-hover:scale-110">
                    <z.icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{z.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{z.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner ecosystem */}
        <section id="partners" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">Partner &amp; Sponsor Ecosystem</h2>
            <p className="mt-3 text-center text-slate-500 max-w-2xl mx-auto">Universities, NHS teams, councils and enterprise innovators backing the series.</p>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {[{ id: "all", title: "All Partners", icon: Sparkles }, ...partnerGroups].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setTab(g.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    tab === g.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-[0_10px_30px_-12px_rgba(16,185,129,0.9)]"
                      : "border border-emerald-900/10 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
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
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                      <g.icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-600">{g.title}</h3>
                    <span className="h-px flex-1 bg-gradient-to-r from-emerald-900/15 to-transparent" />
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
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-300 via-teal-200 to-lime-200 p-px shadow-[0_30px_80px_-45px_rgba(16,185,129,0.9)]">
              <div className="rounded-[2rem] bg-white p-7 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Join Us as a Sponsor or Community Partner</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
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
                className="rounded-full border border-emerald-900/10 bg-white px-5 py-2 text-slate-600 transition-all hover:border-emerald-400 hover:text-emerald-700">
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