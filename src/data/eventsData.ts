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

// Poster thumbnails (reuse existing newscard thumbnails)
import microsoftPoster from "@/assets/posters/microsoft-london.jpeg";
import ovhcloudPoster from "@/assets/ovhcloud-newscard.png";
import esportsPoster from "@/assets/esports-newscard.png";
import roundtablePoster from "@/assets/roundtable-newscard.png";
import aiMarketingPoster from "@/assets/ai-marketing-thumbnail.png";
import partTimePoster from "@/assets/part-time-thumbnail.png";

// Full event posters
import GGJ1 from "@/assets/news/game-jam/GGJ_1.jpeg";
import GGJ2 from "@/assets/news/game-jam/GGJ_2.jpeg";
import GGJPanel from "@/assets/news/game-jam/GGJ_Panel.jpeg";
import GGJStudents3 from "@/assets/news/game-jam/GGJ_Students_3.jpeg";
import GGJStudents4 from "@/assets/news/game-jam/GGJ_Students_4.jpeg";
import GGJVenue from "@/assets/news/game-jam/GGJ_Venue.jpg";
import GGJNetworking1 from "@/assets/news/game-jam/GGJ_Networking_1.jpg";
import GGJStudent5 from "@/assets/news/game-jam/GGJ_Student_5.jpg";
import GGJStudent6 from "@/assets/news/game-jam/GGJ_Student_6.jpg";
import GGJTeam1 from "@/assets/news/game-jam/GGJ_Team_1.jpg";
import GGJNetworking2 from "@/assets/news/game-jam/GGJ_Networking_2.jpg";
import GGJGroupDiscussion from "@/assets/news/game-jam/GGJ_Group_Discussion.jpg";
import GGJPresentation from "@/assets/news/game-jam/GGJ_Presentation.jpg";
import GGJGroupPhoto from "@/assets/news/game-jam/GGJ_Group_Photo.jpeg";
import GGJParticipant from "@/assets/news/game-jam/GGJ_Participant.jpg";
import GGJFinalGroup from "@/assets/news/game-jam/GGJ_Final_Group.jpg";
import GGJTeamUnderMask from "@/assets/news/game-jam/GGJ_Team_UnderMask.jpg";
import GGJTeamMaskedWarrior from "@/assets/news/game-jam/GGJ_Team_MaskedWarrior.jpg";
import GGJTeamTrenches from "@/assets/news/game-jam/GGJ_Team_Trenches.jpg";
import GGJDay2Screen from "@/assets/news/game-jam/GGJ_Day2_Screen.jpeg";
import GGJSpeakers from "@/assets/news/game-jam/GGJ_Speakers.jpg";
import GGJGroupBanner from "@/assets/news/game-jam/GGJ_Group_Banner.jpeg";
import GGJOrganisers from "@/assets/news/game-jam/GGJ_Organisers.jpeg";
import GGJClassroom from "@/assets/news/game-jam/GGJ_Classroom.jpg";
import GGJDay2Group from "@/assets/news/game-jam/GGJ_Day2_Group.jpg";
import GGJSnacks from "@/assets/news/game-jam/GGJ_Snacks.jpeg";
import GGJStudentsChat from "@/assets/news/game-jam/GGJ_Students_Chat.jpeg";
import GGJCoding1 from "@/assets/news/game-jam/GGJ_Coding_1.jpg";
import GGJCoding2 from "@/assets/news/game-jam/GGJ_Coding_2.jpg";

import SummitGroup from "@/assets/news/ucl-summit/Summit_Group.png";
import SummitVenue from "@/assets/news/ucl-summit/Summit_Venue.jpg";
import SummitPanel from "@/assets/news/ucl-summit/Summit_Panel.jpg";
import SummitSpeakers from "@/assets/news/ucl-summit/Summit_Speakers.jpg";
import SummitCertificates from "@/assets/news/ucl-summit/Summit_Certificates.jpg";
import SummitNetworking from "@/assets/news/ucl-summit/Summit_Networking.jpg";
import SummitOrganisers from "@/assets/news/ucl-summit/Summit_Organisers.jpg";
import SummitTeam from "@/assets/news/ucl-summit/Summit_Team.jpg";
import SummitAudience from "@/assets/news/ucl-summit/Summit_Audience.jpg";
import SummitMorning1 from "@/assets/news/ucl-summit/Summit_Morning_1.jpg";
import SummitMorning2 from "@/assets/news/ucl-summit/Summit_Morning_2.jpg";
import SummitMorning3 from "@/assets/news/ucl-summit/Summit_Morning_3.jpg";
import SummitAfternoon1 from "@/assets/news/ucl-summit/Summit_Afternoon_1.jpg";
import SummitAfternoon2 from "@/assets/news/ucl-summit/Summit_Afternoon_2.jpg";
import SummitBooth from "@/assets/news/ucl-summit/Summit_Booth.jpg";
import SummitTeamGroup from "@/assets/news/ucl-summit/Summit_Team_Group.jpg";
import SummitPanelistsCerts from "@/assets/news/ucl-summit/Summit_Panelists_Certs.jpg";
import SummitAudienceWide from "@/assets/news/ucl-summit/Summit_Audience_Wide.jpg";
import SummitGoogleSpeaker from "@/assets/news/ucl-summit/Summit_Google_Speaker.jpg";
import SummitThumbsUp from "@/assets/news/ucl-summit/Summit_Thumbs_Up.jpg";
import SummitUCLSpeaker from "@/assets/news/ucl-summit/Summit_UCL_Speaker.jpg";
import SummitKeynote from "@/assets/news/ucl-summit/Summit_Keynote.jpg";
import SummitSpeakerStanding from "@/assets/news/ucl-summit/Summit_Speaker_Standing.jpg";
import SummitAudienceCityview from "@/assets/news/ucl-summit/Summit_Audience_Cityview.jpg";

