import { Card, CardContent } from "@/components/ui/card";
import { TestimonialData } from "@/types/sections";

interface TestimonialSectionProps {
  testimonial?: TestimonialData;
}

const defaultTestimonial: TestimonialData = {
  quote: "I moved to Amsterdam alone and felt completely lost. My cohort changed everything. Six weeks later, I had a group chat that's active every day, weekend plans with people I genuinely like, and finally feel at home here.",
  name: "Sarah Chen",
  cohort: "Cohort 2",
  date: "October 2024",
  initials: "SC"
};

export function TestimonialSection({ testimonial = defaultTestimonial }: TestimonialSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
          <CardContent>
            <blockquote className="text-lg text-gray-600 italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-matcha/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-matcha font-semibold">{testimonial.initials}</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.cohort}, {testimonial.date}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
