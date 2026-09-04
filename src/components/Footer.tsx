"use client";

import { ArrowUp, Terminal } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const t = portfolioContent[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:py-16 bg-surface border-t border-outline mt-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Copyright & Precision Note */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-xs text-on-surface-variant text-center sm:text-left">
          <span>&copy; {currentYear} {t.personal.name}.</span>
          <span className="hidden sm:inline text-outline">•</span>
          <span className="flex items-center gap-1.5 text-on-surface-variant/80">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span>{t.footer.builtWith}</span>
          </span>
        </div>

        {/* Right Side: Social & Contact Links */}
        <div className="flex items-center gap-6 font-mono text-xs text-on-surface-variant">
          <a
            href={t.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline decoration-outline hover:decoration-primary underline-offset-4"
          >
            GitHub
          </a>

          <a
            href={t.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline decoration-outline hover:decoration-primary underline-offset-4"
          >
            LinkedIn
          </a>

          <a
            href={t.personal.researchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline decoration-outline hover:decoration-primary underline-offset-4"
          >
            {t.footer.researchLabel}
          </a>

          <a
            href={`mailto:${t.personal.email}`}
            className="hover:text-primary transition-colors underline decoration-outline hover:decoration-primary underline-offset-4"
          >
            Email
          </a>

          <a
            href="#hero"
            aria-label={t.footer.backToTop}
            className="p-2 border border-outline bg-surface-variant hover:border-primary hover:text-primary transition-colors ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
