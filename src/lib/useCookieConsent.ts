"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent";

interface ConsentData {
  status: "accepted" | "rejected" | null;
  timestamp: number;
  version: string;
}

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const data: ConsentData = JSON.parse(stored);
        setHasConsent(data.status === "accepted");
      } catch {
        setHasConsent(false);
      }
    } else {
      setHasConsent(false);
    }
  }, []);

  return hasConsent;
}

