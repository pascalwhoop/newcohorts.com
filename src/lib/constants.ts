// Site configuration and shared constants
export const SITE_CONFIG = {
  name: "New Cohorts",
  description: "Build lasting friendships in Amsterdam through structured 6-week cohort programs",
  url: "https://newcohorts.com",
  logo: "https://newcohorts.com/og-image.jpg",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://sink.newcohorts.com/instagram",
  signup: "https://sink.newcohorts.com/signup",
} as const;

export const PROGRAM_DETAILS = {
  duration: "6 weeks",
  price: "€150",
  groupSize: "25-40 people",
  sessions: "6 events",
  commitment: "5 out of 6 sessions",
} as const;

export const BUBBLE_COLORS = {
  first: '107,142,107', // matcha green
  second: '143,166,142', // sage green
  third: '245,241,237', // cream
  fourth: '58,58,58', // charcoal
  fifth: '120,150,120', // deeper matcha
  sixth: '200,190,180', // warm taupe
} as const;

export const FLIP_WORDS: { home: string[]; about: string[] } = {
  home: ["cohort", "community", "tribe", "crew"],
  about: ["friendship", "connection", "belonging", "community"],
};
