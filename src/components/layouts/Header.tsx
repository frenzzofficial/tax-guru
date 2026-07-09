"use client";

import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { SERVICE_LABELS, SERVICE_SLUGS } from "@/packages/configs/app.config";
import { envAppConfig } from "@/packages/env/app.env";
import { envContactConfig } from "@/packages/env/contact.env";
import { cn } from "@/packages/utils/cn";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
  { href: "/blogs", label: "Blog" },
] as const;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image
            src={envAppConfig.LOGO_URL}
            alt={envAppConfig.SITE_NAME}
            width={36}
            height={36}
            className="rounded-md"
          /> */}
          <span className="font-heading text-lg font-semibold text-foreground">
            {envAppConfig.SITE_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="link text-sm font-medium">
            Home
          </Link>

          {/* Services dropdown */}
          <div
            role="tab"
            tabIndex={0}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocus={() => setIsServicesOpen(true)}
            onBlur={() => setIsServicesOpen(false)}
          >
            <Button
              className="link text-sm font-medium"
              aria-expanded={isServicesOpen}
            >
              Services
            </Button>

            {isServicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-md border border-border bg-popover py-2 shadow-lg">
                {SERVICE_SLUGS.map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {SERVICE_LABELS[slug]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: phone, theme toggle, CTA, mobile trigger */}
        <div className="flex items-center gap-3">
          <Link
            href={`tel:${envContactConfig.NEXT_PUBLIC_CONTACT_PHONE}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-foreground lg:flex"
          >
            <Phone className="size-4" />
            {envContactConfig.NEXT_PUBLIC_CONTACT_PHONE}
          </Link>

          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>

          <Link href="/contact-us" className="hidden sm:block">
            <Button size="sm">Get Free Consultation</Button>
          </Link>

          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background md:hidden",
          isMobileMenuOpen ? "max-h-128" : "max-h-0",
        )}
        style={{ transition: "max-height 250ms ease" }}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Services
          </p>
          {SERVICE_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="rounded-md px-3 py-2 text-sm hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {SERVICE_LABELS[slug]}
            </Link>
          ))}

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`tel:${envContactConfig.NEXT_PUBLIC_CONTACT_PHONE}`}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium"
          >
            <Phone className="size-4" />
            {envContactConfig.NEXT_PUBLIC_CONTACT_PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
