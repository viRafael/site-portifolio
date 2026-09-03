import { Language } from "@/context/LanguageContext";

export interface Project {
  id: string;
  title: string;
  categoryTag: string;
  highlightBadge?: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  researchUrl?: string;
  researchLabel?: string;
  icon: "api" | "bug" | "building";
  featured: boolean;
  colSpanDesktop: "col-span-7" | "col-span-5" | "col-span-8" | "col-span-4" | "col-span-12";
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  current: boolean;
  description: string;
  badge?: string;
  researchUrl?: string;
  researchLabel?: string;
  skills: string[];
}

export interface HighlightItem {
  label: string;
  value: string;
  href?: string;
}

export interface SkillCategory {
  title: string;
  icon: "code" | "server" | "tools";
  skills: string[];
}

export interface PortfolioContent {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    resume: string;
  };
  personal: {
    name: string;
    role: string;
    shortBio: string;
    location: string;
    affiliation: string;
    email: string;
    github: string;
    linkedin: string;
    researchUrl: string;
    ctaProjects: string;
    ctaContact: string;
    resumes: {
      pt: { label: string; url: string; filename: string };
      en: { label: string; url: string; filename: string };
    };
  };
  terminal: {
    user: string;
    path: string;
    interactiveLabel: string;
    shortcutsLabel: string;
    placeholder: string;
    commands: Record<string, string[]>;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    quote: string;
    highlights: HighlightItem[];
  };
  experienceSection: {
    sectionTag: string;
    title: string;
    experiences: Experience[];
  };
  projectsSection: {
    sectionTag: string;
    title: string;
    viewSource: string;
    viewResearch: string;
    projects: Project[];
  };
  skillsSection: {
    sectionTag: string;
    title: string;
    activeStack: string;
    readyStatus: string;
    categories: SkillCategory[];
  };
  footer: {
    builtWith: string;
    backToTop: string;
    researchLabel: string;
  };
}

