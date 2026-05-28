import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/news/cambridge/cambridge_1.jpg";
import img2 from "@/assets/news/cambridge/cambridge_2.jpg";
import imgCover from "@/assets/news/cambridge/cambridge_cover.jpg";
import img4 from "@/assets/news/cambridge/cambridge_4.jpg";
import img5 from "@/assets/news/cambridge/cambridge_5.jpg";

const NewsCambridgeRealityX = () => {
  return (
    <NewsArticle
      date="MAR 15, 2026"
      title="JatHub at Cambridge RealityX: Judging the Future of AI & XR"
      subtitle="Cambridge, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        At the intersection of history and futuristic innovation, the Mary Alan Building at Homerton College, University of Cambridge, became the epicenter of immersive technology from March 7th to 13th.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Hosted by the Cambridge University VR/AR Society and the Cambridge Asia Forum, the 2026 Cambridge RealityX Hackathon brought together brilliant developers, designers, and creators for a rigorous 5-day applied innovation sprint. The mission? To tackle real-world problems utilizing the power of AI and Extended Reality (XR).
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">A Front-Row Seat to Brilliance: JatHub on the Judge Panel</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We were incredibly proud to support this initiative not just as collaborators, but as active evaluators of tomorrow's tech landscape. JatHub's Chair & Co-founder, <strong>Vian LAU</strong>, alongside <strong>Frankie L.</strong>, had the distinct honor of serving on the official Judge Panel.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Sitting on the judging panel allowed us to witness firsthand the sheer ingenuity of Cambridge's young talent. From AI-driven virtual agents and human-AI social XR, to groundbreaking prototypes in spatial commerce, the ideas presented were nothing short of visionary.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img1} alt="Cambridge RealityX Highlights" className="rounded-lg w-full h-auto" />
        <img src={img2} alt="Hackathon Briefing" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Shaping Immersive Economies</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Throughout the week, interdisciplinary teams of 2 to 5 participants pushed the boundaries of what is possible. With JatPoint actively supporting one of the core innovation boundaries, we aimed to inject strong, actionable industry perspectives into the academic environment.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The prototypes developed demonstrated a mature understanding of how Web3 identity and responsible AI can be practically integrated into immersive healthcare, education, and the creative industries.
      </p>

      <div className="my-8 rounded-lg overflow-hidden">
        <img src={imgCover} alt="Students pitching their XR prototypes" className="w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Empowering the Next Generation of Builders</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The success of RealityX 2026 is a testament to the power of community and collaboration. We extend our deepest gratitude to the hosting team—Hongfei Cai, Tim Tso, Samuel Thompson & Bangyi G.—and the incredible network of collaborators including Professor Thomas Bohné (IfM), the Cambridge EdTech Society, Campus-XR, and experts from across the industry.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At JatHub, we are energized by the bold concepts we evaluated during this hackathon. We are already looking forward to supporting these young innovators as they transition their prototypes into real-world pilots and startups, and we can't wait to achieve even greater success together in the future.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img4} alt="Networking and Mentorship" className="rounded-lg w-full h-auto" />
        <img src={img5} alt="Event Conclusion" className="rounded-lg w-full h-auto" />
      </div>
    </NewsArticle>
  );
};

export default NewsCambridgeRealityX;