import type { Metadata } from "next";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

export const metadata: Metadata = {
  title: "Early Access - New Cohorts",
  description: "Join our early access list to be added to our WhatsApp group with the latest cohort details and launch information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-charcoal via-slate-800 to-charcoal py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Early Access List
          </h1>
          <p className="text-lg text-gray-300">
            Fill out the form below to get added to our early access WhatsApp group.
          </p>
          <p className="text-base text-gray-400 mt-2">
            We are planning to kick off our first cohort in mid January 2026.
          </p>
          <p className="text-base text-gray-400">
            All details and the signup for the first cohort will be shared in the group!
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <EarlyAccessForm />
        </div>
      </div>
    </main>
  );
}
