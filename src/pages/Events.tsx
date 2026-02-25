import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { timelineEvents } from "@/data/eventsData";

const Events = () => {
  const { hash } = useLocation();
  const eventRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Auto-scroll to hash target
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timeout = setTimeout(() => {
      const el = eventRefs.current[id];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page header */}
          <div className="mb-16">
            <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event History
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A timeline of Jathub's events, workshops, and community milestones.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/20" />

            {timelineEvents.map((event, index) => (
              <div key={event.id}>
                <motion.div
                  ref={(el) => { eventRefs.current[event.id] = el; }}
                  id={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative pl-12 md:pl-20 pb-4 scroll-mt-28"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  {/* Date badge */}
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {event.date}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {event.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">{event.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {event.description}
                  </p>

                  {/* Photo gallery grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {event.photos.map((photo, i) => (
                      <motion.img
                        key={i}
                        src={photo}
                        alt={`${event.title} photo ${i + 1}`}
                        className="w-full h-40 md:h-48 object-cover rounded-lg border border-border"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>

                  {/* YouTube embed */}
                  {event.youtubeId && (
                    <div className="mb-6">
                      <div className="relative w-full rounded-lg overflow-hidden border border-border" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${event.youtubeId}`}
                          title={event.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                      <a
                        href={`https://www.youtube.com/watch?v=${event.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline font-medium"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Watch on YouTube
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Link to full article */}
                  {event.newsLink && (
                    <Button variant="link" className="text-primary p-0 h-auto text-sm" asChild>
                      <Link to={event.newsLink}>Read full article →</Link>
                    </Button>
                  )}
                </motion.div>

                {/* Divider between events */}
                {index < timelineEvents.length - 1 && (
                  <div className="pl-12 md:pl-20 py-4">
                    <Separator className="bg-border/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
