export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-paper">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal-ink text-center mb-12">
          How it works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-serif text-paper">1</span>
            </div>
            <h3 className="text-xl font-serif text-charcoal-ink mb-4">Apply</h3>
            <p className="text-faded-ink font-sans">
              Tell us about yourself. We're looking for people committed to showing up every week and open to forming real connections.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-serif text-paper">2</span>
            </div>
            <h3 className="text-xl font-serif text-charcoal-ink mb-4">Show up</h3>
            <p className="text-faded-ink font-sans">
              Commit to weekly meetups. Attend 5 out of 6 sessions. Build friendships that last long after the program ends.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-serif text-paper">3</span>
            </div>
            <h3 className="text-xl font-serif text-charcoal-ink mb-4">Connect</h3>
            <p className="text-faded-ink font-sans">
                Every activity is designed to spark genuine conversations. All you have to do is be present and
                authentic.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
