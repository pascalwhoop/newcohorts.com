'use client';

import React, { useEffect, useRef } from 'react';
import * as anime from 'animejs';

// Motion constants (one source of truth)
const MOTION = {
  easing: 'easeInOutQuad',
  weekDur: 420,
  dotStagger: 260,
  enterDur: 700,
  groupOffset: 40,
};

const COLORS = { 
  brand: '#1e88e5', 
  friend: '#43a047',
  text: '#3b3b3b'
};

// Week positions (must match CSS --y custom properties)
const weekY = [40, 100, 160, 220, 280, 340];

const weekLabels = [
  'Week 1 · Dinner',
  'Week 2 · Workshop', 
  'Week 3 · Games',
  'Week 4 · Explore',
  'Week 5 · Challenge',
  'Week 6 · Celebration'
];

export function CohortHeroAnimation() {
  const root = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    if (root.current) {
      // Helper: build week keyframes for dot progression
      const buildWeekFrames = (ys: number[]) =>
        ys.map((y) => ({ translateY: y, duration: MOTION.weekDur }));

      const weekFrames = buildWeekFrames(weekY);

      // Create timeline
      timelineRef.current = new anime.Timeline({
        autoplay: true,
      });

      // 0) Funnel + labels fade in
      timelineRef.current.add({
        targets: '.funnel-wrapper',
        opacity: [0, 1],
        translateY: [-24, 0],
        duration: 600,
      });

      timelineRef.current.add({
        targets: '.week-label',
        opacity: [0, 1],
        translateX: [-8, 0],
        delay: anime.stagger(60),
        duration: 360,
      }, '-=300');

      // 1) Dots appear scattered above the funnel
      timelineRef.current.add({
        targets: '.dots .dot',
        opacity: [0, 1],
        translateX: () => anime.random(-140, 140),
        translateY: () => anime.random(-260, -120),
        scale: [0.6, 1],
        delay: anime.stagger(120),
        duration: MOTION.enterDur,
        easing: 'easeOutCubic',
      });

      // 2) Dots enter funnel & progress Week 1→6 (keyframes)
      timelineRef.current.add({
        targets: '.dots .dot',
        keyframes: weekFrames,
        delay: anime.stagger(MOTION.dotStagger),
        easing: MOTION.easing,
      });

      // 3) Grouping: converge at bottom & recolor
      timelineRef.current.add({
        targets: '.dots .dot',
        translateX: 0,
        translateY: weekY[weekY.length - 1] + MOTION.groupOffset,
        backgroundColor: COLORS.friend,
        scale: [
          { value: 1.15, duration: 240, easing: 'easeOutBack' },
          { value: 1.0, duration: 200 },
        ],
        delay: anime.stagger(150),
        duration: 500,
      });

      // 4) Reveal the final, tidy group cluster
      timelineRef.current.add({
        targets: '.final-group',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 520,
        easing: 'easeOutBack',
      }, '-=200');

      // 5) Copy + CTA
      timelineRef.current.add({
        targets: '.message',
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 420,
      });

      timelineRef.current.add({
        targets: '.cta-button',
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 420,
      }, '-=240');
    }

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.pause();
      }
    };
  }, []);

  // Auto-pause on tab hidden (performance optimization)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (timelineRef.current) {
        if (document.hidden) {
          timelineRef.current.pause();
        } else {
          timelineRef.current.play();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <section 
      ref={root} 
      className="cohort-hero grid place-items-center py-16 px-4 gap-6"
      aria-label="New Cohorts animation"
    >
      <div className="funnel-wrapper relative" style={{ 
        width: 'clamp(280px, 40vw, 520px)', 
        height: 'clamp(420px, 55vh, 640px)',
        opacity: 1
      }}>
        {/* Funnel background */}
        <div 
          className="funnel-bg absolute inset-0 border-3 border-gray-300 border-b-6 rounded-xl"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, #f4f6f8, #fff)',
          }}
          aria-hidden="true"
        />

        {/* Week labels */}
        {weekLabels.map((label, index) => (
          <div
            key={index}
            className="week-label absolute left-3 font-semibold text-xs text-gray-600"
            style={{ top: `${weekY[index]}px` }}
          >
            {label}
          </div>
        ))}

        {/* Dots (people) */}
        <div className="dots" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="dot absolute w-3.5 h-3.5 rounded-full opacity-0"
              style={{
                backgroundColor: COLORS.brand,
                top: '-30px',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        {/* Final grouped state */}
        <div 
          className="final-group absolute bottom-4 left-1/2 opacity-0 grid grid-cols-3 gap-3"
          style={{ 
            transform: 'translateX(-50%) scale(0.9)' 
          }}
          aria-hidden="true"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="dot w-3.5 h-3.5 rounded-full"
              style={{
                backgroundColor: COLORS.friend,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero copy */}
      <div className="hero-copy text-center max-w-2xl" aria-live="polite">
        <h2 
          className="message text-4xl font-bold mb-4"
          style={{ 
            color: COLORS.text
          }}
        >
          6 weeks. Real friends. Your crew.
        </h2>
        <a 
          className="cta-button inline-block mt-2 px-4 py-2.5 rounded-lg text-white no-underline"
          style={{
            backgroundColor: COLORS.brand
          }}
          href="#signup"
        >
          Join a New Cohort
        </a>
      </div>
    </section>
  );
}

