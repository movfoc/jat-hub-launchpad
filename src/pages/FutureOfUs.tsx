import { useState } from "react";
import { Button } from "@/components/ui/button";
import youthLogo from "@/assets/fou/future-of-youth-logo.png.asset.json";
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
  Mic,
  Utensils,
  HeartHandshake,
  Brain,
  MonitorSmartphone,
  Users,
  HeartPulse,
  GraduationCap,
  Building2,
  Cpu,
  Sparkles,
} from "lucide-react";

import readingUni from "@/assets/fou/reading-uni.png.asset.json";
import surreyLogo from "@/assets/fou/surrey.svg.asset.json";
import surreySportsPark from "@/assets/fou/surrey-sports-park.jpg.asset.json";
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
import oakleaf from "@/assets/fou/oakleaf.jpg.asset.json";
import healthySurrey from "@/assets/fou/healthy-surrey.png.asset.json";
import oneYouSurrey from "@/assets/fou/one-you-surrey.png.asset.json";

const CONTACT_EMAIL = "jat@jathub.com";

const tour = [
  {
    pill: "12 DEC 2026",
    place: "University of Surrey",
    sub: "Surrey Sport Park",
    focus: "Sport, Youth Voice & Community Wellness",
    tier: "Sponsor This Stop",
    accent: "from-youth-gold to-youth-gold-light",
  },
  {
    pill: "11 FEB 2027",
    place: "University of Reading",
    sub: "London Road Campus",
    focus: "Youth Mental Health & Community Wellness",
    tier: "Stall Space Available",
    accent: "from-youth-gold to-youth-gold-light",
  },
  {
    pill: "MAY 2027",
    place: "Oxford North",
    sub: "Innovation District",
    focus: "Innovation, BioTech, HealthTech & Youth Empowerment",
    tier: "Keynote Slots Open",
    accent: "from-youth-gold to-youth-gold-light",
  },
];

const zones = [
  {
    icon: HeartPulse,
    title: "Physical & Preventive Health",
    body: "Live health check-ups, biometric screening, tailored nutrition guidance, and preventive care stalls.",
  },
  {
    icon: Brain,
    title: "Mental Wellbeing & Mindfulness",
    body: "Dedicated mindfulness quiet spaces, de-stressing interactive workshops, and student mental health toolkits.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Wellness & Tech",
    body: "Interactive explorations of healthy gaming habits, digital resilience, and mental wellness in tech careers.",
  },
  {
    icon: Users,
    title: "SU & Community Engagement",
    body: "Student Union society booths, welfare campaigns, peer networking, and professional career pathways.",
  },
  {
    icon: Stethoscope,
    title: "Interactive Exhibition Zone",
    body: "Health stalls, NHS Mobile Bus, interactive wellness resources, and on-site physical and mental health check-ups.",
  },
  {
    icon: Mic,
    title: "Auditorium & Live Stage",
    body: "“Let's Talk” panel discussions pairing clinical experts with youth voices, keynote speeches, and live choir performances.",
  },
  {
    icon: Utensils,
    title: "Food & Community Village",
    body: "Local food trucks (pizza, rice, ice cream) and relaxed community networking spaces.",
  },
  {
    icon: HeartHandshake,
    title: "Charity Fundraising",
    body: "Direct proceeds supporting regional healthcare charities, including Berkshire Healthcare Charity and Royal Surrey Charity.",
  },
];

type Partner = { name: string; note?: string; logo: string; dark?: boolean; large?: boolean; aid?: boolean; fill?: boolean };

const partnerGroups: { id: string; icon: typeof GraduationCap; title: string; items: Partner[] }[] = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic & Sport Leadership",
    items: [
      { name: "University of Reading", logo: readingUni.url },
      { name: "University of Surrey", logo: surreyLogo.url, dark: true },
      { name: "Surrey Sports Park", logo: surreySportsPark.url },
    ],
  },
  {
    id: "enterprise",
    icon: Cpu,
    title: "Ecosystem & Enterprise",
    items: [
      { name: "Oxford North", logo: oxfordNorth.url, dark: true },
      { name: "JatPoint", logo: jatpointLogo.url },
      { name: "Artac Academy", note: "CodeLife.AI", logo: artacLogo.url },
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
      { name: "Oakleaf", note: "\n", logo: oakleaf.url, aid: true },
      { name: "Healthy Surrey", note: "#HealthySurrey", logo: healthySurrey.url, aid: true, large: true },
      { name: "One You Surrey", logo: oneYouSurrey.url, aid: true, large: true, fill: true },
      { name: "Crafting Smiles", logo: craftingSmiles.url, large: true },
      { name: "Tree of Life", logo: treeOfLife.url, large: true },
    ],
  },
];

