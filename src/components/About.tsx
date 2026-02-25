import collaborationImage from "@/assets/collaboration.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 relative section-glow">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <div className="relative group">
          <img
            src={collaborationImage}
            alt="Students collaborating at a JAT Hub event"
            className="rounded-2xl w-full h-auto object-cover" />

          <div className="absolute inset-0 bg-primary/20 rounded-2xl mix-blend-hard-light"></div>
          <div className="absolute inset-0 rounded-2xl border border-primary/30"></div>
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Where Connections Happen
          </h2>
          <div className="text-foreground/70 space-y-6 leading-relaxed">
            <p className="text-justify">
              Here, students and young professionals from across universities come together to network, share ideas, explore opportunities, and strive toward their goals — side by side.
            </p>
            <p className="text-justify">
              Through cross-university events, corporate visits to leading global companies, and innovation-driven startup programs, JAT Hub bridges the gap between education and the real world.
            </p>
          </div>
        </div>
      </div>
    </section>);

};