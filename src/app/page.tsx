import { SimpleTimeline } from "@/components/SimpleTimeline";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
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
    "https://instagram.com/new.cohorts"
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
        <ProblemSolutionSection />
        <HowItWorksSection />
        <SimpleTimeline />
        {/* <TestimonialSection /> */}
        <FAQSection />
        <FinalCTASection
          title="Ready to Build Real Friendships?"
          subtitle="Pre-register for our first cohort starting January 2026. Limited to 20-30 spots."
          buttonText="Pre-register for January"
        />
      </div>
    </>
  );
}
