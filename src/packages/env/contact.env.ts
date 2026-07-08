import { z } from "zod";
import { emailRules, phoneRules } from "../configs/schema.config";

// ✅ Load environment variables from .env file
// ✅ Define schema with defaults and transformations
const envConfigSchema = z.object({
  NEXT_PUBLIC_CONTACT_PHONE: phoneRules.default("1234567890"),
  NEXT_PUBLIC_CONTACT_PHONE_ALT: phoneRules.optional().default("1234567890"),
  NEXT_PUBLIC_CONTACT_EMAIL: emailRules.default("contact@thetaxguru.in"),

  // WhatsApp Cloud API (Meta Graph API) — server-only, never expose to client
  WHATSAPP_TOKEN: z.string().min(1).default("your_token_here"),
  WHATSAPP_PHONE_NUMBER_ID: z
    .string()
    .min(1)
    .default("your_phone_number_id_here"),
  WHATSAPP_RECIPIENT_NUMBER: z
    .string()
    .min(10)
    .default("your_recipient_number_here"), // owner's number that receives leads"
  WHATSAPP_API_VERSION: z.string().default("v20.0"),
  WHATSAPP_MESSAGE_TEMPLATE: z.string().default("default"),
});

// ✅ Validate process.env safely
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid Contact environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`,
  );
}

// ✅ Export validated config
export const envContactConfig = Object.freeze(parsed.data);

// ✅ Optional: Export type
export type EnvContactConfig = z.infer<typeof envConfigSchema>;
