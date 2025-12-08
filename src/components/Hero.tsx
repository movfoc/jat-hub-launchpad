import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

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
      className="min-h-screen flex items-center justify-center text-center px-6 pt-24 relative isolate hero-overlay"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-tight">
          The Power of Youth, <span className="text-primary">United</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          JAT Hub is a non-profit community built for young dreamers, innovators, and changemakers. We believe that every great journey begins with connection.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => scrollToSection("events")} 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
          >
            View Events
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-card text-card-foreground hover:bg-muted transition-transform hover:scale-105"
            asChild
          >
            <a href="https://luma.com/user/Jathub" target="_blank" rel="noopener noreferrer">
              Become a Member
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
