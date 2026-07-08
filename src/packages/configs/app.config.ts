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

export const LOCATION_SLUGS = ["kanpur", "delhi"] as const;
