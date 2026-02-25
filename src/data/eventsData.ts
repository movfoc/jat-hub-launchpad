// Centralized event data for gallery & timeline
import microsoftVisit1 from "@/assets/news/microsoft/Microsoft_Visit_1.jpeg";
import microsoftVisit2 from "@/assets/news/microsoft/Microsoft_Visit_2.jpg";
import microsoftVisit3 from "@/assets/news/microsoft/Microsoft_Visit_3.jpeg";
import microsoftVisit6 from "@/assets/news/microsoft/Microsoft_Visit_6.jpeg";
import microsoftVisit7 from "@/assets/news/microsoft/Microsoft_Visit_7.jpeg";
import microsoftVisit8 from "@/assets/news/microsoft/Microsoft_Visit_8.jpeg";

import ovhcloudImg1 from "@/assets/news/ovhcloud/OVHcloud_1.jpeg";
import ovhcloudImg2 from "@/assets/news/ovhcloud/OVHcloud_2.jpeg";
import ovhcloudImg3 from "@/assets/news/ovhcloud/OVHcloud_3.jpeg";
import ovhcloudImg5 from "@/assets/news/ovhcloud/OVHcloud_5.jpeg";
import ovhcloudImg7 from "@/assets/news/ovhcloud/OVHcloud_7.jpeg";

import esportImg1 from "@/assets/news/esports/Esport_1.jpeg";
import esportImg2 from "@/assets/news/esports/Esport_2.jpeg";
import esportImg3 from "@/assets/news/esports/Esport_3.jpeg";
import esportImg4 from "@/assets/news/esports/Esport_4.jpeg";

import roundtableImg1 from "@/assets/news/house-of-lords/Roundtable_1.jpeg";
import roundtableImg2 from "@/assets/news/house-of-lords/Roundtable_2.jpeg";
import roundtableImg5 from "@/assets/news/house-of-lords/Roundtable_5.jpeg";
import roundtableImg7 from "@/assets/news/house-of-lords/Roundtable_7.jpeg";

import odosImg1 from "@/assets/news/ai-marketing/ODOS_Thaicamp_1.jpeg";
import odosImg2 from "@/assets/news/ai-marketing/ODOS_Thaicamp_2.jpeg";
import odosImg4 from "@/assets/news/ai-marketing/ODOS_Thaicamp_4.jpeg";
import odosImg8 from "@/assets/news/ai-marketing/ODOS_Thaicamp_8.jpeg";

import partTimePic2 from "@/assets/news/parttime/Part_time_pics_2.jpeg";
import partTimePic4 from "@/assets/news/parttime/Part_time_pics_4.jpeg";
import partTimePic7 from "@/assets/news/parttime/Part_time_pics_7.jpeg";

// Poster / thumbnail imports
import microsoftThumbnail from "@/assets/microsoft-visit-thumbnail.png";
import ovhcloudThumbnail from "@/assets/ovhcloud-newscard.png";
import esportsThumbnail from "@/assets/esports-newscard.png";
import roundtableThumbnail from "@/assets/roundtable-newscard.png";
import aiMarketingThumbnail from "@/assets/ai-marketing-thumbnail.png";
import partTimeThumbnail from "@/assets/part-time-thumbnail.png";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  poster: string;
  photos: string[];
  youtubeId?: string;
  newsLink?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "house-of-lords",
    date: "DEC 18, 2025",
    title: "Jathub at Westminster: Defining the UK's Digital Future",
    subtitle: "House of Lords, London",
    description:
      "Our Founder Vian Lau was invited to the House of Lords for a roundtable on 'Decentralised Digital Economies and UK Growth', chaired by Baroness Manzila Uddin.",
    poster: roundtableThumbnail,
    photos: [roundtableImg7, roundtableImg1, roundtableImg2, roundtableImg5],
    newsLink: "/news/house-of-lords",
  },
  {
    id: "ovhcloud-london",
    date: "NOV 25, 2025",
    title: "Jathub x OVHcloud Insight Day: Igniting Future Tech Leaders",
    subtitle: "OVHcloud London Office",
    description:
      "Students from four UK universities visited OVHcloud London for a day of mentorship, fireside chats on Blockchain, Web3, AI, and hands-on networking.",
    poster: ovhcloudThumbnail,
    photos: [ovhcloudImg1, ovhcloudImg2, ovhcloudImg3, ovhcloudImg5, ovhcloudImg7],
    youtubeId: "o4lohuiuBq8",
    newsLink: "/news/ovhcloud-london",
  },
  {
    id: "esports-visit",
    date: "NOV 22, 2025",
    title: "Jathub Explores the College of Esports",
    subtitle: "Queen Elizabeth Olympic Park, London",
    description:
      "Jathub visited the world's first university-level esports institution, exploring sim racing, broadcast studios, and gaming labs.",
    poster: esportsThumbnail,
    photos: [esportImg1, esportImg2, esportImg3, esportImg4],
    newsLink: "/news/esports-visit",
  },
  {
    id: "microsoft-london",
    date: "NOV 14, 2025",
    title: "From Student to Tech Professional",
    subtitle: "Microsoft London Office",
    description:
      "JAT Hub members explored tech career pathways at Microsoft London, hearing from industry professionals and current interns.",
    poster: microsoftThumbnail,
    photos: [microsoftVisit1, microsoftVisit2, microsoftVisit3, microsoftVisit6, microsoftVisit7, microsoftVisit8],
    youtubeId: "44JsLBUiVkQ",
    newsLink: "/news/microsoft-london",
  },
  {
    id: "ai-marketing",
    date: "OCT 29, 2025",
    title: "AI Video Skills Unlocked",
    subtitle: "University of Surrey",
    description:
      "JAT Hub and Odos Summer Camp partnered for an 'AI for Marketing & Media' workshop, teaching young creators to produce AI-generated video content.",
    poster: aiMarketingThumbnail,
    photos: [odosImg1, odosImg2, odosImg4, odosImg8],
    newsLink: "/news/ai-marketing",
  },
  {
    id: "parttime-fair",
    date: "OCT 1, 2025",
    title: "Bridging Education and Opportunity",
    subtitle: "University of Surrey Student Hall",
    description:
      "JAT Hub participated in the Part-Time Job Fair, connecting a diverse pool of students with real-world opportunities.",
    poster: partTimeThumbnail,
    photos: [partTimePic7, partTimePic2, partTimePic4],
    newsLink: "/news/parttime-fair",
  },
];
