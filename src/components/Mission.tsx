import workshopImage from "@/assets/workshop.jpg";

export const Mission = () => {
  return (
    <section id="mission" className="py-16 md:py-32 px-6 relative section-glow">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Mission is Simple
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed text-left md:text-center">
            To empower the next generation by creating a vibrant ecosystem where collaboration, creativity, and action meet.
            {"\n\n"}
            Whether you're building your first startup team, expanding your professional network, or just discovering your purpose — JAT Hub is where it all begins.
          </p>
        </div>
      </div>
    </section>
  );
};
