import { NewsArticle } from "@/components/NewsArticle";
import roundtableImg1 from "@/assets/news/house-of-lords/Roundtable_1.jpeg";
import roundtableImg2 from "@/assets/news/house-of-lords/Roundtable_2.jpeg";
import roundtableImg3 from "@/assets/news/house-of-lords/Roundtable_3.jpeg";
import roundtableImg4 from "@/assets/news/house-of-lords/Roundtable_4.jpeg";
import roundtableImg5 from "@/assets/news/house-of-lords/Roundtable_5.jpeg";
import roundtableImg6 from "@/assets/news/house-of-lords/Roundtable_6.jpeg";
import roundtableImg7 from "@/assets/news/house-of-lords/Roundtable_7.jpeg";

const NewsHouseOfLords = () => {
  return (
    <NewsArticle
      date="DEC 18, 2025"
      title="Jathub at Westminster: Defining the UK's Digital Future"
      subtitle="House of Lords, London"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        Jathub is proud to announce that our Founder and Chairperson, Vian Lau, was recently invited to the House of Lords to represent the voice of the next generation at a critical industry roundtable.
      </p>

      {/* Official invitation */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={roundtableImg3} alt="Official invitation from Baroness Manzila Uddin to the House of Lords roundtable" className="w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Chaired by Baroness Manzila Uddin, the session—titled "Decentralised Digital Economies and UK Growth"—brought together policymakers and industry leaders to discuss how blockchain-enabled social layers are reshaping games and communities.
      </p>

      {/* Roundtable in session */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={roundtableImg6} alt="The roundtable discussion in session at the House of Lords" className="w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">From Entertainment to Economic Infrastructure</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The dialogue at Westminster marked a significant shift in how the UK government views our industry. A central consensus of the roundtable was that gaming must no longer be viewed solely as cultural leisure, but as "core economic infrastructure".
      </p>

      {/* Networking photos */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={roundtableImg1} alt="Vian Lau networking with industry leaders at House of Lords" className="rounded-lg w-full h-auto" />
        <img src={roundtableImg4} alt="Vian Lau with fellow roundtable participants" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The discussion highlighted that the true value of blockchain technology lies not in speculation, but in its ability to facilitate revenue sharing, provide scalable payments, and empower creators through interoperable digital ownership.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Addressing the Regulatory Challenge</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Participating in this high-level dialogue allowed Jathub to witness firsthand the urgent need for regulatory clarity. The roundtable identified that the UK risks losing game studios and talent to offshore locations due to current regulatory uncertainty.
      </p>

      {/* More networking */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={roundtableImg2} alt="Group photo with Baroness Manzila Uddin and industry leaders" className="rounded-lg w-full h-auto" />
        <img src={roundtableImg5} alt="Vian Lau with fellow participants at the roundtable" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed font-semibold">Key topics included:</p>

      <div className="my-6 bg-muted/30 border border-border rounded-lg p-6 space-y-4">
        <div>
          <p className="text-foreground font-semibold mb-2">• The Financial Promotions Barrier:</p>
          <p className="text-muted-foreground">How current regimes are unintentionally stifling legitimate Web3 business models that rely on user incentives and community-led growth.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-2">• Asset Ownership:</p>
          <p className="text-muted-foreground">The need to clearly distinguish between consumer payments, digital goods, and financial speculation.</p>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-2">• Global Competitiveness:</p>
          <p className="text-muted-foreground">The recognition that youth adoption of digital assets is currently outstripping policy development, creating a pressing need for government action.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Jathub's Mission: Youth, Safety, and Skills</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        While the economic implications are vast, Jathub remains laser-focused on the human element. The roundtable reinforced our belief that safeguarding and consumer trust must be foundational design constraints, not secondary compliance issues.
      </p>

      <div className="my-6 bg-primary/10 border border-primary/30 rounded-lg p-6">
        <p className="text-lg text-muted-foreground italic leading-relaxed">
          "Everything we do at Jathub is rooted in the belief that gaming and decentralised economies are more than just tech—they are where our youth find their voices, learn to lead, and build their communities. I am more inspired than ever to fight for a future that protects our young creators while giving them the boundless opportunities they deserve to shape our world."
        </p>
        <p className="text-primary font-semibold mt-3">— Vian Lau, Founder & Chairperson</p>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        This aligns perfectly with the roundtable's conclusion that gaming is a key factor in digital inclusion and skills development, particularly in collaboration and resource management.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">A Commitment to the Future</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We extend our sincere gratitude to the Secretariat and organizers—Lorna Hutchman (Penrose Partners), Yasmina Kazitani (Blockchain Game Alliance), and Doro Unger-Lee (Ava Labs)—for curating this vital dialogue. We also thank fellow industry leaders, including Robby Yung (Animoca Brands) and Lord Chris Holmes, for their contributions.
      </p>

      {/* Group photo */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={roundtableImg7} alt="Full group photo of all roundtable participants at the House of Lords" className="w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        As the UK moves toward "right-sized, principles-based regulation", Jathub is committed to ensuring that students and young innovators remain at the center of this economic revolution.
      </p>
    </NewsArticle>
  );
};

export default NewsHouseOfLords;
