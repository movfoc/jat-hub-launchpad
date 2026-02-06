import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import bhfLogo from "@/assets/bhf-logo.jpg";

export const CPRBanner = () => {
  return (
    <section className="py-16 md:py-20 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cpr/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="bg-card/60 border border-border/30 rounded-2xl backdrop-blur-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
            
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Icon cluster */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img src={bhfLogo} alt="British Heart Foundation" className="h-14 rounded-xl object-contain" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] mb-4">
                Learn CPR in 15 Minutes.{" "}
                <span className="text-cpr">Save a Life.</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Free, trusted online CPR training by the British Heart Foundation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-cpr text-cpr-foreground hover:bg-cpr/90 transition-all hover:scale-105 text-base px-8 py-6 font-semibold"
                  asChild
                >
                  <a
                    href="https://www.bhf.org.uk/how-you-can-help/how-to-save-a-life/how-to-do-cpr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn CPR Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <span className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                  Every second counts.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
