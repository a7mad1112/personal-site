import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import { techStack } from "../../data/techStack.js";

export default function TechStack() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader kicker="My Tech Stack" title="This is how I do magic." />
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-6">
          {techStack.map((t) => (
            <Card
              key={t.name}
              className="h-20 w-20 grid place-items-center text-xs text-[var(--muted)]"
            >
              {t.name}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
