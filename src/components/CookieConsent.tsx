"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Extend Window interface for Google Analytics dataLayer
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const COOKIE_CONSENT_KEY = "cookie-consent";
const CONSENT_EXPIRY_DAYS = 365; // Renew consent annually
const CONSENT_VERSION = "1.0"; // Increment when privacy policy changes

type ConsentStatus = "accepted" | "rejected" | null;

interface ConsentData {
  status: ConsentStatus;
  timestamp: number;
  version: string;
}

// Google Analytics ID
const GA_MEASUREMENT_ID = "G-56C4LSSHES";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [consentData, setConsentData] = useState<ConsentData | null>(null);

  useEffect(() => {
    // Check if consent has been given
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (stored) {
      try {
        const data: ConsentData = JSON.parse(stored);
        const daysSince = (Date.now() - data.timestamp) / (1000 * 60 * 60 * 24);
        
        // Re-prompt if consent is older than expiry period or version changed
        if (daysSince > CONSENT_EXPIRY_DAYS || data.version !== CONSENT_VERSION) {
          setIsVisible(true);
        } else {
          setConsentData(data);
          // Load analytics only if accepted
          if (data.status === "accepted") {
            loadGoogleAnalytics();
          }
        }
      } catch {
        setIsVisible(true);
      }
    } else {
      // Small delay to avoid flash
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
      return;
    }

    // Load gtag.js script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    const data: ConsentData = {
      status: "accepted",
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(data));
    setConsentData(data);
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const handleReject = () => {
    const data: ConsentData = {
      status: "rejected",
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(data));
    setConsentData(data);
    setIsVisible(false);
    // Ensure GA is not loaded if user rejects
    removeGoogleAnalytics();
  };

  const removeGoogleAnalytics = () => {
    // Remove gtag scripts
    document.querySelectorAll(`script[src*="googletagmanager.com"]`).forEach(el => el.remove());
    document.querySelectorAll('script').forEach(el => {
      if (el.innerHTML.includes('dataLayer') && el.innerHTML.includes('gtag')) {
        el.remove();
      }
    });
    // Clear dataLayer
    if (window.dataLayer) {
      window.dataLayer = [];
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-card border-t border-border shadow-lg",
        "animate-in slide-in-from-bottom duration-300",
        "px-4 py-3 sm:px-6 sm:py-4"
      )}
      data-testid="cookie-consent-banner"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm text-foreground">
          We use cookies to analyze how visitors use our website and improve your experience.{" "}
            <a
              href="/privacy"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="min-w-[80px]"
            data-testid="cookie-consent-reject"
          >
            Reject
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="min-w-[80px]"
            data-testid="cookie-consent-accept"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

