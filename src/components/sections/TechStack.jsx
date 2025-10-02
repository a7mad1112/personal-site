import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import { techStack } from "../../data/techStack.js";

export default function TechStack() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          kicker="My Tech Stack & Tools"
          title="This is how I do magic."
        />
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-6">
          {techStack.map((t) => (
            <Card
              key={t.name}
              className="h-20 w-20 grid place-items-center p-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
            >
              <img
                src={`/${t.path}`}
                alt={t.name}
                className="max-h-12 max-w-12 object-contain"
                title={t.name}
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
