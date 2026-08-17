import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/special-school/special-school-1.jpg.asset.json";
import img2 from "@/assets/special-school/special-school-2.jpg.asset.json";
import img3 from "@/assets/special-school/special-school-3.jpg.asset.json";
import img4 from "@/assets/special-school/special-school-4.jpg.asset.json";
import img5 from "@/assets/special-school/special-school-5.jpg.asset.json";
import img6 from "@/assets/special-school/special-school-6.jpg.asset.json";

const NewsSpecialSchoolOpenDay = () => {
  return (
    <NewsArticle
      date="JUNE 28, 2026"
      title="Creating Smiles, Building Communities, Making a Difference"
      subtitle="Portesbery School"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        Jun 28, the team at JatHub had the privilege of supporting Tree of Life and Crafting Smile in a special fundraising event at Portesbery school.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img1.url} alt="JatHub team with the banner at Portesbery School" className="rounded-lg w-full h-auto" />
        <img src={img2.url} alt="Volunteers at the JatHub and Tree of Life stand" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Seeing the joy, creativity, and enthusiasm from the children, families, teachers, and volunteers reminded us why community partnerships matter so much. Every smile we saw today was a powerful reminder that when organisations come together with a shared purpose, we can create meaningful impact for young people who need it most. ❤️
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img3.url} alt="Group selfie with volunteers and visitors" className="rounded-lg w-full h-auto" />
        <img src={img4.url} alt="Children enjoying balloon art at the stand" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At JatHub, we believe that technology, business, and community should work hand in hand. Supporting initiatives like this is part of our mission to:
      </p>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li>✅ Empower local communities</li>
        <li>✅ Create opportunities for young people</li>
        <li>✅ Connect businesses with meaningful social impact</li>
        <li>✅ Build a stronger and more inclusive future together</li>
      </ul>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img5.url} alt="Balloon artistry with families at the open day" className="rounded-lg w-full h-auto" />
        <img src={img6.url} alt="Tree of Life balloon creations on display" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A huge thank you to everyone from Tree of Life and Crafting Smile for their incredible work and dedication. We are honoured to play a small part in this wonderful initiative and look forward to supporting many more community projects in the future. 🌱✨
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Because at JatHub, every connection has the power to create positive change.
      </p>
    </NewsArticle>
  );
};

export default NewsSpecialSchoolOpenDay;
