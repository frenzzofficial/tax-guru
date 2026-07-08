import { NextResponse } from "next/server";
import { leadSchema } from "@/packages/schemas/lead.schema";
import { sendLeadToWhatsApp } from "./lead.service";

export const POST = async (req: Request): Promise<NextResponse> => {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await sendLeadToWhatsApp(parsed.data);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("WhatsApp lead delivery failed", err);
    return NextResponse.json(
      { error: "Could not send enquiry right now. Please try again." },
      { status: 502 },
    );
  }
};
