import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FounderData } from "@/types/sections";

interface FoundersSectionProps {
  founders?: FounderData[];
}

const defaultFounders: FounderData[] = [
  {
    name: "Pascal Brokmeier",
    role: "Product & Operations",
    image: "/logos/founders/pascal.jpg",
    imageAlt: "Pascal Brokmeier, co-founder of New Cohorts, Product & Operations lead",
    bio: [
      "Pascal has moved multiple times across Europe and spent years helping exchange students hit the ground running. He's coordinated Erasmus-style arrivals, onboarding weeks, and social programs so people didn't fall through the cracks.",
      "Professionally, he's led engineering teams in Amsterdam and beyond; today he works in data/AI and has headed data engineering at Every Cure after several years at McKinsey's QuantumBlack AI practice."
    ],
    quickFacts: "Amsterdam-based; data/AI background; experienced community on-ramp organizer."
  },
  {
    name: "Patrick Akil",
    role: "Community & Storytelling",
    image: "/logos/founders/patrick.png",
    imageAlt: "Patrick Akil, co-founder of New Cohorts, Community & Storytelling lead",
    bio: [
      "Patrick is a software engineer and long-time community builder who hosts the \"Beyond Coding\" podcast: weekly conversations about tech, entrepreneurship, and the human side of work.",
      "He's trained engineers, facilitated meetups, and speaks frequently about communication, teamwork, and career growth: the exact ingredients that help strangers become a functioning community."
    ],
    quickFacts: "NL-based engineer; podcast host; focused on connection, learning, and momentum."
  }
];

export function FoundersSection({ founders = defaultFounders }: FoundersSectionProps) {
  return (
    <section className="py-20 px-4 bg-white" aria-labelledby="founders-heading">
      <div className="max-w-6xl mx-auto">
        <h1 id="founders-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          The people behind New Cohorts
        </h1>
        
        {/* Why we're doing this */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            Why we're doing this
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 text-center">
            Moving to a new city can feel exciting and isolating. We're building structured, 
            time-boxed cohorts so newcomers land with an instant circle, a shared calendar, 
            and a clear path from "I just arrived" to "I belong here." It's personal for both of us.
          </p>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <Card key={founder.name} className="p-8 border-0 shadow-lg bg-white">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src={founder.image} 
                    alt={founder.imageAlt}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{founder.name}</h3>
                <Badge className="bg-matcha/10 text-matcha border-matcha/20">{founder.role}</Badge>
              </div>
              
              <div className="space-y-4 text-slate-700">
                {founder.bio.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-medium text-slate-600 mb-2">Quick facts:</p>
                  <p className="text-sm text-slate-600">
                    {founder.quickFacts}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Shared belief */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Our shared belief
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Belonging shouldn't be a matter of luck. With a clear cohort, a six-week shared agenda, 
            and lightweight accountability, anyone can plug into a city's social fabric fast. 
            We're here to make that first month feel like month twelve: fewer awkward cold starts, 
            more meaningful reps together.
          </p>
        </div>
      </div>
    </section>
  );
}
