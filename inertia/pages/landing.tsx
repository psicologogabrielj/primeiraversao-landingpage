import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CredibilityBadges } from "@/components/CredibilityBadges";
import { AboutSection } from "@/components/AboutSection";
// import { WhyTCCSection } from "@/components/WhyTCCSection";
import { OnlineTherapySection } from "@/components/OnlineTherapySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Head } from "@inertiajs/react";
import { iniciarAnalytics, type AnalyticsConfig } from "@/lib/analytics";
import { DESCRICAO, TITULO, jsonLd } from "@/lib/seo";
import {
  useScrollDepthTracking,
  useSectionVisibilityTracking,
} from "@/hooks/useScrollTracking";
import { useEffect } from "react";

const SECOES_RASTREADAS = ["sobre", "therapy", "testimonials", "faq"];

type Props = {
  analytics: AnalyticsConfig;
  siteUrl: string;
  indexavel: boolean;
};

const Landing = ({ analytics, siteUrl, indexavel }: Props) => {
  // A config chega como prop do servidor, não do build do Vite: trocar um ID
  // não exige rebuild e o SSR não toca em window.
  useEffect(() => iniciarAnalytics(analytics), [analytics]);
  useScrollDepthTracking();
  useSectionVisibilityTracking(SECOES_RASTREADAS);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>{TITULO}</title>
        <meta name="description" content={DESCRICAO} />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta
          name="robots"
          content={
            indexavel
              ? "index, follow, max-image-preview:large, max-snippet:-1"
              : "noindex, follow"
          }
        />
        <meta name="author" content="Gabriel Jesus" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Psicólogo Gabriel Jesus" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={TITULO} />
        <meta property="og:description" content={DESCRICAO} />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Gabriel Jesus, psicólogo clínico — Terapia Cognitivo-Comportamental online"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITULO} />
        <meta name="twitter:description" content={DESCRICAO} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd(siteUrl))}
        </script>
      </Head>
      <Navbar />
      <main>
      <HeroSection />
      <CredibilityBadges />
      <AboutSection />
      {/* Checar se da pra usar isso */}
      {/* <WhyTCCSection /> */}
      <OnlineTherapySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Landing;
