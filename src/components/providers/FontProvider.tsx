"use client";

import type { ReactNode } from "react";
import { DESIGN_LANGUAGE } from "@/packages/configs/fonts.config";

interface FontProviderProps {
  children: ReactNode;
}

const FontProvider = ({ children }: Readonly<FontProviderProps>) => {
  return (
    <>
      <style>{`
        html,
        body,
        p,
        span,
        div,
        li,
        td,
        th,
        label,
        input,
        textarea,
        select,
        button,
        small,
        strong,
        em,
        blockquote,
        code,
        pre {
          font-family: var(${DESIGN_LANGUAGE.TAX_GURU.body}), sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(${DESIGN_LANGUAGE.TAX_GURU.heading}), sans-serif;
        }
      `}</style>

      {children}
    </>
  );
};

export default FontProvider;
