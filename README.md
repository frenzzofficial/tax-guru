# The Tax Guru — Website Rebuild

Modern rebuild of [thetaxguru.in](https://thetaxguru.in) using Next.js, TypeScript, and pnpm — built for speed, search visibility, and lead conversion.

## Tech Stack

- **Framework:** Next.js (App Router, React Server Components by default)
- **Language:** TypeScript
- **Runtime/Package Manager:** pnpm
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Validation:** Zod (env config, forms, API payloads)
- **HTTP Client:** Axios
- **Lint/Format:** Biome (replaces ESLint + Prettier)
- **Lead Delivery:** WhatsApp Cloud API (Meta Graph API)

## Getting Started

```bash
pnpm install
cp .env.example .env.local   # fill in real values, see below
pnpm dev
```

Runs at `http://localhost:3000`.

### Available scripts

```bash
pnpm dev         # start dev server
pnpm run build   # production build
pnpm run start   # run production build
pnpm run lint    # biome lint
pnpm run format  # biome format --write
pnpm run check   # biome check --write
pnpm run typecheck  # tsc --noEmit
pnpm run verify  # runs lint + format + check + typecheck together
```

## Environment Variables

Two validated env modules — the app will refuse to start if required values are missing.

**`src/packages/env/app.env.ts`** — site identity & SEO

```
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_TITLE
NEXT_PUBLIC_SITE_DESCRIPTION
NEXT_PUBLIC_LOGO_URL
NEXT_PUBLIC_OG_IMAGE_URL
```

**`src/packages/env/contact.env.ts`** — contact info & WhatsApp Cloud API (server-only secrets, no `NEXT_PUBLIC_` prefix)

```
NEXT_PUBLIC_CONTACT_PHONE
NEXT_PUBLIC_CONTACT_PHONE_ALT
NEXT_PUBLIC_CONTACT_EMAIL
WHATSAPP_TOKEN
WHATSAPP_PHONE_NUMBER_ID
WHATSAPP_RECIPIENT_NUMBER
WHATSAPP_API_VERSION
```

Never read `process.env.X` directly anywhere else in the codebase — always import the validated `envAppConfig` / `envContactConfig` objects.

## Project Structure

```
src/
├── app/                    # routes (App Router)
│   ├── services/[slug]/    # one page per service
│   ├── locations/[city]/   # Kanpur, Delhi
│   ├── blogs/[slug]/       # blog content
│   ├── api/lead/           # lead capture → WhatsApp
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── features/           # lead-form, service-card, testimonial, seo-schema
│   ├── layouts/            # Header, Footer, AppClientLayout
│   └── ui/                 # shadcn primitives
├── packages/
│   ├── configs/            # app.config, schema.config, domains.config, fonts.config
│   ├── env/                # validated env modules
│   ├── schemas/            # Zod schemas (lead, service)
│   ├── forms/               # form logic
│   └── utils/
└── styles/
```

## Known Issues / Open Bugs

These need fixing before further feature work builds on top of them:

- [ ] **Route naming mismatch** — `sitemap.ts` references `/blog`, actual folder is `src/app/blogs/`. Pick one and align both.
- [ ] **Service list mismatch** — `lead.schema.ts` service enum doesn't match `SERVICE_SLUGS` in `app.config.ts`. These must be a single source of truth.
- [ ] **Email validation too strict** — `emailRules` in `schema.config.ts` only allows gmail/hotmail/outlook domains. Business/custom-domain emails are rejected. Needs to be a general email format check.
- [ ] **Unsafe env defaults** — `WHATSAPP_TOKEN` and related secrets have placeholder string defaults (`"your_token_here"`). These should have no default, so missing env vars fail loudly at boot instead of silently passing validation.
- [ ] **Missing form library** — `react-hook-form` + `@hookform/resolvers` needed for `LeadForm.tsx`, not yet in `package.json`.
- [ ] **`sharp` disabled** in `pnpm-workspace.yaml` — disables Next's native image optimizer.

## Roadmap

1. Fix known bugs above
2. Confirm pnpm as sole package manager, regenerate lockfile
3. Build shared components: `LeadForm`, `Header`, `Footer`, `ThemeProvider`, `LocalBusinessSchema`, `ServiceSchema`
4. Build one full service page (GST Registration) as the template, get sign-off
5. Clone pattern to remaining 6 service pages
6. Build Home, About, Contact, Locations pages
7. Set up blog content pipeline (MDX or headless CMS)
8. Connect real WhatsApp Cloud API credentials, test lead flow end-to-end
9. Deploy to Vercel, verify Core Web Vitals + Google Rich Results Test
10. Final QA pass, then DNS cutover from the old WordPress site

## License

CC0 1.0 Universal
