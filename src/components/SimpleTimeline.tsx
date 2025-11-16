'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface WeekData {
  week: number;
  title: string;
  description: string;
  activities: string[];
}

const timelineData: WeekData[] = [
  {
    week: 1,
    title: "Launch Party & Co-Create Your Experience",
    description: "Get to know each other over pizza and help shape our final week's peer-led activities",
    activities: ["3x 25min planning sessions", "30min plenary agenda presentation", "Pizza dinner", "Optional pub crawl"]
  },
  {
    week: 2,
    title: "Boat Cruise Adventure",
    description: "Explore Amsterdam from the water",
    activities: ["City canal tour", "Group bonding on water", "Bond over Amsterdam's best-loved experiences", "Scenic photo opportunities"]
  },
  {
    week: 3,
    title: "Storytelling Open Mic",
    description: "Share stories at a local Amsterdam venue",
    activities: ["Visit known Amsterdam venue", "Open mic storytelling", "Personal story sharing", "Community connection"]
  },
  {
    week: 4,
    title: "Group Gym Session",
    description: "Workout together at a great city gym",
    activities: ["Group workout class", "Optional gym sessions", "Sauna sessions (gender split)", "Health & wellness bonding"]
  },
  {
    week: 5,
    title: "City Walking Tour",
    description: "Explore Amsterdam's markets and cafés",
    activities: ["Guided city walk", "Visit local markets", "Discover cool bakeries", "Café hopping experience"]
  },
  {
    week: 6,
    title: "Dinner Safari & Closing Party",
    description: "3-course dinner across multiple homes",
    activities: ["Multi-house dinner tour", "Long-form conversations", "Home visits & sharing", "Final celebration party"]
  }
];

export function SimpleTimeline() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Proposed 6-Week Journey
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here's what we're planning. As a first cohort member, you'll vote on final activities and timing in December.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineData.map((week) => (
            <Card key={week.week} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Week {week.week}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl">
                  {week.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {week.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Activities:</h4>
                  <ul className="space-y-1">
                    {week.activities.map((activity, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
