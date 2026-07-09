"use client";
import FontProvider from "../providers/FontProvider";
import { Toaster } from "../ui/shadcn/sonner";
import Footer from "./Footer";
import Header from "./Header";

interface AppClientLayoutProps {
  children: React.ReactNode;
}

const AppClientLayout = ({ children }: Readonly<AppClientLayoutProps>) => {
  return (
    <FontProvider>
      <Header />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
      <Toaster />
    </FontProvider>
  );
};

export default AppClientLayout;
