import { zodResolver } from "@hookform/resolvers/zod";
import type { UseFormProps } from "react-hook-form";
import { type LeadInput, leadSchema } from "../schemas/lead.schema";

export const leadFormDefaultValues: LeadInput = {
  fullname: "",
  phone: "",
  email: "",
  service: "gst-registration",
  message: "",
};

export const leadFormConfig: UseFormProps<LeadInput> = {
  resolver: zodResolver(leadSchema),
  defaultValues: leadFormDefaultValues,
  mode: "onBlur",
};