export const portfolioContent: Record<Language, PortfolioContent> = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      resume: "Currículo",
    },
    personal: {
      name: "Rafael Vieira",
      role: "Backend Developer & Pesquisador em Engenharia de Software",
      shortBio:
        "Graduando em Sistemas de Informação (UFBA), construindo APIs robustas e pesquisando qualidade de software.",
      location: "Salvador, BA",
      affiliation: "Universidade Federal da Bahia",
      email: "contato@rafaelvieira.dev",
      github: "https://github.com/viRafael",
      linkedin: "https://linkedin.com/in/rafael-vieiraa",
      researchUrl:
        "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
      resumes: {
        pt: {
          label: "Português",
          url: "/curriculo-portugues.pdf",
          filename: "Curriculo-Rafael-Vieira.pdf",
        },
        en: {
          label: "English",
          url: "/curriculo-ingles.pdf",
          filename: "Resume-Rafael-Vieira.pdf",
        },
      },
    },
    terminal: {
      user: "rafael@dev",
      path: "~$",
      interactiveLabel: "Interativo",
      shortcutsLabel: "Atalhos:",
      placeholder: "digite 'help' ou clique nos atalhos...",
      commands: {
        "cat current_interests.txt": [
          "> NestJS",
          "> TypeScript",
          "> Prisma",
          "> Docker",
          "> Redis",
          "> PostgreSQL",
        ],
        "whoami": [
          "Rafael Vieira - Backend Developer & Pesquisador em Engenharia de Software @ UFBA",
        ],
        "cat education.txt": [
          "Bacharelado em Sistemas de Informação - Universidade Federal da Bahia (UFBA)",
        ],
        "cat research.txt": [
          "Aries Lab (CNPq PIBIC) - Investigação de Test Smells e Análise Estática",
          "Artigo aceito no CBSoft / SBES (Tools Session)",
          "Artigo completo: https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
        ],
        "help": [
          "Comandos disponíveis: cat current_interests.txt, whoami, cat research.txt, cat education.txt, clear",
        ],
      },
    },
    about: {
      sectionTag: "01 // Perfil",
      title: "Sobre Mim",
      subtitle:
        "Arquitetura de sistemas distribuídos, rigor acadêmico e desenvolvimento backend orientado a domínio.",
      quote:
        "Uma pessoa inteligente e insensata é uma das coisas mais assustadoras que há.",
      paragraphs: [
        "Sou graduando em Sistemas de Informação pela Universidade Federal da Bahia (UFBA), com foco no desenvolvimento de arquiteturas backend escaláveis, seguras e de alta performance. Minha expertise técnica concentra-se no ecossistema Node.js, especialmente com NestJS e TypeScript, criando APIs robustas preparadas para regras de negócio complexas.",
        "Busco constantemente o equilíbrio entre o rigor acadêmico e a entrega de valor no mercado. Atuo como Pesquisador no Aries Lab, investigando qualidade de código e test smells através de análise estática de AST. Simultaneamente, atuo como Diretor Comercial na TITAN (Empresa Júnior da UFBA), conduzindo o escopo técnico e a viabilidade de projetos de software comerciais.",
      ],
      highlights: [
        { label: "Graduação", value: "Sistemas de Informação (UFBA)" },
        {
          label: "Pesquisa",
          value: "Aries Lab (CNPq PIBIC)",
          href: "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
        },
        {
          label: "Produção Científica",
          value: "Publicação no SBES 2025 & 2026",
          href: "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
        },
        { label: "Liderança", value: "Diretoria Comercial na TITAN" },
      ],
    },
    experienceSection: {
      sectionTag: "02 // Trajetória",
      title: "Experiência",
      experiences: [
        {
          id: "aries-lab",
          role: "Pesquisador Científico",
          organization: "Aries Lab | CNPq PIBIC",
          period: "set/2024 – atual",
          current: true,
          description:
            "Desenvolvimento do AriesLinter (Java/CheckStyle) focado na detecção de test smells em projetos open-source. A pesquisa contribui diretamente para a melhoria contínua da qualidade de software, manutenibilidade e confiabilidade de suítes de testes.",
          badge: "Publicado no SBES 2025 & 2026",
          researchUrl:
            "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
          researchLabel: "Acessar Artigo Completo",
          skills: ["Java", "AST CheckStyle", "Test Smells", "Engenharia de Software"],
        },
        {
          id: "titan-ej",
          role: "Diretor Comercial",
          organization: "TITAN (Empresa Júnior, UFBA)",
          period: "nov/2025 – atual",
          current: true,
          description:
            "Liderança da estratégia comercial e definição de escopo técnico para projetos de software sob medida. Atuação como interface técnica direta entre as necessidades de clientes reais e a arquitetura desenvolvida pelo time.",
          skills: ["Escopo Técnico", "Viabilidade de Software", "Liderança", "Estratégia Comercial"],
        },
      ],
    },
    projectsSection: {
      sectionTag: "03 // Portfólio de Código",
      title: "Projetos em Destaque",
      viewSource: "Acessar Código Fonte",
      viewResearch: "Acessar Artigo / Pesquisa",
      projects: [
        {
          id: "arieslinter",
          title: "AriesLinter",
          categoryTag: "Pesquisa & Engenharia de Software // Análise Estática AST",
          highlightBadge: "SBES 2025 & 2026",
          description:
            "Ferramenta de análise estática construída sobre AST (Abstract Syntax Tree) com capacidade de detecção em tempo real — diretamente à medida que o código é escrito — dos 17 test smells mais frequentes e críticos da Engenharia de Software. Desenvolvida no âmbito da pesquisa no Aries Lab (CNPq PIBIC) com validação empírica para elevar a confiabilidade e manutenibilidade de testes em Java.",
          tags: [
            "Java",
            "AST (CheckStyle)",
            "Detecção em Tempo Real",
            "17 Test Smells",
            "SBES 2025 & 2026",
            "Open Source",
          ],
          githubUrl: "https://github.com/viRafael/arieslinter",
          researchUrl:
            "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
          researchLabel: "Artigo da Pesquisa",
          icon: "bug",
          featured: true,
          colSpanDesktop: "col-span-7",
        },
        {
          id: "api-servicos",
          title: "API - Serviços",
          categoryTag: "Arquitetura Backend // Microsserviços",
          description:
            "Arquitetura backend completa para plataforma de serviços sob demanda. Implementa filas assíncronas de alta performance para processamento em background e integração financeira robusta com gateway de pagamentos Stripe.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Bull", "Stripe"],
          githubUrl: "https://github.com/viRafael/API-Servicos",
          icon: "api",
          featured: true,
          colSpanDesktop: "col-span-5",
        },
        {
          id: "api-coworking",
          title: "API - Coworking",
          categoryTag: "Sistema de Gestão de Espaços",
          description:
            "Sistema escalável de gerenciamento para espaços de coworking, lidando com controle de reservas de mesas e salas de reunião, autenticação segura e planos de acesso.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "Docker", "REST API"],
          githubUrl: "https://github.com/viRafael/API-coworking",
          icon: "building",
          featured: true,
          colSpanDesktop: "col-span-12",
        },
      ],
    },
    skillsSection: {
      sectionTag: "04 // Competências",
      title: "Core Skills",
      activeStack: "STACK ATIVA",
      readyStatus: "100% PRONTO",
      categories: [
        {
          title: "Backend & Lógica",
          icon: "code",
          skills: ["NestJS", "TypeScript", "Java", "Prisma ORM", "PostgreSQL"],
        },
        {
          title: "Infra & DevOps",
          icon: "server",
          skills: ["Docker", "Redis", "AWS", "Linux", "CI / CD"],
        },
        {
          title: "Ferramentas & Processos",
          icon: "tools",
          skills: ["Git / GitHub", "Postman", "Metodologias Ágeis", "Análise Estática"],
        },
      ],
    },
    footer: {
      builtWith: "Desenvolvido com precisão & Kinetic Syntax.",
      backToTop: "Voltar ao topo",
      researchLabel: "Artigo / Pesquisa",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
    },
    personal: {
      name: "Rafael Vieira",
      role: "Backend Developer & Software Engineering Researcher",
      shortBio:
        "Information Systems undergraduate (UFBA), building scalable APIs and researching software quality.",
      location: "Salvador, Brazil",
      affiliation: "Federal University of Bahia",
      email: "contato@rafaelvieira.dev",
      github: "https://github.com/viRafael",
      linkedin: "https://linkedin.com/in/rafael-vieiraa",
      researchUrl:
        "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      resumes: {
        pt: {
          label: "Português",
          url: "/curriculo-portugues.pdf",
          filename: "Curriculo-Rafael-Vieira.pdf",
        },
        en: {
          label: "English",
          url: "/curriculo-ingles.pdf",
          filename: "Resume-Rafael-Vieira.pdf",
        },
      },
    },
    terminal: {
      user: "rafael@dev",
      path: "~$",
      interactiveLabel: "Interactive",
      shortcutsLabel: "Shortcuts:",
      placeholder: "type 'help' or click in shortcuts...",
      commands: {
        "cat current_interests.txt": [
          "> NestJS",
          "> TypeScript",
          "> Prisma",
          "> Docker",
          "> Redis",
          "> PostgreSQL",
        ],
        "whoami": [
          "Rafael Vieira - Backend Developer & Software Engineering Researcher @ UFBA",
        ],
        "cat education.txt": [
          "B.S. in Information Systems - Federal University of Bahia (UFBA)",
        ],
        "cat research.txt": [
          "Aries Lab (CNPq PIBIC) - Test Smells & AST Static Analysis Investigation",
          "Paper accepted at CBSoft / SBES (Tools Session)",
          "Full paper: https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
        ],
        "help": [
          "Available commands: cat current_interests.txt, whoami, cat research.txt, cat education.txt, clear",
        ],
      },
    },
    about: {
      sectionTag: "01 // Profile",
      title: "About Me",
      subtitle:
        "Distributed systems architecture, academic rigor, and domain-driven backend engineering.",
      quote:
        "An intelligent, foolish person is one of the most frightening things there is.",
      paragraphs: [
        "I am an Information Systems undergraduate at the Federal University of Bahia (UFBA), focused on engineering scalable, secure, and high-performance backend architectures. My technical expertise centers on the Node.js ecosystem, particularly with NestJS and TypeScript, building robust APIs designed for complex business rules.",
        "I continuously strive for balance between academic rigor and practical industry impact. As a Scientific Researcher at Aries Lab, I investigate code quality and test smells through AST static analysis. Concurrently, I serve as Commercial Director at TITAN (UFBA Junior Enterprise), leading technical scoping and project feasibility for custom software solutions.",
      ],
      highlights: [
        { label: "Degree", value: "Information Systems (UFBA)" },
        {
          label: "Research",
          value: "Aries Lab (CNPq PIBIC)",
          href: "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
        },
        {
          label: "Scientific Output",
          value: "Publication at SBES 2025 & 2026",
          href: "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
        },
        { label: "Leadership", value: "Commercial Director at TITAN" },
      ],
    },
    experienceSection: {
      sectionTag: "02 // Experience",
      title: "Career & Research",
      experiences: [
        {
          id: "aries-lab",
          role: "Scientific Researcher",
          organization: "Aries Lab | CNPq PIBIC",
          period: "Sep/2024 – Present",
          current: true,
          description:
            "Development of AriesLinter (Java/CheckStyle) focused on automated detection of test smells in open-source projects. This research directly contributes to continuous software quality, maintainability, and test suite reliability.",
          badge: "Published at SBES 2025 & 2026",
          researchUrl:
            "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
          researchLabel: "Read Research Paper",
          skills: ["Java", "AST CheckStyle", "Test Smells", "Software Engineering"],
        },
        {
          id: "titan-ej",
          role: "Commercial Director",
          organization: "TITAN (Junior Enterprise, UFBA)",
          period: "Nov/2025 – Present",
          current: true,
          description:
            "Leading commercial sales strategy and technical scoping for custom software projects. Acting as the direct technical bridge between real client requirements and the software architecture delivered by the team.",
          skills: ["Technical Scoping", "Software Feasibility", "Leadership", "Commercial Strategy"],
        },
      ],
    },
    projectsSection: {
      sectionTag: "03 // Code Portfolio",
      title: "Featured Projects",
      viewSource: "View Source Code",
      viewResearch: "Read Paper / Research",
      projects: [
        {
          id: "arieslinter",
          title: "AriesLinter",
          categoryTag: "Research & Software Engineering // AST Static Analysis",
          highlightBadge: "SBES 2025 & 2026",
          description:
            "Static analysis tool built on AST (Abstract Syntax Tree) capable of real-time detection — directly as code is typed — of the 17 most frequent and critical test smells in Software Engineering. Developed within Aries Lab (CNPq PIBIC) research with empirical validation to elevate Java test reliability and maintainability.",
          tags: [
            "Java",
            "AST (CheckStyle)",
            "Real-time Detection",
            "17 Test Smells",
            "SBES 2025 & 2026",
            "Open Source",
          ],
          githubUrl: "https://github.com/viRafael/arieslinter",
          researchUrl:
            "https://drive.google.com/file/d/1SQ5c2_XlFVYEGTERW3FSlOD4qIpctqsD/view?usp=sharing",
          researchLabel: "Research Paper",
          icon: "bug",
          featured: true,
          colSpanDesktop: "col-span-7",
        },
        {
          id: "api-servicos",
          title: "API - Services",
          categoryTag: "Backend Architecture // Microservices",
          description:
            "Comprehensive backend architecture for on-demand service platforms. Implements high-performance asynchronous background job queues and robust financial integrations with Stripe.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Bull", "Stripe"],
          githubUrl: "https://github.com/viRafael/API-Servicos",
          icon: "api",
          featured: true,
          colSpanDesktop: "col-span-5",
        },
        {
          id: "api-coworking",
          title: "API - Coworking",
          categoryTag: "Workspace Management System",
          description:
            "Scalable management system for coworking facilities, handling desk and conference room bookings, secure authentication, and membership tiers.",
          tags: ["NestJS", "Prisma", "PostgreSQL", "Docker", "REST API"],
          githubUrl: "https://github.com/viRafael/API-coworking",
          icon: "building",
          featured: true,
          colSpanDesktop: "col-span-12",
        },
      ],
    },
    skillsSection: {
      sectionTag: "04 // Skills Matrix",
      title: "Core Skills",
      activeStack: "ACTIVE STACK",
      readyStatus: "100% READY",
      categories: [
        {
          title: "Backend & Logic",
          icon: "code",
          skills: ["NestJS", "TypeScript", "Java", "Prisma ORM", "PostgreSQL"],
        },
        {
          title: "Infra & DevOps",
          icon: "server",
          skills: ["Docker", "Redis", "AWS", "Linux", "CI / CD"],
        },
        {
          title: "Tools & Processes",
          icon: "tools",
          skills: ["Git / GitHub", "Postman", "Agile Methodologies", "Static Analysis"],
        },
      ],
    },
    footer: {
      builtWith: "Built with precision & Kinetic Syntax.",
      backToTop: "Back to top",
      researchLabel: "Research Paper",
    },
  },
};
