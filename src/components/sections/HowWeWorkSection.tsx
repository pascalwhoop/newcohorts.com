import { ProcessStep, ToolCategory } from "@/types/sections";
import Image from "next/image";

interface HowWeWorkSectionProps {
  processSteps?: ProcessStep[];
  toolCategories?: ToolCategory[];
}

const defaultProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Careful Selection",
    description: "We carefully select participants who are committed to showing up every week and open to forming real connections. This isn't for everyone – it's for people who are serious about building friendships."
  },
  {
    number: 2,
    title: "Intentional Matching",
    description: "We form cohorts of 25-40 people with similar availability and interests. We consider factors like age, lifestyle, and goals to create groups where people are likely to connect."
  },
  {
    number: 3,
    title: "Structured Activities",
    description: "Each week, we organize activities designed to help people bond and get to know each other. From coffee walks to cooking classes, every activity is chosen to facilitate connection."
  }
];

const defaultToolCategories: ToolCategory[] = [
  {
    title: "AI & Intelligence",
    description: "We use AI tools for content creation, research, and automating our workflows",
    tools: [
      { name: "Notion", image: "/logos/ai/notion.png", alt: "Notion workspace management tool used for cohort organization" },
      { name: "Claude", image: "/logos/ai/claude.png", alt: "Claude AI assistant for content creation and research" },
      { name: "Jina", image: "/logos/ai/jina.png", alt: "Jina AI platform for intelligent content processing" },
      { name: "Perplexity", image: "/logos/ai/perplexity.png", alt: "Perplexity AI search engine for research and insights" }
    ]
  },
  {
    title: "Infrastructure & Operations",
    description: "Cloudflare handles our hosting and security, Tally manages our signup forms",
    tools: [
      { name: "Cloudflare", image: "/logos/infrastructure/cloudflare.png", alt: "Cloudflare web infrastructure and security platform" },
      { name: "Tally", image: "/logos/infrastructure/tally.png", alt: "Tally form builder for signup and data collection" }
    ]
  },
  {
    title: "Community & Communication",
    description: "Heylo and WhatsApp keep our community connected and organized",
    tools: [
      { name: "Heylo", image: "/logos/community/heylo.png", alt: "Heylo community management platform for group coordination" },
      { name: "WhatsApp", image: "/logos/community/whatsapp.png", alt: "WhatsApp messaging platform for cohort communication" }
    ]
  }
];

export function HowWeWorkSection({ 
  processSteps = defaultProcessSteps, 
  toolCategories = defaultToolCategories 
}: HowWeWorkSectionProps) {
  return (
    <section className="py-20 px-4 bg-slate-50" aria-labelledby="how-we-work-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="how-we-work-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          How We Work
        </h2>
        
        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step) => (
            <div key={step.number} className="flex items-start space-x-6">
              <div className="shrink-0 w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center font-bold text-lg" aria-hidden="true">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technology */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            The Tools That Power Our Operations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {toolCategories.map((category) => (
              <div key={category.title} className="text-center">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">{category.title}</h4>
                <div className="flex justify-center space-x-4 mb-4">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center p-2">
                      <Image 
                        src={tool.image} 
                        alt={tool.alt} 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
