import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Use actual event photos as covers
import roundtableImg from "@/assets/news/house-of-lords/Roundtable_cover.jfif";
import esportsImg from "@/assets/news/esports/Esport_1.jpeg";
import ovhcloudImg from "@/assets/news/ovhcloud/OVHcloud_1.jpeg";
import aiMarketingImg from "@/assets/news/ai-marketing/ODOS_Thaicamp_1.jpeg";
import microsoftImg from "@/assets/news/microsoft/Microsoft_Visit_1.jpeg";
import partTimeImg from "@/assets/news/parttime/Part_time_pics_1.jpeg";

const newsItems = [
  {
    image: roundtableImg,
    category: "Policy & Innovation",
    title: "Jathub at House of Lords: Defining the UK's Digital Future",
    date: "2025-12-18",
    link: "/news/house-of-lords",
  },
  {
    image: esportsImg,
    category: "College Visit",
    title: "College of Esports Visit",
    date: "2026-01-10",
    link: "/news/esports-visit",
  },
  {
    image: ovhcloudImg,
    category: "Industry Visit",
    title: "OVHcloud London Office Visit",
    date: "2025-11-25",
    link: "/news/ovhcloud-london",
  },
  {
    image: aiMarketingImg,
    category: "Workshop",
    title: "AI for Marketing & Media",
    date: "2025-10-29",
    link: "/news/ai-marketing",
  },
  {
    image: microsoftImg,
    category: "Industry Visit",
    title: "Visit Microsoft London — From Student to Tech Professional",
    date: "2025-11-14",
    link: "/news/microsoft-london",
  },
  {
    image: partTimeImg,
    category: "Career Fair",
    title: "Part-time Job Fair",
    date: "2025-10-01",
    link: "/news/parttime-fair",
  },
];

// Sort by date descending (most recent first)
const sortedNews = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const News = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="news" className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Newsroom
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Updates
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-muted"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-muted"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sortedNews.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group min-w-[300px] md:min-w-[340px] max-w-[360px] snap-start shrink-0 flex flex-col rounded-xl overflow-hidden bg-card border border-border/40 hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                  {item.category}
                </span>
                <h3 className="text-foreground font-semibold text-base leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">
                    {formatDate(item.date)}
                  </span>
                  <span className="text-primary text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile hint + View more */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-muted-foreground text-xs md:hidden">
            ← Swipe to see more →
          </p>
          <div className="ml-auto">
            <Link
              to="/news"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              View all stories <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
