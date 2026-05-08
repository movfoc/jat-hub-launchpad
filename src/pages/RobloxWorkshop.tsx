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

      {/* WHY THIS MATTERS */}
      <section className="py-20 px-6">
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
      <section className="py-20 px-6 bg-gradient-to-b from-fuchsia-950/20 via-black to-cyan-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black">
              What You'll <span className="text-[#D4FF00]">Learn</span>
            </h2>
            <p className="mt-3 text-white/60">Four core skills. One unforgettable session.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learn.map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4FF00]/60 hover:bg-white/[0.07] transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4FF00]/15 flex items-center justify-center mb-4 group-hover:bg-[#D4FF00]/25 transition">
                  <item.icon className="w-6 h-6 text-[#D4FF00]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO + DETAILS */}
      <section id="details" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4FF00] font-bold mb-4">
              <Users className="w-4 h-4" /> Who Should Join
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Built for Curious Minds</h2>
            <ul className="space-y-3">
              {audience.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4FF00] flex-shrink-0" />
                  <span className="text-base md:text-lg">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-500/15 via-purple-500/10 to-cyan-400/15 border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4FF00] font-bold mb-4">
              <Zap className="w-4 h-4" /> Event Details
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">The Essentials</h2>
            <ul className="space-y-4">
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
      <section className="py-24 px-6 relative overflow-hidden">
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

      {/* ABOUT JATHUB */}
      {/* X-PLORE IDEATHON + UCL DEMO DAY */}
      <section className="py-20 px-6 border-t border-white/10 bg-gradient-to-b from-black via-fuchsia-950/10 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-xs md:text-sm font-bold uppercase tracking-wider text-[#D4FF00]">
              <Sparkles className="w-4 h-4" /> What's Next
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black">
              Beyond the Workshop
            </h2>
            <p className="mt-3 text-white/60 max-w-2xl mx-auto">
              Take what you learn further. Two unmissable opportunities for JatHub builders.
            </p>
          </div>

          {/* UCL DEMO DAY - FEATURED FIRST */}
          <div className="relative bg-gradient-to-br from-fuchsia-600/20 via-purple-600/15 to-cyan-500/20 border border-white/15 rounded-3xl p-8 md:p-10 mb-8 overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4FF00] font-bold mb-3">
                <Calendar className="w-4 h-4" /> Featured · Happening Soon
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-3">
                UCL Demo Day
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-2xl">
                Join innovators from UCL, Cambridge, and Surrey for a high-energy demo day. Pitch, connect, and
                discover real opportunities with sponsors and industry leaders.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-[#D4FF00] text-xs font-bold uppercase tracking-wider mb-2">
                    <MessageCircle className="w-4 h-4" /> Stay in the Loop
                  </div>
                  <p className="text-sm text-white/70 mb-3">
                    Join the WhatsApp group for instant updates, sponsor prizes, and technical support.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/DlpJmvvOQJTFmFNS5VYtK2?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#D4FF00] transition"
                  >
                    Join WhatsApp →
                  </a>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-[#D4FF00] text-xs font-bold uppercase tracking-wider mb-2">
                    <UsersRound className="w-4 h-4" /> Find a Team
                  </div>
                  <p className="text-sm text-white/70">
                    Connect with fellow innovators from UCL, Cambridge, and Surrey to build your dream team.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[#D4FF00] text-black hover:bg-[#e6ff4d] font-bold rounded-full px-8 py-6 shadow-[0_0_30px_rgba(212,255,0,0.4)] hover:scale-105 transition"
                asChild
              >
                <a href="https://luma.com/i37y6d2k" target="_blank" rel="noopener noreferrer">
                  Register for UCL Demo Day →
                </a>
              </Button>
            </div>
          </div>

          {/* X-PLORE IDEATHON - ROBLOX SPONSORED */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300 font-bold">
                <Trophy className="w-4 h-4" /> Sponsored by Roblox
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4FF00]/15 border border-[#D4FF00]/30 text-[#D4FF00] text-xs font-bold">
                <Gift className="w-3.5 h-3.5" /> £250 Prize Pool
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              JatHub X-plore Ideathon
            </h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Roblox is officially sponsoring our X-plore Ideathon with a{" "}
              <span className="text-[#D4FF00] font-bold">£250 prize pool</span>. Build a Roblox game that doesn't
              just play well — it markets a big brand. Take the workshop's lessons and turn them into a winning
              entry that captures the imagination of Gen Z players and global brands alike.
            </p>
            <Link
              to="/x-plore"
              className="inline-flex items-center gap-2 text-sm font-bold text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 hover:border-[#D4FF00]/50 transition"
            >
              Explore the Ideathon →
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