import { AboutNavigation } from "@/components/sections/AboutNavigation";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { OurValuesSection } from "@/components/sections/OurValuesSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { WhatMakesUsDifferentSection } from "@/components/sections/WhatMakesUsDifferentSection";
import { AboutCTASection } from "@/components/sections/AboutCTASection";

export const metadata = {
  title: "About New Cohorts - Meet Pascal & Patrick | Amsterdam Friendship Cohorts",
  description: "Learn about New Cohorts founders Pascal Brokmeier and Patrick Akil, our mission to build meaningful friendships through structured 6-week cohorts in Amsterdam. Discover our story, values, and commitment to community building.",
  keywords: [
    "New Cohorts founders",
    "Pascal Brokmeier",
    "Patrick Akil", 
    "Amsterdam community building",
    "friendship cohorts Amsterdam",
    "expat community Amsterdam",
    "social groups Amsterdam"
  ],
  openGraph: {
    title: "About New Cohorts - Meet Pascal & Patrick",
    description: "Learn about New Cohorts founders Pascal Brokmeier and Patrick Akil, our mission to build meaningful friendships through structured 6-week cohorts in Amsterdam.",
    url: "https://newcohorts.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "New Cohorts Founders Pascal and Patrick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About New Cohorts - Meet Pascal & Patrick",
    description: "Learn about New Cohorts founders Pascal Brokmeier and Patrick Akil, our mission to build meaningful friendships through structured 6-week cohorts in Amsterdam.",
    images: ["/og-about.jpg"],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Skip Navigation for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-matcha text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <AboutNavigation />

      <main id="main-content" className="pt-16">
        <FoundersSection />
        <OurStorySection />
        <OurValuesSection />
        <HowWeWorkSection />
        <WhatMakesUsDifferentSection />
        <AboutCTASection />
      </main>
    </div>
  );
}