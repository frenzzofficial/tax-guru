import "../styles/globals.css";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import { fonts, inter } from "@/packages/configs/fonts.config";
import { appMetaData } from "@/packages/metadata/app.metadata";
import { cn } from "@/packages/utils/cn";

export const metadata = appMetaData;

const headingFont = fonts.find((f) => f.family === "Public Sans");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        headingFont?.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
