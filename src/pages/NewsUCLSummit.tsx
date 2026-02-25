import { NewsArticle } from "@/components/NewsArticle";
import summitGroup from "@/assets/news/ucl-summit/Summit_Group.png";
import summitVenue from "@/assets/news/ucl-summit/Summit_Venue.jpg";
import summitPanel from "@/assets/news/ucl-summit/Summit_Panel.jpg";
import summitSpeakers from "@/assets/news/ucl-summit/Summit_Speakers.jpg";
import summitCertificates from "@/assets/news/ucl-summit/Summit_Certificates.jpg";
import summitNetworking from "@/assets/news/ucl-summit/Summit_Networking.jpg";
import summitOrganisers from "@/assets/news/ucl-summit/Summit_Organisers.jpg";
import summitTeam from "@/assets/news/ucl-summit/Summit_Team.jpg";
import summitAudience from "@/assets/news/ucl-summit/Summit_Audience.jpg";
import summitAfternoon1 from "@/assets/news/ucl-summit/Summit_Afternoon_1.jpg";
import summitAfternoon2 from "@/assets/news/ucl-summit/Summit_Afternoon_2.jpg";

const NewsUCLSummit = () => {
  return (
    <NewsArticle
      date="FEB 17, 2026"
      title="JatHub x UCL Summit: Shaping the Future of Digital Marketing & Gamified Economies"
      subtitle="London, United Kingdom">

      <p className="text-lg text-muted-foreground leading-relaxed">
        High above Canary Wharf on Level 50 of One Canada Square, JatHub partnered with the UCL School of Management to host the highly anticipated Digital Marketing & Gamified Economy Summit.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Taking place on February 17th, the event coincided beautifully with the Lunar New Year and UCL's landmark 200th Anniversary. It served as a powerful bridge connecting over 150 students, founders, venture capitalists, and industry professionals from more than 20 universities to explore how AI, Web3, and gaming are fundamentally rewriting the rules of digital marketing.
      </p>

      {/* Venue + Audience */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={summitVenue} alt="Summit venue at One Canada Square with London skyline" className="rounded-lg w-full h-auto" />
        <img src={summitAudience} alt="Attendees at the Digital Marketing Summit" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Morning Sessions: Engineering Engagement and Web3 Playbooks</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The day kicked off with an exploration of how infrastructure and AI are merging to create deeply personalized user experiences. Keynote speakers set a forward-looking tone:
      </p>

      <ul className="list-none text-lg text-muted-foreground leading-relaxed space-y-4">
        <li>
          <strong className="text-foreground">Narinder Patti (Google Cloud) & Arham Khan</strong> discussed how AI is moving beyond simple points and leaderboards. Using multimodal models, marketing is evolving into adaptive, cinematic, real-time brand experiences.
        </li>
        <li>
          <strong className="text-foreground">Benjamin Storey (Barclays)</strong> delivered a masterclass on the infrastructure needed to support entrepreneurs beyond the idea stage, emphasizing that innovation requires access to real capital and networks.
        </li>
        <li>
          <strong className="text-foreground">Jyoti Pannu (Global Online Travel Platform)</strong> dove into behavioural psychology at scale, sharing a clear message: in the modern digital landscape, engagement isn't just captured; it is engineered.
        </li>
      </ul>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        The morning concluded with a dynamic panel on Web3 Digital Marketing Playbooks, moderated by Doro Unger-Lee (Ava Labs). Experts including Omar Abi Issa (OVHcloud), Tanguy Dewavrin (StarPAL.AI), and Melanie Dow (Foundation Ventures Group) unpacked community-led growth, on-chain reputation, and how brands are building sustainable Metaverse engagement models beyond the initial hype.
      </p>

      {/* Panel + Speakers */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={summitPanel} alt="Panel discussion at Digital Marketing Summit" className="rounded-lg w-full h-auto" />
        <img src={summitSpeakers} alt="Speakers at the summit" className="rounded-lg w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Afternoon Sessions: Live AI, Tokenization, and Gaming Ecosystems</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        As the summit transitioned into the afternoon, the focus shifted to bold ideas and live demonstrations.
      </p>

      <ul className="list-none text-lg text-muted-foreground leading-relaxed space-y-4">
        


        <li>
          <strong className="text-foreground">Robby Yung (Animoca Brands)</strong> provided a macro perspective on digital advertising, predicting the decline of the traditional web model and positioning mobile games as the ultimate proving ground for a tokenized global economy.
        </li>
        <li>
          <strong className="text-foreground">Bubba Gaeddert (University Campus of Esports)</strong> unpacked the psychology of games, asking the audience to consider how digital experiences train behaviours and generate real economic value.
        </li>
      </ul>

      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        The afternoon panel on Building Tomorrow's Game Ecosystems brought grounded, practical advice to emerging talent. Panellists like Malika Omarova (Wargaming) and Jack Anderson (nDreams) encouraged attendees to step out of their comfort zones, keep experimenting with AI, and communicate across disciplines to thrive in the modern gaming industry.
      </p>

      {/* Afternoon certificate photos */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={summitAfternoon1} alt="Certificate presentation at the afternoon session" className="rounded-lg w-full h-auto" />
        <img src={summitAfternoon2} alt="Certificate presentation with speaker" className="rounded-lg w-full h-auto" />
      </div>

      <div className="my-8 rounded-lg overflow-hidden">
        <img alt="Networking at the summit" className="w-full h-auto rounded-lg" src="/lovable-uploads/9952fccc-ef82-43d4-8fcf-66126885f49e.jpg" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Empowering the Next Generation of Builders</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At its core, JatHub is about connecting ambitious students with real industry opportunities. The summit proudly featured live innovation project presentations from student delegates, complete with real-time feedback from VC representatives.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A massive thank you to the brilliant student innovators who showcased their work, including:
      </p>

      <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed pl-4 space-y-2">
        <li><strong className="text-foreground">Mohammad Allahham & Suvan Goel</strong> (UCL)</li>
        <li><strong className="text-foreground">Shafi Maahe</strong> (Imperial College London)</li>
        <li><strong className="text-foreground">SAMEEH C K</strong> (West London College)</li>
        <li><strong className="text-foreground">Saumio Victor</strong> (University of Cambridge)</li>
      </ul>

      {/* Certificates + Team */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img alt="Certificate presentation at the summit" className="rounded-lg w-full h-auto" src="/lovable-uploads/9eeeb1f7-2e1e-46c7-9d01-f67d308a7dc7.jpg" />
        <img alt="Summit team photo" className="rounded-lg w-full h-auto" src="/lovable-uploads/20c7ecb4-10c2-4fdd-9362-84f99dd4e3e3.jpg" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Attendees represented a massive cross-section of academic talent, with delegates from the University of Oxford, University of Surrey, New York University, University of Warwick, and many more.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The room was filled with curiosity, bold questions, and meaningful connections. As the digital economy becomes more interactive, programmable, and participatory, JatHub remains committed to helping our community stay at the forefront of the conversation.
      </p>

      {/* Organisers */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        
      </div>

      {/* Group photo full width */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={summitGroup} alt="Full group photo at the Digital Marketing & Gamified Economy Summit" className="w-full h-auto rounded-lg" />
      </div>
    </NewsArticle>);

};

export default NewsUCLSummit;