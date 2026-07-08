import "../styles/globals.css";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import { appMetaData } from "@/packages/metadata/app.metadata";
import { cn } from "@/packages/utils/cn";

export const metadata = appMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased")}>
      <body className="min-h-full flex flex-col">
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
