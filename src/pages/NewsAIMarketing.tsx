import { NewsArticle } from "@/components/NewsArticle";

const NewsAIMarketing = () => {
  return (
    <NewsArticle
      date="OCT 29, 2025"
      title="AI Video Skills Unlocked"
      subtitle="JAT Hub and Odos Summer Camp Partnered to Empower Young Creators"
    >
      <p className="text-muted-foreground leading-relaxed mb-8">
        On October 29, 2025, JAT Hub, in collaboration with Odos Summer Camp, held a highly engaging 
        workshop titled "AI for Marketing & Media" at the University of Surrey. The two-hour session, 
        which ran from 2 PM to 4 PM, focused on introducing the young generation to the powerful 
        intersection of Artificial Intelligence and creative media.
      </p>

      {/* Placeholder for main image */}
      <div className="w-full aspect-video rounded-xl bg-card border border-border flex items-center justify-center mb-8">
        <p className="text-muted-foreground">Image coming soon</p>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        A central theme of the workshop was demystifying the process of creating AI-generated video 
        content. Participants learned practical, step-by-step methods for utilizing current AI tools 
        to produce compelling marketing and media materials. This hands-on approach helped bridge the 
        gap between abstract technology and tangible creative output, allowing the students to 
        immediately see the potential of AI in their own future projects.
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
        The collaboration with Odos Summer Camp ensured that the content was both accessible and 
        relevant to a younger audience, effectively translating complex technological concepts into 
        easily digestible lessons. Attendees gained invaluable insights into how AI is currently 
        transforming marketing strategies and media production workflows.
      </p>

      {/* Placeholder for additional image */}
      <div className="w-full aspect-video rounded-xl bg-card border border-border flex items-center justify-center mb-8">
        <p className="text-muted-foreground">Image coming soon</p>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        JAT Hub was delighted to provide this platform for early exposure to cutting-edge technology. 
        The enthusiasm and curiosity demonstrated by the young attendees confirmed the importance of 
        offering these forward-looking educational opportunities.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The event served as another successful example of JAT Hub's mission to empower the next 
        generation with the skills and knowledge necessary to thrive in an increasingly digital world.
      </p>
    </NewsArticle>
  );
};

export default NewsAIMarketing;