import digitalMarketingPoster from "@/assets/posters/digital-marketing-summit.png";
import gameJamPoster from "@/assets/posters/global-game-jam.png";
import ovhcloudEventPoster from "@/assets/posters/ovhcloud.png";
import esportsEventPoster from "@/assets/posters/esports.png";
import aiMarketingWorkshopPoster from "@/assets/posters/ai-marketing-workshop.jpeg";
import houseOfLordsPoster from "@/assets/posters/house-of-lords.jpeg";
import partTimeFairPoster from "@/assets/posters/part-time-fair.jpeg";

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "digital-marketing-summit",
    title: "Digital Marketing & Gamified Economy Summit",
    date: "FEB 17, 2026",
    description: "A full-day summit at UCL School of Management exploring the intersection of digital marketing, gamified economies, and emerging technologies.",
    poster: digitalMarketingPoster,
    media: [
      { type: "image", src: SummitGroup, alt: "Summit group photo" },
      { type: "image", src: SummitVenue, alt: "Summit venue at UCL" },
      { type: "image", src: SummitPanel, alt: "Panel discussion" },
      { type: "image", src: SummitSpeakers, alt: "Summit speakers" },
      { type: "image", src: SummitAudience, alt: "Summit audience" },
      { type: "image", src: SummitMorning1, alt: "Morning session 1" },
      { type: "image", src: SummitMorning2, alt: "Morning session 2" },
      { type: "image", src: SummitMorning3, alt: "Morning session 3" },
      { type: "image", src: SummitAfternoon1, alt: "Afternoon session 1" },
      { type: "image", src: SummitAfternoon2, alt: "Afternoon session 2" },
      { type: "image", src: SummitCertificates, alt: "Certificate ceremony" },
      { type: "image", src: SummitNetworking, alt: "Networking session" },
      { type: "image", src: SummitOrganisers, alt: "Summit organisers" },
      { type: "image", src: SummitTeam, alt: "Summit team" },
      { type: "image", src: SummitBooth, alt: "JatHub booth at summit" },
      { type: "image", src: SummitTeamGroup, alt: "Summit team group photo" },
      { type: "image", src: SummitPanelistsCerts, alt: "Panelists with certificates" },
      { type: "image", src: SummitAudienceWide, alt: "Audience wide view" },
      { type: "image", src: SummitGoogleSpeaker, alt: "Google AI speaker" },
      { type: "image", src: SummitThumbsUp, alt: "Speakers thumbs up" },
      { type: "image", src: SummitUCLSpeaker, alt: "UCL speaker presenting" },
      { type: "image", src: SummitKeynote, alt: "Keynote speaker with city view" },
      { type: "image", src: SummitSpeakerStanding, alt: "Speaker presenting to audience" },
      { type: "image", src: SummitAudienceCityview, alt: "Audience with London cityscape" },
    ],
  },
  {
    id: "global-game-jam",
    title: "Global Game Jam 2026",
    date: "JAN 27 - 29, 2026",
    description: "Three-day game development marathon at the University of Surrey, bringing together developers, artists, and designers.",
    poster: gameJamPoster,
    media: [
      { type: "image", src: GGJGroupBanner, alt: "Group photo with JatHub banner" },
      { type: "image", src: GGJOrganisers, alt: "Game Jam organisers" },
      { type: "image", src: GGJVenue, alt: "Game Jam venue setup" },
      { type: "image", src: GGJClassroom, alt: "Classroom presentation" },
      { type: "image", src: GGJSnacks, alt: "Participants enjoying snacks" },
      { type: "image", src: GGJStudentsChat, alt: "Students discussing" },
      { type: "image", src: GGJCoding1, alt: "Participant coding" },
      { type: "image", src: GGJCoding2, alt: "Developer working on game" },
      { type: "image", src: GGJDay2Group, alt: "Day 2 group photo" },
      { type: "image", src: GGJPanel, alt: "Global Game Jam panel discussion" },
      { type: "image", src: GGJNetworking1, alt: "Networking at Game Jam" },
      { type: "image", src: GGJNetworking2, alt: "Mentors chatting with participants" },
      { type: "image", src: GGJGroupDiscussion, alt: "Group discussion" },
      { type: "image", src: GGJTeam1, alt: "Team collaborating" },
      { type: "image", src: GGJStudents3, alt: "Students collaborating" },
      { type: "image", src: GGJStudents4, alt: "Student developing game" },
      { type: "image", src: GGJStudent5, alt: "Participant at workstation" },
      { type: "image", src: GGJStudent6, alt: "Students working together" },
      { type: "image", src: GGJParticipant, alt: "Game Jam participant" },
      { type: "image", src: GGJDay2Screen, alt: "Day 2 online presentation" },
      { type: "image", src: GGJTeamUnderMask, alt: "Team Under the Mask with their game" },
      { type: "image", src: GGJTeamMaskedWarrior, alt: "Team Masked Warrior with their game" },
      { type: "image", src: GGJTeamTrenches, alt: "Team The Trenches with their game" },
      { type: "video", src: "https://www.youtube.com/embed/ubXGtEEkYZk" },
      { type: "video", src: "https://www.youtube.com/embed/HYIOBKydFt0" },
    ],
  },
  {
    id: "esports-visit",
    title: "JatHub: Visit College of Esports",
    date: "JAN 10, 2026",
    description: "An exclusive visit to the College of Esports at Queen Elizabeth Olympic Park.",
    poster: esportsEventPoster,
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
    poster: houseOfLordsPoster,
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
    poster: ovhcloudEventPoster,
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
    poster: aiMarketingWorkshopPoster,
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
    poster: partTimeFairPoster,
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
