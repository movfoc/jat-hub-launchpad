import { NewsArticle } from "@/components/NewsArticle";
import odosImg1 from "@/assets/news/ai-marketing/ODOS_Thaicamp_1.jpeg";
import odosImg2 from "@/assets/news/ai-marketing/ODOS_Thaicamp_2.jpeg";
import odosImg3 from "@/assets/news/ai-marketing/ODOS_Thaicamp_3.jpeg";
import odosImg4 from "@/assets/news/ai-marketing/ODOS_Thaicamp_4.jpeg";
import odosImg5 from "@/assets/news/ai-marketing/ODOS_Thaicamp_5.jpeg";
import odosImg6 from "@/assets/news/ai-marketing/ODOS_Thaicamp_6.jpeg";
import odosImg7 from "@/assets/news/ai-marketing/ODOS_Thaicamp_7.jpeg";
import odosImg8 from "@/assets/news/ai-marketing/ODOS_Thaicamp_8.jpeg";
import odosImg9 from "@/assets/news/ai-marketing/ODOS_Thaicamp_9.jpeg";

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

      <img 
        src={odosImg9} 
        alt="JAT Hub AI Marketing and Media Workshop Setup" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        A central theme of the workshop was demystifying the process of creating AI-generated video 
        content. Participants learned practical, step-by-step methods for utilizing current AI tools 
        to produce compelling marketing and media materials. This hands-on approach helped bridge the 
        gap between abstract technology and tangible creative output, allowing the students to 
        immediately see the potential of AI in their own future projects.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={odosImg5} 
          alt="Presenter Explaining Bridging the Gap" 
          className="w-full rounded-xl"
        />
        <img 
          src={odosImg8} 
          alt="Workshop Presentation on AI Tools" 
          className="w-full rounded-xl"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        The collaboration with Odos Summer Camp ensured that the content was both accessible and 
        relevant to a younger audience, effectively translating complex technological concepts into 
        easily digestible lessons. Attendees gained invaluable insights into how AI is currently 
        transforming marketing strategies and media production workflows.
      </p>

      <img 
        src={odosImg6} 
        alt="Students Engaged in Workshop Session" 
        className="w-full rounded-xl mb-8"
      />

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={odosImg4} 
          alt="Student Using AI Tools on iPad" 
          className="w-full rounded-xl"
        />
        <img 
          src={odosImg7} 
          alt="Attendees Taking Selfie at Workshop" 
          className="w-full rounded-xl"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        JAT Hub was delighted to provide this platform for early exposure to cutting-edge technology. 
        The enthusiasm and curiosity demonstrated by the young attendees confirmed the importance of 
        offering these forward-looking educational opportunities.
      </p>

      <img 
        src={odosImg3} 
        alt="Team Members with JAT Hub Cards" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        The event served as another successful example of JAT Hub's mission to empower the next 
        generation with the skills and knowledge necessary to thrive in an increasingly digital world.
      </p>

      {/* Group Photos */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={odosImg1} 
          alt="Group Photo - JAT Hub Together We Make It Happen" 
          className="w-full rounded-xl"
        />
        <img 
          src={odosImg2} 
          alt="Group Photo - AI Marketing and Media Workshop" 
          className="w-full rounded-xl"
        />
      </div>
    </NewsArticle>
  );
};

export default NewsAIMarketing;
