import { Heart, ExternalLink, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cpr/10 border border-cpr/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-cpr" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
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

            {/* Right: Abstract visual */}
            <div className="flex-shrink-0 hidden md:flex items-center justify-center">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cpr/20 animate-pulse" />
                {/* Middle ring */}
                <div className="absolute inset-4 rounded-full border border-cpr/15" />
                {/* Inner glow */}
                <div className="absolute inset-8 rounded-full bg-cpr/10 flex items-center justify-center">
                  <Heart className="w-16 h-16 lg:w-20 lg:h-20 text-cpr/80" />
                </div>
                {/* Pulse lines */}
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-12 text-cpr/30"
                  viewBox="0 0 200 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="0,20 40,20 55,5 65,35 80,10 90,30 105,20 200,20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
