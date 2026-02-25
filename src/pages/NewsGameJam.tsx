import { NewsArticle } from "@/components/NewsArticle";
import ggjGroupBanner from "@/assets/news/game-jam/GGJ_Group_Banner.jpeg";
import ggjOrganisers from "@/assets/news/game-jam/GGJ_Organisers.jpeg";
import ggjClassroom from "@/assets/news/game-jam/GGJ_Classroom.jpg";
import ggjDay2Group from "@/assets/news/game-jam/GGJ_Day2_Group.jpg";
import ggjSnacks from "@/assets/news/game-jam/GGJ_Snacks.jpeg";
import ggjStudentsChat from "@/assets/news/game-jam/GGJ_Students_Chat.jpeg";
import ggjCoding1 from "@/assets/news/game-jam/GGJ_Coding_1.jpg";
import ggjCoding2 from "@/assets/news/game-jam/GGJ_Coding_2.jpg";

const NewsGameJam = () => {
  return (
    <NewsArticle
      date="JAN 30, 2026"
      title="Unmasking the Future of Gaming: JatHub's 2026 Global Game Jam Success at Surrey Business School"
      subtitle="Guildford, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        Between January 27th and 29th, the Innovation for Health Building at the University of Surrey transformed into a bustling hub of creativity, coding, and collaboration for the Surrey Business School Global Game Jam 2026.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Hosted by JatHub in partnership with Abdul Malik, Surrey Business School, and Surrey CompSoc, the dynamic 48-hour hackathon brought together aspiring game developers to ideate, build, and showcase their original creations.
      </p>

      {/* Group banner + Organisers */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={ggjGroupBanner} alt="Global Game Jam group photo with JatHub banner" className="rounded-lg w-full h-auto" />
        <img src={ggjOrganisers} alt="Game Jam organisers and speakers" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Unmasking Creativity</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        This year's official global theme, <strong className="text-foreground">"MASKS,"</strong> challenged the jammers to think outside the box and push their creative limits. The result was a phenomenal showcase of imagination under pressure, culminating in five diverse and playable original titles:
      </p>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li><strong className="text-foreground">Masked by Time</strong></li>
        <li><strong className="text-foreground">Masquerada</strong></li>
        <li><strong className="text-foreground">Masked Warrior</strong></li>
        <li><strong className="text-foreground">Masquerade Murderer</strong></li>
        <li><strong className="text-foreground">Kepler 186F</strong></li>
      </ul>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        Following the intense development sprints, teams proudly stayed behind to demo their projects, sharing their hard work and unique gameplay mechanics with peers and mentors.
      </p>

      {/* Classroom + Snacks */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={ggjClassroom} alt="Game Jam classroom presentation" className="rounded-lg w-full h-auto" />
        <img src={ggjSnacks} alt="Participants enjoying snacks at Game Jam" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Bridging Education and Industry</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Beyond the screens and code, the event provided incredible networking and learning opportunities. The jam featured an impressive lineup of guest speakers and panellists from leading studios and organizations, including EA, Wargaming, Square, Atom Star, and Foundation Ventures Group.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Experts such as Adrian Melville, Keison Rigg, and Katya Prikhodko delivered practical workshops covering everything from defining a "good game" to mastering game marketing and navigating career paths in the highly competitive games industry.
      </p>

      {/* Students chatting full width */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={ggjStudentsChat} alt="Students discussing during Game Jam" className="w-full h-auto rounded-lg" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Community and Collaboration</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The success of the event was a true testament to community collaboration. The Game Innovation Zone, alongside dedicated tutors from the University's Game Design and Music & Media departments, provided the ideal space and mentorship for students to refine their projects.
      </p>

      {/* Coding photos */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={ggjCoding1} alt="Participant coding at Game Jam" className="rounded-lg w-full h-auto" />
        <img src={ggjCoding2} alt="Developer working on game project" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Reflecting on the event, JatHub organizers noted that the room was <em>"full of laughter, excitement, and shared happiness,"</em> perfectly encapsulating JatHub's core motto: <strong className="text-foreground">Dream, Connect, Build Together!!</strong>
      </p>

      {/* Day 2 group photo */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={ggjDay2Group} alt="Day 2 group photo at Game Jam" className="w-full h-auto rounded-lg" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Massive congratulations to all the 2026 jammers. As the local gaming ecosystem in Guildford continues to thrive, JatHub is excited to see where these emerging creators take their talents next.
      </p>

    </NewsArticle>
  );
};

export default NewsGameJam;
