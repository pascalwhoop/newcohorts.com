"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-charcoal items-center flex space-x-1 hover:text-charcoal/70 transition-colors duration-300"
            )}
          >
            {navItem.icon && <span className="flex">{navItem.icon}</span>}
            {navItem.name && <span className="hidden sm:block text-sm">{navItem.name}</span>}
          </a>
        ))}
        <a 
          href="https://tally.so/r/your-tally-form"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 text-sm font-medium bg-white/10 backdrop-blur-sm text-charcoal px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-200"
        >
          <span>Join</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
