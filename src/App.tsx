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
import BHFTraining from "./pages/BHFTraining";
import XPlore from "./pages/XPlore";
import EventHistory from "./pages/EventHistory";

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
          <Route path="/news/microsoft-london" element={<NewsMicrosoftLondon />} />
          <Route path="/news/parttime-fair" element={<NewsPartTimeFair />} />
          <Route path="/news/ai-marketing" element={<NewsAIMarketing />} />
          <Route path="/news/esports-visit" element={<NewsEsportsVisit />} />
          <Route path="/news/ovhcloud-london" element={<NewsOVHcloud />} />
          <Route path="/news/house-of-lords" element={<NewsHouseOfLords />} />
          <Route path="/xplore" element={<XPlore />} />
          <Route path="/events" element={<EventHistory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
