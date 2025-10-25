import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Calendar } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
          The same people, every week
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Unlike one-off meetups or random friend-matching apps, cohorts keep you with the same group for 6 consecutive weeks. This creates the familiarity and trust needed for real friendships to form.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 border-sage/20">
            <CardContent className="text-center">
              <div className="w-12 h-12 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-matcha" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Consistent Group</h3>
              <p className="text-gray-600 text-sm">Same 25-40 people every week for 6 weeks</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-sage/20">
            <CardContent className="text-center">
              <div className="w-12 h-12 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-matcha" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Real Connections</h3>
              <p className="text-gray-600 text-sm">Activities designed for bonding, not just networking</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-sage/20">
            <CardContent className="text-center">
              <div className="w-12 h-12 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-matcha" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">No Planning</h3>
              <p className="text-gray-600 text-sm">Just show up - we handle all the logistics</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
