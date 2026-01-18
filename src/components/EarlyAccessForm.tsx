"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { earlyAccessSchema, type EarlyAccessFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CITIES = ["Amsterdam", "Rotterdam", "Utrecht", "Other"];

export function EarlyAccessForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCustomCity, setShowCustomCity] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessSchema),
  });

  const selectedCity = watch("city");

  // Show custom city input when "Other" is selected
  const handleCityChange = (value: string) => {
    setValue("city", value);
    setShowCustomCity(value === "Other");
    if (value !== "Other") {
      setValue("customCity", "");
    }
  };

  const onSubmit = async (data: EarlyAccessFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Combine city and customCity if "Other" was selected
      const city =
        data.city === "Other" && data.customCity
          ? `Other: ${data.customCity}`
          : data.city;

      const response = await fetch("/api/submit-early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          city,
          moveDate: data.moveDate,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      const result = await response.json();

      // Fire Meta Pixel conversion event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Early Access Form",
          value: 0.0,
          currency: "EUR",
        });
      }

      // Redirect to join page with token
      router.push(`/join/${result.token}`);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* First Name */}
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-white">
          First name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="firstName"
          placeholder="John"
          {...register("firstName")}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          disabled={isLoading}
        />
        {errors.firstName && (
          <p className="text-red-400 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-white">
          Last name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="lastName"
          placeholder="Doe"
          {...register("lastName")}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          disabled={isLoading}
        />
        {errors.lastName && (
          <p className="text-red-400 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* City */}
      <div className="space-y-2">
        <Label htmlFor="city" className="text-white">
          What city are you moving to? <span className="text-red-500">*</span>
        </Label>
        <Select value={selectedCity} onValueChange={handleCityChange}>
          <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            {CITIES.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.city && (
          <p className="text-red-400 text-sm">{errors.city.message}</p>
        )}

        {/* Custom City Input */}
        {showCustomCity && (
          <Input
            placeholder="Enter your city"
            {...register("customCity")}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 mt-2"
            disabled={isLoading}
          />
        )}
      </div>

      {/* Move Date */}
      <div className="space-y-2">
        <Label htmlFor="moveDate" className="text-white">
          When are you moving / have you moved there? <span className="text-red-500">*</span>
        </Label>
        <Input
          id="moveDate"
          type="date"
          {...register("moveDate")}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          disabled={isLoading}
        />
        {errors.moveDate && (
          <p className="text-red-400 text-sm">{errors.moveDate.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-matcha text-white hover:bg-matcha/90 font-semibold py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting..." : "Continue"}
      </Button>

      <p className="text-xs text-slate-300 text-center">
        We'll add you to our WhatsApp group with more details!
      </p>
    </form>
  );
}
