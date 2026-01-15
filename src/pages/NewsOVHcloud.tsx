import { NewsArticle } from "@/components/NewsArticle";

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

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">A Day of Curiosity and Connection</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Hosted at the OVHcloud London office, the event was far more than a standard company visit—it was a day packed with energy, learning, and collaboration.
      </p>

      {/* Placeholder for images - will be added later */}
      <div className="my-8 bg-muted/20 border border-border rounded-lg p-8 text-center">
        <p className="text-muted-foreground italic">Images coming soon</p>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The session kicked off with a warm welcome from the OVHcloud team and opening remarks by Emma Dennard, setting the stage for how Cloud and AI are actively shaping the future. This was followed by a series of curiosity-driven conversations, where students moved from passive listening to active "small group idea exchanges."
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Mentorship in Action</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        A highlight of the Insight Day was the deep engagement between students and industry veterans. We extend a special thank you to our mentors—Adam O., Rodney Matthias, Deepak Vasant Shetty, and Balazs Madarasz—who went beyond technical talk to share their personal career journeys and tips.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        From the lively fireside chats covering Blockchain, Web3, and AI, to the candid discussions during the networking sessions, the mentors provided our students and graduates with a realistic roadmap of industry challenges and opportunities.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Building Bridges and Memories</h3>

      <p className="text-lg text-muted-foreground leading-relaxed">
        While there were gifts shared to mark the occasion, what mattered most was the genuine connection and inspiration in the room. The event was made possible thanks to the fantastic support of Frankie L., Omar Abi Issa, and Anne-Sophie Monnier, who helped organize a seamless experience.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        At Jathub, we believe in connecting universities, industry, and young talent. The Jathub x OVHcloud Insight Day was a perfect example of community in action.
      </p>
    </NewsArticle>
  );
};

export default NewsOVHcloud;
