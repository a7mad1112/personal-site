import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Modal from "../ui/Modal.jsx";
import { projects } from "../../data/projects.js";

function useGridCols() {
  const [cols, setCols] = useState(1);
  useEffect(() => {
    const mqSm = window.matchMedia("(min-width: 640px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const update = () => setCols(mqLg.matches ? 3 : mqSm.matches ? 2 : 1);
    update();
    mqSm.addEventListener?.("change", update);
    mqLg.addEventListener?.("change", update);
    return () => {
      mqSm.removeEventListener?.("change", update);
      mqLg.removeEventListener?.("change", update);
    };
  }, []);
  return cols;
}

export default function TrainingProjects() {
  const training = projects.training || [];
  const [activeId, setActiveId] = useState(null);
  const rm = useReducedMotion();
  const cols = useGridCols();

  const activeProject = useMemo(
    () => training.find((p) => p.id === activeId),
    [training, activeId]
  );

  useEffect(() => {
    const idFromHash = new URLSearchParams(location.hash.replace("#", "?")).get(
      "training"
    );
    if (idFromHash) setActiveId(idFromHash);
  }, []);

  const openDetails = (id) => {
    setActiveId(id);
    const url = new URL(location.href);
    url.hash = `training=${id}`;
    history.replaceState(null, "", url.toString());
  };

  const closeDetails = () => {
    setActiveId(null);
    const url = new URL(location.href);
    if (url.hash.includes("training=")) {
      url.hash = "";
      history.replaceState(null, "", url.toString());
    }
  };

  const cardV = {
    hidden: {
      opacity: 0,
      filter: rm ? "none" : "blur(8px)",
      clipPath: rm
        ? "inset(0% 0% 0% 0% round 16px)"
        : "inset(12% 12% 12% 12% round 16px)",
      scale: rm ? 1 : 0.985,
    },
    visible: ({ idx, cols }) => {
      const colIndex = cols > 0 ? idx % cols : 0;
      const rowIndex = cols > 0 ? Math.floor(idx / cols) : 0;
      const base = colIndex * 0.3;
      const rowPad = rowIndex * 0.015;
      return {
        opacity: 1,
        filter: "blur(0px)",
        clipPath: "inset(0% 0% 0% 0% round 16px)",
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 220,
          damping: 24,
          mass: 0.7,
          delay: rm ? 0 : base + rowPad,
        },
      };
    },
  };

  return (
    <section id="training-projects" className="py-20 bg-[var(--surface)]">
      <Container>
        <SectionHeader
          title="Training Projects"
          subtitle="Hands-on projects built during my learning journey"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {training.map((proj, idx) => (
            <motion.article
              key={proj.id}
              variants={cardV}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
                margin: "0px 0px -10% 0px",
              }}
              custom={{ idx, cols }}
              className="group relative flex flex-col rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
              whileHover={rm ? {} : { y: -3 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 22,
                mass: 0.6,
              }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  initial={rm ? {} : { scale: 1.015 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={rm ? {} : { scale: 1.04 }}
                />
              </div>

              <div className="flex flex-col flex-1 p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[var(--muted)]">
                    {proj.date}
                  </span>
                  <span className="text-xs font-medium text-[var(--accent)]">
                    {proj.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white leading-snug">
                  {proj.title}
                </h3>

                {proj.overview && (
                  <p className="text-sm text-[var(--muted)] line-clamp-4">
                    {proj.overview}
                  </p>
                )}

                {proj.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex justify-between items-center pt-2">
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--accent)] font-medium hover:underline"
                  >
                    View on GitHub →
                  </a>

                  <button
                    type="button"
                    onClick={() => openDetails(proj.id)}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Modal
          open={!!activeProject}
          onClose={closeDetails}
          title={activeProject?.title}
        >
          {activeProject && (
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                  {activeProject.tag}
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                  {activeProject.date}
                </span>
                {activeProject.repo && (
                  <a
                    href={activeProject.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[var(--accent)] text-[var(--accent)] px-3 py-1"
                  >
                    GitHub
                  </a>
                )}
              </div>

              {activeProject.overview && (
                <p className="text-white/90 leading-relaxed">
                  {activeProject.overview}
                </p>
              )}

              {activeProject.features?.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/90">
                    {activeProject.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeProject.technologies?.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#292a2d] border border-[var(--border)] rounded-full text-sm text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
}
