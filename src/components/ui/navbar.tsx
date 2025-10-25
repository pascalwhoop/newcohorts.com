'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Instagram } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  rightActions?: React.ReactNode;
  variant?: 'default' | 'transparent' | 'glass';
  backHref?: string;
  backText?: string;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo,
      logoHref = '/',
      rightActions,
      variant = 'transparent',
      backHref = '/',
      backText = 'Back',
      ...props
    },
    ref
  ) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'transparent':
          return 'bg-transparent';
        case 'glass':
          return 'bg-background/80 backdrop-blur-md border-b border-border/50';
        case 'default':
        default:
          return 'bg-background border-b border-border';
      }
    };

    return (
      <header
        ref={ref}
        className={cn(
          'sticky top-0 z-50 w-full px-4 md:px-6',
          getVariantStyles(),
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side - Back button */}
          <div className="flex items-center gap-2">
            <Link
              href={backHref}
              className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium text-sm">{backText}</span>
            </Link>
          </div>

          {/* Center - Logo (optional) */}
          {logo && (
            <div className="flex items-center">
              <Link
                href={logoHref}
                className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors"
              >
                {logo}
              </Link>
            </div>
          )}

          {/* Right side - Actions */}
          <div className="flex items-center gap-3">
            {rightActions}
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';

// Simple logo component for New Cohorts
const NewCohortsLogo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="12" fill="currentColor" opacity="0.1" />
      <circle cx="16" cy="16" r="8" fill="currentColor" opacity="0.3" />
      <circle cx="16" cy="16" r="4" fill="currentColor" />
    </svg>
  );
};

export { NewCohortsLogo };
