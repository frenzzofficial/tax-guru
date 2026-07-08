import { z } from "zod";
import { SERVICE_SLUGS } from "../configs/app.config";
import {
  emailRules,
  fullnameRules,
  phoneRules,
} from "../configs/schema.config";

export const leadSchema = z.object({
  fullname: fullnameRules,
  phone: phoneRules,
  email: emailRules,
  service: z.enum(SERVICE_SLUGS),
  message: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
