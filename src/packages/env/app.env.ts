import { z } from "zod";

/**
 * Environment schema
 * Only variables defined here are allowed.
 */
const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("TheTaxGuru"),
  NEXT_PUBLIC_APP_VERSION: z.string().default("1.0.0"),
  NEXT_PUBLIC_API_PATH: z.string().default("/app"),

  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  NEXT_PUBLIC_APP_PORT: z
    .string()
    .default("3000")
    .transform((val) => {
      const port = Number(val);

      if (Number.isNaN(port)) {
        throw new Error("APP_PORT must be a valid number");
      }

      return port;
    }),

  // Site identity & SEO
  NEXT_PUBLIC_SITE_URL: z.url().default("https://thetaxguru.in"),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1).default("The Tax Guru"),
  NEXT_PUBLIC_SITE_TITLE: z
    .string()
    .min(1)
    .default("The Tax Guru | One stop destination for all your business needs"),
  NEXT_PUBLIC_SITE_DESCRIPTION: z
    .string()
    .min(1)
    .default("The Tax Guru Description"),
  NEXT_PUBLIC_LOGO_URL: z.url().default("https://thetaxguru.in/logo.png"),
  NEXT_PUBLIC_OG_IMAGE_URL: z
    .url()
    .default("https://thetaxguru.in/og-image.png"),
});

/**
 * Validate environment variables
 */
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:");

  parsedEnv.error.issues.forEach((issue) => {
    console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  });

  throw new Error("Environment validation failed");
}

/**
 * Export immutable config
 */
export const envAppConfig = Object.freeze({
  APP_NAME: parsedEnv.data.NEXT_PUBLIC_APP_NAME,
  APP_VERSION: parsedEnv.data.NEXT_PUBLIC_APP_VERSION,
  API_PATH: parsedEnv.data.NEXT_PUBLIC_API_PATH,
  NODE_ENV: parsedEnv.data.NODE_ENV,
  APP_PORT: parsedEnv.data.NEXT_PUBLIC_APP_PORT,

  SITE_URL: parsedEnv.data.NEXT_PUBLIC_SITE_URL,
  SITE_NAME: parsedEnv.data.NEXT_PUBLIC_SITE_NAME,
  SITE_TITLE: parsedEnv.data.NEXT_PUBLIC_SITE_TITLE,
  SITE_DESCRIPTION: parsedEnv.data.NEXT_PUBLIC_SITE_DESCRIPTION,
  LOGO_URL: parsedEnv.data.NEXT_PUBLIC_LOGO_URL,
  OG_IMAGE_URL: parsedEnv.data.NEXT_PUBLIC_OG_IMAGE_URL,
});

/**
 * Type-safe environment type
 */
export type envAppConfig = typeof envAppConfig;
