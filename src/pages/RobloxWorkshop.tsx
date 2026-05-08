import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Sparkles,
  Megaphone,
  Trophy,
  ArrowLeft,
  Globe,
  Users,
  Zap,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Clock,
  Calendar,
  Gift,
  UsersRound,
} from "lucide-react";
import heroImg from "@/assets/roblox-workshop-hero.jpg";

const REGISTER_URL =
  "https://events.roblox.com/public/events/bridging-the-gap-between-play-and-big-brand-marketing-xp200yu9ew";

const PAGE_URL = "https://jathub.com/roblox-workshop";
const SHARE_TEXT =
  "🎮 Roblox x JatHub: Build Marketing Games That Engage Millions — join this exclusive workshop!";

const RobloxWorkshop = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Roblox x JatHub Workshop — Build Marketing Games That Engage Millions";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const desc =
      "Exclusive online workshop with Roblox & JatHub. Learn how brands build immersive marketing games on Roblox. Limited spots — register now.";
    setMeta("description", desc);
    setMeta("og:title", "Roblox x JatHub: Build Marketing Games That Engage Millions", "property");
    setMeta("og:description", desc, "property");
    setMeta("og:image", `${window.location.origin}/jathub-og-image.jpg`, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Roblox x JatHub Workshop");
    setMeta("twitter:description", desc);

    return () => {
      document.title = prevTitle;
    };
  }, []);

  const learn = [
    { icon: Gamepad2, title: "Using Roblox for Brand Marketing", desc: "How brands turn play into reach." },
    { icon: Sparkles, title: "Designing Engaging Game Experiences", desc: "Mechanics that hook Gen Z." },
    { icon: Megaphone, title: "Campaign Storytelling Through Gameplay", desc: "Narratives that convert." },
    { icon: Trophy, title: "Real-World Brand Case Studies", desc: "What worked. What didn't." },
  ];

  const audience = [
    "Students & innovators",
    "Game developers & designers",
    "Marketing & branding enthusiasts",
    "Beginners welcome",
  ];

  const shareLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`,
    },
    {
      icon: Twitter,
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PAGE_URL)}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + PAGE_URL)}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/jathub",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="w-4 h-4" /> JatHub
          </Link>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#D4FF00] text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e6ff4d] transition"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        <div className="relative container mx-auto px-6 text-center max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
            Exclusive Roblox × JatHub Workshop
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            🎮 Roblox <span className="text-[#D4FF00]">×</span> JatHub:
            <br />
            Bridging the Gap Between Play and{" "}
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Big Brand Marketing
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Join an exclusive workshop to learn how brands use Roblox to create immersive marketing experiences.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[#D4FF00] text-black hover:bg-[#e6ff4d] font-bold text-base px-8 py-5 rounded-full shadow-[0_0_30px_rgba(212,255,0,0.45)] hover:scale-105 transition"
              asChild
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Register Now →
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-5"
              asChild
            >
              <a href="#session2">See What's Next</a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/50 uppercase tracking-widest">
            Online · Hosted by Roblox · Limited Spots
          </p>
        </div>
      </section>

      {/* BOTH EVENTS — VISIBLE AT TOP */}
      <section id="session2" className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
              <Sparkles className="w-3.5 h-3.5" /> Two Events. One Journey.
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* SESSION 1 — WORKSHOP */}
            <div className="relative bg-gradient-to-br from-fuchsia-600/15 via-purple-600/10 to-cyan-500/15 border border-white/15 rounded-2xl p-6 overflow-hidden">
              <div aria-hidden className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-fuchsia-500/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4FF00] font-bold mb-2">
                  <Clock className="w-3.5 h-3.5" /> Session 1 · May 19, 2026
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2">
                  Roblox × JatHub Workshop
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Learn how brands like Nike, Gucci, and Walmart build immersive marketing games on Roblox. Hands-on, beginner-friendly.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/60">Online</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/60">2 PM – 3 PM</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-red-500/15 text-red-300">Limited Spots</span>
                </div>
                <Button
                  size="sm"
                  className="bg-[#D4FF00] text-black hover:bg-[#e6ff4d] font-bold text-sm rounded-full px-5 py-2.5"
                  asChild
                >
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                    Register →
                  </a>
                </Button>
              </div>
            </div>

            {/* SESSION 2 — UCL DEMO DAY + IDEATHON */}
            <div className="relative bg-gradient-to-br from-cyan-600/15 via-blue-600/10 to-fuchsia-500/15 border border-white/15 rounded-2xl p-6 overflow-hidden">
              <div aria-hidden className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4FF00] font-bold mb-2">
                  <Calendar className="w-3.5 h-3.5" /> Session 2 · UCL Demo Day
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2">
                  UCL Demo Day + X-plore Ideathon
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Pitch at UCL Demo Day and enter the Roblox-sponsored Ideathon with a £250 prize pool for games that market big brands.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/60">UCL · Cambridge · Surrey</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#D4FF00]/15 text-[#D4FF00]">£250 Prize</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    className="bg-[#D4FF00] text-black hover:bg-[#e6ff4d] font-bold text-sm rounded-full px-5 py-2.5"
                    asChild
                  >
                    <a href="https://luma.com/i37y6d2k" target="_blank" rel="noopener noreferrer">
                      Register UCL →
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 text-sm rounded-full px-5 py-2.5"
                    asChild
                  >
                    <a href="https://chat.whatsapp.com/DlpJmvvOQJTFmFNS5VYtK2?mode=gi_t" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Why This <span className="text-[#D4FF00]">Matters</span>
          </h2>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Gaming isn't just entertainment — it's the new front line of marketing. Roblox hosts millions of daily
            players where brands like Nike, Gucci, and Walmart build entire worlds around their stories. This
            workshop hands you the playbook to design experiences that don't just advertise — they get played,
            shared, and remembered.
          </p>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-16 px-6 bg-gradient-to-b from-fuchsia-950/20 via-black to-cyan-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black">
              What You'll <span className="text-[#D4FF00]">Learn</span>
            </h2>
            <p className="mt-3 text-white/60">Four core skills. One unforgettable session.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learn.map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#D4FF00]/60 hover:bg-white/[0.07] transition"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4FF00]/15 flex items-center justify-center mb-3 group-hover:bg-[#D4FF00]/25 transition">
                  <item.icon className="w-5 h-5 text-[#D4FF00]" />
                </div>
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO + DETAILS */}
      <section id="details" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4FF00] font-bold mb-3">
              <Users className="w-4 h-4" /> Who Should Join
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">Built for Curious Minds</h2>
            <ul className="space-y-2.5">
              {audience.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4FF00] flex-shrink-0" />
                  <span className="text-base">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-500/15 via-purple-500/10 to-cyan-400/15 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4FF00] font-bold mb-3">
              <Zap className="w-4 h-4" /> Event Details
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">The Essentials</h2>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#D4FF00]" />
                <span><span className="text-white/60">Format:</span> <span className="font-semibold">Online</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-[#D4FF00]" />
                <span><span className="text-white/60">Hosted by:</span> <span className="font-semibold">Roblox</span> — exclusive for JatHub members</span>
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#D4FF00]" />
                <span><span className="text-white/60">Level:</span> <span className="font-semibold">Beginner to Intermediate</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4FF00]" />
                <span><span className="text-white/60">Spots:</span> <span className="font-semibold">Limited — first come, first served</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-black to-cyan-500/20" />
        <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4FF00]/10 blur-3xl" />
        <div className="relative container mx-auto max-w-3xl text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs uppercase tracking-widest font-bold mb-6">
            Limited Spots · Exclusive Access
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Don't Miss This <span className="text-[#D4FF00]">Opportunity</span>
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Roblox doesn't open the doors like this often. JatHub members get in first.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-[#D4FF00] text-black hover:bg-[#e6ff4d] font-bold text-lg px-12 py-7 rounded-full shadow-[0_0_40px_rgba(212,255,0,0.5)] hover:scale-105 transition"
              asChild
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Secure Your Spot →
              </a>
            </Button>
          </div>

          {/* Share */}
          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Share with your crew</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {shareLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${s.label}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-[#D4FF00]/50 transition text-sm"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">About JatHub</h2>
          <p className="text-white/70 leading-relaxed">
            JatHub is a non-profit community connecting young dreamers, builders, and creators with the people,
            tools, and opportunities reshaping tech, gaming, and innovation. We open doors — you walk through them.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4FF00]"
            >
              <ArrowLeft className="w-4 h-4" /> Back to JatHub
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">About JatHub</h2>
          <p className="text-white/70 leading-relaxed">
            JatHub is a non-profit community connecting young dreamers, builders, and creators with the people,
            tools, and opportunities reshaping tech, gaming, and innovation. We open doors — you walk through them.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4FF00]"
            >
              <ArrowLeft className="w-4 h-4" /> Back to JatHub
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-xs text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} JatHub · Roblox is a trademark of Roblox Corporation.
      </footer>
    </main>
  );
};

export default RobloxWorkshop;