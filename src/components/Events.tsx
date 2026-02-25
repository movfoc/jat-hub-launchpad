import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Events = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      date: "APR - JUN, 2026",
      title: "Jathub X-plore Marketing Ideathon",
      description: "Hybrid event. Click to learn more about the X-plore Marketing Ideathon.",
      isPast: false,
      registrationUrl: undefined,
      isXploreLink: true,
    },
    {
      date: "FEB 17, 2026",
      title: "Digital Marketing & Gamified Economy Summit",
      description: "10 AM - 5 PM at UCL School of Management, Canada One, Canary Wharf, E14 5AB.",
      isPast: true,
      registrationUrl: "https://luma.com/md1xg4iq",
    },
    {
      date: "JAN 27 - 29, 2026",
      title: "Global Game Jam 2026",
      description: "10 AM - 12 Noon at 01IFH02, Stag Hill, University Campus, Site, Guildford GU2 7XH.",
      isPast: true,
      registrationUrl: "https://luma.com/4j4bqbkx",
    },
    {
      date: "JAN 10, 2026",
      title: "JatHub: Visit College of Esports",
      description: "12:30 PM - 3:30 PM at Queen Elizabeth Olympic Park, Velodrome, Lee Valley VeloPark, Abercrombie Rd, London E20 3AB.",
      isPast: true,
      registrationUrl: "https://luma.com/i3n8n33d",
    },
    {
      date: "DEC 18, 2025",
      title: "UK House of Lords Roundtable: Decentralised Digital Economies and UK Growth",
      description: "10 AM - 12 Noon at House of Lords.",
      isPast: true,
      isInviteOnly: true,
      registrationUrl: undefined,
    },
    {
      date: "NOV 29 - DEC 7, 2025",
      title: "UK AI Agent Hackathon EP3 by ASI (Artificial Superintelligence Alliance)",
      description: "10 AM - 12 AM at Imperial College London. The Largest Web3 × AI Hackathon in Europe.",
      isPast: true,
      registrationUrl: undefined,
    },
    {
      date: "NOV 25, 2025",
      title: "JatHub: Visit OVHcloud London",
      description: "10:30 AM - 12:30 PM at OVHcloud London office.",
      isPast: true,
      registrationUrl: undefined,
    },
    {
      date: "NOV 14, 2025",
      title: "Visit Microsoft London- From Student to Tech Professional",
      description: "10 AM - 1 PM at Microsoft London office.",
      isPast: true,
      registrationUrl: "https://luma.com/8axm43mw",
    },
    {
      date: "OCT 29, 2025",
      title: "AI for Marketing & Media",
      description: "2 PM - 4 PM at University of Surrey APLab1",
      isPast: true,
      registrationUrl: "https://luma.com/4j4bqbkx",
    },
    {
      date: "OCT 1, 2025",
      title: "Part time Fair",
      description: "10 AM - 2 PM at University of Surrey Student Hall.",
      isPast: true,
      registrationUrl: undefined,
    },
  ];

  // Upcoming first, then past — already sorted by date descending
  const upcoming = events.filter(e => !e.isPast);
  const past = events.filter(e => e.isPast);
  const sorted = [...upcoming, ...past];

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 360;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="events" className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Jathub Events
            </h2>
            <p className="text-foreground/60 mt-3">
              Join us to learn, connect, and grow.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary/10" onClick={() => scroll("left")}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary/10" onClick={() => scroll("right")}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sorted.map((event, index) => (
            <Card
              key={index}
              className={`min-w-[300px] max-w-[340px] snap-start border border-primary/30 bg-card/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col backdrop-blur-sm shrink-0 ${
                event.isPast ? "opacity-60" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">
                    {event.date}
                  </p>
                  {event.isPast && (
                    <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-foreground/10 text-foreground/50 border-0">
                      Past Event
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-white mt-2">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <CardDescription className="text-foreground/60 text-sm">
                  {event.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                {event.isXploreLink ? (
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto text-sm" asChild>
                    <a href="/xplore" target="_blank" rel="noopener noreferrer">
                      Learn More →
                    </a>
                  </Button>
                ) : event.isPast ? (
                  <span className="text-foreground/50 font-medium text-sm">
                    See you next time
                  </span>
                ) : event.isInviteOnly ? (
                  <span className="text-foreground/50 font-medium text-sm">
                    By Invitation Only
                  </span>
                ) : event.registrationUrl ? (
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto text-sm" asChild>
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                      Register Now →
                    </a>
                  </Button>
                ) : (
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto text-sm">
                    Register Now →
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-foreground/40 text-xs mt-3 md:hidden text-center">
          ← Swipe to see more events →
        </p>
      </div>
    </section>
  );
};
