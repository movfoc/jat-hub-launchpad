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
      isPast: false,
      registrationUrl: "https://luma.com/8axm43mw",
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Join us to learn, connect, and grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index}
              className={`border border-primary/30 bg-card/50 hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col ${
                event.isPast ? 'opacity-70' : ''
              }`}
            >
              <CardHeader>
                <p className="text-sm font-semibold text-primary">
                  {event.date}
                </p>
                <CardTitle className="text-xl text-white mt-2">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">
                  {event.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                {event.isPast ? (
                  <span className="text-muted-foreground font-semibold cursor-not-allowed">
                    See you next time
                  </span>
                ) : event.registrationUrl ? (
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0" asChild>
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                      Register Now →
                    </a>
                  </Button>
                ) : (
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0">
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
