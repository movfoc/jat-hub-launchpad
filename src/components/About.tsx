import { Zap, Users, Lightbulb } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Inspiring peers who share your drive and passion",
    },
    {
      icon: Users,
      title: "Mentorship and networking opportunities with industry leaders",
    },
    {
      icon: Lightbulb,
      title: "Programs and events that turn ideas into impact",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 relative section-glow">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            At JAT Hub, you'll find:
          </h2>
          <div className="bg-card/60 border border-border/30 rounded-2xl p-8 backdrop-blur-sm">
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 bg-muted/30 p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:pt-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Where Connections Happen
          </h2>
          <div className="text-foreground/70 space-y-6 leading-relaxed">
            <p>
              Here, students and young professionals from across universities come together to network, share ideas, explore opportunities, and strive toward their goals — side by side.
            </p>
            <p>
              Through cross-university events, corporate visits to leading global companies, and innovation-driven startup programs, JAT Hub bridges the gap between education and the real world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
