import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "New Cohorts - Build Your Amsterdam Friend Group | 6-Week Cohorts",
  description: "Join a structured 6-week cohort program in Amsterdam. Same group, every week, real connections. Build lasting friendships through consistent connection, not random meetups. €120 for 6 weeks.",
  keywords: [
    "Amsterdam friends", 
    "expat community Amsterdam", 
    "make friends Amsterdam", 
    "social groups Amsterdam", 
    "cohort program", 
    "friendship building", 
    "community Amsterdam",
    "newcomers Amsterdam",
    "social activities Amsterdam"
  ],
  authors: [{ name: "New Cohorts Team" }],
  creator: "New Cohorts",
  publisher: "New Cohorts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "New Cohorts - Build Your Amsterdam Friend Group",
    description: "Join a structured 6-week cohort program in Amsterdam. Same group, every week, real connections. Build lasting friendships through consistent connection.",
    url: "https://newcohorts.com",
    siteName: "New Cohorts",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Cohorts - Build Your Amsterdam Friend Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Cohorts - Build Your Amsterdam Friend Group",
    description: "Join a structured 6-week cohort program in Amsterdam. Same group, every week, real connections.",
    images: ["/og-image.jpg"],
    creator: "@newcohorts",
  },
  alternates: {
    canonical: "https://newcohorts.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Initialize Consent Mode v2 defaults BEFORE any Google tags load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        {/* Google Analytics is now loaded conditionally via CookieConsent */}
      </body>
    </html>
  );
}
