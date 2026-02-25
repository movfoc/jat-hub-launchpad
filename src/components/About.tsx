import { Zap, Users, Lightbulb } from "lucide-react";
import collaborationImage from "@/assets/collaboration.jpg";

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

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 relative section-glow">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative group">
            <img
              src={collaborationImage}
              alt="Students collaborating at a JAT Hub event"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-2xl mix-blend-hard-light"></div>
            <div className="absolute inset-0 rounded-2xl border border-primary/30"></div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Where Connections Happen
            </h2>
            <div className="text-foreground/70 space-y-4 leading-relaxed mb-8">
              <p>
                Here, students and young professionals from across universities come together to network, share ideas, explore opportunities, and strive toward their goals — side by side.
              </p>
              <p>
                Through cross-university events, corporate visits to leading global companies, and innovation-driven startup programs, JAT Hub bridges the gap between education and the real world.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">
              At JAT Hub, you'll find:
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-muted/30 p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
