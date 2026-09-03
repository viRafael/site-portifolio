import { Code2, Server, Wrench } from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolio";

export function Skills() {
  const getCategoryIcon = (icon: SkillCategory["icon"]) => {
    switch (icon) {
      case "code":
        return <Code2 className="w-5 h-5 text-primary" />;
      case "server":
        return <Server className="w-5 h-5 text-secondary" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-tertiary" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-outline">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
          04 // Competências
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
          Core Skills
        </h2>
        <div className="w-12 h-1 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.skillCategories.map((category) => (
          <div
            key={category.title}
            className="border border-outline p-6 md:p-8 bg-surface interactive-border flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-outline/60 pb-4">
                <div className="p-2 bg-surface-variant border border-outline/50">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="font-mono text-xs md:text-sm font-semibold uppercase tracking-wider text-on-background">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with connecting lines */}
              <div className="flex flex-col gap-4 font-mono text-xs md:text-sm text-on-surface-variant">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-center group">
                    <span className="text-on-background group-hover:text-primary transition-colors whitespace-nowrap">
                      {skill}
                    </span>
                    <span className="w-full h-[1px] bg-outline mx-3 group-hover:bg-primary/30 transition-colors" />
                    <span className="text-[10px] text-primary/60 font-mono">0{sIdx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom terminal accent indicator */}
            <div className="mt-8 pt-3 border-t border-outline/40 flex justify-between items-center text-[10px] font-mono text-on-surface-variant/60">
              <span>ACTIVE STACK</span>
              <span className="text-primary font-bold">100% READY</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
