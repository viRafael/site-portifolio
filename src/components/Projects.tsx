import { ExternalLink, Server, Bug, Building2 } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";

export function Projects() {
  const renderIcon = (icon: Project["icon"]) => {
    switch (icon) {
      case "api":
        return <Server className="w-7 h-7 text-primary" />;
      case "bug":
        return <Bug className="w-7 h-7 text-primary" />;
      case "building":
        return <Building2 className="w-7 h-7 text-primary" />;
    }
  };

  return (
    <section id="projetos" className="py-16 md:py-24 border-b border-outline">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
          03 // Portfólio de Código
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
          Projetos em Destaque
        </h2>
        <div className="w-12 h-1 bg-primary" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Project 1 (Large - 8 cols) */}
        {portfolioData.projects[0] && (
          <div className="md:col-span-8 bg-surface border border-outline p-6 md:p-8 flex flex-col justify-between interactive-border group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface-variant border border-outline group-hover:border-primary/50 transition-colors">
                  {renderIcon(portfolioData.projects[0].icon)}
                </div>
                <a
                  href={portfolioData.projects[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver repositório ${portfolioData.projects[0].title}`}
                  className="text-on-surface-variant hover:text-primary transition-colors p-2 border border-transparent hover:border-outline bg-surface-variant/40"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="inline-block font-mono text-[11px] text-primary/80 uppercase tracking-widest mb-1">
                Backend Architecture // Microservices
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-on-background mb-3 group-hover:text-primary transition-colors">
                {portfolioData.projects[0].title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                {portfolioData.projects[0].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/50">
              {portfolioData.projects[0].tags.map((tag) => (
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

        {/* Project 2 (Square - 4 cols) */}
        {portfolioData.projects[1] && (
          <div className="md:col-span-4 bg-surface border border-outline p-6 md:p-8 flex flex-col justify-between interactive-border group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface-variant border border-outline group-hover:border-primary/50 transition-colors">
                  {renderIcon(portfolioData.projects[1].icon)}
                </div>
                <a
                  href={portfolioData.projects[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver repositório ${portfolioData.projects[1].title}`}
                  className="text-on-surface-variant hover:text-primary transition-colors p-2 border border-transparent hover:border-outline bg-surface-variant/40"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="inline-block font-mono text-[11px] text-secondary uppercase tracking-widest mb-1">
                Software Engineering // AST Research
              </div>
              <h3 className="text-2xl font-semibold text-on-background mb-3 group-hover:text-primary transition-colors">
                {portfolioData.projects[1].title}
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                {portfolioData.projects[1].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/50">
              {portfolioData.projects[1].tags.map((tag) => (
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

        {/* Project 3 (Wide - 12 cols) */}
        {portfolioData.projects[2] && (
          <div className="md:col-span-12 bg-surface border border-outline p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center interactive-border group gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 bg-surface-variant border border-outline group-hover:border-primary/50 transition-colors">
                  {renderIcon(portfolioData.projects[2].icon)}
                </div>
                <div>
                  <div className="font-mono text-[11px] text-tertiary uppercase tracking-widest">
                    Workspace Management System
                  </div>
                  <h3 className="text-2xl font-semibold text-on-background group-hover:text-primary transition-colors">
                    {portfolioData.projects[2].title}
                  </h3>
                </div>
              </div>

              <p className="text-on-surface-variant text-base leading-relaxed max-w-3xl">
                {portfolioData.projects[2].description}
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-4 min-w-[240px] w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-outline/50">
              <a
                href={portfolioData.projects[2].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver repositório ${portfolioData.projects[2].title}`}
                className="text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-2 font-mono text-xs"
              >
                <span>Acessar Código Fonte</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {portfolioData.projects[2].tags.map((tag) => (
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
