import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import { services } from "../../data/services.js";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeader
          title="My Services"
          subtitle="This is what I can do for you"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="p-6 hover:border-[var(--accent)] transition"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-[var(--muted)]">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
