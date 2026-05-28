import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/news/dementia/dementia_1.jpg";
import img2 from "@/assets/news/dementia/dementia_2.jpg";
import img3 from "@/assets/news/dementia/dementia_3.jpg";
import img4 from "@/assets/news/dementia/dementia_4.jpg";
import img5 from "@/assets/news/dementia/dementia_5.jpg";
import imgCover from "@/assets/news/dementia/dementia_cover.jpg";

const NewsMemoryWellbeing = () => {
  return (
    <NewsArticle
      date="MAY 22, 2026"
      title="JatHub Champions Community Health and Innovation at the Memory and Wellbeing Festival"
      subtitle="Bracknell, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        On May 21st, Princess Square in Bracknell became a vibrant hub of community support, creativity, and health awareness during the annual Memory and Wellbeing Festival. JatHub CIC, true to its core philosophy that true innovation is rooted in human connection, proudly supported this inspiring initiative dedicated to memory health and dementia awareness.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Events like the Memory and Wellbeing Festival serve as a vital reminder that social innovation extends far beyond technology and code; it is fundamentally about prioritizing people, enhancing health outcomes, and building stronger, more supportive communities together.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img1} alt="Community gathering at Princess Square" className="rounded-lg w-full h-auto" />
        <img src={img2} alt="Festival awareness stall" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">A Collaborative Effort for Social Impact</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The festival was made possible through a powerful coalition of local organizations and charities. JatHub extended special gratitude to the co-organizers who spearheaded the event:
      </p>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li><strong>Alzheimer's Society:</strong> For providing essential help and bringing hope to everyone navigating life with dementia.</li>
        <li><strong>Berkshire Healthcare NHS Foundation Trust:</strong> For their steadfast dedication to maintaining and improving community healthcare standards.</li>
        <li><strong>Bracknell Forest Council:</strong> For seamlessly facilitating the event and bringing the local community together at Princess Square.</li>
      </ul>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        The success of the day was further amplified by contributions from Alzheimer's Research UK, Barchester Healthcare, Greensleeves Care, and Younger People with Dementia—all demonstrating a united front in memory care.
      </p>

      <div className="my-8 rounded-lg overflow-hidden">
        <img src={img3} alt="Creative activities at the festival" className="w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Connecting Generations Through Creativity</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Beyond the informative discussions, the festival celebrated heart and creativity. JatHub partnered closely with community groups <em>Crafting Smiles</em> and <em>Tree of Life</em>, whose stunning balloon and crochet creations added a joyful and artistic dimension to the day.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img4} alt="Balloon creations by Crafting Smiles" className="rounded-lg w-full h-auto" />
        <img src={img5} alt="Crochet creations by Tree of Life" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At JatHub, our ongoing mission is to seamlessly connect students, startups, universities, and organizations to drive collaborative social impact. Represented at the festival by team members including Vian LAU, Frankie L., Lawrence Tse, Yanle (Leona) LI, Yuan-Yuan W., and Rebecca Fairlamb, we are deeply committed to engaging the younger generation in these vital societal conversations.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We look forward to continuing these meaningful collaborations and building an even more inclusive, supportive ecosystem in the events to come.
      </p>

      <div className="my-8 rounded-lg overflow-hidden">
        <img src={imgCover} alt="JatHub team and partners at the Wellbeing Festival" className="w-full h-auto" />
      </div>
    </NewsArticle>
  );
};

export default NewsMemoryWellbeing;