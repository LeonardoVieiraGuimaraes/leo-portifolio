# Leonardo Vieira Guimarães — Portfólio

Site pessoal e portfólio profissional de **Leonardo Vieira Guimarães**: Desenvolvedor Full Stack, Product Owner e Professor de TI, com mais de 8 anos em desenvolvimento de software e 12+ anos em educação e pesquisa.

[![Live](https://img.shields.io/badge/Live-leoproti.com.br-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://leoproti.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-vieira-guimaraes/)
[![GitHub](https://img.shields.io/badge/GitHub-LeonardoVieiraGuimaraes-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LeonardoVieiraGuimaraes)

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Nginx-2496ED?style=flat-square&logo=docker&logoColor=white)

## Sobre o projeto

Aplicação React + TypeScript que apresenta trajetória profissional, projetos, skills e formas de contato em uma experiência única, responsiva e com tema claro/escuro. O conteúdo é organizado em seções que cobrem três frentes de atuação: desenvolvimento full stack, gestão de produto e docência/pesquisa.

- **Tema**: dark/light com alternância dinâmica e persistência da preferência do usuário
- **Estilo**: glass morphism, gradientes e animações suaves
- **Responsivo**: mobile-first, adaptado para todos os dispositivos
- **SEO**: meta tags, Open Graph e Twitter Card configurados para compartilhamento

## Seções

| Seção | Componente | Descrição |
|---|---|---|
| Hero | `Hero.tsx` | Apresentação, proof points e chamadas para ação |
| Sobre | `About.tsx` / `AboutSimple.tsx` | Resumo profissional e trajetória |
| Experiência | `Experience.tsx` / `ExperienceFeatured.tsx` | Histórico profissional e destaques |
| Projetos | `ProjectsDeveloper.tsx`, `ProjectsAcademics.tsx`, `ProjectsProfessor.tsx`, `ProjectsFeatured.tsx`, `ProjectCollection.tsx` | Projetos por frente de atuação |
| Skills | `Skills.tsx` | Stack técnica, ferramentas e áreas de domínio |
| Serviços | `Services.tsx` | Frentes de atuação em freelance/PJ |
| Contato | `Contact.tsx` | Formulário de contato (EmailJS) e canais diretos |

## Stack tecnológico

- **Frontend**: React 18.2 + TypeScript
- **Build**: Vite 4.4
- **Estilização**: Tailwind CSS 3.3 + CSS personalizado
- **Roteamento**: React Router 7
- **Ícones**: React Icons + Heroicons
- **Formulário de contato**: EmailJS
- **Deploy**: Docker + Nginx + Cloudflare Tunnel (home server) e GitHub Pages

## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm.

```bash
git clone https://github.com/LeonardoVieiraGuimaraes/leo_portifolio.git
cd leo_portifolio
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173` por padrão.

## Scripts disponíveis

```bash
npm run dev                    # Servidor de desenvolvimento
npm run build:geral            # Build padrão
npm run build:github:linux     # Build para GitHub Pages
npm run build:homeserver:linux # Build para home server
npm run preview                # Preview do build de produção
npm run lint                   # Validação de código (ESLint)
```

## Deploy

- **GitHub Pages**: build gerado com `DEPLOY_TARGET=github` e publicado via `gh-pages`.
- **Home server**: pipeline de CI/CD (`.github/workflows/home-server-Geral.yml`) builda a aplicação, empacota com Docker/Nginx e publica via túnel Cloudflare + SSH a cada push na branch `portifolio-geral`.

## Estrutura do projeto

```
src/
├── components/     # Seções e componentes de UI
├── context/        # Contextos React (ex.: tema)
├── data/           # Conteúdo estruturado (projetos, skills, experiências)
├── utils/          # Funções utilitárias
├── App.tsx
├── main.tsx
└── index.css
```

## Contribuindo

Este é um projeto pessoal, mas sugestões e correções são bem-vindas via issues ou pull requests. O histórico de commits segue o padrão [Conventional Commits](./CONTRIBUTING.md).

<details>
<summary>Notas de desenvolvimento — ícones SVG pendentes</summary>

Alguns ícones de tecnologias ainda não têm SVG local em `public/images/skills`. Baixe e salve com o nome indicado para que apareçam corretamente na seção de Skills:

| Skill | Link SVG |
|---|---|
| Next.js | https://simpleicons.org/icons/nextdotjs.svg |
| Express.js | https://simpleicons.org/icons/express.svg |
| C# | https://simpleicons.org/icons/csharp.svg |
| PostgreSQL | https://simpleicons.org/icons/postgresql.svg |
| MySQL | https://simpleicons.org/icons/mysql.svg |
| MongoDB | https://simpleicons.org/icons/mongodb.svg |
| Git | https://simpleicons.org/icons/git.svg |
| Linux | https://simpleicons.org/icons/linux.svg |
| Figma | https://simpleicons.org/icons/figma.svg |
| Power BI | https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg |
| Pandas | https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pandas.svg |
| Numpy | https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/numpy.svg |
| Bootstrap | https://simpleicons.org/icons/bootstrap.svg |
| Tailwind CSS | https://simpleicons.org/icons/tailwindcss.svg |
| Jest | https://simpleicons.org/icons/jest.svg |
| Cypress | https://simpleicons.org/icons/cypress.svg |
| APIs REST | https://www.svgrepo.com/show/353478/api.svg |
| GraphQL | https://simpleicons.org/icons/graphql.svg |
| Matplotlib | https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/matplotlib.svg |
| Seaborn | https://seaborn.pydata.org/_static/logo-wide-lightbg.svg |
| FastAPI | https://raw.githubusercontent.com/tiangolo/fastapi/master/docs/img/icon-white.svg |
| Flask | https://simpleicons.org/icons/flask.svg |
| SASS | https://simpleicons.org/icons/sass.svg |
| Redux | https://simpleicons.org/icons/redux.svg |
| Vite | https://vitejs.dev/logo.svg |
| Yarn | https://simpleicons.org/icons/yarn.svg |
| NPM | https://simpleicons.org/icons/npm.svg |
| Jupyter | https://simpleicons.org/icons/jupyter.svg |
| Matemática | https://www.svgrepo.com/show/354380/math.svg |
| Estatística | https://www.svgrepo.com/show/354379/statistics.svg |
| Ensino | https://www.svgrepo.com/show/354378/teaching.svg |

Salve cada arquivo com o nome sugerido (ex.: `nextjs.svg`, `express.svg`) para garantir que todos os ícones apareçam corretamente nas skills.

</details>

## Contato

- **Portfólio**: [leoproti.com.br](https://leoproti.com.br)
- **LinkedIn**: [leonardo-vieira-guimaraes](https://www.linkedin.com/in/leonardo-vieira-guimaraes/)
- **E-mail**: [leonardovieiraxy@hotmail.com](mailto:leonardovieiraxy@hotmail.com)
