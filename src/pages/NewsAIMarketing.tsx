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

      {/* Image 1 - Full width */}
      <img 
        src={odosImg1} 
        alt="AI for Marketing & Media - Photo 1" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        A central theme of the workshop was demystifying the process of creating AI-generated video 
        content. Participants learned practical, step-by-step methods for utilizing current AI tools 
        to produce compelling marketing and media materials. This hands-on approach helped bridge the 
        gap between abstract technology and tangible creative output, allowing the students to 
        immediately see the potential of AI in their own future projects.
      </p>

      {/* Images 2 and 3 in grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={odosImg2} 
          alt="AI for Marketing & Media - Photo 2" 
          className="w-full rounded-xl"
        />
        <img 
          src={odosImg3} 
          alt="AI for Marketing & Media - Photo 3" 
          className="w-full rounded-xl"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        The collaboration with Odos Summer Camp ensured that the content was both accessible and 
        relevant to a younger audience, effectively translating complex technological concepts into 
        easily digestible lessons. Attendees gained invaluable insights into how AI is currently 
        transforming marketing strategies and media production workflows.
      </p>

      {/* Image 4 - Full width */}
      <img 
        src={odosImg4} 
        alt="AI for Marketing & Media - Photo 4" 
        className="w-full rounded-xl mb-8"
      />

      {/* Images 5 and 6 featured grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={odosImg5} 
          alt="AI for Marketing & Media - Photo 5" 
          className="w-full rounded-xl"
        />
        <img 
          src={odosImg6} 
          alt="AI for Marketing & Media - Photo 6" 
          className="w-full rounded-xl"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        JAT Hub was delighted to provide this platform for early exposure to cutting-edge technology. 
        The enthusiasm and curiosity demonstrated by the young attendees confirmed the importance of 
        offering these forward-looking educational opportunities.
      </p>

      {/* Image 8 in full width */}
      <img 
        src={odosImg8} 
        alt="AI for Marketing & Media - Photo 8" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        The event served as another successful example of JAT Hub's mission to empower the next 
        generation with the skills and knowledge necessary to thrive in an increasingly digital world.
      </p>

      {/* Images 7 and 9 in row */}
      <div className="grid md:grid-cols-2 gap-4">
        <img 
          src={odosImg7} 
          alt="AI for Marketing & Media - Photo 7" 
          className="w-full rounded-xl"
        />
        <img 
          src={odosImg9} 
          alt="AI for Marketing & Media - Photo 9" 
          className="w-full rounded-xl"
        />
      </div>
    </NewsArticle>
  );
};

export default NewsAIMarketing;
