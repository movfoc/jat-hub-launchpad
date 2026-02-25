import { useState } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import jathubLogo from "@/assets/jathub-logo.jpg";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" aria-label="JAT Hub Home" onClick={() => scrollToSection("hero")}>
          <img src={jathubLogo} alt="JAT Hub Logo" className="h-10 w-auto" />
        </a>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection("about")} className="text-foreground/70 hover:text-primary transition-colors text-sm">
            About
          </button>
          <button onClick={() => scrollToSection("features")} className="text-foreground/70 hover:text-primary transition-colors text-sm">
            What We Offer
          </button>
          <button onClick={() => scrollToSection("events")} className="text-foreground/70 hover:text-primary transition-colors text-sm">
            Events
          </button>
          <a href="/events" className="text-foreground/70 hover:text-primary transition-colors text-sm">
            Event Gallery
          </a>
          <button onClick={() => scrollToSection("mission")} className="text-foreground/70 hover:text-primary transition-colors text-sm">
            Mission
          </button>
          <a
            href="/xplore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#D4FF00] text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e6ff4d] transition-all hover:scale-105 shadow-[0_0_10px_rgba(212,255,0,0.3)]"
          >
            <Briefcase className="w-4 h-4" /> X-plore
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 text-sm" asChild>
            <a href="https://luma.com/user/Jathub" target="_blank" rel="noopener noreferrer">
              Become a Member
            </a>
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-background/95 backdrop-blur-md border-b border-border/30">
          <button onClick={() => scrollToSection("about")} className="block py-2 text-foreground/70 hover:text-primary">
            About
          </button>
          <button onClick={() => scrollToSection("features")} className="block py-2 text-foreground/70 hover:text-primary">
            What We Offer
          </button>
          <button onClick={() => scrollToSection("events")} className="block py-2 text-foreground/70 hover:text-primary">
            Events
          </button>
          <a href="/events" className="block py-2 text-foreground/70 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Event Gallery
          </a>
          <button onClick={() => scrollToSection("mission")} className="block py-2 text-foreground/70 hover:text-primary">
            Mission
          </button>
          <a
            href="/xplore"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full inline-flex items-center justify-center gap-1.5 bg-[#D4FF00] text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-[#e6ff4d] transition-all shadow-[0_0_10px_rgba(212,255,0,0.3)]"
          >
            <Briefcase className="w-4 h-4" /> X-plore
          </a>
          <Button className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://luma.com/user/Jathub" target="_blank" rel="noopener noreferrer">
              Become a Member
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};
