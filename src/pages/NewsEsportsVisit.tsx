import { NewsArticle } from "@/components/NewsArticle";
import esportImg1 from "@/assets/news/esports/Esport_1.jpeg";
import esportImg2 from "@/assets/news/esports/Esport_2.jpeg";
import esportImg3 from "@/assets/news/esports/Esport_3.jpeg";
import esportImg4 from "@/assets/news/esports/Esport_4.jpeg";
import esportImg5 from "@/assets/news/esports/Esport_5.jpeg";

const NewsEsportsVisit = () => {
  return (
    <NewsArticle
      date="NOV 22, 2025"
      title="Jathub Explores the College of Esports at Queen Elizabeth Olympic Park"
      subtitle="London, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        Jathub continues its mission to connect with the forefront of digital innovation. On November 22, 2025, our team had the privilege of attending the College of Esports (CoEs) Open Day, located at the iconic Lee Valley VeloPark in Queen Elizabeth Olympic Park.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">A World-First Campus</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        As the world's first university-level institution dedicated to the business of esports, the College of Esports offers a unique blend of academic rigour and industry-standard practical experience. The energy at the campus was electric, with students and visitors exploring how gaming is evolving from a pastime into a global economic powerhouse.
      </p>

      {/* Images - Campus tour and gaming labs */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={esportImg1} alt="Campus tour at College of Esports" className="rounded-lg w-full h-auto" />
        <img src={esportImg2} alt="High-spec gaming labs at CoEs" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Hands-On Innovation</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Our visit was packed with interactive experiences that showcased the college's state-of-the-art facilities:
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Sim Racing Excellence:</strong> We tested our skills on professional-grade racing simulators. These rigs are not just for fun; they represent the intersection of high-performance engineering and competitive gaming.
      </p>

      {/* Image - Sim racing */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={esportImg5} alt="Testing sim racing equipment" className="w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Broadcast Technology:</strong> Jathub representatives stepped into the green screen studios, getting a behind-the-scenes look at the production technology that powers modern esports broadcasting and content creation.
      </p>

      {/* Image - Green screen studio */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={esportImg3} alt="Exploring the green screen broadcast studio" className="w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        <strong className="text-foreground">Gaming Hubs:</strong> The open day highlighted the college's high-spec gaming labs, where students learn the intricacies of game design, event management, and digital marketing.
      </p>

      {/* Image - Gaming and interaction */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={esportImg4} alt="Students interacting in the gaming hub" className="w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Aligning Visions</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        This visit reinforced Jathub's commitment to the digital economy. Just as the College of Esports is professionalizing the industry through its unique "Tri-Curriculum" approach, Jathub is dedicated to empowering the next generation of creators and leaders.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We left inspired by the passion of the students and faculty. The College of Esports is proving that the future of education is immersive, digital, and incredibly exciting.
      </p>
    </NewsArticle>
  );
};

export default NewsEsportsVisit;
