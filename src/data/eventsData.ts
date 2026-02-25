// Centralized event data for the Event Gallery and Event History pages.
// Replace placeholder images with actual event poster/photo URLs.

export interface EventMedia {
  type: "image" | "video";
  src: string;        // image path or YouTube embed URL
  alt?: string;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  description?: string;
  poster: string;     // poster image for the homepage carousel
  media: EventMedia[];
}

// Import existing photos
import Microsoft1 from "@/assets/news/microsoft/Microsoft_Visit_1.jpeg";
import Microsoft2 from "@/assets/news/microsoft/Microsoft_Visit_2.jpg";
import Microsoft3 from "@/assets/news/microsoft/Microsoft_Visit_3.jpeg";
import Microsoft4 from "@/assets/news/microsoft/Microsoft_Visit_4.jpeg";
import Microsoft5 from "@/assets/news/microsoft/Microsoft_Visit_5.jpeg";
import Microsoft6 from "@/assets/news/microsoft/Microsoft_Visit_6.jpeg";
import Microsoft7 from "@/assets/news/microsoft/Microsoft_Visit_7.jpeg";
import Microsoft8 from "@/assets/news/microsoft/Microsoft_Visit_8.jpeg";
import Microsoft9 from "@/assets/news/microsoft/Microsoft_Visit_9.jpg";
import Microsoft10 from "@/assets/news/microsoft/Microsoft_Visit_10.jpg";
import Microsoft11 from "@/assets/news/microsoft/Microsoft_Visit_11.jpg";

import OVH1 from "@/assets/news/ovhcloud/OVHcloud_1.jpeg";
import OVH2 from "@/assets/news/ovhcloud/OVHcloud_2.jpeg";
import OVH3 from "@/assets/news/ovhcloud/OVHcloud_3.jpeg";
import OVH4 from "@/assets/news/ovhcloud/OVHcloud_4.jpg";
import OVH5 from "@/assets/news/ovhcloud/OVHcloud_5.jpeg";
import OVH6 from "@/assets/news/ovhcloud/OVHcloud_6.jpeg";
import OVH7 from "@/assets/news/ovhcloud/OVHcloud_7.jpeg";

import Esport1 from "@/assets/news/esports/Esport_1.jpeg";
import Esport2 from "@/assets/news/esports/Esport_2.jpeg";
import Esport3 from "@/assets/news/esports/Esport_3.jpeg";
import Esport4 from "@/assets/news/esports/Esport_4.jpeg";
import Esport5 from "@/assets/news/esports/Esport_5.jpeg";

import HoL1 from "@/assets/news/house-of-lords/Roundtable_1.jpeg";
import HoL2 from "@/assets/news/house-of-lords/Roundtable_2.jpeg";
import HoL3 from "@/assets/news/house-of-lords/Roundtable_3.jpeg";
import HoL4 from "@/assets/news/house-of-lords/Roundtable_4.jpeg";
import HoL5 from "@/assets/news/house-of-lords/Roundtable_5.jpeg";
import HoL6 from "@/assets/news/house-of-lords/Roundtable_6.jpeg";
import HoL7 from "@/assets/news/house-of-lords/Roundtable_7.jpeg";

import AI1 from "@/assets/news/ai-marketing/ODOS_Thaicamp_1.jpeg";
import AI2 from "@/assets/news/ai-marketing/ODOS_Thaicamp_2.jpeg";
import AI3 from "@/assets/news/ai-marketing/ODOS_Thaicamp_3.jpeg";
import AI4 from "@/assets/news/ai-marketing/ODOS_Thaicamp_4.jpeg";
import AI5 from "@/assets/news/ai-marketing/ODOS_Thaicamp_5.jpeg";
import AI6 from "@/assets/news/ai-marketing/ODOS_Thaicamp_6.jpeg";
import AI7 from "@/assets/news/ai-marketing/ODOS_Thaicamp_7.jpeg";
import AI8 from "@/assets/news/ai-marketing/ODOS_Thaicamp_8.jpeg";
import AI9 from "@/assets/news/ai-marketing/ODOS_Thaicamp_9.jpeg";

import PT1 from "@/assets/news/parttime/Part_time_pics_1.jpeg";
import PT2 from "@/assets/news/parttime/Part_time_pics_2.jpeg";
import PT3 from "@/assets/news/parttime/Part_time_pics_3.jpeg";
import PT4 from "@/assets/news/parttime/Part_time_pics_4.jpeg";
import PT5 from "@/assets/news/parttime/Part_time_pics_5.jpeg";
import PT6 from "@/assets/news/parttime/Part_time_pics_6.jpeg";
import PT7 from "@/assets/news/parttime/Part_time_pics_7.jpeg";

