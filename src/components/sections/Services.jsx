// src/components/sections/Services.jsx
import { useState } from "react";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import SpotlightCard from "../ui/SpotlightCard.jsx";
import { services } from "../../data/services.js";

export default function Services() {
  const [flipped, setFlipped] = useState(new Set());

  const toggleFlip = (idx) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeader
          title="My Services"
          subtitle="This is what I can do for you"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((s, idx) => {
            const isFlipped = flipped.has(idx);
            return (
              <SpotlightCard
                key={s.front.title}
                className="h-64 cursor-pointer"
                spotlightColor="rgba(255, 145, 77, 0.18)" 
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  onClick={() => toggleFlip(idx)}
                  className={[
                    "relative h-full w-full",
                    "transition-transform duration-700 [transform-style:preserve-3d]",
                    isFlipped ? "[transform:rotateY(180deg)]" : "",
                  ].join(" ")}
                  style={{ outline: "none" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 rounded-2xl border border-[var(--border)] p-4"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {s.front.path && (
                      <img
                        src={s.front.path}
                        alt=""
                        aria-hidden="true"
                        className="h-16 w-16 object-contain"
                        loading="lazy"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-white">
                      {s.front.title}
                    </h3>
                    {s.front.desc && (
                      <p className="text-sm text-[var(--muted)] max-w-[80%]">
                        {s.front.desc}
                      </p>
                    )}
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 rounded-2xl  border border-[var(--border)] [transform:rotateY(180deg)] p-4"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <h3 className="text-lg font-bold text-[var(--accent)]">
                      {s.back.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {s.back.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
