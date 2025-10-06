import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import SpotlightCard from "../ui/SpotlightCard.jsx";
import { services } from "../../data/services.js";
import AnimatedSvgLines from "../ui/AnimatedSvgLines.jsx";

export default function Services() {
  const [flipped, setFlipped] = useState(new Set());
  const sectionRef = useRef(null);
  const rm = useReducedMotion();

  const toggleFlip = (idx) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };
  const fadeUp = {
    hidden: { opacity: 0, y: rm ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };
  const gridStagger = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: rm ? 0 : 0.06,
        delayChildren: rm ? 0 : 0.15,
      },
    },
  };
  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      <AnimatedSvgLines observeRef={sectionRef} opacity={0.2} duration={1600} />
      <div className="relative z-10">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
          >
            <SectionHeader
              title="My Services"
              subtitle="This is what I can do for you"
            />
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            variants={gridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
          >
            {services.map((s, idx) => {
              const isFlipped = flipped.has(idx);
              return (
                <motion.div
                  key={s.front.title}
                  variants={fadeUp}
                  whileHover={rm ? {} : { y: -2, scale: 1.01 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                    mass: 0.6,
                  }}
                >
                  <SpotlightCard
                    className="h-64 cursor-pointer"
                    spotlightColor="rgba(255, 145, 77, 0.18)"
                  >
                    <motion.div
                      role="button"
                      tabIndex={0}
                      aria-pressed={isFlipped}
                      onClick={() => toggleFlip(idx)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFlip(idx);
                        }
                      }}
                      className="relative h-full w-full [transform-style:preserve-3d]"
                      style={{
                        transformPerspective: 1000,
                      }}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 16,
                      }}
                    >
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 rounded-2xl border border-[var(--border)] p-4"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        {s.front.path && (
                          <motion.img
                            src={s.front.path}
                            alt=""
                            aria-hidden="true"
                            className="h-16 w-16 object-contain"
                            loading="lazy"
                            whileHover={rm ? {} : { scale: 1.03 }}
                            transition={{ type: "tween", duration: 0.18 }}
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

                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-[var(--border)] p-4 [transform:rotateY(180deg)]"
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
                    </motion.div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
