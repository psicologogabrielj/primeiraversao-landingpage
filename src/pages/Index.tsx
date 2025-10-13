import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OnlineTherapySection } from "@/components/OnlineTherapySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { useTrackEvent } from "@/lib/ga";
import { useScrollDepthTracking } from "@/hooks/useScrollTracking";
import { useEffect } from "react";

const Index = () => {
  const trackEvent = useTrackEvent();

  // Track scroll depth
  useScrollDepthTracking();

  // Track section visibility
  useEffect(() => {
    const sections = ["sobre", "therapy", "testimonials", "faq"];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id;
            trackEvent("Section Visibility", "Viewed", sectionName);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    }

    return () => {
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      }
    };
  }, [trackEvent]);

  const handleWhatsAppHover = () => {
    trackEvent("WhatsApp Button", "Hover", "Floating Button");
  };

  const handleWhatsAppLeave = () => {
    trackEvent("WhatsApp Button", "Leave", "Floating Button");
  };

  const handleWhatsAppClick = () => {
    trackEvent("WhatsApp Button", "Click", "Floating Button");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <OnlineTherapySection />
      <TestimonialsSection />
      <FAQSection />

      <Footer />
      <WhatsAppButton
        onMouseEnter={handleWhatsAppHover}
        onMouseLeave={handleWhatsAppLeave}
        onClick={handleWhatsAppClick}
      />
    </div>
  );
};

export default Index;
