import { portfolioData } from "@/data/portfolio";
import { GraduationCap, FlaskConical, Award, Briefcase } from "lucide-react";

export function About() {
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
              01 // Perfil
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
              {portfolioData.about.title}
            </h2>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-on-surface-variant font-mono text-xs leading-relaxed hidden md:block">
              Arquitetura de sistemas distribuídos, rigor acadêmico e desenvolvimento backend orientado a domínio.
            </p>
          </div>

          {/* Mini Badges / Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {portfolioData.about.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-surface border border-outline p-3.5 interactive-border"
              >
                <div className="mb-2">{iconMap[index]}</div>
                <div className="text-[11px] font-mono text-on-surface-variant/70 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm font-medium text-on-background mt-0.5">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="md:col-span-8 flex flex-col gap-5 text-on-surface-variant text-base md:text-lg leading-relaxed justify-center">
          {portfolioData.about.paragraphs.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}

          {/* Quote / Architectural Principle */}
          <div className="mt-4 p-4 border-l-2 border-primary bg-surface/60 font-mono text-xs md:text-sm text-on-background/90">
            <span className="text-primary font-bold">&gt;&gt;</span> &ldquo;Código de qualidade não é apenas sobre funcionar hoje, mas sobre permanecer compreensível, testável e manutenível no longo prazo.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
