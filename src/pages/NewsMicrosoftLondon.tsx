import { NewsArticle } from "@/components/NewsArticle";
import microsoftVisit1 from "@/assets/news/microsoft/Microsoft_Visit_1.jpeg";
import microsoftVisit2 from "@/assets/news/microsoft/Microsoft_Visit_2.jpg";
import microsoftVisit3 from "@/assets/news/microsoft/Microsoft_Visit_3.jpeg";
import microsoftVisit4 from "@/assets/news/microsoft/Microsoft_Visit_4.jpeg";
import microsoftVisit5 from "@/assets/news/microsoft/Microsoft_Visit_5.jpeg";
import microsoftVisit6 from "@/assets/news/microsoft/Microsoft_Visit_6.jpeg";
import microsoftVisit7 from "@/assets/news/microsoft/Microsoft_Visit_7.jpeg";
import microsoftVisit8 from "@/assets/news/microsoft/Microsoft_Visit_8.jpeg";
import microsoftVisit9 from "@/assets/news/microsoft/Microsoft_Visit_9.jpg";
import microsoftVisit10 from "@/assets/news/microsoft/Microsoft_Visit_10.jpg";
import microsoftVisit11 from "@/assets/news/microsoft/Microsoft_Visit_11.jpg";

const NewsMicrosoftLondon = () => {
  return (
    <NewsArticle
      date="NOV 14, 2025"
      title="From Student to Tech Professional"
      subtitle="JAT Hub Members Explored Tech Professional Pathways at Microsoft London"
    >
      <p className="text-muted-foreground leading-relaxed mb-8">
        JAT Hub organized a profoundly inspiring visit for our members to the Microsoft London Office. 
        This exclusive event offered our members a unique glimpse into the heart of innovation and the 
        future of the technology industry.
      </p>

      <img 
        src={microsoftVisit1} 
        alt="Microsoft London Visit - Group Photo" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        The day provided invaluable insights and career guidance, which was immensely enriched by a 
        distinguished panel of professionals and current interns who shared their personal journeys 
        and expertise.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        We extended our sincere gratitude to the entire Microsoft team for generously hosting us.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
        Invaluable Insights from Industry Leaders
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-8">
        The presentations were delivered by experienced professionals and high-achieving interns from 
        the University of Surrey and other leading institutions. We thanked the following featured 
        speakers for their insightful contributions:
      </p>

      {/* Speaker Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground">Omar Elshiekh</h3>
          <p className="text-sm text-muted-foreground">Cloud Solutions Architect Intern</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground">Rayan Popat</h3>
          <p className="text-sm text-muted-foreground">AI Solution Engineer</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground">Aliza Uppal</h3>
          <p className="text-sm text-muted-foreground">AI Skilling Programme Manager</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground">Eniola Olaleye</h3>
          <p className="text-sm text-muted-foreground">Business Programme Manager</p>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card md:col-span-2">
          <h3 className="font-semibold text-foreground">Emmanuel Boateng</h3>
          <p className="text-sm text-muted-foreground">AI Business Solution Engineer</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={microsoftVisit2} 
          alt="Microsoft London Visit - Presentation" 
          className="w-full rounded-xl"
        />
        <img 
          src={microsoftVisit3} 
          alt="Microsoft London Visit - Speaker" 
          className="w-full rounded-xl"
        />
      </div>

      <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
        Distinguished Guests and Expanded Networking
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-4">
        We were also privileged to be joined by esteemed guests whose collective expertise further 
        broadened the scope of discussion:
      </p>

      <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-2">
        <li><strong className="text-foreground">Ela Önal:</strong> Representing Women in CyberSecurity (WiCyS)</li>
        <li><strong className="text-foreground">Ali Abdullah Shahram Shafiq:</strong> Head of Strategy at the Surrey Economics and Finance Society</li>
      </ul>

      <img 
        src={microsoftVisit4} 
        alt="Microsoft London Visit - Networking" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed mb-8">
        Their collective knowledge provided our students with an unparalleled inside look into the 
        tech industry's various sectors and offered priceless, targeted career guidance.
      </p>

      {/* More Images */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <img 
          src={microsoftVisit5} 
          alt="Microsoft London Visit - Session" 
          className="w-full rounded-xl"
        />
        <img 
          src={microsoftVisit6} 
          alt="Microsoft London Visit - Discussion" 
          className="w-full rounded-xl"
        />
        <img 
          src={microsoftVisit7} 
          alt="Microsoft London Visit - Team" 
          className="w-full rounded-xl"
        />
      </div>

      {/* Group Photo */}
      <img 
        src={microsoftVisit8} 
        alt="Microsoft London Visit - Group Photo with JAT Hub Banner" 
        className="w-full rounded-xl mb-8"
      />

      {/* Attendee Photos */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <img 
          src={microsoftVisit9} 
          alt="Microsoft London Visit - Attendees Listening" 
          className="w-full rounded-xl"
        />
        <img 
          src={microsoftVisit10} 
          alt="Microsoft London Visit - Engaged Audience" 
          className="w-full rounded-xl"
        />
      </div>

      <img 
        src={microsoftVisit11} 
        alt="Microsoft London Visit - Student Participation" 
        className="w-full rounded-xl mb-8"
      />

      <p className="text-muted-foreground leading-relaxed">
        This visit served as a powerful motivator, reaffirming JAT Hub's commitment to forging essential 
        connections between ambitious students and leading global companies. The future is bright, and we 
        are incredibly excited for the pathways this experience has opened for our members.
      </p>
    </NewsArticle>
  );
};

export default NewsMicrosoftLondon;
