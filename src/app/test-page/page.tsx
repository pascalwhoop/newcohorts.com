import { CohortHeroAnimation } from '@/components/CohortHeroAnimation';

// Test page for Anime.js components

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Timeline Components Test
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This is a test page showcasing Anime.js animations. 
            Features a hello world component with elastic animations, 
            a simple timeline in clean card format, an animated timeline 
            with smooth entrance effects and hover interactions, and a cohort hero animation.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Cohort Hero Animation
          </h2>
          <div className="bg-white rounded-lg shadow-lg">
            <CohortHeroAnimation />
          </div>
        </div>
        
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-matcha text-cream rounded-lg hover:bg-matcha/90 transition-colors"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
