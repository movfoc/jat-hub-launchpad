import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
    month: "October 2026",
    place: "University of Reading",
    sub: "London Road Campus",
    focus: "Youth Mental Health & Community Wellness",
  },
  {
    month: "November 2026",
    place: "Oxford North",
    sub: "Innovation District",
    focus: "Innovation, HealthTech & Youth Empowerment",
  },
  {
    month: "December 2026",
    place: "University of Surrey",
    sub: "& Surrey Research Park",
    focus: "BioTech, Health Research & Clinical Impact",
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

const partnerGroups = [
  {
    icon: GraduationCap,
    title: "University & Academic Partners",
    items: ["University of Reading", "University of Surrey", "Oxford North", "Surrey Business School"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & NHS Partners",
    items: ["NHS Service User Network (SUN)", "Berkshire Healthcare Charity (NHS Health Bus)", "Reading Hospital (Berkshire NHS)"],
  },
  {
    icon: Building2,
    title: "Community & Civic Partners",
    items: ["Reading Borough Council", "The Vine Centre", "JatHUB CIC", "Reading Singers CIC"],
  },
  {
    icon: Cpu,
    title: "Corporate & Tech Ecosystem",
    items: ["AWS", "AsianFood.ai", "JatLink", "JatPoint", "Artac (CodeLife.AI)"],
  },
];

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

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
      <div className="space-y-1.5">
        <Label htmlFor="fou-name" className="text-slate-700">Name</Label>
        <Input id="fou-name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="Your full name" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-org" className="text-slate-700">Organisation</Label>
        <Input id="fou-org" maxLength={120} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })}
          className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="Company, university or charity" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-email" className="text-slate-700">Email</Label>
        <Input id="fou-email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" placeholder="you@organisation.co.uk" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="fou-role" className="text-slate-700">How would you like to get involved?</Label>
        <select
          id="fou-role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {involvement.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 hover:scale-[1.02]"
        >
          Submit enquiry <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

const FutureOfUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-emerald-50/60 to-white px-5 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container mx-auto max-w-5xl">
            <a href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-sky-700 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </a>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700 ring-1 ring-sky-100">
              <Sparkles className="w-3.5 h-3.5" /> JAT Hub CIC Festival Series
            </span>
            <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              &ldquo;The Future of Us&rdquo;
              <span className="block text-sky-700">Wellbeing &amp; Community Festival Series 2026</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              A 3-Month Cross-Regional Campaign Championing Youth Mental Health, Health Equity, and Innovation.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-700 hover:scale-[1.03]">
                    Become a Sponsor / Partner
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white border-slate-200 sm:max-w-md">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-emerald-800 transition-all hover:bg-emerald-50 hover:scale-[1.03]"
              >
                View Event Tour Dates <CalendarDays className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Tour dates */}
        <section id="tour-dates" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center">The 3-Month Journey</h2>
            <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Three regions, three themes, one shared mission.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {tour.map((stop, i) => (
                <article
                  key={stop.month}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">{i + 1}</span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-emerald-700">{stop.month}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{stop.place}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin className="w-3.5 h-3.5" /> {stop.sub}
                  </p>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-slate-800">Focus: </span>{stop.focus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className="px-5 sm:px-6 py-16 sm:py-24 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center">Key Event Highlights &amp; Zones</h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {zones.map((z) => (
                <article key={z.title} className="rounded-2xl bg-white p-7 border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <z.icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{z.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{z.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="px-5 sm:px-6 py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center">Our Confirmed Partners &amp; Network</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerGroups.map((g) => (
                <div key={g.title} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50/60 to-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sky-700 ring-1 ring-sky-100">
                    <g.icon className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-800">{g.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="rounded-lg bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-100">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsor CTA */}
        <section id="sponsor" className="scroll-mt-24 px-5 sm:px-6 pb-20 sm:pb-28 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-emerald-600 p-1">
              <div className="rounded-[1.4rem] bg-white p-7 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Join Us as a Sponsor or Community Partner</h2>
                <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
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
        <section className="px-5 sm:px-6 pb-16 bg-white">
          <div className="container mx-auto max-w-5xl flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: "jathub.com", href: "https://jathub.com" },
              { label: "jatlink.uk", href: "https://jatlink.uk" },
              { label: "artac.uk", href: "https://artac.uk" },
            ].map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-slate-200 px-5 py-2 text-slate-600 transition-colors hover:border-sky-300 hover:text-sky-700">
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
