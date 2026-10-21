import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import SpotlightCard from "../ui/SpotlightCard.jsx";
import { services } from "../../data/services.js";
import LottieOnce from "../ui/LottieOnce.jsx";

function ServiceCard({ s }) {
  const rm = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: rm ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={rm ? {} : { y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full"
    >
      <SpotlightCard
        className="h-full rounded-2xl border border-white/10 bg-[var(--surface)]/75 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors shadow-lg"
        spotlightColor="rgba(255, 145, 77, 0.12)"
      >
        <div>
          {/* Icon / Lottie Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-5 shrink-0 overflow-hidden">
            {s.lottie ? (
              <LottieOnce
                animationData={s.lottie}
                size={52}
                once
                trigger="inview"
              />
            ) : s.path ? (
              <img
                src={s.path}
                alt=""
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
            ) : null}
          </div>

          <h3 className="text-xl font-bold text-white mb-2.5">
            {s.title}
          </h3>

          <p className="text-sm text-white/70 leading-relaxed mb-6">
            {s.desc}
          </p>
        </div>

        {s.tags && s.tags.length > 0 && (
          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {s.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-[var(--muted)] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </SpotlightCard>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const rm = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: rm ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-20"
    >
      <div className="relative z-10">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
          >
            <SectionHeader
              kicker="What I Offer"
              title="Engineering Services"
              subtitle="End-to-end software solutions spanning robust backend architecture, scalable APIs, and modern frontends"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                s={s}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
