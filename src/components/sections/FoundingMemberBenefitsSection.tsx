import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FoundingMemberBenefitsSection() {
  const benefits = [
    "Founding member pricing (locked in for life)",
    "Shape the program - vote on activities",
    "Early access to community chat (December)",
    "Priority selection for all future cohorts",
    "20-30% off regular pricing when we launch"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-matcha/5 via-sage/5 to-matcha/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Why Pre-Register Now?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As a founding member, you'll get exclusive benefits and help shape the future of New Cohorts
          </p>
        </div>

        <Card className="border-matcha/20 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-matcha rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-sm font-semibold text-matcha">
                Limited to first 100 founding members
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
