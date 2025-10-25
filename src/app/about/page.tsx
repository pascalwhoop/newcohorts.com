import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Skip Navigation for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-matcha text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex space-x-4">
            <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60" asChild>
              <Link 
                href="https://instagram.com/newcohorts" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <main id="main-content" className="pt-20">
        {/* About the Founders Section */}
        <section className="py-20 px-4 bg-white" aria-labelledby="founders-heading">
          <div className="max-w-6xl mx-auto">
            <h1 id="founders-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              About the Founders
            </h1>
            
            {/* Why we're doing this */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                Why we're doing this
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 text-center">
                Moving to a new city can feel exciting—and isolating. We're building structured, 
                time-boxed cohorts so newcomers land with an instant circle, a shared calendar, 
                and a clear path from "I just arrived" to "I belong here." It's personal for both of us.
              </p>
            </div>

            {/* Founders */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Pascal */}
              <Card className="p-8 border-0 shadow-lg bg-white">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image 
                      src="/logos/founders/pascal.jpg" 
                      alt="Pascal Brokmeier, co-founder of New Cohorts, Product & Operations lead" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Pascal Brokmeier</h3>
                  <Badge className="bg-matcha/10 text-matcha border-matcha/20">Product & Operations</Badge>
                </div>
                
                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    Pascal has moved multiple times across Europe and spent years helping exchange students 
                    hit the ground running—coordinating Erasmus-style arrivals, onboarding weeks, and social 
                    programs so people didn't fall through the cracks.
                  </p>
                  
                  <p className="leading-relaxed">
                    Professionally, he's led engineering teams in Amsterdam and beyond; today he works in 
                    data/AI and has headed data engineering at Every Cure after several years at McKinsey's 
                    QuantumBlack AI practice.
                  </p>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-medium text-slate-600 mb-2">Quick facts:</p>
                    <p className="text-sm text-slate-600">
                      Amsterdam-based; data/AI background; experienced community on-ramp organizer.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Patrick */}
              <Card className="p-8 border-0 shadow-lg bg-white">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image 
                      src="/logos/founders/patrick.png" 
                      alt="Patrick Akil, co-founder of New Cohorts, Community & Storytelling lead" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Patrick Akil</h3>
                  <Badge className="bg-matcha/10 text-matcha border-matcha/20">Community & Storytelling</Badge>
                </div>
                
                <div className="space-y-4 text-slate-700">
                  <p className="leading-relaxed">
                    Patrick is a software engineer and long-time community builder who hosts the 
                    "Beyond Coding" podcast—weekly conversations about tech, entrepreneurship, and 
                    the human side of work.
                  </p>
                  
                  <p className="leading-relaxed">
                    He's trained engineers, facilitated meetups, and speaks frequently about communication, 
                    teamwork, and career growth—the exact ingredients that help strangers become a 
                    functioning community.
                  </p>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-medium text-slate-600 mb-2">Quick facts:</p>
                    <p className="text-sm text-slate-600">
                      NL-based engineer; podcast host; focused on connection, learning, and momentum.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Shared belief */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Our shared belief
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Belonging shouldn't be a matter of luck. With a clear cohort, a six-week shared agenda, 
                and lightweight accountability, anyone can plug into a city's social fabric fast. 
                We're here to make that first month feel like month twelve—fewer awkward cold starts, 
                more meaningful reps together.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 bg-slate-50" aria-labelledby="story-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
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
        <section className="py-20 px-4 bg-white" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-0 shadow-lg bg-white">
                <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-matcha" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Consistency</h3>
                <p className="text-slate-600 leading-relaxed">
                  The same people, every week. This creates the familiarity and trust needed 
                  for real friendships to form.
                </p>
              </Card>
              
              <Card className="p-8 text-center border-0 shadow-lg bg-white">
                <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-matcha" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Authenticity</h3>
                <p className="text-slate-600 leading-relaxed">
                  We focus on genuine connections, not networking. Our activities are designed 
                  for bonding and getting to know each other.
                </p>
              </Card>
              
              <Card className="p-8 text-center border-0 shadow-lg bg-white">
                <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-matcha" aria-hidden="true" />
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
        <section className="py-20 px-4 bg-slate-50" aria-labelledby="how-we-work-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="how-we-work-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How We Work
            </h2>
            
            {/* Process Steps */}
            <div className="space-y-8 mb-16">
              <div className="flex items-start space-x-6">
                <div className="shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg" aria-hidden="true">
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
                <div className="shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg" aria-hidden="true">
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
                <div className="shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg" aria-hidden="true">
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

            {/* Tools & Technology */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
                The Tools That Power Our Operations
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* AI Tools */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">AI & Intelligence</h4>
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/ai/notion.png" alt="Notion workspace management tool used for cohort organization" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/ai/claude.png" alt="Claude AI assistant for content creation and research" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/ai/jina.png" alt="Jina AI platform for intelligent content processing" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/ai/perplexity.png" alt="Perplexity AI search engine for research and insights" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    We use AI tools for content creation, research, and automating our workflows
                  </p>
                </div>

                {/* Infrastructure */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Infrastructure & Operations</h4>
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/infrastructure/cloudflare.png" alt="Cloudflare web infrastructure and security platform" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/infrastructure/tally.png" alt="Tally form builder for signup and data collection" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Cloudflare handles our hosting and security, Tally manages our signup forms
                  </p>
                </div>

                {/* Community */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Community & Communication</h4>
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/community/heylo.png" alt="Heylo community management platform for group coordination" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image src="/logos/community/whatsapp.png" alt="WhatsApp messaging platform for cohort communication" width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Heylo and WhatsApp keep our community connected and organized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 px-4 bg-slate-50" aria-labelledby="commitment-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="commitment-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Our Commitment to You
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-matcha" aria-hidden="true" />
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
        <section className="py-20 px-4 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900" aria-labelledby="cta-heading">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
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
              <Link 
                href="https://sink.newcohorts.com/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Apply for the next New Cohorts program"
              >
                Apply for Next Cohort
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}