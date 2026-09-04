"use client";

import { GraduationCap, FlaskConical, Award, Briefcase, ExternalLink } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { language } = useLanguage();
  const t = portfolioContent[language];

  const iconMap = [
    <GraduationCap key="grad" className="w-5 h-5 text-primary" />,
    <FlaskConical key="flask" className="w-5 h-5 text-secondary" />,
    <Award key="award" className="w-5 h-5 text-tertiary" />,
    <Briefcase key="briefcase" className="w-5 h-5 text-primary" />,
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 border-b border-outline">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Heading & Accent */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
              {t.about.sectionTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
              {t.about.title}
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-on-surface-variant font-mono text-xs leading-relaxed hidden md:block">
              {t.about.subtitle}
            </p>
          </div>

          {/* Mini Badges / Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {t.about.highlights.map((item, index) => {
              const cardContent = (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <div>{iconMap[index]}</div>
                    {item.href && (
                      <ExternalLink className="w-3.5 h-3.5 text-on-surface-variant/50 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <div className="text-[11px] font-mono text-on-surface-variant/70 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-on-background mt-0.5 group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                  {item.href && (
                    <div className="text-[10px] font-mono text-primary mt-2 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>{language === "pt" ? "Acessar link" : "View link"}</span>
                      <span>&rarr;</span>
                    </div>
                  )}
                </>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-outline p-3.5 interactive-border group hover:border-primary transition-colors block cursor-pointer"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-surface border border-outline p-3.5 interactive-border"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="md:col-span-8 flex flex-col gap-5 text-on-surface-variant text-base md:text-lg leading-relaxed justify-center">
          {t.about.paragraphs.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}

          {/* Quote / Architectural Principle */}
          <div className="mt-4 p-4 border-l-2 border-primary bg-surface/60 font-mono text-xs md:text-sm text-on-background/90">
            <span className="text-primary font-bold">&gt;&gt;</span> &ldquo;{t.about.quote}&rdquo;
            <div className="mt-2 text-on-surface-variant/70 text-[11px] md:text-xs">
              — Kvothe,{" "}
              <em>{language === "pt" ? "O Nome do Vento" : "The Name of the Wind"}</em>{" "}
              (Patrick Rothfuss)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
