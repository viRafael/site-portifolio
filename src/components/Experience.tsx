"use client";

import { Sparkles, ExternalLink, FileText } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function Experience() {
  const { language } = useLanguage();
  const t = portfolioContent[language];

  return (
    <section id="experiencia" className="py-16 md:py-24 border-b border-outline">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
          {t.experienceSection.sectionTag}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
          {t.experienceSection.title}
        </h2>
        <div className="w-12 h-1 bg-primary" />
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-outline ml-4 md:ml-6 pl-8 pb-4 flex flex-col gap-12">
        {t.experienceSection.experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node */}
            <div
              className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-background transition-all ${
                exp.current
                  ? "bg-primary shadow-[0_0_12px_rgba(142,29,39,0.6)]"
                  : "bg-surface-container border-outline"
              }`}
            />

            {/* Time Period */}
            <span className="font-mono text-xs text-primary block mb-2 font-medium">
              {exp.period}
            </span>

            {/* Role & Org */}
            <h3 className="text-xl md:text-2xl font-semibold text-on-background mb-1">
              {exp.role}
            </h3>
            <h4 className="font-mono text-sm text-on-surface-variant/80 mb-4 flex items-center gap-2">
              <span>{exp.organization}</span>
            </h4>

            {/* Narrative Description */}
            <p className="text-on-surface-variant text-base leading-relaxed mb-5 max-w-3xl">
              {exp.description}
            </p>

            {/* Publication Badge & Research Link */}
            {exp.badge && (
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {exp.researchUrl ? (
                  <a
                    href={exp.researchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${exp.badge} - ${language === "pt" ? "Acessar artigo" : "View paper"}`}
                    className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-xs text-primary bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all group/badge"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-semibold">{exp.badge}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/badge:opacity-100 transition-opacity ml-0.5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-xs text-primary bg-primary/10">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-semibold">{exp.badge}</span>
                  </div>
                )}

                {exp.researchUrl && (
                  <a
                    href={exp.researchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 underline decoration-outline hover:decoration-primary underline-offset-4"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    <span>
                      {exp.researchLabel ||
                        (language === "pt" ? "Acessar Artigo Completo" : "Read Research Paper")}
                    </span>
                  </a>
                )}
              </div>
            )}

            {/* Skills / Scope Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 font-mono text-xs border border-outline bg-surface text-on-surface-variant hover:border-outline-variant transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
