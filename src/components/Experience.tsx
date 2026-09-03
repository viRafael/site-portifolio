import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-24 border-b border-outline">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
          02 // Trajetória
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
          Experiência
        </h2>
        <div className="w-12 h-1 bg-primary" />
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-outline ml-4 md:ml-6 pl-8 pb-4 flex flex-col gap-12">
        {portfolioData.experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node */}
            <div
              className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-background transition-all ${
                exp.current
                  ? "bg-primary shadow-[0_0_12px_rgba(245,158,11,0.6)]"
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

            {/* Publication Badge (if applicable) */}
            {exp.badge && (
              <div className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-mono text-xs text-primary bg-primary/10 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-semibold">{exp.badge}</span>
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
