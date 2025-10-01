import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import { socials } from "../../data/socials.js";
import Waves from "../ui/Waves.jsx";
import ShinyText from "../ui/ShinyText.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves
          lineColor="rgba(255,145,77,0.15)"
          backgroundColor="transparent"
          waveSpeedX={0.012}
          waveSpeedY={0.006}
          waveAmpX={250}
          waveAmpY={105}
          xGap={28}
          yGap={56}
          friction={0.92}
          tension={0.008}
          maxCursorMove={80}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content ABOVE */}
      <Container className="relative z-10 grid md:grid-cols-2 items-center gap-10">
        {/* Left text content */}
        <div className="space-y-5">
          <ShinyText
            text="Welcome to my world"
            speed={10}
            className="text-base md:text-lg lg:text-xl font-medium mb-0"
            baseClass="text-[var(--muted)]"
          />
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
          <img
            src="me.svg"
            alt="Ahmed"
            className="object-contain w-64 lg:w-80 xl:w-[22rem]"
          />
        </div>
      </Container>
    </section>
  );
}
