import { NewsArticle } from "@/components/NewsArticle";
import partTimePic1 from "@/assets/news/parttime/Part_time_pics_1.jpeg";
import partTimePic2 from "@/assets/news/parttime/Part_time_pics_2.jpeg";
import partTimePic3 from "@/assets/news/parttime/Part_time_pics_3.jpeg";
import partTimePic4 from "@/assets/news/parttime/Part_time_pics_4.jpeg";
import partTimePic5 from "@/assets/news/parttime/Part_time_pics_5.jpeg";
import partTimePic6 from "@/assets/news/parttime/Part_time_pics_6.jpeg";
import partTimePic7 from "@/assets/news/parttime/Part_time_pics_7.jpeg";

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

      <img 
        src={partTimePic2} 
        alt="Part-Time Job Fair - Overview of the Event Hall" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        As a community dedicated to empowering the next generation of dreamers and innovators, JAT Hub 
        was proud to connect a vast and diverse pool of talent with valuable real-world opportunities. 
        The event attracted exceptional engagement, drawing students from every academic level—from 
        ambitious bachelor's candidates eager to gain initial experience to dedicated PhD researchers 
        seeking flexible opportunities to support their studies and apply their advanced skills.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={partTimePic3} 
          alt="JAT Hub Booth with Team Members" 
          className="w-full rounded-xl"
        />
        <img 
          src={partTimePic4} 
          alt="JAT Hub Team Engaging with Students" 
          className="w-full rounded-xl"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">
        The energy and enthusiasm displayed by the students underscore a clear demand for practical 
        engagement and professional networking opportunities. Our team engaged in meaningful discussions, 
        helping students understand how part-time work can complement their academic journey, build 
        crucial skills, and expand their professional networks long before graduation.
      </p>

      <img 
        src={partTimePic5} 
        alt="Busy Crowd at the Part-Time Job Fair" 
        className="w-full rounded-xl mb-8"
      />

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <img 
          src={partTimePic1} 
          alt="JAT Hub Representatives Speaking with Students" 
          className="w-full rounded-xl"
        />
        <img 
          src={partTimePic6} 
          alt="Registration and Check-in Area" 
          className="w-full rounded-xl"
        />
        <img 
          src={partTimePic7} 
          alt="Students Networking at the Fair" 
          className="w-full rounded-xl"
        />
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
