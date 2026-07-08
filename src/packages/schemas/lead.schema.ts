import { z } from "zod";
import {
  emailRules,
  fullnameRules,
  phoneRules,
} from "../configs/schema.config";

export const leadSchema = z.object({
  fullname: fullnameRules,
  phone: phoneRules,
  email: emailRules,
  service: z.enum([
    "gst-registration",
    "gst-return-filing",
    "trademark-registration",
    "itr-filing",
    "msme-registration",
    "iec-registration",
    "fssai-registration",
    "other",
  ]),
  message: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
