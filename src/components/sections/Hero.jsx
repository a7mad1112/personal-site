import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import { socials } from "../../data/socials.js";

export default function Hero() {
  return (
    <section
      id="home"
      // full height minus navbar height dynamically
      className="min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center"
    >
      <Container className="grid md:grid-cols-2 items-center gap-10">
        {/* Left text content */}
        <div className="space-y-5">
          <p className="text-sm text-[var(--muted)] mb-0">
            Welcome to my world
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Hello I’m{" "}
            <span className="text-[var(--accent)]">Ahmed Alawneh</span>,<br />A
            Front End Developer.
          </h1>
          <p className="text-[var(--muted)] max-w-xl">
            I create fast, sleek front-end experiences. Let’s build something
            that actually moves your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact">Let’s Work Together</Button>
            <Button
              as="a"
              href={import.meta.env.BASE_URL + "AhmedAlawnehResume.pdf"}
              download="AhmedAlawnehResume.pdf"
              rel="noopener noreferrer"
              variant="outline"
            >
              Download CV
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img src="me.svg" alt="Ahmed" className="object-contain" />
        </div>
      </Container>
    </section>
  );
}
