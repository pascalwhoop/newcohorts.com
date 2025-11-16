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
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
            Find your{" "}
            <span className="text-matcha">people</span>{" "}
            in Amsterdam
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-200 mb-2 leading-relaxed">
            Build real friendships in 6 weeks, not random meetups
          </p>

          <p className="text-base text-matcha font-semibold mb-8">
            Be part of the first cohort - January 2026
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              size="lg"
              className="bg-matcha hover:bg-matcha/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium"
              asChild
            >
              <a href="/about">About</a>
            </Button>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
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
