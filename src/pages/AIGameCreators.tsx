import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  MapPin,
  Bot,
  Trophy,
  Sparkles,
  Landmark,
  Users,
  Gamepad2,
  Rocket,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import jathubLogo from "@/assets/jathub-logo.jpg";
import img1 from "@/assets/bristol-workshop/bristol-1.jpg.asset.json";
import img2 from "@/assets/bristol-workshop/bristol-2.jpg.asset.json";
import img3 from "@/assets/bristol-workshop/bristol-3.jpg.asset.json";
import img4 from "@/assets/bristol-workshop/bristol-4.jpg.asset.json";
import img5 from "@/assets/bristol-workshop/bristol-5.jpg.asset.json";
import img6 from "@/assets/bristol-workshop/bristol-6.jpg.asset.json";

const LOCATIONS = ["All", "Bristol", "Guildford", "Reading", "London"] as const;

const courses = [
  {
    title: "AI Prototyping Masterclass",
    blurb:
      "From prompt to working app. Young creators turn an idea into a real, shareable product using Lovable's AI prototyping workflow.",
    locations: ["Bristol", "Guildford", "Reading", "London"],
    tag: "Ages 10–17 · 1 day",
    icon: Bot,
  },
  {
    title: "Roblox Studio 3D Game Design",
    blurb:
      "Lua scripting, 3D world building and game physics — participants design, test and publish their own playable Roblox experience.",
    locations: ["Bristol", "Guildford", "London"],
    tag: "Ages 9–16 · 4 weeks",
    icon: Gamepad2,
  },
  {
    title: "Roblox Creator Competition",
    blurb:
      "A regional build challenge with prizes supplied directly from Roblox, finishing with a public showcase for families and partners.",
    locations: ["Bristol", "Guildford", "Reading", "London"],
    tag: "Team entry · Showcase final",
    icon: Trophy,
  },
];

const stats = [
  {
    icon: MapPin,
    stat: "5+ UK Hubs",
    body: "Bristol, Guildford, Reading, London and expanding across regional library networks.",
  },
  {
    icon: Sparkles,
    stat: "Hands-On Tech",
    body: "Prompt-to-app AI workflows (Lovable) plus Lua scripting and Studio design (Roblox).",
  },
  {
    icon: Trophy,
    stat: "Official Competitions",
    body: "Exclusive Roblox prizes and public showcase events for young creators.",
  },
];

const gallery = [
  { src: img1.url, alt: "Young participants coding at the Bristol AI and game development workshop" },
  { src: img2.url, alt: "Children building 3D worlds in Roblox Studio" },
  { src: img3.url, alt: "Workshop participants exploring AI prototyping tools" },
  { src: img4.url, alt: "Hands-on game design session at Brooklands Park Community Centre" },
  { src: img5.url, alt: "Young creators presenting their interactive worlds" },
  { src: img6.url, alt: "Group photo with workshop partners and families" },
];

