import axios from "axios";
import { envContactConfig } from "@/packages/env/contact.env";
import type { LeadInput } from "@/packages/schemas/lead.schema";

const WHATSAPP_API_URL = `https://graph.facebook.com/${envContactConfig.WHATSAPP_API_VERSION}/${envContactConfig.WHATSAPP_PHONE_NUMBER_ID}/messages`;

const SERVICE_LABELS: Record<LeadInput["service"], string> = {
  "gst-registration": "GST Registration",
  "gst-return-filing": "GST Return Filing",
  "trademark-registration": "Trademark Registration",
  "itr-filing": "ITR Filing",
  "msme-registration": "MSME Registration",
  "iec-registration": "IEC Registration",
  "fssai-registration": "FSSAI Registration",
  other: "Other",
};

const buildMessageText = (lead: LeadInput): string => {
  const lines = [
    "📩 *New Website Enquiry*",
    `*FullName:* ${lead.fullname}`,
    `*Phone:* ${lead.phone}`,
    lead.email ? `*Email:* ${lead.email}` : null,
    `*Service:* ${SERVICE_LABELS[lead.service]}`,
    lead.message ? `*Message:* ${lead.message}` : null,
  ].filter(Boolean);

  return lines.join("\n");
};

export const sendLeadToWhatsApp = async (lead: LeadInput): Promise<void> => {
  await axios.post(
    WHATSAPP_API_URL,
    {
      messaging_product: "whatsapp",
      to: envContactConfig.WHATSAPP_RECIPIENT_NUMBER,
      type: "text",
      text: { body: buildMessageText(lead) },
    },
    {
      headers: {
        Authorization: `Bearer ${envContactConfig.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      timeout: 10_000,
    },
  );
};
