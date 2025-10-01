import Container from "./Container.jsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Logo" className="h-5 w-5" />
          <span className="font-semibold tracking-wide">Ahmed Alawneh</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-[var(--accent)]">
            Home
          </a>
          <a href="#services" className="hover:text-[var(--accent)]">
            Services
          </a>
          <a href="#portfolio" className="hover:text-[var(--accent)]">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-[var(--accent)]">
            Testimonials
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-4 py-1.5 text-black"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
