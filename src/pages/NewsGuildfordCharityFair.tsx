import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/guildford-fair/guildford-fair-1.jpg.asset.json";
import img2 from "@/assets/guildford-fair/guildford-fair-2.jpeg.asset.json";
import img3 from "@/assets/guildford-fair/guildford-fair-3.jpeg.asset.json";
import img4 from "@/assets/guildford-fair/guildford-fair-4.jpg.asset.json";
import img5 from "@/assets/guildford-fair/guildford-fair-5.jpeg.asset.json";
import img6 from "@/assets/guildford-fair/guildford-fair-6.jpg.asset.json";

const NewsGuildfordCharityFair = () => {
  return (
    <NewsArticle
      date="NOVEMBER 1, 2026"
      title="JatHub Hosts Charity Table at the Combined Charities Christmas Fair in Guildford"
      subtitle="Guildhall, Guildford High Street"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        On Sunday 1st November 2026, JatHub CIC hosted a charity table at the Combined Charities Christmas Fair, held from 11am to 4pm at the Guildhall on Guildford High Street. Our table had a very special spot &mdash; right in front of the portrait of Queen Elizabeth II.
      </p>

      <div className="my-8">
        <img
          src={img5.url}
          alt="The JatHub team at their charity table in front of the Queen Elizabeth II portrait at the Guildhall"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        It was a joy to gather alongside so many wonderful Guildford charities under one roof. The warmth in the room &mdash; neighbours catching up, families browsing the stalls, and charities cheering each other on &mdash; was a beautiful reminder of what community really means.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We also had the absolute honour of welcoming the Mayor of Guildford, Cllr Jane Tyson, who stopped by our JatHub CIC charity booth on the High Street. It meant the world to our team to share our work and our Future of Youth festival series with her.
      </p>

      <div className="my-8">
        <img
          src={img1.url}
          alt="The Mayor of Guildford, Cllr Jane Tyson, visiting the JatHub charity booth"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Throughout the day we loved meeting fellow local charities and community groups, exchanging ideas and finding new ways to support one another.
      </p>

      <div className="my-8 columns-1 md:columns-2 gap-4 space-y-4">
        <img
          src={img2.url}
          alt="JatHub team with the Eczema UK team at the fair"
          className="rounded-lg w-full h-auto break-inside-avoid"
        />
        <img
          src={img3.url}
          alt="JatHub team with Home-Start Guildford at their stall"
          className="rounded-lg w-full h-auto break-inside-avoid"
        />
        <img
          src={img4.url}
          alt="JatHub team with the GRACE charity team at the fair"
          className="rounded-lg w-full h-auto break-inside-avoid"
        />
        <img
          src={img6.url}
          alt="JatHub team sharing Winter Wellfest Guildford flyers at the fair"
          className="rounded-lg w-full h-auto break-inside-avoid"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A huge thank you to the organisers of the Combined Charities Christmas Fair and to everyone who stopped by our table. Days like this show the power of a community that shows up for each other &mdash; and we can&rsquo;t wait to do it again.
      </p>
    </NewsArticle>
  );
};

export default NewsGuildfordCharityFair;
