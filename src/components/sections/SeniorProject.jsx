import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import { projects } from "../../data/projects.js";

export default function SeniorProject() {
  const senior = projects.senior?.[0];
  const rm = useReducedMotion();
  if (!senior) return null;
  const card = {
    hidden: { opacity: 0, y: rm ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const cascade = (delay = 0.1) => ({
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: rm ? 0 : 0.06,
        delayChildren: rm ? 0 : delay,
      },
    },
  });
  const item = {
    hidden: { opacity: 0, y: rm ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section id="senior-project" className="py-20">
      <Container>
        <SectionHeader
          kicker="Senior Project"
          title="Jawed AI — Intelligent Quran Recitation Feedback"
          subtitle="A detailed look at my graduation project"
        />
        <motion.div
          className="
            mt-10 grid lg:grid-cols-[1.1fr_1.4fr] gap-8
            rounded-3xl bg-[var(--surface)] border border-[var(--border)]
            p-6 md:p-8 lg:p-10
          "
          variants={card}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          <motion.div
            className="order-1"
            variants={cascade(0.15)}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[#191919]"
              whileHover={rm ? {} : { y: -2, scale: 1.01 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                mass: 0.6,
              }}
            >
              <img
                src={senior.image}
                alt={senior.title}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="mt-4 flex flex-wrap items-center gap-3 text-xs"
              variants={item}
            >
              {senior.tag && (
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                  {senior.tag}
                </span>
              )}
              {senior.date && (
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                  {senior.date}
                </span>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-2 space-y-6"
            variants={cascade(0.2)}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold"
              variants={item}
            >
              {senior.title}
            </motion.h2>

            <motion.p
              className="text-[var(--muted)] leading-relaxed whitespace-pre-line"
              variants={item}
            >
              {senior.description.trim()}
            </motion.p>

            {senior.technologies?.length > 0 && (
              <motion.div variants={item}>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {senior.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-[var(--border)] bg-[#292a2d] text-white/90 px-3 py-1 text-sm"
                      whileHover={rm ? {} : { scale: 1.04 }}
                      whileTap={rm ? {} : { scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {senior.team?.length > 0 && (
              <motion.div className="grid sm:grid-cols-2 gap-6" variants={item}>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Team Members
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {senior.team.map((m) => (
                      <span
                        key={m.name}
                        className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Supervisors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {senior.supervisors.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {senior.achievements?.current?.length > 0 && (
              <motion.div className="grid lg:grid-cols-2 gap-6" variants={item}>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Achievements / Progress
                  </h3>
                  <motion.ul
                    className="list-disc list-outside pl-5 space-y-1 text-white/90 marker:text-white/70"
                    variants={cascade(0.05)}
                    initial="hidden"
                    animate="visible"
                  >
                    {senior.achievements.current.map((a, i) => (
                      <motion.li key={i} variants={item}>
                        {a}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {senior.achievements.nextMilestones?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Next Milestones
                    </h3>
                    <motion.ul
                      className="list-disc list-outside pl-5 space-y-1 text-white/90 marker:text-white/70"
                      variants={cascade(0.05)}
                      initial="hidden"
                      animate="visible"
                    >
                      {senior.achievements.nextMilestones.map((m, i) => (
                        <motion.li key={i} variants={item}>
                          {m}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
