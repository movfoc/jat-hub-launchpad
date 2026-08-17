import { NewsArticle } from "@/components/NewsArticle";
import img0 from "@/assets/sickle-cell/sickle-cell-0.jpg.asset.json";
import img1 from "@/assets/sickle-cell/sickle-cell-1.jpg.asset.json";
import img2 from "@/assets/sickle-cell/sickle-cell-2.jpg.asset.json";
import img3 from "@/assets/sickle-cell/sickle-cell-3.jpg.asset.json";
import img5 from "@/assets/sickle-cell/sickle-cell-5.jpg.asset.json";
import img6 from "@/assets/sickle-cell/sickle-cell-6.jpg.asset.json";
import img7 from "@/assets/sickle-cell/sickle-cell-7.jpg.asset.json";
import img8 from "@/assets/sickle-cell/sickle-cell-8.jpg.asset.json";
import img9 from "@/assets/sickle-cell/sickle-cell-9.jpg.asset.json";
import img10 from "@/assets/sickle-cell/sickle-cell-10.jpg.asset.json";

const NewsWorldSickleCellDay = () => {
  return (
    <NewsArticle
      date="JUNE 19 - 20, 2026"
      title="World Sickle Cell Day: The First Breathe Project Event"
      subtitle="Guildford Baptist Church, Millmead"
    >
      <h3 className="text-2xl font-bold text-foreground mt-4 mb-4">Day 1 — June 19</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        JatHub was honoured to lead the very first event under our Breathe project, coming together with Crafting Smiles and Tree of Life Balloon Art to support the Sickle Cell Society for a fundraising and awareness event at Guildford Baptist Church, Millmead.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img1.url} alt="Community group photo at the World Sickle Cell Day event" className="rounded-lg w-full h-auto" />
        <img src={img0.url} alt="Welcome balloon arch at the fundraiser" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The day brought together members of our community through a charity walk, fundraising activities, and vital conversations to help more people understand what sickle cell is. From handmade crafts and balloon art fundraising to Breathe wellbeing activities, this is what happens when people collaborate to create positive community impact 🌿🧶🎈
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img2.url} alt="Encouragement cards on the sponsored walk" className="rounded-lg w-full h-auto" />
        <img src={img3.url} alt="Walkers on the fundraising walk" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A special thank you to Mapalo, a sickle cell warrior, who joined us and bravely shared her personal experience. To help the wider community truly connect with the cause, one of our church leaders interviewed Mapalo to discuss:
      </p>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li>🩸 What sickle cell is</li>
        <li>🩸 How it impacts everyday life</li>
        <li>🩸 Why awareness, support, and research matter</li>
      </ul>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img6.url} alt="Volunteers with balloon art" className="rounded-lg w-full h-auto" />
        <img src={img7.url} alt="JatHub and Tree of Life stand" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Day 2 — June 20</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        🩸 Continuing the journey: Day 2 of Sickle Cell Awareness. Different strengths. One shared purpose. 💙
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Following a powerful Saturday, JatHub continued to lead the momentum for our launch Breathe project event into Sunday at Guildford Baptist Church, Millmead.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Our day began behind the scenes with preparation work alongside our incredible partners, Crafting Smiles, Tree of Life Balloon Art and our volunteer teams. Together, we used creativity, wellbeing initiatives, and community participation to champion World Sickle Cell Day. We carried this mission into both the morning and night church services, sharing the cause with the congregation and continuing our fundraising efforts alongside Mapalo, the inspiring sickle cell warrior who joined us throughout the weekend.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={img5.url} alt="Team at the JatHub banner" className="rounded-lg w-full h-auto" />
        <img src={img8.url} alt="Supporters at the exhibition" className="rounded-lg w-full h-auto" />
        <img src={img9.url} alt="Volunteers with heart balloons" className="rounded-lg w-full h-auto" />
        <img src={img10.url} alt="Community members celebrating together" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        We encourage everyone to learn more about the{" "}
        <a href="/breathe.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
          Breathe project
        </a>
        , share awareness, and support organisations working to improve the lives of people affected by sickle cell.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Together, small actions can create meaningful impact. Thank you to everyone who listened, donated, and engaged with us this weekend. 🌿🧶🎈
      </p>
    </NewsArticle>
  );
};

export default NewsWorldSickleCellDay;
