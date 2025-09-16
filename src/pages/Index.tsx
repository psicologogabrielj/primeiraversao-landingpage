import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OnlineTherapySection } from "@/components/OnlineTherapySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <OnlineTherapySection />
      <TestimonialsSection />
      <FAQSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
