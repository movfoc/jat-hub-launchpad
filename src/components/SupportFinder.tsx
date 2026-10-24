import { useState } from "react";
import { Brain, Hospital, Users, CigaretteOff, HeartPulse, Phone, ExternalLink, MessageCircle, Siren, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = {
  icon: typeof Brain;
  name: string;
  category: string;
  summary: string;
  locations: string[];
  action: { label: string; href: string; external?: boolean };
};

const ALL_REGIONS = ["Surrey", "Reading", "Oxford"];

// Sourced from the organiser's event knowledge base (supported_services_and_partners).
// Services without a city in the knowledge base are listed as available across the series.
const services: Service[] = [
  {
    icon: HeartPulse,
    name: "One You Surrey",
    category: "Stop Smoking & Weight Management",
    summary: "Free 12-week stop smoking support with nicotine replacement therapy and a personal advisor, plus free adult weight management through Gloji, Slimming World vouchers, and Man v Fat football — for anyone living, working or registered with a GP in Surrey.",
    locations: ["Surrey"],
    action: { label: "Visit One You Surrey", href: "https://www.oneyousurrey.org.uk", external: true },
  },
  {
    icon: Globe,
    name: "Healthy Surrey",
    category: "Public Health Information & Resources",
    summary: "Surrey's public health information service — find services and support on healthy Surrey, including substance use services, food and nutrition, sexual health, mental health, and a wide range of other health and wellbeing resources.",
    locations: ["Surrey"],
    action: { label: "Visit Healthy Surrey", href: "https://www.healthysurrey.org.uk", external: true },
  },
  {
    icon: Brain,
    name: "Sport in Mind",
    category: "Mental Health & Sport",
    summary: "Free sport and physical activity sessions that help young people feel better, move more, and look after their mental health.",
    locations: ALL_REGIONS,
    action: { label: "Visit website", href: "https://www.sportinmind.org", external: true },
  },
  {
    icon: Hospital,
    name: "NHS Foundation Trusts & CAMHS",
    category: "NHS & Crisis Support",
    summary: "Local NHS teams offering children and young people's mental health services (CAMHS), crisis response, and mobile health clinics.",
    locations: ALL_REGIONS,
    action: { label: "Call NHS 111", href: "tel:111" },
  },
  {
    icon: Users,
    name: "Family & Community Hubs",
    category: "Family & Youth Support",
    summary: "Friendly local hubs offering family counselling, youth mentoring, and early support for parents, carers, and young people.",
    locations: ALL_REGIONS,
    action: { label: "Email the team", href: "mailto:jat@jathub.com?subject=Family%20%26%20youth%20support%20enquiry" },
  },
  {
    icon: CigaretteOff,
    name: "Substance & Quit Services",
    category: "Drug, Alcohol & Smoking Cessation",
    summary: "Confidential, judgement-free help with quitting smoking, alcohol and drug advice, and recovery support for young people and families.",
    locations: ALL_REGIONS,
    action: { label: "Visit Talk to Frank", href: "https://www.talktofrank.com", external: true },
  },
];

const locations = ["All Locations", "Surrey", "Reading", "Oxford"];

function askAssistant(service: string, location: string) {
  const where = location === "All Locations" ? "the Future of Youth events" : `the ${location} event`;
  window.dispatchEvent(new CustomEvent("youth-assistant-ask", { detail: `Tell me more about ${service} support at ${where}` }));
}

export function SupportFinder() {
  const [location, setLocation] = useState("All Locations");
  const shown = location === "All Locations" ? services : services.filter(s => s.locations.includes(location));

  return (
    <section id="support" className="scroll-mt-24 px-5 sm:px-6 py-16 sm:py-24" aria-labelledby="support-heading">
      <div className="container mx-auto max-w-6xl">
        {/* Urgent help banner */}
        <div role="note" className="mx-auto mb-10 flex max-w-3xl items-start gap-3 rounded-lg border border-primary/40 bg-card px-5 py-4 shadow-youth">
          <Siren className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-foreground">
            <span className="font-bold">In crisis or need urgent help?</span> Call{" "}
            <a href="tel:111" className="font-bold underline underline-offset-4 hover:text-primary">NHS 111 (Option 2)</a>{" "}
            or speak to on-site welfare staff.
          </p>
        </div>

        <h2 id="support-heading" className="text-center text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Local Support &amp; Wellbeing Finder</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Free, friendly support services you'll find across the Future of Youth series — pick a region to explore.
        </p>

        {/* Location filter tabs */}
        <div role="tablist" aria-label="Filter support services by location" className="mt-9 flex flex-wrap justify-center gap-2">
          {locations.map((loc) => (
            <Button
              key={loc}
              role="tab"
              aria-selected={location === loc}
              onClick={() => setLocation(loc)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                location === loc
                  ? "bg-gradient-to-r from-youth-gold to-youth-gold-light text-primary-foreground shadow-youth"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {loc}
            </Button>
          ))}
        </div>

        {/* Support cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((s) => (
            <article key={s.name} className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-youth">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent text-foreground ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-normal text-muted-foreground">
                  {s.locations.length === ALL_REGIONS.length ? "All Regions" : s.locations.join(", ")}
                </span>
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-normal text-primary">{s.category}</p>
              <h3 className="mt-1 text-lg font-bold text-foreground">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
                <a
                  href={s.action.href}
                  {...(s.action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-youth-gold to-youth-gold-light px-4 py-2 text-xs font-bold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-youth"
                >
                  {s.action.href.startsWith("tel:") ? <Phone className="h-3.5 w-3.5" aria-hidden="true" /> : <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                  {s.action.label}
                </a>
                <button
                  type="button"
                  onClick={() => askAssistant(s.name, location)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-accent"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Ask the assistant
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
