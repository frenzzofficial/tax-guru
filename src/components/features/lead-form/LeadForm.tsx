"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button, Input } from "@/components/ui";
import { api } from "@/packages/api/axios.api";
import { SERVICE_LABELS, SERVICE_SLUGS } from "@/packages/configs/app.config";
import { leadFormDefaultValues } from "@/packages/configs/leadform.config";
import { type LeadInput, leadSchema } from "@/packages/schemas/lead.schema";

interface LeadFormProps {
  /** Pre-select a service, e.g. when embedded on a specific service page */
  defaultService?: LeadInput["service"];
  className?: string;
}

const LeadForm = ({ defaultService, className }: Readonly<LeadFormProps>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      ...leadFormDefaultValues,
      service: defaultService ?? leadFormDefaultValues.service,
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: LeadInput) => {
    setIsSubmitting(true);

    try {
      await api.post("/lead", data);
      toast.success("Enquiry sent! We'll get back to you shortly.");
      reset();
    } catch (error) {
      console.error("Lead submission failed", error);
      toast.error(
        "Could not send your enquiry right now. Please try again or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="flex flex-col gap-4">
        <div>
          <Input
            type="text"
            placeholder="Your full name"
            aria-invalid={!!errors.fullname}
            className={`input ${errors.fullname ? "input-error" : ""}`}
            {...register("fullname")}
          />
          {errors.fullname && (
            <p className="input-error-text">{errors.fullname.message}</p>
          )}
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone number"
            aria-invalid={!!errors.phone}
            className={`input ${errors.phone ? "input-error" : ""}`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="input-error-text">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email (optional)"
            aria-invalid={!!errors.email}
            className={`input ${errors.email ? "input-error" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <p className="input-error-text">{errors.email.message}</p>
          )}
        </div>

        <div>
          <select
            aria-invalid={!!errors.service}
            className={`input ${errors.service ? "input-error" : ""}`}
            {...register("service")}
          >
            {SERVICE_SLUGS.map((slug) => (
              <option key={slug} value={slug}>
                {SERVICE_LABELS[slug]}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="input-error-text">{errors.service.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Tell us briefly what you need (optional)"
            rows={3}
            aria-invalid={!!errors.message}
            className={`input h-auto py-2 ${errors.message ? "input-error" : ""}`}
            {...register("message")}
          />
          {errors.message && (
            <p className="input-error-text">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg w-full"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
};

export default LeadForm;
