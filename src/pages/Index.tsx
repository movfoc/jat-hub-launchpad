import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { EventGallery } from "@/components/EventGallery";
import { News } from "@/components/News";
import { NIHRWidget } from "@/components/NIHRWidget";
import { Mission } from "@/components/Mission";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <NIHRWidget />
        <News />
        <Events />
        <EventGallery />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>);

};

export default Index;