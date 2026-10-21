import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";

const categories = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and performant user interfaces.",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    skills: [
      { name: "React", path: "tech-stack/react.svg", href: "https://react.dev" },
      { name: "TypeScript", path: "tech-stack/typescript.svg", href: "https://www.typescriptlang.org" },
      { name: "JavaScript", path: "tech-stack/js.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Tailwind CSS", path: "tech-stack/tailwindcss.svg", href: "https://tailwindcss.com" },
      { name: "Redux", path: "tech-stack/redux.svg", href: "https://redux.js.org" },
      { name: "React Query", path: "tech-stack/reactquery.svg", href: "https://tanstack.com/query" },
      { name: "Material UI", path: "tech-stack/materialui.svg", href: "https://mui.com" },
      { name: "HTML5", path: "tech-stack/html.svg", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", path: "tech-stack/css.svg", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Architecting reliable servers, RESTful services, and business logic.",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    skills: [
      { name: ".NET Core", path: "tech-stack/dotnet.svg", href: "https://dotnet.microsoft.com" },
      { name: "Node.js", path: "tech-stack/nodejs.svg", href: "https://nodejs.org" },
      { name: "Express.js", path: "tech-stack/expressjs.svg", href: "https://expressjs.com" },
      { name: "Elixir", path: "tech-stack/elixir.svg", href: "https://elixir-lang.org" },
      { name: "Phoenix", path: "tech-stack/phoenix.svg", href: "https://www.phoenixframework.org" },
      { name: "Postman", path: "tech-stack/postman.svg", href: "https://www.postman.com" },
      { name: "PugJS", path: "tech-stack/pugjs.svg", href: "https://pugjs.org" },
    ],
  },
  {
    title: "Databases & Tools",
    description: "Database modeling, version control, build workflows, and deployment.",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    skills: [
      { name: "MongoDB", path: "tech-stack/mongodb.svg", href: "https://www.mongodb.com" },
      { name: "Git", path: "tech-stack/git.svg", href: "https://git-scm.com" },
      { name: "GitHub", path: "tech-stack/github.svg", href: "https://github.com" },
      { name: "ViteJS", path: "tech-stack/vitejs.svg", href: "https://vitejs.dev" },
      { name: "NPM", path: "tech-stack/npm.svg", href: "https://www.npmjs.com" },
    ],
  },
  {
    title: "Design & Workflow",
    description: "Wireframing, prototyping, agile collaboration, and digital assets.",
    icon: (
      <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    skills: [
      { name: "Figma", path: "tech-stack/figma.svg", href: "https://figma.com" },
      { name: "Canva", path: "tech-stack/canva.svg", href: "https://canva.com" },
      { name: "Notion", path: "tech-stack/notion.svg", href: "https://www.notion.so" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative">
      <Container>
        <SectionHeader
          kicker="My Tech Stack & Tools"
          title="Technologies & Frameworks"
          subtitle="The core tools and technologies I use to build scalable products"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 hover:border-[var(--accent)]/40 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)]">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5 mt-5">
                {cat.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[var(--accent)]/40 transition-all group"
                  >
                    <img
                      src={`/${skill.path}`}
                      alt={skill.name}
                      className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    <span className="text-xs font-medium text-white/80 group-hover:text-white">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
