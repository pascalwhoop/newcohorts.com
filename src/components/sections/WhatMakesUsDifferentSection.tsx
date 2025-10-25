import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function WhatMakesUsDifferentSection() {
  return (
    <section className="py-20 px-4 bg-slate-50" aria-labelledby="different-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="different-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          What Makes Us Different
        </h2>
        
        <Card className="p-8 shadow-lg">
          <div className="w-16 h-16 mx-auto bg-matcha/10 rounded-full flex items-center justify-center mb-6">
            <Calendar className="w-8 h-8 text-matcha" aria-hidden="true" />
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Structured Consistency Over Random Encounters
          </h3>
          
          <p className="text-slate-600 leading-relaxed mb-6">
            Unlike meetup apps or one-off events, we create intentional groups that meet regularly. 
            This consistency is what transforms strangers into friends.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Traditional Approaches:</h4>
              <ul className="text-slate-600 space-y-2">
                <li>• One-off meetups with different people each time</li>
                <li>• Apps that match you with strangers repeatedly</li>
                <li>• Events where you might not see anyone again</li>
                <li>• No structure for building deeper connections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Our Approach:</h4>
              <ul className="text-slate-600 space-y-2">
                <li>• Same group, every week for 6 weeks</li>
                <li>• Structured activities designed for bonding</li>
                <li>• Clear commitment from all participants</li>
                <li>• Framework for building lasting friendships</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
