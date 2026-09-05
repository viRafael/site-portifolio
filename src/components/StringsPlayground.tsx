"use client";

import React from "react";
import { portfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function StringsPlayground() {
  const { language } = useLanguage();
  const t = portfolioContent[language];

  const sectionHeading = t.skillsSection;

  return (
    <section
      id="playground"
      className="py-16 md:py-24 border-b border-outline relative overflow-hidden"
    >
      <div className="w-full bg-surface border border-outline">
        <div className="flex items-center justify-between gap-3 border-b border-outline/40 px-4 py-2.5 font-mono">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            {sectionHeading.sectionTag}
          </span>
          <span className="text-xs text-on-surface-variant">{sectionHeading.title}</span>
        </div>
      </div>
    </section>
  );
}
