// Type definitions for sections and components
export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface TestimonialData {
  quote: string;
  name: string;
  cohort: string;
  date: string;
  initials?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FounderData {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string[];
  quickFacts: string;
}

export interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ToolCategory {
  title: string;
  description: string;
  tools: Array<{
    name: string;
    image: string;
    alt: string;
  }>;
}
