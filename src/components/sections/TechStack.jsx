import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
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
            <div key={t.name} className="group [perspective:1000px] h-24 w-24">
              <div className="relative h-full w-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div
                  className="absolute inset-0 grid place-items-center rounded-2xl border border-[var(--accent)] bg-[var(--surface)] shadow-sm
                      hover:shadow-[0_0_24px_var(--accent)] transition-shadow"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={`/${t.path}`}
                    alt={t.name}
                    className="max-h-12 max-w-12 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 grid place-items-center rounded-2xl border border-[var(--accent)] bg-[var(--surface)]/70
                      text-xs font-medium text-white [transform:rotateY(180deg)]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  title={t.name}
                >
                  {t.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
