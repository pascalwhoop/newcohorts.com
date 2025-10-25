'use client';

import { Button } from "@/components/ui/button";
import { Instagram, Users } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Amsterdam Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/backgrounds/amsterdam.jpg"
          alt="Amsterdam cityscape"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="relative z-20 text-center max-w-2xl mx-auto">
          {/* Logo/Badge */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-matcha/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-12 h-12 text-cream" />
            </div>
            <p className="text-sm text-gray-200 mt-2">New Cohorts</p>
          </div>

          {/* Main Headline - Static text instead of FlipWords */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your{" "}
            <span className="text-matcha">community</span>{" "}
            in Amsterdam
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            A 6-week journey with the same group of people.
            <br />
            Build lasting friendships through consistent connection,
            <br />
            not random meetups.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-matcha hover:bg-matcha/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={SOCIAL_LINKS.signup} target="_blank" rel="noopener noreferrer">
                Join the Next Cohort
              </a>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium"
              asChild
            >
              <a href="/about">About</a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium"
              asChild
            >
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
