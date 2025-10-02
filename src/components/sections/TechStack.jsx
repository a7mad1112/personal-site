import { useEffect, useRef } from "react";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import LogoLoop from "../ui/LogoLoop.jsx";
import FlipLogo from "../ui/FlipLogo.jsx";
import { techStack } from "../../data/techStack.js";

export default function TechStack() {
  const sectionRef = useRef(null);

  const logos = techStack.map((t) => ({
    node: <FlipLogo src={`/${t.path}`} title={t.name} />,
    title: t.name,
    href: t.href,
  }));

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const interval = setInterval(() => {
      const planes = root.querySelectorAll(".flip-plane");
      if (!planes.length) return;
      const idx = Math.floor(Math.random() * planes.length);
      const el = planes[idx];
      if (el.classList.contains("is-flipped")) return;
      el.classList.add("is-flipped");
      const timeout = setTimeout(() => el.classList.remove("is-flipped"), 720);
      return () => clearTimeout(timeout);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 pb-10">
      <Container>
        <SectionHeader
          kicker="My Tech Stack & Tools"
          title="This is how I do magic."
        />

        <div className="mt-10 relative h-[112px] overflow-hidden">
          <LogoLoop
            logos={logos}
            speed={60}
            direction="left"
            logoHeight={72}
            gap={32}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg)"
            ariaLabel="Technologies I use"
            className="opacity-90"
          />
        </div>

        <div className="mt-6 relative h-[112px] overflow-hidden">
          <LogoLoop
            logos={[...logos].reverse()}
            speed={60}
            direction="right"
            logoHeight={72}
            gap={32}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--bg)"
            ariaLabel="Tools and services"
            className="opacity-80"
          />
        </div>
      </Container>
    </section>
  );
}
