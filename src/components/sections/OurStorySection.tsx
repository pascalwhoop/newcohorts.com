export function OurStorySection() {
  return (
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
  );
}
