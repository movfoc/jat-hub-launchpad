import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/news/ucl-demo-day/ucl-demo-1.jpg.asset.json";
import img2 from "@/assets/news/ucl-demo-day/ucl-demo-2.jpg.asset.json";
import img3 from "@/assets/news/ucl-demo-day/ucl-demo-3.jpg.asset.json";
import img4 from "@/assets/news/ucl-demo-day/ucl-demo-4.jpg.asset.json";
import img5 from "@/assets/news/ucl-demo-day/ucl-demo-5.jpg.asset.json";
import img6 from "@/assets/news/ucl-demo-day/ucl-demo-6.jpg.asset.json";
import img7 from "@/assets/news/ucl-demo-day/ucl-demo-7.jpg.asset.json";

const NewsUCLDemoDay = () => {
  return (
    <NewsArticle
      date="MAY 18, 2026"
      title="De-risking Frontier Innovation: JatHub and UCL Host 2026 Demo Day"
      subtitle="London, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        JatHub and the UCL School of Management have successfully concluded the 2026 X-plore Marketing Ideathon Demo Day at Canary Wharf Level 50. The event marked a significant milestone in de-risking frontier innovation and establishing an environment for scalable technological advancement.
      </p>

      <div className="my-8 rounded-lg overflow-hidden">
        <img src={img1.url} alt="JatHub x UCL Demo Day Main Event" className="w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The gathering served as validation of a powerful institutional pipeline rather than a traditional student showcase. By bridging deep academic research with commercial execution, JatHub aims to anchor a unique ecosystem where elite global talent intersects with enterprise-ready technology.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img2.url} alt="Demo Day Presentation" className="rounded-lg w-full h-auto" />
        <img src={img3.url} alt="Judges and Participants Networking" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Event Highlights</h3>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li><strong>Global Talent:</strong> The showcase featured elite international student entrepreneurs hailing from the UK, Zurich, Paris, Berlin, Hong Kong, and Thailand.</li>
        <li><strong>Disruptive Technologies:</strong> Participants pitched enterprise-ready solutions across dynamic fields, including Agentic AI, AI visual creation, gaming, and immersive media.</li>
        <li><strong>Industry Validation:</strong> To evaluate commercial scalability and stress-test these concepts, top-tier industry leaders joined the judging panel. The panel included Yujing (Nora) Chen, PhD (Fotor), Osman Ersoy (IBM), Aymen Menjli (nDreams), and Jyoti Pannu (Global travel digital platform).</li>
      </ul>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A special acknowledgment was extended to the broader ecosystem supporters, including Google, Roblox, and Foundation Ventures Group, for their pivotal roles in fostering this innovation hub. Additionally, IBM delivered an insightful keynote speech focusing on the deployment of enterprise-grade AI, providing invaluable strategic direction for both corporate partners and scaling founders.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img4.url} alt="Industry Leaders on Panel" className="rounded-lg w-full h-auto" />
        <img src={img5.url} alt="Keynote Speech by IBM" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Looking Ahead: Scaling into Frontier Tech</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The recent Demo Day is merely the foundation of JatHub's broader mission. Moving forward, the organization plans to expand its operational thesis beyond marketing into high-barrier verticals that are expected to shape tomorrow's economy. These future strategic pillars include:
      </p>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li>AI Infrastructure &amp; Agentic Ecosystems</li>
        <li>Fintech &amp; Next-Gen Commerce</li>
        <li>BioTech &amp; Health Innovation</li>
        <li>Space Tech &amp; Deep Tech Solutions</li>
      </ul>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img6.url} alt="Networking at Canary Wharf" className="rounded-lg w-full h-auto" />
        <img src={img7.url} alt="JatHub Founder Ecosystem" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        JatHub remains dedicated to building the infrastructure necessary to empower the next wave of venture-backed founders. Whether stakeholders are seeking early-stage alpha, corporate innovation pipelines, or a strong foundation for their next big build, the platform continues to solidify its position as the premier destination for technological intersection.
      </p>
    </NewsArticle>
  );
};

export default NewsUCLDemoDay;