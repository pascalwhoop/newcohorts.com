import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Calendar } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-4 bg-card-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-sans text-forest uppercase tracking-wide mb-3">
          Not Another One-Off Meetup
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-charcoal-ink mb-8">
          Consistency builds connections
        </h2>

        <p className="text-lg text-faded-ink mb-12 leading-relaxed max-w-3xl mx-auto font-sans">
          You've been to the drinks. The group hikes. You exchange numbers and... nothing. Real friendships need time. Same 20-30 people, every week, for 6 weeks.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 border-sand">
            <CardContent className="text-center">
              <div className="w-12 h-12 bg-sand/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-serif text-charcoal-ink mb-2">Consistent Group</h3>
              <p className="text-faded-ink text-sm font-sans">Same 20-30 people every week for 6 weeks</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-sand">
            <CardContent className="text-center">
              <div className="w-12 h-12 bg-sand/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-serif text-charcoal-ink mb-2">Real Connections</h3>
              <p className="text-faded-ink text-sm font-sans">Activities designed for bonding, not just networking</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-sand">
            <CardContent className="text-center">
              <div className="w-12 h-12 bg-sand/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-serif text-charcoal-ink mb-2">No Planning</h3>
              <p className="text-faded-ink text-sm font-sans">We plan. You connect.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
