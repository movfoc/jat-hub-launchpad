import { NewsArticle } from "@/components/NewsArticle";
import img1 from "@/assets/vine-workshop/Vine_workshop1.jpeg.asset.json";
import img2 from "@/assets/vine-workshop/Vine_workshop2.jpeg.asset.json";
import img3 from "@/assets/vine-workshop/Vine_workshop3.jpeg.asset.json";

const NewsVineCentreAIWorkshop = () => {
  return (
    <NewsArticle
      date="OCTOBER 13, 2026"
      title="Demystifying AI: Highlights from Our Workshop at The Vine Centre"
      subtitle="The Vine Centre"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        We had a fantastic hour at The Vine Centre running a relaxed, hands-on workshop designed to make Artificial Intelligence approachable, practical, and safe for everyday life.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        AI often sounds like something straight out of a science fiction movie, but at its core, it&rsquo;s simply a helpful digital assistant. During our session, we stripped away the technical jargon and focused on real-world value:
      </p>

      <ul className="my-8 space-y-5">
        <li className="rounded-lg border border-border/60 bg-card/50 p-5">
          <span className="block text-foreground font-semibold mb-1">Everyday Assistance</span>
          <span className="text-muted-foreground">
            From creating quick recipes out of leftover fridge ingredients to drafting clear, polite community letters.
          </span>
        </li>
        <li className="rounded-lg border border-border/60 bg-card/50 p-5">
          <span className="block text-foreground font-semibold mb-1">Support for Job Seekers</span>
          <span className="text-muted-foreground">
            How to use AI tools as a personal sounding board to structure cover letters and refresh CVs without staring at a blank screen.
          </span>
        </li>
        <li className="rounded-lg border border-border/60 bg-card/50 p-5">
          <span className="block text-foreground font-semibold mb-1">Online Safety &amp; Privacy</span>
          <span className="text-muted-foreground">
            Essential guidelines on protecting personal data, identifying online scams, and understanding why human double-checking is always necessary.
          </span>
        </li>
      </ul>

      <div className="my-8">
        <img
          src={img1.url}
          alt="Workshop participants and JatHub team posing together at The Vine Centre"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        It was inspiring to see participants gain confidence on the laptops, typing out their first prompts and seeing immediate results.
      </p>

      <div className="my-8 columns-1 md:columns-2 gap-4 space-y-4">
        <img
          src={img2.url}
          alt="Participants using laptops during the hands-on AI workshop at The Vine Centre"
          className="rounded-lg w-full h-auto break-inside-avoid"
        />
        <img
          src={img3.url}
          alt="JatHub workshop facilitators in front of the session welcome slide"
          className="rounded-lg w-full h-auto break-inside-avoid"
        />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A huge thank you to everyone who joined us and to the team at The Vine Centre for hosting. Technology should empower people, not intimidate them&mdash;and seeing that spark of confidence in the room made it a wonderful success!
      </p>
    </NewsArticle>
  );
};

export default NewsVineCentreAIWorkshop;
