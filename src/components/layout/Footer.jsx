import Container from "./Container.jsx";
import { socials } from "../../data/socials.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.offsetTop - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="inline-flex items-center gap-3"
            >
              <img src="logo.svg" alt="Logo" className="h-8 w-auto" />
            </a>
            <p className="text-sm text-[var(--muted)] max-w-xs">
              Front-end engineer crafting fast, accessible, and beautiful web
              experiences with React, TypeScript, and modern UI systems.
            </p>

            {Array.isArray(socials) && socials.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav className="md:justify-self-center">
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              Quick Links
            </h4>
            <ul className="grid gap-2 text-sm">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.id);
                    }}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              Let’s build something great
            </h4>
            <p className="text-sm text-[var(--muted)] mb-4 max-w-sm">
              Have a project in mind? I’m available for freelance and
              collaborations.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="inline-flex items-center rounded-xl border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
              >
                Contact Me
              </a>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center rounded-xl border border-[var(--border)] px-3 py-2 text-sm text-white/80 hover:text-[var(--accent)] hover:border-[var(--accent)] transition"
                aria-label="Back to top"
                title="Back to top"
              >
                ↑ Top
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] text-xs text-[var(--muted)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span>© {year} Made with ❤️ by Ahmed Alawneh</span>
          <span className="opacity-80">
            Built with React • Styled with Tailwind • Deployed with care
          </span>
        </div>
      </Container>
    </footer>
  );
}
