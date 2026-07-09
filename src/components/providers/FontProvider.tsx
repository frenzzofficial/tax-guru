"use client";

import type { ReactNode } from "react";

interface FontProviderProps {
  children: ReactNode;
}

const FontProvider = ({ children }: Readonly<FontProviderProps>) => {
  return <>{children}</>;
};

export default FontProvider;
