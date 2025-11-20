'use client';

import { Button } from "@/components/ui/button";
import { Instagram, Users } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative py-16">
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative z-20 text-center max-w-2xl mx-auto">
          {/* Logo/Badge */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-clay rounded-full flex items-center justify-center shadow-md">
              <Users className="w-12 h-12 text-paper" />
            </div>
            <p className="text-sm text-faded-ink mt-2 font-sans">New Cohorts</p>
          </div>

          {/* Main Headline - Static text instead of FlipWords */}
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-charcoal-ink mb-6 leading-tight">
            Find{" "}
            <span className="text-clay">your people</span>{" "}
            in Amsterdam
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-faded-ink mb-2 leading-relaxed font-sans">
            Build real friendships in 6 weeks, not random meetups
          </p>

          <p className="text-base text-faded-ink font-semibold mb-8 font-sans">
            Be part of the first cohort - January 2026
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              size="lg"
              className="bg-clay hover:bg-clay/90 text-paper font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-sans"
              asChild
            >
              <a href={SOCIAL_LINKS.signup} target="_blank" rel="noopener noreferrer">
                Pre-register for January
              </a>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              className="bg-sand/30 border-sand text-charcoal-ink hover:bg-sand/50 hover:border-forest px-6 py-3 rounded-xl font-medium font-sans"
              asChild
            >
              <a href="/about">About</a>
            </Button>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-faded-ink hover:text-charcoal-ink transition-colors flex items-center gap-2 font-sans"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
