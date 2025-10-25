import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "New Cohorts - Your cohort in Amsterdam",
  description: "A 6-week journey with the same group of people. Build lasting friendships through consistent connection, not random meetups.",
  keywords: ["Amsterdam", "friends", "cohort", "community", "expats", "social"],
  openGraph: {
    title: "New Cohorts - Your cohort in Amsterdam",
    description: "A 6-week journey with the same group of people. Build lasting friendships through consistent connection, not random meetups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
