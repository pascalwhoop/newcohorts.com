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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2371336176670164');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2371336176670164&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        {/* Google Analytics is now loaded conditionally via CookieConsent */}
      </body>
    </html>
  );
}