const LogoCard = ({ p }: { p: Partner }) => (
  <div className="group relative flex h-full flex-col rounded-lg bg-card p-5 ring-1 ring-border shadow-youth transition-all duration-300 hover:-translate-y-1.5 hover:ring-primary/60 hover:shadow-youth">
    {p.aid && (
      <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-normal text-muted-foreground">
        {"\n"}
      </p>
    )}
    <div className={`flex items-center justify-center rounded-xl px-3 ${p.large ? "h-28" : "h-20"} ${p.dark ? "bg-youth-navy" : "bg-card"}`}>
      <img
        src={p.logo}
        alt={`${p.name} logo`}
        loading="lazy"
        className={`w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${p.fill ? "max-h-full" : p.large ? "max-h-20" : "max-h-14"}`}
      />
    </div>
    <p className="mt-3 text-center text-[13px] font-semibold leading-tight text-foreground">{p.name}</p>
    {p.note && <p className="mt-0.5 text-center text-[11px] text-muted-foreground">{p.note}</p>}
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
    const subject = `Future of Youth 2026 — ${form.role} enquiry`;
    const body = `Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\nInterested in: ${form.role}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Thanks! Your email draft is ready to send.");
  };

  const field = "bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary";

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
      <div className="space-y-1.5">
        <Label htmlFor="fou-name" className="text-foreground">Name</Label>
        <Input id="fou-name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field} placeholder="Your full name" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-org" className="text-foreground">Organisation</Label>
        <Input id="fou-org" maxLength={120} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
          className={field} placeholder="Company, university or charity" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-email" className="text-foreground">Email</Label>
        <Input id="fou-email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field} placeholder="you@organisation.co.uk" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-role" className="text-foreground">How would you like to get involved?</Label>
        <select
          id="fou-role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full h-10 rounded-md border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {involvement.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <Button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-youth-gold to-youth-gold-light px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-youth"
        >
          Submit enquiry <ArrowRight className="w-4 h-4" />
        </Button>
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
    <div className="youth-theme min-h-screen bg-background text-foreground selection:bg-primary/60">
      {/* Floating navbar */}
      <header className="fixed inset-x-0 top-3 z-50 px-4">
        <nav className="container mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border border-border bg-card/80 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-youth">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> <span className="hidden xs:inline">JAT Hub</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-secondary0 after:transition-all hover:after:w-full">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#sponsor" className="rounded-full bg-gradient-to-r from-youth-gold to-youth-gold-light px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-youth">
            Join as Sponsor
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="container mx-auto max-w-5xl relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-normal text-foreground shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> JAT Hub CIC Festival Series
            </span>
            <h1 className="mt-7">
              <img src={youthLogo.url} alt="Future of Youth" className="w-full max-w-[620px] h-auto" />
            </h1>
            <p className="mt-6 max-w-4xl text-3xl sm:text-5xl font-black leading-tight text-foreground">
              Wellbeing &amp; Community Festival Series 2026
            </p>
            <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              A Cross-Regional Campaign Championing Youth Mental Health, Health Equity, and Innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-youth-gold to-youth-gold-light px-7 py-3.5 text-sm sm:text-base font-bold text-primary-foreground transition-all hover:scale-[1.04] hover:shadow-youth">
                    Become a Sponsor / Partner
                  </Button>
                </DialogTrigger>
                <DialogContent className="youth-theme border-border bg-card sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-foreground">Partner with Future of Youth</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Tell us a little about you and we&rsquo;ll be in touch within two working days.
                    </DialogDescription>
                  </DialogHeader>
                  <PartnerForm compact />
                </DialogContent>
              </Dialog>
              <a
                href="#tour-dates"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground transition-all hover:scale-[1.04] hover:border-primary hover:text-foreground"
              >
                View Event Tour Dates <CalendarDays className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Tour dates */}
        <section id="tour-dates" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-foreground">The Cross Region Journey</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">Three regions, three themes, one shared mission.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {tour.map((stop, i) => (
                <article
                  key={stop.pill}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-youth"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stop.accent}`} />
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full bg-gradient-to-r ${stop.accent} px-3 py-1 text-[11px] font-black tracking-normal text-foreground`}>
                      {stop.pill}
                    </span>
                    <span className="text-4xl font-black text-youth-navy/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{stop.place}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" /> {stop.sub}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Focus: </span>{stop.focus}
                  </p>
                  <a href="#sponsor" className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-normal text-foreground transition-all hover:bg-accent">
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
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Key Highlights &amp; Impact Zones</h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {zones.map((z) => (
                <article key={z.title} className="group rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-youth">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent text-foreground ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                    <z.icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{z.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{z.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner ecosystem */}
        <section id="partners" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Partner &amp; Sponsor Ecosystem</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">Universities, NHS teams, councils and enterprise innovators backing the series.</p>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {[{ id: "all", title: "All Partners", icon: Sparkles }, ...partnerGroups].map((g) => (
                <Button
                  key={g.id}
                  onClick={() => setTab(g.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    tab === g.id
                      ? "bg-gradient-to-r from-youth-gold to-youth-gold-light text-primary-foreground shadow-youth"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <g.icon className="w-3.5 h-3.5" /> {g.title}
                </Button>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {shown.map((g) => (
                <div key={g.id}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-foreground ring-1 ring-primary/30">
                      <g.icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-normal text-muted-foreground">{g.title}</h3>
                    <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
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
            <div className="rounded-lg bg-gradient-to-br from-youth-gold via-youth-gold-light to-youth-gold p-px shadow-youth">
              <div className="rounded-lg bg-card p-7 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-black text-foreground">Join Us as a Sponsor or Community Partner</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
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
                className="rounded-full border border-border bg-card px-5 py-2 text-muted-foreground transition-all hover:border-primary hover:text-foreground">
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