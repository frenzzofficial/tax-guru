thetaxguru/
├── src/
│ ├── app/
│ │ ├── layout.tsx // layout for all pages
│ │ ├── page.tsx → Homepage
│ │ ├── about-us/page.tsx
│ │ ├── contact-us/page.tsx
│ │ ├── services/
│ │ │ ├── page.tsx → Services overview
│ │ │ ├── gst-registration/page.tsx
│ │ │ ├── gst-return-filing/page.tsx
│ │ │ ├── trademark-registration/page.tsx
│ │ │ ├── itr-filing/page.tsx
│ │ │ ├── msme-registration/page.tsx
│ │ │ ├── iec-registration/page.tsx
│ │ │ └── fssai-registration/page.tsx
│ │ ├── locations/
│ │ │ ├── kanpur/page.tsx
│ │ │ └── delhi/page.tsx
│ │ ├── blog/
│ │ │ ├── page.tsx → Blog listing
│ │ │ └── [slug]/page.tsx → Blog post
│ │ ├── sitemap.ts
│ │ ├── robots.ts
│ │ └── api/
│ │ └── lead/
│ │ ├── route.ts
│ │ └── lead.service.ts → sends to email/WhatsApp/Sheet
│ │
│ ├── components/
│ │ ├── features/
│ │ │ ├── lead-form/
│ │ │ │ ├── index.ts
│ │ │ │ ├── LeadForm.tsx
│ │ │ │ └── LeadForm.test.tsx
│ │ │ ├── service-card/
│ │ │ │ ├── index.ts
│ │ │ │ └── ServiceCard.tsx
│ │ │ ├── testimonial/
│ │ │ │ ├── index.ts
│ │ │ │ └── Testimonial.tsx
│ │ │ └── seo-schema/
│ │ │ ├── index.ts
│ │ │ ├── LocalBusinessSchema.tsx
│ │ │ └── ServiceSchema.tsx
│ │ ├── layouts/
│ │ │ └── AppClientLayout.tsx
│ │ ├── providers/
│ │ │ └── ThemeProvider.tsx
│ │ └── ui/
│ │ ├── buttons/
│ │ ├── inputs/
│ │ ├── images/
│ │ │ └── LucidIcon.tsx
│ │ ├── svg/
│ │ ├── Shadcn/
│ │ └── index.ts
│ │
│ ├── packages/
│ │ ├── api/
│ │ │ └── axios.api.ts
│ │ ├── configs/
│ │ │ └── app.config.ts → business info, NAP data
│ │ ├── utils/
│ │ │ ├── cn.ts
│ │ │ └── format.ts
│ │ ├── hooks/
│ │ │ └── useBreakPoints.ts
│ │ ├── env/
│ │ │ └── app.env.ts
│ │ ├── forms/
│ │ │ └── lead.form.ts
│ │ ├── metadata/
│ │ │ └── app.metadata.ts // metadata for SEO
│ │ └── schemas/
│ │ ├── lead.schema.ts → Zod schema for enquiry form
│ │ └── service.schema.ts
│ │
│ ├── styles/
│ │ ├── globals.css
│ │ ├── ui.css
│ │ ├── app.css
│ │ └── animation.css
│ │
│ ├── types/
│ │ ├── api.d.ts
│ │ ├── env.d.ts
│ │ └── global.d.ts
│ │
│ └── main.tsx
│
├── content/
│ └── blog/ → MDX blog posts (non-technical, editable)
│
├── public/
├── tests/e2e/
├── .env.example
├── .env.local
├── biome.json // biome config file for linting and prettier
├── components.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── AGENT.md
└── README.md
