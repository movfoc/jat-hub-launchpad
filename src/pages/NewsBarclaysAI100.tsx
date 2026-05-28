import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/news/barclays/barclays_1.jpg";
import img2 from "@/assets/news/barclays/barclays_2.jpg";
import img3 from "@/assets/news/barclays/barclays_3.jpg";
import img4 from "@/assets/news/barclays/barclays_4.jpg";
import img5 from "@/assets/news/barclays/barclays_5.jpg";
import imgCover from "@/assets/news/barclays/barclays_cover.jpg";
import img7 from "@/assets/news/barclays/barclays_7.jpg";

const NewsBarclaysAI100 = () => {
  return (
    <NewsArticle
      date="MAY 28, 2026"
      title="JatHub Joins UK's Top Innovators at Barclays AI:100 Event"
      subtitle="London, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        On May 28th, JatHub CIC proudly took its place among the UK's most exciting and ambitious artificial intelligence companies at the highly anticipated Barclays AI:100 event. Hosted at the Google London office, the gathering served as a premier platform for innovators actively shaping the future of AI across various industries and society.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Representing JatHub among this prestigious cohort of industry pioneers were Chairperson <strong>Vian LAU</strong> and Co-Founder <strong>Frankie L.</strong> Their presence underscored JatHub's ongoing commitment to driving forward the conversations, partnerships, and opportunities that are accelerating the UK AI ecosystem.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img1} alt="Barclays AI:100 Event Entrance" className="rounded-lg w-full h-auto" />
        <img src={img2} alt="Event Networking Session" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Setting the Tone: Innovation and Responsibility</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The summit commenced with two deeply insightful keynote sessions delivered by Abdul Qureshi and Graham Drury. These opening remarks set a powerful tone for the day, centering the dialogue on critical themes such as sustainable innovation, scaling intelligent solutions, and the urgent need for responsible AI adoption in an increasingly automated world.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Following the keynotes, attendees were engaged by a series of dynamic panel discussions. Featuring leading voices from across the AI landscape—including Chaz Englander, Justin Lyon, Shamal Thakar, and Hugo Rayne—the panels unpacked valuable perspectives on how artificial intelligence is moving beyond theoretical applications to transform global industries at scale.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img3} alt="Panel Discussion at AI:100" className="rounded-lg w-full h-auto" />
        <img src={img4} alt="Keynote Speaker Session" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Fueling the UK AI Ecosystem</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The momentum of the UK AI sector was palpable throughout the event, bolstered by the presence and support of key partners and ecosystem builders. Collaborators such as EY, Cooper Parry, Emerald Technology, Wilson Sonsini Goodrich & Rosati, and Barclays Eagle Labs played a pivotal role in facilitating these high-level discussions.
      </p>

      <div className="my-8 rounded-lg overflow-hidden">
        <img src={img5} alt="Audience at Barclays AI:100" className="w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        JatHub extends its gratitude to the numerous industry leaders and organizers—including Stephen Brown, Benjamin Storey, Daniel Glazer, Abigail Cook, Vim Maru, Dan Cooper, and many others—who made the summit a resounding success. The cross-pollination of ideas among such diverse stakeholders is what continues to drive the UK's competitive edge in global tech.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        As the domestic ecosystem continues to accelerate, JatHub remains deeply excited to be a part of this vibrant community. We look forward to building on the partnerships forged at Barclays AI:100 and exploring new opportunities to push the boundaries of what artificial intelligence can achieve.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={imgCover} alt="JatHub Representatives" className="rounded-lg w-full h-auto" />
        <img src={img7} alt="Event Highlights" className="rounded-lg w-full h-auto" />
      </div>
    </NewsArticle>
  );
};

export default NewsBarclaysAI100;