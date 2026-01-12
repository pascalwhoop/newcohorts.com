import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQItem } from "@/types/sections";

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    id: "item-1",
    question: "What exactly is a cohort?",
    answer: "A cohort is a group of 20-30 people who commit to meeting every week for 6 weeks. Unlike random meetups, you'll see the same people each week, allowing friendships to develop naturally through consistent interaction and shared experiences."
  },
  {
    id: "item-2", 
    question: "What if I can't make it to all 6 sessions?",
    answer: "We understand that life happens! We ask that you attend at least 5 out of 6 sessions. Missing one session is okay, but missing more than that affects the group dynamic and defeats the purpose of building consistent connections."
  },
  {
    id: "item-3",
    question: "What kind of activities do you organize?",
    answer: "We organize a variety of activities designed for bonding: kickoff planning sessions with pizza, boat cruises to explore Amsterdam from the water, storytelling open mic nights, group gym sessions with sauna, city walking tours of markets and cafés, and dinner safaris across multiple homes. Each activity is chosen to facilitate conversation and connection."
  },
  {
    id: "item-4",
    question: "How do you match people in cohorts?",
    answer: "We consider factors like age range, interests, availability, and lifestyle to create groups where people are likely to connect. We also look for people who are genuinely committed to building friendships and showing up consistently."
  },
  {
    id: "item-5",
    question: "What happens after the 6 weeks are over?",
    answer: "The goal is for your cohort to become your Amsterdam friend group! Most cohorts continue meeting on their own, organizing activities, and building lasting friendships. We also organize occasional alumni events to keep the community connected."
  },
  {
    id: "item-6",
    question: "Is this just for expats or can locals join too?",
    answer: "New Cohorts is for anyone in Amsterdam looking to build meaningful friendships! While many participants are expats, we welcome locals who are new to the city, looking to expand their social circle, or simply want to meet new people."
  },
  {
    id: "item-7",
    question: "What if I don't click with my cohort?",
    answer: "We do our best to match compatible people, but we understand that not every group will be perfect. We encourage you to give it a few weeks as initial awkwardness often fades. If there are serious issues, we'll work with you to find a solution."
  },
  {
    id: "item-8",
    question: "What's the investment?",
    answer: "€150 for our first cohort. Our founding members get the best rate. This investment covers all 6 activities, venues, and the facilitated experience. You'll only pay once we confirm the cohort is launching."
  },
  {
    id: "item-9",
    question: "When will the first cohort start?",
    answer: "We're recruiting throughout January 2026. Our first cohort will launch once we have a minimum number of committed members. Our target is February 2026, but the exact start date depends on when we reach our threshold. We're launching our social media push in the coming weeks to recruit!"
  },
  {
    id: "item-10",
    question: "I have already been in Amsterdam for several years, can I still join?",
    answer: "Yes! Everyone can join a cohort once, the main requirement is that you have chosen Amsterdam as the place to be for the forseeable future. If that is you, you are more than welcome!"
  },
  {
    id: "item-11",
    question: "What if I pre-register and change my mind?",
    answer: "Zero pressure. Pre-registration just gets you into our community and updates. You only commit to payment once we confirm the cohort is launching. No money taken until we have our minimum group size."
  }
];

export function FAQSection({ faqs = defaultFAQs }: FAQSectionProps) {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Everything you need to know about New Cohorts
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="bg-white rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-matcha">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
