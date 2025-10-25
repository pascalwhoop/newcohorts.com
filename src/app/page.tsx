import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FlipWords } from "@/components/ui/flip-words";
import { BubbleBackground } from "@/components/ui/bubble-background";
import { Instagram, Users, Calendar, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-slate-800 to-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <BubbleBackground
          interactive={true}
          colors={{
            first: '107,142,107', // matcha green
            second: '143,166,142', // sage green
            third: '245,241,237', // cream (warm beige)
            fourth: '58,58,58', // charcoal
            fifth: '120,150,120', // deeper matcha
            sixth: '200,190,180', // warm taupe
          }}
          className="min-h-screen"
        >
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-20 text-center max-w-2xl mx-auto">
              {/* Logo/Badge */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto bg-matcha/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-12 h-12 text-cream" />
                </div>
                <p className="text-sm text-gray-200 mt-2">New Cohorts</p>
              </div>

              {/* Main Headline with Flip Words */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your{" "}
                <FlipWords
                  words={["cohort", "community", "tribe", "crew"]}
                  duration={3000}
                  className="text-matcha"
                />{" "}
                in Amsterdam
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                A 6-week journey with the same group of people.
                <br />
                Build lasting friendships through consistent connection,
                <br />
                not random meetups.
              </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-matcha hover:bg-matcha/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://sink.newcohorts.com/signup" target="_blank" rel="noopener noreferrer">
                Join the Next Cohort
              </a>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium"
              asChild
            >
              <a href="/about">
                About
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium"
              asChild
            >
              <a href="https://instagram.com/newcohorts" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
            </div>
          </div>
        </BubbleBackground>
      </section>

      {/* Problem/Solution Section */}
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
                <p className="text-gray-600 text-sm">Same 12-16 people every week for 6 weeks</p>
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

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            How it works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-matcha rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Apply</h3>
              <p className="text-gray-600">
                Tell us about yourself. We're looking for people committed to showing up every week and open to forming real connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-matcha rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Get matched</h3>
              <p className="text-gray-600">
                We form cohorts of 12-16 people with similar availability and interests. Your cohort becomes your Amsterdam family for 6 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-matcha rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Show up</h3>
              <p className="text-gray-600">
                Commit to weekly meetups. Attend 5 out of 6 sessions. Build friendships that last long after the program ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Week Journey Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Your 6-Week Journey
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Each week builds on the last, creating deeper connections and lasting friendships.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Week 1 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Week 1: Welcome</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                <strong>Activity:</strong> Welcome dinner at a cozy Amsterdam restaurant
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Meet your cohort, share your story, and start building the foundation for lasting friendships.
              </p>
            </Card>

            {/* Week 2 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Week 2: Explore</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                <strong>Activity:</strong> Walking tour of hidden Amsterdam gems
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Discover the city together while getting to know each other's interests and backgrounds.
              </p>
            </Card>

            {/* Week 3 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Week 3: Connect</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                <strong>Activity:</strong> Cooking class or board game night
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Collaborate and have fun together. This is where the real bonding begins.
              </p>
            </Card>

            {/* Week 4 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Week 4: Deepen</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                <strong>Activity:</strong> Coffee walk or museum visit
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Share more personal stories and experiences. The group dynamic is now comfortable and natural.
              </p>
            </Card>

            {/* Week 5 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  5
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Week 5: Celebrate</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                <strong>Activity:</strong> Group celebration or outdoor adventure
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy the strong bonds you've built. Plan future meetups and activities together.
              </p>
            </Card>

            {/* Week 6 */}
            <Card className="p-6 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  6
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Week 6: Continue</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                <strong>Activity:</strong> Farewell dinner and future planning
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Celebrate your journey together and plan how to maintain these friendships long-term.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
            <CardContent>
              <blockquote className="text-lg text-gray-600 italic mb-6">
                "I moved to Amsterdam alone and felt completely lost. My cohort changed everything. Six weeks later, I had a group chat that's active every day, weekend plans with people I genuinely like, and finally feel at home here."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-matcha/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-matcha font-semibold">SC</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-charcoal">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Cohort 2, October 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center">
            Everything you need to know about New Cohorts
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                What exactly is a cohort?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                A cohort is a small group of 12-16 people who commit to meeting every week for 6 weeks. 
                Unlike random meetups, you'll see the same people each week, allowing friendships to develop 
                naturally through consistent interaction and shared experiences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                What if I can't make it to all 6 sessions?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                We understand that life happens! We ask that you attend at least 5 out of 6 sessions. 
                Missing one session is okay, but missing more than that affects the group dynamic and 
                defeats the purpose of building consistent connections.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                What kind of activities do you organize?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                We organize a variety of activities designed for bonding: welcome dinners, walking tours 
                of Amsterdam, cooking classes, board game nights, coffee walks, museum visits, and more. 
                Each activity is chosen to facilitate conversation and connection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                How do you match people in cohorts?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                We consider factors like age range, interests, availability, and lifestyle to create 
                groups where people are likely to connect. We also look for people who are genuinely 
                committed to building friendships and showing up consistently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                What happens after the 6 weeks are over?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                The goal is for your cohort to become your Amsterdam friend group! Most cohorts continue 
                meeting on their own, organizing activities, and building lasting friendships. We also 
                organize occasional alumni events to keep the community connected.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                Is this just for expats or can locals join too?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                New Cohorts is for anyone in Amsterdam looking to build meaningful friendships! 
                While many participants are expats, we welcome locals who are new to the city, 
                looking to expand their social circle, or simply want to meet new people.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                What if I don't click with my cohort?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                We do our best to match compatible people, but we understand that not every group will 
                be perfect. We encourage you to give it a few weeks as initial awkwardness often fades. 
                If there are serious issues, we'll work with you to find a solution.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-charcoal via-slate-800 to-charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to find your people?
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            Next cohort starts Monday, November 18th.
            <br />
            Limited to 16 people. Apply by November 4th.
          </p>


          <Button 
            size="lg" 
            className="bg-matcha text-white hover:bg-matcha/90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://sink.newcohorts.com/signup" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}