"use client";

import { ExternalLink, Server, Bug, Building2, Sparkles } from "lucide-react";
import { portfolioContent, Project } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { language } = useLanguage();
  const t = portfolioContent[language];

  const renderIcon = (icon: Project["icon"]) => {
    switch (icon) {
      case "bug":
        return <Bug className="w-7 h-7 text-primary" />;
      case "api":
        return <Server className="w-7 h-7 text-primary" />;
      case "building":
        return <Building2 className="w-7 h-7 text-primary" />;
    }
  };

  const project1 = t.projectsSection.projects[0];
  const project2 = t.projectsSection.projects[1];
  const project3 = t.projectsSection.projects[2];

  return (
    <section id="projetos" className="py-16 md:py-24 border-b border-outline">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
          {t.projectsSection.sectionTag}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
          {t.projectsSection.title}
        </h2>
        <div className="w-12 h-1 bg-primary" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Projeto 1: AriesLinter (Destaque Principal - 7 colunas) */}
        {project1 && (
          <div className="md:col-span-7 bg-surface border border-outline p-6 md:p-8 flex flex-col justify-between interactive-border group relative overflow-hidden">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-variant border border-outline group-hover:border-primary/50 transition-colors">
                  {renderIcon(project1.icon)}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <a
                    href={project1.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${language === "pt" ? "Ver repositório" : "View repository"} ${project1.title}`}
                    className="text-on-surface-variant hover:text-primary transition-colors p-2 border border-transparent hover:border-outline bg-surface-variant/40 flex items-center gap-1.5 font-mono text-xs"
                  >
                    <span className="hidden sm:inline">github.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {project1.researchUrl && (
                    <a
                      href={project1.researchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${language === "pt" ? "Ver artigo de pesquisa" : "View research paper"} ${project1.title}`}
                      className="text-on-surface-variant hover:text-primary transition-colors p-2 border border-transparent hover:border-outline bg-surface-variant/40 flex items-center gap-1.5 font-mono text-xs"
                    >
                      <span className="hidden sm:inline">
                        {project1.researchLabel || t.projectsSection.viewResearch}
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Highlight Flag */}
              {project1.highlightBadge && (
                project1.researchUrl ? (
                  <a
                    href={project1.researchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project1.highlightBadge} - ${language === "pt" ? "Ver artigo de pesquisa" : "View research paper"}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 text-[11px] font-mono font-semibold text-primary bg-primary/10 border border-primary/40 hover:bg-primary/20 hover:border-primary transition-colors group/flag"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{project1.highlightBadge}</span>
                    <ExternalLink className="w-3 h-3 opacity-70 group-hover/flag:opacity-100 transition-opacity ml-0.5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 text-[11px] font-mono font-semibold text-primary bg-primary/10 border border-primary/40">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{project1.highlightBadge}</span>
                  </div>
                )
              )}

              <div className="font-mono text-[11px] text-on-surface-variant/80 uppercase tracking-widest mb-1">
                {project1.categoryTag}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-on-background mb-3 group-hover:text-primary transition-colors">
                {project1.title}
              </h3>

              <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                {project1.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/50">
              {project1.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 font-mono text-xs tech-badge"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projeto 2: API - Serviços (5 colunas) */}
        {project2 && (
          <div className="md:col-span-5 bg-surface border border-outline p-6 md:p-8 flex flex-col justify-between interactive-border group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-variant border border-outline group-hover:border-primary/50 transition-colors">
                  {renderIcon(project2.icon)}
                </div>
                <a
                  href={project2.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${language === "pt" ? "Ver repositório" : "View repository"} ${project2.title}`}
                  className="text-on-surface-variant hover:text-primary transition-colors p-2 border border-transparent hover:border-outline bg-surface-variant/40"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="inline-block font-mono text-[11px] text-primary/80 uppercase tracking-widest mb-1">
                {project2.categoryTag}
              </div>

              <h3 className="text-2xl font-semibold text-on-background mb-3 group-hover:text-primary transition-colors">
                {project2.title}
              </h3>

              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                {project2.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/50">
              {project2.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 font-mono text-xs tech-badge"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projeto 3: API - Coworking (12 colunas) */}
        {project3 && (
          <div className="md:col-span-12 bg-surface border border-outline p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center interactive-border group gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 bg-surface-variant border border-outline group-hover:border-primary/50 transition-colors">
                  {renderIcon(project3.icon)}
                </div>
                <div>
                  <div className="font-mono text-[11px] text-tertiary uppercase tracking-widest">
                    {project3.categoryTag}
                  </div>
                  <h3 className="text-2xl font-semibold text-on-background group-hover:text-primary transition-colors">
                    {project3.title}
                  </h3>
                </div>
              </div>

              <p className="text-on-surface-variant text-base leading-relaxed max-w-3xl">
                {project3.description}
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-4 min-w-[240px] w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-outline/50">
              <a
                href={project3.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${language === "pt" ? "Ver repositório" : "View repository"} ${project3.title}`}
                className="text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-2 font-mono text-xs"
              >
                <span>{t.projectsSection.viewSource}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {project3.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 font-mono text-xs tech-badge"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
