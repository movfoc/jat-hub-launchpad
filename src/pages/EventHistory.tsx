import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { historicalEvents, type EventMedia } from "@/data/eventsData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Lightbox component
const Lightbox = ({
  media,
  initialIndex,
  onClose,
}: {
  media: EventMedia[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(initialIndex);
  const images = media.filter((m) => m.type === "image");
  const current = images[index];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(images.length - 1, i + 1));
    },
    [images.length, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIndex(index - 1);
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/60 border border-primary/30 text-foreground hover:bg-primary/20 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt || ""}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Next */}
      {index < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIndex(index + 1);
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/60 border border-primary/30 text-foreground hover:bg-primary/20 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Counter */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
        {index + 1} / {images.length}
      </p>
    </div>
  );
};

const EventHistory = () => {
  const location = useLocation();
  const eventRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    media: EventMedia[];
    imageIndex: number;
  } | null>(null);

  // Scroll to hash on load
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && eventRefs.current[hash]) {
      setTimeout(() => {
        eventRefs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location.hash]);

  const openLightbox = (media: EventMedia[], clickedImageSrc: string) => {
    const images = media.filter((m) => m.type === "image");
    const imageIndex = images.findIndex((m) => m.src === clickedImageSrc);
    setLightbox({ media, imageIndex: Math.max(0, imageIndex) });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Event History
          </h1>
          <p className="text-muted-foreground mb-16 max-w-2xl">
            A look back at Jathub's journey — the events, workshops, and visits that shaped our community.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/20" />

            {historicalEvents.map((event, idx) => (
              <div key={event.id}>
                <div
                  ref={(el) => { eventRefs.current[event.id] = el; }}
                  className="relative pl-12 md:pl-20 pb-16 scroll-mt-28"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background ring-4 ring-primary/20" />

                  {/* Date */}
                  <p className="text-sm font-semibold text-primary mb-2">{event.date}</p>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {event.title}
                  </h2>

                  {/* Description */}
                  {event.description && (
                    <p className="text-muted-foreground mb-6 max-w-xl">{event.description}</p>
                  )}

                  {/* Media gallery — horizontal scroll */}
                  {event.media.length > 0 && (
                    <div
                      className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      {event.media.map((item, mIdx) =>
                        item.type === "image" ? (
                          <button
                            key={mIdx}
                            onClick={() => openLightbox(event.media, item.src)}
                            className="shrink-0 rounded-lg overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <img
                              src={item.src}
                              alt={item.alt || event.title}
                              className="h-40 md:h-52 w-auto object-cover"
                              loading="lazy"
                            />
                          </button>
                        ) : (
                          <div
                            key={mIdx}
                            className="shrink-0 rounded-lg overflow-hidden border border-primary/10 w-[280px] md:w-[360px] h-40 md:h-52"
                          >
                            <iframe
                              src={item.src}
                              title={event.title}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {event.media.length === 0 && (
                    <p className="text-muted-foreground/50 italic text-sm">Photos coming soon…</p>
                  )}
                </div>

                {/* Divider between events */}
                {idx < historicalEvents.length - 1 && (
                  <div className="ml-12 md:ml-20 mb-8">
                    <div className="h-px bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          media={lightbox.media}
          initialIndex={lightbox.imageIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default EventHistory;
