import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/balloon-ocean/balloon-ocean-1.jpg.asset.json";
import img2 from "@/assets/balloon-ocean/balloon-ocean-2.jpg.asset.json";
import img3 from "@/assets/balloon-ocean/balloon-ocean-3.jpg.asset.json";
import img4 from "@/assets/balloon-ocean/balloon-ocean-4.jpg.asset.json";
import img5 from "@/assets/balloon-ocean/balloon-ocean-5.jpg.asset.json";
import img6 from "@/assets/balloon-ocean/balloon-ocean-6.jpg.asset.json";
import img7 from "@/assets/balloon-ocean/balloon-ocean-7.jpg.asset.json";

const NewsBalloonOceanFunRun = () => {
  return (
    <NewsArticle
      date="AUGUST 8, 2026"
      title="Charity Fun Run 5K & Family Treasure Trail: Balloon Ocean"
      subtitle="Buckler's Park Community Hub"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        🎈 What an incredible day of community, fun, and giving back! 💙
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Team JatHub was thrilled to join and support the Charity Fun Run 5K & Family Treasure Trail, diving headfirst into the amazing Balloon Ocean alongside Tree of Life!
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        From catching balloon sea creatures to capturing special moments for attendees and sharing photos with everyone, it was a fantastic day full of smiles! 📸✨
      </p>

      <div className="my-8">
        <img
          src={img1.url}
          alt="JatHub team at the Balloon Ocean charity fun run"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        🙌 A huge thank you to Buckler's Park Community Hub for providing the wonderful venue support for today’s event! We are also proud to share that all donations collected are going to support{" "}
        <strong>Age Concern Bracknell Forest</strong> (Charity Reg: 1153607) in their vital work for the local community. ❤️
      </p>

      <div className="my-8 columns-1 md:columns-2 gap-4 space-y-4">
        <img src={img2.url} alt="Balloon sea creatures at the family treasure trail" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img3.url} alt="Children enjoying the Balloon Ocean installation" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img4.url} alt="Attendees capturing moments at the fun run" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img5.url} alt="Community smiles at Buckler's Park" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img6.url} alt="Tree of Life balloon art at the charity run" className="rounded-lg w-full h-auto break-inside-avoid" />
        <img src={img7.url} alt="Family fun at the 5K and treasure trail" className="rounded-lg w-full h-auto break-inside-avoid" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Big Things Are Coming... Stay Tuned!</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We are super excited to announce that JatHub is currently organizing a major upcoming fundraising event in collaboration with universities to support the NHS and related parties! 🏥🎓
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        This is going to be something truly special, and we can’t wait to reveal the details. Keep an eye on our page and stay tuned for updates — you won't want to miss what’s next! 👀
      </p>
    </NewsArticle>
  );
};

export default NewsBalloonOceanFunRun;
