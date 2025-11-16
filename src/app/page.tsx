import { SimpleTimeline } from "@/components/SimpleTimeline";
import { HeroSection } from "@/components/sections/HeroSection";
import { FoundingMemberBenefitsSection } from "@/components/sections/FoundingMemberBenefitsSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BuildingTogetherSection } from "@/components/sections/BuildingTogetherSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE_CONFIG } from "@/lib/constants";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "logo": SITE_CONFIG.logo,
  "sameAs": [
    "https://instagram.com/newcohortscom"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL"
  },
  "offers": {
    "@type": "Offer",
    "name": "6-Week Friendship Cohort Program",
    "description": "Structured 6-week program to build lasting friendships in Amsterdam",
    "price": "150",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-charcoal via-slate-800 to-charcoal">
        <HeroSection />
        <FoundingMemberBenefitsSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <SimpleTimeline />
        {/* <TestimonialSection /> */}
        <BuildingTogetherSection />
        <FAQSection />
        <FinalCTASection
          title="Join Our Founding Cohort - January 2026"
          subtitle="Pre-register now to secure founding member pricing and help shape the program. Limited to 40 spots."
          buttonText="Reserve Your Founding Member Spot"
        />
      </div>
    </>
  );
}