// Poster thumbnails
import microsoftPoster from "@/assets/microsoft-visit-thumbnail.png";
import ovhcloudPoster from "@/assets/posters/ovhcloud-london.png";
import esportsPoster from "@/assets/posters/esports-visit.png";
import roundtablePoster from "@/assets/roundtable-newscard.png";
import aiMarketingPoster from "@/assets/ai-marketing-thumbnail.png";
import partTimePoster from "@/assets/part-time-thumbnail.png";
import digitalMarketingPoster from "@/assets/posters/digital-marketing-summit.png";
import gameJamPoster from "@/assets/posters/global-game-jam.png";

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "digital-marketing-summit",
    title: "Digital Marketing & Gamified Economy Summit",
    date: "FEB 17, 2026",
    description: "A full-day summit at UCL School of Management exploring the intersection of digital marketing, gamified economies, and emerging technologies.",
    poster: digitalMarketingPoster,
    media: [
      // Add photos and videos here
      // { type: "image", src: "/path/to/image.jpg", alt: "Summit photo" },
      // { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID" },
    ],
  },
  {
    id: "global-game-jam",
    title: "Global Game Jam 2026",
    date: "JAN 27 - 29, 2026",
    description: "Three-day game development marathon at the University of Surrey, bringing together developers, artists, and designers.",
    poster: gameJamPoster,
    media: [],
  },
  {
    id: "esports-visit",
    title: "JatHub: Visit College of Esports",
    date: "JAN 10, 2026",
    description: "An exclusive visit to the College of Esports at Queen Elizabeth Olympic Park.",
    poster: esportsPoster,
    media: [
      { type: "image", src: Esport1, alt: "Esports visit 1" },
      { type: "image", src: Esport2, alt: "Esports visit 2" },
      { type: "image", src: Esport3, alt: "Esports visit 3" },
      { type: "image", src: Esport4, alt: "Esports visit 4" },
      { type: "image", src: Esport5, alt: "Esports visit 5" },
    ],
  },
  {
    id: "house-of-lords",
    title: "UK House of Lords Roundtable: Decentralised Digital Economies and UK Growth",
    date: "DEC 18, 2025",
    description: "An exclusive roundtable discussion at the House of Lords exploring decentralised digital economies.",
    poster: roundtablePoster,
    media: [
      { type: "image", src: HoL1, alt: "Roundtable 1" },
      { type: "image", src: HoL2, alt: "Roundtable 2" },
      { type: "image", src: HoL3, alt: "Roundtable 3" },
      { type: "image", src: HoL4, alt: "Roundtable 4" },
      { type: "image", src: HoL5, alt: "Roundtable 5" },
      { type: "image", src: HoL6, alt: "Roundtable 6" },
      { type: "image", src: HoL7, alt: "Roundtable 7" },
    ],
  },
  {
    id: "ovhcloud-london",
    title: "Jathub x OVHcloud Insight Day: Igniting Future Tech Leaders",
    date: "NOV 25, 2025",
    description: "A visit to OVHcloud's London office exploring cloud infrastructure and emerging technologies.",
    poster: ovhcloudPoster,
    media: [
      { type: "image", src: OVH1, alt: "OVHcloud visit 1" },
      { type: "image", src: OVH2, alt: "OVHcloud visit 2" },
      { type: "image", src: OVH3, alt: "OVHcloud visit 3" },
      { type: "image", src: OVH4, alt: "OVHcloud visit 4" },
      { type: "image", src: OVH5, alt: "OVHcloud visit 5" },
      { type: "image", src: OVH6, alt: "OVHcloud visit 6" },
      { type: "image", src: OVH7, alt: "OVHcloud visit 7" },
      { type: "video", src: "https://www.youtube.com/embed/o4lohuiuBq8" },
    ],
  },
  {
    id: "microsoft-london",
    title: "Visit Microsoft London – From Student to Tech Professional",
    date: "NOV 14, 2025",
    description: "An inspiring visit to Microsoft's London office, bridging the gap from student life to tech careers.",
    poster: microsoftPoster,
    media: [
      { type: "image", src: Microsoft1, alt: "Microsoft visit 1" },
      { type: "image", src: Microsoft2, alt: "Microsoft visit 2" },
      { type: "image", src: Microsoft3, alt: "Microsoft visit 3" },
      { type: "image", src: Microsoft4, alt: "Microsoft visit 4" },
      { type: "image", src: Microsoft5, alt: "Microsoft visit 5" },
      { type: "image", src: Microsoft6, alt: "Microsoft visit 6" },
      { type: "image", src: Microsoft7, alt: "Microsoft visit 7" },
      { type: "image", src: Microsoft8, alt: "Microsoft visit 8" },
      { type: "image", src: Microsoft9, alt: "Microsoft visit 9" },
      { type: "image", src: Microsoft10, alt: "Microsoft visit 10" },
      { type: "image", src: Microsoft11, alt: "Microsoft visit 11" },
      { type: "video", src: "https://www.youtube.com/embed/44JsLBUiVkQ" },
    ],
  },
  {
    id: "ai-marketing",
    title: "AI for Marketing & Media Workshop",
    date: "OCT 29, 2025",
    description: "A hands-on workshop at the University of Surrey exploring AI applications in marketing and media.",
    poster: aiMarketingPoster,
    media: [
      { type: "image", src: AI1, alt: "AI Marketing 1" },
      { type: "image", src: AI2, alt: "AI Marketing 2" },
      { type: "image", src: AI3, alt: "AI Marketing 3" },
      { type: "image", src: AI4, alt: "AI Marketing 4" },
      { type: "image", src: AI5, alt: "AI Marketing 5" },
      { type: "image", src: AI6, alt: "AI Marketing 6" },
      { type: "image", src: AI7, alt: "AI Marketing 7" },
      { type: "image", src: AI8, alt: "AI Marketing 8" },
      { type: "image", src: AI9, alt: "AI Marketing 9" },
    ],
  },
  {
    id: "parttime-fair",
    title: "Part-Time Job Fair",
    date: "OCT 1, 2025",
    description: "A career fair at the University of Surrey connecting students with part-time employment opportunities.",
    poster: partTimePoster,
    media: [
      { type: "image", src: PT1, alt: "Part-time fair 1" },
      { type: "image", src: PT2, alt: "Part-time fair 2" },
      { type: "image", src: PT3, alt: "Part-time fair 3" },
      { type: "image", src: PT4, alt: "Part-time fair 4" },
      { type: "image", src: PT5, alt: "Part-time fair 5" },
      { type: "image", src: PT6, alt: "Part-time fair 6" },
      { type: "image", src: PT7, alt: "Part-time fair 7" },
    ],
  },
];
