import type { Metadata } from "next";
import { envAppConfig as env } from "@/packages/env/app.env";
import { KEYWORDS } from "../configs/app.config";
import { envContactConfig } from "../env/contact.env";

export const appMetaData: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: env.SITE_TITLE,
    template: `%s | ${env.SITE_NAME}`,
  },
  description: env.SITE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: env.SITE_NAME }],
  creator: env.SITE_NAME,
  publisher: env.SITE_NAME,
  applicationName: env.SITE_NAME,
  category: "Tax & Legal Services",

  alternates: {
    canonical: env.SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: env.LOGO_URL,
    apple: env.LOGO_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: env.SITE_URL,
    siteName: env.SITE_NAME,
    title: env.SITE_TITLE,
    description: env.SITE_DESCRIPTION,
    images: [
      {
        url: env.OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${env.SITE_NAME} logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: env.SITE_TITLE,
    description: env.SITE_DESCRIPTION,
    images: [env.OG_IMAGE_URL],
  },

  other: {
    "contact:phone_number": envContactConfig.NEXT_PUBLIC_CONTACT_PHONE,
    ...(envContactConfig.NEXT_PUBLIC_CONTACT_PHONE_ALT
      ? {
          "contact:phone_number_alt":
            envContactConfig.NEXT_PUBLIC_CONTACT_PHONE_ALT,
        }
      : {}),
    "contact:email": envContactConfig.NEXT_PUBLIC_CONTACT_EMAIL,
  },
};
