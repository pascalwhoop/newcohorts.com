import { Card } from "@/components/ui/card";
import { Users, Heart, MapPin } from "lucide-react";
import { ValueItem } from "@/types/sections";

interface OurValuesSectionProps {
  values?: ValueItem[];
}

const defaultValues: ValueItem[] = [
  {
    icon: Users,
    title: "Consistency",
    description: "The same people, every week. This creates the familiarity and trust needed for real friendships to form."
  },
  {
    icon: Heart,
    title: "Authenticity", 
    description: "We focus on genuine connections, not networking. Our activities are designed for bonding and getting to know each other."
  },
  {
    icon: MapPin,
    title: "Community",
    description: "We're building a community of people who value deep connections and meaningful relationships in Amsterdam."
  }
];

export function OurValuesSection({ values = defaultValues }: OurValuesSectionProps) {
  return (
    <section className="py-20 px-4 bg-white" aria-labelledby="values-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Our Values
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="p-8 text-center border-0 shadow-lg bg-white">
              <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-matcha" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
