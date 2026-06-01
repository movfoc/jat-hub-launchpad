import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { historicalEvents } from "@/data/eventsData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// News covers (reuse the same images as the News section)
import roundtableImg from "@/assets/news/house-of-lords/Roundtable_cover.jpeg";
import esportsImg from "@/assets/news/esports/Esport_1.jpeg";
import ovhcloudImg from "@/assets/news/ovhcloud/OVHcloud_1.jpeg";
import aiMarketingImg from "@/assets/news/ai-marketing/ODOS_Thaicamp_1.jpeg";
import microsoftImg from "@/assets/news/microsoft/Microsoft_Visit_1.jpeg";
import partTimeImg from "@/assets/news/parttime/Part_time_pics_1.jpeg";
import gameJamImg from "@/assets/news/game-jam/GGJ_Cover.jpeg";
import uclSummitImg from "@/assets/news/ucl-summit/Summit_Group.png";
import barclaysImg from "@/assets/news/barclays/barclays_cover.jpg";
import cambridgeImg from "@/assets/news/cambridge/cambridge_cover.jpg";
import dementiaImg from "@/assets/news/dementia/dementia_cover.jpg";

type NewsCard = {
  image: string;
  title: string;
  summary: string;
  date: string;
  link: string;
  category: string;
};

const newsItems: NewsCard[] = [
  {
    image: barclaysImg,
    category: "Innovation Summit",
    title: "JatHub Joins UK's Top Innovators at Barclays AI:100 Event",
    summary: "JatHub was featured alongside the UK's leading AI innovators at the Barclays AI:100 showcase.",
    date: "2026-05-28",
    link: "/news/barclays-ai100",
  },
  {
    image: dementiaImg,
    category: "Community",
    title: "JatHub Champions Community Health at the Memory and Wellbeing Festival",
    summary: "Our team supported memory and wellbeing initiatives for the local community.",
    date: "2026-05-22",
    link: "/news/memory-wellbeing",
  },
  {
    image: cambridgeImg,
    category: "Hackathon",
    title: "JatHub at Cambridge RealityX: Judging the Future of AI & XR",
    summary: "JatHub judged groundbreaking AI and XR projects at Cambridge's RealityX hackathon.",
    date: "2026-03-15",
    link: "/news/cambridge-realityx",
  },
  {
    image: uclSummitImg,
    category: "Summit",
    title: "JatHub x UCL Summit: Digital Marketing & Gamified Economies",
    summary: "A day of insights on digital marketing and gamified economies with UCL.",
    date: "2026-02-17",
    link: "/news/ucl-summit",
  },
  {
    image: gameJamImg,
    category: "Game Jam",
    title: "Surrey Global Game Jam 2026",
    summary: "JatHub joined creators worldwide for 48 hours of game-making at Surrey GGJ.",
    date: "2026-01-27",
    link: "/news/game-jam",
  },
  {
    image: roundtableImg,
    category: "Policy & Innovation",
    title: "Jathub at House of Lords: Defining the UK's Digital Future",
    summary: "JatHub contributed to a House of Lords roundtable shaping the UK's digital policy.",
    date: "2025-12-18",
    link: "/news/house-of-lords",
  },
  {
    image: esportsImg,
    category: "College Visit",
    title: "College of Esports Visit",
    summary: "We toured the College of Esports to explore careers in competitive gaming.",
    date: "2026-01-10",
    link: "/news/esports-visit",
  },
  {
    image: ovhcloudImg,
    category: "Industry Visit",
    title: "OVHcloud London Office Visit",
    summary: "An inside look at cloud infrastructure at OVHcloud's London headquarters.",
    date: "2025-11-25",
    link: "/news/ovhcloud-london",
  },
  {
    image: aiMarketingImg,
    category: "Workshop",
    title: "AI for Marketing & Media",
    summary: "A hands-on workshop exploring how AI is reshaping marketing and media.",
    date: "2025-10-29",
    link: "/news/ai-marketing",
  },
  {
    image: microsoftImg,
    category: "Industry Visit",
    title: "Visit Microsoft London — From Student to Tech Professional",
    summary: "Students explored Microsoft London and the journey from study into tech.",
    date: "2025-11-14",
    link: "/news/microsoft-london",
  },
  {
    image: partTimeImg,
    category: "Career Fair",
    title: "Part-time Job Fair",
    summary: "JatHub connected students with part-time opportunities to launch their careers.",
    date: "2025-10-01",
    link: "/news/parttime-fair",
  },
];

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

type GalleryItem = {
  key: string;
  image: string;
  title: string;
  dateLabel: string;
  sortDate: number;
  category?: string;
  onClick: () => void;
};

const parseEventDate = (s: string) => {
  // Handles "FEB 17, 2026" and "JAN 27 - 29, 2026"
  const cleaned = s.replace(/(\d+)\s*-\s*\d+/, "$1");
  const t = new Date(cleaned).getTime();
  return isNaN(t) ? 0 : t;
};

export const EventGallery = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  // Filter events that have media or a poster
  const events = historicalEvents.filter(e => e.media.length > 0 || e.poster !== "/placeholder.svg");

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
    }
  };

  const items: GalleryItem[] = [
    ...events.map<GalleryItem>((e) => ({
      key: `event-${e.id}`,
      image: e.poster,
      title: e.title,
      dateLabel: e.date,
      sortDate: parseEventDate(e.date),
      category: "Event",
      onClick: () => navigate(`/events#${e.id}`),
    })),
    ...sortedNews.map<GalleryItem>((n) => ({
      key: `news-${n.link}`,
      image: n.image,
      title: n.title,
      dateLabel: formatDate(n.date),
      sortDate: new Date(n.date).getTime(),
      category: n.category,
      onClick: () => navigate(n.link),
    })),
  ].sort((a, b) => b.sortDate - a.sortDate);

  return (
    <section className="py-16 sm:py-20 md:py-28 px-5 sm:px-6 bg-background relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Event Gallery & Newsroom
            </h2>
            <p className="text-muted-foreground mt-3 text-sm sm:text-base">
              Past events and recent stories — click any card to dive in.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:bg-primary/10"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:bg-primary/10"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <button
              key={item.key}
              onClick={item.onClick}
              className="group w-[78vw] min-w-[260px] sm:w-auto sm:min-w-[300px] md:min-w-[340px] max-w-[360px] shrink-0 snap-start rounded-xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-left focus:outline-none focus:ring-2 focus:ring-ring flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                {item.category && (
                  <span className="text-primary text-[11px] font-semibold tracking-wider uppercase mb-2">
                    {item.category}
                  </span>
                )}
                <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-3">
                  {item.title}
                </h3>
                <span className="mt-auto text-muted-foreground text-xs">
                  {item.dateLabel}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 gap-3">
          <p className="text-muted-foreground text-xs md:hidden">
            ← Swipe to browse →
          </p>
          <div className="ml-auto flex gap-2">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => navigate("/events")}
            >
              All events
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => navigate("/news")}
            >
              All stories
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
