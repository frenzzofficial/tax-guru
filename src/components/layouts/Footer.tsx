import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  LOCATION_LABELS,
  LOCATION_SLUGS,
  SERVICE_LABELS,
  SERVICE_SLUGS,
} from "@/packages/configs/app.config";
import { envAppConfig } from "@/packages/env/app.env";
import { envContactConfig } from "@/packages/env/contact.env";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {envAppConfig.SITE_NAME}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {envAppConfig.SITE_DESCRIPTION}
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold text-foreground">Services</p>
          <ul className="mt-3 flex flex-col gap-2">
            {SERVICE_SLUGS.map((slug) => (
              <li key={slug}>
                <Link href={`/services/${slug}`} className="link-muted text-sm">
                  {SERVICE_LABELS[slug]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <p className="text-sm font-semibold text-foreground">Locations</p>
          <ul className="mt-3 flex flex-col gap-2">
            {LOCATION_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/locations/${slug}`}
                  className="link-muted text-sm"
                >
                  {LOCATION_LABELS[slug]}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link href="/about-us" className="link-muted text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="link-muted text-sm">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold text-foreground">Get in Touch</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li>
              <a
                href={`tel:${envContactConfig.NEXT_PUBLIC_CONTACT_PHONE}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" />
                {envContactConfig.NEXT_PUBLIC_CONTACT_PHONE}
              </a>
            </li>
            {envContactConfig.NEXT_PUBLIC_CONTACT_PHONE_ALT && (
              <li>
                <a
                  href={`tel:${envContactConfig.NEXT_PUBLIC_CONTACT_PHONE_ALT}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0" />
                  {envContactConfig.NEXT_PUBLIC_CONTACT_PHONE_ALT}
                </a>
              </li>
            )}
            <li>
              <a
                href={`mailto:${envContactConfig.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" />
                {envContactConfig.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 mt-0.5" />
              Serving clients across Kanpur &amp; Delhi
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {envAppConfig.SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="link-muted">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-muted">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
