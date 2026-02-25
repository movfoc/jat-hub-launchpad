import { Zap, Users, Lightbulb } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Inspiring peers who share your drive and passion",
    },
    {
      icon: Users,
      title: "Mentorship and networking opportunities",
    },
    {
      icon: Lightbulb,
      title: "Programs and events that turn ideas into impact",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-6 relative section-glow">
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          At JAT Hub, you'll find:
        </h2>
        <div className="bg-card/60 border border-border/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-4 bg-muted/30 p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
