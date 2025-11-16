export function HowItWorksSection() {
  return (
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Show up</h3>
            <p className="text-gray-600">
              Commit to weekly meetups. Attend 5 out of 6 sessions. Build friendships that last long after the program ends.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-matcha rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Host a peer event & celebrate</h3>
            <p className="text-gray-600">
              Lead a peer-led activity (could be anything from board games to cooking). Celebrate with your new friends at the closing dinner safari.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
