import { NewsArticle } from "@/components/NewsArticle";

const NewsPartTimeFair = () => {
  return (
    <NewsArticle
      date="OCT 1, 2025"
      title="Bridging Education and Opportunity"
      subtitle="JAT Hub's Success at the University of Surrey Part-Time Job Fair"
    >
      <p className="text-muted-foreground leading-relaxed mb-8">
        JAT Hub's participation in the Part-Time Job Fair held on October 1, 2025, at the University 
        of Surrey Student Hall proved to be an exceptional success, showcasing our commitment to 
        empowering the next generation.
      </p>

      {/* Placeholder for images - will be added when uploaded */}
      <div className="w-full aspect-video rounded-xl bg-card border border-border flex items-center justify-center mb-8">
        <p className="text-muted-foreground">Image coming soon</p>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        As a community dedicated to empowering the next generation of dreamers and innovators, JAT Hub 
        was proud to connect a vast and diverse pool of talent with valuable real-world opportunities. 
        The event attracted exceptional engagement, drawing students from every academic level—from 
        ambitious bachelor's candidates eager to gain initial experience to dedicated PhD researchers 
        seeking flexible opportunities to support their studies and apply their advanced skills.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        The energy and enthusiasm displayed by the students underscore a clear demand for practical 
        engagement and professional networking opportunities. Our team engaged in meaningful discussions, 
        helping students understand how part-time work can complement their academic journey, build 
        crucial skills, and expand their professional networks long before graduation.
      </p>

      {/* Placeholder grid for images */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="aspect-video rounded-xl bg-card border border-border flex items-center justify-center">
          <p className="text-muted-foreground">Image coming soon</p>
        </div>
        <div className="aspect-video rounded-xl bg-card border border-border flex items-center justify-center">
          <p className="text-muted-foreground">Image coming soon</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        This fair perfectly aligns with JAT Hub's core mission: to create a vibrant ecosystem that 
        bridges the gap between education and the professional world through collaboration, creativity, 
        and action. By facilitating these connections, we continue to empower young individuals to find 
        their purpose and turn their ideas into impact.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        We extend our sincere thanks to the University of Surrey for hosting a truly valuable event and 
        to every student who took the time to visit our stand. Together, we're building a brighter future.
      </p>
    </NewsArticle>
  );
};

export default NewsPartTimeFair;
