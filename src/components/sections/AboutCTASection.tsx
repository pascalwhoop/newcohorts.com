import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SOCIAL_LINKS, PROGRAM_DETAILS } from "@/lib/constants";

export function AboutCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" aria-labelledby="cta-heading">
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Join Us?
        </h2>

        <p className="text-xl text-gray-200 mb-8">
          Pre-register for our January cohort and join the community chat early.
        </p>
        
        <Badge className="bg-white/90 text-slate-800 px-4 py-2 text-sm font-medium mb-8">
          ✨ {PROGRAM_DETAILS.price} for {PROGRAM_DETAILS.duration} • 12 events • Limited spots available
        </Badge>
        <br />
        
        <Button 
          size="lg" 
          className="bg-matcha text-white hover:bg-matcha/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          asChild
        >
          <Link 
            href={SOCIAL_LINKS.signup} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Apply for the next New Cohorts program"
          >
            Pre-register Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
