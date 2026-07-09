import { z } from "zod";
import { SERVICE_SLUGS } from "../configs/app.config";

export const serviceSchema = z.object({
  slug: z.enum(SERVICE_SLUGS),
  name: z.string().min(1),
  shortDescription: z.string().min(1).max(160),
  description: z.string().min(1),
  price: z.object({
    amount: z.number().nonnegative(),
    currency: z.literal("INR").default("INR"),
    note: z.string().optional(), // e.g. "starting at", "+ govt fees"
  }),
  includes: z.array(z.string()).default([]),
  faqs: z
    .array(
      z.object({
        question: z.string().min(1),
        answer: z.string().min(1),
      }),
    )
    .default([]),
  iconName: z.string().optional(), // maps to a lucide-react icon
});

export type Service = z.infer<typeof serviceSchema>;
