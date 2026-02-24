import { NewsArticle } from "@/components/NewsArticle";
import ovhcloudImg1 from "@/assets/news/ovhcloud/OVHcloud_1.jpeg";
import ovhcloudImg2 from "@/assets/news/ovhcloud/OVHcloud_2.jpeg";
import ovhcloudImg3 from "@/assets/news/ovhcloud/OVHcloud_3.jpeg";
import ovhcloudImg5 from "@/assets/news/ovhcloud/OVHcloud_5.jpeg";
import ovhcloudImg6 from "@/assets/news/ovhcloud/OVHcloud_6.jpeg";
import ovhcloudImg7 from "@/assets/news/ovhcloud/OVHcloud_7.jpeg";

const NewsOVHcloud = () => {
  return (
    <NewsArticle
      date="NOV 17, 2025"
      title="Jathub x OVHcloud Insight Day: Igniting Future Tech Leaders"
      subtitle="London, United Kingdom"
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        Jathub is dedicated to bridging the gap between academic potential and industrial innovation. On November 17, we were thrilled to host the Jathub x OVHcloud Insight Day, bringing together a cohort of talented students and emerging innovators from four of the UK's leading institutions: University of Surrey, Brunel University London, Imperial College London, and UCL.
      </p>

      {/* Image 1 - Full width */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={ovhcloudImg1} alt="Group photo at OVHcloud London" className="w-full h-auto" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">A Day of Curiosity and Connection</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Hosted at the OVHcloud London office, the event was far more than a standard company visit—it was a day packed with energy, learning, and collaboration.
      </p>

      {/* Images 2 and 3 in grid */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={ovhcloudImg2} alt="OVHcloud team welcoming students" className="rounded-lg w-full h-auto" />
        <img src={ovhcloudImg3} alt="Opening remarks at OVHcloud" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The session kicked off with a warm welcome from the OVHcloud team and opening remarks by Emma Dennard, setting the stage for how Cloud and AI are actively shaping the future. This was followed by a series of curiosity-driven conversations, where students moved from passive listening to active "small group idea exchanges."
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Mentorship in Action</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A highlight of the Insight Day was the deep engagement between students and industry veterans. We extend a special thank you to our mentors—Adam O., Rodney Matthias, Deepak Vasant Shetty, and Balazs Madarasz—who went beyond technical talk to share their personal career journeys and tips.
      </p>

      {/* Images 6 and 5 in grid */}
      <div className="my-8 grid md:grid-cols-2 gap-4">
        <img src={ovhcloudImg6} alt="Networking at OVHcloud" className="rounded-lg w-full h-auto" />
        <img src={ovhcloudImg5} alt="Students engaging with mentors" className="rounded-lg w-full h-auto" />
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        From the lively fireside chats covering Blockchain, Web3, and AI, to the candid discussions during the networking sessions, the mentors provided our students and graduates with a realistic roadmap of industry challenges and opportunities.
      </p>

      {/* Image 7 - Full width */}
      <div className="my-8 rounded-lg overflow-hidden">
        <img src={ovhcloudImg7} alt="Group photo at OVHcloud London" className="w-full h-auto" />
      </div>


      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Building Bridges and Memories</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        While there were gifts shared to mark the occasion, what mattered most was the genuine connection and inspiration in the room. The event was made possible thanks to the fantastic support of Frankie L., Omar Abi Issa, and Anne-Sophie Monnier, who helped organize a seamless experience.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At Jathub, we believe in connecting universities, industry, and young talent. The Jathub x OVHcloud Insight Day was a perfect example of community in action.
      </p>

      {/* YouTube Video */}
      <div className="my-12">
        <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ubXGtEEkYZk"
            title="Surrey Global Gam Jam 2026 | Yes, We made it. From Zero to Playable in 48 Hours! 🚀"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="text-center mt-4">
          <a
            href="https://www.youtube.com/watch?v=ubXGtEEkYZk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Watch on YouTube →
          </a>
        </p>
      </div>
    </NewsArticle>
  );
};

export default NewsOVHcloud;
