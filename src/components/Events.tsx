import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Events = () => {
  const events = [
    {
      date: "OCT 1, 2025",
      title: "Part time Fair",
      description: "10 AM - 2 PM at University of Surrey Student Hall.",
      isPast: true,
      registrationUrl: undefined,
    },
    {
      date: "OCT 29, 2025",
      title: "AI for Marketing & Media",
      description: "2 PM - 4 PM at University of Surrey APLab1",
      isPast: true,
      registrationUrl: "https://luma.com/4j4bqbkx",
    },
    {
      date: "NOV 14, 2025",
      title: "Visit Microsoft London- From Student to Tech Professional",
      description: "10 AM - 1 PM at Microsoft London office.",
      isPast: true,
      registrationUrl: "https://luma.com/8axm43mw",
    },
    {
      date: "NOV 25, 2025",
      title: "JatHub: Visit OVHcloud London",
      description: "10:30 AM - 12:30 PM at OVHcloud London office.",
      isPast: true,
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
      date: "DEC 18, 2025",
      title: "UK House of Lords Roundtable: Decentralised Digital Economies and UK Growth",
      description: "10 AM - 12 Noon at House of Lords.",
      isPast: false,
      isInviteOnly: true,
      registrationUrl: undefined,
    },
    {
      date: "JAN 17, 2026",
      title: "JatHub: Visit College of Esports",
      description: "12:30 PM - 3:30 PM at Queen Elizabeth Olympic Park, Velodrome, Lee Valley VeloPark, Abercrombie Rd, London E20 3AB.",
      isPast: false,
      registrationUrl: "https://luma.com/i3n8n33d",
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Upcoming Events
          </h2>
          <p className="text-foreground/60 mt-3">
            Join us to learn, connect, and grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card 
              key={index}
              className={`border border-primary/30 bg-card/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col backdrop-blur-sm ${
                event.isPast || event.isInviteOnly ? 'opacity-60' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <p className="text-sm font-semibold text-primary">
                  {event.date}
                </p>
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
                {event.isPast ? (
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
      </div>
    </section>
  );
};
