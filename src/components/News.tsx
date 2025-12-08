import aiMarketingThumbnail from "@/assets/ai-marketing-thumbnail.png";
import microsoftVisitThumbnail from "@/assets/microsoft-visit-thumbnail.png";
import partTimeThumbnail from "@/assets/part-time-thumbnail.png";

export const News = () => {
  const newsItems = [
    {
      image: aiMarketingThumbnail,
      alt: "AI for Marketing & Media event",
    },
    {
      image: microsoftVisitThumbnail,
      alt: "Microsoft London Visit",
    },
    {
      image: partTimeThumbnail,
      alt: "Part-time Job Fair",
    },
  ];

  return (
    <section id="news" className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            News
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-auto transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
