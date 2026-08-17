import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/bristol-workshop/bristol-1.jpg.asset.json";
import img2 from "@/assets/bristol-workshop/bristol-2.jpg.asset.json";
import img3 from "@/assets/bristol-workshop/bristol-3.jpg.asset.json";
import img4 from "@/assets/bristol-workshop/bristol-4.jpg.asset.json";
import img5 from "@/assets/bristol-workshop/bristol-5.jpg.asset.json";
import img6 from "@/assets/bristol-workshop/bristol-6.jpg.asset.json";

const NewsBristolAIGameWorkshop = () => {
  return (
    <NewsArticle
      date="AUGUST 7, 2026"
      title="AI & Game Development Workshop: From Prompt to Play in Bristol"
      subtitle="Brooklands Park Community Centre, Bristol"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        We have officially wrapped up our AI & Game Development Workshop at Brooklands Park Community Centre in Bristol!
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        It was truly inspiring to see young minds dive hands-on into the future of technology. Participants explored how to take their ideas from prompt to reality using AI prototyping tools like Lovable, and stepped into the shoes of game designers using Roblox Studio to build their very own interactive worlds! 💡💻
      </p>

      <div className="my-8">
        <img
          src={img1.url}
          alt="Young participants at the Bristol AI and Game Development Workshop"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A massive THANK YOU to all of our incredible partners —{" "}
        <strong>iHere</strong> &amp; <strong>Me Time Cafe</strong> — supporters, attendees, and families who made this event such a success! Your enthusiasm, curiosity, and energy were top-tier.
      </p>

      <div className="my-8 columns-1 md:columns-2 gap-4 space-y-4">
        <img src={img2.url} alt="Children building games with Roblox Studio" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img3.url} alt="Workshop participants exploring AI prototyping tools" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img4.url} alt="Hands-on game design session at Brooklands Park" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img5.url} alt="Young creators presenting their interactive worlds" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img6.url} alt="Group photo with workshop partners and families" className="rounded-lg w-full h-auto break-inside-avoid" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">More Workshops Coming Soon!</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At JatHub, we are on a mission to empower the next generation to not just consume digital technology, but to create it. We will continue organizing and delivering more AI and game development workshops for kids and teens!
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Make sure to follow our page so you don't miss out on upcoming workshops and the Roblox competition launch! 🔔
      </p>
    </NewsArticle>
  );
};

export default NewsBristolAIGameWorkshop;
