import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import partnersBanner from "@/assets/partners-banner.png";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-5 sm:px-6 pt-28 pb-16 sm:pb-20 relative isolate hero-overlay"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight sm:tracking-tighter mb-5 sm:mb-6 leading-[1.15] sm:leading-[1.1]">
          The Power of Youth, <span className="text-primary">United</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/70 leading-[1.7] sm:leading-relaxed px-2 sm:px-0">
          JAT Hub is a non-profit community built for young dreamers, innovators, and changemakers. We believe that every great journey begins with connection.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">
          <Button 
            onClick={() => scrollToSection("events")} 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 px-8 py-6 text-base w-full sm:w-auto"
          >
            View Events
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-border/50 bg-muted/50 text-foreground hover:bg-muted transition-all hover:scale-105 px-8 py-6 text-base w-full sm:w-auto"
            asChild
          >
            <a href="https://luma.com/user/Jathub" target="_blank" rel="noopener noreferrer">
              Become a Member
            </a>
          </Button>
        </div>
        <div className="mt-12 sm:mt-14 flex justify-center px-2 sm:px-0">
          <img
            src={partnersBanner}
            alt="Special thanks to our partners and communities including University of Cambridge, Imperial College London, Microsoft, Google, and more"
            className="max-w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
