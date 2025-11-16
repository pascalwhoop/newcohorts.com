import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function FinalCTASection({
  title = "First cohort starts January 2026",
  subtitle = "Pre-register now. Join our private community chat and connect with your future cohort before January.",
  buttonText = "Pre-register Now",
  buttonHref = SOCIAL_LINKS.signup
}: FinalCTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-charcoal via-slate-800 to-charcoal">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>

        <p className="text-xl text-gray-200 mb-6 whitespace-pre-line">
          {subtitle}
        </p>

        <p className="text-sm text-gray-300 mb-8">
          Early spots available. Limited pre-registration slots.
        </p>

        <Button
          size="lg"
          className="bg-matcha text-white hover:bg-matcha/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href={buttonHref} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </div>
    </section>
  );
}
