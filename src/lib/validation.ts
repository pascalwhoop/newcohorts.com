import { z } from "zod";

export const earlyAccessSchema = z.object({
  firstName: z.string().min(1, "First name is required").min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(1, "Last name is required").min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(1, "Please select a city"),
  moveDate: z.string().min(1, "Move date is required"),
  customCity: z.string().optional(),
});

export type EarlyAccessFormData = z.infer<typeof earlyAccessSchema>;
