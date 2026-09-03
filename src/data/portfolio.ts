export interface Project {
  id: string;
  title: string;
  categoryTag?: string;
  highlightBadge?: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
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
  skills: string[];
}

export interface SkillCategory {
  title: string;
  icon: "code" | "server" | "tools";
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Rafael Vieira",
    role: "Backend Developer",
    shortBio:
      "Graduando em Sistemas de Informação (UFBA), construindo APIs robustas e pesquisando qualidade de software.",
    location: "Salvador, BA",
    email: "contato@rafaelvieira.dev",
    github: "https://github.com/viRafael",
    linkedin: "https://linkedin.com/in/rafael-vieiraa",
    resumeUrl: "/curriculo-portugues.pdf",
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
        "Bacharelado em Sistemas de Informação - Universidade Federal da Bahia (UFBA)",
      ],
      "cat research.txt": [
        "Aries Lab (CNPq PIBIC) - Investigação de Test Smells e Análise Estática",
        "Artigo aceito/publicado no SBES 2025 & 2026",
      ],
      "help": [
        "Comandos disponíveis: cat current_interests.txt, whoami, cat research.txt, cat education.txt, clear",
      ],
    },
  },
  about: {
    title: "Sobre Mim",
    paragraphs: [
      "Sou graduando em Sistemas de Informação pela Universidade Federal da Bahia (UFBA), com foco no desenvolvimento de arquiteturas backend escaláveis, seguras e de alta performance. Minha expertise técnica concentra-se no ecossistema Node.js, especialmente com NestJS e TypeScript, criando APIs robustas preparadas para regras de negócio complexas.",
      "Busco constantemente o equilíbrio entre o rigor acadêmico e a entrega de valor no mercado. Atuo como Pesquisador no Aries Lab, investigando qualidade de código e test smells. Simultaneamente, atuo como Diretor Comercial na TITAN (Empresa Júnior da UFBA), conduzindo o escopo técnico e a viabilidade de projetos de software comerciais.",
    ],
    highlights: [
      { label: "Graduação", value: "Sistemas de Informação (UFBA)" },
      { label: "Pesquisa", value: "Aries Lab (CNPq PIBIC)" },
      { label: "Produção Científica", value: "Publicação no SBES 2025 & 2026" },
      { label: "Liderança", value: "Diretoria Comercial na TITAN" },
    ],
  },
  experiences: [
    {
      id: "aries-lab",
      role: "Pesquisador Científico",
      organization: "Aries Lab | CNPq PIBIC",
      period: "set/2024 – atual",
      current: true,
      description:
        "Desenvolvimento do AriesLinter (Java/CheckStyle) focado na detecção de test smells em projetos opensource. A pesquisa contribui diretamente para a melhoria contínua da qualidade de software, manutenibilidade e confiabilidade de suítes de testes.",
      badge: "Publicado no SBES 2025 & 2026",
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
  ] as Experience[],
  projects: [
    {
      id: "arieslinter",
      title: "AriesLinter",
      categoryTag: "Research & Software Engineering // AST Static Analysis",
      highlightBadge: "SBES 2025 & 2026",
      description:
        "Ferramenta de análise estática construída sobre AST (Abstract Syntax Tree) com capacidade de detecção em tempo real — diretamente à medida que o código é escrito — dos 17 test smells mais frequentes e críticos da Engenharia de Software. Desenvolvida no âmbito da pesquisa no Aries Lab (CNPq PIBIC) com validação empírica para elevar a confiabilidade e manutenibilidade de testes em Java.",
      tags: ["Java", "AST (CheckStyle)", "Detecção em Tempo Real", "17 Test Smells", "SBES 2025 & 2026", "Open Source"],
      githubUrl: "https://github.com/viRafael/arieslinter",
      icon: "bug",
      featured: true,
      colSpanDesktop: "col-span-7",
    },
    {
      id: "api-servicos",
      title: "API - Serviços",
      categoryTag: "Backend Architecture // Microservices",
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
      categoryTag: "Workspace Management System",
      description:
        "Sistema escalável de gerenciamento para espaços de coworking, lidando com controle de reservas de mesas e salas de reunião, autenticação segura e planos de acesso.",
      tags: ["NestJS", "Prisma", "PostgreSQL", "Docker", "REST API"],
      githubUrl: "https://github.com/viRafael/API-coworking",
      icon: "building",
      featured: true,
      colSpanDesktop: "col-span-12",
    },
  ] as Project[],
  skillCategories: [
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
  ] as SkillCategory[],
};
