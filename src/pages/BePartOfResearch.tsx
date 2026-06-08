import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NIHRWidget } from "@/components/NIHRWidget";
import { Heart, Users, Target, UserPlus, Mail, CheckCircle2, ArrowRight } from "lucide-react";

const SIGNUP_URL = "https://bepartofresearch.nihr.ac.uk/register/";

const NHS_BLUE = "#005EB8";
const NHS_DARK = "#003087";

const BePartOfResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="px-5 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              <span className="block">Shorter wait times.</span>
              <span className="block">Better treatments.</span>
              <span className="block" style={{ color: "#D4FF00" }}>A healthier tomorrow.</span>
              <span className="block">It all starts with you.</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Medical breakthroughs don't just happen in laboratories—they happen because everyday people step forward. By joining the UK's Be Part of Research registry, you can help shape the future of health and social care.
            </p>
          </div>
        </section>

        {/* NIHR search widget */}
        <NIHRWidget />

        {/* Why your contribution matters */}
        <section className="px-5 sm:px-6 py-16 sm:py-20 section-glow">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3">
              Why Your Contribution Matters
            </h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              Your participation creates real impact across three powerful pillars.
            </p>
            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  icon: Heart,
                  title: "You don't have to be unwell",
                  body: "Researchers need healthy volunteers just as much as people with specific medical conditions to act as a baseline comparison.",
                },
                {
                  icon: Users,
                  title: "Represent your community",
                  body: "Health conditions affect different ethnicities, ages, and genders in unique ways. A diverse registry ensures new treatments work safely for everyone.",
                },
                {
                  icon: Target,
                  title: "Fight the conditions you care about",
                  body: "Whether it's mental health, dementia, cancer, or arthritis, you can specifically choose to hear about studies that matter to you.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-card/60 border border-border/30 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/15 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">{title}</h3>
                  <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-5 sm:px-6 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3">
              How It Works
            </h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              A simple 3-step process — no surprises, no pressure.
            </p>
            <div className="space-y-5 sm:space-y-6">
              {[
                {
                  step: "1",
                  icon: UserPlus,
                  title: "Create your free profile",
                  tag: "Takes 5 minutes",
                  body: "Sign up online or via the NHS App. You'll enter a few basic details and select the health conditions or areas of research you are interested in.",
                },
                {
                  step: "2",
                  icon: Mail,
                  title: "Get matched to studies",
                  tag: "No obligation",
                  body: "When researchers are looking for people like you, you'll receive an email with the details. You are never forced to take part; you can say no to any study, at any time.",
                },
                {
                  step: "3",
                  icon: CheckCircle2,
                  title: "Choose how you participate",
                  tag: "Flexible options",
                  body: "Some studies just require an online questionnaire from your couch. Others might involve a chat over the phone, trying a new digital health app, or visiting a local clinic.",
                },
              ].map(({ step, icon: Icon, title, tag, body }) => (
                <div
                  key={step}
                  className="bg-card/60 border border-border/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col sm:flex-row gap-5 sm:gap-7 items-start"
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:gap-3 sm:items-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-2xl text-black"
                      style={{ backgroundColor: "#D4FF00" }}
                    >
                      {step}
                    </div>
                    <Icon className="w-6 h-6 text-primary hidden sm:block" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{title}</h3>
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-primary/15 text-primary">
                        {tag}
                      </span>
                    </div>
                    <p className="text-foreground/75 text-base leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 sm:px-6 py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl">
            <div
              className="rounded-3xl p-8 sm:p-12 text-center"
              style={{
                background: `linear-gradient(135deg, ${NHS_BLUE} 0%, ${NHS_DARK} 100%)`,
              }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to make a difference?
              </h2>
              <p className="mt-5 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Joining the registry is completely free, entirely confidential, and you can withdraw at any time. Be the reason health care gets better.
              </p>
              <div className="mt-8">
                <a
                  href="https://nihr.us14.list-manage.com/subscribe?u=299dc02111e8a68172029095f&id=3b030a1027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold text-base sm:text-lg px-7 py-4 rounded-lg transition-all hover:brightness-95 min-h-11 text-black"
                  style={{ backgroundColor: "#D4FF00" }}
                >
                  Sign up to NIHR newsletter
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BePartOfResearch;