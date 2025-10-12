import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";

export default function ContentCreator() {
  const rm = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: rm ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="content" className="py-20 bg-[var(--surface)]">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          <SectionHeader
            kicker="Content Creator"
            title="ProgrammerLevi Channel"
            subtitle="A Telegram community sharing learning resources, tech insights, and job opportunities."
          />

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left content */}
            <motion.div
              className="flex-1 space-y-4 text-[var(--muted)]"
              variants={fadeUp}
            >
              <p className="text-white/90 leading-relaxed">
                I run{" "}
                <span className="text-[var(--accent)] font-medium">
                  ProgrammerLevi
                </span>
                , a growing Telegram channel dedicated to helping students and
                developers stay updated with technical content, tutorials, and
                real-world opportunities. The goal is to empower learners with
                valuable resources and bridge the gap between education and the
                tech industry.
              </p>

              <a
                href="https://t.me/ProgrammerLevi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2 text-[var(--accent)] transition-all"
              >
                <img
                  src={"telegram.svg"}
                  alt="Telegram"
                  className="h-8 w-8"
                  loading="lazy"
                />
                Join ProgrammerLevi
              </a>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              variants={fadeUp}
            >
              <img
                src="programmerLevi.png" 
                alt="ProgrammerLevi Channel"
                className="max-w-xs md:max-w-sm rounded-2xl border border-[var(--border)] bg-[#1b1b1b]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
