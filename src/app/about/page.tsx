import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex space-x-4">
            <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60" asChild>
              <Link href="https://instagram.com/newcohorts" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-matcha/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-12 h-12 text-cream" />
            </div>
            <p className="text-sm text-gray-200 mt-2">New Cohorts</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About New Cohorts
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            We believe that meaningful friendships are built through consistent connection, 
            not random encounters. That's why we created New Cohorts.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg leading-relaxed mb-6">
              Amsterdam is a city full of opportunities, but it can also feel isolating. 
              We've seen too many people struggle to build meaningful connections in a city 
              where everyone seems busy and transient.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Traditional meetups and friend-matching apps often lead to one-off encounters 
              that don't develop into lasting friendships. We realized that what people really 
              need is <strong>consistency</strong> – the same group of people, meeting regularly, 
              building trust and familiarity over time.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              That's how New Cohorts was born. We create small, intimate groups of 12-16 people 
              who commit to meeting every week for 6 weeks. This isn't just networking – 
              it's friendship building.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-lg bg-white">
              <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-matcha" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Consistency</h3>
              <p className="text-slate-600 leading-relaxed">
                The same people, every week. This creates the familiarity and trust needed 
                for real friendships to form.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-0 shadow-lg bg-white">
              <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-matcha" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Authenticity</h3>
              <p className="text-slate-600 leading-relaxed">
                We focus on genuine connections, not networking. Our activities are designed 
                for bonding and getting to know each other.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-0 shadow-lg bg-white">
              <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-matcha" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Community</h3>
              <p className="text-slate-600 leading-relaxed">
                We're building a community of people who value deep connections and 
                meaningful relationships in Amsterdam.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            How We Work
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Careful Selection</h3>
                <p className="text-slate-600 leading-relaxed">
                  We carefully select participants who are committed to showing up every week 
                  and open to forming real connections. This isn't for everyone – it's for 
                  people who are serious about building friendships.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Intentional Matching</h3>
                <p className="text-slate-600 leading-relaxed">
                  We form cohorts of 12-16 people with similar availability and interests. 
                  We consider factors like age, lifestyle, and goals to create groups where 
                  people are likely to connect.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Structured Activities</h3>
                <p className="text-slate-600 leading-relaxed">
                  Each week, we organize activities designed to help people bond and get to 
                  know each other. From coffee walks to cooking classes, every activity is 
                  chosen to facilitate connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Our Commitment to You
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-matcha" />
            </div>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              We Handle Everything
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              You don't need to plan anything. We organize all the activities, book venues, 
              and handle logistics. You just need to show up and be open to connecting.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">What We Provide:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Weekly activity planning</li>
                  <li>• Venue bookings</li>
                  <li>• Group coordination</li>
                  <li>• Community support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">What We Ask:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Attend 5 out of 6 sessions</li>
                  <li>• Be open and authentic</li>
                  <li>• Respect others' time</li>
                  <li>• Commit to the process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            If this resonates with you, we'd love to have you in our next cohort.
          </p>
          
          <Badge className="bg-white/90 text-slate-800 px-4 py-2 text-sm font-medium mb-8">
            ✨ €120 for 6 weeks • 12 events • Limited spots available
          </Badge>
          
          <Button 
            size="lg" 
            className="bg-matcha text-white hover:bg-matcha/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="https://sink.newcohorts.com/signup" target="_blank" rel="noopener noreferrer">
              Apply for Next Cohort
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
