---
name: Kinetic Syntax
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#b6ccff'
  on-tertiary: '#002e6a'
  tertiary-container: '#8ab0ff'
  on-tertiary-container: '#00408f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '450'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 4rem
---

# Design System: Kinetic Syntax & Especificações do Projeto

## Metadados do Projeto Stitch
- **Projeto ID**: `17493702184124506465` (`projects/17493702184124506465`)
- **Título no Stitch**: Rafael Vieira Portfolio
- **Screen ID**: `d2635d31a7c342068321e254184f72e8`
- **Título da Tela**: `Rafael Vieira | Backend Developer & Pesquisador`
- **Screenshot de Referência**: [Visualizar Thumbnail](https://lh3.googleusercontent.com/aida/AEtjO1VyfmRwWNRKYXo-ZwgNN2Q8WstLeciBWGyMfd8fcd0Yw2Gjvq9GBV370qJtSTzcpOu85OhsY1WsG4eBpgRQm59gySfza3gXTY6hoaCg5DtyLE3sV-Pov-bodfoGWhREwBKi9EeHSAmZh0uCCNvwfZKbDtMkk-74S4FAQjIHyIuIUZGMsC80s4x63Ej8O_owrwXn8GZZNGOqVNrRsuEZyQf40PgB5fBBOzfnSP-yxBIGGic0RoG9RUl7J8Ol)
- **Viewport Base**: 1280px Desktop (Grid container: 1200px)

---

## Brand & Style

O design system foi desenvolvido para um portfólio pessoal voltado para desenvolvimento backend e pesquisa em Engenharia de Software, priorizando clareza técnica e estética de alta performance. A personalidade da marca é **"Expert-Minimalist"** — autoritária, porém acessível, eliminando ruídos visuais para focar na arquitetura de código, robustez e qualidade de software.

O estilo de design é **Minimalista com acabamento Code-First**. Inspira-se em ambientes de desenvolvimento (IDEs) e interfaces de terminal, utilizando fundos escuros profundos, detalhes monoespaçados nítidos e lógica visual de syntax highlighting para elementos interativos. Em vez de formas orgânicas ou gradientes pesados, o sistema apoia-se em alinhamento estrito em grade (grid), bordas limpas e uso intencional de espaços em branco.

---

## Cores & Paleta

Nativo para **Dark Mode**. A paleta é ancorada em uma base carvão/preto profundo (`#0B0B0C` / `#131314`) para contraste ideal com conteúdos técnicos.

| Token | Hex | Aplicação / Semântica |
| :--- | :--- | :--- |
| `background` | `#0B0B0C` | Fundo principal da página |
| `surface` | `#161617` | Fundo dos cards e contêineres estruturais |
| `surface-variant` | `#161617` / `#353436` | Contêineres de código, terminal e seções secundárias |
| `primary` | `#F59E0B` (`#ffc174` tint) | Âmbar terminal: botões de ação primária, estados ativos, cursor e acentos |
| `secondary` | `#4EDEA3` / `#10B981` | Verde esmeralda: badges de sintaxe, status de sucesso |
| `tertiary` | `#B6CCFF` / `#3B82F6` | Azul terminal: links, integrações, tags técnicas |
| `outline` | `#353436` / `#A08E7A` | Bordas sutis de componentes e divisores de seção |
| `on-background` | `#E5E2E3` | Texto principal de leitura |
| `on-surface-variant` | `#D8C3AD` | Texto secundário, descrições e metadados |

---

## Tipografia

Combinação de **Geist** (para legibilidade e acabamento SaaS moderno) e **JetBrains Mono** (para código, tags e rótulos técnicos).

- **`headline-xl`**: `Geist`, 48px, peso 700, line-height 1.1, letter-spacing -0.04em (Título principal da Hero).
- **`headline-lg`**: `Geist`, 32px, peso 600, line-height 1.2, letter-spacing -0.02em (Títulos de seção).
- **`headline-lg-mobile`**: `Geist`, 24px, peso 600, line-height 1.2 (Títulos em cards e telas menores).
- **`body-md`**: `Geist`, 16px, peso 400, line-height 1.6 (Textos de descrição e parágrafos).
- **`code-sm`**: `JetBrains Mono`, 14px, peso 450, line-height 1.5 (Metadados, snippets de código, badges).
- **`label-caps`**: `JetBrains Mono`, 12px, peso 600, line-height 1.0, tracking 0.1em, uppercase (Navegação, botões, cabeçalhos de matrizes).

---

## Layout, Grid & Espaçamento

- **Container Máximo**: 1200px centralizado com padding de segurança (`px-gutter: 24px`, no mobile `16px`).
- **Sistema de Grid**: 12 colunas para cards e hero; 3 colunas para a matriz de habilidades.
- **Ritmo Vertical**:
  - `stack-sm`: `0.5rem` (8px)
  - `stack-md`: `1.5rem` (24px)
  - `stack-lg`: `4rem` (64px) entre seções maiores para manter a sensação de galeria técnica.

---

## Profundidade, Bordas e Interatividade

- **Sem sombras difusas tradicionais**: Camadas tonais (`#161617` sobre `#0B0B0C`) e bordas nítidas de 1px.
- **Hover Interativo**: As bordas dos cards transitam de tom neutro (`#353436`) para o tom Âmbar Primário (`#F59E0B`) com efeito de leve brilho (`box-shadow: 0 0 8px rgba(245, 158, 11, 0.2)`).
- **Cursor de Terminal**: Cursor piscante retangular âmbar (`.terminal-cursor`) reforçando o tema de linha de comando.
- **Bordas**: Raio de 4px (`0.25rem`) ou cantos vivos minimalistas (evitar pill-shapes em botões e badges).

---

## Seções e Conteúdo Mapeado

### 1. Header / Navbar
- Logotipo / Marca: `rafaelvieira.dev`
- Links de Navegação: `About` (`#sobre`), `Experience` (`#experiencia`), `Projects` (`#projetos`), `Skills` (`#skills`)
- Botão CTA: `Resume` (`mailto:contato@rafaelvieira.dev`)
- Efeito: Fundo translúcido com `backdrop-blur-md` e borda inferior sutil.

### 2. Hero Section
- **Nome**: Rafael Vieira
- **Subtítulo**: `Backend Developer & Pesquisador em Engenharia de Software`
- **Bio curta**: *"Graduando em Sistemas de Informação (UFBA), construindo APIs robustas e pesquisando qualidade de software."*
- **Localização**: Salvador, BA
- **CTAs**: `Ver projetos` (botão sólido âmbar) e `Entrar em contato` (botão outline)
- **Links Sociais**: GitHub ([viRafael](https://github.com/viRafael)), LinkedIn ([rafael-vieiraa](https://linkedin.com/in/rafael-vieiraa))
- **Widget Terminal**:
  - Comando: `rafael@dev:~$ cat current_interests.txt`
  - Saída: `> NestJS`, `> TypeScript`, `> Prisma`, `> Docker`, `> Redis`
  - Cursor terminal animado.

### 3. Sobre Mim (`#sobre`)
- Texto detalhando trajetória acadêmica na UFBA, especialização no ecossistema Node.js / NestJS / TypeScript para regras de negócio complexas, pesquisa no Aries Lab sobre qualidade de código/test smells, e liderança técnica e comercial na TITAN.

### 4. Experiência (`#experiencia`)
Linha do tempo vertical minimalista com nós em destaque:
- **Pesquisador Científico** | Aries Lab - CNPq PIBIC (set/2024 – atual)
  - Desenvolvimento do **AriesLinter** (Java/CheckStyle) para detecção de test smells em projetos open-source.
  - Badge: `Publicado no SBES 2025`
- **Diretor Comercial** | TITAN (Empresa Júnior, UFBA) (nov/2025 – atual)
  - Liderança de vendas e especificação de escopo técnico para projetos sob medida; viabilidade e interface com clientes.

### 5. Projetos em Destaque (`#projetos` - Bento Grid)
- **API - Serviços** (Card Destaque 8 colunas)
  - Descrição: Arquitetura backend completa para plataforma de serviços com filas assíncronas e integração financeira.
  - Techs: `NestJS`, `Prisma`, `PostgreSQL`, `Redis`, `Bull`, `Stripe`
  - Link: [viRafael/API-Servicos](https://github.com/viRafael/API-Servicos)
- **AriesLinter** (Card 4 colunas)
  - Descrição: Análise estática baseada em AST para detecção de anomalias (test smells) em código de teste.
  - Techs: `Java`, `AST (CheckStyle)`
  - Link: [viRafael/arieslinter](https://github.com/viRafael/arieslinter)
- **API - Coworking** (Card Horizontal 12 colunas)
  - Descrição: Sistema de gerenciamento de coworking com reservas de mesas, salas de reunião, controle de usuários e planos.
  - Techs: `NestJS`, `Prisma`, `PostgreSQL`
  - Link: [viRafael/API-coworking](https://github.com/viRafael/API-coworking)

### 6. Matriz de Habilidades (`#skills`)
Três colunas estruturadas:
- **Backend & Lógica**: NestJS, TypeScript, Java, Prisma ORM, PostgreSQL
- **Infra & DevOps**: Docker, Redis, AWS, Linux
- **Ferramentas & Processos**: Git / GitHub, Postman, Metodologias Ágeis

### 7. Rodapé
- Copyright: `© 2024 Rafael Vieira. Built with precision.`
- Links: GitHub, LinkedIn, Email (`contato@rafaelvieira.dev`)

---

## Configuração Tailwind CSS de Referência

```javascript
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B0B0C",
        surface: "#161617",
        "surface-variant": "#161617",
        primary: "#F59E0B",
        "on-primary": "#0B0B0C",
        secondary: "#4EDEA3",
        tertiary: "#B6CCFF",
        outline: "#353436",
        "outline-variant": "#353436",
        "on-background": "#E5E2E3",
        "on-surface-variant": "#D8C3AD",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        "container-max": "1200px",
        gutter: "24px",
        "margin-mobile": "16px",
        "stack-sm": "0.5rem",
        "stack-md": "1.5rem",
        "stack-lg": "4rem",
      },
      borderRadius: {
        DEFAULT: "4px",
      }
    }
  }
};
```
