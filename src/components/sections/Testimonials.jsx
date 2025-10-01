import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <SectionHeader
          title="Testimonials"
          subtitle="Here is what my clients say about me"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} highlight={i === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
