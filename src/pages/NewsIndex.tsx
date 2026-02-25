import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowLeft } from "lucide-react";

import roundtableImg from "@/assets/news/house-of-lords/Roundtable_cover.jpeg";
import esportsImg from "@/assets/news/esports/Esport_1.jpeg";
import ovhcloudImg from "@/assets/news/ovhcloud/OVHcloud_1.jpeg";
import aiMarketingImg from "@/assets/news/ai-marketing/ODOS_Thaicamp_1.jpeg";
import microsoftImg from "@/assets/news/microsoft/Microsoft_Visit_1.jpeg";
import partTimeImg from "@/assets/news/parttime/Part_time_pics_1.jpeg";

const allNews = [
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
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

const NewsIndex = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Link to="/#news" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-1 mb-8">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </Link>
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Newsroom</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">All Stories</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border/40 hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">{item.category}</span>
                <h3 className="text-foreground font-semibold text-base leading-snug mb-3 line-clamp-2">{item.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">{formatDate(item.date)}</span>
                  <span className="text-primary text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default NewsIndex;
