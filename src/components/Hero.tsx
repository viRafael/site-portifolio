"use client";

import Link from "next/link";
import { MapPin, ArrowDown, Mail } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { Terminal } from "@/components/Terminal";
import { useLanguage } from "@/context/LanguageContext";
import { HeroAnimation } from "@/components/HeroAnimation";

export function Hero() {
  const { language } = useLanguage();
  const t = portfolioContent[language];

  return (
    <section
      id="hero"
      className="min-h-[calc(76vh-5rem)] flex flex-col justify-center py-10 md:py-14 border-b border-outline relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto relative z-10">
        {/* Left Column: Presentation */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-on-background mb-3">
              {t.personal.name}
            </h1>

            <p className="font-mono text-sm sm:text-base text-primary font-medium mb-5 flex items-center gap-2">
              <span>&gt;</span>
              <span>{t.personal.role}</span>
            </p>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {t.personal.shortBio}
            </p>

            <div className="flex items-center gap-2 mt-4 text-on-surface-variant font-mono text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{t.personal.location}</span>
              <span className="text-outline mx-2">•</span>
              <span className="text-on-surface-variant/80">{t.personal.affiliation}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projetos"
              className="font-mono text-xs uppercase tracking-widest font-semibold bg-primary text-on-primary px-6 py-3.5 hover:bg-[#B02C38] transition-all flex items-center gap-2"
            >
              <span>{t.personal.ctaProjects}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </Link>

            <a
              href={`mailto:${t.personal.email}`}
              className="font-mono text-xs uppercase tracking-widest font-semibold border border-outline px-6 py-3.5 text-on-background hover:border-primary hover:text-primary transition-all interactive-border flex items-center gap-2 bg-surface"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.personal.ctaContact}</span>
            </a>
          </div>

          {/* Social & Research Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
            <a
              href={t.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Rafael Vieira"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="hidden sm:inline">github/viRafael</span>
            </a>

            <span className="text-outline">•</span>

            <a
              href={t.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Rafael Vieira"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-xs"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="hidden sm:inline">linkedin/rafael-vieiraa</span>
            </a>

          </div>
        </div>

        {/* Right Column: Terminal Visual */}
        <div className="lg:col-span-5 w-full">
          <Terminal />
        </div>
      </div>

      {/* Interactive Physics & Stagger Animation (Liam Egan Strings & Anime.js) */}
      <HeroAnimation />
    </section>
  );
}
