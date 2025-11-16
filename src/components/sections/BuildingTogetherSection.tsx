export function BuildingTogetherSection() {
  const steps = [
    {
      number: 1,
      title: "Join our community chat (starting December)",
      description: "Connect with other founding members before the program starts"
    },
    {
      number: 2,
      title: "Vote on activity preferences and timing",
      description: "Help us shape the final program to match what you're looking for"
    },
    {
      number: 3,
      title: "Review final program details and pricing (mid-December)",
      description: "See the complete picture before making any commitment"
    },
    {
      number: 4,
      title: "Decide if you want to confirm (no pressure!)",
      description: "If it's not right for you, no commitment required"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            We're Building This Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is our first cohort. After you pre-register:
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-matcha rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">{step.number}</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border-l-4 border-matcha p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-charcoal">If it's not right for you after seeing everything, no commitment required.</span> You'll still have first access to future cohorts.
          </p>
        </div>
      </div>
    </section>
  );
}
