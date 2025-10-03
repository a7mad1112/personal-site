import { useState } from "react";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
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
              <div
                key={s.front.title}
                className="group relative [perspective:1000px]"
              >
                <div
                  className="
                    relative rounded-2xl
                    transition-transform duration-300 will-change-transform
                    hover:-translate-y-1.5
                    shadow-sm hover:shadow-[0_6px_16px_-4px_var(--accent)]
                    focus-within:-translate-y-1.5 focus-within:shadow-[0_6px_16px_-4px_var(--accent)]
                  "
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    onClick={() => toggleFlip(idx)}
                    className={[
                      "relative h-64 w-full cursor-pointer rounded-2xl",
                      "transition-[transform] duration-700 [transform-style:preserve-3d]",
                      isFlipped ? "[transform:rotateY(180deg)]" : "",
                    ].join(" ")}
                    style={{ outline: "none" }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-[#292a2d] border border-[var(--border)]"
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
                          className="h-16 w-16 lg:h-20 lg:w-20 object-contain"
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
                      <span className="absolute bottom-0 left-0 text-[var(--accent)] text-4xl font-medium opacity-80">
                        ⤺
                      </span>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 rounded-2xl bg-[#292a2d] border border-[var(--border)] [transform:rotateY(180deg)] p-4"
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
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
