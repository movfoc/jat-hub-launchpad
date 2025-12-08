import { Zap, Users, Lightbulb } from "lucide-react";

export const Features = () => {
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
    <section id="features" className="py-20 md:py-32 px-6 bg-jat-gray-dark border-t border-b border-border/20 relative section-glow">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          At JAT Hub, you'll find:
        </h2>
        <div className="bg-card/50 border border-border rounded-xl p-8 md:p-12 shadow-2xl shadow-blue-500/10">
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start bg-muted/30 p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                <span className="text-foreground text-xl font-medium">
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
