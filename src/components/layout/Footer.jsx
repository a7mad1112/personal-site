import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <Container className="py-10 text-sm text-[var(--muted)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>© {new Date().getFullYear()} Made with ❤️ by Ahmed Alawneh</div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#testimonials" className="hover:text-white">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
