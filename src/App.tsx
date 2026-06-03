import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsMicrosoftLondon from "./pages/NewsMicrosoftLondon";
import NewsPartTimeFair from "./pages/NewsPartTimeFair";
import NewsAIMarketing from "./pages/NewsAIMarketing";
import NewsEsportsVisit from "./pages/NewsEsportsVisit";
import NewsOVHcloud from "./pages/NewsOVHcloud";
import NewsHouseOfLords from "./pages/NewsHouseOfLords";
import NewsGameJam from "./pages/NewsGameJam";
import NewsUCLSummit from "./pages/NewsUCLSummit";
import BHFTraining from "./pages/BHFTraining";
import XPlore from "./pages/XPlore";
import XPloreTracks from "./pages/XPloreTracks";
import XPloreChallenge from "./pages/XPloreChallenge";
import EventHistory from "./pages/EventHistory";
import NewsIndex from "./pages/NewsIndex";
import RobloxWorkshop from "./pages/RobloxWorkshop";
import NewsBarclaysAI100 from "./pages/NewsBarclaysAI100";
import NewsCambridgeRealityX from "./pages/NewsCambridgeRealityX";
import NewsMemoryWellbeing from "./pages/NewsMemoryWellbeing";
import NewsUCLDemoDay from "./pages/NewsUCLDemoDay";
import NIHR from "./pages/NIHR";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bhf-training" element={<BHFTraining />} />
          <Route path="/news" element={<NewsIndex />} />
          <Route path="/news/microsoft-london" element={<NewsMicrosoftLondon />} />
          <Route path="/news/parttime-fair" element={<NewsPartTimeFair />} />
          <Route path="/news/ai-marketing" element={<NewsAIMarketing />} />
          <Route path="/news/esports-visit" element={<NewsEsportsVisit />} />
          <Route path="/news/ovhcloud-london" element={<NewsOVHcloud />} />
          <Route path="/news/house-of-lords" element={<NewsHouseOfLords />} />
          <Route path="/news/game-jam" element={<NewsGameJam />} />
          <Route path="/news/ucl-summit" element={<NewsUCLSummit />} />
          <Route path="/news/barclays-ai100" element={<NewsBarclaysAI100 />} />
          <Route path="/news/cambridge-realityx" element={<NewsCambridgeRealityX />} />
          <Route path="/news/memory-wellbeing" element={<NewsMemoryWellbeing />} />
          <Route path="/news/ucl-demo-day" element={<NewsUCLDemoDay />} />
          <Route path="/xplore" element={<XPlore />} />
          <Route path="/xplore/tracks" element={<XPloreTracks />} />
          <Route path="/xplore/challenge" element={<XPloreChallenge />} />
          <Route path="/events" element={<EventHistory />} />
          <Route path="/roblox-workshop" element={<RobloxWorkshop />} />
          <Route path="/nihr" element={<NIHR />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