const AIGameCreators = () => {
  const [active, setActive] = useState<(typeof LOCATIONS)[number]>("All");
  const [form, setForm] = useState({ name: "", org: "", email: "", location: "", message: "" });

  const visible = courses.filter((c) => active === "All" || c.locations.includes(active));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.org.trim()) {
      toast.error("Please add your name, organisation and email.");
      return;
    }
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\nVenue / Location: ${form.location}\n\n${form.message}`
    );
    window.location.href = `mailto:jat@jathub.com?subject=${encodeURIComponent(
      "Bring JatHub to our library / venue"
    )}&body=${body}`;
    toast.success("Thanks! Your email draft is ready to send.");
  };

  return (
    <div className="min-h-screen bg-creator-bg text-creator-fg">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-creator-bg/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" aria-label="JatHub home" className="flex items-center gap-3">
            <img src={jathubLogo} alt="JatHub CIC logo" className="h-9 w-auto rounded" />
            <span className="hidden text-sm font-semibold tracking-wide text-creator-fg/80 sm:inline">
              AI &amp; Game Creators
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="#courses"
              className="hidden rounded-full px-4 py-2 text-sm text-creator-fg/70 transition-colors hover:text-creator-cyan sm:inline"
            >
              Courses
            </a>
            <a
              href="#libraries"
              className="hidden rounded-full px-4 py-2 text-sm text-creator-fg/70 transition-colors hover:text-creator-cyan sm:inline"
            >
              For Libraries
            </a>
            <Button asChild className="rounded-full bg-creator-purple text-white hover:bg-creator-purple/90">
              <a href="https://calendly.com/jathubpro/30min" target="_blank" rel="noopener noreferrer">
                Partner With Us
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 10%, hsl(258 90% 56% / 0.35), transparent 70%), radial-gradient(50% 50% at 85% 20%, hsl(189 94% 43% / 0.28), transparent 70%)",
          }}
        />
        <div className="container relative mx-auto max-w-4xl text-center">
          <span className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-creator-cyan/40 bg-creator-cyan/10 px-4 py-2 text-xs font-medium text-creator-cyan sm:text-sm">
            <Rocket className="h-4 w-4" />
            Supported by Roblox · Partnering with UK Libraries &amp; Community Hubs
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            From Tech Consumers to{" "}
            <span className="bg-gradient-to-r from-creator-purple to-creator-cyan bg-clip-text text-transparent">
              Future Builders
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-creator-fg/70 sm:text-xl">
            Empowering young minds across the UK with AI prototyping and Roblox Game Development.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-creator-purple px-8 py-6 text-base text-white transition-transform hover:scale-105 hover:bg-creator-purple/90"
            >
              <a href="#courses">
                Explore Upcoming Courses <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-creator-cyan/50 bg-transparent px-8 py-6 text-base text-creator-cyan transition-transform hover:scale-105 hover:bg-creator-cyan/10 hover:text-creator-cyan"
            >
              <a href="https://calendly.com/jathubpro/30min" target="_blank" rel="noopener noreferrer">
                Partner With Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact & mission */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black sm:text-4xl">Impact &amp; Mission</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-creator-fg/60">
            A community interest company delivering accessible, hands-on digital creation for young people.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stats.map(({ icon: Icon, stat, body }) => (
              <div
                key={stat}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-creator-cyan/40"
              >
                <Icon className="h-8 w-8 text-creator-cyan" />
                <p className="mt-5 text-2xl font-bold">{stat}</p>
                <p className="mt-2 leading-relaxed text-creator-fg/65">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-creator-purple/40 bg-creator-purple/10 p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <Landmark className="h-6 w-6 text-creator-purple-light" />
              <h3 className="text-xl font-bold sm:text-2xl">For Government &amp; Public Sector Partners</h3>
            </div>
            <p className="mt-4 leading-relaxed text-creator-fg/75">
              JatHub's community workshops are designed to plug straight into existing public programmes. Our delivery
              model supports UK digital literacy targets, drives footfall and engagement through Libraries Connected
              member services, and meets the outcomes required by youth digital inclusion grants — reaching young people
              in the venues they already trust.
            </p>
            <ul className="mt-6 grid gap-3 text-creator-fg/75 sm:grid-cols-3">
              <li className="rounded-xl bg-white/[0.04] px-4 py-3">Digital literacy &amp; skills outcomes</li>
              <li className="rounded-xl bg-white/[0.04] px-4 py-3">Library &amp; community hub engagement</li>
              <li className="rounded-xl bg-white/[0.04] px-4 py-3">Fully funded places for under-served youth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black sm:text-4xl">Courses &amp; Bootcamps</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-creator-fg/60">
            Filter by location to see what is running near you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((loc) => (
              <button
                key={loc}
                onClick={() => setActive(loc)}
                aria-pressed={active === loc}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                  active === loc
                    ? "border-creator-cyan bg-creator-cyan text-creator-bg"
                    : "border-white/15 text-creator-fg/70 hover:border-creator-cyan/50 hover:text-creator-cyan"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {visible.map(({ icon: Icon, title, blurb, tag, locations }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-creator-purple/50"
              >
                <Icon className="h-8 w-8 text-creator-purple-light" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-creator-fg/65">{blurb}</p>
                <p className="mt-5 text-xs uppercase tracking-wider text-creator-cyan">{tag}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {locations.map((l) => (
                    <span key={l} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-creator-fg/70">
                      {l}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="mt-10 text-center text-creator-fg/60">No courses listed in {active} yet — get in touch.</p>
          )}
        </div>
      </section>

      {/* Past success */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <span className="text-xs uppercase tracking-[0.2em] text-creator-cyan">Success spotlight</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Summer Bootcamp Recap: Bristol</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-creator-fg/70">
            Our AI &amp; Game Development Workshop at Brooklands Park Community Centre in Bristol — delivered with{" "}
            <strong className="text-creator-fg">iHere</strong> and{" "}
            <strong className="text-creator-fg">Me Time Cafe</strong> — saw young creators take ideas from prompt to
            playable, prototyping with Lovable and building 3D worlds in Roblox Studio.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover transition-transform hover:scale-[1.02]"
              />
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-8 rounded-full border-white/20 bg-transparent text-creator-fg hover:bg-white/10 hover:text-creator-cyan"
          >
            <Link to="/news/bristol-ai-game-workshop">Read the full recap</Link>
          </Button>
        </div>
      </section>

      {/* Library partnership */}
      <section id="libraries" className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-creator-cyan" />
                <span className="text-xs uppercase tracking-[0.2em] text-creator-cyan">Public partnerships</span>
              </div>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Bringing Digital Creativity to Every Community Library
              </h2>
              <p className="mt-5 leading-relaxed text-creator-fg/70">
                We work hand-in-hand with local library services, community centres and council teams to deliver fully
                funded, accessible digital education. JatHub brings the curriculum, the mentors and the equipment
                partnerships; the venue brings the community. Together we make creator-level technology available to
                every young person, regardless of background or budget.
              </p>
              <ul className="mt-6 space-y-3 text-creator-fg/70">
                <li>· Grant-supported delivery — free at the point of access for families</li>
                <li>· Safeguarding, DBS-checked facilitators and full risk assessments</li>
                <li>· Impact reporting for councils, funders and library networks</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-creator-bg/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold">Bring JatHub to Your Local Library / Venue</h3>
              <div className="mt-5 space-y-4">
                <Input
                  placeholder="Your name"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-white/15 bg-white/[0.04] text-creator-fg placeholder:text-creator-fg/40"
                />
                <Input
                  placeholder="Library, council or organisation"
                  maxLength={120}
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="border-white/15 bg-white/[0.04] text-creator-fg placeholder:text-creator-fg/40"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-white/15 bg-white/[0.04] text-creator-fg placeholder:text-creator-fg/40"
                />
                <Input
                  placeholder="Town / venue location"
                  maxLength={120}
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="border-white/15 bg-white/[0.04] text-creator-fg placeholder:text-creator-fg/40"
                />
                <Textarea
                  placeholder="Tell us about your community and what you'd like to run"
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border-white/15 bg-white/[0.04] text-creator-fg placeholder:text-creator-fg/40"
                />
                <Button type="submit" className="w-full rounded-full bg-creator-cyan py-6 text-creator-bg hover:bg-creator-cyan/90">
                  Send enquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-12 sm:px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <div className="text-sm leading-relaxed text-creator-fg/60">
            <img src={jathubLogo} alt="JatHub CIC logo" className="mb-4 h-10 w-auto rounded" />
            <p>JatHub CIC is a Community Interest Company registered in England and Wales.</p>
            <p className="mt-2">Company Number: 17193758</p>
            <p className="mt-2">
              Suite 642 Chremma House, 14 London Road, Guildford, Surrey, United Kingdom, GU1 2AG
            </p>
          </div>
          <div className="text-sm text-creator-fg/60">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-creator-fg/80">Partners</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.roblox.com" target="_blank" rel="noopener noreferrer" className="hover:text-creator-cyan">
                  Roblox
                </a>
              </li>
              <li>
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="hover:text-creator-cyan">
                  Lovable
                </a>
              </li>
              <li>
                <a
                  href="https://www.librariesconnected.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-creator-cyan"
                >
                  Libraries Connected
                </a>
              </li>
              <li>Local Authority Partners</li>
            </ul>
          </div>
          <div className="text-sm text-creator-fg/60">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-creator-fg/80">Get in touch</h3>
            <p>
              <a href="mailto:jat@jathub.com" className="hover:text-creator-cyan">
                jat@jathub.com
              </a>
            </p>
            <p className="mt-2">
              <a href="tel:+447766456376" className="hover:text-creator-cyan">
                +44 7766 456376
              </a>
            </p>
            <div className="mt-5 flex gap-5">
              <a
                href="https://www.linkedin.com/company/jathub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-creator-cyan"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/jathub_uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-creator-cyan"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.6l-5.2-6.8L5.5 22H2.4l7.6-8.7L1.2 2h6.8l4.7 6.2L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@JatHub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-creator-cyan"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <p className="container mx-auto mt-10 border-t border-white/10 pt-6 text-sm text-creator-fg/50">
          © 2026 JatHub CIC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AIGameCreators;
