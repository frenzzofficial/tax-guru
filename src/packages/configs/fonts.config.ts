import { Inter, Public_Sans } from "next/font/google";

export type FontRole =
  | "ui"
  | "premium"
  | "technical"
  | "editorial"
  | "enterprise";

export interface FontMeta {
  role: FontRole;
  family: string;
  variable: string;
  category: "sans" | "serif";
}

// UI
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const publicSansHeading = Public_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fonts: FontMeta[] = [
  {
    role: "ui",
    family: "Inter",
    variable: inter.variable,
    category: "sans",
  },
  {
    role: "ui",
    family: "Public Sans",
    variable: publicSansHeading.variable,
    category: "sans",
  },
];

export const DESIGN_LANGUAGE = {
  MINIMAL: {
    heading: "Geist",
    body: "Inter",
  },
  TAX_GURU: {
    heading: "Inter",
    body: "Public Sans",
  },
} as const;

export type DesignLanguage = keyof typeof DESIGN_LANGUAGE;
