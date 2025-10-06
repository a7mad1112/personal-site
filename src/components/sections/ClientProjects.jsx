import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import { projects } from "../../data/projects.js";

export default function ClientProjects() {
  const clients = projects.clients || [];
  const rm = useReducedMotion();
  if (!clients.length) return null;
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
    <section id="projects" className="py-20">
      <Container>
        <SectionHeader
          kicker="Client Projects"
          title="Selected Client Work"
          subtitle="Real-world products built with care and performance in mind"
        />

        <div className="mt-10 space-y-10">
          {clients.map((proj, idx) => (
            <motion.article
              key={proj.id}
              className="
                grid lg:grid-cols-[1.2fr_1.5fr] gap-8
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
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  className="mt-4 flex flex-wrap items-center gap-3 text-xs"
                  variants={item}
                >
                  {proj.tag && (
                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                      {proj.tag}
                    </span>
                  )}
                  {proj.date && (
                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                      {proj.date}
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
                  {proj.title}
                </motion.h2>

                {proj.description && (
                  <motion.p
                    className="text-[var(--muted)] leading-relaxed whitespace-pre-line"
                    variants={item}
                  >
                    {proj.description.trim()}
                  </motion.p>
                )}

                {proj.technologies?.length > 0 && (
                  <motion.div variants={item}>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((tech) => (
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

                {proj.features?.length > 0 && (
                  <motion.div variants={item}>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Key Features
                    </h3>
                    <motion.ul
                      className="list-disc list-inside space-y-1 text-white/90"
                      variants={cascade(0.05)}
                      initial="hidden"
                      animate="visible"
                    >
                      {proj.features.map((f, i) => (
                        <motion.li key={i} variants={item}>
                          {f}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}

                {proj.team?.length > 0 && (
                  <motion.div
                    className="grid sm:grid-cols-2 gap-6"
                    variants={item}
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        Team
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {proj.team.map((m) => (
                          <span
                            key={m.name}
                            className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)]"
                          >
                            {m.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {(proj.achievements?.current?.length ||
                  proj.achievements?.nextMilestones?.length) && (
                  <motion.div
                    className="grid lg:grid-cols-2 gap-6"
                    variants={item}
                  >
                    {proj.achievements?.current?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          Achievements / Progress
                        </h3>
                        <motion.ul
                          className="list-disc list-inside space-y-1 text-white/90"
                          variants={cascade(0.05)}
                          initial="hidden"
                          animate="visible"
                        >
                          {proj.achievements.current.map((a, i) => (
                            <motion.li key={i} variants={item}>
                              {a}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    )}
                    {proj.achievements?.nextMilestones?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          Next Milestones
                        </h3>
                        <motion.ul
                          className="list-disc list-inside space-y-1 text-white/90"
                          variants={cascade(0.05)}
                          initial="hidden"
                          animate="visible"
                        >
                          {proj.achievements.nextMilestones.map((m, i) => (
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
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
