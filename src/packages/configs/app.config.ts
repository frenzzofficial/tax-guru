import { envAppConfig } from "../env/app.env";

export const BASE_URL = envAppConfig.SITE_URL;

export const KEYWORDS = [
  "GST registration Kanpur",
  "trademark registration India",
  "GST return filing",
  "ITR filing consultant",
  "MSME registration",
  "PF ESI registration",
  "IEC code registration",
  "FSSAI registration",
  "tax consultant Kanpur",
  "tax consultant Delhi",
];

export const SERVICE_SLUGS = [
  "gst-registration",
  "trademark-registration",
  "gst-itr-return",
  "msme-registration",
  "pf-esi-registration",
  "iec-registration",
  "fssai-registration",
  "others",
] as const;

export const SERVICE_LABELS: Record<(typeof SERVICE_SLUGS)[number], string> = {
  "gst-registration": "GST Registration",
  "trademark-registration": "Trademark Registration",
  "gst-itr-return": "GST & ITR Return",
  "msme-registration": "MSME Registration",
  "pf-esi-registration": "PF/ESI Registration",
  "iec-registration": "IEC Registration",
  "fssai-registration": "FSSAI Registration",
  others: "Other",
};

export const LOCATION_SLUGS = ["kanpur", "delhi"] as const;

export const LOCATION_LABELS: Record<(typeof LOCATION_SLUGS)[number], string> =
  {
    kanpur: "Kanpur, UP",
    delhi: "Delhi",
  };
