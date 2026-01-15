import { NewsArticle } from "@/components/NewsArticle";

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

      {/* Placeholder for images - will be added later */}
      <div className="my-8 bg-muted/20 border border-border rounded-lg p-8 text-center">
        <p className="text-muted-foreground italic">Images coming soon</p>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Chaired by Baroness Manzila Uddin, the session—titled "Decentralised Digital Economies and UK Growth"—brought together policymakers and industry leaders to discuss how blockchain-enabled social layers are reshaping games and communities.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">From Entertainment to Economic Infrastructure</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The dialogue at Westminster marked a significant shift in how the UK government views our industry. A central consensus of the roundtable was that gaming must no longer be viewed solely as cultural leisure, but as "core economic infrastructure".
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The discussion highlighted that the true value of blockchain technology lies not in speculation, but in its ability to facilitate revenue sharing, provide scalable payments, and empower creators through interoperable digital ownership.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Addressing the Regulatory Challenge</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Participating in this high-level dialogue allowed Jathub to witness firsthand the urgent need for regulatory clarity. The roundtable identified that the UK risks losing game studios and talent to offshore locations due to current regulatory uncertainty.
      </p>

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

      <p className="text-lg text-muted-foreground leading-relaxed">
        As the UK moves toward "right-sized, principles-based regulation", Jathub is committed to ensuring that students and young innovators remain at the center of this economic revolution.
      </p>
    </NewsArticle>
  );
};

export default NewsHouseOfLords;
