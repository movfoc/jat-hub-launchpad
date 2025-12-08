import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-32 px-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Dream. Connect. Build.
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-primary mt-2">
          Together, we make it happen.
        </p>
        <Button 
          size="lg"
          className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 text-lg px-8 py-6"
          asChild
        >
          <a href="https://luma.com/user/Jathub" target="_blank" rel="noopener noreferrer">
            Become a Member
          </a>
        </Button>
      </div>
    </section>
  );
};
