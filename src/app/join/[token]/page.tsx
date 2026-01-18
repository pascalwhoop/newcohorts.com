"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  const params = useParams();
  const token = params.token as string;
  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "";

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`/api/validate-token?token=${token}`);
        const data = await response.json();
        setIsValid(data.valid);
      } catch (error) {
        console.error("Error validating token:", error);
        setIsValid(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [token]);

  const handleWhatsappClick = () => {
    // Fire Meta Pixel conversion event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "CompleteRegistration", {
        content_name: "WhatsApp Group Join",
        status: "completed",
      });
    }

    // Redirect to WhatsApp group
    if (whatsappUrl) {
      window.location.href = whatsappUrl;
    }
  };

  if (isValidating) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-charcoal via-slate-800 to-charcoal flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-white text-lg">Loading...</p>
        </div>
      </main>
    );
  }

  if (!isValid) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-charcoal via-slate-800 to-charcoal flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">
            Invalid Link
          </h1>
          <p className="text-gray-300 mb-6">
            This link is no longer valid or has expired. Please fill out the form again.
          </p>
          <Button
            onClick={() => (window.location.href = "/early-access")}
            className="bg-matcha text-white hover:bg-matcha/90 font-semibold px-8 py-2 rounded-lg"
          >
            Return to Form
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-charcoal via-slate-800 to-charcoal flex items-center justify-center px-4">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <div className="text-center max-w-md">
        <div className="bg-matcha/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-matcha"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome! You're In!
        </h1>
        <p className="text-gray-300 mb-2">
          Your registration has been confirmed.
        </p>
        <p className="text-gray-400 mb-8">
          Click the button below to join our WhatsApp group and get the latest cohort details.
        </p>

        <Button
          onClick={handleWhatsappClick}
          className="w-full bg-matcha text-white hover:bg-matcha/90 font-semibold px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          Join WhatsApp Group
        </Button>

      </div>
    </main>
  );
}
